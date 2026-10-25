# Métricas de releases e implantação

**Implantar código e liberá-lo aos usuários são eventos diferentes, com riscos diferentes; por isso meça-os separadamente, conte cada um por uma regra escrita e leia juntos a frequência, o lead time, o tamanho do lote e a higiene das flags, em vez de celebrar qualquer contagem isolada.**

## Visão geral e motivação

Muitas equipes usam as palavras "implantação" e "release" como se significassem a mesma coisa. Não significam, e a diferença é a ideia mais útil deste tópico. Uma **implantação** é o ato de colocar uma versão do software em um ambiente, em geral a produção, como descrito no artigo sobre [implantação de software](https://en.wikipedia.org/wiki/Software_deployment). Um **release** é o momento em que uma mudança fica disponível para os usuários a que se destina, uma decisão que a [gestão de releases](https://en.wikipedia.org/wiki/Release_management) existe para governar. Quando os dois acontecem juntos, uma implantação é um release e um só número descreve ambos. Quando são separados, a equipe pode implantar com frequência e em silêncio e liberar de forma deliberada.

A separação importa porque os dois eventos carregam riscos diferentes. Uma implantação carrega risco técnico: o novo build pode não subir, pode quebrar uma dependência ou pode precisar de um rollback. Um release carrega risco de negócio e de usuário: a mudança pode confundir os clientes ou precisar chegar numa data combinada. As equipes que acoplam os dois eventos aceitam os dois riscos de uma vez, o que as empurra para grandes lotes de mudança liberados raramente. As equipes que os separam assumem o risco técnico em pequenos passos e o risco do usuário em passos controlados.

A principal ferramenta de separação é a [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), também chamada de feature flag: uma chave na configuração que liga ou desliga um comportamento sem uma nova implantação. Técnicas relacionadas incluem o [release canário](https://en.wikipedia.org/wiki/Canary_release), que expõe uma mudança primeiro a uma pequena parcela do tráfego, e a [implantação blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment), que mantém dois ambientes de produção e alterna o tráfego entre eles. Todas permitem responder a duas perguntas separadas: a nova versão está rodando com segurança, e quem deve ver o novo comportamento e quando.

Os termos abaixo se repetem neste tópico.

- Um **release** é uma versão ou um conjunto de mudanças disponibilizado aos usuários.
- Uma **implantação** é a movimentação de uma versão para um ambiente. O ITIL 4 nomeia uma prática para isso, a gestão de implantação.
- Um **dark launch** é uma implantação cujo novo comportamento está desligado para os usuários.
- Um **rollout progressivo** é um release que amplia a exposição em estágios, por exemplo 1%, 10% e depois todos.
- Um **lote** é o conjunto de mudanças que seguem juntas em uma implantação ou release. O tamanho do lote é o número de mudanças, ou a quantidade de mudança, nele.
- O **lead time de release** é o tempo decorrido de um ponto de partida declarado até a mudança estar disponível para os usuários. Sua equipe escreve o ponto de partida, porque vários estão em uso comum.
- Um **percentil** é um valor abaixo do qual cai uma proporção declarada das observações. O 85º percentil do lead time de release é o número que 85% dos releases superam.

As visões ágil e ITIL se encontram aqui. Uma equipe ágil que segue a [entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery) quer que toda mudança possa ser liberada a qualquer momento e trata o release como uma decisão de negócio tomada separadamente do ato técnico. Um praticante do ITIL vê a gestão de releases, a gestão de implantação e a habilitação de mudanças como práticas que planejam, programam e controlam a movimentação da mudança para o uso real. As duas visões entram em conflito quando a gestão de releases é entendida como um calendário de grandes eventos. Combinam quando a prática é entendida como a capacidade de liberar com segurança sob demanda, com os controles embutidos no pipeline e nas flags.

Este tópico não repete as definições das cinco medidas de desempenho de entrega do programa de pesquisa DORA (veja o tópico 2.8, Métricas DORA), nem as medidas de falha e retrabalho depois de um release (veja o tópico 4.4, Falhas de mudança e retrabalho), nem o volume e a aprovação das mudanças (veja o tópico 4.3, Métricas de habilitação de mudanças). Acrescenta o que esses tópicos deixam em aberto: como contar releases distintos das implantações, quanto tempo uma mudança pronta espera antes de os usuários a receberem, quão grandes são os lotes e se as flags que tornam a separação possível estão sendo mantidas em ordem.

Por fim, as contagens de releases e de implantações são números tentadores para um painel da liderança, e a [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica de imediato (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Uma contagem de implantações sobe quando as mudanças são divididas em pedaços triviais. Uma contagem de releases sobe quando um rótulo é mudado. Cada métrica abaixo vem, portanto, com o modo como se dobra e a barreira de proteção que pega a dobra.

## Princípios-chave

- **Implantação e release são dois eventos.** Meça-os separadamente sempre que a arquitetura permitir e diga com clareza onde ainda são um só evento.
- **Conte por uma regra escrita.** Uma implantação conta quando um ambiente nomeado recebeu uma versão nomeada com resultado bem-sucedido. Um release conta quando os usuários pretendidos conseguem alcançar a mudança. Escreva a regra uma vez e aplique-a sempre do mesmo modo.
- **Descreva um serviço, não uma pessoa.** As contagens pertencem a um serviço e à sua equipe, nunca a um indivíduo.
- **Meça a espera, não só o trabalho.** O lead time de release muitas vezes contém dias de espera por uma janela, uma aprovação ou uma decisão. A espera é onde a melhoria costuma estar.
- **Lotes pequenos são a alavanca.** Frequência e tamanho são duas visões de uma mesma coisa. Pareie toda contagem com uma medida de quanta mudança cada release carregou.
- **As flags são estoque com custo de manutenção.** Uma flag que vive demais vira código morto e fonte de falhas; por isso acompanhe a idade das flags com o mesmo cuidado com que acompanha a cobertura.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frequência de implantação | Com que frequência um serviço recebe uma implantação bem-sucedida em produção | Contagem de implantações bem-sucedidas em produção do serviço no período / dias no período; implantações em ambientes de teste ou staging, implantações com falha ou revertidas e reimplantações de um build inalterado são excluídas; implantações só de configuração são contadas em uma série separada | Implantações por dia ou por semana | Registro de eventos do pipeline de implantação | Gestão de implantação | Entrega contínua; entregar um incremento funcionando | Semanal |
| Frequência de release | Com que frequência os usuários recebem uma mudança que conseguem alcançar | Contagem de eventos de release no período / dias no período; um evento de release é o momento em que uma mudança, ou um grupo de mudanças, passa a poder ser alcançado pelos usuários pretendidos (uma flag ligada para todos os usuários, o estágio final de um rollout progressivo ou a implantação de uma mudança sem flag); um dark launch, um rollout interrompido em um estágio parcial e uma mudança de flag que afeta apenas usuários internos são excluídos | Releases por semana ou por mês | Registro de auditoria do serviço de flags cruzado com o registro do pipeline e o calendário de releases | Gestão de releases | Liberar ao fim de cada incremento; um incremento potencialmente entregável disponibilizado | Semanal, revisto mensalmente |
| Lead time de release | Quanto tempo uma mudança pronta espera antes de os usuários poderem alcançá-la | O relógio começa quando a mudança é mesclada na linha principal e passou nas verificações automatizadas (ou, se a equipe assim escrever, no primeiro commit) e para quando a mudança é liberada como definido acima; relate a mediana e o 85º percentil das mudanças liberadas no período; mudanças ainda não liberadas são excluídas e relatadas como uma idade do trabalho em espera | Horas ou dias | Controle de versão cruzado com o pipeline e o registro de auditoria das flags | Gestão de releases; gestão de implantação | Lead time do pronto ao entregue; lead time até o cliente | Semanal, revisto mensalmente |
| Intervalo entre implantação e release | Quanto tempo o código implantado fica no escuro antes de os usuários poderem alcançá-lo | O relógio começa quando a mudança é implantada em produção e para quando é liberada; relate a mediana e o 85º percentil; mudanças liberadas no momento da implantação têm intervalo zero e são incluídas; mudanças implantadas e depois removidas sem release são excluídas e contadas à parte | Horas ou dias | Registro do pipeline cruzado com o registro de auditoria das flags | Gestão de releases; gestão de implantação | Dark launch; desacoplar a implantação do release | Mensal |
| Tamanho do lote de release | Quanta mudança segue junta em um release | Mediana e 85º percentil do número de mudanças mescladas (pull requests ou itens de trabalho) por release no período; a unidade de mudança é escrita; cada mudança é contada uma vez, no release que a tornou alcançável | Mudanças por release | Controle de versão e rastreador de issues cruzados com o evento de release | Gestão de releases; habilitação de mudanças | Lotes pequenos; fatias verticais de trabalho | Por release, revisto mensalmente |
| Cobertura de feature flags | A proporção das mudanças visíveis ao usuário que foram liberadas atrás de uma flag | Mudanças visíveis ao usuário liberadas no período que tinham uma flag no momento do release / todas as mudanças visíveis ao usuário liberadas no período; mudanças de infraestrutura e correções de defeitos que não podem ser sinalizadas são excluídas, e a regra para "visível ao usuário" é escrita | Porcentagem | Serviço de flags cruzado com o rastreador de issues e o registro de releases | Gestão de releases; habilitação de mudanças | Entrega progressiva; desenvolvimento orientado a experimentos | Mensal |
| Contagem de flags obsoletas | Quantas flags sobreviveram ao seu propósito | Número de flags de release ainda presentes no código ou na configuração mais de um número declarado de dias depois de a mudança que protegem ter chegado a todos os usuários; flags operacionais permanentes (chaves de desligamento, flags de direito de uso) são etiquetadas e excluídas; o limite de idade é escrito por tipo de flag | Flags, e a idade mediana das flags de release em dias | Inventário do serviço de flags cruzado com a busca no código | Gestão de releases; gestão do conhecimento | Limpeza de dívida técnica; o critério de pronto de remover uma flag | Mensal |

## Recomendações

### Escreva o que conta como implantação e como release

**Defina os dois eventos antes de contar qualquer um.** Uma implantação conta quando uma versão nomeada chegou a um ambiente nomeado e o pipeline relatou sucesso. Um release conta quando os usuários pretendidos podem alcançar a mudança, o que, para uma mudança sinalizada, é o momento em que a flag é ligada para eles, e não o momento em que o código chegou. Declare as exclusões na mesma frase: ambientes de teste, rollbacks, reimplantações de um build inalterado e exposição apenas interna.

### Relate as duas séries lado a lado

**Mostre a frequência de implantação e a frequência de release num mesmo gráfico.** Onde as linhas coincidem, o serviço ainda acopla os dois eventos. Onde as implantações correm bem à frente dos releases, a equipe começou a desacoplá-los, e a distância entre as linhas é um sinal da capacidade. Um único número combinado esconde isso e permite a uma equipe alegar uma frequência alta que os usuários nunca veem.

### Meça o lead time de release de um início declarado até o usuário

**Escolha o início do relógio uma vez e mantenha-o.** Começar no primeiro commit mostra a jornada completa, e começar na mesclagem na linha principal isola o pipeline de release e suas aprovações. Qualquer um é aceitável se declarado no gráfico e nunca mudado em silêncio. Termine o relógio no release, e não na implantação; do contrário, a métrica deixa de medir o que o usuário esperou.

### Acompanhe o tamanho do lote ao lado da frequência

**Pareie toda frequência com um tamanho.** Uma equipe pode elevar sua contagem de implantações cortando uma mudança em fatias que não são úteis de forma independente, e a contagem sobe enquanto o fluxo real continua igual. A mediana e o 85º percentil do tamanho do lote mostram se as fatias são reais. Lotes pequenos são mais fáceis de revisar, testar e reverter, e esse é o benefício de que a frequência é um indicador.

### Trate os estágios do rollout progressivo como eventos

**Registre cada estágio de um rollout com um carimbo de tempo.** Um rollout que vai de 1% a 10% e a todos gera três carimbos de tempo, e cada um é uma chance de parar. Capture o estágio, a parcela de exposição e o resultado da verificação de saúde que permitiu o estágio seguinte. Isso permite separar um rollout pausado por um sinal real de um que emperrou.

### Mantenha um inventário de flags com responsável e data de expiração

**Dê a toda flag de release um responsável, um propósito e uma data planejada de remoção na criação.** O serviço de flags ou um simples registro pode guardar isso. Reveja o registro todo mês e calcule a contagem de flags obsoletas. Uma flag deixada ligada depois do rollout completo é código morto que ainda bifurca. Trate a remoção como parte do pronto da mudança.

### Etiquete as flags por tipo

**Separe as flags de release temporárias das flags operacionais permanentes.** As chaves de desligamento e as flags de direito de uso são permanentes por projeto, enquanto as flags de release devem ser removidas após o rollout completo. Misturar os tipos torna ruidosa a contagem de obsoletas e convida as equipes a apagar uma chave de que alguém precisa durante um incidente. Exija o tipo quando a flag for criada.

### Ligue os releases aos registros de incidentes e de mudanças

**Registre o identificador do release no incidente e na mudança.** Um evento de release deve ser rastreável a partir da ferramenta de incidentes, para que a causa de um incidente possa ser ligada à mudança que foi liberada, tenha sido implantada na semana passada ou ligada nesta manhã. Sem o vínculo, as medidas de instabilidade atribuem as falhas à data da implantação e perdem as falhas causadas por uma mudança de flag. As mudanças de flag em produção são mudanças no sentido do ITIL e devem ser visíveis para a habilitação de mudanças, mesmo quando pré-autorizadas como mudanças padrão (veja o tópico 4.3, Métricas de habilitação de mudanças).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Frequência de implantação | Dividir uma mudança em implantações triviais; reimplantar builds inalterados; contar implantações em staging; contar implantações só de configuração junto com a série principal | Tamanho do lote de release e proporção de implantações com uma mudança visível ao usuário; a série separada de configuração; taxa de falha de mudanças ao lado |
| Frequência de release | Rebatizar implantações como releases; contar como release uma flag ligada para a equipe interna; liberar mudanças vazias ou cosméticas para cumprir uma meta; contar cada estágio de um rollout como um release separado | Uma definição escrita de release; amostra trimestral de releases conferida contra mudanças visíveis ao usuário; tamanho do lote e contagem de mudanças voltadas ao cliente |
| Lead time de release | Começar o relógio mais tarde, por exemplo na aprovação e não na mesclagem; excluir como "bloqueadas" as mudanças que esperaram muito; liberar primeiro uma mudança trivial para baixar a mediana; terminar o relógio na implantação | O 85º percentil e a idade da mudança em espera mais antiga; um início escrito e fixo; uma revisão trimestral dos 10% de mudanças mais lentas |
| Intervalo entre implantação e release | Ligar uma flag para um usuário simbólico para registrar o release cedo; deixar de fora da amostra o código que ficou muito tempo no escuro chamando-o de "não é um release"; apagar o código no escuro para evitar um intervalo longo | Parcela de exposição no release (um limiar para o que conta como liberado); contagem de mudanças implantadas e removidas sem release; contagem de flags obsoletas |
| Tamanho do lote de release | Dividir o trabalho em pull requests artificiais; fundir mudanças não relacionadas em uma para reduzir o número de releases; contar apenas a mudança grande de um pacote | Tamanho mediano da mudança em linhas ou arquivos como medida de contexto; revisão de uma amostra de releases quanto a agrupamentos não relacionados; frequência ao lado do tamanho |
| Cobertura de feature flags | Acrescentar flags a mudanças triviais para elevar a taxa; sinalizar apenas as mudanças seguras e liberar as arriscadas sem flag; criar uma flag sem como desligá-la na prática | Resultados de testes de flag desligada para uma amostra de flags; a contagem de flags obsoletas; causas de incidentes que não tinham flag |
| Contagem de flags obsoletas | Reetiquetar flags de release como permanentes para sair da contagem de obsoletas; apagar o registro da flag deixando-a no código; estender datas de expiração sem revisão | Busca periódica no código contra o registro; revisão de toda mudança de tipo de flag; a idade da flag de release mais antiga |

Uma leitura saudável mostra implantações correndo à frente dos releases nos serviços que usam flags, com um intervalo modesto, um tamanho de lote pequeno e estável e um 85º percentil de lead time não muito acima da mediana. A cobertura de flags é alta para as mudanças arriscadas, e a contagem de flags obsoletas é baixa ou está caindo. Uma leitura que parece boa demais, como uma frequência alta junto com lotes crescentes ou uma contagem de obsoletas zero com uma contagem crescente de flags permanentes, merece uma auditoria amostral antes de qualquer comemoração.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Implantar continuamente e liberar por flag | Pequeno risco técnico por implantação; o momento do release vira escolha de negócio; desligamento rápido | Exige disciplina e ferramentas de flags; acrescenta caminhos de código que precisam ser testados e removidos |
| Acoplar implantação e release | Simples de explicar; um só evento a contar; sem dívida de flags | Todo release carrega o risco técnico e o do usuário, o que estimula lotes grandes liberados raramente |
| Trem de releases programado | Previsível para o suporte e os reguladores | As mudanças esperam o próximo trem; a contagem reflete o calendário, não a capacidade |
| Rollout progressivo por porcentagem | Limita o efeito de um release ruim; produz evidência em cada estágio | Exige boa telemetria e uma verificação de saúde; versões misturadas podem rodar lado a lado por um tempo |
| Contar implantações e releases | Mostra o desacoplamento e a espera | Exige juntar um registro de auditoria de flags ou registros de releases ao pipeline |

Um serviço que ainda não consegue desacoplar implantação e release, por exemplo um aplicativo móvel distribuído por revisão de loja de aplicativos, deve medir o que puder: frequência de release, lead time de release e tamanho do lote, com o tempo de revisão da loja relatado como espera separada.

## Perguntas para discutir com sua equipe

**1. Usamos as palavras "implantação" e "release" para o mesmo evento, e isso combina com o que acontece?**
Peça a três pessoas que descrevam a última mudança que foi ao ar e anotem quando o código chegou e quando os usuários puderam usá-la pela primeira vez. O facilitador deve ajudar o grupo a combinar uma frase para cada termo e decidir qual dos dois eventos cada número existente nos painéis mede.

**2. Qual é o maior tempo que uma mudança pronta esperou por um release, e por quê?**
Puxe a mudança mesclada mais antiga que os usuários ainda não conseguem alcançar. Rastreie seu caminho da mesclagem até agora e escreva cada espera ao longo dele.

**3. Se a nossa contagem de implantações dobrasse, o que conferiríamos antes de chamar de boa notícia?**
Convide o grupo a nomear formas de a contagem subir sem que mais valor chegue aos usuários. Olhem o tamanho do lote, a proporção de implantações com uma mudança visível ao usuário e as cifras de falha e retrabalho. O facilitador deve notar quais dessas verificações já existem no painel e quais precisam ser acrescentadas antes de alguém definir uma meta.

**4. Quais das nossas flags teríamos medo de apagar, e o que isso nos diz?**
Percorram o registro de flags e escolham as três mais antigas. Perguntem quem é dono de cada uma, o que protege e o que aconteceria se fosse removida. O medo de apagar geralmente significa um teste ausente, um responsável ausente ou um registro de propósito ausente. Combinem uma data de remoção para pelo menos uma e a verificação que tornaria segura a remoção.

**5. Quem decide quando uma mudança é liberada, e essa pessoa tem as informações de que precisa?**
Onde o release é uma escolha de negócio, quem a faz precisa ver o estado do rollout, os sinais de saúde e a prontidão do suporte. Perguntem onde esses fatos estão hoje e com que rapidez quem decide pode reverter um release.

**6. Qual release do último trimestre correu pior, e qual medida nos teria avisado?**
Escolham um release que causou problemas e leiam a linha do tempo juntos. Perguntem se o lote era grande, se o intervalo era longo, se o rollout tinha estágios e se uma flag poderia ter limitado o dano. Escolham uma medida a acrescentar ou um limiar a apertar como resultado.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega usam estas medidas para ver se seu pipeline e suas flags realmente lhes dão controle sobre a exposição. As visões mais úteis são o intervalo, o tamanho do lote e a idade da mudança em espera mais antiga, porque cada uma aponta para algo que a equipe pode mudar.

### Equipes de serviço e operações

As equipes de operações e de suporte se importam com o que muda em produção e quando. Os eventos de release e as mudanças de flag precisam ser visíveis para elas, idealmente com um identificador de release em cada incidente. Os rollouts em estágios e o desligamento rápido reduzem o número de incidentes que exigem um restabelecimento completo, e as medidas ajudam as equipes de operações a pedir os controles que tornam seu trabalho mais tranquilo.

### Liderança e governança

Os líderes devem pedir tendências e dispersão de cada serviço e a resposta a uma pergunta simples: quanto tempo leva para uma mudança pronta chegar aos usuários, e com que segurança. Uma meta de frequência de implantação entre equipes convida à divisão e ao rebatismo; por isso prefira metas de resultados, como distribuições de lead time, e a remoção de esperas conhecidas. A governança pode reduzir a carga de aprovações de release pré-autorizando mudanças sinalizadas de baixo risco, desde que a trilha de auditoria das flags esteja completa (veja o tópico 4.3, Métricas de habilitação de mudanças).

### Clientes e usuários

Os clientes veem releases, não implantações. Importam-se com que as correções cheguem logo, que o novo comportamento não os surpreenda e que uma mudança ruim possa ser revertida depressa. Uma equipe que separa os dois eventos pode dar aos clientes acesso antecipado a uma funcionalidade, pode anunciar uma data que consegue cumprir e pode reverter uma funcionalidade sem perder o resto. Pareie estas medidas com as voltadas ao cliente (veja o tópico 5.3, Métricas de disponibilidade, e o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line regional opera um serviço de busca de produtos pertencente a uma equipe de produto, com apoio de uma equipe de plataforma e da central de serviços. O serviço é implantado em produção por um pipeline e tem um serviço de flags introduzido há seis meses. Todos os números abaixo são ilustrativos.

No último trimestre, a equipe fez 52 implantações em produção, cerca de quatro por semana. A frequência de release, contada como os momentos em que uma mudança passou a ser alcançável por todos os usuários pretendidos, foi de 11 no mesmo trimestre, cerca de um por semana. A mediana do lead time de release, da mesclagem ao release, foi de 9 dias, com um 85º percentil de 21 dias. A mediana do intervalo entre implantação e release foi de 6 dias. A mediana do tamanho do lote de release foi de 3 mudanças, e o 85º percentil, 14. A cobertura de flags das mudanças visíveis ao usuário foi de 58%, e 17 flags de release estavam mais de 30 dias além do rollout completo.

O risco de manipulação já é visível. Algumas implantações eram só de configuração, e o pipeline contava cada uma como implantação; por isso o painel agora mostra uma série separada de configuração, e a revisão mensal amostra 10 implantações em busca de uma mudança visível ao usuário. Um gerente regional vê a contagem de implantações e pede à equipe que a eleve para igualar a cifra de outra equipe. O líder da equipe resiste à meta e leva o conjunto completo de números à revisão mensal. A revisão descobre que o intervalo é longo porque os releases esperam uma reunião semanal de marketing e suporte, que quatro das 17 flags obsoletas protegem caminhos de código que ninguém testou e que o 85º percentil do tamanho do lote vem de alguns releases que agruparam mudanças não relacionadas antes de um congelamento de feriado.

A decisão, registrada no registro de decisões, tem quatro partes. O suporte e o marketing participarão de uma reunião mais curta, duas vezes por semana, para que a decisão de release deixe de esperar o horário semanal. Toda flag de release recebe um responsável e uma data de remoção, e as quatro flags obsoletas sem teste são removidas nas duas semanas seguintes. Os releases que agrupam mudanças não relacionadas precisam de um motivo declarado no registro do release. E a equipe recusa a meta comum de implantações, oferecendo em seu lugar uma visão compartilhada da distribuição do lead time de release e da higiene de flags de cada serviço. O gerente de mudanças concorda em tratar as mudanças sinalizadas que passam nas verificações do pipeline como mudanças padrão, com revisão no trimestre seguinte. No trimestre seguinte (ilustrativo), a mediana do lead time de release cai para 5 dias, a contagem de flags obsoletas cai para 6 e a taxa de falha de mudanças se mantém estável; por isso o experimento continua.

## Ágil, IA, automação e análise

### Ágil

Separar a implantação do release permite a uma equipe enviar pequenas mudanças continuamente e liberar quando as partes interessadas estiverem prontas. Reveja a higiene das flags regularmente. O cuidado é que contar implantações premia a divisão das mudanças.

### IA

A codificação assistida por IA pode elevar as contagens de implantação e os tamanhos de lote. Pareie a frequência com a recuperação de implantações com falha e a contagem de flags obsoletas e marque as mudanças assistidas por IA nos dados. O cuidado é que mais implantações com mais retrabalho não são progresso.

### Automação

Conte implantações e releases a partir de eventos do pipeline e automatize lembretes de limpeza de flags. Meça o pipeline pela própria taxa de falha. O cuidado é que releases manuais fora do pipeline somem dos dados.

### Análise

Mostre a frequência com o lead time e o tamanho do lote, e o intervalo entre implantação e release. A decisão informada é onde o caminho até os usuários é lento. O cuidado é que as definições de implantação variam entre equipes.

## Olhar setorial

**Startup.** Uma startup costuma ter um único serviço e uma biblioteca de flags no código; por isso a implantação e o release podem ser separados a baixo custo. Mantenha um registro simples de flags com datas de expiração e espere um volume suficiente antes de confiar nos percentis.

**Pequena empresa.** Uma pequena empresa pode operar software em pacote ou comprado, em que o fornecedor controla o release. As medidas úteis são o tempo entre o release do fornecedor e a adoção pela empresa e o lote de mudanças que chega junto em uma versão principal. Registre as datas de release do fornecedor e as suas datas de implantação para que a espera entre elas fique visível.

**Grande empresa.** Uma grande empresa enfrenta muitos serviços em estilos de release diferentes, um processo central de mudanças e ambientes compartilhados. O trabalho principal é combinar as definições de implantação e de release entre equipes e fornecedores e manter uma consolidação que respeite as diferenças. Use dispersão e tendências para a governança e trate a plataforma de flags como um serviço compartilhado com um responsável.

**Governo e setor público.** Os releases muitas vezes são atrelados a datas fixas, legislação, ciclos de compras ou portões de garantia; por isso a frequência de release pode ser baixa por boas razões. A frequência de implantação e o intervalo entre implantação e release ainda podem mostrar quanto do risco foi assumido cedo e quanto espera pela data. Relate a espera por portões externos separadamente do tempo de pipeline da própria equipe.

## Business case: motivações, ROI e TCO

A motivação para estas medidas é reduzir o risco e o atraso entre terminar uma mudança e entregar seu valor. Lotes grandes liberados raramente carregam mais mudança por evento; por isso uma falha é mais difícil de diagnosticar e de reverter. Separar a implantação do release dá à equipe um modo de assumir o risco técnico cedo e em pequenas quantidades e de assumir o risco do usuário de forma deliberada. As medidas mostram se a separação é real e onde a mudança está esperando.

Os custos são moderados. Coletar eventos de implantação e de release exige o registro do pipeline e o registro de auditoria das flags cruzados com o controle de versão e o rastreador de issues, o que é uma integração única seguida de manutenção ocasional (veja o tópico 1.5, Fontes de dados e instrumentação). A própria prática de flags tem custos de operação: a plataforma ou a biblioteca, o registro, o teste dos dois caminhos de uma mudança sinalizada e a limpeza das flags expiradas. O principal custo escondido é a dívida de flags, que a contagem de flags obsoletas mantém visível.

O retorno segue um padrão que a maioria das equipes pode observar nos próprios dados. Um lead time de release mais curto significa um ciclo de feedback mais rápido sobre se uma mudança ajuda os usuários. Lotes menores significam diagnóstico mais fácil e reversão mais fácil. Um intervalo menor entre implantação e release significa menos tempo em que o trabalho pronto fica sem se realizar. Não invente uma cifra para o valor. Use os exemplos da própria equipe de mudanças que ficaram semanas no escuro e a tendência das suas próprias medidas.

## Antipadrões e armadilhas

- **Definir uma meta de frequência de implantação para toda equipe.** Convida à divisão e ao rebatismo. Defina metas de resultado, como uma distribuição de lead time mais estreita, e deixe a frequência vir em consequência.
- **Tratar um trem de releases como prova de capacidade.** Um calendário fixo dá uma contagem estável e esconde a idade do trabalho em espera. Acompanhe a idade da mudança mesclada mais antiga que os usuários não conseguem alcançar.
- **Contar mudanças de configuração como implantações na série principal.** Infla o número. Mantenha uma série separada e mostre-a ao lado da principal.
- **Nunca remover flags.** O código acumula ramos mortos e combinações não testadas. Dê a toda flag de release um responsável e uma data de remoção e trate a remoção como parte do pronto.
- **Mudar flags em produção sem registro.** Uma mudança de flag é uma mudança no comportamento da produção. Envie-a ao registro de auditoria e torne-a visível para a habilitação de mudanças.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | "Implantação" e "release" são usados de forma intercambiável; cada pessoa conta de um jeito | Algumas equipes escrevem as próprias definições | Uma definição escrita de implantação e de release, com relógios e exclusões, no registro de métricas | Mudanças de definição registradas e marcadas nos gráficos; amostras conferidas a cada trimestre | Definições revistas em conjunto com fornecedores e a governança quando deixam de informar decisões |
| Separação entre implantação e release | Toda implantação é um release | Algumas equipes usam flags ou rollouts em estágios para mudanças arriscadas | Flags e rollouts em estágios são uma opção padrão, com eventos de release registrados | Intervalo, tamanho do lote e estágios do rollout acompanhados ao longo do tempo e revistos | O momento do release é coordenado entre equipes e fornecedores para serviços relacionados |
| Captura de dados | Contagens montadas à mão a partir de tickets e chat | Dados do pipeline para alguns serviços; releases registrados à mão | Implantações, releases e mudanças de flag capturados automaticamente na maioria dos serviços | Qualidade dos dados (taxa de vínculo, auditoria de amostras) medida e acompanhada | Eventos compartilhados entre equipes e fornecedores por interfaces combinadas |
| Higiene das flags | Sem inventário | Lista informal em algumas equipes | Registro com responsável, tipo e data de expiração para toda flag de release | Contagem de flags obsoletas acompanhada; a remoção é parte do pronto e é conferida | Plataforma de flags gerida como um serviço compartilhado com lembretes automáticos de expiração |
| Uso dos números | Relatados para cima como uma única contagem | As equipes olham seus gráficos ocasionalmente | Revistos mensalmente pela equipe dona, ao lado das cifras de falha e retrabalho | As tendências alimentam melhorias financiadas com uma barreira de proteção | Dispersão e tendências informam o investimento em plataforma e a política de mudanças em toda a organização |

## Lista de verificação

- [ ] "Implantação" e "release" estão definidos por escrito, com os eventos de relógio e as exclusões de cada um.
- [ ] As implantações em produção são capturadas automaticamente do pipeline, com os ambientes de teste excluídos.
- [ ] Os eventos de release são capturados do registro de auditoria de flags, dos estágios de rollout ou dos registros de releases.
- [ ] O lead time de release usa um início de relógio declarado e relata a mediana e o 85º percentil.
- [ ] O intervalo entre implantação e release e o tamanho do lote de release são relatados ao lado da frequência.
- [ ] As implantações só de configuração aparecem em uma série separada.
- [ ] Toda flag de release tem um responsável, um tipo e uma data de expiração em um registro.
- [ ] As flags obsoletas são revistas mensalmente e sua remoção é parte do pronto.
- [ ] Os identificadores de release aparecem nos registros de incidentes e de mudanças.
- [ ] Uma amostra de implantações e de releases é auditada a cada trimestre contra as definições.
- [ ] Um experimento de melhoria, ligado à espera mais longa, está em andamento com uma data de revisão.

## Prompts de IA

**Redija definições de implantação e de release para um serviço.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Confira um conjunto de métricas de release quanto a riscos de manipulação.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Analise uma exportação de implantações, releases e flags.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Planeje um experimento de limpeza de flags e de espera de release.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados de mudanças, releases e incidentes e a barreira de proteção que deve ficar ao lado de cada métrica de release.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma versão revista deste tópico mantém coerentes seus relógios, vetores de manipulação e referências cruzadas.

## Ideias-chave

- Uma implantação põe uma versão em um ambiente, e um release torna uma mudança alcançável pelos usuários. Meça os dois separadamente sempre que puder.
- O lead time de release deve terminar no release, com um início declarado, e ser relatado como mediana e 85º percentil.
- O intervalo entre implantação e release e o tamanho do lote mostram se o desacoplamento é real e protegem a frequência contra a divisão e o rebatismo.
- As feature flags tornam possível a separação e têm um custo; por isso acompanhe a cobertura e as flags obsoletas com responsáveis e datas de expiração.
- Conte por regras escritas, ligue os releases a incidentes e mudanças e compare um serviço com o próprio histórico, e não com outras equipes.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Implantação de software](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Gestão de releases](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Release canário](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Implantação blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
