# Métricas de disponibilidade

**A disponibilidade é a proporção do tempo, ou das requisições dos usuários, em que um serviço fez o que seus usuários precisavam, e só diz a verdade quando você define o que significa "no ar" do lado do usuário, conta as interrupções planejadas e não planejadas separadamente e lê a aritmética dos noves antes de prometer algum.**

## Visão geral e motivação

A disponibilidade é o número mais citado na gestão de serviços e um dos menos definidos com precisão. Uma afirmação como "o serviço esteve 99,9% disponível no mês passado" soa exata, mas esconde pelo menos quatro decisões: o que contou como o serviço, o que contou como "disponível", quais horas estavam no escopo e quais interrupções foram excluídas. Duas equipes podem relatar o mesmo serviço no mesmo mês e publicar cifras que diferem por uma ordem de grandeza sem que nenhuma cometa um erro aritmético.

Este tópico torna explícitas essas decisões. Cobre o cálculo de tempo no ar e de indisponibilidade, a disponibilidade ponderada por usuários, a interrupção planejada versus não planejada e a aritmética dos noves. Apoia-se nos indicadores de nível de serviço (SLIs), nos objetivos de nível de serviço (SLOs) e nos orçamentos de erro (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) e na visão contratual dos níveis de serviço (veja o tópico 5.1, Métricas de SLA, OLA e XLA). Esses tópicos dizem como escolher uma meta. Este diz como calcular o número com que a meta é comparada.

### Termos usados neste tópico

