# Métricas de previsão e planejamento de entregas

**Equipes que entregam software continuamente e também operam serviços ao vivo precisam de previsões honestas, e não de compromissos espremidos de estimativas; por isso planeje a partir do fluxo do trabalho concluído, dê faixas em vez de datas e mantenha qualquer número de planejamento local da equipe fora das comparações e das metas.**

## Visão geral e motivação

As partes interessadas fazem duas perguntas a toda equipe de entrega: "Quando vai ficar pronto?" e "Quanto vocês conseguem assumir?". A resposta ágil parte dos objetivos dos princípios do Manifesto Ágil: entregar software valioso continuamente, colaborar com as partes interessadas todos os dias, refletir e melhorar regularmente e construir o trabalho em torno de pessoas motivadas em quem se confia para fazê-lo. Uma previsão que serve a esses objetivos é uma conversa entre as partes interessadas sobre resultados prováveis e riscos. Não é uma promessa arrancada sob pressão.

As equipes que operam serviços ao vivo têm uma dificuldade extra. Sua capacidade é dividida entre mudanças planejadas, trabalho não planejado de incidentes, requisições de serviço e melhoria. Um plano que ignora a carga operacional falhará por razões que ninguém planejou (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). A gestão de serviços de TI (ITSM), como codificada pelo ITIL, trata isso como uma questão de capacidade e demanda. O [planejamento de capacidade](https://en.wikipedia.org/wiki/Capacity_planning) é o processo de determinar a capacidade de que uma organização precisa para atender a uma demanda variável. A prática ágil de planejar contra o que a equipe realmente consegue terminar é a mesma ideia no nível da equipe.

Há duas formas amplas de prever a entrega:

- **A partir de estimativas.** A equipe dimensiona os itens em alguma unidade, soma os tamanhos e divide por uma taxa. Muitas equipes usam dimensionamento relativo, como [pontos de história](https://en.wikipedia.org/wiki/Story_point), e a taxa é chamada de [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). É rápido de começar, depende dos hábitos de estimativa da equipe e só tem sentido dentro de uma equipe.
- **A partir de dados de fluxo.** A equipe usa seu próprio registro de trabalho concluído: quantos itens conclui por semana (vazão) e quanto tempo os itens levam do início ao fim (tempo de ciclo). Como são contagens e tempos decorridos, e não opiniões, resistem à deriva e podem ser combinados com simulação para dar uma faixa de resultados. Essa abordagem vem da tradição de fluxo, que inclui o Kanban Guide, e funciona com qualquer forma de organizar o trabalho, inclusive equipes que entregam continuamente sem nenhum período de planejamento fixo.

Este tópico se inclina para a segunda abordagem, porque a entrega contínua de software produz um fluxo constante de itens concluídos que os dados de fluxo descrevem diretamente (veja o tópico 2.1, Medidas de fluxo, e o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo). Ainda assim cobre a primeira, porque muitas equipes usam estimativas e porque o mau uso da velocity está entre as formas mais comuns de as métricas de entrega darem errado.

As previsões são uma [previsão](https://en.wikipedia.org/wiki/Forecasting) de um futuro incerto, e a incerteza é o ponto. A ideia do [cone da incerteza](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) diz que as estimativas iniciais são as menos certas. A [falácia do planejamento](https://en.wikipedia.org/wiki/Planning_fallacy) diz que as pessoas subestimam quanto tempo seus próprios planos levarão, mesmo sabendo que planos semelhantes atrasaram. Uma boa medição de previsões nomeia isso e mede com que frequência as previsões acertam.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) importa aqui, porque previsões e planos facilmente viram promessas e depois metas. Quando uma equipe passa a ser julgada por cumprir uma data, ela esconde riscos, corta a qualidade ou infla a estimativa (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Preveja a partir do trabalho concluído.** O que a equipe entregou é evidência melhor do que aquilo em que alguém acredita que ela entregará.
- **Dê uma faixa com uma probabilidade.** "Provavelmente até o fim do mês que vem, muito provavelmente até o fim do seguinte" vale mais do que uma data única.
- **Planeje contra a capacidade real.** Inclua o trabalho operacional, reserve tempo para melhoria e não planeje para a utilização total.
- **Mantenha as estimativas locais.** Qualquer unidade de dimensionamento é uma ferramenta privada de planejamento de uma equipe, nunca uma base de comparação.
- **Meça a qualidade da previsão, e não só a entrega.** Uma previsão que acerta pelas razões erradas é sorte.
- **Trate a previsão como compartilhada.** As partes interessadas e a equipe a constroem juntas e a revisam quando os fatos mudam.
- **Confie na equipe.** Pessoas em quem se confia e que são apoiadas dão previsões honestas.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de acerto da previsão | Proporção das previsões em que o resultado real caiu dentro da faixa declarada | previsões cujo resultado real ficou dentro da faixa declarada / previsões feitas | porcentagem | Registro de previsões e registros de entrega | Gestão de capacidade e desempenho; melhoria contínua | Exatidão da previsão nas conversas de planejamento | Mensal |
| Largura da faixa de previsão | Quão larga era a faixa declarada, em relação à previsão mediana | (limite superior menos limite inferior) / previsão mediana | razão | Registro de previsões | Gestão de capacidade e desempenho | Estreitamento do cone da incerteza | Mensal |
| Sucesso do objetivo de entrega | Proporção dos objetivos de entrega declarados que foram atingidos no período, julgados pelo resultado | objetivos atingidos / objetivos definidos | porcentagem | Registros de objetivos acordados com as partes interessadas | Gestão de nível de serviço; melhoria contínua | Revisão de resultados com as partes interessadas | Mensal ou por release de um objetivo |
| Taxa de mudança de escopo | Proporção do trabalho comprometido que foi acrescentado, removido ou redimensionado depois de a previsão ser feita | itens acrescentados ou removidos após a previsão / itens da previsão original | porcentagem | Histórico de mudanças do rastreador de trabalho | Habilitação de mudanças; gestão de nível de serviço | Adaptação do backlog ao feedback | Mensal |
| Alocação de capacidade | Proporção da capacidade da equipe gasta em mudança, trabalho operacional e melhoria | itens ou horas concluídos em cada categoria / todos os itens ou horas concluídos | porcentagem | Rastreador de trabalho com o tipo de trabalho | Gestão de capacidade e desempenho; gestão de incidentes | Distribuição de tipos de trabalho | Mensal |
| Estabilidade da vazão | Variação da vazão semanal | desvio-padrão da vazão semanal / média da vazão semanal | razão | Rastreador de trabalho | Gestão de capacidade e desempenho | Previsibilidade do fluxo | Mensal |
| Velocity local | O trabalho concluído por uma equipe, na sua própria unidade de dimensionamento, por período de planejamento | soma das estimativas dos itens que atendem à definição de pronto no período | pontos definidos pela equipe | Rastreador de trabalho | Gestão de capacidade e desempenho | Auxílio ao planejamento de capacidade da equipe | Por período de planejamento |

Defina os relógios. Uma previsão é "feita" quando é registrada e compartilhada com as partes interessadas, e "cumprida" quando o resultado é liberado e está em uso, e não quando o código é integrado. A vazão conta itens que atendem à definição de pronto, com itens de tipos diferentes contados em séries separadas se seus tamanhos diferirem muito. A velocity local é mostrada apenas à equipe que a possui.

## Recomendações

### Preveja a partir do fluxo

**1. Construa a previsão a partir da vazão e do tempo de ciclo.** Conte os itens concluídos a cada semana nas últimas 12 a 26 semanas. Use esse histórico para prever quantos itens terminarão até uma certa data ou quando um conjunto de itens provavelmente terminará. Uma simulação pelo [método de Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), que amostra milhares de vezes do próprio histórico da equipe, transforma o histórico em uma faixa de probabilidade. Planilhas simples ou pequenos scripts fazem isso bem. Declare a janela do histórico e a data da previsão.

**2. Relate percentis dos resultados.** Diga "50% provável até 14 de março, 85% provável até 4 de abril, 95% provável até 18 de abril". Cada percentil é um enunciado honesto de risco, e as partes interessadas podem escolher quanta margem precisam. Uma data única esconde essa escolha (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**3. Use percentis de tempo de ciclo para itens isolados.** Para um item, o 85º percentil dos tempos de ciclo passados responde a "quanto tempo isto pode levar?" melhor do que qualquer estimativa. Mostre-o no quadro, como uma linha contra a qual a idade dos itens em andamento possa ser comparada (veja o tópico 2.1, Medidas de fluxo).

**4. Mantenha os tamanhos dos itens aproximadamente uniformes.** A previsão baseada em vazão funciona melhor quando os itens são pequenos e semelhantes o bastante para serem contados. As equipes chegam lá fatiando o trabalho na menor parte que ainda entrega valor, um hábito da entrega contínua de software por mérito próprio. Se os itens variam muito, acompanhe séries separadas para diferentes tipos de trabalho.

**5. Atualize a previsão sempre que os fatos mudarem.** Uma previsão é uma visão viva. Quando o escopo muda, o tamanho da equipe muda ou um grande incidente consome uma semana, refaça-a e avise as partes interessadas. Versione as previsões para poder julgá-las depois.

### Planeje contra a capacidade real

**6. Aloque a capacidade por tipo de trabalho.** Registre que parcela do trabalho concluído da equipe foi mudança planejada, trabalho operacional não planejado, requisições de serviço e melhoria. Planeje para a parcela que a experiência mostra, não para um ideal. As equipes que operam serviços ao vivo muitas vezes descobrem que um terço ou mais de sua capacidade vai para o trabalho operacional, e a cifra é delas para medir, não para tomar emprestada (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

**7. Reserve capacidade para melhoria.** A melhoria contínua é uma parte permanente do trabalho; por isso planeje tempo para ela na alocação e proteja-o. As equipes que a espremem em todo período de pico veem sua carga operacional subir, o que a espreme ainda mais. Acompanhe a parcela de melhoria e o efeito das melhorias sobre a parcela operacional.

**8. Não planeje para a utilização total.** Uma equipe planejada a 100% não tem espaço para a variação, e as filas crescem à medida que a utilização se aproxima do limite (veja o tópico 2.3, Trabalho em andamento e teoria das filas). Deixe folga para o inesperado e trate-a como uma escolha de projeto, e não como desperdício.

### Use estimativas com cuidado, se as usar

**9. Trate a velocity como um auxílio local de planejamento.** Se uma equipe dimensiona o trabalho em pontos de história, sua velocity pode ajudá-la a decidir quanto assumir na próxima conversa de planejamento e deve ser comparada apenas com o passado recente dessa mesma equipe. Nunca compare equipes, defina uma meta de velocity nem a relate para cima como medida de produtividade. Os pontos não têm unidade comum entre equipes, e a pressão para elevar o número infla as estimativas sem entregar mais.

**10. Compare as estimativas com os tempos de ciclo reais de vez em quando.** Plote as estimativas contra quanto tempo os itens levaram. Se as estimativas grandes não levam mais tempo do que as pequenas, o esforço de estimar não está comprando muito, e contar itens pode servir à equipe tão bem quanto. Se elas se correlacionam, as estimativas carregam informação que vale manter. Deixe a equipe decidir com os dados.

### Meça se funciona

**11. Registre cada previsão e pontue-a.** Anote a previsão, a faixa e o resultado real e calcule a taxa de acerto. Uma previsão bem calibrada no 85º percentil deve se realizar cerca de 85% das vezes. Se os acertos estiverem muito acima ou abaixo, ajuste o método. Compartilhe o registro com as partes interessadas, porque a confiança na previsão se constrói com o histórico de resultados.

**12. Julgue os objetivos de entrega pelo resultado.** Um objetivo como "os clientes podem pagar por fatura" é atingido quando os clientes conseguem fazê-lo, não quando as tarefas são encerradas. Combine os objetivos com as partes interessadas em palavras simples, revise-os em conjunto e registre o resultado. Isso mantém o planejamento ligado à colaboração contínua e desestimula entregar trabalho que ninguém usa (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de acerto da previsão | Declarar faixas muito largas para que toda previsão acerte; refazer a previsão depois do fato | Largura da faixa de previsão; manter a previsão original no registro; comparar as faixas com o histórico de pares |
| Largura da faixa de previsão | Estreitar as faixas para parecer confiante | Taxa de acerto da previsão; exigir que a faixa seja construída a partir do histórico registrado |
| Sucesso do objetivo de entrega | Definir objetivos fáceis; redefinir um objetivo depois do fato; contar produção como resultado | As partes interessadas julgam o resultado; redação do objetivo guardada em um registro; conferir os dados de uso da mudança entregue |
| Taxa de mudança de escopo | Congelar o escopo recusando mudanças válidas; esconder a mudança de escopo redimensionando itens | Satisfação das partes interessadas com a capacidade de resposta; motivos das mudanças registrados |
| Alocação de capacidade | Rotular trabalho operacional como melhoria; esconder a carga operacional trabalhando fora do quadro | Conciliar com os registros de incidentes e requisições; amostrar itens quanto ao tipo |
| Estabilidade da vazão | Dividir itens em pedaços triviais para elevar a contagem; encerrar itens sem terminá-los | Distribuição do tamanho dos itens; taxa de reabertura; amostra quanto ao valor entregue |
| Velocity local | Inflar estimativas; dividir histórias para reivindicar pontos; comparar equipes | Mantê-la privada da equipe; comparar com a vazão e o tempo de ciclo; nunca definir meta |

Uma leitura saudável são previsões que se realizam na taxa declarada, objetivos que as partes interessadas concordam terem sido atingidos, um quadro de capacidade que combina com o que a equipe vive e um número de velocity que, se existir, é usado pela equipe e por mais ninguém.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Previsão baseada em fluxo | Usa dados reais, resiste à inflação, dá faixas | Exige histórico estável e itens de tamanho semelhante |
| Previsão baseada em estimativas | Rápida de começar, estimula a discussão do trabalho | Subjetiva, infla sob pressão, não comparável entre equipes |
| Compromisso com data única | Simples de comunicar | Esconde o risco; pune a honestidade |
| Faixa com probabilidade | Honesta quanto à incerteza | Mais difícil de ler para algumas partes interessadas no início |
| Planejamento com utilização total | Parece eficiente | As filas crescem; sem espaço para incidentes ou aprendizado |
| Folga planejada | Absorve a variação e apoia a melhoria | Parece capacidade ociosa para os não convencidos |

A resposta em prosa é partir dos dados de fluxo, acrescentar estimativas apenas onde ajudam a equipe e falar em faixas. Onde um contrato exigir uma data, dê a data que o 85º ou o 95º percentil sustenta e diga o que a mudaria.

## Perguntas para discutir com sua equipe

**1. O que diríamos se uma parte interessada perguntasse "quando vai ficar pronto" e quisesse uma resposta honesta?**
Peça à equipe que responda para um trabalho real, primeiro com uma data única e depois com uma faixa. Note a diferença em quão confortável cada resposta parece. O facilitador deve registrar o que a equipe precisaria saber para dar a faixa com honestidade, como histórico, tamanho dos itens e riscos conhecidos.

**2. Quanto da nossa capacidade realmente vai para mudança planejada, e como sabemos?**
Olhe os últimos três meses de trabalho concluído por tipo. Compare com o plano que a equipe fez. A conversa costuma revelar que o trabalho operacional é maior que o planejado e que o trabalho de melhoria é menor. Combinem qual deve ser a alocação e que decisão a mudaria.

**3. Onde as nossas estimativas nos ajudam, e onde apenas custam tempo?**
Plote uma amostra de estimativas contra os tempos de ciclo reais. Discuta se as estimativas maiores foram de fato mais lentas. Se a ligação for fraca, pergunte o que a equipe faria de diferente se apenas contasse itens. Decida se continua, simplifica ou para de estimar por um período de teste.

**4. Quem vê os números de planejamento da nossa equipe, e o que acontece com eles?**
Rastreie cada número de planejamento da equipe até o seu público. Pergunte se alguém compara equipes com ele ou define metas. Se sim, discuta como impedir isso e o que oferecer em troca. O facilitador deve estar pronto para explicar que os números locais perdem o valor quando viajam.

**5. Quando uma previsão nossa falhou, e o que aprendemos?**
Escolha um erro e rastreie-o. Foi mudança de escopo, um grande incidente, uma dependência ou uma suposição errada? O que a teria sinalizado antes? Combinem uma mudança na prática de previsão, como registrar as dependências ou atualizar a previsão toda semana.

**6. Quais objetivos atingimos no último trimestre, e quem disse isso?**
Liste os objetivos de entrega e quem julgou cada um. Se a equipe julgou os próprios objetivos, discuta como trazer as partes interessadas. A conversa apoia a colaboração contínua e mostra se os objetivos são sobre resultados ou sobre tarefas.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas da previsão e dos dados de fluxo que a sustentam. Devem publicar faixas, manter os itens pequenos e refazer a previsão quando os fatos mudarem. As equipes que escolhem dimensionar o trabalho em pontos devem manter os números dentro da equipe. O objetivo é um fluxo constante de trabalho concluído e valioso e uma previsão em que as partes interessadas confiem porque tem um histórico de resultados.

### Equipes de serviço e operações

As equipes de operações carregam a demanda que perturba os planos. Devem compartilhar a carga de incidentes e requisições com as equipes de entrega, para que os planos de capacidade partam de números reais. As equipes de operações que também entregam mudanças podem usar a mesma previsão baseada em fluxo para o próprio trabalho. O planejamento conjunto de trabalho de mudança e de operação é um bom lugar para a colaboração contínua entre os dois grupos.

### Liderança e governança

Os líderes decidem se uma previsão é uma declaração de risco ou uma promessa. Devem pedir faixas, financiar folga e melhoria e resistir a usar a velocity ou a vazão para comparar equipes. Os órgãos de governança devem olhar a taxa de acerto da previsão ao longo do tempo e os resultados dos objetivos e tratar erros repetidos como sinal sobre o sistema, como dependências e carga operacional, e não sobre as pessoas.

### Clientes e usuários

Os usuários se importam com quando verão a mudança e se ela os ajudará. Uma faixa com confiança declarada os serve melhor do que uma data que escorrega. Devem ser envolvidos no julgamento de se os objetivos foram atingidos, já que são eles que sentem o resultado. Avisar os usuários quando uma previsão muda, e por quê, é parte de tratá-los como colaboradores.

## Na prática: um exemplo de gestão de serviços

A equipe digital de uma concessionária regional de energia constrói um portal de faturamento para clientes e o opera em produção. Os números abaixo são ilustrativos.

As partes interessadas pediram à equipe uma data para uma nova funcionalidade de plano de pagamento composta de 22 itens. No trimestre passado, a equipe deu uma data firme baseada em suas estimativas, errou por cinco semanas por causa de dois incidentes graves e perdeu a confiança das partes interessadas. Desta vez, a líder de entrega puxa a vazão das últimas 20 semanas, que varia de 3 a 9 itens por semana, com mediana de 6, e nota que o trabalho operacional tomou cerca de 35% dos itens concluídos.

Ela roda uma simulação a partir do histórico. Ela mostra que 22 itens terminam em 4 semanas cerca de metade das vezes, em 6 semanas cerca de 85% das vezes e em 8 semanas cerca de 95% das vezes. Apresenta essas três datas às partes interessadas, junto com as premissas: tamanho da equipe inalterado, carga operacional como nas últimas 20 semanas e nenhum escopo novo. Um responsável pelo produto pergunta sobre um lançamento para uma data específica de faturamento, oito semanas à frente. A equipe e as partes interessadas combinam planejar para a data de 85%, manter as duas últimas semanas como margem e fazer um ponto de controle a cada duas semanas para refazer a previsão.

No primeiro ponto de controle, uma falha no gateway de pagamento consumiu três dias, e a simulação desloca a data de 85% em uma semana. A equipe avisa as partes interessadas no mesmo dia, com o motivo, e elas concordam em retirar um item de baixo valor. A funcionalidade entra no ar na data da margem. O objetivo de entrega, "os clientes conseguem configurar um plano de pagamento sem ligar", é julgado pelo responsável pelo produto e por um painel de clientes depois de três semanas. É atingido para a maioria dos clientes, e um tema de comentários mostra confusão em uma tela, que entra no backlog. A equipe registra que sua taxa de acerto de previsões no trimestre é de quatro em cinco. As partes interessadas pedem à líder de entrega que leve faixas de previsão à próxima sessão de planejamento, e a equipe abandona o uso de pontos de história porque contar itens dava a mesma resposta.

## Ágil, IA, automação e análise

### Ágil

Planeje a partir do fluxo do trabalho concluído e revise com frequência com as partes interessadas, dando faixas em vez de datas. Uma boa prática é prever com o histórico de vazão da própria equipe e mostrar a faixa em cada revisão regular. O cuidado é que qualquer número de planejamento local da equipe, como a velocity, vira meta assim que é comparado entre equipes.

### IA

A assistência de IA pode mudar a vazão de forma rápida e desigual, o que torna o histórico antigo um mau guia por algum tempo. Marque no gráfico de vazão as datas em que as ferramentas de IA foram adotadas, alargue a faixa de previsão depois da mudança e pareie a taxa de acerto com o retrabalho. O cuidado é que estimativas geradas por IA parecem precisas; por isso trate-as como insumo para discussão e confira-as contra o registro da própria equipe.

### Automação

Calcule as previsões automaticamente a partir dos dados do rastreador, para que se atualizem sem uma reunião. Acompanhe a exatidão dessas previsões como métrica do método de previsão. O cuidado é que uma previsão automatizada mostrada sem seu intervalo convida à falsa confiança; por isso mostre a faixa por padrão.

### Análise

Use simulação ou faixas por percentis a partir da vazão passada e relate a taxa de acerto da previsão com o número de previsões por trás dela. A decisão informada é o que prometer e quando replanejar. O cuidado é que as previsões falham quando o escopo ou a capacidade se deslocam; por isso acompanhe a taxa de mudança de escopo ao lado.

## Olhar setorial

**Startup.** As prioridades mudam rápido; por isso mantenha as previsões curtas e aproximadas. Acompanhe a vazão desde o começo, já que não custa nada, e dê faixas aos fundadores. Resista a importar um sistema de planejamento feito para grandes equipes.

**Pequena empresa.** Uma ou duas pessoas podem fazer trabalho de mudança e de operação juntas, sem capacidade de sobra. Seja explícito sobre a divisão e avise o proprietário quando um incidente empurrar uma data. Uma contagem semanal simples de itens concluídos basta.

**Grande empresa.** Muitas equipes e dependências fazem as previsões dependerem do fluxo de outras equipes. Preveja cada equipe a partir dos próprios dados, torne visíveis as dependências e combine as faixas com cuidado, já que somar os melhores casos dá um total enganoso. Evite consolidações que comparem equipes por velocity.

**Governo e setor público.** Orçamentos fixos, compras e datas legais criam pressão por compromissos de data única. Declare a data sustentada pelo percentil escolhido, explique as premissas e registre abertamente as compensações de escopo. Onde existir uma data obrigatória, planeje o escopo para caber nela (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é baixo. Os dados de vazão e de tempo de ciclo costumam existir no rastreador de trabalho da equipe. Uma planilha de previsão ou um pequeno script leva um dia para ser construído, e uma previsão leva minutos para ser atualizada. O custo recorrente é o tempo para registrar previsões e resultados e para manter uma breve conversa de ponto de controle com as partes interessadas.

O retorno vem de menos surpresas e melhores decisões. As partes interessadas que entendem o risco podem escolher uma margem, ajustar o escopo ou reordenar o trabalho cedo. As equipes gastam menos tempo em cerimônias de estimativa se contar itens serve tão bem. Os conflitos por datas perdidas e os atalhos de qualidade que eles provocam diminuem. Construa o caso a partir do seu próprio histórico: a proporção de previsões que se sustentaram, o tempo gasto estimando e as mudanças de escopo feitas cedo e não tarde. Não tome emprestadas cifras de previsibilidade de outras organizações.

## Antipadrões e armadilhas

- **Tratar uma previsão como um compromisso.** Transforma a previsão em meta, e a honestidade fica cara. Apresente faixas e revise-as.
- **Comparar equipes pela velocity.** Os pontos são locais, e a comparação os infla. Compare uma equipe apenas com o próprio passado.
- **Planejar com utilização total.** A variação vira atraso. Deixe folga.
- **Ignorar o trabalho operacional.** Os planos falham na carga que ninguém planejou. Meça e planeje a alocação.
- **Usar uma data única para tudo.** Use percentis e diga qual escolheu.
- **Estimar com mais precisão do que os dados sustentam.** Estimativas detalhadas para trabalho distante são as menos confiáveis. Preveja o trabalho distante de forma grosseira.
- **Definir uma meta de velocity ou de vazão.** O número subirá e o valor não.
- **Nunca pontuar as previsões.** Sem um histórico de resultados, a confiança não cresce.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Método de previsão | Palpites de data única | Estimativas somadas à mão | Faixas baseadas em fluxo com percentis | Previsões registradas e pontuadas; método ajustado pela taxa de acerto | Previsões combinadas entre equipes e dependências, compartilhadas ao vivo com as partes interessadas |
| Planejamento de capacidade | Planos ignoram o trabalho operacional | Carga operacional conhecida de forma aproximada | Capacidade alocada por tipo de trabalho a partir de dados | Alocação revista contra resultados; tempo de melhoria protegido | Capacidade planejada em conjunto com fornecedores e operações entre serviços |
| Objetivos e uso dos números | Objetivos são listas de tarefas | Objetivos escritos | Objetivos julgados pelo resultado com as partes interessadas | Erros analisados como sinais do sistema; números locais mantidos privados | Objetivos definidos e julgados de forma colaborativa com os usuários; aprendizado compartilhado entre equipes |

## Lista de verificação

- [ ] As previsões são construídas a partir do histórico de vazão e de tempo de ciclo da própria equipe.
- [ ] As previsões são dadas como faixas com percentis, com as premissas declaradas.
- [ ] Toda previsão é registrada com sua faixa e o resultado real.
- [ ] A taxa de acerto e a largura da faixa da previsão são revistas todo mês.
- [ ] A capacidade é alocada por tipo de trabalho, inclusive trabalho operacional e melhoria.
- [ ] A utilização planejada deixa folga para a variação e os incidentes.
- [ ] Qualquer unidade de dimensionamento ou velocity é privada da equipe e não carrega meta.
- [ ] Os objetivos de entrega são escritos como resultados e julgados com as partes interessadas.
- [ ] As mudanças de escopo são registradas com seus motivos.
- [ ] As previsões são atualizadas quando os fatos mudam, e as partes interessadas são avisadas.

## Prompts de IA

**Construa uma previsão baseada em vazão.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Revise como usamos estimativas.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Planeje a capacidade entre trabalho de mudança e de operação.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Redija uma revisão de previsão com as partes interessadas.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de previsão ou de planejamento.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada revisada de métrica de planejamento mantém seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Preveja a partir do fluxo do trabalho concluído e dê faixas com probabilidades em vez de datas únicas.
- Planeje contra a capacidade real, incluindo trabalho operacional, tempo de melhoria e folga.
- Trate qualquer unidade de estimativa ou velocity como um auxílio privado de uma equipe, nunca como meta nem como comparação.
- Pontue suas previsões: a taxa de acerto constrói confiança.
- Julgue os objetivos de entrega pelo resultado, junto com as partes interessadas e os usuários.
- Confie na equipe e apoie-a: previsões honestas vêm de pessoas que não são punidas pela incerteza.

## Referências e leituras complementares

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Planejamento de capacidade](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Ponto de história](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (desenvolvimento de software)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Previsão](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone da incerteza](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Falácia do planejamento](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Método de Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method).
