# Métricas de análisis posteriores y aprendizaje

**Una revisión que se escribe, se archiva y se olvida no ha enseñado nada a nadie, así que mide si las revisiones se hacen, si son buenas, si sus acciones terminan y si las mismas causas dejan de volver, y mantén sin culpas toda la práctica para que la gente siga diciendo la verdad.**

## Visión general y motivación

Todo servicio falla alguna vez. Lo que separa a un equipo que mejora de forma constante de un equipo que repite su peor semana es lo que ocurre en los días posteriores al fallo. Un [análisis posterior](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) es un relato escrito de un incidente o de un cuasi accidente: qué ocurrió, cómo se detectó y se gestionó, qué condiciones lo hicieron posible y qué cambiará el equipo. ITIL llama a la actividad revisión posterior al incidente, y este tema usa ambos nombres indistintamente. Una reflexión regular del equipo es un pariente cercano que mira el trabajo ordinario en lugar de una caída.

Este tema cubre las medidas que dicen si ese bucle de aprendizaje funciona. Plantea cuatro preguntas. ¿Se hacen realmente las revisiones que deberían hacerse? ¿Son lo bastante buenas como para encontrar algo real? ¿Terminan las acciones que producen? ¿Y sigue volviendo, aun así, la misma causa? Una quinta pregunta corre por debajo de las demás: ¿se sienten las personas lo bastante seguras como para describir lo que ocurrió de verdad?

El tema se sitúa entre dos vecinos y evita repetirlos. Las métricas de incidentes graves (véase el tema 3.4, Métricas de incidentes graves) miden la puntualidad de la revisión y el seguimiento de sus acciones para los incidentes graves declarados, y son el hogar de esas dos medidas en ese ámbito estrecho. Las métricas de gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas) poseen el registro del problema, el error conocido y el tiempo hasta una corrección permanente. Este tema amplía la vista a todas las gravedades de incidente, a los cuasi accidentes y a las retrospectivas de equipo, y posee la calidad del propio aprendizaje: cobertura, profundidad, cierre de acciones de todas las fuentes, recurrencia de causas y las señales sin culpas que mantienen honestos los datos.

### Términos usados en este tema

