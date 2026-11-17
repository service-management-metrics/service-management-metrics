# Métricas de gobernanza y riesgo de la IA

**El uso de la IA necesita la misma disciplina que cualquier cambio en un servicio en vivo: saber dónde está, quién la posee, cuán arriesgada es, cómo se prueba y se cambia y qué ocurre cuando sale mal, con una supervisión que las personas puedan ejercer de verdad.**

## Visión general y motivación

La IA llega a una organización por muchas puertas. Un equipo adopta un asistente de programación. Un proveedor añade una función generativa a un producto que ya se usa. Un miembro del personal pega un documento en una herramienta pública. Un departamento construye un modelo para puntuar solicitudes. Cada uno es un uso de la IA con sus propios beneficios y riesgos, y pocos son visibles en un solo lugar. La gobernanza es el conjunto de estructuras, políticas y prácticas que hacen que esos usos sean conocidos, responsables y lo bastante seguros. Las métricas de riesgo dicen si la gobernanza funciona.

ITIL tiene los bloques de construcción: la gobernanza del sistema de valor del servicio, la gestión de riesgos, la habilitación de cambios, la gestión de la seguridad de la información, la gestión de proveedores y la mejora continua. Las formas de trabajar ágil y DevOps aportan el hábito del cambio pequeño, controlado y reversible y de las comprobaciones automatizadas en el pipeline. La gobernanza de la IA no necesita un universo aparte. Necesita estas prácticas aplicadas a cosas que se comportan de forma distinta del software convencional.

¿Qué tiene de diferente la IA?

