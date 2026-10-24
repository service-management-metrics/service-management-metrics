# Medición del trabajo asistido por IA

**Juzga el trabajo asistido por IA por lo que sobrevive a la revisión, a la producción y al siguiente contacto del usuario, no por la rapidez con que apareció, y sigue vigilando si las personas que lo hacen continúan aprendiendo.**

## Visión general y motivación

Cuando un equipo usa herramientas de IA todos los días, la pregunta central pasa de «¿deberíamos?» a «¿qué estamos obteniendo?». El tema anterior expuso los fundamentos: líneas base, comparaciones y costo completo (véase el tema 10.1, La IA en la medición de la gestión de servicios). Este tema entra en el propio trabajo. ¿Cómo saber si el código, los tickets, los documentos y las decisiones asistidos por IA son tan buenos como el trabajo al que sustituyen, mejores o peores, y qué les pasa a las personas que lo hacen?

La asistencia de la IA toca muchos tipos de trabajo. En la entrega de software, las herramientas sugieren o generan código, pruebas, mensajes de confirmación y comentarios de revisión. En las operaciones de servicio resumen incidentes, proponen causas, redactan respuestas y escriben artículos de conocimiento. En el análisis producen informes y consultas. El rasgo común es que producir una primera versión verosímil se vuelve barato. Los costos se desplazan a otros lugares: leer y juzgar la salida, corregir lo que está mal, mantener lo que se generó y aprender lo suficiente para notar la diferencia.

Varios efectos vuelven difícil la medición.

