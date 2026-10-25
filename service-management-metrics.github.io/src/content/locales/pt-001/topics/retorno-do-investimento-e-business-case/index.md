# Retorno do investimento e business case

**Um business case é uma previsão; por isso escreva-o com faixas e premissas declaradas, financie o trabalho em etapas conforme a evidência chega e confira a previsão contra o que aconteceu, para que o próximo caso seja mais honesto que o último.**

## Visão geral e motivação

Melhorar o modo como os serviços de TI são entregues e operados custa dinheiro e atenção, e toda proposta compete com outras. Uma nova plataforma, uma mudança de pessoal, um programa de automação e uma iniciativa de qualidade prometem todos um futuro melhor. Os líderes precisam de um modo de compará-los, e as equipes precisam de um modo de defender o trabalho que importa. O business case é a ferramenta tradicional, e o retorno do investimento é seu número mais conhecido.

Um [business case](https://en.wikipedia.org/wiki/Business_case) é uma justificativa para um projeto ou empreendimento proposto, que em geral expõe o problema, as opções, os custos, os benefícios e os riscos. O [retorno do investimento](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) compara o ganho de um investimento com seu custo. O [custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) conta tudo o que um ativo ou serviço custa ao longo de sua vida, incluindo compra, operação, suporte e descarte. Os tópicos anteriores desta parte fornecem os insumos: o custo de ativos, software, registros de configuração, serviços e recursos de nuvem (veja o tópico 7.5, Custo de serviço e economia unitária, e o tópico 7.6, Métricas de FinOps e custos de nuvem), e o tópico de benefícios dá a evidência dos resultados (veja o tópico 6.5, Realização de valor e resultados de negócio).

Duas tensões tornam difícil fazer bem os business cases.

- **Os business cases são previsões escritas por pessoas que querem aprovação.** O autor muitas vezes quer que a proposta tenha sucesso, e o incentivo para inflar os benefícios e aparar os custos é forte. O [viés de otimismo](https://en.wikipedia.org/wiki/Optimism_bias) é a tendência a esperar resultados melhores do que os prováveis e é bem documentado no planejamento de projetos. O corretivo é a [previsão por classe de referência (reference class forecasting)](https://en.wikipedia.org/wiki/Reference_class_forecasting), que baseia as estimativas nos resultados reais de projetos passados semelhantes em vez de uma história de baixo para cima. O seu próprio histórico de casos passados é a melhor classe de referência que você tem.
- **A entrega contínua muda o que um business case pode prometer.** A abordagem ágil pressupõe que os requisitos e o valor são descobertos à medida que o trabalho avança. Um escopo, preço e conjunto de benefícios fixos definidos com um ano de antecedência conflita com isso. A resposta ágil é financiar em etapas: um pequeno primeiro passo para aprender e depois mais financiamento conforme a evidência chega. Isso combina com o objetivo da entrega contínua e da colaboração contínua com as partes interessadas e combina com uma função financeira que quer controle. Significa também que o business case é um documento vivo, revisitado conforme as hipóteses são testadas (veja o tópico 6.5, Realização de valor e resultados de negócio).

Algumas ideias das finanças ajudam. O [valor do dinheiro no tempo](https://en.wikipedia.org/wiki/Time_value_of_money) diz que uma unidade monetária hoje vale mais que uma depois; por isso benefícios mais distantes no futuro contam menos. O [valor presente líquido](https://en.wikipedia.org/wiki/Net_present_value) (VPL, ou NPV) converte um fluxo de custos e benefícios futuros em um único valor hoje usando uma taxa de desconto. O [período de payback](https://en.wikipedia.org/wiki/Payback_period) é o tempo para recuperar o desembolso inicial. Cada um é um resumo e cada um esconde premissas; por isso declare-as. O [custo de oportunidade](https://en.wikipedia.org/wiki/Opportunity_cost) lembra que o custo de escolher uma opção é o valor da melhor alternativa abandonada. Um [custo irrecuperável (sunk cost)](https://en.wikipedia.org/wiki/Sunk_cost) é dinheiro já gasto que não pode ser recuperado e não deve conduzir a decisão de continuar.

Todo número de um business case pode ser manipulado, escolhendo um período generoso, uma taxa de desconto favorável ou benefícios difíceis de conferir. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica ao próprio caso: quando a aprovação depende de um ROI de manchete, os autores aprendem a produzi-lo (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). As medidas abaixo incluem, portanto, uma verificação da qualidade das previsões passadas.

## Princípios-chave

- **Trate o caso como uma previsão com faixa.** Mostre os resultados baixo, esperado e alto e declare as premissas por trás de cada um.
- **Conte o custo total.** Inclua operação, suporte, treinamento, esforço de mudança e descarte além da construção.
- **Seja explícito sobre os benefícios e sua evidência.** Separe economia de custos, custo evitado, receita e redução de risco e diga como cada um será medido.
- **Financie em etapas.** Libere dinheiro conforme as hipóteses são testadas e o quadro melhora.
- **Compare com as alternativas, incluindo não fazer nada.** O custo de ficar parado faz parte do caso.
- **Aprenda com o seu próprio histórico.** Confira as previsões contra os resultados e ajuste.
- **Ignore os custos irrecuperáveis.** Decida pelo que está adiante.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Retorno do investimento | Ganho líquido relativo ao custo em um período declarado | (benefícios totais menos custos totais) / custos totais no período | porcentagem | Business case, razão, registro de benefícios | Gestão financeira de serviços; melhoria contínua | Revisão de resultados contra o financiamento | Na decisão e em cada revisão |
| Custo total de propriedade | Custo de vida inteira de um serviço ou ativo em um período declarado | custos de aquisição + operação + suporte + mudança + treinamento + descarte no período | moeda | Razão, modelos de custo, contratos de fornecedores | Gestão financeira de serviços; gestão de ativos de TI | Custo de uma equipe persistente e suas plataformas | Na decisão e anualmente |
| Período de payback | Tempo para os benefícios líquidos acumulados igualarem o investimento inicial | tempo em que benefícios acumulados menos custos acumulados chega a zero | meses | Fluxos de caixa do business case | Gestão financeira de serviços | Tempo até o primeiro valor, estendido à recuperação do custo | Na decisão e em cada revisão |
| Valor presente líquido | Valor presente dos benefícios esperados menos o valor presente dos custos, a uma taxa de desconto declarada | soma dos períodos de (benefício menos custo) / (1 + taxa de desconto) elevado ao período | moeda | Fluxos de caixa do business case, política financeira sobre a taxa de desconto | Gestão financeira de serviços | Priorização baseada em valor | Na decisão |
| Exatidão da estimativa de custo | Razão entre o custo real e o estimado das iniciativas concluídas | custo real / custo estimado na aprovação, por iniciativa e como distribuição | razão | Registros de business cases e razão | Gestão financeira de serviços; melhoria contínua | Exatidão da previsão | Trimestral |
| Exatidão da estimativa de benefício | Razão entre o benefício realizado e o esperado das iniciativas concluídas, usando as regras de evidência para benefícios | benefício realizado / benefício esperado na aprovação, por iniciativa e como distribuição | razão | Registros de business cases e registro de benefícios | Melhoria contínua; governança do sistema de valor de serviço | Revisão de resultados com as partes interessadas | Trimestral |
| Taxa de paradas baseadas em evidências | Proporção das iniciativas financiadas que foram paradas ou reformuladas em um portão de etapa porque a evidência mudou o quadro | iniciativas paradas ou reformuladas por evidência em um portão / iniciativas que chegaram a um portão | porcentagem | Registro de decisões dos portões de etapa | Melhoria contínua; governança de portfólio | Aprendizado com o trabalho liberado | Trimestral |

Declare o período, a taxa de desconto e o que conta como custo ou benefício para cada cifra e registre-os com o caso. O ROI e o VPL dependem muito deles; por isso dois casos só são comparáveis se usam as mesmas regras. A exatidão de custo e de benefício é mostrada como distribuição, por exemplo a razão mediana e a dispersão, entre iniciativas passadas, e não como uma média única. Uma taxa baixa de paradas baseadas em evidências pode significar boa seleção ou portões que nunca dizem não; por isso leia-a com as medidas de exatidão.

## Recomendações

### Escreva o caso com honestidade

**1. Comece pelo problema e pelas opções.** Descreva o problema, quem o vivencia e quanto custa agora. Liste pelo menos três opções: não fazer nada, um passo mínimo e a mudança proposta, mais qualquer alternativa séria. "Não fazer nada" tem custos, como incidentes contínuos ou risco crescente, e incluí-los torna justa a comparação.

**2. Conte o custo total de propriedade ao longo da vida da mudança.** Inclua construção, licenças, hospedagem, operação, suporte, treinamento, migração, o tempo das pessoas que a usarão e o descarte. Os custos que chegam depois do lançamento são os mais frequentemente deixados de fora. Use um período que combine com a vida do benefício e diga qual é.

**3. Descreva cada benefício e como será medido.** Separe os tipos. A economia de custos reduz o gasto real. O custo evitado previne um gasto que de outro modo teria ocorrido e é mais difícil de verificar. Os benefícios de receita dependem do comportamento do mercado. A redução de risco diminui a probabilidade ou o impacto de uma perda e é mais bem declarada em termos de um cenário específico. Para cada um, nomeie o indicador, a linha de base e o responsável (veja o tópico 6.5, Realização de valor e resultados de negócio).

**4. Dê faixas e diga o que as conduz.** Para custos e benefícios, dê uma estimativa baixa, uma esperada e uma alta, com as principais premissas. Uma [análise de sensibilidade](https://en.wikipedia.org/wiki/Sensitivity_analysis) mostra como o resultado muda quando uma premissa muda e quais premissas mais importam. Se o caso só funciona quando todas as premissas são generosas, diga isso. A simulação pode combinar faixas, embora também possa dar falso conforto se os insumos forem palpites.

### Corrija o otimismo

**5. Use o seu próprio histórico como classe de referência.** Olhe os resultados reais de custo e de benefício das suas iniciativas passadas semelhantes e compare-os com o que foi previsto. Se as iniciativas passadas custaram em média 30% a mais que o estimado, uma nova estimativa que ignora isso provavelmente repetirá o erro. Ajuste, ou pelo menos mostre o ajuste. As medidas de exatidão de custo e de benefício acima constroem esse registro.

**6. Peça a alguém de fora da equipe que revise o caso.** Um colega das finanças ou de outra equipe, sem investimento no resultado, lê o caso em busca de custos ausentes, benefícios generosos e premissas não testadas. Faça da revisão algo rotineiro e construtivo. Um caso que sobrevive a ela é mais forte.

**7. Separe, onde possível, quem estima de quem defende.** As equipes de entrega são boas em estimar esforço, e os patrocinadores são bons em julgar valor. Quando a mesma pessoa quer aprovação, as estimativas derivam. Registre quem produziu quais números.

### Financie em etapas

**8. Libere o financiamento em passos ligados a evidências.** Financie uma pequena primeira etapa para testar a premissa mais arriscada: construa uma fatia fina, rode um piloto ou meça a linha de base. Defina de antemão que evidência justificaria a etapa seguinte, o que faria você reformular o trabalho e o que faria você parar. É a abordagem ágil do risco aplicada ao dinheiro, e limita o custo de estar errado.

**9. Decida em cada etapa pelo que está adiante.** O dinheiro já gasto é um custo irrecuperável e não deve pesar sobre continuar ou não. Pergunte se o custo restante é justificado pelo benefício esperado restante, dado o que você aprendeu. Dê às equipes permissão para parar e trate uma parada bem fundamentada como um bom resultado.

**10. Mantenha as partes interessadas no circuito.** Reveja o caso com o patrocinador e o responsável pelo benefício em cada etapa. A colaboração com as partes interessadas durante todo o percurso é um objetivo ágil central e evita que o caso se torne um documento que ninguém lê depois da aprovação.

### Confira e aprenda

**11. Reveja o resultado contra o caso.** Nos pontos de revisão combinados, compare o custo real e o benefício realizado com a previsão. Registre as razões, os motivos das diferenças e o que você mudaria no próximo caso. Faça a revisão sem culpados e factual, já que o relato honesto depende disso.

**12. Relate a distribuição da exatidão aos decisores.** Mostre, entre as iniciativas passadas, como as previsões se compararam com os resultados. Um portfólio em que os benefícios ficam regularmente aquém por uma margem semelhante diz aos líderes quanto confiar em um novo caso e dá aos autores uma razão para serem honestos. Pareie-a com a taxa de paradas baseadas em evidências para ver se os portões funcionam.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Retorno do investimento | Escolher um período longo ou contar benefícios brandos; deixar de fora o custo de operação | Regras fixas de período e escopo de custos; qualidade da evidência dos benefícios; revisão independente |
| Custo total de propriedade | Omitir suporte, treinamento, esforço de mudança ou descarte; usar volumes otimistas | Lista de verificação das categorias de custo; comparar com o TCO real de trabalhos passados semelhantes |
| Período de payback | Definir o início tarde; contar benefícios que não são realizados | Definição do relógio fixa; comparar com a exatidão do benefício realizado |
| Valor presente líquido | Escolher uma taxa de desconto baixa; estender o horizonte | Taxa de desconto definida pela política financeira; análise de sensibilidade mostrada |
| Exatidão da estimativa de custo | Revisar a estimativa de base depois do fato; excluir estouros como mudanças de escopo | Estimativa congelada na aprovação; registrar as mudanças de escopo com aprovação; mostrar o custo total até a conclusão |
| Exatidão da estimativa de benefício | Contar benefícios que não foram medidos; redefinir o benefício | Regras do registro de benefícios; o responsável fora da equipe de entrega confirma |
| Taxa de paradas baseadas em evidências | Parar trabalho de baixo valor para inflar a taxa; nunca parar nada | Ler com as medidas de exatidão; rever os motivos de paradas e de continuações |

Uma leitura saudável é um portfólio com histórico: previsões um tanto otimistas de um modo conhecido, casos que incluem faixas e sensibilidade e portões que às vezes param o trabalho por evidências.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Grande business case inicial | Compromisso e controle claros | Trava premissas; convida ao otimismo |
| Financiamento em etapas | Limita o custo de estar errado; aprende cedo | Exige disciplina nos portões; menos certeza para o planejamento |
| Cifra única de ROI | Simples de comparar | Esconde premissas; fácil de manipular |
| Faixa com sensibilidade | Honesta sobre a incerteza | Mais difícil de comparar; pode parecer vaga |
| Caso qualitativo | Capta razões estratégicas e de risco | Difícil de comparar e verificar |
| Caso quantitativo | Comparável e testável | Falsa precisão; omite o que não pode ser contado |
| Classe de referência externa | Corrige o otimismo | Pode não se ajustar ao seu contexto |
| Classe de referência do próprio histórico | Ajusta-se ao seu contexto | Exige um registro; amostras pequenas |

A resposta pragmática é usar financiamento em etapas, faixas e o seu próprio histórico, junto com um breve relato qualitativo do que os números perdem. Use ROI, VPL e payback como resumos, e não como veredictos.

## Perguntas para discutir com sua equipe

**1. Quão errados estavam os nossos últimos cinco business cases, e em que direção?**
Colete as previsões e os valores reais de custos e benefícios das iniciativas recentes. Calcule as razões. Olhem a dispersão e se os erros se inclinam para um lado. O facilitador deve resistir a explicações na primeira passada e apenas registrar o padrão. Depois discutam o que isso implica para o próximo caso.

**2. Qual é a premissa mais arriscada da nossa proposta atual, e quão barato poderíamos testá-la?**
Listem as premissas e classifiquem-nas por quanto o caso depende de cada uma e por quão incertos estamos. Para a principal, projetem um pequeno teste. A resposta molda a primeira etapa de financiamento.

**3. Quanto custa não fazer nada, e já pusemos isso no caso?**
Descrevam o caminho provável se a proposta não for aprovada: custos contínuos de incidentes, manutenção crescente, risco crescente. Estimem com uma faixa. Conferam se o caso compara de forma justa com isso.

**4. Quais custos sempre aparecem tarde em nossos projetos?**
Pensem em operações, treinamento, migração e desativação. Conferam o caso quanto a cada um. Acrescentem ao modelo uma lista de verificação padrão de categorias de custo.

**5. Quem de fora da equipe já contestou nossos números, e o que disse?**
Revejam a última revisão independente. Se não houve nenhuma, decidam quem deve fazer a próxima. A conversa deve deixar claro que a revisão é um serviço ao caso, e não um ataque.

**6. Quando foi a última vez que paramos algo porque a evidência mudou, e como foi?**
Lembrem uma iniciativa parada ou reformulada. Discutam como foi recebida e o que fez pela confiança. Combinem como fazer a próxima parada parecer aprendizado.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega fornecem as estimativas de custo e aprendem com as etapas de financiamento. Devem estimar em faixas, registrar os custos reais e se manifestar quando as premissas quebram. O financiamento em etapas permite que se concentrem em aprender o que mais importa, e uma parada baseada em evidências deve contar como sucesso.

### Equipes de serviço e operações

As equipes de operações são donas de boa parte do custo depois do lançamento e muitas vezes ficam fora do caso. Devem ser consultadas sobre os custos de operação, o esforço de suporte e os riscos e devem conferir os benefícios que dependem de seu trabalho, como a redução de incidentes. Podem verificar, com seus próprios dados, as alegações de economia nas operações.

### Liderança e governança

Os líderes decidem o que é financiado e definem o clima de honestidade. Devem pedir faixas e premissas, rever o histórico das previsões, financiar em etapas e aceitar uma parada como resultado normal. A governança deve exigir a revisão independente dos grandes casos e uma conferência pós-implantação e deve olhar o portfólio de resultados.

### Clientes e usuários

Os usuários e os donos do negócio arcam com os benefícios e a perturbação. Devem fazer parte do caso, ajudando a definir o problema e o benefício, e ser informados do que foi decidido e por quê. A experiência deles depois da entrega é o melhor teste de se o caso estava certo.

## Na prática: um exemplo de gestão de serviços

O grupo de TI de uma agência provincial de saúde propõe um programa para automatizar requisições rotineiras de acesso e reduzir o tratamento manual. Os números abaixo são ilustrativos.

O primeiro rascunho da proposta alega um ROI de 240% em cinco anos, baseado em 18.000 requisições por ano, um custo médio de tratamento manual e a automação completa de 80% das requisições. A parceira financeira sugere aplicar o histórico do próprio grupo. Ela levanta oito iniciativas passadas: o custo real foi em mediana 1,35 vez a estimativa, com faixa de 1,0 a 1,9, e o benefício realizado foi em mediana 0,6 do benefício esperado. O grupo descobre também que a cifra de volume de requisições vinha de um único ano movimentado e que a estimativa de custos omitia o treinamento e o tempo do pessoal que revê as exceções.

A equipe reescreve o caso com faixas. Usando o histórico de custos, o custo esperado sobe um terço. Usando o histórico de benefícios, o benefício esperado cai cerca de pela metade. O caso revisto mostra um ROI em uma faixa de ligeiramente negativo a cerca de 70%, um período de payback entre 20 e 40 meses e um VPL que é positivo nos casos médio e esperado à taxa de desconto da política financeira e negativo no caso baixo. A análise de sensibilidade mostra que a proporção de requisições que podem ser automatizadas é o que mais importa. A proposta é reformulada em etapas. A primeira etapa automatiza os três tipos de requisição mais comuns, com um orçamento de cerca de um quinto do total, para testar a parcela de automação e medir o tempo de tratamento de base. Os critérios para a segunda etapa são escritos: pelo menos 50% desses tipos de requisição totalmente automatizados e o tempo de tratamento por requisição reduzido por uma quantidade declarada, com o responsável pelo benefício confirmando.

Depois da primeira etapa, 58% dos três tipos de requisição estão automatizados, e as exceções levam mais tempo que o esperado. A equipe reformula a segunda etapa para melhorar o tratamento de exceções antes de estender a mais tipos. O conselho da agência pergunta por que a cifra de ROI caiu. A diretora explica que a cifra anterior supunha automação completa e nenhum histórico de estouro e que a nova faixa é mais honesta. A decisão é registrada. A reformulação baseada em evidências da segunda etapa é anotada, e as tabelas de exatidão de custo e de benefício do portfólio são atualizadas.

## Ágil, IA, automação e análise

### Ágil

Financie o trabalho em etapas conforme a evidência chega e confira a previsão depois do release com as partes interessadas. O cuidado é que um único grande business case convida a premissas otimistas.

### IA

Os business cases de IA muitas vezes se apoiam em alegações de produtividade; por isso registre a linha de base, a mudança medida e os efeitos sobre a qualidade e compare a previsão com o resultado. O cuidado é que as alegações dos fornecedores de IA podem não se transferir ao seu contexto; por isso teste com um piloto antes de escalar.

### Automação

Automatize a coleta de dados de custo e de benefício onde existirem e meça o processo do business case pela exatidão das estimativas. O cuidado é que os benefícios da automação muitas vezes são alegados como horas economizadas, que não viram dinheiro a menos que as horas sejam usadas.

### Análise

Mostre faixas e premissas e acompanhe a exatidão das estimativas ao longo do tempo. A decisão informada é continuar, mudar ou parar. O cuidado é que o retorno do investimento depende de premissas; por isso mostre-as ao lado da cifra.

## Olhar setorial

**Startup.** Os recursos são escassos e a velocidade de aprendizado importa. Use um caso de uma página com a premissa mais arriscada e um teste barato, financie em pequenos passos e evite modelos financeiros elaborados. A autonomia de caixa (runway), e não o VPL, costuma ser a restrição que prende.

**Pequena empresa.** O dono é o patrocinador e a função financeira. Foque no payback e no fluxo de caixa, inclua o tempo do pessoal e compare com as opções de não fazer nada e de comprar. Cuidado com as calculadoras de ROI fornecidas por fornecedores, que tendem a ser generosas.

**Grande empresa.** A governança de portfólio, a política financeira sobre taxas de desconto e muitas propostas concorrentes tornam importante a consistência. Use um modelo padrão com categorias de custo exigidas, revisão independente dos grandes casos e uma revisão pós-implantação. Mantenha um registro da exatidão das previsões por patrocinador e por tipo de iniciativa como ferramenta de portfólio, e não como classificação de pessoas.

**Governo e setor público.** Os órgãos públicos costumam seguir orientações formais de avaliação, como o Green Book do Reino Unido, que expõe como avaliar opções, tratar o viés de otimismo e considerar o valor pelo dinheiro, incluindo benefícios não financeiros. Os benefícios podem ser sociais e difíceis de monetizar, e a transparência e a auditoria importam. Use a orientação que se aplica a você, documente as premissas e registre a evidência dos benefícios (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Este tópico trata ele próprio do business case; assim o ponto é o custo de fazê-lo bem. Escrever um caso cuidadoso leva dias, e não horas, e a revisão independente leva mais. Acompanhar a exatidão de custo e de benefício exige um registro simples da previsão e do resultado de cada iniciativa, que muitas organizações não têm. O financiamento em etapas acrescenta reuniões de governança.

O retorno é uma melhor alocação do dinheiro escasso e menos grandes fracassos. Casos honestos reduzem as surpresas que se seguem aos otimistas. Um histórico permite aos líderes descontar adequadamente os novos casos, o que torna mais confiável todo o portfólio. Construa o argumento a partir do seu próprio histórico: as razões entre o custo e o benefício reais e estimados, o dinheiro gasto em iniciativas depois abandonadas e o custo da revisão comparado com os estouros que ela preveniu. Evite citar estudos de taxas de fracasso de projetos a menos que possa rastrear o método e sua relevância para o seu tipo de trabalho.

## Antipadrões e armadilhas

- **Uma única cifra de ROI apresentada como fato.** Esconde premissas. Mostre faixas e sensibilidade.
- **Deixar de fora o custo de operação.** A construção é uma fração do custo de vida. Conte a vida inteira.
- **Contar benefícios brandos como duros.** As alegações de custo evitado e de produtividade precisam de evidência. Rotule-as e teste-as.
- **Prever só de baixo para cima.** Repete o otimismo. Compare com o seu próprio histórico.
- **Todo o financiamento de uma vez.** Trava os palpites. Financie em etapas com portões de evidência.
- **Continuar por causa do dinheiro já gasto.** Decida pelo que está adiante.
- **Corrigir a própria lição de casa.** Peça a um leitor independente que reveja custos e benefícios.
- **Nunca revisitar o caso.** Sem revisões de resultado, nada melhora. Confira as previsões contra os resultados.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Escrever o caso | Apresentação informal com um número de manchete | Modelo com custos e benefícios | Modelo padrão com lista de verificação de TCO, faixas e sensibilidade | Ajuste pelo próprio histórico aplicado; revisão independente | Casos desenvolvidos em conjunto com donos do negócio e finanças; premissas compartilhadas em todo o portfólio |
| Financiamento | Tudo de uma vez | Marcos | Financiamento em etapas com critérios de evidência | Os portões rotineiramente reformulam ou param o trabalho por evidências | O financiamento do portfólio flui entre iniciativas com base em evidências |
| Aprendizado | Sem acompanhamento | Revisão ocasional | Revisão pós-implantação contra o caso | Exatidão de custo e de benefício acompanhada como distribuições e usada em novos casos | Aprendizado compartilhado na organização e com parceiros; o método melhora |

## Lista de verificação

- [ ] O caso lista as opções, incluindo não fazer nada.
- [ ] O custo total de propriedade cobre construção, operação, suporte, treinamento, mudança e descarte.
- [ ] Cada benefício tem um tipo, um indicador, uma linha de base e um responsável.
- [ ] Custos e benefícios são dados como faixas, com os direcionadores declarados.
- [ ] Uma análise de sensibilidade mostra quais premissas mais importam.
- [ ] As estimativas são comparadas com o seu próprio histórico de iniciativas semelhantes.
- [ ] Um revisor independente leu o caso.
- [ ] O financiamento é em etapas, com critérios de evidência para continuar, reformular ou parar.
- [ ] Os resultados são revistos contra o caso em datas combinadas.
- [ ] A exatidão de custo e de benefício das iniciativas passadas é relatada aos decisores.

## Prompts de IA

**Teste sob estresse um business case.**

```text
Here is a summary of our business case for [initiative]: costs [list with
ranges], benefits [list with types and ranges], period [years], discount rate
[rate set by finance], and assumptions [list]. Identify missing cost
categories, benefits that need stronger evidence, assumptions that dominate the
result, and optimism risks. Suggest a sensitivity analysis and a staged
funding structure. Do not invent figures. List your assumptions and questions
I should answer.
```

**Construa uma classe de referência a partir do nosso histórico.**

```text
We have these past initiatives with forecast and actual cost and benefit:
[paste a table]. Calculate the ratios of actual to forecast, describe the
median and spread, comment on any pattern by type of initiative, and suggest
how to use this when estimating a new initiative. Warn me where the sample is
too small to rely on. Do not use outside benchmarks. List your assumptions.
```

**Projete portões de etapa.**

```text
For [initiative], propose three funding stages. For each, state the riskiest
assumption to test, the evidence that would justify moving on, the evidence
that would make us reshape the work, and the evidence that would make us stop.
Keep each stage small and cheap. Do not assume any particular delivery method.
List your assumptions and decisions that need leadership input.
```

**Escreva uma revisão pós-implantação.**

```text
Draft a one-page post-implementation review for [initiative]. Inputs: the
original case [summary], actual cost [figures], realized benefit and evidence
[summary], and what changed along the way [list]. Include cost and benefit
ratios, reasons for differences, what we would change in the next case, and
questions for the benefit owner. Keep the tone factual and blameless. List your
assumptions and any claim that needs checking.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de business case ou de ROI.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica financeira declara seu período, suas premissas, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Um business case é uma previsão: mostre faixas, premissas e sensibilidade.
- Conte o custo total de propriedade ao longo da vida da mudança e compare com não fazer nada.
- Corrija o otimismo usando o seu próprio histórico de previsões e resultados.
- Financie em etapas, decida pelo que está adiante e trate uma parada baseada em evidências como sucesso.
- Reveja os resultados contra o caso e relate a exatidão aos decisores.
- Use ROI, VPL e payback como resumos com regras declaradas, e não como veredictos.

## Referências e leituras complementares

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Retorno do investimento](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Viés de otimismo](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Previsão por classe de referência](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Valor do dinheiro no tempo](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Valor presente líquido](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Período de payback](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Custo de oportunidade](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Custo irrecuperável](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Análise de sensibilidade](https://en.wikipedia.org/wiki/Sensitivity_analysis).
