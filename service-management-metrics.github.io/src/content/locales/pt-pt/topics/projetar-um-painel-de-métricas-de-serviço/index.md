# Projetar um painel de métricas de serviço

**Um bom painel responde a algumas perguntas que um público nomeado realmente faz, mostra cada número com sua tendência e seu contexto e é construído pelas pessoas que vão usá-lo.**

## Visão geral e motivação

Um [painel (dashboard)](https://en.wikipedia.org/wiki/Dashboard_(business)) é uma exibição visual das informações mais importantes necessárias para atingir um ou mais objetivos, organizada para poder ser monitorada de relance. Na prática, a maioria dos painéis nas organizações de serviços falha nessa definição. Começam como um modo de responder a uma pergunta real e depois crescem por acréscimo até mostrar tudo que a ferramenta consegue desenhar. Ninguém é dono deles, ninguém tem certeza do que os números significam e a tela na parede é ignorada.

O propósito de um painel de métricas de serviço é ajudar as pessoas a tomar decisões e a iniciar boas conversas. Uma equipe o usa para perceber que seu trabalho está esperando mais do que esperava e perguntar por quê. Um responsável por serviço o usa para ver que um serviço está perto do limite de sua meta de confiabilidade. Um líder o usa para ver se o investimento em uma área está produzindo o resultado esperado. Uma exibição que não faz nada disso é decoração, e a decoração custa dinheiro para construir e atenção para ignorar.

O ITIL enquadra isso como uma questão de informação e comunicação: a informação certa, para as pessoas certas, em uma forma que possam usar, na hora certa. Os objetivos ágeis apontam para os mesmos princípios de projeto. O envolvimento contínuo das partes interessadas significa que o público ajuda a projetar a visão e continua ajudando à medida que as perguntas mudam. A melhoria contínua significa que o próprio painel é revisto e podado. A evolução permanente significa que o conjunto de medidas muda quando os serviços e as metas mudam. Um ritmo sustentável significa que o painel não gera uma compulsão diária de conferir números que só se movem mensalmente. E a mesma confiança que apoia indivíduos motivados significa que as equipes veem primeiro os próprios dados e são donas da história que eles contam.

Três falhas de projeto são comuns. A primeira é a parede de números, em que cem blocos competem e nenhum se destaca. A segunda é a exibição apenas de metas, em que uma cifra é mostrada contra um objetivo em vermelho ou verde, sem tendência e sem contexto, o que convida a gerenciar por cor em vez de por entendimento. A terceira é a exibição sem dono, em que as definições derivaram, os dados estão obsoletos e ninguém sabe a quem perguntar. O trabalho de projeto é evitar essas.

O bom projeto visual ajuda. A [visualização de dados](https://en.wikipedia.org/wiki/Data_visualization) é a prática de mostrar dados graficamente para que os padrões possam ser vistos e entendidos. Um [sparkline](https://en.wikipedia.org/wiki/Sparkline) é um pequeno gráfico de linha do tamanho de uma palavra que mostra uma tendência sem eixos nem rótulos, e serve bem a um painel porque põe o histórico ao lado do valor atual. Um [gráfico de sequência (run chart)](https://en.wikipedia.org/wiki/Run_chart) traça uma medida ao longo do tempo com uma linha de mediana, e um [gráfico de controle](https://en.wikipedia.org/wiki/Control_chart) acrescenta limites que separam a variação comum dos sinais que merecem investigação (veja o tópico 1.6, Letramento estatístico para métricas de serviço). O [chartjunk](https://en.wikipedia.org/wiki/Chartjunk) é a decoração que não acrescenta informação, como linhas de grade pesadas, barras tridimensionais e medidores ornamentais, e vale a pena removê-lo.

Uma [métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric) é um número que parece bom e não ajuda ninguém a decidir nada, como uma contagem de tickets tratados ou de logins em um portal mostrada sem resultados. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica a toda a exibição: quando um número na tela vira meta, as pessoas gerenciam o número (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico se apoia nos arcabouços de medição (veja o tópico 1.7, Estruturas de medição) e nos tópicos de dados e governança da Parte 1.

## Princípios-chave

- **Comece pelas perguntas, e não pelos dados.** Escreva as decisões e perguntas que o público tem antes de escolher um único gráfico.
- **Mostre poucas medidas, equilibradas.** Um pequeno conjunto que abranja fluxo, qualidade, confiabilidade, experiência e custo resiste melhor à manipulação que uma medida isolada.
- **Mostre sempre tendência e contexto.** Um valor sem histórico, sem linha de base e sem nota sobre o que mudou é difícil de interpretar.
- **Respeite a variação.** Não reaja a cada oscilação. Use gráficos de sequência ou de controle para separar sinal de ruído.
- **Dê a cada público a sua visão.** Equipes, responsáveis por serviços e liderança fazem perguntas diferentes e precisam de detalhes diferentes.
- **As equipes veem primeiro os seus dados.** As pessoas que fazem o trabalho devem ver seus números antes de qualquer outra e ser donas da interpretação.
- **Defina tudo e nomeie um responsável.** Cada medida tem uma definição escrita, uma fonte de dados e uma pessoa a quem perguntar.
- **Mantenha leve de manter.** Um painel que leva uma semana de trabalho manual por mês vai morrer.

## Definições de métricas

As medidas abaixo tratam do próprio painel, e não de um serviço. Ajudam uma equipe do programa a ver se suas exibições estão saudáveis. Algumas são descritivas e estão marcadas assim, porque tratá-las como metas convidaria às distorções contra as quais este tópico adverte.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de perguntas | Proporção das perguntas listadas do público que o painel consegue responder com uma medida definida | perguntas com uma medida e uma definição / perguntas listadas pelo público | porcentagem | Lista de perguntas das sessões com as partes interessadas; cartões de métricas | Melhoria contínua; gestão de níveis de serviço | Envolvimento contínuo das partes interessadas | Trimestral |
| Completude das definições | Proporção das medidas exibidas com uma definição escrita atual, fonte de dados, responsável e limites conhecidos | medidas com os quatro / medidas exibidas | porcentagem | Cartões de métricas ou catálogo | Gestão de informação e tecnologia; gestão do conhecimento | Entendimento compartilhado; trabalho visível | Trimestral |
| Atualidade dos dados | Proporção das medidas exibidas atualizadas dentro do intervalo esperado | medidas atualizadas no prazo / medidas exibidas | porcentagem | Logs do pipeline; metadados do painel | Monitoramento e gestão de eventos | Feedback rápido | Semanal |
| Ligação a decisões | Proporção das medidas revistas em que uma revisão recente levou a uma decisão, ação ou escolha deliberada de não fazer nada registrada | medidas com uma decisão ligada no período / medidas revistas | porcentagem | Notas de revisão; registro de melhorias | Melhoria contínua | Reflexão regular | Trimestral |
| Tamanho da exibição | Número de medidas em cada visão de público | contagem por visão | medidas | Configuração do painel | Melhoria contínua | Simplicidade | Trimestral |
| Taxa de aposentadoria | Medidas removidas ou substituídas no período porque deixaram de informar decisões | medidas aposentadas / medidas exibidas no início | porcentagem | Registro de mudanças do painel | Melhoria contínua | Evolução permanente | Anual |
| Alcance do público (descritiva) | Proporção das equipes ou papéis pretendidos que abriram a sua visão no período | equipes ou papéis distintos que viram / equipes ou papéis pretendidos | porcentagem | Logs de acesso ao painel, agregados por equipe ou papel | Gestão de informação e tecnologia | Envolvimento contínuo das partes interessadas | Trimestral |

Defina por escrito o público de cada visão. Conte as medidas por visão, e não por ferramenta, para que um grande catálogo com uma página inicial pequena não seja confundido com proliferação. Os logs de acesso são reunidos e relatados no nível de equipe ou de papel e nunca para acompanhar os hábitos de leitura de indivíduos. O alcance do público é descritivo e lido ao lado da ligação a decisões, porque uma exibição muito vista que não muda nenhuma decisão tem pouco valor. A ligação a decisões aceita "olhamos e escolhemos não fazer nada" como uma decisão registrada, para que a medida não empurre as pessoas a inventar ação.

## Recomendações

### Parta do público

**1. Liste os públicos e suas perguntas.** Os públicos típicos são a equipe de entrega ou de suporte que faz o trabalho, o responsável pelo serviço que responde por ele e os líderes que financiam e dirigem. Sentem-se uma hora com cada um e escrevam o que perguntam, que decisões tomam e o que gostariam de saber. Uma boa pergunta soa como "O nosso trabalho está esperando mais do que antes?" ou "Estamos perto de esgotar nosso orçamento de erro?". Não soa como "Mostre-me o painel de incidentes".

**2. Mapeie cada pergunta a uma medida e a uma companheira.** Para cada pergunta, escolha a melhor medida única das partes anteriores deste livro e uma companheira que proteja contra a distorção óbvia. Uma medida de velocidade se pareia com uma de qualidade. Uma medida de volume se pareia com um resultado. Uma medida de experiência se pareia com uma de comportamento. Esta é a lógica de pareamento que percorre todo o livro (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

**3. Inclua o público no projeto.** Mostre esboços antes de construir qualquer coisa. Pergunte o que é confuso, o que falta e o que fariam com cada número. As respostas cortarão o conjunto, e eles confiarão no que ajudaram a fazer.

### Escolha um conjunto pequeno e equilibrado

**4. Mantenha cada visão em um punhado de medidas.** Cerca de cinco a nove medidas por visão de público é uma faixa viável, embora o número certo dependa das perguntas. O limite força escolhas. Ponha o detalhe atrás de um clique, em uma visão de apoio, e mantenha a página inicial no que é preciso para decidir se vale olhar mais.

**5. Equilibre o conjunto entre dimensões.** Um [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) é uma ferramenta de gestão estratégica que olha uma organização sob várias perspectivas em vez de só os resultados financeiros. A ideia se transfere bem: para um serviço, equilibre fluxo e velocidade, qualidade e estabilidade, confiabilidade, experiência e custo. Um conjunto que inclui só velocidade estimula atalhos, e um que inclui só qualidade estimula atrasos. A ideia relacionada de [indicador-chave de desempenho (KPI)](https://en.wikipedia.org/wiki/Key_performance_indicator) é útil quando o indicador é escolhido pelo que revela sobre um objetivo, e não pela facilidade de mostrá-lo.

**6. Distinga indicadores de diagnósticos.** Poucos indicadores de destaque dizem se as coisas estão saudáveis. As medidas de diagnóstico ajudam a descobrir por que não estão. Mantenha os diagnósticos um passo abaixo, para que a página inicial não vire uma parede.

### Mostre contexto e tendência

**7. Mostre o histórico com cada valor.** Ponha um sparkline ou um pequeno gráfico de sequência ao lado de cada valor atual. Mostre histórico suficiente para ver padrões sazonais, como picos mensais ou um ciclo trimestral. Marque os eventos que explicam mudanças: um release, uma mudança de política, uma interrupção, uma reorganização de equipe. Uma nota ao lado da linha poupa cem perguntas.

**8. Use distribuições e faixas para medidas de tempo.** Uma média esconde a cauda longa que os usuários sentem. Mostre a mediana e um percentil alto, como o 85º ou o 95º, e mostre a dispersão. Declare o tamanho da amostra quando for pequeno e mostre quão incerta é uma amostra pequena (veja o tópico 1.6, Letramento estatístico para métricas de serviço, e o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo).

**9. Cuidado com metas e cores.** Use uma linha de meta quando a meta tiver base real, como um objetivo de nível de serviço, e mostre-a como referência, e não como veredicto. Evite blocos vermelhos, âmbar e verdes que viram com um único ponto de dados. Se usar cores de status, baseie-as em uma regra que considere a variação normal e explique a regra na página.

### Torne confiável e fácil de manter

**10. Anexe uma definição e uma nota de dados a cada medida.** A um clique de cada número deve haver sua definição, fórmula, fonte de dados, responsável, hora da atualização e lacunas conhecidas. Uma breve nota "como ler isto" vale o espaço. Um leitor que vê os limites tem menos chance de usar mal o número, e uma equipe que os vê pode contestá-los (veja o tópico 1.4, Governança e responsabilidade das métricas, e o tópico 1.5, Fontes de dados e instrumentação).

**11. Automatize os dados e seja dono da exibição.** Puxe os dados dos sistemas de registro em um cronograma e mostre a hora da última atualização. Planilhas manuais podem iniciar uma conversa, mas são frágeis. Nomeie um responsável por cada painel, que responda por suas definições, sua atualidade e sua aposentadoria. Reveja o painel em um ritmo fixo com seu público e pode-o.

**12. Planeje a saída desde o início.** Toda medida deve ter uma razão declarada para existir e uma condição em que será aposentada, como "quando o backlog de erros conhecidos cair abaixo de um limite por três meses" ou "quando a equipe deixar de usá-la em sua revisão". Aposentar medidas mantém pequeno o conjunto e sinaliza que o programa serve ao trabalho.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de perguntas | Escrever perguntas estreitas que as medidas existentes já respondem; deixar de fora as perguntas difíceis | Incluir partes interessadas de fora da equipe do programa; rever explicitamente as perguntas sem resposta |
| Completude das definições | Preencher campos com texto padrão; definições que ninguém lê | Amostrar as definições quanto à clareza com alguém de fora da equipe; conferir se a definição combina com o cálculo real |
| Atualidade dos dados | Atualizar uma fonte obsoleta com dados inalterados; contar uma atualização como sucesso quando o feed da fonte falhou | Conferir os registros de data e hora da fonte além dos horários de atualização; comparar com contagens de registros e o volume esperado |
| Ligação a decisões | Registrar decisões depois do fato para preencher o campo; inventar ação para evitar um espaço em branco | Aceitar "escolheu não fazer nada" como decisão registrada; amostrar os vínculos em busca de uma discussão prévia real |
| Tamanho da exibição | Esconder medidas em abas secundárias; dividir uma visão em muitas | Contar as medidas por público em todas as abas; perguntar ao público quantos números realmente usa |
| Taxa de aposentadoria | Aposentar medidas incômodas que mostram maus resultados | Rever a lista de aposentadas em busca de medidas com tendências desfavoráveis; exigir um motivo declarado |
| Alcance do público (descritiva) | Abrir a página para elevar a contagem; visualização obrigatória em reuniões | Manter descritiva; ler com a ligação a decisões; não relatar visualizações individuais |

Uma leitura saudável mostra uma página inicial curta que o público sabe explicar, definições que combinam com os cálculos, dados que chegam no prazo, revisões que às vezes levam a ação e às vezes a uma escolha deliberada de esperar e uma lista de medidas aposentadas que inclui algumas que já foram populares.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Um painel corporativo para todos | Fonte única da verdade; definições consistentes | Geral demais para qualquer público; cresce até virar uma parede |
| Visões separadas por público sobre dados compartilhados | Serve a cada público; definições consistentes | Exige governança das definições compartilhadas |
| Painéis construídos pelas equipes | Servem às perguntas locais; alta responsabilidade | As definições derivam; difícil de consolidar |
| Equipe central constrói todos os painéis | Consistência; habilidade de projeto | Lento; pode não servir às perguntas das equipes |
| Exibição ao vivo, em tempo real | Sinais rápidos para operações | Estimula reagir ao ruído; cara |
| Pacote de revisão periódica | Calmo, discutido com contexto | Atraso; pode ser pulado |
| Metas e cores de status | Leitura rápida | Convida a gerenciar por cor; esconde a variação |
| Só tendência e distribuição | Honesto sobre a variação | Mais difícil de ler de relance para os novatos |

A resposta pragmática é compartilhar as definições em toda a organização, deixar cada público ter sua pequena visão, usar exibições ao vivo somente onde a resposta operacional as exige e usar uma revisão periódica calma para decisões de melhoria.

## Perguntas para discutir com sua equipe

**1. Que decisões tomamos no último trimestre que um número em uma tela informou?**
Listem-nas. Para cada uma, nomeiem o número e de onde veio. Percebam quais números de nossas telas atuais nunca aparecem nesta lista. O facilitador deve perguntar se ganham o seu lugar.

**2. Se pudéssemos mostrar só cinco números à nossa própria equipe, quais seriam?**
Peçam a cada pessoa que escreva uma lista em particular e depois comparem. Discutam as diferenças e o que cada número ajudaria alguém a decidir. Combinem um conjunto de teste e uma data para revê-lo.

**3. Que número do nosso painel mais gostaríamos de remover, e por quê?**
Escutem por números que causam discussões, enganam ou nunca são lidos. Conferam se o problema é a medida ou sua apresentação. Combinem aposentar, redefinir ou manter cada um.

**4. Como um novo colega leria nosso painel sem ajuda?**
Peçam a um novato que explique o que vê. Anotem o que interpretou mal e por quê. Acrescentem definições, contexto ou notas onde tropeçou.

**5. O que mudou em nosso trabalho que um número não mostra?**
Releases, pessoal, política ou uma mudança nos clientes podem explicar uma tendência. Combinem como os eventos são registrados na exibição para que o próximo leitor tenha a história.

**6. Quem além de nós olha nossos dados, e o que faz com eles?**
Rastreiem o caminho dos nossos números até outros públicos. Conferam se a interpretação que dão a eles é uma que endossaríamos. Combinem o que compartilharemos e que contexto vai junto.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes fazem o trabalho e devem ser o primeiro público dos próprios dados. Devem ajudar a escolher as medidas, usar a exibição para estimular suas próprias conversas de revisão e anotá-la com eventos. Uma visão da equipe deve responder "como estamos indo e o que devemos tentar?", e não "como nos comparamos com a equipe ao lado?".

### Equipes de serviço e operações

Os responsáveis por serviços respondem por como um serviço se comporta ao longo do tempo. A visão deles reúne confiabilidade, incidentes, mudanças, custo e experiência de um serviço, com tendências e o status das ações de melhoria. Devem usá-la para decidir onde investir e para preparar conversas com clientes e líderes.

### Liderança e governança

Os líderes precisam de uma visão curta de resultados e riscos entre serviços, com contexto suficiente para interpretá-la. Devem pedir tendências e distribuições em vez de classificações, resistir a pedir novas medidas sem aposentar outras e usar a exibição para dirigir perguntas a sistemas e decisões, e não a indivíduos.

### Clientes e usuários

Os clientes e usuários veem a informação de serviço por páginas de status, relatórios e as medidas de experiência que refletem a sua visão (veja o tópico 6.2, Acordos de nível de experiência). A visão deles deve ser honesta, simples e consistente com a que as equipes veem. Devem poder dizer à organização o que os números deixam de mostrar.

## Na prática: um exemplo de gestão de serviços

Uma empresa de software com um produto hospedado e um grupo de suporte ao cliente acumulou três painéis: uma tela de operações com 62 blocos, um relatório de suporte enviado por e-mail semanalmente e uma página de entrega mantida por um analista. A liderança pede um único painel para "ver tudo". As cifras abaixo são ilustrativas.

A chefe de gestão de serviços propõe começar pelas perguntas. Ela realiza uma sessão de uma hora com cada um de três públicos: a equipe de suporte, a equipe de plataforma e o grupo de liderança. A equipe de suporte pergunta se os clientes esperam mais do que antes por uma primeira resposta útil e se os mesmos problemas voltam. A equipe de plataforma pergunta se está perto de esgotar seu orçamento de erro e se seu processo de mudanças a está atrasando ou protegendo. A liderança pergunta se os clientes estão obtendo valor e se o investimento em um novo portal de autoatendimento está compensando. Juntos listam 14 perguntas. Os painéis existentes conseguiam responder seis delas com uma medida definida; assim a cobertura de perguntas é de 43%.

O grupo projeta três visões de no máximo sete medidas cada, sobre definições compartilhadas. A visão de suporte mostra a mediana e o 85º percentil do tempo até uma primeira resposta útil, a proporção de contatos que voltam em sete dias, uma tendência de satisfação com o tamanho da amostra e a resolução por autoatendimento pareada com contatos de retorno. A visão de plataforma mostra a disponibilidade contra o objetivo com uma linha de consumo do orçamento de erro, o lead time de mudanças com a taxa de falha de mudanças e a proporção de tempo gasta com trabalho não planejado. A visão de liderança mostra resultados de nível de serviço, experiência do cliente, custo por cliente ativo e o status de três ações de melhoria financiadas. Todo valor tem um sparkline, um vínculo ao seu cartão de definição e um campo de nota para eventos. As cores aparecem apenas no orçamento de erro, com base em uma regra explicada na página.

A primeira revisão traz surpresas. A equipe de suporte nota que seu tempo mediano de resposta melhorou enquanto o 85º percentil piorou, porque os contatos fáceis eram respondidos depressa e os difíceis ficavam esperando. Decide olhar suas regras de triagem e registra a decisão. A equipe de plataforma vê que um aumento recente no lead time de mudanças coincidiu com uma nova etapa de aprovação e leva a pergunta ao grupo de mudanças. A liderança nota que o uso do portal está subindo enquanto os contatos de retorno estão planos e pergunta à equipe de suporte o que o portal não está respondendo. Dois trimestres depois, a cobertura de perguntas é de 79%, todas as medidas exibidas têm definições completas e a antiga tela de 62 blocos foi aposentada. Três medidas foram abandonadas porque ninguém as usava, e uma foi acrescentada. Um diretor pede uma linha de resumo verde-âmbar-vermelho. A chefe de gestão de serviços mostra um teste em que uma única semana ruim deixou a linha vermelha e causou uma enxurrada de perguntas sem causa. Combinam em seu lugar uma breve nota escrita do que mudou a cada mês e registram a decisão.

## Ágil, IA, automação e análise

### Ágil

Construa o painel com seus usuários e melhore-o em pequenos passos, perguntando a cada revisão regular que pergunta ele respondeu e que decisão mudou. O cuidado é que um painel construído uma vez para um lançamento fica obsoleto à medida que as perguntas mudam.

### IA

Os painéis hoje costumam incluir trabalho assistido por IA, resumos escritos por IA e percepções geradas por IA. Mostre as medidas relacionadas a IA com um par de qualidade, rotule qualquer texto que uma IA escreveu e peça a uma pessoa que o confira antes de chegar aos decisores. O cuidado é que um resumo fluente de IA ao lado de um gráfico pode pesar mais do que os dados merecem; por isso mostre primeiro os dados.

### Automação

Atualize os dados automaticamente e mostre a atualidade e qualquer carga que falhou no próprio painel. Meça o pipeline do painel pelas próprias falhas. O cuidado é que um painel automatizado continua mostrando os últimos dados bons quando uma carga falha; por isso torne visível a obsolescência.

### Análise

Mostre cada número com sua tendência, a contagem por trás dele e uma nota sobre o que ele não consegue mostrar. A decisão informada é sobre qual pergunta o público agirá. O cuidado é que cores e limites implicam uma meta; por isso evite vermelho e verde onde não existe meta.

## Olhar setorial

**Startup.** Mantenha muito pequeno: uma única página com talvez cinco números que toda a empresa consiga ler, refletindo velocidade de entrega, estabilidade, experiência do cliente e custo. Use o que as ferramentas existentes oferecem. Revisite a página sempre que o produto ou os clientes mudarem e resista a construir uma plataforma de dados antes de as perguntas estarem claras.

**Pequena empresa.** Um documento compartilhado ou um gráfico de planilha simples atualizado mensalmente pode bastar. Escolha um punhado de medidas que o dono e o pessoal realmente usam, escreva o que cada uma significa e discuta-as em uma reunião regular. O risco não é pouca ferramenta. O risco são medidas em que ninguém confia ou sobre as quais ninguém age.

**Grande empresa.** A escala exige definições compartilhadas, um catálogo governado de medidas e visões em camadas para equipes, serviços, portfólios e executivos. A tentação de consolidar tudo em um número é forte e danosa. Mantenha as visões das equipes de propriedade das equipes, publique definições comuns e exija um propósito declarado para qualquer nova medida em uma visão da liderança (veja o tópico 1.4, Governança e responsabilidade das métricas).

**Governo e setor público.** As obrigações de relato e a responsabilização pública muitas vezes ditam certas medidas. Mantenha as medidas obrigatórias visíveis e claramente separadas das que as equipes usam para melhorar e explique ao público e aos órgãos de supervisão o que as cifras podem e não podem mostrar. A linguagem simples e a acessibilidade importam para qualquer exibição compartilhada fora da organização (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos de um programa de painéis incluem o tempo de entrevistar os públicos, projetar e construir, conectar e limpar dados, escrever definições, treinar e apoiar os usuários e manter a exibição ao longo do tempo. O maior custo oculto é o tempo das pessoas que leem números que não ajudam e das reuniões gastas debatendo de quem é o número certo. Construções baratas e rápidas são comuns, e o custo real chega depois em manutenção e desconfiança.

Os retornos incluem reconhecimento mais rápido de tendências, menos discussões sobre definições, trabalho de melhoria mais bem direcionado e menor esforço de relato quando uma fonte governada substitui vários relatórios manuais. Construa o argumento a partir dos seus próprios dados: horas gastas em relatórios manuais antes e depois, o número de versões concorrentes da mesma cifra e as decisões informadas pela exibição. Evite citar cifras publicadas sobre o valor da análise sem uma fonte rastreável e relevância para o seu contexto. A alegação crível é modesta: medidas menos numerosas e melhores, confiáveis e usadas (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **A parede de blocos.** Todo número compete por atenção. Corte para um punhado por público e ponha o detalhe um passo abaixo.
- **Gestão por cor.** As cores de status viram com ruído e conduzem reações. Mostre tendências e use regras que respeitem a variação.
- **Nenhuma definição.** Duas equipes leem o mesmo rótulo de modo diferente. Anexe uma definição e um responsável a toda medida.
- **Painéis como vigilância.** As visões em nível individual corroem a confiança e distorcem os dados. Mostre equipes, serviços e sistemas.
- **Um único número para resumir tudo.** Esconde as compensações que devia expor. Mostre poucos, equilibrados.
- **Construir uma vez e nunca rever.** A exibição fica obsoleta. Reveja com o público em um ritmo e aposente medidas.
- **Exibições de vaidade.** Grandes contagens de atividade sem resultados. Pareie todo volume com uma medida de resultado.
- **O relatório que ninguém pediu.** Construído a partir dos dados disponíveis em vez das perguntas feitas. Comece pelas perguntas.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Público e perguntas | Construído a partir dos dados disponíveis | Algumas equipes pedem o que precisam | Públicos e perguntas escritos; pequenas visões por público | Cobertura de perguntas e ligação a decisões revistas e agidas | Os públicos co-projetam as visões, incluindo clientes e fornecedores, e as perguntas evoluem com os serviços |
| Projeto e contexto | Muitos blocos sem histórico | Algumas tendências e definições | Poucas medidas por visão, com tendência, distribuição e definição em cada medida | Exibições conscientes da variação; medidas companheiras para cada destaque | As visões se adaptam a metas em mudança; padrões compartilhados reutilizados entre equipes |
| Dados e manutenção | Manual, obsoleto, sem dono | Alguma automação; responsáveis informais | Feeds automatizados, responsáveis nomeados, atualidade mostrada | Atualidade e completude das definições geridas; aposentadoria rotineira | Propriedade federada com definições compartilhadas; aposentadoria e melhoria conduzidas pelos usuários |

## Lista de verificação

- [ ] As perguntas de cada público estão escritas, e cada visão se mapeia a elas.
- [ ] Cada visão tem no máximo cerca de nove medidas, com o detalhe um passo abaixo.
- [ ] O conjunto é equilibrado entre fluxo, qualidade, confiabilidade, experiência e custo.
- [ ] Todo valor mostra tendência e contexto, e as medidas de tempo mostram um percentil alto.
- [ ] Toda medida tem uma definição, uma fonte, um responsável e uma hora de atualização a um clique.
- [ ] As metas são mostradas como referências, e as cores de status seguem uma regra declarada.
- [ ] As equipes veem primeiro os seus próprios dados e são donas da interpretação.
- [ ] Nenhuma visão classifica nem acompanha indivíduos.
- [ ] O painel tem um responsável nomeado, um ritmo de revisão e uma regra para aposentar medidas.
- [ ] Os dados são puxados automaticamente, com a hora da última atualização visível.

## Prompts de IA

**Transforme perguntas em uma visão.**

```text
Here are questions asked by [audience]: [list]. For each, suggest one primary
measure and one companion measure that guards against its most likely distortion.
Group them into a view of no more than seven measures, and for each state the
definition, a suggested chart type, and what context it needs. Do not invent data
or benchmarks. List your assumptions and the questions the view cannot answer.
```

**Revise um painel quanto à clareza.**

```text
Here is a description of our dashboard, listing each tile, its label, and its
definition: [paste]. Act as a new colleague reading it for the first time. List
which labels are ambiguous, which numbers lack context or trend, which tiles might
invite management by color, and which tiles could be retired. Do not rewrite the
data. List your assumptions.
```

**Redija um cartão de métrica.**

```text
Draft a metric card for [measure]. Include a plain definition, the formula, unit,
data source, owner, refresh interval, known gaps, the most likely way it will be
gamed, the paired guardrail, and the decision it should inform. Keep it under 200
words. Do not invent figures. Mark anything you are unsure about.
```

**Planeje uma revisão do painel.**

```text
Plan a 45-minute quarterly review of our [team] dashboard with its audience.
Include how to check that measures were used for decisions, how to decide which to
retire, how to record events that explain trends, and how to avoid ranking people.
List the questions the facilitator should ask and the output to record.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de cada medida de uma visão proposta.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se a especificação de um painel tem definições, responsáveis e vetores de manipulação para toda medida.

## Ideias-chave

- Parta das perguntas que um público faz e dê a cada público uma pequena visão própria.
- Equilibre o conjunto e pareie cada destaque com uma companheira que proteja contra a distorção.
- Mostre tendência, distribuição e contexto com cada valor e respeite a variação normal.
- Anexe uma definição, uma fonte, um responsável e uma hora de atualização a toda medida.
- Deixe as equipes verem e serem donas dos seus dados primeiro e nunca mostre indivíduos.
- Reveja o painel com seu público e aposente as medidas que deixaram de informar decisões.

## Referências e leituras complementares

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Painel (negócios)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Visualização de dados](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Gráfico de sequência](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Gráfico de controle](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Indicador-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator).
