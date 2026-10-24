# Métricas de cambio organizacional y adopción

**Un cambio se ha asentado cuando la gente hace lo nuevo por las razones para las que estaba pensado y el resultado mejora, así que mide el propósito y el efecto y no la presencia de rituales, y mantén el ritmo de cambio en uno que la gente pueda sostener.**

## Visión general y motivación

Las organizaciones adoptan nuevas formas de trabajar todo el tiempo: un nuevo proceso de gestión de servicios, una cadena de despliegue, una estructura de equipos distinta, un conjunto de prácticas ágiles, un marco de incidentes. Anunciar es fácil. Lo que cambia en el comportamiento diario es la verdadera pregunta, y lo que importa es si siguió el beneficio previsto. Muchos programas reportan éxito porque se impartió la formación, se instalaron las herramientas y se usa el nuevo vocabulario, mientras el trabajo se ve igual y los resultados no se han movido.

Los principios del Manifiesto Ágil dicen que las mejores arquitecturas, requisitos y diseños surgen de equipos autoorganizados y que los requisitos cambiantes son bienvenidos. Dicen también que se construyan los proyectos en torno a individuos motivados y se confíe en ellos, y que se mantenga un ritmo constante de forma indefinida. Estos principios son un argumento permanente contra imponer prácticas desde arriba y medir el cumplimiento. Apuntan a un enfoque distinto del cambio: implicar a la gente de forma continua, dejar que evolucione la forma de trabajar y juzgarla por sus resultados.

