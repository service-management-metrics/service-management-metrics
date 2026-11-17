# Métricas de versiones y despliegues

**Desplegar código y publicarlo a los usuarios son eventos distintos con riesgos distintos, así que mídelos por separado, cuenta cada uno según una regla escrita y lee juntos la frecuencia, el plazo de entrega, el tamaño del lote y la higiene de los indicadores en lugar de celebrar un recuento aislado.**

## Visión general y motivación

Muchos equipos usan las palabras «despliegue» y «versión publicada» (release) como si significaran lo mismo. No es así, y la diferencia es la idea más útil de este tema. Un **despliegue** es el acto de poner una versión del software en un entorno, normalmente producción, como describe el artículo sobre el [despliegue de software](https://en.wikipedia.org/wiki/Software_deployment). Una **publicación** (release) es el momento en que un cambio queda disponible para los usuarios a los que va dirigido, una decisión que la [gestión de versiones](https://en.wikipedia.org/wiki/Release_management) existe para gobernar. Cuando ambos ocurren juntos, un despliegue es una publicación y un solo número describe ambos. Cuando se separan, el equipo puede desplegar a menudo y en silencio, y publicar de forma deliberada.

La separación importa porque los dos eventos conllevan riesgos distintos. Un despliegue conlleva riesgo técnico: la nueva compilación podría no arrancar, podría romper una dependencia o podría necesitar una reversión. Una publicación conlleva riesgo de negocio y de usuario: el cambio podría confundir a los clientes o podría tener que aterrizar en una fecha acordada. Los equipos que acoplan ambos eventos aceptan ambos riesgos a la vez, lo que los empuja hacia lotes grandes de cambio publicados rara vez. Los equipos que los separan asumen el riesgo técnico en pasos pequeños y el riesgo de usuario en pasos controlados.

La principal herramienta de separación es el [interruptor de función](https://en.wikipedia.org/wiki/Feature_toggle), también llamado indicador de función (feature flag): un conmutador en la configuración que activa o desactiva un comportamiento sin un nuevo despliegue. Las técnicas relacionadas incluyen el [despliegue canario](https://en.wikipedia.org/wiki/Canary_release), que expone un cambio primero a una pequeña parte del tráfico, y el [despliegue azul-verde](https://en.wikipedia.org/wiki/Blue-green_deployment), que mantiene dos entornos de producción y conmuta el tráfico entre ellos. Todas permiten responder a dos preguntas separadas: ¿funciona con seguridad la nueva versión? y ¿quién debe ver el nuevo comportamiento y cuándo?

Los términos siguientes se repiten en este tema.

- Una **publicación** (release) es una versión o conjunto de cambios puestos a disposición de los usuarios.
- Un **despliegue** es el traslado de una versión a un entorno. ITIL 4 nombra una práctica para esto, la gestión de despliegues.
- Un **lanzamiento oscuro** (dark launch) es un despliegue cuyo nuevo comportamiento está desactivado para los usuarios.
- Un **despliegue progresivo** (progressive rollout) es una publicación que amplía la exposición por etapas, por ejemplo 1 por ciento, 10 por ciento y luego todos.
- Un **lote** es el conjunto de cambios que se publican juntos en un despliegue o publicación. El tamaño del lote es el número de cambios, o la cantidad de cambio, que contiene.
- El **plazo de entrega de la publicación** es el tiempo transcurrido desde un punto de partida declarado hasta que el cambio está disponible para sus usuarios. Tu equipo anota el punto de partida, porque se usan varios habitualmente.
- Un **percentil** es un valor por debajo del cual cae una proporción declarada de observaciones. El percentil 85 del plazo de entrega de la publicación es el número que superan el 85 por ciento de las publicaciones.

Las visiones ágil e ITIL se encuentran aquí. Un equipo ágil que sigue la [entrega continua](https://en.wikipedia.org/wiki/Continuous_delivery) quiere que cada cambio sea publicable en cualquier momento y trata la publicación como una decisión de negocio tomada por separado del acto técnico. Un profesional de ITIL ve la gestión de versiones, la gestión de despliegues y la habilitación de cambios como prácticas que planifican, programan y controlan el traslado del cambio al uso en vivo. Las dos visiones chocan cuando la gestión de versiones se entiende como un calendario de grandes eventos. Encajan cuando la práctica se entiende como la capacidad de publicar con seguridad bajo demanda, con los controles integrados en el pipeline y en los indicadores.

Este tema no repite las definiciones de las cinco medidas de rendimiento de la entrega del programa de investigación DORA (véase el tema 2.8, Métricas DORA), ni las medidas de fallo y retrabajo tras una publicación (véase el tema 4.4, Fallos de cambio y retrabajo), ni el volumen y la aprobación de cambios (véase el tema 4.3, Métricas de habilitación de cambios). Añade lo que esos temas dejan abierto: cómo contar las publicaciones como distintas de los despliegues, cuánto espera un cambio terminado antes de que los usuarios lo reciban, cuán grandes son los lotes y si los indicadores que hacen posible la separación se mantienen ordenados.

Por último, los recuentos de versiones y de despliegues son números tentadores para un panel de la dirección, y la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica de inmediato (véase el tema 1.2, Ley de Goodhart y psicología de las métricas). Un recuento de despliegues sube cuando los cambios se dividen en piezas triviales. Un recuento de publicaciones sube cuando se cambia una etiqueta. Por eso cada métrica siguiente viene con la forma en que se tuerce y la barrera de protección que detecta la torsión.

## Principios clave

- **Despliegue y publicación son dos eventos.** Mídelos por separado donde la arquitectura lo permita y di con claridad dónde siguen siendo un solo evento.
- **Cuenta según una regla escrita.** Un despliegue cuenta cuando un entorno con nombre recibió una versión con nombre con un resultado exitoso. Una publicación cuenta cuando los usuarios previstos pueden acceder al cambio. Escribe la regla una vez y aplícala del mismo modo siempre.
- **Describe un servicio, no una persona.** Los recuentos pertenecen a un servicio y a su equipo, nunca a un individuo.
- **Mide la espera, no solo el trabajo.** El plazo de entrega de la publicación suele contener días de espera de una ventana, una aprobación o una decisión. La espera es donde suele vivir la mejora.
- **Los lotes pequeños son la palanca.** La frecuencia y el tamaño son dos vistas de lo mismo. Empareja cada recuento con una medida de cuánto cambio llevó cada publicación.
- **Los indicadores son inventario con un costo de mantenimiento.** Un indicador que vive demasiado se convierte en código muerto y en fuente de fallos, así que haz seguimiento de la antigüedad de los indicadores con el mismo cuidado que de su cobertura.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frecuencia de despliegue | Con qué frecuencia recibe un servicio un despliegue exitoso en producción | Recuento de despliegues exitosos en producción del servicio en el periodo / días del periodo; se excluyen los despliegues en entornos de prueba o de preproducción, los despliegues fallidos o revertidos y los redespliegues de una compilación sin cambios; los despliegues solo de configuración se cuentan en una serie aparte | Despliegues por día o por semana | Registro de eventos del pipeline de despliegue | Gestión de despliegues | Entrega continua; entregar un incremento que funciona | Semanal |
| Frecuencia de publicación | Con qué frecuencia reciben los usuarios un cambio al que pueden acceder | Recuento de eventos de publicación en el periodo / días del periodo; un evento de publicación es el momento en que un cambio, o un grupo de cambios, pasa a ser accesible para los usuarios previstos (un indicador activado para todos los usuarios, la etapa final de un despliegue progresivo o el despliegue de un cambio sin indicador); se excluyen un lanzamiento oscuro, un despliegue detenido en una etapa parcial y un cambio de indicador que solo afecta a usuarios internos | Publicaciones por semana o por mes | Registro de auditoría del servicio de indicadores unido al registro del pipeline y al calendario de versiones | Gestión de versiones | Publicar al final de cada incremento; un incremento potencialmente entregable puesto a disposición | Semanal, revisada mensualmente |
| Plazo de entrega de la publicación | Cuánto tiempo espera un cambio terminado antes de que los usuarios puedan acceder a él | El reloj empieza cuando el cambio se fusiona con la línea principal y ha superado sus comprobaciones automatizadas (o, si tu equipo así lo escribe, en la primera confirmación) y se detiene cuando el cambio se publica según lo definido arriba; se reportan la mediana y el percentil 85 de los cambios publicados en el periodo; los cambios aún no publicados se excluyen y se reportan como antigüedad del trabajo en espera | Horas o días | Control de versiones unido al pipeline y al registro de auditoría de indicadores | Gestión de versiones; gestión de despliegues | Plazo de entrega de hecho a entregado; plazo de entrega hasta el cliente | Semanal, revisado mensualmente |
| Brecha entre despliegue y publicación | Cuánto tiempo permanece oscuro el código desplegado antes de que los usuarios puedan acceder a él | El reloj empieza cuando el cambio se despliega en producción y se detiene cuando se publica; se reportan la mediana y el percentil 85; los cambios publicados en el momento del despliegue tienen una brecha de cero y se incluyen; los cambios desplegados y retirados después sin publicación se excluyen y se cuentan por separado | Horas o días | Registro del pipeline unido al registro de auditoría de indicadores | Gestión de versiones; gestión de despliegues | Lanzamiento oscuro; desacoplar el despliegue de la publicación | Mensual |
| Tamaño del lote de la publicación | Cuánto cambio se publica junto en una publicación | Mediana y percentil 85 del número de cambios fusionados (solicitudes de incorporación o elementos de trabajo) por publicación en el periodo; la unidad de cambio está escrita; cada cambio se cuenta una vez, en la publicación que lo hizo accesible | Cambios por publicación | Control de versiones y gestor de incidencias unidos al evento de publicación | Gestión de versiones; habilitación de cambios | Lotes pequeños; cortes verticales del trabajo | Por publicación, revisado mensualmente |
| Cobertura de indicadores de función | La proporción de cambios visibles para el usuario que se publicaron detrás de un indicador | Cambios visibles para el usuario publicados en el periodo que tenían un indicador en el momento de la publicación / todos los cambios visibles para el usuario publicados en el periodo; se excluyen los cambios de infraestructura y las correcciones de defectos que no pueden marcarse con indicador, y se anota la regla de «visible para el usuario» | Porcentaje | Servicio de indicadores unido al gestor de incidencias y al registro de versiones | Gestión de versiones; habilitación de cambios | Entrega progresiva; desarrollo guiado por experimentos | Mensual |
| Recuento de indicadores obsoletos | Cuántos indicadores han sobrevivido a su propósito | Número de indicadores de publicación aún presentes en el código o la configuración más de un número declarado de días después de que el cambio que protegen llegara a todos los usuarios; los indicadores operativos permanentes (interruptores de apagado, indicadores de derechos) se etiquetan y se excluyen; el límite de antigüedad se anota por tipo de indicador | Indicadores, y antigüedad mediana de los indicadores de publicación en días | Inventario del servicio de indicadores unido a la búsqueda en el código | Gestión de versiones; gestión del conocimiento | Limpieza de deuda técnica; el criterio de terminado de retirar un indicador | Mensual |

## Recomendaciones

### Escribe qué cuenta como despliegue y como publicación

**Define ambos eventos antes de contar ninguno.** Un despliegue cuenta cuando una versión con nombre llegó a un entorno con nombre y el pipeline reportó éxito. Una publicación cuenta cuando los usuarios previstos pueden acceder al cambio, que para un cambio con indicador es el momento en que el indicador se activa para ellos y no el momento en que llegó el código. Indica las exclusiones en la misma frase: entornos de prueba, reversiones, redespliegues de una compilación sin cambios y exposición solo interna.

### Reporta las dos series lado a lado

**Muestra la frecuencia de despliegue y la frecuencia de publicación en un mismo gráfico.** Donde las líneas coinciden, el servicio sigue acoplando los dos eventos. Donde los despliegues van muy por delante de las publicaciones, el equipo ha empezado a desacoplarlos, y la distancia entre las líneas es señal de la capacidad. Un único número combinado oculta esto y deja a un equipo afirmar una frecuencia alta que los usuarios nunca ven.

### Mide el plazo de entrega de la publicación desde un inicio declarado hasta el usuario

**Elige una sola vez el inicio del reloj y mantenlo.** Empezar en la primera confirmación muestra el recorrido completo, y empezar en la fusión con la línea principal aísla el pipeline de publicación y sus aprobaciones. Cualquiera es aceptable si se indica en el gráfico y nunca se cambia en silencio. Termina el reloj en la publicación, no en el despliegue, o la métrica dejará de medir lo que esperó el usuario.

### Haz seguimiento del tamaño del lote junto a la frecuencia

**Empareja cada frecuencia con un tamaño.** Un equipo puede elevar su recuento de despliegues cortando un cambio en piezas que no son útiles por sí solas, y el recuento sube mientras el flujo real sigue igual. La mediana y el percentil 85 del tamaño del lote muestran si las piezas son reales. Los lotes pequeños son más fáciles de revisar, probar y revertir, y ese es el beneficio del que la frecuencia es un sucedáneo.

### Trata las etapas del despliegue progresivo como eventos

**Registra cada etapa de un despliegue con una marca de tiempo.** Un despliegue que va del 1 por ciento al 10 por ciento y luego a todos da tres marcas de tiempo, y cada una es una oportunidad de detenerse. Capta la etapa, la proporción de exposición y el resultado de la comprobación de salud que permitió la siguiente etapa. Esto permite separar un despliegue pausado por una señal real de uno que se estancó.

### Mantén un inventario de indicadores con responsable y fecha de caducidad

**Da a cada indicador de publicación un responsable, un propósito y una fecha prevista de retirada al crearlo.** El servicio de indicadores o un registro sencillo pueden contenerlos. Revisa el registro cada mes y calcula el recuento de indicadores obsoletos. Un indicador que queda activado tras el despliegue completo es código muerto que sigue ramificando. Trata la retirada como parte de terminado del cambio.

### Etiqueta los indicadores por tipo

**Separa los indicadores de publicación temporales de los indicadores operativos permanentes.** Los interruptores de apagado y los indicadores de derechos son permanentes por diseño, mientras que los indicadores de publicación deben retirarse tras el despliegue completo. Mezclar los tipos vuelve ruidoso el recuento de obsoletos e invita a los equipos a borrar un interruptor que alguien necesita durante un incidente. Exige el tipo al crear el indicador.

### Vincula las publicaciones con los registros de incidentes y de cambios

**Registra el identificador de la publicación en el incidente y en el cambio.** Un evento de publicación debe poder rastrearse desde la herramienta de incidentes, de modo que la causa de un incidente pueda vincularse con el cambio que se publicó, se hubiera desplegado la semana pasada o activado esta mañana. Sin el vínculo, las medidas de inestabilidad atribuyen los fallos a la fecha del despliegue y pasan por alto los fallos causados por un cambio de indicador. Los cambios de indicador en producción son cambios en el sentido de ITIL y deben ser visibles para la habilitación de cambios, aunque estén preautorizados como cambios estándar (véase el tema 4.3, Métricas de habilitación de cambios).

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Frecuencia de despliegue | Dividir un cambio en despliegues triviales; redesplegar compilaciones sin cambios; contar despliegues en preproducción; contar con la serie principal los despliegues solo de configuración | Tamaño del lote de la publicación y proporción de despliegues con un cambio visible para el usuario; la serie separada de configuración; tasa de fallos de cambio junto a ella |
| Frecuencia de publicación | Reetiquetar despliegues como publicaciones; contar como publicación un indicador activado para el personal interno; publicar cambios vacíos o cosméticos para cumplir un objetivo; contar cada etapa de un despliegue progresivo como una publicación aparte | Una definición escrita de publicación; muestra trimestral de publicaciones comprobada frente a los cambios visibles para el usuario; tamaño del lote y recuentos de cambios de cara al cliente |
| Plazo de entrega de la publicación | Arrancar el reloj más tarde, por ejemplo en la aprobación en lugar de la fusión; excluir como «bloqueados» los cambios que esperaron mucho; publicar primero un cambio trivial para bajar la mediana; terminar el reloj en el despliegue | El percentil 85 y la antigüedad del cambio en espera más antiguo; un inicio fijo y escrito; una revisión trimestral del 10 por ciento más lento de los cambios |
| Brecha entre despliegue y publicación | Activar un indicador para un usuario simbólico para registrar pronto la publicación; dejar fuera de la muestra el código oscuro de larga duración llamándolo «no es una publicación»; borrar código oscuro para evitar una brecha larga | Proporción de exposición en la publicación (un umbral de lo que cuenta como publicado); recuento de cambios desplegados y retirados sin publicación; recuento de indicadores obsoletos |
| Tamaño del lote de la publicación | Dividir el trabajo en solicitudes de incorporación artificiales; fusionar cambios no relacionados en uno para reducir el número de publicaciones; contar solo el cambio grande de un conjunto | Tamaño mediano del cambio en líneas o archivos como medida de contexto; revisión de una muestra de publicaciones en busca de agrupaciones no relacionadas; frecuencia junto al tamaño |
| Cobertura de indicadores de función | Añadir indicadores a cambios triviales para elevar la tasa; marcar con indicador solo los cambios seguros y publicar sin indicador los arriesgados; crear un indicador que en la práctica no puede apagarse | Resultados de pruebas con el indicador apagado en una muestra de indicadores; el recuento de indicadores obsoletos; causas de incidentes que no tenían indicador |
| Recuento de indicadores obsoletos | Reetiquetar indicadores de publicación como permanentes para sacarlos del recuento de obsoletos; borrar el registro del indicador dejándolo en el código; ampliar las fechas de caducidad sin revisión | Una búsqueda periódica en el código frente al registro; revisión de cada cambio de tipo de indicador; la antigüedad del indicador de publicación más antiguo |

Una lectura sana muestra los despliegues por delante de las publicaciones en los servicios que usan indicadores, con una brecha modesta, un tamaño de lote pequeño y estable y un percentil 85 del plazo de entrega no muy por encima de la mediana. La cobertura de indicadores es alta para los cambios arriesgados y el recuento de obsoletos es bajo o decreciente. Una lectura que parece demasiado buena, como una frecuencia alta junto con tamaños de lote crecientes o un recuento de obsoletos de cero con un recuento creciente de indicadores permanentes, merece una auditoría por muestreo antes de celebrar nada.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Desplegar de forma continua y publicar mediante indicador | Poco riesgo técnico por despliegue; el momento de la publicación pasa a ser una elección de negocio; apagado rápido | Necesita disciplina y herramientas para los indicadores; añade rutas de código que hay que probar y retirar |
| Acoplar el despliegue y la publicación | Sencillo de explicar; un evento que contar; sin deuda de indicadores | Cada publicación conlleva riesgo técnico y de usuario, lo que fomenta lotes grandes publicados rara vez |
| Tren de versiones programado | Predecible para el soporte y los reguladores | Los cambios esperan al siguiente tren; el recuento refleja el calendario, no la capacidad |
| Despliegue progresivo por porcentaje | Limita el efecto de una mala publicación; produce evidencia en cada etapa | Necesita buena telemetría y una comprobación de salud; pueden convivir versiones mezcladas durante un tiempo |
| Contar tanto los despliegues como las publicaciones | Muestra el desacoplamiento y la espera | Requiere unir al pipeline un registro de auditoría de indicadores o registros de versiones |

Un servicio que aún no puede desacoplar el despliegue de la publicación, por ejemplo una aplicación móvil distribuida mediante la revisión de una tienda de aplicaciones, debe medir lo que pueda: frecuencia de publicación, plazo de entrega de la publicación y tamaño del lote, con el tiempo de revisión de la tienda reportado como una espera aparte.

## Preguntas para debatir con tu equipo

**1. ¿Usamos las palabras «despliegue» y «publicación» para el mismo evento y coincide con lo que ocurre?**
Pide a tres personas que describan el último cambio que salió en vivo y anota cuándo llegó el código y cuándo pudieron usarlo los usuarios por primera vez. El facilitador debe ayudar al grupo a acordar una frase para cada término y a decidir cuál de los dos eventos mide cada número de los paneles existentes.

**2. ¿Cuál es el mayor tiempo que ha esperado un cambio terminado para su publicación y por qué?**
Extrae el cambio fusionado más antiguo al que los usuarios aún no pueden acceder. Rastrea su camino desde la fusión hasta ahora y anota cada espera del recorrido.

**3. Si nuestro recuento de despliegues se duplicara, ¿qué comprobaríamos antes de llamarlo buena noticia?**
Invita al grupo a nombrar las formas en que el recuento podría subir sin que llegue más valor a los usuarios. Miren el tamaño del lote, la proporción de despliegues con un cambio visible para el usuario y las cifras de fallo y de retrabajo. El facilitador debe anotar cuáles de estas comprobaciones ya existen en el panel y cuáles hay que añadir antes de que nadie fije un objetivo.

**4. ¿Qué indicadores nos daría miedo borrar y qué nos dice eso?**
Recorre el registro de indicadores y elige los tres más antiguos. Pregunta quién posee cada uno, qué protege y qué ocurriría si se retirara. El miedo a borrar suele significar una prueba que falta, un responsable que falta o un registro del propósito que falta. Acuerden una fecha de retirada para al menos uno y la comprobación que haría segura la retirada.

**5. ¿Quién decide cuándo se publica un cambio y tiene la información que necesita?**
Donde la publicación es una elección de negocio, quien la toma necesita ver el estado del despliegue, las señales de salud y la preparación del soporte. Pregunta dónde viven hoy esos hechos y con qué rapidez puede quien decide revertir una publicación.

**6. ¿Qué publicación del último trimestre fue peor y qué medida nos habría avisado?**
Elige una publicación que causó problemas y lean juntos la cronología. Pregunta si el lote era grande, si la brecha era larga, si el despliegue tenía etapas y si un indicador podría haber limitado el daño. Elijan una medida que añadir o un umbral que endurecer como resultado.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega usan estas medidas para ver si su pipeline y sus indicadores les dan realmente control sobre la exposición. Las vistas más útiles son la brecha, el tamaño del lote y la antigüedad del cambio en espera más antiguo, porque cada una apunta a algo que el equipo puede cambiar.

### Equipos de servicio y de operaciones

A los equipos de operaciones y de soporte les importa qué cambia en producción y cuándo. Los eventos de publicación y los cambios de indicador deben ser visibles para ellos, idealmente con un identificador de publicación en cada incidente. Los despliegues por etapas y el apagado rápido reducen el número de incidentes que necesitan un restablecimiento completo, y las medidas ayudan a los equipos de operaciones a pedir los controles que hacen su trabajo más tranquilo.

### Liderazgo y gobernanza

Los líderes deben pedir tendencias y dispersión para cada servicio, y la respuesta a una pregunta sencilla: cuánto tarda un cambio terminado en llegar a los usuarios y con qué seguridad. Un objetivo de frecuencia de despliegue entre equipos invita a dividir y reetiquetar, así que prefiere objetivos de resultados, como las distribuciones del plazo de entrega y la eliminación de esperas conocidas. La gobernanza puede reducir la carga de las aprobaciones de publicación preautorizando los cambios de bajo riesgo con indicador, siempre que la pista de auditoría de los indicadores esté completa (véase el tema 4.3, Métricas de habilitación de cambios).

### Clientes y usuarios

Los clientes ven publicaciones, no despliegues. Les importa que las correcciones lleguen pronto, que el nuevo comportamiento no les sorprenda y que un mal cambio pueda revertirse rápidamente. Un equipo que separa los dos eventos puede dar a los clientes acceso temprano a una función, puede anunciar una fecha que puede cumplir y puede revertir una función sin perder el resto. Empareja estas medidas con medidas de cara al cliente (véase el tema 5.3, Métricas de disponibilidad, y el tema 6.1, Métricas de satisfacción del cliente).

## En la práctica: un ejemplo de gestión de servicios

Un minorista regional en línea opera un servicio de búsqueda de productos propiedad de un equipo de producto, con el apoyo de un equipo de plataforma y del centro de servicios. El servicio se despliega en producción mediante un pipeline y tiene un servicio de indicadores que se introdujo hace seis meses. Todos los números siguientes son ilustrativos.

En el último trimestre el equipo hizo 52 despliegues en producción, unos cuatro por semana. La frecuencia de publicación, contada como los momentos en que un cambio pasó a ser accesible para todos los usuarios previstos, fue de 11 en el mismo trimestre, aproximadamente una por semana. El plazo de entrega mediano de la publicación, de la fusión a la publicación, fue de 9 días, con un percentil 85 de 21 días. La brecha mediana entre despliegue y publicación fue de 6 días. El tamaño mediano del lote de la publicación fue de 3 cambios y el percentil 85 fue de 14. La cobertura de indicadores para los cambios visibles para el usuario fue del 58 por ciento y 17 indicadores de publicación llevaban más de 30 días desde el despliegue completo.

El riesgo de manipulación ya es visible. Algunos despliegues eran solo de configuración y el pipeline contaba cada uno como despliegue, de modo que el panel muestra ahora una serie de configuración separada y la revisión mensual muestrea 10 despliegues en busca de un cambio visible para el usuario. Un gerente regional ve el recuento de despliegues y pide al equipo que lo eleve para igualar la cifra de otro equipo. El jefe del equipo se resiste al objetivo y lleva en su lugar el conjunto completo de números a la revisión mensual. La revisión descubre que la brecha es larga porque las publicaciones esperan una reunión semanal de marketing y soporte, que cuatro de los 17 indicadores obsoletos protegen rutas de código que nadie ha probado y que el percentil 85 del tamaño del lote procede de unas pocas publicaciones que agruparon cambios no relacionados antes de una congelación por vacaciones.

La decisión, anotada en el registro de decisiones, tiene cuatro partes. Soporte y marketing participarán en una reunión más breve, dos veces por semana, de modo que la decisión de publicar ya no espere al hueco semanal. Cada indicador de publicación recibe un responsable y una fecha de retirada, y los cuatro indicadores obsoletos sin probar se retiran en las dos semanas siguientes. Las publicaciones que agrupen cambios no relacionados necesitan un motivo declarado en el registro de la publicación. Y el equipo rechaza el objetivo común de despliegues y ofrece en su lugar una vista compartida de la distribución del plazo de entrega de la publicación de cada servicio y de su higiene de indicadores. El gestor de cambios acepta tratar como cambios estándar los cambios con indicador que superen las comprobaciones del pipeline, con una revisión el trimestre próximo. En el trimestre siguiente (ilustrativo), el plazo de entrega mediano de la publicación baja a 5 días, el recuento de indicadores obsoletos baja a 6 y la tasa de fallos de cambio se mantiene estable, de modo que el experimento continúa.

## Agilidad, IA, automatización y analítica

### Agilidad

Separar el despliegue de la publicación permite a un equipo entregar cambios pequeños de forma continua y publicar cuando las partes interesadas estén listas. Revisa con regularidad la higiene de los indicadores. La precaución es que contar despliegues premia dividir los cambios.

### IA

La programación asistida por IA puede elevar los recuentos de despliegues y los tamaños de lote. Empareja la frecuencia con la recuperación de despliegues fallidos y con el recuento de indicadores obsoletos y marca en los datos los cambios asistidos por IA. La precaución es que más despliegues con más retrabajo no es progreso.

### Automatización

Cuenta los despliegues y las publicaciones a partir de eventos del pipeline y automatiza los recordatorios de limpieza de indicadores. Mide el pipeline por su propia tasa de fallos. La precaución es que las publicaciones manuales fuera del pipeline desaparecen de los datos.

### Analítica

Muestra la frecuencia con el plazo de entrega y el tamaño del lote, y la brecha entre despliegue y publicación. La decisión a la que informa es dónde es lento el camino hacia los usuarios. La precaución es que las definiciones de despliegue varían según el equipo.

## Perspectiva sectorial

**Startup.** Una startup suele tener un único servicio y una biblioteca de indicadores en el código, de modo que el despliegue y la publicación pueden separarse con poco costo. Mantén un registro sencillo de indicadores con fechas de caducidad y espera a tener volumen suficiente antes de fiarte de los percentiles.

**Pequeña empresa.** Una pequeña empresa puede operar software empaquetado o comprado en el que el proveedor controla la publicación. Las medidas útiles son el tiempo entre la publicación del proveedor y la adopción por parte de la empresa, y el lote de cambios que llegan juntos en una versión mayor. Anota las fechas de publicación del proveedor y tus propias fechas de despliegue para que la espera intermedia sea visible.

**Gran empresa.** Una gran empresa se enfrenta a muchos servicios con estilos de publicación distintos, un proceso de cambios central y entornos compartidos. El trabajo principal es acordar las definiciones de despliegue y publicación entre equipos y proveedores, y mantener una consolidación que respete las diferencias. Usa la dispersión y las tendencias para la gobernanza y trata la plataforma de indicadores como un servicio compartido con un responsable.

**Gobierno y sector público.** Las publicaciones suelen estar ligadas a fechas fijas, a la legislación, a ciclos de contratación o a puertas de garantía, de modo que la frecuencia de publicación puede ser baja por buenas razones. La frecuencia de despliegue y la brecha entre despliegue y publicación aún pueden mostrar cuánto riesgo se ha asumido pronto y cuánto espera a la fecha. Reporta por separado la espera de las puertas externas y el tiempo del propio pipeline del equipo.

## Caso de negocio: motivaciones, ROI y TCO

La motivación de estas medidas es reducir el riesgo y el retraso entre terminar un cambio y entregar su valor. Los lotes grandes publicados rara vez llevan más cambio por evento, de modo que un fallo es más difícil de diagnosticar y de revertir. Separar el despliegue de la publicación da al equipo una forma de asumir el riesgo técnico pronto y en pequeñas cantidades, y de asumir el riesgo de usuario de forma deliberada. Las medidas muestran si la separación es real y dónde espera el cambio.

Los costos son moderados. Recoger los eventos de despliegue y de publicación requiere unir el registro del pipeline y el registro de auditoría de indicadores con el control de versiones y el gestor de incidencias, lo que es una integración puntual seguida de un mantenimiento ocasional (véase el tema 1.5, Fuentes de datos e instrumentación). La propia práctica de los indicadores tiene costos de funcionamiento: la plataforma o biblioteca, el registro, probar ambas rutas de un cambio con indicador y la limpieza de los indicadores caducados. El principal costo oculto es la deuda de indicadores, que el recuento de obsoletos mantiene visible.

El retorno sigue un patrón que la mayoría de los equipos puede observar en sus propios datos. Un plazo de entrega de la publicación más corto significa un bucle de retroalimentación más rápido sobre si un cambio ayuda a los usuarios. Los lotes más pequeños significan un diagnóstico más fácil y una reversión más fácil. Una brecha más corta entre despliegue y publicación significa menos tiempo con el trabajo terminado sin realizar. No inventes una cifra para el valor. Usa los propios ejemplos del equipo de cambios que estuvieron oscuros durante semanas y la tendencia de sus propias medidas.

## Antipatrones y trampas

- **Fijar un objetivo de frecuencia de despliegue para cada equipo.** Invita a dividir y reetiquetar. Fija objetivos de resultados, como una distribución del plazo de entrega más estrecha, y deja que la frecuencia siga.
- **Tratar un tren de versiones como prueba de capacidad.** Un calendario fijo da un recuento constante y oculta la antigüedad del trabajo en espera. Haz seguimiento de la antigüedad del cambio fusionado más antiguo al que los usuarios no pueden acceder.
- **Contar los cambios de configuración como despliegues en la serie principal.** Infla el número. Mantén una serie separada y muéstrala junto a la principal.
- **No retirar nunca los indicadores.** El código acumula ramas muertas y combinaciones sin probar. Da a cada indicador de publicación un responsable y una fecha de retirada y trata la retirada como parte de terminado.
- **Cambiar indicadores en producción sin registro.** Un cambio de indicador es un cambio en el comportamiento de producción. Envíalo al registro de auditoría y hazlo visible para la habilitación de cambios.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Definiciones y relojes | «Despliegue» y «publicación» se usan indistintamente; cada persona cuenta de forma distinta | Unos pocos equipos anotan sus propias definiciones | Una definición escrita de despliegue y publicación, con relojes y exclusiones, en el registro de métricas | Cambios de definición registrados y marcados en los gráficos; muestras comprobadas cada trimestre | Definiciones revisadas conjuntamente con proveedores y gobernanza cuando dejan de informar decisiones |
| Separación de despliegue y publicación | Cada despliegue es una publicación | Algunos equipos usan indicadores o despliegues por etapas para los cambios arriesgados | Los indicadores y los despliegues por etapas son una opción estándar, con los eventos de publicación registrados | Brecha, tamaño del lote y etapas del despliegue con tendencias y revisados | Momento de publicación coordinado entre equipos y proveedores para servicios relacionados |
| Captura de datos | Recuentos ensamblados a mano a partir de tickets y chat | Datos del pipeline para algunos servicios; publicaciones registradas a mano | Despliegues, publicaciones y cambios de indicador captados automáticamente para la mayoría de los servicios | Calidad de los datos (tasa de vinculación, auditoría de muestras) medida y con tendencias | Eventos compartidos entre equipos y proveedores mediante interfaces acordadas |
| Higiene de los indicadores | Sin inventario | Lista informal en algunos equipos | Registro con responsable, tipo y fecha de caducidad para cada indicador de publicación | Recuento de obsoletos con tendencias; la retirada forma parte de terminado y se comprueba | Plataforma de indicadores gestionada como servicio compartido con recordatorios automáticos de caducidad |
| Uso de los números | Reportados hacia arriba como un único recuento | Los equipos miran sus propios gráficos de vez en cuando | Revisados cada mes por el equipo propietario junto a las cifras de fallo y retrabajo | Las tendencias alimentan mejoras financiadas con una barrera de protección | La dispersión y las tendencias informan la inversión en plataforma y la política de cambios en toda la organización |

## Lista de verificación

- [ ] «Despliegue» y «publicación» están definidos por escrito, con los eventos de reloj y las exclusiones de cada uno.
- [ ] Los despliegues en producción se captan automáticamente del pipeline, con los entornos de prueba excluidos.
- [ ] Los eventos de publicación se captan del registro de auditoría de indicadores, de las etapas del despliegue o de los registros de versiones.
- [ ] El plazo de entrega de la publicación usa un inicio de reloj declarado y reporta la mediana y el percentil 85.
- [ ] La brecha entre despliegue y publicación y el tamaño del lote se reportan junto a la frecuencia.
- [ ] Los despliegues solo de configuración aparecen en una serie aparte.
- [ ] Cada indicador de publicación tiene un responsable, un tipo y una fecha de caducidad en un registro.
- [ ] Los indicadores obsoletos se revisan cada mes y su retirada forma parte de terminado.
- [ ] Los identificadores de publicación aparecen en los registros de incidentes y de cambios.
- [ ] Cada trimestre se audita una muestra de despliegues y publicaciones frente a las definiciones.
- [ ] Un experimento de mejora, ligado a la espera más larga, está en marcha con una fecha de revisión.

## Prompts de IA

**Redacta definiciones de despliegue y publicación para un servicio.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Revisa un conjunto de métricas de publicación en busca de riesgos de manipulación.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Analiza una exportación de despliegues, publicaciones e indicadores.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planifica un experimento de limpieza de indicadores y de espera de publicación.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar los temas relacionados de cambios, versiones e incidentes y la barrera de protección que debe ir junto a cada métrica de publicación.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una versión revisada de este tema mantiene coherentes sus relojes, vectores de manipulación y referencias cruzadas.

## Ideas clave

- Un despliegue pone una versión en un entorno y una publicación hace accesible un cambio para los usuarios. Mide los dos por separado siempre que puedas.
- El plazo de entrega de la publicación debe terminar en la publicación, con un inicio declarado, y reportarse como mediana y percentil 85.
- La brecha entre despliegue y publicación y el tamaño del lote muestran si el desacoplamiento es real, y protegen la frecuencia contra la división y el reetiquetado.
- Los indicadores de función hacen posible la separación y tienen un costo, así que haz seguimiento de la cobertura y de los indicadores obsoletos con responsables y fechas de caducidad.
- Cuenta según reglas escritas, vincula las publicaciones con los incidentes y los cambios y compara un servicio con su propio historial y no con otros equipos.

## Referencias y lecturas complementarias

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
