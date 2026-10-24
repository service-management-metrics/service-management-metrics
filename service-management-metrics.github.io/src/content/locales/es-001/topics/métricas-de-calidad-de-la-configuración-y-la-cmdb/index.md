# Métricas de calidad de la configuración y la CMDB

**Una base de datos de configuración solo justifica su existencia cuando la gente confía lo bastante en ella como para usarla en un cambio o en un incidente, así que mide su calidad por lo bien que responde a preguntas reales y deja que los equipos propietarios de los servicios mantengan al día sus propios registros.**

## Visión general y motivación

Cuando un servidor de bases de datos falla a las tres de la madrugada, alguien pregunta qué servicios dependen de él. Cuando un equipo planifica un cambio, alguien pregunta qué más podría romperse. Las respuestas deberían salir de un registro de las cosas que componen tus servicios y de cómo se conectan. Ese registro es el objeto de la gestión de la configuración, y la base de datos que hay detrás es la base de datos de gestión de la configuración, normalmente abreviada como CMDB.

Un [elemento de configuración](https://en.wikipedia.org/wiki/Configuration_item) (CI) es cualquier componente que necesita gestionarse para entregar un servicio de TI: un servidor, una aplicación, una base de datos, un dispositivo de red, una cuenta en la nube, un contrato. Una [base de datos de gestión de la configuración](https://en.wikipedia.org/wiki/Configuration_management_database) almacena información sobre los CI, sus atributos y las relaciones entre ellos. Donde la gestión de activos pregunta qué tienes, quién lo posee y cuánto cuesta (véase el tema 7.1, Métricas de gestión de activos de TI), la gestión de la configuración pregunta cómo encajan las partes y qué depende de qué.

Las CMDB tienen una reputación mixta, y se la han ganado. Muchas se construyeron como mapas exhaustivos, llenas de datos que decayeron más deprisa de lo que nadie podía corregir, y luego se abandonaron. Las tradiciones ágil y DevOps ofrecen un punto de partida mejor. Los equipos que describen su infraestructura como código tienen una definición autorizada y versionada de lo que operan, y pueden publicarla automáticamente en el registro compartido. La [infraestructura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code) convierte el registro en un subproducto de la entrega. ITIL 4 describe la práctica como gestión de la configuración del servicio y subraya la información necesaria para respaldar las decisiones, no la exhaustividad por sí misma.

La calidad de un registro de configuración tiene varias partes, que se corresponden con la idea más amplia de [integridad de los datos](https://en.wikipedia.org/wiki/Data_integrity):

- **Completitud:** los CI y los atributos que importan están presentes.
- **Exactitud:** lo que dice el registro coincide con la realidad.
- **Puntualidad:** los cambios aparecen en el registro con la rapidez suficiente para ser útiles.
- **Coherencia:** la misma cosa no se registra dos veces con nombres distintos. Hacer coincidir registros que se refieren a la misma cosa es el problema de la [resolución de entidades](https://en.wikipedia.org/wiki/Entity_resolution).
- **Calidad de las relaciones:** las dependencias entre CI están presentes y son correctas. Aquí viven la mayor parte del valor y la mayor parte del deterioro.

La prueba más profunda de una CMDB es el uso. Un registro que la gente consulta durante incidentes y cambios, y corrige cuando está mal, está sano. Un registro que solo se audita, no. Por eso las medidas siguientes empareja medidas de calidad con medidas de uso.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con un giro: la completitud es fácil de inflar con valores por defecto, y la exactitud es fácil de afirmar sin comprobarla. Insiste en la evidencia independiente y en las medidas de uso (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Empieza por las preguntas.** Decide qué necesitas que responda el registro y construye solo eso.
- **Prefiere un registro menor y de confianza a uno mayor y dudoso.** El alcance crece cuando se gana la confianza.
- **Deja que la fuente de verdad alimente el registro.** Los pipelines, las API de la nube y el descubrimiento deben escribir en él, no personas con hojas de cálculo.
- **Deja que los equipos de servicio posean los registros de sus servicios.** Conocen sus dependencias y sienten el costo de los errores.
- **Mide por el uso además de por la calidad.** Un buen registro se consulta.
- **Contrasta con la realidad.** Pon a prueba el registro preguntando si predice lo que ocurre.
- **Corrige en el origen.** Un registro erróneo es un síntoma. Encuentra el proceso que dejó que derivara.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completitud de los CI | Proporción de CI del ámbito con todos los atributos exigidos rellenados con valores válidos | CI del ámbito con todos los atributos exigidos válidos / CI del ámbito | porcentaje | CMDB, reglas de atributos | Gestión de la configuración del servicio; gestión de activos de TI | La definición de terminado incluye la descripción del servicio | Mensual |
| Exactitud de los CI | Proporción de CI muestreados cuyo registro coincide con la evidencia en los atributos exigidos | CI muestreados que coinciden en todos los atributos exigidos / CI muestreados | porcentaje | Muestra de auditoría comparada con el sistema en vivo | Gestión de la configuración del servicio | El estado de la infraestructura como código coincide con la realidad | Trimestral |
| Cobertura de dependencias | Proporción de servicios críticos cuyas dependencias aguas arriba y aguas abajo están cartografiadas y revisadas | servicios críticos con un mapa de dependencias revisado en los últimos 90 días / servicios críticos | porcentaje | Relaciones de la CMDB y registros de revisiones | Gestión de la configuración del servicio; gestión de la disponibilidad | Revisión de arquitectura y de propiedad de servicios | Trimestral |
| Tasa de acierto en la predicción de impacto | Proporción de incidentes y cambios en que los servicios realmente afectados estaban en el impacto predicho por la CMDB | incidentes o cambios en que todos los servicios afectados fueron predichos / incidentes o cambios revisados | porcentaje | Revisiones posteriores a incidentes y registros de cambios comparados con consultas a la CMDB | Gestión de incidentes; habilitación de cambios | Hallazgo de la revisión sin culpas sobre dependencias que faltan | Trimestral |
| Tasa de CI duplicados | Proporción de CI que duplican a otro CI | CI marcados como duplicados por las reglas de coincidencia y confirmados en la revisión / CI del ámbito | porcentaje | Informe de coincidencias de la CMDB y muestra de revisión | Gestión de la configuración del servicio | Fuente única de verdad | Mensual |
| Latencia de actualización | Retraso entre un cambio en un CI en el mundo real y su actualización en la CMDB | mediana y percentil 85 de las horas o días desde el evento de cambio hasta la actualización de la CMDB | horas o días | Eventos de cambio y de pipeline comparados con las marcas de tiempo de la CMDB | Gestión de la configuración del servicio; habilitación de cambios | Registro automatizado en el pipeline | Mensual |
| Tasa de uso de la CMDB | Proporción de incidentes y cambios que hacen referencia a CI y, de ellos, proporción en que los usuarios reportan que el registro ayudó | registros que hacen referencia a un CI válido / incidentes y cambios del periodo; más proporción de registros revisados en que los datos del CI ayudaron | porcentaje | Herramienta ITSM, breve pregunta de retroalimentación | Gestión de incidentes; habilitación de cambios | Equipos que usan el registro compartido en su trabajo | Mensual |

Define el alcance de «CI del ámbito» por clase y por criticidad, y anótalo. Un CI es exacto solo en los atributos que nombras como exigidos. La latencia de actualización empieza en el evento real, como un despliegue o una compra, y se detiene cuando la CMDB lo refleja. La tasa de acierto en la predicción de impacto requiere un paso de revisión que registre qué servicios se vieron realmente afectados, y es tan fiable como esa revisión.

## Recomendaciones

### Decide para qué sirve el registro

**1. Escribe las preguntas que la CMDB debe responder.** Las típicas son: qué depende de este componente, quién posee este servicio, qué cambió recientemente, qué afectaría un fallo aquí y qué está fuera de soporte. Para cada pregunta, nombra las clases de CI, los atributos y las relaciones necesarios. Todo lo que no se necesite para responder a una pregunta es candidato a dejarse fuera.

**2. Empieza por los servicios que más importan.** Elige el puñado de servicios críticos, cartografíalos de extremo a extremo y hazlo bien antes de añadir más. Un mapa fiable de diez servicios ayuda más que un mapa dudoso de mil. Amplía según crezcan la confianza y el uso.

**3. Define con sencillez las clases, los atributos y los tipos de relación.** Una lista corta de clases de CI (servicio, aplicación, base de datos, host, red, recurso en la nube) y de tipos de relación (depende de, se ejecuta en, se conecta con, es propiedad de) cubre la mayoría de las necesidades. Un modelo que intenta captarlo todo es difícil de rellenar y más difícil de consultar. Mantén un modelo escrito y cámbialo deliberadamente.

### Alimenta el registro desde el origen

**4. Publica desde los pipelines y el código.** Donde la infraestructura y las aplicaciones se definen como código, haz que el pipeline de entrega cree, actualice y retire CI en cada cambio, incluida la información de propiedad y de dependencias declarada junto al código. Trata la declaración como parte de la definición de terminado de un servicio. Esto deja la latencia de actualización cerca de cero y mantiene el registro alineado con lo que se ejecuta.

**5. Usa el descubrimiento como segunda opinión.** El [descubrimiento de servicios](https://en.wikipedia.org/wiki/Service_discovery) de red y de nube encuentra lo que realmente se ejecuta y cómo se conecta. Compáralo con el registro declarado. Las diferencias son hallazgos: o bien a la declaración le falta algo, o bien se ejecuta algo que no debería. El descubrimiento por sí solo produce datos ruidosos sin propiedad, así que úsalo para comprobar, no para escribir.

**6. Usa identificadores estables y reglas de coincidencia.** Los duplicados surgen cuando fuentes distintas nombran de forma distinta la misma cosa. Acuerda un identificador único para cada clase de CI, anota los identificadores de origen y ejecuta reglas de coincidencia para encontrar y fusionar duplicados. Revisa a mano una muestra de coincidencias, ya que la fusión automática puede combinar cosas distintas.

**7. Da a cada equipo de servicio la propiedad de su parte.** El equipo que construye y opera un servicio es el mejor situado para conocer sus dependencias y notar los errores. Hazle fácil: una plantilla, una breve revisión en la planificación y retroalimentación cuando se usen sus datos. Los equipos centrales poseen el modelo, las herramientas y las comprobaciones, no cada registro.

### Mide la calidad y el uso

**8. Audita la exactitud por muestreo.** Cada trimestre, extrae una muestra aleatoria de CI y compruébalos frente a los sistemas en vivo, y una segunda muestra de los sistemas en vivo para comprobar que aparecen en el registro. Reporta la exactitud por clase y muestra las principales fuentes de error. Mantén fijo el método de muestreo para que las tendencias signifiquen algo.

**9. Pon a prueba el mapa con incidentes.** Tras un incidente o cambio significativo, compara los servicios realmente afectados con lo que predijo la CMDB. Registra los fallos y corrige las dependencias que faltan. Es la prueba de exactitud más significativa, porque contrasta el registro con eventos, y la tasa de aciertos mejora a medida que se corrige el mapa. Usa revisiones sin culpas para que la gente reporte con facilidad los fallos (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

**10. Haz seguimiento del uso y pregunta si ayudó.** Cuenta con qué frecuencia los incidentes y los cambios hacen referencia a CI, y haz a quienes responden y aprueban una breve pregunta sobre si el registro ayudó. Una tasa de uso creciente con respuestas positivas es la señal más clara de valor. Una tasa de uso baja significa que la gente no confía en el registro o no sabe que existe, y ambas cosas tienen arreglo.

**11. Revisa con regularidad los mapas de dependencias con los responsables.** Las dependencias cambian a medida que evoluciona el software. Pide a los responsables de los servicios críticos que confirmen sus mapas cada trimestre, idealmente como parte de una conversación de planificación o de arquitectura. Usa la fecha de confirmación como atributo y muestra los mapas vencidos.

### Mantenlo honesto y proporcionado

**12. Retira lo que nadie usa.** Elimina las clases y los atributos de CI que ninguna pregunta necesita y que nadie consulta. Menos campos, y mejores, elevan la exactitud. Revisa el modelo cada año y anota qué se retiró y por qué. Un registro menor es menos que mantener veraz, y hace más fácil cumplir con honestidad las medidas de calidad.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Completitud de los CI | Rellenar los atributos exigidos con valores por defecto o marcadores; estrechar la lista de exigidos | Contar los valores por defecto y los marcadores; lista fija de exigidos; muestra de exactitud |
| Exactitud de los CI | Muestrear las clases fáciles; auditar después de una limpieza | Muestra aleatoria extraída de forma independiente desde ambas direcciones; método fijo |
| Cobertura de dependencias | Marcar mapas como revisados sin leerlos; cartografiar solo dependencias triviales | Tasa de acierto en la predicción de impacto; comprobar por muestreo un mapa frente al tráfico en vivo |
| Tasa de acierto en la predicción de impacto | Elegir los incidentes que salieron bien; registrar de forma estrecha los servicios afectados | Revisar todos los incidentes significativos; revisores ajenos al equipo propietario |
| Tasa de CI duplicados | Fusionar CI distintos para bajar la tasa; relajar las reglas de coincidencia | Muestrear las fusiones en busca de corrección; registrar las reglas de fusión |
| Latencia de actualización | Fechar hacia atrás los eventos de cambio; contar solo las actualizaciones automatizadas | Comparar las marcas de tiempo de eventos y de actualizaciones de los sistemas de origen; pista de auditoría |
| Tasa de uso de la CMDB | Añadir referencias a CI como formalidad; hacer obligatorio el campo con cualquier valor | Comprobar que los CI referenciados son relevantes; la pregunta de retroalimentación sobre la utilidad |

Una lectura sana es un registro menor con una exactitud medida alta, mapas de dependencias que predicen incidentes reales, latencia de actualización cercana a cero para las clases automatizadas y personas que dicen usar el registro porque les ayuda.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| CMDB exhaustiva | Visión amplia; respalda muchos casos de uso | Cara de mantener veraz; decae |
| CMDB mínima guiada por preguntas | De confianza y barata | Brechas; necesita disciplina de crecimiento |
| Población guiada por el descubrimiento | Encuentra lo desconocido; poco esfuerzo manual | Ruidosa; carece de propiedad y propósito |
| Población guiada por pipelines | Exacta; baja latencia | Limitada a lo que se construye mediante pipelines |
| Propiedad central de los registros | Coherencia | Lenta; lejos del conocimiento |
| Propiedad de los registros por los equipos | Exacta y rápida | Variación; necesita plantillas y comprobaciones |
| Modelo en forma de grafo | Natural para relaciones y consultas de impacto | Necesita habilidades y herramientas |
| Modelo de tablas relacionales | Familiar y sencillo | Torpe para consultas de dependencias profundas |

La respuesta en prosa es empezar poco a poco y guiada por preguntas, poblar desde los pipelines con el descubrimiento como segunda opinión y poner a los equipos de servicio al mando de sus registros. Una [base de datos de grafos](https://en.wikipedia.org/wiki/Graph_database) puede hacer natural preguntar por las dependencias, aunque una base de datos convencional funciona si el modelo se mantiene sencillo.

## Preguntas para debatir con tu equipo

**1. ¿Qué pregunta deseamos por última vez que la CMDB pudiera responder y pudo?**
Recuerda un incidente o cambio reciente en que alguien buscó dependencias. ¿Qué encontró y qué hizo en su lugar? El facilitador debe registrar la pregunta y si se consultó el registro. El resultado es el primer candidato al propósito del registro.

**2. Si nuestro servicio más importante fallara ahora, ¿cuánta confianza tenemos en el impacto predicho?**
Pide el impacto predicho por la CMDB y compáralo con lo que creen las personas que conocen el servicio. Anota las diferencias. Acuerden qué dependencia verificar primero y quién la comprobará.

**3. ¿Quién posee el registro de cada servicio y lo sabe?**
Enumera los servicios críticos y los responsables de sus entradas en la CMDB. Pregunta si los responsables lo saben y lo han revisado recientemente. Donde el responsable es «el equipo de la CMDB», hablen de cómo trasladar la propiedad al equipo del servicio.

**4. ¿Qué rellenamos solo para satisfacer un campo obligatorio?**
Busquen valores por defecto y marcadores. Muestran dónde el modelo pide más de lo que alguien sabe. Decidan si eliminar el campo, automatizarlo o encontrar la fuente real.

**5. ¿Dónde discrepa nuestro registro de lo que se ejecuta?**
Comparen la salida del descubrimiento con el registro de un servicio. Para cada diferencia, pregunten si debe cambiar el registro o la realidad. La conversación tiende a encontrar tanto datos obsoletos como componentes no autorizados.

**6. ¿Qué dejaríamos de registrar?**
Enumeren las clases, atributos y relaciones que nadie ha usado en seis meses. Pregunten qué pasaría si cada uno desapareciera. Acuerden retirar dos y observar si alguien lo nota.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega tienen el conocimiento de aquello de lo que dependen sus servicios y son los mejor situados para mantener veraz el registro. Deben declarar la propiedad y las dependencias junto a su código, revisarlas cuando cambia el diseño y usar el registro al planificar cambios. Una definición de terminado que incluya actualizar la descripción del servicio mantiene el registro cerca del trabajo.

### Equipos de servicio y de operaciones

Los equipos de operaciones consultan el registro durante incidentes y cambios, así que sienten primero sus errores. Deben reportar los fallos en las revisiones, ejecutar las comprobaciones de descubrimiento, mantener las reglas de coincidencia y dar retroalimentación a los responsables. Operan además las herramientas y las muestras de auditoría.

### Liderazgo y gobernanza

Los líderes quieren impacto y riesgo visibles, y a menudo patrocinan grandes programas de CMDB que decepcionan. Deben pedir evidencia de uso y de exactitud en lugar de recuentos de registros, financiar la integración de pipelines y aceptar un alcance menor bien hecho. La gobernanza debe esperar ver la tasa de acierto en la predicción de impacto y la lista de brechas.

### Clientes y usuarios

Los usuarios se benefician cuando los incidentes se diagnostican más deprisa y es menos probable que los cambios rompan servicios dependientes. Rara vez ven la CMDB, aunque ven sus efectos en comunicaciones que nombran correctamente los servicios afectados y en menos sorpresas tras los cambios. Su opinión tras los incidentes muestra si la imagen del impacto era correcta.

## En la práctica: un ejemplo de gestión de servicios

El grupo de tecnología de una aerolínea nacional opera unas 300 aplicaciones y una plataforma de reservas de clientes. Los números siguientes son ilustrativos.

La CMDB contiene 180 000 CI y la pobló una herramienta de descubrimiento hace cinco años. La jefa de gestión de servicios quiere saber si vale la pena conservarla. Pide a un pequeño equipo que la ponga a prueba. Para la calidad, auditan 150 CI muestreados y encuentran un 71 por ciento de exactitud en los cinco atributos exigidos. Para el mapa, revisan los últimos 20 incidentes significativos y comparan los servicios realmente afectados con lo que predijo la CMDB: predijo todos los servicios afectados en 6 de 20, una tasa de aciertos del 30 por ciento. Para el uso, el 12 por ciento de los incidentes del último trimestre hizo referencia a un CI, y en una breve encuesta a quienes responden, la mayoría dijo apoyarse en una página wiki aparte. Los CI duplicados son el 9 por ciento del total.

El equipo toma cuatro decisiones con los responsables de los servicios. Reduce el alcance a los 40 servicios que llevan más clientes, con cinco clases de CI y cuatro tipos de relación. Pide a cada equipo de servicio que declare responsable, dependencias y ubicación de ejecución en un breve archivo guardado con su código, que el pipeline publica en la CMDB en cada versión. Ejecuta el descubrimiento cada semana e informa de las diferencias a los responsables. Añade un campo a la revisión de incidentes, «¿era correcta la predicción de la CMDB?», y corrige cada fallo en dos semanas.

Dos trimestres después, la CMDB acotada tiene 14 000 CI, la exactitud en el conjunto muestreado es del 92 por ciento, la latencia de actualización desde la versión hasta el registro es inferior a una hora para los servicios del pipeline y la tasa de aciertos en los últimos 12 incidentes es del 75 por ciento. El uso de la CMDB en los incidentes ha subido al 58 por ciento, y quienes responden dicen que la página wiki ya no hace falta. El director de operaciones pide un plan para incorporar de golpe las otras 260 aplicaciones. La jefa de gestión de servicios propone añadir diez servicios por trimestre, después de que cada uno obtenga una tasa de aciertos por encima de un nivel acordado en un incidente de prueba, y explica que el registro amplio anterior nunca había sido de confianza. La decisión se anota, con una revisión cada trimestre.

## Agilidad, IA, automatización y analítica

### Agilidad

Deja que los equipos de servicio mantengan al día sus propios registros como parte de su trabajo, y revisa la calidad con ellos con regularidad. La precaución es que un objetivo de completitud por sí solo produce registros llenos de marcadores.

### IA

La IA puede inferir dependencias, sugerir registros y responder preguntas a partir de los datos de configuración, y los propios sistemas de IA son elementos de configuración. Haz seguimiento de la tasa de aciertos en la predicción de impacto de las dependencias sugeridas por IA frente a incidentes reales. La precaución es que una IA que adivina dependencias puede contaminar el registro con errores plausibles.

### Automatización

Alimenta los registros a partir del descubrimiento y de la infraestructura como código, y mide la latencia de actualización. La precaución es que el descubrimiento automatizado puede crear elementos duplicados u obsoletos sin reglas claras de identidad.

### Analítica

Juzga la base de datos por lo bien que responde a preguntas en cambios e incidentes reales, y reporta la tasa de uso. La decisión a la que informa es dónde mejorar los datos. La precaución es que la exactitud se mide por muestreo, así que muestra el tamaño de la muestra.

## Perspectiva sectorial

**Startup.** Hay poca necesidad de una CMDB más allá de un catálogo de servicios y del código de infraestructura. Mantén los responsables de los servicios y las dependencias en el repositorio y genera un mapa a partir de él. Añade una base de datos solo cuando las preguntas superen a los archivos.

**Pequeña empresa.** Puede bastar un diagrama sencillo y una lista de sistemas con responsables y proveedores. Actualízalo tras cada cambio significativo. Resiste la tentación de comprar una plataforma para un parque pequeño, pero mantén al día el diagrama, ya que es inestimable en una caída.

**Gran empresa.** La escala necesita un modelo, propiedad federada e integración con varias fuentes, incluidas las adquisiciones. Estandariza los identificadores y el modelo central, deja que los equipos lo amplíen dentro de unas reglas y mide el uso y la exactitud por dominio. Espera tener que mantener una función permanente de coincidencia y depuración.

**Gobierno y sector público.** Los servicios suelen descansar en sistemas de larga vida, contratistas e infraestructura compartida, y el impacto de los incidentes puede afectar al público. Cartografía explícitamente las dependencias de proveedores y de plataformas compartidas, conserva los registros para las auditorías y alinéate con la planificación de la continuidad (véase el tema 5.6, Métricas de continuidad del servicio).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de modelado y de gobernanza, la integración de pipelines y de descubrimiento, algunas herramientas y el esfuerzo de las auditorías y las correcciones. Muchas organizaciones ya poseen la plataforma. Poblar mediante pipelines es barato una vez existe la plantilla. Los grandes programas para poblarlo todo de una vez han sido caros y a menudo han fracasado.

Los retornos son incidentes más cortos, cambios más seguros y menos tiempo buscando información. Construye el caso con tu propia evidencia: el tiempo que dedican quienes responden a encontrar dependencias en un incidente típico, la proporción de incidentes en que la falta de información de dependencias retrasó el diagnóstico y los cambios que causaron un impacto inesperado. La tasa de acierto en la predicción de impacto es una medida directa de si el registro habría ayudado. Evita las afirmaciones publicadas sobre el porcentaje de incidentes causados por el cambio o el costo de las caídas salvo que puedas rastrear su fuente. Cuenta los costos de mantener un registro grande y dudoso frente al valor de uno pequeño y de confianza.

## Antipatrones y trampas

- **Poblar todo primero.** Un registro enorme y obsoleto destruye la confianza. Empieza por los servicios críticos.
- **El descubrimiento como única fuente.** No puede decirte por qué existe algo ni quién lo posee. Combínalo con declaraciones.
- **Auditar la completitud y llamarla calidad.** Completo y erróneo es peor que incompleto y correcto. Muestrea para la exactitud.
- **Equipos centrales que poseen todos los datos.** No los conocen. Da la propiedad a los equipos de servicio.
- **Campos obligatorios con valores por defecto.** Parecen completos y no llevan información. Retíralos o automatízalos.
- **Medir por el número de CI.** Más no es mejor. Mide la exactitud, la tasa de aciertos y el uso.
- **Ignorar las relaciones.** Sin dependencias, una CMDB es un inventario. Invierte en el mapa de los servicios críticos.
- **Culpar a las personas de los fallos.** Dejan de reportarlos. Trata una dependencia omitida como un hallazgo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Alcance y modelo | Lo que encontró el descubrimiento | Modelo definido; alcance amplio | Modelo guiado por preguntas; servicios críticos cartografiados | El alcance crece cuando la tasa de aciertos y el uso lo justifican | Modelo federado entre equipos y proveedores; identificadores compartidos |
| Población y calidad | Carga manual o única | Descubrimiento e importaciones programados | Los pipelines publican desde el código; descubrimiento como comprobación; auditorías por muestreo | Exactitud, latencia y duplicados medidos y con tendencias | Flujos en tiempo real con conciliación automatizada y confirmación de los responsables |
| Uso | Rara vez consultada | Usada por unos pocos equipos | Referenciada en incidentes y cambios como práctica estándar | Predicción de impacto puesta a prueba con incidentes; uso y utilidad con seguimiento | El registro informa decisiones automatizadas y mapas compartidos con proveedores |

## Lista de verificación

- [ ] Las preguntas que la CMDB debe responder están escritas.
- [ ] El alcance se limita a los servicios críticos, con una regla de crecimiento definida.
- [ ] El modelo tiene un conjunto pequeño de clases, atributos y tipos de relación.
- [ ] Cada servicio crítico tiene un responsable que ha confirmado su registro en el último trimestre.
- [ ] Los pipelines publican los cambios de CI de los servicios construidos como código.
- [ ] Los resultados del descubrimiento se comparan con el registro y se revisan las diferencias.
- [ ] Una muestra aleatoria de exactitud se audita cada trimestre en ambas direcciones.
- [ ] Las revisiones de incidentes registran si el impacto predicho era correcto.
- [ ] El uso de la CMDB en incidentes y cambios tiene seguimiento, con una pregunta sobre su utilidad.
- [ ] Las clases y atributos sin uso se retiran según un calendario.

## Prompts de IA

**Define las preguntas y el alcance.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Analiza un fallo de predicción de impacto.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Diseña un archivo de declaración para los equipos de servicio.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Planifica una auditoría trimestral de exactitud.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de calidad de la configuración.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de la CMDB lleva su vector de manipulación, su barrera de protección y su regla de evidencia independiente.

## Ideas clave

- Construye la CMDB para responder a preguntas con nombre sobre los servicios que más importan y hazla crecer a medida que crece la confianza.
- Pobla desde pipelines y código, usa el descubrimiento como segunda opinión y deja que los equipos de servicio posean sus registros.
- Pon a prueba la calidad frente a los eventos: compara el impacto predicho con lo que realmente ocurrió en los incidentes.
- Mide el uso y la utilidad, no el número de CI.
- Muestrea la exactitud a partir de evidencia independiente en ambas direcciones.
- Retira lo que nadie usa y corrige los errores en su origen.

## Referencias y lecturas complementarias

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
