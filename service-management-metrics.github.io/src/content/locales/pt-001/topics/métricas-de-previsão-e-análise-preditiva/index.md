# Métricas de previsão e análise preditiva

**Uma previsão é uma faixa com um histórico, e não uma data ou um número a defender; por isso meça com que frequência o resultado real caiu dentro da faixa declarada, se a faixa foi honesta quanto à sua largura e se alguém tomou uma decisão melhor por causa dela.**

## Visão geral e motivação

A [previsão](https://en.wikipedia.org/wiki/Forecasting) estima uma quantidade futura a partir de dados passados e premissas declaradas. As organizações de serviços preveem a demanda por suporte, a capacidade de uma plataforma, a data em que um trabalho terminará, a chance de uma mudança falhar e o custo de um serviço no ano seguinte. Os modelos preditivos, incluindo os de aprendizado de máquina, estendem isso à pontuação de itens individuais: qual ticket vai estourar a meta, qual mudança é arriscada, qual incidente tende a se repetir.

As previsões e predições falham de modos comuns. O passado pode não se parecer com o futuro, porque um serviço, uma equipe ou uma ferramenta mudou. Os dados podem ser escassos ou enviesados. A faixa pode ser estreita demais, porque um número único parece mais útil que um intervalo. E a previsão pode ser usada como um compromisso, de modo que as pessoas trabalham para fazê-la se realizar ou escondem o que a contradiz.

Os tópicos anteriores deram previsões para usos específicos: datas de entrega a partir da vazão (veja o tópico 2.5, Métricas de previsão e planejamento de entregas), capacidade a partir da demanda (veja o tópico 5.4, Métricas de capacidade e desempenho) e custo (veja o tópico 7.5, Custo de serviço e economia unitária). Este tópico dá o método geral para medir a qualidade de qualquer previsão ou predição, que se aplica a todas elas. Cobre também os modelos preditivos cuja saída conduz uma ação, onde o custo de uma predição errada recai sobre alguém.

Termos usados aqui. Uma **previsão pontual** é um valor previsto único. Um **intervalo de predição** é uma faixa destinada a conter o valor real com uma probabilidade declarada. A **calibração** é a concordância entre a probabilidade declarada e a frequência observada: das previsões que disseram 80%, cerca de 80% devem se realizar. O **erro de previsão** é a diferença entre a previsão e o real. Uma **previsão de linha de base** é um método simples, como "igual ao último período", contra o qual se compara um método mais complexo. Um **falso positivo** é a predição de um evento que não acontece, e um **falso negativo** é a falha em prever um que acontece. A **deriva (drift)** é uma mudança nos dados ou na relação entre entradas e resultados que reduz a exatidão de um modelo ao longo do tempo.

## Princípios-chave

- **Preveja em faixas e mantenha um histórico.** Uma previsão que nunca é conferida não pode melhorar.
- **Compare com uma linha de base simples.** Um modelo complexo que não supera "igual ao último período" não está ganhando o seu custo.
- **A calibração importa tanto quanto a exatidão.** Uma previsão que diz 90% deve acertar cerca de nove vezes em dez.
- **Case o custo dos erros com a decisão.** Um alarme falso e uma falha de detecção não custam o mesmo.
- **Fique atento à deriva.** As previsões decaem quando o mundo muda; por isso monitore-as.
- **Uma previsão não é um compromisso.** Não a transforme em meta para as pessoas.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura do intervalo de previsão | Proporção dos resultados reais que caíram dentro do intervalo de predição declarado | resultados dentro do intervalo / previsões avaliadas; as previsões avaliadas são aquelas cujo resultado é conhecido | porcentagem | Registro de previsões e valores reais | Gestão de capacidade e desempenho; gestão financeira | Previsão com faixas a partir da vazão | Trimestral |
| Erro de previsão | Tamanho típico da diferença entre previsão e real | mediana do erro absoluto e seu 85º percentil, em que erro absoluto = valor absoluto de (previsão menos real) / real, sobre as previsões avaliadas | porcentagem | Registro de previsões e valores reais | Gestão de capacidade e desempenho | Revisão do planejamento | Trimestral |
| Habilidade contra a linha de base | Melhoria do método de previsão sobre uma linha de base simples | 1 menos (mediana do erro absoluto do método / mediana do erro absoluto da linha de base) sobre as mesmas previsões | razão | Registro de previsões, registro da linha de base e valores reais | Melhoria contínua | Experimentar e comparar | Trimestral |
| Diferença de calibração | Diferença entre a probabilidade declarada e a frequência observada | para cada faixa de probabilidade, valor absoluto de (probabilidade declarada menos parcela observada) em média entre as faixas; as faixas com menos de um número declarado de casos são relatadas à parte | pontos percentuais | Registro de previsões probabilísticas e resultados | Gestão de riscos; habilitação de mudanças | Retrospectiva sobre estimativas | Trimestral |
| Precisão e revocação de alertas | Para um alerta ou pontuação preditiva, a proporção de alertas que estavam certos e a proporção de eventos captados | precisão = verdadeiros positivos / (verdadeiros positivos + falsos positivos); revocação = verdadeiros positivos / (verdadeiros positivos + falsos negativos) | porcentagem | Registro de predições e resultados | Gestão de incidentes; gestão de eventos | Definição de pronto para o modelo | Mensal |
| Sinal de deriva da previsão | Aumento do erro ao longo do tempo comparado com um período de referência | mediana do erro absoluto na última janela menos a mediana do erro absoluto na janela de referência, com os tamanhos das janelas declarados | pontos percentuais | Registro de previsões e valores reais | Melhoria contínua; gestão de capacidade | Inspecionar e adaptar | Mensal |
| Ligação da previsão a decisões | Proporção das previsões citadas em uma decisão registrada | previsões citadas no registro de decisões / previsões publicadas | porcentagem | Registro de decisões e registro de previsões | Melhoria contínua; governança | Ações de revisão | Trimestral |

O erro de previsão e a cobertura são calculados somente para as previsões cujo resultado é conhecido; assim as previsões recentes são excluídas até lá. A precisão e a revocação dependem de como um evento é definido; por isso a definição do evento, como "uma mudança que causa um incidente em 48 horas", é declarada junto com a métrica.

## Recomendações

### Preveja com honestidade

**1. Publique faixas, e não datas únicas.** Dê um intervalo com uma probabilidade declarada, como "entre 12 e 18 dias úteis, com 85% de confiança", e explique a premissa por trás. Um número único convida a um compromisso.

**2. Mantenha um registro de previsões.** Registre cada previsão quando é feita: a quantidade, o valor ou a faixa, a data, o método e as premissas. Acrescente o real quando for conhecido. Sem o registro, não há histórico.

**3. Comece com uma linha de base simples.** Compare qualquer método novo com um ingênuo, como o valor do último período ou uma média recente. Se um método complexo não o supera com clareza ao longo do tempo, fique com o simples.

**4. Declare as premissas que invalidariam a previsão.** Uma previsão de demanda pressupõe nenhum grande lançamento, nenhuma interrupção, nenhum novo grupo de clientes. Escreva a premissa ao lado do número, para que o leitor saiba quando desconfiar.

### Meça a qualidade

**5. Confira a cobertura e a calibração.** Conte com que frequência os resultados caem dentro do intervalo. Se um intervalo de 85% contém o resultado só metade das vezes, é estreito demais. Relate a calibração com o número de casos, já que amostras pequenas são ruidosas.

**6. Leia os erros como uma distribuição.** Um erro mediano de 10% pode esconder falhas ocasionais de 50% que são as que mais importam. Mostre um percentil alto e as maiores falhas e reveja-as.

**7. Case a medida com o custo da decisão.** Para um alerta preditivo, escolha a precisão ou a revocação conforme o custo de um alarme falso e de uma falha de detecção. Um alerta de fraude e uma sugestão de roteamento de baixo risco têm equilíbrios diferentes.

**8. Fique atento à deriva.** Compare o erro recente com um período de referência e investigue os aumentos. As causas comuns são um novo serviço, um processo alterado, novas ferramentas ou uma mudança em como os dados são registrados.

### Use bem as previsões

**9. Ligue as previsões a decisões.** Diga que decisão uma previsão informa e registre no registro de decisões o que foi decidido. Aposente as previsões que ninguém usa.

**10. Mantenha as previsões longe das metas para pessoas.** Uma previsão de volume de incidentes que vira cota para a central distorcerá o relato. Trate as previsões como informação sobre um sistema.

**11. Mantenha um humano responsável por agir sobre as predições.** Para modelos que pontuam itens, nomeie o responsável, a ação tomada sobre uma pontuação, como uma pessoa pode sobrepô-la e como os erros são relatados. Reveja os falsos positivos e falsos negativos com casos amostrados.

**12. Observe o viés e o dano.** Um modelo treinado em decisões passadas pode repetir o viés delas. Confira os resultados quanto a grupos de usuários ou serviços que se saem de modo diferente e relate o que a verificação não consegue mostrar. Este livro não dá aconselhamento jurídico; por isso confira as obrigações com seu próprio assessor jurídico.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura do intervalo de previsão | Alargar os intervalos até a cobertura parecer boa; avaliar só as previsões fáceis | Relatar a largura do intervalo com a cobertura; avaliar todas as previsões registradas |
| Erro de previsão | Revisar a previsão pouco antes do resultado; escolher a janela de avaliação | Usar a previsão original registrada; fixar a janela de antemão |
| Habilidade contra a linha de base | Escolher uma linha de base fraca; ajustar o método sobre os dados de avaliação | Combinar a linha de base de antemão; avaliar com dados não usados no ajuste |
| Diferença de calibração | Usar poucas faixas ou poucos casos; fundir faixas para esconder lacunas | Relatar o número de casos por faixa; contagens mínimas de casos |
| Precisão e revocação de alertas | Redefinir eventos depois do fato; contar duplicatas | Fixar a definição do evento de antemão; desduplicar; amostrar alertas |
| Sinal de deriva da previsão | Reiniciar o período de referência; ignorar a deriva lenta | Fixar a janela de referência e rever em um cronograma |
| Ligação da previsão a decisões | Citar previsões em um registro sem efeito na decisão | Perguntar o que mudou; amostrar entradas |

Uma leitura saudável é intervalos que cobrem a parcela declarada dos resultados sem serem absurdamente largos, linhas de base simples que os métodos complexos superam com folga, deriva percebida e investigada e previsões que aparecem nas decisões.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Previsões de linha de base simples | Fáceis de explicar e manter; difíceis de superajustar | Perdem padrões e mudanças |
| Modelos estatísticos ou de aprendizado de máquina | Captam mais padrões; escalam entre itens | Difíceis de explicar; deriva; exigem monitoramento e dados |
| Previsões pontuais | Fáceis de comunicar | Falsa precisão; convidam ao compromisso |
| Previsões por intervalo | Honestas sobre a incerteza | Mais difíceis de comunicar; podem ser lidas como vagas |
| Julgamento de especialistas | Usa o contexto que um modelo não tem | Enviesado; difícil de acompanhar |

A conclusão pragmática é começar simples, manter o registro, mostrar intervalos e acrescentar complexidade somente quando ela ganha seu lugar contra uma linha de base. O julgamento e os modelos podem trabalhar juntos se ambos são registrados e conferidos.

## Perguntas para discutir com sua equipe

**1. Qual foi a última previsão que fizemos, e como ela terminou?**
A maioria das equipes não sabe, porque as previsões não são registradas. Peçam o número, a premissa e o real. Percebam se a surpresa veio dos dados ou da premissa. Em seguida, comecem um registro de previsões com esse exemplo.

**2. Que previsão tratamos como compromisso, e quem paga quando ela está errada?**
Procurem previsões que viraram metas, como datas de entrega ou cifras de volume. Perguntem quem sente pressão e o que faz. Discutam faixas e a linguagem usada para comunicá-las. Em seguida, reescrevam um compromisso como uma faixa com premissas.

**3. O nosso modelo ou ferramenta preditiva supera "igual ao último período"?**
Peçam a comparação, e não a alegação do fornecedor. As equipes muitas vezes não têm uma linha de base. Discutam como comparar com justiça nos mesmos casos. Em seguida, rodem a linha de base ao lado por um trimestre.

**4. Quanto nos custa um alarme falso, e quanto nos custa uma falha de detecção?**
Isso define o equilíbrio entre precisão e revocação. Peçam exemplos reais. Os custos muitas vezes são diferentes para pessoas diferentes, como um engenheiro de plantão e um cliente. Em seguida, combinem qual erro importa mais.

**5. O que faria nossas previsões pararem de funcionar, e perceberíamos?**
Discutam mudanças como um novo produto, uma nova ferramenta ou um jeito diferente de registrar dados. Peçam o sinal que mostraria a deriva. Em seguida, acrescentem uma verificação de deriva e um responsável.

**6. Quem age sobre uma predição, e essa pessoa pode dizer não?**
Para itens pontuados, perguntem quem decide o que acontece. Procurem ações automáticas sem sobreposição. Discutam como os erros são relatados e corrigidos. Em seguida, escrevam a regra de sobreposição.

## Quatro perspectivas

### Equipes de produto e entrega

Prevejam a partir do seu próprio histórico e deem faixas. Registrem as previsões e comparem-nas com os reais e marquem as mudanças que tornam a história um guia ruim, como uma nova ferramenta ou uma mudança de equipe. Mantenham os números de planejamento locais da equipe fora das comparações entre equipes.

### Equipes de serviço e operações

As previsões de demanda, capacidade e incidentes ajudam o dimensionamento de pessoal e a prevenção. Usem-nas para planejar, e não para definir cotas. Fiquem atentos aos modelos de alerta que elevam o ruído e relatem os falsos positivos para que os modelos possam ser ajustados.

### Liderança e governança

Peçam o histórico por trás de uma previsão, e não só o seu valor, e o intervalo. Evitem transformar previsões em metas para pessoas. Para os modelos preditivos usados em operações, peçam o responsável, a regra de sobreposição e a verificação de viés.

### Clientes e usuários

Vocês sentem o efeito das previsões como esperas, interrupções e decisões tomadas sobre vocês. Perguntem como as predições que os afetam são conferidas e como podem contestar uma. Os relatos de vocês sobre resultados errados fazem parte do feedback de que o modelo precisa.

## Na prática: um exemplo de gestão de serviços

A central de serviços de TI de um órgão público regional prevê o volume semanal de tickets para planejar o pessoal. Os números deste exemplo são ilustrativos. Uma ferramenta de fornecedor oferece uma previsão de aprendizado de máquina, e o gerente quer saber se deve adotá-la.

A equipe começa um registro de previsões. Por dez semanas, registra três previsões para cada semana: a previsão pontual do fornecedor, uma linha de base ingênua (a média das últimas quatro semanas) e uma faixa a partir dos erros recentes da linha de base. Depois, calcula o erro de previsão de cada uma. O erro mediano do fornecedor é de 11% e o da linha de base é de 13%; assim a habilidade contra a linha de base é de 15%. O erro no 85º percentil do fornecedor é de 38%, com grandes falhas nas semanas com anúncios do órgão, que não estão nos dados que a ferramenta usa.

A equipe adota a previsão do fornecedor como um insumo, acrescenta um campo para eventos conhecidos e publica uma faixa baseada em erros passados. A cobertura do intervalo de previsão para a faixa declarada de 85% é de cerca de 80% nas dez semanas, com uma contagem pequena; por isso a relata com a ressalva de que dez casos são poucos. Monta também uma verificação de deriva que compara o erro das últimas oito semanas com o das primeiras oito.

Surge um risco de manipulação. Um líder de equipe nota que a previsão é usada para definir o pessoal e sugere acrescentar uma folga à previsão para que a equipe pareça bem dimensionada. A equipe mantém honesta a previsão e registra a folga de pessoal como uma decisão separada. O que continua difícil: os eventos que a ferramenta não vê ainda causam grandes falhas, e dez semanas de dados não bastam para julgar a calibração. O plano é rever de novo após um período mais longo.

## Ágil, IA, automação e análise

### Ágil

Os ciclos curtos de planejamento permitem a uma equipe conferir as previsões com frequência e revisá-las com as partes interessadas. Uma boa prática é prever com faixas a partir da vazão da própria equipe e rever o histórico na conversa regular de melhoria. O cuidado é que uma previsão tratada como promessa leva a folgas, a esconder ou a dividir o trabalho.

### IA

Os modelos de aprendizado de máquina e os assistentes de IA podem produzir previsões e pontuações de risco, com aparência de precisão. Compare-os com uma linha de base, mantenha um responsável, confira a calibração e as taxas de falsos positivos e negativos por amostragem e mantenha um humano responsável pelas ações tomadas sobre uma pontuação (veja o tópico 10.5, Métricas de governança e risco de IA). O cuidado é que uma previsão gerada por IA pode dar um número confiante sem intervalo e sem premissas declaradas; por isso peça ambos.

### Automação

Automatize o registro das previsões, a coleta dos reais e o cálculo do erro e da cobertura para que o histórico se construa sozinho. Meça as ações automatizadas que seguem uma predição pelas ações erradas. O cuidado é que a automação que age sobre uma previsão, como escalar a capacidade ou acionar um plantão, torna visíveis aos usuários os erros da previsão; por isso acrescente limites e revisão.

### Análise

Este tópico é a análise das previsões: mostre o erro como uma distribuição, a cobertura com contagens e a deriva com a janela usada. A decisão informada é quanto confiar em uma previsão e quando trocar o método. O cuidado é que amostras pequenas dão calibração instável; por isso declare o número de previsões por trás de cada cifra (veja o tópico 10.8, Métricas de análise e qualidade de dados).

## Olhar setorial

**Startup.** O histórico é curto e o serviço muda com frequência; assim as previsões são fracas. Use linhas de base simples e faixas largas e mantenha um registro curto. Evite comprar ferramentas de previsão antes de haver dados.

**Pequena empresa.** A sazonalidade e poucos grandes clientes dominam. Use o mesmo período do ano passado como linha de base e anote os eventos que quebram o padrão. Cuidado com previsões de fornecedores que alegam precisão.

**Grande empresa.** Muitas previsões entre equipes precisam de um registro e de definições comuns. Compare métodos com justiça entre equipes e evite classificar equipes pela exatidão de suas previsões. Reveja os modelos quanto à deriva em um cronograma.

**Governo e setor público.** As previsões muitas vezes apoiam decisões de orçamento e de pessoal que são públicas. Documente os métodos e as premissas e confira as regras para decisões automatizadas que afetam pessoas. Planeje eventos externos, como mudanças de política, que quebram os dados (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o trabalho com dados, o registro das previsões, as ferramentas de modelagem se usadas, o tempo de revisão e o monitoramento dos modelos quanto à deriva. Começar com um registro e uma linha de base ingênua custa muito pouco.

O retorno é um planejamento melhor: capacidade que chega antes da necessidade, pessoal que combina com a demanda e menos surpresas. É difícil de atribuir; por isso evite alegar uma cifra. Compare ao longo do tempo o custo e o erro de um método de previsão com a linha de base e declare as premissas como faixas (veja o tópico 7.7, Retorno do investimento e business case). O lado do risco é o custo do excesso de confiança em um modelo que derivou e de decisões tomadas sobre falsa precisão.

## Antipadrões e armadilhas

- **Previsões de número único tratadas como promessas.** Produzem folgas e culpa. Publique faixas com premissas.
- **Nenhum registro de previsões.** Não há como aprender. Registre previsões e reais.
- **Comprar um modelo sem uma linha de base.** O ganho é desconhecido. Compare com "igual ao último período".
- **Julgar a exatidão sobre os dados de treinamento.** Bajula o modelo. Avalie com dados posteriores.
- **Ignorar os falsos positivos.** Predições ruidosas treinam as pessoas a ignorá-las. Relate a precisão e a revocação.
- **Previsões como metas para pessoas.** Distorcem os dados. Use-as para planejar.
- **Nenhuma verificação de deriva.** Os modelos decaem em silêncio. Monitore o erro ao longo do tempo.
- **Predições sem responsável humano.** As ações erradas não têm quem responda. Nomeie um responsável e uma regra de sobreposição.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Prática de previsão | Números únicos; sem registro | Algumas faixas; notas informais | Registro de previsões com faixas, premissas e reais | Erro, cobertura e linha de base comparados em um ritmo | Previsões e métodos melhorados por experimentos e compartilhados entre equipes |
| Modelos preditivos | Alegações de fornecedores aceitas | Piloto comparado com uma linha de base | Responsável, avaliação e regra de sobreposição por modelo | Deriva, precisão e revocação monitoradas | Ciclo de vida do modelo gerido com supervisão e aposentadoria |
| Uso nas decisões | Previsões como compromissos | Previsões mostradas aos decisores | Previsões ligadas a decisões em um registro | Decisões revistas contra os resultados das previsões | As decisões se adaptam à incerteza da previsão |

## Lista de verificação

- [ ] Um registro de previsões anota a quantidade, o valor ou a faixa, a data, o método e as premissas.
- [ ] Os reais são acrescentados e o erro de previsão é relatado como uma distribuição.
- [ ] Uma linha de base simples roda ao lado de qualquer previsão complexa.
- [ ] A cobertura do intervalo é relatada com a largura do intervalo e o número de casos.
- [ ] Os alertas preditivos relatam precisão e revocação contra uma definição fixa de evento.
- [ ] A deriva é conferida contra uma janela de referência fixa.
- [ ] Todo modelo preditivo tem um responsável, uma regra de sobreposição e uma data de revisão.
- [ ] As previsões são ligadas a decisões em um registro de decisões.
- [ ] As previsões não são usadas como metas individuais.
- [ ] Cada métrica tem um vetor de manipulação e uma barreira de proteção mostrados ao lado.

## Prompts de IA

**Projete um registro de previsões e uma linha de base.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Avalie um método de previsão contra uma linha de base.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Revise a supervisão de um modelo preditivo.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Revise o risco de manipulação das medidas de previsão.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## Skills de IA

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): use para construir e conferir uma previsão de demanda com faixas.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): use para examinar tendências e mudanças antes de prever.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): use para documentar o propósito, os dados e os limites de um modelo preditivo.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- Uma previsão é uma faixa com um histórico; por isso registre as previsões e compare-as com os reais.
- Compare qualquer modelo com uma linha de base simples e fique com o complexo somente se ele a superar com clareza.
- Confira a cobertura do intervalo e a calibração com o número de casos por trás delas.
- Escolha precisão ou revocação conforme o custo de um alarme falso e de uma falha de detecção.
- Não transforme previsões em metas para pessoas e mantenha um humano responsável pelas ações tomadas sobre uma predição.

## Referências e leituras complementares

1. Wikipedia, [Previsão](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Intervalo de predição](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Aprendizado de máquina](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Deriva de conceito](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precisão e revocação](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Planejamento de capacidade](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
