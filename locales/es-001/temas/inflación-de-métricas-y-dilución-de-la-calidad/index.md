# Inflación de métricas y dilución de la calidad

**Cuando la IA vuelve baratos el volumen y la velocidad, toda métrica que cuenta volumen y velocidad se infla, así que empareja cada una con una medida de utilidad que una persona haya comprobado, y vigila si la señal de tus datos se está ahogando.**

## Visión general y motivación

Una métrica funciona porque refleja algo difícil de producir. Los tickets resueltos reflejan esfuerzo. Los documentos escritos reflejan conocimiento. Las pruebas añadidas reflejan cuidado. Cuando una herramienta vuelve casi gratuita la producción visible, se rompe el vínculo entre la producción y el esfuerzo. Los números siguen subiendo y el significado se escurre. Esto es la inflación de métricas, y su compañera es la dilución de la calidad: la proporción de lo producido que es útil cae, y la parte útil se vuelve más difícil de encontrar.

No es un problema nuevo. La [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) y su pariente la [ley de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) describen cómo se corrompen las medidas usadas para el control. Una [métrica de vanidad](https://en.wikipedia.org/wiki/Vanity_metric) parece impresionante y no dice nada sobre la salud del trabajo. Lo que cambia la IA es la velocidad y la escala a las que se puede generar producción, y con ellas la velocidad y la escala a las que pueden ocurrir estos viejos fallos. Un equipo que antes inflaba un recuento a mano puede ahora hacerlo en minutos, a menudo sin pretenderlo.

En el trabajo de servicio y de entrega se repiten varios patrones.

- **Inflación del volumen.** La IA redacta más tickets, más respuestas, más comentarios, más casos de prueba, más documentos y más código. Los recuentos de estos suben. Las cargas de quienes deben leerlos, revisarlos y mantenerlos suben también.
- **Inflación de la velocidad.** El tiempo hasta un primer borrador cae bruscamente, y el tiempo hasta un resultado terminado y comprobado cae menos, o nada. Un panel que reporta lo primero cuenta una historia halagadora.
- **Ruido.** Más contenido compite por la atención. La [sobrecarga de información](https://en.wikipedia.org/wiki/Information_overload) es la condición en que una persona no puede procesar el volumen de información que se le presenta, y la [relación señal-ruido](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) de la base de conocimiento, la cola de tickets o el flujo de alertas cae. La [fatiga de alertas](https://en.wikipedia.org/wiki/Alert_fatigue) es su forma operativa (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).
- **Contenido generado de baja calidad.** El contenido producido en masa con poca revisión, a veces llamado [bazofia de IA](https://en.wikipedia.org/wiki/AI_slop) (AI slop), es verosímil y endeble. Una base de conocimiento sembrada con esos artículos se vuelve menos fiable, y los usuarios aprenden a desconfiar de ella.
- **Costo de la verificación.** El esfuerzo de comprobar una afirmación suele ser mucho mayor que el de hacerla, un patrón a veces llamado [ley de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Cuando generar es barato, la verificación se convierte en el cuello de botella.
- **Eficiencia que aumenta el consumo.** La [paradoja de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) describe casos en que las ganancias de eficiencia llevan a usar más un recurso, no menos. Si redactar un informe se vuelve barato, se demandan más informes. El tiempo ahorrado por una herramienta puede consumirse en más trabajo de menor valor.
- **Bucles de retroalimentación.** Si el contenido generado alimenta la siguiente ronda de generación, los errores se acumulan. La bibliografía de investigación describe el [colapso del modelo](https://en.wikipedia.org/wiki/Model_collapse) en modelos entrenados con sus propias salidas. Puede darse un bucle parecido dentro de una organización cuando un asistente resume tickets que escribió un asistente a partir de artículos que resumió un asistente.
- **Líneas base a la deriva.** Si la distribución de los datos cambia por la IA, las tendencias y los umbrales ya no significan lo que significaban. Se parece a la [deriva de concepto](https://en.wikipedia.org/wiki/Concept_drift) del aprendizaje automático, en que la relación entre las entradas y los resultados cambia con el tiempo. Un aumento del volumen de tickets puede reflejar una creación de tickets más fácil, no más problemas.

Los fines ágiles importan aquí. La entrega continua, la mejora continua y el ritmo sostenible dependen todos de que la señal sea clara. No se debe pedir a las personas motivadas que vadeen ruido generado por máquinas ni que verifiquen montones de producción a un ritmo insostenible. Las partes interesadas implicadas de forma continua son además la mejor defensa: te dirán cuándo los informes ya no ayudan.

Este tema da las medidas para notar la inflación y la dilución, y los emparejamientos que las dejan al descubierto. Se apoya en los fundamentos y en las medidas del trabajo asistido (véase el tema 10.1, La IA en la medición de la gestión de servicios, y el tema 10.2, Medición del trabajo asistido por IA).

## Principios clave

- **Empareja cada métrica de volumen o de velocidad con una comprobación de utilidad.** Una persona juzga si la salida es útil.
- **Mide hasta un resultado terminado y verificado.** La velocidad del primer borrador es una trampa.
- **Vigila la carga de verificación.** Crece en silencio y consume el tiempo ahorrado.
- **Protege la señal.** Mantén la base de conocimiento, las colas y las alertas lo bastante limpias para confiar en ellas.
- **Rompe los bucles de retroalimentación.** No dejes que el contenido generado alimente la generación sin revisión.
- **Vuelve a fijar la línea base cuando cambien los datos.** Las tendencias a través de un cambio tecnológico necesitan cuidado.
- **Prefiere menos salidas, pero mejores.** Menos puede ser más cuando la atención es el recurso limitante.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Razón producción a resultado | Volumen de producción en relación con el resultado que debía producir | recuento de producción (tickets, artículos, cambios) / medida de resultado (problemas resueltos, artículos usados, cambios retenidos), en el mismo periodo, con seguimiento como tendencia | razón | Gestor de trabajo, base de conocimiento, medidas de resultado | Mejora continua; medición y elaboración de informes | Software funcionando sobre volumen de documentación | Mensual |
| Proporción de elementos útiles | Proporción de elementos muestreados que un revisor cualificado juzga útiles | elementos muestreados juzgados útiles (correctos, pertinentes, no duplicados) / elementos muestreados | porcentaje | Revisión de una muestra aleatoria | Gestión del conocimiento; aseguramiento de la calidad | Definición de terminado para el contenido | Mensual |
| Carga de verificación | Tiempo humano dedicado a comprobar y corregir el trabajo generado por unidad de producción | horas de revisión y corrección / unidades de producción, con seguimiento como tendencia | horas por unidad | Estimaciones de tiempo, datos de la herramienta de revisión | Gestión financiera de servicios; mejora continua | La capacidad de revisión como restricción | Mensual |
| Tasa de redundancia del contenido | Proporción de elementos de conocimiento que duplican o se solapan sustancialmente con otro | elementos señalados como duplicados o solapados en la revisión o por emparejamiento / elementos de la base de conocimiento | porcentaje | Revisión de la base de conocimiento, informes de emparejamiento | Gestión del conocimiento | Fuente única de la verdad | Trimestral |
| Proporción revisada del conocimiento generado | Proporción de elementos de conocimiento generados por IA que una persona cualificada ha revisado y aprobado antes de publicarlos | elementos generados publicados con revisión aprobada / elementos generados publicados | porcentaje | Metadatos de la base de conocimiento | Gestión del conocimiento; habilitación de cambios | Revisión antes de la publicación | Mensual |
| Entrada de pendientes frente a resolución | Crecimiento del trabajo que llega en relación con el crecimiento del trabajo resuelto, para las colas afectadas por la IA | (cambio en elementos creados) / (cambio en elementos resueltos), comparado con la línea base previa a la IA | razón | Historial de tickets y del gestor | Gestión de incidentes; gestión de solicitudes de servicio | Equilibrio del flujo | Mensual |
| Marcas de deriva de las métricas | Número de métricas cuya definición o distribución cambió notablemente tras introducir la IA, revisadas y anotadas | métricas señaladas en la revisión / métricas del registro | recuento; porcentaje | Revisión del registro de métricas, comprobaciones de distribución | Medición y elaboración de informes | Retrospectiva sobre la medición | Trimestral |

Define «útil» en una rúbrica escrita: correcto, pertinente para una necesidad real, no duplicado y actual. La carga de verificación cuenta el tiempo dedicado por las personas, incluido el de volver a redactar el prompt, y excluye el tiempo que es solo de espera. La proporción revisada es un control: el conocimiento generado sin revisar se sigue aparte y se mantiene visiblemente etiquetado. Las marcas de deriva de las métricas son conversaciones, no sanciones: una marca significa que una persona ha decidido si ajustar la definición, anotar la tendencia o volver a fijar la línea base. Todas las medidas describen procesos y contenido, no individuos.

## Recomendaciones

### Empareja el volumen con la utilidad

**1. Incorpora una comprobación de utilidad a cada métrica de volumen.** Para cada medida de volumen o de velocidad de tu panel, nombra una medida de utilidad que haya juzgado una persona. Los tickets creados se emparejan con la calidad de la resolución, los artículos escritos con el uso y la exactitud de los artículos, y los cambios incorporados con la retención y el retrabajo (véase el tema 10.2, Medición del trabajo asistido por IA). Muéstralos juntos y hablen de ello cuando diverjan.

**2. Muestrea y juzga con regularidad.** Cada mes, extrae una muestra aleatoria de elementos de los flujos que toca la IA y haz que una persona cualificada los juzgue frente a una rúbrica escrita. Registra la proporción útil y los motivos por los que fallan los elementos. Rota a los revisores y mantenlos independientes de los productores. El muestreo es la principal defensa contra la dilución lenta.

**3. Reporta los resultados antes que las producciones.** En los informes a los líderes, empieza por los resultados: problemas resueltos, usuarios satisfechos, defectos evitados. Pon después los recuentos de producción, como contexto. Si el informe seguiría siendo valioso sin los recuentos de producción, está bien orientado.

### Controla la verificación y el ruido

**4. Mide la carga de verificación.** Estima el tiempo dedicado a comprobar y corregir el trabajo generado y haz seguimiento de él como tendencia por unidad de producción. Si sube cuando sube la producción, la ganancia neta es menor de lo que sugieren los números de generación, y los revisores pueden ir camino de la sobrecarga. Incluye la carga en el costo por tarea (véase el tema 10.1, La IA en la medición de la gestión de servicios).

**5. Limita lo que entra en el sistema.** Decide qué contenido generado puede crearse y publicarse automáticamente y qué necesita revisión. Fija límites al tamaño y al número de cambios generados en una revisión. Facilita decir que no al volumen. Una cola más pequeña con elementos más claros sirve mejor a los usuarios.

**6. Gestiona la base de conocimiento como un producto.** Etiqueta el contenido generado, exige revisión antes de la publicación, retira duplicados y elementos obsoletos y haz seguimiento de la redundancia y del uso. Una base de conocimiento es útil en proporción a lo mucho que los usuarios confían en ella. Retira los artículos que nadie usa y que nadie puede avalar (véase el tema 3.6, Métricas de gestión del conocimiento).

**7. Mantén limpios los flujos de alertas y de tickets.** Si la IA crea tickets a partir de alertas o resúmenes, mide la proporción útil y los duplicados. Afina sin contemplaciones. Trata una relación señal-ruido a la baja como un incidente en sí mismo, ya que perjudica la respuesta cuando llegue un problema real.

### Rompe los bucles y vigila la línea base

**8. Impide que el contenido generado se alimente a sí mismo sin comprobar.** Donde un asistente se apoye en una base de conocimiento, un historial de tickets o informes pasados, asegura que el material generado de esas fuentes haya sido revisado, o esté etiquetado y ponderado en consecuencia. Muestrea la cadena: elige una respuesta y rastréala hacia atrás por sus fuentes para ver de dónde vino. Los bucles sin comprobar amplifican los errores.

**9. Vuelve a fijar la línea base cuando cambien los datos.** Tras introducir la IA, anota los gráficos de tendencia y, donde haya cambiado la naturaleza de los datos, empieza una línea base nueva. Comprueba las distribuciones, no solo los totales: la longitud de los tickets, la composición de categorías y el tiempo de creación pueden cambiar. Las marcas de deriva de las métricas provocan estas conversaciones (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**10. Busca el rebote.** Cuando una tarea se vuelve más barata, pregunta si crecerá la demanda de ella. Decide de antemano cómo usar el tiempo ahorrado, para que no lo absorba más producción de poco valor. Un equipo que produce el doble de informes con el mismo esfuerzo puede estar haciendo un trabajo menos útil.

### Mantén la atención humana en el bucle

**11. Protege la atención de los revisores y de los usuarios.** La capacidad de revisión y la atención son escasas. Reduce el volumen de material que la gente debe leer, da a los revisores cargas realistas y pregúntales qué se está volviendo más difícil. Un ritmo sostenible incluye el ritmo de leer y juzgar (véase el tema 9.2, Métricas de satisfacción y bienestar).

**12. Pregunta a los usuarios y a las partes interesadas si la señal es clara.** La implicación continua de las personas que usan las producciones es la mejor prueba. Pregunta si la base de conocimiento es más fácil o más difícil de usar, si los informes les dicen lo que necesitan, si la cola se ve más clara. Sus respuestas, y sus comentarios, deben leerse junto a los números.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Razón producción a resultado | Elegir una medida de resultado que sube con el volumen; cambiar el periodo | Resultado fijado en el registro; comparar con la satisfacción y la tasa de reapertura |
| Proporción de elementos útiles | Muestrear elementos fáciles; rúbrica indulgente; revisores influidos por el productor | Muestra aleatoria; rúbrica escrita; revisores independientes y rotatorios |
| Carga de verificación | No registrar el tiempo de revisión; trasladar la comprobación a equipos posteriores | Incluir el retrabajo posterior; preguntar a los revisores por la carga |
| Tasa de redundancia del contenido | Reglas de emparejamiento estrechas que pasan por alto duplicados; fusionar elementos distintos | Muestrear a mano los duplicados; registrar las reglas de fusión |
| Proporción revisada del conocimiento generado | Marcar la revisión como completa sin leer; revisar en bloque | Muestrear revisiones por su fondo; tiempo por revisión; tasa de error en los elementos publicados |
| Entrada de pendientes frente a resolución | Cerrar automáticamente elementos; dividir elementos | Comprobar la calidad de la resolución; tasa de reapertura; muestrear los elementos cerrados |
| Marcas de deriva de las métricas | No señalar para evitar trabajo; señalarlo todo | Revisar todas las métricas cada trimestre; exigir una decisión para cada marca |

Una lectura sana es una proporción de elementos útiles estable o creciente a medida que crece el volumen, una carga de verificación conocida y asumible, una base de conocimiento con poca redundancia y contenido generado revisado, colas con una señal clara y una visión de liderazgo que empieza por los resultados.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Contar producciones | Fácil, familiar | Se infla; premia el volumen |
| Medir resultados | Refleja el valor | Más lento; más difícil de atribuir |
| Muestrear y juzgar | Detecta la dilución | Necesita revisores expertos; esfuerzo |
| Puntuación automática de la calidad | Escala | La opinión de otro modelo; puede compartir los mismos puntos ciegos |
| Revisar todo lo generado | Seguro | Elimina el beneficio; revisores sobrecargados |
| Revisar una muestra | Práctico | Algunos elementos deficientes pasan |
| Permitir la generación abierta | Rápida, amplia | Ruido; la confianza se erosiona |
| Limitar la generación a usos aprobados | Señal más limpia | Adopción más lenta; beneficios perdidos |

La respuesta en prosa es medir los resultados, muestrear y juzgar la utilidad con personas, limitar lo que entra en los almacenes compartidos sin revisión y revisar de nuevo las líneas base. Usa la puntuación automática como ayuda y no como juez.

## Preguntas para debatir con tu equipo

**1. ¿Cuál de nuestros números ha subido desde que usamos IA y qué ha hecho por las personas a las que servimos?**
Enumeren los números. Para cada uno, miren el resultado que debía reflejar. El facilitador debe anotar dónde no se movió el resultado. Emparejen esos números con una comprobación de utilidad.

**2. ¿Cuánto de lo que publicamos o creamos el mes pasado nos alegraría defender línea por línea?**
Tomen una muestra aleatoria y léanla juntos. Marquen lo que es útil, endeble, erróneo o duplicado. Hablen de la tasa y de las causas. Acuerden un estándar para lo que entra en los almacenes compartidos.

**3. ¿Dónde se está convirtiendo en cuello de botella la comprobación?**
Pregunten a los revisores. Miren las colas de revisiones, la profundidad de la revisión y el esfuerzo que cargan ahora. Acuerden un límite al tamaño o al número de elementos generados por revisión y una forma de medir la carga.

**4. ¿Qué contenido generado está alimentando aquí a otro contenido generado?**
Rastreen una respuesta típica hacia atrás por sus fuentes. ¿Dónde empezó la cadena? Hablen de dónde debería comprobar la cadena una persona, o etiquetar el contenido.

**5. ¿Qué diría un usuario de nuestra base de conocimiento ahora, comparada con hace un año?**
Lean los comentarios recientes y miren los datos de uso. Pregunten si es más fácil o más difícil encontrar una respuesta fiable. Acuerden una limpieza y una regla para el contenido nuevo.

**6. ¿Qué tendencias deberíamos reiniciar con una línea base nueva?**
Enumeren las métricas que dependen del volumen o de cómo se crean los elementos. Busquen cambios de forma desde que llegó la IA. Anoten las tendencias y decidan cuáles necesitan una línea base nueva.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega generan gran parte del volumen y cargan con el mantenimiento. Deben preferir cambios más pequeños y claros, mantener revisado y etiquetado el material generado y vigilar la retención y el retrabajo. Deben rechazar las métricas basadas en el volumen generado y pedir medidas de resultado.

### Equipos de servicio y de operaciones

Los equipos de operaciones viven en las colas, las alertas y la base de conocimiento que daña la dilución. Deben afinar los tickets y las alertas creados por la IA para mantener fuerte la señal, revisar el conocimiento generado antes de publicarlo y avisar cuando el flujo se convierta en ruido. Son los mejor situados para juzgar la utilidad.

### Liderazgo y gobernanza

Los líderes reciben los paneles que distorsiona la inflación. Deben pedir primero los resultados, exigir comprobaciones de utilidad junto al volumen, financiar la capacidad de revisión y aceptar que algunas medidas necesitan una nueva línea base. La gobernanza debe comprobar que el contenido generado de los almacenes compartidos está revisado y etiquetado.

### Clientes y usuarios

Los usuarios cargan con el costo de la dilución cuando las respuestas son erróneas, los artículos se contradicen y las respuestas son largas y vacías. Quieren ayuda breve, correcta y pertinente. Su reacción a la calidad de lo que reciben es una prueba directa de si la señal sobrevivió.

## En la práctica: un ejemplo de gestión de servicios

El grupo de TI de una compañía farmacéutica global habilita un asistente de IA para redactar artículos de conocimiento, resumir tickets y preparar informes semanales de estado. En un trimestre, el panel luce excelente. Los números siguientes son ilustrativos.

Los artículos de conocimiento creados suben de 140 a 610 al mes. Los tickets llevan resúmenes detallados escritos por la IA. Los informes semanales alcanzan las doce páginas. La gerente de calidad del servicio nota que la satisfacción con el autoservicio ha caído y que el centro de servicios reporta más contactos de «el artículo no ayudó». Muestrea 100 de los artículos nuevos con dos agentes con experiencia. Solo 54 se juzgan útiles: 23 duplican artículos existentes, 15 contienen pasos desactualizados o incorrectos y 8 son demasiado vagos para actuar sobre ellos. De los artículos nuevos, el 71 por ciento se publicó sin revisión humana. La base de conocimiento contiene ahora unos 3200 artículos, con una tasa de redundancia del contenido que ella estima en el 28 por ciento frente al 9 por ciento de hace un año. Los agentes reportan que encontrar una respuesta fiable lleva más tiempo. La carga de verificación de los editores de artículos del centro de servicios ha crecido hasta aproximadamente 40 horas por semana, desde 12. Los resúmenes de tickets escritos por la IA hacen que las respuestas generadas por la IA después se basen en un texto que nadie escribió, y en un rastreo de cinco respuestas hacia atrás por sus fuentes, dos se apoyaban en un resumen que había expuesto mal el problema. Los informes semanales de estado, al leerlos, dicen poco que no estuviera en el anterior, y las partes interesadas han dejado de leer más allá de la página dos.

Propone cuatro cambios, que adoptan el equipo de liderazgo del servicio y los responsables del conocimiento. Los artículos generados necesitan la revisión de un editor con nombre antes de publicarse, y se etiquetan hasta que se aprueban. Un límite de un artículo generado por grupo temático evita los duplicados, y un barrido fusiona o retira los elementos redundantes. Las plantillas de informe se recortan a dos páginas que empiezan por los resultados, y la IA se usa para redactar solo las secciones que luego edita una persona. Los resúmenes de tickets se marcan como generados, y cada mes se comprueba una muestra. El panel reporta la proporción de elementos útiles, la tasa de redundancia, la proporción revisada y la carga de verificación junto a los recuentos de artículos.

Tras dos trimestres, los artículos creados por mes bajan a 190, la proporción de elementos útiles sube al 91 por ciento, la tasa de redundancia baja al 11 por ciento, la proporción revisada es del 100 por ciento y la carga de verificación se estabiliza en unas 16 horas por semana. La satisfacción con el autoservicio se recupera y bajan los contactos de «el artículo no ayudó». Las partes interesadas leen el informe de dos páginas. Un director pide un objetivo de 1000 artículos al mes para mostrar el valor del programa de IA. La gerente de calidad del servicio explica que el recuento era el problema y propone hacer seguimiento de la utilidad y del uso. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Una revisión regular de si cada recuento sigue reflejando utilidad ayuda a un equipo a notar pronto la inflación, y las partes interesadas pueden decirte lo que usan realmente. La precaución es que ajustar un recuento después de notar la inflación reinicia el ciclo.

### IA

La IA vuelve baratos el volumen y la velocidad, así que todo recuento de volumen o de velocidad se infla. Empareja cada uno con la proporción de elementos que una persona juzgó útiles y con la carga de verificación, y comprueba si hay contenido redundante. La precaución es que una IA usada para comprobar la salida de una IA puede compartir los mismos puntos ciegos, así que conserva el muestreo humano.

### Automatización

Automatiza la detección de duplicados, casi duplicados y contenido obsoleto, y mide la detección por sus falsos positivos. La precaución es que una limpieza automática puede eliminar elementos poco frecuentes pero importantes.

### Analítica

Reporta la razón producción a resultado y la proporción de elementos útiles con los tamaños de muestra. La decisión a la que informa es qué recuentos dejar de reportar. La precaución es que la razón depende de cómo se definan los resultados, así que decláralo.

## Perspectiva sectorial

**Startup.** Generar es barato y el tiempo de revisión escaso. Mantén breves la documentación y los tickets, revisa lo que leerán los clientes y borra con libertad. Un conjunto pequeño y correcto de artículos supera a uno grande de dudosos.

**Pequeña empresa.** Hay poca capacidad para revisar, así que limita lo que produce la herramienta. Prefiere un puñado de guías y plantillas verificadas. Cuidado con publicar material generado en páginas públicas sin comprobarlo.

**Gran empresa.** La escala amplifica el ruido. Establece una gobernanza del contenido con responsables, etiquetas y reglas de revisión, mide la utilidad en toda la base de conocimiento y ejecuta limpiezas periódicas. Comparte las rúbricas entre equipos y compara tendencias, no equipos.

**Gobierno y sector público.** El contenido público debe ser exacto y accesible, y los errores pueden dañar. Exige la revisión de la información pública generada, conserva registros de cómo se produjo y aplica normas de lenguaje claro y de accesibilidad. Pueden aplicarse reglas de conservación y de registros al material generado (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de protegerse contra la inflación son modestos: tiempo de revisión para el muestreo, esfuerzo editorial para el contenido generado, herramientas para detectar duplicados y el esfuerzo de volver a fijar las líneas base de las tendencias. Los costos de no hacerlo son mayores pero difusos: usuarios que dejan de confiar en el autoservicio, revisores que se queman, decisiones tomadas con números inflados y proyectos de limpieza.

Construye el caso con tus propios datos: la proporción de elementos útiles y la carga de verificación a lo largo del tiempo, el volumen de contactos causados por contenido inútil y el costo de una limpieza de la base de conocimiento. Evita usar cifras publicadas sobre la calidad del contenido generado, que varían mucho según la herramienta, la tarea y el método. Incluye el costo evitado del daño a la reputación por publicar información errónea (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Celebrar el volumen.** Premia el ruido. Celebra los resultados y la utilidad.
- **La velocidad del primer borrador como historia de productividad.** El ahorro puede desvanecerse en la comprobación. Mide el tiempo hasta un resultado verificado.
- **Publicar contenido generado sin revisión.** La confianza se erosiona en silencio. Revisa y etiqueta.
- **Dejar que el contenido generado alimente la generación.** Los errores se acumulan. Comprueba la cadena.
- **Líneas base sin cambiar.** Las tendencias engañan tras un cambio tecnológico. Anota y vuelve a fijar la línea base.
- **Sobrecargar a los revisores.** La revisión se convierte en un sello de goma. Limita el volumen y mide la carga.
- **Usar un juez de IA para todo.** Puede compartir los puntos ciegos del productor. Mantén a las personas en el bucle.
- **Ignorar el rebote.** El trabajo más barato atrae más trabajo. Decide para qué es el tiempo ahorrado.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Emparejamiento y muestreo | El volumen se reporta solo | Impresiones informales de calidad | Cada métrica de volumen emparejada con una comprobación de utilidad muestreada | Utilidad, carga y redundancia gestionadas con objetivos para la revisión y no para el volumen | Visión de toda la organización de la calidad de la señal; rúbricas compartidas con los socios |
| Contenido y bucles | Contenido generado mezclado | Algo de etiquetado | Contenido generado etiquetado y revisado antes de su publicación; cadenas muestreadas | Bucles monitorizados; almacenes curados; duplicados retirados según un calendario | Procedencia con seguimiento de extremo a extremo entre herramientas y proveedores |
| Líneas base y atención | Tendencias leídas a través del cambio | Anotaciones en algunos gráficos | Líneas base reiniciadas donde cambiaron los datos; rebote considerado | Marcas de deriva revisadas cada trimestre; carga de los revisores gestionada | El diseño de métricas se adapta continuamente al cambio tecnológico junto con las partes interesadas |

## Lista de verificación

- [ ] Cada métrica de volumen o de velocidad tiene una compañera de utilidad juzgada por una persona.
- [ ] Una muestra aleatoria de elementos tocados por la IA se revisa cada mes frente a una rúbrica escrita.
- [ ] La carga de verificación se estima y se sigue como tendencia.
- [ ] El conocimiento generado se etiqueta y se revisa antes de publicarlo.
- [ ] La redundancia de la base de conocimiento se mide y se reduce.
- [ ] Los flujos de alertas y de tickets se monitorizan por su proporción útil y sus duplicados.
- [ ] Se muestrean las cadenas desde las salidas generadas hasta sus fuentes.
- [ ] Las tendencias a través de la introducción de la IA se anotan o se les fija una nueva línea base.
- [ ] Los informes a los líderes empiezan por los resultados.
- [ ] Se pregunta a los usuarios y a las partes interesadas si la señal es más clara o más ruidosa.

## Prompts de IA

**Crea una rúbrica de utilidad.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Analiza una caída de la señal.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Planifica la limpieza de una base de conocimiento.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Rastrea una cadena de contenido generado.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la compañera de utilidad de una métrica de volumen o de velocidad.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una métrica afectada por la IA empareja el volumen con una utilidad muestreada y lleva su vector de manipulación y su barrera de protección.

## Ideas clave

- Cuando la IA abarata la producción, las métricas de volumen y de velocidad se inflan y la proporción que es útil puede caer.
- Empareja cada medida de volumen o de velocidad con una comprobación de utilidad muestreada y juzgada por personas.
- Mide el tiempo hasta un resultado verificado y la carga de verificación, porque la comprobación se convierte en el cuello de botella.
- Etiqueta y revisa el contenido generado antes de que entre en los almacenes compartidos y evita que los bucles se alimenten a sí mismos sin comprobar.
- Vuelve a fijar la línea base de las tendencias tras un cambio tecnológico y empieza los informes por los resultados.
- Decide de antemano para qué es el tiempo ahorrado y protege la atención de los revisores y de los usuarios.

## Referencias y lecturas complementarias

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
