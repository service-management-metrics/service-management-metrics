# Métricas de gestión del conocimiento

**Mide el conocimiento por si se usa y se confía en él en el momento de la necesidad, no por cuánto existe: vigila juntas la tasa de vinculación, la reutilización, la vigencia y la facilidad para encontrarlo, y trata cada recuento de artículos como una pregunta sobre el trabajo y no como una puntuación.**

## Visión general y motivación

Un equipo de servicio acumula conocimiento cada día: cómo restablecer un servicio, qué significa realmente un mensaje de error confuso, qué solución provisional funcionó la última vez. La [gestión del conocimiento](https://en.wikipedia.org/wiki/Knowledge_management) es la disciplina de poner ese conocimiento a disposición de la siguiente persona que lo necesite. En ITIL 4 (la edición de 2019 del marco publicada por AXELOS y la base ampliamente documentada de este libro), la gestión del conocimiento es una práctica por derecho propio, e [ITIL](https://en.wikipedia.org/wiki/ITIL) espera además que respalde la gestión de incidentes, la gestión de problemas y el centro de servicios. Este tema cubre cómo saber si ese respaldo es real.

La mayor parte del producto utilizable de la gestión del conocimiento acaba en una [base de conocimiento](https://en.wikipedia.org/wiki/Knowledge_base): un almacén de artículos, runbooks, registros de errores conocidos y breves respuestas prácticas. Un [runbook](https://en.wikipedia.org/wiki/Runbook) es un conjunto escrito de pasos para una operación rutinaria o una recuperación. Los artículos son la parte explícita de lo que sabe un equipo. El [conocimiento tácito](https://en.wikipedia.org/wiki/Tacit_knowledge) de las personas con experiencia, como la intuición de que una alarma es ruido, no puede ponerse del todo por escrito, y ninguna métrica de este tema lo mide directamente.

En la visión de ITIL, el conocimiento es un activo gestionado con un ciclo de vida: se crea, se revisa, se publica, se usa y se retira. En la visión ágil, la documentación debe ganarse su lugar, la conversación y el trabajo en pareja aportan mucho, y el conocimiento escrito es un subproducto de terminar el trabajo. Ambas visiones coinciden en la prueba: ¿ayudó el conocimiento a alguien a resolver un problema real más rápido o mejor de lo que lo habría hecho sin él?

El método que conecta más directamente las dos visiones es el [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), una metodología del Consortium for Service Innovation. En KCS, el conocimiento se captura y se mejora como parte de resolver el problema, no después. Las personas trabajan en dos bucles. El bucle de resolución es el momento de la resolución: buscar un artículo existente, reutilizarlo y mejorarlo si se encuentra, crear uno si no. El bucle de evolución es el ciclo más largo que estudia cómo se comporta el conocimiento y mejora el sistema que lo rodea. KCS propone además indicadores propios, como la tasa a la que los casos resueltos se vinculan a artículos. Este tema resume esas ideas de forma neutral respecto a proveedores; los equipos que adopten KCS formalmente deben leer la guía de prácticas del propio Consortium.

El número de artículos de una base de conocimiento es un inventario, no un resultado, y sube tanto con el descuido como con el cuidado. Las métricas siguientes se atan a un momento de uso: un caso cerrado, una búsqueda hecha, la reacción de un lector. Incluso esas pueden torcerse (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Las medidas de contacto y de gestión viven con el [centro de servicios](https://en.wikipedia.org/wiki/Service_desk) (véase el tema 3.1, Métricas del centro de servicios). El volumen y los patrones de repetición proceden de los datos de incidentes (véase el tema 3.2, Volumen y prioridad de incidentes). El éxito del autoservicio, donde los usuarios consumen artículos sin un agente, se trata por separado (véase el tema 3.7, Métricas de autoservicio y automatización). Este tema se queda con la salud del propio conocimiento y con su uso por las personas que resuelven problemas.

## Principios clave

- **Mide el uso en el punto de trabajo.** Un artículo vinculado a un caso resuelto o hallado por una búsqueda es evidencia de valor. Un artículo que simplemente existe no lo es.
- **Captura en el flujo del trabajo.** El conocimiento escrito durante la resolución es más fresco y más barato que el escrito en un esfuerzo de documentación aparte, así que las métricas deben premiar la captura como parte de terminar el trabajo.
- **Lee la vigencia frente al uso.** Viejo no es lo mismo que erróneo. El esfuerzo de revisión corresponde a los artículos que se usan a menudo, no a repartirse por igual en un catálogo de páginas mayormente sin leer.
- **Muestrea la relevancia.** Un vínculo entre un caso y un artículo solo prueba que alguien creó el vínculo. Una pequeña muestra humana de si el artículo encajaba de verdad te dice si el vínculo significa algo.
- **Describe equipos y áreas de conocimiento, nunca individuos.** Los recuentos de contribución por persona convierten un activo compartido en una competición y enseñan a la gente a escribir basura (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Empareja cada métrica de volumen con una señal de calidad.** Tasa de vinculación con relevancia, creación de artículos con duplicados, reutilización con retroalimentación de los lectores.

## Definiciones de métricas

La tabla enumera siete métricas. Las ventanas de tiempo (como el periodo de revisión de la vigencia) son elecciones que un equipo hace y anota; ningún valor de aquí es una referencia. En todo momento, «caso» significa un registro de incidente o de solicitud de servicio de la herramienta de gestión de servicios de TI (ITSM), y los incidentes graves se reportan por separado para que no distorsionen las razones (véase el tema 3.4, Métricas de incidentes graves).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de vinculación de conocimiento | Proporción de casos resueltos que tienen al menos un artículo de conocimiento adjunto en el momento de la resolución | casos resueltos en el periodo con al menos un artículo vinculado / casos resueltos en el periodo. Cuenta la fecha de resolución; excluye los incidentes graves, los casos cerrados como duplicados y los casos cerrados automáticamente sin trabajo humano | porcentaje | Herramienta ITSM: tablas de casos y de vínculos a artículos | Gestión del conocimiento; gestión de incidentes | La definición de terminado incluye capturar lo aprendido | Semanal para el equipo; mensual para la revisión |
| Proporción de reutilización | Proporción de vínculos a artículos que apuntan a un artículo existente y no a uno creado durante ese caso | vínculos a artículos que existían antes de abrirse el caso / todos los vínculos a artículos hechos en casos resueltos en el periodo. Excluye los vínculos añadidos después de cerrarse el caso | porcentaje | Herramienta ITSM: fecha de creación del artículo frente a fecha de apertura del caso | Gestión del conocimiento; mejora continua | Reutilizar en lugar de rehacer; propiedad compartida del código y de su documentación | Mensual |
| Vigencia de los artículos | Proporción de artículos en uso que se han revisado, o usado y confirmado como correctos, dentro de una ventana de revisión declarada | artículos en uso con una fecha de revisión o de uso confirmado dentro de la ventana / artículos en uso. Un artículo está en uso si se vinculó a un caso o lo vio un lector en los últimos 12 meses (elección del equipo); se excluyen los borradores y los artículos retirados | porcentaje | Metadatos de la base de conocimiento y registro de visualizaciones | Gestión del conocimiento; centro de servicios | Refinamiento de la lista de pendientes de documentación; acciones de retrospectiva | Mensual |
| Tasa de búsquedas sin resultados | Proporción de búsquedas de conocimiento que no devuelven ningún artículo | búsquedas con cero resultados / todas las búsquedas. Excluye las búsquedas de bots y comprobaciones automatizadas; cuenta cada búsqueda una sola vez aunque se repita en un minuto | porcentaje | Registro de búsquedas de la base de conocimiento o del portal | Gestión del conocimiento; centro de servicios; gestión de solicitudes de servicio | Descubrimiento de necesidades de usuario no atendidas; insumo de la lista de pendientes | Semanal |
| Tasa de utilidad | Proporción de la retroalimentación de lectores que dice que el artículo ayudó, mostrada con la tasa de respuesta | votos útiles / (votos útiles + votos no útiles) de los artículos del periodo; tasa de respuesta = votos de retroalimentación / visualizaciones del artículo | porcentaje, con tasa de respuesta | Widget de retroalimentación de la base de conocimiento y registro de visualizaciones | Gestión del conocimiento; experiencia del cliente | Retroalimentación de la revisión con las partes interesadas sobre la documentación | Mensual |
| Tiempo hasta la publicación | Tiempo transcurrido desde que se crea el borrador de un artículo hasta que se revisa y es visible para su audiencia | el reloj empieza al crearse el borrador y se detiene en la publicación (o en el primer estado visible aprobado). Excluye el tiempo en estado de «en espera, pendiente de una versión del producto»; se reportan la mediana y el percentil 85 | días (mediana y percentil 85) | Historial del flujo de trabajo de la base de conocimiento | Gestión del conocimiento | Plazo de entrega de un elemento de trabajo de principio a fin (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) | Mensual |
| Amplitud de la contribución | Reparto de la creación y mejora de artículos en el equipo, medido sin nombrar personas | colaboradores distintos que crearon o mejoraron un artículo en el periodo / miembros del equipo que resolvieron casos en el periodo. Se reporta solo para un equipo, nunca como una lista de nombres | porcentaje | Historial de ediciones de la base de conocimiento unido a la pertenencia a equipos | Gestión del conocimiento; mejora continua | Propiedad colectiva; trabajo en pareja y en enjambre | Trimestral |

La tasa de vinculación de conocimiento tiene un reloj fácil de pasar por alto. El vínculo debe existir cuando se resuelve el caso, no cuando alguien ordena una semana más tarde, porque vincular tarde mide la limpieza y no dice nada del uso durante la resolución. La proporción de reutilización depende de una fecha de creación de artículos fiable. Si los artículos se migran o se importan en bloque, sus fechas de creación se reinician y la razón engañará hasta que se marque la migración.

## Recomendaciones

### Decide para qué sirve el conocimiento

**1. Ata cada métrica de conocimiento a un caso de uso.** Nombra a las personas a las que sirve el conocimiento: analistas del centro de servicios que resuelven en el primer contacto, ingenieros de guardia que atienden una alerta o usuarios que se ayudan a sí mismos. Cada audiencia necesita medidas distintas. Un runbook para un ingeniero de guardia se juzga por si los pasos restablecieron el servicio, mientras que un artículo de restablecimiento de contraseña se juzga por si el usuario dejó de contactar con el centro de servicios. Anótalo en tu registro (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**2. Empieza por la tasa de vinculación y la relevancia, no por los recuentos de artículos.** La tasa de vinculación muestra si el conocimiento entra siquiera en el momento de la resolución. Empárejala desde el principio con una pequeña muestra mensual en la que una persona lee 20 o 30 casos vinculados y juzga si el artículo encajaba. Una tasa de vinculación del 70 por ciento con la mitad de los vínculos irrelevantes es peor que una del 40 por ciento con vínculos honestos, porque la primera oculta la laguna de conocimiento que la segunda revela.

**3. Separa «no existe ningún artículo» de «el artículo existe pero no se encontró».** Cuando un caso se cierra sin vínculo, los motivos difieren y también las soluciones. Añade una breve opción de cierre, como «no existía ningún artículo» y «artículo no encontrado», y repórtalas como proporciones de los casos sin vincular. La primera apunta a contenido que escribir; la segunda apunta a la búsqueda, la denominación y la estructura. Mantén opcional la opción donde frene al centro de servicios y muestrea en su lugar.

### Captura el conocimiento a medida que termina el trabajo

**4. Haz de la captura parte de la definición de terminado.** En un equipo ágil, un elemento de trabajo que cambia cómo se comporta un servicio no está terminado hasta que se actualiza el runbook, el registro de errores conocidos o el artículo de ayuda. En el centro de servicios, un caso que requirió descubrimiento no está resuelto hasta que el descubrimiento se captura o se mejora un artículo existente. Es la idea de KCS de trabajar en el bucle de resolución, y mantiene bajo el costo de escribir porque quien escribe tiene el contexto fresco.

**5. Permite un estado de borrador ligero.** Muchos equipos pierden conocimiento porque todo artículo debe pasar una revisión pesada antes de que nadie pueda verlo. La práctica al estilo KCS distingue un artículo en elaboración, visible para el equipo, de uno validado, visible para una audiencia más amplia. Mide por separado el tiempo hasta la publicación de ambas etapas, como medianas y percentil 85, para que las revisiones lentas aparezcan como una cola y no como una queja vaga (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Prefiere mejorar a crear.** Una pila creciente de artículos casi duplicados empeora la búsqueda y dificulta mantener la vigencia. Vigila la proporción de reutilización junto al recuento de creación, y cuando la creación sube mientras baja la reutilización, busca duplicados. Haz fácil y visible fusionar y retirar, y cuenta una fusión como una contribución positiva.

### Mantén el conocimiento al día y fácil de encontrar

**7. Revisa los artículos que se usan.** Concentra el esfuerzo de revisión donde el uso es alto. Ordena los artículos en uso por la frecuencia con que se vincularon o se vieron y fija una ventana de revisión para el grupo superior más corta que para la cola larga. Un artículo obsoleto que nadie lee cuesta poco; uno obsoleto que aparece en un tercio de las resoluciones puede engañar a cientos de casos. Reporta la vigencia del grupo muy usado como una línea propia para que el promedio de toda la base no la oculte.

**8. Trata los fallos de búsqueda como elementos de la lista de pendientes.** Lee cada mes las búsquedas sin resultados más frecuentes y decide para cada una si escribir un artículo, añadir un sinónimo, renombrar un artículo o aceptar que la pregunta pertenece a otro sitio. Esto convierte una métrica en una lista breve y concreta que el equipo puede trabajar. También muestra el vocabulario real, ya que los usuarios y los analistas rara vez usan las palabras que usa el catálogo de servicios.

**9. Lee las palabras que hay detrás de los votos.** La tasa de utilidad es barata y ruidosa. Las tasas de respuesta suelen ser bajas y se inclinan hacia las opiniones fuertes. Muestra la tasa de respuesta junto a la tasa de utilidad y lee los comentarios escritos de los artículos más vistos en una revisión permanente. Un solo comentario como «el paso 4 ya no existe en la versión nueva» vale más que mil votos sin etiquetar.

**10. Conecta el conocimiento con los problemas y los análisis posteriores.** Un incidente recurrente que se resuelve repetidamente con el mismo artículo es una señal para la gestión de problemas, que busca la causa subyacente y puede eliminar la necesidad del artículo (véase el tema 4.1, Métricas de gestión de problemas). Los registros de errores conocidos y las lecciones de los análisis posteriores son activos de conocimiento con su propio ciclo de vida (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje, y el tema 4.6, Deuda técnica y errores conocidos). Mira cada trimestre los diez artículos más vinculados y pregunta cuáles deberían retirarse corrigiendo la causa.

### Gobierna sin clasificar

**11. Reporta la contribución a nivel de equipo.** La amplitud de la contribución te dice si el trabajo de conocimiento se comparte o se concentra en dos personas. Es un riesgo que merece verse, porque es el mismo patrón que un [factor autobús](https://en.wikipedia.org/wiki/Bus_factor) de dos. Nunca debe convertirse en una clasificación de autores, que premiaría la cantidad de ediciones y enseñaría a dividir artículos o a hacer cambios triviales. Si aparece una concentración, trátala como una conversación de equipo sobre tiempo, apoyo y permiso para escribir (véase el tema 9.4, Métricas de habilidades y aprendizaje).

**12. Retira las medidas que dejan de ayudar.** Si nadie actúa sobre la tasa de vinculación, traslada la atención a la relevancia o a la vigencia del grupo muy usado. Registra cualquier cambio de definición con el motivo, porque una fórmula cambiada rompe la línea de tendencia (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

Cada métrica de la tabla de definiciones aparece aquí. Las métricas de conocimiento están especialmente expuestas porque el acto de vincular o de revisar es un clic rápido, mientras que el valor real está en el contenido.

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de vinculación de conocimiento | Adjuntar cualquier artículo, a menudo uno genérico o muy popular, a cada caso antes de cerrarlo; vincular a posteriori en bloque | Muestra mensual de relevancia de los casos vinculados; proporción de vínculos que van a los mismos pocos artículos; marca de tiempo del vínculo frente a la marca de resolución |
| Proporción de reutilización | Crear un artículo nuevo para cada caso y vincularlo enseguida para que cuente como reutilización la próxima vez; o no crear nunca para que la razón parezca perfecta | Tasa de artículos duplicados hallada mediante una búsqueda periódica; proporción de casos cerrados con el motivo «no existía ningún artículo» |
| Vigencia de los artículos | Marcar artículos como revisados sin comprobarlos; reiniciar la fecha de revisión con ediciones triviales; contar solo los artículos fáciles de revisar | Muestra de artículos revisados recientemente comprobados frente al servicio real; tasa de utilidad y comentarios escritos de los mismos artículos |
| Tasa de búsquedas sin resultados | Añadir artículos vagos o comodín que coinciden con cualquier consulta; rellenar con palabras clave; excluir del registro los términos de búsqueda incómodos | Clic seguido de un contacto sobre el mismo tema dentro de una ventana corta; tasa de utilidad; lectura manual de los principales términos de búsqueda |
| Tasa de utilidad | Invitar a votar solo a los lectores satisfechos; ocultar la opción de no útil; votar desde dentro del equipo | Tasa de respuesta y composición de los votantes mostradas con la tasa; comentarios escritos; tasa de contactos tras leer el artículo |
| Tiempo hasta la publicación | Publicar un esbozo flojo para detener el reloj; dividir un artículo en trozos; mover borradores a un estado que el reloj excluye | Relevancia y utilidad de los artículos publicados recientemente; recuento y antigüedad de los borradores en estados excluidos |
| Amplitud de la contribución | Hacer ediciones triviales para que todos figuren como colaboradores; pedir a la gente que añada una frase para cumplir una cuota | Tamaño y sustancia de las ediciones muestreadas; reutilización y utilidad de los artículos aportados; sin nombres en el informe |

Una lectura sana muestra artículos vinculados que una muestra humana confirma como relevantes, una proporción de reutilización que sube a medida que madura la base, un conjunto muy usado de artículos con revisiones recientes verificadas, una lista corta de fallos de búsqueda que el equipo va resolviendo y una contribución repartida por el equipo. Algunos casos sin artículo, por ser genuinamente nuevos, son señales de una base honesta, no de una que falla.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Fijar como objetivo una tasa de vinculación alta | Empuja la captura y la reutilización a la rutina diaria; sencillo de entender | Invita a vínculos sin sentido; oculta las lagunas donde no existe ningún artículo |
| Muestrear la relevancia a mano | Revela si los vínculos significan algo; crea criterios compartidos | Lleva tiempo de analista; las muestras pequeñas son ruidosas; depende del juicio de quien muestrea |
| Revisarlo todo con un calendario fijo | Fácil de planificar y auditar; aplicado por igual | Gasta esfuerzo en artículos que nadie lee; descuida los más usados |
| Revisar según el uso | Dirige el esfuerzo a donde más daña el conocimiento erróneo | Necesita datos fiables de visualizaciones y vínculos; los artículos de la cola larga pueden pudrirse sin ser vistos |
| Adopción formal de KCS | Da un conjunto coherente y probado de prácticas e indicadores | Necesita inversión sostenida, acompañamiento y apoyo de herramientas; pesado para un equipo muy pequeño |
| Conversación y trabajo en pareja en lugar de artículos | Transfiere juicio y contexto; poca sobrecarga | No escala a turnos, vacaciones y rotación de personal; el conocimiento se va con las personas |

Mide justo lo suficiente para ver si el conocimiento se usa y se confía en él, y dedica el esfuerzo ahorrado al contenido. Para un equipo pequeño, una tasa de vinculación con una muestra mensual de relevancia y una lista breve de fallos de búsqueda es un programa completo. Para un centro de servicios grande, el conjunto completo se amortiza solo si alguien posee la revisión y actúa sobre ella.

## Preguntas para debatir con tu equipo

**1. La última vez que resolvimos un caso difícil, ¿de dónde vino el conocimiento y adónde fue después?**
Elige un caso reciente que costó verdadero esfuerzo y rastrea el camino de lo aprendido. ¿Se encontró un artículo, se preguntó a un colega o se resolvió desde cero? Pregunta si la siguiente persona con el mismo problema encontraría la respuesta en menos de cinco minutos. El facilitador debe buscar la brecha entre lo que sabe el equipo y lo que contiene la base de conocimiento.

**2. Si el mes próximo subiéramos nuestra tasa de vinculación hasta un objetivo declarado, ¿cómo podríamos hacerlo sin ayudar a nadie?**
Haz explícita la lista de manipulaciones y trátala como insumo de diseño y no como una acusación. Las respuestas comunes son vincular un artículo genérico, vincular en bloque al cierre y elegir el artículo más popular. Para cada respuesta, pregunta qué barrera de protección de la tabla la detectaría y con qué rapidez. El facilitador debe salir con al menos una comprobación nueva, como una muestra mensual de relevancia, y un responsable de ella.

**3. ¿Cuáles son los cinco artículos en los que más nos apoyamos y cuándo se verificaron por última vez frente al servicio real?**
Mira los artículos más vinculados y más vistos y lean juntos en voz alta dos de ellos. La conversación suele mostrar que los artículos de mayor impacto son los que menos cuidado reciben, que es el argumento para revisar según el uso.

**4. ¿Qué busca la gente que no tenemos?**
Lleva las principales búsquedas sin resultados y los motivos de los casos sin vincular. Agrúpalos en artículos que escribir, palabras que añadir y preguntas que pertenecen a otro equipo. El facilitador debe recoger una lista breve de los tres próximos elementos y planificar cómo se escribirán durante el trabajo normal, no en un proyecto especial.

**5. ¿Quién escribe nuestro conocimiento y qué le cuesta hacerlo?**
Hablen con honestidad de la captura. ¿Se ve escribir como parte del trabajo o como trabajo extra después del trabajo? Pregunta qué lo frena: una plantilla pesada, una revisión lenta, el miedo a equivocarse o la falta de tiempo al final de un turno difícil. El facilitador debe orientar la conversación lejos de perseguir a individuos y hacia cambios en las herramientas, el tiempo y el permiso.

**6. ¿Qué artículos deberíamos dejar de necesitar?**
Toma los artículos más reutilizados y pregunta qué causa recurrente rodean. Un procedimiento de restablecimiento usado 200 veces al mes podría ser síntoma de un defecto del producto, una pantalla confusa o una automatización que falta. Decidan qué elementos pasar a la gestión de problemas o al equipo de producto y cuáles automatizar (véase el tema 3.7, Métricas de autoservicio y automatización). El facilitador debe notar que el mejor resultado de un buen trabajo de conocimiento son a veces menos artículos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega crean gran parte del conocimiento que necesitará un servicio: cómo se comporta una función, qué significa un error nuevo, cómo revertir. Si ese conocimiento no se captura antes de la publicación, el centro de servicios y los equipos de guardia lo aprenden por las malas. Incluye el runbook y el artículo de ayuda en la definición de terminado y vigila la tasa de vinculación y los fallos de búsqueda de los servicios que posees como retroalimentación. Cuando el mismo artículo se vincula muchas veces, trátalo como un informe de defecto del producto, no como un éxito de la documentación.

### Equipos de servicio y de operaciones

Los equipos del centro de servicios y de operaciones son los principales productores y consumidores de la base de conocimiento, de modo que las métricas son sobre todo suyas para usar. Trabajen el bucle de resolución con honestidad: busca primero, reutiliza y mejora, crea cuando nada encaje. Usen la tasa de vinculación con una muestra de relevancia y lean las búsquedas sin resultados como una lista de pendientes. Eviten cualquier tabla de posiciones de autores o editores, ya que la base de conocimiento es una herramienta compartida y los recuentos personales la dañan (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes deciden si el trabajo de conocimiento recibe tiempo, de modo que deciden la calidad del conocimiento. Pidan la muestra de relevancia y la vigencia de los artículos muy usados antes de pedir el recuento de artículos. Resistan los objetivos sobre la tasa de vinculación o la creación de artículos sin una barrera de protección y esperen que los números bajen por buenas razones, como un conjunto fusionado de duplicados. Financien la revisión de los artículos de mucho uso y las correcciones que hacen innecesarios los artículos.

### Clientes y usuarios

Los usuarios se encuentran con el conocimiento a través de la búsqueda, un portal, un chatbot o la respuesta que les da un analista. Lo que notan es si la primera respuesta es correcta y si tienen que repetirse. Su propia retroalimentación sobre los artículos, sus búsquedas que no dan resultados y sus contactos repetidos son las mejores barreras de protección de todo lo de este tema. Si se pide a los usuarios que valoren artículos, diles qué ocurre con la retroalimentación y actúa sobre ella de forma visible (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Una aseguradora de tamaño medio opera un centro de servicios de TI interno de aproximadamente una docena de analistas, que da soporte al personal de varias oficinas. El centro de servicios comparte una base de conocimiento con dos equipos de producto propietarios de la aplicación de siniestros y del portal de documentos. Todos los números de este ejemplo son ilustrativos.

La dirección ha pedido una mejor resolución en el primer contacto (véase el tema 3.1, Métricas del centro de servicios) y fija un objetivo de tasa de vinculación de conocimiento del 60 por ciento, desde un 38 por ciento ilustrativo. En seis semanas el panel muestra el 64 por ciento. La responsable del centro de servicios no está convencida, porque los analistas siguen quejándose de que no encuentran respuestas, y una responsable de un equipo de producto menciona que tres de los artículos que posee aparecen en la mayoría de los casos cerrados.

El equipo hace una revisión de manipulación y una muestra de relevancia. Leen 30 casos vinculados, elegidos al azar del mes anterior, y juzgan si el artículo encajaba con el caso. En un recuento ilustrativo, 11 de los 30 vínculos son a un artículo genérico «Cómo registrar un ticket» o a una descripción general de la red que no abordaba el problema. También descubren que los vínculos se hicieron pocos segundos antes de cerrar el caso, un patrón que sugiere hábito y no uso. La responsable del centro de servicios mira la proporción de reutilización, que ha subido, y la proporción de casos sin vincular con el motivo «no existía ningún artículo», que ha caído casi a nada, porque los analistas eligen ahora el artículo más cercano. La laguna de conocimiento se ha vuelto invisible.

El equipo toma tres decisiones. Primero, se retira el objetivo de tasa de vinculación y se sustituye por una vista ajustada por relevancia: la tasa de vinculación se reporta junto a la proporción muestreada de vínculos relevantes, y el motivo de cierre «no existía ningún artículo» se hace fácil de elegir y no se trata como un fracaso. Segundo, las búsquedas sin resultados se leen cada mes y las cinco principales pasan a ser las siguientes tareas de redacción, repartidas por el centro de servicios. Tercero, los 20 artículos más vinculados se revisan por vigencia en un mes, a cargo del equipo de producto correspondiente, y cualquier artículo vinculado a más de una cuarta parte de los casos de un servicio pasa a la gestión de problemas como candidato a una corrección permanente (véase el tema 4.1, Métricas de gestión de problemas).

Dos meses después la tasa de vinculación del titular ha vuelto a un 51 por ciento ilustrativo, lo que parece una mala noticia. La relevancia muestreada ha subido del 63 por ciento al 85 por ciento en términos ilustrativos, la tasa de búsquedas sin resultados ha bajado y un problema repetido de inicio de sesión del portal de documentos se ha corregido en su causa, lo que retiró tres artículos. La responsable pide a la dirección que juzgue el programa por la relevancia y las soluciones provisionales retiradas, no por la tasa de vinculación en bruto.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata el conocimiento como un subproducto de resolver problemas, con una retroalimentación corta de los usuarios sobre si un artículo ayudó. La precaución es que los objetivos de recuento de artículos producen contenido flojo y duplicado.

### IA

La IA puede redactar artículos, responder preguntas a partir de la base de conocimiento y sacar a la luz lagunas, lo que eleva los recuentos de artículos y el uso mientras la calidad puede bajar. Empareja la tasa de vinculación y la reutilización con la tasa de utilidad y con la proporción de artículos redactados por IA que una persona revisó antes de publicarlos. La precaución es que un artículo obsoleto o erróneo servido con seguridad por una IA escala el error.

### Automatización

Captura automáticamente los eventos de búsqueda, visualización y vinculación y automatiza los recordatorios de vigencia a los responsables. Mide la automatización por cuántos recordatorios llevan a una actualización. La precaución es que una caducidad automática que despublica artículos puede eliminar contenido útil.

### Analítica

Usa los registros de búsqueda para ver las consultas sin resultados y muestra la utilidad con el número de respuestas. La decisión a la que informa es qué artículos escribir, corregir o retirar. La precaución es que las visualizaciones de un artículo no equivalen a la ayuda recibida.

## Perspectiva sectorial

**Startup.** El conocimiento vive en unas pocas cabezas y en el historial del chat. Escribe una lista breve de runbooks para lo que se rompe por la noche y registra la corrección tras cada incidente. Una comprobación mensual de que los runbooks principales siguen funcionando basta como medición.

**Pequeña empresa.** Una sola persona suele ser el centro de servicios, el administrador y el responsable del conocimiento. El riesgo es el factor autobús, ya que el conocimiento desaparece si la persona lo hace. Usa un repositorio compartido sencillo, mantén los artículos breves y deja que un colaborador o un colega pruebe los procedimientos clave. Una lectura periódica de las páginas más usadas supera a cualquier panel.

**Gran empresa.** La escala trae artículos duplicados y calidad desigual. Usen definiciones comunes de tasa de vinculación, vigencia y reutilización, reporten por servicio y por equipo y nombren responsables para los artículos de mucho uso. Eviten comparar equipos, porque la mezcla de servicios y la antigüedad de la base difieren.

**Gobierno y sector público.** Las normas de registros, los requisitos de accesibilidad y las expectativas de auditoría pueden regir cómo se almacena, revisa y retira el conocimiento. Trátalos como datos de diseño: conserva una pista de aprobación para los artículos que afectan a los ciudadanos y publica contenido accesible. La retroalimentación y los fallos de búsqueda de los ciudadanos son especialmente valiosos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de las métricas de conocimiento son modestos. Los datos de la herramienta suelen existir ya en la plataforma ITSM y en la base de conocimiento. Los costos principales son el tiempo para definir las medidas, la pequeña muestra mensual que comprueba la relevancia, el tiempo de revisión de los artículos de mucho uso y la disciplina de capturar conocimiento mientras se resuelven los problemas. Si la plataforma de conocimiento carece de datos útiles de vinculación o de búsqueda, debe incluirse el costo de instrumentarla (véase el tema 1.5, Fuentes de datos e instrumentación).

El retorno es un patrón, y el libro no cita una cifra para él. Cuando los analistas encuentran rápido un artículo correcto, la resolución es más rápida y coherente, el personal nuevo resulta útil antes y los ingenieros de guardia dependen menos de unos pocos expertos. Cuando los usuarios encuentran respuestas por sí mismos, el centro de servicios recibe menos contactos repetidos por preguntas conocidas. Las métricas ayudan al mostrar dónde falta, está obsoleto o no se usa el conocimiento, de modo que el escaso tiempo de redacción vaya a los artículos que importan.

El costo total de propiedad incluye el mantenimiento. Los artículos se degradan a medida que cambian los servicios, así que el tiempo de revisión es un costo continuo, y un programa que lo ignore sobrestimará el beneficio. Para estimar el retorno de tu propio equipo, compara una muestra de tus propios casos antes y después y etiqueta tus supuestos.

## Antipatrones y trampas

- **Contar artículos o visualizaciones como éxito.** El volumen sube con el desorden y las visualizaciones pueden indicar confusión. Mide el uso en la resolución, la relevancia y la retroalimentación.
- **Un objetivo de tasa de vinculación sin comprobación de relevancia.** La gente adjuntará cualquier artículo. Muestrea cada mes los casos vinculados y reporta la proporción relevante junto a la tasa.
- **Clasificar a autores o editores.** Los recuentos personales producen ediciones flojas y artículos divididos. Reporta la amplitud de la contribución para el equipo y comenta como una cuestión de capacidad.
- **Revisar todos los artículos con un único calendario fijo.** El esfuerzo va a páginas que nadie lee. Revisa según el uso y retira lo que no se usa.
- **Publicar esbozos para detener el reloj.** Un artículo rápido y flojo anula el tiempo hasta la publicación. Empárejalo con la utilidad y la tasa de contactos posteriores.
- **Ignorar las búsquedas que fallan.** Las búsquedas fallidas son la señal más clara de una necesidad no atendida. Léelas cada mes y convierte los elementos principales en trabajo.
- **Separar el conocimiento del trabajo.** Un proyecto de documentación a final de trimestre produce páginas obsoletas. Captura durante la resolución y en la definición de terminado.
- **Tratar la base de conocimiento como permanente.** El contenido se degrada. Haz que retirar y fusionar sea rutinario y reconocido.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Captura y vinculación | El conocimiento vive en las cabezas y en el chat; los vínculos son raros | Algunos equipos vinculan artículos a casos, la práctica varía | Una regla escrita de vinculación y captura; motivos de cierre registrados | Tasa de vinculación y muestra de relevancia revisadas cada mes y ligadas a la mejora | La captura forma parte del flujo de trabajo entre el centro de servicios, operaciones y los equipos de producto; definiciones revisadas cuando dejan de informar decisiones |
| Vigencia y propiedad | Sin responsables; los artículos envejecen sin ser vistos | Responsables nombrados para los servicios clave | Ventanas de revisión fijadas, más cortas para los artículos muy usados | Vigencia de los artículos de mucho uso con tendencias y financiada | Responsabilidad de revisión compartida con proveedores y equipos de producto; la retirada es rutinaria |
| Facilidad de encontrar y retroalimentación | La búsqueda es ad hoc; sin datos de búsqueda | Existe un registro de búsquedas pero no se lee | Búsquedas sin resultados y retroalimentación de lectores revisadas con una cadencia fija | Los fallos de búsqueda guían una lista de pendientes y se emparejan con datos de contactos | Usuarios, analistas y chatbots se nutren de una sola fuente de conocimiento; la retroalimentación cambia visiblemente el contenido |
| Uso en la mejora | Las métricas, si las hay, son recuentos | Los recuentos se muestran al equipo | Métricas emparejadas con barreras de protección y mostradas primero al equipo | Los artículos muy vinculados alimentan decisiones de gestión de problemas y automatización | Las listas de pendientes de conocimiento, problemas y producto se gestionan juntas entre equipos |

## Lista de verificación

- [ ] Cada métrica de conocimiento nombra la audiencia a la que sirve y la decisión a la que informa.
- [ ] La tasa de vinculación tiene una definición escrita, con el reloj, las exclusiones y el tratamiento de los incidentes graves.
- [ ] Una muestra mensual comprueba que los artículos vinculados son relevantes para los casos.
- [ ] El cierre de los casos registra «no existía ningún artículo» y «artículo no encontrado» como motivos distintos.
- [ ] El tiempo hasta la publicación se reporta como mediana y percentil alto, con las etapas de borrador y publicado separadas.
- [ ] Se fija una ventana de revisión para los artículos en uso, más corta para los más usados.
- [ ] Las principales búsquedas sin resultados se leen cada mes y se convierten en elementos de la lista de pendientes.
- [ ] La retroalimentación de los lectores se muestra con su tasa de respuesta y se leen los comentarios de los artículos principales.
- [ ] La contribución se reporta solo para el equipo, sin listas con nombres.
- [ ] Los artículos más vinculados se revisan cada trimestre como candidatos a correcciones permanentes.
- [ ] Los cambios de definición se registran con motivos.

## Prompts de IA

**Comprueba si los artículos vinculados encajan con sus casos.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Convierte las búsquedas fallidas en una lista de pendientes de redacción.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Diseña un conjunto ligero de medidas de conocimiento.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y la barrera de protección emparejada cuando añadas una métrica de conocimiento a tu panel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de conocimiento lleva su vector de manipulación, su barrera de protección y sus referencias cruzadas en la forma correcta.

## Ideas clave

- Mide el conocimiento en el momento del uso: vinculado en la resolución, hallado por una búsqueda, confirmado por los lectores.
- Empareja la tasa de vinculación con una muestra humana de relevancia, porque un vínculo solo prueba que alguien hizo clic.
- Revisa la vigencia según el uso, poniendo el esfuerzo donde un artículo erróneo engañaría a más casos.
- Trata las búsquedas fallidas y los artículos muy vinculados como señales de contenido nuevo, mejor denominación o una corrección permanente.
- Reporta la contribución para el equipo y no clasifiques nunca a los autores.
- Menos artículos, pero mejores, suelen indicar una base más sana que una mayor.

## Referencias y lecturas complementarias

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
