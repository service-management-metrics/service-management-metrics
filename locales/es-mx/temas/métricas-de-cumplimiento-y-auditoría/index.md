# Métricas de cumplimiento y auditoría

**El cumplimiento es más fácil y más honesto cuando la propia actividad produce la evidencia, así que mide cuánta evidencia llega de forma automática, con qué rapidez se corrigen los hallazgos y con qué frecuencia vuelve el mismo hallazgo, y trata a los auditores como partes interesadas que se incorporan pronto a la conversación.**

## Visión general y motivación

La mayoría de las organizaciones que construyen y operan servicios de TI responden ante alguien: reguladores, clientes, organismos de certificación, aseguradoras, consejos. El [cumplimiento normativo](https://en.wikipedia.org/wiki/Regulatory_compliance) es el acto de ajustarse a leyes, reglas y normas, y de demostrar que se hace. Una auditoría es un examen sistemático de evidencia para juzgar si eso es cierto. En TI incluye las auditorías de los controles de la información financiera, las obligaciones de protección de datos, las certificaciones de seguridad y los compromisos contractuales. La [auditoría de tecnologías de la información](https://en.wikipedia.org/wiki/Information_technology_audit) examina los controles que rodean a los sistemas y a los datos que contienen.

El cumplimiento y la entrega continua tienen fama de fricción. El cumplimiento pide documentos, firmas y aprobaciones antes del cambio, y la entrega continua favorece cambios pequeños publicados de forma continua. La fricción es real cuando el cumplimiento se trata como una fase al final. Disminuye cuando el cumplimiento se integra en el flujo de trabajo. Los registros de cambios, las revisiones de código, las pruebas automatizadas y los registros de acceso son evidencia, y un pipeline de entrega los produce todos los días. La [auditoría continua](https://en.wikipedia.org/wiki/Continuous_auditing) usa comprobaciones automatizadas y casi en tiempo real de los controles en lugar de muestras periódicas, y coincide con el ritmo de la entrega continua. Una [pista de auditoría](https://en.wikipedia.org/wiki/Audit_trail) es un registro que muestra quién hizo qué, cuándo y en qué sistema, y suele ser la evidencia más sólida que tienes.

ITIL describe las prácticas pertinentes: la gestión de la seguridad de la información, la gestión de riesgos y la gobernanza del sistema de valor del servicio, y apunta a normas como la [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) para los sistemas de gestión de la seguridad de la información. Los marcos que las organizaciones suelen afrontar incluyen regímenes de reporte de controles financieros, como la [ley Sarbanes–Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) de Estados Unidos, leyes de protección de datos como el [Reglamento General de Protección de Datos](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) de la Unión Europea e informes de garantía como [SOC 2](https://en.wikipedia.org/wiki/SOC_2), que examinan los controles relevantes para la seguridad y criterios afines. Los detalles difieren según la jurisdicción, el sector y la fecha, y este tema describe la práctica de medición, no los requisitos legales. Trabaja con tus colegas de cumplimiento, jurídica y auditoría para saber qué se te aplica.

El fin de las métricas de cumplimiento es aprender cuán bien cumple la organización sus obligaciones y cuánto esfuerzo supone, para poder mejorar ambas cosas. El riesgo es que el cumplimiento se convierta en una actuación para el auditor. Un equipo puede superar una auditoría produciendo documentos en el último momento y aun así mantener prácticas arriesgadas. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: cuando los «hallazgos de auditoría» son un objetivo, la gente evita el escrutinio, estrecha el alcance y negocia la redacción (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Ayudan dos líneas de pensamiento.

- **El cumplimiento como subproducto.** Si el pipeline registra automáticamente la revisión, las pruebas, la aprobación y el despliegue, la evidencia existe esté o no cerca una auditoría. Esto elimina además la tentación de reconstruir la evidencia a posteriori.
- **Los auditores como partes interesadas.** La práctica ágil valora la colaboración continua con las partes interesadas. Los auditores y los evaluadores son partes interesadas con preguntas legítimas. Implicarlos en el diseño de los controles y de la evidencia reduce la sorpresa y el retrabajo, preservando su independencia.

## Principios clave

- **Produce la evidencia como subproducto del trabajo.** Los pipelines, los tickets y los registros deben responder a la mayoría de las preguntas de auditoría.
- **Vincula las obligaciones con controles y responsables.** Cada obligación tiene un control, y cada control tiene un responsable.
- **Colabora pronto con los auditores.** Comparte los diseños y los enfoques de evidencia antes de la auditoría y preserva su independencia.
- **Corrige las causas, no los hallazgos.** Un hallazgo cerrado sin eliminar la causa vuelve.
- **Mide el esfuerzo además del resultado.** El costo del cumplimiento forma parte de la imagen.
- **Mantén la segregación de funciones donde importa.** La independencia de la revisión es un control que la automatización puede respaldar pero no sustituir.
- **Sé honesto sobre las brechas.** Es mejor que las debilidades las encuentres tú y no otros.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de obligaciones | Proporción de obligaciones aplicables vinculadas con un control con responsable y una fuente de evidencia | obligaciones vinculadas con al menos un control con responsable y fuente de evidencia / obligaciones aplicables | porcentaje | Registro de obligaciones y registro de controles | Gobernanza; gestión de la seguridad de la información; gestión de riesgos | La definición de terminado incluye la evidencia del control | Trimestral |
| Tasa de automatización de la evidencia | Proporción de la evidencia de controles del ámbito recogida automáticamente desde sistemas de registro | elementos de evidencia de controles recogidos automáticamente / elementos de evidencia exigidos | porcentaje | Registro de controles, registros del pipeline y de los sistemas | Gestión de la seguridad de la información; habilitación de cambios | El pipeline registra automáticamente la revisión, las pruebas y el despliegue | Trimestral |
| Plazo de entrega de la evidencia | Tiempo para suministrar la evidencia solicitada por un auditor o evaluador | mediana y percentil 85 de los días desde la solicitud hasta la evidencia aceptada | días | Seguimiento de solicitudes de auditoría | Gobernanza; gestión de la seguridad de la información | Capacidad de respuesta a una pregunta de una parte interesada | Por auditoría |
| Tiempo de cierre de hallazgos | Tiempo para cerrar los hallazgos de auditoría, por gravedad | mediana y percentil 85 de los días desde que se emite el hallazgo hasta el cierre verificado | días | Seguimiento de hallazgos | Mejora continua; gestión de riesgos | Tiempo para corregir un defecto | Mensual |
| Tasa de hallazgos repetidos | Proporción de hallazgos que reaparecen de una auditoría o revisión anterior | hallazgos que coinciden en lo sustancial con un hallazgo anterior cerrado / hallazgos del periodo | porcentaje | Seguimiento de hallazgos con vínculos de causa | Mejora continua; gestión de problemas | Defecto recurrente tras una corrección | Por ciclo de auditoría |
| Conflictos de segregación de funciones | Recuento de combinaciones de acceso o de aprobación que infringen las reglas de segregación, y tiempo para resolverlas | conflictos detectados; mediana de días para resolverlos | recuento; días | Herramientas de gestión de identidades y accesos, registros de cambios | Gestión de la seguridad de la información; habilitación de cambios | Revisión independiente de los cambios | Mensual |
| Esfuerzo de auditoría | Horas-persona que dedica la organización a preparar y apoyar un ciclo de auditoría, por unidad de ámbito | horas registradas en la preparación y el apoyo de la auditoría / controles o sistemas del ámbito | horas por unidad | Registros de tiempo o estimaciones de esfuerzo | Gobernanza; mejora continua | Costo del trabajo que no es de entrega | Por ciclo de auditoría |

Declara en el registro las obligaciones del ámbito y el alcance de la auditoría. El tiempo de cierre empieza cuando se emite el hallazgo y se detiene cuando el auditor o un verificador independiente confirma el cierre, no cuando el equipo dice que está hecho. Los hallazgos repetidos se emparejan por causa, no por redacción, y la regla de emparejamiento se anota. El esfuerzo de auditoría es una medida de tendencia de la organización y nunca una medida de individuos.

## Recomendaciones

### Conoce tus obligaciones y controles

**1. Enumera en lenguaje llano las obligaciones que se aplican.** Con tus colegas de jurídica y de cumplimiento, enumera las leyes, normas, contratos y políticas que obligan al servicio, y lo que exige cada una en términos de resultados. Mantén la lista corta y legible. Las obligaciones que nadie sabe enunciar con claridad son las que causan sorpresas en las auditorías.

**2. Vincula cada obligación con controles, responsables y evidencia.** Para cada obligación, nombra el control que la cumple, la persona responsable y la evidencia que muestra que el control funciona. Donde un control cumple varias obligaciones, dilo, porque eso reduce el esfuerzo duplicado. La cobertura de obligaciones mide lo completo que es este mapa. Las obligaciones sin vincular son brechas que cerrar o que aceptar a sabiendas.

**3. Prefiere menos controles, y más fuertes.** Un control que está automatizado y probado vale por varios manuales. Busca controles que se solapen y retira los que no sirven a ninguna obligación. Cada control cuesta esfuerzo operarlo y evidenciarlo (véase el tema 8.2, Métricas de riesgos y controles).

### Haz de la evidencia un subproducto

**4. Deja que el pipeline produzca la evidencia.** Vincula cada cambio en producción con una solicitud, una revisión de código, los resultados de las pruebas y una aprobación donde se exija, todo registrado automáticamente. Un registro de despliegue que muestra esto dice al auditor lo que ocurrió sin que se escriba un documento. Esto se apoya en las prácticas de entrega continua que los equipos ágiles ya usan (véase el tema 4.5, Métricas de versiones y despliegues).

**5. Usa comprobaciones de políticas en el pipeline.** Codifica reglas, como «ningún despliegue sin una revisión por alguien distinto del autor» o «ningún acceso a producción sin un ticket», como comprobaciones automatizadas. La comprobación es a la vez un control y su evidencia. Mantén las reglas visibles y versionadas, para que los cambios en ellas también queden registrados. Esto respalda la [segregación de funciones](https://en.wikipedia.org/wiki/Segregation_of_duties), el principio de que ninguna persona debe controlar todas las etapas de un proceso sensible.

**6. Conserva debidamente las pistas de auditoría.** Guarda los registros de acceso y de cambios de forma que no puedan alterarlos las personas a las que describen, consérvalos durante el periodo exigido y hazlos consultables. Una pista que pueden editar quienes en ella se registran es evidencia débil. Comprueba las reglas de conservación con tus colegas de jurídica.

**7. Mide cuánta evidencia es automática.** La tasa de automatización de la evidencia muestra dónde persiste la recogida manual. Ordena los elementos manuales por esfuerzo y riesgo y automatiza primero los peores. A medida que sube la tasa, bajan el esfuerzo de auditoría y el plazo de entrega.

### Trabaja con los auditores

**8. Invita a los auditores al diseño.** Comparte pronto con la auditoría interna y con los evaluadores externos los cambios planificados en los controles y en la evidencia, y pregunta qué los satisfaría. La independencia significa que no diseñan tus controles, y no significa que no puedan decirte qué evidencia necesitarán. Las conversaciones tempranas reducen el retrabajo. El Institute of Internal Auditors publica normas para la profesión que explican el papel de la [auditoría interna](https://en.wikipedia.org/wiki/Internal_audit).

**9. Prepara un índice de evidencias.** Mantén un índice vivo de dónde reside cada tipo de evidencia y cómo recuperarla. Haz seguimiento del plazo de entrega de las solicitudes de evidencia y usa los retrasos para encontrar la automatización que falta. Un proceso breve y constante vale más que una carrera antes de cada auditoría.

**10. Acuerda el significado de materialidad y de alcance.** Pregunta a los auditores cómo juzgan lo que importa y lo que está en el alcance y anota la respuesta. Un entendimiento compartido previene disputas posteriores. No estreches el alcance para evitar el escrutinio ni lo amplíes sin motivo.

### Corrige las causas y aprende

**11. Trata cada hallazgo como un registro de problema.** Encuentra la causa, corrígela y verifica el cierre por alguien independiente. Vincula los hallazgos repetidos con los anteriores y examina por qué no se sostuvo la primera corrección. Una tasa alta de hallazgos repetidos apunta a correcciones que trataron síntomas, lo que se vincula con la gestión de problemas (véase el tema 4.1, Métricas de gestión de problemas).

**12. Haz seguimiento del costo y redúcelo.** Registra el esfuerzo de auditoría a lo largo de los ciclos. Si el esfuerzo es alto y plano, busca duplicación entre auditorías, recogida manual de evidencia y controles que no sirven a nadie. Reporta la tendencia del esfuerzo con los resultados. El cumplimiento vale su costo cuando reduce un riesgo real, y las métricas te ayudan a distinguirlo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de obligaciones | Vincular las obligaciones con controles débiles o irrelevantes; definir las obligaciones de forma estrecha | Revisión de la relevancia de los controles por una segunda parte; probar los controles (véase el tema 8.2, Métricas de riesgos y controles) |
| Tasa de automatización de la evidencia | Contar capturas de pantalla o exportaciones como automáticas; automatizar primero la evidencia de poco valor | Definir automático como generado por el sistema y resistente a la manipulación; ordenar por riesgo |
| Plazo de entrega de la evidencia | Dar rápido una evidencia parcial; negociar la redacción de la solicitud | Contar solo la evidencia aceptada; hacer seguimiento de las solicitudes de seguimiento |
| Tiempo de cierre de hallazgos | Cerrar hallazgos sin verificación; reclasificar la gravedad | Verificación independiente; registro de cambios de gravedad |
| Tasa de hallazgos repetidos | Reformular los hallazgos para que no coincidan; cerrar el hallazgo anterior como un tipo distinto | Emparejar por causa con una regla registrada; revisión por la auditoría interna |
| Conflictos de segregación de funciones | Trasladar los conflictos a sistemas fuera del ámbito; conceder accesos temporales que nunca se registran | Cubrir todos los sistemas con procesos sensibles; revisar los accesos temporales |
| Esfuerzo de auditoría | No registrar las horas; trasladar el esfuerzo a otros presupuestos | Muestrear los registros de tiempo; comparar con encuestas a los equipos |

Una lectura sana es una automatización de la evidencia creciente, un plazo de entrega más corto y estable, hallazgos cerrados con verificación, una tasa baja de repeticiones y un esfuerzo de auditoría que baja a medida que madura el proceso.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Evidencia manual periódica | Familiar para los auditores | Costosa; reconstruida a posteriori |
| Evidencia automatizada y continua | Barata de mantener; puntual | Necesita ingeniería; los auditores necesitan confiar en la fuente |
| Aprobaciones pesadas | Control visible | Lentas; agrupan el cambio |
| Comprobaciones automatizadas de políticas | Coherentes y rápidas | Las reglas deben ser correctas y visibles |
| Implicación temprana de los auditores | Menos sorpresas | Necesita cuidado para preservar la independencia |
| Auditoría al final | Separación clara | Hallazgos tardíos; retrabajo |
| Un control para muchas obligaciones | Eficiente | Un único fallo afecta a varias obligaciones |
| Muchos controles específicos | Vinculación clara | Esfuerzo duplicado |

La respuesta en prosa es automatizar la evidencia desde el pipeline y los sistemas de registro, implicar pronto a los auditores en el diseño preservando su independencia y mantener un conjunto ajustado de controles fuertes vinculados con las obligaciones.

## Preguntas para debatir con tu equipo

**1. ¿Qué pregunta de auditoría nos lleva más tiempo responder y por qué?**
Elige la solicitud de evidencia más lenta de la última auditoría y rastréala. ¿Falta la evidencia, está dispersa o está en la cabeza de alguien? Hablen de qué la haría automática. El facilitador debe captar el costo en horas.

**2. ¿Podemos mostrar, para cualquier cambio en producción del último mes, quién lo revisó y qué pruebas se ejecutaron?**
Elige un cambio al azar e inténtalo. Anota dónde se rompe la cadena. Acuerden una mejora del registro de cambio o del pipeline que cierre la brecha.

**3. ¿Qué prometimos en la última auditoría y se sostuvo?**
Revisen los hallazgos y las correcciones. Para cada uno, pregunten si se eliminó la causa y quién verificó el cierre. Busquen repeticiones. Acuerden un hallazgo que examinar con más profundidad.

**4. ¿Qué nos dirían los auditores si les preguntáramos cómo hacer más fácil la evidencia?**
Planifiquen una conversación con la auditoría interna o con un evaluador sobre el diseño de la evidencia. Pregunten en qué confían y en qué no. El facilitador debe tratar sus respuestas como información y tener presentes las reglas de independencia.

**5. ¿Qué controles operamos que ninguna obligación necesita?**
Enumeren los controles y las obligaciones a las que sirven. Encuentren los que no tienen un propósito claro. Hablen de retirarlos y de la evidencia de que son innecesarios.

**6. ¿Dónde podría una sola persona hacer aquí algo sensible de extremo a extremo?**
Piensen en el despliegue, la concesión de accesos y los pagos. Comprueben si las herramientas imponen la separación o solo la política. Hablen de controles compensatorios, como la revisión automatizada, donde el personal es poco.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega producen buena parte de la evidencia haciendo bien su trabajo. Deben mantener vinculados los registros de cambios, revisiones y pruebas, usar comprobaciones de políticas del pipeline y plantear preocupaciones sobre los controles que frenan el trabajo sin reducir el riesgo. Se benefician de las conversaciones tempranas con los auditores sobre qué evidencia es suficiente.

### Equipos de servicio y de operaciones

Los equipos de operaciones gestionan el control de accesos, los registros, las copias de seguridad y el manejo de incidentes, que son centrales en muchas auditorías. Deben mantener los registros resistentes a la manipulación y conservados, gestionar las revisiones de acceso según el calendario y mantener el índice de evidencias. Soportan la carga de la evidencia manual y pueden señalar dónde ayudaría más la automatización.

### Liderazgo y gobernanza

Los líderes responden del cumplimiento y a menudo de los resultados de las auditorías. Deben financiar la automatización de la evidencia, pedir las tasas de cobertura y de hallazgos repetidos en lugar de solo el recuento de hallazgos y respaldar la independencia de los auditores. La gobernanza debe esperar informes honestos de las brechas y un plan para cada una.

### Clientes y usuarios

Los clientes y los usuarios confían en el cumplimiento como garantía de cómo se manejan sus datos y servicios. Se benefician cuando los informes de garantía son claros, cuando los incidentes se reportan como se exige y cuando los controles no dificultan el uso legítimo más de lo necesario. La comunicación transparente sobre el cumplimiento genera confianza.

## En la práctica: un ejemplo de gestión de servicios

Una empresa de pagos de tamaño medio opera una plataforma de procesamiento de tarjetas y se evalúa cada año frente a un marco de garantía de seguridad y a un régimen de protección de datos. Los números siguientes son ilustrativos.

La preparación de la auditoría lleva a los equipos de ingeniería unas seis semanas cada año. La evaluación del año pasado se cerró con 14 hallazgos, de los cuales 5 se repetían del año anterior. La jefa de cumplimiento cartografía la situación. La cobertura de obligaciones es del 83 por ciento, con el 17 por ciento de las obligaciones sin un responsable de control con nombre. La automatización de la evidencia es del 22 por ciento, y la mayor parte de la evidencia de la aprobación de cambios procede de capturas de pantalla de tickets recopiladas a mano. El plazo mediano de entrega de la evidencia es de 9 días, con un percentil 85 de 21 días. El tiempo mediano de cierre de hallazgos es de 74 días, y el cierre lo marcaba a menudo el equipo propietario sin verificación.

La jefa de cumplimiento trabaja con los equipos de entrega y de operaciones y con la auditora interna. Cambian cuatro cosas. Cada cambio en producción del pipeline se vincula ahora con la solicitud, la revisión de código por alguien distinto del autor, los resultados de las pruebas y el despliegue, registrados automáticamente en el registro de cambio. Una comprobación de política bloquea un despliegue que carece de una revisión independiente y registra la vía de excepción para las emergencias. Las revisiones de acceso se ejecutan cada trimestre desde el sistema de identidad, que muestra directamente los conflictos de segregación de funciones. Cada hallazgo se convierte en un registro de problema, con un verificador independiente de la auditoría interna, y los hallazgos repetidos se vinculan con sus predecesores.

En la siguiente evaluación, la tasa de automatización de la evidencia es del 71 por ciento, el plazo mediano de entrega de la evidencia es de 2 días, el percentil 85 es de 5 días y la preparación de la auditoría lleva unas dos semanas. La cobertura de obligaciones es del 97 por ciento, y los elementos restantes tienen una aceptación documentada. Los hallazgos bajan a 6, con una repetición, y el tiempo mediano de cierre es de 31 días con verificación independiente. El director ejecutivo pide cero hallazgos para el año que viene. La jefa de cumplimiento propone hacer seguimiento de los hallazgos repetidos, del tiempo de cierre y de la automatización de la evidencia, y explica que un objetivo de cero hallazgos empuja a los equipos a esconder problemas o a estrechar el alcance, y que un evaluador que no encuentra nada puede no haber mirado con suficiente dureza. La decisión se anota, y el consejo acuerda revisar las medidas en la próxima reunión.

## Agilidad, IA, automatización y analítica

### Agilidad

Produce la evidencia como subproducto del trabajo e invita pronto a los auditores a la conversación. La precaución es que un objetivo de hallazgos de auditoría puede desalentar el autorreporte honesto.

### IA

Las obligaciones relacionadas con la IA están cambiando, así que comprueba con tu asesor jurídico la ley que se te aplica y mantén un inventario de sistemas de IA como evidencia. No pidas a una herramienta de IA que enuncie afirmaciones de cumplimiento. La precaución es que los resúmenes de evidencia generados por IA necesitan que una persona los verifique frente a la fuente.

### Automatización

Automatiza la recogida de evidencia desde pipelines y herramientas, y mide la tasa de automatización de la evidencia y el plazo de entrega. La precaución es que la automatización puede producir evidencia completa pero equivocada, así que muestréala.

### Analítica

Reporta los hallazgos repetidos y el tiempo de cierre con recuentos. La decisión a la que informa es dónde fallan los controles de forma repetida. La precaución es que el esfuerzo de auditoría es un costo, no una meta, y reducirlo no debe reducir la cobertura.

## Perspectiva sectorial

**Startup.** Las obligaciones pueden llegar de repente con un cliente grande o una ronda de financiación. Crea hábitos pronto: revisión por pares, registros de cambios y control de accesos en el pipeline, para que la evidencia exista cuando se pida. Elige un marco cuando el negocio lo necesite y vincúlalo con lo que ya haces.

**Pequeña empresa.** Los deberes de cumplimiento suelen estar fijados por contratos y por la ley, y los recursos son limitados. Mantén una lista breve de obligaciones, apóyate en servicios gestionados con sus propios informes de garantía y conserva una carpeta de evidencias sencilla. Cuidado con comprar herramientas de cumplimiento que cuesten más que el riesgo que abordan.

**Gran empresa.** Muchas obligaciones se solapan, así que un marco unificado de controles que vincule un control con muchas obligaciones ahorra mucho esfuerzo. Usa fuentes comunes de evidencia, un seguimiento compartido de hallazgos y un calendario de auditorías para evitar solicitudes repetidas. Coordina la auditoría interna, el cumplimiento y la seguridad para que los equipos no sean examinados tres veces por lo mismo.

**Gobierno y sector público.** Los deberes de cumplimiento son extensos y públicos, e incluyen reglas de contratación, de registros, de accesibilidad y de protección de datos, con auditorías por organismos nacionales. Documenta las decisiones y la evidencia durante el periodo exigido, haz coherentes los informes entre organismos donde sea posible y mantén una línea clara entre la auditoría independiente y la dirección. Las obligaciones pueden cambiar con las elecciones y la legislación (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen las herramientas del registro de controles, la integración del pipeline para la evidencia, los sistemas de identidad y de registros y el tiempo del personal de cumplimiento y de los equipos. El esfuerzo inicial de automatizar la evidencia es significativo, y sustituye trabajo manual recurrente.

Los retornos son un menor esfuerzo recurrente de auditoría, respuestas más rápidas a las solicitudes, menos hallazgos repetidos y una visión más honesta de la salud de los controles. Incluyen además el costo evitado de las sorpresas tardías en un ciclo de certificación. Construye el caso con tus propios números: las horas de preparación de la auditoría antes y después, el plazo de entrega de la evidencia, el número y la antigüedad de los hallazgos y el costo de cualquier retraso relacionado con la auditoría en un trato comercial. Evita citar estudios sobre el costo del cumplimiento salvo que puedas rastrear su método y su relevancia. Cuenta el costo del programa y el riesgo de sobreautomatizar controles débiles. El tratamiento financiero más amplio aparece en el último tema de la parte anterior (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Preparar la auditoría en el último mes.** Produce evidencia reconstruida y una carrera. Registra la evidencia a medida que se hace el trabajo.
- **Capturas de pantalla como evidencia.** Son manuales, fáciles de alterar y caras. Usa registros generados por el sistema.
- **Apuntar a cero hallazgos.** Premia el alcance estrecho y los problemas ocultos. Haz seguimiento del cierre, de las repeticiones y de la cobertura.
- **Cerrar hallazgos por afirmación.** El mismo hallazgo vuelve. Verifica el cierre de forma independiente.
- **Tratar a los auditores como adversarios.** Aumenta el costo para ambos lados. Colabora en el diseño de la evidencia preservando la independencia.
- **Controles que no sirven a ninguna obligación.** Cuestan esfuerzo y crían cinismo. Retíralos.
- **Automatizar un mal control.** Produce evidencia de un control débil a escala. Prueba primero el control.
- **Segregación de funciones manual.** Depende de la memoria. Impónla en las herramientas y revisa las excepciones.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Obligaciones y controles | Conocidos por unas pocas personas | Lista de obligaciones y controles | Vinculados con controles, responsables y fuentes de evidencia | Cobertura con seguimiento; solapamiento reducido; controles probados | Marco unificado de controles entre equipos, proveedores y regímenes |
| Evidencia | Recopilada antes de las auditorías | Plantillas estándar y una carpeta de evidencias | Los pipelines y los sistemas de registro producen buena parte de la evidencia | Tasa de automatización, plazo de entrega y esfuerzo gestionados | Garantía continua con los auditores consumiendo directamente la evidencia |
| Hallazgos y aprendizaje | Hallazgos discutidos y cerrados por afirmación | Hallazgos con seguimiento | Hallazgos tratados como registros de problema con verificación independiente | Repeticiones y tiempo de cierre analizados y devueltos al diseño de los controles | Hallazgos compartidos en la organización y con los socios; la mejora es rutina |

## Lista de verificación

- [ ] Las obligaciones aplicables están enumeradas en lenguaje llano, con responsables.
- [ ] Cada obligación está vinculada con controles y con una fuente de evidencia.
- [ ] Los cambios en producción llevan automáticamente vinculada la evidencia de solicitud, revisión, pruebas y despliegue.
- [ ] Las comprobaciones de políticas imponen en el pipeline la revisión y la separación de funciones.
- [ ] Las pistas de auditoría son resistentes a la manipulación y se conservan durante el periodo exigido.
- [ ] Existe un índice de evidencias, y se mide el plazo de entrega de las solicitudes.
- [ ] Se consulta a los auditores sobre el diseño de la evidencia preservando la independencia.
- [ ] Los hallazgos se registran como registros de problema y se cierran con verificación independiente.
- [ ] Los hallazgos repetidos se vinculan con sus predecesores y se examinan sus causas.
- [ ] El esfuerzo de auditoría se sigue como tendencia y se revisa en busca de duplicación.

## Prompts de IA

**Vincula obligaciones con controles.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Planifica la automatización de la evidencia.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Analiza los hallazgos repetidos.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Prepara una conversación temprana con los auditores.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de cumplimiento o de auditoría.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de cumplimiento lleva su vector de manipulación, su barrera de protección y su regla de independencia.

## Ideas clave

- Produce la evidencia como subproducto de la entrega, desde los pipelines y los sistemas de registro, y mide cuánta es automática.
- Vincula cada obligación con un control, un responsable y una fuente de evidencia.
- Invita pronto a los auditores al diseño de la evidencia y protege su independencia.
- Cierra los hallazgos eliminando las causas, verifica el cierre de forma independiente y vigila la tasa de hallazgos repetidos.
- Evita objetivos como cero hallazgos y haz seguimiento del esfuerzo junto a los resultados.
- Impón la separación de funciones en las herramientas y mantén resistentes a la manipulación las pistas de auditoría.

## Referencias y lecturas complementarias

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
