# Métricas de solicitudes de incorporación y revisión de código

**La revisión es donde con más frecuencia espera el trabajo terminado, así que mide cuánto tiempo pasa un cambio antes de que alguien lo mire, de qué tamaño es y con qué frecuencia vuelve atrás, y empareja cada número de velocidad con una señal de calidad para que más rápido nunca signifique más descuidado.**

## Visión general y motivación

Una [solicitud de incorporación](https://en.wikipedia.org/wiki/Pull_request) (pull request) es una propuesta para fusionar un conjunto de cambios de una rama de un repositorio de [control de versiones](https://en.wikipedia.org/wiki/Version_control) en otra, junto con la conversación sobre si debe fusionarse. En muchos equipos es la puerta formal entre «el autor cree que funciona» y «el equipo acuerda que puede publicarse». La conversación es una forma de [revisión de código](https://en.wikipedia.org/wiki/Code_review): una persona distinta del autor lee el cambio, hace preguntas y lo aprueba o pide revisiones. Algunas plataformas llaman a lo mismo solicitud de fusión (merge request); este tema usa «solicitud de incorporación» para ambas.

Vale la pena medir la revisión por una razón sencilla. En la visión de flujo de la entrega, un elemento de trabajo pasa la mayor parte de su vida esperando, y la revisión es una de las esperas que está enteramente bajo el control del equipo. Un cuello de botella de una plataforma compartida o una dependencia externa requieren que cambien otras personas. Una solicitud de incorporación que espera dos días una primera mirada solo requiere que cambien los hábitos del propio equipo. Las medidas de flujo de este libro (véase el tema 2.1, Medidas de flujo, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo) dan el vocabulario general. Este tema se acerca a una etapa del ciclo y le da sus propios instrumentos.

Las visiones ágil e ITIL se encuentran aquí de una forma útil. Desde una perspectiva ágil, la revisión es un bucle de retroalimentación y un mecanismo de enseñanza. Difunde el conocimiento del código, detecta defectos pronto y hace cumplir los acuerdos de trabajo del equipo y su Definición de Terminado. Desde una perspectiva de ITIL, la misma actividad respalda varias prácticas. En ITIL 4, la práctica de desarrollo y gestión de software cubre cómo se construye y se comprueba el software, la habilitación de cambios cubre cómo se evalúan y autorizan los cambios y la gestión de despliegues cubre cómo llegan los cambios al entorno en vivo. Una solicitud de incorporación revisada por pares es, para muchas organizaciones, la evidencia de que un cambio estándar se evaluó antes de su publicación. Tratar la revisión como una actividad medida y mejorable sirve a ambas visiones: el equipo ágil quiere una retroalimentación más rápida y la práctica de ITIL quiere una garantía fiable de que los cambios se comprobaron.

El riesgo que hay que tener presente en todo momento es que la velocidad de revisión y la calidad de revisión son fáciles de separar. Un equipo puede reducir a la mitad su tiempo hasta la primera revisión aprobándolo todo a primera vista, y el panel mostrará un triunfo mientras el código empeora. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con fuerza inusual a esta familia de métricas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas), porque los números son baratos de recoger, visibles para todos y trivialmente fáciles de mover sin cambiar aquello que debían representar. Cada recomendación siguiente está escrita pensando en ello.

