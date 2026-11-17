# Informes regulatorios y gubernamentales

**El reporte obligatorio es un requisito fijo en torno al cual diseñar, así que constrúyelo a partir de los mismos registros que usas para operar el servicio, mantén separada la vista del informe de la vista del aprendizaje y protege a las personas que hacen el trabajo de objetivos que lo distorsionan.**

## Visión general y motivación

Muchas organizaciones deben reportar sobre sus servicios lo quieran o no. Los reguladores piden notificaciones de incidentes, cifras de disponibilidad y evidencia de controles. Los gobiernos exigen a los organismos que publiquen datos de rendimiento, gastos y declaraciones de accesibilidad. Los financiadores y los órganos de supervisión piden resultados frente a los compromisos. Los contratos exigen informes de servicio. En estos entornos, el reporte no es una elección de gestión interna. Es una obligación con una fecha de vencimiento, una definición y a veces una sanción.

El [sector público](https://en.wikipedia.org/wiki/Public_sector) tiene rasgos particulares. La [rendición de cuentas](https://en.wikipedia.org/wiki/Accountability) ante la ciudadanía y los órganos electos es un deber central, y se ejerce mediante la auditoría, la legislación, las [leyes de libertad de información](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) y los resultados publicados. Las prácticas de [gobierno abierto](https://en.wikipedia.org/wiki/Open_government) y de [datos abiertos](https://en.wikipedia.org/wiki/Open_data) ponen la información a disposición del escrutinio y de la reutilización. Las reglas de la [contratación pública](https://en.wikipedia.org/wiki/Public_procurement) dan forma a lo que puede comprarse y cómo, y las obligaciones de [gestión de registros](https://en.wikipedia.org/wiki/Records_management) rigen cuánto tiempo se conserva la información. La [relación calidad-precio](https://en.wikipedia.org/wiki/Value_for_money) es una prueba habitual del gasto público, y los órganos independientes realizan [auditorías de desempeño](https://en.wikipedia.org/wiki/Performance_audit) para examinarla. Los detalles difieren según el país, el nivel de gobierno y el sector, y este tema describe la práctica de medición, no los requisitos legales. Trabaja con tus colegas de jurídica, cumplimiento y registros.

Las organizaciones reguladas del sector privado, como las de finanzas, salud, energía y telecomunicaciones, comparten muchos de estos rasgos. Afrontan deberes de notificación de incidentes, reportes de resiliencia y revisiones de supervisión. El hilo común es que alguien ajeno al equipo de entrega define qué debe reportarse y para cuándo.

La entrega continua y la práctica de ITIL tienen algo que ofrecer. El objetivo ágil de colaboración continua con las partes interesadas se extiende a los órganos de supervisión, que son partes interesadas con necesidades legítimas, y las conversaciones tempranas sobre lo que exigen pueden evitar retrabajo. El hábito ágil de entregar de forma continua incrementos pequeños y funcionales conviene al reporte: los informes producidos automáticamente a partir de sistemas de registro son más exactos y baratos que los montados a mano cada trimestre. La práctica de medición y elaboración de informes de ITIL, y su gestión de niveles de servicio, dan el vocabulario para definir lo que se mide y se comparte.

Las obligaciones de reporte crean tres peligros bien conocidos.

- **Distorsión por los objetivos.** Cuando una cifra reportada conlleva una consecuencia, el trabajo se dobla hacia la cifra. La literatura del sector público sobre objetivos, incluidos los escritos de John Seddon sobre el pensamiento sistémico en el sector público y el análisis de Jerry Muller sobre la fijación con las métricas, describe muchos casos en que alcanzar el objetivo y servir al público divergieron. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con plena fuerza (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).
- **Dos juegos de números.** La definición legal de una cifra suele diferir de la que usa internamente el equipo. Si el equipo gestiona por una y reporta otra, nadie confía en ninguna. Mantén ambas visibles, concílialas y explica las diferencias.
- **El reporte como carga.** Las peticiones manuales, repetidas e incoherentes consumen a personas cualificadas. Cuanto más depende el reporte de un trabajo heroico en hojas de cálculo, más se cuelan el error y el retraso.

Este tema se apoya en las medidas de cumplimiento, riesgos y proveedores de esta parte (véase el tema 8.2, Métricas de riesgos y controles, el tema 8.3, Métricas de cumplimiento y auditoría, y el tema 8.4, Métricas de proveedores y contratos) y en los cimientos de datos de la primera parte (véase el tema 1.5, Fuentes de datos e instrumentación).

## Principios clave

- **Trata las obligaciones como insumos de diseño.** Enuméralas pronto, con definiciones, fechas de vencimiento y responsables, y diseña la recogida de datos en torno a ellas.
- **Produce los informes a partir de sistemas de registro.** Automatiza la extracción y mantén visible el linaje.
- **Separa la vista del informe de la vista del aprendizaje.** Los equipos necesitan medidas de trabajo sinceras que no estén limitadas por lo que se reporta.
- **Concilia las definiciones.** Muestra cómo se relacionan las cifras legales con las medidas propias del equipo.
- **Reporta con honestidad, incluidas las malas noticias.** Las correcciones y el contexto generan confianza.
- **Protege a las personas de los objetivos perversos.** Usa los objetivos legales con medidas compañeras y explica sus límites.
- **Haz utilizable la información publicada.** La accesibilidad, la claridad y el formato importan al público.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de las obligaciones de reporte | Proporción de obligaciones de reporte con un responsable con nombre, una definición declarada, una fuente de datos y una entrada de calendario | obligaciones con los cuatro elementos / obligaciones de reporte del ámbito | porcentaje | Registro de obligaciones | Medición y elaboración de informes; gobernanza | Acuerdo de trabajo con las partes interesadas sobre las necesidades de información | Trimestral |
| Puntualidad de los informes | Proporción de informes exigidos presentados antes de su fecha de vencimiento | informes presentados en la fecha de vencimiento o antes / informes que vencen en el periodo | porcentaje | Calendario de reportes y registros de presentación | Medición y elaboración de informes | Compromisos con las partes interesadas cumplidos | Mensual |
| Tasa de rectificaciones | Proporción de informes o cifras presentados que se corrigen después | informes o cifras corregidos tras su presentación / informes o cifras presentados | porcentaje | Registro de presentaciones y registro de correcciones | Medición y elaboración de informes; mejora continua | Defectos escapados | Trimestral |
| Cobertura de trazabilidad | Proporción de cifras reportadas que pueden rastrearse hasta un sistema de registro mediante pasos documentados | cifras con linaje documentado hasta un sistema de registro / cifras reportadas | porcentaje | Documentación de linaje, especificaciones de informes | Medición y elaboración de informes; gestión del conocimiento | Compilaciones reproducibles | Trimestral |
| Alineación de definiciones | Proporción de medidas reportadas para las que la definición legal y la definición interna están documentadas y conciliadas | medidas con conciliación documentada / medidas reportadas con una definición legal | porcentaje | Registro de métricas | Medición y elaboración de informes; gestión de niveles de servicio | Definición de terminado compartida | Trimestral |
| Esfuerzo de reporte | Horas-persona dedicadas a producir un informe recurrente | horas registradas por ciclo de informe, con la proporción que es extracción y montaje manual | horas | Estimaciones de tiempo, registros de esfuerzo | Medición y elaboración de informes; mejora continua | Costo del trabajo que no es de entrega | Por ciclo de informe |
| Conformidad de accesibilidad de lo publicado | Proporción de informes y conjuntos de datos publicados que cumplen la norma de accesibilidad exigida | elementos publicados que superan una comprobación de accesibilidad / elementos publicados | porcentaje | Resultados de pruebas de accesibilidad | Medición y elaboración de informes; gestión del conocimiento | Definición inclusiva de terminado | Trimestral |

Escribe la definición legal, la fuente y la fecha de vencimiento junto a cada medida reportada. Un informe es «puntual» cuando lo acepta el órgano receptor, no cuando se envía, si se registra la aceptación. Una rectificación cuenta toda corrección de una cifra ya presentada, sea voluntaria o exigida. El esfuerzo de reporte es una medida de tendencia de la organización y nunca una medida de individuos. La conformidad de accesibilidad se comprueba frente a la norma que se te aplica, como las Pautas de Accesibilidad para el Contenido Web.

## Recomendaciones

### Trata las obligaciones como insumos de diseño

**1. Mantén un registro de obligaciones de reporte.** Para cada una, anota el requisito, la fuente legal o contractual, qué debe reportarse, la definición, la fecha de vencimiento, el órgano receptor, el responsable interno y la fuente de datos. Revísalo cuando cambien las leyes, los contratos o los reguladores. Las obligaciones conocidas pronto pueden diseñarse, y las descubiertas tarde hay que montarlas a mano.

**2. Implica pronto al órgano de supervisión.** Pregunta a los reguladores, auditores y financiadores qué harán con los datos y qué necesitan. Algunos te ayudarán a dar forma a una definición o aceptarán datos en una forma que ya produces. La práctica ágil valora la colaboración con las partes interesadas, y los órganos de supervisión son partes interesadas. Conserva registros de estas conversaciones y preserva la independencia donde importe.

**3. Diseña desde el principio la recogida de datos para el reporte.** Al construir un servicio, incluye los eventos y campos que necesitarán los informes exigidos: marcas de tiempo de incidentes, impacto, categorías, recuentos de usuarios. Añadirlos después es costoso. Defínelos una vez y comparte la definición entre equipos, con un único responsable de la definición (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Produce los informes a partir de sistemas de registro

**4. Automatiza el pipeline desde el registro hasta el informe.** Extrae de los sistemas de incidentes, de cambios y de servicios con consultas programadas, aplica transformaciones documentadas y produce el informe con una plantilla revisada. Los informes automatizados son repetibles, más rápidos y más fáciles de auditar que los manuales. Versiona las consultas y las plantillas para poder reproducir un informe pasado.

**5. Documenta el linaje.** Para cada cifra reportada, anota de dónde procede, cómo se calcula y quién la comprueba. La cobertura de trazabilidad mide lo bien que se hace. Un auditor o un periodista que pregunte «¿de dónde sale este número?» debe recibir una respuesta clara en minutos.

**6. Revisa antes de presentar, con un lector independiente.** Haz que alguien ajeno al equipo que produjo el informe compruebe las definiciones, la aritmética y la narrativa. Las revisiones detectan errores y afirmaciones sin respaldo. Registra la revisión. Una breve aprobación de la persona responsable deja clara la propiedad.

**7. Corrige abiertamente.** Cuando se encuentre un error tras la presentación, corrígelo con prontitud, explica qué cambió y anota la causa. Una tasa de rectificaciones cercana a cero es sospechosa si los datos son complejos. Una corrección visible y rápida genera más confianza que una cifra que se deja en pie.

### Mantén separados el reporte y el aprendizaje

**8. Mantén una vista de trabajo para el equipo.** Los equipos necesitan medidas que les ayuden a mejorar, como percentiles, la antigüedad de los elementos más antiguos y compañeros de calidad. Rara vez son las mismas que las cifras legales. No restrinjas la vista de trabajo a lo que se reporta ni gestiones únicamente por la cifra reportada.

**9. Concilia las definiciones legales e internas.** Donde una medida exigida difiera de la del equipo, documenta las diferencias y muestra ambas. Por ejemplo, la cifra de disponibilidad de un regulador puede excluir el mantenimiento planificado, mientras los usuarios lo experimentan como inactividad. Muestra la conciliación en el registro de métricas y en las notas del informe. Esto protege frente al problema de los «dos juegos de números».

**10. Empareja los objetivos legales con compañeros.** Si se impone un objetivo, añade medidas que revelen la distorsión: calidad, experiencia del usuario y el trabajo que se deja fuera. Por ejemplo, empareja un objetivo de tiempo hasta la primera respuesta con una medida de la resolución y de los contactos repetidos (véase el tema 3.1, Métricas del centro de servicios). Explica en el informe cómo debe leerse la cifra.

### Publica para el público

**11. Haz utilizable la información publicada.** Publica en formatos abiertos y legibles por máquina donde la ley y la privacidad lo permitan, con descripciones, definiciones y fechas claras. Cumple las normas de accesibilidad para documentos y páginas web. Publicar datos de forma que la gente no pueda leerlos ni reutilizarlos satisface la letra y derrota el propósito. Prueba con usuarios reales, incluidos quienes usan tecnologías de apoyo (véase el tema 6.4, Experiencia de usuarios y empleados).

**12. Protege la privacidad y la seguridad en lo que publicas.** Agrega y suprime los números pequeños que podrían identificar a personas, evita publicar detalles que ayuden a los atacantes y comprueba con especialistas las reglas de divulgación. Aplica el mismo cuidado a las respuestas bajo las leyes de libertad de información. Anota las decisiones sobre redacción y sus motivos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de las obligaciones de reporte | Tratar las obligaciones de forma estrecha; enumerar al responsable sin acuerdo | Revisión del registro por cumplimiento o auditoría interna; confirmación de los responsables |
| Puntualidad de los informes | Presentar informes incompletos para cumplir la fecha; contar borradores como presentaciones | Comprobación de completitud en la presentación; contar solo los informes aceptados; tasa de rectificaciones |
| Tasa de rectificaciones | Suprimir correcciones; hacer correcciones en silencio | Registro de correcciones revisado por un lector independiente; una tasa baja se lee con la trazabilidad |
| Cobertura de trazabilidad | Documentar el linaje de forma superficial; incluir solo cifras sencillas | Muestrear el linaje reejecutando un cálculo desde la fuente |
| Alineación de definiciones | Declarar alineadas las definiciones sin conciliación; adoptar la definición legal solo en el informe | Documento de conciliación revisado; mostrar ambas cifras lado a lado |
| Esfuerzo de reporte | No registrar las horas; trasladar el trabajo a otros equipos | Comparar con la opinión del equipo; incluir a todos los colaboradores en la estimación |
| Conformidad de accesibilidad de lo publicado | Ejecutar un verificador que solo encuentra algunos problemas; publicar una versión accesible aparte que se queda atrás | Pruebas manuales con tecnologías de apoyo; comprobar la paridad entre versiones |

Una lectura sana es cada obligación con propietario, informes puntuales y exactos con correcciones visibles, cifras trazables hasta los sistemas de registro, definiciones legales e internas conciliadas, un esfuerzo de reporte decreciente e información publicada que el público puede usar.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Montaje manual de los informes | Flexible; sirve con cualquier dato | Lento, propenso a errores, dependiente de las personas |
| Reporte automatizado | Repetible, auditable, barato de ejecutar | Esfuerzo de puesta en marcha; puede afianzar una mala definición |
| Un solo conjunto de medidas para todo | Sencillo | Distorsiona el trabajo; las cifras legales rara vez encajan con las necesidades del equipo |
| Vistas separadas de reporte y de aprendizaje | Aprendizaje sincero; reporte honesto | Necesita conciliación y disciplina |
| Objetivos legales duros | Rendición de cuentas clara | Efectos perversos; manipulación |
| Objetivos con compañeros y contexto | Revela la distorsión | Más que explicar |
| Implicación temprana de los reguladores | Menos sorpresas | Tiempo; límites que mantener |
| Solo una relación a distancia | Independencia clara | Retroalimentación tardía; retrabajo |

La respuesta en prosa es automatizar los informes a partir de sistemas de registro, mantener una vista de trabajo del equipo separada de la vista del informe, conciliar abiertamente las definiciones e implicar pronto a los órganos de supervisión preservando su independencia.

## Preguntas para debatir con tu equipo

**1. ¿Qué informes debemos, a quién y para cuándo, y quién posee cada uno?**
Compilen la lista en la sala y compárenla con el registro. A menudo aparecen brechas: informes debidos por contratos, a financiadores o bajo reglas que pocos conocen. El facilitador debe registrar los elementos nuevos y asignar responsables.

**2. ¿Qué cifra reportada gestionaríamos de forma distinta si no se reportara?**
Elige una medida legal o contractual y pregunta qué haría el equipo si nadie la midiera. La respuesta revela dónde divergen la cifra y el propósito. Hablen de qué medida compañera mostraría la diferencia.

**3. ¿Podemos reproducir hoy desde la fuente el informe del trimestre pasado?**
Prueben con un informe. Anoten lo que es manual, no documentado o perdido. Acuerden el primer paso para automatizar o documentar y quién lo dará.

**4. ¿Cómo gestionamos un error hallado tras la presentación?**
Revisen el proceso y el último ejemplo. ¿Fue rápida y abierta la corrección? ¿Alguien tuvo miedo de plantearlo? Acuerden qué hace normal la corrección.

**5. ¿Qué experimentaría una persona que usa tecnología de apoyo al leer nuestro informe publicado?**
Prueben juntos un elemento publicado o revisen una comprobación de accesibilidad reciente. Pregunten quién posee la accesibilidad de los documentos publicados. Acuerden una corrección y un proceso para evitar que se repita.

**6. ¿Qué hace realmente el regulador o el órgano de supervisión con nuestros datos?**
Muchos equipos no lo saben. Planifiquen una conversación para averiguarlo y para preguntar si otra forma les serviría igual de bien. El facilitador debe anotar los límites de independencia.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega construyen los eventos y campos de los que dependen los informes, y sienten la presión de los objetivos legales. Deben incluir las necesidades de reporte en la definición de terminado, mantener una vista de trabajo sincera y señalar cuándo un objetivo distorsiona el trabajo. Las conversaciones tempranas con quienes reportan ayudan a evitar el retrabajo.

### Equipos de servicio y de operaciones

Los equipos de operaciones generan la mayor parte de los datos subyacentes y a menudo preparan los informes. Deben documentar el linaje, automatizar la extracción y mantener un registro de correcciones. Están bien situados para explicar cómo debe leerse una cifra y para avisar cuando engaña.

### Liderazgo y gobernanza

Los líderes responden de la exactitud y la honestidad de lo que se reporta. Deben pedir trazabilidad y conciliación, resistirse a convertir las cifras legales en objetivos individuales, proteger a las personas que plantean errores y respaldar la relación con los órganos de supervisión. La gobernanza debe revisar el registro de obligaciones y el historial de rectificaciones.

### Clientes y usuarios

El público y los clientes se apoyan en la información publicada para pedir cuentas a los servicios. Necesitan datos que puedan encontrar, leer y reutilizar, en formatos accesibles y con explicaciones claras de lo que significan. Merecen además un aviso inmediato cuando un incidente les afecta, como pueden exigir las normas.

## En la práctica: un ejemplo de gestión de servicios

Un organismo nacional presta servicios de licencias en línea utilizados por varios millones de personas al año. Debe reportar cada mes a un ministerio, publicar datos anuales de rendimiento y notificar a su regulador los incidentes graves del servicio en un plazo fijo. Los números siguientes son ilustrativos.

Una revisión interna descubre que el organismo debe 31 informes de distintos tipos y que solo 22 figuran en el registro de obligaciones con un responsable con nombre y una definición, una cobertura del 71 por ciento. Las cifras mensuales se montan a mano en unas 60 horas, sobre todo extrayendo de tres sistemas a una hoja de cálculo. La trazabilidad es mala: para la cifra principal, la disponibilidad, nadie puede reproducir el número del año pasado. La definición de disponibilidad del ministerio excluye el mantenimiento planificado, y la vista de trabajo del propio organismo lo cuenta, lo que explica que los usuarios y el ministerio vean imágenes distintas. El organismo cumplió cada mes su objetivo de tiempo hasta la primera respuesta, y el centro de servicios ha empezado a acusar recibo automáticamente de las solicitudes para alcanzarlo, mientras el tiempo hasta la resolución ha subido. Dos informes publicados no superaron una prueba de accesibilidad con un lector de pantalla.

El jefe de rendimiento del servicio del organismo acuerda cambios con el ministerio y con los equipos de entrega y de operaciones. El registro de obligaciones queda completo, con responsables, definiciones y fechas. Las cifras mensuales proceden de consultas programadas a los sistemas de incidentes y de monitorización, con una transformación documentada y una plantilla revisada, lo que recorta el esfuerzo a unas 8 horas. Una nota de conciliación expone las definiciones legal e interna de disponibilidad, con ambas cifras mostradas en el informe. El objetivo de primera respuesta se empareja con el tiempo hasta la resolución y los contactos repetidos en la vista de trabajo, y el ministerio acepta ver las medidas compañeras. El organismo corrige además una cifra de disponibilidad del trimestre anterior, explica la causa y publica la corrección. Los informes publicados se producen con una plantilla accesible, y se añade una prueba con lector de pantalla a la lista de verificación de versiones.

Un año después, la cobertura de obligaciones es del 100 por ciento, los informes son puntuales, la tasa de rectificaciones es baja con cada corrección explicada, la trazabilidad cubre todas las cifras principales y el esfuerzo de reporte ha bajado aproximadamente un 85 por ciento. El gabinete del ministro pide un nuevo objetivo de disponibilidad del 99,95 por ciento, con los líderes del organismo como responsables. El jefe de rendimiento del servicio explica la diferencia entre la cifra legal y la experimentada por los usuarios y propone un objetivo con medidas compañeras y una fecha de revisión. La decisión se anota, y el ministerio acuerda una revisión conjunta de la definición antes del próximo año de reporte.

## Agilidad, IA, automatización y analítica

### Agilidad

Diseña para los requisitos fijos de reporte y mantén separada la vista del informe de la vista del aprendizaje. La precaución es que un objetivo de reporte puede distorsionar el trabajo que describe.

### IA

Donde la IA respalda procesos regulados, el informe puede tener que mostrar cómo se tomaron las decisiones y quién respondió de ellas. Comprueba los requisitos con tu asesor jurídico y conserva registros del uso de la IA. La precaución es que la salida de la IA usada en una presentación necesita verificación humana.

### Automatización

Construye los informes a partir de los mismos registros que se usan para operar el servicio y automatiza las comprobaciones que se ejecutan antes de la presentación. Mide el proceso por las rectificaciones. La precaución es que la automatización puede propagar un error a muchos informes.

### Analítica

Reporta con las definiciones usadas y la fecha de los datos. La decisión a la que informa es qué debe reportarse y de dónde proceden los datos. La precaución es que las definiciones difieren según el régimen, así que evita suponer que una es universal.

## Perspectiva sectorial

**Startup.** Los deberes de reporte pueden llegar con un primer cliente empresarial o con un regulador. Empieza con una lista breve de obligaciones, produce los informes a partir de tus propios sistemas y evita construir un proceso de reporte aparte. Ten cuidado al prometer niveles de servicio en los contratos.

**Pequeña empresa.** Las obligaciones suelen ser contractuales o ligadas a un único regulador. Mantén un calendario, usa plantillas y documenta cómo se hacen los números. Un informe pequeño y exacto vale más que uno grande y apresurado.

**Gran empresa.** Muchas obligaciones entre regiones y regímenes piden un registro central, definiciones comunes y herramientas de extracción compartidas. Cuidado con las peticiones duplicadas a los mismos equipos. Usa una única fuente de verdad para los datos de incidentes y de servicios, con vistas para cada régimen.

**Gobierno y sector público.** Este es el terreno propio del tema. Planifica para la legislación, las peticiones ministeriales, la auditoría, las solicitudes de libertad de información y el escrutinio público. Publica los datos abiertamente donde la ley lo permita, cumple los deberes de accesibilidad, conserva los registros durante el periodo exigido y documenta las decisiones. Resiste la tentación de convertir las cifras legales en objetivos de rendimiento individual y considera los efectos de los objetivos sobre la ciudadanía y el personal.

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de construir y mantener el registro de obligaciones, la ingeniería de la extracción automatizada y de las plantillas, el tiempo de revisión y las pruebas de accesibilidad. En comparación con el montaje manual, la automatización traslada el esfuerzo del trabajo repetido a una construcción única y un mantenimiento ligero.

Los retornos son menos errores y correcciones, menos tiempo del personal dedicado al montaje, respuestas más rápidas a las peticiones de supervisión y mayor confianza de los reguladores y del público. Construye el caso con tus propios datos: las horas por informe antes y después, el número y el efecto de las rectificaciones, el tiempo para responder a una pregunta de supervisión y el costo de cualquier sanción o hallazgo crítico de auditoría evitado. Evita citar estimaciones de la carga de cumplimiento salvo que puedas rastrear la fuente y el método. Incluye el costo de la relación continua con los órganos de supervisión y compáralo con el costo de las sorpresas (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Gestionar solo por la cifra legal.** Distorsiona el trabajo. Mantén una vista de trabajo con medidas compañeras.
- **Dos juegos de números sin conciliar.** La confianza se derrumba. Documenta y muestra las diferencias.
- **Hojas de cálculo hechas a mano como sistema.** Se rompen y dependen de las personas. Automatiza a partir de sistemas de registro.
- **Presentar informes incompletos para cumplir una fecha.** Cambia un fracaso por otro. Acuerda prórrogas o presenta con salvedades claras.
- **Correcciones en silencio.** Socavan la confianza. Corrige abiertamente y explica.
- **Objetivos individuales a partir de cifras legales.** Premian la manipulación y castigan al personal honesto. Mantén las cifras a nivel de servicio.
- **Publicaciones ilegibles.** El cumplimiento de forma derrota el propósito. Publica datos utilizables y accesibles.
- **Ignorar la privacidad al publicar.** Los números pequeños pueden identificar a personas. Agrega y revisa la divulgación.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Obligaciones y definiciones | Conocidas por unas pocas personas | Lista parcial | Registro con responsables, definiciones y fechas; definiciones legales e internas conciliadas | Registro revisado frente a los cambios de la ley; conciliación mantenida | Definiciones codesarrolladas con los órganos de supervisión; compartidas entre organismos |
| Producción y calidad | Montaje manual | Plantillas, algunos guiones | Automatizado desde sistemas de registro con linaje y revisión independiente | Rectificaciones analizadas; esfuerzo y puntualidad gestionados | Informes producidos de forma continua; los órganos de supervisión acceden directamente a los datos |
| Uso y publicación | Reportar para satisfacer la petición | Publicado a petición | Vista de trabajo separada de la vista del informe; publicación accesible y reutilizable | Medidas compañeras con objetivos; pruebas de usuario de las publicaciones | Datos abiertos y enlazados con participación pública en el diseño |

## Lista de verificación

- [ ] Un registro enumera cada obligación de reporte con responsable, definición, fuente, fecha de vencimiento y órgano receptor.
- [ ] Los campos y eventos exigidos se integran en los servicios desde el principio.
- [ ] Los informes se producen a partir de sistemas de registro mediante consultas y plantillas versionadas.
- [ ] Cada cifra reportada tiene un linaje documentado y un revisor con nombre.
- [ ] Un lector independiente revisa los informes antes de la presentación.
- [ ] Las definiciones legales e internas están conciliadas y se muestran ambas.
- [ ] Las correcciones se registran, se explican y se publican con prontitud.
- [ ] Los objetivos legales tienen medidas compañeras y contexto en el informe.
- [ ] Los informes y conjuntos de datos publicados cumplen la norma de accesibilidad aplicable y la revisión de privacidad.
- [ ] Una conversación con cada órgano de supervisión importante sobre sus necesidades está en el calendario.

## Prompts de IA

**Construye un registro de obligaciones.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Concilia dos definiciones.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Planifica la automatización de un informe.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Revisa la usabilidad de un informe publicado.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de reporte legal o regulado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de reporte muestra su definición, su conciliación, su vector de manipulación y su barrera de protección.

## Ideas clave

- Trata las obligaciones de reporte como insumos de diseño, enumeradas con responsables, definiciones y fechas de vencimiento.
- Produce los informes a partir de sistemas de registro con linaje y revisión independiente.
- Mantén una vista de trabajo sincera separada de la vista del informe y concilia abiertamente las definiciones.
- Empareja los objetivos legales con medidas compañeras y no los conviertas nunca en objetivos individuales.
- Corrige los errores abierta y rápidamente.
- Publica información que el público pueda encontrar, leer y reutilizar, con la privacidad protegida.

## Referencias y lecturas complementarias

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
