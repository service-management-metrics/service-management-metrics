# Métricas de incidentes de seguridad y vulnerabilidades

**La seguridad forma parte de entregar y operar un servicio de forma continua, así que mide cuánto tiempo permanece expuesta la gente, con qué rapidez contienes lo que sale mal y cuán dispuestos están los colegas a levantar la mano, y no conviertas nunca un error en un motivo de culpa.**

## Visión general y motivación

Todo servicio lleva debilidades, y algunas se usarán contra él. Una [vulnerabilidad](https://en.wikipedia.org/wiki/Vulnerability_(computing)) es una debilidad en el software, el hardware, la configuración o el proceso que puede explotarse para dañar la confidencialidad, la integridad o la disponibilidad de un sistema. Un incidente de seguridad es un evento en que ese daño ocurre o se amenaza de forma creíble. Las métricas de esta área intentan responder a dos preguntas. ¿Cuán expuestos estamos y con qué rapidez encontramos, corregimos y nos recuperamos de los problemas?

La tradición ágil y DevOps trata la seguridad como una propiedad de la entrega continua, no como una puerta al final de ella. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) amplía la idea de DevOps integrando comprobaciones de seguridad en el pipeline y compartiendo la responsabilidad entre desarrollo, seguridad y operaciones. ITIL, mediante su práctica de gestión de la seguridad de la información, aporta política, pensamiento basado en el riesgo y la conexión con la gestión de incidentes, de cambios y de activos. Las dos se encuentran en el trabajo diario: las actualizaciones de dependencias llegan como cambios ordinarios, los hallazgos de vulnerabilidades se convierten en elementos de la lista de pendientes con responsables y los incidentes se gestionan con las mismas revisiones sin culpas que cualquier otro (véase el tema 4.2, Métricas de análisis posteriores y aprendizaje).

Las métricas de seguridad están expuestas a distorsiones particulares.

- **Contar hallazgos premia no mirar.** Un equipo que escanea menos encuentra menos. Un recuento bruto de vulnerabilidades puede bajar porque un escáner perdió el acceso, no porque algo mejorara.
- **Las puntuaciones de gravedad son insumos, no verdades.** El [Sistema de Puntuación de Vulnerabilidades Comunes](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) da una puntuación de gravedad de una vulnerabilidad en abstracto, y registros como [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) les dan identificadores. Que una vulnerabilidad importe para ti depende de si es alcanzable en tu entorno, de si hay un exploit en uso y de cuánto valor tiene el activo afectado. Una puntuación de gravedad bruta usada sola envía el esfuerzo a los lugares equivocados.
- **La culpa suprime los reportes.** Si se castiga a la gente por pulsar un enlace o por reportar un incidente que causó, los reportes se detienen y la exposición crece sin verse. La seguridad psicológica es un control de seguridad.
- **Las medidas de tiempo esconden la cola.** Un tiempo mediano de parcheo puede parecer sano mientras un puñado de sistemas críticos permanece expuesto durante meses.

Este tema da las medidas principales, con sus definiciones, sus vectores de manipulación y sus barreras de protección. Se apoya en los registros de activos y de configuración de la parte anterior, porque no puedes parchear ni escanear lo que no puedes encontrar (véase el tema 7.1, Métricas de gestión de activos de TI, y el tema 7.4, Métricas de calidad de la configuración y la CMDB). Una advertencia: esto es una guía de medición, no un manual de seguridad. Elige los controles con profesionales de seguridad cualificados y sigue las normas y los deberes legales que te apliquen, como la ISO/IEC 27001 y la guía de las agencias nacionales.

