# Métricas del centro de servicios

**Mide el centro de servicios por lo bien que ayuda a las personas a volver al trabajo y por cuánto enseña al resto de la organización, porque los recuentos de llamadas y los minutos al teléfono premian la velocidad y el volumen a expensas de ambas cosas.**

## Visión general y motivación

Para la mayoría de los usuarios, el centro de servicios es el servicio. Rara vez conocen a los ingenieros ni ven el pipeline; conocen a quien contesta cuando algo va mal. Un [centro de ayuda](https://en.wikipedia.org/wiki/Help_desk) (help desk) es el departamento o la persona que presta asistencia e información, normalmente sobre problemas informáticos. En el uso de la [gestión de servicios de TI (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), el centro de servicios es el punto único de contacto entre el proveedor y sus usuarios, y atiende tanto incidentes (perturbaciones no planificadas o posibles perturbaciones de un servicio) como solicitudes de servicio (peticiones rutinarias de algo que el servicio normalmente ofrece). En [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la práctica del centro de servicios se sitúa junto a la gestión de incidentes y la gestión de solicitudes de servicio, y se describe por su propósito y sus resultados, no por una lista fija de medidas. Este tema ofrece, por tanto, orientación práctica y no un requisito del marco.

Las medidas que crecieron en torno al centro de servicios proceden en gran parte de la tradición de los [centros de llamadas](https://en.wikipedia.org/wiki/Call_centre): cuántos contactos llegaron, cuánto esperó la gente, cuántos desistieron, cuánto duró cada contacto y cuántos se resolvieron al primer intento. Esas medidas son útiles y baratas, y son también las más fáciles del libro de convertir en objetivos que dañan el servicio. Las llamadas cortas parecen eficientes hasta que el mismo usuario vuelve a llamar tres veces. Un abandono bajo parece atento hasta que los agentes contestan deprisa y no resuelven nada. El cometido del tema es describir cada medida, declarar sus relojes y decir qué premia y qué oculta.

La visión ágil añade un segundo propósito. Cada contacto es evidencia de lo que los usuarios encuentran confuso, de lo que se rompe y de lo que desearían que hiciera el servicio. Un equipo ágil que publica a menudo necesita esa evidencia con rapidez y a nivel de servicio, no de ticket. Así, el centro de servicios se mide dos veces: como una operación que atiende bien a las personas y como un sensor que alimenta la lista de pendientes. El volumen es el puente entre ambas. Un recuento creciente puede significar crecimiento, una mala versión, un artículo que falta o un canal nuevo, y la métrica sola no puede decir cuál (véase el tema 3.2, Volumen y prioridad de incidentes, para ver cómo leer los recuentos por categoría y prioridad).

Términos clave: la [resolución en la primera llamada](https://en.wikipedia.org/wiki/First_call_resolution) es la proporción de contactos resueltos en el primer contacto; un [distribuidor automático de llamadas](https://en.wikipedia.org/wiki/Automatic_call_distributor) encamina las llamadas entrantes al personal disponible; un [acuerdo de nivel de servicio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) es un compromiso entre proveedor y cliente; un [percentil](https://en.wikipedia.org/wiki/Percentile) es el valor por debajo del cual cae una proporción dada de observaciones, de modo que el percentil 85 del tiempo de gestión es la duración dentro de la cual termina el 85 por ciento de los contactos; y la [satisfacción del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) (véase el tema 6.1, Métricas de satisfacción del cliente) es lo bien que un servicio cumple las expectativas de los usuarios.

Los términos «contacto» y «ticket» no son lo mismo. Un contacto es un intento de una persona de llegar al centro de servicios por un canal como teléfono, chat, correo, portal, atención presencial o mensajería. Un ticket (también llamado registro) es lo que crea la herramienta ITSM para seguir el trabajo. Un ticket puede implicar muchos contactos, y algunos contactos, como un restablecimiento de contraseña atendido en el acto, pueden crear un ticket solo para el registro. Mezclar ambos es la fuente más común de confusión en los informes del centro de servicios, así que las definiciones siguientes los cuentan por separado.

## Principios clave

- **Cuenta por separado los contactos y los tickets y define ambos.** Un contacto es un intento de llegar al centro de servicios; un ticket es un registro de trabajo. Los informes que los mezclan no pueden conciliarse.
- **Reporta los tiempos como distribuciones.** Muestra la mediana y un percentil alto como el 85 o el 95, nunca solo un promedio, porque unos pocos contactos muy largos o muy cortos distorsionan la media.
- **Empareja cada medida de velocidad con una medida de resultado.** La velocidad de respuesta, el abandono y el tiempo de gestión describen esfuerzo. La resolución y el recontacto describen si se ayudó al usuario.
- **Normaliza el volumen frente al uso.** Un recuento que sube porque creció la base de usuarios es una historia distinta de uno que sube por usuario.
- **Mide canales y servicios, no personas.** Estas métricas describen un centro de servicios, una cola, un servicio y un canal. Nunca se usan para clasificar o sancionar a agentes individuales.
- **Trata el centro de servicios como un sensor.** Cada métrica debería llevar a una pregunta para los equipos de entrega sobre qué arreglar, documentar o automatizar aguas arriba.

## Definiciones de métricas

La tabla enumera siete medidas que la mayoría de los centros de servicios pueden recoger de su plataforma de telefonía y de su herramienta ITSM. Los umbrales y los objetivos los fija y los anota cada centro de servicios; este tema no ofrece valores de referencia.

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volumen de contactos | Número de contactos recibidos por el centro de servicios, por canal y periodo | recuento de contactos creados en el periodo, por canal; se excluyen los contactos internos de prueba, las respuestas automáticas duplicadas del correo y las llamadas salientes hechas por el centro | recuento | Registro de la plataforma de telefonía o de chat; registros de contactos de la herramienta ITSM | Centro de servicios | Señal de demanda en el refinamiento de la lista de pendientes | Semanal |
| Tasa de contactos | Contactos en relación con el tamaño de la población atendida, para que el crecimiento no se confunda con un problema | contactos del periodo / usuarios o cuentas activos del periodo, escalado a 100 usuarios; el recuento de usuarios se toma del mismo periodo y la definición de «activo» está escrita | contactos por 100 usuarios | Registros de contactos y sistema de identidad o de licencias | Centro de servicios; gestión de niveles de servicio | Demanda ajustada por el uso en la revisión de producto | Mensual |
| Tiempo de respuesta | Espera desde el momento en que un contacto entra en la cola hasta que lo atiende una persona o una respuesta automatizada | el reloj empieza cuando el contacto se pone en cola y se detiene en la primera respuesta humana; los contactos abandonados se excluyen de esta medida y se cuentan en el abandono; se reportan la mediana y el percentil 85 | segundos (teléfono, chat); minutos u horas (correo, portal) | Plataforma de telefonía; plataforma de chat; marcas de tiempo de la herramienta ITSM | Centro de servicios | Acuerdo de trabajo sobre capacidad de respuesta | Diaria durante las ventanas de revisión, semanal en la tendencia |
| Tasa de abandono | Proporción de contactos que terminan antes de que nadie los atienda, por decisión del usuario | contactos terminados por el usuario antes de la primera respuesta humana / contactos en cola; los contactos terminados dentro de un breve periodo de gracia (declarado en la definición, por ejemplo cinco segundos) se excluyen por accidentales | porcentaje | Plataforma de telefonía; plataforma de chat | Centro de servicios | Señal de costo del retraso en la revisión de servicio | Semanal |
| Tiempo de gestión | Tiempo que el centro de servicios dedica a un contacto | el reloj empieza cuando una persona atiende y se detiene cuando termina el contacto, incluido el trabajo de documentación posterior; la espera del usuario se incluye solo si la definición lo dice; se reportan la mediana y el percentil 85, desglosados por tipo de contacto | minutos | Plataforma de telefonía; plataforma de chat; registro de trabajo de la herramienta ITSM | Centro de servicios; gestión de incidentes | Señal de esfuerzo en el refinamiento y la planificación de la capacidad | Semanal |
| Tasa de resolución en el primer contacto | Proporción de contactos resueltos en el primer contacto sin un contacto posterior sobre el mismo asunto | contactos resueltos durante el contacto y no seguidos de un recontacto sobre la misma cuestión por el mismo usuario dentro de la ventana de recontacto / contactos elegibles; se excluyen las llamadas en que solo se requiere una derivación y las llamadas que no se espera que el centro resuelva | porcentaje | Campos de resolución y vinculación de la herramienta ITSM; confirmación del usuario donde se recoja | Centro de servicios; gestión de incidentes | Comprobación de definición de terminado, resuelto al primer contacto | Mensual |
| Tasa de recontacto | Proporción de contactos resueltos seguidos de otro contacto sobre el mismo asunto | contactos seguidos, dentro de la ventana de recontacto (por ejemplo siete días, fijada en la definición), de otro contacto del mismo usuario sobre el mismo servicio o cuestión / contactos resueltos en el periodo anterior; se excluyen los contactos sobre una cuestión nueva | porcentaje | Vinculación e historial de reaperturas de la herramienta ITSM; registros de contactos | Centro de servicios; gestión de incidentes | Tasa de defectos escapados | Mensual |

La resolución en el primer contacto tiene más de una definición defendible, así que la definición forma parte de la métrica. Algunos centros cuentan un contacto como resuelto cuando el agente cierra el ticket durante la llamada. Otros lo cuentan solo cuando el usuario no vuelve dentro de una ventana. Lo segundo es más difícil de recoger y más difícil de manipular, y es lo que se usa aquí. Indica la ventana, indica qué cuenta como «el mismo asunto» y aplica ambas cosas del mismo modo en cada periodo.

## Recomendaciones

### Separa los contactos de los tickets desde el principio

**Da a los contactos y a los tickets sus propias definiciones, identificadores y recuentos.** Un contacto es un registro de un intento de llegar al centro de servicios, y un ticket es un registro de trabajo. Vincúlalos en la herramienta para que un recontacto sobre el mismo asunto sea visible. Los informes que mezclan ambos dan una cifra de volumen que nadie puede conciliar con la plataforma de telefonía.

### Reporta el volumen por canal, categoría y tasa normalizada

**Muestra el volumen total, el volumen por canal, el volumen por categoría y la tasa de contactos por 100 usuarios.** Los totales por sí solos confunden el crecimiento con los problemas. Una caída del volumen telefónico puede ser un traslado al chat, y un aumento de contactos por el portal puede ser un éxito deliberado del autoservicio. Grafica las series durante al menos un año para que la estacionalidad, como los inicios de curso y los cierres del ejercicio fiscal, sea visible.

### Usa distribuciones para cada medida de tiempo

**Reporta la mediana y un percentil alto para el tiempo de respuesta y el tiempo de gestión.** El promedio de una distribución asimétrica describe casi la experiencia de nadie. La mediana muestra el contacto típico, y el percentil 85 o 95 muestra cuán mala es la cola lenta. Indica en cuántos contactos se apoya la cifra y marca la lectura como poco fiable cuando una cola atiende solo un puñado de contactos en el periodo (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

### Trata el abandono como señal de demanda y de dotación de personal

**Lee el abandono junto con el tiempo de respuesta y los patrones de llegada.** La gente abandona cuando la espera es mayor de lo que esperaba, así que la tasa sube con la espera, y la espera sube cuando las llegadas superan la capacidad. La [teoría de colas](https://en.wikipedia.org/wiki/Queueing_theory) explica por qué la espera crece abruptamente cuando una cola se acerca a la utilización total, razón por la que un centro de servicios que opera cerca del 100 por ciento de ocupación tiene siempre esperas largas y un abandono alto. Dota de personal según los patrones de llegada por hora y día y no según un promedio mensual, y muestra el abandono por hora del día (véase el tema 2.3, Trabajo en curso y teoría de colas).

### Define con cuidado la resolución en el primer contacto y mídela desde el lado del usuario

**Usa una definición basada en el recontacto y confírmala con una breve pregunta a los usuarios.** Contar solo los contactos que no vuelven dentro de una ventana declarada es más difícil de inflar que un indicador puesto por el agente al cierre. Añade una comprobación de una pregunta, como «¿se resolvió su problema?», y compárala con la cifra de recontacto. Cuando ambas discrepan, la respuesta del usuario es mejor guía, y la brecha señala dónde el cierre es prematuro.

### Usa el tiempo de gestión para planificar, no para fijar objetivos

**Trata el tiempo de gestión como un insumo de capacidad y un diagnóstico, y no fijes nunca un objetivo que los agentes deban batir.** Un objetivo de tiempo de gestión paga la prisa, los traslados tempranos y la documentación escasa. Usa la distribución por tipo de contacto para planificar la dotación y para encontrar contactos que tardan mucho más que otros similares, lo que suele señalar un artículo que falta, una herramienta torpe o un proceso poco claro. Apunta a las causas del sistema, no a los agentes.

### Ata las métricas del centro de servicios al trabajo de entrega

**Revisa las principales categorías de contactos con los equipos propietarios de los servicios.** Cada mes, toma las cinco categorías que generaron más contactos por 100 usuarios y pregunta qué cambio aguas arriba las eliminaría: una corrección, un artículo, un mejor mensaje de error o una vía de autoservicio. Anota las respuestas en la lista de pendientes del equipo propietario. Esto convierte los números del centro de servicios en trabajo de mejora y es el uso ágil más claro de los datos (véase el tema 3.6, Métricas de gestión del conocimiento, y el tema 3.7, Métricas de autoservicio y automatización).

### Incluye todos los canales en las mismas definiciones

**Aplica las mismas reglas de reloj y de recuento al teléfono, el chat, el correo, el portal, la atención presencial y la mensajería.** Los canales asíncronos no tienen cola en directo, así que el tiempo de respuesta significa algo distinto en cada uno. Define el reloj por canal y reporta cada uno por separado antes de combinarlos. Un centro de servicios que publica solo su mejor canal oculta la experiencia de todos los demás.

### Vincula las métricas con la experiencia del usuario

**Empareja las medidas operativas con una pregunta de satisfacción posterior al contacto y un espacio de texto libre.** Una respuesta rápida a un contacto grosero o inútil es un mal resultado, y los relojes no pueden verlo. Muestra la tasa de respuesta y la composición de los encuestados junto a la puntuación, porque solo responde una parte autoseleccionada de los usuarios (véase el tema 1.5, Fuentes de datos e instrumentación). Lee los comentarios junto con las personas que atienden los contactos, en un entorno de equipo.

### Mantén las métricas a nivel de equipo y de cola

**Reporta por cola, canal, servicio y equipo, y reserva los datos a nivel de agente para conversaciones de acompañamiento en las que participe el propio agente.** Clasificar a los agentes por tiempo de gestión o por tasa de resolución empuja a escoger los contactos fáciles y a evitar los difíciles. También daña la confianza en los datos, y los usuarios sienten el resultado en la calidad de la ayuda. Usa los números a nivel de equipo para preguntar qué necesita el sistema.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Volumen de contactos | Los agentes desalientan el registro redirigiendo a los usuarios a canales que no se cuentan, o dividen un contacto en varios para que una cola parezca ocupada; los gerentes fijan como objetivo un volumen menor | Tasa de contactos por 100 usuarios y una conciliación periódica de los recuentos de telefonía con los recuentos de tickets; una regla fija de que se cuenta cada canal |
| Tasa de contactos | El denominador se elige a posteriori (por ejemplo una definición amplia de «activo») para que la tasa parezca mejor | Una definición escrita y fechada de «usuarios activos» y los recuentos en bruto mostrados junto a la tasa |
| Tiempo de respuesta | Los contactos se atienden con un saludo automático o un traslado a una cola tranquila, o se descuelga la llamada y se pone en espera; el correo recibe una respuesta automática que cuenta como respuesta | Definir el reloj como la primera respuesta humana y seguir el abandono y el recontacto junto a él |
| Tasa de abandono | Se cortan las llamadas antes de ponerlas en cola, se alarga el periodo de gracia o se cuenta una oferta de devolución de llamada como contacto atendido | Percentiles del tiempo de respuesta, tasa de finalización de devoluciones de llamada y un periodo de gracia publicado |
| Tiempo de gestión | Se apresuran las llamadas, se trasladan pronto o se terminan antes de resolver el problema; se dejan notas escasas; se traslada trabajo al tiempo posterior al contacto que el reloj excluye | Resolución en el primer contacto, tasa de recontacto y una revisión por muestreo de la calidad de la documentación por parte del equipo |
| Tasa de resolución en el primer contacto | Se cierran tickets durante la llamada sin importar el resultado, se lee «el mismo asunto» de forma estrecha o se clasifican los contactos difíciles como «no se espera que se resuelvan» | Tasa de recontacto, una confirmación del usuario de una pregunta y auditorías periódicas de las exclusiones por parte del equipo |
| Tasa de recontacto | Se pide a los usuarios abrir un ticket nuevo para un seguimiento, o se registran los seguimientos bajo otra categoría para que no se vinculen | Reglas de vinculación en la herramienta, una auditoría por muestreo de contactos repetidos sin vincular y la resolución declarada por el usuario |

Una lectura sana es un conjunto de cifras que concuerdan entre sí. El tiempo de respuesta y el abandono se mueven juntos, el tiempo de gestión varía con el tipo de contacto y no con el objetivo del día, la resolución en el primer contacto y el recontacto son imágenes especulares que suman cerca de su techo y la respuesta del usuario a «¿se resolvió su problema?» concuerda con la cifra de recontacto. Una cifra que mejora bruscamente mientras las demás permanecen planas es motivo para mirar cómo se recoge antes de celebrar. Un centro de servicios manipulado suele mostrar los síntomas en el recontacto, en categorías repetidas del volumen y en quejas crecientes.

## Compensaciones: ventajas y desventajas

| Elección | Ventaja | Costo o riesgo |
| --- | --- | --- |
| Tiempo medio de gestión como titular | Sencillo, disponible en toda plataforma, fácil de explicar | Premia la prisa, oculta la cola e invita a objetivos que dañan la resolución |
| Mediana y percentil 85 para los tiempos | Describe el caso típico y la cola lenta | Necesita suficientes contactos para ser estable y algo más de explicación |
| Resolución en el primer contacto por indicador de cierre del agente | Fácil de recoger | Fácil de inflar y difícil de comparar entre centros de servicios |
| Resolución en el primer contacto por ventana de recontacto | Difícil de manipular y más cercana a la experiencia del usuario | Necesita una buena vinculación en la herramienta y espera a que pase la ventana antes de poder reportarse |
| Abandono con periodo de gracia | Elimina los cuelgues accidentales | El periodo de gracia puede alargarse para halagar la cifra |
| Tasa de contactos por 100 usuarios | Separa el crecimiento de los problemas | Depende de un recuento de usuarios fiable y de una definición clara de «activo» |
| Encuesta posterior al contacto | Capta lo que los relojes no pueden | Tasas de respuesta bajas y desiguales, y un sesgo hacia los usuarios con sentimientos fuertes |
| Reportar solo por equipo y cola | Protege la confianza y se centra en el sistema | Da menos detalle para el acompañamiento individual, que necesita un proceso distinto y privado |

Ningún conjunto de medidas elimina la tensión entre velocidad y cuidado. Un centro de servicios que responde a cada contacto en segundos y resuelve poco tiene una buena cola y un mal servicio, y uno que se toma el tiempo de resolver bien mostrará tiempos de gestión y de espera mayores. La salida es acordar qué resultado importa más este trimestre, hacer explícita la compensación y revisar la pareja de métricas que la mantiene en equilibrio. Más rápido es mejor solo mientras la resolución se mantenga.

## Preguntas para debatir con tu equipo

**1. ¿Qué significa «contacto» aquí y concuerda nuestro recuento con lo que reportan por separado la plataforma de telefonía y la herramienta ITSM?**
Pide al grupo que siga un día de contactos por todos los canales y compare los recuentos de los dos sistemas. Anota los contactos que nunca se convierten en tickets y los tickets que nunca empiezan como contactos. Un facilitador debe esperar una brecha al principio y tratarla como un hallazgo sobre definiciones, no como un fallo de las personas. Acuerden una regla para el próximo informe y quién es su responsable.

**2. Cuando decimos que un contacto se resolvió en el primer contacto, ¿cómo sabemos que el usuario estaría de acuerdo?**
Revisa diez contactos recientes marcados como resueltos en el primer contacto y comprueba si alguno de los usuarios volvió por el mismo asunto. Pregunta qué podría haber hecho el agente de otro modo en los que volvieron. La discusión suele mostrar dónde ocurre el cierre antes de que el usuario esté listo. Decidan si añadir una confirmación de una pregunta y cuál debe ser la ventana de recontacto.

**3. ¿Qué le pasa a la persona en espera y cuándo se rinde?**
Mira la curva de abandono según el tiempo esperado. La mayoría de los centros de servicios descubre un punto a partir del cual la gente se va en grandes cantidades, y ese punto es el límite práctico de la cola. Pregunta qué devolución de llamada, chat o respuestas automatizadas se ofrecen y si alguna se cuenta como atendida cuando el problema no se resuelve. El facilitador puede usar esto para abrir una discusión sobre la dotación por hora, no por mes.

**4. ¿Cuáles de nuestros números de tiempo de gestión cambiarían si prestáramos atención al trabajo posterior al contacto y a la espera?**
Enumera lo que incluye el reloj y lo que deja fuera. Pregunta si alguien ha sentido presión para acortar las llamadas y qué hizo. Esta pregunta es más fácil de responder en un equipo que en un informe, así que da a la gente la oportunidad de hablar sin atribución. Acuerden una definición y si el tiempo de gestión se usará solo para planificar.

**5. ¿Qué cinco categorías generaron más contactos por 100 usuarios el trimestre pasado y quién es responsable de la corrección de cada una?**
Lleva a la misma mesa los datos de categoría y los responsables de los servicios subyacentes. Para cada categoría, pregunta si la mejor respuesta es una corrección, un artículo, un mejor mensaje o una vía de autoservicio. El punto es salir con elementos en una lista de pendientes y responsables con nombre. Vuelvan a la lista el trimestre próximo para ver cuáles se movieron.

**6. ¿Estamos reportando esto a nivel de equipo y de cola y alguien lo usa para comparar individuos?**
Pregunta directamente al grupo si alguna de estas cifras se ha usado para juzgar a una persona y qué efecto tuvo. Hablen de qué dejaría de hacer el centro de servicios si terminara la comparación individual y qué empezaría a hacer. El facilitador debe anotar los ejemplos y llevarlos al responsable de las métricas para una decisión sobre la política. El fin es un compromiso escrito de que los datos describen el sistema.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega obtienen del centro de servicios la mejor visión de su propio servicio. Los contactos por 100 usuarios tras una versión muestran con rapidez si un cambio confundió a la gente, y las categorías muestran qué arreglar después. Los equipos deben esperar una revisión mensual de las principales categorías y tratarlas como insumo de la lista de pendientes, sin culpar al centro de servicios por reportar lo que le dicen los usuarios. Pidan al centro de servicios muestras de contactos además de recuentos, porque las palabras que usan los usuarios suelen revelar un problema de etiquetado o de diseño.

### Equipos de servicio y de operaciones

El personal del centro de servicios y sus responsables necesitan cifras que les ayuden a planificar y a mejorar sin convertirse en objetivos. La dotación por hora a partir de los patrones de llegada, las revisiones de recontactos y las peticiones de artículos son los productos más útiles. El personal debe participar en cómo se definen las métricas, porque sabe dónde engañan los relojes. Debe ver primero las cifras de su propio equipo y poder cuestionarlas.

### Liderazgo y gobernanza

Los líderes necesitan un conjunto corto de cifras que concuerden entre sí: volumen y tasa de contactos, tiempo de respuesta y abandono, resolución en el primer contacto y recontacto, y una puntuación de satisfacción del usuario con su tasa de respuesta. Deben pedir distribuciones y notas sobre los cambios de definición, y resistir la tentación de fijar un objetivo único sobre el tiempo de gestión o el volumen. Los objetivos sobre la velocidad sola invitan a la manipulación descrita arriba. La gobernanza debe registrar quién es responsable de cada definición (véase el tema 1.4, Gobernanza y propiedad de las métricas).

### Clientes y usuarios

A los usuarios les importa si lograron comunicarse, si los trataron bien y si el problema se quedó arreglado. No les importa el tiempo de gestión. Contarles qué mide el centro de servicios y actuar sobre su retroalimentación genera confianza, igual que asegurarse de que los canales que prefieren se miden y tienen personal. Los clientes que compran el servicio se ven atendidos por compromisos claros en un SLA o en un acuerdo de experiencia (véase el tema 5.1, Métricas de SLA, OLA y XLA, y el tema 6.2, Acuerdos de nivel de experiencia).

## En la práctica: un ejemplo de gestión de servicios

El departamento de TI de un hospital regional opera un centro de servicios de aproximadamente una docena de personas para unos 4000 usuarios clínicos y administrativos. Los números siguientes son ilustrativos y no proceden de ninguna organización real.

La vista semanal del equipo muestra 1900 contactos (ilustrativo), lo que supone una tasa de contactos de 47,5 contactos por 100 usuarios (ilustrativo). El tiempo de respuesta telefónico tiene una mediana de 40 segundos y un percentil 85 de 6 minutos (ilustrativo). El abandono es del 14 por ciento (ilustrativo) y sube bruscamente las mañanas de los días laborables entre las 08:00 y las 09:30. El tiempo mediano de gestión es de 7 minutos y el percentil 85 es de 22 minutos (ilustrativo). La resolución en el primer contacto por ventana de recontacto es del 61 por ciento (ilustrativo), y la tasa de recontacto a siete días es del 19 por ciento (ilustrativo).

En la revisión mensual, la responsable del centro de servicios y el equipo de aplicaciones clínicas miran las categorías. Los problemas de inicio de sesión y de credenciales explican una gran parte de los contactos matutinos, y un cambio reciente en el inicio de sesión de la aplicación clínica produjo un pico de contactos sobre el mismo mensaje de error. El centro de servicios y el equipo de aplicaciones deciden hacer tres cosas. Cambiarán el mensaje de error y añadirán un enlace al artículo, añadirán una opción de devolución de llamada para el pico matutino y adelantarán una hora el inicio de un turno para cubrir el patrón de llegadas de las 08:00. Revisarán el abandono, el recontacto y la tasa de contactos de esa categoría pasadas cuatro semanas.

A mitad del trimestre, un gerente propone un objetivo de tiempo de gestión de 5 minutos para reducir la cola. El equipo muestra que los contactos del percentil 85 son los lentos que más importan y que un objetivo empujaría a los agentes a terminar las llamadas antes de tiempo. También notan que la cifra de resolución en el primer contacto ha subido al 78 por ciento (ilustrativo) en una semana mientras la tasa de recontacto subía al 27 por ciento (ilustrativo). Una revisión descubre que algunos turnos habían empezado a cerrar tickets durante la llamada con una nota al usuario para que volviera a llamar, lo que contaba como resolución en el primer contacto. El equipo restablece la definición basada en el recontacto, añade la pregunta de confirmación del usuario y abandona el objetivo de tiempo de gestión. A partir de entonces se reportan juntos el abandono, el tiempo de respuesta y el recontacto.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata la retroalimentación del centro de servicios como insumo de la mejora continua: una revisión periódica con las partes interesadas de los principales motivos de contacto y un cambio para eliminar una causa. La precaución es que los objetivos de tiempo de gestión empujan a los agentes a apresurarse, así que mantenlos fuera de las evaluaciones individuales.

### IA

La clasificación inicial con IA y las respuestas redactadas pueden recortar el tiempo de respuesta y el tiempo de gestión mientras cambian lo que llega a un humano, de modo que los contactos restantes son más difíciles y los promedios engañan. Empareja la velocidad con la tasa de recontacto y con la proporción de respuestas redactadas por IA que un agente modificó de forma sustancial. La precaución es que un agente virtual que cierra una conversación no equivale a un problema resuelto, así que cuenta los contactos que vuelven.

### Automatización

Recoge automáticamente los eventos de contacto, de cola y de estado de los sistemas de telefonía y de tickets, y mide la automatización del enrutamiento por los errores de enrutamiento y por los contactos que rebotan entre colas. La precaución es que la categorización automática se desvía, así que muestrea tickets para comprobar que la categoría era correcta.

### Analítica

Usa percentiles para el tiempo de respuesta, muestra el número de contactos que hay detrás de cada tasa y desglosa los motivos de contacto para que la decisión sea qué causa eliminar. La precaución es que las colas pequeñas producen porcentajes ruidosos, así que muestra intervalos o recuentos para los servicios de bajo volumen.

## Perspectiva sectorial

**Startup.** El centro de servicios suele ser una bandeja compartida o un canal de chat atendido por quien esté libre. Cuenta los contactos por canal, etiqueta la categoría y mira las cinco principales cada mes con las personas que construyen el producto. No compres una plataforma de centro de llamadas antes de que el volumen lo justifique, y no fijes objetivos de velocidad cuando dos personas atienden todos los contactos.

**Pequeña empresa.** Una persona o un proveedor externo suele operar un centro de servicios alojado. Usa los informes estándar de la herramienta, pide por escrito al proveedor sus definiciones de contacto, resolución y abandono y exporta de vez en cuando los datos en bruto. Una breve pregunta recurrente a los usuarios, como «¿se resolvió su problema?», da más información que un panel largo.

**Gran empresa.** Muchas colas, idiomas, herramientas y proveedores llevan a definiciones distintas de la misma palabra. Acuerden una definición compartida de contacto, resolución en el primer contacto y recontacto, y un conjunto común de canales. Reporten por cola y servicio, con una vista estándar para la dirección, y usen los datos de gestión de la plantilla para dotar de personal según los patrones de llegada. Comparen las colas solo tras comprobar que usan las mismas definiciones.

**Gobierno y sector público.** Los registros pueden tener obligaciones de conservación, acceso, auditoría y privacidad, y un contrato puede fijar las métricas y los objetivos de un centro de servicios externalizado. Lee con espíritu crítico las métricas del contrato y añade a los informes las medidas de protección aunque no se exijan. Conserva la pista de auditoría de los cambios de definición y evita recoger datos personales que no hagan falta. Los servicios públicos suelen atender a usuarios con poca elección de canal, de modo que la accesibilidad de cada canal forma parte del cuadro (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

La motivación para mejores métricas del centro de servicios es un servicio más barato y mejor, y el retorno llega en tres lugares. Primero, menos contactos repetidos: cada recontacto es trabajo que el centro de servicios no necesitaba hacer y tiempo que el usuario no quería gastar. Segundo, correcciones aguas arriba: los datos de categoría del centro de servicios pueden eliminar clases enteras de contactos cuando los equipos de entrega actúan sobre ellos. Tercero, mejor dotación de personal: los datos de patrones de llegada permiten a los gerentes colocar a las personas cuando los usuarios las necesitan, lo que reduce a la vez el abandono y el tiempo ocioso.

El costo de recogida es modesto cuando la plataforma de telefonía y la herramienta ITSM ya registran los eventos. Los costos principales son el tiempo para acordar definiciones, arreglar la vinculación entre contactos y tickets, añadir una breve pregunta posterior al contacto y revisar los datos con los equipos de entrega.

Aquí no se ofrece ninguna cifra de retorno, porque las cifras publicadas varían con la organización y su método, y ninguna se ha verificado para este tema. Estima el retorno a partir de tus propios datos. Toma el recuento de recontactos y un tiempo de gestión medido, multiplícalos por el costo de una hora de agente y compáralo con el costo de la corrección. Describe el resultado como una estimación con sus supuestos y vuelve a revisarlo tras el cambio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Fijar como objetivo el tiempo medio de gestión.** Premia la prisa y los traslados tempranos. Usa la distribución por tipo de contacto para planificar y empárejala con la resolución en el primer contacto y el recontacto.
- **Contar como resolución en el primer contacto un indicador de cierre puesto por el agente.** Puede ponerse sea cual sea el resultado. Usa una ventana de recontacto y una confirmación del usuario.
- **Clasificar a agentes individuales.** Empuja a escoger lo fácil y a comportamientos defensivos. Reporta por equipo y cola y mantén las conversaciones individuales privadas y de apoyo.
- **Reportar un promedio de todos los canales que oculta el canal más débil.** El teléfono, el chat y el correo se comportan de forma distinta. Reporta cada canal por separado antes de combinarlos.
- **Leer el volumen sin denominador.** Un aumento puede ser crecimiento. Muestra los contactos por 100 usuarios y la mezcla de categorías.
- **Dejar al centro de servicios fuera de las decisiones de entrega.** Los recuentos reportados a un panel y nunca comentados con el equipo de producto se desperdician. Celebra una revisión mensual de las principales categorías con sus responsables.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | Cada persona cuenta los contactos de forma distinta | Algunas definiciones están escritas para ciertas colas | Una definición escrita por métrica, con inicio y fin del reloj y exclusiones | Cambios de definición registrados y revisados con un calendario | Definiciones compartidas con proveedores y clientes y revisadas cuando dejan de informar decisiones |
| Captura y calidad de los datos | Recuentos ensamblados a mano a partir de exportaciones | Datos de telefonía y de ITSM reportados por separado | Contactos y tickets vinculados, con captura automatizada entre canales | Vinculación, completitud y conciliación medidas y con tendencias | Datos de contactos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Uso en la mejora | Números reportados pero rara vez discutidos | Revisión ocasional de los periodos de más trabajo | Revisión mensual de las principales categorías con los responsables de servicio | Mejoras planificadas, financiadas y comprobadas frente al recontacto y al volumen | Los datos del centro de servicios guían las prioridades de la lista de pendientes entre equipos de producto y proveedores |
| Barreras de protección y confianza | Objetivos de velocidad aplicados a individuos | Cierta conciencia de la manipulación | Medidas emparejadas reportadas juntas y sin clasificación individual | Comprobaciones de manipulación auditadas por el equipo y confirmación del usuario en uso | Usuarios y personal ayudan a fijar las medidas y ven los resultados |

## Lista de verificación

- [ ] Los contactos y los tickets se definen y cuentan por separado, y los recuentos concilian.
- [ ] Cada canal tiene un reloj escrito para el tiempo de respuesta y una forma declarada de tratar las respuestas automatizadas.
- [ ] Los tiempos se reportan como la mediana y un percentil alto con el tamaño de la muestra.
- [ ] El abandono tiene un periodo de gracia escrito y se muestra con el tiempo de respuesta.
- [ ] La resolución en el primer contacto usa una ventana de recontacto y un significado declarado de «el mismo asunto».
- [ ] Se recoge una confirmación del usuario de una pregunta, con su tasa de respuesta visible.
- [ ] Se reporta la tasa de contactos por 100 usuarios, con una definición escrita de «usuario activo».
- [ ] No se fija a los agentes ningún objetivo de tiempo de gestión y ninguna métrica clasifica a individuos.
- [ ] Las principales categorías de contactos se revisan cada mes con los equipos propietarios y las acciones pasan a una lista de pendientes.
- [ ] Las definiciones tienen control de versiones y cada cambio está fechado.

## Prompts de IA

**Redacta definiciones precisas de las medidas básicas del centro de servicios.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Revisa un conjunto de cifras del centro de servicios en busca de signos de manipulación.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Prepara una revisión mensual de las principales categorías de contactos.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Diseña una breve encuesta posterior al contacto.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar qué tema define una métrica relacionada y la barrera de protección que debe ir junto a una medida del centro de servicios.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que las ediciones de este tema mantienen cada métrica emparejada con un vector de manipulación y una barrera de protección.

## Ideas clave

- Cuenta por separado los contactos y los tickets, define ambos y normaliza el volumen frente al tamaño de la base de usuarios.
- Reporta los tiempos como la mediana y un percentil alto, e indica en cuántos contactos se apoya cada cifra.
- Lee la velocidad de respuesta, el abandono y el tiempo de gestión como signos de esfuerzo y empárejalos con la resolución en el primer contacto y el recontacto como signos de resultado.
- Define la resolución en el primer contacto según si el usuario vuelve y confírmala con una comprobación de una pregunta.
- Usa el centro de servicios como sensor: revisa cada mes las principales categorías con los equipos propietarios de los servicios.
- Mide colas, canales y servicios, y no clasifiques nunca a agentes individuales.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
