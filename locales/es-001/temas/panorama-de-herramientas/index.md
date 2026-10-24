# Panorama de herramientas

**Elige las herramientas para las preguntas que necesitas responder y los datos en que puedes confiar, mantén portables los datos y gasta menos en plataformas que en los hábitos que hacen que los números merezcan leerse.**

## Visión general y motivación

Las herramientas son donde los programas de métricas fallan con más frecuencia, en dos direcciones opuestas. Algunas organizaciones compran primero una gran plataforma de analítica y descubren después que no tienen definiciones acordadas, ni datos limpios, ni audiencia. Otras construyen un montón de scripts y hojas de cálculo que entiende una sola persona, y el programa termina cuando esa persona se va. Ambas empiezan por la herramienta e ignoran las preguntas a las que debía responder.

El panorama está abarrotado y cambia deprisa, así que este tema es deliberadamente neutral respecto de los proveedores. Describe los tipos de herramientas, los flujos de datos entre ellas, las compensaciones entre construir y comprar y los criterios para elegir. No nombra productos, porque los nombres de producto caducan pronto y un libro es una mala guía para las funciones y los precios actuales. Los principios de medición no cambian con el proveedor: saber qué se mide, de dónde vienen los datos, quién los posee y cómo se leerán.

La mayor parte de los datos que necesita un programa de métricas de servicio ya existe en sistemas de registro. Las herramientas de [gestión de servicios de TI](https://en.wikipedia.org/wiki/IT_service_management) contienen incidentes, solicitudes, problemas, cambios y registros de configuración. Los sistemas de control de código fuente, de construcción, de pruebas y de despliegue contienen el historial del trabajo de ingeniería. Los sistemas de monitorización y de [observabilidad](https://en.wikipedia.org/wiki/Observability_(software)) contienen datos de disponibilidad, latencia y errores. Las herramientas de encuestas, los sistemas financieros, los sistemas de recursos humanos y los repositorios de contratos contienen el resto. Un programa de métricas une estas fuentes sin perturbar el trabajo que se hace en ellas (véase el tema 1.5, Fuentes de datos e instrumentación).

El movimiento de datos desde las fuentes hasta un lugar donde puedan analizarse es un [pipeline de datos](https://en.wikipedia.org/wiki/Data_pipeline), y el patrón clásico es [extraer, transformar, cargar](https://en.wikipedia.org/wiki/Extract,_transform,_load) (ETL): leer de las fuentes, remodelar y limpiar, y escribir en un almacén. El almacén puede ser un [almacén de datos](https://en.wikipedia.org/wiki/Data_warehouse), un repositorio integrado de datos de varios sistemas organizado para el análisis. Los programas llegan a estos sistemas mediante una [interfaz de programación de aplicaciones](https://en.wikipedia.org/wiki/Application_programming_interface), que es la forma en que un software pide datos a otro de una manera definida. La calidad de lo que fluye determina la calidad de cada gráfico. La [calidad de datos](https://en.wikipedia.org/wiki/Data_quality) abarca la exactitud, la completitud, la coherencia y la puntualidad, y la disciplina que la sostiene es el [gobierno de datos](https://en.wikipedia.org/wiki/Data_governance).

El lado financiero merece cuidado. El [costo total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership) de una herramienta incluye licencias, infraestructura, integración, formación, administración y el costo de abandonarla. El [bloqueo por el proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in) es la situación en que cambiar de proveedor es tan costoso que el cliente queda de hecho atado. Los programas de métricas están especialmente expuestos, porque las definiciones, el historial y los paneles se acumulan dentro de una herramienta y extraerlos después es difícil.

Los fines ágiles dan forma al enfoque. La entrega continua se aplica al programa: monta el camino funcional más delgado desde una fuente hasta una vista para un equipo, aprende de su uso y amplía. La implicación continua de las partes interesadas significa que las personas que usarán los números participan en la elección de las herramientas. La mejora continua y la evolución permanente significan que se espera que las herramientas cambien, así que la portabilidad importa más que la perfección. Un ritmo sostenible significa que el programa no se convierte en un proyecto de ingeniería de datos que prive de recursos al trabajo que mide. Y las personas motivadas trabajan mejor con herramientas que ayudaron a elegir y que entienden que con herramientas impuestas desde arriba, en particular las que parecen vigilancia (véase el tema 11.3, Implantar métricas sin sembrar miedo).

El tema se apoya en la guía de diseño de paneles (véase el tema 11.1, Diseño de un panel de métricas de servicio) y en los temas de gobernanza de la Parte 1.

## Principios clave

- **Las preguntas antes que las herramientas.** Escribe primero las preguntas y las medidas y mira después qué herramientas necesitan.
- **Usa los sistemas de registro.** Toma los datos de donde ocurre el trabajo y evita pedir a la gente que los introduzca dos veces.
- **Mantén las definiciones fuera de la herramienta.** Conserva las definiciones de las métricas en una forma llana y portable que sobreviva a un cambio de plataforma.
- **Prefiere datos portables.** Guarda los datos en formatos abiertos, con interfaces documentadas, y conserva una salida.
- **Empieza delgado y crece.** Una fuente, una vista, un equipo, y luego amplía.
- **Cuenta el costo completo.** Las licencias son una fracción del costo de integración, limpieza de datos y mantenimiento.
- **Protege a las personas.** Las herramientas deben agregar a nivel de equipos y servicios, hacer cumplir las reglas de acceso y dificultar la vigilancia.
- **Trata el pipeline como un servicio.** Necesita un responsable, monitorización, pruebas y una forma de gestionar el fallo.

## Definiciones de métricas

Las medidas siguientes describen la salud de las herramientas de métricas y de su suministro de datos. Son para el equipo del programa, para mantener honesta la infraestructura, y no deben usarse para valorar a las personas.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de fuentes | Proporción de los sistemas de registro necesarios para las medidas acordadas que alimentan automáticamente el almacén de métricas | fuentes conectadas y probadas / fuentes necesarias para las medidas acordadas | porcentaje | Inventario de fuentes; configuración del pipeline | Gestión de la información y la tecnología; gestión de la configuración de servicios | Entrega continua del pipeline | Trimestral |
| Fiabilidad del pipeline | Proporción de cargas de datos programadas que se completan a tiempo con las comprobaciones superadas | cargas a tiempo con comprobaciones superadas / cargas programadas | porcentaje | Registros del pipeline y resultados de pruebas | Monitorización y gestión de eventos | Pruebas automatizadas y retroalimentación rápida | Semanal |
| Tiempo hasta una medida nueva | Tiempo transcurrido desde una petición aprobada de una medida nueva hasta su disponibilidad con una ficha de definición | días desde la aprobación hasta la publicación, mediana y percentil 85 | días | Registros de peticiones y de publicaciones | Gestión de solicitudes de servicio; habilitación de cambios | Incrementos pequeños de valor | Trimestral |
| Tasa de conciliación | Proporción de cifras clave que coinciden entre el almacén de métricas y el sistema de origen en una comprobación muestreada | cifras que coinciden dentro de la tolerancia / cifras comprobadas | porcentaje | Comprobaciones de conciliación | Gestión de la información y la tecnología | Retroalimentación fiable | Mensual |
| Proporción de esfuerzo manual | Proporción del esfuerzo en informes recurrentes dedicada a la recogida y la limpieza manuales | horas en pasos manuales / horas totales en informes recurrentes | porcentaje | Estimaciones de tiempo; encuesta al equipo | Mejora continua | Eliminar el trabajo repetitivo | Trimestral |
| Preparación para la salida | Si las definiciones, el historial y los paneles pueden exportarse en una forma documentada y utilizable | exportaciones probadas y completas / pruebas de exportación planificadas | porcentaje | Registros de pruebas de exportación | Gestión de proveedores; gestión de la continuidad del servicio | Elecciones sostenibles | Anual |
| Costo de herramientas por equipo atendido | Costo anual completo de las herramientas del programa dividido por los equipos a los que sirve | (licencias + infraestructura + esfuerzo de mantenimiento) / equipos atendidos | moneda por equipo | Registros financieros y de esfuerzo | Gestión financiera de servicios | Ritmo sostenible | Anual |

Cuenta las fuentes por lo que necesitan las medidas acordadas y no por lo que existe, para que la cobertura no se eleve conectando sistemas irrelevantes. La conciliación requiere elegir de antemano una muestra y una tolerancia. El costo de herramientas por equipo atendido es una cifra descriptiva usada para comparar opciones, no un objetivo que empujar a la baja. Incluye el esfuerzo de las personas que mantienen el pipeline.

## Recomendaciones

### Decide lo que necesitas

**1. Escribe los requisitos como preguntas y medidas.** Enumera las medidas que el programa ha acordado publicar (véase el tema 11.1, Diseño de un panel de métricas de servicio), las fuentes que necesita cada una, cuán frescas deben ser, quién puede verlas y cuánto tiempo debe conservarse el historial. Distingue lo imprescindible de las preferencias. Un documento breve de dos páginas es mejor que una larga solicitud de propuestas.

**2. Haz inventario de lo que ya posees.** Muchas organizaciones tienen funciones de analítica en sus herramientas de gestión de servicios, de ingeniería y de monitorización que no se usan. Muchas tienen hojas de cálculo, scripts e informes que ya responden a parte de la necesidad. Empieza por ver qué pueden hacer. La herramienta más barata es la que ya se paga y ya se entiende.

**3. Haz balance de los datos antes de la herramienta.** Para cada fuente, comprueba si los datos están completos, se introducen de forma coherente y son accesibles mediante una interfaz. Una herramienta no puede arreglar categorías de incidentes que nadie usa, registros de cambios creados después del hecho ni marcas de tiempo que se sobrescriben. Parte del trabajo inicial más valioso es corregir la captura de datos en el origen (véase el tema 7.4, Métricas de calidad de la configuración y la CMDB).

### Construye, compra o combina

**4. Compara construir y comprar por costo completo y ajuste.** Comprar una plataforma de analítica o un producto empaquetado de analítica de ingeniería trae conectores, gráficos y soporte ya hechos, al precio de las licencias, un modelo fijo del mundo y la dependencia. Construir un pipeline y vistas trae ajuste y control, al precio del tiempo de ingeniería y del mantenimiento. La mayoría de las organizaciones acaban combinando: usan los informes incorporados donde son suficientemente buenos, una herramienta de análisis general para las vistas y construyen conectores delgados donde nada más encaja.

**5. Prueba un prototipo con datos reales.** Antes de comprometerte, ejecuta una prueba de duración limitada con dos o tres de tus propias medidas, con datos reales y usuarios reales. Comprueba cuánto tardaron las conexiones, lo bien que la herramienta gestionó tus definiciones, si pudo mostrar distribuciones y percentiles y cómo controló el acceso. Las demostraciones comerciales usan datos limpios, y los tuyos no lo son.

**6. Planifica la salida antes de entrar.** Pregunta cómo pueden exportarse las definiciones, el historial y los paneles, y pruébalo. Prefiere herramientas con interfaces abiertas y formatos estándar y conserva tu propia copia de las definiciones de las métricas y de los datos limpios. El costo de irse es parte del costo de quedarse, y una salida creíble mejora tu posición negociadora (véase el tema 8.4, Métricas de proveedores y contratos).

### Elige con criterios claros

**7. Usa criterios de selección neutrales respecto de los proveedores.** Los criterios útiles incluyen los siguientes. ¿Tienen las fuentes de datos que necesitas conectores mantenidos? ¿Pueden escribirse, versionarse y revisarse las definiciones? ¿Puede la herramienta mostrar distribuciones, percentiles y tendencias además de promedios y recuentos? ¿Agrega a equipos y servicios y te permite restringir las vistas a nivel individual? ¿Admite acceso basado en roles y auditoría? ¿Se pueden exportar los datos en formatos abiertos? ¿Cómo gestiona el proveedor los cambios, las caídas y los incidentes de seguridad? ¿Cuánto cuesta a la escala que esperas dentro de tres años?

**8. Desconfía de las puntuaciones incorporadas.** Algunas herramientas ofrecen de serie puntuaciones compuestas, clasificaciones de personas o índices de «productividad». Son fáciles de adoptar y difíciles de defender (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Comprueba si esas funciones pueden desactivarse y fija la política antes de activar nada.

**9. Implica a las personas que lo usarán.** Pide a los equipos que prueben con sus datos las opciones preseleccionadas. Sus preguntas expondrán límites que un documento de requisitos no mostró. Incluye pronto a seguridad, privacidad, finanzas y contratación (véase el tema 8.1, Métricas de incidentes de seguridad y vulnerabilidades).

### Ejecuta el pipeline como un servicio

**10. Automatiza, prueba y monitoriza el pipeline.** Trata las cargas de datos como cualquier otro servicio de producción. Ejecuta comprobaciones automatizadas de recuentos, rangos, duplicados y frescura. Alerta ante el fallo y muestra el estado de la calidad de los datos en el panel. Versiona la lógica de transformación y revisa sus cambios como código (véase el tema 5.5, Métricas de monitorización y calidad de las alertas).

**11. Mantén un catálogo de definiciones.** Conserva un catálogo compartido con la definición, la fórmula, la fuente, el responsable y los límites de cada medida. Puede ser un repositorio de archivos de texto llano, una herramienta de catálogo de datos o un wiki. Lo que importa es que sea la fuente de la verdad sobre el significado y que los paneles lean de él o enlacen a él (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**12. Revisa las herramientas cada año.** Cada año, comprueba lo que cuestan las herramientas, qué partes usa el programa, dónde queda esfuerzo manual y qué opciones más nuevas existen. Retira lo que nadie usa. Reconsidera el equilibrio entre construir y comprar a medida que madura el programa. Planifica el cambio como parte normal del trabajo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de fuentes | Conectar fuentes fáciles o irrelevantes; contar una conexión que no lleva datos utilizables | Contar según las medidas acordadas; comprobar la completitud de los datos por fuente |
| Fiabilidad del pipeline | Aflojar las comprobaciones para que las cargas siempre pasen; programar menos cargas | Revisar la fortaleza de las comprobaciones; seguimiento de la conciliación y de los recuentos de filas de la fuente |
| Tiempo hasta una medida nueva | Publicar sin definiciones ni pruebas; estrechar lo que cuenta como medida nueva | Exigir la ficha de definición y una comprobación de conciliación para darla por completa |
| Tasa de conciliación | Elegir cifras fáciles de comprobar; ampliar la tolerancia después de una discrepancia | Elegir las muestras antes de la comprobación; fijar la tolerancia de antemano; incluir cifras difíciles |
| Proporción de esfuerzo manual | Infravalorar el trabajo manual; esconder el esfuerzo en otros presupuestos | Preguntar a las personas que hacen el trabajo; comparar con el tiempo gastado al final de cada ciclo de reporte |
| Preparación para la salida | Probar una exportación parcial; contar un plan documentado como preparación | Ejecutar una restauración completa en otra herramienta sobre una muestra; verificar definiciones e historial |
| Costo de herramientas por equipo atendido | Excluir el esfuerzo de mantenimiento; añadir equipos sobre el papel | Incluir el tiempo del personal; contar los equipos que usan activamente sus vistas |

Una lectura sana muestra datos que llegan a tiempo y concilian con el origen, medidas nuevas que se publican con definiciones, un esfuerzo manual a la baja y una salida que se ha probado al menos una vez.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Informes incorporados de cada herramienta | Barato; ya está ahí; comprendido | Silos; definiciones incoherentes entre herramientas |
| Una suite única de un proveedor | Integrada; un solo contrato | Bloqueo; se ajusta al modelo del proveedor, no al tuyo |
| Producto empaquetado de analítica de ingeniería | Inicio rápido; conectores listos | Modelo fijo; riesgo de puntuación a nivel individual; costo a escala |
| Herramienta general de análisis y visualización | Flexible; hay muchas habilidades disponibles | Necesita un suministro de datos y destreza de diseño |
| Almacén con una capa de transformación | Fuerte control; uniones entre fuentes | Esfuerzo de ingeniería; necesita un responsable |
| Hojas de cálculo y scripts | Rápidos de empezar; sin licencia | Frágiles; dependen de individuos; difíciles de auditar |
| Pila de código abierto | Control; sin costo de licencia | Esfuerzo de mantenimiento; el soporte depende de ti |
| Métricas recogidas a mano | Funcionan sin herramientas | Lentas; propensas a errores; difíciles de sostener |

La respuesta en prosa es empezar con lo que ya tienes, añadir la conexión más delgada que responda a preguntas reales, mantener portables las definiciones y los datos y pasar a herramientas más pesadas solo cuando las más ligeras limiten demostrablemente las decisiones.

## Preguntas para debatir con tu equipo

**1. ¿Qué números producimos a mano cada mes y qué haría falta para dejar de hacerlo?**
Enumeren los informes manuales y las horas que llevan. Encuentren la fuente de cada uno y si tiene una interfaz. El facilitador debe preguntar qué informes podrían simplemente abandonarse. Acuerden uno que automatizar y uno que retirar.

**2. Si nuestra herramienta de reportes actual desapareciera mañana, ¿qué perderíamos?**
Nombren las definiciones, el historial y los paneles que existen solo dentro de ella. Comprueben cuáles son exportables. Acuerden dónde guardar una copia.

**3. ¿En qué datos de nuestros sistemas confiamos menos y por qué?**
Miren los hábitos de entrada, los valores por defecto y los campos sobrescritos. Estimen hasta qué punto cada distorsión afecta a las medidas que publicamos. Acuerden qué corrección del origen añadiría más confianza con el menor esfuerzo.

**4. ¿Qué deja ver la herramienta a la gente que no querríamos que viera?**
Comprueben las vistas a nivel individual, los registros de actividad y las clasificaciones. Decidan qué restringir o desactivar y escriban la regla antes de que nadie use la función.

**5. ¿Cuánto tardamos en añadir una medida nueva y qué nos frena?**
Rastreen una petición reciente desde la aprobación hasta la disponibilidad. Marquen las esperas. Acuerden qué quitar, como aprobaciones, definiciones que faltan o limpieza manual.

**6. ¿Cuál es el costo completo de esta herramienta para un equipo durante un año?**
Sumen licencias, infraestructura, integración, formación y el tiempo de las personas que la mantienen. Comparen con las decisiones que mejoró. Hablen de qué dejaríamos de pagar.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos quieren datos que vengan del trabajo sin entrada adicional y vistas que respondan a sus preguntas. Deben ayudar a elegir y probar las herramientas, poseer las definiciones de sus propias medidas y rechazar las funciones que clasifican a individuos. Su tiempo es el insumo más escaso, y se resistirán a las herramientas que les pidan registrar el trabajo dos veces.

### Equipos de servicio y de operaciones

Los equipos de operaciones gestionan las fuentes y a menudo el pipeline. Deben tratar el pipeline como un servicio con monitorización y pruebas, mantener fiables los campos de datos de origen y señalar los cambios en los sistemas de registro que romperán los conectores. Son los primeros en ver cuándo un número es erróneo.

### Liderazgo y gobernanza

Los líderes financian el programa y fijan las expectativas. Deben pedir el costo total, no el precio de la licencia, exigir portabilidad y una salida, resistirse a comprar una plataforma para resolver un problema de definiciones e insistir en las reglas de privacidad y de acceso. Deben aceptar un comienzo modesto y juzgarlo por las decisiones que mejora.

### Clientes y usuarios

Los clientes y los usuarios rara vez ven las herramientas, y viven con sus consecuencias: los datos sobre ellos se almacenan, se combinan y se analizan. Merecen reglas claras sobre qué se recoge, cuánto tiempo se conserva, quién lo ve y cómo se protege. Donde las medidas se nutren de su retroalimentación, las herramientas deben respetar el consentimiento y el anonimato.

## En la práctica: un ejemplo de gestión de servicios

Una empresa regional de logística tiene una herramienta de gestión de servicios, un sistema de control de código fuente y de despliegue, una plataforma de monitorización y una herramienta de encuestas, y cada una produce sus propios informes. El jefe de gestión de servicios quiere una sola vista de la salud del servicio para 12 equipos. Un proveedor ofrece una plataforma de analítica todo en uno con un contrato de tres años. Las cifras siguientes son ilustrativas.

El jefe de gestión de servicios escribe primero las preguntas y las 14 medidas que los equipos y los líderes acordaron en las sesiones de paneles. Hace inventario de lo que existe: la herramienta de gestión de servicios puede exportar datos de incidentes y de cambios mediante su interfaz, el sistema de despliegue proporciona marcas de tiempo de despliegue y la plataforma de monitorización reporta la disponibilidad frente a los objetivos. Pide a un pequeño grupo de representantes de los equipos que prueben dos opciones con tres medidas y datos reales: la plataforma del proveedor y una combinación de una herramienta general de visualización con un pequeño almacén de datos y conectores delgados.

La prueba revela diferencias. La plataforma se conectó a todas las fuentes en dos días, pero calculaba el plazo de entrega como una media y no podía mostrar un percentil alto, tenía una «puntuación de productividad del equipo» incorporada que no podía desactivarse y la exportación de las definiciones de los paneles producía un archivo que ninguna otra herramienta podía leer. La combinación tardó 11 días en conectarse, pero mostraba medianas y percentiles, conservaba las definiciones como texto llano en un repositorio y restringía los campos a nivel individual en el almacén de datos. El grupo descubre además que el 30 por ciento de los registros de cambios se creó después del despliegue, de modo que el plazo de entrega era erróneo con independencia de la herramienta que lo leyera. Corregir el hábito de entrada en el origen se convierte en el primer trabajo.

La empresa elige la combinación. La cobertura de fuentes sube de 3 de 8 fuentes necesarias a 7 de 8 en dos trimestres. La fiabilidad del pipeline empieza en el 71 por ciento de cargas a tiempo con comprobaciones superadas y llega al 96 por ciento después de que el equipo añade pruebas y alertas de fallo. El tiempo hasta una medida nueva baja de una mediana de 31 días a 9. El esfuerzo manual del informe mensual baja de unas 40 horas a 6. Un director pregunta si la puntuación de productividad de la plataforma del proveedor podría añadirse para dar una clasificación única de los equipos. El jefe de gestión de servicios explica el análisis del tema 1.2, muestra lo que ocurrió cuando se usó una puntuación similar en otro lugar de la empresa y propone la vista equilibrada actual. La decisión se anota, y la función de puntuación se desactiva en cualquier herramienta que la tenga.

## Agilidad, IA, automatización y analítica

### Agilidad

Elige las herramientas en pequeños experimentos con un equipo real y una pregunta real, y conserva la capacidad de cambiar de rumbo. La precaución es que una gran decisión de plataforma tomada pronto fija las definiciones antes de que el equipo haya aprendido lo que necesita.

### IA

Muchas herramientas de analítica y de gestión de servicios incluyen ahora funciones de IA. Pregunta qué hace la IA, con qué datos, bajo qué términos, cómo se comprueba su salida y cómo desactivarla, y mide las funciones de IA como cualquier otro uso (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA). La precaución es que las funciones de IA activadas por defecto pueden cambiar los informes en silencio, así que pregunta a los proveedores por cada versión.

### Automatización

Prefiere las herramientas que te permitan recoger datos automáticamente mediante interfaces documentadas y mantener portables tus datos. Mide las integraciones por sus fallos y por el tiempo hasta una medida nueva. La precaución es que los conectores propietarios pueden dificultar llevarte los datos, así que prueba una exportación.

### Analítica

Juzga las herramientas por la cobertura de fuentes, la conciliación y el tiempo para responder a una pregunta nueva. La decisión a la que informa es qué herramienta adoptar, conservar o abandonar. La precaución es que los datos de demostración parecen limpios, así que prueba con tus propios datos desordenados.

## Perspectiva sectorial

**Startup.** Usa lo que el producto y las herramientas existentes ya ofrecen. Una hoja de cálculo y los informes incorporados de las herramientas que usas pueden responder a la mayoría de las primeras preguntas. Resiste una plataforma de datos hasta que las preguntas sean estables y el esfuerzo manual duela. Mantén escritas las definiciones de las métricas para que un cambio posterior sea fácil.

**Pequeña empresa.** Pocas medidas y pocos sistemas significan herramientas sencillas. Los informes incorporados y una hoja de cálculo suelen bastar. Los principales riesgos son los datos que solo están en la cabeza de una persona y las herramientas sin exportación. Elige productos que puedas abandonar y escribe las definiciones.

**Gran empresa.** Muchos sistemas, muchos equipos y muchas definiciones apuntan a un almacén de datos gobernado, un catálogo de definiciones y vistas en capas. La propiedad federada funciona mejor que un equipo central que construye todos los informes. Presta atención al bloqueo, al control de acceso, a la privacidad y a la evaluación de proveedores, y considera un pequeño equipo de plataforma que ofrezca el pipeline como servicio.

**Gobierno y sector público.** Las reglas de contratación, la soberanía de los datos y la accesibilidad afectan a la elección de herramientas. Los estándares abiertos y la portabilidad son valiosos porque los contratos son largos y las administraciones cambian. Planifica las evaluaciones de seguridad, la conservación de registros y las reglas de divulgación pública, y comprueba la orientación vigente sobre alojamiento y contratación (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos incluyen licencias o suscripciones, infraestructura, trabajo de integración y de conectores, limpieza de datos, trabajo de definiciones y de catálogo, formación, soporte y el esfuerzo recurrente de mantener sano el pipeline. Las opciones de construir conllevan costos de ingeniería fáciles de infravalorar, y las opciones de comprar conllevan cuotas que crecen con la escala y el costo de abandonarlas.

Los retornos vienen del esfuerzo de reporte ahorrado, respuestas más rápidas, menos disputas sobre los números y mejores decisiones a partir de datos de confianza. Construye el caso con tus propios datos: las horas dedicadas ahora a informes manuales, el número de versiones competidoras de una misma cifra, el retraso entre una pregunta y una respuesta y los costos de herramientas que se solapan. Evita citar cifras de analistas sobre los retornos de la analítica sin una fuente rastreable y una pertinencia para tu contexto. Una comparación justa cuenta el costo completo de cada opción durante tres años, incluida la salida (véase el tema 7.5, Costo del servicio y economía unitaria, y el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Primero la herramienta, las preguntas después.** Llega la plataforma y nadie sabe qué pedirle. Escribe primero las medidas.
- **Comprar para arreglar un problema de definiciones.** El desacuerdo sobre el significado persiste en cualquier herramienta. Zanja las definiciones.
- **Puntuaciones individuales incorporadas.** Tientan y distorsionan. Desactívalas y fija primero la política.
- **Sin salida.** El historial y las definiciones quedan atrapados. Prueba la exportación y conserva una copia.
- **El pipeline de una sola persona.** Se detiene cuando esa persona se va. Documéntalo, pruébalo y comparte la propiedad.
- **Entrada doble.** La gente registra el mismo trabajo dos veces, y la calidad de ambos cae. Toma los datos de los sistemas de registro.
- **Sobreingeniería temprana.** Llega una plataforma de datos antes de que una sola vista haya demostrado su valor. Empieza delgado.
- **Ignorar la calidad de los datos.** Los gráficos limpios sobre datos sucios engañan de forma más convincente. Corrige la captura en el origen.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Suministro de datos | Recogida manual; hojas de cálculo | Algunos flujos automatizados; scripts individuales | Fuentes acordadas alimentan un almacén compartido mediante pipelines probados | Fiabilidad, conciliación y frescura gestionadas y visibles | Pipelines federados con contratos compartidos entre equipos y proveedores; fuentes mejoradas a partir de la retroalimentación |
| Definiciones y catálogo | En la cabeza de la gente | Algunas documentadas | Un catálogo de definiciones con responsables, versionado y revisado | El catálogo impulsa los paneles; cambios revisados con los usuarios | Definiciones copropiedad de entre equipos y proveedores; retiradas cuando dejan de informar decisiones |
| Elección y costo | Compras ad hoc | Herramientas que se solapan | Criterios escritos; salida probada; costo completo contado | Costo por equipo atendido y esfuerzo manual gestionados | Elecciones de herramientas revisadas con regularidad con los usuarios y adaptadas a medida que cambian las necesidades |

## Lista de verificación

- [ ] Las medidas acordadas y sus preguntas están escritas antes de comparar herramientas.
- [ ] Las herramientas y los informes existentes se han inventariado y probado primero.
- [ ] Se ha comprobado la calidad de los datos en las fuentes principales y se han corregido las peores brechas.
- [ ] Los criterios de selección están escritos e incluyen distribuciones, control de acceso y exportación.
- [ ] Antes de cualquier compromiso se hizo una prueba de duración limitada con datos reales y usuarios reales.
- [ ] Las funciones de puntuación y clasificación a nivel individual están desactivadas o restringidas por política.
- [ ] Las definiciones se mantienen en un catálogo portable fuera de cualquier herramienta.
- [ ] El pipeline tiene un responsable, comprobaciones automatizadas, monitorización y una alerta de fallo.
- [ ] Se ha probado una exportación de definiciones e historial.
- [ ] Se ha contado el costo completo durante tres años, incluida la salida.

## Prompts de IA

**Escribe requisitos a partir de preguntas.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Planifica una prueba de herramientas.**

```text
We are comparing [options] for our metrics program. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Revisa un pipeline de datos.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behavior. List your assumptions and what you could not
tell from the description.
```

**Compara el costo completo.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics program. List the cost categories for each option, including
licenses, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la fuente de datos y la barrera de protección de cada medida al escribir los requisitos.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que el registro de una decisión sobre herramientas incluye definiciones, fuentes de datos y barreras de protección.

## Ideas clave

- Escribe primero las preguntas y las medidas y elige las herramientas para servirlas.
- Usa los sistemas de registro, corrige la captura de datos en el origen y prueba la conciliación.
- Mantén portables las definiciones y los datos y prueba la salida antes de comprometerte.
- Desactiva la puntuación y las clasificaciones a nivel individual y fija la política antes de activar cualquier función.
- Ejecuta el pipeline como un servicio con un responsable, pruebas y monitorización.
- Cuenta el costo completo durante varios años y empieza con el camino más delgado que responda a preguntas reales.

## Referencias y lecturas complementarias

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
