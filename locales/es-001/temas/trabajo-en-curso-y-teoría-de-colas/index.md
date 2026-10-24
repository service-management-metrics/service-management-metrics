# Trabajo en curso y teoría de colas

**Un equipo totalmente ocupado es un equipo cuyo trabajo espera, así que mide cuánto trabajo está en curso, cuánto tiempo hace cola y qué tan cerca de su capacidad opera el equipo, y usa la aritmética de las colas para fijar límites antes de que lleguen los retrasos.**

## Visión general y motivación

Todo equipo de servicio tiene una cola, use o no la palabra. Los incidentes esperan la clasificación inicial, las solicitudes esperan la aprobación, los cambios esperan un hueco de revisión y los elementos de la lista de pendientes esperan a que alguien los tome. La mayor parte del tiempo transcurrido en estos sistemas se pasa esperando, no trabajando. Las medidas de este tema explican por qué crece la espera, cómo verla pronto y qué puede hacer un equipo al respecto.

La cantidad central es el [trabajo en curso](https://en.wikipedia.org/wiki/Work_in_process) (WIP), el número de elementos que se han iniciado y aún no se han terminado. Los equipos ágiles que gestionan el flujo hacen visible el WIP en un tablero y lo limitan con un límite de WIP. Las operaciones de servicio bajo ITIL cuentan los incidentes, solicitudes y cambios abiertos y llaman a ese conjunto una cola o una lista de pendientes de registros. Las dos visiones describen lo mismo: elementos dentro de un sistema que aún no los ha entregado. Este tema usa «trabajo en curso» para ambas y declara cada vez el límite (qué estados cuentan como «en curso» y cuáles no), porque ese límite decide cada número que sigue.

Las matemáticas proceden de la [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory), el estudio de las líneas de espera. Su resultado más útil para un equipo de servicio es la [ley de Little](https://en.wikipedia.org/wiki/Little%27s_law), demostrada por John Little en 1961. Para un sistema estable, el número medio de elementos en el sistema es igual a la tasa media de llegada multiplicada por el tiempo medio que un elemento pasa en el sistema. En términos de entrega, el WIP medio es igual al caudal medio multiplicado por el tiempo de ciclo medio. La ley se cumple sea cual sea el orden en que se atiendan los elementos, lo que la convierte en una comprobación de sensatez barata para cualquier conjunto de métricas de flujo (véase el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

El segundo resultado es menos cómodo. A medida que un recurso compartido se acerca al uso total, el tiempo de espera sube cada vez más deprisa. Una aproximación relacionada, la [fórmula de Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), muestra que el retraso en la cola crece con la utilización en proporción al cociente entre la utilización y la fracción ociosa restante, y crece también con la variabilidad de las llegadas y de los tiempos de servicio. El trabajo de soporte y operaciones es variable por naturaleza, ya que los incidentes llegan en ráfagas y el esfuerzo por elemento difiere mucho. Un equipo que planifica estar ocupado al 100 por ciento ha planificado, por tanto, esperas largas, y el primer incidente grave convierte las esperas largas en una acumulación que tarda semanas en despejarse.

Términos usados en este tema:

- La **tasa de llegada** es el número de elementos que entran en el sistema por unidad de tiempo.
- El **caudal** (o tasa de salida) es el número de elementos que salen del sistema como terminados, por unidad de tiempo.
- El **tiempo de ciclo** es el tiempo transcurrido desde el momento en que un elemento entra en el límite del sistema hasta que lo abandona. Este tema usa el mismo reloj que el tema 2.2.
- El **tiempo en cola** es la parte del tiempo transcurrido durante la cual un elemento espera y nadie trabaja en él.
- La **utilización** es la fracción de la capacidad disponible que está en uso. Para un equipo, la capacidad se expresa en horas de trabajo o en un recuento de elementos que pueden gestionarse en paralelo. La utilización es una propiedad de un equipo o de un conjunto de recursos, nunca de un individuo.
- El **límite de WIP** es un número máximo acordado de elementos en una etapa o en todo el sistema. No se inicia un elemento nuevo cuando se alcanza el límite.
- Un **cuello de botella** es la etapa con menos capacidad en relación con la demanda. Marca el ritmo de toda la cadena, un punto desarrollado por la [teoría de las restricciones](https://en.wikipedia.org/wiki/Theory_of_constraints) y su idea del [cuello de botella](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Las visiones ágil e ITIL se encuentran aquí: ITIL 4 (2019) trata la gestión de la capacidad y el rendimiento, la gestión de incidentes y la gestión de solicitudes de servicio como prácticas que dependen de ajustar la capacidad a la demanda, y los métodos ágiles expresan la misma idea como limitar el trabajo en curso y terminar antes de empezar. El [desarrollo lean de software](https://en.wikipedia.org/wiki/Lean_software_development) trata el trabajo sin terminar como inventario con costo de mantenimiento y riesgo.

## Principios clave

- **La espera domina el tiempo transcurrido.** En la mayoría de los sistemas de servicio y de entrega, los elementos esperan mucho más tiempo del que nadie trabaja en ellos, así que reducir la espera es una palanca mayor que trabajar más deprisa.
- **La ley de Little vincula los tres números de flujo.** El WIP medio, el caudal y el tiempo de ciclo no pueden fijarse de forma independiente. Si quieres un tiempo de ciclo más corto con el mismo caudal, debes bajar el WIP.
- **El retraso crece abruptamente cerca de la utilización total.** La holgura es el precio de la capacidad de respuesta. Un equipo sin capacidad de reserva no puede absorber una ráfaga ni un elemento urgente sin retrasar todo lo demás.
- **La variabilidad amplifica las colas.** Las llegadas irregulares y los tamaños de elemento irregulares alargan las colas aunque la carga media parezca aceptable. Reduce la variabilidad donde puedas y amortíguala donde no puedas.
- **Limita el WIP para terminar el trabajo, no para parecer ocupado.** Un límite de WIP es un detonante para conversar sobre el trabajo bloqueado y la capacidad, no una regla de cumplimiento.
- **Mide a nivel de sistema.** El WIP, la longitud de la cola y la utilización describen equipos y servicios, nunca a las personas que los integran.
- **Reporta distribuciones, no promedios.** Los tiempos en cola tienen colas largas, así que muestra la mediana y un percentil alto como el 85 o el 95 (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Definiciones de métricas

Siete medidas cubren el tema. Cada una se define para un límite con nombre que el equipo anota en su registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabajo en curso | Número de elementos iniciados y no terminados dentro del límite acordado | Recuento de elementos en estados «en curso» en el momento de la instantánea; se excluyen los elementos de la lista de pendientes o de la cola «listo» anteriores al primer estado de trabajo y los elementos ya hechos | elementos | Historial de estados del gestor de incidencias o de la herramienta ITSM | Gestión de incidentes; gestión de solicitudes de servicio | Recuento de WIP en el tablero | Instantánea diaria, revisada semanalmente |
| Longitud de la cola | Número de elementos que esperan a que empiece el trabajo o que esperan entre etapas | Recuento de elementos en estados de espera (por ejemplo «nuevo», «a la espera de clasificación», «a la espera de revisión») en el momento de la instantánea; los elementos bloqueados se reportan por separado, no se suman | elementos | Historial de estados del gestor o de la herramienta ITSM | Gestión de incidentes; habilitación de cambios | Columna «listo» y columnas de cola de un tablero | Instantánea diaria, revisada semanalmente |
| Tiempo en cola | Tiempo transcurrido que un elemento pasa esperando antes de que empiece el trabajo, por etapa | El reloj empieza cuando el elemento entra en un estado de espera y se detiene cuando entra en el siguiente estado activo; el tiempo en un estado marcado «bloqueado por el cliente» se excluye y se reporta como cifra propia; se reportan la mediana y el percentil 85 | horas o días | Marcas de tiempo de transición de estado en el gestor o en la herramienta ITSM | Centro de servicios; gestión de incidentes; habilitación de cambios | Tiempo de espera en un flujo de valor; tiempo en columnas de cola | Semanal |
| Tasa de llegada y de salida | Elementos que entran y salen del sistema por periodo, y su diferencia como crecimiento neto de la cola | Llegadas = elementos que entran en el límite en el periodo; salidas = elementos que se completan en el periodo; crecimiento neto = llegadas menos salidas; los elementos reabiertos cuentan como llegadas solo si el equipo así lo define | elementos por semana | Marcas de creación y resolución del gestor o de la herramienta ITSM | Monitorización y gestión de eventos; gestión de incidentes | Caudal y diagrama de flujo acumulado | Semanal |
| Razón de carga del equipo | Proporción de la capacidad del equipo que consumiría el trabajo planificado y esperado | Horas de demanda esperadas en el periodo (llegadas por esfuerzo medio por elemento) / horas de capacidad disponibles tras permisos y compromisos fijos; el equipo declara cómo estima el esfuerzo; nunca se reportan individuos | porcentaje | Plan de capacidad, historial de esfuerzo del gestor, calendario de turnos | Gestión de la capacidad y el rendimiento; gestión de la plantilla y el talento | Capacidad del equipo en trabajo planificado | Mensual y en cada evento de planificación |
| Tasa de superación del límite de WIP | Proporción de días en que una etapa o el sistema supera su límite de WIP acordado | Días con WIP por encima del límite / días laborables del periodo; los días en que el equipo registró una excepción deliberada con un motivo se reportan por separado | porcentaje de días | Instantáneas diarias de WIP y registro de excepciones | Mejora continua; gestión de incidentes | Acuerdo de trabajo sobre el límite de WIP | Semanal |
| Razón de coherencia de la ley de Little | Comprobación de que los tres números de flujo concuerdan entre sí | WIP medio del periodo / (salidas por día multiplicadas por el tiempo de ciclo medio en días) para el mismo límite y periodo; una razón cercana a 1 significa que las definiciones son coherentes, y una razón lejana de 1 significa que un límite o un reloj es incoherente | razón | Los mismos datos del gestor que las demás métricas de flujo | Medición y elaboración de informes | Comprobación de sensatez de las métricas de flujo en una retrospectiva | Mensual |

## Recomendaciones

### Define primero el límite

**1. Escribe el límite del sistema antes de contar nada.** Indica qué estado inicia «en curso» y cuál lo termina, y qué elementos se excluyen (por ejemplo el mantenimiento programado o los elementos que esperan a un cliente). Dos equipos que cuentan el WIP de forma distinta producirán números que no pueden compararse, y un límite que se mueve en silencio romperá la comprobación de la ley de Little. Anota el límite en el registro de métricas y cámbialo solo con un motivo registrado.

**2. Separa la espera del trabajo en el modelo de estados.** Si un único estado cubre tanto «en cola para revisión» como «en revisión», el tiempo en cola es invisible. Da a los estados de espera sus propios nombres, como se describe en el tema 1.5, Fuentes de datos e instrumentación, para que las marcas de tiempo de transición revelen el retraso. El costo de un estado adicional es pequeño comparado con el valor de ver dónde se detienen los elementos.

### Usa la ley de Little como comprobación de coherencia

**3. Ejecuta cada mes la comprobación de la ley de Little.** Calcula el WIP medio, el caudal y el tiempo de ciclo medio para el mismo periodo y límite, y mira si concuerdan aproximadamente. Un desajuste grande suele significar que entran o salen elementos del sistema sin contarse, o que hay elementos antiguos aparcados en un estado desatendido. Corrige los datos antes de interpretar cualquier tendencia. La ley es un teorema sobre sistemas estables, así que aplícala a periodos en que la cola no creció ni disminuyó de forma drástica.

### Vigila la utilización y el crecimiento de la cola

**4. Planifica holgura donde la variabilidad sea alta.** Para la gestión de incidentes, el trabajo de guardia y cualquier cola alimentada por una demanda aleatoria, planifica por debajo de la capacidad total para que una ráfaga no se convierta en una acumulación. Los equipos suelen descubrir que una razón de carga que parece cómoda sobre el papel ya es demasiado alta cuando se cuentan las interrupciones (véase el tema 2.9, Trabajo operativo y trabajo no planificado). Acuerda el rango objetivo con las personas que hacen el trabajo y revísalo después de cualquier incidente grave.

**5. Haz seguimiento del crecimiento neto de la cola además de su tamaño.** Una cola de 40 elementos que se reduce es sana, y una de 15 que crece 5 elementos por semana no lo es. Compara las llegadas y las salidas cada semana y grafica la tendencia con un [diagrama de flujo acumulado](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), donde una banda que se ensancha para una etapa señala un WIP creciente en ella. Cuando las llegadas superan a las salidas durante varias semanas, la cola crece sin límite y toca decidir: añadir capacidad, reducir la demanda o cambiar lo que se acepta.

**6. Lee el tiempo en cola por etapa para encontrar el cuello de botella.** Desglosa el tiempo transcurrido en periodos de espera por etapa. La etapa con el mayor tiempo en cola y más elementos esperando es candidata a cuello de botella. Mejorar cualquier otra etapa no acortará todo el sistema, así que dirige el esfuerzo de mejora a la restricción y vuelve a comprobar después porque la restricción se mueve.

### Limita el WIP de una forma que funcione

**7. Fija el primer límite de WIP a partir de la observación y ajústalo después.** Empieza cerca del WIP medio actual, o ligeramente por debajo, y observa qué ocurre con el tiempo de ciclo y con los elementos bloqueados. Baja el límite paso a paso mientras el equipo pueda mantener a cada persona productiva terminando trabajo. No hay un número correcto universal, y una cifra tomada de otro equipo no aporta evidencia para el tuyo.

**8. Trata una superación como un aviso, no como una infracción.** Cuando el WIP supera el límite, pregunta qué impide terminar y quién puede concentrarse en ello. Una superación registrada con un motivo, como una corrección urgente en producción, es información. Si las superaciones se vuelven rutinarias, el límite es erróneo o el sistema está sobrecargado, y la respuesta es una conversación sobre capacidad y no una reprimenda.

**9. Aplica los límites a todo el flujo de valor, no a una sola columna.** Un límite solo en «en curso» deja que el trabajo se acumule en las colas de revisión, pruebas y aprobación. Limita el número de elementos del sistema de extremo a extremo y añade límites de etapa donde una cola concreta siga creciendo. Las etapas compartidas, como una revisión del comité asesor de cambios o un entorno de pruebas, merecen su propio límite visible y su propio tiempo en cola.

### Gestiona el trabajo urgente y variable de forma deliberada

**10. Da al trabajo urgente una política.** Sin ella, los elementos urgentes superan en silencio todos los límites y el equipo no puede distinguir la carga planificada de la no planificada. Define qué califica, cuántos elementos urgentes pueden estar en curso y qué trabajo se pausa. Cuenta los elementos urgentes y su efecto en el tiempo en cola, para que el costo de la urgencia sea visible para quienes la solicitan (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Trabajo en curso | Mover elementos a un estado «aparcado» o «en espera» para quedar por debajo del límite; dividir elementos para que parezcan más pequeños; iniciar trabajo fuera del tablero | Recuento de elementos en estados aparcados y su antigüedad; muestrear el tablero frente al trabajo real; reportar el elemento en curso más antiguo |
| Longitud de la cola | Cerrar y reabrir elementos; rechazar elementos nuevos en la puerta; renombrar los estados de espera para que queden fuera del recuento | Tasa de reaperturas y tasa de rechazos junto a la longitud de la cola; revisión de las definiciones de estado en cada revisión de métricas |
| Tiempo en cola | Arrancar el reloj tarde creando el registro cuando el trabajo ya está listo; pausar el reloj con estados de bloqueo o de espera del cliente; marcar un elemento como en curso cuando solo se ha abierto | Distribución del tiempo en estados de bloqueo y de pausa; proporción de elementos creados después de haberse iniciado; espera declarada por el solicitante en una breve encuesta |
| Tasa de llegada y de salida | Cerrar elementos rápidamente para elevar las salidas; dividir una solicitud en muchas para elevar ambos recuentos; contar duplicados como llegadas | Medidas de calidad y de reaperturas de los elementos cerrados (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes); distribución de tamaños de los elementos; comprobación del resultado para el cliente |
| Razón de carga del equipo | Subestimar el esfuerzo para mostrar capacidad de reserva, o sobrestimar la demanda para justificar la plantilla; reportar una razón de un periodo favorable | Comparar el esfuerzo estimado y real por elemento; mostrar la razón con su tendencia y la proporción de interrupciones; revisión por pares del método de estimación |
| Tasa de superación del límite de WIP | Subir el límite para detener las superaciones; esconder superaciones moviendo elementos fuera del tablero; conceder excepciones con facilidad | Número y motivos de las excepciones; historial de cambios del límite con fechas; percentil del tiempo de ciclo junto a la tasa de superación |
| Razón de coherencia de la ley de Little | Ajustar el límite o el periodo hasta que la razón se acerque a 1; excluir elementos de larga vida como valores atípicos | Fijar de antemano el límite y el periodo; publicar los elementos excluidos y su número; revisar con un motivo los cambios del límite |

Una lectura sana es un equipo cuyo WIP es estable o decreciente, cuyos percentiles del tiempo en cola son planos o mejoran, cuyas llegadas y salidas se equilibran aproximadamente y cuyas superaciones vienen con motivos que llevan a la acción. La razón de la ley de Little ronda 1 porque los datos son coherentes, no porque alguien la haya ajustado.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Límites de WIP estrictos | Tiempo de ciclo más corto, descubrimiento más temprano de problemas, más terminación | Puede aparecer tiempo ocioso en una etapa; requiere disciplina y cierta polivalencia; puede frustrar a las partes interesadas que quieren que se inicie el trabajo |
| Límites de WIP laxos o inexistentes | Todos parecen ocupados y las solicitudes se aceptan rápido | Colas largas, entrega lenta, bloqueos ocultos, mucho cambio de contexto |
| Capacidad de holgura planificada | Absorbe ráfagas y trabajo urgente; mantiene cortos los tiempos de respuesta | Parece desperdicio en un informe de utilización; exige que la dirección acepte una menor eficiencia aparente |
| Utilización planificada alta | Parece eficiente y barata por hora | La espera crece abruptamente cuando la carga se acerca a la capacidad; frágil ante cualquier perturbación |
| Usar la ley de Little para planificar | Sencilla, general y rápida de aplicar | Válida solo para sistemas estables y para promedios; no dice nada de un elemento concreto |

Limita el WIP y mantén holgura donde la variabilidad y el costo del retraso sean altos, y acepta límites más laxos donde el trabajo sea constante e independiente.

En el modelo de manual más simple de un solo servidor con llegadas y tiempos de servicio aleatorios (una cola M/M/1), el tiempo medio en el sistema es el tiempo de servicio dividido por uno menos la utilización: 2 veces al 50 por ciento, 5 veces al 80 por ciento, 10 veces al 90 por ciento y 20 veces al 95 por ciento. Los equipos reales no son servidores únicos, así que trata estas cifras como la forma de la curva, no como un pronóstico.

## Preguntas para debatir con tu equipo

**1. ¿Qué cuenta como «en curso» para nosotros y todos lo contamos de la misma manera?**
Pide a cada persona que nombre el primer y el último estado que hace que un elemento forme parte del WIP y compara las respuestas. Busca estados como «en espera» o «a la espera del cliente» que algunos cuentan y otros no. Acuerden un límite y escríbanlo. El facilitador debe anotar cómo cambiarían las respuestas el número de WIP, porque eso muestra cuán sensible es la métrica a la definición.

**2. ¿Dónde esperan más tiempo nuestros elementos y quién es responsable de esa cola?**
Dibuja el flujo desde la llegada hasta hecho y marca los puntos de espera. Con los datos de un mes reciente, estima la mediana y el percentil 85 de la espera en cada punto. Hablen de qué cola no tiene dueño, como un paso de aprobación o un entorno de pruebas compartido. Acuerden una cola que examinar en detalle y una persona que traiga los datos la próxima vez.

**3. ¿Cuánto es demasiado ocupados para el tipo de trabajo que hacemos?**
Compara la carga planificada con la proporción de tiempo realmente dedicada a interrupciones y elementos urgentes. Pregunta qué le pasó a la cola la última vez que la demanda se disparó. Hablen de la idea de que un equipo sin capacidad de reserva no puede responder con rapidez. El facilitador debe orientar hacia un rango objetivo de la razón de carga, no hacia un número único, y hacia un plan para cuando se supere el rango.

**4. ¿Nuestra cola crece, se reduce o es estable y cómo lo sabemos?**
Mira las llegadas y las salidas de las últimas ocho semanas. Basta un gráfico sencillo. Pregunta si alguien habría notado un aumento lento antes de que se convirtiera en un problema y qué señal desencadenaría la acción. Acuerden qué debe hacer un equipo cuando las salidas se quedan por detrás de las llegadas durante tres semanas seguidas.

**5. ¿Qué pasaría si bajáramos nuestro límite de WIP en uno?**
Pide a las personas que predigan qué elementos esperarían, cuáles terminarían antes y qué harían cuando no puedan empezar algo nuevo. Saca a la luz temores como el de parecer ociosos.

**6. ¿Concuerdan nuestros números entre sí?**
Toma un mes de datos y calcula el WIP medio, el caudal y el tiempo de ciclo medio. Comprueba si el WIP es aproximadamente el caudal por el tiempo de ciclo. Si no, busquen la causa, como elementos terminados pero no cerrados, o elementos cerrados sin haberse iniciado. El facilitador debe tratar un desajuste como un regalo: señala un problema de datos o de definición que de otro modo distorsionaría todas las demás métricas de flujo.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega sienten los efectos del exceso de WIP como cambio de contexto, retroalimentación tardía y trabajo sin terminar que se deteriora. Ganan sobre todo con límites de WIP visibles, elementos pequeños y el hábito de terminar antes de empezar. Un equipo debe mirar sus propios tiempos en cola entre etapas, como la espera de revisión, porque estos retrasos suelen ser mayores que el tiempo dedicado a programar (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

### Equipos de servicio y de operaciones

Los equipos de operaciones se enfrentan a una demanda aleatoria, por lo que los efectos de las colas son fuertes. Un centro de servicios, una rotación de guardias y un comité de revisión de cambios se comportan cada uno como una cola con llegadas variables. Estos equipos necesitan holgura explícita, reglas de prioridad claras y una política para el trabajo urgente, de modo que los elementos urgentes no desplacen en silencio todo lo demás (véase el tema 3.1, Métricas del centro de servicios, y el tema 5.7, Métricas de trabajo repetitivo y guardias). Mide el tiempo en cola en cada traspaso y vigila el trabajo que rebota entre grupos (véase el tema 9.3, Métricas de colaboración y traspasos).

### Liderazgo y gobernanza

Los líderes influyen en las colas mediante la demanda que aceptan y la utilización que premian. Deben pedir percentiles del tiempo en cola y el crecimiento neto de la cola además de la utilización, y esperar que un servicio sano opere por debajo de su capacidad total. Una petición de añadir más proyectos a un equipo que ya está en su límite es una decisión de alargar el tiempo de ciclo de todos, y la gobernanza debe hacer explícita esa compensación. Financia capacidad para la restricción en lugar de campañas generales de eficiencia (véase el tema 5.4, Métricas de capacidad y rendimiento).

### Clientes y usuarios

Los clientes experimentan las colas como espera de una respuesta y rara vez les importa cuán ocupado esté el equipo. Necesitan expectativas honestas basadas en la distribución de las esperas pasadas, una forma de ver el estado de su solicitud y una vía de escalada para necesidades urgentes. Limitar el WIP puede significar aceptar más despacio las solicitudes nuevas y terminar más rápido las aceptadas, y esa elección debe explicárseles (véase el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional tiene un centro de servicios, un equipo de infraestructura y un equipo de aplicaciones. Todos los números de este ejemplo son ilustrativos.

El equipo de aplicaciones atiende solicitudes de servicio y pequeños cambios para los sistemas clínicos. A lo largo de un trimestre, su panel muestra un tiempo de ciclo mediano que subió de 6 a 11 días laborables, mientras el equipo dice estar «a tope». La razón de carga que el equipo calcula para el trimestre es del 98 por ciento. El percentil 85 del tiempo en cola de la etapa «a la espera de la aprobación clínica» es de 9 días laborables, y el WIP medio del tablero es de 44 elementos con un caudal de 4 elementos por día laborable. Aplicando la ley de Little, 44 dividido por 4 da un tiempo de ciclo medio implícito de 11 días laborables, que concuerda con la cifra medida, así que los datos son coherentes y el equipo confía en ellos.

El jefe del departamento sugiere primero contratar a un colaborador externo. El jefe del equipo señala el desglose por etapas: de los 11 días, la cola antes de la aprobación clínica y la cola antes del despliegue explican la mayor parte del tiempo transcurrido, y el trabajo activo es una pequeña proporción. Las llegadas del trimestre superaron a las salidas en unos 2 elementos por semana, así que la cola creció de forma constante. El equipo ha estado además aceptando todas las solicitudes urgentes, y los elementos urgentes no tienen política.

El equipo decide cuatro cambios, anotados en el registro de decisiones. Fija un límite de WIP para todo el sistema de 30 elementos, con un límite de etapa de 8 en la cola de aprobación. Planifica una razón de carga de en torno al 80 por ciento para que quepan las interrupciones esperadas. Escribe una política de urgencias que permite como máximo dos elementos urgentes en curso. Pide al grupo de aprobación clínica que tenga un breve hueco de revisión diario en lugar de una reunión semanal. Tras ocho semanas, el equipo reporta un tiempo de ciclo mediano de 7 días laborables, un tiempo en cola en el percentil 85 en la aprobación de 3 días laborables y una tasa de superación del 10 por ciento de los días, con los motivos registrados.

El equipo detecta un riesgo de manipulación en el segundo mes. La tasa de superación parece excelente, pero una muestra del tablero muestra varios elementos en un estado nuevo llamado «pendiente» que queda fuera del recuento de WIP, y la barrera de protección del recuento de estados aparcados venía subiendo. El equipo elimina el estado, devuelve los elementos al recuento y exige que todo estado nuevo se añada al registro con una definición. La tasa de superación sube al 18 por ciento durante unas semanas, lo que el equipo acepta como la cifra honesta, y luego baja a medida que se resuelven los elementos bloqueados.

## Agilidad, IA, automatización y analítica

### Agilidad

Limitar el trabajo en curso respalda un ritmo sostenible y la entrega continua: menos cosas en curso significa que cada una termina antes y la retroalimentación llega antes. Un hábito práctico es acordar un límite con el equipo y las partes interesadas y revisar las superaciones en la conversación periódica de mejora. La precaución es que un límite impuesto como regla, sin discutirlo, se manipulará dividiendo u ocultando trabajo.

### IA

La asistencia de la IA facilita iniciar más trabajo en paralelo, ya que un borrador cuesta poco. Eso puede elevar el trabajo en curso y la longitud de la cola para los humanos que deben revisar y decidir. Empareja cualquier aumento del trabajo iniciado con el tiempo en cola en la revisión y con la razón de carga del equipo revisor. La precaución es que más trabajo iniciado por la IA puede abandonarse, así que cuenta también los borradores descartados además de los terminados.

### Automatización

Lee automáticamente la longitud de la cola y las tasas de llegada desde el sistema de registro y fija alertas sobre tendencias, como una razón de carga creciente, además de umbrales fijos. La automatización que enruta trabajo debe medirse por los errores de enrutamiento y por la cola que crea cuando falla. La precaución es que una regla de asignación automática puede concentrar en silencio el trabajo en unas pocas personas o en un solo equipo.

### Analítica

Usa la ley de Little como comprobación de coherencia entre trabajo en curso, caudal y tiempo de ciclo, y trata una gran discrepancia como un problema de datos o de definición. La decisión a la que esto informa es dónde fijar los límites y la capacidad. La precaución es que la ley supone un sistema estable, así que no la apliques a un periodo con un gran cambio en las llegadas.

## Perspectiva sectorial

**Startup.** La demanda es irregular y la tentación es empezarlo todo. Basta un tablero sencillo con un límite de WIP visible y una comprobación semanal del elemento en curso más antiguo. Mantén holgura para los problemas de producción, ya que una sola caída puede consumir a todo el equipo.

**Pequeña empresa.** Una o dos personas suelen encargarse de soporte, proyectos y administración, y la bandeja de entrada es la cola. Separa el trabajo planificado del reactivo, fija un límite diario de tareas iniciadas e informa a los clientes de la espera habitual de cada tipo de solicitud.

**Gran empresa.** Muchos equipos comparten etapas como la aprobación de cambios, la revisión de seguridad y los entornos de pruebas, y las colas compartidas suelen ser las más largas. Mide el tiempo en cola en las etapas compartidas y publícalo, da a cada etapa compartida un responsable y evita reportar la utilización como objetivo. Las herramientas pueden contar el WIP de forma distinta en cada equipo, así que acuerden un límite común y un vocabulario de estados común antes de consolidar (véase el tema 2.4, Métricas del flujo de valor).

**Gobierno y sector público.** Los plazos legales, los pasos de contratación y las aprobaciones formales crean colas largas que los equipos no controlan. Separa el tiempo que controla un equipo del tiempo que se pasa esperando a otros organismos y reporta ambos. Donde los objetivos de servicio estén fijados en la ley o en la regulación, documenta las reglas del reloj y cualquier pausa y conserva la pista de auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es una entrega más rápida y más predecible sin añadir personal, porque la espera domina el tiempo transcurrido y un recorte modesto del WIP o de una cola larga de aprobación acorta el tiempo de ciclo de cada elemento que sigue. La holgura planificada también permite a un equipo absorber un incidente grave sin perder semanas de otro trabajo.

Los costos son modestos y sobre todo de personas: esfuerzo para definir límites y estados, para construir una instantánea diaria de WIP y un informe de tiempo en cola con datos de herramientas existentes y para celebrar una breve revisión semanal. Limitar el WIP también significa decir todavía no a algunas solicitudes, lo que requiere el acuerdo de las partes interesadas, y la capacidad ociosa es un costo aparente que los líderes deben entender como un seguro frente al retraso.

El retorno debe describirse mediante patrones que la organización pueda medir por sí misma y no mediante porcentajes prestados. Haz seguimiento de la mediana y del percentil 85 del tiempo de ciclo antes y después de los límites, del número de elementos con una antigüedad superior a un umbral acordado, de la tasa de superación y sus motivos y de la proporción de tiempo dedicada al trabajo urgente. El caso de negocio es más sólido cuando vincula el tiempo en cola con algo que el negocio ya siente, como la espera del acceso de un nuevo empleado, un cambio en un sistema clínico o una corrección para un cliente. El costo total de propiedad está dominado por el tiempo de las personas que revisan y actúan sobre los números, así que cuéntalo frente al retraso que elimina. Un equipo debe construir su propia línea base, ya que aquí no se citan valores de referencia.

## Antipatrones y trampas

- **Apuntar a una utilización del 100 por ciento.** Garantiza esperas largas y una entrega frágil. Planifica una razón de carga con holgura y revísala tras las perturbaciones.
- **Limitar solo la columna «en curso».** El trabajo se acumula entonces en las colas fuera del límite. Limita el sistema de extremo a extremo y añade límites de etapa donde crezcan las colas.
- **Tratar el límite de WIP como una regla que imponer.** La gente esconde el trabajo para cumplir. Usa una superación como aviso para preguntar qué está bloqueado y registra el motivo.
- **Aparcar elementos en estados sin límite.** El recuento se mantiene bajo mientras el trabajo espera sin ser visto. Incluye los estados aparcados en un recuento visible y revisa su antigüedad.
- **Medir la utilización de individuos.** Premia parecer ocupado e invita a clasificar. Mide el equipo o el conjunto de recursos y nunca publiques una cifra por persona.
- **Ignorar el lado de las llegadas.** Los equipos trabajan en las salidas mientras la demanda sigue creciendo. Haz seguimiento de las llegadas y, cuando superen la capacidad, toma una decisión explícita sobre qué aceptar.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y límites | Cada persona cuenta el WIP a su manera | Algunos equipos escriben un límite para su tablero | Un límite escrito y un vocabulario de estados, con los estados de espera separados de los de trabajo | Cambios de límite registrados y comprobación de la ley de Little ejecutada cada mes | Límites alineados con proveedores y equipos socios y revisados cuando dejan de informar decisiones |
| Límites de WIP y holgura | Sin límites; todos ocupados | Límites informales en una columna | Límites de sistema y de etapa, con un registro de superaciones y un rango de carga declarado | Límites ajustados con una cadencia a partir de evidencias de tiempo de ciclo y de cola | Límites y capacidad coordinados entre los equipos que comparten etapas |
| Visibilidad de las colas | Espera percibida solo a través de quejas | Longitud de la cola contada en algunos tableros | Percentiles del tiempo en cola por etapa mostrados al equipo propietario | Crecimiento neto de la cola con tendencias y barreras de protección, y atendido con trabajo financiado | Tiempo en cola en etapas compartidas y externas reportado abiertamente a clientes y proveedores |
| Uso en decisiones | Peticiones de capacidad discutidas con anécdotas | Utilización citada para justificar plantilla | Evidencia de colas y de tiempo de ciclo usada en la planificación | Compensaciones de demanda y capacidad decididas con datos en las revisiones de gobernanza | Demanda moldeada conjuntamente con los clientes usando distribuciones de tiempos de espera |

## Lista de verificación

- [ ] El límite del sistema para el WIP está escrito, con los estados de inicio y fin y las exclusiones.
- [ ] Los estados de espera y los de trabajo son estados separados del flujo de trabajo.
- [ ] Se captura y conserva una instantánea diaria de WIP y de cola.
- [ ] El tiempo en cola se reporta como mediana y percentil alto, por etapa.
- [ ] Las llegadas y las salidas se grafican cada semana, con un diagrama de flujo acumulado.
- [ ] Existe un límite de WIP para el sistema y para cada etapa con una cola creciente.
- [ ] Las superaciones del límite se registran con un motivo y se revisan cada semana.
- [ ] Una política define el trabajo urgente y limita el número en curso.
- [ ] La razón de carga del equipo se estima a nivel de equipo, nunca por persona, con el método declarado.
- [ ] La comprobación de la ley de Little se ejecuta cada mes y se investigan los desajustes.
- [ ] Los estados aparcados y bloqueados se cuentan y se revisa su antigüedad.
- [ ] Cada cambio de límite, estado o tope se registra con su fecha y motivo.

## Prompts de IA

**Comprueba el límite y los estados que hay detrás de un recuento de WIP.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Ejecuta una comprobación de coherencia de la ley de Little.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Planifica un primer experimento de límite de WIP.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Encuentra el probable cuello de botella a partir de datos por etapa.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar qué tema define una medida de flujo o de capacidad que estás añadiendo y la barrera de protección que debe ir a su lado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica editada nombra sus relojes, su límite, su vector de manipulación y su barrera de protección.

## Ideas clave

- La espera domina el tiempo transcurrido, así que mide el WIP, la longitud de la cola y el tiempo en cola por etapa, y reporta medianas y percentiles altos.
- La ley de Little ata el WIP medio, el caudal y el tiempo de ciclo, lo que la convierte en una prueba rápida de si tus definiciones son coherentes.
- El retraso sube abruptamente a medida que la utilización se acerca a la capacidad total, así que planifica holgura donde la demanda sea variable.
- Limita el WIP en todo el sistema, trata las superaciones como avisos para conversar y protégete de reetiquetar el trabajo para quedar bajo el límite.
- Vigila las llegadas y las salidas, ya que una cola que crece semana tras semana requiere una decisión sobre capacidad o demanda.
- Mide equipos y servicios, nunca individuos, y acuerda un límite escrito antes de comparar números.

## Referencias y lecturas complementarias

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
