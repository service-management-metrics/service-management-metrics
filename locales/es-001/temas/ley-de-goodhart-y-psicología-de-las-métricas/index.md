# Ley de Goodhart y psicología de las métricas

**Cualquier número que premies, clasifiques o con el que amenaces empezará a cambiar el trabajo que debía describir, por lo que cada métrica de este libro se usa como una pregunta que un equipo debate y se empareja con una barrera de protección que detecta su manipulación.**

## Visión general y motivación

La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es la advertencia más antigua de la medición. El economista Charles Goodhart observó en 1975, al escribir sobre la política monetaria británica, que una regularidad estadística tiende a desmoronarse cuando las autoridades la presionan con fines de control. La formulación popular llegó después. La antropóloga Marilyn Strathern la expresó en 1997 así: «Cuando una medida se convierte en objetivo, deja de ser una buena medida». Las dos frases dicen lo mismo: en el momento en que se usa un número para dirigir a las personas, las personas dirigen el número.

La misma idea tiene otros nombres. La [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), del científico social Donald Campbell, dice que cuanto más se usa un indicador cuantitativo para tomar decisiones, más expuesto está a presiones de corrupción y más distorsiona los procesos que debía vigilar. El [efecto cobra](https://en.wikipedia.org/wiki/Cobra_effect) es la historia de una recompensa que produjo más de aquello que quería eliminar. Cada uno es un ejemplo de [incentivo perverso](https://en.wikipedia.org/wiki/Perverse_incentive): una recompensa que aleja el comportamiento de lo que quería quien la ofrece.

Los equipos que construyen y operan servicios de TI están especialmente expuestos. La entrega continua y la gestión de servicios de TI (ITSM), tal como la codifica [ITIL](https://en.wikipedia.org/wiki/ITIL), producen un flujo constante de marcas de tiempo, recuentos y estados. Un sistema de tickets registra cuándo se abrió un ticket, cuándo se asignó, cuándo se detuvo el reloj y cuándo se cerró. Una herramienta de entrega registra cuándo empezó y terminó el trabajo. Estos números son baratos de recoger, fáciles de graficar y fáciles de convertir en objetivos. También son fáciles de mover sin ayudar a nadie.

Tres términos se repiten en este tema y en el resto del libro. Una **medida** describe algo. Un **objetivo** es un número que se espera que alguien alcance. Una **barrera de protección** es una segunda medida o una práctica, elegida de antemano, que se movería si la primera medida se estuviera manipulando. El paso de medida a objetivo es donde empiezan los problemas, y la barrera de protección es la forma de notarlo.

Este tema fija la regla que gobierna todos los demás. Cada familia de métricas del libro llega con su vector de manipulación (cómo suele manipularse) y su barrera de protección. Si un tema posterior parece omitirlo, considéralo inacabado.

### Por qué las personas manipulan los números

La manipulación no suele ser deshonestidad. Es la respuesta ordinaria de personas capaces a los incentivos que tienen delante. Actúan cuatro fuerzas.

- **Presión.** La bonificación, la evaluación, la renovación del contrato o la reputación de alguien dependen del número. Incluso sin un vínculo formal, las personas deducen lo que le importa a la dirección por lo que la dirección grafica.
- **Subrogación.** La [subrogación](https://en.wikipedia.org/wiki/Surrogation) es la tendencia a tratar la medida como si fuera aquello que representa. Los investigadores que la estudiaron en organizaciones encontraron que la retribución variable ligada a una medida la hace más probable. Un equipo que sigue los «tickets cerrados» empieza a creer que el objetivo son los tickets cerrados y no los problemas resueltos.
- **Miedo.** Cuando un mal número trae culpas, las personas esconden las malas noticias. Los incidentes se rebajan de categoría, las caídas se reetiquetan como «mantenimiento planificado» y los defectos se registran como solicitudes de funciones.
- **Optimización local.** Un equipo mejora la parte del sistema por la que se le juzga y traslada el costo a una parte por la que no. El centro de servicios cierra rápido y el segundo nivel hereda las repeticiones.

Entender estas fuerzas importa porque el remedio no es una vigilancia más estricta. Es cambiar las condiciones que hacen racional la manipulación.

## Principios clave

- **Mide para aprender, no para juzgar.** Muestra primero los números al equipo que hace el trabajo y úsalos para plantear preguntas.
- **Empareja cada métrica con una barrera de protección.** Velocidad con calidad, volumen con resultado, costo con experiencia.
- **Describe equipos y sistemas, nunca clasifiques a las personas.** Las clasificaciones individuales son la forma más rápida de corromper una fuente de datos.
- **Prefiere resultados y tendencias a objetivos.** Una dirección y una conversación valen más que un umbral.
- **Escribe la definición, incluidos los relojes.** Las definiciones ambiguas son donde se esconde la manipulación.
- **Espera cambios.** Retira o rediseña una métrica cuando deje de informar decisiones.
- **Haz que las malas noticias sean seguras.** Si se castiga la información honesta, los datos mentirán.

## Definiciones de métricas

Las métricas siguientes no son medidas de servicio ni de entrega. Son medidas de la salud de la propia práctica de métricas, y muestran la forma que adopta cada tabla de métricas de este libro. Las tres primeras son ejemplos de barreras de protección que aparecen a lo largo de los temas posteriores.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de barreras de protección | Proporción de las métricas reportadas que tienen una barrera de protección con nombre y seguimiento | métricas con barrera de protección / métricas reportadas | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición y elaboración de informes; mejora continua | Retrospectiva de los acuerdos de trabajo | Trimestral |
| Tasa de reaperturas | Proporción de tickets o elementos de trabajo cerrados que se reabren dentro de una ventana declarada | elementos reabiertos en 14 días / elementos cerrados en el periodo | porcentaje | Historial de estados de la herramienta ITSM o del gestor de incidencias | Gestión de incidentes; gestión de problemas | Definición de terminado; defectos escapados | Mensual |
| Recuento de cambios de definición | Número de cambios en las definiciones de métricas o en los flujos de estados en un periodo, con sus motivos | número de entradas en el registro de cambios de definición | recuento | Registro de cambios del registro de métricas | Medición y elaboración de informes | Acuerdos de trabajo | Trimestral |
| Tasa de uso de métricas | Proporción de las métricas reportadas que se citaron en una decisión durante el periodo | métricas citadas en una decisión registrada / métricas reportadas | porcentaje | Registro de decisiones o notas de revisión | Mejora continua | Acciones de la retrospectiva | Trimestral |
| Brecha de percepción | Diferencia entre el resultado de una encuesta de satisfacción y un nivel de servicio derivado de los tickets para el mismo servicio | tasa derivada de la encuesta menos tasa derivada del gestor | puntos porcentuales | Herramienta de encuestas y herramienta ITSM | Gestión de niveles de servicio | Retroalimentación de la revisión con las partes interesadas | Trimestral |

La tasa de reaperturas cuenta solo los elementos que se reabrieron en el mismo registro. Un elemento cerrado y luego vuelto a plantear como un ticket nuevo no aparece. Parte del sentido de la sección siguiente es que la barrera de protección necesita su propia barrera de protección, como vincular los tickets duplicados con sus originales.

## Recomendaciones

### Diseña el sistema de medición

**1. Empieza por una pregunta, no por un número.** Antes de añadir una métrica, escribe la pregunta que responde y la decisión que informa. «¿Los usuarios ven resueltos sus problemas a la primera?» es una pregunta. «Reducir el tiempo medio de gestión» es un objetivo que finge serlo. Una métrica sin decisión asociada es candidata a retirarse.

**2. Elige métricas en tensión.** Un solo número invita a la sobreoptimización, así que elige parejas que tiren en sentidos opuestos: plazo de entrega con tasa de fallos de cambio, rapidez de cierre de tickets con tasa de reaperturas, disponibilidad con experiencia reportada por los usuarios. La pareja no tiene que ser una fórmula. Tiene que mostrarse junta, en la misma página.

**3. Define los relojes y las exclusiones.** Para cada medida de tiempo, escribe dónde empieza el reloj, dónde se detiene y cuándo puede pausarse. La mayor parte de la manipulación en los datos de servicio vive en estos límites: un ticket puesto en «a la espera del cliente» detiene el reloj del nivel de servicio, y un cambio registrado solo después de aplicarse escapa al plazo de entrega de cambios. Si existe un estado de pausa, informa de con qué frecuencia se usa.

**4. Usa distribuciones y percentiles.** Un promedio de los tiempos de resolución de tickets puede mejorar porque se cerraron deprisa unos pocos tickets fáciles mientras los difíciles envejecen. Muestra la mediana y un percentil alto (por ejemplo el 85 o el 95) y muestra los elementos abiertos más antiguos. La antigüedad de los elementos de trabajo y el ticket abierto más antiguo son difíciles de manipular sin terminar realmente el trabajo (véase el tema 2.1, Medidas de flujo).

**5. Mantén un registro de métricas.** Un registro breve enumera cada métrica, su responsable, su definición, su fuente de datos, su vector de manipulación, su barrera de protección y la fecha de su última revisión. Es aburrido y es el hábito más eficaz de este tema (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Introduce las métricas con seguridad

**6. Muestra primero al equipo y muestra los datos en bruto.** Los equipos que ven los números antes que la dirección están más dispuestos a cuestionar su exactitud. Empieza por los elementos subyacentes, no por el gráfico. Si los datos no sobreviven a una conversación con las personas que los generaron, no sobrevivirán a un panel.

**7. Separa las vistas de aprendizaje de las de rendición de cuentas.** La vista de trabajo de un equipo puede contener muchas medidas, incluidas las feas. Lo que llega a la dirección debe ser un conjunto pequeño y estable. Si la dirección pide la vista de trabajo, espera que la vista de trabajo cambie para quedar mejor.

**8. No ates la retribución, la disciplina ni la clasificación individuales a una métrica.** Se puede pedir a los equipos que expliquen sus números y que los mejoren. Los objetivos individuales sobre recuentos de tickets, puntos de historia o confirmaciones (commits) enseñan a la gente a maximizar el recuento. El enfoque de [indicadores clave de rendimiento](https://en.wikipedia.org/wiki/Key_performance_indicator) puede funcionar cuando los indicadores se eligen para todo el sistema y se revisan con regularidad. Fracasa cuando se convierte en un cuadro de mando por persona.

**9. Haz seguro informar con honestidad.** La [seguridad psicológica](https://en.wikipedia.org/wiki/Psychological_safety) es la creencia de que no te castigarán por hablar de un error o de una inquietud. Una revisión sin culpas de un incidente es un ejemplo de ella en la práctica. Sin ella, los recuentos de incidentes bajan por la razón equivocada: la gente deja de informar.

### Mantén honesto el sistema

**10. Haz una revisión de manipulación.** Una vez por trimestre, plantea al equipo una pregunta sobre cada métrica reportada: «Si quisiéramos que este número se viera bien sin ayudar a nadie, ¿qué haríamos?». Anota las respuestas y comprueba después si la barrera de protección detectaría cada una. El ejercicio es barato, produce ideas útiles y traslada la conversación de la sospecha al diseño.

**11. Audita las definiciones frente a la realidad.** Muestrea un número reducido de elementos cerrados y léelos. ¿Se resolvieron de verdad? ¿Era honesta la prioridad? ¿El estado «a la espera del cliente» significaba que se esperaba realmente al cliente? Una muestra de quince minutos suele decir más que un mes de paneles.

**12. Retira métricas.** Una métrica que no se ha citado en una decisión durante dos trimestres es una carga. Quítala y dilo. Pocas métricas, cada una de confianza, valen más que muchas.

## Vectores de manipulación y barreras de protección

La tabla cubre las métricas de la sección anterior. Los temas posteriores aplican la misma forma a las medidas de servicio y de entrega.

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de barreras de protección | Nombrar una barrera de protección sobre el papel sin hacerle nunca seguimiento | Revisar el registro: una barrera de protección solo cuenta si su último valor aparece en el mismo panel |
| Tasa de reaperturas | Cerrar el ticket y abrir uno nuevo en lugar de reabrirlo; alargar la ventana hasta que las reaperturas queden fuera de ella | Tasa de tickets duplicados y vinculados; recurrencia de la misma causa entre tickets |
| Recuento de cambios de definición | No registrar los cambios para que el recuento se mantenga bajo; cambiar un flujo de trabajo sin avisar a nadie | Comparar el modelo de estados de la herramienta con el registro en cada revisión |
| Tasa de uso de métricas | Citar todas las métricas en un registro de decisiones como mero trámite | Preguntar qué cambió gracias a la cita; muestrear el registro |
| Brecha de percepción | Encuestar solo a usuarios satisfechos; dirigir las encuestas a momentos posteriores a una buena interacción | Tasa de respuesta de la encuesta y composición de los encuestados; comentarios abiertos leídos en voz alta en una revisión |

Una lectura sana es una práctica de métricas que cambia: las definiciones se ajustan por razones que quedan escritas, las métricas vienen y van, y el equipo puede contar la historia de una decisión que cambió un número.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medir sin objetivos | Reduce la manipulación; invita a una conversación honesta | Puede derivar en informes sobre los que nadie actúa |
| Objetivos con barreras de protección | Da dirección y urgencia; la pareja limita la manipulación | Más trabajo de mantenimiento; con el tiempo también se manipula la barrera de protección |
| Métricas individuales | Fáciles de entender; parecen justas | Corrompen los datos; dañan la colaboración |
| Métricas de equipo y de servicio | Reflejan cómo ocurre realmente el trabajo | Más difíciles de atribuir; ocultan necesidades de apoyo individuales |
| Pocas métricas | Más fáciles de confiar y recordar | Puntos ciegos; pueden pasar por alto un problema nuevo |
| Muchas métricas | Cobertura amplia | Diluyen la atención; cada métrica está débilmente gobernada |

La respuesta en prosa es usar los objetivos con moderación, para condiciones bien comprendidas y difíciles de manipular, como un objetivo de nivel de servicio que los usuarios hayan pedido. Incluso entonces, conviene atar el objetivo al servicio, no a la evaluación de una persona. El fin no es quitar los números de la toma de decisiones. Es mantener los números conectados con la realidad manteniendo de tu lado a quienes los producen.

## Preguntas para debatir con tu equipo

**1. ¿Qué número de nuestro panel actual nos tentaría más mejorar sin mejorar el trabajo?**
Empieza por la métrica que la gente mira primero y pasa después a aquella por la que pregunta la dirección. Pide movimientos concretos: ¿qué haríamos con los datos si estuviéramos bajo presión? El facilitador debe anotar cada respuesta sin juzgarla, porque la lista se convierte en los vectores de manipulación del registro. Termina preguntando cuáles de esos movimientos detectarían nuestras barreras de protección y cuáles no.

**2. ¿Dónde empieza y se detiene el reloj en nuestra medida de tiempo más importante, y quién lo decidió?**
Pide al grupo que dibuje en una pizarra el ciclo de vida del ticket o del elemento de trabajo y marque cada estado. Busca estados en los que el tiempo pueda desaparecer, como la espera del cliente o la suspensión. Cuenta con qué frecuencia se usa cada estado y quién lo usa. La conversación suele revelar que dos equipos usan la misma palabra de forma distinta.

**3. ¿Cuándo nos llevó por última vez un número a hacer algo poco útil?**
Invita a contar historias, no a culpar. Ejemplos comunes son cerrar tickets antes de verificar, dividir cambios para elevar los recuentos de despliegues o reclasificar un incidente para evitar un informe de incumplimiento. El facilitador debe preguntar qué intentaba proteger la persona. La respuesta suele mostrar el incentivo que hay que cambiar.

**4. ¿Quién ve nuestras métricas y qué les ocurre allí?**
Sigue cada métrica desde el equipo hasta su audiencia. Pregunta si alguna versión de ella se usa para comparar equipos o personas. Pregunta qué mostraría el equipo si la audiencia fuera otra. Donde el equipo cambiaría los números que muestra, hay una brecha de confianza de la que hablar con la audiencia.

**5. ¿Cuál es la barrera de protección de cada una de nuestras cinco métricas más importantes, y está en la misma página?**
Haz una lista de dos columnas en una pizarra. Si una métrica no tiene barrera de protección, acuerden una candidata y un responsable que la pruebe durante un trimestre. Si existe una barrera de protección pero rara vez se consulta, hablad de por qué. Evita elegir una barrera de protección que sea meramente la inversa de la métrica, porque no aporta nada nuevo.

**6. ¿Qué métrica deberíamos retirar este trimestre?**
Pide pruebas: ¿cuándo se usó por última vez en una decisión? Si nadie lo recuerda, retírala a modo de prueba y mirad si alguien lo nota. El facilitador debe tratar la retirada como un hecho normal. Los equipos que nunca abandonan métricas acaban con informes en los que nadie confía ni lee.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega se topan con la manipulación a través de la velocidad, el caudal y los recuentos de despliegues. La [velocidad](https://en.wikipedia.org/wiki/Velocity_(software_development)) en particular es una herramienta de planificación para un equipo, no una medida de productividad, y comparar equipos con ella lleva a estimaciones infladas. Los equipos de entrega deben guardar para sí sus medidas de trabajo, publicar hacia fuera un conjunto pequeño y emparejar cada medida de velocidad con una de calidad (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y de operaciones

Los equipos de servicio se topan con la manipulación a través del tiempo de resolución, la resolución en el primer contacto y el cumplimiento de niveles de servicio. Los estados que pausan el reloj y los campos de prioridad son los puntos habituales de desviación. Los equipos de operaciones deben auditar con regularidad las transiciones de estado, informar del uso de los estados de pausa y vigilar los contactos repetidos y la tasa de reaperturas junto a la velocidad. Los equipos de guardia deben ser especialmente cuidadosos con las medidas que premian no recibir avisos, ya que castigan las alertas honestas (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes fijan los incentivos, a menudo sin pretenderlo. Una pregunta formulada en una revisión («¿por qué esto está en rojo?») enseña al equipo qué esconder. Los líderes deben preguntar qué aprendió el equipo de un número, mantener las clasificaciones fuera de la sala, proteger la información franca y financiar el trabajo de mejora que revela un mal número. Los órganos de gobernanza deben esperar el registro de métricas y la revisión de manipulación como parte de los informes, y tratar como normal un cambio definido en una métrica.

### Clientes y usuarios

Los usuarios experimentan el efecto de la manipulación como un servicio que luce bien sobre el papel y se siente deficiente en la práctica: un ticket cerrado que no se arregló, una caída etiquetada como planificada, una encuesta que nunca les llegó. Los usuarios son también la mejor barrera de protección. Su retroalimentación, en forma de encuestas, quejas y comentarios, debe situarse junto a los números operativos y leerse íntegra, no reducida a una puntuación (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional gestiona un centro de servicios y varios equipos de producto que construyen aplicaciones clínicas. Los números de este ejemplo son ilustrativos.

La dirección fija el objetivo de cerrar el 90 por ciento de los incidentes en el plazo acordado. En dos meses el panel muestra el 94 por ciento. La responsable de operaciones de servicio está contenta pero inquieta, porque el personal clínico se queja más, no menos. Pide al equipo que haga una revisión de manipulación sobre la métrica.

El equipo esboza el ciclo de vida del ticket. Descubre que los tickets pasan a «a la espera del cliente» dos veces de media cada uno y que el tiempo en ese estado ha crecido. Una muestra de 30 tickets cerrados muestra que 7 se cerraron con la nota «sin respuesta del usuario» tras un solo intento de llamada. También descubren que la tasa de reaperturas es estable solo porque se decía a los usuarios que «abrieran un ticket nuevo» cuando el problema volvía.

El equipo hace tres cambios. Primero, el gráfico de tiempo de resolución muestra ahora la mediana, el percentil 90 y el ticket abierto más antiguo, junto con la proporción de tiempo pasado en estados de pausa. Segundo, el panel añade una tasa de contactos repetidos, definida como la proporción de tickets nuevos del mismo usuario sobre el mismo servicio en 14 días. Tercero, una breve encuesta llega a una muestra aleatoria de tickets cerrados, y sus comentarios abiertos se leen en la revisión mensual.

Tres meses después la cifra principal de cumplimiento baja al 88 por ciento, lo que parece una mala noticia. Sin embargo, la tasa de contactos repetidos ha bajado y los comentarios de la encuesta sobre problemas sin resolver son menos frecuentes. La responsable de operaciones dice a la dirección que el número antiguo estaba inflado y que el cuadro nuevo es más honesto, y les pide que acepten un objetivo de nivel de servicio basado en la definición corregida. La decisión, anotada en el registro de decisiones, es fijar el objetivo tras un trimestre más de datos y no de inmediato.

## Agilidad, IA, automatización y analítica

### Agilidad

Los bucles de retroalimentación cortos permiten a un equipo notar pronto la manipulación. Una práctica que encaja bien es leer unos pocos elementos en bruto en cada revisión regular y compararlos con la cifra principal, con las partes interesadas presentes. La precaución es que un bucle que premia la rapidez de los informes puede convertirse a su vez en un objetivo, así que mantén el propósito de cada revisión centrado en aprender.

### IA

La IA cambia el aspecto de la manipulación. Un modelo puede producir en volumen notas de resolución, actualizaciones de estado o categorías de tickets verosímiles, de modo que una métrica que cuenta esos artefactos puede satisfacerse sin trabajo real. Empareja todo recuento influido por la IA con una comprobación humana de calidad por muestreo e informa de la proporción de la salida de la IA que una persona modificó. La precaución es que una tasa baja de correcciones puede significar buenos borradores o una revisión descuidada, así que lee ambas cosas juntas.

### Automatización

La recogida automática elimina las ediciones manuales de los datos, lo que cierra algunas vías de manipulación. Automatiza la barrera de protección además de la métrica, para que ambas aparezcan en la misma página. La precaución es que entonces se manipulan las entradas que lee la automatización, como la categoría del ticket o el estado de pausa, así que audita las definiciones frente a una muestra de elementos reales.

### Analítica

El análisis puede revelar manipulación mediante distribuciones extrañas, como un pico de tickets cerrados justo antes de una fecha límite de informes, o un grupo situado exactamente en el valor objetivo. Usa esos patrones para abrir una conversación, no como prueba de mala intención. La precaución es que toda regla de detección acaba conociéndose y evitándose, así que rota las barreras de protección y mantén a una persona en la revisión.

## Perspectiva sectorial

**Startup.** Los equipos pequeños tienen pocas métricas y mucha confianza, lo cual ayuda. El peligro es importar demasiado pronto un panel empresarial grande. Empieza con dos o tres medidas que los fundadores usen de verdad, escribe sus definiciones y manténlas alejadas de las conversaciones sobre el desempeño individual.

**Pequeña empresa.** Los recursos son escasos y la persona que dirige TI suele rendir cuentas directamente al propietario. Una sola queja de un cliente puede pesar más que cualquier panel. Mantén el conjunto pequeño, prefiere la retroalimentación directa de los usuarios y trata con cierta cautela los informes que aportan los proveedores, ya que el proveedor tiene sus propios incentivos.

**Gran empresa.** La escala multiplica tanto la demanda de números comparables como la presión para manipularlos. Usa un conjunto estándar pequeño con definiciones escritas, mantén separadas las vistas de trabajo de los equipos de las consolidaciones y evita comparar equipos que trabajan en tipos de servicios distintos. Un registro de métricas y una cadencia de revisión se vuelven esenciales.

**Gobierno y sector público.** Las obligaciones de información y los niveles de servicio contractuales pueden hacer que algunos objetivos no sean negociables. Trátalos como datos de diseño: cúmplelos, muestra la barrera de protección a su lado e informa de las definiciones usadas. La rendición de cuentas pública eleva el costo de ocultar las malas noticias, así que crea canales internos seguros y sé transparente sobre las definiciones corregidas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo de aplicar este tema es sobre todo tiempo: unas horas para escribir definiciones y un registro, una breve revisión trimestral de manipulación y un muestreo ocasional de elementos cerrados. Hay poco costo de herramientas. El costo mayor es la atención de la dirección, porque la disciplina solo funciona si quienes leen los números se comportan con coherencia.

El retorno proviene del desperdicio evitado y de mejores decisiones. Las decisiones tomadas con datos corrompidos pueden dirigir la inversión al problema equivocado, como dotar de personal al centro de servicios para cerrar tickets más deprisa cuando el problema real son los contactos repetidos causados por un defecto. La manipulación también erosiona la confianza entre el equipo y las personas que dependen de él, lo cual es difícil de reparar. Describe el beneficio en el patrón, no con un porcentaje inventado: menos reversiones de decisiones, menos sorpresas en las auditorías y mejor concordancia entre los números operativos y la experiencia del usuario. Si necesitas cifras para un caso de negocio, mide tus propias líneas base, como la brecha de percepción y la tasa de contactos repetidos, antes y después del cambio.

## Antipatrones y trampas

- **Objetivos sin barreras de protección.** Un objetivo solitario se cumple por cualquier vía disponible. Añade una medida emparejada antes de anunciar el objetivo.
- **Clasificaciones de personas o de equipos.** Invitan a la manipulación y desalientan la ayuda entre equipos. Muestra a cada equipo su propia tendencia, con contexto.
- **Métricas como castigo.** Un número en rojo que trae culpas se pondrá en verde por ocultación. Pregunta en su lugar qué necesita el equipo.
- **Promedios de datos asimétricos.** Ocultan la cola donde sufren los usuarios. Usa percentiles y la antigüedad del elemento más antiguo.
- **Cambiar las definiciones en silencio.** Las líneas de tendencia dejan de tener sentido. Registra cada cambio con su motivo y márcalo en el gráfico.
- **Tratar la barrera de protección como el nuevo objetivo.** Entonces la barrera de protección se manipula. Revisa ambas juntas y rota las barreras de protección cuando pierdan eficacia.
- **Métricas de vanidad.** Los recuentos que solo suben, como los tickets gestionados o las confirmaciones realizadas, no dicen nada de los resultados. Prefiere medidas que puedan bajar además de subir.
- **Ignorar la evidencia cualitativa.** Los números por sí solos no pueden mostrar que un ticket cerrado se sintió sin resolver. Lee los comentarios.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Informales; cada persona cuenta de forma distinta | Escritas para algunas métricas | Una definición escrita por métrica, con relojes y exclusiones | Definiciones revisadas y cambios registrados con sus motivos | Definiciones alineadas entre equipos y proveedores, revisadas cuando dejan de informar decisiones |
| Barreras de protección | Ninguna | Con nombre para algunas métricas | Cada métrica reportada tiene una barrera de protección en la misma página | Barreras de protección revisadas cada trimestre por si hay manipulación | Las barreras de protección rotan y se codiseñan con las personas medidas |
| Uso y seguridad | Números usados para repartir culpas | El equipo ve sus propios números | El equipo ve primero los datos; sin clasificaciones individuales | La dirección hace preguntas de aprendizaje; informar es seguro | Clientes y proveedores comparten una visión franca de los números |

## Lista de verificación

- [ ] Cada métrica reportada tiene una pregunta escrita y una decisión a la que informa.
- [ ] Toda medida de tiempo tiene una regla escrita de inicio, parada y pausa.
- [ ] Cada métrica reportada tiene una barrera de protección con nombre mostrada a su lado.
- [ ] Las medidas de tiempo muestran percentiles y la antigüedad del elemento abierto más antiguo.
- [ ] Existe un registro de métricas con responsable, definición, vector de manipulación, barrera de protección y fecha de revisión.
- [ ] El equipo ve sus datos antes que la dirección.
- [ ] Ninguna clasificación, retribución ni medida disciplinaria individual está vinculada a una métrica.
- [ ] Hay una revisión trimestral de manipulación en el calendario.
- [ ] Cada trimestre se lee una muestra de elementos cerrados para comprobar su honestidad.
- [ ] Al menos una métrica se ha retirado o rediseñado en el último año.

## Prompts de IA

**Haz una revisión de manipulación de una métrica.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Redacta una entrada del registro de métricas.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Audita una muestra de tickets cerrados.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Planifica cómo introducir una métrica con seguridad.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica que estás a punto de introducir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que un tema de métrica nuevo lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Una medida que se convierte en objetivo deja de describir el trabajo, así que usa los números para plantear preguntas.
- La manipulación es una respuesta normal a la presión y al miedo, y se reduce cambiando las condiciones, no con vigilancia.
- Cada métrica necesita una definición escrita con sus relojes y una barrera de protección mostrada a su lado.
- Prefiere percentiles y la antigüedad del elemento más antiguo a los promedios.
- Describe equipos y servicios, nunca clasifiques a las personas, y deja que el equipo vea primero sus datos.
- Revisa cada trimestre si hay manipulación y retira las métricas que ya no informan decisiones.

## Referencias y lecturas complementarias

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
