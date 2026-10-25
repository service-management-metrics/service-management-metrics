# Métricas de observabilidade e telemetria

**Observabilidade é a capacidade de fazer perguntas novas a um serviço em operação e obter respostas dos próprios sinais dele; por isso meça quanto do serviço você consegue ver, quão bons são os sinais, com que rapidez levam ao entendimento e quanto custa a telemetria, em vez de contar painéis ou volume de dados.**

## Visão geral e motivação

A [observabilidade](https://en.wikipedia.org/wiki/Observability_(software)) é uma propriedade de um sistema: quão bem seu estado interno pode ser compreendido a partir das saídas que ele produz. Na prática, essas saídas são chamadas de [telemetria](https://en.wikipedia.org/wiki/Telemetry) e costumam ser agrupadas em três tipos. Os **logs** são registros de eventos discretos. As **métricas** são medições numéricas ao longo do tempo, como a taxa de requisições ou a taxa de erros. Os **traces** seguem uma única requisição pelas partes de um sistema distribuído. Muitas equipes acrescentam perfis (profiles), eventos do dispositivo do usuário e eventos de negócio.

O monitoramento faz perguntas conhecidas, como "a taxa de erros está acima de um limite?", e alerta quando a resposta é sim. A observabilidade visa deixar uma equipe fazer perguntas que não planejou, como "por que as requisições desta região estão lentas para este segmento de clientes?". Ambos são necessários. O monitoramento é coberto em tópicos anteriores (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas). Este tópico cobre a qualidade dos próprios sinais e a prática de entender sistemas a partir deles.

A telemetria tem custos e riscos. Coletar tudo é caro em armazenamento e dinheiro e pode capturar dados pessoais ou confidenciais. Coletar de menos deixa uma equipe cega durante um incidente. A telemetria também é dado no sentido do tópico anterior (veja o tópico 10.8, Métricas de análise e qualidade de dados); assim tem questões de completude, oportunidade e linhagem. E, como as ferramentas de IA leem a telemetria para resumir incidentes e sugerir causas, a qualidade dos sinais decide se o resumo está certo.

Termos usados aqui. Um **sinal** é um fluxo de telemetria, como um log, uma métrica ou um trace. A **instrumentação** é o código que produz os sinais. A **cardinalidade** é o número de valores distintos de um rótulo em uma métrica, e a alta cardinalidade aumenta o custo. Um **indicador de nível de serviço (SLI)** mede um aspecto do serviço como os usuários o vivenciam (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). A **amostragem** guarda só uma parcela dos dados, o que economiza custo e perde detalhe. A **retenção** é por quanto tempo os dados são guardados. A **correlação** significa ligar sinais que descrevem a mesma requisição ou evento, por meio de identificadores compartilhados.

## Princípios-chave

- **Instrumente para perguntas, e não para volume.** Escolha sinais que respondam a perguntas sobre a experiência do usuário e o comportamento do sistema.
- **Meça o que você consegue ver e o que não consegue.** A cobertura de serviços e jornadas mostra os pontos cegos.
- **Os sinais precisam estar ligados.** Identificadores que conectam um log, um trace e uma métrica tornam rápido o entendimento.
- **A telemetria é um custo e um risco.** Dê-lhe orçamento e mantenha fora dados pessoais e confidenciais, a menos que haja uma razão e uma regra.
- **A observabilidade serve às pessoas.** Meça o tempo até entender e a experiência das pessoas de plantão.
- **Padrões abertos reduzem o aprisionamento.** Prefira formatos comuns de instrumentação onde couberem e confira as especificações atuais.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de instrumentação | Proporção dos serviços e jornadas críticas de usuário que emitem os sinais centrais combinados | serviços ou jornadas com logs, métricas e traces que atendem ao padrão combinado / serviços ou jornadas no catálogo de serviços | porcentagem | Catálogo de serviços e inventário da plataforma de telemetria | Monitoramento e gestão de eventos; gestão de configuração de serviços | Definição de pronto para novos serviços | Trimestral |
| Completude dos traces | Proporção das requisições amostradas com um trace ininterrupto da entrada até a última dependência | requisições cujo trace cobre todos os saltos esperados / requisições de uma amostra conferida | porcentagem | Plataforma de rastreamento e uma verificação por amostragem | Monitoramento e gestão de eventos | Teste de observabilidade em uma funcionalidade | Mensal |
| Taxa de correlação de sinais | Proporção dos incidentes em que logs, métricas e traces puderam ser unidos por um identificador | incidentes com uma junção funcional na revisão da linha do tempo / incidentes revistos | porcentagem | Revisões de incidentes e plataforma de rastreamento | Gestão de incidentes; gestão de problemas | Ações de retrospectiva | Trimestral |
| Tempo até entender | Tempo desde a detecção até uma explicação funcional registrada da causa | mediana e 85º percentil de (momento em que a primeira causa funcional é registrada menos momento em que o incidente foi detectado) para incidentes com causa registrada | minutos | Linha do tempo do incidente e notas de revisão | Gestão de incidentes | Revisão sem culpados | Trimestral |
| Custo de telemetria por serviço | Gasto com telemetria atribuído a um serviço, por unidade de uso do serviço | custo de telemetria alocado ao serviço / uma unidade de uso declarada, como 1.000 requisições | moeda por unidade | Faturamento e dados de uso da telemetria | Gestão financeira | Custo como insumo de projeto | Mensal |
| Dados sensíveis na telemetria | Número de registros confirmados que contêm dados que não deviam estar ali | casos confirmados achados por varredura ou revisão no período | contagem | Varreduras e revisões da telemetria | Gestão de segurança da informação | Definição de pronto; revisão de privacidade | Mensal |
| Incidentes em pontos cegos | Incidentes relatados primeiro por usuários em que a telemetria não mostrou nenhum sinal | incidentes relatados primeiro por usuários sem alerta ou sinal relacionado / incidentes no período | porcentagem | Registros de incidentes e notas de revisão | Gestão de incidentes; monitoramento | Ações de retrospectiva | Trimestral |

A cobertura de instrumentação depende de um padrão central combinado, como taxa de requisições, taxa de erros, latência e um identificador de trace, declarado no registro de métricas. O tempo até entender conta apenas os incidentes em que uma causa foi registrada; assim os incidentes sem causa conhecida são relatados à parte.

## Recomendações

### Decida o que ver

**1. Parta das jornadas de usuário e dos níveis de serviço.** Liste as jornadas que importam e os indicadores que mostram se os usuários têm sucesso. Instrumente-as primeiro, já que ligam a telemetria aos resultados (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro).

**2. Combine um padrão central.** Defina os sinais mínimos que todo serviço emite e as convenções de nomes e de identificadores. Ponha o padrão na definição de pronto para novos serviços.

**3. Mapeie a cobertura com honestidade.** Compare o catálogo de serviços com os serviços que emitem os sinais centrais. Liste as lacunas e seus responsáveis e ataque primeiro as de maior impacto sobre o usuário.

### Torne úteis os sinais

**4. Ligue os sinais com identificadores compartilhados.** Passe um identificador de requisição ou de trace por logs, métricas e traces para que uma pessoa possa ir de uma requisição lenta às linhas exatas do log. Teste isso em um simulacro.

**5. Teste a instrumentação como código.** Um trace que quebra em uma fila, ou um log com o fuso horário errado, desperdiça um incidente. Confira a completude com requisições amostradas e corrija as quebras.

**6. Controle deliberadamente a cardinalidade e a amostragem.** Os rótulos de alta cardinalidade podem criar grandes custos, e a amostragem pode descartar o evento raro de que você precisa. Decida onde amostrar, registre a taxa e guarde os dados completos dos erros e das requisições lentas onde for viável.

**7. Mantenha fora os dados sensíveis.** Decida o que não deve aparecer em logs e traces, como dados pessoais, credenciais e dados de saúde ou de pagamento. Faça varreduras e corrija a fonte. Confira as obrigações com seu assessor jurídico, já que este livro não dá aconselhamento jurídico.

### Meça o entendimento

**8. Meça o tempo até entender, e não só o tempo até corrigir.** O tempo desde a detecção até uma explicação funcional mostra quão bem os sinais apoiam as pessoas. Reveja os casos mais longos para ver que sinal faltou.

**9. Conte os pontos cegos.** Os incidentes que os usuários acharam primeiro são a evidência mais clara de uma lacuna. Para cada um, pergunte que sinal o teria mostrado e acrescente-o.

**10. Reveja painéis e alertas quanto ao uso.** Aposente os painéis que ninguém abre e os alertas que nunca levam a ação (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas). Um conjunto menor em que as pessoas confiam vale mais que uma parede de gráficos.

### Gerencie o custo e os padrões

**11. Dê orçamento e atribua o custo da telemetria.** Aloque o custo aos serviços e observe a tendência. Defina a retenção pelo valor: guarde dados detalhados por pouco tempo, resumos por mais tempo e apague o que não tem uso.

**12. Prefira padrões abertos onde couberem.** Formatos comuns de instrumentação e de dados, como os mantidos pelo projeto OpenTelemetry, facilitam trocar de ferramentas. Confira a especificação atual e o suporte de suas ferramentas antes de se comprometer, já que padrões e produtos mudam.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de instrumentação | Acrescentar um sinal mínimo a todo serviço para passar no padrão; excluir do catálogo os serviços difíceis | Completude dos traces e incidentes em pontos cegos; rever o catálogo quanto a omissões |
| Completude dos traces | Amostrar só requisições simples; contar traces parciais como completos | Definir a amostra de verificação por tipo de requisição; conferir a cobertura de dependências |
| Taxa de correlação de sinais | Rever só os incidentes que correram bem; contar uma junção que existe no papel | Rever uma amostra aleatória de incidentes; rodar um simulacro de junção |
| Tempo até entender | Registrar uma causa cedo e de modo frouxo; deixar a causa em branco nos casos difíceis | Rever a qualidade dos registros de causa; relatar à parte os incidentes sem causa |
| Custo de telemetria por serviço | Descartar sinais para cortar custo; deslocar o custo para outra conta | Incidentes em pontos cegos e tempo até entender; reconciliar o gasto total |
| Dados sensíveis na telemetria | Varrer de modo estreito demais; não relatar achados | Cobertura da varredura e revisão independente; acompanhar o tempo até remover |
| Incidentes em pontos cegos | Contar um incidente como detectado quando um alerta disparou depois de os usuários relatarem; definir o sinal de modo amplo | Comparar os registros de data e hora do primeiro sinal e do primeiro relato do usuário; amostrar revisões |

Uma leitura saudável é uma cobertura que sobe junto com o número de traces e junções completos, uma parcela em queda de incidentes achados primeiro por usuários, um tempo até entender que cai sem cortar sinais, um custo de telemetria compreendido e atribuído e achados de dados sensíveis corrigidos depressa.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Coletar tudo, guardar por muito tempo | Máxima capacidade de investigar | Alto custo e risco; difícil de pesquisar |
| Amostrar e guardar por pouco tempo | Menor custo | Pode perder eventos raros e incidentes antigos |
| Instrumentação padrão entre serviços | Consistente; entendimento mais rápido | Esforço de adoção; pode não servir a todo serviço |
| Instrumentação escolhida pela equipe | Serve às necessidades locais | Inconsistente; difícil de unir sinais |
| Resumos de telemetria por IA | Primeira visão mais rápida | Podem estar errados; dependem da qualidade dos sinais |

A conclusão pragmática é guardar dados ricos dos erros e das requisições lentas, amostrar o rotineiro e definir a retenção pelo valor. Um conjunto modesto, consistente e ligado de sinais vale mais que uma grande pilha sem ligação.

## Perguntas para discutir com sua equipe

**1. No nosso último incidente, o que queríamos saber e não conseguimos descobrir?**
Isso revela o sinal ausente. Peçam às pessoas que lembrem a pergunta e onde procuraram. Esperem respostas como "quais clientes foram afetados" ou "o que mudou". Em seguida, decidam quem acrescenta o sinal e como testá-lo.

**2. Para a nossa jornada de usuário mais importante, como saberíamos que ela estava falhando?**
Percorram a jornada passo a passo. Perguntem que sinal mostra o sucesso em cada passo e com que rapidez. Procurem passos sem sinal. Em seguida, acrescentem um indicador para o passo mais fraco.

**3. Conseguimos seguir uma requisição do clique do usuário até o banco de dados e de volta?**
Tentem ao vivo. Percebam onde o trace quebra, como numa fila ou numa chamada de terceiro. Perguntem quanto tempo leva para achar as linhas de log correspondentes. Em seguida, corrijam a maior quebra.

**4. Quanto gastamos com telemetria, e o que recebemos por isso?**
Muitas equipes não sabem o custo por serviço. Perguntem que sinais foram usados no último trimestre. Discutam o que poderia ser amostrado ou apagado sem dano. Em seguida, escolham um sinal para rever.

**5. Que informação sensível pode estar hoje em nossos logs e traces?**
Procurem exemplos juntos. Casos comuns são endereços de e-mail, tokens e campos de texto livre. Perguntem como chegou lá e quem pode ler. Em seguida, combinem uma regra e uma varredura.

**6. Como usamos ferramentas de IA sobre a nossa telemetria, e quem confere o que elas dizem?**
Escutem por resumos de incidentes não conferidos. Perguntem que dados são enviados a uma ferramenta e sob que termos. Discutam como uma pessoa verifica uma causa sugerida. Em seguida, escrevam uma regra curta.

## Quatro perspectivas

### Equipes de produto e entrega

Vocês decidem o que um serviço emite. Acrescentem instrumentação enquanto constroem, incluam o identificador que liga os sinais e testem-no como parte do trabalho. Tratem a falta de observabilidade como um defeito, já que o próximo incidente a pagará.

### Equipes de serviço e operações

Vocês usam a telemetria sob pressão. Digam à equipe quais sinais ajudaram e quais faltaram e mantenham os alertas ligados ao impacto no usuário. Acompanhem o tempo até entender e os incidentes em pontos cegos e levem-nos à equipe de produto.

### Liderança e governança

Financiem a observabilidade como parte do serviço, com orçamentos para a telemetria e para corrigir lacunas. Peçam a cobertura, os incidentes em pontos cegos e as tendências de custo, e não a contagem de painéis. Definam regras para os dados sensíveis e para o uso de ferramentas de IA sobre a telemetria.

### Clientes e usuários

Vocês muitas vezes são os primeiros a notar um problema; por isso perguntem como relatá-lo e com que rapidez será ligado aos sinais do serviço. Os relatos de vocês reduzem os pontos cegos, e vocês devem ser informados do que foi aprendido. Perguntem que telemetria é coletada sobre vocês e por quê.

## Na prática: um exemplo de gestão de serviços

Uma varejista on-line de porte médio opera um serviço de checkout composto de oito serviços menores. Os números deste exemplo são ilustrativos. Os clientes relatam falhas ocasionais no pagamento, mas os painéis mostram taxas de erro saudáveis e latência normal.

A equipe mede. A cobertura de instrumentação é de 6 de 8 serviços que atendem ao padrão central. Uma verificação de 50 requisições de checkout amostradas mostra uma completude dos traces de 62%, porque o trace quebra em uma fila de mensagens e em uma chamada de pagamento de terceiro. Nos últimos seis incidentes, a taxa de correlação de sinais é de dois em seis, já que os logs usam um identificador de requisição diferente do dos traces. Os incidentes em pontos cegos são três em seis.

A equipe passa um único identificador de requisição pela fila e pelos logs, acrescenta um span de trace em volta da chamada de pagamento e instrumenta os dois serviços que faltavam. Após um mês, a completude dos traces chega a cerca de 90% na verificação por amostragem, e o incidente seguinte tem uma explicação funcional em 35 minutos, contra várias horas antes. Faz também uma varredura dos logs e acha endereços de e-mail de clientes em uma mensagem de erro, que remove da fonte, e os achados de dados sensíveis caem para zero no mês seguinte.

Surge um risco de manipulação. Um gerente pede para elevar a cobertura de instrumentação marcando os dois serviços restantes como "fora do escopo". A equipe recusa, porque a contagem de incidentes em pontos cegos continuaria alta, e registra a lacuna com um responsável. O que continua difícil: o custo de telemetria por requisição de checkout subiu, e a equipe ainda não decidiu por quanto tempo guardar os traces. O plano do trimestre seguinte é amostrar os traces rotineiros e guardar o detalhe completo dos erros.

## Ágil, IA, automação e análise

### Ágil

Inclua a observabilidade na definição de pronto, para que cada incremento de um serviço possa ser compreendido em produção. Uma boa prática é rever os sinais ausentes do último incidente na conversa regular de melhoria e acrescentá-los como itens de backlog. O cuidado é que o trabalho de observabilidade muitas vezes é adiado em favor de funcionalidades; por isso torne-o visível e proteja o tempo para ele.

### IA

A IA pode resumir a telemetria, correlacionar sinais e sugerir causas, e os próprios recursos de IA precisam de telemetria, como entradas, saídas, latência, custo e feedback dos usuários. Pareie as causas sugeridas por IA com uma conferência humana e relate com que frequência estavam certas e monitore os recursos de IA quanto à qualidade além da disponibilidade (veja o tópico 10.1, A IA na medição da gestão de serviços). O cuidado é que os prompts e respostas nos logs podem conter dados pessoais; por isso decida o que registrar antes de começar.

### Automação

Automatize a coleta, a correlação e o alerta e automatize as verificações de cobertura e de dados sensíveis. Meça o próprio pipeline de telemetria pelos dados descartados e pelo atraso, já que um pipeline quebrado parece um sistema saudável. O cuidado é que a remediação automática que age sobre um sinal pode mascarar a causa; por isso registre o que ela fez.

### Análise

Use a telemetria para responder a perguntas sobre a experiência do usuário e o comportamento do sistema, com SLIs ligados a resultados. A decisão informada é onde investir em sinais e onde reduzir custo. O cuidado é que volume de dados não é percepção, e as métricas agregadas podem esconder os usuários prejudicados; por isso confira distribuições e segmentos e mostre o número de eventos por trás de cada cifra (veja o tópico 10.8, Métricas de análise e qualidade de dados).

## Olhar setorial

**Startup.** Comece com poucos sinais na principal jornada de usuário e um identificador de trace nos logs. Evite comprar uma grande plataforma antes de as perguntas estarem claras e observe o custo à medida que o uso cresce.

**Pequena empresa.** Os serviços hospedados muitas vezes oferecem telemetria limitada. Pergunte aos fornecedores o que você pode ver e mantenha uma verificação externa simples da principal jornada. Evite coletar dados pessoais nos logs.

**Grande empresa.** Muitas equipes e ferramentas precisam de um padrão compartilhado, identificadores compartilhados e atribuição central de custos. Permita que as equipes acrescentem sinais dentro do padrão e gerencie centralmente a retenção e o acesso.

**Governo e setor público.** As regras sobre localização de dados, retenção e acesso moldam o que você pode coletar e onde guardar. Documente os fluxos de dados de telemetria e confira as obrigações com assessores jurídicos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o trabalho de instrumentação, as taxas de plataforma ou serviço, o armazenamento pelo período de retenção e o tempo do pessoal para manter padrões e painéis. O custo de telemetria pode crescer depressa com o volume e a cardinalidade; por isso dê-lhe orçamento e atribua-o.

O retorno é um entendimento mais rápido nos incidentes, menos incidentes achados primeiro pelos usuários e melhores decisões sobre onde melhorar. Esses benefícios são reais e difíceis de precificar; por isso evite inventar uma cifra. Compare seu próprio tempo até entender e a parcela de incidentes em pontos cegos antes e depois do trabalho e declare as premissas como faixas (veja o tópico 7.7, Retorno do investimento e business case). O lado do risco é o custo de um vazamento de dados pela telemetria e o custo de uma telemetria que nunca é usada.

## Antipadrões e armadilhas

- **Contar painéis.** Mais gráficos não significam mais entendimento. Meça a cobertura, as junções e o tempo até entender.
- **Coletar tudo para sempre.** O custo e o risco crescem com pouco uso. Defina a retenção pelo valor.
- **Sinais sem ligação.** Logs, métricas e traces que não podem ser unidos atrasam todo incidente. Passe identificadores compartilhados.
- **Amostrar fora o evento raro.** A falha de que você precisa é a que você descartou. Guarde os erros e as requisições lentas.
- **Dados sensíveis nos logs.** Espalham-se e são difíceis de remover. Faça varreduras e corrija a fonte.
- **Alertas em todo sinal.** O ruído treina as pessoas a ignorar alertas. Alerte pelo impacto no usuário.
- **Confiar sem conferir nos resumos de IA.** Podem estar errados, e os sinais podem estar incompletos. Verifique contra os dados.
- **Instrumentação como trabalho de outra pessoa.** Quem escreve o código sabe o que emitir. Faça disso parte do trabalho.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Cobertura e padrão | Sinais variam por equipe; pontos cegos desconhecidos | Principais serviços instrumentados | Padrão central e cobertura acompanhada contra o catálogo | Incidentes em pontos cegos revistos e lacunas fechadas | Cobertura embutida na criação de serviços e ajustada pelo impacto no usuário |
| Qualidade e ligação dos sinais | Só logs; sem identificadores compartilhados | Alguns traces e métricas | Identificadores compartilhados; completude dos traces conferida | Tempo até entender revisto; simulacros rodados | Os sinais se adaptam automaticamente às perguntas feitas |
| Custo e governança | Custo desconhecido; sem regras de dados | Custo visível no geral | Custo atribuído; regras de retenção e de dados sensíveis | Custo e achados de dados revistos em um ritmo | Custo e risco da telemetria geridos por valor entre equipes |

## Lista de verificação

- [ ] Um padrão de sinais centrais está escrito e faz parte da definição de pronto.
- [ ] A cobertura de instrumentação é acompanhada contra o catálogo de serviços.
- [ ] Um identificador de requisição ou de trace liga logs, métricas e traces.
- [ ] A completude dos traces é conferida em uma amostra de requisições reais.
- [ ] O tempo até entender é registrado para os incidentes, com a causa.
- [ ] Os incidentes em pontos cegos são contados, e cada um leva a um sinal.
- [ ] O custo de telemetria é atribuído aos serviços, e a retenção é definida pelo valor.
- [ ] Os dados sensíveis na telemetria são procurados em varreduras e corrigidos na fonte.
- [ ] Existem regras para as ferramentas de IA que leem a telemetria.
- [ ] Cada métrica tem um vetor de manipulação e uma barreira de proteção mostrados ao lado.

## Prompts de IA

**Projete um padrão de sinais centrais.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Ache lacunas de observabilidade a partir de uma revisão de incidente.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Planeje uma varredura de dados sensíveis na telemetria.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Revise o risco de manipulação das medidas de observabilidade.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): use para examinar padrões incomuns na telemetria antes de decidir sobre uma causa.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): use para transformar sinais e linhas do tempo em uma explicação testada.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): use para ligar indicadores aos acordos e objetivos que eles apoiam.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- A observabilidade trata de poder fazer perguntas novas a um serviço em operação; por isso meça a cobertura, os sinais ligados e o tempo até entender.
- Os incidentes que os usuários acham primeiro são a evidência mais clara de pontos cegos; por isso conte-os e acrescente sinais.
- Identificadores compartilhados entre logs, métricas e traces são o que torna rápido o entendimento.
- A telemetria custa dinheiro e pode vazar dados sensíveis; por isso dê-lhe orçamento, defina a retenção pelo valor e faça varreduras de conteúdo sensível.
- Confira os resumos de telemetria feitos por IA contra os dados, já que dependem da qualidade dos sinais.

## Referências e leituras complementares

1. Wikipedia, [Observabilidade (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetria](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Rastreamento distribuído](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Gerenciamento de logs](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Indicador de nível de serviço](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
