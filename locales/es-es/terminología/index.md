# Guía de terminología en español (Métricas de gestión de servicios)

Quienes tradujeron acordaron las decisiones siguientes. Los nombres propios (ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps y los nombres de herramientas y productos) conservan la grafía original. Las siglas consolidadas (SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI) también se mantienen. Algunos términos técnicos de uso corriente (runbook, DORA, shelfware, showback) se conservan en inglés. Los enlaces de Wikipedia en inglés, los títulos de las fuentes, el código de los prompts de IA y los nombres de archivo de las skills siguen en inglés. El texto del enlace a Wikipedia se traduce al español, mientras que las direcciones y las entradas de las fuentes siguen en inglés. En el texto en español se usa la coma decimal y el espacio como separador de millares en las cifras grandes (por ejemplo 99,9 por ciento y 12 000; los números de cuatro cifras se escriben sin separador, como 5256). El formato de fecha en los ejemplos es AAAA-MM-DD y las unidades son métricas. El trato a quien lee es de tú en singular y de ustedes en plural (sin formas de vosotros). El formato de las remisiones es «(véase el tema N.N, Título)». Las afirmaciones sobre ITIL 5 recogen solo lo que ha verificado el propietario (PeopleCert), y lo que no está confirmado se marca como tal. Los términos de métodos concretos como sprint, Scrum y Kanban no se enfatizan y se usan formulaciones generales (por ejemplo «un intervalo de dos semanas»). Las métricas se redactan siempre de modo que describan equipos, servicios y sistemas, nunca individuos.

## Términos clave

| Inglés | Español |
|---|---|
| service | servicio |
| value co-creation | cocreación de valor |
| incident | incidente |
| event (monitoring) | evento |
| problem | problema |
| change enablement | habilitación de cambios |
| SLA / SLO / XLA | SLA / SLO / XLA (acuerdo de nivel de servicio / objetivo de nivel de servicio / acuerdo de nivel de experiencia) |
| error budget | presupuesto de errores |
| burn rate | tasa de consumo |
| toil | trabajo repetitivo (toil) |
| backlog | lista de pendientes |
| retrospective | retrospectiva |
| value stream | flujo de valor |
| guardrail | barrera de protección |
| runbook | runbook |
| postmortem | análisis posterior |
| service desk | centro de servicios |
| continual improvement | mejora continua |
| continuous delivery | entrega continua |
| observability | observabilidad |
| orchestration | orquestación |
| auto-remediation | remediación automática |
| human in the loop | humano en el bucle |
| AI agent | agente de IA |
| hallucination (AI) | alucinación |
| prompt | prompt |
| skill (AI) | skill |
| analytics | analítica |
| forecasting | previsión |
| metric | métrica |
| gaming vector | vector de manipulación |
| Goodhart's law | ley de Goodhart |
| lead time | plazo de entrega |
| cycle time | tiempo de ciclo |
| work in process (WIP) | trabajo en curso (WIP) |
| throughput | caudal |
| queue | cola |
| Little's law | ley de Little |
| control chart | gráfico de control |
| change failure rate | tasa de fallos de cambio |
| mean time to restore (MTTR) | tiempo medio de restablecimiento (MTTR) |
| SLI | indicador de nivel de servicio (SLI) |
| flow efficiency | eficiencia del flujo |
| unit economics | economía unitaria |
| total cost of ownership (TCO) | costo total de propiedad (TCO) |
| well-being | bienestar |
| sustainable pace | ritmo sostenible |
| percentile | percentil |
| median | mediana |
| workaround | solución provisional |
| known error | error conocido |
| shift (on-call) | turno |
| page (on-call) | aviso |
| rotation (on-call) | rotación |
| roster | calendario de guardias |
| on-call | guardia |
| knowledge base | base de conocimiento |
| pull request | solicitud de incorporación |
| deployment | despliegue |
| release | publicación / versión |
| feature flag | indicador de función |
| showback / chargeback | showback / repercusión de costos |
| assurance | garantía |
| game day | game day |
| tabletop exercise | ejercicio de simulación en mesa |
| watermelon effect | efecto sandía |
| Initiate / Develop / Standardize / Manage / Orchestrate | Iniciar / Desarrollar / Estandarizar / Gestionar / Orquestar |

## Partes del libro

| Parte | Título |
|---|---|
| 1 | Fundamentos de la medición |
| 2 | Métricas de flujo y entrega continua |
| 3 | Métricas del centro de servicios, incidentes y solicitudes |
| 4 | Métricas de problemas, cambios y versiones |
| 5 | Métricas de niveles de servicio, disponibilidad y fiabilidad |
| 6 | Métricas de cliente y experiencia |
| 7 | Métricas de activos, configuración y finanzas |
| 8 | Métricas de seguridad, riesgo, cumplimiento y proveedores |
| 9 | Métricas de personas, equipos y mejora |
| 10 | Métricas para IA, automatización y analítica |
| 11 | Construir un programa de métricas |
| 12 | Apéndices |

## Títulos de los temas

