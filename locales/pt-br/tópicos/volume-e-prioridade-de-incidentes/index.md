# Volume e prioridade de incidentes

**Conte os incidentes contra o uso que os produziu, leia a prioridade como uma mistura e não como uma nota e observe as repetições, porque a forma da demanda de incidentes diz onde investir muito antes de qualquer tempo de resolução isolado.**

## Visão geral e motivação

Um incidente, nos termos do [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, é uma interrupção não planejada de um serviço ou uma redução da sua qualidade. A [gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management) é a prática que restabelece a operação normal do serviço o mais depressa possível e limita o dano ao negócio. Todo incidente é também um sinal: algo no serviço, em suas mudanças, em seus usuários ou em seu monitoramento não funcionou como esperado. A contagem e o caráter dos incidentes são, portanto, uma das medidas de demanda mais informativas de que uma equipe de operações dispõe.

O volume sozinho é um mau guia. Uma alta de incidentes pode significar que o serviço piorou, ou que mais pessoas o usam, ou que o monitoramento melhorou e agora vê falhas que antes passavam sem relato. Uma queda pode significar que o trabalho de confiabilidade deu resultado ou que os usuários pararam de se dar ao trabalho de relatar. Este tópico trata de ler o volume com contexto suficiente para distinguir essas histórias: normalizando contra o uso, dividindo por categoria e serviço e observando a mistura de prioridades e a taxa de repetições.

A prioridade é a segunda metade do tópico. A prática do ITIL costuma derivar a prioridade de duas entradas: o impacto (quanto do negócio é afetado) e a urgência (com que rapidez o negócio precisa da correção). O par é mapeado para um nível de prioridade que define a resposta esperada. As equipes ágeis têm uma contrapartida próxima na forma como fazem a triagem de um backlog: rótulos de severidade e de urgência nos defeitos e uma "classe de serviço" num quadro de fluxo que decide o que fura a fila. As palavras diferem; a pergunta é a mesma: o que deve ser tratado primeiro e por quê.

A visão do ITIL trata os incidentes como registros de propriedade de uma central de serviços e de grupos resolvedores, com categorias, prioridades e metas de nível de serviço. A visão ágil trata o trabalho não planejado como uma interrupção do fluxo que compete com o trabalho planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Ambas as visões se beneficiam das mesmas medidas, se as medidas descreverem o sistema e não as pessoas dentro dele. A [central de serviços](https://en.wikipedia.org/wiki/Help_desk_software) é onde a maioria dos registros começa, e suas próprias métricas são tratadas à parte (veja o tópico 3.1, Métricas da central de serviços). A rapidez com que os incidentes são respondidos e resolvidos é tratada no tópico 3.3, Tempo de resposta e de resolução de incidentes. Os incidentes graves têm suas próprias medidas (veja o tópico 3.4, Métricas de incidentes graves).

Vários termos se repetem abaixo. Um **percentil** é o valor abaixo do qual cai uma proporção declarada das observações; assim, o 85º percentil é o valor que 85% das observações não excedem. Um **acordo de nível de serviço (SLA)** é um compromisso documentado entre um provedor e um cliente. Um **item de configuração (CI)** é um componente que precisa ser gerido para entregar um serviço. Um **processo de Poisson** descreve eventos que chegam de forma independente a uma taxa média, o que é um bom primeiro modelo para as chegadas de incidentes (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

O alerta do tópico 1.2 (A lei de Goodhart e a psicologia das métricas) se aplica aqui mais do que na maioria dos lugares. As contagens e as prioridades de incidentes são inseridas por pessoas, muitas vezes sob pressão, e o número ligado a um registro pode ser alterado mudando a maneira como o registro é escrito. Toda métrica abaixo tem um vetor de manipulação, e as barreiras de proteção fazem parte da definição.

## Princípios-chave

- **Normalize antes de comparar.** Uma contagem significa pouco sem o uso, a base de usuários ou o volume de transações de que veio. Compare taxas entre períodos e serviços e mostre a contagem bruta ao lado.
- **Leia a mistura, não um número único.** A distribuição de prioridades, a distribuição de categorias e a proporção de repetições dizem mais em conjunto do que qualquer total.
- **Prioridade é uma regra, não um humor.** Derive-a do impacto e da urgência usando uma matriz escrita e meça com que frequência é alterada depois do fato.
- **Separe incidentes de requisições.** Um pedido de algo normal não é uma falha. Contar os dois juntos infla o volume de incidentes e esconde em que a central de serviços gasta seu tempo (veja o tópico 3.5, Métricas de atendimento de requisições de serviço).
- **As repetições são o sinal mais valioso.** Um incidente que volta aponta para um problema que ainda não foi resolvido (veja o tópico 4.1, Métricas de gestão de problemas).
- **Meça serviços e equipes, nunca atendentes.** Contagens por pessoa convidam à classificação, e a classificação corrompe os dados (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).
- **Espere que o volume se mova por razões que não são qualidade.** Releases, estações, campanhas e mudanças nos canais de relato deslocam as contagens. Anote o gráfico.

## Definições de métricas

A tabela lista as métricas deste tópico. Os relógios e as fronteiras são declarados na coluna da fórmula. "Encerrado" e "aberto" se referem a carimbos de data e hora do registro do incidente; o horário de abertura é quando o registro é criado ou quando o sistema de monitoramento o cria, e o horário de encerramento é quando o incidente é confirmado como resolvido e encerrado.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de incidentes por serviço | Contagem dos incidentes abertos para um serviço em um período | incidentes com horário de abertura dentro do período, atribuídos ao serviço afetado; requisições de serviço, duplicatas fundidas em um registro pai e registros cancelados por terem sido levantados por engano são excluídos | contagem | Registros de incidentes da ferramenta de ITSM | Gestão de incidentes | Defeitos de produção ou itens de trabalho não planejado por equipe | Semanal, revisto mensalmente |
| Taxa normalizada de incidentes | Incidentes em relação ao uso do serviço | incidentes abertos no período / medida de uso do mesmo período e escopo (usuários ativos, sessões ou transações, escolhidos e registrados por serviço) x 1.000; a medida de uso deve vir de uma fonte que não seja a ferramenta de incidentes | incidentes por 1.000 unidades de uso | Ferramenta de ITSM mais dados de uso de análise ou monitoramento | Gestão de incidentes; gestão de nível de serviço | Densidade de defeitos por release ou por usuário | Mensal |
| Mistura de prioridades | Proporção dos incidentes abertos em cada nível de prioridade | incidentes na prioridade registrada na abertura / todos os incidentes abertos no período, mostrada para cada nível; incidentes reclassificados são contados na prioridade de abertura e mostrados de novo na prioridade de encerramento | porcentagem por nível | Ferramenta de ITSM, inclusive o histórico de mudanças de prioridade | Gestão de incidentes | Distribuição de severidade de defeitos; mistura de classes de serviço | Mensal |
| Taxa de reclassificação de prioridade | Proporção dos incidentes cuja prioridade mudou entre a abertura e o encerramento | incidentes encerrados no período cuja prioridade de encerramento difere da de abertura / incidentes encerrados no período | porcentagem | Trilha de auditoria da ferramenta de ITSM | Gestão de incidentes | Taxa de retriagem no backlog de defeitos | Mensal |
| Concentração por categoria | Proporção do volume de incidentes retida pelas maiores categorias | incidentes nas cinco principais categorias por contagem / todos os incidentes categorizados no período; incidentes sem categoria são relatados à parte como sua própria proporção | porcentagem | Campos de categoria e de serviço da ferramenta de ITSM | Gestão de incidentes; gestão de problemas | Agrupamentos de defeitos por componente ou épico | Mensal |
| Taxa de incidentes repetidos | Proporção dos incidentes que se repetem para o mesmo serviço, item de configuração e categoria dentro de uma janela declarada | incidentes no período com um incidente anterior encerrado para o mesmo serviço, CI e categoria na janela precedente (por exemplo 30 dias, definida uma vez e registrada) / incidentes abertos no período; um registro reaberto conta como reabertura, não como repetição | porcentagem | Ferramenta de ITSM e ligações com o CMDB | Gestão de incidentes; gestão de problemas | Taxa de regressão ou de defeitos escapados | Mensal |
| Taxa de reabertura | Proporção dos incidentes encerrados que foram reabertos | incidentes encerrados no período que foram depois reabertos dentro de uma janela declarada (por exemplo 7 dias) / incidentes encerrados no período | porcentagem | Histórico de status da ferramenta de ITSM | Gestão de incidentes | Defeitos reabertos; retrabalho | Mensal |
| Proporção detectada por monitoramento | Proporção dos incidentes levantados primeiro pelo monitoramento antes de um usuário relatar | incidentes cujo primeiro evento é um alerta automatizado / todos os incidentes abertos no período; incidentes abertos por uma pessoa a partir de um alerta são contados pelo horário do alerta | porcentagem | Ferramenta de ITSM, integração de monitoramento | Monitoramento e gestão de eventos; gestão de incidentes | Defeitos detectados por alerta versus relatados por clientes | Mensal |

Duas notas sobre as definições. A primeira é que a "prioridade" nesta tabela é a prioridade que o registro carrega, que deve vir da matriz de impacto e urgência e não da ordem em que as pessoas querem o trabalho feito. A segunda é que o volume relatado para um período é uma contagem de aberturas, e não uma contagem de incidentes abertos num dado dia. A contagem de abertos num dado momento é uma medida de backlog e pertence junto com o envelhecimento (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

## Recomendações

### Conte com cuidado

**1. Escreva o que um incidente é e o que não é.** Muitas ferramentas guardam incidentes, requisições, alertas e problemas numa só tabela. Decida quais tipos de registro contam, documente o filtro e aplique-o sempre. Uma mudança no filtro muda a tendência; por isso registre as mudanças com data e motivo (veja o tópico 1.5, Fontes de dados e instrumentação).

**2. Elimine as duplicatas antes de relatar.** Quando uma falha produz cinquenta tickets, o incidente pai é o evento e os filhos são uma medida do seu alcance. Relate os dois números: incidentes pais para quantas falhas ocorreram e registros vinculados para quantas pessoas as sentiram. Misturar os dois faz uma grande interrupção parecer um mês de trabalho rotineiro.

**3. Atribua os incidentes a serviços além de equipes.** O serviço é aquilo que o negócio compra e entende. Use o catálogo de serviços (o "service catalogue" do ITIL) para definir a lista e reveja o mapeamento dos CIs quando os serviços mudarem. Um incidente sem serviço é um problema de qualidade de dados a corrigir, e a proporção desses registros vale a pena relatar.

### Normalize e interprete o volume

**4. Normalize contra uma medida de uso de outra fonte.** Divida por usuários ativos, sessões ou transações, tirados de análise ou monitoramento e não da ferramenta de incidentes. Um serviço que dobrou seus usuários e seus incidentes não piorou; um serviço cujos incidentes dobraram com uso estável, sim. Mostre a contagem bruta ao lado da taxa para que ninguém acredite que o denominador esconde algo.

**5. Use um gráfico de controle, não uma seta de tendência.** As contagens de incidentes variam de semana para semana mesmo quando nada mudou. Um [gráfico de controle](https://en.wikipedia.org/wiki/Control_chart) mostra a faixa usual de variação, de modo que a equipe reaja a um sinal e deixe o ruído em paz. Contagens semanais que se movem dentro dos limites não são notícia; uma sequência sustentada de um lado da média é. Ajuste a [sazonalidade](https://en.wikipedia.org/wiki/Seasonality), como fim de trimestre, feriados e ciclos de release, comparando períodos equivalentes.

**6. Anote o gráfico com eventos.** Marque releases, migrações, campanhas, interrupções de dependências e mudanças no canal de relato. Um novo formulário de autoatendimento ou um botão "relatar um problema" mais visível pode elevar o volume enquanto o serviço continua o mesmo. A maioria das discussões sobre volume termina depressa quando o gráfico mostra o que aconteceu naquela semana.

### Gerencie a prioridade com regras

**7. Derive a prioridade do impacto e da urgência com uma matriz publicada.** Defina o impacto em termos de usuários e funções de negócio afetados e a urgência em termos de quão cedo o dano cresce. Publique a matriz na página em que os atendentes escolhem os valores, com dois ou três exemplos resolvidos por célula. Evite campos de prioridade de escolha livre; eles viram negociação, e a contagem de incidentes de "prioridade 1" passa a ser uma medida de persuasão.

**8. Relate juntas a mistura e a taxa de reclassificação.** Uma mistura saudável tem um pequeno número de incidentes de prioridade mais alta e uma ampla base de prioridades mais baixas. Se o nível mais alto cresce, pergunte se o dano cresceu ou se os clientes aprenderam que "crítico" recebe atenção. A taxa de reclassificação mostra quão bem a matriz se ajusta: mudanças frequentes no encerramento significam que a regra é pouco clara ou que a primeira avaliação é apressada. Reveja uma amostra de registros reclassificados todo mês no grupo dono da matriz.

**9. Mantenha alinhadas a prioridade e a classe de serviço ágil.** Onde as equipes de entrega recebem trabalho vindo de incidentes, use as mesmas palavras e a mesma matriz, ou publique um mapeamento claro. Uma equipe que chama um defeito de "alto" enquanto as operações chamam o mesmo defeito de "médio" perderá tempo com a tradução. Reserve uma margem explícita para o trabalho expedido, de modo que a interrupção fique visível nas medidas de fluxo (veja o tópico 2.1, Medidas de fluxo).

### Procure repetições e padrões

**10. Acompanhe repetições e reaberturas como sinais separados.** Uma reabertura significa que a primeira correção não se sustentou; uma repetição significa que o mesmo tipo de falha voltou depois de uma correção adequada. A primeira aponta para a qualidade da resolução e a segunda para uma causa não resolvida. Ligue os agrupamentos que se repetem a registros de problemas e pare de contar um incidente como corrigido quando é provável que ele volte (veja o tópico 4.1, Métricas de gestão de problemas).

**11. Use o [princípio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle) para escolher onde olhar.** Ordene categorias e serviços por contagem de incidentes e veja quão poucos respondem pela maior parte do volume. Investigue os primeiros antes de montar novos relatórios para o resto. O formato é um gatilho para a [análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis), não uma conclusão, porque uma categoria de contagem alta pode simplesmente ser a mais fácil de categorizar.

**12. Devolva os achados às equipes de entrega e à central de serviços.** Compartilhe as visões de categoria e de repetição com as equipes que constroem e mudam os serviços, numa conversa regular e não num relatório. Pareie cada agrupamento recorrente com um responsável, um próximo passo e uma data e ponha o trabalho no mesmo backlog que as outras prioridades (veja o tópico 2.6, Métricas de backlog e refinamento). O volume cai quando as causas são removidas, e isso exige capacidade planejada.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Volume de incidentes por serviço | Registrar incidentes como requisições, fundir tickets sem relação, desencorajar os usuários a relatar ou encerrar duplicatas como "nenhuma falha encontrada" | Volume de contatos relatados por usuários e de requisições ao lado do volume de incidentes; satisfação e abandono da central de serviços; amostra de requisições que parecem falhas |
| Taxa normalizada de incidentes | Escolher o denominador que dá a melhor cifra, ou mudar a definição de uso entre períodos | Medida de uso fixa por serviço, registrada no registro; contagens brutas mostradas ao lado da taxa |
| Mistura de prioridades | Rebaixar prioridades para parecer calmo ou elevá-las para obter atenção; atribuir prioridade baixa para evitar uma meta de resposta | Taxa de reclassificação de prioridade; revisão amostral mensal contra a matriz de impacto e urgência; impacto relatado pelo cliente |
| Taxa de reclassificação de prioridade | Não mudar a prioridade quando deveria mudar, para que a taxa pareça estável; mudá-la só no encerramento para se ajustar à meta | Amostra de registros em que o impacto mudou durante o incidente; revisões das linhas do tempo dos incidentes |
| Concentração por categoria | Usar uma categoria genérica, ou dividir uma categoria grande em várias para esconder a concentração | Proporção de registros "outros" e sem categoria; revisão periódica da lista de categorias; conferência das categorias contra as notas de resolução |
| Taxa de incidentes repetidos | Abrir um novo incidente com outra redação ou CI para evitar a ligação; encerrar cedo para evitar uma reabertura | Revisão de registros quase duplicados por texto e serviço; taxa de reabertura; taxa de ligação com registros de problemas |
| Taxa de reabertura | Pedir ao usuário que abra um novo ticket em vez de reabrir; encerrar tickets tarde para evitar reaberturas | Contagem de novos tickets que referenciam um recém-encerrado; confirmação da resolução pelo cliente; distribuição do tempo até o encerramento |
| Proporção detectada por monitoramento | Criar alertas ruidosos que abrem incidentes automaticamente, ou deixar pessoas rebatizarem relatos de usuários como alertas | Medidas de qualidade de alertas, como a proporção de alertas acionáveis (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas); auditoria da origem dos incidentes |

Uma leitura saudável é enfadonha e explicável. As taxas normalizadas são estáveis ou estão caindo para serviços estáveis e sobem quando o uso ou a mudança sobem, por uma razão que o gráfico mostra. A mistura de prioridades é estável, a reclassificação é baixa e um pequeno conjunto de categorias recebe atenção deliberada. As repetições e reaberturas caem depois do trabalho planejado sobre problemas, e um movimento em qualquer métrica tem uma explicação que alguém pode dar sem defender o número.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Contagens brutas de incidentes | Simples, fáceis de explicar, sempre disponíveis | Misturam uso, qualidade e comportamento de relato em um só número |
| Taxas contra o uso | Permitem comparação justa entre períodos e serviços | Exigem uma fonte de uso confiável; os denominadores podem ser discutidos |
| Matriz fixa de impacto e urgência | Prioridade consistente entre equipes; auditável | Pode parecer rígida; casos limite exigem julgamento e um caminho de substituição |
| Prioridade de escolha livre | Rápida e flexível para atendentes experientes | Inconsistente, aberta à pressão, difícil de comparar ao longo do tempo |
| Árvore de categorias detalhada | Mostra de onde vem a demanda | Difícil de usar sob pressão; as pessoas escolhem a primeira que combina ou "outros" |
| Lista curta de categorias com etiquetas | Rápida de aplicar e consistente | Menos detalhe; pode esconder padrões que exigem análise de texto |
| Taxa de repetição por CI e categoria | Aponta para causas não resolvidas | Depende de bons dados de CI; ocorrem ligações falsas e perdas |

Aceite que nenhuma medida isolada é a certa. Use contagens brutas para o planejamento de capacidade, taxas para a saúde, a mistura de prioridades para o risco e as repetições para a melhoria, e mostre cada uma pelo que é. Mantenha a lista de categorias curta o bastante para que as pessoas a usem e melhore a árvore apenas quando uma decisão precisar de mais detalhe.

## Perguntas para discutir com sua equipe

**1. O que conta como incidente aqui, e todos aplicam a regra do mesmo jeito?**
Pegue dez registros recentes e peça a cada pessoa que os rotule como incidente, requisição ou outra coisa. Compare as respostas e discuta as divergências. O facilitador deve procurar hábitos como tratar todo ticket de uma pessoa sênior como incidente e depois combinar uma regra escrita com exemplos. Registre a data para que as tendências posteriores sejam lidas corretamente.

**2. Quando o volume de incidentes subiu no último trimestre, o que sabíamos sobre uso e mudança naquele momento?**
Ponha o gráfico ao lado de uma linha do tempo de releases, campanhas e cifras de uso. Pergunte qual alta foi explicada e qual não foi. A discussão costuma mostrar com que raridade o denominador está na página. Combinem qual medida de uso cada serviço carregará daqui em diante.

**3. Como a prioridade é decidida, e quando foi a última vez que ela nos surpreendeu?**
Percorra a matriz de impacto e urgência com um exemplo recente de cada nível de prioridade. Pergunte onde os atendentes chutam e onde clientes ou gestores pressionam. Compare a prioridade de abertura e a de encerramento de alguns registros. Decida uma mudança na matriz ou em seus exemplos que reduza a discussão.

**4. Quais três categorias levam a maior parte do nosso volume de incidentes, e quem está trabalhando para remover a causa?**
Liste as principais categorias e, para cada uma, o responsável pela causa subjacente. Se a resposta for "ninguém", isso é um achado. Pergunte se a categoria é um agrupamento real ou um hábito de rotular. Escolha um agrupamento para investigar com a equipe de entrega neste trimestre.

**5. Como distinguimos uma repetição de uma reabertura, e o que fazemos com cada uma?**
Mostre à equipe dois ou três pares de registros e pergunte quais são repetições. Discuta o que uma reabertura diz sobre a qualidade da primeira correção e o que uma repetição diz sobre a causa. O facilitador deve conduzir o grupo a ligar os agrupamentos que se repetem a registros de problemas em vez de encerrá-los um por um. Combinem quem os revê e com que frequência.

**6. O que seríamos tentados a mudar se a nossa contagem de incidentes fosse revista toda semana pela alta liderança?**
Peça ao grupo que imagine o número numa parede. Que hábitos mudariam: como as coisas são registradas, como os tickets são fundidos, como as prioridades são definidas? Nomeie a pressão abertamente e sem culpa. Combinem qual barreira de proteção mostraria a mudança e quem a observa.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega recebem a produção deste tópico como demanda. As visões de categoria e de repetição mostram quais partes do produto causam mais problemas, e a mistura de prioridades mostra quanto trabalho de interrupção planejar. As equipes devem tratar o trabalho vindo de incidentes como parte de sua capacidade, mantê-lo visível nas medidas de fluxo e usar os agrupamentos de repetição para justificar trabalho de confiabilidade no backlog (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Contar incidentes por release é uma tendência útil, embora nunca deva virar uma medida de culpa para desenvolvedores individuais.

### Equipes de serviço e operações

As equipes de serviço e operações criam os registros e sentem a pressão em torno da prioridade. Ganham com uma matriz clara, uma lista curta de categorias e formas rápidas de vincular duplicatas. Devem conferir os dados nas próprias ferramentas, como a proporção de registros sem categoria e a taxa de reclassificação, antes que outros o façam. As equipes de operações estão bem posicionadas para conduzir a revisão amostral mensal e alimentar a gestão de problemas com os agrupamentos que se repetem.

### Liderança e governança

Os líderes querem saber se o serviço está melhorando e onde investir. Devem pedir taxas normalizadas, a mistura de prioridades e a visão de repetições, com anotações, e resistir a uma cifra única de volume. Metas de "menos incidentes" convidam à supressão; por isso defina expectativas sobre resultados como o impacto sobre o cliente e a redução de repetições. A governança deve ser dona da matriz de prioridades e aprovar mudanças nela, com o efeito sobre as linhas de tendência anotado.

### Clientes e usuários

Os clientes vivenciam os incidentes como trabalho interrompido, não como categorias. Precisam de uma forma fácil de relatar uma falha, de uma prioridade justa baseada em seu impacto e de atualizações honestas. Se os relatos são desencorajados ou as prioridades parecem arbitrárias, o volume cairá e a confiança cairá junto. Compartilhe os principais achados em termos que os usuários reconheçam, como os serviços melhorados e os problemas removidos (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional dá suporte a um sistema de prontuários, a um sistema de agendamento e a uma ferramenta de mensagens para a equipe. Todos os números deste exemplo são ilustrativos.

O relatório mensal mostra 640 incidentes no último mês do trimestre, contra 520 no mês anterior. A liderança pede um plano de recuperação. O responsável pelo serviço de agendamento, cuja contagem mais subiu, pede para olhar os dados antes de concordar que o serviço piorou.

Três fatos emergem. Primeiro, o sistema de agendamento ganhou um novo grupo de clínicas naquele mês, e os usuários ativos subiram cerca de 30% (ilustrativo). Normalizada, a taxa de incidentes por 1.000 sessões ficou aproximadamente estável. Segundo, 90 dos registros extras estavam ligados a um incidente pai, uma interface falha com um sistema de laboratório; por isso o número de falhas distintas subiu apenas um punhado. Terceiro, a mistura de prioridades mudou: a proporção da prioridade mais alta era de 2% no mês anterior e agora é de 7%. A taxa de reclassificação também dobrou, e uma amostra de 20 registros mostrou que cerca de metade das prioridades altas havia sido rebaixada no encerramento.

A equipe toma três decisões. Passa a relatar separadamente os incidentes pais e os registros vinculados. Acrescenta ao relatório as sessões ativas como denominador. Faz uma sessão de meia hora com a central de serviços e os líderes clínicos para aplicar a matriz de impacto e urgência aos registros amostrados, o que mostra que "uma clínica não consegue agendar pacientes" vinha sendo tratado como médio por alguns atendentes e como alto por outros. A matriz ganha dois exemplos clínicos por célula.

O risco de manipulação que eles pegam é silencioso. Um gerente havia pedido aos atendentes que evitassem a prioridade 1 para o sistema de agendamento porque cada uma disparava uma revisão; por isso os registros eram abertos em prioridade mais baixa e elevados depois, ou nunca elevados. A taxa de reclassificação e a revisão amostral expuseram o padrão. A equipe combina que as revisões são sobre aprendizado, publica essa declaração e acompanha a proporção de incidentes abertos abaixo da prioridade de encerramento como uma barreira de proteção. A concentração por categoria também mostra a falha da interface no topo da lista; por isso um registro de problema é aberto e uma correção é agendada com a equipe da interface.

## Ágil, IA, automação e análise

### Ágil

Reveja a demanda de incidentes nas conversas regulares de melhoria com as equipes de produto donas dos serviços afetados e escolha uma causa de repetição para remover. O cuidado é que uma meta de menos incidentes pode reduzir o relato honesto; por isso mantenha a proporção detectada por monitoramento ao lado da contagem.

### IA

A IA pode classificar e priorizar incidentes em volume, o que desloca a mistura de prioridades e a concentração por categoria sem nenhuma mudança no impacto real. Pareie a mistura de prioridades com uma verificação humana amostral da honestidade da prioridade e relate a taxa de reclassificação das prioridades atribuídas por IA. O cuidado é que um modelo treinado em tickets passados repete antigos hábitos de categoria; por isso fique atento a novos tipos de incidente arquivados sob rótulos antigos.

### Automação

Capture automaticamente a criação de incidentes, as mudanças de prioridade e os alertas de monitoramento para que o volume seja contado a partir de eventos e meça a etapa de autoclassificação quanto à sua taxa de erro. O cuidado é que tempestades de alertas criam contagens de incidentes que refletem o ferramental, e não dano ao usuário; por isso normalize pelo uso e elimine as duplicatas.

### Análise

Normalize o volume pelo uso e mostre a prioridade como uma mistura ao longo do tempo, com os incidentes repetidos ligados a uma causa. A decisão informada é onde investir em prevenção. O cuidado é que uma baixa contagem de incidentes de alta prioridade é pequena demais para comparar de mês a mês; por isso use janelas mais longas.

## Olhar setorial

**Startup.** O volume é pequeno e a equipe conhece cada incidente; por isso taxas e matrizes podem parecer pesadas. Mantenha uma contagem simples por serviço e uma curta lista de categorias e escreva numa página o que conta como incidente. Atente às repetições, porque uma equipe pequena pode eliminar depressa uma falha repetida e recuperar tempo.

**Pequena empresa.** A central de serviços pode ser uma só pessoa usando uma ferramenta hospedada. Use os relatórios padrão da ferramenta, mantenha a prioridade em poucos níveis com uma regra simples de impacto e urgência e confira que as requisições não estejam sendo contadas como incidentes. Compare mês a mês com notas sobre mudanças, como novos funcionários ou novos softwares.

**Grande empresa.** Muitos serviços, fornecedores e centrais fazem da consistência o principal problema. Combine uma única matriz de impacto e urgência, um único esquema de categorias com profundidade limitada e uma regra única de eliminação de duplicatas e deixe as equipes locais acrescentarem etiquetas sem mudar o esquema compartilhado. Normalize por serviço e reveja as tendências com gráficos de controle e anotações. Os incidentes causados por fornecedores precisam de uma definição compartilhada nos contratos (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

**Governo e setor público.** Os incidentes podem carregar deveres de relato, necessidades de auditoria e interesse público, sobretudo onde os serviços afetam direitos ou a segurança dos cidadãos. Documente a matriz de prioridades e o esquema de categorias, mantenha uma trilha de auditoria das mudanças de prioridade e tome cuidado com qualquer contagem publicada, já que o relato público pode criar forte pressão sobre como os registros são escritos. Os dados de uso podem ser limitados por regras de privacidade; por isso declare o denominador que você pode legitimamente usar (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é a gestão da demanda. Os incidentes consomem tempo qualificado, interrompem o trabalho planejado e perturbam os usuários. Entender o volume, a prioridade e as repetições permite que uma organização remova causas, dimensione o pessoal contra a demanda real e mostre aos líderes onde o trabalho de confiabilidade compensaria.

O custo tem três partes. A configuração cobre definir incidente e requisição, combinar a matriz de prioridades e o esquema de categorias e ligar os dados de uso aos serviços. O custo de operação é o esforço de manter os registros limpos, uma revisão amostral mensal e uma pessoa para manter o relatório. O terceiro custo é o tempo para agir sobre os achados, que é de onde vem a maior parte do retorno; por isso planeje capacidade para ele.

O retorno é melhor descrito como padrões que você mesmo pode medir. Eles incluem menos repetições após o trabalho sobre problemas, menos tempo gasto em disputas de prioridade, menos escalonamentos-surpresa e um melhor encaixe entre pessoal e demanda. Evite prometer uma redução percentual de incidentes; ela depende do serviço, do ponto de partida e do trabalho feito. O custo total de propriedade é sobretudo tempo das pessoas; por isso conte-o e compare-o com o tempo que os incidentes repetidos consomem hoje.

## Antipadrões e armadilhas

- **Relatar uma contagem bruta como nota de saúde.** O uso, a mudança e o comportamento de relato a movem. Mostre juntos as taxas normalizadas, as contagens brutas e as anotações.
- **Metas de menos incidentes.** Premiam a supressão e o rótulo errado. Defina objetivos de redução de repetições e de impacto sobre o cliente e mantenha a contagem de incidentes como informação.
- **Contar requisições como incidentes.** O volume sobe e o serviço parece pior do que é. Separe os tipos de registro e relate cada um.
- **Prioridade de escolha livre.** A prioridade vira negociação e a mistura perde o sentido. Use uma matriz publicada e amostre quanto à consistência.
- **Uma árvore de categorias que ninguém usa.** As pessoas escolhem a primeira que combina, e "outros" cresce. Mantenha-a curta, reveja "outros" todo mês e pode o que não é usado.
- **Contar todo ticket vinculado como uma falha separada.** Uma única interrupção domina o mês. Relate os incidentes pais e o número de registros vinculados.
- **Classificar atendentes ou equipes por contagens de incidentes.** As contagens por pessoa refletem a alocação de trabalho e os hábitos de ticket. Agregue por serviços e reveja padrões, não pessoas.
- **Ignorar as repetições.** A mesma falha é consertada de novo e de novo, e ninguém é dono da causa. Ligue as repetições a registros de problemas e atribua um responsável.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e contagem | As pessoas discordam sobre o que é um incidente; as contagens vêm de exportações ad hoc | Algumas equipes separam requisições de incidentes; as regras diferem | Uma definição escrita, um filtro e uma regra de eliminação de duplicatas para todas as equipes | Mudanças de definição registradas e mostradas nos gráficos de tendência; proporção de registros sem categoria acompanhada | Definições revistas com fornecedores e clientes e revistas quando deixam de informar decisões |
| Normalização e interpretação | Apenas contagens brutas | Dados de uso usados por alguns serviços | Uma medida de uso nomeada por serviço, de uma fonte separada | Gráficos de controle com anotações usados nas revisões | Dados de uso, de mudança e de incidentes ligados entre equipes e fornecedores para explicar a demanda |
| Prática de prioridade | Prioridade escolhida por impressão | Existe matriz em algumas equipes | Uma matriz com exemplos, mostrada onde a prioridade é escolhida | Mistura e taxa de reclassificação revistas e amostradas todo mês | Matriz ajustada com clientes e responsáveis clínicos ou de negócio conforme as condições mudam |
| Repetições e padrões | Repetições notadas de memória | Listas de categorias revistas ocasionalmente | Taxas de repetição e de reabertura relatadas todo mês com uma janela declarada | Agrupamentos que se repetem ligados a registros de problemas com responsáveis e datas | Remoção de causas entre equipes e fornecedores financiada e acompanhada até a redução da demanda |

## Lista de verificação

- [ ] Uma definição escrita separa incidentes de requisições, alertas e problemas.
- [ ] Incidentes pais e registros vinculados são relatados separadamente.
- [ ] Todo incidente é atribuído a um serviço do catálogo de serviços.
- [ ] Cada serviço tem uma medida de uso nomeada, de uma fonte que não é a ferramenta de incidentes.
- [ ] Os relatórios mostram a contagem bruta, a taxa normalizada e anotações para releases e campanhas.
- [ ] Um gráfico de controle é usado antes de alguém reagir a uma mudança no volume semanal.
- [ ] A prioridade é derivada de uma matriz publicada de impacto e urgência com exemplos.
- [ ] A mistura de prioridades e a taxa de reclassificação são revistas juntas todo mês.
- [ ] A lista de categorias é curta, e a proporção de registros "outros" e sem categoria é acompanhada.
- [ ] As taxas de repetição e de reabertura usam janelas declaradas e são relatadas separadamente.
- [ ] Os agrupamentos que se repetem são ligados a registros de problemas com um responsável.
- [ ] Nenhum relatório classifica atendentes individuais por contagens de incidentes.

## Prompts de IA

**Confira uma definição de volume de incidentes quanto à ambiguidade.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Projete uma taxa normalizada de incidentes.**

```text
For the service [service name] I want an incident rate normalized by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Revise uma matriz de impacto e urgência.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymized example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Analise categorias e repetições em busca de candidatos à melhoria.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma métrica relacionada e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um tópico de métricas editado mantém completos seus relógios, vetores de manipulação e barreiras de proteção.

## Ideias-chave

- O volume de incidentes reflete uso, mudança e comportamento de relato tanto quanto a qualidade; por isso normalize-o e anote-o.
- Leia a prioridade como uma mistura, derive-a de uma matriz publicada de impacto e urgência e observe a taxa de reclassificação.
- Relate separadamente os incidentes pais e os registros vinculados, para que uma única interrupção não pareça um mês de trabalho rotineiro.
- As repetições e reaberturas são os sinais mais úteis, porque apontam para causas e correções que não se sustentaram.
- Agregue por serviços e equipes, nunca por atendentes individuais, e pareie cada métrica com uma barreira de proteção.
- Use gráficos de controle e visões de Pareto para decidir onde olhar e depois dê a cada agrupamento um responsável e capacidade.

## Referências e leituras complementares

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Software de central de atendimento](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Gráfico de controle](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Sazonalidade](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Princípio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
