# Métricas de adopción y catálogo de servicios

**Un servicio que nadie elige, encuentra o completa mediante una solicitud no ha entregado valor, así que mide cómo descubre y usa la gente lo que ofreces y mantén el catálogo tan honesto como una lista de pendientes.**

## Visión general y motivación

Los equipos invierten en servicios y descubren después que la gente no los usa. El nuevo portal de autoservicio se esquiva con el correo electrónico. Un elemento de catálogo cuidadosamente diseñado para el acceso a software recibe dos solicitudes al año mientras llegan cien al mes por chat. Un servicio de monitorización se lanza y la mitad de los equipos para los que se construyó nunca se conectan a él. La adopción es la mitad que falta de la entrega: un servicio solo es valioso cuando los usuarios a los que va dirigido empiezan a usarlo, siguen usándolo y terminan lo que fueron a hacer.

El **catálogo de servicios** es la lista de servicios y elementos solicitables que ofrece una organización, descritos en términos que sus usuarios puedan entender. Un [catálogo de servicios](https://en.wikipedia.org/wiki/Service_catalog) suele tener una vista de cara al cliente, que enumera lo que un usuario puede pedir y cómo, y una vista técnica, que registra cómo se construye y se soporta cada servicio. Los equipos ágiles reconocerán la forma: un catálogo es una especie de [lista de pendientes del producto](https://en.wikipedia.org/wiki/Product_backlog) a la inversa. Una lista de pendientes enumera lo que se piensa construir. Un catálogo enumera lo que ya se ofrece, y ambos necesitan el mismo cuidado: orden, poda, redacción clara y un flujo constante de retroalimentación de los usuarios (véase el tema 2.6, Métricas de la lista de pendientes y su refinamiento).

La **adopción** es el grado en que los usuarios previstos adoptan y siguen usando un servicio. El estudio de cómo se difunden las prácticas nuevas tiene una larga historia; la teoría de la [difusión de innovaciones](https://en.wikipedia.org/wiki/Diffusion_of_innovations) describe la adopción como un proceso a lo largo del tiempo, con adoptantes tempranos, una mayoría y rezagados. Para un servicio interno, la lección práctica es que la adopción rara vez ocurre por un anuncio. Ocurre cuando el servicio es fácil de encontrar, fácil de usar y claramente mejor que la solución provisional.

Es tentador convertir las medidas de adopción en objetivos. Imponer un canal hace que un número de uso parezca bueno mientras los usuarios se resienten y construyen soluciones provisionales. Empujar cada solicitud a un elemento de catálogo hace subir la cobertura del catálogo mientras baja la finalización. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica, así que cada medida de aquí se empareja con una comprobación de que sube el valor real, y no el mero uso (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Este tema cubre cuatro cosas: si la gente usa un servicio (adopción), si puede encontrar y terminar aquello a lo que vino (catálogo y flujo de solicitudes), si el catálogo está al día y es honesto (higiene) y si el uso se concentra en unos pocos elementos (forma). Se conecta con el cumplimiento de solicitudes (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio) y con el autoservicio (véase el tema 3.7, Métricas de autoservicio y automatización), que cubren lo que ocurre después de hacer la solicitud.

## Principios clave

- **La adopción es un resultado, así que pregunta qué intentaba hacer el usuario.** Cuenta objetivos completados, no visitas a páginas.
- **Mide el embudo, no solo el total.** Dónde abandona la gente te dice qué corregir.
- **Compara con la alternativa.** Un servicio compite con el correo electrónico, el chat, una llamada telefónica y una solución provisional.
- **Mantén el catálogo tan pequeño y actualizado como sea posible.** Los elementos obsoletos enseñan a los usuarios a dejar de buscar.
- **Segmenta antes de concluir.** Los promedios de todos los usuarios esconden los grupos para los que el servicio no funciona.
- **No fuerces nunca el uso para subir un número.** Las imposiciones producen números, no adopción.
- **Trata el poco uso como una pregunta para el responsable y los usuarios.** Puede significar que el servicio no hace falta.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de adopción | Proporción de usuarios elegibles que usaron un servicio al menos una vez en el periodo | usuarios elegibles distintos con al menos un uso completado / usuarios elegibles | porcentaje | Registros de uso del servicio unidos al directorio de usuarios | Gestión del catálogo de servicios; gestión de niveles de servicio | Adopción de funciones; revisión de resultados del producto | Mensual |
| Tasa de uso activo | Proporción de adoptantes que siguen usando el servicio a lo largo del tiempo | usuarios activos en el periodo que también usaron el servicio en el periodo anterior / usuarios activos en el periodo anterior | porcentaje | Registros de uso; tablas de cohortes | Mejora continua | Retención en la analítica de producto | Mensual |
| Cobertura del catálogo | Proporción de solicitudes que llegan por el catálogo en lugar de por canales ad hoc | solicitudes creadas mediante el catálogo / todas las solicitudes, de todos los canales | porcentaje | Herramienta de gestión de solicitudes; etiquetas de buzón y chat | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Elementos de la lista de pendientes que llevan una definición escrita | Mensual |
| Tasa de abandono de solicitudes | Proporción de solicitudes iniciadas que el usuario no envía | solicitudes iniciadas pero no enviadas en 24 horas / solicitudes iniciadas | porcentaje | Analítica del portal | Gestión de solicitudes de servicio | Abandono de tareas en pruebas de usabilidad | Mensual |
| Tasa de éxito de la búsqueda | Proporción de búsquedas en el catálogo que terminan en una solicitud o en una respuesta consultada | búsquedas seguidas de una solicitud o una consulta de conocimiento dentro de la sesión / búsquedas | porcentaje | Registros de búsqueda del portal | Gestión del conocimiento; gestión del catálogo de servicios | Facilidad de localización en la investigación de usuarios | Mensual |
| Proporción de elementos obsoletos | Proporción de elementos del catálogo con la fecha de revisión vencida o sin uso en un periodo fijado | elementos con la revisión vencida o con cero solicitudes en 12 meses / elementos del catálogo | porcentaje | Registro del catálogo | Gestión del catálogo de servicios | Antigüedad y poda de la lista de pendientes | Trimestral |
| Concentración de solicitudes | Proporción de solicitudes que suponen los elementos más solicitados | solicitudes de los cinco elementos principales / todas las solicitudes del catálogo | porcentaje | Herramienta de gestión de solicitudes | Gestión de solicitudes de servicio | Pareto del trabajo por tipo | Trimestral |

Indica la base de usuarios de cada medida. Los «usuarios elegibles» deben definirse antes de medir, por ejemplo el personal de los roles que podrían usar un servicio, y la lista debe anotarse en el registro de métricas. Cuenta un uso solo cuando termina en un resultado completado, como un acceso concedido, y no cuando carga una página. Excluye las cuentas de prueba y el tráfico automatizado.

## Recomendaciones

### Conoce tus servicios y tus usuarios

**1. Define la audiencia prevista de cada servicio.** Antes de medir la adopción, escribe a quién va dirigido el servicio y por qué lo usarían en lugar de la alternativa. Un nuevo servicio de analítica construido para el personal de finanzas no tiene «poca adopción» si solo el personal de finanzas iba a usarlo. Sin una audiencia definida, la tasa de adopción es un número sobre nadie.

**2. Registra la alternativa.** Para cada servicio importante, enumera lo que hace la gente cuando no lo usa: preguntar a un colega, enviar un correo, comprar una herramienta, usar una hoja de cálculo. Trata la alternativa como un competidor en el sentido que importa: es adonde van tus usuarios cuando tu servicio es más difícil. Compara el esfuerzo de ambos caminos durante el diseño y la revisión.

**3. Describe los elementos en el lenguaje del usuario.** Títulos como «Acceso a software, estándar» y «Sustitución de portátil, dañado» son más fáciles de encontrar que los nombres internos. Prueba los títulos pidiendo a unos pocos usuarios que encuentren un elemento a partir de un escenario breve. Los problemas de redacción aparecen enseguida en los registros de búsqueda.

**4. Mantén un responsable para cada elemento.** Cada elemento del catálogo tiene un responsable con nombre, una fecha de revisión, una descripción de la audiencia y el volumen esperado. Los elementos sin responsable derivan. Si nadie puede decir quién usa un elemento y por qué, es candidato a la retirada.

### Mide el recorrido

**5. Instrumenta el embudo.** Para cada servicio importante, registra los pasos desde el descubrimiento hasta el resultado completado: encontrar el elemento, iniciar la solicitud, rellenar el formulario, enviar, recibir el resultado. Una vista de [embudo de conversión](https://en.wikipedia.org/wiki/Conversion_funnel) muestra dónde se van los usuarios. Corrige primero el mayor abandono. Comprueba que las correcciones acortan o aclaran el formulario, no que solo embellecen los datos.

**6. Usa cohortes para ver la retención.** Un [análisis de cohortes](https://en.wikipedia.org/wiki/Cohort_analysis) agrupa a los usuarios según cuándo usaron el servicio por primera vez y sigue a cada grupo. Separa un servicio que conserva a sus usuarios de uno que los atrae una vez y los pierde. Úsalo para servicios que deben usarse repetidamente, como el portal del centro de servicios o un pipeline de despliegue.

**7. Lee los registros de búsqueda para saber qué no encuentra la gente.** Las búsquedas sin resultado, o repetidas con palabras distintas, apuntan a brechas en los nombres, en el contenido o en el propio catálogo. Revisa cada mes las principales búsquedas sin resultado y decide para cada una: renombrar un elemento, añadir un sinónimo, escribir un artículo o crear un elemento nuevo. Las herramientas de [analítica web](https://en.wikipedia.org/wiki/Web_analytics) pueden aportarlo, y también los propios registros del portal.

**8. Segmenta por grupo.** Desglosa la adopción y el abandono por rol, ubicación, dispositivo y necesidades de accesibilidad donde tengas acceso lícito y ético a esa información. El agregado puede parecer sano mientras el personal del turno de noche o los usuarios de dispositivos móviles fallan al doble de tasa. Suprime los grupos pequeños para proteger a las personas y combina con las medidas de experiencia de los temas anteriores (véase el tema 6.2, Acuerdos de nivel de experiencia).

### Mantén honesto el catálogo

**9. Poda según un calendario.** Revisa el catálogo cada trimestre. Retira o fusiona los elementos sin uso, jubila los elementos de servicios discontinuados y corrige los elementos con mucho abandono. Un catálogo más pequeño y preciso sirve mejor a los usuarios que uno completo y obsoleto. Trata la retirada como algo normal y registra el motivo.

**10. Mira la forma de la demanda.** En la mayoría de los catálogos unos pocos elementos explican la mayor parte de las solicitudes, un patrón que suele describirse mediante el [principio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Úsalo para concentrar el esfuerzo de diseño en los elementos frecuentes y para automatizar los rutinarios (véase el tema 3.7, Métricas de autoservicio y automatización). No abandones la cola larga sin mirarla, ya que los elementos raros pueden importar mucho a quienes los necesitan.

**11. No fuerces la adopción.** Si un servicio hace falta, los usuarios vendrán cuando sea fácil. Donde la organización exija un canal por razones de control o de auditoría, dilo y sé abierto en que el número refleja una regla, no una preferencia. Evita los [patrones oscuros](https://en.wikipedia.org/wiki/Dark_pattern), como esconder el número de teléfono o dificultar la alternativa, ya que elevan el uso y bajan la confianza.

**12. Cierra el ciclo con los responsables y los usuarios.** Comparte cada mes con los responsables de los elementos el embudo, las brechas de búsqueda y la lista de obsoletos. Pregunta a los usuarios, en la encuesta y en las revisiones, por qué usan o evitan un servicio (véase el tema 6.1, Métricas de satisfacción del cliente). Anota en el registro lo que cambiaste y di a los usuarios que ocurrió.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de adopción | Imponer el uso; contar inicios de sesión o visitas a páginas como uso; estrechar los «usuarios elegibles» a quienes ya lo usan | Definición de resultado completado; comparar con las valoraciones de satisfacción y de esfuerzo; publicar la regla de usuarios elegibles |
| Tasa de uso activo | Inscribir automáticamente a los usuarios para que parezcan activos; enviar notificaciones que cuentan como actividad | Contar solo las acciones completadas iniciadas por el usuario; entrevistas por muestreo con usuarios que lo dejaron |
| Cobertura del catálogo | Forzar cada solicitud a un elemento de catálogo genérico; cerrar solicitudes por correo con «use el portal» | Tasa de abandono de solicitudes y satisfacción; contar cuántas solicitudes se vuelven a plantear por otro canal |
| Tasa de abandono de solicitudes | Quitar campos de formulario que hacen falta, lo que traslada el trabajo al cumplimiento; contar las solicitudes abandonadas solo tras una ventana larga | Tasa de retrabajo y de aclaraciones en el cumplimiento (véase el tema 3.5, Métricas de cumplimiento de solicitudes de servicio) |
| Tasa de éxito de la búsqueda | Contar cualquier clic como éxito; añadir artículos irrelevantes que coinciden con toda consulta | Comprobar que el resultado se usó (solicitud hecha, artículo valorado como útil); leer las búsquedas sin resultado |
| Proporción de elementos obsoletos | Marcar elementos como revisados sin leerlos; reiniciar en bloque las fechas de revisión | Muestrear los elementos revisados en busca de exactitud; mostrar la última fecha de cambio real |
| Concentración de solicitudes | Dividir elementos populares en muchos; fusionar elementos no relacionados para esconder la demanda de la cola larga | Taxonomía de elementos fija con registro de cambios; mirar la cola por categoría |

Una lectura sana es un catálogo donde los elementos más usados funcionan bien y son cada vez más fáciles, donde los usuarios eligen el servicio porque es mejor que la alternativa y donde retirar un elemento es rutina.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Canal impuesto | Volumen predecible, fácil de auditar | Resentimiento, soluciones provisionales, números inflados |
| Adopción voluntaria | Señal honesta de valor | Más lenta; algunos servicios pueden no adoptarse nunca |
| Catálogo grande | Completo, cubre necesidades raras | Difícil de buscar; se vuelve obsoleto |
| Catálogo pequeño | Fácil de encontrar y mantener | Las necesidades raras quedan fuera; los usuarios recurren al correo |
| Medidas de embudo | Señalan dónde abandonan los usuarios | Necesitan instrumentación; pueden fomentar optimizar el formulario a costa del resultado |
| Encuesta sobre el porqué | Explica el comportamiento | Sesgada por quién responde; difícil de escalar |

La respuesta en prosa es preferir la adopción voluntaria respaldada por una ventaja clara de calidad, y usar imposiciones solo donde el control o el cumplimiento lo exijan, con el número etiquetado en consecuencia. Mantén el catálogo lo bastante pequeño para poder mantenerlo y pon la cola en una base de conocimiento con búsqueda, no en cien elementos medio usados.

## Preguntas para debatir con tu equipo

**1. ¿Para quién es cada uno de nuestros servicios principales y cómo sabríamos que lo usan?**
Enumera los cinco servicios a los que tu equipo dedica más tiempo y escribe la audiencia prevista de cada uno. Pregunta después cómo podría medirse la adopción de cada uno. El facilitador debe buscar servicios donde nadie sabe nombrar la audiencia, ya que es probable que no tengan plan de adopción.

**2. ¿Qué hace la gente cuando no usa nuestro servicio y por qué?**
Para un servicio de poca adopción, entrevista o encuesta a unos pocos usuarios que lo evitan. La alternativa suele ser reveladora: puede ser más rápida, más familiar o más flexible. Decidan si mejorar el servicio, cambiar la alternativa o aceptar que el servicio no hace falta.

**3. ¿Dónde abandonan los usuarios nuestro elemento más solicitado?**
Muestra el embudo del elemento principal, desde la primera vista hasta el envío. Pide al equipo que adivine dónde está el mayor abandono y compara después. Acuerden un cambio que probar y digan cómo comprobarán que ayudó sin trasladar el problema a otra parte.

**4. ¿Qué quitaríamos del catálogo si nos atreviéramos?**
Imprime la lista de elementos sin solicitudes en un año. Pregunta qué pasaría si cada uno desapareciera. La conversación suele descubrir que un elemento existe porque alguien lo pidió una vez. Acuerden una fecha para retirar o fusionar los cinco primeros y una nota a los usuarios.

**5. ¿Dónde estamos empujando o forzando a los usuarios y vale la pena el costo?**
Enumeren todos los lugares donde una regla o un diseño empuja a los usuarios a un canal. Pregunten cuáles hacen falta de verdad y cuáles son costumbre. El facilitador debe explorar cómo vive cada uno el usuario y si los números resultantes significan lo que los líderes creen que significan.

**6. ¿Qué busca la gente que no tenemos?**
Revisen las principales búsquedas sin resultado. Para cada una, decidan si añadir un elemento, escribir un artículo o explicar que el servicio no existe. Pregunten quién posee esta revisión y con qué frecuencia se hará.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega construyen servicios y funciones que necesitan adopción para importar. Deben definir la audiencia al principio, integrar medidas de uso en el servicio y revisar el embudo tras el lanzamiento. Los datos de adopción son retroalimentación sobre el trabajo, y pertenecen al refinamiento y a la revisión. Los equipos deben evitar declarar terminada una versión cuando se publica. Terminado significa que los usuarios previstos están recibiendo el beneficio.

### Equipos de servicio y de operaciones

Los equipos de operaciones gestionan el catálogo y ven las solicitudes que llegan por todos los canales. Deben mantener actualizado el catálogo, etiquetar las solicitudes que lo esquivan y preguntar por qué. No deben cerrar una solicitud redirigiéndola, porque eso esconde la señal. Las brechas de búsqueda y el abandono son su mejor fuente de mejoras del portal.

### Liderazgo y gobernanza

Los líderes deciden si la adopción es una conversación o una cuota. Deben preguntar para qué sirve el servicio, a quién ayuda y por qué lo elige la gente. Deben evitar fijar objetivos de adopción para equipos individuales, apoyar la retirada de servicios sin uso y esperar ver la adopción junto a la satisfacción y el esfuerzo. Donde una imposición esté justificada, los líderes deben explicarla a los usuarios.

### Clientes y usuarios

Los usuarios quieren conseguir lo que necesitan con poco esfuerzo. Notan cuando un portal es difícil de buscar, cuando los formularios piden cosas que la organización ya sabe y cuando la forma antigua es más rápida. Su comportamiento, y lo que dicen, es la señal de adopción más honesta. Debe preguntárseles por qué evitan un servicio y decirles qué cambió como resultado.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de una agencia nacional de transporte opera un centro de servicios, un portal de autoservicio con un catálogo de unos 140 elementos y varios equipos de producto. Los números siguientes son ilustrativos.

El portal se lanzó hace un año y la dirección fijó el objetivo de que el 80 por ciento de las solicitudes pasaran por él. El informe mensual muestra un 78 por ciento de cobertura, y la jefa de gestión de servicios está satisfecha hasta que lee los comentarios de la encuesta de usuarios. El personal de las oficinas regionales dice que el portal es lento y que los formularios son largos. Pide al gestor del catálogo que mire el embudo y los registros de búsqueda.

El embudo de «Equipamiento para nuevas incorporaciones» muestra 1100 inicios por trimestre y 640 envíos, una tasa de abandono del 42 por ciento. El formulario tiene 23 campos. El registro de búsquedas muestra que el término «portátil» devuelve ocho elementos y que el término «VPN» no devuelve ninguno, aunque es el término más buscado. De los 140 elementos del catálogo, 38 no tuvieron ninguna solicitud en 12 meses y 21 tienen la revisión vencida. Los cinco elementos principales suponen el 61 por ciento de las solicitudes, y otro 15 por ciento de las solicitudes llega por correo y se registra a mano.

El equipo hace cuatro cambios. Recorta el formulario de nuevas incorporaciones a nueve campos usando datos que el sistema de RR. HH. ya tiene. Añade un artículo sobre VPN y un elemento con sinónimos. Fusiona los ocho elementos de portátiles en dos. Y retira 19 de los elementos sin uso con una nota a los responsables. Cambia además cómo se lee el informe mensual: la cobertura se muestra con la tasa de abandono y la pregunta de encuesta «¿cuán fácil fue conseguir lo que necesitaba?». Tres meses después, el abandono del elemento de nuevas incorporaciones baja al 24 por ciento, la cobertura del portal es del 74 por ciento y la valoración de esfuerzo de las oficinas regionales sube. El director pregunta por qué bajó la cobertura. La jefa de gestión de servicios explica que antes las solicitudes por correo se cerraban a la fuerza, y que el número más bajo es más honesto y la experiencia es mejor. El registro de decisiones anota que el objetivo se sustituye por una dirección: reducir el abandono y subir la valoración de esfuerzo, con la cobertura revisada pero sin objetivo.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata el catálogo como una lista de pendientes que se refina con sus usuarios y retira los elementos que nadie usa. La precaución es que un objetivo de número de elementos del catálogo añade desorden.

### IA

La búsqueda y los asistentes de IA pueden cambiar cómo encuentra la gente los servicios, lo que mueve las cifras de adopción y abandono. Empareja el éxito de la búsqueda con la tasa de abandono y con la proporción de sugerencias de la IA que se aceptaron y se completaron. La precaución es que un modelo puede recomendar un servicio que la persona no puede solicitar, así que comprueba las reglas de elegibilidad.

### Automatización

Capta automáticamente los eventos de búsqueda, consulta y solicitud, y marca los elementos obsoletos del catálogo para una decisión humana. Mide la automatización del cumplimiento por su tasa de fallos. La precaución es que una limpieza automatizada que elimina elementos puede esconder servicios que la gente usa poco pero necesita.

### Analítica

Muestra la adopción y el abandono por elemento del catálogo con recuentos, y la concentración de solicitudes. La decisión a la que informa es qué elementos rediseñar o retirar. La precaución es que los elementos de poco volumen tienen tasas ruidosas.

## Perspectiva sectorial

**Startup.** A menudo no hay catálogo. Basta una sencilla página de «cómo conseguir X» y un canal compartido. Observa lo que la gente pide y convierte las cinco solicitudes principales en guías breves. Mide la adopción de las herramientas internas preguntando a los usuarios y deja de lado los embudos formales.

**Pequeña empresa.** Pocas personas prestan la TI y las solicitudes llegan por todos los canales. Un catálogo modesto de 10 a 20 elementos cubre la mayoría de las necesidades. No fuerces a los usuarios a un portal que cuesta más de mantener que las solicitudes que gestiona. Revisa la lista dos veces al año.

**Gran empresa.** La escala te da un catálogo lo bastante grande para necesitar gobernanza: responsables, fechas de revisión y una taxonomía. Segmenta la adopción por unidad de negocio y región, y evita imposiciones para toda la empresa que ignoren las necesidades locales. Cuidado con los proveedores cuyos elementos de catálogo se cuentan pero no se usan.

**Gobierno y sector público.** Los servicios llegan al público además de al personal, con deberes de accesibilidad, idioma e igualdad de acceso. Incluye los canales asistidos (teléfono, presencial) en las medidas para que la adopción digital no esconda la exclusión. Donde las reglas legales o de política exijan un canal, dilo en los informes (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son modestos. Los registros de uso y los datos de solicitudes suelen existir ya. El análisis de embudo y de búsquedas necesita acceso a la analítica del portal, que la mayoría de las plataformas ofrecen. El principal costo de tiempo es la revisión trimestral del catálogo y una mirada mensual a las brechas de búsqueda y a los abandonos, unas pocas horas cada una. Corregir formularios y fusionar elementos cuesta tiempo de diseño y de configuración.

El retorno procede de servicios que se usan, solicitudes que terminan y menos desperdicio en el cumplimiento. Un formulario más corto que reduce el abandono reduce los contactos repetidos y la gestión manual. Podar elementos sin uso reduce el mantenimiento. Construye el caso con tus propios números: tasa de abandono, tiempo de gestión manual por solicitud recibida por correo y costo de mantener un elemento sin uso, antes y después de los cambios. Evita las afirmaciones publicadas sobre el ROI de los portales que no puedas rastrear, ya que dependen de la organización y del método.

## Antipatrones y trampas

- **Contar los lanzamientos como adopción.** Un servicio está adoptado cuando los usuarios previstos completan resultados con él. Mide el uso, no el anuncio.
- **Imponer un canal para subir un número.** Los usuarios lo esquivarán. Mejora el servicio y deja que el número siga.
- **Añadir elementos y no retirar nunca ninguno.** El catálogo se vuelve imposible de buscar. Poda cada trimestre.
- **Mirar solo los totales.** Segmenta por grupo y mira el embudo.
- **Cerrar solicitudes recibidas por correo con una redirección.** Esconde la demanda y molesta a los usuarios. Atiende la solicitud y corrige la ruta.
- **Usar las visitas a páginas como uso.** Cuenta los resultados completados.
- **Tratar el poco uso como un fallo de los usuarios.** Pregunta si el servicio hace falta y es fácil de usar.
- **Dejar que los responsables de los elementos se pierdan.** Asigna responsables y fechas de revisión a cada elemento.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Diseño del catálogo | Lista crecida por peticiones | Existe un catálogo, redacción incoherente | Elementos en lenguaje del usuario con responsables y fechas de revisión | Poda trimestral; taxonomía gestionada | Catálogo compartido entre equipos y proveedores; elementos codiseñados con los usuarios |
| Medición de la adopción | Anécdota | Recuentos de solicitudes por elemento | Adopción definida por usuarios elegibles y resultados completados | Embudos, cohortes y segmentos revisados cada mes | Adopción vinculada a la experiencia y a los resultados entre servicios |
| Mejora | Correcciones ad hoc | Correcciones tras las quejas | Brechas de búsqueda y abandonos revisados cada mes | Correcciones priorizadas y seguidas en una lista de pendientes | Mejora coordinada con los usuarios, con los servicios retirados reportados abiertamente |

## Lista de verificación

- [ ] Cada servicio importante tiene una audiencia prevista escrita y un camino alternativo.
- [ ] La adopción se define como resultados completados por usuarios elegibles.
- [ ] Los elementos del catálogo tienen responsables, descripciones en lenguaje del usuario y fechas de revisión.
- [ ] El embudo está instrumentado para los elementos más solicitados.
- [ ] Las búsquedas sin resultado se revisan cada mes.
- [ ] La adopción y el abandono se segmentan por grupo, con los grupos pequeños suprimidos.
- [ ] Las solicitudes que llegan fuera del catálogo se etiquetan y se cuentan.
- [ ] El catálogo se poda cada trimestre, con los motivos registrados.
- [ ] La adopción se muestra junto a medidas de satisfacción o de esfuerzo.
- [ ] No se fija ningún objetivo de adopción para un equipo o persona individual.

## Prompts de IA

**Analiza un embudo de solicitudes.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Revisa los registros de búsqueda en busca de brechas del catálogo.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Planifica una revisión de poda del catálogo.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Redacta una definición de adopción para un servicio.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de adopción o de catálogo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una nueva entrada de métrica de catálogo tiene su vector de manipulación y su barrera de protección.

## Ideas clave

- Adopción significa que los usuarios previstos completan resultados con un servicio, así que define la audiencia y cuenta las finalizaciones.
- Mide el embudo, las brechas de búsqueda y la retención de usuarios, y segmenta por grupo.
- Compara el servicio con la alternativa que los usuarios tienen hoy.
- Mantén el catálogo pequeño, con responsables y podado cada trimestre.
- No fuerces el uso para subir un número, y empareja la adopción con la satisfacción y el esfuerzo.
- Trata el poco uso como una pregunta sobre la necesidad y la facilidad, no como un fallo de los usuarios.

## Referencias y lecturas complementarias

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
