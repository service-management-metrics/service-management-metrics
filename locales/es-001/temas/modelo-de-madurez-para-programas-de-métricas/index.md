# Modelo de madurez para programas de métricas

**Usa la escala común de cinco niveles para describir dónde está un programa de métricas y para elegir el siguiente paso pequeño, nunca como una puntuación que exhibir, comparar o certificar.**

## Visión general y motivación

Todos los demás temas de este libro terminan con una pequeña tabla de madurez de su asunto. Este tema aplica la misma escala al programa de métricas en su conjunto. La pregunta no es cuán buenos son los tiempos de incidentes de un equipo. Es lo bien que la organización recoge, lee y actúa sobre las medidas en absoluto: si las definiciones se comparten, si se confía en los datos, si los números llevan a decisiones y si las personas medidas ven el programa como una ayuda.

Un modelo de madurez es una descripción de etapas por las que puede pasar una organización a medida que se desarrolla una práctica. El ejemplo más conocido en el software es el [Modelo de Madurez de Capacidades](https://en.wikipedia.org/wiki/Capability_Maturity_Model), que nació del trabajo en el Software Engineering Institute y se extendió ampliamente. Su influencia fue grande, y también lo fueron las críticas que siguieron. Las organizaciones perseguían el nivel y no la capacidad, los auditores puntuaban papeleo y el modelo acabó usándose como una insignia. Un uso responsable de cualquier modelo de madurez mantiene a la vista tres precauciones. La escala es una herramienta de conversación y no una certificación. Más alto no siempre es mejor, porque el nivel adecuado depende del contexto. Y el modelo no sustituye a los resultados: un programa maduro que no mejora los servicios es un fracaso muy ordenado, y un nivel exhibido como insignia se parece mucho a una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric), un número que luce bien y no informa ninguna decisión.

La escala usada aquí es la que se comparte en todo el libro y en la *Service Management Guide*: Iniciar, Desarrollar, Estandarizar, Gestionar y Orquestar (véase el modelo de madurez común en la especificación). No es deliberadamente igual que las escalas de madurez de procesos de ITIL, de ISO/IEC 33000 o del Modelo de Madurez de Capacidades, y un equipo no debe reclamar una puntuación en ninguno de esos marcos apoyándose en esta.

Los fines ágiles indican cómo usarla. La mejora continua significa que el modelo sirve para encontrar el siguiente paso, no para alcanzar un estado final. La evolución permanente significa que un programa que llegó a Orquestar el año pasado puede retroceder si se va gente o cambian las prioridades, así que la autoevaluación se repite. La implicación continua de las partes interesadas significa que la evaluación se hace con los equipos y no sobre ellos. Un ritmo sostenible significa que el programa da un paso cada vez y no intenta saltar tres niveles en un trimestre. Y construir en torno a individuos motivados significa que las personas que hacen el trabajo juzgan si el programa les ayuda. Es la misma lógica que la práctica de mejora continua de ITIL, en que una organización comprueba el estado actual, fija una dirección y mejora en pasos pequeños, un hábito cercano al [kaizen](https://en.wikipedia.org/wiki/Kaizen), la idea japonesa de la mejora continua por parte de todos. La idea más general es el [proceso de mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process) (véase el tema 9.5, Métricas de mejora continua).

El modelo tiene una trampa particular en el contexto de las métricas. Un programa que se evalúa con sus propias métricas invita a la misma distorsión contra la que advierte. Si el «número de medidas con definiciones» se convierte en un objetivo, las definiciones se multiplican. Por eso el enfoque de este tema usa evidencia del trabajo (qué decisiones cambiaron, qué dicen los equipos) además de recuentos, y mantiene la evaluación en manos de los equipos, que son los que menos tienen que ganar inflándola (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). En los apéndices aparece un formulario de evaluación complementario para los equipos (véase el tema 12.5, Autoevaluación de madurez).

## Principios clave

- **La escala es una herramienta de conversación.** Ayuda a la gente a describir el presente y elegir un siguiente paso, y no sirve para valorar, clasificar ni certificar.
- **Evalúa con los equipos.** La autoevaluación, comentada abiertamente, es más exacta que la puntuación externa.
- **Juzga por la evidencia.** Pregunta qué decisiones cambiaron, qué dice la gente y qué muestran los datos, además de qué documentos existen.
- **Las dimensiones pueden diferir.** Un programa puede ser fuerte en herramientas y débil en confianza. Reporta el perfil, no un solo número.
- **Avanza un paso cada vez.** Apunta al siguiente nivel en una o dos dimensiones, no a todo a la vez.
- **Más alto no siempre es mejor.** Elige el nivel que se ajuste al tamaño, al riesgo y a las necesidades de la organización.
- **Espera retrocesos.** La rotación de personal, la reorganización y la presión pueden hacer retroceder a un programa. Vuelve a evaluar con regularidad.
- **No publiques nunca una tabla de clasificación de equipos.** Agrega para el programa y comparte los resultados de cada equipo solo con el equipo.

## Definiciones de métricas

Las medidas siguientes describen la salud del programa y su evaluación. Son para el equipo del programa y los patrocinadores, y se leen como señales para la conversación.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Participación en la evaluación | Proporción de equipos participantes que completaron una autoevaluación con su propia discusión | equipos que completaron y comentaron / equipos participantes | porcentaje | Registros de evaluación | Mejora continua | Reflexión y retrospectivas | Dos veces al año |
| Perfil por dimensión | Distribución de los niveles autoevaluados de los equipos en cada dimensión, mostrada como un rango y no como una sola puntuación | recuento de equipos en cada nivel, por dimensión | equipos por nivel | Autoevaluaciones, agregadas | Mejora continua; gobernanza | Trabajo visible | Dos veces al año |
| Acciones de mejora derivadas de las evaluaciones | Proporción de siguientes pasos acordados que se completaron, se abandonaron con un motivo o siguen en curso | acciones cerradas o razonadas / acciones acordadas | porcentaje | Registro de mejoras | Mejora continua | Experimentos pequeños | Trimestral |
| Evidencia de decisiones | Proporción de medidas muestreadas en que el equipo puede nombrar una decisión o una elección deliberada sobre la que informó la medida en el último trimestre | medidas con una decisión nombrada / medidas muestreadas | porcentaje | Entrevistas con equipos; notas de revisión | Mejora continua | Evidencia sobre ceremonia | Trimestral |
| Confianza en las definiciones y los datos | Acuerdo, a nivel de equipo, en que las definiciones son claras y los datos son correctos | porcentaje que está de acuerdo en una breve encuesta de equipo; tasa de respuesta mostrada | porcentaje | Encuesta anónima del equipo | Gestión del conocimiento; gestión de la información | Comprensión compartida | Dos veces al año |
| Tiempo hasta el siguiente nivel (descriptivo) | Tiempo transcurrido para que un equipo suba una dimensión un nivel cuando decidió hacerlo | meses medianos desde el paso acordado hasta la reevaluación del equipo | meses | Historial de evaluaciones | Mejora continua | Ritmo sostenible | Anual |
| Carga de la evaluación | Horas que lleva la evaluación por equipo | horas medianas por equipo | horas | Estimaciones de tiempo de los equipos | Mejora continua | Ritmo sostenible | Dos veces al año |

La participación se mide como compleción con discusión, porque un formulario relleno en solitario dice poco. El perfil es un rango y nunca se promedia en un único número de madurez. El tiempo hasta el siguiente nivel es descriptivo: un ascenso rápido puede reflejar una autopuntuación inflada, y uno lento puede reflejar un cuidado apropiado. La carga de la evaluación es una comprobación de la propia evaluación, que no debe llevar más de una o dos horas por equipo.

## Recomendaciones

### Usa bien la escala

**1. Define las dimensiones de un programa de métricas.** Un conjunto viable tiene seis dimensiones: (a) preguntas y propósito, si las medidas responden a preguntas que hicieron las audiencias; (b) definiciones y propiedad, si las medidas tienen definiciones escritas y responsables; (c) datos y herramientas, si los datos son exactos, oportunos y portables; (d) uso en las decisiones, si los números informan las elecciones; (e) confianza y seguridad, si la gente cree que los datos le ayudan; y (f) revisión y evolución, si el programa se recorta a sí mismo. Seis bastan para ser útiles y son pocas para debatirlas en una hora.

**2. Describe qué aspecto tiene cada nivel.** La tabla de la sección «Modelo de madurez» de más abajo da descripciones breves de cada dimensión en cada nivel. Trátalas como indicaciones. Un equipo debe adaptar la redacción a su propio contexto y escribir sus propios ejemplos.

**3. No promedies.** Una sola puntuación global esconde el patrón que importa. Un programa con una alta madurez de herramientas y poca confianza está en una situación distinta de uno con lo contrario, y el siguiente paso difiere. Muestra el perfil.

### Evalúa con los equipos y no sobre ellos

**4. Hazlo una conversación de una hora.** Reúne a un equipo con la tabla. Pide a cada persona que marque, en privado, dónde cree que está el equipo en cada dimensión, y luego comparen. Hablen de las diferencias, porque revelan experiencias distintas del mismo programa. Acuerden una visión del equipo, anoten la evidencia que la respalda y elijan uno o dos pasos siguientes.

**5. Pide evidencia.** Para cada nivel reclamado, pide un ejemplo. «Usamos los números en las decisiones» invita a la pregunta «¿Qué decisiones el último trimestre?». Usa medidas muestreadas y entrevistas para comprobar. Esto respeta a la gente y evita que la evaluación derive hacia el pensamiento ilusorio.

**6. Deja los resultados en el equipo.** El perfil de un equipo pertenece al equipo. El programa comparte rangos agregados y temas comunes, no una clasificación. Deja claro que la evaluación no afecta a la financiación, a la posición ni a las evaluaciones. Si lo hace, los equipos la inflarán y se perderá el valor (véase el tema 11.3, Implantar métricas sin sembrar miedo).

### Elige los siguientes pasos

**7. Elige la dimensión que limita a las demás.** La confianza y la seguridad suelen limitar todo lo demás: sin ellas, los datos se distorsionan y las decisiones son sospechosas. Las definiciones y la propiedad suelen limitar los datos y el uso. Un patrón común es reforzar primero la confianza y las definiciones, luego los datos y después el uso y la revisión. Busca la dimensión donde una pequeña mejora desbloquearía las demás.

**8. Fija un paso pequeño y concreto.** Un siguiente paso debe ser uno que un equipo pueda completar en un trimestre y reconocer: «acordar una carta», «escribir definiciones para nuestras cuatro medidas», «automatizar dos flujos», «celebrar una revisión mensual en que anotemos las decisiones». Evita pasos como «alcanzar el Nivel 4». Los niveles describen un estado, y los pasos describen trabajo.

**9. Vincula los pasos con el registro de mejoras.** Pon las acciones en el mismo lugar que el resto del trabajo de mejora, con responsables y fechas, y revisa el progreso en la conversación regular de mejora (véase el tema 9.5, Métricas de mejora continua). Un paso sin financiación ni calendario no ocurrirá.

### Mantenlo honesto y ligero

**10. Calibra entre equipos sin clasificarlos.** Celebra una sesión breve en que los equipos compartan ejemplos de lo que llaman Nivel 3 en una dimensión. Hablen de las diferencias de estándares. El fin es una comprensión compartida, no puntuaciones iguales. Rota al facilitador e invita a un equipo ajeno al programa a cuestionar la redacción.

**11. Vuelve a evaluar con un ritmo y en respuesta a eventos.** Dos veces al año basta para la mayoría de los programas. Vuelve a evaluar tras una reorganización, un cambio de herramienta o un incumplimiento de la carta, ya que pueden mover la confianza en uno u otro sentido. Vigila el retroceso y trátalo como información, no como fracaso.

**12. Retira o revisa el propio modelo.** Cada año, pregunta a los equipos si las dimensiones y las descripciones de los niveles todavía encajan. Reescribe lo que confunde y elimina lo que nadie usa. Un modelo que no ha cambiado en cinco años puede estar describiendo un programa que ya no existe.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Participación en la evaluación | Completar formularios para cumplir una cuota; una sola persona que rellena por el equipo | Exigir una discusión del equipo; pedir la evidencia que respalda cada afirmación |
| Perfil por dimensión | Inflar los niveles para quedar bien; rebajarlos para recibir ayuda | No vincularlo con la financiación ni la posición; pedir evidencia; calibrar abiertamente |
| Acciones de mejora derivadas de las evaluaciones | Elegir pasos triviales para cerrarlos; cerrar sin hacer | Revisar el tamaño y el valor de los pasos; comprobar los resultados en la siguiente evaluación |
| Evidencia de decisiones | Inventar decisiones a posteriori; enumerar decisiones sin consecuencias | Pedir la fecha y las personas implicadas; aceptar «elegimos no hacer nada» como decisión |
| Confianza en las definiciones y los datos | Aleccionar a los encuestados; una respuesta baja que esconde descontento | Anonimato y tamaño mínimo de grupo; mostrar las tasas de respuesta; hablar directamente con los equipos |
| Tiempo hasta el siguiente nivel (descriptivo) | Precipitar las afirmaciones de progreso; esconder el retroceso | Mantenerlo descriptivo; leerlo con la evidencia; registrar los retrocesos sin sanción |
| Carga de la evaluación | Saltarse la discusión para recortar horas | Hacer seguimiento de las horas junto con la participación y la calidad de la evidencia |

Una lectura sana muestra un perfil con una mezcla de niveles, con la confianza y las definiciones subiendo antes que las herramientas y el pulido, siguientes pasos pequeños y terminados, decisiones que los equipos pueden nombrar y un registro honesto del retroceso ocasional.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Autoevaluación del equipo | Honesta, propia, rápida | Subjetiva; necesita calibración |
| Evaluación externa | Coherente; independiente | Costosa; invita a actuar para el evaluador |
| Una sola puntuación global | Fácil de comunicar | Esconde el patrón; invita a los objetivos |
| Perfil por dimensión | Muestra dónde actuar | Más difícil de resumir |
| Evaluación anual | Ligera | Lenta para notar el retroceso |
| Dos veces al año con desencadenantes por eventos | Reactiva | Más esfuerzo |
| Vinculada a la financiación | Gana atención | Inflación y manipulación |
| Mantenida separada de la financiación | Datos honestos | Necesita otras vías para ganar apoyo |

La respuesta en prosa es ejecutar una autoevaluación ligera con evidencia, reportar perfiles y rangos, dejar los resultados en los equipos y atar los siguientes pasos al registro de mejoras, no a la financiación ni a la posición.

## Preguntas para debatir con tu equipo

**1. ¿Cuál de las seis dimensiones diríamos que es la más débil y qué nos hace decirlo?**
Que cada persona elija una en privado y luego comparta. El facilitador debe pedir un ejemplo reciente. Busquen patrones y acuerden qué dimensión limita a las demás.

**2. ¿Podemos nombrar una decisión del último trimestre que cambió una medida?**
Enumérenlas. Si la lista es corta, pregunten por qué. Hablen de si el problema son las medidas, los datos o el hábito de mirar.

**3. ¿Dónde nos situaríamos en confianza y seguridad y cómo lo sabemos?**
Miren los reportes de cuasi accidentes, los cuestionamientos y los resultados de las encuestas. Comparen con cómo habla la gente en la práctica. Acuerden una cosa que los líderes podrían hacer para moverla.

**4. ¿Qué aspecto tendría un siguiente paso pequeño y concreto para nuestra dimensión más débil?**
Redáctenlo en una frase, con un responsable y una fecha. Comprueben que puede terminarse en un trimestre. Acuerden cómo sabremos que funcionó.

**5. ¿Qué haría que esta evaluación pareciera una amenaza y cómo lo evitamos?**
Hablen de los usos de los resultados que la gente temería. Escriban para qué no se usarán nunca los resultados. Comprueben que el responsable del programa está de acuerdo.

**6. ¿Hay algún nivel que no necesitemos alcanzar?**
Piensen en nuestro tamaño, nuestros riesgos y nuestros objetivos. Describan un nivel que sea suficientemente bueno por ahora y una señal que nos diga que debemos revisarlo.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos se evalúan a sí mismos, eligen el siguiente paso y conservan sus resultados. Deben usar la conversación para sacar a la luz las diferencias de experiencia, pedir evidencia y fijar pasos lo bastante pequeños para terminarlos. Deben oponerse a cualquier intento de convertir el perfil en una clasificación.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con grandes cantidades de datos y de incidentes y pueden ver dónde el programa los apoya o los sobrecarga. Deben anotar dónde las herramientas o las definiciones bloquean su trabajo, pedir que los datos de guardia y de incidentes se traten con cuidado y dar una retroalimentación franca sobre la carga de la evaluación.

### Liderazgo y gobernanza

Los líderes patrocinan el programa y reciben la imagen agregada. Deben pedir perfiles y temas comunes, resistirse a pedir una única puntuación, financiar los siguientes pasos que elijan los equipos y no atar la financiación ni la posición a la evaluación. Deben además dar ejemplo describiendo decisiones que informaron las métricas.

### Clientes y usuarios

Los clientes y los usuarios se benefician cuando el programa mejora los servicios y cuando su retroalimentación forma parte de las medidas. Donde son socios, pueden participar en la evaluación de las medidas que les conciernen, por ejemplo la utilidad de las encuestas de satisfacción, y en la revisión de cómo se usan sus datos.

## En la práctica: un ejemplo de gestión de servicios

Un grupo asegurador nacional tiene 20 equipos de entrega y de soporte y un programa de métricas que lleva 18 meses en marcha. El patrocinador pide «una puntuación de madurez para cada equipo» para orientar la inversión. La responsable del programa desconfía, al recordar cómo una puntuación anterior al estilo de una auditoría llevó a los equipos a preparar carpetas de documentos. Las cifras siguientes son ilustrativas.

La responsable del programa propone en su lugar un perfil en seis dimensiones, evaluado por los equipos en una conversación de una hora con un facilitador ajeno al equipo, con los resultados en manos del equipo. Dice al patrocinador que el programa reportará rangos y temas comunes, y que el perfil de ningún equipo se vinculará con la financiación. El patrocinador está de acuerdo, y la decisión se anota.

Diecinueve de los 20 equipos completan la evaluación con una discusión, así que la participación es del 95 por ciento. El perfil muestra un rango: en preguntas y propósito, la mayoría de los equipos está en el Nivel 2 o 3; en definiciones y propiedad, hay una dispersión de 1 a 4; en datos y herramientas, sobre todo 3; en uso en las decisiones, sobre todo 2; en confianza y seguridad, un reparto entre 2 y 4; y en revisión y evolución, sobre todo 1 o 2. Las comprobaciones de evidencia son reveladoras. Once equipos reclamaron el Nivel 3 en uso en las decisiones, pero cuando se les pidió nombrar una decisión del último trimestre sobre la que hubiera informado una medida, solo seis pudieron. La responsable del programa lo anota sin juzgar, y se convierte en un tema: los equipos tienen paneles y rara vez celebran revisiones que registren decisiones.

Los siguientes pasos son pequeños. Ocho equipos eligen una revisión mensual con un registro de decisiones. Cuatro eligen escribir definiciones para sus medidas. Tres eligen acordar una carta. Seis meses después, 14 de 17 pasos acordados están hechos, uno se abandona con un motivo y dos siguen en curso. Una evaluación repetida muestra que la evidencia de decisiones sube del 38 por ciento al 71 por ciento de las medidas muestreadas, y que la encuesta de confianza pasa del 54 al 67 por ciento de acuerdo. Un equipo retrocede en confianza tras una reorganización, y el facilitador lo registra como información, no como fracaso. Un año después el patrocinador vuelve a pedir una única puntuación para el informe anual. La responsable del programa ofrece un perfil de una página con rangos, tres temas y los pasos de mejora completados. El patrocinador lo acepta, y el informe declara con claridad que la escala es una herramienta de conversación.

## Agilidad, IA, automatización y analítica

### Agilidad

Usa el modelo como una conversación en las revisiones regulares de mejora, con el equipo eligiendo su propio siguiente paso pequeño. La precaución es que una puntuación de madurez exhibida en una pared se convierte en un objetivo.

### IA

Añade la lente de la IA a la evaluación: si los usos de la IA están inventariados, si las medidas asistidas por IA tienen compañeras de calidad y si la gente puede cuestionar los números derivados de la IA. La precaución es que una autoevaluación escrita por una IA puede sonar segura y pasar por alto hechos locales, así que el equipo debe escribir la suya.

### Automatización

Automatiza la recogida de evidencia para la evaluación, como la proporción de métricas con responsables y barreras de protección, pero haz que las personas la interpreten. La precaución es que la evidencia reunida automáticamente puede estar incompleta, así que di lo que excluye.

### Analítica

Muestra el perfil entre dimensiones, no una sola puntuación, con la evidencia detrás de cada valoración. La decisión a la que informa es qué mejorar a continuación. La precaución es que las valoraciones son juicios de las personas evaluadas, así que evita comparar equipos por ellas.

## Perspectiva sectorial

**Startup.** Una evaluación formal es probablemente excesiva. Basta una conversación breve dos veces al año sobre las seis dimensiones, con uno o dos pasos pequeños. Vigila el temor a que las medidas se usen para juzgar, ya que los equipos pequeños lo sienten con intensidad.

**Pequeña empresa.** Usa las dimensiones como una lista de verificación para una charla con el dueño y el personal. Pregunta si las pocas medidas que conservas responden a preguntas reales, si la gente sabe qué significan y si se usan. Elige un paso. No dediques más de una hora.

**Gran empresa.** La escala necesita un proceso ligero y coherente: las mismas dimensiones, autoevaluación con un facilitador, sesiones de calibración y perfiles agregados. Resiste una oficina central de puntuación. Vincula los siguientes pasos con los registros de mejoras y reporta rangos y temas a los patrocinadores. Evita que la escala se convierta en un ejercicio de cumplimiento.

**Gobierno y sector público.** Los órganos de auditoría y de supervisión pueden pedir puntuaciones de madurez. Sé claro sobre la diferencia entre esta herramienta interna de conversación y cualquier marco formal. Deja los resultados de cada equipo en los equipos, da agregados a la supervisión y sé transparente sobre lo que la escala es y lo que no es (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son pequeños: una o dos horas por equipo dos veces al año, un facilitador, algo de análisis y el esfuerzo de llevar a cabo los pasos de mejora. Los costos mayores llegan cuando se hace un mal uso del modelo, con consultores, oficinas de puntuación y carpetas de evidencia.

Los retornos vienen de dirigir mejor el esfuerzo. En lugar de repartir la inversión entre todas las dimensiones, el programa encuentra la dimensión limitante y la aborda. Otros retornos incluyen un reconocimiento más temprano del retroceso, un lenguaje compartido entre equipos y pasos de mejora que los equipos eligieron y poseen. Construye el caso con tus propios datos: los pasos de mejora completados, los cambios en la evidencia de decisiones y en los resultados de la encuesta de confianza y el esfuerzo que llevó la evaluación. Evita citar afirmaciones publicadas sobre los retornos de la mejora de la madurez sin una fuente rastreable y una pertinencia para tu contexto (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La insignia de madurez.** El nivel se convierte en la meta. Úsalo como conversación, con evidencia.
- **Un único número global.** Se pierde el patrón y aparecen los objetivos. Muestra el perfil.
- **Puntuación por auditores.** Los equipos preparan documentos para actuar. Usa la autoevaluación con un facilitador.
- **Vincular la puntuación con la financiación.** Sigue la inflación. Mantén separada la evaluación.
- **Perseguir el nivel máximo.** No todo programa necesita Orquestar. Elige lo que encaje.
- **Evaluar y olvidar.** No siguen pasos. Vincula los pasos con el registro de mejoras.
- **Evaluación demasiado larga.** La carga crece y la calidad cae. Mantenla en una hora.
- **Ignorar el retroceso.** Los programas se deslizan tras un cambio. Vuelve a evaluar con un ritmo y tras eventos.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Preguntas y propósito | Medidas recogidas porque existen datos | Algunos equipos declaran las preguntas que hacen | Audiencias y preguntas escritas; medidas vinculadas a ellas | Cobertura de preguntas revisada; las preguntas sin respuesta impulsan medidas nuevas | Las audiencias, incluidos clientes y proveedores, dan forma a las medidas; las preguntas evolucionan con los servicios |
| Definiciones y propiedad | Las definiciones varían según la persona | Algunas escritas; responsables informales | Catálogo con definición, fuente, responsable y límites de cada medida | Completitud de las definiciones y cuestionamientos gestionados | Definiciones de propiedad compartida entre equipos y proveedores; revisadas cuando dejan de informar decisiones |
| Datos y herramientas | Manual y frágil | Algunos flujos automatizados | Pipelines probados, almacén compartido, datos portables | Fiabilidad, conciliación y preparación para la salida gestionadas | Pipelines federados con contratos compartidos; fuentes mejoradas a partir de la retroalimentación |
| Uso en las decisiones | Números mostrados, rara vez usados | Usados en algunas revisiones | Revisiones regulares que registran decisiones | Evidencia de decisiones con seguimiento y atendida | Decisiones vinculadas entre equipos con los resultados; aprendizaje compartido |
| Confianza y seguridad | Miedo o indiferencia | Garantías verbales | Carta escrita; vistas individuales desactivadas; encuesta de seguridad | Incumplimientos revisados abiertamente; señales de franqueza gestionadas | La confianza es rutina; programa moldeado por el personal y los socios |
| Revisión y evolución | Ninguna | Limpieza ocasional | Revisión periódica con los equipos; regla de retirada | Pasos de la evaluación financiados y completados | El programa mejora continuamente, con cambios que vienen de todos |

## Lista de verificación

- [ ] Las seis dimensiones están acordadas y las descripciones de los niveles adaptadas a nuestro contexto.
- [ ] Cada equipo se evalúa a sí mismo en una discusión de aproximadamente una hora, con un facilitador.
- [ ] Cada nivel reclamado está respaldado por un ejemplo o una comprobación muestreada.
- [ ] Los resultados se muestran como perfiles y rangos, y nunca como una puntuación promediada ni una clasificación.
- [ ] Los resultados de un equipo se quedan en el equipo, y el agregado se comparte con los patrocinadores.
- [ ] La evaluación no está vinculada a la financiación, la posición ni las evaluaciones de desempeño, y esto está escrito.
- [ ] Cada equipo acuerda uno o dos pasos siguientes pequeños, con un responsable y una fecha.
- [ ] Los siguientes pasos tienen seguimiento en el registro de mejoras.
- [ ] La reevaluación ocurre al menos dos veces al año y tras eventos importantes.
- [ ] El propio modelo se revisa cada año con los equipos.

## Prompts de IA

**Prepara una conversación de autoevaluación.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Convierte una dimensión débil en pasos.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Comprueba la evidencia de un nivel reclamado.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Resume los perfiles sin clasificar.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para asignar las medidas del programa a las dimensiones de madurez y a sus barreras de protección emparejadas.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una evaluación de madurez reporta perfiles, deja los resultados en los equipos y evita una única puntuación.

## Ideas clave

- Usa la escala común de cinco niveles como herramienta de conversación, nunca como insignia, clasificación ni certificación.
- Reporta un perfil en seis dimensiones y no una sola puntuación promediada.
- Evalúa con los equipos, pide evidencia y deja los resultados de cada equipo en el equipo.
- Elige siguientes pasos pequeños en la dimensión que limita a las demás, a menudo la confianza y las definiciones.
- Haz seguimiento de los pasos en el registro de mejoras y vuelve a evaluar con regularidad porque los programas retroceden.
- Más alto no siempre es mejor, y los resultados importan más que los niveles.

## Referencias y lecturas complementarias

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
