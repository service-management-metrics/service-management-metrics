# Métricas de monitorización y calidad de las alertas

**Una alerta es una petición de la atención de una persona, así que mide la monitorización por la frecuencia con que esa petición valió la pena, por cuánto de los problemas reales captó y por cuánto sueño y cuánta confianza costó.**

## Visión general y motivación

La monitorización es la recogida, el procesamiento y la presentación de datos en tiempo real sobre un sistema. La [monitorización de sistemas](https://en.wikipedia.org/wiki/System_monitoring) responde a la pregunta «¿funciona el servicio como lo necesitan los usuarios?». Una alerta es el punto en que esos datos piden a un humano que haga algo. La mayoría de los equipos miden mal o no miden en absoluto la primera actividad, y miden la segunda solo a través de las quejas. Este tema te da un conjunto reducido de medidas para ambas: si la monitorización ve los fallos que importan y si las alertas que levanta merecen la atención que exigen.

Primero, algunos términos. En el vocabulario de ITIL 4, un evento es un cambio de estado con significado para la gestión de un servicio, y la gestión de eventos es la práctica de detectar eventos, decidir cuáles importan y elegir la respuesta. Una alerta es una notificación a un humano, entregada como un aviso, un mensaje o un ticket. Un aviso (page) es una alerta que interrumpe a alguien de inmediato. Un falso positivo es una alerta que saltó cuando nada necesitaba atención, y un falso negativo es un fallo que ninguna alerta reportó; ambos términos proceden del lenguaje de los [falsos positivos y falsos negativos](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Una alerta accionable es aquella en que una persona tenía una acción útil que tomar, y la tomó o decidió deliberadamente no tomarla por un motivo registrado.

Los dos lados de la monitorización tiran en direcciones opuestas. Añadir alertas después de cada incidente construye un muro de ruido; recortarlas para acallarlo arriesga el silencio durante el fallo que importa. El lenguaje de [precisión y exhaustividad](https://en.wikipedia.org/wiki/Precision_and_recall) (precision and recall) encaja bien. La precisión pregunta qué proporción de las alertas levantadas valía la pena levantar. La exhaustividad pregunta qué proporción de los problemas reales captaron las alertas. La calidad de las alertas es el equilibrio entre ambas, y una métrica que vigila solo una invita al equipo a sacrificar la otra. La [relación señal-ruido](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) capta la misma tensión.

El costo humano es la razón por la que esto pertenece a un libro de métricas de servicio. La [fatiga de alarmas](https://en.wikipedia.org/wiki/Alarm_fatigue) es la tendencia bien documentada de las personas expuestas a muchas alarmas, la mayoría sin importancia, a insensibilizarse y a tardar en responder a las que importan. Se estudió primero en entornos clínicos y se aplica a cualquier rotación de [guardia](https://en.wikipedia.org/wiki/On-call) a la que se avisa con demasiada frecuencia por alertas que no llevan a ninguna parte. Los responsables fatigados pierden incidentes reales y acaban abandonando la rotación.

Las visiones difieren entre las dos tradiciones que une este libro. ITIL 4 sitúa este trabajo en la práctica de monitorización y gestión de eventos, con vínculos a la gestión de incidentes y a la gestión de niveles de servicio. Su preocupación es que los eventos se detecten, se clasifiquen y se encaminen de modo que los incidentes se encuentren pronto y se gestionen con coherencia. La [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) lo aborda desde el otro extremo: el libro *Site Reliability Engineering* de Google sostiene que los avisos deben ser urgentes, importantes, accionables y reales, y que todo lo demás pertenece a un ticket o a un panel. Los equipos ágiles lo encuentran como un acuerdo de trabajo: a quién se despierta, por qué y quién corrige una alerta equivocada. Las métricas siguientes toman de los tres y mantienen una regla: una métrica describe una rotación, un servicio o una regla de alerta, nunca a un individuo.

Este tema no repite a sus vecinos. Los tiempos de los incidentes pertenecen al tema 3.3, Tiempo de respuesta y resolución de incidentes, los incidentes graves al tema 3.4, Métricas de incidentes graves, los objetivos y presupuestos de errores al tema 5.2, SLI, SLO y presupuestos de errores, y la carga humana al tema 5.7, Métricas de trabajo repetitivo y guardias. Aquí el asunto es la calidad de la señal que inicia todo eso. La instrumentación se cubre en el tema 1.5, Fuentes de datos e instrumentación.

## Principios clave

- **Avisa por los síntomas que sienten los usuarios; el resto va a un ticket o a un panel.** Una alerta sobre lo que experimentan los usuarios (errores, lentitud, indisponibilidad) sigue siendo útil a medida que cambia el sistema. Una alerta sobre una causa (un disco lleno, una CPU ocupada) es útil solo cuando predice un síntoma y una persona puede actuar antes de que llegue.
- **Toda alerta debe llevar a una acción.** Si la respuesta correcta a una alerta es no hacer nada, la alerta debe cambiarse, rebajarse a ticket o borrarse. Mide la proporción que lleva a una acción y trata el resto como defectos de la monitorización.
- **Mide tanto la precisión como la exhaustividad.** Contar solo el ruido premia el silencio, y contar solo la cobertura premia el volumen. Las dos juntas describen la calidad, y cada una actúa como barrera de protección de la otra.
- **Trata cada regla de alerta como un producto con un responsable.** Una regla tiene un propósito, un umbral, un runbook y una fecha de revisión. Las reglas sin responsable se acumulan, y el ruido que producen no es de nadie.
- **Reporta rotaciones y servicios, nunca personas.** La carga de alertas es una propiedad de cómo se diseñan el sistema y la rotación. Nombrar a individuos convierte un problema de diseño en un problema de culpa y esconde la verdadera corrección.

## Definiciones de métricas

Las métricas siguientes se eligen como un conjunto. El volumen por sí solo no significa nada, la accionabilidad te dice si el volumen es un problema, y la cobertura y el tiempo de detección te dicen qué esconde la calma. Todas se calculan por servicio o por rotación, y todas usan el registro de alertas de las herramientas de monitorización y de avisos unido a los registros de incidentes y de tickets.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de alertas | Número de alertas que notificaron a un humano, dividido en avisos y tickets | Recuento de notificaciones distintas entregadas a una rotación o cola en el periodo; las repeticiones de la misma alerta abierta se agrupan en una; se excluyen las alertas gestionadas enteramente por automatización sin notificación a un humano; reporta por rotación y semana, y la proporción fuera de horario por separado | alertas por rotación-semana | Herramienta de avisos y encaminamiento de alertas | Monitorización y gestión de eventos | Acuerdo de trabajo del equipo sobre la guardia | Semanal |
| Tasa de alertas accionables | Proporción de alertas tras las cuales una persona tomó una acción útil | Alertas con una acción registrada (corrección, mitigación, escalada o un cambio en la regla de alerta) / alertas revisadas en el periodo; las alertas autorresueltas antes de cualquier acuse de recibo se cuentan como no accionables; las alertas sin revisar se reportan como un recuento aparte, no se descartan | porcentaje | Registro de alertas unido a la etiqueta de revisión, al ticket o al incidente | Monitorización y gestión de eventos; gestión de incidentes | Acción de mejora del equipo sobre las operaciones | Revisión semanal, tendencia mensual |
| Tasa de falsos positivos | Proporción de alertas que saltaron cuando no existía ningún problema | Alertas etiquetadas como falso positivo en la revisión / alertas revisadas en el periodo; «falso positivo» significa que la condición no era un fallo y nadie querría que se le avisara; un problema real demasiado menor para actuar no es un falso positivo | porcentaje | Etiquetas de revisión de alertas | Monitorización y gestión de eventos | Revisión de ruido en la retrospectiva | Mensual |
| Cobertura de detección | Proporción de servicios del ámbito que tienen al menos una alerta probada sobre un síntoma de cara al usuario | Servicios con una alerta de síntoma que se ejercitó mediante una prueba o un evento real en los últimos 12 meses / servicios del ámbito del catálogo de servicios; la lista de servicios del ámbito se fija al comienzo del periodo | porcentaje | Catálogo de servicios, inventario de reglas de alerta, registros de pruebas | Gestión de la configuración del servicio; monitorización y gestión de eventos | Definición de terminado para un servicio nuevo | Trimestral |
| Proporción de detección monitorizada | Proporción de incidentes que la monitorización detectó antes de que los reportara un usuario o un colega | Incidentes cuya primera señal fue una alerta / incidentes del periodo; el reloj es la hora de apertura del incidente, y los incidentes sin primera señal registrada se reportan como desconocidos, no como detectados | porcentaje | Registro del incidente con campo de primera señal, cronología de alertas | Gestión de incidentes | Revisión de incidentes (aprendizaje posterior al incidente) | Mensual |
| Tiempo de detección (TTD) | Tiempo transcurrido entre el comienzo del impacto en el usuario y la primera alerta que notificó a un humano | Hora de la primera alerta que notificó a un humano menos hora de inicio del impacto, donde el inicio del impacto es la primera hora en que el indicador de nivel de servicio incumplió, según se establece en la revisión del incidente; reporta la mediana y el percentil 95; los incidentes sin alerta se excluyen y se cuentan aparte | minutos | Revisión del incidente, cronología de alertas, historial del indicador de nivel de servicio | Gestión de incidentes; monitorización y gestión de eventos | Revisión posterior al incidente | Mensual, por incidente |
| Concentración de alertas | Proporción del volumen de alertas producida por las pocas reglas de alerta más ruidosas | Alertas de las cinco reglas con más alertas / todas las alertas del periodo; la misma alerta agrupada una vez; el recuento de cinco reglas es una convención que un equipo puede cambiar si declara por qué | porcentaje | Inventario de reglas de alerta y registro de avisos | Mejora continua; monitorización y gestión de eventos | Lista de pendientes de mejora de la retrospectiva | Mensual |
| Vigencia de las reglas de alerta | Proporción de reglas de aviso que tienen un responsable, un enlace a un runbook y una revisión dentro del intervalo acordado | Reglas de aviso que cumplen las tres condiciones / todas las reglas de aviso; se excluyen las reglas desactivadas en el periodo | porcentaje | Inventario de reglas de alerta | Gestión del conocimiento; monitorización y gestión de eventos | Acuerdo de trabajo sobre la preparación operativa | Trimestral |

El volumen de alertas necesita contexto, así que léelo junto a la tasa de alertas accionables. El tiempo de detección usa el inicio del impacto en el usuario, no el ticket, porque el reloj del ticket empieza después de la detección; el inicio del impacto es una estimación de la revisión del incidente y debe etiquetarse como tal. La tasa de falsos positivos y la tasa de alertas accionables no son complementarias, porque una alerta puede ser verdadera y aun así no valer el tiempo de una persona.

## Recomendaciones

### Decide qué merece un aviso

**1. Escribe una política de avisos y mantenla breve.** Indica en un párrafo qué merece un aviso (un síntoma que los usuarios sienten ahora o sentirán pronto, sobre el que una persona puede actuar) y qué no. Todo lo demás va a una cola de tickets o a un panel. El capítulo del libro de SRE de Google sobre la monitorización de sistemas distribuidos es un buen punto de partida (véase el tema 5.2, SLI, SLO y presupuestos de errores).

**2. Alerta sobre los síntomas y guarda las causas para el diagnóstico.** Un aviso por «tasa de errores por encima del umbral acordado» es un aviso sobre usuarios. Un aviso por «la CPU está alta» es un aviso sobre una conjetura. Mantén las señales de nivel de causa en los paneles donde mirará quien responde una vez que haya saltado la alerta de síntoma, y asciende una a aviso solo cuando prediga de forma fiable un síntoma con margen suficiente para actuar.

**3. Ata los umbrales de aviso al objetivo de nivel de servicio.** Donde un servicio tiene un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alerta sobre la tasa a la que se consume el presupuesto de errores en lugar de sobre umbrales en bruto. El capítulo del SRE Workbook sobre alertas basadas en SLO describe las alertas por tasa de consumo y las compensaciones entre precisión, exhaustividad, tiempo de detección y tiempo de reinicio. Este enfoque avisa por lo que amenaza el objetivo y calla ante los parpadeos breves que no lo hacen.

### Revisa cada alerta con un ritmo

**4. Etiqueta cada alerta en una revisión breve y regular.** Reserva quince minutos cada semana para que cada rotación mire lo que saltó. Para cada alerta, registra una etiqueta: accionable, falso positivo, real pero no merece un aviso o duplicada. Las etiquetas son los datos de la tasa de alertas accionables y de la tasa de falsos positivos, y la revisión es el lugar donde las reglas ruidosas se corrigen al día siguiente y no al trimestre siguiente.

**5. Haz que la revisión produzca un cambio.** Cada semana, elige al menos una regla que ajustar, rebajar, fusionar o borrar, y registra el cambio en la lista de pendientes del equipo como trabajo ordinario.

**6. Borra sin miedo.** Los equipos conservan alertas porque borrar una parece arriesgado y nadie recuerda por qué existe. Exige que cada regla de aviso lleve un propósito y un responsable, y acuerda que una regla que nunca ha llevado a una acción en un periodo declarado se retire o se rebaje, con el cambio registrado para poder revertirlo. La métrica de vigencia de las reglas hace visible la disciplina.

### Mide lo que la monitorización pasa por alto

**7. Haz seguimiento de la proporción de incidentes que encontraron primero los usuarios.** Tras cada incidente, registra cómo se notó por primera vez: una alerta, un colega, un cliente, un ticket de soporte o una comprobación rutinaria. La proporción encontrada por la monitorización es la medida práctica más cercana de la exhaustividad. No es completa, porque los incidentes que nadie notó nunca entran en la muestra, así que empárejala con pruebas periódicas de las propias alertas.

**8. Estima con honestidad el tiempo de detección.** Establece el inicio del impacto en el usuario en la revisión posterior al incidente a partir del historial del indicador de nivel de servicio, no de cuándo alguien tecleó el ticket. Reporta la mediana y un percentil alto, y muestra los incidentes que no tuvieron ninguna alerta como un recuento aparte. Un único promedio esconde tanto el caso típico como la cola mala (véase el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 3.3, Tiempo de respuesta y resolución de incidentes).

**9. Prueba las alertas de las que dependes.** La cobertura de detección solo es creíble si se ha visto funcionar la alerta. Incluye una comprobación en los simulacros o ensayos de versiones que provoque deliberadamente un síntoma y confirme que salta la alerta correcta, llega a la rotación correcta y enlaza con un runbook utilizable. Una alerta que nunca se ejercitó es una esperanza, no un control (véase el tema 5.6, Métricas de continuidad del servicio).

### Mantén sana la ruta de la señal

**10. Monitoriza la monitorización.** Un fallo silencioso del sistema de monitorización se parece exactamente a un servicio sano. Añade una comprobación de latido que avise si la tubería de alertas deja de entregar, y registra con qué frecuencia falla la propia tubería.

**11. Agrupa, deduplica y enlaza antes de contar.** Agrupa las alertas relacionadas en una, suprime las repeticiones de una alerta ya abierta y encamina cada una a la rotación propietaria. Enlaza cada alerta con su runbook y con el incidente o ticket que creó, porque esa unión es lo que te permite calcular la tasa de alertas accionables y la proporción de detección monitorizada sin contar a mano (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Volumen de alertas | Subir los umbrales, añadir largos retardos o mover alertas de avisos a una cola silenciosa para que el recuento baje mientras los problemas pasan desapercibidos; dividir o fusionar alertas para cambiar el recuento | Proporción de detección monitorizada y tiempo de detección; una regla de que cada rebaja se registre con su motivo y se revise tras un trimestre |
| Tasa de alertas accionables | Etiquetar alertas como accionables a posteriori, o tomar una acción trivial (un comentario, un acuse de recibo) para calificar; dejar sin revisar las alertas ruidosas para que nunca entren en el denominador | El recuento de alertas sin revisar mostrado junto a la tasa; una comprobación por muestreo hecha por alguien ajeno a la rotación; una definición de «acción útil» escrita |
| Tasa de falsos positivos | Definir los falsos positivos de forma estrecha para que las alertas «reales pero inútiles» cuenten como verdaderas; cerrar alertas ruidosas sin una etiqueta | Tasa de alertas accionables y la etiqueta «real pero no merece un aviso» seguidas por separado; muestreo periódico de las alertas cerradas |
| Cobertura de detección | Añadir una alerta trivial (un ping) a cada servicio para reclamar cobertura; contar alertas que nunca se han probado | El requisito de que la alerta vigile un síntoma de cara al usuario y se haya ejercitado en los últimos 12 meses; proporción de detección monitorizada |
| Proporción de detección monitorizada | Registrar cada incidente como «detectado por la monitorización» aunque lo reportara antes un usuario; crear una alerta a posteriori y citarla después; dejar vacío el campo de primera señal para evitar un mal número | El recuento de desconocidos mostrado junto a la proporción; evidencia de la primera señal tomada de la cronología de alertas, no de la memoria; incidentes reportados por clientes vinculados desde el registro de soporte |
| Tiempo de detección (TTD) | Declarar el inicio del impacto más tarde de lo que fue; excluir los incidentes sin alerta; reportar la media para esconder la cola | Inicio del impacto tomado del historial del indicador de nivel de servicio; los incidentes sin alerta contados y mostrados; mediana y percentil 95 reportados juntos |
| Concentración de alertas | Dividir una regla ruidosa en varias para que ninguna esté entre las cinco primeras; renombrar reglas | Reportar la concentración por fallo subyacente o servicio además de por regla; seguir el volumen total y la tasa de alertas accionables junto a ella |
| Vigencia de las reglas de alerta | Añadir responsables ficticios, enlaces vacíos a runbooks o una revisión de trámite para cumplir la condición | Una comprobación por muestreo de que el enlace al runbook funciona y se usó en una respuesta real; la práctica de probar el runbook en los simulacros |

Una lectura sana muestra varias cosas a la vez. El volumen de alertas por rotación es estable o decreciente y está dentro de un nivel que el equipo eligió como sostenible. La tasa de alertas accionables sube a lo largo de varios meses a medida que se ajustan las reglas más ruidosas. La proporción de detección monitorizada es alta y el tiempo de detección es corto y no se alarga al bajar el volumen, lo que prueba que la calma se ganó y no se compró. La cobertura de detección crece porque se prueban los servicios, no porque se añadieran alertas triviales. Si el volumen baja mientras empeoran la proporción de detección o el tiempo de detección, el equipo ha cambiado exhaustividad por paz, y las barreras de protección son lo que lo revela.

## Compensaciones: ventajas y desventajas

| Enfoque | Ventajas | Desventajas |
| --- | --- | --- |
| Pocos avisos basados en síntomas | Noches tranquilas, mucha confianza en cada aviso, fáciles de mantener vigentes | Riesgo de detección tardía de los problemas de formación lenta; exige buenos hábitos de tickets y paneles para el resto |
| Muchas alertas sensibles | Aviso temprano de problemas de nivel de causa; menos incidentes omitidos | Fatiga de alarmas, acuse de recibo más lento y abandono de las rotaciones de guardia |
| Alertas por tasa de consumo del SLO | Avisos atados a lo que amenaza el objetivo; menos parpadeos | Necesita buenos indicadores y un objetivo acordado; requiere ajuste para equilibrar el tiempo de detección y la precisión |
| Revisión semanal de alertas | Retroalimentación rápida; reglas ruidosas corregidas pronto | Cuesta tiempo cada semana; se vuelve teatro si no sigue ningún cambio |
| Etiquetado por humanos | Capta un juicio que ninguna herramienta tiene | Subjetivo; las etiquetas derivan entre revisores y rotaciones salvo que las definiciones estén escritas |
| Supresión y agrupación automatizadas | Recorta el ruido a escala; reduce los avisos repetidos | Puede esconder señales reales si las reglas son erróneas; necesita su propia monitorización y revisión |

Toda elección intercambia precisión por exhaustividad, y el intercambio debe hacerse a propósito y anotarse por servicio, porque es el contexto que permite a cualquiera leer los números con justicia. Un servicio con consecuencias graves por un fallo omitido puede aceptar una tasa de accionables menor a cambio de un aviso más temprano, con una capa de clasificación que envíe las alertas extra a una cola de tickets por la noche.

## Preguntas para debatir con tu equipo

**1. ¿Por qué querríamos que nos despertaran y cuáles de los avisos del mes pasado cumplieron ese criterio?** Escriban la política de avisos en una o dos frases y tomen después los avisos del mes pasado y pongan a prueba cada uno frente a ella. El ejercicio vale más que el porcentaje que produce, porque los desacuerdos revelan dónde difieren las expectativas del equipo. Anoten los innecesarios como candidatos a rebajar.

**2. Si la regla de alerta más ruidosa desapareciera mañana, ¿qué perderíamos?** Hagan la pregunta para cada una de las cinco reglas principales por volumen. A menudo nadie sabe nombrar un fallo concreto que la regla haya captado alguna vez, y es señal de que se puede ajustar o retirar. Donde alguien pueda, pregunten si el fallo también dispararía una alerta de síntoma.

**3. ¿Cómo nos enteramos de lo que la monitorización pasó por alto?** Miren los últimos incidentes y pregunten quién lo notó primero y cuánto duró el impacto antes de eso. La respuesta da la proporción de detección monitorizada y un tiempo de detección aproximado sin herramientas nuevas. Hablen de qué señal habría captado cada uno antes.

**4. ¿Es sostenible nuestra carga de guardia y cómo lo sabríamos?** Acuerden qué significa sostenible para una rotación, como un límite de avisos fuera de horario por semana, y revisen la tendencia por rotación, no por persona. Si la carga está por encima del nivel acordado, trátenla como un defecto del servicio y planifiquen trabajo para reducirla. Mantengan las medidas coherentes con el tema 5.7, Métricas de trabajo repetitivo y guardias.

**5. ¿Cuáles de nuestras alertas nunca hemos probado y cómo podríamos probarlas con seguridad?** Enumeren los servicios que dependen de una única alerta de síntoma y pregunten si alguien la ha visto saltar en serio o en un ensayo. Planifiquen una prueba y comprueben la ruta completa: detección, encaminamiento, notificación, runbook. Consideren si un fallo de la tubería de alertas sería visible siquiera.

**6. ¿Cómo podrían manipularse aquí estos números y qué notaríamos?** Pide al equipo que describa con honestidad cómo podría hacer que cada cifra pareciera mejor sin mejorar nada. Acuerden después qué barrera de protección lo mostraría y quién la mira. Nombrar los trucos de antemano los hace menos tentadores (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos que construyen y operan un servicio deciden lo que este reporta sobre sí mismo, así que la calidad de las alertas empieza en la definición de terminado. Una función nueva que se entrega con su propio indicador y su propia alerta probados evita una monitorización añadida a posteriori tras el primer incidente. Trata el ajuste de alertas como trabajo ordinario de la lista de pendientes.

### Equipos de servicio y de operaciones

Los equipos de operaciones llevan el buscapersonas y sienten el costo primero, así que poseen el ritmo de revisión, el etiquetado y el latido de la tubería. Cuando una alerta es errónea, la corrección corresponde al propietario de la regla, no a quien recibió el aviso.

### Liderazgo y gobernanza

Los líderes pueden pedir cifras de detección y de accionabilidad por servicio, financiar el tiempo de ajuste y resistirse a un objetivo sobre el volumen de alertas que premie el silencio. Un volumen decreciente es una buena noticia solo si la proporción de detección y el tiempo de detección se mantienen estables. Los límites sostenibles de guardia son una decisión de dotación y de diseño, no motivacional.

### Clientes y usuarios

Los clientes nunca ven una alerta; ven si el servicio falló y cuánto se tardó en arreglarlo. Una buena monitorización se muestra como incidentes corregidos antes de que lo noten y menos casos en que un cliente informa primero. Donde la organización usa medidas de experiencia (véase el tema 5.1, Métricas de SLA, OLA y XLA), la proporción de incidentes reportados primero por los usuarios es un indicador directo de la brecha de experiencia.

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera una plataforma de pedidos con cuatro equipos de producto y un equipo de plataforma que apoya la rotación de guardia. Todos los números de este ejemplo son ilustrativos. A lo largo de cuatro semanas (ilustrativo) la rotación recibió 240 avisos, 70 de ellos entre las 22:00 y las 07:00. El equipo revisa cada aviso con cuatro etiquetas: accionable, falso positivo, real pero no merece un aviso y duplicado.

La revisión muestra una tasa de alertas accionables del 31 por ciento (ilustrativo) y una tasa de falsos positivos del 22 por ciento (ilustrativo). Cinco reglas produjeron el 58 por ciento de los avisos (ilustrativo), y la mayor era un umbral de disco en un servidor de procesos por lotes que siempre se recuperaba solo. La proporción de detección monitorizada del trimestre anterior fue del 62 por ciento (ilustrativo), y el tiempo de detección mediano fue de 14 minutos (ilustrativo) con un percentil 95 de 51 minutos (ilustrativo).

El equipo rebaja tres reglas ruidosas a una cola de tickets, fusiona duplicados para que un fallo produzca un aviso, sustituye la alerta de recuento bruto de errores en el pago por una alerta de tasa de consumo del presupuesto de errores (véase el tema 5.2, SLI, SLO y presupuestos de errores) y añade una alerta de síntoma para los correos de confirmación de pedido, una laguna detrás de dos incidentes reportados por clientes. Cada cambio es un elemento de la lista de pendientes con un responsable. Cuatro semanas después los avisos bajan a 96 (ilustrativo) y la tasa de accionables sube al 64 por ciento (ilustrativo), mientras que la proporción de detección sube al 71 por ciento (ilustrativo) y el tiempo de detección mediano se mantiene en 14 minutos. La calma parece ganada.

El riesgo de manipulación aparece en el tercer mes. Un gerente nuevo fija un objetivo informal de menos de 60 avisos por cuatro semanas, y una rotación lo alcanza alargando el retardo de la alerta de errores del pago. Su proporción de detección baja al 55 por ciento (ilustrativo) y su tiempo de detección del percentil 95 sube a 80 minutos (ilustrativo). Como las barreras de protección están junto al volumen, la revisión lo detecta. El equipo retira el objetivo de volumen, restablece la alerta y registra el caso en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Agilidad, IA, automatización y analítica

### Agilidad

Revisa las alertas con una cadencia regular como un producto usado por personas de guardia, y retira o ajusta las ruidosas con las partes interesadas. La precaución es que un objetivo de recortar el volumen de alertas puede eliminar alertas útiles.

### IA

La IA puede agrupar, resumir y ordenar alertas, y puede sugerir causas. Empareja la reducción de ruido con la tasa de omisión de incidentes reales y haz seguimiento de la proporción de agrupaciones de la IA que una persona dividió o fusionó. La precaución es que la supresión por un modelo puede esconder una alerta rara pero grave.

### Automatización

Cuenta las alertas automáticamente por regla y por resultado, y mide la automatización de alertas por sus errores de supresión. La precaución es que las alertas autorresueltas pueden parecer sistemas sanos cuando la regla simplemente oscila.

### Analítica

Reporta la tasa de alertas accionables y la cobertura de detección, con los incidentes notados primero por los usuarios. La decisión a la que informa es qué alertas corregir o retirar. La precaución es que la cobertura medida frente a incidentes conocidos ignora los modos de fallo que nadie ha visto aún.

## Perspectiva sectorial

**Startup.** Con un puñado de ingenieros todos de guardia, la prioridad es una política de avisos breve y unas pocas alertas de síntoma en los caminos que generan ingresos. Basta una mirada de diez minutos los lunes a lo que despertó a la gente. El riesgo principal es no tener alertas, de modo que los clientes son la monitorización; cuenta con qué frecuencia te avisó primero un cliente.

**Pequeña empresa.** Las organizaciones pequeñas suelen apoyarse en la monitorización de un proveedor. Las medidas útiles son la cobertura de detección de los pocos sistemas que paran el negocio y la proporción de incidentes encontrados por los usuarios. Pide a los proveedores los datos de alertas a los que te da derecho tu contrato.

**Gran empresa.** Las grandes organizaciones tienen muchas herramientas y rotaciones, y cada equipo puede definir «accionable» de forma distinta. Estandariza las definiciones y las etiquetas, revisa a nivel de equipo y agrega por servicio y no por herramienta. Las plataformas de correlación de eventos reducen el volumen a escala, pero necesitan sus propias comprobaciones de exhaustividad.

**Gobierno y sector público.** Algunos servicios funcionan en horario de oficina y otros, como los de emergencias o prestaciones, funcionan de forma continua. La cobertura de detección y las alertas probadas importan más donde el fallo conlleva consecuencias legales o de seguridad, y los registros de pruebas pueden respaldar la auditoría. Reporta a los órganos de supervisión la cobertura y la detección, no los recuentos brutos de alertas, que son fáciles de malinterpretar (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las razones para invertir son prácticas. Una mejor detección acorta el tiempo que los usuarios están afectados. Menos avisos inútiles protegen el sueño, reducen el abandono de la rotación y reservan la atención para las alertas que importan. El costo de una mala calidad de alertas es difícil de ver porque está repartido entre sueño interrumpido, respuestas lentas y salidas de ingenieros con experiencia.

El costo de recoger estas métricas es pequeño si las herramientas de alertas, avisos e incidentes se pueden unir, y moderado si las etiquetas se añaden a mano. Los costos principales son el tiempo de revisión semanal, el trabajo de ajuste y borrado y las pruebas ocasionales de detección. Podar las reglas sin uso recorta además los costos de licencia y almacenamiento de la monitorización, y el costo total de propiedad debe incluir el tiempo de las personas.

El retorno aparece en pocos meses como rotaciones más tranquilas, una proporción de detección monitorizada creciente y un tiempo de detección que no empeora. Para convertirlo en dinero, compara el costo de las horas de incidentes y de la rotación de personal con el costo de la revisión, usando tus propias cifras. No uses promedios del sector salvo que puedas citar una fuente verificada.

## Antipatrones y trampas

- **Fijar un objetivo al volumen de alertas.** Un objetivo sobre el recuento premia el silencio e invita a esconder alertas. Fija objetivos sobre la tasa de alertas accionables y la proporción de detección, y usa el volumen como cifra de contexto con un límite de sostenibilidad elegido por el equipo.
- **Alertar sobre cada causa.** Decenas de avisos de nivel de causa producen ruido y aun así pasan por alto el síntoma en que nadie pensó. Alerta en su lugar sobre los síntomas de cara al usuario.
- **Añadir una alerta después de cada incidente y no retirar nunca ninguna.** Empareja cada alerta nueva con una revisión de las que vuelve redundantes.
- **Contar alertas sin etiquetarlas.** Un recuento sin un juicio de utilidad no puede distinguir una rotación ruidosa de una ocupada. Etiqueta una muestra cada semana, aunque solo haya unos minutos disponibles.
- **Tratar la cobertura como un recuento de alertas.** Un servicio con cincuenta alertas de causa y ninguna de síntoma está mal cubierto. Define la cobertura como detección de síntomas probada.
- **Clasificar a las personas por avisos atendidos o acusados.** Castiga a los miembros de la rotación que asumen los turnos difíciles y fomenta evitar el buscapersonas. Reporta por rotación y servicio y busca correcciones de diseño.
- **No probar nunca la ruta de las alertas.** Una alerta de la que no se ha visto que funcione es una suposición. Incluye pruebas de alertas en los simulacros y monitoriza la propia tubería.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Política de avisos y propiedad de las reglas | Alertas añadidas ad hoc; nadie sabe por qué existen muchas | Algunos equipos tienen una política y responsables para sus reglas | Una política de avisos breve; cada regla de aviso tiene un responsable y un runbook | Vigencia de las reglas seguida y revisada; reglas sin uso retiradas según un calendario | Política y propiedad adaptadas entre equipos y proveedores según cambian los servicios |
| Medición de la calidad de las alertas | Quejas por ruido; sin recuentos | Volumen contado por algunos equipos; sin etiquetado | Revisión semanal con etiquetas comunes; tasa de alertas accionables y de falsos positivos reportadas por servicio | Tasas con tendencias y emparejadas con medidas de detección; trabajo de mejora financiado | Calidad vinculada entre servicios y proveedores; definiciones revisadas cuando dejan de informar decisiones |
| Detección y cobertura | Clientes y colegas reportan la mayoría de los problemas | Alertas de síntoma en unos pocos servicios clave | Cobertura de detección seguida con alertas probadas; primera señal registrada en cada incidente | Tiempo de detección y proporción de detección monitorizada revisados con una barrera de protección; las lagunas pasan a ser trabajo planificado | Detección probada de forma rutinaria entre dependencias y proveedores, incluida la tubería de alertas |
| Uso en la mejora | Las correcciones de alertas siguen a la peor noche | Las correcciones siguen a los incidentes | Cada revisión produce al menos un cambio | Cambios seguidos hasta su efecto sobre el volumen, la accionabilidad y la detección | Carga de la rotación, detección y presupuestos de errores revisados juntos para orientar la inversión |

## Lista de verificación

- [ ] Tenemos una política de avisos escrita, de unas pocas frases, que dice qué merece un aviso.
- [ ] Cada regla de aviso tiene un responsable, un propósito y un enlace a un runbook.
- [ ] Cada rotación revisa lo que saltó al menos semanalmente y etiqueta cada alerta.
- [ ] Cada revisión produce al menos un cambio registrado en una regla.
- [ ] Reportamos el volumen de alertas, la tasa de alertas accionables y la tasa de falsos positivos por rotación y servicio, nunca por persona.
- [ ] Cada incidente registra cómo se detectó por primera vez, con una opción de desconocido.
- [ ] Estimamos el inicio del impacto a partir del historial del indicador de nivel de servicio y reportamos la mediana y el percentil 95 del tiempo de detección.
- [ ] Cada servicio del ámbito tiene una alerta de síntoma probada en los últimos 12 meses.
- [ ] Una comprobación de latido nos avisa si la tubería de alertas se detiene.
- [ ] Hemos acordado una carga sostenible fuera de horario para cada rotación y la revisamos.
- [ ] No se fija ningún objetivo solo sobre el volumen de alertas.

## Prompts de IA

**Propósito: Redactar una política de avisos para un servicio a partir de sus indicadores y consecuencias.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Propósito: Analizar una revisión de alertas exportada en busca de patrones de ruido.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Propósito: Comprobar un conjunto de métricas de alertas en busca de riesgos de manipulación antes de publicarlo.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Propósito: Planificar una prueba de detección para servicios con poca cobertura.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que define una medida relacionada y la barrera de protección que debe ir junto a una métrica de calidad de alertas.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Ideas clave

- Juzga las alertas por si llevaron a una acción y juzga la monitorización por cuántos problemas reales captó; la precisión y la exhaustividad se protegen mutuamente.
- Avisa por los síntomas que sienten los usuarios, ata los umbrales al objetivo de nivel de servicio donde exista uno y guarda las causas para el diagnóstico.
- Revisa cada semana lo que saltó, etiquétalo y haz al menos un cambio cada vez.
- No fijes nunca un objetivo solo sobre el volumen de alertas; léelo junto a la tasa de alertas accionables, la proporción de detección monitorizada y el tiempo de detección.
- Prueba las alertas y la tubería de alertas, porque una alerta sin probar es una suposición.
- Reporta por rotación y servicio, nunca por persona, y trata la carga sostenible de guardia como un objetivo de diseño.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
