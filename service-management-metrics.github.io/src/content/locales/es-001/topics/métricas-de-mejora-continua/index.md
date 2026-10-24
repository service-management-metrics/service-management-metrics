# Métricas de mejora continua

**La mejora es un hábito de notar, probar y comprobar, así que mide si las ideas se convierten en cambios, si se comprueba el efecto de los cambios y si los mismos problemas siguen volviendo, y mantén el trabajo en manos de las personas que lo hacen.**

## Visión general y motivación

Uno de los principios del Manifiesto Ágil dice que, a intervalos regulares, el equipo reflexiona sobre cómo ser más eficaz y ajusta y perfecciona su comportamiento en consecuencia. ITIL expresa la misma convicción en sus principios rectores y en su práctica de mejora continua: los servicios y la forma de operarlos deben mejorarse todo el tiempo, en pasos pequeños, basándose en la evidencia. Ambos piden lo mismo, que es un hábito permanente de mejora y no un programa ocasional.

La mayoría de las organizaciones cree hacerlo. Muchas tienen una reunión al estilo de una retrospectiva que genera una lista de acciones, un registro de ideas de mejora o un plan anual de mejora. El fallo habitual es que la lista crece y se hace poco. Las acciones se acuerdan en una reunión y se olvidan. Las mejoras se hacen y nunca se comprueban, así que nadie sabe si ayudaron. El mismo problema vuelve con otro nombre. Las métricas de mejora continua son la forma de distinguir una organización que está mejorando de una que solo habla de ello.

