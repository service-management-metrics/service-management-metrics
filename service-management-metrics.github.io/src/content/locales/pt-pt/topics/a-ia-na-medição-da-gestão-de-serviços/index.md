# A IA na medição da gestão de serviços

**Antes que a IA mude o trabalho, escreva como o trabalho é hoje; depois meça cada uso de IA contra essa linha de base e contra trabalho comparável feito sem ela, porque as alegações serão grandes e a evidência costuma ser pequena.**

## Visão geral e motivação

A inteligência artificial hoje está dentro de muitas das ferramentas que as equipes usam para construir e operar serviços. A [inteligência artificial](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) é a capacidade de sistemas computacionais de executar tarefas associadas à inteligência humana. Dentro dela, os sistemas de [aprendizado de máquina](https://en.wikipedia.org/wiki/Machine_learning) aprendem padrões a partir de dados, e os sistemas de [IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), muitas vezes construídos sobre [grandes modelos de linguagem](https://en.wikipedia.org/wiki/Large_language_model), produzem texto, código e outros conteúdos em resposta a prompts. Na gestão de serviços de TI (ITSM), essas capacidades aparecem na triagem de tickets, no resumo de incidentes, na redação de artigos de conhecimento, em respostas sugeridas para a central de serviços, na complementação e revisão de código nos pipelines de entrega, na detecção de anomalias no monitoramento e em assistentes conversacionais para usuários. [AIOps](https://en.wikipedia.org/wiki/AIOps) é o nome muitas vezes dado à aplicação de IA aos dados de operações de TI.

As alegações feitas para essas ferramentas são grandes, e a evidência em qualquer organização é, em geral, pequena. Os fornecedores relatam tempo economizado. Os primeiros adotantes relatam entusiasmo. Os executivos pedem o ganho de eficiência que foi prometido. As equipes, enquanto isso, relatam que a saída precisa ser conferida, que algumas sugestões estão confiantemente erradas e que o trabalho se sente diferente. A medição é o modo como uma organização descobre qual dessas coisas é verdade para o seu próprio trabalho. Esta parte do livro leva a IA a sério como algo a ser medido, com as mesmas barreiras de proteção de qualquer outra família de métricas.

A IA muda o problema da medição de quatro modos.

- **O volume e a velocidade sobem enquanto a qualidade fica mais difícil de ver.** A IA pode produzir tickets, respostas, código e documentos depressa, de modo que as medidas de produção sobem. Saber se a produção é boa é uma pergunta à parte (veja o tópico 10.4, Inflação de métricas e diluição da qualidade).
- **As linhas de base desaparecem.** Quando a IA está em uso diário, você não consegue recuperar como era o trabalho sem ela. Uma linha de base precisa ser capturada antes da mudança, ou um grupo de comparação precisa existir.
- **Os humanos continuam no circuito, com consequências.** Os projetos com [humano no circuito (human-in-the-loop)](https://en.wikipedia.org/wiki/Human-in-the-loop) mantêm uma pessoa responsável pelo resultado. As pessoas que revisam a saída de máquina podem ceder a ela com facilidade demais, um padrão conhecido como [viés de automação](https://en.wikipedia.org/wiki/Automation_bias), ou podem gastar mais tempo conferindo do que economizaram.
- **As saídas podem ser fluentes e erradas.** Uma [alucinação](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) é uma saída confiante não sustentada pela entrada nem pelos fatos. As medidas devem incluir uma verificação de correção, amostrada por uma pessoa.

As formas de trabalhar ágeis e do ITIL fornecem ambas uma postura diante disso. Os objetivos ágeis de entrega contínua, melhoria contínua e evolução permanente sugerem tratar cada uso de IA como um pequeno experimento: declarar o benefício esperado, tentar com algumas pessoas dispostas, comparar e decidir. O princípio orientador do ITIL de progredir iterativamente com feedback aponta na mesma direção, e sua ênfase em valor pergunta que resultado melhora para os usuários e o negócio, e não quanto texto é produzido. O objetivo de pessoas motivadas é servido quando a IA alivia o trabalho tedioso e respeita o julgamento delas, e não é servido quando a IA vira um meio de aumentar o ritmo ou de monitorar as pessoas que a usam. Ritmo sustentável significa que o tempo economizado não deve ser convertido em silêncio em mais demanda.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica à IA em sua forma mais aguda. Se a "adoção de IA" ou a "parcela de código gerada por IA" virar meta, as pessoas usarão a ferramenta onde ela não ajuda, e a qualidade pagará pelo número (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico cobre os fundamentos: onde a IA entra no trabalho, que linhas de base capturar e que medidas mostram se um uso de IA está ajudando. Os próximos tópicos aprofundam o trabalho assistido, os agentes e chatbots, a inflação e a diluição e a governança. Os fatos sobre produtos e regras de IA mudam depressa, e as afirmações desta parte sobre ferramentas ou regulamentos específicos estão datadas de outubro de 2026 e devem ser conferidas de novo.

## Princípios-chave

- **Capture uma linha de base antes de introduzir a IA.** Sem uma, toda alegação de benefício é uma opinião.
- **Trate cada uso como um experimento com uma comparação.** Compare com trabalho semelhante feito sem IA, no mesmo período.
- **Meça a qualidade por amostragem, com pessoas.** Saída fluente não é saída correta.
- **Conte o custo total.** Inclua tempo de revisão, retrabalho, licenças e custos de inferência.
- **Mantenha as pessoas responsáveis e informadas.** Quem usa a IA responde pelo resultado.
- **Não deixe a IA virar um aumento de ritmo nem um monitor.** O tempo economizado é uma escolha sobre como usar o tempo.
- **Comece com pessoas dispostas e problemas reais.** Os mandatos produzem uso sem valor.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completude da linha de base | Proporção dos casos de uso de IA planejados que têm uma linha de base pré-adoção registrada para seus indicadores principais | casos de uso com linha de base datada / casos de uso planejados | porcentagem | Registro de casos de uso | Melhoria contínua; medição e relato | Linha de base antes de um experimento | Trimestral |
| Cobertura de uso de IA | Proporção dos itens de trabalho ou tarefas elegíveis em que a IA foi usada, por caso de uso | itens em que se usou assistência de IA / itens elegíveis, a partir de logs da ferramenta ou marcações dos usuários, no nível da equipe | porcentagem | Logs de uso da ferramenta, marcações | Central de serviços; gestão de incidentes; gestão de releases e implantação | Adoção de uma ferramenta por equipes dispostas | Mensal |
| Taxa de aceitação e de alteração das sugestões | Proporção das sugestões de IA aceitas como estão, editadas ou rejeitadas | sugestões em cada categoria / sugestões oferecidas | porcentagem | Logs da ferramenta agregados por equipe | Central de serviços; gestão do conhecimento | Revisão de sugestões de máquina | Mensal |
| Exatidão da saída revisada | Proporção das saídas de IA amostradas julgadas corretas e adequadas ao propósito por um revisor qualificado | saídas julgadas corretas / saídas amostradas | porcentagem | Registros de revisões amostradas | Garantia de qualidade; gestão do conhecimento | Definição de pronto para a saída | Mensal |
| Tempo da tarefa contra a linha de base | Tempo para concluir uma tarefa definida com IA comparado com a linha de base ou um grupo de comparação | mediana e 85º percentil do tempo da tarefa com IA menos o mesmo para a linha de base ou a comparação | minutos ou horas | Tarefas cronometradas, registros de data e hora dos tickets | Central de serviços; gestão de incidentes | Tempo de ciclo de uma tarefa | Trimestral |
| Custo por tarefa assistida por IA | Custo total do trabalho assistido por IA por tarefa, incluindo revisão e retrabalho | (custo de licença e de uso + custo do tempo de revisão e retrabalho) / tarefas concluídas com IA | moeda por tarefa | Faturas de fornecedores, estimativas de tempo, rastreador de trabalho | Gestão financeira de serviços | Custo de servir por resultado | Trimestral |
| Movimento do resultado contra a comparação | Mudança no indicador de resultado do trabalho assistido por IA comparada com trabalho semelhante não assistido | mudança no indicador do grupo assistido por IA menos a mudança no grupo de comparação | unidades do indicador | Medidas de resultado por caso de uso (qualidade, satisfação, taxa de reabertura, defeitos) | Melhoria contínua | Aprendizado com experimentos | Trimestral |

Defina cada caso de uso pela tarefa, pelos usuários e pelos indicadores de resultado e registre-os no registro. A cobertura de uso de IA é uma medida descritiva, e não uma meta. A exatidão da saída revisada é julgada contra um padrão escrito por alguém qualificado que não produziu a saída. O tempo da tarefa inclui o tempo de dar o prompt, revisar e corrigir além de gerar. O custo por tarefa conta o tempo das pessoas gasto conferindo e corrigindo. O movimento do resultado exige uma comparação escolhida de antemão e uma nota sobre outras mudanças durante o período.

## Recomendações

### Decida onde a IA tem lugar

**1. Liste as tarefas e o problema que cada uso de IA trata.** Parta da dor, e não da ferramenta: redação repetida, triagem lenta, conhecimento disperso, revisões longas, alertas ruidosos. Para cada uso candidato, escreva o problema, quem o sente, o resultado que deve melhorar e os riscos. Pule os usos sem um problema claro. Este é o registro de que a linha de base e as medidas dependem.

**2. Classifique o risco de cada uso.** Uma ferramenta que redige notas internas carrega um risco diferente do de uma que altera sistemas de produção, responde a clientes ou toma decisões sobre pessoas. Classifique os usos pelo dano se a saída estiver errada, por quem é afetado e por se uma pessoa a revê antes de ela produzir efeito. Os usos de risco mais alto precisam de medidas, amostragem e governança mais fortes (veja o tópico 10.5, Métricas de governança e risco de IA).

**3. Comece com pessoas dispostas e tarefas delimitadas.** Faça o piloto com voluntários em uma tarefa comum e verificável. Os voluntários dão feedback honesto e adaptam a ferramenta ao trabalho deles. Uma tarefa delimitada torna viáveis as linhas de base e as comparações. Evite começar pelo trabalho mais sensível.

### Capture linhas de base e monte comparações

**4. Registre a linha de base antes do primeiro uso.** Para cada caso de uso, capture o estado atual dos indicadores: tempo para concluir, qualidade ou taxa de defeitos, retrabalho, satisfação dos usuários e custo. Colha observações suficientes para ver a variação normal (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Date a linha de base e guarde-a. Uma linha de base tomada depois da implantação é um registro do novo mundo.

**5. Construa uma comparação.** Onde possível, mantenha um grupo semelhante ou um conjunto de tarefas que não use IA durante o período do piloto, ou alterne o uso por semana ou por tipo de tarefa de um modo justo. A aleatorização é ideal e muitas vezes impraticável. Diga com clareza o que mais mudou. Sem uma comparação, as melhorias devidas à sazonalidade, ao quadro de pessoal ou ao aprendizado serão creditadas à ferramenta.

**6. Meça o tempo com honestidade.** O tempo até um primeiro rascunho raramente é a medida certa. Meça o tempo até um resultado concluído e conferido, incluindo prompt, revisão e correção. As pessoas muitas vezes relatam o tempo economizado com base na etapa de geração, e a etapa de revisão consome parte dele ou tudo. Estudos de tempo em uma amostra de tarefas valem o esforço.

### Meça a qualidade e o custo

**7. Amostre as saídas para revisão por pessoas qualificadas.** A cada mês, extraia uma amostra aleatória de saídas assistidas por IA e peça a uma pessoa qualificada que as julgue contra um padrão escrito. Relate a exatidão, os tipos de erros encontrados e as tendências. É a principal proteção contra a propagação de erros fluentes. Mantenha o revisor independente de quem produziu e alterne os revisores.

**8. Observe os padrões de aceitação e de alteração.** Uma taxa de aceitação muito alta pode sinalizar viés de automação, em que as pessoas aceitam sem conferir. Uma taxa muito baixa pode sinalizar uma ferramenta que não é útil. Use as taxas como estímulos à conversa com a equipe e pergunte o que os números significam na experiência dela. Não defina metas de aceitação.

**9. Conte o custo total por tarefa.** Inclua taxas de licença, cobranças por uso, o tempo gasto dando prompt, revisando e corrigindo, treinamento e esforço de governança. Compare com o custo da linha de base. Uma ferramenta que faz rascunhos depressa e exige muita correção pode custar mais que o modo antigo. Inclua o custo dos erros que chegam aos usuários.

### Acerte o lado humano

**10. Proteja as pessoas do monitoramento e da deriva de ritmo.** Agregue os dados de uso de IA no nível da equipe e não os use para avaliar indivíduos. Não use o uso como medida de desempenho. Combine de antemão que o tempo economizado não virará automaticamente carga extra e decida com a equipe o que fazer com ele: qualidade, aprendizado, melhoria ou outro trabalho. Um ritmo constante é uma meta de projeto (veja o tópico 9.2, Métricas de satisfação e bem-estar).

**11. Pergunte a quem usa.** Pulsos curtos e conversas revelam o que os números perdem: onde a ferramenta ajuda, onde frustra, onde desloca o trabalho de criar para conferir e se muda a satisfação com o emprego. Trate com respeito as preocupações sobre habilidades, qualidade e segurança no emprego.

**12. Decida, publique e revisite.** Ao fim de cada piloto, decida escalar, adaptar ou parar e registre a evidência. Compartilhe os resultados com honestidade, incluindo os nulos e negativos. Revisite as decisões à medida que as ferramentas mudam, o que fazem depressa. Um uso que não ajudou no ano passado pode ajudar agora, e o inverso.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Completude da linha de base | Registrar linhas de base depois do fato; usar indicadores convenientes | Linhas de base com data e hora; revisão independente do método da linha de base |
| Cobertura de uso de IA | Impor o uso; contar invocações triviais ou automáticas | Nunca uma meta; comparar com o movimento do resultado; contar o uso significativo |
| Taxa de aceitação e de alteração das sugestões | Premiar a aceitação; tornar a rejeição trabalhosa | Sem metas; exatidão da saída revisada; perguntar aos usuários sobre a experiência |
| Exatidão da saída revisada | Amostrar saídas fáceis; revisores lenientes | Amostra aleatória por revisores independentes; padrão escrito; rodízio de revisores |
| Tempo da tarefa contra a linha de base | Cronometrar só a geração; escolher tarefas fáceis | Tempo até o resultado conferido; amostrar tarefas aleatoriamente; incluir revisão e retrabalho |
| Custo por tarefa assistida por IA | Deixar de fora o tempo de revisão ou o custo de governança | Lista de verificação do custo total; comparar com estudos de tempo |
| Movimento do resultado contra a comparação | Escolher grupos ou períodos favoráveis; ignorar outras mudanças | Comparação e período pré-combinados; lista de outras mudanças |

Uma leitura saudável é linhas de base para todo piloto, tempo medido até resultados concluídos, exatidão conferida por pessoas qualificadas, custos que incluem a revisão, resultados comparados com justiça e equipes que dizem que a ferramenta serve ao seu julgamento.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Piloto com voluntários | Feedback honesto; baixo risco | Os voluntários são entusiastas; os resultados podem não se generalizar |
| Implantação por mandato | Cobertura rápida | Uso sem valor; ressentimento; manipulação |
| Comparação controlada | Evidência crível | Esforço; nem sempre possível |
| Apenas antes e depois | Simples | Confundida por outras mudanças |
| Economias relatadas pelo fornecedor | Fáceis de obter | Otimistas; sem contexto |
| Tarefas cronometradas próprias | Ancoradas no seu trabalho | Demoradas; amostras pequenas |
| Revisão pesada de toda saída | Segura | Remove o benefício |
| Revisão amostrada | Escala | Alguns erros escapam |

A resposta pragmática é rodar pequenos pilotos com linhas de base e comparações, amostrar as saídas para conferir a qualidade, contar o custo total e decidir pela evidência. Use as cifras dos fornecedores como hipóteses a testar.

## Perguntas para discutir com sua equipe

**1. Onde esperamos que a IA nos ajude, e o que veríamos se ajudasse?**
Listem os usos candidatos e, para cada um, o indicador e a linha de base que temos hoje. O facilitador deve pressionar por especificidades: qual tarefa, qual medida, que tamanho de mudança importaria. Escolham um uso para pilotar e combinem a linha de base.

**2. O que nos faria confiar ou desconfiar de uma sugestão de IA, e como saberíamos que estávamos errados?**
Discutam casos em que a saída estava errada e como foi percebido. Considerem como a revisão funciona na prática e se a pressão leva a pulá-la. Combinem um método de amostragem que alguém independente conduza.

**3. Quanto do tempo que economizamos seria gasto conferindo?**
Cronometrem uma tarefa real com e sem a ferramenta, incluindo prompt e revisão. Comparem com o que as pessoas esperam. A conversa muitas vezes revela onde está o ganho e onde não está.

**4. O que devemos fazer com o tempo que economizamos?**
Decidam de antemão. As opções incluem trabalho de qualidade, aprendizado, melhoria ou menos pressão. Discutam como evitar que o tempo seja absorvido em silêncio por mais demanda. Combinem com os líderes como a equipe o protegerá.

**5. O que não gostaríamos que a IA fizesse aqui, e por quê?**
Listem as tarefas que precisam de julgamento humano, empatia ou responsabilização. Discutam os riscos para os usuários e para as habilidades. O facilitador deve registrar os limites como insumos para a governança.

**6. Como saberemos quando parar?**
Definam a evidência que encerraria o piloto ou o uso. Combinem quem decide e quando. Um piloto sem critérios de saída vira uma instalação permanente.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega usam IA para código, testes, revisões e documentação. Devem medir o tempo até um resultado revisado e funcional, observar a qualidade e os defeitos e manter significativa a revisão humana. Devem resistir a métricas que contam linhas geradas ou aceitação e insistir em medidas de resultado, como defeitos e estabilidade.

### Equipes de serviço e operações

As equipes de operações e da central de serviços usam IA para triagem, resumos, sugestões e monitoramento. Devem comparar a qualidade do tratamento e da resolução com as linhas de base, amostrar as saídas e observar os efeitos sobre os usuários e sobre os contatos repetidos. Devem ser consultadas antes que a IA seja posta diante dos usuários.

### Liderança e governança

Os líderes patrocinam programas de IA e enfrentam pressão para mostrar ganhos. Devem insistir em linhas de base e comparações, financiar o trabalho de revisão, evitar metas de uso e proteger as pessoas do monitoramento e da deriva de ritmo. A governança deve exigir classificação de risco e evidência antes de escalar.

### Clientes e usuários

Os usuários encontram a IA em respostas, sugestões e ações automatizadas. Querem ajuda correta e compreensível e a possibilidade de alcançar uma pessoa. Devem ser informados de que interagem com IA onde apropriado, e o feedback deles é a evidência-chave de se ela ajuda (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

O grupo de tecnologia de uma seguradora de porte médio opera uma central de serviços interna para 4.000 funcionários e várias equipes de produto. A liderança compra licenças de um assistente de IA e pede um relatório do tempo economizado após três meses. Os números abaixo são ilustrativos.

A chefe de gestão de serviços insiste em uma linha de base. Para a tarefa mais comum da central de serviços, redigir respostas a requisições de acesso e de senha, ela cronometra 120 tickets recentes: tempo mediano de tratamento de 11 minutos, 85º percentil de 24, uma taxa de reabertura de 6% e uma nota de satisfação da pesquisa que é estável. Escolhe duas equipes para pilotar o assistente e mantém duas equipes semelhantes como comparação. As equipes-piloto são voluntárias.

Após oito semanas, o tempo mediano de tratamento das equipes-piloto é de 8 minutos e o 85º percentil é de 19, contra 11 e 23 nas equipes de comparação. Os logs da ferramenta mostram que os atendentes aceitam as sugestões como escritas em 52% dos casos, as editam em 38% e as rejeitam em 10%. Uma amostra aleatória mensal de 80 respostas, revista por um atendente sênior que não está no piloto, acha 91% totalmente corretas, com erros concentrados em um procedimento pouco usado em que o assistente deu passos desatualizados. A taxa de reabertura nas equipes-piloto sobe levemente para 7%, dentro da variação normal. O custo por ticket cai modestamente quando se contam licenças e tempo de revisão. Uma pesquisa mostra que os atendentes apreciam os rascunhos e não gostam da conferência extra de respostas longas. Dois atendentes dizem sentir pressão para tratar mais tickets por hora.

A chefe de gestão de serviços relata uma economia de tempo de cerca de um quarto na mediana e declara as ressalvas: duas equipes, oito semanas, voluntários e uma taxa de reabertura que precisa ser observada. Combina com os líderes que o tempo economizado irá para a base de conhecimento e para os casos complexos e que nenhuma meta de tickets subirá. O procedimento desatualizado é corrigido na base de conhecimento. Um gerente sênior pede o uso obrigatório em toda a empresa e uma meta de 80% de aceitação. Ela recusa a meta, explicando que uma meta de aceitação premiaria o não conferir, e propõe estender o piloto a mais duas equipes com as mesmas medidas. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Introduza a IA em pequenos passos com as partes interessadas, com uma linha de base e uma comparação para cada passo, e reveja o resultado na conversa regular de melhoria. O cuidado é que lançar a IA em todo lugar de uma vez remove o grupo de comparação.

### IA

Este tópico inteiro trata de IA; por isso a regra é simples: registre o trabalho como ele é hoje, meça cada uso contra essa linha de base e contra trabalho comparável feito sem IA e pareie todo ganho de velocidade com uma medida de qualidade conferida. Nomeie um responsável para cada uso e decida de antemão onde um humano decide. O cuidado é que as cifras dos fornecedores descrevem outras organizações; por isso use os seus próprios dados.

### Automação

Colete automaticamente os eventos de uso, de sugestão, de aceitação e de alteração e meça a automação que aplica a saída da IA pelas taxas de erro e de reversão. O cuidado é que as taxas de aceitação podem subir porque as pessoas param de conferir; por isso amostre a saída aceita.

### Análise

Relate a exatidão a partir de uma amostra revista, com o tamanho da amostra, e os resultados contra uma comparação, com os limites declarados. A decisão informada é expandir, mudar ou parar um uso de IA. O cuidado é que pequenos pilotos dão resultados ruidosos; por isso evite prometer uma cifra a partir de um piloto.

## Olhar setorial

**Startup.** As ferramentas são adotadas depressa e muitas vezes de modo informal. Capture uma linha de base simples de tempo e defeitos para o uso principal, mantenha a revisão humana de tudo que for voltado ao cliente e evite se prender cedo a um único fornecedor. Fique atento à segurança e à exposição de dados quando o pessoal usa ferramentas públicas.

**Pequena empresa.** Os assistentes prontos podem oferecer ajuda real para redação e tarefas rotineiras. Meça em pequena escala: o tempo de algumas tarefas reais e a taxa de correções. Cuidado com os dados confidenciais e confira os termos do fornecedor sobre como os dados são usados.

**Grande empresa.** A escala exige governança, padrões de compras e uma abordagem comum de medição. Rode pilotos com comparação, publique os resultados internamente e compartilhe linhas de base e métodos entre as equipes. Cuidado com programas que relatam o uso como sucesso.

**Governo e setor público.** As decisões que afetam cidadãos podem estar sujeitas a deveres legais de transparência, justiça e revisão humana. Classifique os usos por risco, guarde registros de como a IA foi usada em decisões e seja aberto sobre isso. As regras de compras e a proteção de dados se aplicam, e algumas jurisdições têm leis específicas de IA que devem ser conferidas na data de hoje (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são licenças ou cobranças por uso, integração, treinamento, o tempo para capturar linhas de base e conduzir comparações, o tempo das pessoas gasto revisando e corrigindo saídas e o esforço de governança. Os custos podem escalar com o uso e mudar com os preços dos fornecedores; por isso modele uma faixa.

Os retornos potenciais são tempo recuperado em tarefas repetitivas, redação e busca mais rápidas, melhor cobertura do conhecimento e alívio do trabalho tedioso para o pessoal. São possibilidades a testar, e não premissas a creditar. Construa o argumento a partir dos seus próprios pilotos: tempo de tarefa medido até um resultado conferido, exatidão revista, retrabalho e custo total por tarefa, contra a linha de base e a comparação. Evite citar percentuais de produtividade de fontes de fornecedores ou de pesquisas a menos que possa rastrear o método e a adequação ao seu trabalho. Inclua o risco de erros que chegam aos usuários e o custo de governar as ferramentas (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Introduzir a IA sem uma linha de base.** Você não sabe o que mudou. Capture-a primeiro.
- **Medir a velocidade de geração.** A economia pode sumir na revisão. Meça o tempo até um resultado conferido.
- **Metas de adoção.** Produzem uso sem valor. Trate a cobertura como descritiva.
- **Confiar nas alegações dos fornecedores.** São hipóteses. Teste-as no seu trabalho.
- **Revisão que não é real.** O viés de automação transforma a revisão em carimbo. Amostre e confira de forma independente.
- **Converter o tempo economizado em mais demanda.** Corrói a confiança e o ritmo sustentável. Decida de antemão para que serve o tempo.
- **Monitorar o uso individual.** Gera medo. Agregue no nível da equipe.
- **Pilotos sem fim.** Viram permanentes por omissão. Defina critérios de saída.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Propósito e linhas de base | Ferramentas adotadas por entusiasmo | Casos de uso listados | Registro com problema, classe de risco, linha de base e indicador de cada uso | Linhas de base e comparações exigidas antes de escalar; resultados publicados | Linhas de base e métodos compartilhados entre equipes e parceiros; usos aposentados quando a evidência se esvai |
| Evidência de benefício | Anedotas e alegações de fornecedores | Estimativas informais de tempo | Tarefas cronometradas; exatidão amostrada; custo total por tarefa | Movimento do resultado contra a comparação relatado com limites | Visão de portfólio de onde a IA ajuda, com aprendizado amplamente compartilhado |
| Pessoas e ritmo | Mandatos; monitoramento | Cuidado informal | Apenas dados no nível da equipe; tempo economizado alocado por acordo | Preocupações acompanhadas; habilidades e satisfação medidas | Co-projeto do uso de IA com usuários e pessoal; ritmo sustentado protegido |

## Lista de verificação

- [ ] Cada uso de IA tem um problema escrito, uma classe de risco, um responsável e critérios de saída.
- [ ] Existe uma linha de base datada para cada piloto antes do primeiro uso.
- [ ] Um grupo de comparação ou tarefas de comparação são definidos de antemão.
- [ ] O tempo é medido até um resultado concluído e conferido.
- [ ] As saídas são amostradas mensalmente e revistas por pessoas qualificadas e independentes.
- [ ] O custo total por tarefa inclui revisão e retrabalho.
- [ ] Os dados de uso são agregados no nível da equipe e não usados para indivíduos.
- [ ] A equipe combinou o que fazer com o tempo economizado.
- [ ] Os usuários são consultados sobre a experiência com a ferramenta.
- [ ] Os pilotos terminam numa decisão registrada de escalar, adaptar ou parar.

## Prompts de IA

**Redija uma entrada de caso de uso.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Projete um estudo de tarefas cronometradas.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Planeje a amostragem das saídas.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Decida o que fazer com o tempo economizado.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica relacionada a IA antes de relatá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de IA registra sua linha de base, sua comparação, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Capture uma linha de base datada antes de a IA ser usada e compare com trabalho semelhante feito sem ela.
- Meça o tempo até um resultado concluído e conferido e amostre as saídas quanto à exatidão com revisores independentes.
- Conte o custo total, incluindo revisão e retrabalho.
- Trate o uso e a aceitação como descritivos, nunca como metas.
- Decida de antemão o que fazer com o tempo economizado e mantenha um ritmo sustentável.
- Mantenha os dados de uso no nível da equipe e termine todo piloto com uma decisão registrada.

## Referências e leituras complementares

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Inteligência artificial](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Aprendizado de máquina](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Inteligência artificial generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Grande modelo de linguagem](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Humano no circuito](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Viés de automação](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Alucinação (inteligência artificial)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
