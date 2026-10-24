# Una hoja de ruta de adopción incremental

**Empieza donde estás, entrega algo útil a un equipo en el primer mes y haz crecer el programa en pasos pequeños que se ganan cada uno el derecho al siguiente.**

## Visión general y motivación

La mayor parte de la orientación sobre métricas describe un estado final: un conjunto completo de medidas, un almacén de datos limpio, un panel para cada audiencia, una cultura de evidencia. Pocas organizaciones llegan allí por un plan. Llegan, cuando lo hacen, mediante una serie de pasos pequeños y útiles, cada uno de los cuales se pagó a sí mismo antes de que empezara el siguiente. Este tema ofrece una hoja de ruta en ese espíritu: unos primeros 30 días, unos 60 siguientes y otros 90 más, que juntos suman aproximadamente 180 días. Los plazos son una forma aproximada y no una promesa. Un equipo pequeño puede ir más rápido, y uno grande o cauto más despacio.

La lógica es la misma lógica de entrega continua que el resto del libro recomienda para los servicios. Entrega pronto una rebanada delgada y funcional. Ponla delante de usuarios reales. Aprende de lo que hacen con ella. Amplía lo que ayudó y abandona lo que no. Un programa de métricas que gasta seis meses en diseñar y lanza un panel completo a una audiencia sorprendida repite el viejo error de la gran versión: mucho esfuerzo, retroalimentación tardía y una alta probabilidad de que el resultado encaje mal. La idea de un [producto mínimo viable](https://en.wikipedia.org/wiki/Minimum_viable_product), la versión más pequeña de algo que entrega valor y genera aprendizaje, se aplica a un programa tanto como a un producto.

Los fines ágiles dan forma a la hoja de ruta de varias maneras. La implicación continua de las partes interesadas significa que las primeras semanas se pasan con las personas que usarán los números y serán medidas por ellos, no en un cuarto trasero. La mejora continua significa que el propio plan se revisa y se cambia a medida que el programa aprende, en el espíritu del [kaizen](https://en.wikipedia.org/wiki/Kaizen), la práctica de la mejora pequeña y constante por parte de todos. La evolución permanente significa que ninguna lista de medidas es definitiva. Un ritmo sostenible significa que la hoja de ruta pide una parte modesta del tiempo de un equipo y que el programa no añade una carga de reportes que pese más que su ayuda. Y construir en torno a individuos motivados significa empezar con voluntarios y con las preguntas que les importan.

La hoja de ruta respeta los demás temas de esta parte. Supone las reglas básicas de confianza del tema de implantación (véase el tema 11.3, Implantar métricas sin sembrar miedo), usa los principios del panel (véase el tema 11.1, Diseño de un panel de métricas de servicio), mantiene delgadas las herramientas hasta que se demuestre el valor (véase el tema 11.2, Panorama de herramientas) y hace seguimiento del progreso con el perfil de madurez del programa (véase el tema 11.4, Modelo de madurez para programas de métricas).

Tres ideas ayudan a anclar el trabajo inicial. Primera, empieza con una línea base. Un [gráfico de ejecución](https://en.wikipedia.org/wiki/Run_chart) de unos meses de datos existentes muestra cómo están las cosas y da a los cambios posteriores algo con lo que compararse. Segunda, comprueba la [calidad de datos](https://en.wikipedia.org/wiki/Data_quality) al principio, ya que las mejoras iniciales más valiosas suelen venir de corregir cómo se registra el trabajo y no de ningún gráfico. Tercera, haz visibles los resultados: un [radiador de información](https://en.wikipedia.org/wiki/Information_radiator), una presentación que muestra información de un vistazo sin que nadie pregunte, ayuda a un equipo a ver sus propios datos y a iniciar conversaciones. Los primeros pasos suelen tomar la forma de un [proyecto piloto](https://en.wikipedia.org/wiki/Pilot_project) con participantes dispuestos, seguido de extender lo que funcionó como [gestión del cambio](https://en.wikipedia.org/wiki/Change_management) en la organización más amplia (véase el tema 9.6, Métricas de cambio organizacional y adopción).

Ninguna hoja de ruta encaja con todas las organizaciones. El plan siguiente es un punto de partida para que lo adapten las personas que lo llevarán a cabo.

## Principios clave

- **Empieza donde estás.** Usa los datos, las herramientas y los hábitos que tienes. No esperes a una plataforma nueva.
- **Haz un piloto con voluntarios.** Uno a tres equipos dispuestos, trabajando en preguntas que les importan.
- **Entrega valor en el primer mes.** Algo que ayude a un equipo, no un informe para la dirección.
- **Una rebanada delgada cada vez.** Una fuente, una vista, un puñado de medidas, y luego amplía.
- **Escribe pronto las promesas.** Una carta breve antes de compartir el primer número.
- **Revisa y ajusta.** Comprueba al final de cada etapa qué ayudó, qué perjudicó y qué cambiar.
- **Detén cosas.** Retira las medidas y los informes que nadie usa a medida que llegan los nuevos.
- **No te saltes la confianza.** Avanzar rápido en herramientas dejando atrás la confianza produce distorsión.

## Definiciones de métricas

Las medidas siguientes hacen seguimiento del progreso de la propia adopción. Son para el equipo del programa y los patrocinadores y se leen como señales, no como objetivos. Evitan los recuentos de paneles o de informes, que premiarían la actividad.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo hasta el primer resultado útil | Tiempo transcurrido desde el inicio del programa hasta la primera medida que un equipo piloto dice que le ayudó a hacer un cambio | días desde el arranque hasta el primer uso útil confirmado por un equipo | días | Registro del programa; confirmación del equipo | Mejora continua | Entrega temprana y continua de valor | Una vez, luego por cada equipo nuevo |
| Equipos que usan activamente las medidas | Proporción de equipos invitados que usaron sus medidas en una revisión en el periodo, según su propio relato | equipos que usaron medidas en una revisión / equipos invitados | porcentaje | Confirmación de los equipos; notas de revisión | Gestión del cambio organizativo | Implicación continua de las partes interesadas | Mensual |
| Mejoras atribuidas a las medidas | Número de cambios que hicieron los equipos y que atribuyen, con motivos, a lo que mostró una medida | recuento de cambios reportados por los equipos con un vínculo declarado con una medida | recuento | Registro de mejoras | Mejora continua | Experimentos basados en la evidencia | Trimestral |
| Medidas e informes retirados | Medidas o informes detenidos porque dejaron de informar decisiones | recuento de retirados por trimestre | recuento | Registro de cambios del catálogo | Mejora continua | Evolución permanente | Trimestral |
| Cobertura de la línea base | Proporción de medidas acordadas que tienen una línea base registrada de al menos unos meses | medidas con una línea base / medidas acordadas | porcentaje | Catálogo de métricas | Gestión de niveles de servicio; mejora continua | Evidencia sobre opinión | Trimestral |
| Proporción de esfuerzo del programa | Proporción del tiempo de los equipos participantes dedicada a tareas de medición | horas de recogida, reporte y revisión / horas totales del equipo, según estimación | porcentaje | Estimaciones de tiempo de los equipos | Mejora continua | Ritmo sostenible | Trimestral |
| Compleción de las revisiones de etapa | Proporción de revisiones de etapa planificadas que se celebraron con los equipos, con cambios registrados | revisiones celebradas con cambios registrados / revisiones planificadas | porcentaje | Registros del programa | Mejora continua | Reflexión regular | Por etapa |

El tiempo hasta el primer resultado útil se mide según el relato del propio equipo piloto y no según el del programa. Los equipos que usan activamente las medidas se cuentan por lo que dicen los equipos, y no por los inicios de sesión. Las mejoras atribuidas a las medidas son un recuento de vínculos declarados y no un objetivo, ya que un objetivo produciría vínculos inventados. La proporción de esfuerzo del programa debe seguir siendo pequeña, y un aumento es una advertencia.

## Recomendaciones

### Días 1 a 30: escucha, acuerda y entrega una cosa útil

**1. Encuentra un patrocinador y unos pocos voluntarios.** Pide a un líder sénior que patrocine el programa y firme una carta breve. Invita a uno a tres equipos curiosos y respetados. Explica que el fin es ayudarles a ver su propio trabajo y a mejorarlo, y que los datos no se usarán para clasificar ni evaluar a individuos (véase el tema 11.3, Implantar métricas sin sembrar miedo).

**2. Haz las preguntas.** Reúnete una hora con cada equipo piloto. Pregunta qué los frena, qué los sorprende y qué desearían saber. Anota las preguntas. Elige de este libro de tres a cinco medidas que hablen de esas preguntas, cada una con una barrera de protección compañera (véase el tema 1.3, Resultados sobre producción: elegir qué medir).

**3. Mira los datos que ya tienes.** Extrae unos meses de historial de los sistemas de registro y traza gráficos de ejecución. Comprueba con honestidad la calidad de los datos: campos que faltan, categorías cambiadas, registros creados después del hecho. Corrige la captura en el origen donde sea barato. En esta etapa basta una sencilla hoja de cálculo (véase el tema 1.5, Fuentes de datos e instrumentación).

**4. Entrega una cosa útil.** Al final del primer mes, da a cada equipo piloto una pequeña vista de sus propios datos con una definición para cada medida y celebra una conversación de revisión. Busca un cambio que los datos sugieran, como quitar un paso de espera, y ayuda al equipo a probarlo. El primer resultado útil importa más que una herramienta pulida.

### Días 31 a 90: aprende, amplía y hazlo rutina

**5. Celebra la primera revisión con los equipos piloto.** Pregunta qué ayudó, qué confundió, qué pareció arriesgado y qué cambiarían. Revisa las medidas, las definiciones y la carta. Escucha en especial las señales de miedo o de manipulación. Comparte una breve historia de lo que cambió, contada por el equipo.

**6. Automatiza el camino delgado.** Donde el trabajo manual sea pesado, automatiza los uno o dos flujos que más importan, con comprobaciones de frescura y de conciliación con el origen. Mantén las definiciones en un catálogo llano y portable. No compres aún una plataforma salvo que la prueba haya mostrado que las herramientas existentes no pueden hacer el trabajo (véase el tema 11.2, Panorama de herramientas).

**7. Establece un ritmo de revisión.** Celebra una breve revisión mensual en cada equipo piloto que mire las tendencias, registre las decisiones y anote los eventos. Incluye la posibilidad de decir «sin acción». Añade una mirada trimestral a todo el programa con los patrocinadores, usando vistas agregadas y comentarios de los equipos.

**8. Invita a la siguiente oleada.** Ofrece el enfoque a más equipos, guiados por las historias de los equipos piloto. Deja que cada equipo nuevo elija sus medidas de un menú, con un pequeño núcleo común. Mantén sostenible el ritmo: unos pocos equipos cada vez, con el apoyo de los equipos piloto y de la responsable del programa.

### Días 91 a 180: refuerza, equilibra y prepárate para el traspaso

**9. Diseña las vistas de audiencia.** Con la audiencia, diseña las vistas del responsable de servicio y del liderazgo descritas en el tema del panel, usando definiciones compartidas y los comentarios de los equipos (véase el tema 11.1, Diseño de un panel de métricas de servicio). Mantén pequeña cada vista. Retira los informes más antiguos que sustituyen.

**10. Añade equilibrio y resultados.** Amplía las medidas piloto a un conjunto equilibrado que incluya calidad, fiabilidad, experiencia y costo, con resultados junto a la actividad (véase el tema 6.5, Realización de valor y resultados de negocio). Comprueba cada medida nueva en busca de su vector de manipulación y de su barrera de protección antes de mostrarla.

**11. Evalúa el programa.** Ejecuta la autoevaluación del tema del modelo de madurez con cada equipo participante, reporta el perfil y los temas y elige uno o dos siguientes pasos en la dimensión que limita a las demás (véase el tema 11.4, Modelo de madurez para programas de métricas). Cuenta lo que has retirado además de lo que has añadido.

**12. Decide qué viene a continuación.** En la revisión de los 180 días, con los equipos y los patrocinadores, decide si continuar, ajustar o parar. Anota lo que ha hecho el programa, con qué esfuerzo y qué ha cambiado en los servicios. Elige la siguiente etapa: más equipos, herramientas más profundas, vínculos con las medidas financieras o de clientes, o consolidación. Anota la decisión y los motivos.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tiempo hasta el primer resultado útil | Declarar útil un cambio trivial; precipitar una pieza de escaparate | Preguntar al equipo qué cambió; comprobar que el cambio persistió |
| Equipos que usan activamente las medidas | Revisiones celebradas para marcar una casilla; reclamar un uso que no ocurrió | Pedir la decisión tomada; muestrear notas de revisión; hablar con los equipos |
| Mejoras atribuidas a las medidas | Inventar vínculos para alcanzar un recuento; reclamar mérito por cambios no relacionados | Mantenerlo descriptivo; pedir al equipo su razonamiento; aceptar los vínculos inciertos como tales |
| Medidas e informes retirados | Retirar medidas incómodas; retirar y reintroducir con otros nombres | Revisar la lista de retirados en busca de tendencias desfavorables; exigir un motivo declarado |
| Cobertura de la línea base | Fabricar historial; usar un periodo que halague los resultados posteriores | Anotar la fuente y el periodo; conservar los datos en bruto; elegir las líneas base antes de los cambios |
| Proporción de esfuerzo del programa | Infravalorar el esfuerzo; trasladar trabajo a personas ajenas al recuento | Preguntar a las personas que hacen el trabajo; comparar con las horas extra de fin de ciclo |
| Compleción de las revisiones de etapa | Revisiones cortas y de trámite; registrar cambios que nunca ocurren | Comprobar que los cambios se llevan a cabo; preguntar a los equipos si la revisión mereció su tiempo |

Una lectura sana muestra un primer resultado útil en el primer o segundo mes, equipos que usan las medidas porque les resultan útiles, un puñado de cambios atribuidos, informes retirados junto a los nuevos, una proporción de esfuerzo modesta y estable y revisiones de etapa que llevan a cambios reales en el plan.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Piloto con voluntarios | Confianza; historias reales | Inicio más lento; sesgo de selección |
| Implantación en todos los equipos a la vez | Cobertura rápida | Resistencia; distorsión |
| Primero hojas de cálculo | Rápido; bajo costo; aprendizaje | Frágil; esfuerzo manual |
| Primero la plataforma | Pulido; escala | Costo; mal ajuste antes de que las preguntas estén claras |
| Pocas medidas por equipo | Foco; poca carga | Puede perder áreas importantes |
| Muchas medidas a la vez | Amplitud | Sobrecarga; dispersión |
| Plan fijo de 180 días | Claridad para los patrocinadores | Rígido; ignora lo que se aprende |
| Revisiones de etapa que cambian el plan | Aprendizaje; ajuste | Menos predecible para los patrocinadores |

La respuesta en prosa es empezar con voluntarios y hojas de cálculo, ampliar a medida que se demuestre el valor, dar a los patrocinadores una forma clara y puntos de revisión y permitir que el plan cambie.

## Preguntas para debatir con tu equipo

**1. ¿Qué pregunta nos gustaría poder responder este mes sobre nuestro trabajo?**
Recojan preguntas de todos. Elijan la que más importe y que pudiera responderse con datos que ya tenemos. Acuerden qué aspecto tendría una respuesta útil.

**2. ¿Qué medimos ya y quién lo mira?**
Enumeren los informes existentes y sus audiencias. Marquen los que nadie usa. Decidan cuáles retirar para dejar sitio a los nuevos.

**3. ¿Qué nos haría estar dispuestos a probar esto durante un mes?**
Escuchen las condiciones: una carta, voz en las medidas, tiempo limitado. Acuérdenlas con el patrocinador antes de empezar.

**4. ¿Qué pequeño cambio podrían sugerir los primeros datos?**
Miren juntos unos meses de historial. Nombren un posible cambio y un resultado esperado. Acuerden cómo sabremos si ayudó.

**5. ¿Cuánto de nuestro tiempo podemos dar a esto sin perjudicar el trabajo?**
Estimen en horas por mes. Acuerden un límite y revísenlo en la primera revisión de etapa.

**6. ¿Cuándo deberíamos parar o cambiar el plan?**
Describan señales: ningún resultado útil, miedo creciente, esfuerzo pesado. Acuerden quién decide y cómo se registrará la decisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos piloto cargan con el riesgo inicial y dan la prueba inicial. Deben pedir la carta, elegir sus propias medidas, usar las primeras vistas en sus propias revisiones y reportar con honestidad lo que ayudó y lo que no. Se benefician cuando el primer resultado quita un obstáculo real.

### Equipos de servicio y de operaciones

Los equipos de operaciones aportan gran parte de los datos y a menudo tienen la mayor carga. Deben ayudar a evaluar la calidad de los datos, señalar dónde una medida premiaría el comportamiento equivocado y proteger el tiempo para el trabajo de guardia y de incidentes. Su ritmo sostenible es una restricción fija del plan.

### Liderazgo y gobernanza

Los líderes patrocinan, firman la carta y protegen el programa del mal uso. Deben aceptar un comienzo modesto, pedir resultados e historias en lugar de recuentos de paneles, evitar pedir clasificaciones y dejar que el plan cambie a medida que el programa aprende. Deben juzgarlo por las decisiones que mejoraron.

### Clientes y usuarios

Los clientes y los usuarios ganan cuando el programa lleva a mejores servicios. Pueden participar en la elección de medidas de experiencia y en la revisión de lo que se reúne sobre ellos. Deben ver cambios que nazcan de su retroalimentación.

## En la práctica: un ejemplo de gestión de servicios

Una autoridad de transporte público mediana tiene 12 equipos entre servicios digitales, tecnología de operaciones y un centro de servicios. Un nuevo director de sistemas de información quiere «un programa de métricas en seis meses». Un intento anterior compró una plataforma y produjo paneles que pocos abrieron. Las cifras siguientes son ilustrativas.

La jefa de mejora del servicio propone una hoja de ruta de 180 días con revisiones de etapa en los días 30, 90 y 180. En la primera semana se reúne con el director de sistemas de información, que firma una carta de una página, e invita a tres equipos voluntarios: el centro de servicios, un equipo de información al pasajero y un equipo de operaciones de infraestructura. En sesiones de una hora cada equipo expone sus preguntas. El centro de servicios quiere saber por qué vuelven los mismos problemas de clientes. El equipo de información al pasajero quiere saber si sus cambios rompen cosas. El equipo de infraestructura quiere saber cuánto de su tiempo se va en trabajo no planificado.

Para cada equipo elige de tres a cinco medidas de este libro, con barreras de protección, y construye gráficos de ejecución en una hoja de cálculo compartida con los cinco meses anteriores de datos. La comprobación de datos descubre que el 27 por ciento de los registros de cambios del equipo de información al pasajero se creó después del despliegue y que las categorías del centro de servicios se habían reorganizado a mitad del periodo. Corregir el hábito de entrada y asignar las categorías lleva dos semanas. En el día 27 el centro de servicios ve que el 19 por ciento de sus contactos eran retornos en una semana, concentrados en dos categorías vinculadas a una página de horarios confusa. El equipo trabaja con el de información al pasajero para cambiar la página. El centro de servicios lo confirma como el primer resultado útil, en el día 27.

En la revisión del día 30 los equipos piden definiciones más cortas y un número menor de gráficos, y uno pregunta si los datos se usarían en sus evaluaciones anuales. Se aclara la carta para decir que no. Entre los días 31 y 90, la jefa automatiza dos flujos, establece una revisión mensual en cada equipo que registra decisiones e invita a cuatro equipos más en virtud de las historias del piloto. Los equipos que usan activamente las medidas son 7 de 7 invitados. En la revisión del día 90, los equipos reportan cinco cambios que atribuyen a sus medidas. El programa ha retirado tres viejos informes semanales. El esfuerzo se estima en el 3 por ciento del tiempo de los equipos. Entre los días 91 y 180, la jefa diseña vistas del responsable de servicio y del liderazgo con esas audiencias, añade medidas de experiencia y de costo al conjunto equilibrado y ejecuta la autoevaluación: la mayoría de los equipos están en el Nivel 2 en uso en las decisiones y en el 3 en confianza y seguridad, y el siguiente paso elegido es un registro de decisiones en cada equipo. En el día 180 el director de sistemas de información pide una clasificación de los 12 equipos por su madurez. La jefa ofrece el perfil agregado y los temas, explica la carta y la petición se retira. Los patrocinadores acuerdan extender el programa a los cinco equipos restantes durante los dos trimestres siguientes, siempre de forma voluntaria.

## Agilidad, IA, automatización y analítica

### Agilidad

Entrega algo útil a un equipo en el primer mes y crece en pasos pequeños que se ganan cada uno el siguiente, con el mismo espíritu de entrega continua que los servicios que se miden. La precaución es que una hoja de ruta fija con fechas puede dirigir el programa cuando el aprendizaje dice que hay que cambiar de rumbo.

### IA

Decide pronto dónde pertenece la IA en el programa: asistentes de IA para el análisis y el reporte, medidas del uso de la IA y gobernanza. Añádelos en pasos pequeños y revisados, con una persona que compruebe la salida de la IA usada en un informe. La precaución es que añadir pronto funciones de IA puede inflar la producción del programa antes de que se demuestre su valor.

### Automatización

Automatiza la recogida de datos de las primeras medidas, para que el esfuerzo vaya a la interpretación, y mide la proporción de esfuerzo del propio programa. La precaución es que automatizar demasiadas medidas a la vez crea una carga de mantenimiento que el programa no puede soportar.

### Analítica

Haz seguimiento del tiempo hasta un primer resultado útil y de las mejoras atribuidas a las medidas y revisa la hoja de ruta frente a ellos. La decisión a la que informa es si ampliar, mantener o parar. La precaución es que las mejoras son difíciles de atribuir a una medida, así que describe la evidencia con honestidad.

## Perspectiva sectorial

**Startup.** Comprime la hoja de ruta. En dos semanas, acuerda tres preguntas y dos o tres medidas y míralas juntos cada semana o cada quince días. Usa lo que ya tienes. Vuelve a revisarlo tras un trimestre. Una startup que espere a construir herramientas perderá el hábito de mirar.

**Pequeña empresa.** Los primeros 30 días pueden ser una sola conversación, una lista de preguntas de una página, una hoja de cálculo y un cambio. Las etapas siguientes implican una mirada mensual regular. El principal riesgo es que la persona que lo montó se convierta en la única que lo entiende, así que escribe qué significa cada medida.

**Gran empresa.** Usa oleadas de voluntarios, un pequeño equipo central que apoye y no posea las medidas, definiciones compartidas y revisiones de etapa con los patrocinadores. Resiste una única fecha global. Espera dedicar la primera etapa a corregir la captura de datos y planifica la coordinación con seguridad, privacidad y comités de empresa o representantes del personal donde existan.

**Gobierno y sector público.** La consulta con los representantes del personal y una comunicación clara a los órganos de supervisión forman parte del trabajo inicial. Los ciclos de contratación suelen favorecer empezar con herramientas que ya se poseen. Mantén separado el reporte obligatorio de las medidas de mejora y documenta las decisiones para la auditoría (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos de los primeros 180 días son sobre todo tiempo de las personas: la responsable del programa, un pequeño esfuerzo de análisis, una parte del tiempo de los equipos piloto y la atención de los patrocinadores. Los costos de herramientas pueden ser bajos o nulos en las primeras etapas. El costo mayor es el de equivocarse en los primeros pasos, por ejemplo lanzando medidas sin confianza.

Los retornos aparecen pronto si el primer paso está bien elegido: un cambio que sugirieron los datos, informes que se retiraron, menos disputas sobre los números y equipos que piden más. Construye el caso con tu propio registro: los días hasta el primer resultado útil, los cambios que los equipos atribuyen a las medidas, las horas ahorradas en informes retirados y el esfuerzo gastado. Evita citar cifras externas sobre los retornos de la analítica sin una fuente rastreable y una pertinencia para tu entorno. La afirmación creíble es modesta y local (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **El lanzamiento de golpe.** Meses de diseño y luego una sorpresa. Entrega pronto una rebanada delgada.
- **Primero la plataforma.** Las herramientas llegan antes que las preguntas. Empieza con lo que tienes.
- **Contar paneles.** Se mide la actividad y se ignora el valor. Haz seguimiento de decisiones y cambios.
- **Saltarse la carta.** El miedo llena el hueco. Escribe las promesas antes de mostrar el primer número.
- **Demasiados equipos a la vez.** El apoyo se derrumba. Extiende en oleadas pequeñas.
- **No detener nunca nada.** Los viejos informes siguen junto a los nuevos. Retira a medida que añades.
- **Un plan fijo defendido frente a la evidencia.** El plan debe cambiar a medida que aprendes.
- **Rendirse tras el primer fallo.** Los primeros intentos enseñan. Revisa, ajusta y vuelve a intentarlo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Inicio y piloto | Sin plan; informes ad hoc | Equipos interesados prueban medidas por su cuenta | Carta, patrocinador y pilotos voluntarios con un primer resultado útil | El aprendizaje del piloto impulsa los planes de oleadas; tiempo hasta el valor con seguimiento | Los equipos extienden el enfoque entre sí; se suman patrocinadores y socios |
| Ampliación y cadencia | Esfuerzos puntuales | Algunas revisiones regulares | Revisiones mensuales de equipo y revisiones trimestrales del programa | Proporción de esfuerzo, retirada y cambios atribuidos gestionados | Las revisiones se vinculan entre equipos y servicios; la cadencia se adapta a la necesidad |
| Aprendizaje y ajuste | Plan fijo o ausente | Algunas lecciones compartidas | Las revisiones de etapa cambian el plan | Pasos de la hoja de ruta atados al perfil de madurez | El programa mejora continuamente con las contribuciones de todos |

## Lista de verificación

- [ ] Un patrocinador ha firmado una carta breve antes de compartir el primer número.
- [ ] Uno a tres equipos voluntarios han expuesto sus preguntas con sus propias palabras.
- [ ] Existen una línea base de varios meses de datos y una comprobación de calidad de datos para cada medida piloto.
- [ ] Cada equipo piloto tiene una vista pequeña con una definición para cada medida.
- [ ] Se entrega un primer resultado útil, confirmado por el equipo, en el primer o segundo mes.
- [ ] Existe un ritmo de revisión en cada equipo piloto que registra decisiones.
- [ ] Los viejos informes se retiran a medida que los sustituyen las vistas nuevas.
- [ ] El esfuerzo que el programa pide a los equipos se estima y se mantiene pequeño.
- [ ] Las revisiones de etapa en los días 30, 90 y 180 se celebran con los equipos, y el plan cambia como resultado.
- [ ] La siguiente etapa se decide con los equipos y los patrocinadores y se anota con los motivos.

## Prompts de IA

**Redacta un plan de 180 días.**

```text
Draft a 180-day roadmap for introducing a service metrics program in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Elige las primeras medidas.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Ejecuta una comprobación de calidad de datos.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Planifica una revisión de etapa.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para elegir medidas iniciales con sus barreras de protección emparejadas para un equipo piloto.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una hoja de ruta mantiene las medidas a nivel de equipo y lleva un vector de manipulación para cada medida que introduce.

## Ideas clave

- Empieza donde estás, con voluntarios, una carta y los datos y herramientas que ya tienes.
- Entrega un resultado útil a un equipo en el primer o segundo mes.
- Amplía en oleadas pequeñas y retira informes a medida que los sustituyen las vistas nuevas.
- Comprueba pronto la calidad de los datos y corrige la captura en el origen.
- Celebra revisiones de etapa que cambien el plan y mantén pequeño el esfuerzo que se pide a los equipos.
- Decide la siguiente etapa con los equipos y los patrocinadores y anota los motivos.

## Referencias y lecturas complementarias

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
