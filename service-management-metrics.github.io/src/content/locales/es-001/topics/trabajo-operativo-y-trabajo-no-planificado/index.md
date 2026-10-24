# Trabajo operativo y trabajo no planificado

**Un equipo que construye y opera un servicio tiene un único fondo de capacidad, así que haz visible el reparto entre cambio planificado y trabajo operativo, protégelo con reglas explícitas de interrupción y de urgencias y lee la proporción de trabajo no planificado como una señal sobre el sistema y no como un veredicto sobre las personas.**

## Visión general y motivación

Todo equipo que construye y opera un servicio dedica su tiempo a dos grandes tipos de trabajo. El **trabajo de cambio** hace avanzar el servicio: funciones nuevas, mejoras planificadas, migraciones y la eliminación de debilidades conocidas. El **trabajo de operación**, también llamado trabajo operativo, mantiene el servicio en marcha: atender incidentes y solicitudes, responder a alertas, aplicar parches rutinarios, restablecer accesos y gestionar las tareas manuales que el servicio todavía exige. Ambos son legítimos, y un servicio que tiene usuarios necesita los dos. El problema empieza cuando nadie puede decir cuánto hace el equipo de cada uno, porque el plan supone entonces en silencio una capacidad que el trabajo de operación ya ha consumido.

El trabajo también puede clasificarse según si estaba previsto. El **trabajo planificado** se eligió antes de que empezara el periodo, por ejemplo durante la planificación o en un compromiso trimestral. El **trabajo no planificado** llega durante el periodo y exige una atención que no se había presupuestado: un incidente de producción, una petición urgente de una parte interesada de alto rango, una corrección de seguridad o un defecto que bloquea a un cliente. Los dos ejes se solapan pero no son lo mismo. La mayor parte del trabajo de operación es no planificado en su momento aunque su volumen sea predecible, y parte del trabajo de operación, como la renovación programada de un certificado, está totalmente planificado. El trabajo de cambio también puede ser no planificado, como cuando cambia una norma y un equipo debe responder en semanas.

Las visiones ágil e ITIL describen la misma presión con palabras distintas. En la planificación por periodos fijos, un compromiso es un pronóstico de capacidad, y el trabajo que llega a mitad del periodo o desplaza algo o se aplaza. En un tablero de flujo, el trabajo en curso tiene límites explícitos y a menudo hay un carril dedicado para los elementos urgentes, y la pregunta es cuántos elementos urgentes puede absorber el sistema antes de que el flujo se derrumbe (véase el tema 2.1, Medidas de flujo). En ITIL 4 (la versión publicada en 2019), la gestión de incidentes, la gestión de solicitudes de servicio y la gestión de problemas describen cómo se recibe, prioriza y resuelve el trabajo de operación, mientras que la habilitación de cambios y la práctica de desarrollo y gestión de software gobiernan el cambio planificado. Las prácticas describen flujos de trabajo. Rara vez dicen cómo debe un equipo repartir sus horas entre ellos, y esa laguna es donde trabaja este tema.

