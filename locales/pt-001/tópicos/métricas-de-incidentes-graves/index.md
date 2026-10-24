# Métricas de incidentes graves

**Meça os incidentes graves como eventos raros e caros dos quais aprender, e não como uma tabela de classificação: conte-os, cronometre-os com honestidade, dimensione o impacto sobre o cliente, confira se as pessoas foram avisadas e prove que as ações de acompanhamento foram cumpridas.**

## Visão geral e motivação

Um incidente grave é um incidente sério o bastante para exigir uma resposta além da rotina normal. O [ITIL](https://en.wikipedia.org/wiki/ITIL), a estrutura mais conhecida de gestão de serviços de TI, descreve a [gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) como restabelecer a operação normal do serviço o mais depressa possível e espera que as organizações tratem seus incidentes mais sérios por um caminho distinto e mais coordenado. Como uma organização traça essa linha é decisão sua. Uma escolha comum é um incidente que afeta muitos usuários ou um serviço crítico e exige várias equipes trabalhando juntas sob um único coordenador. Escreva a sua própria definição, porque toda métrica deste tópico depende dela.

Os incidentes graves são poucos. Uma equipe pode ver dezenas de incidentes comuns por semana e dois ou três graves por trimestre. Isso muda a forma de medir. As estatísticas comuns de volume e de tempo de resolução de incidentes (veja o tópico 3.2, Volume e prioridade de incidentes, e o tópico 3.3, Tempo de resposta e de resolução de incidentes) pressupõem muitos eventos e premiam médias. Com um punhado de incidentes graves por período, uma média é dominada por uma noite ruim, uma linha de tendência é sobretudo ruído e um [percentil](https://en.wikipedia.org/wiki/Percentile) não tem sentido com cinco pontos de dados (veja o tópico 1.6, Letramento estatístico para métricas de serviço). A abordagem honesta é mostrar cada incidente grave como sua própria linha, com sua própria linha do tempo, e resumir apenas ao longo de janelas mais longas.

As visões ágil e ITIL se encontram aqui mais diretamente do que em qualquer outro lugar do livro. O ITIL contribui com a estrutura: um incidente grave declarado, um coordenador nomeado, uma comunicação definida às partes afetadas e uma revisão depois. As tradições [ágil](https://en.wikipedia.org/wiki/Agile_software_development) e de [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) contribuem com os hábitos: um [comandante do incidente](https://en.wikipedia.org/wiki/Incident_commander) que conduz a resposta, a revisão sem culpados do que aconteceu e um foco no aprendizado que alimenta a melhoria contínua. O livro *Site Reliability Engineering*, do Google, descreve tanto o padrão de comando de incidentes quanto a prática da revisão pós-incidente (veja as Referências). Uma [análise pós-incidente (postmortem)](https://en.wikipedia.org/wiki/Postmortem_documentation), nesse sentido, é um relato escrito de um incidente, de suas causas e das ações que se seguem, e o termo é usado aqui de forma intercambiável com "revisão pós-incidente".

Este tópico cobre cinco perguntas. Com que frequência ocorrem incidentes graves? Quanto duram e quanto desse tempo é gasto antes de alguém declarar um? Quantos usuários, e quais, sentiram o efeito? As pessoas ouviram de nós a tempo e em um ritmo constante? E o acompanhamento prometido aconteceu? Os tópicos relacionados cobrem o que os cerca: a disponibilidade (veja o tópico 5.3, Métricas de disponibilidade), a qualidade da revisão escrita (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado), as causas subjacentes (veja o tópico 4.1, Métricas de gestão de problemas) e a mudança que muitas vezes os dispara (veja o tópico 4.4, Falhas de mudança e retrabalho).

Termos usados neste tópico:

- **Incidente grave:** um incidente que atende aos seus critérios escritos de declaração e dispara o processo de incidente grave.
- **Declaração:** o momento em que alguém com autoridade invoca formalmente o processo de incidente grave.
- **Tempo até restabelecer:** o tempo desde o início do impacto sobre o cliente até o momento em que o serviço é restabelecido para os usuários. O momento de restabelecer o serviço não é o mesmo que encontrar a [causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Comandante do incidente:** o papel que coordena a resposta, atribui tarefas e decide. É um papel pela duração do incidente, não um cargo.
- **Revisão pós-incidente:** o exame estruturado e sem culpados de um incidente depois que o serviço é restabelecido.
- **Item de ação:** uma mudança específica, com responsável e data, que decorre de uma revisão.

## Princípios-chave

- **Mostre os eventos e depois resuma.** Os eventos raros merecem linhas do tempo individuais. Relate cada incidente grave separadamente e use estatísticas de resumo apenas ao longo de uma janela longa, com a contagem ao lado.
- **Comece o relógio no impacto, não na percepção.** Uma duração que começa quando alguém nota esconde a lacuna de detecção, que muitas vezes é a maior parte da história.
- **Meça a experiência do usuário, não o esforço da equipe.** O impacto sobre o cliente é a razão de o processo existir. As horas de esforço dos responsáveis pela resposta são um custo a acompanhar, nunca uma nota.
- **A comunicação faz parte do restabelecimento.** Um serviço restabelecido enquanto os usuários ainda tentam adivinhar foi corrigido pela metade. Trate a pontualidade das atualizações como uma medida da resposta.
- **A revisão só termina quando as ações terminam.** Um documento concluído com ações abertas não mudou nada. Meça o seguimento, e não apenas a existência de uma revisão.
- **Nunca classifique pessoas e nunca puna a declaração.** Se declarar um incidente grave prejudica a equipe de quem declara em um relatório, menos incidentes serão declarados e as métricas melhorarão enquanto o serviço piora.
- **Mantenha estáveis os critérios de declaração.** Mover o limiar muda todas as métricas deste tópico. Registre cada mudança com seu motivo e sua data.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Contagem de incidentes graves | Incidentes graves declarados em um período, por serviço | Contagem de incidentes que atenderam aos critérios de declaração e foram declarados no período, pelo horário da declaração; incidentes rebaixados na primeira hora são listados à parte e excluídos | contagem por trimestre | Registros de incidentes da ferramenta de ITSM com o sinalizador de incidente grave | Gestão de incidentes | Revisão da saúde da equipe ou do serviço | Relatório mensal, tendência trimestral |
| Duração do incidente grave | Tempo em que os clientes foram afetados | Horário de serviço restabelecido menos horário de início do impacto, por incidente. O início do impacto é a evidência mais antiga no monitoramento ou o primeiro relato de usuário, o que vier primeiro. O restabelecimento parcial é registrado como evento próprio, e o restabelecimento total para o relógio | minutos, por incidente | Linha do tempo do monitoramento, linha do tempo do incidente na ferramenta de ITSM | Gestão de incidentes; gestão de nível de serviço | Tempo de recuperação nas métricas de entrega (veja o tópico 2.8, Métricas DORA) | Por incidente; mediana e máximo de janela longa, trimestralmente |
| Tempo até declarar | Atraso entre o início do impacto e a declaração de um incidente grave | Horário da declaração menos horário de início do impacto, por incidente. Os incidentes nunca declarados são encontrados por uma revisão trimestral dos incidentes comuns de alto impacto e incluídos com um horário de declaração n/a (nunca declarado) | minutos, por incidente | Linha do tempo do monitoramento, trilha de auditoria da ferramenta de ITSM | Gestão de incidentes; monitoramento e gestão de eventos | Definição de pronto para o escalonamento nos acordos de trabalho da equipe | Por incidente |
| Impacto sobre o cliente | Quantos usuários e quanto uso foram afetados | Usuários afetados (ou requisições com falha) multiplicados pelos minutos afetados, por incidente. Conte apenas os usuários que tentaram usar o serviço durante a janela de impacto. A manutenção planejada é excluída | usuário-minutos, ou requisições com falha | Telemetria do serviço, registros de contatos de suporte | Gestão de nível de serviço; gestão de incidentes | Indicadores de nível de serviço voltados ao usuário (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) | Por incidente |
| Pontualidade da comunicação | Se as partes afetadas foram avisadas a tempo | Proporção de incidentes graves em que o primeiro aviso ao cliente saiu dentro da meta após a declaração e proporção das atualizações programadas enviadas dentro do intervalo acordado. O relógio começa na declaração. Mensagens apenas internas são excluídas | porcentagem de incidentes; porcentagem de atualizações | Histórico da página de status, registro de comunicação da ferramenta de ITSM | Gestão de incidentes; gestão de nível de serviço | Comunicação com as partes interessadas no acordo de trabalho da equipe | Por incidente; resumo trimestral |
| Pontualidade da conclusão da revisão | Se uma revisão aconteceu cedo o bastante para ser útil | Proporção dos incidentes graves com uma revisão publicada dentro do número acordado de dias úteis após o restabelecimento. O relógio para na publicação, não no primeiro rascunho. Incidentes ainda dentro da janela são excluídos | porcentagem | Repositório de revisões, ferramenta de ITSM | Melhoria contínua; gestão de problemas | Acompanhamento de melhorias | Trimestral |
| Seguimento dos itens de ação | Se as ações da revisão são concluídas | Ações da revisão concluídas até a data prevista / ações da revisão com vencimento no período. Ações encerradas como "não será feito" são contadas à parte, com um motivo, e não escondidas | porcentagem; contagem de atrasadas | Rastreador de issues ligado à revisão | Melhoria contínua; gestão de problemas | Itens de backlog das retrospectivas | Mensal |
| Taxa de incidentes graves repetidos | Recorrência da mesma causa | Incidentes graves no período cuja causa registrada coincide com a de um incidente grave anterior nos doze meses precedentes / incidentes graves no período. A correspondência é feita pelo campo de causa, revisto à mão | porcentagem, com a contagem mostrada | Registros de revisões, registros de problemas | Gestão de problemas | Trabalho de prevenção no backlog | Trimestral |

Cada linha precisa de uma regra de relógio escrita antes de merecer confiança. As disputas sobre o início do impacto e o horário de restabelecimento são comuns e se resolvem melhor de antemão (veja o tópico 1.5, Fontes de dados e instrumentação).

## Recomendações

### Escreva o que torna um incidente grave

**Publique critérios de declaração que qualquer pessoa de plantão possa aplicar.** Os critérios costumam combinar o impacto (usuários afetados, um serviço crítico degradado, um risco à segurança ou jurídico) com a necessidade de coordenação (mais de uma equipe necessária). Uma lista curta com exemplos vale mais do que uma matriz longa. Declare quem pode declarar e deixe claro que declarar de boa-fé nunca é um erro, mesmo quando o incidente se revela menor.

**Registre a versão dos critérios em cada registro de incidente.** Quando o limiar se move, as tendências se movem com ele. Um número de versão ou uma data em cada registro permite comparar o que é comparável e explicar um salto na contagem que veio de uma mudança de regra.

### Conte e classifique sem transformar a contagem em meta

**Relate a contagem com o seu contexto.** Mostre o número de incidentes graves por trimestre ao lado do serviço, do gatilho (mudança, capacidade, dependência, segurança, outro) e da versão dos critérios. Uma contagem sem contexto convida a metas como "menos de três por trimestre", que ensinam as pessoas a não declarar. Trate uma contagem em queda como boa notícia apenas quando o tempo até declarar e o impacto sobre o cliente estiverem estáveis.

**Separe os declarados, os rebaixados e os perdidos.** Acompanhe os incidentes que foram declarados e rebaixados, porque mostram se os critérios são sensatos. Reveja a cada trimestre uma amostra de incidentes comuns em busca dos que deveriam ter sido declarados. Os perdidos são os mais informativos.

### Cronometre o incidente pelo lado do usuário

**Comece o relógio quando os clientes são afetados.** Use a evidência confiável mais antiga, que costuma ser um sinal de monitoramento anterior ao primeiro ticket. Quando o início é incerto, registre a estimativa e sua fonte em vez do horário em que alguém notou. A lacuna entre o início do impacto e a declaração é uma métrica em si e costuma ser a mais barata de melhorar.

**Divida a linha do tempo em fases.** Detecção, declaração, diagnóstico, mitigação e restabelecimento total têm cada uma causas de atraso e responsáveis diferentes. Um detalhamento por fases de cada incidente mostra para onde o tempo foi sem precisar de uma média. Restabelecer o serviço por um contorno e corrigir a causa são eventos separados, e o segundo pertence à gestão de problemas.

**Use a mediana e o pior caso em janelas longas, com a contagem.** Para um ano de dados, relate a mediana e a maior duração e diga de quantos incidentes vêm. Evite um único tempo médio de restabelecimento para incidentes graves. Com poucos eventos, ele é instável e é distorcido por uma interrupção longa (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

### Dimensione o impacto sobre o cliente em termos que os usuários reconheçam

**Prefira o impacto baseado em usuários ao impacto baseado em servidores.** Requisições com falha, usuários afetados ou transações afetadas descrevem o que aconteceu com as pessoas. Minutos de serviço degradado em um componente descrevem o que aconteceu com uma máquina. Onde você tem indicadores de nível de serviço, use-os (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) e ligue o incidente ao quadro de disponibilidade (veja o tópico 5.3, Métricas de disponibilidade).

**Acrescente uma declaração de impacto em linguagem simples a cada registro.** Uma ou duas frases nomeando quem foi afetado e o que não conseguiu fazer. Contatos de suporte, menções em redes sociais e escalonamentos de clientes são evidência para a declaração, não métricas a maximizar.

### Meça a comunicação como parte da resposta

**Defina metas de comunicação por público.** Clientes afetados, partes interessadas internas e executivos precisam de mensagens diferentes em momentos diferentes. Combine uma meta para o primeiro aviso após a declaração e um ritmo constante de atualizações e meça a aderência por incidente. O ritmo importa mais que o conteúdo: uma atualização que diz "sem mudança, próxima atualização em trinta minutos" e chega a tempo gera mais confiança que o silêncio.

**Mantenha a resposta e a comunicação em mãos separadas.** Um responsável pela comunicação libera o comandante do incidente para se concentrar no diagnóstico. Uma equipe pequena pode usar uma lista de verificação e um modelo pré-escrito.

### Feche o ciclo do aprendizado

**Faça a revisão logo e publique-a.** A memória se esvai; por isso defina uma janela para a revisão e meça se foi cumprida. A conclusão da revisão importa menos que aquilo que a revisão muda; por isso pareie-a com o seguimento. O livro *Site Reliability Engineering*, do Google, defende a revisão sem culpados e o ato de escrevê-la (veja as Referências), e o tópico 4.2 (Métricas de análises pós-incidente e aprendizado) cobre a qualidade da revisão.

**Acompanhe as ações até o fim e permita um "não será feito" honesto.** Ponha cada ação no backlog que a equipe responsável já usa, com um responsável e uma data. Registre as ações recusadas, com o motivo, em vez de deixá-las apodrecer. Reveja as ações atrasadas numa revisão operacional ou de serviço e pergunte o que as bloqueia. Limite o número de ações por revisão para que as que restam sejam as que importam.

**Procure padrões entre os incidentes e envie-os à gestão de problemas.** Causas repetidas, gatilhos comuns e lacunas recorrentes de detecção são sinais que revisões isoladas perdem. Alimente com eles o processo de problemas e erros conhecidos (veja o tópico 4.1, Métricas de gestão de problemas) e o planejamento das equipes donas dos serviços. Trate uma taxa de repetição crescente como gatilho de investigação, não como veredicto.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Contagem de incidentes graves | Elevar o limiar de declaração, manter incidentes em prioridade "alta" para que nunca sejam declarados, dividir um evento em vários registros ou fundir vários em um | Critérios fixos e versionados; amostra trimestral de incidentes comuns de alto impacto; impacto sobre o cliente e tempo até declarar acompanhados ao lado da contagem |
| Duração do incidente grave | Empurrar o relógio para um início de impacto mais tardio, declarar "restabelecido" enquanto os usuários ainda falham ou encerrar e reabrir um novo registro | Início do impacto tirado do monitoramento; restabelecimento confirmado por um indicador voltado ao usuário; registros reabertos e vinculados contados como um só incidente |
| Tempo até declarar | Declarar cedo sobre tudo para parecer rápido, ou retrodatar a declaração para o início do impacto | Proporção dos incidentes declarados depois rebaixados; trilha de auditoria do horário da declaração; amostra de linhas do tempo contra o monitoramento bruto |
| Impacto sobre o cliente | Estreitar a definição de "afetado", contar só os usuários que abriram um ticket ou medir uma dependência que continuou no ar | Impacto derivado de telemetria além de contatos; uma declaração de impacto em linguagem simples revista na revisão do incidente |
| Pontualidade da comunicação | Postar um aviso vago para iniciar o relógio, enviar atualizações sem conteúdo ou contar mensagens internas | Conferência de conteúdo de uma amostra de atualizações; feedback dos clientes sobre a clareza; contar apenas os avisos voltados ao cliente |
| Pontualidade da conclusão da revisão | Publicar um documento ralo para cumprir a data, ou declarar uma revisão "desnecessária" | Qualidade da revisão lida por um par numa amostra (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado); proporção de revisões dispensadas é mostrada |
| Seguimento dos itens de ação | Escrever ações vagas ou triviais, fáceis de encerrar, encerrar ações sem fazer o trabalho ou rebatizá-las como "não será feito" | Qualidade das ações amostrada; ações encerradas verificadas contra a mudança no sistema; proporção e motivos de "não será feito" revistos |
| Taxa de incidentes graves repetidos | Registrar cada causa como nova escolhendo outra redação, ou atribuir tudo a "erro humano" | Uma curta taxonomia de causas com definições; campos de causa revistos por alguém de fora do incidente; "erro humano" não aceito como causa sem uma explicação do sistema |

Uma leitura saudável é uma contagem moderada e razoavelmente estável de incidentes declarados, com um rebaixamento ocasional e um incidente perdido ocasional encontrado na revisão. O tempo até declarar é curto e está caindo, o impacto sobre o cliente por incidente é compreendido e cai onde houve trabalho de prevenção, e quase todas as atualizações voltadas ao cliente saem no prazo. As revisões são publicadas no prazo e suas ações em sua maioria concluídas, com um pequeno e honesto conjunto de ações recusadas. Se tudo parecer perfeito, pergunte se os critérios derivaram ou se as pessoas pararam de declarar (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). A [lei que leva o nome de Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é mais fácil de ver aqui, porque o custo de um número ruim é uma menor disposição de dar o alarme.

## Compensações: vantagens e desvantagens

| Escolha | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Mostrar cada incidente como uma linha | Mantém o contexto, evita médias enganosas em contagens pequenas | Mais difícil de resumir para os líderes; exige uma curta narrativa por incidente |
| Relatar uma contagem de incidentes graves | Simples, familiar, visível para a liderança | Fácil de transformar em meta; reage a mudanças nos critérios |
| Tempo a partir do início do impacto | Reflete a experiência do usuário, expõe a lacuna de detecção | O início do impacto às vezes é incerto e exige julgamento |
| Tempo a partir da declaração | Fácil de capturar e comparar | Esconde a detecção lenta e a declaração lenta |
| Usuário-minutos de impacto | Comparável entre incidentes e serviços | Exige telemetria; trata todos os usuários e minutos como iguais |
| Taxa de conclusão da revisão | Fácil de coletar, estimula o hábito | Premia o documento, não o aprendizado |
| Taxa de seguimento das ações | Liga a revisão à mudança | Pode ser manipulada por ações triviais; exige um responsável e um backlog |

Use um pequeno conjunto de medidas que cubra o ciclo inteiro (declarar, restabelecer, avisar, aprender, concluir) em vez de otimizar uma só. Acrescente medidas de impacto apenas quando a telemetria existir. Onde falta telemetria, uma declaração de impacto escrita com cuidado serve melhor que um número inventado.

## Perguntas para discutir com sua equipe

**1. O que exatamente torna um incidente grave aqui, e todos os de plantão concordam?**
A definição é a base de todos os outros números. Peça a três pessoas que classifiquem o mesmo incidente recente e compare as respostas. A discordância mostra onde os critérios são vagos. O facilitador deve anotar exemplos para acrescentar aos critérios escritos e combinar quem pode declarar. Feche confirmando que declarar de boa-fé é sempre aceitável, mesmo que o incidente seja depois rebaixado.

**2. No nosso último incidente grave, quanto tempo passou entre o início do impacto e a declaração?**
Reconstrua a linha do tempo a partir do monitoramento, não da memória. A lacuna costuma ser maior que o esperado e às vezes é a fase mais longa. Pergunte que sinal existia e quem o viu e se a lacuna veio de critérios pouco claros, de um alerta faltante ou de relutância em declarar. Escolha uma mudança que a encurte e decida como saberá.

**3. Quem foi afetado, e como sabemos?**
Compare o que a equipe acreditava na hora com o que a telemetria e os contatos de suporte mostram depois. Pergunte quais clientes, se algum, foram mais afetados que outros e se eram os que mais importam para o negócio ou os menos capazes de lidar com isso. Discuta se a declaração de impacto é algo que um cliente reconheceria. Combinem uma medida de impacto que vocês consigam coletar com confiabilidade da próxima vez.

**4. As pessoas ouviram de nós quando precisavam, e a mensagem foi útil?**
Confira o primeiro aviso e cada atualização contra o ritmo combinado. Leia as mensagens reais como um cliente leria. Pergunte se disseram o que se sabia, o que não se sabia e quando viria a próxima atualização. Discuta quem é dono da comunicação durante um incidente e se essa pessoa está livre para fazê-la.

**5. O que aconteceu com as ações das nossas três últimas revisões?**
Reúna as ações numa só lista e marque cada uma como concluída, em andamento, atrasada ou recusada. Para as atrasadas, pergunte o que as bloqueia: capacidade, responsabilidade, prioridade ou escopo pouco claro. Decida como as ações atrasadas serão levantadas na próxima reunião de operações ou de planejamento.

**6. Se fôssemos medidos pelo número de incidentes graves, o que faríamos diferente, e os clientes ficariam melhor?**
Esta pergunta traz à tona os vetores de manipulação antes que ocorram. Peça ao grupo que seja franco sobre o que poderia mudar: limiares, rótulos, quem declara. Depois pergunte qual é a melhor meta. Uma boa resposta se move para o impacto sobre o cliente, o tempo até declarar e o seguimento, que são mais difíceis de manipular sem ajudar os usuários. Registre a resposta como uma barreira de proteção.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto encontram os incidentes graves como interrupções do trabalho planejado e como feedback sobre as próprias mudanças. Ganham mais com números de impacto claros, acesso rápido às linhas do tempo dos próprios incidentes e ações de revisão que cheguem ao seu backlog com espaço para serem feitas. Reservem capacidade para o acompanhamento dos incidentes e tratem as ações como trabalho com o mesmo status das funcionalidades. Compartilhem as categorias de causa para que um gatilho recorrente leve a uma mudança de prática (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

### Equipes de serviço e operações

As equipes de operações conduzem a resposta e carregam o custo do trabalho de madrugada. Precisam de critérios que possam aplicar às 3 da manhã, de um papel de comandante e de comunicação que consigam cobrir e de ferramentas que capturem a linha do tempo enquanto os eventos acontecem, e não de memória depois. Devem observar a carga que os incidentes graves impõem a um pequeno grupo de pessoas (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão) e usar as métricas deste tópico para pedir trabalho de prevenção, não para comparar quem responde.

### Liderança e governança

Os líderes definem o clima que decide se as pessoas declaram rapidamente e relatam com honestidade. Devem pedir a história de cada incidente grave e a tendência ao longo de um ano, evitar metas sobre a contagem e perguntar sobre o impacto sobre o cliente, as lacunas de detecção e as ações concluídas. Financiem o trabalho de prevenção que as revisões recomendam e reviam-no no mesmo fórum dos planos de entrega. A governança pode então ver se as lições viram mudança (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro, para uma forma de ligar confiabilidade e investimento).

### Clientes e usuários

Os clientes julgam um incidente grave por quanto tempo foram afetados, se foram avisados e se acontece de novo. São mais bem servidos por avisos honestos e cedo do que por avisos polidos e tardios. Dê a eles um canal de status, um ritmo em que possam confiar e um relato claro depois sobre o que aconteceu e o que vai mudar. Onde houver contratos, relate nos termos acordados no acordo de nível de serviço (veja o tópico 5.1, Métricas de SLA, OLA e XLA). Vale perguntar sobre a satisfação depois de um incidente (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma vitrine, um serviço de pagamentos e um serviço de gestão de pedidos, cada um de propriedade de uma equipe de produto, com uma equipe de plataforma compartilhada de plantão. Um pequeno grupo de gestão de serviços conduz o processo de incidentes graves. Todos os números deste exemplo são ilustrativos.

Nos dois últimos trimestres, o varejista declarou cinco incidentes graves (ilustrativo). O grupo de gestão de serviços mostra cada um como uma linha, com início do impacto, horário da declaração, horário de restabelecimento, pedidos com falha estimados, o horário do primeiro aviso ao cliente e o status da revisão. Eles notam que a mediana da lacuna entre o início do impacto e a declaração é de 38 minutos (ilustrativo), quase tão longa quanto a mediana do tempo da declaração ao restabelecimento, de 52 minutos (ilustrativo). Com cinco incidentes, tratam os dois números como aproximados e leem as linhas do tempo. Três dos cinco mostram um alerta de monitoramento que disparou cedo e ficou sem reconhecimento num canal compartilhado.

A equipe decide encaminhar essa classe de alerta ao pager de plantão e acrescentar aos critérios uma linha dizendo que um sinal sustentado de falha no checkout basta para declarar, sem esperar tickets. Também definem uma meta para o primeiro aviso ao cliente em até 20 minutos após a declaração (ilustrativo) e a conferem por incidente. Dois dos cinco a cumpriram. A equipe de implantação acrescenta um modelo de página de status que um responsável pela comunicação pode preencher sob pressão.

Na mesma revisão, descobrem um risco de manipulação. O gerente de uma equipe de produto havia proposto uma meta trimestral de "no máximo dois incidentes graves". O grupo de gestão de serviços aponta que o trimestre anterior teve um incidente que ficou em prioridade alta por quatro horas com clientes falhando no checkout e que nunca foi declarado porque a equipe estava perto do limite. Substituem a meta por três medidas: tempo até declarar, pedidos com falha por incidente e a proporção de ações de revisão concluídas no prazo. Acrescentam como barreira de proteção uma amostra trimestral de incidentes de alta prioridade lida por alguém de fora da equipe responsável. No trimestre seguinte, a contagem declarada sobe para quatro (ilustrativo), a mediana do tempo até declarar cai e a amostra revista não encontra declarações perdidas.

## Ágil, IA, automação e análise

### Ágil

Faça uma revisão sem culpados com as partes interessadas depois de cada incidente grave e acompanhe as ações em uma cadência regular. O cuidado é que uma meta de menos incidentes graves estimula a declarar menos; por isso meça também o tempo até declarar e o impacto sobre o cliente.

### IA

A IA pode ajudar a detectar, resumir e comunicar durante um incidente grave e redigir a primeira versão de uma revisão. Pareie a pontualidade da comunicação com a exatidão do que foi comunicado e marque quais partes de uma revisão uma IA redigiu e uma pessoa conferiu. O cuidado é que um resumo confiante de um incidente feito por IA pode estar errado; por isso um humano é dono do relato final.

### Automação

Automatize a captura da linha do tempo a partir do chat, do acionamento e do monitoramento para que a revisão parta de fatos e meça as próprias ferramentas de incidentes, como falhas de acionamento. O cuidado é que postagens de status automáticas podem parecer comunicação sem alcançar as pessoas que precisam dela.

### Análise

Os incidentes graves são raros; por isso use contagens, linhas do tempo e impacto sobre o cliente, e não taxas e médias. A decisão informada é o que corrigir e o que ensaiar. O cuidado é que números pequenos convidam à interpretação excessiva; por isso evite afirmar tendências a partir de um punhado de eventos.

## Olhar setorial

**Startup.** Uma startup pode não ter nenhum processo formal de incidente grave, apenas quem estiver acordado. Comece com uma definição de um parágrafo, um coordenador nomeado para cada evento e um documento compartilhado que registre a linha do tempo. Conte os incidentes e anote o impacto numa frase. A revisão pode ser uma nota de meia página, e o acompanhamento é um item no backlog da equipe.

**Pequena empresa.** Uma pequena empresa muitas vezes depende de fornecedores para boa parte do seu serviço; por isso a linha do tempo inclui a espera por um fornecedor. Registre na linha do tempo do incidente os horários de contato e de resposta do fornecedor, porque explicam grande parte da duração e dão evidência para conversas contratuais. Mantenha simples a comunicação com o cliente: um canal, uma pessoa e um intervalo de atualização declarado.

**Grande empresa.** As grandes empresas operam muitos serviços e têm muitos incidentes em cada período; por isso uma contagem por serviço e uma consolidação são úteis. Os riscos são critérios inconsistentes entre divisões e um processo pesado o bastante para atrasar a declaração. Alinhe as definições, mantenha o processo leve nos primeiros quinze minutos e use um formato de registro comum para que o impacto e a comunicação possam ser comparados.

**Governo e setor público.** Os órgãos públicos costumam ter deveres legais, como notificar um regulador ou o público, e um custo de falha mais alto para cidadãos que não têm alternativa. Acrescente medidas de cumprimento dos deveres de notificação e de impacto sobre grupos vulneráveis e mantenha registros que resistam a auditorias e a pedidos de informação pública. Os ciclos de compras podem atrasar as ações; por isso acompanhe as ações bloqueadas e escale-as.

## Business case: motivações, ROI e TCO

O motivo é cortar o custo dos incidentes que mais doem: receita ou serviço perdidos, confiança abalada, esgotamento de pessoal e exposição regulatória. Um pequeno conjunto consistente de medidas de incidentes graves mostra de onde vem esse custo, se a detecção e a comunicação estão melhorando e se o investimento em prevenção está dando resultado. Medidas que mostram nada além de uma contagem empurram o custo para a ocultação de incidentes.

Os custos de coleta são modestos se os dados já vivem na ferramenta de ITSM, no sistema de monitoramento e no rastreador de issues. Os principais custos são combinar definições, ligar o registro do incidente ao monitoramento e ao backlog de ações e o tempo gasto para escrever cada revisão. As métricas custam pouco além de tornar o registro consistente.

O retorno aparece como menor tempo até declarar, comunicação mais clara, menos incidentes repetidos e menos retrabalho. Nenhuma cifra universal se aplica; por isso estime a sua: pegue o último ano de incidentes graves, estime com as finanças o custo de uma hora de impacto para cada serviço e compare-o com o custo do trabalho de acompanhamento de que você precisaria para prevenir as causas repetidas. O custo total de propriedade inclui o tempo dos revisores, o ferramental para linhas do tempo e páginas de status e a capacidade reservada para as ações de acompanhamento, que é onde a maioria dos programas investe pouco.

## Antipadrões e armadilhas

- **Uma meta para o número de incidentes graves.** Ensina as pessoas a evitar declarar. Em vez disso, acompanhe o tempo até declarar, o impacto e o seguimento e amostre quanto a declarações perdidas.
- **Um único tempo médio de restabelecimento para incidentes graves.** Com poucos eventos, uma interrupção longa domina. Em vez disso, mostre cada incidente e depois a mediana e a maior duração em um ano, com a contagem.
- **Começar o relógio na declaração.** Esconde o atraso de detecção e de declaração. Em vez disso, comece na evidência mais antiga de impacto sobre o cliente e relate a lacuna separadamente.
- **Classificar quem responde ou as equipes por métricas de incidentes.** Destrói a franqueza e quebra a revisão. Em vez disso, relate por serviço e sistema e mantenha os nomes fora dos dados.
- **Tratar a revisão como pronta quando o documento é publicado.** A mudança é o ponto. Em vez disso, meça o seguimento das ações e olhe as ações atrasadas todo mês.
- **Mudanças silenciosas de limiar.** As tendências perdem o sentido. Em vez disso, versione os critérios e anote as mudanças no relatório.
- **Contar só tickets como impacto.** Muitos usuários afetados nunca ligam. Em vez disso, use telemetria e acrescente uma declaração de impacto em linguagem simples.
- **Usar as métricas para atribuir culpa.** As pessoas então escondem fatos. Em vez disso, mantenha as revisões sem culpados, concentre-se nas condições e nas decisões e procure causas do sistema.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definição e relógios | Grave é o que a pessoa mais barulhenta diz; os horários vêm da memória | Algumas equipes têm critérios e anotam horários de início e fim | Uma definição escrita e versionada, com regras de relógio para início do impacto, declaração e restabelecimento | Definição e relógios auditados contra o monitoramento; mudanças registradas com motivos | Critérios e relógios acordados com fornecedores e clientes e revistos quando deixam de informar decisões |
| Impacto e comunicação | Impacto descrito em anedotas; atualizações enviadas quando alguém lembra | Impacto estimado para alguns incidentes; algumas equipes usam uma página de status | Impacto medido a partir de telemetria para serviços-chave; metas de atualização definidas e acompanhadas | Impacto e comunicação acompanhados ao longo do tempo e ligados ao feedback dos clientes | Impacto compartilhado com clientes e fornecedores em um formato comum, com ações de melhoria conjuntas |
| Revisão e seguimento | Revisões raras e não escritas; ações esquecidas | Revisões escritas por algumas equipes; ações registradas mas não acompanhadas | Todo incidente grave revisto no prazo; ações acompanhadas no backlog da equipe | Ações atrasadas e causas repetidas revistas em uma cadência, com trabalho de prevenção financiado | Padrões compartilhados entre equipes e fornecedores; o aprendizado muda rotineiramente o projeto e o planejamento |
| Uso nas decisões | Números citados depois do fato | Contagens mostradas à liderança sem contexto | Linhas do tempo e tendências mostradas às equipes donas dos serviços | Métricas pareadas com barreiras de proteção e usadas para priorizar o trabalho de confiabilidade | Investimento em confiabilidade decidido em conjunto com evidências de impacto e recorrência entre serviços |

## Lista de verificação

- [ ] Os critérios de declaração estão escritos, versionados e conhecidos por todos os de plantão.
- [ ] Declarar de boa-fé é explicitamente seguro, e não existe meta sobre a contagem.
- [ ] O início do impacto, a declaração e o restabelecimento são definidos e tirados do monitoramento ou de uma trilha de auditoria.
- [ ] Cada incidente grave é mostrado como sua própria linha, com uma linha do tempo por fases.
- [ ] O impacto sobre o cliente é derivado de telemetria onde existe e descrito em uma declaração em linguagem simples.
- [ ] As metas para o primeiro aviso e para o ritmo de atualização são definidas e conferidas por incidente.
- [ ] Uma revisão é publicada dentro da janela acordada, e suas ações estão no backlog da equipe responsável.
- [ ] As ações atrasadas e as causas repetidas são revistas em um calendário.
- [ ] Uma amostra trimestral de incidentes comuns de alto impacto confere se há declarações perdidas.
- [ ] Toda métrica tem uma barreira de proteção nomeada, e nenhuma métrica é usada para classificar indivíduos.

## Prompts de IA

**Redija critérios de declaração para revisão.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Reconstrua e critique a linha do tempo de um incidente.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Revise um conjunto de ações pós-incidente.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Teste uma métrica proposta quanto à manipulação.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados e a barreira de proteção que deve ficar ao lado de cada métrica de incidentes graves.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma versão editada deste tópico ainda segue o modelo e as convenções.

## Ideias-chave

- Os incidentes graves são raros; por isso mostre cada um com sua linha do tempo e resuma apenas ao longo de janelas longas, com a contagem ao lado da cifra.
- Comece o relógio no impacto sobre o cliente e relate a lacuna anterior à declaração como uma medida própria.
- Meça o impacto em termos de usuários e uso e acrescente uma declaração em linguagem simples para o que os números deixam passar.
- Trate a pontualidade da comunicação como parte da resposta, com metas por público e um ritmo constante de atualizações.
- Uma revisão está concluída quando suas ações estão concluídas; por isso acompanhe o seguimento e as causas repetidas.
- Nunca defina uma meta sobre a contagem, nunca classifique pessoas e mantenha seguro o ato de declarar.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Gestão de incidentes (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Comandante do incidente](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Documentação post-mortem](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
