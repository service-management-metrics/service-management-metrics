# Acuerdos de nivel de experiencia

**Un acuerdo de nivel de experiencia añade la pregunta «¿cómo fue usarlo?» a la pregunta «¿cumplió el servicio su objetivo?», y solo funciona cuando las medidas de experiencia se eligen con los usuarios y se mantienen junto a las operativas.**

## Visión general y motivación

Un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) registra lo que un proveedor se compromete a entregar, normalmente en términos que el proveedor puede contar: disponibilidad, tiempo de respuesta, tiempo de resolución. Esas medidas son útiles y también incompletas. Un equipo puede cumplir todos los objetivos del panel mientras los usuarios pasan la semana sorteando inicios de sesión lentos, repitiéndose ante un centro de servicios y esperando aprobaciones. Esta brecha entre un informe en verde y unos usuarios descontentos se llama a veces el efecto sandía: verde por fuera, rojo por dentro (véase el tema 5.1, Métricas de SLA, OLA y XLA).

Un **acuerdo de nivel de experiencia (XLA)** es un acuerdo, entre un proveedor y las personas que usan un servicio, sobre la experiencia que el servicio debe dar. Declara resultados y sensaciones deseados, como «puedo empezar a trabajar a los pocos minutos de llegar» o «confío en que mi solicitud se atenderá», y nombra las medidas que mostrarán si se cumplen. El término se usa en toda la comunidad de la gestión de servicios de TI (ITSM), y su definición exacta varía entre autores y proveedores. Comprueba las publicaciones vigentes del propietario del marco antes de describir un XLA como parte de ITIL, y declara qué uso sigues. Este tema trata el XLA como una idea práctica: un acuerdo que sitúa las medidas de experiencia junto a las operativas.

