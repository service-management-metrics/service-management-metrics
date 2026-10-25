# Trabalho em andamento e teoria das filas

**Uma equipe totalmente ocupada é uma equipe cujo trabalho espera; por isso meça quanto trabalho está em andamento, quanto tempo ele fica em fila e quão perto da capacidade a equipe opera, e use a aritmética das filas para definir limites antes que os atrasos cheguem.**

## Visão geral e motivação

Toda equipe de serviço tem uma fila, use ou não a palavra. Os incidentes esperam pela triagem, as requisições esperam por aprovação, as mudanças esperam por uma vaga de revisão e os itens do backlog esperam que alguém os puxe. A maior parte do tempo decorrido nesses sistemas é gasta em espera, não em trabalho. As medidas deste tópico explicam por que a espera cresce, como vê-la cedo e o que uma equipe pode fazer a respeito.

A quantidade central é o [trabalho em andamento](https://en.wikipedia.org/wiki/Work_in_process) (WIP), o número de itens que foram iniciados e ainda não terminaram. As equipes ágeis que gerenciam o fluxo tornam o WIP visível num quadro e o limitam com um limite de WIP. As operações de serviço do ITIL contam incidentes, requisições e mudanças abertos e chamam o conjunto de fila ou backlog de registros. As duas visões descrevem a mesma coisa: itens dentro de um sistema que ainda não os entregou. Este tópico usa "trabalho em andamento" para ambas e declara a fronteira a cada vez (quais status contam como "em andamento" e quais não), porque essa fronteira decide cada número que se segue.

A matemática vem da [teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory), o estudo das linhas de espera. Seu resultado mais útil para uma equipe de serviço é a [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law), provada por John Little em 1961. Para um sistema estável, o número médio de itens no sistema é igual à taxa média de chegada multiplicada pelo tempo médio que um item passa no sistema. Em termos de entrega, o WIP médio é igual à vazão média multiplicada pelo tempo de ciclo médio. A lei vale independentemente da ordem em que os itens são atendidos, o que a torna uma verificação de sanidade barata para qualquer conjunto de métricas de fluxo (veja o tópico 2.1, Medidas de fluxo, e o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo).

O segundo resultado é menos confortável. À medida que um recurso compartilhado se aproxima do uso total, o tempo de espera sobe cada vez mais depressa. Uma aproximação relacionada, a [fórmula de Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), mostra que o atraso na fila cresce com a utilização na proporção da razão entre a utilização e a fração ociosa restante, e também cresce com a variabilidade das chegadas e dos tempos de atendimento. O trabalho de suporte e de operações é variável por natureza, já que os incidentes chegam em rajadas e o esforço por item difere muito. Uma equipe que planeja estar 100% ocupada planejou, portanto, longas esperas, e o primeiro grande incidente transforma longas esperas em um backlog que leva semanas para ser liquidado.

Termos usados neste tópico:

- **Taxa de chegada** é o número de itens que entram no sistema por unidade de tempo.
- **Vazão** (ou taxa de saída) é o número de itens que saem do sistema como concluídos, por unidade de tempo.
- **Tempo de ciclo** é o tempo decorrido desde o momento em que um item entra na fronteira do sistema até o momento em que sai dela. Este tópico usa o mesmo relógio do tópico 2.2.
- **Tempo de fila** é a parte do tempo decorrido durante a qual um item está esperando e ninguém trabalha nele.
- **Utilização** é a fração da capacidade disponível que está em uso. Para uma equipe, a capacidade é expressa em horas de trabalho ou numa contagem de itens que podem ser tratados em paralelo. A utilização é uma propriedade de uma equipe ou de um conjunto de recursos, nunca de um indivíduo.
- **Limite de WIP** é um número máximo acordado de itens em uma etapa ou no sistema todo. Um novo item não é iniciado quando o limite é atingido.
- Um **gargalo** é a etapa com a menor capacidade em relação à demanda. Ele define o ritmo de toda a cadeia, um ponto desenvolvido pela [teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints) e sua ideia de [gargalo](https://en.wikipedia.org/wiki/Bottleneck_(production)).

As visões ágil e ITIL se encontram aqui: o ITIL 4 (2019) trata a gestão de capacidade e desempenho, a gestão de incidentes e a gestão de requisições de serviço como práticas que dependem de combinar capacidade e demanda, e os métodos ágeis expressam a mesma ideia como limitar o trabalho em andamento e terminar antes de começar. O [desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development) trata o trabalho inacabado como estoque com custo de manutenção e risco.

## Princípios-chave

- **A espera domina o tempo decorrido.** Na maioria dos sistemas de serviço e de entrega, os itens esperam muito mais tempo do que alguém trabalha neles; por isso reduzir a espera é uma alavanca maior do que trabalhar mais rápido.
- **A lei de Little liga os três números de fluxo.** O WIP médio, a vazão e o tempo de ciclo não podem ser definidos de forma independente. Se você quer um tempo de ciclo mais curto com a mesma vazão, precisa reduzir o WIP.
- **O atraso cresce de forma abrupta perto da utilização total.** A folga é o preço da capacidade de resposta. Uma equipe sem capacidade de sobra não consegue absorver uma rajada ou um item urgente sem atrasar todo o resto.
- **A variabilidade amplifica as filas.** Chegadas irregulares e tamanhos de item irregulares alongam as filas mesmo quando a carga média parece aceitável. Reduza a variabilidade onde puder e amorteça-a onde não puder.
- **Limite o WIP para terminar o trabalho, não para parecer ocupado.** Um limite de WIP é um gatilho para uma conversa sobre trabalho bloqueado e capacidade, não uma regra de conformidade.
- **Meça no nível do sistema.** O WIP, o tamanho da fila e a utilização descrevem equipes e serviços, nunca as pessoas que os compõem.
- **Relate distribuições, não médias.** Os tempos de fila têm cauda longa; por isso mostre a mediana e um percentil alto, como o 85º ou o 95º (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

## Definições de métricas

Sete medidas cobrem o tópico. Cada uma é definida para uma fronteira nomeada que a equipe escreve em seu registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trabalho em andamento | Número de itens iniciados e não concluídos dentro da fronteira acordada | Contagem de itens em status "em andamento" no momento do instantâneo; itens no backlog ou na fila "pronto" antes do primeiro status de trabalho e itens já concluídos são excluídos | itens | Histórico de status do rastreador de issues ou da ferramenta de ITSM | Gestão de incidentes; gestão de requisições de serviço | Contagem de WIP no quadro | Instantâneo diário, revisto semanalmente |
| Tamanho da fila | Número de itens aguardando o início do trabalho ou aguardando entre etapas | Contagem de itens em status de espera (por exemplo "novo", "aguardando triagem", "aguardando revisão") no momento do instantâneo; itens bloqueados são relatados à parte, não somados | itens | Histórico de status do rastreador ou da ferramenta de ITSM | Gestão de incidentes; habilitação de mudanças | Coluna pronto e colunas de fila em um quadro | Instantâneo diário, revisto semanalmente |
| Tempo de fila | Tempo decorrido que um item passa esperando antes de o trabalho começar, por etapa | O relógio começa quando o item entra em um status de espera e para quando entra no próximo status ativo; o tempo em um status marcado como "bloqueado no cliente" é excluído e relatado como cifra própria; relate a mediana e o 85º percentil | horas ou dias | Carimbos de transição de status do rastreador ou da ferramenta de ITSM | Central de serviços; gestão de incidentes; habilitação de mudanças | Tempo de espera em um fluxo de valor; tempo nas colunas de fila | Semanal |
| Taxa de chegada e de saída | Itens que entram e saem do sistema por período, e sua diferença como crescimento líquido da fila | Chegadas = itens que entram na fronteira no período; saídas = itens concluídos no período; crescimento líquido = chegadas menos saídas; itens reabertos só contam como chegadas se a equipe assim os definir | itens por semana | Carimbos de criação e resolução do rastreador ou do ITSM | Monitoramento e gestão de eventos; gestão de incidentes | Vazão e diagrama de fluxo cumulativo | Semanal |
| Razão de carga da equipe | Proporção da capacidade da equipe que o trabalho planejado e esperado consumiria | Horas de demanda esperada no período (chegadas vezes esforço médio por item) / horas de capacidade disponível após férias e compromissos fixos; a equipe declara como estima o esforço; indivíduos nunca são relatados | porcentagem | Plano de capacidade, histórico de esforço do rastreador, escala | Gestão de capacidade e desempenho; gestão de força de trabalho e talentos | Capacidade da equipe no trabalho planejado | Mensal e a cada evento de planejamento |
| Taxa de violação do limite de WIP | Proporção dos dias em que uma etapa ou o sistema excede seu limite de WIP acordado | Dias com WIP acima do limite / dias úteis no período; dias em que a equipe registrou uma exceção deliberada com um motivo são relatados à parte | porcentagem de dias | Instantâneos diários de WIP e o registro de exceções | Melhoria contínua; gestão de incidentes | Acordo de trabalho sobre o limite de WIP | Semanal |
| Razão de consistência da lei de Little | Verificação de que os três números de fluxo concordam entre si | WIP médio no período / (saídas por dia vezes tempo de ciclo médio em dias) para a mesma fronteira e período; uma razão próxima de 1 significa que as definições são consistentes, uma razão distante de 1 significa que uma fronteira ou um relógio é inconsistente | razão | Os mesmos dados do rastreador das outras métricas de fluxo | Medição e relatório | Verificação de sanidade das métricas de fluxo numa retrospectiva | Mensal |

## Recomendações

### Defina primeiro a fronteira

**1. Escreva a fronteira do sistema antes de contar qualquer coisa.** Declare qual status inicia o "em andamento" e qual o encerra e quais itens são excluídos (por exemplo manutenção agendada ou itens que aguardam um cliente). Duas equipes que contam o WIP de modo diferente produzirão números que não podem ser comparados, e uma fronteira que se move em silêncio quebrará a verificação da lei de Little. Registre a fronteira no registro de métricas e mude-a apenas com um motivo registrado.

**2. Separe a espera do trabalho no modelo de status.** Se um único status cobre "na fila para revisão" e "em revisão", o tempo de fila é invisível. Dê aos estados de espera seus próprios nomes, como descrito no tópico 1.5, Fontes de dados e instrumentação, para que os carimbos de transição revelem o atraso. O custo de um status a mais é pequeno comparado ao valor de ver onde os itens ficam.

### Use a lei de Little como verificação de consistência

**3. Faça a verificação da lei de Little todo mês.** Calcule o WIP médio, a vazão e o tempo de ciclo médio para o mesmo período e fronteira e veja se concordam aproximadamente. Uma grande divergência costuma significar que itens estão entrando ou saindo do sistema sem serem contados, ou que itens antigos estão estacionados em um status sem atenção. Corrija os dados antes de interpretar qualquer tendência. A lei é um teorema sobre sistemas estáveis; por isso aplique-a a períodos em que a fila não cresceu nem encolheu drasticamente.

### Observe a utilização e o crescimento da fila

**4. Planeje folga onde a variabilidade é alta.** Para o tratamento de incidentes, o trabalho de plantão e qualquer fila alimentada por demanda aleatória, planeje abaixo da capacidade total para que uma rajada não vire um backlog. As equipes costumam descobrir que uma razão de carga que parece confortável no papel já é alta demais quando as interrupções são contadas (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Combine a faixa-alvo com as pessoas que fazem o trabalho e reveja-a depois de qualquer incidente grave.

**5. Acompanhe o crescimento líquido da fila, além do tamanho dela.** Uma fila de 40 itens que está encolhendo é saudável, e uma fila de 15 que cresce 5 itens por semana não é. Compare as chegadas e as saídas toda semana e plote a tendência com um [diagrama de fluxo cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), em que uma faixa que se alarga para uma etapa sinaliza WIP crescente ali. Quando as chegadas excedem as saídas por várias semanas, a fila cresce sem limite e uma decisão é devida: acrescentar capacidade, reduzir a demanda ou mudar o que é aceito.

**6. Leia o tempo de fila por etapa para encontrar o gargalo.** Divida o tempo decorrido em períodos de espera por etapa. A etapa com o maior tempo de fila e o maior número de itens esperando é candidata a gargalo. Melhorar qualquer outra etapa não encurtará o sistema todo; por isso dirija o esforço de melhoria à restrição e confira de novo depois, porque a restrição se move.

### Limite o WIP de um jeito que funcione

**7. Defina o primeiro limite de WIP pela observação e depois ajuste.** Comece perto do WIP médio atual, ou um pouco abaixo, e observe o que acontece com o tempo de ciclo e com os itens bloqueados. Reduza o limite passo a passo enquanto a equipe ainda consegue manter cada pessoa produtiva em terminar trabalho. Não existe um número correto universal, e uma cifra emprestada de outra equipe não traz evidência para a sua.

**8. Trate uma violação como um gatilho, não como uma infração.** Quando o WIP excede o limite, pergunte o que está bloqueando a conclusão e quem pode se juntar para resolver. Uma violação registrada com um motivo, como uma correção urgente de produção, é informação. Se as violações se tornam rotina, o limite está errado ou o sistema está sobrecarregado, e a resposta é uma conversa sobre capacidade, e não uma repreensão.

**9. Aplique limites a todo o fluxo de valor, não a uma coluna só.** Um limite apenas em "em andamento" deixa o trabalho se acumular nas filas de revisão, teste e aprovação. Limite o número de itens no sistema de ponta a ponta e acrescente limites por etapa onde uma fila específica continua crescendo. Etapas compartilhadas, como uma revisão do comitê consultivo de mudanças ou um ambiente de teste, merecem seu próprio limite visível e seu próprio tempo de fila.

### Trate o trabalho urgente e variável de forma deliberada

**10. Dê uma política ao trabalho expedido.** Sem uma, os itens urgentes excedem em silêncio todos os limites e a equipe não consegue distinguir a carga planejada da não planejada. Defina o que se qualifica, quantos itens expedidos podem estar em curso e qual trabalho pausa. Conte os itens expedidos e seu efeito sobre o tempo de fila, para que o custo da urgência fique visível a quem a solicita (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Trabalho em andamento | Mover itens para um status "estacionado" ou "em espera" para ficar abaixo do limite; dividir itens para parecerem menores; começar trabalho fora do quadro | Contagem de itens em status estacionados e sua idade; amostrar o quadro contra o trabalho real; relatar o item mais antigo em andamento |
| Tamanho da fila | Encerrar e reabrir itens; rejeitar novos itens na porta; renomear status de espera para que fiquem fora da contagem | Taxa de reabertura e taxa de rejeição ao lado do tamanho da fila; revisão das definições de status em cada revisão de métricas |
| Tempo de fila | Começar o relógio tarde, criando o registro depois que o trabalho está pronto; pausar o relógio por status bloqueados ou de espera do cliente; marcar um item como em andamento quando só foi aberto | Distribuição do tempo em status bloqueados e de pausa; proporção de itens criados depois de iniciados; espera relatada pelo solicitante numa breve pesquisa |
| Taxa de chegada e de saída | Encerrar itens rapidamente para elevar as saídas; dividir uma requisição em muitas para elevar as duas contagens; contar duplicatas como chegadas | Medidas de qualidade e de reabertura nos itens encerrados (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes); distribuição de tamanho dos itens; verificação do resultado para o cliente |
| Razão de carga da equipe | Subestimar o esforço para mostrar capacidade de sobra, ou superestimar a demanda para justificar contratações; relatar uma razão de um período favorável | Comparar o esforço estimado e o real por item; mostrar a razão com sua tendência e a proporção de interrupções; revisão por pares do método de estimativa |
| Taxa de violação do limite de WIP | Elevar o limite para parar as violações; esconder violações movendo itens para fora do quadro; conceder exceções livremente | Número e motivos das exceções; histórico de mudanças de limite com datas; percentil do tempo de ciclo ao lado da taxa de violação |
| Razão de consistência da lei de Little | Ajustar a fronteira ou o período até que a razão se aproxime de 1; excluir itens de longa duração como valores atípicos | Fixar fronteira e período de antemão; publicar os itens excluídos e sua contagem; revisar mudanças na fronteira com um motivo |

Uma leitura saudável é a de uma equipe cujo WIP é estável ou está caindo, cujos percentis de tempo de fila são estáveis ou estão melhorando, cujas chegadas e saídas se equilibram aproximadamente e cujas violações vêm com motivos que levam a ação. A razão da lei de Little fica perto de 1 porque os dados são consistentes, e não porque alguém os ajustou.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Limites de WIP apertados | Tempo de ciclo mais curto, descoberta antecipada de problemas, mais conclusão | Pode surgir ociosidade numa etapa; exige disciplina e algum treinamento cruzado; pode frustrar partes interessadas que querem trabalho iniciado |
| Limites de WIP frouxos ou inexistentes | Todos parecem ocupados e as requisições são aceitas rapidamente | Filas longas, entrega lenta, bloqueios ocultos, muita troca de contexto |
| Capacidade de folga planejada | Absorve rajadas e trabalho urgente; mantém curtos os tempos de resposta | Parece desperdício num relatório de utilização; exige que a liderança aceite menor eficiência aparente |
| Alta utilização planejada | Parece eficiente e barata por hora | A espera cresce abruptamente quando a carga se aproxima da capacidade; frágil diante de qualquer perturbação |
| Usar a lei de Little para planejar | Simples, geral e rápida de aplicar | Válida só para sistemas estáveis e para médias; nada diz sobre um item |

Limite o WIP e mantenha folga onde a variabilidade e o custo do atraso são altos, e aceite limites mais frouxos onde o trabalho é constante e independente.

No modelo de livro-texto mais simples de um único servidor com chegadas e tempos de atendimento aleatórios (uma fila M/M/1), o tempo médio no sistema é o tempo de atendimento dividido por um menos a utilização: 2 vezes a 50%, 5 vezes a 80%, 10 vezes a 90% e 20 vezes a 95%. As equipes reais não são servidores únicos; por isso trate essas cifras como o formato da curva, e não como uma previsão.

## Perguntas para discutir com sua equipe

**1. O que conta como "em andamento" para nós, e todos contamos do mesmo jeito?**
Peça a cada pessoa que nomeie o primeiro e o último status que tornam um item parte do WIP e depois compare as respostas. Procure status como "em espera" ou "aguardando o cliente" que algumas pessoas contam e outras não. Combinem uma fronteira e escrevam. O facilitador deve anotar como as respostas mudariam o número de WIP, porque isso mostra o quanto a métrica é sensível à definição.

**2. Onde os nossos itens esperam mais tempo, e quem é dono dessa fila?**
Desenhe o fluxo da chegada ao concluído e marque os pontos de espera. Com um mês recente de dados, estime a mediana e a espera no 85º percentil em cada ponto. Discuta qual fila ninguém possui, como uma etapa de aprovação ou um ambiente de teste compartilhado. Combinem uma fila a examinar em detalhe e uma pessoa que traga os dados da próxima vez.

**3. Quão ocupado é ocupado demais para o tipo de trabalho que fazemos?**
Compare a carga planejada com a parcela do tempo realmente gasta em interrupções e itens urgentes. Pergunte o que aconteceu com a fila na última vez que a demanda disparou. Discuta a ideia de que uma equipe sem capacidade de sobra não consegue responder rápido. O facilitador deve conduzir para uma faixa-alvo da razão de carga, e não um número único, e para um plano do que fazer quando a faixa for excedida.

**4. A nossa fila está crescendo, encolhendo ou estável, e como sabemos?**
Olhe as chegadas e as saídas das últimas oito semanas. Um gráfico simples basta. Pergunte se alguém teria notado um aumento lento antes de virar problema e que sinal desencadearia uma ação. Combinem o que uma equipe deve fazer quando as saídas ficam atrás das chegadas por três semanas seguidas.

**5. O que aconteceria se reduzíssemos o nosso limite de WIP em um?**
Peça às pessoas que prevejam quais itens esperariam, quais terminariam antes e o que fariam quando não puderem iniciar algo novo. Traga à tona medos como o de serem vistos como ociosos.

**6. Os nossos números concordam entre si?**
Pegue um mês de dados e calcule o WIP médio, a vazão e o tempo de ciclo médio. Confira se o WIP é aproximadamente a vazão vezes o tempo de ciclo. Se não for, procure a causa, como itens concluídos mas não encerrados, ou itens encerrados sem terem sido iniciados. O facilitador deve tratar uma divergência como um presente: ela aponta para um problema de dados ou de definição que distorceria todas as outras métricas de fluxo.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega sentem os efeitos do WIP excessivo como troca de contexto, feedback tardio e trabalho inacabado que se deteriora. Ganham mais com limites de WIP visíveis, itens pequenos e o hábito de terminar antes de começar. Uma equipe deve olhar seus próprios tempos de fila entre etapas, como a espera por revisão, porque esses atrasos costumam ser maiores que o tempo gasto programando (veja o tópico 2.7, Métricas de pull requests e revisão de código).

### Equipes de serviço e operações

As equipes de operações enfrentam demanda aleatória; por isso os efeitos de fila são fortes. Uma central de serviços, uma rotação de plantão e um comitê de revisão de mudanças se comportam, cada um, como uma fila com chegadas variáveis. Essas equipes precisam de folga explícita, regras claras de prioridade e uma política para o trabalho expedido, de modo que itens urgentes não desloquem em silêncio todo o resto (veja o tópico 3.1, Métricas da central de serviços, e o tópico 5.7, Métricas de trabalho repetitivo e plantão). Meçam o tempo de fila em cada transferência e atentem para o trabalho que quica entre grupos (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

### Liderança e governança

Os líderes influenciam as filas pela demanda que aceitam e pela utilização que premiam. Devem pedir percentis de tempo de fila e crescimento líquido da fila além da utilização e esperar que um serviço saudável opere abaixo da capacidade total. Um pedido para acrescentar mais projetos a uma equipe que já está no limite é uma decisão de alongar o tempo de ciclo de todos, e a governança deve tornar essa compensação explícita. Financie capacidade para a restrição em vez de campanhas gerais de eficiência (veja o tópico 5.4, Métricas de capacidade e desempenho).

### Clientes e usuários

Os clientes vivenciam a fila como espera por uma resposta e raramente se importam com quão ocupada a equipe está. Precisam de expectativas honestas baseadas na distribuição das esperas passadas, de um modo de ver o status de sua requisição e de um caminho de escalonamento para necessidades urgentes. Limitar o WIP pode significar aceitar novas requisições mais devagar e concluir mais depressa as aceitas, e essa escolha deve ser explicada a eles (veja o tópico 6.2, Acordos de nível de experiência).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional tem uma central de serviços, uma equipe de infraestrutura e uma equipe de aplicações. Todos os números deste exemplo são ilustrativos.

A equipe de aplicações cuida de requisições de serviço e pequenas mudanças para sistemas clínicos. Ao longo de um trimestre, seu painel mostra uma mediana de tempo de ciclo que subiu de 6 dias úteis para 11, enquanto a equipe diz estar "a toda". A razão de carga que a equipe calcula para o trimestre é de 98%. O 85º percentil do tempo de fila da etapa "aguardando aprovação clínica" é de 9 dias úteis, e o WIP médio no quadro é de 44 itens para uma vazão de 4 itens por dia útil. Aplicando a lei de Little, 44 dividido por 4 dá um tempo de ciclo médio implícito de 11 dias úteis, que concorda com a cifra medida; portanto os dados são consistentes e a equipe confia neles.

O chefe do departamento sugere primeiro contratar um terceirizado. O líder da equipe aponta o detalhamento por etapas: dos 11 dias, a fila antes da aprovação clínica e a fila antes da implantação respondem pela maior parte do tempo decorrido, e o trabalho ativo é uma parcela pequena. As chegadas ao longo do trimestre excederam as saídas em cerca de 2 itens por semana; por isso a fila cresceu de forma constante. A equipe também vinha aceitando toda requisição urgente, e os itens expedidos não têm política.

A equipe decide quatro mudanças, registradas no registro de decisões. Define um limite de WIP para todo o sistema de 30 itens, com um limite de etapa de 8 para a fila de aprovação. Planeja uma razão de carga de cerca de 80% para que as interrupções esperadas caibam. Escreve uma política de expedição que permite no máximo dois itens urgentes em curso. Pede ao grupo de aprovação clínica que mantenha um breve horário diário de revisão em vez de uma reunião semanal. Após oito semanas, a equipe relata uma mediana de tempo de ciclo de 7 dias úteis, um tempo de fila no 85º percentil na aprovação de 3 dias úteis e uma taxa de violação de 10% dos dias, com os motivos registrados.

A equipe pega um risco de manipulação no segundo mês. A taxa de violação parece excelente, mas uma amostra do quadro mostra vários itens em um novo status chamado "pendente", que fica fora da contagem de WIP, e a barreira de proteção da contagem de status estacionados vinha subindo. A equipe remove o status, devolve os itens à contagem e exige que todo novo status seja acrescentado ao registro com uma definição. A taxa de violação sobe para 18% por algumas semanas, o que a equipe aceita como a cifra honesta, e depois cai à medida que os itens bloqueados são resolvidos.

## Ágil, IA, automação e análise

### Ágil

Limitar o trabalho em andamento apoia um ritmo sustentável e a entrega contínua: menos coisas em curso significa que cada uma termina mais cedo e o feedback chega antes. Um hábito prático é combinar um limite com a equipe e as partes interessadas e rever as violações na conversa regular de melhoria. O cuidado é que um limite imposto como regra, sem ser discutido, será manipulado dividindo ou escondendo trabalho.

### IA

A assistência de IA torna fácil iniciar mais trabalho em paralelo, já que um rascunho custa pouco. Isso pode elevar o trabalho em andamento e o tamanho da fila para os humanos que precisam revisar e decidir. Pareie qualquer aumento do trabalho iniciado com o tempo de fila na revisão e com a razão de carga da equipe revisora. O cuidado é que mais trabalho iniciado por IA pode ser abandonado; por isso conte também os rascunhos descartados, além dos concluídos.

### Automação

Leia automaticamente o tamanho da fila e as taxas de chegada do sistema de registro e defina alertas sobre tendências, como uma razão de carga crescente, além de limiares fixos. A automação que roteia trabalho deve ser medida pelos roteamentos errados e pela fila que cria quando falha. O cuidado é que uma regra de atribuição automática pode concentrar em silêncio o trabalho em poucas pessoas ou numa só equipe.

### Análise

Use a lei de Little como verificação de consistência entre trabalho em andamento, vazão e tempo de ciclo e trate uma grande diferença como um problema de dados ou de definição. A decisão que isso informa é onde definir limites e capacidade. O cuidado é que a lei pressupõe um sistema estável; por isso não a aplique a um período com grande mudança nas chegadas.

## Olhar setorial

**Startup.** A demanda é irregular e a tentação é iniciar tudo. Um quadro simples com um limite de WIP visível e uma conferência semanal do item mais antigo em andamento bastam. Mantenha folga para problemas de produção, já que uma única queda pode consumir a equipe toda.

**Pequena empresa.** Uma ou duas pessoas costumam cuidar de suporte, projetos e administração, e a caixa de entrada é a fila. Separe o trabalho planejado do reativo, defina um limite diário de tarefas iniciadas e diga aos clientes a espera usual para cada tipo de requisição.

**Grande empresa.** Muitas equipes dividem etapas como aprovação de mudanças, revisão de segurança e ambientes de teste, e as filas compartilhadas costumam ser as mais longas. Meça o tempo de fila nas etapas compartilhadas e publique-o, dê a cada etapa compartilhada um responsável e evite relatar a utilização como meta. As ferramentas podem contar o WIP de modo diferente entre equipes; por isso combine uma fronteira comum e um vocabulário de status comum antes de consolidar (veja o tópico 2.4, Métricas de fluxo de valor).

**Governo e setor público.** Prazos legais, etapas de compras e aprovações formais criam filas longas que as equipes não controlam. Separe o tempo que a equipe controla do tempo gasto esperando outros órgãos e relate ambos. Onde as metas de serviço são fixadas em lei ou regulamento, documente as regras de relógio e quaisquer pausas e mantenha a trilha de auditoria (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é uma entrega mais rápida e previsível sem acrescentar pessoal, porque a espera domina o tempo decorrido e um corte modesto no WIP ou numa longa fila de aprovação encurta o tempo de ciclo de todo item que vem depois. A folga planejada também permite que uma equipe absorva um incidente grave sem perder semanas de outro trabalho.

Os custos são modestos e sobretudo de pessoas: esforço para definir fronteiras e status, para montar um instantâneo diário de WIP e um relatório de tempo de fila com dados já existentes nas ferramentas e para realizar uma breve revisão semanal. Limitar o WIP também significa dizer "ainda não" a algumas requisições, o que exige acordo das partes interessadas, e a capacidade ociosa é um custo aparente que os líderes precisam entender como seguro contra o atraso.

O retorno deve ser descrito por padrões que a organização pode medir por si mesma, e não por porcentagens emprestadas. Acompanhe a mediana e o 85º percentil do tempo de ciclo antes e depois dos limites, o número de itens mais velhos que um limiar acordado, a taxa de violação e seus motivos e a parcela do tempo gasta em trabalho urgente. O business case é mais forte quando liga o tempo de fila a algo que o negócio já sente, como a espera pelo acesso de um novo contratado, por uma mudança em um sistema clínico ou por uma correção para um cliente. O custo total de propriedade é dominado pelo tempo das pessoas que revisam e agem sobre os números; por isso conte esse tempo contra o atraso que ele remove. Uma equipe deve construir a própria linha de base, já que nenhum valor de referência é citado aqui.

## Antipadrões e armadilhas

- **Mirar 100% de utilização.** Garante esperas longas e entrega frágil. Planeje uma razão de carga com folga e reveja-a após perturbações.
- **Limitar apenas a coluna "em andamento".** O trabalho então se acumula em filas fora do limite. Limite o sistema de ponta a ponta e acrescente limites por etapa onde as filas crescem.
- **Tratar o limite de WIP como uma regra a impor.** As pessoas escondem trabalho para cumprir. Use uma violação como gatilho para perguntar o que está bloqueado e registre o motivo.
- **Estacionar itens em status sem limite.** A contagem fica baixa enquanto o trabalho espera sem ser visto. Inclua os status estacionados numa contagem visível e reveja sua idade.
- **Medir a utilização de indivíduos.** Premia parecer ocupado e convida à classificação. Meça a equipe ou o conjunto de recursos e nunca publique uma cifra por pessoa.
- **Ignorar o lado das chegadas.** As equipes trabalham nas saídas enquanto a demanda continua crescendo. Acompanhe as chegadas e, quando excederem a capacidade, tome uma decisão explícita sobre o que aceitar.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e fronteiras | Cada pessoa conta o WIP do seu jeito | Algumas equipes escrevem uma fronteira para o quadro | Uma fronteira escrita e um vocabulário de status, com estados de espera separados dos de trabalho | Mudanças de fronteira registradas e verificação da lei de Little feita todo mês | Fronteiras alinhadas com fornecedores e equipes parceiras e revistas quando deixam de informar decisões |
| Limites de WIP e folga | Sem limites; todos ocupados | Limites informais em uma coluna | Limites no sistema todo e por etapa, com registro de violações e uma faixa de carga declarada | Limites ajustados a partir de evidências de tempo de ciclo e de fila em uma cadência | Limites e capacidade coordenados entre equipes que dividem etapas |
| Visibilidade das filas | A espera só é vista por meio de queixas | Tamanho da fila contado em alguns quadros | Percentis de tempo de fila por etapa mostrados à equipe responsável | Crescimento líquido da fila acompanhado com barreiras de proteção e tratado em trabalho financiado | Tempo de fila em etapas compartilhadas e externas relatado abertamente a clientes e fornecedores |
| Uso nas decisões | Pedidos de capacidade discutidos por anedota | Utilização citada para justificar contratações | Evidências de fila e de tempo de ciclo usadas no planejamento | Compensações entre demanda e capacidade decididas com dados em revisões de governança | Demanda moldada em conjunto com os clientes usando distribuições de tempo de espera |

## Lista de verificação

- [ ] A fronteira do sistema para o WIP está escrita, com os status inicial e final e as exclusões.
- [ ] Os estados de espera e os de trabalho são status separados no fluxo de trabalho.
- [ ] Um instantâneo diário de WIP e de fila é capturado e guardado.
- [ ] O tempo de fila é relatado como mediana e percentil alto, por etapa.
- [ ] Chegadas e saídas são plotadas semanalmente, com um diagrama de fluxo cumulativo.
- [ ] Existe um limite de WIP para o sistema e para qualquer etapa com fila crescente.
- [ ] As violações de limite são registradas com um motivo e revistas semanalmente.
- [ ] Uma política define o trabalho expedido e limita o número em curso.
- [ ] A razão de carga da equipe é estimada no nível da equipe, nunca por pessoa, com o método declarado.
- [ ] A verificação da lei de Little é feita todo mês e as divergências são investigadas.
- [ ] Os status estacionados e bloqueados são contados e sua idade é revista.
- [ ] Toda mudança em uma fronteira, status ou limite é registrada com data e motivo.

## Prompts de IA

**Confira a fronteira e os status por trás de uma contagem de WIP.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Faça uma verificação de consistência da lei de Little.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Planeje um primeiro experimento de limite de WIP.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Encontre o provável gargalo a partir de dados por etapa.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico define uma medida de fluxo ou de capacidade que você está acrescentando e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica editada nomeia seus relógios, sua fronteira, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- A espera domina o tempo decorrido; por isso meça o WIP, o tamanho da fila e o tempo de fila por etapa e relate medianas e percentis altos.
- A lei de Little une o WIP médio, a vazão e o tempo de ciclo, o que a torna um teste rápido de se as suas definições são consistentes.
- O atraso sobe abruptamente quando a utilização se aproxima da capacidade total; por isso planeje folga onde a demanda é variável.
- Limite o WIP do sistema todo, trate as violações como gatilhos de conversa e proteja-se contra o rebatismo do trabalho para ficar abaixo do limite.
- Observe as chegadas e as saídas, já que uma fila que cresce semana após semana pede uma decisão sobre capacidade ou demanda.
- Meça equipes e serviços, nunca indivíduos, e combine uma fronteira escrita antes de comparar números.

## Referências e leituras complementares

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Trabalho em andamento](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Fórmula de Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Gargalo (produção)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Desenvolvimento enxuto de software](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Diagrama de fluxo cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
