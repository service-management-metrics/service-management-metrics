# Métricas da central de serviços

**Meça a central de serviços por quão bem ela ajuda as pessoas a voltar ao trabalho e quanto ensina ao resto da organização, porque as contagens de chamadas e os minutos ao telefone premiam velocidade e volume em prejuízo de ambos.**

## Visão geral e motivação

Para a maioria dos usuários, a central de serviços é o serviço. Raramente encontram os engenheiros ou veem o pipeline; encontram quem atende quando algo dá errado. Uma [central de atendimento (help desk)](https://en.wikipedia.org/wiki/Help_desk) é o departamento ou a pessoa que presta assistência e informação, em geral sobre problemas de computador. No uso da [gestão de serviços de TI (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), a central de serviços é o ponto único de contato entre o provedor e seus usuários, tratando tanto incidentes (interrupções não planejadas, ou potenciais, de um serviço) quanto requisições de serviço (pedidos rotineiros de algo que o serviço normalmente oferece). No [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, a prática de central de serviços fica ao lado da gestão de incidentes e da gestão de requisições de serviço e é descrita por seu propósito e seus resultados, e não por uma lista fixa de medidas. Este tópico oferece, portanto, orientação prática, e não uma exigência da estrutura.

As medidas que cresceram em torno da central vêm em boa parte da tradição do [call center](https://en.wikipedia.org/wiki/Call_centre): quantos contatos chegaram, quanto tempo as pessoas esperaram, quantas desistiram, quanto tempo cada contato levou e quantos foram resolvidos na primeira tentativa. Essas medidas são úteis e baratas, e também são as mais fáceis do livro de transformar em metas que prejudicam o serviço. Chamadas curtas parecem eficientes até o mesmo usuário ligar de novo três vezes. Um baixo abandono parece zeloso até que os atendentes atendam depressa e não resolvam nada. O trabalho do tópico é descrever cada medida, declarar seus relógios e dizer o que ela premia e o que esconde.

A visão ágil acrescenta um segundo propósito. Cada contato é evidência sobre o que os usuários acham confuso, o que quebra e o que gostariam que o serviço fizesse. Uma equipe ágil que libera com frequência precisa dessa evidência rapidamente e no nível de um serviço, e não de um ticket. Por isso a central é medida duas vezes: como uma operação que atende bem as pessoas e como um sensor que alimenta o backlog. O volume é a ponte entre os dois. Uma contagem em alta pode significar crescimento, um release ruim, um artigo faltante ou um novo canal, e a métrica sozinha não diz qual (veja o tópico 3.2, Volume e prioridade de incidentes, sobre como ler contagens por categoria e prioridade).

Termos-chave: a [resolução na primeira chamada](https://en.wikipedia.org/wiki/First_call_resolution) é a proporção dos contatos resolvidos no primeiro contato; um [distribuidor automático de chamadas](https://en.wikipedia.org/wiki/Automatic_call_distributor) encaminha as chamadas recebidas à equipe disponível; um [acordo de nível de serviço (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) é um compromisso entre provedor e cliente; um [percentil](https://en.wikipedia.org/wiki/Percentile) é o valor abaixo do qual cai uma dada proporção das observações, de modo que o 85º percentil do tempo de atendimento é a duração dentro da qual 85% dos contatos terminam; e a [satisfação do cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) (veja o tópico 6.1, Métricas de satisfação do cliente) é quão bem um serviço atende às expectativas dos usuários.

Os termos "contato" e "ticket" não são a mesma coisa. Um contato é uma tentativa de uma pessoa de alcançar a central por um canal como telefone, chat, e-mail, portal, balcão presencial ou mensageria. Um ticket (também chamado de registro) é o que a ferramenta de ITSM cria para acompanhar o trabalho. Um ticket pode envolver muitos contatos, e alguns contatos, como uma redefinição de senha respondida na hora, podem criar um ticket apenas para o registro. Misturar os dois é a fonte de confusão mais comum nos relatórios da central; por isso as definições abaixo os contam separadamente.

## Princípios-chave

- **Conte contatos e tickets separadamente e defina ambos.** Um contato é uma tentativa de alcançar a central; um ticket é um registro de trabalho. Relatórios que os misturam não podem ser conciliados.
- **Relate os tempos como distribuições.** Mostre a mediana e um percentil alto, como o 85º ou o 95º, nunca apenas uma média, porque poucos contatos muito longos ou muito curtos distorcem a média.
- **Pareie toda medida de velocidade com uma medida de resultado.** A velocidade de resposta, o abandono e o tempo de atendimento descrevem esforço. A resolução e o recontato descrevem se o usuário foi ajudado.
- **Normalize o volume contra o uso.** Uma contagem que sobe porque a base de usuários cresceu é uma história diferente de uma que sobe por usuário.
- **Meça canais e serviços, não pessoas.** Essas métricas descrevem uma central, uma fila, um serviço e um canal. Nunca são usadas para classificar ou disciplinar atendentes individuais.
- **Trate a central como um sensor.** Cada métrica deve levar a uma pergunta às equipes de entrega sobre o que corrigir, documentar ou automatizar a montante.

## Definições de métricas

A tabela lista sete medidas que a maioria das centrais de serviços consegue coletar da sua plataforma de telefonia e da ferramenta de ITSM. Limiares e metas são para cada central definir e escrever; este tópico não dá valores de referência.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de contatos | Número de contatos recebidos pela central, por canal e período | contagem de contatos criados no período, por canal; contatos de teste internos, respostas automáticas duplicadas de e-mail e chamadas de saída feitas pela central são excluídos | contagem | Registro da plataforma de telefonia ou de chat; registros de contato da ferramenta de ITSM | Central de serviços | Sinal de demanda no refinamento do backlog | Semanal |
| Taxa de contatos | Contatos em relação ao tamanho da população atendida, para que o crescimento não seja confundido com um problema | contatos no período / usuários ou contas ativos no período, escalonado para 100 usuários; a contagem de usuários é tirada do mesmo período e a definição de "ativo" é escrita | contatos por 100 usuários | Registros de contatos e o sistema de identidade ou de licenças | Central de serviços; gestão de nível de serviço | Demanda ajustada ao uso na revisão do produto | Mensal |
| Tempo até o atendimento | Espera do momento em que um contato entra na fila até que uma pessoa ou uma resposta automática comece a atender | o relógio começa quando o contato é enfileirado e para na primeira resposta humana; contatos abandonados são excluídos desta medida e contados no abandono; relate a mediana e o 85º percentil | segundos (telefone, chat); minutos ou horas (e-mail, portal) | Plataforma de telefonia; plataforma de chat; carimbos da ferramenta de ITSM | Central de serviços | Acordo de trabalho sobre capacidade de resposta | Diária durante janelas de revisão, semanal na tendência |
| Taxa de abandono | Proporção dos contatos que terminam antes de alguém atender, por ato do usuário | contatos encerrados pelo usuário antes da primeira resposta humana / contatos enfileirados; contatos encerrados dentro de um breve período de tolerância (declarado na definição, por exemplo cinco segundos) são excluídos como acidentais | porcentagem | Plataforma de telefonia; plataforma de chat | Central de serviços | Sinal de custo do atraso na revisão de serviço | Semanal |
| Tempo de atendimento | Tempo que a central gasta com um contato | o relógio começa quando uma pessoa atende e para quando termina o contato, inclusive o trabalho de documentação pós-contato; a espera pelo usuário só é incluída se a definição disser; relate a mediana e o 85º percentil, divididos por tipo de contato | minutos | Plataforma de telefonia; plataforma de chat; registro de trabalho da ferramenta de ITSM | Central de serviços; gestão de incidentes | Sinal de esforço no refinamento e no planejamento de capacidade | Semanal |
| Taxa de resolução no primeiro contato | Proporção dos contatos resolvidos no primeiro contato, sem contato posterior sobre o mesmo assunto | contatos resolvidos durante o contato e não seguidos de um recontato sobre a mesma questão pelo mesmo usuário dentro da janela de recontato / contatos elegíveis; chamadas em que basta um encaminhamento e chamadas que a central não deve resolver são excluídas | porcentagem | Campos de resolução e de vinculação da ferramenta de ITSM; confirmação do usuário onde coletada | Central de serviços; gestão de incidentes | Verificação da definição de pronto, resolvido no primeiro toque | Mensal |
| Taxa de recontato | Proporção dos contatos resolvidos seguidos de outro contato sobre o mesmo assunto | contatos seguidos, dentro da janela de recontato (por exemplo sete dias, definida na definição), de outro contato do mesmo usuário sobre o mesmo serviço ou questão / contatos resolvidos no período anterior; contatos sobre um novo problema são excluídos | porcentagem | Vinculação e histórico de reabertura da ferramenta de ITSM; registros de contatos | Central de serviços; gestão de incidentes | Taxa de defeitos escapados | Mensal |

A resolução no primeiro contato tem mais de uma definição defensável; por isso a definição faz parte da métrica. Algumas centrais contam um contato como resolvido quando o atendente encerra o ticket durante a chamada. Outras contam apenas quando o usuário não volta dentro de uma janela. A segunda é mais difícil de coletar e mais difícil de manipular, e é a usada aqui. Declare a janela, declare o que conta como "o mesmo assunto" e aplique ambos do mesmo modo em todo período.

## Recomendações

### Separe contatos de tickets desde o início

**Dê aos contatos e aos tickets suas próprias definições, identificadores e contagens.** Um contato é um registro de uma tentativa de alcançar a central, e um ticket é um registro de trabalho. Ligue-os na ferramenta para que um recontato sobre o mesmo assunto fique visível. Relatórios que misturam os dois dão uma cifra de volume que ninguém consegue conciliar com a plataforma de telefonia.

### Relate o volume por canal, categoria e taxa normalizada

**Mostre o volume total, o volume por canal, o volume por categoria e a taxa de contatos por 100 usuários.** Totais sozinhos confundem crescimento com problema. Uma queda no volume de telefone pode ser uma migração para o chat, e uma alta nos contatos do portal pode ser um sucesso deliberado do autoatendimento. Plote a série por pelo menos um ano para que a sazonalidade, como inícios de semestre e fins de exercício fiscal, fique visível.

### Use distribuições para toda medida de tempo

**Relate a mediana e um percentil alto para o tempo até o atendimento e o tempo de atendimento.** A média de uma distribuição assimétrica não descreve quase ninguém. A mediana mostra o contato típico, e o 85º ou o 95º percentil mostra quão ruim é a cauda lenta. Diga em quantos contatos a cifra se apoia e marque a leitura como pouco confiável quando uma fila trata apenas um punhado de contatos no período (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

### Trate o abandono como um sinal de demanda e de dimensionamento

**Leia o abandono junto com o tempo até o atendimento e os padrões de chegada.** As pessoas abandonam quando a espera é maior do que esperavam; por isso a taxa sobe com a espera, e a espera sobe quando as chegadas excedem a capacidade. A [teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory) explica por que a espera cresce abruptamente quando uma fila se aproxima da utilização total, razão pela qual uma central operada perto de 100% ocupada sempre tem esperas longas e abandono alto. Dimensione a equipe pelos padrões de chegada por hora e por dia, e não por uma média mensal, e mostre o abandono por hora do dia (veja o tópico 2.3, Trabalho em andamento e teoria das filas).

### Defina com cuidado a resolução no primeiro contato e depois meça-a pelo lado do usuário

**Use uma definição baseada em recontato e confirme-a com uma breve pergunta aos usuários.** Contar apenas os contatos que não voltam dentro de uma janela declarada é mais difícil de inflar do que um sinalizador do atendente definido no encerramento. Acrescente uma verificação de uma pergunta, como "seu problema foi resolvido?", e compare-a com a cifra de recontato. Quando as duas discordam, a resposta do usuário é o melhor guia, e a diferença aponta onde o encerramento é prematuro.

### Use o tempo de atendimento para planejamento, não para metas

**Trate o tempo de atendimento como um insumo de capacidade e um diagnóstico, e nunca defina uma meta para os atendentes baterem.** Uma meta de tempo de atendimento paga por pressa, transferências precoces e documentação rala. Use a distribuição por tipo de contato para planejar a equipe e encontrar contatos que levam muito mais tempo que outros semelhantes, o que costuma apontar para um artigo faltante, uma ferramenta desajeitada ou um processo pouco claro. Mire nas causas do sistema, não nos atendentes.

### Ligue as métricas da central ao trabalho de entrega

**Reveja as principais categorias de contatos com as equipes donas dos serviços.** Todo mês, pegue as cinco categorias que geraram mais contatos por 100 usuários e pergunte que mudança a montante as removeria: uma correção, um artigo, uma mensagem de erro melhor ou um caminho de autoatendimento. Registre as respostas no backlog da equipe responsável. Isso transforma os números da central em trabalho de melhoria e é o uso ágil mais claro dos dados (veja o tópico 3.6, Métricas de gestão do conhecimento, e o tópico 3.7, Métricas de autoatendimento e automação).

### Inclua todos os canais nas mesmas definições

**Aplique o mesmo relógio e as mesmas regras de contagem ao telefone, ao chat, ao e-mail, ao portal, ao balcão presencial e à mensageria.** Os canais assíncronos não têm fila ao vivo; por isso o tempo até o atendimento significa algo diferente em cada um. Defina o relógio por canal e relate cada um separadamente antes de combiná-los. Uma central que publica apenas o seu melhor canal esconde a experiência de todos os outros.

### Ligue as métricas à experiência do usuário

**Pareie as medidas operacionais com uma pergunta de satisfação pós-contato e um campo de texto livre.** Uma resposta rápida a um contato rude ou inútil é um mau resultado, e os relógios não o veem. Mostre a taxa de resposta e o perfil dos respondentes ao lado da nota, porque só uma parte autosselecionada dos usuários responde (veja o tópico 1.5, Fontes de dados e instrumentação). Leia os comentários com as pessoas que atendem os contatos, num ambiente de equipe.

### Mantenha as métricas no nível da equipe e da fila

**Relate por fila, canal, serviço e equipe e guarde os dados no nível do atendente para conversas de acompanhamento de que o atendente participa.** Classificar atendentes individuais pelo tempo de atendimento ou pela taxa de resolução estimula a escolha seletiva de contatos fáceis e a evitação dos difíceis. Também prejudica a confiança nos dados, e os usuários sentem o resultado na qualidade da ajuda. Use números no nível da equipe para perguntar do que o sistema precisa.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Volume de contatos | Os atendentes desencorajam o registro redirecionando os usuários para canais que não são contados, ou dividem um contato em vários para fazer uma fila parecer ocupada; os gestores miram um volume menor | Taxa de contatos por 100 usuários e uma conciliação periódica das contagens de telefonia com as de tickets; uma regra fixa de que todo canal é contado |
| Taxa de contatos | O denominador é escolhido depois do fato (por exemplo uma definição ampla de "ativo") para que a taxa pareça melhor | Uma definição escrita e datada de "usuários ativos" e as contagens brutas mostradas ao lado da taxa |
| Tempo até o atendimento | Os contatos são atendidos por uma saudação automática ou transferidos para uma fila calma, ou a chamada é atendida e colocada em espera; o e-mail recebe uma resposta automática que conta como atendimento | Definir o relógio como a primeira resposta humana e acompanhar o abandono e o recontato ao lado |
| Taxa de abandono | As chamadas são derrubadas antes de serem enfileiradas, o período de tolerância é esticado ou uma oferta de retorno de chamada é contada como contato atendido | Percentis do tempo até o atendimento, taxa de conclusão de retornos de chamada e um período de tolerância publicado |
| Tempo de atendimento | As chamadas são apressadas, transferidas cedo ou encerradas antes de o problema ser resolvido; as anotações ficam ralas; o trabalho é movido para o tempo pós-contato que o relógio exclui | Resolução no primeiro contato, taxa de recontato e uma revisão amostral da qualidade da documentação pela equipe |
| Taxa de resolução no primeiro contato | Os tickets são encerrados durante a chamada independentemente do resultado, "o mesmo assunto" é lido de forma estreita ou contatos difíceis são classificados como "não se espera resolver" | Taxa de recontato, uma confirmação do usuário de uma pergunta e auditorias periódicas das exclusões pela equipe |
| Taxa de recontato | Pede-se aos usuários que abram um novo ticket para um acompanhamento, ou os acompanhamentos são registrados sob outra categoria e não se ligam | Regras de vinculação na ferramenta, uma auditoria amostral de contatos repetidos não vinculados e resolução relatada pelo usuário |

Uma leitura saudável é um conjunto de cifras que concordam entre si. O tempo até o atendimento e o abandono se movem juntos, o tempo de atendimento varia com o tipo de contato e não com a meta do dia, a resolução no primeiro contato e o recontato são imagens espelhadas que somam perto do seu teto, e a resposta do usuário a "seu problema foi resolvido?" concorda com a cifra de recontato. Uma única cifra que melhora bruscamente enquanto as outras ficam estáveis é motivo para olhar como ela é coletada antes de comemorar. Uma central manipulada costuma mostrar os sintomas no recontato, em categorias repetidas no volume e em reclamações crescentes.

## Compensações: vantagens e desvantagens

| Escolha | Vantagem | Custo ou risco |
| --- | --- | --- |
| Tempo médio de atendimento como manchete | Simples, disponível em toda plataforma, fácil de explicar | Premia a pressa, esconde a cauda e convida a metas que prejudicam a resolução |
| Mediana e 85º percentil para os tempos | Descreve o caso típico e a cauda lenta | Exige contatos suficientes para ser estável e um pouco mais de explicação |
| Resolução no primeiro contato por sinalizador de encerramento do atendente | Fácil de coletar | Fácil de inflar e difícil de comparar entre centrais |
| Resolução no primeiro contato por janela de recontato | Difícil de manipular e mais próxima da experiência do usuário | Exige boa vinculação na ferramenta e espera a janela passar antes de poder ser relatada |
| Abandono com período de tolerância | Remove desligamentos acidentais | O período de tolerância pode ser esticado para lisonjear a cifra |
| Taxa de contatos por 100 usuários | Separa crescimento de problema | Depende de uma contagem de usuários confiável e de uma definição clara de "ativo" |
| Pesquisa pós-contato | Captura o que os relógios não captam | Taxas de resposta baixas e desiguais e viés a favor de usuários com sentimentos fortes |
| Relatar só por equipe e fila | Protege a confiança e concentra-se no sistema | Dá menos detalhe para o acompanhamento individual, que exige um processo diferente e privado |

Nenhum conjunto de medidas remove a tensão entre velocidade e cuidado. Uma central que atende todo contato em segundos e resolve pouco tem uma boa fila e um mau serviço, e uma que leva tempo para resolver direito mostrará tempos de atendimento e de espera mais longos. O caminho é combinar qual resultado importa mais neste trimestre, tornar explícita a compensação e rever o par de métricas que a mantém em equilíbrio. Mais rápido só é melhor enquanto a resolução se mantém.

## Perguntas para discutir com sua equipe

**1. O que significa "contato" aqui, e a nossa contagem combina com o que a plataforma de telefonia e a ferramenta de ITSM relatam cada uma?**
Peça ao grupo que rastreie um dia de contatos por todos os canais e compare as contagens dos dois sistemas. Anote os contatos que nunca viram tickets e os tickets que nunca começaram como contatos. O facilitador deve esperar uma diferença no início e tratá-la como um achado sobre definições, e não uma falha das pessoas. Combinem uma regra para o próximo relatório e quem é o responsável por ela.

**2. Quando dizemos que um contato foi resolvido no primeiro contato, como sabemos que o usuário concordaria?**
Reveja dez contatos recentes marcados como resolução no primeiro contato e confira se algum dos usuários voltou sobre o mesmo assunto. Pergunte o que o atendente poderia ter feito de diferente nos que voltaram. A discussão costuma mostrar onde o encerramento ocorre antes de o usuário estar pronto. Decida se vai acrescentar uma confirmação de uma pergunta e qual deve ser a janela de recontato.

**3. O que acontece com a pessoa em espera, e quando ela desiste?**
Olhe a curva de abandono por tempo esperado. A maioria das centrais encontra um ponto além do qual as pessoas saem em grande número, e esse ponto é o limite prático da fila. Pergunte que retorno de chamada, chat ou respostas automatizadas estão disponíveis e se algum deles é contado como atendido quando o problema não é resolvido. O facilitador pode usar isso para abrir uma discussão sobre dimensionamento por hora, e não por mês.

**4. Quais dos nossos números de tempo de atendimento mudariam se prestássemos atenção ao trabalho pós-contato e à espera?**
Liste o que o relógio inclui e o que deixa de fora. Pergunte se alguém sentiu pressão para encurtar chamadas e o que fez. Essa pergunta é mais fácil de responder em equipe do que em um relatório; por isso dê às pessoas a chance de falar sem atribuição. Combinem uma definição e se o tempo de atendimento será usado apenas para planejamento.

**5. Quais as cinco categorias que geraram mais contatos por 100 usuários no último trimestre, e quem é o dono da correção de cada uma?**
Traga os dados de categoria e os responsáveis pelos serviços subjacentes para a mesma mesa. Para cada categoria, pergunte se a melhor resposta é uma correção, um artigo, uma mensagem melhor ou um caminho de autoatendimento. O ponto é sair com itens num backlog e responsáveis nomeados. Revisite a lista no próximo trimestre para ver quais se moveram.

**6. Estamos relatando isto no nível da equipe e da fila, e alguém está usando para comparar indivíduos?**
Pergunte diretamente ao grupo se alguma dessas cifras já foi usada para julgar uma pessoa e que efeito teve. Discuta o que a central deixaria de fazer se a comparação individual acabasse e o que passaria a fazer. O facilitador deve registrar quaisquer exemplos e levá-los ao responsável pelas métricas para uma decisão sobre a política. O objetivo é um compromisso escrito de que os dados descrevem o sistema.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega têm da central a melhor visão do próprio serviço. Os contatos por 100 usuários depois de um release mostram rapidamente se uma mudança confundiu as pessoas, e as categorias mostram o que corrigir em seguida. As equipes devem esperar uma revisão mensal das principais categorias e tratá-las como insumo de backlog, sem culpa para a central por relatar o que os usuários lhe dizem. Peça à central amostras de contatos além de contagens, porque as palavras que os usuários usam muitas vezes revelam um problema de rótulo ou de projeto.

### Equipes de serviço e operações

A equipe da central e seus líderes precisam de cifras que os ajudem a planejar e a melhorar sem virar metas. A escala por hora a partir dos padrões de chegada, as revisões de recontato e os pedidos de artigos são as saídas mais úteis. A equipe deve ter voz na forma como as métricas são definidas, porque sabe onde os relógios enganam. Deve ver primeiro as cifras da própria equipe e poder contestá-las.

### Liderança e governança

Os líderes precisam de um conjunto curto de cifras que concordem entre si: volume e taxa de contatos, tempo até o atendimento e abandono, resolução no primeiro contato e recontato e uma nota de satisfação do usuário com sua taxa de resposta. Devem pedir distribuições e notas sobre mudanças de definição e resistir a definir uma única meta para o tempo de atendimento ou para o volume. Metas só de velocidade convidam à manipulação descrita acima. A governança deve registrar quem é dono de cada definição (veja o tópico 1.4, Governança e responsabilidade das métricas).

### Clientes e usuários

Os usuários se importam se conseguiram falar com alguém, se foram bem tratados e se o problema continuou resolvido. Não se importam com o tempo de atendimento. Dizer a eles o que a central mede e agir sobre seu feedback gera confiança, assim como garantir que os canais que preferem sejam medidos e atendidos. Os clientes que compram o serviço são servidos por compromissos claros em um SLA ou em um acordo de experiência (veja o tópico 5.1, Métricas de SLA, OLA e XLA, e o tópico 6.2, Acordos de nível de experiência).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional mantém uma central de serviços de cerca de uma dúzia de pessoas para aproximadamente 4.000 usuários clínicos e administrativos. Os números abaixo são ilustrativos e não vêm de nenhuma organização real.

A visão semanal da equipe mostra 1.900 contatos (ilustrativo), o que dá uma taxa de contatos de 47,5 por 100 usuários (ilustrativo). O tempo até o atendimento por telefone tem mediana de 40 segundos e 85º percentil de 6 minutos (ilustrativo). O abandono é de 14% (ilustrativo) e sobe bruscamente nas manhãs dos dias úteis entre 08:00 e 09:30. A mediana do tempo de atendimento é de 7 minutos, e o 85º percentil é de 22 minutos (ilustrativo). A resolução no primeiro contato pela janela de recontato é de 61% (ilustrativo), e a taxa de recontato em sete dias é de 19% (ilustrativo).

Na revisão mensal, o líder da central e a equipe de aplicações clínicas olham as categorias. Os problemas de login e de crachá respondem por uma grande parte dos contatos da manhã, e uma mudança recente no acesso da aplicação clínica produziu um pico de contatos sobre a mesma mensagem de erro. A central e a equipe de aplicações decidem fazer três coisas. Vão mudar a mensagem de erro e acrescentar um link para o artigo, vão acrescentar uma opção de retorno de chamada para o pico da manhã e vão antecipar em uma hora o início de um turno para cobrir o padrão de chegada das 08:00. Vão rever o abandono, o recontato e a taxa de contatos dessa categoria depois de quatro semanas.

No meio do trimestre, um gerente propõe uma meta de tempo de atendimento de 5 minutos para reduzir a fila. A equipe mostra que os contatos do 85º percentil são os lentos que mais importam e que uma meta empurraria os atendentes a encerrar chamadas cedo. Também notam que a cifra de resolução no primeiro contato subiu para 78% (ilustrativo) em uma semana enquanto a taxa de recontato subiu para 27% (ilustrativo). Uma revisão descobre que alguns turnos haviam começado a encerrar tickets durante a chamada com uma nota ao usuário para ligar de volta, o que contava como resolução no primeiro contato. A equipe restaura a definição baseada em recontato, acrescenta a pergunta de confirmação do usuário e abandona a meta de tempo de atendimento. O abandono, o tempo até o atendimento e o recontato passam a ser relatados juntos a partir daí.

## Ágil, IA, automação e análise

### Ágil

Trate o feedback da central como insumo para a melhoria contínua: uma revisão regular com as partes interessadas dos principais motivos de contato e uma mudança para remover uma causa. O cuidado é que metas de tempo de atendimento empurram os atendentes a se apressar; por isso mantenha-as fora das avaliações individuais.

### IA

A triagem por IA e as respostas redigidas por IA podem reduzir o tempo até o atendimento e o tempo de atendimento mudando o que chega a um humano, de modo que os contatos restantes são mais difíceis e as médias enganam. Pareie a velocidade com a taxa de recontato e com a proporção de respostas redigidas por IA que um atendente alterou de modo relevante. O cuidado é que um agente virtual que encerra uma conversa não é um problema resolvido; por isso conte os contatos que voltam.

### Automação

Colete automaticamente os eventos de contato, de fila e de status dos sistemas de telefonia e de tickets e meça a automação de roteamento quanto a roteamentos errados e a contatos que quicam entre filas. O cuidado é que a categorização automática deriva; por isso amostre tickets para conferir se a categoria estava certa.

### Análise

Use percentis para o tempo de resposta, mostre o número de contatos por trás de cada taxa e separe os motivos de contato para que a decisão seja qual causa remover. O cuidado é que filas pequenas produzem porcentagens ruidosas; por isso mostre intervalos ou contagens para serviços de baixo volume.

## Olhar setorial

**Startup.** A central costuma ser uma caixa de entrada compartilhada ou um canal de chat atendido por quem estiver livre. Conte os contatos por canal, etiquete a categoria e olhe as cinco principais todo mês com as pessoas que constroem o produto. Não compre uma plataforma de call center antes que o volume a justifique e não defina metas de velocidade quando duas pessoas atendem todos os contatos.

**Pequena empresa.** Uma pessoa ou um provedor terceirizado costuma operar uma central de serviços hospedada. Use os relatórios padrão da ferramenta, peça ao fornecedor por escrito suas definições de contato, resolução e abandono e exporte os dados brutos de tempos em tempos. Uma curta pergunta recorrente aos usuários, como "seu problema foi resolvido?", dá mais percepção do que um longo painel.

**Grande empresa.** Muitas filas, idiomas, ferramentas e fornecedores levam a definições diferentes da mesma palavra. Combine uma definição compartilhada de contato, de resolução no primeiro contato e de recontato e um conjunto comum de canais. Relate por fila e serviço, com uma visão padrão para a liderança, e use dados de gestão da força de trabalho para dimensionar a equipe pelos padrões de chegada. Compare filas apenas depois de conferir que usam as mesmas definições.

**Governo e setor público.** Os registros podem ter obrigações de retenção, acesso, auditoria e privacidade, e um contrato pode fixar as métricas e metas de uma central terceirizada. Leia criticamente as métricas do contrato e acrescente ao relatório as medidas de barreira de proteção mesmo que não sejam exigidas. Mantenha a trilha de auditoria das mudanças de definição e evite coletar dados pessoais desnecessários. Os serviços públicos muitas vezes atendem usuários com pouca escolha de canal; por isso a acessibilidade de cada canal faz parte do quadro (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação para melhores métricas da central é um serviço mais barato e melhor, e o retorno vem em três lugares. Primeiro, menos contatos repetidos: cada recontato é trabalho que a central não precisava fazer e tempo que o usuário não queria gastar. Segundo, correções a montante: os dados de categoria da central podem remover classes inteiras de contato quando as equipes de entrega agem sobre eles. Terceiro, melhor dimensionamento: os dados de padrão de chegada permitem que os gestores ponham pessoas quando os usuários precisam, o que reduz de uma vez o abandono e a ociosidade.

O custo de coleta é modesto onde a plataforma de telefonia e a ferramenta de ITSM já registram os eventos. Os principais custos são o tempo para combinar definições, consertar a vinculação entre contatos e tickets, acrescentar uma curta pergunta pós-contato e rever os dados com as equipes de entrega.

Nenhuma cifra de retorno é oferecida aqui, porque as cifras publicadas variam com a organização e o método, e nenhuma foi verificada para este tópico. Estime o retorno a partir dos seus próprios dados. Tome a contagem de recontatos e um tempo de atendimento medido, multiplique pelo custo de uma hora de atendente e compare com o custo da correção. Descreva o resultado como uma estimativa com suas premissas e revisite-a depois da mudança (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Mirar o tempo médio de atendimento.** Premia a pressa e as transferências precoces. Use a distribuição por tipo de contato para planejamento e pareie-a com a resolução no primeiro contato e o recontato.
- **Contar um sinalizador de encerramento definido pelo atendente como resolução no primeiro contato.** Ele pode ser definido independentemente do resultado. Use uma janela de recontato e uma confirmação do usuário.
- **Classificar atendentes individuais.** Estimula a escolha seletiva e o comportamento defensivo. Relate por equipe e fila e mantenha as conversas individuais privadas e de apoio.
- **Relatar uma média de todos os canais que esconde o canal mais fraco.** Telefone, chat e e-mail se comportam de modo diferente. Relate cada canal separadamente antes de combiná-los.
- **Ler o volume sem denominador.** Uma alta pode ser crescimento. Mostre os contatos por 100 usuários e a mistura de categorias.
- **Deixar a central fora das decisões de entrega.** Contagens relatadas a um painel e nunca discutidas com a equipe de produto são desperdício. Faça uma revisão mensal das principais categorias com seus responsáveis.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | Cada pessoa conta os contatos de um jeito | Algumas definições escritas para certas filas | Uma definição escrita por métrica, com início e parada do relógio e exclusões | Mudanças de definição registradas e revistas em um calendário | Definições compartilhadas com fornecedores e clientes e revistas quando deixam de informar decisões |
| Captura e qualidade dos dados | Contagens montadas à mão a partir de exportações | Dados de telefonia e de ITSM relatados separadamente | Contatos e tickets vinculados, com captura automatizada entre canais | Vinculação, completude e conciliação medidas e acompanhadas | Dados de contatos compartilhados entre equipes e fornecedores por interfaces acordadas |
| Uso na melhoria | Números relatados mas raramente discutidos | Revisão ocasional dos períodos de pico | Revisão mensal das principais categorias com os responsáveis pelos serviços | Melhorias planejadas, financiadas e conferidas contra o recontato e o volume | Os dados da central pilotam as prioridades de backlog entre equipes de produto e fornecedores |
| Barreiras de proteção e confiança | Metas de velocidade aplicadas a indivíduos | Alguma consciência da manipulação | Medidas pareadas relatadas juntas e nenhuma classificação individual | Verificações de manipulação auditadas pela equipe e confirmação do usuário em uso | Usuários e equipe ajudam a definir as medidas e veem os resultados |

## Lista de verificação

- [ ] Contatos e tickets são definidos e contados separadamente, e as contagens se conciliam.
- [ ] Todo canal tem um relógio escrito para o tempo até o atendimento e um modo declarado de tratar respostas automáticas.
- [ ] As medidas de tempo são relatadas como mediana e um percentil alto com o tamanho da amostra.
- [ ] O abandono tem um período de tolerância escrito e é mostrado com o tempo até o atendimento.
- [ ] A resolução no primeiro contato usa uma janela de recontato e um significado declarado para "o mesmo assunto".
- [ ] Uma confirmação do usuário de uma pergunta é coletada, com sua taxa de resposta mostrada.
- [ ] A taxa de contatos por 100 usuários é relatada, com uma definição escrita de "usuário ativo".
- [ ] Nenhuma meta de tempo de atendimento é definida para atendentes e nenhuma métrica classifica indivíduos.
- [ ] As principais categorias de contato são revistas todo mês com as equipes responsáveis, e as ações vão para um backlog.
- [ ] As definições têm controle de versão e cada mudança é datada.

## Prompts de IA

**Redija definições precisas para as medidas principais da central.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Revise um conjunto de cifras da central em busca de sinais de manipulação.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Prepare uma revisão mensal das principais categorias de contato.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Projete uma curta pesquisa pós-contato.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico define uma métrica relacionada e a barreira de proteção que deve ficar ao lado de uma medida da central.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm cada métrica pareada com um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- Conte contatos e tickets separadamente, defina ambos e normalize o volume contra o tamanho da base de usuários.
- Relate os tempos como mediana e um percentil alto e diga em quantos contatos cada cifra se apoia.
- Leia a velocidade de resposta, o abandono e o tempo de atendimento como sinais de esforço e pareie-os com a resolução no primeiro contato e o recontato como sinais de resultado.
- Defina a resolução no primeiro contato por se o usuário volta e confirme-a com uma verificação de uma pergunta.
- Use a central como um sensor: reveja as principais categorias todo mês com as equipes donas dos serviços.
- Meça filas, canais e serviços e nunca classifique atendentes individuais.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Central de atendimento](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [Gestão de serviços de TI](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call center](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [Resolução na primeira chamada](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Distribuidor automático de chamadas](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Satisfação do cliente](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory).
