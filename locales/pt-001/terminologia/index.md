# Guia de terminologia em português (Métricas de gestão de serviços)

As pessoas que traduziram combinaram as decisões a seguir. Os nomes próprios (ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps e os nomes de ferramentas e de produtos) mantêm a grafia original. As siglas consagradas (SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI) também são mantidas. Alguns termos técnicos de uso corrente (backlog, lead time, pull request, release, rollback, runbook, game day, showback, chargeback, toil entre parênteses na primeira menção) ficam em inglês. Os links da Wikipedia em inglês, os títulos das fontes, o código dos prompts de IA e os nomes de arquivo das skills ficam em inglês. O texto do link para a Wikipedia é traduzido para o português, enquanto os endereços e as entradas das fontes ficam em inglês. No texto em português usa-se a vírgula decimal e o ponto como separador de milhares nos números grandes, sem espaço antes do sinal "%" (por exemplo 99,9% e 12.000; os números de quatro algarismos se escrevem sem separador, como 5256). As aspas são retas (" "). O formato de data dos exemplos é AAAA-MM-DD e as unidades são métricas. Os leitores são tratados por "você". O formato das remissões é "(veja o tópico N.N, Título)". As afirmações sobre o ITIL 5 só repetem o que o proprietário (PeopleCert) verificou, e o que não está confirmado é sinalizado como tal. Termos de métodos específicos, como sprint, Scrum e Kanban, não são postos em destaque, e usam-se formulações gerais (por exemplo "um intervalo de duas semanas"). As métricas são sempre redigidas de modo a descrever equipes, serviços e sistemas, nunca indivíduos.

## Termos-chave

| Inglês | Português |
|---|---|
| service | serviço |
| value co-creation | cocriação de valor |
| incident | incidente |
| event (monitoring) | evento |
| problem | problema |
| change enablement | habilitação de mudanças |
| SLA / SLO / XLA | SLA / SLO / XLA (acordo de nível de serviço / objetivo de nível de serviço / acordo de nível de experiência) |
| error budget | orçamento de erro |
| burn rate | taxa de consumo |
| toil | trabalho repetitivo (toil) |
| backlog | backlog |
| retrospective | retrospectiva |
| value stream | fluxo de valor |
| guardrail | barreira de proteção |
| runbook | runbook |
| postmortem | análise pós-incidente |
| service desk | central de serviços |
| continual improvement | melhoria contínua |
| continuous delivery | entrega contínua |
| observability | observabilidade |
| orchestration | orquestração |
| auto-remediation | remediação automática |
| human in the loop | humano no circuito |
| AI agent | agente de IA |
| hallucination (AI) | alucinação |
| prompt | prompt |
| skill (AI) | skill |
| analytics | análise de dados |
| forecasting | previsão |
| metric | métrica |
| gaming vector | vetor de manipulação |
| Goodhart's law | lei de Goodhart |
| lead time | lead time |
| cycle time | tempo de ciclo |
| work in process (WIP) | trabalho em andamento (WIP) |
| throughput | vazão |
| queue | fila |
| Little's law | lei de Little |
| control chart | gráfico de controle |
| change failure rate | taxa de falha de mudanças |
| mean time to restore (MTTR) | tempo médio de restauração (MTTR) |
| SLI | indicador de nível de serviço (SLI) |
| flow efficiency | eficiência de fluxo |
| unit economics | economia unitária |
| total cost of ownership (TCO) | custo total de propriedade (TCO) |
| well-being | bem-estar |
| sustainable pace | ritmo sustentável |
| psychological safety | segurança psicológica |
| percentile | percentil |
| median | mediana |
| workaround | solução de contorno |
| known error | erro conhecido |
| shift (on-call) | turno |
| page (on-call) | acionamento |
| rotation (on-call) | rodízio |
| roster | escala de plantão |
| on-call | plantão |
| knowledge base | base de conhecimento |
| pull request | pull request |
| deployment | implantação |
| release | release |
| feature flag | feature flag (sinalizador de funcionalidade) |
| rework | retrabalho |
| escaped defects | defeitos escapados |
| rollback | rollback |
| pulse survey | pesquisa de pulso |
| showback / chargeback | showback / chargeback |
| cost driver | direcionador de custo |
| lineage | linhagem |
| automation bias | viés de automação |
| post-run check | verificação pós-execução |
| assurance | garantia |
| game day | game day |
| tabletop exercise | exercício de mesa |
| watermelon effect | efeito melancia |
| charter (metrics) | estatuto de métricas |
| owner | responsável |
| baseline | linha de base |
| bypass (pipeline) | contorno |
| Initiate / Develop / Standardize / Manage / Orchestrate | Iniciar / Desenvolver / Padronizar / Gerenciar / Orquestrar |

## Partes do livro

| Parte | Título |
|---|---|
| 1 | Fundamentos da medição |
| 2 | Métricas de fluxo e entrega contínua |
| 3 | Métricas de central de serviços, incidentes e requisições |
| 4 | Métricas de problemas, mudanças e releases |
| 5 | Métricas de nível de serviço, disponibilidade e confiabilidade |
| 6 | Métricas de cliente e experiência |
| 7 | Métricas de ativos, configuração e finanças |
| 8 | Métricas de segurança, risco, conformidade e fornecedores |
| 9 | Métricas de pessoas, equipes e melhoria |
| 10 | Métricas para IA, automação e análise |
| 11 | Construir um programa de métricas |
| 12 | Apêndices |

## Títulos dos tópicos

