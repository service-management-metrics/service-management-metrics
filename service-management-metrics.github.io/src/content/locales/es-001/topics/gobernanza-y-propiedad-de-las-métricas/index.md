# Gobernanza y propiedad de las métricas

**Una métrica que nadie posee, define, revisa ni retira se irá alejando del trabajo que describe, así que da a cada métrica reportada un responsable con nombre, una definición escrita, una fecha de revisión y una salida.**

## Visión general y motivación

La gobernanza de métricas es el conjunto de decisiones ligeras sobre quién posee una medida, qué significa, quién puede verla, con qué frecuencia se revisa y cuándo se retira. Es una prima cercana de la [gobernanza de datos](https://en.wikipedia.org/wiki/Data_governance), que abarca la gestión más amplia de la disponibilidad, la calidad y la seguridad de los datos en una organización. La gobernanza de métricas aplica la misma disciplina al conjunto pequeño y muy visible de números que equipos y líderes usan para dirigir el trabajo de servicio y de entrega.

La necesidad se manifiesta como pequeñas fricciones repetidas. Dos equipos calculan el «tiempo de resolución» de forma distinta y dedican una reunión a conciliar las cifras. Un elemento del panel queda obsoleto durante meses porque la persona que lo construyó cambió de puesto. Una medida diseñada para que un equipo diagnostique su flujo es adoptada por un comité de dirección como objetivo de rendimiento, que es la situación sobre la que advierte el tema anterior (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Ninguno de estos es un problema estadístico. Cada uno es un problema de propiedad, y cada uno es barato de prevenir.

Las visiones ágil e ITIL difieren en el énfasis, y la diferencia es útil. En la visión ágil, un equipo posee sus medidas de trabajo y las negocia en retrospectivas, acuerdos de trabajo y revisiones. La visión de ITIL, tal como se documenta en ITIL 4 (la edición de 2019 de AXELOS, hoy publicada por PeopleCert), trata la medición y la elaboración de informes como una práctica general de gestión y la mejora continua como una práctica con sus propios roles, registros y revisión. ITIL espera además que los propietarios de servicios y de prácticas respondan de los resultados. Las dos visiones encajan: el equipo posee la vista de trabajo, un propietario de servicio o de práctica con nombre posee la vista reportada y un pequeño registro enlaza ambas.

Algunos términos usados aquí. Un **responsable de métrica** es la única persona que responde de la definición, la calidad de los datos y el uso de una métrica. Un **registro de métricas** es un breve catálogo de las métricas en uso, con el responsable, la definición, la fuente de datos, la barrera de protección y la fecha de revisión de cada una. Una **carta de métricas** es una declaración de una página sobre el propósito, el alcance, los roles y la cadencia de revisión de un conjunto de métricas. Una **[fuente única de verdad](https://en.wikipedia.org/wiki/Single_source_of_truth)** es el único sistema o conjunto de datos autorizado a partir del cual se calcula una cifra dada. Un **[administrador de datos](https://en.wikipedia.org/wiki/Data_steward)** (data steward) cuida de la calidad y la definición de un dominio de datos, y en una organización pequeña el responsable de la métrica suele desempeñar este papel. Una **[matriz RACI](https://en.wikipedia.org/wiki/RACI_matrix)** registra quién es responsable, quién rinde cuentas, quién es consultado y quién es informado en cada actividad. Un **[diccionario de datos](https://en.wikipedia.org/wiki/Data_dictionary)** es un catálogo de elementos de datos y sus significados, en lo que se convierte la columna de definiciones del registro a mayor escala. El **[principio de mínimo privilegio](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** dice que las personas y los sistemas obtienen el acceso que necesitan para su tarea y nada más. La **[mejora continua](https://en.wikipedia.org/wiki/Continual_improvement_process)** es el esfuerzo permanente por mejorar los servicios, las prácticas y las formas de trabajar, y es a la vez una práctica de ITIL y un hábito ágil. SLA significa acuerdo de nivel de servicio e ITSM significa gestión de servicios de TI.

## Principios clave

- **Cada métrica reportada tiene un único responsable con nombre.** Un rol o una persona, nunca «el equipo». La propiedad compartida deja la definición sin mantenimiento.
- **Una definición, una fuente única de verdad.** Escribe la definición una sola vez, incluido dónde empieza y se detiene el reloj, y calcula la cifra en un solo lugar.
- **Gobierna en proporción a la consecuencia.** Una métrica que un equipo usa para depurar su propio tablero necesita una frase. Una métrica en un contrato, un informe público o un paquete de la junta necesita una entrada en la carta, revisión y pista de auditoría.
- **El acceso sigue al propósito.** Decide quién ve qué vista y por qué. La audiencia por defecto de la vista de trabajo de un equipo es el propio equipo.
- **Revisa con una cadencia y retira con evidencias.** Las métricas tienen ciclos de vida. Adóptalas, revísalas, modifícalas y retíralas deliberadamente.
- **Escríbelo y mantenlo breve.** Un registro que cabe en una página se lee. Un manual de políticas no.
- **La gobernanza sirve a las personas medidas.** Entre los responsables de una métrica están las personas cuyo trabajo describe.

## Definiciones de métricas

Estas son medidas de la salud de una práctica de métricas, no de un servicio. Son deliberadamente pocas y baratas de recoger del propio registro. Cada periodo es un trimestre natural salvo que se indique otra cosa.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de responsables | Proporción de las métricas reportadas con un responsable con nombre y vigente | métricas reportadas con un responsable que sigue en el rol al cierre del periodo / métricas reportadas al cierre del periodo; excluye las métricas usadas solo dentro del tablero privado de un equipo | porcentaje | Registro de métricas | Medición y elaboración de informes | Acuerdos de trabajo | Trimestral |
| Vigencia de las definiciones | Proporción de las métricas reportadas cuya definición se revisó dentro del intervalo acordado | métricas con una fecha de revisión en los últimos 6 meses / métricas reportadas; el reloj empieza en la última revisión registrada y se detiene al cierre del periodo | porcentaje | Registro de cambios del registro de métricas | Medición y elaboración de informes; mejora continua | Acciones de la retrospectiva | Trimestral |
| Conformidad de la fuente | Proporción de las métricas reportadas calculadas a partir de exactamente una fuente con nombre | métricas con una fuente autorizada y sin cálculo paralelo conocido / métricas reportadas; los cálculos paralelos se detectan muestreando paneles e informes | porcentaje | Registro más una muestra de paneles e informes | Medición y elaboración de informes; gestión de niveles de servicio | Definición de terminado de una métrica | Trimestral |
| Tasa de retirada | Número de métricas retiradas o fusionadas en un periodo en relación con las reportadas | métricas retiradas o fusionadas en el periodo / métricas reportadas al inicio del periodo; una métrica trasladada a la vista privada de un equipo cuenta como retirada del conjunto reportado | porcentaje | Registro de cambios del registro de métricas | Mejora continua | Acciones de la retrospectiva | Trimestral |
| Vigencia de la revisión de accesos | Proporción de las vistas de métricas restringidas cuya lista de audiencia se revisó dentro del intervalo | vistas restringidas con una revisión de audiencia en los últimos 6 meses / vistas restringidas; se excluyen las vistas abiertas a toda la organización | porcentaje | Lista de acceso o exportación de permisos de la herramienta de BI | Gestión de la seguridad de la información; medición y elaboración de informes | Acuerdos de trabajo | Semestral |
| Vinculación con decisiones | Proporción de las métricas reportadas vinculadas en el registro a una decisión a la que informan | métricas con una decisión o pregunta registrada / métricas reportadas; un vínculo cuenta solo si la decisión se tomó en los últimos 12 meses | porcentaje | Registro de métricas y registro de decisiones | Mejora continua | Revisión con las partes interesadas y resultados de mejora | Trimestral |

Ninguna de ellas es un objetivo. Un registro puede mostrar una cobertura completa de responsables y aun así describir métricas inútiles, así que lee la tabla junto con la tabla de manipulación de más abajo.

## Recomendaciones

### Establece la propiedad y el registro

**1. Mantén un registro de métricas de una página.** Enumera cada métrica reportada con su pregunta, responsable, definición, fórmula y relojes, unidad, fuente de datos, audiencia, barrera de protección, fecha de la última revisión y fecha de la próxima revisión prevista. Basta una hoja de cálculo o un archivo Markdown en control de versiones. El registro es el artefacto más útil de este tema, y el tema anterior ya da por supuesto que existe (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

**2. Nombra un responsable por métrica y registra el rol.** El responsable responde de la definición, la calidad de los datos y la explicación de los resultados extraños. Elige a alguien cercano a los datos y a las decisiones, a menudo el propietario del servicio, un propietario de práctica o un jefe de equipo. Registra el rol además de la persona, para que la entrada sobreviva a un cambio de puesto y una vacante aparezca en la cifra de cobertura.

**3. Separa poseer una métrica de poseer el trabajo que mide.** El responsable de una métrica la explica y la mantiene, pero el equipo que hace el trabajo sigue siendo responsable del resultado. Esto evita dos trampas: el responsable al que se culpa de un número sobre el que no puede influir y el equipo que desconoce un número porque lo mantiene otro. Una breve tabla RACI en la carta lo hace explícito.

**4. Escribe la definición con sus relojes, una sola vez.** El registro contiene la definición autorizada: qué se cuenta, dónde empieza y se detiene el reloj, qué estados lo pausan y qué se excluye. Enlázala desde cada panel que muestre la métrica. Cuando una definición necesite cambiar, cámbiala primero en el registro y marca el cambio en el gráfico (véase el tema 1.6, Alfabetización estadística para métricas de servicio, para ver cómo mostrar una ruptura en una tendencia).

**5. Calcula cada métrica en un solo lugar.** Elige la fuente autorizada, como la herramienta ITSM, el gestor de incidencias o el sistema de monitorización, y dilo en el registro. Las hojas de cálculo paralelas que reproducen la cifra deben retirarse o renombrarse para que nadie las confunda con el número oficial. El linaje de los datos y las herramientas corresponden al tema siguiente (véase el tema 1.5, Fuentes de datos e instrumentación).

### Fija la cadencia y el control de cambios

**6. Revisa las definiciones con un calendario proporcional a la consecuencia.** Para las métricas de contratos, informes regulados o paquetes ejecutivos, revisa dos veces al año y ante cualquier cambio en el flujo de trabajo subyacente. Para las medidas de trabajo a nivel de equipo, la retrospectiva es la revisión. Cada revisión plantea tres preguntas: ¿sigue siendo exacta la definición?, ¿siguen siendo sólidos los datos? y ¿usó alguien el número para decidir algo?

**7. Trata los cambios de definición como cambios en un servicio.** Registra quién solicitó el cambio, por qué, a quién se consultó y la fecha en que entra en vigor. Un pequeño cambio en un flujo de estados puede mover en silencio una medida de tiempo en una cantidad grande. El control de cambios ligero para las definiciones toma la idea de la habilitación de cambios sin la ceremonia (véase el tema 4.3, Métricas de habilitación de cambios, para la contrapartida de los cambios de servicio).

**8. Une la revisión a la mejora continua.** Las revisiones de métricas deben producir trabajo de mejora o una decisión explícita de no actuar. ITIL trata la mejora continua como una práctica con un registro de oportunidades de mejora, y los equipos ágiles consiguen el mismo efecto con las acciones de retrospectiva. Si una revisión termina sin acción y sin retirada, pregunta si la métrica está haciendo algún trabajo (véase el tema 9.5, Métricas de mejora continua).

**9. Retira las métricas deliberadamente.** Define una prueba de retirada, por ejemplo «no citada en una decisión durante dos ciclos de revisión», y aplícala. Archiva la definición y los valores finales, di qué la sustituyó, si algo lo hizo, e informa a la audiencia. Un registro de retiradas es evidencia para los auditores y un alivio para quienes mantenían los datos a mano.

### Controla las vistas y el acceso

**10. Decide la audiencia de cada vista.** La mayoría de las métricas tienen una vista de trabajo para el equipo, una vista reportada para el propietario del servicio o el programa y, a veces, una vista externa para clientes, un regulador o un proveedor. Registra qué audiencia recibe qué vista y por qué. Tomando como guía el principio de mínimo privilegio, restringe las vistas que contengan datos personales, detalles de seguridad o cifras comerciales sensibles de proveedores, y deja abiertas las demás para que la transparencia sea la opción por defecto.

**11. Mantén los datos a nivel individual fuera de los informes.** La regla firme de este libro es que las métricas describen equipos, servicios y sistemas, no personas. La gobernanza lo respalda fijando el grano reportado, por ejemplo equipo y servicio, y restringiendo cualquier extracción a nivel de persona al administrador de datos. Si llega una petición de un desglose a nivel de persona, regístrala, pregunta a qué decisión sirve y ofrece una alternativa a nivel de equipo o de sistema (véase el tema 11.3, Implantar métricas sin sembrar miedo).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de responsables | Nombrar a un gerente o una lista de correo como responsable para llegar al 100 por ciento, sin nadie que pueda explicar o cambiar la métrica | Pedir a cada responsable que explique un movimiento reciente del número; seguir las preguntas que quedaron sin respuesta más de una semana |
| Vigencia de las definiciones | Tocar la fecha de revisión sin leer la definición | Muestrear tres entradas cada trimestre y comparar la definición escrita con la configuración real de la herramienta |
| Conformidad de la fuente | Declarar autorizada una fuente mientras siguen circulando hojas de cálculo que discrepan | Contar las cifras distintas de la misma métrica halladas en una muestra de informes; conciliar las diferencias en la revisión |
| Tasa de retirada | Retirar métricas triviales o sin uso para parecer disciplinado, o renombrar una métrica para que cuente como nueva | Revisar el registro de retiradas para ver qué se eliminó; seguir el recuento total reportado y la cifra de vinculación con decisiones |
| Vigencia de la revisión de accesos | Aprobar la lista de audiencia existente sin leerla | Comparar la lista con la composición y los roles actuales de los equipos; informar del número de supresiones halladas |
| Vinculación con decisiones | Escribir una decisión vaga como «mejorar el servicio» para satisfacer el campo | Exigir una decisión o pregunta con fecha y muestrear el registro de decisiones para ver si la métrica se consultó realmente |

Una lectura sana es un registro que cambia. Las entradas tienen responsables que contestan preguntas, fechas de revisión que caen en los últimos seis meses, un registro de retiradas con motivos y una lista corta de métricas que siguen haciendo falta porque las personas pueden nombrar la decisión a la que informan. Un registro con todos los campos llenos y en el que nada cambia nunca es una señal de alarma.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Oficina central de métricas | Definiciones coherentes y herramientas compartidas; auditoría más fácil | Lenta, alejada del trabajo y tentada de estandarizar medidas que deberían diferir entre equipos |
| Propiedad federada con un registro compartido | Los responsables están cerca de los datos; el registro mantiene un mínimo común | Necesita estímulo constante para evitar que la calidad se desvíe entre equipos |
| Solo medidas propiedad de los equipos | Rápido y adaptado al trabajo | Las definiciones divergen; las consolidaciones dejan de ser fiables; el conocimiento se va con las personas |
| Acceso abierto por defecto | Genera confianza y comprensión compartida | Riesgo de exponer detalles sensibles o a nivel de persona |
| Acceso restringido | Protege los datos sensibles | Oculta el contexto a quienes podrían ayudar e invita a la sospecha |

El equilibrio consiste en centralizar la capa delgada que debe concordar, que es el registro, las definiciones compartidas y las reglas de acceso, y federar todo lo demás.

## Preguntas para debatir con tu equipo

**1. ¿Quién respondería si mañana el número más citado de nuestro panel pareciera erróneo?**
Pide al grupo que nombre a una persona, no a un grupo. Si salen varios nombres, o ninguno, la métrica no tiene responsable en la práctica. El facilitador debe anotar la métrica, el responsable candidato y lo que este necesitaría para hacer el trabajo, como acceso de lectura a los datos o tiempo en la revisión. Cierra acordando quién confirmará al responsable y registrará el rol en el registro.

**2. ¿Dónde existen hoy dos versiones de la misma cifra?**
Busca informes que muestren la misma métrica con valores distintos: una diapositiva semanal frente a un panel en vivo, o un informe de un proveedor frente al interno. Para cada uno, pregunta de dónde surge la diferencia, como el alcance, el reloj o las exclusiones. Decidan qué fuente es la autorizada y qué ocurre con la otra versión. Espera que la conversación descubra definiciones de trabajo distintas de palabras que todos daban por compartidas.

**3. Si tuviéramos que retirar una métrica este trimestre, ¿cuál sería?**
Empieza por la métrica que nadie ha citado recientemente en una decisión. Pregunta qué pasaría si desapareciera y quién lo notaría. Si la respuesta es «nadie», sácala del conjunto reportado durante un periodo de prueba. El facilitador debe tratar la retirada como algo normal y sano, y anotar el resultado en el registro de retiradas.

**4. ¿Quién ve cuáles de nuestras métricas y es a propósito?**
Dibuja una cuadrícula sencilla de métricas frente a audiencias: equipo, propietario del servicio, dirección, clientes, proveedores, reguladores. Marca dónde el acceso fue una decisión y dónde simplemente ocurrió. Busca cualquier vista que pudiera usarse para comparar individuos. Acuerden un cambio en al menos una lista de audiencia y quién la revisará a continuación.

**5. ¿Cómo cambiamos una definición sin romper la tendencia?**
Repasa un cambio reciente en un flujo de estados o en una escala de prioridades. Pregunta a quién se avisó, si se anotó el gráfico y si alguien comparó los valores antiguo y nuevo. Redacta una entrada de cambio ligera que el equipo rellenaría de verdad. Acuerden quién aprueba los cambios en las métricas que aparecen en contratos o informes externos.

**6. ¿Qué dejaríamos de hacer si la gobernanza se volviera una carga?**
La gobernanza puede convertirse en un ritual. Pregunta qué partes del enfoque actual se saltaría la gente si nadie lo comprobara, y por qué. Trata las respuestas como retroalimentación de diseño y no como resistencia. El facilitador debe buscar pasos que se dupliquen, campos que nadie lee y revisiones que nunca producen una decisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen medidas de trabajo como la antigüedad de los elementos de trabajo y el tiempo de ciclo, y deben acordar las definiciones en sus acuerdos de trabajo. Cuando una métrica sube a un informe de cartera, el equipo debe conocer al responsable, la definición y la audiencia. Los equipos obtienen el mayor valor de una breve entrada de registro para cada medida reportada y del derecho a cuestionar una definición que ya no encaja con cómo fluye el trabajo (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y de operaciones

Los equipos de servicio y de operaciones llevan las métricas que aparecen en los SLA y en las revisiones operativas, de modo que las definiciones, los relojes y las exclusiones tienen peso contractual. Los responsables aquí suelen ser propietarios de servicios y de prácticas. Deben conservar una pista de evidencias de los cambios de definición, conciliar con regularidad las cifras reportadas con la herramienta ITSM y ser los primeros en retirar una medida que haya dejado de informar decisiones operativas (véase el tema 5.1, Métricas de SLA, OLA y XLA).

### Liderazgo y gobernanza

Los líderes fijan las condiciones: quién posee las métricas, qué vistas llegan al paquete ejecutivo y cómo se usan los números. Deben pedir el registro y el registro de retiradas, leer las definiciones que hay detrás de las cifras principales y resistir las peticiones de clasificaciones a nivel de persona. Los órganos de gobernanza necesitan un punto permanente y breve que revise el registro y anote las decisiones, en línea con las expectativas de ISO/IEC 20000-1 para los sistemas de gestión de servicios (según su edición de 2018), sin convertir la revisión en un ejercicio de cumplimiento (véase el tema 8.3, Métricas de cumplimiento y auditoría).

### Clientes y usuarios

Los clientes y usuarios rara vez ven el registro, pero notan su ausencia cuando una cifra de una revisión de servicio difiere de su experiencia. Cuando una métrica aparece en un informe dirigido al cliente o en un SLA, la definición debe estar disponible en lenguaje llano, incluido lo que se excluye. Los clientes deben tener un cauce para cuestionar una cifra, y el responsable debe contestar (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio tiene un centro de servicios, tres equipos de producto y un grupo de operaciones. Todos los números siguientes son ilustrativos.

La revisión mensual de servicio muestra un tiempo de resolución de incidentes de 5,1 horas para la mediana. El panel propio de los equipos de producto, construido con la misma herramienta ITSM, muestra 6,4 horas. Las dos cifras llevan un año en circulación. Un nuevo propietario de servicio pregunta quién posee la métrica y recibe tres respuestas distintas.

El propietario, con los jefes de equipo y el administrador de datos, dedica dos sesiones a un primer registro de 14 métricas reportadas. De ellas, 5 no tenían responsable y 4 tenían dos fuentes. El tiempo de resolución es una de las métricas de doble fuente. La diferencia se debe a un estado de pausa: la revisión de servicio excluye el tiempo en «a la espera del cliente» y el panel del equipo no. El grupo acuerda una sola definición, nombra al propietario del servicio como responsable de la métrica y publica ambos valores en la misma página durante un trimestre, etiquetados por definición, para que nadie pierda el historial. Anotan el gráfico donde cambia la definición.

En la primera revisión trimestral, el grupo aplica una prueba de retirada y elimina 3 de las 14 métricas, entre ellas un gráfico mensual de recuento de tickets que ninguna decisión reciente había citado. También restringen la vista que desglosa el tiempo de resolución por analista, dejando al administrador de datos como único titular, y ofrecen en su lugar un desglose a nivel de equipo.

En la segunda revisión aparece un riesgo de manipulación. La cobertura de responsables llega al 100 por ciento, pero una muestra revela que dos de los responsables son una lista de distribución y un jefe de departamento que nunca ha abierto los datos. El grupo los sustituye por propietarios de servicio con nombre y añade a la revisión la pregunta de la barrera de protección: «¿Puede el responsable explicar el último movimiento de este número?». La cobertura baja al 86 por ciento durante un trimestre, que el grupo anota como un resultado honesto. La decisión registrada es mantener el objetivo de cobertura hasta que la barrera de protección haya funcionado durante dos ciclos.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata el registro de métricas como un documento vivo que el equipo actualiza cuando aprende algo, no como un ejercicio de diseño puntual. Un hábito práctico es una breve revisión periódica en la que el responsable de la métrica, el equipo y una parte interesada acuerdan qué métricas se mantienen, cambian o se retiran. La precaución es que los cambios pequeños y frecuentes pueden romper las tendencias, así que registra cada cambio con un motivo.

### IA

Las métricas sobre sistemas de IA necesitan un responsable igual que las métricas de servicio, y el responsable necesita autoridad para pausar el sistema cuando los números indican que perjudica a los usuarios. Anota en el registro qué métricas describen el trabajo asistido por IA y quién revisa su pareja de calidad. La precaución es que los paneles de IA que aportan los proveedores tienen sus propias definiciones, así que regístralos citando la definición del proveedor y comprobándola.

### Automatización

Automatiza la higiene del registro: señala las métricas sin responsable, sin fecha de revisión o sin cita reciente en una decisión, y avisa al responsable. La precaución es que un recordatorio automático al que nadie responde es ruido, así que mide cuántas señales llevan a una acción y retira las que no.

### Analítica

Trata también el acceso a los datos de las métricas como una cuestión de gobernanza: quién puede ver los datos a nivel de equipo, quién puede ver los tickets en bruto y cuánto tiempo se conservan los datos. La decisión a la que informa el registro es qué conservar, cambiar o retirar. La precaución es que la analítica del comportamiento de las personas puede cruzar la línea hacia la vigilancia, así que mantén las métricas a nivel de equipo y de servicio y comprueba las normas de privacidad que te apliquen.

## Perspectiva sectorial

**Startup.** Un fundador o ingeniero principal suele poseer todas las métricas por defecto. El riesgo es que las definiciones vivan en una sola cabeza. Mantén un registro de cinco a ocho métricas en un documento compartido, nombra un responsable para cada una y escribe las definiciones el día en que una métrica aparece por primera vez en una actualización a inversores o clientes.

**Pequeña empresa.** La persona que dirige TI suele ser responsable, administrador y lector de informes a la vez. Limita la gobernanza a una sola página, revisa dos veces al año y presta especial atención cuando un informe de un proveedor define una métrica de forma distinta a la tuya. Nombra quién en el negocio posee cada cifra dirigida al cliente.

**Gran empresa.** La escala hace imprescindible la capa compartida. Usa un registro con flujo de trabajo, un consejo ligero que se reúna trimestralmente y un rol de administrador de datos para cada dominio importante. Preserva la autonomía de los equipos para las medidas de trabajo y evita estandarizar métricas que deberían diferir entre tipos de servicios. Alinearse con la gobernanza de datos ya presente en la organización ahorra esfuerzo.

**Gobierno y sector público.** La información regulatoria, la auditoría y la contratación pública convierten las definiciones escritas y los registros de cambios en una obligación. Trata el registro como un artefacto de auditoría y mantén una línea clara desde cada cifra publicada hasta su responsable y su fuente. Las decisiones de acceso suelen implicar revisión jurídica y de privacidad, así que registra el fundamento de cada vista restringida (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es modesto y sobre todo de tiempo. Cuenta con unas horas para construir un primer registro, una o dos horas por trimestre para la revisión y algo de esfuerzo del administrador de datos para resolver fuentes en conflicto. El costo de herramientas es bajo porque basta una hoja de cálculo o un archivo con control de versiones para empezar.

El retorno es sobre todo el desperdicio evitado. Desaparecen las reuniones dedicadas a conciliar cifras, las auditorías encuentran una pista clara y la incorporación de un nuevo propietario de servicio es más rápida porque las definiciones están escritas. Las decisiones mejoran porque se apoyan en números que significan lo mismo cada mes. No cites un porcentaje para estos beneficios sin tus propios datos. Si necesitas cifras para un caso de negocio, cuenta las horas dedicadas el trimestre pasado a conciliar números contradictorios y el número de métricas sin responsable registrado, y vuelve a contarlos tras dos ciclos de revisión.

## Antipatrones y trampas

- **Propiedad por comité.** Un grupo posee la métrica y nadie responde a las preguntas. Nombra un rol responsable y un suplente.
- **El registro como cementerio.** Se construye una vez y no se vuelve a tocar. Pon las fechas de revisión en el calendario y muestra la fecha en cada panel.
- **Estandarizarlo todo.** Una definición impuesta a equipos cuyo trabajo difiere produce números que no significan nada en ninguna parte. Comparte solo la capa que debe concordar.
- **Cambios de definición silenciosos.** Las tendencias se rompen y la confianza las sigue. Registra cada cambio con su motivo y anota el gráfico.
- **Gobernanza sin retirada.** El conjunto solo crece y la atención se adelgaza. Aplica una prueba de retirada en cada revisión.
- **Secretismo por defecto.** Ocultar las vistas de trabajo a las personas medidas genera sospecha. Restringe solo lo que conlleva un riesgo real y explica por qué.
- **Acceso abierto a datos a nivel de persona.** Una sola extracción puede convertirse en una clasificación en pocos días. Fija el grano reportado en equipo y servicio y guarda cualquier dato a nivel de persona bajo el administrador de datos.
- **Teatro de cumplimiento.** Se rellenan campos para satisfacer una lista de comprobación. Muestrea las entradas para verificar que son ciertas y pide a los responsables que expliquen los movimientos recientes.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Propiedad y registro | Responsables poco claros; las métricas viven en hojas de cálculo individuales | Algunos equipos mantienen una lista con responsables | Un registro para todas las métricas reportadas, cada una con un responsable y un rol con nombre | Cobertura y vigencia con tendencias; las lagunas llevan a correcciones con recursos | Registro compartido con proveedores y clientes donde las cifras cruzan fronteras |
| Definiciones y control de cambios | Las definiciones difieren según la persona | Escritas para algunas métricas contractuales | Definición escrita con relojes y registro de cambios para cada métrica reportada | Cambios revisados por su impacto en las tendencias antes de publicarse | Definiciones revisadas conjuntamente entre equipos y proveedores cuando dejan de informar decisiones |
| Revisión y retirada | Se añaden métricas y nunca se quitan | Limpieza ocasional | Cadencia de revisión y prueba de retirada escritas | Resultados de las revisiones seguidos como trabajo de mejora | Retirada y renovación rutinarias, guiadas por evidencias de usuarios y equipos |
| Acceso y audiencia | Acceso por casualidad | Vistas restringidas para datos sensibles | Audiencia listada por métrica, con un motivo | Acceso revisado con una cadencia; datos a nivel de persona en manos del administrador | Audiencia diseñada con las personas medidas y con los clientes |

## Lista de verificación

- [ ] Existe un registro de métricas que enumera todas las métricas reportadas.
- [ ] Cada métrica reportada tiene un responsable con nombre y un rol registrado.
- [ ] Cada métrica reportada tiene una definición escrita con reglas de inicio, parada y exclusión.
- [ ] Cada métrica tiene una fuente autorizada nombrada en el registro.
- [ ] Se registran una fecha de revisión y un intervalo para cada métrica.
- [ ] Los cambios de definición se registran con un motivo y se marcan en el gráfico.
- [ ] Hay una prueba de retirada escrita y se aplica en cada revisión.
- [ ] Se registra la audiencia de cada vista, con un motivo para cualquier restricción.
- [ ] Ninguna vista reportada clasifica a individuos y los datos a nivel de persona están en manos del administrador de datos.
- [ ] El registro se ha muestreado para verificar su veracidad en el último trimestre.

## Prompts de IA

**Redacta una carta de métricas para un conjunto de métricas.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Encuentra conflictos entre dos versiones de una métrica.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Revisa un registro de métricas en busca de lagunas.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Planifica una revisión de retiradas.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema y la barrera de protección emparejada de una métrica antes de añadirla al registro.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica lleva un responsable, un vector de manipulación y una barrera de protección.

## Ideas clave

- La gobernanza mantiene los números significando lo mismo con el tiempo, y un registro de una página es su núcleo.
- Nombra un responsable por cada métrica reportada y registra el rol además de la persona.
- Escribe una definición con sus relojes, calcúlala en un solo lugar y registra cada cambio.
- Ajusta el peso de la gobernanza a la consecuencia de la métrica.
- Decide a propósito quién ve qué vista, mantén los datos a nivel de persona fuera de los informes y retira las métricas con evidencias.

## Referencias y lecturas complementarias

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
