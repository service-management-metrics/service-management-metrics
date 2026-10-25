# Medidas de fluxo

**Quatro contagens e relógios simples, trabalho em andamento, vazão, idade do item de trabalho e tempo de ciclo, dizem a uma equipe onde o trabalho está travado e o que ela pode prometer, desde que cada um seja definido do mesmo modo para trabalho de projeto e de serviço e lido como uma distribuição, e não como uma média.**

## Visão geral e motivação

A maioria dos painéis de entrega e de serviço relata o que terminou no mês passado. As medidas de fluxo acrescentam a visão que importa enquanto o trabalho ainda está em movimento: quanto está em andamento agora, quão antigo é cada item, com que rapidez os itens terminam e quanto tempo levam. A literatura de fluxo dá a essas quatro medidas definições precisas. O Kanban Guide (kanbanguides.org, versão atual em outubro de 2026) é uma fonte clara: ele as nomeia como as medidas que uma equipe usa para inspecionar e adaptar seu fluxo de trabalho, e este tópico segue essas definições sem exigir nenhum método ou quadro em particular.

As quatro definições são curtas. **Trabalho em andamento (WIP)** é o número de itens de trabalho que começaram e não terminaram. **Vazão** é o número de itens de trabalho concluídos por unidade de tempo. **Idade do item de trabalho** é o tempo decorrido entre o início de um item de trabalho e o momento atual, de modo que se aplica apenas a itens ainda em andamento. **Tempo de ciclo** é o tempo decorrido entre o início de um item de trabalho e o seu término, contando os dois dias de forma inclusiva na redação do Guide. Um **item de trabalho** é uma unidade de trabalho que a equipe escolheu acompanhar como uma coisa só, como uma história de usuário, um incidente, uma requisição de serviço ou uma mudança. Um **fluxo de trabalho** é o conjunto de estados entre "iniciado" e "concluído", e a **definição de fluxo de trabalho** escrita da equipe diz quais são esses estados.

Duas das quatro dizem respeito ao sistema como um todo (WIP e vazão) e duas a itens individuais (idade e tempo de ciclo). O par dos itens concluídos é vazão e tempo de ciclo. O par dos itens não concluídos é WIP e idade. Essa divisão importa porque as medidas dos itens concluídos são consequentes: dizem como as coisas foram. As medidas dos itens não concluídos são antecedentes: dizem o que está prestes a acontecer, enquanto ainda há tempo de agir. A idade do item de trabalho é a menos aproveitada das quatro e costuma ser a primeira que vale acrescentar a um quadro.

A relação entre as três primeiras não é acidental. A [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law), um resultado da [teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory), diz que, em um sistema estável, o número médio de itens no sistema é igual à taxa média de chegada multiplicada pelo tempo médio que cada item passa nele. Em termos de fluxo, o WIP médio está ligado à vazão média e ao tempo de ciclo médio. A lei só vale sob condições a que o tópico volta nas Recomendações (veja o tópico 2.3, Trabalho em andamento e teoria das filas, para o tratamento completo). A consequência prática é simples: se a vazão fica aproximadamente constante, mais trabalho em andamento significa tempos de ciclo mais longos.

As visões ágil e ITIL se encontram aqui com vocabulários diferentes. Na prática ágil, as medidas de fluxo pertencem ao quadro da equipe e são usadas em uma revisão regular com as partes interessadas e na reflexão da própria equipe sobre como melhorar. No ITIL 4, os mesmos números descrevem como a gestão de incidentes, a gestão de requisições de serviço e a habilitação de mudanças movem registros entre estados, e alimentam a prática de medição e relatório e a gestão de nível de serviço. Um incidente é um item de trabalho. Uma requisição de serviço é um item de trabalho. Ambos têm início, término e uma idade entre os dois. A central de serviços do ITIL e a equipe de entrega fazem o mesmo tipo de trabalho do ponto de vista da medição: itens chegam, esperam, são trabalhados e saem.

As medidas também se ligam ao [desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development), que trata a espera como principal fonte de desperdício, e ao [diagrama de fluxo cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), um gráfico de chegadas e saídas acumuladas que mostra WIP, vazão e tempo de ciclo de relance. O gráfico é opcional. As quatro medidas podem ser calculadas a partir de uma tabela de itens com duas datas cada.

