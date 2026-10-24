# Métricas de satisfacción y bienestar

**Las personas que se sienten seguras, con confianza y capaces de mantener su ritmo hacen mejor trabajo durante más tiempo, así que pregunta por el bienestar con cuidado, mantén las respuestas anónimas y agregadas y trata lo que aprendas como una llamada a cambiar el trabajo, nunca como un juicio sobre la persona.**

## Visión general y motivación

Los principios del Manifiesto Ágil dicen que los procesos ágiles promueven el desarrollo sostenible: los patrocinadores, los desarrolladores y los usuarios deben poder mantener un ritmo constante de forma indefinida. Dicen además que se construyan los proyectos en torno a individuos motivados y que se confíe en que harán el trabajo. Una organización de servicios que depende de las personas para mantener en marcha sistemas complejos durante noches, fines de semana y crisis necesita preguntarse si su forma de trabajar puede sostenerse de verdad. Las medidas de satisfacción y de bienestar son la forma de preguntarlo.

Estas medidas son más delicadas que ninguna otra de este libro. Tocan cómo se sienten las personas sobre su trabajo, sus colegas y su salud. Mal hechas, invaden la privacidad, crean miedo y producen respuestas falsas. Bien hechas, dan a los equipos y a los líderes un aviso temprano de problemas que de otro modo afloran como dimisiones, errores e incidentes. Este tema trata por tanto tanto de ética y de método como de métricas, y sigue al tema anterior sobre las condiciones del equipo (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

Tres ideas lo enmarcan.

- **La satisfacción no es bienestar, y tampoco lo es la implicación.** La [satisfacción laboral](https://en.wikipedia.org/wiki/Job_satisfaction) es lo que siente una persona por su trabajo, la [implicación del empleado](https://en.wikipedia.org/wiki/Employee_engagement) es una participación enérgica en el trabajo y el bienestar es un estado más amplio de salud y plenitud. Una persona puede estar satisfecha con un trabajo que la desgasta. Medir una cosa no te dice nada de las otras.
- **La motivación procede de condiciones que se pueden construir.** La [teoría de la autodeterminación](https://en.wikipedia.org/wiki/Self-determination_theory), desarrollada por Edward Deci y Richard Ryan, propone que la [motivación intrínseca](https://en.wikipedia.org/wiki/Intrinsic_motivation) de las personas se apoya cuando se satisfacen tres necesidades: autonomía, una sensación de control sobre el propio trabajo; competencia, una sensación de eficacia y de crecimiento; y vinculación, una sensación de conexión con los demás. Coinciden con la llamada ágil a individuos motivados a quienes se da el entorno y la confianza que necesitan.
- **La seguridad para hablar es una condición previa.** La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety), un concepto desarrollado por Amy Edmondson, es la creencia compartida de que un equipo es seguro para asumir riesgos interpersonales. Sin ella, la gente esconde errores, preocupaciones y agotamiento, y toda encuesta mide lo que la gente se atreve a decir, no lo que siente.

Las medidas de bienestar tienen peligros particulares. Quienes responden pueden dar las respuestas que creen esperadas, un patrón conocido como [sesgo de deseabilidad social](https://en.wikipedia.org/wiki/Social_desirability_bias). El agotamiento es un asunto serio, y la clasificación de la Organización Mundial de la Salud describe el síndrome de desgaste profesional (burn-out) como un fenómeno ocupacional resultante del estrés crónico en el lugar de trabajo que no se ha gestionado con éxito. No es un diagnóstico médico hecho por una encuesta. Los investigadores describen el desgaste mediante agotamiento, cinismo y eficacia reducida ([síndrome de desgaste profesional](https://en.wikipedia.org/wiki/Occupational_burnout) es el término general), y los empleadores deben ofrecer apoyo y corregir las condiciones, no diagnosticar a individuos. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) tiene aquí un rostro humano: cuando una puntuación de bienestar se convierte en un objetivo para un responsable, la gente aprende a decir que está bien (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Una última precaución: este tema describe la práctica de medición y no da asesoramiento médico, psicológico ni jurídico. Implica a profesionales cualificados, como salud laboral, recursos humanos y representantes de los empleados, y sigue la legislación de privacidad y de empleo que se aplique donde trabaja tu gente.

## Principios clave

- **La participación es voluntaria y las respuestas son anónimas.** Nadie debe sentirse obligado a revelar cómo se siente.
- **Reporta solo en grupos.** Usa un tamaño mínimo de grupo y suprime todo lo que pueda identificar a una persona.
- **No uses nunca estas medidas para evaluar a individuos.** Describen el trabajo y el equipo.
- **No diagnostiques nunca.** Las encuestas pueden mostrar condiciones, y el juicio clínico pertenece a profesionales cualificados.
- **Corrige las condiciones.** La respuesta a un mal resultado es cambiar la carga de trabajo, el proceso o las prioridades.
- **Apunta a un ritmo que el equipo pueda sostener.** Las ráfagas cortas están bien, y la urgencia permanente no.
- **Actúa donde la gente pueda verlo.** El cambio visible genera la confianza que necesitan las respuestas honestas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Valoración del ritmo sostenible | Valoración del equipo de si el ritmo actual podría mantenerse de forma indefinida | valoración media y dispersión en una escala acordada de la afirmación «podríamos seguir trabajando a este ritmo indefinidamente» | puntos de escala | Pulso anónimo del equipo | Mejora continua; gestión de la plantilla y del talento | Ritmo constante de forma indefinida | Mensual |
| Valoración de la seguridad psicológica | Valoración del equipo de lo seguro que es plantear problemas y asumir riesgos interpersonales | valoración media en un breve conjunto validado de afirmaciones, por equipo | puntos de escala | Pulso anónimo del equipo | Mejora continua; gestión de la plantilla y del talento | Confianza y reflexión abierta | Trimestral |
| Valoración del apoyo a las necesidades | Valoración del equipo de la autonomía, la competencia y la vinculación en el trabajo | valoración media de cada una de tres afirmaciones, por equipo | puntos de escala | Pulso anónimo del equipo | Gestión de la plantilla y del talento; mejora continua | Individuos motivados con el entorno que necesitan | Trimestral |
| Valoración de la tensión de la carga de trabajo | Valoración del equipo de lo exigente que es la carga de trabajo respecto a la capacidad | valoración media y proporción que califica la carga de trabajo de insostenible | puntos de escala; porcentaje | Pulso anónimo del equipo | Gestión de la capacidad y el rendimiento; gestión de la plantilla y del talento | Desarrollo sostenible | Mensual |
| Semanas sostenidas de horario ampliado | Proporción de semanas en que la rotación o el equipo trabajó muy por encima de su horario normal, contadas a nivel de rotación o de equipo | semanas del periodo con horario ampliado a nivel de equipo / semanas del periodo | porcentaje | Registros de rotaciones y de guardias agregados por equipo; reportado por el equipo, voluntario | Gestión de incidentes; gestión de la capacidad y el rendimiento | Las horas extra como señal de sobrecarga | Mensual |
| Abandono voluntario y temas de salida | Proporción de miembros del equipo que se van voluntariamente en un periodo, con temas de las conversaciones de salida | salidas voluntarias / plantilla media; recuentos de temas de quienes se van y lo consienten | porcentaje; recuentos | Registros de recursos humanos, conversaciones de salida | Gestión de la plantilla y del talento | Retención de personas con experiencia | Trimestral |
| Tiempo para actuar sobre la retroalimentación de bienestar | Tiempo desde que un equipo plantea una preocupación de bienestar hasta una respuesta registrada | mediana y percentil 85 de los días desde la preocupación hasta la decisión o acción registrada | días | Registro de retroalimentación del equipo | Mejora continua | Respuesta pronta a la reflexión del equipo | Trimestral |

Define en el registro el tamaño mínimo del grupo de reporte, por ejemplo ningún resultado para un grupo de menos de siete personas, y aplícalo a cada tabla, gráfico y comentario. Las valoraciones proceden de pulsos breves y anónimos, con participación voluntaria. Las semanas de horario ampliado se calculan a partir de los registros de rotación y de guardia del equipo en su conjunto, y nunca se recogen con este fin datos de horas a nivel individual. El abandono se reporta solo donde el grupo es lo bastante grande, y los temas de salida solo de personas que lo consienten. Ninguna de estas métricas forma parte de la evaluación de ningún individuo.

## Recomendaciones

### Fija primero las reglas básicas

**1. Escribe las reglas antes de preguntar.** Declara el propósito, qué se recoge, quién ve qué, el tamaño mínimo del grupo, cuánto tiempo se conservan los datos y qué no se hará nunca con ellos, incluido que ninguna respuesta individual se usará en evaluaciones, ascensos ni sanciones. Comparte el borrador con los representantes de los empleados, donde existan, y con tus especialistas de privacidad y de recursos humanos. Publica las reglas finales donde todos puedan leerlas.

**2. Haz voluntaria la participación y anónimas las respuestas.** No persigas a los individuos que no han respondido. No exijas campos de identificación. Usa un método de encuesta que no pueda rastrearse hasta una persona y pon a prueba esa afirmación con honestidad: en un equipo pequeño, las preguntas demográficas pueden identificar a la gente. Di a las personas qué haces para protegerlas y cúmplelo.

**3. Implica a la salud laboral y al apoyo a los empleados.** Las encuestas no sustituyen al apoyo. Asegura que existe un programa de asistencia al empleado o equivalente, que la gente sabe cómo acceder a él y que los responsables saben responder con amabilidad si alguien revela un problema. Un programa de bienestar que identifica el malestar y no ofrece nada es peor que ninguno.

### Pregunta bien

**4. Usa pocas preguntas claras y validadas.** Un breve conjunto de afirmaciones, valoradas en una escala coherente, sirve mejor que un formulario largo. Usa redacciones establecidas de la literatura de investigación para la seguridad psicológica y para las tres necesidades de la teoría de la autodeterminación, y mantén estable tu propia redacción para que las tendencias signifiquen algo. Añade un comentario abierto y lee los comentarios enteros.

**5. Pregunta más por las condiciones que por los sentimientos.** «Puedo mantener este ritmo durante un año» y «tengo lo que necesito para hacer mi mejor trabajo» apuntan al trabajo. «¿Cuán estresado estás?» apunta a la persona. Ambas tienen su lugar, y las preguntas sobre condiciones son más fáciles de responder con honestidad y más fáciles de actuar.

**6. Mantén ligera la cadencia.** Un pulso mensual de tres preguntas sobre ritmo y carga de trabajo y un pulso trimestral sobre seguridad y necesidades bastan para la mayoría de los equipos. La fatiga de encuestas es real, y una larga encuesta anual es lenta de actuar. Varía las preguntas con moderación para que la gente no responda en piloto automático y mantén estable el núcleo.

**7. Lee los resultados primero con el equipo.** Comparte los resultados del propio equipo con el equipo antes que con nadie más y déjale interpretarlos. Los líderes ven tendencias entre equipos y los obstáculos para los que los equipos piden ayuda, no una clasificación. Este enfoque es más exacto, ya que los equipos conocen el contexto, y más respetuoso.

### Mira el trabajo además de los sentimientos

**8. Empareja la percepción con hechos de carga de trabajo a nivel de equipo.** Compara las valoraciones de ritmo y de tensión con la carga de rotación y de guardia, la proporción de trabajo no planificado y el atraso de obstáculos (véase el tema 5.7, Métricas de trabajo repetitivo y guardias, y el tema 2.9, Trabajo operativo y trabajo no planificado). Cuando las valoraciones bajan mientras sube el trabajo no planificado, has encontrado una causa que puedes corregir. Agrega los datos de horas al equipo o a la rotación y no hagas nunca seguimiento de individuos.

**9. Trata la sobrecarga sostenida como un problema del sistema.** Una racha de semanas de horario ampliado significa que el plan, la dotación o las prioridades no coinciden con la realidad. Responde reduciendo el alcance, añadiendo personas, retirando trabajo o corrigiendo las causas de los incidentes, no pidiendo a los individuos que sean más resilientes. Las ráfagas cortas y elegidas son distintas de la urgencia abierta, y el equipo puede decir cuál es.

**10. Vigila los patrones del abandono, con cuidado.** El abandono voluntario es una señal rezagada. Míralo por equipo y durante un periodo largo y combínalo con temas de las conversaciones de salida que los que se van aceptan. Los números pequeños oscilan mucho y pueden identificar a las personas, así que suprime los grupos pequeños y evita leer salidas aisladas como prueba.

### Actúa y aprende

**11. Responde dentro de un plazo declarado y di a la gente qué ocurrió.** Comprométete a responder a las preocupaciones de bienestar en un plazo breve y reporta las acciones y sus resultados. El tiempo para actuar mide esto. Una respuesta visible, aunque sea «no podemos cambiar esto ahora, y aquí está por qué», mantiene viva la confianza.

**12. Aprende de lo que no funciona.** Si las puntuaciones no mejoran tras una intervención, pregunta por qué. Escucha al equipo antes de volver a intentarlo. Evita los añadidos de bienestar, como una aplicación de meditación o un acto social, como sustituto de cambiar una carga de trabajo demasiado alta. El bienestar es en gran medida una propiedad de cómo se organiza el trabajo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Valoración del ritmo sostenible | Responsables que presionan para obtener buenas puntuaciones; equipos que reportan lo que se espera | Reglas de anonimato y de tamaño de grupo; comparar con hechos de carga de trabajo; leer los comentarios |
| Valoración de la seguridad psicológica | Encuestar solo a los equipos seguros; cambios de redacción que elevan las puntuaciones | Registro de redacción fija; tasa de respuesta y composición; comparar con las tasas de reporte de incidentes y de errores |
| Valoración del apoyo a las necesidades | Redefinir las afirmaciones; aleccionar las respuestas | Redacción estable; interpretación en manos del equipo; comentarios |
| Valoración de la tensión de la carga de trabajo | Reducir la tensión reportada para evitar el escrutinio; ajustar el alcance sobre el papel | Comparar con el trabajo no planificado y la carga de rotación; buscar trabajo oculto |
| Semanas sostenidas de horario ampliado | No registrar las horas; sacar el trabajo de los registros de rotación | Comparar con los registros de incidentes y los comentarios del equipo; permitir el reporte sin penalización |
| Abandono voluntario y temas de salida | Reclasificar dimisiones como involuntarias; dirigir las conversaciones de salida | Reglas de clasificación claras; conversaciones de salida independientes; mirar periodos largos |
| Tiempo para actuar sobre la retroalimentación de bienestar | Registrar una respuesta sin acción; cerrar rápido las preocupaciones | El equipo confirma que la respuesta es significativa; hacer seguimiento de si cambian las valoraciones |

Una lectura sana es una valoración del ritmo estable o en mejora que coincide con los hechos de carga de trabajo, una seguridad psicológica lo bastante alta para que las malas noticias viajen, una tensión de la carga de trabajo que baja tras cambiar las condiciones, semanas de horario ampliado que son raras y están explicadas, y equipos que dicen ver usada su retroalimentación.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de pulso anónimas | Honestas, baratas, puntuales | No pueden hacer seguimiento con individuos; los grupos pequeños limitan el anonimato |
| Encuestas identificadas | Permiten el seguimiento | La gente se reprime; riesgo para la privacidad |
| Preguntas centradas en las condiciones | Apuntan a causas corregibles | Pasan por alto las circunstancias personales |
| Preguntas centradas en los sentimientos | Captan la experiencia vivida | Más fáciles de usar mal; más difíciles de actuar |
| Datos de carga de trabajo a nivel de equipo | Objetivos, vinculan con las causas | Pueden deslizarse hacia la vigilancia sin reglas fuertes |
| Reuniones individuales con el responsable | Personales, pueden responder a necesidades individuales | Dependen del responsable; no agregables |
| Encuesta anual de implicación | Comparable a lo largo del tiempo | Lenta; poca tasa de acción |
| Pulsos breves frecuentes | Puntuales | Fatiga si se usan mal |

La respuesta en prosa es usar pulsos anónimos centrados en las condiciones con estrictas reglas de tamaño de grupo, combinarlos con hechos de carga de trabajo a nivel de equipo y apoyarse en los responsables y los profesionales para el apoyo individual. Trata cualquier dato de bienestar a nivel individual como fuera del ámbito de las métricas.

## Preguntas para debatir con tu equipo

**1. ¿Podríamos seguir trabajando al ritmo actual durante un año y qué tendría que cambiar si no?**
Pide respuestas honestas. El facilitador debe registrar las causas sin repartir culpas: alcance, dotación, interrupciones, incidentes. Acuerden un cambio en el trabajo que reduciría la tensión. Si la respuesta es que sí, pregunten qué está protegiendo el ritmo.

**2. ¿Cuándo planteó alguien por última vez aquí un problema o un error y cómo se recibió?**
Recojan historias. Noten si la respuesta fue curiosidad o culpa. Hablen de qué lo hace seguro o inseguro. Acuerden un hábito que facilitaría plantear un problema, como dar las gracias a quien lo hizo.

**3. ¿Qué reglas nos harían confiar en una encuesta de bienestar?**
Redacten las reglas juntos: quién ve qué, tamaño mínimo del grupo y qué no se hará nunca. Pregunten qué los haría dudar de la promesa. El resultado es el primer borrador de las reglas del programa para revisar con los representantes.

**4. ¿Cuáles de nuestras prácticas dependen de que la gente trabaje horas extra y por qué?**
Enumérenlas: versiones, traspasos, guardias. Pregunten si cada una es de verdad necesaria y qué la eliminaría. Elijan una que corregir con automatización, proceso o dotación.

**5. ¿Qué hacemos cuando un colega parece estar pasándolo mal?**
Hablen del apoyo que existe, de cómo acceder a él y de lo que puede hacer cada persona. El facilitador debe estar preparado con información sobre la asistencia al empleado y dejar claro que el equipo no sustituye a la ayuda profesional.

**6. ¿Qué cambiamos en respuesta a la última ronda de retroalimentación?**
Comprueben el registro. Si no cambió nada, hablen de por qué: falta de propiedad, falta de autoridad o miedo. Acuerden una acción con un responsable y una fecha, y cómo se reportará.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega cargan con la presión de los plazos y de la demanda. Deben fijar sus propias preguntas de pulso, comentar juntos los resultados y plantear abiertamente el ritmo y la carga de trabajo en la planificación. Son los mejor situados para decir qué compromisos son sostenibles, y merecen líderes que escuchen.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con la guardia, los incidentes y el trabajo nocturno. Deben hacer seguimiento de la carga de rotación a nivel de equipo, impulsar la corrección de las causas recurrentes y usar las reglas de descanso y de cobertura como protecciones. Necesitan culturas que traten el agotamiento como un riesgo para el servicio, no como señal de dedicación.

### Liderazgo y gobernanza

Los líderes fijan las expectativas y aprueban los planes que crean carga. Deben proteger las reglas de privacidad, responder a las señales a nivel de equipo con cambios de alcance, de dotación o de prioridades, y resistir la tentación de clasificar equipos. La gobernanza debe comprobar que existen servicios de apoyo, que se cumplen los deberes legales sobre tiempo de trabajo y salud y que ningún dato individual se usa para la evaluación.

### Clientes y usuarios

Los usuarios se benefician de equipos descansados, que aprenden y son estables, porque la calidad del servicio, la paciencia y la continuidad dependen de ellos. Les afecta además cuando los equipos están desbordados: respuestas más lentas, más errores, pérdida de personal con experiencia. La comunicación honesta sobre la capacidad y las prioridades forma parte de tratar con respeto a las personas que los atienden.

## En la práctica: un ejemplo de gestión de servicios

El grupo de operaciones de servicio de un operador regional de telecomunicaciones tiene ocho equipos que operan redes, facturación y sistemas de atención al cliente las 24 horas. Los números siguientes son ilustrativos.

Tras tres dimisiones en un equipo, el director pide un panel de moral que enumere la puntuación de cada equipo. La jefa de personas y cultura propone un enfoque distinto y trabaja con los representantes de los empleados para redactar las reglas del programa: pulsos voluntarios y anónimos, un grupo mínimo de reporte de siete, ningún dato individual y ningún uso en evaluaciones. Los equipos reciben un pulso mensual de tres preguntas sobre ritmo, carga de trabajo y la sensación de tener lo que necesitan, y un pulso trimestral sobre seguridad psicológica y las tres necesidades de la teoría de la autodeterminación. Los resultados van primero a cada equipo.

El primer trimestre muestra que el equipo de operaciones de plataforma valora el ritmo sostenible en 2,3 sobre 5, con un 62 por ciento que califica la carga de trabajo de insostenible. Los registros de rotación muestran que el equipo trabajó horas ampliadas en 9 de las últimas 13 semanas, impulsado por incidentes repetidos de un componente de facturación envejecido, y que una cuarta parte de su capacidad se va en trabajo no planificado. La valoración de seguridad psicológica del equipo es más baja que la de los demás, y los comentarios dicen que plantear preocupaciones sobre el componente ha llevado a que les digan que tengan paciencia. Los demás equipos valoran el ritmo entre 3,4 y 4,1.

El director y el equipo acuerdan cuatro acciones. La sustitución del componente de facturación sube en la lista de prioridades, y el equipo recibe dos ingenieros temporales de un equipo con capacidad sobrante. La rotación añade un día de descanso tras cualquier incidente nocturno, con los responsables encargados de protegerlo. Las preocupaciones sobre el componente se registran y se responden en dos semanas, con motivos. Los líderes dejan de pedir clasificaciones de equipos. En dos trimestres, la valoración del ritmo del equipo sube a 3,6, las semanas de horario ampliado bajan a 2 de 13 y la seguridad psicológica sube. El tiempo para actuar sobre la retroalimentación tiene una mediana de 11 días. El director pide una puntuación de bienestar para toda la empresa para publicarla al consejo. La jefa de personas y cultura explica que una única puntuación invita a los responsables a gestionar el número, y ofrece en su lugar un informe de acciones tomadas y condiciones cambiadas, con el consentimiento de los equipos. La decisión se anota. Un equipo pide que sus resultados no se compartan fuera del equipo, y se concede la petición.

## Agilidad, IA, automatización y analítica

### Agilidad

Protege un ritmo sostenible y pregunta por el bienestar con cuidado, de forma anónima y agregada. La precaución es que preguntar y no actuar cuesta confianza.

### IA

La IA puede cambiar la carga de trabajo y las preocupaciones por la seguridad en el empleo, y las herramientas de sentimiento no deben usarse para monitorizar a individuos. Pregunta directamente por el efecto de la IA en el trabajo, en una encuesta anónima. La precaución es que analizar con IA el texto libre puede exponer a individuos, así que comprueba las reglas de privacidad.

### Automatización

Automatiza el envío de las encuestas y los recordatorios, no la interpretación, y mide el proceso por la tasa de respuesta y el anonimato. La precaución es que las alertas automáticas sobre el bienestar de individuos cruzan una línea.

### Analítica

Reporta resultados agregados con el recuento de respuestas y el tamaño mínimo de grupo. La decisión a la que informa es cómo cambiar el trabajo. La precaución es que los datos de bienestar son sensibles, así que limita el acceso y la conservación.

## Perspectiva sectorial

**Startup.** La intensidad es habitual, y también el riesgo de que las ráfagas se conviertan en la norma. Los fundadores pueden dar ejemplo de ritmo sostenible y notar cuándo el equipo funciona al rojo vivo. Apóyate en la conversación y en un pulso anónimo muy breve cuando el equipo sea lo bastante grande para proteger el anonimato.

**Pequeña empresa.** Los equipos son tan pequeños que nada es anónimo. No ejecutes encuestas de bienestar que finjan lo contrario. Usa conversaciones individuales regulares y honestas, ofrece acceso a apoyo y vigila la sobrecarga en el patrón de trabajo, como los incidentes crónicos fuera de horario.

**Gran empresa.** La escala permite medidas anónimas y análisis de tendencias. Trae además presión para comparar. Ofrece un conjunto común de preguntas básicas, deja que los equipos añadan las suyas, protege las reglas de tamaño de grupo e implica a los representantes de los empleados. Haz visibles y fáciles de usar los servicios de apoyo.

**Gobierno y sector público.** Las protecciones laborales, los comités de empresa y los sindicatos suelen tener papeles formales en las encuestas y la monitorización. Implícalos desde el principio, sigue las reglas sobre tiempo de trabajo y salud y trata con gran cuidado los datos sensibles. Los empleados públicos suelen estar motivados por el propósito, y las organizaciones no deben aprovecharse de esa buena voluntad aceptando una sobrecarga permanente (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son modestos: el tiempo de los equipos para los pulsos breves, las herramientas de encuestas que preservan el anonimato, el tiempo de especialistas para la revisión de privacidad y la interpretación de los resultados y el costo real de actuar, que puede significar dotación, reducción del alcance o inversión en corregir causas recurrentes. Los servicios de apoyo, como la asistencia al empleado, también cuestan dinero y vale la pena tenerlos.

El retorno llega por la retención, menos errores, mejor servicio y menos crisis. Sustituir a un ingeniero con experiencia cuesta selección, incorporación y conocimiento perdido. Los equipos bajo sobrecarga crónica cometen más errores y causan más incidentes. Construye el caso con tus propios datos: el abandono voluntario por equipo a lo largo de varios años, el costo de seleccionar e incorporar a los sustitutos y los patrones de incidentes en los equipos sobrecargados. Evita citar estudios sobre el costo del desgaste profesional salvo que puedas rastrear la fuente y la relevancia. Sé honesto en que los beneficios son reales y difíciles de aislar, y en que el argumento ético no depende del financiero (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Clasificar equipos por puntuaciones de bienestar.** Los responsables gestionan entonces el número. Reporta condiciones y acciones.
- **Encuestas identificadas.** La gente se reprime. Usa el anonimato y las reglas de tamaño de grupo.
- **Diagnosticar a individuos a partir de los datos de la encuesta.** Es poco ético y poco fiable. Ofrece apoyo y deja el diagnóstico a los profesionales.
- **Añadidos de bienestar en lugar de un cambio de la carga de trabajo.** Tratan el síntoma. Corrige la carga.
- **Recoger horas por persona.** Es vigilancia. Usa hechos a nivel de rotación y de equipo.
- **Encuestas sin acción.** La gente deja de responder. Responde de forma visible y rápida.
- **Usar los resultados en evaluaciones del rendimiento.** Acaba con la honestidad. Prohíbelo por escrito.
- **Tratar la sobrecarga como entrenamiento de resiliencia.** Traslada la carga a los individuos. Cambia el sistema.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Ética y privacidad | Sin reglas | Cuidado informal | Reglas escritas, anonimato, mínimo de tamaño de grupo, ningún uso individual | Reglas revisadas con representantes; cumplimiento comprobado | Reglas y práctica auditadas de forma independiente; los equipos controlan el intercambio |
| Medidas | Encuesta anual, si acaso | Chequeos ocasionales de equipo | Pulsos breves mensuales y trimestrales sobre ritmo, carga, seguridad y necesidades | Percepción combinada con hechos de carga de trabajo a nivel de equipo; tendencias vigiladas | Imagen entre equipos con los socios; el aviso temprano impulsa la planificación |
| Acción | Quejas sin atender | Correcciones ad hoc | Respuestas registradas y con plazo; cambios visibles | Condiciones cambiadas, con seguimiento y vinculadas a los resultados | Carga de trabajo y ritmo integrados en la planificación y la financiación de toda la organización |

## Lista de verificación

- [ ] Las reglas escritas declaran el propósito, el acceso, el tamaño de grupo, la conservación y una prohibición del uso individual.
- [ ] Los representantes de los empleados y los especialistas de privacidad han revisado las reglas.
- [ ] La participación es voluntaria y las respuestas son anónimas.
- [ ] Un tamaño mínimo de grupo de reporte se aplica a todas las salidas.
- [ ] Hay servicios de apoyo y todo el personal los conoce.
- [ ] Los pulsos usan unas pocas preguntas estables y claras y un comentario abierto.
- [ ] Los equipos leen primero sus propios resultados.
- [ ] Los hechos de carga de trabajo a nivel de equipo se comparan con la percepción, nunca las horas individuales.
- [ ] Las respuestas a las preocupaciones tienen un plazo declarado y se reportan.
- [ ] Ningún dato de bienestar se usa en evaluaciones del rendimiento, ascensos ni sanciones.

## Prompts de IA

**Redacta las reglas de un programa de bienestar.**

```text
Draft plain-language rules for a staff well-being pulse program in [type of
organization] in [jurisdiction or sector]. Cover purpose, voluntary
participation, anonymity, minimum reporting group size [number], who sees
results, retention, a clear ban on use in reviews, support available, and how
staff can raise concerns. Flag items to review with privacy specialists,
employee representatives, and occupational health. Do not give legal
conclusions. List your assumptions.
```

**Revisa las preguntas del pulso.**

```text
Here are our pulse questions on pace, workload, psychological safety, and
motivation: [paste]. Review them for leading or double-barrelled wording,
sensitivity, and risk of identifying individuals in small groups. Suggest a
shorter set that focuses on conditions we can change. Do not claim validation
for any wording unless you cite the published source accurately. List your
assumptions and cautions.
```

**Analiza los comentarios con seguridad.**

```text
Here are [number] anonymized comments from a pulse for [team type]: [paste with
any identifying details removed]. Group them into themes about conditions of the
work, count each theme, and suggest which conditions could be changed by the
team, its leaders, or other groups. Do not infer anyone's health or identify
individuals. Tell me what a person should check before acting. List your
assumptions.
```

**Planifica la respuesta a una señal de sobrecarga.**

```text
A team's pace rating is [value], extended-hours weeks are [number] of [number],
and unplanned work is [share]. Causes in comments: [summary]. Propose a
response that changes the work (scope, staffing, rotation, root-cause fixes),
what to tell the team, and how to measure whether it helped without tracking
individuals. List your assumptions and trade-offs for leadership.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada y las reglas de privacidad de una métrica de bienestar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de bienestar lleva su vector de manipulación, su barrera de protección y su regla de anonimato.

## Ideas clave

- Pregunta por las condiciones, como el ritmo, la carga de trabajo, la seguridad y el apoyo, más que por los sentimientos, y mantén las respuestas anónimas y agregadas.
- Escribe y publica primero las reglas, incluida una prohibición de usar los resultados para juzgar a individuos.
- Trata la sobrecarga sostenida como un problema del sistema que corregir con alcance, dotación y causas, no con resiliencia.
- Compara la percepción con hechos de carga de trabajo a nivel de equipo, nunca con horas individuales.
- Responde de forma visible y dentro de un plazo declarado, y di a la gente qué cambió.
- Ofrece servicios de apoyo reales y deja el diagnóstico a los profesionales.

## Referencias y lecturas complementarias

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Job satisfaction](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Employee engagement](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Self-determination theory](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Intrinsic motivation](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Social desirability bias](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
