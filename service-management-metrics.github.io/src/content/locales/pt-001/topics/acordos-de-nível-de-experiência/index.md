# Acordos de nível de experiência

**Um acordo de nível de experiência acrescenta a pergunta "como foi usar?" à pergunta "o serviço cumpriu a meta?", e só funciona quando as medidas de experiência são escolhidas com os usuários e mantidas ao lado das operacionais.**

## Visão geral e motivação

Um [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) registra aquilo que um provedor se compromete a entregar, geralmente em termos que o provedor pode contar: disponibilidade, tempo de resposta, tempo de resolução. Essas medidas são úteis e também incompletas. Uma equipe pode cumprir todas as metas do painel enquanto os usuários passam a semana contornando logins lentos, repetindo-se para uma central de serviços e esperando aprovações. Essa lacuna entre o relato verde e os usuários descontentes é às vezes chamada de efeito melancia: verde por fora, vermelho por dentro (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

Um **acordo de nível de experiência (XLA)** é um acordo, entre um provedor e as pessoas que usam um serviço, sobre a experiência que o serviço deve dar. Declara resultados e sentimentos desejados, como "consigo começar a trabalhar em poucos minutos depois de chegar" ou "confio que minha requisição será tratada", e nomeia as medidas que mostrarão se estão sendo cumpridos. O termo é usado em toda a comunidade de gestão de serviços de TI (ITSM), e sua definição exata varia entre autores e fornecedores. Confira as publicações atuais do dono da estrutura antes de descrever um XLA como parte do ITIL e declare qual uso você segue. Este tópico trata o XLA como uma ideia prática: um acordo que põe medidas de experiência ao lado das operacionais.

A ideia tem raízes fora da TI. A [experiência do usuário](https://en.wikipedia.org/wiki/User_experience) é a experiência geral de uma pessoa que usa um produto, sistema ou serviço, e a [experiência do cliente](https://en.wikipedia.org/wiki/Customer_experience) é a soma das interações de um cliente com uma organização ao longo do tempo. A [usabilidade](https://en.wikipedia.org/wiki/Usability) trata de quão eficaz, eficiente e satisfatoriamente as pessoas conseguem alcançar seus objetivos. As equipes ágeis conhecem esse território pelo design thinking e pela pesquisa com usuários, e pelas revisões com partes interessadas em que os usuários reagem a software funcionando. Um XLA traz a mesma atenção ao serviço em operação.

A experiência é difícil de medir e fácil de distorcer. Uma pesquisa que só alcança usuários felizes, uma pontuação de sentimento ajustada para subir ou um único "índice de experiência" que ninguém consegue explicar enganam tanto quanto um tempo de ticket manipulado. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica por inteiro: as medidas de experiência são pontos de partida para conversas, e não cotas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico se apoia nas medidas de pesquisa do tópico anterior (veja o tópico 6.1, Métricas de satisfação do cliente) e acrescenta medidas comportamentais e baseadas em jornadas que não dependem de perguntar.

## Princípios-chave

- **Comece pelos resultados que importam às pessoas.** Pergunte aos usuários como é um bom dia e escreva os acordos nas palavras deles.
- **Pareie a experiência com as operações.** Um XLA fica ao lado de um SLA, e não no lugar dele.
- **Use poucas medidas de ângulos diferentes.** Combine o que as pessoas dizem, o que fazem e o que o sistema registra.
- **Meça jornadas além de pontos de contato.** Uma experiência é todo o caminho da necessidade ao resultado.
- **Seja honesto sobre a incerteza.** Os dados de experiência são ruidosos, e os grupos pequenos precisam de proteção.
- **Combine as metas com os usuários e revise-as.** Um XLA é um acordo vivo, revisto com as pessoas que descreve.
- **Nunca use dados de experiência para classificar indivíduos.**

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pontuação de experiência | Avaliação média de uma declaração de experiência combinada, para um serviço e público | avaliação média entre as respostas válidas a uma declaração em uma escala fixa | pontos da escala | Pesquisa de pulso curta, enviada em um calendário | Gestão de nível de serviço; melhoria contínua | Feedback da revisão com as partes interessadas; revisão dos resultados do produto | Mensal |
| Tendência de sentimento | Direção do tom nos comentários de texto livre sobre um serviço | proporção de comentários codificados como positivos menos proporção codificada como negativos, por período | pontos percentuais | Comentários de pesquisa e de tickets codificados | Melhoria contínua | Temas da retrospectiva | Mensal |
| Eventos de atrito por usuário | Contagem de sinais de que um usuário teve problemas, normalizada pelos usuários ativos | (contatos repetidos + itens reabertos + logins com falha além de um número definido + requisições abandonadas) / usuários ativos | eventos por usuário | Sistema de tickets, registros de identidade, portal de requisições | Central de serviços; gestão de incidentes | Defeitos encontrados em uso | Mensal |
| Tempo perdido com problemas de TI | Tempo estimado que os usuários perdem com problemas de serviço em um período | minutos perdidos autorrelatados por usuário, ou tempo medido em estado degradado ponderado pelos usuários afetados | minutos por usuário | Pesquisa de pulso; monitoramento cruzado com contagens de usuários | Gestão de disponibilidade; gestão de incidentes | Tempo de ciclo perdido com bloqueios | Trimestral |
| Taxa de conclusão da jornada | Proporção dos usuários que terminam uma jornada definida sem abandonar nem procurar ajuda | usuários que concluem a jornada sem um contato de ajuda / usuários que iniciam a jornada | porcentagem | Análise do portal; vínculos de tickets | Gestão de requisições de serviço; gestão do catálogo de serviços | Sucesso de tarefas em testes de usabilidade | Mensal |
| Cumprimento do XLA | Proporção das metas de experiência combinadas que foram cumpridas no período | metas cumpridas / metas combinadas | porcentagem | O registro do XLA | Gestão de nível de serviço | Cumprimento de metas de entrega | Trimestral |
| Lacuna de experiência | Diferença entre o cumprimento do SLA e a pontuação de experiência do mesmo serviço | posição de cumprimento do SLA menos posição da pontuação de experiência entre serviços, ou uma comparação escrita | diferença de posição ou nota | Relatórios de SLA e pesquisa de pulso | Gestão de nível de serviço | Definição de pronto versus feedback do usuário | Trimestral |

Defina o público e o período de cada medida. Declare como os grupos pequenos são protegidos: por exemplo, nenhum resultado é mostrado para qualquer grupo de menos de dez pessoas. Os eventos de atrito contam sinais, e não culpa; por isso um evento é ligado a um serviço e a um grupo de usuários, nunca à avaliação de desempenho de uma pessoa nomeada.

## Recomendações

### Projete o acordo com os usuários

**1. Entreviste antes de medir.** Passe tempo com uma amostra de usuários de cada grupo importante e pergunte: Como é um bom dia com este serviço? Onde ele desperdiça seu tempo? O que você deixaria de fazer se ele funcionasse? Use os hábitos do [design centrado no ser humano](https://en.wikipedia.org/wiki/Human-centered_design): observe o trabalho real e escreva o que ouve nas palavras do usuário. As declarações resultantes se tornam as metas de experiência do acordo.

**2. Escreva as declarações de experiência como resultados.** "Consigo deixar um novo contratado produtivo na primeira manhã" diz mais que "requisição de acesso do novo contratado resolvida em dois dias". Mantenha cada declaração curta, em primeira pessoa e ligada a um serviço. Mire em três a cinco declarações por serviço para que as pessoas consigam lembrá-las.

**3. Escolha medidas de três ângulos.** Para cada declaração, escolha uma medida do que as pessoas dizem (uma pergunta de pulso ou um tema de comentários), uma do que as pessoas fazem (conclusão da jornada, contatos repetidos, requisições abandonadas) e, quando possível, uma do que o sistema registra (latência dos passos da jornada). Quando as três discordam, você achou algo a investigar.

**4. Combine as metas de forma leve.** No começo, defina uma direção ("reduzir o tempo perdido") e uma data de revisão em vez de um número rígido. Metas rígidas para novas medidas de experiência convidam à manipulação antes de a medida ser compreendida. Quando uma meta aparecer, faça-a uma faixa e diga quem a combinou.

### Colete e leia os dados

**5. Use perguntas de pulso curtas e regulares.** Uma pergunta sobre uma declaração, feita em um intervalo regular, é mais fácil de responder que uma longa pesquisa anual. Alterne as declarações, mantenha a redação estável e evite perguntar à mesma pessoa mais de uma vez em um período definido. Ligue o projeto do pulso aos princípios de pesquisa do tópico anterior (veja o tópico 6.1, Métricas de satisfação do cliente).

**6. Leia os comentários com um método.** As ferramentas de [análise de sentimento](https://en.wikipedia.org/wiki/Sentiment_analysis) podem ordenar grandes volumes de texto e interpretam mal o sarcasmo, o jargão e o contexto. Trate a saída da ferramenta como uma primeira passada, peça a uma pessoa que confira uma amostra todo mês e mantenha uma lista curta de temas que você codifica à mão. O objetivo da análise é achar assuntos para conversar com os usuários, e não produzir uma pontuação.

**7. Acrescente sinais comportamentais da jornada.** Instrumente as jornadas que importam aos usuários, com o conhecimento deles: onde começam, onde desistem e onde pedem ajuda? O [monitoramento de usuários reais](https://en.wikipedia.org/wiki/Real_user_monitoring) dos tempos de carga de página, dos erros e dos passos dá uma visão que as pesquisas não dão. Diga aos usuários o que coleta, limite-se ao que precisa e agregue antes de compartilhar.

**8. Proteja os grupos pequenos e os indivíduos.** Os dados de experiência podem revelar quem está com dificuldade. Agregue os resultados, suprima os grupos abaixo de um tamanho combinado e nunca use os dados em avaliações de desempenho. Decida quem pode ver os comentários brutos e armazene-os de acordo. Em cenários regulados, consulte especialistas em privacidade antes de coletar dados comportamentais.

### Use o acordo

**9. Mostre SLA e XLA lado a lado.** Na mesma página, exiba o cumprimento operacional e as medidas de experiência de cada serviço. O pareamento é o ponto: um SLA verde com uma pontuação de experiência em queda é um convite a uma conversa, e uma pontuação de experiência verde com SLAs falhando merece um olhar sobre o que os usuários não estão sendo informados.

**10. Faça uma revisão regular da experiência com os usuários.** Reúna-se a cada trimestre com representantes dos grupos de usuários, mostre os dados, pergunte o que significam e combine uma ou duas melhorias a tentar. Inclua a central de serviços e a equipe de produto, já que a causa de uma experiência ruim muitas vezes está no produto, e não no suporte.

**11. Financie as correções.** Um acordo que identifica o atrito e depois o deixa no lugar ensina aos usuários que as medidas são teatro. Ponha os dois ou três principais problemas de experiência no backlog, com responsáveis e datas, e relate sobre eles na revisão seguinte. Veja as métricas de melhoria contínua mais adiante neste livro (veja o tópico 9.5, Métricas de melhoria contínua).

**12. Revise o acordo conforme os serviços e os usuários mudam.** Aposente as declarações que já não importam e acrescente novas. Registre as mudanças e marque-as nos gráficos de tendência, como faria com qualquer definição de métrica.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Pontuação de experiência | Pesquisar apenas usuários satisfeitos; programar a pesquisa depois de bons eventos; reescrever a declaração para ser mais fácil de concordar | Taxa de resposta e mistura de respondentes; registro de redação estável; ler os comentários |
| Tendência de sentimento | Ajustar a ferramenta ou a lista de temas até a tendência subir; excluir canais negativos | Conferência humana de uma amostra mensal; manter um guia de codificação fixo e registrar as mudanças |
| Eventos de atrito por usuário | Redefinir os eventos para que menos contem; desestimular contatos repetidos tornando a central difícil de alcançar | Volume de contatos por canal; taxa de abandono na central de serviços (veja o tópico 3.1, Métricas da central de serviços) |
| Tempo perdido com problemas de TI | Perguntar de um modo que ancore estimativas baixas; contar apenas incidentes graves | Comparar o tempo autorrelatado com o tempo degradado medido; revisão da redação da pesquisa |
| Taxa de conclusão da jornada | Definir a jornada de forma tão estreita que a falha fica fora do escopo; encaminhar casos difíceis a outro canal | Definição da jornada no registro; taxa de contatos de ajuda e escalonamentos |
| Cumprimento do XLA | Definir metas já cumpridas; definir um conjunto muito pequeno de metas | Rever a definição de metas com os usuários; mostrar o cumprimento com a tendência e o histórico de metas |
| Lacuna de experiência | Escolher os serviços ou períodos que parecem melhores; mudar quais SLAs são comparados | Conjunto de comparação fixo combinado de antemão; mostrar todos os serviços |

Uma leitura saudável é um quadro de experiência que combina com os comentários e com a conversa de revisão com os usuários, um pequeno conjunto de medidas que mudam devagar e por razões que a equipe sabe explicar e um backlog de correções de experiência que fica mais curto.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Apenas SLA | Claro, contável, contratual | Perde o que os usuários sentem; pode estar verde enquanto os usuários estão descontentes |
| Apenas XLA | Próximo do que os usuários valorizam | Mais difícil de medir e comparar; fraco como base para contratos com fornecedores |
| SLA com XLA | Dá as duas visões e expõe a lacuna | Mais trabalho; exige confiança e julgamento para ler as discordâncias |
| Medidas de experiência baseadas em pesquisa | Voz direta dos usuários | Viés de resposta; peso sobre quem responde |
| Medidas comportamentais | Sem peso de pesquisa; objetivas | Exigem instrumentação e cuidado com a privacidade; mostram o que aconteceu, e não por quê |
| Índice único de experiência | Manchete fácil | Esconde detalhes; fácil de manipular e difícil de explicar |

A resposta pragmática é usar o XLA como um acréscimo, introduzido para alguns serviços em que a lacuna entre operações e experiência já é visível. Não substitua SLAs contratuais por medidas de experiência que os fornecedores não controlam. Mantenha os compromissos legais e comerciais no SLA e use o XLA para impulsionar a melhoria e a conversa.

## Perguntas para discutir com sua equipe

**1. Para o nosso serviço mais importante, como é um bom dia para os usuários, nas palavras deles?**
Reúna dois ou três usuários, ou reutilize entrevistas recentes, e escreva as declarações deles. O facilitador deve resistir a reescrevê-las em termos operacionais. Comparem as declarações com o SLA atual e perguntem quais ele cobre e quais ignora. As lacunas são candidatas a medidas de experiência.

**2. Onde os nossos painéis verdes e as histórias dos usuários discordam?**
Peça à equipe um caso recente em que um serviço cumpriu as metas e os usuários reclamaram. Rastreiem o caso pelos dados: o que medimos e o que perdemos? A conversa muitas vezes traz à tona um passo ausente, uma transferência ou um relógio que parou cedo. Registrem o caso como exemplo para a próxima revisão com os usuários.

**3. Quais três medidas usaríamos para saber se esta declaração de experiência é verdadeira?**
Escolham uma declaração e escolham uma medida do que as pessoas dizem, uma do que fazem e uma do que o sistema registra. Perguntem o que cada uma poderia perder e como cada uma poderia ser manipulada. Combinem o menor conjunto que convenceria um usuário cético.

**4. O que coletamos sobre os usuários que eles podem não esperar, e eles se sentiriam confortáveis com isso?**
Listem as fontes de dados comportamentais e a finalidade de cada uma. Peçam a um representante dos usuários que reaja. O facilitador deve tratar o desconforto como informação sobre o projeto, e não como um obstáculo. Decidam o que deixar de coletar, o que agregar e quem pode ver os dados brutos.

**5. O que faríamos se a pontuação de experiência caísse enquanto todos os SLAs continuassem verdes?**
Ensaiem a resposta. Quem olha primeiro, o que confere e com quem fala? Decidam se a equipe confiaria na pontuação de experiência ou procuraria meios de descartá-la. A resposta mostra quão a sério a equipe leva o acordo.

**6. Quais correções de experiência prometemos, e o que aconteceu com elas?**
Revejam as duas últimas reuniões de revisão com os usuários. Para cada compromisso, mostrem a data, o responsável e o resultado. Se a lista está vazia ou obsoleta, discutam por quê. Combinem uma correção a entregar antes da próxima revisão e um modo de dizer aos usuários que aconteceu.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto guardam boa parte da causa de uma experiência ruim: telas confusas, passos lentos, erros pouco claros. As medidas de experiência lhes dão evidência do uso ao vivo e alimentam diretamente o refinamento. As equipes devem ler os temas dos comentários antes de cada sessão de planejamento e ligar as medidas de jornada ao backlog. Não devem tratar a pontuação de experiência como meta da equipe. É informação sobre o serviço que compartilham com as operações.

### Equipes de serviço e operações

As equipes de operações veem primeiro o atrito: contatos repetidos, contornos e chamadas de pessoas irritadas. As medidas de experiência lhes dão um modo de mostrar o que o SLA esconde e uma razão para corrigir causas em vez de encerrar tickets mais depressa. Devem sustentar as definições e a amostragem, evitar encaminhar usuários para canais que parecem melhores e ler por inteiro os comentários descontentes (veja o tópico 3.1, Métricas da central de serviços).

### Liderança e governança

Os líderes escolhem se um XLA é uma conversa ou um placar. Devem perguntar o que os dados de experiência dizem sobre onde investir, evitar ligar a remuneração a um índice de experiência e proteger a privacidade dos dados do pessoal. A governança deve pedir as definições, a amostragem e o histórico de mudanças e tratar um salto inexplicado em uma medida de experiência como motivo para conferir o método.

### Clientes e usuários

Os usuários são os autores do acordo. Devem ser convidados a descrever como é o bom, ver os resultados e saber o que mudou. Devem saber o que é coletado sobre eles e por quê e ter um meio de dizer não. Os usuários que são perguntados com frequência e não veem nada melhorar deixarão de responder, e o silêncio fará os dados parecerem melhores que a realidade.

## Na prática: um exemplo de gestão de serviços

Uma empresa de serviços profissionais de médio porte opera um serviço interno de TI para 1.800 funcionários. Os números abaixo são ilustrativos.

O relatório mensal de SLA mostra 99,8% de disponibilidade da plataforma de colaboração e 96% dos incidentes resolvidos dentro da meta. O diretor de TI fica satisfeito, mas os consultores em clientes continuam reclamando de logins lentos. O gerente do serviço propõe um piloto de XLA para a plataforma de colaboração.

Em entrevistas com 12 consultores, surgem três declarações: "consigo entrar em uma chamada de cliente em dois minutos depois de decidir fazê-lo", "não preciso ligar para a TI para voltar à minha conta" e "quando algo quebra, sei o que está acontecendo". A equipe escolhe medidas para cada uma. Para a primeira, toma a avaliação de pulso da declaração e o tempo medido do início do login à entrada na chamada, a partir do monitoramento de usuários reais do cliente, agregado por região. Para a segunda, conta os contatos de redefinição de senha por usuário ativo por mês. Para a terceira, acompanha a proporção dos incidentes em que a mensagem de status foi atualizada em até 30 minutos e faz a pergunta de pulso sobre isso.

Os dois primeiros meses de dados mostram que o tempo mediano do login até a entrada na chamada é bom na região da sede, mas longo em duas outras, e que os contatos de redefinição de senha por usuário são três vezes maiores para a equipe com notebooks gerenciados do que para as outras. A pontuação de experiência da primeira declaração é de 3,1 em 5, contra 4,2 para a equipe baseada no escritório. O SLA está verde nos dois. O gerente do serviço leva o achado à revisão com os usuários. A equipe combina duas melhorias: ajustar a configuração do login único para as regiões remotas e mudar os parâmetros de renovação de token nos notebooks gerenciados. Três meses depois, o tempo mediano cai, os contatos de redefinição por usuário caem e a pontuação de experiência sobe para 3,8. O diretor concorda em manter o XLA para este serviço, em acrescentá-lo a mais um e em não definir nenhuma meta numérica até a próxima revisão.

## Ágil, IA, automação e análise

### Ágil

Combine as medidas de experiência com os usuários e revisite-as conforme o serviço evolui, com envolvimento contínuo das partes interessadas. O cuidado é que uma meta de experiência definida só pelo provedor não descreverá o que os usuários sentem.

### IA

As funcionalidades de IA mudam a experiência diretamente; por isso inclua as jornadas que as usam e meça o resultado do usuário, e não a confiança do modelo. Pareie as pontuações de experiência com a conclusão de tarefas e o escalonamento para uma pessoa. O cuidado é que um chatbot que parece agradável enquanto falha na tarefa lisonjeia a pontuação.

### Automação

Colete automaticamente os eventos de atrito e a conclusão de jornadas, com consentimento e regras de privacidade, e meça a coleta pela cobertura. O cuidado é que dados automáticos de experiência sobre indivíduos podem virar vigilância; por isso agregue e minimize.

### Análise

Relate a pontuação de experiência com as medidas operacionais na mesma página e a lacuna entre elas. A decisão informada é qual serviço melhorar embora seu SLA esteja verde. O cuidado é que a lacuna pode ser um artefato de medição; por isso confira a amostra.

## Olhar setorial

**Startup.** O contato próximo com os usuários facilita as entrevistas. Resista a construir uma estrutura: escreva três declarações de experiência para o serviço principal, pergunte aos usuários sobre elas todo mês e acrescente uma medida comportamental. Os acordos formais vêm depois.

**Pequena empresa.** O pessoal é pequeno e muitas vezes divide um gestor com a TI. Use conversas e um pulso mensal muito curto. Tenha cuidado com os dados comportamentais, já que grupos pequenos são facilmente identificáveis.

**Grande empresa.** A escala traz muitos grupos de usuários e fornecedores. Defina as declarações de experiência por serviço e persona, mantenha painéis por serviço e evite um índice de experiência único para a empresa toda. Alinhe o XLA com os contratos de fornecedores para que os fornecedores contribuam com dados sem serem cobrados por medidas que não conseguem influenciar.

**Governo e setor público.** Os serviços muitas vezes enfrentam o público além do pessoal, com deveres de acessibilidade, linguagem simples e acesso igual. Inclua a acessibilidade nas declarações de experiência e nas medidas, teste com usuários que dependem de tecnologia assistiva e proteja os dados pessoais conforme a lei. Onde o relato público é exigido, relate os métodos junto com os resultados (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é moderado. As entrevistas com usuários levam alguns dias por serviço. Uma pesquisa de pulso mensal precisa de uma ferramenta de pesquisa, que muitas organizações já têm. As medidas comportamentais precisam de alguma instrumentação, que pode vir do monitoramento existente e da análise do portal. A revisão com os usuários leva algumas horas por trimestre. Codificar os comentários leva uma ou duas horas por mês.

O retorno está em achar problemas que os SLAs não mostram, como jornadas lentas em regiões ou dispositivos específicos, e em dirigir o dinheiro de melhoria ao que os usuários valorizam. O tempo perdido com problemas de TI pode virar um custo com as taxas do seu pessoal se for medido com cuidado. Evite alegações genéricas de ganhos de produtividade. Construa o argumento a partir da sua própria linha de base: tempo perdido por usuário, eventos de atrito por usuário e contatos repetidos, antes e depois de uma correção. Conte também o custo evitado de contornos, como as ferramentas paralelas adotadas porque o serviço oficial é incômodo.

## Antipadrões e armadilhas

- **Substituir SLAs por XLAs.** Os contratos precisam de compromissos contáveis. Mantenha os dois e mostre-os juntos.
- **Um índice composto de experiência.** Esconde a causa e convida à manipulação. Mostre algumas medidas separadas.
- **Definir a experiência sem os usuários.** Declarações escritas numa sala de reuniões descrevem a visão do provedor. Entreviste e teste com os usuários.
- **Pesquisar até as pessoas pararem de responder.** Mantenha os pulsos curtos e alterne os temas.
- **Coletar dados comportamentais sem avisar ninguém.** Quebra a confiança e pode quebrar a lei. Seja aberto sobre o que é coletado e por quê.
- **Usar dados de experiência em avaliações de desempenho.** Transforma uma ferramenta de aprendizado em vigilância e destrói o relato honesto.
- **Corrigir a medida, e não a causa.** Não redirecione os usuários a um canal mais amigável para melhorar um número. Corrija a jornada.
- **Deixar os achados num slide.** Financie e acompanhe as correções de experiência.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Metas de experiência | Implícitas ou ausentes | Escritas pelo provedor para alguns serviços | Declarações escritas com os usuários para os serviços-chave | Declarações revistas e revisadas a cada trimestre com grupos de usuários | Compartilhadas entre serviços e fornecedores, de propriedade conjunta com os usuários |
| Medição | Pesquisas ocasionais | Pesquisa de pulso para um serviço | Medidas de três ângulos (dizer, fazer, sistema) para cada declaração | Medidas acompanhadas ao longo do tempo, protegidas para grupos pequenos e comparadas com os SLAs | Dados combinados entre provedores, com escolhas de privacidade controladas pelo usuário |
| Ação | Reclamações tratadas uma a uma | Correções feitas ad hoc | Principais problemas de experiência no backlog com responsáveis | Correções financiadas, acompanhadas e relatadas de volta aos usuários | Melhoria coordenada entre equipes, fornecedores e usuários, com o aprendizado compartilhado |

## Lista de verificação

- [ ] Cada serviço com XLA tem de três a cinco declarações de experiência escritas com os usuários.
- [ ] Cada declaração tem medidas de pelo menos dois ângulos (dizer, fazer, sistema).
- [ ] As medidas de SLA e de experiência aparecem na mesma página para cada serviço.
- [ ] As pesquisas de pulso são curtas, regulares e estáveis na redação.
- [ ] Os comentários são codificados por um guia estável, e uma pessoa confere uma amostra mensal.
- [ ] Os grupos abaixo de um tamanho combinado são suprimidos nos relatórios.
- [ ] Os dados comportamentais coletados são divulgados aos usuários e limitados à necessidade.
- [ ] Nenhuma medida de experiência é usada em avaliações de desempenho individuais.
- [ ] Uma revisão trimestral com representantes dos usuários está no calendário.
- [ ] Os principais problemas de experiência têm responsáveis e datas no backlog.

## Prompts de IA

**Redija declarações de experiência a partir de notas de entrevistas.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Encontre a lacuna entre o SLA e a experiência.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Revise uma abordagem de privacidade para medidas comportamentais.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Prepare uma revisão trimestral de experiência com os usuários.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção de uma medida de experiência antes de acrescentá-la a um painel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de XLA traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Um XLA acrescenta metas e medidas de experiência às metas operacionais e complementa o SLA.
- Escreva as declarações de experiência com os usuários, nas palavras deles, e ligue cada uma a medidas do que as pessoas dizem, fazem e do que o sistema registra.
- Mostre juntos os resultados de SLA e de experiência e trate a discordância como um convite a investigar.
- Proteja os usuários: divulgue o que coleta, agregue, suprima os grupos pequenos e mantenha tudo fora das avaliações de desempenho.
- Evite um índice único de experiência e evite metas rígidas antes de as medidas serem compreendidas.
- Financie as correções que os dados revelam e diga aos usuários o que mudou.

## Referências e leituras complementares

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [Experiência do usuário](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Experiência do cliente](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usabilidade](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Design centrado no ser humano](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Análise de sentimento](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Monitoramento de usuários reais](https://en.wikipedia.org/wiki/Real_user_monitoring).
