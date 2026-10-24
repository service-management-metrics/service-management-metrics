# Métricas de continuidade de serviço

**Um plano de recuperação é uma hipótese até que um exercício o tenha testado; por isso as métricas de continuidade devem contar o que foi realmente recuperado, com que rapidez e quantos dados voltaram, e nunca o número de planos numa prateleira.**

## Visão geral e motivação

A maioria das medidas de incidentes descreve o dia ruim comum: uma implantação com falha, um banco de dados saturado, um vizinho barulhento. A continuidade de serviço descreve o dia raro e severo, quando uma região falha, um repositório de dados é corrompido, um fornecedor desaparece ou um ransomware criptografa o parque. O [planejamento de continuidade de negócios](https://en.wikipedia.org/wiki/Business_continuity_planning) é a disciplina de preparar uma organização para continuar entregando em níveis aceitáveis ao longo de tais eventos. No ITIL 4, a prática se chama gestão de continuidade de serviço e é a visão de serviços de TI desse objetivo maior (veja o tópico correspondente no *Service Management Guide* companheiro).

Dois termos carregam a maior parte do peso. O [objetivo de tempo de recuperação](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) é o tempo aceitável para restabelecer um serviço após uma interrupção. O [objetivo de ponto de recuperação](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) é a quantidade aceitável de perda de dados, expressa como um intervalo de tempo: um RPO de uma hora significa que perder a última hora de gravações é tolerável e perder mais não é. Ambos vêm de uma [análise de impacto nos negócios](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), o método de identificar quais atividades mais importam, o que depende do quê e quanto custa uma interrupção. Os objetivos são decisões de negócio com um preço, porque objetivos mais apertados exigem mais redundância, mais automação e mais tempo de exercícios.

A dificuldade é que um objetivo é uma promessa sobre um evento futuro que ainda não aconteceu. A evidência honesta é um teste. A equipe restabeleceu o serviço dentro do RTO no último exercício? Os dados restaurados atenderam ao RPO? Os passos do plano eram os passos que a equipe realmente seguiu? Uma métrica de continuidade é, portanto, em grande parte uma medição de exercícios, e a qualidade da medição depende de quão realista foi o exercício.

As equipes ágeis e de engenharia de confiabilidade de sites (SRE) trazem hábitos úteis para isso. Seus sistemas mudam toda semana; por isso um plano escrito uma vez e arquivado fica obsoleto em meses. A resposta ágil é manter a recuperação como código (por exemplo, com [infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code)), ensaiá-la com frequência e tratar cada ensaio como fonte de itens de backlog. A [engenharia do caos](https://en.wikipedia.org/wiki/Chaos_engineering) e os game days aplicam a mesma ideia em escala menor: provocar uma falha de propósito, de modo controlado, e observar o que acontece. A visão da SRE é descrita no livro *Site Reliability Engineering*, do Google, e o campo mais amplo é resumido no artigo sobre [engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Como as visões diferem

- **Visão ITIL.** A gestão de continuidade de serviço é uma prática que define os objetivos de recuperação a partir da BIA, projeta planos e os prova com testes. Seus produtos são planos, relatórios de exercícios e achados registrados. A norma [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) descreve um sistema de gestão de continuidade de negócios. Em outubro de 2026, confira a edição atual diretamente se um cliente ou regulador exigir conformidade.
- **Visão ágil.** A capacidade de recuperação é uma propriedade do produto na definição de pronto. Uma história que acrescenta um repositório de dados não está pronta até que seu caminho de restauração tenha sido tentado.
- **Visão SRE.** O trabalho de confiabilidade é orçado e medido. Failover, simulações de restauração e game days são trabalho programado, com responsáveis e achados que entram no backlog.

Este tópico cobre sete medidas: a recuperação contra os objetivos de tempo e de dados em testes, a cobertura e a recência dos exercícios, as restaurações de backup, o encerramento dos achados e a atualidade dos planos. As interrupções reais estão nas métricas de incidentes graves (veja o tópico 3.4, Métricas de incidentes graves) e nas métricas de disponibilidade (veja o tópico 5.3, Métricas de disponibilidade). Os objetivos expressos como metas voltadas ao usuário estão no tópico sobre indicadores e orçamentos (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). O "tempo de recuperação de implantações com falha" do programa de pesquisa DORA é um relógio muito menor (veja o tópico 2.8, Métricas DORA). As causas raiz reveladas pelos testes pertencem aos tópicos de problemas e de aprendizado (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

Uma **camada (tier)** é uma classe de serviço agrupada pela rapidez com que precisa voltar. Um **exercício de mesa (tabletop)** é um ensaio baseado em discussão, sem mudanças em sistemas. Um **game day** é um ensaio prático em que uma equipe provoca ou simula uma falha e observa a resposta. Um **achado** é uma lacuna registrada entre o plano e o que aconteceu. A **atualidade do plano** é quão bem um plano reflete o serviço como ele é hoje.

## Princípios-chave

- **Teste e depois afirme.** Um RTO ou RPO só é validado por uma recuperação realmente executada e cronometrada. Relate o objetivo e o último resultado demonstrado lado a lado.
- **Meça o realismo, não só o sucesso.** A restauração de um banco de dados de teste vazio que passou em minutos diz pouco sobre uma restauração do tamanho da produção. Registre o escopo e as condições de cada exercício ao lado do resultado.
- **Estratifique o parque e gaste esforço por camada.** Os serviços críticos recebem testes frequentes e realistas. Os serviços de camadas baixas recebem verificações mais leves. Uma única meta de frequência para tudo desperdiça esforço ou perde risco.
- **Trate os achados como o produto de um exercício.** O resultado valioso de um game day é uma lista encerrada de lacunas. Um teste sem achados é excelente ou brando demais, e você deve descobrir qual.
- **Descreva serviços e rodízios, nunca indivíduos.** Os resultados dos exercícios descrevem o sistema e o plano. Ninguém é classificado pela rapidez com que recuperou uma simulação.
- **Mostre cada exercício como sua própria linha.** Há poucos testes por serviço por ano; por isso as médias enganam (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

## Definições de métricas

Cada métrica lista o relógio ou a contagem, o que é excluído e a fonte de dados. Cada linha precisa de uma regra escrita antes de merecer confiança. Um "serviço de camada 1" abaixo significa um serviço na camada de recuperação mais alta definida pela sua própria BIA.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de RTO cumprido | Proporção dos exercícios de recuperação em que o serviço foi restabelecido dentro do RTO declarado | exercícios com tempo de restauração <= RTO / exercícios realizados. O relógio começa no início declarado da falha do exercício (horário da injeção ou declaração do cenário) e para quando o serviço passa em sua verificação de saúde combinada para usuários reais ou sintéticos. Exercícios de mesa e exercícios sem restabelecimento cronometrado são excluídos e contados à parte | porcentagem, com o número de exercícios mostrado | Relatório do exercício, linha do tempo do monitoramento, registro de serviços com o RTO | Gestão de continuidade de serviço; gestão de disponibilidade | Resultado do game day; tempo de recuperação nas métricas de entrega | Por exercício; consolidada trimestralmente |
| Taxa de RPO cumprido | Proporção dos exercícios de recuperação em que a perda de dados ficou dentro do RPO declarado | exercícios com intervalo de perda de dados medido <= RPO / exercícios que restauram dados. O intervalo de perda de dados é o tempo entre a última gravação presente após a recuperação e o momento da falha. Exercícios que não restauram nenhum estado são excluídos | porcentagem, com o número de exercícios mostrado | Relatório do exercício, comparação dos dados restaurados com a origem ou o registro de gravações | Gestão de continuidade de serviço; gestão de segurança da informação | Simulação de restauração como parte da definição de pronto | Por exercício; consolidada trimestralmente |
| Cobertura de recuperação testada | Proporção dos serviços de camada 1 e camada 2 que tiveram um teste prático de recuperação dentro do intervalo de teste combinado | serviços com um teste qualificado dentro do intervalo / serviços no escopo. Um teste qualificado é prático (e não apenas de mesa) e restaura o serviço no ambiente de teste ou de produção. O intervalo é definido por camada | porcentagem, por camada | Registro de serviços, calendário e relatórios de exercícios | Gestão de continuidade de serviço; gestão do catálogo de serviços | Calendário de game days | Mensal |
| Dias desde o último teste de recuperação bem-sucedido | Idade do teste de recuperação mais recente aprovado para cada serviço crítico | data do relatório menos a data do último teste que cumpriu tanto o RTO quanto o RPO. Um teste que falhou não zera o relógio. Serviços nunca testados são mostrados como "nunca" e não como zero | dias, por serviço, com o mais antigo destacado | Relatórios de exercícios, registro de serviços | Gestão de continuidade de serviço | Calendário de game days; idade do item de trabalho | Mensal |
| Taxa de sucesso de restauração de backup | Proporção das restaurações de backup tentadas que foram concluídas com dados verificados e utilizáveis | restaurações concluídas que passaram em uma verificação de dados / restaurações tentadas, em testes de restauração automatizados e manuais. O sucesso do job de backup sozinho é excluído, porque um job que rodou não é uma restauração que funcionou | porcentagem, por camada de dados | Registros do sistema de backup, resultados da verificação automatizada de restauração | Gestão de continuidade de serviço; gestão de infraestrutura e plataforma | Simulação de restauração; critérios de operabilidade na definição de pronto | Semanal para testes automatizados; mensal na revisão |
| Taxa de encerramento dos achados de exercícios | Proporção dos achados de exercícios de recuperação encerrados dentro do prazo combinado, dividida por severidade | achados encerrados dentro da meta / achados que venceram no período. O relógio começa quando o achado é registrado no relatório do exercício e para na correção verificada, o que significa um reteste ou revisão que a confirma. Achados aceitos como riscos por um responsável nomeado são contados à parte | porcentagem, com a contagem de achados atrasados | Relatório do exercício, rastreador de issues | Gestão de continuidade de serviço; melhoria contínua | Itens de ação da retrospectiva; idade do item de backlog | Mensal |
| Atualidade do plano | Proporção dos planos de continuidade e runbooks revistos depois da última mudança material em seu serviço, ou dentro de seu intervalo de revisão | planos com uma data de revisão posterior à última mudança material e dentro do intervalo / planos no escopo. Mudança material significa um registro de mudança sinalizado como alterando a arquitetura, os repositórios de dados, as dependências ou os fornecedores | porcentagem, com a idade do plano não revisto mais antigo | Repositório de planos (controle de versão), registros de mudanças, registro de serviços | Gestão de continuidade de serviço; habilitação de mudanças | A definição de pronto inclui a atualização do runbook | Trimestral |

O relógio do RTO em um exercício difere do relógio em uma interrupção real, que começa no impacto (veja o tópico 3.4, Métricas de incidentes graves); por isso compare exercícios com exercícios. Um exercício rigidamente roteirizado mede a velocidade do ensaio; por isso registre quanta surpresa ele continha.

## Recomendações

### Defina objetivos que possam ser testados

**1. Derive o RTO e o RPO de uma análise de impacto nos negócios e escreva-os ao lado do serviço.** A BIA pergunta ao negócio quanto custam uma hora, um dia e uma semana de interrupção e que dados ele pode se dar ao luxo de perder. Registre as respostas no registro de serviços para que todo teste possa ser comparado com um objetivo declarado. Objetivos escolhidos apenas por engenheiros tendem a ser impagáveis ou sem relação com o que os clientes precisam.

**2. Estratifique os serviços e defina os intervalos de teste por camada.** Um pequeno número de camadas, talvez três ou quatro, é mais fácil de conduzir do que uma regra diferente para cada serviço. Dê à camada de topo os testes mais frequentes e mais realistas e dê à camada mais baixa uma verificação leve, como uma restauração periódica de uma amostra. Escreva os intervalos e reveja-os quando a BIA mudar.

**3. Confira se o objetivo cabe na arquitetura.** Um RPO de cinco minutos com um backup noturno é uma contradição que um teste exporá no pior momento. Compare cada objetivo com o projeto de backup, replicação e failover antes do primeiro exercício e registre qualquer lacuna como achado.

### Teste de modos que revelem algo

**4. Misture exercícios de mesa, simulações de restauração e game days.** Um exercício de mesa é barato e acha lacunas em papéis, contatos e decisões. Uma simulação prática de restauração acha lacunas em procedimentos, permissões e dados. Um game day, que provoca uma falha e observa a resposta, acha lacunas em monitoramento, runbooks e coordenação. Relate cada tipo separadamente para que uma sequência de exercícios de mesa fáceis não pareça prova de recuperação.

**5. Cronometre a restauração com dados do tamanho da produção.** Uma restauração que funciona numa cópia pequena pode falhar no volume real por limites de vazão ou de armazenamento. Onde testes em escala total são caros demais para rodar com frequência, rode um periodicamente e declare qualquer extrapolação. Registre o tamanho dos dados junto com o resultado.

**6. Verifique se os dados restaurados são utilizáveis.** Acrescente uma verificação automatizada após a restauração, como uma contagem de linhas, uma soma de verificação ou uma transação sintética. Conte uma restauração como bem-sucedida somente quando essa verificação passar.

**7. Acrescente surpresa gradualmente.** Os primeiros exercícios podem ser anunciados e roteirizados. Os posteriores devem reter detalhes da falha e incluir dependências como credenciais expiradas ou um fornecedor inalcançável. Registre o nível de surpresa para que os resultados possam ser lidos no contexto.

### Transforme os achados em mudança

**8. Registre todo achado com um responsável, uma severidade e uma data de vencimento.** Um game day produz uma lista: uma permissão ausente, um passo de runbook que já não combina com a ferramenta, um monitor que nunca disparou. Ponha cada um no backlog da equipe com a mesma visibilidade do trabalho de funcionalidades. Acompanhe a idade dos achados abertos e a proporção encerrada no prazo e confirme o encerramento por reteste onde for prático.

**9. Ligue os achados à gestão de problemas e ao aprendizado.** Um achado que se repete entre exercícios é um problema no sentido do ITIL (veja o tópico 4.1, Métricas de gestão de problemas). Reveja cada exercício sem culpados, como faria com uma análise pós-incidente, e acompanhe as ações até o encerramento (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

### Mantenha os planos vivos

**10. Mantenha planos e runbooks em controle de versão e ligue-os à mudança.** Quando um registro de mudança altera a arquitetura, um repositório de dados ou um fornecedor, exija que o plano responsável seja revisto no mesmo trabalho (veja o tópico 4.3, Métricas de habilitação de mudanças). Meça a atualidade do plano contra a última mudança material e não apenas contra o calendário. Um plano revisto todo trimestre que ignora a migração do mês passado é atual só no nome.

**11. Mantenha honesto o mapa de dependências.** A ordem de recuperação depende de serviços compartilhados como identidade, resolução de nomes e armazenamento de segredos. Reconcilie o mapa com os registros de configuração e corrija as lacunas que os exercícios revelam (veja o tópico 7.4, Métricas de qualidade de configuração e CMDB).

**12. Inclua fornecedores e alterne o encargo dos exercícios.** Peça a cada fornecedor crítico as próprias evidências de teste e combine como exercitar os passos conjuntos (veja o tópico 8.4, Métricas de fornecedores e contratos). Os exercícios consomem tempo; por isso divida o encargo por um rodízio e conte-o como carga operacional (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

## Vetores de manipulação e barreiras de proteção

Os números de continuidade são fáceis de lisonjear porque poucas pessoas olham de perto um exercício, e o teste real acontece raramente. A tabela pareia cada métrica com um modo de ela ser manipulada e a verificação que o pega. Os pareamentos seguem a forma estabelecida no tópico 1.2 (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de RTO cumprido | Escolher um conjunto de dados de teste pequeno, um cenário fácil ou um roteiro ensaiado; começar o relógio tarde, depois de a equipe ter começado; afrouxar a verificação de saúde para que o "restabelecido" chegue mais cedo; definir um RTO generoso para que todo teste passe | Registrar o tamanho dos dados, a surpresa do cenário e a definição da verificação de saúde com cada resultado; comparar o RTO com a BIA; mostrar cada exercício como sua própria linha, inclusive os que falharam |
| Taxa de RPO cumprido | Medir a perda só da tabela principal e não de todo o estado; testar uma réplica que está sincronizada porque não há carga rodando; redefinir o RPO depois de um resultado perdido | Verificar a perda de dados contra o registro de gravações em todos os repositórios de dados no escopo; testar sob carga de gravação realista; manter um registro de mudanças dos objetivos com os motivos |
| Cobertura de recuperação testada | Contar discussões de mesa como testes; testar um serviço trivialmente pequeno para elevar a porcentagem; encolher a lista no escopo reclassificando serviços para uma camada inferior | Exigir testes práticos na contagem da camada 1; relatar a cobertura ponderada pela criticidade do serviço; auditar as mudanças de camada contra a BIA |
| Dias desde o último teste de recuperação bem-sucedido | Rodar de novo um teste fácil para zerar a idade; rotular um teste parcial como aprovado; zerar a data após uma revisão em papel | Mostrar o escopo do último teste aprovado; mostrar a idade mais antiga e os serviços nunca testados; exigir que tanto o RTO quanto o RPO tenham sido cumpridos |
| Taxa de sucesso de restauração de backup | Relatar o sucesso do job de backup como sucesso de restauração; testar apenas os backups sabidamente bons; verificar com uma checagem que não pode falhar | Acompanhar restaurações de backups amostrados ao acaso; exigir um resultado de verificação de dados; rever a própria checagem em cada auditoria |
| Taxa de encerramento dos achados de exercícios | Encerrar achados sem correção; rebaixar a severidade para relaxar o prazo; dividir um achado em muitos fáceis; registrar poucos achados desde o início | Verificar o encerramento por reteste; relatar achados por exercício ao lado da taxa de encerramento, já que uma contagem em queda pode significar exercícios mais brandos; rever as mudanças de severidade |
| Atualidade do plano | Atualizar a data de revisão sem ler o plano; marcar mudanças como não materiais; encher o plano de texto genérico que nunca fica obsoleto | Amostrar planos e percorrê-los com alguém que não os escreveu; comparar a taxa de sinalização de mudança material com o histórico de mudanças de arquitetura; ligar a atualidade aos resultados dos testes |

Uma leitura saudável mostra um punhado de testes por trimestre com variação honesta: alguns passaram na primeira tentativa, outros falharam e foram repetidos, e os achados de cada um aparecem no backlog e são encerrados dentro do prazo declarado. Notas perfeitas ano após ano são motivo para perguntar quão difíceis são os exercícios.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Testes de restauração automatizados, pequenos e frequentes | Evidência barata e contínua; pega cedo a falha silenciosa de backup | Não testa a coordenação, as pessoas nem a recuperação em escala total |
| Exercício anual de failover em escala total | Realista; exercita pessoas, fornecedores e dependências em conjunto | Caro e raro; difícil de repetir depois de uma correção; traz risco se rodado em produção |
| Exercícios de mesa | Baixo custo; acha lacunas em papéis e decisões; bom para treinamento | Não prova que a tecnologia funciona; fácil de conduzir sem aprender nada |
| Game days em produção com falha provocada | Realismo máximo; testa monitoramento e runbooks como são | Exige salvaguardas maduras e apoio da liderança; pode causar dano a clientes se conduzido sem cuidado |
| Objetivos por camada | Gasta esforço onde está o risco | As atribuições de camada podem derivar e precisam de um responsável |

A resposta prática é um programa em camadas: verificações de restauração automatizadas e baratas o tempo todo, simulações práticas para cada serviço de camada 1 em um intervalo fixo, um exercício maior em um ciclo mais longo e exercícios de mesa para decisões e comunicação. Declare os intervalos para que o leitor possa julgar quão recente é a evidência.

## Perguntas para discutir com sua equipe

**1. Quando restauramos pela última vez o nosso serviço mais importante, e o que exatamente provamos?**
Peça a data, o tamanho dos dados, o cenário e o resultado e escreva-os num quadro. O facilitador deve resistir a julgar e focar na lacuna entre a afirmação e a evidência. Termine combinando um teste que fecharia a maior lacuna.

**2. Quem escolheu o nosso RTO e RPO, e o negócio os escolheria de novo hoje?**
Rastreiem cada objetivo até uma análise de impacto nos negócios ou uma decisão. Perguntem se a arquitetura poderia cumprir o objetivo no papel e se o custo de cumpri-lo chegou a ser declarado. Combinem quem confirmará com o negócio os objetivos dos principais serviços e até quando.

**3. O que um exercício fracassado nos custaria em reputação, e isso molda quão difíceis são os nossos exercícios?**
Esta pergunta traz à tona a pressão que torna os exercícios brandos. Perguntem se um teste fracassado é tratado como fracasso da equipe ou como sucesso do exercício.

**4. Quais achados do nosso último exercício ainda estão abertos, e por quê?**
Leiam a lista em voz alta com idades e responsáveis. Para cada item atrasado, perguntem o que o bloqueia: trabalho concorrente, responsabilidade pouco clara, custo ou a crença de que o risco é aceitável. O objetivo é que nenhum achado fique em estado sem dono.

**5. O que o nosso plano pressupõe que já não é verdade?**
Escolham um plano e leiam-no com uma pessoa que não o escreveu. Procurem ferramentas aposentadas, contas renomeadas e fornecedores que saíram. Perguntem como o plano seria atualizado quando o serviço mudar e quem nota quando não é. Liguem a resposta ao processo de mudanças.

**6. Qual dependência pararia tudo, e já testamos sem ela alguma vez?**
Serviços compartilhados como identidade, resolução de nomes, segredos e o próprio sistema de acionamento são pontos únicos de falha comuns. Peçam à equipe que os nomeie e descreva a última vez que cada um esteve indisponível de propósito.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto são donas do projeto que torna a recuperação possível; por isso encontram a continuidade como parte da definição de pronto dos serviços críticos: um caminho de backup, um procedimento de restauração e um runbook que funciona. Devem rodar simulações de restauração como parte da própria cadência, guardar o código de recuperação com o serviço e tratar uma simulação que falhou como um item de backlog.

### Equipes de serviço e operações

As equipes de operações conduzem a maior parte dos exercícios e carregam a carga de prepará-los. Devem manter o calendário de exercícios, registrar as linhas do tempo enquanto o exercício corre e escrever os achados no mesmo dia. Os resultados descrevem o serviço e o plano, e ninguém é classificado pela rapidez com que um indivíduo recuperou uma simulação.

### Liderança e governança

Os líderes definem os objetivos com o negócio e decidem quanta recuperação vale a pena comprar. Devem pedir para ver o último resultado demonstrado ao lado de cada objetivo, a idade da evidência e os achados abertos e evitar premiar uma ficha limpa. Os órgãos de governança devem esperar um conjunto pequeno e estável de medidas de continuidade, ligado ao registro de riscos e ao relato regulado onde se aplicar (veja o tópico 8.2, Métricas de riscos e controles, e o tópico 8.5, Relatórios regulatórios e governamentais).

### Clientes e usuários

Os clientes raramente veem a continuidade até que ela importe, e então a julgam inteiramente pelo resultado: quanto tempo ficaram sem o serviço e se seus dados sobreviveram. Beneficiam-se de declarações claras do que é prometido, em termos que possam entender, e de uma comunicação honesta quando um incidente aciona o plano. Onde os contratos incluem compromissos de recuperação, compartilhe sob pedido as evidências dos exercícios (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional opera um sistema de agendamento de pacientes, um arquivo de imagens médicas e um serviço de mensagens da equipe. Uma equipe de produto de oito pessoas mantém o agendamento, e uma equipe de operações opera a plataforma. Todos os números deste exemplo são ilustrativos.

O registro do departamento lista o agendamento como camada 1, com um RTO de 2 horas e um RPO de 15 minutos. Seu relatório trimestral mostra "taxa de RTO cumprido: 100% em 4 exercícios" e "cobertura de recuperação testada: 100%". Um novo chefe de operações lê os relatórios dos exercícios por trás dos números. Três dos quatro exercícios foram de mesa, e a única restauração prática usou uma cópia do banco de dados com cerca de um décimo dos dados de produção. Ninguém restaurava um backup em um ambiente limpo havia 14 meses.

A equipe decide mudar o que é medido e testado. Redefine a cobertura de recuperação testada para contar apenas testes práticos, o que derruba a cifra para 33% nos três serviços de camada 1. Programa uma restauração do tamanho da produção para o agendamento, com verificação automatizada de contagens de linhas e uma transação sintética de reserva. A execução leva 3 horas e 40 minutos contra um RTO de 2 horas, e os dados restaurados estão 40 minutos atrás do ponto de falha contra um RPO de 15 minutos, porque o envio de logs havia sido pausado durante uma migração e nunca retomado. O game day produz 9 achados: 2 de severidade alta, 5 média e 2 baixa.

A decisão registrada no registro é tratar a perda como o resultado mais valioso do ano. A equipe abre trabalho para retomar o envio de logs com um alerta sobre sua defasagem, paralelizar a restauração e mover um volume de dados para um armazenamento mais rápido. O RTO continua em 2 horas, e a equipe acrescenta um contorno manual documentado para o agendamento. A taxa de encerramento dos achados nos primeiros 60 dias é de 7 de 9 no prazo, com os outros dois aceitos como riscos por responsáveis nomeados.

O risco de manipulação pego aqui foi sutil. Ninguém falsificou um número: uma contagem generosa de exercícios de mesa e um conjunto de dados de teste pequeno deixaram o relatório verde. As barreiras de proteção que funcionaram foram registrar o tamanho dos dados e o tipo de exercício com cada resultado e a prática de ler os relatórios dos exercícios por trás dos números. No relatório seguinte, a equipe mostra cada exercício como sua própria linha, incluindo a execução que falhou.

## Ágil, IA, automação e análise

### Ágil

Ensaie a recuperação em exercícios pequenos e frequentes com as partes interessadas e corrija o que revelam. O cuidado é que exercícios roteirizados que sempre passam dão falsa segurança.

### IA

Os serviços de IA acrescentam ao plano de recuperação novas dependências, como modelos, repositórios de vetores e APIs de terceiros. Inclua-os na cobertura de recuperação testada e pareie o tempo de recuperação com uma verificação de que as respostas estão corretas após a restauração. O cuidado é que um serviço de IA restaurado pode rodar outra versão do modelo ou perder seus dados; por isso verifique o comportamento, e não apenas a disponibilidade.

### Automação

Automatize a verificação de backups e os testes de restauração e meça a automação por restaurações que falharam. O cuidado é que um backup que termina não é um backup que restaura; por isso teste a restauração.

### Análise

Relate os objetivos cumpridos em testes com as datas do último teste e os achados de exercícios encerrados. A decisão informada é qual recuperação é a menos comprovada. O cuidado é que poucas recuperações reais significam amostras pequenas; por isso mostre as contagens.

## Olhar setorial

**Startup.** Geralmente há um ambiente de produção, uma equipe pequena e um provedor de nuvem gerenciado. A medida mais valiosa é a mais simples: restaurar todo mês o banco de dados de produção a partir do backup em um ambiente limpo, cronometrar e verificar o resultado. Escreva o RTO e o RPO em uma página.

**Pequena empresa.** A TI costuma ser terceirizada ou conduzida por uma ou duas pessoas sobre serviços hospedados. Pergunte ao fornecedor por escrito a que recuperação ele se compromete e que evidências pode mostrar e teste uma restauração dos seus próprios dados por trimestre. Mantenha um plano de uma página onde possa ser lido quando os sistemas principais estiverem fora do ar.

**Grande empresa.** Muitos serviços, muitos fornecedores e plataformas compartilhadas tornam essenciais a estratificação e um mapa de dependências. Invista em um registro central de serviços com objetivos, um calendário de exercícios, verificação automatizada de restauração e um relato consistente, para que os resultados se comparem entre equipes.

**Governo e setor público.** Os deveres de continuidade podem surgir de lei, de auditoria ou de política, e um serviço público pode ter de continuar funcionando durante emergências. A evidência dos testes costuma ser revista externamente; por isso mantenha os relatórios dos exercícios, os achados e os registros de encerramento numa forma que um auditor consiga ler. As compras podem travar arranjos de recuperação; por isso inclua nos contratos direitos de exercício e de evidência (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

As razões para investir são o custo de uma interrupção severa que dura mais do que o negócio suporta, a perda de dados que não podem ser recriados e as obrigações com clientes, reguladores e seguradoras que pedem evidência de preparação. O trabalho de continuidade é um seguro; por isso o retorno é a perda evitada e a confiança dos decisores, e é difícil de expressar como cifra sem inventar uma. Descreva-o por padrões que você pode observar: a diferença entre o tempo de recuperação declarado e o demonstrado, o número de achados de alta severidade encontrados em exercícios e não em eventos reais e o tempo para responder a um pedido de evidência de um cliente ou auditor.

Os custos vêm em três grupos: a redundância e as ferramentas que os objetivos exigem, o tempo das pessoas para planejar, conduzir e rever exercícios e o esforço para manter atuais os planos e os mapas de dependências.

O custo total de propriedade é dominado por pessoas e pelas camadas mais apertadas. Passar de um RTO de 24 horas para 2 horas muda o projeto e a conta; por isso torne explícita essa compensação com o negócio. Testes pequenos, frequentes e automatizados tendem a custar menos que um grande evento anual, porque os defeitos aparecem enquanto são baratos de corrigir.

## Antipadrões e armadilhas

- **O plano na prateleira.** Um documento conta como preparação, e ninguém o tentou. Em vez disso, relate a data e o resultado do último teste prático ao lado de todo objetivo.
- **Sucesso do backup como sucesso da restauração.** Os jobs relatam verde enquanto os dados não podem ser restaurados. Em vez disso, teste restaurações regularmente e verifique os dados antes de contar um sucesso.
- **Teatro ensaiado.** O exercício é roteirizado e conduzido pelos autores do plano. Em vez disso, acrescente surpresa gradualmente.
- **Uma meta para tudo.** Todo serviço tem um RTO de quatro horas porque o modelo mandou. Em vez disso, estratifique os serviços a partir de uma análise de impacto nos negócios e defina objetivos que se ajustem.
- **Achados que nunca se encerram.** O relatório do exercício lista lacunas e o backlog nunca as vê. Em vez disso, dê a cada achado um responsável e uma data de vencimento e verifique o encerramento por reteste.
- **Penalizar o teste que falhou.** Uma equipe culpada por um RTO perdido deixará de rodar testes difíceis. Em vez disso, combine desde o início que um exercício fracassado com bons achados é um bom resultado e reveja-o sem culpa.
- **Planos obsoletos após mudanças rápidas.** O calendário conduz a revisão, e as mudanças de arquitetura escapam. Em vez disso, ligue a revisão do plano aos registros de mudança material e meça a atualidade do plano contra eles.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Objetivos e camadas | RTO e RPO não escritos ou copiados de um modelo | Objetivos escritos para alguns serviços-chave | Camadas e objetivos vêm de uma análise de impacto nos negócios e ficam no registro de serviços | Objetivos revistos contra os resultados demonstrados e a arquitetura | Objetivos combinados em conjunto com o negócio e os fornecedores e ajustados conforme os serviços mudam |
| Testes e evidências | Recuperação nunca testada, ou testada uma vez após um incidente | Testes de restauração ad hoc por algumas equipes; resultados em notas pessoais | Intervalos de teste por camada com escopo, linha do tempo e resultado registrados | Resultados acompanhados ao longo do tempo, com exercícios de mesa, simulações e game days relatados separadamente | Exercícios entre equipes e fornecedores, com surpresa, programados a partir do risco |
| Achados e aprendizado | Lacunas notadas informalmente | Achados listados após alguns exercícios | Todo achado tem um responsável, uma severidade e uma data de vencimento | Taxa de encerramento e idade revistas, com reteste confirmando o encerramento | Achados alimentam plataformas compartilhadas, contratos de fornecedores e padrões de projeto |
| Atualidade do plano | Planos escritos uma vez | Planos atualizados após incidentes | Planos em controle de versão com um intervalo de revisão | Revisão ligada a mudanças materiais e medida | Planos e runbooks testados como código e gerados a partir da definição do serviço onde possível |

## Lista de verificação

- [ ] Cada serviço de camada 1 tem um RTO e um RPO escritos que vieram de uma análise de impacto nos negócios.
- [ ] O registro de serviços mostra a camada, os objetivos e o intervalo de teste de cada serviço.
- [ ] Os relógios do RTO e do RPO, a verificação de saúde e as exclusões estão escritos (veja o tópico 1.5, Fontes de dados e instrumentação).
- [ ] Testes práticos de recuperação, exercícios de mesa e game days são relatados como tipos separados.
- [ ] Todo teste de recuperação registra o tamanho dos dados, o cenário, o nível de surpresa e o tempo de restauração e a perda de dados medidos.
- [ ] As restaurações de backup são testadas automaticamente, e uma verificação de dados decide o sucesso.
- [ ] Cada achado de exercício tem um responsável, uma severidade, uma data de vencimento e um lugar no backlog.
- [ ] A revisão do plano é ligada aos registros de mudança material, e o plano não revisto mais antigo é visível.
- [ ] O mapa de dependências inclui os serviços compartilhados, e pelo menos um cenário remove um deles.
- [ ] Cada métrica deste tópico tem uma barreira de proteção nomeada e um responsável no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).
- [ ] O encargo dos exercícios é alternado, e o tempo que toma é contado como carga operacional.

## Prompts de IA

**Projete um teste de recuperação e as medidas que o acompanham.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Revise relatórios de exercícios em busca de evidências lisonjeiras.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Transforme as notas de um game day em achados e itens de backlog.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Confira a atualidade de um plano contra mudanças recentes.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma métrica de continuidade, de recuperação ou de exercícios e a barreira de proteção a parear com ela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de continuidade editada declara seus relógios, exclusões e vetor de manipulação.

## Ideias-chave

- Um objetivo de recuperação é uma promessa, e só um exercício cronometrado e realista mostra se ela pode ser cumprida.
- Relate o último resultado demonstrado e sua idade ao lado de cada RTO e RPO e mostre cada exercício como sua própria linha.
- Teste restaurações, não backups: uma restauração só conta quando os dados foram verificados como utilizáveis.
- O produto de um exercício é uma lista encerrada de achados; por isso acompanhe sua idade e confirme o encerramento por reteste.
- Mantenha os planos em controle de versão e ligue sua revisão à mudança material, e não apenas ao calendário.
- Meça serviços e planos, nunca pessoas, e faça de um exercício fracassado com bons achados um resultado seguro e respeitado.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Planejamento de continuidade de negócios](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Objetivo de tempo de recuperação](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Objetivo de ponto de recuperação](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Análise de impacto nos negócios](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Engenharia do caos](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code).
