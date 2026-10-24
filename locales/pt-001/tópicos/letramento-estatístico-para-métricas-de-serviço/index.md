# Letramento estatístico para métricas de serviço

**Os dados de tickets e de fluxo são assimétricos, irregulares e muitas vezes escassos; por isso relate medianas e percentis altos em vez de médias, diga quantos itens estão por trás de cada taxa e separe a variação ordinária da mudança real antes que alguém reaja.**

## Visão geral e motivação

A maioria das métricas de serviço chega como um único número num painel: tempo médio de resolução, porcentagem de incidentes resolvidos dentro da meta, tickets encerrados nesta semana. Um número único parece preciso. Em geral é um resumo comprimido de uma coleção bagunçada de eventos, e a compressão decide o que o leitor vê. O letramento estatístico, para os fins deste livro, é o pequeno conjunto de hábitos que mantém o resumo honesto: escolher um resumo que combine com a forma dos dados, saber quantos dados estão por trás dele e distinguir uma mudança real do ruído.

A forma dos dados de serviço é o primeiro problema. Medidas de tempo como tempo de resolução, tempo de ciclo e tempo de espera têm limite inferior em zero e uma cauda longa à direita. A maioria dos itens termina rápido, e alguns levam muito tempo. Dados assim são [assimétricos](https://en.wikipedia.org/wiki/Skewness), e a média aritmética é puxada para a cauda, de modo que um ticket travado pode mover a média mais do que cem tickets rotineiros. A [mediana](https://en.wikipedia.org/wiki/Median), o valor do meio quando os itens são ordenados, é bem menos afetada. Um [percentil](https://en.wikipedia.org/wiki/Percentile) a generaliza: o 85º percentil é o valor dentro do qual 85% dos itens terminam. Durações desse tipo costumam ser modeladas por uma [distribuição log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), na qual o logaritmo do valor é simétrico. A lição é que "típico" e "médio" diferem para dados assimétricos.

O tamanho da amostra é o segundo problema. Uma equipe que resolve 12 incidentes de prioridade 1 em um trimestre e relata "83% dentro da meta" está descrevendo 10 de 12. Mais uma falha moveria a cifra em oito pontos. O enunciado honesto inclui a contagem e, muitas vezes, um intervalo. Um [intervalo de confiança](https://en.wikipedia.org/wiki/Confidence_interval) é uma faixa calculada a partir dos dados que expressa a que distância o valor verdadeiro poderia plausivelmente estar do observado. Os intervalos são largos para amostras pequenas e estreitos para grandes, que é a mensagem correta para um trimestre com 12 incidentes.

A variação é o terceiro problema. Todo processo produz números que oscilam de semana para semana sem que nada tenha mudado. Walter Shewhart, trabalhando com qualidade na manufatura nos anos 1920, separou essa oscilação rotineira dos sinais que merecem investigação e nos deu o [gráfico de controle](https://en.wikipedia.org/wiki/Control_chart). Aplicar gráficos como esse a um processo se chama [controle estatístico de processo](https://en.wikipedia.org/wiki/Statistical_process_control). Parte desse último erro é a [regressão à média](https://en.wikipedia.org/wiki/Regression_toward_the_mean): um valor extremo tende a ser seguido por um menos extremo, de modo que a semana depois de uma semana terrível parece uma recuperação, quer alguém tenha feito algo ou não.

A prática de fluxo ágil, como o uso, no Kanban Guide, de percentis de tempo de ciclo e da idade do item de trabalho, já pede distribuições e previsões expressas como probabilidades (veja o tópico 2.1, Medidas de fluxo). No ITIL 4, a prática de medição e relatório e a prática de melhoria contínua dependem de medidas que signifiquem o que parecem significar, e a gestão de nível de serviço depende de metas definidas contra uma variação realista. O letramento estatístico é a camada compartilhada sob ambas. Ele também apoia a barreira de proteção do tópico 1.2, A lei de Goodhart e a psicologia das métricas: uma equipe que mostra a distribuição inteira tem menos lugares para esconder uma média manipulada.

A variação por causa comum está embutida no processo, e a variação por causa especial vem de algo específico que mudou ou deu errado. Um acordo de nível de serviço (SLA) é um compromisso documentado com um cliente, e um objetivo de nível de serviço (SLO) é uma meta para uma medida.

## Princípios-chave

- **Combine o resumo com a forma.** Use medianas e percentis para durações e mostre a distribuição completa quando a decisão importar. Reserve a média para dados aproximadamente simétricos ou para totais, como custo.
- **Toda taxa carrega a sua contagem.** Uma porcentagem sem numerador e denominador é uma alegação sem evidência anexada. Abaixo de uma contagem mínima declarada, mostre os itens brutos em vez de uma taxa.
- **A variação ordinária não é notícia.** Conheça a faixa normal de uma medida antes de reagir. Responda a sinais, não a cada movimento.
- **A incerteza faz parte da resposta.** Expresse previsões como probabilidades ("85% dos itens terminam em até 9 dias") e estimativas como faixas, e resista à falsa precisão.
- **Mostre as distribuições à equipe dona do trabalho.** Itens brutos e histogramas tornam visíveis os casos incomuns e dificultam a manipulação silenciosa.
- **Correlação, seleção e momento explicam muitas "melhorias".** Pergunte o que mais mudou, quem ficou de fora dos dados e se o ponto de partida estava incomumente ruim.
- **Mantenha a estatística proporcional.** Uma equipe precisa de um punhado de técnicas usadas com consistência, não de um curso de estatística. Explique cada gráfico em palavras simples.

## Definições de métricas

As métricas abaixo descrevem a qualidade estatística de uma prática de métricas e a distribuição do trabalho de serviço. As medidas de tempo usam os relógios declarados em cada linha, e as definições devem ser reutilizadas pelos tópicos seguintes (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes, e o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo).

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mediana do tempo de resolução | O tempo de resolução do meio dos incidentes resolvidos no período | 50º percentil de (carimbo de resolução menos carimbo de criação) sobre os incidentes resolvidos no período; o relógio começa na criação do ticket e para na resolução; as pausas são relatadas à parte, não subtraídas; tickets cancelados e duplicados são excluídos | horas ou dias | Histórico de status da ferramenta de ITSM | Gestão de incidentes; medição e relatório | Mediana do tempo de ciclo | Semanal ou mensal |
| Tempo de resolução em percentil alto | O tempo dentro do qual a maioria dos incidentes é resolvida, com o percentil nomeado | 85º (ou 95º) percentil do mesmo tempo decorrido acima; calculado apenas se ao menos 20 itens foram resolvidos, caso contrário os itens brutos são listados | horas ou dias | Histórico de status da ferramenta de ITSM | Gestão de incidentes; gestão de nível de serviço | Previsão por percentil do tempo de ciclo | Semanal ou mensal |
| Idade do item aberto mais antigo | Idade do item mais antigo ainda aberto, mais a contagem de itens mais velhos que o percentil alto | agora menos carimbo de criação para itens abertos, sem subtrair pausas; conta todos os itens abertos na fila do serviço, inclusive os que aguardam o cliente | dias | Ferramenta de ITSM ou rastreador de issues | Gestão de incidentes; gestão de problemas | Idade do item de trabalho | Semanal |
| Cobertura do relato de taxas | Proporção das taxas relatadas que mostram numerador, denominador e uma verificação de contagem mínima | taxas relatadas com contagens e um sinalizador de amostra / taxas relatadas; conta apenas as taxas publicadas no pacote de revisão do período | porcentagem | Registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) | Medição e relatório | Acordos de trabalho | Trimestral |
| Taxa de sinais no gráfico de controle | Proporção dos pontos do gráfico de controle de uma medida que sinalizam variação por causa especial pelas regras escritas da equipe | pontos sinalizados pelas regras / pontos plotados, nos últimos 20 pontos ou mais; as regras são fixadas de antemão e registradas | porcentagem | Ferramenta de gráfico de controle ou planilha | Melhoria contínua | Inspeção do processo na retrospectiva | Mensal |
| Largura do intervalo | Largura da faixa de incerteza declarada para uma taxa de destaque | limite superior menos limite inferior do intervalo, pelo método nomeado no registro, para a taxa de destaque do período | pontos percentuais | Calculada a partir das contagens do ITSM | Gestão de nível de serviço | Faixa de previsão no planejamento | Mensal |

Onde um contrato citar uma média, relate a cifra contratual e mostre ao lado a mediana e o percentil.

## Recomendações

### Resuma os dados de tempo com honestidade

**1. Adote como padrão a mediana e um percentil alto nomeado.** Para tempo de resolução, tempo de ciclo e tempo de atendimento, publique juntos a mediana e o 85º ou 95º percentil e escreva o percentil no nome da métrica. A mediana diz o que é típico, e o percentil alto diz o que se pode razoavelmente prometer a um cliente. Se você precisar escolher um número para um compromisso, escolha o percentil.

**2. Mostre a forma além do resumo.** Um histograma ou um gráfico de dispersão do tempo de resolução por data de encerramento mostra agrupamentos, caudas longas e mudanças bruscas que nenhum resumo mostra. Quando a figura e o número discordarem, acredite na figura e investigue o número.

**3. Acrescente a idade do item aberto mais antigo.** Os percentis do trabalho concluído olham para trás e ignoram tudo o que ainda está preso. Relate o item aberto mais antigo e quantos itens abertos já são mais velhos que o seu percentil alto (veja o tópico 2.1, Medidas de fluxo). É o corretivo mais útil para médias que melhoram porque os itens difíceis são deixados envelhecer.

### Respeite amostras pequenas e a incerteza

**4. Publique a contagem com toda taxa.** Escreva "10 de 12 resolvidos dentro da meta" em vez de "83%". Acrescente uma regra de que taxas baseadas em menos de um número declarado de itens sejam mostradas como contagens ou como os itens subjacentes. O limiar é um julgamento: escreva-o, revise-o e aplique-o em toda parte.

**5. Use intervalos para taxas de destaque e previsões.** Para uma proporção, como a parcela de mudanças que falham, calcule um intervalo de confiança por um método que sua equipe acorde e anote o método no registro. Para previsões de entrega, uma faixa baseada em amostra (por exemplo, "provavelmente entre 8 e 14 itens por semana") diz mais aos planejadores do que uma única cifra de vazão. Se o intervalo for largo demais para informar uma decisão, diga isso.

### Distinga sinal de ruído

**6. Desenhe gráficos de controle para as medidas sobre as quais você age.** Um gráfico simples de indivíduos plota cada ponto em ordem temporal, com uma linha central e limites calculados a partir dos dados, e sinaliza pontos fora dos limites ou sequências de um lado da linha central. Comece com a mediana semanal do tempo de resolução e o volume semanal. Escreva as regras de sinal uma vez (por exemplo, um ponto além dos limites ou uma sequência de oito de um lado) e mantenha-as fixas, para que a equipe não ajuste as regras até o gráfico concordar com o que ela sente.

**7. Aja sobre sinais e deixe a variação por causa comum em paz.** Quando um ponto está dentro dos limites, resista a explicá-lo; é o processo se comportando como normalmente se comporta. Quando um sinal aparece, pergunte o que mudou naquela semana: um release, uma falta de pessoal, uma pane de fornecedor, uma categoria nova. Se o processo é estável mas insatisfatório, a melhoria é uma mudança no sistema, e não uma conversa com quem teve a semana vermelha.

**8. Espere regressão à média após um período extremo.** Se você lança uma iniciativa no pior mês do ano, alguma melhoria virá por acaso. Compare com uma linha de base mais longa, com um serviço semelhante que não mudou ou com os limites de controle antes de dar crédito à iniciativa. Um par antes-e-depois de dois pontos é a forma mais fraca de evidência.

### Raciocine com cuidado sobre causa e seleção

**9. Pergunte o que falta nos dados.** As respostas de pesquisa vêm de quem escolheu responder. Os tickets encerrados excluem os ainda abertos. Antes de tirar uma conclusão, liste quem ou o que está ausente e como isso poderia inclinar o resultado.

**10. Mude as definições de propósito e marque-as no gráfico.** Um novo modelo de status, uma nova matriz de prioridade ou uma nova lista de categorias altera os dados sem alterar o trabalho. Anote cada mudança no gráfico e reinicie os limites de controle depois dela (veja o tópico 1.5, Fontes de dados e instrumentação).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Mediana do tempo de resolução | Encerrar primeiro os tickets rápidos e deixar abertos os difíceis; dividir um ticket em vários fáceis; pausar o relógio num estado de espera do cliente | Tempo de resolução em percentil alto e idade do item aberto mais antigo; proporção do tempo em estados de pausa; taxa de tickets vinculados |
| Tempo de resolução em percentil alto | Escolher um percentil que favoreça o resultado ou mudá-lo entre relatórios; excluir casos longos como "valores atípicos" ou reclassificá-los | Percentil fixado no registro; uma lista de itens excluídos com razões; idade do item aberto mais antigo |
| Idade do item aberto mais antigo | Encerrar ou fundir o item mais antigo sem resolvê-lo; movê-lo para outra fila ou categoria | Taxa de reabertura; auditoria amostral dos itens mais antigos encerrados; contagem de transferências de fila |
| Cobertura do relato de taxas | Anexar uma contagem em letras miúdas enquanto as manchetes continuam liderando com a porcentagem; fixar a contagem mínima tão baixa que ela nunca dispara | Revisar o painel real, não o registro; revisar a contagem mínima junto com a largura do intervalo |
| Taxa de sinais no gráfico de controle | Alargar os limites, acrescentar regras ou reiniciar a linha de base para que os sinais desapareçam; mover pontos mudando a medida | Regras e limites guardados no registro com histórico de mudanças; comparar com o histograma bruto |
| Largura do intervalo | Escolher um método ou uma janela que produza uma faixa estreita; agrupar serviços dessemelhantes para aumentar a amostra | Método nomeado no registro; detalhamento por serviço disponível sob demanda; resultados agrupados e não agrupados comparados |

Uma leitura saudável mostra medianas e percentis que se movem na mesma direção da experiência dos usuários, uma curta lista de itens antigos que encolhe sem ser reclassificada em silêncio e taxas que aparecem com suas contagens. A taxa de sinais no gráfico de controle deve ser baixa e diferente de zero: um gráfico que nunca sinaliza pode ser incapaz de sinalizar, e um que sempre sinaliza reflete um processo instável ou regras mal escolhidas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Tempo médio de resolução | Simples, combina com muitos contratos, fácil de totalizar | Dominado pela cauda; esconde o que os clientes tipicamente vivenciam |
| Mediana mais percentil alto | Resiste a valores atípicos; apoia promessas aos clientes | Pede um pouco de explicação; os percentis precisam de itens suficientes para serem estáveis |
| Taxas brutas sem contagens | Compactas e familiares | Escondem amostras pequenas e convidam a leituras excessivas |
| Taxas com contagens e intervalos | Honestas quanto à incerteza; desestimulam a reação exagerada | Parecem menos decisivas; os métodos de intervalo exigem acordo |
| Gráficos de controle | Separam sinal de ruído; orientam quando agir | Precisam de pontos suficientes e definições estáveis; os limites podem ser mal lidos ou manipulados |
| Comparação antes-e-depois | Rápida e fácil de comunicar | Sujeita à regressão à média e a mudanças coincidentes |

Para um serviço com um punhado de incidentes por ano, nenhuma estatística é estável, e o método certo é ler cada incidente. Para uma central de alto volume, as medidas atentas à distribuição são baratas e claramente superiores. Escolha pelo volume e pelo que está em jogo na decisão.

## Perguntas para discutir com sua equipe

**1. Qual dos números do nosso painel atual é uma média de algo assimétrico, e o que mostrariam a mediana e o 95º percentil?**
Escolha a medida de tempo mais observada e calcule as três sobre o mesmo conjunto de itens antes da reunião. Pergunte se a história contada pela média combina com o que os usuários dizem. Feche combinando qual resumo vira a manchete e onde os outros aparecerão.

**2. Quantos itens estão por trás da nossa porcentagem mais citada, e ainda a citaríamos se escrevêssemos as contagens?**
Liste as três porcentagens que a liderança mais lê. Ao lado de cada uma, escreva o numerador e o denominador do último período. Pergunte o que um único sucesso ou falha a mais faria com a cifra. Combinem uma contagem mínima abaixo da qual a equipe mostra os itens em vez de uma taxa.

**3. Quando foi a última vez que creditamos uma melhoria a uma iniciativa, e o que mais era verdade na época?**
Escolha uma história de sucesso recente. Pergunte quando a medida estava no seu pior, como é o histórico mais longo e se um serviço comparável também melhorou. Mantenha o tom curioso.

**4. Qual é a faixa normal das nossas medidas principais, e quem poderia dizer que uma dada semana é incomum?**
Plote os últimos 20 ou mais valores semanais de uma medida e desenhe a linha central e os limites, ou calcule-os grosseiramente. Pergunte a quais semanas a equipe reagiu que estavam dentro da faixa. Combinem quem é dono do gráfico e onde as regras de sinal estão escritas.

**5. Quem ou o que falta nos nossos dados?**
Liste as fontes da medida: tickets encerrados, respostas de pesquisa, serviços monitorados, ferramentas com carimbos de data e hora. Para cada uma, pergunte quem fica de fora e por quê. Registre cada lacuna como uma correção ou uma ressalva.

**6. Como explicaríamos uma faixa larga ou um "ainda não sabemos" à liderança sem que soe como desculpa?**
Ensaie a redação num exemplo real: "Entre 70 e 95%, com 12 incidentes; esperamos estreitar isso depois do próximo trimestre". Pergunte do que o público precisa para decidir e se a faixa muda a decisão. Escreva um breve roteiro na reunião.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega usam tempo de ciclo e vazão para prever e ganham mais com previsões baseadas em percentis do que em médias (veja o tópico 2.1, Medidas de fluxo). Uma previsão enunciada como faixa com uma probabilidade é mais fácil de defender do que uma data. Resista a ler a mudança de um período como tendência (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

### Equipes de serviço e operações

As equipes de operações são donas dos dados de tickets e dos relógios de incidentes; por isso estão em melhor posição para publicar medianas, percentis e o item aberto mais antigo e para explicar as regras de pausa. Devem plotar o volume semanal e o tempo de resolução com limites de controle para que uma mudança real, como um release defeituoso, se distinga de uma semana ruim. Quando um serviço tem poucos incidentes, devem revisar cada um em vez de calcular taxas (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Liderança e governança

Os líderes fazem as perguntas que moldam o que as equipes mostram. Perguntar "por que isto subiu?" a cada oscilação treina a organização a explicar ruído e a escondê-lo. Os líderes devem perguntar se um movimento está dentro da faixa normal, quantos itens estão por trás de uma cifra e o que mudou no processo. Os órgãos de governança podem exigir contagens nas taxas de destaque.

### Clientes e usuários

Os clientes vivenciam casos individuais, não médias. Lembram da requisição que levou cinco semanas, e uma média de dois dias não repara essa lembrança. Compromissos por percentil ("nove em cada dez requisições em até três dias úteis") combinam melhor com o modelo mental do cliente do que tempos médios. Os resultados de pesquisa devem ser mostrados com as contagens de respostas, e os comentários abertos devem ser lidos junto com os números (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte tem uma central de serviços e uma equipe de operações que dá suporte à sua loja virtual. As cifras abaixo são ilustrativas.

A liderança vê uma manchete mensal: "o tempo médio de resolução de incidentes caiu de 9,1 horas para 7,4 horas". A responsável pelas operações é chamada a confirmar e a apresentar o plano para a próxima meta, 6 horas. Antes de concordar, ela pede ao analista que levante os itens subjacentes e os plote. Dos 240 incidentes do mês (ilustrativo), a mediana é de 2,5 horas, o 85º percentil é de 14 horas e 9 incidentes têm mais de 5 dias e continuam abertos. No mês anterior, a mediana era de 2,6 horas. A média caiu porque três incidentes muito longos do mês anterior, um deles com 11 dias, calharam de ser resolvidos mais cedo no período, e porque um lote de tickets de redefinição de senha foi recategorizado para um tipo de requisição de encerramento rápido.

A equipe plota a mediana semanal das últimas 26 semanas. A linha central fica perto de 2,6 horas, e todos os pontos dos últimos dois meses estão dentro dos limites. A queda da manchete não é um sinal. A recategorização na segunda semana mudou a definição no meio do gráfico; por isso a equipe a marca e reinicia os limites a partir desse ponto.

Decidem três mudanças. O relatório mensal mostrará a mediana, o 85º percentil e o item aberto mais antigo, com o número de incidentes por trás de cada um. A meta proposta de 6 horas de média é substituída por uma conversa sobre um objetivo em percentil, a ser definido depois de um trimestre de dados sob a nova definição. A equipe também listará os 9 incidentes antigos, cada um com um responsável e um próximo passo.

O risco de manipulação que eles pegam aparece na revisão seguinte. Um gerente propõe encerrar os 9 incidentes mais antigos como "não reproduzíveis mais" para que a cifra do item mais antigo pareça saudável. Como o registro pareia a idade do item aberto mais antigo com a taxa de reabertura e uma auditoria amostral dos encerramentos antigos, a equipe lê três dos encerramentos propostos, descobre que dois ainda estão vivos e os mantém abertos. A cifra do item mais antigo continua incômoda por mais um mês. Esse é o comportamento pretendido.

## Ágil, IA, automação e análise

### Ágil

A entrega frequente produz muitas amostras pequenas, o que é bom para ver mudanças, mas cada amostra é pequena. Uma prática útil é mostrar gráficos de controle em uma janela móvel e discutir apenas sinais, não cada oscilação, nas revisões regulares. O cuidado é evitar reagir ao ruído: uma equipe que muda de rumo depois de cada queda nunca verá o efeito de nenhuma mudança.

### IA

O trabalho assistido por IA muitas vezes desloca a distribuição inteira, como primeiras respostas mais rápidas com qualidade mais variável. Compare antes e depois com percentis e o item mais antigo e pareie a velocidade com uma medida de qualidade. O cuidado é que uma mudança de modelo pode alterar os dados no meio de uma tendência; por isso marque no gráfico as mudanças de modelo e de prompt.

### Automação

Automatize o cálculo e a exibição de medianas, percentis altos, contagens e intervalos, para que a forma correta seja o padrão e ninguém recalcule à mão. A automação também precisa ter seus tamanhos de amostra e taxas de falha relatados. O cuidado é que alertas automáticos sobre limiares geram alarmes falsos quando os dados são assimétricos; por isso baseie os alertas em limites de controle, e não em números fixos.

### Análise

Diga sempre quantos itens estão por trás de uma taxa e mostre um intervalo quando a contagem for pequena. Use previsões como faixas, não como datas únicas. O cuidado é que a significância estatística não significa importância prática, e uma amostra pequena pode esconder um problema real; por isso combine os números com a leitura de itens reais.

## Olhar setorial

**Startup.** Os volumes são pequenos; por isso a maioria das taxas é feita de poucos itens e os intervalos são largos. Leia cada incidente em vez de calcular estatísticas, mantenha um gráfico semanal simples de uma ou duas medidas e evite declarar tendências a partir de três pontos. Quando o volume crescer, passe cedo a medianas e percentis para que os hábitos já estejam instalados.

**Pequena empresa.** Quem cuida de TI também é dono dos dados, e a amostra costuma ser pequena. Relate contagens, e não porcentagens, para eventos raros e compare com o seu próprio histórico mais longo. Confira o que de fato mede o relógio de "tempo de resposta" de um fornecedor.

**Grande empresa.** O volume torna as distribuições significativas e também incentiva consolidações que misturam serviços dessemelhantes. Compare o que é comparável, publique as definições e o percentil usado e mantenha uma biblioteca compartilhada de regras de gráficos e cálculos para que as equipes não calculem a mesma medida de três maneiras.

**Governo e setor público.** Contratos e relatórios legais muitas vezes fixam uma média ou uma porcentagem-limite, e essas definições não são negociáveis. Relate a cifra exigida exatamente como definida e mostre ao lado a mediana, o percentil e as contagens para que os órgãos de controle vejam o quadro inteiro. O escrutínio público torna mais valiosa a incerteza honesta, porque um número excessivamente confiante é caro de retratar (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Leva algumas horas combinar regras de resumo, construir um histograma e um gráfico de controle a partir de uma exportação e acrescentar contagens a um modelo de relatório, mais alguns minutos a cada ciclo para mantê-los atuais. A maioria das ferramentas já calcula percentis. O custo maior é uma conversa com pessoas acostumadas a um único número reconfortante.

O retorno é decidir melhor e desperdiçar menos reação. As equipes deixam de se reorganizar depois de uma semana ruim, deixam de creditar iniciativas por melhorias ao acaso e deixam de prometer médias que metade de seus clientes não vivencia. Não tome emprestada uma cifra: conte quantas vezes as decisões do ano passado foram revertidas e quantas "melhorias" sumiram no período seguinte, e use essas contagens para dimensionar o caso.

## Antipadrões e armadilhas

- **Fazer a média de durações assimétricas.** A média é arrastada pela cauda e esconde o que os usuários sentem. Relate a mediana e um percentil alto nomeado e mostre o item aberto mais antigo.
- **Porcentagens de amostras minúsculas.** "100%" a partir de três itens é uma anedota. Mostre as contagens e aplique uma regra de contagem mínima.
- **Reagir a cada oscilação.** Perseguir cada semana vermelha desperdiça esforço e ensina as equipes a explicar ruído. Use limites de controle e regras de sinal escritas.
- **Prova por antes-e-depois.** Dois pontos não separam uma intervenção do acaso nem da regressão à média. Use uma linha de base mais longa e uma comparação.
- **Mudar as traves no gráfico.** Alterar limites, regras ou definições depois do fato faz qualquer gráfico concordar com a história. Fixe as regras, registre as mudanças e anote-as.
- **Excluir valores atípicos por padrão.** Os casos mais longos costumam ser os que os clientes lembram. Exclua apenas com uma razão escrita e liste o que foi excluído.
- **Falsa precisão.** Relatar 83,3% a partir de 12 itens sugere um conhecimento que os dados não têm. Arredonde com honestidade e mostre uma faixa.
- **Agrupar trabalho dessemelhante.** Um tempo misturado de redefinições de senha e falhas de datacenter não descreve nenhum dos dois. Segmente primeiro.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Resumos de dados de tempo | Apenas médias | Algumas equipes mostram medianas | Mediana mais um percentil nomeado e o item aberto mais antigo são o padrão | Distribuições revistas com uma barreira de proteção e acompanhadas ao longo do tempo | Compromissos por percentil acordados com clientes e fornecedores e revistos conforme os dados mudam |
| Tamanho da amostra e incerteza | Taxas citadas sem contagens | Contagens mostradas em alguns relatórios | Contagens e uma regra de contagem mínima em toda taxa | Intervalos nas taxas de destaque, método no registro | Incerteza compartilhada abertamente com os clientes e usada no planejamento entre equipes |
| Variação e causalidade | Toda mudança é explicada | Alguns gráficos com limites | Gráficos de controle com regras escritas para as medidas principais | Sinais disparam investigação planejada; iniciativas conferidas contra a linha de base | Bibliotecas de gráficos compartilhadas entre serviços; linhas de base comparadas entre equipes sem classificação |

## Lista de verificação

- [ ] Toda medida de tempo relata uma mediana e um percentil alto nomeado, em vez de apenas uma média.
- [ ] A idade do item aberto mais antigo e a contagem de itens além do percentil alto são relatadas.
- [ ] Toda taxa relatada mostra seu numerador e denominador.
- [ ] Uma regra de contagem mínima está escrita e é aplicada a todas as taxas.
- [ ] As taxas de destaque e as previsões mostram uma faixa, com o método nomeado no registro.
- [ ] Existem gráficos de controle para as três medidas sobre as quais a equipe age, com regras de sinal escritas.
- [ ] As mudanças de definição são anotadas nos gráficos e registradas no registro.
- [ ] Os itens excluídos são listados com razões.
- [ ] As alegações de melhoria são conferidas contra uma linha de base mais longa antes de serem repetidas.
- [ ] O vetor de manipulação e a barreira de proteção de cada métrica estão no registro (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Prompts de IA

**Confira se um resumo combina com os dados.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Expresse uma taxa com sua incerteza.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Julgue se uma mudança é sinal ou ruído.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico e a barreira de proteção pareada de uma métrica de tempo ou de taxa antes de publicá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma medida estatística acrescentada a um tópico traz sua definição, seus relógios, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- As durações de serviço são assimétricas; por isso relate a mediana e um percentil alto nomeado e acrescente a idade do item aberto mais antigo.
- Toda taxa carrega a sua contagem, e amostras pequenas são mostradas como itens ou com uma faixa, não como uma porcentagem confiante.
- Conheça a faixa normal de uma medida com um gráfico de controle antes de reagir a uma única semana.
- Desconfie de melhorias medidas por dois pontos: a regressão à média e as mudanças de definição explicam muitas delas.
- A incerteza honesta é uma força em um relatório e uma barreira de proteção contra a manipulação ao estilo de Goodhart (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).
- Mantenha a técnica proporcional: poucos métodos consistentes, explicados em palavras simples, servem melhor a uma equipe do que muitos sem explicação.

## Referências e leituras complementares

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Assimetria](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Mediana](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Distribuição log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Intervalo de confiança](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Gráfico de controle](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Controle estatístico de processo](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regressão à média](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
