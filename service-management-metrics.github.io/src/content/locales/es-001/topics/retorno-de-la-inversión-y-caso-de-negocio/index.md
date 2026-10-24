# Retorno de la inversión y caso de negocio

**Un caso de negocio es una previsión, así que escríbelo con rangos y supuestos declarados, financia el trabajo por etapas a medida que llega la evidencia y contrasta la previsión con lo que ocurrió para que el siguiente caso sea más honesto que el último.**

## Visión general y motivación

Mejorar cómo se entregan y se operan los servicios de TI cuesta dinero y atención, y cada propuesta compite con otras. Una plataforma nueva, un cambio de dotación, un programa de automatización y una iniciativa de calidad prometen todos un futuro mejor. Los líderes necesitan una forma de compararlos y los equipos necesitan una forma de defender el trabajo que importa. El caso de negocio es la herramienta tradicional, y el retorno de la inversión es su número más conocido.

Un [caso de negocio](https://en.wikipedia.org/wiki/Business_case) es una justificación de un proyecto o emprendimiento propuesto, que normalmente expone el problema, las opciones, los costos, los beneficios y los riesgos. El [retorno de la inversión](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) compara la ganancia de una inversión con su costo. El [costo total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) cuenta todo lo que cuesta un activo o servicio a lo largo de su vida, incluidos la compra, el funcionamiento, el soporte y la eliminación. Los temas anteriores de esta parte aportan los insumos: el costo de los activos, el software, los registros de configuración, los servicios y los recursos en la nube (véase el tema 7.5, Costo del servicio y economía unitaria y el tema 7.6, Métricas de FinOps y costos en la nube), y el tema de beneficios da la evidencia de los resultados (véase el tema 6.5, Realización de valor y resultados de negocio).

Dos tensiones hacen difícil hacer bien los casos de negocio.

- **Los casos de negocio son previsiones, escritas por personas que quieren aprobación.** El autor suele querer que la propuesta tenga éxito, y el incentivo para inflar los beneficios y recortar los costos es fuerte. El [sesgo de optimismo](https://en.wikipedia.org/wiki/Optimism_bias) es la tendencia a esperar mejores resultados de los probables, y está bien documentado en la planificación de proyectos. El correctivo es la [previsión por clase de referencia](https://en.wikipedia.org/wiki/Reference_class_forecasting), que basa las estimaciones en los resultados reales de proyectos pasados similares en lugar de en una historia de abajo arriba. Tu propio historial de casos pasados es la mejor clase de referencia que tienes.
- **La entrega continua cambia lo que un caso de negocio puede prometer.** El enfoque ágil supone que los requisitos y el valor se descubren a medida que avanza el trabajo. Un alcance, un precio y un conjunto de beneficios fijados con un año de antelación chocan con eso. La respuesta ágil es financiar por etapas: un primer paso pequeño para aprender, y más financiación según llega la evidencia. Encaja con el objetivo de la entrega continua y de la colaboración continua con las partes interesadas, y encaja con una función de finanzas que quiere control. Significa además que el caso de negocio es un documento vivo, revisado a medida que se ponen a prueba las hipótesis (véase el tema 6.5, Realización de valor y resultados de negocio).

Algunas ideas de las finanzas ayudan. El [valor temporal del dinero](https://en.wikipedia.org/wiki/Time_value_of_money) dice que una unidad monetaria hoy vale más que una posterior, así que los beneficios más lejanos en el futuro cuentan menos. El [valor actual neto](https://en.wikipedia.org/wiki/Net_present_value) (VAN) convierte un flujo de costos y beneficios futuros en un único valor de hoy usando una tasa de descuento. El [periodo de recuperación](https://en.wikipedia.org/wiki/Payback_period) es el tiempo para recuperar el desembolso inicial. Cada uno es un resumen y cada uno esconde supuestos, así que decláralos. El [costo de oportunidad](https://en.wikipedia.org/wiki/Opportunity_cost) recuerda que el costo de elegir una opción es el valor de la mejor alternativa a la que se renuncia. Un [costo hundido](https://en.wikipedia.org/wiki/Sunk_cost) es dinero ya gastado que no puede recuperarse y no debe impulsar la decisión de continuar.

Todo número de un caso de negocio puede manipularse, eligiendo un periodo generoso, una tasa de descuento favorable o beneficios difíciles de comprobar. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica al propio caso: cuando la aprobación depende de un ROI destacado, los autores aprenden a producirlo (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Por eso las medidas siguientes incluyen una comprobación de la calidad de las previsiones pasadas.

## Principios clave

- **Trata el caso como una previsión con un rango.** Muestra resultados bajos, esperados y altos y declara los supuestos de cada uno.
- **Cuenta el costo completo.** Incluye el funcionamiento, el soporte, la formación, el esfuerzo de cambio y la eliminación además de la construcción.
- **Sé explícito sobre los beneficios y su evidencia.** Separa los ahorros de costos, la evitación de costos, los ingresos y la reducción de riesgos, y di cómo se medirá cada uno.
- **Financia por etapas.** Libera dinero a medida que se prueban las hipótesis y mejora la imagen.
- **Compara con las alternativas, incluida no hacer nada.** El costo de quedarse quieto forma parte del caso.
- **Aprende de tu propio historial.** Contrasta las previsiones con los resultados y ajusta.
- **Ignora los costos hundidos.** Decide sobre lo que tienes por delante.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Retorno de la inversión | Ganancia neta relativa al costo durante un periodo declarado | (beneficios totales menos costos totales) / costos totales durante el periodo | porcentaje | Caso de negocio, libro mayor, registro de beneficios | Gestión financiera del servicio; mejora continua | Revisión de resultados frente a la financiación | En la decisión y en cada revisión |
| Costo total de propiedad | Costo de toda la vida de un servicio o activo durante un periodo declarado | costos de adquisición + funcionamiento + soporte + cambio + formación + eliminación durante el periodo | moneda | Libro mayor, modelos de costos, contratos de proveedores | Gestión financiera del servicio; gestión de activos de TI | Costo de un equipo permanente y sus plataformas | En la decisión y anualmente |
| Periodo de recuperación | Tiempo para que los beneficios netos acumulados igualen la inversión inicial | momento en que los beneficios acumulados menos los costos acumulados llegan a cero | meses | Flujos de caja del caso de negocio | Gestión financiera del servicio | Tiempo hasta el primer valor, ampliado a la recuperación del costo | En la decisión y en cada revisión |
| Valor actual neto | Valor actual de los beneficios esperados menos el valor actual de los costos, a una tasa de descuento declarada | suma, sobre los periodos, de (beneficio menos costo) / (1 + tasa de descuento) elevado al periodo | moneda | Flujos de caja del caso de negocio, política financiera sobre la tasa de descuento | Gestión financiera del servicio | Priorización basada en el valor | En la decisión |
| Exactitud de la estimación de costos | Razón entre el costo real y el estimado de las iniciativas completadas | costo real / costo estimado en la aprobación, por iniciativa y como distribución | razón | Registros de casos de negocio y libro mayor | Gestión financiera del servicio; mejora continua | Exactitud de las previsiones | Trimestral |
| Exactitud de la estimación de beneficios | Razón entre el beneficio realizado y el esperado de las iniciativas completadas, usando las reglas de evidencia de los beneficios | beneficio realizado / beneficio esperado en la aprobación, por iniciativa y como distribución | razón | Registros de casos de negocio y registro de beneficios | Mejora continua; gobernanza del sistema de valor del servicio | Revisión de resultados con las partes interesadas | Trimestral |
| Tasa de detenciones basadas en evidencia | Proporción de iniciativas financiadas que se detuvieron o se reconfiguraron en una puerta de etapa porque la evidencia cambió la imagen | iniciativas detenidas o reconfiguradas con evidencia en una puerta / iniciativas que llegaron a una puerta | porcentaje | Registro de decisiones de las puertas de etapa | Mejora continua; gobernanza de la cartera | Aprendizaje del trabajo publicado | Trimestral |

Declara el periodo, la tasa de descuento y lo que cuenta como costo o beneficio en cada cifra, y regístralos con el caso. El ROI y el VAN dependen mucho de esto, así que dos casos son comparables solo si usan las mismas reglas. La exactitud de costos y de beneficios se muestra como distribuciones, por ejemplo la razón mediana y la dispersión, entre las iniciativas pasadas, no como un único promedio. Una tasa baja de detenciones basadas en evidencia puede significar una buena selección, o puede significar puertas que nunca dicen que no, así que léela con las medidas de exactitud.

## Recomendaciones

### Escribe el caso con honestidad

**1. Empieza por el problema y las opciones.** Describe el problema, quién lo experimenta y cuánto cuesta ahora. Enumera al menos tres opciones: no hacer nada, un paso mínimo y el cambio propuesto, además de cualquier alternativa seria. «No hacer nada» tiene costos, como los incidentes que continúan o el riesgo creciente, e incluirlos hace justa la comparación.

**2. Cuenta el costo total de propiedad durante la vida del cambio.** Incluye la construcción, las licencias, el alojamiento, el funcionamiento, el soporte, la formación, la migración, el tiempo de las personas que lo usarán y la eliminación. Los costos que llegan después del lanzamiento son los que más a menudo se dejan fuera. Usa un periodo que coincida con la vida del beneficio y di cuál es.

**3. Describe cada beneficio y cómo se medirá.** Separa los tipos. Los ahorros de costos reducen el gasto real. La evitación de costos previene un gasto que de otro modo habría ocurrido y es más difícil de verificar. Los beneficios de ingresos dependen del comportamiento del mercado. La reducción de riesgos disminuye la probabilidad o el impacto de una pérdida y se enuncia mejor en términos de un escenario concreto. Para cada uno, nombra el indicador, la línea base y el responsable (véase el tema 6.5, Realización de valor y resultados de negocio).

**4. Da rangos y di qué los impulsa.** Para costos y beneficios, da una estimación baja, una esperada y una alta, con los supuestos principales. Un [análisis de sensibilidad](https://en.wikipedia.org/wiki/Sensitivity_analysis) muestra cómo cambia el resultado cuando cambia un supuesto y qué supuestos importan más. Si el caso solo funciona cuando todos los supuestos son generosos, dilo. La simulación puede combinar rangos, aunque también puede dar una falsa comodidad si los insumos son conjeturas.

### Corrige el optimismo

**5. Usa tu propio historial como clase de referencia.** Mira los resultados reales de costos y beneficios de tus iniciativas similares pasadas y compáralos con lo que se previó. Si las iniciativas pasadas costaron de promedio un 30 por ciento más de lo estimado, una estimación nueva que lo ignore es probable que repita el error. Ajusta, o al menos muestra el ajuste. Las medidas de exactitud de costos y de beneficios descritas arriba construyen este registro.

**6. Haz que alguien ajeno al equipo revise el caso.** Un colega de finanzas o de otro equipo, no implicado en el resultado, lee el caso en busca de costos que faltan, beneficios generosos y supuestos sin probar. Haz rutinaria y constructiva la revisión. Un caso que la supera es más sólido.

**7. Separa, donde sea posible, a quienes estiman de quienes abogan.** Los equipos de entrega son buenos estimando el esfuerzo, y los patrocinadores son buenos juzgando el valor. Cuando la misma persona quiere la aprobación, las estimaciones derivan. Anota quién produjo qué números.

### Financia por etapas

**8. Libera la financiación en pasos atados a la evidencia.** Financia una primera etapa pequeña para poner a prueba el supuesto más arriesgado: construye un corte fino, ejecuta un piloto o mide la línea base. Define de antemano qué evidencia justificaría la etapa siguiente, qué te haría reconfigurar el trabajo y qué te haría detenerte. Es el enfoque ágil del riesgo aplicado al dinero, y limita el costo de equivocarse.

**9. Decide en cada etapa sobre lo que tienes por delante.** El dinero ya gastado es un costo hundido y no debe pesar en si continuar. Pregunta si el costo restante está justificado por el beneficio esperado restante, dado lo que has aprendido. Da permiso a los equipos para detenerse y trata una detención bien fundamentada en evidencia como un buen resultado.

**10. Mantén informadas a las partes interesadas.** Revisa el caso con el patrocinador y el responsable del beneficio en cada etapa. La colaboración con las partes interesadas durante todo el proceso es un objetivo ágil central, y evita que el caso se convierta en un documento que nadie lee tras la aprobación.

### Comprueba y aprende

**11. Revisa el resultado frente al caso.** En los puntos de revisión acordados, compara el costo real y el beneficio realizado con la previsión. Registra las razones, los motivos de las diferencias y lo que cambiarías en el caso siguiente. Haz la revisión sin culpas y factual, ya que el reporte honesto depende de ello.

**12. Reporta la distribución de la exactitud a quienes toman decisiones.** Muestra, entre las iniciativas pasadas, cómo se compararon las previsiones con los resultados. Una cartera donde los beneficios se quedan regularmente cortos en un margen similar dice a los líderes cuánto confiar en un caso nuevo, y da a los autores una razón para ser honestos. Empareja con la tasa de detenciones basadas en evidencia para ver si las puertas funcionan.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Retorno de la inversión | Elegir un periodo largo o contar beneficios blandos; dejar fuera el costo de funcionamiento | Reglas fijas de periodo y de alcance de costos; calidad de la evidencia de los beneficios; revisión independiente |
| Costo total de propiedad | Omitir el soporte, la formación, el esfuerzo de cambio o la eliminación; usar volúmenes optimistas | Lista de verificación de categorías de costos; comparar con el TCO real de trabajos pasados similares |
| Periodo de recuperación | Definir tarde el inicio; contar beneficios que no se realizan | Definición del reloj fija; comparar con la exactitud del beneficio realizado |
| Valor actual neto | Elegir una tasa de descuento baja; ampliar el horizonte | Tasa de descuento fijada por la política de finanzas; análisis de sensibilidad mostrado |
| Exactitud de la estimación de costos | Revisar la estimación de base a posteriori; excluir los excesos como cambios de alcance | Estimación congelada en la aprobación; registrar los cambios de alcance con aprobación; mostrar el costo total hasta completar |
| Exactitud de la estimación de beneficios | Contar beneficios que no se midieron; redefinir el beneficio | Reglas del registro de beneficios; confirma un responsable ajeno al equipo de entrega |
| Tasa de detenciones basadas en evidencia | Detener trabajo de poco valor para inflar la tasa; no detener nunca nada | Leer con las medidas de exactitud; revisar los motivos de las detenciones y de las continuaciones |

Una lectura sana es una cartera con un historial: previsiones algo optimistas de una forma conocida, casos que incluyen rangos y sensibilidad, y puertas que a veces detienen trabajo con evidencia.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Gran caso de negocio inicial | Compromiso y control claros | Fija supuestos; invita al optimismo |
| Financiación por etapas | Limita el costo de equivocarse; aprende pronto | Necesita disciplina en las puertas; menos certeza para planificar |
| Una única cifra de ROI | Sencilla de comparar | Esconde supuestos; fácil de manipular |
| Rango con sensibilidad | Honesto sobre la incertidumbre | Más difícil de comparar; puede parecer vago |
| Caso cualitativo | Capta razones estratégicas y de riesgo | Difícil de comparar y verificar |
| Caso cuantitativo | Comparable y comprobable | Falsa precisión; omite lo que no puede contarse |
| Clase de referencia externa | Corrige el optimismo | Puede no encajar con tu contexto |
| Clase de referencia del propio historial | Encaja con tu contexto | Necesita un registro; muestras pequeñas |

La respuesta en prosa es usar financiación por etapas, rangos y tu propio historial, junto con un breve relato cualitativo de lo que los números pasan por alto. Usa el ROI, el VAN y el periodo de recuperación como resúmenes, no como veredictos.

## Preguntas para debatir con tu equipo

**1. ¿Cuánto se equivocaron nuestros últimos cinco casos de negocio y en qué dirección?**
Reúne los costos y beneficios previstos y reales de iniciativas recientes. Calcula las razones. Mira la dispersión y si los errores se inclinan hacia un lado. El facilitador debe resistirse a las explicaciones en la primera pasada y limitarse a registrar el patrón. Hablen después de lo que implica para el caso siguiente.

**2. ¿Cuál es el supuesto más arriesgado de nuestra propuesta actual y cuán barato sería ponerlo a prueba?**
Enumeren los supuestos y ordénenlos por cuánto depende el caso de cada uno y cuán inseguros estamos. Para el primero, diseñen una prueba pequeña. La respuesta da forma a la primera etapa de financiación.

**3. ¿Cuánto cuesta no hacer nada y lo hemos puesto en el caso?**
Describan el camino probable si la propuesta no se aprueba: costos de incidentes que continúan, mantenimiento creciente, riesgo creciente. Estímenlo con un rango. Comprueben que el caso compara de forma justa con él.

**4. ¿Qué costos aparecen siempre tarde en nuestros proyectos?**
Piensen en el funcionamiento, la formación, la migración y la baja. Comprueben el caso para cada uno. Añadan a la plantilla una lista de verificación estándar de categorías de costos.

**5. ¿Quién ajeno al equipo ha cuestionado nuestros números y qué dijo?**
Revisen la última revisión independiente. Si no hubo ninguna, decidan quién debe hacer la siguiente. La conversación debe dejar claro que la revisión es un servicio al caso, no un ataque.

**6. ¿Cuándo detuvimos por última vez algo porque la evidencia cambió y cómo se sintió?**
Recuerden una iniciativa detenida o reconfigurada. Hablen de cómo se recibió y de lo que hizo por la confianza. Acuerden cómo hacer que la próxima detención se sienta como aprendizaje.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega aportan las estimaciones de costos y aprenden de las etapas de financiación. Deben estimar en rangos, registrar los costos reales y hablar cuando los supuestos se rompen. La financiación por etapas les permite centrarse en aprender lo que más importa, y una detención basada en evidencia debe contar como un éxito.

### Equipos de servicio y de operaciones

Los equipos de operaciones poseen buena parte del costo tras el lanzamiento y a menudo quedan fuera del caso. Debe pedírseles los costos de funcionamiento, el esfuerzo de soporte y los riesgos, y deben comprobar los beneficios que dependen de su trabajo, como la reducción de incidentes. Pueden verificar con sus propios datos las afirmaciones sobre ahorros en operaciones.

### Liderazgo y gobernanza

Los líderes deciden qué se financia y fijan el clima de honestidad. Deben pedir rangos y supuestos, revisar el historial de las previsiones, financiar por etapas y aceptar una detención como un resultado normal. La gobernanza debe exigir una revisión independiente de los casos grandes y una comprobación posterior a la implantación, y debe mirar la cartera de resultados.

### Clientes y usuarios

Los usuarios y los responsables de negocio cargan con los beneficios y con la perturbación. Deben formar parte del caso, ayudando a definir el problema y el beneficio, y se les debe decir qué se decidió y por qué. Su experiencia tras la entrega es la mejor prueba de si el caso era acertado.

## En la práctica: un ejemplo de gestión de servicios

El grupo de TI de una agencia sanitaria provincial propone un programa para automatizar las solicitudes rutinarias de acceso y reducir la gestión manual. Los números siguientes son ilustrativos.

El primer borrador de la propuesta afirma un ROI del 240 por ciento a cinco años, basado en 18 000 solicitudes al año, un costo medio de gestión manual y la automatización completa del 80 por ciento de las solicitudes. La socia financiera sugiere aplicar el propio historial del grupo. Extrae ocho iniciativas pasadas: el costo real fue una mediana de 1,35 veces la estimación, con un rango de 1,0 a 1,9, y el beneficio realizado fue una mediana de 0,6 del beneficio esperado. El grupo descubre además que la cifra de volumen de solicitudes procedía de un único año muy ocupado y que la estimación de costos omitía la formación y el tiempo del personal que revisa las excepciones.

El equipo reescribe el caso con rangos. Usando el historial de costos, el costo esperado sube un tercio. Usando el historial de beneficios, el beneficio esperado se reduce aproximadamente a la mitad. El caso revisado muestra un ROI en un rango que va desde ligeramente negativo hasta aproximadamente el 70 por ciento, un periodo de recuperación entre 20 y 40 meses y un VAN que es positivo en los casos medio y esperado a la tasa de descuento de la política de finanzas y negativo en el caso bajo. El análisis de sensibilidad muestra que lo que más importa es la proporción de solicitudes que pueden automatizarse. La propuesta se reconfigura en etapas. La primera etapa automatiza los tres tipos de solicitud más comunes, con un presupuesto de aproximadamente una quinta parte del total, para probar la proporción de automatización y medir el tiempo de gestión de la línea base. Se escriben los criterios de la segunda etapa: al menos el 50 por ciento de esos tipos de solicitud totalmente automatizados y el tiempo de gestión por solicitud reducido en una cantidad declarada, con la confirmación del responsable del beneficio.

Tras la primera etapa, el 58 por ciento de los tres tipos de solicitud está automatizado, y las excepciones tardan más de lo esperado. El equipo reconfigura la segunda etapa para mejorar el tratamiento de excepciones antes de extenderse a más tipos. El consejo de la agencia pregunta por qué ha bajado la cifra de ROI. La directora explica que la cifra anterior suponía una automatización completa y ningún historial de excesos, y que el nuevo rango es más honesto. La decisión se anota. La reconfiguración de la segunda etapa basada en evidencia se registra, y se actualizan las tablas de exactitud de costos y de beneficios de la cartera.

## Agilidad, IA, automatización y analítica

### Agilidad

Financia el trabajo por etapas a medida que llega la evidencia y comprueba la previsión tras la versión con las partes interesadas. La precaución es que un único caso de negocio grande invita a supuestos optimistas.

### IA

Los casos de negocio de IA suelen apoyarse en afirmaciones de productividad, así que registra la línea base, el cambio medido y los efectos sobre la calidad, y compara la previsión con el resultado. La precaución es que las afirmaciones de los proveedores de IA pueden no trasladarse a tu contexto, así que prueba con un piloto antes de escalar.

### Automatización

Automatiza la recogida de datos de costos y de beneficios donde existan, y mide el proceso del caso de negocio por la exactitud de las estimaciones. La precaución es que los beneficios de la automatización suelen reclamarse como horas ahorradas, que no se convierten en dinero salvo que las horas se utilicen.

### Analítica

Muestra rangos y supuestos y haz seguimiento de la exactitud de las estimaciones a lo largo del tiempo. La decisión a la que informa es si continuar, cambiar o detener. La precaución es que el retorno de la inversión depende de supuestos, así que muéstralos junto a la cifra.

## Perspectiva sectorial

**Startup.** Los recursos son escasos y la velocidad de aprendizaje importa. Usa un caso de una página con el supuesto más arriesgado y una prueba barata, financia en pasos pequeños y evita los modelos financieros elaborados. A menudo la restricción vinculante es la pista de aterrizaje de la caja, no el VAN.

**Pequeña empresa.** El dueño es el patrocinador y la función de finanzas. Céntrate en el periodo de recuperación y el flujo de caja, incluye el tiempo del personal y compara con las opciones de no hacer nada y de comprar. Cuidado con las calculadoras de ROI suministradas por proveedores, que tienden a ser generosas.

**Gran empresa.** La gobernanza de la cartera, la política financiera sobre tasas de descuento y las muchas propuestas en competencia hacen importante la coherencia. Usa una plantilla estándar con categorías de costos obligatorias, revisión independiente de los casos grandes y una revisión posterior a la implantación. Mantén un registro de la exactitud de las previsiones por patrocinador y por tipo de iniciativa como herramienta de cartera, no como clasificación de personas.

**Gobierno y sector público.** Los organismos públicos suelen seguir guías formales de evaluación, como el Green Book del Reino Unido, que establece cómo evaluar las opciones, tratar el sesgo de optimismo y considerar la relación calidad-precio incluidos los beneficios no financieros. Los beneficios pueden ser sociales y difíciles de monetizar, y la transparencia y la auditoría importan. Usa la guía que te corresponda, documenta los supuestos y registra la evidencia de los beneficios (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Este tema trata en sí mismo del caso de negocio, así que lo que importa es el costo de hacerlo bien. Escribir un caso cuidadoso lleva días, no horas, y la revisión independiente lleva más. Hacer seguimiento de la exactitud de costos y de beneficios requiere un registro sencillo de la previsión y del resultado de cada iniciativa, que muchas organizaciones no tienen. La financiación por etapas añade reuniones de gobernanza.

El retorno es una mejor asignación del dinero escaso y menos grandes fracasos. Los casos honestos reducen las sorpresas que siguen a los optimistas. Un historial permite a los líderes descontar adecuadamente los casos nuevos, lo que hace más fiable a toda la cartera. Construye el argumento a partir de tu propio historial: las razones entre costo real y estimado y entre beneficio real y esperado, el dinero gastado en iniciativas que luego se abandonaron y el costo de la revisión comparado con los excesos que evitó. Evita citar estudios sobre tasas de fracaso de proyectos salvo que puedas rastrear el método y su relevancia para tu tipo de trabajo.

## Antipatrones y trampas

- **Una única cifra de ROI presentada como un hecho.** Esconde supuestos. Muestra rangos y sensibilidad.
- **Dejar fuera el costo de funcionamiento.** La construcción es una fracción del costo de la vida. Cuenta toda la vida.
- **Contar los beneficios blandos como duros.** La evitación de costos y las afirmaciones de productividad necesitan evidencia. Etiquétalas y ponlas a prueba.
- **Prever solo de abajo arriba.** Repite el optimismo. Compara con tu propio historial.
- **Toda la financiación por adelantado.** Fija conjeturas. Financia por etapas con puertas de evidencia.
- **Continuar por el dinero ya gastado.** Decide sobre lo que tienes por delante.
- **Corregir tus propios deberes.** Pide a un lector independiente que revise los costos y los beneficios.
- **No revisar nunca el caso.** Sin revisiones de resultados, nada mejora. Contrasta las previsiones con los resultados.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Redacción del caso | Propuesta informal con una cifra destacada | Plantilla con costos y beneficios | Plantilla estándar con lista de verificación de TCO, rangos y sensibilidad | Ajuste con el propio historial aplicado; revisión independiente | Casos codesarrollados con los responsables de negocio y finanzas; supuestos compartidos en la cartera |
| Financiación | Todo por adelantado | Hitos | Financiación por etapas con criterios de evidencia | Las puertas reconfiguran o detienen rutinariamente el trabajo con evidencia | La financiación de la cartera fluctúa entre iniciativas según la evidencia |
| Aprendizaje | Sin seguimiento | Revisión ocasional | Revisión posterior a la implantación frente al caso | Exactitud de costos y de beneficios con seguimiento como distribuciones y usada en casos nuevos | Aprendizaje compartido en la organización y con los socios; el método mejora |

## Lista de verificación

- [ ] El caso enumera las opciones, incluida no hacer nada.
- [ ] El costo total de propiedad cubre la construcción, el funcionamiento, el soporte, la formación, el cambio y la eliminación.
- [ ] Cada beneficio tiene un tipo, un indicador, una línea base y un responsable.
- [ ] Los costos y los beneficios se dan como rangos con los generadores declarados.
- [ ] Un análisis de sensibilidad muestra qué supuestos importan más.
- [ ] Las estimaciones se comparan con tu propio historial de iniciativas similares.
- [ ] Un revisor independiente ha leído el caso.
- [ ] La financiación es por etapas, con criterios de evidencia para continuar, reconfigurar o detener.
- [ ] Los resultados se revisan frente al caso en fechas acordadas.
- [ ] La exactitud de costos y de beneficios de las iniciativas pasadas se reporta a quienes toman decisiones.

## Prompts de IA

**Pon a prueba un caso de negocio.**

```text
Here is a summary of our business case for [initiative]: costs [list with
ranges], benefits [list with types and ranges], period [years], discount rate
[rate set by finance], and assumptions [list]. Identify missing cost
categories, benefits that need stronger evidence, assumptions that dominate the
result, and optimism risks. Suggest a sensitivity analysis and a staged
funding structure. Do not invent figures. List your assumptions and questions
I should answer.
```

**Construye una clase de referencia a partir de nuestro historial.**

```text
We have these past initiatives with forecast and actual cost and benefit:
[paste a table]. Calculate the ratios of actual to forecast, describe the
median and spread, comment on any pattern by type of initiative, and suggest
how to use this when estimating a new initiative. Warn me where the sample is
too small to rely on. Do not use outside benchmarks. List your assumptions.
```

**Diseña puertas de etapa.**

```text
For [initiative], propose three funding stages. For each, state the riskiest
assumption to test, the evidence that would justify moving on, the evidence
that would make us reshape the work, and the evidence that would make us stop.
Keep each stage small and cheap. Do not assume any particular delivery method.
List your assumptions and decisions that need leadership input.
```

**Escribe una revisión posterior a la implantación.**

```text
Draft a one-page post-implementation review for [initiative]. Inputs: the
original case [summary], actual cost [figures], realized benefit and evidence
[summary], and what changed along the way [list]. Include cost and benefit
ratios, reasons for differences, what we would change in the next case, and
questions for the benefit owner. Keep the tone factual and blameless. List your
assumptions and any claim that needs checking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de caso de negocio o de ROI.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica financiera indica su periodo, sus supuestos, su vector de manipulación y su barrera de protección.

## Ideas clave

- Un caso de negocio es una previsión: muestra rangos, supuestos y sensibilidad.
- Cuenta el costo total de propiedad durante la vida del cambio y compara con no hacer nada.
- Corrige el optimismo usando tu propio historial de previsiones y resultados.
- Financia por etapas, decide sobre lo que tienes por delante y trata una detención basada en evidencia como un éxito.
- Revisa los resultados frente al caso y reporta la exactitud a quienes toman decisiones.
- Usa el ROI, el VAN y el periodo de recuperación como resúmenes con reglas declaradas, no como veredictos.

## Referencias y lecturas complementarias

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
