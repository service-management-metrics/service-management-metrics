# Trabalho operacional e trabalho não planejado

**Uma equipe que constrói e opera um serviço tem um só pool de capacidade; por isso torne visível a divisão entre mudança planejada e trabalho operacional, proteja-a com regras explícitas de interrupção e de expedição e leia a parcela de trabalho não planejado como um sinal sobre o sistema, e não como um veredicto sobre as pessoas.**

## Visão geral e motivação

Toda equipe que constrói e opera um serviço gasta seu tempo em dois grandes tipos de trabalho. O **trabalho de mudança** faz o serviço avançar: novas funcionalidades, melhorias planejadas, migrações e a remoção de fraquezas conhecidas. O **trabalho de operação**, também chamado de trabalho operacional, mantém o serviço funcionando: atender incidentes e requisições, responder a alertas, aplicar patches rotineiros, restaurar acessos e lidar com as tarefas manuais que o serviço ainda exige. Ambos são legítimos, e um serviço que tem usuários precisa dos dois. O problema começa quando ninguém consegue dizer quanto de cada um a equipe está fazendo, porque o plano passa então a supor em silêncio uma capacidade que o trabalho de operação já consumiu.

O trabalho também pode ser classificado conforme tenha sido previsto ou não. O **trabalho planejado** foi escolhido antes de o período começar, por exemplo durante o planejamento ou um compromisso trimestral. O **trabalho não planejado** chega durante o período e exige atenção que não foi orçada: um incidente de produção, um pedido urgente de uma parte interessada sênior, uma correção de segurança ou um defeito que bloqueia um cliente. Os dois eixos se sobrepõem, mas não são o mesmo. A maior parte do trabalho de operação é não planejada quanto ao momento, mesmo quando o volume é previsível, e parte do trabalho de operação, como a renovação agendada de um certificado, é totalmente planejada. O trabalho de mudança também pode ser não planejado, como quando uma regulamentação muda e a equipe precisa responder em semanas.

As visões ágil e ITIL descrevem a mesma pressão em palavras diferentes. No planejamento em intervalos de tempo fixos, um compromisso é uma previsão de capacidade, e o trabalho que chega no meio do período ou desloca algo ou é adiado. Num quadro de fluxo, o trabalho em andamento tem limites explícitos e muitas vezes há uma faixa dedicada a itens urgentes, e a pergunta é quantos itens urgentes o sistema consegue absorver antes que o fluxo colapse (veja o tópico 2.1, Medidas de fluxo). No ITIL 4 (a versão publicada em 2019), a gestão de incidentes, a gestão de requisições de serviço e a gestão de problemas descrevem como o trabalho de operação é recebido, priorizado e resolvido, enquanto a habilitação de mudanças e a prática de desenvolvimento e gestão de software governam a mudança planejada. As práticas descrevem fluxos de trabalho. Raramente dizem como uma única equipe deve dividir suas horas entre eles, e essa lacuna é onde este tópico trabalha.