- **Disponibilidade** é a capacidade de um serviço de fazer o que os usuários precisam quando precisam, geralmente expressa como porcentagem em um período. O conceito geral é descrito no artigo sobre [alta disponibilidade](https://en.wikipedia.org/wiki/High_availability).
- **[Indisponibilidade (downtime)](https://en.wikipedia.org/wiki/Downtime)** é um período em que um serviço está indisponível. Este tópico usa **interrupção** para um episódio contínuo de indisponibilidade e **degradação** para um período em que o serviço funciona mas abaixo de uma qualidade combinada.
- **Tempo no ar (uptime)** é o complemento da indisponibilidade dentro da janela de medição. A disponibilidade baseada em tempo é o tempo no ar dividido pelo tempo total no escopo.
- **Disponibilidade baseada em requisições** é a proporção das requisições válidas que tiveram sucesso; assim, uma falha que afeta 5% das requisições durante uma hora conta como 5% do tráfego de uma hora, e não como uma hora inteira de indisponibilidade.
- **Disponibilidade ponderada por usuários** estende a visão baseada em requisições ponderando as falhas pelo número ou pela importância dos usuários afetados, por exemplo contando sessões ou jornadas com falha em vez de requisições brutas.
- Um **acordo de nível de serviço (SLA)** é um compromisso com um cliente, e um **objetivo de nível de serviço (SLO)** é uma meta interna para um indicador. Os artigos sobre [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement) e [objetivo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_objective) dão definições gerais.
- **Indisponibilidade planejada** é uma interrupção anunciada com antecedência e aprovada pela habilitação de mudanças. **Indisponibilidade não planejada** é todo o resto. A fronteira entre elas é uma das linhas mais disputadas no relato de disponibilidade.
- O **[tempo médio entre falhas](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)** é o tempo médio de operação entre interrupções, e o **[tempo médio de reparo](https://en.wikipedia.org/wiki/Mean_time_to_repair)** é o tempo médio para restabelecer. Ambos são médias; por isso este livro os lê como distribuições (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- O **[monitoramento sintético](https://en.wikipedia.org/wiki/Synthetic_monitoring)** usa sondas roteirizadas que se comportam como um usuário e relatam sucesso ou falha. O **[monitoramento de usuários reais](https://en.wikipedia.org/wiki/Real_user_monitoring)** registra a experiência de usuários reais enquanto usam o serviço.
- O **[ITIL](https://en.wikipedia.org/wiki/ITIL)** é a estrutura mais conhecida de gestão de serviços de TI. No ITIL 4, a prática de gestão de disponibilidade se preocupa em garantir que os serviços entreguem os níveis de disponibilidade combinados e trabalha de perto com o monitoramento e a gestão de eventos, a gestão de incidentes e a gestão de continuidade de serviço.

### Por que um único número nunca basta

Dez interrupções de quatro minutos cada e uma interrupção de quarenta minutos produzem o mesmo total de indisponibilidade, mas são sentidas de forma diferente pelos usuários e pedem respostas diferentes. O primeiro padrão aponta para um serviço frágil. O segundo aponta para detecção ou recuperação lentas. Por isso as métricas aqui vêm como um pequeno conjunto, cada uma com uma barreira de proteção, para que uma equipe possa discutir a disponibilidade com honestidade, sem competir pelo maior número de noves.

### Como as visões ITIL e ágil diferem

No ITIL, a disponibilidade é um atributo gerido de um serviço, combinado com o cliente e relatado pela gestão de nível de serviço contra uma meta declarada, com horário de serviço claro e exclusões como a manutenção planejada.

Na prática ágil e de engenharia de confiabilidade de sites (SRE), a disponibilidade é um SLI entre vários, comparado com um SLO. O livro *Site Reliability Engineering*, do Google, diz que a disponibilidade baseada em tempo serve a um sistema único, enquanto a taxa de sucesso das requisições serve a serviços distribuídos que estão parcialmente no ar o tempo todo. Diz também que 100% quase nunca é a meta certa, porque o custo de cada nove extra sobe de forma acentuada.

Use a disciplina do ITIL de escopo, horário e exclusões combinados para definir o denominador. Use a disciplina da SRE de indicadores centrados no usuário e orçamentos de erro para definir o numerador e decidir o que fazer com o resultado.

## Princípios-chave

- **Defina "disponível" do lado do usuário.** Um serviço que responde às verificações de saúde enquanto os usuários não conseguem entrar está fora do ar para as pessoas que importam.
- **Escreva o denominador.** Declare a fronteira do serviço, as horas no escopo, o fuso horário e a janela de medição antes de calcular qualquer coisa.
- **Conte as interrupções planejadas e não planejadas separadamente.** Relate as duas, juntas, e nunca deixe uma se esconder dentro da outra.
- **Prefira medidas baseadas em requisições e ponderadas por usuários para serviços distribuídos.** Uma falha parcial não é nem tempo no ar total nem indisponibilidade total.
- **Converta os noves em minutos.** Uma meta só é compreendida quando as pessoas conseguem dizer quantos minutos de falha por mês ela permite.
- **Escolha o número de noves de que os usuários precisam.** Além desse ponto, cada nove extra custa mais do que devolve.
- **Descreva serviços, nunca pessoas.** A disponibilidade pertence a um serviço e às equipes que o operam e nunca é a nota de um indivíduo.

## Definições de métricas

Cada linha declara seus relógios e fronteiras. O tempo de calendário é usado, salvo indicação em contrário numa linha. Onde uma medida usa uma distribuição, relate a mediana e o 95º percentil e nomeie a janela.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilidade baseada em tempo | Proporção do tempo no escopo em que o serviço cumpriu a definição escrita de "no ar" | (minutos no escopo na janela menos minutos de indisponibilidade não planejada) / minutos no escopo na janela. O relógio começa na primeira sonda com falha depois confirmada como impacto sobre o usuário, ou no início de impacto confirmado registrado na revisão do incidente; para quando o serviço volta a cumprir a definição. A indisponibilidade planejada dentro do horário de serviço combinado é mostrada à parte, e o tempo fora do horário de serviço combinado é excluído do denominador | porcentagem | Resultados do monitoramento sintético; registro do incidente com carimbos de início do impacto e de restabelecimento | Gestão de disponibilidade; gestão de nível de serviço | Um SLI baseado em tempo para um sistema único (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) | Mensal |
| Disponibilidade baseada em requisições | Proporção das requisições válidas que tiveram sucesso | requisições válidas bem-sucedidas / total de requisições válidas na janela. As requisições válidas excluem requisições malformadas e erros de cliente causados por quem chama; falhas causadas pelo serviço, incluindo timeouts, são contadas como falhas. Relatada por serviço e por jornada de usuário | porcentagem | Registros e métricas do balanceador de carga, do gateway ou da aplicação | Gestão de disponibilidade; monitoramento e gestão de eventos | SLI de taxa de sucesso com um SLO e um orçamento de erro (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) | Tendência diária, relatório mensal |
| Disponibilidade ponderada por usuários | Disponibilidade ponderada pelos usuários ou jornadas afetados, de modo que uma interrupção no pico conte mais que uma de madrugada | 1 menos (sessões de usuário ou jornadas com falha / total de sessões de usuário ou jornadas) na janela. Uma sessão conta como falha se uma etapa crítica definida falhou; o sucesso parcial é relatado como uma parcela de degradação separada, e não incorporado | porcentagem | Monitoramento de usuários reais; registros de sessão da aplicação; eventos de análise | Gestão de disponibilidade; gestão de nível de serviço | SLI baseado em jornada e as medidas de experiência do tópico 6.2 (veja o tópico 6.2, Acordos de nível de experiência) | Mensal |
| Indisponibilidade não planejada | Minutos em que o serviço esteve indisponível sem aviso prévio aprovado | Soma das durações das interrupções na janela, do início de impacto confirmado ao restabelecimento confirmado, para interrupções não anunciadas e aprovadas pela habilitação de mudanças antes de começarem. Interrupções sobrepostas no mesmo serviço são mescladas, e não somadas. Relatada como total de minutos, contagem de interrupções e a mediana e o 95º percentil da duração das interrupções | minutos | Registro do incidente com carimbos de início do impacto e de restabelecimento | Gestão de incidentes; gestão de disponibilidade | Tempo até restabelecer lido como uma distribuição (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes) | Mensal |
| Parcela de indisponibilidade planejada | Proporção de toda a indisponibilidade que foi anunciada e aprovada com antecedência | minutos de indisponibilidade planejada / (minutos de indisponibilidade planejada mais não planejada) na janela. Uma interrupção conta como planejada somente se foi aprovada por um registro de mudança antes de começar e se seus horários de início e fim foram comunicados aos usuários; um estouro além da janela aprovada é reclassificado como não planejado desde o momento em que a janela terminou | porcentagem | Registro de mudança com a janela aprovada; registro do incidente; histórico da página de status | Habilitação de mudanças; gestão de disponibilidade | Práticas de release e de manutenção que favorecem a implantação sem indisponibilidade (veja o tópico 4.3, Métricas de habilitação de mudanças) | Mensal |
| Frequência e espaçamento das interrupções | Com que frequência as interrupções começam e quanto tempo o serviço funciona entre elas | Contagem de interrupções que começam na janela; e, para cada par de interrupções consecutivas, os minutos de tempo no ar entre o restabelecimento da primeira e o início da segunda, resumidos como a mediana e o 5º percentil. Não é relatada como média única quando existem menos de dez intervalos | contagem; minutos | Registro de incidentes; histórico de monitoramento | Gestão de incidentes; gestão de problemas | Sinal de estabilidade ao lado da taxa de falha de mudanças (veja o tópico 4.4, Falhas de mudança e retrabalho) | Mensal |
| Parcela de degradação | Tempo em que o serviço funcionou mas abaixo de uma qualidade combinada | Minutos em que o indicador de latência, de erro ou de correção violou seu limiar, excluindo os minutos já contados como indisponibilidade / minutos no escopo. Limiar declarado por serviço, por exemplo no SLO | porcentagem | Monitoramento e medições de SLI | Gestão de disponibilidade; gestão de capacidade e desempenho | SLI de latência (veja o tópico 5.4, Métricas de capacidade e desempenho) | Mensal |
| Cobertura da medição | Quanto do comportamento voltado ao usuário do serviço a medição de disponibilidade de fato observa | Jornadas críticas de usuário com uma sonda ativa ou medição de usuário real / jornadas críticas de usuário listadas na definição do serviço | porcentagem | Definição do serviço; configuração de monitoramento | Monitoramento e gestão de eventos; gestão de disponibilidade | Cobertura de observabilidade e qualidade dos alertas (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas) | Trimestral |

Duas notas sobre os dados. Uma sonda que verifica a cada cinco minutos não consegue resolver uma interrupção de dois minutos; por isso registre o intervalo da sonda ao lado da cifra e use o campo de início do impacto no registro do incidente (veja o tópico 1.5, Fontes de dados e instrumentação). Sempre que a definição de "no ar" mudar, marque isso no gráfico de tendência.

## Recomendações

### Defina a medição

**1. Escreva a definição do serviço antes da porcentagem.** Liste a fronteira do serviço, as jornadas críticas de usuário, as horas no escopo, o fuso horário e a janela (um mês de calendário é o usual). Diga quais dependências contam: se um provedor de pagamentos falha e os usuários não conseguem pagar, isso é uma interrupção sua? Registre a resposta no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas). A maioria das disputas sobre disponibilidade é disputa sobre essa página, e resolvê-las de antemão é muito mais barato do que resolvê-las depois de uma interrupção.

**2. Defina "no ar" como um resultado do usuário, não como um estado do servidor.** Uma verificação de saúde que retorna sucesso enquanto o login está quebrado mede a coisa errada. Escolha um pequeno número de jornadas críticas, como "buscar e ver um item", "entrar" ou "enviar uma reclamação", e defina o sucesso de cada uma em termos que os usuários reconheçam. Sonde a jornada de ponta a ponta e trate uma resposta lenta além de um limiar combinado como degradada, e não como no ar.

**3. Use medidas baseadas em requisições para serviços distribuídos e medidas baseadas em tempo onde o serviço está genuinamente ligado ou desligado.** Um serviço global raramente está totalmente fora do ar; por isso contar minutos de falha total ignora a maioria das falhas reais. Relate as duas quando puder e diga qual é a manchete e por quê.

**4. Acrescente ponderação por usuários onde a carga é desigual.** Uma interrupção de dez minutos às 4 da manhã e uma no início de um dia de negociações têm a mesma duração e custo muito diferente. Pondere por sessões ou transações no minuto da falha, ou relate os minutos de interrupção em horário de pico como uma cifra separada.

**5. Meça de fora do domínio de falha.** Uma sonda dentro da mesma rede ou região do serviço falha junto com ele ou continua relatando sucesso enquanto o caminho que os usuários percorrem está quebrado. Rode sondas sintéticas de pelo menos dois locais independentes e confira-as contra os dados de usuários reais.

### Trate com honestidade as interrupções planejadas e não planejadas

**6. Relate lado a lado a indisponibilidade planejada e a não planejada.** Muitos acordos excluem a manutenção planejada, o que é razoável. Os usuários ainda a vivenciam como indisponibilidade; por isso mostre os minutos excluídos e a parcela planejada ao lado da manchete (veja o tópico 4.3, Métricas de habilitação de mudanças).

**7. Faça o rótulo "planejado" difícil de merecer.** Defina planejado como aprovado por um registro de mudança antes de a interrupção começar, com horários de início e fim comunicados antecipadamente aos usuários. Uma interrupção anunciada depois de começar é não planejada. Um estouro além da janela aprovada é não planejado desde o momento em que a janela terminou. Essas três regras impedem que o rótulo vire um modo de rebatizar falhas.

**8. Trabalhe para encolher a indisponibilidade planejada.** Implantações graduais, feature flags, migrações de esquema sem bloqueio e releases blue-green permitem que as equipes mudem um serviço sem tirá-lo do ar. Acompanhe os minutos de indisponibilidade planejada como tendência e pergunte o que seria preciso para levá-los em direção a zero.

### Leia bem os números

**9. Converta os noves em minutos e mostre-os.** A tabela abaixo dá a aritmética para um mês de 30 dias (43.200 minutos) e um ano de 365 dias (525.600 minutos). Ponha no painel os minutos permitidos ao lado da meta e mostre os minutos usados até agora na janela. As pessoas tomam melhores decisões sobre "43 minutos por mês" do que sobre "três noves".

| Meta de disponibilidade | Indisponibilidade permitida em um mês de 30 dias | Indisponibilidade permitida em um ano de 365 dias |
| --- | --- | --- |
| 99% | 432 minutos (7,2 horas) | 5.256 minutos (87,6 horas) |
| 99,5% | 216 minutos (3,6 horas) | 2.628 minutos (43,8 horas) |
| 99,9% | 43,2 minutos | 525,6 minutos (8,76 horas) |
| 99,95% | 21,6 minutos | 262,8 minutos (4,38 horas) |
| 99,99% | 4,32 minutos | 52,56 minutos |
| 99,999% | cerca de 26 segundos | cerca de 5,26 minutos |

Os valores supõem que o relógio corre durante a janela inteira. Se você mede apenas o horário de serviço combinado, os minutos permitidos encolhem na mesma proporção, e você deve dizer isso.

**10. Respeite o custo de cada nove extra e os limites das suas dependências.** O livro de SRE observa que os custos de confiabilidade sobem de forma acentuada a cada nove adicional e que a meta deve refletir o que os usuários precisam e o que o negócio pagará. Um serviço raramente pode ser mais disponível do que as dependências de que precisa em série. Se três componentes essenciais alcançam cada um 99,9% e uma requisição precisa dos três, a melhor disponibilidade esperada para a combinação é de aproximadamente 99,7%, porque as probabilidades de falha se somam quando os componentes são independentes. Faça a multiplicação antes de prometer uma cifra.

**11. Olhe o espaçamento e a forma, e não só o total.** Interrupções curtas e frequentes exigem uma resposta diferente de uma única interrupção longa e rara. Ligue as interrupções longas à detecção e ao restabelecimento (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes) e à visão de incidentes graves (veja o tópico 3.4, Métricas de incidentes graves).

**12. Feche o ciclo com o orçamento de erro e o registro de problema.** Uma meta de disponibilidade é útil quando muda o que a equipe faz. Quando o orçamento mensal de indisponibilidade permitida está quase gasto, desacelere as mudanças arriscadas e mova o esforço para o trabalho de confiabilidade, como descrito na política de orçamento de erro (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Quando a mesma causa se repete, abra um registro de problema e acompanhe-o até uma correção (veja o tópico 4.1, Métricas de gestão de problemas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Disponibilidade baseada em tempo | Sondar uma página trivial que fica no ar enquanto a jornada real falha; alongar o intervalo das sondas para que interrupções curtas caiam entre as verificações; encolher as horas no escopo; contar interrupções como degradação | Disponibilidade ponderada por usuários e monitoramento de usuários reais; intervalo da sonda declarado ao lado da cifra; amostra de incidentes contra o registro de monitoramento |
| Disponibilidade baseada em requisições | Contar requisições fáceis (verificações de saúde, ativos em cache) no denominador para diluir as falhas; classificar erros de servidor como erros de cliente; excluir tentativas repetidas que os usuários vivenciaram como falhas | Taxa de sucesso por jornada crítica, e não por requisição; revisão da lista de exclusões; comparação com incidentes relatados por usuários |
| Disponibilidade ponderada por usuários | Escolher a ponderação para que as falhas de pico importem pouco; definir uma sessão "bem-sucedida" de modo tão frouxo que etapas quebradas ainda passem | Publicar a regra de ponderação e a lista de jornadas; comparar com o volume de reclamações e de contatos de suporte durante as interrupções |
| Indisponibilidade não planejada | Reclassificar interrupções como planejadas depois do fato; atrasar o início de impacto confirmado; dividir uma interrupção em duas para parecer mais curta | Parcela de indisponibilidade planejada, com a regra de que uma interrupção anunciada depois de começar é não planejada; comparar o início do impacto com os dados de monitoramento |
| Parcela de indisponibilidade planejada | Registrar mudanças como janelas aprovadas para que estouros e falhas contem como planejados; inflar a parcela planejada programando manutenção desnecessária | Minutos de estouro reclassificados como não planejados; taxa de falha de mudanças e parcela de mudanças emergenciais (veja o tópico 4.4, Falhas de mudança e retrabalho) |
| Frequência e espaçamento das interrupções | Fundir incidentes, ou abrir um novo incidente só depois de um longo intervalo, para manter baixa a contagem; suprimir alertas para que interrupções curtas não sejam registradas | Amostragem de alertas e incidentes contra eventos brutos de monitoramento; cobertura do monitoramento e qualidade dos alertas (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas) |
| Parcela de degradação | Definir o limiar tão frouxo que o serviço lento nunca o viole; declarar o tempo degradado como no ar | Percentis de latência e lentidão relatada pelos usuários revistos ao lado da cifra (veja o tópico 5.4, Métricas de capacidade e desempenho) |
| Cobertura da medição | Listar apenas as jornadas fáceis de sondar, para que a cobertura leia 100%; contar uma jornada como coberta por uma sonda que nunca roda | Lista de jornadas combinada com o dono do serviço e os usuários; histórico de execução das sondas amostrado a cada trimestre |

Uma leitura saudável mostra cifras que se movem por razões que a equipe sabe explicar, com a indisponibilidade planejada e a não planejada ambas visíveis e uma cifra ponderada por usuários próxima da manchete. Desconfie de um mês perfeito que vem acompanhado de reclamações. Uma queda honesta ocasional mostra que o sistema de registro funciona.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Disponibilidade baseada em tempo | Simples, amplamente compreendida, fácil de comparar com contratos | Trata a falha parcial como tudo ou nada; ignora quando e quem |
| Disponibilidade baseada em requisições | Reflete a falha parcial; escala para serviços distribuídos | Depende de uma boa definição de requisição válida; pode ser diluída por tráfego fácil |
| Disponibilidade ponderada por usuários | Próxima do que os usuários vivenciaram; mostra o custo da falha em horário de pico | Exige dados de sessão ou de jornada; mais esforço para explicar |
| Excluir a indisponibilidade planejada | Combina com muitos acordos; premia o aviso prévio | Pode esconder impacto real; convida ao rebatismo |
| Metas moderadas com orçamentos de erro | Equilibra a confiabilidade e a velocidade de entrega | Exige disciplina para agir quando o orçamento é gasto |

A resposta pragmática é escolher a medida mais simples que se ajuste ao serviço, acrescentar ponderação por usuários onde a carga é desigual e ser explícito sobre toda exclusão. Uma medida um pouco menos elegante que todos entendem faz mais bem que uma sofisticada em que ninguém confia.

## Perguntas para discutir com sua equipe

**1. O que significa "disponível" para o nosso serviço mais importante, e um usuário concordaria?**
Peça a cada pessoa que descreva, em uma frase, o que um usuário precisa conseguir fazer para o serviço contar como no ar. Comparem as respostas com a definição escrita e com a sonda que alimenta o painel. O facilitador deve ouvir as lacunas, como o login, a busca ou o pagamento funcionando na sonda mas falhando na prática. Terminem combinando quais jornadas de usuário a definição deve nomear.

**2. Quais interrupções do último trimestre o nosso cálculo teria excluído, e isso foi justo?**
Listem as interrupções e marquem cada uma como planejada, não planejada ou excluída. Perguntem quem tomou cada decisão e quando. O facilitador deve registrar os casos em que os usuários discordariam do rótulo e usá-los para apertar as regras.

**3. Quantos minutos de indisponibilidade a nossa meta permite, e quantos usamos nesta janela?**
Convertam a meta em minutos para o mês e o ano num quadro. Comparem com os minutos usados até agora. Perguntem o que a equipe faria de diferente se restassem apenas 20% do orçamento. Isso torna concreta a meta abstrata e liga o número à política de orçamento de erro.

**4. Onde a nossa medição poderia perder uma falha que os usuários sentiriam?**
Percorram os locais das sondas, o intervalo, as jornadas cobertas e as dependências. Perguntem que falha passaria por todas as sondas e ainda assim quebraria o serviço para os usuários. Combinem uma nova sonda ou uma medida de usuário real a acrescentar.

**5. Estamos planejando interrupções que poderíamos evitar?**
Olhem a indisponibilidade planejada de seis meses e perguntem o que forçou cada interrupção. Algumas são inevitáveis, como a exigência de um fornecedor. Outras vêm de uma abordagem de release ou de migração que poderia mudar. Perguntem o que seria preciso para remover a maior fonte e quem é dono desse trabalho.

**6. Se a cifra da manchete parece perfeita, o que nos faria duvidar dela?**
Nomeiem os sinais que contradiriam o painel: volume de reclamações, contatos de suporte ou a lembrança da equipe de plantão. Confiram se algum existe agora. Combinem uma comparação para pôr no painel.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega afetam a disponibilidade toda vez que mudam um serviço. Podem projetar para a implantação sem indisponibilidade, usar feature flags para limitar o raio de impacto e tratar o orçamento de erro como insumo das decisões de release, lendo a disponibilidade ao lado das medidas de implantação (veja o tópico 2.8, Métricas DORA).

### Equipes de serviço e operações

As equipes de operações são donas das sondas, dos registros de incidentes e dos rodízios que produzem os dados. Devem manter atuais a definição e a lista de exclusões, registrar o início do impacto com honestidade e rever o monitoramento contra incidentes reais. A disponibilidade pertence ao serviço e ao seu rodízio, nunca a um engenheiro de plantão (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

### Liderança e governança

Os líderes definem os incentivos que decidem se os dados de disponibilidade são francos. Uma revisão que pergunta "por que vocês perderam um nove?" ensina as equipes a esconder interrupções nas exclusões. Pergunte o que a equipe aprendeu e que investimento reduziria as interrupções e não peça mais noves do que os usuários notariam (veja o tópico 8.4, Métricas de fornecedores e contratos, para compromissos de fornecedores).

### Clientes e usuários

Os usuários julgam a disponibilidade por conseguirem ou não fazer o que vieram fazer. Toleram uma janela de manutenção sinalizada muito melhor que uma surpresa. Dê a eles uma página de status com horários honestos de início e fim e leia o feedback deles ao lado dos números (veja o tópico 6.2, Acordos de nível de experiência).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma vitrine, um serviço de checkout e um serviço de rastreamento de pedidos. Os números deste exemplo são ilustrativos.

A equipe de checkout relata uma disponibilidade baseada em tempo de 99,95% no mês, o que permite 21,6 minutos de indisponibilidade não planejada, e o painel mostra 99,96%. A chefe do suporte ao cliente fica inquieta, porque os contatos de suporte sobre pagamentos com falha subiram no mesmo mês. Ela pede à equipe que revise a medição.

A equipe encontra três problemas. A sonda verifica uma página de "o checkout está acessível" a cada cinco minutos, e não a jornada de pagamento completa. Os dados baseados em requisições mostram que em duas noites um timeout do provedor de pagamentos fez cerca de 4% das tentativas de pagamento falharem por aproximadamente 50 minutos cada, e a sonda nunca notou porque a página em si carregava. E uma migração de banco de dados que estourou sua janela aprovada em 18 minutos havia sido registrada inteiramente como manutenção planejada.

A equipe faz quatro mudanças. Acrescenta uma sonda sintética para a jornada completa de pagamento, de dois locais, em um intervalo de um minuto. Acrescenta cifras baseadas em requisições e ponderadas por usuários, usando as sessões que chegaram à etapa de pagamento. Reclassifica os minutos de estouro como não planejados. E acrescenta ao relatório a parcela de indisponibilidade planejada e a cobertura da medição.

Na base corrigida, o mês mostra uma disponibilidade baseada em tempo de 99,93%, uma disponibilidade baseada em requisições de 99,90% e uma disponibilidade ponderada por usuários de 99,84%, porque as falhas ocorreram no pico da noite. As três ficam abaixo da meta de 99,95%, o que é desconfortável. A equipe e a chefe do suporte concordam que o número anterior era generoso demais. Escrevem a definição corrigida no registro de métricas e põem em vigor a política de orçamento de erro: no mês seguinte, as mudanças arriscadas no checkout esperam até o orçamento se recuperar, e a equipe abre um registro de problema para os timeouts do provedor de pagamentos (veja o tópico 4.1, Métricas de gestão de problemas).

O risco de manipulação que pegam é o rebatismo. Um gerente sugeriu chamar o estouro de "manutenção estendida" para proteger a meta. A parcela de indisponibilidade planejada, com sua regra de que os estouros viram não planejados, tornou visível a reclassificação, e a equipe manteve a cifra honesta.

## Ágil, IA, automação e análise

### Ágil

Defina a disponibilidade do lado do usuário e reveja a definição com as partes interessadas quando o serviço mudar. O cuidado é que um número alto de noves em um componente diz pouco sobre a jornada que um usuário percorre.

### IA

Os componentes de IA podem falhar de forma branda, sendo lentos, errados ou indisponíveis só para algumas entradas, o que o simples tempo no ar perde. Acrescente uma visão ajustada pela qualidade, como a proporção das requisições com uma resposta correta e pontual, e pareie-a com problemas relatados pelos usuários. O cuidado é que contar uma resposta degradada da IA como no ar lisonjeia o número.

### Automação

Colete automaticamente os resultados das requisições do tráfego real e das sondas sintéticas e meça as sondas quanto à cobertura. O cuidado é que uma sonda que verifica uma página de saúde pode dizer no ar enquanto os usuários não conseguem entrar.

### Análise

Relate a disponibilidade baseada em tempo e em requisições com a parcela de degradação e declare a janela de medição. A decisão informada é onde o trabalho de confiabilidade ajudará os usuários. O cuidado é que interrupções raras tornam instáveis as porcentagens anuais; por isso mostre os eventos, e não só as porcentagens.

## Olhar setorial

**Startup.** Uma equipe pequena muitas vezes tem um serviço e pouco monitoramento. Comece com uma sonda na jornada mais importante e uma definição de "no ar" de um parágrafo. Escolha uma meta modesta, converta-a em minutos e evite prometer noves que a equipe ainda não consegue medir.

**Pequena empresa.** O serviço costuma ser ferramentas hospedadas mais alguns sistemas sob medida, e a disponibilidade depende de fornecedores. Registre as interrupções de fornecedores conforme afetam seus usuários, compare com o que o fornecedor relata e mantenha o conjunto em duas ou três cifras.

**Grande empresa.** Muitos serviços, muitas equipes e muitos fornecedores multiplicam as definições em uso. Publique uma definição padrão de disponibilidade com uma lista curta de variações permitidas, mantenha atualizado o registro de métricas e garanta que as regras de planejado e não planejado sejam as mesmas entre equipes antes de compará-las. Prefira o relato por nível de serviço a tabelas de classificação de equipes, já que os serviços diferem em carga e em criticidade.

**Governo e setor público.** Os serviços públicos muitas vezes têm horários de serviço legais, compromissos publicados e contratos com créditos formais. Relate contra eles como escritos, mostre a visão ponderada por usuários ao lado e seja aberto sobre as exclusões (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os principais custos são o tempo para escrever a definição do serviço e o registro, um monitoramento que sonde as jornadas críticas de fora do domínio de falha e o esforço de cruzar os dados de incidentes, mudanças e monitoramento para que a indisponibilidade planejada e a não planejada possam ser separadas. O monitoramento de usuários reais acrescenta custos de ferramentas e de armazenamento. A maioria das organizações já possui parte dos dados; por isso o primeiro investimento costuma ser em definições.

O retorno vem de melhores decisões e menos disputas. As equipes que medem do lado do usuário encontram falhas que as verificações de saúde perdem, os acordos são mais fáceis de gerir com uma só definição e o custo de um nove extra pode ser posto contra seu valor para os usuários. Descreva o benefício como um padrão, como menos surpresas nas revisões de acordos, e meça suas próprias linhas de base, como a diferença entre a manchete e as cifras ponderadas por usuários. Não tome emprestadas cifras de outras organizações.

## Antipadrões e armadilhas

- **Citar os noves sem os minutos.** Uma meta que ninguém sabe traduzir em indisponibilidade permitida não consegue orientar decisões. Mostre os minutos permitidos e usados ao lado de toda meta.
- **Medir o servidor em vez da jornada.** Uma verificação de saúde verde pode conviver com um login quebrado. Sonde as jornadas críticas de ponta a ponta e compare com os dados de usuários reais.
- **Deixar o rótulo "planejado" absorver falhas.** Uma categoria planejada fácil de reivindicar esvazia a cifra não planejada. Exija aprovação antes da interrupção, comunique-a e reclassifique os estouros.
- **Tirar a média entre serviços e horas.** Uma cifra misturada esconde o serviço crítico e a hora de pico. Relate por serviço e acrescente uma visão ponderada por usuários.
- **Prometer mais noves do que as dependências permitem.** Componentes em série não podem superar sua disponibilidade combinada. Multiplique antes de prometer e peça aos fornecedores suas cifras medidas.
- **Tratar 100% como objetivo.** O custo sobe de forma acentuada e a mudança desacelera. Escolha a meta a partir da necessidade do usuário e use o orçamento de erro.
- **Classificar equipes ou pessoas por seus noves.** Os serviços diferem em carga e em criticidade, e uma tabela de classificação ensina as equipes a esconder interrupções. Mostre a cada serviço sua própria tendência e compare-o com a própria meta.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definição e relógios | "No ar" significa o que a ferramenta de monitoramento mostrar; os horários das interrupções são estimados depois | Escrita para alguns serviços; os horários das sondas e dos incidentes discordam | Uma definição escrita por serviço, com jornadas, horários, exclusões e regras de relógio | Definições revistas em uma cadência; mudanças registradas e marcadas nos gráficos | Definições alinhadas com fornecedores e clientes e revistas quando deixam de informar decisões |
| Qualidade da medição | Relatórios manuais ou uma única verificação de saúde | Sondas para alguns serviços; dados de requisições em alguns registros | Sondas de fora para dentro nas jornadas críticas, mais cifras baseadas em requisições de uma fonte padrão | Cifras ponderadas por usuários a partir de dados de usuários reais; cobertura acompanhada e amostrada | Medições compartilhadas entre equipes e fornecedores e reconciliadas automaticamente |
| Tratamento de planejado e não planejado | Sem distinção; manutenção contada ad hoc | Rótulo planejado usado por algumas equipes, regras diferem | Uma regra: aprovado antes da interrupção e comunicado, estouros reclassificados | Parcela planejada acompanhada com a meta de reduzi-la | Mudança sem indisponibilidade é o padrão, e a indisponibilidade planejada é rara e negociada |
| Uso nas decisões | Relatada após uma reclamação | Revista mensalmente pelas operações | Metas mostradas em minutos | A política de orçamento de erro muda o trabalho, com financiamento | Disponibilidade, custo e experiência compensados em conjunto |

## Lista de verificação

- [ ] Cada serviço tem uma definição escrita de "disponível" que nomeia suas jornadas críticas de usuário.
- [ ] A janela de medição, as horas no escopo e o fuso horário são declarados para cada cifra.
- [ ] A lista de exclusões está escrita, revista e mostrada ao lado da manchete.
- [ ] A indisponibilidade planejada exige uma mudança aprovada e aviso prévio; os estouros contam como não planejados.
- [ ] As sondas rodam de fora do domínio de falha, em um intervalo declarado, nas jornadas críticas.
- [ ] Uma cifra baseada em requisições ou ponderada por usuários fica ao lado da cifra baseada em tempo.
- [ ] Cada meta é mostrada como minutos permitidos e minutos usados na janela atual.
- [ ] A contagem de interrupções e os percentis de duração são relatados, e não só o total.
- [ ] A disponibilidade das dependências é multiplicada antes de uma meta ser prometida.
- [ ] As mudanças de definição são registradas e marcadas no gráfico de tendência.
- [ ] A disponibilidade é relatada por serviço e nunca por pessoa.

## Prompts de IA

**Redija uma definição de disponibilidade de serviço.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Converta uma meta em indisponibilidade permitida e teste-a.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Revise um mês de interrupções quanto a problemas de classificação.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados e a barreira de proteção pareada de uma medida de disponibilidade que você está prestes a relatar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma revisão deste tópico mantém toda métrica pareada com um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- A disponibilidade só tem sentido depois que "no ar", a fronteira do serviço, as horas e as exclusões estão escritos do lado do usuário.
- As medidas baseadas em requisições e ponderadas por usuários descrevem melhor os serviços distribuídos e a carga desigual do que minutos de falha total.
- Relate juntas a indisponibilidade planejada e a não planejada e faça o rótulo "planejado" difícil de merecer.
- Converta toda meta em minutos e multiplique as dependências em série antes de prometer um número de noves.
- Cada nove extra custa mais que o anterior; por isso escolha a meta a partir do que os usuários precisam e use o orçamento de erro para agir sobre ela.
- Descreva serviços e rodízios, nunca pessoas, e teste toda cifra de manchete contra a experiência dos usuários.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Alta disponibilidade](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Indisponibilidade](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Objetivo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Tempo médio entre falhas](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Tempo médio de reparo](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Monitoramento sintético](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Monitoramento de usuários reais](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