- **Análisis posterior o revisión posterior al incidente:** un examen estructurado y sin culpas de un incidente después de restablecido el servicio, que termina en un registro escrito.
- **Cuasi accidente (near miss):** un evento que podría haber causado un incidente o un daño pero no lo hizo, por ejemplo un despliegue fallido detectado en un entorno de pruebas o una alerta que saltó minutos antes de que los usuarios lo notaran.
- **Acción de seguimiento:** un cambio concreto con un equipo propietario con nombre, una fecha de vencimiento y una forma de saber cuándo está hecho.
- **Factor contribuyente:** una condición que hizo posible o empeoró el incidente. La mayoría de los incidentes tienen varios. Una única «causa raíz» suele ser una simplificación, y el [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis) se trata mejor como una búsqueda de condiciones, no de un culpable.
- **Clase de causa:** una etiqueta estable de una lista breve y acordada (por ejemplo «límite de capacidad», «deriva de configuración», «monitorización ausente», «propiedad poco clara») usada para detectar la recurrencia. Describe una condición del sistema, nunca a una persona.
- **Sin culpas (blameless):** un estilo de revisión que pregunta cómo permitió el sistema que una persona razonable actuara como lo hizo, y no pregunta a quién castigar. Es una práctica, y está ligada a la idea de una [cultura justa](https://en.wikipedia.org/wiki/Just_culture), en la que los errores honestos se tratan como aprendizaje y los actos temerarios se siguen gestionando por separado.
- **Information Technology Infrastructure Library (ITIL):** el marco ampliamente usado para la gestión de servicios de TI (ITSM). Este tema se refiere a las prácticas tal como se describen en ITIL 4 (2019), y el libro en su conjunto está fechado a octubre de 2026. Véase [ITIL](https://en.wikipedia.org/wiki/ITIL).

### En qué difieren las visiones ágil y de ITIL

ITIL aporta estructura. En ITIL 4, la gestión de incidentes restablece el servicio, la gestión de problemas reduce la probabilidad y el impacto de los incidentes encontrando y gestionando las causas, y la mejora continua convierte lo aprendido en cambio financiado. La revisión es la bisagra entre las dos primeras y la tercera. ITIL tiende a preguntar si se celebró la revisión, si se abrió un registro de problema donde estaba justificado y si se registró la mejora.

Las tradiciones ágil y de [ingeniería de fiabilidad del sitio (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) aportan hábitos. Las revisiones son sin culpas, breves, escritas para lectores más allá del equipo y ampliamente compartidas. La reflexión regular del equipo, un hábito de mejora continua, pregunta qué cambiar a continuación, y la preferencia [ágil](https://en.wikipedia.org/wiki/Agile_software_development) por un ajuste pequeño y frecuente sustituye al único programa de mejora grande. El libro *Site Reliability Engineering* de Google dedica un capítulo a la cultura de los análisis posteriores y sostiene que un proceso de revisión es tan bueno como la cultura que lo rodea.

Usadas juntas, las dos visiones son fuertes. ITIL da reglas de cobertura y un lugar donde vivir a la acción. Los hábitos ágiles y de SRE dan honestidad y rapidez. Medidas juntas, muestran si el bucle se está cerrando.

## Principios clave

- **El aprendizaje es el producto, no el documento.** Una revisión ha tenido éxito cuando algo cambia en el sistema, el proceso o la comprensión compartida. Cuenta el cambio, no el papeleo.
- **Sin culpas es una condición previa de los buenos datos.** Si la gente teme las culpas, la cronología será pobre, los factores contribuyentes serán ordenados y el mismo incidente volverá. Protege la franqueza antes de medir cualquier otra cosa.
- **Mide el seguimiento y la recurrencia, no el volumen.** El número de revisiones dice poco. La proporción de acciones terminadas y la proporción de causas que se quedan atrás dicen mucho.
- **Mantén las métricas a nivel de equipo y de sistema.** Una revisión trata de condiciones. No cuentes nunca revisiones, acciones ni errores por persona y no uses nunca estos números en conversaciones de evaluación del desempeño.
- **Ajusta el tamaño de la revisión.** No todo evento merece un documento largo. Fija los desencadenantes por impacto y por valor de aprendizaje, y deja que un evento pequeño reciba una revisión breve.
- **Deja que las acciones compitan con honestidad.** Una acción es trabajo. Pertenece a la misma lista de pendientes que el resto del trabajo, se prioriza frente a él y puede rechazarse con un motivo registrado.
- **Lee las revisiones.** Los números localizan el problema. Una persona que lee una muestra te dice si las revisiones son buenas.

## Definiciones de métricas

Las métricas siguientes describen el bucle de aprendizaje de un servicio o de un grupo de equipos. Cada una indica qué se cuenta, dónde empiezan y se detienen los relojes y qué se excluye. Las medidas de tiempo deben mostrarse como una mediana y un percentil alto (por ejemplo el 85) con la antigüedad del elemento abierto más antiguo, no como un promedio (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de revisiones | Proporción de eventos que cumplen los criterios y que recibieron una revisión completada | Eventos que cumplen los criterios con una revisión publicada dentro de la ventana acordada / eventos que cumplen los criterios cerrados en el periodo. Los eventos que cumplen los criterios son los que satisfacen los desencadenantes escritos. Se excluyen los eventos aún dentro de la ventana y abiertos al cierre del periodo. | porcentaje | Registros de incidentes de la herramienta ITSM unidos al repositorio de revisiones | Gestión de incidentes; gestión de problemas | Reflexión regular del equipo; acuerdos de trabajo del equipo | Mensual |
| Puntuación de calidad de las revisiones | Si una revisión publicada cumple una norma escrita breve | Revisiones de una muestra que cumplen al menos [número acordado] de los elementos de la lista de verificación / revisiones de la muestra. La muestra es un número fijo de revisiones extraídas al azar cada trimestre y puntuadas por alguien ajeno al equipo propietario. | porcentaje | Muestra trimestral del repositorio de revisiones con una hoja de puntuación | Mejora continua; gestión de problemas | Definición de terminado de una revisión | Trimestral |
| Tasa de cierre de acciones | Proporción de acciones de revisión completadas en su fecha de vencimiento | Acciones completadas o rechazadas formalmente (con un motivo) en su fecha de vencimiento / acciones con vencimiento en el periodo. El reloj empieza cuando se publica la revisión y se detiene cuando el equipo propietario marca la acción como hecha y un revisor lo confirma. Las acciones cerradas como «no se hará» se cuentan por separado y se reportan. | porcentaje | Lista de pendientes del equipo o registro de mejoras de ITSM, vinculado a la revisión | Mejora continua; gestión de problemas | Lista de pendientes del equipo; acciones de mejora | Mensual |
| Antigüedad de las acciones abiertas | Antigüedad de las acciones de revisión aún abiertas | Para cada acción abierta, hoy menos la fecha de publicación de su revisión. Se reportan la mediana, el percentil 85 y la más antigua. | días | Lista de pendientes del equipo o registro de mejoras | Mejora continua | Antigüedad del elemento de trabajo; trabajo en curso envejecido | Mensual |
| Tasa de recurrencia de causas | Proporción de eventos cuya clase de causa coincide con un evento anterior del mismo servicio | Eventos del periodo cuya clase de causa principal coincide con una revisión cerrada en los doce meses anteriores para el mismo servicio / eventos con una clase de causa registrada en el periodo. Los eventos sin clase de causa registrada se excluyen y se cuentan por separado. | porcentaje | Campo de clase de causa del repositorio de revisiones unido a los registros de incidentes | Gestión de problemas; gestión de incidentes | Análisis de defectos escapados; temas de las retrospectivas | Trimestral |
| Tasa de reporte de cuasi accidentes | Volumen de cuasi accidentes y señales débiles que la gente decide reportar | Cuasi accidentes registrados en el periodo / servicios activos, mostrado como tendencia por servicio y nunca por persona. La tasa debe subir al principio en un programa sano y luego estabilizarse. | recuento por servicio | Registro de cuasi accidentes, o un campo etiquetado en el gestor de incidencias | Gestión de incidentes; gestión de riesgos | Comprobación de salud del equipo; tablero de impedimentos | Mensual |
| Alcance del aprendizaje | Hasta dónde viaja una revisión más allá del equipo que la escribió | Revisiones presentadas o comentadas fuera del equipo propietario (un foro compartido, una sesión entre equipos o una lectura documentada por un equipo dependiente) dentro de [número acordado] días desde la publicación / revisiones publicadas en el periodo | porcentaje | Registros de foros o reuniones y repositorio de revisiones | Mejora continua; gestión del conocimiento | Revisión con las partes interesadas; comunidades de práctica | Trimestral |
| Arrastre de acciones de la retrospectiva | Proporción de acciones de la retrospectiva del equipo que se terminaron antes de la siguiente retrospectiva | Acciones de la retrospectiva completadas antes de la siguiente retrospectiva / acciones de la retrospectiva acordadas en la anterior. Las acciones abandonadas deliberadamente con un motivo se retiran de ambos recuentos. | porcentaje | Notas o tablero de la retrospectiva, guardados en la lista de pendientes del equipo | Mejora continua | Reflexión regular del equipo | Por periodo de revisión, revisado cada trimestre |
| Pulso de seguridad para hablar | Si la gente cree que puede describir errores sin culpas | Proporción de respuestas en [nivel acordado] o superior en un breve conjunto anónimo de preguntas (por ejemplo «puedo describir un error en una revisión sin temor a ser culpado») / respuestas recibidas. El pulso se reporta solo para grupos lo bastante grandes como para proteger el anonimato. | porcentaje | Encuesta de pulso anónima | Mejora continua; cambio organizativo | Comprobación de salud del equipo; comprobación de seguridad psicológica | Trimestral |

Una revisión está «publicada» cuando es visible para los lectores previstos, no guardada como borrador. Una clase de causa la registra el grupo de revisión a partir de la propia revisión, de una lista breve acordada, nunca quien cerró el ticket.

## Recomendaciones

### Decide qué merece una revisión

**1. Escribe los desencadenantes y publícalos.** Una regla como «todo incidente grave, todo incidente de las dos gravedades superiores, todo evento con pérdida de datos de clientes y todo cuasi accidente que el equipo considere instructivo» elimina la discusión y hace medible la cobertura. Sin desencadenantes escritos, las revisiones siguen el ánimo y la carga de trabajo, y la cifra de cobertura no significa nada.

**2. Ajusta la revisión al evento.** Un evento pequeño puede tener una revisión de media página escrita en treinta minutos, mientras que un incidente grave puede merecer una cronología completa y una sesión facilitada. Una vía ligera mantiene alta la cobertura sin convertir la práctica en una carga.

### Juzga la calidad leyendo

**3. Muestrea y lee revisiones cada trimestre.** Extrae una pequeña muestra aleatoria y haz que alguien ajeno al equipo propietario lea cada una frente a una lista de verificación breve. Los elementos útiles incluyen una cronología que muestre las decisiones y la información disponible cuando se tomaron, más de un factor contribuyente, una descripción de lo que fue bien, acciones con responsables y fechas y un lenguaje que describa el sistema y no al individuo. Reporta la proporción que cumple la norma y devuelve los hallazgos a los autores como acompañamiento.

**4. Enseña la habilidad de revisar.** El [sesgo retrospectivo](https://en.wikipedia.org/wiki/Hindsight_bias) hace que los eventos parezcan obvios a posteriori y empuja a los autores hacia «alguien debió notarlo». Pide a los facilitadores que reconstruyan lo que sabía la gente en cada momento y usa los [cinco porqués](https://en.wikipedia.org/wiki/Five_whys) como estímulo para hacer preguntas, no como receta de una única respuesta.

### Haz que las acciones terminen

**5. Pon las acciones en la lista de pendientes real.** Una acción que vive solo en un documento de revisión es invisible para la planificación. Crea un elemento de trabajo en el gestor del equipo propietario, vincúlalo a la revisión y deja que compita por la capacidad como cualquier otro trabajo. Reporta el cierre por equipo y servicio para que una acción bloqueada se haga visible a quienes pueden desbloquearla.

**6. Permite un «no se hará» honesto y registra por qué.** Algunas acciones resultan demasiado costosas o dejan de ser relevantes. Cerrarlas con un motivo declarado es más sano que dejarlas abiertas un año o marcarlas como hechas sin hacerlas. Reporta la proporción rechazada, porque una proporción muy alta sugiere que el proceso de revisión propone acciones que nadie financiará.

**7. Haz seguimiento de la antigüedad de las acciones abiertas además de la tasa de cierre.** El percentil 85 de la antigüedad de las acciones abiertas y la acción abierta más antigua muestran qué está atascado. Revisa la más antigua en la reunión que revisa la fiabilidad del servicio.

### Vigila las repeticiones

**8. Mantén una lista corta de clases de causa y etiqueta cada revisión.** Basta una lista de ocho a quince clases. Revisa la lista cuando más de una pequeña proporción de eventos caiga en una clase «otros». Etiquetar permite responder a la pregunta «¿hemos visto esto antes?» con datos, y alimenta a la gestión de problemas con patrones que ninguna revisión individual muestra (véase el tema 4.1, Métricas de gestión de problemas, y el tema 4.6, Deuda técnica y errores conocidos).

**9. Trata la recurrencia como una señal sobre la acción, no sobre las personas.** Cuando una clase de causa vuelve, pregunta si las acciones anteriores se terminaron, si eran las acciones correctas y si la clase es demasiado amplia. La recurrencia después de cerradas todas las acciones significa que las acciones no funcionaron, lo que es una noticia útil.

### Protege la honestidad

**10. Mantén las revisiones sin culpas y hazlo visible.** Indica en la plantilla que la revisión describe condiciones y decisiones y no asigna culpa, y pide a los líderes que agradezcan a los autores su franqueza. La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety), en la investigación de Amy Edmondson sobre los equipos de trabajo, es la creencia compartida de que el equipo es seguro para asumir riesgos interpersonales (véase el tema 9.2, Métricas de satisfacción y bienestar).

**11. Premia los reportes de cuasi accidentes y lee un recuento creciente como buena noticia al principio.** Un equipo que empieza a reportar cuasi accidentes verá subir el recuento, porque los eventos siempre habían estado ocurriendo. Dilo de antemano, haz seguimiento de la proporción de cuasi accidentes que produjeron un cambio y publica las historias con el consentimiento del equipo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de revisiones | Estrechar los desencadenantes; rebajar la gravedad para que los eventos queden fuera de ellos; presentar una «revisión» de una línea para marcar la casilla | Puntuación de calidad de las revisiones; comparar los recuentos de gravedad de incidentes con el impacto declarado por los clientes; auditar las rebajas |
| Puntuación de calidad de las revisiones | Escribir para la lista de verificación con texto de relleno; puntuar por parte del equipo propietario; una muestra predecible | Puntuador externo; muestra aleatoria; leer dos revisiones en voz alta cada trimestre; hacer seguimiento de si terminan las acciones de las revisiones con puntuación alta |
| Tasa de cierre de acciones | Fijar fechas de vencimiento lejanas; dividir las acciones en piezas triviales; cerrar acciones sin verificación; declarar «no se hará» para despejar la lista | Antigüedad de las acciones abiertas; proporción rechazada con sus motivos; confirmación del revisor de que el cambio funciona; tasa de recurrencia de causas |
| Antigüedad de las acciones abiertas | Cerrar y reabrir o recrear una acción para reiniciar su antigüedad; trasladar acciones a una lista aparte de «ideas» | Vincular las acciones nuevas con la revisión de origen y conservar la primera fecha; recuento de acciones trasladadas a ideas |
| Tasa de recurrencia de causas | Registrar clases de causa vagas o cambiantes para que nada coincida; usar una clase amplia de «otros»; vincular una repetición a una clase distinta | Proporción de eventos en «otros»; relectura periódica de las revisiones por clase; revisión de la propia lista de clases |
| Tasa de reporte de cuasi accidentes | Pedir reportes para alcanzar un número; registrar eventos triviales o, en sentido contrario, leer el número como un fracaso y suprimir los reportes | Proporción de cuasi accidentes que llevaron a un cambio; sin objetivos sobre el recuento; retroalimentación del pulso de seguridad para hablar |
| Alcance del aprendizaje | Añadir nombres a una lista de distribución; presentar en sesiones poco concurridas; contar un enlace como una lectura | Asistencia o notas reales de la discusión; preguntar a los equipos dependientes qué cambiaron tras la última revisión |
| Arrastre de acciones de la retrospectiva | Acordar solo acciones triviales y fáciles de terminar; saltarse la retrospectiva; marcar elementos como completados | Impacto de las acciones según el juicio del equipo; tasa de retrospectivas celebradas; si el mismo tema aparece durante varias semanas |
| Pulso de seguridad para hablar | Presionar a quienes responden; encuestar solo a los seguros de sí mismos; reportar un promedio que oculta a un grupo de puntuación baja | Tasa de respuesta y composición de los encuestados; tamaño mínimo de grupo; comentarios abiertos leídos íntegros; si cambia el lenguaje de las revisiones |

Una lectura sana muestra revisiones de los eventos que importan, una norma de calidad que la mayoría cumple, acciones que terminan o se rechazan con honestidad, un puñado de acciones antiguas que los líderes saben nombrar, clases de causa cuya frecuencia baja tras abordarlas y un recuento de cuasi accidentes que subió y luego se estabilizó. El pulso se mantiene estable o mejora cuando ocurre un incidente difícil. Un patrón demasiado limpio es en sí una señal para leer una muestra.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Revisar todos los incidentes | Cobertura completa; sin discusión sobre los desencadenantes | Pesado; las revisiones se vuelven superficiales; los equipos acaban resintiendo el proceso |
| Revisar según desencadenantes escritos | Concentra el esfuerzo en el impacto y el valor de aprendizaje | Los desencadenantes necesitan mantenimiento; los eventos límite se escapan |
| Etiquetado por clase de causa | Encuentra patrones entre revisiones | Las clases son una simplificación; las causas reales suelen ser varias cosas a la vez |
| Pulso anónimo sobre seguridad | Señal honesta sobre una cuestión delicada | Tosco; los equipos pequeños pueden ser identificables; fatiga de encuestas |

La respuesta en prosa es mantener corto el bucle y pocos los números: desencadenantes escritos, una pequeña muestra de calidad, un único seguimiento de acciones y una lista de clases de causa, añadiendo el pulso de seguridad cuando el equipo confíe en el resto. Ninguna medida de aquí prueba que haya ocurrido aprendizaje. Juntas muestran si están presentes las condiciones para ello.

## Preguntas para debatir con tu equipo

**1. ¿Cuáles de nuestros últimos cinco incidentes recibieron una revisión y cambió alguien algo por ella?**
Empieza por la lista de incidentes, no por la carpeta de revisiones, para que las revisiones que faltan se hagan visibles. Para cada revisión, pregunta qué es diferente hoy en el sistema o en el proceso. Si la respuesta es «nada», pregunta por qué se celebró la revisión y quién la leyó. El facilitador debe anotar las respuestas sin juzgar, porque muestran si la práctica produce cambio o papeleo.

**2. ¿Qué haría más difícil que alguien dijera la verdad en una revisión aquí?**
Pide ejemplos concretos: la reacción de un gerente, una evaluación del desempeño, una escalada de un cliente, el tono de un correo. Invita a la gente a escribir primero las respuestas de forma anónima. Busca condiciones que puedan cambiarse, como quién asiste, quién lee y qué dicen los líderes en voz alta. Esta es la conversación que protege todos los demás números del tema.

**3. ¿Qué acciones llevan abiertas más tiempo y qué las detiene?**
Muestra las cinco más antiguas. Para cada una, pregunta si la acción sigue siendo correcta, si tiene un responsable con capacidad y si debería hacerse, reprogramarse o rechazarse. Mantén el foco en el sistema de trabajo y no en el responsable. Acuerden una decisión para cada una antes de que termine la sesión.

**4. ¿Cuándo volvió el mismo tipo de problema y qué dice eso de la corrección anterior?**
Usa las etiquetas de clase de causa para encontrar una repetición y lee la revisión anterior y sus acciones. Pregunta si las acciones se terminaron, si abordaban los factores contribuyentes y si la clase se trazó de forma demasiado amplia. El objetivo es una acción mejor, no una explicación.

**5. ¿Reportamos cuasi accidentes y qué ocurre cuando alguien lo hace?**
Pide un ejemplo reciente y rastrea lo que siguió. Si no siguió nada, pregunta por qué volvería a reportar la gente. Si el recuento es bajo, pregunta qué teme la gente. El facilitador debe explicar que se espera un recuento creciente al principio y acordar cómo responderá el equipo al próximo reporte para que reportar parezca valioso.

**6. ¿Cómo sabríamos que una revisión fue buena si no pudiéramos mirar ningún número?**
Esto pide al equipo que describa la calidad con sus propias palabras. Las respuestas comunes incluyen «alguien ajeno al equipo aprendió algo», «la corrección se sostuvo» y «el autor no tenía miedo». Convierte las respuestas en la lista de verificación de la muestra trimestral y vuelve a revisarla después de dos trimestres.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega escriben muchas revisiones y cargan con la mayoría de las acciones, así que sienten primero el costo de un proceso torpe. Se benefician de plantillas breves, una regla clara de desencadenantes y un vínculo visible entre una acción y un elemento de la lista de pendientes del equipo. La reflexión regular del equipo merece la misma disciplina de seguimiento que una revisión de incidente, y un equipo que termina las acciones de su retrospectiva practica el mismo hábito a menor escala. Protégete de que la presión de las funciones exprima las acciones y lleva esa compensación al responsable de producto abiertamente (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y de operaciones

Los equipos de operaciones guardan las evidencias (cronologías, alertas, registros de chat) y están en la mejor posición para etiquetar las clases de causa de forma coherente y para notar una repetición antes de que se convierta en una caída. Necesitan tiempo protegido para escribir, ya que las revisiones escritas al final de un turno largo son pobres. Vincula cada revisión a cualquier registro de problema al que alimente (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes fijan el tono de cada revisión por lo que preguntan después. «¿Quién hizo esto?» pone fin a las revisiones honestas, y «¿qué aprendimos y qué estamos cambiando?» las invita. Los órganos de gobernanza deben esperar la cobertura, la calidad, la antigüedad de las acciones y la recurrencia en la revisión de fiabilidad, financiar las acciones que necesitan inversión y no comparar nunca a los equipos por cuántos incidentes o revisiones tienen.

### Clientes y usuarios

Los clientes rara vez ven la revisión, pero sienten su resultado: el mismo fallo que deja de volver y un relato honesto cuando lo hace. Donde los contratos lo permitan, publica un resumen en lenguaje llano tras un incidente significativo (véase el tema 3.4, Métricas de incidentes graves). El contacto repetido sobre la misma cuestión es la señal, del lado del cliente, de que el aprendizaje no ha calado (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera una tienda de cara al cliente, un servicio de pagos y una plataforma interna de inventario. Cinco equipos de producto construyen y operan estos servicios, y un pequeño grupo de gestión de servicios mantiene el proceso de incidentes y de problemas. Los números de este ejemplo son ilustrativos.

En un trimestre el minorista tiene 41 incidentes en las dos gravedades superiores. Los desencadenantes escritos los califican todos para una revisión, y se publican 36 revisiones en diez días laborables, de modo que la cobertura de revisiones es de alrededor del 88 por ciento. La dirección está contenta. El grupo de gestión de servicios extrae una muestra aleatoria de ocho revisiones, pide a un equipo de otra área de producto que las puntúe y descubre que solo tres cumplen la norma acordada. La laguna común es que la cronología enumera lo que ocurrió pero no lo que sabía la gente cuando tomó cada decisión, y la sección de factores contribuyentes nombra una sola causa.

La misma muestra revela que, de las 74 acciones con vencimiento en el trimestre, 51 se completaron en su fecha de vencimiento, una tasa de cierre de alrededor del 69 por ciento. La acción abierta más antigua, de 210 días, es un umbral de alerta de capacidad en la base de datos de pagos, aplazado en seis semanas sucesivas. El etiquetado de causas muestra «límite de capacidad» en 9 de las 36 revisiones, 4 de ellas del servicio de pagos. El pulso anónimo, respondido por 58 de las 70 personas invitadas, es más bajo en el grupo de guardia, donde varios comentarios dicen que los altos gerentes hacen preguntas punzantes sobre personas con nombre.

El equipo toma tres decisiones. Primero, celebran una breve sesión con los altos gerentes que asisten a las revisiones y acuerdan una regla: las preguntas en la sala tratan de condiciones y decisiones, y cualquier seguimiento sobre una persona pasa por el jefe del equipo. Segundo, colocan la acción de capacidad más antigua al principio de la siguiente ronda de planificación del equipo de pagos, priorizada frente al trabajo de funciones por el responsable de producto, y reportan el resultado en la revisión de fiabilidad. Tercero, añaden dos elementos de lista de verificación a la plantilla de revisión (qué sabía la gente en cada decisión y al menos dos factores contribuyentes) y ejecutan una sesión de acompañamiento para escritores con una revisión anonimizada.

El riesgo de manipulación aparece en el trimestre siguiente. La cobertura de revisiones sube al 97 por ciento, pero la proporción de revisiones de menos de 300 palabras se duplica, y algunos equipos rebajaron incidentes de gravedad dos a tres, justo por debajo del desencadenante. La muestra de calidad y una auditoría de los cambios de gravedad lo detectan. El grupo pregunta por qué ocurrieron las rebajas, descubre que los equipos sentían que una revisión era un castigo y relaja la expectativa de longitud para los eventos pequeños manteniendo el desencadenante de gravedad dos.

## Agilidad, IA, automatización y analítica

### Agilidad

Las revisiones funcionan mejor como un hábito regular con las partes interesadas, donde las acciones van a la misma lista de pendientes que el resto del trabajo. La precaución es que un objetivo de número de revisiones produce revisiones escritas según una plantilla sin aprendizaje.

### IA

La IA puede redactar cronologías y resúmenes para una revisión, lo que eleva la cobertura y la rapidez. Empareja la cobertura de revisiones con una comprobación de calidad por parte de una persona y con la tasa de recurrencia de causas, y etiqueta las secciones redactadas por IA. La precaución es que la IA puede alisar la incertidumbre o asignar culpa en su redacción, así que una persona es responsable de un relato final sin culpas.

### Automatización

Automatiza la captura de la cronología y los recordatorios de acciones y mide cuántos recordatorios llevan al cierre. La precaución es que los recordatorios automáticos insistentes sin acuerdo del responsable se convierten en ruido.

### Analítica

Haz seguimiento de la antigüedad de las acciones y de la recurrencia durante una ventana larga, con recuentos. La decisión a la que informa es qué aprendizaje está cambiando realmente el sistema. La precaución es que las tasas de recurrencia son lentas y de muestra pequeña, así que evita conclusiones a corto plazo.

## Perspectiva sectorial

**Startup.** Un equipo pequeño puede aprender rápido porque todos asistieron al incidente. El riesgo es que nada se escriba y la lección se vaya con la siguiente contratación. Mantén una plantilla de una página, celebra una revisión de todo lo que despierte a alguien de noche y haz seguimiento solo del cierre de acciones y de las causas repetidas. Protege la franqueza haciendo que los fundadores lean las revisiones sin comentar a las personas.

**Pequeña empresa.** La persona que arregló el problema suele ser la única que lo entiende. Usa una plantilla breve y revisa cada mes la acción abierta más antigua.

**Gran empresa.** Estandariza la plantilla, el desencadenante y la lista de clases de causa, y deja que los equipos adapten la profundidad. Proporciona un lugar donde buscar revisiones, un foro entre equipos y un puntuador externo. Cuidado con las tablas de posiciones de equipos por recuentos de incidentes o de revisiones, ya que castigan la transparencia.

**Gobierno y sector público.** Las revisiones pueden afrontar deberes legales, auditoría o solicitudes de acceso a la información pública, lo que vuelve cautelosos a los autores. Separa la revisión de aprendizaje de cualquier informe formal para la supervisión y registra las acciones bloqueadas con su dependencia (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de esta práctica es sobre todo tiempo. Los autores dedican horas a cada revisión y muchas personas dedican una hora a una sesión. Una muestra trimestral de calidad lleva unas horas de un lector externo. El etiquetado de causas y el seguimiento de acciones necesitan un poco de herramientas, que pueden ser una hoja de cálculo y un campo en las herramientas de tickets y de lista de pendientes existentes. Hay un costo mayor y menos visible en el comportamiento de los líderes, porque el programa fracasa si los líderes reaccionan mal ante revisiones francas.

El retorno procede de causas que dejan de repetirse y de incidentes más cortos porque el equipo ha visto algo parecido. Menos incidentes repetidos liberan capacidad de ingeniería y operaciones, reducen las escaladas y bajan el costo de la perturbación a los clientes. Una biblioteca compartida de revisiones acorta la curva de aprendizaje del personal nuevo y reduce la dependencia de unas pocas personas con experiencia. No cites un porcentaje de otra organización. Mide tu propia línea base de recurrencia de causas, antigüedad de las acciones abiertas y contactos repetidos antes de empezar, y compara tras dos o tres trimestres.

El límite honesto es que el aprendizaje es difícil de atribuir: una caída de la recurrencia puede venir de una mejor revisión, de un cambio de arquitectura no relacionado o de la suerte. Para un tratamiento más amplio, véase el tema 7.7, Retorno de la inversión y caso de negocio.

## Antipatrones y trampas

- **Teatro de revisiones.** Las revisiones satisfacen una regla y nadie las lee. En su lugar, muestrea y lee revisiones y júzgalas por el cambio que produjeron.
- **Buscar la causa raíz en una persona.** La revisión nombra un error individual y se detiene. En su lugar, pregunta qué hizo probable el error y enumera varios factores contribuyentes.
- **Inflación de acciones.** Las revisiones producen listas largas que el equipo no puede financiar. En su lugar, limita cada revisión a unas pocas acciones ordenadas y rechaza el resto con un motivo.
- **Acciones fuera de la lista de pendientes.** Viven en un documento y nunca se planifican. En su lugar, crea elementos de trabajo en el gestor del equipo propietario y vincúlalos a la revisión.
- **Cierre sin verificación.** La acción se marca como hecha y la causa vuelve. En su lugar, haz que un revisor confirme que el cambio funciona y vigila la recurrencia de la clase de causa.
- **Usar los recuentos para comparar equipos.** Un equipo con más revisiones o cuasi accidentes parece peor. En su lugar, lee un recuento alto como apertura y compara cada equipo con su propio historial.
- **Castigar al mensajero.** Un líder interroga a una persona tras una revisión franca. En su lugar, acuerda una norma sobre cómo responden los líderes y comprueba el pulso tras los incidentes difíciles.
- **Tratar las métricas como prueba de aprendizaje.** Un panel limpio se toma como evidencia de que la organización aprende. En su lugar, sigue leyendo una muestra de revisiones y preguntando a las personas que las escribieron.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Desencadenantes y cobertura | Las revisiones dependen de quién esté disponible y de lo mal que se sintió | Algunos equipos celebran revisiones de los incidentes serios | Desencadenantes escritos y una plantilla común; cobertura contada por gravedad | Cobertura con tendencias y auditada frente a las rebajas; vías ligera y completa | Desencadenantes adaptados con clientes y proveedores; revisiones compartidas para incidentes conjuntos |
| Calidad y honestidad | Las revisiones nombran a una persona o una sola causa | Algunos equipos escriben revisiones sin culpas | Norma de lista de verificación; se espera lenguaje sin culpas | Muestra trimestral externa; pulso revisado; acompañamiento a los escritores | Revisiones coescritas con proveedores y usuarios; la lectura entre equipos es rutinaria |
| Acciones y recurrencia | Las acciones viven en documentos y rara vez se terminan | Acciones con seguimiento en algunos equipos; el cierre varía | Acciones en la lista de pendientes real con responsables, fechas y rechazo honesto | Cierre, antigüedad y recurrencia de causas revisados, con mejora financiada | Acciones coordinadas entre equipos y proveedores; clases de causa revisadas a medida que cambian los patrones |
| Compartir y aprender | Las lecciones se quedan en el equipo | Revisiones publicadas para el equipo | Revisiones en las que se puede buscar y compartidas en un foro periódico | Alcance medido; los equipos dependientes reportan los cambios hechos | El aprendizaje fluye hacia el diseño, la incorporación y los contratos con proveedores |

## Lista de verificación

- [ ] Los desencadenantes escritos dicen qué eventos reciben una revisión, incluidos los cuasi accidentes de alto valor de aprendizaje.
- [ ] Existe una plantilla breve, con una vía ligera para los eventos pequeños.
- [ ] Las revisiones son sin culpas por plantilla y por el comportamiento de los líderes.
- [ ] Cada acción es un elemento de trabajo en la lista de pendientes del equipo propietario, con un responsable y una fecha.
- [ ] Las acciones pueden rechazarse y el motivo se registra y se reporta.
- [ ] Existe una lista corta de clases de causa y cada revisión está etiquetada.
- [ ] Un lector externo puntúa cada trimestre una muestra aleatoria de revisiones.
- [ ] Las acciones abiertas más antiguas se revisan junto con la fiabilidad del servicio.
- [ ] La antigüedad de las acciones abiertas se reporta como mediana, percentil alto y la más antigua.
- [ ] Existe una vía para cuasi accidentes y el equipo sabe qué ocurre después de un reporte.
- [ ] Ninguna métrica de este tema se reporta ni se usa por persona.
- [ ] Un pulso de seguridad para hablar se ejecuta solo para grupos lo bastante grandes como para proteger el anonimato.

## Prompts de IA

**Revisa un borrador de análisis posterior en cuanto a su calidad.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgment, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Propón clases de causa a partir de revisiones pasadas.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Analiza las acciones abiertas en busca de patrones de estancamiento.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema correspondiente, las definiciones y la barrera de protección emparejada de una métrica de revisión o de aprendizaje que estás a punto de reportar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de aprendizaje revisada sigue llevando sus relojes, su vector de manipulación y su barrera de protección.

## Ideas clave

- Una revisión vale lo que cambia, así que mide la cobertura, la calidad, el cierre de acciones y la recurrencia de causas, y lee una muestra de las propias revisiones.
- La ausencia de culpas es la condición previa de datos honestos, y los líderes la protegen por cómo responden a una revisión franca.
- Pon las acciones en la lista de pendientes real, limita su número, permite un rechazo honesto y vigila la antigüedad de las más viejas.
- Etiqueta las revisiones con una lista corta de clases de causa para que las causas repetidas se hagan visibles y alimenten la gestión de problemas.
- Lee un recuento creciente de cuasi accidentes como señal de apertura al principio y no clasifiques nunca a personas ni equipos por volumen de revisiones.
- Empareja cada número de aquí con una barrera de protección, porque el propio bucle de aprendizaje es un objetivo que puede manipularse.

## Referencias y lecturas complementarias

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
