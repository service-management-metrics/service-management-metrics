# Métricas del ciclo de vida de activos de hardware

**Los dispositivos son las herramientas diarias de personas motivadas y a la vez un flujo de costo, riesgo y desperdicio, así que planifica la renovación como un flujo constante y no como un sobresalto periódico, mide la antigüedad y los fallos con tus propios datos y trata la eliminación segura y la reutilización como parte del trabajo.**

## Visión general y motivación

Detrás de cada servicio hay cosas físicas: portátiles, teléfonos, servidores, equipos de red, impresoras y los cables y bastidores que los mantienen unidos. El hardware tiene un ciclo de vida que el software no tiene. Se compra, se envía, se le instala una imagen, se reparte, se repara, se traslada, se retira, se borra y se recicla, y cada paso tiene un costo y un riesgo. Un portátil que falla en una llamada con un cliente cuesta más que el portátil. Un servidor retirado que sale del edificio con datos en sus discos cuesta mucho más que su valor de reventa. Un cajón de teléfonos sin usar es capital que no hace nada.

El objetivo ágil de construir proyectos en torno a individuos motivados, con el entorno y el apoyo que necesitan, se aplica directamente. La gente no puede hacer su mejor trabajo con un dispositivo lento, que falla o que falta. La tradición de ITIL aporta la visión del ciclo de vida y los registros que la acompañan, tratados en el tema anterior sobre gestión de activos de TI (véase el tema 7.1, Métricas de gestión de activos de TI). Este tema añade las medidas específicas del equipamiento físico: qué antigüedad tiene, con qué frecuencia falla, cuán bien se usa y cómo sale.

La planificación del hardware suele hacerse en grandes ciclos: sustituir todo cada pocos años, en una gran compra, y vivir luego con las consecuencias. Una alternativa más estable, en el espíritu de la entrega continua, es renovar de forma continua una fracción del parque. Eso suaviza el gasto, reparte la carga de trabajo de creación de imágenes y de entrega, y permite aprender de cada lote antes de comprar el siguiente. Significa también que necesitas datos de antigüedad y de fallos para decidir cuándo debe irse cada dispositivo.

Tres ideas organizan las medidas.

