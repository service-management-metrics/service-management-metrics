# Custo de serviço e economia unitária

**Saber quanto custa um serviço, e quanto custa por unidade de algo que os usuários valorizam, permite a uma equipe fazer escolhas honestas sobre qualidade, velocidade e gasto, desde que as regras de alocação sejam justas, visíveis e nunca usadas para punir as pessoas que operam o serviço.**

## Visão geral e motivação

Todo serviço de TI custa dinheiro: pessoas, nuvem e hospedagem, licenças, hardware, fornecedores e a parcela das plataformas compartilhadas que usa. Os líderes perguntam quanto custa um serviço, se vale a pena e o que muda se a demanda dobrar. As equipes fazem as mesmas perguntas do outro lado: o que podemos bancar fazer e o que estamos abrindo mão? Sem números, essas conversas viram discussões sobre de quem é cada orçamento.

A [contabilidade de custos](https://en.wikipedia.org/wiki/Cost_accounting) é a prática de medir, registrar e analisar custos. Para uma organização de serviços, as tarefas centrais são atribuir custos a serviços, expressar o custo por unidade de algo significativo e prever como o custo muda com o volume. A prática de gestão financeira de serviços do ITIL cobre o mesmo terreno, e a prática de FinOps para gastos em nuvem o leva adiante (veja o tópico 7.6, Métricas de FinOps e custos de nuvem).

As visões ágil e ITIL do custo diferem, e a diferença é útil.

- **A visão de projeto** financia um esforço temporário com um orçamento e uma data de entrega. O custo é o que o projeto gastou, e o sucesso é a entrega no prazo e dentro do orçamento. O projeto termina, a equipe se dispersa e o serviço que criou é entregue a outra pessoa.
- **A visão de produto ou de serviço** financia uma equipe persistente para construir e operar um serviço ao longo de sua vida. O custo é o custo estável da equipe e de suas plataformas, e a pergunta é se o valor entregue justifica esse gasto. Isso combina com os objetivos ágeis de entrega contínua e de construir em torno de pessoas motivadas que conhecem o serviço. Combina também com a preocupação do ITIL com o custo de um serviço ao longo de seu ciclo de vida.

As medidas de custo podem enganar tão facilmente quanto informar. Três problemas se repetem.

- **A alocação é uma escolha.** Os custos compartilhados, como redes, segurança e plataformas, precisam ser distribuídos entre os serviços por alguma regra, e regras diferentes dão respostas diferentes. A [alocação de custos](https://en.wikipedia.org/wiki/Cost_allocation) deve seguir um [direcionador de custo](https://en.wikipedia.org/wiki/Cost_driver), um fator que faz o custo mudar, como usuários, requisições ou armazenamento. O [custeio baseado em atividades](https://en.wikipedia.org/wiki/Activity-based_costing) formaliza isso rastreando os custos até as atividades que consomem recursos.
- **Custos fixos e variáveis se comportam de modo diferente.** Um [custo fixo](https://en.wikipedia.org/wiki/Fixed_cost) permanece o mesmo enquanto o volume muda dentro de uma faixa, e um [custo variável](https://en.wikipedia.org/wiki/Variable_cost) sobe com o volume. O [custo unitário](https://en.wikipedia.org/wiki/Unit_cost) de um serviço cai conforme o volume cresce quando os custos fixos dominam, um padrão relacionado às [economias de escala](https://en.wikipedia.org/wiki/Economies_of_scale). Olhar o custo unitário sem saber quais custos são fixos leva a previsões erradas.
- **Custo não é valor.** O serviço mais barato não é o melhor. O custo por ticket cai se você encerra tickets sem resolver problemas. As medidas de custo precisam de uma companheira de qualidade ou de resultado, que as partes anteriores deste livro fornecem (veja o tópico 6.5, Realização de valor e resultados de negócio).

As classificações contábeis também importam. A [despesa de capital](https://en.wikipedia.org/wiki/Capital_expenditure) compra ativos que duram, e as despesas operacionais cobrem o funcionamento do dia a dia. Os serviços de nuvem e de assinatura deslocam o gasto do primeiro tipo para o segundo, o que muda o aspecto dos orçamentos sem mudar o que os serviços custam. Os colegas de finanças são donos dessas regras, e as métricas aqui devem ser construídas com eles.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica com força ao dinheiro. Uma meta de custo tende a produzir corte de custos onde é mais fácil esconder o dano, como manutenção, qualidade e tempo de aprendizado. As medidas abaixo são, portanto, pareadas com indicadores de saúde do serviço e com uma declaração das regras de alocação (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Torne explícitas as regras de alocação e ligue-as a direcionadores.** As pessoas aceitam números que conseguem seguir.
- **Separe o custo fixo do variável.** As previsões dependem de qual é qual.
- **Relate o custo unitário com sua companheira de qualidade.** Mais barato só é melhor se o serviço continua bom.
- **Use faixas e tendências, não falsa precisão.** A alocação envolve julgamento.
- **Financie equipes persistentes em torno de serviços onde puder.** Equipes estáveis aprendem e melhoram; as temporárias se desfazem.
- **Compartilhe os custos com as pessoas que podem mudá-los.** Visibilidade sem influência é apenas culpa.
- **Nunca classifique pessoas ou equipes por custo.** Os serviços diferem, e suas restrições também.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Custo por serviço | Custo anual totalmente carregado de um serviço nomeado, usando regras de alocação documentadas | custos diretos + custos compartilhados alocados ao serviço no período | moeda por ano | Razão geral, dados de centros de custo, faturas de nuvem e de licenças, dados de tempo ou de atividade | Gestão financeira de serviços; gestão do catálogo de serviços | Custo de uma equipe de produto persistente e suas plataformas | Trimestral |
| Custo unitário | Custo por unidade de algo que os usuários valorizam, como por usuário ativo, por transação ou por requisição resolvida | custo por serviço no período / unidades entregues no período | moeda por unidade | Custo por serviço e dados de volume | Gestão financeira de serviços; gestão de nível de serviço | Custo de servir por resultado | Trimestral |
| Cobertura da alocação | Proporção do gasto de TI atribuída a um serviço nomeado ou declarada como despesa geral compartilhada | gasto atribuído a serviços ou declarado como despesa geral / gasto total de TI | porcentagem | Razão geral e modelo de alocação | Gestão financeira de serviços | Custo visível do trabalho de cada equipe | Trimestral |
| Divisão entre rodar, mudar e melhorar | Proporção do gasto ou da capacidade que vai para operar serviços, mudá-los e melhorá-los | gasto ou capacidade em cada categoria / total | porcentagem | Etiquetas do razão, tipos de trabalho no rastreador de trabalho | Gestão financeira de serviços; melhoria contínua | Alocação de capacidade por tipo de trabalho | Trimestral |
| Variação da previsão | Diferença entre o custo previsto e o real, por serviço | (real menos previsto) / previsto | porcentagem | Registro de previsões e razão | Gestão financeira de serviços | Exatidão da previsão | Mensal |
| Taxa de contestação do showback | Proporção dos itens de showback ou chargeback que os responsáveis pelos serviços contestaram e que foram alterados | itens alterados após contestação / itens emitidos | porcentagem | Sistema de showback e registro de contestações | Gestão financeira de serviços | Retrospectiva sobre custos compartilhados | Trimestral |
| Parcela de financiamento de equipes persistentes | Proporção do gasto de entrega e operações financiada como capacidade estável de equipe para um serviço | gasto em equipes persistentes de serviço / gasto total de entrega e operações | porcentagem | Razão e organograma | Gestão financeira de serviços; mudança organizacional | Equipes construídas em torno de serviços e de pessoas motivadas | Anual |

Defina o período, a moeda e os tipos de custo de cada medida e registre as regras de alocação no registro de métricas: quais custos são diretos, quais são compartilhados e qual direcionador distribui cada custo compartilhado. O custo unitário precisa de uma unidade que usuários e equipe aceitem, e a definição da unidade permanece fixa ao longo da tendência. A variação da previsão compara com a previsão como estava no início do período, e não com uma revista.

## Recomendações

### Construa o quadro de custos

**1. Comece pelo razão e pela lista de serviços.** Pegue o gasto total de TI do razão, liste os serviços do catálogo e decida que parcela de cada custo pertence a qual serviço. Comece pelos custos diretos fáceis: a equipe que opera o serviço, suas licenças, sua hospedagem. Os custos compartilhados vêm em segundo lugar. Um primeiro quadro aproximado, compartilhado com as pessoas envolvidas, vale mais que um preciso construído em privado.

**2. Escolha direcionadores de custo que as pessoas consigam seguir.** Para cada custo compartilhado, escolha um direcionador ligado ao que realmente o causa: usuários para uma plataforma de colaboração, armazenamento para uma plataforma de dados, requisições para um gateway, dispositivos para a gestão de endpoints. Explique a regra em uma frase. Direcionadores que ninguém pode conferir convidam a discussões, e direcionadores que ninguém pode influenciar tornam inútil o showback.

**3. Separe o custo fixo do variável.** Para cada serviço, marque quais custos se movem com o volume e quais não. Um serviço que é sobretudo custo fixo tem um custo unitário que cai com o crescimento, e um que é sobretudo variável não. Essa divisão é a base de qualquer previsão e de qualquer conversa sobre escalar.

**4. Mostre faixas onde a alocação envolve julgamento.** Se duas regras de alocação razoáveis dão resultados 20% diferentes, mostre as duas ou mostre a faixa. Um único número preciso de uma regra arbitrária começa brigas que os dados não conseguem resolver.

### Meça por unidade, com a qualidade ao lado

**5. Escolha uma unidade que reflita valor.** O custo por usuário ativo, por transação concluída, por requisição resolvida ou por implantação pode ser útil. Escolha a unidade que se liga ao propósito do serviço, combine-a com o responsável pelo serviço e mantenha-a estável. O custo por ticket é uma unidade arriscada, porque cai quando tickets são encerrados cedo e sobe quando você previne tickets com bom autoatendimento.

**6. Pareie todo custo unitário com uma medida de qualidade.** Mostre o custo unitário ao lado da disponibilidade, da satisfação ou da taxa de reabertura. Um custo unitário que cai enquanto a qualidade cai é uma transferência de custo aos usuários. Um custo unitário que se mantém estável enquanto a qualidade sobe é um ganho. Apresente-os juntos ou não os apresente (veja o tópico 6.1, Métricas de satisfação do cliente).

**7. Acompanhe a tendência, e não apenas o nível.** O custo unitário ao longo do tempo, com notas sobre o que mudou, conta uma história que um trimestre não conta. Marque nos gráficos as mudanças de regras de alocação ou de unidades para que as tendências não sejam mal lidas. Compare um serviço com o próprio histórico antes de compará-lo com outros.

### Compartilhe o custo com quem pode mudá-lo

**8. Use o showback antes do chargeback.** O showback relata os custos aos responsáveis pelos serviços sem cobrá-los, e o chargeback transfere o custo para os seus orçamentos. Comece pelo showback, que constrói entendimento e confiança, e passe ao chargeback só onde mudar decisões e as regras forem aceitas. Os dois dependem de regras que os responsáveis ajudam a moldar.

**9. Deixe os responsáveis contestarem os números.** Um processo de contestação é sinal de saúde, desde que seja rápido e seus resultados sejam registrados. Reveja a taxa de contestação: uma taxa alta mostra regras em que ninguém confia, e zero pode mostrar que ninguém lê os relatórios. Corrija a regra, e não apenas o item.

**10. Reveja o custo com toda a equipe do serviço.** Inclua engenheiros e operadores além dos gestores em uma revisão regular de custos. As pessoas que operam um serviço muitas vezes sabem onde o desperdício se esconde: ambientes ociosos, recursos superdimensionados, ferramentas duplicadas. Trate o que elas acham como melhorias a compartilhar, e não como críticas.

### Financie para a estabilidade e o aprendizado

**11. Prefira equipes persistentes financiadas em torno de serviços.** Onde possível, financie uma equipe estável para ser dona de um serviço ao longo do tempo, em vez de montar uma equipe de projeto e dissolvê-la. As equipes persistentes acumulam conhecimento, constroem melhores relações com os usuários e carregam o custo das más decisões. Isso reflete o objetivo ágil de construir em torno de indivíduos motivados e a preocupação do ITIL com o ciclo de vida do serviço. A mudança no financiamento é uma decisão organizacional significativa; por isso envolva cedo as finanças e a liderança. O livro *Project to Product*, de Mik Kersten, discute essa mudança.

**12. Reserve capacidade para melhoria.** Os custos que reduzem custos futuros, como automação, correções de confiabilidade e remoção de ferramentas duplicadas, precisam de financiamento protegido ou perdem toda vez para o trabalho de funcionalidades. Acompanhe a parcela de melhoria na divisão entre rodar, mudar e melhorar e olhe os retornos que produz (veja o tópico 4.6, Dívida técnica e erros conhecidos).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Custo por serviço | Deslocar custos para outros serviços pela regra de alocação; deixar sem alocar os custos desfavoráveis | Cobertura da alocação; regras publicadas e revistas pelos responsáveis; comparar os totais com o razão |
| Custo unitário | Elevar o denominador com unidades de baixo valor; cortar a qualidade para cortar o custo; mudar a unidade | Medida de qualidade companheira; definição fixa da unidade; conferências de resultado |
| Cobertura da alocação | Declarar grandes quantias como despesa geral para evitar a atribuição | Parcela de despesa geral relatada; revisão do que é declarado despesa geral e por quê |
| Divisão entre rodar, mudar e melhorar | Rebatizar trabalho de operação como melhoria ou mudança; etiquetar no fim do período | Etiquetar na entrada; amostrar itens quanto ao tipo; comparar com os dados de incidentes e de requisições |
| Variação da previsão | Inflar previsões; revisar a previsão tarde no período | Previsão registrada no início; comparar faixas de previsão com os valores reais ao longo do tempo |
| Taxa de contestação do showback | Desencorajar contestações; alterar itens sem mudança de regra | Rever as contestações e os resultados; conferir se as regras mudaram após contestações repetidas |
| Parcela de financiamento de equipes persistentes | Rebatizar projetos como equipes persistentes sem mudar o financiamento ou a responsabilidade | Conferir a estabilidade e a responsabilidade das equipes ao longo do tempo; medidas de saúde do serviço |

Uma leitura saudável é um quadro de custos que os responsáveis pelos serviços reconhecem, custos unitários que se movem por causas explicadas enquanto a qualidade se mantém, erros de previsão que encolhem e trabalho de melhoria que aparece nos números.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Financiamento por projeto | Escopo e fim claros | As equipes se desfazem; conhecimento perdido; serviço entregue a outros |
| Financiamento de equipe persistente | Aprendizado, responsabilidade, custo estável | Exige confiança e um processo de planejamento maduro; o escopo pode derivar |
| Showback | Constrói entendimento com pouco atrito | Pode ser ignorado se ninguém for responsável |
| Chargeback | Cria responsabilização e sinais de preço | Contestações; incentivos para evitar serviços compartilhados |
| Regras de alocação simples | Fáceis de explicar | Podem ser grosseiras |
| Alocação baseada em atividades | Mais exata | Cara de manter; falsa precisão |
| Custo por unidade | Liga o custo ao valor | Sensível à escolha da unidade e ao volume |
| Apenas custo total | Simples | Esconde tendências e eficiência |

A resposta pragmática é começar com regras simples e showback, acrescentar precisão onde as decisões dependem dela e avançar para o financiamento de equipes persistentes conforme a confiança e a maturidade de planejamento crescem. Mantenha uma medida de qualidade ao lado de toda medida de custo.

## Perguntas para discutir com sua equipe

**1. Quanto custa por ano o nosso principal serviço, e quem concordaria com o número?**
Peça às finanças e ao responsável pelo serviço que produzam estimativas independentes. Comparem-nas. O facilitador deve anotar onde diferem e por quê: regras de alocação, escopo ou custos ausentes. Combinem uma regra documentada única para o próximo trimestre.

**2. Qual é a unidade que os nossos usuários reconheceriam, e quanto ela custa?**
Listem possíveis unidades para o serviço e escolham uma. Calculem seu custo e discutam o que faria com que subisse ou caísse. Perguntem o que a unidade esconde. Acrescentem uma medida de qualidade para ficar ao lado.

**3. Quais dos nossos custos compartilhados são distribuídos por uma regra que ninguém sabe explicar?**
Listem os custos compartilhados e seus direcionadores. Para cada um, perguntem se o direcionador se relaciona com o que causa o custo. Substituam um que não se relaciona. Discutam quem pode influenciar o direcionador, já que dados de custo sem influência são apenas culpa.

**4. Quanto da nossa capacidade vai para rodar, mudar e melhorar o serviço?**
Revejam um trimestre de trabalho concluído por tipo, como no tópico de planejamento (veja o tópico 2.5, Métricas de previsão e planejamento de entregas). Comparem com o que os líderes pensam. Decidam qual deve ser a parcela de melhoria e o que a protegeria.

**5. O que mudaria se financiássemos uma equipe persistente para este serviço?**
Imaginem o financiamento, a responsabilidade e as medidas. Perguntem que riscos e benefícios as finanças, a equipe e os usuários veriam. Identifiquem um passo em direção a isso, como uma lista estável da equipe e uma visão compartilhada do orçamento do serviço.

**6. Quando um número de custo causou uma discussão pela última vez, e o que aprendemos?**
Lembrem uma contestação de showback ou de orçamento. Era sobre o número ou sobre a regra? Discutam como uma regra mais clara ou um processo de contestação melhor teria ajudado.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega veem o custo como o preço de seu tempo, plataformas e ferramentas. Devem conhecer o custo e o custo unitário do seu serviço, achar cedo o desperdício e usar os números para defender o trabalho de melhoria e o financiamento estável. Devem evitar otimizar o número cortando a qualidade e devem contestar as regras de alocação que não conseguem seguir.

### Equipes de serviço e operações

As equipes de operações carregam o custo de operar os serviços e muitas vezes guardam as plataformas compartilhadas. Devem publicar como os custos compartilhados são conduzidos, responder às perguntas de showback e compartilhar ideias de economia vindas da experiência. Devem esperar pressão para cortar custos de operação e devem mostrar o lado da qualidade e do risco de qualquer corte.

### Liderança e governança

Os líderes perguntam sobre custo e valor e definem o modelo de financiamento. Devem pedir custos unitários com companheiras de qualidade, apoiar o financiamento de equipes persistentes onde se encaixar e evitar classificar equipes por custo. A governança deve esperar que as regras de alocação sejam documentadas, revistas e aplicadas com consistência e deve olhar a parcela de melhoria.

### Clientes e usuários

Os usuários que pagam por chargeback querem entender a fatura e influenciá-la. Os demais veem o custo na qualidade e na variedade dos serviços oferecidos. Custos unitários claros e voz na compensação entre preço e serviço tornam mais saudável o relacionamento, e o feedback deles faz parte da companheira de qualidade de todo custo unitário.

## Na prática: um exemplo de gestão de serviços

O departamento central de TI de uma universidade de médio porte oferece cerca de 25 serviços a 18.000 estudantes e funcionários. Os números abaixo são ilustrativos.

O escritório financeiro quer saber por que o orçamento de TI cresceu mais depressa que as matrículas. O parceiro financeiro da TI monta um quadro de custos com os responsáveis pelos serviços. Do gasto total de TI, 72% são diretos para serviços nomeados, 18% são plataformas compartilhadas (rede, identidade, ferramentas de segurança) alocadas por direcionadores e 10% são despesa geral declarada. A cobertura da alocação é, portanto, de 90%. A plataforma de aprendizagem custa o equivalente a US$41 por usuário ativo por ano, acima de US$36, enquanto a satisfação e a disponibilidade estão estáveis. A central de serviços mostra um custo por requisição resolvida que caiu 12% em dois anos. O responsável pelo serviço aponta que a queda coincidiu com uma alta de tickets reabertos de 4% para 9%, e a companheira de qualidade mostra que a economia é em parte uma transferência de esforço para os usuários.

A equipe faz quatro mudanças. Publica as regras de alocação em uma página, com os direcionadores de cada custo compartilhado e a data da última revisão. Troca o custo por requisição pelo custo por requisição resolvida no primeiro contato, mostrado ao lado da taxa de reabertura. Passa a plataforma de aprendizagem e o serviço de identidade para o financiamento como equipes persistentes com uma lista estável. Reserva 15% da capacidade para trabalho de melhoria em cada um dos dois maiores serviços e acompanha o que o trabalho devolve.

Um ano depois, o custo unitário da plataforma de aprendizagem é de US$38 com o crescimento do uso, a taxa de reabertura caiu para 5% e a variação da previsão dos dois serviços de equipe persistente fica dentro de 4%, contra 11% do trabalho financiado por projeto. A taxa de contestação do showback caiu de 22% para 8% depois que duas regras foram mudadas. O escritório financeiro pede uma meta anual de redução de 5% do custo unitário para todo serviço. O parceiro financeiro da TI propõe metas somente onde um serviço tem uma alavanca clara de eficiência, mostrada com a companheira de qualidade, e explica que uma meta geral premiaria cortar a manutenção. A decisão é registrada, com uma revisão das regras a cada ano.

## Ágil, IA, automação e análise

### Ágil

Financie equipes persistentes e reveja o custo junto com os resultados com as partes interessadas regularmente, para que as conversas de custo sejam sobre mais que cortar. O cuidado é que as regras de alocação usadas para punir equipes levam à manipulação de etiquetas e de divisões.

### IA

As cargas de trabalho de IA acrescentam custo variável, como uso de modelos e processamento de dados, e levantam a pergunta do custo por resultado. Acompanhe o custo por unidade de valor dos caminhos assistidos por IA e pareie-o com a qualidade. O cuidado é que um caminho de IA mais barato que reduz a qualidade apenas move o custo para o retrabalho.

### Automação

Automatize a coleta de custos e as conferências de etiquetas e meça a cobertura da alocação. O cuidado é que a alocação automática por uma regra que ninguém revê pode distorcer o quadro.

### Análise

Relate o custo unitário com faixas e declare as regras de alocação. A decisão informada é onde mudar a qualidade, a velocidade ou o gasto. O cuidado é que o custo unitário depende do que se escolhe como unidade; por isso diga por quê.

## Olhar setorial

**Startup.** O custo é sobretudo nuvem, ferramentas e salários. Acompanhe desde o começo o principal gasto de nuvem e de ferramentas por serviço, etiquete os recursos e calcule cedo o custo por cliente ativo. Resista à alocação elaborada, já que a equipe é pequena.

**Pequena empresa.** Um punhado de fornecedores e uma ou duas pessoas compõem a maior parte dos custos. Mantenha um quadro anual simples, o custo por usuário das principais ferramentas e uma visão do que é pago e não usado. Peça aos fornecedores faturas detalhadas.

**Grande empresa.** A escala traz plataformas compartilhadas e muitas unidades de negócio. Use um modelo de alocação documentado com direcionadores, um processo de contestação e um parceiro financeiro embutido na TI. Cuidado com um chargeback que desestimule o uso de serviços compartilhados que beneficiam a todos.

**Governo e setor público.** Os orçamentos são anuais e dotados, com regras sobre gastos de capital e operacionais, e a transparência de custos pode ser exigida. Alinhe o custeio de serviços às regras de finanças públicas, documente os métodos de alocação para auditoria e considere o financiamento plurianual de equipes persistentes de serviço onde a lei permitir. Relate custos unitários junto com medidas de resultado (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o esforço de construir o modelo de alocação, o tempo das finanças e dos responsáveis pelos serviços para combinar regras e o trabalho rotineiro do relato mensal e do tratamento das contestações. A maioria das organizações já tem o razão e os dados de faturamento de nuvem. Um pequeno modelo em uma planilha pode iniciar o trabalho, e as ferramentas vêm depois.

Os retornos são melhores decisões e menos discussões. As equipes que veem seus custos acham desperdício: ambientes ociosos, licenças sem uso e ferramentas duplicadas. Os líderes podem comparar opções conhecendo os direcionadores de custo, planejar o crescimento com custos fixos e variáveis separados e financiar a melhoria com evidências do seu retorno. Construa o argumento com os seus próprios números: o desperdício achado na primeira revisão, o tempo gasto em disputas orçamentárias e a variação da previsão antes e depois. Evite alegações externas sobre o gasto médio de TI como porcentagem da receita a menos que possa rastrear a fonte e o método, já que as definições variam muito. O tópico final desta parte reúne em um só lugar o argumento financeiro (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Dividir igualmente o custo compartilhado.** Pune os pequenos usuários e esconde os direcionadores reais. Use direcionadores que reflitam o consumo.
- **Custo por ticket como meta.** Premia o encerramento precoce de tickets. Use o custo por requisição resolvida com uma companheira de qualidade.
- **Precisão sem confiança.** Um belo modelo em que os responsáveis não acreditam não vale nada. Construa as regras com eles.
- **Chargeback primeiro.** Começa brigas antes de haver entendimento. Comece pelo showback.
- **Cortar o que é difícil de ver.** Manutenção, aprendizado e trabalho de confiabilidade são cortados primeiro e custam mais depois. Proteja a capacidade de melhoria.
- **Comparar equipes por custo.** Os serviços diferem em restrições e risco. Compare cada um com o próprio histórico.
- **Mudar as regras e a tendência ao mesmo tempo.** Marque as mudanças de regra nos gráficos e refaça o histórico onde possível.
- **Tratar o custo como propriedade das finanças.** As pessoas que operam o serviço sabem de onde vem o custo. Inclua-as.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Quadro de custos | Orçamento apenas por departamento | Custo por serviço para alguns serviços, alocação aproximada | Regras de alocação documentadas com direcionadores; cobertura acompanhada | Custos unitários com companheiras de qualidade; divisão entre fixo e variável | Custos compartilhados com transparência com parceiros de negócio; direcionadores influenciados em conjunto |
| Uso do custo | Cortes de custo por porcentagem | Showback para alguns responsáveis | Showback para todos os serviços; processo de contestação | Variação da previsão e tendências de custo unitário conduzem decisões | Custo, qualidade e valor compensados abertamente em todo o portfólio |
| Modelo de financiamento | Orçamentos anuais de projeto | Algumas equipes estáveis | Equipes persistentes para serviços-chave | O financiamento segue os resultados do serviço e o aprendizado | Financiamento flexível entre serviços, com investimento em plataforma compartilhada |

## Lista de verificação

- [ ] O gasto total de TI é atribuído a serviços ou declarado como despesa geral, com a cobertura acompanhada.
- [ ] As regras de alocação e os direcionadores estão escritos e revistos com os responsáveis pelos serviços.
- [ ] Os custos fixos e variáveis são separados para cada serviço principal.
- [ ] Os custos unitários usam unidades combinadas e estáveis e ficam ao lado de medidas de qualidade.
- [ ] As previsões são registradas no início do período e comparadas com os valores reais.
- [ ] O showback está disponível a todo responsável por serviço, com um processo de contestação.
- [ ] O gasto ou a capacidade de rodar, mudar e melhorar é relatado.
- [ ] Uma parcela da capacidade é protegida para melhoria.
- [ ] As mudanças de regra e de unidade são marcadas nos gráficos de tendência.
- [ ] Nenhuma equipe ou pessoa é classificada por custo.

## Prompts de IA

**Proponha direcionadores de custo para serviços compartilhados.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Projete um custo unitário e sua companheira de qualidade.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Prepare uma revisão de showback.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Planeje a passagem ao financiamento de equipes persistentes.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de custo ou de economia unitária.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de custo declara sua regra de alocação, seu vetor de manipulação e sua companheira de qualidade.

## Ideias-chave

- Atribua o custo aos serviços com direcionadores que as pessoas consigam seguir e mostre as regras.
- Separe o custo fixo do variável e pareie todo custo unitário com uma medida de qualidade.
- Comece pelo showback e por um processo de contestação e acrescente o chargeback só se mudar decisões.
- Financie equipes persistentes em torno de serviços onde puder e proteja a capacidade de melhoria.
- Relate faixas e tendências e marque as mudanças de regra nos gráficos.
- Nunca classifique pessoas ou equipes por custo.

## Referências e leituras complementares

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Contabilidade de custos](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Alocação de custos](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Direcionador de custo](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Custeio baseado em atividades](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Custo fixo](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Custo variável](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Custo unitário](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economias de escala](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Despesa de capital](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
