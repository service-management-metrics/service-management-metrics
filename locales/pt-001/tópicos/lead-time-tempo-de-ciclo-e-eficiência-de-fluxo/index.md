# Lead time, tempo de ciclo e eficiência de fluxo

**Lead time, tempo de ciclo e eficiência de fluxo só significam algo quando cada um tem um início e um fim escritos, uma distribuição em vez de uma média e uma visão da espera que ocupa a maior parte do tempo decorrido.**

## Visão geral e motivação

Quase toda equipe quer saber quanto tempo o trabalho leva. A pergunta parece simples e produz discussões, porque "quanto tempo" depende de quem pergunta e de onde se aperta o cronômetro. Um cliente conta a partir do momento em que pediu. Um desenvolvedor conta a partir do momento em que pegou o trabalho. Um gerente de operações conta a partir do momento em que o ticket foi atribuído a uma fila. Todos têm razão quanto ao próprio relógio, e os três dão números diferentes para o mesmo trabalho.

O [lead time](https://en.wikipedia.org/wiki/Lead_time) é o tempo decorrido entre a chegada de uma requisição e o seu atendimento, visto do lado de quem pediu. O [tempo de ciclo](https://en.wikipedia.org/wiki/Cycle_time) é o tempo decorrido entre o momento em que a equipe se compromete com um trabalho e o momento em que ele termina, visto do lado da equipe que o faz. A diferença entre os dois é o tempo que a requisição esperou antes de a equipe começar. A eficiência de fluxo é a proporção do tempo decorrido em que alguém estava de fato trabalhando no item, em oposição ao item esperando. Se um item levou 10 dias do início ao fim e foi trabalhado por 1 dia, sua eficiência de fluxo é de 10%. O tempo de trabalho ativo (touch time) é a parte trabalhada. O tempo de espera é todo o resto.

O [desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development) e o Kanban Guide levaram essas ideias da manufatura para o trabalho do conhecimento. As práticas do ITIL falam em tempo de resolução, tempo de atendimento e metas de nível de serviço, e as equipes ágeis falam em tempo de ciclo e itens de trabalho. Este tópico dá um único conjunto de definições que resiste quando um incidente, uma requisição, uma mudança e uma história de usuário dividem a mesma reunião.

O tempo decorrido tem uma propriedade que surpreende as pessoas na primeira vez que o medem. Na maior parte do trabalho do conhecimento e do trabalho de serviço, o item passa a maior parte da vida esperando: por uma decisão, um revisor, um ambiente, um fornecedor, uma janela de manutenção ou simplesmente por uma pessoa ocupada com outra coisa. Tornar essa espera visível é a coisa mais útil que essas métricas fazem. Uma equipe que não vê o próprio tempo de espera tende a tentar melhorar trabalhando mais rápido, o que pouco afeta um sistema em que 90% do tempo decorrido é gasto em filas. O comportamento das filas é tratado em profundidade no tópico 2.3, Trabalho em andamento e teoria das filas, e a visão completa do fluxo de valor está no tópico 2.4, Métricas de fluxo de valor.

As medidas de tempo são relatadas como percentis, como a mediana e o [percentil](https://en.wikipedia.org/wiki/Percentile) 85 ou 95, pelas razões do tópico 1.6, Letramento estatístico para métricas de serviço. Os carimbos de data e hora brutos vêm das fontes do tópico 1.5, Fontes de dados e instrumentação. As medidas de fluxo de trabalho em andamento, vazão e idade do item de trabalho estão no tópico 2.1, Medidas de fluxo, e a medida DORA de lead time de mudança está no tópico 2.8, Métricas DORA. Este tópico trata das próprias medidas de tempo: como defini-las para que sejam comparáveis, onde seus relógios começam e param e como expor a espera dentro delas.

## Princípios-chave

- **Nomeie o relógio antes de ler o número.** Toda medida de tempo tem um evento de início, um evento de parada e uma lista de exclusões. Uma cifra sem eles é uma opinião.
- **O lead time pertence ao cliente, o tempo de ciclo pertence à equipe.** Mantenha os dois e rotule sempre qual deles um gráfico mostra, porque a diferença entre eles é um sinal em si.
- **Relate distribuições, nunca apenas uma média.** A mediana descreve o item típico. Um percentil alto descreve o risco que o cliente de fato carrega.
- **A espera é o principal achado.** A eficiência de fluxo costuma ser baixa, e a resposta é remover filas e transferências, não pedir às pessoas que se apressem.
- **Estados de pausa são decisões de projeto.** Se o relógio pode ser parado movendo um item para um status de "espera", esse status será usado; por isso conte com que frequência e por quem ele é usado.
- **Compare um item com os de seu próprio tipo.** Um incidente, uma requisição padrão, uma mudança e uma funcionalidade têm formas diferentes. Segmente por tipo de trabalho antes de comparar qualquer coisa.
- **Meça sistemas, não pessoas.** As medidas de tempo descrevem como o trabalho flui por uma equipe ou serviço. Nunca são uma classificação de indivíduos.

## Definições de métricas

A tabela abaixo usa um só vocabulário para itens de trabalho ágeis e registros do ITIL. "Item de trabalho" significa qualquer registro que se move por um fluxo de trabalho: uma história, uma tarefa, um incidente, uma requisição de serviço, uma mudança ou um registro de problema. Todas as durações são tempo corrido decorrido, salvo indicação em contrário, e cada uma é relatada como mediana e um percentil alto.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time | Tempo decorrido da chegada de uma requisição até sua entrega ao solicitante | carimbo de entrega menos carimbo de chegada da requisição, por item de trabalho; o relógio começa quando a requisição é registrada e para quando o solicitante pode usar o resultado; itens ainda abertos e itens cancelados antes da entrega são excluídos e contados à parte | dias ou horas | Histórico da ferramenta de ITSM ou do rastreador de issues | Gestão de requisições de serviço; gestão de incidentes; habilitação de mudanças | Lead time no quadro da equipe; tempo da requisição ao release | Semanal, revisto mensalmente |
| Tempo de ciclo | Tempo decorrido do momento em que a equipe começa o trabalho até o momento em que ele termina | carimbo de término menos carimbo de início, por item de trabalho; o relógio começa na primeira passagem para um estado de trabalho ativo e para na primeira passagem para um estado concluído; o tempo antes do início e depois do estado concluído é excluído | dias ou horas | Histórico de estados do rastreador ou do quadro | Gestão de incidentes; gestão de requisições de serviço; habilitação de mudanças | Tempo de ciclo (veja o tópico 2.1, Medidas de fluxo) | Semanal |
| Tempo de trabalho ativo | Tempo em que uma pessoa ou uma automação está trabalhando ativamente no item | soma dos intervalos que o item passa em estados classificados como trabalho ativo; estados de espera, bloqueados e de fila são excluídos | horas | Histórico de estados do rastreador, com cada estado classificado como ativo ou de espera | Gestão de incidentes; gestão de requisições de serviço | Tempo de processo em um mapa de fluxo de valor | Amostra mensal |
| Tempo de espera | Tempo em que o item está em uma fila, bloqueado ou pausado | tempo de ciclo menos tempo de trabalho ativo, por item de trabalho; n/a para itens sem início registrado | dias ou horas | Histórico de estados do rastreador | Gestão de incidentes; gestão de nível de serviço | Tempo de espera ou tempo bloqueado em um quadro | Mensal |
| Eficiência de fluxo | Proporção do tempo de ciclo gasta em trabalho ativo | soma do tempo de trabalho ativo / soma do tempo de ciclo, para itens concluídos no período; itens com histórico de estados ausente são excluídos e contados à parte | porcentagem | Histórico de estados do rastreador | Melhoria contínua; gestão de requisições de serviço | Eficiência de fluxo da prática enxuta | Mensal |
| Proporção de pausa do relógio | Proporção do tempo de ciclo durante a qual o relógio formal de serviço esteve pausado | soma das durações das pausas / soma do tempo de ciclo, para itens concluídos no período; as pausas são os status definidos nas regras de relógio escritas | porcentagem | Histórico de status da ferramenta de ITSM | Gestão de nível de serviço; gestão de incidentes | Tempo de coluna bloqueada ou em espera | Mensal |

O início do relógio do tempo de ciclo é uma decisão da equipe que precisa ser escrita. O relógio formal de um acordo de nível de serviço (SLA) muitas vezes pausa enquanto um item aguarda o cliente; por isso este tópico relata a proporção de pausa em vez de descartar esse tempo. O tempo de trabalho ativo é inferido dos estados, de modo que sua exatidão depende de quão bem os estados descrevem o trabalho.

## Recomendações

### Defina os relógios

**1. Escreva o início e a parada de cada relógio.** Para o lead time, o início é a chegada da requisição, conforme registrada pelo primeiro sistema que o solicitante toca, e a parada é o momento em que o solicitante pode usar o resultado. Para o tempo de ciclo, o início é a primeira passagem para um estado ativo e a parada é a primeira passagem para um estado concluído. Ponha os dois no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) e mostre a definição sob cada gráfico.

**2. Combine o que "concluído" significa para cada tipo de trabalho.** Uma mudança está concluída quando está em execução em produção e verificada, não quando o código é integrado. Um incidente está concluído quando o serviço é restabelecido para o usuário, não quando o ticket é encerrado por uma rotina em lote na sexta-feira. Uma requisição está concluída quando o solicitante tem aquilo que pediu. Se "concluído" difere por equipe, os tempos de ciclo não podem ser comparados entre elas.

**3. Mantenha o lead time e o tempo de ciclo e observe a diferença.** A diferença entre eles é a espera de compromisso: o tempo que uma requisição fica parada antes de a equipe começar. Um tempo de ciclo curto ao lado de um lead time longo diz que a equipe trabalha com eficiência no que começa e que a entrada é o gargalo. Um tempo de ciclo longo ao lado de um lead time curto diz que as requisições são aceitas rapidamente e depois emperram dentro da equipe.

### Relate o tempo com honestidade

**4. Use percentis e diga quais.** Relate a mediana e o percentil 85 ou 95, por exemplo "metade dos itens terminou em até 4 dias e 85% em até 11 dias". Essa frase também é uma previsão: um item novo tem cerca de 85% de chance de terminar em até 11 dias se o sistema continuar o mesmo. Uma média não dá essa frase e se move muito quando surge um único valor atípico (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**5. Plote cada item, e não apenas o resumo.** Um gráfico de dispersão do tempo de ciclo contra a data de término mostra a forma do sistema de relance: agrupamentos, uma deriva lenta para cima, um degrau repentino após uma mudança de processo. Os números-resumo pertencem ao lado do gráfico. Uma ferramenta que oferece apenas uma linha de média elimina a informação de que a equipe mais precisa.

**6. Segmente por tipo de trabalho e por classe de serviço.** Um incidente urgente, uma requisição padrão, uma mudança planejada e uma história de pesquisa têm tempos esperados diferentes. Divida os dados por tipo e por prioridade, onde a prioridade muda o tratamento do trabalho, antes de procurar padrões. Populações misturadas produzem uma distribuição ampla que não descreve a experiência de ninguém.

### Exponha a espera

**7. Classifique todo status como ativo, de espera ou concluído.** Esse é o trabalho que torna possível a eficiência de fluxo. "Em desenvolvimento" e "em revisão com um revisor trabalhando" são ativos. "Aguardando revisão", "aguardando aprovação", "bloqueado" e "aguardando o cliente" são de espera. Revise a classificação com a equipe, porque os rótulos de um fluxo de trabalho raramente contam toda a verdade, e um estado chamado "em andamento" muitas vezes esconde um item em que ninguém toca há uma semana.

**8. Calcule a eficiência de fluxo como diagnóstico, não como meta.** Calcule-a numa amostra ou em todos os itens concluídos e use-a para achar onde a espera mora: qual estado retém os itens por mais tempo e qual transferência o precede. Espere números baixos e não estabeleça uma meta como "chegar a 40%". Elevar o número rebatizando estados de espera como ativos é fácil e inútil, e os ganhos reais vêm de remover a própria fila (veja o tópico 2.4, Métricas de fluxo de valor).

**9. Conte separadamente o tempo bloqueado e o pausado.** Acompanhe com que frequência os itens entram em um estado bloqueado ou pausado, quanto tempo ficam e qual era o motivo. Uma curta lista de motivos recorrentes de bloqueio, como aguardar uma aprovação, um ambiente ou um fornecedor, diz o que consertar e com quem falar. Relate a proporção de pausa ao lado de qualquer resultado de nível de serviço que exclua o tempo pausado (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Use bem os números

**10. Controle a fila para controlar o tempo.** O tempo através de um sistema sobe quando o trabalho em andamento sobe, uma relação exposta na [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law), que relaciona o número médio de itens no sistema, a taxa de chegada ou de conclusão e o tempo médio que cada item passa nele. Limitar o trabalho em andamento é, portanto, a alavanca mais direta sobre o tempo de ciclo (veja o tópico 2.3, Trabalho em andamento e teoria das filas). Mudar a meta da métrica sem mudar a fila só muda o incentivo a relatar errado.

**11. Use distribuições de tempo de ciclo para previsões e para metas de nível de serviço.** Se o tempo de ciclo no 85º percentil das requisições padrão é de 6 dias, um compromisso de 5 dias será perdido com frequência, e um compromisso de 8 dias será cumprido com folga. Baseie uma meta interna no que o sistema fez e depois trabalhe no sistema para mover a distribuição (veja o tópico 3.5, Métricas de atendimento de requisições de serviço, e o tópico 4.3, Métricas de habilitação de mudanças).

**12. Trate uma definição alterada como um evento.** Se o início ou a parada de um relógio muda, marque isso em todo gráfico e reapresente o histórico a partir dos eventos brutos sempre que possível. Sem essa disciplina, uma linha de tendência mostra o efeito de uma mudança de definição como se fosse uma melhoria ou uma piora (veja o tópico 1.5, Fontes de dados e instrumentação).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Lead time | Atrasar a criação do registro da requisição para que o relógio comece tarde; encerrar e reabrir itens para reiniciar o relógio; dividir uma requisição em muitas minúsculas | Comparar os registros de requisição com o primeiro contato por e-mail ou chat numa amostra; acompanhar a taxa de reabertura; acompanhar o tamanho e a contagem de itens por requisição |
| Tempo de ciclo | Começar o relógio tarde, movendo itens para "em andamento" só no fim; deixar itens fora do quadro até quase prontos; fatiar o trabalho em pedaços que não entregam valor por si sós | Idade do item de trabalho para itens abertos (veja o tópico 2.1, Medidas de fluxo); conferir se os itens concluídos são utilizáveis pelo solicitante; comparar o lead time com o tempo de ciclo |
| Tempo de trabalho ativo | Classificar estados de espera como ativos, ou registrar atividade para parecer ocupado | Revisar a classificação de estados com a equipe a cada trimestre; amostrar itens e comparar a atividade registrada com commits, comentários e agendas |
| Tempo de espera | Criar novos status para que o tempo de espera caia numa lacuna não medida; mover itens em espera para um status fora do fluxo de trabalho | Contar status e transições não documentados (veja o tópico 1.5, Fontes de dados e instrumentação); conferir numa amostra que o tempo de ciclo seja igual ao tempo de trabalho ativo mais o tempo de espera |
| Eficiência de fluxo | Reclassificar a espera como ativa; selecionar na amostra apenas itens rápidos; terminar primeiro os itens fáceis para elevar a razão | Classificação de estados fixa com registro de mudanças; calculá-la sobre todos os itens concluídos; relatá-la com o tempo de ciclo no 85º percentil e a idade dos itens abertos |
| Proporção de pausa do relógio | Pausar o relógio formal de serviço por razões que não dependem do cliente, como transferências internas, para cumprir o SLA | Auditar os motivos de pausa numa amostra; relatar lado a lado o tempo decorrido e o tempo de SLA; revisar a visão do próprio cliente sobre o tempo de resolução (veja o tópico 5.1, Métricas de SLA, OLA e XLA) |

Uma leitura saudável mostra um lead time e um tempo de ciclo que se movem juntos, uma diferença entre eles que a equipe consegue explicar, um 85º percentil que é um múltiplo estável da mediana e uma eficiência de fluxo baixa mas crescente à medida que filas específicas são removidas. Sinais de alerta são uma mediana que melhora enquanto o percentil alto piora, uma proporção de pausa que cresce no fim de cada mês e uma eficiência de fluxo que dá um salto sem nenhuma mudança na forma de trabalhar. Quando um número melhora, alguém deve poder apontar a mudança no trabalho que o explica. Uma melhoria movida por manipulação geralmente falhará nesse teste. A psicologia mais ampla é tratada no tópico 1.2, A lei de Goodhart e a psicologia das métricas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Lead time do ponto de vista do solicitante | Combina com o que o cliente sente; difícil de melhorar mudando rótulos internos | O evento de início está fora do controle da equipe e pode ser mal registrado |
| Tempo de ciclo a partir do compromisso da equipe | Sob o controle da equipe; fácil de calcular a partir do histórico do quadro | Ignora o atraso de entrada; uma equipe pode parecer rápida enquanto as requisições esperam |
| Tempo decorrido (relógio corrido) | Simples, comparável e combina com a experiência do cliente | Inclui noites e fins de semana, o que pode enganar para equipes com horários diferentes |
| Relógio em horário comercial | Combina com níveis de serviço com equipe de plantão e padrões de sobreaviso | Exige um calendário por equipe; esconde a espera real sentida pelo cliente |
| Eficiência de fluxo como razão | Mostra quanto do tempo é espera num único número intuitivo | Depende da classificação de estados; fácil de inflar; pode ser mal lida como meta |
| Relato por percentis | Mostra o risco e apoia previsões | Exige itens suficientes por período; mais difícil de ler para alguns públicos do que uma média |

O conselho prático é começar com o tempo decorrido, acrescentar uma visão em horário comercial apenas onde um nível de serviço a exigir e relatar tanto o lead time quanto o tempo de ciclo em um percentil alto. Use a eficiência de fluxo como ponto de partida de conversa em uma revisão, com a classificação de estados sobre a mesa, e evite pô-la num scorecard.

## Perguntas para discutir com sua equipe

**1. Onde o nosso relógio de lead time começa, e onde o cliente acha que ele começa?**
Pegue três requisições recentes e rastreie-as do primeiro contato à entrega. Marque o momento em que a requisição foi registrada no sistema de registro. Compare a diferença entre o primeiro contato e a criação do registro. O facilitador deve procurar filas ocultas em e-mail, chat ou caixa de entrada compartilhada que nunca aparecem em uma métrica.

**2. O que "concluído" significa para cada tipo de trabalho que tratamos?**
Liste os tipos de trabalho, como incidentes, requisições, mudanças e histórias, e peça o evento de parada de cada um. Pergunte se o solicitante concordaria que o trabalho terminou naquele momento. Diferenças de opinião apontam para um relógio que para cedo demais. Combinem um evento de parada por tipo e escrevam.

**3. Quais dos nossos status são de espera, e quanto tempo os itens ficam neles?**
Ponha o fluxo de trabalho numa parede e marque cada estado como ativo ou de espera. Peça o tempo típico em cada estado de espera a partir do último mês de dados. O maior estado de espera costuma ser uma surpresa para alguém. Escolha uma fila para examinar mais de perto no mês seguinte.

**4. Que percentil prometemos, e o que o sistema de fato fez?**
Mostre a distribuição dos tempos de ciclo do último trimestre com a mediana, o 85º e o 95º percentis. Pergunte que compromisso a equipe assume hoje com os clientes e onde ele cai na distribuição. Discuta o custo de prometer um tempo mais rápido do que o sistema entregou. Decidam um compromisso que a equipe consiga cumprir por conta própria.

**5. Quem pode pausar o relógio, e por quê?**
Liste os estados de pausa e de espera, as pessoas que podem usá-los e as razões declaradas. Leia uma amostra de itens pausados e pergunte se o cliente era mesmo a causa. Discuta o que aconteceria se a proporção de pausa fosse mostrada no mesmo gráfico que o resultado do SLA. O facilitador deve manter o tom curioso, já que os estados de pausa muitas vezes existem por razões legítimas que nunca foram escritas.

**6. Se a eficiência de fluxo dobrasse no próximo trimestre, o que teríamos mudado na forma como o trabalho se move?**
Peça ao grupo que nomeie filas, transferências, aprovações ou tamanhos de lote específicos que teriam de mudar. Se as respostas forem genéricas, como "trabalhar mais" ou "comunicar melhor", o número ainda não está ligado a nenhuma ação. Escolha uma mudança concreta, preveja seu efeito sobre o tempo de espera de um estado nomeado e combinem quando conferir.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas do relógio do tempo de ciclo e veem seu detalhe no quadro. Ganham mais classificando os estados com honestidade, limitando o trabalho em andamento e lendo o gráfico de dispersão nas próprias retrospectivas. Devem resistir à pressão de dividir o trabalho em pedaços artificialmente pequenos que terminam rápido e não entregam nada e devem mostrar a idade dos itens abertos ao lado dos tempos de ciclo concluídos (veja o tópico 2.1, Medidas de fluxo).

### Equipes de serviço e operações

As equipes de serviço trabalham com registros que carregam relógios formais de nível de serviço, e seus estados de pausa são onde o tempo decorrido e o tempo de SLA divergem. Devem relatar os dois relógios, segmentar por tipo e prioridade e registrar o motivo de cada pausa. As equipes de operações também são as donas naturais das filas de aprovações, janelas de manutenção e respostas de fornecedores, que muitas vezes dominam o tempo de espera visto pelas equipes de produto (veja o tópico 3.5, Métricas de atendimento de requisições de serviço).

### Liderança e governança

Os líderes pedem o lead time porque é o número mais próximo do que o cliente vivencia. Devem esperar uma definição, uma distribuição e uma segmentação com cada cifra e devem perguntar onde está a espera antes de perguntar por que as pessoas são lentas. As metas para essas medidas funcionam melhor quando se aplicam a um serviço ou a um fluxo de valor com um responsável nomeado e quando são definidas a partir do que o sistema entregou. Uma meta aplicada a uma média convida à reclassificação e a jogos com o relógio.

### Clientes e usuários

Os clientes vivenciam o lead time, inclusive toda a espera antes de o trabalho começar e toda a espera depois que a equipe acredita ter terminado. Precisam de uma estimativa honesta expressa como faixa, como "a maioria das requisições assim é concluída em uma semana, e quase todas em duas", e precisam saber quando uma pausa foi aplicada porque a equipe estava esperando por eles. Os relatórios aos clientes devem declarar qual relógio usam (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional mantém uma central de serviços, uma equipe de infraestrutura e uma equipe de aplicações que dá suporte à equipe clínica. Todos os números deste exemplo são ilustrativos.

A central de serviços relata que as requisições padrão de acesso cumprem sua meta de 5 dias úteis em 94% dos casos, mas os gerentes das alas continuam reclamando que o acesso leva "umas duas semanas". O responsável pelas operações de serviço pede à equipe que meça o lead time e o tempo de ciclo dessas requisições ao longo de um trimestre, usando dias corridos decorridos a partir do histórico bruto de status em vez do cronômetro do SLA.

O resultado para 400 requisições (ilustrativo) é uma mediana de tempo de ciclo de 3 dias e um 85º percentil de 9 dias. O lead time, medido a partir do momento em que o gerente enviou o primeiro e-mail para a caixa compartilhada, tem mediana de 8 dias e 85º percentil de 16 dias. Dois achados explicam a diferença. Primeiro, as requisições esperam em média 3 dias na caixa de entrada antes de alguém criar um ticket, o que é invisível para o SLA. Segundo, o status "aguardando aprovação" responde pela maior parte do tempo de ciclo: dos 9 dias do 85º percentil, cerca de 6 dias são gastos esperando que um chefe de departamento aprove. O tempo de trabalho ativo numa amostra de 30 requisições é de cerca de meio dia; por isso a eficiência de fluxo é de aproximadamente 8% (ilustrativo). O resultado do SLA é alto porque o cronômetro para durante "aguardando aprovação" e "aguardando o cliente"; por isso a proporção de pausa do relógio é de 52% do tempo de ciclo.

A equipe toma três decisões. Acrescenta um formulário web que cria o ticket no primeiro contato, de modo que o relógio do lead time comece onde o do cliente começa. Combina com os chefes de departamento que as aprovações para uma lista definida de papéis padrão sejam pré-autorizadas, com uma auditoria trimestral em vez de uma aprovação por requisição. E acrescenta a proporção de pausa e o lead time à revisão mensal de serviço ao lado do resultado do SLA. Depois de um trimestre, a mediana do lead time cai para 4 dias e o 85º percentil para 8 dias (ilustrativo), enquanto o resultado do SLA mal se move.

Durante a revisão, a equipe pega um risco de manipulação. Um técnico passou a mover tickets para "aguardando o cliente" assim que um e-mail de aprovação é enviado, o que não é o propósito do status. A proporção de pausa desse grupo sobe, a auditoria de uma amostra de tickets pausados mostra o padrão, e a equipe reescreve as regras do relógio para que apenas um pedido de informação ao solicitante possa pausá-lo. A barreira de proteção que pegou o problema foi relatar a proporção de pausa ao lado do resultado do SLA, que é o pareamento recomendado neste tópico.

## Ágil, IA, automação e análise

### Ágil

A entrega contínua encurta o ciclo entre uma ideia e as mãos de um usuário; por isso o lead time é a medida que uma parte interessada sente. Uma boa prática é decidir com as partes interessadas onde o lead time começa, como o momento em que uma requisição é aceita, e manter essa definição estável. O cuidado é que uma equipe pode encolher o tempo de ciclo começando o relógio mais tarde; por isso relate sempre também o lead time do lado do cliente.

### IA

As ferramentas de IA podem cortar o tempo de trabalho ativo em redação e programação deixando o tempo de espera igual ou maior, de modo que a eficiência de fluxo pode cair mesmo quando as pessoas se sentem mais rápidas. Relate separadamente o tempo de trabalho ativo e o tempo de espera do trabalho assistido por IA e pareie-os com o retrabalho. O cuidado é que uma queda no tempo de ciclo pode vir de menor profundidade de revisão; por isso amostre mudanças para ver se a qualidade se manteve.

### Automação

Calcule cada relógio a partir de carimbos de eventos em vez de campos digitados e registre cada pausa com um motivo. Meça a própria automação pelo tempo de espera que ela remove e por com que frequência acrescenta uma nova fila, como uma etapa de aprovação manual que ela não consegue pular. O cuidado é que edições retroativas de status podem reescrever a história; por isso registre as edições.

### Análise

Relate percentis de lead time e de tempo de ciclo e mostre a razão entre o tempo de trabalho ativo e o lead time como tendência. A decisão informada é onde remover a espera, que costuma ficar entre equipes. O cuidado é que a eficiência de fluxo depende de quão finamente o tempo de trabalho ativo é registrado; por isso trate-a como um guia aproximado e não como uma razão precisa.

## Olhar setorial

**Startup.** Com uma equipe pequena e poucas transferências, o tempo de ciclo é fácil de medir a partir do quadro e o lead time fica perto do tempo de ciclo. Acompanhe os dois desde o primeiro dia, com uma classificação simples de estados, e olhe o gráfico de dispersão toda semana. A eficiência de fluxo costuma já ser alta para tarefas pequenas; por isso o principal perigo é uma entrada informal que esconde requisições no chat.

**Pequena empresa.** Uma única pessoa pode ser solicitante, aprovador e executor, e a central de serviços hospedada pode oferecer apenas um cronômetro de SLA. Exporte o histórico bruto de status, calcule você mesmo o tempo decorrido e mantenha uma definição para cada relógio. O achado mais útil costuma ser quanto tempo as requisições esperam por respostas de fornecedores.

**Grande empresa.** Muitas transferências entre equipes, fornecedores e comitês de aprovação tornam o tempo de espera grande e espalhado entre organizações. Combine um vocabulário compartilhado para início, parada e pausa, classifique os estados de forma consistente entre as ferramentas de ITSM e de engenharia e segmente por tipo de trabalho e classe de serviço. As comparações entre equipes só fazem sentido depois que as definições se alinham, e uma consolidação deve ser construída a partir de distribuições, não pela média de médias de equipes.

**Governo e setor público.** Prazos legais de resposta, regras de compras e cadeias de aprovação criam esperas que a equipe sozinha não consegue remover. Registre os relógios impostos externamente separados dos internos, para que a parte do atraso que a organização controla possa ser vista e melhorada. O relato público do lead time, com definições claras, gera confiança e expõe as filas que a política cria (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A principal motivação é que as medidas de tempo transformam uma queixa vaga ("demora uma eternidade") em um problema localizado ("as requisições esperam seis dias por aprovação"). Os mesmos dados dão às equipes uma previsão verdadeira, de modo que os compromissos com os clientes se baseiem na distribuição do trabalho passado e não na esperança. Também expõem onde o investimento em automação, aprovações ou pessoal encurtaria o tempo decorrido, que muitas vezes é um lugar diferente daquele que as pessoas esperam.

Os custos são modestos quando as ferramentas já registram mudanças de estado. A configuração envolve combinar as definições, classificar os estados e montar uma visão da distribuição e do gráfico de dispersão. Os custos de operação são o tempo para manter a classificação de estados, auditar os motivos de pausa numa amostra e realizar a revisão mensal. Onde o histórico de estados falta ou não é confiável, o primeiro investimento é na instrumentação descrita no tópico 1.5, Fontes de dados e instrumentação.

O retorno aparece em padrões que a equipe pode medir por conta própria: um tempo de ciclo em percentil alto mais curto para um tipo de trabalho, menos escalonamentos sobre itens atrasados, menos disputas sobre de quem é o relógio certo e uma diferença menor entre o lead time e o tempo de ciclo. Não espere um ganho específico de uma referência de mercado. Autores de lean e de fluxo descrevem a baixa eficiência de fluxo como comum, mas nenhuma cifra publicada deve ser adotada como meta para o seu trabalho sem os seus próprios dados. O custo total de propriedade é dominado pelo tempo das pessoas; por isso conte as horas do responsável pela métrica e dos revisores.

## Antipadrões e armadilhas

- **Relatar a média.** Um único valor atípico longo arrasta a média e o item típico é mal descrito. Relate a mediana e um percentil alto e plote os itens.
- **Um número para todo o trabalho.** Misturar incidentes, requisições e funcionalidades produz uma distribuição que não descreve nada. Segmente primeiro por tipo de trabalho e classe de serviço.
- **Medir apenas o relógio do SLA.** Um cronômetro que para durante estados de espera relata um resultado que o cliente nunca vivencia. Relate o lead time decorrido e a proporção de pausa ao lado.
- **Definir uma meta de eficiência de fluxo.** As pessoas elevam a razão rebatizando estados. Use-a como diagnóstico e julgue o sucesso pelo tempo de espera de filas nomeadas.
- **Começar o relógio no lugar errado.** Um relógio que começa na atribuição ou no primeiro trabalho esconde a fila de entrada. Comece o lead time na requisição e o tempo de ciclo no compromisso e publique os dois.
- **Comparar equipes pelo tempo de ciclo.** Trabalho diferente, estados diferentes e definições diferentes tornam as classificações sem sentido e convidam à manipulação. Compare uma equipe com o próprio histórico e compare serviços só depois que as definições se alinharem.
- **Ignorar os itens abertos.** O tempo de ciclo conta apenas o trabalho concluído; por isso um item emperrado é invisível até terminar. Acompanhe a idade dos itens ainda em andamento (veja o tópico 2.1, Medidas de fluxo).
- **Mudar definições em silêncio.** A tendência passa a registrar uma mudança do instrumento. Registre cada mudança e marque-a no gráfico.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | As pessoas citam durações de memória; cada uma começa o relógio de um jeito | Algumas equipes definem o tempo de ciclo no quadro; as equipes de ITSM citam o tempo de SLA | Uma definição escrita de lead time, tempo de ciclo e pausas usada por todas as equipes | Mudanças de definição registradas e histórico reapresentado a partir de eventos brutos | Definições alinhadas com fornecedores e clientes e revistas quando deixam de informar decisões |
| Relato e análise | Médias num slide, montadas à mão | Algumas equipes mostram medianas ou um gráfico da ferramenta | Mediana e um percentil alto, com gráfico de dispersão, segmentados por tipo de trabalho | Distribuições acompanhadas e revistas em uma cadência; previsões tiradas delas | Dados de fluxo de equipes e fornecedores combinados para prever compromissos de ponta a ponta |
| Espera e eficiência de fluxo | A espera não é distinguida do trabalho | Existem colunas bloqueadas em alguns quadros | Todo status classificado como ativo ou de espera; eficiência de fluxo calculada sobre todos os itens concluídos | Maiores filas examinadas e financiadas para melhoria; motivos de pausa auditados | Filas, aprovações e transferências redesenhadas em conjunto com as equipes e os fornecedores que as criam |
| Uso nas decisões | Números mostrados em uma revisão trimestral e sem ação | As equipes discutem o tempo de ciclo nas retrospectivas | Metas de serviço definidas a partir da distribuição observada | Metas pareadas com barreiras de proteção e revistas quanto à manipulação | Os clientes veem faixas honestas, e as ideias de melhoria vêm de todos que tocam o trabalho |

## Lista de verificação

- [ ] Cada medida de tempo tem no registro de métricas um evento de início, um evento de parada e uma lista de exclusões escritos.
- [ ] O lead time e o tempo de ciclo são ambos relatados, e cada gráfico é rotulado com o que mostra.
- [ ] "Concluído" está definido para cada tipo de trabalho e combinado com o solicitante.
- [ ] Os resultados são relatados como mediana e um percentil alto, e os itens são plotados.
- [ ] Os dados são segmentados por tipo de trabalho e, onde relevante, por classe de serviço.
- [ ] Todo status é classificado como ativo, de espera ou concluído, e a classificação é revista a cada trimestre.
- [ ] Os status de pausa, quem pode usá-los e seus motivos estão escritos e são auditados numa amostra.
- [ ] O tempo decorrido e o tempo de SLA são mostrados lado a lado, com a proporção de pausa.
- [ ] A eficiência de fluxo é usada como diagnóstico e não está num scorecard.
- [ ] As mudanças de definição são registradas e marcadas nos gráficos.
- [ ] A idade dos itens abertos é revista junto com os tempos de ciclo concluídos.

## Prompts de IA

**Redija regras de relógio para um tipo de trabalho.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to cancelled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Classifique os status como ativos ou de espera.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Analise um conjunto de tempos de ciclo.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Revise uma métrica quanto à manipulação.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma medida de tempo e a barreira de proteção que pertence ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma medida de tempo editada declara seus relógios, exclusões e vetor de manipulação.

## Ideias-chave

- O lead time é a espera do cliente e o tempo de ciclo é a espera da equipe; por isso mantenha os dois e examine a diferença entre eles.
- Escreva as regras de início, parada e pausa de todo relógio e trate uma mudança de definição como um evento.
- Relate a mediana e um percentil alto, plote os itens e segmente por tipo de trabalho antes de comparar qualquer coisa.
- A eficiência de fluxo costuma ser baixa porque a maior parte do tempo decorrido é espera; por isso use-a para localizar filas e evite torná-la uma meta.
- Mostre a proporção de pausa ao lado de qualquer resultado de nível de serviço que exclua o tempo pausado.
- Reduza o trabalho em andamento e remova transferências para encurtar o tempo, porque mandar as pessoas se apressarem não muda as filas.

## Referências e leituras complementares

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Tempo de ciclo](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