La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica con dureza a la seguridad. Cuando una métrica se convierte en un objetivo, la gente reclasifica hallazgos, excluye activos de los escaneos y cierra tickets sin corregir la causa (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

## Principios clave

- **Mide el tiempo de exposición además de los recuentos.** Cuánto tiempo permanece abierta una debilidad importa más que cuántas se encuentran.
- **Prioriza por contexto.** Combina gravedad, explotabilidad, alcanzabilidad y valor del activo.
- **Comprueba primero la cobertura.** Un informe limpio de un escaneo que pasó por alto la mitad del parque es una falsa comodidad.
- **Integra la seguridad en el pipeline.** Haz de las elecciones seguras la opción fácil por defecto y da retroalimentación rápida.
- **Colabora entre disciplinas.** Seguridad, desarrollo y operaciones poseen juntos los resultados.
- **Haz seguro el reporte.** El manejo sin culpas de los errores mantiene fluyendo las señales.
- **Agrega los datos de comportamiento humano.** Reporta patrones de grupo y no nombres ni clasifiques nunca a individuos.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ventana de exposición | Tiempo que una vulnerabilidad conocida permanece abierta en los activos del ámbito, por banda de prioridad | mediana y percentil 85 de los días desde la fecha en que se supo que se aplicaba al activo hasta la fecha en que se verifica una corrección o una mitigación aceptada | días | Escáner de vulnerabilidades, sistema de tickets, registros de cambios | Gestión de la seguridad de la información; gestión de problemas | Tiempo para corregir un defecto de la lista de pendientes | Semanal |
| Cumplimiento de parches | Proporción de activos del ámbito que cumplen la ventana de la política de parches de su clase | activos parcheados dentro de la ventana de la política / activos del ámbito que requirieron un parche en el periodo | porcentaje | Herramientas de gestión de puestos finales y de servidores, registro de activos | Gestión de la seguridad de la información; gestión de versiones y despliegues | Dependencias mantenidas al día en el pipeline | Semanal |
| Hallazgos críticos vencidos | Recuento y antigüedad de los hallazgos de prioridad crítica que han superado su plazo de la política | número de hallazgos críticos fuera de plazo; antigüedad del más antiguo | recuento; días | Sistema de gestión de vulnerabilidades | Gestión de la seguridad de la información; gestión de riesgos | Defectos de seguridad que superan el límite acordado | Semanal |
| Cobertura de escaneos | Proporción de activos del ámbito evaluados dentro del intervalo exigido | activos escaneados con éxito en el último intervalo / activos del ámbito | porcentaje | Informes del escáner unidos al registro de activos | Gestión de la seguridad de la información; gestión de activos de TI | Comprobaciones del pipeline ejecutadas en cada compilación | Semanal |
| Tiempo hasta la contención | Tiempo desde la detección de un incidente de seguridad confirmado hasta su contención | mediana y percentil 85 de las horas desde la detección hasta la contención | horas | Registros de incidentes | Gestión de incidentes; gestión de la seguridad de la información | Tiempo para restablecer el servicio tras un fallo | Por incidente, revisado mensualmente |
| Antigüedad de las excepciones de riesgo | Antigüedad de las excepciones de riesgo aceptado y proporción que ha superado su fecha de revisión | días desde la aprobación; excepciones que han superado su fecha de revisión / excepciones abiertas | días; porcentaje | Registro de excepciones | Gestión de riesgos; gestión de la seguridad de la información | Revisión de deuda técnica | Mensual |
| Tasa de reportes de seguridad | Proporción de eventos sospechosos reportados por el personal respecto de los eventos de seguridad confirmados, como indicador de la cultura de reporte | reportes del personal en el periodo / eventos sospechosos confirmados en el periodo, con tendencia a nivel de grupo | razón | Buzón de seguridad, registros de incidentes | Gestión de la seguridad de la información; gestión de incidentes | Plantear abiertamente los impedimentos | Mensual |

Declara en el registro las bandas de prioridad y las ventanas de la política. La ventana de exposición empieza cuando se sabe que la vulnerabilidad se aplica al activo, que es lo más tardío entre la divulgación y el momento en que se sabe que el activo ejecuta el componente afectado, y se detiene en la corrección verificada o en una mitigación documentada y limitada en el tiempo. El tiempo hasta la contención empieza en la detección, no en la primera alerta que nadie leyó. Excluye los hallazgos de prueba y los falsos positivos solo tras una revisión. La tasa de reportes de seguridad describe grupos y tendencias, nunca individuos.

## Recomendaciones

### Conoce tu parque y tu exposición

**1. Parte de los registros de activos y de dependencias.** Los escaneos, el parcheo y la propiedad dependen de saber qué existe. Vincula cada hallazgo con un activo, un responsable y un servicio, y mide la cobertura de escaneos frente al registro. Donde la cobertura sea baja, corrígelo antes de leer los hallazgos. Un activo sin escanear es un desconocido, lo que es peor que una debilidad conocida.

**2. Reduce primero la [superficie de ataque](https://en.wikipedia.org/wiki/Attack_surface).** Elimina lo que no hace falta: servicios sin uso, puertos abiertos, cuentas antiguas, entornos olvidados. Todo lo que retiras es algo que no tienes que parchear. Haz seguimiento del recuento de servicios expuestos a internet y de cuentas inactivas como indicadores sencillos, y revísalos con los responsables.

**3. Incluye tu cadena de suministro de software.** Los servicios modernos dependen de muchos componentes. La [cadena de suministro de software](https://en.wikipedia.org/wiki/Software_supply_chain) incluye bibliotecas, herramientas de compilación, imágenes de contenedores y los proveedores que hay detrás. Usa las listas de materiales de software descritas antes para encontrar dónde se usa un componente vulnerable (véase el tema 7.2, Métricas de activos de software y licencias), e incluye los hallazgos de dependencias en las mismas medidas que los de infraestructura.

### Prioriza y corrige

**4. Ordena por contexto, no solo por puntuación de gravedad.** Combina la gravedad CVSS con si se sabe que hay un exploit en uso, si el componente vulnerable es alcanzable y la importancia del activo. Las listas públicas de vulnerabilidades que se sabe que se explotan ayudan con el primer factor. Escribe las reglas de ordenación, revísalas y anota el motivo cuando se despriorice un elemento de gravedad alta.

**5. Fija ventanas de política por banda y reporta frente a ellas.** Para cada banda de prioridad, acuerda un tiempo objetivo para remediar o mitigar. Reporta la proporción dentro de la ventana, la mediana y el percentil 85 de la exposición y el elemento abierto más antiguo. Las ventanas son objetivos para la conversación, y los elementos más antiguos merecen atención porque muestran dónde falla el proceso (véase el tema 1.6, Alfabetización estadística para métricas de servicio).

**6. Trata el parcheo como un cambio ordinario y frecuente.** El proceso de parcheo más seguro es el que se ejecuta a menudo y es aburrido. Las actualizaciones pequeñas y frecuentes son más fáciles de probar y de revertir que las grandes y raras, y los pipelines automatizados pueden aplicarlas de forma continua. Usa el enfoque de habilitación de cambios para la aprobación basada en el riesgo y mantén una vía de emergencia para las correcciones urgentes (véase el tema 4.3, Métricas de habilitación de cambios).

**7. Haz visibles y de vida corta las excepciones.** A veces una corrección no es posible. Registra una excepción con un motivo, un control compensatorio, un responsable y una fecha de revisión, y reporta la antigüedad de las excepciones. Las excepciones sin fecha de revisión se vuelven permanentes, y las excepciones permanentes se convierten en el verdadero registro de riesgos.

### Responde y aprende

**8. Practica la respuesta a incidentes.** La [gestión de incidentes de seguridad informática](https://en.wikipedia.org/wiki/Computer_security_incident_management) cubre la preparación, la detección, la contención, la erradicación, la recuperación y las lecciones aprendidas. Ensaya con ejercicios, registra el tiempo hasta la contención desde la detección y revisa sin culpas cada incidente significativo. La estructura del manejo de incidentes de seguridad es similar a la del manejo de incidentes graves (véase el tema 3.4, Métricas de incidentes graves).

**9. Mide la contención, no solo la detección.** Las herramientas de detección producen alertas, y el valor está en lo que ocurre después. Haz seguimiento de cuánto tardan en contenerse y recuperarse los incidentes confirmados y de qué proporción encontró tu propia monitorización frente a la reportada por externos. Una proporción creciente de incidentes detectados internamente es señal de una visibilidad que mejora.

**10. Aprende de los casi accidentes.** Un correo de suplantación que se reportó y se bloqueó, o una vulnerabilidad hallada por un colega antes que por un atacante, es una lección gratuita. Regístralos y revísalos como harías con un incidente, y da las gracias a la persona que reportó. La tasa de reportes de seguridad es un indicador de salud de esa cultura, y debe subir con la confianza.

### Construye la cultura y el pipeline

**11. Pon las comprobaciones donde trabajan los desarrolladores.** Ejecuta el análisis de dependencias y el análisis estático en la compilación, da retroalimentación en la solicitud de incorporación y haz fallar las compilaciones solo por los problemas que el equipo acuerda que son bloqueantes. La retroalimentación rápida y relevante se corrige. Una avalancha de hallazgos de poco valor se ignora. Haz seguimiento del tiempo de corrección de los hallazgos del pipeline y ajusta las reglas con los equipos (véase el tema 2.7, Métricas de solicitudes de incorporación y revisión de código).

**12. Forma y pon a prueba sin avergonzar.** Los ejercicios de concienciación, como la suplantación simulada, pueden construir destrezas, y pueden también dañar la confianza cuando los resultados se usan para nombrar o sancionar a individuos. Reporta solo resultados agregados, céntrate en cuántos reportan mensajes sospechosos y explica el propósito. Si un ejercicio hace que el personal se sienta engañado, cámbialo.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Ventana de exposición | Cerrar hallazgos sin verificación; cambiar la fecha de inicio; reclasificar la gravedad | Paso de verificación por alguien ajeno al equipo que corrige; regla de fecha de inicio en el registro; registro de cambios de gravedad |
| Cumplimiento de parches | Excluir del ámbito los activos difíciles de parchear; contar un parche como aplicado cuando el sistema no se reinició | Cambios de ámbito registrados; verificar la versión instalada desde el activo, no desde el ticket |
| Hallazgos críticos vencidos | Dividir hallazgos o fusionarlos; rebajar la gravedad | Contar por vulnerabilidad única y activo; revisar todos los cambios de gravedad |
| Cobertura de escaneos | Escanear un conjunto más estrecho; contar un escaneo que no consiguió autenticarse | Cobertura frente al registro de activos; calidad del escaneo (autenticado, completo) |
| Tiempo hasta la contención | Arrancar más tarde el reloj; declarar pronto la contención | El reloj empieza en la primera señal de detección; verificar la contención con evidencia |
| Antigüedad de las excepciones de riesgo | Renovar automáticamente las excepciones; dividir excepciones para reducir la antigüedad | Revisar las renovaciones de excepciones con un motivo; limitar las renovaciones sin evidencia nueva |
| Tasa de reportes de seguridad | Fomentar reportes de poco valor; desalentar reportes para mejorar otros números | Calidad de los reportes; leer los comentarios; encuesta sobre si la gente se siente segura reportando |

Una lectura sana es una cobertura de escaneos alta, una cola de exposición corta y decreciente, excepciones honestas con fechas de revisión, incidentes contenidos con rapidez y encontrados internamente con más frecuencia, y personal que te cuenta los eventos sospechosos sin miedo.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Priorización solo por puntuación de gravedad | Sencilla, coherente | Ignora el contexto; envía el esfuerzo a los lugares equivocados |
| Priorización basada en el contexto | Se centra en el riesgo real | Necesita datos y juicio |
| Ventanas de parcheo fijas | Expectativas claras | Pueden forzar cambios arriesgados y apresurados |
| Ventanas basadas en el riesgo | Se ajustan a la situación | Más difíciles de auditar |
| Parcheo automatizado frecuente | Cambios pequeños, menos exposición | Necesita buenas pruebas y reversión |
| Ciclos de parcheo grandes y raros | Familiares | Mayor exposición, más riesgo por cambio |
| Simulación de suplantación | Crea concienciación | Puede erosionar la confianza si se usa mal |
| Foco en la cultura de reporte | Saca pronto a la luz los problemas | Difícil de medir directamente |

La respuesta en prosa es ordenar por contexto, parchear a menudo en pasos pequeños con buena reversión, registrar las excepciones con plazos e invertir en la cultura de reporte como un control.

## Preguntas para debatir con tu equipo

**1. ¿Cuánto de nuestro parque ven realmente nuestros escaneos?**
Compara los activos escaneados con el registro de activos. Pregunta qué falta y por qué. El facilitador debe buscar categorías sistemáticamente sin escanear, como contenedores, dispositivos remotos o sistemas de terceros. Acuerden una brecha que cerrar este trimestre.

**2. ¿Cuál es nuestro hallazgo crítico abierto más antiguo y por qué sigue abierto?**
Miren la cola, no el promedio. Rastreen los más antiguos: quién los posee, qué los bloquea y cuál es el control compensatorio. El facilitador debe preguntar si la excepción está registrada. Acuerden quién desbloqueará el más antiguo.

**3. ¿Cuándo causó por última vez una corrección de seguridad una caída y qué cambió después?**
Recuerden un ejemplo. ¿Fue la causa una corrección apresurada o una prueba ausente? Hablen de cómo hacer rutinario y seguro el parcheo. Vinculen la respuesta con la práctica de cambios y de versiones.

**4. Si un colega reportara hoy un correo sospechoso, ¿qué le pasaría?**
Describan el camino real desde el reporte hasta la respuesta, incluido cómo se agradece a quien reporta. Pregunten si alguien ha pasado vergüenza por reportar o por pulsar. La conversación trata de la confianza. Acuerden un pequeño cambio que haga más fácil o más seguro reportar.

**5. ¿Cuáles de nuestros números de seguridad podrían subir mientras nos volvemos menos seguros?**
Enumeren las medidas y piensen cómo podría mejorarse cada una estrechando el ámbito o reetiquetando. Asignen una barrera de protección a cada una. Este ejercicio construye la entrada del registro para la próxima revisión.

**6. ¿Con qué rapidez podemos contener un incidente confirmado y cómo lo sabemos?**
Revisen los dos últimos incidentes y rastreen desde la detección hasta la contención. Anoten los retrasos. Pregunten qué ejercicios hemos ejecutado. Acuerden ejecutar uno antes de la próxima revisión.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega hacen la mayoría de las correcciones e introducen muchas de las debilidades. Deben mantener al día las dependencias como parte del flujo normal, tratar los hallazgos de seguridad como elementos de la lista de pendientes con responsables y fechas, y usar comprobaciones del pipeline que den retroalimentación rápida y relevante. Necesitan prioridades claras y tiempo para actuar sobre ellas, y deben poder plantear preocupaciones con libertad.

### Equipos de servicio y de operaciones

Los equipos de operaciones ejecutan los escáneres, aplican los parches y responden a los incidentes. Deben mantener al día los vínculos con los activos, reportar con honestidad la cobertura y gestionar las excepciones con plazos. Necesitan además tiempo protegido para ensayar la respuesta a incidentes y una cultura sin culpas cuando se cometen errores.

### Liderazgo y gobernanza

Los líderes fijan el apetito de riesgo y deciden si la seguridad se financia como una actividad continua o como un proyecto. Deben pedir ventanas de exposición y los elementos abiertos más antiguos en lugar de totales, proteger la cultura de reporte y aceptar que los números subirán cuando mejore la visibilidad. La gobernanza debe exigir evidencia para las excepciones y para el aprendizaje de los incidentes.

### Clientes y usuarios

Los usuarios son a la vez beneficiarios y una línea de defensa. Quieren servicios que protejan sus datos y quieren una orientación clara y justa. Debe informárseles con prontitud cuando un incidente les afecta, tratarlos con respeto cuando reportan problemas y darles medidas de seguridad que no les compliquen el trabajo más de lo necesario (véase el tema 6.4, Experiencia de usuarios y empleados).

## En la práctica: un ejemplo de gestión de servicios

Una cooperativa de crédito regional opera banca en línea, una aplicación móvil y sistemas de sucursal con un pequeño equipo de ingeniería y un servicio externalizado de operaciones de seguridad. Los números siguientes son ilustrativos.

El consejo pide un panel de seguridad. El primer borrador del analista de seguridad muestra 4200 vulnerabilidades abiertas a la baja y un 96 por ciento de cumplimiento de parches. El jefe de ingeniería pregunta por la cobertura de escaneos. Al unir la salida del escáner con el registro de activos, el analista descubre que el 31 por ciento de los servidores y casi todos los contenedores no se escanearon en los últimos 30 días, porque el escáner perdió las credenciales tras una migración. Entre los activos que sí se escanearon, la ventana de exposición mediana de las vulnerabilidades críticas es de 9 días y el percentil 85 es de 41 días. El hallazgo crítico más antiguo tiene 212 días, en un sistema heredado con una excepción que caducó cuatro meses antes. El cumplimiento de parches del 96 por ciento se calculó solo sobre los activos que reportó la herramienta de parcheo.

El equipo hace cuatro cambios con ingeniería y operaciones. La cobertura de escaneos pasa a ser la primera línea del panel, con el objetivo de alcanzar la cobertura total del registro, y se repara y monitoriza la autenticación del escáner. La priorización añade el estado de explotación y la importancia del activo a la puntuación de gravedad, de modo que los 4200 hallazgos se reducen a una lista corta de unos 60 que importan ahora. Las actualizaciones de dependencias pasan al pipeline como cambios pequeños y frecuentes con pruebas automatizadas. Las excepciones reciben un responsable, un control compensatorio y una fecha de revisión, y la caducada la revisa el comité de riesgos. El analista de seguridad cambia además cómo se reportan los resultados de la suplantación simulada: solo se muestra la tasa de reportes a nivel de grupo, y el analista da personalmente las gracias a los colegas que reportan.

Dos meses después la cobertura de escaneos es del 97 por ciento, la ventana de exposición del percentil 85 de los elementos críticos es de 14 días y el hallazgo crítico más antiguo es una excepción mitigada con 60 días hasta su revisión. Una empleada de una sucursal reporta en minutos un correo sospechoso de solicitud de pago, y el incidente se contiene en menos de dos horas. El consejo pide reducir a la mitad el recuento de vulnerabilidades abiertas a final de año. El jefe de ingeniería sugiere reportar en su lugar la ventana de exposición y los hallazgos críticos vencidos, explicando que un recuento puede bajar escaneando menos. La decisión se anota, y el consejo acuerda revisar las nuevas medidas en la próxima reunión.

## Agilidad, IA, automatización y analítica

### Agilidad

Trata la seguridad como parte de la entrega continua, con las correcciones fluyendo por el mismo pipeline y la misma revisión que los demás cambios. La precaución es que los objetivos sobre recuentos de vulnerabilidades fomentan la reclasificación.

### IA

La IA añade nuevos riesgos, como la inyección de instrucciones y la fuga de datos, y las herramientas de IA pueden ayudar a clasificar los hallazgos. Haz seguimiento de los incidentes que implican sistemas de IA y de la proporción de hallazgos clasificados por IA que una persona confirmó. La precaución es que una IA que descarta un hallazgo real da falsa seguridad.

### Automatización

Automatiza el escaneo y el parcheo donde sea seguro, y mide la cobertura de escaneos y los parches fallidos. La precaución es que el parcheo automático puede romper servicios, así que usa despliegues escalonados y reversión.

### Analítica

Reporta la ventana de exposición como una distribución por gravedad con recuentos. La decisión a la que informa es dónde recortar primero la exposición. La precaución es que las puntuaciones de vulnerabilidad son insumos, no resultados, así que combínalas con la explotabilidad y la importancia del activo.

## Perspectiva sectorial

**Startup.** Normalmente no hay un equipo de seguridad dedicado, así que integra lo básico en el pipeline: actualizaciones de dependencias, escaneo de secretos, autenticación multifactor y mínimo privilegio. Haz seguimiento de la ventana de exposición de una lista corta de sistemas críticos y ten un plan sencillo de incidentes. Resiste la compra de un gran conjunto de herramientas antes de conocer tu parque.

**Pequeña empresa.** Los servicios externalizados y las herramientas en la nube cargan con la mayor parte del riesgo. Mantén un inventario, activa la autenticación multifactor en todas partes, mantén los sistemas actualizados automáticamente y sabe a quién llamar en un incidente. Mide el cumplimiento de parches y el tiempo para restaurar copias de seguridad. Evita avergonzar al personal que reporta errores.

**Gran empresa.** La escala necesita datos coherentes entre muchos equipos y herramientas. Define de forma central las bandas de prioridad y las ventanas, deja que los equipos posean sus hallazgos, reporta la exposición por servicio de negocio y ejecuta ejercicios con regularidad. Coordínate con los equipos de seguridad de los proveedores y prueba los traspasos.

**Gobierno y sector público.** Los sectores suelen afrontar directivas obligatorias con plazos para vulnerabilidades concretas, deberes formales de reporte de incidentes y requisitos de auditoría. Trátalos como insumos de diseño: haz seguimiento del cumplimiento de los plazos de las directivas, conserva la evidencia y reporta los incidentes como se exija protegiendo la privacidad de las personas (véase el tema 8.5, Informes regulatorios y gubernamentales).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son las herramientas de escaneo y monitorización, que pueden ser ya propias; el tiempo para mantener los vínculos con los activos; el tiempo de ingeniería para corregir hallazgos y actualizar dependencias; la preparación y los ejercicios de respuesta a incidentes; y la formación. Las comprobaciones del pipeline cuestan tiempo de configuración y algo de tiempo de compilación. La monitorización externalizada tiene una cuota de servicio.

El retorno es una menor probabilidad y un menor impacto de los incidentes, una exposición más corta y menos cambios de emergencia apresurados. Estos beneficios son reales y difíciles de cuantificar, porque el incidente que no ocurrió no deja registro. Evita citar costos medios de brechas o frecuencias de incidentes del sector salvo que puedas rastrear la fuente y su relevancia. Construye el caso con tus propios datos: la tendencia de la ventana de exposición, el número de cambios de emergencia causados por un parcheo tardío, el tiempo dedicado al trabajo manual de parcheo que la automatización eliminó y el costo de tus incidentes pasados, incluido el tiempo del personal y el impacto en los clientes. Describe la reducción del riesgo en términos de escenarios concretos, como sugiere el tema anterior sobre casos de negocio (véase el tema 7.7, Retorno de la inversión y caso de negocio).

## Antipatrones y trampas

- **Reportar recuentos de vulnerabilidades.** Los recuentos bajan cuando los escaneos pasan cosas por alto. Reporta la ventana de exposición, los elementos vencidos y la cobertura.
- **Priorizar solo por puntuación de gravedad.** Ignora la alcanzabilidad y la explotación. Añade contexto.
- **Tratar el escaneo como la verdad.** Comprueba la cobertura y la calidad del escaneo frente al registro de activos.
- **Excepciones permanentes.** Se convierten en riesgo oculto. Da a cada excepción un responsable y una fecha de revisión.
- **Avergonzar a las personas por sus errores.** Los reportes se detienen. Usa la revisión sin culpas y resultados agregados.
- **La seguridad como puerta al final.** Frena la entrega e invita a soluciones provisionales. Integra las comprobaciones en el pipeline.
- **Ciclos de parcheo de gran estallido.** Son arriesgados y lentos. Parchea a menudo en cambios pequeños.
- **Ignorar a los proveedores.** Sus debilidades son tuyas. Haz seguimiento de las obligaciones de seguridad y de los incidentes de los proveedores.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Visibilidad | Escaneos ocasionales de algunos sistemas | Escaneos regulares de los sistemas principales | Cobertura de escaneos seguida frente al registro de activos; hallazgos vinculados con responsables | Cobertura, ventanas de exposición y excepciones gestionadas y con tendencias | Visión compartida entre equipos y proveedores, incluidas las dependencias |
| Priorización y corrección | Corregir por la petición más ruidosa | Listas basadas en la gravedad | Ordenación basada en el contexto; ventanas de política por banda; parches pequeños y frecuentes | Ventanas y cola revisadas; comprobaciones del pipeline ajustadas con los equipos | Remediación automatizada y basada en el riesgo con supervisión humana |
| Respuesta y cultura | Respuesta ad hoc; culpa | Plan básico, rara vez probado | Plan ensayado; revisión sin culpas; reporte valorado | Tiempo de contención y tasa de detección interna gestionados; cultura de reporte medida | Ejercicios conjuntos con proveedores y clientes; aprendizaje ampliamente compartido |

## Lista de verificación

- [ ] La cobertura de escaneos se mide frente al registro de activos.
- [ ] Los hallazgos se vinculan con un activo, un responsable y un servicio.
- [ ] Las bandas de prioridad combinan gravedad, explotación, alcanzabilidad e importancia del activo.
- [ ] Las ventanas de política por banda están acordadas, y se reportan la ventana de exposición y el elemento abierto más antiguo.
- [ ] Las comprobaciones de dependencias y del pipeline se ejecutan en cada compilación, con bloqueantes acordados.
- [ ] El parcheo se ejecuta como cambios frecuentes, pequeños y probados, con una vía de emergencia.
- [ ] Las excepciones tienen un responsable, un control compensatorio y una fecha de revisión.
- [ ] La respuesta a incidentes se ensaya, y el tiempo hasta la contención se mide desde la detección.
- [ ] Los datos de comportamiento humano se reportan solo agregados, y el reporte se agradece.
- [ ] Se hace seguimiento de las obligaciones de seguridad y de los incidentes de los proveedores.

## Prompts de IA

**Revisa una regla de priorización de vulnerabilidades.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Comprueba la cobertura de escaneos.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Planifica un ejercicio de mesa.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Escribe un mensaje sin culpas para un error reportado.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de seguridad o de vulnerabilidades.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de seguridad lleva su vector de manipulación, su barrera de protección y sus reglas de privacidad.

## Ideas clave

- Mide el tiempo de exposición, los elementos abiertos más antiguos y la cobertura de escaneos, no los recuentos brutos de hallazgos.
- Prioriza por contexto: gravedad, explotación, alcanzabilidad e importancia del activo.
- Parchea a menudo en cambios pequeños y probados, y da a cada excepción un responsable y una fecha de revisión.
- Contén rápido los incidentes, aprende sin culpas y haz seguimiento de la detección interna.
- Trata la cultura de reporte como un control: agradece a quienes reportan y no clasifiques nunca a individuos.
- Integra las comprobaciones de seguridad en el pipeline para que las elecciones seguras sean las fáciles.

## Referencias y lecturas complementarias

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