- **Antigüedad y fallos.** La [tasa de fallos](https://en.wikipedia.org/wiki/Failure_rate) de una población de dispositivos cambia a lo largo de su vida, y el [tiempo medio entre fallos](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) es un resumen habitual para elementos reparables. Los promedios esconden mucho: un lote con un componente defectuoso puede fallar pronto mientras el resto está bien. Mira los fallos por modelo, lote y banda de antigüedad, y usa tu propio historial, no las cifras de los fabricantes, para planificar.
- **Utilización.** Un dispositivo que nadie usa es desperdicio, y un dispositivo sobrecargado es una fuente de fricción. Mide si el equipamiento se usa y si se ajusta al trabajo.
- **Salida responsable.** El equipamiento retirado puede contener datos sensibles, materiales valiosos y peligrosos y aumentar los residuos electrónicos. Los [residuos electrónicos](https://en.wikipedia.org/wiki/Electronic_waste) son una preocupación ambiental creciente, y muchas jurisdicciones regulan cómo deben manejarse. El [borrado seguro de datos](https://en.wikipedia.org/wiki/Data_erasure) y la reutilización o el reciclaje certificados son el final del ciclo de vida, no una ocurrencia tardía. Un enfoque de [economía circular](https://en.wikipedia.org/wiki/Circular_economy) mantiene en uso los productos y los materiales el mayor tiempo posible.

Las métricas de hardware están expuestas a una distorsión conocida. Un equipo premiado por una antigüedad media baja de los dispositivos puede renovar dispositivos que están bien. Un equipo premiado por un gasto bajo puede estirar las vidas hasta que los fallos perturban a la gente. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica, así que cada medida se empareja con una comprobación de que las personas y el planeta están mejor, y no solo el número (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Planifica un flujo constante.** Renueva una parte del parque en cada periodo y aprende de cada lote.
- **Decide con evidencia.** Usa tus propios datos de fallos, antigüedad y uso para elegir cuándo sustituir.
- **Mira la distribución.** Los promedios esconden la cola de lo viejo, lo que falla y lo que está ocioso.
- **Cuenta el costo total.** El precio de compra es una parte del costo de un dispositivo a lo largo de su vida (véase el tema 7.5, Costo del servicio y economía unitaria).
- **Protege los datos hasta el final.** Un dispositivo no está retirado hasta que sus datos han desaparecido y se ha registrado la evidencia.
- **Prefiere la reutilización y la reparación.** Mantén el equipamiento en servicio mientras sirva bien a la gente.
- **Trata el equipamiento como parte del entorno de trabajo.** La gente necesita dispositivos que funcionen.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Perfil de antigüedad | Distribución de la antigüedad de los dispositivos por clase, y proporción por encima de la vida planificada | antigüedad mediana y percentil 85; proporción de dispositivos más antiguos que la vida planificada de la clase | años; porcentaje | Fechas de compra y de despliegue del registro de activos | Gestión de activos de TI; gestión de la capacidad y el rendimiento | Revisión de salud técnica | Trimestral |
| Tasa de renovación a tiempo | Proporción de dispositivos que alcanzaron la sustitución planificada y se sustituyeron dentro de la ventana planificada | dispositivos sustituidos dentro de la ventana / dispositivos que alcanzaron la sustitución planificada en el periodo | porcentaje | Registro de activos y plan de renovación | Gestión de activos de TI; gestión de solicitudes de servicio | Mantenimiento planificado del entorno de trabajo | Trimestral |
| Tasa de fallos por modelo | Fallos por cada 100 dispositivos y año, por modelo y banda de antigüedad | fallos de hardware en el periodo / dispositivos medios en servicio, escalado a un año, por 100 | fallos por 100 y año | Registros de incidentes y de reparaciones unidos al registro | Gestión de incidentes; gestión de activos de TI | Defectos en el entorno de trabajo | Trimestral |
| Proporción de dispositivos ociosos | Proporción de dispositivos entregados sin actividad en un periodo fijado | dispositivos sin inicio de sesión ni actividad de red en 60 días / dispositivos entregados | porcentaje | Registros de gestión de puestos finales, agregados por clase | Gestión de activos de TI; gestión financiera | Reducción del desperdicio | Mensual |
| Plazo de entrega de la sustitución | Tiempo para sustituir un dispositivo averiado o perdido por uno que funcione | mediana y percentil 85 de las horas o días desde el reporte hasta que el usuario tiene un dispositivo que funciona | días | Registros de incidentes y de solicitudes | Gestión de incidentes; gestión de solicitudes de servicio | Tiempo para desbloquear a un miembro del equipo | Mensual |
| Finalización de la eliminación segura | Proporción de dispositivos retirados con evidencia registrada de borrado o destrucción de datos | dispositivos retirados con evidencia de borrado o destrucción / dispositivos retirados | porcentaje | Registros de eliminación y certificados de borrado | Gestión de la seguridad de la información; gestión de activos de TI | Definición de terminado para retirar equipamiento | Mensual |
| Tasa de reutilización y reciclaje | Proporción de dispositivos retirados que se reutilizaron, reacondicionaron o reciclaron por un canal aprobado | dispositivos reutilizados, reacondicionados o reciclados por un canal aprobado / dispositivos retirados | porcentaje | Registros de eliminación y de socios | Gestión de activos de TI; gestión de proveedores | Objetivo de sostenibilidad en la planificación | Trimestral |

Define las clases de dispositivos (por ejemplo portátil estándar, estación de trabajo de desarrollo, teléfono móvil, servidor, conmutador de red), cada una con su propia vida planificada. La tasa de fallos cuenta solo los fallos de hardware, y excluye los fallos de software, los daños de usuario codificados por separado y las pérdidas. El reloj del plazo de entrega de la sustitución empieza en el reporte y se detiene cuando el usuario confirma un dispositivo que funciona, no cuando se envía uno. La proporción de dispositivos ociosos excluye los dispositivos que son intencionadamente de reserva, que se cuentan como una clase aparte.

## Recomendaciones

### Planifica el flujo

**1. Fija una vida planificada para cada clase y trátala como una hipótesis.** Parte de la garantía del proveedor y de tu propia experiencia, y revisa según lleguen los datos. Es típica una vida planificada de unos pocos años para los portátiles, más larga para el equipamiento de red y más corta para los dispositivos de mucho uso, pero la cifra correcta para tu parque procede de tus propios datos de fallos y de uso. Anota el razonamiento en el registro.

**2. Renueva de forma continua en lotes pequeños.** Sustituye una proporción constante de dispositivos cada mes o trimestre, ordenados por antigüedad, historial de fallos y necesidad. Los lotes pequeños suavizan el costo, reparten el trabajo de creación de imágenes y de entrega y permiten probar un modelo nuevo con unos pocos usuarios antes de comprometerse. Una única gran renovación cada pocos años concentra el riesgo y el esfuerzo.

**3. Mantén un modesto colchón de repuestos.** Un pequeño grupo de dispositivos listos acorta el plazo de entrega de la sustitución en caso de fallos, pérdidas y nuevas incorporaciones. Dimensiona el colchón a partir de tu propio historial de fallos y de contrataciones y revísalo cada trimestre. Cuenta los repuestos como su propia clase para que no distorsionen la utilización.

**4. Planifica con finanzas, no frente a ellas.** Acuerda cómo se capitalizan y deprecian los dispositivos y cómo se muestra en el presupuesto una renovación constante. Las reglas de [depreciación](https://en.wikipedia.org/wiki/Depreciation) afectan a cuándo una sustitución es más barata sobre el papel, y no deben impulsar la sustitución de dispositivos que aún sirven bien a la gente. Mantén una visión compartida del plan y de sus supuestos.

### Aprende de tus propios datos

**5. Estudia los fallos por modelo, lote y antigüedad.** Une los registros de reparaciones e incidentes al registro y mira los fallos por cada 100 dispositivos y año por modelo y banda de antigüedad. Busca lotes que fallan pronto, modelos que fallan de una forma concreta y la antigüedad a la que empiezan a subir los fallos. Usa los hallazgos para elegir modelos y para sincronizar la sustitución. Sé cauto con las muestras pequeñas y di cuándo un modelo tiene demasiados pocos dispositivos para juzgar (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Usa con acierto la garantía y la reparación.** Conoce qué cubre la [garantía](https://en.wikipedia.org/wiki/Warranty) y durante cuánto tiempo, registra las reclamaciones y compara el costo de la reparación con el de la sustitución. La reparación mantiene el equipamiento en uso y fuera del flujo de residuos, y el derecho a la reparación de piezas e información es un tema activo de política en varios lugares. Favorece los modelos que pueden repararse y ampliarse cuando lo demás sea igual.

**7. Mide el uso para encontrar lo que está ocioso y lo que está forzado.** Agrega los datos de actividad por clase y busca dispositivos que nunca se usan y dispositivos que están sistemáticamente al máximo. Los dispositivos ociosos pueden reasignarse o retirarse. Los dispositivos forzados son fricción, y los usuarios la sentirán (véase el tema 6.4, Experiencia de usuarios y empleados). Respeta la privacidad: reporta por clase y grupo, nunca por persona, y usa los mínimos datos.

**8. Haz seguimiento del plazo de entrega de la sustitución como un servicio.** Mide cuánto tarda una persona en tener un dispositivo que funcione tras un fallo o una pérdida, e incluye los pasos: reporte, aprobación, existencias, creación de la imagen, entrega y traspaso. El percentil 85 te dice cuán malos son los casos desafortunados. Corrige primero el paso más lento.

### Gestiona bien los dispositivos

**9. Gestiona los dispositivos de forma central y coherente.** La [gestión de dispositivos móviles](https://en.wikipedia.org/wiki/Mobile_device_management) y herramientas similares permiten inscribir, configurar, actualizar y borrar dispositivos a distancia, lo que reduce el trabajo manual y el riesgo. Úsalas para mantener exacto el registro, para enviar actualizaciones cuidando la concentración de la gente y para respaldar la respuesta ante dispositivos perdidos.

**10. Haz de la eliminación segura un proceso definido.** Sigue una norma reconocida para la sanitización de soportes, como la guía publicada por el Instituto Nacional de Estándares y Tecnología de Estados Unidos, o la equivalente en tu jurisdicción. Registra el método, la fecha y la evidencia de cada dispositivo, y usa socios certificados para la destrucción y el reciclaje. Un paso de eliminación sin evidencia es una brecha.

**11. Prefiere la reutilización y luego el reciclaje.** Donde los dispositivos aún funcionan, redespliégalos internamente, dónalos mediante un socio aprobado o véndelos tras borrarlos. Usa recicladores certificados para el resto. Mide la proporción de dispositivos retirados que van a cada canal y los motivos de los que van directamente a residuo. Las normas sobre residuos electrónicos varían por jurisdicción y se hacen cumplir, así que implica a tus colegas de jurídica y de sostenibilidad.

**12. Revisa el ciclo de vida con las personas que lo usan.** Una vez por trimestre, reúne a finanzas, seguridad, compras, el centro de servicios y unos pocos usuarios para mirar la antigüedad, los fallos, el plazo de entrega y la eliminación. Pregunta qué funciona y qué molesta a la gente. Es colaboración continua en torno al entorno de trabajo, y mantiene realista el plan.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Perfil de antigüedad | Sustituir dispositivos sanos para bajar el promedio; excluir los dispositivos viejos reclasificándolos como repuestos | Tasa de fallos por banda de antigüedad; proporción de dispositivos ociosos; revisión de las reclasificaciones |
| Tasa de renovación a tiempo | Ensanchar la ventana planificada; aplazar las fechas planificadas editando el plan | Cambios del plan registrados con sus motivos; comparar con los fallos y la opinión de los usuarios |
| Tasa de fallos por modelo | Codificar los fallos como daño del usuario o fallos de software; retrasar los registros de reparaciones | Muestreo de la codificación de fallos; comparar los registros de reparaciones con los de incidentes |
| Proporción de dispositivos ociosos | Contar la actividad programada en segundo plano como uso; reasignar dispositivos ociosos a usuarios fantasma | Usar el inicio de sesión humano como señal de actividad; comprobar por muestreo las asignaciones |
| Plazo de entrega de la sustitución | Detener el reloj en el envío; cerrar la solicitud antes de que el usuario tenga un dispositivo que funcione | El reloj termina en la confirmación del usuario; encuesta de las sustituciones recientes |
| Finalización de la eliminación segura | Registrar el borrado sin evidencia; certificados no vinculados a números de serie | Vincular los certificados a los números de serie; auditar una muestra con el socio de eliminación |
| Tasa de reutilización y reciclaje | Contar como reciclados los dispositivos enviados a un intermediario con manejo posterior desconocido | Exigir socios certificados e informes del manejo posterior; auditorías por muestreo |

Una lectura sana es un perfil de antigüedad con una cola vieja delgada, tasas de fallos que guían las compras, plazos de sustitución cortos, evidencia de eliminación completa y una proporción decreciente de equipamiento que va a residuo.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Renovación de ciclo fijo | Presupuesto predecible y reglas sencillas | Sustituye dispositivos que están bien; crea un gran pico de trabajo |
| Renovación continua en lotes | Costo y carga de trabajo suaves; se aprende entre lotes | Necesita buenos datos y disciplina |
| Usar hasta que falle | Menor costo de compra | Perturba a la gente; costo no planificado; riesgo de seguridad de los sistemas viejos |
| Vida planificada corta | Más nuevos, más rápidos, mejor soportados | Mayor costo y más residuos |
| Vida planificada larga | Menor costo y menos residuos | Más fallos y exposición de seguridad en la cola |
| Reparación y reutilización internas | Mantiene los dispositivos en uso; menos residuos | Necesita habilidades y piezas |
| Eliminación externalizada | Manejo especializado | Necesita supervisión de la cadena posterior |

La respuesta en prosa es renovar de forma continua en lotes pequeños, según la antigüedad, los fallos y la necesidad, reparar y reutilizar donde sirva a la gente, y someter la cadena de eliminación a una norma que puedas evidenciar.

## Preguntas para debatir con tu equipo

**1. ¿Cómo es el panorama de antigüedad y fallos de nuestros dispositivos y quién tiene los más viejos?**
Muestra la distribución de antigüedad y la tasa de fallos por banda. Mira quién tiene los dispositivos más viejos y si son las personas que más necesitan equipamiento fiable. El facilitador debe preguntar qué cambiaría el equipo del orden de renovación a la vista del panorama.

**2. ¿Cuánto tarda alguien en tener un dispositivo que funcione después de que se rompe el suyo?**
Rastreen las tres últimas sustituciones desde el reporte hasta un dispositivo que funciona. Anoten las esperas. Pregunten qué paso podría eliminarse o automatizarse. Acuerden un cambio y una forma de medir el efecto.

**3. ¿Qué modelos nos dan más problemas y cómo lo sabemos?**
Enumeren los modelos con las mayores tasas de fallos o de tickets. Comprueben si la muestra es lo bastante grande para juzgar. Pregunten cómo influyen los hallazgos en la próxima compra. Si no lo hacen, decidan cómo trasladarlos a compras.

**4. ¿Qué haríamos si apareciera un dispositivo retirado con datos?**
Recorran el camino de la eliminación y la evidencia que se conserva en cada paso. Pregunten dónde está el eslabón más débil y quién verifica al socio posterior. Acuerden una comprobación por muestreo de la evidencia de eliminación para el trimestre siguiente.

**5. ¿Dónde está ocioso nuestro equipamiento y por qué?**
Miren los dispositivos sin uso en 60 días y los repuestos. Pregunten si deben reasignarse, retirarse o conservarse. La conversación revela además desajustes entre lo que se entregó a la gente y lo que necesita.

**6. ¿Qué haría falta para reutilizar o reparar más de lo que retiramos?**
Enumeren las barreras: habilidades, piezas, política o socios. Pregunten cómo sería un piloto con una clase de dispositivos y cómo se mediría. Incluyan las perspectivas de sostenibilidad y de finanzas.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega dependen de máquinas y dispositivos de prueba fiables, y sienten directamente las compilaciones lentas y los portátiles que fallan. Deben señalar el equipamiento que los frena, participar en la elección de modelos para sus roles y esperar una vía rápida de sustitución. Los equipos que prueban en dispositivos físicos, como teléfonos, deben tratar esos dispositivos como activos con responsables y un plan de renovación.

### Equipos de servicio y de operaciones

Los equipos de operaciones gestionan la cadena de suministro: comprar, recibir, crear la imagen, desplegar, reparar y eliminar. Deben mantener actualizados los registros, vigilar los patrones de fallos, mantener un grupo sensato de repuestos y conservar la evidencia de eliminación. Cargan con el trabajo físico, y su capacidad limita la rapidez con que puede avanzar la renovación.

### Liderazgo y gobernanza

Los líderes quieren un costo predecible, poco riesgo y una historia de sostenibilidad. Deben financiar una renovación constante, pedir datos de antigüedad y de fallos en lugar de una antigüedad media a secas y exigir evidencia de eliminación. La gobernanza debe comprobar que se cumplen las obligaciones ambientales y de protección de datos y que el plan se revisa según cambian las condiciones.

### Clientes y usuarios

Los usuarios quieren un dispositivo que funcione, sustituido con rapidez cuando no lo hace. Poseen además parte del resultado: reportar pronto los problemas, devolver el equipamiento y decir a TI cuándo se mueven. Su opinión sobre el equipamiento y sobre el proceso de sustitución es la retroalimentación más directa que existe. Implícalos en la elección de modelos para su trabajo.

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un gobierno de condado da soporte a 3800 empleados en 40 sedes, con una mezcla de dispositivos de oficina, de campo y compartidos. Los números siguientes son ilustrativos.

Cada cuatro años el condado sustituía todos los portátiles en una única compra, y el último ciclo terminó con un pico de fallos en el año anterior a la sustitución y meses de trabajo de creación de imágenes en el año de la misma. El responsable de activos propone una renovación constante y construye una imagen a partir del registro y de los registros de reparaciones. La antigüedad mediana de los portátiles es de 3,2 años y el percentil 85 es de 5,1 años. Los fallos por cada 100 portátiles y año suben de unos 6 para los dispositivos de menos de tres años a unos 19 para los de más de cinco. Un modelo comprado en un único lote muestra 24 fallos por 100 y año a los dos años de antigüedad, causados por un defecto de batería. El plazo de entrega mediano de la sustitución es de 5 días, con un percentil 85 de 12 días, sobre todo esperando la creación de la imagen. La proporción de dispositivos ociosos es del 7 por ciento, sobre todo repuestos y dispositivos de personal en excedencia larga. De 410 portátiles retirados el año pasado, 366 tienen un certificado de borrado registrado, una tasa de finalización del 89 por ciento, y el 12 por ciento fue a un reciclador sin informe del manejo posterior.

El equipo hace cuatro cambios. Pasa a una renovación trimestral de aproximadamente el 6 por ciento de los portátiles, ordenados por antigüedad e historial de fallos, con el personal de campo y los dispositivos más viejos primero. Negocia con el proveedor el lote defectuoso bajo garantía. Mantiene un grupo de repuestos del 2 por ciento del parque, precargados con la imagen estándar, lo que recorta la espera de la creación de imágenes. Exige un certificado vinculado al número de serie para cada dispositivo eliminado y cambia a un reciclador que informa del manejo posterior. Pone además en marcha un pequeño piloto para reacondicionar y redesplegar dispositivos de menos de cuatro años.

Dos trimestres después el plazo de entrega de la sustitución del percentil 85 es de 4 días, la proporción de dispositivos de más de cinco años ha bajado del 22 por ciento al 13 por ciento, la finalización de la evidencia de eliminación es del 99 por ciento y la tasa de reutilización y reciclaje por canales aprobados es del 94 por ciento. La oficina de finanzas pide un único objetivo de antigüedad media de los dispositivos, y el responsable de activos propone hacer seguimiento conjunto del perfil de antigüedad y la tasa de fallos, explicando que una antigüedad media baja puede comprarse sustituyendo dispositivos sanos. La decisión se anota en el registro de decisiones, con una revisión en seis meses.

## Agilidad, IA, automatización y analítica

### Agilidad

Planifica la renovación como un flujo constante y revisa con regularidad con los usuarios los datos de antigüedad y de fallos. La precaución es que una antigüedad de sustitución rígida desperdicia dispositivos que funcionan y tensa los presupuestos.

### IA

Las funciones de IA pueden elevar los requisitos de hardware, por ejemplo para los modelos locales, lo que cambia el momento de la renovación. Haz seguimiento de los fallos y la antigüedad con tus propios datos y añade una medida de los dispositivos que no pueden ejecutar las herramientas que la gente necesita. La precaución es que las afirmaciones de los proveedores sobre hardware preparado para IA deben contrastarse con tus propias cargas de trabajo.

### Automatización

Automatiza los eventos del ciclo de vida, como las fechas de garantía y los pasos de eliminación, y mide la automatización por los eventos omitidos. La precaución es que los flujos automáticos de borrado y eliminación necesitan prueba de finalización, así que audita una muestra.

### Analítica

Muestra el perfil de antigüedad y las tasas de fallos por modelo con recuentos. La decisión a la que informa es cuánto renovar en cada periodo. La precaución es que las tasas de fallos de flotas pequeñas son ruidosas, así que evita sacar conclusiones de un puñado de dispositivos.

## Perspectiva sectorial

**Startup.** Los dispositivos se compran según hace falta y a menudo los compra quien los va a usar. Mantén una lista sencilla con las fechas de compra, borra los dispositivos al salir la persona y evita comprar de más. Usa pronto una herramienta de inscripción gestionada, ya que es más barato que añadirla después.

**Pequeña empresa.** El costo de un dispositivo averiado recae en unas pocas personas. Mantén uno o dos repuestos, anota las fechas de garantía y ten una rutina de borrado y eliminación. Los recicladores y reacondicionadores locales pueden ser buenos socios. Una lista de verificación de eliminación de tres líneas vale más que ninguna.

**Gran empresa.** La escala hace importantes el comportamiento por lotes y la gestión de proveedores. Usa los datos de fallos para negociar con los proveedores, estandariza unos pocos modelos por clase y ejecuta una renovación continua con apoyo logístico. Alinéate con los informes de sostenibilidad, ya que el hardware suele dominar la huella de la TI.

**Gobierno y sector público.** Las reglas de contratación, la conservación de registros y la estricta protección de datos dan forma al ciclo de vida. Documenta la sanitización conforme a una norma reconocida, conserva la evidencia de eliminación durante el periodo exigido y considera los compromisos públicos de sostenibilidad y reparación. A los organismos públicos puede exigírseles reportar los residuos electrónicos (véase el tema 8.3, Métricas de cumplimiento y auditoría).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el esfuerzo de unir los datos del registro, de las reparaciones y de los puestos finales; algunas herramientas de gestión de dispositivos si aún no existen; el grupo de repuestos; y el trabajo de proceso de la eliminación con evidencia. Los ahorros y beneficios se muestran en menos fallos perturbadores, un presupuesto más suave, menos equipamiento desperdiciado y menor riesgo de un incidente de datos.

Construye el caso con tus propios datos. Compara el costo de mantener un dispositivo más allá de su vida planificada, incluido el esfuerzo de soporte y el tiempo de trabajo perdido por cada fallo, con el costo de sustituirlo antes. Compara el costo del grupo de repuestos con los días de trabajo perdidos que se ahorran por cada fallo. Cuenta el número de dispositivos retirados sin evidencia de borrado y el costo de un incidente de datos que seguiría. Evita citar vidas medias de dispositivos o cifras de residuos electrónicos de fuentes publicadas sin comprobar su método y su fecha. El costo total de propiedad reúne estas partes (véase el tema 7.5, Costo del servicio y economía unitaria), y el [costo total de propiedad](https://en.wikipedia.org/wiki/Total_cost_of_ownership) completo de un dispositivo incluye la compra, el soporte, la energía, la perturbación y la eliminación.

## Antipatrones y trampas

- **Sustituir todo según el calendario.** Desperdicia dispositivos que funcionan y crea un pico de carga de trabajo. Usa la antigüedad, los fallos y la necesidad.
- **Usar hasta que falle.** El costo no planificado y la perturbación superan el ahorro. Vigila la cola de antigüedad.
- **Usar la antigüedad media como objetivo.** Puede cumplirse sustituyendo dispositivos sanos. Muestra el perfil y la tasa de fallos.
- **Fiarse de los números de fiabilidad de los fabricantes.** Tu uso es distinto. Usa tus propios datos de fallos.
- **Eliminar sin evidencia.** Un borrado sin registrar es un riesgo que no puedes demostrar que gestionaste.
- **Enviar los dispositivos al reciclador más barato.** El manejo posterior importa. Usa socios certificados.
- **Seguir a las personas a través de sus dispositivos.** Reporta por clase y grupo, y nunca por individuo.
- **Ignorar la reparación y la reutilización.** Mantener el equipamiento en servicio es más barato y más amable con el medio ambiente.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Planificación | Comprar cuando se rompe | Renovación periódica según calendario | Vida planificada por clase; renovación constante en lotes | Renovación sincronizada por antigüedad, fallos y necesidad; repuestos dimensionados con datos | Renovación coordinada con proveedores, finanzas y objetivos de sostenibilidad entre sedes |
| Aprendizaje a partir de los datos | Sin registros de fallos | Registros de reparaciones conservados | Tasa de fallos por modelo y antigüedad con seguimiento | Los hallazgos cambian las compras y la sincronización; plazo de entrega gestionado | Datos de fallos y de uso compartidos con los proveedores para mejorar el diseño y las condiciones |
| Salida | Los dispositivos desaparecen | Borrado informal | Proceso de eliminación con evidencia de cada dispositivo | Evidencia auditada; reutilización y reciclaje con seguimiento | Prácticas circulares con socios certificados e informes públicos |

## Lista de verificación

- [ ] Las clases de dispositivos y las vidas planificadas están definidas, con el razonamiento anotado.
- [ ] Existe un plan de renovación constante, revisado con finanzas.
- [ ] Se reportan el perfil de antigüedad, la tasa de fallos por modelo y el plazo de entrega de la sustitución.
- [ ] Un grupo de repuestos está dimensionado a partir de datos de fallos y de contrataciones.
- [ ] Los dispositivos ociosos se identifican por clase, con reglas de privacidad.
- [ ] Las reclamaciones de garantía y las reparaciones se registran y se usan en las decisiones de compra.
- [ ] Cada dispositivo retirado tiene un método de sanitización y una evidencia registrados.
- [ ] Los socios de eliminación están certificados e informan del manejo posterior.
- [ ] Las tasas de reutilización y reciclaje tienen seguimiento.
- [ ] Una revisión trimestral incluye a finanzas, seguridad, compras, el centro de servicios y los usuarios.

## Prompts de IA

**Analiza los datos de fallos por modelo y antigüedad.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Diseña un plan de renovación continua.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Revisa un proceso de eliminación.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Reduce el plazo de entrega de la sustitución.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica del ciclo de vida del hardware.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de hardware lleva su vector de manipulación, su barrera de protección y su regla de evidencia.

## Ideas clave

- Renueva de forma continua una proporción constante de dispositivos, usando tus propios datos de antigüedad, fallos y uso.
- Mira la distribución de antigüedad y los fallos por modelo, no el promedio.
- Mantén rápida la sustitución con un grupo de repuestos y un camino corto y medido.
- Trata la eliminación segura con evidencia como el final del ciclo de vida y prefiere la reparación, la reutilización y el reciclaje certificado.
- Reporta por clase de dispositivo y grupo, y no sigas nunca a las personas a través de su equipamiento.
- Revisa el ciclo de vida con finanzas, seguridad, compras y usuarios juntos.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
