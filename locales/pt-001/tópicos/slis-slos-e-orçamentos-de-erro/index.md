# SLIs, SLOs e orçamentos de erro

**Um objetivo de nível de serviço transforma "confiável o bastante" em um número que usuários, equipes de produto e equipes de operações podem ver, e o orçamento de erro que ele deixa transforma esse número em uma decisão compartilhada e gastável sobre risco, e não numa discussão sobre culpa.**

## Visão geral e motivação

Todo serviço já tem um nível de confiabilidade, quer alguém o tenha medido, quer não. Se ninguém o declara, os usuários presumem um nível, a equipe de produto presume outro e a equipe de operações defende um terceiro. A diferença é descoberta durante uma interrupção. Este tópico cobre as três ideias ligadas que a [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) usa para fechar essa lacuna: o indicador de nível de serviço, o objetivo de nível de serviço e o orçamento de erro.

Um [indicador de nível de serviço (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) é uma medição de um aspecto do serviço como os usuários o experimentam. Aspectos típicos são se uma requisição teve sucesso, quanto tempo levou, se os dados retornados estavam atualizados e se estavam corretos. Um bom SLI é expresso como uma razão: o número de eventos bons dividido pelo número de eventos válidos, em uma janela definida. Um [objetivo de nível de serviço (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) é a meta para essa razão em um período, por exemplo "99,9% das requisições de checkout válidas têm sucesso em 28 dias móveis". O **orçamento de erro** é tudo o que o objetivo permite que dê errado: 100% menos o SLO. Em 99,9%, o orçamento é de 0,1% dos eventos válidos.

O orçamento de erro muda a conversa. Se o serviço gastou pouco do seu orçamento, a equipe tem espaço para liberar mais depressa, tentar mudanças arriscadas e fazer experimentos. Se o orçamento está quase no fim, a mesma equipe desacelera o trabalho de funcionalidades e gasta esforço em confiabilidade até que o orçamento se recupere. A decisão vem de um número combinado de antemão; por isso não depende de quem é mais sênior ou mais persuasivo na reunião.

A **taxa de consumo (burn rate)** é a velocidade com que o orçamento está sendo gasto, em relação à taxa que gastaria exatamente tudo até o fim da janela. Uma taxa de consumo de 1 significa que o orçamento acabará exatamente no fim da janela. Uma taxa de consumo de 10 significa que acabará em um décimo da janela. A taxa de consumo é a ponte do SLO para o alerta, porque diz quão urgente é um problema em termos do que ele custa ao objetivo.

As visões ágil e ITIL se encontram aqui e usam vocabulário diferente para ideias relacionadas. No ITIL 4, a gestão de nível de serviço é a prática que define, mede e relata os níveis de serviço, e o [acordo de nível de serviço (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) é o acordo documentado entre um provedor e um cliente (veja o tópico 5.1, Métricas de SLA, OLA e XLA). Um SLO é uma meta interna, geralmente mais estrita que o SLA, de propriedade da equipe que opera o serviço. Um SLA traz consequências, como créditos ou penalidades. Um SLO traz uma regra de decisão. As equipes ágeis que são donas de seus serviços ("você constrói, você opera") usam os SLOs para tornar o custo da confiabilidade visível no mesmo backlog das funcionalidades. As equipes que seguem a prática do ITIL podem tratar os SLIs como a forma mensurável do que os clientes dizem precisar e o SLO como a meta de trabalho que mantém o SLA seguro.

A [disponibilidade](https://en.wikipedia.org/wiki/Availability) é o SLI mais familiar e é coberta em detalhe em outro lugar (veja o tópico 5.3, Métricas de disponibilidade). Latência, correção, atualidade e vazão também são candidatas. A habilidade está em escolher indicadores a partir do que importa aos usuários, e não do que é fácil de coletar. O uso de CPU de um servidor é fácil de coletar e diz pouco sobre se um cliente conseguiu pagar. A proporção das requisições de pagamento que terminam em até dois segundos diz muito. Para a latência, relate [percentis](https://en.wikipedia.org/wiki/Percentile), e não médias, porque uma média esconde a cauda lenta que os usuários notam (veja o tópico 1.6, Letramento estatístico para métricas de serviço, e o tópico 5.4, Métricas de capacidade e desempenho).

## Princípios-chave

- **Parta do usuário, não do servidor.** Escolha indicadores que descrevam uma experiência que uma pessoa reconheceria, como "meu pagamento passou", e trabalhe de trás para a frente até o que medir.
- **Uma meta abaixo de 100% é uma decisão, não uma confissão.** A confiabilidade perfeita é inalcançável e inviável de pagar, e os usuários geralmente não percebem a diferença a partir de certo ponto. O orçamento torna explícita essa compensação.
- **Defina o objetivo com as pessoas que dependem dele.** O SLO é um acordo negociado entre produto, operações e clientes, e não um número escolhido por uma equipe sozinha.
- **Combine as consequências antes de o orçamento acabar.** Uma política de orçamento de erro escrita numa semana calma é seguida numa semana estressante. Uma política inventada durante uma interrupção é motivo de discussão.
- **Alerte sobre o consumo, não sobre cada oscilação.** Acione uma pessoa apenas quando o orçamento estiver sendo consumido depressa o bastante para ameaçar o objetivo e encaminhe o consumo mais lento para tickets.
- **Os SLOs descrevem serviços, nunca pessoas.** O orçamento pertence a um serviço e à sua equipe. Nunca é uma nota para um engenheiro.

## Definições de métricas

As métricas abaixo descrevem o sistema de SLO de um serviço. As quatro primeiras são o núcleo da prática, e as duas últimas descrevem quão saudável é a própria prática. Todo relógio e fronteira é declarado na coluna de fórmula. "Eventos válidos" são os eventos que contam para o SLI depois das exclusões combinadas no documento do SLO, como as requisições dos testes de carga da própria equipe, que são excluídas.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cumprimento do SLI | A proporção dos eventos válidos que foram bons, para um indicador de um serviço | eventos bons / eventos válidos, para a janela do início ao fim do período de relato; eventos excluídos pelo documento do SLO (testes de carga, manutenção planejada anunciada com antecedência, se o SLO assim disser) são removidos do numerador e do denominador | porcentagem | Telemetria do balanceador de carga, da aplicação ou de sondas sintéticas; a plataforma de monitoramento ou de observabilidade | Gestão de nível de serviço; monitoramento e gestão de eventos | Definição de pronto para operabilidade; revisão da saúde do serviço com as partes interessadas | Contínuo, relatado diariamente e por janela |
| Conformidade com o SLO | Se o SLI cumpriu o objetivo na janela do SLO e em quantas janelas recentes | janelas em que o cumprimento do SLI esteve no objetivo ou acima / janelas avaliadas, nos últimos 12 meses; uma janela ainda aberta é excluída | porcentagem das janelas | Histórico de cumprimento do SLI | Gestão de nível de serviço; melhoria contínua | Meta da equipe ou acordo de trabalho sobre confiabilidade | Mensal, com tendência trimestral |
| Orçamento de erro restante | A parte do orçamento ainda não gasta na janela atual | 1 - (eventos ruins até agora / eventos ruins permitidos para a janela inteira), em que eventos ruins permitidos = (1 - SLO) x eventos válidos esperados para a janela inteira; o relógio começa no início da janela e para no fim da janela | porcentagem do orçamento | Cumprimento do SLI e a previsão de volume | Gestão de nível de serviço; gestão de riscos | Verificação de prontidão para o release; insumo do trabalho planejado | Diária, revista semanalmente |
| Taxa de consumo (burn rate) | A velocidade com que o orçamento está sendo gasto em relação à taxa de gasto uniforme | (eventos ruins / eventos válidos em um período retrospectivo) / (1 - SLO); o período retrospectivo é declarado, por exemplo 1 hora ou 6 horas | razão (1 significa exatamente dentro do orçamento) | Telemetria do SLI em resolução de tempo fina | Monitoramento e gestão de eventos; gestão de incidentes | Regras de alerta de plantão; gatilho de swarming | Contínua, avaliada em regras de alerta |
| Aderência à política de orçamento | Com que frequência a consequência combinada foi aplicada quando um gatilho da política de orçamento de erro foi atingido | gatilhos no período em que a ação da política foi tomada dentro do prazo combinado / gatilhos atingidos no período; gatilhos formalmente dispensados com um motivo registrado são contados à parte, e não removidos | porcentagem | Documento da política, registro de decisões e histórico do backlog | Gestão de nível de serviço; habilitação de mudanças | Acordo de trabalho; seguimento da retrospectiva | Trimestral |
| Cobertura de SLOs | A proporção das jornadas críticas de usuário, ou dos serviços no escopo, que têm um SLO atual e um SLI funcionando | serviços ou jornadas no escopo com pelo menos um SLO cujos dados de SLI chegaram nos últimos 7 dias / serviços ou jornadas no escopo; "no escopo" é listado no catálogo de serviços (service catalogue na grafia do ITIL) | porcentagem | Catálogo de serviços, registro de SLOs e configuração de monitoramento | Gestão do catálogo de serviços; gestão de nível de serviço | Lista de propriedade de serviços da equipe | Trimestral |

O período retrospectivo da taxa de consumo e a janela do SLO são escolhas. Uma janela móvel de 28 dias cobre semanas inteiras. Declare a escolha no documento do SLO e mantenha-a estável, ou a tendência enganará.

## Recomendações

### Escolha indicadores a partir do que importa aos usuários

**1. Comece pelas jornadas críticas de usuário.** Liste as três a seis coisas que um usuário precisa conseguir fazer para o serviço valer a pena, como entrar, buscar, pagar e baixar um extrato. Escreva cada uma como uma frase do lado do usuário. Depois escolha o SLI que mostra se aquela frase foi verdadeira. Isso mantém os SLOs poucos e evita um catálogo de medidores técnicos que ninguém lê.

**2. Expresse cada SLI como eventos bons sobre eventos válidos.** Uma razão é fácil de explicar, fácil de agregar e fácil de transformar em orçamento. Defina "bom" com um limiar que os usuários aceitariam e defina "válido" de modo que o tráfego que você não pode razoavelmente atender, como requisições bloqueadas por abuso, seja excluído de forma documentada. Escreva as duas definições no documento do SLO, porque o denominador é onde se escondem a maioria das discordâncias.

**3. Meça o mais perto do usuário que for prático.** Uma taxa de sucesso do lado do servidor pode ser perfeita enquanto um problema de rede ou de cliente torna o serviço inutilizável. Meça no balanceador de carga ou na borda e acrescente uma sonda sintética ou uma medição do lado do cliente para as jornadas que mais importam. Cada ponto de medição tem um custo e um ponto cego; por isso registre qual cada SLI usa (veja o tópico 1.5, Fontes de dados e instrumentação).

**4. Use percentis para a latência, com um limiar.** "95% das requisições de busca terminam em menos de 800 milissegundos" é um SLI. "Latência média" não é, porque algumas requisições rápidas podem compensar muitas lentas. Onde ajudar, use dois limiares, como uma mediana e um 99º percentil, já que a cauda lenta molda como o serviço é sentido (veja o tópico 5.4, Métricas de capacidade e desempenho).

### Defina objetivos que as pessoas possam defender

**5. Defina o primeiro SLO a partir do desempenho atual e da necessidade do usuário e depois aperte.** Meça o SLI por algumas semanas, pergunte aos usuários e à equipe de suporte que nível notam e defina um objetivo que o serviço consiga cumprir hoje, com alguma folga. Um objetivo definido muito acima do desempenho atual é uma violação permanente, e as pessoas param de olhar para ele. Um objetivo definido muito abaixo do que os usuários recebem deixa a qualidade decair sem ser vista. Revisite-o depois de um trimestre.

**6. Mantenha o SLO mais estrito que o SLA e mantenha-os separados.** Se um acordo com o cliente promete 99,5%, o objetivo da equipe pode ser 99,9%, de modo que o orçamento se esgote antes de a linha contratual ser cruzada. Não faça do SLO e do SLA o mesmo número e não relate um como o outro. O acordo é um documento comercial e jurídico, e o objetivo é uma regra de decisão de engenharia (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

**7. Considere as dependências.** Um serviço não pode ser mais confiável do que aquilo de que depende, a menos que se degrade com elegância. Liste as dependências-chave, incluindo fornecedores, e pergunte o que o desempenho real delas implica para o seu objetivo.

### Conduza o orçamento como uma ferramenta de decisão

**8. Escreva uma política de orçamento de erro antes de precisar dela.** A política diz o que acontece em níveis definidos de consumo. Uma versão simples tem três passos: operação normal enquanto resta orçamento, revisão extra das mudanças arriscadas e prioridade ao trabalho de confiabilidade quando uma parcela declarada foi gasta e uma pausa nos releases de funcionalidades não essenciais quando se esgota, até que o orçamento se recupere. Nomeie quem pode conceder uma exceção e como é registrada. Os líderes de produto e de operações devem assiná-la, para que a política se aplique igualmente aos dois lados.

**9. Gaste o orçamento de propósito.** Um orçamento que nunca é tocado sugere que o objetivo é estrito demais ou que a equipe é cautelosa demais. Use o orçamento sobrando para experimentos, cadência de release mais rápida, rollouts canário e [feature toggles](https://en.wikipedia.org/wiki/Feature_toggle) que permitem testar em produção com exposição limitada, e use [releases canário](https://en.wikipedia.org/wiki/Canary_release) para pegar problemas enquanto apenas uma pequena parcela dos usuários é afetada. Trate um orçamento consistentemente intocado como um convite a perguntar se o objetivo combina com o que os usuários precisam (veja o tópico 4.5, Métricas de releases e implantação).

**10. Alerte sobre várias taxas de consumo.** Um consumo rápido, como uma taxa alta o bastante para gastar uma grande parcela do orçamento em uma hora, aciona uma pessoa. Um consumo lento, como uma taxa modesta que ainda esgotaria o orçamento em dias, cria um ticket para o horário de trabalho. Usar duas ou mais janelas retrospectivas pega tanto as falhas súbitas quanto os vazamentos lentos e reduz os acionamentos por oscilações breves que custam pouco orçamento. O capítulo do Site Reliability Workbook sobre alertas em SLOs explica o padrão, e os limiares devem ser ajustados ao seu serviço, e não copiados (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).

**11. Ligue incidentes, problemas e aprendizado ao orçamento.** Depois de um incidente, registre quanto orçamento ele consumiu junto com sua duração e impacto. Use esse número para priorizar o registro de problema e as ações de acompanhamento (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 4.2, Métricas de análises pós-incidente e aprendizado). O custo em orçamento também dá às revisões de incidentes graves uma unidade comum para comparar falhas muito diferentes (veja o tópico 3.4, Métricas de incidentes graves).

### Mantenha a prática honesta e viva

**12. Reveja os SLOs contra a realidade a cada trimestre.** Compare o SLO com os contatos de suporte, as reclamações e os resultados de satisfação. Se os usuários estão insatisfeitos enquanto o SLO está verde, o SLI está errado ou a meta é frouxa demais. Se o SLO está vermelho e ninguém reclama, a meta pode ser estrita demais. Registre cada mudança e o motivo e mostre a mudança no gráfico de tendência (veja o tópico 6.2, Acordos de nível de experiência).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cumprimento do SLI | Estreitar os eventos "válidos" até as falhas saírem, como excluir requisições repetidas ou classes inteiras de erro; medir apenas o componente mais saudável; sondar apenas de um local favorável | Publicar a definição do SLI e as exclusões no documento do SLO com um registro de mudanças; comparar o SLI com os contatos de suporte e as reclamações dos usuários; revisão regular dos eventos excluídos e de seu volume |
| Conformidade com o SLO | Definir o objetivo baixo o bastante para sempre passar; mudar o comprimento da janela depois de um período ruim; redefinir uma violação como período de manutenção | Objetivo definido com a contribuição dos usuários e revisto em um calendário; janela fixada no documento; contagem de exclusões e de mudanças não planejadas na janela relatada ao lado da conformidade |
| Orçamento de erro restante | Reclassificar eventos ruins como excluídos; inflar o volume esperado para que a contagem permitida de eventos ruins pareça maior; zerar a janela cedo | Eventos ruins permitidos calculados a partir do volume real no fim da janela; volume de eventos excluídos mostrado ao lado do orçamento; datas da janela fixadas de antemão |
| Taxa de consumo (burn rate) | Ajustar os limiares de alerta para que o consumo nunca dispare; usar um período retrospectivo tão longo que os consumos rápidos se diluam | Teste de cobertura de alertas usando incidentes passados ("esta regra teria acionado?"); taxa de alertas acionáveis e contagem de detecções perdidas (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas) |
| Aderência à política de orçamento | Conceder exceções rotineiramente; escrever uma política com gatilhos nunca alcançáveis; contar um ticket simbólico de confiabilidade como a ação da política | Exceções contadas e revistas à parte; proporção de exceções no período; trabalho de confiabilidade concluído (veja o tópico 4.1, Métricas de gestão de problemas) |
| Cobertura de SLOs | Acrescentar um SLO trivial a cada serviço para elevar a porcentagem; contar uma jornada como coberta quando nenhum dado flui | Verificação da atualidade dos dados do SLI (dados chegaram nos últimos 7 dias); revisão de se o SLO cobre uma jornada crítica e não um endpoint secundário |

Uma leitura saudável mostra um SLI que acompanha o que os usuários relatam, um objetivo que às vezes é perdido e às vezes cumprido com folga e um orçamento que é gasto de propósito. A política é aplicada quando seu gatilho é atingido, as exceções são raras e registradas e toda mudança de definição é visível no gráfico. Um serviço que está sempre com 100% do orçamento restante, ou um que está sempre em violação, merece uma conversa sobre o objetivo, e não elogio ou culpa. Lembre-se de que qualquer cifra isolada é um convite a uma pergunta (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| SLIs de jornada de usuário | Combinam com o que os usuários sentem; poucos; fáceis de explicar a quem não é engenheiro | Exigem esforço para instrumentar de ponta a ponta; podem perder falhas internas que ainda não chegaram aos usuários |
| SLIs de componente ou de recurso (CPU, memória, profundidade de fila) | Baratos de coletar; úteis para diagnóstico e capacidade | Más aproximações da experiência do usuário; produzem muitos alertas que não importam |
| Janela móvel | Suave; sem penhasco no fim do mês; sempre atual | Mais difícil de explicar a executivos que um mês de calendário; um dia ruim permanece por toda a janela |
| Alerta por taxa de consumo | Aciona quando o objetivo está realmente em risco; menos alarmes falsos | Mais complexo de configurar e testar; os limiares precisam de ajuste por serviço |

Escolha poucos SLIs, defina-os com os usuários e deixe o orçamento decidir o ritmo da mudança. A rigidez certa é o objetivo mais frouxo que ainda mantém os usuários satisfeitos, já que cada nove extra custa mais que o anterior.

## Perguntas para discutir com sua equipe

**1. O que um usuário deste serviço precisa conseguir fazer, e como saberíamos se ele não conseguisse?**
Peça a cada pessoa que escreva as três coisas mais importantes que um usuário faz com o serviço, sem olhar nenhum painel. Comparem as listas e notem as diferenças entre produto, operações e suporte. Depois perguntem qual dessas jornadas tem hoje um SLI. O facilitador deve procurar jornadas importantes sem medição e medições que não descrevem nenhuma jornada.

**2. Se o nosso SLO fosse 99,9% e o cumpríssemos, os usuários estariam felizes, e como sabemos?**
Ponham o SLO atual ao lado do último trimestre de contatos de suporte, reclamações e resultados de satisfação. Perguntem se concordam. Se o SLO está verde e os usuários estão insatisfeitos, o SLI ou a meta precisam de trabalho. Se os usuários estão felizes e o SLO está vermelho, a meta pode ser mais estrita do que alguém precisa. Combinem uma ação para aproximar o objetivo e a experiência.

**3. O que realmente faríamos de diferente se o orçamento de erro acabasse?**
Leiam em voz alta a política de orçamento de erro atual ou redijam uma juntos se não existir nenhuma. Perguntem quem pararia o quê e quem tem autoridade para conceder uma exceção. O facilitador deve insistir em ações concretas, como pausar releases não essenciais e deslocar pessoas nomeadas para o trabalho de confiabilidade, e não em intenções gerais. Uma política em que ninguém acredita que será seguida é pior que nenhuma política.

**4. Quando foi a última vez que corremos um risco porque tínhamos orçamento sobrando?**
Discutam se a equipe usa o seu orçamento ou apenas o guarda. Olhem o último trimestre: houve um período em que o orçamento ficou quase intocado enquanto os releases eram lentos? Perguntem o que a equipe teria tentado se soubesse que era seguro. Essa pergunta traz à tona a cautela excessiva, e a resposta muitas vezes aponta para um release canário, uma toggle ou um pipeline mais rápido que permitiria à equipe usar bem o seu orçamento.

**5. Quais dos nossos alertas teriam disparado a tempo no nosso último incidente ruim, e quais teriam disparado à toa?**
Peguem o último incidente significativo e reproduzam o histórico de alertas contra ele. Contem os acionamentos que chegaram, quanto tempo depois de o impacto começar e quantos chegaram por eventos que custaram quase nada de orçamento. Discutam se os alertas por taxa de consumo teriam ido melhor. O objetivo é uma lista curta de mudanças de alerta, cada uma com um responsável, e não uma discussão de culpa sobre quem estava de plantão.

**6. Quem é o dono de cada SLO, e quando mudamos um de propósito pela última vez?**
Listem os SLOs e escrevam o responsável ao lado de cada um, como uma equipe ou um papel. Perguntem quando cada um foi revisto pela última vez e o que mudou. Um SLO em que ninguém mexe há um ano é sinal de que já não informa decisões. Combinem uma data de revisão para cada um e quem tem o direito de aposentar um SLO que deixou de ser útil.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega ganham uma regra clara de quão depressa se mover. Quando resta orçamento, podem liberar com mais frequência e tentar mudanças mais ousadas. Quando está baixo, põem trabalho de confiabilidade no backlog sem uma longa negociação. Devem ajudar a escolher os indicadores porque sabem quais jornadas importam e devem instrumentar as novas funcionalidades pensando no SLI desde o começo (veja o tópico 2.8, Métricas DORA). O orçamento é um recurso da equipe com o qual planejar, nunca um número a esconder.

### Equipes de serviço e operações

As equipes de operações usam os SLOs para decidir o que merece um acionamento e o que pode esperar até a manhã. O alerta por taxa de consumo reduz o ruído e liga o trabalho de plantão ao que os usuários sentem (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão). Elas mantêm honestas as definições dos SLIs, mantêm a telemetria por trás delas e registram o custo em orçamento nos registros de incidentes e de problemas.

### Liderança e governança

Os líderes devem fazer três perguntas: qual é o objetivo, quanto orçamento resta e o que faremos se acabar? Assinam a política de orçamento de erro e apoiam a equipe quando a política manda desacelerar. Evitam transformar a conformidade com o SLO em métrica de bônus, o que convida a estreitar definições e a definir metas frouxas.

### Clientes e usuários

Os clientes se beneficiam quando o objetivo reflete o que precisam e quando conseguem ver como o serviço se sai contra ele. Devem ser consultados quando o objetivo é definido, porque sua tolerância à lentidão ou à indisponibilidade varia por tarefa e por hora do dia. As medidas de experiência, como satisfação e esforço, conferem se o SLO capta o que eles sentem (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte tem uma equipe de checkout, uma equipe de plataforma e uma central de serviços. O serviço de checkout é crítico para o negócio. Todos os números deste exemplo são ilustrativos.

A equipe define um SLI para a jornada "pagar um pedido": a proporção das requisições de pagamento válidas que retornam sucesso em até 2 segundos, medida no balanceador de carga. As requisições válidas excluem os testes de carga da própria equipe e as requisições que o serviço antifraude rejeita por projeto. O SLO é de 99,9% em 28 dias móveis. A janela traz 12.000.000 de requisições válidas esperadas; assim o orçamento é de 12.000 requisições ruins (0,1%). A política de orçamento de erro, assinada pelo chefe de produto e pelo chefe de plataforma, tem três níveis: com 50% do orçamento gasto, as mudanças arriscadas precisam de um segundo revisor e de um rollout canário; com 75%, o trabalho de confiabilidade tem prioridade na próxima conversa de planejamento; com 100%, os releases de funcionalidades não essenciais pausam até o orçamento se recuperar.

No dia 10 da janela, a equipe vê 7.800 requisições ruins de cerca de 4.285.714 esperadas até agora, o que dá um cumprimento do SLI de cerca de 99,82%, 65% do orçamento gasto e uma janela com apenas 36% decorridos. A taxa de consumo no período é de cerca de 1,8; assim, nesse ritmo, o orçamento acaba por volta do dia 15. Uma implantação ruim respondeu por 5.000 das falhas. O registro do incidente mostra que a falha durou 22 minutos, a revisão do incidente grave identifica uma verificação ausente no pipeline e o custo em orçamento do incidente é registrado no registro de problema (veja o tópico 4.1, Métricas de gestão de problemas).

A equipe segue a política. A ação do segundo nível se aplica de imediato, de modo que as mudanças arriscadas precisam de um rollout canário, e a reunião de planejamento move a verificação do pipeline para o topo da fila de trabalho. O dono do produto aceita uma pausa em uma funcionalidade de promoção não urgente. No dia 28, o orçamento está 94% gasto, e a equipe termina a janela dentro do objetivo.

O risco de manipulação aparece na revisão. Outra equipe, que opera o serviço de busca do varejista, relatou 99,95% para o trimestre enquanto a central de serviços registrava uma alta de contatos "a busca não funciona". Investigando, a equipe de plataforma descobriu que a equipe de busca havia redefinido "válido" para excluir as requisições repetidas em até 5 segundos, o que removeu muitas falhas reais. A revisão restaurou a definição original, refez o trimestre e acrescentou duas barreiras de proteção: toda mudança de definição é registrada no documento do SLO com um motivo, e o cumprimento do SLI é comparado com os contatos de suporte todo mês. Ninguém mentiu, já que a mudança fora feita para reduzir o ruído; por isso a correção foi uma definição mais clara, e não uma repreensão.

## Ágil, IA, automação e análise

### Ágil

Um orçamento de erro transforma a confiabilidade em uma decisão compartilhada com as partes interessadas do produto e combina com a entrega contínua ao mostrar quanto risco a equipe pode gastar. Reveja os objetivos em uma cadência regular. O cuidado é que um SLO que ninguém combinou com os usuários é um palpite.

### IA

As funcionalidades de IA precisam de indicadores próprios, como correção e latência, e não apenas disponibilidade, e o objetivo deve dizer como uma resposta errada conta. Pareie a disponibilidade da IA com um indicador de qualidade medido por amostragem. O cuidado é que um serviço que responde depressa com uma resposta errada pode cumprir um SLO de disponibilidade enquanto falha com os usuários.

### Automação

Calcule indicadores e taxa de consumo automaticamente a partir da telemetria e alerte sobre a taxa de consumo, e não sobre cada oscilação. Meça o próprio alerta por alertas perdidos e falsos. O cuidado é que congelamentos automáticos de orçamento podem paralisar trabalho útil; por isso mantenha uma decisão humana na política.

### Análise

Escolha indicadores que os usuários sentem e mostre a janela e a contagem de eventos por trás de cada um. A decisão informada é quando desacelerar a mudança ou investir em confiabilidade. O cuidado é que uma janela curta dá um orçamento volátil; por isso declare a janela.

## Olhar setorial

**Startup.** Comece com um SLO para a jornada mais importante, medido na borda, com uma política simples que caiba numa página. Não construa uma plataforma para dezenas de SLOs. O orçamento ajuda uma equipe pequena a discutir menos se deve liberar numa sexta-feira.

**Pequena empresa.** Uma pequena empresa muitas vezes depende de ferramentas hospedadas e de fornecedores; por isso o SLI pode vir dos dados de status de um fornecedor ou de uma sonda externa simples. Leia por escrito os níveis de serviço do fornecedor e confira-os contra as suas próprias necessidades.

**Grande empresa.** Muitos serviços, equipes e fornecedores elevam a importância da consistência. Ofereça um modelo compartilhado para os documentos de SLO, um registro comum e um modo padrão de calcular o cumprimento e o orçamento, para que os líderes possam comparar e consolidar sem discutir definições. Mantenha o SLO de propriedade da equipe do serviço e o registro curado centralmente.

**Governo e setor público.** Os serviços muitas vezes precisam cumprir metas legais ou publicadas, e uma falha pode ser relatada publicamente. Mantenha o compromisso contratual ou legal separado do objetivo interno e garanta que o SLO interno seja mais apertado. Documente a definição do SLI, as exclusões e a linhagem dos dados para auditoria e planeje a acessibilidade e os usuários que não podem escolher outro provedor (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é ter menos discussões e melhores decisões sobre confiabilidade. Sem um objetivo, o trabalho de confiabilidade compete com as funcionalidades pela força de quem argumenta mais alto. Com um objetivo e um orçamento, a compensação é visível e combinada de antemão, e os usuários recebem um serviço tão confiável quanto precisam, sem que a equipe pague por confiabilidade além desse ponto.

O custo tem quatro partes. A primeira é o projeto: oficinas para escolher jornadas, indicadores e objetivos e para escrever a política. A segunda é a instrumentação: telemetria no lugar certo, sondas e o pipeline que transforma eventos em cumprimento e orçamento (veja o tópico 1.5, Fontes de dados e instrumentação). A terceira é a operação: regras de alerta, um painel, uma revisão trimestral e o tempo para manter as definições atuais. A quarta é o custo de oportunidade quando a política pausa o trabalho de funcionalidades, que é o custo de honrar o acordo e a razão para combiná-lo antes que a pressão chegue.

O retorno aparece em padrões que a equipe pode acompanhar por si: menos acionamentos que não exigiram ação, debates mais curtos sobre liberar ou não, trabalho de confiabilidade agendado antes de o orçamento acabar em vez de depois de um incidente grave e menos surpresas para os clientes. Descreva o benefício comparando as cifras da própria equipe antes e depois, como acionamentos por rodízio e a proporção do orçamento consumida pelo maior incidente.

## Antipadrões e armadilhas

- **SLOs demais.** Dezenas de objetivos diluem a atenção, e ninguém sabe dizer qual importa. Comece pelas jornadas críticas de usuário e aposente o resto.
- **SLO igual ao SLA.** Relatar um número como os dois remove a margem de segurança e mistura uma regra de engenharia com uma promessa comercial. Mantenha o objetivo mais estrito que o acordo.
- **Uma política que nunca é aplicada.** Se o orçamento acaba e nada muda, a prática perde credibilidade. Faça os líderes assinarem a política e registre toda exceção com seu motivo.
- **Usar o orçamento como placar de pessoas.** Classificar engenheiros ou pessoas de plantão pelo orçamento gasto faz as pessoas esconderem incidentes e estreitarem definições. Atribua o orçamento ao serviço e discuta as causas no nível do sistema (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).
- **Alertar sobre toda queda.** Acionar por sintomas brutos cria fadiga de alertas e ensina as pessoas a ignorar acionamentos. Acione pela taxa de consumo e mande os consumos lentos para tickets.
- **Definir e esquecer.** Um SLO que ninguém revê se afasta do que os usuários precisam. Programe uma revisão trimestral e registre o que mudou e por quê.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Indicadores e objetivos | Confiabilidade descrita em palavras; tempo no ar de servidores relatado | Algumas equipes definem SLIs; as metas variam e raramente são revistas | As jornadas críticas de usuário têm SLIs e SLOs documentados em um modelo compartilhado | SLOs acompanhados ao longo do tempo, conferidos contra o feedback dos usuários e apertados ou afrouxados com evidências | SLOs combinados com clientes e fornecedores e alinhados aos serviços dependentes e aos contratos |
| Orçamento de erro e política | Sem orçamento; confiabilidade versus funcionalidades decididas por discussão | Orçamento calculado para alguns serviços; sem consequências combinadas | Uma política escrita, assinada por produto e operações, com gatilhos definidos | Aderência à política medida, exceções revistas, orçamento informa o planejamento de releases | Decisões de orçamento coordenadas entre equipes que compartilham dependências; política revista conforme as condições mudam |
| Alerta e resposta | Alertas por limiar sobre recursos brutos; muitos acionamentos | Alguns alertas por taxa de consumo; limiares copiados de exemplos | Alertas de taxa de consumo em várias janelas para os SLOs-chave, com tickets para o consumo lento | Qualidade dos alertas medida e ajustada com incidentes passados | Alertas alinhados entre cadeias de serviços e melhoria orientada por revisões conjuntas |

## Lista de verificação

- [ ] As jornadas críticas de usuário do serviço estão listadas, cada uma escrita do lado do usuário.
- [ ] Cada SLI é definido como eventos bons sobre eventos válidos, com as exclusões escritas.
- [ ] Os SLIs de latência usam percentis e um limiar declarado, não médias.
- [ ] Cada SLO declara sua meta, sua janela e onde o SLI é medido.
- [ ] O SLO é mais estrito que qualquer SLA, e os dois são relatados separadamente.
- [ ] Existe uma política de orçamento de erro, assinada pelos líderes de produto e de operações, que nomeia quem pode conceder exceções.
- [ ] Os alertas de taxa de consumo usam pelo menos dois períodos retrospectivos, e os consumos lentos criam tickets e não acionamentos.
- [ ] Cada registro de incidente mostra o orçamento que consumiu.
- [ ] O cumprimento do SLI é comparado com os contatos de suporte e os resultados de satisfação todo mês.
- [ ] Todo SLO tem um responsável (uma equipe ou um papel) e uma data de revisão, e as mudanças são registradas com motivos.
- [ ] Nenhum resultado de SLO é usado para classificar ou recompensar indivíduos.

## Prompts de IA

**Redija SLIs candidatos a partir de jornadas de usuário.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Redija uma política de orçamento de erro.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Revise um SLO quanto a risco de manipulação.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados, como disponibilidade, qualidade dos alertas e incidentes graves, e a barreira de proteção que deve ficar ao lado de cada medida de SLO.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm toda métrica na tabela de manipulação e toda referência cruzada com título.

## Ideias-chave

- Escolha poucos SLIs a partir do que os usuários fazem e expresse cada um como eventos bons sobre eventos válidos.
- Um SLO abaixo de 100% é uma decisão sobre risco, e o orçamento de erro é a folga que essa decisão deixa para a mudança.
- Escreva a política de orçamento de erro com antecedência, assine-a no nível da liderança e registre toda exceção.
- Alerte sobre a taxa de consumo com mais de uma janela retrospectiva, para que os acionamentos reflitam o risco real ao objetivo.
- Proteja as definições: registre toda mudança e compare os resultados do SLI com o que os usuários relatam.
- Atribua o orçamento a serviços e equipes, nunca a indivíduos, e reveja cada SLO pelo menos trimestralmente.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Indicador de nível de serviço](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Objetivo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Disponibilidade](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Release canário](https://en.wikipedia.org/wiki/Canary_release).
