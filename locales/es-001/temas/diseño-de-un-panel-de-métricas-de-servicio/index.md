# Diseño de un panel de métricas de servicio

**Un buen panel responde a unas pocas preguntas que una audiencia concreta se hace de verdad, muestra cada número con su tendencia y su contexto, y lo construyen las personas que lo usarán.**

## Visión general y motivación

Un [panel (dashboard)](https://en.wikipedia.org/wiki/Dashboard_(business)) es una presentación visual de la información más importante necesaria para lograr uno o varios objetivos, dispuesta de modo que pueda monitorizarse de un vistazo. En la práctica, la mayoría de los paneles de las organizaciones de servicio no cumplen esa definición. Empiezan como una forma de responder a una pregunta real y luego crecen por acumulación hasta mostrar todo lo que la herramienta puede dibujar. Nadie los posee, nadie está seguro de qué significan los números y la pantalla de la pared se ignora.

El propósito de un panel de métricas de servicio es ayudar a las personas a tomar decisiones y a iniciar buenas conversaciones. Un equipo lo usa para notar que su trabajo espera más que antes y para preguntar por qué. Un responsable de servicio lo usa para ver que un servicio está cerca del borde de su objetivo de fiabilidad. Un líder lo usa para ver si la inversión en un área está produciendo el resultado esperado. Una presentación que no hace nada de esto es decoración, y la decoración cuesta dinero construirla y atención ignorarla.

ITIL lo enmarca como una cuestión de información y comunicación: la información correcta, para las personas correctas, en una forma que puedan usar, en el momento correcto. Los fines ágiles apuntan a los mismos principios de diseño. La implicación continua de las partes interesadas significa que la audiencia ayuda a diseñar la vista y sigue ayudando a medida que cambian las preguntas. La mejora continua significa que el propio panel se revisa y se recorta. La evolución permanente significa que el conjunto de medidas cambia cuando cambian los servicios y los objetivos. Un ritmo sostenible significa que el panel no genera una compulsión diaria de comprobar números que solo se mueven cada mes. Y la misma confianza que respalda a los individuos motivados significa que los equipos ven primero sus propios datos y poseen la historia que cuentan.

Son comunes tres fallos de diseño. El primero es el muro de números, en que cien teselas compiten y ninguna destaca. El segundo es la presentación solo de objetivos, en que una cifra se muestra frente a una meta en rojo o en verde sin tendencia ni contexto, lo que invita a gestionar por colores en lugar de por comprensión. El tercero es la presentación sin responsable, en que las definiciones han derivado, los datos están obsoletos y nadie sabe a quién preguntar. El trabajo del diseño es evitarlos.

Ayuda un buen diseño visual. La [visualización de datos](https://en.wikipedia.org/wiki/Data_visualization) es la práctica de mostrar los datos gráficamente para que se puedan ver y entender los patrones. Un [minigráfico (sparkline)](https://en.wikipedia.org/wiki/Sparkline) es un pequeño gráfico de líneas del tamaño de una palabra que muestra una tendencia sin ejes ni etiquetas, y encaja bien en un panel porque pone el historial junto al valor actual. Un [gráfico de ejecución](https://en.wikipedia.org/wiki/Run_chart) traza una medida a lo largo del tiempo con una línea de mediana, y un [gráfico de control](https://en.wikipedia.org/wiki/Control_chart) añade límites que separan la variación ordinaria de las señales que merece la pena investigar (véase el tema 1.6, Alfabetización estadística para métricas de servicio). El [chartjunk](https://en.wikipedia.org/wiki/Chartjunk) es la decoración que no aporta información, como las cuadrículas pesadas, las barras tridimensionales y los indicadores ornamentales, y vale la pena eliminarlo.

Una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric) es un número que luce bien y no ayuda a nadie a decidir nada, como un recuento de tickets gestionados o de inicios de sesión en un portal mostrado sin resultados. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a toda la presentación: cuando un número de la pantalla se convierte en un objetivo, la gente gestiona el número (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema se apoya en los marcos de medición (véase el tema 1.7, Marcos de medición) y en los temas de datos y gobernanza de la Parte 1.

## Principios clave

- **Empieza por las preguntas, no por los datos.** Escribe las decisiones y las preguntas de la audiencia antes de elegir un solo gráfico.
- **Muestra pocas medidas, equilibradas.** Un conjunto pequeño que abarque flujo, calidad, fiabilidad, experiencia y costo resiste mejor la manipulación que una sola medida.
- **Muestra siempre tendencia y contexto.** Un valor sin historial, sin línea base y sin una nota sobre lo que cambió es difícil de interpretar.
- **Respeta la variación.** No reacciones a cada oscilación. Usa gráficos de ejecución o de control para separar la señal del ruido.
- **Da a cada audiencia su propia vista.** Los equipos, los responsables de servicio y el liderazgo hacen preguntas distintas y necesitan un detalle distinto.
- **Los equipos ven primero sus datos.** Las personas que hacen el trabajo deben ver sus números antes que nadie y poseer la interpretación.
- **Define todo y nombra un responsable.** Cada medida tiene una definición escrita, una fuente de datos y una persona a quien preguntar.
- **Mantenlo ligero de mantener.** Un panel que lleva una semana de trabajo manual cada mes morirá.

## Definiciones de métricas

Las medidas siguientes tratan del propio panel, no de un servicio. Ayudan a un equipo de programa a ver si sus presentaciones están sanas. Algunas son descriptivas y se marcan como tales, porque tratarlas como objetivos invitaría a las distorsiones contra las que advierte este tema.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de preguntas | Proporción de las preguntas enumeradas de la audiencia que el panel puede responder con una medida definida | preguntas con una medida y una definición / preguntas enumeradas por la audiencia | porcentaje | Lista de preguntas de las sesiones con las partes interesadas; fichas de métricas | Mejora continua; gestión de niveles de servicio | Implicación continua de las partes interesadas | Trimestral |
| Completitud de las definiciones | Proporción de medidas mostradas con una definición escrita vigente, una fuente de datos, un responsable y unos límites conocidos | medidas con los cuatro / medidas mostradas | porcentaje | Fichas de métricas o catálogo | Gestión de la información y la tecnología; gestión del conocimiento | Comprensión compartida; trabajo visible | Trimestral |
| Frescura de los datos | Proporción de medidas mostradas actualizadas dentro de su intervalo esperado | medidas actualizadas a tiempo / medidas mostradas | porcentaje | Registros del pipeline; metadatos del panel | Monitorización y gestión de eventos | Retroalimentación rápida | Semanal |
| Vinculación con decisiones | Proporción de medidas revisadas en que una revisión reciente llevó a una decisión, acción o elección deliberada de no hacer nada registradas | medidas con una decisión vinculada en el periodo / medidas revisadas | porcentaje | Notas de revisión; registro de mejoras | Mejora continua | Reflexión regular | Trimestral |
| Tamaño de la presentación | Número de medidas en cada vista de audiencia | recuento por vista | medidas | Configuración del panel | Mejora continua | Simplicidad | Trimestral |
| Tasa de retirada | Medidas eliminadas o sustituidas en el periodo porque dejaron de informar decisiones | medidas retiradas / medidas mostradas al inicio | porcentaje | Registro de cambios del panel | Mejora continua | Evolución permanente | Anual |
| Alcance de la audiencia (descriptivo) | Proporción de equipos o roles previstos que abrieron su vista en el periodo | equipos o roles distintos que la vieron / equipos o roles previstos | porcentaje | Registros de acceso al panel, agregados por equipo o rol | Gestión de la información y la tecnología | Implicación continua de las partes interesadas | Trimestral |

Define por escrito la audiencia de cada vista. Cuenta las medidas por vista, no por herramienta, para que un catálogo grande con una portada pequeña no se confunda con dispersión. Los registros de acceso se reúnen y se reportan a nivel de equipo o de rol y nunca para seguir los hábitos de lectura de los individuos. El alcance de la audiencia es descriptivo y se lee junto con la vinculación con decisiones, porque una presentación muy vista que no cambia ninguna decisión vale poco. La vinculación con decisiones acepta «miramos y elegimos no hacer nada» como una decisión registrada, para que la medida no empuje a la gente a inventar acciones.

## Recomendaciones

### Parte de la audiencia

**1. Enumera las audiencias y sus preguntas.** Las audiencias típicas son el equipo de entrega o de soporte que hace el trabajo, el responsable del servicio que responde de un servicio y los líderes que financian y dirigen. Siéntate con cada una durante una hora y anota qué pregunta, qué decisiones toma y qué desearía saber. Una buena pregunta suena como «¿Espera más nuestro trabajo que antes?» o «¿Estamos cerca de agotar nuestro presupuesto de errores?». No suena como «Muéstrame el panel de incidentes».

**2. Asigna a cada pregunta una medida y una compañera.** Para cada pregunta, elige la mejor medida única de las partes anteriores de este libro y una compañera que proteja contra la distorsión evidente. Una medida de velocidad se empareja con una de calidad. Una medida de volumen se empareja con un resultado. Una medida de experiencia se empareja con una de comportamiento. Es la lógica de emparejamiento que recorre todo el libro (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

**3. Incluye a la audiencia en el diseño.** Muestra bocetos antes de construir nada. Pregunta qué confunde, qué falta y qué harían con cada número. Sus respuestas recortarán el conjunto, y confiarán en lo que ayudaron a hacer.

### Elige un conjunto pequeño y equilibrado

**4. Mantén cada vista en un puñado de medidas.** Unas cinco a nueve medidas por vista de audiencia es un rango viable, aunque el número correcto depende de las preguntas. El límite obliga a elegir. Pon el detalle detrás de un clic, en una vista de apoyo, y mantén la portada en lo necesario para decidir si mirar más.

**5. Equilibra el conjunto entre dimensiones.** Un [cuadro de mando integral](https://en.wikipedia.org/wiki/Balanced_scorecard) es una herramienta de gestión estratégica que mira a una organización desde varias perspectivas en lugar de solo los resultados financieros. La idea se traslada bien: para un servicio, equilibra el flujo y la velocidad, la calidad y la estabilidad, la fiabilidad, la experiencia y el costo. Un conjunto que incluye solo velocidad fomenta los atajos, y uno que incluye solo calidad fomenta la demora. La idea relacionada de [indicador clave de rendimiento](https://en.wikipedia.org/wiki/Key_performance_indicator) es útil cuando el indicador se elige por lo que revela sobre un objetivo y no por lo fácil que es mostrarlo.

**6. Distingue los indicadores de los diagnósticos.** Unos pocos indicadores principales dicen si las cosas están sanas. Las medidas de diagnóstico ayudan a averiguar por qué cuando no lo están. Mantén los diagnósticos un paso más abajo, para que la portada no se convierta en un muro.

### Muestra contexto y tendencia

**7. Muestra el historial con cada valor.** Pon un minigráfico o un pequeño gráfico de ejecución junto a cada valor actual. Muestra al menos el historial suficiente para ver patrones estacionales, como picos mensuales o un ciclo trimestral. Marca los eventos que explican los cambios: una publicación, un cambio de política, una caída, una reorganización del equipo. Una nota junto a la línea ahorra cien preguntas.

**8. Usa distribuciones y rangos para las medidas de tiempo.** Una media esconde la cola larga que sienten los usuarios. Muestra la mediana y un percentil alto como el 85 o el 95, y muestra la dispersión. Declara el tamaño de la muestra cuando sea pequeño y muestra cuán incierta es una muestra pequeña (véase el tema 1.6, Alfabetización estadística para métricas de servicio, y el tema 2.2, Plazo de entrega, tiempo de ciclo y eficiencia del flujo).

**9. Ten cuidado con los objetivos y los colores.** Usa una línea de objetivo cuando el objetivo tenga una base real, como un objetivo de nivel de servicio, y muéstrala como referencia, no como veredicto. Evita las teselas rojas, ámbar y verdes que cambian con un solo dato. Si usas colores de estado, básalos en una regla que tenga en cuenta la variación normal y explica la regla en la página.

### Hazlo fiable y mantenible

**10. Adjunta una definición y una nota de datos a cada medida.** A un clic de cada número debe estar su definición, su fórmula, su fuente de datos, su responsable, su hora de actualización y sus brechas conocidas. Una breve nota de «cómo leer esto» merece el espacio. Un lector que puede ver los límites tiene menos probabilidades de usar mal el número, y un equipo que puede verlos puede cuestionarlos (véase el tema 1.4, Gobernanza y propiedad de las métricas, y el tema 1.5, Fuentes de datos e instrumentación).

**11. Automatiza los datos y posee la presentación.** Extrae los datos de los sistemas de registro según un calendario y muestra la hora de la última actualización. Las hojas de cálculo manuales pueden iniciar una conversación, pero son frágiles. Nombra un responsable para cada panel que responda de sus definiciones, su frescura y su retirada. Revisa el panel con su audiencia con una cadencia fija y recórtalo.

**12. Planifica la salida desde el principio.** Cada medida debe tener una razón declarada de existir y una condición bajo la cual se retirará, como «cuando la lista de pendientes de errores conocidos caiga por debajo de un umbral durante tres meses» o «cuando el equipo deje de usarla en su revisión». Retirar medidas mantiene pequeño el conjunto y señala que el programa sirve al trabajo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de preguntas | Escribir preguntas estrechas que las medidas existentes ya responden; omitir las preguntas difíciles | Incluir a partes interesadas ajenas al equipo del programa; revisar explícitamente las preguntas sin respuesta |
| Completitud de las definiciones | Rellenar los campos con texto de plantilla; definiciones que nadie lee | Muestrear las definiciones por su claridad con alguien ajeno al equipo; comprobar que la definición coincide con el cálculo real |
| Frescura de los datos | Refrescar una fuente obsoleta con datos sin cambios; contar una actualización como éxito cuando falló el flujo de la fuente | Comprobar las marcas de tiempo de la fuente además de las de actualización; comparar con los recuentos de registros y el volumen esperado |
| Vinculación con decisiones | Registrar las decisiones a posteriori para rellenar el campo; inventar acciones para evitar un hueco | Aceptar «elegimos no hacer nada» como decisión registrada; muestrear los vínculos en busca de una discusión previa real |
| Tamaño de la presentación | Esconder medidas en pestañas secundarias; dividir una vista en muchas | Contar las medidas por audiencia en todas las pestañas; preguntar a la audiencia cuántos números usa realmente |
| Tasa de retirada | Retirar medidas incómodas que muestran malos resultados | Revisar la lista de retiradas en busca de medidas con tendencias desfavorables; exigir un motivo declarado |
| Alcance de la audiencia (descriptivo) | Abrir la página para subir el recuento; visualización obligatoria en las reuniones | Mantenerlo descriptivo; leerlo con la vinculación con decisiones; no reportar visualizaciones individuales |

Una lectura sana muestra una portada corta que la audiencia sabe explicar, definiciones que coinciden con los cálculos, datos que llegan a tiempo, revisiones que a veces llevan a la acción y a veces a una elección deliberada de esperar, y una lista de medidas retiradas que incluye algunas que en su día fueron populares.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Un panel empresarial para todos | Fuente única de la verdad; definiciones coherentes | Demasiado general para cualquier audiencia; crece hasta ser un muro |
| Vistas separadas por audiencia sobre datos compartidos | Se ajusta a cada audiencia; definiciones coherentes | Necesita gobernanza de las definiciones compartidas |
| Paneles construidos por los equipos | Se ajustan a las preguntas locales; mucha propiedad | Las definiciones derivan; difíciles de consolidar |
| Un equipo central construye todos los paneles | Coherencia; destreza de diseño | Lento; puede no ajustarse a las preguntas de los equipos |
| Presentación en vivo, en tiempo real | Señales rápidas para operaciones | Fomenta reaccionar al ruido; costosa |
| Paquete de revisión periódico | Tranquilo, comentado con contexto | Retraso; puede omitirse |
| Objetivos y colores de estado | Escaneo rápido | Invita a gestionar por colores; esconde la variación |
| Solo tendencia y distribución | Honesta sobre la variación | Más difícil de escanear para los recién llegados |

La respuesta en prosa es compartir las definiciones en toda la organización, dejar que cada audiencia tenga su propia vista pequeña, usar presentaciones en vivo solo donde las necesite la respuesta operativa y usar una revisión periódica y tranquila para las decisiones de mejora.

## Preguntas para debatir con tu equipo

**1. ¿Qué decisiones tomamos el último trimestre que informó un número de una pantalla?**
Enumérenlas. Para cada una, nombren el número y de dónde vino. Noten qué números de nuestras pantallas actuales no aparecen nunca en esta lista. El facilitador debe preguntar si se ganan su lugar.

**2. Si solo pudiéramos mostrar cinco números a nuestro propio equipo, ¿cuáles serían?**
Que cada persona escriba una lista en privado y luego comparen. Hablen de las diferencias y de qué ayudaría a decidir cada número. Acuerden un conjunto de prueba y una fecha para revisarlo.

**3. ¿Qué número de nuestro panel nos gustaría más quitar y por qué?**
Escuchen los números que causan discusiones, engañan o no se leen nunca. Comprueben si el problema es la medida o su presentación. Acuerden retirar, redefinir o conservar cada uno.

**4. ¿Cómo leería un colega nuevo nuestro panel sin ayuda?**
Pidan a un recién llegado que explique lo que ve. Anoten qué lee mal y por qué. Añadan definiciones, contexto o notas donde tropezó.

**5. ¿Qué cambió en nuestro trabajo que un número no muestra?**
Las publicaciones, la dotación de personal, la política o un cambio de clientes pueden explicar una tendencia. Acuerden cómo se registran los eventos en la presentación para que el siguiente lector tenga la historia.

**6. ¿Quién mira nuestros datos además de nosotros y qué hace con ellos?**
Rastreen el camino de nuestros números hacia otras audiencias. Comprueben que la interpretación que les dan es una que respaldaríamos. Acuerden qué compartiremos y qué contexto lo acompaña.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos hacen el trabajo y deben ser la primera audiencia de sus propios datos. Deben ayudar a elegir las medidas, usar la presentación para provocar sus propias conversaciones de revisión y anotarla con eventos. Una vista de equipo debe responder a «¿cómo vamos y qué deberíamos probar?» y no a «¿cómo nos comparamos con el equipo de al lado?».

### Equipos de servicio y de operaciones

Los responsables de servicio responden de cómo rinde un servicio a lo largo del tiempo. Su vista reúne la fiabilidad, los incidentes, los cambios, el costo y la experiencia de un servicio, con tendencias y el estado de las acciones de mejora. Deben usarla para decidir dónde invertir y para prepararse para las conversaciones con los clientes y los líderes.

### Liderazgo y gobernanza

Los líderes necesitan una vista breve de los resultados y los riesgos entre servicios, con contexto suficiente para interpretarla. Deben pedir tendencias y distribuciones en lugar de clasificaciones, resistirse a pedir medidas nuevas sin retirar otras y usar la presentación para dirigir las preguntas a los sistemas y a las decisiones, no a los individuos.

### Clientes y usuarios

Los clientes y los usuarios ven la información del servicio mediante páginas de estado, informes y las medidas de experiencia que reflejan su punto de vista (véase el tema 6.2, Acuerdos de nivel de experiencia). Su vista debe ser honesta, llana y coherente con lo que ven los equipos. Deben poder decir a la organización lo que los números no muestran.

## En la práctica: un ejemplo de gestión de servicios

Una empresa de software con un producto alojado y un grupo de atención al cliente ha acumulado tres paneles: una pantalla de operaciones con 62 teselas, un informe de soporte que se envía por correo cada semana y una página de entrega que mantiene un solo analista. El equipo de liderazgo pide un único panel para «verlo todo». Las cifras siguientes son ilustrativas.

La jefa de gestión de servicios propone empezar por las preguntas. Celebra una sesión de una hora con cada una de tres audiencias: el equipo de soporte, el equipo de plataforma y el grupo de liderazgo. El equipo de soporte pregunta si los clientes esperan más que antes una primera respuesta útil y si los mismos problemas vuelven. El equipo de plataforma pregunta si está cerca de agotar su presupuesto de errores y si su proceso de cambios lo está frenando o protegiendo. El liderazgo pregunta si los clientes están obteniendo valor y si la inversión en un nuevo portal de autoservicio está rindiendo. Entre todos enumeran 14 preguntas. Los paneles existentes podían responder a seis de ellas con una medida definida, así que la cobertura de preguntas es del 43 por ciento.

El grupo diseña tres vistas de no más de siete medidas cada una, sobre definiciones compartidas. La vista de soporte muestra la mediana y el percentil 85 del tiempo hasta una primera respuesta útil, la proporción de contactos que vuelven en siete días, una tendencia de satisfacción con su tamaño de muestra y la resolución por autoservicio emparejada con los contactos de retorno. La vista de plataforma muestra la disponibilidad frente al objetivo con una línea de consumo del presupuesto de errores, el plazo de entrega de los cambios con la tasa de fallos de cambio y la proporción de tiempo dedicada al trabajo no planificado. La vista de liderazgo muestra los resultados de nivel de servicio, la experiencia del cliente, el costo por cliente activo y el estado de tres acciones de mejora financiadas. Cada valor tiene un minigráfico, un vínculo a su ficha de definición y un campo de notas para eventos. Los colores aparecen solo en el presupuesto de errores, según una regla explicada en la página.

La primera revisión trae sorpresas. El equipo de soporte nota que su tiempo mediano de respuesta mejoró mientras empeoraba su percentil 85, porque los contactos fáciles se respondían rápido y los difíciles quedaban esperando. Decide mirar sus reglas de clasificación y registra la decisión. El equipo de plataforma ve que un aumento reciente del plazo de entrega de los cambios coincidió con un nuevo paso de aprobación y lleva la pregunta al grupo de cambios. El liderazgo nota que el uso del portal sube mientras los contactos de retorno se mantienen planos y pregunta al equipo de soporte qué no está respondiendo el portal. Dos trimestres después, la cobertura de preguntas es del 79 por ciento, todas las medidas mostradas tienen definiciones completas y la vieja pantalla de 62 teselas se ha retirado. Se han abandonado tres medidas porque nadie las usaba, y se ha añadido una. Un director pide una fila resumen verde-ámbar-rojo. La jefa de gestión de servicios muestra una prueba en que una sola mala semana puso la fila en rojo y provocó una avalancha de preguntas sin causa. Acuerdan en su lugar una breve nota escrita de lo que cambió cada mes, y registran la decisión.

## Agilidad, IA, automatización y analítica

### Agilidad

Construye el panel con sus usuarios y mejóralo en pasos pequeños, preguntando en cada revisión regular qué pregunta respondió y qué decisión cambió. La precaución es que un panel construido una vez para un lanzamiento se queda obsoleto a medida que cambian las preguntas.

### IA

Los paneles incluyen hoy a menudo trabajo asistido por IA, resúmenes escritos por IA e ideas generadas por IA. Muestra las medidas relacionadas con la IA con una compañera de calidad, etiqueta cualquier texto que haya escrito una IA y haz que una persona lo compruebe antes de que llegue a quienes deciden. La precaución es que un resumen fluido de IA junto a un gráfico puede pesar más de lo que merecen los datos, así que muestra primero los datos.

### Automatización

Refresca los datos automáticamente y muestra la frescura y cualquier carga fallida en el propio panel. Mide el pipeline del panel por sus propios fallos. La precaución es que un panel automatizado sigue mostrando los últimos datos buenos cuando falla una carga, así que haz visible la obsolescencia.

### Analítica

Muestra cada número con su tendencia, el recuento que hay detrás y una nota sobre lo que no puede mostrar. La decisión a la que informa es sobre qué pregunta actuará la audiencia. La precaución es que los colores y los umbrales implican un objetivo, así que evita el rojo y el verde donde no exista ninguno.

## Perspectiva sectorial

**Startup.** Mantenlo muy pequeño: una sola página con quizá cinco números que toda la empresa pueda leer, que reflejen la velocidad de entrega, la estabilidad, la experiencia del cliente y el costo. Usa lo que ofrezcan las herramientas existentes. Vuelve a revisar la página siempre que cambien el producto o los clientes y resiste la tentación de construir una plataforma de datos antes de que las preguntas estén claras.

**Pequeña empresa.** Puede bastar un documento compartido o un sencillo gráfico de hoja de cálculo actualizado cada mes. Elige un puñado de medidas que el dueño y el personal usen de verdad, escribe lo que significa cada una y habla de ellas en una reunión regular. El riesgo no es tener pocas herramientas. El riesgo son medidas en las que nadie confía o sobre las que nadie actúa.

**Gran empresa.** La escala requiere definiciones compartidas, un catálogo gobernado de medidas y vistas en capas para equipos, servicios, carteras y ejecutivos. La tentación de consolidarlo todo en un solo número es fuerte y dañina. Mantén las vistas de equipo en manos de los equipos, publica definiciones comunes y exige un propósito declarado para cualquier medida nueva en una vista de liderazgo (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**Gobierno y sector público.** Las obligaciones de reporte y la rendición de cuentas pública dictan a menudo ciertas medidas. Mantén visibles las medidas obligatorias y claramente separadas de las que usan los equipos para mejorar, y explica al público y a los órganos de supervisión lo que las cifras pueden y no pueden mostrar. El lenguaje llano y la accesibilidad importan en cualquier presentación compartida fuera de la organización (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de un programa de paneles incluyen el tiempo de entrevistar a las audiencias, diseñar y construir, conectar y limpiar los datos, escribir definiciones, formar y apoyar a los usuarios y mantener la presentación a lo largo del tiempo. El mayor costo oculto es el tiempo de las personas que leen números que no ayudan y las reuniones dedicadas a debatir de quién es el número correcto. Son comunes las construcciones baratas y rápidas, y el costo real llega después en el mantenimiento y en la desconfianza.

Los retornos incluyen un reconocimiento más rápido de las tendencias, menos discusiones sobre definiciones, un trabajo de mejora mejor dirigido y un menor esfuerzo de reporte cuando una fuente gobernada sustituye a varios informes manuales. Construye el caso con tus propios datos: las horas dedicadas a informes manuales antes y después, el número de versiones competidoras de la misma cifra y las decisiones que informó la presentación. Evita citar cifras publicadas sobre el valor de la analítica sin una fuente rastreable y una pertinencia para tu contexto. La afirmación creíble es modesta: menos medidas, mejores, en las que se confía y que se usan (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **El muro de teselas.** Cada número compite por la atención. Recorta a un puñado por audiencia y pon el detalle un paso más abajo.
- **Gestión por colores.** Los colores de estado cambian con el ruido e impulsan reacciones. Muestra tendencias y usa reglas que respeten la variación.
- **Sin definiciones.** Dos equipos leen la misma etiqueta de forma distinta. Adjunta una definición y un responsable a cada medida.
- **Paneles como vigilancia.** Las vistas a nivel individual erosionan la confianza y distorsionan los datos. Muestra equipos, servicios y sistemas.
- **Un solo número que lo resuma todo.** Esconde las compensaciones que debía exponer. Muestra unos pocos equilibrados.
- **Construir una vez y no revisar nunca.** La presentación se queda obsoleta. Revisa con la audiencia con una cadencia y retira medidas.
- **Presentaciones de vanidad.** Grandes recuentos de actividad sin resultados. Empareja cada volumen con una medida de resultado.
- **El informe que nadie pidió.** Construido con los datos disponibles en lugar de con las preguntas hechas. Empieza por las preguntas.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Audiencia y preguntas | Construido con los datos disponibles | Algunos equipos piden lo que necesitan | Audiencias y preguntas escritas; vistas pequeñas por audiencia | Cobertura de preguntas y vinculación con decisiones revisadas y atendidas | Las audiencias codiseñan las vistas, incluidos clientes y proveedores, y las preguntas evolucionan con los servicios |
| Diseño y contexto | Muchas teselas sin historial | Algunas tendencias y definiciones | Pocas medidas por vista con tendencia, distribución y definición en cada medida | Presentaciones conscientes de la variación; medidas compañeras para cada indicador principal | Las vistas se adaptan a los objetivos cambiantes; patrones compartidos reutilizados entre equipos |
| Datos y mantenimiento | Manual, obsoleto, sin responsable | Algo de automatización; responsables informales | Flujos automatizados, responsables con nombre, frescura mostrada | Frescura y completitud de las definiciones gestionadas; retirada rutinaria | Propiedad federada con definiciones compartidas; retirada y mejora impulsadas por los usuarios |

## Lista de verificación

- [ ] Las preguntas de cada audiencia están escritas y cada vista se corresponde con ellas.
- [ ] Cada vista tiene como máximo unas nueve medidas, con el detalle un paso más abajo.
- [ ] El conjunto está equilibrado entre flujo, calidad, fiabilidad, experiencia y costo.
- [ ] Cada valor muestra tendencia y contexto, y las medidas de tiempo muestran un percentil alto.
- [ ] Cada medida tiene una definición, una fuente, un responsable y una hora de actualización a un clic.
- [ ] Los objetivos se muestran como referencias y los colores de estado siguen una regla declarada.
- [ ] Los equipos ven primero sus propios datos y poseen la interpretación.
- [ ] Ninguna vista clasifica ni sigue a individuos.
- [ ] El panel tiene un responsable con nombre, una cadencia de revisión y una regla para retirar medidas.
- [ ] Los datos se extraen automáticamente, con la hora de la última actualización visible.

## Prompts de IA

**Convierte preguntas en una vista.**

```text
Here are questions asked by [audience]: [list]. For each, suggest one primary
measure and one companion measure that guards against its most likely distortion.
Group them into a view of no more than seven measures, and for each state the
definition, a suggested chart type, and what context it needs. Do not invent data
or benchmarks. List your assumptions and the questions the view cannot answer.
```

**Revisa la claridad de un panel.**

```text
Here is a description of our dashboard, listing each tile, its label, and its
definition: [paste]. Act as a new colleague reading it for the first time. List
which labels are ambiguous, which numbers lack context or trend, which tiles might
invite management by color, and which tiles could be retired. Do not rewrite the
data. List your assumptions.
```

**Redacta una ficha de métrica.**

```text
Draft a metric card for [measure]. Include a plain definition, the formula, unit,
data source, owner, refresh interval, known gaps, the most likely way it will be
gamed, the paired guardrail, and the decision it should inform. Keep it under 200
words. Do not invent figures. Mark anything you are unsure about.
```

**Planifica una revisión del panel.**

```text
Plan a 45-minute quarterly review of our [team] dashboard with its audience.
Include how to check that measures were used for decisions, how to decide which to
retire, how to record events that explain trends, and how to avoid ranking people.
List the questions the facilitator should ask and the output to record.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de cada medida de una vista propuesta.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que la especificación de un panel tiene definiciones, responsables y vectores de manipulación para cada medida.

## Ideas clave

- Parte de las preguntas que hace una audiencia y da a cada audiencia una vista pequeña propia.
- Equilibra el conjunto y empareja cada indicador principal con una compañera que proteja contra la distorsión.
- Muestra tendencia, distribución y contexto con cada valor y respeta la variación normal.
- Adjunta una definición, una fuente, un responsable y una hora de actualización a cada medida.
- Deja que los equipos vean y posean primero sus datos y no muestres nunca a individuos.
- Revisa el panel con su audiencia y retira las medidas que dejaron de informar decisiones.

## Referencias y lecturas complementarias

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
