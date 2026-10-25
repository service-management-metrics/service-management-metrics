# Métricas de satisfação do cliente

**As pontuações de satisfação dizem como as pessoas se sentiram em um momento do serviço; por isso faça perguntas curtas e honestas na hora certa, leia os comentários antes dos números e nunca deixe uma pontuação virar cota.**

## Visão geral e motivação

As medidas operacionais dizem o que o serviço fez. As medidas de satisfação dizem como foi recebê-lo. Um ticket pode encerrar dentro do prazo e ainda assim deixar o usuário travado, e um serviço restabelecido ainda pode parecer uma semana ruim. As equipes ágeis fazem a mesma pergunta ao fim de cada incremento: isto ajudou as pessoas a quem se destinava? A gestão de serviços de TI (ITSM), como codificada pelo ITIL, faz a pergunta pelo valor que um serviço cocria com seus clientes. A medição da satisfação é onde as duas perguntas se encontram.

A [satisfação do cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) é uma medida de quanto produtos e serviços atendem ou superam o que os clientes esperam. No trabalho de serviço, costuma ser coletada por pesquisa e vem em três formas comuns que este tópico cobre:

- **Pontuação de satisfação do cliente (CSAT):** uma avaliação de uma interação ou serviço específico, geralmente em uma escala de cinco pontos, relatada como a proporção de respostas satisfeitas.
- **Net promoter score (NPS):** baseado em uma pergunta sobre a probabilidade de quem responde recomendar uma empresa, produto ou serviço. Quem responde 9 ou 10 é promotor, quem responde de 0 a 6 é detrator, e a pontuação é a porcentagem de promotores menos a porcentagem de detratores. O [net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score) foi popularizado por Fred Reichheld em um artigo de 2003 na *Harvard Business Review*.
- **Customer effort score (CES):** uma avaliação de quanto esforço foi preciso para fazer algo, ou de quão fácil foi. Seus autores argumentaram que reduzir o esforço prevê a lealdade melhor do que encantar as pessoas. Trate essa afirmação como uma hipótese a testar no seu próprio contexto, e não como fato estabelecido.

Em um cenário interno de TI, o "cliente" é um colega, e a pesquisa é uma pergunta curta depois de um ticket ou de um release. Os princípios são os mesmos, e os deveres éticos são maiores, porque as pessoas que você pergunta trabalham com você amanhã.

