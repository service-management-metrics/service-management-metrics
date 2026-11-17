# Métricas de satisfacción del cliente

**Las puntuaciones de satisfacción te dicen cómo se sintieron las personas ante un momento del servicio, así que haz preguntas breves y honestas en el momento oportuno, lee los comentarios antes que los números y no dejes nunca que una puntuación se convierta en una cuota.**

## Visión general y motivación

Las medidas operativas dicen lo que hizo el servicio. Las medidas de satisfacción dicen cómo fue recibirlo. Un ticket puede cerrarse dentro de su tiempo objetivo y aun así dejar al usuario atascado, y un servicio restablecido puede seguir sintiéndose como una mala semana. Los equipos ágiles hacen la misma pregunta al final de cada incremento: ¿ayudó esto a las personas a las que iba dirigido? La gestión de servicios de TI (ITSM), tal como la codifica ITIL, la hace a través del valor que un servicio cocrea con sus clientes. La medición de la satisfacción es donde se encuentran las dos preguntas.

La [satisfacción del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) es una medida de en qué grado los productos y servicios cumplen o superan lo que los clientes esperan. En el trabajo de servicio se recoge normalmente mediante encuesta, y adopta tres formas habituales que este tema cubre:

- **Puntuación de satisfacción del cliente (CSAT):** una valoración de una interacción o servicio concreto, normalmente en una escala de cinco puntos, reportada como la proporción de respuestas satisfechas.
- **Índice de recomendación neta (NPS):** basado en una pregunta sobre cuán probable es que quien responde recomiende una empresa, un producto o un servicio. Quienes responden 9 o 10 son promotores, quienes responden de 0 a 6 son detractores, y la puntuación es el porcentaje de promotores menos el porcentaje de detractores. El [índice de recomendación neta](https://en.wikipedia.org/wiki/Net_promoter_score) fue popularizado por Fred Reichheld en un artículo de 2003 de la *Harvard Business Review*.
- **Puntuación de esfuerzo del cliente (CES):** una valoración de cuánto esfuerzo costó lograr algo, o de lo fácil que fue. Sus autores sostuvieron que reducir el esfuerzo predice la lealtad mejor que deleitar a la gente. Trata esa afirmación como una hipótesis que poner a prueba en tu propio contexto, no como un hecho establecido.

En un entorno interno de TI el «cliente» es un colega, y la encuesta es una pregunta breve tras un ticket o una versión. Los principios son los mismos, y los deberes éticos son mayores, porque las personas a las que preguntas trabajan contigo mañana.

Las encuestas son una forma de [metodología de encuestas](https://en.wikipedia.org/wiki/Survey_methodology), un campo con décadas de hallazgos sobre cómo la redacción de las preguntas, el momento y el muestreo cambian las respuestas. Los equipos que la saltan tienden a producir puntuaciones que se mueven por razones ajenas a la calidad del servicio. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aquí con fuerza añadida: cuando se premia al personal por una puntuación alta, aprende a pedirla (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema te da las definiciones, la higiene de datos y los hábitos que mantienen honestas las medidas de satisfacción. El tema siguiente las extiende hacia una visión más completa de la experiencia (véase el tema 6.2, Acuerdos de nivel de experiencia).

## Principios clave

- **Pregunta por un momento concreto.** Una encuesta atada a un ticket cerrado o a una versión da respuestas más nítidas que una pregunta anual general.
- **Hazla breve.** Una valoración y un comentario abierto valen más que diez preguntas que la mayoría omite.
- **Lee los comentarios.** La puntuación te dice cuánto, y las palabras te dicen por qué.
- **Reporta quién respondió.** Una puntuación sin tasa de respuesta ni composición de los encuestados es un rumor.
- **Cierra el ciclo.** Las personas que reportan una mala experiencia deben recibir respuesta.
- **Compárate contigo mismo a lo largo del tiempo.** Los puntos de referencia entre empresas esconden diferencias de método, audiencia y cultura.
- **Protege a quienes responden.** Recoge solo lo que necesitas, di cómo se usará y no clasifiques a individuos con ello.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Proporción de respuestas satisfechas, para un tipo de interacción definido | respuestas valoradas con 4 o 5 en una escala de cinco puntos / respuestas válidas | porcentaje | Encuesta posterior a la interacción atada al ticket o a la versión | Centro de servicios; gestión de incidentes; gestión de niveles de servicio | Retroalimentación de la revisión con las partes interesadas | Semanal o mensual |
| NPS | Promotores menos detractores para un servicio y una audiencia definidos | porcentaje que responde 9 o 10 menos porcentaje que responde de 0 a 6 | puntos, rango de -100 a 100 | Encuesta de relación, enviada a un intervalo fijo | Mejora continua; gestión de niveles de servicio | Revisión de resultados del producto | Trimestral |
| CES | Valoración media o proporción favorable de lo fácil que fue lograr algo | respuestas favorables / respuestas válidas, o valoración media | porcentaje o media | Encuesta posterior a la interacción atada al ticket, a la solicitud o a la versión | Gestión de solicitudes de servicio; centro de servicios | Retroalimentación de usabilidad en el refinamiento | Mensual |
| Tasa de respuesta a la encuesta | Proporción de usuarios invitados que respondieron | respuestas recibidas / encuestas entregadas | porcentaje | Herramienta de encuestas y sistema de tickets | Medición y elaboración de informes | Participación en la retroalimentación de las revisiones | Mensual |
| Cobertura de los encuestados | Cuánto se parece la composición de los encuestados a la población de usuarios en dimensiones acordadas | proporción de encuestados en cada grupo comparada con la proporción de usuarios de ese grupo, por grupo | puntos porcentuales | Herramienta de encuestas unida al directorio de usuarios o a los datos de tickets | Medición y elaboración de informes | Mapa de partes interesadas | Trimestral |
| Proporción de temas de comentarios | Proporción de comentarios de texto libre asignados a cada tema | comentarios del tema / comentarios codificados | porcentaje | Comentarios de encuesta codificados | Mejora continua | Temas de la retrospectiva | Mensual |
| Tiempo de seguimiento de detractores | Tiempo desde una valoración baja hasta un contacto documentado con el usuario | marca de tiempo de la nota de seguimiento menos marca de tiempo de la valoración baja, mediana y percentil 85 | horas o días | Herramienta de encuestas y sistema de tickets | Gestión de incidentes; mejora continua | Ciclo de retroalimentación en el acuerdo de trabajo | Mensual |

Los relojes y los límites importan. El CSAT y el CES cuentan solo las respuestas a la interacción concreta, nunca el estado de ánimo general. El tiempo de seguimiento de detractores empieza en el momento en que se registra la valoración baja, no cuando alguien la lee por primera vez. Excluye los registros de prueba y las respuestas de miembros del equipo que se está midiendo.

## Recomendaciones

### Diseña el instrumento

**1. Elige una pregunta por propósito.** Usa el CSAT tras una interacción para saber cómo fue esa interacción, el CES tras algo que el usuario tuvo que hacer para saber dónde está la fricción y el NPS a intervalos regulares para saber cómo es la relación en su conjunto. Mezclar las tres en un formulario invita a la fatiga de encuestas y a resultados confusos. Si solo puedes permitirte una, elige la que corresponda a la decisión que necesitas tomar.

**2. Redacta con palabras neutrales y específicas.** «¿Cuán satisfecho quedó con la forma en que se gestionó su solicitud?» es mejor que «¿Qué tal fue nuestro estupendo servicio?». Evita las preguntas de doble cañón que preguntan por la rapidez y la amabilidad a la vez. Ofrece una escala coherente, etiqueta sus extremos y mantén el mismo orden de las respuestas cada vez. Una [escala de Likert](https://en.wikipedia.org/wiki/Likert_scale) es un diseño habitual, y pequeños cambios en las etiquetas pueden desplazar los resultados, así que no los cambies a la ligera.

**3. Añade una pregunta abierta.** «¿Cuál es el motivo principal de su valoración?» cuesta poco a quien responde y da al equipo sus datos más ricos. Los comentarios explican la puntuación, exponen problemas que los números no pueden y dan a los agentes algo de lo que aprender. Léelos en una revisión regular, en voz alta si es posible.

**4. Sitúa la encuesta cerca del evento.** Envía la pregunta poco después de que se resuelva el ticket o aterrice la versión, mientras la memoria está fresca. No la envíes en el momento del cierre por un agente que espera una nota alta. Un breve retardo, fijado por el sistema, elimina la tentación de aleccionar la respuesta.

### Haz fiables los números

**5. Reporta la tasa de respuesta y la composición de los encuestados junto a cada puntuación.** Una puntuación de satisfacción procedente del 4 por ciento de los usuarios es una afirmación sobre los encuestados. Compara quién respondió con quién fue invitado, usando atributos que ya tienes, como región, servicio o tipo de solicitud. Las grandes diferencias significan que la puntuación necesita una etiqueta de cautela. La representatividad es un tema central de la investigación sobre el [sesgo de respuesta](https://en.wikipedia.org/wiki/Response_bias), y lo importante para un equipo de servicio es simplemente mirar.

**6. Muestra la incertidumbre.** Las muestras pequeñas oscilan mucho. Un [margen de error](https://en.wikipedia.org/wiki/Margin_of_error) o un [intervalo de confianza](https://en.wikipedia.org/wiki/Confidence_interval) mostrado junto al CSAT mensual evita que el equipo reaccione al ruido (véase el tema 1.6, Alfabetización estadística para métricas de servicio). Si un equipo tiene menos de unas pocas decenas de respuestas en un periodo, reporta recuentos y lee los comentarios, no porcentajes.

**7. Evita elegir a quién se pregunta.** Si la persona que cerró el ticket decide si se envía la encuesta, las puntuaciones suben por la razón equivocada. Envía la encuesta automáticamente a cada interacción elegible, o a una muestra aleatoria si el volumen es alto. Documenta la regla, incluidas las exclusiones, en el registro de métricas.

**8. Separa la satisfacción de una persona del rendimiento de una persona.** La satisfacción depende de factores que un agente individual no controla: la calidad del producto, la cola, la política, el estado de ánimo del usuario. No clasifiques a los agentes por CSAT. Úsalo a nivel de equipo y de servicio, y usa los comentarios para conversaciones de coaching que el agente agradezca.

### Actúa sobre lo que oyes

**9. Cierra el ciclo con los usuarios descontentos.** Contacta con las personas que reportan una mala experiencia, pregunta qué habría ayudado y registra lo que aprendas. Fija un objetivo para el tiempo de seguimiento y haz del seguimiento una conversación, no una petición de cambiar la puntuación. Cambiar una puntuación a petición es una distorsión, así que el seguimiento debe apuntar a corregir el problema y a aprender.

**10. Codifica los comentarios en temas y haz seguimiento.** Acuerda una breve lista de temas, como «tuve que repetirme», «respuesta lenta», «la corrección no duró», «comunicación poco clara» y «amable y servicial». Codifica una muestra cada mes, a mano o con una herramienta, y haz que una persona compruebe los resultados. Las tendencias de los temas muestran a menudo los problemas antes de que se mueva una puntuación.

**11. Vincula la satisfacción con los datos operativos.** Compara el CSAT con el tiempo de resolución, la tasa de reapertura y el número de contactos por problema. Los pares te dicen si la rapidez está comprando satisfacción o si el equipo es rápido y se equivoca. Úsalos para encontrar historias que investigar, no para probar una regla.

**12. Trata los puntos de referencia con cuidado.** Las cifras publicadas o suministradas por proveedores para las puntuaciones de satisfacción dependen del método, la audiencia y la región, y tu propio historial es un comparador mejor. Si usas una comparación externa, declara su fuente, su método y su fecha, y no fijes un objetivo a partir de ella sin comprobar si tu método coincide. No inventes nunca un punto de referencia.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| CSAT | Los agentes aleccionan a los usuarios para que den la nota máxima; encuestas enviadas solo tras tickets fáciles; tickets difíciles cerrados sin encuesta | Encuesta automática a cada ticket elegible; tasa de respuesta y composición de los encuestados; tasa de reapertura |
| NPS | Encuestar solo a usuarios amistosos; programar la encuesta tras un buen evento; preguntar cara a cara; reetiquetar los puntos de la escala | Audiencia y calendario fijos en el registro; cobertura de los encuestados; leer los comentarios de los detractores |
| CES | Quitar pasos del formulario de modo que el trabajo se traslade a otra parte; preguntar solo tras solicitudes sin fricción | Recuento de contactos por problema; tiempo de cumplimiento de solicitudes y retrabajo (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio) |
| Tasa de respuesta a la encuesta | Invitar solo a personas con probabilidad de responder; enviar la encuesta a una lista distinta cada vez | Regla de invitación escrita; comparar los invitados con la población de usuarios |
| Cobertura de los encuestados | Retirar de la comparación los grupos difíciles de alcanzar; reponderar sin decirlo | Publicar las dimensiones y el método; mostrar el resultado sin ponderar junto al ponderado |
| Proporción de temas de comentarios | Codificar los comentarios para evitar los temas malos; fusionar temas para que ninguno parezca grande | Una segunda persona codifica una muestra; mantener estable la lista de temas y registrar los cambios |
| Tiempo de seguimiento de detractores | Registrar una nota sin contactar con el usuario; contactar con el usuario para pedirle una mejor puntuación | Comprobar el contenido de las notas de seguimiento; preguntar al usuario en la siguiente encuesta si alguien contactó con él |

Una lectura sana es una tasa de respuesta estable, una composición de los encuestados cercana a la de los usuarios, una puntuación que se mueve con la experiencia que los usuarios describen en los comentarios y usuarios descontentos que dicen que alguien volvió a ponerse en contacto con ellos.

## Compensaciones: ventajas y desventajas

| Medida | Fortaleza | Debilidad |
| --- | --- | --- |
| CSAT | Sencilla, rápida, atada a un momento concreto | Se infla con facilidad; dice poco sobre la relación en su conjunto |
| NPS | Una pregunta, fácil de seguir a lo largo del tiempo | Oculta las razones; un número comprime una distribución amplia; las diferencias culturales afectan a la escala |
| CES | Apunta directamente a la fricción que el equipo puede eliminar | Menos conocida; la evidencia es disputada |
| Encuesta anual larga | Rica, cubre muchos servicios | Lenta, poca respuesta, difícil de actuar |
| Solo comentarios | Concretos, memorables | Difíciles de comparar a lo largo del tiempo; vulnerables a las voces más fuertes |
| Señales de comportamiento | Sin carga de encuesta; objetivas | No captan los sentimientos; pueden malinterpretar la causa |

La respuesta en prosa es combinar una breve encuesta de interacción, una encuesta de relación ocasional y los comentarios, y leer las tres con los datos operativos. Las medidas de satisfacción funcionan como una conversación entre los usuarios y el equipo. Fracasan como marcador.

## Preguntas para debatir con tu equipo

**1. ¿Qué hacemos con una puntuación baja y con una puntuación alta?**
Pide al equipo que describa, en la práctica, la última vez que una puntuación baja llevó a un cambio. Pregunta lo mismo para una puntuación alta. Si las respuestas son vagas, la encuesta es un ritual. El facilitador debe buscar un vínculo concreto entre los datos y una acción, y acordar un lugar donde se registrará ese vínculo.

**2. ¿Quién responde a nuestras encuestas y quién no?**
Pide al equipo que nombre los grupos de usuarios de los que menos sabe. Compara con la lista de invitación y con el directorio de usuarios. La conversación revela a menudo que los usuarios más callados tienen los problemas más difíciles. Acuerden una forma de llegar a un grupo callado este trimestre, como una llamada breve o un canal distinto.

**3. ¿En qué momento de la interacción preguntamos y quién lo decide?**
Recorran el camino desde la resolución hasta la encuesta. Encuentren cada punto en que una persona puede influir en si se envía la encuesta, cuándo y cómo. Acuerden cuáles de esos puntos deben automatizarse. El facilitador puede preguntar qué podría hacer un agente para proteger una puntuación, como una pregunta de diseño y no como una acusación.

**4. ¿Qué oye de nosotros un detractor después de responder?**
Miren unas cuantas valoraciones bajas recientes y lean las notas de seguimiento. Pregunten si el usuario se sentiría escuchado. Hablen de cómo hacer útil el seguimiento sin pedir una valoración cambiada. Decidan quién posee el seguimiento y cuál es el tiempo objetivo.

**5. ¿Qué comentarios del mes pasado cambiaron lo que hicimos?**
Imprime o muestra diez comentarios al azar. Pregunta al equipo cuáles se actuaron, cuáles no y por qué. Esto mantiene el foco en las palabras y crea el hábito de leerlas. Acuerden codificar temas durante el mes siguiente y revisar la tendencia.

**6. ¿Con qué cifra publicada estamos tentados de compararnos y es justa la comparación?**
Nombren la cifra, su fuente, su método y su audiencia, y comparen después cada uno con los suyos. Pregunten si cambiaría una decisión. Si no, déjenla de lado y usen su propia tendencia. El facilitador debe anotar la respuesta en el registro de métricas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de producto usan la retroalimentación de satisfacción para decidir qué corregir o construir a continuación, y las encuestas breves tras una versión dan una lectura más rápida que la siguiente revisión trimestral. Los equipos de entrega deben conectar los comentarios con elementos de la lista de pendientes, mostrar a los usuarios lo que cambió y evitar tratar una puntuación como un objetivo de entrega. Un aumento de los comentarios sobre esfuerzo o confusión tras una versión es una señal para mirar la versión, no la encuesta.

### Equipos de servicio y de operaciones

Los centros de servicios recogen la mayor parte de los datos de interacción y sienten más la presión de la puntuación. Los equipos de operaciones deben enviar las encuestas automáticamente, publicar la regla de muestreo y usar los comentarios para el aprendizaje del equipo. Deben mantener el CSAT junto a la tasa de reapertura y los contactos repetidos, para que los cierres rápidos no parezcan buenos resultados (véase el tema 3.1, Métricas del centro de servicios).

### Liderazgo y gobernanza

Los líderes fijan el clima para la manipulación. Una petición de «95 por ciento de satisfacción a fin de año» enseña al personal a proteger el número. Los líderes deben pedir la tasa de respuesta, la composición de los encuestados y los principales temas de los comentarios, financiar las correcciones que revelan los comentarios y mantener la satisfacción fuera de la retribución y la clasificación individuales. La gobernanza debe esperar un método declarado para cualquier cifra que reporte externamente.

### Clientes y usuarios

Los usuarios dan su tiempo y su sinceridad. Merecen una encuesta breve, una razón clara para preguntar, una promesa sobre cómo se usarán sus respuestas y una respuesta cuando reportan un problema. Donde la encuesta no sea anónima, dilo. Los usuarios que no ven que cambie nada dejarán de responder, y el silencio parecerá satisfacción.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un centro de servicios y un pequeño equipo que construye aplicaciones clínicas. Los números siguientes son ilustrativos.

El CSAT mensual del centro de servicios es del 92 por ciento, calculado a partir de 140 respuestas sobre unos 3100 tickets cerrados, una tasa de respuesta del 4,5 por ciento. La dirección está satisfecha. La responsable del servicio lee los comentarios y nota que muchas respuestas positivas proceden del personal de administración, mientras que el personal de enfermería de los turnos de noche apenas aparece. Compara la composición de los encuestados con el directorio de usuarios y descubre que el personal del turno de noche es alrededor del 18 por ciento de los usuarios y el 3 por ciento de los encuestados.

El equipo hace tres cambios. La encuesta pasa a ser un formulario de dos preguntas con una valoración y un comentario, enviado automáticamente por el sistema de tickets cuatro horas después de la resolución, a todos los tickets. Se ofrece una versión por mensaje de texto al personal por turnos. El informe mensual muestra ahora el CSAT con la tasa de respuesta, el intervalo de confianza, la composición de los encuestados frente a la de los usuarios y los cinco principales temas de los comentarios.

En dos meses la tasa de respuesta sube a alrededor del 11 por ciento y el CSAT baja al 84 por ciento. Los temas de los comentarios muestran «tuve que volver a llamar» y «la corrección no duró» como las dos principales quejas, concentradas en los sistemas clínicos. La jefa de TI dice al consejo que la puntuación anterior reflejaba quién respondía y que la nueva es una guía mejor. El equipo de producto añade un elemento a la lista de pendientes para corregir el fallo recurrente que hay detrás de las llamadas repetidas, y el centro de servicios empieza a contactar con cada usuario que da una valoración de 1 o 2 en el plazo de un día laborable. En el trimestre siguiente, la tasa de contactos repetidos de los sistemas clínicos baja, y la proporción de comentarios de «tuve que volver a llamar» baja con ella. El equipo anota la decisión en su registro y no fija un objetivo de CSAT.

## Agilidad, IA, automatización y analítica

### Agilidad

Pide retroalimentación de forma continua y en pequeñas cantidades, y revisa los comentarios con las partes interesadas en cada conversación regular de mejora. La precaución es que la fatiga de encuestas baja las tasas de respuesta y sesga quién responde.

### IA

La IA puede resumir comentarios y sentimiento a gran volumen, y las interacciones asistidas por IA pueden valorarse de forma distinta a las humanas. Reporta la satisfacción por separado para los contactos gestionados por IA y por humanos, empareja las puntuaciones con los temas de los comentarios y haz que una persona lea una muestra. La precaución es que un modelo de sentimiento puede malinterpretar el tono o el idioma, así que contrástalo con una muestra manual.

### Automatización

Dispara las encuestas automáticamente en un momento elegido y mide el proceso de encuestas por la tasa de respuesta y la composición de los encuestados. La precaución es que las encuestas automáticas tras solo los contactos exitosos sesgan la puntuación al alza.

### Analítica

Muestra las puntuaciones con el recuento de respuestas y la composición de los encuestados, y lee los comentarios antes que los números. La decisión a la que informa es qué recorridos mejorar. La precaución es que las puntuaciones sobre pocas respuestas se mueven mucho, así que muestra el recuento.

## Perspectiva sectorial

**Startup.** El contacto estrecho con los usuarios hace que, al principio, las conversaciones breves sean mejores que las encuestas. Añade una encuesta de una pregunta cuando crezca el volumen y sigue leyendo cada comentario. Resiste la tentación de publicar una puntuación antes de tener suficientes respuestas para que signifique algo.

**Pequeña empresa.** Un solo cliente descontento puede importar más que una puntuación. Usa la encuesta como un aviso para hablar con la gente y guarda registros de los seguimientos. Los informes de satisfacción suministrados por proveedores merecen escepticismo sobre el método.

**Gran empresa.** La escala trae segmentos y la tentación de consolidar. Mantén las puntuaciones por servicio y audiencia, publica el método y evita promediar servicios distintos en un solo número. Usa una plataforma de encuestas estable con envío automático y trata con cautela cualquier clasificación entre equipos.

**Gobierno y sector público.** Los organismos públicos suelen tener obligaciones formales de recoger la opinión de los usuarios y de publicar los resultados, junto con deberes de accesibilidad y privacidad. Ofrece canales de encuesta accesibles, protege la identidad de quienes responden y publica los métodos con los resultados. Donde una cifra de satisfacción aparezca en un contrato o en un informe legal, defínela con exactitud y muestra la barrera de protección a su lado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos directos son las herramientas de encuestas, que muchos sistemas de tickets ya incluyen, una hora o dos al mes para revisar comentarios y codificar temas, y el tiempo para dar seguimiento a los usuarios descontentos. El costo mayor es la disciplina de actuar sobre lo que oyes. No hace falta una plataforma nueva para empezar.

El retorno aparece como correcciones que los usuarios valoran y desperdicio evitado. Los comentarios te dicen dónde está la fricción, de modo que puedes eliminar las causas de los contactos repetidos y de las correcciones fallidas en lugar de añadir personal para atenderlos. Una mejor visión de quién no responde te protege de decisiones basadas en unos pocos autoseleccionados. Describe el beneficio en términos de los problemas hallados y eliminados, y mide tus propias líneas base antes y después: tasa de contactos repetidos, tasa de reapertura y tiempo hasta la primera respuesta útil. No uses un porcentaje inventado para justificar el programa. Si necesitas cifras, constrúyelas con tus propios datos.

## Antipatrones y trampas

- **Tratar la puntuación como un objetivo.** Se cumplirá eligiendo a quién se pregunta o aleccionando la respuesta. Úsala como una pregunta y empárejala con los comentarios y las medidas operativas.
- **Encuestar solo tras tickets fáciles.** Envía a toda interacción elegible, de forma automática.
- **Clasificar a los agentes por CSAT.** Penaliza a quienes asumen los casos difíciles. Usa vistas de equipo y de servicio y aprende de los comentarios.
- **Pedir una mejor puntuación.** El seguimiento de una valoración baja debe apuntar a corregir el problema. No pidas un cambio.
- **Reportar una puntuación sin tasa de respuesta.** Muestra siempre quién respondió y cuántos.
- **Cambiar la pregunta y conservar la tendencia.** Registra los cambios y marca la ruptura en el gráfico.
- **Importar un punto de referencia sin su método.** Compárate primero con tu propio historial.
- **Recoger comentarios y no leerlos nunca.** Pon una revisión en el calendario y asigna un responsable.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Instrumento y muestreo | Encuesta ad hoc ocasional | Existe una encuesta para algunos servicios, enviada a mano | Encuesta breve enviada automáticamente a todas las interacciones elegibles | Regla de muestreo, cambios de redacción y exclusiones registrados y revisados | Instrumentos alineados entre equipos y proveedores, y revisados con los usuarios |
| Calidad de los datos | Solo la puntuación | Tasa de respuesta reportada | Tasa de respuesta, composición de los encuestados e incertidumbre reportadas | Cobertura de los encuestados gestionada; codificación comprobada por una segunda persona | Visión compartida de la experiencia entre servicios, con los usuarios implicados en la interpretación |
| Acción y seguimiento | Puntuaciones reportadas, nada cambia | Correcciones ocasionales a partir de los comentarios | Seguimiento de detractores con un tiempo objetivo; temas con seguimiento | Los temas impulsan trabajo de mejora financiado y se vinculan con datos operativos | Ciclo cerrado que abarca equipos y proveedores; los usuarios ven lo que cambió |

## Lista de verificación

- [ ] Cada encuesta tiene un propósito declarado y una decisión a la que informa.
- [ ] Las preguntas son breves, neutrales e incluyen un comentario abierto.
- [ ] La encuesta se envía automáticamente a toda interacción elegible o a una muestra aleatoria documentada.
- [ ] La tasa de respuesta y la composición de los encuestados se muestran junto a cada puntuación.
- [ ] Se muestra la incertidumbre, y las muestras pequeñas se reportan como recuentos.
- [ ] Ningún agente individual se clasifica por satisfacción.
- [ ] Una persona con nombre da seguimiento a las valoraciones bajas dentro de un plazo acordado.
- [ ] Los comentarios se codifican en una lista estable de temas y se revisan cada mes.
- [ ] Los cambios de redacción y de muestreo se registran y se marcan en los gráficos.
- [ ] A quienes responden se les dice cómo se usan sus respuestas, y los datos personales están protegidos.

## Prompts de IA

**Revisa un instrumento de encuesta.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Codifica los comentarios de una encuesta en temas.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Comprueba la representatividad.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Planifica un seguimiento de ciclo cerrado.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de satisfacción antes de publicarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada revisada de una métrica de encuesta conserva su vector de manipulación y su barrera de protección.

## Ideas clave

- Las puntuaciones de satisfacción describen cómo se sintió un momento del servicio, así que ata las encuestas a eventos concretos y mantenlas breves.
- Reporta siempre la tasa de respuesta, la composición de los encuestados y la incertidumbre junto con la puntuación.
- Los comentarios explican los números, así que léelos cada mes y codifícalos en temas.
- Envía las encuestas automáticamente y no pidas nunca a los usuarios que cambien una valoración.
- Usa la satisfacción a nivel de equipo y de servicio, nunca para clasificar personas, y trata con cuidado los puntos de referencia externos.
- Cierra el ciclo: las personas que reportan una mala experiencia deben recibir respuesta y ver cambios.

## Referencias y lecturas complementarias

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
