# Falhas de mudança e retrabalho

**Defina "uma mudança com falha" uma única vez, por escrito, ligue cada falha à mudança que a causou e leia a falha e o retrabalho junto com a velocidade, para que um número menor signifique mudança mais segura e nunca apenas menos relatos.**

## Visão geral e motivação

Toda mudança em um serviço em produção carrega alguma chance de piorar as coisas. As perguntas práticas são com que frequência isso acontece, quanto trabalho não planejado cria e com que rapidez a equipe se recupera. Este tópico cobre as medidas que respondem a elas: a proporção das mudanças que falham, a proporção que precisa de um caminho emergencial, as taxas de rollback e de hotfix e o retrabalho que se segue a uma mudança ruim. Cobre também a parte menos glamorosa do assunto, que é combinar o que conta como falha.

Alguns termos primeiro. No [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, a prática chamada habilitação de mudanças cobre a adição, a modificação ou a remoção de qualquer coisa que possa afetar um serviço. Uma **mudança** é, portanto, mais ampla que uma implantação de código: inclui uma edição de configuração, uma renovação de certificado, uma regra de firewall ou uma migração de banco de dados. Uma **mudança padrão** é pré-autorizada e de baixo risco, uma **mudança normal** passa por avaliação e uma **mudança emergencial** é feita com urgência, em geral para restabelecer um serviço ou fechar uma vulnerabilidade séria. Uma **implantação** é o ato de colocar uma versão do software em um ambiente, enquanto um **release** torna uma capacidade disponível aos usuários. As equipes que usam uma [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) podem implantar código sem liberá-lo (veja o tópico 4.5, Métricas de releases e implantação).

Uma **falha de mudança** é uma mudança que leva a um serviço degradado ou precisa de correção. A correção toma várias formas. Um [rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) devolve o sistema ao estado anterior. Um [hotfix](https://en.wikipedia.org/wiki/Hotfix) é um patch urgente aplicado fora do ritmo normal de releases. Uma correção por roll-forward lança uma nova mudança por cima da quebrada. O [retrabalho](https://en.wikipedia.org/wiki/Rework) é o esforço não planejado gasto para refazer ou reparar algo que deveria estar pronto. Em um cenário de [entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery), em que mudanças pequenas fluem com frequência para a produção, essas medidas são a principal evidência sobre se a velocidade está custando estabilidade.

As duas tradições olham o mesmo evento de modo diferente. A visão do ITIL se organiza em torno do registro de mudança: a mudança foi autorizada, deu certo e o resultado foi registrado? Uma mudança que dá certo no papel ainda pode causar um incidente uma hora depois. A visão ágil se organiza em torno do item de trabalho e da implantação: a definição de pronto da equipe se sustentou e a mudança causou trabalho não planejado logo depois? Nenhuma das visões é completa sozinha. A pesquisa por trás do programa DORA trata a taxa de falha de mudanças e a taxa de retrabalho de implantação como as duas medidas de "instabilidade" ao lado das medidas de vazão (veja o tópico 2.8, Métricas DORA, que as define no nível do programa). Este tópico aprofunda a mecânica: como definir a falha, como ligar incidentes a mudanças, como o trabalho emergencial é contado e como os números são manipulados.

Um aviso vale desde o início. Estas medidas descrevem uma equipe, um serviço ou um pipeline. Nunca descrevem uma pessoa. Uma taxa de falha de mudanças atribuída a um engenheiro individual ensina as pessoas a evitar o trabalho arriscado e valioso, a dividir mudanças até as contagens parecerem boas e a parar de relatar problemas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) pesa muito aqui, porque "menos falhas" é fácil de conseguir registrando menos falhas.

O tempo dos incidentes pertence ao tópico 3.3, Tempo de resposta e de resolução de incidentes, os piores incidentes ao tópico 3.4, Métricas de incidentes graves, o fluxo de aprovação e a parcela de mudanças padrão ao tópico 4.3, Métricas de habilitação de mudanças, as causas raiz ao tópico 4.1, Métricas de gestão de problemas, e a revisão escrita ao tópico 4.2, Métricas de análises pós-incidente e aprendizado.

## Princípios-chave

- **A falha precisa de uma definição escrita.** As equipes que decidem caso a caso produzem números que não podem ser acompanhados ao longo do tempo nem comparados, e a discussão sobre a definição substitui a discussão sobre o trabalho.
- **Uma falha deve ser rastreável até sua mudança.** Sem um vínculo registrado entre um incidente, um rollback ou um hotfix e a mudança que o causou, a taxa de falha é um palpite.
- **Conte todos os caminhos de correção.** Rollback, hotfix, roll-forward e contorno manual são quatro rotas para o mesmo evento. Uma métrica que conta uma delas premia as equipes por escolherem outra.
- **Leia a falha ao lado da velocidade e da recuperação.** Uma taxa de falha de mudanças isolada pode ser melhorada mudando menos vezes, o que raramente é o objetivo. Pareie-a com o lead time, a frequência de implantação e o tempo de recuperação.
- **Amostras pequenas precisam de contagens, não só de porcentagens.** Uma equipe com oito mudanças em um mês e uma falha tem uma taxa de falha de 12,5% que diz quase nada; por isso mostre as contagens e use uma janela mais longa (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- **Emergência é um sinal, não um pecado.** Uma parcela estável e explicada de mudanças emergenciais é normal. Uma parcela crescente costuma apontar para problemas de qualidade a montante, de planejamento ou de detecção.

## Definições de métricas

As medidas de falha e de retrabalho dependem de cruzar o registro de mudança, o registro de implantações e a ferramenta de incidentes. Cada definição abaixo declara o que é contado, o que é excluído e onde o relógio começa e para. As equipes devem copiar as definições para o seu registro de métricas e ajustá-las com um motivo declarado.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de falha de mudanças | Proporção das mudanças em produção que causam degradação do serviço ou precisam de correção | mudanças que exigiram um rollback, um hotfix, uma correção por roll-forward ou um incidente vinculado dentro da janela de falha / todas as mudanças em produção concluídas no período; a janela começa na conclusão da mudança e para após um número fixo de dias (por exemplo, 7), escrito no registro de métricas; mudanças ainda dentro da janela são relatadas à parte e excluídas da taxa até a janela fechar | porcentagem | Registros de mudanças ou registro de implantações cruzados com a ferramenta de incidentes e a lista de hotfixes | Habilitação de mudanças; gestão de incidentes | Definição de pronto; defeitos escapados | Mensal, em janela móvel de 90 dias |
| Parcela de mudanças emergenciais | Proporção das mudanças feitas pelo caminho emergencial | mudanças registradas como emergenciais / todas as mudanças concluídas no período; emergencial significa que a avaliação normal foi contornada ou encurtada por urgência, e as mudanças padrão pré-autorizadas são excluídas das duas contagens | porcentagem | Campo de tipo do registro de mudança | Habilitação de mudanças | Trabalho não planejado e classe de serviço expedite | Mensal |
| Taxa de rollback | Proporção das mudanças que foram revertidas para uma versão anterior | mudanças revertidas depois de chegarem à produção / todas as mudanças em produção no período; um rollback feito antes de a mudança chegar a qualquer usuário (por exemplo, um canário interrompido em seu primeiro passo) é contado à parte | porcentagem | Registro de implantações e ferramenta de release | Gestão de releases; gestão de implantação | Práticas de pipeline e de release | Mensal |
| Taxa de hotfix | Proporção das mudanças que são patches urgentes aplicados fora do fluxo normal de releases | mudanças etiquetadas ou ramificadas como hotfix / todas as mudanças em produção no período; o denominador inclui os próprios hotfixes | porcentagem | Branches ou tags do controle de versão e o registro de implantações | Habilitação de mudanças; gestão de incidentes | Trabalho não planejado; expedite | Mensal |
| Taxa de retrabalho de implantação | Proporção das implantações que foram correções não planejadas de um problema de uma implantação anterior | implantações em produção que corrigem um defeito ou falha de uma implantação anterior recente, dentro da mesma janela de falha / todas as implantações em produção no período; o trabalho de acompanhamento planejado do roteiro é excluído | porcentagem | Registro de implantações com um vínculo ou tag "corrige" e o rastreador de trabalho | Habilitação de mudanças; melhoria contínua | Retrabalho; defeitos escapados; demanda por falha | Mensal |
| Taxa de vínculo entre mudança e incidente | Proporção dos incidentes resolvidos que registram se uma mudança os causou e qual | incidentes com um campo "causado por mudança" preenchido (sim ou não, mais o identificador da mudança quando sim) / incidentes resolvidos no período; o relógio para quando o incidente é encerrado | porcentagem | Ferramenta de incidentes e registros de mudanças | Gestão de incidentes; habilitação de mudanças | Revisão pós-incidente; definição de pronto | Mensal |
| Concordância na definição de falha | Concordância entre dois revisores sobre se uma amostra de mudanças falhou | mudanças amostradas em que dois revisores independentes chegam ao mesmo veredicto de falha usando a definição escrita / mudanças amostradas; uma amostra de pelo menos 20 mudanças sorteadas ao acaso a cada trimestre | porcentagem | Planilha de revisão da amostra mantida com o registro de métricas | Melhoria contínua; medição e relato | Retrospectiva | Trimestral |

Duas notas sobre a tabela. A taxa de falha e a taxa de retrabalho se sobrepõem, mas diferem: uma falha revertida sem nova implantação conta na taxa de falha e não na de retrabalho. E a unidade é a mudança ou a implantação, não o incidente, porque uma mudança pode causar três incidentes e um incidente pode vir de três mudanças.

## Recomendações

### Escreva a definição de falha antes de coletar qualquer dado

**Combine o que significa "falhou" e ponha no registro de métricas.** Uma definição viável é que uma mudança falhou se, dentro de uma janela declarada após a conclusão, foi revertida, precisou de um hotfix ou de uma correção por roll-forward ou foi ligada a um incidente de uma severidade declarada ou superior. Declare a janela (7 dias é comum, e o valor certo depende de quão depressa seus serviços mostram problemas), o limiar de severidade do incidente e quem decide num caso disputado. Escreva pelo menos cinco exemplos trabalhados, incluindo os incômodos, como uma mudança que degradou o desempenho sem nenhuma interrupção. Reveja a definição todo ano e registre as mudanças com seus motivos, para que uma linha de tendência possa ser refeita se a regra mudar.

### Ligue as falhas às mudanças no registro de incidentes

**Acrescente um campo obrigatório ao registro de incidentes: causado por uma mudança, sim ou não, e o identificador da mudança quando sim.** O campo deve ser preenchido durante a resolução e conferido na revisão pós-incidente (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado). Acompanhe a taxa de vínculo como métrica própria. Se apenas metade dos incidentes traz o campo, a taxa de falha subestima a verdade por uma quantidade desconhecida, e você deve dizer isso ao lado do número. Automatize o primeiro palpite onde puder, por exemplo listando as mudanças concluídas no serviço afetado nas horas anteriores ao início do incidente, e deixe um humano confirmar.

### Conte todos os caminhos de correção, e não apenas um

**Defina uma falha a partir de vários sinais.** Puxe os rollbacks da ferramenta de implantação, os hotfixes do controle de versão ou do registro de releases, as correções por roll-forward do vínculo "corrige" e os incidentes da ferramenta de incidentes e depois elimine as duplicatas por mudança. Uma equipe que conta só os rollbacks verá as falhas sumirem no dia em que passar a corrigir adiante. Mantenha também cada rota como um detalhamento separado, porque a mistura conta uma história: muitos hotfixes e poucos rollbacks sugerem que o rollback é difícil, o que vale corrigir por si.

### Trate a parcela de mudanças emergenciais como uma pergunta, não como uma nota

**Reveja as mudanças emergenciais como grupo, e não como meta.** A cada trimestre, leia todas e ordene os motivos: restabelecer um serviço, fechar uma vulnerabilidade, um pedido tardio do negócio, uma etapa de planejamento perdida ou um caminho de aprovação lento demais para o trabalho comum. Os dois últimos são problemas de sistema que devem ser corrigidos melhorando o caminho padrão, para que as pessoas não precisem contorná-lo (veja o tópico 4.3, Métricas de habilitação de mudanças). Uma parcela zero é suspeita, porque emergências genuínas ocorrem. Uma parcela que sobe de modo constante merece um registro de problema (veja o tópico 4.1, Métricas de gestão de problemas).

### Meça o retrabalho como demanda por falha

**Acompanhe o retrabalho como o trabalho criado por falhas anteriores.** A ideia de demanda por falha vem do projeto de serviços: a demanda que existe porque algo não foi feito certo na primeira vez. Em termos de entrega, conte as implantações e os itens de trabalho cujo único propósito é corrigir uma mudança recente. Isso se liga diretamente à divisão entre trabalho planejado e não planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Use a parcela da capacidade gasta em retrabalho como ponto de partida da conversa com o dono do produto, porque transforma uma taxa abstrata em uma compensação sobre no que trabalhar a seguir.

### Relate taxas com contagens, distribuições e uma janela

**Mostre as contagens ao lado das porcentagens e use uma janela móvel.** Uma taxa de falha mensal para uma equipe que implanta dez vezes é ruidosa. Use uma janela móvel de 90 dias, mostre o número de mudanças e de falhas por trás da taxa e dê uma indicação aproximada da incerteza (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Para a recuperação, mostre a mediana e o 85º percentil do tempo da falha ao restabelecimento, e não uma média. Quando um serviço tem pouquíssimas mudanças, conte a história com uma lista das falhas reais em vez de uma taxa.

### Pareie a falha com a velocidade para que a melhoria não possa se esconder em nenhuma das duas

**Exiba sempre a taxa de falha de mudanças ao lado do lead time e da frequência de implantação.** Se a taxa de falha cai enquanto a frequência de implantação também cai bruscamente e o lead time cresce, a equipe pode estar agrupando mudanças, o que eleva o risco de cada uma. Se a velocidade sobe e a taxa de falha se mantém estável, o sistema está melhorando na mudança. O pareamento é a principal defesa contra a manipulação e contra a crença confortável de que menos implantações significam implantações mais seguras (veja o tópico 2.8, Métricas DORA).

### Use os números para melhorar a própria mudança

**Transforme os dados de falha em experimentos de engenharia.** Olhe as características comuns das mudanças que falharam: tamanho, hora do dia, tipo, número de pessoas envolvidas, se tocaram componentes compartilhados e se a cobertura de testes era rala. Depois tente um experimento pequeno e reversível, como lotes menores, [testes de regressão](https://en.wikipedia.org/wiki/Regression_testing) automatizados para uma área arriscada, um [release canário](https://en.wikipedia.org/wiki/Canary_release) para a próxima mudança arriscada ou uma feature toggle que separe a implantação do release. Meça de novo depois de uma janela inteira. O objetivo é uma mudança melhor, e uma métrica melhorada é apenas evidência.

### Reveja as métricas em conjunto em um fórum sem culpados

**Faça uma revisão mensal das mudanças que falharam com as pessoas que as fizeram.** A pauta tem três itens: as contagens e a tendência, duas ou três mudanças com falha escolhidas para estudo e uma ação de melhoria com um responsável. Use a prática de revisão sem culpados, para que as pessoas descrevam o que sabiam na época. Publique as notas da revisão junto com as métricas. Se as pessoas hesitam em relatar falhas pelo modo como os números são usados, corrija isso antes de mudar qualquer outra coisa (veja o tópico 11.3, Implantar métricas sem criar medo).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de falha de mudanças | Estreitar a janela de falha; não ligar incidentes a mudanças; classificar uma mudança ruim como "requisição de serviço" ou "manutenção"; corrigir adiante e chamar de nova mudança; agrupar muitas edições em uma mudança para que uma falha cubra todas | Taxa de vínculo entre mudança e incidente; auditoria amostral trimestral contra a lista de incidentes; concordância na definição de falha; lead time e frequência de implantação ao lado |
| Parcela de mudanças emergenciais | Encaminhar trabalho urgente pelo caminho padrão com uma classificação de risco falsa; encaminhar trabalho comum como emergência para evitar a aprovação; dividir uma emergência em várias mudanças normais | Leitura trimestral de todas as mudanças emergenciais; motivos ordenados e revistos; parcela de mudanças padrão e lead time de aprovação (veja o tópico 4.3, Métricas de habilitação de mudanças) |
| Taxa de rollback | Corrigir adiante para evitar registrar um rollback; manter no ar uma versão quebrada; segurar mudanças longe da produção para que não haja nada a reverter | Taxa de hotfix e taxa de retrabalho ao lado; distribuição do tempo de recuperação; amostra de incidentes contra o registro de implantações |
| Taxa de hotfix | Não etiquetar hotfixes; empurrá-los pelo branch normal; chamar um hotfix de "uma pequena melhoria" | Taxa de retrabalho de implantação; auditoria de branches e tags; parcela de trabalho não planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado) |
| Taxa de retrabalho de implantação | Não ligar as correções à implantação de origem; rotular uma correção como "planejada"; agrupar a correção com funcionalidades novas | Vínculo "corrige" obrigatório nas implantações corretivas; revisão amostral das implantações rotuladas como planejadas; taxa de falha de mudanças ao lado |
| Taxa de vínculo entre mudança e incidente | Preencher o campo com "não" sem conferir; deixar o campo assumir "não" por padrão; encerrar incidentes em massa para elevar a porcentagem | Conferência amostral das respostas "não" na revisão pós-incidente; nenhum valor padrão; comentários do revisor sobre uma amostra |
| Concordância na definição de falha | Escolher exemplos fáceis para a amostra; revisores que são as pessoas medidas; relaxar a definição para que todos concordem | Amostra aleatória sorteada por alguém de fora da equipe; incluir casos limítrofes de propósito; publicar as discordâncias e corrigir a definição |

Uma leitura saudável é assim: a taxa de falha fica numa faixa que a equipe entende e explica, a taxa de vínculo é alta o bastante para que a taxa de falha possa ser confiável, as mudanças emergenciais são poucas e explicadas e os rollbacks e hotfixes são curtos e ensaiados. As falhas são relatadas depressa e discutidas sem culpa. Uma taxa de falha anormalmente baixa com uma taxa de vínculo baixa, frequência de implantação em queda e lotes crescentes é um alerta, e não um sucesso. Trate qualquer melhoria repentina como um gatilho para conferir primeiro o instrumento (veja o tópico 1.5, Fontes de dados e instrumentação).

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Definição estrita e automatizada de falha | Consistente, barata de repetir, fácil de acompanhar ao longo do tempo | Perde degradações sutis; pode contar rollbacks benignos como falhas |
| Revisão por julgamento de cada mudança | Capta o contexto e a severidade | Lenta, subjetiva, aberta a pressão e deriva |
| Janela de falha longa (semanas) | Pega falhas tardias | Borra causa e efeito; mudanças recentes ainda não podem ser relatadas |
| Contar todos os caminhos de correção | Difícil de manipular trocando de rota | Exige juntar com cuidado várias fontes de dados |

Use uma definição automatizada como base, acrescente uma revisão humana amostral e melhore o cruzamento entre mudanças e incidentes antes de construir qualquer outra coisa.

## Perguntas para discutir com sua equipe

**1. O que exatamente conta como mudança com falha aqui, e duas de nós poderiam discordar sobre a mesma mudança?**
Pegue cinco mudanças recentes e peça a cada pessoa que vote se falharam. Comparem os votos e os motivos. As discordâncias mostram onde a definição escrita é fraca. Combinem uma regra para os casos incômodos, como uma queda de desempenho sem interrupção, e escrevam com um exemplo.

**2. Como sabemos quais incidentes foram causados por uma mudança?**
Pergunte como o vínculo é registrado hoje e quem o preenche. Revejam dez incidentes recentes e vejam quantos têm uma mudança anexada e quantos deveriam ter. Discutam se o campo é opcional, se assume "não" por padrão e quem o confere. O facilitador deve buscar uma melhoria concreta no registro, como um campo obrigatório sem valor padrão.

**3. Que rotas de correção usamos, e todas são contadas?**
Liste rollback, hotfix, correção por roll-forward, contorno manual e feature toggle desligada. Para cada uma, pergunte onde o evento é registrado e se alimenta a taxa de falha. Notem as rotas que não deixam rastro. A discussão costuma revelar que a rota preferida da equipe é aquela que a métrica não consegue ver.

**4. Quando foi nossa última mudança emergencial, e ela poderia ter sido evitada?**
Percorram as três ou quatro últimas. Perguntem o que tornou cada uma urgente, o que se sabia antes e como seria um caminho padrão melhor. Separem as emergências reais das descobertas tardias e das aprovações lentas. Combinem uma correção no caminho comum que removeria um motivo recorrente de emergência.

**5. Quanto da nossa semana vai para corrigir mudanças recentes?**
Estimem a parcela da capacidade gasta em retrabalho nas últimas quatro semanas, usando o rastreador e não a memória. Comparem a estimativa com o rastreador. Conversem sobre o que o número custa em trabalho planejado e como o dono do produto o usaria. Escolham um padrão de falha e um experimento para reduzi-lo.

**6. Se a nossa taxa de falha caísse pela metade no próximo trimestre, acreditaríamos?**
Imaginem a manchete e perguntem o que mais teria de ser verdade: taxa de vínculo estável, frequência de implantação constante, recuperação rápida e nenhuma nova categoria de "manutenção". Discutam quais dessas verificações a equipe já faz e quais faltam. Combinem como uma melhoria repentina será investigada antes de ser celebrada.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas das mudanças; por isso são donas da definição de falha e das correções. Comecem pelo trabalho: olhem as mudanças que falharam na revisão, achem as características comuns e tentem lotes menores, testes melhores ou toggles. Acompanhem o retrabalho como parte do quadro, para que as correções não planejadas fiquem visíveis ao lado do trabalho planejado. Guardem os números para o aprendizado da própria equipe e resistam a compartilhar dados em nível individual. Se uma métrica é mostrada aos líderes, a equipe deve ser capaz de explicar cada mudança nela.

### Equipes de serviço e operações

As equipes de operações veem as consequências da mudança na fila de incidentes e estão em melhor posição para manter o vínculo entre incidentes e mudanças. Podem acrescentar o campo obrigatório, conferi-lo na etapa de resolução e devolver os resultados à equipe de entrega sem culpa. As operações também são donas do caminho emergencial e devem rever seu uso. Compartilhem informações sobre as rotas de recuperação e ensaiem rollbacks junto com as equipes de entrega, já que a melhor forma de reduzir o custo da falha é um hábito compartilhado de tornar a mudança reversível (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Liderança e governança

Os líderes devem pedir tendências por serviço, os dois tipos de medida de instabilidade junto com a velocidade e os experimentos de melhoria por trás deles. Evitem metas fixas como "taxa de falha abaixo de 5%", que convidam à redefinição, e evitem usar as cifras em avaliações individuais. Os órgãos de governança podem usar os dados como evidência de que um caminho de aprovação mais leve é seguro, conferindo que a falha e a recuperação se mantiveram estáveis conforme os controles foram relaxados. Uma tendência crescente de mudanças emergenciais é um sinal para olhar o planejamento e o projeto da aprovação, e não para culpar os engenheiros de plantão.

### Clientes e usuários

Os clientes não se importam com a taxa de falha. Importam-se com se o serviço quebra após uma atualização e com a rapidez com que volta. Os dados de falha apoiam uma comunicação honesta: aviso prévio de mudanças arriscadas, mensagens de status claras quando uma mudança causa problemas e um compromisso visível de aprender. Onde os usuários dependem de um serviço para tarefas críticas, combinem com eles de antemão janelas de manutenção e expectativas de rollback (veja o tópico 3.4, Métricas de incidentes graves).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um provedor regional de saúde opera um serviço de agendamento de pacientes. Uma equipe de produto de sete pessoas libera mudanças várias vezes por semana, e uma equipe de operações de cinco cuida dos incidentes e do processo de mudanças. Todos os números deste exemplo são ilustrativos.

Ao longo de um trimestre, o relatório mensal mostra uma taxa de falha de mudanças de 4%, abaixo de 11% no trimestre anterior. O diretor de tecnologia da informação fica satisfeito. A líder de plataforma não se convence, porque a equipe de plantão diz que suas noites não melhoraram. Ela pede à equipe que rode a auditoria amostral do registro de métricas.

A auditoria pega 30 mudanças ao acaso, e dois revisores aplicam a definição escrita. Concordam em 24 dos 30 veredictos; assim a concordância na definição de falha é de 80% (ilustrativo). Em seguida comparam a amostra com a lista de incidentes. Dos 22 incidentes resolvidos no trimestre, apenas 9 trazem o campo "causado por mudança", uma taxa de vínculo de 41%. Lendo à mão os outros 13, os revisores encontram 5 que começaram em até um dia de uma mudança. A contagem corrigida eleva a taxa de falha para cerca de 9%, e a auditoria descobre por que o número parecia bom: um novo hábito de implantar correções sob o rótulo "manutenção", que o relatório excluía tanto do denominador quanto do numerador.

O risco de manipulação é o rótulo, e ninguém o planejou. A equipe tinha sido avisada de que as falhas eram uma preocupação, e "manutenção" evitava uma conversa. A equipe toma três decisões. O campo "causado por mudança" passa a ser obrigatório sem valor padrão, e a revisão pós-incidente o confere. O rótulo "manutenção" é aposentado, e as implantações corretivas devem trazer um vínculo com a mudança que corrigem, o que alimenta a taxa de retrabalho. A definição de falha é reescrita com seis exemplos trabalhados, incluindo uma regressão de consulta lenta que nunca causou uma interrupção.

O trimestre seguinte mostra uma taxa de falha refeita de 8% e uma taxa de vínculo de 90% (ilustrativo). O relatório da liderança agora mostra as contagens, a taxa de vínculo e a taxa de retrabalho ao lado do lead time, e o diretor de tecnologia da informação deixa de citar uma única porcentagem.

## Ágil, IA, automação e análise

### Ágil

Mudanças pequenas e frequentes tornam as falhas mais baratas e mais fáceis de rastrear, e a equipe as revê regularmente com as partes interessadas. O cuidado é que, se as falhas são penalizadas, as pessoas deixam de declará-las.

### IA

As mudanças assistidas por IA podem elevar o volume e o retrabalho enquanto parecem rápidas. Relate as mudanças com falha e o retrabalho do trabalho assistido por IA com a mesma definição do outro trabalho e marque-os nos dados. O cuidado é que comparar trabalho assistido por IA com outro exige cuidado, porque as mudanças podem diferir em natureza.

### Automação

Ligue mudanças, implantações e incidentes automaticamente por identificadores e meça a taxa de vínculo. O rollback automatizado deve ser medido por sucesso e por efeitos colaterais. O cuidado é que vínculos quebrados fazem a taxa de falha parecer melhor do que é.

### Análise

Declare a definição de falha uma só vez e amostre os vínculos à mão. A decisão informada é onde a prática de mudanças precisa ser reforçada. O cuidado é que taxas sobre poucas mudanças oscilam muito; por isso mostre as contagens.

## Olhar setorial

**Startup.** As mudanças são pequenas e frequentes, e a equipe muitas vezes conhece de cor cada falha. Mantenha a definição em um parágrafo, etiquete rollbacks e hotfixes na ferramenta de implantação e reveja as falhas na retrospectiva semanal. Uma taxa de falha sobre 20 mudanças é ruidosa; por isso use uma lista das falhas como evidência principal. O risco é a informalidade: sem definição escrita, a taxa muda conforme quem conta.

**Pequena empresa.** As mesmas pessoas implantam, operam e dão suporte; por isso o retrabalho compete diretamente com o trabalho planejado. Registre as falhas em qualquer ferramenta que você já use, acrescente um campo obrigatório ao registro de incidentes e reveja as mudanças emergenciais todo trimestre. Evite aprovações pesadas só para melhorar os números. Uma lista de verificação de rollback compartilhada vale mais do que um comitê de mudanças.

**Grande empresa.** Muitas equipes, fornecedores e ferramentas significam muitas definições. Padronize a definição de falha e o campo de vínculo entre equipes, publique-os no catálogo de métricas e calcule as taxas por serviço antes de consolidar. Use auditorias amostrais para achar divergências e trate os registros de mudança de cada fornecedor como outra fonte com qualidade própria (veja o tópico 1.5, Fontes de dados e instrumentação). Cuide para que as consolidações nunca virem tabelas de classificação de equipes.

**Governo e setor público.** Os registros de mudança servem à auditoria e à prestação de contas, e os rollbacks podem ser limitados por lei, compras ou plataformas compartilhadas. Mantenha o registro formal e acrescente o vínculo de falha como parte dele. Explique os números com cuidado aos órgãos de fiscalização, com contagens e contexto, porque uma única falha em um serviço crítico pode atrair atenção desproporcional. Use os dados para justificar caminhos mais leves para mudanças de baixo risco, com evidência de que a falha e a recuperação se mantiveram estáveis.

## Business case: motivações, ROI e TCO

A motivação é o custo da mudança que falha: trabalho de incidentes, retrabalho, itens de roteiro atrasados e perda de confiança do usuário. Muitas organizações não sabem dizer quanto do seu esforço vai para reparar mudanças recentes, e uma medida de retrabalho dá a primeira resposta honesta. Há também um benefício indireto. As equipes que podem mostrar que a mudança é segura podem defender uma aprovação mais leve, o que encurta o lead time. A pesquisa DORA relata uma associação entre aprovação externa pesada e desempenho de entrega mais fraco (veja o tópico 4.3, Métricas de habilitação de mudanças), e os dados de falha são o modo de uma equipe testar essa afirmação contra o próprio histórico.

O custo de coleta é modesto se a base existe: um campo obrigatório no registro de incidentes, implantações corretivas etiquetadas, um cruzamento de três fontes de dados e uma revisão mensal. O custo maior é a atenção, porque alguém precisa ser dono da definição, conduzir as auditorias e agir sobre os achados. Evite comprar uma ferramenta antes que a definição e o vínculo funcionem à mão.

O retorno aparece como menos falhas repetidas, recuperação mais curta, menos trabalho não planejado e melhores conversas com a governança. Não prometa uma porcentagem. Em vez disso, estime a sua própria linha de base: conte as horas gastas com retrabalho e resposta a incidentes ligados a mudanças ao longo de um trimestre, precifique-as pela sua taxa interna normal e compare depois das melhorias. Declare as premissas e relate o resultado como uma faixa e não como uma cifra única. Compare-o com o custo do programa e com o custo de uma única falha séria em um serviço crítico.

## Antipadrões e armadilhas

- **Definir uma meta para a taxa de falha.** Convida à redefinição e a falhas escondidas. Defina antes uma meta de aprendizado, como concluir toda revisão e encerrar toda ação corretiva, e observe a taxa quanto a tendências.
- **Classificar equipes ou pessoas por falha.** Destrói o relato e pune as equipes que assumem trabalho arriscado e valioso. Compare uma equipe com o próprio passado e discuta o contexto.
- **Contar só incidentes como falhas.** As falhas pegas cedo e revertidas desaparecem. Inclua todas as rotas de correção e use os incidentes como um sinal entre vários.
- **Tratar mudanças emergenciais como ruins.** A pressão leva a emergências disfarçadas. Reveja-as pelos motivos e corrija o caminho comum.
- **Deixar o vínculo com o incidente assumir "não" por padrão.** O padrão produz um número lisonjeiro e errado. Torne o campo obrigatório e confira uma amostra.
- **Relatar uma taxa sem contagens.** Amostras pequenas oscilam muito. Mostre as contagens e uma janela móvel.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definição de falha | Decidida caso a caso por quem for consultado | Algumas equipes escrevem uma definição; as equipes diferem | Uma definição escrita com exemplos trabalhados e uma janela declarada | Definição testada por auditorias amostrais e concordância medida | Definição revista com fornecedores e clientes quando deixa de informar decisões |
| Vínculo entre mudanças e incidentes | Vínculo lembrado pelas pessoas, se tanto | Campo opcional usado por algumas equipes | Campo obrigatório sem padrão, conferido na revisão pós-incidente | Taxa de vínculo acompanhada ao longo do tempo e revista, com ação sobre as lacunas | Vínculos compartilhados entre equipes e fornecedores por interfaces combinadas |
| Correção e tratamento de emergências | Rollbacks e hotfixes tratados ad hoc e sem registro | Rollbacks e hotfixes etiquetados por algumas equipes | Todas as rotas de correção registradas; teste de emergência escrito | Mudanças emergenciais revistas a cada trimestre; rollbacks ensaiados | Caminhos de recuperação projetados nos serviços e testados em conjunto entre equipes |
| Uso na melhoria | Números citados em relatórios sem seguimento | Falhas discutidas depois de incidentes graves | Revisão mensal sem culpados das mudanças com falha, com ações | Falha e retrabalho pareados com a velocidade; experimentos planejados e financiados | Melhoria é rotina e compartilhada entre equipes, com o aprendizado publicado |

## Lista de verificação

- [ ] Existe uma definição escrita de falha de mudança, com uma janela declarada e pelo menos cinco exemplos trabalhados.
- [ ] A unidade de contagem (mudança, implantação ou release) está nomeada no registro de métricas.
- [ ] O registro de incidentes tem um campo obrigatório "causado por uma mudança" sem valor padrão.
- [ ] Rollbacks, hotfixes e correções por roll-forward são etiquetados nas ferramentas de implantação ou de controle de versão.
- [ ] As implantações corretivas trazem um vínculo com a mudança que corrigem.
- [ ] A mudança emergencial tem um teste escrito curto, e toda mudança emergencial é revista em um número definido de dias.
- [ ] As taxas são mostradas com contagens e uma janela móvel, nunca como uma porcentagem solta.
- [ ] A taxa de falha de mudanças é sempre exibida ao lado do lead time, da frequência de implantação e do tempo de recuperação.
- [ ] Uma auditoria amostral trimestral confere os veredictos de falha e o vínculo com incidentes.
- [ ] Uma revisão mensal sem culpados das mudanças com falha acontece, com um responsável por cada ação.
- [ ] Nenhuma métrica deste tópico é usada para classificar ou avaliar indivíduos.

## Prompts de IA

**Redija uma definição escrita de falha de mudança.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Projete o vínculo entre mudança e incidente.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Analise uma lista de mudanças com falha em busca de padrões.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Confira um painel de falhas quanto a riscos de manipulação.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar qual tópico define uma métrica relacionada, como o lead time ou a duração do incidente, e a barreira de proteção a pôr ao lado da taxa de falha.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de falha nova ou editada declara seu relógio, sua fonte e seu vetor de manipulação.

## Ideias-chave

- Uma taxa de falha de mudanças só é tão boa quanto sua definição; por isso escreva uma, com uma janela, exemplos trabalhados e uma unidade nomeada.
- Ligue cada falha à sua mudança por um campo obrigatório no registro de incidentes e meça a taxa de vínculo.
- Conte juntos rollbacks, hotfixes, correções por roll-forward e incidentes vinculados, para que as equipes não driblem a métrica trocando de rota.
- Leia a parcela de mudanças emergenciais e o retrabalho como sinais sobre o planejamento e o caminho comum, e não como notas.
- Mostre sempre a falha ao lado da velocidade e da recuperação, com contagens e uma janela móvel, e nunca classifique pessoas.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (gerenciamento de dados)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Retrabalho](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Teste de regressão](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Release canário](https://en.wikipedia.org/wiki/Canary_release).
