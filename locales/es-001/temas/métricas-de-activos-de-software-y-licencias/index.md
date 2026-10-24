# Métricas de activos de software y licencias

**El software se compra, se contrata por suscripción, se construye y se toma prestado, y cada ruta crea obligaciones y costos, así que mide a qué tienes derecho, qué usas de verdad y de qué dependes, y facilita que los equipos elijan herramientas sin crear sorpresas más adelante.**

## Visión general y motivación

El software es la clase de activo que cambia más deprisa y que es más difícil de ver. Un desarrollador añade una biblioteca en minutos. Un equipo se da de alta en una herramienta de software como servicio con la tarjeta de la empresa. Un proveedor cambia su modelo de precios entre renovaciones. Un contrato permite 500 usuarios y hay 700 con cuenta. La [gestión de activos de software](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) es la práctica de negocio de gestionar y optimizar la compra, el despliegue, el mantenimiento, el uso y la eliminación del software dentro de una organización. Se sitúa dentro de la práctica más amplia de gestión de activos de TI (véase el tema 7.1, Métricas de gestión de activos de TI) y comparte su disciplina de registros, responsables y ciclos de vida.

La entrega continua y la gestión de activos de software tiran en direcciones distintas en cuanto a la rapidez. Los equipos que entregan de forma continua necesitan elegir y adoptar herramientas deprisa, y construyen sobre componentes de código abierto por centenares. La gestión de activos de software quiere saber qué se usa, con qué condiciones, a qué costo y con qué riesgo. Ambas tienen razón. El camino es la colaboración continua entre equipos, compras, jurídica, seguridad y finanzas: hacer rápido el camino aprobado, hacer fácil de encontrar el catálogo de herramientas aprobadas y hacer automáticas las comprobaciones. Frenar a los equipos con un largo proceso de aprobación produce [TI en la sombra](https://en.wikipedia.org/wiki/Shadow_IT), lo contrario de la visibilidad que todos quieren.

Importan cuatro tipos de software, y las métricas difieren entre ellos.

- **Software con licencia** instalado en dispositivos o servidores, regido por una [licencia de software](https://en.wikipedia.org/wiki/Software_license) que dice quién puede usarlo, cuántos pueden usarlo y en qué condiciones. Los derechos pueden ser por usuario, por dispositivo, por núcleo o por sede, y la unidad decide cómo se cuenta.
- **Software como servicio.** El [software como servicio](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) se accede por una red y se paga por suscripción, a menudo por puesto o por uso. Es fácil de adoptar y fácil de olvidar. Se acumulan herramientas solapadas y puestos sin usar.
- **Componentes de código abierto.** El [software de código abierto](https://en.wikipedia.org/wiki/Open-source_software) está disponible bajo licencias que conceden derechos amplios con condiciones. Algunas licencias, llamadas licencias de [copyleft](https://en.wikipedia.org/wiki/Copyleft), exigen que el trabajo derivado se comparta con los mismos términos. El cumplimiento depende de cómo se usa y se distribuye un componente, y la interpretación de una licencia es una cuestión jurídica.
- **Software que construyes.** Tu propio código es un activo, y depende de muchos componentes. Una [lista de materiales de software](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) es una lista de los componentes de una pieza de software. Te ayuda a responder cuáles de tus servicios usan una biblioteca dada cuando aparece una vulnerabilidad o un problema de licencia.

Las métricas de activos de software están expuestas a la distorsión habitual. Una posición de licencias puede parecer sana porque el inventario está incompleto. El costo de shelfware puede parecer bajo porque los contratos se acortaron antes de la revisión. La barrera de protección de la [ley de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica, así que cada medida de aquí se empareja con una comprobación independiente (véase el tema 1.2, Ley de Goodhart y psicología de las métricas).

Una advertencia sobre la ley: las condiciones de las licencias y los derechos de auditoría son asuntos jurídicos. Este tema describe la práctica de medición. No interpreta ninguna licencia ni sustituye el asesoramiento de un asesor jurídico cualificado para tu situación y tu jurisdicción.

## Principios clave

- **Mide el derecho frente al uso.** Saber a qué tienes derecho y qué usas de verdad es la comparación central.
- **Cuenta en la unidad que usa la licencia.** Usuarios, dispositivos, núcleos y suscripciones son cosas distintas, y mezclarlos esconde la respuesta.
- **Haz que el camino aprobado sea el rápido.** Un catálogo visible y una aprobación ágil reducen la adopción en la sombra.
- **Incluye los componentes además de los productos.** Las bibliotecas de código abierto y sus licencias forman parte del parque.
- **Revisa antes de la renovación.** El mejor momento para recortar el desperdicio es antes de la fecha del contrato.
- **Mantén a jurídica en la conversación.** La interpretación pertenece a quienes están cualificados para darla.
- **Comparte la imagen con los equipos.** Los equipos que ven su propio uso y su propio costo toman mejores decisiones.

## Definiciones de métricas

| Métrica | Definición | Fórmula | Unidad | Fuente de datos | Práctica de ITIL | Contrapartida ágil | Cadencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Posición efectiva de licencias | Comparación de los derechos que se poseen con el uso encontrado, por producto, en la propia unidad de recuento de la licencia | derechos poseídos menos despliegues o usuarios encontrados, por producto | unidades (excedente positivo, déficit negativo) | Registros de derechos, herramienta de descubrimiento, sistema de identidad | Gestión de activos de TI; gestión de proveedores | Catálogo visible y datos de uso para los equipos | Mensual para los productos clave; trimestral para los demás |
| Tasa de utilización de licencias | Proporción de derechos pagados que están en uso activo | derechos con actividad en los últimos 90 días / derechos pagados | porcentaje | Informes de uso del proveedor, registros de identidad, registros de derechos | Gestión de activos de TI; gestión financiera | Retrospectiva sobre el valor de las herramientas | Mensual |
| Costo de shelfware | Costo anual de los derechos que se pagan y no se usan | suma de (derechos sin usar multiplicados por el costo unitario) | moneda por año | Registros de derechos, datos de uso, facturas | Gestión de activos de TI; gestión financiera | Reducción del desperdicio en la cadena de herramientas | Trimestral |
| Recuento de aplicaciones no autorizadas | Número de aplicaciones de software en uso que no están en el catálogo aprobado | aplicaciones vistas en los datos de gastos, en los registros de inicio de sesión único o en los datos de red que no están en el catálogo | recuento | Informes de gastos, proveedor de identidad, datos de red y de puestos finales | Gestión de activos de TI; gestión de la seguridad de la información | Equipos que eligen herramientas con soporte visible | Mensual |
| Preparación de renovaciones | Proporción de renovaciones que tuvieron una revisión de uso antes de la fecha de preaviso | renovaciones con una revisión de uso completada al menos 90 días antes de la fecha de preaviso / renovaciones que vencen en el periodo | porcentaje | Registro de contratos y registros de revisiones | Gestión de proveedores; gestión financiera | Planificar con antelación el cambio | Trimestral |
| Cobertura de SBOM | Proporción de servicios de producción con una lista de materiales de software vigente | servicios con una SBOM generada en el último ciclo de versión / servicios de producción | porcentaje | Salidas del pipeline de compilación, catálogo de servicios | Gestión de activos de TI; gestión de la seguridad de la información | La definición de terminado incluye la visibilidad de las dependencias | Mensual |
| Cobertura de revisión de código abierto | Proporción de componentes en producción con una identificación de licencia y una decisión de política registradas | componentes con licencia y decisión registradas / componentes encontrados en las SBOM | porcentaje | Herramienta de análisis de composición de software, registro de políticas | Gestión de activos de TI; gestión de proveedores | Revisión de dependencias en el pipeline | Mensual |

Declara la unidad de recuento de cada producto en el registro. La utilización cuenta la actividad a partir de un evento definido, como el inicio de sesión, y una ventana declarada. Excluye las cuentas de servicio y de prueba de los recuentos de usuarios solo cuando las condiciones de la licencia lo permitan, y anota la regla. El costo es el precio unitario del contrato neto de los descuentos acordados, y se anota la fecha del precio.

## Recomendaciones

### Conoce lo que posees y lo que usas

**1. Mantén un registro de derechos para cada producto que cueste dinero o lleve obligaciones.** El registro debe contener el proveedor, el producto, el tipo de licencia, la unidad de recuento, la cantidad, el plazo, el precio, las fechas de renovación y de preaviso, las restricciones y el responsable. Guarda el contrato o un enlace a él. La métrica depende de este registro, y a menudo no existe para las suscripciones compradas fuera de la función de compras.

**2. Mide el uso con la unidad del proveedor.** Las licencias por puesto cuentan usuarios con nombre, y las licencias por procesador cuentan núcleos. Una utilización medida contra la unidad equivocada da una falsa comodidad. Donde las condiciones son complejas, pide a compras y a jurídica que describan una vez la regla de recuento en lenguaje llano, y anótala.

**3. Combina tres fuentes de datos de uso.** La consola de administración del proveedor, los registros de inicio de sesión de tu proveedor de identidad y tus herramientas de descubrimiento ven cada uno una parte. Donde discrepan, averigua por qué. Un puesto asignado pero nunca usado es candidato a recuperarse, y un usuario que aparece en un registro y no en otro puede ser un problema de datos.

**4. Recupera por defecto los puestos sin usar.** Fija una regla, como retirar el acceso tras 90 días sin uso y restablecerlo a petición. Haz fácil el restablecimiento para que la regla no frustre a la gente. Recuperar es una práctica continua, no un proyecto, y funciona mejor cuando está automatizada y anunciada.

### Haz fácil el camino correcto

**5. Publica un catálogo de herramientas aprobadas.** Enumera lo que los equipos pueden usar, cuánto cuesta, quién da el soporte y cómo solicitar acceso. Añade una vía rápida para proponer una herramienta nueva, con una revisión breve de seguridad, privacidad y costo. Un catálogo que ayuda a la gente a encontrar la herramienta existente evita compras duplicadas (véase el tema 6.3, Métricas de adopción y catálogo de servicios).

**6. Vigila la proliferación sin castigarla.** Usa los datos de gastos, los registros de inicio de sesión único y los datos de red para encontrar aplicaciones que no están en el catálogo. Trata cada una como una conversación: ¿qué necesita el equipo y podría servirle una herramienta aprobada? Cuenta las aplicaciones no autorizadas y haz seguimiento de la tendencia, y apunta a poner bajo gestión las útiles, no a erradicarlas.

**7. Da a los equipos visibilidad de su propio uso y costo.** Una vista mensual de puestos, uso y costo por equipo les permite limpiar sus propias suscripciones. La visibilidad funciona mejor que la vigilancia, y respeta la preferencia ágil por equipos autoorganizados con la información que necesitan.

### Planifica las renovaciones y gestiona la dependencia

**8. Revisa el uso antes de cada renovación significativa.** Fija una revisión entre 90 y 120 días antes de la fecha de preaviso, con el responsable, compras y finanzas. Lleva la utilización, el costo de shelfware, las alternativas y la opinión del equipo. La preparación de renovaciones es la proporción de renovaciones que llegan a esta revisión a tiempo. Una fecha de preaviso perdida es un costo con una causa.

**9. Vigila el bloqueo por proveedor.** El [bloqueo por proveedor](https://en.wikipedia.org/wiki/Vendor_lock-in) (vendor lock-in) hace costoso cambiar de proveedor. Anota la ruta de salida de los productos importantes: formatos de exportación de datos, condiciones contractuales de terminación y esfuerzo de sustitución. No tienes que evitar la dependencia, pero debes conocer su precio.

**10. Genera una SBOM en cada versión.** Las herramientas de compilación pueden producir una SBOM automáticamente como parte del pipeline, de modo que la información se mantiene vigente sin esfuerzo continuo. Guárdala con la versión y hazla consultable para poder responder qué servicios usan un componente. Esto respalda por igual la gestión de licencias y la respuesta de seguridad.

**11. Revisa las licencias de código abierto en el pipeline.** Las herramientas de [análisis de composición de software](https://en.wikipedia.org/wiki/Software_composition_analysis) identifican componentes y sus licencias. Acuerda con jurídica una política breve sobre qué licencias están aprobadas, cuáles necesitan revisión y cuáles no se permiten para tu uso, y haz que el pipeline señale las excepciones. Guarda las decisiones de política en un registro. La herramienta identifica licencias, y una persona cualificada para interpretarlas decide los casos difíciles.

### Prepara las auditorías con calma

**12. Ten la evidencia lista, no una carrera.** Una [auditoría de software](https://en.wikipedia.org/wiki/Software_audit) por un proveedor o un regulador te pide demostrar que tu uso coincide con tus derechos. Si los registros de derechos y los datos de uso ya se concilian cada mes, una auditoría es una petición rutinaria. Implica pronto a jurídica y a compras, responde por un solo canal y no informes por tu cuenta de conclusiones que no hayas revisado con ellas.

## Vectores de manipulación y barreras de protección

| Métrica | Cómo se manipula | Métrica o práctica de protección emparejada |
| --- | --- | --- |
| Posición efectiva de licencias | Contar en una unidad favorable; dejar fuera del descubrimiento los despliegues en la sombra | Contar en la propia unidad de la licencia; comparar con los datos de gastos y de identidad; revisión jurídica de la regla de recuento |
| Tasa de utilización de licencias | Acortar la ventana de actividad; contar como uso los inicios de sesión de bots o de cuentas de servicio | Ventana fija en el registro; excluir las cuentas no humanas; comparar con el informe de uso del proveedor |
| Costo de shelfware | Renegociar o cancelar justo antes de la revisión para reducir el número; ignorar las suscripciones en tarjetas | Incluir todas las fuentes de gasto; hacer seguimiento del costo al comienzo de la ventana de preaviso |
| Recuento de aplicaciones no autorizadas | Aprobar todo en el catálogo para reducir el recuento; esconder el uso mediante cuentas personales | Criterios de revisión del catálogo; mirar los datos de gastos y de identidad; preguntar a los equipos qué necesitan |
| Preparación de renovaciones | Celebrar una revisión de trámite; fijar más tarde la fecha de preaviso | Lista de verificación de la revisión con insumos exigidos; fechas de contratos en poder de compras |
| Cobertura de SBOM | Generar SBOM que omiten las dependencias transitivas; contar salidas de compilación que no se publican | Definir la profundidad en el registro; comprobar por muestreo una SBOM frente al artefacto desplegado |
| Cobertura de revisión de código abierto | Marcar componentes como revisados sin una decisión; aceptar licencias «desconocidas» | Contar los componentes con licencia desconocida; revisar una muestra de decisiones |

Una lectura sana es una posición de licencias que coincide con la evidencia independiente, una tasa de utilización que sube porque se recuperan puestos y no porque cambió la definición, un recuento de aplicaciones no autorizadas que baja a medida que mejora el catálogo y renovaciones que llegan con una revisión.

## Compensaciones: ventajas y desventajas

| Enfoque | Fortaleza | Debilidad |
| --- | --- | --- |
| Aprobación central de todas las herramientas | Control fuerte, una sola vista | Lento; fomenta la TI en la sombra |
| Elección del equipo dentro de barreras de protección | Rápido; encaja con las necesidades del equipo | Más variedad; necesita visibilidad y revisión |
| Recuperación agresiva de puestos | Ahorra costo | Puede frustrar a los usuarios si el restablecimiento es lento |
| Provisión generosa de puestos | Poca fricción | Se acumula el desperdicio |
| Acuerdos corporativos | Menor costo unitario, más sencillos | Bloqueo; pagar una amplitud que no se necesita |
| Pago por uso | Ajusta el costo al uso | Facturas impredecibles |
| Escaneo automatizado de licencias | Coherente y rápido | Necesita juicio humano en los casos límite |
| Revisión manual de componentes | Cuidadosa | No escala para árboles de dependencias grandes |

La respuesta en prosa es dar a los equipos elección dentro de barreras de protección claras, automatizar las comprobaciones y dedicar la atención humana a los contratos grandes y a las cuestiones difíciles de licencias. Mantén una vía rápida para las herramientas nuevas y una vía fácil para restablecer el acceso recuperado.

## Preguntas para debatir con tu equipo

**1. ¿Qué tres productos nos cuestan más y sabemos cuánta gente los usa?**
Enumera los mayores contratos y la unidad de recuento de cada uno. Compara con los datos de uso. El facilitador debe buscar productos donde nadie conoce la unidad o donde no existen datos de uso. Acuerden recoger los datos de uno antes de la próxima renovación.

**2. ¿Cómo se adopta una herramienta nueva aquí y cuánto tarda?**
Rastreen un ejemplo reciente desde la solicitud hasta el acceso. Pregunten cuántos equipos se saltaron el camino y por qué. La respuesta muestra si el camino aprobado es rápido. Acuerden una mejora del camino y una forma de saber si funcionó.

**3. ¿Qué pasaría si un proveedor nos pidiera demostrar nuestra posición de licencias el mes que viene?**
Recorran quién respondería, qué registros existen y qué brechas hay. La conversación no debe aspirar a conclusiones jurídicas, solo a identificar los registros que faltan. Nombren a las personas de jurídica y de compras que se implicarían y cómo las contactaría el equipo.

**4. ¿Dónde recuperamos puestos sin usar y dónde no?**
Revisen las reglas de recuperación de los productos principales. Pregunten qué pasaría si una regla se aplicara al resto. Hablen de cómo hacer indoloro el restablecimiento del acceso, ya que eso es lo que hace aceptable la regla.

**5. ¿Podemos decir cuáles de nuestros servicios usan una biblioteca de código abierto dada?**
Elijan una biblioteca conocida e intenten responder. Si lleva más de unos pocos minutos, hablen de por qué. Acuerden qué paso del pipeline podría producir una SBOM y dónde podrían guardarse los resultados.

**6. ¿De qué dependemos que sería difícil abandonar?**
Enumeren productos cuyos datos o flujo de trabajo están muy ligados a un proveedor. Pregunten cuánto costaría irse y cómo empezarían. El facilitador puede anotar la respuesta como insumo de la planificación de renovaciones.

## Cuatro perspectivas

### Equipos de producto y de entrega

Los equipos de entrega eligen herramientas y bibliotecas a diario. Deben usar el catálogo aprobado donde les sirva, proponer ampliaciones con una nota breve y dejar que el pipeline genere SBOM y señale problemas de licencias. Necesitan respuestas rápidas: una política clara sobre las licencias comunes y una vía para preguntar por las inusuales. Un equipo que ve sus propios datos de puestos y gasto los limpiará sin que se lo digan.

### Equipos de servicio y de operaciones

Los equipos de operaciones ejecutan el descubrimiento, gestionan el acceso y atienden las renovaciones y las auditorías. Deben conciliar los datos de uso con los derechos, recuperar los puestos sin usar según un calendario y mantener al día el registro de contratos. Cargan además con la carga de soporte de las herramientas sin gestionar, una buena razón para poner bajo gestión las útiles.

### Liderazgo y gobernanza

Los líderes quieren evitar costos no planificados y exposición jurídica sin frenar a los equipos. Deben financiar la automatización, pedir la evidencia independiente que respalde las afirmaciones sobre la posición de licencias y mantener informadas a jurídica y a compras. La gobernanza debe esperar que las renovaciones se revisen a tiempo y que la política de código abierto se aplique en el pipeline.

### Clientes y usuarios

Los usuarios quieren que la herramienta que necesitan funcione a la primera, sin una larga espera. Notan cuando el acceso desaparece sin aviso o cuando dos herramientas hacen el mismo trabajo. Debe decírseles cuándo se recuperarán los puestos, darles una vía fácil para pedir acceso y consultarles cuando se sustituye una herramienta.

## En la práctica: un ejemplo de gestión de servicios

El grupo de tecnología de una organización regional de noticias da soporte a 900 empleados y opera una plataforma de publicación con unos 40 servicios. Los números siguientes son ilustrativos.

El director financiero pregunta por qué los costos de software han crecido más deprisa que la plantilla. La responsable de activos de software reúne los datos. Los registros de derechos cubren 61 productos. Los registros de inicio de sesión y los informes de proveedores muestran que la suite de diseño tiene 220 puestos y 140 usuarios activos en los últimos 90 días, una tasa de utilización del 64 por ciento, y los puestos sin usar cuestan aproximadamente lo mismo que el salario de un ingeniero. Los datos de gastos muestran 37 aplicaciones que no están en el catálogo, sobre todo herramientas de colaboración y de analítica compradas por equipos. Tres de las mayores renovaciones tenían fechas de preaviso que pasaron sin una revisión de uso.

El equipo hace cuatro cambios con los equipos de producto. Una regla de recuperación de puestos retira el acceso tras 90 días sin uso, con una solicitud de un clic para restablecerlo. Una página de catálogo enumera las herramientas aprobadas, su costo y un responsable, con una vía de dos días para proponer una herramienta nueva. Las revisiones de renovación empiezan 100 días antes de la fecha de preaviso, con una lista de verificación de utilización, alternativas y opinión del equipo. El pipeline de compilación de la plataforma de publicación genera ahora una SBOM en cada versión, y un escaneo de licencias señala los componentes con licencias desconocidas o restringidas para su revisión por jurídica.

Tres meses después, la utilización de la suite de diseño es del 86 por ciento tras recuperar 60 puestos, y una renovación se renegocia con un número menor de puestos. El recuento de aplicaciones no autorizadas baja de 37 a 24, ya que el equipo añade cuatro herramientas útiles al catálogo y retira duplicados. La cobertura de SBOM es del 70 por ciento de los servicios de producción. El escaneo encuentra un componente con una licencia desconocida en un servicio poco usado, que jurídica revisa y el equipo sustituye. Un proveedor solicita una verificación de licencias de otro producto, y los registros presentados para la auditoría coinciden, con una corrección. El director pide una promesa de utilización del 100 por ciento, y la responsable explica que una cifra sana deja algo de margen para nuevas incorporaciones y cambios, y propone un rango como orientación, no como objetivo. La decisión se anota.

## Agilidad, IA, automatización y analítica

### Agilidad

Facilita que los equipos elijan herramientas mediante un proceso breve y visible, y revisa el uso con las partes interesadas con regularidad. La precaución es que un proceso de aprobación estricto empuja a la gente hacia herramientas no autorizadas.

### IA

Los servicios de IA añaden nuevos modelos de licencia, basados en puestos, tokens o uso, y nuevas obligaciones sobre los datos y las condiciones de los modelos. Haz seguimiento de la utilización de licencias y del costo por usuario activo de las herramientas de IA, y empareja con una comprobación de utilidad por los usuarios. La precaución es que los precios basados en el uso pueden crecer sin que se note, así que fija alertas y responsables.

### Automatización

Recoge automáticamente los datos de derechos y de uso, y genera la lista de materiales de software en el pipeline. Mide la automatización por su cobertura y sus falsos positivos. La precaución es que una lista de materiales que se genera pero no se lee no reduce el riesgo.

### Analítica

Muestra la posición efectiva de licencias y el costo de shelfware con la fecha de los datos. La decisión a la que informa es qué renovar, reducir o abandonar. La precaución es que las reglas de licencias son complejas, así que pide a un especialista la interpretación de los contratos.

## Perspectiva sectorial

**Startup.** Las herramientas se eligen deprisa y se pagan con tarjeta. Mantén una lista de una página con las suscripciones, sus responsables y las fechas de renovación, revísala cada trimestre y usa los niveles gratuitos de forma deliberada. Presta atención a las licencias de código abierto antes de distribuir software o de buscar inversión, ya que los inversores pueden preguntar.

**Pequeña empresa.** Un puñado de productos carga con la mayor parte del costo. Haz seguimiento a mano de los recuentos de puestos, fija recordatorios en el calendario para las renovaciones y pide a los proveedores informes de uso. Cuidado con las suscripciones de renovación automática y con las licencias ligadas a una persona que se ha ido.

**Gran empresa.** Los contratos complejos, las fusiones y las muchas unidades de negocio dificultan los registros de derechos. Invierte en un modelo de datos que contenga las unidades de recuento, automatiza los flujos de descubrimiento y de identidad y da a jurídica y a compras un lugar en el pipeline para la política de código abierto. Espera auditorías de proveedores y prepara la evidencia con antelación.

**Gobierno y sector público.** Las reglas de contratación, las licencias de beneficio público y los requisitos de soberanía dan forma a las decisiones. Documenta los motivos de las compras, conserva los registros de contratos durante el periodo exigido y considera los estándares abiertos y las rutas de salida como requisitos. La transparencia sobre el gasto en software puede ser un deber legal (véase el tema 8.4, Métricas de proveedores y contratos).

## Caso de negocio: motivaciones, ROI y TCO

Los costos son el tiempo para construir el registro de derechos, las herramientas de análisis de uso y de composición y el esfuerzo de revisar las renovaciones. Algunas herramientas ya están licenciadas como parte de las plataformas de identidad o de puestos finales. El costo rutinario son unas pocas horas al mes para un parque pequeño y más para uno grande. Automatizar la recuperación y la generación de SBOM lo reduce.

El retorno procede del gasto evitado y de la sorpresa evitada. Los puestos sin usar son un ahorro directo en la renovación. Las revisiones tempranas de renovaciones permiten negociar desde el conocimiento. Conocer tus dependencias acorta la respuesta a vulnerabilidades y a cuestiones de licencias. Evita citar porcentajes de ahorro del sector que no puedas rastrear. Mide tu propia línea base: puestos sin usar multiplicados por el costo unitario, el número de renovaciones revisadas tarde, el tiempo para responder «¿qué servicios usan este componente?» y el costo de cualquier hallazgo de auditoría pasado. Incluye el costo del propio programa y cuenta la exposición jurídica evitada solo donde puedas describir un riesgo concreto reducido. Los temas siguientes sobre costos llevan más lejos la visión financiera (véase el tema 7.5, Costo del servicio y economía unitaria).

## Antipatrones y trampas

- **Contar en la unidad equivocada.** Un recuento de puestos para una licencia vendida por núcleo engaña. Anota la unidad.
- **Tratar el informe del proveedor como toda la verdad.** Combínalo con tus propios registros.
- **Bloquear herramientas por defecto.** Los equipos esquivan el bloqueo. Haz rápido el camino aprobado.
- **Recuperar sin un camino de vuelta.** Los usuarios pierden la confianza. Haz fácil y rápido el restablecimiento.
- **Revisar las renovaciones después de la fecha de preaviso.** La capacidad de influencia se ha ido. Empieza pronto.
- **Escanear licencias e ignorar los resultados.** Un escaneo sin política ni responsable de decisión es ruido.
- **Interpretar licencias en el equipo de entrega.** Los casos difíciles pertenecen a jurídica.
- **Tratar las SBOM como papeleo.** Si nadie las consulta, decaen. Úsalas en simulacros de respuesta.

## Modelo de madurez

| Dimensión | 1 Iniciar | 2 Desarrollar | 3 Estandarizar | 4 Gestionar | 5 Orquestar |
| --- | --- | --- | --- | --- | --- |
| Derechos y uso | Contratos en el correo; sin datos de uso | Registros de los productos principales; comprobaciones de uso ocasionales | Registros de derechos con unidades de recuento; uso a partir de la identidad y de los datos del proveedor | Posición de licencias y utilización revisadas cada mes; puestos recuperados automáticamente | Uso y gasto compartidos con los equipos; los datos de compras y de uso fluyen entre los proveedores y la organización |
| Camino de adopción | Los equipos compran lo que les gusta | Una lista de herramientas aprobadas | Vía rápida de catálogo con responsables y criterios de revisión | Aplicaciones no autorizadas con seguimiento, absorbidas o retiradas | Elección de herramientas codiseñada con los equipos; servicios comunes reutilizados en la organización |
| Componentes y dependencias | Desconocidos | Listas manuales de componentes para algunos servicios | SBOM generada en la versión; política de licencias acordada con jurídica | Cobertura con seguimiento; excepciones revisadas; simulacros de respuesta ejecutados | SBOM y política compartidas con proveedores y clientes; rutas de salida planificadas |

## Lista de verificación

- [ ] Todo producto de pago o con obligaciones tiene un registro de derechos con unidad, cantidad, plazo y responsable.
- [ ] El uso procede de al menos dos fuentes, comparadas cada mes para los productos clave.
- [ ] La recuperación de puestos tiene una regla, un aviso y un camino fácil de vuelta.
- [ ] Existe un catálogo de herramientas aprobadas con una vía rápida para proponer una herramienta nueva.
- [ ] Los datos de gastos y de identidad se comprueban en busca de aplicaciones no autorizadas.
- [ ] Las revisiones de renovación empiezan al menos 90 días antes de la fecha de preaviso.
- [ ] Las SBOM se generan y se guardan para cada versión de los servicios de producción.
- [ ] Una política de licencias acordada con jurídica señala las excepciones en el pipeline.
- [ ] Las rutas de salida de proveedores están anotadas para los productos importantes.
- [ ] Los contactos de jurídica y de compras para las auditorías están nombrados y los equipos los conocen.

## Prompts de IA

**Construye una plantilla de registro de derechos.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Prepara una revisión de renovación.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Diseña una regla de recuperación de puestos.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Clasifica el resultado de un escaneo de licencias.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): úsala para encontrar la barrera de protección emparejada de una métrica de activos de software o de licencias.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): úsala para comprobar que una entrada de métrica de software indica su unidad de recuento, su vector de manipulación y su barrera de protección.

## Ideas clave

- Compara los derechos con el uso real, contado en la propia unidad de la licencia.
- Haz que el camino aprobado sea el rápido, para que los equipos no necesiten esconder lo que usan.
- Revisa el uso antes de las fechas de preaviso de renovación y recupera los puestos sin usar mediante una regla visible.
- Genera SBOM en el pipeline y señala las licencias frente a una política acordada con jurídica.
- Mantén implicadas a jurídica y a compras en la interpretación y en las auditorías.
- Da a los equipos visibilidad de su propio uso y costo.

## Referencias y lecturas complementarias

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
