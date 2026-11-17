# Métricas de trabajo repetitivo y guardias

**Un servicio es tan fiable como la rotación que lo cuida, así que mide las interrupciones, la carga nocturna y la proporción de tiempo perdida en trabajo manual repetitivo para la rotación en su conjunto, y usa los números para financiar la prevención y la automatización, nunca para comparar personas.**

## Visión general y motivación

La fiabilidad suele describirse en términos del sistema: disponibilidad, latencia, tasas de errores. Detrás de cada servicio que tiene usuarios a medianoche hay un sistema humano que responde cuando el sistema falla. Ese sistema humano tiene límites. Una rotación a la que se avisa con demasiada frecuencia, que despierta a demasiadas personas o que pasa la mayor parte de su semana en tareas manuales y repetitivas se volverá más lenta, cometerá más errores y acabará perdiendo gente. Las demás métricas de la Parte 5 pueden parecer sanas hasta el momento en que se van las personas que las mantienen unidas.

Dos ideas organizan este tema. La primera es el trabajo de [guardia](https://en.wikipedia.org/wiki/On-call) (on-call): una rotación de personas que están localizables y listas para responder a las alertas fuera de los patrones de trabajo normales. Un **aviso** (page) es una alerta que interrumpe a quien responde, normalmente por buscapersonas, llamada telefónica o notificación push. Un **turno** es un tramo de servicio de guardia, por ejemplo un día, una semana o una noche. Una **rotación** es el grupo de personas que toman turnos por orden. La segunda idea es el **trabajo repetitivo** (toil), un término de la [ingeniería de fiabilidad de sitios](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina de operar servicios con métodos de ingeniería de software. En el libro *Site Reliability Engineering* de Google, el toil es trabajo operativo ligado a la operación de un servicio en producción que tiende a ser manual, repetitivo, automatizable, táctico, sin valor duradero y que crece al mismo ritmo que el servicio. No es lo mismo que los gastos generales como las reuniones, y no es simplemente el trabajo que a alguien le desagrada.

ITIL 4 no tiene una práctica llamada «gestión del trabajo repetitivo». El material se reparte entre varias prácticas. La [gestión de incidentes](https://en.wikipedia.org/wiki/Incident_management) y la monitorización y gestión de eventos producen los avisos. La gestión de problemas elimina las causas que siguen produciéndolos. La gestión de solicitudes de servicio y la gestión de despliegues producen buena parte del trabajo manual repetitivo. La gestión de la plantilla y del talento, y la mejora continua, poseen el lado de las personas. La contrapartida ágil es el acuerdo de trabajo del equipo sobre el trabajo no planificado y el ritmo sostenible, y el hábito de DevOps de que el equipo que construye un servicio carga también con parte del buscapersonas.

Las medidas de aquí tratan de la carga y la sostenibilidad. La gestión de incidentes pertenece a otros temas (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes, y el tema 3.4, Métricas de incidentes graves), igual que la calidad de las alertas individuales (véase el tema 5.5, Métricas de monitorización y calidad de las alertas). Este tema pregunta cuánto cuesta a las personas de la rotación mantener el servicio en marcha y si ese costo es sostenible.

### Por qué esto pertenece a la fiabilidad

La fatiga tiene consecuencias operativas. La [privación de sueño](https://en.wikipedia.org/wiki/Sleep_deprivation) degrada el juicio y el tiempo de reacción, y quienes responden cansados al inicio de un incidente tardan más en diagnosticarlo y es más probable que cometan un segundo error mientras arreglan el primero. La [fatiga de alarmas](https://en.wikipedia.org/wiki/Alarm_fatigue) es el efecto emparentado de demasiadas alertas: la gente deja de tratar cada una como urgente. El [síndrome de desgaste profesional](https://en.wikipedia.org/wiki/Occupational_burnout) (burnout) es el resultado a más largo plazo de una sobrecarga sostenida, y se muestra como abandono, bajas por enfermedad y desinterés, que son lentos, caros y difíciles de revertir. Un equipo que mide la fiabilidad del servicio sin medir la sostenibilidad de su rotación vigila solo el efecto e ignora parte de la causa.

Este tema describe rotaciones, turnos y servicios, y nunca clasifica a individuos. Una visión de ITIL parte del incidente y del servicio, una visión de SRE del costo en tiempo de las personas y una visión ágil de la capacidad para el trabajo planificado.

## Principios clave

- **Mide la rotación, no la persona.** Reporta la carga por servicio, turno y puesto de la rotación. El número de avisos de una persona depende del turno que le tocó, y una tabla de posiciones enseña a la gente a esconder interrupciones.
- **Cuenta cuándo ocurren las interrupciones además de cuánto duran.** Un aviso de cinco minutos a las 03:00 puede costar una noche de sueño.
- **Define el trabajo repetitivo de forma estrecha y deja que lo clasifique el equipo.** El toil es un tipo específico de trabajo, no un sinónimo de trabajo que a la gente le desagrada.
- **Trata la carga como una señal para invertir.** Un volumen alto de avisos o una proporción alta de toil es evidencia de que un servicio, una herramienta o un nivel de dotación necesita trabajo.
- **Empareja cada medida de carga con una medida de calidad.** Menos avisos es una buena noticia solo si los incidentes siguen detectándose.
- **Muestra distribuciones y comparte los datos primero con la rotación.** Un turno promedio esconde un puñado de noches terribles, y las personas de guardia son los mejores jueces de si los números coinciden con su experiencia.

## Definiciones de métricas

La tabla da el conjunto básico. Cada medida de tiempo o recuento indica dónde empieza y dónde se detiene y qué se excluye. «Fuera de horario» debe definirse una vez por rotación como una ventana escrita en hora local, incluidos los fines de semana y los festivos, porque las personas de una rotación distribuida pueden tener horarios locales distintos.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Avisos por turno | Número de avisos entregados a una rotación durante un turno | Recuento de avisos entregados entre el inicio y el fin del turno, un recuento por turno, tras fusionar los avisos duplicados del mismo grupo de alertas en 5 minutos (la ventana de fusión es un ajuste del equipo). Se excluyen los avisos de prueba y los enviados por error. Reporta la mediana y el percentil 90 entre turnos, además del turno más ocupado | avisos por turno | Herramienta de avisos; calendario de guardias | Gestión de incidentes; monitorización y gestión de eventos | Política de trabajo no planificado; ritmo sostenible | Revisión semanal, tendencia mensual |
| Proporción de avisos fuera de horario | Proporción de avisos que llegan fuera de la ventana de trabajo escrita | Avisos entregados fuera de la ventana de trabajo / todos los avisos entregados, sobre el periodo. La ventana se fija por rotación en hora local; los festivos cuentan como fuera de la ventana | porcentaje | Herramienta de avisos; calendario de la rotación | Gestión de incidentes; monitorización y gestión de eventos | Acuerdo de trabajo sobre la disponibilidad | Mensual |
| Tasa de interrupción nocturna | Con qué frecuencia un turno incluye al menos un aviso en la ventana de sueño protegida | Turnos con al menos un aviso en la ventana de sueño protegida (por ejemplo de 22:00 a 07:00 hora local, fijada por el equipo) / todos los turnos del periodo. Se excluye un aviso reconocido automáticamente sin respuesta humana | porcentaje de turnos | Herramienta de avisos; registro de acuses de recibo | Gestión de incidentes; gestión de la plantilla y del talento | Ritmo sostenible; chequeo de salud del equipo | Mensual |
| Proporción de tiempo en trabajo repetitivo | Proporción del tiempo de trabajo de una rotación dedicada al toil | Horas que la rotación registra en trabajo clasificado como toil / total de horas de trabajo registradas por la rotación, durante un mes. Las reuniones, la formación y las ausencias se excluyen tanto del numerador como del denominador. La clasificación sigue las seis características del toil, aplicadas por el equipo | porcentaje del tiempo | Muestreo de tiempo o etiquetas de tareas en el gestor de trabajo; revisión de la clasificación por el equipo | Mejora continua; gestión de despliegues; gestión de solicitudes de servicio | Proporción de trabajo no planificado; asignación de capacidad en el trabajo planificado | Mensual, con una revisión trimestral de la clasificación |
| Trabajo repetitivo por origen | Distribución de las horas de toil entre orígenes con nombre como reinicios manuales, solicitudes de acceso, renovaciones de certificados y clasificación de tickets | Horas de toil de cada origen / total de horas de toil, enumerando los cinco orígenes principales y un grupo «otros». Mismas exclusiones que la proporción de tiempo en trabajo repetitivo | porcentaje de horas de toil por origen | Muestreo de tiempo o etiquetas de tareas en el gestor de trabajo | Gestión de problemas; gestión de solicitudes de servicio | Lista de pendientes de elementos de mejora | Trimestral |
| Tasa de avisos repetidos | Proporción de avisos causados por una condición que ya avisó a la rotación antes dentro de una ventana declarada | Avisos cuyo grupo de alertas o código de causa coincide con un aviso anterior en 30 días / todos los avisos del periodo. El código de causa lo fija quien responde al cerrar; los códigos sin fijar se reportan por separado | porcentaje | Herramienta de avisos; códigos de causa de los registros de incidentes | Gestión de problemas; gestión de incidentes | Acciones de la retrospectiva; lista de pendientes de deuda técnica | Mensual |
| Profundidad de la rotación | Cuántos responsables cualificados comparten el buscapersonas en comparación con el número de puestos por cubrir | Número de personas que completaron la preparación para la guardia y están disponibles para turnos / número de puestos de turno por ciclo de rotación. Las ausencias y las comisiones de servicio reducen la disponibilidad. Reporta como razón por rotación, nunca por persona | razón | Calendario de la rotación; lista de verificación de preparación | Gestión de la plantilla y del talento | Equipo multifuncional; matriz de habilidades | Trimestral |
| Trabajo repetitivo eliminado | Horas de toil recurrente retiradas del trabajo de la rotación mediante un cambio de automatización o de diseño | Horas mensuales estimadas de toil de un origen antes del cambio menos las mismas después del cambio, medidas durante al menos dos ciclos tras la entrega. Se excluyen las horas ahorradas por una limpieza puntual | horas por mes | Muestreo de tiempo antes y después; ticket de mejora | Mejora continua; gestión de problemas | Elemento de mejora entregado | Trimestral |

Un recuento de avisos es un recuento de interrupciones, no de incidentes: un incidente puede generar una docena de avisos. La proporción de tiempo en trabajo repetitivo depende de un registro honesto, así que trátala como una estimación acordada.

## Recomendaciones

### Define los términos antes de contar

**1. Escribe qué cuenta como aviso, como turno y como fuera de horario.** Los equipos cuentan cosas distintas bajo la misma palabra. Un aviso puede ser cualquier notificación, solo las que llegan a un humano o solo las que exigen acción. Elige una definición, indica la ventana de fusión de duplicados y anota la ventana de trabajo en hora local. Sin esto, los números cambiarán cuando se reconfigure una herramienta y la tendencia engañará.

**2. Acuerda qué es el toil, con ejemplos de tu propio servicio.** Parte de las seis características del libro de SRE. Escribe una breve lista de ejemplos y de no ejemplos, como reiniciar un trabajo atascado (toil), diseñar una nueva herramienta de recuperación (ingeniería) y una reunión de planificación (gastos generales). Revisa la lista cuando aparezcan desacuerdos.

**3. Elige cómo medirás la proporción de toil y acepta sus límites.** Las opciones baratas son el muestreo de tiempo, las etiquetas de tareas en el gestor de trabajo y una breve estimación quincenal. Ninguna es exacta, así que elige la de menos sobrecarga, ejecútala durante un trimestre y juzga más la tendencia que el valor absoluto.

### Mide la carga de la rotación

**4. Reporta los avisos por turno como una distribución.** El turno promedio esconde lo que siente la rotación. Muestra la mediana, el percentil 90 y el turno más ocupado, y añade una nota sobre lo que pasó en ese turno. Una mediana tranquila con una cola terrible significa unas pocas malas noches, que es un problema distinto de una rotación constantemente ocupada. Véase el tema 1.6, Alfabetización estadística para métricas de servicio, para leer percentiles.

**5. Pon el momento junto al volumen.** La proporción de avisos fuera de horario y la tasa de interrupción nocturna muestran cuándo cae la carga. Cinco avisos en horario de oficina son una molestia; cinco entre la medianoche y las 05:00 son un costo distinto. Muestra ambos en la misma página.

**6. Mira la dispersión entre turnos, no entre personas.** Una rotación donde un turno recurrente (por ejemplo el fin de semana o el traspaso del lunes) acumula la mayoría de los avisos necesita una corrección distinta de una donde la carga es pareja. Reporta la proporción de avisos por puesto de turno y día. Cuando los datos se reportan por individuo con nombre, es de esperar que se lean como una clasificación, así que no produzcas esa vista.

**7. Cuenta aparte la carga de los incidentes graves.** Un incidente grave puede generar más interrupciones en una noche que un mes normal. Repórtalo como su propia línea para que un solo evento no distorsione la tendencia (véase el tema 3.4, Métricas de incidentes graves).

### Conecta la carga con las causas y con las correcciones

**8. Vincula los avisos con los problemas y haz seguimiento de las repeticiones.** La tasa de avisos repetidos muestra cuánta carga procede de causas ya conocidas. Una tasa de repetición alta es un argumento a favor de la gestión de problemas, no de una respuesta más rápida. Alimenta la lista de pendientes de problemas con las causas repetidas principales y registra el vínculo (véase el tema 4.1, Métricas de gestión de problemas, y el tema 4.6, Deuda técnica y errores conocidos).

**9. Ordena los orígenes de toil y ataca el mayor.** Un [diagrama de Pareto](https://en.wikipedia.org/wiki/Pareto_chart) de horas de toil por origen suele mostrar unos pocos orígenes responsables de la mayor parte del tiempo. Elige el mayor, decide si puede eliminarse por diseño, automatizarse o entregarse al equipo que posee la causa, y prográmalo como trabajo de funciones. Prefiere eliminar la necesidad a automatizar el paso, porque un paso automatizado aún hay que mantenerlo.

**10. Mide el toil eliminado, no las automatizaciones escritas.** Una automatización que nadie usa no elimina nada. Mide las horas de toil antes y después, durante al menos dos ciclos, y registra el esfuerzo de construir y mantener la automatización. Este es el retorno honesto, y evita un programa de «automatización» que añade guiones sin eliminar trabajo. Véase el tema 3.7, Métricas de autoservicio y automatización, para la adopción de la automatización por los usuarios.

### Mantén sostenible el sistema

**11. Fija límites de rotación en un acuerdo de equipo y vigila después la profundidad de la rotación.** Acuerda con qué frecuencia puede estar una persona de guardia, cuántas noches consecutivas son aceptables y qué descanso sigue a una mala noche. La profundidad de la rotación muestra si la rotación tiene suficientes personas cualificadas para el límite acordado. Una rotación que es nominalmente de ocho personas pero efectivamente de tres, porque las demás aún no están preparadas o están de baja, no cumple el límite, diga lo que diga el cuadrante.

**12. Usa los números para pedir algo concreto.** Un número de carga respalda una petición: un cambio de dotación, tiempo sacado del trabajo de funciones para saldar toil, un cambio en los umbrales de alerta o una retirada. Indica la petición junto al número, o la gente dejará de registrar (véase el tema 1.4, Gobernanza y propiedad de las métricas).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Avisos por turno | Subir los umbrales de alerta o silenciar alertas para que baje el recuento; fusionar alertas no relacionadas en un aviso; mover avisos a una cola de tickets que nadie vigila | Cobertura de detección e incidentes reportados por clientes que la monitorización pasó por alto (véase el tema 5.5, Métricas de monitorización y calidad de las alertas); tiempo de detección (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes) |
| Proporción de avisos fuera de horario | Redefinir la ventana de trabajo para que sea más ancha; reprogramar trabajos y despliegues para que los avisos pasen al horario de oficina sin reducirse; reclasificar avisos como «poca urgencia» | Volumen total de avisos junto a la proporción; ventana de trabajo escrita bajo control de cambios; revisión de lo que se movió |
| Tasa de interrupción nocturna | Retrasar el acuse de recibo hasta la mañana; reconocer avisos automáticamente; contar solo los avisos que llegaron a un humano | Tiempo de acuse de recibo por hora (véase el tema 3.3, Tiempo de respuesta y resolución de incidentes); avisos sin respuesta humana reportados por separado; impacto en el cliente por la noche |
| Proporción de tiempo en trabajo repetitivo | Reclasificar el toil como «ingeniería» o «trabajo de proyecto»; registrar menos de lo que se gastó; etiquetar solo lo fácil de describir | Una auditoría periódica de los elementos clasificados por alguien ajeno a la rotación; la propia opinión del equipo sobre cómo se sintió la semana; la proporción de tiempo dedicada a trabajo de mejora planificado |
| Trabajo repetitivo por origen | Dividir un origen grande en varios pequeños para que ninguno destaque; dejar un origen sin nombre en «otros» | Un tope al grupo «otros» (por ejemplo menos de una quinta parte de las horas de toil, un ajuste del equipo); muestreo de los elementos de «otros» cada trimestre |
| Tasa de avisos repetidos | Cerrar los avisos con un código de causa nuevo cada vez para que se pierdan las coincidencias; ampliar los códigos de causa hasta que todo sea distinto; alargar o acortar la ventana | Auditoría de códigos de causa en una muestra; recurrencia del mismo grupo de alertas entre incidentes (véase el tema 4.1, Métricas de gestión de problemas) |
| Profundidad de la rotación | Contar a personas que no han completado la preparación; contar a personas rara vez disponibles; rellenar el cuadrante | Proporción de turnos realmente cubiertos por el grupo nominal; recuento real de turnos por puesto, reportado sin nombres; finalización de la lista de verificación de preparación |
| Trabajo repetitivo eliminado | Contar limpiezas puntuales como ahorros recurrentes; ignorar el esfuerzo de construir y mantener la automatización; reclamar ahorros sin un antes y un después | Horas antes y después medidas durante dos ciclos; esfuerzo de mantenimiento de la automatización; proporción de tiempo en trabajo repetitivo en los trimestres siguientes |

Una lectura sana es una rotación cuyo turno mediano es tranquilo y cuyo peor turno es raro, con pocos avisos por la noche, una proporción decreciente de avisos repetidos y una proporción de toil que baja porque se han eliminado orígenes, no porque se hayan reclasificado. Muestra además el esfuerzo para llegar ahí: trabajo de mejora que aparece en el plan, financiado y entregado. Si los recuentos de avisos bajan mientras los clientes reportan más incidentes que la monitorización no captó, los números mejoran mirando hacia otro lado.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Contar los avisos desde la herramienta de avisos | Automático, barato y difícil de disputar | Cuenta interrupciones, no su costo; ajustar las alertas cambia el recuento sin cambiar la carga |
| Muestreo de tiempo para el toil | Precisión razonable con un esfuerzo modesto | Necesita disciplina; las muestras pequeñas son ruidosas |
| Reporte a nivel de rotación | Coincide con cómo se organiza el trabajo; seguro de compartir ampliamente | Puede esconder a una persona que lo está pasando mal; necesita un canal de conversación de apoyo a su lado |
| Tope duro al toil (por ejemplo el objetivo del libro de SRE de mantener el toil por debajo del 50 por ciento del tiempo) | Una señal clara que dispara una respuesta | Un número puede cumplirse reclasificando; un tope necesita el respaldo de la dirección |

La tensión central es entre aceptación e inversión. Es fácil tratar una carga alta como el precio normal de un servicio importante y pedir a la gente que la absorba, y es fácil fijar un tope que nadie tiene poder para hacer cumplir. La salida es emparejar cada medida con una decisión: un umbral en el que el equipo se detiene y actúa, un responsable con nombre para la acción y una fecha para volver a mirar. Los números a nivel de rotación son seguros y a veces demasiado gruesos. Cuando alguien lo pasa mal, la conversación pertenece a esa persona y a su responsable, usando su propio relato de la semana.

## Preguntas para debatir con tu equipo

**1. ¿Cómo se sintió nuestro turno más ocupado del último trimestre y qué dicen de él los números?**
Empieza por la historia antes que por el gráfico. Pide a las personas que estuvieron de guardia que describan el turno y compáralo después con los números de avisos por turno y de interrupción nocturna. Si los números subestiman la experiencia, averigua qué falta, como llamadas sin registrar o trabajo hecho después del aviso. Anoten esa lista como la siguiente mejora de la medición.

**2. ¿Qué diríamos que es toil en nuestro equipo y qué diríamos que no lo es?**
Pon cinco o seis tareas recientes en una pizarra y pide a cada persona que las clasifique como toil, ingeniería o gastos generales frente a las seis características. Espera desacuerdo y trátalo como útil: los desacuerdos muestran dónde es vaga la definición. Acuerden una definición de trabajo para el trimestre siguiente y anoten dos ejemplos de cada una. Eviten debatir si el trabajo es agradable, porque la pregunta es si es manual, repetitivo y automatizable.

**3. ¿Qué alerta o tarea borraríamos primero si pudiéramos?**
Pide la alerta o la tarea recurrente que todos temen y pregunta después qué nos impide eliminarla: el costo de arreglarla, un responsable ausente o la creencia de que es necesaria. El facilitador debe buscar trabajo barato de eliminar y cuyo responsable no esté en la sala. Terminen eligiendo un elemento para la siguiente ronda de planificación.

**4. ¿Cuántas personas pueden realmente tomar un turno hoy y a qué límites estamos dispuestos a comprometernos?**
Cuenten con honestidad la preparación: quién está formado, quién está disponible y quién tiene restricciones. Comparen el resultado con el tamaño nominal de la rotación. Pregunten qué frecuencia de guardia y qué número de noches consecutivas considera aceptable el grupo, y comprueben después si la práctica actual lo cumple.

**5. Si redujéramos a la mitad el recuento de avisos el trimestre próximo, ¿cómo sabríamos que no hemos dejado simplemente de escuchar?**
Esta pregunta trata de la barrera de protección. Pide al grupo que enumere formas en que el recuento de avisos podría bajar sin que el servicio mejore, como subir umbrales, fusionar alertas o ignorar un origen. Pregunta después qué veríamos en los reportes de clientes y en las medidas de detección si eso hubiera ocurrido. Acuerden la barrera de protección y pónganla en la misma página que el volumen.

**6. ¿Quién ve estos números y qué queremos que hagan con ellos?**
Rastreen el camino de las medidas de carga desde la rotación hasta los responsables y los líderes. Pregunten qué es probable que concluya cada audiencia y si alguna vista podría leerse como una clasificación. Acuerden la forma que sube: a nivel de rotación, con contexto, con una petición adjunta. Anoten cualquier preocupación sobre la identificación de individuos.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega generan buena parte de la carga de guardia a través de los cambios que publican. Los equipos que operan lo que construyen pueden ver el vínculo entre una versión y los avisos que la siguen. Deben incluir el toil y el trabajo de guardia en la planificación de capacidad, programar la eliminación de toil como trabajo ordinario de la lista de pendientes y vigilar la calidad de los cambios junto a la velocidad (véase el tema 2.8, Métricas DORA).

### Equipos de servicio y de operaciones

Los equipos de operaciones llevan el buscapersonas con más frecuencia y ven primero el costo humano. Deben poseer las definiciones, ejecutar el muestreo de tiempo o el etiquetado, publicar los números a nivel de rotación y llevar a los equipos propietarios, con evidencia, los principales orígenes de toil y las causas repetidas. Su riesgo es absorber la carga en silencio por profesionalidad. Un registro sereno y factual de noches y semanas es una petición de ayuda más eficaz que una queja, y los registros no deben convertirse nunca en una clasificación de las personas que respondieron.

### Liderazgo y gobernanza

Los líderes deciden la dotación, las prioridades y si se financia el trabajo contra el toil. Un líder que lee una proporción alta de toil como mal rendimiento enseña al equipo a bajarla reetiquetando. Un líder que la lee como la factura de un trabajo que la organización decidió no financiar obtiene datos honestos y un plan. La gobernanza debe esperar un límite a la carga de la rotación y una respuesta visible cuando se supera (véase el tema 9.2, Métricas de satisfacción y bienestar).

### Clientes y usuarios

Los usuarios no ven la rotación, pero sienten sus efectos: diagnósticos más lentos de quienes responden cansados, incidentes repetidos por causas sin corregir y la salida de las personas que conocían el servicio. Donde los usuarios abarcan muchas zonas horarias, sus necesidades fuera de horario dan forma a la rotación, y el costo de cubrirlas es un tema legítimo para una conversación sobre niveles de servicio (véase el tema 5.1, Métricas de SLA, OLA y XLA).

## En la práctica: un ejemplo de gestión de servicios

Un minorista en línea de tamaño medio opera una plataforma de pedidos, un servicio de cuentas de clientes y una integración con el almacén. Una rotación de seis ingenieros de dos equipos de producto y un pequeño grupo de operaciones comparte un turno semanal de guardia. Todos los números de este ejemplo son ilustrativos.

La revisión mensual muestra una mediana de 9 avisos por turno y un percentil 90 de 31. El turno más ocupado tuvo 58 avisos. Aproximadamente la mitad de todos los avisos llegan fuera de horario, y 6 de los 8 turnos del trimestre incluyeron un aviso entre las 22:00 y las 07:00. El muestreo de tiempo sugiere que el toil ocupa el 55 por ciento del tiempo de trabajo.

El turno más ocupado coincidió con la caducidad de un certificado en la integración del almacén que avisó a la rotación 22 veces en una noche. Una alerta de espacio en disco en un servidor de procesos por lotes explica casi una cuarta parte de los avisos, y la mayoría se cerraron limpiando a mano un directorio temporal. La tasa de avisos repetidos es del 41 por ciento. Una vista de Pareto muestra que las renovaciones manuales de certificados, la limpieza de disco y las solicitudes de acceso se llevan la mayor parte de las horas de toil.

El equipo toma tres elementos para las próximas cuatro semanas: automatizar la renovación de certificados, corregir la causa del directorio temporal lleno y mover las solicitudes de acceso a un formulario de autoservicio propiedad del equipo de identidad. Un acuerdo de trabajo fija un límite de un turno de cada cuatro por persona y un día de descanso tras una noche con tres o más avisos. La profundidad de la rotación es de 6 personas para una necesidad acordada de 8, así que dos ingenieros de un tercer equipo empiezan la formación de preparación.

Un riesgo de manipulación aparece en la siguiente revisión. Los avisos por turno han bajado a una mediana de 4 y el percentil 90 a 12. Un gerente está contento. Un miembro del equipo señala que el umbral de la alerta de disco se subió 20 puntos y que el servidor de lotes se llenó dos veces sin aviso. Los incidentes reportados por clientes sobre pedidos por lotes retrasados subieron. La barrera de protección, los incidentes reportados por clientes que la monitorización pasó por alto, lo detectó. Se revierte el cambio de umbral, la limpieza del directorio se programa como una corrección, y el equipo añade una regla por la que cualquier cambio de umbral se registra con su motivo y se revisa pasado un mes. La proporción de toil del trimestre siguiente es del 38 por ciento (ilustrativo) y se reporta con el método de muestreo a su lado.

## Agilidad, IA, automatización y analítica

### Agilidad

Un ritmo sostenible incluye la rotación de guardia, así que revisa su carga con el equipo con una cadencia regular y financia la prevención. La precaución es que un objetivo de menos avisos puede llevar a silenciar alertas.

### IA

La IA puede resumir avisos, sugerir pasos de runbook y clasificar alertas, lo que puede reducir el toil, y puede añadir toil nuevo al comprobar y corregir su salida. Incluye en el toil el tiempo dedicado a supervisar la IA y empareja los recuentos de avisos con señales de sueño y bienestar. La precaución es que una primera respuesta automatizada puede ocultar avisos a personas que siguen cargando con el riesgo.

### Automatización

Automatiza la eliminación de toil donde el trabajo sea repetitivo, y mide el toil eliminado y los incidentes que causó la automatización. La precaución es que una automatización construida sin responsable se convierte en una nueva fuente de trabajo de guardia.

### Analítica

Reporta la carga por rotación, nunca por persona, con el recuento de avisos detrás de cada cifra. La decisión a la que informa es dónde invertir en prevención. La precaución es que los datos del buscapersonas omiten las interrupciones informales, así que combínalos con una breve encuesta.

## Perspectiva sectorial

**Startup.** Un equipo pequeño suele no tener una rotación formal, de modo que todos están de guardia todo el tiempo y el costo es invisible. Cuenta los avisos y los despertares nocturnos en una hoja de cálculo y anota las tres mayores tareas repetitivas. Los fundadores que llevan ellos mismos el buscapersonas son un riesgo para el negocio, no una insignia de compromiso.

**Pequeña empresa.** Una o dos personas pueden llevar toda la TI. Mide lo que no necesita herramientas: llamadas fuera de horario, tareas que se repiten y ausencias que no pueden tomarse. Un proveedor de servicios gestionados puede asumir parte de la rotación si el contrato indica tiempos de respuesta y horarios. La profundidad de la rotación suele ser uno, que es el riesgo principal.

**Gran empresa.** La escala trae rotaciones que siguen al sol, plataformas compartidas y varios proveedores. Define las medidas una vez, fija ventanas de trabajo locales por región y evita promediar entre rotaciones con servicios muy distintos. Las normas laborales de algunos países limitan el servicio de guardia y exigen periodos de descanso, y estos pertenecen a los límites de la rotación.

**Gobierno y sector público.** Los servicios pueden necesitar cobertura las 24 horas por ley o por contrato, y la dotación está sujeta a la contratación y a los grados. Los límites de rotación y las reglas de descanso suelen regirse por convenios laborales, así que mide frente a ellos y reporta cuando se superan. La rendición de cuentas pública hace más valioso y más difícil el reporte sincero: construye un canal seguro para los datos de carga y sé explícito en que describen el sistema y la dotación, no a los individuos (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación es proteger la calidad del servicio y conservar a las personas cualificadas. Quienes responden cansados diagnostican más despacio, y cuando se van las personas con experiencia, el conocimiento se va con ellas. Sustituir a una persona tiene costos reales de selección, incorporación y menor rendimiento durante el periodo de aprendizaje, y una organización puede estimar esos costos a partir de sus propios registros. El toil también quita capacidad a la mejora. Un equipo que pasa la mayor parte de su tiempo en operaciones manuales no puede reducir los incidentes que las causan.

El costo de las medidas es modesto. La herramienta de avisos ya cuenta los avisos, y el muestreo de tiempo cuesta unos minutos por persona cada quince días. El costo mayor es actuar sobre los hallazgos: tiempo de ingeniería para eliminar toil, dotación para una rotación sostenible y tiempo de revisión. Cuenta el mantenimiento de la automatización como un costo, porque un paso automatizado sin mantener se convierte en el incidente de mañana.

El retorno aparece como menos avisos por causas conocidas, menos interrupciones nocturnas, horas de toil devueltas al trabajo de mejora, menor abandono de la rotación y diagnósticos más rápidos. No se aplica ninguna cifra universal, así que estima la tuya. Para un origen de toil, multiplica las horas mensuales por un costo horario cargado acordado con finanzas, compáralo con el esfuerzo de eliminarlo y revisa tras dos ciclos. Para la sostenibilidad de la rotación, registra las salidas y las ausencias largas de la rotación y compáralas con las medidas de carga a lo largo del tiempo, tratando el vínculo como una hipótesis que poner a prueba, no como una causa probada. Donde se necesite una cifra, declárala como una estimación y muestra los insumos (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Clasificar a las personas por avisos.** Convierte una medida del sistema en una puntuación de rendimiento y enseña a quienes responden a evitar turnos y a esconder interrupciones. Reporta por rotación, puesto de turno y servicio.
- **Recortar avisos silenciando alertas.** El recuento baja y la detección se debilita. Empareja el volumen con la detección y los incidentes reportados por clientes, y revisa cada cambio de umbral.
- **Llamar toil a todo.** Una definición tan amplia que incluya reuniones y problemas difíciles destruye la señal. Usa las seis características y mantén una lista de ejemplos.
- **Un objetivo de toil sin autoridad detrás.** Un tope que no puede disparar una decisión se convierte en un número sobre el que la gente discute. Acuerda de antemano qué ocurre cuando se supera y quién decide.
- **Automatizar antes de entender.** La automatización puede fijar un mal proceso y añadir mantenimiento. Pregunta primero si la necesidad puede eliminarse por diseño y mide después el toil eliminado.
- **Promediar entre servicios distintos.** Una media entre un servicio estable y uno frágil no describe a ninguno. Muestra cada servicio y cada rotación por separado.
- **Medir y no actuar.** Los números de carga sin respuesta enseñan a la gente que los datos no importan. Adjunta una decisión, un responsable y una fecha de revisión a cada hallazgo.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y datos | Los avisos y el toil se describen a ojo; sin definición común | Algunas rotaciones cuentan avisos; el toil se comenta pero no se mide | Una definición escrita de aviso, turno, fuera de horario y toil; datos de avisos recogidos por herramienta | Distribuciones y momento con tendencias; toil muestreado cada mes y auditado | Definiciones revisadas entre equipos y proveedores; esfuerzo de muestreo ajustado al valor de las respuestas |
| Sostenibilidad de la rotación | Informal; las mismas pocas personas absorben el buscapersonas | Existen cuadrantes; límites comentados pero no escritos | Límites escritos de frecuencia y descanso; profundidad de la rotación conocida | Límites vigilados y excesos revisados con acción | Rotaciones compartidas entre equipos y proveedores, con la carga equilibrada según cambian los servicios |
| Uso de los números | Usados para culpar o ignorados | Mostrados a los responsables | Mostrados primero a la rotación, con las decisiones que respaldan | Emparejados con barreras de protección y revisados con una cadencia que lleva a un cambio financiado | Compartidos con líderes y socios para planificar la dotación y el alcance de los servicios |

## Lista de verificación

- [ ] El aviso, el turno, la ventana de fuera de horario y la ventana de fusión están definidos por escrito.
- [ ] El toil tiene una definición escrita con ejemplos y no ejemplos de nuestro propio servicio.
- [ ] Los avisos por turno se reportan como mediana, un percentil alto y el turno más ocupado.
- [ ] La proporción de avisos fuera de horario y la tasa de interrupción nocturna se reportan junto al volumen.
- [ ] La carga se reporta por rotación, puesto de turno y servicio, nunca por persona con nombre.
- [ ] La proporción de tiempo en trabajo repetitivo se muestrea según un calendario, con el método escrito.
- [ ] Los cinco orígenes principales de toil y las principales causas repetidas de avisos están en la lista de pendientes de mejora.
- [ ] Los límites de rotación y las reglas de descanso están en un acuerdo de equipo, y la profundidad de la rotación se comprueba cada trimestre.
- [ ] Cada medida de carga tiene una barrera de protección en la misma página, incluidos la detección y los incidentes reportados por clientes.
- [ ] Cada revisión termina con una decisión, un responsable y una fecha.
- [ ] Los cambios de umbrales y de alertas se registran con un motivo y se revisan pasado un mes.

## Prompts de IA

**Revisa la carga de una rotación y busca patrones.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Clasifica tareas como toil, ingeniería o gastos generales.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Redacta vectores de manipulación y barreras de protección para nuestras métricas de carga.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados y las barreras de protección cuando añadas una medida de guardia o de toil a un panel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Ideas clave

- Mide la carga de la rotación, por turno, servicio y hora del día, y no clasifiques nunca a las personas que la forman.
- Cuenta cuándo ocurren las interrupciones además de cuántas son, porque los avisos nocturnos cuestan más que los del horario de oficina.
- Define el toil de forma estrecha con sus seis características, estima su proporción de tiempo con un método sencillo y juzga la tendencia.
- Vincula los avisos y los orígenes de toil con el trabajo de problemas y con los cambios de automatización o de diseño, y mide el toil realmente eliminado.
- Empareja cada medida de carga con una barrera de protección como la detección y los incidentes reportados por clientes, para que los números más bajos no puedan comprarse mirando hacia otro lado.
- Trata una carga pesada como una petición de inversión, con una decisión, un responsable y una fecha de revisión.

## Referencias y lecturas complementarias

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
