# Métricas de continuidad del servicio

**Un plan de recuperación es una hipótesis hasta que un ejercicio lo ha puesto a prueba, así que las métricas de continuidad deben contar lo que realmente se recuperó, con qué rapidez y cuántos datos volvieron, y nunca el número de planes que hay en una estantería.**

## Visión general y motivación

La mayoría de las medidas de incidentes describen el mal día ordinario: un despliegue fallido, una base de datos saturada, un vecino ruidoso. La continuidad del servicio describe el día raro y grave, cuando falla una región, se corrompe un almacén de datos, desaparece un proveedor o un ransomware cifra todo el parque. La [planificación de la continuidad del negocio](https://en.wikipedia.org/wiki/Business_continuity_planning) es la disciplina de preparar a una organización para seguir entregando a niveles aceptables a través de esos eventos. En ITIL 4, la práctica se llama gestión de la continuidad del servicio, y es la visión de servicios de TI de ese objetivo mayor (véase el tema equivalente de la *Service Management Guide* complementaria).

Dos términos cargan con la mayor parte del peso. El [objetivo de tiempo de recuperación](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) es el tiempo aceptable para restablecer un servicio tras una interrupción. El [objetivo de punto de recuperación](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) es la cantidad aceptable de pérdida de datos, expresada como un lapso de tiempo: un RPO de una hora significa que perder la última hora de escrituras es tolerable y perder más no lo es. Ambos proceden de un [análisis de impacto en el negocio](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), el método para identificar qué actividades importan más, qué depende de qué y cuánto cuesta una interrupción. Los objetivos son decisiones de negocio con un precio, porque unos objetivos más estrictos necesitan más redundancia, más automatización y más tiempo de ejercicio.

La dificultad es que un objetivo es una promesa sobre un evento futuro que no ha ocurrido. La evidencia honesta es una prueba. ¿Restableció el equipo el servicio dentro del RTO en el último ejercicio? ¿Cumplieron los datos restaurados el RPO? ¿Eran los pasos del plan los pasos que el equipo dio de verdad? Una métrica de continuidad es, por tanto, sobre todo una medición de ejercicios, y la calidad de la medición depende de lo realista que fuera el ejercicio.

Los equipos ágiles y de ingeniería de fiabilidad de sitios (SRE) aportan hábitos útiles. Sus sistemas cambian cada semana, así que un plan escrito una vez y archivado queda obsoleto en pocos meses. La respuesta ágil es mantener la recuperación como código (por ejemplo con [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code)), ensayarla a menudo y tratar cada ensayo como una fuente de elementos de la lista de pendientes. La [ingeniería del caos](https://en.wikipedia.org/wiki/Chaos_engineering) y los simulacros (game days) aplican la misma idea a menor escala: provocar un fallo a propósito, de forma controlada, y observar qué ocurre. La visión de SRE se describe en el libro *Site Reliability Engineering* de Google, y el campo más amplio se resume en el artículo sobre [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### En qué difieren las visiones

- **Visión de ITIL.** La gestión de la continuidad del servicio es una práctica que fija los objetivos de recuperación a partir del BIA, diseña planes y los demuestra con pruebas. Sus productos son planes, informes de ejercicios y hallazgos registrados. La norma [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) describe un sistema de gestión de la continuidad del negocio. A octubre de 2026, comprueba directamente la edición vigente si un cliente o un regulador exige conformidad.
- **Visión ágil.** La capacidad de recuperación es una propiedad del producto dentro de la definición de terminado. Una historia que añade un almacén de datos no está terminada hasta que se ha probado su ruta de restauración.
- **Visión de SRE.** El trabajo de fiabilidad se presupuesta y se mide. Los failovers, los simulacros de restauración y los game days son trabajo programado con responsables y con hallazgos que entran en la lista de pendientes.

Este tema cubre siete medidas: la recuperación frente a los objetivos de tiempo y de datos en las pruebas, la cobertura y la actualidad de los ejercicios, las restauraciones de copias de seguridad, el cierre de hallazgos y la vigencia de los planes. Las caídas reales están en las métricas de incidentes graves (véase el tema 3.4, Métricas de incidentes graves) y en las métricas de disponibilidad (véase el tema 5.3, Métricas de disponibilidad). Los objetivos expresados como metas de cara al usuario están en el tema sobre indicadores y presupuestos (véase el tema 5.2, SLI, SLO y presupuestos de errores). El «tiempo de recuperación de un despliegue fallido» del programa de investigación DORA es un reloj mucho menor (véase el tema 2.8, Métricas DORA). Las causas raíz que revelan las pruebas pertenecen a los temas de problemas y aprendizaje (véase el tema 4.1, Métricas de gestión de problemas, y el tema 4.2, Métricas de análisis posteriores y aprendizaje).

Un **nivel** (tier) es una clase de servicio agrupada por la rapidez con que debe volver. Un **ejercicio de mesa** (tabletop) es un ensayo basado en la discusión sin cambios en los sistemas. Un **simulacro** (game day) es un ensayo práctico en que un equipo provoca o simula un fallo y observa la respuesta. Un **hallazgo** es una brecha registrada entre el plan y lo que ocurrió. La **vigencia del plan** es lo bien que un plan refleja el servicio tal como es hoy.

## Principios clave

- **Prueba y después afirma.** Un RTO o un RPO se valida solo con una recuperación realmente realizada y cronometrada. Reporta el objetivo y el último resultado demostrado lado a lado.
- **Mide el realismo, no solo el éxito.** La restauración de una base de datos de prueba vacía que pasó en minutos dice poco sobre una restauración del tamaño de producción. Registra el alcance y las condiciones de cada ejercicio junto al resultado.
- **Organiza el parque en niveles y gasta el esfuerzo según el nivel.** Los servicios críticos reciben pruebas frecuentes y realistas. Los servicios de nivel bajo reciben comprobaciones más ligeras. Un único objetivo de frecuencia para todo desperdicia esfuerzo o pasa por alto riesgos.
- **Trata los hallazgos como el producto de un ejercicio.** El producto valioso de un simulacro es una lista cerrada de brechas. Una prueba sin hallazgos es excelente o demasiado suave, y debes averiguar cuál de las dos.
- **Describe servicios y rotaciones, nunca individuos.** Los resultados de los ejercicios describen el sistema y el plan. Nadie se clasifica por la rapidez con que recuperó un simulacro.
- **Muestra cada ejercicio como su propia fila.** Hay pocas pruebas por servicio y año, así que los promedios engañan (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

## Definiciones de métricas

Cada métrica indica el reloj o el recuento, lo que se excluye y la fuente de datos. Cada fila necesita una regla escrita antes de que se confíe en ella. Un «servicio de nivel 1» en lo que sigue significa un servicio del nivel de recuperación más alto definido por tu propio BIA.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de RTO cumplido | Proporción de ejercicios de recuperación en que el servicio se restableció dentro de su RTO declarado | ejercicios con tiempo de restablecimiento <= RTO / ejercicios realizados. El reloj empieza en el inicio declarado del fallo del ejercicio (hora de inyección o declaración del escenario) y se detiene cuando el servicio supera su comprobación de salud acordada para usuarios reales o sintéticos. Los ejercicios de mesa y los ejercicios sin restablecimiento cronometrado se excluyen y se cuentan aparte | porcentaje, mostrando el número de ejercicios | Informe del ejercicio, cronología de la monitorización, registro de servicios con el RTO | Gestión de la continuidad del servicio; gestión de la disponibilidad | Resultado del simulacro; tiempo de recuperación en las métricas de entrega | Por ejercicio; consolidado trimestralmente |
| Tasa de RPO cumplido | Proporción de ejercicios de recuperación en que la pérdida de datos se mantuvo dentro del RPO declarado | ejercicios con lapso de pérdida de datos medido <= RPO / ejercicios que restauran datos. El lapso de pérdida de datos es el tiempo entre la última escritura presente tras la recuperación y el momento del fallo. Se excluyen los ejercicios que no restauran ningún estado | porcentaje, mostrando el número de ejercicios | Informe del ejercicio, comparación de los datos restaurados con el origen o el registro de escrituras | Gestión de la continuidad del servicio; gestión de la seguridad de la información | Simulacro de restauración como parte de la definición de terminado | Por ejercicio; consolidado trimestralmente |
| Cobertura de recuperación probada | Proporción de servicios de nivel 1 y nivel 2 que tuvieron una prueba práctica de recuperación dentro de su intervalo de pruebas acordado | servicios con una prueba válida dentro del intervalo / servicios del ámbito. Una prueba válida es práctica (no solo de mesa) y restaura el servicio en el entorno de pruebas o de producción. El intervalo se fija por nivel | porcentaje, por nivel | Registro de servicios, calendario e informes de ejercicios | Gestión de la continuidad del servicio; gestión del catálogo de servicios | Calendario de simulacros | Mensual |
| Días desde la última prueba de recuperación exitosa | Antigüedad de la prueba de recuperación superada más reciente de cada servicio crítico | fecha del informe menos fecha de la última prueba que cumplió tanto el RTO como el RPO. Una prueba fallida no reinicia el reloj. Los servicios nunca probados se muestran como «nunca» y no como cero | días, por servicio, destacando el más antiguo | Informes de ejercicios, registro de servicios | Gestión de la continuidad del servicio | Calendario de simulacros; antigüedad de los elementos de trabajo | Mensual |
| Tasa de éxito de restauración de copias de seguridad | Proporción de restauraciones intentadas desde copia de seguridad que se completaron con datos verificados y utilizables | restauraciones que se completaron y superaron una comprobación de verificación de datos / restauraciones intentadas, sobre las pruebas de restauración automáticas y manuales. Se excluye el solo éxito del trabajo de copia, porque un trabajo que se ejecutó no es una restauración que funcionó | porcentaje, por nivel de datos | Registros del sistema de copias de seguridad, resultados de verificación automática de restauración | Gestión de la continuidad del servicio; gestión de la infraestructura y la plataforma | Simulacro de restauración; criterios de operabilidad en la definición de terminado | Semanal para las pruebas automáticas; mensual en la revisión |
| Tasa de cierre de hallazgos de ejercicios | Proporción de hallazgos de los ejercicios de recuperación cerrados dentro de su plazo acordado, dividida por gravedad | hallazgos cerrados dentro del objetivo / hallazgos que vencieron en el periodo. El reloj empieza cuando el hallazgo se registra en el informe del ejercicio y se detiene en la corrección verificada, lo que significa una nueva prueba o una revisión que la confirma. Los hallazgos aceptados como riesgos por un responsable con nombre se cuentan aparte | porcentaje, con el recuento de hallazgos vencidos | Informe del ejercicio, gestor de incidencias | Gestión de la continuidad del servicio; mejora continua | Acciones de la retrospectiva; antigüedad de los elementos de la lista de pendientes | Mensual |
| Vigencia del plan | Proporción de planes de continuidad y runbooks revisados tras el último cambio sustancial de su servicio, o dentro de su intervalo de revisión | planes con una fecha de revisión posterior al último cambio sustancial y dentro del intervalo / planes del ámbito. Cambio sustancial significa un registro de cambio marcado como alterador de la arquitectura, los almacenes de datos, las dependencias o los proveedores | porcentaje, con la antigüedad del plan sin revisar más antiguo | Repositorio de planes (control de versiones), registros de cambios, registro de servicios | Gestión de la continuidad del servicio; habilitación de cambios | La definición de terminado incluye la actualización del runbook | Trimestral |

El reloj del RTO en un ejercicio difiere del reloj en una caída real, que empieza en el impacto (véase el tema 3.4, Métricas de incidentes graves), así que compara ejercicios con ejercicios. Un ejercicio muy guionizado mide la velocidad del ensayo, así que registra cuánta sorpresa contenía.

## Recomendaciones

### Fija objetivos que se puedan probar

**1. Deriva el RTO y el RPO de un análisis de impacto en el negocio y escríbelos junto al servicio.** El BIA pregunta al negocio cuánto cuestan una hora, un día y una semana de caída y qué datos puede permitirse perder. Anota las respuestas en el registro de servicios para que cada prueba pueda compararse con un objetivo declarado. Los objetivos elegidos solo por ingenieros tienden a ser inasequibles o ajenos a lo que los clientes necesitan.

**2. Organiza los servicios en niveles y fija intervalos de prueba por nivel.** Un número reducido de niveles, quizá tres o cuatro, es más fácil de gestionar que una regla distinta para cada servicio. Da al nivel superior las pruebas más frecuentes y más realistas, y da al nivel más bajo una comprobación ligera, como la restauración periódica de una muestra. Escribe los intervalos y revísalos cuando cambie el BIA.

**3. Comprueba que el objetivo encaja con la arquitectura.** Un RPO de cinco minutos con una copia de seguridad nocturna es una contradicción que una prueba expondrá en el peor momento. Compara cada objetivo con el diseño de copias, replicación y failover antes del primer ejercicio y registra cualquier brecha como un hallazgo.

### Prueba de formas que revelen algo

**4. Combina ejercicios de mesa, simulacros de restauración y simulacros de fallo.** Un ejercicio de mesa es barato y encuentra brechas en roles, contactos y decisiones. Un simulacro práctico de restauración encuentra brechas en procedimientos, permisos y datos. Un game day, que provoca un fallo y observa la respuesta, encuentra brechas en la monitorización, los runbooks y la coordinación. Reporta cada tipo por separado para que una racha de ejercicios de mesa fáciles no parezca una prueba de recuperación.

**5. Cronometra la restauración con datos del tamaño de producción.** Una restauración que funciona en una copia pequeña puede fallar con el volumen real por límites de caudal o de almacenamiento. Donde las pruebas a escala completa sean demasiado costosas para ejecutarlas a menudo, ejecuta una periódicamente y declara cualquier extrapolación. Registra el tamaño de los datos con el resultado.

**6. Verifica que los datos restaurados son utilizables.** Añade una comprobación automática tras la restauración, como un recuento de filas, una suma de verificación o una transacción sintética. Cuenta una restauración como exitosa solo cuando esa comprobación pasa.

**7. Añade sorpresa gradualmente.** Los primeros ejercicios pueden anunciarse y guionizarse. Los posteriores deben ocultar detalles del fallo e incluir dependencias como credenciales caducadas o un proveedor inalcanzable. Registra el nivel de sorpresa para poder leer los resultados en contexto.

### Convierte los hallazgos en cambio

**8. Registra cada hallazgo con un responsable, una gravedad y una fecha de vencimiento.** Un simulacro produce una lista: un permiso ausente, un paso de runbook que ya no coincide con la herramienta, un monitor que nunca saltó. Pon cada uno en la lista de pendientes del equipo con la misma visibilidad que el trabajo de funciones. Haz seguimiento de la antigüedad de los hallazgos abiertos y de la proporción cerrada a tiempo, y confirma el cierre con una nueva prueba donde sea práctico.

**9. Vincula los hallazgos con la gestión de problemas y el aprendizaje.** Un hallazgo que se repite entre ejercicios es un problema en el sentido de ITIL (véase el tema 4.1, Métricas de gestión de problemas). Revisa cada ejercicio sin culpas, como harías con un análisis posterior, y haz seguimiento de las acciones hasta su cierre (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

### Mantén vivos los planes

**10. Mantén los planes y runbooks en control de versiones y enlázalos con el cambio.** Cuando un registro de cambio altera la arquitectura, un almacén de datos o un proveedor, exige que el plan correspondiente se revise en el mismo trabajo (véase el tema 4.3, Métricas de habilitación de cambios). Mide la vigencia del plan frente al último cambio sustancial y no solo frente al calendario. Un plan revisado cada trimestre que ignora la migración del mes pasado solo está vigente de nombre.

**11. Mantén honesto el mapa de dependencias.** El orden de recuperación depende de servicios compartidos como la identidad, la resolución de nombres y el almacén de secretos. Concilia el mapa con los registros de configuración y corrige las brechas que revelan los ejercicios (véase el tema 7.4, Métricas de calidad de la configuración y la CMDB).

**12. Incluye a los proveedores y rota el turno de ejercicios.** Pide a cada proveedor crítico su propia evidencia de pruebas y acuerda cómo ejercitar los pasos conjuntos (véase el tema 8.4, Métricas de proveedores y contratos). Los ejercicios consumen tiempo, así que reparte el turno en una rotación y cuéntalo como carga operativa (véase el tema 5.7, Métricas de trabajo repetitivo y guardias).

## Vectores de manipulación y barreras de protección

Los números de continuidad son fáciles de halagar porque poca gente mira de cerca un ejercicio y la prueba real ocurre rara vez. La tabla empareja cada métrica con una forma de manipularla y la comprobación que la detecta. Los emparejamientos siguen la forma expuesta en el tema 1.2 (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de RTO cumplido | Elegir un conjunto de datos de prueba pequeño, un escenario fácil o un guion ensayado; arrancar el reloj tarde, después de que el equipo haya empezado; relajar la comprobación de salud para que «restablecido» llegue antes; fijar un RTO generoso para que todas las pruebas pasen | Registrar con cada resultado el tamaño de los datos, la sorpresa del escenario y la definición de la comprobación de salud; comparar el RTO con el BIA; mostrar cada ejercicio como su propia fila, incluidos los fallos |
| Tasa de RPO cumplido | Medir la pérdida solo para la tabla principal y no para todo el estado; probar una réplica sincronizada porque no hay carga en ejecución; redefinir el RPO tras un resultado incumplido | Verificar la pérdida de datos frente al registro de escrituras en todos los almacenes de datos del ámbito; probar con una carga de escritura realista; llevar un registro de cambios de los objetivos con sus motivos |
| Cobertura de recuperación probada | Contar discusiones de mesa como pruebas; probar un servicio trivialmente pequeño para elevar el porcentaje; reducir la lista del ámbito reclasificando servicios a un nivel inferior | Exigir pruebas prácticas para el recuento del nivel 1; reportar la cobertura ponderada por criticidad del servicio; auditar los cambios de nivel frente al BIA |
| Días desde la última prueba de recuperación exitosa | Volver a ejecutar una prueba fácil para reiniciar la antigüedad; etiquetar una prueba parcial como superada; reiniciar la fecha tras una revisión en papel | Mostrar el alcance de la última prueba superada; mostrar la antigüedad mayor y los servicios nunca probados; exigir que se hayan cumplido tanto el RTO como el RPO |
| Tasa de éxito de restauración de copias de seguridad | Reportar el éxito del trabajo de copia como éxito de restauración; probar solo las copias que se sabe que son buenas; verificar con una comprobación que no puede fallar | Seguir restauraciones de copias muestreadas al azar; exigir un resultado de verificación de datos; revisar la propia comprobación en cada auditoría |
| Tasa de cierre de hallazgos de ejercicios | Cerrar hallazgos sin una corrección; rebajar la gravedad para relajar el vencimiento; dividir un hallazgo en muchos fáciles; registrar pocos hallazgos desde el principio | Verificar el cierre con una nueva prueba; reportar los hallazgos por ejercicio junto a la tasa de cierre, ya que un recuento decreciente puede significar ejercicios más suaves; revisar los cambios de gravedad |
| Vigencia del plan | Actualizar una fecha de revisión sin leer el plan; marcar cambios como no sustanciales; rellenar el plan con texto genérico que nunca queda obsoleto | Muestrear planes y recorrerlos con alguien que no los escribió; comparar la tasa de marcas de cambio sustancial con el historial de cambios de arquitectura; vincular la vigencia con los resultados de las pruebas |

Una lectura sana muestra un puñado de pruebas por trimestre con una variación honesta: algunas superadas al primer intento, otras fallidas y repetidas, y los hallazgos de cada una aparecen en la lista de pendientes y se cierran dentro del plazo declarado. Las puntuaciones perfectas año tras año son motivo para preguntar cuán duros son los ejercicios.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Pruebas de restauración automáticas, pequeñas y frecuentes | Evidencia barata y continua; detecta pronto el fallo silencioso de las copias | No prueba la coordinación, las personas ni la recuperación a escala completa |
| Ejercicio anual de failover a escala completa | Realista; ejercita juntos personas, proveedores y dependencias | Caro y raro; difícil de repetir tras una corrección; conlleva riesgo si se ejecuta en producción |
| Ejercicios de mesa | Bajo costo; encuentra brechas en roles y decisiones; bueno para la formación | No prueba que la tecnología funcione; es fácil ejecutarlo sin aprender nada |
| Game days en producción con fallo inducido | Máximo realismo; prueba la monitorización y los runbooks tal como son | Necesita salvaguardas maduras y apoyo del liderazgo; puede dañar a los clientes si se ejecuta con descuido |
| Objetivos por niveles | Gasta el esfuerzo donde está el riesgo | Las asignaciones de nivel pueden derivar y necesitan un responsable |

La respuesta práctica es un programa por capas: comprobaciones de restauración automáticas y baratas todo el tiempo, simulacros prácticos para cada servicio de nivel 1 con un intervalo fijo, un ejercicio mayor en un ciclo más largo y ejercicios de mesa para las decisiones y la comunicación. Declara los intervalos para que el lector pueda juzgar cuán reciente es la evidencia.

## Preguntas para debatir con tu equipo

**1. ¿Cuándo restauramos por última vez nuestro servicio más importante y qué demostramos exactamente?**
Pide la fecha, el tamaño de los datos, el escenario y el resultado, y anótalos en una pizarra. El facilitador debe resistirse a juzgar y centrarse en la brecha entre la afirmación y la evidencia. Terminen acordando una prueba que cerraría la mayor brecha.

**2. ¿Quién eligió nuestro RTO y nuestro RPO y los elegiría hoy el negocio?**
Rastreen cada objetivo hasta un análisis de impacto en el negocio o una decisión. Pregunta si la arquitectura podría cumplir el objetivo sobre el papel y si alguna vez se declaró el costo de cumplirlo. Acuerden quién confirmará con el negocio los objetivos de los servicios principales y para cuándo.

**3. ¿Cuánto nos costaría en reputación un ejercicio fallido y condiciona eso lo duros que son nuestros ejercicios?**
Esta pregunta saca a la luz la presión que vuelve suaves los ejercicios. Pregunta si una prueba fallida se trata como un fracaso del equipo o como un éxito del ejercicio.

**4. ¿Qué hallazgos de nuestro último ejercicio siguen abiertos y por qué?**
Lean la lista en voz alta con antigüedades y responsables. Para cada elemento vencido, pregunten qué lo bloquea: trabajo competidor, propiedad poco clara, costo o la creencia de que el riesgo es aceptable. El objetivo es que ningún hallazgo quede en un estado sin responsable.

**5. ¿Qué supone nuestro plan que ya no es cierto?**
Elige un plan y léelo con una persona que no lo escribió. Busquen herramientas retiradas, cuentas renombradas y proveedores que se fueron. Pregunta cómo se actualizaría el plan cuando cambie el servicio y quién se da cuenta cuando no se hace. Vinculen la respuesta con el proceso de cambios.

**6. ¿Qué dependencia lo detendría todo y alguna vez hemos probado sin ella?**
Los servicios compartidos como la identidad, la resolución de nombres, los secretos y el propio sistema de avisos son puntos únicos de fallo habituales. Pide al equipo que los nombre y describa la última vez que cada uno estuvo no disponible a propósito.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de producto poseen el diseño que hace posible la recuperación, así que encuentran la continuidad como parte de la definición de terminado de los servicios críticos: una ruta de copia de seguridad, un procedimiento de restauración y un runbook que funciona. Deben ejecutar simulacros de restauración dentro de su propia cadencia, guardar el código de recuperación con el servicio y tratar un simulacro fallido como un elemento de la lista de pendientes.

### Equipos de servicio y de operaciones

Los equipos de operaciones ejecutan la mayoría de los ejercicios y cargan con el trabajo de prepararlos. Deben mantener el calendario de ejercicios, registrar las cronologías mientras el ejercicio se desarrolla y escribir los hallazgos el mismo día. Los resultados describen el servicio y el plan, y nadie se clasifica por la rapidez con que un individuo recuperó un simulacro.

### Liderazgo y gobernanza

Los líderes fijan los objetivos con el negocio y deciden cuánta recuperación vale la pena comprar. Deben pedir ver el último resultado demostrado junto a cada objetivo, la antigüedad de la evidencia y los hallazgos abiertos, y deben evitar premiar una hoja limpia. Los órganos de gobernanza deben esperar un conjunto reducido y estable de medidas de continuidad, vinculado al registro de riesgos y a los informes regulados donde se aplique (véase el tema 8.2, Métricas de riesgos y controles, y el tema 8.5, Informes regulatorios y gubernamentales).

### Clientes y usuarios

Los clientes rara vez ven la continuidad hasta que importa, y entonces la juzgan enteramente por el resultado: cuánto tiempo estuvieron sin el servicio y si sus datos sobrevivieron. Se benefician de declaraciones claras de lo que se promete, en términos que puedan entender, y de una comunicación honesta cuando un incidente invoca el plan. Donde los contratos incluyen compromisos de recuperación, comparte a petición la evidencia de los ejercicios (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un sistema de programación de pacientes, un archivo de imágenes médicas y un servicio de mensajería del personal. Un equipo de producto de ocho personas mantiene la programación y un equipo de operaciones gestiona la plataforma. Todos los números de este ejemplo son ilustrativos.

El registro del departamento enumera la programación como nivel 1 con un RTO de 2 horas y un RPO de 15 minutos. Su informe trimestral muestra «tasa de RTO cumplido: 100 por ciento sobre 4 ejercicios» y «cobertura de recuperación probada: 100 por ciento». Un nuevo jefe de operaciones lee los informes de ejercicios que hay detrás de los números. Tres de los cuatro ejercicios fueron de mesa, y la única restauración práctica usó una copia de la base de datos con aproximadamente una décima parte de los datos de producción. Nadie había restaurado una copia de seguridad en un entorno limpio durante 14 meses.

El equipo decide cambiar lo que se mide y se prueba. Redefine la cobertura de recuperación probada para contar solo las pruebas prácticas, lo que baja la cifra al 33 por ciento entre los tres servicios de nivel 1. Programa una restauración del tamaño de producción para la programación, con verificación automática de recuentos de filas y una transacción sintética de reserva. La ejecución tarda 3 horas 40 minutos frente a un RTO de 2 horas, y los datos restaurados van 40 minutos por detrás del punto de fallo frente a un RPO de 15 minutos, porque el envío de registros se había pausado durante una migración y nunca se reanudó. El simulacro produce 9 hallazgos: 2 de gravedad alta, 5 media y 2 baja.

La decisión anotada en el registro es tratar el fallo como el resultado más valioso del año. El equipo abre trabajo para reanudar el envío de registros con una alerta sobre su retraso, para paralelizar la restauración y para mover un volumen de datos a un almacenamiento más rápido. El RTO se mantiene en 2 horas, y el equipo añade una alternativa manual documentada para la programación. La tasa de cierre de hallazgos de los primeros 60 días es de 7 de 9 a tiempo, con los otros dos aceptados como riesgos por responsables con nombre.

El riesgo de manipulación detectado aquí fue sutil. Nadie falsificó un número: un recuento generoso de ejercicios de mesa y un conjunto de datos de prueba pequeño hicieron que el informe estuviera en verde. Las barreras de protección que funcionaron fueron registrar con cada resultado el tamaño de los datos y el tipo de ejercicio, y la práctica de leer los informes de ejercicios subyacentes. En el siguiente informe, el equipo muestra cada ejercicio como su propia fila, con la ejecución fallida incluida.

## Agilidad, IA, automatización y analítica

### Agilidad

Ensaya la recuperación en ejercicios pequeños y frecuentes con las partes interesadas y corrige lo que revelan. La precaución es que los ejercicios guionizados que siempre pasan dan una falsa comodidad.

### IA

Los servicios de IA añaden dependencias nuevas, como modelos, almacenes vectoriales y APIs de terceros, al plan de recuperación. Inclúyelos en la cobertura de recuperación probada y empareja el tiempo de recuperación con una comprobación de que las respuestas son correctas tras la restauración. La precaución es que un servicio de IA restaurado puede ejecutar una versión distinta del modelo o perder sus datos, así que verifica el comportamiento, no solo la disponibilidad.

### Automatización

Automatiza la verificación de copias de seguridad y las pruebas de restauración, y mide la automatización por las restauraciones fallidas. La precaución es que una copia que se completa no es una copia que se restaura, así que prueba la restauración.

### Analítica

Reporta los objetivos cumplidos en las pruebas con las fechas de la última prueba, y los hallazgos de ejercicios cerrados. La decisión a la que informa es qué recuperación está menos demostrada. La precaución es que pocas recuperaciones reales significan muestras pequeñas, así que muestra los recuentos.

## Perspectiva sectorial

**Startup.** Suele haber un único entorno de producción, un equipo pequeño y un proveedor de nube gestionada. La medida más valiosa es la más sencilla: restaurar cada mes la base de datos de producción desde una copia de seguridad en un entorno limpio, cronometrarlo y verificar el resultado. Escribe el RTO y el RPO en una página.

**Pequeña empresa.** La TI suele estar externalizada o a cargo de una o dos personas en servicios alojados. Pregunta por escrito al proveedor a qué recuperación se compromete y qué evidencia puede mostrar, y prueba una restauración de tus propios datos cada trimestre. Guarda un plan de una página donde pueda leerse cuando los sistemas principales estén caídos.

**Gran empresa.** Muchos servicios, muchos proveedores y plataformas compartidas hacen esenciales los niveles y un mapa de dependencias. Invierte en un registro de servicios central con objetivos, un calendario de ejercicios, verificación automática de restauraciones y un reporte coherente para que los resultados se comparen entre equipos.

**Gobierno y sector público.** Los deberes de continuidad pueden surgir de la ley, la auditoría o la política, y un servicio público puede tener que seguir funcionando durante emergencias. La evidencia de las pruebas a menudo se revisa externamente, así que conserva los informes de ejercicios, los hallazgos y los registros de cierre en una forma que un auditor pueda leer. La contratación puede fijar acuerdos de recuperación, así que incluye en los contratos derechos de ejercicio y evidencia (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Las razones para invertir son el costo de una caída grave que dura más de lo que el negocio puede soportar, la pérdida de datos que no pueden recrearse y las obligaciones con clientes, reguladores y aseguradoras que piden evidencia de preparación. El trabajo de continuidad es un seguro, así que el retorno es la pérdida evitada y la confianza de quienes toman las decisiones, y es difícil expresarlo como una cifra sin inventarla. Descríbelo mediante patrones que puedas observar: la brecha entre el tiempo de recuperación declarado y el demostrado, el número de hallazgos de gravedad alta encontrados en ejercicios en lugar de en eventos reales y el tiempo para responder a una petición de evidencia de un cliente o auditor.

Los costos vienen en tres grupos: la redundancia y las herramientas que exigen los objetivos, el tiempo de las personas para planificar, ejecutar y revisar los ejercicios, y el esfuerzo para mantener vigentes los planes y los mapas de dependencias.

El costo total de propiedad está dominado por las personas y por los niveles más estrictos. Pasar de un RTO de 24 horas a uno de 2 horas cambia el diseño y la factura, así que haz explícita esa compensación con el negocio. Las pruebas pequeñas, frecuentes y automatizadas tienden a costar menos que un gran evento anual porque los defectos afloran mientras es barato corregirlos.

## Antipatrones y trampas

- **El plan en la estantería.** Un documento cuenta como preparación y nadie lo ha probado. En su lugar, reporta la fecha y el resultado de la última prueba práctica junto a cada objetivo.
- **El éxito de la copia como éxito de la restauración.** Los trabajos reportan verde mientras los datos no pueden restaurarse. En su lugar, prueba las restauraciones con regularidad y verifica los datos antes de contar un éxito.
- **Teatro ensayado.** El ejercicio está guionizado y lo ejecutan los autores del plan. En su lugar, añade sorpresa gradualmente.
- **Un objetivo para todo.** Todos los servicios tienen un RTO de cuatro horas porque la plantilla lo decía. En su lugar, organiza los servicios en niveles a partir de un análisis de impacto en el negocio y fija objetivos que encajen.
- **Hallazgos que nunca se cierran.** El informe del ejercicio enumera brechas y la lista de pendientes nunca las ve. En su lugar, da a cada hallazgo un responsable y una fecha de vencimiento y verifica el cierre con una nueva prueba.
- **Penalizar la prueba fallida.** Un equipo al que se culpa por un RTO incumplido dejará de ejecutar pruebas duras. En su lugar, acuerda de antemano que un ejercicio fallido con buenos hallazgos es un buen resultado y revísalo sin culpas.
- **Planes obsoletos tras un cambio rápido.** El calendario impulsa la revisión y los cambios de arquitectura se cuelan. En su lugar, vincula la revisión del plan con los registros de cambios sustanciales y mide la vigencia del plan frente a ellos.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Objetivos y niveles | RTO y RPO sin escribir o copiados de una plantilla | Objetivos escritos para algunos servicios clave | Niveles y objetivos proceden de un análisis de impacto en el negocio y figuran en el registro de servicios | Objetivos revisados frente a los resultados demostrados y la arquitectura | Objetivos acordados conjuntamente con el negocio y los proveedores, y ajustados según cambian los servicios |
| Pruebas y evidencia | Recuperación nunca probada, o probada una vez tras un incidente | Pruebas de restauración ad hoc de algunos equipos; resultados guardados en notas personales | Intervalos de prueba por niveles con alcance, cronología y resultado registrados | Resultados con tendencias, con ejercicios de mesa, simulacros y game days reportados por separado | Ejercicios entre equipos y con proveedores, con sorpresa, programados a partir del riesgo |
| Hallazgos y aprendizaje | Brechas notadas de manera informal | Hallazgos enumerados tras algunos ejercicios | Cada hallazgo tiene un responsable, una gravedad y una fecha de vencimiento | Tasa de cierre y antigüedad revisadas, con una nueva prueba que confirma el cierre | Los hallazgos alimentan plataformas compartidas, contratos con proveedores y estándares de diseño |
| Vigencia del plan | Planes escritos una vez | Planes actualizados tras los incidentes | Planes en control de versiones con un intervalo de revisión | Revisión vinculada a los cambios sustanciales y medida | Planes y runbooks probados como código y generados a partir de la definición del servicio donde sea posible |

## Lista de verificación

- [ ] Cada servicio de nivel 1 tiene un RTO y un RPO escritos que proceden de un análisis de impacto en el negocio.
- [ ] El registro de servicios muestra el nivel, los objetivos y el intervalo de pruebas de cada servicio.
- [ ] Los relojes del RTO y del RPO, la comprobación de salud y las exclusiones están escritos (véase el tema 1.5, Fuentes de datos e instrumentación).
- [ ] Las pruebas prácticas de recuperación, los ejercicios de mesa y los game days se reportan como tipos separados.
- [ ] Toda prueba de recuperación registra el tamaño de los datos, el escenario, el nivel de sorpresa y el tiempo de restauración y la pérdida de datos medidos.
- [ ] Las restauraciones desde copia de seguridad se prueban automáticamente, y una comprobación de verificación de datos decide el éxito.
- [ ] Cada hallazgo de ejercicio tiene un responsable, una gravedad, una fecha de vencimiento y un lugar en la lista de pendientes.
- [ ] La revisión de planes está vinculada a los registros de cambios sustanciales, y el plan sin revisar más antiguo es visible.
- [ ] El mapa de dependencias incluye los servicios compartidos, y al menos un escenario elimina uno de ellos.
- [ ] Cada métrica de este tema tiene una barrera de protección con nombre y un responsable en el registro de métricas (véase el tema 1.4, Gobernanza y propiedad de las métricas).
- [ ] El turno de ejercicios rota, y el tiempo que lleva se cuenta como carga operativa.

## Prompts de IA

**Diseña una prueba de recuperación y las medidas que la acompañan.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Revisa los informes de ejercicios en busca de evidencia halagadora.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Convierte las notas de un simulacro en hallazgos y elementos de la lista de pendientes.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Comprueba la vigencia de un plan frente al cambio reciente.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que define una métrica de continuidad, de recuperación o de ejercicios, y la barrera de protección que emparejar con ella.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica de continuidad editada indica sus relojes, sus exclusiones y su vector de manipulación.

## Ideas clave

- Un objetivo de recuperación es una promesa, y solo un ejercicio cronometrado y realista muestra si puede cumplirse.
- Reporta el último resultado demostrado y su antigüedad junto a cada RTO y RPO, y muestra cada ejercicio como su propia fila.
- Prueba las restauraciones, no las copias: una restauración cuenta solo cuando se ha verificado que los datos son utilizables.
- El producto de un ejercicio es una lista cerrada de hallazgos, así que haz seguimiento de su antigüedad y confirma el cierre con una nueva prueba.
- Mantén los planes en control de versiones y ata su revisión al cambio sustancial, y no solo al calendario.
- Mide servicios y planes, nunca personas, y haz de un ejercicio fallido con buenos hallazgos un resultado seguro y respetado.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
