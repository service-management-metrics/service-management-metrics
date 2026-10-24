# Estruturas de medição

**Uma estrutura de medição é um modo de decidir quais números merecem um lugar na página, e as melhores começam todas por um objetivo e uma pergunta; por isso escolha a estrutura mais leve que mantenha cada métrica ligada a uma decisão.**

## Visão geral e motivação

Uma equipe que quer medir o próprio trabalho encontra logo de início um problema: há milhares de números possíveis e nenhuma regra para escolher entre eles. Uma estrutura de medição fornece a regra. Ela nomeia um ponto de partida (um objetivo, uma estratégia, um punhado de condições críticas) e descreve como ir desse ponto a um pequeno conjunto de medidas que as pessoas vão ler e sobre as quais vão agir. As estruturas diferem no vocabulário, mas compartilham um mesmo propósito: manter cada número ligado a uma razão para existir.

Este tópico cobre cinco ideias que aparecem em quase toda organização que opera serviços. A primeira é a abordagem Goal-Question-Metric (GQM), desenvolvida pelo pesquisador de engenharia de software [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) e colegas. Ela parte de um objetivo, faz as perguntas que mostrariam se o objetivo está sendo atingido e só então escolhe as métricas. A segunda são os [objetivos e resultados-chave](https://en.wikipedia.org/wiki/OKR) (OKRs), um método de definição de metas popularizado na Intel por Andrew Grove e depois no Google por John Doerr. Um objetivo diz aonde a equipe quer chegar, e um punhado de resultados-chave diz como ela saberá que chegou. A terceira é o [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), apresentado por Robert Kaplan e David Norton em 1992, que pede às organizações que olhem juntos os resultados financeiros, os clientes, os processos internos e o aprendizado e crescimento, de modo que nenhuma visão isolada domine.

A quarta e a quinta ideias são mais antigas e mais simples. Um [fator crítico de sucesso](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) é uma condição que precisa ser verdadeira para que um objetivo seja atingido, e um [indicador-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) é uma medida de quão bem essa condição se sustenta. O ITIL, a estrutura de gestão de serviços de TI (ITSM) publicada pela Axelos e depois pela PeopleCert, usa exatamente esse pareamento. No ITIL 4 (a versão de uso generalizado em outubro de 2026), as orientações sobre medição e relatório e sobre melhoria contínua dizem aos profissionais que definam CSFs para um serviço ou prática e depois escolham KPIs que mostrem o progresso em relação a eles. A abordagem mais ampla do [ITIL](https://en.wikipedia.org/wiki/ITIL) é resumida aqui, não reproduzida.

As visões ágil e ITIL se encontram de forma útil nesta área. A prática ágil favorece ciclos curtos de aprendizado: a equipe formula uma hipótese, tenta algo, inspeciona o resultado e se ajusta. A prática do ITIL favorece serviços definidos, níveis de serviço acordados e um processo gerenciado de melhoria. Uma estrutura como o GQM combina com o hábito ágil de perguntar o que a equipe quer aprender. Um balanced scorecard combina com a necessidade do ITIL de mostrar aos líderes um quadro completo da saúde do serviço. Os OKRs ficam entre os dois, porque são revistos em ciclos curtos mas escritos na linguagem de resultados que os órgãos de governança entendem.

Três termos se repetem neste tópico. Um **objetivo** é uma declaração de um resultado pretendido para um público nomeado. Uma **pergunta** é algo que você precisaria saber para dizer se o objetivo está sendo atingido. Uma **métrica** é uma forma definida de contar ou cronometrar algo que ajuda a responder a uma pergunta. As estruturas diferem no tratamento do terceiro termo, mas todas insistem que ele vem por último, depois do objetivo e da pergunta. Essa ordem é a mais forte proteção contra a falha descrita na lei de Goodhart (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas), em que um número substitui o propósito a que foi escolhido para servir.

Nenhuma estrutura corrige uma má escolha de objetivo, e nenhuma elimina a necessidade de barreiras de proteção. Trate uma estrutura como um andaime para uma conversa e espere mudá-la conforme o trabalho muda. Os KPIs em particular podem virar [métricas de vaidade](https://en.wikipedia.org/wiki/Vanity_metric), contagens que só sobem e nunca informam uma decisão, como o total de tickets atendidos. As razões mais amplas para medir estão expostas em outro lugar (veja o tópico 1.1, Por que medir a gestão de serviços).

### Como as estruturas diferem

As estruturas respondem a perguntas ligeiramente diferentes, e misturá-las é comum. Use a tabela abaixo como mapa.

| Estrutura | Ponto de partida | Saída típica | Melhor uso | Horizonte típico |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Um objetivo específico para um produto, processo ou serviço | Uma árvore de objetivos, perguntas e métricas | Projetar um programa de medição para uma equipe ou serviço | Semanas a meses |
| OKRs | Um objetivo ambicioso para o próximo período | Poucos objetivos, cada um com resultados-chave mensuráveis | Alinhar equipes em torno de resultados e concentrar esforço | Trimestre |
| Balanced scorecard | A estratégia de uma organização | Objetivos e medidas em quatro perspectivas | Mostrar aos líderes uma visão completa e ligar estratégia a operações | Ano |
| CSFs e KPIs | Um serviço, prática ou objetivo | Poucas condições que precisam valer, cada uma com indicadores | Operar uma prática ITIL definida e relatar sua saúde | Contínuo, revisto regularmente |

## Princípios-chave

- **Parta do objetivo, depois da pergunta, depois da métrica.** Uma métrica escolhida primeiro não tem como ser julgada útil.
- **Torne explícitos o público e a decisão.** Todo objetivo nomeia quem se beneficia, e toda métrica nomeia quem vai agir sobre ela.
- **Mantenha o conjunto pequeno.** Poucas medidas lidas e confiáveis valem mais do que uma longa lista folheada.
- **Equilibre a visão.** Pareie velocidade com qualidade, custo com experiência e produção de curto prazo com aprendizado de longo prazo, para que nenhuma estrutura premie uma à custa da outra.
- **Trate as metas como hipóteses.** Um objetivo e seus números são uma aposta que pode estar errada; por isso reveja-os em um calendário e mude-os com uma razão registrada.
- **Use as estruturas para descrever equipes e serviços, nunca para classificar pessoas.** Scorecards, resultados-chave e KPIs pertencem a uma equipe ou a um serviço.
- **Combine estruturas de propósito.** Diga qual estrutura é dona de qual decisão, para que o mesmo número não seja definido de três maneiras.

## Definições de métricas

As métricas abaixo medem a saúde de uma estrutura em uso, não a saúde de um serviço. Mostram se os objetivos e as métricas continuam ligados e se aplicam qualquer que seja a estrutura escolhida por uma equipe. As contagens são por equipe ou serviço, nunca por pessoa.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rastreabilidade de objetivos | Proporção das métricas relatadas que remontam a um objetivo e a uma pergunta escritos | métricas com objetivo e pergunta registrados / métricas relatadas | porcentagem | Registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) | Medição e relatório; melhoria contínua | Objetivo de entrega; objetivo do produto | Trimestral |
| Distribuição das notas dos resultados-chave | Dispersão das notas de fim de período dos resultados-chave, mostrada como a proporção em cada faixa | resultados-chave em cada faixa de nota (por exemplo 0,0 a 0,3, 0,4 a 0,6, 0,7 a 1,0) / resultados-chave avaliados no período; exclui resultados-chave abandonados com razão registrada | porcentagem por faixa | Ferramenta de acompanhamento de OKRs ou documento da equipe | Melhoria contínua; gestão de nível de serviço | Planejamento trimestral; revisão | Trimestral |
| Cobertura de perspectivas | Proporção das quatro perspectivas do balanced scorecard que têm ao menos uma medida com valor atual | perspectivas com uma medida relatada no último período / quatro | porcentagem | Scorecard ou painel | Medição e relatório; governança do sistema de valor de serviço | Revisão com partes interessadas (visões de cliente e de aprendizado) | Trimestral |
| Idade da revisão do indicador | Tempo desde que a definição e a meta de cada KPI foram revistas pela última vez | data da revisão menos a data da última revisão; o relógio começa na última revisão registrada e para na data do relatório; relate a mediana e a mais antiga | dias | Registro de mudanças do registro de métricas | Melhoria contínua; medição e relatório | Ações de retrospectiva | Trimestral |
| Cobertura de CSF por KPI | Proporção dos fatores críticos de sucesso com ao menos um KPI atualmente relatado | CSFs com um KPI atual / CSFs definidos para o serviço ou prática | porcentagem | Documentação da prática ou do serviço; registro de métricas | A abordagem de CSFs e KPIs nos guias de prática do ITIL | Definição de pronto; acordos de trabalho | Trimestral |

A rastreabilidade de objetivos só conta uma métrica como rastreada se o objetivo e a pergunta estiverem escritos e o público estiver nomeado; um objetivo sozinho não basta. A distribuição das notas dos resultados-chave deve ser lida como uma dispersão, e não como uma média, porque uma média esconde uma equipe que subestimou tudo e uma equipe que fracassou em tudo. A idade da revisão do indicador exclui as métricas aposentadas no período.

## Recomendações

### Escolha e combine estruturas

**1. Escolha a menor estrutura que faça o trabalho.** Uma única equipe de serviço com um problema de melhoria raramente precisa de um balanced scorecard completo. O GQM muitas vezes basta, porque tem um ponto de parada claro: uma árvore de um objetivo, algumas perguntas e algumas métricas. Acrescente estrutura apenas quando uma decisão a exigir.

**2. Escreva os objetivos em três partes: propósito, objeto e ponto de vista.** Os objetivos do GQM são tradicionalmente formulados como melhorar uma qualidade declarada de um objeto declarado a partir de um ponto de vista declarado, por exemplo melhorar a clareza das atualizações de incidentes para as pessoas que dependem da central de serviços. A estrutura obriga a dizer quem se beneficia. Se um objetivo não tem ponto de vista, provavelmente é um slogan.

**3. Faça perguntas que uma pessoa pudesse responder com uma pequena história.** "Com que rapidez os usuários recebem retorno depois de relatar um problema?" é uma boa pergunta, porque você consegue imaginar uma resposta e a evidência por trás dela. "Qual é o nosso desempenho?" não é. Mire em três a cinco perguntas por objetivo e espere que algumas sejam respondidas por entrevistas ou amostras, e não por um número.

**4. Escolha as métricas por último, e mais de uma.** Para cada pergunta, nomeie as métricas candidatas, a fonte de dados e o vetor de manipulação (veja o tópico 1.5, Fontes de dados e instrumentação). Inclua ao menos uma métrica em tensão com as outras, como o tempo de resposta ao lado da taxa de reabertura. Se uma pergunta não tem métrica viável, diga isso e planeje uma verificação qualitativa.

**5. Decida qual estrutura é dona de qual decisão.** Um arranjo comum é o balanced scorecard, ou equivalente, guardar as poucas medidas que os líderes revisam, os OKRs guardarem as melhorias que uma equipe escolheu para este trimestre e os CSFs e KPIs descreverem a saúde corrente de uma prática. Escreva esse arranjo no registro de métricas para que cada número tenha uma única definição e um único responsável.

### Use bem os OKRs

**6. Escreva os objetivos como resultados e os resultados-chave como evidência.** Um objetivo como "Os usuários têm seus problemas resolvidos sem precisar nos cobrar" é um resultado. Um resultado-chave como "a mediana do tempo até uma primeira atualização útil cai de [valor atual] para [valor-alvo]" é evidência. Resultados-chave que parecem tarefas ("lançar um novo portal") são atividades, não resultados. Se você não consegue dizer o que mudaria para um usuário, o resultado-chave não está pronto.

**7. Mantenha os OKRs no nível de equipe e de serviço.** Defini-los para indivíduos tende a transformá-los em listas de tarefas e em insumos de avaliação de desempenho e convida à manipulação que a lei de Goodhart prevê. Deixe a equipe escrever seus próprios resultados-chave às claras e deixe as equipes verem as das outras. Evite cascatas em que cada nível precisa reafirmar o nível acima.

**8. Trate a nota como uma conversa, não como uma avaliação.** Equipes que tratam uma nota perfeita como objetivo escrevem resultados-chave tímidos. Uma distribuição de notas que se agrupa no topo sugere subestimação, e uma que se agrupa na base sugere que as metas eram fantasia. Reveja a dispersão a cada trimestre e pergunte o que a equipe aprendeu com cada erro.

### Use bem scorecards, CSFs e KPIs

**9. Defina os CSFs antes dos KPIs.** Um fator crítico de sucesso é uma declaração do que precisa ser verdadeiro, como "os usuários conseguem achar e usar o artigo de autoatendimento certo". Um KPI mostra então se é verdade. Começar pelo KPI convida a contar o que é fácil de contar. Pergunte, para cada CSF: "se isto deixasse de ser verdade, quão rápido perceberíamos, e a partir de quê?". A resposta é o KPI.

**10. Use as perspectivas do scorecard para evitar uma visão unilateral.** As quatro perspectivas clássicas são financeira, cliente, processo interno e aprendizado e crescimento. As organizações de serviço muitas vezes as rebatizam, por exemplo custo, experiência do usuário, saúde operacional e capacidade. O que importa é que cada perspectiva tenha ao menos uma medida com valor atual e que o declínio de uma seja lido junto com as outras (veja o tópico 6.5, Realização de valor e resultados de negócio).

**11. Ligue estratégia e medidas com um mapa simples.** Um [mapa estratégico](https://en.wikipedia.org/wiki/Strategy_map) traça setas da capacidade para o processo, para o cliente e para os resultados financeiros. É útil para a conversa e ruim como calculadora. Desenhe-o, discuta as setas e só então escolha algumas medidas. Não tente tornar o diagrama quantitativamente exato.

**12. Reveja as estruturas em um calendário.** Marque uma revisão trimestral em que a equipe pergunte, de cada objetivo, resultado-chave e KPI, se ainda importa e se ainda leva as pessoas à ação certa. Aposente o que já não serve e registre o motivo. Métricas que sobrevivem a seus objetivos viram métricas de vaidade.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Rastreabilidade de objetivos | Escrever um objetivo e uma pergunta depois que a métrica já existe, para fazer o registro parecer completo; objetivos vagos que justificam qualquer métrica | Amostrar cinco entradas por trimestre e perguntar se a pergunta poderia ter levado a outra métrica; conferir se o público e a decisão estão nomeados |
| Distribuição das notas dos resultados-chave | Escrever resultados-chave fáceis para que as notas se agrupem perto de 1,0; reavaliar com generosidade; abandonar resultados-chave que vão mal sem registrar por quê | Contagem de resultados-chave abandonados com suas razões; comparar os resultados-chave com os resultados do período anterior; revisar a ambição mediana com a liderança |
| Cobertura de perspectivas | Acrescentar uma medida simbólica a uma perspectiva para que conte como coberta; escolher medidas que não podem se mover | Conferir se cada medida de perspectiva mudou de valor no último ano e tem uma decisão escrita associada |
| Idade da revisão do indicador | Registrar uma revisão sem ler o indicador; mudar só a data | Exigir um resultado escrito (mantido, alterado, aposentado) em cada revisão e amostrar o registro |
| Cobertura de CSF por KPI | Atribuir um KPI sem relação com o CSF para chegar à cobertura total; escolher um KPI que não consegue revelar uma falha | Perguntar, para cada par, que leitura mostraria que o CSF está falhando; procurar KPIs que nunca ficaram vermelhos |

Uma leitura saudável é aquela em que os objetivos mudam quando o mundo muda, alguns resultados-chave são perdidos por razões declaradas e o número de métricas relatadas está caindo ou estável, em vez de crescer. Se tudo está verde, as notas se agrupam no topo e ninguém consegue nomear uma métrica aposentada neste ano, a estrutura virou decoração.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Goal-Question-Metric | Liga cada métrica a uma razão; fácil de explicar; funciona em escala de equipe | Exige uma sessão facilitada; pode virar exercício de papel; diz pouco sobre prioridade entre objetivos |
| OKRs | Concentra um trimestre em poucos resultados; visíveis entre equipes; combinam com ciclos curtos de planejamento | É fácil escrever resultados-chave como tarefas; as notas podem ser manipuladas; OKRs individuais se confundem com avaliação de desempenho |
| Balanced scorecard | Dá aos líderes uma visão completa; liga estratégia a operações | Pesado de manter; as perspectivas podem virar caixas a preencher; lento para refletir mudanças |
| CSFs e KPIs | Familiares na prática do ITIL; bom encaixe para relatar um serviço em operação | Derivam facilmente para KPIs de vaidade; os indicadores ficam obsoletos sem revisão |
| Nenhuma estrutura | Leve e rápido para uma equipe muito pequena | As métricas se acumulam sem razão; as discussões sobre o que medir se repetem |
| Várias estruturas juntas | Cada decisão recebe a ferramenta que combina | Definições duplicadas; confusão sobre qual número é o autoritativo |

Escolha o peso da estrutura de acordo com o que está em jogo. Um pequeno serviço interno precisa de um objetivo, três perguntas e algumas métricas guardadas em uma página. Um serviço entregue sob contrato pode precisar de KPIs definidos no nível de um acordo de nível de serviço (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Perguntas para discutir com sua equipe

**1. A que objetivo serve cada uma das nossas métricas relatadas, e quem perceberia se parássemos de relatá-la?**
Liste as métricas num quadro e escreva o objetivo ao lado de cada uma. Onde o objetivo faltar, pergunte quem pediu a métrica e por quê. Algumas se revelarão herdadas de um projeto anterior e poderão ser aposentadas. O facilitador deve tratar uma métrica sem objetivo como uma descoberta normal, e não como um fracasso.

**2. Se só pudéssemos responder a três perguntas sobre o nosso serviço, quais seriam?**
Isso força uma ordenação das perguntas antes das métricas. Peça a cada pessoa que escreva três e depois agrupe-as. Compare o agrupamento com o painel que a equipe tem hoje. As lacunas entre os dois costumam ser o resultado mais útil da sessão.

**3. Quais dos nossos resultados-chave descrevem um resultado para os usuários e quais descrevem trabalho que planejamos fazer?**
Leia cada resultado-chave em voz alta e pergunte se um usuário perceberia caso ele fosse atingido. Se a resposta for não, reescreva-o como resultado ou mova-o para o plano. O facilitador pode lembrar que tarefas são aceitáveis, mas pertencem a um backlog. Termine combinando um resultado-chave a reescrever neste trimestre.

**4. Onde as nossas quatro perspectivas do scorecard discordam, e o que isso nos diz?**
Peça ao grupo que procure um período recente em que uma perspectiva melhorou enquanto outra piorou, como o custo caindo enquanto a experiência despencava. Discuta a causa e se alguém viu aquilo chegar. Isso cria o hábito de ler as medidas em conjunto. Registre qualquer perspectiva sem medida e decida se vai acrescentar uma ou dizer com clareza que ela está fora do escopo.

**5. Para cada fator crítico de sucesso, que leitura nos diria que ele está falhando?**
Escolha dois CSFs e nomeie o KPI; depois pergunte que valor desencadearia uma conversa. Se a equipe não souber dizer, o KPI não está fazendo seu trabalho. Procure KPIs que nunca mudaram de cor, o que costuma indicar um limiar frouxo demais. O facilitador deve perguntar qual seria o vetor de manipulação do KPI.

**6. Qual estrutura deve ser dona de qual decisão, e onde definimos hoje o mesmo número duas vezes?**
Rastreie uma métrica, como o tempo de resolução de incidentes, por todos os relatórios em que ela aparece. Compare as definições. Diferenças de relógio ou de exclusões são comuns e muitas vezes explicam discussões entre equipes. Combinem um responsável e uma definição e registrem no registro.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega encontram as estruturas principalmente como OKRs e, se tiverem sorte, como GQM. A equipe ganha mais quando escreve os próprios objetivos e resultados-chave, ligados ao que os seus usuários precisam, e quando mantém as medidas de trabalho separadas das que os líderes veem. A equipe deve desconfiar de resultados-chave que premiam produção, como pontos de história ou releases, porque convidam aos comportamentos que as estruturas deveriam evitar (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

### Equipes de serviço e operações

As equipes de operações encontram as estruturas principalmente como CSFs e KPIs dentro das práticas do ITIL, além de metas de nível de serviço acordadas com os clientes. Elas se beneficiam de definir o CSF em linguagem simples antes de escolher o KPI, de relatar percentis para medidas de tempo e de manter as medidas de confiabilidade, como indicadores e objetivos de nível de serviço, ao lado da experiência dos usuários (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Também devem resistir à tentação de manter KPIs definidos anos atrás e que já não se relacionam com o modo como o serviço é usado.

### Liderança e governança

Os líderes escolhem as estruturas, em geral pedindo um scorecard ou OKRs, e o que fazem com os números decide como as estruturas se comportam. Um líder que pune um resultado-chave perdido ensina as equipes a escrever os fáceis. Um líder que pergunta o que a equipe aprendeu ensina-as a escrever os honestos. Os órgãos de governança devem esperar um registro de métricas, um pequeno número de medidas relatadas e uma revisão regular de se a própria estrutura está funcionando (veja o tópico 11.4, Modelo de maturidade para programas de métricas).

### Clientes e usuários

Clientes e usuários raramente veem a estrutura, apenas seus efeitos. Uma bem projetada aparece como serviços que melhoram nos modos que eles pediram e como relatórios honestos sobre o que não melhorou. Uma ruim aparece como relatórios verdes que não combinam com a experiência. Inclua um ponto de vista do usuário em todo objetivo e deixe o feedback dos usuários ficar na perspectiva do cliente do scorecard ao lado dos números operacionais (veja o tópico 6.2, Acordos de nível de experiência).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte mantém uma plataforma de suporte ao cliente e um portal de autoatendimento, com várias equipes de produto e um pequeno grupo de operações de serviço. Todos os números são ilustrativos.

A liderança pede um balanced scorecard e, em separado, OKRs trimestrais. Em um trimestre a equipe tem 31 medidas relatadas, e ninguém sabe dizer por que metade delas existe. O responsável pelo serviço conduz uma sessão de meio dia usando GQM sobre um objetivo: "Melhorar a clareza da ajuda para clientes que não conseguem concluir um pagamento, do ponto de vista do cliente".

A sessão produz quatro perguntas. Os clientes encontram o artigo de ajuda certo? Precisam entrar em contato com o suporte depois de lê-lo? Quanto tempo leva para resolver um problema de pagamento quando entram em contato com o suporte? Sentem que a resposta foi clara? Das 31 medidas, nove se mapeiam para essas perguntas. Três novas são necessárias: sucesso na busca de artigos, taxa de contato após a visualização de um artigo e uma pesquisa de uma pergunta após a resolução. As outras 22 são marcadas para aposentadoria, com a concordância do responsável.

O OKR do trimestre é escrito como resultado. O objetivo é "Os clientes resolvem problemas de pagamento sem precisar nos cobrar". Os três resultados-chave são a mediana e o 90º percentil do tempo até a resolução, a taxa de contato após visualizações de artigos e o resultado da pesquisa sobre clareza. O scorecard mantém a perspectiva do cliente apontando para as mesmas medidas, de modo que há uma definição, e não duas.

No meio do trimestre aparece um risco de manipulação. A taxa de contato após visualizações de artigos cai bruscamente, o que parece sucesso. Um revisor amostra 20 sessões e descobre que uma reformulação moveu o link "fale conosco" três telas mais fundo. Menos pessoas chegam ao suporte, e a pesquisa mostra notas de clareza mais baixas. A equipe acrescenta o abandono de busca e os comentários da pesquisa como barreiras de proteção e restaura o link.

No fim do trimestre as notas dos resultados-chave são 0,6, 0,8 e 0,5, que a equipe apresenta como são. A liderança pergunta o que a equipe aprendeu, não por que as notas não foram mais altas. A decisão, registrada no registro de decisões, é manter o objetivo por um segundo trimestre, substituir a taxa de contato pela proporção de clientes que resolvem o problema na primeira visita e aposentar mais seis medidas do scorecard.

## Ágil, IA, automação e análise

### Ágil

Os objetivos e as perguntas devem ser revisitados à medida que a equipe aprende; por isso escolha uma estrutura leve o bastante para ser revista nas revisões regulares de melhoria com as partes interessadas. Uma abordagem prática é escrever o objetivo, a pergunta e dois ou três indicadores em uma página e revê-la com frequência. O cuidado é que uma estrutura usada como exercício único de projeto fica obsoleta, e o painel se afasta dos objetivos.

### IA

Acrescente a IA à estrutura de forma explícita: a que objetivo serve uma prática assistida por IA, que pergunta sua medida responde e que medida de qualidade é pareada com ela. Alinhar-se a um vocabulário de governança, como o NIST AI Risk Management Framework, pode ajudar, mas confira o que o texto atual diz antes de citá-lo. O cuidado é que uma estrutura que só mede a adoção de IA premiará o uso por si só.

### Automação

Use a automação para manter atual a rastreabilidade do objetivo ao indicador, por exemplo sinalizando indicadores sem objetivo ligado. Inclua a automação na estrutura como algo a medir por seus resultados e suas falhas. O cuidado é que uma estrutura pode virar um grande relatório automatizado que ninguém lê.

### Análise

Escolha indicadores que os dados possam sustentar e diga que decisão cada um informa. Quando várias estruturas se aplicam, como objetivos e resultados-chave, um balanced scorecard e os fatores críticos de sucesso do ITIL, mapeie-as para um único conjunto em vez de manter três. O cuidado é que uma estrutura não corrige dados ruins; por isso combine a escolha dos indicadores com as verificações de qualidade de dados do tópico 1.5, Fontes de dados e instrumentação.

## Olhar setorial

**Startup.** Uma startup costuma precisar de um objetivo, três perguntas e um punhado de métricas, guardados em uma única página. Os OKRs são comuns e funcionam bem quando escritos pela equipe que fará o trabalho. Resista a acrescentar um scorecard até que investidores ou clientes o exijam.

**Pequena empresa.** Os recursos são escassos; por isso escolha uma estrutura e use-a com leveza. CSFs e KPIs escritos para as duas ou três coisas que o negócio não pode se dar ao luxo de errar muitas vezes bastam. Prefira o feedback direto dos clientes a uma pontuação elaborada.

**Grande empresa.** Várias estruturas costumam coexistir, o que faz da propriedade das definições o principal desafio. Mantenha um registro, designe qual estrutura guarda qual número e faça uma revisão anual de todo o arranjo. Cuidado com cascatas que obrigam toda equipe a reafirmar os objetivos corporativos com suas próprias palavras.

**Governo e setor público.** Relatórios obrigatórios e níveis de serviço contratuais funcionam como KPIs fixos. Trate-os como dados e use GQM ou OKRs para o trabalho de melhoria em torno deles. A prestação de contas pública eleva o que está em jogo com um número enganoso; por isso publique as definições e seja aberto sobre as mudanças (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo de uma estrutura é sobretudo tempo: uma sessão facilitada para projetar medidas, uma breve revisão trimestral e a manutenção de um registro. Existem softwares para OKRs ou scorecards, mas um documento ou uma planilha costuma bastar em pequena escala. O custo maior é a atenção da liderança, já que uma estrutura que os líderes não usam vira relatório por relatório.

O retorno vem de medidas menos numerosas e melhores. As equipes que sabem dizer por que cada número existe gastam menos tempo produzindo relatórios que ninguém lê, discutem menos sobre definições e percebem mais cedo quando uma medida deixou de informar decisões. Em vez de citar uma cifra, meça suas próprias linhas de base: o número de métricas relatadas, a proporção com um objetivo registrado e o tempo gasto preparando relatórios recorrentes, antes e depois de adotar a estrutura. Um tratamento mais completo do retorno sobre o investimento está em outro lugar (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Métricas antes dos objetivos.** Partir dos dados que você tem produz um painel do que é fácil de contar. Escreva primeiro o objetivo e a pergunta e só então veja que dados se encaixam.
- **OKRs como listas de tarefas.** Resultados-chave que nomeiam atividades fazem todo trimestre parecer ocupado e nada dizem sobre resultados. Reescreva cada um como evidência que um usuário perceberia.
- **OKRs e scorecards como metas individuais.** Convidam à manipulação e desestimulam a ajuda entre pessoas. Mantenha-os no nível de equipe e de serviço.
- **Um scorecard com perspectivas vazias ou simbólicas.** Preencher todas as caixas com alguma coisa não é o mesmo que ver o todo. Exija um valor atual e uma decisão para cada uma.
- **KPIs que nunca mudam.** Se um indicador está verde há anos, seu limiar provavelmente está errado ou ele mede algo que não pode falhar. Pergunte que leitura mostraria um problema e depois redefina-o.
- **Estruturas empilhadas sem responsável.** Três estruturas definindo a mesma medida de três maneiras criam discussões. Nomeie um responsável e uma única definição.
- **Premiar a nota.** Se uma nota perfeita de OKR rende elogio ou pagamento, as equipes escreverão resultados-chave fáceis. Premie o aprendizado honesto e as boas perguntas.
- **A estrutura como cerimônia.** Um dia de oficinas que produz um pôster plastificado não muda nada. Guarde o resultado no registro e reveja-o em um calendário.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Objetivos e perguntas | Métricas escolhidas porque os dados existem | Algumas equipes escrevem objetivos antes das métricas | Um formato comum de objetivo e pergunta; toda métrica relatada remonta a um | A rastreabilidade é revista e as lacunas levam a trabalho financiado | Objetivos escritos em conjunto com clientes e fornecedores e revistos conforme as condições mudam |
| Uso da estrutura | Ad hoc; sem estrutura declarada | As equipes adotam estruturas diferentes com vocabulário diferente | Um arranjo escrito diz qual estrutura é dona de qual decisão | Os resultados da estrutura são revistos e as partes sem uso são abandonadas | Estruturas alinhadas entre equipes e fornecedores com um único conjunto de definições |
| Indicadores e pontuação | KPIs definidos uma vez e nunca revistos | Alguns KPIs têm responsáveis e limiares | KPIs e resultados-chave têm responsáveis, definições e barreiras de proteção | Notas e indicadores acompanhados ao longo do tempo e revistos quanto à manipulação a cada trimestre | Indicadores aposentados e substituídos rotineiramente, com mudanças ligadas a resultados |
| Uso nas decisões | Relatórios são produzidos e ignorados | Os líderes pedem números quando algo dá errado | As revisões registram decisões que os números influenciaram | Perguntas de aprendizado são padrão; metas perdidas são discutidas sem culpa | O planejamento de melhoria entre equipes usa os mesmos objetivos e medidas compartilhados |

## Lista de verificação

- [ ] Toda métrica relatada remonta a um objetivo escrito, a uma pergunta e a um público nomeado.
- [ ] Um registro de métricas guarda qual estrutura é dona de cada métrica e sua definição única.
- [ ] Os objetivos são escritos com um propósito, um objeto e um ponto de vista.
- [ ] Cada resultado-chave descreve um resultado que alguém perceberia, não uma tarefa.
- [ ] OKRs, medidas de scorecard e KPIs pertencem a equipes ou serviços, não a indivíduos.
- [ ] Cada fator crítico de sucesso tem ao menos um KPI atual e uma leitura declarada que mostraria a falha.
- [ ] Cada perspectiva do scorecard tem uma medida com valor atual.
- [ ] Toda métrica tem um vetor de manipulação e uma barreira de proteção nomeados.
- [ ] Uma revisão trimestral pergunta se cada objetivo, resultado-chave e KPI ainda importa.
- [ ] Pelo menos uma métrica ou indicador foi aposentado ou redesenhado no último ano, com a razão registrada.

## Prompts de IA

**Transforme um objetivo em perguntas e métricas candidatas.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Revise rascunhos de OKRs.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Mapeie fatores críticos de sucesso para KPIs.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Audite um scorecard quanto ao equilíbrio.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico é dono de uma métrica e sua barreira de proteção pareada antes de colocá-la numa estrutura.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica baseada em estrutura traz sua definição, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Uma estrutura decide quais métricas merecem um lugar, e a regra comum é partir de um objetivo e de uma pergunta e só depois escolher a métrica.
- O Goal-Question-Metric serve para projetar medidas de uma equipe, os OKRs para concentrar um trimestre, os scorecards para visões completas da liderança e os CSFs com KPIs para operar uma prática do ITIL.
- Use a estrutura mais leve que funcione e diga qual é dona de qual número.
- Toda estrutura pode ser manipulada; por isso pareie cada métrica com uma barreira de proteção e reveja o conjunto em um calendário.
- Mantenha as estruturas no nível de equipe e de serviço, nunca como metas individuais.
- Aposente objetivos, resultados-chave e indicadores que já não informam decisões.

## Referências e leituras complementares

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Fator crítico de sucesso](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Indicador-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Mapa estratégico](https://en.wikipedia.org/wiki/Strategy_map).
