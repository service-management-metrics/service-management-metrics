# Implantar métricas sin sembrar miedo

**La medición funciona cuando la gente cree que los números describen su trabajo para ayudarla, así que implanta con transparencia, propiedad de los equipos, promesas escritas sobre el uso y sin tablas de clasificación de individuos.**

## Visión general y motivación

Un programa de métricas triunfa o fracasa por la confianza. El mismo conjunto de medidas puede ser un espejo útil en una organización y una fuente de pavor en otra. La diferencia rara vez son las medidas. Es lo que la gente cree que le pasará por culpa de los números. Si cree que los números se usarán para clasificarla, culparla o recortarla, la respuesta sensata es protegerse: elegir el trabajo que puntúa bien, retrasar el reporte de problemas, discutir sobre las definiciones y ajustar en silencio lo que se registra. Los datos dejan entonces de describir el trabajo, y el programa pierde justo lo que debía ofrecer.

Este patrón es antiguo y bien conocido. El [efecto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) describe cómo la gente cambia su comportamiento cuando sabe que la observan. La [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) dice que cuanto más se usa un indicador cuantitativo para tomar decisiones, más estará sujeto a presiones de corrupción y más distorsionará el proceso que debía monitorizar. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) hace una observación parecida sobre los objetivos (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Ninguna es una razón para evitar la medición. Son razones para diseñar la implantación de modo que los incentivos para distorsionar sean bajos y las razones para decir la verdad sean altas.

La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety) es la creencia compartida de que un equipo es un lugar seguro para correr riesgos interpersonales, como admitir un error, hacer una pregunta o reportar malas noticias. Los programas de métricas dependen de ella y pueden erosionarla. Las medidas de fallo, retrabajo y retraso solo son honestas cuando la gente se siente segura al reportarlas (véase el tema 9.2, Métricas de satisfacción y bienestar, y el tema 4.2, Métricas de análisis posteriores y aprendizaje). La [confianza](https://en.wikipedia.org/wiki/Trust_(social_science)) entre las personas medidas y las que usan las medidas es el activo subyacente, y se construye despacio y se gasta rápido.

La [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) es la disciplina de preparar y apoyar a las personas a través del cambio. Introducir métricas es un cambio organizacional y merece el mismo cuidado que un proceso o una herramienta nuevos (véase el tema 9.6, Métricas de cambio organizacional y adopción). El [ciclo de vida de adopción de la tecnología](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) describe cómo se extienden las innovaciones desde los entusiastas hasta una mayoría, lo que recuerda que un piloto respetado con equipos dispuestos hace más que un mandato. Un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) es una prueba a pequeña escala que contrasta un enfoque antes de un compromiso más amplio. Un [radiador de información](https://en.wikipedia.org/wiki/Information_radiator) es una presentación visible de información que la gente puede leer de un vistazo sin preguntar, lo que encaja con la transparencia cuando muestra los datos de un equipo al equipo que los posee.

Los fines ágiles dan forma a la implantación. La implicación continua de las partes interesadas significa que las personas medidas ayudan a elegir las medidas y las reglas para su uso. La mejora continua significa que el propio programa cambia en respuesta a lo que dice la gente. La evolución permanente significa que se espera que las medidas cambien, lo que baja lo que está en juego en cada una. Un ritmo sostenible significa que el programa no añade reportes que desplacen el trabajo. Construir en torno a individuos motivados significa tratar a las personas como adultos capaces que pueden usar los datos para mejorar su propio trabajo, y no como recursos que monitorizar. La postura práctica es sencilla: mide el sistema, comparte los datos con las personas que están en él y deja que lideren la mejora.

El tema trabaja junto con la guía del panel (véase el tema 11.1, Diseño de un panel de métricas de servicio) y con la gobernanza de las medidas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Principios clave

- **Di para qué sirven los datos y para qué no.** Escribe ambas cosas y cúmplelas.
- **Los equipos poseen sus medidas.** Las personas que hacen el trabajo ayudan a definir, ver e interpretar los números sobre él.
- **Mide sistemas, no individuos.** Sin tablas de clasificación, sin puntuaciones por persona, sin usar los datos en las evaluaciones de desempeño individuales.
- **Sé transparente.** Comparte las definiciones, las fuentes de datos y quién puede ver qué. Las sorpresas engendran sospechas.
- **Empieza con voluntarios.** Un piloto dispuesto produce historias y correcciones antes de la implantación más amplia.
- **Muestra el uso.** Demuestra que los números llevan a ayuda, como quitar un obstáculo, y no a culpa.
- **Permite el cuestionamiento.** La gente puede poner en duda un número, y las correcciones se hacen con rapidez y de forma visible.
- **Ve a un ritmo sostenible.** Pocas medidas a la vez, con tiempo para aprender.

## Definiciones de métricas

Las medidas siguientes dicen al equipo del programa si la implantación está construyendo o gastando confianza. Describen equipos y el programa, no individuos. Varias dependen de encuestas y de la observación del comportamiento, y se leen mejor como señales sobre las que conversar.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de cartas de uso | Proporción de equipos participantes que han acordado una declaración escrita de para qué se usan sus medidas y para qué no se usan nunca | equipos con una carta acordada / equipos participantes | porcentaje | Cartas conservadas por el programa | Gobernanza; gestión del cambio organizativo | Acuerdos de trabajo | Trimestral |
| Proporción de propiedad del equipo | Proporción de las medidas mostradas a un equipo cuyas definiciones el equipo ayudó a escribir o ha aprobado | medidas con aprobación del equipo / medidas mostradas al equipo | porcentaje | Catálogo de métricas; registros de aprobación | Mejora continua | Equipos autoorganizados | Trimestral |
| Señal de franqueza | Si el reporte de problemas y de cuasi accidentes se mantiene estable o sube tras introducir las medidas | reportes de cuasi accidentes o de problemas por equipo por trimestre, antes y después; tendencia | reportes | Registros de incidentes, cuasi accidentes y análisis posteriores | Gestión de incidentes; mejora continua | Reflexión sin culpas | Trimestral |
| Tiempo de respuesta a cuestionamientos | Tiempo desde que una persona o un equipo cuestiona un número hasta una resolución visible para ellos | mediana y percentil 85 de los días desde el cuestionamiento hasta la resolución | días | Registro de cuestionamientos | Mejora continua; gestión del conocimiento | Responder a la retroalimentación | Trimestral |
| Seguridad percibida de la medición (encuesta) | Acuerdo, medido por encuesta a nivel de equipo, con afirmaciones como «los datos sobre nuestro trabajo se usan para ayudarnos» | porcentaje que está de acuerdo en la encuesta del equipo; tasa de respuesta mostrada | porcentaje | Encuesta anónima del equipo, agregada | Gestión del cambio organizativo | Confianza e individuos motivados | Dos veces al año |
| Incidentes de uso individual | Casos en que se mostraron o usaron datos para clasificar o evaluar a individuos, contra la carta | recuento de casos reportados por trimestre, con resultados | recuento | Reportes al programa; revisión de paneles y de evaluaciones | Gobernanza | Respeto a las personas | Trimestral |
| Adopción voluntaria | Proporción de equipos elegibles que decidieron incorporarse al programa en un periodo, antes de cualquier mandato | equipos que se sumaron voluntariamente / equipos elegibles invitados | porcentaje | Registros del programa | Gestión del cambio organizativo | Pilotos y aprendizaje | Trimestral |

La encuesta de seguridad percibida necesita un tamaño mínimo de grupo para reportar de modo que no se pueda identificar a ningún individuo, y debe ser anónima. La señal de franqueza debe leerse con cuidado: un aumento de los reportes puede significar más problemas o más disposición a reportarlos, y lo segundo es normalmente lo que produce al principio un programa sano. Los incidentes de uso individual no son un recuento que esconder. El objetivo es que cada caso se reporte, se gestione y se corrija, y un número pequeño de casos reportados es señal de una vía de reporte que funciona, no de un fracaso del programa. La adopción voluntaria se cuenta solo para el periodo anterior a cualquier mandato.

## Recomendaciones

### Fija primero las reglas básicas

**1. Escribe las promesas y publícalas.** Antes de mostrar el primer número, escribe una carta breve. Una buena dice que las medidas describen equipos, servicios y sistemas y no se usan nunca para clasificar a individuos ni en las evaluaciones de desempeño individuales. Dice quién puede ver qué, cuánto tiempo se conservan los datos, cómo puede cuestionar un número la gente y qué ocurre si se rompen las reglas. Los líderes sénior la firman. La carta es un compromiso que permite a la gente bajar la guardia, y debe ser fácil de encontrar y de leer.

**2. Separa la medición para mejorar de la medición para juzgar.** Los equipos usan sus medidas para mejorar su propio trabajo. Los líderes usan vistas agregadas para dirigir el apoyo y la inversión. Ninguno de los dos usos consiste en evaluar a una persona. Si una organización debe evaluar a individuos, debe hacerlo mediante conversación, evidencia y contexto, y nunca leyendo un panel (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

**3. Sé abierto sobre las compensaciones.** Di a la gente que toda medida puede manipularse, que sabes de qué maneras y que cada una trae una barrera de protección. Muestra los vectores de manipulación y las barreras de protección al estilo de este libro. Nombrar los riesgos abiertamente demuestra buena fe e invita a la gente a señalar las formas que se te pasaron.

### Haz propietarios a los equipos

**4. Deja que los equipos elijan y definan.** Ofrece un menú de medidas y deja que cada equipo elija unas pocas para empezar, adapte las definiciones con un motivo declarado y añada las suyas. Los equipos que eligieron sus medidas tienen más probabilidades de usarlas con honestidad. Mantén un pequeño núcleo común para que los servicios puedan compararse al nivel en que la comparación es válida (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**5. Muestra primero a los equipos sus datos.** Da a cada equipo sus números antes de que nadie más los vea, con tiempo para comprobar, corregir y añadir contexto. El equipo posee la historia. Cuando los datos se muestren después a los líderes, el equipo los presenta o los anota. Esto evita sorpresas y asegura que la interpretación venga de las personas más cercanas al trabajo.

**6. Mantén las vistas al nivel adecuado.** Muestra vistas a nivel de equipo y de servicio. No muestres desgloses por persona y desactiva las funciones de las herramientas que los ofrecen. Donde una vista detallada sea necesaria para una investigación, como el historial de un solo incidente, limita el acceso, explica por qué y mantenla fuera de las conversaciones de evaluación (véase el tema 11.2, Panorama de herramientas).

### Implanta para ganarte la confianza

**7. Haz un piloto con voluntarios.** Invita a dos o tres equipos curiosos y respetados. Trabaja con ellos las medidas y las reglas. Deja que cuenten sus propias historias a sus pares. Sus correcciones y objeciones mejorarán el programa, y su respaldo pesa más que cualquier anuncio. Pregunta qué cambiarían antes de la implantación más amplia, y cámbialo.

**8. Entrega valor pronto y de forma visible.** En las primeras semanas, usa los datos para quitar algo que moleste al equipo: una cola que siempre espera, un paso de aprobación sin propósito, un informe que nadie lee. Cuando la gente ve que los números llevan a ayuda, ofrece datos más honestos. Cuando ve que los números llevan a preguntas sobre ella, ofrece menos.

**9. Responde rápido a los cuestionamientos.** Cuando alguien diga que un número es erróneo, tómalo en serio. Compruébalo, corrige la definición o los datos y di públicamente lo que se hizo. Una corrección rápida y respetuosa construye confianza, y una respuesta a la defensiva la gasta. Mantén un registro de cuestionamientos y trata los cuestionamientos repetidos como señales de que la medida necesita trabajo.

### Protege la confianza con el tiempo

**10. Vigila las señales del miedo.** Las señales incluyen equipos que discuten sobre las definiciones para evitar resultados, mejoras repentinas que no coinciden con otras señales, menos problemas reportados, trabajo elegido para quedar bien y gente que pregunta quién puede ver los datos. Trátalas como información sobre el programa y no como mala conducta. Pregunta a los equipos, escucha y ajusta.

**11. Haz que los líderes cumplan la carta.** Los líderes están bajo presión para comparar, clasificar y explicar. Dales lo que pueden usar legítimamente: tendencias, distribuciones y medidas de resultado a nivel de equipo y de servicio. Facilita reportar un incumplimiento de la carta, responde a cada reporte y publica el resultado, sin nombrar a los individuos que lo plantearon. Una sola violación visible puede deshacer meses de trabajo, y una corrección visible puede reconstruirlos.

**12. Revisa el programa con las personas que están en él.** Cada trimestre, pregunta a los equipos en qué les ayudan las medidas, qué distorsionan y qué abandonarían. Retira las medidas que no superen la prueba. Comparte los resultados de la revisión. Un compromiso continuo y visible de mejorar el programa es la señal más fuerte de que existe para servir a los equipos (véase el tema 9.5, Métricas de mejora continua).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de cartas de uso | Firmar las cartas como formalidad; líderes que las ignoran | Comprobar el uso de la carta en la práctica; reportar los incidentes de uso individual; revisar las cartas con los equipos |
| Proporción de propiedad del equipo | Equipos que aprueban definiciones que no leyeron; el programa que presenta definiciones terminadas para su firma | Muestrear cómo se desarrollaron las definiciones; hacer seguimiento de los cambios que pidieron y lograron los equipos |
| Señal de franqueza | Presionar a los equipos para que reporten más o menos problemas; renombrar las categorías | Leerla junto con la gravedad y el contenido de los análisis posteriores; comparar con los problemas reportados por los clientes |
| Tiempo de respuesta a cuestionamientos | Cerrar cuestionamientos sin una resolución visible; desalentar los cuestionamientos | Exigir una respuesta visible; encuestar a quienes cuestionan; seguimiento de los cuestionamientos repetidos |
| Seguridad percibida de la medición (encuesta) | Aleccionar a los encuestados; tasas de respuesta bajas que esconden equipos descontentos | Anonimato y tamaño mínimo de grupo; mostrar las tasas de respuesta; hablar directamente con los equipos |
| Incidentes de uso individual | No reportar; reclasificar los incidentes como otra cosa; culpar a quienes reportan | Reporte anónimo fácil; protección de quienes reportan; revisión de las evaluaciones y los paneles en busca de datos individuales |
| Adopción voluntaria | Presión presentada como invitación; contar equipos que se sumaron para evitar el escrutinio | Preguntar a los equipos por qué se sumaron; comprobar el uso en la práctica; mantener el periodo libre de mandato |

Una lectura sana muestra cartas a las que los equipos recurren de verdad, medidas que los equipos ayudaron a moldear, reportes de problemas estables o crecientes, cuestionamientos respondidos con rapidez, una encuesta que muestra que la gente cree que los datos le ayudan, unos pocos incumplimientos reportados que se gestionaron abiertamente y equipos que se sumaron porque quisieron.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Implantación obligatoria en todos los equipos a la vez | Rápida y coherente | Cumplimiento sin convicción; manipulación y resentimiento |
| Pilotos voluntarios y luego extensión | Construye historias y confianza | Más lenta; cobertura desigual |
| Los equipos eligen todas sus medidas | Mucha propiedad | Difícil de comparar; brechas de cobertura |
| Núcleo común más elección del equipo | Equilibrio entre comparación y propiedad | Necesita gobernanza |
| Paneles abiertos entre equipos | Transparencia; aprendizaje compartido | Riesgo de comparación y de clasificaciones |
| Vistas solo para el equipo, con agregados compartidos | Espacio seguro para la reflexión honesta | Los líderes pueden sentirse a ciegas |
| Carta escrita | Promesas claras; base para cuestionar | Inútil si se ignora |
| Garantías informales | Rápidas | Se olvidan; sin recurso |

La respuesta en prosa es empezar con equipos dispuestos, darles la propiedad, compartir agregados hacia arriba con el consentimiento del equipo y con contexto, y respaldar las promesas con una carta que se exija cumplir a los líderes.

## Preguntas para debatir con tu equipo

**1. ¿Qué creemos que pasará con estos números y qué hemos visto pasar en el pasado?**
Inviten a contar historias honestas de medidas bien y mal usadas. El facilitador debe registrar los temores sin discutir. Acuerden qué promesas marcarían más diferencia.

**2. ¿Qué escribiríamos en una carta que diga para qué no se usarán nunca nuestros datos?**
Redáctenla juntos en palabras sencillas. Incluyan las evaluaciones de desempeño individuales, las clasificaciones y los despidos, si esa es la preocupación. Llévenla a los líderes que tendrían que firmarla.

**3. ¿Cuáles de las medidas propuestas elegiríamos y cuáles abandonaríamos?**
Que cada persona vote en privado y comparen. Hablen de por qué algunas parecen amenazadoras. Acuerden un conjunto breve para probar durante un trimestre.

**4. ¿Cómo sabríamos si la gente empezara a esconder problemas?**
Enumeren señales: menos reportes, lenguaje suavizado, trabajo evitado. Acuerden quién vigila y cómo lo plantearíamos sin culpas.

**5. ¿Quién debería ver los números de nuestro equipo, de qué forma y cuándo?**
Hablen de solo el equipo, agregados para el liderazgo y comparación entre equipos. Decidan qué se comparte y quién lo presenta. Escriban la regla.

**6. Si un número sobre nosotros es erróneo, ¿cómo lo haremos corregir?**
Rastreen el camino desde notarlo hasta la corrección. Identifiquen los retrasos y quién decide. Acuerden una vía sencilla de cuestionamiento y una expectativa de tiempo.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos cargan con el riesgo de ser medidos y tienen el conocimiento de lo que significan los números. Deben participar en elegir y definir las medidas, usar los datos en sus propias revisiones y hablar cuando un número engañe. Se benefician cuando ven primero los datos y cuando la medición ayuda a quitar obstáculos.

### Equipos de servicio y de operaciones

Los equipos de operaciones suelen tener los datos más ricos y las cargas más pesadas de guardia y de incidentes. Deben desconfiar de las medidas que premian el silencio o castigan la escalada, proteger el reporte de incidentes y de cuasi accidentes y vigilar que los datos de guardia no se usen para clasificar a las personas (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

### Liderazgo y gobernanza

Los líderes fijan la cultura de uso. Deben firmar y seguir la carta, pedir vistas de equipo y de servicio, responder abiertamente a los incumplimientos y evitar pedir clasificaciones. Deben juzgar el programa por la mejora que permite y por la franqueza que preserva, no por el número de paneles.

### Clientes y usuarios

Los clientes y los usuarios se benefician cuando los equipos reportan los problemas con honestidad y corrigen las causas. Pueden ser además objeto de la recogida de datos. Merecen claridad sobre lo que se reúne acerca de ellos y cómo se usa, y pueden ser socios para decidir qué medidas muestran valor para ellos (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

La división de tecnología de un proveedor de servicios de salud introduce métricas en sus 15 equipos de entrega y de soporte. Un intento anterior, tres años antes, publicó una clasificación de equipos por tickets cerrados y acabó con un pico de cierres de tickets de poco valor y una caída de los incidentes reportados. Las cifras siguientes son ilustrativas.

La nueva jefa de gestión de servicios empieza preguntando a seis responsables de equipo qué recuerdan. Describen la clasificación y sus consecuencias. Redacta con ellos una carta: las medidas describen equipos y servicios, nunca individuos; las vistas individuales se desactivan en las herramientas; los datos no se usan nunca en las evaluaciones individuales; los equipos ven primero sus datos; cualquier persona puede cuestionar un número, con una respuesta en diez días laborables; y cualquier incumplimiento se reportará al programa y se revisará abiertamente. El director de tecnología la firma, y se publica en la página del programa.

Tres equipos se ofrecen voluntarios para el piloto. Cada uno elige cuatro medidas de un menú y reescribe dos definiciones. Un equipo insiste en que el «tiempo de resolución» excluya el tiempo de espera a un cliente, y otro en que el fallo de cambio se defina por el impacto en el usuario y no solo por la reversión. El piloto muestra su primer beneficio en la tercera semana, cuando un equipo ve su trabajo esperando en una cola de aprobación y elimina un paso que nadie podía justificar. El equipo presenta su historia en una reunión de la división. Otros siete equipos piden sumarse. La adopción voluntaria llega a 10 de 15 equipos en dos trimestres, y los cinco últimos se suman más tarde sin mandato.

El programa vigila el miedo. Los reportes de cuasi accidentes por equipo suben el primer trimestre, lo que ella interpreta como más disposición a reportar, y lo confirma leyendo una muestra. Una encuesta de equipo con un tamaño mínimo de grupo muestra que el 58 por ciento de los encuestados está de acuerdo en que «los datos sobre nuestro trabajo se usan para ayudarnos» al empezar el segundo trimestre y el 76 por ciento al empezar el cuarto. El tiempo de respuesta a cuestionamientos tiene una mediana de cuatro días laborables. Entonces una directora, al preparar un caso presupuestario, pide una tabla que clasifique los equipos por recuento de despliegues. La responsable del programa le dice que está fuera de la carta, le ofrece una vista de tendencias por servicio con comentarios de los equipos y registra la petición como un cuasi incidente de uso individual reportado, con el resultado. La directora lo acepta. Dos trimestres después, los incidentes de uso individual son uno, reportado, gestionado y publicado sin nombres.

## Agilidad, IA, automatización y analítica

### Agilidad

Implanta con las personas medidas, con promesas escritas sobre cómo se usarán los datos y una conversación regular sobre lo que ven. La precaución es que una implantación anunciada desde arriba con un panel de equipos invita a la manipulación.

### IA

El personal puede temer a la IA como herramienta de medición o como sustituto, así que sé explícito en que los datos derivados de la IA sobre individuos no se usan para evaluarlos y en que el trabajo asistido por IA se mide a nivel de equipo. La precaución es que usar herramientas de IA para analizar el comportamiento individual rompe la promesa, aunque se haga en silencio.

### Automatización

La recogida automatizada es aceptable cuando la gente sabe qué se recoge y por qué. Publica la lista de datos recogidos y las reglas de acceso. La precaución es que la recogida automática de datos de actividad parece vigilancia, así que recoge solo lo que necesita una decisión.

### Analítica

Comparte los resultados primero con el equipo y muestra cómo se usará cada número. La decisión a la que informa es si el programa se ha ganado la confianza. La precaución es que las señales de franqueza son blandas, así que combina las encuestas con la observación y trata una respuesta baja como información.

## Perspectiva sectorial

**Startup.** El equipo es pequeño y la confianza es personal. Di en voz alta para qué son los números, deja que todo el equipo elija las pocas medidas que seguir y mantenlas fuera de cualquier conversación individual. El riesgo es que un comentario pasajero de un fundador sobre un número remodele el comportamiento de la noche a la mañana. Escribe la promesa, aunque sea en pocas líneas.

**Pequeña empresa.** El personal puede sospechar que los números tratan de recortar empleos. Habla con apertura de por qué mides, qué mirarás y qué no. Implica a la gente en la elección de las medidas, comparte lo que encuentres y muestra pronto una mejora que les haya ayudado.

**Gran empresa.** La escala dificulta la confianza, porque la mayoría de los líderes están lejos de los equipos. Usa una carta firmada a nivel sénior, medidas poseídas por los equipos con un pequeño núcleo común, una configuración de herramientas que impida las vistas individuales y una vía independiente para reportar incumplimientos. Pilota, aprende y extiende a través de los pares, y evita una única fecha global de implantación.

**Gobierno y sector público.** Las normas laborales, los sindicatos y el escrutinio público añaden restricciones y expectativas. Consulta pronto a los representantes del personal, acuerda con ellos la carta y sé claro sobre la línea entre los datos de mejora y cualquier proceso formal de evaluación del desempeño. Los requisitos de reporte público deben mantenerse aparte de las medidas internas de mejora (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son sobre todo tiempo de las personas: redactar la carta, ejecutar pilotos, talleres con los equipos, gestionar cuestionamientos, realizar encuestas y el tiempo de los líderes dedicado a cumplir las reglas. Hay además un costo de oportunidad, porque una implantación cuidadosa es más lenta que un mandato. Esos costos son pequeños frente al de una implantación fallida, en que los datos se distorsionan, la confianza se gasta y el programa se abandona.

Los retornos son datos que reflejan la realidad, un reporte honesto de problemas y equipos que usan las medidas para mejorar. Se manifiestan como una detección más temprana de problemas, menos disputas sobre los números y una mayor adopción sin coacción. Construye el caso con tu propia historia: qué ocurrió cuando antes se impusieron medidas, cuántos equipos adoptaron voluntariamente esta vez y cómo cambió el reporte de problemas. Evita citar cifras publicadas sobre implicación o confianza sin una fuente rastreable y una pertinencia para tu entorno (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **La tabla de clasificación sorpresa.** Aparecen clasificaciones en una diapositiva del liderazgo. La confianza termina. Mantén las clasificaciones fuera del programa.
- **Medidas en las evaluaciones de desempeño.** Incluso una mención cambia el comportamiento en todas partes. Mantenlas fuera, por escrito.
- **Mandato primero, explicación después.** Cumplimiento sin convicción. Haz un piloto con voluntarios y explica las razones.
- **Una carta que nadie hace cumplir.** Las palabras sin acción son peores que ninguna. Exige su cumplimiento a los líderes y publica los resultados.
- **Vigilancia por defecto.** Las herramientas exponen la actividad individual porque pueden. Desactiva esas funciones.
- **Respuestas a la defensiva ante los cuestionamientos.** La gente deja de señalar errores. Responde con rapidez y respeto.
- **Precipitarse a muchas medidas.** Sobrecarga y confusión. Empieza con pocas y crece.
- **Leer el silencio como éxito.** Menos reportes pueden significar miedo. Vigila las señales de franqueza y habla con la gente.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Promesas y uso | Sin escribir; el uso varía según el gerente | Garantías verbales; algunos acuerdos de equipo | Carta escrita y firmada por los líderes; vistas individuales desactivadas | Incumplimientos reportados y revisados; uso de la carta comprobado | Carta de propiedad compartida con el personal y los socios; revisada a partir de la experiencia |
| Propiedad y transparencia | Medidas impuestas | Algunos equipos consultados | Los equipos eligen y definen las medidas y ven primero los datos | Proporción de propiedad y tiempo de respuesta a cuestionamientos gestionados | Equipos, proveedores y clientes comparten vistas por acuerdo; la propiedad es rutina |
| Confianza y franqueza | Miedo o indiferencia | Piloto con voluntarios | Encuesta de seguridad y tendencias de cuasi accidentes revisadas con los equipos | Las señales activan acciones planificadas; adopción voluntaria con seguimiento | La franqueza es rutina; la mejora del programa viene de todos |

## Lista de verificación

- [ ] Una carta escrita declara para qué sirven los datos y para qué no, y los líderes la han firmado.
- [ ] Las vistas y las clasificaciones a nivel individual están desactivadas en las herramientas o restringidas por política.
- [ ] Los equipos eligen o aprueban sus medidas y ven sus datos antes que los demás.
- [ ] Un piloto con equipos voluntarios precede a cualquier implantación más amplia.
- [ ] El primer uso de los datos entrega una ayuda visible al equipo.
- [ ] Existe una vía de cuestionamiento, con un tiempo de respuesta declarado y un registro.
- [ ] Existe una vía de reporte de los incumplimientos de la carta, y los resultados se publican sin nombres.
- [ ] Las señales de seguridad y de franqueza a nivel de equipo se vigilan y se comentan con los equipos.
- [ ] Los vectores de manipulación y las barreras de protección se comparten abiertamente con los equipos.
- [ ] El programa se revisa con los equipos cada trimestre y las medidas se retiran cuando dejan de ayudar.

## Prompts de IA

**Redacta una carta de métricas.**

```text
Draft a one-page charter for the metrics program of [organization type]. It should
state what the data is for, what it will never be used for (including individual
rankings and performance reviews), who can see what, how long data is kept, how a
person can challenge a number, how breaches are reported, and who signs it. Use
plain words. Do not give legal advice. List your assumptions and points to confirm
with human resources and legal specialists.
```

**Planifica un piloto.**

```text
Plan a six-week pilot of a metrics program with two to three volunteer teams in
[context]. Include how to invite teams, which measures to offer, how to set the
rules, what early help the data should provide, what to ask the teams at the end,
and how to decide on wider rollout. Do not assume the outcome. List your
assumptions and risks.
```

**Revisa una medida desde el miedo.**

```text
Here is a proposed measure and how it will be used: [paste]. Act as a skeptical
team member. Describe how it could be taken as a threat, how people could change
behavior to look good, and what honest reporting it might discourage. Suggest
changes to the definition, display, or rules of use that would lower the risk.
List your assumptions.
```

**Responde a un cuestionamiento.**

```text
A team has challenged this number: [describe, without personal data]. Draft a
respectful response that acknowledges the concern, explains how the number is
calculated, proposes how to check it, sets a date for the answer, and says what
will change if the number is wrong. Do not be defensive. List what you do not yet
know.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el vector de manipulación y la barrera de protección que compartir abiertamente con los equipos para una medida propuesta.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un plan de implantación mantiene las medidas a nivel de equipo y de servicio y no clasifica nunca a individuos.

## Ideas clave

- La confianza es el activo. Escribe para qué sirven los datos y para qué no, y cumple la promesa.
- Mide equipos, servicios y sistemas, y desactiva las vistas que expongan a individuos.
- Deja que los equipos elijan, definan y vean primero sus datos y posean la historia que cuentan.
- Haz un piloto con voluntarios, entrega ayuda visible pronto y extiende a través de los pares.
- Responde rápido a los cuestionamientos y trata las señales de miedo como información sobre el programa.
- Exige a los líderes que cumplan la carta y revisa el programa con las personas que están en él.

## Referencias y lecturas complementarias

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