Vários termos se repetem aqui. Uma **interrupção** é qualquer demanda que chega fora do ciclo de planejamento e tira uma pessoa do item em que estava trabalhando. A **carga de interrupções** é o efeito total dessas demandas sobre uma equipe em um período, medido por contagem, por horas ou pela proporção da capacidade que consomem. Uma **expedição** é um item de trabalho autorizado a furar a fila, geralmente porque seu [custo do atraso](https://en.wikipedia.org/wiki/Cost_of_delay) é alto e imediato. Uma **faixa de expedição** é uma regra, muitas vezes uma linha dedicada num quadro, que limita quantas expedições podem estar em andamento ao mesmo tempo. A **alocação de capacidade** é a divisão explícita da capacidade de uma equipe entre os tipos de trabalho, por exemplo uma parcela declarada para mudança planejada, uma para trabalho de operação e uma para melhoria.

O trabalho não planejado é o maior imposto oculto sobre a entrega planejada: cada interrupção custa o próprio tempo mais o tempo de recuperação perdido na [troca de tarefa](https://en.wikipedia.org/wiki/Task_switching_(psychology)), e a pesquisa sobre trabalho interrompido (Mark, Gudith e Klocke, 2008) descobriu que as pessoas compensam trabalhando mais depressa ao preço de mais estresse. Uma nota sobre direção. Uma alta parcela de trabalho não planejado não é um defeito em si. Um serviço recém-lançado, uma interrupção em curso ou um evento regulado podem legitimamente consumir a maior parte da capacidade de uma equipe por um tempo. O objetivo não é levar o trabalho não planejado a zero nem escondê-lo, mas vê-lo, precificá-lo e decidir deliberadamente quanto dele a equipe vai absorver e quanto a organização precisa corrigir a montante. O trabalho não planejado que se repete pela mesma causa é o mais útil de encontrar, porque aponta para um registro de problema, uma lacuna de monitoramento ou um item de [dívida técnica](https://en.wikipedia.org/wiki/Technical_debt) mais barato de remover do que de continuar pagando.

## Princípios-chave

- **A capacidade é finita e compartilhada.** Cada hora dada ao trabalho de operação ou a uma expedição é uma hora não dada à mudança planejada; por isso torne a divisão explícita e visível em vez de deixá-la emergir de quem grita mais alto.
- **Classifique o trabalho quando ele chega, não depois.** Etiquete cada item como planejado ou não planejado e como mudança ou operação no momento em que entra no sistema, porque a reclassificação no fim do período é uma lembrança, e não uma observação.
- **As interrupções têm um preço além da duração.** Conte o custo de recuperação da troca além dos minutos gastos e prefira projetos que agrupem ou encaminhem as interrupções a uma pessoa nomeada.
- **Expedite por regra, não por patente.** Uma faixa de expedição com limite e teste de entrada protege o fluxo; a expedição ilimitada por senioridade o elimina.
- **Reserve capacidade de propósito.** Uma margem planejada é mais honesta que um plano que supõe nenhuma.
- **Trate o trabalho não planejado repetido como um defeito do sistema.** Uma repetição semanal é candidata a um registro de problema ou a uma automação.
- **Meça equipes e serviços, nunca indivíduos.** A pessoa que atende à maioria das interrupções costuma ser a que mais sabe; classificá-la pune a coisa errada (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Definições de métricas

Sete métricas descrevem como a capacidade é dividida e perturbada. Cada uma precisa de uma regra de classificação escrita, porque todas dependem de como os itens são etiquetados. O período em cada fórmula é a mesma janela fixa da equipe, como uma semana, um mês ou um trimestre.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Razão de trabalho não planejado | Proporção dos itens de trabalho concluídos, por contagem, que não estavam no plano no início do período | itens concluídos no período que entraram no quadro ou no backlog depois de o período começar / todos os itens concluídos no período; o relógio começa no evento de planejamento e para no fim do período; itens cancelados e ainda abertos são excluídos | porcentagem | Rastreador de issues com horário de criação do item e o instantâneo do planejamento | Gestão de incidentes; gestão de requisições de serviço | Mudança de escopo; tipos de item de trabalho | Mensal |
| Aderência da alocação de capacidade | Quão de perto o esforço real combina com a divisão declarada entre trabalho de mudança, de operação e de melhoria | para cada categoria, diferença absoluta entre a parcela real e a acordada, somadas e divididas por dois; a parcela real é os itens concluídos (ou o esforço registrado onde a equipe o registra) naquela categoria / todos os itens concluídos; itens sem categoria são relatados à parte e não descartados | pontos percentuais | Campo de tipo de trabalho do rastreador de issues e registros de tempo onde existem | Melhoria contínua; gestão de capacidade e desempenho | Alocação de capacidade ou planejamento de capacidade | Mensal |
| Taxa de interrupções | Com que frequência demandas fora do plano chegam à equipe e às pessoas que fazem o trabalho planejado | interrupções recebidas pela equipe no período / dias úteis do período, em que uma interrupção é qualquer ticket, acionamento, pedido por mensagem ou solicitação registrada no canal de entrada da equipe e ainda fora do plano; duplicatas da mesma demanda subjacente são contadas uma vez | interrupções por dia útil | Registro do canal de entrada, fila de ITSM, sistema de alertas e registro de interrupções da equipe | Gestão de incidentes; gestão de requisições de serviço; monitoramento e gestão de eventos | Registro de interrupções ou acordo de trabalho da equipe | Semanal |
| Taxa de expedição | Proporção dos itens concluídos que usaram a faixa de expedição | itens concluídos no período que entraram na faixa de expedição / todos os itens concluídos no período; o relógio começa quando o item é marcado como expedição e para na conclusão; itens rebaixados para fora da faixa antes de o trabalho começar são contados à parte | porcentagem | Histórico de faixas do quadro ou do campo de prioridade | Gestão de incidentes; habilitação de mudanças (mudança emergencial) | Classe de serviço de expedição | Mensal |
| Deslocamento de trabalho planejado | Número de itens planejados empurrados para fora ou abandonados para abrir espaço para trabalho não planejado | itens planejados removidos do período, adiados ou deixados inacabados com o motivo registrado "deslocado por trabalho não planejado" no período (contagem); itens removidos porque o objetivo mudou são excluídos | contagem de itens | Histórico de mudanças do quadro, com o campo de motivo | Habilitação de mudanças; melhoria contínua | Proteção do objetivo de entrega; negociação de escopo | Mensal |
| Parcela de trabalho não planejado repetido | Proporção dos itens não planejados cuja causa coincide com um item não planejado anterior na janela de retrospecto | itens não planejados concluídos no período que se ligam ao mesmo registro de problema, regra de alerta ou etiqueta de causa que um item anterior dentro da janela de retrospecto (por exemplo 90 dias) / todos os itens não planejados concluídos no período; itens sem etiqueta de causa são relatados como uma contagem não classificada à parte | porcentagem | Registros de incidentes e de problemas do ITSM, etiquetas de causa do rastreador | Gestão de problemas; gestão de erros conhecidos | Itens de ação de retrospectiva; etiquetas de defeito recorrente | Mensal |
| Confiabilidade do compromisso planejado | Proporção dos itens que a equipe planejou para o período e que ela concluiu no período | itens planejados concluídos no período / itens planejados no início do período; itens acrescentados após o início são excluídos de ambas as contagens | porcentagem | Instantâneo do planejamento e histórico de conclusão do rastreador | Gestão de nível de serviço; habilitação de mudanças | Confiabilidade da previsão | Mensal |

As medidas de tempo deste tópico, como a idade de um item expedido, devem ser mostradas como percentis (por exemplo a mediana e o 85º percentil) e não como média, já que um incidente longo distorce uma média (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

## Recomendações

### Torne visível a divisão

**1. Etiquete cada item com dois campos na entrada.** Acrescente um tipo de trabalho (mudança, operação, melhoria) e um sinalizador de planejado (planejado, não planejado) ao formulário de entrada do rastreador ou da ferramenta de ITSM e torne ambos obrigatórios. As etiquetas são baratas quando definidas na criação e pouco confiáveis quando reconstruídas depois. Escreva a definição de cada valor em uma frase no acordo de trabalho da equipe e reveja-a quando as etiquetas deixarem de descrever o trabalho (veja o tópico 1.5, Fontes de dados e instrumentação).

**2. Congele um instantâneo do planejamento.** "Não planejado" só tem sentido em relação a um plano; por isso capture a lista de itens no início do período e guarde-a. Compare o trabalho concluído com o instantâneo, e não com o aspecto do quadro no fim.

### Aloque capacidade de propósito

**3. Combine uma alocação de capacidade e trate-a como uma hipótese.** Decida, como equipe e com o responsável pelo produto ou pelo serviço, aproximadamente que parcela vai para a mudança planejada, para o trabalho de operação e para a melhoria. Parta do que os dados mostram que a equipe vem de fato fazendo nos últimos vários períodos e depois escolha uma meta que se mova na direção desejada. Reveja a divisão a cada ciclo de planejamento; uma porcentagem fixa copiada do slide de outra equipe é um palpite, e não uma decisão.

**4. Reserve uma margem dimensionada pelo seu próprio histórico.** Use o registro de interrupções da própria equipe para dimensionar uma margem para trabalho não planejado, por exemplo olhando a faixa intermediária e a superior da parcela semanal não planejada em períodos recentes, e planeje apenas a capacidade que sobra. Uma margem regularmente não usada pode encolher; uma regularmente esgotada precisa de uma alocação maior ou da remoção de uma causa. A relação entre carga e atraso numa fila (veja a [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law) e o tópico 2.3, Trabalho em andamento e teoria das filas) explica por que um sistema operado em utilização total não tem espaço para absorver uma surpresa.

### Projete o caminho das interrupções

**5. Encaminhe as interrupções a um papel nomeado.** Alterne uma única pessoa, muitas vezes chamada de tratador de interrupções, engenheiro de plantão ou escudo, para receber as demandas por um dia ou uma semana, enquanto as outras protegem seu foco. O papel tem escopo escrito, uma nota de passagem e um limite de duração, para que a carga seja dividida de forma justa. As equipes em rodízio devem ligá-lo à prática de plantão (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

**6. Faça a triagem na porta.** As interrupções diferem enormemente em urgência. Aplique uma curta regra de [triagem](https://en.wikipedia.org/wiki/Triage) na entrada que faça três perguntas: um serviço está fora do ar ou um usuário está bloqueado, existe uma data que não pode mudar e a demanda pode esperar o próximo evento de planejamento? Os itens que falham em todas as três vão para o backlog e são planejados como qualquer outro trabalho. Nos termos do ITIL 4, esta é a etapa de priorização da gestão de incidentes e da gestão de requisições de serviço aplicada à entrada da própria equipe.

### Governe a faixa de expedição

**7. Dê à faixa de expedição um limite e um teste de entrada.** A faixa comporta no máximo um ou dois itens por vez, e um item só entra se seu custo do atraso for alto e imediato e o solicitante puder declará-lo. Um teste declarado permite que a equipe diga não ao pedido que é apenas barulhento. Se a faixa estiver sempre cheia, deixou de ser uma exceção, e a equipe deve rever o teste de entrada e as causas a montante. A faixa é uma [classe de serviço](https://en.wikipedia.org/wiki/Class_of_service) com regras próprias; veja a literatura Kanban para a ideia subjacente (Anderson, 2010).

### Remova as fontes

**8. Ligue os itens não planejados a uma causa e reveja as repetições.** Acrescente uma etiqueta de causa ou uma ligação a um registro de problema a todo item não planejado. Uma vez por mês, liste as causas que se repetem e envie as principais à gestão de problemas, ao backlog como itens de dívida técnica ou a melhorias de monitoramento (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 4.6, Dívida técnica e erros conhecidos). A parcela de trabalho não planejado repetido diz se essas correções pegam. O padrão é semelhante à eliminação do trabalho repetitivo (toil) descrita no livro SRE do Google, em que o trabalho operacional manual e repetitivo é tratado como algo a ser eliminado por engenharia; o livro sugere mantê-lo abaixo de uma parcela do tempo de um engenheiro (Beyer et al., 2016), uma diretriz que cada equipe deve testar contra os próprios dados em vez de adotá-la como meta.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Razão de trabalho não planejado | Acrescentar itens ao instantâneo do planejamento tarde para que contem como planejados; deixar o trabalho urgente sem registro para que nunca conte; etiquetar itens planejados como não planejados para desculpar um plano perdido | Instantâneo do planejamento congelado com carimbo de data e hora; contagem de não classificados; uma amostra de itens encerrados lida a cada trimestre para comparar a etiqueta com o que aconteceu |
| Aderência da alocação de capacidade | Mover itens entre categorias para combinar com a divisão acordada; dividir um item em vários para deslocar as parcelas; escolher uma divisão que a equipe já atinge | Definições de categoria fixas escritas no acordo de trabalho; uma amostra de descrições de itens contra sua categoria; confiabilidade do compromisso planejado |
| Taxa de interrupções | Transformar interrupções em favores silenciosos que nunca chegam ao registro; combinar várias demandas em uma só entrada; desencorajar as pessoas a pedir | Comparar o registro com o tráfego do canal de entrada e o histórico de alertas; perguntar à equipe na retrospectiva se o registro combina com a experiência dela |
| Taxa de expedição | Manter o trabalho urgente fora da faixa para parecer disciplinado, ou pôr tudo nela para ganhar velocidade; redefinir expedição para significar "importante" | Limite da faixa com teste de entrada; proporção dos itens expedidos que passaram no teste na revisão; deslocamento de trabalho planejado |
| Deslocamento de trabalho planejado | Registrar o deslocamento como mudança de escopo por escolha; deixar itens planejados falharem em silêncio sem motivo; evitar itens planejados com probabilidade de serem deslocados | Campo de motivo obrigatório em todo item removido ou inacabado; confiabilidade do compromisso planejado; revisão dos motivos na retrospectiva |
| Parcela de trabalho não planejado repetido | Usar uma etiqueta de causa grosseira para que as repetições se escondam, ou uma fina para que nada se repita; fechar o registro de problema para remover a ligação | Taxonomia de etiquetas de causa revista a cada trimestre; contagem de não classificados; verificação de recorrência depois que um registro de problema se fecha |
| Confiabilidade do compromisso planejado | Planejar pouco para terminar tudo; inflar estimativas; contar um item parcial como concluído; descartar itens difíceis antes de o período começar | Tamanho e valor dos itens planejados comparados ao longo do tempo; verificação do resultado do objetivo de entrega; razão de trabalho não planejado, para que um valor alto não seja lido como saúde quando o plano era tímido |

Uma leitura saudável é uma razão de trabalho não planejado que a equipe consegue explicar, uma faixa de expedição raramente cheia e uma parcela de repetições que cai depois das correções. Uma leitura suspeitamente perfeita é o que se deve investigar. Uma equipe que relata zero trabalho não planejado tem ou um serviço muito calmo ou um não acompanhado, e o modo de distinguir é comparar o registro com o histórico de alertas e tickets.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Alocação de capacidade fixa (porcentagens declaradas) | Fácil de explicar; protege o trabalho de melhoria de ser sufocado | Ignora a variação real; pode ser manipulada por rebatismo |
| Margem reservada dimensionada pelo histórico | Combina o plano com a carga real de interrupções | Exige vários períodos de dados confiáveis; pode esconder uma causa crônica |
| Tratador de interrupções em rodízio | Protege o foco da maior parte da equipe; divide a carga de forma justa | O trabalho planejado do próprio tratador estaciona; o papel precisa de passagem e apoio |
| Limite estrito de expedição | Mantém o fluxo previsível; força um custo do atraso declarado | Os solicitantes podem contorná-lo; uma emergência real pode parecer bloqueada |
| Contar itens em vez de esforço | Simples e difícil de inflar | Trata tamanhos muito diferentes como iguais |

A posição prática para a maioria das equipes é contar primeiro os itens, acrescentar esforço apenas onde as contagens de itens enganam, proteger uma pequena margem e uma pequena faixa de expedição e usar a etiqueta de causa para atacar a maior repetição.

## Perguntas para discutir com sua equipe

**1. Que parcela do trabalho concluído no último período foi não planejada, e como sabemos?**
Abra o instantâneo do planejamento ao lado da lista de itens concluídos e conte os itens que não estavam no plano. Compare o resultado com a impressão de cada pessoa sobre o período; os dois muitas vezes diferem. O facilitador deve perguntar quantos itens nunca foram registrados, porque a resposta honesta molda todos os outros números.

**2. Quais as três fontes de interrupções que mais nos custam, e quem poderia removê-las?**
Liste as fontes por contagem e pelo esforço que absorveram, como alertas, requisições repetidas, escalonamentos e pedidos ad hoc das partes interessadas. Marque cada uma como removível, encaminhável ou inevitável. O facilitador deve insistir em um responsável nomeado fora da equipe para qualquer fonte que a equipe não consiga corrigir sozinha.

**3. Que divisão entre trabalho de mudança, de operação e de melhoria nós realmente queremos?**
Compare a divisão que os dados mostram com a divisão que as pessoas acreditam ter e com a divisão que a liderança espera. Discuta qual tipo de trabalho a equipe largaria primeiro sob pressão, já que isso revela as prioridades reais. Escolha uma meta para o próximo período e um modo de conferi-la.

**4. Qual é a nossa regra para a faixa de expedição, e quem decide?**
Leia a regra atual em voz alta ou note que não existe nenhuma. Peça as três últimas expedições e teste cada uma contra um custo do atraso declarado. Discuta o que a equipe faz quando uma pessoa sênior pede um furo de fila que falha no teste e quem sustenta a decisão.

**5. Quando somos interrompidos, quanto isso nos custa depois que a interrupção termina?**
Peça às pessoas que descrevam quanto tempo leva para recuperar o fio de uma tarefa depois de uma interrupção típica.

**6. Que item não planejado voltou mais de uma vez, e o que o impediria?**
Pegue o último trimestre de itens não planejados e procure repetições por causa. Escolha a de maior esforço total e rastreie por que ela se repete: um alerta ausente, um defeito não corrigido, uma etapa manual ou um problema de fornecedor. Decida se vai para um registro de problema, para o backlog ou para uma conversa com o fornecedor.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega sentem o trabalho não planejado como planos quebrados e previsões escorregando. Elas se beneficiam de etiquetar na entrada, de um instantâneo do planejamento congelado e de uma previsão construída com uma margem baseada no histórico (veja o tópico 2.5, Métricas de previsão e planejamento de entregas). O registro de deslocamentos mostra aos responsáveis pelo produto quanto custou cada pedido tardio.

### Equipes de serviço e operações

As equipes de operações carregam a maior parte do trabalho de operação. Precisam de um tratador de interrupções nomeado, de uma regra de triagem e de um caminho das requisições e alertas recorrentes até as correções (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas). A parcela de repetições é seu argumento mais forte em favor de investir na gestão de problemas.

### Liderança e governança

Os líderes definem a alocação real pelos pedidos que fazem e pelos prazos que aceitam. Devem pedir a razão e suas causas, financiar o trabalho de melhoria que remove interrupções repetidas e evitar usar expedições como o modo normal de fazer as coisas.

### Clientes e usuários

Os clientes veem o trabalho não planejado como interrupções do serviço, respostas lentas e funcionalidades atrasadas. Ganham quando a equipe tem espaço para corrigir causas e precisam de um caminho justo para levantar urgência. Os acordos de nível de serviço (veja [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement)) devem refletir a carga de interrupções que a equipe carrega (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma seguradora regional de saúde opera uma plataforma de sinistros com uma equipe de produto de sete pessoas e uma central de serviços compartilhada. A equipe constrói novas funcionalidades e também dá suporte à plataforma em produção. Todos os números deste exemplo são ilustrativos.

Durante seis semanas, a confiabilidade do compromisso planejado da equipe caiu de cerca de 85% para 55%, e o responsável pelo produto começou a questionar as estimativas da equipe. O líder da equipe levanta o histórico do rastreador. Usando os instantâneos de planejamento congelados, a razão de trabalho não planejado é de 41% por contagem no último período, contra uma lembrança da equipe de "talvez um quinto". A contagem de não classificados é de 9%; por isso a razão é razoavelmente confiável.

Dividir os itens não planejados por causa mostra que 14 de 24 eram trabalho de operação e que, destes, 9 remontam a um único job em lote de envio de sinistros que falha depois de uma mudança de formato de dados por um parceiro e é reiniciado à mão a cada vez. A parcela de trabalho não planejado repetido é de 58%. A taxa de interrupções é de 6 por dia útil, e 4 delas chegam aos engenheiros que fazem o trabalho planejado, porque a central de serviços escala diretamente para quem responder primeiro. A faixa de expedição comporta dois itens ao mesmo tempo na maioria dos dias, e a taxa de expedição é de 23%. O deslocamento de trabalho planejado é de 7 itens no período, dos quais 5 trazem o motivo "deslocado por trabalho não planejado".

A equipe toma quatro decisões com o responsável pelo produto e o responsável pelo serviço. Primeiro, um engenheiro por vez passa a ser o tratador de interrupções, com escopo escrito e uma nota de passagem, e os escalonamentos vão só para essa pessoa. Segundo, a faixa de expedição é limitada a um item, com um teste de entrada que exige um custo do atraso declarado, e cada expedição registra o item que deslocou. Terceiro, a falha do job em lote é levantada como um registro de problema, com uma correção e uma conversa com o parceiro colocadas no backlog como trabalho de melhoria, usando 15% da capacidade, que é a parcela que a equipe escolhe como sua primeira alocação para melhoria. Quarto, a equipe planeja o próximo período de trabalho com uma margem dimensionada pela faixa superior da sua parcela não planejada recente, e não com carga total.

Seis semanas depois, a razão de trabalho não planejado é de 27%, a parcela de repetições é de 22%, a taxa de interrupções que chega aos trabalhadores do planejado é de 1,5 por dia e a confiabilidade do compromisso planejado é de cerca de 78% (tudo ilustrativo). A equipe não voltou aos 85% anteriores e diz isso.

O risco de manipulação que a equipe pega: no segundo período sob o novo arranjo, a taxa de interrupções cai bruscamente, e o líder da equipe nota que as pessoas estão mandando mensagem direto ao tratador, de modo que os favores nunca chegam ao registro. Comparar o registro com o canal de entrada e o histórico de alertas mostra que o volume real continuava o mesmo. A equipe combina que o tratador redirecione as mensagens diretas para o canal de entrada. A falha estava no projeto do caminho, e não em alguma pessoa.

## Ágil, IA, automação e análise

### Ágil

Uma equipe que constrói e opera um serviço tem um só pool de capacidade, e um ritmo sustentável exige limites honestos para a interrupção. Um passo prático é combinar uma divisão de capacidade com as partes interessadas e rever a parcela não planejada na conversa regular de melhoria. O cuidado é que uma meta para a parcela não planejada pode empurrar as equipes a rotular o trabalho operacional como planejado.

### IA

A IA pode deslocar trabalho entre o planejado e o não planejado, por exemplo automatizando correções rotineiras e acrescentando tarefas de revisão e supervisão. Acompanhe a parcela não planejada e a parcela de trabalho não planejado repetido antes e depois das mudanças de IA e inclua o tempo gasto corrigindo a produção da IA como uma categoria própria. O cuidado é que o trabalho de correção oculto pode engolir a capacidade que a IA deveria liberar.

### Automação

Capture automaticamente o tipo de trabalho a partir do rastreador com um conjunto pequeno e acordado de categorias. Meça a automação pelo trabalho não planejado que ela remove e pelos novos incidentes que causa. O cuidado é que uma remediação automatizada que reinicia serviços sem registrar a causa faz o trabalho não planejado repetido parecer trabalho novo.

### Análise

Mostre a parcela de trabalho não planejado ao longo do tempo e as causas dos itens repetidos. A decisão informada é quanta capacidade reservar e quais fontes de interrupção remover. O cuidado é que as categorias são escolhidas por pessoas; por isso audite uma amostra de itens quanto à classificação honesta.

## Olhar setorial

**Startup.** Quase todo trabalho parece urgente e as mesmas poucas pessoas fazem o trabalho de mudança e o de operação. Mantenha a classificação em duas etiquetas e defina um limite explícito para as expedições. A razão de trabalho não planejado é a evidência para dizer "podemos fazer o roteiro ou a carga de suporte, mas não os dois".

**Pequena empresa.** Um administrador ou uma pequena equipe costuma tratar todas as requisições. Use os tipos de ticket da ferramenta como classificação, registre as interrupções por um mês para aprender o padrão e reserve um bloco diário fixo para o trabalho planejado. Peça aos fornecedores os relatórios de volume e de causas repetidas.

**Grande empresa.** O trabalho não planejado de uma equipe costuma ser trabalho planejado de outra. Combine definições compartilhadas, relate por equipe e por serviço e financie as correções no nível em que a causa mora (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

**Governo e setor público.** A capacidade pode ser fixada por tetos de efetivo, e o trabalho de operação pode ser definido por lei ou por achados de auditoria. Faça disso parte da alocação, documente as regras de classificação e mantenha uma trilha de auditoria (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é uma entrega previsível: um plano que ignora a carga de interrupções é perdido repetidamente, e o trabalho não planejado visível dá à equipe uma voz mais forte quando pede tempo para remover causas.

O custo de coletar essas medidas é modesto quando as etiquetas e o instantâneo do planejamento fazem parte do fluxo de trabalho normal. Os principais custos são o tempo para combinar definições, a disciplina de etiquetar na entrada, um pouco de ferramental para unir dados do rastreador e do ITSM (veja o tópico 1.5, Fontes de dados e instrumentação) e as horas do tratador de interrupções, cujo trabalho planejado desacelera. Acrescentar registros de tempo por hora custa bem mais e costuma gerar ressentimento; por isso acrescente-os apenas se as contagens de itens se mostrarem enganosas. O custo total de propriedade é dominado pelo tempo das pessoas; por isso conte-o.

O retorno aparece em padrões que a equipe pode medir por conta própria, e não em uma cifra presumida. Procure uma parcela de trabalho não planejado repetido em queda depois de correções de problemas, um aumento da confiabilidade do compromisso planejado, menos itens planejados deslocados e menos interrupções chegando às pessoas no trabalho planejado. Onde as horas são conhecidas, o esforço recuperado de uma causa recorrente removida pode ser precificado pelo custo por hora da própria equipe e confrontado com o esforço da correção (veja o tópico 7.5, Custo de serviço e economia unitária, e o tópico 7.7, Retorno do investimento e business case). Não tome emprestadas porcentagens do setor para o trabalho não planejado; nenhuma cifra de outra organização substitui o seu próprio histórico.

## Antipadrões e armadilhas

- **Tratar todo trabalho não planejado como fracasso.** Parte dele é o serviço fazendo seu trabalho, e uma meta de zero empurra o trabalho para fora do registro. Em vez disso, pergunte que parte é esperada e que parte é evitável e defina uma margem para a primeira.
- **Cultura de herói.** A pessoa que salva toda emergência se torna indispensável, cansada e um ponto único de falha. Em vez disso, divida o papel de interrupções em rodízio e premie a remoção de causas.
- **Tudo é expedição.** Uma faixa sempre cheia é apenas uma segunda fila. Em vez disso, defina um limite, exija um custo do atraso declarado e reveja o teste de entrada todo mês.
- **Planejar com utilização total.** Um plano sem folga garante que toda surpresa desloca algo. Em vez disso, dimensione uma margem pelo seu histórico de interrupções e planeje a capacidade que sobra.
- **Classificar depois do fato.** Etiquetas acrescentadas no fim do período refletem memória e humor. Em vez disso, exija as etiquetas na entrada e congele o instantâneo do planejamento.
- **Absorver a demanda em silêncio.** Favores que nunca chegam ao registro tornam a carga invisível e o planejamento errado. Em vez disso, faça de um único caminho de entrada a regra e redirecione os pedidos de canais paralelos para ele.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Classificação e visibilidade | O trabalho não é etiquetado; o trabalho não planejado é sentido, não contado | Algumas equipes etiquetam trabalho planejado e não planejado com palavras próprias | Uma definição escrita de tipos de trabalho e do sinalizador de planejado, aplicada na entrada com um instantâneo do planejamento | Razão não planejada e contagem de não classificados acompanhadas e revistas a cada período | Definições compartilhadas entre equipes e fornecedores e revistas quando deixam de informar decisões |
| Alocação de capacidade | Supõe-se que a capacidade esteja totalmente disponível para o trabalho planejado | Uma margem aproximada é aplicada por algumas equipes | Uma divisão acordada entre mudança, operação e melhoria, com uma margem dimensionada pelo histórico | Aderência revista e divisão ajustada com os responsáveis pelo produto e pelo serviço | Alocação negociada entre equipes que dividem plataformas, serviços e pessoas |
| Tratamento de interrupções e expedições | Qualquer um interrompe qualquer um; a urgência é definida pela senioridade | Existe, em algumas equipes, o hábito de uma pessoa de plantão ou de uma linha urgente | Um papel de interrupções nomeado, uma regra de triagem e uma faixa de expedição com limite e teste de entrada | Taxa de expedição, deslocamento e taxa de interrupções revistos contra uma barreira de proteção | Roteamento de interrupções e regras de expedição coordenados entre equipes, com plantão e escalonamento compartilhados |
| Remoção de causas | Os mesmos problemas se repetem e são resolvidos com heroísmo | Algumas repetições são notadas e discutidas em retrospectivas | Itens não planejados trazem uma etiqueta de causa e as principais repetições vão para a gestão de problemas | Parcela de repetições acompanhada e correções financiadas como trabalho de melhoria planejado | Causas rastreadas entre equipes, fornecedores e clientes, e a melhoria é rotina |

## Lista de verificação

- [ ] Todo item de trabalho traz um tipo de trabalho (mudança, operação, melhoria) e um sinalizador de planejado, definidos na entrada.
- [ ] As definições de planejado, não planejado, mudança e operação estão escritas no acordo de trabalho da equipe.
- [ ] Um instantâneo do planejamento é congelado no início de cada período e guardado.
- [ ] A razão de trabalho não planejado é relatada como tendência, ao lado da contagem de não classificados.
- [ ] A equipe e seus responsáveis combinaram uma alocação de capacidade e a reviram no último trimestre.
- [ ] Existe um único caminho de entrada, e os pedidos de canais paralelos são redirecionados para ele.
- [ ] Um papel de interrupções com escopo escrito alterna entre a equipe.
- [ ] A faixa de expedição tem um limite, um teste de entrada e um registro do que cada expedição deslocou.
- [ ] Os itens não planejados trazem uma etiqueta de causa ou uma ligação a um registro de problema, e as repetições são revistas todo mês.
- [ ] As medidas são relatadas no nível da equipe e do serviço e nunca usadas para classificar indivíduos.

## Prompts de IA

**Projete uma classificação de trabalho para a entrada.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Analise um registro de interrupções em busca de padrões.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Redija uma política de faixa de expedição.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico é dono de uma métrica relacionada, como o volume de incidentes ou o trabalho repetitivo, e a barreira de proteção que pertence ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma versão editada deste tópico mantém em sincronia seus relógios, regras de classificação e tabela de manipulação.

## Ideias-chave

- O trabalho planejado e o não planejado, e o de mudança e o de operação, dividem um só pool de capacidade; por isso torne a divisão visível e combine-a de forma deliberada.
- Etiquete o trabalho na entrada e congele um instantâneo do planejamento, já que "não planejado" só significa algo contra um plano registrado.
- As interrupções custam tempo de recuperação além dos minutos; por isso encaminhe-as a um papel nomeado e faça a triagem na porta.
- Uma faixa de expedição precisa de um limite, de um teste de entrada e de um registro do que cada expedição deslocou.
- O trabalho não planejado repetido é o sinal mais forte para a gestão de problemas e o trabalho de melhoria, e a parcela de repetições mostra se as correções pegam.
- Relate no nível da equipe e do serviço, compare uma equipe com o próprio histórico e nunca classifique indivíduos.

## Referências e leituras complementares

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (desenvolvimento)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Custo do atraso](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Troca de tarefa (psicologia)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Dívida técnica](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triagem](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Classe de serviço](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
