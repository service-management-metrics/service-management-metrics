# Listas de verificación

Tres listas de verificación para el equipo del programa: una para revisar una métrica concreta, otra para lanzar un panel y otra para auditar un programa de métricas. Úsalas como indicaciones para una conversación con los equipos, no como un formulario que rellenar y archivar. Adáptalas y descarta los elementos que no encajen con tu contexto.

## Lista de verificación para revisar una métrica

Úsala antes de adoptar una métrica y en cada revisión periódica (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**Propósito**

- [ ] La métrica responde a una pregunta que hizo una audiencia con nombre.
- [ ] La decisión a la que debe informar está escrita.
- [ ] Mide un resultado, o está claramente emparejada con uno (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

**Definición**

- [ ] Existen una definición escrita, una fórmula, una unidad y una fuente de datos.
- [ ] Las reglas del reloj o de los límites son explícitas (cuándo empieza, se detiene y se pausa el recuento).
- [ ] Se nombra un responsable y una persona a quien preguntar cuando el número parezca erróneo.
- [ ] Se registran los límites conocidos de los datos, incluidas las brechas y los cambios en cómo se introdujeron.

**Honestidad**

- [ ] El vector de manipulación más probable está escrito.
- [ ] Hay una métrica o práctica de barrera de protección emparejada.
- [ ] La métrica describe un equipo, un servicio o un sistema, y nunca clasifica a individuos.
- [ ] Las medidas de tiempo muestran una mediana y un percentil alto, con el tamaño de la muestra (véase el tema 1.6, Alfabetización estadística para métricas de servicio).
- [ ] Existe una línea base de varios periodos, para que los cambios puedan leerse frente a la variación ordinaria.

**Uso**

- [ ] El equipo que hace el trabajo ve primero el número y ayudó a definirlo.
- [ ] La última revisión llevó a una decisión registrada, incluida una decisión de esperar.
- [ ] Está escrita una condición para retirar la métrica.

## Lista de verificación para lanzar un panel

Úsala antes de mostrar un panel a su audiencia (véase el tema 11.1, Diseño de un panel de métricas de servicio).

**Audiencia y contenido**

- [ ] La audiencia y sus preguntas están escritas, y la audiencia ayudó a revisar un boceto.
- [ ] La vista no tiene más de unas nueve medidas, con el detalle un paso más abajo.
- [ ] El conjunto está equilibrado entre flujo, calidad, fiabilidad, experiencia y costo.
- [ ] Cada medida tiene una compañera que protege contra su probable distorsión.

**Claridad**

- [ ] Cada valor muestra tendencia y contexto, con los eventos anotados.
- [ ] Cada medida tiene una definición, una fuente, un responsable, una hora de actualización y unas brechas conocidas a un clic.
- [ ] Los objetivos se muestran como referencias, y cualquier color de estado sigue una regla declarada que tiene en cuenta la variación.
- [ ] Se ha eliminado la decoración que no aporta información.

**Confianza y operación**

- [ ] La carta se ha acordado y las vistas a nivel individual están desactivadas (véase el tema 11.3, Implantar métricas sin sembrar miedo).
- [ ] Los equipos han visto sus propios datos y han tenido tiempo para corregirlos.
- [ ] Los datos se extraen automáticamente, con comprobaciones de frescura y conciliación con el origen (véase el tema 11.2, Panorama de herramientas).
- [ ] Existen un responsable con nombre, una fecha de revisión y una vía de cuestionamiento.
- [ ] Los informes que sustituye este panel tienen una fecha de retirada.

## Lista de verificación para auditar un programa

Úsala dos veces al año, con los equipos, junto con la autoevaluación (véase el tema 12.5, Autoevaluación de madurez).

**Propósito y confianza**

- [ ] El programa tiene un patrocinador y una carta escrita que cumplen los líderes.
- [ ] Los incumplimientos reportados de la carta se gestionaron y los resultados se publicaron sin nombres.
- [ ] Las encuestas de los equipos y los reportes de cuasi accidentes no sugieren un miedo creciente.
- [ ] No existen tablas de clasificación de equipos ni de individuos en ninguna herramienta ni diapositiva de la organización.

**Medidas y datos**

- [ ] Cada equipo puede nombrar las decisiones sobre las que informaron sus medidas el último trimestre.
- [ ] Las definiciones se conservan en un catálogo portable, con responsables.
- [ ] La cobertura de fuentes, la fiabilidad del pipeline y la conciliación se comprueban y son visibles.
- [ ] Se ha probado en el último año una exportación de definiciones e historial.

**Equilibrio y amplitud**

- [ ] Las medidas de resultado están junto a las medidas de actividad en cada vista.
- [ ] Las medidas relacionadas con la IA siguen líneas base, muestreo y resultados verificados, y no solo el volumen (véase el tema 10.4, Inflación de métricas y dilución de la calidad).
- [ ] Las medidas de automatización y de pipelines incluyen fallos, reversión y elusión, y cada automatización tiene un responsable (véase el tema 10.6, Métricas de automatización y orquestación, y el tema 10.7, Métricas de pipelines y cambio automatizado).
- [ ] La calidad de los datos y la incertidumbre se muestran junto a los números, y las afirmaciones sobre ITIL 5 se etiquetan como verificadas o sin confirmar (véase el tema 10.8, Métricas de analítica y calidad de datos, y el tema 1.8, Medición de ITIL 5 y resultados de valor).
- [ ] Hay medidas de costo, riesgo y personas donde importan, y ninguna se usa para clasificar a individuos.

**Mejora**

- [ ] Las acciones de mejora de la última revisión se completaron o se abandonaron con un motivo.
- [ ] Se retiraron medidas e informes en el último año.
- [ ] El esfuerzo que se pide a los equipos para la medición se ha estimado y les resulta aceptable.
- [ ] El propio programa se ha revisado con los equipos, y el plan cambió como resultado (véase el tema 11.5, Una hoja de ruta de adopción incremental).
