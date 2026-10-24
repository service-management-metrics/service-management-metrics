# Costo del servicio y economía unitaria

**Saber lo que cuesta un servicio, y lo que cuesta por unidad de algo que valoran los usuarios, permite a un equipo tomar decisiones honestas sobre calidad, rapidez y gasto, siempre que las reglas de asignación sean justas, visibles y no se usen nunca para castigar a las personas que operan el servicio.**

## Visión general y motivación

Todo servicio de TI cuesta dinero: personas, nube y alojamiento, licencias, hardware, proveedores y la parte de las plataformas compartidas que utiliza. Los líderes preguntan qué cuesta un servicio, si vale la pena y qué cambia si la demanda se duplica. Los equipos hacen las mismas preguntas desde el otro lado: qué podemos permitirnos hacer y a qué estamos renunciando. Sin números, estas conversaciones se convierten en discusiones sobre de quién es cada presupuesto.

La [contabilidad de costos](https://en.wikipedia.org/wiki/Cost_accounting) es la práctica de medir, registrar y analizar los costos. Para una organización de servicios, las tareas centrales son atribuir costos a los servicios, expresar el costo por unidad de algo significativo y prever cómo cambia el costo con el volumen. La práctica de gestión financiera del servicio de ITIL cubre el mismo terreno, y la práctica de FinOps para el gasto en la nube lo lleva más lejos (véase el tema 7.6, Métricas de FinOps y costos en la nube).

Las visiones ágil e ITIL del costo difieren, y la diferencia es útil.

- **La visión de proyecto** financia un esfuerzo temporal con un presupuesto y una fecha de entrega. El costo es lo que gastó el proyecto, y el éxito es entregar a tiempo y dentro del presupuesto. El proyecto termina, el equipo se dispersa y el servicio que creó se entrega a otra persona.
- **La visión de producto o de servicio** financia un equipo permanente para construir y operar un servicio a lo largo de su vida. El costo es el costo estable del equipo y de sus plataformas, y la pregunta es si el valor entregado justifica ese gasto. Esto encaja con los objetivos ágiles de entrega continua y de construir en torno a personas motivadas que conocen el servicio. Encaja también con la preocupación de ITIL por el costo de un servicio a lo largo de su ciclo de vida.

Las medidas de costo pueden engañar con la misma facilidad con que informan. Tres problemas se repiten.

- **La asignación es una elección.** Los costos compartidos, como las redes, la seguridad y las plataformas, deben repartirse entre servicios según alguna regla, y reglas distintas dan respuestas distintas. La [asignación de costos](https://en.wikipedia.org/wiki/Cost_allocation) debe seguir un [generador de costo](https://en.wikipedia.org/wiki/Cost_driver) (cost driver), un factor que hace cambiar el costo, como los usuarios, las solicitudes o el almacenamiento. El [costeo basado en actividades](https://en.wikipedia.org/wiki/Activity-based_costing) formaliza esto rastreando los costos hasta las actividades que consumen recursos.
- **Los costos fijos y variables se comportan de forma distinta.** Un [costo fijo](https://en.wikipedia.org/wiki/Fixed_cost) se mantiene igual cuando el volumen cambia dentro de un rango, y un [costo variable](https://en.wikipedia.org/wiki/Variable_cost) sube con el volumen. El [costo unitario](https://en.wikipedia.org/wiki/Unit_cost) de un servicio baja a medida que crece el volumen cuando dominan los costos fijos, un patrón relacionado con las [economías de escala](https://en.wikipedia.org/wiki/Economies_of_scale). Mirar el costo unitario sin saber qué costos son fijos lleva a previsiones erróneas.
- **El costo no es valor.** El servicio más barato no es el mejor. El costo por ticket baja si cierras tickets sin resolver problemas. Las medidas de costo necesitan un compañero de calidad o de resultados, que aportan las partes anteriores de este libro (véase el tema 6.5, Realización de valor y resultados de negocio).

Las clasificaciones contables importan también. El [gasto de capital](https://en.wikipedia.org/wiki/Capital_expenditure) compra activos que duran, y los gastos operativos cubren el funcionamiento diario. Los servicios en la nube y por suscripción trasladan el gasto de la primera clase a la segunda, lo que cambia el aspecto de los presupuestos sin cambiar lo que cuestan los servicios. Los colegas de finanzas poseen estas reglas, y las métricas de aquí deben construirse con ellos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con fuerza al dinero. Un objetivo de costo tiende a producir recortes donde es más fácil esconder el daño, como el mantenimiento, la calidad y el tiempo de aprendizaje. Por eso las medidas siguientes se emparejan con indicadores de la salud del servicio y con una declaración de las reglas de asignación (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Haz explícitas las reglas de asignación y átalas a generadores de costo.** La gente acepta los números que puede seguir.
- **Separa el costo fijo del variable.** Las previsiones dependen de cuál es cuál.
- **Reporta el costo unitario con su compañero de calidad.** Más barato solo es mejor si el servicio sigue siendo bueno.
- **Usa rangos y tendencias, no falsa precisión.** La asignación implica juicio.
- **Financia equipos permanentes en torno a servicios donde puedas.** Los equipos estables aprenden y mejoran; los temporales se disuelven.
- **Comparte los costos con las personas que pueden cambiarlos.** Visibilidad sin influencia es solo culpa.
- **No clasifiques nunca a personas ni a equipos por el costo.** Los servicios difieren, y también sus restricciones.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Costo por servicio | Costo anual plenamente cargado de un servicio con nombre, usando reglas de asignación documentadas | costos directos + costos compartidos asignados al servicio en el periodo | moneda por año | Libro mayor, datos de centros de costos, facturas de la nube y de licencias, datos de tiempo o de actividad | Gestión financiera del servicio; gestión del catálogo de servicios | Costo de un equipo de producto permanente y sus plataformas | Trimestral |
| Costo unitario | Costo por unidad de algo que valoran los usuarios, como por usuario activo, por transacción o por solicitud resuelta | costo por servicio en el periodo / unidades entregadas en el periodo | moneda por unidad | Costo por servicio y datos de volumen | Gestión financiera del servicio; gestión de niveles de servicio | Costo de servir por resultado | Trimestral |
| Cobertura de la asignación | Proporción del gasto de TI atribuida a un servicio con nombre o declarada como gastos generales compartidos | gasto atribuido a servicios o declarado como gastos generales / gasto total de TI | porcentaje | Libro mayor y modelo de asignación | Gestión financiera del servicio | Costo visible del trabajo de cada equipo | Trimestral |
| Reparto entre funcionamiento, cambio y mejora | Proporción del gasto o la capacidad que va a hacer funcionar los servicios, a cambiarlos y a mejorarlos | gasto o capacidad de cada categoría / total | porcentaje | Etiquetas del libro mayor, tipos de trabajo del gestor de trabajo | Gestión financiera del servicio; mejora continua | Asignación de capacidad por tipo de trabajo | Trimestral |
| Varianza de previsión | Diferencia entre el costo previsto y el real, por servicio | (real menos previsto) / previsto | porcentaje | Registro de previsiones y libro mayor | Gestión financiera del servicio | Exactitud de las previsiones | Mensual |
| Tasa de disputas del showback | Proporción de partidas de showback o de repercusión de costos que los responsables de servicios impugnaron y que se modificaron | partidas modificadas tras la impugnación / partidas emitidas | porcentaje | Sistema de showback y registro de disputas | Gestión financiera del servicio | Retrospectiva sobre costos compartidos | Trimestral |
| Proporción de financiación de equipos permanentes | Proporción del gasto de entrega y operaciones financiada como capacidad estable de equipo para un servicio | gasto en equipos de servicio permanentes / gasto total de entrega y operaciones | porcentaje | Libro mayor y organigrama | Gestión financiera del servicio; cambio organizativo | Equipos construidos en torno a servicios y personas motivadas | Anual |

Define el periodo, la moneda y los tipos de costo de cada medida, y anota las reglas de asignación en el registro de métricas: qué costos son directos, cuáles son compartidos y qué generador reparte cada costo compartido. El costo unitario necesita una unidad que acepten tanto los usuarios como el equipo, y la definición de la unidad se mantiene fija a lo largo de la tendencia. La varianza de previsión compara con la previsión tal como estaba al comienzo del periodo, no con una revisada.

## Recomendaciones

### Construye la imagen del costo

**1. Empieza por el libro mayor y la lista de servicios.** Toma el gasto total de TI del libro mayor, enumera los servicios del catálogo y decide qué parte de cada costo pertenece a qué servicio. Empieza por los costos directos fáciles: el equipo que opera el servicio, sus licencias, su alojamiento. Los costos compartidos van en segundo lugar. Una primera imagen aproximada, compartida con las personas implicadas, vale más que una precisa construida en privado.

**2. Elige generadores de costo que la gente pueda seguir.** Para cada costo compartido, elige un generador atado a lo que realmente lo causa: usuarios para una plataforma de colaboración, almacenamiento para una plataforma de datos, solicitudes para una pasarela, dispositivos para la gestión de puestos finales. Explica la regla en una frase. Los generadores que nadie puede comprobar invitan a discusiones, y los generadores que nadie puede influir vuelven inútil el showback.

**3. Separa el costo fijo del variable.** Para cada servicio, marca qué costos se mueven con el volumen y cuáles no. Un servicio que es sobre todo costo fijo tiene un costo unitario que baja con el crecimiento, y uno que es sobre todo variable no. Este reparto es la base de toda previsión y de toda conversación sobre el escalado.

**4. Muestra rangos donde la asignación implica juicio.** Si dos reglas de asignación razonables dan resultados que difieren en un 20 por ciento, muestra ambas o muestra el rango. Un único número preciso de una regla arbitraria inicia peleas que los datos no pueden zanjar.

### Mide por unidad, con la calidad al lado

**5. Elige una unidad que refleje el valor.** El costo por usuario activo, por transacción completada, por solicitud resuelta o por despliegue pueden ser útiles. Elige la unidad que se conecte con aquello para lo que sirve el servicio, acuérdala con el responsable del servicio y mantenla estable. El costo por ticket es una unidad arriesgada, porque baja cuando los tickets se cierran pronto y sube cuando previenes tickets con un buen autoservicio.

**6. Empareja cada costo unitario con una medida de calidad.** Muestra el costo unitario junto a la disponibilidad, la satisfacción o la tasa de reapertura. Un costo unitario que baja mientras baja la calidad es una transferencia de costo a los usuarios. Un costo unitario que se mantiene mientras sube la calidad es una ganancia. Preséntalos juntos o no los presentes (véase el tema 6.1, Métricas de satisfacción del cliente).

**7. Haz seguimiento de la tendencia, no solo del nivel.** El costo unitario a lo largo del tiempo, con notas sobre qué cambió, cuenta una historia que un trimestre no puede. Marca en el gráfico los cambios de reglas de asignación o de unidades para que las tendencias no se malinterpreten. Compara un servicio con su propio historial antes de compararlo con otros.

### Comparte el costo con quienes pueden cambiarlo

**8. Usa el showback antes que la repercusión de costos.** El showback reporta los costos a los responsables de los servicios sin facturárselos, y la repercusión (chargeback) transfiere el costo a sus presupuestos. Empieza por el showback, que crea comprensión y confianza, y pasa a la repercusión solo donde cambie decisiones y se acepten las reglas. Ambos dependen de reglas que los responsables ayudan a dar forma.

**9. Deja que los responsables impugnen los números.** Un proceso de disputas es señal de salud, siempre que sea rápido y sus resultados se registren. Revisa la tasa de disputas: una tasa alta muestra reglas en las que nadie confía, y cero puede mostrar que nadie lee los informes. Corrige la regla, no solo la partida.

**10. Revisa el costo con todo el equipo del servicio.** Incluye a ingenieros y operadores además de a responsables en una revisión regular de costos. Quienes operan un servicio suelen saber dónde se esconde el desperdicio: entornos ociosos, recursos sobredimensionados, herramientas duplicadas. Trata sus hallazgos como mejoras que compartir y no como críticas.

### Financia para la estabilidad y el aprendizaje

**11. Prefiere equipos permanentes financiados en torno a servicios.** Donde sea posible, financia un equipo estable para que posea un servicio a lo largo del tiempo, en lugar de montar un equipo de proyecto y disolverlo. Los equipos permanentes acumulan conocimiento, construyen mejores relaciones con los usuarios y cargan con el costo de las malas decisiones. Esto refleja el objetivo ágil de construir en torno a individuos motivados y la preocupación de ITIL por el ciclo de vida del servicio. El cambio de financiación es una decisión organizativa importante, así que implica pronto a finanzas y a la dirección. El libro *Project to Product* de Mik Kersten trata este cambio.

**12. Reserva capacidad para la mejora.** Los costos que reducen costos futuros, como la automatización, las correcciones de fiabilidad y la eliminación de herramientas duplicadas, necesitan financiación protegida o pierden siempre frente al trabajo de funciones. Haz seguimiento de la proporción de mejora en el reparto entre funcionamiento, cambio y mejora y mira los retornos que produce (véase el tema 4.6, Deuda técnica y errores conocidos).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Costo por servicio | Trasladar costos a otros servicios mediante la regla de asignación; dejar sin asignar los costos desfavorables | Cobertura de la asignación; reglas publicadas y revisadas por los responsables; comparar los totales con el libro mayor |
| Costo unitario | Elevar el denominador con unidades de poco valor; recortar la calidad para recortar el costo; cambiar la unidad | Medida de calidad compañera; definición de unidad fija; comprobaciones de resultados |
| Cobertura de la asignación | Declarar grandes cantidades como gastos generales compartidos para evitar la atribución | Proporción de gastos generales reportada; revisión de lo que se declara como gastos generales y por qué |
| Reparto entre funcionamiento, cambio y mejora | Reetiquetar trabajo de funcionamiento como mejora o cambio; etiquetar al final del periodo | Etiquetar en la entrada; muestrear elementos para comprobar el tipo; comparar con los datos de incidentes y solicitudes |
| Varianza de previsión | Rellenar las previsiones con margen; revisar la previsión tarde en el periodo | Previsión registrada al inicio; comparar los rangos de previsión con los reales a lo largo del tiempo |
| Tasa de disputas del showback | Desalentar las disputas; cambiar partidas sin un cambio de regla | Revisar las disputas y sus resultados; comprobar si las reglas cambiaron tras disputas repetidas |
| Proporción de financiación de equipos permanentes | Rebautizar proyectos como equipos permanentes sin cambiar la financiación ni la propiedad | Comprobar la estabilidad de los equipos y la propiedad a lo largo del tiempo; medidas de salud del servicio |

Una lectura sana es una imagen de costos que los responsables de los servicios reconocen, costos unitarios que se mueven por causas explicadas mientras la calidad se mantiene, errores de previsión que se reducen y trabajo de mejora que aparece en los números.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Financiación por proyectos | Alcance y final claros | Los equipos se disuelven; se pierde el conocimiento; el servicio se entrega a otros |
| Financiación de equipos permanentes | Aprendizaje, propiedad, costo estable | Necesita confianza y un proceso de planificación maduro; el alcance puede derivar |
| Showback | Crea comprensión con poca fricción | Puede ignorarse si nadie responde de ello |
| Repercusión de costos | Crea responsabilidad y señales de precio | Disputas; incentivos para evitar los servicios compartidos |
| Reglas de asignación sencillas | Fáciles de explicar | Pueden ser toscas |
| Asignación basada en actividades | Más exacta | Costosa de mantener; falsa precisión |
| Costo por unidad | Vincula el costo con el valor | Sensible a la elección de la unidad y al volumen |
| Solo el costo total | Sencillo | Esconde tendencias y eficiencia |

La respuesta en prosa es empezar con reglas sencillas y showback, añadir precisión donde las decisiones dependan de ella y avanzar hacia la financiación de equipos permanentes a medida que crecen la confianza y la madurez de la planificación. Mantén una medida de calidad junto a cada medida de costo.

## Preguntas para debatir con tu equipo

**1. ¿Cuánto cuesta al año nuestro servicio principal y quién estaría de acuerdo con el número?**
Pide a finanzas y al responsable del servicio que produzcan estimaciones independientes. Compáralas. El facilitador debe anotar dónde difieren y por qué: reglas de asignación, alcance o costos que faltan. Acuerden una única regla documentada para el trimestre siguiente.

**2. ¿Cuál es la unidad que reconocerían nuestros usuarios y cuánto cuesta?**
Enumeren las unidades posibles del servicio y elijan una. Calculen su costo y hablen de qué la haría subir o bajar. Pregunten qué esconde la unidad. Añadan una medida de calidad que la acompañe.

**3. ¿Cuáles de nuestros costos compartidos se reparten con una regla que nadie sabe explicar?**
Enumeren los costos compartidos y sus generadores. Para cada uno, pregunten si el generador se relaciona con lo que causa el costo. Sustituyan uno que no lo haga. Hablen de quién puede influir en el generador, ya que los datos de costos sin influencia son solo culpa.

**4. ¿Cuánta de nuestra capacidad va a hacer funcionar, cambiar y mejorar el servicio?**
Revisen un trimestre de trabajo terminado por tipo, como en el tema de planificación (véase el tema 2.5, Métricas de pronóstico y planificación de entregas). Comparen con lo que creen los líderes. Decidan cuál debe ser la proporción de mejora y qué la protegería.

**5. ¿Qué cambiaría si financiáramos un equipo permanente para este servicio?**
Imaginen la financiación, la propiedad y las medidas. Pregunten qué riesgos y beneficios verían finanzas, el equipo y los usuarios. Identifiquen un paso hacia ello, como una lista estable de equipo y una vista compartida del presupuesto del servicio.

**6. ¿Cuándo causó por última vez un número de costos una discusión y qué aprendimos?**
Recuerden una disputa de showback o de presupuesto. ¿Trataba del número o de la regla? Hablen de cómo habrían ayudado una regla más clara o un mejor proceso de disputas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega ven el costo como el precio de su tiempo, sus plataformas y sus herramientas. Deben conocer el costo y el costo unitario de su servicio, detectar pronto el desperdicio y usar los números para defender el trabajo de mejora y una financiación estable. Deben evitar optimizar el número recortando la calidad y cuestionar las reglas de asignación que no pueden seguir.

### Equipos de servicio y de operaciones

Los equipos de operaciones cargan con el costo de operar los servicios y a menudo poseen las plataformas compartidas. Deben publicar cómo se generan los costos compartidos, responder a las preguntas de showback y compartir ideas de ahorro surgidas de la experiencia. Deben esperar presión para recortar los costos de funcionamiento y mostrar el lado de calidad y de riesgo de cualquier recorte.

### Liderazgo y gobernanza

Los líderes preguntan por el costo y el valor y fijan el modelo de financiación. Deben pedir costos unitarios con compañeros de calidad, apoyar la financiación de equipos permanentes donde encaje y evitar clasificar a los equipos por el costo. La gobernanza debe esperar que las reglas de asignación estén documentadas, revisadas y aplicadas de forma coherente, y debe mirar la proporción de mejora.

### Clientes y usuarios

Los usuarios que pagan mediante repercusión de costos quieren entender la factura y poder influir en ella. Otros ven el costo en la calidad y la gama de los servicios ofrecidos. Unos costos unitarios claros y una voz en la compensación entre precio y servicio hacen más sana la relación, y su opinión forma parte del compañero de calidad de cada costo unitario.

## En la práctica: un ejemplo de gestión de servicios

El departamento central de TI de una universidad de tamaño medio presta unos 25 servicios a 18 000 estudiantes y empleados. Los números siguientes son ilustrativos.

La oficina de finanzas quiere saber por qué el presupuesto de TI creció más deprisa que la matrícula. La socia financiera de TI construye una imagen de costos con los responsables de los servicios. Del gasto total de TI, el 72 por ciento es directo a servicios con nombre, el 18 por ciento son plataformas compartidas (red, identidad, herramientas de seguridad) que se asignan mediante generadores y el 10 por ciento son gastos generales declarados. La cobertura de la asignación es por tanto del 90 por ciento. La plataforma de aprendizaje cuesta el equivalente a 41 dólares estadounidenses por usuario activo y año, frente a 36, mientras la satisfacción y la disponibilidad se mantienen. El centro de servicios muestra un costo por solicitud resuelta que ha bajado un 12 por ciento en dos años. El responsable del servicio señala que la bajada coincidió con una subida de los tickets reabiertos del 4 al 9 por ciento, y el compañero de calidad muestra que el ahorro es en parte una transferencia de esfuerzo a los usuarios.

El equipo hace cuatro cambios. Publica las reglas de asignación en una página, con los generadores de cada costo compartido y la fecha de la última revisión. Sustituye el costo por solicitud por el costo por solicitud resuelta en el primer contacto, mostrado junto a la tasa de reapertura. Traslada la plataforma de aprendizaje y el servicio de identidad a una financiación como equipos permanentes con una plantilla estable. Reserva el 15 por ciento de la capacidad para trabajo de mejora de cada uno de los dos mayores servicios y hace seguimiento de lo que devuelve el trabajo.

Un año después, el costo unitario de la plataforma de aprendizaje es de 38 dólares estadounidenses al crecer el uso, la tasa de reapertura ha bajado al 5 por ciento y la varianza de previsión de los dos servicios con equipo permanente está dentro del 4 por ciento, frente al 11 por ciento del trabajo financiado por proyectos. La tasa de disputas del showback ha bajado del 22 por ciento al 8 por ciento tras cambiar dos reglas. La oficina de finanzas pide un objetivo anual de reducción del 5 por ciento del costo unitario para cada servicio. La socia financiera de TI propone objetivos solo donde un servicio tenga una palanca de eficiencia clara, mostrados con el compañero de calidad, y explica que un objetivo uniforme premiaría recortar el mantenimiento. La decisión se anota, con una revisión de las reglas cada año.

## Agilidad, IA, automatización y analítica

### Agilidad

Financia equipos permanentes y revisa el costo junto a los resultados con las partes interesadas con regularidad, para que las conversaciones sobre costos traten de algo más que de recortar. La precaución es que las reglas de asignación usadas para castigar a los equipos llevan a manipular las etiquetas y los repartos.

### IA

Las cargas de trabajo de IA añaden costo variable, como el uso de modelos y el procesamiento de datos, y plantean la cuestión del costo por resultado. Haz seguimiento del costo por unidad de valor de las rutas asistidas por IA y empareja con la calidad. La precaución es que una ruta de IA más barata que reduce la calidad solo traslada el costo al retrabajo.

### Automatización

Automatiza la recogida de costos y las comprobaciones de etiquetado, y mide la cobertura de la asignación. La precaución es que la asignación automática con una regla que nadie revisa puede distorsionar la imagen.

### Analítica

Reporta el costo unitario con rangos y declara las reglas de asignación. La decisión a la que informa es dónde cambiar la calidad, la rapidez o el gasto. La precaución es que el costo unitario depende de qué se elija como unidad, así que di por qué.

## Perspectiva sectorial

**Startup.** El costo es sobre todo nube, herramientas y salarios. Haz seguimiento desde el principio del gasto principal en nube y herramientas por servicio, etiqueta los recursos y calcula pronto el costo por cliente activo. Resiste la asignación elaborada, ya que el equipo es pequeño.

**Pequeña empresa.** Un puñado de proveedores y una o dos personas componen la mayor parte de los costos. Mantén una imagen anual sencilla, el costo por usuario de las herramientas principales y una vista de lo que se paga y no se usa. Pide a los proveedores facturas detalladas.

**Gran empresa.** La escala trae plataformas compartidas y muchas unidades de negocio. Usa un modelo de asignación documentado con generadores, un proceso de disputas y una socia financiera integrada en TI. Cuidado con una repercusión de costos que desaliente el uso de servicios compartidos que benefician a todos.

**Gobierno y sector público.** Los presupuestos son anuales y consignados, con reglas sobre el gasto de capital y el operativo, y puede exigirse transparencia de costos. Alinea el costeo de servicios con las reglas de finanzas públicas, documenta los métodos de asignación para la auditoría y considera la financiación plurianual de los equipos de servicio permanentes donde la ley lo permita. Reporta los costos unitarios con medidas de resultados (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de construir el modelo de asignación, el tiempo de finanzas y de los responsables de los servicios para acordar las reglas y el trabajo rutinario de informes mensuales y gestión de disputas. La mayoría de las organizaciones ya tiene el libro mayor y los datos de facturación de la nube. Un pequeño modelo en una hoja de cálculo puede iniciar el trabajo, y las herramientas vienen después.

Los retornos son mejores decisiones y menos discusiones. Los equipos que ven sus costos encuentran desperdicio: entornos ociosos, licencias sin usar y herramientas duplicadas. Los líderes pueden comparar opciones conociendo los generadores de costo, planificar el crecimiento con los costos fijos y variables separados y financiar la mejora con evidencia de su retorno. Construye el caso con tus propios números: el desperdicio hallado en la primera revisión, el tiempo dedicado a disputas presupuestarias y la varianza de previsión antes y después. Evita las afirmaciones externas sobre el gasto medio de TI como porcentaje de los ingresos salvo que puedas rastrear la fuente y el método, ya que las definiciones varían mucho. El último tema de esta parte reúne en un solo lugar el caso financiero (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Repartir el costo compartido a partes iguales.** Castiga a los usuarios pequeños y esconde los generadores reales. Usa generadores que reflejen el consumo.
- **El costo por ticket como objetivo.** Premia cerrar tickets pronto. Usa el costo por solicitud resuelta con un compañero de calidad.
- **Precisión sin confianza.** Un modelo bello en el que los responsables no creen no vale nada. Construye las reglas con ellos.
- **La repercusión de costos primero.** Inicia peleas antes de que haya comprensión. Empieza por el showback.
- **Recortar lo que cuesta ver.** El mantenimiento, el aprendizaje y el trabajo de fiabilidad se recortan primero y cuestan más después. Protege la capacidad de mejora.
- **Comparar equipos por el costo.** Los servicios difieren en restricciones y riesgo. Compara cada uno con su propio historial.
- **Cambiar a la vez las reglas y la tendencia.** Marca en los gráficos los cambios de reglas y reexpresa el historial donde sea posible.
- **Tratar el costo como propiedad de finanzas.** Las personas que operan el servicio saben de dónde viene el costo. Inclúyelas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Imagen del costo | Presupuesto solo por departamento | Costo por servicio para unos pocos servicios, asignación aproximada | Reglas de asignación documentadas con generadores; cobertura con seguimiento | Costos unitarios con compañeros de calidad; reparto entre fijo y variable | Costos compartidos con transparencia con los socios de negocio; generadores influidos conjuntamente |
| Uso del costo | Recortes de costos por porcentaje | Showback para algunos responsables | Showback para todos los servicios; proceso de disputas | La varianza de previsión y las tendencias del costo unitario impulsan decisiones | Costo, calidad y valor se sopesan abiertamente en toda la cartera |
| Modelo de financiación | Presupuestos anuales por proyecto | Algunos equipos estables | Equipos permanentes para los servicios clave | La financiación sigue los resultados y el aprendizaje del servicio | Financiación flexible entre servicios con inversión en plataformas compartidas |

## Lista de verificación

- [ ] Todo el gasto de TI se atribuye a servicios o se declara como gastos generales, con la cobertura con seguimiento.
- [ ] Las reglas de asignación y los generadores están escritos y revisados con los responsables de los servicios.
- [ ] Los costos fijos y variables están separados para cada servicio importante.
- [ ] Los costos unitarios usan unidades acordadas y estables y se sitúan junto a medidas de calidad.
- [ ] Las previsiones se registran al comienzo del periodo y se comparan con los valores reales.
- [ ] El showback está disponible para todo responsable de servicio, con un proceso de disputas.
- [ ] Se reporta el gasto o la capacidad de funcionamiento, cambio y mejora.
- [ ] Una parte de la capacidad está protegida para la mejora.
- [ ] Los cambios de regla y de unidad se marcan en los gráficos de tendencia.
- [ ] Ningún equipo ni persona se clasifica por el costo.

## Prompts de IA

**Propón generadores de costo para servicios compartidos.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Diseña un costo unitario y su compañero de calidad.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Prepara una revisión de showback.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Planifica el paso a la financiación de equipos permanentes.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de costos o de economía unitaria.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de costos indica su regla de asignación, su vector de manipulación y su compañero de calidad.

## Ideas clave

- Atribuye el costo a los servicios con generadores que la gente pueda seguir y muestra las reglas.
- Separa el costo fijo del variable y empareja cada costo unitario con una medida de calidad.
- Empieza por el showback y un proceso de disputas, y añade la repercusión de costos solo si cambia las decisiones.
- Financia equipos permanentes en torno a servicios donde puedas y protege la capacidad de mejora.
- Reporta rangos y tendencias y marca en los gráficos los cambios de regla.
- No clasifiques nunca a personas ni a equipos por el costo.

## Referencias y lecturas complementarias

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
