# Métricas de atendimento de requisições de serviço

**Meça quanto tempo levam as requisições rotineiras do ponto de vista do usuário, quanto desse tempo é espera, quais itens do catálogo geram a demanda e quanto do trabalho é automatizado, e use o quadro para redesenhar as requisições comuns em vez de pressionar as pessoas que as tratam.**

## Visão geral e motivação

Uma **requisição de serviço** é um pedido rotineiro de um usuário por algo que um serviço foi projetado para oferecer: uma conta, acesso a uma pasta, um notebook, uma licença de software, uma informação. Difere de um **incidente**, que é uma interrupção não planejada de um serviço (veja o tópico 3.2, Volume e prioridade de incidentes), e de uma **mudança**, que modifica um serviço e exige um julgamento novo do risco (veja o tópico 4.3, Métricas de habilitação de mudanças). No [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, o trabalho é coberto pela prática de gestão de requisições de serviço, e costuma ser descrito como um **modelo de requisição** repetível: as informações necessárias, as aprovações, os passos e o tempo esperado. O ITIL escreve a palavra "fulfilment"; o corpo deste tópico usa o "fulfillment" da grafia do livro em inglês, que em português é o atendimento da requisição.

As requisições importam para as métricas porque são demanda previsível. Um incidente é uma surpresa; o pedido do notebook de um novo contratado chega todo mês e segue os mesmos passos. Essa previsibilidade faz das requisições as melhores candidatas ao projeto, à padronização e à [automação de processos](https://en.wikipedia.org/wiki/Process_automation). Significa também que os atrasos raramente são causados por dificuldade. São causados por filas, aprovações e transferências; por isso a pergunta útil é onde a requisição espera, não quão depressa alguém digita.

A unidade de análise é o **item do catálogo**: uma coisa nomeada que um usuário pode pedir no [catálogo de serviços](https://en.wikipedia.org/wiki/Service_catalog) (o termo do ITIL é "service catalogue"). As medidas por item são muito mais úteis que um único número misturado, porque o pedido de uma redefinição de senha e o pedido de construção de um servidor têm relógios diferentes, responsáveis diferentes e metas razoáveis diferentes. Uma média misturada esconde ambos.

As visões ágil e ITIL se encontram aqui com pouco atrito. O ITIL pergunta se o serviço entrega o resultado acordado dentro do tempo acordado. A prática ágil de fluxo pergunta quanto tempo o trabalho leva para fluir da requisição até a conclusão, quanto fica em filas e quanto trabalho está em andamento ao mesmo tempo. Uma requisição é um item de trabalho que se move por um fluxo de trabalho; por isso as ferramentas de medição de fluxo, como o tempo de ciclo e a idade do item de trabalho, se aplicam diretamente (veja o tópico 2.1, Medidas de fluxo). O vocabulário difere. A aritmética é a mesma.

Três termos se repetem. O **tempo de atendimento da requisição** é o tempo decorrido desde o momento em que o usuário envia a requisição até o momento em que o usuário confirma, ou o sistema registra, que a coisa foi entregue. O **tempo de trabalho ativo** é o tempo em que alguém está de fato trabalhando na requisição, e o **tempo de espera** é todo o resto, inclusive aprovações e aguardar o usuário. A diferença entre eles é o que um modelo de requisição deve encolher. A **parcela de automação** é a porção das requisições atendidas sem que uma pessoa toque nelas depois do envio.

As medidas de tempo exigem cuidado. Os tempos de atendimento são assimétricos: a maioria das requisições termina depressa e algumas levam muito tempo. Uma média é arrastada pelas poucas; por isso relate a mediana e um [percentil](https://en.wikipedia.org/wiki/Percentile) alto, como o 85º ou o 95º (veja o tópico 1.6, Letramento estatístico para métricas de serviço). As metas combinadas com os clientes, como as de um [acordo de nível de serviço (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), devem ser declaradas do mesmo modo: "85% das requisições de notebook atendidas em até 5 dias úteis" diz mais do que "média de 3 dias".

Por fim, um alerta da psicologia da medição. Quando uma equipe é julgada por encerrar requisições depressa, o modo mais barato de melhorar o número é mudar o que conta como encerrado ou pausar o relógio. A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica plenamente (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Toda métrica abaixo vem, portanto, pareada com uma barreira de proteção, e nenhuma descreve um atendente individual.

## Princípios-chave

- **Meça por item do catálogo.** Cada item tem seu próprio modelo de requisição, responsável e meta razoável; por isso os números misturados enganam.
- **Comece o relógio quando o usuário pede e pare-o quando o usuário tem a coisa.** Os marcos internos são diagnósticos úteis, mas não são a experiência do cliente.
- **Separe o tempo de espera do tempo de trabalho ativo.** A diferença entre eles mostra onde o redesenho compensa, e raramente é no trabalho em si.
- **Relate distribuições, não médias.** Uma mediana e um 95º percentil descrevem o que os usuários vivenciam.
- **Trate a demanda como um sinal.** O volume por item mostra o que os usuários precisam, o que os confunde e o que merece automação ou autoatendimento.
- **Automatize primeiro o estável e frequente.** A parcela de automação é um resultado do bom projeto da requisição, não uma meta a perseguir por si só.
- **Meça a equipe e o serviço, nunca a pessoa.** As requisições fluem por sistemas, e a variação entre atendentes reflete sobretudo a mistura de trabalho.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo de atendimento da requisição | Tempo decorrido para entregar uma requisição, mostrado como mediana e 95º percentil por item do catálogo | o relógio começa quando o usuário envia a requisição e para quando o usuário confirma a entrega ou a entrega é registrada; requisições canceladas pelo usuário são excluídas; o tempo de espera pelo usuário é relatado separadamente, não removido | dias úteis ou horas | Histórico de requisições da ferramenta de ITSM | Gestão de requisições de serviço | Tempo de ciclo no quadro da equipe (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) | Semanal, tendência mensal |
| Atendimento dentro da meta | Proporção das requisições entregues dentro da meta acordada para o seu item do catálogo | requisições atendidas dentro da meta / requisições atendidas no período; relógio como acima, os itens ainda abertos são excluídos e contados na idade do backlog | porcentagem | Histórico de requisições da ferramenta de ITSM; tabela de metas por item do catálogo | Gestão de nível de serviço | Expectativa de nível de serviço | Mensal |
| Backlog e idade das requisições | Número de requisições abertas e idade das mais antigas, por item do catálogo | requisições abertas ao fim do período (contagem); idade de cada requisição aberta = data do relatório menos data de envio; relate a contagem, a idade mediana e a idade mais antiga | contagem e dias | Fila de requisições abertas da ferramenta de ITSM | Gestão de requisições de serviço | Trabalho em andamento e itens de trabalho envelhecidos (veja o tópico 2.3, Trabalho em andamento e teoria das filas) | Semanal |
| Tempo de espera por aprovação | Tempo que uma requisição passa esperando uma aprovação | o relógio começa quando a aprovação é solicitada e para quando é concedida ou recusada; requisições sem etapa de aprovação são excluídas | horas | Registro de aprovações da ferramenta de ITSM | Gestão de requisições de serviço; habilitação de mudanças | Tempo bloqueado ou uma coluna "aguardando" no quadro | Mensal |
| Volume de requisições por item do catálogo | Número de requisições enviadas para cada item, com sua parcela de todas as requisições | requisições enviadas por item no período; requisições reenviadas como duplicatas, se identificadas, são excluídas; relate a contagem e a parcela do total | contagem e porcentagem | Registros de requisições da ferramenta de ITSM | Gestão do catálogo de serviços | Análise de demanda para moldar o backlog | Mensal |
| Parcela de automação | Porção das requisições atendidas sem nenhuma etapa manual depois do envio | requisições atendidas de ponta a ponta por automação / requisições atendidas no período; uma requisição tocada por uma pessoa em qualquer etapa de atendimento conta como manual; aprovações por uma pessoa não contam como etapas manuais de atendimento se a política as exige | porcentagem | Registros de atendimento da ferramenta de ITSM e registros da plataforma de automação | Gestão de requisições de serviço; automação na cadeia de valor de serviço | Automação na definição de pronto | Mensal |
| Taxa de reabertura de requisições | Proporção das requisições atendidas que o usuário reabre ou reenvia porque o resultado estava errado ou incompleto | requisições reabertas ou reenviadas para o mesmo item pelo mesmo usuário em até 7 dias do atendimento / requisições atendidas no período; a janela de 7 dias é um exemplo que a equipe escreve | porcentagem | Histórico de requisições da ferramenta de ITSM | Gestão de requisições de serviço | Taxa de retrabalho; escape de defeitos | Mensal |

O tempo de atendimento da requisição conta tempo útil apenas se a equipe combinou um calendário e o registrou; caso contrário, use horas decorridas e diga isso. A métrica de backlog traz três números de propósito, porque uma contagem sozinha nada diz sobre a espera. A definição de parcela de automação deixa as aprovações humanas fora da contagem de "manual" porque muitas aprovações são uma decisão de política, e não um custo de atendimento; o tempo de espera por aprovação é medido à parte para que o atraso permaneça visível.

## Recomendações

### Defina os relógios e a unidade

**1. Meça por item do catálogo e publique a lista de itens.** Comece com os dez principais itens por volume, que costumam cobrir uma grande parte das requisições, e acrescente itens conforme os dados permitirem. Dê a cada item um responsável, uma meta declarada e uma definição de uma linha de "entregue". A lista de itens é o denominador de todo o resto; por isso guarde-a no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

**2. Escreva o início e a parada do relógio de cada item.** Para a maioria dos itens, o relógio começa no envio e para quando o usuário pode usar aquilo que pediu, e não quando um ticket é encerrado. Um notebook é entregue quando está nas mãos do usuário, não quando o transporte é contratado.

**3. Decida uma vez como a espera pelo usuário é tratada.** Algumas requisições emperram porque o usuário não respondeu a uma pergunta. Pausar o relógio por isso é razoável, mas também é a alavanca mais fácil de abusar. Registre a pausa como um estado separado com um motivo, relate o tempo pausado como um número próprio e reveja a taxa de pausa por item (veja o tópico 1.5, Fontes de dados e instrumentação).

### Relate o que os usuários vivenciam

**4. Mostre a mediana e o 95º percentil, com uma contagem.** Ponha os dois num só gráfico por item, com o número de requisições por trás de cada ponto. Uma mediana de dois dias com um 95º percentil de vinte diz que a maioria dos usuários é bem servida e que uma cauda precisa de investigação, o que uma média de quatro dias esconde. Quando a contagem for pequena, diga isso e mostre as requisições individuais em vez de um percentil.

**5. Torne visível a idade das requisições abertas.** O tempo de atendimento só é conhecido depois que uma requisição termina; por isso ele fica defasado. Uma lista das requisições abertas mais antigas por item, ordenada por idade, diz à equipe onde olhar hoje. Em termos de fluxo, é a idade do item de trabalho contra o tempo de ciclo usual do item, e é a visão mais acionável que uma fila de requisições pode ter.

**6. Divida o tempo decorrido em tempo de trabalho ativo, de aprovação e de espera pelo usuário.** Pegue uma amostra de requisições atendidas de um item e divida cada uma no tempo gasto em cada estado. A maioria das equipes descobre que o trabalho ativo é uma pequena parcela do tempo decorrido. O achado desloca a conversa de melhoria de "trabalhar mais rápido" para "remover a fila entre as etapas", que é a ideia central do estudo de filas e de fluxo (veja o tópico 2.3, Trabalho em andamento e teoria das filas).

### Use a demanda para moldar o serviço

**7. Leia o volume por item como uma mensagem dos usuários.** Um volume crescente de um item pode significar necessidade crescente, um produto confuso ou uma falha em outro lugar, como um processo quebrado que manda as pessoas de volta a pedir de novo. Um item de volume muito baixo pode ser candidato a sair do catálogo. Compare o volume com dados de adoção (veja o tópico 6.3, Métricas de adoção de serviços e catálogo).

**8. Classifique os candidatos à automação por volume, estabilidade e tempo de trabalho ativo.** Os melhores primeiros candidatos são de alto volume, raramente variam e carregam um tempo de trabalho ativo perceptível. Comece pelo item cujos passos já são idênticos toda vez, como o acesso a um grupo padrão, e automatize os passos antes de tocar nas exceções. Acompanhe a parcela de automação por item para que o progresso fique visível e envie as perguntas de autoatendimento e de deflexão ao seu próprio tópico (veja o tópico 3.7, Métricas de autoatendimento e automação).

**9. Redesenhe as aprovações antes de acrescentar pessoas.** A espera por aprovação muitas vezes domina o tempo decorrido. Pergunte, para cada aprovação, se ela é exigida pela política, se uma requisição padrão pré-aprovada serviria e se o aprovador pode ser um papel com suplente e não uma pessoa. Pré-aprovar requisições de baixo risco e bem compreendidas espelha a ideia de mudanças padrão na habilitação de mudanças e remove filas sem remover o controle.

### Mantenha os números honestos

**10. Pareie sempre a velocidade com a qualidade.** Relate o tempo de atendimento ao lado da taxa de reabertura e de um sinal de satisfação do usuário para o mesmo item (veja o tópico 6.1, Métricas de satisfação do cliente). Uma requisição mais rápida que volta reaberta é mais lenta do que parece. Se a velocidade melhora e a taxa de reabertura sobe junto, trate o ganho de velocidade como não comprovado.

**11. Mantenha separados nos dados requisições, incidentes e mudanças.** Misturá-los distorce os três. Uma redefinição de senha que na verdade é sintoma de um serviço de login defeituoso é um incidente, e um pedido para alterar o modo como um serviço funciona é uma mudança. Classifique na entrada com uma regra curta, amostre trimestralmente os itens mal classificados e compare lado a lado os volumes de requisições e de incidentes (veja o tópico 3.1, Métricas da central de serviços).

**12. Reveja a tabela de itens com a equipe que faz o trabalho.** Reúnam-se mensalmente por trinta minutos em torno da tabela por item: volume, mediana e 95º percentil, requisição aberta mais antiga, parcela de automação, taxa de reabertura. Escolham um item e uma mudança a tentar e olhem a mesma tabela no mês seguinte para ver o que aconteceu.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tempo de atendimento da requisição | Pausar o relógio em "aguardando o usuário" seja o usuário a causa ou não; encerrar requisições antes da entrega e reabri-las como novas; dividir uma requisição em várias pequenas | Proporção do tempo pausado por item, com auditoria amostral dos motivos de pausa; taxa de reabertura; confirmação da entrega pelo usuário antes do encerramento |
| Atendimento dentro da meta | Redefinir a meta para ser mais fácil; contar só as requisições que terminam e ignorar as abertas antigas; escolher itens rápidos para o conjunto de metas | Idade do backlog das requisições abertas; mudanças nas metas registradas no registro de métricas com um motivo; o conjunto de metas cobre todos os itens por volume |
| Backlog e idade das requisições | Encerrar requisições antigas como "sem resposta" ou "obsoletas"; mover requisições para outra fila ou categoria para que saiam da fila contada | Contagem de requisições encerradas sem entrega, por motivo; transferências de categoria e de fila revistas na reunião mensal |
| Tempo de espera por aprovação | Os aprovadores aprovam sem ler para poupar seu tempo; os solicitantes cobram os aprovadores fora do sistema para que a espera registrada seja curta | Revisão amostral de requisições aprovadas contra a política; taxa de reabertura e exceções de segurança para itens aprovados; número de etapas de aprovação por item |
| Volume de requisições por item do catálogo | Reduzir o volume tornando o catálogo mais difícil de achar ou desencorajando pedidos; reclassificar requisições como incidentes ou como "consultas gerais" | Satisfação do usuário com o catálogo; proporção de contatos classificados como "outros"; dados de adoção do serviço (veja o tópico 6.3, Métricas de adoção de serviços e catálogo) |
| Parcela de automação | Automatizar os itens triviais para elevar a porcentagem; contar como automatizada uma requisição com script que uma pessoa ainda confere à mão; esconder etapas manuais em um ticket separado | Parcela ponderada pelo volume de requisições e pelo tempo de trabalho ativo removido; taxa de automações com falha e de retorno ao manual; amostra de requisições "automatizadas" rastreadas de ponta a ponta |
| Taxa de reabertura de requisições | Desencorajar a reabertura tornando-a difícil; dizer aos usuários que abram uma nova requisição, o que zera o contador | Requisições repetidas do mesmo usuário para o mesmo item dentro da janela; satisfação do usuário por item; reabertura permitida a partir da notificação |

Uma leitura saudável é assim. A mediana e o 95º percentil caem juntos, ou o 95º percentil cai enquanto a mediana se mantém. A requisição aberta mais antiga não é muito mais velha que o 95º percentil das atendidas. A taxa de reabertura e a satisfação ficam estáveis ou melhoram enquanto a velocidade melhora. A parcela de automação sobe nos itens que importam por volume, e o próprio volume muda por razões que a equipe sabe explicar. Se um número melhora bruscamente enquanto sua barreira de proteção deriva no sentido oposto, vá olhar as requisições subjacentes.

## Compensações: vantagens e desvantagens

| Escolha | Vantagens | Desvantagens |
| --- | --- | --- |
| Medição por item | As metas se ajustam ao trabalho; mostra onde o redesenho compensa | Mais dados a manter; itens pequenos têm poucos pontos de dados |
| Mediana e 95º percentil em vez da média | Descreve o que os usuários vivenciam; resiste a valores atípicos | Mais difícil de explicar a executivos acostumados a um só número; instável para itens de baixo volume |
| Pausar o relógio quando se espera o usuário | Justo com a equipe quando o usuário causa o atraso | Fácil de abusar; esconde o efeito de formulários pouco claros e má comunicação |
| Contar a parcela de automação | Torna visível o progresso da automação e o liga ao custo | Premia automações fáceis; nada diz sobre qualidade se não for pareada com a taxa de falha |
| Medir do envio do usuário à confirmação do usuário | Combina com a experiência do cliente | Depende da confirmação do usuário, que muitas vezes falta; precisa de uma regra padrão |
| Separação estrita entre requisições e incidentes | Dados mais limpos e metas melhores | Exige disciplina na entrada e discussões sobre casos limítrofes |

A compensação central é entre um número limpo e um número justo. Um relógio estrito que nunca pausa é simples e difícil de manipular, mas penaliza a equipe quando o usuário é lento. Um relógio flexível é mais justo, mas exige auditoria. A maioria das equipes se dá bem começando estrita, acrescentando um estado de pausa explícito com um motivo e relatando abertamente a proporção pausada.

## Perguntas para discutir com sua equipe

**1. Quais os três itens do catálogo que causam mais espera aos nossos usuários, e como sabemos?**
Traga a tabela por item de volume, mediana e 95º percentil do tempo de atendimento. Peça ao grupo que escolha os itens pela espera total (volume vezes espera típica), e não pelo quanto irritam. Compare a resposta com o primeiro instinto das pessoas. O facilitador deve notar onde os dados e o instinto diferem.

**2. Onde o nosso relógio começa e para, e um usuário concordaria?**
Escolha um item comum e percorra sua jornada como o usuário a vê, do primeiro clique até o momento em que pode usar o resultado. Marque onde o status do nosso ticket diz "concluído" e onde o usuário diria "concluído". Qualquer diferença entre os dois é espera invisível. Combinem uma mudança no evento de parada e escrevam no registro de métricas.

**3. Quanto do nosso tempo decorrido é de pessoas trabalhando, e quanto é espera?**
Amostre dez requisições atendidas de um item e divida cada uma em tempo de trabalho ativo, de aprovação e de espera pelo usuário. Mostre o resultado como uma barra empilhada. Pergunte o que teria de ser verdade para a espera cair pela metade. Essa pergunta costuma levar a sala de "precisamos de mais pessoas" para "precisamos de menos transferências".

**4. Quais aprovações poderiam ser substituídas por uma regra pré-combinada?**
Liste as aprovações dos principais itens e a razão de política de cada uma. Onde ninguém lembra da última recusa, a aprovação pode ser um ritual.

**5. Se automatizássemos o próximo item do catálogo, o número subiria pela razão certa?**
Discuta como a parcela de automação pode subir por itens fáceis ou de baixo volume enquanto os usuários não veem diferença. Pergunte o que a equipe mediria para confirmar que uma automação ajudou: tempo de trabalho ativo removido, taxa de falha, taxa de reabertura e satisfação. Decida qual item automatizar em seguida usando volume e tempo de trabalho ativo, e não só a facilidade.

**6. O que faríamos se um número desta página piorasse, e quem seria culpado?**
Faça o experimento mental abertamente. Pergunte o que a equipe seria tentada a mudar nos dados antes de mudar o serviço. Combinem que a primeira resposta a um número que piora é olhar as requisições por trás dele.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto geram requisições sobre os próprios serviços: acesso a ambientes, novos pipelines, dados de teste, chaves de licença. Tempos de atendimento longos aparecem como trabalho ocioso no fluxo da própria equipe; por isso a medida pertence ao seu quadro como um estado bloqueado. As equipes que são donas de um serviço devem publicar seus próprios itens de requisição e metas e tratar requisições repetidas como candidatas a backlog (veja o tópico 2.6, Métricas de backlog e refinamento). Onde uma requisição é na verdade uma capacidade de plataforma que falta, a demanda repetida é o argumento para construí-la.

### Equipes de serviço e operações

Para as pessoas que atendem as requisições, a tabela por item é um mapa de onde vai o esforço. Elas sabem quais passos são manuais, quais aprovações travam e quais formulários produzem entradas vagas. Devem ser donas dos modelos de requisição, do backlog de automação e da revisão mensal e ser o primeiro público dos dados. Os números descrevem a fila e o processo; por isso deixe explícito que ninguém é classificado e que a variação entre pessoas reflete sobretudo a mistura de requisições que pegam.

### Liderança e governança

Os líderes precisam de uma visão curta: mediana e 95º percentil dos principais itens, a proporção atendida dentro da meta, as requisições abertas mais antigas e a tendência da parcela de automação e do custo por requisição (veja o tópico 7.5, Custo de serviço e economia unitária). A tarefa de governança é perguntar o que mudou, não quem é lento. Os líderes também aprovam o lado de política das aprovações, de modo que seguram a alavanca que mais reduz a espera.

### Clientes e usuários

Os usuários se importam com três coisas: quanto tempo, quão previsível e quanto esforço. Raramente se importam com estados internos. Mostre a eles uma meta simples por item ("notebooks em cinco dias úteis"), diga onde está a requisição deles e peça que confirmem a entrega. Colete um sinal de satisfação de uma pergunta no encerramento e leia os comentários.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma universidade regional (uma organização fictícia) mantém uma central de serviços e uma pequena equipe de plataforma. Os números abaixo são ilustrativos, não de nenhuma organização real.

Na revisão mensal, a equipe olha a tabela por item. Entre todas as requisições, o tempo médio de atendimento é de 3,1 dias úteis, o que parece aceitável e mal se moveu em um ano. Por item, o quadro é diferente. "Acesso a pasta compartilhada" tem mediana de 0,4 dia e 95º percentil de 2 dias. "Licença de software departamental" tem mediana de 2 dias e 95º percentil de 11 dias. "Notebook para novo contratado" tem mediana de 6 dias e 95º percentil de 15 dias. Os três principais itens por volume são o acesso a pasta compartilhada, as requisições de licença e os notebooks para novos contratados, com parcelas ilustrativas de 32%, 21% e 9% de todas as requisições.

A equipe amostra dez requisições de notebook e divide o tempo. Resultado ilustrativo: cerca de 0,5 dia de trabalho ativo, 2,5 dias esperando a aprovação do gestor direto, 1,5 dia esperando a confirmação de estoque e o resto numa fila de transporte. A espera por aprovação é a maior parcela.

A decisão decorre dos dados. A equipe propõe, com o responsável financeiro e o responsável por segurança, que os notebooks do catálogo padrão sejam pré-aprovados quando o papel do novo contratado for confirmado pelos recursos humanos, com o gestor notificado em vez de consultado. Também ligam a verificação de estoque ao sistema de inventário. Definem o experimento para um trimestre e combinam o que contaria como sucesso: o 95º percentil dos notebooks cai, e a taxa de reabertura e a nota de satisfação ficam estáveis.

Um risco de manipulação aparece no segundo mês. A mediana das licenças cai bruscamente, de 2 dias para menos de 1. A revisão nota que a proporção do tempo pausado em "aguardando o usuário" para o item saltou de ilustrativos 5% para 40% e que a taxa de reabertura subiu. Uma amostra mostra que os atendentes vinham pausando requisições com uma mensagem genérica no momento em que uma licença precisava de qualquer verificação, o que parava o relógio. A equipe não culpa os atendentes. Percebe que a meta tornou a pausa atraente e que o campo de motivo da pausa era texto livre. Muda o motivo da pausa para uma lista curta, exige uma pergunta específica ao usuário e acrescenta a proporção de tempo pausado como coluna permanente ao lado da mediana. A mediana das licenças volta perto do nível anterior, a taxa de reabertura cai e a equipe usa o tempo de discussão economizado para redesenhar o formulário de licenças, que estava produzindo as requisições pouco claras.

Depois do trimestre (ilustrativo), o 95º percentil dos notebooks cai de 15 para 9 dias e a parcela de automação do acesso a pasta compartilhada chega a 70%. A equipe registra as duas mudanças e escolhe o formulário de licenças como próximo experimento.

## Ágil, IA, automação e análise

### Ágil

Trate as requisições comuns como pequenos produtos que a equipe melhora continuamente com as pessoas que os usam. O cuidado é que uma meta de tempo de atendimento pode levar a encerrar requisições cedo ou a dividi-las; por isso pareie-a com a taxa de reabertura de requisições.

### IA

A IA pode redigir respostas, preencher formulários e rotear requisições, e pode concluir algumas requisições sem nenhuma pessoa envolvida. Pareie a parcela de automação com a taxa de reabertura de requisições e com a proporção das requisições tratadas por IA que precisaram depois de uma pessoa. O cuidado é que uma IA que lê mal uma requisição pode criar o acesso ou o pedido errado; por isso as regras de aprovação continuam valendo.

### Automação

Automatize aprovações, provisionamento e atualizações de status das requisições padrão e meça a automação quanto a falhas e retrabalho manual. Mostre separadamente o tempo de espera por aprovação, já que muitas vezes é a espera mais longa. O cuidado é que a automação sem responsável claro deixa requisições com falha numa fila que ninguém vigia.

### Análise

Mostre o tempo de atendimento como uma distribuição por item do catálogo e inclua a requisição aberta mais antiga. A decisão informada é qual requisição redesenhar primeiro. O cuidado é que misturar itens simples e complexos numa só média esconde ambos.

## Olhar setorial

**Startup.** Uma startup tem poucos tipos de requisição e nenhum catálogo formal, e as mesmas pessoas tratam as requisições e constroem o produto. Meça as três ou quatro requisições que bloqueiam os recém-chegados, como contas e equipamentos, e acompanhe a requisição aberta mais antiga. Automatize cedo a integração de novos contratados, porque cada contratação a repete.

**Pequena empresa.** Uma pequena empresa muitas vezes depende de uma pessoa de TI ou de um provedor externo. Use um quadro compartilhado simples, com uma coluna para cada estado, e acompanhe a idade e o volume das requisições por tipo. Peça ao provedor o volume mensal por item e a requisição aberta mais antiga.

**Grande empresa.** Uma grande empresa tem centenas de itens de catálogo, muitos grupos de atendimento e aprovações em camadas. Concentre-se nos principais itens por volume e nos itens de maior espera total. Padronize a definição de relógio entre os grupos de atendimento antes de compará-los e relate separadamente as transferências entre grupos (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho). Os tempos de atendimento de fornecedores pertencem à mesma visão, medidos da requisição do cliente, e não do recebimento pelo fornecedor.

**Governo e setor público.** Os órgãos públicos acrescentam aprovações obrigatórias, regras de compras e obrigações de registros; por isso parte do tempo de espera é política e deve ser rotulada como tal, em vez de contada como atraso a remover. Publique as metas por item em linguagem simples onde os compromissos de serviço forem públicos. Relate de um modo que um regulador ou órgão de controle consiga reproduzir, com as definições escritas.

## Business case: motivações, ROI e TCO

As requisições são uma parcela grande e repetitiva do trabalho que chega a uma central de serviços; por isso mesmo um redesenho modesto tem amplo efeito. As principais motivações são esperas mais curtas e previsíveis para os usuários, menor esforço de tratamento por requisição, menos contatos repetidos e capacidade liberada para o trabalho de problemas e melhoria.

O lado do custo é sobretudo pontual e modesto. Definir os itens do catálogo, combinar os relógios e garantir que a ferramenta registre os estados necessários são alguns dias de trabalho por grupo, mais um pequeno esforço contínuo para manter o pipeline correto (veja o tópico 1.5, Fontes de dados e instrumentação). A automação tem seu próprio custo de construção e manutenção, que inclui monitorar as automações, tratar falhas e atualizá-las quando os sistemas-alvo mudam. Conte isso no custo total de propriedade além da licença ou do tempo de construção.

O retorno deve ser estimado a partir dos seus próprios dados, e não de uma referência geral. Para um item, multiplique o volume mensal pelo tempo de trabalho ativo economizado e pelo custo carregado desse tempo e subtraia o custo de construção e operação da mudança. Acrescente o valor do tempo de espera removido para os usuários, usando um método que você possa defender, e mostre-o à parte, porque é uma estimativa de outro tipo. Nenhuma cifra deste tópico é uma referência de mercado, e os números do exemplo são ilustrativos. Ligue o business case ao custo unitário por requisição onde os dados financeiros existirem (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Uma média misturada para todas as requisições.** Esconde tanto os ganhos rápidos quanto a cauda longa. Relate por item, com uma mediana e um 95º percentil.
- **Encerrar o ticket e chamar de entregue.** O usuário ainda pode não ter nada. Defina a entrega do lado do usuário e peça confirmação.
- **Estados de pausa de texto livre.** Um status "aguardando" sem motivo permite parar o relógio por qualquer causa. Use uma lista curta de motivos e relate a proporção pausada.
- **Contar a automação por número de itens.** Dez itens raros automatizados podem elevar a porcentagem sem ajudar ninguém. Pondere pelo volume e pelo tempo de trabalho ativo.
- **Classificar atendentes por requisições encerradas.** Premia a escolha de tickets fáceis e pune quem pega os difíceis. Relate apenas no nível de equipe e de item.
- **Esconder a demanda para parecer eficiente.** Tornar o catálogo difícil de usar reduz o volume e eleva a frustração. Pareie o volume com dados de satisfação e de adoção.
- **Tratar as aprovações como intocáveis.** As aprovações muitas vezes são o maior atraso e raramente são revistas. Pergunte o que cada uma protege e se uma regra pode fazer o trabalho.
- **Misturar requisições com incidentes.** Distorce os dois conjuntos de números. Classifique na entrada e amostre a classificação.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | As requisições são contadas como tickets; o fim do relógio é o que "encerrado" significar | Algumas equipes definem início e parada por item; as definições diferem | Uma definição escrita de relógio por item do catálogo, compartilhada entre equipes | Definições revistas em uma cadência e mudanças registradas com motivos | Definições seguem a visão do cliente entre fornecedores e são revistas quando deixam de informar decisões |
| Dados e relato | Contagens tiradas à mão da ferramenta | Relatórios de alguns itens a partir da ferramenta de ITSM; tempos médios | Mediana e 95º percentil por item de uma só fonte de dados | Tendências, idade do backlog e proporção de tempo pausado revistas com suas barreiras de proteção | Dados de atendimento de equipes internas e de fornecedores combinados e ligados a resultados dos usuários |
| Demanda e automação | Requisições tratadas uma a uma; sem visão da demanda repetida | Principais itens identificados informalmente; alguns scripts | Modelos de requisição documentados para os principais itens; backlog de automação classificado por volume e tempo de trabalho ativo | Parcela de automação e taxa de falha acompanhadas; aprovações redesenhadas com base em evidências | Demanda, autoatendimento e automação planejados em conjunto em toda a organização e adaptados continuamente |
| Uso na melhoria | Números relatados para cima, não usados | Correções ocasionais depois de reclamações | Revisão mensal pela equipe que faz o trabalho | Melhorias financiadas ligadas a resultados por item | Ideias de melhoria chegam de equipes, usuários e fornecedores, e os resultados realimentam o projeto do catálogo |

## Lista de verificação

- [ ] Todo item do catálogo no escopo tem um responsável, uma definição de uma linha de "entregue" e uma meta declarada.
- [ ] Os eventos de início e de parada do relógio de atendimento estão escritos para cada item.
- [ ] A espera pelo usuário é um estado separado com uma lista curta de motivos, e o tempo pausado é relatado.
- [ ] Os relatórios mostram a mediana e o 95º percentil por item, com o número de requisições por trás de cada um.
- [ ] As requisições abertas mais antigas ficam visíveis para a equipe toda semana.
- [ ] O tempo de trabalho ativo, de aprovação e de espera foi amostrado para os principais itens.
- [ ] O volume por item é revisto mensalmente e comparado com dados de adoção ou de satisfação.
- [ ] A parcela de automação é ponderada pelo volume e pareada com as taxas de falha e de retorno ao manual.
- [ ] Cada métrica de velocidade é pareada com a taxa de reabertura e um sinal de satisfação do usuário.
- [ ] Requisições, incidentes e mudanças são classificados na entrada, e a classificação é amostrada.
- [ ] Nenhum relatório classifica atendentes individuais.

## Prompts de IA

**Redija um modelo de requisição e uma definição de relógio para um item do catálogo.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Divida o tempo decorrido em tempo de trabalho ativo e de espera.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Classifique os candidatos à automação.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Revise um painel de atendimento quanto ao risco de manipulação.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a definição, o vetor de manipulação e a barreira de proteção de uma métrica de requisições e os tópicos vizinhos que se pareiam com ela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm intactos o modelo, os relógios e os pareamentos de barreiras de proteção.

## Ideias-chave

- Meça o atendimento por item do catálogo, do envio do usuário à confirmação do usuário, e relate a mediana e um percentil alto.
- A maior parte do tempo decorrido é espera; por isso divida o tempo de trabalho ativo, de aprovação e de espera pelo usuário antes de decidir o que corrigir.
- Leia o volume por item como uma mensagem dos usuários e automatize primeiro os itens frequentes e estáveis.
- Pareie todo número de velocidade com a taxa de reabertura e um sinal de satisfação e relate abertamente o tempo pausado.
- Descreva a fila e o processo, nunca a pessoa.

## Referências e leituras complementares

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Automação de processos](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Catálogo de serviços](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