- **Los recuentos de producción engañan.** Las [líneas de código](https://en.wikipedia.org/wiki/Lines_of_code) siempre fueron una mala medida de productividad, y el código generado la empeora. Más código es más que leer, probar y mantener. Los recuentos de líneas generadas, sugerencias aceptadas o borradores dicen poco sobre el valor.
- **La revisión se convierte en el cuello de botella.** La [revisión de código](https://en.wikipedia.org/wiki/Code_review) y la revisión de otro trabajo generado llevan tiempo, y un flujo de cambios mayores y más frecuentes puede sobrecargar a los revisores. Las [solicitudes de incorporación](https://en.wikipedia.org/wiki/Pull_request) grandes son más difíciles de revisar bien, y un revisor sobrecargado tiene más probabilidades de aprobar lo que no ha entendido. Las medidas de revisión y de flujo anteriores siguen siendo esenciales (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).
- **Los problemas de calidad llegan tarde.** El código generado puede pasar las pruebas hoy y llevar [código duplicado](https://en.wikipedia.org/wiki/Duplicate_code), una estructura poco clara o defectos ocultos que salen a la superficie como costo de mantenimiento, una forma de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt). Las medidas tomadas en el momento de la creación se lo pierden. Mira lo que ocurre con el trabajo después.
- **Las habilidades pueden cambiar.** Depender de una herramienta para tareas que uno hacía por sí mismo es una forma de [descarga cognitiva](https://en.wikipedia.org/wiki/Cognitive_offloading), que puede liberar atención para problemas más difíciles o puede llevar a la [pérdida de cualificación](https://en.wikipedia.org/wiki/Deskilling) si se desvanece la comprensión subyacente. Ambas cosas son posibles, y el resultado depende de cómo se usen las herramientas. Esto importa para las personas implicadas y para la capacidad del equipo de gestionar las situaciones que la herramienta no puede.

La evidencia sobre el efecto de la asistencia de la IA en la productividad sigue desarrollándose, y varía con la tarea, la experiencia del usuario, la herramienta y el entorno. Algunos estudios controlados de tareas de programación han encontrado una finalización más rápida en tareas bien definidas, y otros estudios e informes han encontrado ganancias menores o nulas, o costos adicionales, para personas con experiencia que trabajan en sistemas complejos que conocen bien. Este libro no ofrece un número. La postura responsable para un equipo es medir su propio trabajo, con líneas base y comparación, y tratar cualquier cifra publicada como un estudio en un contexto particular.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) es especialmente importante aquí, porque la presión por mostrar ganancias es fuerte y los números fáciles son los engañosos. Las medidas siguientes siguen lo que sobrevive, no lo que se produce (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide lo que sobrevive.** La retención, el retrabajo y los defectos escapados dicen más que la producción.
- **Vigila la revisión.** El flujo del trabajo asistido por IA está limitado por lo bien que las personas pueden leerlo.
- **Compara lo comparable.** El trabajo asistido y el no asistido deben ser similares en clase y dificultad.
- **Mira después además de ahora.** Los problemas de calidad y los costos de mantenimiento aparecen semanas o meses después de la creación.
- **Mantén la comprensión en el bucle.** La persona que entrega el trabajo debe poder explicarlo.
- **Protege las habilidades y el aprendizaje.** Fíjate en lo que la gente sigue sabiendo hacer sin la herramienta.
- **Agrega; no monitorices a individuos.** Los datos sobre quién usa la IA y cómo sirven para mejorar el proceso, no para clasificar a las personas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de retención | Proporción de cambios asistidos por IA que permanecen sustancialmente sin modificar tras un periodo declarado | cambios asistidos por IA con menos de una proporción fijada modificada o revertida a los 30 días / cambios asistidos por IA incorporados hace 30 días | porcentaje | Historial del control de versiones unido a etiquetas de asistencia, a nivel de equipo | Gestión de versiones y despliegues; habilitación de cambios | Trabajo que se sostiene; poco retrabajo | Mensual |
| Retrabajo posterior a la incorporación | Proporción de cambios que necesitan una corrección posterior en un periodo corto, para cambios asistidos y de comparación | cambios con una corrección posterior vinculada en 14 días / cambios incorporados, por grupo | porcentaje | Control de versiones, gestor de incidencias, registros de cambios | Habilitación de cambios; gestión de problemas | Defectos escapados; retrabajo | Mensual |
| Carga de revisión | Esfuerzo del revisor por cambio, para cambios asistidos y de comparación | mediana y percentil 85 del tiempo de revisión y de las rondas de revisión por cambio, por grupo | horas; rondas | Marcas de tiempo de la herramienta de revisión, agregadas por equipo | Gestión de versiones y despliegues | La revisión como retroalimentación y aprendizaje | Mensual |
| Tasa de defectos escapados | Defectos hallados en producción por cambio, para cambios asistidos y de comparación | defectos hallados tras la publicación atribuidos a un cambio / cambios publicados, por grupo | defectos por cambio | Gestor de defectos vinculado a los cambios | Gestión de incidentes; gestión de problemas | Calidad de lo que se publica | Trimestral |
| Tasa de aprobación de la comprobación de explicación | Proporción de cambios asistidos por IA muestreados cuyo autor puede explicar el enfoque y sus compensaciones en la revisión | cambios muestreados en que el autor explicó a satisfacción del revisor / cambios muestreados | porcentaje | Notas de revisión muestreadas | Gestión del conocimiento; habilitación de cambios | Comprensión compartida del código | Trimestral |
| Calidad del soporte asistido | Tasa de reapertura y satisfacción de los usuarios con las respuestas de soporte asistidas por IA comparadas con las no asistidas | tickets asistidos reabiertos / tickets asistidos, y valoraciones favorables / valoraciones, por grupo | porcentaje | Herramienta ITSM, encuesta | Centro de servicios; gestión de incidentes | Calidad de los resultados del servicio | Mensual |
| Valoración de confianza sin ayuda | Valoración del equipo de su confianza para hacer tareas clave sin la herramienta | valoración media y dispersión en una escala acordada, por equipo | puntos de escala | Pulso anónimo del equipo | Gestión de la plantilla y del talento; gestión del conocimiento | Capacidad y aprendizaje del equipo | Trimestral |

Etiqueta la asistencia de la IA de manera fiable a nivel de equipo, mediante los registros de la herramienta o una convención ligera, y declara cómo se eligen los cambios de comparación: similares en tamaño, área y riesgo. La retención mide un cambio sustancial, con un umbral fijado en el registro. El retrabajo posterior a la incorporación vincula una corrección posterior con el cambio original mediante una regla declarada. La carga de revisión es el esfuerzo del revisor, no el del autor, e incluye solo el tiempo activo de revisión cuando se puede medir. Nunca se reportan datos a nivel individual. Las muestras para la comprobación de explicación se eligen al azar, y la comprobación es una conversación para apoyar el aprendizaje, no una prueba de una persona.

## Recomendaciones

### Sigue el trabajo después de crearlo

**1. Haz seguimiento de lo que ocurre con el trabajo asistido a lo largo del tiempo.** Para el código, sigue los cambios durante semanas tras la incorporación: ¿se quedan, se corrigen o se revierten? Para el soporte, sigue los tickets tras la respuesta: ¿se reabren o les siguen contactos repetidos? Para los documentos, comprueba si se usan, se corrigen o se ignoran. La retención y el retrabajo son señales sencillas y difíciles de falsear de la calidad.

**2. Compara con trabajo similar no asistido.** Elige trabajo de comparación de tamaño, riesgo y área parecidos, del mismo periodo. La dificultad importa: la gente puede usar la IA para tareas fáciles, lo que favorecería a la herramienta, o para las difíciles, lo que la penalizaría. Declara cómo llegan a ser asistidas las tareas y ajusta o matiza en consecuencia. Una comparación pequeña y honesta vale más que una grande y confusa (véase el tema 6.5, Realización de valor y resultados de negocio).

**3. Incluye las medidas posteriores en el conjunto estándar.** Empareja cualquier medida de velocidad con la tasa de fallos de cambio, los defectos escapados y las medidas de estabilidad que ya se usan (véase el tema 2.8, Métricas DORA). Una ganancia de velocidad con estabilidad a la baja es una transferencia de costo a operaciones y a los usuarios. Reporta el par junto.

### Mantén significativa la revisión

**4. Vigila la carga y el tamaño de la revisión.** Mide el tiempo de revisión, las rondas de revisión y el tamaño de los cambios para el trabajo asistido y el no asistido. Si los cambios asistidos son mayores o más numerosos, los revisores pueden estar sobrecargados. Fija normas para el tamaño de los cambios y limita la cantidad de material generado que puede entrar en una revisión. La capacidad de revisión forma parte de la capacidad del sistema (véase el tema 2.3, Trabajo en curso y teoría de colas).

**5. Pide a los autores que expliquen.** Haz hábito que el autor de un cambio pueda explicar qué hace, por qué este enfoque y cuáles son las compensaciones. Basta una conversación breve y de apoyo en la revisión. Muestrea comprobaciones de explicación cada trimestre para ver si la comprensión sigue el ritmo de la producción. Donde los autores no puedan explicar, trátalo como una señal para ir más despacio y aprender, no como un fallo de la persona.

**6. Defiéndete del sesgo de automatización.** Anima a los revisores a leer el trabajo asistido con tanto espíritu crítico como cualquier otro. Rota a los revisores, siembra de vez en cuando problemas conocidos en un cambio de prueba para comprobar la detección y mantén el muestreo de salidas por revisores independientes. Una tasa de aceptación muy alta con retrabajo en aumento es una advertencia (véase el tema 10.1, La IA en la medición de la gestión de servicios).

### Cuida la calidad y el mantenimiento

**7. Monitoriza la estructura del código y del sistema.** Haz seguimiento de la duplicación, la complejidad, la cobertura de pruebas y la tasa de cambio en las áreas donde la asistencia es intensa. Usa las medidas que ya tienes de [pruebas de software](https://en.wikipedia.org/wiki/Software_testing) y de salud del código y mira las tendencias. Una duplicación creciente o una efectividad de las pruebas a la baja pueden señalar que el código generado se acepta sin integrarlo en el diseño. La cobertura de las [pruebas de regresión](https://en.wikipedia.org/wiki/Regression_testing) es una red de seguridad, y su fortaleza importa más cuando sube el volumen de cambio.

**8. Trata con cuidado las pruebas generadas.** La IA puede escribir muchas pruebas rápidamente, y las pruebas pueden pasar sin comprobar nada significativo. Muestrea las pruebas generadas para ver su valor y mide la efectividad de las pruebas con métodos como comprobar si fallan cuando se rompe deliberadamente el comportamiento. No cuentes las pruebas escritas como medida de calidad.

**9. Vigila la calidad del soporte asistido.** Para el centro de servicios y las operaciones, mide la tasa de reapertura, los contactos repetidos, la satisfacción y la exactitud de las respuestas muestreadas para las respuestas asistidas frente a las no asistidas. Una respuesta más rápida que devuelve al usuario es más lenta en conjunto. Lee los comentarios de los usuarios sobre las respuestas asistidas y mira si los usuarios saben que tratan con IA donde eso importa (véase el tema 6.1, Métricas de satisfacción del cliente).

### Protege a las personas y las habilidades

**10. Fíjate en lo que la gente sigue sabiendo hacer.** Pregunta a los equipos cuánta confianza tienen para hacer tareas clave sin la herramienta y haz seguimiento de la tendencia. Usa de vez en cuando la práctica sin ayuda, el trabajo en parejas y las revisiones del diseño subyacente para mantener vivas las habilidades. Protege en particular el aprendizaje de los miembros más nuevos del equipo, que pueden usar la herramienta antes de haber construido los modelos mentales en que se apoyan los colegas con experiencia para juzgarla (véase el tema 9.4, Métricas de habilidades y aprendizaje).

**11. Mantén los datos sobre las personas fuera de la evaluación.** Agrega a nivel de equipo. No reportes qué individuos usan más la IA y no uses el uso, la tasa de aceptación ni el volumen generado en las evaluaciones de desempeño. Haz conocidas las reglas. Hace falta confianza para que se reporte con honestidad lo que funciona y lo que no.

**12. Revisa con regularidad.** Las herramientas, los modelos y las prácticas cambian en meses. Repite la comparación cuando cambie la herramienta o la forma de trabajar. Comparte los hallazgos, incluido que una herramienta no ayudó aquí, y retira los usos que ya no se ganan su lugar.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de retención | Evitar cambios necesarios para mantener el número; etiquetar como asistidos solo los cambios exitosos | Etiquetar por registros de la herramienta, no por elección del autor; emparejar con defectos escapados y retrabajo |
| Retrabajo posterior a la incorporación | Corregir en otro ticket o en un cambio nuevo no vinculado; retrasar las correcciones más allá de la ventana | Regla de vinculación en el registro; mirar una ventana más larga; defectos de producción |
| Carga de revisión | Revisiones apresuradas que reducen el tiempo medido; aprobaciones sin comentarios | Muestra de profundidad de la revisión; defectos escapados; encuesta a los revisores |
| Tasa de defectos escapados | No atribuir los defectos a los cambios; reclasificar defectos como mejoras | Regla de atribución; muestra independiente de la clasificación de defectos |
| Tasa de aprobación de la comprobación de explicación | Autores que ensayan para la comprobación; revisores indulgentes | Muestras aleatorias y sin aviso; rotar a los revisores; centrarse en las razones del diseño |
| Calidad del soporte asistido | Asistir solo los tickets fáciles; aleccionar a los usuarios para que valoren alto | Emparejar los tickets por tipo y dificultad; tasa de respuesta y composición; leer los comentarios |
| Valoración de confianza sin ayuda | Valoraciones infladas para evitar el escrutinio; valoraciones bajas para argumentar a favor de más herramientas | Anonimato; comparar con la práctica observada en simulacros; leer los comentarios |

Una lectura sana es un trabajo asistido que se queda en su lugar tan a menudo como el no asistido, un retrabajo y unos defectos escapados que igualan o superan a la comparación, una revisión que sigue siendo profunda, autores que pueden explicar lo que entregan, un soporte asistido que no vuelve y equipos que siguen confiando en sus propias habilidades.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medir el volumen de producción | Fácil | Premia el volumen; no dice nada del valor |
| Medir la retención y el retrabajo | Refleja la calidad a lo largo del tiempo | Retrasada; necesita vincular registros |
| Comparación controlada | Creíble | Necesita esfuerzo; puede ser poco práctica |
| Comparación observacional | Barata | Confundida por la selección de tareas |
| Comprobaciones de explicación obligatorias | Mantienen la comprensión | Pueden parecer un examen; añaden esfuerzo |
| Comprobaciones ligeras muestreadas | Poca carga | Pueden perder patrones |
| Fuertes restricciones al uso de la IA | Control del riesgo | Beneficio perdido; uso en la sombra |
| Uso abierto con medición | Aprendizaje y beneficio | Necesita confianza y disciplina |

La respuesta en prosa es permitir el uso dentro de reglas claras, medir lo que sobrevive, muestrear la comprensión, proteger la capacidad de revisión y las habilidades y mantener los datos sobre las personas fuera de la evaluación.

## Preguntas para debatir con tu equipo

**1. ¿Cuánto de lo que la IA nos ayudó a producir el último trimestre sigue en su sitio, sin cambios, y cómo lo sabemos?**
Miren la retención y el retrabajo de los cambios asistidos frente a un conjunto comparable. El facilitador debe registrar lo difícil que fue responder. Acuerden cómo etiquetar y vincular los registros para que la respuesta sea fácil el próximo trimestre.

**2. ¿Sigue la revisión el ritmo y qué pasa cuando no lo hace?**
Miren los tiempos, las rondas y los tamaños de las revisiones. Pregunten a los revisores cómo se sienten con los cambios asistidos. Hablen de límites de tamaño y de formas de repartir la carga. Acuerden una norma que probar.

**3. ¿Podría cada uno de nosotros explicar el último cambio que entregamos con ayuda de la IA y sus compensaciones?**
Pruébenlo en parejas. Noten dónde fue fácil explicar y dónde difícil. Hablen de lo que eso nos dice de nuestro uso de la herramienta y de cómo mantener alta la comprensión.

**4. ¿Qué seguimos haciendo bien sin la herramienta y de qué estamos perdiendo el tino?**
Enumeren las tareas clave, valoren con honestidad la confianza y planifiquen algo de práctica sin ayuda o de trabajo en parejas. La conversación saca además a la luz lo que la gente valora de su trabajo y quiere conservar.

**5. ¿Dónde nos ayudó más y menos la IA y qué tienen en común esos lugares?**
Comparen ejemplos. Busquen rasgos como tareas bien definidas, buenas pruebas o dominios conocidos. Usen los hallazgos para guiar dónde usar la herramienta.

**6. ¿Qué mediríamos si no confiáramos en nuestras primeras impresiones?**
Pidan al grupo que nombre la evidencia que le haría cambiar de opinión sobre la herramienta en uno u otro sentido. Usen las respuestas para definir la siguiente comparación.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega tienen la experiencia diaria y los resultados de calidad. Deben etiquetar el trabajo asistido, vigilar la retención y el retrabajo, mantener significativa la revisión y conservar su propia comprensión. Deben hablar cuando el volumen de cambio generado supere su capacidad de revisarlo.

### Equipos de servicio y de operaciones

Los equipos de operaciones usan la IA para resúmenes, diagnóstico y respuestas, y heredan los problemas de calidad que se escapan. Deben muestrear las salidas, comparar las tasas de reapertura y de contactos repetidos y mantener una responsabilidad humana clara sobre las acciones en producción. Deben ayudar a definir dónde la IA no debe actuar sin una persona.

### Liderazgo y gobernanza

Los líderes afrontan la presión de mostrar ganancias y pueden sentirse tentados por las métricas de uso y de producción. Deben insistir en medidas de retención, retrabajo y estabilidad junto a la velocidad, financiar la capacidad de revisión, proteger el desarrollo de habilidades y resistirse a clasificar a las personas. La gobernanza debe esperar comparaciones y salvedades en los informes de beneficios de la IA.

### Clientes y usuarios

Los usuarios reciben los resultados: el código que ejecuta sus servicios, las respuestas a sus solicitudes, los documentos en que confían. Se benefician cuando la calidad se mantiene y sufren cuando no. Deben poder llegar a una persona, y su retroalimentación sobre las interacciones asistidas es una evidencia clave de la calidad.

## En la práctica: un ejemplo de gestión de servicios

El grupo digital de una aerolínea europea tiene seis equipos de producto que construyen y operan software de reservas y de operaciones. Los equipos empezaron a usar un asistente de programación con IA hace un año, y el panel del grupo reporta que el 38 por ciento de las líneas incorporadas las genera la IA. Los números siguientes son ilustrativos.

La jefa de excelencia de ingeniería está inquieta por ese panel. Pide a tres equipos que etiqueten los cambios asistidos mediante los registros de la herramienta, solo a nivel de equipo, y que elijan cambios de comparación de tamaño y área parecidos. En un trimestre, el tiempo mediano desde la primera confirmación hasta la incorporación es menor para los cambios asistidos, 1,4 días frente a 2,0. La tasa de retención de los cambios asistidos a los 30 días es del 81 por ciento frente al 90 por ciento de los cambios de comparación, y el 12 por ciento de los cambios asistidos necesitó una corrección posterior en 14 días frente al 7 por ciento. La carga de revisión cuenta la misma historia: el tiempo mediano de revisión por cambio es un 35 por ciento mayor para los cambios asistidos, y el percentil 85 del tamaño de los cambios ha crecido. Los defectos escapados por cada 100 cambios son ligeramente mayores para los cambios asistidos, aunque la muestra es pequeña y la diferencia está dentro de la variación normal. Una muestra de 40 cambios asistidos muestra que en 31 el autor pudo explicar bien el enfoque y sus compensaciones, en 6 parcialmente y en 3 en absoluto, sobre todo en áreas de código nuevas para el autor. En el centro de servicios, las respuestas asistidas tuvieron una tasa de reapertura del 7 por ciento frente al 6 de las no asistidas, con una satisfacción similar. En un pulso del equipo, los ingenieros más nuevos valoran su confianza para implementar funciones centrales sin la herramienta en 2,6 sobre 5, frente a 4,1 para los ingenieros con más de tres años en el grupo.

La jefa de excelencia de ingeniería lleva los resultados a los equipos y no los clasifica. Los equipos acuerdan cuatro cambios. Unos límites de tamaño de los cambios y un turno de revisión protegen a los revisores. Los autores explican brevemente los cambios asistidos en la revisión. Los ingenieros más nuevos trabajan en parejas con los experimentados en las funciones centrales, y un ejercicio mensual sin ayuda mantiene las habilidades en práctica. El panel abandona la proporción de líneas generadas y muestra la retención, el retrabajo, la carga de revisión y los defectos escapados, asistidos frente a comparación. Tres meses después, la brecha de retención se estrecha a 4 puntos, las correcciones posteriores bajan al 8 por ciento y mejora la comprobación de explicación. Una vicepresidenta pide que la proporción de líneas generadas sea un objetivo para todos los equipos. La jefa de excelencia de ingeniería explica los hallazgos y propone seguir haciendo seguimiento de los resultados, añadiendo que las ganancias son reales en algunas tareas y no en otras, y que el equipo decidirá dónde usar la herramienta. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Un ritmo sostenible y las personas motivadas incluyen proteger la comprensión, así que revisa el trabajo asistido por IA con el equipo con una cadencia regular y mira lo que sobrevivió. La precaución es que medir el uso individual de la IA convierte una práctica de equipo en vigilancia.

### IA

Juzga el trabajo asistido por IA por lo que sobrevive a la revisión y a la producción y por si las personas siguen entendiendo lo que entregan. Empareja la retención y el retrabajo con una comprobación de explicación y una valoración de confianza sin ayuda, y mantén los datos a nivel de equipo. La precaución es que los borradores rápidos desplazan el esfuerzo a los revisores, así que mide además la carga de revisión.

### Automatización

Etiqueta automáticamente los cambios asistidos por IA donde lo permitan las herramientas y mide el etiquetado por su cobertura, ya que el trabajo sin etiquetar rompe la comparación. La precaución es que las etiquetas automáticas pueden eliminarse o pasarse por alto, así que muestrea.

### Analítica

Compara el trabajo asistido por IA y el demás en las mismas medidas, con recuentos e incertidumbre. La decisión a la que informa es dónde la ayuda de la IA es real y dónde añade retrabajo. La precaución es que los dos grupos de trabajo pueden diferir en clase, así que evita afirmaciones causales a partir de una comparación aproximada.

## Perspectiva sectorial

**Startup.** Los equipos pequeños pueden ganar mucho con la asistencia y también acumular deuda oculta deprisa. Haz seguimiento de la retención y el retrabajo desde el principio, mantén significativas las pruebas y asegura que las personas que mantendrán el sistema lo entiendan. Cuidado con entregar código que nadie puede explicar.

**Pequeña empresa.** La asistencia puede estirar a un equipo diminuto. Mide con una muestra pequeña: con qué frecuencia el trabajo asistido necesita arreglos más tarde. Conserva copias de seguridad, pruebas y revisión humana de todo lo que se dirija al cliente y protege la comprensión del dueño sobre los sistemas de que depende.

**Gran empresa.** La escala amplifica tanto las ganancias como los problemas. Ofrece una guía compartida sobre etiquetado, límites de revisión y medidas, compara entre equipos con cuidado sin clasificar e invierte en capacidad de revisión y de pruebas. Incluye en el pipeline la revisión de seguridad y de licencias del código generado (véase el tema 7.2, Métricas de activos de software y licencias).

**Gobierno y sector público.** Los sistemas públicos tienen vidas largas, una rendición de cuentas estricta y graves consecuencias por los errores. Exige una responsabilidad humana rastreable, pruebas cuidadosas y documentación de cómo se usó la IA. Registra el trabajo asistido en los registros de cambios y evalúa los riesgos para la imparcialidad y la seguridad (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las herramientas y los cargos por uso, el esfuerzo de etiquetar y vincular registros, el tiempo de revisar y corregir, las pruebas adicionales y la formación. Un estudio de comparación lleva tiempo, pero es barato frente a una decisión equivocada de escalar o de prohibir.

Los retornos son reales donde la asistencia reduce el esfuerzo sin reducir la calidad, y se pierden donde traslada el esfuerzo a la revisión, el retrabajo y el mantenimiento. Construye el caso con tus propias medidas: el tiempo hasta un cambio incorporado y retenido, el retrabajo y los defectos escapados frente a la comparación, la carga de revisión y la satisfacción de usuarios y personal. Evita usar cifras publicadas de productividad como tu estimación. Recuerda los costos ocultos: comprensión reducida, pérdida de habilidades y deuda técnica. Sé honesto sobre la incertidumbre (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar líneas generadas o sugerencias aceptadas.** Premian el volumen. Mide lo que sobrevive.
- **Comparar trabajo asistido en tareas fáciles con trabajo no asistido en tareas difíciles.** El resultado favorece o castiga a la herramienta. Empareja las tareas.
- **Dejar que la capacidad de revisión se quede atrás.** La calidad cae en silencio. Limita el tamaño de los cambios y protege a los revisores.
- **Saltarse las medidas posteriores.** El costo aparece después. Haz seguimiento del retrabajo, los defectos y la estabilidad.
- **Tratar las pruebas generadas como calidad.** Pueden pasar sin comprobar nada. Prueba las pruebas.
- **Ignorar las habilidades.** La comprensión se desvanece sin notarse. Haz seguimiento de la confianza sin ayuda y practica.
- **Monitorizar a individuos.** Genera miedo y esconde problemas. Mantén los datos a nivel de equipo.
- **Declarar la victoria con un estudio breve y pequeño.** Repítelo a medida que cambian las herramientas y las prácticas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Medir lo que sobrevive | Recuentos de producción | Impresiones informales de calidad | Trabajo asistido etiquetado; retención y retrabajo con seguimiento frente a la comparación | Defectos posteriores, estabilidad y carga de revisión gestionados juntos | La evidencia entre equipos guía dónde se usa la asistencia; resultados ampliamente compartidos |
| Revisión y comprensión | Revisión como antes | Preocupación por la sobrecarga | Normas de tamaño de los cambios; comprobaciones de explicación muestreadas | Capacidad de revisión planificada; sesgo de automatización contrarrestado | Revisión y comprensión integradas en cómo trabajan todos los equipos con la IA |
| Personas y habilidades | No se considera | Anécdotas | Confianza sin ayuda medida con pulsos; algo de práctica | Desarrollo de habilidades planificado; tendencias gestionadas | Aprendizaje y oficio protegidos en toda la organización; uso de la IA codiseñado con el personal |

## Lista de verificación

- [ ] El trabajo asistido por IA se etiqueta a nivel de equipo mediante registros de la herramienta o una convención ligera.
- [ ] Se define trabajo de comparación de tamaño, área y riesgo parecidos.
- [ ] La retención y el retrabajo posterior a la incorporación se siguen para el trabajo asistido y el de comparación.
- [ ] Los defectos escapados y la tasa de fallos de cambio se reportan junto a cualquier medida de velocidad.
- [ ] El tiempo de revisión, las rondas y el tamaño de los cambios se monitorizan, con normas de tamaño.
- [ ] Los autores pueden explicar los cambios asistidos, y cada trimestre se comprueba una muestra.
- [ ] Las pruebas generadas se muestrean para ver su valor.
- [ ] El soporte asistido se compara en tasa de reapertura, contactos repetidos y satisfacción.
- [ ] La confianza sin ayuda se mide con pulsos y se planifica práctica sin ayuda.
- [ ] Los datos individuales de uso y de aceptación no se usan en la evaluación.

## Prompts de IA

**Planifica una comparación de cambios asistidos y no asistidos.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Diseña una comprobación de explicación.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Revisa las medidas posteriores.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Planifica la práctica sin ayuda.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una medida del trabajo asistido por IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica del trabajo asistido por IA mide lo que sobrevive y lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Mide lo que sobrevive: retención, retrabajo, defectos escapados y estabilidad, frente a un trabajo comparable no asistido.
- Protege la capacidad de revisión y mantén profunda la revisión, porque limita la rapidez con que el trabajo asistido puede fluir con seguridad.
- Comprueba que los autores pueden explicar lo que entregan y fíjate en si las habilidades crecen o se desvanecen.
- Muestrea las pruebas y las salidas generadas para ver su valor real.
- Lee las afirmaciones de productividad publicadas como estudios únicos y mide tu propio trabajo.
- Mantén los datos individuales de uso fuera de la evaluación.

## Referencias y lecturas complementarias

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
