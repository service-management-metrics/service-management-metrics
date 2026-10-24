# Salud del equipo y experiencia de desarrollo

**Los equipos hacen su mejor trabajo cuando la retroalimentación es rápida, la carga sobre sus mentes es manejable y pueden encontrar largos tramos de concentración, así que mide esas condiciones con el equipo, elimina los obstáculos que revelan y no uses nunca los números para clasificar a las personas.**

## Visión general y motivación

Los principios del Manifiesto Ágil piden construir los proyectos en torno a individuos motivados, darles el entorno y el apoyo que necesitan y confiar en que harán el trabajo. Piden también que los patrocinadores, los desarrolladores y los usuarios puedan mantener un ritmo constante de forma indefinida y que el equipo reflexione con regularidad sobre cómo ser más eficaz. Las medidas de salud del equipo y de experiencia de desarrollo son la forma en que esos principios se vuelven comprobables. Preguntan cómo es hacer el trabajo aquí y qué se interpone en el camino.

La [experiencia de desarrollo](https://en.wikipedia.org/wiki/Developer_experience) (developer experience) es la suma de las interacciones que los desarrolladores tienen con las herramientas, los procesos y las personas con quienes trabajan. La idea es más amplia que la ingeniería de software. Los operadores, el personal del centro de servicios, los analistas y cualquier otra persona que construye u opera un servicio tienen una experiencia de su entorno. Este tema usa «experiencia de desarrollo» para los ingenieros y «salud del equipo» para el grupo más amplio, y las mismas medidas se aplican a ambos.

Dos marcos de investigación se citan mucho. El marco SPACE, publicado por Nicole Forsgren y colegas en 2021, sostiene que la [productividad](https://en.wikipedia.org/wiki/Productivity) del desarrollo no puede reducirse a un solo número y propone cinco dimensiones: satisfacción y bienestar, rendimiento, actividad, comunicación y colaboración, y eficiencia y flujo. Un seguimiento de 2023 de Abi Noda, Margaret-Anne Storey, Nicole Forsgren y Michaela Greiler, titulado «DevEx: What Actually Drives Productivity», se centra en tres dimensiones que los desarrolladores pueden sentir y que las organizaciones pueden cambiar: los ciclos de retroalimentación, la carga cognitiva y el estado de flujo. Ambos artículos recomiendan combinar datos de encuestas sobre percepciones con datos de los sistemas sobre los flujos de trabajo, y ambos advierten contra usar cualquier medida única, en especial un recuento de actividad, como sucedáneo de la productividad.

Las tres dimensiones de DevEx son un punto de partida práctico.

- **Ciclos de retroalimentación.** ¿Con qué rapidez conoce una persona el resultado de lo que hizo? Las compilaciones lentas, las pruebas lentas, las revisiones lentas y las aprobaciones lentas añaden cada una espera, y la espera rompe la concentración. La retroalimentación rápida es además un apoyo central de la entrega continua.
- **[Carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load).** ¿Cuánto tiene que sostener una persona en la mente para lograr algo? Los sistemas complicados, la documentación pobre, la propiedad poco clara y las muchas herramientas elevan la carga. Reducirla libera capacidad para el trabajo que importa.
- **[Estado de flujo](https://en.wikipedia.org/wiki/Flow_(psychology)).** ¿Puede una persona encontrar tramos ininterrumpidos en los que concentrarse? Las reuniones, las notificaciones, las peticiones no planificadas y el cambio de contexto lo erosionan.

Las medidas de esta área son inusualmente fáciles de usar mal. Los recuentos de confirmaciones, solicitudes de incorporación, tickets cerrados u horas conectado son medidas de actividad. Son fáciles de recoger y dicen poco sobre si la gente puede hacer un buen trabajo, e invitan a la manipulación. Las medidas de percepción son subjetivas y valiosas, y pueden distorsionarse si la gente teme las consecuencias de una respuesta honesta. Cualquier medida de las personas puede deslizarse hacia la vigilancia. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con un filo ético: cuando una medida de las personas se convierte en un objetivo, la gente deja de decir la verdad sobre su trabajo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en la experiencia de los usuarios internos descrita antes (véase el tema 6.4, Experiencia de usuarios y empleados) y continúa en los temas siguientes sobre bienestar, colaboración, habilidades y mejora.

## Principios clave

- **Mide las condiciones, no a las personas.** Pregunta por el entorno y sus obstáculos y reporta a nivel de equipo.
- **Combina la percepción con los datos de flujo de trabajo.** Lo que siente la gente y lo que registran los sistemas pasan cada uno por alto parte de la imagen.
- **Deja que el equipo posea su chequeo de salud.** Las personas más cercanas al trabajo eligen las preguntas y leen primero los resultados.
- **No uses nunca estas medidas para clasificar ni evaluar a individuos.** Acabaría con las respuestas honestas.
- **Evita los recuentos de actividad como productividad.** Los recuentos de confirmaciones, tickets u horas no son resultados.
- **Actúa visiblemente sobre lo que oyes.** Corrige el obstáculo o di por qué no.
- **Protege un ritmo sostenible.** Un equipo que funciona al rojo vivo de forma indefinida está pidiendo prestado a su futuro.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo del ciclo de retroalimentación | Tiempo que tarda una persona en obtener el resultado de una acción común, por tipo de ciclo | mediana y percentil 85 de los minutos u horas de compilación, ejecución de pruebas, espera de revisión de código y despliegue, por equipo | minutos u horas | Marcas de tiempo de las herramientas de pipeline y de revisión, agregadas por equipo | Gestión de versiones y despliegues; mejora continua | Retroalimentación rápida en la entrega continua | Semanal |
| Proporción de tiempo de concentración | Proporción del tiempo de trabajo en bloques ininterrumpidos de una longitud mínima acordada, según lo reporta el equipo | horas en bloques de concentración reportadas por el equipo / horas de trabajo, recogidas en un breve pulso | porcentaje | Pulso del equipo; datos del calendario solo si el equipo lo acepta y se agregan | Mejora continua; gestión del conocimiento | Tiempo protegido para el trabajo profundo | Mensual |
| Valoración de la carga cognitiva | Valoración del equipo de lo difícil que es entender y cambiar un sistema o proceso con nombre | valoración media y dispersión en una breve escala acordada, por sistema | puntos de escala | Breve pulso vinculado a un sistema o proceso | Diseño de servicios; gestión del conocimiento | Comprensión compartida del trabajo | Trimestral |
| Tiempo de resolución de obstáculos | Tiempo desde que el equipo plantea un obstáculo hasta que se elimina o se registra la decisión de no eliminarlo | mediana y percentil 85 de los días desde que se plantea hasta que se resuelve o se decide | días | Lista de impedimentos o gestor | Mejora continua; gestión de problemas | Impedimentos eliminados | Mensual |
| Tendencia del chequeo de salud del equipo | Valoración del propio equipo en las dimensiones que eligió, seguida a lo largo del tiempo | cambio en las valoraciones de las dimensiones elegidas por el equipo entre chequeos | puntos de escala | Chequeo de salud del equipo, poseído por el equipo | Mejora continua | Reflexión del equipo sobre cómo ser más eficaz | Mensual o trimestral |
| Satisfacción con herramientas y procesos | Valoración del equipo de su satisfacción con las herramientas y procesos que usa a diario | valoración media o proporción favorable de cada herramienta o proceso con nombre | puntos de escala o porcentaje | Breve pulso | Gestión de niveles de servicio; mejora continua | Ajuste del entorno al trabajo | Trimestral |
| Cobertura de dimensiones | Número de dimensiones de SPACE cubiertas por las medidas que un equipo usa realmente | recuento de las cinco dimensiones con al menos una medida en uso | recuento (0 a 5) | Registro de métricas | Medición y elaboración de informes; gobernanza | Medidas equilibradas | Anual |

Agrega todo a nivel de equipo y fija un tamaño mínimo de grupo, por ejemplo ningún resultado para un grupo de menos de cinco personas. El tiempo de concentración es la descripción del propio equipo, y cualquier cifra derivada del calendario es opcional, agregada y acordada por el equipo. Los tiempos de los ciclos de retroalimentación proceden de los sistemas y describen el pipeline, no a las personas. La cobertura de dimensiones es una comprobación del programa de medición, pensada para evitar la dependencia de un solo tipo de medida.

## Recomendaciones

### Parte de las condiciones en que trabaja la gente

**1. Pregunta al equipo qué lo frena.** Empieza por una conversación, no por una encuesta: ¿qué les hace perder el tiempo?, ¿qué es difícil de entender?, ¿qué los interrumpe más? Anota las respuestas con las palabras del equipo. La conversación encuentra problemas que ningún panel encontraría, y construye la confianza que necesitan las encuestas posteriores. Acuerden cuáles dos o tres medir.

**2. Usa las tres dimensiones de DevEx como lente.** Para cada una de las dimensiones, ciclos de retroalimentación, carga cognitiva y estado de flujo, elige una pregunta de percepción y, donde sea posible, una medida del sistema. Para los ciclos de retroalimentación, empareja «¿cuán satisfecho estás con lo que tardan las compilaciones?» con la duración de la compilación. Para la carga cognitiva, pregunta lo difícil que es entender y cambiar un sistema con nombre. Para el flujo, pregunta con qué frecuencia puede trabajar la gente sin interrupciones. Empareja lo que dice la gente con lo que registran los sistemas y mira los desacuerdos.

**3. Cubre varias dimensiones de SPACE.** Elige medidas de al menos tres de las cinco dimensiones para que ningún tipo de dato domine. La satisfacción y el bienestar, la colaboración y la eficiencia y el flujo suelen importar más a un equipo que opera servicios. Trata con gran cuidado las medidas de actividad y úsalas solo como contexto. La medida de cobertura de dimensiones lo mantiene honesto.

### Mide con cuidado

**4. Deja que el equipo posea y lea primero su chequeo de salud.** Un chequeo de salud del equipo es una breve autoevaluación sobre dimensiones que elige el equipo, como diversión, apoyo, rapidez, aprendizaje y facilidad de publicación. El equipo lee y comenta sus propios resultados antes de que nadie más vea un resumen. Los demás ven tendencias y los obstáculos para los que el equipo pide ayuda, no puntuaciones que comparar. Esto mantiene la herramienta como ayuda para el aprendizaje, y depende de la [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety), la creencia compartida de que no se castigará a nadie por hablar.

**5. Cronometra los ciclos de retroalimentación que importan.** Mide la duración de los ciclos de los que se queja la gente: compilación local, batería de pruebas, espera de revisión de código, despliegue en un entorno de pruebas. Reporta la mediana y el percentil 85, ya que una cola lenta duele más de lo que sugiere el promedio. Comparte los números con el equipo propietario del pipeline y fija la mejora como un trabajo regular (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

**6. Protege la concentración y mídela con delicadeza.** Pregunta por la concentración en el pulso y mira qué causa las interrupciones: carga de reuniones, notificaciones, peticiones no planificadas. Si un equipo desea mirar los patrones del calendario, hazlo con su acuerdo y agrega los resultados. No hagas nunca seguimiento de la actividad ni de la presencia de individuos. El fin es encontrar interrupciones estructurales que eliminar, como una reunión que podría ser un documento.

**7. Haz seguimiento de los obstáculos hasta su resolución.** Mantén una lista visible de los obstáculos que ha planteado el equipo y mide cuánto tardan en resolverse o en dejarse de lado conscientemente. Una lista larga que nunca se acorta enseña a la gente que plantear problemas es inútil. La decisión de no eliminar un obstáculo, con un motivo, cuenta como resolución.

### Usa los resultados para mejorar

**8. Actúa sobre una o dos cosas a la vez.** Elige el obstáculo de mayor valor, corrígelo y díselo al equipo. La acción visible hace más por la confianza que un largo informe. Resiste la tentación de lanzar muchas iniciativas a la vez.

**9. Empareja las medidas de personas con medidas de resultados.** Mira cómo se relacionan los ciclos de retroalimentación y la carga cognitiva con los resultados de entrega y estabilidad (véase el tema 2.8, Métricas DORA). No afirmes causalidad a partir de la correlación en tus propios datos. Usa el emparejamiento para encontrar preguntas que explorar, como si los equipos con revisiones más lentas tienen además tiempos de ciclo más largos.

**10. Deja los recuentos de actividad fuera de la conversación.** No reportes confirmaciones, líneas de código ni tickets cerrados por persona. Los recuentos de producción del equipo pueden ser útiles para el flujo, pero dicen poco sobre la salud. Si alguien pide métricas de actividad individuales, explica la investigación y ofrece en su lugar medidas de condiciones.

### Protege a las personas

**11. Fija reglas de privacidad antes de recoger.** Anota qué se recoge, por qué, quién lo ve, cuánto tiempo se conserva y qué no se hará nunca con ello. Agrega a nivel de equipo, suprime los grupos pequeños y deja que representantes de las personas implicadas revisen las reglas. No uses ninguno de estos datos en evaluaciones del rendimiento, ascensos ni sanciones.

**12. Haz del ritmo sostenible la opción por defecto.** Vigila las señales de que un equipo funciona al rojo vivo: una larga racha de incidentes fuera de horario, un estado permanente de urgencia, listas de obstáculos crecientes, satisfacción en caída. Trátalas como problemas del sistema que corregir con alcance, dotación o prioridades. Un ritmo constante que la gente puede mantener es un objetivo de diseño, y respalda la calidad, el aprendizaje y la retención (véase el tema 9.2, Métricas de satisfacción y bienestar).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo del ciclo de retroalimentación | Excluir los casos lentos; medir un camino rápido que la mayor parte del trabajo no sigue | Reportar el percentil 85; definir el inicio y el fin de cada ciclo en el registro |
| Proporción de tiempo de concentración | Bloquear tiempo del calendario sin concentrarse; reportar una concentración inflada para complacer a los responsables | Pulso poseído por el equipo; comparar con las causas de interrupción; sin reporte individual |
| Valoración de la carga cognitiva | Valorar a la baja los sistemas para evitar el escrutinio; elegir sistemas fáciles de valorar | Valorar una lista fija de sistemas; comparar con el tiempo de incorporación y los patrones de incidentes |
| Tiempo de resolución de obstáculos | Cerrar obstáculos sin corregirlos; negarse a registrar obstáculos | El equipo confirma la resolución; tasa de obstáculos reabiertos |
| Tendencia del chequeo de salud del equipo | Responsables que presionan para obtener buenas puntuaciones; equipos que ajustan las puntuaciones para evitar la atención | El equipo posee los resultados; tendencias compartidas solo con el consentimiento del equipo |
| Satisfacción con herramientas y procesos | Encuestar a usuarios contentos; adiestrar al personal para que responda bien | Tasa de respuesta y composición; leer los comentarios; vincular con medidas del sistema |
| Cobertura de dimensiones | Contar una dimensión con una medida simbólica | Comprobar que cada medida contada se usa en una decisión |

Una lectura sana son ciclos de retroalimentación más cortos y estables, una carga cognitiva decreciente en los sistemas clave, equipos que reportan una concentración real, obstáculos que se plantean y se resuelven, chequeos de salud en los que el equipo confía y ningún uso de los datos sobre individuos.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de percepción | Captan lo que los sistemas no pueden; bajo costo | Subjetivas; vulnerables al miedo y a la fatiga |
| Medidas de flujo de trabajo | Objetivas; continuas | Pasan por alto sentimientos y causas; riesgo de vigilancia |
| Chequeo de salud poseído por el equipo | Honesto y útil para el equipo | Difícil de comparar; difícil de escalar |
| Encuesta estándar de toda la empresa | Comparable entre equipos | Menos relevante; se usa para clasificar |
| Recuentos de actividad | Fáciles de recoger | Malos sucedáneos; fáciles de manipular |
| Medidas centradas en las condiciones | Apuntan a causas corregibles | Necesitan esfuerzo de seguimiento |
| Pulsos frecuentes | Puntuales | Fatiga de encuestas |
| Encuesta anual | Poca carga | Lenta; obsoleta |

La respuesta en prosa es combinar chequeos de salud poseídos por el equipo y pulsos breves con medidas de flujo de trabajo de los ciclos de los que se queja la gente, evitar los recuentos de actividad y proteger la privacidad. Usa con moderación las comparaciones de toda la empresa, y nunca para clasificar equipos.

## Preguntas para debatir con tu equipo

**1. ¿Cuál es el ciclo de retroalimentación más lento de nuestra jornada y cuánto tarda realmente?**
Elige el ciclo del que más se queja la gente. Cronométralo con los sistemas y compáralo con lo que dice la gente. El facilitador debe anotar las sorpresas, en cualquier dirección. Acuerden un cambio que lo acortaría y quién lo posee.

**2. ¿Qué sistema nos da miedo cambiar y qué lo hace difícil?**
Nombren el sistema. ¿La dificultad está en el código, en la documentación, en las herramientas o en el conocimiento que tienen unas pocas cabezas? Pregunten qué mejora lograría bajar más la carga. Planifiquen cómo saber si funcionó.

**3. ¿Cuándo tuvo cada uno de nosotros por última vez un bloque largo de tiempo ininterrumpido y qué interrumpió los que fallaron?**
Comparte con honestidad y sin culpas. Enumeren las interrupciones y ordénenlas en estructurales (reuniones, notificaciones, peticiones no planificadas) e incidentales. Elijan una interrupción estructural que reducir.

**4. ¿Qué obstáculo hemos planteado más de una vez sin resultado?**
Miren la lista de obstáculos. Para cada elemento antiguo, pregunten quién podría resolverlo y qué lo bloquea. Si el equipo ha dejado de plantear obstáculos, hablen de por qué. Acuerden uno que escalar con evidencia.

**5. ¿Qué nos haría dudar a la hora de dar una respuesta honesta en el chequeo de salud?**
Hablen de los temores sobre cómo podrían usarse los resultados. El facilitador debe registrar las preocupaciones y acordar reglas: quién ve los datos, qué no se hará nunca con ellos. Si no se confía en las reglas, díganlo y decidan qué ganaría la confianza.

**6. ¿Cuáles de nuestras medidas podrían subir mientras el trabajo empeora?**
Enumeren las medidas y piensen en formas en que cada una podría mejorarse sin ayudar a nadie. Asignen una barrera de protección a cada una. Retiren cualquier medida que no tenga uso en una decisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega saben mejor que nadie qué los frena y son los propietarios de su propio chequeo de salud. Deben nombrar los obstáculos, cronometrar los ciclos que controlan y decidir con el equipo qué corregir primero. Deben resistir la presión de reportar la actividad individual e insistir en medidas a nivel de equipo.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con la guardia, las interrupciones y el trabajo no planificado que erosionan la concentración y el ritmo. Deben plantear la carga estructural como un problema del sistema, medir los ciclos de sus propias herramientas y mantener una rotación sostenible. Se benefician de listas de obstáculos compartidas con los equipos de entrega, ya que muchos obstáculos cruzan la frontera.

### Liderazgo y gobernanza

Los líderes fijan las condiciones y deciden cómo se usan los datos. Deben financiar las correcciones que revelan las medidas de condiciones, proteger las reglas de privacidad y pedir tendencias y obstáculos en lugar de puntuaciones que comparar. La gobernanza debe tratar una petición de métricas de actividad individual como un motivo para revisar las reglas y debe esperar que el trabajo de mejora sea visible.

### Clientes y usuarios

Los usuarios se benefician de equipos que pueden trabajar con calma y aprender deprisa, porque sus problemas se resuelven bien. Notan además cuándo un equipo está desbordado: respuestas más lentas, errores repetidos, alta rotación. Su opinión es evidencia sobre la salud del equipo desde fuera, y merecen honestidad sobre cómo se priorizan las correcciones.

## En la práctica: un ejemplo de gestión de servicios

El grupo de tecnología de una aseguradora nacional tiene 14 equipos que construyen y operan servicios de pólizas y de siniestros. La dirección pide un panel de productividad de desarrollo. La primera petición es de confirmaciones y tickets cerrados por persona. La jefa de eficacia de la ingeniería propone un enfoque distinto. Los números siguientes son ilustrativos.

Empieza con conversaciones en cinco equipos. Tres obstáculos surgen repetidamente: la batería de pruebas tarda 70 minutos, las revisiones de código esperan mucho tiempo en los equipos que dependen de dos revisores senior y nadie se siente capaz de cambiar el servicio heredado de cálculo de siniestros. Mide lo que puede a partir de los sistemas. El ciclo mediano de compilación y pruebas es de 58 minutos con un percentil 85 de 92. La espera mediana hasta la primera revisión es de 9 horas laborables y el percentil 85 es de 31 horas. Añade un breve pulso trimestral con las tres preguntas de DevEx, con un grupo mínimo de reporte de cinco. La valoración de carga cognitiva del servicio de cálculo de siniestros es de 4,4 en una escala de cinco puntos donde 5 es muy difícil, frente a 2,6 del portal de pólizas. El tiempo de concentración reportado por los equipos es de unas 3 horas al día, con las reuniones y las peticiones no planificadas como causas principales. Cada equipo lleva su propio chequeo de salud en las dimensiones que eligió y solo lee la tendencia combinada.

El grupo acuerda cuatro acciones con los equipos. La batería de pruebas se divide y se paraleliza, y el percentil 85 baja de 92 a 41 minutos en dos meses. Una rotación de revisores reparte la carga más allá de los dos revisores senior, y la espera del percentil 85 baja a 14 horas. Tres equipos acuerdan un bloque semanal sin reuniones y un equipo rehace cómo le llegan las peticiones no planificadas. El servicio de cálculo de siniestros pasa a ser un proyecto de aprendizaje compartido, con trabajo en parejas y documentación, y su valoración de carga cognitiva baja a 3,5 a lo largo de dos trimestres. El tiempo de concentración reportado sube a unas 4 horas.

Cuando un directivo senior vuelve a pedir recuentos individuales de confirmaciones, la jefa de eficacia de la ingeniería explica la investigación de SPACE y DevEx y ofrece el panel de condiciones. La decisión se anota, con las reglas de privacidad que dicen que la actividad individual no se usará nunca en evaluaciones. Un equipo pide que sus resultados del chequeo de salud no se resuman para la dirección este trimestre, y se concede la petición. La rotación de personal en los equipos implicados baja a lo largo del año siguiente, y ella anota que no puede probar la relación y que no la afirmará.

## Agilidad, IA, automatización y analítica

### Agilidad

Mide con el equipo condiciones como los ciclos de retroalimentación y el tiempo de concentración, y elimina los obstáculos que revelan. La precaución es que usar los números para clasificar a las personas destruye los datos.

### IA

Los asistentes de IA para programar y escribir cambian los ciclos de retroalimentación y la carga cognitiva, para bien o para mal. Pregunta al equipo por el beneficio y la carga, y empareja el uso con el retrabajo y el bienestar. La precaución es que las estadísticas de uso reportadas por persona se convierten en vigilancia.

### Automatización

Automatiza la recogida de los tiempos de compilación, pruebas y revisión, y mide la cadena de herramientas por su lentitud y sus fallos. La precaución es que unas herramientas rápidas pueden esconder una organización lenta, así que combina los datos con la conversación del equipo.

### Analítica

Muestra tendencias por equipo con el número de respuestas y fija un tamaño mínimo de grupo. La decisión a la que informa es qué obstáculo eliminar a continuación. La precaución es que los equipos pequeños no pueden ser anónimos.

## Perspectiva sectorial

**Startup.** Todos conocen a todos, así que las conversaciones valen más que las encuestas. Cronometra los principales ciclos de retroalimentación, mantén rápidas las compilaciones y vigila las señales de un ritmo insostenible, porque unas pocas personas cargan con mucho. No importes un gran programa de encuestas.

**Pequeña empresa.** Un equipo pequeño puede ser de una o dos personas que construyen y dan soporte a la vez. Su principal riesgo es la interrupción y la dependencia de los individuos. Mantén una lista sencilla de obstáculos, asegura la cobertura de las ausencias y pregúntense con regularidad qué se interpone en el camino. Los datos a nivel individual son por naturaleza identificables, así que apóyate en la conversación.

**Gran empresa.** La escala da variedad y tentaciones de comparación. Ofrece una caja de herramientas común (preguntas de pulso, cronometraje de ciclos) mientras dejas que los equipos posean sus chequeos de salud. Agrega con cuidado, comparte los patrones entre equipos para extender las correcciones y deja fuera las clasificaciones. Implica a los comités de empresa o a los representantes de los empleados donde existan.

**Gobierno y sector público.** La contratación, las normas de seguridad y las cadenas de aprobación alargan los ciclos de retroalimentación, y el personal puede tener fuertes protecciones frente a la monitorización. Mide los ciclos, implica a los representantes en la fijación de las reglas de datos y usa los hallazgos para simplificar procesos. Los empleados públicos motivados por el valor del servicio se benefician de la eliminación visible de obstáculos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo de los equipos para los chequeos de salud y los pulsos, algo de instrumentación de los pipelines y las herramientas de revisión, un analista o coach para ayudar a interpretar los resultados y facilitar, y el tiempo de ingeniería para eliminar obstáculos. La mayoría de estos costos son pequeños comparados con el costo de los ciclos lentos multiplicado por muchas personas.

El retorno procede del tiempo recuperado, menos retrabajo, mejor retención y aprendizaje más rápido. Estímalo con tus propios datos: las horas por semana perdidas esperando compilaciones y revisiones en todo el grupo, el costo de contratar e incorporar para sustituir a quienes se van y los patrones de incidentes o defectos vinculados con equipos sobrecargados. Sé cauto al convertir minutos en dinero y declara los supuestos. Evita las afirmaciones de estudios publicados sobre ganancias de productividad salvo que puedas rastrear su método y su encaje. Recuerda el costo de hacerlo mal: un programa visto como vigilancia daña la confianza y la calidad de toda encuesta posterior (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Paneles individuales de productividad.** Miden actividad, invitan a la manipulación y dañan la confianza. Mide las condiciones a nivel de equipo.
- **Usar las puntuaciones del chequeo de salud para comparar equipos.** Los equipos gestionan entonces la puntuación. Deja que los equipos posean sus resultados.
- **Encuestas sin acción.** La gente deja de responder. Corrige algo visible en cada ciclo.
- **Medir el tiempo conectado o la presencia.** Premia la visibilidad y castiga la concentración. Mide ciclos y obstáculos.
- **Una medida para todo.** Pasa por alto la mayor parte de la imagen. Cubre varias dimensiones.
- **Ignorar la cola.** Las medianas esconden los ciclos lentos que duelen. Reporta percentiles.
- **Culpar a las personas de los problemas del sistema.** Los obstáculos suelen ser estructurales. Corrige la estructura.
- **Funcionar al rojo vivo como algo normal.** La urgencia permanente quema a las personas. Trata la sobrecarga sostenida como un fallo de planificación.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Comprensión de las condiciones | Anécdota | Encuesta ocasional | Conversaciones y pulsos regulares sobre ciclos de retroalimentación, carga y flujo | Datos de percepción y de flujo de trabajo combinados, con tendencias a nivel de equipo | Visión compartida de las condiciones entre equipos y proveedores; los equipos codiseñan las medidas |
| Propiedad y ética | La dirección lo lee todo | Cuidado informal | Chequeos de salud poseídos por el equipo; reglas de privacidad escritas | Reglas revisadas con representantes; se impone la ausencia de uso individual | Reglas y prácticas auditadas de forma independiente; los equipos controlan el intercambio de datos |
| Acción | Quejas sin atender | Correcciones ad hoc | Lista de obstáculos con responsables; una o dos correcciones por ciclo | Correcciones con seguimiento y vinculadas a los resultados; ritmo sostenible vigilado | Eliminación de obstáculos integrada en la planificación; aprendizaje ampliamente compartido |

## Lista de verificación

- [ ] Los equipos han dicho con sus propias palabras qué los frena.
- [ ] Al menos una pregunta de percepción y una medida del sistema cubren cada uno de los ciclos de retroalimentación, la carga cognitiva y el flujo.
- [ ] Las medidas proceden de al menos tres dimensiones de SPACE.
- [ ] Cada equipo posee su chequeo de salud y lee primero los resultados.
- [ ] Los tiempos de los ciclos de retroalimentación se reportan como mediana y percentil 85.
- [ ] Una lista visible de obstáculos tiene responsables, y se hace seguimiento del tiempo de resolución.
- [ ] Los resultados se reportan a nivel de equipo con un tamaño mínimo de grupo.
- [ ] Reglas de privacidad escritas declaran que los datos individuales no se usarán en evaluaciones.
- [ ] Los recuentos de actividad no se reportan como productividad.
- [ ] El equipo ve al menos una corrección por ciclo.

## Prompts de IA

**Redacta preguntas de pulso para las tres dimensiones de DevEx.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Analiza los patrones de la lista de obstáculos.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Escribe las reglas de privacidad de un programa de salud del equipo.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Compara las condiciones con los resultados.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de salud del equipo o de experiencia de desarrollo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica relacionada con las personas lleva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Ideas clave

- Mide las condiciones en que trabaja la gente: ciclos de retroalimentación, carga cognitiva y flujo.
- Combina lo que dice la gente con lo que registran los sistemas y mira los desacuerdos.
- Deja que los equipos posean sus chequeos de salud, reporta a nivel de equipo y no uses nunca los datos sobre individuos.
- Evita los recuentos de actividad como sustituto de la productividad.
- Actúa visiblemente sobre uno o dos obstáculos a la vez y haz seguimiento de cuánto tardan en resolverse.
- Protege un ritmo que el equipo pueda sostener de forma indefinida.

## Referencias y lecturas complementarias

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
