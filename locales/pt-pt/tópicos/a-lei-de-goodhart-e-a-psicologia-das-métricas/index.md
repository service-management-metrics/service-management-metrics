# A lei de Goodhart e a psicologia das métricas

**Qualquer número que você premia, classifica ou usa para ameaçar passará a mudar o trabalho que deveria descrever; por isso toda métrica deste livro é usada como uma pergunta para a equipe discutir e vem pareada com uma barreira de proteção que flagra sua manipulação.**

## Visão geral e motivação

A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é o mais antigo alerta da medição. O economista Charles Goodhart notou em 1975, escrevendo sobre a política monetária britânica, que uma regularidade estatística tende a ruir quando as autoridades passam a pressioná-la para fins de controle. A formulação popular veio depois. A antropóloga Marilyn Strathern a enunciou em 1997 como "Quando uma medida se torna uma meta, deixa de ser uma boa medida". As duas frases dizem a mesma coisa: no instante em que um número é usado para conduzir pessoas, as pessoas passam a conduzir o número.

A mesma ideia tem outros nomes. A [lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), do cientista social Donald Campbell, diz que quanto mais um indicador quantitativo é usado para decisões, mais fica sujeito a pressões de corrupção e mais distorce os processos que deveria monitorar. O [efeito cobra](https://en.wikipedia.org/wiki/Cobra_effect) é a história de uma recompensa que produziu mais daquilo que deveria eliminar. Cada um é um exemplo de [incentivo perverso](https://en.wikipedia.org/wiki/Perverse_incentive): uma recompensa que empurra o comportamento para longe do que quem recompensa queria.

Equipes que constroem e operam serviços de TI estão excepcionalmente expostas. A entrega contínua e a gestão de serviços de TI (ITSM), como codificada pelo [ITIL](https://en.wikipedia.org/wiki/ITIL), produzem ambas um fluxo constante de carimbos de data e hora, contagens e status. Um sistema de tickets registra quando um ticket foi aberto, quando foi atribuído, quando o relógio foi pausado e quando foi encerrado. Uma ferramenta de entrega registra quando o trabalho começou e terminou. Esses números são baratos de coletar, fáceis de plotar e fáceis de transformar em metas. Também são fáceis de mover sem ajudar ninguém.

Três termos se repetem neste tópico e no restante do livro. Uma **medida** descreve algo. Uma **meta** é um número que alguém deve atingir. Uma **barreira de proteção** é uma segunda medida ou uma prática, escolhida de antemão, que se moveria se a primeira medida estivesse sendo manipulada. O passo da medida à meta é onde os problemas começam, e a barreira de proteção é como você percebe.

Este tópico estabelece a regra que governa todos os outros. Cada família de métricas do livro chega com seu vetor de manipulação (como ela costuma ser manipulada) e sua barreira de proteção. Se um tópico posterior parecer omitir isso, trate o tópico como inacabado.

### Por que as pessoas manipulam números

A manipulação geralmente não é desonestidade. É a resposta comum de pessoas capazes aos incentivos que têm diante de si. Quatro forças atuam.

- **Pressão.** O bônus, a avaliação, a renovação de contrato ou a reputação de alguém dependem do número. Mesmo sem um vínculo formal, as pessoas deduzem o que a liderança valoriza pelo que a liderança plota.
- **Surrogação.** A [surrogação](https://en.wikipedia.org/wiki/Surrogation) é a tendência de tratar a medida como se fosse aquilo que ela representa. Pesquisadores que a estudaram em organizações descobriram que a remuneração por incentivo ligada a uma medida a torna mais provável. Uma equipe que acompanha "tickets encerrados" passa a acreditar que o objetivo é encerrar tickets, e não resolver problemas.
- **Medo.** Quando um número ruim traz culpa, as pessoas escondem más notícias. Incidentes são rebaixados, interrupções são reclassificadas como "manutenção planejada" e defeitos são registrados como pedidos de funcionalidade.
- **Otimização local.** Uma equipe melhora a parte do sistema pela qual é julgada e empurra o custo para uma parte pela qual não é. A central de serviços encerra rápido e o segundo nível herda as repetições.

Entender essas forças importa porque o remédio não é um policiamento mais rígido. É mudar as condições que tornam a manipulação racional.

## Princípios-chave

- **Meça para aprender, não para julgar.** Mostre os números primeiro à equipe que faz o trabalho e use-os para fazer perguntas.
- **Pareie toda métrica com uma barreira de proteção.** Velocidade com qualidade, volume com resultado, custo com experiência.
- **Descreva equipes e sistemas, nunca classifique pessoas.** Classificações individuais são a forma mais rápida de corromper uma fonte de dados.
- **Prefira resultados e tendências a metas.** Uma direção e uma conversa valem mais que um limiar.
- **Escreva a definição, incluindo os relógios.** É nas definições ambíguas que a manipulação se esconde.
- **Espere mudanças.** Aposente ou redesenhe uma métrica quando ela deixar de informar decisões.
- **Torne seguras as más notícias.** Se o relato honesto é punido, os dados mentirão.

## Definições de métricas

As métricas abaixo não são medidas de serviço nem de entrega. São medidas da saúde da própria prática de métricas e mostram a forma que toda tabela de métricas deste livro assume. As três primeiras são exemplos de barreira de proteção que aparecem ao longo dos tópicos seguintes.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de barreiras de proteção | Proporção das métricas relatadas que têm uma barreira de proteção nomeada e acompanhada | métricas com barreira de proteção / métricas relatadas | porcentagem | Registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) | Medição e relatório; melhoria contínua | Retrospectiva dos acordos de trabalho | Trimestral |
| Taxa de reabertura | Proporção dos tickets ou itens de trabalho encerrados que são reabertos dentro de uma janela declarada | itens reabertos em até 14 dias / itens encerrados no período | porcentagem | Histórico de status da ferramenta de ITSM ou do rastreador de issues | Gestão de incidentes; gestão de problemas | Definição de pronto; defeitos escapados | Mensal |
| Contagem de mudanças de definição | Número de mudanças em definições de métricas ou fluxos de status em um período, com os motivos | contagem de entradas no registro de mudanças de definição | contagem | Registro de mudanças do registro de métricas | Medição e relatório | Acordos de trabalho | Trimestral |
| Taxa de uso de métricas | Proporção das métricas relatadas que foram citadas em uma decisão no período | métricas citadas em uma decisão registrada / métricas relatadas | porcentagem | Registro de decisões ou notas de revisão | Melhoria contínua | Ações de retrospectiva | Trimestral |
| Lacuna de percepção | Diferença entre o resultado de uma pesquisa de satisfação e um nível de serviço derivado dos tickets para o mesmo serviço | taxa derivada da pesquisa menos taxa derivada do rastreador | pontos percentuais | Ferramenta de pesquisa e ferramenta de ITSM | Gestão de nível de serviço | Feedback da revisão com partes interessadas | Trimestral |

A taxa de reabertura conta apenas os itens reabertos no mesmo registro. Um item encerrado e depois levantado como um novo ticket não aparece. Parte do sentido da próxima seção é que a barreira de proteção precisa da sua própria barreira de proteção, como ligar tickets duplicados aos originais.

## Recomendações

### Projete o sistema de medição

**1. Parta de uma pergunta, não de um número.** Antes de acrescentar uma métrica, escreva a pergunta que ela responde e a decisão que ela informa. "Os usuários estão tendo seus problemas resolvidos na primeira vez?" é uma pergunta. "Reduzir o tempo médio de atendimento" é uma meta fingindo ser uma. Uma métrica sem decisão associada é candidata à aposentadoria.

**2. Escolha métricas em tensão.** Um número isolado convida à superotimização; por isso escolha pares que se contrabalançam: lead time com taxa de falha de mudanças, velocidade de encerramento de tickets com taxa de reabertura, disponibilidade com experiência relatada pelos usuários. O par não precisa ser uma fórmula. Precisa ser mostrado junto, na mesma página.

**3. Defina os relógios e as exclusões.** Para toda medida de tempo, escreva onde o relógio começa, onde para e quando pode pausar. A maior parte da manipulação em dados de serviço mora nesses limites: um ticket colocado em "aguardando o cliente" para o relógio do nível de serviço, e uma mudança registrada apenas depois de aplicada escapa do lead time de mudança. Se existe um estado de pausa, relate com que frequência ele é usado.

**4. Use distribuições e percentis.** Uma média dos tempos de resolução de tickets pode melhorar porque alguns tickets fáceis foram encerrados rápido enquanto os difíceis envelhecem. Mostre a mediana e um percentil alto (por exemplo o 85º ou o 95º) e mostre os itens abertos mais antigos. A idade do item de trabalho e o ticket aberto mais antigo são difíceis de manipular sem de fato terminar o trabalho (veja o tópico 2.1, Medidas de fluxo).

**5. Mantenha um registro de métricas.** Um registro curto lista cada métrica, seu responsável, sua definição, sua fonte de dados, seu vetor de manipulação, sua barreira de proteção e a data da última revisão. É enfadonho e é o hábito mais eficaz deste tópico (veja o tópico 1.4, Governança e responsabilidade das métricas).

### Introduza as métricas com segurança

**6. Mostre primeiro à equipe e mostre os dados brutos.** Equipes que veem os números antes da liderança estão mais dispostas a questionar sua exatidão. Comece pelos itens subjacentes, não pelo gráfico. Se os dados não sobrevivem a uma conversa com as pessoas que os geraram, não sobreviverão a um painel.

**7. Separe as visões de aprendizado das visões de prestação de contas.** A visão de trabalho de uma equipe pode conter muitas medidas, inclusive as feias. O que vai à liderança deve ser um conjunto pequeno e estável. Se a liderança pede a visão de trabalho, espere que ela mude para parecer melhor.

**8. Não ligue remuneração, medida disciplinar ou classificação individual a uma métrica.** Pode-se pedir às equipes que expliquem seus números e os melhorem. Metas individuais sobre contagem de tickets, pontos de história ou commits ensinam as pessoas a maximizar a contagem. A abordagem de [indicadores-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator) pode funcionar quando os indicadores são escolhidos para o sistema inteiro e revistos regularmente. Ela falha quando vira um placar por pessoa.

**9. Torne seguro o relato honesto.** A [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety) é a crença de que você não será punido por falar de um erro ou de uma preocupação. Uma revisão de incidente sem culpados é um exemplo dela na prática. Sem ela, as contagens de incidentes caem pelo motivo errado: as pessoas deixam de relatar.

### Mantenha o sistema honesto

**10. Faça uma revisão de manipulação.** Uma vez por trimestre, faça à equipe uma pergunta sobre cada métrica relatada: "Se quiséssemos que este número parecesse bom sem ajudar ninguém, o que faríamos?". Anote as respostas e depois verifique se a barreira de proteção pegaria cada uma. O exercício é barato, produz ideias úteis e move a conversa da suspeita para o projeto.

**11. Audite as definições contra a realidade.** Amostre uma pequena quantidade de itens encerrados e leia-os. Foram mesmo resolvidos? A prioridade foi honesta? O estado "aguardando o cliente" significava que o cliente estava sendo aguardado? Uma amostra de quinze minutos muitas vezes diz mais do que um mês de painéis.

**12. Aposente métricas.** Uma métrica que não foi citada em nenhuma decisão por dois trimestres é custo extra. Remova-a e diga isso. Menos métricas, cada uma confiável, valem mais do que muitas.

## Vetores de manipulação e barreiras de proteção

A tabela cobre as métricas da seção acima. Os tópicos posteriores aplicam a mesma forma às medidas de serviço e de entrega.

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de barreiras de proteção | Nomear uma barreira de proteção no papel sem nunca acompanhá-la | Revisar o registro: uma barreira de proteção só conta se seu valor mais recente aparece no mesmo painel |
| Taxa de reabertura | Encerrar o ticket e abrir um novo em vez de reabrir; alongar a janela até que as reaberturas caiam fora dela | Taxa de tickets duplicados e vinculados; recorrência da mesma causa entre tickets |
| Contagem de mudanças de definição | Não registrar mudanças para que a contagem fique baixa; mudar um fluxo de trabalho sem avisar ninguém | Comparar o modelo de status da ferramenta com o registro a cada revisão |
| Taxa de uso de métricas | Citar toda métrica em um registro de decisões como formalidade | Perguntar o que mudou por causa da citação; amostrar o registro |
| Lacuna de percepção | Pesquisar apenas usuários satisfeitos; direcionar as pesquisas para momentos após uma boa interação | Taxa de resposta da pesquisa e perfil dos respondentes; comentários abertos lidos em voz alta numa revisão |

Uma leitura saudável é a de uma prática de métricas que muda: as definições são ajustadas por razões registradas, as métricas vêm e vão e a equipe consegue contar a história de uma decisão que um número mudou.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medir sem metas | Reduz a manipulação; convida à discussão honesta | Pode derivar para relatórios sobre os quais ninguém age |
| Metas com barreiras de proteção | Dá direção e urgência; o par limita a manipulação | Mais trabalho para manter; a barreira de proteção também é manipulada com o tempo |
| Métricas individuais | Fáceis de entender; parecem justas | Corrompem os dados; prejudicam a colaboração |
| Métricas de equipe e de serviço | Combinam com a forma como o trabalho realmente acontece | Mais difíceis de atribuir; escondem necessidades individuais de apoio |
| Poucas métricas | Mais fáceis de confiar e de lembrar | Pontos cegos; podem deixar passar um problema novo |
| Muitas métricas | Ampla cobertura | Diluem a atenção; cada métrica é fracamente governada |

A resposta em prosa é usar metas com parcimônia, para condições bem compreendidas e difíceis de manipular, como um objetivo de nível de serviço que os usuários pediram. Mesmo assim, prefira ligar a meta ao serviço, e não à avaliação de uma pessoa. O objetivo não é tirar números da tomada de decisão. É manter os números ligados à realidade mantendo ao seu lado as pessoas que os produzem.

## Perguntas para discutir com sua equipe

**1. Que número do nosso painel atual seríamos mais tentados a melhorar sem melhorar o trabalho?**
Comece pela métrica que as pessoas olham primeiro e passe àquela sobre a qual a liderança pergunta. Peça manobras específicas: o que faríamos com os dados se estivéssemos sob pressão? O facilitador deve registrar cada resposta sem julgá-la, porque a lista vira os vetores de manipulação do registro. Termine perguntando quais das manobras nossas barreiras de proteção pegariam e quais deixariam passar.

**2. Onde o relógio começa e para na nossa medida de tempo mais importante, e quem decidiu isso?**
Peça ao grupo que desenhe o ciclo de vida do ticket ou do item de trabalho num quadro e marque cada estado. Procure estados em que o tempo pode sumir, como aguardando o cliente ou em espera. Conte com que frequência cada estado é usado e por quem. A conversa costuma revelar que duas equipes usam a mesma palavra de maneiras diferentes.

**3. Quando um número nos fez fazer algo pouco útil pela última vez?**
Convide histórias, não culpa. Exemplos comuns são encerrar tickets antes de verificar, dividir mudanças para elevar a contagem de implantações ou reclassificar um incidente para evitar um relatório de violação. O facilitador deve perguntar o que a pessoa tentava proteger. A resposta geralmente mostra o incentivo que precisa mudar.

**4. Quem vê nossas métricas, e o que acontece com elas lá?**
Rastreie cada métrica da equipe até o seu público. Pergunte se alguma versão dela é usada para comparar equipes ou pessoas. Pergunte o que a equipe mostraria se o público fosse outro. Onde a equipe mudaria os números que mostra, há uma lacuna de confiança a conversar com esse público.

**5. Qual é a barreira de proteção de cada uma das nossas cinco métricas mais importantes, e ela está na mesma página?**
Faça uma lista de duas colunas num quadro. Se uma métrica não tem barreira de proteção, combine uma candidata e um responsável para testá-la por um trimestre. Se a barreira existe mas raramente é vista, discuta por quê. Evite escolher uma barreira que seja meramente o inverso da métrica, pois isso não diz nada de novo.

**6. Que métrica devemos aposentar neste trimestre?**
Peça evidências: quando foi usada pela última vez numa decisão? Se ninguém lembra, aposente-a por um período de teste e veja se alguém percebe. O facilitador deve tratar a aposentadoria como um evento normal. Equipes que nunca abandonam métricas acabam com relatórios em que ninguém confia nem lê.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega encontram a manipulação na velocidade, na vazão e nas contagens de implantação. A [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) em particular é uma ferramenta de planejamento de uma equipe, não uma medida de produtividade, e comparar equipes por ela leva a estimativas infladas. As equipes de entrega devem guardar para si as medidas de trabalho, publicar um pequeno conjunto para fora e parear cada medida de velocidade com uma medida de qualidade (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

### Equipes de serviço e operações

As equipes de serviço encontram a manipulação no tempo de resolução, na resolução no primeiro contato e no cumprimento de nível de serviço. Os estados que pausam o relógio e os campos de prioridade são os pontos usuais de deriva. As equipes de operações devem auditar as transições de status regularmente, relatar o uso dos estados de pausa e observar os contatos repetidos e a taxa de reabertura ao lado da velocidade. As equipes de plantão devem tomar especial cuidado com medidas que premiam não ser acionado, pois elas punem o alerta honesto (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Liderança e governança

Os líderes definem os incentivos, muitas vezes sem pretender. Uma pergunta feita numa revisão ("por que isto está vermelho?") ensina à equipe o que esconder. Os líderes devem perguntar o que a equipe aprendeu com um número, manter classificações fora da sala, proteger o relato franco e financiar o trabalho de melhoria que um número ruim revela. Os órgãos de governança devem esperar o registro de métricas e a revisão de manipulação como parte do relatório e tratar uma mudança definida em uma métrica como algo normal.

### Clientes e usuários

Os usuários sentem o efeito da manipulação como um serviço que parece bom no papel e ruim na prática: um ticket encerrado que não foi resolvido, uma interrupção rotulada como planejada, uma pesquisa que nunca chegou a eles. Os usuários também são a melhor barreira de proteção. Seu feedback, na forma de pesquisas, reclamações e comentários, deve ficar ao lado dos números operacionais e ser lido por inteiro, não reduzido a uma nota (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional mantém uma central de serviços e várias equipes de produto que constroem aplicações clínicas. Os números deste exemplo são ilustrativos.

A liderança define uma meta de encerrar 90% dos incidentes dentro do prazo acordado. Em dois meses o painel mostra 94%. A responsável pelas operações de serviço fica satisfeita, mas inquieta, porque a equipe clínica reclama mais, e não menos. Ela pede à equipe que faça uma revisão de manipulação da métrica.

A equipe esboça o ciclo de vida do ticket. Descobre que os tickets passam para "aguardando o cliente" em média duas vezes cada um e que o tempo nesse estado cresceu. Uma amostra de 30 tickets encerrados mostra que 7 foram encerrados com a nota "sem resposta do usuário" depois de uma única tentativa de ligação. Também descobre que a taxa de reabertura está estável apenas porque os usuários eram orientados a "abrir um novo ticket" quando o problema voltava.

A equipe faz três mudanças. Primeiro, o gráfico de tempo de resolução passa a mostrar a mediana, o 90º percentil e o ticket aberto mais antigo, junto com a proporção do tempo passado em estados de pausa. Segundo, o painel acrescenta uma taxa de contatos repetidos, definida como a proporção de novos tickets do mesmo usuário sobre o mesmo serviço em até 14 dias. Terceiro, uma breve pesquisa vai a uma amostra aleatória de tickets encerrados, e seus comentários abertos são lidos na revisão mensal.

Três meses depois, o número principal de conformidade cai para 88%, o que soa como má notícia. A taxa de contatos repetidos, porém, caiu, e os comentários da pesquisa sobre problemas não resolvidos ficaram mais raros. A responsável pelas operações diz à liderança que o número antigo estava inflado e que o novo quadro é mais honesto, e pede que aceitem uma meta de nível de serviço baseada na definição corrigida. A decisão, registrada no registro de decisões, é definir a meta após mais um trimestre de dados, e não imediatamente.

## Ágil, IA, automação e análise

### Ágil

Ciclos curtos de feedback permitem que uma equipe perceba cedo a manipulação. Uma prática que se encaixa bem é ler alguns itens brutos a cada revisão regular e compará-los com o número principal, com as partes interessadas na sala. O cuidado é que um ciclo que premia a rapidez do relato pode virar ele próprio uma meta; por isso mantenha o propósito de cada revisão no aprendizado.

### IA

A IA muda a aparência da manipulação. Um modelo pode produzir notas de resolução, atualizações de status ou categorias de ticket plausíveis em volume, de modo que uma métrica que conta esses artefatos pode ser satisfeita sem trabalho real. Pareie toda contagem influenciada por IA com uma verificação humana amostral da qualidade e relate a proporção da produção da IA que uma pessoa alterou. O cuidado é que uma baixa taxa de correção pode significar bons rascunhos ou revisão descuidada; por isso leia as duas coisas juntas.

### Automação

A coleta automatizada elimina as edições manuais nos dados, o que fecha algumas rotas de manipulação. Automatize a barreira de proteção tanto quanto a métrica, para que as duas apareçam na mesma página. O cuidado é que as pessoas passam então a manipular as entradas que a automação lê, como a categoria do ticket ou o estado de pausa; por isso audite as definições contra uma amostra de itens reais.

### Análise

A análise pode revelar manipulação por meio de distribuições estranhas, como um pico de tickets encerrados logo antes de um prazo de relatório ou um agrupamento exatamente no valor da meta. Use esses padrões para provocar uma conversa, não como prova de má intenção. O cuidado é que qualquer regra de detecção se torna conhecida e depois evitada; por isso alterne as barreiras de proteção e mantenha um humano na revisão.

## Olhar setorial

**Startup.** Equipes pequenas têm poucas métricas e muita confiança, o que ajuda. O perigo é importar cedo demais um grande painel corporativo. Comece com duas ou três medidas que os fundadores realmente usem, anote suas definições e mantenha-as longe das conversas de desempenho individual.

**Pequena empresa.** Os recursos são escassos, e quem cuida de TI muitas vezes responde diretamente ao proprietário. Uma única reclamação de cliente pode pesar mais do que qualquer painel. Mantenha o conjunto pequeno, prefira o feedback direto dos usuários e trate com cautela os relatórios fornecidos por fornecedores, pois o fornecedor tem incentivos próprios.

**Grande empresa.** A escala multiplica tanto a demanda por números comparáveis quanto a pressão para manipulá-los. Use um pequeno conjunto padrão com definições escritas, mantenha as visões de trabalho das equipes separadas das consolidações e evite comparar equipes que trabalham em tipos diferentes de serviço. Um registro de métricas e uma cadência de revisão tornam-se essenciais.

**Governo e setor público.** Obrigações de relatório e níveis de serviço contratuais podem tornar algumas metas inegociáveis. Trate-as como insumos de projeto: cumpra-as, mostre a barreira de proteção ao lado e relate as definições usadas. A prestação de contas pública eleva o custo de esconder más notícias; por isso construa canais internos seguros e seja aberto sobre definições corrigidas (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo de aplicar este tópico é principalmente tempo: algumas horas para escrever definições e um registro, uma breve revisão trimestral de manipulação e a amostragem ocasional de itens encerrados. Há pouco custo de ferramentas. O custo maior é a atenção da liderança, porque a disciplina só funciona se as pessoas que leem os números se comportarem de forma consistente.

O retorno vem do desperdício evitado e de melhores decisões. Decisões tomadas com dados corrompidos podem direcionar investimento ao problema errado, como dimensionar uma central de serviços para encerrar tickets mais rápido quando o problema real são os contatos repetidos causados por um defeito. A manipulação também corrói a confiança entre a equipe e as pessoas que dependem dela, o que é difícil de reparar. Descreva o benefício no padrão, não com uma porcentagem inventada: menos reversões de decisões, menos surpresas em auditorias e melhor concordância entre os números operacionais e a experiência do usuário. Se precisar de cifras para um business case, meça suas próprias linhas de base, como a lacuna de percepção e a taxa de contatos repetidos, antes e depois da mudança.

## Antipadrões e armadilhas

- **Metas sem barreiras de proteção.** Uma meta solitária é cumprida por qualquer rota disponível. Acrescente uma medida pareada antes de anunciar a meta.
- **Classificações de pessoas ou de equipes.** Convidam à manipulação e desestimulam a ajuda entre equipes. Mostre a cada equipe sua própria tendência, com contexto.
- **Métricas como punição.** Um número vermelho que traz culpa ficará verde por ocultação. Pergunte, em vez disso, do que a equipe precisa.
- **Médias de dados assimétricos.** Escondem a cauda onde os usuários sofrem. Use percentis e a idade do item mais antigo.
- **Mudar definições em silêncio.** As linhas de tendência perdem o sentido. Registre cada mudança com o motivo e marque-a no gráfico.
- **Tratar a barreira de proteção como a nova meta.** A barreira então é manipulada. Revise as duas em conjunto e alterne as barreiras quando perderem força.
- **Métricas de vaidade.** Contagens que só sobem, como tickets atendidos ou commits feitos, nada dizem sobre resultados. Prefira medidas que possam cair além de subir.
- **Ignorar a evidência qualitativa.** Números sozinhos não mostram que um ticket encerrado pareceu não resolvido. Leia os comentários.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | Informais; cada pessoa conta de um jeito | Escritas para algumas métricas | Uma definição escrita por métrica, com relógios e exclusões | Definições revisadas e mudanças registradas com os motivos | Definições alinhadas entre equipes e fornecedores, revistas quando deixam de informar decisões |
| Barreiras de proteção | Nenhuma | Nomeadas para algumas métricas | Toda métrica relatada tem uma barreira de proteção na mesma página | Barreiras de proteção revisadas quanto à manipulação a cada trimestre | Barreiras de proteção se alternam e são co-projetadas com as pessoas medidas |
| Uso e segurança | Números usados para atribuir culpa | A equipe vê seus próprios números | A equipe vê os dados primeiro; sem classificações individuais | A liderança faz perguntas de aprendizado; o relato é seguro | Clientes e fornecedores compartilham uma visão franca dos números |

## Lista de verificação

- [ ] Toda métrica relatada tem uma pergunta escrita e uma decisão que ela informa.
- [ ] Toda medida de tempo tem uma regra escrita de início, parada e pausa.
- [ ] Toda métrica relatada tem uma barreira de proteção nomeada mostrada ao lado.
- [ ] As medidas de tempo mostram percentis e a idade do item aberto mais antigo.
- [ ] Existe um registro de métricas com responsável, definição, vetor de manipulação, barreira de proteção e data de revisão.
- [ ] A equipe vê seus dados antes da liderança.
- [ ] Nenhuma classificação individual, remuneração ou medida disciplinar está ligada a uma métrica.
- [ ] Uma revisão trimestral de manipulação está no calendário.
- [ ] Uma amostra de itens encerrados é lida a cada trimestre para verificar a honestidade.
- [ ] Pelo menos uma métrica foi aposentada ou redesenhada no último ano.

## Prompts de IA

**Faça uma revisão de manipulação de uma métrica.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Redija uma entrada do registro de métricas.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Audite uma amostra de tickets encerrados.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Planeje como introduzir uma métrica com segurança.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico e a barreira de proteção pareada de uma métrica que você está prestes a introduzir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um novo tópico de métricas traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Uma medida que vira meta deixa de descrever o trabalho; por isso use os números para fazer perguntas.
- A manipulação é uma resposta normal à pressão e ao medo, e se reduz mudando as condições, não policiando.
- Toda métrica precisa de uma definição escrita com seus relógios e de uma barreira de proteção mostrada ao lado.
- Prefira percentis e a idade do item mais antigo a médias.
- Descreva equipes e serviços, nunca classifique indivíduos, e deixe a equipe ver primeiro seus dados.
- Revise a manipulação a cada trimestre e aposente as métricas que já não informam decisões.

## Referências e leituras complementares

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Efeito cobra](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Incentivo perverso](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogação](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Indicador-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (desenvolvimento de software)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
