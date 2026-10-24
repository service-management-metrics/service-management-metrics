# Métricas de FinOps y costos en la nube

**El gasto en la nube lo deciden cada día los ingenieros, así que da a las personas que construyen y operan los servicios los datos de costos, el contexto y la autoridad para actuar sobre ellos, y mide el desperdicio, la asignación y el costo unitario con el mismo cuidado que dedicas a la fiabilidad.**

## Visión general y motivación

En un centro de datos, el gasto se decide mediante pedidos de compra y llega en unos pocos escalones grandes. En la nube, un desarrollador puede comprometer a la organización con un cargo recurrente con unas pocas líneas de configuración, y un entorno de prueba olvidado puede costar dinero durante meses. La [computación en la nube](https://en.wikipedia.org/wiki/Cloud_computing) ofrece acceso bajo demanda a recursos de cómputo, y el modelo de [pago por uso](https://en.wikipedia.org/wiki/Pay_as_you_go) que lo acompaña significa que la factura sigue al uso. Eso es poderoso y arriesgado. La misma flexibilidad que permite a un equipo escalar en minutos permite que el costo crezca más deprisa de lo que nadie nota.

FinOps, una contracción de finanzas y operaciones, es una práctica y una cultura para gestionar el costo de la nube. La FinOps Foundation la describe como un marco operativo en el que los equipos de ingeniería, finanzas, compras y negocio colaboran en decisiones de gasto basadas en datos. Su idea central es que las personas que usan los recursos de la nube deben ver y poseer sus costos, mientras que finanzas aporta la estructura, las previsiones y los compromisos. Esto coincide con los objetivos ágiles de colaboración continua entre las partes interesadas y de equipos que poseen sus servicios, y con la preocupación de ITIL por la gestión financiera del servicio. Este tema cubre las medidas que concretan esa práctica. Se apoya en las ideas generales de costeo del tema anterior (véase el tema 7.5, Costo del servicio y economía unitaria).

El costo de la nube tiene rasgos que necesitan sus propias medidas.

- **Elasticidad.** El [escalado automático](https://en.wikipedia.org/wiki/Autoscaling) ajusta los recursos a la demanda, lo que hace variable el costo y a veces sorprendente. La [computación sin servidor](https://en.wikipedia.org/wiki/Serverless_computing) cobra por ejecución y traslada la atención de los servidores a las solicitudes.
- **Muchas decisiones pequeñas.** Cada elección de tamaño de instancia, nivel de almacenamiento, región y arquitectura cambia el costo. El gasto se reparte entre cientos de decisiones tomadas por muchas personas, y es difícil de ver sin etiquetas y buenos informes.
- **Modelos de precios.** Los precios bajo demanda son flexibles y los más altos. Los compromisos a cambio de un [descuento por volumen](https://en.wikipedia.org/wiki/Volume_discount), como la capacidad reservada o los planes de ahorro, bajan el precio unitario a cambio de una promesa de uso. La capacidad puntual o interrumpible es barata y puede reclamarse. Cada modelo tiene un riesgo, y la mezcla correcta depende de cuán predecible sea la carga de trabajo. Los términos exactos difieren entre proveedores y cambian a menudo, así que consulta la documentación vigente del proveedor antes de apoyarte en cualquier detalle.
- **Costo compartido y sin etiquetar.** Los recursos sin una etiqueta de responsable o de propósito no pueden atribuirse. Las plataformas compartidas reparten el costo entre equipos que las consumen de forma distinta.
- **Costo ambiental.** Las cargas de trabajo en la nube consumen energía y causan emisiones, y la [huella de carbono](https://en.wikipedia.org/wiki/Carbon_footprint) de una carga es cada vez más un requisito de reporte. Los métodos para estimarla aún se están desarrollando, y los números deben llevar su método.

Las medidas de costo en la nube se obtienen fácilmente con atajos. Recortar el gasto apagando la monitorización o encogiendo recursos hasta que el servicio se cae muestra una factura menor y un servicio peor. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: cada medida de costo de aquí se sitúa junto a una medida de fiabilidad o de calidad, y ningún equipo se clasifica por su factura (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **El costo es una métrica de ingeniería.** Los equipos que construyen y operan un servicio ven y poseen su costo.
- **Asigna a los responsables.** Cada dólar debe corresponder a un equipo o a un fondo compartido declarado.
- **Empareja el costo con la calidad y la fiabilidad.** Los ahorros que rompen el servicio no son ahorros.
- **Optimiza de forma continua, en pasos pequeños.** Revisa el desperdicio con regularidad y actúa como parte del trabajo normal.
- **Prevé con rangos.** La demanda variable vuelve frágiles las previsiones de un solo número.
- **Colabora entre funciones.** Ingeniería, finanzas, compras y negocio deciden juntos.
- **No clasifiques a los equipos por su factura.** Los servicios difieren, y el crecimiento no es desperdicio.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de la asignación | Proporción del gasto en la nube atribuida a un equipo propietario o a un fondo compartido declarado | gasto con un responsable y una etiqueta de servicio válidos, o en un fondo compartido declarado / gasto total en la nube | porcentaje | Exportación de facturación de la nube, política de etiquetas | Gestión financiera del servicio; gestión de activos de TI | Propiedad del equipo sobre lo que opera | Semanal |
| Costo unitario en la nube | Costo de los recursos en la nube por unidad de algo que valoran los usuarios | costo en la nube del servicio en el periodo / unidades entregadas en el periodo | moneda por unidad | Datos de facturación unidos al volumen del servicio | Gestión financiera del servicio; gestión de niveles de servicio | Costo de servir por resultado | Mensual |
| Tasa de desperdicio | Proporción del gasto en recursos ociosos o claramente sobredimensionados | gasto en recursos ociosos o sobredimensionados, según las reglas acordadas / gasto total en los recursos del ámbito | porcentaje | Métricas de utilización y facturación | Gestión de la capacidad y el rendimiento; gestión financiera | Reducción del desperdicio en la cadena de herramientas | Semanal |
| Cobertura de compromisos | Proporción del uso estable elegible cubierta por compromisos con descuento | uso elegible cubierto por compromisos / uso elegible | porcentaje | Informes de facturación y de compromisos | Gestión financiera del servicio; gestión de proveedores | Planificar para la demanda predecible | Mensual |
| Utilización de compromisos | Proporción de los compromisos adquiridos que se utilizaron | horas de compromiso usadas / horas de compromiso adquiridas | porcentaje | Informes de compromisos | Gestión financiera del servicio; gestión de proveedores | Valor de la inversión planificada | Mensual |
| Varianza de previsión | Diferencia entre el gasto previsto y el real en la nube, por equipo y en total | (real menos previsto) / previsto | porcentaje | Registro de previsiones y datos de facturación | Gestión financiera del servicio | Exactitud de las previsiones | Mensual |
| Tiempo de acuse de recibo de anomalías | Tiempo desde una alerta de anomalía de costos hasta una decisión registrada del responsable | mediana y percentil 85 de las horas desde la alerta hasta la respuesta del responsable | horas | Alertas de anomalías y registros de tickets | Monitorización y gestión de eventos; gestión de incidentes | Capacidad de respuesta ante una señal de producción | Mensual |

Define el alcance de los recursos, las reglas de etiquetas y qué cuenta como ocioso o sobredimensionado, y anótalos. La cobertura de compromisos se calcula solo frente al uso base estable, no frente a los picos. El costo unitario usa una unidad acordada con el responsable del servicio y fija durante la tendencia. Los datos de costos deben decir si incluyen créditos, descuentos, impuestos y cargos de soporte, y qué moneda y tipo de cambio se aplican.

## Recomendaciones

### Haz visible y con propietario el costo

**1. Exige un conjunto pequeño y obligatorio de etiquetas.** Exige que cada recurso lleve una etiqueta de responsable, de servicio y de entorno, impuesta por una política en la creación, no por una limpieza posterior. La cobertura de la asignación mide lo bien que funciona esto. Los recursos que no se etiquetan pueden bloquearse, o señalarse en un día al responsable de la cuenta. Mantén pequeño el conjunto de etiquetas para que la gente cumpla.

**2. Da a los equipos su propia vista de costos.** Proporciona a cada equipo una vista diaria o semanal de su gasto por servicio y entorno, con tendencias y anomalías. La gente responde a los datos que puede ver y entender. Un informe que llega cada mes y solo va a finanzas cambia poco.

**3. Define fondos de costos compartidos y sus generadores.** Las plataformas compartidas, las redes y los cargos de soporte necesitan una regla para repartirlos (véase el tema 7.5, Costo del servicio y economía unitaria). Publica la regla, revísala con los equipos y mantén pequeño el fondo. Una regla que la gente puede seguir gana más confianza que una justa que nadie entiende.

**4. Celebra una breve conversación regular sobre costos.** Reúne a ingeniería, finanzas y los responsables de producto con una cadencia estable, semanal o quincenal para los grandes gastadores y mensual para los demás, durante treinta minutos. Revisa la tendencia, las anomalías y la lista de pendientes de optimización. Es colaboración continua en la práctica, y mantiene el costo en la agenda sin un proceso pesado.

### Mide el valor, no solo el gasto

**5. Expresa el costo por unidad.** El gasto total en la nube sube con el éxito. Lo que importa es el costo por cliente activo, por transacción o por compilación. Elige una unidad significativa para el servicio, haz seguimiento a lo largo del tiempo y anota los cambios. Un costo unitario a la baja con un gasto total al alza es un patrón sano, y un costo unitario al alza con un uso plano es una invitación a investigar.

**6. Muestra la fiabilidad y la calidad junto al costo.** Presenta el costo con la disponibilidad, la latencia y la tasa de errores del mismo servicio (véase el tema 5.2, SLI, SLO y presupuestos de errores). Los ahorros que elevan las tasas de errores son una transferencia de costo a los usuarios. Un enfoque de presupuesto de errores puede hacer explícita la compensación: gasta menos cuando el servicio es mucho mejor de lo necesario e invierte cuando no lo es.

**7. Haz seguimiento del desperdicio con reglas explícitas.** Define ocioso (por ejemplo, sin uso significativo durante un periodo) y sobredimensionado (por ejemplo, utilización sistemáticamente muy por debajo de la capacidad aprovisionada), y reporta el gasto de cada uno. Las reglas necesitan cuidado: un sistema de reserva para la resiliencia parece ocioso por diseño, y debe excluirse y etiquetarse. Revisa las reglas cuando produzcan falsos positivos.

### Actúa sobre lo que encuentras

**8. Ajusta tamaños y limpia como parte del trabajo normal.** Haz de la eliminación del desperdicio un elemento permanente de la lista de pendientes del equipo, abordado en pasos pequeños como parte de la mejora continua. Programa que los entornos de no producción se detengan fuera del horario de trabajo, borra el almacenamiento sin asociar, elige niveles de almacenamiento adecuados y revisa primero las mayores partidas. Los pequeños cambios regulares superan a las raras limpiezas heroicas, que tienden a olvidarse cuando sube la presión.

**9. Ajusta el modelo de precios a la carga de trabajo.** Usa compromisos para el uso base estable, bajo demanda para la carga variable y capacidad interrumpible para el trabajo que tolera interrupciones. Comprométete de forma incremental, en pequeñas cantidades, y haz seguimiento de la cobertura y de la utilización. El exceso de compromiso desperdicia dinero y el defecto paga una prima. Implica a finanzas y a compras y vuelve a comprobar los términos con el proveedor, ya que cambian.

**10. Detecta anomalías y responde.** Usa la detección de anomalías sobre el gasto, que señala cambios repentinos respecto de una línea base. Las herramientas de [detección de anomalías](https://en.wikipedia.org/wiki/Anomaly_detection) van desde simples umbrales hasta modelos estadísticos. Alerta al equipo propietario y mide cuánto tarda en acusar recibo y decidir. Un trabajo mal configurado puede acumular una factura grande en horas, así que la rapidez importa (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

### Prevé y planifica

**11. Prevé con rangos y generadores.** Construye las previsiones a partir de los generadores de la demanda, como los usuarios o las transacciones esperados, junto con el costo unitario. Usa el [análisis de varianzas](https://en.wikipedia.org/wiki/Variance_analysis) para explicar las diferencias entre lo previsto y lo real, y separa las debidas al volumen, al precio y a la mezcla. Da un rango y declara los supuestos. La varianza de previsión debe reducirse a medida que mejora el modelo.

**12. Incluye la sostenibilidad en la imagen.** Estima las emisiones asociadas a las cargas de trabajo principales con un método documentado, como los informes de los proveedores o las metodologías publicadas, y declara los límites de la estimación. Compara las elecciones de región, tipo de instancia y calendario tanto en costo como en emisiones. Trata las emisiones por unidad como compañero del costo por unidad y no afirmes una precisión que el método no puede respaldar.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de la asignación | Etiquetar todo a un responsable comodín; declarar grandes cantidades como compartidas | Proporción de gasto en manos de comodines; tamaño y revisión del fondo compartido; muestra de confirmación de responsables |
| Costo unitario en la nube | Elegir una unidad que crece con poco costo; recortar la fiabilidad para recortar el costo | Definición de unidad fija; compañeros de fiabilidad y calidad |
| Tasa de desperdicio | Estrechar la definición de ocioso; trasladar el desperdicio a una cuenta fuera del ámbito | Reglas en el registro; escanear todas las cuentas; muestrear los recursos que las reglas excluyen |
| Cobertura de compromisos | Comprometerse con bases infladas para perseguir un porcentaje alto | Utilización de compromisos; comprobar la base frente al historial de uso |
| Utilización de compromisos | Añadir uso elegible que no hace falta para llenar los compromisos | Comparar con el crecimiento de la demanda real; costo unitario |
| Varianza de previsión | Rellenar las previsiones con margen; revisarlas tarde | Registrar la previsión al inicio; seguir la amplitud del rango y la tasa de aciertos |
| Tiempo de acuse de recibo de anomalías | Acusar recibo de las alertas sin mirarlas; cerrar las alertas automáticamente | Registrar una decisión y un resultado; muestrear las alertas en busca de la calidad de la respuesta |

Una lectura sana es casi todo el gasto con propietario y visible, un costo unitario que se mueve por razones explicadas, un desperdicio que se reduce sin caídas, compromisos que se usan y previsiones cuyo error se estrecha con el tiempo.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Un equipo central de nube controla el gasto | Coherencia y poder de negociación | Lento; lejos de las decisiones de ingeniería |
| Los equipos poseen su costo en la nube | Decisiones rápidas e informadas | Necesita datos, formación y barreras de protección |
| Solo bajo demanda | Flexible | Mayor precio unitario |
| Compromisos fuertes | Menor precio unitario | Bloqueo y desperdicio si cae la demanda |
| Topes estrictos de presupuesto | Previene los excesos | Puede causar caídas o bloquear trabajo válido |
| Alertas y revisión | Conserva la rapidez | Depende de una respuesta oportuna |
| Ajuste agresivo de tamaños | Ahorra dinero | Riesgo para el rendimiento si se exagera |
| Ajuste medido de tamaños con SLO | Equilibrado | Necesita datos de fiabilidad y cuidado |

La respuesta en prosa es dar a los equipos datos y propiedad, fijar barreras de protección como alertas y presupuestos en lugar de paradas duras donde el servicio sea crítico, comprometerse gradualmente con la base estable y emparejar siempre el costo con la fiabilidad.

## Preguntas para debatir con tu equipo

**1. ¿Cuánto de nuestra factura de la nube podemos atribuir hoy a un responsable y a quién no se encuentra?**
Miren la proporción de gasto con etiquetas válidas y las mayores partidas sin etiquetar. Pregunten quién sería responsable de cada una. El facilitador debe anotar cuántas partidas nadie reclama. Acuerden un paso de la política de etiquetas que imponer en la creación.

**2. ¿Qué hizo nuestro costo por unidad en los últimos seis meses y por qué?**
Tracen el costo unitario y anoten los cambios de arquitectura, precio y volumen. Pregunten cuáles fueron deliberados. Si la tendencia es una sorpresa, hablen de qué datos faltan. Añadan una medida de calidad al gráfico.

**3. ¿Qué recursos apagaríamos mañana si nos atreviéramos?**
Enumeren los candidatos: entornos ociosos, bases de datos sobredimensionadas, almacenamiento olvidado. Para cada uno, pregunten cuál es el riesgo y quién decide. Acuerden una forma segura de probar la retirada de uno, como programar o tomar una instantánea primero.

**4. ¿Cómo sabríamos en un día si un trabajo empezara a costar diez veces más?**
Recorran el camino de alertas desde la factura hasta el responsable. Pónganlo a prueba con un ejemplo pasado. La conversación debe revelar retrasos y brechas de propiedad. Acuerden un tiempo objetivo para acusar recibo y decidir, y quién está al frente.

**5. ¿Cuánto de nuestro uso base podríamos comprometer con seguridad y qué nos haría equivocarnos?**
Examinen el historial de uso en busca de un suelo estable y de los riesgos que lo amenazan: cambios de producto, migraciones, cambios de precios. Decidan un primer compromiso modesto y una fecha de revisión. Incluyan a finanzas en la discusión.

**6. ¿Qué compensación entre costo y fiabilidad estamos haciendo sin querer?**
Revisen los ahorros y los incidentes recientes. ¿Estaban relacionados? Hablen de cómo hacer explícita la compensación, por ejemplo vinculando las revisiones de costos con los presupuestos de errores. Decidan quién puede aprobar un recorte que afecte a la fiabilidad.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega toman las decisiones que impulsan el costo y son los mejor situados para reducirlo. Deben etiquetar en la creación, mirar con regularidad su vista de costos, integrar el costo en las discusiones de diseño y tratar la reducción del desperdicio como trabajo normal. Deben poder ver el efecto de un cambio en el costo poco después de hacerlo, lo que respalda el aprendizaje rápido.

### Equipos de servicio y de operaciones

Los equipos de operaciones y de plataforma gestionan servicios compartidos, hacen cumplir la política y operan las alertas de anomalías. Deben mantener sencillo el cumplimiento de las etiquetas, ofrecer informes de autoservicio y publicar reglas claras para el costo compartido. Deben vigilar tanto el costo como la fiabilidad de las plataformas que ofrecen y ayudar a los equipos a actuar sin convertirse en una puerta de paso.

### Liderazgo y gobernanza

Los líderes y finanzas quieren un gasto predecible y buen valor. Deben financiar las herramientas y el tiempo para el trabajo de costos, aceptar rangos en las previsiones, evitar las tablas de posiciones de equipos y pedir el costo unitario junto a la calidad. La gobernanza debe comprobar que los compromisos se toman con datos y que las afirmaciones de sostenibilidad indican su método.

### Clientes y usuarios

Los usuarios sienten el costo de la nube de forma indirecta, a través de los precios, las funciones o la estabilidad del servicio. Se benefician cuando los ahorros financian mejoras y sufren cuando los recortes reducen la calidad. Donde se cobra a los usuarios por el consumo, quieren facturas claras y poder influir en ellas.

## En la práctica: un ejemplo de gestión de servicios

Un minorista regional en línea opera su tienda y su plataforma de pedidos en una nube pública, con seis equipos de ingeniería. Los números siguientes son ilustrativos.

El gasto en la nube subió de forma constante durante un año, y el director financiero pide un recorte. El responsable de FinOps extrae los datos de facturación. La cobertura de la asignación es del 68 por ciento, con un tercio del gasto sin etiquetar en cuentas de prueba. El costo por pedido completado es de 0,31 dólares estadounidenses, frente a 0,27 seis meses antes, mientras el volumen de pedidos creció un 15 por ciento. La tasa de desperdicio según las reglas del equipo es del 14 por ciento del gasto del ámbito, sobre todo entornos de no producción en marcha por la noche y los fines de semana y unas pocas bases de datos sobredimensionadas. La cobertura de compromisos es del 20 por ciento de la base estable, con un 97 por ciento de utilización de lo comprado. Una varianza de previsión de más 18 por ciento en el último trimestre siguió a una campaña de marketing de la que nadie había informado al equipo de plataforma. Un trabajo de datos descontrolado en una cuenta estuvo en marcha dos días antes de que nadie lo notara.

El responsable acuerda cuatro cambios con los equipos de ingeniería. Una política de etiquetas bloquea los recursos nuevos sin etiquetas de responsable y de servicio, con un periodo de gracia de dos semanas. Cada equipo recibe una vista semanal de costos y un breve hueco en la conversación quincenal de costos. Los entornos de no producción se programan para detenerse fuera del horario de trabajo, y las tres bases de datos sobredimensionadas se reajustan tras comprobar su rendimiento frente a los objetivos de nivel de servicio. Un primer compromiso cubre el 60 por ciento de la base estable, con una revisión en tres meses. Una alerta de anomalías llega al equipo propietario con la expectativa de una decisión registrada en cuatro horas, y el calendario de planificación incluye ahora las campañas de marketing.

Tras un trimestre, la cobertura de la asignación es del 93 por ciento, la tasa de desperdicio baja al 6 por ciento, el costo por pedido baja a 0,26 dólares estadounidenses sin cambio en la latencia ni en la tasa de errores del pago, y la varianza de previsión es de más 5 por ciento. La cobertura de compromisos es del 55 por ciento con un 96 por ciento de utilización. El tiempo mediano de acuse de recibo de anomalías es de 2 horas, con el percentil 85 en 6. El director financiero pide una tabla de posiciones que muestre el costo por equipo. El responsable de FinOps se niega, explicando que los equipos operan servicios distintos con crecimientos distintos, y ofrece en su lugar la tendencia del costo unitario de cada equipo con sus medidas de fiabilidad. La decisión se anota y se fija la fecha de la próxima revisión.

## Agilidad, IA, automatización y analítica

### Agilidad

Da a los ingenieros los datos de costos y la autoridad para actuar, y revísalos con la misma cadencia que la fiabilidad. La precaución es que los objetivos de costo fijados sin contexto reducen la fiabilidad o retrasan trabajo útil.

### IA

Los servicios de IA pueden ser una parte de rápido crecimiento del costo de la nube, así que dales su propia asignación, su costo unitario y sus alertas de anomalías. Empareja el costo por solicitud con la calidad de las respuestas y con el valor entregado. La precaución es que recortar el costo de la IA pasando a un modelo más débil puede elevar el retrabajo humano.

### Automatización

Automatiza las comprobaciones de etiquetado, las alertas de anomalías y las sugerencias de ajuste de tamaños, y mide la automatización por las falsas alertas y por los ahorros que realmente se materializaron. La precaución es que los apagados automáticos de recursos ociosos pueden eliminar algo que hacía falta.

### Analítica

Muestra el costo unitario y el desperdicio con la varianza de previsión y la actualidad de los datos. La decisión a la que informa es dónde optimizar y a qué comprometerse. La precaución es que las decisiones de compromiso dependen de previsiones, así que declara su incertidumbre.

## Perspectiva sectorial

**Startup.** Los créditos y las facturas bajas pueden esconder malos hábitos que se vuelven caros a escala. Etiqueta desde el primer día, programa los recursos de no producción y haz seguimiento temprano del costo por cliente. Comprométete solo cuando la demanda sea predecible.

**Pequeña empresa.** Una sola cuenta y unos pocos servicios hacen sencillos el etiquetado y la revisión. Revisa la factura cada mes con la persona que construye el sistema, elimina los recursos olvidados y desconfía de los compromisos largos. Una alerta de presupuesto es el control individual más valioso.

**Gran empresa.** Muchas cuentas, equipos y proveedores piden una función central de FinOps que capacite a los equipos en lugar de controlarlos. Estandariza las etiquetas y las exportaciones de facturación entre proveedores, negocia los compromisos de forma central y da a los equipos sus datos. Planifica las diferencias de reporte multinube.

**Gobierno y sector público.** Los marcos de contratación, la residencia de datos y los presupuestos anuales fijos limitan las opciones. Documenta las decisiones de costo y de región, modela el efecto del gasto variable en las consignaciones y conserva pistas de auditoría. Los compromisos públicos de sostenibilidad pueden exigir emisiones reportadas con sus métodos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de una práctica de FinOps son el tiempo de unas pocas personas para llevar los informes, la política de etiquetas y la conversación regular; las herramientas, que puede aportar la plataforma de nube o comprarse; y el tiempo de ingeniería para actuar sobre los hallazgos. Una práctica pequeña puede empezar con una exportación de facturación y una hoja de cálculo.

Los retornos vienen del desperdicio reducido, mejores precios mediante compromisos, menos sorpresas y mejores decisiones de arquitectura. Construye el caso con tus propios números: la tasa de desperdicio y su costo en la primera revisión, los ahorros de programar los entornos de no producción, el descuento de compromiso sobre la parte comprometida y el costo evitado de las anomalías detectadas pronto. Evita citar porcentajes de desperdicio o cifras de ahorro de todo el sector sin una fuente y un método rastreables. Incluye el costo de la práctica y el riesgo de sobrecompromiso. El caso financiero de las mejoras en general se cubre en el tema siguiente (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un equipo central que dice que no.** Frena el trabajo y los equipos lo esquivan. Capacita a los equipos con datos y barreras de protección.
- **Recortar el costo sin vigilar la fiabilidad.** Los ahorros vuelven como incidentes. Empareja el costo con medidas de nivel de servicio.
- **Perseguir la cobertura de compromisos.** Un porcentaje alto con poca utilización es desperdicio. Haz seguimiento de ambas.
- **Informes mensuales solo para finanzas.** Los ingenieros nunca los ven. Da a los equipos vistas diarias o semanales.
- **Etiquetar como proyecto de limpieza.** Decae. Impón las etiquetas en la creación.
- **Clasificar a los equipos por gasto.** El crecimiento parece desperdicio. Muestra tendencias del costo unitario con contexto.
- **Prever un único número.** La demanda variable lo rompe. Usa rangos y generadores.
- **Afirmar emisiones precisas.** Los métodos de estimación son inciertos. Declara el método y los límites.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad y propiedad | Factura mensual revisada por finanzas | Etiquetas usadas por algunos equipos | Etiquetas obligatorias; los equipos ven vistas semanales de costos | Cobertura de la asignación gestionada; fondos compartidos revisados | Los datos de costos fluyen a las decisiones de producto casi en tiempo real entre proveedores |
| Optimización | Limpiezas ocasionales | Programaciones y ajuste de tamaños por algunos equipos | Reglas de desperdicio y una lista de pendientes permanente de optimizaciones | Desperdicio, compromisos y costo unitario gestionados con compañeros de fiabilidad | Optimización continua y automatizada con supervisión humana y aprendizaje compartido |
| Planificación | Presupuesto anual | Previsiones aproximadas | Previsiones basadas en generadores con rangos | Varianza analizada y devuelta a la planificación; compromisos gestionados de forma incremental | Previsión conjunta con el negocio, los proveedores y los objetivos de sostenibilidad |

## Lista de verificación

- [ ] Un conjunto pequeño y obligatorio de etiquetas (responsable, servicio, entorno) se impone en la creación de recursos.
- [ ] La cobertura de la asignación se reporta cada semana, con las mayores partidas sin etiquetar enumeradas.
- [ ] Cada equipo tiene una vista semanal de costos con tendencias y anomalías.
- [ ] Una conversación regular de costos entre ingeniería y finanzas está en el calendario.
- [ ] El costo unitario en la nube se sigue junto a la disponibilidad, la latencia y la tasa de errores.
- [ ] Las reglas de desperdicio están escritas y se aplican, con las exclusiones etiquetadas.
- [ ] Los compromisos se toman de forma incremental frente al uso base estable, con la cobertura y la utilización con seguimiento.
- [ ] Las previsiones usan generadores y rangos, y se analiza la varianza.
- [ ] Las alertas de anomalías llegan a los responsables con un tiempo esperado de decisión.
- [ ] Las estimaciones de emisiones, si se reportan, indican su método y sus límites.

## Prompts de IA

**Analiza una tendencia de costos.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Redacta una política de etiquetas.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Define reglas de desperdicio.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Planifica un primer compromiso.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de costos en la nube.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de costos en la nube lleva su vector de manipulación, su barrera de protección y su compañero de fiabilidad.

## Ideas clave

- Haz visible y con propietario el costo: impón las etiquetas en la creación y da a cada equipo su propia vista semanal.
- Mide el costo por unidad junto a la fiabilidad y la calidad, nunca solo.
- Elimina el desperdicio como parte del trabajo normal, guiado por reglas escritas.
- Comprométete gradualmente con la base estable y haz seguimiento tanto de la cobertura como de la utilización.
- Prevé con generadores y rangos, y vigila las anomalías con una respuesta rápida.
- No clasifiques a los equipos por el gasto y declara el método y los límites de cualquier estimación de emisiones.

## Referencias y lecturas complementarias

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
