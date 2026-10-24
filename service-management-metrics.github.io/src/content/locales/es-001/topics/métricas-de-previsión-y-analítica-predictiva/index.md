# Métricas de previsión y analítica predictiva

**Una previsión es un rango con un historial, no una fecha ni un número que defender, así que mide con qué frecuencia el resultado real cayó dentro del rango declarado, si el rango fue honesto en su anchura y si alguien tomó una mejor decisión gracias a ella.**

## Visión general y motivación

La [previsión](https://en.wikipedia.org/wiki/Forecasting) estima una cantidad futura a partir de datos pasados y supuestos declarados. Las organizaciones de servicio prevén la demanda de soporte, la capacidad de una plataforma, la fecha en que terminará un trabajo, la probabilidad de que un cambio falle y el costo de un servicio el año próximo. Los modelos predictivos, incluidos los de aprendizaje automático, extienden esto a puntuar elementos individuales: qué ticket incumplirá su objetivo, qué cambio es arriesgado, qué incidente es probable que se repita.

Las previsiones y las predicciones fallan de maneras corrientes. El pasado puede no parecerse al futuro, porque ha cambiado un servicio, un equipo o una herramienta. Los datos pueden ser escasos o sesgados. El rango puede ser demasiado estrecho, porque un solo número parece más útil que un intervalo. Y la previsión puede usarse como un compromiso, de modo que la gente trabaja para hacerla realidad o esconde lo que la contradice.

Los temas anteriores dieron previsiones para usos concretos: las fechas de entrega a partir del caudal (véase el tema 2.5, Métricas de pronóstico y planificación de entregas), la capacidad a partir de la demanda (véase el tema 5.4, Métricas de capacidad y rendimiento) y el costo (véase el tema 7.5, Costo del servicio y economía unitaria). Este tema da el método general para medir la calidad de cualquier previsión o predicción, que se aplica a todas ellas. Cubre además los modelos predictivos cuya salida impulsa una acción, donde el costo de una predicción errónea recae en alguien.

Términos usados aquí. Una **previsión puntual** es un solo valor predicho. Un **intervalo de predicción** es un rango destinado a contener el valor real con una probabilidad declarada. La **calibración** es la concordancia entre la probabilidad declarada y la frecuencia observada: de las previsiones que decían 80 por ciento, aproximadamente el 80 por ciento deberían cumplirse. El **error de previsión** es la diferencia entre la previsión y lo real. Una **previsión de línea base** es un método sencillo, como «igual que el periodo anterior», con el que se compara un método más complejo. Un **falso positivo** es la predicción de un evento que no ocurre, y un **falso negativo** es el fallo de no predecir uno que sí ocurre. La **deriva** es un cambio en los datos o en la relación entre las entradas y los resultados que reduce con el tiempo la exactitud de un modelo.

## Principios clave

- **Prevé en rangos y conserva un historial.** Una previsión que nunca se comprueba no puede mejorar.
- **Compara con una línea base sencilla.** Un modelo complejo que no supera a «igual que el periodo anterior» no se gana su costo.
- **La calibración importa tanto como la exactitud.** Una previsión que dice 90 por ciento debería acertar unas nueve veces de cada diez.
- **Ajusta el costo de los errores a la decisión.** Una falsa alarma y una omisión no cuestan lo mismo.
- **Vigila la deriva.** Las previsiones se deterioran cuando cambia el mundo, así que monitorízalas.
- **Una previsión no es un compromiso.** No la conviertas en un objetivo para las personas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura del intervalo de previsión | Proporción de resultados reales que cayeron dentro del intervalo de predicción declarado | resultados dentro del intervalo / previsiones evaluadas; las previsiones evaluadas son aquellas cuyo resultado se conoce | porcentaje | Registro de previsiones y datos reales | Gestión de la capacidad y el rendimiento; gestión financiera | Previsión con rangos a partir del caudal | Trimestral |
| Error de previsión | Tamaño típico de la diferencia entre la previsión y lo real | mediana del error absoluto y su percentil 85, donde error absoluto = valor absoluto de (previsión menos real) / real, sobre las previsiones evaluadas | porcentaje | Registro de previsiones y datos reales | Gestión de la capacidad y el rendimiento | Revisión de la planificación | Trimestral |
| Destreza frente a la línea base | Mejora del método de previsión sobre una línea base sencilla | 1 menos (mediana del error absoluto del método / mediana del error absoluto de la línea base) sobre las mismas previsiones | razón | Registro de previsiones, registro de la línea base y datos reales | Mejora continua | Experimentar y comparar | Trimestral |
| Brecha de calibración | Diferencia entre la probabilidad declarada y la frecuencia observada | para cada banda de probabilidad, valor absoluto de (probabilidad declarada menos proporción observada) promediado entre bandas; las bandas con menos de un número declarado de casos se reportan aparte | puntos porcentuales | Registro de previsiones probabilísticas y resultados | Gestión de riesgos; habilitación de cambios | Retrospectiva sobre las estimaciones | Trimestral |
| Precisión y exhaustividad de las alertas | Para una alerta o puntuación predictiva, la proporción de alertas que acertaron y la proporción de eventos captados | precisión = verdaderos positivos / (verdaderos positivos + falsos positivos); exhaustividad = verdaderos positivos / (verdaderos positivos + falsos negativos) | porcentaje | Registro de predicciones y resultados | Gestión de incidentes; gestión de eventos | Definición de terminado para el modelo | Mensual |
| Señal de deriva de la previsión | Aumento del error con el tiempo comparado con un periodo de referencia | mediana del error absoluto en la ventana más reciente menos mediana del error absoluto en la ventana de referencia, con los tamaños de ventana declarados | puntos porcentuales | Registro de previsiones y datos reales | Mejora continua; gestión de la capacidad | Inspeccionar y adaptar | Mensual |
| Vinculación de la previsión con decisiones | Proporción de previsiones citadas en una decisión registrada | previsiones citadas en el registro de decisiones / previsiones publicadas | porcentaje | Registro de decisiones y registro de previsiones | Mejora continua; gobernanza | Acciones de revisión | Trimestral |

El error de previsión y la cobertura se calculan solo para las previsiones cuyo resultado se conoce, así que las previsiones recientes se excluyen hasta entonces. La precisión y la exhaustividad dependen de cómo se defina un evento, así que la definición del evento, como «un cambio que causa un incidente en 48 horas», se declara con la métrica.

## Recomendaciones

### Prevé con honestidad

**1. Publica rangos, no fechas únicas.** Da un intervalo con una probabilidad declarada, como «entre 12 y 18 días laborables, con una confianza del 85 por ciento», y explica el supuesto que hay detrás. Un solo número invita a un compromiso.

**2. Conserva un registro de previsiones.** Anota cada previsión cuando se hace: la cantidad, el valor o el rango, la fecha, el método y los supuestos. Añade lo real cuando se conozca. Sin el registro, no hay historial.

**3. Empieza con una línea base sencilla.** Compara cualquier método nuevo con uno ingenuo, como el valor del periodo anterior o un promedio reciente. Si un método complejo no lo supera con claridad con el tiempo, quédate con el sencillo.

**4. Declara los supuestos que invalidarían la previsión.** Una previsión de demanda supone que no habrá un gran lanzamiento, ni una caída, ni un nuevo grupo de clientes. Escribe el supuesto junto al número, para que el lector sepa cuándo desconfiar.

### Mide la calidad

**5. Comprueba la cobertura y la calibración.** Cuenta con qué frecuencia caen los resultados dentro del intervalo. Si un intervalo del 85 por ciento contiene el resultado solo la mitad de las veces, es demasiado estrecho. Reporta la calibración con el número de casos, ya que las muestras pequeñas son ruidosas.

**6. Lee los errores como una distribución.** Un error mediano del 10 por ciento puede esconder fallos ocasionales del 50 por ciento que son los que más importan. Muestra un percentil alto y las mayores desviaciones y revísalas.

**7. Ajusta la medida al costo de la decisión.** Para una alerta predictiva, elige la precisión o la exhaustividad según el costo de una falsa alarma y de una omisión. Una alerta de fraude y una sugerencia de encaminamiento de bajo riesgo tienen equilibrios distintos.

**8. Vigila la deriva.** Compara el error reciente con un periodo de referencia e investiga los aumentos. Las causas comunes son un servicio nuevo, un proceso cambiado, herramientas nuevas o un cambio en cómo se registran los datos.

### Usa bien las previsiones

**9. Vincula las previsiones con las decisiones.** Di qué decisión informa una previsión y anota en el registro de decisiones qué se decidió. Retira las previsiones que nadie usa.

**10. Mantén las previsiones lejos de los objetivos para las personas.** Una previsión del volumen de incidentes que se convierta en cuota para el centro de servicios distorsionará el reporte. Trata las previsiones como información sobre un sistema.

**11. Mantén a un humano responsable de actuar sobre las predicciones.** Para los modelos que puntúan elementos, nombra al responsable, la acción que se toma ante una puntuación, cómo puede anularla una persona y cómo se reportan los errores. Revisa los falsos positivos y los falsos negativos con casos muestreados.

**12. Vigila el sesgo y el daño.** Un modelo entrenado con decisiones pasadas puede repetir su sesgo. Comprueba los resultados para grupos de usuarios o de servicios que salen de manera distinta y reporta lo que la comprobación no puede mostrar. Este libro no da asesoramiento jurídico, así que comprueba las obligaciones con tu propio asesor jurídico.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura del intervalo de previsión | Ensanchar los intervalos hasta que la cobertura parezca buena; evaluar solo las previsiones fáciles | Reportar la anchura del intervalo junto a la cobertura; evaluar todas las previsiones registradas |
| Error de previsión | Revisar la previsión justo antes del resultado; elegir la ventana de evaluación | Usar la previsión original registrada; fijar la ventana de antemano |
| Destreza frente a la línea base | Elegir una línea base débil; ajustar el método con los datos de evaluación | Acordar la línea base de antemano; evaluar con datos no usados para el ajuste |
| Brecha de calibración | Usar pocas bandas o pocos casos; fusionar bandas para esconder brechas | Reportar el número de casos por banda; recuentos mínimos de casos |
| Precisión y exhaustividad de las alertas | Redefinir los eventos a posteriori; contar duplicados | Fijar la definición del evento de antemano; eliminar duplicados; muestrear alertas |
| Señal de deriva de la previsión | Reiniciar el periodo de referencia; ignorar la deriva lenta | Fijar la ventana de referencia y revisarla según un calendario |
| Vinculación de la previsión con decisiones | Citar previsiones en un registro sin efecto sobre la decisión | Preguntar qué cambió; muestrear entradas |

Una lectura sana son intervalos que cubren la proporción declarada de resultados sin ser absurdamente anchos, líneas base sencillas que los métodos complejos superan con un margen claro, deriva notada e investigada y previsiones que aparecen en las decisiones.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Previsiones con línea base sencilla | Fáciles de explicar y mantener; difíciles de sobreajustar | Pierden patrones y cambios |
| Modelos estadísticos o de aprendizaje automático | Captan más patrones; escalan entre elementos | Difíciles de explicar; deriva; necesitan monitorización y datos |
| Previsiones puntuales | Fáciles de comunicar | Falsa precisión; invitan al compromiso |
| Previsiones por intervalos | Honestas sobre la incertidumbre | Más difíciles de comunicar; pueden leerse como vagas |
| Juicio de expertos | Usa un contexto que le falta a un modelo | Sesgado; difícil de seguir |

La conclusión en prosa es empezar de forma sencilla, conservar el registro, mostrar intervalos y añadir complejidad solo cuando se gane su lugar frente a una línea base. El juicio y los modelos pueden trabajar juntos si ambos se registran y se comprueban.

## Preguntas para debatir con tu equipo

**1. ¿Cuál fue la última previsión que hicimos y cómo salió?**
La mayoría de los equipos no lo saben, porque las previsiones no se registran. Pidan el número, el supuesto y lo real. Noten si la sorpresa vino de los datos o del supuesto. Después empiecen un registro de previsiones con ese ejemplo.

**2. ¿Qué previsión tratamos como un compromiso y quién paga cuando se equivoca?**
Busquen previsiones que se convirtieron en objetivos, como fechas de entrega o cifras de volumen. Pregunten quién siente la presión y qué hace. Hablen de los rangos y del lenguaje usado para comunicarlos. Después reescriban un compromiso como un rango con supuestos.

**3. ¿Supera nuestro modelo o herramienta predictiva a «igual que el periodo anterior»?**
Pidan la comparación, no la afirmación del proveedor. Los equipos a menudo no tienen línea base. Hablen de cómo comparar con justicia sobre los mismos casos. Después ejecuten la línea base en paralelo durante un trimestre.

**4. ¿Cuánto nos cuesta una falsa alarma y cuánto una omisión?**
Esto fija el equilibrio entre precisión y exhaustividad. Pidan ejemplos reales. Los costos suelen ser distintos para personas distintas, como un ingeniero de guardia y un cliente. Después acuerden qué error importa más.

**5. ¿Qué haría que nuestras previsiones dejaran de funcionar y lo notaríamos?**
Hablen de cambios como un producto nuevo, una herramienta nueva o una forma distinta de registrar los datos. Pidan la señal que mostraría la deriva. Después añadan una comprobación de deriva y un responsable.

**6. ¿Quién actúa sobre una predicción y puede decir que no?**
Para los elementos puntuados, pregunten quién decide qué ocurre. Busquen acciones automáticas sin posibilidad de anulación. Hablen de cómo se reportan y se corrigen los errores. Después escriban la regla de anulación.

## Cuatro perspectivas

### Equipos de producto y de entrega

Prevean a partir de su propio historial y den rangos. Registren las previsiones y compárenlas con lo real, y marquen los cambios que vuelven al historial una mala guía, como una herramienta nueva o un cambio de equipo. Mantengan los números de planificación locales del equipo fuera de las comparaciones entre equipos.

### Equipos de servicio y de operaciones

Las previsiones de demanda, de capacidad y de incidentes ayudan a la dotación de personal y a la prevención. Úsenlas para planificar, no para fijar cuotas. Vigilen los modelos de alertas que aumentan el ruido y reporten los falsos positivos para que los modelos puedan afinarse.

### Liderazgo y gobernanza

Pidan el historial que hay detrás de una previsión, no solo su valor, y el intervalo. Eviten convertir las previsiones en objetivos para las personas. Para los modelos predictivos usados en operaciones, pidan el responsable, la regla de anulación y la comprobación del sesgo.

### Clientes y usuarios

Ustedes sienten el efecto de las previsiones como esperas, caídas y decisiones tomadas sobre ustedes. Pregunten cómo se comprueban las predicciones que les afectan y cómo pueden impugnar una. Sus reportes de resultados erróneos son parte de la retroalimentación que necesita el modelo.

## En la práctica: un ejemplo de gestión de servicios

El centro de servicios de TI de un organismo del gobierno regional prevé el volumen semanal de tickets para planificar la dotación de personal. Los números de este ejemplo son ilustrativos. Una herramienta de un proveedor ofrece una previsión de aprendizaje automático, y el gerente quiere saber si adoptarla.

El equipo empieza un registro de previsiones. Durante diez semanas anotan tres previsiones para cada semana: la previsión puntual del proveedor, una línea base ingenua (el promedio de las últimas cuatro semanas) y un rango a partir de los errores recientes de la línea base. Después calculan el error de previsión de cada una. El error mediano del proveedor es del 11 por ciento y el de la línea base del 13 por ciento, así que la destreza frente a la línea base es del 15 por ciento. El error en el percentil 85 del proveedor es del 38 por ciento, con grandes desviaciones en semanas con anuncios del organismo, que no están en los datos que usa la herramienta.

El equipo adopta la previsión del proveedor como un insumo, añade un campo para eventos conocidos y publica un rango basado en errores pasados. La cobertura del intervalo de previsión para el rango declarado del 85 por ciento es de aproximadamente el 80 por ciento en las diez semanas, con un recuento pequeño, así que lo reportan con la salvedad de que diez casos son pocos. Establecen además una comprobación de deriva que compara las últimas ocho semanas de error con las ocho primeras.

Aparece un riesgo de manipulación. Un responsable de equipo nota que la previsión se usa para fijar la dotación y sugiere añadir un colchón a la previsión para que el equipo parezca bien dotado. El equipo mantiene honesta la previsión y registra el colchón de dotación como una decisión aparte. Lo que sigue siendo difícil: los eventos que la herramienta no puede ver siguen causando grandes desviaciones, y diez semanas de datos no bastan para juzgar la calibración. El plan es revisarlo de nuevo tras un periodo más largo.

## Agilidad, IA, automatización y analítica

### Agilidad

Los ciclos de planificación cortos permiten a un equipo comprobar las previsiones a menudo y revisarlas con las partes interesadas. Una buena práctica es prever con rangos a partir del propio caudal del equipo y revisar el historial en la conversación regular de mejora. La precaución es que una previsión tratada como una promesa lleva a rellenar, esconder o dividir el trabajo.

### IA

Los modelos de aprendizaje automático y los asistentes de IA pueden producir previsiones y puntuaciones de riesgo, con apariencia de precisión. Compáralos con una línea base, mantén un responsable, comprueba la calibración y las tasas de falsos positivos y negativos mediante muestreo y mantén a un humano responsable de las acciones tomadas ante una puntuación (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA). La precaución es que una previsión generada por IA puede dar un número seguro sin intervalo y sin supuestos declarados, así que pide ambos.

### Automatización

Automatiza el registro de las previsiones, la recogida de lo real y el cálculo del error y de la cobertura, para que el historial se construya solo. Mide las acciones automatizadas que siguen a una predicción por sus acciones erróneas. La precaución es que la automatización que actúa sobre una previsión, como escalar la capacidad o enviar avisos, hace visibles a los usuarios los errores de previsión, así que añade límites y revisión.

### Analítica

Este tema es la analítica de las previsiones: muestra el error como una distribución, la cobertura con recuentos y la deriva con la ventana usada. La decisión a la que informa es cuánto confiar en una previsión y cuándo sustituir el método. La precaución es que las muestras pequeñas dan una calibración inestable, así que declara el número de previsiones detrás de cada cifra (véase el tema 10.8, Métricas de analítica y calidad de datos).

## Perspectiva sectorial

**Startup.** El historial es corto y el servicio cambia a menudo, así que las previsiones son débiles. Usa líneas base sencillas y rangos amplios y mantén un registro breve. Evita comprar herramientas de previsión antes de que haya datos.

**Pequeña empresa.** Dominan la estacionalidad y unos pocos clientes grandes. Usa el mismo periodo del año pasado como línea base y anota los eventos que rompen el patrón. Ten cuidado con las previsiones de proveedores que presumen de precisión.

**Gran empresa.** Muchas previsiones entre equipos necesitan un registro y unas definiciones comunes. Compara los métodos con justicia entre equipos y evita clasificar a los equipos por la exactitud de sus previsiones. Revisa los modelos por deriva según un calendario.

**Gobierno y sector público.** Las previsiones suelen respaldar decisiones presupuestarias y de dotación que son públicas. Documenta los métodos y los supuestos y comprueba las reglas sobre decisiones automatizadas que afectan a las personas. Planifica los eventos externos, como los cambios de política, que rompen los datos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el trabajo con datos, el registro de previsiones, las herramientas de modelado si se usan, el tiempo de revisión y la monitorización de la deriva de los modelos. Empezar con un registro y una línea base ingenua cuesta muy poco.

El retorno es una mejor planificación: capacidad que llega antes de la necesidad, una dotación de personal que se ajusta a la demanda y menos sorpresas. Es difícil de atribuir, así que evita reclamar una cifra. Compara el costo y el error de un método de previsión con la línea base a lo largo del tiempo y declara los supuestos como rangos (véase el tema 7.7, Retorno de la inversión y caso de negocio). El lado del riesgo es el costo de depender en exceso de un modelo que ha derivado y de las decisiones tomadas con falsa precisión.

## Antipatrones y trampas

- **Previsiones de un solo número tratadas como promesas.** Producen relleno y culpas. Publica rangos con supuestos.
- **Sin registro de previsiones.** No hay forma de aprender. Anota las previsiones y lo real.
- **Comprar un modelo sin línea base.** La ganancia es desconocida. Compara con «igual que el periodo anterior».
- **Juzgar la exactitud con los datos de entrenamiento.** Halaga al modelo. Evalúa con datos posteriores.
- **Ignorar los falsos positivos.** Las predicciones ruidosas enseñan a la gente a ignorarlas. Reporta la precisión y la exhaustividad.
- **Previsiones como objetivos para las personas.** Distorsionan los datos. Úsalas para planificar.
- **Sin comprobación de deriva.** Los modelos se deterioran en silencio. Monitoriza el error a lo largo del tiempo.
- **Predicciones sin un responsable humano.** Las acciones erróneas no tienen a nadie que responda. Nombra un responsable y una regla de anulación.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Práctica de previsión | Números únicos; sin registro | Algunos rangos; notas informales | Registro de previsiones con rangos, supuestos y datos reales | Error, cobertura y línea base comparados con una cadencia | Previsiones y métodos mejorados mediante experimentos y compartidos entre equipos |
| Modelos predictivos | Se aceptan las afirmaciones de los proveedores | Piloto comparado con una línea base | Responsable, evaluación y regla de anulación por modelo | Deriva, precisión y exhaustividad monitorizadas | Ciclo de vida del modelo gestionado con supervisión y retirada |
| Uso en las decisiones | Previsiones como compromisos | Previsiones mostradas a quienes deciden | Previsiones vinculadas a las decisiones en un registro | Decisiones revisadas frente a los resultados de las previsiones | Las decisiones se adaptan a la incertidumbre de la previsión |

## Lista de verificación

- [ ] Un registro de previsiones anota la cantidad, el valor o el rango, la fecha, el método y los supuestos.
- [ ] Se añaden los datos reales y el error de previsión se reporta como una distribución.
- [ ] Una línea base sencilla se ejecuta en paralelo a cualquier previsión compleja.
- [ ] La cobertura del intervalo se reporta con la anchura del intervalo y el número de casos.
- [ ] Las alertas predictivas reportan precisión y exhaustividad frente a una definición fija del evento.
- [ ] La deriva se comprueba frente a una ventana de referencia fija.
- [ ] Todo modelo predictivo tiene un responsable, una regla de anulación y una fecha de revisión.
- [ ] Las previsiones se vinculan con las decisiones en un registro de decisiones.
- [ ] Las previsiones no se usan como objetivos individuales.
- [ ] Cada métrica tiene un vector de manipulación y una barrera de protección mostrados a su lado.

## Prompts de IA

**Diseña un registro de previsiones y una línea base.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Evalúa un método de previsión frente a una línea base.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Revisa la supervisión de un modelo predictivo.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Revisa el riesgo de manipulación de las medidas de previsión.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## Skills de IA

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): úsalo para construir y comprobar una previsión de demanda con rangos.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): úsalo para examinar tendencias y cambios antes de prever.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): úsalo para documentar el propósito, los datos y los límites de un modelo predictivo.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- Una previsión es un rango con un historial, así que registra las previsiones y compáralas con lo real.
- Compara cualquier modelo con una línea base sencilla y conserva el complejo solo si la supera con claridad.
- Comprueba la cobertura del intervalo y la calibración con el número de casos que hay detrás.
- Elige la precisión o la exhaustividad según el costo de una falsa alarma y de una omisión.
- No conviertas las previsiones en objetivos para las personas y mantén a un humano responsable de las acciones tomadas ante una predicción.

## Referencias y lecturas complementarias

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
