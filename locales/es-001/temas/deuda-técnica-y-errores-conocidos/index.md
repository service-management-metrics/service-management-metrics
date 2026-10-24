# Deuda técnica y errores conocidos

**Trata los errores conocidos y la deuda técnica como un único registro visible de arreglos aplazados, mide lo que cuesta cada elemento por cada mes que sigue abierto y dedica una parte protegida de la capacidad a los elementos con más intereses.**

## Visión general y motivación

Todo equipo aplaza alguna reparación. Un defecto se entiende pero no se corrige, se toma un atajo para cumplir una fecha, un componente se deja envejecer y una solución provisional se escribe en un runbook. Cada aplazamiento es una decisión sensata cuando se toma. El problema empieza cuando los aplazamientos se acumulan fuera de la vista, porque el costo de cargar con ellos aparece más tarde como incidentes, entrega lenta y personas cansadas, sin ninguna línea en ningún informe que conecte el costo con la causa.

Dos vocabularios describen el mismo patrón. En [ITIL](https://en.wikipedia.org/wiki/ITIL), un **error conocido** es un problema cuya causa raíz se entiende y para el cual existe una solución provisional, o una corrección permanente aún no aplicada. Los errores conocidos se registran para que el personal del centro de servicios y de operaciones pueda resolver rápido los incidentes repetidos, y el registro sigue abierto hasta que se publica una corrección. En el trabajo de software ágil, la **[deuda técnica](https://en.wikipedia.org/wiki/Technical_debt)** es la metáfora, acuñada por [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) en 1992, para las decisiones de diseño e implementación que dificultan el cambio futuro. La metáfora lleva dos ideas que importan para la medición: el **principal**, que es el esfuerzo necesario para eliminar la deuda, y los **intereses**, que son el esfuerzo o riesgo extra que pagas cada periodo mientras la deuda permanece.

Las dos visiones difieren en dónde miran. Los errores conocidos se descubren a través de las operaciones: un incidente o una investigación de problemas encuentra una causa. La deuda técnica suele descubrirse a través de la entrega: un desarrollador nota que un cambio es más difícil de lo que debería. Un error conocido es a menudo deuda técnica que ya ha empezado a perjudicar a los clientes. La deuda técnica es a menudo un error conocido a punto de ocurrir. Mantener listas separadas, una en la herramienta ITSM y otra en una lista de pendientes o una wiki, oculta la conexión y produce dos argumentos que compiten por la misma capacidad escasa.

Este tema ofrece un conjunto reducido de medidas para el registro combinado. Evita una única cifra en dinero para la deuda de toda una organización, que ningún método produce de forma fiable, y mide lo que se puede observar: elementos abiertos, tiempo esperado, incidentes causados, trabajo añadido y capacidad dedicada a la reparación. El registro alimenta entonces una conversación de priorización entre producto y operaciones (véase el tema 4.1, Métricas de gestión de problemas, para los registros de problemas y las correcciones permanentes, y el tema 2.9, Trabajo operativo y trabajo no planificado, para la carga de interrupciones que crea la deuda).

Términos usados en este tema:

- Una **solución provisional** (workaround) es una forma de restablecer el servicio o evitar un fallo sin eliminar la causa.
- Una **corrección permanente** elimina la causa. El [análisis de causa raíz](https://en.wikipedia.org/wiki/Root_cause_analysis) es el trabajo que la encuentra.
- La **[refactorización de código](https://en.wikipedia.org/wiki/Code_refactoring)** reestructura el código sin cambiar su comportamiento externo. Es la forma habitual de saldar la deuda de diseño.
- Un **[olor de código](https://en.wikipedia.org/wiki/Code_smell)** (code smell) es una señal superficial en el código que a menudo indica un problema más profundo. Es un aviso para mirar, no un veredicto.
- El **[costo de oportunidad](https://en.wikipedia.org/wiki/Opportunity_cost)** es el valor de la mejor alternativa a la que renuncias al elegir un uso del tiempo frente a otro. Cada corrección compite con una función, y la comparación es la decisión real.
- El **[costo del retraso](https://en.wikipedia.org/wiki/Cost_of_delay)** es la pérdida económica por posponer un trabajo. Es la idea detrás de poner precio a los intereses de un elemento de deuda.
- Un **[error de software](https://en.wikipedia.org/wiki/Software_bug)** (bug) es un defecto en el software. Un error conocido puede ser un bug, una debilidad de configuración, un límite de diseño o un defecto de un proveedor.
- El **[análisis estático de programas](https://en.wikipedia.org/wiki/Static_program_analysis)** inspecciona el código sin ejecutarlo. Sus advertencias y puntuaciones de complejidad son indicadores de posible deuda, y son evidencia más débil que el historial de incidentes.

No toda la deuda es un error. El cuadrante de Martin Fowler separa la deuda deliberada de la inadvertida y la imprudente de la prudente (véase la lista de referencias). Un atajo prudente con un plan de pago es un préstamo sensato, y la deuda imprudente es la que hay que prevenir. Las métricas de aquí no juzgan el origen. Muestran el saldo.

## Principios clave

- **Un registro, dos puertas.** Los errores conocidos de operaciones y los elementos de deuda de la entrega van a la misma lista visible, con un vínculo entre los registros que describen la misma causa.
- **Mide los intereses y también el principal.** El tamaño de una reparación importa menos que lo que cuesta cada mes el elemento abierto en incidentes, soluciones provisionales y cambio frenado. Ordena por intereses por unidad de esfuerzo de reparación.
- **Haz del aplazamiento una decisión con responsable.** Cada elemento tiene un responsable, un motivo declarado para esperar y una fecha de revisión. Un elemento que nadie eligió aplazar es descuido, y se cuenta como tal.
- **Protege la capacidad antes de necesitarla.** Una parte declarada de la capacidad de cada equipo para el trabajo de reparación, acordada de antemano, vale más que una limpieza heroica tras un mal trimestre.
- **Mantén honesta la solución provisional.** Una solución provisional es un servicio, con su propio costo, responsable y modos de fallo. Mide con qué frecuencia se usa y con qué frecuencia falla.
- **Describe sistemas, nunca personas.** La deuda pertenece a un servicio o a un componente. No la atribuyas nunca a un autor y no clasifiques nunca a los ingenieros por la deuda que tocaron.
- **Estima de forma gruesa.** Tamaños de «horas», «días» y «semanas» bastan. La precisión más allá de eso es inventada.

## Definiciones de métricas

Las métricas siguientes describen el registro de reparaciones aplazadas. Los relojes y los límites se indican en cada fórmula. Las medidas de tiempo se reportan como distribuciones (la mediana y el percentil 85 o 95), no como un único promedio.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Antigüedad de la lista de pendientes de errores conocidos | Cuánto han esperado los errores conocidos abiertos una corrección permanente | El reloj empieza cuando el registro de problema se marca como «error conocido»; se detiene cuando la corrección permanente se publica en producción; los elementos cerrados como «riesgo aceptado» se reportan por separado y se excluyen. Reporta el recuento, la antigüedad mediana y la antigüedad del percentil 85, por servicio | días (distribución) | Registros de problemas y de errores conocidos de la herramienta ITSM, registros de versiones | Gestión de problemas | Gráfico de antigüedad de elementos de trabajo; antigüedad de la lista de pendientes de bugs | Mensual |
| Cobertura de soluciones provisionales | Proporción de errores conocidos abiertos que tienen una solución provisional documentada y probada que un agente puede seguir | errores conocidos abiertos con una solución provisional revisada en los últimos 6 meses / errores conocidos abiertos; se excluyen los elementos cerrados y los de riesgo aceptado | porcentaje | Base de conocimiento vinculada a los registros de errores conocidos | Gestión de problemas; gestión del conocimiento | Runbook o definición de terminado para la operabilidad | Mensual |
| Incidentes vinculados a errores conocidos abiertos | Incidentes cuya causa es un error conocido abierto, medida directa de los intereses pagados en interrupción del servicio | incidentes del periodo vinculados a un error conocido que estaba abierto cuando empezó el incidente / todos los incidentes del periodo; los incidentes sin vínculo de causa se reportan como sin vincular, no se cuentan | porcentaje, más recuento | Vínculos de incidente a problema de la herramienta ITSM | Gestión de incidentes; gestión de problemas | Defectos escapados; entrada de bugs en producción | Mensual |
| Stock de deuda | Número y tamaño estimado de los elementos de deuda técnica registrados que siguen abiertos | elementos abiertos en el registro de deuda al final del periodo; el tamaño es la suma de bandas gruesas de esfuerzo (horas, días, semanas) asignadas en el registro; se excluye la deuda sin registrar o sospechada | recuento y bandas de esfuerzo | Registro de deuda en el gestor, etiquetado por servicio | Mejora continua; diseño de servicios | Elementos de la lista de pendientes del producto etiquetados como deuda | Mensual |
| Intereses de la deuda | Trabajo extra causado por la deuda abierta y los errores conocidos, en tiempo del equipo | horas registradas en el periodo en elementos de trabajo etiquetados con una referencia de deuda o de error conocido (soluciones provisionales, pasos manuales, retrabajo y esfuerzo extra en los cambios afectados) / total de horas de trabajo del equipo en el periodo; el trabajo de reparación en sí se excluye y se cuenta en la proporción de capacidad | porcentaje del tiempo de trabajo | Etiquetas de tiempo o esfuerzo en los elementos de trabajo, mantenidas a nivel de equipo | Mejora continua; gestión de problemas | Proporción de trabajo no planificado y retrabajo | Mensual |
| Proporción de capacidad para deuda | Proporción de la capacidad de entrega dedicada a saldar deuda y errores conocidos | capacidad (recuento de elementos o esfuerzo) de los elementos de trabajo completados etiquetados como reparación de deuda o corrección de error conocido / todos los elementos de trabajo completados en el periodo; se excluyen los elementos sin etiqueta | porcentaje | Gestor, elementos completados por etiqueta | Mejora continua; habilitación de cambios | Asignación de capacidad | Por periodo de planificación, revisada mensualmente |
| Cambio neto de la deuda | Si el registro crece o se encoge | elementos de deuda y de errores conocidos registrados en el periodo menos elementos resueltos en el periodo; resuelto significa corrección publicada, no fusionada; los elementos cerrados como «no se corregirá» se cuentan en una línea aparte | recuento (con signo) | Registro de deuda y registros de errores conocidos | Mejora continua | Cambio de la lista de pendientes por categoría | Mensual |

El riesgo aceptado es una forma legítima de cerrar un error conocido, porque algunos problemas no valen la pena de corregirse. Se lista aparte para que cerrar elementos no mejore en silencio la cifra de antigüedad. La ventana de revisión de 6 meses en la cobertura de soluciones provisionales es un ejemplo. Un equipo fija la ventana según la rapidez con que cambian sus sistemas y la anota en el registro de métricas.

## Recomendaciones

### Construye el registro

**1. Fusiona la lista de errores conocidos y la lista de deuda en un único registro.** Mantén un registro con un campo para el origen (operaciones o entrega), el servicio, el responsable, la banda de tamaño y el vínculo con los registros relacionados. Puede contenerlo la herramienta ITSM o el gestor, siempre que cada sistema enlace con el otro. Sin una vista única, un error conocido de operaciones compite con un elemento de deuda invisible de la entrega por los mismos ingenieros.

**2. Registra la deuda en el momento en que se crea o se descubre.** Un atajo tomado deliberadamente entra en el registro en la misma solicitud de incorporación o registro de cambio, con un motivo declarado y una fecha de revisión. La deuda hallada después la registra quien la encuentra. Una regla de captura barata, de una línea, funciona mejor que una auditoría periódica, porque la gente olvida lo que sabía el trimestre pasado.

### Mide los intereses

**3. Vincula siempre los incidentes con los errores conocidos.** El vínculo entre un incidente y su error conocido es el dato más fuerte que tienes sobre los intereses, y cuesta unos segundos al resolver. Haz del vínculo un campo obligatorio cuando se conozca la causa y reporta la proporción sin vincular para que una laguna no parezca una buena noticia (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes). Cuando la misma causa aparece en varios incidentes, el registro de problema lleva la evidencia para la corrección.

**4. Etiqueta el trabajo que crea la deuda.** Deja que los ingenieros marquen un elemento de trabajo cuando se necesitó una solución provisional, un paso manual o retrabajo extra por una debilidad conocida, y vincúlalo con el elemento del registro. La etiqueta cuesta poco y da la cifra de intereses de la deuda a nivel de equipo. Trata el resultado como una estimación con un error amplio, útil para ordenar elementos y para vigilar una tendencia, no para la contabilidad.

**5. Pon precio a cada elemento con dos números: esfuerzo de reparación e intereses mensuales.** Usa bandas gruesas, como horas, días, semanas, para el esfuerzo, y un costo mensual aproximado sacado de los incidentes vinculados, el trabajo etiquetado y cualquier costo de inactividad que tu organización ya estime. Dividir los intereses por el esfuerzo da un sencillo tiempo de recuperación. No inventes precisión: una banda y un supuesto declarado bastan para separar las victorias evidentes de los elementos que pueden esperar.

### Protege la capacidad y decide

**6. Reserva una parte fija de la capacidad y repórtala.** Acuerda con el responsable de producto una parte de cada ciclo para el trabajo de reparación, fijada según la tendencia del registro y revisada cada trimestre. Reporta la proporción de capacidad para deuda junto a las cifras de trabajo planificado, para que los líderes vean el trabajo de reparación como una inversión deliberada. Una parte reservada protege además al equipo de una discusión de compensaciones en cada conversación de planificación, que la lista de pendientes de funciones suele ganar.

**7. Ordena la reparación frente a las funciones con una moneda común.** Pon los errores conocidos y los elementos de deuda en la misma conversación de priorización que las funciones, expresados como costo del retraso y tiempo de recuperación. Una corrección que elimina un incidente semanal y devuelve su esfuerzo en un trimestre compite por sus méritos. Ordenar por volumen de la queja, antigüedad del solicitante o fecha de registro da malos resultados (véase el tema 4.4, Fallos de cambio y retrabajo).

**8. Cierra el ciclo de las decisiones de aplazamiento.** Para cada elemento que se deja abierto conscientemente, registra quién aceptó el riesgo, la fecha de revisión y el desencadenante que lo subiría de prioridad, como un segundo incidente o un cambio planificado en el área. Revisa la lista de aceptados con su propia cadencia. Un elemento aplazado tres veces sin desencadenante es una decisión de ignorarlo, y el registro debe decirlo.

### Mantén honestos los números

**9. Publica la corrección antes de cerrar el registro.** Un error conocido sigue abierto hasta que la corrección permanente está en producción y se ha comprobado la recurrencia durante una ventana declarada. Cerrar en «fusionado» o «ticket hecho» halaga las cifras de antigüedad y de cambio neto y reabre el incidente más tarde (véase el tema 4.5, Métricas de versiones y despliegues). Haz seguimiento de la tasa de reapertura de errores conocidos como comprobación de calidad de la regla de cierre.

**10. Mira la forma del registro, más allá de los totales.** Un recuento plano puede ocultar una larga cola de elementos muy antiguos, una proporción creciente de elementos en un servicio o un registro mantenido pequeño cerrándolo todo como «no se corregirá». Muestra la distribución de antigüedad, el reparto por servicio y la lista de riesgo aceptado en una sola página. Revísala con las personas que poseen los servicios, en la misma reunión que planifica el trabajo del próximo trimestre.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Antigüedad de la lista de pendientes de errores conocidos | Cerrar registros antiguos como «riesgo aceptado» o «no se corregirá»; dividir un registro antiguo en otros nuevos y jóvenes; reiniciar el reloj registrando de nuevo | Recuento y antigüedad del riesgo aceptado reportados en la misma página; revisión de los cierres por alguien ajeno al equipo propietario; linaje de registros conservado |
| Cobertura de soluciones provisionales | Escribir una solución vaga para satisfacer el campo; contar una solución que ningún agente ha probado nunca | Uso y tasa de fallo de la solución en los incidentes vinculados; prueba periódica de una muestra de soluciones |
| Incidentes vinculados a errores conocidos abiertos | Dejar incidentes sin vincular, o vincularlos con otra causa, para que baje la proporción | Proporción de incidentes sin vincular reportada junto a ella; revisión por muestreo de incidentes cerrados en busca de vínculos omitidos |
| Stock de deuda | No registrar la deuda, para que el stock parezca pequeño; fusionar muchos elementos en uno grande; registrar nimiedades para parecer diligente | Revisión del registro frente a una muestra de revisiones de código y de análisis posteriores; comprobaciones del tamaño y la especificidad de los elementos |
| Intereses de la deuda | Etiquetar de menos el trabajo para evitar el escrutinio, o de más para ganar un presupuesto de reparación; leer la cifra como una calificación de un equipo | Auditoría por muestreo de elementos etiquetados y sin etiquetar; solo vista a nivel de equipo, sin comparación entre equipos; intereses leídos junto con los vínculos de incidentes |
| Proporción de capacidad para deuda | Etiquetar el trabajo ordinario de funciones como reparación; elegir elementos cosméticos fáciles para llenar la proporción | Comprobación de resultados: antigüedad de los elementos de más intereses y vínculos de incidentes a la baja; revisión de lo corregido frente a la clasificación |
| Cambio neto de la deuda | Resolver muchos elementos diminutos para compensar unos pocos grandes; cerrar elementos como «no se corregirá» para que baje el recuento | Cambio neto mostrado por banda de tamaño y por intereses; línea de «no se corregirá» reportada; comprobación de recurrencia en los elementos resueltos |

Una lectura sana muestra un registro visible, específico y que se mueve en una dirección que el equipo eligió. Los elementos más antiguos y de más intereses disminuyen en número. Los incidentes vinculados a errores conocidos abiertos tienden a la baja y la proporción sin vincular es pequeña. La proporción de capacidad para deuda es estable en el nivel acordado en lugar de dispararse tras una crisis y desaparecer después. La lista de riesgo aceptado es corta y está revisada. Cuando un número aislado parece excelente y los demás no se mueven, sospecha de la definición antes de celebrar.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Un registro fusionado de errores conocidos y deuda | Priorización única; operaciones y entrega ven los mismos costos | Necesita herramientas compartidas o vínculos; hay que resolver la propiedad entre dos funciones |
| Una proporción fija de capacidad para reparación | Predecible; protege el trabajo de reparación de la presión de las funciones | Puede gastarse en elementos de poco valor si la clasificación es débil |
| Trabajo de reparación programado solo cuando gana el debate de prioridades | Flexible; responde a la prioridad actual | Casi siempre ganan las funciones; el registro crece hasta una crisis |
| Intereses estimados a partir de incidentes y trabajo etiquetado | Ata la deuda a un costo observable; respalda la clasificación | Números aproximados; depende de un etiquetado y unos vínculos de incidentes honestos |
| Un impulso dedicado de reparación o «semana de deuda» | Concentración y progreso visible | Episódico; el registro se vuelve a llenar entre eventos; interrumpe compromisos planificados |

Elige el arreglo más ligero que mantenga en movimiento los elementos más antiguos y de más intereses. Un equipo pequeño puede llevar el registro en un tablero con una etiqueta y una revisión mensual. Las organizaciones más grandes necesitan vínculos entre herramientas y un método de clasificación acordado. El fin es una decisión deliberada sobre cada elemento, no una lista vacía.

## Preguntas para debatir con tu equipo

**1. ¿Qué tres elementos abiertos nos cuestan más cada mes y cómo lo sabemos?**
Pide a las personas que nombren candidatos de memoria y compruébalos después frente a los vínculos de incidentes y el trabajo etiquetado. Compara la lista recordada con la medida y anota las diferencias. Acuerden cómo se reunirá desde ahora la evidencia de la clasificación.

**2. Cuando aplazamos una corrección, ¿quién decide y cuándo volvemos a mirar?**
Repasa los últimos cinco aplazamientos y pregunta quién aceptó el riesgo y qué fecha de revisión se fijó. Donde nadie decidió, el elemento se descuidó, no se aplazó. Acuerden una regla por la que cada aplazamiento lleve un responsable, un motivo y un desencadenante. Hablen de cómo se revisará la lista de aceptados y quién lo hará.

**3. ¿Cuánta capacidad deberíamos reservar para reparación y qué cambiaría la proporción?**
Muestra la tendencia del registro y la proporción actual de capacidad para deuda. Pregunta a qué estaría dispuesto a renunciar el equipo para subirla y qué evidencia permitiría bajarla. Anoten el número, el motivo y la fecha para revisarlo.

**4. ¿Son reales nuestras soluciones provisionales y podría un agente nuevo seguirlas?**
Elige una solución al azar y pide a alguien que no la escribió que la siga. Acuerden una rutina de prueba para las soluciones que cubren los errores de mayor impacto.

**5. ¿Qué cuenta como corregido y cuánto tiempo vigilamos antes de cerrar el registro?**
Compara las reglas de cierre que usan operaciones, entrega y el responsable de producto. Hablen de una ventana de recurrencia que convenga al servicio y de lo que hará el equipo cuando se reabra un elemento cerrado. Acuerden una definición y escríbanla en el registro de métricas.

**6. ¿Dónde podrían estar contándonos nuestros números de deuda una historia cómoda?**
Pide las formas en que cada número podría halagarse: deuda sin registrar, elementos fáciles corregidos primero, elementos cerrados como no se corregirá. Miren la proporción de incidentes sin vincular y la lista de riesgo aceptado. Elijan una barrera de protección que añadir este trimestre y nombren quién la comprobará.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega ven la deuda primero, normalmente mientras cambian código. Se benefician de un registro fácil de ampliar y de una parte protegida de la capacidad, para que el trabajo de reparación no dependa de ganar una discusión en cada conversación de planificación. Deben registrar los atajos cuando los toman, etiquetar el trabajo causado por puntos débiles y evitar usar la deuda como etiqueta para cualquier trabajo que prefieran no hacer (véase el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo, para los efectos de la deuda en el plazo de entrega).

### Equipos de servicio y de operaciones

Los equipos de operaciones ven los intereses: incidentes repetidos, pasos manuales, soluciones provisionales frágiles y la carga de guardia que sigue. Poseen los registros de errores conocidos y los documentos de soluciones, y tienen los datos de incidentes que ponen precio a los intereses. Deben vincular cada incidente con su error conocido, probar las soluciones y llevar a la conversación de planificación evidencia ordenada en lugar de una lista de quejas (véase el tema 5.7, Métricas de trabajo repetitivo y de guardia).

### Liderazgo y gobernanza

Los líderes deciden cuánta capacidad recibe el trabajo de reparación, y los incentivos que fijan deciden si el registro se mantiene honesto. Deben pedir la distribución de antigüedad, las cifras de intereses y la lista de riesgo aceptado, no una única puntuación de deuda. Leer el registro como una calificación de un equipo castiga el registro y empuja la deuda a la clandestinidad. Un foro de gobernanza debe tratar la aceptación del riesgo como una decisión con un responsable y una fecha de revisión.

### Clientes y usuarios

Los clientes sienten la deuda como fallos repetidos y soluciones provisionales que deben seguir. Donde una solución afecta a los usuarios, publícala con una nota clara sobre cuándo se espera una corrección, y cumple la fecha o explica el cambio. Menos incidentes repetidos y un estado honesto sobre los problemas conocidos generan más confianza que la promesa de ningún defecto (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un servicio de programación de pacientes, apoyado por un equipo de producto y un grupo de operaciones. Todos los números de este ejemplo son ilustrativos.

El grupo de operaciones mantiene 23 errores conocidos en la herramienta ITSM. El equipo de producto mantiene una lista aparte de 41 elementos de deuda en su tablero. Una revisión trimestral descubre que 9 de los errores conocidos y 7 de los elementos de deuda describen las mismas cinco causas. El error conocido más antiguo tiene 14 meses, la antigüedad mediana de los errores conocidos es de 5 meses y el percentil 85 es de 11 meses. La cobertura de soluciones provisionales es del 61 por ciento. Los incidentes vinculados a errores conocidos abiertos son el 18 por ciento de los incidentes del trimestre, y el 22 por ciento de los incidentes están sin vincular, de modo que la proporción real podría ser mayor.

El equipo fusiona las dos listas en un registro de 55 elementos distintos. Para los diez elementos con más incidentes vinculados, estima un esfuerzo de reparación en bandas y unos intereses mensuales en horas. Un elemento destaca: un trabajo nocturno de sincronización de citas falla en silencio aproximadamente cada quince días y necesita un reinicio manual por parte del personal de guardia. Su reparación se estima en dos semanas. Sus intereses, a partir de los incidentes vinculados y el trabajo etiquetado, son unas 10 horas al mes, y cada fallo retrasa las listas de las consultas de la mañana. El tiempo de recuperación es de unos cuatro meses, más rápido que cualquier función entonces en el plan.

La decisión, anotada en el registro de decisiones, es reservar el 15 por ciento de la capacidad del equipo de producto para el trabajo de reparación, ordenado por intereses por unidad de esfuerzo, y corregir primero el trabajo de sincronización. El jefe de operaciones acuerda además vincular cada incidente con un error conocido donde exista y probar las cinco soluciones provisionales más usadas.

Dos trimestres después, la antigüedad mediana de los errores conocidos es de 4 meses y el percentil 85 es de 9 meses. Los incidentes vinculados a errores conocidos abiertos bajan al 11 por ciento. La proporción sin vincular baja al 8 por ciento, lo que da al equipo más confianza en la cifra. Entonces el equipo detecta un riesgo de manipulación. La línea de cambio neto de la deuda muestra 12 elementos resueltos en un trimestre, pero 6 de ellos se cerraron como no se corregirá, y dos eran de los elementos más antiguos y de más intereses. Un revisor ajeno al equipo lee los registros y descubre que los cierres se hicieron para mejorar la cifra de antigüedad. Los elementos se reabren, el motivo de cierre pasa a ser un campo obligatorio con un aprobador con nombre, y los elementos de riesgo aceptado aparecen ahora en la misma página que la distribución de antigüedad.

## Agilidad, IA, automatización y analítica

### Agilidad

Dedica una parte protegida de la capacidad a la deuda con más intereses y revísala con regularidad con las partes interesadas. La precaución es que un objetivo de recuento de deuda lleva a dividir y reetiquetar elementos.

### IA

El código generado por IA puede añadir deuda rápidamente, y la IA también puede ayudar a encontrarla y saldarla. Haz seguimiento por separado, y etiquétalos, del cambio neto de la deuda y de los incidentes vinculados a errores conocidos abiertos en las áreas asistidas por IA. La precaución es que un modelo que sugiere una corrección puede dejar intacta la causa raíz.

### Automatización

Automatiza la detección de errores conocidos obsoletos y del deterioro de dependencias e indicadores, y mide la automatización por sus falsas alarmas. La precaución es que los escáneres automáticos crean ruido que entierra los elementos que importan.

### Analítica

Estima los intereses con los incidentes y el esfuerzo que causa cada elemento, con rangos. La decisión a la que informa es qué corregir a continuación. La precaución es que las estimaciones del costo de la deuda son aproximadas, así que evita la falsa precisión.

## Perspectiva sectorial

**Startup.** La deuda suele ser deliberada y a menudo acertada, porque la rapidez hasta un primer cliente es lo que más importa. Mantén una lista en el tablero con una etiqueta, registra los atajos al tomarlos y fija una fecha de revisión para que «más tarde» signifique algo. Sube la proporción de reparación cuando los intereses empiecen a notarse en los incidentes.

**Pequeña empresa.** Un único administrador o un equipo pequeño suele cargar con operaciones y entrega, de modo que las dos listas son naturalmente una. Anota los errores conocidos y sus soluciones provisionales en un documento compartido y señala de qué proveedor o contrato depende cada elemento. Un defecto propiedad del proveedor es un error conocido que no puedes corregir tú mismo, así que haz seguimiento de la fecha comprometida del proveedor y de tu solución provisional.

**Gran empresa.** Muchos equipos, muchos servicios y muchos proveedores crean varias listas que compiten y varias definiciones de «terminado». Acuerda una estructura de registro, una regla de cierre y un método de clasificación, y deja que los equipos añadan campos locales con una correspondencia declarada.

**Gobierno y sector público.** Los sistemas heredados, los ciclos largos de contratación y los presupuestos fijos hacen costoso saldar parte de la deuda y lentas algunas decisiones de sustitución. Anota las restricciones legales, de conservación y de auditoría que bloquean una corrección, ya que explican el aplazamiento. Muestra el registro como parte del informe de riesgos y planifica la reparación en el ciclo presupuestario en lugar de tratarla como un costo no planificado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es dejar de pagar intereses que no ves. Los incidentes repetidos, las soluciones manuales y los cambios lentos y arriesgados son los costos visibles, y normalmente se registran como problemas separados en presupuestos separados. Un registro fusionado los convierte en una sola comparación entre el costo de la reparación y el costo de cargar con la deuda.

El costo de la práctica tiene tres partes. La primera es la puesta en marcha: un registro, vínculos entre la herramienta ITSM y el gestor, y una convención de etiquetado. La segunda es el esfuerzo de funcionamiento: unos segundos por incidente para vincularlo, unos segundos por elemento de trabajo para etiquetarlo y una revisión mensual de una hora o dos por servicio. La tercera es la propia capacidad de reparación, que es la partida mayor y es una inversión deliberada, no un gasto general.

El retorno procede de patrones que puedes medir tú mismo. Compara los incidentes vinculados a un error conocido antes y después de su corrección, las horas de trabajo etiquetado en los cambios afectados antes y después, y las interrupciones de guardia evitadas. Suma el costo de la inactividad si tu organización ya lo estima. No tomes prestada una cifra del sector para el costo de la deuda: la bibliografía de investigación sobre el tema es real, pero las cifras dependen del contexto, y tus propios datos de incidentes y de tiempo son mejor evidencia. La investigación de *Accelerate* vincula el rendimiento de la entrega con el rendimiento de la organización (véase el tema 2.8, Métricas DORA), aunque no da precio a tu registro. Para un tratamiento más amplio del costo y el retorno, véase el tema 7.7, Retorno de la inversión y caso de negocio.

## Antipatrones y trampas

- **Dos listas que nunca se encuentran.** Operaciones y entrega argumentan por la misma capacidad con evidencias distintas. Fusiona las listas o vincula cada causa compartida.
- **Una única puntuación de deuda para la organización.** Oculta dónde está el costo e invita a clasificar equipos. Reporta el registro por servicio, con antigüedad, intereses y propiedad.
- **La gran reescritura como única reparación.** Las grandes limpiezas se atascan y el registro se rellena mientras se ejecutan. Salda los elementos en pasos pequeños, ordenados por tiempo de recuperación.
- **Deuda cero como meta.** Perseguirla premia los cierres triviales y disuade el registro honesto. Apunta a un registro cuyos elementos más antiguos y de más intereses se mueven.
- **Cerrar los errores conocidos en «fusionado».** La corrección no ha llegado a los usuarios y el incidente vuelve. Cierra en la publicación y vigila después la recurrencia durante una ventana declarada.
- **Esconder el aplazamiento en «no se corregirá».** La cifra de antigüedad mejora y el riesgo permanece. Cuenta el riesgo aceptado por separado, con un responsable y una fecha de revisión.
- **Tratar el análisis estático como la verdad.** Las puntuaciones reflejan la forma del código, no el costo. Úsalas para encontrar candidatos y confirma después con los vínculos de incidentes y el historial de cambios.
- **Atribuir la deuda a los autores.** Enseña a la gente a esconder atajos y a evitar los componentes difíciles. Mantén cada medida a nivel de servicio y de equipo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Registro y definiciones | Los errores conocidos y la deuda viven en la cabeza de la gente o en notas dispersas | Operaciones y entrega mantienen cada una una lista, con reglas distintas | Un registro con una definición escrita, un responsable y una regla de cierre para cada elemento | Antigüedad, riesgo aceptado y cambio neto revisados frente a las definiciones escritas | Definiciones revisadas con proveedores y clientes cuando dejan de informar decisiones |
| Medición de los intereses | Sin vínculo entre incidentes y causas | Algunos incidentes vinculados a errores conocidos a mano | Vínculos de incidentes obligatorios donde se conoce la causa; trabajo etiquetado a nivel de equipo | Intereses y tiempo de recuperación estimados para los elementos principales y con tendencias | Intereses vinculados a los resultados del servicio y compartidos entre equipos y proveedores |
| Capacidad y priorización | La reparación ocurre en una crisis | Tiempo informal reservado por algunos equipos | Una proporción acordada de capacidad y un método común de clasificación | Proporción ajustada según la tendencia del registro y financiada como trabajo planificado | Capacidad de reparación coordinada entre plataformas compartidas y proveedores |
| Soluciones provisionales y cierre | Soluciones sin documentar o en manos de una sola persona | Documentadas para algunos errores, sin probar | Soluciones en la base de conocimiento, con una regla de cierre en la publicación | Uso, fallo y recurrencia tras el cierre de las soluciones medidos | Soluciones retiradas automáticamente al publicarse las correcciones, con retroalimentación de los usuarios |

## Lista de verificación

- [ ] Los errores conocidos y los elementos de deuda están en un solo registro, o vinculados elemento por elemento.
- [ ] Cada elemento tiene un responsable, una banda de tamaño, un servicio y una fecha de revisión.
- [ ] Los atajos deliberados se registran al tomarse, con un motivo.
- [ ] Los incidentes se vinculan con los errores conocidos donde se conoce la causa, y se reporta la proporción sin vincular.
- [ ] El trabajo causado por puntos débiles se etiqueta a nivel de equipo y el etiquetado se audita por muestreo.
- [ ] Cada uno de los elementos principales tiene una banda de esfuerzo de reparación y una estimación de intereses mensuales.
- [ ] Una parte de la capacidad para el trabajo de reparación está acordada, reportada y revisada cada trimestre.
- [ ] Los errores conocidos se cierran en la publicación de la corrección, con una ventana de recurrencia declarada.
- [ ] Los cierres por riesgo aceptado se listan aparte, con un aprobador y una fecha de revisión.
- [ ] Las soluciones provisionales para los errores de mayor impacto se prueban según un calendario.
- [ ] Se muestran la distribución de antigüedad y el reparto por servicio, junto con los totales.
- [ ] Ninguna medida de deuda se usa para comparar o clasificar a individuos.

## Prompts de IA

**Fusiona dos listas en un solo registro.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Estima bandas de esfuerzo e intereses mensuales para los elementos principales.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Revisa los riesgos de cierre y de manipulación.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Prepara una conversación de priorización con el responsable de producto.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica relacionada, como la recurrencia o el fallo de cambio, y la barrera de protección que debe ir junto a ella.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica editada nombra sus relojes, su vector de manipulación y su barrera de protección.

## Ideas clave

- Los errores conocidos y la deuda técnica son dos vistas de un único registro de reparaciones aplazadas, así que mantenlos juntos o vinculados.
- Mide los intereses que cada elemento cuesta cada mes, en incidentes, soluciones provisionales y cambio frenado, y ordena la reparación por tiempo de recuperación.
- Haz de cada aplazamiento una decisión con un responsable, un motivo y una fecha de revisión, y reporta aparte el riesgo aceptado.
- Reserva una parte acordada de la capacidad para el trabajo de reparación y repórtala junto al trabajo planificado.
- Cierra un error conocido en la publicación de la corrección y vigila después la recurrencia antes de fiarte del resultado.
- Mantén cada medida a nivel de servicio y de equipo, y usa barreras de protección para que un número mejor signifique un sistema mejor.

## Referencias y lecturas complementarias

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