- **El comportamiento es estadístico y puede cambiar sin un cambio de código.** Un modelo puede comportarse de otra manera tras una actualización del proveedor, un cambio en sus entradas o un cambio en el prompt. Los datos que ve en producción pueden derivar de los datos con que se probó, un fenómeno conocido en el aprendizaje automático como deriva. Un sistema puede degradarse en silencio.
- **Las salidas no son del todo predecibles.** Las pruebas no pueden cubrir cada entrada, así que la evaluación es por muestreo y por pruebas dirigidas, no por demostración. Los sistemas pueden fallar de maneras que sus constructores no previeron.
- **Los daños pueden ser difusos y desiguales.** El [sesgo algorítmico](https://en.wikipedia.org/wiki/Algorithmic_bias) es un error sistemático que conduce a resultados injustos para algunos grupos. Puede surgir de los datos, del diseño o del uso, y puede no aparecer en las cifras globales de exactitud.
- **Aparecen nuevas superficies de ataque.** La [inyección de prompts](https://en.wikipedia.org/wiki/Prompt_injection) es un ataque en que instrucciones ocultas en los datos de entrada manipulan a un modelo de lenguaje para que tenga un comportamiento no previsto. Se puede inducir a los modelos a revelar datos o a realizar acciones que sus propietarios no pretendían.
- **La dependencia de los proveedores es profunda.** Muchas capacidades de IA vienen de proveedores externos, con visibilidad limitada de cómo se construyen o se cambian. Las medidas de proveedores importan más (véase el tema 8.4, Métricas de proveedores y contratos).
- **Las reglas están surgiendo y difieren según el lugar.** Las leyes, los estándares y la orientación sobre la IA se desarrollan deprisa. La [Ley de Inteligencia Artificial](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) de la Unión Europea adopta un enfoque basado en el riesgo con obligaciones que se aplican por fases, y otras jurisdicciones siguen caminos distintos. Estándares como ISO/IEC 42001 sobre sistemas de gestión de la IA y el Marco de Gestión de Riesgos de IA del NIST ofrecen estructuras. Las afirmaciones de este tema sobre reglas concretas están fechadas a octubre de 2026 y deben volver a comprobarse, y el asesoramiento jurídico debe guiar tus obligaciones. El campo más amplio se describe de diversas formas como [IA responsable](https://en.wikipedia.org/wiki/Responsible_AI) o IA digna de confianza, y la cuestión de cómo debe tratar el derecho a la IA es el objeto de la [regulación de la inteligencia artificial](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

La gobernanza puede fallar de dos maneras opuestas. Puede ser tan pesada que los equipos la eviten, y el uso de la IA pasa a la clandestinidad como [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT). O puede ser un ejercicio de papel, con una política y un registro que no reflejan la práctica. Los fines ágiles sugieren el camino intermedio: implicación continua de las partes interesadas en fijar las reglas, aprobaciones pequeñas y rápidas para los usos de bajo riesgo, un escrutinio más profundo donde sea posible el daño y mejora continua de los controles a medida que crece la experiencia. Las personas motivadas con límites claros, en las que se confía para usar el juicio dentro de ellos, reportarán los problemas. Las personas que temen el castigo no lo harán.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a las medidas de gobernanza: cuando el «porcentaje de usos de IA registrados» es un objetivo, los registros se llenan de entradas que nadie lee y los usos reales siguen fuera de la vista (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en los temas de riesgo, cumplimiento y seguridad de la Parte 8 y en los temas anteriores de esta parte.

## Principios clave

- **Sabe dónde se usa la IA.** Un registro de usos, incluidos los incrustados en productos y los que el personal adopta por su cuenta, es el cimiento.
- **Ajusta el escrutinio al riesgo.** Ligero para los usos de bajo riesgo, más profundo para los que tienen consecuencias.
- **Trata los cambios de modelos y de prompts como cambios.** Necesitan pruebas, una aprobación proporcional al riesgo y la capacidad de revertir.
- **Evalúa antes y durante el uso.** Prueba con casos realistas y sigue probando en producción.
- **Mantén una supervisión humana significativa.** Una persona debe poder entender, cuestionar y anular, y tener el tiempo y la autoridad para hacerlo.
- **Aprende de los incidentes sin culpas.** Los fallos de la IA son nuevos, y reportarlos es como aprende la organización.
- **Haz rápida la aprobación de los casos seguros.** Una gobernanza lenta empuja el uso fuera de la vista.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura del registro de usos de IA | Proporción de usos de IA hallados por medios independientes que están en el registro con un responsable y una clase de riesgo | usos en el registro con responsable y clase de riesgo / usos hallados por descubrimiento independiente (contratación, gastos, identidad, red e informes del personal) | porcentaje | Registro, datos de contratación y de gastos, registros de identidad, encuestas | Gobernanza; gestión de activos de TI; gestión de riesgos | Trabajo visible y propiedad clara | Trimestral |
| Vigencia de la evaluación de riesgos | Proporción de usos de riesgo medio y alto con una evaluación de riesgos dentro del ciclo exigido | usos evaluados dentro del ciclo / usos de riesgo medio y alto | porcentaje | Evaluaciones de riesgos | Gestión de riesgos; gestión de la seguridad de la información | Reflexión regular sobre los riesgos | Trimestral |
| Cobertura del control de cambios | Proporción de cambios en modelos, prompts, herramientas y fuentes de datos en producción que pasaron por el control de cambios con las pruebas exigidas | cambios con registro de cambio, pruebas y aprobación proporcional al riesgo / cambios detectados | porcentaje | Registros de cambios comparados con el historial de versiones y las notas de versión de los proveedores | Habilitación de cambios; gestión de versiones y despliegues | Cambios pequeños, controlados y reversibles | Mensual |
| Vigencia de la evaluación | Proporción de usos en producción con una evaluación vigente (exactitud, seguridad e imparcialidad donde proceda) y resultados dentro de la tolerancia | usos con una evaluación dentro del ciclo y resultados aceptables / usos en producción dentro del alcance | porcentaje | Registros de evaluación | Aseguramiento de la calidad; gestión de riesgos | Definición de terminado para el comportamiento | Trimestral |
| Tasa de evidencia de supervisión humana | Proporción de salidas o decisiones con consecuencias muestreadas con una revisión humana sustantiva registrada | elementos muestreados con revisión documentada que podría haber cambiado el resultado / elementos muestreados | porcentaje | Registros de decisiones muestreadas | Gestión de riesgos; gobernanza | Revisión antes de la publicación | Mensual |
| Tasa de incidentes de IA y tiempo hasta la contención | Incidentes que implican IA (salida dañina, exposición de datos, acción insegura) por uso y el tiempo hasta contenerlos | incidentes por uso en producción por trimestre; mediana y percentil 85 de las horas desde la detección hasta la contención | incidentes; horas | Registros de incidentes etiquetados como IA | Gestión de incidentes; gestión de la seguridad de la información | Respuesta y aprendizaje sin culpas | Trimestral |
| Vigencia de la diligencia debida sobre la IA de los proveedores | Proporción de proveedores que ofrecen funciones de IA en servicios críticos cuya evaluación específica de IA está vigente | proveedores con evaluación de IA vigente / proveedores críticos con funciones de IA | porcentaje | Evaluaciones de proveedores | Gestión de proveedores; gestión de riesgos | Revisión regular de las dependencias | Trimestral |

Define «uso de IA» de forma amplia en el registro: modelos que construyes, servicios que compras, funciones dentro de productos y herramientas que usa el personal. Las clases de riesgo y los ciclos se fijan en la política. La cobertura del registro se mide frente al descubrimiento independiente, no frente al propio registro. La cobertura del control de cambios requiere una forma de detectar los cambios: control de versiones, avisos de proveedores, monitorización de la configuración. La evidencia de supervisión humana requiere que la revisión pudiera haber cambiado el resultado, no que se hiciera clic en un botón. Las tasas de incidentes describen usos y sistemas y no se usan para valorar a las personas.

## Recomendaciones

### Conoce y clasifica

**1. Construye el registro encontrando además de preguntando.** Empieza con una encuesta y una política, y comprueba después con los registros de contratación y de gastos, los registros de identidad y de acceso, los datos de facturación de red y de nube y las actualizaciones de productos de los proveedores. Incluye las funciones de IA incrustadas en herramientas que ya posees. Espera sorpresas: la gente usa herramientas que no aprobaste, a menudo por buenas razones. Trátalas como información (véase el tema 7.2, Métricas de activos de software y licencias).

**2. Asigna un responsable y una clase de riesgo a cada uso.** El responsable es la persona que responde del uso y de sus resultados. La clase de riesgo refleja el daño si el sistema falla: a quién afecta, si intervienen decisiones sobre personas, si actúa por sí mismo, qué datos toca y cuán reversibles son los efectos. Usa pocas clases con reglas claras. Apóyate en marcos reconocidos, como el Marco de Gestión de Riesgos de IA del NIST, ISO/IEC 42001 y la ley aplicable, y adáptalos a tu contexto.

**3. Haz proporcional la aprobación.** Para los usos de bajo riesgo basta un rápido registro de autoservicio con unas pocas preguntas. Para los usos con consecuencias, exige una evaluación de riesgos, resultados de evaluación, un diseño definido de supervisión humana y una autorización. Una vía rápida para la mayoría segura mantiene a la gente dentro del sistema, y una vía más lenta para los pocos peligrosos les da el escrutinio debido.

### Prueba y controla el cambio

**4. Evalúa con casos realistas, antes y durante el uso.** Construye un conjunto de casos de prueba que reflejen entradas reales, incluidas las difíciles y las adversarias, y puntúa las salidas frente a criterios escritos. Incluye comprobaciones de seguridad y de imparcialidad donde se pueda afectar a personas. Vuelve a ejecutar las evaluaciones según un calendario y siempre que cambie el modelo, el prompt o los datos. Un equipo rojo (red team), un grupo que ataca deliberadamente el sistema para encontrar debilidades, es una práctica útil para los usos de mayor riesgo. Véanse las prácticas de muestreo del trabajo asistido (véase el tema 10.2, Medición del trabajo asistido por IA).

**5. Pon los modelos, los prompts y las herramientas bajo control de cambios.** Versiona los prompts y las configuraciones como el código. Exige pruebas y una aprobación proporcional al riesgo para los cambios, regístralos y conserva la capacidad de revertir. Haz seguimiento de las actualizaciones de modelos impulsadas por el proveedor, que pueden cambiar el comportamiento sin aviso, y acuerda con los proveedores cómo se te informará. Trata una mejora de modelo como un cambio que necesita control (véase el tema 4.3, Métricas de habilitación de cambios).

**6. Monitoriza en producción.** Vigila la deriva de las entradas y de las salidas, el aumento de las tasas de error y de anulación y los patrones inusuales. Fija umbrales que activen una revisión. Para los sistemas que realizan acciones, monitoriza los registros de acciones. La monitorización es como encuentras los problemas que las pruebas se perdieron.

### Mantén real la supervisión humana

**7. Diseña una supervisión que pueda funcionar.** Una persona que revisa cada salida de un sistema rápido no puede seguir el ritmo, y una persona a la que se pide aprobar lo que no puede entender no está ejerciendo supervisión. Define qué hace el humano, con qué información, con cuánto tiempo y con qué autoridad para anular. Muestrea las revisiones para comprobar que son sustantivas. Está alerta al sesgo de automatización, la tendencia a aceptar la salida de la máquina (véase el tema 10.1, La IA en la medición de la gestión de servicios).

**8. Conserva rastros de auditoría.** Registra las entradas, las salidas, las versiones, las decisiones y las acciones de una manera que respalde la investigación, sujeta a las reglas de privacidad y a los límites de conservación. Un [rastro de auditoría](https://en.wikipedia.org/wiki/Audit_trail) te permite responder qué ocurrió y por qué. Para las decisiones con consecuencias sobre personas, considera qué explicación puedes dar y qué vía de apelación existe (véase el tema 8.3, Métricas de cumplimiento y auditoría).

**9. Protege los datos y resiste la manipulación.** Controla qué datos pueden ver y enviar los sistemas de IA. Prueba la inyección de prompts y la fuga de datos, especialmente en los sistemas que leen contenido externo o que tienen acceso a herramientas. Aplica los principios de mínimo privilegio usados para los agentes que actúan (véase el tema 10.3, Métricas de agentes de IA y chatbots, y el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades). Considera la privacidad desde el diseño e implica a especialistas en protección de datos.

### Responde y aprende

**10. Trata los incidentes de IA como incidentes.** Define qué cuenta: salidas dañinas o sesgadas, exposición de datos, acciones inseguras, errores significativos que llegan a los usuarios. Usa tu proceso normal de incidentes con la etiqueta de IA, revisa sin culpas y lleva las lecciones a las evaluaciones y los controles. Facilita el reporte al personal y a los usuarios. El tiempo hasta la contención importa tanto como en cualquier incidente (véase el tema 3.4, Métricas de incidentes graves).

**11. Gestiona la IA de los proveedores.** Pregunta a los proveedores qué funciones de IA usan, cómo se prueban y se cambian, cómo se tratan los datos y cómo se reportan los incidentes. Añade a los contratos cláusulas específicas de IA donde importe, incluido el aviso de cambios materiales de modelos. Vuelve a evaluar a los proveedores críticos con un ciclo (véase el tema 8.4, Métricas de proveedores y contratos).

**12. Revisa la propia gobernanza.** Cada trimestre, comprueba lo que muestran las medidas: dónde quedaron sin registrar los usos, qué aprobaciones fueron demasiado lentas, qué controles no detectaron problemas. Ajusta la política y las vías. Implica al personal y a los usuarios en la revisión. Mantén las reglas breves, claras y actuales, y retira los controles que no se ganan su costo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura del registro de usos de IA | Registrar usos triviales para subir el porcentaje; limitar los denominadores a lo registrado | Descubrimiento independiente para el denominador; muestrear la calidad de las entradas del registro; amnistía para los usos sin registrar |
| Vigencia de la evaluación de riesgos | Evaluaciones superficiales que siempre aprueban; evaluar los usos de bajo riesgo | Revisar la profundidad de la evaluación; comprobar que la clase de riesgo se ajusta a los criterios |
| Cobertura del control de cambios | No detectar los cambios del proveedor; registrar los cambios después del hecho | Detección mediante el historial de versiones y los avisos del proveedor; registros de cambios con marca de tiempo anterior a la publicación |
| Vigencia de la evaluación | Evaluaciones con casos fáciles; elegir las tolerancias después de ver los resultados | Conjuntos de prueba revisados por una parte independiente; umbrales fijados de antemano |
| Tasa de evidencia de supervisión humana | Hacer clic en aprobar sin leer; documentar una revisión que no podía cambiar el resultado | Muestrear las revisiones por su fondo; errores conocidos sembrados; carga de los revisores |
| Tasa de incidentes de IA y tiempo hasta la contención | No reportar los incidentes; estrechar la definición | Reporte fácil y sin culpas; comparar con las quejas de los usuarios y los hallazgos de auditoría |
| Vigencia de la diligencia debida sobre la IA de los proveedores | Cuestionarios contestados por marketing; evaluaciones sin evidencia | Requisitos de evidencia para proveedores críticos; verificación independiente |

Una lectura sana es un registro que el descubrimiento independiente confirma, evaluaciones que se ajustan al riesgo, cambios que pasan por control, evaluaciones al día, una supervisión que encuentra errores reales, incidentes reportados con naturalidad y contenidos con rapidez y proveedores que comparten lo que cambian.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Aprobación central de cada uso de IA | Control, coherencia | Lenta; empuja el uso a la clandestinidad |
| Registro de autoservicio con niveles de riesgo | Rápido para la mayoría segura | Necesita buenos criterios y comprobaciones puntuales |
| Prohibición de las herramientas públicas | Reduce la exposición de datos | Uso en la sombra; beneficios perdidos |
| Herramientas aprobadas con orientación | Uso visible y manejable | Necesita provisión y apoyo |
| Documentación pesada | Evidencia para la auditoría | Carga; puede no reflejar la práctica |
| Evaluación automatizada en el pipeline | Continua, coherente | Necesita buenos conjuntos de prueba; puede perder fallos nuevos |
| Revisión humana de todo | Seguridad | No escala; fatiga |
| Muestreo basado en el riesgo | Práctico | Algunos fallos se cuelan |

La respuesta en prosa es ofrecer herramientas aprobadas y una vía rápida para los usos de bajo riesgo, concentrar el escrutinio en los que tienen consecuencias, automatizar la evaluación y la monitorización y mantener la supervisión humana donde pueda funcionar de verdad.

## Preguntas para debatir con tu equipo

**1. ¿Dónde usamos hoy la IA sin que conste en ninguna lista?**
Pregunten al equipo con honestidad y ofrezcan amnistía. Miren las herramientas usadas para redactar, resumir, programar y analizar, incluidas las que están dentro de productos. El facilitador debe registrar los usos sin juzgar. Acuerden quién los registrará y cuáles necesitan una mirada más atenta.

**2. Si nuestro uso de IA con más consecuencias cometiera un error dañino, ¿cómo nos enteraríamos y qué haríamos?**
Recorran la detección, la contención, la comunicación y el aprendizaje. Anoten las brechas en monitorización, propiedad y autoridad para apagarlo. Acuerden una mejora.

**3. ¿Qué puede cambiar bajo nuestros pies sin que nadie lo apruebe?**
Enumeren modelos, prompts, fuentes de datos y actualizaciones de proveedores. Para cada uno, pregunten cómo sabríamos que cambió y cómo lo probaríamos. Acuerden dónde añadir detección o una prueba.

**4. ¿Podría la persona que revisa la salida de la IA en nuestro proceso detectar de forma realista un error grave?**
Miren el volumen, la información, el tiempo y la autoridad. Prueben con un error sembrado. Si la revisión no puede funcionar, rediseñen el proceso antes de añadir más IA.

**5. ¿Cuáles de nuestras reglas le resultarían fáciles de seguir a un colega ocupado y cuáles eludiría?**
Enumeren las reglas actuales y contrástenlas con flujos de trabajo reales. Hablen de por qué se eluden las reglas. Acuerden cambios que hagan que la vía segura sea la fácil.

**6. ¿Qué nos han dicho nuestros proveedores de su IA y qué no hemos preguntado?**
Revisen los cuestionarios y los contratos recientes. Identifiquen los proveedores críticos con funciones de IA y las brechas de información. Acuerden preguntas para la próxima revisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega construyen y adoptan funciones de IA, y sienten la gobernanza como fricción o como ayuda. Deben registrar pronto los usos, probar con casos realistas, poner los prompts y los modelos bajo control de versiones y diseñar una supervisión que funcione. Se benefician de una aprobación rápida para los usos de bajo riesgo.

### Equipos de servicio y de operaciones

Los equipos de operaciones ejecutan la IA en producción y responden a sus incidentes. Deben monitorizar la deriva, conservar registros de acciones, etiquetar los incidentes de IA y tener la autoridad y los medios para apagar un sistema. Usan además ellos mismos la IA y deben seguir las mismas reglas.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y responden de los resultados. Deben financiar el registro, la evaluación y la monitorización, aceptar que algunos usos de la IA no pasarán, pedir el descubrimiento independiente de los usos y hacer seguimiento de los incidentes y del tiempo hasta la contención. Los órganos de gobernanza deben mantener breves las reglas, revisarlas con regularidad y asegurar que el personal y los usuarios tengan voz.

### Clientes y usuarios

Los usuarios se ven afectados por las decisiones y las salidas de la IA, a menudo sin saberlo. Merecen saber cuándo interviene la IA en asuntos que les afectan, poder llegar a una persona y poder impugnar las decisiones. Las quejas y las apelaciones son una evidencia esencial sobre cómo funciona la gobernanza en la práctica.

## En la práctica: un ejemplo de gestión de servicios

La división de tecnología y operaciones de un banco regional adopta una política de IA después de que un miembro del personal pegue datos de clientes en una herramienta pública. El equipo de cumplimiento publica un registro y espera que se enumere cada uso. Los números siguientes son ilustrativos.

Tres meses después el registro enumera 38 usos de IA. El jefe de riesgo tecnológico comprueba por medios independientes: datos de contratación y de gastos, registros de identidad que muestran inicios de sesión en servicios de IA, datos de red y una encuesta anónima al personal. El descubrimiento halla 94 usos, así que la cobertura del registro es del 40 por ciento. Diecisiete son funciones dentro de herramientas que el banco ya tiene con licencia, y doce son herramientas públicas usadas por el personal. De los 38 usos registrados, solo 14 tienen una clase de riesgo, y los tres de mayor riesgo, un modelo que puntúa alertas de fraude, un chatbot para clientes y una herramienta que resume quejas, no tienen una evaluación en el último año. Los cambios en la configuración del modelo de fraude y en los prompts del chatbot los hacen directamente los equipos, y los registros de cambios del último trimestre cubren el 21 por ciento de los cambios hallados en el historial de versiones. Una muestra de 60 alertas de fraude descartadas por el modelo muestra una revisión humana registrada en 52 de ellas, pero un conjunto sembrado de cinco omisiones conocidas fue detectado por un solo revisor, porque cada revisor gestiona varios cientos de alertas al día. Un incidente, en que el chatbot dio a los clientes un importe desactualizado de una comisión, se descubrió por una queja, y llevó seis días contenerlo porque nadie tenía autoridad para apagarlo.

El jefe de riesgo tecnológico rediseña la gobernanza con los equipos. Un breve registro de autoservicio con cinco preguntas coloca en minutos los usos de bajo riesgo en el registro, y un periodo de amnistía anima al personal a enumerar las herramientas que usa. Las clases de riesgo se basan en el daño, los datos y la autonomía. Los usos de mayor riesgo necesitan una evaluación, una evaluación frente a casos realistas y adversarios y un diseño de supervisión definido. Los modelos, los prompts y las herramientas pasan a control de cambios con pruebas proporcionales al riesgo, y los prompts del chatbot se versionan con reversión. El proceso de alertas de fraude se rediseña para que los revisores gestionen menos alertas y mejor priorizadas, y errores sembrados prueban su detección. Un responsable con nombre de cada uso de alto riesgo tiene la autoridad para apagarlo, y la respuesta a incidentes cubre la IA. Se pregunta a los proveedores de nube y de IA del banco qué funciones de IA usan y cómo se notifican los cambios.

Dos trimestres después, la cobertura del registro por descubrimiento independiente es del 88 por ciento, todos los usos de alto riesgo están evaluados y valorados dentro del ciclo, la cobertura del control de cambios es del 84 por ciento, la detección de errores sembrados por los revisores sube a 4 de 5 y el tiempo mediano para contener un incidente de IA es de 3 horas. El personal usa herramientas aprobadas para la mayoría de las tareas. Un ejecutivo sénior pide un objetivo del 100 por ciento de cobertura del registro. El jefe de riesgo tecnológico propone hacer seguimiento de la cobertura frente al descubrimiento independiente, de la vigencia de las evaluaciones y de la gestión de incidentes, y explica que un registro sin descubrimiento puede llegar al 100 por ciento y aun así pasar por alto el riesgo. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Gobierna la IA como un cambio en un servicio en vivo, con una revisión ligera y regular y con las partes interesadas en la mesa, en lugar de una aprobación única. La precaución es que unas puertas de aprobación pesadas hacen que los equipos escondan el uso de la IA.

### IA

Mantén un registro de cada uso de la IA con un responsable, una clase de riesgo, una fecha de evaluación y un punto de supervisión humana, y mide la cobertura frente al descubrimiento independiente. Prueba que la supervisión pueda ejercerse. La precaución es que este libro no da asesoramiento jurídico, y las obligaciones varían según el lugar y con el tiempo, así que compruébalas con tu propio asesor jurídico.

### Automatización

Automatiza el descubrimiento y la recogida de evidencia para los cambios de modelos, prompts y datos, y mide la automatización por los cambios que se le escapan. La precaución es que los conjuntos de evaluación automatizados prueban aquello para lo que se construyeron, así que añade pruebas nuevas a medida que aparezcan fallos.

### Analítica

Reporta la vigencia de las evaluaciones de riesgos y de las evaluaciones con fechas y recuentos. La decisión a la que informa es dónde es escasa la supervisión. La precaución es que los recuentos de incidentes de IA son pequeños y desiguales, así que combínalos con reportes de cuasi accidentes.

## Perspectiva sectorial

**Startup.** La velocidad importa y los riesgos son sobre todo la exposición de datos y las salidas poco fiables. Mantén una lista corta de herramientas y usos con responsables, fija unas pocas reglas claras sobre qué datos pueden usarse y dónde, y versiona los prompts. Vuelve a revisarlo a medida que crezcan las exigencias de garantías de los clientes.

**Pequeña empresa.** El personal usará herramientas públicas. Ofrece una opción aprobada, escribe una regla de una página sobre los datos y revisa cómo se usan las herramientas. Pregunta a los proveedores por sus funciones de IA y conserva un registro de dónde decide la IA sobre clientes o personal.

**Gran empresa.** La escala necesita un modelo operativo: registro, niveles de riesgo, estándares de evaluación, control de cambios y proceso de incidentes, integrados con las funciones existentes de riesgo y seguridad. Usa el descubrimiento independiente, automatiza la evaluación en los pipelines y alinéate con los estándares. Da a los equipos una vía rápida.

**Gobierno y sector público.** Las decisiones que afectan a la ciudadanía traen deberes de transparencia, imparcialidad y apelación, y los marcos de contratación y jurídicos dan forma a lo permitido. Mantén registros públicos de los usos de alto impacto donde se exija, evalúa el impacto sobre los derechos, mantén a los humanos en el bucle de forma significativa y comprueba la ley y la orientación vigentes (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen el esfuerzo de construir y mantener el registro, las herramientas o el análisis de descubrimiento, las evaluaciones de riesgos, los conjuntos de evaluación y sus ejecuciones, el control de cambios de prompts y modelos, la monitorización, la formación y la capacidad de respuesta a incidentes. La gobernanza añade además algo de retraso para los usos de mayor riesgo. Estos costos escalan con el número y el riesgo de los usos, lo que es una razón para mantener ligera la aprobación de bajo riesgo.

Los retornos incluyen el daño y la exposición evitados, menos sorpresas en las auditorías y las revisiones regulatorias, una adopción segura más rápida gracias a reglas claras y la confianza de clientes y personal. Construye el caso con tus propios datos: el número de usos hallados fuera del registro y los datos que tocan, los incidentes y su costo, el tiempo dedicado a aprobaciones ad hoc antes y después y los hallazgos de las auditorías. Evita citar estadísticas publicadas sobre incidentes de IA o multas sin una fuente rastreable y una pertinencia para tu contexto. Incluye el costo de no gobernar, que incluye la posibilidad de un daño jurídico y reputacional significativo (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Un registro que nadie comprueba.** La cobertura parece alta y pasa por alto los usos reales. Usa el descubrimiento independiente.
- **Prohibiciones generales.** Empujan el uso a la clandestinidad. Ofrece herramientas aprobadas y una vía rápida.
- **Tratar los prompts y los modelos como configuración que nadie posee.** El comportamiento cambia sin que se note. Ponlos bajo control de cambios.
- **Evaluar una sola vez.** Los sistemas derivan y cambian. Vuelve a ejecutar según un calendario y ante los cambios.
- **Supervisión solo de nombre.** Los revisores no pueden detectar lo que no ven. Prueba con errores sembrados y corrige la carga.
- **Sin autoridad para apagar.** La contención lleva días. Nombra responsables con el poder de detener un sistema.
- **Ignorar la IA de los proveedores.** Tu riesgo incluye el suyo. Pregunta, contrata y vuelve a evaluar.
- **Reglas que nadie puede seguir.** Se eluden. Mantenlas breves y haz fácil la vía segura.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Conocer y clasificar | Sin visión del uso de la IA | Política y una lista parcial | Registro con responsable y clase de riesgo; descubrimiento independiente usado para la cobertura | Cobertura, vigencia de las evaluaciones de riesgos y tiempos de aprobación gestionados | Visión compartida del registro entre unidades de negocio y proveedores; clases revisadas con reguladores y usuarios |
| Pruebas y cambio | Ad hoc | Alguna evaluación para algunos usos | Evaluación con casos realistas; prompts y modelos bajo control de cambios | Evaluación continua y monitorización de la deriva; cobertura gestionada | Evaluación y cambio automatizados y basados en el riesgo en los pipelines, auditados de forma independiente |
| Supervisión y aprendizaje | Confianza como único apoyo | La revisión existe en principio | Supervisión diseñada y muestreada; incidentes de IA etiquetados y revisados sin culpas | Pruebas de errores sembrados, tiempo hasta la contención y evaluaciones de proveedores gestionados | Supervisión, aprendizaje de incidentes y política desarrollados conjuntamente con el personal, los usuarios y los socios |

## Lista de verificación

- [ ] Un registro enumera los usos de la IA con un responsable y una clase de riesgo, comprobado frente al descubrimiento independiente.
- [ ] Existe una vía rápida para los usos de bajo riesgo y una más profunda para los que tienen consecuencias.
- [ ] Los usos de mayor riesgo tienen una evaluación de riesgos vigente y un diseño de supervisión definido.
- [ ] Las evaluaciones con casos realistas y adversarios están al día y se repiten ante los cambios.
- [ ] Los prompts, los modelos, las herramientas y las fuentes de datos están versionados y bajo control de cambios.
- [ ] La monitorización en producción vigila la deriva, los errores, las anulaciones y las acciones inusuales.
- [ ] La supervisión se prueba con errores sembrados y la carga de los revisores es realista.
- [ ] Los rastros de auditoría respaldan la investigación dentro de las reglas de privacidad y conservación.
- [ ] Los incidentes de IA se etiquetan, se revisan sin culpas y los responsables pueden apagar los sistemas.
- [ ] Los proveedores con funciones de IA se evalúan y se obligan a notificar los cambios materiales.

## Prompts de IA

**Redacta una clasificación de riesgo para los usos de IA.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Diseña un formulario de registro.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Planifica un conjunto de evaluación.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Revisa un incidente de IA.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de gobernanza o de riesgo de la IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de gobernanza de la IA usa evidencia independiente y lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Construye el registro de la IA mediante descubrimiento independiente y ajusta el escrutinio al riesgo con una vía rápida para los usos seguros.
- Trata los modelos, los prompts, las herramientas y las fuentes de datos como cambios que necesitan pruebas, aprobación y reversión.
- Evalúa antes del uso y durante el uso, con casos realistas y adversarios.
- Diseña una supervisión humana que pueda funcionar y pruébala con errores sembrados.
- Trata los incidentes de IA como los demás incidentes, con revisión sin culpas, y da a los responsables el poder de apagar los sistemas.
- Pregunta a los proveedores por su IA y mantén breves las reglas y fácil la vía segura.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