El [proceso de mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process) tiene hondas raíces en la gestión de la calidad. El ciclo [Planificar-Hacer-Verificar-Actuar](https://en.wikipedia.org/wiki/PDCA) (PDCA), asociado con W. Edwards Deming y Walter Shewhart, describe la mejora como experimentos pequeños repetidos: planifica un cambio, pruébalo, comprueba el resultado y actúa sobre lo que aprendes. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) es el término japonés para la mejora continua de las prácticas de trabajo, con la participación de todos. Ambos proceden de la [manufactura esbelta](https://en.wikipedia.org/wiki/Lean_manufacturing) y del Sistema de Producción de Toyota, y ambos son hoy vocabulario estándar en el trabajo de servicios y de software. ITIL 4 ofrece un modelo de mejora continua cuyos pasos preguntan cuál es la visión, dónde estás ahora, dónde quieres estar, cómo llegarás, actuar, si llegaste y cómo mantener el impulso. Es un aviso para la conversación, no un procedimiento que seguir mecánicamente.

Ayudan algunas ideas.

- **Mejora la restricción.** La [teoría de las restricciones](https://en.wikipedia.org/wiki/Theory_of_constraints), desarrollada por Eliyahu Goldratt, dice que el caudal de un sistema está limitado por su parte más lenta, así que las mejoras en otros lugares aportan poco. Encuentra la restricción con las medidas de flujo de antes en el libro y mejora esa primero (véase el tema 2.3, Trabajo en curso y teoría de colas).
- **Encuentra causas, no síntomas.** El [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis) busca las causas subyacentes de un problema para que corregirlas impida su retorno. El uso excesivo de métodos sencillos puede engañar cuando los problemas tienen varias causas, así que examina los factores contribuyentes.
- **Cuestiona los supuestos.** El [aprendizaje de doble bucle](https://en.wikipedia.org/wiki/Double-loop_learning), un término de Chris Argyris y Donald Schön, va más allá de corregir la acción para examinar las creencias y reglas que llevaron a ella. Los equipos que solo corrigen síntomas (aprendizaje de bucle simple) tienden a encontrarse otra vez con los mismos problemas.
- **La mejora necesita capacidad.** Un equipo al límite no tiene espacio para mejorar. La capacidad protegida es una condición previa, y un ritmo que pueda sostenerse forma parte de lo que hace posible la mejora (véase el tema 9.2, Métricas de satisfacción y bienestar).

Las métricas de mejora invitan a su propia manipulación. Si el número de acciones completadas es un objetivo, los equipos acuerdan acciones triviales. Si los ahorros de las mejoras son un objetivo, las afirmaciones se inflan. Si el número de ideas presentadas es un objetivo, las ideas inundan y no se actúa sobre ninguna. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: mide si las mejoras funcionan, y no cuán ocupado parece el programa de mejora (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **La mejora pertenece a las personas que hacen el trabajo.** Son las primeras que ven los problemas y las posibles correcciones.
- **Trabaja en pasos pequeños y comprueba cada uno.** Los experimentos pequeños reducen el riesgo y aceleran el aprendizaje.
- **Mide el seguimiento y el efecto, no la actividad.** Las acciones completadas y los efectos confirmados importan más que las ideas generadas.
- **Mejora primero la restricción.** El esfuerzo lejos del cuello de botella aporta poco.
- **Corrige las causas.** Busca factores contribuyentes y cuestiona los supuestos que hay detrás.
- **Protege la capacidad para la mejora.** No ocurrirá en un tiempo libre que no existe.
- **Celebra el aprendizaje, incluido el de los experimentos fallidos.** Una idea probada que no funcionó es información.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de seguimiento de acciones | Proporción de acciones de mejora acordadas en las revisiones que se completaron en su fecha acordada | acciones completadas en fecha / acciones que vencen en el periodo | porcentaje | Registro de mejoras o lista de pendientes del equipo | Mejora continua | Acciones de reflexión entregadas | Mensual |
| Antigüedad de la lista de pendientes de mejoras | Antigüedad de los elementos de mejora abiertos, con atención a los más antiguos | mediana y percentil 85 de la antigüedad en días de los elementos abiertos; antigüedad del más antiguo | días | Registro de mejoras | Mejora continua | Antigüedad de la lista de pendientes | Mensual |
| Tasa de comprobación de efectos | Proporción de mejoras completadas cuyo efecto se comprobó frente a una línea base | mejoras completadas con una comprobación de antes y después registrada / mejoras completadas | porcentaje | Registro de mejoras con campos de línea base y de resultado | Mejora continua; medición y elaboración de informes | Aprendizaje de los experimentos | Trimestral |
| Tiempo de la idea a la prueba | Tiempo desde que se plantea una idea de mejora hasta la primera prueba en el trabajo real | mediana y percentil 85 de los días desde que se plantea hasta la primera prueba | días | Registro de mejoras | Mejora continua | Retroalimentación rápida sobre los cambios | Mensual |
| Proporción de ideas de primera línea | Proporción de ideas de mejora planteadas por las personas que hacen el trabajo, contada a nivel de equipo | ideas planteadas por miembros del equipo que hacen el trabajo / ideas planteadas | porcentaje | Registro de mejoras | Mejora continua | Equipos autoorganizados | Trimestral |
| Tasa de problemas repetidos | Proporción de problemas que reaparecen tras una mejora destinada a eliminar su causa | problemas que reaparecen en un periodo declarado tras cerrarse una mejora relacionada / mejoras cerradas con una causa relacionada | porcentaje | Registros de incidentes, problemas y mejoras vinculados por causa | Gestión de problemas; mejora continua | Defecto escapado tras una corrección | Trimestral |
| Proporción de capacidad para mejora | Proporción de la capacidad del equipo dedicada a trabajo de mejora | capacidad o elementos completados etiquetados como mejora / capacidad o elementos completados totales | porcentaje | Tipos de trabajo del gestor | Mejora continua; gestión de la capacidad y el rendimiento | Tiempo para la reflexión y la excelencia técnica | Mensual |

Define «elemento de mejora» en el registro y mantenlo separado del trabajo ordinario de la lista de pendientes y de las reparaciones correctivas. El reloj del seguimiento empieza cuando la acción se acuerda con un responsable y una fecha. Una comprobación de efecto requiere una línea base registrada antes del cambio y un indicador definido, y el resultado puede ser «sin efecto» o «no se puede saber». La tasa de problemas repetidos depende de una causa registrada, y la regla de emparejamiento se anota en el registro. Todas las medidas describen equipos y el sistema, no individuos.

## Recomendaciones

### Haz visible y con propietario la mejora

**1. Mantén una lista visible de mejoras por equipo.** Pon los elementos de mejora donde el equipo ya mira, como su tablero o su lista de pendientes, y etiquétalos. Cada elemento tiene un responsable, un problema declarado, un efecto esperado, un indicador y una fecha. Una lista que vive en otra herramienta o en un documento que nadie abre decaerá. Muestra los elementos más antiguos para que la lista no pueda esconderse.

**2. Celebra una reflexión regular y breve.** Con una cadencia estable el equipo pregunta qué va bien, qué se interpone y qué probar a continuación. Hazla breve y específica y termínala con un número reducido de acciones con responsables. Si tu equipo decide usar un formato con nombre para esto, como una retrospectiva, es elección del equipo. El principio es el hábito regular.

**3. Acuerda menos acciones y termínalas.** Dos o tres acciones que se completan enseñan más que una docena que no. Comprueba la tasa de seguimiento. Cuando las acciones se retrasan repetidamente, pregunta por qué: propiedad poco clara, falta de capacidad o acciones demasiado grandes. Divide las grandes en pasos pequeños.

**4. Protege la capacidad.** Reserva una proporción de la capacidad para la mejora y planifícala como cualquier otro trabajo (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). Cuando el equipo esté sobrecargado, reduce la entrada de trabajo nuevo en lugar de cancelar la mejora, ya que la mejora es a menudo lo que reduce la sobrecarga. Haz seguimiento de la proporción usada.

### Encuentra lo que importa

**5. Busca la restricción.** Usa los datos de flujo para encontrar dónde espera el trabajo y qué limita el caudal. Las mejoras en la restricción elevan la producción de todo el sistema. Las mejoras en otros lugares pueden limitarse a mover el montón de trabajo. Aplica la misma visión al manejo de incidentes, a la aprobación de cambios y al cumplimiento de solicitudes.

**6. Usa evidencia para elegir.** Elige las mejoras a partir de datos y de las personas más cercanas al dolor: incidentes repetidos, esperas largas, retrabajo, quejas de los usuarios, listas de obstáculos. Vincula cada mejora con un problema registrado. Esto ata el registro de mejoras a la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**7. Busca causas y factores contribuyentes.** Para los problemas recurrentes, pregunta por qué más de una vez y busca condiciones además de desencadenantes. Cuidado con detenerte en la primera causa plausible, o en una persona. Cuestiona los supuestos: ¿por qué trabajamos así y sigue haciendo falta la regla? Ahí es donde rinde el aprendizaje de doble bucle.

### Prueba en pequeño y comprueba

**8. Ejecuta experimentos pequeños con una línea base.** Declara el cambio, el efecto esperado y el indicador. Registra la línea base antes del cambio. Pruébalo a pequeña escala durante un periodo breve y compara después. El ciclo Planificar-Hacer-Verificar-Actuar es un marco sencillo. Cuanto menor sea el tiempo de la idea a la prueba, más rápido es el aprendizaje.

**9. Comprueba el efecto y regístralo con honestidad.** Tras un cambio, compara el indicador con la línea base y con lo que más cambió. Registra si el efecto se vio, no se vio o no está claro. Los equipos que nunca encuentran «sin efecto» probablemente no comprueban con cuidado (véase el tema 6.5, Realización de valor y resultados de negocio).

**10. Conserva lo que funciona y abandona lo que no.** Extiende a otros equipos las mejoras que funcionan donde encajen y retira los cambios que añadieron costo sin beneficio. Vuelve a revisar los cambios más antiguos, ya que las condiciones cambian. Los estándares deben evolucionar a medida que aprende el equipo.

### Mantén vivo el hábito

**11. Haz seguro sugerir y detener.** La gente plantea ideas cuando las anteriores fueron oídas y se actuó sobre ellas. Calla cuando las ideas se desvanecen o traen trabajo extra para quien las propone. Responde a cada idea, aunque la respuesta sea «ahora no», con un motivo. Permite que los equipos detengan las mejoras que no funcionan.

**12. No conviertas la mejora en un objetivo.** No fijes objetivos para el número de ideas, el número de acciones cerradas ni los ahorros reclamados. Reporta el seguimiento, las comprobaciones de efecto, la tasa de repeticiones y algunas historias. Compara cada equipo con su propio pasado y comparte las buenas ideas entre equipos sin clasificarlas.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de seguimiento de acciones | Acordar acciones triviales; mover las fechas de vencimiento; cerrar sin hacer | Revisar el tamaño y el valor de las acciones; cambios de fecha registrados; tasa de comprobación de efectos |
| Antigüedad de la lista de pendientes de mejoras | Cerrar elementos antiguos como «no se hará» sin una decisión; dividir elementos para reiniciar la antigüedad | Registrar los motivos del cierre; hacer seguimiento de los elementos cerrados sin acción; revisar los más antiguos |
| Tasa de comprobación de efectos | Registrar una comprobación sin línea base; comprobar solo los éxitos | Línea base fechada antes del cambio; incluir los resultados nulos y negativos |
| Tiempo de la idea a la prueba | Llamar prueba a un plan; probar variaciones triviales | Definir una prueba como un cambio en el trabajo real; mirar la importancia de las ideas probadas |
| Proporción de ideas de primera línea | Responsables que presentan ideas con nombres del personal; cuotas obligatorias de ideas | Ideas por autor registradas a nivel de equipo; sin cuotas; preguntar al equipo |
| Tasa de problemas repetidos | Registrar causas distintas para el mismo problema; cerrar el registro anterior bajo otro tipo | Emparejar por causa con una regla registrada; revisión por alguien ajeno al equipo |
| Proporción de capacidad para mejora | Etiquetar el trabajo ordinario como mejora; programar tiempo que luego se usa para la entrega | Muestrear los elementos por tipo; comparar con el tiempo realmente gastado |

Una lectura sana es una lista corta con acciones que terminan, ideas que llegan a prueba en días o semanas, efectos que se comprueban y a veces decepcionan, problemas repetidos a la baja y una capacidad protegida que se usa.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Grandes programas de mejora | Visibles; pueden abordar grandes problemas | Lentos; desconectados del trabajo diario |
| Pequeños experimentos continuos | Aprendizaje rápido, poco riesgo | Pueden pasar por alto problemas estructurales |
| Equipo central de mejora | Destreza y coherencia | Lejos del trabajo; las ideas se atascan |
| Mejora poseída por el equipo | Pertinente y motivada | Calidad variable; necesita apoyo |
| Esquemas de ideas con premios | Generan volumen | Cuotas y manipulación; poca calidad |
| Selección basada en la evidencia | Se centra en los problemas reales | Necesita datos y tiempo |
| Comprobaciones formales de efectos | Aprendizaje honesto | Esfuerzo; puede parecer burocrático si es pesado |
| Sin comprobaciones | Rápido | Sin aprendizaje sobre lo que funciona |

La respuesta en prosa es mantener la mejora cerca de los equipos, en pequeños experimentos con comprobaciones ligeras de los efectos, apoyada por unas pocas personas que ayudan con los datos y el método y por líderes que protegen la capacidad y escuchan los resultados.

## Preguntas para debatir con tu equipo

**1. ¿Qué mejora acordamos en nuestra última revisión y ocurrió?**
Miren las acciones. Para cada una, pregunten si se completó, se abandonó o se olvidó, y por qué. El facilitador debe anotar los motivos. Acuerden cuántas acciones puede terminar realmente el equipo y recorten la lista siguiente a esa cifra.

**2. ¿Qué cambio que hicimos últimamente sabemos que ayudó y cómo lo sabemos?**
Elijan un cambio reciente y busquen la línea base y el resultado. Si no hay ninguno, hablen de cómo comprobarlo la próxima vez. Decidan un indicador sencillo para el siguiente experimento.

**3. ¿Qué sigue volviendo por muchas veces que lo corrijamos?**
Enumeren los problemas recurrentes. Para uno, pregunten por qué vuelve y qué supuesto hay detrás del enfoque actual. Consideren si la corrección trata un síntoma. Elijan un problema recurrente para mirar con más profundidad.

**4. ¿Dónde espera más el trabajo y cuál es la restricción?**
Usen los datos de flujo. Pregunten si las mejoras en que trabaja el equipo tocan la restricción. Si no, hablen de si cambiar el foco.

**5. ¿Cuánto de nuestra semana se va en mejora y qué la protege?**
Comparen el plan con la realidad. Hablen de qué se lleva el tiempo. Acuerden una regla para proteger una pequeña proporción y qué recortar si el equipo está sobrecargado.

**6. ¿Qué pasó con la última idea que sugirió alguien y cómo se enteró?**
Rastreen una idea. ¿Se respondió, se probó o se perdió? Hablen de cómo asegurar que cada idea reciba una respuesta y un motivo.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega son la principal fuente de ideas de mejora y los mejores jueces de si funcionan. Deben mantener una lista visible, terminar unas pocas acciones por ciclo, comprobar los efectos y compartir lo que aprenden. Necesitan capacidad protegida y líderes que respondan.

### Equipos de servicio y de operaciones

Los equipos de operaciones ven cada día los incidentes repetidos, las aprobaciones lentas y el trabajo manual repetitivo. Deben vincular las mejoras con los problemas registrados, hacer seguimiento de los problemas repetidos y sacar tiempo para correcciones que reduzcan su propia carga. Su retroalimentación muestra si las mejoras llegan al usuario.

### Liderazgo y gobernanza

Los líderes crean las condiciones: capacidad protegida, seguridad para sugerir y para detener, y atención a los resultados. Deben pedir seguimiento y comprobaciones de efectos, aceptar los hallazgos honestos de «sin efecto», evitar las cuotas y financiar las mejoras que necesiten inversión. La gobernanza debe mirar el registro de mejoras entre equipos en busca de patrones que necesiten acción estructural.

### Clientes y usuarios

Los usuarios se benefician de servicios que siguen mejorando, y son una rica fuente de ideas. Debe preguntárseles, decirles qué cambió e invitarlos a comprobar el efecto. Las quejas repetidas sobre el mismo problema son una señal de que la mejora no llega a la causa.

## En la práctica: un ejemplo de gestión de servicios

El grupo de servicios digitales de una agencia tributaria nacional opera un portal de declaraciones, un sistema de pagos y una plataforma de centro de contacto con ocho equipos. Cada equipo mantiene una lista de mejoras, y el grupo reporta cada trimestre el número de mejoras completadas. Los números siguientes son ilustrativos.

La jefa de mejora del servicio nota que el número reportado sube mientras persisten los mismos puntos dolorosos. Revisa las listas. En todo el grupo hay 212 elementos de mejora abiertos, con una antigüedad mediana de 7 meses y el más antiguo con 26 meses. De las acciones acordadas en las revisiones del último trimestre, el 38 por ciento se completó en su fecha. De las 64 mejoras completadas el año pasado, solo 9 tenían una línea base y un resultado registrados, una tasa de comprobación de efectos del 14 por ciento, y 3 de esas 9 no mostraron efecto. Los problemas repetidos son habituales: de 25 incidentes vinculados a mejoras destinadas a eliminar su causa, 11 reaparecieron en seis meses, una tasa de repetición del 44 por ciento. El trabajo de mejora ocupa aproximadamente el 4 por ciento de la capacidad.

El grupo acuerda cuatro cambios con los equipos. Cada equipo recorta su lista a los elementos que puede abordar en los dos meses siguientes y declara por qué aparca o cierra el resto. Los equipos acuerdan no más de tres acciones a la vez, con responsables con nombre. Para cada mejora, se registran una línea base y un indicador antes del cambio, y el resultado se registra después, incluido «sin efecto». Una revisión trimestral mira los problemas recurrentes entre equipos y elige dos para un análisis de causas más profundo, con los equipos del centro de contacto y de pagos investigando juntos una causa compartida. Cada equipo reserva el 10 por ciento de la capacidad para la mejora, protegida por una regla por la que la cancelación necesita el acuerdo del responsable del equipo y una entrada de registro. El informe a los líderes pasa del número de mejoras completadas al seguimiento, las comprobaciones de efecto y los problemas repetidos.

Tras dos trimestres, los elementos abiertos bajan a 74 con una antigüedad mediana de 2 meses. El seguimiento sube al 81 por ciento, la tasa de comprobación de efectos al 70 por ciento, con 9 de 36 mejoras comprobadas que no muestran efecto y se abandonan. La tasa de problemas repetidos baja al 20 por ciento, y el tiempo de la idea a la prueba tiene una mediana de 9 días. La subdirectora pide un objetivo de 100 mejoras completadas por trimestre. La jefa de mejora del servicio explica que el recuento fue la razón por la que los números anteriores engañaban, y propone hacer seguimiento del seguimiento, del efecto y de la tasa de repeticiones. La decisión se anota, y se aprueba la petición de un equipo de ejecutar un experimento de cuatro semanas sobre su proceso de aprobación.

## Agilidad, IA, automatización y analítica

### Agilidad

Mantén la mejora en manos de las personas que hacen el trabajo y revisa las acciones con una cadencia regular. La precaución es que un objetivo de número de mejoras fomenta las triviales.

### IA

La IA puede sugerir mejoras a partir de tickets e incidentes. Haz seguimiento de la proporción de sugerencias que un equipo probó y del resultado de la comprobación del efecto. La precaución es que una lista de pendientes de ideas generada por IA puede sobrecargar al equipo, así que limita el trabajo en curso.

### Automatización

Automatiza los recordatorios y el seguimiento de las acciones de mejora, y mide la tasa de comprobación de efectos. La precaución es que la automatización que insiste sin una propiedad acordada se ignora.

### Analítica

Reporta la tasa de comprobación de efectos y la tasa de problemas repetidos con recuentos. La decisión a la que informa es qué mejoras funcionaron. La precaución es que los efectos son difíciles de atribuir, así que describe la incertidumbre.

## Perspectiva sectorial

**Startup.** La mejora ocurre constantemente y de manera informal. Mantén una lista corta, anota los efectos esperados y compruébalos, y protege una pequeña porción de tiempo. Evita los procesos pesados y vigila que el crecimiento no desplace por completo a la mejora.

**Pequeña empresa.** Una o dos personas lo hacen todo, y la mejora compite con apagar fuegos. Elige un problema recurrente cada trimestre, corrige su causa y comprueba el efecto. Pregunta a los usuarios qué les molesta y actúa sobre una cosa.

**Gran empresa.** La escala vuelve desigual la mejora y difícil de compartir las ideas. Ofrece un formato de registro común y un acompañamiento ligero, deja que los equipos posean sus listas y usa un foro entre equipos para extender lo que funciona y abordar restricciones compartidas. Evita las cuotas centrales.

**Gobierno y sector público.** La mejora puede estar limitada por la contratación, la legislación y las cadenas de aprobación, y se escruta públicamente. Documenta los experimentos y sus resultados, implica a los usuarios en la elección y la comprobación de las mejoras y reporta con honestidad los efectos, incluidos los que no funcionaron. Busca mejoras que quiten carga a la ciudadanía (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son la capacidad protegida, que es el costo principal, el esfuerzo de registrar líneas base y resultados y algo de acompañamiento o facilitación. Las herramientas pueden ser tan sencillas como el tablero que el equipo ya tiene.

Los retornos son menos problemas repetidos, menos trabajo manual repetitivo, esperas más cortas y mejor moral en los equipos que ven sus ideas convertirse en cambio. Construye el caso con tus propios datos: el costo de los incidentes recurrentes y la proporción eliminada por las mejoras, el tiempo ahorrado por mejoras con efectos comprobados y el costo de las mejoras que se hicieron y no funcionaron, que la comprobación evita ahora repetir. Evita citar retornos publicados de programas de mejora salvo que puedas rastrear su fuente y su método. Cuenta además el costo de oportunidad de la capacidad (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar las mejoras completadas.** Los equipos acuerdan cambios triviales. Mide el seguimiento y el efecto.
- **Cuotas de ideas.** Generan volumen y ruido. Responde a las ideas que lleguen.
- **Sin líneas base.** Nadie sabe si algo ayudó. Registra el antes y el después.
- **Registrar solo los éxitos.** Se pierde el aprendizaje del fracaso. Registra los resultados nulos.
- **Listas largas sin poda.** La lista pierde credibilidad. Recórtala a lo que el equipo hará.
- **Mejora en el tiempo libre.** No existe. Protege la capacidad.
- **Corregir síntomas.** El problema vuelve. Pregunta por qué más de una vez y cuestiona los supuestos.
- **Mejora por un equipo lejano.** Las ideas se atascan. Mantenla con las personas que hacen el trabajo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Hábito y propiedad | La mejora es ocasional | Se hace reflexión; las acciones se pierden a menudo | Lista visible del equipo con responsables; un pequeño número de acciones terminadas | Seguimiento y tiempo de la idea a la prueba gestionados; capacidad protegida | La mejora es rutina y se comparte entre equipos, proveedores y usuarios |
| Evidencia y efecto | Opiniones | Algunas medidas tras los cambios | Línea base y resultado registrados para cada mejora | Las comprobaciones de efecto incluyen resultados nulos; problemas repetidos con seguimiento por causa | El aprendizaje a nivel de cartera guía dónde mejorar a continuación, con los socios |
| Profundidad | Correcciones de síntomas | Algún análisis de causas | Análisis de causas para los problemas recurrentes | Restricciones identificadas a partir de los datos de flujo; supuestos cuestionados | Mejoras sistémicas en todo el flujo de valor, con gobernanza compartida |

## Lista de verificación

- [ ] Cada equipo tiene una lista visible de mejoras con responsables, efectos esperados y fechas.
- [ ] Una reflexión regular y breve termina con un pequeño número de acciones con responsable.
- [ ] El seguimiento de acciones y la antigüedad de los elementos más antiguos se revisan cada mes.
- [ ] La capacidad para la mejora está planificada, protegida y con seguimiento.
- [ ] Las mejoras están vinculadas con problemas registrados o con evidencia.
- [ ] Una línea base y un indicador se registran antes de cada cambio.
- [ ] Los efectos se comprueban y se registran, incluido el sin efecto.
- [ ] Los problemas repetidos tienen seguimiento por causa tras las mejoras.
- [ ] Cada idea recibe una respuesta con un motivo.
- [ ] No hay cuotas ni objetivos para ideas, acciones ni ahorros.

## Prompts de IA

**Elige mejoras a partir de la evidencia.**

```text
Here are our recurring problems and obstacles with rough counts and impact:
[paste]. Here is our flow data on where work waits: [paste]. Suggest which two
or three improvements are most likely to matter, why, and what evidence would
confirm or contradict that. Recommend a small experiment for each, with a
baseline and an indicator. Do not invent figures. List your assumptions.
```

**Diseña un experimento pequeño.**

```text
We want to try [change] to address [problem] in [team and process]. Design a
small experiment: the expected effect, the baseline to record now, the
indicator and how to measure it, the trial period, how to tell whether other
changes confused the result, and what we will do if there is no effect. Keep it
light. List your assumptions and risks.
```

**Revisa una lista de mejoras.**

```text
Here is our improvement list with age, owner, and expected effect for each item:
[paste]. Identify items that are too vague, too large, or stale, suggest a
shorter list the team could finish in two months, and propose a note to explain
the items we are parking and why. Do not judge individuals. List your
assumptions.
```

**Analiza un problema recurrente.**

```text
Problem: [describe]. Past fixes and when it recurred: [paste]. Suggest
contributing factors beyond the first plausible cause, assumptions to question
(double-loop learning), and a few ways to test each hypothesis cheaply. Do not
assume a single root cause. List your assumptions and questions for the team.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de mejora.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de mejora mide el seguimiento y el efecto, con su vector de manipulación y su barrera de protección.

## Ideas clave

- Mantén una lista visible de mejoras por equipo, con unas pocas acciones con responsable a la vez, y termínalas.
- Registra una línea base antes de cada cambio, comprueba el efecto después y registra los resultados nulos.
- Haz seguimiento del seguimiento, de las comprobaciones de efecto, de los problemas repetidos y de la antigüedad de los elementos más antiguos.
- Mejora primero la restricción y busca las causas y los supuestos que hay detrás.
- Protege la capacidad para la mejora dentro de un ritmo sostenible.
- No fijes cuotas para ideas, acciones ni ahorros.

## Referencias y lecturas complementarias

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
