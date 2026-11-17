# Métricas de SLA, OLA e XLA

**Um acordo de nível de serviço diz a um cliente o que foi prometido, um acordo de nível operacional diz às equipes internas o que devem umas às outras e um acordo de nível de experiência diz se as pessoas que usam o serviço estão de fato melhores; por isso você precisa dos três e precisa relatá-los com honestidade, e não como uma parede de verde.**

## Visão geral e motivação

Um [acordo de nível de serviço (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) é um compromisso documentado entre um provedor de serviços e um cliente sobre o que o serviço vai entregar: seu horário, sua disponibilidade, a rapidez com que o provedor responde aos incidentes e os resolve e a rapidez com que atende as requisições. No ITIL 4 (a edição de 2019 da estrutura publicada pelo dono, hoje a AXELOS sob a PeopleCert), a prática de [gestão de nível de serviço](https://en.wikipedia.org/wiki/ITIL) define essas metas, monitora-as e relata sobre elas. Um [acordo de nível operacional (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) é a contrapartida interna: um acordo entre equipes da mesma organização, por exemplo entre a central de serviços e a equipe de redes, sobre o que cada uma fará e com que rapidez, para que o SLA voltado ao cliente possa ser cumprido. Um contrato de sustentação (underpinning contract) cumpre o mesmo papel para um fornecedor externo (veja o tópico 8.4, Métricas de fornecedores e contratos).

Um acordo de nível de experiência (XLA) é o mais novo dos três. Registra um resultado combinado em termos de como as pessoas experimentam o serviço, como a facilidade com que concluíram o trabalho, como se sentiram na interação e se o serviço as ajudou a alcançar seu objetivo. A ideia cresceu na prática de gestão de serviços porque um SLA pode ser cumprido enquanto os usuários estão insatisfeitos. Este tópico é dono dos três acordos e de seus relatórios. A profundidade de como medir a experiência pertence ao tópico 6.2, Acordos de nível de experiência, e as contrapartidas de engenharia das metas pertencem ao tópico 5.2, SLIs, SLOs e orçamentos de erro.

Três conceitos ágeis e de confiabilidade ficam ao lado desses acordos. Um [indicador de nível de serviço (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) é uma propriedade medida de um serviço, como a proporção de requisições atendidas com sucesso. Um [objetivo de nível de serviço (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) é a meta interna para um SLI, geralmente mais estrita que qualquer coisa prometida a um cliente. A prática de [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) trata o SLO, e o orçamento de erro que decorre dele, como uma ferramenta de decisão compartilhada entre produto e operações. O SLA é o contrato; o SLO é a meta de engenharia; o SLI é a medição. Manter os três separados evita uma confusão comum em que uma cláusula contratual de penalidade é usada para orientar as decisões diárias de engenharia.

A família tem uma falha conhecida chamada relato melancia (watermelon reporting): um relatório que é verde por fora e vermelho por dentro. Todas as linhas do SLA aparecem como cumpridas, e ainda assim os clientes estão frustrados, porque as medidas foram escolhidas pelo que o provedor conseguia atingir com segurança e não pelo que o cliente valoriza, ou porque as médias escondem a cauda ruim, ou porque o relógio foi pausado durante o pior da espera. O remédio é em parte técnico (percentis, relógios honestos, indicadores centrados no usuário) e em parte social (acordos negociados como uma conversa, revistos em uma cadência e lidos como uma pergunta sobre o serviço, e não como um veredicto sobre uma equipe). O alerta mais amplo sobre medidas que viram metas está no tópico 1.2, A lei de Goodhart e a psicologia das métricas.

As equipes ágeis pensam em objetivos e orçamentos; os gestores de nível de serviço do ITIL pensam em acordos e revisões. As visões se encaixam: o acordo declara o resultado, os objetivos e indicadores são o modo como a equipe cumpre a promessa, e as medidas de experiência confirmam que isso importou.

Um último termo: um [percentil](https://en.wikipedia.org/wiki/Percentile) é o valor abaixo do qual cai uma proporção declarada das observações. O 85º percentil do tempo de resolução é o tempo dentro do qual 85% dos tickets foram resolvidos. A maioria das metas de SLA é escrita como percentil ou proporção; por isso o modo como o percentil é calculado e o que nele se inclui são o cerne do tópico (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

## Princípios-chave

- **Combine resultados com o cliente e depois meça-os.** Um acordo é uma declaração negociada do que o cliente precisa e o provedor consegue sustentar, escrita nas palavras do cliente e revista em conjunto.
- **Relate distribuições e proporções, nunca uma média única.** Um tempo médio de resolução que cumpre a meta pode estar sobre uma longa cauda de trabalho muito atrasado. Declare o percentil, a população e a contagem.
- **Faça o relógio honesto.** Toda meta tem um evento de início, um evento de parada e uma lista de condições de pausa. Publique as regras do relógio e relate com que frequência cada pausa é usada.
- **Estratifique os acordos.** O SLA se apoia em OLAs e contratos de fornecedores, e os objetivos definidos dentro da equipe devem ser mais apertados que as promessas feitas fora dela. Uma lacuna em qualquer camada aparece como violação no topo.
- **Pareie toda medida operacional com uma medida de experiência.** Uma meta cumprida com experiência ruim, ou o inverso, é o sinal mais útil do relatório.
- **Conte os quase acidentes.** O trabalho que terminou por pouco dentro do limite diz mais sobre o risco do que o trabalho que terminou bem dentro.
- **Relate sobre equipes e serviços, nunca sobre pessoas.** Os acordos descrevem aquilo a que um serviço ou uma equipe se compromete. Não são um meio de classificar indivíduos.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de cumprimento do SLA | Proporção dos itens medidos (incidentes, requisições ou janelas de tempo) que cumpriram uma meta declarada do SLA no período | Itens que cumpriram a meta divididos pelos itens medidos. O relógio começa no horário registrado definido no acordo (por exemplo, a criação do ticket) e para no evento de parada definido (por exemplo, restabelecimento confirmado). Excluídos: itens cancelados como duplicatas e o tempo dentro de exclusões combinadas, como a manutenção programada. Relate a contagem ao lado da proporção | Porcentagem, com n | Carimbos de tempo da ferramenta de ITSM; dados de monitoramento para metas baseadas em tempo | Gestão de nível de serviço; gestão de incidentes; gestão de requisições de serviço | Cumprimento do objetivo de nível de serviço em uma janela móvel (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro) | Mensal, com uma visão interna semanal |
| Parcela de quase acidentes | Proporção dos itens que cumpriram a meta mas terminaram dentro do último décimo do tempo permitido | Itens concluídos em 90% ou mais do tempo da meta e ainda dentro dela, divididos pelos itens que cumpriram a meta. Mesmo relógio do SLA. n/a para janelas de tempo (aplica-se apenas a medidas de tempo até a meta) | Porcentagem | Carimbos de tempo da ferramenta de ITSM | Gestão de nível de serviço | Proporção do trabalho próximo da expectativa de nível de serviço em um gráfico de fluxo (veja o tópico 2.1, Medidas de fluxo) | Mensal |
| Parcela de pausa do relógio | Proporção do tempo decorrido total do ticket gasta em estados que pausam o relógio do SLA | Tempo total de pausa dividido pelo tempo total decorrido do início à parada, para os itens no escopo. Exclui itens em que nenhum estado de pausa foi usado. Relate por estado de pausa | Porcentagem | Histórico de status da ferramenta de ITSM | Gestão de nível de serviço; gestão de incidentes | Tempo bloqueado e tempo de espera em uma visão de fluxo (veja o tópico 2.4, Métricas de fluxo de valor) | Mensal |
| Taxa de cumprimento do OLA | Proporção das transferências internas que cumpriram a meta do OLA entre duas equipes | Transferências concluídas dentro da meta do OLA divididas pelas transferências recebidas. O relógio começa quando a equipe receptora é designada e para quando devolve ou encerra o item. Excluídos: itens reatribuídos por engano, contados à parte | Porcentagem, com n | Histórico de atribuições da ferramenta de ITSM | Gestão de nível de serviço; gestão de incidentes | Tempo de espera nas transferências e trabalho bloqueado entre equipes (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho) | Mensal |
| Tempo de espera na transferência (85º percentil) | Tempo que um item espera na fila de uma equipe receptora antes de o trabalho começar | 85º percentil do tempo entre a atribuição à equipe receptora e a primeira ação registrada por essa equipe. Excluídos: itens que aguardam o cliente | Horas ou minutos | Histórico de atribuições e de atividade da ferramenta de ITSM | Gestão de nível de serviço; gestão de incidentes | Tempo de fila em uma visão de fluxo (veja o tópico 2.3, Trabalho em andamento e teoria das filas) | Semanal |
| Pontuação de experiência por jornada | Avaliação do cliente ou usuário sobre como o serviço apoiou uma jornada definida, como obter um notebook novo ou se recuperar de uma interrupção | Média e distribuição das avaliações de pesquisa em uma escala fixa para jornadas concluídas no período. Relate a taxa de resposta e a mistura de respondentes. Excluídas: pesquisas parciais. Não é uma média única; por isso mostre a distribuição | Escala de avaliação, com taxa de resposta | Pesquisa curta pós-interação; eventos da jornada da ferramenta de ITSM | Gestão de nível de serviço; práticas de satisfação do cliente (veja o tópico 6.1, Métricas de satisfação do cliente) | Feedback do cliente e medidas de resultado | Mensal, com cada onda mostrada |
| Lacuna melancia | Proporção dos períodos de relato ou serviços em que o SLA aparece como cumprido enquanto a medida de experiência ou de impacto sobre o usuário aparece como ruim | Serviços (ou períodos) com cumprimento do SLA igual ou acima da meta e experiência abaixo do nível combinado, divididos pelos serviços (ou períodos) com cumprimento do SLA igual ou acima da meta. O nível de experiência deve ser combinado antes de o período ser pontuado | Porcentagem dos serviços verdes | Cumprimento do SLA e pontuação de experiência em conjunto | Gestão de nível de serviço; melhoria contínua | Retrospectiva dos resultados contra os desfechos | Trimestral |
| Cobertura e atualidade dos acordos | Proporção dos serviços em operação cujo SLA, OLAs e contratos de fornecedores existem e foram revistos dentro do intervalo combinado | Serviços com as três camadas documentadas e revistas dentro do intervalo, divididos pelos serviços em operação no catálogo de serviços. O intervalo é definido pela organização. Excluídos: serviços em aposentadoria | Porcentagem | Catálogo de serviços (service catalogue na grafia do próprio ITIL) e registro de acordos | Gestão de nível de serviço; gestão do catálogo de serviços; gestão de fornecedores | Acordos de trabalho e cartas de equipe revistos em uma cadência regular | Trimestral |

## Recomendações

### Monte os acordos

**1. Escreva cada SLA na linguagem do cliente e ligue-o a um único resultado.** Comece pelo que o cliente precisa, como "um funcionário bloqueado volta a trabalhar logo", e depois escolha a medida. Um acordo curto, com um punhado de metas significativas, vale mais do que um longo que ninguém lê. Escreva o relógio de cada meta: o evento de início, o evento de parada e as condições de pausa (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

**2. Declare as metas como percentis ou proporções, com uma população declarada.** "90% dos incidentes de prioridade 2 restabelecidos em até quatro horas" diz mais do que "restabelecimento médio abaixo de duas horas". Combine o que conta: quais prioridades, quais horários, quais tipos de requisição. Mostre a contagem junto com toda porcentagem para que um mês com oito incidentes não seja lido como um mês com oitocentos.

**3. Derive os OLAs do SLA e dê a cada um uma equipe responsável nomeada.** Trabalhe de trás para a frente a partir da meta do cliente: se ao cliente é prometido o restabelecimento em quatro horas, os OLAs devem deixar espaço para a detecção, a triagem, as transferências e a correção. Escreva cada OLA como um acordo mútuo curto com uma equipe receptora, um tempo de resposta esperado e uma via para disputas. Um OLA existe para ajudar as equipes a planejar; por isso mantenha-o tão leve quanto o relacionamento permitir.

**4. Mantenha os objetivos mais apertados que a promessa.** Defina o SLO interno em um nível mais estrito que o SLA para que uma semana ruim seja notada e corrigida antes de uma violação visível ao cliente (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Trate o SLA como um piso que importa às finanças e ao jurídico e o SLO como o número pelo qual os engenheiros se guiam. Use o orçamento de erro como o modo de produto e operações decidirem entre trabalho de funcionalidades e trabalho de confiabilidade.

### Meça com honestidade

**5. Publique as regras do relógio e relate as pausas.** O caminho mais comum para um relatório verde é um estado de pausa generoso, como "aguardando o cliente" usado quando o provedor é quem está esperando. Relate a parcela de pausa do relógio por estado de pausa, amostre alguns tickets pausados todo mês e pergunte se o cliente concordaria que o relógio deveria ter parado. Mantenha curta a lista de motivos de pausa permitidos e escreva-a no acordo.

**6. Mostre a distribuição inteira ao lado da meta.** Ponha a mediana, o 85º ou 95º percentil e o pior decil ao lado da taxa de cumprimento. Um cumprimento estável de 95% pode esconder uma cauda de trabalho que levou dias (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**7. Acompanhe os quase acidentes e as causas das violações.** A parcela de quase acidentes diz quanta sorte há no número verde. Quando ocorre uma violação, registre a categoria da causa e se foi um problema de capacidade, de transferência, de fornecedor ou de definição. Ligue as maiores categorias à gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas).

**8. Meça a fila do OLA, e não apenas o cumprimento.** O tempo de espera na transferência no 85º percentil mostra onde o trabalho emperra, bem antes de uma violação do SLA aparecer. Compartilhe-o com a equipe que envia e com a que recebe e descreva-o como uma propriedade do fluxo entre elas. A conversa é sobre a fila, nunca sobre as pessoas que estão nela (veja o tópico 2.3, Trabalho em andamento e teoria das filas).

### Acrescente a experiência e feche a lacuna

**9. Pareie cada SLA com uma medida de experiência da mesma jornada.** Faça aos usuários uma pergunta curta após a interação sobre se funcionou e quão difícil foi e relate a taxa de resposta e a mistura de respondentes. Combine de antemão qual nível conta como bom o bastante, para que um XLA seja um resultado negociado e não um número inventado depois do fato (veja o tópico 6.2, Acordos de nível de experiência, e o tópico 6.1, Métricas de satisfação do cliente).

**10. Relate a lacuna melancia e trate-a como um achado.** Acompanhe com que frequência um SLA é cumprido enquanto a experiência é ruim. Uma lacuna crescente diz que as medidas do SLA estão se afastando do que os usuários valorizam, e a resposta certa é revisar a medida, e não explicar a discrepância. Reveja-a a cada trimestre com o representante do cliente presente.

**11. Reveja os acordos em um calendário e aposente os que ninguém usa.** Confira cada acordo contra o catálogo de serviços, os contratos de fornecedores e o trabalho real. Um conjunto menor de acordos vivos é mais fácil de relatar e mais difícil de manipular.

**12. Relate cada serviço em uma só visão que combine as três camadas.** Mostre o cumprimento do SLA, a distribuição, as esperas de transferência do OLA, a pontuação de experiência e o trabalho de melhoria em aberto de cada serviço em uma página. Derive o status dos dados, e não de uma cor escolhida pelo dono do serviço. Deixe a página aberta ao cliente e às equipes (veja o tópico 11.1, Projetar um painel de métricas de serviço).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de cumprimento do SLA | Escolher a meta para ser fácil; encerrar tickets cedo e reabri-los depois; reclassificar a prioridade para baixo; excluir casos difíceis como "fora do escopo" | Taxa de reabertura e taxa de reclassificação de prioridade; amostra de tickets encerrados lida com o cliente; revisão trimestral da lista de exclusões |
| Parcela de quase acidentes | Parar o relógio um minuto antes do limite e continuar o trabalho fora do registro; dividir um ticket em dois mais curtos | Tempo do último contato com o cliente até o restabelecimento confirmado; contagem de tickets vinculados ou filhos por incidente |
| Parcela de pausa do relógio | Usar estados de pausa em tickets que não aguardam o cliente; mover o trabalho para um estado que não é contado | Motivos de pausa auditados por amostra; proporção de pausas revertidas pelo cliente; pontuação de experiência dos tickets pausados |
| Taxa de cumprimento do OLA | Devolver transferências ao remetente para reiniciar o relógio; marcar itens como aceitos sem iniciar o trabalho | Contagem de devoluções por item e tempo total até o restabelecimento entre equipes; o resultado do SLA de ponta a ponta |
| Tempo de espera na transferência (85º percentil) | Atribuir a uma pessoa e não à fila da equipe para esconder a espera; registrar uma primeira ação simbólica | Qualidade da primeira ação amostrada; tempo da atribuição à primeira atualização visível ao cliente |
| Pontuação de experiência por jornada | Enviar pesquisas apenas a usuários satisfeitos; fazer perguntas tendenciosas; orientar quem responde a dar notas altas | Mistura de respondentes contra a população; taxa de resposta mostrada ao lado da pontuação; comentários abertos lidos na revisão |
| Lacuna melancia | Definir o nível de experiência baixo para que a lacuna fique pequena; mudar a medida de experiência quando ela cai | Nível de experiência combinado de antemão e mudanças registradas com motivos; tendência da distribuição inteira |
| Cobertura e atualidade dos acordos | Marcar um acordo como revisto sem revisão real; contar um documento de fachada como um SLA | Evidência da revisão (participantes, mudanças, decisões); amostra de acordos lidos quanto ao conteúdo real e à aprovação do cliente |

Uma leitura saudável mostra um cumprimento que se move por razões compreensíveis, quase acidentes que são poucos e explicados, pausas que ficam dentro da lista combinada, esperas de transferência discutidas pelas equipes que as possuem e uma medida de experiência que em grande parte concorda com o SLA. Onde as duas discordam, a equipe já tem uma nota da causa e um item de melhoria.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| SLAs contratuais com penalidades | Claros, exigíveis, reconhecidos juridicamente | Estimulam jogos com o relógio e relato defensivo; as penalidades podem azedar o relacionamento |
| SLAs sem penalidades, com revisão regular | Constroem confiança e dados honestos; focam no aprendizado | Menos poder de barganha quando um fornecedor erra as metas de forma constante |
| OLAs detalhados entre todas as equipes | Expectativas claras e menos disputas | Burocracia; as equipes otimizam o próprio relógio em vez do relógio do cliente |
| OLAs leves com uma meta compartilhada de ponta a ponta | Estimulam a cooperação; menos papelada | Exigem confiança e boa visibilidade das filas para resolver disputas |
| Acrescentar XLAs aos SLAs | Mostra se o serviço ajuda as pessoas | Os dados de pesquisa são mais ruidosos e lentos; a atribuição é mais difícil |

Mantenha o acordo pequeno, relate a distribuição e use dados de experiência para conferir os dados operacionais. Gaste esforço nas regras do relógio e nas transferências, onde surge a maior parte da discordância sobre um número.

## Perguntas para discutir com sua equipe

**1. Se o nosso relatório de SLA está todo verde, o que esperaríamos que os usuários dissessem sobre o serviço?**
Peça ao grupo que nomeie um serviço que está verde há vários meses e depois colete o que os usuários realmente dizem em comentários e reclamações. Comparem os dois. O facilitador deve procurar lacunas entre a medida e a experiência vivida e notar quais medidas foram escolhidas por serem fáceis de atingir.

**2. Onde o nosso relógio para, e quem decidiu isso?**
Percorram as regras de início, parada e pausa de uma meta importante e perguntem quem escreveu cada uma. Olhem a proporção de tickets em estado de pausa e perguntem se os clientes concordariam. Combinem uma regra a apertar ou esclarecer.

**3. Quais dos nossos OLAs ajudam as equipes a planejar, e quais só atribuem culpa?**
Listem os acordos internos e perguntem quem lê cada um e quando. Discutam o que acontece depois de um OLA perdido: uma conversa sobre a fila ou uma busca de culpados. O objetivo é levar a discussão para o fluxo de trabalho entre as equipes. Escolham um OLA a simplificar ou aposentar.

**4. Quanto do nosso verde é sorte?**
Mostrem a parcela de quase acidentes da meta mais importante. Discutam o que aconteceria se o mês seguinte tivesse alguns casos difíceis a mais ou algumas pessoas disponíveis a menos. Perguntem se a equipe tem folga e onde ela está.

**5. O que o cliente gostaria que prometêssemos e que hoje não medimos?**
Convidem o representante do cliente ou um usuário a descrever o que importa para ele com as próprias palavras, como poder falar com uma pessoa ou receber um notebook antes do primeiro dia. Registrem dois ou três resultados. Decidam quais poderiam ser uma pergunta curta de pesquisa ou um evento já presente nos dados e como o grupo combinaria um bom nível.

**6. Como saberíamos se as nossas medidas de SLA se afastaram do que os usuários valorizam?**
Discutam a lacuna melancia como um sinal e perguntem quem a observa. Considerem com que frequência os acordos são revistos e se o cliente participa. Combinem uma data de revisão e as evidências a levar, incluindo uma amostra de tickets e os resultados de experiência mais recentes.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega que também operam seus serviços cumprem o SLA por meio dos próprios objetivos e orçamentos de erro e sentem o custo quando uma penalidade do SLA ou um escalonamento de cliente interrompe o trabalho planejado. Devem manter os SLOs mais apertados que os SLAs e tratar o SLA como um piso de segurança, e não como a meta diária (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro).

### Equipes de serviço e operações

As equipes de operações carregam os relógios. Precisam de regras claras de início, parada e pausa, de OLAs compartilhados que nomeiem a fila receptora e de visibilidade das esperas de transferência. Devem relatar as causas das violações com clareza e usá-las como insumo para o trabalho de problemas e de capacidade (veja o tópico 4.1, Métricas de gestão de problemas). Devem resistir à pressão de explicar um resultado pelo relógio em vez de corrigir a causa.

### Liderança e governança

Os líderes usam os relatórios de SLA para ver se os compromissos são cumpridos e onde investir. Devem pedir distribuições, a parcela de pausa do relógio, a parcela de quase acidentes e a lacuna melancia e tratar com curiosidade uma sequência ininterrupta de verde. Financiar o trabalho de melhoria que se segue a uma análise de violação e proteger o relato honesto contra a culpa importa mais que a própria meta (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

### Clientes e usuários

Os clientes querem que o acordo descreva o que sentem: com que rapidez o problema é corrigido, com que frequência volta e se conseguem falar com alguém que ajude. Devem fazer parte da revisão dos acordos e ter um meio de dizer quando um relatório verde não combina com sua experiência. Um resumo legível de uma página, com os motivos de qualquer violação e a correção planejada, constrói mais confiança do que uma longa tabela de cumprimento.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional apoia um sistema de agendamento clínico usado pela equipe das alas. O dono do serviço, a central de serviços, a equipe de aplicação e a equipe de infraestrutura se reúnem mensalmente. Todos os números abaixo são ilustrativos.

O SLA promete que 90% dos incidentes de prioridade 2 (perda parcial de função que afeta uma ala) sejam restabelecidos em até quatro horas, medidas a partir da criação do ticket, em um serviço de 24 horas, sete dias por semana. O relatório mensal mostra um cumprimento de 94% em 36 incidentes (ilustrativo), confortavelmente verde. A pesquisa de experiência, enviada após cada encerramento de prioridade 2, tem uma taxa de resposta de 41% (ilustrativo) e uma avaliação mediana de 3 em uma escala de cinco pontos, bem abaixo do nível 4 que o dono do serviço e os gerentes das alas haviam combinado como o XLA. A lacuna melancia está visível pelo terceiro mês seguido.

A equipe olha a distribuição. A mediana do restabelecimento é de 1 hora e 40 minutos (ilustrativo), mas o 95º percentil é de 3 horas e 50 minutos (ilustrativo), e a parcela de quase acidentes é de 31% (ilustrativo): quase um terço dos incidentes "cumpridos" terminou no último décimo do tempo permitido. Olham a parcela de pausa do relógio e descobrem que 22% (ilustrativo) do tempo decorrido é gasto no estado "aguardando o cliente". Uma amostra de dez tickets pausados mostra quatro em que a ala havia respondido e o ticket continuou pausado até o turno seguinte, e em outros três a equipe de aplicação esperava pela equipe de infraestrutura. O tempo de espera na transferência no 85º percentil para a fila de infraestrutura é de 2 horas e 10 minutos (ilustrativo) contra um OLA de 30 minutos (ilustrativo), e a taxa de cumprimento do OLA dessa transferência é de 58% (ilustrativo).

A decisão é prática. Mudam a regra do relógio para que "aguardando o cliente" só possa ser usado após uma solicitação documentada ao cliente, e o relógio retoma na resposta seguinte. Acrescentam uma rota de plantão para a fila de infraestrutura durante o horário das alas e combinam um OLA menor, com revisão em um mês. Acrescentam a medida de experiência e a lacuna melancia ao relatório mensal de uma página e convidam um gerente de ala para a revisão. Também baixam o SLO interno para um restabelecimento mais estrito, de quatro horas para 95% dos incidentes, para que a equipe note o problema antes de o SLA correr risco.

Um risco de manipulação aparece no segundo mês. Depois da mudança na regra de pausa, o cumprimento cai para 89% (ilustrativo), e um gerente pede à central de serviços que "reconfira as prioridades". A equipe percebe um pico de rebaixamentos da prioridade 2 para a 3, pareia o cumprimento com as taxas de reclassificação e de reabertura e exige um motivo no registro para qualquer mudança de prioridade. No terceiro mês, o cumprimento é de 91% (ilustrativo), o 95º percentil está menor, a parcela de quase acidentes caiu e a avaliação mediana de experiência subiu para 3,8 (ilustrativo). A lacuna se estreita porque o trabalho melhorou, e os números são críveis.

## Ágil, IA, automação e análise

### Ágil

Combine os níveis de serviço com as partes interessadas e reveja-os regularmente, para que as metas acompanhem o que os usuários precisam à medida que o serviço evolui. O cuidado é que uma meta fixa deixada em paz por anos mede o passado.

### IA

A IA pode resumir violações, prever quais tickets perderão uma meta e sugerir escalonamentos. Pareie o cumprimento com a pontuação de experiência e a lacuna melancia e registre quais previsões estavam certas. O cuidado é que um empurrão da IA para proteger a meta pode levar as pessoas a pausar relógios ou reprioritizar; por isso audite o uso das pausas.

### Automação

Calcule o cumprimento a partir de carimbos de tempo de eventos e torne visíveis as regras de pausa. Meça o escalonamento automatizado pelos falsos escalonamentos e pelas violações que ele perdeu. O cuidado é que uma pausa automática em um estado como aguardando o cliente é um caminho fácil para a manipulação.

### Análise

Relate o cumprimento com quase acidentes e percentis e mostre a pontuação de experiência ao lado. A decisão informada é qual acordo renegociar. O cuidado é que o cumprimento sobre poucos tickets é volátil; por isso mostre a contagem por trás de cada porcentagem.

## Olhar setorial

**Startup.** Uma empresa pequena muitas vezes não tem nenhum SLA formal, apenas uma promessa informal a poucos clientes iniciais. Escreva uma página que nomeie o horário do serviço, uma meta de resposta e uma meta de restabelecimento declarada como percentil e mantenha um SLO dentro da equipe. As conversas com clientes ocupam o lugar de um XLA; por isso anote todo mês o que dizem os três clientes mais importantes.

**Pequena empresa.** Uma pequena equipe de TI costuma depender muito de fornecedores externos; por isso os contratos de sustentação importam mais que os OLAs internos. Confira se o compromisso de cada fornecedor é pelo menos tão estrito quanto o SLA que você dá aos seus próprios usuários e acompanhe o desempenho real do fornecedor (veja o tópico 8.4, Métricas de fornecedores e contratos). Uma página mensal simples, com cumprimento, quase acidentes e uma pesquisa curta com usuários, basta.

**Grande empresa.** As grandes organizações precisam de um registro de acordos e de uma métrica de cobertura. Padronize as regras do relógio e as definições entre serviços para que as consolidações façam sentido (veja o tópico 1.4, Governança e responsabilidade das métricas). Cuidado com o efeito melancia nas consolidações gerenciais, em que centenas de linhas verdes escondem alguns serviços com sofrimento sério dos usuários.

**Governo e setor público.** Os órgãos públicos muitas vezes têm padrões legais de serviço, regras de compras que fixam SLAs em contratos e o dever de publicar resultados. Mantenha clara e verificável a medida publicada, guarde as regras do relógio e as evidências para auditoria e trate os cidadãos como clientes com voz na revisão (veja o tópico 8.5, Relatórios regulatórios e governamentais). Onde o contrato é rígido, acrescente uma medida de experiência ao lado sem mudar a redação do contrato.

## Business case: motivações, ROI e TCO

O argumento a favor de melhores métricas de acordos é um argumento de confiança e de evitar esforço desperdiçado. Relatórios que combinam com o que os usuários sentem reduzem escalonamentos e disputas, encurtam a discussão mensal sobre de quem é o número certo e deixam os líderes financiar o trabalho que importa. OLAs claros reduzem os atrasos de transferência, que estão entre os maiores contribuintes para restabelecimentos longos. Uma lacuna melancia pega cedo evita o custo maior de um relacionamento com o cliente ou de uma renovação de contrato dar errado.

Os custos são modestos: tempo para escrever e rever os acordos, dados confiáveis de relógio e de transferência (veja o tópico 1.5, Fontes de dados e instrumentação), uma pesquisa curta e uma revisão mensal. O custo total cresce com o número de acordos; por isso menos acordos, e mais simples, são mais baratos de manter.

O retorno aparece como menos violações surpreendentes, menos tempo gasto explicando relatórios e escolhas de investimento mais bem informadas. Trate-os como padrões a observar e comparar ao longo do tempo, e não como um cálculo. Compare o esforço de uma revisão mensal com o custo de uma disputa escalonada ou de uma renovação perdida na sua própria organização, com os seus próprios dados (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Relatar apenas médias.** Uma média esconde uma longa cauda de trabalho atrasado. Relate percentis, a parcela de quase acidentes e a contagem.
- **Escrever o SLA em torno do que é fácil de atingir.** Uma meta escolhida por conforto dá um relatório sempre verde. Parta do que o cliente precisa e mostre a lacuna abertamente.
- **Pausar o relógio para melhorar o número.** Estados de pausa generosos transformam o SLA em ficção. Publique as regras de pausa, audite amostras e relate a parcela de pausa.
- **OLAs como arma.** Um OLA usado para culpar a equipe seguinte ensina as equipes a devolver trabalho. Trate as perdas como informação sobre a fila e corrija o fluxo.
- **Relato guiado por penalidades.** Penalidades pesadas estimulam a classificação defensiva e as disputas sobre o relógio. Use penalidades com moderação e pareie-as com as taxas de reabertura e de reclassificação.
- **Dados de experiência sem taxa de resposta.** Uma nota alta de uma amostra minúscula e autosselecionada engana. Mostre a taxa de resposta e a mistura de respondentes ao lado de todo resultado.
- **Acordos que ninguém revê.** Acordos obsoletos descrevem um serviço que não existe mais. Programe revisões e aposente o que não é usado.
- **Metas individuais a partir de acordos de equipe.** Dividir um SLA de equipe em cotas pessoais leva a encerramentos apressados e a classificações. Mantenha o acordo no nível do serviço e da equipe.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Projeto dos acordos | Promessas verbais ou modelos copiados; metas escolhidas por hábito | Alguns SLAs escritos; OLAs raros; os relógios diferem entre equipes | Um modelo curto com metas baseadas em resultados, percentis e regras de relógio escritas | Acordos revistos em uma cadência, com o cliente e ligados aos SLOs | Camadas de SLA, OLA, contrato de fornecedor e SLO ajustadas em conjunto conforme as condições mudam |
| Qualidade da medição | Contagens manuais; médias; pausas não documentadas | Cumprimento por ferramenta para alguns serviços; uso das pausas não revisto | Uma definição e uma fonte de dados; distribuições e parcela de pausa mostradas | Quase acidentes, causas de violações e esperas de transferência acompanhados ao longo do tempo e amostrados | Dados de equipes e fornecedores reconciliados; definições revistas quando deixam de informar decisões |
| Vínculo com a experiência | Nenhum feedback de usuário ligado ao SLA | Pesquisas ad hoc para alguns serviços | Uma pesquisa curta para as jornadas-chave, com a taxa de resposta mostrada | Metas de experiência combinadas com os clientes e a lacuna melancia relatada | Medidas de experiência e operacionais orientam o trabalho de melhoria compartilhado com os clientes |
| Uso na melhoria | Relatado após uma reclamação | Violações discutidas em reuniões de equipe | Revisão mensal com responsáveis e ações | As causas das violações alimentam melhorias financiadas e o trabalho de problemas | Clientes, fornecedores e equipes planejam a melhoria juntos a partir da mesma visão |

## Lista de verificação

- [ ] Cada SLA declara seu resultado, sua meta como percentil ou proporção e sua população.
- [ ] O evento de início, o evento de parada e as condições de pausa permitidas estão escritos para cada meta.
- [ ] Cada SLA voltado ao cliente tem OLAs ou contratos de fornecedores que se encaixam nele, cada um com uma equipe responsável nomeada.
- [ ] Os objetivos internos são mais estritos que as metas prometidas do SLA.
- [ ] Os relatórios mostram a distribuição, a contagem, a parcela de quase acidentes e a parcela de pausa do relógio.
- [ ] Uma amostra de tickets pausados e encerrados é lida todo mês.
- [ ] Cada serviço-chave tem uma medida de experiência com um nível combinado, e a taxa de resposta é mostrada.
- [ ] A lacuna melancia é acompanhada e revista com um representante do cliente.
- [ ] Os acordos são revistos em um calendário e aposentados quando não usados.
- [ ] Nenhuma métrica de acordo é usada para classificar pessoas.

## Prompts de IA

**Revise um SLA quanto a problemas de relógio e de redação.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Redija um OLA entre duas equipes.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Procure uma lacuna melancia nos nossos dados.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Projete uma pesquisa curta de experiência para um XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico define a métrica por trás de uma linha de SLA e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm em sintonia o modelo, as regras de relógio e a tabela de manipulação.

## Ideias-chave

- Um SLA é uma promessa ao cliente, um OLA é uma promessa entre equipes e um XLA é um resultado de experiência combinado; cada um precisa da própria medida e do próprio responsável.
- Relate percentis, contagens, quase acidentes e a parcela de pausa do relógio, porque médias e pausas silenciosas produzem relatórios verdes sobre um serviço ruim.
- Derive os OLAs do SLA e mantenha os objetivos internos mais apertados que a promessa.
- Pareie todo SLA com uma medida de experiência da mesma jornada e relate a lacuna melancia como um achado sobre o qual agir.
- Reveja os acordos em um calendário, com o cliente na sala, e aposente o que ninguém usa.
- Mantenha toda métrica de acordo no nível de serviços e equipes, nunca de indivíduos.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Acordo de nível operacional](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Indicador de nível de serviço](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Objetivo de nível de serviço](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
