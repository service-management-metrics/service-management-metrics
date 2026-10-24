# Métricas de pronóstico y planificación de entregas

**Los equipos que entregan software de forma continua y además operan servicios en vivo necesitan pronósticos honestos, no compromisos exprimidos de las estimaciones, así que planifica a partir del flujo de trabajo terminado, da rangos en lugar de fechas y mantén cualquier número de planificación local del equipo fuera de las comparaciones y de los objetivos.**

## Visión general y motivación

Las partes interesadas plantean dos preguntas a cada equipo de entrega: «¿cuándo estará hecho?» y «¿cuánto puedes asumir?». La respuesta ágil parte de los fines expuestos en los principios del Manifiesto Ágil: entregar software valioso de forma continua, colaborar a diario con las partes interesadas, reflexionar y mejorar con regularidad y construir el trabajo en torno a personas motivadas a las que se confía que lo hagan. El pronóstico que sirve a esos fines es una conversación entre partes interesadas sobre resultados probables y riesgo. No es una promesa extraída bajo presión.

Los equipos que operan servicios en vivo tienen una dificultad adicional. Su capacidad se reparte entre cambio planificado, trabajo de incidentes no planificado, solicitudes de servicio y mejora. Un plan que ignora la carga operativa fracasará por razones que nadie planificó (véase el tema 2.9, Trabajo operativo y trabajo no planificado). La gestión de servicios de TI (ITSM), tal como la codifica ITIL, trata esto como una cuestión de capacidad y demanda. La [planificación de la capacidad](https://en.wikipedia.org/wiki/Capacity_planning) es el proceso de determinar la capacidad que necesita una organización para atender una demanda cambiante. La práctica ágil de planificar frente a lo que el equipo puede realmente terminar es la misma idea a nivel de equipo.

Hay dos grandes formas de pronosticar la entrega:

- **A partir de estimaciones.** El equipo dimensiona los elementos en alguna unidad, suma los tamaños y divide por un ritmo. Muchos equipos usan un dimensionamiento relativo como los [puntos de historia](https://en.wikipedia.org/wiki/Story_point), y el ritmo se llama [velocidad](https://en.wikipedia.org/wiki/Velocity_(software_development)). Es rápido de empezar, depende de los hábitos de estimación del equipo y solo tiene sentido dentro de un equipo.
- **A partir de datos de flujo.** El equipo usa su propio registro de trabajo terminado: cuántos elementos completa por semana (caudal) y cuánto tardan los elementos de principio a fin (tiempo de ciclo). Como son recuentos y tiempos transcurridos, no opiniones, resisten la deriva y pueden combinarse con simulación para dar un rango de resultados. Este enfoque procede de la tradición del flujo, que incluye la Kanban Guide, y funciona con cualquier forma de organizar el trabajo, incluidos los equipos que entregan de forma continua sin ningún periodo de planificación fijo.

Este tema se inclina por el segundo enfoque, porque la entrega continua de software produce una corriente constante de elementos terminados que los datos de flujo describen directamente (véase el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo). Aun así cubre el primero, porque muchos equipos usan estimaciones y porque el mal uso de la velocidad es una de las formas más comunes en que fallan las métricas de entrega.

Los pronósticos son [pronósticos](https://en.wikipedia.org/wiki/Forecasting) de un futuro incierto, y la incertidumbre es la clave. La idea del [cono de incertidumbre](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) dice que las estimaciones tempranas son las menos seguras. La [falacia de la planificación](https://en.wikipedia.org/wiki/Planning_fallacy) dice que la gente subestima cuánto tardarán sus propios planes aunque sepa que planes similares se retrasaron. Una buena medición del pronóstico lo reconoce y mide con qué frecuencia aciertan los pronósticos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) importa aquí, porque los pronósticos y los planes se convierten fácilmente en promesas y luego en objetivos. Una vez que se juzga a un equipo por cumplir una fecha, oculta el riesgo, recorta la calidad o rebaja la estimación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Pronostica a partir del trabajo terminado.** Lo que el equipo ha entregado es mejor evidencia que lo que cualquiera crea que entregará.
- **Da un rango con una probabilidad.** «Probablemente a finales del próximo mes, muy probablemente a finales del siguiente» es mejor que una única fecha.
- **Planifica frente a la capacidad real.** Incluye el trabajo operativo, deja tiempo para la mejora y no planifiques a la utilización total.
- **Mantén locales las estimaciones.** Cualquier unidad de dimensionamiento es una herramienta de planificación privada de un equipo, nunca una base de comparación.
- **Mide la calidad del pronóstico, no solo la entrega.** Un pronóstico acertado por las razones equivocadas es suerte.
- **Trata el pronóstico como compartido.** Las partes interesadas y el equipo lo construyen juntos y lo revisan cuando cambian los hechos.
- **Confía en el equipo.** Las personas en las que se confía y a las que se apoya dan pronósticos honestos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de aciertos del pronóstico | Proporción de pronósticos en los que el resultado real cayó dentro del rango declarado | pronósticos cuyo resultado real estuvo dentro del rango declarado / pronósticos emitidos | porcentaje | Registro de pronósticos y registros de entrega | Gestión de la capacidad y el rendimiento; mejora continua | Exactitud del pronóstico en las conversaciones de planificación | Mensual |
| Anchura del rango del pronóstico | Cuán ancho fue el rango declarado, en relación con el pronóstico mediano | (límite superior menos límite inferior) / pronóstico mediano | razón | Registro de pronósticos | Gestión de la capacidad y el rendimiento | Estrechamiento del cono de incertidumbre | Mensual |
| Éxito del objetivo de entrega | Proporción de los objetivos de entrega declarados que se cumplieron en el periodo, juzgados por el resultado | objetivos cumplidos / objetivos fijados | porcentaje | Registros de objetivos acordados con las partes interesadas | Gestión de niveles de servicio; mejora continua | Revisión de resultados con las partes interesadas | Mensual o por entrega de un objetivo |
| Tasa de cambio de alcance | Proporción del trabajo comprometido que se añadió, retiró o redimensionó después de emitirse el pronóstico | elementos añadidos o retirados tras el pronóstico / elementos del pronóstico original | porcentaje | Historial de cambios del gestor de trabajo | Habilitación de cambios; gestión de niveles de servicio | Adaptación de la lista de pendientes a la retroalimentación | Mensual |
| Asignación de capacidad | Proporción de la capacidad del equipo dedicada a cambio, trabajo operativo y mejora | elementos u horas completados en cada categoría / todos los elementos u horas completados | porcentaje | Gestor de trabajo con tipo de trabajo | Gestión de la capacidad y el rendimiento; gestión de incidentes | Distribución por tipo de trabajo | Mensual |
| Estabilidad del caudal | Variación del caudal semanal | desviación estándar del caudal semanal / media del caudal semanal | razón | Gestor de trabajo | Gestión de la capacidad y el rendimiento | Previsibilidad del flujo | Mensual |
| Velocidad local | El trabajo terminado de un solo equipo en su propia unidad de dimensionamiento por periodo de planificación | suma de las estimaciones de los elementos que cumplen la definición de terminado en el periodo | puntos definidos por el equipo | Gestor de trabajo | Gestión de la capacidad y el rendimiento | Ayuda de planificación de la capacidad del equipo | Por periodo de planificación |

Define los relojes. Un pronóstico se «emite» cuando se registra y se comparte con las partes interesadas, y se «cumple» cuando el resultado se publica y está en uso, no cuando se fusiona el código. El caudal cuenta los elementos que cumplen la definición de terminado, con los elementos de tipos distintos contados en series separadas si su tamaño difiere mucho. La velocidad local se muestra solo al equipo que la posee.

## Recomendaciones

### Pronostica a partir del flujo

**1. Construye el pronóstico a partir del caudal y del tiempo de ciclo.** Cuenta los elementos terminados cada semana durante las últimas 12 a 26 semanas. Usa ese historial para pronosticar cuántos elementos terminarán para una fecha dada, o cuándo es probable que termine un conjunto de elementos. Una simulación con el [método de Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), que muestrea miles de veces el propio historial del equipo, convierte el historial en un rango de probabilidades. Las hojas de cálculo sencillas o los scripts pequeños lo hacen bien. Indica la ventana del historial y la fecha del pronóstico.

**2. Reporta percentiles de los resultados.** Di «50 por ciento de probabilidad para el 14 de marzo, 85 por ciento para el 4 de abril, 95 por ciento para el 18 de abril». Cada percentil es una afirmación honesta de riesgo, y las partes interesadas pueden elegir cuánto margen necesitan. Una única fecha oculta esa elección (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**3. Usa los percentiles del tiempo de ciclo para elementos individuales.** Para un solo elemento, el percentil 85 de los tiempos de ciclo pasados responde a «¿cuánto podría tardar esto?» mejor que cualquier estimación. Muéstralo en el tablero, como una línea frente a la cual comparar la antigüedad de los elementos en curso (véase el tema 2.1, Medidas de flujo).

**4. Mantén los tamaños de los elementos más o menos uniformes.** El pronóstico basado en el caudal funciona mejor cuando los elementos son pequeños y lo bastante parecidos como para contarse. Los equipos llegan ahí dividiendo el trabajo en la pieza más pequeña que aún entrega valor, un hábito propio de la entrega continua de software. Si los elementos varían mucho, haz seguimiento de series separadas para tipos de trabajo distintos.

**5. Actualiza el pronóstico siempre que cambien los hechos.** Un pronóstico es una visión viva. Cuando cambie el alcance, cambie el tamaño del equipo o un incidente grande consuma una semana, vuelve a ejecutarlo e informa a las partes interesadas. Versiona los pronósticos para poder juzgarlos más tarde.

### Planifica frente a la capacidad real

**6. Asigna la capacidad por tipo de trabajo.** Registra qué proporción del trabajo terminado del equipo fue cambio planificado, trabajo operativo no planificado, solicitudes de servicio y mejora. Planifica para la proporción que muestra la experiencia, no para un ideal. Los equipos que operan servicios en vivo suelen descubrir que un tercio o más de su capacidad se va en trabajo operativo, y esa cifra es suya para medirla, no para tomarla prestada (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

**7. Reserva capacidad para la mejora.** La mejora continua es una parte permanente del trabajo, así que planifica tiempo para ella en la asignación y protégelo. Los equipos que la recortan en cada periodo ajetreado ven subir su carga operativa, lo que la recorta aún más. Haz seguimiento de la proporción de mejora y del efecto de las mejoras en la proporción operativa.

**8. No planifiques a la utilización total.** Un equipo planificado al 100 por ciento no tiene margen para la variación, y las colas crecen a medida que la utilización se acerca al límite (véase el tema 2.3, Trabajo en curso y teoría de colas). Deja holgura para lo inesperado y trátala como una decisión de diseño y no como un desperdicio.

### Usa las estimaciones con cuidado si las usas

**9. Trata la velocidad como una ayuda de planificación local.** Si un equipo dimensiona el trabajo en puntos de historia, su velocidad puede ayudarle a decidir cuánto asumir en su próxima conversación de planificación, y debe compararse solo con el pasado reciente de ese mismo equipo. Nunca compares equipos, fijes un objetivo de velocidad ni reportes la velocidad hacia arriba como medida de productividad. Los puntos no tienen una unidad común entre equipos, y la presión por elevar el número infla las estimaciones sin entregar más.

**10. Compara de vez en cuando las estimaciones con los tiempos de ciclo reales.** Grafica las estimaciones frente a lo que tardaron los elementos. Si las estimaciones grandes no tardan más que las pequeñas, el esfuerzo de estimar no compra mucho, y contar elementos puede servir al equipo igual de bien. Si se correlacionan, las estimaciones llevan información que vale la pena conservar. Deja que el equipo decida con los datos.

### Mide si funciona

**11. Registra cada pronóstico y puntúalo.** Anota el pronóstico, el rango y el resultado real, y calcula después la tasa de aciertos. Un pronóstico del percentil 85 bien calibrado debería cumplirse aproximadamente el 85 por ciento de las veces. Si los aciertos están muy por encima o por debajo, ajusta el método. Comparte el registro con las partes interesadas, porque la confianza en el pronóstico se construye con el historial de resultados.

**12. Juzga los objetivos de entrega por el resultado.** Un objetivo como «los clientes pueden pagar con factura» se cumple cuando los clientes pueden hacerlo, no cuando se cierran las tareas. Acuerda los objetivos con las partes interesadas en palabras llanas, revísalos juntos y registra el resultado. Esto mantiene la planificación atada a la colaboración continua y desalienta entregar trabajo que nadie usa (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de aciertos del pronóstico | Declarar rangos muy anchos para que todo pronóstico acierte; repronosticar a posteriori | Anchura del rango del pronóstico; conservar el pronóstico original en el registro; comparar los rangos con el historial de otros equipos |
| Anchura del rango del pronóstico | Estrechar los rangos para parecer seguro | Tasa de aciertos del pronóstico; exigir que el rango se construya a partir de un historial registrado |
| Éxito del objetivo de entrega | Fijar objetivos fáciles; redefinir un objetivo a posteriori; contar la producción como resultado | Las partes interesadas juzgan el resultado; redacción del objetivo conservada en un registro; comprobar los datos de uso del cambio entregado |
| Tasa de cambio de alcance | Congelar el alcance rechazando cambios válidos; ocultar el cambio de alcance redimensionando elementos | Satisfacción de las partes interesadas con la capacidad de respuesta; motivos del cambio registrados |
| Asignación de capacidad | Etiquetar mal el trabajo operativo como mejora; ocultar la carga operativa trabajando fuera del tablero | Conciliar con los registros de incidentes y solicitudes; muestrear elementos por tipo |
| Estabilidad del caudal | Dividir elementos en piezas triviales para elevar el recuento; cerrar elementos sin terminarlos | Distribución de tamaños de los elementos; tasa de reaperturas; muestrear el valor entregado |
| Velocidad local | Inflar las estimaciones; dividir historias para reclamar puntos; comparar equipos | Mantenerla privada del equipo; comparar con el caudal y el tiempo de ciclo; nunca fijar un objetivo |

Una lectura sana son pronósticos que se cumplen aproximadamente a la tasa declarada, objetivos que las partes interesadas acuerdan que se cumplieron, un cuadro de capacidad que coincide con lo que vive el equipo y un número de velocidad que, si existe, usa el equipo y nadie más.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Pronóstico basado en el flujo | Usa datos reales, resiste la inflación, da rangos | Necesita un historial estable y elementos de tamaño parecido |
| Pronóstico basado en estimaciones | Rápido de empezar, fomenta la discusión del trabajo | Subjetivo, se infla bajo presión, no comparable entre equipos |
| Compromiso con una única fecha | Sencillo de comunicar | Oculta el riesgo; castiga la honestidad |
| Rango con probabilidad | Honesto sobre la incertidumbre | Al principio, más difícil de leer para algunas partes interesadas |
| Planificación a utilización total | Parece eficiente | Las colas crecen; sin margen para incidentes ni aprendizaje |
| Holgura planificada | Absorbe la variación y respalda la mejora | Parece capacidad ociosa a los no convencidos |

La respuesta en prosa es partir de datos de flujo, añadir estimaciones solo donde ayuden al equipo y hablar en rangos. Donde un contrato exija una fecha, da la fecha que respalda el percentil 85 o 95 y di qué la cambiaría.

## Preguntas para debatir con tu equipo

**1. ¿Qué diríamos si una parte interesada preguntara «¿cuándo estará hecho?» y quisiera una respuesta honesta?**
Pide al equipo que responda para una pieza de trabajo real, primero con una única fecha y luego con un rango. Fíjate en la diferencia de comodidad de cada respuesta. El facilitador debe recoger lo que el equipo necesitaría saber para dar el rango con honestidad, como el historial, el tamaño del elemento y los riesgos conocidos.

**2. ¿Cuánta de nuestra capacidad va realmente a cambio planificado y cómo lo sabemos?**
Mira los últimos tres meses de trabajo terminado por tipo. Compara con el plan que hizo el equipo. La conversación suele revelar que el trabajo operativo es mayor de lo planificado y que el trabajo de mejora es menor. Acuerden cuál debería ser la asignación y qué decisión la cambiaría.

**3. ¿Dónde nos ayudan nuestras estimaciones y dónde solo cuestan tiempo?**
Grafica una muestra de estimaciones frente a los tiempos de ciclo reales. Hablen de si las estimaciones mayores fueron realmente más lentas. Si el vínculo es débil, pregunten qué haría el equipo de otro modo si solo contara elementos. Decidan si continuar, simplificar o dejar de estimar durante un periodo de prueba.

**4. ¿Quién ve los números de planificación a nivel de equipo y qué les ocurre?**
Sigue cada número de planificación desde el equipo hasta su audiencia. Pregunta si alguien compara equipos con él o fija objetivos. Si es así, hablen de cómo detenerlo y qué ofrecer en su lugar. El facilitador debe estar listo para explicar que los números locales pierden su valor cuando viajan.

**5. ¿Cuándo falló un pronóstico nuestro y qué aprendimos?**
Elige un fallo y rastréalo. ¿Fue un cambio de alcance, un incidente grande, una dependencia o una suposición errónea? ¿Qué lo habría señalado antes? Acuerden un cambio en la práctica de pronóstico, como registrar las dependencias o actualizar el pronóstico cada semana.

**6. ¿Qué objetivos cumplimos el trimestre pasado y quién lo dijo?**
Enumera los objetivos de entrega y quién juzgó cada uno. Si el equipo juzgó sus propios objetivos, hablen de cómo incorporar a las partes interesadas. La conversación respalda la colaboración continua y muestra si los objetivos tratan de resultados o de tareas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen el pronóstico y los datos de flujo que lo respaldan. Deben publicar rangos, mantener pequeños los elementos y repronosticar cuando cambien los hechos. Los equipos que elijan dimensionar el trabajo en puntos deben mantener los números dentro del equipo. El fin es una corriente constante de trabajo terminado y valioso y un pronóstico en el que las partes interesadas confían porque tiene un historial de resultados.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con la demanda que altera los planes. Deben compartir con los equipos de entrega la carga de incidentes y solicitudes, de modo que los planes de capacidad partan de números reales. Los equipos de operaciones que además entregan cambios pueden usar el mismo pronóstico basado en el flujo para su propio trabajo. La planificación conjunta del trabajo de cambio y de operación es un buen lugar para la colaboración continua entre ambos grupos.

### Liderazgo y gobernanza

Los líderes deciden si un pronóstico es una declaración de riesgo o una promesa. Deben pedir rangos, financiar la holgura y la mejora y resistir el uso de la velocidad o del caudal para comparar equipos. Los órganos de gobernanza deben mirar la tasa de aciertos del pronóstico a lo largo del tiempo y los resultados de los objetivos, y tratar los fallos repetidos como una señal sobre el sistema, como las dependencias y la carga operativa, no sobre las personas.

### Clientes y usuarios

A los usuarios les importa cuándo verán el cambio y si les ayudará. Un rango con una confianza declarada les sirve mejor que una fecha que se retrasa. Deben participar en juzgar si se cumplieron los objetivos, ya que son quienes sienten el resultado. Avisar a los usuarios cuando un pronóstico cambia, y por qué, es parte de tratarlos como colaboradores.

## En la práctica: un ejemplo de gestión de servicios

El equipo digital de una empresa regional de energía construye un portal de facturación para clientes y lo opera en producción. Los números siguientes son ilustrativos.

Las partes interesadas han pedido al equipo una fecha para una nueva función de planes de pago formada por 22 elementos. El trimestre pasado el equipo dio una fecha firme basada en sus estimaciones, la incumplió por cinco semanas a causa de dos incidentes graves y perdió la confianza de las partes interesadas. Esta vez la responsable de entrega extrae el caudal de las últimas 20 semanas, que va de 3 a 9 elementos por semana con una mediana de 6, y señala que el trabajo operativo se llevó cerca del 35 por ciento de los elementos terminados.

Ejecuta una simulación a partir del historial. Muestra que 22 elementos terminan en 4 semanas aproximadamente la mitad de las veces, en 6 semanas aproximadamente el 85 por ciento de las veces y en 8 semanas aproximadamente el 95 por ciento de las veces. Presenta estas tres fechas a las partes interesadas, junto con los supuestos: tamaño del equipo sin cambios, carga operativa como en las últimas 20 semanas y sin alcance nuevo. Un responsable de producto pregunta por un lanzamiento para una fecha de facturación concreta, dentro de ocho semanas. El equipo y las partes interesadas acuerdan planificar para la fecha del 85 por ciento, mantener las dos últimas semanas como colchón y fijar un punto de control cada dos semanas para repronosticar.

En el primer punto de control, un fallo en la pasarela de pago ha consumido tres días y la simulación desplaza la fecha del 85 por ciento una semana. El equipo informa a las partes interesadas el mismo día, con el motivo, y acuerdan sacar un elemento de poco valor. La función se pone en marcha en la fecha del colchón. El objetivo de entrega, «los clientes pueden configurar un plan de pago sin llamar», lo juzgan el responsable de producto y un panel de clientes tras tres semanas. Se cumple para la mayoría de los clientes, y un tema recurrente en los comentarios muestra confusión con una pantalla, que pasa a la lista de pendientes. El equipo anota que su tasa de aciertos del pronóstico en el trimestre es de cuatro de cinco. Las partes interesadas piden a la responsable de entrega que lleve rangos de pronóstico a la próxima sesión de planificación, y el equipo abandona el uso de puntos de historia porque contar elementos daba la misma respuesta.

## Agilidad, IA, automatización y analítica

### Agilidad

Planifica a partir del flujo de trabajo terminado y revisa a menudo con las partes interesadas, dando rangos en lugar de fechas. Una buena práctica es pronosticar con el historial de caudal del propio equipo y mostrar el rango en cada revisión periódica. La precaución es que cualquier número de planificación local de un equipo, como la velocidad, se convierte en objetivo en cuanto se compara entre equipos.

### IA

La asistencia de la IA puede cambiar el caudal de forma rápida y desigual, lo que hace que el historial antiguo sea una mala guía durante un tiempo. Marca en el gráfico del caudal las fechas en que se adoptaron las herramientas de IA, amplía el rango del pronóstico tras el cambio y empareja la tasa de aciertos del pronóstico con el retrabajo. La precaución es que las estimaciones generadas por IA parecen precisas, así que trátalas como insumo para la discusión y compruébalas con el propio historial del equipo.

### Automatización

Calcula los pronósticos automáticamente a partir de los datos del gestor, de modo que se actualicen sin reunión. Haz seguimiento de la exactitud de esos pronósticos como una métrica del método de pronóstico. La precaución es que un pronóstico automatizado mostrado sin su intervalo invita a una falsa confianza, así que muestra el rango por defecto.

### Analítica

Usa simulación o rangos basados en percentiles del caudal pasado y reporta la tasa de aciertos del pronóstico con el número de pronósticos que hay detrás. La decisión a la que informa es qué prometer y cuándo replanificar. La precaución es que los pronósticos fallan cuando cambian el alcance o la capacidad, así que haz seguimiento de la tasa de cambio de alcance a su lado.

## Perspectiva sectorial

**Startup.** Las prioridades cambian deprisa, así que mantén los pronósticos cortos y aproximados. Haz seguimiento del caudal desde el principio, ya que no cuesta nada, y da rangos a los fundadores. Resiste la tentación de importar un sistema de planificación pensado para equipos grandes.

**Pequeña empresa.** Una o dos personas pueden hacer juntas el trabajo de cambio y el de operación, sin capacidad de reserva. Sé explícito sobre el reparto e informa al propietario cuando un incidente vaya a mover una fecha. Basta un recuento semanal sencillo de elementos terminados.

**Gran empresa.** Los muchos equipos y dependencias hacen que los pronósticos dependan del flujo de otros equipos. Pronostica cada equipo con sus propios datos, haz visibles las dependencias y combina los rangos con cuidado, ya que sumar los mejores casos da un total engañoso. Evita las consolidaciones que comparan equipos por velocidad.

**Gobierno y sector público.** Los presupuestos fijos, la contratación y las fechas legales generan presión para compromisos con una única fecha. Declara la fecha que respalda el percentil elegido, explica los supuestos y registra abiertamente las concesiones de alcance. Donde exista una fecha obligatoria, planifica el alcance para ajustarse a ella (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es bajo. Los datos de caudal y de tiempo de ciclo suelen existir en el gestor de trabajo del equipo. Una hoja de cálculo de pronóstico o un script pequeño lleva un día construirlo, y un pronóstico se actualiza en minutos. El costo recurrente es el tiempo para registrar los pronósticos y los resultados y para celebrar una breve conversación de punto de control con las partes interesadas.

El retorno procede de menos sorpresas y mejores decisiones. Las partes interesadas que entienden el riesgo pueden elegir un colchón, ajustar el alcance o reordenar el trabajo pronto. Los equipos dedican menos tiempo a las ceremonias de estimación si contar elementos sirve igual de bien. Disminuyen los conflictos por fechas incumplidas y los atajos de calidad que provocan. Construye el caso a partir de tu propio historial: la proporción de pronósticos que se cumplieron, el tiempo dedicado a estimar y los cambios de alcance hechos pronto y no tarde. No tomes prestadas cifras de previsibilidad de otras organizaciones.

## Antipatrones y trampas

- **Tratar un pronóstico como un compromiso.** Convierte el pronóstico en objetivo y la honestidad se vuelve costosa. Presenta rangos y revísalos.
- **Comparar equipos por velocidad.** Los puntos son locales y la comparación los infla. Compara un equipo solo con su propio pasado.
- **Planificar a utilización total.** La variación se convierte en retraso. Deja holgura.
- **Ignorar el trabajo operativo.** Los planes fallan por la carga que nadie planificó. Mide y planifica la asignación.
- **Usar una única fecha para todo.** Usa percentiles e indica cuál elegiste.
- **Estimar con más precisión de la que respaldan los datos.** Las estimaciones detalladas del trabajo lejano son las menos fiables. Pronostica el trabajo lejano de forma gruesa.
- **Fijar un objetivo de velocidad o de caudal.** El número subirá y el valor no.
- **No puntuar nunca los pronósticos.** Sin un historial de resultados, la confianza no puede crecer.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Método de pronóstico | Conjeturas con una única fecha | Estimaciones sumadas a mano | Rangos basados en el flujo con percentiles | Pronósticos registrados y puntuados; método ajustado a partir de la tasa de aciertos | Pronósticos combinados entre equipos y dependencias, compartidos en directo con las partes interesadas |
| Planificación de la capacidad | Los planes ignoran el trabajo operativo | Carga operativa conocida de forma aproximada | Capacidad asignada por tipo de trabajo a partir de datos | Asignación revisada frente a los resultados; tiempo de mejora protegido | Capacidad planificada conjuntamente con proveedores y operaciones entre servicios |
| Objetivos y uso de los números | Los objetivos son listas de tareas | Objetivos anotados | Objetivos juzgados por el resultado con las partes interesadas | Fallos analizados como señales del sistema; números locales mantenidos en privado | Objetivos fijados y juzgados en colaboración con los usuarios; aprendizaje compartido entre equipos |

## Lista de verificación

- [ ] Los pronósticos se construyen a partir del historial de caudal y de tiempo de ciclo del propio equipo.
- [ ] Los pronósticos se dan como rangos con percentiles, con los supuestos declarados.
- [ ] Cada pronóstico se registra con su rango y su resultado real.
- [ ] La tasa de aciertos y la anchura del rango del pronóstico se revisan cada mes.
- [ ] La capacidad se asigna por tipo de trabajo, incluidos el trabajo operativo y la mejora.
- [ ] La utilización planificada deja holgura para la variación y los incidentes.
- [ ] Cualquier unidad de dimensionamiento o velocidad es privada del equipo y no lleva objetivo.
- [ ] Los objetivos de entrega se escriben como resultados y se juzgan con las partes interesadas.
- [ ] Los cambios de alcance se registran con sus motivos.
- [ ] Los pronósticos se actualizan cuando cambian los hechos, y se informa a las partes interesadas.

## Prompts de IA

**Construye un pronóstico basado en el caudal.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Revisa cómo usamos las estimaciones.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Planifica la capacidad entre el trabajo de cambio y el de operación.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Redacta una revisión del pronóstico con las partes interesadas.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de pronóstico o de planificación.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada revisada de métrica de planificación conserva su vector de manipulación y su barrera de protección.

## Ideas clave

- Pronostica a partir del flujo de trabajo terminado y da rangos con probabilidades en lugar de fechas únicas.
- Planifica frente a la capacidad real, incluidos el trabajo operativo, el tiempo de mejora y la holgura.
- Trata cualquier unidad de estimación o velocidad como una ayuda privada de un equipo, nunca como un objetivo ni una comparación.
- Puntúa tus pronósticos: la tasa de aciertos genera confianza.
- Juzga los objetivos de entrega por el resultado, junto con las partes interesadas y los usuarios.
- Confía en el equipo y apóyalo: los pronósticos honestos vienen de personas a las que no se castiga por la incertidumbre.

## Referencias y lecturas complementarias

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
