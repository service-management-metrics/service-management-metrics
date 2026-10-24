# Métricas DORA

**As métricas DORA descrevem com que rapidez e com que segurança as mudanças de software de uma equipe chegam à produção; por isso leia juntas as medidas de velocidade e as de estabilidade, calcule-as a partir de eventos do pipeline e de incidentes e use-as para iniciar conversas sobre um sistema de entrega, nunca para classificar equipes ou pessoas.**

## Visão geral e motivação

As métricas DORA vêm do programa de pesquisa do [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), um estudo de longa duração sobre como as práticas de entrega de software se relacionam com os resultados de equipes e organizações. Nicole Forsgren, Jez Humble e Gene Kim apresentaram os primeiros achados no livro [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) em 2018, e o programa prosseguiu sob o Google Cloud com um relatório anual. A pesquisa perguntou quais aspectos mensuráveis da entrega predizem bons resultados e se fixou em um pequeno conjunto de medidas de desempenho de entrega de software que podem ser calculadas a partir do pipeline de entrega e do registro de incidentes.

Em outubro de 2026, o site da DORA descreve cinco métricas de desempenho de entrega de software, divididas em dois grupos. Três descrevem a **vazão**, isto é, quão depressa as mudanças se movem: lead time de mudança, frequência de implantação e tempo de recuperação de implantação com falha. Duas descrevem a **instabilidade**, isto é, com que frequência um release causa problemas: taxa de falha de mudanças e taxa de retrabalho de implantação. Publicações anteriores descreviam quatro métricas, com "tempo de restabelecimento do serviço" no lugar do tempo de recuperação de implantação com falha e sem a taxa de retrabalho. As definições foram refinadas ao longo dos anos; por isso declare sempre qual edição das orientações você segue e a data em que as conferiu pela última vez.

O achado de pesquisa que tornou as métricas famosas é que velocidade e estabilidade tendem a se mover juntas entre as equipes. As equipes que implantavam com frequência e tinham lead times curtos não estavam, em média, pagando por isso com mais falhas. Isso derruba a antiga suposição de que ir mais rápido significa quebrar mais. É um padrão em dados de pesquisa e de pipeline, não uma lei, e vale para equipes que investiram em práticas como [entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery), lotes pequenos, testes automatizados e feedback rápido. As métricas são sinais dessas capacidades subjacentes. Não são as capacidades em si.

Os termos abaixo se repetem neste tópico.