El **autor** abrió la solicitud de incorporación y un **revisor** la evalúa. Una **ronda de revisión** es un bucle de «el autor sube cambios, el revisor responde». El **retrabajo** es el cambio hecho después de un comentario de revisión, o después de la fusión, para corregir algo que la primera versión hizo mal. La **integración continua (CI)** es la práctica de fusionar el trabajo con frecuencia en una línea compartida y comprobar cada fusión automáticamente; véase [integración continua](https://en.wikipedia.org/wiki/Continuous_integration).

Todas las métricas de este tema describen equipos y repositorios. Nunca clasifican a revisores ni autores. Los recuentos de revisión a nivel individual son fáciles de extraer y tentadores de usar, y hacerlo convierte una práctica de colaboración en un concurso (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

## Principios clave

- **La espera domina sobre la revisión.** En la mayoría de los equipos la mayor parte del tiempo de revisión es la solicitud de incorporación sin leer, no la discusión una vez que un revisor empieza. Mide la espera antes de medir la conversación.
- **Los cambios pequeños se revisan más rápido y mejor.** El tamaño es una de las pocas palancas que mejoran a la vez la velocidad y la minuciosidad, porque un revisor puede tener un cambio pequeño en la cabeza.
- **La velocidad sin escrutinio no es una mejora.** Toda métrica de velocidad de este tema necesita una contrapartida de calidad, y la pareja se lee junta.
- **La revisión es una capacidad del equipo, no personal.** La carga debe repartirse entre el equipo. Una métrica que muestra concentración señala un problema de diseño del equipo, nunca una persona a la que elogiar o culpar.
- **Las distribuciones superan a los promedios.** Los tiempos de revisión tienen una cola larga de solicitudes de incorporación atascadas, así que reporta la mediana y un percentil alto (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Define el reloj y luego déjalo en paz.** Indica cuándo empieza y se detiene el reloj, qué eventos lo pausan y qué actividad automatizada se excluye, y anótalo donde viven los datos (véase el tema 1.5, Fuentes de datos e instrumentación).
- **Las métricas de revisión sirven al equipo que posee el trabajo.** Son un insumo de la propia retrospectiva del equipo, no un cuadro de mando para otra persona.

## Definiciones de métricas

Los relojes siguientes suponen que la plataforma de control de versiones registra las horas de los eventos de apertura, solicitudes de revisión, comentarios, aprobaciones, envíos y fusiones. Se excluyen los borradores, las solicitudes de incorporación abiertas por bots y las cerradas sin fusionar, salvo que una fila diga otra cosa. «Horas laborables» significa las horas de trabajo declaradas del equipo, de modo que una solicitud de incorporación abierta el viernes por la tarde no acumule un fin de semana de espera.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo hasta la primera revisión | Espera entre que una solicitud de incorporación queda lista para revisión y la primera respuesta humana sustantiva | El reloj empieza cuando la solicitud sale del estado de borrador o se abre ya lista, y se detiene en el primer comentario de revisión, petición de cambios o aprobación de alguien distinto del autor; se excluyen los comentarios de bots y del autor y los meros cambios de etiquetas. Se reportan la mediana y el percentil 85 en horas laborables | horas laborables | Historial de eventos de la plataforma de control de versiones | Desarrollo y gestión de software; habilitación de cambios | Acuerdo de trabajo sobre la capacidad de respuesta de la revisión; flujo del trabajo en curso | Semanal |
| Tiempo de ciclo de la revisión | Tiempo total desde que está lista para revisión hasta la fusión | El reloj empieza cuando la solicitud de incorporación está lista para revisión y se detiene en la fusión; las solicitudes cerradas sin fusionar se excluyen y se cuentan por separado. Se reportan la mediana y el percentil 85 en horas laborables | horas laborables | Historial de eventos de la plataforma de control de versiones | Gestión de despliegues; habilitación de cambios | Tiempo de ciclo de la etapa de revisión en el tablero del equipo | Semanal |
| Tamaño de la solicitud de incorporación | Cantidad de cambio de una solicitud de incorporación | Líneas añadidas más líneas eliminadas, excluidos los archivos generados, los archivos de bloqueo, el código de terceros incorporado y los meros cambios de nombre, tal como figuran en las reglas de exclusión del repositorio. Se reportan la mediana y el percentil 85 por solicitud fusionada | líneas cambiadas | Estadísticas de diferencias de la plataforma de control de versiones | Desarrollo y gestión de software | Tamaño de lote pequeño; división de historias | Semanal |
| Rondas de revisión | Número de bucles de envío del autor y respuesta del revisor antes de la fusión | Recuento de ciclos distintos de «cambios solicitados» o de comentario seguido de envío por solicitud fusionada; el primer envío es la ronda cero y se excluyen los fallos de comprobaciones automáticas. Se reportan la mediana y el percentil 85 | recuento | Eventos de revisión y de envío de la plataforma de control de versiones | Mejora continua; desarrollo y gestión de software | Señal de retrabajo en la etapa de revisión; definición de terminado | Semanal |
| Concentración de la carga de revisión | Cuán desigualmente se reparte el trabajo de revisión en un equipo | Proporción de las revisiones completadas del equipo gestionadas por los dos revisores más activos durante 4 semanas móviles; se excluyen las revisiones de la propia solicitud y las revisiones de bots. Se reporta para el equipo, nunca por nombre | porcentaje | Eventos de revisión de la plataforma de control de versiones, agregados a nivel de equipo | Mejora continua; gestión del conocimiento | Propiedad compartida del código; propiedad colectiva | Mensual |
| Recuento de solicitudes de incorporación obsoletas | Solicitudes de incorporación abiertas durante más tiempo que el límite acordado por el equipo | Solicitudes de incorporación aún abiertas y que no son borradores cuya antigüedad desde que quedaron listas para revisión supera el límite del equipo, contadas en el momento de la instantánea; se excluyen los borradores | recuento | Lista de solicitudes de incorporación abiertas de la plataforma de control de versiones | Habilitación de cambios; mejora continua | Antigüedad del elemento de trabajo; límite de WIP | Semanal |
| Tasa de correcciones posteriores a la fusión | Proporción de solicitudes de incorporación fusionadas seguidas poco después de un cambio correctivo | Solicitudes fusionadas seguidas en los 14 días siguientes por una corrección, reversión o arreglo urgente vinculado al mismo cambio / solicitudes fusionadas en el periodo; se excluye el trabajo de seguimiento planificado etiquetado como tal | porcentaje | Historial de control de versiones, incidencias vinculadas y registros de incidentes o de cambios | Habilitación de cambios; gestión de incidentes | Calidad integrada; definición de terminado | Mensual |

El tiempo hasta la primera revisión es la mayor palanca y la métrica con la que deberían empezar la mayoría de los equipos. El tiempo de ciclo de la revisión es su medida de resultado y es un componente de los plazos de entrega más largos comentados en el tema 2.2. La ventana de 14 días y el límite de obsolescencia son ejemplos; cada equipo elige valores que se ajusten a su ritmo de publicación y los escribe. Donde los números alimentan el cuadro general de la entrega, toman el relevo la familia DORA (véase el tema 2.8, Métricas DORA) y las medidas de fallos de cambio (véase el tema 4.4, Fallos de cambio y retrabajo).

## Recomendaciones

### Mide la espera antes del trabajo

**1. Empieza por el tiempo hasta la primera revisión.** Suele ser el mayor contribuyente al tiempo de revisión y el más barato de mejorar. Instrúmentalo a partir del historial de eventos de la plataforma para que nadie tenga que introducir nada. Reporta la mediana y un percentil alto, porque una mediana de tres horas con un percentil 95 de cuatro días significa que se están olvidando algunos cambios.

**2. Excluye de este reloj los bots y los borradores, y dilo.** Las comprobaciones automatizadas, los bots de actualización de dependencias y las herramientas de formato crean comentarios en segundos, y contarlos hace que la espera parezca excelente. Arranca el reloj cuando el autor marca el cambio como listo, no cuando se sube por primera vez la rama. Publica estas reglas junto al gráfico.

**3. Usa horas laborables y anota el calendario del equipo.** Una solicitud de incorporación abierta tarde el viernes no debe cargar con un fin de semana de espera. Un equipo repartido entre zonas horarias necesita una regla sobre las horas de quién cuentan, y a menudo la respuesta honesta es que el costo del traspaso entre zonas es lo que merece verse. Declara la elección y mantenla estable.

### Da al trabajo una forma revisable

**4. Mantén pequeñas las solicitudes de incorporación y trata el tamaño como un hábito del equipo.** Haz seguimiento de la mediana y del percentil 85 del tamaño y mira las grandes como un conjunto y no como fallos individuales. Los equipos suelen descubrir que los cambios grandes proceden de unas pocas causas: trabajo no dividido con suficiente finura, mezcla de refactorización con comportamiento nuevo o espera excesiva para fusionar. Divide el trabajo para que cada solicitud de incorporación haga una sola cosa, lo que además coincide con el principio de lote pequeño que subyace al [desarrollo basado en el tronco](https://en.wikipedia.org/wiki/Trunk-based_development) y al despliegue frecuente.

**5. No fijes un tope de tamaño estricto como objetivo.** Un límite como «no más de 400 líneas» invita a dividir un cambio en piezas artificiales ilegibles por separado o que rompen la compilación al fusionarse solas. Usa el tamaño como punto de partida de una conversación en la retrospectiva y da al equipo técnicas de división, como interruptores de funciones, refactorización preparatoria en su propia solicitud de incorporación y fusión detrás de un indicador.

**6. Haz explícita la petición de revisión.** Una solicitud de incorporación que no nombra a ningún revisor espera a un voluntario, y los voluntarios escasean. Acuerden en el acuerdo de trabajo a quién se pide, cómo se avisa al equipo y cuál es la expectativa de respuesta. Un turno de revisión compartido, o un hueco diario de revisión, suele reducir la espera más que cualquier ajuste de herramienta.

### Reparte la carga y el conocimiento

**7. Vigila la concentración de la carga como un riesgo de equipo.** Si dos personas gestionan la mayoría de las revisiones, su disponibilidad limita el flujo del equipo y su ausencia lo detiene. Revisa la medida de concentración cada mes y actúa mediante el diseño del equipo: rota al revisor por defecto, empareja a los miembros más nuevos con los expertos y anota las zonas del código que solo una persona puede revisar. No publiques una clasificación por persona.

**8. Usa la revisión para compartir conocimiento y protege ese propósito.** El valor a largo plazo de la revisión incluye el aprendizaje, la propiedad compartida y el estilo coherente, además de la detección de defectos. La [programación en pareja](https://en.wikipedia.org/wiki/Pair_programming) y la programación en grupo (mob programming) trasladan parte de ese intercambio a una fase más temprana del proceso; donde una pareja ya ha trabajado en un cambio, es razonable una revisión más ligera. Haz de la elección una decisión del equipo, anotada en el acuerdo de trabajo, para que «trabajado en pareja, por tanto revisado a la ligera» sea una regla visible y no una excusa.

### Controla la propia revisión

**9. Deja que la automatización haga lo que hace bien.** El formato, el análisis estático de estilo y las comprobaciones básicas pertenecen al pipeline, de modo que la atención humana vaya al diseño, la corrección y el riesgo. El [análisis estático de programas](https://en.wikipedia.org/wiki/Static_program_analysis) y las pruebas automatizadas reducen el número de rondas de revisión triviales. Las rondas restantes dicen entonces más sobre la conversación de diseño y menos sobre desacuerdos de estilo.

**10. Lee las rondas de revisión como una señal de claridad, no como un recuento de fallos.** Muchas rondas pueden significar que el requisito no era claro, que el autor carecía de contexto, que el revisor pidió cambios de gusto o que el cambio era grande. Cero rondas en todas las solicitudes pueden significar un trabajo excelente o que nadie miró. Muestrea un puñado de solicitudes con un número inusualmente alto o bajo de rondas y léanlas juntos como equipo.

### Empareja la velocidad con la calidad y mantén visible el tiempo

**11. Muestra siempre una contrapartida de calidad junto a la velocidad de revisión.** La tasa de correcciones posteriores a la fusión, los incidentes vinculados a cambios recientes y la proporción de defectos hallados tras la publicación son las parejas naturales (véase el tema 4.4, Fallos de cambio y retrabajo). Si el tiempo de revisión mejora mientras empeora la tasa de correcciones, el equipo ha cambiado garantía por velocidad, y el arreglo es una conversación y no un objetivo. Muestra ambos en el mismo gráfico.

**12. Conecta la revisión con el cuadro del flujo y con el trabajo no planificado.** Una revisión más rápida solo ayuda si la etapa siguiente no se limita a encolar el trabajo (véase el tema 2.3, Trabajo en curso y teoría de colas). Las peticiones de revisión urgentes que interrumpen el trabajo planificado tienen un costo propio (véase el tema 2.9, Trabajo operativo y trabajo no planificado).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo hasta la primera revisión | Publicar un rápido «se ve bien» o un emoji como primera respuesta; asignar un bot o un revisor amistoso; marcar una solicitud como lista solo después de que alguien haya acordado mirarla | Tasa de correcciones posteriores a la fusión; muestra de aprobaciones sin comentarios; exigir en el acuerdo de trabajo que las primeras respuestas sean sustantivas |
| Tiempo de ciclo de la revisión | Fusionar sin esperar la revisión; dividir un cambio en piezas diminutas para que pase más rápido; cerrar y reabrir una solicitud para reiniciar el reloj | Recuento de solicitudes cerradas y reabiertas; rondas de revisión; tasa de correcciones posteriores a la fusión; reglas de rama protegida que exijan aprobación |
| Tamaño de la solicitud de incorporación | Excluir archivos del recuento; dividir un único cambio en piezas que no pueden entenderse por separado; inflar el tamaño con código generado | Revisar las reglas de exclusión cada trimestre; comprobar que las piezas divididas compilan y superan las pruebas por separado; leer una muestra de las más pequeñas y las más grandes |
| Rondas de revisión | Aprobar a la primera para mantener bajo el recuento; trasladar la discusión al chat para que no deje rastro; autores que envían muchas correcciones en una sola confirmación para ocultar rondas | Tasa de correcciones posteriores a la fusión; muestra de solicitudes con cero rondas; mantener la discusión en la solicitud de incorporación |
| Concentración de la carga de revisión | Dividir las revisiones en muchas aprobaciones pequeñas para repartir el recuento; asignar revisiones a quienes tienen tiempo libre pero no conocimiento | Revisar el conocimiento del revisor en zonas de riesgo; vigilar la tasa de correcciones posteriores a la fusión por zona; mantener la métrica a nivel de equipo |
| Recuento de solicitudes de incorporación obsoletas | Cerrar las solicitudes obsoletas sin fusionarlas; convertirlas en borradores para esconderlas; subir el límite de obsolescencia | Recuento de solicitudes cerradas sin fusionar; recuento de borradores de larga duración; revisar el límite con el equipo cada trimestre |
| Tasa de correcciones posteriores a la fusión | Registrar las correcciones bajo un elemento de trabajo nuevo sin vínculo; etiquetar el trabajo correctivo como seguimiento planificado; evitar la métrica retrasando la corrección más allá de la ventana | Comparar con los datos de incidentes y de fallos de cambio; muestra de elementos de seguimiento; auditoría de las etiquetas usadas |

Una lectura sana es una lectura tranquila. El tiempo hasta la primera revisión es corto y la cola también lo es, de modo que ninguna solicitud de incorporación espera días. El tamaño se sitúa en un rango que el equipo encuentra fácil de leer, con unos pocos cambios grandes que el equipo puede explicar. Las rondas de revisión son bajas pero no cero, la concentración de la carga es moderada, el recuento de obsoletas es pequeño y la tasa de correcciones posteriores a la fusión es estable. Cuando un número mejora bruscamente, alguien debe comprobar que su barrera de protección emparejada no se movió en el sentido equivocado.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Revisión rápida con expectativas estrictas de respuesta | Bucles de retroalimentación cortos; menos pérdida de contexto para el autor; menos trabajo en curso | Presión por aprobar rápido; interrumpe el trabajo concentrado |
| Revisión lenta y minuciosa | Lectura cuidadosa del diseño y del riesgo; mayor transferencia de conocimiento | Tiempo de ciclo más largo; se acumulan lotes mayores; los autores siguen adelante y pierden contexto |
| Solicitudes de incorporación pequeñas | Más fáciles de leer y de revertir; flujo más fluido | Más sobrecarga por cambio; pueden fragmentar una función en pasos confusos |
| Solicitudes de incorporación grandes | Menos traspasos; toda la función visible a la vez | Las revisiones se vuelven superficiales; más difíciles de revertir; esperas largas |
| Aprobación obligatoria de un responsable con nombre | Responsabilidad clara en zonas de riesgo; respalda la autorización de cambios | Crea un cuello de botella y un punto único de fallo |
| Comprobaciones automatizadas antes de la revisión humana | Libera a las personas para el diseño y el riesgo; coherente | Puede crear una falsa confianza; requiere mantenimiento |

Ninguna política gana por sí sola. El fin es acortar la espera preservando el escrutinio, y el camino habitual son cambios más pequeños, expectativas de revisión claras, una automatización sólida para las comprobaciones rutinarias y un acuerdo del equipo sobre cómo es una buena revisión. Las métricas de revisión son más útiles como preguntas para una retrospectiva y menos útiles como objetivos.

## Preguntas para debatir con tu equipo

**1. ¿Dónde pasa una solicitud de incorporación la mayor parte de su vida, esperando o siendo revisada?**
Pide al equipo que adivine antes de mirar los datos y muestra después el reparto entre el tiempo hasta la primera revisión y el tiempo restante hasta la fusión. La mayoría de los grupos se sorprende de cuánto es espera. El facilitador debe anotar qué conjeturas fueron erróneas y preguntar qué dice cada una sobre cómo vive el equipo la revisión. Termina con un cambio que ataque la mayor espera.

**2. ¿Cómo es una buena revisión en este equipo y cómo lo notaría alguien de fuera?**
Enumera los comportamientos que valora el equipo, como preguntar por el diseño, comprobar las pruebas y explicar la razón de una petición. Pregunta después cuáles de ellos dejan un rastro visible en la solicitud de incorporación. Hablen de cómo distinguir una primera respuesta sustantiva de una simbólica sin vigilar a los individuos. Acuerden una breve descripción escrita que incluir en el acuerdo de trabajo.

**3. ¿Cuánto es demasiado grande para nosotros y qué hacemos cuando el trabajo es realmente grande?**
Mira la distribución de tamaños y elige algunas de las solicitudes de incorporación más grandes. Pregunta por qué fue grande cada una y si habría podido dividirse. Hablen de técnicas como los interruptores de funciones, la refactorización preparatoria y la fusión detrás de un indicador. El facilitador debe resistir la tentación de fijar un límite numérico y acordar en su lugar un hábito que el equipo probará durante un mes.

**4. ¿Quién revisa nuestro código más arriesgado y qué ocurre cuando está ausente?**
Asigna zonas del código a las personas que pueden revisarlas bien. Mira la concentración de la carga y las zonas con un único revisor cualificado. Hablen de cómo formar un segundo revisor en cada una, mediante trabajo en pareja o asignaciones rotativas. Mantén la conversación en torno a la resiliencia del equipo, no a una clasificación de la carga de nadie.

**5. Si nuestra velocidad de revisión se duplicara mañana, ¿qué querríamos que fuera cierto sobre la calidad?**
Pide al grupo que nombre las señales de calidad que vigilarían, como las correcciones posteriores a la fusión, los incidentes vinculados a cambios recientes o el número de reversiones. Comprueba si esas señales son visibles actualmente junto al gráfico de velocidad. Hablen de cuál sería una señal temprana de que la velocidad se compró a costa del escrutinio. Acuerden qué contrapartida mostrar en el panel.

**6. ¿Qué números de revisión nos tentaría mejorar de una forma que no ayuda?**
Repasa cada métrica y pregunta cómo podría una persona bajo presión hacer que luzca mejor sin mejorar nada. Compara las respuestas con la tabla de manipulación anterior y añade las ideas del propio equipo. El fin es nombrar el riesgo antes de que ocurra. Acuerden qué barrera de protección se revisará junto a cada métrica.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen el proceso de revisión y deben poseer sus métricas. Se benefician sobre todo de acortar la espera con acuerdos sencillos: un hueco diario de revisión, un proceso claro de petición y cambios pequeños. Deben usar los números en las retrospectivas, mantener bajo el trabajo en curso y resistir la tentación de optimizar un solo gráfico. La revisión es además donde los miembros más nuevos aprenden el código, así que protege ese propósito.

### Equipos de servicio y de operaciones

Los equipos de operaciones se topan con la revisión cuando el código de infraestructura, la configuración y la automatización de runbooks se cambian mediante solicitudes de incorporación. Para ellos, la revisión suele formar parte de cómo se aprueba y se evidencia un cambio estándar (véase el tema 4.3, Métricas de habilitación de cambios). Deben acordar qué cambios necesitan revisión por una segunda persona, con qué rapidez se revisan las correcciones urgentes y cómo se revisan después los cambios de emergencia, para que una corrección apresurada siga examinándose. Una revisión superficial de un cambio arriesgado aparece más tarde como un incidente.

### Liderazgo y gobernanza

Los líderes deben tratar las métricas de revisión como señales de la salud y el flujo del equipo, no como puntuaciones de productividad. Deben pedir la medida de calidad emparejada siempre que se reporte un número de velocidad, respaldar el tiempo que lleva una revisión cuidadosa y evitar comparar equipos por el tiempo de revisión en bruto, ya que los repositorios y los riesgos difieren. Los órganos de gobernanza pueden usar la evidencia de revisión como parte de la garantía de los cambios, siempre que acepten que un proceso de revisión documentado y muestreado es más sólido que un recuento de aprobaciones.

### Clientes y usuarios

Los clientes no ven las solicitudes de incorporación, pero sienten los resultados: con qué rapidez llega una corrección y con qué frecuencia una versión trae un defecto nuevo. Las esperas cortas de revisión ayudan a que las correcciones urgentes lleguen antes a ellos, y una revisión reflexiva ayuda a mantener los fallos lejos de ellos. Donde un servicio tiene un historial publicado de versiones o de defectos, los clientes se benefician de que el equipo muestre menos reversiones y menos correcciones repetidas con el tiempo.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un servicio web de citas de pacientes, construido por un equipo de producto de siete personas y operado con un pequeño grupo de ingeniería de fiabilidad del sitio. Todos los números de este ejemplo son ilustrativos.

En una revisión trimestral, el equipo descubre que su tiempo de ciclo de revisión tiene una mediana de 26 horas laborables y un percentil 85 de 71 horas laborables (ilustrativo). Al desglosar el ciclo se ve que la mediana del tiempo hasta la primera revisión es de 19 horas laborables, de modo que la mayor parte del retraso es espera. El tamaño de las solicitudes de incorporación tiene una mediana de 180 líneas y un percentil 85 de 900 líneas (ilustrativo), y los dos revisores más activos gestionan el 68 por ciento de las revisiones (ilustrativo). La tasa de correcciones posteriores a la fusión se sitúa en el 9 por ciento (ilustrativo).

El equipo toma tres acuerdos. Fija un hueco diario de revisión de 30 minutos, anota en su acuerdo de trabajo la expectativa de una primera respuesta en un día laborable y rota cada semana un turno de «revisar primero». Adopta además un hábito de división para el trabajo grande, usando interruptores de funciones para que las funciones parciales puedan fusionarse con seguridad. No fija ningún límite de tamaño ni objetivo para el tiempo hasta la primera revisión.

Tras dos meses, la mediana del tiempo hasta la primera revisión baja a 6 horas laborables y el percentil 85 del tiempo de ciclo de la revisión baja a 34 horas laborables (ilustrativo). La concentración de la carga baja al 52 por ciento (ilustrativo) y la tasa de correcciones posteriores a la fusión se mantiene en el 9 por ciento.

El equipo detecta entonces un riesgo de manipulación. Una muestra de aprobaciones muestra que alrededor de un tercio de las primeras respuestas llegan en minutos y dicen solo «LGTM» en cambios que tocan la lógica de los recordatorios de citas. La mejora de velocidad fue en parte real y en parte un sello de goma. La tasa de correcciones posteriores a la fusión aún no se había movido porque el código afectado se ejecuta con un ciclo mensual. El equipo cambia el acuerdo de trabajo para que una primera respuesta deba incluir una pregunta, un comentario sobre una parte concreta del cambio o una nota explícita de lo que se comprobó, y añade a su gráfico de revisión la proporción muestreada de aprobaciones sin comentarios. Acuerdan además que los cambios en la lógica de recordatorios de cara al paciente necesitan dos revisores, uno de los cuales es del grupo de operaciones. La decisión, con sus motivos, pasa al registro de decisiones del equipo.

## Agilidad, IA, automatización y analítica

### Agilidad

Las revisiones rápidas y pequeñas respaldan la entrega continua y un ritmo sostenible. Un hábito práctico es acordar una norma del equipo para el tiempo hasta la primera revisión y hablar de las solicitudes de incorporación obsoletas en la revisión periódica del equipo. La precaución es que tratar la velocidad de revisión como objetivo lleva al sello de goma, así que empárejala con las correcciones posteriores a la fusión.

### IA

Los cambios generados por IA pueden elevar el volumen y el tamaño de las solicitudes de incorporación, y las herramientas de revisión con IA pueden acelerar la primera mirada. Empareja el tiempo hasta la primera revisión con la tasa de correcciones posteriores a la fusión para los cambios asistidos por IA y reporta la carga de revisión por rol de revisor, no por persona. La precaución es que un comentario de revisión de un bot puede contarse como revisión, así que cuenta por separado la revisión humana.

### Automatización

Extrae automáticamente los eventos de revisión del alojamiento del código y ejecuta comprobaciones automatizadas antes de la revisión humana para que las personas dediquen tiempo al juicio. Mide las propias comprobaciones por sus falsas alarmas y por los defectos que se les escapan. La precaución es que una automatización intensa puede volver superficial la revisión humana, ya que la gente da por hecho que las herramientas lo detectaron todo.

### Analítica

Muestra las distribuciones de tamaño, tiempo hasta la primera revisión y rondas de revisión por equipo, nunca por individuo. La decisión a la que informa es dónde necesitan atención la capacidad de revisión o el tamaño de los cambios. La precaución es que estos números describen el sistema de revisión, y cualquier uso que clasifique a las personas los empujará hacia cambios más pequeños, más seguros y menos útiles.

## Perspectiva sectorial

**Startup.** Un equipo pequeño puede revisar en minutos porque todos conocen el código, y el principal riesgo es saltarse la revisión cuando falta tiempo. Mantén pocas métricas: bastan el tiempo hasta la primera revisión y el tamaño. Establece pronto el hábito de los cambios pequeños, porque es mucho más difícil de introducir cuando crecen el código y el equipo.

**Pequeña empresa.** A menudo uno o dos desarrolladores, o un proveedor externo, mantienen el software. La revisión puede correr a cargo de un solo colega o del propio personal del proveedor. Pregunta a los proveedores cómo revisan y si pueden compartirse los datos de las solicitudes de incorporación, y mantén un registro sencillo de qué cambios revisó quién, porque la revisión es el principal control contra los errores en un equipo pequeño.

**Gran empresa.** Muchos equipos, repositorios y reglas de aprobación crean una variación amplia. Estandariza las definiciones de los relojes y las exclusiones para que los datos de la plataforma sean comparables, pero no clasifiques equipos por tiempo de revisión en bruto, ya que el riesgo y el código difieren. Vigila los requisitos de revisión impuestos por auditoría que añaden espera sin añadir escrutinio y busca oportunidades de sustituir las aprobaciones manuales por comprobaciones automatizadas y revisión por muestreo.

**Gobierno y sector público.** La separación de funciones, las pistas de auditoría y las normas de contratación suelen exigir una aprobación independiente de los cambios. Trata esas reglas como datos de diseño: registra quién aprobó qué y cuándo, y mide la espera que crean. Donde los proveedores escriben el código, especifica en el contrato la evidencia de revisión y el acceso a los datos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es acortar la parte de la entrega que es a la vez lenta y controlable, manteniendo los beneficios de la revisión por pares: menos defectos, conocimiento compartido y una pista de auditoría. Las solicitudes de incorporación en espera retienen el trabajo terminado lejos de los usuarios, aumentan el costo del cambio de contexto para los autores y hacen más probables los conflictos de fusión a medida que las ramas envejecen. Reducir la espera se amortiza, por tanto, con una entrega más rápida, menos retrabajo y menos frustración.

El costo de recoger estas métricas es bajo cuando la plataforma de control de versiones ofrece historial de eventos y una API. Los costos principales son el tiempo para definir los relojes y las exclusiones, para construir o configurar el informe y para revisar los números con regularidad. El costo mayor es conductual: el tiempo que las personas dedican a revisar con prontitud, que compite con otro trabajo. Ese tiempo es la inversión real y debe presupuestarse en lugar de tratarse como gratuito.

El retorno aparece como un tiempo de ciclo de revisión más corto, menos solicitudes de incorporación obsoletas y una tasa de correcciones posteriores a la fusión estable o decreciente. Evita afirmar de antemano una mejora porcentual concreta, ya que los resultados dependen del punto de partida y del equipo. Un caso creíble compara las distribuciones de antes y después del propio equipo, junto con su contrapartida de calidad, en lugar de citar cifras de otras organizaciones. El libro de 2018 *Accelerate* informa de investigaciones que vinculan prácticas técnicas y culturales con el rendimiento de la entrega y es una fuente razonable para el argumento general, pero los números de tu equipo proceden de tus propios datos.

## Antipatrones y trampas

- **Clasificar a revisores o autores.** Las clasificaciones individuales de revisiones completadas o de líneas cambiadas corrompen la colaboración. Reporta a nivel de equipo y usa los números para ajustar los hábitos del equipo.
- **Fijar un objetivo de tiempo hasta la primera revisión sin una contrapartida de calidad.** El resultado es el sello de goma. Muestra la tasa de correcciones posteriores a la fusión y una muestra de aprobaciones sin comentarios junto a cada gráfico de velocidad.
- **Fijar un límite de tamaño estricto.** Los equipos dividen el trabajo de forma artificial para cumplir. Usa el tamaño como conversación y enseña en su lugar técnicas de división.
- **Tratar cero comentarios como un éxito.** Una aprobación sin examinar puede reflejar confianza o desatención. Muestrea esas solicitudes de incorporación y léanlas juntos.
- **Contar la actividad de los bots como revisión.** Los comentarios automatizados hacen que la espera parezca corta. Excluye a los bots del reloj y de las medidas de carga.
- **Ignorar las zonas horarias y los calendarios.** El tiempo de reloj en bruto hace que las esperas de fin de semana y entre regiones parezcan una revisión lenta. Usa horas laborables y nombra el calendario.
- **Dejar crecer la lista de obsoletas.** Las solicitudes de incorporación antiguas acumulan conflictos de fusión y pierden contexto. Revisa la lista cada semana y fusiona, retrabaja o cierra cada elemento con un motivo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definición y relojes | El tiempo de revisión se adivina o se reporta por sensación | Algunos equipos exportan tiempos de la plataforma con sus propias reglas | Una definición escrita de cada reloj, con exclusiones para bots, borradores y calendarios | Definiciones revisadas con una cadencia; cambios registrados con motivos | Definiciones alineadas entre equipos y proveedores y revisadas cuando dejan de informar decisiones |
| Práctica de revisión | Las revisiones ocurren cuando alguien se da cuenta | Normas informales en algunos equipos | Acuerdo de trabajo escrito sobre las peticiones, las expectativas de respuesta y lo que cubre una revisión | Normas ajustadas a partir de los datos; seguimiento del reparto de conocimiento y de las zonas de riesgo | Práctica de revisión coordinada entre equipos y proveedores, con la automatización encargándose de las comprobaciones rutinarias |
| Contrapartida de calidad | Sin vínculo entre revisión y defectos | Mirada ocasional a las correcciones posteriores a la fusión | Tasa de correcciones posteriores a la fusión mostrada junto a la velocidad de revisión | Barreras de protección revisadas con regularidad; aprobaciones muestreadas y leídas | Evidencia de revisión conectada con la garantía de los cambios y el aprendizaje de incidentes entre servicios |
| Uso en la mejora | Números sin usar | Mostrados en algunas retrospectivas | Revisados por el equipo propietario con una cadencia fija | Las lagunas llevan a trabajo de mejora planificado y con recursos | Las ideas de mejora fluyen de los equipos a la práctica compartida y de vuelta |

## Lista de verificación

- [ ] Los relojes del tiempo hasta la primera revisión y del tiempo de ciclo de la revisión están escritos, con inicio, fin y exclusiones.
- [ ] Los bots, los borradores y las solicitudes de incorporación cerradas sin fusionar se excluyen o se cuentan por separado, y las reglas son visibles.
- [ ] Los tiempos se reportan como la mediana y un percentil alto en horas laborables.
- [ ] El tamaño de la solicitud de incorporación se mide con una lista de exclusión acordada para archivos generados y de terceros.
- [ ] El equipo tiene un acuerdo escrito sobre cómo se piden las revisiones y con qué rapidez se espera una primera respuesta.
- [ ] La concentración de la carga de revisión se reporta solo a nivel de equipo.
- [ ] Una tasa de correcciones posteriores a la fusión u otra contrapartida de calidad se muestra en el mismo gráfico que la velocidad de revisión.
- [ ] Cada mes se lee una muestra de aprobaciones sin comentarios y muy rápidas.
- [ ] La lista de solicitudes de incorporación obsoletas se revisa cada semana.
- [ ] Los datos de revisión se usan en las retrospectivas y no en la evaluación individual.
- [ ] Las zonas del código con un único revisor cualificado están enumeradas y tienen un plan.

## Prompts de IA

**Redacta definiciones de reloj para las métricas de revisión.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Analiza una exportación de datos de revisión.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Encuentra riesgos de manipulación en nuestras métricas de revisión.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Prepara una retrospectiva sobre el flujo de revisión.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica relacionada de flujo o de calidad y la barrera de protección que debe acompañar a una métrica de revisión.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen coherentes la plantilla, la tabla de manipulación y las referencias cruzadas.

## Ideas clave

- La mayor parte del retraso de la revisión es espera, así que mide el tiempo hasta la primera revisión y el tiempo de ciclo de la revisión como distribuciones en horas laborables.
- Las solicitudes de incorporación más pequeñas se revisan más rápido y con más cuidado; enseña a dividir en lugar de imponer un tope de tamaño.
- Empareja cada medida de velocidad con una contrapartida de calidad, como la tasa de correcciones posteriores a la fusión, y léelas juntas.
- Trata la carga de revisión como una capacidad del equipo y reporta la concentración a nivel de equipo, nunca como una clasificación de personas.
- Las métricas de revisión son preguntas para una retrospectiva y sirven al equipo que posee el trabajo.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
