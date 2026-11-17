# Realización de valor y resultados de negocio

**Entregar un cambio no es lo mismo que la organización se beneficie de él, así que declara el beneficio esperado antes de construir, compruébalo después de la versión con las personas que iban a ganar con él y sé honesto sobre cuánto de cualquier mejora puedes atribuir a tu trabajo.**

## Visión general y motivación

Las formas de trabajo ágiles ponen primero el software que funciona y mantienen a las partes interesadas colaborando durante todo el proceso, para que lo que se entrega sea lo que la gente necesita. La gestión de servicios de TI (ITSM), tal como la codifica ITIL, enmarca la misma preocupación como valor: un servicio es valioso cuando ayuda a los clientes a lograr los resultados que quieren, con costos y riesgos que aceptan. Ambas tradiciones se encuentran en una pregunta incómoda. Dentro de un año, ¿están mejor las personas y la organización por lo que este equipo construyó y operó?

Responderla es más difícil que contar lo entregado. Las funciones se publican y nadie las usa. Los incidentes bajan por razones ajenas al trabajo del equipo. Un ahorro de costos aparece en una diapositiva y el presupuesto del que salió se gasta en otra parte. Este tema trata de cerrar esa brecha, y se vincula directamente con el enfoque en los resultados introducido al principio del libro (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

Cuatro ideas organizan el tema.

- **Beneficio.** Un beneficio es una mejora medible que valora una parte interesada, como menos tiempo dedicado a una tarea, menos errores, más clientes atendidos o menor riesgo. Una función no es un beneficio. Es un medio. La [gestión de la realización de beneficios](https://en.wikipedia.org/wiki/Benefits_realisation_management) es la disciplina de identificar beneficios, asignar responsables y comprobar que llegan.
- **Hipótesis de valor.** Antes de construir, el equipo anota qué espera que cambie, para quién, en cuánto y cómo lo sabrá. Es una afirmación comprobable, y puede estar equivocada. Una [teoría del cambio](https://en.wikipedia.org/wiki/Theory_of_change) o un [modelo lógico](https://en.wikipedia.org/wiki/Logic_model) expone la cadena de actividades a productos y a resultados, lo que ayuda a hacer explícita la hipótesis.
- **Indicadores adelantados y rezagados.** Un [indicador adelantado](https://en.wikipedia.org/wiki/Leading_indicator) se mueve pronto y predice un resultado, como la adopción de un proceso nuevo. Un [indicador rezagado](https://en.wikipedia.org/wiki/Lagging_indicator) confirma el resultado a posteriori, como la reducción del costo por transacción. Usa ambos: los indicadores adelantados te permiten corregir el rumbo y los rezagados te dicen si funcionó.
- **Atribución.** Muchas cosas cambian a la vez. Para decir que tu trabajo causó una mejora necesitas una comparación: una línea base, un grupo de comparación o un diseño de antes y después que tenga en cuenta otros cambios. Sin ella, las afirmaciones de valor son historias. La posición honesta suele ser «asociado con» y no «causado por».

Los marcos de objetivos como los [objetivos y resultados clave](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) pueden conectar el trabajo del equipo con los resultados de negocio, y el tema anterior sobre marcos de medición los cubre en detalle (véase el tema 1.7, Marcos de medición). El riesgo de todo marco es el que nombra la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): cuando un número de beneficio se convierte en un objetivo, la gente encuentra formas de producir el número sin el beneficio (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

El tema tiende además un puente hacia el dinero. El tema de la parte siguiente sobre retorno de la inversión y caso de negocio toma la visión financiera en profundidad (véase el tema 7.7, Retorno de la inversión y caso de negocio). Aquí el foco está en la evidencia de los resultados, que alimenta ese caso.

## Principios clave

- **Escribe el beneficio esperado antes de construir.** Una afirmación que no puede comprobarse después no puede aprenderse.
- **Nombra un responsable para cada beneficio.** El responsable es una parte interesada que verá el cambio, no el equipo de entrega.
- **Mide en los usuarios, después de la versión.** La entrega es el comienzo de la comprobación, no el final.
- **Usa indicadores adelantados para orientarte y rezagados para confirmar.**
- **Sé honesto sobre la atribución.** Di qué más cambió y evita afirmaciones que la evidencia no puede respaldar.
- **Cuenta los beneficios que no llegaron.** Aprender de una hipótesis fallida es un beneficio de trabajar así.
- **Sigue colaborando.** Las partes interesadas y el equipo revisan juntos la evidencia, con regularidad.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de realización de beneficios | Proporción de beneficios esperados que se observaron en la fecha de revisión acordada | beneficios con un resultado medido igual o superior al umbral acordado / beneficios esperados con una fecha de revisión en el periodo | porcentaje | Registro de beneficios con responsables, líneas base y fechas de revisión | Mejora continua; gobernanza del sistema de valor del servicio | Revisión de resultados con las partes interesadas | Trimestral |
| Tiempo hasta el primer valor | Tiempo desde el inicio del trabajo hasta el primer beneficio medible para los usuarios | días desde que empezó el primer trabajo hasta la primera fecha en que el indicador de beneficio se movió como se esperaba | días | Gestor de trabajo e indicador de beneficio | Diseño de servicios; gestión de versiones y despliegues | Entrega continua de valor | Por iniciativa |
| Tasa de comprobación de hipótesis | Proporción de cambios publicados cuya hipótesis de valor declarada se comprobó después de la versión | cambios con una comprobación posterior a la versión registrada / cambios publicados que llevaban una hipótesis | porcentaje | Registro de hipótesis vinculado a los registros de versiones | Mejora continua; habilitación de cambios | Aprendizaje del trabajo publicado | Mensual |
| Proporción de calidad de la evidencia | Proporción de beneficios reclamados que tienen una línea base y un método de comparación declarado | afirmaciones de beneficio con línea base y método / afirmaciones de beneficio reportadas | porcentaje | Revisión del registro de beneficios | Medición y elaboración de informes | Reporte honesto de los resultados | Trimestral |
| Movimiento del indicador de resultado | Cambio en un indicador de resultado elegido comparado con su línea base y, donde exista, con una comparación | (indicador después menos indicador antes) con el cambio del grupo de comparación reportado a su lado | unidades del indicador | Analítica de producto, datos del servicio, finanzas | Gestión de niveles de servicio; mejora continua | Progreso de un resultado clave | Mensual |
| Horas de impacto en el negocio | Horas en que un proceso de negocio estuvo degradado o detenido por problemas del servicio | horas de proceso degradado o detenido atribuidas por los responsables de proceso a causas del servicio de TI | horas | Registros de incidentes unidos a la confirmación del responsable de proceso | Gestión de incidentes; gestión de la disponibilidad | Revisión del impacto en el negocio | Mensual |
| Proporción de capacidad vinculada a resultados | Proporción de la capacidad del equipo dedicada a trabajo vinculado a un resultado declarado | capacidad en elementos vinculados a un resultado registrado / capacidad total | porcentaje | Gestor de trabajo con un campo de resultado | Sistema de valor del servicio; gobernanza de cartera | Trabajo alineado con el objetivo del producto | Trimestral |

Define la fecha de revisión y el umbral de cada beneficio cuando se registra, no después. El tiempo hasta el primer valor empieza cuando comienza el trabajo y se detiene cuando el indicador se mueve por primera vez en la dirección esperada en una cantidad declarada, lo que puede ocurrir mucho después de la versión. La atribución de las horas de impacto en el negocio se acuerda con el responsable de proceso, y las disputas se registran.

## Recomendaciones

### Antes de construir: haz comprobable la afirmación

**1. Escribe una hipótesis de valor para cada cambio significativo.** Usa una forma sencilla: «Creemos que [cambio] ayudará a [quién] a [hacer qué] para que [mejora medible]. Lo sabremos porque [indicador] pasa de [línea base] a [esperado], revisado el [fecha]». Mantenla lo bastante corta para que quepa en una ficha del tablero. Los equipos que no pueden rellenar los huecos a menudo aún no han entendido el problema.

**2. Registra una línea base.** Sin un antes, no hay después. Capta el valor actual del indicador, cómo se midió y cuánto varía. Si el indicador es ruidoso, un único número engaña, así que registra un rango de varias semanas (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**3. Elige indicadores adelantados y rezagados.** Para una nueva solicitud de autoservicio, un indicador adelantado es cuántos usuarios elegibles la completan y un indicador rezagado es la caída de las horas de gestión manual (véase el tema 6.3, Métricas de adopción y catálogo de servicios). Acuerda qué indicador se comprueba cuándo. Los indicadores adelantados permiten una corrección a mitad de camino sin esperar a que acabe el trimestre.

**4. Nombra un responsable del beneficio ajeno al equipo de entrega.** El responsable es la parte interesada que verá la mejora en su área y que puede juzgarla. El equipo de entrega apoya la medición pero no corrige sus propios deberes. Esto es colaboración continua en la práctica: la persona que quería el resultado sigue implicada hasta que se confirma.

### Después de la versión: compruébalo con honestidad

**5. Revisa la hipótesis en la fecha acordada.** Celebra una revisión breve con el responsable y el equipo. Mira el indicador, la línea base y la comparación. Registra el resultado en el registro: cumplido, parcialmente cumplido, no cumplido o no se puede saber. «No se puede saber» es un resultado legítimo y una invitación a mejorar la medición.

**6. Usa una comparación donde puedas.** La comparación más fuerte es un experimento controlado. Las [pruebas A/B](https://en.wikipedia.org/wiki/A/B_testing) comparan dos versiones con usuarios asignados al azar, y funcionan bien para servicios digitales con tráfico suficiente. Donde la aleatorización no es posible, un despliegue escalonado permite comparar grupos que han recibido el cambio y grupos que no. Un enfoque de [diferencia en diferencias](https://en.wikipedia.org/wiki/Difference_in_differences) compara el cambio en un grupo tratado con el cambio en un grupo no tratado durante el mismo periodo, lo que elimina las tendencias compartidas. Usa el diseño más sencillo que encaje.

**7. Busca factores de confusión.** Un factor de [confusión](https://en.wikipedia.org/wiki/Confounding) es algo más que cambió y podría explicar el resultado: un patrón estacional, una política nueva, una mezcla distinta de solicitudes. Enumera los plausibles antes de reclamar un efecto. Si no puedes descartarlos, di lo que la evidencia respalda y nada más.

**8. Reporta los resultados negativos y nulos.** Cuando un cambio no ayudó, dilo y registra lo que se aprendió. El [sesgo de supervivencia](https://en.wikipedia.org/wiki/Survivorship_bias), el hábito de mirar solo los éxitos, hace que los programas parezcan mejores de lo que son. Un registro que contiene solo victorias no se ha llevado con honestidad.

### Mantén honesto el programa

**9. Separa la calidad de la evidencia del beneficio.** Haz seguimiento de la proporción de afirmaciones que tienen una línea base y un método declarado. Una afirmación grande con evidencia débil debe leerse como tal. Un registro sano muestra afirmaciones modestas con evidencia fuerte y unas pocas entradas honestas de «no se puede saber».

**10. Vincula la capacidad con los resultados, con holgura.** Pregunta qué proporción del trabajo del equipo está atada a un resultado declarado y mira el resto. Parte del trabajo, como las correcciones de seguridad o mantener las luces encendidas, no tiene beneficio nuevo, y eso está bien si se nombra. El fin es notar la deriva, no obligar a cada tarea a entrar en una historia de beneficios.

**11. Conecta con el marco de objetivos que uses.** Si usas OKR, haz que los resultados clave sean los indicadores de resultado y revísalos con las partes interesadas. Mantén los resultados clave sobre resultados, no tareas, y deja espacio para objetivos ambiciosos que quizá no se cumplan del todo. No hagas de los resultados clave objetivos individuales (véase el tema 1.7, Marcos de medición).

**12. Revisa la cartera además del proyecto.** Una vez por trimestre, mira entre iniciativas qué beneficios llegaron, cuáles no y qué dice el patrón sobre cómo estima y selecciona el trabajo el equipo. Úsalo para mejorar la forma en que se escriben las hipótesis, no para clasificar equipos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de realización de beneficios | Fijar umbrales bajos; mover la fecha de revisión; redefinir el beneficio a posteriori | Umbral y fecha fijados en la aprobación; proporción de calidad de la evidencia; responsable ajeno al equipo de entrega |
| Tiempo hasta el primer valor | Elegir un indicador temprano que se mueve por la razón equivocada; arrancar tarde el reloj | Indicador y reloj definidos en el registro; confirmar con el responsable del beneficio |
| Tasa de comprobación de hipótesis | Escribir hipótesis vagas que siempre pasan; comprobar solo los cambios exitosos | Muestrear las hipótesis en busca de comprobabilidad; incluir los resultados nulos y fallidos en la revisión |
| Proporción de calidad de la evidencia | Rellenar líneas base a posteriori; describir cualquier comparación como un método | Línea base fechada antes del cambio; revisión por alguien ajeno al equipo |
| Movimiento del indicador de resultado | Elegir un periodo o grupo favorable; ignorar los factores de confusión | Periodo y grupo preinscritos; lista de factores de confusión considerados |
| Horas de impacto en el negocio | Los responsables de proceso inflando o desinflando las atribuciones; incidentes reclasificados para evitar la atribución | Reglas de atribución escritas y registradas; comparar con los registros de incidentes y de disponibilidad |
| Proporción de capacidad vinculada a resultados | Etiquetar todo el trabajo con un resultado genérico; inventar resultados para el trabajo rutinario | Lista de resultados revisada con las partes interesadas; muestreo de elementos para comprobar la calidad del vínculo |

Una lectura sana es un registro en que algunos beneficios se cumplen, otros no, unos pocos son poco claros y cada entrada tiene una línea base, un responsable y un método declarado. Un registro de éxito uniforme debe tratarse con sospecha.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Registro formal de beneficios | Rendición de cuentas, aprendizaje entre iniciativas | Burocracia si se aplica a cada pequeño cambio |
| Hipótesis ligera en cada ficha | Barata, crea el hábito | Fácil de escribir de forma vaga |
| Experimento controlado | Fuerte evidencia de causa | Necesita tráfico, tiempo y un diseño que encaje con el servicio |
| Solo antes y después | Sencillo, rápido | Confundido por otros cambios |
| Juicio de las partes interesadas | Capta el valor que las métricas pasan por alto | Sujeto al optimismo y a la política |
| Indicadores adelantados | Corrección temprana del rumbo | Pueden no predecir el resultado real |
| Indicadores rezagados | Confirman resultados reales | Llegan tarde; muchas causas |

La respuesta en prosa es ajustar el peso de la evidencia al tamaño y al riesgo del cambio. Usa una hipótesis ligera y un sencillo antes y después para los cambios pequeños, y un experimento o un despliegue escalonado para los grandes. Registra siempre lo que esperabas, lo que ocurrió y cuán seguro estás.

## Preguntas para debatir con tu equipo

**1. ¿Qué entregamos el último trimestre y qué cambió para las personas a las que iba a ayudar?**
Enumera los cambios principales y, para cada uno, nombra a la persona que notaría una diferencia. Pregunta qué diría. El facilitador debe anotar los cambios en que nadie puede responder, ya que son candidatos a una comprobación posterior a la versión. Acuerden un cambio que revisar con su responsable en el plazo de un mes.

**2. Para nuestro próximo cambio significativo, ¿cuál es la hipótesis de valor y cómo lo sabremos?**
Rellenen juntos el formulario de hipótesis. Cuestionen las palabras vagas y las líneas base ausentes. Pregunten qué resultado haría que el equipo cambiara sus planes. Si el grupo no puede acordar una medida, es una tarea de descubrimiento antes de construir.

**3. ¿Quién posee el beneficio y está en la sala?**
Comprueben que cada beneficio tiene un responsable ajeno al equipo de entrega. Pregunten con qué frecuencia ve la evidencia el responsable. Donde el responsable es el propio equipo, hablen de quién más debería compartir el juicio. La conversación respalda la colaboración continua entre las partes interesadas.

**4. ¿Qué más cambió cuando mejoraron los números?**
Tomen una mejora reciente reclamada y enumeren otros cambios del mismo periodo: política, estacionalidad, dotación, la versión de otro equipo. Pregunten cuáles podrían explicar el resultado. Decidan si describir la mejora como causada por el cambio, asociada a él o poco clara.

**5. ¿Cuáles de nuestras hipótesis pasadas resultaron equivocadas y qué hicimos al respecto?**
Pide una historia de una expectativa fallida. Si no llega ninguna enseguida, puede que el equipo no esté comprobando, o que no hable de ello. Hablen de cómo hacer que reportar un resultado nulo sea seguro y útil.

**6. ¿Qué proporción de nuestra capacidad está atada a un resultado y nos parece correcto?**
Revisen un mes de trabajo terminado y etiqueten cada elemento con un resultado o con «mantener el servicio en marcha». Pregunten si el reparto coincide con lo que creen los líderes. Hablen del trabajo sin resultado y de si debe continuar.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega poseen la hipótesis y el plan de medición, y deben entregar los cambios en pasos pequeños para que la evidencia llegue pronto. Deben integrar el indicador en el cambio, por ejemplo registrando los eventos que necesitan, y pedir al responsable del beneficio que confirme lo que ve. Los equipos deben acoger las hipótesis fallidas como información, ya que el aprendizaje temprano ahorra el costo de construir más de lo equivocado.

### Equipos de servicio y de operaciones

Los equipos de operaciones ven el efecto real de los cambios en los incidentes, las solicitudes y la capacidad. Tienen buena parte de los datos de los indicadores rezagados, como las horas de gestión manual y los contactos repetidos, y deben ayudar a comprobar las hipótesis además de absorber el cambio. Deben hablar cuando los beneficios reclamados sobre el papel no coinciden con lo que ve el centro de servicios.

### Liderazgo y gobernanza

Los líderes eligen si los beneficios son una herramienta de aprendizaje o un discurso de ventas. Deben pedir líneas base y métodos, acoger los resultados honestos de «no cumplido» y evitar exigir a los equipos números de beneficio fijados antes de conocer los hechos. La gobernanza debe revisar el registro como una cartera, financiar la medición y estar dispuesta a detener el trabajo cuya hipótesis ha fallado.

### Clientes y usuarios

Los usuarios saben si un cambio ayudó, y son los mejores jueces de la mayoría de los beneficios. Debe preguntárseles, mostrarles los resultados y decirles cuándo un cambio no entregó lo que se esperaba. Sus comentarios son evidencia por derecho propio. Un beneficio que muestran los números y que los usuarios no sienten merece una mirada más atenta.

## En la práctica: un ejemplo de gestión de servicios

El grupo de TI de una aseguradora sanitaria regional construye y opera un portal de reclamaciones para proveedores. Los números siguientes son ilustrativos.

El grupo planea añadir comprobaciones automáticas de elegibilidad al envío de reclamaciones. La hipótesis, escrita con el responsable de operaciones de reclamaciones, es: «Creemos que las comprobaciones automáticas de elegibilidad ayudarán al personal de facturación de los proveedores a enviar reclamaciones correctas a la primera, de modo que las reclamaciones devueltas para corrección bajen del 18 por ciento al 12 por ciento en tres meses. Lo sabremos por la tasa de reclamaciones devueltas, revisada el 1 de marzo». La línea base es el promedio de las últimas 12 semanas, el 18 por ciento con un rango semanal de 15 a 21 por ciento. El indicador adelantado es el uso de la comprobación en el primer mes. El responsable de operaciones de reclamaciones es el responsable del beneficio.

El equipo publica en pasos pequeños, con la comprobación disponible primero para una región. Tras tres semanas, el uso de la comprobación es del 64 por ciento en esa región. En la fecha de revisión, las reclamaciones devueltas bajan al 13 por ciento en la región con la comprobación y al 17 por ciento en las regiones sin ella. El responsable de reclamaciones señala que en el periodo entró en vigor además un cambio de política sobre un código de facturación. El equipo lo enumera como factor de confusión y retira las reclamaciones con ese código de ambos grupos, lo que deja un 14 por ciento frente a un 17,5. La realización del beneficio se registra como «parcialmente cumplido»: mejor que la línea base con un margen claro, pero por debajo del objetivo del 12 por ciento. El equipo escribe con honestidad en el registro que la evidencia procede de un despliegue escalonado durante un trimestre y que el efecto puede diferir para otros proveedores.

Despliegan después la comprobación a todas las regiones, con un plan para volver a comprobar en tres meses, y añaden una tarea para mejorar el mensaje de error, ya que los comentarios de los proveedores dicen que el mensaje no es claro. La directora financiera pide un único número para el consejo. El jefe de TI ofrece el rango y el método, y declina dar una cifra con más precisión de la que permite la evidencia. La decisión se anota, junto con la fecha de la próxima revisión.

## Agilidad, IA, automatización y analítica

### Agilidad

Declara el beneficio esperado antes de empezar el trabajo y compruébalo después de la versión con las personas que iban a ganar con él. La precaución es que los beneficios reclamados sin una línea base son historias.

### IA

Los proyectos de IA suelen prometer grandes beneficios, así que registra por separado la línea base, el cambio esperado y la evidencia del trabajo asistido por IA, y empareja las afirmaciones de productividad con la calidad y el costo. La precaución es que las estimaciones de beneficio producidas por una herramienta de IA deben comprobarse, ya que pueden sonar precisas y carecer de respaldo.

### Automatización

Automatiza la captura de los indicadores de resultado que ya existen en tus sistemas y mide el proceso de revisión de beneficios por su finalización. La precaución es que los paneles automáticos de indicadores pueden sustituir la conversación sobre si el beneficio ocurrió.

### Analítica

Reporta el movimiento de los indicadores de resultado con la calidad de la evidencia y los límites de la atribución. La decisión a la que informa es qué continuar, cambiar o detener. La precaución es que la atribución es difícil, así que describe la incertidumbre.

## Perspectiva sectorial

**Startup.** Los beneficios están cerca de los ingresos y la retención, y la velocidad de aprendizaje importa. Escribe hipótesis de una línea en fichas, compruébalas con rapidez y evita registros pesados. Usa comparaciones sencillas y acepta que las muestras pequeñas limitan lo que puedes afirmar.

**Pequeña empresa.** El dueño es el responsable del beneficio, y los efectos son visibles. Mantén una lista breve de cambios con efectos esperados y revísala cada trimestre. Evita inflar pequeñas ganancias hasta convertirlas en grandes cifras y compara con el costo del cambio.

**Gran empresa.** Las carteras, los ciclos de financiación y las muchas partes interesadas hacen útil un registro de beneficios. Mantenlo ligero para los cambios pequeños y riguroso para los grandes, pon responsables en las unidades de negocio y revisa entre la cartera. Cuidado con las consolidaciones de números con definiciones distintas.

**Gobierno y sector público.** Los resultados suelen ser bienes públicos, como el acceso, la equidad y la seguridad, que no se reducen a ingresos. Define los resultados con las personas a las que se sirve, usa evidencia mixta y reporta los métodos abiertamente. Pueden exigirse casos de negocio formales y revisiones de beneficios, y los resultados nulos honestos importan para la rendición de cuentas pública (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es sobre todo atención. Escribir una hipótesis lleva minutos, una línea base lleva una hora o unas pocas y una revisión lleva una reunión breve. Los experimentos y los despliegues escalonados necesitan esfuerzo de diseño y algo de herramientas. Un registro de beneficios puede ser una hoja de cálculo o un campo del gestor de trabajo.

El retorno son mejores decisiones de inversión. Un equipo que comprueba sus hipótesis deja de construir cosas que no ayudan, amplía las que sí y aprende cuán bien predice. Eso ahorra el costo de las funciones sin uso y de los programas fallidos. Construye el caso con tus propios datos: la proporción de cambios que llevaban una hipótesis, la proporción que se comprobó y el costo del trabajo abandonado o revertido más tarde. Evita las cifras publicadas sobre la tasa de fracaso de los proyectos de TI salvo que puedas rastrear su fuente y su método, ya que varían mucho y a menudo se citan sin contexto. El tratamiento financiero está en la parte siguiente (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Contar la entrega como valor.** Una función publicada es un medio. Comprueba el efecto sobre las personas.
- **Hipótesis que no pueden fallar.** Hazlas específicas, con un número y una fecha.
- **Corregir tus propios deberes.** Haz que juzgue el resultado el responsable del beneficio ajeno al equipo.
- **Reclamar causa a partir de un antes y después.** Enumera los factores de confusión y usa una comparación donde sea posible.
- **Reportar solo victorias.** Registra los resultados nulos y negativos. Un registro de solo éxitos no es honesto.
- **Fijar objetivos de beneficio para individuos.** Los objetivos atados a personas invitan a afirmaciones infladas. Mantén los beneficios a nivel de equipo e iniciativa.
- **Exceso de precisión.** Reporta rangos y el método, no un único número decimal.
- **Ignorar el trabajo que no tiene un beneficio nuevo.** Nómbralo y no inventes una historia de beneficios para él.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Declarar el valor | Beneficios reclamados solo en los casos de negocio | Hipótesis escritas para algunos cambios | Una hipótesis breve, una línea base y un responsable para cada cambio significativo | Hipótesis y umbrales fijados en la aprobación; indicadores adelantados y rezagados definidos | Hipótesis compartidas entre equipos y proveedores; resultados definidos con los usuarios |
| Comprobar el valor | Sin comprobación posterior a la versión | Comprobación ocasional por el equipo de entrega | Revisión programada con un responsable independiente | Comparaciones y factores de confusión documentados; calidad de la evidencia con seguimiento | La evidencia a nivel de cartera guía la financiación; experimentos compartidos entre equipos |
| Aprendizaje | Se celebran las victorias, se olvidan los fracasos | Algunas lecciones registradas | Resultados nulos registrados y revisados | Los patrones en las hipótesis incumplidas mejoran la selección y el dimensionamiento | El aprendizaje alimenta la planificación en toda la organización y con los socios |

## Lista de verificación

- [ ] Cada cambio significativo tiene una hipótesis de valor escrita con línea base, indicador y fecha de revisión.
- [ ] Cada beneficio tiene un responsable ajeno al equipo de entrega.
- [ ] Los indicadores adelantados y rezagados están definidos y con seguimiento.
- [ ] Las revisiones se celebran en la fecha acordada con el responsable.
- [ ] Se usan comparaciones o despliegues escalonados donde es factible.
- [ ] Los factores de confusión se enumeran para cada resultado reclamado.
- [ ] Los resultados nulos y negativos se registran y se comparten.
- [ ] La calidad de la evidencia se sigue junto a las afirmaciones de beneficio.
- [ ] Ningún individuo tiene un objetivo personal de beneficio.
- [ ] Una revisión trimestral de la cartera mira los patrones de hipótesis cumplidas e incumplidas.

## Prompts de IA

**Escribe una hipótesis de valor.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organization]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**Enumera los factores de confusión de un resultado reclamado.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Diseña una comparación con despliegue escalonado.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Revisa una entrada del registro de beneficios.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de valor o de resultado antes de reportarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de beneficios lleva su vector de manipulación, su barrera de protección y su estándar de evidencia.

## Ideas clave

- Escribe una hipótesis de valor comprobable antes de construir, con una línea base, un responsable ajeno al equipo y una fecha de revisión.
- Usa indicadores adelantados para orientarte y rezagados para confirmar.
- Compara donde puedas, enumera los factores de confusión y afirma solo lo que la evidencia respalda.
- Registra los resultados nulos y negativos; un registro de éxito uniforme no es honesto.
- Haz seguimiento de la calidad de la evidencia junto al tamaño de la afirmación.
- Mantén colaborando a las partes interesadas y a los usuarios hasta que se confirme el resultado.

## Referencias y lecturas complementarias

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
