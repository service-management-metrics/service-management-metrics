# Métricas de gestión de problemas

**Las métricas de gestión de problemas muestran si un equipo está eliminando las causas de sus incidentes o solo reparando sus síntomas, así que mide cuántas causas se encuentran, con qué rapidez se corrigen de forma definitiva y si los mismos incidentes vuelven.**

## Visión general y motivación

Un equipo que restablece el servicio con rapidez puede seguir atrapado en una cinta de correr. El mismo fallo vuelve cada pocas semanas, se avisa a las mismas personas y los números de incidentes parecen sanos porque cada reparación es rápida. La gestión de problemas es la práctica que se baja de la cinta. Mira a través de los incidentes, encuentra la causa subyacente y consigue que se elimine o se contenga. Este tema cubre los números que dicen si ese trabajo se está haciendo y si funciona.

Cuatro términos sostienen el tema. Un **incidente** es una interrupción no planificada de un servicio o una reducción de su calidad, tal como usa la palabra el marco [ITIL](https://en.wikipedia.org/wiki/ITIL) (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes). Un **problema** es la causa subyacente, o presunta, de uno o más incidentes. Un **error conocido** es un problema cuya causa se comprende y para el que se registra una solución provisional, guardado en una [base de datos de errores conocidos](https://en.wikipedia.org/wiki/Known_error_database) para que la siguiente persona que se encuentre el síntoma pueda hallarlo. Una [solución provisional](https://en.wikipedia.org/wiki/Workaround) (workaround) reduce o evita el impacto de un incidente o problema sin eliminar su causa. La corrección permanente es el cambio que elimina la causa.

Encontrar la causa es el trabajo del [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis). Las técnicas comunes incluyen los [cinco porqués](https://en.wikipedia.org/wiki/Five_whys), el [diagrama de Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) y el [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), que ordena las causas por su frecuencia o por el daño que hacen. Los sistemas complejos suelen tener varias causas contribuyentes y ningún culpable único, así que un buen registro de problema nombra los factores que, una vez eliminados, detienen la recurrencia, e indica el grado de confianza del equipo.

Las métricas importan porque la gestión de problemas tiene una trampa de reporte incorporada. Abrir un registro de problema es fácil y parece productivo. Cerrar uno también es fácil, ya que un registro puede cerrarse con una nota. Ninguno de los dos hechos demuestra que algo mejorara para los usuarios. Las medidas que merece la pena vigilar están más abajo en la corriente: si los incidentes vinculados a un problema dejan de repetirse, si las personas de guardia usan realmente los errores conocidos y cuánto tiempo espera su corrección una causa diagnosticada.

Las visiones de ITIL y la ágil se encuentran aquí sin mucha fricción. En ITIL 4, la gestión de problemas es una práctica dentro del sistema de valor del servicio, cercana a la gestión de incidentes, la habilitación de cambios y la gestión del conocimiento. Su contrapartida ágil es la corriente de correcciones pequeñas y basadas en evidencias que fluyen por la [lista de pendientes](https://en.wikipedia.org/wiki/Backlog) de un equipo, la retrospectiva que detecta un patrón y el hábito de tratar el trabajo de fiabilidad como trabajo de producto ordinario. Donde la visión de ITIL subraya los registros, la propiedad y el error conocido, la visión ágil subraya los lotes pequeños y la retroalimentación rápida. Ambas quieren menos incidentes repetidos, y ese resultado es la medida que debe tener todo el mundo delante.

Este tema no repite los relojes de incidentes (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) ni las medidas de incidentes graves (véase el tema 3.4, Métricas de incidentes graves), y trata el seguimiento de las revisiones solo donde alimenta los problemas (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje). La lista de pendientes de errores conocidos y la idea más amplia de [deuda técnica](https://en.wikipedia.org/wiki/Technical_debt) se tratan en el tema 4.6, Deuda técnica y errores conocidos. Aquí el foco es el registro de problema y los resultados que produce. Las medidas de recuperación y de fallo basadas en despliegues viven en el tema 2.8, Métricas DORA.

## Principios clave

- **Mide la recurrencia, no el papeleo.** La prueba de la gestión de problemas es que los incidentes vinculados dejen de volver. Los recuentos de registros abiertos y cerrados describen actividad y dicen poco del resultado.
- **Separa tres momentos.** Detectar que existe un patrón, identificar su causa y eliminar la causa son eventos distintos con relojes distintos y responsables distintos. Fusionarlos oculta dónde está el retraso.
- **Una solución provisional es una etapa, no un final.** Regístrala, úsala y haz seguimiento de cuánto tiempo sigue siendo la única protección. Una solución provisional que vive años es deuda con un responsable al que nadie sabe nombrar.
- **Pon la corrección donde está el trabajo.** Una corrección permanente suele llegar como un cambio o un elemento de la lista de pendientes propiedad de un equipo de producto. Mídela en el propio flujo del equipo y muéstrala al equipo propietario del servicio.
- **Vincula los incidentes a los problemas en el origen.** Todas las medidas de aquí dependen del vínculo entre un incidente y un problema. Si el vínculo es débil, los números son débiles.
- **Prefiere distribuciones y cohortes a promedios.** Las duraciones de los problemas son largas y asimétricas, y unos pocos registros antiguos dominan cualquier media (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- **Describe equipos y servicios, nunca personas.** Los problemas son propiedades del sistema. Una tabla de problemas cerrados por analista convierte una investigación en una cuota.

## Definiciones de métricas

Todos los relojes usan las marcas de tiempo del registro del problema, de los registros de incidentes vinculados y del cambio o elemento de la lista de pendientes vinculado. Salvo que una fila diga otra cosa, los problemas se cuentan por servicio y por equipo propietario, y los registros fusionados o duplicados se excluyen. Se prefieren los percentiles a las medias en toda duración. Los números del ejemplo de este tema son ilustrativos.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problemas abiertos y cerrados | Flujo de registros de problemas que entran y salen del estado abierto, por servicio | Recuento de abiertos en el periodo y recuento de cerrados en el periodo, cada uno por código de cierre (corregido, riesgo aceptado, duplicado, no reproducible); los duplicados se muestran pero se excluyen del recuento de «corregidos» | recuento por periodo | Registros de problemas de ITSM | Gestión de problemas | Entrada y caudal de la lista de pendientes | Mensual |
| Antigüedad de la lista de pendientes de problemas | Cuánto tiempo llevan esperando los problemas abiertos | Para cada problema abierto, fecha de la instantánea menos la fecha de creación del registro; se reportan la mediana y el percentil 85 de los problemas abiertos y el más antiguo, por prioridad | días | Registros de problemas de ITSM | Gestión de problemas | Antigüedad del elemento de trabajo en el tablero | Mensual |
| Tasa de vinculación de incidentes a problemas | Proporción de incidentes que apuntan a un problema o error conocido donde se espera uno | Incidentes del periodo con un problema o error conocido vinculado / incidentes del periodo con prioridad alta o superior, o reabiertos, o de una categoría repetida; se excluyen los incidentes cerrados como error del usuario o duplicados | porcentaje | Registros de incidentes y de problemas de ITSM | Gestión de incidentes; gestión de problemas | Detección de patrones en la retrospectiva | Mensual |
| Tiempo hasta la causa raíz | Cuánto tarda un problema diagnosticado en llegar a una causa registrada | El reloj empieza cuando se crea el registro del problema y se detiene cuando se registra la causa y una segunda persona la ha revisado; los problemas cerrados sin causa se excluyen y se cuentan por separado; se reportan la mediana y el percentil 85 | días | Registros de problemas de ITSM y su pista de auditoría | Gestión de problemas | Spike o ventana de tiempo para investigación | Mensual |
| Tasa de reutilización de errores conocidos | Con qué frecuencia se usa un error conocido cuando llega un incidente | Incidentes resueltos con un error conocido o su solución provisional vinculados / incidentes del periodo cuyo síntoma coincide con un error conocido que existía en ese momento; se excluyen los incidentes sin error conocido coincidente | porcentaje | Vínculos de incidentes de ITSM; uso de artículos de conocimiento | Gestión del conocimiento; gestión de problemas | Uso de runbooks o guías del equipo | Mensual |
| Tiempo hasta la corrección permanente | Cuánto tiempo está expuesto un problema desde el diagnóstico hasta que la corrección funciona en producción | El reloj empieza cuando se registra la causa y se detiene cuando el cambio de corrección vinculado se implementa y se confirma; los problemas cerrados como riesgo aceptado se excluyen y se cuentan por separado; se reportan la mediana y el percentil 85 | días | Registros de problemas; registros de cambios o eventos de despliegue del pipeline | Gestión de problemas; habilitación de cambios | Tiempo de ciclo del elemento de corrección | Mensual |
| Tasa de recurrencia tras la corrección | Proporción de problemas corregidos cuyos síntomas vinculados volvieron | Problemas cerrados como corregidos en una cohorte trimestral con un nuevo incidente coincidente en los 90 días siguientes a la puesta en marcha de la corrección / problemas cerrados como corregidos en ese trimestre; la ventana de 90 días es un ejemplo y se indica en el gráfico | porcentaje | Registros de incidentes y de problemas de ITSM; eventos de despliegue | Gestión de problemas; mejora continua | Tasa de defectos escapados o de regresiones | Trimestral |
| Proporción solo con solución provisional | Proporción de problemas conocidos protegidos solo por una solución provisional | Problemas abiertos en estado de error conocido sin corrección programada / problemas abiertos en estado de error conocido; los problemas de riesgo aceptado con un responsable con nombre y una fecha de revisión se muestran como un grupo aparte | porcentaje | Registros de problemas de ITSM | Gestión de problemas; gestión de riesgos | Registro de deuda técnica | Mensual |

La ventana de 90 días, la regla de coincidencia de síntomas y la definición de «esperado» en la tasa de vinculación son ejemplos. Cada equipo elige valores que se ajusten a sus servicios y los anota en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas). Contar por separado los problemas cerrados como «corregidos» de los demás códigos de cierre mantiene honesta la pareja de abiertos y cerrados.

## Recomendaciones

### Decide qué cuenta como problema

**1. Abre un problema con evidencias e indica cuáles son.** Buenos desencadenantes son los incidentes repetidos con el mismo síntoma, un incidente grave de causa desconocida, una tendencia hallada en la revisión o un riesgo detectado antes de cualquier incidente. Escribe el desencadenante en el registro, por ejemplo «cinco incidentes en seis semanas vinculados al mismo servicio». Si cada incidente inusual se convierte en un registro de problema, la lista de pendientes se llena de ruido y nadie la lee.

**2. Usa un conjunto pequeño y compartido de códigos de cierre.** Corregido, riesgo aceptado, duplicado, no reproducible y fusionado bastan para la mayoría de los equipos. Cada código tiene un significado de una frase y un responsable que puede usarlo. La mezcla de códigos de cierre es más informativa que el recuento de cerrados, porque muestra cuánto trabajo eliminó una causa y cuánto terminó sin un cambio.

### Vincula incidentes y problemas en el origen

**3. Haz del vínculo un paso del cierre del incidente.** Pide a quien resuelve que vincule el incidente a un problema, un error conocido o «ninguno hallado» antes de cerrarlo. Ofrece sugerencias de coincidencia de la herramienta cuando pueda y deja que decida una persona. Un vínculo hecho semanas después en un ejercicio masivo no es fiable (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Acuerda cómo se emparejan los síntomas.** La recurrencia depende de decidir cuándo dos incidentes son «el mismo». Una taxonomía breve de causas y síntomas, con definiciones y ejemplos, es mejor que el texto libre. Revisa una muestra de coincidencias cada trimestre, ya que los desajustes en ambos sentidos sesgan la tasa de recurrencia.

**5. Deja que la revisión de patrones alimente la lista de problemas.** Una revisión mensual de las categorías de incidentes, por servicio y mediante un [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), muestra qué pocas causas producen la mayor parte del dolor. Usa la revisión para abrir problemas y priorizarlos, y envía a la misma lista las causas repetidas de las revisiones de incidentes graves (véase el tema 3.2, Volumen y prioridad de incidentes).

### Mide los tres retrasos

**6. Cronometra las etapas por separado.** Mide desde la creación del registro hasta la causa registrada, y desde la causa registrada hasta la corrección funcionando en producción. El primer retraso apunta a la capacidad de investigación, al acceso a los datos y a la habilidad. El segundo apunta a la priorización, al proceso de cambios y al trabajo de funciones que compite. Un único «tiempo hasta cerrar un problema» los mezcla y no da a nadie una acción clara.

**7. Reporta los antiguos.** Muestra la mediana y el percentil 85 de la antigüedad de los problemas abiertos y enumera los más antiguos por servicio. Unos pocos registros de varios años moverán una media y dirán poco, mientras que la lista de los más antiguos invita a una decisión: corregir, aceptar el riesgo con un responsable con nombre y una fecha de revisión o cerrar con un motivo.

### Lleva la corrección al flujo normal

**8. Trata una corrección permanente como un elemento de la lista de pendientes con responsable y fecha.** Vincula el problema con el cambio o elemento de trabajo que lleva la corrección y muestra la corrección en el mismo tablero que el trabajo de funciones. Prioriza con una regla acordada, como ponderar el costo de los incidentes recurrentes frente al esfuerzo de corregir. Donde una corrección necesite un cambio, la vía de cambios estándar debe ser rápida para las correcciones de bajo riesgo (véase el tema 4.3, Métricas de habilitación de cambios).

**9. Pide juntas la solución provisional y la fecha de salida.** Una solución provisional gana tiempo. Regístrala como error conocido, comprueba que el equipo de guardia puede encontrarla y ejecutarla y fija una fecha de revisión para la corrección. La proporción solo con solución provisional se convierte así en una lista de decisiones, no en una pila silenciosa de deuda (véase el tema 4.6, Deuda técnica y errores conocidos).

### Comprueba que las correcciones funcionaron

**10. Sigue cada corrección con una ventana de recurrencia.** Tras poner en marcha una corrección, vigila los incidentes coincidentes durante una ventana declarada y reporta por cohorte trimestral la proporción de correcciones que se sostuvieron. La recurrencia es lo más parecido a una medida de resultado que tiene esta práctica. Si es alta, pregunta si se encontró la causa o solo un factor contribuyente, y reabre el análisis.

**11. Mide la reutilización de errores conocidos donde trabajan los responsables de respuesta.** Cuenta con qué frecuencia se usa un error conocido o su solución provisional cuando llega un incidente coincidente. Una tasa baja de reutilización con muchos errores conocidos suele significar que las entradas son difíciles de encontrar, están obsoletas o se escribieron para el analista y no para quien responde. Arregla el artículo y su ubicación antes de añadir más (véase el tema 3.6, Métricas de gestión del conocimiento).

### Mantén honestos los números

**12. Muestra cohortes y salvedades junto a cada gráfico.** Anota las definiciones, la mezcla de códigos de cierre y cualquier cambio de regla en el propio gráfico. Las cohortes trimestrales de problemas corregidos muestran la recurrencia sin mezclar trabajo antiguo y nuevo. Empareja cada recuento con una medida de resultado para que ningún número esté solo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Problemas abiertos y cerrados | Abrir muchos registros triviales; dividir un problema en varios; cerrar registros como duplicados o «no reproducible» para despejar la lista | Mezcla de códigos de cierre; tasa de recurrencia tras la corrección; una muestra de registros cerrados leída cada trimestre |
| Antigüedad de la lista de pendientes de problemas | Cerrar los registros más antiguos sin corrección; reabrir como registro nuevo para reiniciar el reloj; reclasificar un problema como solicitud | Vincular los registros nuevos con sus originales y reportar la antigüedad desde el primer registro; lista de cierres por motivo; revisión de los riesgos aceptados |
| Tasa de vinculación de incidentes a problemas | Vincular todos los incidentes a un problema comodín vago para elevar la tasa | Proporción de vínculos que apuntan a los cinco mayores problemas; muestra de vínculos comprobada por una coincidencia real; recurrencia de los síntomas vinculados |
| Tiempo hasta la causa raíz | Registrar una causa rápida y superficial para detener el reloj; nombrar «error humano»; omitir al segundo revisor | Tasa de recurrencia tras la corrección; la taxonomía de causas con «error humano» no aceptado por sí solo; revisión de una muestra de causas frente a las evidencias |
| Tasa de reutilización de errores conocidos | Contar un vínculo añadido después de cerrarse el incidente; añadir un error conocido a cada incidente de un servicio | Tiempo entre el cierre del incidente y el vínculo; retroalimentación de los responsables de respuesta sobre si la entrada ayudó; revisión de las entradas no usadas en 90 días |
| Tiempo hasta la corrección permanente | Marcar el cambio como implementado antes de verificar la corrección; cerrar como riesgo aceptado para evitar el trabajo | Tasa de recurrencia tras la corrección; lista de riesgos aceptados con responsable y fecha de revisión; paso de verificación antes de detener el reloj |
| Tasa de recurrencia tras la corrección | Definir los síntomas de forma estrecha para que las recurrencias no coincidan; ampliar la ventana de cierre para que las correcciones caigan en cohortes anteriores; retrasar la vinculación | Taxonomía de causas revisada por alguien ajeno al equipo propietario; tasa de vinculación de incidentes; ventana fija declarada de antemano |
| Proporción solo con solución provisional | Programar una corrección simbólica sin fecha real; trasladar los problemas a riesgo aceptado; rebajar la prioridad del problema | Antigüedad de las correcciones programadas que se han deslizado; lista de riesgos aceptados revisada con un responsable ejecutivo con nombre; costo de los incidentes repetidos por problema |

Una lectura sana parece tranquila y algo aburrida. Los recuentos de abiertos y cerrados van más o menos a la par, los problemas abiertos más antiguos tienen cada uno una decisión registrada, la proporción de correcciones que se sostuvieron es alta y las líneas de cohortes son estables, y los errores conocidos los usan las personas que se encuentran los síntomas. El patrón de alarma es un recuento de cerrados largo y ordenado junto a incidentes que siguen volviendo. Cuando los números de actividad parecen excelentes y los usuarios siguen topándose con el mismo fallo, cree a los usuarios.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Registros formales de problemas para incidentes recurrentes y graves | Responsable, historial y vínculo con las correcciones claros; respalda la auditoría | Sobrecarga de proceso; los registros pueden quedar obsoletos |
| Corregir causas dentro de la lista de pendientes del equipo sin registro de problema | Rápido, ligero, cercano al trabajo | Los patrones entre equipos pasan inadvertidos; sin error conocido compartido |
| Códigos de cierre estrictos y cohortes trimestrales | Visión honesta de los resultados; resiste los recuentos ordenados | Más lento de leer; exige disciplina en la introducción de datos |
| Contar los problemas cerrados como objetivo | Fácil de explicar y de graficar | Invita a cerrar por el recuento; premia los problemas pequeños |
| Seguimiento de la recurrencia de los problemas corregidos | Lo más cercano disponible a medir si funcionó | Necesita buen emparejamiento de síntomas y una ventana suficientemente larga |
| Seguimiento de la reutilización de errores conocidos | Muestra si el conocimiento ayuda a quienes responden | Depende de que quienes responden vinculen la entrada; puede manipularse |

Los equipos que corrigen causas rápidamente dentro de su propia lista de pendientes deben seguir registrando la causa donde la organización más amplia pueda verla, para que otro equipo que se encuentre el mismo síntoma se beneficie. Invierte primero en el vínculo entre incidentes y problemas y en la ventana de recurrencia. Esas dos piezas hacen interpretables todas las demás medidas.

## Preguntas para debatir con tu equipo

**1. ¿Qué tres incidentes reparamos más a menudo el trimestre pasado y qué nos impidió corregir su causa?**
Enumera los incidentes repetidos del centro de servicios o de la herramienta de incidentes y ordénalos por número de apariciones. Para cada uno, pregunta cuál fue el obstáculo: falta de tiempo de investigación, ausencia de una causa acordada, una corrección que compite con las funciones o una corrección que necesita a otro equipo. El facilitador debe buscar obstáculos que se repiten en los tres, porque apuntan a una corrección del sistema y no a una técnica.

**2. Cuando vinculamos un incidente a un problema, ¿quién lo hace, cuándo y cómo sabemos que es el problema correcto?**
Recorre un incidente reciente desde el cierre hasta el vínculo. Anota si el vínculo se hace durante el incidente, al cierre o en una limpieza posterior. Revisen juntos una pequeña muestra de vínculos en busca de coincidencias verdaderas. Acuerden un cambio que haga el vínculo más fácil o más fiable.

**3. ¿Cuánto espera su corrección una causa diagnosticada y quién decide el orden?**
Toma los problemas con una causa registrada y mira el tiempo transcurrido desde el diagnóstico. Pregunta quién los prioriza y qué regla usa. La discusión suele mostrar que el retraso es una cola delante de la lista de pendientes de producto y no una dificultad técnica. Acuerden cómo se comparan las correcciones de problemas con el trabajo de funciones.

**4. ¿Cuáles son nuestras soluciones provisionales más antiguas y qué perderíamos si las mantuviéramos otro año?**
Nombra las tres soluciones provisionales de más larga vida y lo que cuestan en esfuerzo manual, riesgo y conocimiento de las personas que todavía las recuerdan. Pregunta qué ocurriría si la persona que conoce la solución provisional estuviera ausente. Decidan para cada una si corregirla, aceptar el riesgo con un responsable y una fecha de revisión o retirar el servicio.

**5. Si un problema corregido vuelve, ¿nos enteramos y con qué rapidez?**
Pregunta cómo se notaría un síntoma que vuelve y quién reabriría el análisis. Hablen de si la ventana de recurrencia es lo bastante larga para el tipo de fallo en cuestión. El facilitador debe ayudar al grupo a acordar una ventana y una regla de emparejamiento y a decidir qué equipo revisa las coincidencias para que el equipo propietario no califique su propio trabajo.

**6. ¿Usan las personas de guardia nuestros errores conocidos y qué las llevaría a recurrir a uno?**
Pregunta a quienes responden cuándo buscaron por última vez un error conocido y qué encontraron. Mira dónde viven las entradas, cómo se titulan y si dicen qué hacer primero. Elijan una entrada para reescribirla con un responsable de respuesta y pruébenla en la próxima semana de guardia.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen la mayoría de las correcciones permanentes y sienten el tirón del trabajo de funciones. Ganan al ver el costo en incidentes de un fallo recurrente junto al esfuerzo de corregirlo y al disponer de un lugar claro para los elementos de corrección en la lista de pendientes. Deben resistir la tentación de tratar el trabajo de problemas como una interrupción y reservar en su lugar una proporción visible de capacidad para él. La retrospectiva es un lugar natural para detectar patrones y abrir problemas (véase el tema 2.1, Medidas de flujo).

### Equipos de servicio y de operaciones

Los equipos de operaciones ven primero los síntomas repetidos y cargan con el costo en avisos y trabajo manual. Mantienen los registros de problemas y de errores conocidos, dirigen la revisión de patrones y comprueban que se hacen los vínculos. Su riesgo es gastar esfuerzo en registros en lugar de eliminar causas. Deben mantener pequeños los códigos de cierre, hacer del error conocido lo primero que vea quien responde y entregar las correcciones al equipo propietario con las evidencias adjuntas.

### Liderazgo y gobernanza

Los líderes deciden si el trabajo de fiabilidad gana frente a las funciones y fijan los incentivos sobre lo que se registra. Deben pedir la recurrencia por cohorte y los problemas abiertos más antiguos antes de pedir recuentos, y tratar el riesgo aceptado como una decisión que necesita un responsable con nombre y una fecha de revisión. Reportar una lista de pendientes decreciente sin recurrencia premia cerrar. La gobernanza debe mirar tendencias y decisiones, no una tabla de posiciones de equipos (véase el tema 4.6, Deuda técnica y errores conocidos).

### Clientes y usuarios

Los usuarios juzgan la gestión de problemas por una sola cosa: si lo mismo sigue yendo mal. No ven los registros de problemas y no les importa cuántos se cerraron. Donde los acuerdos lo permitan, cuenta a los clientes un problema conocido, la solución provisional y la fecha en que se espera la corrección, y reporta después cuando llegue. Una corrección anunciada y entregada genera más confianza que una silenciosa.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional da soporte a una aplicación de programación clínica usada por plantas y clínicas ambulatorias. Un equipo de producto construye y opera la aplicación, un equipo de infraestructura opera la plataforma y un centro de servicios atiende las llamadas. Todos los números de este ejemplo son ilustrativos.

En una revisión trimestral, el jefe del departamento nota que el panel de problemas parece excelente: 46 problemas cerrados frente a 31 abiertos, y el problema abierto más antiguo tiene 140 días. Los jefes de planta siguen quejándose de que la pantalla de programación se congela en el cambio de turno. La responsable del servicio pide la tasa de vinculación de incidentes a problemas y la tasa de recurrencia tras la corrección, que aún no figuran en el panel.

Los datos cuentan otra historia. La mezcla de códigos de cierre muestra que 22 de los 46 cierres eran «no reproducible» o «duplicado». La tasa de vinculación para incidentes de prioridad alta es del 38 por ciento. Los incidentes de congelación se habían registrado en cuatro categorías, de modo que no se veía ningún patrón. Una vez revinculada a mano una muestra de 30 incidentes, 17 apuntaban a una sola causa: un bloqueo de base de datos mantenido por un trabajo nocturno que se alargaba hasta el turno de la mañana. La recurrencia de los problemas corregidos el trimestre anterior era del 27 por ciento, más alta de lo que nadie esperaba.

El equipo toma tres decisiones. Primero, la taxonomía de causas y síntomas gana una entrada «congelación de la programación» y vincular un problema o «ninguno hallado» pasa a ser un paso obligatorio en el cierre del incidente. Segundo, el problema del trabajo nocturno pasa de la lista de pendientes de infraestructura al tablero del equipo de producto con un responsable y una fecha objetivo, y se registra como error conocido una solución provisional (un reinicio programado tras el trabajo), que se prueba con el centro de servicios. Tercero, el panel sustituye el recuento de cerrados por tres números: la proporción de correcciones que se sostuvieron a los 90 días, la mediana y el percentil 85 del tiempo desde la causa registrada hasta la corrección y los problemas abiertos más antiguos con sus decisiones.

Ocho semanas después el bloqueo se elimina mediante un cambio en el trabajo. Los incidentes de la categoría de congelación bajan de unos nueve al mes a dos, y la reutilización de errores conocidos sube al 71 por ciento para los síntomas que quedan, sobre todo porque el centro de servicios ahora encuentra la entrada del reinicio. El riesgo de manipulación que el equipo detectó estaba en su propio hábito anterior: cerrar registros como «no reproducible» cuando un incidente caía fuera del horario laboral. La mezcla de códigos de cierre, la muestra de registros cerrados leída cada trimestre y la cohorte de recurrencia actúan ahora como barreras de protección. No se clasifica a nadie, y la revisión enumera servicios y decisiones, no analistas.

## Agilidad, IA, automatización y analítica

### Agilidad

Integra el trabajo de problemas en la lista de pendientes normal y en las conversaciones de mejora, para que las correcciones permanentes compitan abiertamente con el trabajo nuevo. La precaución es que un objetivo de cerrar problemas rápidamente lleva a cerrarlos con soluciones provisionales.

### IA

La IA puede agrupar incidentes, sugerir causas raíz y redactar registros de problemas, lo que puede elevar los recuentos de problemas y las tasas de vinculación sin eliminar causas. Empareja la tasa de vinculación con la tasa de recurrencia tras la corrección y marca qué causas sugirió la IA y confirmó una persona. La precaución es que una causa sugerida por IA puede ser verosímil y errónea, así que verifica antes de cerrar.

### Automatización

Vincula automáticamente los incidentes a los problemas donde coincidan las señales y mide el emparejamiento por los vínculos erróneos. La precaución es que cerrar automáticamente un problema cuando los incidentes cesan oculta una causa que solo se ha callado.

### Analítica

Muestra el tiempo hasta la corrección permanente como una distribución y la tasa de recurrencia tras las correcciones. La decisión a la que informa es qué causas merecen capacidad. La precaución es que la recurrencia necesita una ventana larga, así que di cuánto tiempo observaste.

## Perspectiva sectorial

**Startup.** Rara vez hay un proceso de problemas aparte. El equipo corrige las causas directamente, y el riesgo es que nadie recuerde por qué. Mantén una lista de una página de incidentes recurrentes y sus causas, vincula las correcciones con el gestor de incidencias y revisa la lista cada mes. Mide la recurrencia y la antigüedad de los elementos más antiguos; omite los códigos de cierre formales hasta que el equipo crezca.

**Pequeña empresa.** Una persona de TI o un proveedor de servicios gestionados puede llevar todo. Pide al proveedor sus registros de problemas y las categorías de incidentes que hay detrás, y la definición escrita de «resuelto». Una breve lista de los cinco problemas repetidos principales, con un responsable con nombre y una fecha para cada uno, rinde más que una herramienta pesada. Exporta los registros periódicamente para evitar el bloqueo por parte del proveedor.

**Gran empresa.** Muchos servicios y proveedores crean la mayor necesidad de definiciones compartidas. Acuerden la taxonomía de causas, los códigos de cierre y la ventana de recurrencia entre equipos, nombren responsables de problemas por servicio y reporten por servicio y cohorte. Donde un proveedor tenga una corrección, hagan seguimiento de la respuesta del proveedor frente al acuerdo (véase el tema 8.4, Métricas de proveedores y contratos) y escalen por una vía documentada.

**Gobierno y sector público.** La auditoría, el control de cambios y la contratación pública pueden alargar el camino de la causa a la corrección, así que el reloj del tiempo hasta la corrección debe mostrar dónde está el retraso: investigación, aprobación, contratación o programación. Los riesgos aceptados necesitan responsables y fechas de revisión registrados que resistan la auditoría. Las normas de conservación y privacidad se aplican a los registros de incidentes y de problemas, en especial donde en ellos aparecen datos clínicos o de ciudadanos.

## Caso de negocio: motivaciones, ROI y TCO

El costo tiene tres partes. La primera es el tiempo de investigación: personas con las habilidades y el acceso para analizar incidentes, que compite con su otro trabajo. La segunda es la propia corrección, entregada a través de la lista de pendientes y del proceso de cambios. La tercera es el costo de registrar y reportar: vincular incidentes, mantener taxonomías, ejecutar la revisión de patrones y mantener la base de datos de errores conocidos. Estos costos son sobre todo tiempo de las personas, así que cuenta las horas.

El retorno aparece como incidentes que dejan de repetirse, menos avisos y menos esfuerzo de soluciones provisionales manuales, una gestión de incidentes más corta porque quienes responden encuentran errores conocidos y menos escaladas a ingenieros. No existe una cifra universal, así que estima la tuya. Para un incidente recurrente, multiplica las apariciones por año por el esfuerzo medio de gestión y una estimación del impacto en el negocio por aparición, y compáralo con el esfuerzo de corregirlo. Revisa la estimación con el responsable del servicio, exprésala como una estimación y vuelve a revisarla cuando la ventana de recurrencia muestre lo ocurrido. La gestión de problemas se amortiza mejor en las pocas causas que producen la mayor parte de la carga de incidentes, que la vista de Pareto encuentra rápidamente.

## Antipatrones y trampas

- **Cerrar como objetivo.** Una meta de problemas cerrados premia los registros triviales y el cierre temprano. Reporta primero las medidas de resultado y muestra la mezcla de códigos de cierre.
- **Registros de problemas como cementerio.** Los registros quedan abiertos sin responsable, fecha ni decisión. Revisa la lista de los más antiguos con una cadencia y exige una decisión para cada elemento.
- **Detenerse en «error humano».** Nombra a quien tocó el sistema y no por qué el sistema permitió el fallo. Acepta una causa solo cuando nombre una condición que pueda cambiarse.
- **No corregir nada hasta que la causa raíz sea segura.** Los fallos complejos pueden no tener una causa única. Aplica una solución provisional y la corrección mejor respaldada y vigila después la recurrencia.
- **Soluciones provisionales sin salida.** Una solución provisional sin fecha de revisión se vuelve permanente. Anota un responsable y una fecha cuando se cree el error conocido.
- **Vínculos débiles entre incidentes.** Los vínculos ausentes o descuidados hacen invisible la recurrencia. Haz del vínculo parte del cierre del incidente y muestrea los vínculos.
- **Trabajo de problemas fuera de la lista de pendientes.** Las correcciones que viven en una cola aparte esperan para siempre. Pon el elemento de corrección en el tablero del equipo propietario y priorízalo frente a las funciones.
- **Comparar analistas o equipos por registros cerrados.** Premia los servicios fáciles e invita a la manipulación. Compara los servicios a lo largo del tiempo con su propio historial y lee las cohortes.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Identificación y vinculación de problemas | Problemas abiertos solo tras grandes caídas; sin vínculos de incidentes | Algunos equipos vinculan incidentes; las categorías difieren por equipo | Taxonomía y códigos de cierre compartidos; vínculo hecho al cierre del incidente | Tasa de vinculación y calidad del emparejamiento muestreadas y revisadas | Patrones detectados entre equipos y proveedores, con errores conocidos compartidos |
| Causa raíz y errores conocidos | Causa registrada en texto libre, si acaso | Errores conocidos guardados por algunos equipos en lugares distintos | Una base de datos de errores conocidos; revisión de las causas por una segunda persona | Tiempo hasta la causa raíz y reutilización de errores conocidos con tendencias y atendidos | Quienes responden, los proveedores y los clientes aportan y usan entradas compartidas |
| Entrega de la corrección | Las correcciones ocurren cuando alguien tiene tiempo | Correcciones seguidas en la propia lista de un equipo | Corrección vinculada a un elemento de la lista de pendientes o a un cambio con responsable y fecha | Tiempo hasta la corrección permanente revisado, con capacidad reservada | Prioridad de las correcciones fijada conjuntamente con las hojas de ruta de producto y de proveedores |
| Resultado y aprendizaje | Se reportan recuentos de registros | Antigüedad de la lista reportada en algunas revisiones | Recurrencia tras la corrección y proporción solo con solución provisional reportadas con definiciones | Cohortes emparejadas con barreras de protección y usadas en decisiones de financiación | Definiciones revisadas cuando dejan de informar decisiones; la mejora es rutinaria |

## Lista de verificación

- [ ] El registro de métricas define un problema, un error conocido y cada código de cierre.
- [ ] El cierre del incidente incluye un vínculo a un problema, un error conocido o «ninguno hallado».
- [ ] Existe una taxonomía de causas y síntomas, con definiciones y ejemplos.
- [ ] Cada problema tiene un responsable, un desencadenante y una fecha de decisión.
- [ ] El tiempo hasta la causa raíz y el tiempo hasta la corrección permanente se miden por separado, con percentiles.
- [ ] Cada corrección permanente está vinculada a un elemento de la lista de pendientes o a un cambio con responsable.
- [ ] Cada solución provisional tiene un responsable y una fecha de revisión.
- [ ] La recurrencia tras la corrección tiene seguimiento por cohorte trimestral con una ventana declarada.
- [ ] La reutilización de errores conocidos se mide donde trabajan quienes responden.
- [ ] Los problemas abiertos más antiguos se revisan con una cadencia y cada decisión se registra.
- [ ] Cada trimestre se lee una muestra de registros cerrados para comprobar los códigos de cierre y las causas.
- [ ] Los informes describen servicios y equipos, y ninguna tabla clasifica a individuos.

## Prompts de IA

**Encuentra problemas candidatos en un conjunto de incidentes.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Revisa los códigos de cierre y los registros de problemas.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Diseña una medida de recurrencia.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Prepara una revisión de decisiones sobre problemas antiguos.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas que definen las medidas de incidentes, cambios y conocimiento de las que dependen las métricas de problemas, y la barrera de protección que emparejar con cada una.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de problemas nueva o editada indica sus relojes, exclusiones, vector de manipulación y barrera de protección.

## Ideas clave

- La medida de la gestión de problemas es la recurrencia: si los incidentes vinculados a un problema dejan de volver.
- Cronometra las etapas por separado, desde el registro hasta la causa registrada y desde la causa hasta la corrección funcionando en producción.
- Vincula los incidentes a los problemas al cierre, acuerda cómo se emparejan los síntomas y muestrea los vínculos.
- Una solución provisional es una etapa con un responsable y una fecha de revisión, y la proporción solo con solución provisional muestra cuánto riesgo se está cargando.
- Pon las correcciones permanentes en la lista de pendientes del equipo propietario y reporta las medidas de resultado antes que los recuentos de registros.
- Describe servicios, cohortes y decisiones. No clasifiques nunca a analistas ni equipos por problemas cerrados.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
