# Métricas de autoatendimento e automação

**Meça o autoatendimento pelo fato de as pessoas terem obtido o que precisavam sem ajuda e meça a automação pelo trabalho que ela remove e pelas falhas que cria, porque um contato que nunca chegou só é um sucesso se o problema foi resolvido.**

## Visão geral e motivação

O autoatendimento e a automação são as duas principais formas de uma organização de serviços tirar o trabalho rotineiro das mãos de suas pessoas. O [autoatendimento](https://en.wikipedia.org/wiki/Self-service_software) permite que um usuário resolva um problema ou obtenha algo sozinho, por um portal, um artigo de conhecimento, uma página de redefinição de senha ou um [chatbot](https://en.wikipedia.org/wiki/Chatbot). A [automação](https://en.wikipedia.org/wiki/Automation) permite que um sistema execute os passos que uma pessoa executava, como criar uma conta, reiniciar um serviço ou encerrar um ticket quando um monitor confirma a recuperação. Os dois visam ao mesmo resultado: menos tarefas repetitivas para as pessoas, resultados mais rápidos para os usuários e mais tempo para o trabalho que exige julgamento.

As ideias se mapeiam nas duas tradições. No [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, a prática de gestão de requisições de serviço espera que requisições bem compreendidas e repetíveis sejam tratadas por fluxos padrão com tanta automação quanto for sensato, e as práticas de gestão de incidentes e de gestão do conhecimento esperam que boa informação esteja disponível aos usuários e à equipe de suporte no ponto útil mais cedo possível. A prática ágil e de DevOps chega ao mesmo lugar por outro caminho: [infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code), pipelines e a disciplina de remover trabalho repetitivo (toil), que os livros de engenharia de confiabilidade de sites do Google definem como trabalho manual, repetitivo, automatizável e que cresce com o serviço. A ideia compartilhada costuma ser chamada de "shift left": mover a resolução de um problema em direção ao usuário, ou em direção ao ponto mais barato e mais cedo da cadeia de suporte, e para longe da fila de especialistas.

A linguagem do shift left convida a um erro de medição. As equipes veem que um contato evitado é barato e passam a contar contatos evitados como sucesso. A contagem é fácil de produzir, porque uma visita ao portal que não terminou em ticket é idêntica a uma visita em que o usuário desistiu. Este tópico parte, por isso, do resultado do usuário. Define o que significa sucesso do autoatendimento, como estimar a deflexão sem se atribuir o crédito da desistência, como medir a cobertura e a confiabilidade da automação e como ver o efeito do shift left sobre o volume e a complexidade. As medidas de volume e prioridade relacionadas estão no tópico 3.2, Volume e prioridade de incidentes, o lado das requisições está no tópico 3.5, Métricas de atendimento de requisições de serviço, e o lado do conhecimento está no tópico 3.6, Métricas de gestão do conhecimento.

Termos usados neste tópico:

- **Nível 0 (ou camada de autoatendimento)**: resolução pelo usuário sem contatar a equipe. O nível 1 é a primeira linha de suporte, em geral a central de serviços, e os níveis 2 e 3 são as camadas de especialistas e de engenharia.
- **Deflexão**: um contato que de outro modo teria chegado à equipe e foi resolvido no nível 0. Não pode ser observada diretamente; por isso é sempre uma estimativa.
- **Queda para a equipe (fall-through)**: um usuário que tentou o autoatendimento, não teve sucesso e depois contatou a equipe sobre a mesma necessidade.
- **Runbook**: um procedimento documentado para uma tarefa operacional rotineira. Um [runbook](https://en.wikipedia.org/wiki/Runbook) é o primeiro passo habitual para automatizá-la.
- **Trabalho repetitivo (toil)**: trabalho manual, repetitivo e automatizável, sem valor duradouro (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).
- **Catálogo de serviços**: a lista de serviços e requisições padrão oferecidos aos usuários.

## Princípios-chave

- **Conte resultados, não contatos evitados.** Uma sessão no portal sem ticket é um sucesso apenas quando a necessidade do usuário foi atendida. Defina o sucesso do lado do usuário e verifique-o com um sinal de acompanhamento.
- **A deflexão é uma estimativa; por isso rotule-a como tal.** Declare o método, a comparação usada e a incerteza. Nunca apresente uma cifra estimada de deflexão como um fato medido.
- **Meça o caminho da queda para a equipe.** A rota de uma tentativa de autoatendimento fracassada até um contato com a equipe é onde mora a maior parte da falha escondida. Relate-a ao lado de todo número de sucesso.
- **A automação tem um lado de custo.** Todo fluxo automatizado precisa de manutenção, monitoramento e uma forma de falhar com segurança. Meça juntas a cobertura e a confiabilidade e conte o esforço gasto para manter a automação viva.
- **O shift left muda a mistura além do volume.** Quando o trabalho fácil sai da fila, o trabalho que resta é mais difícil e mais lento em média. Leia o tempo de resolução e o tempo de atendimento com isso em mente (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).
- **As métricas descrevem serviços e fluxos.** Relate por item do catálogo, família de artigos ou fluxo de automação. Nunca classifique atendentes pelo número de usuários que empurraram para o autoatendimento.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de sucesso do autoatendimento | Proporção das sessões de autoatendimento em que a necessidade do usuário foi atendida sem contato com a equipe | Sessões que terminaram em um resultado concluído (requisição enviada e atendida, artigo marcado como útil, redefinição concluída) sem contato com a equipe sobre a mesma necessidade em até 7 dias, divididas por todas as sessões que iniciaram uma tarefa. O relógio começa na primeira ação significativa no portal e para na conclusão ou na desistência. Exclui tráfego de bots, contas de teste e navegação pura | Porcentagem | Registros do portal e de identidade, sistema de tickets, análise de sessões | Gestão de requisições de serviço; gestão do conhecimento | Ciclo de feedback do cliente; critérios de aceitação baseados em resultados | Mensal |
| Taxa estimada de deflexão | Proporção estimada da demanda resolvida no nível 0 que de outro modo teria chegado à equipe | Compare a taxa de contatos por 1.000 usuários ativos de um serviço antes e depois de uma mudança de autoatendimento, ou contra um grupo de controle, ajustada por mudanças conhecidas de demanda. Declarada como estimativa, com o método nomeado. Exclui contatos que migraram para outro canal | Porcentagem (estimativa) | Sistema de tickets, contagens da população de usuários, dados de experimento ou de coorte | Central de serviços; gestão de incidentes | Experimento com grupo de controle; teste A/B | Trimestral |
| Taxa de queda para a equipe | Proporção das tentativas fracassadas de autoatendimento que terminam em contato com a equipe sobre a mesma necessidade | Contatos com a equipe abertos em até 7 dias após uma sessão de autoatendimento abandonada ou malsucedida do mesmo usuário sobre o mesmo assunto, divididos pelas sessões malsucedidas. O relógio começa no fim da sessão. Exclui contatos não relacionados | Porcentagem | Registros do portal cruzados com o sistema de tickets por usuário e assunto | Central de serviços; gestão do conhecimento | Caminho de escalonamento na definição de pronto; feedback do suporte | Mensal |
| Adoção do autoatendimento (parcela portal primeiro) | Proporção das requisições e relatos de incidentes elegíveis levantados por canais de autoatendimento | Itens criados por portal, bot ou API, divididos por todos os itens das entradas do catálogo que oferecem uma rota de autoatendimento. Exclui itens para os quais não existe rota de autoatendimento | Porcentagem | Campo de canal do sistema de tickets, configuração do catálogo | Gestão de requisições de serviço; gestão do catálogo de serviços | Acompanhamento de adoção após um lançamento | Mensal |
| Cobertura de automação | Proporção do trabalho repetível elegível concluído por automação sem nenhuma etapa manual | Itens concluídos por um fluxo automatizado de ponta a ponta, divididos por todos os itens dos tipos julgados automatizáveis. Conta o tipo como automatizável apenas se uma lista escrita de candidatos o nomeia. Exclui trabalho pontual e itens que a automação rejeitou | Porcentagem | Sistema de tickets, registros da plataforma de automação, lista de candidatos | Gestão de requisições de serviço; gestão de implantação | Automação da definição de pronto; pipeline como código | Mensal |
| Taxa de falha e retrabalho da automação | Proporção das execuções automatizadas que falharam, precisaram de reparo manual ou produziram um resultado depois corrigido | Execuções automatizadas que deram erro, sofreram rollback ou foram seguidas de uma correção manual em até 7 dias, divididas por todas as execuções automatizadas. O relógio começa no início da execução. Exclui testes planejados em modo simulado | Porcentagem | Registros da plataforma de automação, sistema de tickets, registros de mudanças | Habilitação de mudanças; gestão de incidentes | Taxa de falha de mudanças; estabilidade de build e de testes | Semanal |
| Tempo de trabalho manual por tipo de requisição | Esforço da equipe gasto em um tipo de requisição candidato à automação | Minutos de trabalho ativo registrados pela equipe em itens do tipo no período, resumidos como mediana e 85º percentil por item. Estimado por amostragem onde o tempo não é registrado. Exclui o tempo de espera | Minutos por item | Amostragem de tempo, registros de trabalho dos tickets | Gestão de requisições de serviço | Acompanhamento de trabalho repetitivo; desperdício no fluxo de valor | Trimestral |
| Distribuição por nível (parcela do shift left) | Onde na cadeia de suporte os itens são resolvidos | Itens resolvidos em cada nível (0, 1, 2, 3) divididos por todos os itens resolvidos no período. O nível é a camada mais alta que fez trabalho ativo. Exclui itens cancelados antes da triagem | Porcentagem por nível | Grupo resolvedor do sistema de tickets e histórico de atribuições | Gestão de incidentes; central de serviços | Padrões de swarming e de escalonamento; equipes multifuncionais | Mensal |

Todas elas são medidas por serviço, item do catálogo ou fluxo, nunca por pessoa. As medidas de tempo devem ser mostradas como a mediana mais um percentil alto, como explica a introdução do tópico sobre letramento estatístico (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

## Recomendações

### Defina o sucesso do lado do usuário

**1. Escreva o que significa "consegui o que precisava" para cada rota de autoatendimento.** Numa redefinição de senha, é uma redefinição concluída e um login bem-sucedido. Numa requisição, é o atendimento, e não o envio. Num artigo, é um usuário que não contatou a equipe de novo sobre a mesma necessidade. Uma definição que para em "viu a página" mede tráfego.

**2. Cruze as sessões de autoatendimento com os contatos posteriores.** A evidência mais forte de falha é um contato com a equipe sobre o mesmo assunto logo depois de uma sessão. Ligue os dois por usuário e assunto onde as regras de privacidade permitirem e, onde não permitirem, use contagens agregadas por assunto e dia. O cruzamento transforma uma história vaga de satisfação em uma taxa de queda para a equipe que você pode melhorar.

**3. Pergunte aos usuários com uma única pergunta no ponto de saída.** Uma pergunta como "Isto resolveu o seu problema?" dá um sinal direto que os registros não dão. Trate as respostas como amostra, leia os comentários em texto livre e compare quem respondeu com quem não respondeu, para que os usuários mais satisfeitos não definam o resultado (veja o tópico 6.1, Métricas de satisfação do cliente).

### Estime a deflexão com honestidade

**4. Prefira uma comparação a um contador.** A estimativa mais limpa vem de um grupo de controle, de uma implantação em fases ou de uma visão de antes e depois dos contatos por 1.000 usuários ativos do serviço afetado. Contar "sessões que não viraram tickets" superestima o efeito, porque muitos desses usuários nunca tiveram uma necessidade que a equipe teria visto. Declare o método e a incerteza ao lado da cifra.

**5. Normalize o volume pelo uso.** Uma queda na contagem de tickets pode seguir uma queda de usuários, um ciclo de lançamentos tranquilo ou uma mudança sazonal. Divida pelos usuários ativos ou pelas transações antes de tirar conclusões (veja o tópico 3.2, Volume e prioridade de incidentes). Anote no gráfico os lançamentos, as campanhas e as mudanças no portal.

**6. Mantenha a deflexão fora das metas.** Uma meta de deflexão premia esconder a rota de contato, enterrar o número de telefone e encerrar sessões de chat cedo. Use a deflexão como estimativa de aprendizado e deixe a meta nos resultados do usuário, como a taxa de sucesso do autoatendimento e o item não resolvido mais antigo.

### Meça a automação como produto, não como projeto

**7. Mantenha uma lista de candidatos e meça a cobertura contra ela.** A cobertura de "todo o trabalho" é uma medida pobre, porque a maior parte do trabalho não é automatizável. Mantenha uma lista escrita e curta de tipos de requisição e de incidente que sejam repetíveis, bem compreendidos e frequentes, classifique-a pelo tempo de trabalho manual e pelo volume e relate a cobertura contra essa lista. Reveja a lista todo trimestre para que o denominador seja honesto.

**8. Pareie a cobertura com a confiabilidade.** Um fluxo automatizado que falha uma execução em dez, ou que produz em silêncio o resultado errado, pode custar mais do que a tarefa manual que substituiu. Acompanhe a taxa de falha e retrabalho, o tempo para detectar uma execução com falha e a frequência com que uma pessoa precisa reparar o resultado. Use as práticas de tratamento de erros que a comunidade de engenharia de confiabilidade de sites descreve: passos idempotentes, alertas claros e um contorno manual seguro (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).

**9. Conte a manutenção.** As automações precisam de responsáveis, controle de versão, testes e atualizações quando os sistemas ao redor mudam. Registre o tempo gasto mantendo cada fluxo e compare-o com o tempo de trabalho manual que removeu. Uma automação que custa mais para manter funcionando do que economiza é candidata à aposentadoria, o que é um resultado normal, e não uma falha.

### Observe o efeito do shift left

**10. Espere que o trabalho restante seja mais difícil.** Quando os contatos rotineiros saem da central de serviços, o tempo médio de atendimento e a resolução no primeiro contato no nível 1 muitas vezes pioram, mesmo que o serviço esteja melhor. Relate a distribuição por nível e a mistura de categorias ao lado dessas medidas e combine de antemão com a liderança que uma alta no tempo de atendimento depois de uma deflexão bem-sucedida é esperada (veja o tópico 3.1, Métricas da central de serviços).

**11. Feche o ciclo com o conhecimento e com a gestão de problemas.** Toda queda para a equipe é evidência de um artigo ausente ou ruim, de um formulário confuso ou de um defeito não corrigido. Encaminhe os principais assuntos de queda para os responsáveis pelo conhecimento e, onde a causa for um defeito, para a gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas). Reveja a lista todo mês e relate quantos itens foram corrigidos.

**12. Compartilhe a capacidade que você libera.** Se a automação e o autoatendimento removem trabalho, decida o que o tempo liberado compra: trabalho de melhoria, correções proativas ou treinamento. As equipes que não veem benefício na automação param de propô-la. Acompanhe ao longo do tempo a parcela planejada da capacidade para melhoria (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de sucesso do autoatendimento | Contar qualquer formulário concluído ou qualquer visualização de página como sucesso; remover a pergunta "isto ajudou" quando as notas caem; excluir assuntos difíceis do denominador | Taxa de queda para a equipe e uma amostra de sessões encerradas lida por uma pessoa; relate as regras do denominador |
| Taxa estimada de deflexão | Esconder a rota de contato; acrescentar passos antes do contato; classificar toda redução de tickets como deflexão, qualquer que seja a causa | Contatos por 1.000 usuários ativos, satisfação do usuário com o serviço afetado e o método escrito ao lado do número |
| Taxa de queda para a equipe | Definir a janela de correspondência tão curta que os retornos caiam fora dela; encerrar o contato de acompanhamento como duplicata | Taxa de contatos repetidos em todos os canais; revisão de uma amostra de contatos de retorno |
| Adoção do autoatendimento (parcela portal primeiro) | Forçar todas as requisições para o portal, qualquer que seja o encaixe; reetiquetar tickets criados por telefone como tickets do portal | Taxa de sucesso do autoatendimento e esforço do usuário; proporção de requisições sem rota viável no portal |
| Cobertura de automação | Escolher itens fáceis para a lista de candidatos; aumentar o denominador com tarefas triviais; contar fluxos parcialmente manuais como automatizados | Lista escrita de candidatos revista todo trimestre; taxa de falha e retrabalho da automação; tempo de trabalho manual dos itens restantes |
| Taxa de falha e retrabalho da automação | Excluir reparos manuais da contagem; deixar execuções com falha tentarem de novo em silêncio até funcionar; rotular falhas como "testes planejados em modo simulado" | Registros de incidentes e de alertas ligados aos fluxos; tempo para detectar uma execução com falha; auditoria amostral dos resultados |
| Tempo de trabalho manual por tipo de requisição | Não registrar o tempo de itens que parecem manuais; atribuir o tempo a outra categoria; amostrar apenas dias tranquilos | Plano de amostragem escrito e revisto; comparação com o tempo de ciclo e a idade da fila do mesmo tipo |
| Distribuição por nível (parcela do shift left) | Elevar a parcela resolvida no nível 1 reclassificando escalonamentos, ou encerrando itens no nível 1 e reabrindo-os no nível 2 como itens novos | Taxa de reabertura e taxa de tickets vinculados; amostra de qualidade da resolução; satisfação do cliente por nível |

Uma leitura saudável mostra o sucesso do autoatendimento subindo junto com uma taxa de queda para a equipe estável ou em queda, a deflexão estimada declarada com seu método, a cobertura de automação subindo contra uma lista de candidatos revista enquanto a falha e o retrabalho permanecem baixos e uma distribuição por nível que move o trabalho para mais cedo sem elevar as taxas de reabertura nem reduzir a satisfação. Se um número melhora enquanto sua barreira de proteção piora, trate a melhoria como não comprovada.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Autoatendimento primeiro | Resultados imediatos para os usuários, menor custo marginal, disponível a qualquer hora | Usuários com necessidades complexas ou incomuns podem se sentir abandonados; conteúdo fraco cria mais contatos do que remove |
| Contato com a equipe primeiro | Ajuda pessoal, julgamento e a chance de notar problemas incomuns | Mais lento, caro e dependente da disponibilidade da equipe |
| Estimar a deflexão com um grupo de controle | Evidência crível do efeito | Exige trabalho de projeto e tolerância a um grupo que não recebe a mudança |
| Contar sessões sem tickets | Barato e sempre disponível | Superestima o sucesso; convida à manipulação; não distingue sucesso de desistência |
| Automação ampla | Execução consistente e menos trabalho repetitivo | Carga de manutenção, modos de falha que escalam e habilidades que podem se perder na equipe |
| Automação seletiva de fluxos estáveis | Melhor retorno pelo esforço e menos surpresas | Deixa algum trabalho manual no lugar, que precisa da própria atenção |

A resposta pragmática é automatizar o que é frequente, estável e bem compreendido e manter uma pessoa disponível onde a necessidade é pouco clara ou o risco é alto. O autoatendimento deve ser julgado por se as pessoas foram ajudadas, com a rota atendida pela equipe mantida visível. As economias do shift left só são reais quando o resultado do usuário se sustenta; por isso conte os dois lados.

## Perguntas para discutir com sua equipe

**1. Quando um usuário abre o portal e sai sem levantar um ticket, o que presumimos que aconteceu e como descobriríamos?**
Peça ao grupo que liste as histórias possíveis: o usuário achou a resposta, desistiu, ligou em vez disso ou perguntou a um colega. Olhem que dados as separariam, como um contato posterior, uma pergunta na saída ou uma amostra de sessões. O facilitador deve registrar qual suposição está hoje no painel e quem depende dela. Feche combinando uma mudança que troque uma suposição por evidência.

**2. Como estimamos hoje a deflexão, e defenderíamos o método diante de um parceiro cético das finanças?**
Percorram o cálculo passo a passo, incluindo o grupo de comparação e os ajustes por mudanças de demanda. Perguntem o que mais mudou no período, como lançamentos, interrupções ou mudanças de equipe. Anotem a faixa de valores plausíveis além da manchete. A discussão deve terminar com uma declaração simples do método que possa ficar ao lado do número.

**3. Quais das nossas automações desligaríamos amanhã se conhecêssemos seu custo real?**
Liste os fluxos automatizados com seus responsáveis, data da última mudança, contagens de execuções, taxas de falha e esforço de manutenção. Pergunte quais ninguém sentiria falta e quais as pessoas têm medo de tocar. O facilitador deve tratar a aposentadoria como um resultado legítimo. As respostas muitas vezes revelam fluxos sem responsável.

**4. O que acontece com um usuário cuja tentativa de autoatendimento falha, e quanto tempo leva para chegar a uma pessoa?**
Peça a alguém que percorra o caminho como um usuário faria, incluindo achar a rota de contato. Cronometrem e anotem cada passo que poderia ser encurtado. Comparem a experiência com a intenção declarada do portal. O grupo deve decidir se a rota é tão fácil de achar quanto a de autoatendimento.

**5. Como era a mistura de trabalho da central de serviços há um ano e como é agora?**
Revejam a mistura de categorias e a distribuição por nível ao longo do tempo. Discutam por que o tempo de atendimento ou a resolução no primeiro contato mudaram e se isso reflete uma mistura mais difícil. Perguntem se a liderança foi avisada de que isso é esperado. Combinem como apresentar a tendência para que uma alta no tempo de atendimento depois de um shift left bem-sucedido não seja lida como declínio.

**6. O que faríamos com a capacidade que a automação libera, e quem decide?**
Estimem as horas removidas do trabalho manual e nomeiem o que deveriam comprar. Perguntem se o tempo foi para trabalho de melhoria ou absorvido por nova demanda. Discutam como a equipe saberia. O facilitador deve pressionar por um compromisso concreto, como uma parcela da capacidade reservada para corrigir os principais assuntos de queda para a equipe.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas de boa parte do que faz o autoatendimento dar certo: mensagens de erro claras, formulários utilizáveis, ajuda dentro do produto e a possibilidade de fazer tarefas sem levantar um ticket. Também são donas da automação que vive em pipelines e em código de infraestrutura. Suas medidas úteis são o sucesso do autoatendimento nas próprias funcionalidades e os passos manuais que restam no trabalho de release e de ambientes, tratados como trabalho repetitivo a remover (veja o tópico 2.8, Métricas DORA). Devem ler os assuntos de queda para a equipe como um backlog de produto.

### Equipes de serviço e operações

As equipes de operações carregam o parque de automação e o contorno atendido por pessoas. Devem acompanhar a confiabilidade da automação, a carga de manutenção e o tempo de trabalho manual que resta e observar a distribuição por nível sem serem penalizadas pelo trabalho mais difícil que permanece. Os atendentes devem ser consultados sobre quais requisições são bons candidatos à automação, porque sabem onde está o atrito real. Relatem por fluxo e tipo de requisição, e nunca por atendente.

### Liderança e governança

Os líderes são tentados a tratar a deflexão como uma cifra de economia de custos. Um pedido melhor é pelo resultado do usuário, pelo método por trás de qualquer estimativa e pela confiabilidade da automação. A governança deve esperar uma lista de candidatos, um responsável por cada fluxo automatizado e uma regra de aposentadoria. Os líderes também devem proteger a rota atendida por pessoas contra ser escondida para cumprir uma meta (veja o tópico 11.3, Implantar métricas sem criar medo).

### Clientes e usuários

Os usuários querem seguir com o seu trabalho. Muitos preferem o autoatendimento quando funciona, e quase todos detestam ficar presos nele quando não funciona. Sua experiência é mais bem captada por perguntas de esforço e de resultado no ponto de saída e por se uma tentativa fracassada levou depressa a uma pessoa (veja o tópico 6.4, Experiência de usuários e colaboradores). Usuários com necessidades de acessibilidade ou pouca confiança são um alerta precoce para portais que funcionam só para o usuário médio.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um varejista on-line de médio porte mantém uma central de serviços, uma equipe de plataforma e várias equipes de produto. Os números deste exemplo são ilustrativos.

O departamento lança um portal redesenhado com redefinição de senha guiada, um fluxo de requisição de acesso a software e um chatbot para perguntas comuns. Três meses depois, o relatório do portal mostra que 62% das sessões terminam sem ticket, e um gerente propõe chamar isso de "deflexão" e definir uma meta de 70%. A líder da central de serviços fica inquieta, porque os atendentes relatam que as pessoas que ligam dizem que "tentaram o portal primeiro".

A equipe revê as medidas. Define o sucesso do autoatendimento como um resultado concluído sem contato com a equipe sobre o mesmo assunto em até 7 dias. Com essa definição, a taxa de sucesso é de 48%, e não 62%, e a taxa de queda para a equipe do fluxo de requisição de acesso é de 31%. Lendo uma amostra de 40 contatos de queda, descobre que a maioria dos usuários não sabia distinguir entre dois itens parecidos do catálogo e que o chatbot respondia a uma pergunta sobre uma ferramenta aposentada.

A equipe toma três decisões. Primeiro, a medida de manchete passa a ser o sucesso do autoatendimento, com a deflexão estimada mostrada apenas como uma estimativa trimestral baseada em contatos por 1.000 usuários ativos, e nenhuma meta é definida para a deflexão. Segundo, os dois itens parecidos do catálogo são fundidos, o conteúdo do chatbot é corrigido e os dois principais assuntos de queda são acrescentados ao backlog de melhoria com um responsável. Terceiro, um processo manual de criação de ambientes de teste, que toma dos engenheiros de plataforma uma mediana de 25 minutos (ilustrativo) e acontece cerca de 40 vezes por mês (ilustrativo), é acrescentado à lista de candidatos à automação.

A equipe de plataforma automatiza o fluxo de ambientes dentro do trimestre. Um risco de manipulação aparece logo: a cobertura do fluxo sobe, mas a taxa de falha e retrabalho mostra que uma execução em oito (ilustrativo) precisa de reparo manual e que os reparos eram registrados como "manutenção planejada". A equipe acrescenta as execuções reparadas à contagem de falhas, liga as execuções ao registro de incidentes e combina rever o fluxo todo mês. Na revisão seguinte, a taxa de sucesso subiu para 57% (ilustrativo), a taxa de queda para a equipe caiu e o tempo de atendimento da central subiu um pouco porque os contatos restantes são mais difíceis. A chefe de TI concorda em apresentar o tempo de atendimento junto com a distribuição por nível, para que a alta não seja lida como declínio.

## Ágil, IA, automação e análise

### Ágil

Melhore o autoatendimento em pequenos passos, com o feedback dos usuários, porque o portal é um produto usado por pessoas reais. O cuidado é que um mandato de portal primeiro pode elevar a adoção enquanto frustra usuários que precisam de uma pessoa.

### IA

O chat e a busca com IA podem elevar o volume de autoatendimento e a deflexão estimada, mas um contato desviado pode ser um problema não resolvido. Pareie a deflexão com a taxa de sucesso do autoatendimento medida por uma resposta do usuário ou por uma janela de não retorno e com a taxa de queda para uma pessoa. O cuidado é que um modelo que responde com confiança e erradamente produz contatos que voltam depois.

### Automação

Meça a automação pela cobertura, pelas falhas e pelo retrabalho e pelo tempo de trabalho manual que ela remove. Registre cada ação automatizada para poder auditá-la e revertê-la. O cuidado é que os números de cobertura premiam automatizar tarefas fáceis; por isso acompanhe também as difíceis.

### Análise

Mostre o sucesso, a queda para a equipe e o recontato em uma só página, por tipo de requisição, com contagens. A decisão informada é o que automatizar a seguir. O cuidado é que a deflexão é uma estimativa; por isso rotule-a como tal e verifique-a com uma amostra de usuários.

## Olhar setorial

**Startup.** Os fundadores muitas vezes conseguem corrigir um caminho de autoatendimento ruim conversando com o usuário. Meça o sucesso com uma única pergunta na saída e algumas leituras de sessões reais e automatize as duas ou três tarefas que mais interrompem pessoas. Evite construir um bot antes de as respostas escritas serem boas.

**Pequena empresa.** Uma só pessoa pode cuidar da TI de todos; por isso o autoatendimento significa sobretudo bons guias curtos e um formulário de requisições compartilhado. A automação da criação de contas e das redefinições de senha se paga depressa, desde que alguém seja dono de cada fluxo. Mantenha óbvia a rota atendida por pessoas, porque de outro modo a própria equipe do dono vai contornar o sistema.

**Grande empresa.** A escala aumenta tanto o benefício quanto a manipulação. Padronize as definições entre as unidades de negócio, mantenha uma lista central de candidatos e um registro de automações e relate por serviço e item do catálogo. Cuidado ao comparar unidades que atendem populações de usuários muito diferentes.

**Governo e setor público.** A acessibilidade, o acesso por idioma e a obrigação de atender pessoas que não podem usar canais digitais são insumos de projeto, e não extras. Mantenha disponíveis e medidas as rotas assistidas, documente as decisões automatizadas que afetam pessoas e espere perguntas de auditoria sobre quem é dono de cada fluxo automatizado (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

As motivações são menos contatos repetitivos, resultados mais rápidos para os usuários, execução mais firme das tarefas rotineiras e mais capacidade para o trabalho de melhoria. O lado do custo inclui construir e manter o portal e o conteúdo, o trabalho de integração e de dados para cruzar sessões e tickets, a plataforma de automação e o tempo para escrever, testar e ser dono de cada fluxo automatizado. Amostras do tempo da equipe e uma curta pesquisa de saída custam pouco e fornecem a maior parte da evidência de que você precisa.

O retorno deve ser argumentado a partir dos seus próprios dados. Use o tempo de trabalho manual e o volume para estimar o esforço que uma automação remove, subtraia a manutenção e o custo das falhas e relate o resultado como uma faixa, com suas premissas. Para o autoatendimento, use a taxa de queda para a equipe e os resultados amostrados para mostrar a parcela de contatos evitados porque os usuários foram ajudados, e não apenas dispensados. Não importe porcentagens de deflexão ou de economia de fornecedores ou de pesquisas; meça antes a sua própria linha de base. O custo total de propriedade de uma automação inclui as mudanças de que ela precisará conforme os sistemas ao redor evoluem; por isso reserve orçamento para elas.

## Antipadrões e armadilhas

- **Contar sessões sem tickets como sucesso.** Não consegue separar ajuda de desistência. Defina o sucesso pelo resultado e verifique-o com a queda para a equipe e o feedback na saída.
- **Metas de deflexão.** Premiam esconder a rota de contato. Use a deflexão como estimativa e defina metas sobre os resultados do usuário.
- **Esconder o telefone ou o chat.** Os usuários que não conseguem alcançar uma pessoa elevam o esforço e perdem a confiança. Mantenha visível a rota atendida por pessoas e meça quanto tempo leva para alcançá-la.
- **Automatizar antes de entender o processo.** O fluxo codifica a confusão em alta velocidade. Documente e simplifique primeiro o runbook e depois automatize a versão estável.
- **Automação sem responsáveis.** Os fluxos sem dono decaem em silêncio e falham em momentos ruins. Dê a cada fluxo um responsável, um teste, um monitor e uma regra de aposentadoria.
- **Ignorar o custo da falha.** Uma cifra alta de cobertura com retrabalho não medido é um passivo oculto. Relate a taxa de falha e retrabalho junto com a cobertura.
- **Ler uma alta no tempo de atendimento como declínio.** Depois de um shift left bem-sucedido, o trabalho restante é mais difícil. Mostre a distribuição por nível e a mistura de categorias ao lado das medidas de tempo.
- **Classificar atendentes por contatos desviados.** Produz o afastamento de usuários e estraga os dados. Relate apenas por serviço e fluxo.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Sucesso do autoatendimento e deflexão | Visitas ao portal e contagens de tickets relatadas; sem definição de resultado | Sucesso definido para algumas rotas; deflexão citada sem método | Uma definição escrita de sucesso; queda para a equipe medida; deflexão rotulada como estimativa | Sucesso e queda para a equipe acompanhados ao longo do tempo com feedback na saída; deflexão estimada por comparação | Resultados compartilhados com equipes de produto e fornecedores; os assuntos de queda para a equipe orientam correções financiadas |
| Cobertura e confiabilidade da automação | Automação ad hoc; sem lista de candidatos | Alguns fluxos automatizados por equipes individuais; falhas tratadas informalmente | Lista de candidatos, responsáveis e medidas de falha definidos para todo fluxo automatizado | Cobertura, taxa de falha e esforço de manutenção revistos e financiados em uma cadência | Automação coordenada entre equipes e fornecedores; fluxos aposentados e revistos rotineiramente |
| Efeito do shift left e uso | Volume relatado sem contexto | Distribuição por nível acompanhada por poucas equipes | Distribuição por nível e mistura de categorias relatadas ao lado do tempo de atendimento | Capacidade liberada planejada e acompanhada; a liderança lê corretamente os efeitos da mistura | Capacidade e aprendizado fluem de volta aos serviços e ao projeto do catálogo em toda a organização |

## Lista de verificação

- [ ] O sucesso do autoatendimento é definido por resultado, com início, parada e exclusões escritos.
- [ ] A taxa de queda para a equipe é medida para as principais rotas de autoatendimento.
- [ ] Toda cifra de deflexão declara seu método e é rotulada como estimativa.
- [ ] Nenhuma meta é definida sobre a deflexão.
- [ ] Existe uma pergunta de saída de uma questão, ou feedback equivalente, para as rotas-chave.
- [ ] Existe uma lista escrita de candidatos à automação, revista a cada trimestre.
- [ ] Todo fluxo automatizado tem um responsável, um monitor e uma medida de falha e retrabalho.
- [ ] O tempo de trabalho manual é amostrado para os principais tipos de requisição.
- [ ] A distribuição por nível é mostrada ao lado do tempo de atendimento e da resolução no primeiro contato.
- [ ] A rota atendida por pessoas é visível e seu tempo de acesso é conferido.
- [ ] Os principais assuntos de queda para a equipe são revistos mensalmente e encaminhados aos responsáveis.
- [ ] Nenhuma métrica deste tópico é relatada ou usada como meta por atendente.

## Prompts de IA

**Confira como estimamos a deflexão.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Analise os assuntos de queda para a equipe a partir de uma amostra.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Classifique os candidatos à automação.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Projete as barreiras de proteção de um fluxo automatizado.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico relacionado e a barreira de proteção de uma métrica de autoatendimento ou de automação que você pretende introduzir.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm toda métrica pareada com um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- O sucesso do autoatendimento é um resultado do usuário; por isso defina-o do lado do usuário e verifique-o com a queda para a equipe e o feedback na saída.
- A deflexão é uma estimativa; por isso declare o método e mantenha-a fora das metas.
- A cobertura de automação significa pouco sem confiabilidade, manutenção e uma lista de candidatos revista.
- O shift left eleva a dificuldade do trabalho restante; por isso leia o tempo de atendimento com a distribuição por nível e a mistura de categorias.
- Meça fluxos, serviços e itens do catálogo, nunca atendentes, e mantenha visível a rota atendida por pessoas.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Software de autoatendimento](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automação](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