- Uma **implantação** é o ato de pôr uma versão do software em um dado ambiente. Este tópico se refere à produção, salvo indicação em contrário.
- Uma **mudança** é um conjunto de modificações no software, comumente um ou mais commits que vão ao ar juntos. No ITIL 4 a palavra tem sentido mais amplo, cobrindo qualquer adição, modificação ou remoção que possa afetar serviços, e a prática do [ITIL](https://en.wikipedia.org/wiki/ITIL) que a governa é a habilitação de mudanças.
- Uma **implantação com falha** é uma implantação que causa degradação do serviço ou uma indisponibilidade em produção e exige remediação, como um hotfix, um rollback ou um patch. Sua equipe escreve a regra exata, porque a pesquisa a deixa à definição local.
- Um **rollback** é o ato de devolver a produção à versão anterior conhecida como boa.
- Um **percentil** é um valor abaixo do qual cai uma proporção declarada das observações. O 85º percentil do lead time é o número que 85% das mudanças superam.

As visões ágil e ITIL se encontram nesse terreno. Uma equipe ágil vê esses números como feedback sobre sua prática de engenharia e seus acordos de trabalho. Um profissional do ITIL os vê como evidência de resultado para a habilitação de mudanças, a gestão de releases, a gestão de implantação e a gestão de incidentes. A tensão costuma ser sobre controle. Um comitê tradicional de aprovação de mudanças tenta reduzir falhas inspecionando cada mudança antes de ir ao ar. A pesquisa DORA descobriu que a pesada aprovação externa não estava associada a melhor estabilidade, e que a revisão por pares, os testes automatizados e as mudanças pequenas estavam. No ITIL 4, a habilitação de mudanças prevê isso separando mudanças padrão, normais e emergenciais e deixando que as mudanças de baixo risco sejam pré-autorizadas (veja o tópico 4.3, Métricas de habilitação de mudanças).

As métricas também têm limites que a própria pesquisa declara, e os conselhos práticos deste tópico se apoiam neles. Descrevem um sistema de entrega de uma aplicação ou serviço, destinam-se a conversas de melhoria e nada dizem sobre se o trabalho entregue é valioso. Uma equipe pode registrar números excelentes entregando a coisa errada. Por essa razão este tópico fica ao lado, e não acima, das medidas de fluxo (veja o tópico 2.1, Medidas de fluxo), das medidas de confiabilidade do serviço (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) e das medidas de resultado (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

Por fim, as métricas convidam a [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) no instante em que aparecem em um painel da liderança. A frequência de implantação é a mais fácil de inflar e as contagens de implantações com falha são as mais fáceis de esconder. Cada recomendação abaixo, portanto, pareia uma medida com uma verificação de como ela poderia ser entortada (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Calcule a partir de eventos, não da memória.** As implantações vêm do pipeline, as falhas e recuperações do registro de incidentes e o lead time do controle de versão unido ao pipeline (veja o tópico 1.5, Fontes de dados e instrumentação).
- **Leia velocidade e estabilidade como um só quadro.** Uma equipe rápida com falhas crescentes, ou uma equipe estável que entrega a cada trimestre, está dizendo algo que nenhuma das metades mostra sozinha.
- **Meça um serviço ou aplicação, não uma pessoa.** A unidade de análise é um sistema de entrega. Os indivíduos não implantam sozinhos, e classificá-los destrói os dados.
- **Compare uma equipe com o seu próprio passado, não com outra equipe.** O contexto difere muito entre um serviço de pagamentos, uma plataforma de dados e um aplicativo móvel, e a própria pesquisa alerta contra usar as métricas como tabela de classificação.
- **Use distribuições para os tempos.** O lead time e o tempo de recuperação têm caudas longas; por isso relate a mediana e um percentil alto (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- **Trate as métricas como sintomas.** Quando um número se move, procure a causa nas capacidades por baixo dele, como tamanho do lote, automação de testes, prática de revisão e arquitetura, e depois faça um experimento.
- **Escreva as definições.** Falha, implantação e "início do trabalho" são julgamentos. Registre a escolha e mantenha-a estável para que a tendência signifique algo.

## Definições de métricas

As cinco métricas abaixo seguem as orientações da DORA de outubro de 2026. As fórmulas declaram os relógios e as exclusões que sua equipe deve escrever. Onde a pesquisa deixa uma fronteira em aberto, a tabela mostra um padrão sensato e as recomendações explicam a escolha.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time de mudança | Tempo para uma mudança commitada chegar à produção | O relógio começa no primeiro commit da mudança (ou no seu merge na branch principal, se declarado na definição) e para quando a implantação em produção termina com sucesso; relate a mediana e o 85º percentil das mudanças implantadas no período; mudanças nunca implantadas são excluídas e relatadas à parte como trabalho em andamento | Horas ou dias | Controle de versão unido ao pipeline de implantação | Gestão de implantação; gestão de releases; habilitação de mudanças | Tempo de ciclo; lead time até a produção | Semanal ou por release, revisto mensalmente |
| Frequência de implantação | Com que frequência uma equipe implanta em produção | Contagem de implantações bem-sucedidas da aplicação em produção no período / dias do período; implantações com falha ou revertidas são excluídas da contagem de sucessos; implantações em ambientes de teste são excluídas | Implantações por dia ou por semana | Registro de eventos do pipeline de implantação | Gestão de implantação; gestão de releases | Entrega contínua; liberação ao fim de cada incremento | Semanal |
| Tempo de recuperação de implantação com falha | Quanto tempo leva para se recuperar quando uma implantação causa uma falha em produção | O relógio começa quando a falha é detectada ou relatada (a mesma regra sempre) e para quando o serviço é restabelecido para os usuários; relate a mediana e o 85º percentil para as implantações com falha no período; incidentes não causados por uma implantação são excluídos | Minutos ou horas | Registro de incidentes unido a eventos de implantação e alertas de monitoramento | Gestão de incidentes; gestão da continuidade de serviço | Tempo de recuperação; trabalho de restauração | Por falha, revisto mensalmente |
| Taxa de falha de mudanças | Proporção das implantações em produção que causam uma falha que exige remediação | Implantações que exigiram hotfix, rollback, patch ou resposta a incidente / todas as implantações em produção no período; a regra que liga uma falha à sua implantação é escrita e aplicada do mesmo modo sempre | Porcentagem | Eventos de implantação unidos a incidentes, rollbacks e implantações de hotfix | Habilitação de mudanças; gestão de incidentes | Definição de pronto; defeitos escapados | Mensal |
| Taxa de retrabalho de implantação | Proporção das implantações em produção que não foram planejadas e foram feitas para corrigir um problema visível ao usuário | Implantações não planejadas feitas em resposta a um problema de produção / todas as implantações em produção no período; implantações planejadas que por acaso contêm uma correção são excluídas; a regra de "não planejada" é escrita | Porcentagem | Registro do pipeline etiquetado pelo motivo da implantação, ligado a registros de incidentes ou de defeitos | Habilitação de mudanças; gestão de problemas | Trabalho não planejado; correção de bug liberada fora do plano | Mensal |

Duas notas sobre a tabela. Primeiro, a taxa de falha de mudanças e a taxa de retrabalho de implantação se sobrepõem e não são a mesma coisa: uma falha que a equipe percebe e reverte sem nenhuma implantação nova conta na taxa de falha de mudanças mas não na de retrabalho, enquanto uma correção planejada que a equipe agenda não conta em nenhuma das duas. Segundo, a pesquisa trata a **implantação** como a unidade e conta por aplicação; por isso uma plataforma com cinquenta serviços tem cinquenta conjuntos de números, e não um.

## Recomendações

### Comece pelas definições e pelos relógios

**1. Escreva uma definição de uma página para cada métrica antes de plotá-la.** Declare o que conta como implantação, qual ambiente é a produção, onde o relógio começa para o lead time e como uma falha é ligada a uma implantação. Ponha a página no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas). Uma definição que vive só na cabeça de alguém derivará na primeira vez que a ferramenta ou a equipe mudar.

**2. Escolha um início de lead time e fique com ele.** As escolhas mais comuns são o primeiro commit da mudança, o merge na branch principal e a criação de um ticket. O primeiro commit mede o sistema de entrega e ignora o tempo em que o trabalho ficou parado num backlog. O início no ticket mede mais da espera do cliente mas mistura a priorização (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo). Use um de forma consistente e diga qual em todo gráfico.

**3. Atribua as falhas com uma regra declarada.** Uma falha pertence a uma implantação quando, por exemplo, um incidente é aberto dentro de uma janela declarada após a implantação e sua análise de causa aponta para essa mudança, ou quando um rollback ou hotfix está etiquetado para ela. Escolha uma regra que as pessoas possam aplicar sem discussão, revise uma amostra de casos a cada trimestre e mantenha a regra a mesma por tempo suficiente para ver uma tendência.

### Instrumente a partir do pipeline

**4. Tome os eventos de implantação do pipeline, não de uma planilha.** Um sistema de [CI/CD](https://en.wikipedia.org/wiki/CI/CD) que registra cada implantação em produção com um carimbo de data e hora, uma versão e um resultado dá a frequência de implantação e a parada do relógio do lead time sem entrada humana. Contagens digitadas à mão são tardias e inconsistentes e convidam aos problemas de retrodatação descritos no tópico 1.5, Fontes de dados e instrumentação. O projeto de código aberto Four Keys, da equipe da DORA, é um exemplo prático de coleta desses eventos, embora qualquer pipeline equivalente seu sirva.

**5. Una o registro de incidentes às implantações.** As medidas de falha e de recuperação precisam de duas fontes: o registro de implantações e a ferramenta de incidentes. Acrescente um campo ao registro de incidentes para "causado por implantação" e o identificador da implantação, preenchido durante a resolução e conferido na análise pós-incidente (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado). Sem a união, a taxa de falha de mudanças vira um palpite.

**6. Etiquete o motivo de cada implantação.** A taxa de retrabalho precisa separar as implantações planejadas das correções não planejadas. Um simples rótulo na execução do pipeline, como "mudança planejada" ou "correção de problema de produção", basta. Mantenha curta a lista de rótulos, para que as pessoas não precisem pensar nela sob pressão.

### Relate os números com honestidade

**7. Relate distribuições e contagens, não uma média única.** Mostre a mediana e o 85º percentil para o lead time e o tempo de recuperação, com o número de observações por trás de cada um. Uma semana com duas implantações e uma falha tem uma taxa de falha de mudanças de 50% que significa muito pouco; por isso mostre as contagens ao lado da porcentagem e prefira uma janela mais longa para as taxas (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**8. Mostre lado a lado os grupos de vazão e de instabilidade.** Ponha as três métricas de vazão e as duas de instabilidade em uma só visão, por serviço, com a tendência de pelo menos um trimestre. Nunca publique a frequência de implantação sem as medidas de falha ao lado. Se um líder pedir um número só, explique que não existe uma nota DORA única e ofereça em vez disso a visão em dois grupos.

**9. Mantenha as comparações dentro do histórico da própria equipe.** Uma equipe que leva seu lead time mediano de nove para cinco dias aprendeu algo. Classificá-la contra outra equipe com arquitetura, carga regulatória ou trem de releases diferentes prova pouco e ensina as duas equipes a proteger seus números. Quando precisar consolidar para a governança, mostre a dispersão entre os serviços e a tendência de melhoria, não uma tabela de classificação (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

### Melhore o sistema que os números descrevem

**10. Reduza primeiro o tamanho do lote.** Mudanças pequenas encurtam o lead time, facilitam o diagnóstico de falhas e baixam o custo de um rollback. As técnicas incluem [feature toggles](https://en.wikipedia.org/wiki/Feature_toggle), trabalho baseado em tronco e divisão do trabalho para que cada incremento possa ir ao ar sozinho (veja o tópico 2.7, Métricas de pull requests e revisão de código). Acompanhe o tamanho mediano das mudanças ao lado do lead time para ver se o lote realmente está encolhendo.

**11. Invista em detecção rápida e reversão rápida.** O tempo de recuperação cai quando a equipe consegue ver uma falha em minutos e quando consegue [reverter](https://en.wikipedia.org/wiki/Rollback_(data_management)) ou desligar uma mudança sem um novo build. Um [canary release](https://en.wikipedia.org/wiki/Canary_release), um feature toggle e um rollback automatizado encurtam, cada um, o intervalo entre a falha e o restabelecimento. Meça separadamente o tempo da implantação até a detecção, porque a detecção lenta se esconde dentro de um número de tempo de recuperação (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

**12. Use os números para escolher uma capacidade a melhorar.** Escolha uma métrica fraca, pergunte por que é fraca e selecione uma prática da lista de capacidades da pesquisa que trate a causa, como automação de testes, arquitetura fracamente acoplada ou aprovação leve de mudanças. Execute a mudança por um trimestre e observe a tendência. Pareie o experimento com um tema de retrospectiva para que a equipe seja dona da melhoria (veja o tópico 9.5, Métricas de melhoria contínua).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Lead time de mudança | Mover o início do relógio para mais tarde, como começar no merge em vez de no primeiro commit; integrar cedo numa branch de longa duração; excluir mudanças difíceis como "não é código"; passar mudanças triviais pelo pipeline para derrubar a mediana | Percentil e idade do trabalho em andamento; um início de relógio escrito e fixo; amostra dos 10% mais lentos das mudanças a cada trimestre; distribuição do tamanho das mudanças |
| Frequência de implantação | Dividir uma mudança em muitas implantações triviais; reimplantar builds inalterados; contar implantações em staging ou mudanças de configuração vazias | Tamanho da mudança por implantação; proporção de implantações que contêm mudança visível ao usuário; taxa de falha de mudanças e taxa de retrabalho ao lado |
| Tempo de recuperação de implantação com falha | Começar o relógio tarde ou encerrar incidentes cedo; reclassificar uma falha como novo incidente após uma correção parcial; elevar o limiar de gravidade para "falha" | Recorrência do mesmo incidente dentro de uma janela declarada; início do relógio tirado de alertas de monitoramento; duração do impacto relatada pelo cliente |
| Taxa de falha de mudanças | Não ligar incidentes a implantações; contar apenas falhas que causam indisponibilidade total; alargar a janela para que as falhas caiam fora dela; corrigir para a frente e chamar de nova mudança | Revisar uma amostra de incidentes contra o registro de implantações a cada trimestre; acompanhar a proporção de incidentes com uma ligação de implantação registrada; taxa de retrabalho de implantação |
| Taxa de retrabalho de implantação | Rotular correções como trabalho planejado; embutir uma correção num release agendado; evitar implantações de correção atrasando a correção | Contagens de defeitos e de defeitos escapados do rastreador; idade dos defeitos de produção abertos; auditoria das etiquetas numa amostra de implantações |

Uma leitura saudável mostra o lead time e o tempo de recuperação diminuindo ou estáveis em um nível baixo, a frequência de implantação estável ou crescente com mudanças pequenas e as taxas de falha e de retrabalho estáveis ou em queda, com contagens grandes o bastante para merecer confiança. Leituras suspeitas incluem um salto repentino na frequência de implantação sem mudança no trabalho, uma taxa de falha que cai a zero em um mês e um tempo de recuperação que cai enquanto as reclamações dos clientes continuam as mesmas. Cada uma pede um olhar sobre o instrumento antes de qualquer comemoração.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Usar as cinco métricas DORA por serviço | Baseadas em pesquisa, equilibram velocidade e estabilidade, calculadas a partir de eventos objetivos | Exigem um pipeline e um registro de incidentes que se unam bem; silenciosas sobre se o trabalho foi valioso |
| Relatar apenas a frequência de implantação e o lead time | Fácil de coletar do pipeline | Premia só a velocidade e convida exatamente à manipulação que as medidas de estabilidade pegam |
| Usar definições locais por equipe | Combina com a arquitetura e o estilo de release da equipe | As equipes não podem ser comparadas, e as consolidações são pouco confiáveis |
| Usar uma definição única para toda a organização | Relato consistente; governança simples | Serve mal a alguns sistemas, como mainframes com janelas de lote ou releases regulados |
| Comparar equipes contra faixas de desempenho publicadas | Dá aos líderes uma noção rápida de posição | Ignora o contexto, e a pesquisa alerta que as faixas não são metas para cada equipe |
| Usar as métricas para a automelhoria da equipe | Gera responsabilidade; apoia dados honestos | Oferece menos conforto a líderes que querem uma nota única |

A tensão central está entre comparabilidade e honestidade. Quanto mais um número é usado para julgar equipes, mais os dados se entortam e menos ajudam a equipe que é dona dele. Use as métricas primeiro para apoiar a melhoria, aceite uma comparabilidade imperfeita e mantenha as visões do nível da liderança em tendências e dispersão. Onde o relato regulado exigir uma definição padrão, documente-a e mantenha separada a visão de melhoria no nível da equipe.

## Perguntas para discutir com sua equipe

**1. Quais dos nossos cinco números DORA vêm de eventos e quais vêm da lembrança de alguém?**
Rastreie cada métrica até a fonte. Anote onde uma pessoa digita uma data ou decide se algo conta como falha. O facilitador deve ajudar o grupo a ordenar as etapas manuais pelo quanto poderiam distorcer o número e combinar qual automatizar primeiro.

**2. Onde exatamente o nosso relógio de lead time começa e para, e todos concordam?**
Peça a três pessoas que descrevam o início e a parada do relógio da última mudança que foi ao ar. Compare as respostas. As diferenças costumam aparecer em torno do primeiro commit, do merge, de um ticket e da etapa de aprovação. Combinem uma definição e escrevam e discutam que tempo de espera a definição escolhida esconde.

**3. O que conta como implantação com falha para nós, e quem decide?**
Percorra os últimos cinco incidentes de produção e pergunte se cada um pertence a uma implantação. As discordâncias mostram onde a regra é pouco clara. Discuta o que acontece com uma falha corrigida por uma mudança de configuração, um rollback ou um patch rápido e decida como cada uma é registrada.

**4. Se a frequência de implantação dobrasse no próximo trimestre, o que conferiríamos antes de chamar isso de boa notícia?**
Convide o grupo a nomear as maneiras de o número subir sem entregar mais valor. Olhe o tamanho das mudanças, a proporção de implantações com mudança visível ao usuário e as taxas de falha e de retrabalho. O facilitador deve anotar quais verificações já existem no painel e quais precisam ser acrescentadas.

**5. Como esses números são usados por pessoas de fora da equipe?**
Pergunte quem os vê, de que forma e o que faz com eles. Atente para comparação com outras equipes, metas definidas de fora e uso em avaliações individuais. Discuta o que a equipe precisaria ver mudar nesse uso para confiar em seus próprios dados e quem tem autoridade para fazer a mudança.

**6. Que capacidade melhoraria mais o nosso número mais fraco, e qual é um pequeno experimento a tentar?**
Escolha a métrica mais fraca e converse sobre suas prováveis causas, como lotes grandes, revisão lenta, testes instáveis ou uma etapa manual de release. Escolha uma causa e projete um experimento de quatro a seis semanas com um modo de ver o efeito. Combinem uma data para rever o resultado e quem trará os dados.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas das capacidades que movem esses números: mudanças pequenas, testes automatizados, um pipeline rápido e o hábito de revisar o trabalho umas das outras. Devem usar as métricas como um espelho da própria prática de engenharia, definir suas próprias metas de melhoria e resistir à pressão de relatar um número único para cima. Também decidem as definições; por isso carregam o dever de mantê-las honestas (veja o tópico 2.7, Métricas de pull requests e revisão de código).

### Equipes de serviço e operações

As equipes de operações guardam o registro de incidentes de que as medidas de falha e de recuperação dependem. Ajudam a equipe de entrega etiquetando os incidentes com a implantação que os causou, fornecendo monitoramento que detecta falhas rapidamente e participando da revisão de cada implantação com falha. Devem observar que a velocidade de entrega não esteja comprando instabilidade que elas absorvem como carga de plantão (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão) e pedir os investimentos em rollback e em detecção que reduzem o tempo de recuperação.

### Liderança e governança

Os líderes devem pedir tendências e dispersão entre os serviços, os dois grupos de métricas em conjunto e os experimentos de melhoria por trás deles. Devem evitar metas que travem um número, como "implantar diariamente", e evitar usar as métricas em avaliações individuais. Os órgãos de governança podem usar os números como evidência de que um caminho de aprovação de mudanças mais leve é seguro, ou como motivo para reconsiderá-lo, mostrando se a estabilidade se manteve conforme o processo mudou (veja o tópico 4.4, Falhas de mudança e retrabalho).

### Clientes e usuários

Os clientes raramente se importam com contagens de implantações. Importam-se com a rapidez com que uma correção ou funcionalidade chega a eles, com a raridade com que um release quebra algo em que confiam e com a rapidez com que o serviço volta quando isso acontece. Use as métricas DORA como evidência interna de que esses resultados são prováveis e complemente-as com medidas voltadas ao cliente, como disponibilidade e satisfação (veja o tópico 5.3, Métricas de disponibilidade, e o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera um serviço de checkout de propriedade de uma equipe de produto, apoiada por uma equipe de plataforma e pela central de serviços. Todos os números abaixo são ilustrativos.

A equipe vem implantando em produção cerca de duas vezes por semana, com um lead time (do primeiro commit à produção) de mediana 11 dias e 85º percentil de 26 dias. No trimestre anterior, 6 de 24 implantações (25%, ilustrativo) foram seguidas de um rollback ou de um incidente. A mediana do tempo de recuperação dessas falhas foi de 3 horas. O comitê de aprovação de mudanças se reúne semanalmente e revisa toda mudança no serviço de checkout.

A equipe propõe um plano. Vai dividir mudanças grandes, acrescentar verificações automáticas no pipeline, pôr o novo comportamento atrás de feature toggles e pedir ao comitê que pré-autorize como mudanças padrão as mudanças de baixo risco que passem nas verificações. O gestor de mudanças fica desconfiado; por isso a equipe concorda em relatar as cinco métricas mensalmente e em interromper o experimento se a taxa de falha subir por dois meses seguidos.

Após um trimestre, os números (ilustrativos) são 19 implantações por mês, um lead time mediano de 3 dias com 85º percentil de 8 dias, uma taxa de falha de mudanças de 8%, uma mediana de tempo de recuperação de 40 minutos e uma taxa de retrabalho de 5%. A equipe está satisfeita, e um gerente regional pede para comparar a frequência de implantação da equipe de checkout com a das outras equipes de produto e definir uma meta comum.

O líder da equipe leva à revisão o detalhamento de retrabalho e de falhas e nota um risco de manipulação. A frequência de implantação foi ajudada por várias pequenas implantações de configuração que o pipeline conta, e o tamanho mediano das mudanças está encolhendo mais depressa que o trabalho real. Pior: dois incidentes do mês passado foram corrigidos por uma mudança de configuração que o pipeline registrou como uma implantação normal etiquetada "planejada"; por isso a taxa de retrabalho estava subestimada. A taxa de falha de mudanças parecia boa em parte porque esses dois incidentes não haviam sido ligados às implantações originais.

A decisão, registrada no registro de decisões, tem quatro partes. As implantações apenas de configuração são contadas separadamente e mostradas ao lado do número principal. A etiqueta de motivo da implantação é auditada mensalmente numa amostra de 10 implantações. A ferramenta de incidentes passa a exigir o identificador da implantação quando a causa é uma mudança. E a equipe recusa a meta comum de frequência de implantação, oferecendo em seu lugar uma visão compartilhada que mostra a tendência de cada serviço e sua taxa de falha. O gestor de mudanças concorda em manter a pré-autorização das mudanças padrão, com uma revisão ao fim do próximo trimestre.

## Ágil, IA, automação e análise

### Ágil

As métricas DORA descrevem com que rapidez e segurança as mudanças chegam à produção, que é o núcleo prático da entrega contínua. Uma boa prática é ler juntas as medidas de velocidade e de estabilidade numa revisão regular com as partes interessadas e escolher uma melhoria. O cuidado é que a equipe pode inflar a frequência de implantação dividindo mudanças; por isso observe o tamanho das mudanças e o retrabalho.

### IA

A programação assistida por IA pode elevar o volume de mudanças e acelerar o lead time ao mesmo tempo que eleva o retrabalho ou as mudanças com falha. Relate as mudanças assistidas por IA e as demais juntas nas mesmas medidas de estabilidade e compare o tempo de recuperação de implantação com falha e a taxa de retrabalho antes e depois da adoção. O cuidado é que a pesquisa da DORA sobre IA está evoluindo; por isso confira os relatórios publicados atuais antes de citar qualquer achado.

### Automação

Calcule automaticamente as cinco medidas a partir de eventos do pipeline e de incidentes, com uma regra clara do que conta como implantação e como falha. Meça o próprio pipeline quanto à sua falha e instabilidade. O cuidado é que a automação pode esconder etapas manuais fora do pipeline, como uma aprovação por e-mail; por isso mapeie uma vez o caminho real.

### Análise

Relate distribuições, e não apenas médias, e compare uma equipe com o seu próprio passado, não com outras equipes. A decisão informada é onde o sistema de entrega é lento ou frágil. O cuidado é que as tabelas de classificação entre equipes estimulam a manipulação, e os números dependem de definições locais de implantação e de falha.

## Olhar setorial

**Startup.** Uma equipe pequena muitas vezes implanta várias vezes por dia e tem registros de incidentes escassos; por isso a frequência de implantação e o lead time são fáceis, mas os dados de falha são irregulares. Comece etiquetando no pipeline todo rollback e hotfix e mantendo um simples registro de incidentes com o identificador da implantação. Não deixe que uma frequência alta o convença de que a estabilidade vai bem sem conferir a taxa de falha.

**Pequena empresa.** Uma plataforma hospedada ou um desenvolvedor terceirizado pode implantar apenas uma vez por mês, com poucas ferramentas. Conte à mão o que puder durante alguns meses, peça ao fornecedor por escrito as datas de implantação e de incidentes e concentre-se no lead time e na taxa de falha. Use os números para decidir se mudanças menores entregues continuamente reduziriam o risco, e não para perseguir uma faixa.

**Grande empresa.** Muitas equipes, vários estilos de release e uma mistura de sistemas modernos e legados tornam difíceis definições consistentes. Combine uma definição mínima comum para cada métrica, publique-a e permita que uma equipe acrescente outras locais mais estritas com uma razão declarada. Consolide mostrando a dispersão e a tendência por serviço, em vez de uma média, e mantenha o detalhe no nível da equipe visível apenas para a equipe dona e seus grupos de apoio.

**Governo e setor público.** Janelas de release, regras de auditoria e contratos de compras moldam o que é possível, e alguns sistemas são operados por fornecedores. Inclua nos contratos direitos sobre os dados de entrega e de incidentes para que as métricas possam ser calculadas. Use os números como evidência de que um programa de modernização está encurtando os lead times sem elevar as taxas de falha e relate todas as métricas juntas para que os resultados não sejam selecionados (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é encurtar o tempo entre uma ideia e o seu uso mantendo a produção estável. O custo do programa tem três partes: a instrumentação (eventos do pipeline, etiquetas de implantação e a união com incidentes), a rotina de revisão (um olhar mensal sobre as tendências e uma amostra trimestral de casos de falha e de retrabalho) e o trabalho de melhoria para o qual os números apontam, como automação de testes ou um pipeline mais rápido. As duas primeiras são modestas. A terceira é onde mora a despesa real, e é gasta em capacidade de engenharia, não em medição.

O retorno vem de decisões que os números facilitam. Uma equipe pode mostrar a um comitê de mudanças que mudanças pequenas são seguras e assim aposentar uma etapa de aprovação. Um grupo de plataforma pode ver quais serviços têm pipelines lentos ou rollback ruim e direcionar o investimento de acordo. Uma equipe de operações pode defender com dados uma ferramenta de detecção melhor. Descreva o retorno por padrões que você mesmo possa observar, como o tempo do commit à produção, a proporção de releases que precisam de uma correção e a carga de plantão por release, antes e depois de uma mudança. Evite citar cifras de referência de outras organizações como retorno esperado, já que seu contexto será diferente. O custo total de propriedade é dominado pelo tempo das pessoas; por isso mantenha pequeno o conjunto de métricas e automatize sua coleta (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Tratar as métricas como um scorecard de desempenho de indivíduos.** Quebra a base da pesquisa e corrompe os dados. Relate apenas no nível de serviço e de equipe.
- **Definir metas como "implantar diariamente" ou "lead time abaixo de um dia".** A meta substitui o objetivo. Defina uma direção de melhoria e um experimento e mantenha o número como sinal.
- **Classificar equipes entre si ou contra faixas publicadas.** O contexto difere e a manipulação se segue. Compare uma equipe com a própria tendência e use as faixas apenas como orientação solta.
- **Relatar velocidade sem estabilidade.** O par é o ponto. Mostre sempre juntos os grupos de vazão e de instabilidade.
- **Deixar as definições derivarem.** Falha, implantação e o início do lead time mudam em silêncio com a ferramenta. Registre toda mudança de definição com seu motivo e marque-a no gráfico.
- **Contar implantações de qualquer coisa.** Envios de configuração, releases em ambiente de teste e reimplantações do mesmo build inflam a contagem. Defina uma implantação em produção e mostre os outros tipos à parte.
- **Ignorar o que é entregue.** Números fortes podem esconder trabalho que não importa. Leia-os ao lado das medidas de fluxo e de resultado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).
- **Perseguir a métrica em vez da capacidade.** O lead time cai de modo mais confiável quando os lotes encolhem e os testes ficam mais rápidos. Melhore a prática e deixe o número acompanhar.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | Cada pessoa define implantação e falha de um jeito | Algumas equipes documentam suas definições | Uma definição escrita por métrica, com relógios e exclusões, no registro de métricas | Mudanças de definição registradas e marcadas nos gráficos; amostras conferidas a cada trimestre | Definições revistas em conjunto com fornecedores e governança quando deixam de informar decisões |
| Captura de dados | Contagens montadas à mão a partir de tickets | Dados do pipeline para alguns serviços; incidentes ligados à mão | Implantações, motivos e ligações com incidentes capturados automaticamente para a maioria dos serviços | Qualidade dos dados (taxa de ligação, auditoria de etiquetas) medida e acompanhada | Eventos compartilhados entre equipes e fornecedores por interfaces acordadas |
| Uso dos números | Relatados para cima como nota única | As equipes olham seus gráficos de vez em quando | Grupos de vazão e de instabilidade revistos juntos todo mês pela equipe dona | Tendências alimentam experimentos de melhoria financiados com uma barreira de proteção | Dispersão e tendências informam o investimento em plataforma e a política de mudanças em toda a organização |
| Barreiras de proteção contra manipulação | Nenhuma | Consciência informal | Barreiras de proteção pareadas listadas para cada métrica | Barreiras de proteção e amostras revistas, com casos de manipulação registrados | Barreiras de proteção ajustadas continuamente conforme equipes e ferramentas mudam |

## Lista de verificação

- [ ] As cinco métricas estão definidas por escrito, com relógios, exclusões e a data e a edição das orientações da DORA seguidas.
- [ ] As implantações em produção são registradas pelo pipeline com carimbo de data e hora, versão e resultado.
- [ ] O início do lead time (primeiro commit, merge ou outro) está declarado e aplicado de forma consistente.
- [ ] Os incidentes têm um campo para a implantação que os causou, preenchido durante a resolução.
- [ ] Cada implantação tem uma etiqueta de motivo, e uma amostra é auditada mensalmente.
- [ ] Os tempos são relatados como mediana e um percentil alto, com contagens.
- [ ] As métricas de vazão e de instabilidade são mostradas juntas para cada serviço.
- [ ] O tamanho das mudanças é acompanhado ao lado da frequência de implantação e do lead time.
- [ ] Os números não são usados em avaliações individuais nem para classificar equipes.
- [ ] Um responsável nomeado revê as métricas todo mês e registra qualquer mudança de definição.
- [ ] Um experimento de melhoria, ligado à métrica mais fraca, está em andamento com uma data de revisão.

## Prompts de IA

**Escreva um conjunto de definições de uma página para as cinco métricas.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Confira um conjunto de métricas em busca de riscos de manipulação.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Analise uma exportação de dados de implantações e incidentes.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planeje um experimento de melhoria.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados de mudanças, releases e incidentes e a barreira de proteção que deve ficar ao lado de cada métrica DORA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma versão revisada deste tópico mantém coerentes seus relógios, vetores de manipulação e referências cruzadas.

## Ideias-chave

- As métricas DORA são cinco medidas de entrega de software, três de vazão e duas de instabilidade, e são mais úteis lidas em conjunto para um serviço.
- Calcule-as a partir de eventos do pipeline e de incidentes com definições escritas, porque a falha e o início do lead time são julgamentos.
- Use-as para aprender sobre um sistema de entrega e compare uma equipe com o próprio histórico, nunca para classificar pessoas ou equipes.
- Relate medianas, percentis altos e contagens e pareie cada métrica com uma barreira de proteção que pegue sua manipulação.
- Melhore as capacidades subjacentes, como lotes pequenos, detecção rápida e rollback fácil, e deixe os números acompanharem.
- Declare a edição e a data das orientações que você segue, já que as definições foram refinadas ao longo do tempo.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (livro)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (gerenciamento de dados)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
