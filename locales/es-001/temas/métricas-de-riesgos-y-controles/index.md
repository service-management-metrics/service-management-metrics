# Métricas de riesgos y controles

**El trabajo de riesgos es una conversación continua sobre qué podría salir mal y qué estamos haciendo al respecto, así que mantén el registro corto y vivo, prueba los controles que importan y desconfía de cualquier número que haga que la incertidumbre parezca ordenada.**

## Visión general y motivación

Todo cambio en un servicio conlleva riesgo, y también conlleva riesgo dejarlo como está. La [gestión de riesgos](https://en.wikipedia.org/wiki/Risk_management) es la identificación, la evaluación y la priorización de riesgos, seguidas de una acción coordinada para reducirlos, aceptarlos, transferirlos o evitarlos. ITIL trata el riesgo como un hilo que recorre todas las prácticas: la habilitación de cambios decide cuánto escrutinio necesita un cambio, la continuidad del servicio planifica para la interrupción, la seguridad de la información protege frente a las amenazas. Las formas de trabajo ágiles y DevOps reducen el riesgo de otra manera. Los cambios pequeños entregados de forma continua, con retroalimentación rápida y capacidad de reversión, hacen cada cambio menos peligroso y hacen visibles antes los problemas.

Las dos visiones se encuentran en las métricas. Un equipo que entrega de forma continua sigue necesitando conocer sus principales riesgos, quién los posee y si funcionan los controles en los que se apoya. Una función de riesgos que insiste en una aprobación pesada sigue necesitando evidencia de que sus controles reducen el daño y no simplemente frenan a la gente. Este tema da las medidas para ambas, y se apoya en las prácticas descritas en los temas vecinos sobre seguridad y auditoría (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades, y el tema 8.3, Métricas de cumplimiento y auditoría).

Se repiten cuatro términos.

- **Riesgo:** un evento o condición incierto que, si ocurre, afecta a los objetivos. Tiene una causa, un evento y una consecuencia, y una probabilidad y un impacto que normalmente se estiman, no se conocen.
- **Registro de riesgos:** la lista de riesgos identificados con responsables, calificaciones y respuestas. Un [registro de riesgos](https://en.wikipedia.org/wiki/Risk_register) es una herramienta de trabajo cuando está al día y se lee, y un artefacto de cumplimiento cuando no.
- **Control:** una acción o mecanismo que reduce un riesgo, como una revisión, una prueba automatizada, una aprobación, una segregación de funciones o una alerta de monitorización. El conjunto de controles en que se apoya una organización es su sistema de [control interno](https://en.wikipedia.org/wiki/Internal_control).
- **Indicador clave de riesgo (KRI):** una medida que señala un cambio en el nivel de un riesgo antes de que ocurra la pérdida. Un [indicador clave de riesgo](https://en.wikipedia.org/wiki/Key_risk_indicator) es útil cuando se adelanta a un evento y cuando alguien actúa sobre él.

La cuantificación del riesgo tiene debilidades conocidas. Una [matriz de riesgos](https://en.wikipedia.org/wiki/Risk_matrix), que sitúa la probabilidad frente al impacto en una cuadrícula de celdas de colores, se usa mucho y se critica mucho: las calificaciones son subjetivas, riesgos distintos pueden caer en la misma celda por razones distintas y la aritmética de multiplicar puntuaciones ordinales carece de una base firme. Los eventos raros y graves, descritos a veces mediante la [teoría del cisne negro](https://en.wikipedia.org/wiki/Black_swan_theory), son especialmente difíciles de calificar. La respuesta honesta es usar la matriz como ayuda para la conversación, mostrar rangos y respaldarla con evidencia sobre controles e incidentes. El marco de las tres líneas de defensa, que separa los equipos que poseen el riesgo, los equipos que lo supervisan y la garantía independiente, ofrece una estructura para los roles, y funciona mejor cuando la primera línea, los equipos de entrega y operaciones, posee de verdad sus riesgos.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica al reporte de riesgos de una forma particular. Cuando una calificación en rojo atrae escrutinio, la gente califica los riesgos de ámbar. Cuando un riesgo cerrado es un éxito, la gente cierra riesgos sin tratarlos (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mantén el registro corto y al día.** Unos pocos riesgos bien poseídos y revisados valen más que centenares que no lo son.
- **Haz que la primera línea posea sus riesgos.** Las personas más cercanas al trabajo lo conocen mejor.
- **Prueba los controles en que te apoyas.** Un control que nunca se ha probado es una esperanza.
- **Prefiere los indicadores adelantados sobre los que alguien actúa.** Un indicador sin plan de respuesta es decoración.
- **Muestra rangos y evidencia, no falsa precisión.** Las calificaciones son estimaciones.
- **Reduce el riesgo haciendo pequeño y reversible el cambio.** La entrega continua con reversión rápida es un control.
- **Habla del riesgo sin culpas.** El reporte honesto es la materia prima de toda la práctica.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vigencia de la revisión de riesgos | Proporción de riesgos abiertos revisados por su responsable dentro del intervalo acordado | riesgos revisados dentro del intervalo / riesgos abiertos | porcentaje | Fechas de revisión del registro de riesgos | Gestión de riesgos; mejora continua | Riesgos revisados en las conversaciones de planificación y de revisión | Mensual |
| Cobertura de responsables | Proporción de riesgos abiertos con un responsable con nombre y vigente que aceptó la propiedad | riesgos con un responsable vigente confirmado / riesgos abiertos | porcentaje | Registro de riesgos unido al directorio de personas | Gestión de riesgos | Riesgos poseídos por el equipo en la lista de pendientes | Mensual |
| Cobertura de pruebas de controles | Proporción de controles clave probados en su funcionamiento dentro del ciclo exigido | controles clave probados en el ciclo / controles clave | porcentaje | Registro de controles y registros de pruebas | Gestión de riesgos; gestión de la seguridad de la información | Comprobaciones automatizadas en el pipeline | Trimestral |
| Tasa de eficacia de los controles | Proporción de controles probados que se encuentra que funcionan según lo diseñado | controles hallados eficaces / controles probados | porcentaje | Resultados de las pruebas | Gestión de riesgos; mejora continua | Pruebas automatizadas que pasan por las razones correctas | Trimestral |
| Tiempo de respuesta a una brecha de KRI | Tiempo desde que un indicador clave de riesgo cruza su umbral hasta una decisión registrada | mediana y percentil 85 de las horas o días desde la brecha hasta la decisión | horas o días | Monitorización de KRI y registro de decisiones | Gestión de riesgos; monitorización y gestión de eventos | Reacción ante una señal de producción | Mensual |
| Puntualidad de los planes de tratamiento | Proporción de tratamientos de riesgos completados en su fecha comprometida | tratamientos completados en fecha / tratamientos que vencen en el periodo | porcentaje | Registro de riesgos y seguimiento de acciones | Gestión de riesgos; mejora continua | Acciones de mejora entregadas | Trimestral |
| Proporción de cambios basados en el riesgo | Proporción de cambios aprobados por rutas basadas en el riesgo con la evidencia de los controles adjunta | cambios aprobados por una ruta basada en el riesgo con la evidencia exigida / cambios del periodo | porcentaje | Registros de cambios | Habilitación de cambios; gestión de riesgos | Cambios entregados de forma continua con comprobaciones automatizadas | Mensual |

Define en el registro el intervalo de revisión y la lista de controles clave. Un control está «probado» solo cuando la prueba examina evidencia de funcionamiento, no solo el diseño. El reloj del KRI empieza cuando el indicador cruza su umbral, según lo registra el sistema de monitorización, y se detiene en una decisión que queda por escrito, que puede ser actuar, aceptar o cambiar el umbral. Excluye del denominador los riesgos que se están retirando solo tras una decisión de cierre registrada.

## Recomendaciones

### Mantén viva la conversación sobre riesgos

**1. Mantén corto el registro y escribe cada riesgo en una forma estándar.** Usa una frase de la forma «Debido a [causa], puede ocurrir [evento], lo que llevaría a [consecuencia]». Limita el registro a los riesgos que cambiarían una decisión o un plan. Fusiona los duplicados, divide los vagos y retira los riesgos que han pasado. Una lista de unas pocas decenas de riesgos de los que la gente habla vale más que mil que nadie lee.

**2. Asigna cada riesgo a un responsable que pueda actuar.** El responsable es la persona con autoridad sobre la respuesta, normalmente en el equipo de entrega o de operaciones, no en la función de riesgos. Confirma la propiedad con la persona y revísala cuando la gente cambie de rol. La cobertura de responsables mide esto, y un riesgo sin responsable es un hallazgo.

**3. Revisa los riesgos en las conversaciones que ya se producen.** Plantea los riesgos principales en la planificación, en las revisiones y en las revisiones de incidentes, en lugar de crear una reunión aparte. El hábito ágil de reflexionar con regularidad sobre cómo ser más eficaces es un hogar natural para la pregunta «¿qué podría perjudicarnos a continuación?». Registra el resultado en el registro.

**4. Empareja las calificaciones con evidencia y rangos.** Para cada riesgo importante, registra qué te hace pensar que es probable o grave: incidentes, casi accidentes, resultados de pruebas, historial de proveedores. Da un rango de probabilidad y de impacto donde puedas y di cuán inseguro estás. No combines puntuaciones ordinales en un solo número ni lo trates como una medición. Si usas una matriz, úsala para iniciar una discusión (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Prueba los controles

**5. Nombra los controles clave y para qué sirve cada uno.** Para cada riesgo importante, enumera los pocos controles en que te apoyas y cómo se vería el fallo de cada uno. Un registro de controles que enumera cientos de actividades menores esconde los que importan. Incluye los controles automatizados del pipeline, como pruebas, comprobaciones de políticas y puertas de aprobación.

**6. Prueba el funcionamiento, no solo el diseño.** Una revisión del diseño pregunta si el control funcionaría si se operara. Una prueba de funcionamiento pregunta si se operó y funcionó en el periodo, examinando muestras de evidencia. Planifica las pruebas con un ciclo que corresponda al riesgo, registra los resultados y haz seguimiento de los fallos. Donde sea posible, automatiza la evidencia, de modo que la prueba ocurra de forma continua.

**7. Trata los fallos de los controles como información.** Una prueba fallida es el sistema de control funcionando. Registra el fallo, pregunta por qué y corrige la causa. La tasa de eficacia de los controles debe leerse con el seguimiento: los fallos hallados y corregidos rápido son más sanos que una tasa perfecta que procede de pruebas débiles.

**8. Usa la garantía independiente donde añada valor.** La auditoría interna o un revisor independiente pueden probar los controles que posee la primera línea y supervisa la segunda. La independencia protege frente a corregir el propio trabajo. Coordínate para que los equipos no sean probados por tres grupos por lo mismo.

### Usa bien los indicadores y las decisiones

**9. Elige unos pocos indicadores adelantados por riesgo importante.** Un indicador clave de riesgo debe ser barato de medir, estar vinculado a una causa y emparejarse con un umbral y una respuesta. Por ejemplo, la antigüedad de la vulnerabilidad crítica más antigua señala el riesgo de seguridad, y la proporción de cambios que necesitan un manejo de emergencia señala el riesgo de cambios. Define quién mira el indicador y qué hará en el umbral (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades).

**10. Registra la decisión en cada brecha.** Cuando un indicador cruza un umbral, alguien decide: actuar, aceptar o ajustar el umbral. Anota la decisión y el motivo. Esto construye un historial que muestra si los umbrales están bien fijados y si la respuesta es puntual.

**11. Haz de la aprobación basada en el riesgo la opción por defecto para el cambio.** En un entorno de entrega continua, sustituye los comités de aprobación generalizada por rutas basadas en el riesgo: comprobaciones automatizadas y revisión por pares para los cambios estándar de bajo riesgo, y una revisión más completa para los pocos cambios de alto riesgo (véase el tema 4.3, Métricas de habilitación de cambios). Adjunta la evidencia de que los controles se ejecutaron. Esto reduce a la vez el riesgo y el retraso, porque los cambios pequeños con evidencia automatizada son más seguros que los grandes con una firma.

**12. Aprende de las pérdidas y de los casi accidentes.** Tras los incidentes y los sustos, actualiza el registro: ¿estaba el riesgo?, ¿se calificó bien?, ¿funcionó el control? Usa las respuestas para mejorar ambos. El ciclo entre los eventos y el registro es lo que mantiene honesto el registro (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Vigencia de la revisión de riesgos | Marcar los riesgos como revisados sin discusión; cambiar el intervalo | Muestrear las revisiones en busca de sustancia; intervalo fijo en el registro |
| Cobertura de responsables | Asignar responsables sin que lo sepan; nombrar a una persona senior sin autoridad | Confirmación del responsable; comprobar que los responsables pueden actuar sobre la respuesta |
| Cobertura de pruebas de controles | Probar los controles fáciles; contar las revisiones de diseño como pruebas de funcionamiento | Lista de controles clave fijada por un tercero; tipo de prueba registrado |
| Tasa de eficacia de los controles | Probar muestras pequeñas; elegir muestras que pasen | Método de muestreo independiente del responsable; tamaño de la muestra registrado |
| Tiempo de respuesta a una brecha de KRI | Cambiar el umbral tras una brecha; registrar una decisión sin contenido | Registro de cambios de umbral; muestreo del contenido de las decisiones |
| Puntualidad de los planes de tratamiento | Fijar fechas fáciles; redefinir la finalización | Fechas acordadas con el responsable en la aprobación; comprobar que la calificación del riesgo se movió |
| Proporción de cambios basados en el riesgo | Clasificar los cambios como de bajo riesgo para evitar la revisión; adjuntar evidencia que no produjeron los controles | Muestrear la clasificación frente a las reglas; evidencia automatizada del pipeline |

Una lectura sana es un registro corto sobre el que la gente discute, responsables que conocen sus riesgos, controles probados con algunos fallos hallados y corregidos, indicadores que conducen a decisiones reales y menos aprobaciones pesadas para los cambios pequeños.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Matriz de riesgos | Rápida, visual, iniciadora de conversación | Subjetiva; falsa precisión; aritmética ordinal |
| Rangos cuantificados | Más honestos sobre la incertidumbre | Necesitan datos y destreza; esfuerzo |
| Comités de aprobación pesados | Control visible | Lentos; fomentan agrupar el cambio |
| Comprobaciones automatizadas basadas en el riesgo | Rápidas y coherentes | Necesitan ingeniería; las comprobaciones automatizadas pueden equivocarse |
| La función central de riesgos posee los riesgos | Coherencia | Lejos del trabajo; responsables desimplicados |
| Propiedad de la primera línea | Conocimiento y rendición de cuentas | Calidad variable; necesita supervisión |
| Pruebas periódicas de controles | Eficientes para controles estables | Pasan por alto la deriva entre pruebas |
| Monitorización continua de controles | Evidencia puntual | Esfuerzo de herramientas; ruido |

La respuesta en prosa es poner la propiedad en los equipos, aplicar una supervisión central ligera y pruebas independientes, automatizar la evidencia donde sea posible y usar las calificaciones como avisos para la conversación.

## Preguntas para debatir con tu equipo

**1. ¿Cuáles son los tres riesgos con más probabilidad de perjudicar a este servicio el año que viene y quién posee cada uno?**
Pide a cada miembro que escriba tres riesgos en privado y compara después. Tanto el solapamiento como las diferencias son informativos. El facilitador debe registrar quién actuaría sobre cada riesgo. Acuerden los tres principales y confirmen los responsables.

**2. ¿De qué control dependemos más y cuándo comprobamos por última vez que funciona?**
Elige un control, como una regla de revisión de código, una copia de seguridad o un paso de aprobación. Rastrea la última vez que se examinó evidencia de su funcionamiento. Si nadie lo sabe, planifica una prueba. La conversación muestra la diferencia entre diseño y funcionamiento.

**3. ¿Qué nos haría cambiar una calificación de ámbar a rojo y quién lo notaría?**
Hablen de los indicadores y los umbrales. Pregunten si el equipo ha rebajado alguna vez una calificación para evitar la atención y qué presión lo causó. Acuerden qué evidencia justificaría un cambio y cómo hacer seguro decir rojo.

**4. ¿Qué aprobaciones frenan nuestros cambios sin reducir el riesgo?**
Enumeren las aprobaciones que necesita un cambio típico y, para cada una, pregunten qué riesgo aborda y si alguna vez detuvo un cambio. Propongan sustituir una por una comprobación automatizada. Acuerden qué evidencia mostraría que el cambio es seguro.

**5. Cuando falló un control, ¿cómo nos enteramos y qué hicimos?**
Recuerden un fallo reciente. ¿Lo encontró una prueba, un incidente o un auditor? Hablen de cómo sería un ciclo más fuerte. Incluyan cómo se trató a la persona que lo encontró.

**6. ¿Qué riesgos hemos aceptado y cuándo revisamos esa decisión?**
Enumeren los riesgos aceptados y las fechas de revisión. Comprueben que cada uno tiene un responsable y un motivo. Un riesgo aceptado sin fecha de revisión es un riesgo que nadie vigila.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen la mayor parte del riesgo operativo. Deben mantener una lista corta de sus propios riesgos, comentarla en la planificación y en la revisión e integrar los controles en el pipeline para que la evidencia sea automática. Se benefician de las rutas de cambio basadas en el riesgo que dejan fluir los cambios de bajo riesgo, y deben ser honestos sobre lo que podría salir mal.

### Equipos de servicio y de operaciones

Los equipos de operaciones ejecutan los controles: copias de seguridad, monitorización, revisiones de acceso y pruebas de recuperación. Deben conservar la evidencia de funcionamiento, probar los controles con un ciclo regular y plantear pronto las brechas de los indicadores. Soportan el costo de los controles pesados y deben decir cuáles aportan poco.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y deciden cuánta fricción es aceptable. Deben pedir una lista corta de los riesgos principales con responsables y evidencia, acoger las calificaciones en rojo, financiar las pruebas de controles y respaldar la garantía independiente. La gobernanza debe comprobar que el registro refleja los incidentes y los casi accidentes y no debe premiar los informes de aspecto ordenado.

### Clientes y usuarios

Los usuarios soportan las consecuencias de los riesgos que se materializan, y a menudo los conocen antes que el registro. Deben tener una forma de señalar preocupaciones y que se les informe de los riesgos que les afectan, dentro de los límites de la confidencialidad. Su experiencia de los incidentes y de los cambios es evidencia para las revisiones de riesgos.

## En la práctica: un ejemplo de gestión de servicios

El grupo digital de una empresa nacional de energía opera la facturación de clientes, una aplicación móvil e integraciones con las operaciones de la red. Los números siguientes son ilustrativos.

El registro de riesgos del grupo tiene 340 entradas, depuradas por última vez hace tres años. La vigencia de la revisión de riesgos es del 22 por ciento y 61 riesgos tienen responsables que se han ido. La matriz muestra 85 riesgos en rojo y nadie lee el informe. La nueva jefa de garantía del servicio propone un reinicio. Con los equipos de entrega recorta el registro a los riesgos que cambiarían una decisión, y termina con 38. Asigna cada uno a un responsable con nombre del equipo que puede actuar, y lo confirman. Elige 12 controles clave y prueba el funcionamiento de cada uno, en lugar de revisar el diseño. Cinco fallan: dos restauraciones de copias de seguridad nunca se habían probado, una revisión de accesos se había omitido y dos aprobaciones de cambios se habían firmado sin evidencia de pruebas.

El equipo corrige los fallos y sustituye el comité de aprobación de cambios para los cambios estándar por rutas basadas en el riesgo. Las pruebas automatizadas y la revisión por pares son los controles, y el pipeline adjunta la evidencia al registro de cambio. Cada riesgo importante recibe uno o dos indicadores adelantados con umbrales y respuestas. Para el riesgo de una caída prolongada de la facturación, los indicadores son la antigüedad de la vulnerabilidad crítica más antigua y el número de restauraciones de copias fallidas en el trimestre. El primer trimestre muestra a los responsables confirmando los 38 riesgos, una vigencia de revisión del 91 por ciento, una tasa de eficacia de los controles de 7 de 12 en la primera prueba y de 12 de 12 tras las correcciones, y un tiempo mediano de respuesta a una brecha de KRI de 2 días. La proporción de cambios por rutas basadas en el riesgo es del 64 por ciento.

El director de riesgos pide que el número de riesgos en rojo baje a la mitad en un año. La jefa de garantía del servicio propone hacer seguimiento de la puntualidad de los planes de tratamiento y de la eficacia de los controles, y explica que el recuento de riesgos en rojo puede bajar recalificando, y que ella prefiere ver calificaciones honestas en rojo. La decisión se anota, y el informe del trimestre siguiente incluye las decisiones muestreadas que hay detrás de cada rebaja.

## Agilidad, IA, automatización y analítica

### Agilidad

Mantén viva la lista de riesgos mediante conversaciones regulares con las partes interesadas en lugar de una revisión anual. La precaución es que las puntuaciones numéricas pueden hacer que la incertidumbre parezca ordenada.

### IA

Los sistemas de IA necesitan entradas en el registro de riesgos con un responsable, un punto de revisión humana y una fecha de revisión. Mide la eficacia de los controles de supervisión de la IA probándolos. La precaución es que una política que dice que un humano revisa la salida no es un control hasta que alguien la prueba.

### Automatización

Automatiza las comprobaciones de controles donde puedan probarse y mide la automatización por las comprobaciones fallidas y omitidas. La precaución es que un control automatizado que pasa puede estar probando lo que no toca.

### Analítica

Reporta la cobertura de pruebas de controles y su eficacia con el tamaño de la muestra. La decisión a la que informa es qué controles reforzar. La precaución es que las muestras pequeñas y la puntuación subjetiva limitan la precisión, así que dilo.

## Perspectiva sectorial

**Startup.** Los riesgos tratan sobre todo de quedarse sin dinero, perder a personas clave y una gran caída. Mantén una lista de una página con los cinco principales, revísala cada mes y prueba las copias de seguridad y las restauraciones. Integra los controles en el pipeline desde el principio, ya que son más baratos que añadirlos después.

**Pequeña empresa.** Domina un puñado de riesgos: dependencia de una persona clave, un único proveedor, el ransomware y la pérdida de datos. Mantén una lista breve con responsables, prueba las restauraciones y conserva al día los seguros y los datos de contacto. Resiste los marcos pesados y toma prestado de ellos lo que encaje.

**Gran empresa.** La escala pide una taxonomía común, herramientas ligeras para el registro y las tres líneas de defensa en la práctica. Haz que la primera línea posea sus riesgos, mantén pequeña y consultiva la segunda y haz eficientes las pruebas independientes. Evita las pruebas duplicadas entre auditoría, riesgos y cumplimiento.

**Gobierno y sector público.** La gestión de riesgos suele ser un deber formal con marcos estándar, comités de auditoría e informes públicos. Alinéate con el marco exigido, documenta las declaraciones de apetito de riesgo y conserva la evidencia. La rendición de cuentas pública hace más valiosas las calificaciones honestas en rojo, y también más difíciles (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo de los responsables para revisar los riesgos, el esfuerzo de definir los controles clave y probarlos, las herramientas para el registro y la monitorización de indicadores si aún no existen y el costo de la garantía independiente. Automatizar la recogida de evidencia exige esfuerzo de ingeniería y luego reduce el costo recurrente.

Los retornos son menos sorpresas, una aprobación de cambios más rápida y ligera y una garantía más creíble. Un registro podado y las rutas de cambio basadas en el riesgo ahorran el tiempo que consumían los grandes órganos de aprobación. Las pruebas de controles fallidas halladas antes de un incidente previenen pérdidas difíciles de tasar. Construye el caso con tus propios datos: el tiempo dedicado a cada aprobación de cambio antes y después, el número de fallos de controles hallados mediante pruebas frente a los hallados por incidentes o auditores y el costo de incidentes pasados que un control habría evitado. Evita citar estadísticas de pérdidas del sector sin una fuente y un método rastreables.

## Antipatrones y trampas

- **Un registro que crece para siempre.** Nadie lo lee. Pódalo hasta los riesgos que importan.
- **Calificaciones sin evidencia.** Son opiniones en color. Adjunta evidencia y rangos.
- **Responsables solo de nombre.** El riesgo reside en alguien que no puede actuar. Confirma la propiedad con las personas adecuadas.
- **Probar el diseño y llamarlo garantía.** Un control que podría funcionar puede no haberlo hecho. Prueba el funcionamiento.
- **Reportar solo el recuento de riesgos en rojo.** Los recuentos bajan recalificando. Mira los tratamientos y los resultados de los controles.
- **Comités de aprobación para cada cambio.** Frenan los cambios pequeños y enseñan a agrupar. Usa rutas basadas en el riesgo.
- **Castigar las calificaciones en rojo.** Entonces los riesgos se esconden. Premia el aviso temprano.
- **Culturas separadas de riesgos y de entrega.** El trabajo de riesgos hecho a los equipos, y no con ellos, produce teatro de cumplimiento.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Registro y propiedad | Lista larga y obsoleta | Existe un registro, parcialmente poseído | Registro corto con responsables de primera línea confirmados y fechas de revisión | Revisiones en conversaciones de equipo; evidencia y rangos adjuntos | Riesgos compartidos entre equipos y proveedores con responsables conjuntos |
| Controles | Se supone que funcionan | Diseño documentado | Controles clave nombrados; pruebas de funcionamiento en un ciclo | Fallos con seguimiento; evidencia automatizada donde sea posible | Monitorización continua de controles con supervisión humana y garantía independiente |
| Decisiones y cambio | Aprobaciones por comité | Algunos cambios estándar preaprobados | Rutas basadas en el riesgo con evidencia adjunta | Indicadores con umbrales y decisiones registradas; rutas ajustadas a partir de los resultados | Decisiones de riesgo integradas en los pipelines de toda la organización y la cadena de suministro |

## Lista de verificación

- [ ] El registro es corto, con los riesgos escritos en forma de causa, evento y consecuencia.
- [ ] Cada riesgo tiene un responsable de primera línea confirmado que puede actuar.
- [ ] Los riesgos se revisan en las conversaciones regulares del equipo.
- [ ] Los controles clave están nombrados y probados en su funcionamiento con un ciclo declarado.
- [ ] Los fallos de controles se registran, se explican y se corrigen.
- [ ] Cada riesgo importante tiene uno o dos indicadores adelantados con umbrales y respuestas.
- [ ] Las decisiones en las brechas de los indicadores se registran.
- [ ] Existen rutas de cambio basadas en el riesgo, con la evidencia adjunta automáticamente donde sea posible.
- [ ] Los riesgos aceptados tienen un responsable, un motivo y una fecha de revisión.
- [ ] Los incidentes y los casi accidentes actualizan el registro.

## Prompts de IA

**Reescribe los riesgos en una forma estándar.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Diseña una prueba de control.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Propón indicadores adelantados para un riesgo.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Revisa un proceso de aprobación de cambios.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de riesgos o de controles.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de riesgos lleva su vector de manipulación, su barrera de protección y su regla de evidencia.

## Ideas clave

- Mantén el registro de riesgos corto, poseído por los equipos que pueden actuar y revisado en conversaciones que ya existen.
- Prueba que los controles clave funcionan, trata los fallos como información útil y automatiza la evidencia.
- Usa unos pocos indicadores adelantados con umbrales, respuestas y decisiones registradas.
- Sustituye la aprobación generalizada por rutas de cambio basadas en el riesgo respaldadas por evidencia automatizada.
- Muestra rangos y evidencia en lugar de falsa precisión, y usa las matrices para iniciar conversaciones.
- Haz seguro dar calificaciones en rojo y aprende de las pérdidas y de los casi accidentes.

## Referencias y lecturas complementarias

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
