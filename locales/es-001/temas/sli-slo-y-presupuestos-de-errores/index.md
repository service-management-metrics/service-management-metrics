# SLI, SLO y presupuestos de errores

**Un objetivo de nivel de servicio convierte «suficientemente fiable» en un número que usuarios, equipos de producto y equipos de operaciones pueden ver, y el presupuesto de errores que deja atrás convierte ese número en una decisión compartida y gastable sobre el riesgo en lugar de una discusión sobre culpas.**

## Visión general y motivación

Todo servicio ya tiene un nivel de fiabilidad, lo haya medido alguien o no. Si nadie lo declara, los usuarios suponen un nivel, el equipo de producto supone otro y el equipo de operaciones defiende un tercero. La diferencia se descubre durante una caída. Este tema cubre las tres ideas enlazadas que usa la [ingeniería de fiabilidad de sitios (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) para cerrar esa brecha: el indicador de nivel de servicio, el objetivo de nivel de servicio y el presupuesto de errores.

Un [indicador de nivel de servicio (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) es una medición de un aspecto del servicio tal como lo experimentan los usuarios. Los aspectos típicos son si una solicitud tuvo éxito, cuánto tardó, si los datos devueltos eran recientes y si eran correctos. Un buen SLI se expresa como una razón: el número de eventos buenos dividido por el número de eventos válidos, sobre una ventana definida. Un [objetivo de nivel de servicio (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) es el objetivo para esa razón durante un periodo, por ejemplo «el 99,9 por ciento de las solicitudes de pago válidas tienen éxito en una ventana móvil de 28 días». El **presupuesto de errores** es lo que el objetivo permite que salga mal: 100 por ciento menos el SLO. Con un 99,9 por ciento, el presupuesto es el 0,1 por ciento de los eventos válidos.

El presupuesto de errores cambia la conversación. Si el servicio ha gastado poco de su presupuesto, el equipo tiene margen para publicar más rápido, probar cambios arriesgados y hacer experimentos. Si el presupuesto está casi agotado, el mismo equipo frena el trabajo de funciones y dedica esfuerzo a la fiabilidad hasta que el presupuesto se recupere. La decisión procede de un número acordado de antemano, de modo que no depende de quién es más veterano o más persuasivo en la reunión.

La **tasa de consumo** (burn rate) es la rapidez con que se gasta el presupuesto, relativa a la tasa que gastaría exactamente todo al final de la ventana. Una tasa de consumo de 1 significa que el presupuesto se acabará justo al final de la ventana. Una tasa de consumo de 10 significa que se acabará en una décima parte de la ventana. La tasa de consumo es el puente del SLO a las alertas, porque dice cuán urgente es un problema en términos de lo que cuesta al objetivo.

Las visiones ágil e ITIL se encuentran aquí, y usan vocabulario distinto para ideas emparentadas. En ITIL 4, la gestión de niveles de servicio es la práctica que fija, mide e informa sobre los niveles de servicio, y el [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es el acuerdo documentado entre un proveedor y un cliente (véase el tema 5.1, Métricas de SLA, OLA y XLA). Un SLO es un objetivo interno normalmente más estricto que el SLA y propiedad del equipo que opera el servicio. Un SLA lleva consecuencias, como créditos o penalizaciones. Un SLO lleva una regla de decisión. Los equipos ágiles que poseen sus servicios («lo construyes, lo operas») usan los SLO para hacer visible el costo de la fiabilidad en la misma lista de pendientes que las funciones. Los equipos que siguen la práctica de ITIL pueden tratar los SLI como la forma medible de lo que los clientes dicen necesitar, y el SLO como el objetivo de trabajo que mantiene a salvo el SLA.

La [disponibilidad](https://en.wikipedia.org/wiki/Availability) es el SLI más conocido y se cubre en detalle en otro lugar (véase el tema 5.3, Métricas de disponibilidad). La latencia, la corrección, la actualidad de los datos y el caudal son también candidatos. La destreza está en elegir los indicadores a partir de lo que importa a los usuarios, en lugar de lo que es fácil de recoger. El uso de CPU de un servidor es fácil de recoger y dice poco sobre si un cliente pudo pagar. La proporción de solicitudes de pago que se completan en menos de dos segundos dice mucho. Para la latencia, reporta [percentiles](https://en.wikipedia.org/wiki/Percentile), no promedios, porque un promedio esconde la cola lenta que notan los usuarios (véase el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 5.4, Métricas de capacidad y rendimiento).

## Principios clave

- **Parte del usuario, no del servidor.** Elige indicadores que describan una experiencia que una persona reconocería, como «mi pago se completó», y trabaja hacia atrás hasta lo que hay que medir.
- **Un objetivo por debajo del 100 por ciento es una decisión, no una admisión.** La fiabilidad perfecta es inalcanzable e inasequible, y los usuarios normalmente no distinguen la diferencia más allá de cierto punto. El presupuesto hace explícita esa compensación.
- **Fija el objetivo con las personas que dependen de él.** El SLO es un acuerdo negociado entre producto, operaciones y clientes, no un número elegido por un equipo en solitario.
- **Acuerda las consecuencias antes de que se agote el presupuesto.** Una política de presupuesto de errores escrita en una semana tranquila se sigue en una semana de estrés. Una política inventada durante una caída se discute.
- **Alerta sobre el consumo, no sobre cada parpadeo.** Avisa a una persona solo cuando el presupuesto se consume con la rapidez suficiente para amenazar el objetivo, y encamina el consumo más lento a tickets.
- **Los SLO describen servicios, nunca personas.** El presupuesto pertenece a un servicio y a su equipo. No es nunca una puntuación para un ingeniero.

## Definiciones de métricas

Las métricas siguientes describen el sistema de SLO de un servicio. Las cuatro primeras son el núcleo de la práctica y las dos últimas describen lo sana que está la propia práctica. Cada reloj y cada límite se indican en la columna de la fórmula. Los «eventos válidos» son los eventos que cuentan para el SLI después de las exclusiones acordadas en el documento del SLO, como las solicitudes de las pruebas de carga del propio equipo, que se excluyen.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cumplimiento del SLI | La proporción de eventos válidos que fueron buenos, para un indicador de un servicio | eventos buenos / eventos válidos, para la ventana desde el inicio hasta el final del periodo de informe; los eventos excluidos por el documento del SLO (pruebas de carga, mantenimiento planificado anunciado con antelación, si el SLO así lo dice) se retiran tanto del numerador como del denominador | porcentaje | Telemetría del balanceador de carga, de la aplicación o de sondas sintéticas; la plataforma de monitorización u observabilidad | Gestión de niveles de servicio; monitorización y gestión de eventos | Definición de terminado para la operabilidad; revisión del estado del servicio con las partes interesadas | Continuo, reportado a diario y por ventana |
| Cumplimiento del SLO | Si el SLI cumplió el objetivo durante la ventana del SLO, y durante cuántas ventanas recientes | ventanas en que el cumplimiento del SLI fue igual o superior al objetivo / ventanas evaluadas, durante los últimos 12 meses; se excluye una ventana que aún está abierta | porcentaje de ventanas | Historial de cumplimiento del SLI | Gestión de niveles de servicio; mejora continua | Objetivo de equipo o acuerdo de trabajo sobre fiabilidad | Mensual, con tendencia trimestral |
| Presupuesto de errores restante | La parte del presupuesto aún no gastada en la ventana actual | 1 - (eventos malos hasta ahora / eventos malos permitidos para toda la ventana), donde eventos malos permitidos = (1 - SLO) x eventos válidos esperados para toda la ventana; el reloj empieza al inicio de la ventana y se detiene al final | porcentaje del presupuesto | Cumplimiento del SLI y previsión de volumen | Gestión de niveles de servicio; gestión de riesgos | Comprobación de preparación de la versión; insumo del trabajo planificado | Diario, revisado semanalmente |
| Tasa de consumo | La velocidad a la que se gasta el presupuesto respecto de la tasa de gasto uniforme | (eventos malos / eventos válidos durante un periodo retrospectivo) / (1 - SLO); el periodo retrospectivo se declara, por ejemplo 1 hora o 6 horas | razón (1 significa exactamente dentro del presupuesto) | Telemetría del SLI con resolución temporal fina | Monitorización y gestión de eventos; gestión de incidentes | Reglas de alerta de guardia; desencadenante de enjambre | Continuo, evaluado en las reglas de alerta |
| Adhesión a la política del presupuesto | Con qué frecuencia se aplicó la consecuencia acordada cuando se alcanzó un desencadenante de la política del presupuesto de errores | desencadenantes del periodo en que la acción de la política se tomó dentro del plazo acordado / desencadenantes alcanzados en el periodo; los desencadenantes eximidos formalmente con un motivo registrado se cuentan aparte, no se eliminan | porcentaje | Documento de la política, registro de decisiones e historial de la lista de pendientes | Gestión de niveles de servicio; habilitación de cambios | Acuerdo de trabajo; seguimiento de la retrospectiva | Trimestral |
| Cobertura de SLO | La proporción de recorridos críticos de usuario, o de servicios del ámbito, que tienen un SLO vigente y un SLI que funciona | servicios o recorridos del ámbito con al menos un SLO cuyos datos de SLI llegaron en los últimos 7 días / servicios o recorridos del ámbito; el «ámbito» figura en el catálogo de servicios | porcentaje | Catálogo de servicios, registro de SLO y configuración de monitorización | Gestión del catálogo de servicios; gestión de niveles de servicio | Lista de propiedad de servicios del equipo | Trimestral |

El periodo retrospectivo de la tasa de consumo y la ventana del SLO son elecciones. Una ventana móvil de 28 días cubre semanas completas. Declara la elección en el documento del SLO y mantenla estable, o la tendencia engañará.

## Recomendaciones

### Elige indicadores a partir de lo que importa a los usuarios

**1. Empieza por los recorridos críticos de usuario.** Enumera las tres a seis cosas que un usuario debe poder hacer para que el servicio valga la pena, como iniciar sesión, buscar, pagar y descargar un extracto. Escribe cada una como una frase desde el lado del usuario. Elige después el SLI que muestra si esa frase fue cierta. Así los SLO se mantienen pocos y se evita un catálogo de indicadores técnicos que nadie lee.

**2. Expresa cada SLI como eventos buenos sobre eventos válidos.** Una razón es fácil de explicar, fácil de agregar y fácil de convertir en un presupuesto. Define «bueno» con un umbral que los usuarios aceptarían, y define «válido» de modo que el tráfico que no puedes razonablemente atender, como las solicitudes bloqueadas por abuso, se excluya de forma documentada. Escribe ambas definiciones en el documento del SLO, porque el denominador es donde se esconden la mayoría de los desacuerdos.

**3. Mide lo más cerca del usuario que sea práctico.** Una tasa de éxito del lado del servidor puede ser perfecta mientras un problema de red o de cliente vuelve inutilizable el servicio. Mide en el balanceador de carga o en el borde, y añade una sonda sintética o una medición del lado del cliente para los recorridos que más importan. Cada punto de medición tiene un costo y un punto ciego, así que anota cuál usa cada SLI (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Usa percentiles para la latencia, con un umbral.** «El 95 por ciento de las solicitudes de búsqueda se completan en menos de 800 milisegundos» es un SLI. «Latencia media» no lo es, porque unas pocas solicitudes rápidas pueden compensar muchas lentas. Donde ayude, usa dos umbrales, como una mediana y un percentil 99, ya que la cola lenta da forma a cómo se siente el servicio (véase el tema 5.4, Métricas de capacidad y rendimiento).

### Fija objetivos que la gente pueda defender

**5. Fija el primer SLO a partir del rendimiento actual y de la necesidad del usuario, y endurécelo después.** Mide el SLI durante unas semanas, pregunta a los usuarios y al personal de soporte qué nivel notan y fija un objetivo que el servicio pueda cumplir hoy con algo de margen. Un objetivo fijado muy por encima del rendimiento actual es un incumplimiento permanente, y la gente deja de mirarlo. Un objetivo fijado muy por debajo de lo que reciben los usuarios deja que la calidad decaiga sin que se vea. Revísalo pasado un trimestre.

**6. Mantén el SLO más estricto que el SLA y manténlos separados.** Si un acuerdo con un cliente promete el 99,5 por ciento, el objetivo del equipo podría ser el 99,9 por ciento, de modo que el presupuesto se agote antes de cruzar la línea contractual. No hagas que el SLO y el SLA sean el mismo número y no reportes uno como si fuera el otro. El acuerdo es un documento comercial y legal, y el objetivo es una regla de decisión de ingeniería (véase el tema 5.1, Métricas de SLA, OLA y XLA).

**7. Ten en cuenta las dependencias.** Un servicio no puede ser más fiable que aquello de lo que depende, a menos que se degrade con elegancia. Enumera las dependencias clave, incluidos los proveedores, y pregunta qué implica su rendimiento real para tu objetivo.

### Maneja el presupuesto como una herramienta de decisión

**8. Escribe una política de presupuesto de errores antes de necesitarla.** La política dice qué ocurre en niveles definidos de consumo. Una versión sencilla tiene tres pasos: funcionamiento normal mientras quede presupuesto, revisión adicional de los cambios arriesgados y prioridad para el trabajo de fiabilidad cuando se ha gastado una proporción declarada, y una pausa en las versiones de funciones no esenciales cuando se agota, hasta que el presupuesto se recupere. Nombra quién puede conceder una excepción y cómo se registra. Los líderes de producto y de operaciones deben firmarla ambos, para que la política se aplique por igual a los dos lados.

**9. Gasta el presupuesto a propósito.** Un presupuesto que nunca se toca sugiere que el objetivo es demasiado estricto o que el equipo es demasiado cauteloso. Usa el presupuesto sobrante para experimentos, un ritmo de publicación más rápido, despliegues canarios e [interruptores de función](https://en.wikipedia.org/wiki/Feature_toggle) que permiten probar en producción con exposición limitada, y usa [publicaciones canarias](https://en.wikipedia.org/wiki/Canary_release) para detectar problemas mientras solo está afectada una pequeña proporción de usuarios. Trata un presupuesto sistemáticamente intacto como una invitación a preguntarse si el objetivo se corresponde con lo que los usuarios necesitan (véase el tema 4.5, Métricas de versiones y despliegues).

**10. Alerta sobre varias tasas de consumo.** Un consumo rápido, como una tasa lo bastante alta para gastar una gran parte del presupuesto en una hora, avisa a una persona. Un consumo lento, como una tasa modesta que aun así agotaría el presupuesto en días, crea un ticket para el horario laboral. Usar dos o más ventanas retrospectivas capta tanto los fallos repentinos como las fugas lentas, y reduce los avisos por parpadeos breves que cuestan poco presupuesto. El capítulo del Site Reliability Workbook sobre alertas basadas en SLO explica el patrón, y los umbrales deben ajustarse a tu servicio en lugar de copiarse (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**11. Conecta los incidentes, los problemas y el aprendizaje con el presupuesto.** Tras un incidente, registra cuánto presupuesto consumió junto a su duración y su impacto. Usa ese número para priorizar el registro de problema y las acciones de seguimiento (véase el tema 4.1, Métricas de gestión de problemas, y el tema 4.2, Métricas de análisis posteriores y aprendizaje). El costo en presupuesto da además a las revisiones de incidentes graves una unidad común para comparar fallos muy distintos (véase el tema 3.4, Métricas de incidentes graves).

### Mantén honesta y viva la práctica

**12. Revisa los SLO frente a la realidad cada trimestre.** Compara el SLO con los contactos de soporte, las quejas y los resultados de satisfacción. Si los usuarios están descontentos mientras el SLO está en verde, el SLI está mal o el objetivo es demasiado laxo. Si el SLO está en rojo y nadie se queja, el objetivo puede ser demasiado estricto. Registra cada cambio y el motivo, y muestra el cambio en el gráfico de tendencia (véase el tema 6.2, Acuerdos de nivel de experiencia).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cumplimiento del SLI | Estrechar los eventos «válidos» hasta que los fallos desaparecen, por ejemplo excluyendo solicitudes reintentadas o clases enteras de errores; medir solo el componente más sano; sondear solo desde una ubicación favorable | Publicar la definición del SLI y las exclusiones en el documento del SLO con un registro de cambios; comparar el SLI con los contactos de soporte y las quejas de los usuarios; una revisión periódica de los eventos excluidos y su volumen |
| Cumplimiento del SLO | Fijar el objetivo lo bastante bajo como para cumplir siempre; cambiar la longitud de la ventana tras un mal periodo; redefinir un incumplimiento como periodo de mantenimiento | Objetivo fijado con aportaciones de los usuarios y revisado según un calendario; ventana fijada en el documento; recuento de exclusiones y de cambios no planificados de la ventana reportado junto al cumplimiento |
| Presupuesto de errores restante | Reclasificar eventos malos como excluidos; inflar el volumen esperado para que el recuento permitido de malos parezca mayor; reiniciar la ventana pronto | Eventos malos permitidos calculados con el volumen real al final de la ventana; volumen de eventos excluidos mostrado junto al presupuesto; fechas de la ventana fijadas de antemano |
| Tasa de consumo | Ajustar los umbrales de alerta para que el consumo nunca se dispare; usar un periodo retrospectivo tan largo que los consumos rápidos se diluyan | Prueba de cobertura de alertas con incidentes pasados («¿habría avisado esta regla?»); tasa de alertas accionables y recuento de detecciones omitidas (véase el tema 5.5, Métricas de monitorización y calidad de las alertas) |
| Adhesión a la política del presupuesto | Conceder excepciones de forma rutinaria; escribir una política con desencadenantes inalcanzables; contar un ticket de fiabilidad simbólico como acción de la política | Excepciones contadas y revisadas por separado; proporción de excepciones en el periodo; trabajo de fiabilidad completado (véase el tema 4.1, Métricas de gestión de problemas) |
| Cobertura de SLO | Añadir un SLO trivial a cada servicio para elevar el porcentaje; contar un recorrido como cubierto cuando no fluyen datos | Comprobación de la actualidad de los datos del SLI (datos llegados en los últimos 7 días); revisión de si el SLO cubre un recorrido crítico y no un punto final secundario |

Una lectura sana muestra un SLI que sigue lo que reportan los usuarios, un objetivo que a veces se incumple y a veces se cumple con holgura, y un presupuesto que se gasta a propósito. La política se aplica cuando se alcanza su desencadenante, las excepciones son raras y quedan registradas, y cada cambio de definición es visible en el gráfico. Un servicio que está siempre al 100 por ciento de presupuesto restante, o uno que está siempre incumplido, merece una conversación sobre el objetivo, no elogios ni reproches. Recuerda que cualquier cifra aislada es una invitación a hacer una pregunta (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| SLI de recorridos de usuario | Coinciden con lo que sienten los usuarios; pocos en número; fáciles de explicar a quien no es ingeniero | Requieren esfuerzo para instrumentar de extremo a extremo; pueden pasar por alto fallos internos que aún no han llegado a los usuarios |
| SLI de componentes o recursos (CPU, memoria, profundidad de cola) | Baratos de recoger; útiles para el diagnóstico y la capacidad | Malos sucedáneos de la experiencia del usuario; producen muchas alertas que no importan |
| Ventana móvil | Suave; sin salto a final de mes; siempre actual | Más difícil de explicar a los directivos que un mes natural; un mal día persiste durante toda la ventana |
| Alertas por tasa de consumo | Avisa cuando el objetivo corre un riesgo genuino; menos falsas alarmas | Más complejas de configurar y probar; los umbrales necesitan ajuste por servicio |

Elige pocos SLI, fíjalos con los usuarios y deja que el presupuesto decida el ritmo del cambio. La estrictez correcta es el objetivo más laxo que aún mantenga satisfechos a los usuarios, ya que cada nueve adicional cuesta más que el anterior.

## Preguntas para debatir con tu equipo

**1. ¿Qué necesita poder hacer un usuario de este servicio y cómo sabríamos si no pudiera?**
Pide a cada persona que anote las tres cosas más importantes que hace un usuario con el servicio, sin mirar ningún panel. Comparen las listas y anoten las diferencias entre producto, operaciones y soporte. Pregunta después cuál de esos recorridos tiene hoy un SLI. El facilitador debe buscar recorridos importantes sin medición y mediciones que no describen ningún recorrido.

**2. Si nuestro SLO fuera del 99,9 por ciento y lo cumpliéramos, ¿estarían contentos los usuarios y cómo lo sabemos?**
Pon el SLO actual junto al último trimestre de contactos de soporte, quejas y resultados de satisfacción. Pregunta si concuerdan. Si el SLO está en verde y los usuarios están descontentos, el SLI o el objetivo necesitan trabajo. Si los usuarios están contentos y el SLO está en rojo, el objetivo puede ser más estricto de lo que nadie necesita. Acuerden una acción para acercar el objetivo y la experiencia.

**3. ¿Qué haríamos realmente de otra manera si se agotara el presupuesto de errores?**
Lean en voz alta la política actual de presupuesto de errores, o redacten una juntos si no existe. Pregunta quién dejaría de hacer qué y quién tiene autoridad para conceder una excepción. El facilitador debe insistir en acciones concretas, como pausar las versiones no esenciales y trasladar a personas con nombre al trabajo de fiabilidad, en lugar de intenciones generales. Una política en la que nadie cree que se vaya a seguir es peor que ninguna política.

**4. ¿Cuándo fue la última vez que asumimos un riesgo porque nos sobraba presupuesto?**
Hablen de si el equipo usa su presupuesto o solo lo custodia. Miren el último trimestre: ¿hubo un periodo en que el presupuesto estuvo casi intacto mientras las publicaciones eran lentas? Pregunta qué habría probado el equipo de haber sabido que era seguro hacerlo. Esta pregunta saca a la luz el exceso de cautela, y la respuesta apunta a menudo a una publicación canaria, un interruptor o un pipeline más rápido que permitiría al equipo usar bien su presupuesto.

**5. ¿Cuáles de nuestras alertas habrían saltado a tiempo en nuestro último incidente grave y cuáles habrían saltado para nada?**
Toma el último incidente significativo y reproduce el historial de alertas frente a él. Cuenta los avisos que llegaron, cuánto después de empezar el impacto y cuántos avisos llegaron por eventos que costaron casi nada de presupuesto. Hablen de si las alertas por tasa de consumo lo habrían hecho mejor. El objetivo es una lista corta de cambios en las alertas, cada uno con un responsable, y no una discusión de culpas sobre quién estaba de guardia.

**6. ¿Quién es el responsable de cada SLO y cuándo cambiamos uno a propósito por última vez?**
Enumera los SLO y escribe el responsable junto a cada uno, como equipo o rol. Pregunta cuándo se revisó cada uno por última vez y qué cambió. Un SLO que nadie ha tocado en un año es señal de que ya no informa decisiones. Acuerden una fecha de revisión para cada uno y acuerden quién tiene derecho a retirar un SLO que dejó de ser útil.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega ganan una regla clara sobre la rapidez con que moverse. Cuando queda presupuesto, pueden publicar con más frecuencia y probar cambios más audaces. Cuando es bajo, ponen trabajo de fiabilidad en la lista de pendientes sin una negociación larga. Deben ayudar a elegir los indicadores porque saben qué recorridos importan, y deben instrumentar las funciones nuevas pensando en el SLI desde el principio (véase el tema 2.8, Métricas DORA). El presupuesto es un recurso del equipo con el que planificar, nunca un número que esconder.

### Equipos de servicio y de operaciones

Los equipos de operaciones usan los SLO para decidir qué merece un aviso y qué puede esperar hasta la mañana. Las alertas por tasa de consumo reducen el ruido y atan el trabajo de guardia a lo que sienten los usuarios (véase el tema 5.7, Métricas de trabajo repetitivo y guardias). Mantienen honestas las definiciones de los SLI, mantienen la telemetría que hay detrás y registran el costo en presupuesto en los registros de incidentes y de problemas.

### Liderazgo y gobernanza

Los líderes deben hacer tres preguntas: ¿cuál es el objetivo?, ¿cuánto presupuesto queda? y ¿qué haremos si se agota? Firman la política de presupuesto de errores y respaldan al equipo cuando la política dice que hay que frenar. Evitan convertir el cumplimiento de los SLO en una métrica de bonificación, lo que invita a estrechar definiciones y a fijar objetivos blandos.

### Clientes y usuarios

Los clientes se benefician cuando el objetivo refleja lo que necesitan y cuando pueden ver cómo rinde el servicio frente a él. Deben ser consultados cuando se fija el objetivo, porque su tolerancia a la lentitud o a la inactividad varía según la tarea y la hora del día. Las medidas de experiencia, como la satisfacción y el esfuerzo, comprueban si el SLO capta lo que sienten (véase el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio tiene un equipo de pagos, un equipo de plataforma y un centro de servicios. El servicio de pago es crítico para el negocio. Todos los números de este ejemplo son ilustrativos.

El equipo define un SLI para el recorrido «pagar un pedido»: la proporción de solicitudes de pago válidas que devuelven un éxito en 2 segundos, medida en el balanceador de carga. Las solicitudes válidas excluyen las pruebas de carga del propio equipo y las solicitudes que el servicio antifraude rechaza por diseño. El SLO es del 99,9 por ciento sobre 28 días móviles. La ventana lleva un volumen esperado de 12 000 000 de solicitudes válidas, así que el presupuesto es de 12 000 solicitudes malas (0,1 por ciento). La política de presupuesto de errores, firmada por el jefe de producto y el jefe de plataforma, tiene tres niveles: al 50 por ciento del presupuesto gastado, los cambios arriesgados necesitan un segundo revisor y un despliegue canario; al 75 por ciento, el trabajo de fiabilidad tiene prioridad en la siguiente conversación de planificación; al 100 por ciento, las versiones de funciones no esenciales se pausan hasta que el presupuesto se recupere.

El día 10 de la ventana el equipo ve 7 800 solicitudes malas de unas 4 285 714 esperadas hasta el momento, lo que da un cumplimiento del SLI de alrededor del 99,82 por ciento, el 65 por ciento del presupuesto gastado y una ventana transcurrida solo en un 36 por ciento. La tasa de consumo del periodo es de alrededor de 1,8, así que a este ritmo el presupuesto se agota hacia el día 15. Un despliegue defectuoso explicó 5 000 de los fallos. El registro del incidente muestra que el fallo duró 22 minutos, la revisión del incidente grave identifica una comprobación ausente en el pipeline y el costo en presupuesto del incidente se anota en el registro de problema (véase el tema 4.1, Métricas de gestión de problemas).

El equipo sigue la política. La acción del segundo nivel se aplica de inmediato, así que los cambios arriesgados necesitan un despliegue canario, y la reunión de planificación sube al principio de la cola de trabajo la comprobación del pipeline. El responsable de producto acepta una pausa en una función promocional no urgente. Hacia el día 28 el presupuesto está gastado en un 94 por ciento y el equipo termina la ventana dentro del objetivo.

El riesgo de manipulación aparece en la revisión. Otro equipo, que opera el servicio de búsqueda del minorista, reportó el 99,95 por ciento del trimestre mientras el centro de servicios registraba un aumento de contactos de «la búsqueda no funciona». Al investigar, el equipo de plataforma descubrió que el equipo de búsqueda había redefinido «válido» para excluir las solicitudes reintentadas en menos de 5 segundos, lo que eliminaba muchos fallos reales. La revisión restableció la definición original, reexpresó el trimestre y añadió dos barreras de protección: cualquier cambio de definición se anota en el documento del SLO con un motivo, y el cumplimiento del SLI se compara con los contactos de soporte cada mes. Nadie mintió, ya que el cambio se había hecho para reducir el ruido, de modo que la solución fue una definición más clara, no una reprimenda.

## Agilidad, IA, automatización y analítica

### Agilidad

Un presupuesto de errores convierte la fiabilidad en una decisión compartida con las partes interesadas de producto, y encaja con la entrega continua al mostrar cuánto riesgo puede gastar el equipo. Revisa los objetivos con una cadencia regular. La precaución es que un SLO que nadie ha acordado con los usuarios es una conjetura.

### IA

Las funciones de IA necesitan sus propios indicadores, como la corrección y la latencia, y no solo la disponibilidad, y el objetivo debe decir cómo cuenta una respuesta equivocada. Empareja la disponibilidad de la IA con un indicador de calidad medido por muestreo. La precaución es que un servicio que responde rápido con una respuesta equivocada puede cumplir un SLO de disponibilidad mientras falla a los usuarios.

### Automatización

Calcula los indicadores y la tasa de consumo automáticamente a partir de la telemetría, y alerta sobre la tasa de consumo, no sobre cada parpadeo. Mide las propias alertas por las omitidas y las falsas. La precaución es que las congelaciones automáticas del presupuesto pueden paralizar trabajo útil, así que mantén una decisión humana en la política.

### Analítica

Elige indicadores que los usuarios sientan y muestra la ventana y el recuento de eventos detrás de cada uno. La decisión a la que informa es cuándo frenar el cambio o invertir en fiabilidad. La precaución es que una ventana corta da un presupuesto volátil, así que declara la ventana.

## Perspectiva sectorial

**Startup.** Empieza con un SLO para el recorrido más importante, medido en el borde, con una política sencilla que quepa en una página. No construyas una plataforma para decenas de SLO. El presupuesto ayuda a un equipo pequeño a discutir menos sobre si publicar un viernes.

**Pequeña empresa.** Una pequeña empresa suele depender de herramientas alojadas y de proveedores, así que el SLI puede proceder de los datos de estado de un proveedor o de una sonda externa sencilla. Lee por escrito los niveles de servicio del proveedor y compruébalos frente a tus propias necesidades.

**Gran empresa.** Muchos servicios, equipos y proveedores elevan lo que está en juego en cuanto a coherencia. Proporciona una plantilla compartida para los documentos de SLO, un registro común y una forma estándar de calcular el cumplimiento y el presupuesto, para que los líderes puedan comparar y consolidar sin discutir sobre las definiciones. Mantén el SLO en manos del equipo del servicio y el registro curado de forma central.

**Gobierno y sector público.** Los servicios suelen tener que cumplir objetivos legales o publicados, y un fallo puede reportarse públicamente. Mantén separado el compromiso contractual o legal del objetivo interno, y asegúrate de que el SLO interno sea más estricto. Documenta la definición del SLI, las exclusiones y el linaje de los datos para la auditoría, y planifica para la accesibilidad y para los usuarios que no pueden elegir otro proveedor (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es menos discusiones y mejores decisiones sobre fiabilidad. Sin un objetivo, el trabajo de fiabilidad compite con las funciones según quién argumente más alto. Con un objetivo y un presupuesto, la compensación es visible y está acordada de antemano, y los usuarios obtienen un servicio tan fiable como necesitan, sin que el equipo pague por una fiabilidad más allá de ese punto.

El costo tiene cuatro partes. La primera es el diseño: talleres para elegir recorridos, indicadores y objetivos, y para redactar la política. La segunda es la instrumentación: telemetría en el lugar adecuado, sondas y el pipeline que convierte eventos en cumplimiento y presupuesto (véase el tema 1.5, Fuentes de datos e instrumentación). La tercera es el funcionamiento: reglas de alerta, un panel, una revisión trimestral y el tiempo para mantener vigentes las definiciones. La cuarta es el costo de oportunidad cuando la política pausa el trabajo de funciones, que es el costo de honrar el acuerdo y la razón para acordarlo antes de que llegue la presión.

El retorno aparece en patrones que un equipo puede seguir por sí mismo: menos avisos que no exigieron acción, debates más cortos sobre si publicar, trabajo de fiabilidad programado antes de que se agote el presupuesto en lugar de después de un incidente grave y menos sorpresas para los clientes. Describe el beneficio comparando las cifras propias del equipo antes y después, como los avisos por rotación y la proporción de presupuesto consumida por el mayor incidente.

## Antipatrones y trampas

- **Demasiados SLO.** Decenas de objetivos diluyen la atención y nadie puede decir cuál importa. Empieza con los recorridos críticos de usuario y retira el resto.
- **SLO igual a SLA.** Reportar un número como ambos elimina el margen de seguridad y mezcla una regla de ingeniería con una promesa comercial. Mantén el objetivo más estricto que el acuerdo.
- **Una política que nunca se hace cumplir.** Si el presupuesto se agota y no cambia nada, la práctica pierde credibilidad. Consigue que los líderes firmen la política y registra cada excepción con su motivo.
- **Usar el presupuesto como cuadro de puntuación de las personas.** Clasificar a ingenieros o al personal de guardia por el presupuesto gastado hace que escondan incidentes y estrechen definiciones. Atribuye el presupuesto al servicio y comenta las causas a nivel de sistema (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Alertar en cada bajón.** Avisar por síntomas en bruto crea fatiga de alertas y enseña a la gente a ignorar los avisos. Avisa sobre la tasa de consumo y envía los consumos lentos a tickets.
- **Fijar y olvidar.** Un SLO que nadie revisa se aleja de lo que los usuarios necesitan. Programa una revisión trimestral y registra qué cambió y por qué.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Indicadores y objetivos | Fiabilidad descrita con palabras; se reporta el tiempo de actividad de los servidores | Algunos equipos definen SLI; los objetivos varían y rara vez se revisan | Los recorridos críticos de usuario tienen SLI y SLO documentados en una plantilla compartida | Los SLO se siguen con tendencias, se contrastan con la retroalimentación de los usuarios y se endurecen o relajan con evidencia | Los SLO se acuerdan con clientes y proveedores y se alinean con los servicios y contratos dependientes |
| Presupuesto de errores y política | Sin presupuesto; fiabilidad frente a funciones decidida por discusión | Se calcula un presupuesto para unos pocos servicios; sin consecuencias acordadas | Una política escrita, firmada por producto y operaciones, con desencadenantes definidos | Adhesión a la política medida, excepciones revisadas, el presupuesto informa la planificación de versiones | Decisiones de presupuesto coordinadas entre equipos que comparten dependencias; política revisada según cambian las condiciones |
| Alertas y respuesta | Alertas por umbral sobre recursos en bruto; muchos avisos | Algunas alertas por tasa de consumo; umbrales copiados de ejemplos | Alertas por tasa de consumo con varias ventanas para los SLO clave, con tickets para el consumo lento | Calidad de las alertas medida y ajustada con incidentes pasados | Alertas alineadas a lo largo de las cadenas de servicio y mejora impulsada por revisiones conjuntas |

## Lista de verificación

- [ ] Los recorridos críticos de usuario del servicio están enumerados, cada uno escrito desde el lado del usuario.
- [ ] Cada SLI está definido como eventos buenos sobre eventos válidos, con las exclusiones escritas.
- [ ] Los SLI de latencia usan percentiles y un umbral declarado, no promedios.
- [ ] Cada SLO indica su objetivo, su ventana y dónde se mide el SLI.
- [ ] El SLO es más estricto que cualquier SLA, y ambos se reportan por separado.
- [ ] Existe una política de presupuesto de errores, firmada por líderes de producto y de operaciones, que nombra quién puede conceder excepciones.
- [ ] Las alertas por tasa de consumo usan al menos dos periodos retrospectivos, y los consumos lentos crean tickets en lugar de avisos.
- [ ] Cada registro de incidente muestra el presupuesto que consumió.
- [ ] El cumplimiento del SLI se compara cada mes con los contactos de soporte y los resultados de satisfacción.
- [ ] Cada SLO tiene un responsable (un equipo o un rol) y una fecha de revisión, y los cambios se registran con sus motivos.
- [ ] Ningún resultado de SLO se usa para clasificar o recompensar a individuos.

## Prompts de IA

**Redacta SLI candidatos a partir de recorridos de usuario.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Redacta una política de presupuesto de errores.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Revisa un SLO en busca de riesgos de manipulación.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados, como la disponibilidad, la calidad de las alertas y los incidentes graves, y la barrera de protección que debe ir junto a cada medida de SLO.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica en la tabla de manipulación y cada referencia cruzada con su título.

## Ideas clave

- Elige pocos SLI a partir de lo que hacen los usuarios y exprésalos como eventos buenos sobre eventos válidos.
- Un SLO por debajo del 100 por ciento es una decisión sobre el riesgo, y el presupuesto de errores es el margen que esa decisión deja para el cambio.
- Escribe la política del presupuesto de errores por adelantado, fírmala a nivel de liderazgo y registra cada excepción.
- Alerta sobre la tasa de consumo con más de una ventana retrospectiva, para que los avisos reflejen un riesgo real para el objetivo.
- Protege las definiciones: registra cada cambio y compara los resultados del SLI con lo que reportan los usuarios.
- Atribuye el presupuesto a servicios y equipos, nunca a individuos, y revisa cada SLO al menos una vez por trimestre.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
