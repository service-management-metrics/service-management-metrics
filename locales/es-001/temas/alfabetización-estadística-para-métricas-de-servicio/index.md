# Alfabetización estadística para métricas de servicio

**Los datos de tickets y de flujo son asimétricos, irregulares y a menudo escasos, así que reporta medianas y percentiles altos en lugar de promedios, di cuántos elementos hay detrás de cada tasa y distingue la variación ordinaria del cambio real antes de que nadie reaccione.**

## Visión general y motivación

La mayoría de las métricas de servicio llegan como un único número en un panel: tiempo medio de resolución, porcentaje de incidentes resueltos dentro del objetivo, tickets cerrados esta semana. Un solo número parece preciso. Normalmente es un resumen comprimido de una colección desordenada de eventos, y la compresión decide lo que ve el lector. La alfabetización estadística, para los fines de este libro, es el pequeño conjunto de hábitos que mantiene honesto el resumen: elegir un resumen que se ajuste a la forma de los datos, saber cuántos datos hay detrás y distinguir un cambio real del ruido.

La forma de los datos de servicio es el primer problema. Las medidas de tiempo, como el tiempo de resolución, el tiempo de ciclo y el tiempo de espera, están acotadas en cero y tienen una cola larga a la derecha. La mayoría de los elementos terminan pronto y unos pocos tardan mucho. Los datos así son [asimétricos](https://en.wikipedia.org/wiki/Skewness), y la media aritmética es arrastrada hacia la cola, de modo que un solo ticket atascado puede mover el promedio más que cien rutinarios. La [mediana](https://en.wikipedia.org/wiki/Median), el valor central cuando los elementos se ordenan, se ve mucho menos afectada. Un [percentil](https://en.wikipedia.org/wiki/Percentile) la generaliza: el percentil 85 es el valor dentro del cual termina el 85 por ciento de los elementos. Las duraciones de este tipo suelen modelarse con una [distribución log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), en la que el logaritmo del valor es simétrico. La lección es que «típico» y «promedio» difieren en los datos asimétricos.

El tamaño de la muestra es el segundo problema. Un equipo que resuelve 12 incidentes de prioridad 1 en un trimestre y reporta «83 por ciento dentro del objetivo» está describiendo 10 de 12. Un fallo más movería la cifra ocho puntos. La afirmación honesta incluye el recuento y a menudo un rango. Un [intervalo de confianza](https://en.wikipedia.org/wiki/Confidence_interval) es un rango calculado a partir de los datos que expresa hasta qué punto el valor verdadero podría estar plausiblemente alejado del observado. Los intervalos son anchos para muestras pequeñas y estrechos para las grandes, que es el mensaje correcto para un trimestre con 12 incidentes.

La variación es el tercer problema. Todo proceso produce números que oscilan de una semana a otra sin que haya cambiado nada. Walter Shewhart, trabajando en la calidad de la fabricación en la década de 1920, separó esta oscilación rutinaria de las señales que merecen investigación y nos dio el [gráfico de control](https://en.wikipedia.org/wiki/Control_chart). Aplicar gráficos como este a un proceso se llama [control estadístico de procesos](https://en.wikipedia.org/wiki/Statistical_process_control). Parte de este último error es la [regresión a la media](https://en.wikipedia.org/wiki/Regression_toward_the_mean): a un valor extremo tiende a seguirle uno menos extremo, de modo que la semana posterior a una semana terrible parece una recuperación haya hecho alguien algo o no.

La práctica ágil de flujo, como el uso que hace la Kanban Guide de los percentiles del tiempo de ciclo y de la antigüedad de los elementos de trabajo, ya pide distribuciones y pronósticos expresados como probabilidades (véase el tema 2.1, Medidas de flujo). En ITIL 4, la práctica de medición y elaboración de informes y la de mejora continua dependen ambas de medidas que signifiquen lo que parecen significar, y la gestión de niveles de servicio depende de objetivos fijados frente a una variación realista. La alfabetización estadística es la capa compartida bajo ambas. También respalda la barrera de protección del tema 1.2, Ley de Goodhart y psicología de las métricas: un equipo que muestra toda la distribución tiene menos sitios donde esconder un promedio manipulado.

La variación de causa común está integrada en un proceso, y la variación de causa especial procede de algo concreto que cambió o fue mal. Un acuerdo de nivel de servicio (SLA) es un compromiso documentado con un cliente, y un objetivo de nivel de servicio (SLO) es una meta para una medida.

## Principios clave

- **Ajusta el resumen a la forma.** Usa medianas y percentiles para las duraciones y muestra la distribución completa cuando la decisión importe. Reserva la media para datos aproximadamente simétricos o para totales como el costo.
- **Cada tasa lleva su recuento.** Un porcentaje sin numerador y denominador es una afirmación sin evidencia. Por debajo de un recuento mínimo declarado, muestra los elementos en bruto en lugar de una tasa.
- **La variación ordinaria no es noticia.** Conoce el rango normal de una medida antes de reaccionar. Responde a las señales, no a cada movimiento.
- **La incertidumbre es parte de la respuesta.** Expresa los pronósticos como probabilidades («el 85 por ciento de los elementos termina en 9 días») y las estimaciones como rangos, y resiste la falsa precisión.
- **Muestra las distribuciones al equipo que posee el trabajo.** Los elementos en bruto y los histogramas hacen visibles los casos inusuales y dificultan la manipulación discreta.
- **La correlación, la selección y el momento explican muchas «mejoras».** Pregunta qué más cambió, quién quedó fuera de los datos y si el punto de partida era inusualmente malo.
- **Mantén proporcionada la estadística.** Un equipo necesita un puñado de técnicas usadas con coherencia, no un curso de estadística. Explica cada gráfico con palabras sencillas.

## Definiciones de métricas

Las métricas siguientes describen la calidad estadística de una práctica de métricas y la distribución del trabajo de servicio. Las medidas de tiempo usan los relojes indicados en cada fila, y las definiciones están pensadas para ser reutilizadas por los temas que siguen (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo mediano de resolución | El tiempo de resolución central de los incidentes resueltos en el periodo | percentil 50 de (marca de resolución menos marca de creación) sobre los incidentes resueltos en el periodo; el reloj empieza en la creación del ticket y se detiene en la resolución; las pausas se reportan por separado, no se restan; se excluyen los tickets cancelados y duplicados | horas o días | Historial de estados de la herramienta ITSM | Gestión de incidentes; medición y elaboración de informes | Tiempo de ciclo mediano | Semanal o mensual |
| Tiempo de resolución en percentil alto | El tiempo dentro del cual se resuelve la mayoría de los incidentes, con el percentil nombrado | percentil 85 (o 95) del mismo tiempo transcurrido anterior; se calcula solo si se resolvieron al menos 20 elementos; de lo contrario se enumeran los elementos en bruto | horas o días | Historial de estados de la herramienta ITSM | Gestión de incidentes; gestión de niveles de servicio | Pronóstico por percentil del tiempo de ciclo | Semanal o mensual |
| Antigüedad del elemento abierto más antiguo | Antigüedad del elemento más antiguo que sigue abierto, más el recuento de elementos más antiguos que el percentil alto | ahora menos marca de creación para los elementos abiertos, sin restar pausas; cuenta todos los elementos abiertos de la cola del servicio, incluidos los que esperan al cliente | días | Herramienta ITSM o gestor de incidencias | Gestión de incidentes; gestión de problemas | Antigüedad del elemento de trabajo | Semanal |
| Cobertura de la elaboración de informes de tasas | Proporción de las tasas reportadas que muestran el numerador, el denominador y una comprobación del recuento mínimo | tasas reportadas con recuentos y un indicador de muestra / tasas reportadas; cuenta solo las tasas publicadas en el paquete de revisión del periodo | porcentaje | Registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas) | Medición y elaboración de informes | Acuerdos de trabajo | Trimestral |
| Tasa de señales del gráfico de control | Proporción de los puntos del gráfico de control de una medida que señalan variación de causa especial según las reglas escritas del equipo | puntos señalados según las reglas / puntos graficados, sobre los últimos 20 o más puntos; las reglas se fijan de antemano y se registran | porcentaje | Herramienta de gráficos de control u hoja de cálculo | Mejora continua | Inspección retrospectiva del proceso | Mensual |
| Anchura del intervalo | Anchura del rango de incertidumbre declarado sobre una tasa principal | límite superior menos límite inferior del intervalo, con el método nombrado en el registro, para la tasa principal del periodo | puntos porcentuales | Calculado a partir de recuentos de ITSM | Gestión de niveles de servicio | Rango de pronóstico en la planificación | Mensual |

Cuando un contrato nombre una media, reporta la cifra contractual y muestra a su lado la mediana y el percentil.

## Recomendaciones

### Resume los datos de tiempo con honestidad

**1. Usa por defecto la mediana y un percentil alto con nombre.** Para el tiempo de resolución, el tiempo de ciclo y el tiempo de cumplimiento, publica juntos la mediana y el percentil 85 o 95 y escribe el percentil en el nombre de la métrica. La mediana dice qué es típico, y el percentil alto dice qué se puede prometer razonablemente a un cliente. Si tienes que elegir un solo número para un compromiso, elige el percentil.

**2. Muestra la forma además del resumen.** Un histograma o un diagrama de dispersión del tiempo de resolución por fecha de cierre muestra agrupaciones, colas largas y cambios bruscos que ningún resumen muestra. Cuando la imagen y el número discrepan, cree a la imagen e investiga el número.

**3. Añade la antigüedad del elemento abierto más antiguo.** Los percentiles del trabajo terminado miran hacia atrás e ignoran todo lo que sigue atascado. Reporta el elemento abierto más antiguo y cuántos elementos abiertos son ya más antiguos que tu percentil alto (véase el tema 2.1, Medidas de flujo). Es el correctivo más útil para los promedios que mejoran porque se deja envejecer a los elementos difíciles.

### Respeta las muestras pequeñas y la incertidumbre

**4. Publica el recuento con cada tasa.** Escribe «10 de 12 resueltos dentro del objetivo» en lugar de «83 por ciento». Añade una regla por la que las tasas basadas en menos de un número declarado de elementos se muestren como recuentos o como los elementos subyacentes. El umbral es un juicio: escríbelo, revísalo y aplícalo en todas partes.

**5. Usa intervalos para las tasas principales y los pronósticos.** Para una proporción como la parte de cambios que fallan, calcula un intervalo de confianza con un método que tu equipo acuerde y anota el método en el registro. Para los pronósticos de entrega, un rango basado en muestras (por ejemplo, «probablemente entre 8 y 14 elementos por semana») dice más a los planificadores que una sola cifra de caudal. Si el intervalo es demasiado ancho para informar una decisión, dilo.

### Distingue la señal del ruido

**6. Dibuja gráficos de control para las medidas sobre las que actúas.** Un sencillo gráfico de individuos traza cada punto en orden temporal con una línea central y límites calculados a partir de los datos, y señala los puntos fuera de los límites o las rachas a un lado del centro. Empieza con la mediana semanal del tiempo de resolución y el volumen semanal. Escribe una sola vez las reglas de señal (por ejemplo, un punto más allá de los límites o una racha de ocho a un lado) y mantenlas fijas, para que el equipo no ajuste las reglas hasta que el gráfico concuerde con sus sensaciones.

**7. Actúa sobre las señales y deja en paz la variación de causa común.** Cuando un punto está dentro de los límites, resiste la explicación: es el proceso comportándose como lo hace normalmente. Cuando aparece una señal, pregunta qué cambió esa semana: una versión, un hueco de personal, una caída de un proveedor, una categoría nueva. Si el proceso es estable pero insatisfactorio, la mejora es un cambio en el sistema, no una conversación con quien tuvo la semana en rojo.

**8. Espera regresión a la media tras un periodo extremo.** Si lanzas una iniciativa en el peor mes del año, seguirá alguna mejora por puro azar. Compara con una línea base más larga, con un servicio similar que no cambió o con los límites de control antes de atribuir el mérito a la iniciativa. Un par antes-después de dos puntos es la forma más débil de evidencia.

### Razona con cuidado sobre la causa y la selección

**9. Pregunta qué falta en los datos.** Las respuestas de las encuestas vienen de personas que eligieron responder. Los tickets cerrados excluyen los que siguen abiertos. Antes de sacar una conclusión, enumera quién o qué está ausente y cómo eso podría inclinar el resultado.

**10. Cambia las definiciones a propósito y márcalo en el gráfico.** Un nuevo modelo de estados, una nueva matriz de prioridades o una nueva lista de categorías cambia los datos sin cambiar el trabajo. Anota cada cambio en el gráfico y reinicia los límites de control después de él (véase el tema 1.5, Fuentes de datos e instrumentación).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo mediano de resolución | Cerrar primero los tickets rápidos y dejar abiertos los difíciles; dividir un ticket en varios fáciles; pausar el reloj en un estado de espera del cliente | Tiempo de resolución en percentil alto y antigüedad del elemento abierto más antiguo; proporción de tiempo en estados de pausa; tasa de tickets vinculados |
| Tiempo de resolución en percentil alto | Elegir un percentil que favorezca el resultado o cambiarlo entre informes; excluir casos largos como «atípicos» o reclasificarlos | Percentil fijado en el registro; lista de elementos excluidos con sus motivos; antigüedad del elemento abierto más antiguo |
| Antigüedad del elemento abierto más antiguo | Cerrar o fusionar el elemento más antiguo sin resolverlo; trasladarlo a otra cola o categoría | Tasa de reaperturas; auditoría por muestreo de los cierres más antiguos; recuento de traslados entre colas |
| Cobertura de la elaboración de informes de tasas | Adjuntar un recuento en letra pequeña mientras los titulares siguen encabezándose con el porcentaje; fijar el recuento mínimo tan bajo que nunca se activa | Revisar el panel real, no el registro; revisar el recuento mínimo junto con la anchura del intervalo |
| Tasa de señales del gráfico de control | Ensanchar los límites, añadir reglas o reiniciar la línea base para que desaparezcan las señales; mover puntos cambiando la medida | Reglas y límites guardados en el registro con historial de cambios; comparar con el histograma en bruto |
| Anchura del intervalo | Elegir un método o ventana que produzca un rango estrecho; agrupar servicios distintos para ampliar la muestra | Método nombrado en el registro; desglose por servicio disponible a petición; comparar los resultados agrupados y sin agrupar |

Una lectura sana muestra medianas y percentiles que se mueven en la misma dirección que la experiencia de los usuarios, una lista corta de elementos antiguos que se reduce sin reclasificarse en silencio y tasas que aparecen con sus recuentos. La tasa de señales del gráfico de control debe ser baja y distinta de cero: un gráfico que nunca señala puede ser incapaz de hacerlo, y uno que señala siempre refleja un proceso inestable o reglas mal elegidas.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Tiempo medio de resolución | Sencillo, coincide con muchos contratos, fácil de totalizar | Dominado por la cola; oculta lo que los clientes viven normalmente |
| Mediana más percentil alto | Resiste los valores atípicos; respalda las promesas a los clientes | Requiere una pequeña explicación; los percentiles necesitan suficientes elementos para ser estables |
| Tasas en bruto sin recuentos | Compactas y familiares | Ocultan las muestras pequeñas e invitan a una lectura excesiva |
| Tasas con recuentos e intervalos | Honestas sobre la incertidumbre; desalientan la reacción excesiva | Parecen menos decididas; los métodos de intervalo requieren acuerdo |
| Gráficos de control | Separan la señal del ruido; guían cuándo actuar | Necesitan suficientes puntos y definiciones estables; los límites pueden malinterpretarse o manipularse |
| Comparación antes-después | Rápida y fácil de comunicar | Propensa a la regresión a la media y a cambios coincidentes |

Para un servicio con un puñado de incidentes al año ninguna estadística es estable, y el método correcto es leer cada incidente. Para un centro de servicios de alto volumen, las medidas conscientes de la distribución son baratas y claramente superiores. Elige según el volumen y lo que está en juego en la decisión.

## Preguntas para debatir con tu equipo

**1. ¿Cuál de los números de nuestro panel actual es un promedio de algo asimétrico y qué mostrarían la mediana y el percentil 95?**
Elige la medida de tiempo más vigilada y calcula las tres sobre el mismo conjunto de elementos antes de la reunión. Pregunta si la historia que cuenta el promedio coincide con lo que dicen los usuarios. Termina acordando qué resumen pasa a ser el titular y dónde aparecerán los demás.

**2. ¿Cuántos elementos hay detrás de nuestro porcentaje más citado y lo seguiríamos citando si escribiéramos los recuentos?**
Enumera los tres porcentajes que más lee la dirección. Junto a cada uno, escribe el numerador y el denominador del último periodo. Pregunta qué haría un éxito o un fallo adicional con la cifra. Acordad un recuento mínimo por debajo del cual el equipo muestre los elementos en lugar de una tasa.

**3. ¿Cuándo atribuimos por última vez una mejora a una iniciativa y qué más era cierto en ese momento?**
Elige una historia de éxito reciente. Pregunta cuándo estaba la medida en su peor punto, qué aspecto tiene el historial más largo y si un servicio comparable también mejoró. Mantén un tono curioso.

**4. ¿Cuál es el rango normal de nuestras medidas clave y quién podría decir que una semana dada es inusual?**
Grafica los últimos 20 o más valores semanales de una medida y dibuja el centro y los límites, o calcúlalos de forma aproximada. Pregunta ante qué semanas reaccionó el equipo que estaban dentro del rango. Acordad quién posee el gráfico y dónde se escriben las reglas de señal.

**5. ¿Quién o qué falta en nuestros datos?**
Enumera las fuentes de la medida: tickets cerrados, respuestas de encuestas, servicios monitorizados, herramientas con marcas de tiempo. Para cada una, pregunta a quién se excluye y por qué. Recoge cada laguna como una corrección o una salvedad.

**6. ¿Cómo explicaríamos a la dirección un rango amplio o un «todavía no lo sabemos» sin que suene a excusa?**
Ensaya la redacción con un ejemplo real: «Entre el 70 y el 95 por ciento, sobre 12 incidentes; esperamos acotarlo tras el próximo trimestre». Pregunta qué necesita decidir la audiencia y si el rango cambia la decisión. Redacta un guion breve en la reunión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega usan el tiempo de ciclo y el caudal para pronosticar, y se benefician sobre todo de pronósticos basados en percentiles en lugar de promedios (véase el tema 2.1, Medidas de flujo). Un pronóstico expresado como un rango con una probabilidad es más fácil de defender que una fecha. Resiste la tentación de leer el cambio de un periodo como una tendencia (véase el tema 2.5, Métricas de pronóstico y planificación de entregas).

### Equipos de servicio y de operaciones

Los equipos de operaciones poseen los datos de los tickets y los relojes de los incidentes, por lo que están en la mejor posición para publicar medianas, percentiles y el elemento abierto más antiguo, y para explicar las reglas de pausa. Deben graficar el volumen semanal y el tiempo de resolución con límites de control para que un cambio real, como una versión defectuosa, se distinga de una mala semana. Cuando un servicio tiene pocos incidentes, deben revisar cada uno en lugar de calcular tasas (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes).

### Liderazgo y gobernanza

Los líderes hacen las preguntas que moldean lo que muestran los equipos. Preguntar «¿por qué ha subido esto?» ante cada oscilación entrena a la organización a explicar el ruido y a esconderlo. Los líderes deben preguntar si un movimiento está dentro del rango normal, cuántos elementos hay detrás de una cifra y qué ha cambiado en el proceso. Los órganos de gobernanza pueden exigir recuentos en las tasas principales.

### Clientes y usuarios

Los clientes viven casos individuales, no promedios. Recuerdan la solicitud que tardó cinco semanas, y un promedio de dos días no repara ese recuerdo. Los compromisos por percentil («nueve de cada diez solicitudes en tres días laborables») encajan mejor con el modelo mental del cliente que los tiempos medios. Los resultados de las encuestas deben mostrarse con los recuentos de respuestas, y los comentarios abiertos deben leerse junto con los números (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio tiene un centro de servicios y un equipo de operaciones que da soporte a su tienda web. Las cifras siguientes son ilustrativas.

La dirección ve un titular mensual: «el tiempo medio de resolución de incidentes bajó de 9,1 horas a 7,4 horas». Se pide a la responsable de operaciones que lo confirme y presente el plan para el siguiente objetivo, 6 horas. Antes de aceptar, pide al analista que extraiga los elementos subyacentes y los grafique. De 240 incidentes en el mes (ilustrativo), la mediana es de 2,5 horas, el percentil 85 es de 14 horas y 9 incidentes tienen más de 5 días y siguen abiertos. El mes anterior, la mediana fue de 2,6 horas. El promedio bajó porque tres incidentes muy largos del mes anterior, uno de ellos de 11 días, se resolvieron antes en el periodo, y porque un lote de tickets de restablecimiento de contraseña se recategorizó a un tipo de solicitud de cierre rápido.

El equipo grafica la mediana semanal de las últimas 26 semanas. La línea central se sitúa cerca de 2,6 horas y todos los puntos de los dos últimos meses están dentro de los límites. La caída del titular no es una señal. La recategorización de la segunda semana cambió la definición a mitad del gráfico, de modo que el equipo la marca y reinicia los límites desde ese punto.

Deciden tres cambios. El informe mensual mostrará la mediana, el percentil 85 y el elemento abierto más antiguo, con el número de incidentes detrás de cada uno. El objetivo propuesto de 6 horas de promedio se sustituye por una conversación sobre un objetivo por percentil, que se fijará tras un trimestre de datos con la nueva definición. El equipo también enumerará los 9 incidentes antiguos con un responsable y un siguiente paso para cada uno.

El riesgo de manipulación que detectan llega en la revisión siguiente. Un gerente propone cerrar los 9 incidentes más antiguos como «ya no reproducibles» para que la cifra del elemento más antiguo parezca sana. Como el registro empareja la antigüedad del elemento abierto más antiguo con la tasa de reaperturas y una auditoría por muestreo de los cierres antiguos, el equipo lee tres de los cierres propuestos, descubre que dos siguen vivos y los mantiene abiertos. La cifra del elemento más antiguo sigue siendo incómoda un mes más. Ese es el comportamiento previsto.

## Agilidad, IA, automatización y analítica

### Agilidad

La entrega frecuente produce muchas muestras pequeñas, lo cual es bueno para ver el cambio, pero cada muestra es pequeña. Una práctica útil es mostrar gráficos de control sobre una ventana móvil y comentar en las revisiones periódicas solo las señales, no cada vaivén. La precaución es evitar reaccionar al ruido: un equipo que cambia de rumbo tras cada bajón nunca verá el efecto de ningún cambio.

### IA

El trabajo asistido por IA suele desplazar toda la distribución, como primeras respuestas más rápidas con una calidad más variable. Compara antes y después con percentiles y con el elemento más antiguo, y empareja la velocidad con una medida de calidad. La precaución es que un cambio de modelo puede alterar los datos a mitad de una tendencia, así que marca en el gráfico los cambios de modelo y de prompt.

### Automatización

Automatiza el cálculo y la presentación de medianas, percentiles altos, recuentos e intervalos, para que la forma correcta sea la predeterminada y nadie recalcule a mano. La propia automatización también necesita que se reporten sus tamaños de muestra y sus tasas de fallo. La precaución es que las alertas automáticas basadas en umbrales crean falsas alarmas cuando los datos son asimétricos, así que basa las alertas en los límites de control, no en números fijos.

### Analítica

Di siempre cuántos elementos hay detrás de una tasa y muestra un intervalo cuando el recuento sea pequeño. Usa los pronósticos como rangos, no como fechas únicas. La precaución es que la significación estadística no implica importancia práctica, y una muestra pequeña puede ocultar un problema real, así que combina los números con la lectura de elementos reales.

## Perspectiva sectorial

**Startup.** Los volúmenes son pequeños, así que la mayoría de las tasas se componen de unos pocos elementos y los intervalos son anchos. Lee cada incidente en lugar de calcular estadísticas, mantén un gráfico semanal sencillo de una o dos medidas y evita declarar tendencias a partir de tres puntos. A medida que crece el volumen, pasa pronto a medianas y percentiles para que los hábitos ya estén instalados.

**Pequeña empresa.** La persona que dirige TI es también dueña de los datos, y la muestra suele ser pequeña. Reporta recuentos, no porcentajes, para los eventos raros y compara con tu propio historial más largo. Comprueba qué mide realmente el reloj de «tiempo de respuesta» de un proveedor.

**Gran empresa.** El volumen hace significativas las distribuciones y también fomenta consolidaciones que mezclan servicios distintos. Compara lo comparable, publica las definiciones y el percentil usado y mantén una biblioteca compartida de reglas de gráficos y de cálculo para que los equipos no calculen la misma medida de tres maneras.

**Gobierno y sector público.** Los contratos y la información reglamentaria suelen fijar una media o un porcentaje umbral, y esas definiciones no son negociables. Reporta la cifra exigida exactamente como está definida y muestra a su lado la mediana, el percentil y los recuentos para que los órganos de supervisión vean el cuadro completo. El escrutinio público hace más valiosa la incertidumbre honesta, porque un número demasiado seguro es caro de retractar (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Se necesitan unas horas para acordar las reglas de resumen, construir un histograma y un gráfico de control a partir de una exportación y añadir recuentos a una plantilla de informe, más unos minutos en cada ciclo para mantenerlos al día. La mayoría de las herramientas ya calculan percentiles. El costo mayor es una conversación con personas acostumbradas a un único número tranquilizador.

El retorno son mejores decisiones y menos reacciones inútiles. Los equipos dejan de reorganizarse tras una mala semana, dejan de atribuir a las iniciativas mejoras fortuitas y dejan de prometer promedios que la mitad de sus clientes no viven. No tomes prestada una cifra: cuenta cuántas veces se revirtieron las decisiones del año pasado y cuántas «mejoras» se desvanecieron en el periodo siguiente, y usa esos recuentos para dimensionar el caso.

## Antipatrones y trampas

- **Promediar duraciones asimétricas.** La media es arrastrada por la cola y oculta lo que sienten los usuarios. Reporta la mediana y un percentil alto con nombre y muestra el elemento abierto más antiguo.
- **Porcentajes de muestras diminutas.** «100 por ciento» de tres elementos es una anécdota. Muestra los recuentos y aplica una regla de recuento mínimo.
- **Reaccionar a cada oscilación.** Perseguir cada semana en rojo malgasta esfuerzo y enseña a los equipos a explicar el ruido. Usa límites de control y reglas de señal escritas.
- **Prueba por antes y después.** Dos puntos no pueden separar una intervención del azar o de la regresión a la media. Usa una línea base más larga y una comparación.
- **Mover la portería en el gráfico.** Cambiar los límites, las reglas o las definiciones a posteriori hace que cualquier gráfico concuerde con el relato. Fija las reglas, registra los cambios y anótalos.
- **Excluir por defecto los valores atípicos.** Los casos más largos suelen ser los que recuerdan los clientes. Excluye solo con un motivo escrito y enumera lo excluido.
- **Falsa precisión.** Reportar 83,3 por ciento a partir de 12 elementos implica un conocimiento que los datos no tienen. Redondea con honestidad y muestra un rango.
- **Agrupar trabajo distinto.** Un tiempo combinado de restablecimientos de contraseña y fallos del centro de datos no describe ninguno. Segmenta primero.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Resúmenes de datos de tiempo | Solo promedios | Algunos equipos muestran medianas | Mediana más un percentil con nombre y el elemento abierto más antiguo son estándar | Distribuciones revisadas con una barrera de protección y con tendencias | Compromisos por percentil acordados con clientes y proveedores y revisados a medida que cambian los datos |
| Tamaño de muestra e incertidumbre | Tasas citadas sin recuentos | Recuentos mostrados en algunos informes | Recuentos y una regla de recuento mínimo en cada tasa | Intervalos en las tasas principales, método en el registro | Incertidumbre compartida abiertamente con los clientes y usada en la planificación entre equipos |
| Variación y causalidad | Todo cambio se explica | Unos pocos gráficos con límites | Gráficos de control con reglas escritas para las medidas clave | Las señales activan una investigación planificada; las iniciativas se comprueban frente a la línea base | Bibliotecas de gráficos compartidas entre servicios; líneas base comparadas entre equipos sin clasificarlos |

## Lista de verificación

- [ ] Toda medida de tiempo reporta una mediana y un percentil alto con nombre, en lugar de solo una media.
- [ ] Se reportan la antigüedad del elemento abierto más antiguo y el recuento de elementos más allá del percentil alto.
- [ ] Toda tasa reportada muestra su numerador y denominador.
- [ ] Hay una regla de recuento mínimo escrita y aplicada a todas las tasas.
- [ ] Las tasas principales y los pronósticos muestran un rango, con el método nombrado en el registro.
- [ ] Existen gráficos de control para las tres medidas sobre las que actúa el equipo, con reglas de señal escritas.
- [ ] Los cambios de definición se anotan en los gráficos y se registran en el registro.
- [ ] Los elementos excluidos se enumeran con sus motivos.
- [ ] Las afirmaciones de mejora se comprueban frente a una línea base más larga antes de repetirlas.
- [ ] El vector de manipulación y la barrera de protección de cada métrica están en el registro (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Prompts de IA

**Comprueba si un resumen se ajusta a los datos.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Expresa una tasa con su incertidumbre.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Juzga si un cambio es señal o ruido.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica de tiempo o de tasa antes de publicarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una medida estadística añadida a un tema tiene su definición, relojes, vector de manipulación y barrera de protección.

## Ideas clave

- Las duraciones de servicio son asimétricas, así que reporta la mediana y un percentil alto con nombre, y añade la antigüedad del elemento abierto más antiguo.
- Cada tasa lleva su recuento, y las muestras pequeñas se muestran como elementos o con un rango, no como un porcentaje seguro de sí mismo.
- Conoce el rango normal de una medida con un gráfico de control antes de reaccionar a una sola semana.
- Desconfía de las mejoras medidas con dos puntos: la regresión a la media y los cambios de definición explican muchas de ellas.
- La incertidumbre honesta es una fortaleza en un informe y una barrera de protección contra la manipulación al estilo de Goodhart (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- Mantén proporcionada la técnica: unos pocos métodos coherentes, explicados con palabras sencillas, sirven a un equipo mejor que muchos sin explicar.

## Referencias y lecturas complementarias

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