Varios términos se repiten aquí. Una **interrupción** es cualquier demanda que llega fuera del ciclo de planificación y aparta a una persona del elemento en el que trabaja. La **carga de interrupciones** es el efecto total de esas demandas en un equipo durante un periodo, medido por recuento, por horas o por la proporción de capacidad que consumen. Una **urgencia** (expedite) es un elemento de trabajo al que se permite saltarse la cola, normalmente porque su [costo del retraso](https://en.wikipedia.org/wiki/Cost_of_delay) es alto e inmediato. Un **carril de urgencias** es una regla, a menudo una fila dedicada en un tablero, que limita cuántas urgencias pueden estar en curso a la vez. La **asignación de capacidad** es la división explícita de la capacidad de un equipo entre tipos de trabajo, por ejemplo una proporción declarada para el cambio planificado, otra para el trabajo de operación y otra para la mejora.

El trabajo no planificado es el mayor impuesto oculto sobre la entrega planificada: cada interrupción cuesta su propio tiempo más el tiempo de recuperación perdido por el [cambio de tarea](https://en.wikipedia.org/wiki/Task_switching_(psychology)), y la investigación sobre el trabajo interrumpido (Mark, Gudith y Klocke, 2008) halló que las personas compensan trabajando más deprisa a costa de más estrés. Una nota sobre la dirección. Una proporción alta de trabajo no planificado no es en sí un defecto. Un servicio recién lanzado, una caída en curso o un hecho regulado pueden consumir legítimamente la mayor parte de la capacidad de un equipo durante un tiempo. El fin no es llevar el trabajo no planificado a cero ni ocultarlo, sino verlo, ponerle precio y decidir deliberadamente cuánto absorberá el equipo y cuánto debe arreglar la organización aguas arriba. El trabajo no planificado que se repite por la misma causa es el más útil de encontrar, porque apunta a un registro de problema, una laguna de monitorización o una partida de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt) que es más barata de eliminar que de seguir pagando.

## Principios clave

- **La capacidad es finita y compartida.** Cada hora dada al trabajo de operación o a una urgencia es una hora no dada al cambio planificado, así que haz explícito y visible el reparto en lugar de dejar que surja de quien grite más fuerte.
- **Clasifica el trabajo cuando llega, no después.** Etiqueta cada elemento como planificado o no planificado y como de cambio o de operación en el momento en que entra en el sistema, porque reclasificar al final del periodo es un recuerdo y no una observación.
- **Las interrupciones tienen un precio más allá de su duración.** Cuenta el costo de recuperación del cambio de tarea además de los minutos empleados, y prefiere diseños que agrupen o encaminen las interrupciones hacia una persona con nombre.
- **Urgencia por regla, no por rango.** Un carril de urgencias con un límite y una prueba de entrada protege el flujo; las urgencias ilimitadas por antigüedad lo eliminan.
- **Reserva capacidad a propósito.** Un colchón planificado es más honesto que un plan que supone que no hay ninguno.
- **Trata el trabajo no planificado repetido como un defecto del sistema.** Una repetición semanal es candidata a un registro de problema o a una automatización.
- **Mide equipos y servicios, nunca individuos.** La persona que responde a más interrupciones suele ser la que más sabe; clasificarla castiga lo que no debe (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Definiciones de métricas

Siete métricas describen cómo se reparte y se perturba la capacidad. Cada una necesita una regla de clasificación escrita, porque todas dependen de cómo se etiquetan los elementos. El periodo de cada fórmula es la misma ventana fija del equipo, como una semana, un mes o un trimestre.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Proporción de trabajo no planificado | Proporción de los elementos de trabajo completados, por recuento, que no estaban en el plan al inicio del periodo | elementos completados en el periodo que entraron en el tablero o la lista de pendientes después de empezar el periodo / todos los elementos completados en el periodo; el reloj empieza en el evento de planificación y se detiene al final del periodo; se excluyen los elementos cancelados y los aún abiertos | porcentaje | Gestor de incidencias con la hora de creación de los elementos y la instantánea de planificación | Gestión de incidentes; gestión de solicitudes de servicio | Cambio de alcance; tipos de elemento de trabajo | Mensual |
| Adherencia a la asignación de capacidad | Cuán de cerca coincide el esfuerzo real con el reparto declarado entre trabajo de cambio, de operación y de mejora | para cada categoría, diferencia absoluta entre la proporción real y la acordada, sumadas y divididas por la mitad; la proporción real son los elementos completados (o el esfuerzo registrado donde el equipo lo anota) en esa categoría / todos los elementos completados; los elementos sin categoría se reportan por separado y no se descartan | puntos porcentuales | Campo de tipo de trabajo del gestor y registros de tiempo donde existan | Mejora continua; gestión de la capacidad y el rendimiento | Asignación o planificación de la capacidad | Mensual |
| Tasa de interrupciones | Con qué frecuencia llegan al equipo, y a las personas que hacen trabajo planificado, demandas ajenas al plan | interrupciones recibidas por el equipo en el periodo / días laborables del periodo, donde una interrupción es cualquier ticket, aviso, petición por mensaje o encargo registrado en el canal de admisión del equipo y que no estaba ya en el plan; los duplicados de la misma demanda subyacente se cuentan una vez | interrupciones por día laborable | Registro del canal de admisión, cola ITSM, sistema de alertas y registro de interrupciones del equipo | Gestión de incidentes; gestión de solicitudes de servicio; monitorización y gestión de eventos | Registro de interrupciones o acuerdo de trabajo del equipo | Semanal |
| Tasa de urgencias | Proporción de los elementos completados que usaron el carril de urgencias | elementos completados en el periodo que entraron en el carril de urgencias / todos los elementos completados en el periodo; el reloj empieza cuando el elemento se marca como urgente y se detiene al completarse; los elementos rebajados fuera del carril antes de empezar el trabajo se cuentan por separado | porcentaje | Historial del carril del tablero o del campo de prioridad | Gestión de incidentes; habilitación de cambios (cambio de emergencia) | Clase de servicio de urgencia | Mensual |
| Desplazamiento del trabajo planificado | Número de elementos planificados aplazados o abandonados para dejar sitio al trabajo no planificado | elementos planificados retirados del periodo, aplazados o dejados sin terminar con el motivo registrado «desplazado por trabajo no planificado» en el periodo (recuento); se excluyen los elementos retirados porque cambió el objetivo | recuento de elementos | Historial de cambios del tablero, con el campo de motivo | Habilitación de cambios; mejora continua | Protección del objetivo de entrega; negociación del alcance | Mensual |
| Proporción de trabajo no planificado repetido | Proporción de los elementos no planificados cuya causa coincide con un elemento no planificado anterior dentro de la ventana de retrospección | elementos no planificados completados en el periodo que se vinculan al mismo registro de problema, regla de alerta o etiqueta de causa que un elemento anterior dentro de la ventana de retrospección (por ejemplo 90 días) / todos los elementos no planificados completados en el periodo; los elementos sin etiqueta de causa se reportan como un recuento aparte sin clasificar | porcentaje | Registros de incidentes y de problemas de ITSM, etiquetas de causa del gestor | Gestión de problemas; gestión de errores conocidos | Acciones de la retrospectiva; etiquetas de defectos recurrentes | Mensual |
| Fiabilidad del compromiso planificado | Proporción de los elementos que el equipo planificó para el periodo que terminó en el periodo | elementos planificados terminados en el periodo / elementos planificados al inicio del periodo; los elementos añadidos después del inicio se excluyen de ambos recuentos | porcentaje | Instantánea de planificación e historial de finalización del gestor | Gestión de niveles de servicio; habilitación de cambios | Fiabilidad del pronóstico | Mensual |

Las medidas de tiempo de este tema, como la antigüedad de un elemento urgente, deben mostrarse como percentiles (por ejemplo la mediana y el percentil 85) y no como promedio, ya que un solo incidente largo distorsiona una media (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Recomendaciones

### Haz visible el reparto

**1. Etiqueta cada elemento con dos campos en la admisión.** Añade un tipo de trabajo (cambio, operación, mejora) y un indicador de planificado (planificado, no planificado) al formulario de admisión del gestor o de la herramienta ITSM, y hazlos obligatorios. Las etiquetas son baratas cuando se fijan en la creación y poco fiables cuando se reconstruyen después. Escribe la definición de cada valor en una frase en el acuerdo de trabajo del equipo y revísala cuando las etiquetas dejen de describir el trabajo (véase el tema 1.5, Fuentes de datos e instrumentación).

**2. Congela una instantánea de planificación.** «No planificado» solo tiene sentido respecto a un plan, así que captura la lista de elementos al inicio del periodo y guárdala. Compara el trabajo completado con la instantánea, no con el aspecto del tablero al final.

### Asigna la capacidad a propósito

**3. Acuerda una asignación de capacidad y trátala como una hipótesis.** Decide, como equipo y con el responsable de producto o de servicio, aproximadamente qué proporción va al cambio planificado, al trabajo de operación y a la mejora. Parte de lo que los datos muestran que el equipo ha estado haciendo durante los últimos periodos y elige después un objetivo que se mueva en la dirección que quieres. Revisa el reparto en cada ciclo de planificación; un porcentaje fijo copiado de la diapositiva de otro equipo es una conjetura y no una decisión.

**4. Reserva un colchón dimensionado a partir de tu propio historial.** Usa el propio registro de interrupciones del equipo para dimensionar un colchón para el trabajo no planificado, por ejemplo mirando el rango medio y el alto de la proporción semanal no planificada en periodos recientes, y planifica solo la capacidad que queda. Un colchón que se queda sin usar con regularidad puede reducirse; uno que se agota con regularidad necesita una asignación mayor o que se elimine una causa. La relación entre la carga y el retraso en una cola (véase la [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law) y el tema 2.3, Trabajo en curso y teoría de colas) explica por qué un sistema operado a utilización total no tiene margen para absorber una sorpresa.

### Diseña el camino de las interrupciones

**5. Encamina las interrupciones a un rol con nombre.** Rota a una sola persona, a menudo llamada gestor de interrupciones, ingeniero de guardia o escudo, para que atienda las demandas entrantes durante un día o una semana, mientras los demás protegen su concentración. El rol tiene un alcance escrito, una nota de traspaso y un límite de duración para que la carga se reparta con justicia. Los equipos con rotación deben conectarla con la práctica de guardias (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

**6. Haz la clasificación inicial en la puerta.** Las interrupciones difieren enormemente en urgencia. Aplica una regla breve de [triaje](https://en.wikipedia.org/wiki/Triage) en la admisión que plantee tres preguntas: ¿hay un servicio caído o un usuario bloqueado?, ¿hay una fecha que no puede moverse? y ¿puede la demanda esperar al próximo evento de planificación? Los elementos que no superan ninguna de las tres pasan a la lista de pendientes y se planifican como cualquier otro trabajo. En términos de ITIL 4 es el paso de priorización de la gestión de incidentes y de la gestión de solicitudes de servicio aplicado a la admisión del propio equipo.

### Gobierna el carril de urgencias

**7. Da al carril de urgencias un límite y una prueba de entrada.** El carril admite como máximo uno o dos elementos a la vez, y un elemento entra solo si su costo del retraso es alto e inmediato y el solicitante puede declararlo. Una prueba declarada permite al equipo decir no a la petición que es meramente ruidosa. Si el carril está siempre lleno, ha dejado de ser una excepción, y el equipo debe revisar la prueba de entrada y las causas aguas arriba. El carril es una [clase de servicio](https://en.wikipedia.org/wiki/Class_of_service) con sus propias reglas; véase la literatura de Kanban para la idea subyacente (Anderson, 2010).

### Elimina las fuentes

**8. Vincula los elementos no planificados a una causa y revisa las repeticiones.** Añade una etiqueta de causa o un vínculo a un registro de problema a cada elemento no planificado. Una vez al mes, enumera las causas que se repiten y envía las principales a la gestión de problemas, a la lista de pendientes como partidas de deuda técnica o a mejoras de monitorización (véase el tema 4.1, Métricas de gestión de problemas, y el tema 4.6, Deuda técnica y errores conocidos). La proporción de trabajo no planificado repetido te dice si esas correcciones surten efecto. El patrón es similar a la eliminación del trabajo repetitivo (toil) descrita en el libro de SRE de Google, donde el trabajo operativo manual y repetitivo se trata como algo que debe eliminarse mediante ingeniería; el libro sugiere mantenerlo por debajo de una proporción del tiempo de un ingeniero (Beyer et al., 2016), una pauta que cada equipo debe contrastar con sus propios datos en lugar de adoptarla como objetivo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Proporción de trabajo no planificado | Añadir elementos tarde a la instantánea de planificación para que cuenten como planificados; dejar sin seguimiento el trabajo urgente para que nunca cuente; etiquetar elementos planificados como no planificados para excusar un plan incumplido | Instantánea de planificación congelada con marca de tiempo; recuento sin clasificar; una muestra de elementos cerrados leída cada trimestre para comparar la etiqueta con lo ocurrido |
| Adherencia a la asignación de capacidad | Mover elementos entre categorías para ajustarse al reparto acordado; dividir un elemento en varios para desplazar las proporciones; elegir un reparto que el equipo ya cumple | Definiciones de categoría fijas escritas en el acuerdo de trabajo; una muestra de descripciones de elementos frente a su categoría; fiabilidad del compromiso planificado |
| Tasa de interrupciones | Convertir las interrupciones en favores silenciosos que nunca llegan al registro; combinar varias demandas en una sola entrada; desalentar a la gente a pedir | Comparar el registro con el tráfico del canal de admisión y el historial de alertas; preguntar al equipo en la retrospectiva si el registro coincide con su experiencia |
| Tasa de urgencias | Mantener el trabajo urgente fuera del carril para parecer disciplinado, o meterlo todo para ganar velocidad; redefinir urgencia como «importante» | Límite del carril con una prueba de entrada; proporción de elementos urgentes que superaron la prueba en la revisión; desplazamiento del trabajo planificado |
| Desplazamiento del trabajo planificado | Registrar el desplazamiento como un cambio de alcance por elección; dejar que los elementos planificados fallen en silencio sin motivo; evitar los elementos planificados que probablemente serán desplazados | Campo de motivo obligatorio en cada elemento retirado o sin terminar; fiabilidad del compromiso planificado; revisión de los motivos en la retrospectiva |
| Proporción de trabajo no planificado repetido | Usar una etiqueta de causa gruesa para que las repeticiones queden ocultas, o una fina para que nada se repita; cerrar el registro de problema para eliminar el vínculo | Taxonomía de etiquetas de causa revisada cada trimestre; recuento sin clasificar; comprobación de recurrencia tras cerrarse un registro de problema |
| Fiabilidad del compromiso planificado | Planificar poco para terminarlo todo; inflar las estimaciones; contar un elemento parcial como hecho; abandonar los elementos difíciles antes de que empiece el periodo | Tamaño y valor de los elementos planificados comparados a lo largo del tiempo; comprobación del resultado del objetivo de entrega; proporción de trabajo no planificado, de modo que un valor alto no se lea como salud cuando el plan fue tímido |

Una lectura sana es una proporción de trabajo no planificado que el equipo puede explicar, un carril de urgencias que rara vez está lleno y una proporción de repeticiones que baja tras las correcciones. Una lectura sospechosamente perfecta es lo que hay que investigar. Un equipo que reporta cero trabajo no planificado tiene o un servicio muy tranquilo o uno sin seguimiento, y la forma de distinguirlo es comparar el registro con el historial de alertas y de tickets.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Asignación de capacidad fija (porcentajes declarados) | Fácil de explicar; protege el trabajo de mejora de quedar desatendido | Ignora la variación real; puede manipularse reetiquetando |
| Colchón reservado dimensionado a partir del historial | Ajusta el plan a la carga real de interrupciones | Necesita varios periodos de datos fiables; puede ocultar una causa crónica |
| Gestor de interrupciones rotatorio | Protege la concentración de la mayor parte del equipo; reparte la carga con justicia | El propio trabajo planificado del gestor se estanca; el rol necesita traspaso y apoyo |
| Límite estricto de urgencias | Mantiene predecible el flujo; obliga a declarar un costo del retraso | Los solicitantes pueden esquivarlo; una emergencia real puede sentirse bloqueada |
| Contar elementos en lugar de esfuerzo | Sencillo y difícil de inflar | Trata por igual tamaños muy distintos |

La postura práctica para la mayoría de los equipos es contar primero elementos, añadir esfuerzo solo donde los recuentos de elementos engañen, proteger un colchón pequeño y un carril de urgencias pequeño y usar la etiqueta de causa para atacar la mayor repetición.

## Preguntas para debatir con tu equipo

**1. ¿Qué proporción del trabajo completado en el último periodo fue no planificado y cómo lo sabemos?**
Abre la instantánea de planificación junto a la lista de elementos completados y cuenta los elementos que no estaban en el plan. Compara el resultado con la impresión de cada persona sobre el periodo; los dos suelen diferir. El facilitador debe preguntar cuántos elementos nunca se registraron, porque la respuesta honesta determina todos los demás números.

**2. ¿Cuáles son las tres fuentes de interrupciones que más nos cuestan y quién podría eliminarlas?**
Enumera las fuentes por recuento y por el esfuerzo que absorbieron, como alertas, peticiones repetidas, escaladas y encargos ad hoc de las partes interesadas. Marca cada una como eliminable, encaminable o inevitable. El facilitador debe insistir en un responsable con nombre fuera del equipo para cualquier fuente que el equipo no pueda arreglar por sí mismo.

**3. ¿Qué reparto entre trabajo de cambio, de operación y de mejora queremos realmente?**
Compara el reparto que muestran los datos con el reparto que la gente cree tener y con el que espera la dirección. Hablen de qué tipos de trabajo abandonaría primero el equipo bajo presión, ya que eso revela las prioridades reales. Elijan un objetivo para el próximo periodo y una forma de comprobarlo.

**4. ¿Cuál es nuestra regla para el carril de urgencias y quién decide?**
Lee en voz alta la regla actual o anota que no existe ninguna. Pide las tres últimas urgencias y somete cada una a la prueba de un costo del retraso declarado. Hablen de lo que hace el equipo cuando una persona de alto rango pide un salto que no supera la prueba y de quién respalda la decisión.

**5. Cuando nos interrumpen, ¿qué nos cuesta después de que termina la interrupción?**
Pide a las personas que describan cuánto tardan en recuperar su sitio en una tarea tras una interrupción típica.

**6. ¿Qué elemento no planificado ha vuelto más de una vez y qué lo detendría?**
Toma el último trimestre de elementos no planificados y busca repeticiones por causa. Elige la de mayor esfuerzo total y rastrea por qué se repite: una alerta que falta, un defecto sin corregir, un paso manual o un problema de proveedor. Decidan si va a un registro de problema, a la lista de pendientes o a una conversación con el proveedor.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega sienten el trabajo no planificado como planes rotos y pronósticos que se deslizan. Se benefician del etiquetado en la admisión, de una instantánea de planificación congelada y de un pronóstico construido con un colchón basado en el historial (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). El registro de desplazamientos muestra a los responsables de producto lo que costó cada petición tardía.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con la mayor parte del trabajo de operación. Necesitan un gestor de interrupciones con nombre, una regla de clasificación inicial y un camino desde las solicitudes y alertas recurrentes hasta las correcciones (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). La proporción de repeticiones es su argumento más sólido para invertir en la gestión de problemas.

### Liderazgo y gobernanza

Los líderes fijan la asignación real mediante las peticiones que hacen y los plazos que aceptan. Deben pedir la proporción y sus causas, financiar el trabajo de mejora que elimina las interrupciones repetidas y evitar usar las urgencias como la forma normal de hacer las cosas.

### Clientes y usuarios

Los clientes ven el trabajo no planificado como caídas, respuestas lentas y funciones retrasadas. Ganan cuando el equipo tiene margen para corregir las causas, y necesitan un camino justo para plantear la urgencia. Los acuerdos de nivel de servicio (véase [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement)) deben reflejar la carga de interrupciones que soporta el equipo (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una aseguradora de salud regional opera una plataforma de siniestros con un equipo de producto de siete personas y un centro de servicios compartido. El equipo construye funciones nuevas y también da soporte a la plataforma en producción. Todos los números de este ejemplo son ilustrativos.

Durante seis semanas, la fiabilidad del compromiso planificado del equipo cayó de aproximadamente el 85 por ciento al 55 por ciento, y el responsable de producto empezó a cuestionar las estimaciones del equipo. El jefe del equipo extrae el historial del gestor. Con las instantáneas de planificación congeladas, la proporción de trabajo no planificado es del 41 por ciento por recuento en el último periodo, frente a un recuerdo del equipo de «quizá una quinta parte». El recuento sin clasificar es del 9 por ciento, de modo que la proporción es razonablemente fiable.

Al dividir los elementos no planificados por causa se ve que 14 de 24 eran trabajo de operación, y de ellos, 9 se deben a un único trabajo por lotes de envío de siniestros que falla tras un cambio de formato de datos de un socio y se reinicia a mano cada vez. La proporción de trabajo no planificado repetido es del 58 por ciento. La tasa de interrupciones es de 6 por día laborable, y 4 de ellas llegan a los ingenieros que hacen el trabajo planificado, porque el centro de servicios escala directamente a quien responda primero. El carril de urgencias contiene dos elementos a la vez la mayoría de los días, y la tasa de urgencias es del 23 por ciento. El desplazamiento del trabajo planificado es de 7 elementos en el periodo, de los cuales 5 llevan el motivo «desplazado por trabajo no planificado».

El equipo toma cuatro decisiones con el responsable de producto y el de servicio. Primero, un ingeniero cada vez pasa a ser el gestor de interrupciones, con un alcance escrito y una nota de traspaso, y las escaladas van solo a esa persona. Segundo, el carril de urgencias se limita a un elemento, con una prueba de entrada que exige un costo del retraso declarado, y cada urgencia registra el elemento que desplazó. Tercero, el fallo del trabajo por lotes se eleva como un registro de problema, con una corrección y una conversación con el socio puestas en la lista de pendientes como trabajo de mejora, usando el 15 por ciento de la capacidad, que es la proporción que el equipo elige como primera asignación a la mejora. Cuarto, el equipo planifica el próximo periodo de trabajo con un colchón dimensionado a partir del rango alto de su proporción no planificada reciente, no con una carga completa.

Seis semanas después, la proporción de trabajo no planificado es del 27 por ciento, la proporción de repeticiones es del 22 por ciento, la tasa de interrupciones que llega a quienes hacen trabajo planificado es de 1,5 por día y la fiabilidad del compromiso planificado es de aproximadamente el 78 por ciento (todo ilustrativo). El equipo no ha alcanzado su anterior 85 por ciento y lo dice.

El riesgo de manipulación que detecta el equipo: en el segundo periodo con el nuevo arreglo la tasa de interrupciones cae bruscamente, y el jefe del equipo nota que la gente escribe directamente al gestor, de modo que los favores nunca llegan al registro. Al comparar el registro con el canal de admisión y el historial de alertas se ve que el volumen real no había cambiado. El equipo acuerda que el gestor redirija los mensajes directos al canal de admisión. El fallo estaba en el diseño del camino, no en ninguna persona.

## Agilidad, IA, automatización y analítica

### Agilidad

Un equipo que construye y opera un servicio tiene un único fondo de capacidad, y un ritmo sostenible necesita límites honestos a la interrupción. Un paso práctico es acordar con las partes interesadas un reparto de capacidad y revisar la proporción no planificada en la conversación periódica de mejora. La precaución es que un objetivo para la proporción no planificada puede empujar a los equipos a etiquetar el trabajo operativo como planificado.

### IA

La IA puede trasladar trabajo entre planificado y no planificado, por ejemplo automatizando correcciones rutinarias mientras añade tareas de revisión y supervisión. Haz seguimiento de la proporción no planificada y de la proporción de trabajo no planificado repetido antes y después de los cambios de IA, e incluye el tiempo dedicado a corregir la salida de la IA como categoría propia. La precaución es que el trabajo de corrección oculto puede tragarse la capacidad que la IA debía liberar.

### Automatización

Captura automáticamente del gestor el tipo de trabajo con un conjunto pequeño y acordado de categorías. Mide la automatización por el trabajo no planificado que elimina y por los incidentes nuevos que causa. La precaución es que una remediación automatizada que reinicia servicios sin registrar la causa hace que el trabajo no planificado repetido parezca trabajo nuevo.

### Analítica

Muestra la proporción de trabajo no planificado a lo largo del tiempo y las causas de los elementos repetidos. La decisión a la que informa es cuánta capacidad reservar y qué fuentes de interrupción eliminar. La precaución es que las categorías las eligen personas, así que audita una muestra de elementos para comprobar que la clasificación es honesta.

## Perspectiva sectorial

**Startup.** Casi todo el trabajo parece urgente y las mismas pocas personas hacen el trabajo de cambio y el de operación. Limita la clasificación a dos etiquetas y fija un límite explícito a las urgencias. La proporción no planificada es la evidencia para decir «podemos hacer la hoja de ruta o la carga de soporte, pero no ambas».

**Pequeña empresa.** Un administrador o un equipo pequeño suele atender todas las solicitudes. Usa los tipos de ticket de la herramienta como clasificación, registra las interrupciones durante un mes para aprender el patrón y reserva un bloque diario fijo para el trabajo planificado. Pide a los proveedores sus informes de volumen y de causas repetidas.

**Gran empresa.** El trabajo no planificado de un equipo suele ser trabajo planificado de otro. Acuerden definiciones compartidas, reporten por equipo y por servicio y financien las correcciones en el nivel donde vive la causa (véase el tema 9.3, Métricas de colaboración y traspasos).

**Gobierno y sector público.** La capacidad puede venir fijada por topes de plantilla, y el trabajo de operación puede venir impuesto por ley o por hallazgos de auditoría. Haz que formen parte de la asignación, documenta las reglas de clasificación y conserva una pista de auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es una entrega predecible: un plan que ignora la carga de interrupciones se incumple repetidamente, y el trabajo no planificado visible da al equipo una voz más fuerte cuando pide tiempo para eliminar causas.

El costo de recoger estas medidas es modesto cuando las etiquetas y la instantánea de planificación forman parte del flujo de trabajo normal. Los costos principales son el tiempo para acordar las definiciones, la disciplina de etiquetar en la admisión, una pequeña cantidad de herramientas para unir los datos del gestor y de ITSM (véase el tema 1.5, Fuentes de datos e instrumentación) y las horas del gestor de interrupciones, cuyo propio trabajo planificado se ralentiza. Añadir registros de tiempo por hora cuesta bastante más y suele resentirse, así que añádelos solo si los recuentos de elementos resultan engañosos. El costo total de propiedad está dominado por el tiempo de las personas, así que cuéntalo.

El retorno aparece en patrones que el equipo puede medir por sí mismo y no en una cifra supuesta. Busca una proporción de trabajo no planificado repetido que baja tras las correcciones de problemas, un aumento de la fiabilidad del compromiso planificado, menos elementos planificados desplazados y menos interrupciones que llegan a quienes hacen trabajo planificado. Donde se conocen las horas, el esfuerzo recuperado al eliminar una causa recurrente puede valorarse al costo por hora del propio equipo y contrastarse con el esfuerzo de la corrección (véase el tema 7.5, Costo del servicio y economía unitaria, y el tema 7.7, Retorno de la inversión y caso de negocio). No tomes prestados porcentajes del sector para el trabajo no planificado; ninguna cifra de otra organización sustituye a tu propio historial.

## Antipatrones y trampas

- **Tratar todo el trabajo no planificado como un fracaso.** Parte de él es el servicio cumpliendo su función, y un objetivo de cero empuja el trabajo fuera del registro. En su lugar, pregunta qué parte es esperable, cuál es evitable y fija un colchón para la primera.
- **Cultura del héroe.** La persona que rescata cada emergencia se vuelve indispensable, está cansada y es un punto único de fallo. En su lugar, comparte el rol de interrupciones por rotación y premia la eliminación de causas.
- **Todo es una urgencia.** Un carril siempre lleno es solo una segunda cola. En su lugar, fija un límite, exige un costo del retraso declarado y revisa cada mes la prueba de entrada.
- **Planificar a utilización total.** Un plan sin holgura garantiza que cada sorpresa desplace algo. En su lugar, dimensiona un colchón a partir de tu propio historial de interrupciones y planifica la capacidad que queda.
- **Clasificar después de los hechos.** Las etiquetas añadidas al final del periodo reflejan la memoria y el estado de ánimo. En su lugar, exige las etiquetas en la admisión y congela la instantánea de planificación.
- **Absorber la demanda en silencio.** Los favores que nunca llegan al registro hacen invisible la carga y errónea la planificación. En su lugar, haz de una vía de admisión única la norma y redirige a ella los encargos por canales laterales.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Clasificación y visibilidad | El trabajo no se etiqueta; el trabajo no planificado se siente, no se cuenta | Algunos equipos etiquetan el trabajo planificado y no planificado con sus propias palabras | Una definición escrita de los tipos de trabajo y del indicador de planificado, aplicada en la admisión con una instantánea de planificación | Proporción no planificada y recuento sin clasificar con tendencias y revisados cada periodo | Definiciones compartidas entre equipos y proveedores y revisadas cuando dejan de informar decisiones |
| Asignación de capacidad | Se supone que la capacidad está totalmente disponible para el trabajo planificado | Algunos equipos aplican un colchón aproximado | Un reparto acordado entre cambio, operación y mejora, con un colchón dimensionado a partir del historial | Adherencia revisada y reparto ajustado con los responsables de producto y de servicio | Asignación negociada entre equipos que comparten plataformas, servicios y personas |
| Gestión de interrupciones y urgencias | Cualquiera interrumpe a cualquiera; la urgencia la fija la antigüedad | Existe en algunos equipos el hábito de una persona de guardia o de una fila de urgencias | Un rol de interrupciones con nombre, una regla de clasificación inicial y un carril de urgencias con un límite y una prueba de entrada | Tasa de urgencias, desplazamiento y tasa de interrupciones revisados frente a una barrera de protección | Encaminamiento de interrupciones y reglas de urgencia coordinados entre equipos, con guardias y vías de escalada compartidas |
| Eliminación de causas | Los mismos problemas se repiten y se arreglan con heroicidades | Algunas repeticiones se notan y se comentan en las retrospectivas | Los elementos no planificados llevan una etiqueta de causa y las principales repeticiones van a la gestión de problemas | Proporción de repeticiones con seguimiento y correcciones financiadas como trabajo de mejora planificado | Causas rastreadas entre equipos, proveedores y clientes, y la mejora es rutinaria |

## Lista de verificación

- [ ] Cada elemento de trabajo lleva un tipo de trabajo (cambio, operación, mejora) y un indicador de planificado, fijados en la admisión.
- [ ] Las definiciones de planificado, no planificado, cambio y operación están escritas en el acuerdo de trabajo del equipo.
- [ ] Se congela y guarda una instantánea de planificación al inicio de cada periodo.
- [ ] La proporción de trabajo no planificado se reporta como una tendencia, junto al recuento sin clasificar.
- [ ] El equipo y sus responsables han acordado una asignación de capacidad y la han revisado en el último trimestre.
- [ ] Existe una única vía de admisión y los encargos por canales laterales se redirigen a ella.
- [ ] Un rol de interrupciones con un alcance escrito rota entre el equipo.
- [ ] El carril de urgencias tiene un límite, una prueba de entrada y un registro de lo que desplazó cada urgencia.
- [ ] Los elementos no planificados llevan una etiqueta de causa o un vínculo a un registro de problema, y las repeticiones se revisan cada mes.
- [ ] Las medidas se reportan a nivel de equipo y de servicio y nunca se usan para clasificar individuos.

## Prompts de IA

**Diseña una clasificación del trabajo para la admisión.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Analiza un registro de interrupciones en busca de patrones.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Redacta una política del carril de urgencias.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar qué tema posee una métrica relacionada, como el volumen de incidentes o el trabajo repetitivo, y la barrera de protección que debe ir a su lado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión editada de este tema mantiene en sintonía sus relojes, reglas de clasificación y tabla de manipulación.

## Ideas clave

- El trabajo planificado y el no planificado, y el de cambio y el de operación, comparten un único fondo de capacidad, así que haz visible el reparto y acuérdalo de forma deliberada.
- Etiqueta el trabajo en la admisión y congela una instantánea de planificación, ya que «no planificado» solo significa algo frente a un plan registrado.
- Las interrupciones cuestan tiempo de recuperación además de minutos, así que encamínalas a un rol con nombre y haz su clasificación inicial en la puerta.
- Un carril de urgencias necesita un límite, una prueba de entrada y un registro de lo que desplazó cada urgencia.
- El trabajo no planificado repetido es la señal más fuerte para la gestión de problemas y el trabajo de mejora, y la proporción de repeticiones muestra si las correcciones surten efecto.
- Reporta a nivel de equipo y de servicio, compara un equipo con su propio historial y nunca clasifiques a individuos.

## Referencias y lecturas complementarias

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
