# Métricas de monitoramento e qualidade de alertas

**Um alerta é um pedido da atenção de uma pessoa; por isso meça o monitoramento pela frequência com que esse pedido valeu a pena, por quanto dos problemas reais ele pegou e por quanto sono e confiança custou.**

## Visão geral e motivação

Monitoramento é a coleta, o processamento e a exibição de dados em tempo real sobre um sistema. O [monitoramento de sistemas](https://en.wikipedia.org/wiki/System_monitoring) responde à pergunta "o serviço está funcionando do modo como os usuários precisam?". Um alerta é o ponto em que esses dados pedem a um humano que faça algo. A maioria das equipes mede mal, ou não mede, a primeira atividade e mede a segunda apenas por reclamações. Este tópico dá um pequeno conjunto de medidas para as duas: se o monitoramento enxerga as falhas que importam e se os alertas que levanta merecem a atenção que exigem.

Alguns termos primeiro. No vocabulário do ITIL 4, um evento é uma mudança de estado que tem significado para a gestão de um serviço, e a gestão de eventos é a prática de detectar eventos, decidir quais importam e escolher a resposta. Um alerta é uma notificação a um humano, entregue como um acionamento (page), uma mensagem ou um ticket. Um page é um alerta que interrompe alguém imediatamente. Um falso positivo é um alerta que disparou quando nada precisava de atenção, e um falso negativo é uma falha que nenhum alerta relatou; os dois termos vêm da linguagem de [falsos positivos e falsos negativos](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Um alerta acionável é aquele em que uma pessoa tinha uma ação útil a tomar e a tomou, ou escolheu deliberadamente não tomá-la por um motivo registrado.

Os dois lados do monitoramento puxam em direções opostas. Acrescentar alertas depois de cada incidente constrói uma parede de ruído; cortá-los para acalmá-lo arrisca o silêncio durante a falha que importa. A linguagem de [precisão e revocação (precision and recall)](https://en.wikipedia.org/wiki/Precision_and_recall) se encaixa bem. A precisão pergunta que proporção dos alertas levantados valeu a pena levantar. A revocação pergunta que proporção dos problemas reais os alertas pegaram. A qualidade dos alertas é o equilíbrio entre as duas, e uma métrica que observa só uma convida a equipe a sacrificar a outra. A [relação sinal-ruído](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) capta a mesma tensão.

O custo humano é a razão de isso pertencer a um livro de métricas de serviço. A [fadiga de alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue) é a tendência bem documentada de pessoas expostas a muitos alarmes, a maioria sem importância, de se dessensibilizarem e demorarem a responder aos que importam. Foi estudada primeiro em ambientes clínicos e se aplica a qualquer rodízio de [plantão (on-call)](https://en.wikipedia.org/wiki/On-call) acionado com frequência demais por alertas que não levam a lugar nenhum. Quem responde fatigado perde incidentes reais e acaba saindo do rodízio.

As visões diferem entre as duas tradições que este livro une. O ITIL 4 coloca este trabalho na prática de monitoramento e gestão de eventos, com ligações à gestão de incidentes e à gestão de nível de serviço. Sua preocupação é que os eventos sejam detectados, classificados e roteados para que os incidentes sejam encontrados cedo e tratados de modo consistente. A [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) chega pelo outro extremo: o livro *Site Reliability Engineering*, do Google, argumenta que os acionamentos devem ser urgentes, importantes, acionáveis e reais, e que todo o resto pertence a um ticket ou a um painel. As equipes ágeis o encontram como um acordo de trabalho: quem é acordado, por quê e quem corrige um alerta errado. As métricas abaixo tomam emprestado das três e mantêm uma regra: uma métrica descreve um rodízio, um serviço ou uma regra de alerta, nunca um indivíduo.

Este tópico não repete seus vizinhos. Os tempos de incidentes pertencem ao tópico 3.3, Tempo de resposta e de resolução de incidentes, os incidentes graves ao tópico 3.4, Métricas de incidentes graves, os objetivos e orçamentos de erro ao tópico 5.2, SLIs, SLOs e orçamentos de erro, e a carga humana ao tópico 5.7, Métricas de trabalho repetitivo e plantão. Aqui o assunto é a qualidade do sinal que inicia todos eles. A instrumentação é coberta no tópico 1.5, Fontes de dados e instrumentação.

## Princípios-chave

- **Acione por sintomas que os usuários sentem; o resto vai para ticket ou painel.** Um alerta sobre o que os usuários experimentam (erros, lentidão, indisponibilidade) continua útil enquanto o sistema muda. Um alerta sobre uma causa (um disco cheio, uma CPU ocupada) só é útil quando prevê um sintoma e uma pessoa pode agir antes que ele chegue.
- **Todo alerta deve levar a uma ação.** Se a resposta certa a um alerta é não fazer nada, o alerta deve ser mudado, rebaixado a ticket ou apagado. Meça a proporção que leva a ação e trate o resto como defeitos do monitoramento.
- **Meça tanto a precisão quanto a revocação.** Contar só o ruído premia o silêncio, e contar só a cobertura premia o volume. As duas juntas descrevem a qualidade, e cada uma funciona como barreira de proteção da outra.
- **Trate toda regra de alerta como um produto com um responsável.** Uma regra tem um propósito, um limiar, um runbook e uma data de revisão. As regras sem dono se acumulam, e o ruído que produzem não pertence a ninguém.
- **Relate rodízios e serviços, nunca pessoas.** A carga de alertas é uma propriedade de como o sistema e o rodízio são projetados. Nomear indivíduos transforma um problema de projeto em problema de culpa e esconde a correção real.

## Definições de métricas

As métricas abaixo foram escolhidas como um conjunto. O volume sozinho não significa nada, a acionabilidade diz se o volume é um problema, e a cobertura e o tempo de detecção dizem o que o silêncio está escondendo. Todas são calculadas por serviço ou por rodízio, e todas usam o registro de alertas das ferramentas de monitoramento e de acionamento cruzado com os registros de incidentes e de tickets.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de alertas | Número de alertas que notificaram um humano, dividido em pages e tickets | Contagem de notificações distintas entregues a um rodízio ou fila no período; repetições do mesmo alerta aberto são agrupadas em uma; alertas tratados inteiramente por automação sem notificação humana são excluídos; relate por rodízio por semana e a parcela fora do expediente separadamente | alertas por rodízio-semana | Ferramenta de acionamento e roteamento de alertas | Monitoramento e gestão de eventos | Acordo de trabalho da equipe sobre plantão | Semanal |
| Taxa de alertas acionáveis | Proporção dos alertas após os quais uma pessoa tomou uma ação útil | Alertas com uma ação registrada (correção, mitigação, escalonamento ou uma mudança na regra do alerta) / alertas revistos no período; alertas resolvidos automaticamente antes de qualquer reconhecimento são contados como não acionáveis; alertas não revistos são relatados como uma contagem separada, e não descartados | porcentagem | Registro de alertas cruzado com o rótulo de revisão, o ticket ou o incidente | Monitoramento e gestão de eventos; gestão de incidentes | Ação de melhoria da equipe sobre operações | Revisão semanal, tendência mensal |
| Taxa de falsos positivos | Proporção dos alertas que dispararam quando não havia problema | Alertas rotulados como falso positivo na revisão / alertas revistos no período; "falso positivo" significa que a condição não era uma falha e ninguém gostaria de ser avisado; um problema real pequeno demais para agir não é um falso positivo | porcentagem | Rótulos de revisão dos alertas | Monitoramento e gestão de eventos | Revisão de ruído na retrospectiva | Mensal |
| Cobertura de detecção | Proporção dos serviços no escopo que têm pelo menos um alerta testado sobre um sintoma voltado ao usuário | Serviços com um alerta de sintoma exercitado por um teste ou por um evento real nos últimos 12 meses / serviços no escopo do catálogo de serviços; a lista de serviços no escopo é fixada no início do período | porcentagem | Catálogo de serviços, inventário de regras de alerta, registros de testes | Gestão de configuração de serviço; monitoramento e gestão de eventos | Definição de pronto para um novo serviço | Trimestral |
| Parcela de detecção por monitoramento | Proporção dos incidentes que o monitoramento detectou antes de um usuário ou colega relatá-los | Incidentes cujo primeiro sinal foi um alerta / incidentes no período; o relógio é o horário de abertura do incidente, e incidentes sem primeiro sinal registrado são relatados como desconhecidos, e não como detectados | porcentagem | Registro do incidente com campo de primeiro sinal, linha do tempo dos alertas | Gestão de incidentes | Revisão de incidentes (aprendizado pós-incidente) | Mensal |
| Tempo até detectar (TTD) | Tempo decorrido entre o início do impacto sobre o usuário e o primeiro alerta que notificou um humano | Horário do primeiro alerta que notificou um humano menos o horário de início do impacto, em que o início do impacto é o primeiro momento em que o indicador de nível de serviço foi violado, como estabelecido na revisão do incidente; relate a mediana e o 95º percentil; incidentes sem alerta são excluídos e contados à parte | minutos | Revisão do incidente, linha do tempo dos alertas, histórico do indicador de nível de serviço | Gestão de incidentes; monitoramento e gestão de eventos | Revisão pós-incidente | Mensal, por incidente |
| Concentração de alertas | Proporção do volume de alertas produzida pelas poucas regras de alerta mais ruidosas | Alertas das cinco regras com mais alertas / todos os alertas no período; o mesmo alerta agrupado uma só vez; a contagem de cinco regras é uma convenção que uma equipe pode mudar se declarar o motivo | porcentagem | Inventário de regras de alerta e registro de acionamentos | Melhoria contínua; monitoramento e gestão de eventos | Backlog de melhorias da retrospectiva | Mensal |
| Atualidade das regras de alerta | Proporção das regras de acionamento que têm um responsável, um link de runbook e uma revisão dentro do intervalo combinado | Regras de acionamento que atendem às três condições / todas as regras de acionamento; regras desativadas no período são excluídas | porcentagem | Inventário de regras de alerta | Gestão do conhecimento; monitoramento e gestão de eventos | Acordo de trabalho sobre prontidão operacional | Trimestral |

O volume de alertas precisa de contexto; por isso leia-o ao lado da taxa de alertas acionáveis. O tempo até detectar usa o início do impacto sobre o usuário, e não o ticket, porque o relógio do ticket começa depois da detecção; o início do impacto é uma estimativa tirada da revisão do incidente e deve ser rotulado como tal. A taxa de falsos positivos e a taxa de alertas acionáveis não são complementares, porque um alerta pode ser verdadeiro e ainda assim não valer o tempo de uma pessoa.

## Recomendações

### Decida o que merece um acionamento

**1. Escreva uma política de acionamento e mantenha-a curta.** Declare em um parágrafo o que merece um page (um sintoma que os usuários sentem agora ou sentirão em breve e que uma pessoa pode tratar) e o que não merece. Todo o resto vai para uma fila de tickets ou para um painel. O capítulo do livro de SRE do Google sobre monitoramento de sistemas distribuídos é um bom ponto de partida (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro).

**2. Alerte sobre sintomas e guarde as causas para o diagnóstico.** Um page de "taxa de erros acima do limiar combinado" é um page sobre os usuários. Um page de "a CPU está alta" é um page sobre um palpite. Mantenha os sinais de nível de causa em painéis onde quem responde olhará depois que o alerta de sintoma tiver disparado, e promova um a page só quando ele prever com confiabilidade um sintoma com aviso suficiente para agir.

**3. Ligue os limiares de acionamento ao objetivo de nível de serviço.** Onde um serviço tem um [objetivo de nível de serviço (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), alerte sobre a taxa em que o orçamento de erro está sendo consumido em vez de sobre limiares brutos. O capítulo do SRE Workbook sobre alertas em SLOs descreve os alertas de taxa de consumo e as compensações entre precisão, revocação, tempo de detecção e tempo de reinício. Essa abordagem aciona sobre o que ameaça o objetivo e fica quieta com oscilações breves que não ameaçam.

### Reveja todo alerta em um ritmo

**4. Rotule todo alerta numa revisão curta e regular.** Reserve quinze minutos por semana, para cada rodízio, para olhar o que disparou. Para cada alerta, registre um rótulo: acionável, falso positivo, real mas não vale um page ou duplicado. Os rótulos são os dados da taxa de alertas acionáveis e da taxa de falsos positivos, e a revisão é o lugar onde as regras ruidosas são corrigidas no dia seguinte e não no próximo trimestre.

**5. Faça a revisão produzir uma mudança.** Toda semana, escolha pelo menos uma regra para ajustar, rebaixar, fundir ou apagar e registre a mudança no backlog da equipe como trabalho comum.

**6. Apague sem medo.** As equipes mantêm alertas porque apagar um parece arriscado e ninguém lembra por que ele existe. Exija que toda regra de acionamento carregue um propósito e um responsável e combine que uma regra que nunca levou a ação num período declarado seja removida ou rebaixada, com a mudança registrada para poder ser revertida. A métrica de atualidade das regras torna visível a disciplina.

### Meça o que o monitoramento perde

**7. Acompanhe a proporção dos incidentes que os usuários encontraram primeiro.** Depois de cada incidente, registre como foi percebido pela primeira vez: um alerta, um colega, um cliente, um ticket de suporte ou uma verificação de rotina. A proporção encontrada pelo monitoramento é a medida prática mais próxima da revocação. Não é completa, porque os incidentes que ninguém percebeu nunca entram na amostra; por isso pareie-a com testes periódicos dos próprios alertas.

**8. Estime com honestidade o tempo até detectar.** Estabeleça o início do impacto sobre o usuário na revisão pós-incidente a partir do histórico do indicador de nível de serviço, e não de quando alguém digitou o ticket. Relate a mediana e um percentil alto e mostre os incidentes que não tiveram nenhum alerta como contagem separada. Uma média única esconde tanto o caso típico quanto a cauda ruim (veja o tópico 1.6, Letramento estatístico para métricas de serviço, e o tópico 3.3, Tempo de resposta e de resolução de incidentes).

**9. Teste os alertas de que você depende.** A cobertura de detecção só é crível se o alerta foi visto funcionando. Inclua em game days ou ensaios de release uma verificação que cause deliberadamente um sintoma e confirme que o alerta certo dispara, chega ao rodízio certo e se liga a um runbook utilizável. Um alerta que nunca foi exercitado é uma esperança, e não um controle (veja o tópico 5.6, Métricas de continuidade de serviço).

### Mantenha saudável o caminho do sinal

**10. Monitore o monitoramento.** Uma falha silenciosa do sistema de monitoramento é idêntica a um serviço saudável. Acrescente uma verificação de batimento (heartbeat) que acione se o pipeline de alertas deixar de entregar e registre com que frequência o próprio pipeline falha.

**11. Agrupe, deduplique e ligue antes de contar.** Agrupe alertas relacionados em um, suprima as repetições de um alerta já aberto e roteie cada um para o rodízio responsável. Ligue cada alerta ao seu runbook e ao incidente ou ticket que criou, porque essa junção é o que permite calcular a taxa de alertas acionáveis e a parcela de detecção por monitoramento sem contagem manual (veja o tópico 1.5, Fontes de dados e instrumentação).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Volume de alertas | Elevar limiares, acrescentar longos atrasos ou mover alertas de pages para uma fila silenciosa para que a contagem caia enquanto os problemas passam despercebidos; dividir ou fundir alertas para mudar a contagem | Parcela de detecção por monitoramento e tempo até detectar; uma regra de que todo rebaixamento seja registrado com seu motivo e revisto após um trimestre |
| Taxa de alertas acionáveis | Rotular alertas como acionáveis depois do fato, ou tomar uma ação trivial (um comentário, um reconhecimento) para qualificar; deixar alertas ruidosos sem revisão para que nunca entrem no denominador | A contagem de alertas não revistos mostrada ao lado da taxa; uma conferência amostral por alguém de fora do rodízio; uma definição escrita de "ação útil" |
| Taxa de falsos positivos | Definir falsos positivos de modo estreito para que alertas "reais mas sem sentido" contem como verdadeiros; encerrar alertas ruidosos sem rótulo | Taxa de alertas acionáveis e o rótulo "real mas não vale um page" acompanhados separadamente; amostragem periódica dos alertas encerrados |
| Cobertura de detecção | Acrescentar um alerta trivial (um ping) a cada serviço para alegar cobertura; contar alertas que nunca foram testados | A exigência de que o alerta observe um sintoma voltado ao usuário e tenha sido exercitado nos últimos 12 meses; parcela de detecção por monitoramento |
| Parcela de detecção por monitoramento | Registrar todo incidente como "detectado por monitoramento" mesmo quando um usuário relatou primeiro; criar um alerta depois do fato e citá-lo; deixar vazio o campo de primeiro sinal para evitar um número ruim | A contagem de desconhecidos mostrada ao lado da parcela; evidência do primeiro sinal tirada da linha do tempo dos alertas, e não da memória; incidentes relatados por clientes ligados a partir do registro de suporte |
| Tempo até detectar (TTD) | Declarar o início do impacto mais tarde do que foi; excluir incidentes sem alerta; relatar a média para esconder a cauda | Início do impacto tirado do histórico do indicador de nível de serviço; os incidentes sem alerta contados e mostrados; mediana e 95º percentil relatados juntos |
| Concentração de alertas | Dividir uma regra ruidosa em várias para que nenhuma esteja entre as cinco principais; renomear regras | Relatar a concentração pela falha ou serviço subjacente além de por regra; acompanhar o volume total e a taxa de alertas acionáveis ao lado |
| Atualidade das regras de alerta | Acrescentar responsáveis de fachada, links de runbook vazios ou uma revisão de carimbo para atender à condição | Uma conferência pontual de que o link do runbook resolve e foi usado em uma resposta real; a prática de testar o runbook em game days |

Uma leitura saudável mostra várias coisas juntas. O volume de alertas por rodízio é estável ou está caindo e fica dentro de um nível que a equipe escolheu como sustentável. A taxa de alertas acionáveis sobe ao longo de vários meses conforme as regras mais ruidosas são ajustadas. A parcela de detecção por monitoramento é alta, e o tempo até detectar é curto e não aumenta enquanto o volume cai, o que prova que a quietude foi conquistada e não comprada. A cobertura de detecção cresce porque os serviços são testados, e não porque alertas triviais foram acrescentados. Se o volume cai enquanto a parcela de detecção ou o tempo até detectar piora, a equipe trocou revocação por paz, e as barreiras de proteção é que revelam isso.

## Compensações: vantagens e desvantagens

| Abordagem | Vantagens | Desvantagens |
| --- | --- | --- |
| Poucos pages, baseados em sintomas | Noites tranquilas, alta confiança em cada page, fáceis de manter atuais | Risco de detecção tardia de problemas que se formam devagar; exige bons hábitos de tickets e painéis para o resto |
| Muitos alertas sensíveis | Alerta precoce de problemas em nível de causa; menos incidentes perdidos | Fadiga de alarmes, reconhecimento mais lento e evasão dos rodízios de plantão |
| Alertas por taxa de consumo do SLO | Pages ligados ao que ameaça o objetivo; menos oscilações | Exigem bons indicadores e um objetivo combinado; precisam de ajuste para equilibrar o tempo de detecção e a precisão |
| Revisão semanal de alertas | Feedback rápido; regras ruidosas corrigidas depressa | Custa tempo toda semana; vira teatro se nenhuma mudança se segue |
| Rotulagem por humanos | Capta o julgamento que nenhuma ferramenta tem | Subjetiva; os rótulos derivam entre revisores e rodízios a menos que as definições sejam escritas |
| Supressão e agrupamento automatizados | Cortam o ruído em escala; reduzem pages repetidos | Podem esconder sinais reais se as regras estiverem erradas; precisam de monitoramento e revisão próprios |

Toda escolha compensa precisão contra revocação, e a compensação deve ser feita de propósito e escrita por serviço, porque é o contexto que permite a qualquer pessoa ler os números com justiça. Um serviço com consequências severas por uma falha perdida pode aceitar uma taxa acionável menor em troca de um aviso mais precoce, com uma camada de triagem que manda os alertas extras para uma fila de tickets à noite.

## Perguntas para discutir com sua equipe

**1. Por que gostaríamos de ser acordados, e quais dos pages do mês passado atenderam a esse padrão?** Escrevam a política de acionamento em uma ou duas frases e depois peguem os pages do mês passado e testem cada um contra ela. O exercício vale mais que a porcentagem que produz, porque as discordâncias revelam onde as expectativas da equipe diferem. Registrem os desnecessários como candidatos a rebaixar.

**2. Se a regra de alerta mais ruidosa desaparecesse amanhã, o que perderíamos?** Façam a pergunta para cada uma das cinco principais regras por volume. Muitas vezes ninguém consegue nomear uma falha específica que a regra tenha pego, e isso é sinal de que pode ser ajustada ou removida. Onde alguém consegue, perguntem se a falha também acionaria um alerta de sintoma.

**3. Como descobrimos o que o monitoramento perdeu?** Olhem os últimos incidentes e perguntem quem percebeu primeiro e quanto tempo o impacto durou antes disso. A resposta dá a parcela de detecção por monitoramento e um tempo até detectar aproximado sem novas ferramentas. Discutam que sinal teria pego cada um mais cedo.

**4. A nossa carga de plantão é sustentável, e como saberíamos?** Combinem o que significa sustentável para um rodízio, como um limite de pages fora do expediente por semana, e revejam a tendência por rodízio, e não por pessoa. Se a carga está acima do nível combinado, tratem-na como um defeito do serviço e planejem trabalho para reduzi-la. Mantenham as medidas consistentes com o tópico 5.7, Métricas de trabalho repetitivo e plantão.

**5. Quais dos nossos alertas nunca testamos, e como poderíamos testá-los com segurança?** Listem os serviços que dependem de um único alerta de sintoma e perguntem se alguém já o viu disparar de verdade ou em um ensaio. Planejem um teste e conferam o caminho completo: detecção, roteamento, notificação, runbook. Considerem se uma falha do pipeline de alertas seria visível.

**6. Como estes números poderiam ser manipulados aqui, e o que notaríamos?** Peçam à equipe que descreva, com honestidade, como poderia fazer cada cifra parecer melhor sem melhorar nada. Depois combinem qual barreira de proteção mostraria isso e quem a observa. Nomear os truques de antemão os torna menos tentadores (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Quatro perspectivas

### Equipes de produto e entrega

As equipes que constroem e operam um serviço decidem o que ele relata sobre si mesmo; por isso a qualidade dos alertas começa na definição de pronto. Uma nova funcionalidade que sai com seu próprio indicador e alerta testados evita um monitoramento remendado depois do primeiro incidente. Tratem o ajuste de alertas como trabalho comum do backlog.

### Equipes de serviço e operações

As equipes de operações carregam o pager e sentem o custo primeiro; por isso são donas do ritmo de revisão, da rotulagem e do batimento do pipeline. Quando um alerta está errado, a correção pertence ao dono da regra, e não a quem recebeu o page.

### Liderança e governança

Os líderes podem pedir cifras de detecção e de acionabilidade por serviço, financiar tempo de ajuste e resistir a uma meta de volume de alertas que premia o silêncio. Um volume em queda só é boa notícia se a parcela de detecção e o tempo até detectar se mantiverem estáveis. Os limites sustentáveis de plantão são uma decisão de dotação de pessoal e de projeto, e não motivacional.

### Clientes e usuários

Os clientes nunca veem um alerta; veem se o serviço falhou e quanto tempo levou para corrigir. O bom monitoramento aparece como incidentes corrigidos antes de eles notarem e menos casos em que um cliente relata primeiro. Onde a organização usa medidas de experiência (veja o tópico 5.1, Métricas de SLA, OLA e XLA), a proporção de incidentes relatados primeiro pelos usuários é um indicador direto da lacuna de experiência.

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma plataforma de pedidos com quatro equipes de produto e uma equipe de plataforma que apoia o rodízio de plantão. Todos os números deste exemplo são ilustrativos. Em quatro semanas (ilustrativo), o rodízio recebeu 240 pages, 70 deles entre 22h e 7h. A equipe revê todos os pages usando quatro rótulos: acionável, falso positivo, real mas não vale um page e duplicado.

A revisão mostra uma taxa de alertas acionáveis de 31% (ilustrativo) e uma taxa de falsos positivos de 22% (ilustrativo). Cinco regras produziram 58% dos pages (ilustrativo), e a maior foi um limiar de disco em um servidor de lotes que sempre se recuperava sozinho. A parcela de detecção por monitoramento do trimestre anterior foi de 62% (ilustrativo), e a mediana do tempo até detectar foi de 14 minutos (ilustrativo), com um 95º percentil de 51 minutos (ilustrativo).

A equipe rebaixa três regras ruidosas para uma fila de tickets, funde duplicatas para que uma falha produza um page, troca o alerta de contagem bruta de erros no checkout por um alerta de taxa de consumo do orçamento de erro (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) e acrescenta um alerta de sintoma para os e-mails de confirmação de pedidos, uma lacuna por trás de dois incidentes relatados por clientes. Cada mudança é um item de backlog com um responsável. Quatro semanas depois, os pages caem para 96 (ilustrativo) e a taxa acionável sobe para 64% (ilustrativo), enquanto a parcela de detecção sobe para 71% (ilustrativo) e a mediana do tempo até detectar se mantém em 14 minutos. A quietude parece conquistada.

O risco de manipulação aparece no terceiro mês. Um novo gerente define uma meta informal de menos de 60 pages por quatro semanas, e um rodízio a alcança alongando o atraso do alerta de erros do checkout. Sua parcela de detecção cai para 55% (ilustrativo), e seu 95º percentil do tempo até detectar sobe para 80 minutos (ilustrativo). Como as barreiras de proteção ficam ao lado do volume, a revisão pega o caso. A equipe retira a meta de volume, restaura o alerta e registra o caso no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Ágil, IA, automação e análise

### Ágil

Reveja os alertas em uma cadência regular como um produto usado por pessoas de plantão e aposente ou ajuste os ruidosos com as partes interessadas. O cuidado é que uma meta de cortar o volume de alertas pode remover alertas úteis.

### IA

A IA pode agrupar, resumir e classificar alertas e pode sugerir causas. Pareie a redução de ruído com a taxa de perda de incidentes reais e acompanhe a proporção dos agrupamentos da IA que uma pessoa dividiu ou fundiu. O cuidado é que a supressão por um modelo pode esconder um alerta raro mas sério.

### Automação

Conte os alertas automaticamente por regra e por resultado e meça a automação de alertas por erros de supressão. O cuidado é que alertas resolvidos automaticamente podem parecer sistemas saudáveis quando a regra está apenas oscilando.

### Análise

Relate a taxa de alertas acionáveis e a cobertura de detecção, com os incidentes percebidos primeiro pelos usuários. A decisão informada é quais alertas corrigir ou remover. O cuidado é que a cobertura medida contra incidentes conhecidos ignora modos de falha que ninguém viu ainda.

## Olhar setorial

**Startup.** Com um punhado de engenheiros todos de plantão, a prioridade é uma política de acionamento curta e alguns alertas de sintoma nos caminhos que rendem dinheiro. Dez minutos na segunda-feira olhando o que acordou as pessoas bastam. O principal risco é não ter alertas, de modo que os clientes são o monitoramento; conte com que frequência um cliente avisou primeiro.

**Pequena empresa.** As pequenas organizações costumam depender do monitoramento de um fornecedor. As medidas úteis são a cobertura de detecção dos poucos sistemas que param o negócio e a proporção de incidentes encontrados pelos usuários. Peça aos fornecedores os dados de alertas a que seu contrato dá direito.

**Grande empresa.** As grandes organizações têm muitas ferramentas e rodízios, e cada equipe pode definir "acionável" de modo diferente. Padronize as definições e os rótulos, reveja no nível da equipe e agregue por serviço e não por ferramenta. As plataformas de correlação de eventos reduzem o volume em escala, mas precisam de suas próprias verificações de revocação.

**Governo e setor público.** Alguns serviços funcionam em horário comercial e outros, como os de emergência ou de benefícios, funcionam continuamente. A cobertura de detecção e os alertas testados importam mais onde a falha traz consequências legais ou de segurança, e os registros de testes podem apoiar a auditoria. Relate cobertura e detecção aos órgãos de fiscalização, e não contagens brutas de alertas, que são fáceis de interpretar mal (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

As razões para investir são práticas. Uma melhor detecção encurta o tempo em que os usuários são afetados. Menos pages inúteis protegem o sono, reduzem a evasão do rodízio e guardam a atenção para os alertas que importam. O custo da má qualidade dos alertas é difícil de ver porque está espalhado em sono interrompido, respostas lentas e saídas de engenheiros experientes.

O custo de coletar estas métricas é pequeno se as ferramentas de alertas, de acionamento e de incidentes puderem ser cruzadas, e moderado se os rótulos forem acrescentados à mão. Os principais custos são o tempo de revisão semanal, o trabalho de ajuste e remoção e testes ocasionais de detecção. Podar regras sem uso também reduz custos de licença e de armazenamento de monitoramento, e o custo total de propriedade deve incluir o tempo das pessoas.

O retorno aparece em poucos meses como rodízios mais quietos, uma parcela de detecção por monitoramento crescente e um tempo até detectar que não piora. Para transformar isso em dinheiro, compare o custo das horas de incidentes e da rotatividade do rodízio com o custo da revisão, usando as suas próprias cifras. Não use médias do setor a menos que possa citar uma fonte verificada.

## Antipadrões e armadilhas

- **Definir meta para o volume de alertas.** Uma meta sobre a contagem premia o silêncio e convida a esconder alertas. Defina metas sobre a taxa de alertas acionáveis e a parcela de detecção e use o volume como cifra de contexto, com um limite de sustentabilidade escolhido pela equipe.
- **Alertar sobre toda causa.** Dezenas de pages em nível de causa produzem ruído e ainda perdem o sintoma em que ninguém pensou. Alerte antes sobre sintomas voltados ao usuário.
- **Acrescentar um alerta depois de cada incidente e nunca remover nenhum.** Pareie cada novo alerta com uma revisão dos que ele torna redundantes.
- **Contar alertas sem rotulá-los.** Uma contagem sem um julgamento de utilidade não distingue um rodízio ruidoso de um ocupado. Rotule uma amostra toda semana, mesmo que haja só poucos minutos disponíveis.
- **Tratar a cobertura como uma contagem de alertas.** Um serviço com cinquenta alertas de causa e nenhum alerta de sintoma está mal coberto. Defina a cobertura como detecção de sintomas testada.
- **Classificar pessoas por pages tratados ou reconhecidos.** Pune os membros do rodízio que pegam os turnos difíceis e estimula a evitar o pager. Relate por rodízio e serviço e procure correções de projeto.
- **Nunca testar o caminho dos alertas.** Um alerta que não foi visto funcionando é uma suposição. Inclua testes de alertas nos game days e monitore o próprio pipeline.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Política de acionamento e responsabilidade das regras | Alertas acrescentados ad hoc; ninguém sabe por que muitos existem | Algumas equipes têm uma política e responsáveis por suas regras | Uma política de acionamento curta; toda regra de acionamento tem um responsável e um runbook | Atualidade das regras acompanhada e revista; regras sem uso removidas em um calendário | Política e responsabilidade adaptadas entre equipes e fornecedores conforme os serviços mudam |
| Medição da qualidade dos alertas | Reclamações sobre ruído; sem contagens | Volume contado por algumas equipes; sem rotulagem | Revisão semanal com rótulos comuns; taxa de alertas acionáveis e de falsos positivos relatadas por serviço | Taxas acompanhadas ao longo do tempo e pareadas com medidas de detecção; melhoria financiada | Qualidade ligada entre serviços e fornecedores; definições revistas quando deixam de informar decisões |
| Detecção e cobertura | Clientes e colegas relatam a maioria dos problemas | Alertas de sintoma em alguns serviços-chave | Cobertura de detecção acompanhada com alertas testados; primeiro sinal registrado em todo incidente | Tempo até detectar e parcela de detecção por monitoramento revistos com uma barreira de proteção; lacunas viram trabalho planejado | Detecção testada rotineiramente entre dependências e fornecedores, incluindo o pipeline de alertas |
| Uso na melhoria | As correções de alertas seguem a pior noite | As correções seguem os incidentes | Cada revisão produz pelo menos uma mudança | Mudanças acompanhadas até seu efeito sobre o volume, a acionabilidade e a detecção | Carga do rodízio, detecção e orçamentos de erro revistos em conjunto para orientar o investimento |

## Lista de verificação

- [ ] Temos uma política de acionamento escrita, de poucas frases, que diz o que merece um page.
- [ ] Toda regra de acionamento tem um responsável, um propósito e um link de runbook.
- [ ] Cada rodízio revê pelo menos semanalmente o que disparou e rotula cada alerta.
- [ ] Cada revisão produz pelo menos uma mudança registrada em uma regra.
- [ ] Relatamos o volume de alertas, a taxa de alertas acionáveis e a taxa de falsos positivos por rodízio e serviço, nunca por pessoa.
- [ ] Todo incidente registra como foi detectado pela primeira vez, com uma opção de desconhecido.
- [ ] Estimamos o início do impacto a partir do histórico do indicador de nível de serviço e relatamos a mediana e o 95º percentil do tempo até detectar.
- [ ] Cada serviço no escopo tem um alerta de sintoma que foi testado nos últimos 12 meses.
- [ ] Uma verificação de batimento nos aciona se o pipeline de alertas parar.
- [ ] Combinamos uma carga sustentável fora do expediente para cada rodízio e a revemos.
- [ ] Nenhuma meta é definida apenas sobre o volume de alertas.

## Prompts de IA

**Finalidade: redigir uma política de acionamento para um serviço a partir de seus indicadores e consequências.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Finalidade: analisar uma revisão de alertas exportada em busca de padrões de ruído.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Finalidade: conferir um conjunto de métricas de alertas quanto a riscos de manipulação antes de publicar.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Finalidade: planejar um teste de detecção para serviços com cobertura fraca.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma medida relacionada e a barreira de proteção que deve ficar ao lado de uma métrica de qualidade de alertas.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm consistentes o modelo, a tabela de manipulação e as referências cruzadas.

## Ideias-chave

- Julgue os alertas por terem levado a ação e julgue o monitoramento por quanto problema real ele pegou; a precisão e a revocação protegem uma à outra.
- Acione por sintomas que os usuários sentem, ligue os limiares ao objetivo de nível de serviço onde houver um e guarde as causas para o diagnóstico.
- Reveja toda semana o que disparou, rotule e faça pelo menos uma mudança a cada vez.
- Nunca defina uma meta apenas sobre o volume de alertas; leia-o ao lado da taxa de alertas acionáveis, da parcela de detecção por monitoramento e do tempo até detectar.
- Teste os alertas e o pipeline de alertas, porque um alerta não testado é uma suposição.
- Relate por rodízio e serviço, nunca por pessoa, e trate a carga de plantão sustentável como uma meta de projeto.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Monitoramento de sistemas](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [Falsos positivos e falsos negativos](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precisão e revocação](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Relação sinal-ruído](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Fadiga de alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Plantão](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Objetivo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_objective).
