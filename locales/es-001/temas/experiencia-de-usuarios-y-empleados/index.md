# Experiencia de usuarios y empleados

**Las personas hacen su mejor trabajo cuando las herramientas, los dispositivos y el soporte que las rodean simplemente funcionan, así que mide la fricción que encuentran tus colegas, trata las respuestas como una razón para quitar obstáculos y no conviertas nunca esos datos en vigilancia ni en una clasificación de personas.**

## Visión general y motivación

El quinto principio del Manifiesto Ágil dice que hay que construir los proyectos en torno a individuos motivados, darles el entorno y el apoyo que necesitan y confiar en que harán el trabajo. Para las personas que usan la TI interna, el entorno es el portátil, el inicio de sesión, las herramientas de colaboración, el proceso de acceso y el centro de servicios. Cuando estos son lentos o confusos, las personas motivadas pierden tiempo y buena voluntad, e inventan soluciones provisionales. Medir ese entorno es, por tanto, una forma de apoyar a las personas. No es una forma de vigilarlas.

La [experiencia del empleado](https://en.wikipedia.org/wiki/Employee_experience_management) es la suma de las interacciones de un empleado con su lugar de trabajo a lo largo de su tiempo en la organización. La parte que da forma la TI se llama a veces experiencia digital del empleado, y el [puesto de trabajo digital](https://en.wikipedia.org/wiki/Digital_workplace) es el conjunto de tecnología que la gente usa para trabajar. Los temas anteriores de esta parte cubrieron las encuestas de satisfacción (véase el tema 6.1, Métricas de satisfacción del cliente) y los acuerdos de nivel de experiencia (véase el tema 6.2, Acuerdos de nivel de experiencia). Este tema vuelve la misma atención hacia dentro, hacia los colegas que usan los servicios de TI cada día, incluidos los ingenieros y operadores que los construyen y operan.

Los usuarios internos difieren de los clientes externos en cuatro aspectos que importan para la medición.

- **No pueden irse.** Un empleado no tiene un competidor al que cambiarse, así que el silencio no es satisfacción. Puede significar resignación, o una solución provisional.
- **Son identificables.** En una empresa de unos pocos cientos de personas, un grupo pequeño de respuestas de encuesta puede señalar a una persona. El diseño de la privacidad va primero.
- **Son además colegas.** Unos malos datos de experiencia dañan las relaciones y la moral, y unos buenos datos pueden compartirse abiertamente y actuarse en común.
- **Incluyen a los equipos de entrega y operaciones.** Las herramientas que usan los desarrolladores y el personal del centro de servicios forman parte de la experiencia, y su fricción llega a los usuarios en forma de correcciones más lentas.

Dos temas recorren este tema. El primero es la **fricción**: el esfuerzo, el retraso y la interrupción evitables que se interponen entre una persona y su trabajo. Las interrupciones y la sobrecarga mental cuestan más de lo que sugiere su tiempo de reloj. La idea de la [carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load), la carga sobre la memoria de trabajo, explica por qué un formulario confuso o un reinicio forzado inesperado cuestan más que los minutos que llevan, y la idea de [flujo](https://en.wikipedia.org/wiki/Flow_(psychology)), un estado de concentración absorta, explica por qué proteger el tiempo ininterrumpido importa para el trabajo del conocimiento. El segundo tema es la **ética**: cómo aprender sobre la experiencia sin invadir la privacidad. La tecnología de [monitorización de empleados](https://en.wikipedia.org/wiki/Employee_monitoring) puede medir muchísimo, y la línea entre apoyar y vigilar es fácil de cruzar. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aquí en una forma humana: una puntuación usada para juzgar a las personas les enseña a esconder sus problemas (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide el entorno, no a la persona.** La unidad de análisis es un servicio, un tipo de dispositivo o un grupo, nunca un individuo.
- **Trata la fricción como el enemigo.** El tiempo perdido, la interrupción y la confusión son costos que eliminar.
- **Pregunta, observa y mide.** Combina lo que la gente dice con lo que registran los sistemas y con lo que ves cuando observas el trabajo hecho.
- **Haz de la privacidad un requisito de diseño.** Recoge los mínimos datos que responden a la pregunta, agrega pronto y suprime los grupos pequeños.
- **Incluye a todos.** Las necesidades de accesibilidad, los trabajadores remotos y por turnos y las personas recién incorporadas suelen encontrar la peor experiencia.
- **Protege la concentración.** Planifica los cambios, las actualizaciones y las notificaciones en torno al trabajo de la gente.
- **Di qué recoges y por qué.** La transparencia genera la confianza de la que dependen las respuestas honestas.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasa de preparación el primer día | Proporción de personas recién incorporadas cuyos dispositivos, cuentas y accesos están completos y funcionando a su hora de inicio | nuevas incorporaciones con todos los elementos acordados funcionando al inicio / nuevas incorporaciones del periodo | porcentaje | Solicitudes de incorporación, sistema de identidad, confirmación de la persona recién incorporada | Gestión de solicitudes de servicio; gestión del catálogo de servicios | Acuerdo de trabajo del equipo para la incorporación | Mensual |
| Tiempo hasta ser productivo | Tiempo transcurrido desde la fecha de inicio hasta el punto en que una persona recién incorporada tiene todo lo necesario para su primera tarea real | mediana y percentil 85 de los días desde la fecha de inicio hasta la confirmación de la persona recién incorporada y su responsable | días | Seguimiento de la incorporación; breve pregunta de confirmación | Gestión de solicitudes de servicio; mejora continua | Tiempo que tarda un nuevo miembro del equipo en hacer un primer cambio | Mensual |
| Prevalencia de soluciones provisionales | Proporción del personal encuestado que usa herramientas no aprobadas o pasos manuales para esquivar un servicio oficial | encuestados que reportan una solución provisional para el servicio / encuestados válidos | porcentaje | Encuesta de pulso; informes de descubrimiento de herramientas no autorizadas | Gestión de niveles de servicio; mejora continua | Impedimentos planteados en las reuniones diarias del equipo | Trimestral |
| Minutos de interrupción forzada | Tiempo que se interrumpe a las personas por acciones planificadas de TI como reinicios forzados, actualizaciones y avisos de inicio de sesión | total de minutos de interrupción causados por acciones planificadas / usuarios activos del grupo | minutos por persona y mes | Registros de gestión de puestos finales, agregados por grupo | Habilitación de cambios; gestión de versiones y despliegues | Tiempo de trabajo sin interrupciones | Mensual |
| Tiempo de resolución de solicitudes de accesibilidad | Tiempo para resolver solicitudes relacionadas con necesidades de accesibilidad | mediana y percentil 85 de las horas desde la solicitud hasta una solución confirmada que funciona | horas | Sistema de solicitudes con una etiqueta de accesibilidad | Gestión de solicitudes de servicio; gestión de incidentes | Definición inclusiva de terminado | Mensual |
| Puntuación de pulso de una herramienta | Valoración de una herramienta o servicio con nombre en una breve pregunta acordada | valoración media o proporción favorable de las respuestas válidas, por herramienta | puntos de escala o porcentaje | Encuesta de pulso, rotando las herramientas | Gestión de niveles de servicio; mejora continua | Opinión de los miembros del equipo sobre sus herramientas | Trimestral |
| Cumplimiento de las salvaguardas de privacidad | Proporción de informes de experiencia que cumplen las reglas de supresión y agregación | informes que cumplen las reglas / informes publicados | porcentaje | Revisión de los informes publicados frente a las reglas de privacidad | Gestión de la seguridad de la información; medición y elaboración de informes | Acuerdo de trabajo sobre el uso de los datos | Trimestral |

Define el grupo y el periodo de cada medida. La preparación el primer día cuenta a una persona recién incorporada como preparada solo cuando funciona cada elemento de una lista acordada, y la lista se anota en el registro de métricas. Los minutos de interrupción forzada se calculan a partir de totales de grupo, y el nivel más bajo mostrado es un grupo de al menos diez personas. El cumplimiento de las salvaguardas de privacidad se aplica al propio programa de experiencia, lo que lo convierte en una barrera de protección de las otras seis.

## Recomendaciones

### Parte de las personas y de su trabajo

**1. Recorre un día con tus colegas.** Siéntate con unas pocas personas de roles, ubicaciones y turnos distintos y obsérvalas trabajar. Anota cada espera, cada solución provisional y cada momento de confusión. Pregunta qué arreglarían primero. La observación encuentra problemas que las encuestas pasan por alto, porque la gente deja de notar la fricción con la que ha aprendido a vivir. Acuerda de antemano qué vas a registrar y cómo lo usarás.

**2. Cartografía los momentos que importan.** Para el personal, los momentos de mayor impacto suelen ser el primer día, el fallo de un portátil, un traslado entre equipos, una solicitud de acceso y la salida de la organización. Anota los pasos de cada uno y quién los posee. El mapa muestra los traspasos entre equipos donde se esconde el retraso, lo que enlaza con las medidas de colaboración de una parte posterior (véase el tema 9.3, Métricas de colaboración y traspasos).

**3. Incluye a las personas de los márgenes.** El personal con necesidades de accesibilidad, los trabajadores por turnos, el personal remoto y de campo y los contratistas suelen ser invisibles en los promedios. Segmenta los resultados donde sea seguro hacerlo y revisa por separado al grupo peor atendido. Trata la accesibilidad como un requisito de primer orden. Las normas de [accesibilidad web](https://en.wikipedia.org/wiki/Web_accessibility), como las Pautas de Accesibilidad para el Contenido Web, dan una lista de verificación concreta para las herramientas internas, y los problemas de accesibilidad son una cuestión legal y ética en muchas jurisdicciones.

### Mide con cuidado

**4. Combina tres tipos de evidencia.** Usa preguntas de pulso breves sobre herramientas y momentos con nombre, medidas del sistema como los minutos de interrupción forzada y la finalización de la incorporación, y conversaciones. Cuando dos tipos discrepan, investiga. Una herramienta con un tiempo de actividad excelente y una mala puntuación de pulso te está diciendo algo que el tiempo de actividad no puede (véase el tema 5.3, Métricas de disponibilidad).

**5. Pregunta por una herramienta, no por la TI.** «¿Cuán fácil es encontrar un documento en el sistema de archivos?» obtiene mejores respuestas que «¿Qué tal la TI?». Rota las herramientas en el pulso para que nadie reciba una pregunta más de una o dos veces por trimestre, y mantén estable la redacción para que las tendencias signifiquen algo.

**6. Cuenta los minutos que pierde la gente.** El tiempo perdido es más fácil de entender que una puntuación. Estímalo a partir del sistema donde puedas, por ejemplo los avisos de reinicio y los fallos de inicio de sesión, y pide a la gente una cifra aproximada donde no puedas. Preséntalo por persona y mes para un grupo, con el método, y evita multiplicar por el salario para obtener un número dramático salvo que declares también los supuestos.

**7. Minimiza y agrega.** Sigue el principio de [minimización de datos](https://en.wikipedia.org/wiki/Data_minimization): recoge solo lo que necesitas, consérvalo solo el tiempo que lo necesites y agrega lo antes posible. Donde los datos puedan identificar a alguien, la [seudonimización](https://en.wikipedia.org/wiki/Pseudonymization) reduce el riesgo. Reglas como la [k-anonimidad](https://en.wikipedia.org/wiki/K-anonymity), que exige que cada grupo reportado contenga al menos k personas, dan una forma sencilla de suprimir las celdas pequeñas. Declara tu k en el registro.

**8. Traza una línea clara contra la vigilancia.** No uses los datos de experiencia, la telemetría de los puestos finales ni el sentimiento para evaluar a individuos, para detectar quién está «menos implicado» ni para alimentar evaluaciones del rendimiento. Dilo por escrito y deja que los representantes del personal o un comité de empresa revisen el plan de datos donde existan. Consulta la ley local y a especialistas en privacidad antes de recoger cualquier dato de comportamiento. La confianza, una vez perdida, vuelve menos honesta cada encuesta posterior.

### Actúa sobre lo que aprendes

**9. Corrige primero la mayor fricción y dilo.** Ordena los problemas por tiempo perdido, número de personas y gravedad para las personas afectadas, y financia los principales. Di a la gente qué corregiste y qué decidiste no corregir, con los motivos. Una corrección visible es el mayor estímulo para seguir reportando problemas.

**10. Planifica las interrupciones en torno al trabajo.** Muchas interrupciones forzadas son evitables. Programa las actualizaciones fuera del tiempo de concentración, ofrece aplazamiento dentro de unos límites y agrupa los reinicios. Revisa los minutos de interrupción forzada junto a los objetivos de seguridad para que la compensación sea explícita, ya que algunas actualizaciones deben hacerse rápido (véase el tema 4.3, Métricas de habilitación de cambios).

**11. Trata las soluciones provisionales como retroalimentación de diseño.** Cuando la gente use una herramienta no aprobada, pregunta qué hace mejor. La respuesta es un requisito que la herramienta oficial no cubrió. La [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT) conlleva riesgos reales de seguridad y costo, y una respuesta punitiva la empuja a la clandestinidad. Prefiere adoptar la buena idea, o explicar el riesgo y ofrecer una alternativa segura.

**12. Comparte el programa con las personas a las que sirve.** Muestra los resultados al personal, celebra una breve revisión con representantes y pregunta qué cambiar el trimestre siguiente. El programa es una forma de colaboración continua entre la TI y sus usuarios, y la mejora continua del entorno es el resultado. Vincúlalo con las medidas de personas de la parte siguiente (véase el tema 9.2, Métricas de satisfacción y bienestar).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Tasa de preparación el primer día | Acortar la lista acordada; marcar elementos como listos antes de que funcionen; retrasar la fecha oficial de inicio | Lista escrita en el registro; confirmación de la persona recién incorporada; tiempo hasta ser productivo |
| Tiempo hasta ser productivo | Marcar el inicio del reloj más tarde; cerrar pronto el registro de incorporación | Definición del reloj en el registro; confirman tanto el responsable como la persona recién incorporada |
| Prevalencia de soluciones provisionales | Desalentar las respuestas honestas insinuando consecuencias; preguntar solo a los grupos satisfechos | Declaración de anonimato; tasa de respuesta y composición de los encuestados; cumplimiento de las salvaguardas de privacidad |
| Minutos de interrupción forzada | Contar solo algunos tipos de interrupción; trasladar las interrupciones al grupo que no se mide | Definir todos los tipos de interrupción planificada; reportar por grupo incluyendo al personal remoto y por turnos |
| Tiempo de resolución de solicitudes de accesibilidad | Cerrar solicitudes con una corrección parcial; etiquetar solicitudes como otra cosa para evitar el reloj | Confirmación del solicitante de que la solución funciona; revisión de las solicitudes sin etiquetar |
| Puntuación de pulso de una herramienta | Encuestar solo a usuarios contentos; cambiar la pregunta; adiestrar al personal para responder bien | Registro de estabilidad de la redacción; tasa de respuesta y composición; leer los comentarios |
| Cumplimiento de las salvaguardas de privacidad | Reportar el cumplimiento sin revisión independiente; ensanchar los grupos para esconder problemas | Revisión periódica por alguien ajeno al equipo; publicar las reglas (el valor de k y la supresión) |

Una lectura sana es personas recién incorporadas que pueden trabajar su primer día, un recuento decreciente de interrupciones forzadas, soluciones provisionales que llevan a mejores herramientas oficiales y personal que dice confiar en el programa porque ha visto lo que hace con sus respuestas.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Encuestas de pulso | Voz directa, baratas, fáciles de repetir | Fatiga de encuestas; sesgo de respuesta |
| Telemetría del sistema | Objetiva, continua, sin carga de encuesta | Riesgo para la privacidad; muestra eventos pero no sentimientos |
| Observación y entrevistas | Encuentra la fricción oculta; construye relaciones | Consumen tiempo; muestras pequeñas |
| Datos de grano fino | Diagnóstico preciso | Identifican a personas; erosionan la confianza |
| Datos agregados con supresión | Seguros de compartir y de actuar sobre ellos | Menos detalle; esconden a los grupos pequeños que pueden estar sufriendo |
| Controles estrictos en los dispositivos | Seguridad y cumplimiento | Más interrupciones forzadas; más soluciones provisionales |

La respuesta en prosa es usar los tres tipos de evidencia a nivel de grupo, conservar el detalle solo el tiempo que un diagnóstico lo necesite y tratar la seguridad y la experiencia como una compensación que se discute abiertamente. El fin es un lugar de trabajo en el que las personas motivadas obtienen lo que necesitan con poco esfuerzo.

## Preguntas para debatir con tu equipo

**1. ¿Cómo es el primer día para un colega nuevo y cómo lo sabemos?**
Pide al equipo que trace el camino desde la oferta hasta la primera tarea real. ¿Quién hace qué y dónde espera? Pide a alguien recién incorporado que se una a la conversación. El facilitador debe centrarse en los momentos que dejaron a la persona esperando o avergonzada, y acordar un cambio que mejore el día de la siguiente persona que llegue.

**2. ¿Qué solución provisional usa la gente que preferiríamos que no usara y qué nos dice?**
Enumera las herramientas no oficiales y los pasos manuales que el equipo ha visto. Para cada una, pregunta qué necesidad cubre. La conversación suele encontrar un requisito que el servicio oficial no cubrió. Decidan qué soluciones adoptar, cuáles sustituir por una opción oficial mejor y cuáles prohibir con una explicación.

**3. ¿Cuántos minutos al mes quitan a nuestros colegas nuestras propias acciones?**
Estima los reinicios forzados, las actualizaciones y los avisos de una persona típica. Compara con lo que diría un usuario. El facilitador puede preguntar qué cambiaría si se publicara la cifra. Acuerden una interrupción que reducir o reprogramar este trimestre.

**4. ¿Qué datos de los colegas podríamos recoger y qué deberíamos prometer no hacer nunca con ellos?**
Hagan dos listas: lo que es técnicamente posible y lo que el equipo recogerá de verdad. Redacten una breve declaración de propósito y límites. Pidan a un representante del personal que reaccione. La discusión muestra dónde está la línea contra la vigilancia y cómo explicarla.

**5. ¿Quién tiene más dificultades con nuestras herramientas y está en nuestros datos?**
Piensen en necesidades de accesibilidad, trabajadores por turnos, personal remoto y personas nuevas. Comprueben si las encuestas y los registros los alcanzan y si las reglas de grupos pequeños los esconden. Acuerden una forma de escuchar directamente al grupo peor atendido.

**6. ¿Qué corregimos el trimestre pasado por lo que nos dijeron los colegas y se enteraron?**
Enumeren las correcciones y cómo se anunciaron. Si la lista es corta, hablen de qué bloquea la acción: propiedad, financiación o miedo. Acuerden una corrección visible que entregar antes de la próxima encuesta y un mensaje para explicarla.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega son a la vez usuarios y constructores de herramientas internas. Su propia fricción, como las compilaciones lentas, los entornos inestables y los retrasos de acceso, ralentiza todo lo que entregan, y las medidas de este tema también se aplican a ellos. Deben incluir las herramientas internas en la lista de pendientes del producto con un responsable y usuarios, y participar en el pulso y en las revisiones como colegas (véase el tema 9.1, Salud del equipo y experiencia de desarrollo).

### Equipos de servicio y de operaciones

Operaciones y el centro de servicios dan forma a buena parte de la experiencia, y son personal con sus propias herramientas y carga de trabajo. Deben enviar los cambios cuidando la concentración de los usuarios, mantener ágil el canal de accesibilidad y usar las soluciones provisionales como retroalimentación. Deben proteger además a sus propios colegas de ser clasificados por datos de experiencia. El personal de soporte también son individuos motivados.

### Liderazgo y gobernanza

Los líderes fijan la cultura de la medición. Deben pedir fricción eliminada, no puntuaciones elevadas, y financiar las correcciones. Deben proteger por escrito los compromisos de privacidad, resistir las peticiones de usar los datos sobre individuos y aceptar que los controles de seguridad tienen un costo de experiencia que sopesar. La gobernanza debe esperar las reglas de privacidad y su revisión como parte de cualquier informe de experiencia.

### Clientes y usuarios

Las personas que usan la TI interna son las autoras de la experiencia. Merecen un primer día que funcione, herramientas que respeten su concentración, una explicación honesta de lo que se recoge sobre ellas, una forma de excluirse donde sea posible y evidencia de que hablar lleva al cambio. A los colegas con necesidades de accesibilidad debe preguntárseles cómo hacer que el servicio funcione para ellos y no tratarlos como un caso especial.

## En la práctica: un ejemplo de gestión de servicios

El departamento central de TI de una universidad da soporte a 6000 empleados y opera un centro de servicios, un equipo de plataforma y varios equipos de producto. Los números siguientes son ilustrativos.

Una nueva jefa de TI quiere saber por qué persisten las quejas del personal sobre la incorporación cuando los tiempos de resolución del centro de servicios están dentro del objetivo. Pide a la responsable del servicio que pilote un programa de experiencia para las personas recién incorporadas y para la principal herramienta de colaboración, construido con el consejo del personal. La condición del consejo es una promesa escrita de que no se usarán datos sobre individuos, y acepta revisar el plan.

El equipo mide la preparación el primer día y el tiempo hasta ser productivo para las 140 personas incorporadas el trimestre anterior, usando el seguimiento de incorporaciones y una confirmación de una pregunta de la persona recién incorporada y de su responsable. Solo el 46 por ciento de las personas recién incorporadas tenía todos los elementos acordados funcionando el primer día, y el tiempo mediano hasta ser productivo fue de 4 días, con un percentil 85 de 9 días. Las razones, según las entrevistas, son tres solicitudes separadas que esperan cada una a un equipo distinto y un paso de creación de imágenes de portátiles que termina tarde los viernes. Un pulso breve de la herramienta de colaboración, enviado a una décima parte rotativa del personal con un tamaño mínimo de grupo de 10, muestra valoraciones más bajas entre el personal que trabaja por las tardes y los fines de semana. Los registros de los puestos finales, agregados por edificio y turno, muestran un promedio de 38 minutos al mes de avisos de reinicio y actualización forzados, con una cola larga para el personal del turno de noche, que sufre reinicios durante las horas de trabajo porque sus dispositivos se actualizan cuando los demás duermen.

El equipo hace tres cambios. Una única solicitud de incorporación sustituye a las tres, con un responsable con nombre. El paso de creación de imágenes se traslada a una ventana de días laborables. La programación de actualizaciones gana una ventana de aplazamiento atada al horario de trabajo del usuario. Publican las reglas de privacidad en el registro de métricas: un tamaño mínimo de grupo de 10, ningún dato individual en ningún informe y un límite de conservación de seis meses para los registros en bruto. Tres meses después, la preparación el primer día sube al 81 por ciento, el tiempo hasta ser productivo del percentil 85 baja a 5 días y los minutos de interrupción forzada del personal del turno de noche bajan aproximadamente a la mitad. Un responsable pide a la jefa de TI que reporte qué departamentos tienen más quejas, para nombrar equipos de seguimiento. Ella se niega a clasificar departamentos y ofrece compartir los patrones a nivel de grupo y corregir las causas. La decisión se anota en el registro de decisiones, y el consejo pide ampliar el programa a una segunda herramienta.

## Agilidad, IA, automatización y analítica

### Agilidad

Corrige la fricción en pasos pequeños y muestra a la gente lo que cambió, en el espíritu de la mejora continua. La precaución es que encuestar a la gente repetidamente sin acción visible destruye la confianza.

### IA

Los asistentes de IA cambian el trabajo diario de los empleados, así que mide la fricción y el tiempo perdido en las tareas asistidas por IA y empareja el uso con un beneficio reportado por los usuarios. La precaución es que los datos de uso de la IA sobre individuos pueden emplearse mal para juzgar el rendimiento, así que mantenlos agregados y gobernados.

### Automatización

Recoge automáticamente la salud de los dispositivos y las aplicaciones, con límites claros de privacidad, y mide la recogida por su cobertura y por el número de problemas corregidos. La precaución es que la telemetría técnica puede pasar por alto cómo se siente el trabajo, así que combínala con encuestas breves.

### Analítica

Reporta la preparación y el tiempo hasta ser productivo con recuentos, nunca por persona. La decisión a la que informa es dónde quitar obstáculos. La precaución es que los equipos pequeños producen datos identificables, así que fija un tamaño mínimo de grupo antes de reportar.

## Perspectiva sectorial

**Startup.** Todos hablan con todos, así que la observación y la conversación encontrarán la mayor parte de la fricción. Haz excelente la experiencia del primer día, porque marca el tono, y mantén mínima la telemetría. Escribe pronto las promesas de privacidad, aunque el equipo sea pequeño.

**Pequeña empresa.** Un solo administrador puede encargarse de la incorporación y el soporte. Usa una lista de verificación sencilla y pregunta a cada persona recién incorporada qué faltaba. Ten cuidado con los datos de grupos pequeños: con una docena de empleados, casi cualquier desglose identifica a alguien, así que confía en la conversación.

**Gran empresa.** Los parques grandes y variados hacen útil y arriesgada la segmentación. Segmenta por familia de roles, tipo de sede y clase de dispositivo y no por equipo, aplica un tamaño mínimo de grupo e implica a los representantes del personal. Alinea el programa con las funciones de seguridad, jurídica y privacidad desde el principio.

**Gobierno y sector público.** Los deberes de accesibilidad, igualdad y privacidad suelen ser legales, y los comités de empresa o los sindicatos pueden tener papeles formales. Trata las pruebas de accesibilidad y la consulta como partes obligatorias del programa, publica las reglas de privacidad y evita recoger datos que no se necesiten con claridad. Donde los datos del personal estén sujetos a regulación, implica al delegado de protección de datos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son modestos. Las encuestas de pulso y la observación necesitan tiempo de las personas y una herramienta de encuestas. Los datos de los puestos finales suelen proceder de herramientas ya desplegadas, aunque el análisis y la revisión de privacidad exigen esfuerzo. El mayor costo es la disposición a corregir lo que se encuentre, lo que puede significar cambiar los procesos de incorporación, las políticas de dispositivos y las prácticas de actualización entre equipos.

El retorno llega en tiempo recuperado, una puesta en marcha más rápida de las personas recién incorporadas, menos contactos de soporte causados por fricción evitable y menos TI en la sombra. Puedes construir el caso con tus propios números: los minutos de interrupción forzada por persona, los días hasta ser productivo de las personas recién incorporadas y los contactos de soporte sobre problemas que una corrección eliminó. Sé cauto con una única cifra de productividad derivada del salario y los minutos, porque descansa en supuestos sobre lo que vale un minuto recuperado. Hay además un costo de riesgo en el otro lado del libro: recoger demasiados datos sobre el personal puede crear exposición legal y dañar la confianza. Inclúyelo en el costo total de propiedad.

## Antipatrones y trampas

- **Usar los datos de experiencia para juzgar a individuos.** Convierte un programa de apoyo en vigilancia y acaba con la retroalimentación honesta. Agrega, suprime los grupos pequeños y dilo.
- **Medir solo promedios.** Se esconde a las personas con peor experiencia. Mira la cola y los grupos peor atendidos.
- **Recoger todo porque es posible.** Más datos traen más riesgo. Recoge lo que responde a una pregunta.
- **Encuestar sin descanso.** La gente deja de responder. Rota las herramientas y mantenlo breve.
- **Castigar las soluciones provisionales.** La gente las esconde y la necesidad de fondo queda sin cubrir. Aprende de ellas.
- **Poner la seguridad y la experiencia en salas separadas.** Algunos controles valen su costo, y muchos no. Discute la compensación con números.
- **Contar el primer día como problema de otro.** La incorporación cruza RR. HH., TI y el responsable. Dale un solo responsable.
- **Ignorar la accesibilidad hasta una queja.** Construye y prueba con las personas afectadas desde el principio.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Comprensión de la fricción | Solo quejas | Entrevistas o una encuesta ocasionales | Observación y pulso regulares para las herramientas y momentos clave | Evidencia combinada de encuesta, sistema y conversación, segmentada con seguridad | Visión conjunta con RR. HH., instalaciones y proveedores; el personal codirige las prioridades |
| Privacidad y ética | Sin reglas declaradas | Cuidado informal | Reglas escritas de propósito, minimización y tamaño de grupo | Reglas revisadas de forma independiente; cumplimiento medido | Reglas codiseñadas con representantes del personal y auditadas entre proveedores |
| Acción | Correcciones por queja | Correcciones ad hoc | Principal fricción en la lista de pendientes con responsables | Correcciones financiadas, con seguimiento y anunciadas; interrupciones planificadas en torno al trabajo | Mejoras de experiencia integradas en la planificación entre equipos y proveedores |

## Lista de verificación

- [ ] Los momentos clave (primer día, fallo de dispositivo, solicitud de acceso, traslado, salida) están cartografiados con responsables.
- [ ] La preparación el primer día y el tiempo hasta ser productivo se miden con una lista escrita y con relojes.
- [ ] Un pulso breve cubre las herramientas con nombre en rotación.
- [ ] Los minutos de interrupción forzada se miden por grupo y se revisan con seguridad.
- [ ] Las solicitudes de accesibilidad se etiquetan, se siguen y las confirma el solicitante.
- [ ] Los informes usan un tamaño mínimo de grupo y nunca muestran individuos.
- [ ] Existe y se comparte una declaración escrita de propósito y límites para los datos de experiencia.
- [ ] Los representantes del personal han revisado el plan de datos donde existan esos órganos.
- [ ] Las soluciones provisionales se recogen y se revisan como retroalimentación.
- [ ] Los resultados y las correcciones se comparten con el personal cada trimestre.

## Prompts de IA

**Cartografía un momento que importa.**

```text
We want to improve [moment, for example the first day for a new starter] in
[type of organization]. The steps today are: [list steps and who owns each]. Draw
a text map showing hand-offs and waits, suggest where friction is likely, and
propose one measure from what people say, one from what systems record, and one
from observation for each major step. Do not invent figures. List your
assumptions and the questions I should ask staff.
```

**Redacta una declaración de privacidad para un programa de experiencia.**

```text
Draft a one-page plain-language statement for staff about an experience program
in [organization type] in [jurisdiction]. We collect: [list data]. Our purpose
is [purpose]. Include what we will not do (for example use data on individuals),
the minimum group size [number], retention [period], who can see raw data, and
how staff can raise concerns. Flag anything I should review with a privacy
specialist or staff representatives. Do not give legal conclusions. List your
assumptions.
```

**Analiza los comentarios de pulso sobre una herramienta.**

```text
Here are [number] anonymized comments about [tool] from [period]: [paste
comments with personal data removed]. Group them into themes of friction,
count each theme, give two representative quotes for each, and suggest which
themes may point to a fixable cause versus a training need. Do not identify
individuals or infer motives. List your assumptions and what a person should
check before acting.
```

**Planifica una reducción de interrupciones.**

```text
Our endpoints receive [number] planned interruptions per person per month on
average: [list types and frequencies]. Security requirements: [list]. Propose a
scheme that reduces disruption to focus time (for example deferral windows,
bundling, scheduling by working hours) while meeting the requirements, and
describe how to measure whether it works without tracking individuals. List
your assumptions and the trade-offs I should discuss with security.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de experiencia o de fricción antes de publicarla.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada revisada de una métrica de experiencia conserva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Ideas clave

- El fin es dar a las personas motivadas el entorno y el apoyo que necesitan, así que mide la fricción y elimínala.
- Combina preguntas de pulso, medidas del sistema y observación, y mira a los grupos de los márgenes.
- Cuenta los minutos perdidos y las interrupciones causadas por las propias acciones de la TI, y planifica en torno a la concentración de la gente.
- Haz de la privacidad una regla de diseño: minimiza, agrega, suprime los grupos pequeños y no juzgues nunca a individuos.
- Trata las soluciones provisionales como retroalimentación y di al personal qué corregiste.
- Incluye la accesibilidad desde el principio y revisa el programa con las personas a las que sirve.

## Referencias y lecturas complementarias

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
