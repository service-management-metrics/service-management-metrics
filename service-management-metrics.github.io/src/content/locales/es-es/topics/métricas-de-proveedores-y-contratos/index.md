# Métricas de proveedores y contratos

**Los proveedores forman parte de tu servicio, así que mide lo que entregan, cuánto dependes de ellos y si podrías irte, y construye la relación en torno a resultados compartidos y a una conversación regular, no en torno a penalizaciones y sorpresas.**

## Visión general y motivación

Casi ningún servicio lo construye y lo opera un solo equipo. Los proveedores de nube lo alojan, los fabricantes suministran el software, los contratistas dotan de personal el centro de servicios, una empresa de telecomunicaciones transporta el tráfico y un socio de pagos mueve el dinero. Cuando uno de ellos falla, tus usuarios no distinguen entre tu fallo y el suyo. La [gestión de proveedores](https://en.wikipedia.org/wiki/Vendor_management) es la disciplina de seleccionar, contratar, monitorizar y, cuando es necesario, abandonar proveedores. La práctica de gestión de proveedores de ITIL la describe como asegurar que los proveedores y su rendimiento se gestionan adecuadamente para respaldar la entrega del servicio sin lagunas.

La [externalización](https://en.wikipedia.org/wiki/Outsourcing) traslada trabajo a un tercero y no traslada la responsabilidad: la organización sigue respondiendo ante sus clientes y reguladores. Los contratos son, por tanto, un medio de coordinación y de reparto del riesgo, no una transferencia de responsabilidad. Cuando intervienen muchos proveedores, el [multiabastecimiento](https://en.wikipedia.org/wiki/Multisourcing) y la práctica de [integración y gestión de servicios](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) los coordinan para que el usuario vea un solo servicio. Las medidas de este tema describen la salud de esa red.

Los valores ágiles dan una orientación útil. El Manifiesto Ágil declara una preferencia por la colaboración con el cliente sobre la negociación contractual. Eso no significa ignorar los contratos, que reparten riesgo y dinero reales. Significa construir relaciones en que proveedor y cliente trabajan en los mismos resultados, comparten información pronto y se ajustan a medida que aprenden. Los proveedores tratados como socios te cuentan antes los problemas. Los proveedores que temen las penalizaciones los esconden. La medición debe apoyar el primer patrón.

Cuatro problemas se repiten en la medición de proveedores.

- **Informes en verde y usuarios descontentos.** Un proveedor puede cumplir todos los niveles de servicio contractuales y aun así entregar una mala experiencia, un patrón que el tema anterior sobre acuerdos de nivel de servicio llama el efecto sandía (véase el tema 5.1, Métricas de SLA, OLA y XLA). El contrato mide lo que dice, y los usuarios experimentan algo más amplio.
- **Concentración y bloqueo.** Depender mucho de un proveedor es eficiente hasta que falla o sube sus precios. El [bloqueo por proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in) (vendor lock-in) hace costoso el cambio, y el costo crece en silencio con cada integración.
- **Dependencias ocultas.** Tus proveedores tienen proveedores. Un [ataque a la cadena de suministro](https://en.wikipedia.org/wiki/Supply_chain_attack) apunta a un proveedor de confianza para llegar a sus clientes, y un fallo en un subcontratista puede alcanzarte sin que tu proveedor directo se ponga en contacto.
- **La salida como ocurrencia tardía.** Muchos contratos se firman sin un plan para terminarlos. Una [estrategia de salida](https://en.wikipedia.org/wiki/Exit_strategy) que nunca se ha probado puede no funcionar cuando se necesite.

Otra consideración es la forma del contrato. La [contratación basada en el rendimiento](https://en.wikipedia.org/wiki/Performance-based_contracting) ata el pago a los resultados, y puede alinear intereses cuando los resultados son claros y medibles. Puede también invitar a la manipulación cuando las medidas son estrechas. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica en ambos sentidos: los proveedores optimizan el nivel de servicio medido y los compradores optimizan sus ahorros reportados (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en los registros de la parte anterior, en especial los datos de software y financieros (véase el tema 7.2, Métricas de activos de software y licencias, y el tema 7.5, Costo del servicio y economía unitaria), y prepara los deberes de reporte que a menudo recaen en los organismos públicos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Principios clave

- **Sigues siendo responsable.** Los contratos reparten riesgo y dinero, y no trasladan la responsabilidad ante los usuarios y los reguladores.
- **Mide los resultados y la experiencia además de las condiciones del contrato.** Un informe contractual en verde puede esconder un mal servicio.
- **Conoce tus dependencias.** Cartografía los proveedores críticos, sus subcontratistas clave y los servicios que se apoyan en ellos.
- **Planifica la salida antes de firmar.** Un plan de salida sin probar es una esperanza.
- **Colabora con regularidad.** Las revisiones conjuntas frecuentes y sinceras valen más que las reuniones de crisis anuales.
- **Comparte los datos abiertamente.** Ambas partes se benefician de los mismos números.
- **Diferencia a los proveedores por criticidad.** Dedica el esfuerzo de gestión donde un fallo dolería más.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cumplimiento de los niveles de servicio del proveedor | Proporción de medidas de nivel de servicio contratadas que cumple un proveedor, emparejada con una medida de experiencia del mismo servicio | medidas cumplidas en el periodo / medidas contratadas; reportado junto a la puntuación de experiencia del usuario para el servicio | porcentaje | Informes del proveedor, tu propia monitorización, datos de encuestas | Gestión de proveedores; gestión de niveles de servicio | Revisión de la contribución de un socio a los objetivos | Mensual |
| Tiempo de incidentes atribuido al proveedor | Horas de impacto en el servicio atribuidas a un componente o acción de un proveedor | suma de las horas de impacto de los incidentes en que un fallo del proveedor fue una causa confirmada | horas | Registros de incidentes con análisis de causa, informes de incidentes del proveedor | Gestión de incidentes; gestión de proveedores | Tiempo perdido por bloqueos externos | Mensual |
| Cobertura del registro de contratos | Proporción de proveedores con un contrato vigente, un responsable interno con nombre y una revisión programada | proveedores con los tres elementos / proveedores del ámbito | porcentaje | Registro de contratos, registros de compras | Gestión de proveedores; gestión financiera | Propiedad clara de las dependencias externas | Trimestral |
| Vigencia de la diligencia debida | Proporción de proveedores críticos cuya evaluación de riesgos está dentro de su ciclo de revisión | proveedores críticos evaluados dentro del ciclo / proveedores críticos | porcentaje | Evaluaciones de riesgo de proveedores | Gestión de proveedores; gestión de riesgos; gestión de la seguridad de la información | Revisión regular de riesgos | Trimestral |
| Preparación de la salida | Proporción de proveedores críticos con un plan de salida documentado que se ha probado dentro del periodo acordado | proveedores críticos con un plan de salida probado / proveedores críticos | porcentaje | Planes de salida y registros de pruebas | Gestión de proveedores; gestión de la continuidad del servicio | Recuperación practicada de una dependencia | Anual |
| Concentración | Proporción de servicios críticos que dependen de un único proveedor sin alternativa probada | servicios críticos con una dependencia de un único proveedor y sin alternativa probada / servicios críticos | porcentaje | Mapa de dependencias, registro de proveedores | Gestión de proveedores; gestión de riesgos | Evitar un punto único de fallo | Trimestral |
| Tasa de cierre de acciones conjuntas | Proporción de acciones acordadas en las revisiones conjuntas con los proveedores que se cerraron en su fecha de vencimiento | acciones conjuntas cerradas en fecha / acciones conjuntas vencidas | porcentaje | Actas de las revisiones y seguimiento de acciones | Gestión de proveedores; mejora continua | Acciones de la retrospectiva entregadas | Trimestral |

Define la criticidad en el registro, con los criterios, y aplícala de forma coherente. Una medida de nivel de servicio está «cumplida» tal como se define en el contrato, y la medida de experiencia es la que eliges para el mismo servicio. El tiempo de incidentes atribuido al proveedor cuenta solo las causas confirmadas, y el método de atribución se acuerda con el proveedor donde sea posible. La preparación de la salida cuenta un plan como probado solo cuando se ha registrado en el periodo un recorrido o un ejercicio.

## Recomendaciones

### Conoce a tus proveedores y lo que depende de ellos

**1. Mantén un registro de proveedores con responsables y criticidad.** Enumera cada proveedor con contrato, qué proporciona, el responsable interno, las fechas del contrato y la criticidad. Incluye los servicios gratuitos o informales en que se apoyan tus equipos. La criticidad es un juicio sobre el daño si el proveedor falla, y decide cuánta atención de gestión recibe la relación.

**2. Cartografía la cadena de dependencias de los servicios críticos.** Para cada servicio crítico, enumera los proveedores de los que depende y, donde puedas, sus subcontratistas clave y plataformas compartidas. Usa los registros de configuración para los vínculos internos y pregunta a los proveedores por sus dependencias críticas (véase el tema 7.4, Métricas de calidad de la configuración y la CMDB). El mapa muestra el riesgo de concentración y te dice dónde te alcanzaría una caída en otra parte.

**3. Evalúa el riesgo de forma proporcionada.** Usa una evaluación breve y estándar para los proveedores de bajo riesgo y una más profunda para los críticos, que cubra seguridad, resiliencia, estabilidad financiera y cumplimiento. Reevalúa según un ciclo y cuando algo cambie. Comparte los resultados con el proveedor y acuerda acciones. Normas como la ISO/IEC 27036 dan orientación sobre la seguridad de la información en las relaciones con proveedores.

### Escribe contratos para resultados y cooperación

**4. Define niveles de servicio que reflejen lo que experimentan los usuarios.** Incluye medidas contratadas que se relacionen con los resultados del usuario, como la rapidez de la acción de cara al usuario, además de la disponibilidad de los componentes. Pide los datos para comprobarlas tú mismo. Un [acuerdo de nivel de servicio](https://en.wikipedia.org/wiki/Service-level_agreement) con medidas que nadie puede verificar, o que no coinciden con lo que sienten los usuarios, produce el efecto sandía.

**5. Prefiere objetivos compartidos a las penalizaciones por sí solas.** Los créditos por objetivos incumplidos son habituales y tienen su lugar, pero un contrato construido sobre todo en penalizaciones vuelve adversarial la relación y menos honestos los datos. Donde sea posible, incluye objetivos compartidos, revisiones conjuntas regulares y reparto de las ganancias por mejoras. Revisa el incentivo por los efectos secundarios que pueda causar.

**6. Planifica la salida en el contrato.** Incluye la exportación de datos en formatos utilizables, apoyo durante la transición, un preaviso razonable y claridad sobre la propiedad intelectual y la propiedad de las configuraciones. Pregunta cuánto costaría irse y anótalo. Un contrato sin condiciones de salida te deja negociando bajo presión.

### Gestiona la relación

**7. Celebra revisiones conjuntas regulares.** Reúnete con una cadencia que convenga a la criticidad, con una breve agenda estándar: resultados, incidentes, riesgos, cambios próximos y acciones. Comparte tus propias medidas con el proveedor y pide las suyas. Haz seguimiento de las acciones y de su cierre. Trata la reunión como una sesión de trabajo entre socios e invita a las personas que hacen el trabajo.

**8. Comparte la información de incidentes con rapidez y apertura.** Acuerda cómo y con qué rapidez se notificará cada parte a la otra, y revisa conjuntamente y sin culpas los incidentes significativos (véase el tema 3.4, Métricas de incidentes graves). Mide el tiempo de incidentes atribuido al proveedor para ver dónde está el mayor impacto y úsalo en la conversación, no como un garrote.

**9. Combina los datos del contrato con la experiencia del usuario.** Para cada servicio de proveedor crítico, pon las medidas contratadas junto a las medidas de satisfacción o de esfuerzo de los usuarios (véase el tema 6.2, Acuerdos de nivel de experiencia). El desacuerdo entre ambas es el punto de partida de una discusión.

**10. Coordina a los proveedores en un solo servicio.** Donde varios proveedores contribuyen a un servicio, acuerda quién posee el resultado de extremo a extremo, cómo funcionan los traspasos y quién se comunica con los usuarios. Las prácticas SIAM lo formalizan. Mide el retraso de los traspasos y las escaladas repetidas entre proveedores (véase el tema 9.3, Métricas de colaboración y traspasos).

### Reduce la concentración y prepárate para irte

**11. Mide la concentración y decide deliberadamente.** Reporta la proporción de servicios críticos que dependen de un único proveedor sin alternativa probada. La concentración es a veces la elección correcta, porque aporta sencillez y peso negociador. Haz de ella una decisión con un responsable, un costo y una fecha de revisión, y no un accidente.

**12. Prueba la salida.** Para los proveedores críticos, recorre el plan de salida al menos una vez en un periodo definido: ¿puedes exportar los datos?, ¿existe la alternativa?, ¿cuánto tardaría?, ¿qué se rompería? Un ejercicio de mesa revela brechas a bajo costo. Registra los resultados y corrige las brechas, y actualiza el plan cuando cambie la arquitectura.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cumplimiento de los niveles de servicio del proveedor | El proveedor excluye eventos de la medición; pausas del reloj; definiciones estrechas | Monitorización propia; medida de experiencia; auditoría de las exclusiones |
| Tiempo de incidentes atribuido al proveedor | Disputar la atribución; clasificar fallos del proveedor como del lado del cliente | Revisión conjunta de la causa; revisor neutral para las disputas; seguir la proporción disputada |
| Cobertura del registro de contratos | Nombrar responsables que no lo saben; enumerar contratos sin fechas | Confirmación del responsable; comprobar que se celebran las reuniones de revisión |
| Vigencia de la diligencia debida | Evaluaciones solo por cuestionario; los proveedores se autocertifican | Requisito de evidencia para los proveedores críticos; verificación por muestreo |
| Preparación de la salida | Escribir un plan y llamarlo probado; ejercicios sin pasos reales | Registrar lo que se ejercitó; revisión independiente del ejercicio |
| Concentración | Dividir un proveedor en varias entidades jurídicas sobre el papel | Mapa de dependencias hasta el proveedor final; revisar las plataformas compartidas |
| Tasa de cierre de acciones conjuntas | Fijar acciones fáciles; cerrar sin efecto | Revisar la calidad de las acciones; comprobar que mejoró el problema que se pretendía |

Una lectura sana es un registro de proveedores con responsables activos, niveles de servicio que coinciden con la experiencia de los usuarios, incidentes comentados abiertamente, concentración elegida deliberadamente y planes de salida que se han ejercitado.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Proveedor único | Sencillez, peso negociador, integración | Riesgo de concentración, bloqueo |
| Varios proveedores | Resiliencia, elección | Costo de integración, carga de coordinación |
| Contrato cargado de penalizaciones | Remedios claros | Adversarial; esconde los problemas |
| Asociación con objetivos compartidos | Datos honestos, aprendizaje más rápido | Necesita confianza y madurez; remedios menos claros |
| Pago basado en resultados | Alinea los incentivos | Difícil de definir y medir los resultados; manipulación |
| Pago basado en insumos | Sencillo, predecible | Premia el esfuerzo, no los resultados |
| Revisiones conjuntas frecuentes | Aviso temprano | Costo de tiempo |
| Solo revisiones anuales | Bajo costo | Lentas para captar los problemas |

La respuesta en prosa es reservar los remedios contractuales para los casos graves, construir las relaciones cotidianas en torno a resultados compartidos y datos abiertos, y elegir la concentración a propósito. Ajusta la intensidad de la gestión a la criticidad del proveedor.

## Preguntas para debatir con tu equipo

**1. ¿Qué fallo de un proveedor perjudicaría más a nuestros usuarios y cuál es nuestro plan?**
Nombren las tres dependencias principales. Para cada una, pregunten qué pasaría en una caída prolongada y cuál es el plan. El facilitador debe buscar dependencias sin plan, sin responsable o sin alternativa probada. Acuerden una en la que trabajar primero.

**2. ¿Dónde discrepa un informe contractual en verde de lo que nos dicen los usuarios?**
Tomen un servicio de proveedor y comparen las medidas del contrato con la opinión de los usuarios. Pregunten cuál es más fiable y por qué. La conversación suele encontrar un nivel de servicio que mide lo que no toca. Acuerden plantearlo en la próxima revisión conjunta.

**3. ¿Quién del equipo posee cada relación crítica con un proveedor y con qué frecuencia se reúnen?**
Comprueben el registro. Si un responsable no se ha reunido con el proveedor en meses, pregunten por qué. Acuerden una cadencia y una agenda estándar para los más críticos.

**4. ¿Qué haría falta para dejar a nuestro mayor proveedor?**
Estimen el tiempo, el costo y el riesgo de la salida. Pregunten qué datos, integraciones y habilidades nos atan. Decidan si la dependencia es una elección deliberada y qué la cambiaría.

**5. ¿Cómo nos enteramos de un incidente de un proveedor y con qué rapidez?**
Revisen los dos últimos incidentes de proveedores y el tiempo desde su comienzo hasta que lo supimos. Comprueben las condiciones de notificación. Acuerden mejoras, como fuentes de estado compartidas o un contacto con nombre.

**6. ¿Qué compartimos con nuestros proveedores y qué comparten ellos con nosotros?**
Enumeren los datos que aporta cada parte. Hablen de qué intercambio adicional ayudaría, como previsiones de demanda o aviso previo de cambios. Consideren la confidencialidad y acuerden un intercambio con el que empezar.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega dependen de los proveedores para plataformas, componentes y servicios, y sienten directamente los cambios de los proveedores. Deben mantener visibles las dependencias en el diseño, dar a los proveedores aviso temprano de los cambios de demanda y participar en las revisiones conjuntas. Pueden construir resiliencia en sus servicios, por ejemplo con alternativas, para que el fallo de un proveedor no lo detenga todo.

### Equipos de servicio y de operaciones

Los equipos de operaciones gestionan la relación del día a día: plantear incidentes, seguir el rendimiento y coordinar traspasos. Tienen la evidencia del impacto atribuido a los proveedores y de la experiencia de trabajar con cada uno. Deben registrar con cuidado la atribución, mantener funcionando los canales de notificación y participar en los ejercicios de salida.

### Liderazgo y gobernanza

Los líderes firman los contratos y aceptan el riesgo. Deben pedir informes de criticidad, concentración y preparación de la salida, fijar expectativas de asociación y evitar elegir proveedores solo por el precio. La gobernanza debe exigir una diligencia debida proporcional a la criticidad y evidencia de que los planes de salida se probaron.

### Clientes y usuarios

Los usuarios experimentan el resultado combinado de la red de proveedores. Necesitan una comunicación clara cuando un problema de un proveedor les afecta y un soporte coherente sea cual sea la parte con la culpa. Su opinión es la comprobación de si el rendimiento del proveedor, tal como se reporta, coincide con la realidad.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un grupo hospitalario regional da soporte a sistemas clínicos con unos 60 proveedores, entre ellos un proveedor de alojamiento, un fabricante de historias clínicas electrónicas, un operador de red y un centro de servicios gestionado. Los números siguientes son ilustrativos.

Tras una larga caída del sistema de historias clínicas, el consejo pregunta cuántas dependencias así existen. La jefa de gestión de proveedores construye el panorama. El registro de proveedores cubre 47 de 60 proveedores conocidos con contrato vigente, responsable y fecha de revisión, una cobertura del 78 por ciento. La diligencia debida está vigente para 6 de 14 proveedores críticos. De 22 servicios críticos, 9 dependen de un único proveedor sin alternativa probada, una concentración del 41 por ciento, y dos de esos proveedores comparten la misma plataforma de alojamiento. El centro de servicios gestionado reporta un 98 por ciento de cumplimiento del nivel de servicio, mientras la satisfacción del personal clínico con el centro está bajando, y el informe mensual muestra que los incidentes que esperan al segundo nivel del proveedor están excluidos del tiempo de respuesta medido. En el último trimestre, el tiempo de incidentes atribuido al proveedor sumó 53 horas, tres cuartas partes de ellas de dos proveedores. El plan de salida del fabricante de historias clínicas existe sobre el papel y nunca se ejercitó.

La jefa de gestión de proveedores acuerda cambios con los responsables de los sistemas clínicos y con los proveedores. Los proveedores críticos reciben una revisión conjunta trimestral con una agenda compartida y datos de ambas partes. El contrato del centro de servicios se modifica para medir el tiempo hasta la resolución desde el punto de vista del usuario, y el proveedor acuerda compartir sus datos de cola. Se añade una breve encuesta de experiencia junto a las medidas del contrato. La diligencia debida de los proveedores críticos pasa a un ciclo anual con peticiones de evidencia. El equipo ejecuta un ejercicio de mesa de salida para el fabricante de historias clínicas, que descubre que el formato de exportación de datos no incluye la pista de auditoría y que la alternativa tardaría meses en prepararse. El hallazgo pasa a la siguiente negociación del contrato. El grupo decide además cuáles de las nueve dependencias de un único proveedor aceptar deliberadamente y cuáles reducir.

Un año después, la cobertura del registro es del 96 por ciento, la diligencia debida está vigente para 13 de 14 proveedores críticos y la concentración es del 27 por ciento, con cada caso restante anotado como una decisión aceptada. El tiempo de incidentes atribuido al proveedor baja a 22 horas por trimestre. La medida contractual del centro de servicios y la puntuación de satisfacción clínica se mueven ahora juntas. El director financiero pide una cláusula que imponga penalizaciones económicas por cualquier nivel de servicio incumplido en todos los proveedores. La jefa de gestión de proveedores propone penalizaciones solo para las medidas críticas relacionadas con la seguridad y objetivos compartidos para el resto, explicando que las penalizaciones uniformes llevan a los proveedores a esconder eventos y a discutir sobre la medición. La decisión se anota y se actualiza la plantilla de contrato.

## Agilidad, IA, automatización y analítica

### Agilidad

Construye las relaciones con proveedores en torno a resultados compartidos y a una conversación regular. La precaución es que las medidas guiadas por penalizaciones llevan a disputas sobre las definiciones.

### IA

Los proveedores pueden incorporar IA en sus servicios, así que pregunta qué funciones de IA se usan, con qué datos y quién las supervisa, y mide la cobertura de divulgación de IA por los proveedores. La precaución es que las declaraciones de los proveedores sobre la IA deben contrastarse con las condiciones del contrato.

### Automatización

Recoge automáticamente los datos de rendimiento de los proveedores donde sea posible y automatiza los recordatorios de fechas de contrato. Mide la automatización por las renovaciones omitidas. La precaución es que los flujos automáticos de los proveedores usan sus propias definiciones, así que concílialos.

### Analítica

Reporta el cumplimiento de los proveedores con reglas de atribución para los incidentes. La decisión a la que informa es si renovar, renegociar o abandonar. La precaución es que la concentración y la preparación de la salida son juicios, así que documenta el razonamiento.

## Perspectiva sectorial

**Startup.** Los proveedores son sobre todo herramientas de nube y de software como servicio. Mantén una lista con responsables y fechas de renovación, sabe qué datos tiene cada uno y conserva una exportación de los datos críticos. Elige proveedores con caminos de exportación claros, porque el bloqueo temprano es barato de crear y costoso de deshacer.

**Pequeña empresa.** Unos pocos proveedores sostienen el negocio, y el dueño suele gestionarlos directamente. Guarda en un solo lugar los contactos y las condiciones de los contratos, pide actualizaciones de estado y de incidentes y prueba la restauración desde copias de seguridad guardadas fuera del proveedor. Reduce la dependencia de una sola persona en el proveedor.

**Gran empresa.** Muchos proveedores y capas piden una función de gestión de proveedores, niveles de criticidad y condiciones contractuales estándar de seguridad, resiliencia y salida. Usa una coordinación de tipo SIAM donde los proveedores deban trabajar juntos. Mantén un mapa central de dependencias y compártelo con los equipos de riesgos y de continuidad.

**Gobierno y sector público.** El derecho de la contratación, las reglas de competencia y los requisitos de transparencia dan forma a cómo se eligen y se gestionan los proveedores. Los contratos pueden ser largos, con deberes de reporte público y requisitos de soberanía, accesibilidad y salida. Documenta las decisiones, reporta el rendimiento de los proveedores como se exija y planifica la nueva licitación (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo de los responsables de proveedores y de una pequeña función de coordinación, un registro y los datos de dependencias, el esfuerzo de evaluación y las revisiones conjuntas. Los ejercicios de salida cuestan de unas horas a unos días por proveedor crítico. Las herramientas pueden ser tan sencillas como un registro compartido.

Los retornos son incidentes causados por proveedores menos numerosos y más cortos, mejores condiciones comerciales gracias a una negociación informada, costos de bloqueo evitados y una respuesta más rápida y tranquila cuando falla un proveedor. Construye el caso con tus propios datos: las horas de incidentes atribuidas a proveedores y su costo, el costo y el tiempo de transiciones pasadas de proveedor y la diferencia entre los niveles de servicio contratados y la experiencia reportada por los usuarios. Evita citar tasas de fracaso de la externalización del sector salvo que puedas rastrear la fuente y el método. Incluye el costo de mantener caliente una segunda opción y compáralo con la exposición que reduce (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Firmar y olvidar.** Los contratos se alejan de la realidad. Celebra revisiones regulares con responsables y datos.
- **Fiarse solo del informe del proveedor.** Mide lo que el proveedor elige. Monitoriza de forma independiente y compara con la experiencia del usuario.
- **Relaciones solo de penalización.** Reducen la honestidad. Construye objetivos compartidos junto a los remedios.
- **Sin plan de salida.** Irse se convierte en una crisis. Escribe y prueba el plan antes de que haga falta.
- **Concentración oculta.** Varios proveedores pueden compartir una plataforma. Cartografía hasta el proveedor final.
- **Culpa en las revisiones conjuntas.** Los proveedores ocultan incidentes. Revisa los incidentes sin culpas.
- **Gestión uniforme de todos los proveedores.** Desperdicia esfuerzo en los pequeños y descuida a los críticos. Organiza por niveles de criticidad.
- **Ignorar a los subcontratistas.** Tu riesgo incluye el suyo. Pregunta por las dependencias críticas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Conocer a los proveedores | Contratos dispersos | Registro de los proveedores principales | Registro con responsables, criticidad y fechas de revisión | Mapa de dependencias hasta los subcontratistas; cobertura y vigencia con seguimiento | Visión de dependencias compartida con proveedores y clientes |
| Rendimiento y relación | Reactiva; disputas | Informes mensuales de los proveedores | Medidas del contrato y de la experiencia comparadas; revisiones conjuntas regulares | Acciones con seguimiento; incidentes revisados conjuntamente; atribución acordada | Proveedores integrados como socios con objetivos compartidos y datos abiertos |
| Resiliencia y salida | Ninguna | Condiciones de salida en algunos contratos | Planes de salida para los proveedores críticos | Planes de salida ejercitados; concentración decidida deliberadamente | Alternativas mantenidas calientes; ejercicios conjuntos con los proveedores |

## Lista de verificación

- [ ] Un registro de proveedores enumera cada proveedor con un responsable, una criticidad y las fechas del contrato.
- [ ] Los servicios críticos tienen un mapa de dependencias que llega a los subcontratistas clave.
- [ ] Los niveles de servicio del contrato se emparejan con una medida de experiencia del usuario.
- [ ] Las revisiones conjuntas con los proveedores críticos se celebran con una cadencia y una agenda estándar.
- [ ] La diligencia debida de los proveedores críticos está vigente y basada en evidencia.
- [ ] Las condiciones y los canales de notificación de incidentes están acordados y probados.
- [ ] El tiempo de incidentes atribuido al proveedor se registra con una atribución acordada.
- [ ] La concentración se mide y cada dependencia de un único proveedor es una decisión registrada.
- [ ] Existen planes de salida para los proveedores críticos y se ejercitaron dentro del periodo.
- [ ] Las condiciones del contrato incluyen exportación de datos, apoyo a la transición y propiedad de las configuraciones.

## Prompts de IA

**Construye una evaluación de la criticidad de los proveedores.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Compara las medidas del contrato con la experiencia del usuario.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Diseña un ejercicio de salida.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Redacta una agenda de revisión conjunta.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de proveedores o de contratos.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de proveedores lleva su vector de manipulación, su barrera de protección y su regla de atribución.

## Ideas clave

- Sigues siendo responsable de los servicios que externalizas, así que gestiona a los proveedores como parte de tu propio servicio.
- Empareja las medidas del contrato con la experiencia del usuario y monitoriza con independencia del informe del proveedor.
- Cartografía las dependencias hasta los subcontratistas y trata la concentración como una decisión deliberada.
- Construye las relaciones en torno a resultados compartidos y revisiones conjuntas regulares, reservando los remedios para los casos graves.
- Planifica la salida antes de firmar y pruébala para los proveedores críticos.
- Revisa sin culpas los incidentes con los proveedores y comparte los datos abiertamente.

## Referencias y lecturas complementarias

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