As pesquisas são uma forma de [metodologia de pesquisa (survey methodology)](https://en.wikipedia.org/wiki/Survey_methodology), um campo com décadas de achados sobre como a redação das perguntas, o momento e a amostragem mudam as respostas. As equipes que a ignoram tendem a produzir pontuações que se movem por razões sem relação com a qualidade do serviço. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aqui com força extra: quando a equipe é premiada por uma pontuação alta, aprende a pedi-la (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico dá as definições, a higiene dos dados e os hábitos que mantêm honestas as medidas de satisfação. O próximo tópico as estende para uma visão mais completa da experiência (veja o tópico 6.2, Acordos de nível de experiência).

## Princípios-chave

- **Pergunte sobre um momento específico.** Uma pesquisa ligada a um ticket encerrado ou a um release dá respostas mais nítidas que uma pergunta anual genérica.
- **Mantenha-a curta.** Uma avaliação e um comentário aberto valem mais que dez perguntas que a maioria pula.
- **Leia os comentários.** A pontuação diz quanto, e as palavras dizem por quê.
- **Relate quem respondeu.** Uma pontuação sem taxa de resposta e mistura de respondentes é um boato.
- **Feche o ciclo.** As pessoas que relatam uma experiência ruim devem receber um retorno.
- **Compare-se consigo mesmo ao longo do tempo.** Os benchmarks entre empresas escondem diferenças de método, público e cultura.
- **Proteja os respondentes.** Colete apenas o que precisa, diga como será usado e não classifique indivíduos com base nisso.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Proporção das respostas satisfeitas, para um tipo de interação definido | respostas avaliadas com 4 ou 5 em uma escala de cinco pontos / respostas válidas | porcentagem | Pesquisa pós-interação ligada ao ticket ou ao release | Central de serviços; gestão de incidentes; gestão de nível de serviço | Feedback da revisão com as partes interessadas | Semanal ou mensal |
| NPS | Promotores menos detratores para um serviço e público definidos | porcentagem que responde 9 ou 10 menos porcentagem que responde de 0 a 6 | pontos, faixa de -100 a 100 | Pesquisa de relacionamento, enviada em um intervalo fixo | Melhoria contínua; gestão de nível de serviço | Revisão dos resultados do produto | Trimestral |
| CES | Avaliação média ou proporção favorável de quão fácil foi fazer algo | respostas favoráveis / respostas válidas, ou avaliação média | porcentagem ou média | Pesquisa pós-interação ligada ao ticket, à requisição ou ao release | Gestão de requisições de serviço; central de serviços | Feedback de usabilidade no refinamento | Mensal |
| Taxa de resposta da pesquisa | Proporção dos usuários convidados que responderam | respostas recebidas / pesquisas entregues | porcentagem | Ferramenta de pesquisa e sistema de tickets | Medição e relato | Participação de feedback nas revisões | Mensal |
| Cobertura de respondentes | Quão de perto a mistura de respondentes combina com a população de usuários em dimensões combinadas | proporção de respondentes em cada grupo comparada com a proporção de usuários nesse grupo, por grupo | pontos percentuais | Ferramenta de pesquisa cruzada com o diretório de usuários ou os dados de tickets | Medição e relato | Mapa de partes interessadas | Trimestral |
| Parcela de temas nos comentários | Proporção dos comentários de texto livre atribuída a cada tema | comentários no tema / comentários codificados | porcentagem | Comentários de pesquisa codificados | Melhoria contínua | Temas da retrospectiva | Mensal |
| Tempo de acompanhamento de detratores | Tempo desde uma avaliação baixa até um contato documentado com o usuário | carimbo de tempo da nota de acompanhamento menos carimbo de tempo da avaliação baixa, mediana e 85º percentil | horas ou dias | Ferramenta de pesquisa e sistema de tickets | Gestão de incidentes; melhoria contínua | Ciclo de feedback no acordo de trabalho | Mensal |

Os relógios e as fronteiras importam. O CSAT e o CES contam apenas respostas à interação específica, nunca o humor geral. O tempo de acompanhamento de detratores começa no momento em que a avaliação baixa é registrada, e não quando alguém a lê pela primeira vez. Exclua registros de teste e respostas de membros da equipe que está sendo medida.

## Recomendações

### Projete o instrumento

**1. Escolha uma pergunta por finalidade.** Use o CSAT depois de uma interação para saber como ela correu, o CES depois de algo que o usuário teve de fazer para saber onde está o atrito e o NPS em um intervalo regular para saber da relação geral. Misturar os três em um só formulário convida à fadiga de pesquisas e a resultados confusos. Se você só pode bancar um, escolha o que combina com a decisão que precisa tomar.

**2. Escreva uma redação neutra e específica.** "Quão satisfeito você ficou com o modo como sua requisição foi tratada?" é melhor que "Quão ótimo foi o nosso serviço?". Evite perguntas duplas que indagam sobre rapidez e simpatia ao mesmo tempo. Ofereça uma escala consistente, rotule suas pontas e mantenha a ordem das respostas a mesma sempre. Uma [escala de Likert](https://en.wikipedia.org/wiki/Likert_scale) é um projeto comum, e pequenas mudanças nos rótulos podem deslocar os resultados; por isso não as mude de forma casual.

**3. Acrescente uma pergunta aberta.** "Qual é o principal motivo da sua avaliação?" custa pouco a quem responde e dá à equipe seus dados mais ricos. Os comentários explicam a pontuação, expõem problemas que os números não alcançam e dão aos atendentes algo com que aprender. Leia-os numa revisão regular, em voz alta se possível.

**4. Programe a pesquisa perto do evento.** Envie a pergunta logo depois que o ticket é resolvido ou o release chega, enquanto a memória está fresca. Não a envie no momento do encerramento por um atendente que espera uma nota alta. Um pequeno atraso, definido pelo sistema, remove a tentação de orientar a resposta.

### Torne os números confiáveis

**5. Relate a taxa de resposta e a mistura de respondentes ao lado de toda pontuação.** Uma pontuação de satisfação de 4% dos usuários é uma afirmação sobre os respondentes. Compare quem respondeu com quem foi convidado, usando atributos que você já tem, como região, serviço ou tipo de requisição. Grandes diferenças significam que a pontuação precisa de um rótulo de cautela. A representatividade é um tema central da pesquisa sobre [viés de resposta](https://en.wikipedia.org/wiki/Response_bias), e o ponto para uma equipe de serviço é simplesmente olhar.

**6. Mostre a incerteza.** Amostras pequenas oscilam muito. Uma [margem de erro](https://en.wikipedia.org/wiki/Margin_of_error) ou um [intervalo de confiança](https://en.wikipedia.org/wiki/Confidence_interval) mostrado ao lado de um CSAT mensal impede a equipe de reagir ao ruído (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Se uma equipe tem menos de algumas dezenas de respostas em um período, relate contagens e leia os comentários, e não porcentagens.

**7. Evite selecionar quem é perguntado.** Se a pessoa que encerrou o ticket decide se a pesquisa é enviada, as pontuações sobem pelo motivo errado. Envie a pesquisa automaticamente a toda interação elegível, ou a uma amostra aleatória se o volume é alto. Documente a regra, incluindo quaisquer exclusões, no registro de métricas.

**8. Separe a satisfação de uma pessoa do desempenho de uma pessoa.** A satisfação depende de fatores que um atendente individual não controla: a qualidade do produto, a fila, a política, o humor do usuário. Não classifique atendentes pelo CSAT. Use-o no nível da equipe e do serviço e use os comentários para conversas de orientação que o atendente acolha.

### Aja sobre o que ouve

**9. Feche o ciclo com os usuários insatisfeitos.** Contate as pessoas que relatam uma experiência ruim, pergunte o que teria ajudado e registre o que aprender. Defina uma meta para o tempo de acompanhamento e faça do acompanhamento uma conversa, e não um pedido para mudar a pontuação. Mudar uma pontuação a pedido é uma distorção; por isso o acompanhamento deve visar a corrigir o problema e aprender.

**10. Codifique os comentários em temas e acompanhe-os.** Combine uma lista curta de temas, como "tive de me repetir", "resposta lenta", "a correção não durou", "comunicação pouco clara" e "simpático e prestativo". Codifique uma amostra todo mês, à mão ou com uma ferramenta, e peça a uma pessoa que confira os resultados. As tendências dos temas muitas vezes mostram problemas antes de uma pontuação se mover.

**11. Ligue a satisfação aos dados operacionais.** Compare o CSAT com o tempo de resolução, a taxa de reabertura e o número de contatos por problema. Os pares dizem se a velocidade está comprando satisfação ou se a equipe é rápida e errada. Use-os para achar histórias a investigar, não para provar uma regra.

**12. Trate os benchmarks com cuidado.** As cifras publicadas ou fornecidas por fornecedores para as pontuações de satisfação dependem do método, do público e da região, e o seu próprio histórico é um comparador melhor. Se usar uma comparação externa, declare sua fonte, método e data e não defina uma meta a partir dela sem testar se o seu método combina. Nunca invente um benchmark.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| CSAT | Atendentes orientam os usuários a dar notas máximas; pesquisas enviadas só depois de tickets fáceis; tickets difíceis encerrados sem pesquisa | Pesquisa automática para todo ticket elegível; taxa de resposta e mistura de respondentes; taxa de reabertura |
| NPS | Pesquisar apenas usuários simpáticos; programar a pesquisa depois de um bom evento; perguntar pessoalmente; rebatizar pontos da escala | Público e calendário fixos no registro; cobertura de respondentes; ler os comentários dos detratores |
| CES | Remover passos do formulário de um modo que mova o trabalho para outro lugar; perguntar apenas depois de requisições tranquilas | Contagem de contatos por problema; tempo de atendimento das requisições e retrabalho (veja o tópico 3.5, Métricas de atendimento de requisições de serviço) |
| Taxa de resposta da pesquisa | Convidar apenas pessoas com probabilidade de responder; enviar a pesquisa para uma lista diferente a cada vez | Regra de convite escrita; comparar os convidados com a população de usuários |
| Cobertura de respondentes | Descartar da comparação os grupos de difícil alcance; reponderar sem dizer | Publicar as dimensões e o método; mostrar o resultado sem ponderação ao lado do ponderado |
| Parcela de temas nos comentários | Codificar os comentários para evitar temas ruins; fundir temas para que nenhum pareça grande | Uma segunda pessoa codifica uma amostra; manter estável a lista de temas e registrar as mudanças |
| Tempo de acompanhamento de detratores | Registrar uma nota sem contatar o usuário; contatar o usuário para pedir uma nota melhor | Conferir o conteúdo das notas de acompanhamento; perguntar ao usuário na pesquisa seguinte se alguém o contatou |

Uma leitura saudável é uma taxa de resposta estável, uma mistura de respondentes próxima da mistura de usuários, uma pontuação que se move com a experiência que os usuários descrevem nos comentários e usuários insatisfeitos que dizem que alguém retornou a eles.

## Compensações: vantagens e desvantagens

| Medida | Ponto forte | Ponto fraco |
| --- | --- | --- |
| CSAT | Simples, rápido, ligado a um momento específico | Facilmente inflado; diz pouco sobre o relacionamento inteiro |
| NPS | Uma pergunta, fácil de acompanhar ao longo do tempo | Esconde as razões; um número comprime uma distribuição ampla; diferenças culturais afetam a escala |
| CES | Aponta diretamente para o atrito que a equipe pode remover | Menos compreendido; a evidência é contestada |
| Pesquisa anual longa | Rica, cobre muitos serviços | Lenta, baixa resposta, difícil de agir sobre |
| Apenas comentários | Concretos, memoráveis | Difíceis de comparar ao longo do tempo; vulneráveis às vozes mais altas |
| Sinais comportamentais | Sem peso de pesquisa; objetivos | Não captam sentimentos; podem interpretar mal a causa |

A resposta pragmática é combinar uma pesquisa curta de interação, uma pesquisa ocasional de relacionamento e os comentários e ler os três com os dados operacionais. As medidas de satisfação funcionam como uma conversa entre os usuários e a equipe. Falham como um placar.

## Perguntas para discutir com sua equipe

**1. O que fazemos com uma pontuação baixa e com uma pontuação alta?**
Peça à equipe que descreva, na prática, a última vez que uma pontuação baixa levou a uma mudança. Depois peça o mesmo para uma pontuação alta. Se as respostas são vagas, a pesquisa é um ritual. O facilitador deve procurar um vínculo concreto dos dados com uma ação e combinar um lugar onde esse vínculo será registrado.

**2. Quem responde às nossas pesquisas, e quem não responde?**
Peça à equipe que nomeie os grupos de usuários de quem menos ouve. Comparem com a lista de convites e o diretório de usuários. A conversa muitas vezes revela que os usuários mais quietos têm os problemas mais difíceis. Combinem um modo de alcançar um grupo quieto neste trimestre, como uma ligação curta ou outro canal.

**3. Em que ponto da interação perguntamos, e quem decide?**
Percorram o caminho da resolução até a pesquisa. Achem todo ponto em que uma pessoa pode influenciar se, quando ou como a pesquisa é enviada. Combinem quais desses pontos devem ser automatizados. O facilitador pode perguntar o que um atendente poderia fazer para proteger uma pontuação, como uma questão de projeto e não uma acusação.

**4. O que um detrator ouve de nós depois de responder?**
Olhem algumas avaliações baixas recentes e leiam as notas de acompanhamento. Perguntem se o usuário se sentiria ouvido. Discutam como tornar o acompanhamento útil sem pedir uma avaliação alterada. Decidam quem é dono do acompanhamento e qual é o tempo-alvo.

**5. Quais comentários do último mês mudaram o que fizemos?**
Imprimam ou exibam dez comentários ao acaso. Perguntem à equipe quais foram atendidos, quais não e por quê. Isso mantém o foco nas palavras e constrói o hábito de lê-las. Combinem codificar temas no mês seguinte e rever a tendência.

**6. Com qual cifra publicada somos tentados a nos comparar, e a comparação é justa?**
Nomeiem a cifra, sua fonte, seu método e seu público e comparem cada um com os seus. Perguntem se mudaria uma decisão. Se não, ponham-na de lado e usem a própria tendência. O facilitador deve registrar a resposta no registro de métricas.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto usam o feedback de satisfação para decidir o que corrigir ou construir a seguir, e pesquisas curtas depois de um release dão uma leitura mais rápida que a próxima revisão trimestral. As equipes de entrega devem ligar os comentários a itens de backlog, mostrar aos usuários o que mudou e evitar tratar uma pontuação como meta de entrega. Uma alta nos comentários de esforço ou de confusão depois de um release é um sinal para olhar o release, e não a pesquisa.

### Equipes de serviço e operações

As centrais de serviços coletam a maior parte dos dados de interação e sentem mais a pressão da pontuação. As equipes de operações devem enviar as pesquisas automaticamente, publicar a regra de amostragem e usar os comentários para o aprendizado da equipe. Devem manter o CSAT ao lado da taxa de reabertura e dos contatos repetidos, para que encerramentos rápidos não pareçam bons resultados (veja o tópico 3.1, Métricas da central de serviços).

### Liderança e governança

Os líderes definem o clima para a manipulação. Um pedido de "95% de satisfação até o fim do ano" ensina a equipe a proteger o número. Os líderes devem pedir a taxa de resposta, a mistura de respondentes e os principais temas dos comentários, financiar as correções que os comentários revelam e manter a satisfação fora da remuneração e da classificação individual. A governança deve esperar um método declarado para qualquer cifra que relate externamente.

### Clientes e usuários

Os usuários dão seu tempo e sua franqueza. Merecem uma pesquisa curta, uma razão clara para a pergunta, uma promessa sobre como suas respostas serão usadas e uma resposta quando relatam um problema. Onde a pesquisa não é anônima, diga isso. Os usuários que não veem nada mudar deixarão de responder, e o silêncio parecerá satisfação.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional opera uma central de serviços e uma pequena equipe que constrói aplicativos clínicos. Os números abaixo são ilustrativos.

O CSAT mensal da central de serviços é de 92%, calculado a partir de 140 respostas de cerca de 3.100 tickets encerrados, uma taxa de resposta de 4,5%. A liderança fica satisfeita. A gerente do serviço lê os comentários e nota que muitas respostas positivas vêm de funcionários da administração, enquanto as enfermeiras dos turnos da noite mal aparecem. Ela compara a mistura de respondentes com o diretório de usuários e descobre que a equipe do turno da noite é cerca de 18% dos usuários e 3% dos respondentes.

A equipe faz três mudanças. A pesquisa passa a ser um formulário de duas perguntas, com uma avaliação e um comentário, enviado automaticamente pelo sistema de tickets quatro horas após a resolução, para todo ticket. Uma versão por mensagem de texto é oferecida à equipe dos turnos. O relatório mensal agora mostra o CSAT com a taxa de resposta, o intervalo de confiança, a mistura de respondentes contra a mistura de usuários e os cinco principais temas dos comentários.

Em dois meses, a taxa de resposta sobe para cerca de 11% e o CSAT cai para 84%. Os temas dos comentários mostram "tive de ligar de novo" e "a correção não durou" como as duas principais reclamações, concentradas nos sistemas clínicos. O chefe de TI diz ao conselho que a pontuação antiga refletia quem respondia e que a nova é um guia melhor. A equipe de produto acrescenta um item de backlog para corrigir a falha recorrente por trás das ligações repetidas, e a central de serviços começa a contatar, em até um dia útil, cada usuário que dá uma avaliação 1 ou 2. No trimestre seguinte, a taxa de contatos repetidos dos sistemas clínicos cai, e a proporção de comentários "tive de ligar de novo" cai junto. A equipe registra a decisão em seu registro e não define uma meta de CSAT.

## Ágil, IA, automação e análise

### Ágil

Peça feedback continuamente e em pequenas quantidades e reveja os comentários com as partes interessadas em cada conversa regular de melhoria. O cuidado é que a fadiga de pesquisas reduz as taxas de resposta e enviesa quem responde.

### IA

A IA pode resumir comentários e sentimento em volume, e as interações assistidas por IA podem ser avaliadas de modo diferente das humanas. Relate separadamente a satisfação dos contatos tratados por IA e por humanos, pareie as pontuações com os temas dos comentários e peça a uma pessoa que leia uma amostra. O cuidado é que um modelo de sentimento pode interpretar mal o tom ou o idioma; por isso confira-o contra uma amostra manual.

### Automação

Dispare as pesquisas automaticamente em um momento escolhido e meça o processo de pesquisa pela taxa de resposta e pela mistura de respondentes. O cuidado é que pesquisas automáticas depois de apenas contatos bem-sucedidos enviesam a pontuação para cima.

### Análise

Mostre as pontuações com a contagem de respostas e a mistura de respondentes e leia os comentários antes dos números. A decisão informada é quais jornadas melhorar. O cuidado é que pontuações sobre poucas respostas se movem muito; por isso mostre a contagem.

## Olhar setorial

**Startup.** O contato próximo com os usuários faz de conversas curtas algo melhor que pesquisas no começo. Acrescente uma pesquisa de uma pergunta quando o volume crescer e continue lendo todo comentário. Resista ao impulso de publicar uma pontuação antes de ter respostas suficientes para significar alguma coisa.

**Pequena empresa.** Um único cliente descontente pode importar mais que uma pontuação. Use a pesquisa como um estímulo para conversar com as pessoas e guarde registros dos acompanhamentos. Os relatórios de satisfação fornecidos por fornecedores merecem ceticismo quanto ao método.

**Grande empresa.** A escala traz segmentos e a tentação de consolidar. Mantenha as pontuações por serviço e público, publique o método e evite tirar a média de serviços diferentes em um só número. Use uma plataforma de pesquisa estável com envio automático e trate com cautela qualquer classificação entre equipes.

**Governo e setor público.** Os órgãos públicos muitas vezes têm obrigações formais de coletar feedback dos usuários e publicar resultados, além de deveres de acessibilidade e privacidade. Ofereça canais de pesquisa acessíveis, proteja a identidade dos respondentes e publique os métodos junto com os resultados. Onde uma cifra de satisfação aparece em um contrato ou em um relatório legal, defina-a exatamente e mostre a barreira de proteção ao lado (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos diretos são a ferramenta de pesquisa, que muitos sistemas de tickets já incluem, uma ou duas horas por mês para rever comentários e codificar temas e o tempo para acompanhar os usuários insatisfeitos. O custo maior é a disciplina de agir sobre o que se ouve. Não há necessidade de uma nova plataforma para começar.

O retorno aparece como correções que os usuários valorizam e desperdício evitado. Os comentários dizem onde está o atrito; assim você pode remover as causas dos contatos repetidos e das correções que falham em vez de acrescentar pessoal para tratá-los. Uma visão melhor de quem não responde protege você de decisões baseadas em poucos autosselecionados. Descreva o benefício em termos dos problemas encontrados e removidos e meça suas próprias linhas de base antes e depois: taxa de contatos repetidos, taxa de reabertura e tempo até a primeira resposta útil. Não use uma porcentagem inventada para justificar o programa. Se precisar de cifras, construa-as com os seus próprios dados.

## Antipadrões e armadilhas

- **Tratar a pontuação como meta.** Ela será atingida selecionando quem é perguntado ou orientando a resposta. Use-a como uma pergunta e pareie-a com comentários e medidas operacionais.
- **Pesquisar apenas depois de tickets fáceis.** Envie a toda interação elegível, automaticamente.
- **Classificar atendentes por CSAT.** Penaliza quem pega casos difíceis. Use visões de equipe e serviço e aprenda com os comentários.
- **Pedir uma nota melhor.** O acompanhamento de uma avaliação baixa deve visar a corrigir o problema. Não peça uma mudança.
- **Relatar uma pontuação sem taxa de resposta.** Mostre sempre quem respondeu e quantos.
- **Mudar a pergunta e manter a tendência.** Registre as mudanças e marque a quebra no gráfico.
- **Importar um benchmark sem seu método.** Compare primeiro com o seu próprio histórico.
- **Coletar comentários e nunca lê-los.** Ponha uma revisão no calendário e designe um responsável.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Instrumento e amostragem | Pesquisa ad hoc ocasional | Existe pesquisa para alguns serviços, enviada à mão | Pesquisa curta enviada automaticamente a todas as interações elegíveis | Regra de amostragem, mudanças de redação e exclusões registradas e revistas | Instrumentos alinhados entre equipes e fornecedores e revistos com os usuários |
| Qualidade dos dados | Apenas a pontuação | Taxa de resposta relatada | Taxa de resposta, mistura de respondentes e incerteza relatadas | Cobertura de respondentes gerida; codificação conferida por uma segunda pessoa | Visão compartilhada da experiência entre serviços, com usuários envolvidos na interpretação |
| Ação e acompanhamento | Pontuações relatadas, nada muda | Correções ocasionais a partir dos comentários | Acompanhamento de detratores com um tempo-alvo; temas acompanhados | Temas orientam trabalho de melhoria financiado e são ligados aos dados operacionais | Ciclo fechado entre equipes e fornecedores; os usuários veem o que mudou |

## Lista de verificação

- [ ] Cada pesquisa tem uma finalidade declarada e uma decisão que informa.
- [ ] As perguntas são curtas, neutras e incluem um comentário aberto.
- [ ] A pesquisa é enviada automaticamente a toda interação elegível ou a uma amostra aleatória documentada.
- [ ] A taxa de resposta e a mistura de respondentes são mostradas ao lado de toda pontuação.
- [ ] A incerteza é mostrada, e as amostras pequenas são relatadas como contagens.
- [ ] Nenhum atendente individual é classificado por satisfação.
- [ ] Uma pessoa nomeada acompanha as avaliações baixas em um prazo combinado.
- [ ] Os comentários são codificados em uma lista estável de temas e revistos mensalmente.
- [ ] As mudanças de redação e de amostragem são registradas e marcadas nos gráficos.
- [ ] Os respondentes são informados de como suas respostas são usadas, e os dados pessoais são protegidos.

## Prompts de IA

**Revise um instrumento de pesquisa.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Codifique comentários de pesquisa em temas.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Confira a representatividade.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Planeje um acompanhamento em ciclo fechado.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de satisfação antes de publicá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de pesquisa revista mantém seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- As pontuações de satisfação descrevem como um momento do serviço foi sentido; por isso ligue as pesquisas a eventos específicos e mantenha-as curtas.
- Relate sempre a taxa de resposta, a mistura de respondentes e a incerteza junto com a pontuação.
- Os comentários explicam os números; por isso leia-os todo mês e codifique-os em temas.
- Envie as pesquisas automaticamente e nunca peça aos usuários que mudem uma avaliação.
- Use a satisfação no nível da equipe e do serviço, nunca para classificar pessoas, e trate os benchmarks externos com cuidado.
- Feche o ciclo: as pessoas que relatam uma experiência ruim devem receber um retorno e ver mudança.

## Referências e leituras complementares

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Satisfação do cliente](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Metodologia de pesquisa](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Escala de Likert](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Viés de resposta](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margem de erro](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Intervalo de confiança](https://en.wikipedia.org/wiki/Confidence_interval).