Una idea de advertencia de la cultura del software es el culto al cargo. La [programación de culto al cargo](https://en.wikipedia.org/wiki/Cargo_cult_programming) describe la inclusión ritual de código o prácticas que no sirven para nada, copiadas de otro lugar sin entenderlas. La charla de Richard Feynman sobre la «ciencia de culto al cargo» usó una imagen relacionada para describir un trabajo que tiene la forma externa de lo auténtico sin su sustancia. Aplicado a las formas de trabajar, el culto al cargo es el equipo que celebra todas las reuniones, usa todos los términos y rellena todos los tableros, y no entrega de manera continua, no colabora con sus partes interesadas ni mejora. Un enfoque de [culto al cargo](https://en.wikipedia.org/wiki/Cargo_cult) confunde la forma de una práctica con su fin. Las métricas de este tema están diseñadas para distinguir la diferencia.

Ayudan varias ideas del estudio del cambio.

- **El cambio es un problema de [cambio organizacional](https://en.wikipedia.org/wiki/Organizational_change) tanto como técnico.** La [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) aborda el lado humano: la conciencia, el deseo, el conocimiento, la capacidad y el refuerzo están entre los elementos de uso común. Modelos como los ocho pasos de John Kotter y el ADKAR de Prosci ofrecen vocabularios, y ninguno es una garantía.
- **La gente suele resistirse al cambio por buenas razones.** La [resistencia al cambio](https://en.wikipedia.org/wiki/Resistance_to_change) puede señalar un problema real de la propuesta, una amenaza a algo que la gente valora o cansancio. Trátala como información.
- **La adopción es un proceso en el tiempo.** La teoría de la [difusión de las innovaciones](https://en.wikipedia.org/wiki/Diffusion_of_innovations) describe cómo se extienden las nuevas prácticas por un sistema social, de los primeros adoptantes a la mayoría, mediante la influencia y la observación.
- **La cultura da forma a lo que arraiga.** La [cultura organizacional](https://en.wikipedia.org/wiki/Organizational_culture), los supuestos y comportamientos compartidos de un grupo, determina qué cambios resultan naturales y cuáles se rechazan.
- **Observar cambia el comportamiento.** El [efecto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) es la tendencia de las personas a alterar su comportamiento porque se las observa. Un piloto que muestra un gran resultado bajo atención cercana puede no sostenerse a escala.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es especialmente pertinente para la transformación: cuando la adopción es un objetivo, los equipos adoptan la forma. Un panel de «equipos que usan el nuevo proceso» con un mandato detrás mostrará alta adopción y poco cambio (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Este tema reúne las medidas anteriores de resultados (véase el tema 6.5, Realización de valor y resultados de negocio) y de mejora (véase el tema 9.5, Métricas de mejora continua) como evidencia de que un cambio funcionó.

## Principios clave

- **Juzga un cambio por su resultado, no por sus rituales.** La prueba de la adopción es un mejor resultado.
- **Haz explícito el fin de cada práctica.** Si nadie sabe decir por qué, es candidata a culto al cargo.
- **Implica de forma continua a las personas afectadas.** Diseña con ellas, no para ellas.
- **Prefiere la adopción voluntaria y la evolución a los mandatos.** Los equipos adaptan las prácticas a su contexto.
- **Limita la carga de cambio.** La gente solo puede absorber cierta cantidad, y un ritmo constante incluye el cambio.
- **Trata la resistencia como datos.** Escucha lo que dice de la propuesta.
- **Compara con honestidad.** Usa grupos de comparación y desconfía de los resultados que aparecen solo bajo observación.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Claridad del objetivo | Proporción de miembros del equipo que pueden enunciar con sus palabras el fin de una práctica y una forma de saber si funciona | miembros que dan un objetivo y un indicador claros en una breve comprobación anónima / miembros preguntados, a nivel de equipo | porcentaje | Breve comprobación anónima, agregada por equipo | Gestión del cambio organizativo; mejora continua | Comprensión del equipo de por qué trabaja así | Trimestral |
| Amplitud de adopción de la práctica | Proporción de equipos que usan una práctica definida, según un comportamiento observable y no la asistencia | equipos que muestran el comportamiento definido en el último periodo, confirmado por el equipo y un observador / equipos en el alcance | porcentaje | Autoevaluación del equipo confirmada por observación | Gestión del cambio organizativo | Extensión de una práctica | Trimestral |
| Movimiento del resultado frente a la comparación | Cambio en una medida de resultado de los equipos adoptantes frente a equipos similares no adoptantes en el mismo periodo | cambio en el resultado de los adoptantes menos el cambio de los equipos de comparación | unidades del resultado | Medidas de resultado por equipo (flujo, estabilidad, experiencia) | Mejora continua; medición y elaboración de informes | Aprendizaje de los experimentos | Trimestral |
| Carga de cambio | Número de cambios significativos que afectan a la vez a un equipo | recuento de iniciativas de cambio significativas que piden a un equipo cambiar su forma de trabajar en el periodo, por equipo | recuento | Cartera de cambios y aportación del equipo | Gestión del cambio organizativo; habilitación de cambios | Ritmo sostenible | Trimestral |
| Tasa de implicación de las partes interesadas | Proporción de iniciativas de cambio en que las personas afectadas participaron en el diseño y la revisión | iniciativas con implicación registrada de las personas afectadas / iniciativas | porcentaje | Registros de las iniciativas y confirmación del equipo afectado | Gestión del cambio organizativo; implicación de las partes interesadas | Implicación continua de las partes interesadas | Trimestral |
| Proporción de adopción voluntaria | Proporción de equipos adoptantes que eligieron la práctica, en contraste con haber recibido la orden | equipos adoptantes que reportan haber elegido la práctica / equipos adoptantes | porcentaje | Reportes de los equipos | Gestión del cambio organizativo | Equipos autoorganizados | Anual |
| Tasa de reversión | Proporción de equipos que abandonaron una práctica en el año siguiente a adoptarla | equipos que la dejaron en 12 meses / equipos que la adoptaron | porcentaje | Registros de los equipos en el tiempo | Gestión del cambio organizativo; mejora continua | Prácticas abandonadas por inútiles | Anual |

Define la práctica por lo que los equipos hacen y pretenden, no por su nombre. La amplitud de adopción cuenta a un equipo solo cuando su comportamiento se ajusta a la definición y el equipo y un observador están de acuerdo. El movimiento del resultado usa equipos de comparación elegidos de antemano como similares en tipo de servicio y punto de partida, e indica qué más cambió. La carga de cambio cuenta las iniciativas que piden al equipo alterar su trabajo, no las actualizaciones rutinarias. Todas las medidas son a nivel de equipo o de iniciativa, nunca individuales.

## Recomendaciones

### Empieza por el propósito y las personas

**1. Declara el objetivo y el indicador antes de la práctica.** Para cada cambio propuesto, anota qué problema resuelve, quién lo siente, qué resultado debe mejorar y cómo sabrás. Si el objetivo es «ser ágiles» o «adoptar el marco», vuelve a preguntar. Los equipos seguirán una práctica con más gusto cuando vean para qué sirve. Es la mejor protección contra el culto al cargo.

**2. Implica a las personas afectadas en el diseño del cambio.** Pregunta a quienes hacen el trabajo qué les duele, qué probarían y qué temen. Diseña con unas pocas de ellas, prueba con un grupo pequeño y escucha. La implicación continua de las partes interesadas es un fin ágil central, y se aplica a los programas de cambio tanto como a los productos. Registra quién participó.

**3. Escucha la resistencia.** Cuando la gente se oponga, pregunta qué ve que tú no ves. Las respuestas posibles incluyen un defecto de la propuesta, una capacidad que falta, un costo no reconocido o un cambio anterior que nunca se terminó. Registra las preocupaciones y las respuestas, y ajusta el cambio donde tengan razón.

### Introduce el cambio de una manera de la que se pueda aprender

**4. Haz un piloto con comparación.** Prueba el cambio con uno o dos equipos dispuestos y observa un grupo comparable que no cambie. Compara los resultados en el mismo periodo. Ten presente el efecto Hawthorne y prolonga el piloto lo bastante para que se desvanezca la novedad. Un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) es una prueba a pequeña escala, y su valor está en lo que enseña antes de escalar, así que declara de antemano qué esperas aprender y qué te haría parar.

**5. Prefiere la adopción voluntaria y deja que las prácticas evolucionen.** Cuando los equipos eligen una práctica porque les resuelve un problema, la adaptan y la conservan. Cuando se impone, la representan. Ofrece el objetivo, la evidencia y el apoyo, y deja que los equipos decidan cómo aplicarla. Permite la variación local y aprende de ella. Haz seguimiento de la adopción voluntaria y de la reversión para ver si una práctica se asienta por las razones correctas.

**6. Extiende mediante el ejemplo y la conversación.** La influencia viaja por personas respetadas y visibles. Comparte historias de equipos que probaron algo y de lo que pasó, incluidos los reveses. Las comunidades de práctica son un buen canal (véase el tema 9.4, Métricas de habilidades y aprendizaje). Evita las tablas de clasificación de adopción.

### Vigila la carga

**7. Cuenta los cambios que caen sobre cada equipo.** Enumera las iniciativas que piden a un equipo cambiar su forma de trabajar: herramientas nuevas, procesos nuevos, reorganizaciones, requisitos de reporte. Un equipo que se enfrenta a muchas a la vez no puede absorberlas, y se instala la [fatiga del cambio](https://en.wikipedia.org/wiki/Change_fatigue). Secuencia las iniciativas, descarta las de poco valor y da a los equipos espacio para terminar un cambio antes del siguiente. Es parte de mantener un ritmo sostenible (véase el tema 9.2, Métricas de satisfacción y bienestar).

**8. Retira lo que ya no sirve.** Por cada práctica nueva que se añade, pregunta qué puede quitarse. Las capas de proceso se acumulan, y cada capa tiene un costo. Revisa cada trimestre los rituales que ejecuta un equipo y abandona aquellos cuyo fin ya no se cumple.

### Mide la adopción por lo que importa

**9. Define la adopción por el comportamiento observable y el propósito.** Describe qué hace distinto un equipo cuando la práctica ha arraigado, por ejemplo «los cambios llegan a producción en pasos pequeños con comprobaciones automatizadas y se consulta a los usuarios cada semana». Evalúa mediante observación y conversación, no contando artefactos como tableros o reuniones. Pide a los miembros del equipo que expliquen el objetivo.

**10. Compara resultados, no cumplimiento.** Mira las medidas de flujo, estabilidad, experiencia y costo de los equipos adoptantes frente a los equipos de comparación (véase el tema 2.8, Métricas DORA). Ten cuidado con la causalidad: los equipos que adoptan pueden ser diferentes de maneras que también afectan a los resultados. Reporta la comparación con sus límites.

**11. Comprueba la experiencia de las personas.** Una adopción que aumenta la fricción o erosiona la autonomía puede socavarse a sí misma. Usa los pulsos de salud y bienestar del equipo para ver cómo se siente el cambio (véase el tema 9.1, Salud del equipo y experiencia de desarrollo). Pregunta qué quitó el cambio además de qué añadió.

**12. Sé honesto al reportar.** Reporta juntas la adopción, los resultados, la carga de cambio y las reversiones, con la historia de lo aprendido. Evita declarar el éxito cuando se ha extendido la forma y los resultados no se han movido. Admite cuando una práctica no encajó y retírala. Una transformación se juzga por lo que hizo posible, no por lo ampliamente que se anunció.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Claridad del objetivo | Adiestrar a la gente para que recite el objetivo; hacer preguntas sugestivas | Comprobación anónima; pedir un ejemplo de cómo sabrían; comparar con el movimiento del resultado |
| Amplitud de adopción de la práctica | Contar tableros y reuniones; equipos que actúan para el observador | Definir por comportamiento y propósito; observación por alguien ajeno al equipo; movimiento del resultado |
| Movimiento del resultado frente a la comparación | Elegir un grupo o periodo de comparación favorable; omitir otros cambios | Elegir la comparación y el periodo de antemano; enumerar otros cambios; mostrar la incertidumbre |
| Carga de cambio | Dividir una iniciativa en piezas pequeñas; no contar los cambios que llegan informalmente | Contar por el efecto sobre el trabajo del equipo; pedir a los equipos que enumeren lo que están absorbiendo |
| Tasa de implicación de las partes interesadas | Invitar a la gente a una sesión informativa y llamarlo implicación; registrar solo la asistencia | Confirmación del equipo afectado de que influyó en el diseño; registrar los cambios hechos en respuesta |
| Proporción de adopción voluntaria | Presentar un mandato como una elección; equipos que dicen haber elegido cuando sintieron que debían | Reporte anónimo; preguntar qué habría pasado si hubieran declinado |
| Tasa de reversión | Hacer costoso u oculto abandonar una práctica; renombrar la práctica abandonada | Revisar los motivos del abandono; permitir una retirada segura |

Una lectura sana es una práctica que los equipos pueden explicar y elegir, una adopción medida por el comportamiento, resultados que mejoran frente a la comparación, una carga de cambio manejable, pocas reversiones con buenos motivos y personas que dicen que su voz dio forma al cambio.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Despliegue por mandato | Rápido, coherente | Cumplimiento sin propósito; resentimiento; culto al cargo |
| Adopción voluntaria | Adoptantes motivados; ajuste local | Más lenta; desigual; algunos equipos nunca adoptan |
| Cambio de golpe | Un evento claro | Alto riesgo; carga pesada; difícil aprender de él |
| Pilotos por etapas con comparación | Aprender antes de escalar | Más lento; los pilotos pueden no generalizarse |
| Prácticas estándar entre equipos | Coordinación y apoyo más fáciles | Mal ajuste para algunos equipos |
| Variación local | Ajuste al contexto | Más difícil de comparar y de apoyar |
| Paneles de adopción | Progreso visible | Premian la forma de la adopción |
| Comparación de resultados | Señal honesta | Difícil de aislar; tarda más en mostrarse |

La respuesta en prosa es hacer pilotos con comparación, ofrecer las prácticas con sus objetivos, dejar que los equipos elijan y adapten, contar la carga de cambio y juzgar por los resultados, usando un estándar solo donde la coordinación lo exija.

## Preguntas para debatir con tu equipo

**1. ¿Qué práctica seguimos de la que nadie sabe explicar el propósito?**
Cada persona nombra una. Para cada una, hablen de qué problema debía resolver y si todavía lo resuelve. El facilitador debe registrar las respuestas sin ponerse a la defensiva. Acuerden mantener, cambiar o abandonar dos de ellas.

**2. ¿Qué cambios nos están cayendo ahora mismo y cuáles podrían esperar?**
Enumeren cada iniciativa que nos pide cambiar la forma de trabajar. Cuéntenlas. Pregunten cuáles aportan valor y cuáles añaden carga. Propongan a los patrocinadores una secuencia o una parada para una de ellas.

**3. ¿A qué dijimos que no en el último cambio y nos escuchó alguien?**
Recuerden la resistencia o las preocupaciones. ¿Se oyeron y se adaptó el cambio? Hablen de cómo plantear las preocupaciones de manera que se reciban. Acuerden cómo dará retroalimentación el equipo sobre el próximo cambio.

**4. Si este cambio funcionó, ¿qué sería distinto en nuestros resultados y cómo lo sabríamos?**
Redacten el indicador y la comparación. Pregunten qué más está cambiando al mismo tiempo. Si nadie sabe decirlo, al cambio le falta un objetivo. Acuerden una línea base ahora.

**5. ¿Cómo sabríamos si una práctica nueva era solo de cara a la galería?**
Piensen en señales: nadie usa el resultado, la reunión no tiene decisión, el tablero se actualiza para un público. Hablen de cómo comprobarlas. Acuerden un momento para revisar los rituales que ejecuta el equipo.

**6. ¿Qué práctica abandonamos y qué aprendimos al abandonarla?**
Recuerden una. Hablen de si era seguro abandonarla y qué la sustituyó. Traten la respuesta como prueba de que los equipos pueden adaptarse.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega viven con los cambios. Deben pedir el objetivo, implicarse en el diseño, ejecutar experimentos pequeños y decir cuándo una práctica no encaja. Tienen derecho a evolucionar su forma de trabajar y el deber de entregar resultados que justifiquen sus decisiones.

### Equipos de servicio y de operaciones

Los equipos de operaciones absorben cambios de proceso desde muchas direcciones, a menudo además del trabajo no planificado. Deben registrar la carga de cambio, pedir secuenciación y unirse a los pilotos donde su visión importe. Están bien situados para notar cuándo un proceso nuevo añade pasos sin valor.

### Liderazgo y gobernanza

Los líderes patrocinan los cambios y a menudo los imponen. Deben declarar objetivos e indicadores, implicar a las personas afectadas, preferir la adopción voluntaria cuando sea posible, limitar la carga de cambio y estar dispuestos a retirar lo que no funciona. La gobernanza debe mirar los resultados frente a la comparación, la carga de cambio por equipo y las tasas de reversión, y desconfiar de las cifras de adopción uniformemente altas.

### Clientes y usuarios

Los usuarios experimentan los efectos del cambio en la calidad del servicio, la comunicación y la estabilidad. Se les puede implicar en el diseño de los cambios que les afectan, y su retroalimentación es evidencia de si el cambio ayudó. También cargan con el costo de las transformaciones que distraen a los equipos del servicio.

## En la práctica: un ejemplo de gestión de servicios

La división de tecnología de una empresa logística multinacional tiene 30 equipos. Hace dos años lanzó un programa de transformación para adoptar un conjunto estándar de formas de trabajar, y el panel del programa muestra 27 de 30 equipos «adoptados». Los números siguientes son ilustrativos.

A la nueva jefa de práctica de ingeniería le piden que diga si el programa funcionó. Mira más allá del panel. Una breve comprobación anónima muestra que solo el 41 por ciento de los miembros de los equipos puede enunciar el objetivo de las prácticas principales y una forma de saber que funcionan. La observación de ocho equipos muestra que cinco celebran las reuniones prescritas y actualizan los tableros, y dos de esos cinco siguen publicando cada trimestre con aprobación manual. Al comparar los 12 equipos con el comportamiento de práctica más sólido con 12 equipos similares que no lo tenían, el tiempo de ciclo mediano y la tasa de fallos de cambio son parecidos, y la satisfacción con la forma de trabajar es menor entre los equipos bajo el cumplimiento más estricto. El equipo medio está absorbiendo cinco iniciativas que le piden cambiar su forma de trabajar, y tres equipos se enfrentan a ocho o más. El 22 por ciento de los equipos adoptó voluntariamente. De los equipos que adoptaron una práctica de cadena de despliegue hace dos años, el 30 por ciento la ha dejado discretamente.

La jefa de práctica de ingeniería replantea el programa con los equipos. El objetivo de cada práctica se escribe en lenguaje llano con un indicador, y los equipos son libres de adoptar, adaptar o declinar, con una conversación sobre por qué. La división publica la carga de cambio por equipo y pide a los patrocinadores que secuencien sus iniciativas; cuatro se pausan y dos se fusionan. Equipos dispuestos hacen un piloto de una práctica de publicación en pasos pequeños con comprobaciones automatizadas, con un grupo de comparación elegido de antemano, y los resultados se comparten como historias y números. Partes interesadas del negocio y de operaciones se unen a las sesiones de diseño de dos cambios de proceso. El reporte pasa de los recuentos de adopción al movimiento del resultado, la carga de cambio y la reversión.

Un año después, el 71 por ciento de los miembros de los equipos puede enunciar el objetivo de las prácticas que usa. Los equipos piloto reducen el tiempo de ciclo mediano un 30 por ciento frente a una reducción del 6 por ciento en el grupo de comparación, con el efecto Hawthorne considerado al prolongar el piloto dos meses más. La carga media de cambio baja a tres iniciativas por equipo. La adopción voluntaria sube al 64 por ciento, y las reversiones son el 9 por ciento, con los motivos registrados. El director de operaciones pide un objetivo del 100 por ciento de adopción a fin de año. La jefa de práctica de ingeniería propone hacer seguimiento de los resultados y de la carga en su lugar, explicando que un 100 por ciento por mandato produjo la anterior apariencia de éxito y la anterior reversión. La decisión se anota, y el panel abandona el recuento de adopción.

## Agilidad, IA, automatización y analítica

### Agilidad

Cambia a un ritmo que la gente pueda sostener, con las partes interesadas implicadas en todo momento. La precaución es que medir la presencia de rituales muestra cumplimiento, no propósito.

### IA

La adopción de IA es un programa de cambio con impacto en las personas, así que mide la adopción voluntaria, el movimiento del resultado y las preocupaciones planteadas, y empareja el uso con la calidad. La precaución es que el uso obligatorio de IA puede subir las cifras de uso mientras baja la confianza.

### Automatización

Recoge automáticamente las señales de adopción de las herramientas y mide la carga de cambio sobre los equipos. La precaución es que los paneles de uso de herramientas pueden sustituir a la conversación.

### Analítica

Compara los resultados con un grupo de comparación cuando sea posible y declara los límites. La decisión a la que informa es si continuar, ajustar o revertir. La precaución es que adopción y beneficio son cosas distintas, así que mide ambas.

## Perspectiva sectorial

**Startup.** El cambio es constante y las prácticas vienen de los fundadores y de las primeras contrataciones. Mantén explícito el objetivo de cada práctica y abandona lo que no ayude. Resiste la tentación de copiar el proceso de una gran empresa antes de tener sus problemas.

**Pequeña empresa.** El dueño suele decidir, y el cambio es personal. Explica por qué, implica a las pocas personas afectadas, prueba un cambio a la vez y comprueba si ha aliviado el dolor al que apunta. Evita comprar marcos que superen la capacidad del equipo para absorberlos.

**Gran empresa.** La escala invita a estándares, programas y consultores, y con ellos al riesgo de culto al cargo en volumen. Ofrece prácticas compartidas con sus objetivos, apoya la adopción voluntaria, gestiona la cartera de cambios según la carga por equipo y compara los resultados con honestidad. Usa comunidades de práctica para extender lo que funciona.

**Gobierno y sector público.** El cambio puede venir impulsado por la legislación, la reestructuración y los ciclos políticos, con poca capacidad de elección. Donde la elección es limitada, sé transparente al respecto, concéntrate en el objetivo y el resultado e implica pronto al personal y a los usuarios. Pueden aplicarse protecciones del personal y deberes de consulta, y la rendición de cuentas pública hace valioso reportar con honestidad lo que no funcionó (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de medir bien el cambio son pequeños: comprobaciones breves, datos de comparación de medidas existentes, tiempo de observación y una lista de iniciativas por equipo. El costo mayor es la disposición a oír que un programa favorito no funciona.

Los retornos vienen de no desperdiciar el costo muy grande de las transformaciones fallidas: formación, consultoría, herramientas y el tiempo de muchas personas, además del costo de la fatiga del cambio y de la confianza perdida. Construye el caso con tu propia historia: el costo de un programa pasado y qué resultados movió, el número de iniciativas que compiten por cada equipo y la proporción de prácticas adoptadas que luego se abandonaron. Evita citar estadísticas de tasas de fracaso de las transformaciones salvo que puedas rastrear su fuente y su método. Incluye el beneficio de corregir antes el rumbo mediante pilotos con comparación (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Reportar la adopción como éxito.** La forma puede extenderse sin sustancia. Reporta los resultados frente a la comparación.
- **Imponer prácticas.** Produce ritual y resentimiento. Ofrece objetivos y deja que los equipos elijan.
- **Copiar el proceso de otra empresa.** Importa la forma, no las condiciones que lo hicieron funcionar. Parte de tus problemas.
- **Demasiados cambios a la vez.** La carga supera la capacidad. Cuenta y secuencia.
- **Descartar la resistencia.** Pierdes información. Escucha y adapta.
- **Pilotos sin comparación.** Los efectos de novedad engañan. Usa una comparación y un periodo más largo.
- **No retirar nunca nada.** Las capas de proceso se acumulan. Quita al añadir.
- **Teatro del éxito.** Historias sin números o números sin historias esconden la verdad. Reporta ambos con honestidad.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propósito e implicación | Se anuncian las prácticas | Los objetivos se enuncian en presentaciones | Objetivo e indicador escritos para cada cambio; se consulta a las personas afectadas | Implicación y claridad del objetivo medidas; resistencia registrada y respondida | Cambio codiseñado con usuarios y equipos de toda la organización y los socios |
| Introducción y evidencia | Despliegues de golpe | Pilotos sin comparación | Pilotos con grupos de comparación; adopción definida por el comportamiento | Movimiento del resultado y reversión con seguimiento; límites de la evidencia reportados | Aprendizaje a nivel de cartera sobre qué cambios funcionan, compartido abiertamente |
| Carga y sostenibilidad | Sin visión de la carga de cambio | Iniciativas enumeradas | Carga de cambio contada por equipo y secuenciada | Carga gestionada con la capacidad; prácticas retiradas | Cambio planificado conjuntamente con la capacidad, el bienestar y los objetivos de entrega |

## Lista de verificación

- [ ] Cada cambio tiene un objetivo escrito, un indicador con nombre y una línea base.
- [ ] Las personas afectadas participaron en el diseño y su aportación está registrada.
- [ ] Las preocupaciones y la resistencia se registran con las respuestas.
- [ ] Los pilotos tienen un grupo de comparación y un periodo lo bastante largo para que se desvanezca la novedad.
- [ ] La adopción se define por el comportamiento observable y el propósito.
- [ ] La adopción voluntaria y la reversión tienen seguimiento, con los motivos.
- [ ] La carga de cambio por equipo se cuenta y las iniciativas se secuencian.
- [ ] Las prácticas se revisan para su retirada al menos una vez al año.
- [ ] El movimiento del resultado se reporta con sus límites.
- [ ] Ningún objetivo exige que un porcentaje dado de equipos adopte una práctica.

## Prompts de IA

**Escribe un objetivo y un indicador para un cambio.**

```text
We plan to introduce [change] for [teams] in [type of organization]. Draft a
one-paragraph aim in plain language (the problem, who feels it, the outcome that
should improve), an indicator with a baseline to record now, a way to compare
with similar teams that do not change, and signs that the practice has become
a ritual without purpose. Do not invent evidence. List your assumptions and
questions for the affected teams.
```

**Cuenta y secuencia la carga de cambio.**

```text
Here is a list of initiatives that will ask [team or group] to change how it
works in the next [period]: [paste with sponsors, size, and dates]. Count the
load per team, identify conflicts and dependencies, and propose a sequence that
leaves room for the work and for sustainable pace. Suggest which could be
combined, delayed, or dropped. Do not assume we can do all of it. List your
assumptions.
```

**Diseña un piloto con comparación.**

```text
Design a pilot of [change] with [number] willing teams and a comparison group
of [number] similar teams. Propose the outcome measures and baselines, the
duration (including time for novelty to fade), how to choose the comparison
group in advance, what else might confound the result, and what would make us
scale, adapt, or stop. Do not claim results from other organizations. List your
assumptions.
```

**Comprueba si hay culto al cargo.**

```text
Here is a practice our teams follow: [describe, with its artifacts and
meetings]. Ask me ten questions I could put to team members to see whether they
understand the purpose, can name the outcome it should improve, and would
adapt it to their context. Add signs in the artifacts that suggest the practice
is performed for show. Do not judge individuals. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de adopción o de cambio.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de adopción mide el comportamiento y el resultado, con su vector de manipulación y su barrera de protección.

## Ideas clave

- Juzga un cambio por su resultado frente a una comparación, no por la extensión de sus rituales.
- Escribe el objetivo y el indicador antes de la práctica y comprueba si la gente puede explicarlo.
- Implica de forma continua a las personas afectadas y trata la resistencia como información.
- Prefiere la adopción voluntaria, deja que las prácticas evolucionen y haz seguimiento de las reversiones.
- Cuenta la carga de cambio sobre cada equipo y mantenla dentro de un ritmo sostenible.
- Reporta con honestidad, incluido lo que no funcionó, y retira las prácticas que ya no sirven.

## Referencias y lecturas complementarias

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
