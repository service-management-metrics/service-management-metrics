# Métricas de trabalho repetitivo e plantão

**Um serviço só é tão confiável quanto o rodízio que cuida dele; por isso meça as interrupções, a carga noturna e a parcela do tempo perdida em trabalho manual e repetitivo para o rodízio como um todo e use os números para financiar a prevenção e a automação, nunca para comparar pessoas.**

## Visão geral e motivação

A confiabilidade costuma ser descrita em termos do sistema: disponibilidade, latência, taxas de erros. Por trás de todo serviço que tem usuários no meio da noite há um sistema humano que responde quando o sistema falha. Esse sistema humano tem limites. Um rodízio que é acionado com frequência demais, acorda gente demais ou gasta a maior parte da semana em tarefas manuais e repetitivas vai desacelerar, cometer mais erros e, no fim, perder pessoas. As outras métricas da Parte 5 podem parecer saudáveis até o ponto em que as pessoas que as mantêm unidas vão embora.

Duas ideias organizam este tópico. A primeira é o trabalho de [plantão (on-call)](https://en.wikipedia.org/wiki/On-call): um rodízio de pessoas que estão acessíveis e prontas para responder a alertas fora dos padrões normais de trabalho. Um **page** é um alerta que interrompe quem responde, geralmente por pager, ligação telefônica ou notificação push. Um **turno (shift)** é um período de serviço de plantão, por exemplo um dia, uma semana ou uma noite. Um **rodízio (rotation)** é o grupo de pessoas que assumem turnos em sequência. A segunda ideia é o **trabalho repetitivo (toil)**, termo da [engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), a disciplina de operar serviços com métodos de engenharia de software. No livro *Site Reliability Engineering*, do Google, o toil é o trabalho operacional ligado à operação de um serviço em produção que tende a ser manual, repetitivo, automatizável, tático, sem valor duradouro e crescente na mesma proporção do serviço. Não é o mesmo que sobrecarga administrativa, como reuniões, e não é simplesmente um trabalho de que alguém não gosta.

O ITIL 4 não tem uma prática chamada "gestão de toil". O material está espalhado por várias práticas. A [gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management) e o monitoramento e a gestão de eventos produzem os pages. A gestão de problemas remove as causas que continuam produzindo-os. A gestão de requisições de serviço e a gestão de implantação produzem boa parte do trabalho manual repetitivo. A gestão de pessoal e de talentos e a melhoria contínua são donas do lado humano. A contrapartida ágil é o acordo de trabalho da equipe sobre trabalho não planejado e ritmo sustentável, e o hábito de DevOps de que a equipe que constrói um serviço também carrega parte do pager dele.

As medidas aqui tratam de carga e sustentabilidade. O tratamento de incidentes pertence a outros tópicos (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes, e o tópico 3.4, Métricas de incidentes graves), assim como a qualidade dos alertas individuais (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas). Este tópico pergunta quanto custa às pessoas do rodízio manter o serviço funcionando e se esse custo é sustentável.

### Por que isto pertence à confiabilidade

A fadiga tem consequências operacionais. A [privação de sono](https://en.wikipedia.org/wiki/Sleep_deprivation) degrada o julgamento e o tempo de reação, e quem responde cansado no começo de um incidente demora mais para diagnosticá-lo e é mais propenso a cometer um segundo erro ao corrigir o primeiro. A [fadiga de alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue) é o efeito relacionado de alertas demais: as pessoas deixam de tratar cada um como urgente. O [esgotamento profissional (burnout)](https://en.wikipedia.org/wiki/Occupational_burnout) é o resultado de longo prazo da sobrecarga sustentada e aparece como evasão, doença e desengajamento, que são lentos, caros e difíceis de reverter. Uma equipe que mede a confiabilidade do serviço sem medir a sustentabilidade do seu rodízio está observando só o efeito e ignorando parte da causa.

Este tópico descreve rodízios, turnos e serviços e nunca classifica indivíduos. Uma visão do ITIL parte do incidente e do serviço, uma visão de SRE parte do custo em pessoa-tempo e uma visão ágil parte da capacidade para o trabalho planejado.

## Princípios-chave

- **Meça o rodízio, não a pessoa.** Relate a carga por serviço, turno e posição no rodízio. A contagem de pages de uma pessoa depende do turno que lhe coube, e uma tabela de classificação ensina as pessoas a esconder interrupções.
- **Conte quando as interrupções acontecem, além de quanto duram.** Um page de cinco minutos às 3 da manhã pode custar uma noite de sono.
- **Defina o toil de forma estreita e deixe a equipe classificá-lo.** Toil é um tipo específico de trabalho, e não um sinônimo de trabalho de que as pessoas não gostam.
- **Trate a carga como sinal de investimento.** Um volume alto de pages ou uma parcela alta de toil é evidência de que um serviço, uma ferramenta ou um nível de pessoal precisa de trabalho.
- **Pareie toda medida de carga com uma medida de qualidade.** Menos pages só é boa notícia se os incidentes continuam sendo detectados.
- **Mostre distribuições e compartilhe os dados primeiro com o rodízio.** Um turno médio esconde um punhado de noites terríveis, e as pessoas de plantão são as melhores juízas de se os números combinam com a experiência delas.

## Definições de métricas

A tabela dá o conjunto central. Toda medida de tempo ou de contagem declara onde começa e para e o que é excluído. "Fora do expediente" deve ser definido uma vez por rodízio como uma janela escrita em horário local, incluindo fins de semana e feriados, porque as pessoas de um rodízio distribuído podem ter horários locais diferentes.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pages por turno | Número de pages entregues a um rodízio durante um turno | Contagem de pages entregues entre o início e o fim do turno, uma contagem por turno, depois de fundir pages duplicados do mesmo grupo de alertas em 5 minutos (a janela de fusão é um ajuste da equipe). Pages de teste e pages enviados por engano são excluídos. Relate a mediana e o 90º percentil entre turnos, mais o turno mais ocupado | pages por turno | Ferramenta de acionamento; escala de plantão | Gestão de incidentes; monitoramento e gestão de eventos | Política de trabalho não planejado; ritmo sustentável | Revisão semanal, tendência mensal |
| Parcela de pages fora do expediente | Proporção dos pages que chegam fora da janela de trabalho escrita | Pages entregues fora da janela de trabalho / todos os pages entregues, no período. A janela é definida por rodízio em horário local; feriados contam como fora da janela | porcentagem | Ferramenta de acionamento; calendário do rodízio | Gestão de incidentes; monitoramento e gestão de eventos | Acordo de trabalho sobre disponibilidade | Mensal |
| Taxa de interrupção noturna | Com que frequência um turno inclui pelo menos um page na janela de sono protegida | Turnos com pelo menos um page na janela de sono protegida (por exemplo, 22h às 7h local, definida pela equipe) / todos os turnos no período. Um page reconhecido automaticamente sem resposta humana é excluído | porcentagem dos turnos | Ferramenta de acionamento; registro de reconhecimentos | Gestão de incidentes; gestão de pessoal e de talentos | Ritmo sustentável; verificação de saúde da equipe | Mensal |
| Parcela de tempo em toil | Proporção do tempo de trabalho de um rodízio gasta em toil | Horas que o rodízio registra em trabalho classificado como toil / total de horas de trabalho registradas pelo rodízio, em um mês. Reuniões, treinamento e licenças são excluídos do numerador e do denominador. A classificação segue as seis características do toil, aplicadas pela equipe | porcentagem do tempo | Amostragem de tempo ou rótulos de tarefas no rastreador de trabalho; revisão da classificação pela equipe | Melhoria contínua; gestão de implantação; gestão de requisições de serviço | Parcela de trabalho não planejado; alocação de capacidade no trabalho planejado | Mensal, com revisão trimestral da classificação |
| Toil por fonte | Distribuição das horas de toil entre fontes nomeadas, como reinicializações manuais, requisições de acesso, renovações de certificados e triagem de tickets | Horas de toil de cada fonte / total de horas de toil, listando as cinco principais fontes e um grupo "outras". Mesmas exclusões da parcela de tempo em toil | porcentagem das horas de toil por fonte | Amostragem de tempo ou rótulos de tarefas no rastreador de trabalho | Gestão de problemas; gestão de requisições de serviço | Backlog de itens de melhoria | Trimestral |
| Taxa de pages repetidos | Proporção dos pages causados por uma condição que já acionou o rodízio antes dentro de uma janela declarada | Pages cujo grupo de alertas ou código de causa coincide com um page anterior em até 30 dias / todos os pages no período. Um código de causa é definido por quem responde no encerramento; códigos não definidos são relatados à parte | porcentagem | Ferramenta de acionamento; códigos de causa do registro de incidentes | Gestão de problemas; gestão de incidentes | Ações de retrospectiva; backlog de dívida técnica | Mensal |
| Profundidade do rodízio | Quantas pessoas qualificadas dividem o pager em comparação com o número de papéis a preencher | Número de pessoas que concluíram a prontidão para plantão e estão disponíveis para turnos / número de posições de turno por ciclo do rodízio. Licenças e cessões reduzem a disponibilidade. Relate como razão por rodízio, nunca por pessoa | razão | Escala do rodízio; lista de verificação de prontidão | Gestão de pessoal e de talentos | Equipe multifuncional; matriz de habilidades | Trimestral |
| Toil removido | Horas de toil recorrente retiradas do trabalho do rodízio por uma automação ou mudança de projeto | Horas mensais estimadas de toil de uma fonte antes da mudança menos as mesmas depois da mudança, medidas durante pelo menos dois ciclos após a entrega. Horas economizadas por uma limpeza pontual são excluídas | horas por mês | Amostragem de tempo antes e depois; ticket de melhoria | Melhoria contínua; gestão de problemas | Item de melhoria entregue | Trimestral |

Uma contagem de pages é uma contagem de interrupções, e não de incidentes: um incidente pode gerar uma dúzia de pages. A parcela de tempo em toil depende de um registro honesto; por isso trate-a como uma estimativa combinada.

## Recomendações

### Defina os termos antes de contar

**1. Escreva o que conta como page, turno e fora do expediente.** As equipes contam coisas diferentes sob a mesma palavra. Um page pode ser qualquer notificação, só as que chegam a um humano ou só as que exigem ação. Escolha uma definição, declare a janela de fusão para duplicatas e registre a janela de trabalho em horário local. Sem isso, os números mudarão quando uma ferramenta for reconfigurada, e a tendência enganará.

**2. Combine o que é toil, com exemplos do seu próprio serviço.** Parta das seis características do livro de SRE. Escreva uma lista curta de exemplos e de não exemplos, como reiniciar um job travado (toil), projetar uma nova ferramenta de recuperação (engenharia) e uma reunião de planejamento (sobrecarga administrativa). Reveja a lista quando surgirem discordâncias.

**3. Escolha como medir a parcela de toil e aceite seus limites.** As opções baratas são a amostragem de tempo, os rótulos de tarefas no rastreador de trabalho e uma curta estimativa quinzenal. Nenhuma é exata; por isso escolha a de menor sobrecarga, rode-a por um trimestre e julgue mais a tendência do que o valor absoluto.

### Meça a carga sobre o rodízio

**4. Relate os pages por turno como uma distribuição.** O turno médio esconde o que o rodízio sente. Mostre a mediana, o 90º percentil e o turno mais ocupado e acrescente uma nota sobre o que aconteceu nesse turno. Uma mediana quieta com uma cauda terrível significa algumas noites ruins, o que é um problema diferente de um rodízio constantemente ocupado. Veja o tópico 1.6, Letramento estatístico para métricas de serviço, para ler percentis.

**5. Ponha o horário ao lado do volume.** A parcela de pages fora do expediente e a taxa de interrupção noturna mostram quando a carga cai. Cinco pages em horário comercial são um incômodo; cinco entre a meia-noite e as 5h são um custo diferente. Mostre os dois na mesma página.

**6. Olhe a distribuição entre turnos, e não entre pessoas.** Um rodízio em que um turno recorrente (por exemplo, o fim de semana ou a passagem de segunda-feira) recolhe a maior parte dos pages precisa de uma correção diferente da de um rodízio em que a carga é uniforme. Relate a proporção de pages por posição no turno e por dia. Quando os dados são relatados por indivíduo nomeado, espere que sejam lidos como uma classificação; por isso não produza essa visão.

**7. Conte separadamente a carga dos incidentes graves.** Um incidente grave pode gerar mais interrupções em uma noite do que um mês normal. Relate-o como uma linha própria para que um evento não distorça a tendência (veja o tópico 3.4, Métricas de incidentes graves).

### Ligue a carga às causas e às correções

**8. Ligue os pages a problemas e acompanhe as repetições.** A taxa de pages repetidos mostra quanto da carga vem de causas já conhecidas. Uma taxa de repetição alta é um argumento a favor da gestão de problemas, e não de uma resposta mais rápida. Alimente o backlog de problemas com as principais causas repetidas e registre o vínculo (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 4.6, Dívida técnica e erros conhecidos).

**9. Classifique as fontes de toil e ataque a maior.** Um [gráfico de Pareto](https://en.wikipedia.org/wiki/Pareto_chart) das horas de toil por fonte costuma mostrar algumas fontes responsáveis pela maior parte do tempo. Escolha a maior, decida se pode ser eliminada por projeto, automatizada ou entregue à equipe dona da causa e programe-a como trabalho de funcionalidade. Prefira remover a necessidade a automatizar o passo, porque um passo automatizado ainda precisa ser mantido.

**10. Meça o toil removido, e não as automações escritas.** Uma automação que ninguém usa não remove nada. Meça as horas de toil antes e depois, durante pelo menos dois ciclos, e registre o esforço de construir e manter a automação. Esse é o retorno honesto e evita um programa de "automação" que acrescenta scripts sem remover trabalho. Veja o tópico 3.7, Métricas de autoatendimento e automação, para a adoção da automação pelos usuários.

### Mantenha o sistema sustentável

**11. Defina os limites do rodízio em um acordo da equipe e depois observe a profundidade do rodízio.** Combine com que frequência uma pessoa pode ficar de plantão, quantas noites consecutivas são aceitáveis e que descanso se segue a uma noite ruim. A profundidade do rodízio mostra se o rodízio tem pessoas qualificadas suficientes para o limite combinado. Um rodízio que é nominalmente de oito pessoas mas efetivamente de três, porque as outras ainda não estão prontas ou estão de licença, não cumpre o limite, diga o que disser a escala.

**12. Use os números para pedir algo específico.** Um número de carga apoia um pedido: uma mudança de pessoal, tempo tirado do trabalho de funcionalidades para pagar toil, uma mudança nos limiares de alerta ou uma descontinuação. Declare o pedido ao lado do número, ou as pessoas deixarão de registrar (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Pages por turno | Elevar os limiares de alerta ou silenciar alertas para que a contagem caia; fundir alertas não relacionados em um page; mover pages para uma fila de tickets que ninguém observa | Cobertura de detecção e incidentes relatados por clientes que o monitoramento perdeu (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas); tempo até detectar (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes) |
| Parcela de pages fora do expediente | Redefinir a janela de trabalho para ser mais larga; reprogramar jobs e implantações para que os pages passem para o horário comercial sem serem reduzidos; reclassificar pages como "baixa urgência" | Volume total de pages ao lado da parcela; janela de trabalho escrita sob controle de mudanças; uma revisão do que mudou de lugar |
| Taxa de interrupção noturna | Atrasar o reconhecimento até a manhã; reconhecer pages automaticamente; contar apenas pages que chegaram a um humano | Tempo até reconhecer por hora (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes); pages sem resposta humana relatados à parte; impacto sobre o cliente à noite |
| Parcela de tempo em toil | Reclassificar toil como "engenharia" ou "trabalho de projeto"; registrar menos do que foi gasto; rotular só o que é fácil de descrever | Uma auditoria periódica dos itens classificados por alguém de fora do rodízio; a visão da própria equipe sobre como foi a semana; a parcela de tempo gasta em trabalho de melhoria planejado |
| Toil por fonte | Dividir uma fonte grande em várias pequenas para que nenhuma se destaque; deixar uma fonte sem nome em "outras" | Um teto para o grupo "outras" (por exemplo, menos de um quinto das horas de toil, um ajuste da equipe); amostragem dos itens "outras" a cada trimestre |
| Taxa de pages repetidos | Encerrar pages com um novo código de causa a cada vez para que as correspondências sejam perdidas; alargar os códigos de causa até tudo ser distinto; alongar ou encurtar a janela | Auditoria dos códigos de causa em uma amostra; recorrência do mesmo grupo de alertas entre incidentes (veja o tópico 4.1, Métricas de gestão de problemas) |
| Profundidade do rodízio | Contar pessoas que não concluíram a prontidão; contar pessoas raramente disponíveis; inflar a escala | Proporção dos turnos realmente cobertos pelo grupo nominal; contagem real de turnos por posição, relatada sem nomes; conclusão da lista de verificação de prontidão |
| Toil removido | Contar limpezas pontuais como economias recorrentes; ignorar o esforço de construir e manter a automação; alegar economias sem um antes e depois | Horas antes e depois medidas durante dois ciclos; esforço de manutenção da automação; parcela de tempo em toil nos trimestres seguintes |

Uma leitura saudável é a de um rodízio cujo turno mediano é quieto e cujo pior turno é raro, com poucos pages à noite, uma parcela decrescente de pages repetidos e uma parcela de toil que cai porque as fontes foram removidas, e não porque foram reclassificadas. Mostra também o esforço para chegar lá: trabalho de melhoria aparecendo no plano, financiado e entregue. Se as contagens de pages caem enquanto os clientes relatam mais incidentes que o monitoramento não pegou, os números estão melhorando por desviar o olhar.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Contar pages a partir da ferramenta de acionamento | Automática, barata e difícil de contestar | Conta interrupções, e não seu custo; ajustar alertas muda a contagem sem mudar a carga |
| Amostragem de tempo para o toil | Exatidão razoável com esforço modesto | Exige disciplina; amostras pequenas são ruidosas |
| Relato no nível do rodízio | Combina com a forma como o trabalho é organizado; seguro de compartilhar amplamente | Pode esconder uma pessoa que está com dificuldade; precisa de um canal de conversa de apoio ao lado |
| Teto rígido para o toil (por exemplo, a meta do livro de SRE de manter o toil abaixo de 50% do tempo) | Um sinal claro que dispara uma resposta | Um número pode ser cumprido por reclassificação; um teto precisa de apoio da gestão |

A tensão central é entre aceitação e investimento. É fácil tratar uma carga alta como o preço normal de um serviço importante e pedir às pessoas que a absorvam, e é fácil definir um teto que ninguém tem poder de impor. O caminho é parear cada medida com uma decisão: um limiar em que a equipe para e age, um responsável nomeado pela ação e uma data para olhar de novo. Os números no nível do rodízio são seguros e às vezes grosseiros demais. Quando alguém está com dificuldade, a conversa pertence a essa pessoa e ao seu gestor, usando o relato dela mesma sobre a semana.

## Perguntas para discutir com sua equipe

**1. Como foi o nosso turno mais ocupado do último trimestre, e o que os números dizem sobre ele?**
Comece pela história antes do gráfico. Peça a quem estava de plantão que descreva o turno e depois compare com os números de pages por turno e de interrupção noturna. Se os números subestimam a experiência, descubra o que falta, como ligações não registradas ou trabalho feito depois do page. Registre essa lista como a próxima melhoria de medição.

**2. O que diríamos que é toil na nossa equipe, e o que diríamos que não é?**
Ponham cinco ou seis tarefas recentes num quadro e peçam a cada pessoa que as classifique como toil, engenharia ou sobrecarga administrativa conforme as seis características. Esperem discordância e tratem-na como útil: as discordâncias mostram onde a definição é vaga. Combinem uma definição de trabalho para o próximo trimestre e escrevam dois exemplos de cada. Evitem debater se o trabalho é agradável, porque a pergunta é se é manual, repetitivo e automatizável.

**3. Qual alerta ou tarefa apagaríamos primeiro, se pudéssemos?**
Peçam o alerta ou a tarefa recorrente que todos temem e depois perguntem o que nos impede de removê-lo: o custo de corrigir, um responsável ausente ou a crença de que é obrigatório. O facilitador deve procurar trabalho barato de remover cujo responsável não está na sala. Terminem escolhendo um item para a próxima rodada de planejamento.

**4. Quantas pessoas podem realmente assumir um turno hoje, e a que limites estamos dispostos a nos comprometer?**
Contem a prontidão com honestidade: quem está treinado, quem está disponível e quem tem restrições. Comparem o resultado com o tamanho nominal do rodízio. Perguntem que frequência de plantão e que número de noites consecutivas o grupo considera aceitáveis e depois conferiram se a prática atual os cumpre.

**5. Se cortássemos a contagem de pages pela metade até o próximo trimestre, como saberíamos que não paramos apenas de ouvir?**
Esta pergunta é sobre a barreira de proteção. Peçam ao grupo que liste modos de a contagem de pages cair sem o serviço melhorar, como elevar limiares, fundir alertas ou ignorar uma fonte. Depois perguntem o que veríamos nos relatos de clientes e nas medidas de detecção se isso tivesse acontecido. Combinem a barreira de proteção e ponham-na na mesma página do volume.

**6. Quem vê estes números, e o que queremos que façam com eles?**
Tracem o caminho das medidas de carga do rodízio até os gestores e líderes. Perguntem o que cada público provavelmente concluirá e se alguma visão poderia ser lida como uma classificação. Combinem a forma que sobe: no nível do rodízio, com contexto, com um pedido anexado. Anotem qualquer preocupação sobre indivíduos serem identificáveis.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega geram boa parte da carga de plantão pelas mudanças que liberam. As equipes que operam o que constroem conseguem ver o vínculo entre um release e os pages que se seguem. Devem incluir o toil e o trabalho de plantão no planejamento de capacidade, programar a remoção de toil como trabalho comum de backlog e observar a qualidade das mudanças ao lado da velocidade (veja o tópico 2.8, Métricas DORA).

### Equipes de serviço e operações

As equipes de operações carregam o pager com mais frequência e veem primeiro o custo humano. Devem ser donas das definições, conduzir a amostragem de tempo ou a rotulagem, publicar os números no nível do rodízio e levar as principais fontes de toil e causas repetidas às equipes donas, com evidências. O risco delas é absorver a carga em silêncio, por profissionalismo. Um registro calmo e factual de noites e semanas é um pedido de ajuda mais eficaz que uma reclamação, e os registros nunca devem ser transformados em uma classificação das pessoas que responderam.

### Liderança e governança

Os líderes decidem a dotação de pessoal, as prioridades e se o trabalho sobre toil é financiado. Um líder que lê uma parcela alta de toil como mau desempenho ensina a equipe a baixá-la rebatizando. Um líder que a lê como uma conta de trabalho que a organização escolheu não financiar recebe dados honestos e um plano. A governança deve esperar um limite para a carga do rodízio e uma resposta visível quando for excedido (veja o tópico 9.2, Métricas de satisfação e bem-estar).

### Clientes e usuários

Os usuários não veem o rodízio, mas sentem seus efeitos: diagnóstico mais lento por quem responde cansado, incidentes repetidos por causas não corrigidas e a saída de pessoas que conheciam o serviço. Onde os usuários abrangem muitos fusos horários, suas necessidades fora do expediente moldam o rodízio, e o custo de cobri-las é um tema justo para uma conversa de nível de serviço (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma plataforma de pedidos, um serviço de contas de clientes e uma integração de armazém. Um rodízio de seis engenheiros de duas equipes de produto e um pequeno grupo de operações divide um turno de plantão semanal. Todos os números deste exemplo são ilustrativos.

A revisão mensal mostra uma mediana de 9 pages por turno e um 90º percentil de 31. O turno mais ocupado teve 58 pages. Cerca de metade de todos os pages chega fora do expediente, e 6 dos 8 turnos do trimestre incluíram um page entre 22h e 7h. A amostragem de tempo sugere que o toil toma 55% do tempo de trabalho.

O turno mais ocupado coincidiu com a expiração de um certificado na integração do armazém, que acionou o rodízio 22 vezes numa só noite. Um alerta de espaço em disco em um servidor de lotes responde por quase um quarto dos pages, e a maioria foi encerrada limpando um diretório temporário à mão. A taxa de pages repetidos é de 41%. Uma visão de Pareto mostra que as renovações manuais de certificados, a limpeza de disco e as requisições de acesso tomam a maior parte das horas de toil.

A equipe leva três itens para as quatro semanas seguintes: automatizar a renovação de certificados, corrigir a causa do diretório temporário cheio e mover as requisições de acesso para um formulário de autoatendimento de propriedade da equipe de identidade. Um acordo de trabalho define um limite de um turno em quatro por pessoa e um dia de descanso após uma noite com três ou mais pages. A profundidade do rodízio é de 6 pessoas para uma necessidade combinada de 8; por isso dois engenheiros de uma terceira equipe começam o treinamento de prontidão.

Um risco de manipulação aparece na revisão seguinte. Os pages por turno caíram para uma mediana de 4 e o 90º percentil para 12. Um gerente fica satisfeito. Um membro da equipe aponta que o limiar do alerta de disco foi elevado em 20 pontos e que o servidor de lotes encheu duas vezes sem um page. Os incidentes relatados por clientes sobre pedidos em lote atrasados aumentaram. A barreira de proteção, os incidentes relatados por clientes que o monitoramento perdeu, pegou o caso. A mudança de limiar é revertida, a limpeza do diretório é programada como uma correção, e a equipe acrescenta uma regra de que toda mudança de limiar seja registrada com seu motivo e revista após um mês. A parcela de toil do trimestre seguinte é de 38% (ilustrativo) e é relatada com o método de amostragem ao lado.

## Ágil, IA, automação e análise

### Ágil

Um ritmo sustentável inclui o rodízio de plantão; por isso reveja sua carga com a equipe em uma cadência regular e financie a prevenção. O cuidado é que uma meta de menos pages pode levar a silenciar alertas.

### IA

A IA pode resumir pages, sugerir passos de runbook e triar alertas, o que pode reduzir o toil, e pode acrescentar novo toil na conferência e correção de sua saída. Inclua no toil o tempo gasto supervisionando a IA e pareie as contagens de pages com sinais de sono e bem-estar. O cuidado é que uma primeira resposta automatizada pode esconder pages de pessoas que ainda carregam o risco.

### Automação

Automatize a remoção de toil onde o trabalho é repetitivo e meça o toil removido e os incidentes que a automação causou. O cuidado é que uma automação construída sem responsável vira uma nova fonte de trabalho de plantão.

### Análise

Relate a carga por rodízio, nunca por pessoa, com a contagem de pages por trás de cada cifra. A decisão informada é onde investir em prevenção. O cuidado é que os dados do pager omitem as interrupções informais; por isso combine-os com uma pesquisa curta.

## Olhar setorial

**Startup.** Uma equipe pequena muitas vezes não tem rodízio formal; assim todos estão de plantão o tempo todo e o custo é invisível. Conte pages e despertares noturnos numa planilha e escreva as três maiores tarefas repetitivas. Fundadores que carregam o pager eles próprios são um risco de negócio, e não um distintivo de comprometimento.

**Pequena empresa.** Uma ou duas pessoas podem cuidar de toda a TI. Meça o que não exige ferramentas: ligações fora do horário, tarefas que se repetem e licenças que não podem ser tiradas. Um provedor de serviços gerenciados pode assumir parte do rodízio se o contrato declarar tempos de resposta e horários. A profundidade do rodízio costuma ser um, que é o principal risco.

**Grande empresa.** A escala traz rodízios "follow-the-sun", plataformas compartilhadas e vários fornecedores. Defina as medidas uma vez, defina janelas de trabalho locais por região e evite tirar a média entre rodízios com serviços muito diferentes. As regras trabalhistas de alguns países limitam o dever de plantão e exigem períodos de descanso, e elas pertencem aos limites do rodízio.

**Governo e setor público.** Os serviços podem precisar de cobertura 24 horas por lei ou contrato, e a dotação de pessoal é limitada por compras e por graduação. Os limites do rodízio e as regras de descanso costumam ser regidos por acordos de trabalho; por isso meça contra eles e relate quando forem excedidos. A prestação de contas pública torna o relato franco mais valioso e mais difícil: construa um canal seguro para os dados de carga e seja explícito de que descrevem o sistema e a dotação de pessoal, e não indivíduos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é proteger a qualidade do serviço e manter pessoas qualificadas. Quem responde cansado diagnostica mais devagar, e quando pessoas experientes saem, o conhecimento vai junto. Substituir uma pessoa tem custos reais em recrutamento, integração e produção reduzida durante o período de aprendizado, e uma organização pode estimar esses custos a partir de seus próprios registros. O toil também tira capacidade da melhoria. Uma equipe que gasta a maior parte do tempo em operações manuais não consegue reduzir os incidentes que as causam.

O custo das medidas é modesto. A ferramenta de acionamento já conta os pages, e a amostragem de tempo custa alguns minutos por pessoa a cada quinzena. O custo maior é agir sobre os achados: tempo de engenharia para remover toil, pessoal para um rodízio sustentável e tempo de revisão. Conte a manutenção da automação como custo, porque um passo automatizado sem manutenção vira o incidente de amanhã.

O retorno aparece como menos pages de causas conhecidas, menos interrupções noturnas, horas de toil devolvidas ao trabalho de melhoria, menor evasão do rodízio e diagnóstico mais rápido. Nenhuma cifra universal se aplica; por isso estime a sua. Para uma fonte de toil, multiplique as horas mensais por um custo horário carregado combinado com as finanças, compare com o esforço para removê-la e reveja após dois ciclos. Para a sustentabilidade do rodízio, registre as saídas e as ausências longas do rodízio e compare-as com as medidas de carga ao longo do tempo, tratando o vínculo como uma hipótese a testar, e não como causa comprovada. Onde uma cifra for necessária, declare-a como estimativa e mostre os insumos (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Classificar pessoas por pages.** Transforma uma medida do sistema em nota de desempenho e ensina quem responde a evitar turnos e esconder interrupções. Relate por rodízio, posição no turno e serviço.
- **Cortar pages silenciando alertas.** A contagem cai e a detecção enfraquece. Pareie o volume com a detecção e os incidentes relatados por clientes e reveja toda mudança de limiar.
- **Chamar tudo de toil.** Uma definição tão ampla que inclui reuniões e problemas difíceis destrói o sinal. Use as seis características e mantenha uma lista de exemplos.
- **Uma meta de toil sem autoridade por trás.** Um teto que não consegue disparar uma decisão vira um número sobre o qual as pessoas discutem. Combine de antemão o que acontece quando for excedido e quem decide.
- **Automatizar antes de entender.** A automação pode cristalizar um processo ruim e acrescentar manutenção. Pergunte primeiro se a necessidade pode ser eliminada por projeto e meça o toil removido depois.
- **Tirar a média entre serviços diferentes.** Uma média entre um serviço estável e um frágil não descreve nenhum. Mostre cada serviço e rodízio separadamente.
- **Medir e não agir.** Números de carga sem resposta ensinam as pessoas que os dados não importam. Anexe uma decisão, um responsável e uma data de revisão a cada achado.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e dados | Pages e toil descritos por sensação; sem definição comum | Alguns rodízios contam pages; o toil é discutido mas não medido | Uma definição escrita de page, turno, fora do expediente e toil; dados de acionamento coletados por ferramenta | Distribuições e horários acompanhados ao longo do tempo; toil amostrado todo mês e auditado | Definições revistas entre equipes e fornecedores; esforço de amostragem ajustado ao valor das respostas |
| Sustentabilidade do rodízio | Informal; as mesmas poucas pessoas absorvem o pager | Existem escalas; limites discutidos mas não escritos | Limites escritos de frequência e descanso; profundidade do rodízio conhecida | Limites monitorados e violações revistas com ação | Rodízios compartilhados entre equipes e fornecedores, e a carga equilibrada conforme os serviços mudam |
| Uso dos números | Usados para culpar ou ignorados | Mostrados aos gestores | Mostrados primeiro ao rodízio, com as decisões que apoiam | Pareados com barreiras de proteção e revistos em uma cadência que leva a mudança financiada | Compartilhados com líderes e parceiros para planejar o pessoal e o escopo dos serviços |

## Lista de verificação

- [ ] Page, turno, janela de fora do expediente e janela de fusão estão definidos por escrito.
- [ ] O toil tem uma definição escrita com exemplos e não exemplos do nosso próprio serviço.
- [ ] Os pages por turno são relatados como mediana, um percentil alto e o turno mais ocupado.
- [ ] A parcela de pages fora do expediente e a taxa de interrupção noturna são relatadas ao lado do volume.
- [ ] A carga é relatada por rodízio, posição no turno e serviço, nunca por pessoa nomeada.
- [ ] A parcela de tempo em toil é amostrada em um calendário, com o método escrito.
- [ ] As cinco principais fontes de toil e as principais causas de pages repetidos estão no backlog de melhorias.
- [ ] Os limites do rodízio e as regras de descanso estão em um acordo da equipe, e a profundidade do rodízio é conferida a cada trimestre.
- [ ] Toda medida de carga tem uma barreira de proteção na mesma página, incluindo a detecção e os incidentes relatados por clientes.
- [ ] Cada revisão termina com uma decisão, um responsável e uma data.
- [ ] As mudanças de limiar e de alerta são registradas com um motivo e revistas após um mês.

## Prompts de IA

**Revise a carga de um rodízio e procure padrões.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Classifique tarefas como toil, engenharia ou sobrecarga administrativa.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Redija vetores de manipulação e barreiras de proteção para as nossas métricas de carga.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados e as barreiras de proteção ao acrescentar uma medida de plantão ou de toil a um painel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm toda métrica pareada com um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- Meça a carga sobre o rodízio, por turno, serviço e hora do dia, e nunca classifique as pessoas nele.
- Conte quando as interrupções acontecem, além de quantas são, porque pages noturnos custam mais que pages em horário comercial.
- Defina o toil de forma estreita usando suas seis características, estime sua parcela de tempo com um método simples e julgue a tendência.
- Ligue pages e fontes de toil ao trabalho sobre problemas e a mudanças de automação ou de projeto e meça o toil realmente removido.
- Pareie toda medida de carga com uma barreira de proteção, como a detecção e os incidentes relatados por clientes, para que números menores não possam ser comprados desviando o olhar.
- Trate uma carga pesada como um pedido de investimento, com uma decisão, um responsável e uma data de revisão.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [Plantão](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Privação de sono](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Fadiga de alarmes](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Esgotamento profissional](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Gráfico de Pareto](https://en.wikipedia.org/wiki/Pareto_chart).
