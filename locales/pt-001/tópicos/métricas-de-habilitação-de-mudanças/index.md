# Métricas de habilitação de mudanças

**As métricas de habilitação de mudanças mostram se a sua organização deixa as mudanças benéficas fluírem com segurança e rapidez; por isso meça como as mudanças são classificadas, quanto tempo esperam por uma decisão e quanto dessa decisão o pipeline toma automaticamente, e pareie toda medida de velocidade com uma visão do risco.**

## Visão geral e motivação

Todo serviço muda. As equipes acrescentam funcionalidades, aplicam patches em bibliotecas, trocam certificados, redimensionam bancos de dados e aposentam componentes antigos. Na estrutura do [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, a prática que governa isso se chama habilitação de mudanças (change enablement), e seu propósito declarado é maximizar o número de mudanças bem-sucedidas em serviços e produtos, garantindo que os riscos sejam avaliados corretamente, que as mudanças sejam autorizadas e que o cronograma de mudanças seja gerido. As edições anteriores do ITIL chamavam a prática de [gestão de mudanças](https://en.wikipedia.org/wiki/Change_management_(ITSM)), e muitas organizações ainda usam esse nome. O nome mais novo sinaliza uma mudança de ênfase: a prática existe para habilitar a boa mudança, e não para segurá-la.

Uma **mudança**, no ITIL 4, é a adição, a modificação ou a remoção de qualquer coisa que possa ter efeito direto ou indireto sobre os serviços. É um escopo mais amplo que uma implantação de código. Cobre edições de configuração, atualizações de infraestrutura, mudanças de acesso, ações de fornecedores e a documentação em que os operadores confiam. Uma equipe ágil costuma ver uma mudança como um pull request que vai ao ar. Uma equipe de operações de serviço a vê como uma entrada em um cronograma. Ambas as visões são válidas, e as métricas deste tópico funcionam melhor quando descrevem o mesmo evento dos dois lados.

O ITIL 4 descreve três tipos de mudança, e as métricas deste tópico dependem deles. Confira a redação exata nas publicações atuais do dono da estrutura; este tópico resume o padrão amplamente documentado em outubro de 2026.

- Uma **mudança padrão** tem baixo risco e é bem compreendida. Segue um procedimento documentado e é pré-autorizada, de modo que não precisa de aprovação caso a caso.
- Uma **mudança normal** precisa de avaliação e autorização antes de prosseguir. A profundidade da avaliação cresce com o risco e o impacto.
- Uma **mudança emergencial** precisa acontecer com urgência, muitas vezes para restabelecer o serviço ou fechar uma vulnerabilidade séria. Segue um caminho acelerado, com revisão mais completa depois.

Outros termos se repetem abaixo. Uma **autoridade de mudanças** é a pessoa ou o grupo que detém o direito de aprovar uma mudança de determinado tipo. Um **comitê consultivo de mudanças (CAB)** é um grupo que revê as mudanças propostas e aconselha ou decide. O **lead time de aprovação** é o tempo que uma mudança espera por uma decisão de autorização. Um **percentil** é um valor abaixo do qual cai uma proporção declarada das observações; assim, o 85º percentil é o número que 85% das mudanças superam.

Por que medir tudo isso? A evidência publicada mais forte sobre o controle de mudanças vem do programa de pesquisa da DevOps Research and Assessment (DORA). Suas orientações relatam que a aprovação externa pesada, como um CAB ou a assinatura de um gerente sênior, está associada a pior desempenho na entrega de software e que não foi encontrada evidência de que uma revisão externa mais formal reduza a proporção de mudanças que falham. Recomenda a revisão por pares, os testes automatizados e as mudanças pequenas, com um papel estratégico para qualquer comitê central. São afirmações sobre associação em dados de pesquisa, não leis, e as páginas da DORA não dão tamanhos de efeito para a afirmação; por isso trate-as como uma forte razão para olhar os seus próprios dados, e não como veredicto sobre qualquer controle específico. O material sobre habilitação de mudanças do *Service Management Guide* resume a mesma pesquisa.

As visões ágil e ITIL se encontram na pergunta de onde o controle vive. Em um pipeline de entrega, grande parte da avaliação pode acontecer de forma contínua: um revisor aprova o código, os testes automatizados conferem o comportamento e a ferramenta de implantação grava o registro. Isso satisfaz a intenção da [separação de funções](https://en.wikipedia.org/wiki/Separation_of_duties) quando a revisão é registrada e o autor não pode aprovar o próprio trabalho. As métricas dizem se isso realmente está acontecendo ou se o pipeline é uma via rápida da qual a maioria das mudanças ainda sai para esperar numa fila.

Este tópico cobre o lado de fluxo e de controle da mudança: volume, mistura de tipos, tempo de espera e automação. Não cobre se as mudanças dão certo. A taxa de falha de mudanças, a parcela emergencial e as medidas de rollback e de hotfix pertencem ao tópico 4.4, Falhas de mudança e retrabalho, e as medidas DORA de vazão e de instabilidade estão no tópico 2.8, Métricas DORA. A frequência de implantação e de release está no tópico 4.5, Métricas de releases e implantação. O lado de incidentes de uma mudança ruim está no tópico 3.3, Tempo de resposta e de resolução de incidentes, e no tópico 3.4, Métricas de incidentes graves.

As métricas de mudança atraem rapidamente a [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): uma meta de tempo de aprovação convida a aprovações rápidas e vazias, e uma meta de parcela de mudanças padrão convida a reclassificar trabalho arriscado como rotina (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Ajuste o controle ao risco.** O objetivo é um controle proporcional: as mudanças de baixo risco seguem um caminho rápido e pré-autorizado, e as de alto risco recebem escrutínio real. Um único processo para tudo é lento para a maioria das mudanças e raso para as perigosas.
- **Meça a espera, não só o trabalho.** O lead time de aprovação costuma dominar o tempo que uma mudança pronta passa antes de chegar à produção. É invisível se ninguém registra quando a aprovação foi pedida e quando foi concedida.
- **Conte os tipos antes de contar qualquer outra coisa.** Volume, velocidade e risco diferem muito entre mudanças padrão, normais e emergenciais. Uma média única entre as três esconde todo sinal útil.
- **Prefira evidências automatizadas e registradas a reuniões.** A revisão por pares, os testes aprovados e as verificações do pipeline produzem um registro sem ocupar uma vaga na agenda. Meça quanto da decisão de aprovação o pipeline captura.
- **Descreva um serviço ou uma equipe, nunca uma pessoa.** Aprovadores e solicitantes trabalham dentro de um sistema. Classificar indivíduos por aprovações concedidas ou recusadas ensina as pessoas a aprovar tudo ou nada.
- **Pareie velocidade com segurança.** A aprovação mais rápida só é boa notícia se o quadro de falhas for estável. Leia essas métricas ao lado do tópico 4.4, Falhas de mudança e retrabalho.
- **Escreva as regras de classificação.** Se uma mudança é padrão, normal ou emergencial é um julgamento que precisa ser reproduzível. Registre os critérios e reveja uma amostra a cada trimestre.

## Definições de métricas

A tabela declara os relógios e as exclusões que a sua equipe deve escrever. Os dados vêm da ferramenta de mudanças ou de tickets, dos eventos de controle de versão e de pipeline e dos registros de aprovação (veja o tópico 1.5, Fontes de dados e instrumentação).

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de mudanças por tipo | Número de mudanças concluídas, dividido em padrão, normal e emergencial | Contagem de registros de mudança que chegaram ao status implementada no período, agrupados por tipo no momento da aprovação; as mudanças canceladas e retiradas são excluídas e relatadas à parte; relate por serviço, não por pessoa | Mudanças por semana ou mês, por tipo | Registros de mudanças na ferramenta de ITSM, cruzados com eventos de implantação do pipeline | Habilitação de mudanças | Vazão de itens de trabalho concluídos; conteúdo do release por incremento | Semanal, revisto mensalmente |
| Parcela de mudanças padrão | Proporção das mudanças concluídas que seguiram o caminho pré-autorizado | Mudanças padrão concluídas no período / todas as mudanças concluídas no período; uma mudança reclassificada depois do fato conta no seu tipo final e a reclassificação é registrada | Porcentagem | Registros de mudanças com tipo e histórico de reclassificação | Habilitação de mudanças | Trabalho rotineiro coberto pelo acordo de trabalho da equipe e pela definição de pronto | Mensal |
| Lead time de aprovação | Tempo que uma mudança espera por uma decisão de autorização | O relógio começa quando a requisição é enviada como pronta para avaliação e para quando a decisão de autorização é registrada; o tempo de espera pelo solicitante para fornecer informações é excluído e mostrado à parte; relate a mediana e o 85º percentil das mudanças normais do período; mudanças padrão sem etapa de aprovação são excluídas | Horas ou dias úteis | Carimbos de tempo nos registros de mudanças ou nos eventos de aprovação do pipeline | Habilitação de mudanças | Tempo de espera em um fluxo de trabalho; tempo em uma coluna de revisão | Semanal, revisto mensalmente |
| Parcela de aprovação automatizada | Proporção das decisões de autorização tomadas e registradas por controles do pipeline ou por política pré-autorizada | Mudanças cuja aprovação foi concedida por uma verificação automatizada registrada ou por revisão por pares registrada sob uma política escrita / todas as mudanças concluídas no período; a assinatura manual de um comitê ou gerente conta como não automatizada | Porcentagem | Registros do pipeline, registros de revisão de código e registros de mudanças | Habilitação de mudanças; gestão de implantação | Portões de qualidade automatizados; revisão por pares como parte da definição de pronto | Mensal |
| Idade da fila de aprovação | Há quanto tempo as requisições pendentes estão esperando neste momento | Idade de cada mudança que aguarda uma decisão, medida do envio até o momento do instantâneo; relate o item mais antigo e o 85º percentil da fila aberta; aprovações concluídas são excluídas | Horas ou dias úteis | Registros de mudanças com status de aprovação aberto | Habilitação de mudanças | Idade do item de trabalho; trabalho em andamento envelhecido | Instantâneo diário, revisto semanalmente |
| Completude do registro de mudança | Proporção das mudanças concluídas cujo registro consegue responder quem, o quê, por quê, quando e qual serviço | Mudanças com todos os campos obrigatórios preenchidos e ligadas ao serviço ou item de configuração afetado / todas as mudanças concluídas no período; os campos obrigatórios são listados na definição; registros criados depois de a mudança ser implementada são sinalizados | Porcentagem | Registros de mudanças, vínculos com o controle de versão, dados de configuração | Habilitação de mudanças; gestão de configuração de serviço | Rastreabilidade do commit ao ticket e à implantação | Mensal |

O lead time de aprovação olha para trás, para mudanças que terminaram de esperar, e pode esconder uma pilha de requisições travadas. A idade da fila olha para o que está esperando hoje, que é o alerta mais precoce. A parcela de mudanças padrão não é uma nota a maximizar: uma equipe que muda configuração por um pipeline maduro terá uma parcela alta, e uma equipe num sistema central legado pode razoavelmente ter uma baixa.

## Recomendações

### Estabeleça o básico

**1. Conte as mudanças por tipo antes de medir qualquer outra coisa.** Monte uma visão única das mudanças concluídas, dividida em padrão, normal e emergencial, por serviço e por mês. Muitas organizações descobrem nesse ponto que ninguém concorda com o total, porque tickets, implantações de pipeline e correções informais são contados separadamente. Reconciliar essas fontes é o primeiro resultado do programa (veja o tópico 1.5, Fontes de dados e instrumentação).

**2. Escreva as regras de classificação e amostre-as.** Declare o que torna uma mudança padrão: um procedimento documentado, um risco conhecido e um histórico. Declare o que empurra uma mudança para normal ou emergencial. Reveja a cada trimestre uma amostra aleatória de cerca de vinte mudanças e pergunte se cada uma foi classificada como as regras mandam. A classificação errada é a principal ameaça a todos os outros números deste tópico.

**3. Defina o relógio de aprovação por escrito.** Diga que o relógio começa quando a requisição é enviada como pronta e para quando a decisão é registrada e nomeie as exclusões, como a espera de que o solicitante responda a uma pergunta. Sem isso, uma equipe mede a partir da criação do ticket e outra a partir da reunião do comitê, e os números não podem ser comparados nem ao longo do tempo.

### Encurte a espera

**4. Relate o lead time de aprovação como uma distribuição.** Uma média esconde o padrão que importa, que são poucas mudanças esperando muito tempo. Mostre a mediana e o 85º percentil e os poucos casos mais lentos pelo nome da mudança, e não pelo nome da pessoa (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Se o 85º percentil é muitas vezes a mediana, a causa costuma ser um ciclo de reuniões ou um único aprovador sobrecarregado, e a correção é estrutural.

**5. Observe a fila, e não apenas o histórico.** Reveja a idade da fila de aprovação toda semana no mesmo fórum que revê as medidas de fluxo. O item que espera há mais tempo é o melhor alerta precoce de que um comitê está sobrecarregado, de que um feriado travou uma assinatura ou de que um solicitante parou em silêncio de cobrar. Uma visão da fila também combina com o hábito de olhar o trabalho envelhecido (veja o tópico 2.1, Medidas de fluxo).

**6. Separe a espera por informação da espera por decisão.** Quando uma requisição volta ao solicitante para mais detalhes, pare o relógio de aprovação e inicie outro. Os aprovadores são culpados por atrasos que o solicitante causou, e os solicitantes são culpados por atrasos na fila. Dois relógios dão a cada lado um quadro exato e uma melhoria concreta, como um modelo de requisição melhor.

### Mova o controle para o pipeline

**7. Converta tipos de mudança repetíveis e de baixo risco em mudanças padrão.** Escolha a mudança normal mais comum na sua visão de volume, como uma atualização rotineira de biblioteca ou uma ação de escalonamento. Escreva seu procedimento e suas verificações, combine o risco com a autoridade de mudanças e pré-autorize-a. Depois observe juntas a parcela de mudanças padrão e o lead time de aprovação das mudanças normais: a parcela deve subir e a fila deve encurtar, sem alta correspondente nas falhas (veja o tópico 4.4, Falhas de mudança e retrabalho).

**8. Registre a aprovação onde o trabalho acontece.** Capture a revisão por pares na ferramenta de [revisão de código](https://en.wikipedia.org/wiki/Code_review) e deixe o pipeline ligar automaticamente a revisão, o resultado dos testes e a implantação ao registro de mudança. O registro passa a ser um subproduto do trabalho, e não uma tarefa separada. Meça a parcela de aprovação automatizada e inspecione uma amostra para confirmar que a revisão registrada é substantiva, e não um carimbo automático (veja o tópico 2.7, Métricas de pull requests e revisão de código).

**9. Trate o pipeline como o lugar para codificar a política.** Regras como "nenhum acesso direto à produção sem um ticket", "os testes devem passar" e "o autor não pode aprovar a própria mudança" podem ser impostas por ferramentas, com a configuração mantida como código nas práticas de [infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code). Quando a política é código, você pode mostrar a um auditor a regra e seu histórico em vez de uma ata de reunião. Meça quantas mudanças contornam o pipeline, porque cada contorno é um buraco no controle.

### Mantenha o controle honesto

**10. Mantenha um caminho rápido para mudanças emergenciais e reveja como ele é usado.** As mudanças emergenciais precisam de velocidade; por isso não as atrase com a fila normal. Reveja cada uma depois e observe uma deriva para cima no volume, já que um caminho emergencial mais fácil que o normal vira o padrão (as medidas para isso estão no tópico 4.4, Falhas de mudança e retrabalho). Relate o volume emergencial ao lado do volume normal na mesma visão.

**11. Audite a completude dos registros em um calendário.** Um registro completo ajuda durante um incidente, quando quem responde pergunta o que mudou recentemente (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes). Meça a completude, reveja uma amostra e trate as lacunas como defeito do formulário ou da integração, e não como falha do solicitante. Uma [trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail) montada depois, de memória, é evidência fraca.

**12. Reveja o modelo de autoridade de mudanças pelo menos uma vez por ano.** Decida quem detém os direitos de aprovação para cada tipo e nível de risco e aposente os comitês que aprovam tudo o que veem. Desloque um comitê central para um papel estratégico: coordenar entre equipes, resolver conflitos de cronograma e decidir as compensações entre tempo de chegada ao mercado e risco. Registre a decisão e as evidências no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Volume de mudanças por tipo | Dividir uma mudança em muitos registros pequenos para parecer ocupado, fundir muitas em uma para parecer calmo ou deixar as mudanças informais fora dos registros | Reconciliar as contagens com os eventos de implantação do pipeline todo mês; acompanhar a proporção de implantações sem registro de mudança correspondente |
| Parcela de mudanças padrão | Reclassificar trabalho arriscado como padrão para atingir uma meta, ou escrever procedimentos padrão amplos que cubram qualquer coisa | Revisão trimestral amostral da classificação; taxa de falha de mudanças por tipo (veja o tópico 4.4, Falhas de mudança e retrabalho); um registro das reclassificações |
| Lead time de aprovação | Começar o relógio tarde, pará-lo cedo, pausá-lo por perguntas que não precisavam ser feitas ou aprovar sem ler | O 85º percentil ao lado da mediana; revisão amostral das aprovações quanto à substância; taxa de falha de mudanças por grupo de aprovadores, nunca por indivíduo |
| Parcela de aprovação automatizada | Acrescentar verificações automatizadas que sempre passam, ou contar uma revisão por pares sem comentários como garantia | Revisão amostral das aprovações automatizadas e por pares; defeitos escapados e taxa de falha das mudanças aprovadas automaticamente; contagem de contornos |
| Idade da fila de aprovação | Encerrar ou retirar requisições antigas para que a fila pareça curta, ou movê-las para uma nova requisição com carimbo de tempo novo | Contagem de requisições retiradas e reenviadas; idade da requisição medida desde o primeiro envio |
| Completude do registro de mudança | Preencher campos obrigatórios com texto de fachada, ou criar registros depois da mudança para satisfazer um relatório | Sinalizar registros criados após a implementação; revisão amostral da qualidade do texto livre; taxa de vínculo com o commit |

Uma leitura saudável mostra a mistura de tipos deslocando-se devagar para mudanças padrão com um quadro de falhas estável, uma mediana de tempo de aprovação próxima do 85º percentil, uma fila sem nenhum item muito mais velho que os demais e uma contagem de contornos que fica perto de zero. Desconfie de um salto repentino em qualquer número. Uma redução à metade do lead time de aprovação em um mês sem mudança de processo geralmente significa que o relógio se moveu, e não o trabalho.

## Compensações: vantagens e desvantagens

| Abordagem | Vantagens | Desvantagens |
| --- | --- | --- |
| Mudanças padrão pré-autorizadas | Rápidas, consistentes, baratas de auditar; liberam a autoridade de mudanças para o trabalho arriscado | Exigem projeto inicial; a classificação pode derivar; procedimentos amplos escondem risco |
| Revisão por pares registrada no pipeline | Revisão por pessoas que conhecem o código; produz um registro automaticamente; escala com o volume | A qualidade depende da cultura de revisão; equipes pequenas podem não ter um revisor independente; alguns reguladores esperam um aprovador separado |
| Comitê consultivo de mudanças central | Visibilidade entre equipes; pega colisões de cronograma e riscos de dependências compartilhadas | Lento quando usado como portão de toda mudança; estimula lotes maiores de mudança entregues com menos frequência; cria uma fila |
| Lead time de aprovação como métrica de manchete | Fácil de explicar; expõe uma fonte real de atraso | Fácil de manipular; pode pressionar os aprovadores a se apressar; nada diz sobre a qualidade da decisão |
| Parcela de aprovação automatizada como meta | Premia o investimento em ferramentas e em evidências registradas | Pode premiar verificações automatizadas fracas; pode excluir mudanças que realmente precisam de julgamento humano |

A pergunta melhor raramente é "comitê ou não" e geralmente é "quais mudanças precisam de que tipo de escrutínio, e como sabemos?".

## Perguntas para discutir com sua equipe

**1. Quantas mudanças fizemos no mês passado, e todas as nossas fontes concordam?**
Peça a cada grupo que produza a própria contagem a partir de tickets, implantações de pipeline e canais informais. Comparem os totais. A diferença é, em si, um achado sobre mudança não registrada. O facilitador deve combinar qual fonte é o sistema de registro e quem reconcilia as outras.

**2. Quais das nossas mudanças normais são realmente rotineiras, e o que seria preciso para torná-las padrão?**
Liste as cinco mudanças normais mais frequentes. Para cada uma, pergunte se o procedimento está documentado, se o risco é compreendido e se a equipe tem um histórico limpo. A discussão costuma revelar um ou dois candidatos claros. Registrem as verificações que tornariam segura a pré-autorização e nomeiem quem aprovaria o procedimento padrão.

**3. Onde o nosso relógio de aprovação começa e para, e o que espera dentro dele?**
Pegue as três últimas mudanças normais e rastreie-as do envio à decisão. Anote cada transferência, reunião e pedido de informação. As pessoas costumam se surpreender com quanto da espera é tempo de calendário entre rodadas de perguntas. Combinem uma definição escrita do relógio e do que é excluído.

**4. Confiamos nas nossas aprovações, ou apenas as colecionamos?**
Pegue uma amostra de aprovações recentes e leia as revisões. Procure aprovações concedidas em segundos ou sem comentários. O objetivo é saber quanta garantia o processo realmente dá, e não achar um culpado. Discutam o que tornaria uma revisão mais substantiva sem torná-la mais lenta.

**5. Para que serve o nosso comitê de mudanças, e o que perderíamos se ele deixasse de se reunir?**
Pergunte o que o comitê decide que ninguém mais poderia decidir e o que ele apenas confirma. Alguns comitês fazem um trabalho valioso de coordenação entre equipes e de percepção de colisões de cronograma. Outros repetem decisões já tomadas na revisão de código. Combinem quais funções vale manter e quais poderiam passar para o pipeline ou para um fórum mais leve.

**6. Se reduzíssemos o tempo de aprovação à metade, o que precisaríamos ver para saber que foi seguro?**
Nomeiem os sinais de segurança antes da mudança, como a taxa de falha das mudanças por tipo, a parcela emergencial e os incidentes ligados a mudanças recentes. Combinem os limiares que disparariam uma pausa. Essa conversa transforma uma meta de velocidade em um experimento com regra de parada, que é a melhor defesa contra otimizar a coisa errada.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega sentem o lead time de aprovação como tempo ocioso entre uma mudança pronta e uma mudança em execução. Querem ver seus próprios números por tipo, com uma visão da fila, para decidir quando agrupar, quando dividir e quando pedir uma nova mudança padrão. Suas melhores contribuições são bons modelos de requisição, mudanças pequenas e vínculos limpos do commit ao registro de mudança.

### Equipes de serviço e operações

As equipes de operações usam o registro de mudança para responder à primeira pergunta de um incidente: o que mudou recentemente? Valorizam a completude, os vínculos corretos com os serviços e um cronograma confiável. Também carregam o custo de uma mudança que dá errado, de modo que têm interesse legítimo nas regras de classificação e na revisão das mudanças emergenciais. O melhor movimento é ser dono, em conjunto com as equipes de entrega, do catálogo de mudanças padrão, para que a pré-autorização reflita o conhecimento operacional.

### Liderança e governança

Os líderes e os órgãos de governança precisam de garantia de que as mudanças são controladas e precisam saber se o controle está atrasando a organização. Estas métricas dão as duas coisas: mistura de tipos, tempo de espera e a proporção das aprovações apoiadas em evidências registradas. Peçam tendências e dispersão entre serviços, nunca uma tabela de classificação, e leiam-nas ao lado das medidas de falha (veja o tópico 4.4, Falhas de mudança e retrabalho). Financiar a automação que move a aprovação para o pipeline costuma ser um investimento melhor do que acrescentar um revisor ao comitê.

### Clientes e usuários

Os clientes raramente veem o processo de mudança. Veem novas funcionalidades chegando, correções saindo logo e menos interrupções depois de um release. A aprovação lenta atrasa as correções que pediram, e a aprovação fraca arrisca a interrupção que temem. Onde um serviço tem janelas de manutenção programadas, publique o calendário de mudanças em linguagem simples.

## Na prática: um exemplo de gestão de serviços

Uma seguradora regional fictícia opera um portal de clientes com oito equipes de entrega e um CAB que se reúne duas vezes por semana. Todos os números abaixo são ilustrativos.

O líder de operações de serviço monta a primeira visão completa de mudanças. No mês, o portal mostra cerca de 420 mudanças concluídas por tickets, 610 implantações em produção pelo pipeline e uma diferença que se revela serem mudanças feitas sem ticket. Das 420 mudanças com ticket, 18% são padrão, 76% são normais e 6% são emergenciais (ilustrativo). A mediana do lead time de aprovação das mudanças normais é de 2 dias úteis, e o 85º percentil é de 7 dias úteis (ilustrativo). A requisição mais antiga na fila espera há 12 dias úteis.

Quando as equipes olham a espera longa, encontram duas causas. Muitas requisições ficam paradas até a próxima reunião do comitê mesmo quando são rotineiras, e outras voltam várias vezes ao solicitante por falta de informação. A equipe separa os dois relógios e descobre que cerca de metade da espera do 85º percentil é tempo de espera pelo solicitante. Corrige primeiro o modelo de requisição. Depois escolhe as três mudanças normais mais comuns: atualizações de dependências com testes aprovados, chaves de configuração numa ferramenta de feature flags e escalonamento dos servidores de aplicação. Escreve os procedimentos, combina o risco com a autoridade de mudanças e as converte em mudanças padrão com aprovação registrada no pipeline.

Dois meses depois, a parcela padrão sobe para 41% (ilustrativo), o 85º percentil do lead time de aprovação das mudanças normais cai para 4 dias úteis (ilustrativo) e a taxa de falha de mudanças por tipo fica estável, como relatado nas medidas companheiras (veja o tópico 4.4, Falhas de mudança e retrabalho). O comitê passa de rever toda mudança normal para rever as mudanças de alto risco e o cronograma mensal.

Um risco de manipulação aparece na amostra trimestral. Uma equipe classificou uma migração de esquema de banco de dados como mudança padrão porque o procedimento anterior para "mudanças de configuração" tinha redação frouxa. O revisor da amostra nota que a migração não tinha plano de rollback. A equipe aperta as definições de mudança padrão, acrescenta uma regra de que mudanças de esquema são sempre normais, e o registro de reclassificações vira um item permanente de pauta. A decisão registrada no registro de métricas é manter a parcela de mudanças padrão como medida de contexto e não como meta.

## Ágil, IA, automação e análise

### Ágil

A habilitação de mudanças serve à entrega contínua quando as mudanças de baixo risco fluem sem esperar por uma reunião e as de alto risco recebem o escrutínio apropriado. Reveja as regras de classificação com as partes interessadas regularmente. O cuidado é que uma parcela alta de mudanças padrão pode significar que mudanças arriscadas foram rebatizadas.

### IA

A IA pode avaliar o risco de mudanças, resumir diffs e redigir registros de mudança. Pareie a parcela de aprovação automatizada com a taxa de falha de mudanças e com a proporção das classificações de risco da IA depois consideradas erradas e mantenha um humano responsável pelas aprovações de alto risco. O cuidado é que uma pontuação de risco de um modelo pode criar falsa segurança; por isso teste-a contra os resultados.

### Automação

Automatize as evidências que um pipeline pode produzir e a aprovação das mudanças padrão bem compreendidas e meça a automação por falhas, rollbacks e aprovações feitas sem evidência. O cuidado é que a automação pode aprovar uma mudança que não deveria; por isso audite uma amostra.

### Análise

Mostre o lead time de aprovação como uma distribuição por tipo de mudança e ligue-o às taxas de falha. A decisão informada é quais mudanças podem ser pré-aprovadas. O cuidado é que as aprovações acompanhadas pela data do registro podem não coincidir com o momento real; por isso confira os carimbos de tempo.

## Olhar setorial

**Startup.** Uma startup costuma ter pouco processo formal e muita automação de pipeline. As mudanças acontecem depressa e sem registro; por isso a completude e o vínculo do commit com a implantação importam mais. Uma definição de uma página dos três tipos, mais a revisão registrada no pipeline, muitas vezes basta.

**Pequena empresa.** Uma pequena empresa costuma ter uma ou duas pessoas que escrevem e liberam as mudanças, de modo que a revisão independente é difícil. Use uma lista simples de mudanças padrão para o trabalho rotineiro, exija um segundo par de olhos para qualquer coisa que toque dados de clientes ou dinheiro e mantenha um registro simples das mudanças. As medidas que valem acompanhar são o volume por tipo e a completude dos registros, porque são baratas e ajudam durante um incidente.

**Grande empresa.** As grandes empresas têm muitas equipes, plataformas compartilhadas e sistemas legados com riscos diferentes. Tendem a ter um CAB, e as métricas ajudam a decidir quais de suas tarefas devem ficar. O trabalho principal é a classificação consistente, um catálogo compartilhado de mudanças padrão e um pipeline que registre evidências de auditoria. Consolide por serviço e classe de risco, e não por classificação de equipes.

**Governo e setor público.** Os órgãos públicos muitas vezes enfrentam exigências legais de aprovação, separação de funções e retenção de registros e podem ter janelas de release ditadas por compras. As métricas devem declarar quais controles são obrigatórios e quais são hábito local, já que os primeiros não podem ser removidos e os segundos podem. A revisão por pares registrada e as evidências do pipeline muitas vezes podem satisfazer a intenção, mas confirme isso com o auditor competente antes de contar com elas (veja o tópico 8.3, Métricas de conformidade e auditoria).

## Business case: motivações, ROI e TCO

A motivação costuma ser o tempo que as mudanças passam esperando. Quando o trabalho pronto fica na fila por uma decisão, o valor se atrasa, os lotes crescem e cada lote carrega mais risco. Uma segunda motivação é a garantia: líderes e auditores querem saber que as mudanças são controladas, e a evidência registrada no pipeline é mais barata de produzir e mais confiável do que uma reconstrução. Uma terceira é a resposta a incidentes, porque um registro de mudanças completo e exato encurta a busca por uma causa.

A coleta é barata se a ferramenta de mudanças e o pipeline já guardam carimbos de tempo e tipos, e moderada se for preciso integrá-los. Agir sobre os dados custa mais: escrever procedimentos de mudanças padrão, construir verificações no pipeline e treinar aprovadores e solicitantes. Espere a maior parte do trabalho no primeiro trimestre e um custo menor e estável de amostragem e revisão depois.

O retorno aparece como menos tempo de espera por mudança, menos reuniões, menos esforço de preparação de evidências de auditoria e diagnóstico mais rápido durante incidentes. Estime-o com os seus próprios dados: multiplique a redução das horas de espera por aprovação pelo número de mudanças afetadas e por um custo por hora de atraso que o seu parceiro de finanças aceite. Não importe cifras de outras organizações. A pesquisa DORA apoia a direção do argumento, mas suas páginas não dão custo nem retorno, e qualquer cifra em dinheiro deve vir das suas próprias medições.

## Antipadrões e armadilhas

- **Tratar a parcela de mudanças padrão como meta.** As equipes reclassificam trabalho arriscado para atingir o número. Use-a como contexto, reveja a classificação por amostra e observe as taxas de falha por tipo.
- **Medir apenas a velocidade de aprovação.** Um carimbo rápido parece excelente e não entrega nada. Pareie o lead time com a revisão amostral da substância das aprovações e com o quadro de falhas.
- **Acrescentar aprovações depois de cada incidente.** Cada novo portão torna o sistema mais lento e muitas vezes estimula lotes maiores. Olhe primeiro por que a falha aconteceu e corrija a causa nos testes, na revisão ou no pipeline.
- **Classificar aprovadores ou solicitantes.** As contagens por pessoa de aprovações ou rejeições ensinam as pessoas a aprovar tudo ou nada. Relate por serviço e por tipo de mudança.
- **Tirar a média entre tipos de mudança.** Uma média única mistura trabalho rotineiro e arriscado e esconde ambos. Sempre divida por tipo e mostre o 85º percentil.
- **Ignorar mudanças feitas fora do processo.** O contorno esconde volume e risco reais. Reconcilie as implantações do pipeline com os registros de mudança e trate as lacunas como defeito do sistema.
- **Manter o comitê por hábito.** Um comitê que aprova tudo o que vê acrescenta atraso sem acrescentar garantia. Reveja todo ano o que ele decide que ninguém mais poderia decidir e reoriente-o.
- **Coletar os dados e nunca decidir.** Ligue cada métrica a um responsável nomeado e a um fórum de revisão (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Classificação e volume | Os tipos são informais; ninguém sabe o total | Algumas equipes contam por tipo com regras diferentes | Uma classificação escrita, um sistema de registro | Mistura de tipos acompanhada ao longo do tempo e amostrada quanto à exatidão | Catálogo de mudanças padrão compartilhado com fornecedores e revisto conforme as evidências de risco mudam |
| Relógio de aprovação e fila | As esperas de aprovação são sentidas mas não cronometradas | Algumas equipes registram carimbos de tempo das requisições | Uma definição do relógio, mediana e percentil mostrados | Idade da fila revista semanalmente; os atrasos orientam correções financiadas | Fluxo de aprovação ajustado entre equipes e fornecedores contra falhas e resultados para o cliente |
| Automação da aprovação | A aprovação é uma reunião ou um e-mail | Alguns pipelines registram a revisão por pares | Revisão e verificações registradas são o padrão para mudanças de baixo risco | Parcela automatizada acompanhada com uma contagem de contornos e verificações amostrais de qualidade | Política codificada em controles de plataforma compartilhados que se adaptam conforme o quadro de risco muda |
| Registros e uso | Os registros são ralos ou escritos depois | Os registros existem mas diferem em qualidade | Campos obrigatórios combinados e ligados a serviços | Completude auditada e usada nas revisões de incidentes | Os dados de mudança alimentam as práticas de incidentes, problemas e auditoria em toda a organização |

## Lista de verificação

- [ ] Os três tipos de mudança e seus critérios estão escritos e combinados.
- [ ] Existe uma visão única das mudanças concluídas por tipo, reconciliada com as implantações do pipeline.
- [ ] O relógio de aprovação tem início, parada e lista de exclusões escritos.
- [ ] O lead time de aprovação é relatado como mediana e 85º percentil.
- [ ] A idade da fila de aprovação é visível e revista semanalmente.
- [ ] Pelo menos uma mudança normal frequente foi convertida em mudança padrão com um procedimento documentado.
- [ ] A revisão por pares e os resultados dos testes são ligados automaticamente aos registros de mudança.
- [ ] Uma amostra trimestral confere a classificação e a qualidade das aprovações.
- [ ] O contorno do pipeline é medido e revisto.
- [ ] Toda métrica tem um responsável nomeado, um vetor de manipulação e uma barreira de proteção no registro de métricas.
- [ ] Nenhum relatório classifica aprovadores ou solicitantes individuais.

## Prompts de IA

**Redija um guia de classificação para os três tipos de mudança.**

```text
I work in [type of organization] and we run [list of services]. Our change tool
is [tool], our pipeline is [pipeline tool], and our regulatory context is
[regulations or none]. Here are our ten most frequent changes: [list]. Draft a
plain-language guide for deciding whether each is a standard, normal, or
emergency change, with the criteria you used and one example of a borderline
case. Do not invent benchmark values or claim any practice meets an
audit requirement. List your assumptions and the questions I should answer
before adopting the guide.
```

**Descubra onde o tempo de aprovação é gasto.**

```text
Here is an extract of change records with submission, information-request, and
decision timestamps: [pasted data or description]. Our approval process is
[description]. Calculate the median and 85th percentile of approval lead time by
change type, separating time waiting for the requester from time waiting for a
decision, and suggest three questions to ask about the longest cases. Do not
invent figures that are not in the data, and do not rank individual people. List
your assumptions and any data quality problems you notice.
```

**Confira as métricas quanto a riscos de manipulação.**

```text
We report these change enablement metrics: [list of metrics with definitions].
The audience is [team, leadership, or governance body] and the metrics are used
for [purpose]. For each metric, list plausible ways it could be inflated,
hidden, or distorted without real improvement, and suggest a paired guardrail
measure or practice. Do not propose targets or benchmark values. List your
assumptions and which gaming risks you think matter most for [service name].
```

**Planeje a passagem da aprovação por comitê para a aprovação por pipeline.**

```text
Our current approval path for [change type] is [description], with [number]
approvers and a typical wait described as [description]. Our pipeline provides
[checks, tests, review tooling]. Propose a staged plan to move low-risk changes
to recorded, pipeline-based approval, including the evidence we would need to
keep, the safety signals to watch, and a stopping rule. Do not claim the plan
satisfies any regulation or standard. List your assumptions and the people I
should consult, such as [auditor, security lead, change authority].
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados de mudanças, releases e incidentes e a barreira de proteção que deve ficar ao lado de cada métrica de habilitação de mudanças.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma versão revista deste tópico mantém coerentes seus relógios, vetores de manipulação e referências cruzadas.

## Ideias-chave

- As métricas de habilitação de mudanças medem o fluxo e o controle da mudança: o volume por tipo, a espera por aprovação e quanta aprovação o pipeline registra automaticamente.
- Divida tudo por tipo de mudança, relate os tempos de espera como mediana e 85º percentil e observe a fila ao vivo além do histórico.
- Mover o trabalho rotineiro para mudanças padrão e registrar a revisão no pipeline é o caminho mais direto para encurtar a espera e deve ser lido ao lado das medidas de falha.
- A parcela de mudanças padrão e a velocidade de aprovação são fáceis de manipular; por isso amostre a classificação e a qualidade das aprovações e mantenha os números fora dos placares individuais.
- Use as métricas para decidir para que serve um comitê de mudanças e financie a automação que torna segura uma forma de controle mais leve.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Gestão de mudanças (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separação de funções](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Revisão de código](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail).