La idea tiene raíces fuera de la TI. La [experiencia de usuario](https://en.wikipedia.org/wiki/User_experience) es la experiencia global de una persona que usa un producto, un sistema o un servicio, y la [experiencia del cliente](https://en.wikipedia.org/wiki/Customer_experience) es la suma de las interacciones de un cliente con una organización a lo largo del tiempo. La [usabilidad](https://en.wikipedia.org/wiki/Usability) se ocupa de lo eficaz, eficiente y satisfactoriamente que las personas pueden alcanzar sus objetivos. Los equipos ágiles conocen este terreno por el pensamiento de diseño y la investigación de usuarios, y por las revisiones con partes interesadas donde los usuarios reaccionan ante software que funciona. Un XLA lleva la misma atención al servicio en funcionamiento.

La experiencia es difícil de medir y fácil de distorsionar. Una encuesta que solo llega a usuarios contentos, una puntuación de sentimiento ajustada para subir o un único «índice de experiencia» que nadie sabe explicar engañarán tanto como un tiempo de ticket manipulado. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica por completo: las medidas de experiencia son iniciadores de conversación, no cuotas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en las medidas de encuesta del tema anterior (véase el tema 6.1, Métricas de satisfacción del cliente) y añade medidas de comportamiento y de recorrido que no dependen de preguntar.

## Principios clave

- **Empieza por los resultados que importan a las personas.** Pregunta a los usuarios cómo es un buen día y escribe los acuerdos con sus palabras.
- **Empareja la experiencia con las operaciones.** Un XLA se sitúa junto a un SLA, no en su lugar.
- **Usa pocas medidas desde ángulos distintos.** Combina lo que la gente dice, lo que hace y lo que registra el sistema.
- **Mide recorridos además de puntos de contacto.** Una experiencia es todo el camino desde la necesidad hasta el resultado.
- **Sé honesto sobre la incertidumbre.** Los datos de experiencia son ruidosos, y los grupos pequeños necesitan protección.
- **Acuerda los objetivos con los usuarios y revísalos.** Un XLA es un acuerdo vivo, revisado con las personas a las que describe.
- **No uses nunca los datos de experiencia para clasificar a individuos.**

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Puntuación de experiencia | Valoración media de una declaración de experiencia acordada, para un servicio y una audiencia | valoración media de las respuestas válidas a una declaración en una escala fija | puntos de escala | Breve encuesta de pulso, enviada según un calendario | Gestión de niveles de servicio; mejora continua | Retroalimentación de la revisión con las partes interesadas; revisión de resultados del producto | Mensual |
| Tendencia de sentimiento | Dirección del tono en los comentarios de texto libre de un servicio | proporción de comentarios codificados como positivos menos proporción codificada como negativos, por periodo | puntos porcentuales | Comentarios de encuesta y de tickets codificados | Mejora continua | Temas de la retrospectiva | Mensual |
| Eventos de fricción por usuario | Recuento de señales de que un usuario tuvo problemas, normalizado por usuarios activos | (contactos repetidos + elementos reabiertos + inicios de sesión fallidos por encima de un número fijado + solicitudes abandonadas) / usuarios activos | eventos por usuario | Sistema de tickets, registros de identidad, portal de solicitudes | Centro de servicios; gestión de incidentes | Defectos hallados en uso | Mensual |
| Tiempo perdido por problemas de TI | Tiempo estimado que los usuarios pierden por problemas del servicio en un periodo | minutos perdidos autorreportados por usuario, o tiempo medido en estado degradado ponderado por los usuarios afectados | minutos por usuario | Encuesta de pulso; monitorización unida a recuentos de usuarios | Gestión de la disponibilidad; gestión de incidentes | Tiempo de ciclo perdido por bloqueos | Trimestral |
| Tasa de finalización del recorrido | Proporción de usuarios que terminan un recorrido definido sin abandonar ni buscar ayuda | usuarios que completan el recorrido sin un contacto de ayuda / usuarios que empiezan el recorrido | porcentaje | Analítica del portal; vínculos con tickets | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Éxito de las tareas en las pruebas de usabilidad | Mensual |
| Cumplimiento del XLA | Proporción de objetivos de experiencia acordados que se cumplieron en el periodo | objetivos cumplidos / objetivos acordados | porcentaje | El registro del XLA | Gestión de niveles de servicio | Logro de los objetivos de entrega | Trimestral |
| Brecha de experiencia | Diferencia entre el cumplimiento del SLA y la puntuación de experiencia del mismo servicio | posición del cumplimiento del SLA menos posición de la puntuación de experiencia entre servicios, o una comparación escrita | diferencia de posiciones o nota | Informes de SLA y encuesta de pulso | Gestión de niveles de servicio | Definición de terminado frente a la opinión de los usuarios | Trimestral |

Define la audiencia y el periodo de cada medida. Indica cómo se protegen los grupos pequeños: por ejemplo, no se muestra ningún resultado de un grupo de menos de diez personas. Los eventos de fricción cuentan señales, no culpas, así que un evento se asocia a un servicio y a un grupo de usuarios, nunca a la evaluación del rendimiento de una persona con nombre.

## Recomendaciones

### Diseña el acuerdo con los usuarios

**1. Entrevista antes de medir.** Dedica tiempo a una muestra de usuarios de cada grupo importante y pregunta: ¿cómo es un buen día con este servicio?, ¿dónde te hace perder el tiempo?, ¿qué dejarías de hacer si funcionara? Usa los hábitos del [diseño centrado en las personas](https://en.wikipedia.org/wiki/Human-centered_design): observa el trabajo real y anota lo que oyes con las palabras del usuario. Las declaraciones resultantes pasan a ser los objetivos de experiencia del acuerdo.

**2. Escribe las declaraciones de experiencia como resultados.** «Puedo hacer que una persona recién incorporada sea productiva su primera mañana» dice más que «solicitud de acceso de nueva incorporación resuelta en dos días». Mantén cada declaración breve, en primera persona y atada a un servicio. Apunta a entre tres y cinco declaraciones por servicio para que la gente pueda recordarlas.

**3. Elige medidas desde tres ángulos.** Para cada declaración, elige una medida de lo que la gente dice (una pregunta de pulso o un tema de comentarios), una de lo que la gente hace (finalización del recorrido, contactos repetidos, solicitudes abandonadas) y, donde sea posible, una de lo que registra el sistema (latencia de los pasos del recorrido). Cuando las tres discrepan, has encontrado algo que investigar.

**4. Acuerda los objetivos con ligereza.** Al principio, fija una dirección («reducir el tiempo perdido») y una fecha de revisión en lugar de un número duro. Los objetivos duros para medidas de experiencia nuevas invitan a la manipulación antes de que se entienda la medida. Cuando aparezca un objetivo, hazlo un rango y di quién lo acordó.

### Recoge y lee los datos

**5. Usa preguntas de pulso breves y regulares.** Una pregunta sobre una declaración, hecha a intervalos regulares, es más fácil de responder que una larga encuesta anual. Rota las declaraciones, mantén estable la redacción y evita preguntar a la misma persona más de una vez en un periodo fijado. Vincula el diseño del pulso con los principios de encuesta del tema anterior (véase el tema 6.1, Métricas de satisfacción del cliente).

**6. Lee los comentarios con un método.** Las herramientas de [análisis de sentimiento](https://en.wikipedia.org/wiki/Sentiment_analysis) pueden ordenar grandes volúmenes de texto y malinterpretan el sarcasmo, la jerga y el contexto. Trata la salida de la herramienta como una primera pasada, haz que una persona compruebe una muestra cada mes y mantén una breve lista de temas que codificas a mano. El fin del análisis es encontrar temas de los que hablar con los usuarios, no producir una puntuación.

**7. Añade señales de comportamiento del recorrido.** Instrumenta los recorridos que importan a los usuarios, con su conocimiento: ¿dónde empiezan, dónde abandonan y dónde piden ayuda? La [monitorización de usuarios reales](https://en.wikipedia.org/wiki/Real_user_monitoring) de los tiempos de carga de las páginas, los errores y los pasos da una visión que las encuestas no pueden. Dile a los usuarios qué recoges, limítalo a lo que necesitas y agrégalo antes de compartirlo.

**8. Protege a los grupos pequeños y a los individuos.** Los datos de experiencia pueden revelar quién lo está pasando mal. Agrega los resultados, suprime los grupos por debajo de un tamaño acordado y no uses nunca los datos en evaluaciones del rendimiento. Decide quién puede ver los comentarios en bruto y almacénalos en consecuencia. En entornos regulados, consulta a especialistas en privacidad antes de recoger datos de comportamiento.

### Usa el acuerdo

**9. Muestra SLA y XLA lado a lado.** En la misma página, presenta el cumplimiento operativo y las medidas de experiencia de cada servicio. El emparejamiento es lo importante: un SLA en verde con una puntuación de experiencia a la baja es una invitación a una conversación, y una puntuación de experiencia en verde con SLA incumplidos merece una mirada a lo que no se está diciendo a los usuarios.

**10. Celebra una revisión regular de la experiencia con los usuarios.** Reúnete cada trimestre con representantes de los grupos de usuarios, muestra los datos, pregunta qué significan y acuerda una o dos mejoras que probar. Incluye al centro de servicios y al equipo de producto, ya que la causa de una mala experiencia suele estar en el producto, no en el soporte.

**11. Financia las correcciones.** Un acuerdo que identifica fricción y luego la deja en su sitio enseña a los usuarios que las medidas son teatro. Pon los dos o tres principales problemas de experiencia en la lista de pendientes con responsables y fechas, e infórmalos en la siguiente revisión. Véanse las métricas de mejora continua más adelante en este libro (véase el tema 9.5, Métricas de mejora continua).

**12. Revisa el acuerdo según cambian los servicios y los usuarios.** Retira las declaraciones que ya no importan y añade nuevas. Registra los cambios y márcalos en los gráficos de tendencia, como harías con cualquier definición de métrica.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Puntuación de experiencia | Encuestar solo a usuarios satisfechos; programar la encuesta tras buenos eventos; reformular la declaración para que sea más fácil estar de acuerdo | Tasa de respuesta y composición de los encuestados; registro de estabilidad de la redacción; leer los comentarios |
| Tendencia de sentimiento | Ajustar la herramienta o la lista de temas hasta que la tendencia sube; excluir canales negativos | Comprobación humana de una muestra mensual; mantener una guía de codificación fija y registrar los cambios |
| Eventos de fricción por usuario | Redefinir los eventos para que cuenten menos; desalentar los contactos repetidos dificultando el acceso al centro | Volumen de contactos por canal; tasa de abandono en el centro de servicios (véase el tema 3.1, Métricas del centro de servicios) |
| Tiempo perdido por problemas de TI | Preguntar de un modo que ancle estimaciones bajas; contar solo los incidentes graves | Comparar el tiempo autorreportado con el tiempo degradado medido; revisión de la redacción de la encuesta |
| Tasa de finalización del recorrido | Definir el recorrido de forma tan estrecha que el fallo quede fuera del ámbito; dirigir los casos difíciles a otro canal | Definición del recorrido en el registro; tasa de contactos de ayuda y escaladas |
| Cumplimiento del XLA | Fijar objetivos que ya se cumplen; definir un conjunto muy pequeño de objetivos | Revisar la fijación de objetivos con los usuarios; mostrar el cumplimiento con la tendencia y el historial de objetivos |
| Brecha de experiencia | Elegir los servicios o periodos que mejor se ven; cambiar qué SLA se comparan | Conjunto de comparación fijo acordado de antemano; mostrar todos los servicios |

Una lectura sana es una imagen de la experiencia que coincide con los comentarios y con la conversación de revisión con los usuarios, un conjunto reducido de medidas que cambian despacio y por razones que el equipo puede explicar, y una lista de pendientes de correcciones de experiencia que se acorta.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Solo SLA | Claro, contable, contractual | Pasa por alto lo que sienten los usuarios; puede estar en verde mientras los usuarios están descontentos |
| Solo XLA | Cercano a lo que valoran los usuarios | Más difícil de medir y comparar; débil como base de contratos con proveedores |
| SLA con XLA | Da ambas vistas y expone la brecha | Más trabajo; necesita confianza y juicio para leer los desacuerdos |
| Medidas de experiencia basadas en encuestas | Voz directa de los usuarios | Sesgo de respuesta; carga para quienes responden |
| Medidas de comportamiento | Sin carga de encuesta; objetivas | Necesitan instrumentación y cuidado con la privacidad; muestran qué pasó, no por qué |
| Índice único de experiencia | Titular fácil | Esconde el detalle; fácil de manipular y difícil de explicar |

La respuesta en prosa es usar el XLA como una adición, introducida para unos pocos servicios donde la brecha entre las operaciones y la experiencia ya es visible. No sustituyas los SLA contractuales por medidas de experiencia que los proveedores no pueden controlar. Mantén los compromisos legales y comerciales en el SLA y usa el XLA para impulsar la mejora y la conversación.

## Preguntas para debatir con tu equipo

**1. Para nuestro servicio más importante, ¿cómo es un buen día para los usuarios, con sus palabras?**
Reúne a dos o tres usuarios, o reutiliza entrevistas recientes, y anota sus declaraciones. El facilitador debe resistirse a reformularlas en términos operativos. Compara las declaraciones con el SLA actual y pregunta cuáles cubre y cuáles ignora. Las brechas son candidatas a medidas de experiencia.

**2. ¿Dónde discrepan nuestros paneles en verde y las historias de nuestros usuarios?**
Pide al equipo un caso reciente en que un servicio cumplió sus objetivos y los usuarios se quejaron. Rastreen el caso por los datos: ¿qué medimos y qué pasamos por alto? La conversación suele sacar a la luz un paso ausente, un traspaso o un reloj que se detuvo pronto. Registren el caso como ejemplo para la próxima revisión con los usuarios.

**3. ¿Qué tres medidas usaríamos para saber si esta declaración de experiencia es cierta?**
Elijan una declaración y escojan una medida de lo que la gente dice, una de lo que hace y una de lo que registra el sistema. Pregunten qué podría pasar por alto cada una y cómo podría manipularse. Acuerden el conjunto más pequeño que convencería a un usuario escéptico.

**4. ¿Qué recogemos sobre los usuarios que quizá no esperan y estarían cómodos con ello?**
Enumeren las fuentes de datos de comportamiento y el propósito de cada una. Pidan a un representante de los usuarios que reaccione. El facilitador debe tratar la incomodidad como información sobre el diseño, no como un obstáculo. Decidan qué dejar de recoger, qué agregar y quién puede ver los datos en bruto.

**5. ¿Qué haríamos si la puntuación de experiencia cayera mientras todos los SLA siguen en verde?**
Ensayen la respuesta. ¿Quién mira primero, qué comprueba y con quién habla? Decidan si el equipo confiaría en la puntuación de experiencia o buscaría formas de descartarla. La respuesta muestra cuán en serio se toma el equipo el acuerdo.

**6. ¿Qué correcciones de experiencia hemos prometido y qué pasó con ellas?**
Revisen las dos últimas reuniones de revisión con los usuarios. Para cada compromiso, muestren la fecha, el responsable y el resultado. Si la lista está vacía u obsoleta, hablen de por qué. Acuerden una corrección que entregar antes de la próxima revisión y una forma de decir a los usuarios que ocurrió.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de producto tienen buena parte de la causa de una mala experiencia: pantallas confusas, pasos lentos, errores poco claros. Las medidas de experiencia les dan evidencia del uso en vivo y alimentan directamente el refinamiento. Los equipos deben leer los temas de los comentarios antes de cada sesión de planificación y conectar las medidas de recorrido con la lista de pendientes. No deben tratar la puntuación de experiencia como un objetivo del equipo. Es información sobre el servicio que comparten con operaciones.

### Equipos de servicio y de operaciones

Los equipos de operaciones ven la fricción primero: contactos repetidos, soluciones provisionales y llamantes enfadados. Las medidas de experiencia les dan una forma de mostrar lo que el SLA esconde y una razón para corregir causas en lugar de cerrar tickets más rápido. Deben mantener la línea en las definiciones y el muestreo, evitar dirigir a los usuarios a canales que quedan mejor y leer enteros los comentarios descontentos (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes eligen si un XLA es una conversación o un marcador. Deben preguntar qué dicen los datos de experiencia sobre dónde invertir, evitar vincular la retribución a un índice de experiencia y proteger la privacidad de los datos del personal. La gobernanza debe pedir las definiciones, el muestreo y el historial de cambios, y tratar un salto inexplicado en una medida de experiencia como un motivo para revisar el método.

### Clientes y usuarios

Los usuarios son los autores del acuerdo. Deben ser invitados a describir cómo es lo bueno, ver los resultados y saber qué cambió. Deben saber qué se recoge sobre ellos y por qué, y tener una forma de decir que no. Los usuarios a quienes se pregunta a menudo y que no ven mejorar nada dejarán de responder, y el silencio hará que los datos parezcan mejores que la realidad.

## En la práctica: un ejemplo de gestión de servicios

Una empresa de servicios profesionales de tamaño medio opera un servicio interno de TI para 1800 empleados. Los números siguientes son ilustrativos.

El informe mensual de SLA muestra un 99,8 por ciento de disponibilidad de la plataforma de colaboración y un 96 por ciento de incidentes resueltos dentro del objetivo. El director de TI está satisfecho, pero los consultores en las sedes de los clientes siguen quejándose de un inicio de sesión lento. La responsable del servicio propone un piloto de XLA para la plataforma de colaboración.

En entrevistas con 12 consultores surgen tres declaraciones: «puedo unirme a una llamada con un cliente a los dos minutos de decidirlo», «no tengo que llamar a TI para recuperar el acceso a mi cuenta» y «cuando algo se rompe, sé lo que está pasando». El equipo elige medidas para cada una. Para la primera, toma la valoración de pulso de la declaración y el tiempo medido desde el comienzo del inicio de sesión hasta la unión a la llamada a partir de la monitorización de usuarios reales del cliente, agregado por región. Para la segunda, cuenta los contactos de restablecimiento de contraseña por usuario activo y mes. Para la tercera, hace seguimiento de la proporción de incidentes en que el mensaje de estado se actualizó en 30 minutos, y hace la pregunta de pulso sobre ello.

Los dos primeros meses de datos muestran que el tiempo mediano de inicio de sesión a unión a la llamada es bueno en la región de la sede central pero largo en otras dos, y que los contactos de restablecimiento de contraseña por usuario son tres veces mayores para el personal con portátiles gestionados que para el resto. La puntuación de experiencia de la primera declaración es de 3,1 sobre 5 frente a 4,2 del personal de oficina. El SLA está en verde en ambos casos. La responsable del servicio lleva el hallazgo a la revisión con los usuarios. El equipo acuerda dos mejoras: ajustar la configuración del inicio de sesión único para las regiones remotas y cambiar los parámetros de renovación de tokens en los portátiles gestionados. Tres meses después, el tiempo mediano baja, los contactos de restablecimiento por usuario bajan y la puntuación de experiencia sube a 3,8. El director acuerda mantener el XLA para este servicio, añadirlo a otro más y no fijar ningún objetivo numérico hasta la próxima revisión.

## Agilidad, IA, automatización y analítica

### Agilidad

Acuerda las medidas de experiencia con los usuarios y revísalas según evolucione el servicio, con implicación continua de las partes interesadas. La precaución es que un objetivo de experiencia fijado solo por el proveedor no describirá lo que sienten los usuarios.

### IA

Las funciones de IA cambian directamente la experiencia, así que incluye los recorridos que las usan y mide el resultado del usuario, no la confianza del modelo. Empareja las puntuaciones de experiencia con la finalización de tareas y la escalada a una persona. La precaución es que un chatbot que resulta agradable mientras falla la tarea halaga la puntuación.

### Automatización

Recoge los eventos de fricción y la finalización de recorridos automáticamente, con consentimiento y reglas de privacidad, y mide la recogida por su cobertura. La precaución es que los datos automáticos de experiencia sobre individuos pueden convertirse en vigilancia, así que agrega y minimiza.

### Analítica

Reporta la puntuación de experiencia con las medidas operativas en la misma página, y la brecha entre ellas. La decisión a la que informa es qué servicio mejorar aunque su SLA esté en verde. La precaución es que la brecha puede ser un artefacto de la medición, así que comprueba la muestra.

## Perspectiva sectorial

**Startup.** El contacto estrecho con los usuarios facilita las entrevistas. Resiste la tentación de construir un marco: escribe tres declaraciones de experiencia para el servicio principal, pregunta a los usuarios por ellas cada mes y añade una medida de comportamiento. Los acuerdos formales vienen después.

**Pequeña empresa.** El personal es poco y a menudo comparte responsable con TI. Usa conversaciones y un pulso mensual muy breve. Ten cuidado con los datos de comportamiento, ya que los grupos pequeños son fácilmente identificables.

**Gran empresa.** La escala trae muchos grupos de usuarios y proveedores. Define declaraciones de experiencia por servicio y perfil, mantén paneles por servicio y evita un índice de experiencia único para toda la empresa. Alinea el XLA con los contratos de proveedores para que estos aporten datos sin que se les exijan medidas que no pueden influir.

**Gobierno y sector público.** Los servicios suelen dirigirse tanto al público como al personal, con deberes de accesibilidad, lenguaje claro e igualdad de acceso. Incluye la accesibilidad en las declaraciones y en las medidas de experiencia, prueba con usuarios que dependen de tecnologías de apoyo y protege los datos personales conforme a la ley. Donde se exija reporte público, reporta los métodos con los resultados (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es moderado. Las entrevistas con usuarios llevan unos días por servicio. Una encuesta de pulso mensual necesita una herramienta de encuestas, que muchas organizaciones ya tienen. Las medidas de comportamiento necesitan algo de instrumentación, que puede proceder de la monitorización existente y de la analítica del portal. La revisión con los usuarios lleva unas horas cada trimestre. Codificar comentarios lleva una hora o dos cada mes.

El retorno está en encontrar problemas que los SLA no muestran, como recorridos lentos en regiones o dispositivos concretos, y en dirigir el dinero de mejora a lo que los usuarios valoran. El tiempo perdido por problemas de TI puede convertirse en un costo con las tarifas de tu propio personal si lo mides con cuidado. Evita afirmaciones genéricas sobre ganancias de productividad. Construye el caso a partir de tu propia línea base: tiempo perdido por usuario, eventos de fricción por usuario y contactos repetidos, antes y después de una corrección. Cuenta además el costo evitado de las soluciones provisionales, como las herramientas en la sombra que se adoptan porque el servicio oficial es incómodo.

## Antipatrones y trampas

- **Sustituir los SLA por XLA.** Los contratos necesitan compromisos contables. Mantén ambos y muéstralos juntos.
- **Un índice compuesto de experiencia.** Esconde la causa e invita a la manipulación. Muestra unas pocas medidas separadas.
- **Definir la experiencia sin usuarios.** Las declaraciones escritas en una sala de reuniones describen la visión del proveedor. Entrevista y prueba con los usuarios.
- **Encuestar hasta que la gente deja de responder.** Mantén breves los pulsos y rota los temas.
- **Recoger datos de comportamiento sin decírselo a nadie.** Rompe la confianza y puede infringir la ley. Sé abierto sobre qué se recoge y por qué.
- **Usar los datos de experiencia en evaluaciones del rendimiento.** Convierte una herramienta de aprendizaje en vigilancia y destruye el reporte honesto.
- **Corregir la medida, no la causa.** No redirijas a los usuarios a un canal más amable para mejorar un número. Corrige el recorrido.
- **Dejar los hallazgos en una diapositiva.** Financia las correcciones de experiencia y haz seguimiento de ellas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Objetivos de experiencia | Implícitos o ausentes | Escritos por el proveedor para algunos servicios | Declaraciones escritas con los usuarios para los servicios clave | Declaraciones revisadas y ajustadas cada trimestre con los grupos de usuarios | Compartidas entre servicios y proveedores, con propiedad conjunta con los usuarios |
| Medición | Encuestas ocasionales | Encuesta de pulso para un servicio | Medidas desde tres ángulos (decir, hacer, sistema) para cada declaración | Medidas con tendencias, protegidas para los grupos pequeños y comparadas con los SLA | Datos combinados entre proveedores, con opciones de privacidad controladas por el usuario |
| Acción | Quejas atendidas una por una | Correcciones hechas ad hoc | Principales problemas de experiencia en la lista de pendientes con responsables | Correcciones financiadas, con seguimiento e informadas a los usuarios | Mejora coordinada entre equipos, proveedores y usuarios, con el aprendizaje compartido |

## Lista de verificación

- [ ] Cada servicio con XLA tiene entre tres y cinco declaraciones de experiencia escritas con los usuarios.
- [ ] Cada declaración tiene medidas de al menos dos ángulos (decir, hacer, sistema).
- [ ] Las medidas de SLA y de experiencia aparecen en la misma página para cada servicio.
- [ ] Las encuestas de pulso son breves, regulares y estables en su redacción.
- [ ] Los comentarios se codifican con una guía estable y una persona comprueba una muestra mensual.
- [ ] Los grupos por debajo de un tamaño acordado se suprimen en los informes.
- [ ] Los datos de comportamiento recogidos se comunican a los usuarios y se limitan a lo necesario.
- [ ] Ninguna medida de experiencia se usa en evaluaciones individuales del rendimiento.
- [ ] Una revisión trimestral con representantes de los usuarios está en el calendario.
- [ ] Los principales problemas de experiencia tienen responsables y fechas en la lista de pendientes.

## Prompts de IA

**Redacta declaraciones de experiencia a partir de notas de entrevistas.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Encuentra la brecha entre el SLA y la experiencia.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Revisa un enfoque de privacidad para las medidas de comportamiento.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Prepara una revisión trimestral de la experiencia con los usuarios.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección de una medida de experiencia antes de añadirla a un panel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de XLA lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Un XLA añade objetivos y medidas de experiencia a los objetivos operativos, y complementa al SLA.
- Escribe las declaraciones de experiencia con los usuarios, con sus palabras, y ata cada una a medidas de lo que la gente dice, hace y registra el sistema.
- Muestra juntos los resultados de SLA y de experiencia y trata el desacuerdo como una invitación a investigar.
- Protege a los usuarios: comunica lo que recoges, agrégalo, suprime los grupos pequeños y mantenlo fuera de las evaluaciones del rendimiento.
- Evita un índice único de experiencia y evita los objetivos duros antes de entender las medidas.
- Financia las correcciones que revelan los datos y di a los usuarios qué cambió.

## Referencias y lecturas complementarias

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
