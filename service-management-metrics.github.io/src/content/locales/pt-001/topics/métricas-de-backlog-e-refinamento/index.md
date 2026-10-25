# Métricas de backlog e refinamento

**Um backlog é uma fila de promessas; por isso meça quantas promessas estão esperando, há quanto tempo esperam e quanto do próximo trecho de trabalho está de fato pronto, e trate uma pilha crescente de itens antigos como uma decisão que você ainda não tomou.**

## Visão geral e motivação

Toda equipe que constrói ou opera um serviço mantém uma lista de trabalho que concordou em considerar. Na prática ágil, essa lista é o [backlog do produto](https://en.wikipedia.org/wiki/Product_backlog), um conjunto ordenado de itens que descreve o que pode ser feito para melhorar o produto. Num quadro de fluxo, o equivalente é o conjunto de itens que esperam à esquerda das colunas de iniciado. Na gestão de serviços de TI (ITSM), como descrita pelo [ITIL](https://en.wikipedia.org/wiki/ITIL), os equivalentes são os incidentes, as requisições de serviço, os problemas e as mudanças abertos aguardando numa fila. Todos são backlogs. Diferem em quem os alimenta, com que rapidez os itens devem sair e o que significa um item esperar.

A maior parte dos dados vem de um [sistema de rastreamento de issues](https://en.wikipedia.org/wiki/Issue_tracking_system) ou de uma ferramenta de ITSM. As métricas de backlog respondem a uma pergunta simples: a quantidade de trabalho prometido é proporcional à capacidade de fazê-lo, e o trabalho prometido ainda vale a pena? Um backlog que cresce sem limite não descreve um plano. Descreve uma lista de desejos, e cada leitor dela, do responsável pelo produto ao cliente que levantou um item, formará sua própria ideia de quando ficará pronto. A resposta honesta muitas vezes é "nunca", e o custo de não dizê-lo é pago em confiança, em tempo gasto relendo itens antigos e em decisões tomadas com informação defasada.

O refinamento é a atividade que mantém um backlog útil. Na prática ágil, o refinamento do backlog do produto é o trabalho contínuo de acrescentar detalhe, estimativas e ordem aos itens para que fiquem prontos para começar. As equipes que puxam trabalho à medida que a capacidade se libera costumam chamar a mesma atividade de reposição ou de limpeza do backlog (grooming). No ITSM, ela aparece como triagem, categorização e manutenção de uma lista de erros conhecidos ou de problemas. As métricas deste tópico medem o tamanho e a idade do backlog, quanto trabalho está pronto e quão bem o refinamento mantém uma janela de trabalho pronto à frente da equipe.

Quatro termos se repetem. Um **item** é uma única entrada de um backlog, como uma [história de usuário](https://en.wikipedia.org/wiki/User_story), um defeito, uma requisição de serviço ou um registro de problema. A **idade do item** é o tempo decorrido desde que o item entrou no backlog, o que difere da idade do item de trabalho na medição de fluxo, em que o relógio começa quando o trabalho inicia (veja o tópico 2.1, Medidas de fluxo). **Pronto** significa que um item atende à definição de pronto escrita de uma equipe, de modo que a equipe poderia começá-lo e esperar terminá-lo dentro de uma janela de nível de serviço. O **refinamento** é o trabalho de deixar os itens prontos e de remover os itens que nunca serão feitos.

Os backlogs de produto e de serviço se comportam de modo diferente, e misturá-los é o erro mais comum nesta área. Um backlog de produto é um lugar onde os itens são deliberadamente mantidos até que o responsável pelo produto decida sua ordem. Esperar é um estado normal, e um item antigo é um motivo para perguntar se ele ainda importa. Um backlog de serviço de incidentes e requisições é uma fila com uma promessa anexada: o cliente espera uma resposta dentro de um tempo. Esperar ali é um custo para o cliente desde o primeiro minuto. Um backlog de produto deve ser podado; um backlog de serviço deve ser escoado. Ponha os dois num só gráfico e o gráfico enganará.

A visão ágil trata o backlog como um artefato vivo, de propriedade de um responsável pelo produto, mantido curto o bastante para ser compreendido e ordenado por valor. A visão do ITIL trata os registros abertos como trabalho em andamento contra um nível de serviço acordado, de propriedade de uma prática. As duas visões compartilham um fato da teoria das filas: uma fila que recebe itens mais depressa do que os libera crescerá, e o tempo que um item espera cresce com a fila (veja o tópico 2.3, Trabalho em andamento e teoria das filas). A [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law) liga o tamanho da fila, a taxa em que os itens saem e o tempo médio que um item passa no sistema, e é a razão pela qual o tamanho e a idade do backlog são duas visões da mesma coisa.

Uma última distinção mantém o tópico honesto. Um backlog não é uma medida de produtividade nem de quão ocupada está uma equipe. Um backlog grande pode significar um produto popular, uma lista mal podada ou uma equipe com poucos recursos, e o número sozinho não diz qual.

## Princípios-chave

- **Meça a idade além do tamanho.** O tamanho diz quanto está esperando; a idade diz há quanto tempo, e os itens mais antigos mostram onde as decisões estão sendo evitadas.
- **Mantenha separados os backlogs de produto e de serviço.** Uma ideia retida e um cliente esperando são coisas diferentes, e cada uma exige sua própria leitura.
- **Mire em trabalho pronto, não numa lista longa.** Algumas semanas de trabalho pronto e bem ordenado valem mais do que mil itens que ninguém olhou.
- **Podar é um recurso.** Remover um item que você nunca fará é trabalho honesto, e uma taxa de descarte que nunca passa de zero é um alerta.
- **Use distribuições.** Relate a mediana e o 85º percentil da idade dos itens e mostre o item mais antigo, já que as médias escondem a cauda.
- **Descreva a equipe e o sistema.** As métricas de backlog mostram como o trabalho chega a uma equipe e como é tratado, nunca como um indivíduo se saiu.
- **Ligue cada número a uma decisão.** Se um gráfico de backlog não mudaria o que você faz em seguida, aposente-o.

## Definições de métricas

As métricas abaixo se aplicam a um único backlog por vez. Escolha primeiro o backlog (um backlog de produto, uma fila de incidentes, uma fila de requisições de serviço, uma lista de problemas) e relate cada métrica por backlog. Os percentis usam o método de [percentil](https://en.wikipedia.org/wiki/Percentile) indicado no tópico 1.6, Letramento estatístico para métricas de serviço.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tamanho do backlog | Número de itens abertos em um backlog nomeado em um ponto no tempo | Contagem de itens com status aberto ou pronto na data do instantâneo; exclui itens em andamento e itens encerrados | itens | Instantâneo do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; gestão de requisições de serviço; gestão de problemas | Backlog do produto; fila de entrada | Semanal |
| Idade do backlog | Distribuição de quanto tempo os itens abertos esperaram | Para cada item aberto, data do instantâneo menos a data em que entrou no backlog; relate a mediana, o 85º percentil e o item mais antigo | dias | Criação e histórico de status do rastreador de issues ou do ITSM | Gestão de incidentes; gestão de problemas; melhoria contínua | Saúde do backlog; revisão de itens antigos | Semanal |
| Profundidade do trabalho pronto | Quão à frente a equipe tem trabalho pronto | Itens que atendem à definição de pronto / média de itens concluídos por semana nos últimos seis períodos | semanas | Sinalizador de pronto do rastreador de issues e histórico de vazão | Análise de negócio; gestão de requisições de serviço | Definição de pronto; refinamento | Por período de planejamento |
| Cobertura do refinamento | Proporção da janela de curto prazo que está pronta | Itens das próximas duas quinzenas de trabalho esperado (ou os N primeiros pela ordem) que atendem à definição de pronto / itens nessa janela | porcentagem | Ordem do rastreador de issues, sinalizador de pronto e trabalho planejado | Análise de negócio; habilitação de mudanças (para mudança planejada) | Refinamento do backlog do produto | Por período de planejamento |
| Razão entrada-saída do backlog | Se os itens chegam mais depressa do que saem | Itens acrescentados no período / itens removidos do backlog por conclusão ou descarte no mesmo período; uma razão acima de 1 significa crescimento | razão | Eventos de criação e resolução do rastreador de issues ou do ITSM | Gestão de incidentes; gestão de requisições de serviço; gestão de capacidade e desempenho | Taxas de chegada e de saída | Semanal |
| Taxa de descarte do backlog | Proporção dos itens que saem removidos sem entrega | Itens encerrados como não será feito, duplicado ou obsoleto / todos os itens que saem do backlog no período; exclui itens encerrados como concluídos | porcentagem | Campo de resolução do rastreador de issues | Melhoria contínua; gestão de problemas (revisão de erros conhecidos) | Poda do backlog; ordenação pelo responsável pelo produto | Mensal |
| Backlog de serviço fora da meta | Proporção dos itens de serviço abertos mais antigos que sua janela acordada de resposta ou resolução | Itens abertos cujo tempo decorrido excede a meta de serviço / todos os itens abertos na fila; o relógio corre do registro e pausa apenas nos estados que a definição escrita permite | porcentagem | Ferramenta de ITSM com relógio de nível de serviço | Gestão de nível de serviço; gestão de incidentes; gestão de requisições de serviço | Faixa de expedição; expectativa de nível de serviço | Diária ou semanal |

Três relógios precisam ser declarados com clareza. A idade do backlog começa quando o item é criado no backlog e para quando ele sai por conclusão ou descarte; por isso um item reaberto inicia uma nova idade. A profundidade do trabalho pronto usa a vazão apenas dos itens concluídos, nunca a velocity planejada, já que a velocity planejada é uma previsão. O backlog de serviço fora da meta usa o relógio de nível de serviço, que pode diferir da idade do backlog por causa das pausas permitidas (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Recomendações

### Prepare o backlog para que possa ser medido

**1. Nomeie cada backlog e seu responsável.** Todo backlog no escopo tem um responsável, um propósito e uma lista de tipos de item. Um backlog de produto pertence a um responsável pelo produto; uma fila de incidentes pertence à central de serviços ou ao grupo resolvedor. Sem um responsável nomeado, ninguém decide quando um item antigo deve sair.

**2. Separe os itens retidos das promessas na fila.** Etiquete cada item como uma ideia que a equipe mantém para ordenação ou como um compromisso que alguém está esperando. Relate separadamente o tamanho e a idade do backlog para cada tipo. Uma requisição de suporte parada num backlog de produto é uma promessa na fila no lugar errado e merece um relógio de serviço.

**3. Escreva a definição de pronto e mantenha-a curta.** Uma definição de pronto lista as poucas coisas que uma equipe precisa saber antes de começar: o resultado buscado, um tamanho aproximado, as condições de aceitação e qualquer dependência. Mantenha-a em poucas linhas e revise-a quando deixar de prever um trabalho tranquilo. Uma lista de verificação longa transforma o refinamento em papelada e convida a marcar caixas.

**4. Registre a data de entrada e o motivo da saída.** A idade e a taxa de descarte dependem de dois campos: a data em que um item entrou e o motivo pelo qual saiu. Torne ambos obrigatórios na ferramenta e acrescente uma lista controlada de motivos de saída, como concluído, duplicado, obsoleto e não será feito. Datas ausentes são a causa mais comum de uma idade de backlog inutilizável (veja o tópico 1.5, Fontes de dados e instrumentação).

### Leia o tamanho e a idade juntos

**5. Relate a idade do backlog como uma distribuição.** Mostre a mediana, o 85º percentil e o item mais antigo, e um histograma por faixa de idade, como menos de 30 dias, 30 a 90, 90 a 180 e mais de 180. Uma idade média estável pode esconder uma pilha crescente de itens antiquíssimos, porque os itens novos puxam a média para baixo. A visão do item mais antigo é a mais difícil de esconder.

**6. Use a razão entrada-saída para ver o crescimento cedo.** Uma razão persistentemente acima de 1 significa que o backlog vai crescer, qualquer que seja o tamanho atual. Plote-a como uma cifra móvel de quatro semanas para suavizar feriados e semanas de release. Pareie-a com a vazão para que a equipe veja se o crescimento vem de demanda crescente ou de produção em queda (veja o tópico 2.1, Medidas de fluxo).

**7. Converta o tamanho em tempo com a vazão.** Divida o tamanho do backlog pela média de itens concluídos por período para obter um número aproximado de períodos de trabalho esperando, um uso direto da lei de Little. Declare com clareza que é uma média, e não uma promessa, e mostre a faixa usando uma vazão menor e uma maior de períodos recentes. Um backlog de produto de cem itens que equivale a um ano de trabalho é uma conversa sobre escopo, não um cronograma.

### Mantenha o refinamento fluindo

**8. Mire em uma janela de trabalho pronto, não num backlog inteiro dele.** Refine o bastante para as próximas uma a três semanas de trabalho e não mais. O detalhe acrescentado a um item que só começará daqui a seis meses costuma ficar obsoleto; por isso meça a profundidade do trabalho pronto e deixe-a flutuar dentro de uma faixa-alvo, como de uma a três semanas de trabalho, que a equipe escolhe e revisita. Uma profundidade muito acima da faixa é desperdício; uma profundidade abaixo de uma semana de trabalho é um risco de planejamento ocioso ou apressado.

**9. Meça a cobertura do refinamento nos itens prestes a começar.** A cobertura do refinamento olha apenas o topo da ordem. Responde à pergunta que a reunião de planejamento fará: se começássemos agora, os próximos itens estariam prontos? Relate-a logo antes do planejamento, quando uma falha ainda pode ser corrigida, e não depois.

**10. Faça do refinamento uma atividade regular e curta.** As orientações ágeis, inclusive o Scrum Guide, descrevem o refinamento como uma atividade contínua e deixam sua forma a cargo da equipe. Muitas equipes acham que uma sessão curta e frequente funciona melhor do que uma reunião longa.

### Pode e revise

**11. Pode em um calendário e relate a taxa de descarte.** Revise os itens mais antigos todo mês e pergunte de cada um: vamos fazer isto nos próximos seis meses e, se não, por que mantê-lo? Encerrar um item com um motivo declarado não é fracasso. Uma equipe que nunca descarta provavelmente está acumulando, e uma que descarta a maior parte do que recebe provavelmente está aceitando trabalho que deveria ter recusado na porta.

**12. Trate os backlogs de serviço escoando, não podando.** Para filas de incidentes e requisições, a primeira pergunta é se os itens estão dentro da janela de serviço. Acompanhe a proporção fora da meta e o item aberto mais antigo e mantenha a faixa de expedição para os itens que não podem esperar. As listas de problemas e de erros conhecidos ficam entre os dois mundos: são mantidas até que uma correção seja financiada; por isso revise-as como um backlog de produto, com uma data de revisão declarada para cada entrada (veja o tópico 4.6, Dívida técnica e erros conhecidos).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tamanho do backlog | Encerrar itens em massa como obsoletos, dividir itens para parecer ocupado ou esconder trabalho em listas paralelas e planilhas | Taxa de descarte do backlog com motivos de saída; comparação periódica da ferramenta com a lista real de requisições; feedback dos clientes sobre itens descartados |
| Idade do backlog | Reiniciar a data de entrada clonando ou recriando itens antigos; mover itens entre backlogs; reabrir em vez de reabrir um novo para mudar o relógio | Auditoria de itens clonados e movidos; revisão do item mais antigo; idade medida desde a primeira criação entre registros vinculados |
| Profundidade do trabalho pronto | Marcar itens como prontos sem conferi-los; inflar a profundidade escrevendo itens detalhados para trabalho de baixo valor | Amostra de itens prontos lida contra a definição; taxa de retrabalho ou de retorno ao refinamento quando o trabalho começa |
| Cobertura do refinamento | Marcar o sinalizador de pronto para atingir o número; estreitar a janela para que menos itens contem | Contagem de itens devolvidos depois do planejamento; sucesso do objetivo de entrega e mudança de escopo no meio do período (veja o tópico 2.5, Métricas de previsão e planejamento de entregas) |
| Razão entrada-saída do backlog | Encerrar depressa os itens fáceis para empurrar a saída, ou recusar novos itens na porta para segurar a entrada | Idade dos itens mais antigos; taxa de descarte; proporção de requisições rejeitadas sem motivo; necessidades não atendidas relatadas pelos clientes |
| Taxa de descarte do backlog | Descartar itens que os usuários ainda querem, para reduzir o tamanho; ou evitar descartes para o número parecer suave | Revisão de uma amostra de itens descartados com o solicitante; taxa de reabertura e de reenvio de itens descartados |
| Backlog de serviço fora da meta | Pausar o relógio com um estado de aguardando o cliente, rebaixar a prioridade ou encerrar e reabrir para reiniciar a janela | Proporção do tempo em estados de pausa; taxa de reabertura (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas); satisfação do usuário com tickets encerrados |

Uma leitura saudável mostra um backlog cujo tamanho é estável ou cai devagar, cujos itens mais antigos são poucos e cada um tem um responsável e uma razão declarada, e cuja janela de curto prazo está em sua maior parte pronta. A razão entrada-saída fica perto de 1, a taxa de descarte não é nem zero nem dominante e a cobertura do refinamento sobe sem que o trabalho planejado fique mais frágil. Quando os números parecem bons mas os clientes ainda relatam que nada acontece com suas requisições, confie nos clientes e audite os dados.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Backlog de produto pequeno e podado com rigor | Fácil de entender e manter ordenado; honesto quanto à capacidade | Risco de descartar ideias que teriam importado depois; os solicitantes podem se sentir ignorados |
| Backlog grande e retido | Preserva toda ideia e requisição; histórico útil | Caro de ler; itens obsoletos enganam o planejamento e escondem as prioridades reais |
| Janela pronta funda (muitas semanas refinadas) | Planejamento suave; menos surpresas quando o trabalho começa | O detalhe refinado fica obsoleto; esforço gasto em trabalho que talvez nunca comece |
| Janela pronta rasa (cerca de uma semana) | Pouco detalhe desperdiçado; permanece flexível | O planejamento pode travar quando alguns itens não estão prontos; menos antecedência para perceber dependências |
| Definição de pronto rígida | Menos inícios vagos; trabalho previsível | Pode virar um portão que atrasa o fluxo e estimula preencher caixas |
| Definição de pronto leve | Rápida; confia na equipe | Mais descoberta durante o trabalho; mais mudança no meio do período |

A resposta prática é manter o backlog pequeno o bastante para ser lido numa sentada, manter uma janela pronta de cerca de uma a três semanas de trabalho e deixar a definição de pronto curta o bastante para as pessoas lembrarem. As filas de serviço pedem a postura oposta: pequeno não é um objetivo, terminar dentro da janela acordada é. Escolha a célula de cada linha que combina com seu contexto e escreva a razão.

## Perguntas para discutir com sua equipe

**1. Se parássemos de acrescentar itens hoje, quanto tempo levaria para esvaziar o backlog com a nossa vazão recente, e esse número parece crível?**
Comece dividindo o tamanho do backlog pelo número típico de itens concluídos por período e mostre a faixa usando os melhores e piores períodos recentes. Pergunte se a equipe acredita no resultado e para onde o tempo realmente iria. Se o número for maior que um ano para um backlog de produto, pergunte quais itens poderiam ser removidos sem que ninguém notasse.

**2. Quais são os cinco itens mais antigos, e quem decidiu que ainda deveriam estar aqui?**
Leia em voz alta os cinco itens mais antigos com suas datas de entrada. Para cada um, peça um responsável nomeado e uma razão para continuar, como aguardar uma dependência, um adiamento deliberado ou negligência. Combinem uma ação para cada um: agendá-lo, descartá-lo ou escrever por que fica e quando olhar de novo.

**3. O que significa "pronto" aqui, e as nossas surpresas recentes vieram de itens que não estavam?**
Peça a cada pessoa que escreva a definição de pronto com suas palavras e depois compare. As diferenças são o primeiro achado. Olhe para trás, para os itens que causaram dúvidas ou retrabalho no meio do período, e pergunte o que os teria deixado prontos. O facilitador deve resistir a acrescentar itens de lista de verificação para cada surpresa e escolher, em vez disso, um ou dois que teriam evitado a maior parte da dor.

**4. Quais dos nossos backlogs guardam ideias e quais guardam promessas a alguém?**
Liste cada backlog e separe seus itens nos dois tipos. Requisições de suporte, incidentes e itens de clientes comprometidos são promessas e precisam de um relógio de serviço; ideias e melhorias são mantidas para ordenação. Discuta onde os dois estão misturados e o que isso faz com o gráfico de idade. O resultado pode ser tão simples quanto uma etiqueta e um filtro que permitam relatar cada um por si.

**5. Quando foi a última vez que removemos itens de propósito, e como os solicitantes reagiram?**
Podar muitas vezes parece arriscado; por isso olhe as evidências. Confira a taxa de descarte e amostre alguns itens descartados. Pergunte se o solicitante foi avisado e se alguém pediu um item de volta. O facilitador deve ajudar o grupo a combinar uma mensagem simples para os solicitantes ("não planejamos fazer isto; eis por quê; levante de novo se as circunstâncias mudarem"), de modo que podar se torne rotina e respeitoso.

**6. Se quiséssemos que nossos gráficos de backlog parecessem melhores sem ajudar ninguém, o que faríamos?**
Faça a revisão de manipulação do tópico 1.2 em cada métrica de backlog. Respostas prováveis incluem encerrar itens antigos em massa, clonar itens para reiniciar a idade, marcar itens como prontos cedo demais e estreitar a janela que a cobertura conta. Para cada resposta, confira se a barreira de proteção da tabela acima a pegaria. Registre as que escapariam e escolha uma nova verificação para testar no próximo trimestre.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega usam as métricas de backlog para manter o planejamento tranquilo. A profundidade do trabalho pronto e a cobertura do refinamento dizem à equipe se a próxima sessão de planejamento será suave, e a idade do backlog mostra quais promessas estão silenciosamente apodrecendo. Um bom hábito é rever a idade, a entrada-saída e a profundidade pronta por alguns minutos em cada sessão de refinamento e depois agir sobre uma coisa. As equipes devem publicar um pequeno conjunto estável para fora e guardar para si as faixas detalhadas de idade (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

### Equipes de serviço e operações

As equipes de operações administram filas com relógios. Sua leitura central é a proporção de itens abertos fora da meta junto com o item aberto mais antigo, dividida por prioridade e por estado de pausa. As listas de problemas e de erros conhecidos precisam de uma data de revisão em cada entrada para que os itens retidos não se tornem permanentes. As equipes também devem observar a razão entrada-saída da fila de incidentes, já que uma razão acima de 1 ao longo de várias semanas é um sinal antecipado de falta de pessoal ou de uma causa recorrente (veja o tópico 3.2, Volume e prioridade de incidentes).

### Liderança e governança

Os líderes veem um backlog como uma declaração de intenção. Um backlog muito grande diz a eles que a organização está prometendo mais do que consegue entregar, e um que encolhe depressa pode significar poda ou demanda reduzida. Pergunte que decisão o número informa. Financie tempo para refinamento e poda, evite metas sobre o tamanho bruto do backlog e peça a distribuição de idade e os motivos de descarte quando uma cifra de tamanho for apresentada (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

### Clientes e usuários

Os clientes vivenciam o backlog como silêncio. Um item levantado há seis meses sem resposta diz mais do que qualquer gráfico. Os usuários valorizam ouvir a verdade: está planejado, não está planejado e eis por quê, ou está aguardando uma dependência. Dê aos solicitantes uma forma de ver o status de seus itens e trate os itens descartados como uma tarefa de comunicação, não de limpeza de dados (veja o tópico 3.5, Métricas de atendimento de requisições de serviço).

## Na prática: um exemplo de gestão de serviços

Uma seguradora regional de médio porte mantém uma aplicação interna de sinistros com uma equipe de produto e uma central de serviços separada. Os números deste exemplo são ilustrativos.

O backlog da equipe de produto tem 412 itens. A idade mediana é de 138 dias, o 85º percentil é de 410 dias e o item mais antigo tem 29 meses. A equipe conclui cerca de 14 itens por quinzena; por isso o backlog equivale a aproximadamente 29 quinzenas de trabalho na vazão recente. A cobertura do refinamento nas próximas duas quinzenas é de 55%, e o planejamento muitas vezes se alonga quando a equipe descobre detalhes faltantes. A central de serviços mostra um quadro diferente: 63 requisições abertas, das quais 9% estão fora da meta, e uma razão entrada-saída próxima de 1.

Um responsável pelo produto pede um número menor e propõe uma meta de menos de 200 itens até o fim do trimestre. A equipe não quer tratar isso como um objetivo por si só. Em vez disso, faz uma revisão. Etiqueta os itens como ideias retidas ou trabalho prometido e descobre que 38 dos 412 são requisições de suporte que os clientes foram informados de que seriam tratadas. Movem-nas para a fila de serviço, com um relógio de serviço. Leem os 40 itens mais antigos e descobrem que 22 são obsoletos ou duplicados. Encerram-nos com motivos de saída e avisam os solicitantes. Definem uma faixa pronta de uma a duas quinzenas e dedicam uma curta sessão semanal a refinar apenas o topo da ordem.

Ao longo de três quinzenas, o tamanho do backlog cai para 301 e a taxa de descarte do mês é de 31%, o que é alto de propósito e sinalizado na revisão. A cobertura do refinamento sobe para 88%. Uma olhada rápida nos dados revela um risco de manipulação: o tamanho do backlog caiu mais depressa do que o esperado porque dois membros da equipe clonaram alguns itens antigos em itens novos para fugir da lista de itens velhos. A equipe percebe quando o gráfico do item mais antigo deixa de combinar com a amostra de descartes. Combinam medir a idade desde a primeira criação entre registros vinculados e revisar clones a cada sessão de poda. A decisão registrada para a liderança é abandonar a meta de tamanho e relatar em vez disso a distribuição de idade, a janela pronta e os motivos de descarte a cada trimestre.

## Ágil, IA, automação e análise

### Ágil

O refinamento mantém o próximo trecho de trabalho compreendido e pronto, em conversa com as partes interessadas. Uma prática útil é rever juntas a idade do backlog e a profundidade do trabalho pronto e eliminar ou decidir sobre os itens que esperaram demais. O cuidado é que um backlog limpo só para parecer curto, descartando itens sem avisar os solicitantes, prejudica a confiança.

### IA

As ferramentas de IA podem gerar e dividir itens de backlog em volume, o que infla o tamanho do backlog sem acrescentar valor. Meça a profundidade do trabalho pronto e a taxa de descarte e pareie o tamanho do backlog com a proporção de itens criados por IA que chegam à entrega. O cuidado é que um grande backlog gerado por IA pode acrescentar ruído para as pessoas que precisam priorizá-lo.

### Automação

Extraia automaticamente o tamanho e a idade do backlog do rastreador e sinalize os itens que cruzam um limiar de idade para uma decisão humana, e não para exclusão automática. A automação que encerra itens antigos deve ela mesma ser medida quanto a itens encerrados por engano. O cuidado é que um robô que encerra itens antigos melhora o número de idade sem responder ao solicitante.

### Análise

Mostre a distribuição de idade e a razão entrada-saída ao longo do tempo, com os itens mais antigos listados. A decisão informada é o que assumir, adiar ou abandonar. O cuidado é que o tamanho do backlog sozinho diz pouco, já que um backlog longo de itens pequenos e bem compreendidos pode ser mais saudável que um curto de itens vagos.

## Olhar setorial

**Startup.** O backlog costuma ser uma lista única na cabeça do fundador ou um quadro simples. Acompanhe apenas a idade dos itens mais antigos e se o próximo trabalho está pronto. Pode com firmeza e com frequência, já que a resposta certa para uma ideia de três meses atrás muitas vezes é esquecê-la.

**Pequena empresa.** O trabalho de produto e o de serviço costumam dividir uma equipe; por isso o backlog mistura ideias retidas e promessas aos clientes. Separe-os com uma etiqueta cedo. Uma lista única lida toda semana numa reunião curta vale mais do que métricas elaboradas. Observe primeiro a idade dos itens voltados ao cliente, porque uma requisição esquecida pode custar um relacionamento.

**Grande empresa.** Muitas equipes e muitas filas multiplicam as formas de ler mal um backlog. Defina as métricas uma vez, com os relógios e os motivos de saída, e evite consolidar o tamanho do backlog de produto em uma única cifra de portfólio. Compare uma equipe com o próprio histórico, nunca com outra equipe de trabalho diferente (veja o tópico 2.4, Métricas de fluxo de valor). As listas de problemas e de erros conhecidos merecem sua própria cadência de revisão.

**Governo e setor público.** Compromissos com os cidadãos, prazos legais de resposta e trilhas de auditoria moldam as filas de serviço. Trate os relógios legais como insumos fixos e relate a proporção fora da meta com as definições usadas. Os backlogs de produto podem ser limitados por rodadas de financiamento e compras; por isso a janela pronta pode precisar ser mais longa do que numa equipe comercial. Mantenha visíveis os motivos de descarte, já que a prestação de contas pública torna arriscado descartar em silêncio.

## Business case: motivações, ROI e TCO

O custo dessas métricas é modesto. A maior parte dos dados já está no rastreador de issues ou na ferramenta de ITSM. Os custos são uma data de entrada e um motivo de saída obrigatórios, uma curta sessão de poda por mês, alguns minutos no refinamento para olhar os gráficos de idade e de pronto e algum esforço para separar os backlogs de produto e de serviço. Uma planilha ou os relatórios embutidos na ferramenta bastam para começar, e nenhum produto novo precisa ser comprado.

O retorno vem do desperdício evitado e de promessas mais claras. As equipes que mantêm uma janela pronta gastam menos tempo de planejamento redescobrindo o que um item significa, e as que podam deixam de reler itens que nunca serão feitos. Os clientes recebem respostas honestas mais cedo, o que reduz contatos repetidos e escalonamentos. Descreva o benefício em termos de padrões que a equipe pode conferir por si mesma: sessões de planejamento mais curtas, menos itens devolvidos ao refinamento depois que o trabalho começa, menos cobranças sobre requisições antigas e menos surpresas quando a liderança pergunta o que há no pipeline. Este tópico não oferece uma porcentagem, já que nenhuma pode ser dada sem fonte. Meça sua própria linha de base por um trimestre e compare.

## Antipadrões e armadilhas

- **Tratar o tamanho do backlog como nota de produtividade ou de desempenho.** O tamanho depende da demanda, do escopo e dos hábitos de poda. Relate o tamanho com a idade e os motivos de descarte e nunca compare equipes por ele.
- **Misturar ideias retidas e promessas aos clientes numa só lista.** O gráfico de idade passa então a parecer negligência, e falta o relógio de serviço. Separe-as com uma etiqueta e relate cada uma à parte.
- **Refinar tudo.** Itens detalhados que só começarão daqui a meses ficam obsoletos. Mantenha uma janela pronta e refine pouco antes da necessidade.
- **Nunca descartar.** Uma lista que só cresce torna falsa toda afirmação sobre o escopo. Pode em um calendário e registre o motivo a cada vez.
- **Reiniciar a idade clonando ou movendo itens.** Lisonjeia o gráfico e perde o histórico. Meça a idade desde a primeira criação entre registros vinculados e audite os clones.
- **Uma definição de pronto usada como portão.** Se ela bloqueia trabalho que a equipe poderia começar com segurança, atrasa o fluxo. Mantenha-a curta e deixe a equipe passar por cima dela com uma razão declarada.
- **Metas sobre o tamanho bruto.** Uma meta de menos de N itens convida ao encerramento em massa. Defina metas para a idade dos itens mais antigos ou para a proporção fora da meta de serviço, com uma barreira de proteção.
- **Usar a idade média.** Os itens novos puxam a média para baixo enquanto os antigos se acumulam. Mostre a mediana, o 85º percentil e o item mais antigo.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e dados | Datas de entrada e motivos de saída ausentes ou inconsistentes | Algumas equipes registram datas; as definições de pronto diferem | Uma definição escrita de pronto e de idade do backlog; data de entrada e motivo de saída obrigatórios | Qualidade dos dados amostrada; idade medida entre clones e movimentos | Definições compartilhadas entre equipes e fornecedores e revistas quando deixam de informar decisões |
| Saúde do backlog | O backlog cresce sem ser notado; sem poda | Limpeza ocasional quando a lista se torna ingovernável | Poda agendada; backlogs de produto e de serviço separados | Tamanho, idade, entrada-saída e taxa de descarte acompanhados e revistos com uma barreira de proteção | Política de backlog ajustada entre equipes à demanda e à capacidade; os clientes veem o status de seus itens |
| Refinamento | Detalhe acrescentado ad hoc no planejamento | Sessões regulares em algumas equipes | Refinamento curto e regular com uma janela pronta combinada | Cobertura e profundidade pronta revistas e ligadas a resultados de entrega | Refinamento compartilhado entre equipes e dependências; a janela se adapta às condições |
| Uso nas decisões | Números mostrados só quando algo dá errado | Relatados à liderança sem discussão | A equipe revê a idade e a profundidade pronta no refinamento | Trabalho de melhoria financiado segue a revisão | A evidência do backlog informa decisões de portfólio e de capacidade em toda a organização |

## Lista de verificação

- [ ] Cada backlog tem um responsável nomeado e um propósito declarado.
- [ ] Ideias retidas e promessas aos clientes são etiquetadas e relatadas separadamente.
- [ ] Todo item tem uma data de entrada obrigatória e um motivo de saída de uma lista controlada.
- [ ] A equipe tem uma curta definição de pronto escrita.
- [ ] A idade do backlog é relatada como mediana, 85º percentil e item mais antigo.
- [ ] A razão entrada-saída é mostrada como cifra móvel ao lado da vazão.
- [ ] Uma janela pronta é combinada, e a profundidade do trabalho pronto é relatada contra ela.
- [ ] A cobertura do refinamento é relatada antes do planejamento, e não depois.
- [ ] Uma sessão mensal de poda está no calendário e a taxa de descarte é relatada.
- [ ] As filas de serviço mostram a proporção fora da meta e o uso de estados de pausa.
- [ ] A revisão de manipulação das métricas de backlog foi feita neste trimestre.

## Prompts de IA

**Avalie a saúde de um backlog.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Redija uma definição de pronto.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Planeje uma sessão de poda do backlog.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Separe o trabalho de produto e de serviço em um backlog misto.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada e os tópicos vizinhos de uma métrica de backlog que você está prestes a introduzir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um tópico de backlog revisado mantém coerentes seus vetores de manipulação, barreiras de proteção e referências cruzadas.

## Ideias-chave

- Um backlog é uma fila de promessas; por isso leia juntos o tamanho e a idade e mostre os itens mais antigos.
- Mantenha ideias retidas e promessas aos clientes em visões separadas, já que esperar significa coisas diferentes em cada uma.
- Mire em uma curta janela de trabalho pronto e meça a cobertura do refinamento nos itens prestes a começar.
- Pode em um calendário, registre por que os itens saem e trate uma taxa de descarte zero como um alerta.
- Defina metas para a idade e para as janelas de serviço, não para o tamanho bruto, e pareie toda métrica de backlog com uma barreira de proteção.
- As métricas de backlog descrevem como o trabalho chega a uma equipe e como é tratado, e nunca classificam pessoas.

## Referências e leituras complementares

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Backlog do produto](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [História de usuário](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Sistema de rastreamento de issues](https://en.wikipedia.org/wiki/Issue_tracking_system).