| Número | Título |
|---|---|
| 1.0 | Introdução à Parte 1: Fundamentos da medição |
| 1.1 | Por que medir a gestão de serviços |
| 1.2 | A lei de Goodhart e a psicologia das métricas |
| 1.3 | Resultados acima da produção: escolher o que medir |
| 1.4 | Governança e responsabilidade das métricas |
| 1.5 | Fontes de dados e instrumentação |
| 1.6 | Letramento estatístico para métricas de serviço |
| 1.7 | Estruturas de medição |
| 1.8 | Medição do ITIL 5 e resultados de valor |
| 2.0 | Introdução à Parte 2: Métricas de fluxo e entrega contínua |
| 2.1 | Medidas de fluxo |
| 2.2 | Lead time, tempo de ciclo e eficiência de fluxo |
| 2.3 | Trabalho em andamento e teoria das filas |
| 2.4 | Métricas de fluxo de valor |
| 2.5 | Métricas de previsão e planejamento de entregas |
| 2.6 | Métricas de backlog e refinamento |
| 2.7 | Métricas de pull requests e revisão de código |
| 2.8 | Métricas DORA |
| 2.9 | Trabalho operacional e trabalho não planejado |
| 3.0 | Introdução à Parte 3: Métricas de central de serviços, incidentes e requisições |
| 3.1 | Métricas da central de serviços |
| 3.2 | Volume e prioridade de incidentes |
| 3.3 | Tempo de resposta e de resolução de incidentes |
| 3.4 | Métricas de incidentes graves |
| 3.5 | Métricas de atendimento de requisições de serviço |
| 3.6 | Métricas de gestão do conhecimento |
| 3.7 | Métricas de autoatendimento e automação |
| 4.0 | Introdução à Parte 4: Métricas de problemas, mudanças e releases |
| 4.1 | Métricas de gestão de problemas |
| 4.2 | Métricas de análises pós-incidente e aprendizado |
| 4.3 | Métricas de habilitação de mudanças |
| 4.4 | Falhas de mudança e retrabalho |
| 4.5 | Métricas de releases e implantação |
| 4.6 | Dívida técnica e erros conhecidos |
| 5.0 | Introdução à Parte 5: Métricas de nível de serviço, disponibilidade e confiabilidade |
| 5.1 | Métricas de SLA, OLA e XLA |
| 5.2 | SLIs, SLOs e orçamentos de erro |
| 5.3 | Métricas de disponibilidade |
| 5.4 | Métricas de capacidade e desempenho |
| 5.5 | Métricas de monitoramento e qualidade de alertas |
| 5.6 | Métricas de continuidade de serviço |
| 5.7 | Métricas de trabalho repetitivo e plantão |
| 6.0 | Introdução à Parte 6: Métricas de cliente e experiência |
| 6.1 | Métricas de satisfação do cliente |
| 6.2 | Acordos de nível de experiência |
| 6.3 | Métricas de adoção de serviços e catálogo |
| 6.4 | Experiência de usuários e colaboradores |
| 6.5 | Realização de valor e resultados de negócio |
| 7.0 | Introdução à Parte 7: Métricas de ativos, configuração e finanças |
| 7.1 | Métricas de gestão de ativos de TI |
| 7.2 | Métricas de ativos de software e licenças |
| 7.3 | Métricas do ciclo de vida de ativos de hardware |
| 7.4 | Métricas de qualidade de configuração e CMDB |
| 7.5 | Custo de serviço e economia unitária |
| 7.6 | Métricas de FinOps e custos de nuvem |
| 7.7 | Retorno do investimento e business case |
| 8.0 | Introdução à Parte 8: Métricas de segurança, risco, conformidade e fornecedores |
| 8.1 | Métricas de incidentes de segurança e vulnerabilidades |
| 8.2 | Métricas de riscos e controles |
| 8.3 | Métricas de conformidade e auditoria |
| 8.4 | Métricas de fornecedores e contratos |
| 8.5 | Relatórios regulatórios e governamentais |
| 9.0 | Introdução à Parte 9: Métricas de pessoas, equipes e melhoria |
| 9.1 | Saúde da equipe e experiência do desenvolvedor |
| 9.2 | Métricas de satisfação e bem-estar |
| 9.3 | Métricas de colaboração e transferências de trabalho |
| 9.4 | Métricas de habilidades e aprendizado |
| 9.5 | Métricas de melhoria contínua |
| 9.6 | Métricas de mudança organizacional e adoção |
| 10.0 | Introdução à Parte 10: Métricas para IA, automação e análise |
| 10.1 | A IA na medição da gestão de serviços |
| 10.2 | Medir o trabalho assistido por IA |
| 10.3 | Métricas de agentes de IA e chatbots |
| 10.4 | Inflação de métricas e diluição da qualidade |
| 10.5 | Métricas de governança e risco de IA |
| 10.6 | Métricas de automação e orquestração |
| 10.7 | Métricas de pipelines e mudança automatizada |
| 10.8 | Métricas de análise e qualidade de dados |
| 10.9 | Métricas de previsão e análise preditiva |
| 10.10 | Métricas de observabilidade e telemetria |
| 11.0 | Introdução à Parte 11: Construir um programa de métricas |
| 11.1 | Projetar um painel de métricas de serviço |
| 11.2 | Panorama de ferramentas |
| 11.3 | Implantar métricas sem criar medo |
| 11.4 | Modelo de maturidade para programas de métricas |
| 11.5 | Um roteiro de adoção incremental |
| 12.0 | Apêndices |
| 12.1 | Glossário |
| 12.2 | Referência de definições e fórmulas de métricas |
| 12.3 | Listas de verificação |
| 12.4 | Modelos |
| 12.5 | Autoavaliação de maturidade |
| 12.6 | Referências e leituras complementares |
| 12.7 | Índice |
