# Medición de ITIL 5 y resultados de valor

**ITIL 5, tal como lo describe su propietario, une estrategia, entrega y resultados medibles y abarca los entornos habilitados por IA, así que mide si cada servicio, producto y sistema de IA tiene un responsable con nombre y un resultado escrito con evidencias, y trata como no confirmado todo detalle de ITIL 5 que no puedas verificar con el propietario.**

## Visión general y motivación

[ITIL](https://en.wikipedia.org/wiki/ITIL) es el marco más conocido para la [gestión de servicios de TI](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Su propietario, PeopleCert, publica la versión vigente, y en 2026 se anunció una nueva versión del marco, ITIL 5. Los equipos que operan servicios se preguntan qué cambia una nueva versión en materia de medición. La respuesta honesta empieza por lo que se puede verificar y lo que no.

**Lo que está verificado (a 20 de octubre de 2026).** La propia página de certificación de PeopleCert para el ITIL Foundation Bridge (Version 5) describe la actualización como una cobertura de la gestión de productos y servicios digitales a lo largo del ciclo de vida, incluido cómo ITIL refleja los «entornos digitales modernos y habilitados por IA» («modern digital and AI-enabled environments»). También enumera un «enfoque mejorado de creación de valor» («enhanced value creation approach») que vincula estrategia, entrega y resultados medibles en todo el ecosistema de partes interesadas, y la gestión de la complejidad digital y de la IA. La página indica que el puente (bridge) es para quienes tienen una certificación de ITIL 4. No da fecha de lanzamiento del propio ITIL 5.

**Lo que no está verificado.** Los nombres y la estructura de las prácticas, cuánto de ITIL 4 se mantiene, las fechas formales de lanzamiento y si existe una publicación independiente sobre gobernanza de la IA. Las páginas de formación y consultoría de terceros ofrecen cifras y nombres para estos puntos. Discrepan entre sí, de modo que este libro no los repite. Vuelve a comprobar las páginas del propietario antes de cada decisión y etiqueta cada afirmación como «en ITIL 4» o «en ITIL 5».

De la redacción del propietario se desprenden tres temas, y cada uno tiene una consecuencia para la medición. Una orientación a producto significa que un servicio se posee desde la idea hasta su retirada, así que mide la propiedad. La IA en el entorno significa que los sistemas de IA necesitan gobernanza, así que mide el inventario, la supervisión y la calidad. El valor como resultado medible significa que un servicio debe declarar qué mejora para alguien cuando funciona, así que mide si el resultado está escrito y si hay evidencia de que se movió.

Este tema no define métricas de ITIL 5, porque el propietario no ha publicado un conjunto de métricas que este libro pueda verificar. Ofrece medidas de la preparación de una organización de servicios para ser medida: si existen los cimientos que necesitará cualquier versión de ITIL y cualquier medición honesta. Las medidas usan la misma forma que el resto del libro, con un vector de manipulación y una barrera de protección para cada una (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Términos usados aquí. Un **servicio** es un medio para posibilitar la cocreación de valor facilitando los resultados que el cliente quiere. Un **producto digital** es una oferta basada en software con su propio ciclo de vida y responsable. Un **mapa del parque** (estate map) es una lista de los servicios, productos, plataformas y sistemas de IA que una organización opera, cada uno con un responsable. Un **resultado** es un cambio en la vida de un cliente o en la salud de un servicio (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

## Principios clave

- **Verifica antes de citar.** Una afirmación sobre ITIL 5 está verificada solo si la propia publicación del propietario la dice. Todo lo demás es no confirmado y se etiqueta como tal.
- **Mide los cimientos, no el marco.** La propiedad, los resultados y la supervisión de la IA importan en cualquier versión, y son medibles hoy.
- **Resultados sobre producción.** El valor de un servicio es un cambio para alguien, así que un resultado escrito y la evidencia del cambio valen más que los recuentos de tickets o de versiones.
- **Posee cada producto, servicio y sistema de IA.** Un responsable con nombre es el mínimo para la gobernanza, la revisión y la retirada.
- **Empareja cada medida con una barrera de protección.** Los recuentos de cobertura son fáciles de satisfacer sobre el papel, así que empareja cada uno con una comprobación de que el contenido es real.
- **No esperes al marco.** Empieza con el mapa del parque y un conjunto reducido de medidas, y ajusta a medida que el propietario publique más.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de responsables del parque | Proporción de los servicios, productos digitales, plataformas y sistemas de IA listados con un responsable con nombre y activo | elementos con un responsable con nombre confirmado en los últimos 12 meses / elementos del mapa del parque, contados al cierre del periodo | porcentaje | Catálogo de servicios, registros de configuración y mapa del parque | Gestión del catálogo de servicios; gobernanza | Responsable de producto y carta del equipo | Trimestral |
| Cobertura de enunciados de resultado | Proporción de servicios y productos con un resultado escrito y al menos una señal de evidencia con nombre | servicios y productos con un enunciado de resultado revisado en los últimos 12 meses y una señal de evidencia / servicios y productos del mapa del parque | porcentaje | Catálogo de servicios y notas de revisión | Gestión de niveles de servicio; mejora continua | Objetivos de producto y criterios de aceptación | Trimestral |
| Antigüedad de la evidencia de resultados | Antigüedad de la revisión de evidencia más reciente de cada resultado | mediana y percentil 85 de (fecha de cierre del periodo menos fecha de la última revisión de evidencia) en todos los resultados | días | Registro de revisiones | Medición y elaboración de informes | Revisión periódica con las partes interesadas | Trimestral |
| Cobertura del inventario de sistemas de IA | Proporción de las funciones y sistemas habilitados por IA conocidos con un responsable, un punto de revisión humana y una entrada en el registro de riesgos | sistemas de IA con los tres / sistemas de IA hallados en el último barrido de descubrimiento | porcentaje | Inventario de IA y registro de riesgos | Gestión de riesgos; gobernanza | Definición de terminado para funciones de IA | Trimestral |
| Tasa de verificación de afirmaciones | Proporción de las afirmaciones sobre ITIL 5 usadas en planes y políticas que se remontan a la propia publicación del propietario | afirmaciones con una cita fechada del propietario / afirmaciones sobre ITIL 5 usadas en documentos de decisión en el periodo | porcentaje | Registro de verificación | Gestión del conocimiento; gobernanza | n/a, una práctica a nivel de organización sin contrapartida ágil directa | Trimestral |

Las fórmulas cuentan elementos al cierre del periodo. «Responsable activo» significa una persona o un rol que ha confirmado la propiedad por escrito, no un nombre copiado de un registro antiguo. La tasa de verificación de afirmaciones excluye las afirmaciones sobre ITIL 4, que está ampliamente documentado.

## Recomendaciones

### Empieza por el mapa del parque

**1. Construye una lista antes que nada.** Enumera cada servicio, producto digital, plataforma y sistema de IA que operas, con un nombre y un responsable. Espera sorpresas: herramientas en la sombra, funciones activadas por defecto en productos de proveedores y plataformas sin responsable. El mapa es el denominador de todas las demás medidas de este tema.

**2. Define «responsable» en una frase.** Un responsable responde del resultado del elemento, de su cambio, de su costo y de su retirada. Una lista de distribución de un equipo no es un responsable. Decide si un producto y su servicio de soporte comparten responsable y escribe la regla.

**3. Descubre los sistemas de IA de forma activa.** Busca en contratos, ajustes de herramientas y cuentas en la nube funciones de IA, y pregunta a los equipos qué han activado. Una encuesta puntual queda obsoleta, así que programa un barrido periódico y compáralo con el inventario.

### Mide los resultados

**4. Escribe una frase de resultado por servicio.** La frase dice qué mejora para un cliente con nombre cuando el servicio funciona, con sus palabras. «Disponibilidad del 99,9 por ciento» es un objetivo, no un resultado. Si el servicio no tiene resultado, pregunta si debería existir.

**5. Nombra la señal de evidencia.** Para cada resultado, nombra los datos que mostrarían que se mueve, como la tasa de contactos repetidos, el éxito de las tareas o la adopción. Prefiere señales que ya recoges (véase el tema 6.5, Realización de valor y resultados de negocio). Si no existe ninguna señal, anótalo como el hallazgo.

**6. Reporta la antigüedad de la evidencia.** Un resultado revisado hace dos años es una afirmación, no evidencia. Muestra la mediana y un percentil alto de la antigüedad de la evidencia, y muestra la más antigua. Es difícil de manipular sin hacer la revisión.

### Gobierna la medición de la IA

**7. Empareja la actividad de la IA con una medida de calidad.** Donde la IA asista con tickets, cambios o conocimiento, reporta una medida de uso junto a una medida de calidad, como la proporción de borradores de IA que una persona modificó de forma sustancial o la tasa de contactos repetidos de las solicitudes atendidas por IA (véase el tema 10.2, Medición del trabajo asistido por IA). La pareja muestra el beneficio, que el uso por sí solo no puede mostrar.

**8. Vincula los sistemas de IA con el registro de riesgos.** Cada sistema de IA recibe un responsable, un punto de revisión humana, una fecha de revisión y una entrada en el registro de riesgos (véase el tema 10.5, Métricas de gobernanza y riesgo de la IA). Comprueba con tu asesor jurídico la ley que te aplica, ya que este libro no ofrece asesoramiento legal.

### Mantén honestas las afirmaciones

**9. Mantén un registro de verificación.** Para cada afirmación sobre ITIL 5 que usen tus planes, anota la fuente del propietario, la fecha en que la leíste y si está verificada. Revisa el registro antes de cada decisión presupuestaria o de política, ya que la publicación puede cambiar.

**10. Mantén en marcha las medidas de ITIL 4.** No dejes de medir prácticas que funcionan porque exista una versión nueva. Cambia una medida cuando las orientaciones del propietario y tu propia evidencia digan ambas que necesita cambiar, y marca el cambio en el gráfico (véase el tema 1.4, Gobernanza y propiedad de las métricas).

**11. Da pasos pequeños.** Elige una medida de la tabla, asígnale un responsable y ejecútala durante un trimestre. Añadir las cinco a la vez crea un programa de informes antes de que haya ninguna evidencia de que las medidas ayudan.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Cobertura de responsables del parque | Nombrar a un gerente o una lista de distribución como responsable de todo; omitir del mapa los elementos difíciles | Confirmación de la propiedad por parte del propio responsable y un barrido de descubrimiento que compare el mapa con contratos y cuentas en la nube |
| Cobertura de enunciados de resultado | Escribir una frase vaga como «mejorar la eficiencia»; copiar un mismo resultado en varios servicios | Muestrear los resultados con los clientes y preguntar si los reconocen; antigüedad de la evidencia de resultados |
| Antigüedad de la evidencia de resultados | Tocar la fecha de revisión sin revisar; revisar solo los resultados fáciles | Leer las notas de revisión de una muestra; informar de la proporción de resultados cuya señal realmente se movió o se mantuvo plana |
| Cobertura del inventario de sistemas de IA | Contar solo los sistemas que el equipo elige declarar; clasificar las funciones de IA como software ordinario | Barrido de descubrimiento independiente; comparar con los registros de proveedores y contratos |
| Tasa de verificación de afirmaciones | Citar la página de un proveedor como si fuera el propietario; registrar una afirmación como verificada sin leer la fuente | Revisar una muestra de entradas del registro frente a la página de origen; regla de fuente exclusiva del propietario |

Una lectura sana es un conjunto de números de cobertura que suben despacio mientras mejora el contenido muestreado: resultados que los clientes reconocen, responsables que pueden nombrar su servicio y un registro de verificación que muestra afirmaciones que pasan de no confirmadas a verificadas, o que se descartan.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Medidas de cobertura (responsable, resultado, inventario de IA) | Baratas, concretas y disponibles ya | Fáciles de satisfacer sobre el papel; no dicen nada de la calidad sin una muestra |
| Medidas de evidencia de resultados | Conectan el trabajo de servicio con el valor, en línea con el énfasis declarado por el propietario | Lentas, ruidosas y dependientes de datos que quizá aún no existen |
| Esperar a un conjunto de métricas de ITIL 5 publicado | Evita rehacer trabajo si el propietario publica uno | Retrasa trabajo útil con cualquier versión; el propietario puede no publicar ninguno |
| Seguir resúmenes de terceros | Rápido y detallado | Discrepan entre sí y con el propietario; riesgo de actuar sobre detalles no confirmados |

La conclusión en prosa es medir ya los cimientos, mantener etiquetadas las afirmaciones y cambiar de rumbo cuando el propietario publique más. El costo de equivocarse es bajo, porque la propiedad, los resultados y la supervisión de la IA ya merecían la pena.

## Preguntas para debatir con tu equipo

**1. ¿Cuáles de nuestros servicios, productos, plataformas y sistemas de IA no tienen hoy un responsable con nombre?**
Empieza enumerando lo que existe, porque a menudo la gente encuentra sistemas que nadie recuerda haber adoptado. Espera sorpresa ante las funciones activadas por defecto en herramientas de proveedores. El facilitador debe anotar cada laguna sin culpar. Un seguimiento útil es preguntar a quién se llamaría cuando el elemento falle de noche.

**2. ¿Qué creemos sobre ITIL 5 que hemos leído en un blog y no en el propietario?**
Nombrar las creencias de segunda mano convierte la verificación en una tarea. Los equipos suelen repetir con seguridad porcentajes, fechas y nombres de prácticas. Clasifica cada creencia como verificada, plausible o desconocida. Pide a alguien que compruebe cada una en la página del propietario y anote la fecha.

**3. ¿Qué servicio podríamos describir a un cliente como un resultado en lugar de una cifra de disponibilidad?**
La práctica centrada en el valor parte de los resultados. Los equipos recurren por defecto a porcentajes de disponibilidad, así que insiste en la frase del cliente: qué mejora para él cuando el servicio funciona. Pregunta después cómo notaríamos si el resultado empeorara mientras el objetivo sigue en verde.

**4. ¿Dónde usamos hoy IA y quién supervisa cada uso?**
Esto pone a prueba si la gobernanza existe en la práctica. Las respuestas van de «en ningún sitio» a una larga lista que incluye funciones de proveedores. Escucha si la supervisión es solo un documento de política. Un buen seguimiento es preguntar qué nos diría que un sistema de IA se equivocaba.

**5. ¿Cuál de las cinco medidas sería más fácil de manipular aquí y cómo lo notaríamos?**
Pide al grupo que diseñe la jugada de manipulación, no que se defienda de ella en abstracto. Anota cada jugada y contrástala con la barrera de protección emparejada. Es una versión breve de la revisión trimestral de manipulación.

**6. ¿Cuál es la primera medida más pequeña que podemos ejecutar este trimestre y que ayude sea cual sea la versión que sigamos?**
Los pasos pequeños superan a un programa de transición construido sobre detalles no verificados. Las respuestas típicas son el mapa del parque o un inventario de IA. Elijan una con un responsable y una fecha, y acuerden cuándo volver a leer las publicaciones del propietario.

## Cuatro perspectivas

### Equipos de producto y de entrega

Se les pregunta quién posee el producto tras el lanzamiento. Mantengan el servicio en vivo dentro del perímetro del producto, escribid una frase de resultado y situad las funciones de IA que construís en el mismo mapa del parque que todo lo demás. Muestren primero los números del propio equipo y mantenedlos alejados de las evaluaciones individuales.

### Equipos de servicio y de operaciones

Sus prácticas son el cimiento de trabajo. Sigan midiéndolas, registren evidencia de que funcionan y muestren cómo se supervisa la asistencia de la IA allí donde toca tickets, alertas o cambios. Usen el registro de verificación para señalar las afirmaciones del material de formación antes de que lleguen a un runbook.

### Liderazgo y gobernanza

Financien la propiedad y la verificación antes de financiar un programa de transición. Pidan el mapa del parque, el inventario de IA, el registro de verificación y la antigüedad de la evidencia de resultados. Traten un número de cobertura en rojo como motivo para preguntar qué ayuda necesita el equipo, no como motivo para repartir culpas.

### Clientes y usuarios

Deberían poder ver para qué sirve un servicio en sus propios términos y saber cuándo la IA forma parte de cómo se les atiende. Pidan la frase de resultado y digan si coincide con su experiencia.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una empresa logística regional opera un portal de clientes, un sistema de almacén y un asistente de IA recién añadido que redacta respuestas para el centro de servicios. La responsable de gestión de servicios oye que ITIL 5 hace hincapié en los productos y en la gobernanza de la IA, y la dirección pide un plan de medición en un mes. Los números de este ejemplo son ilustrativos.

El equipo se resiste a redactar un plan a partir de presentaciones. Construye un mapa del parque: 11 servicios, tres productos digitales, dos plataformas y cuatro funciones habilitadas por IA, una de las cuales se activó por defecto en una herramienta de un proveedor y no tenía responsable. La cobertura de responsables del parque en el primer recuento es del 75 por ciento. El equipo anota en una nota de una página lo que dice la página de certificación del propietario y enumera cualquier otra afirmación sobre ITIL 5 como no confirmada.

Cada función de IA recibe un responsable, un punto de revisión humana y una entrada en el registro de riesgos, lo que lleva la cobertura del inventario de sistemas de IA del 50 al 100 por ciento en un mes. La responsable del centro de servicios decide que cada respuesta redactada por la IA sea leída por un agente antes de enviarse y que los agentes registren los cambios sustanciales en los borradores. El equipo escribe además frases de resultado para los tres productos digitales, y el resultado del portal («los clientes pueden saber dónde está su envío sin llamar») se prueba con cinco clientes, dos de los cuales lo describen de otra manera.

El equipo detecta entonces un riesgo de manipulación. Un gerente propone elevar la cobertura de enunciados de resultado escribiendo una sola frase para los once servicios, «mejorar la eficiencia operativa». La barrera de protección, una muestra de clientes, habría mostrado que nadie la reconocía, y el equipo rechaza el atajo. Lo que sigue siendo difícil: solo dos servicios tienen una señal de evidencia que se recoge hoy, y la proporción de borradores de IA modificados por los agentes depende de que los agentes registren las ediciones de forma coherente. El plan para el próximo trimestre es añadir señales de evidencia para dos servicios más.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata la adopción como mejora continua: una pequeña lista de pendientes de cambios, revisada con las partes interesadas y ajustada a medida que el propietario publique más. Un hábito práctico es una revisión periódica del registro de verificación y del mapa del parque. La precaución es que un programa de transición con una única fecha de puesta en marcha oculta el trabajo de verificación y repite el patrón del cambio de golpe.

### IA

ITIL 5, tal como lo describe el propietario, abarca los entornos habilitados por IA. Da a cada uso de la IA un responsable, un punto de revisión humana y una forma de detectar errores, y mide la cobertura del inventario y la pareja de calidad. La precaución es no pedir a un asistente de IA que resuma ITIL 5 de memoria, ya que puede producir detalles seguros de sí mismos pero erróneos. Dale un texto que hayas leído del propietario y pídele que lo cite.

### Automatización

Automatiza el mapa del parque donde puedas: extrae las listas de servicios y productos de tu catálogo y de los datos de configuración y señala las entradas sin responsable o con una confirmación caducada. La automatización también necesita medirse: cuántas señales llevaron a una acción. La precaución es que la automatización deja al descubierto problemas de calidad de datos, así que mantén a una persona responsable de resolver cada señal.

### Analítica

Haz seguimiento en el tiempo de un puñado de señales de los cimientos y muestra cuántos elementos hay detrás de cada porcentaje. Úsalas para decidir dónde poner el esfuerzo de mejora, no para clasificar equipos. La precaución es que un recuento de «responsables nombrados» puede manipularse nombrando a cualquiera y los datos pueden estar obsoletos, así que empareja con la confirmación del propio responsable (véase el tema 10.8, Métricas de analítica y calidad de datos).

## Perspectiva sectorial

**Startup.** Puede haber un solo producto y pocas personas. Nombra al responsable, escribe la frase de resultado y enumera las herramientas de IA que usa el equipo. Omite el resto hasta que haya una razón para añadirlo.

**Pequeña empresa.** TI puede ser una sola persona o un proveedor. Pregunta al proveedor qué funciones de IA están activas en las herramientas que pagas y mantén una lista corta de servicios con sus responsables. Trata con cuidado las afirmaciones de los proveedores sobre cualquier marco.

**Gran empresa.** El parque es grande y la propiedad se reparte entre equipos y proveedores. Estandariza la definición de «responsable» y de «enunciado de resultado», ejecuta el barrido de descubrimiento con una cadencia y mantén un registro de verificación central para que los equipos no repitan cada uno la investigación.

**Gobierno y sector público.** Las normas de contratación, auditoría y legales determinan qué puedes adoptar y cuándo. Trata las publicaciones del propietario y la regulación aplicable como datos de diseño, anota la fecha en que las leíste y usa el registro de verificación como evidencia para los auditores (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

El costo es sobre todo tiempo del personal: construir el mapa del parque, escribir frases de resultado, confirmar a los responsables y ejecutar un barrido de descubrimiento de sistemas de IA. Hay poco costo de herramientas si ya tienes un catálogo o datos de configuración. El costo mayor es la disciplina de mantener al día el mapa y el registro.

El retorno son menos reprocesos y mejores decisiones. Un plan de transición construido sobre afirmaciones no verificadas corre el riesgo de gastar en los cambios equivocados. Las lagunas de propiedad y de inventario de IA son hallazgos que importan con cualquier versión del marco, ya que una función de IA sin responsable en un proceso de cara al cliente es un riesgo. Describe el beneficio como un patrón, no como un número: menos sistemas sin responsable, menos sorpresas en las auditorías y conversaciones más claras con los clientes sobre el valor. Mide tus propias líneas base, como la cobertura de responsables y la antigüedad de la evidencia de resultados, antes y después del trabajo si necesitas cifras para un caso de negocio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Repetir afirmaciones de blogs como hechos.** Marca cada afirmación como verificada o no confirmada y enlaza solo las páginas del propietario para las verificadas.
- **Reetiquetar servicios como productos.** Cambia la propiedad y la responsabilidad sobre el ciclo de vida, o la etiqueta es decoración.
- **Cobertura sin contenido.** Un número de cobertura alto con frases de resultado vacías o copiadas es manipulación. Muestrea el contenido con los clientes.
- **La gobernanza de la IA como documento.** Nombra responsables, puntos de revisión y fechas de revisión, y comprueba que la gente los cumple.
- **Esperar al marco para medir.** La propiedad, los resultados y la supervisión de la IA son útiles ya. Empieza y ajusta cuando el propietario publique más.
- **Tratar un certificado como cumplimiento.** Mide si los equipos saben ejecutar la práctica, no quién aprobó un examen.
- **Descubrimiento puntual.** Las funciones de IA aparecen continuamente. Ejecuta el barrido con una cadencia.

## Modelo de madurez

| Dimensión | Iniciar | Desarrollar | Estandarizar | Gestionar | Orquestar |
| --- | --- | --- | --- | --- | --- |
| Disciplina de fuentes | El conocimiento de ITIL 5 viene de blogs y rumores | Se leen algunas páginas del propietario pero no se registran | Afirmaciones verificadas y no confirmadas registradas con fechas | Afirmaciones recomprobadas antes de cada decisión | Los equipos comparten un registro de verificación vivo y fechado |
| Propiedad | Responsables poco claros para la mayoría de los elementos | Responsables nombrados para los servicios principales | Mapa del parque con un responsable para cada elemento | Lagunas de propiedad revisadas y cerradas con una cadencia | Los responsables se coordinan entre equipos y proveedores |
| Resultados y evidencia | Solo objetivos y recuentos | Frases de resultado para los servicios principales | Resultado y señal de evidencia para cada servicio | Antigüedad de la evidencia revisada; resultados obsoletos revisitados | Resultados escritos con los clientes y renovados continuamente |
| Gobernanza de la IA | Uso de la IA desconocido | Usos principales de la IA listados | Responsable, punto de revisión y entrada de riesgo por sistema | Errores y anulaciones medidos y revisados | La gobernanza se adapta a medida que cambian la IA y las normas |

## Lista de verificación

- [ ] Hemos leído las páginas de ITIL 5 del propietario y registrado lo que dicen, con la fecha.
- [ ] Toda afirmación sobre ITIL 5 en nuestros planes está marcada como verificada o no confirmada.
- [ ] Tenemos un mapa del parque con servicios, productos, plataformas y sistemas de IA.
- [ ] Cada elemento del mapa tiene un responsable que lo ha confirmado.
- [ ] Cada servicio tiene una frase de resultado y una señal de evidencia con nombre.
- [ ] Reportamos la antigüedad de la evidencia de resultados con percentiles.
- [ ] Cada sistema de IA tiene un responsable, un punto de revisión humana y una entrada en el registro de riesgos.
- [ ] Ejecutamos con un calendario un barrido de descubrimiento de funciones de IA.
- [ ] Cada medida tiene un vector de manipulación y una barrera de protección en la misma página.
- [ ] Elegimos una primera medida con un responsable y una fecha.

## Prompts de IA

**Construye un mapa del parque a partir del material que pegues.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**Clasifica las afirmaciones sobre ITIL 5 en verificadas y no confirmadas.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Redacta frases de resultado y señales de evidencia para revisión.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Revisa el riesgo de manipulación de las cinco medidas.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## Skills de IA

- [ITIL 5](../../../../skills/itil-5/SKILL.md): úsala para construir un mapa del parque, un análisis de brechas y un plan de adopción por fases, con las afirmaciones sobre ITIL 5 marcadas como no confirmadas.
- [Maturity models](../../../../skills/maturity-models/SKILL.md): úsala para convertir la tabla de madurez en una autoevaluación del equipo.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar el tema que cubre una métrica y su barrera de protección emparejada.

## Ideas clave

- Una afirmación sobre ITIL 5 está verificada solo si la propia publicación del propietario la dice, y debe anotarse la fecha en que la leíste.
- Los temas declarados por el propietario, productos digitales, entornos habilitados por IA y resultados medibles, pueden medirse hoy como propiedad, evidencia de resultados y supervisión de la IA.
- Los números de cobertura son fáciles de satisfacer sobre el papel, así que muestrea el contenido y mantén una barrera de protección junto a cada uno.
- Sigue midiendo las prácticas de ITIL 4 que funcionan y cambia una medida solo cuando las orientaciones del propietario y tu evidencia coincidan.
- Empieza con una medida y un mapa del parque, y ajusta a medida que el propietario publique más.

## Referencias y lecturas complementarias

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Product management](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