| Número | Título |
|---|---|
| 1.0 | Introducción a la Parte 1: Fundamentos de la medición |
| 1.1 | Por qué medir la gestión de servicios |
| 1.2 | Ley de Goodhart y psicología de las métricas |
| 1.3 | Resultados sobre producción: elegir qué medir |
| 1.4 | Gobernanza y propiedad de las métricas |
| 1.5 | Fuentes de datos e instrumentación |
| 1.6 | Alfabetización estadística para métricas de servicio |
| 1.7 | Marcos de medición |
| 1.8 | Medición de ITIL 5 y resultados de valor |
| 2.0 | Introducción a la Parte 2: Métricas de flujo y entrega continua |
| 2.1 | Medidas de flujo |
| 2.2 | Plazo de entrega, tiempo de ciclo y eficiencia del flujo |
| 2.3 | Trabajo en curso y teoría de colas |
| 2.4 | Métricas del flujo de valor |
| 2.5 | Métricas de pronóstico y planificación de entregas |
| 2.6 | Métricas de la lista de pendientes y su refinamiento |
| 2.7 | Métricas de solicitudes de incorporación y revisión de código |
| 2.8 | Métricas DORA |
| 2.9 | Trabajo operativo y trabajo no planificado |
| 3.0 | Introducción a la Parte 3: Métricas del centro de servicios, incidentes y solicitudes |
| 3.1 | Métricas del centro de servicios |
| 3.2 | Volumen y prioridad de incidentes |
| 3.3 | Tiempo de respuesta y resolución de incidentes |
| 3.4 | Métricas de incidentes graves |
| 3.5 | Métricas de cumplimiento de solicitudes de servicio |
| 3.6 | Métricas de gestión del conocimiento |
| 3.7 | Métricas de autoservicio y automatización |
| 4.0 | Introducción a la Parte 4: Métricas de problemas, cambios y versiones |
| 4.1 | Métricas de gestión de problemas |
| 4.2 | Métricas de análisis posteriores y aprendizaje |
| 4.3 | Métricas de habilitación de cambios |
| 4.4 | Fallos de cambio y retrabajo |
| 4.5 | Métricas de versiones y despliegues |
| 4.6 | Deuda técnica y errores conocidos |
| 5.0 | Introducción a la Parte 5: Métricas de niveles de servicio, disponibilidad y fiabilidad |
| 5.1 | Métricas de SLA, OLA y XLA |
| 5.2 | SLI, SLO y presupuestos de errores |
| 5.3 | Métricas de disponibilidad |
| 5.4 | Métricas de capacidad y rendimiento |
| 5.5 | Métricas de monitorización y calidad de las alertas |
| 5.6 | Métricas de continuidad del servicio |
| 5.7 | Métricas de trabajo repetitivo y guardias |
| 6.0 | Introducción a la Parte 6: Métricas de cliente y experiencia |
| 6.1 | Métricas de satisfacción del cliente |
| 6.2 | Acuerdos de nivel de experiencia |
| 6.3 | Métricas de adopción y catálogo de servicios |
| 6.4 | Experiencia de usuarios y empleados |
| 6.5 | Realización de valor y resultados de negocio |
| 7.0 | Introducción a la Parte 7: Métricas de activos, configuración y finanzas |
| 7.1 | Métricas de gestión de activos de TI |
| 7.2 | Métricas de activos de software y licencias |
| 7.3 | Métricas del ciclo de vida de activos de hardware |
| 7.4 | Métricas de calidad de la configuración y la CMDB |
| 7.5 | Costo del servicio y economía unitaria |
| 7.6 | Métricas de FinOps y costos en la nube |
| 7.7 | Retorno de la inversión y caso de negocio |
| 8.0 | Introducción a la Parte 8: Métricas de seguridad, riesgo, cumplimiento y proveedores |
| 8.1 | Métricas de incidentes de seguridad y vulnerabilidades |
| 8.2 | Métricas de riesgos y controles |
| 8.3 | Métricas de cumplimiento y auditoría |
| 8.4 | Métricas de proveedores y contratos |
| 8.5 | Informes regulatorios y gubernamentales |
| 9.0 | Introducción a la Parte 9: Métricas de personas, equipos y mejora |
| 9.1 | Salud del equipo y experiencia de desarrollo |
| 9.2 | Métricas de satisfacción y bienestar |
| 9.3 | Métricas de colaboración y traspasos |
| 9.4 | Métricas de habilidades y aprendizaje |
| 9.5 | Métricas de mejora continua |
| 9.6 | Métricas de cambio organizacional y adopción |
| 10.0 | Introducción a la Parte 10: Métricas para IA, automatización y analítica |
| 10.1 | La IA en la medición de la gestión de servicios |
| 10.2 | Medición del trabajo asistido por IA |
| 10.3 | Métricas de agentes de IA y chatbots |
| 10.4 | Inflación de métricas y dilución de la calidad |
| 10.5 | Métricas de gobernanza y riesgo de la IA |
| 10.6 | Métricas de automatización y orquestación |
| 10.7 | Métricas de pipelines y cambio automatizado |
| 10.8 | Métricas de analítica y calidad de datos |
| 10.9 | Métricas de previsión y analítica predictiva |
| 10.10 | Métricas de observabilidad y telemetría |
| 11.0 | Introducción a la Parte 11: Construir un programa de métricas |
| 11.1 | Diseño de un panel de métricas de servicio |
| 11.2 | Panorama de herramientas |
| 11.3 | Implantar métricas sin sembrar miedo |
| 11.4 | Modelo de madurez para programas de métricas |
| 11.5 | Una hoja de ruta de adopción incremental |
| 12.0 | Apéndices |
| 12.1 | Glosario |
| 12.2 | Referencia de definiciones y fórmulas de métricas |
| 12.3 | Listas de verificación |
| 12.4 | Plantillas |
| 12.5 | Autoevaluación de madurez |
| 12.6 | Referencias y lecturas complementarias |
| 12.7 | Índice |