Como o tempo de ciclo e a idade são durações com cauda longa à direita, uma média única engana. Um [percentil](https://en.wikipedia.org/wiki/Percentile), como o 85º, diz a uma equipe "85% dos itens terminam em até tantos dias", que é uma previsão utilizável e uma promessa utilizável (veja o tópico 1.6, Letramento estatístico para métricas de serviço). A literatura de fluxo chama essa promessa de **expectativa de nível de serviço (SLE)**: quanto tempo um item típico deve levar, enunciado como um tempo e uma probabilidade. Uma SLE é a previsão que a equipe faz sobre si mesma. Não é um [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement), que é um compromisso negociado com um cliente (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Princípios-chave

- **Conte itens inteiros que combinem com uma só definição de iniciado e concluído.** Dividir ou fundir itens para melhorar um número destrói a comparabilidade. Combine o que é um item de trabalho e mantenha a definição estável.
- **Defina os relógios antes de coletar os dados.** O tempo de ciclo e a idade dependem de qual estado significa "iniciado" e qual significa "concluído". Escreva os dois e registre toda mudança neles (veja o tópico 1.5, Fontes de dados e instrumentação).
- **Olhe primeiro para o trabalho não concluído.** A idade e o WIP são as únicas medidas que ainda podem mudar um resultado. A vazão e o tempo de ciclo confirmam o que já aconteceu.
- **Relate distribuições, não médias.** Mostre percentis para o tempo de ciclo e a idade, e uma sequência de contagens semanais para a vazão, para que a forma da variação fique visível.
- **Use as medidas para gerir o fluxo de trabalho, não as pessoas.** A unidade de análise é o fluxo de trabalho da equipe. Nunca classifique indivíduos por itens concluídos ou por tempo de ciclo.
- **Limite o WIP para tornar o fluxo previsível.** Um limite de WIP é uma política, não uma meta. O limite existe para expor filas e encurtar o tempo de ciclo.
- **Separe o tempo de fluxo da exatidão do planejamento.** As medidas de fluxo descrevem como o trabalho se move. Sozinhas, nada dizem sobre se o trabalho certo foi escolhido (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

## Definições de métricas

Cada linha conta itens do fluxo de trabalho de uma equipe. Os itens ainda em andamento são excluídos do tempo de ciclo e da vazão, e os itens concluídos são excluídos da idade e do WIP.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabalho em andamento (WIP) | Itens de trabalho iniciados mas não concluídos | Contagem de itens cujo carimbo de início está definido e cujo carimbo de término está vazio, em um momento declarado (por exemplo o fim de cada dia); itens de backlog ainda não iniciados e itens concluídos são excluídos | itens | Histórico de estados do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; gestão de requisições de serviço; habilitação de mudanças | Limite de WIP; backlog da equipe em andamento | Instantâneo diário, revisto semanalmente |
| Vazão | Itens de trabalho concluídos por unidade de tempo | Contagem de itens cujo carimbo de término cai no período (por exemplo uma semana civil, de segunda a domingo); itens concluídos e depois reabertos só contam de novo se forem itens novos | itens por semana | Histórico de estados do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; atendimento de requisições de serviço | Vazão; itens concluídos | Semanal |
| Idade do item de trabalho | Tempo decorrido que um item não concluído está em andamento | Hora atual menos o carimbo de início, para itens ainda em andamento; o relógio corre durante o tempo bloqueado; itens ainda não iniciados são excluídos | dias | Histórico de estados do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; gestão de problemas | Idade do item de trabalho; reunião diária da equipe | Diária, revista em cada reunião da equipe |
| Tempo de ciclo | Tempo decorrido do início ao término de um item concluído | Carimbo de término menos carimbo de início, em dias corridos, de forma inclusiva; o relógio começa na primeira passagem para um estado de iniciado e para na passagem para um estado de concluído; relate a mediana e o 85º e o 95º percentis | dias | Histórico de estados do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; atendimento de requisições de serviço; habilitação de mudanças | Tempo de ciclo; duração do item | Semanal, com janela móvel de 8 a 12 semanas |
| Atendimento da SLE | Proporção dos itens concluídos que cumpriram a expectativa de nível de serviço da equipe | Itens concluídos com tempo de ciclo igual ou inferior à SLE / todos os itens concluídos na janela; itens ainda abertos são excluídos | porcentagem | Derivada do tempo de ciclo | Gestão de nível de serviço | Expectativa de nível de serviço | Mensal |
| Proporção do tempo bloqueado | Proporção dos dias em andamento que os itens passaram sinalizados como bloqueados | Item-dias em estado bloqueado / item-dias em andamento, na janela; o relógio de ambos começa no carimbo de início | porcentagem | Sinalizadores do rastreador de issues ou um status bloqueado na ferramenta de ITSM | Gestão de incidentes; gestão de problemas; gestão de fornecedores | Bloqueios; impedimentos levantados nas reuniões diárias da equipe | Semanal |

O tempo de ciclo aqui segue a definição da literatura de fluxo. Difere da ideia de tempo de resolução do ITIL, que muitas vezes é medido a partir do momento em que um ticket é aberto e pode excluir o tempo em espera. Uma equipe que quer comparar os dois deve rotulá-los, e o tópico 2.2 trata os relógios em detalhe (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo). O atendimento da SLE e a proporção do tempo bloqueado derivam das quatro medidas centrais e estão incluídos porque são a forma como uma equipe usa essas medidas no dia a dia.

## Recomendações

### Defina o fluxo de trabalho e os itens

**1. Escreva a definição de fluxo de trabalho antes de plotar qualquer coisa.** Liste os estados, diga qual significa "iniciado" e qual significa "concluído" e declare quem pode mover um item entre eles. A literatura de fluxo chama isso de definição de fluxo de trabalho, e toda medida deste tópico depende dela. Se duas equipes definem "iniciado" de modo diferente, seus tempos de ciclo não podem ser comparados.

**2. Escolha um tamanho de item de trabalho que a equipe consiga terminar em dias, não em meses.** Um item de trabalho é o que a equipe acompanha como uma unidade: uma história, um incidente, uma requisição. Itens muito grandes escondem a própria idade e tornam a vazão irregular. Use uma regra estável, como "um item é uma coisa que um cliente ou usuário poderia perceber", e evite dividir itens só para melhorar uma contagem.

**3. Trate o trabalho de projeto e o trabalho de serviço como o mesmo tipo de fluxo, com padrões de chegada diferentes.** O trabalho de projeto chega como um backlog planejado do qual a equipe puxa. O trabalho de serviço, como incidentes e requisições, chega de modo imprevisível e pode passar à frente do trabalho planejado. Meça ambos no mesmo quadro ou nas mesmas tabelas, etiquetados por tipo, para ver como as interrupções afetam o trabalho planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

### Meça o trabalho não concluído

**4. Comece pela idade do item de trabalho no quadro.** Marque cada cartão com sua idade em dias e ordene ou destaque por faixas de percentil tiradas do histórico de tempo de ciclo da própria equipe. Um item mais velho que o 85º percentil dos tempos de ciclo passados é um sinal para perguntar o que o está bloqueando hoje. Isso transforma uma medida consequente em um lembrete diário.

**5. Conte o WIP com honestidade e defina um limite que você consiga defender.** Conte todo item iniciado e não concluído, inclusive o trabalho que espera uma revisão ou um fornecedor. Escolha um limite inicial a partir do WIP médio atual da equipe e reduza-o passo a passo, anotando o que muda no tempo de ciclo e na idade. Trate o limite como uma política que a equipe inspeciona e use a lei de Little apenas como verificação de sanidade das médias (veja o tópico 2.3, Trabalho em andamento e teoria das filas).

**6. Mostre o trabalho bloqueado como tempo, não como um sinalizador.** Um sinalizador de bloqueio que ninguém conta vira desculpa. Registre quando um item foi bloqueado e quando foi liberado e relate a proporção do tempo bloqueado. Mantenha o relógio do item correndo durante o bloqueio, porque a espera do cliente não pausa (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes, onde os estados de espera do ITIL levantam a mesma questão).

### Meça o trabalho concluído

**7. Relate o tempo de ciclo como uma distribuição com percentis.** Mostre a mediana, o 85º percentil e o 95º percentil e plote cada item concluído como um ponto ao longo do tempo (um gráfico de dispersão) para a equipe ver agrupamentos e valores atípicos. Declare a janela, por exemplo as últimas 10 semanas. Uma média esconde a cauda longa que os clientes sentem.

**8. Relate a vazão como uma sequência semanal, e não como um total único.** Plote a contagem de itens concluídos por semana como um [gráfico de acompanhamento](https://en.wikipedia.org/wiki/Run_chart) ou um [gráfico de controle](https://en.wikipedia.org/wiki/Control_chart). As contagens semanais variam naturalmente; por isso leia as mudanças contra essa variação antes de reagir e nunca compare a vazão de duas equipes como uma classificação de desempenho, porque os tamanhos e as definições dos itens diferem (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

**9. Defina uma expectativa de nível de serviço a partir dos seus próprios dados e reveja-a.** Pegue os tempos de ciclo da equipe das últimas semanas, escolha uma probabilidade com a qual a equipe consiga conviver e leia o número de dias no percentil. Publique-a como "85% dos itens terminam em 9 dias ou menos", usando valores reais dos seus dados. Revisite-a quando o fluxo de trabalho mudar. Uma SLE é uma previsão que a equipe faz sobre si mesma; por isso mantenha-a separada das metas contratuais.

### Use as medidas

**10. Use as quatro juntas e faça as mesmas quatro perguntas em cada reunião da equipe.** O que está em andamento, e está dentro do limite? Quais itens são os mais antigos, e o que os desbloquearia? Quantos terminamos, e isso está na faixa habitual? Quanto tempo levaram os recentes em comparação com a nossa expectativa? As quatro perguntas substituem um relatório de status e levam poucos minutos.

**11. Aplique as mesmas medidas às filas de serviço, com uma fronteira clara para o relógio.** Para incidentes e requisições, "iniciado" pode ser a primeira atribuição a uma pessoa ou equipe, enquanto o relógio de resolução do ITIL começa no registro. Ambos são válidos e respondem a perguntas diferentes: quão responsiva é a entrada e quanto tempo leva o trabalho em si. Nomeie cada relógio e não os misture em um só gráfico (veja o tópico 3.5, Métricas de atendimento de requisições de serviço).

**12. Mude o fluxo de trabalho, meça de novo e guarde o histórico.** Quando a equipe muda um limite de WIP, um estado ou uma política, registre a data e o motivo e marque a mudança nos gráficos. Uma mudança no tempo de ciclo depois de uma alteração é evidência de seu efeito. Uma mudança sem alteração registrada é motivo para suspeitar do instrumento (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Trabalho em andamento (WIP) | Manter itens no backlog ou numa coluna "pronto" até o último momento, para que não sejam contados como iniciados; encerrar e reabrir itens; esconder trabalho fora do quadro | Conciliar os itens do quadro com as requisições recebidas; amostrar o quadro contra o trabalho real da equipe; acompanhar a idade dos itens na primeira coluna |
| Vazão | Dividir itens em pedaços minúsculos; encerrar itens antes de estarem prontos; escolher primeiro os itens fáceis | Olhar a distribuição do tamanho dos itens e a taxa de reabertura; contar defeitos escapados e incidentes ligados a itens recentes; revisar a mistura de tipos de trabalho concluídos |
| Idade do item de trabalho | Mover um item parado para "concluído" ou para um novo estado a fim de zerar o relógio; cancelar itens antigos em silêncio; criar uma cópia nova de um item antigo | Auditar movimentos de estado para trás e itens cancelados; relatar os itens cancelados e sua idade; verificar duplicatas criadas perto do limite de idade |
| Tempo de ciclo | Começar o relógio tarde, movendo itens para "em andamento" só quando o trabalho está quase pronto; terminá-lo cedo, marcando itens como concluídos antes da revisão ou do release | Comparar o horário de início com o primeiro commit ou a primeira atividade; relatar o tempo entre "concluído" e o release; amostrar itens concluídos para conferir a conclusão real |
| Atendimento da SLE | Definir uma SLE generosa; excluir itens difíceis como "especiais"; encerrar itens para ficar abaixo do limite | Manter a SLE em um percentil de dados passados e revisá-la a cada trimestre; relatar os itens excluídos e a razão; ler o 95º percentil e os itens abertos mais antigos |
| Proporção do tempo bloqueado | Nunca sinalizar bloqueios, para a proporção parecer baixa; sinalizar tudo como bloqueado para explicar o atraso | Comparar a proporção bloqueada com a idade dos itens em andamento; revisar os motivos de bloqueio por categoria; amostrar itens bloqueados para conferir cada motivo |

Uma leitura saudável mostra o WIP no limite ou abaixo dele na maioria dos dias, a idade em geral abaixo do 85º percentil dos tempos de ciclo passados e a vazão variando dentro de uma faixa estável de semana a semana. Os percentis do tempo de ciclo são estáveis ou estão caindo, o atendimento da SLE fica perto da probabilidade que a equipe escolheu e o tempo bloqueado tem causas nomeadas em que alguém está trabalhando. Quando um número parecer bom demais, pergunte se o relógio se moveu ou se a definição mudou antes de comemorar.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medidas de fluxo (WIP, vazão, idade, tempo de ciclo) | Simples, independentes de ferramenta e baseadas em contagens e datas; apoiam a previsão probabilística | Exigem definições consistentes e carimbos limpos; nada dizem sobre valor ou qualidade |
| Medidas baseadas em estimativas, como pontos de história | Incluem uma visão de esforço e complexidade; combinam com trabalho planejado | Subjetivas e específicas de cada equipe; não podem ser comparadas entre equipes |
| Métricas de serviço baseadas em médias, como o tempo médio de resolução | Fáceis de calcular e explicar | Distorcidas por valores atípicos e pela assimetria; escondem a cauda longa |
| Tempo de ciclo e SLE baseados em percentis | Refletem o que os clientes vivenciam; apoiam uma promessa clara | Exigem histórico suficiente; mais difíceis de explicar a quem está acostumado com médias |
| Uma definição única de "iniciado" e "concluído" para toda a organização | Permite consolidar e comparar | Serve mal a algumas equipes; pode empurrar equipes para estados artificiais |

Escolha a medida mais simples que sirva à decisão em questão. As medidas de fluxo funcionam bem para uma equipe que puxa trabalho e consegue terminar itens em dias. Servem menos bem quando os itens levam meses, quando um item varia enormemente de tamanho ou quando a maior parte do valor está na descoberta e não na entrega.

## Perguntas para discutir com sua equipe

**1. Qual estado significa "iniciado" para nós, qual significa "concluído", e todos concordam?**
Ponha o quadro na tela e peça a cada pessoa que aponte o primeiro e o último estado do relógio. Anote as discordâncias, porque são a maior fonte de tempos de ciclo pouco confiáveis. Olhe em especial os itens que esperam numa revisão, numa fila de release ou nas mãos de um fornecedor. Combinem uma definição escrita do fluxo de trabalho e uma data em que ela passa a valer.

**2. Quanto trabalho temos em andamento agora, e o que aconteceria se parássemos de iniciar itens novos por uma semana?**
Conte os cartões, inclusive o trabalho parado. Pergunte o que a equipe terminaria e o que continuaria preso. O facilitador deve conduzir a conversa para as razões de começar cedo, como o medo de ficar ocioso ou a pressão das partes interessadas, e longe da culpa. Proponha um primeiro limite de WIP e uma data para revisá-lo.

**3. Quais itens são os mais antigos do quadro, e o que impede cada um deles?**
Ordene por idade e converse sobre os três mais antigos. Para cada um, nomeie o obstáculo, a pessoa que pode removê-lo e a próxima ação. Compare as maiores idades com o 85º percentil dos tempos de ciclo passados. Faça da pergunta um hábito em toda reunião, porque a idade é a única medida que ainda pode mudar um resultado.

**4. Como é a nossa distribuição de tempo de ciclo, e que promessa podemos fazer a partir dela?**
Mostre o gráfico de dispersão dos itens concluídos nas últimas 8 a 12 semanas. Leia a mediana, o 85º e o 95º percentis. Discuta se a equipe se sente à vontade para declarar uma SLE no 85º percentil e o que os valores atípicos tinham em comum. O facilitador deve conferir se o grupo entende a diferença entre a mediana e a cauda.

**5. Como incidentes e requisições afetam o trabalho planejado que puxamos do backlog?**
Etiquete os itens concluídos por tipo e compare tempos de ciclo e vazão por tipo. Pergunte com que frequência um item planejado parou porque chegou um incidente. Decida se uma política de expedição ou uma capacidade reservada ajudaria e como manter seu uso visível (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Discuta o que a equipe deixaria de fazer se as interrupções dobrassem.

**6. Quais destas medidas poderíamos manipular, e como perceberíamos?**
Percorra cada medida e pergunte como alguém sob pressão poderia fazê-la parecer melhor sem melhorar o fluxo. Associe cada resposta a uma barreira de proteção da tabela. O facilitador deve tratar isso como um exercício de projeto do instrumento, e não como uma acusação. Escolha uma barreira de proteção para acrescentar neste trimestre e nomeie um responsável.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega usam as medidas de fluxo para ver o próprio sistema. Aproveitam mais a idade dos itens em andamento e a distribuição do tempo de ciclo, que dizem no que concentrar esforço e o que prometer. Devem evitar transformar a vazão em meta e evitar comparar seus números com os de outras equipes (veja o tópico 2.8, Métricas DORA, para as medidas no nível da entrega que ficam acima do fluxo da equipe).

### Equipes de serviço e operações

As equipes de serviço lidam com chegadas que não controlam. As medidas de fluxo mostram como interrupções, transferências e esperas por terceiros alongam o tempo de conclusão. Elas se beneficiam de visões separadas para incidentes, requisições e mudanças planejadas e de tempo bloqueado relatado por motivo. Devem manter os relógios do ITIL que os contratos exigem e usar os relógios de fluxo para conduzir a equipe.

### Liderança e governança

Os líderes devem pedir a distribuição e a tendência, e não uma cifra única, e devem ler as mudanças com as alterações de fluxo de trabalho registradas ao lado. Podem usar o atendimento da SLE e os perfis de idade para ver o risco cedo. Devem resistir a consolidar a vazão entre equipes, porque as definições de item diferem, e devem financiar a limpeza dos modelos de status e dos carimbos de que dados de fluxo confiáveis precisam.

### Clientes e usuários

Os clientes sentem o tempo de ciclo e, sobretudo, a sua cauda. Uma declaração como "a maioria das requisições deste tipo é concluída em um número declarado de dias" dá a eles algo em que se basear para planejar, e uma nota honesta quando a equipe está fora da sua expectativa gera confiança. Eles não precisam das contagens de WIP ou de vazão, mas se beneficiam quando essas medidas reduzem a espera.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional mantém uma equipe combinada que cuida das requisições de serviço dos usuários finais e de um pequeno fluxo de melhorias planejadas para os sistemas clínicos. Todos os números deste exemplo são ilustrativos.

A equipe tem um quadro com os estados Pronto, Em andamento, Aguardando terceiros, Revisão e Concluído. O gerente nota que o relatório mensal mostra 46 itens concluídos, em linha com o mês anterior, mas a equipe clínica reclama que as requisições demoram "uma eternidade". Uma revisão do histórico do rastreador mostra que "iniciado" havia sido definido quando um cartão era triado pela primeira vez; por isso o tempo de ciclo incluía dias numa fila.

A equipe reescreve a definição de fluxo de trabalho: "iniciado" é a primeira passagem para Em andamento, "concluído" é a passagem para Concluído, e Aguardando terceiros conta como em andamento, com seu próprio tempo bloqueado. Com os novos relógios, a mediana do tempo de ciclo das últimas 10 semanas é de 4 dias, o 85º percentil é de 11 dias e o 95º percentil é de 24 dias. O WIP médio é de 19 itens para uma equipe de 6. A idade do item de trabalho mostra sete cartões com mais de 11 dias, e cinco deles aguardam um fornecedor externo.

A equipe decide três coisas. Define uma SLE de "85% dos itens terminam em 11 dias ou menos". Define um limite de WIP de 12 e combina parar de iniciar novos itens planejados quando o limite for atingido. Acrescenta ainda uma revisão semanal de dez minutos dos cinco itens mais antigos. Os itens do fornecedor são levados à gestão de fornecedores com as datas em que estão esperando.

Seis semanas depois, o 85º percentil do tempo de ciclo é de 8 dias e o WIP médio é de 12. A vazão é de 44 itens por semana durante várias semanas, perto do nível anterior. Então a equipe vê um possível risco de manipulação: a mediana do tempo de ciclo cai para 2 dias em uma semana, mas a contagem de itens concluídos por semana sobe bruscamente e a proporção de itens reabertos dentro de uma semana aumenta. Uma amostra de cartões mostra que requisições grandes estavam sendo divididas em vários cartões de uma linha para elevar a vazão e encurtar o tempo de ciclo. As barreiras de proteção pegaram: a mistura de tamanhos dos itens e a taxa de reabertura. A equipe combina uma regra sobre o que conta como um item, funde os cartões divididos nos relatórios e continua a publicar a SLE e a lista de idades.

## Ágil, IA, automação e análise

### Ágil

As medidas de fluxo combinam bem com a entrega contínua porque o trabalho é liberado em pequenos pedaços e os relógios correm continuamente. Um passo prático é mostrar a idade do item de trabalho em um quadro que toda a equipe e suas partes interessadas possam ver e falar dos itens mais antigos em cada revisão regular. O cuidado é que um quadro cheio de itens minúsculos faz a vazão parecer saudável; por isso mantenha o tamanho dos itens aproximadamente consistente e observe o tempo de ciclo em um percentil alto.

### IA

A assistência de IA tende a elevar a vazão de itens pequenos, como código ou respostas redigidas, sem encurtar o tempo que o trabalho concluído espera por revisão, aprovação ou release. Pareie a vazão com o tempo de ciclo no 85º percentil e com o retrabalho, para que um aumento de produção que apenas enche a fila fique visível. O cuidado é que um primeiro rascunho mais rápido pode mover a espera para um revisor humano; por isso meça onde o relógio está agora.

### Automação

Extraia os eventos de início e término do rastreador e do pipeline automaticamente e marque os estados bloqueados com um código de motivo para que o tempo bloqueado possa ser contado. As transferências automatizadas também precisam ser medidas: com que frequência falham e quanto tempo uma transferência falha fica sem ser notada. O cuidado é que uma mudança automática de status, como um robô movendo cartões, pode criar carimbos que nenhuma pessoa decidiu.

### Análise

Use a distribuição do tempo de ciclo para dar uma faixa para o trabalho futuro e mostre quantos itens estão por trás dela. A decisão que isso informa é o que a equipe pode prometer e onde procurar atrasos. O cuidado é que uma previsão a partir de poucas semanas de dados é frágil; por isso mostre seu intervalo e atualize-a conforme os dados crescem.

## Olhar setorial

**Startup.** Uma equipe pequena pode começar com um quadro físico ou digital e uma planilha de datas de início e término. Comece pela idade e pelo WIP, porque não precisam de histórico, e acrescente os percentis do tempo de ciclo depois de cerca de dez semanas de dados. Mantenha um quadro para trabalho planejado e correções urgentes, etiquetado por tipo, para que as interrupções fiquem visíveis.

**Pequena empresa.** O trabalho muitas vezes chega por e-mail ou por uma central de atendimento hospedada. Use as datas de criação, início e resolução da própria ferramenta, confira se "iniciado" significa que alguém começou a trabalhar e exporte os dados com regularidade. Um olhar semanal simples sobre os itens abertos mais antigos faz mais bem do que um painel elaborado.

**Grande empresa.** Muitas equipes, ferramentas e fluxos de trabalho fazem das definições consistentes o principal desafio. Combine um pequeno vocabulário comum para iniciado e concluído, deixe as equipes mapearem seus estados locais para ele e mantenha os dados de fluxo no nível da equipe. Use as medidas para identificar filas sistêmicas, como etapas de aprovação compartilhadas ou ambientes compartilhados, e não para comparar equipes.

**Governo e setor público.** Prazos legais, requisitos de auditoria e regras de compras moldam os relógios. Mantenha o relógio legal separado do relógio de fluxo da equipe e documente ambos. As etapas controladas por fornecedores muitas vezes dominam o tempo de ciclo; por isso registre-as como tempo bloqueado e use os dados nas conversas contratuais (veja o tópico 8.4, Métricas de fornecedores e contratos).

## Business case: motivações, ROI e TCO

O custo das medidas de fluxo é baixo em ferramentas e moderado em disciplina. Uma equipe precisa de um quadro com mudanças de estado confiáveis, algumas horas para escrever a definição de fluxo de trabalho, uma breve revisão recorrente e alguém para manter os gráficos. Se os carimbos vêm do rastreador ou da ferramenta de ITSM, a coleta é quase gratuita. O custo maior é o tempo gasto em alinhar definições e mudar hábitos, como parar de iniciar trabalho novo quando o limite é atingido.

O retorno aparece na previsibilidade e em menos surpresas. Uma equipe que consegue declarar uma SLE a partir dos próprios dados pode responder "quando estará pronto?" sem inflar estimativas e vê cedo o trabalho parado. Descreva o benefício por medidas que você mesmo pode observar: a proporção de itens mais velhos que o 85º percentil, a largura da diferença entre a mediana e o 95º percentil e o tempo gasto em reuniões de status antes e depois. Nenhum valor de referência é oferecido aqui, porque os números publicados dependem do fluxo de trabalho e das definições de item. O custo total de propriedade é sobretudo tempo das pessoas; por isso conte-o e compare-o com o custo do trabalho que espera sem ser visto.

## Antipadrões e armadilhas

- **Contar itens que nunca começaram.** Os cartões de backlog inflam o WIP e a idade e tornam o quadro ilegível. Conte apenas os itens iniciados e mantenha o backlog em seu próprio lugar (veja o tópico 2.6, Métricas de backlog e refinamento).
- **Tratar um limite de WIP como uma meta a atingir.** Um limite é um teto que expõe filas. Reveja se o limite está cumprindo seu papel e reduza-o quando a equipe der conta.
- **Relatar apenas médias.** O tempo de ciclo médio esconde a cauda longa que os clientes sentem. Relate a mediana e o 85º e o 95º percentis.
- **Pausar o relógio durante a espera.** Parar o relógio quando um item está bloqueado faz o tempo de ciclo parecer melhor e esconde o atraso. Mantenha o relógio correndo e relate o tempo bloqueado à parte.
- **Comparar a vazão entre equipes.** As definições e os tamanhos dos itens diferem. Compare cada equipe com o próprio histórico.
- **Usar as medidas de fluxo para julgar indivíduos.** Itens concluídos por pessoa convidam à manipulação e ignoram o trabalho compartilhado. Mantenha toda medida no nível da equipe.
- **Mudar o fluxo de trabalho sem registrar.** Uma mudança no nome de um estado ou em uma política quebra a tendência em silêncio. Registre a data e o motivo e marque-a em todo gráfico.
- **Misturar incidentes, requisições e trabalho planejado em uma só distribuição.** Seus tempos de ciclo diferem por natureza. Etiquete por tipo e leia cada distribuição por si.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | "Iniciado" e "concluído" significam coisas diferentes para pessoas diferentes | Algumas equipes escrevem seus estados de fluxo de trabalho | Uma definição escrita de fluxo de trabalho por equipe, com regras de relógio para o tempo bloqueado | Mudanças de definição registradas e marcadas nos gráficos; relógios revistos quanto a deriva | Definições alinhadas entre equipes e fornecedores onde o trabalho cruza fronteiras, e revistas quando deixam de informar decisões |
| Medir o trabalho não concluído | Status contado em reuniões | Cartões mostram idade ou WIP em algumas equipes | WIP contado diariamente e idade mostrada em todo cartão, com um limite escrito | Faixas de idade tiradas de percentis históricos orientam a ação diária | Filas e transferências entre equipes acompanhadas em conjunto, com a idade compartilhada com fornecedores |
| Medir o trabalho concluído | Contagens de tickets encerrados por mês | Médias de tempo de ciclo relatadas por algumas equipes | Percentis do tempo de ciclo e vazão semanal de uma só fonte de dados | Tendências revistas contra mudanças registradas; atendimento da SLE acompanhado | Previsões a partir dos dados de fluxo informam o planejamento e os compromissos de serviço entre equipes |
| Uso e barreiras de proteção | Números usados para perseguir pessoas | Consciência informal da manipulação | Cada medida pareada com uma barreira de proteção e revista com a equipe | Alertas das barreiras levam a trabalho de melhoria financiado | Medidas e barreiras de proteção revistas em conjunto com clientes e fornecedores |

## Lista de verificação

- [ ] A definição de fluxo de trabalho está escrita, com os estados de "iniciado" e "concluído" nomeados.
- [ ] Um item de trabalho está definido, com uma regra para dividir e fundir itens.
- [ ] O WIP é contado diariamente a partir de dados da ferramenta, e um limite de WIP está escrito.
- [ ] Todo cartão em andamento mostra sua idade em dias.
- [ ] O tempo de ciclo é relatado como mediana, 85º percentil e 95º percentil em uma janela declarada.
- [ ] A vazão é relatada como um gráfico de acompanhamento semanal com sua janela.
- [ ] Uma expectativa de nível de serviço é declarada a partir dos dados da própria equipe e revista a cada trimestre.
- [ ] O tempo bloqueado é registrado com início, fim e motivo, e o relógio do item continua correndo.
- [ ] Incidentes, requisições e trabalho planejado são etiquetados para que cada um possa ser lido por si.
- [ ] Toda mudança em um estado ou política é registrada com data e motivo.
- [ ] Cada medida é pareada com uma barreira de proteção da tabela de manipulação.
- [ ] Nenhuma medida é usada para classificar indivíduos ou comparar equipes.

## Prompts de IA

**Confira uma definição de fluxo de trabalho em busca de problemas de relógio.**

```text
Here is the workflow for [team or service]: [list of states and transitions,
with a one-line meaning for each if known]. We want to compute work in progress,
throughput, work item age, and cycle time using the flow-literature definitions.
Identify which state should start the clock and which should stop it, any state
where the clock could be paused or misread, and any state that two teams might
interpret differently. Do not guess how our tool is configured. List your
assumptions and the questions I should answer to settle the definition.
```

**Analise uma exportação de itens de trabalho.**

```text
I have an export of [number] finished work items from [tool] with these fields:
[field names, for example id, type, started date, finished date, blocked
periods]. Explain how to compute cycle time percentiles, weekly throughput, and
daily work in progress from these fields, and how to handle missing dates,
reopened items, and items of type [types]. Provide the steps and a short script
outline in [language], and do not assume any values. List your assumptions and
the data quality checks I should run first.
```

**Redija um enunciado de expectativa de nível de serviço.**

```text
Our team handles [type of work] and has cycle time data for the last [number]
weeks, with a median of [value], an 85th percentile of [value], and a 95th
percentile of [value]. Draft a one-sentence service level expectation and a short
note explaining it to [audience, for example customers or the service owner],
including what it does not promise. Do not invent target values or benchmarks.
List your assumptions and the caveats about sample size.
```

**Revise os riscos de manipulação das nossas medidas de fluxo.**

```text
We track [list of flow measures] for [team or service]. The team is under
pressure to [pressure, for example reduce ticket age]. For each measure, list
realistic ways it could be made to look better without improving flow, the signal
in our data that would reveal each, and a paired guardrail. Do not invent
statistics or cite studies. List your assumptions and the data I would need to
test each risk.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma medida de fluxo e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm o modelo, a tabela de definições e a tabela de manipulação em sincronia.

## Ideias-chave

- Quatro medidas descrevem o fluxo: trabalho em andamento, vazão, idade do item de trabalho e tempo de ciclo, cada uma com uma definição curta e um relógio que precisa ser escrito.
- A idade do item de trabalho e o WIP são as medidas antecedentes; a vazão e o tempo de ciclo confirmam o que já aconteceu.
- Relate o tempo de ciclo e a idade como percentis e declare uma expectativa de nível de serviço a partir dos seus próprios dados.
- As mesmas medidas servem ao trabalho de projeto e ao de serviço, desde que você etiquete os tipos de trabalho e nomeie cada relógio.
- Toda medida pode ser manipulada movendo o relógio, dividindo itens ou escondendo trabalho; por isso pareie cada uma com uma barreira de proteção.
- Mantenha as medidas no nível da equipe e use-as para melhorar o fluxo de trabalho, nunca para classificar pessoas.

## Referências e leituras complementares

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Diagrama de fluxo cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Gráfico de acompanhamento](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Gráfico de controle](https://en.wikipedia.org/wiki/Control_chart).
