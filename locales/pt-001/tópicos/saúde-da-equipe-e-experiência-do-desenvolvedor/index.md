# Saúde da equipe e experiência do desenvolvedor

**As equipes fazem seu melhor trabalho quando o feedback é rápido, a carga sobre a mente é administrável e elas conseguem longos períodos de foco; por isso meça essas condições com a equipe, remova os obstáculos que revelam e nunca use os números para classificar as pessoas.**

## Visão geral e motivação

Os princípios do Manifesto Ágil pedem que construamos projetos em torno de indivíduos motivados, que lhes demos o ambiente e o apoio de que precisam e que confiemos que farão o trabalho. Pedem também que patrocinadores, desenvolvedores e usuários consigam manter um ritmo constante indefinidamente e que a equipe reflita regularmente sobre como se tornar mais eficaz. As medidas de saúde da equipe e de experiência do desenvolvedor são o modo de tornar esses princípios verificáveis. Perguntam como é fazer o trabalho aqui e o que está no caminho.

A [experiência do desenvolvedor](https://en.wikipedia.org/wiki/Developer_experience) é a soma das interações que os desenvolvedores têm com as ferramentas, os processos e as pessoas com quem trabalham. A ideia é mais ampla que a engenharia de software. Operadores, pessoal da central de serviços, analistas e qualquer outra pessoa que constrói ou opera um serviço tem uma experiência de seu ambiente. Este tópico usa "experiência do desenvolvedor" para os engenheiros e "saúde da equipe" para o grupo mais amplo, e as mesmas medidas valem para ambos.

Dois arcabouços de pesquisa são muito citados. O arcabouço SPACE, publicado por Nicole Forsgren e colegas em 2021, defende que a [produtividade](https://en.wikipedia.org/wiki/Productivity) do desenvolvedor não pode ser reduzida a um número e propõe cinco dimensões: satisfação e bem-estar, desempenho, atividade, comunicação e colaboração, e eficiência e fluxo. Um estudo posterior de 2023 de Abi Noda, Margaret-Anne Storey, Nicole Forsgren e Michaela Greiler, intitulado "DevEx: What Actually Drives Productivity", foca em três dimensões que os desenvolvedores podem sentir e que as organizações podem mudar: ciclos de feedback, carga cognitiva e estado de fluxo. Os dois artigos recomendam combinar dados de pesquisa sobre percepções com dados de sistemas sobre fluxos de trabalho, e ambos advertem contra usar qualquer medida isolada, especialmente uma contagem de atividade, como substituta da produtividade.

As três dimensões do DevEx são um ponto de partida prático.

- **Ciclos de feedback.** Com que rapidez uma pessoa fica sabendo o resultado do que fez? Builds lentos, testes lentos, revisões lentas e aprovações lentas acrescentam cada um espera, e a espera quebra a concentração. O feedback rápido é também um apoio central da entrega contínua.
- **[Carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load).** Quanto uma pessoa precisa manter na mente para realizar algo? Sistemas complicados, documentação ruim, responsabilidade pouco clara e muitas ferramentas elevam a carga. Reduzi-la libera capacidade para o trabalho que importa.
- **[Estado de fluxo](https://en.wikipedia.org/wiki/Flow_(psychology)).** Uma pessoa consegue encontrar períodos ininterruptos para se concentrar? Reuniões, notificações, pedidos não planejados e troca de contexto corroem tudo isso.

As medidas nesta área são excepcionalmente fáceis de usar mal. Contagens de commits, pull requests, tickets encerrados ou horas on-line são medidas de atividade. São fáceis de coletar e dizem pouco sobre se as pessoas conseguem fazer bom trabalho, e convidam à manipulação. As medidas de percepção são subjetivas e valiosas e podem ser distorcidas se as pessoas temem as consequências de uma resposta honesta. Qualquer medida de pessoas pode escorregar para a vigilância. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica com um fio ético: quando uma medida de pessoas vira meta, as pessoas param de dizer a verdade sobre o trabalho (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico se apoia na experiência dos usuários internos descrita antes (veja o tópico 6.4, Experiência de usuários e colaboradores) e continua nos próximos tópicos sobre bem-estar, colaboração, habilidades e melhoria.

## Princípios-chave

- **Meça as condições, e não as pessoas.** Pergunte sobre o ambiente e seus obstáculos e relate no nível da equipe.
- **Combine a percepção com os dados de fluxo de trabalho.** O que as pessoas sentem e o que os sistemas registram perdem, cada um, parte do quadro.
- **Deixe a equipe ser dona de sua avaliação de saúde.** As pessoas mais próximas do trabalho escolhem as perguntas e leem primeiro os resultados.
- **Nunca use estas medidas para classificar ou avaliar indivíduos.** Isso acabaria com as respostas honestas.
- **Evite contagens de atividade como produtividade.** Contagens de commits, tickets ou horas não são resultados.
- **Aja visivelmente sobre o que ouve.** Corrija o obstáculo ou diga por que não.
- **Proteja um ritmo sustentável.** Uma equipe que corre quente indefinidamente está pegando emprestado do próprio futuro.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo do ciclo de feedback | Tempo para uma pessoa obter o resultado de uma ação comum, por tipo de ciclo | mediana e 85º percentil dos minutos ou horas de build, execução de testes, espera de revisão de código e implantação, por equipe | minutos ou horas | Registros de data e hora do pipeline e das ferramentas de revisão, agregados por equipe | Gestão de releases e implantação; melhoria contínua | Feedback rápido na entrega contínua | Semanal |
| Parcela de tempo de foco | Proporção do tempo de trabalho em blocos ininterruptos de um comprimento mínimo combinado, conforme relatado pela equipe | horas relatadas pela equipe em blocos de foco / horas de trabalho, coletadas em um breve pulso | porcentagem | Pulso da equipe; dados de calendário só se a equipe optar e forem agregados | Melhoria contínua; gestão do conhecimento | Tempo protegido para trabalho profundo | Mensal |
| Nota de carga cognitiva | Nota da equipe sobre quão difícil é entender e alterar um sistema ou processo nomeado | nota média e dispersão em uma escala curta combinada, por sistema | pontos de escala | Pulso curto ligado a um sistema ou processo | Projeto de serviço; gestão do conhecimento | Entendimento compartilhado do trabalho | Trimestral |
| Tempo de resolução de obstáculos | Tempo desde um obstáculo ser levantado pela equipe até sua remoção ou uma decisão registrada de não removê-lo | mediana e 85º percentil dos dias de levantado a resolvido ou decidido | dias | Lista ou rastreador de impedimentos | Melhoria contínua; gestão de problemas | Impedimentos removidos | Mensal |
| Tendência da avaliação de saúde da equipe | Nota da própria equipe nas dimensões que ela escolheu, acompanhada ao longo do tempo | mudança nas notas das dimensões escolhidas pela equipe entre avaliações | pontos de escala | Avaliação de saúde da equipe, de propriedade da equipe | Melhoria contínua | Reflexão da equipe sobre como se tornar mais eficaz | Mensal ou trimestral |
| Satisfação com ferramentas e processos | Nota da equipe sobre a satisfação com as ferramentas e os processos que usa diariamente | nota média ou proporção favorável para cada ferramenta ou processo nomeado | pontos de escala ou porcentagem | Pulso curto | Gestão de níveis de serviço; melhoria contínua | Adequação do ambiente ao trabalho | Trimestral |
| Cobertura de dimensões | Número de dimensões do SPACE cobertas pelas medidas que uma equipe realmente usa | contagem das cinco dimensões com pelo menos uma medida em uso | contagem (0 a 5) | Registro de métricas | Medição e relato; governança | Medidas equilibradas | Anual |

Agregue tudo no nível da equipe e defina um tamanho mínimo de grupo, por exemplo nenhum resultado para um grupo com menos de cinco pessoas. O tempo de foco é a descrição da própria equipe, e qualquer cifra derivada do calendário é opcional, agregada e combinada pela equipe. Os tempos dos ciclos de feedback vêm de sistemas e descrevem o pipeline, e não as pessoas. A cobertura de dimensões é uma verificação do programa de medição, destinada a evitar a dependência de um único tipo de medida.

## Recomendações

### Comece pelas condições em que as pessoas trabalham

**1. Pergunte à equipe o que a atrasa.** Comece com uma conversa, e não com uma pesquisa: o que desperdiça o seu tempo, o que é difícil de entender e o que mais interrompe você? Escreva as respostas nas palavras da equipe. A conversa acha problemas que nenhum painel acharia e constrói a confiança de que as pesquisas posteriores precisam. Combinem quais duas ou três medir.

**2. Use as três dimensões do DevEx como lente.** Para cada uma de ciclos de feedback, carga cognitiva e estado de fluxo, escolha uma pergunta de percepção e, onde possível, uma medida de sistema. Para os ciclos de feedback, pareie "quão satisfeito você está com o tempo que os builds levam?" com a duração do build. Para a carga cognitiva, pergunte quão difícil é entender e alterar um sistema nomeado. Para o fluxo, pergunte com que frequência as pessoas conseguem trabalhar sem interrupção. Pareie o que as pessoas dizem com o que os sistemas registram e olhe as discordâncias.

**3. Cubra várias dimensões do SPACE.** Escolha medidas de pelo menos três das cinco dimensões para que nenhum tipo de dado domine. Satisfação e bem-estar, colaboração, e eficiência e fluxo costumam importar mais a uma equipe que opera serviços. Trate as medidas de atividade com muito cuidado e use-as apenas como contexto. A medida de cobertura de dimensões mantém isso honesto.

### Meça com cuidado

**4. Deixe a equipe ser dona e ler primeiro a sua avaliação de saúde.** Uma avaliação de saúde da equipe é uma breve autoavaliação em dimensões que a equipe escolhe, como diversão, apoio, velocidade, aprendizado e facilidade de release. A equipe lê e discute os próprios resultados antes que alguém veja um resumo. Os outros veem tendências e os obstáculos para os quais a equipe pede ajuda, e não pontuações para comparar. Isso mantém a ferramenta como um auxílio ao aprendizado e depende da [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety), a crença compartilhada de que as pessoas não serão punidas por falar.

**5. Cronometre os ciclos de feedback que importam.** Meça a duração dos ciclos de que as pessoas reclamam: build local, suíte de testes, espera de revisão de código, implantação em um ambiente de teste. Relate a mediana e o 85º percentil, já que uma cauda lenta machuca mais do que a média sugere. Compartilhe os números com a equipe dona do pipeline e faça da melhoria um trabalho regular (veja o tópico 2.7, Métricas de pull requests e revisão de código).

**6. Proteja o foco e meça-o com delicadeza.** Pergunte sobre o foco no pulso e olhe o que causa as interrupções: carga de reuniões, notificações, pedidos não planejados. Se uma equipe quiser olhar padrões do calendário, faça-o com o acordo dela e agregue os resultados. Nunca acompanhe a atividade ou a presença de indivíduos. O objetivo é achar interrupções estruturais a remover, como uma reunião que poderia ser um documento.

**7. Acompanhe os obstáculos até a resolução.** Mantenha uma lista visível dos obstáculos que a equipe levantou e meça quanto tempo levam para ser resolvidos ou conscientemente postos de lado. Uma lista longa que nunca encolhe ensina às pessoas que levantar problemas é inútil. A decisão de não remover um obstáculo, com um motivo, conta como resolução.

### Use os resultados para melhorar

**8. Aja sobre uma ou duas coisas de cada vez.** Escolha o obstáculo de maior valor, corrija-o e conte à equipe. A ação visível faz mais pela confiança que um longo relatório. Resista à tentação de lançar muitas iniciativas ao mesmo tempo.

**9. Pareie as medidas de pessoas com medidas de resultado.** Olhe como os ciclos de feedback e a carga cognitiva se relacionam com os resultados de entrega e estabilidade (veja o tópico 2.8, Métricas DORA). Não alegue causalidade a partir de correlação nos seus próprios dados. Use o pareamento para achar perguntas a explorar, como se as equipes com revisões mais lentas também têm tempos de ciclo mais longos.

**10. Mantenha as contagens de atividade fora da conversa.** Não relate commits, linhas de código nem tickets encerrados por pessoa. Contagens de saídas da equipe podem ser úteis para o fluxo, mas dizem pouco sobre a saúde. Se alguém pedir métricas de atividade individual, explique a pesquisa e ofereça em seu lugar medidas de condições.

### Proteja as pessoas

**11. Defina as regras de privacidade antes de coletar.** Escreva o que é coletado, por quê, quem vê, por quanto tempo é guardado e o que nunca será feito com os dados. Agregue no nível da equipe, suprima grupos pequenos e deixe representantes das pessoas envolvidas rever as regras. Não use nada desses dados em avaliações de desempenho, promoções ou disciplina.

**12. Faça de um ritmo sustentável o padrão.** Fique atento a sinais de que uma equipe corre quente: uma longa sequência de incidentes fora do expediente, um estado permanente de urgência, listas de obstáculos crescentes, satisfação em queda. Trate-os como problemas do sistema a corrigir com escopo, pessoal ou prioridades. Um ritmo constante que as pessoas conseguem manter é uma meta de projeto e apoia a qualidade, o aprendizado e a retenção (veja o tópico 9.2, Métricas de satisfação e bem-estar).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tempo do ciclo de feedback | Excluir os casos lentos; medir um caminho rápido que a maior parte do trabalho não percorre | Relatar o 85º percentil; definir o início e o fim de cada ciclo no registro |
| Parcela de tempo de foco | Bloquear tempo no calendário sem se concentrar; relatar foco inflado para agradar aos gestores | Pulso de propriedade da equipe; comparar com as causas de interrupção; nenhum relato individual |
| Nota de carga cognitiva | Dar notas baixas aos sistemas para evitar escrutínio; escolher sistemas fáceis para avaliar | Avaliar uma lista fixa de sistemas; comparar com o tempo de integração e os padrões de incidentes |
| Tempo de resolução de obstáculos | Encerrar obstáculos sem corrigi-los; recusar-se a registrar obstáculos | A equipe confirma a resolução; taxa de obstáculos reabertos |
| Tendência da avaliação de saúde da equipe | Gestores pressionando por boas notas; equipes ajustando notas para evitar atenção | A equipe é dona dos resultados; tendências compartilhadas só com o consentimento da equipe |
| Satisfação com ferramentas e processos | Pesquisar usuários satisfeitos; treinar o pessoal a responder bem | Taxa e composição das respostas; ler os comentários; ligar a medidas de sistema |
| Cobertura de dimensões | Contar uma dimensão com uma medida simbólica | Conferir se cada medida contada é usada em uma decisão |

Uma leitura saudável é ciclos de feedback mais curtos e mais estáveis, uma carga cognitiva em queda nos sistemas-chave, equipes que relatam foco real, obstáculos levantados e resolvidos, avaliações de saúde em que a equipe confia e nenhum uso dos dados sobre indivíduos.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Pesquisas de percepção | Captam o que os sistemas não captam; baixo custo | Subjetivas; vulneráveis a medo e fadiga |
| Medidas de fluxo de trabalho | Objetivas; contínuas | Perdem sentimentos e causas; risco de vigilância |
| Avaliação de saúde de propriedade da equipe | Honesta e útil à equipe | Difícil de comparar; difícil de escalar |
| Pesquisa padrão de toda a empresa | Comparável entre equipes | Menos relevante; usada para classificar |
| Contagens de atividade | Fáceis de coletar | Substitutos ruins; fáceis de manipular |
| Medidas centradas em condições | Apontam causas corrigíveis | Exigem esforço de acompanhamento |
| Pulsos frequentes | Oportunos | Fadiga de pesquisas |
| Pesquisa anual | Baixo ônus | Lenta; obsoleta |

A resposta pragmática é combinar avaliações de saúde de propriedade da equipe e pulsos curtos com medidas de fluxo de trabalho dos ciclos de que as pessoas reclamam, evitar contagens de atividade e proteger a privacidade. Use comparações de toda a empresa com parcimônia e nunca para classificar equipes.

## Perguntas para discutir com sua equipe

**1. Qual é o ciclo de feedback mais lento do nosso dia de trabalho, e quanto tempo ele realmente leva?**
Escolham o ciclo de que as pessoas mais reclamam. Cronometrem-no a partir dos sistemas e comparem com o que as pessoas dizem. O facilitador deve anotar as surpresas, em qualquer direção. Combinem uma mudança que o encurtaria e quem é o responsável.

**2. Qual sistema tememos alterar, e o que o torna difícil?**
Nomeiem o sistema. A dificuldade está no código, na documentação, nas ferramentas ou no conhecimento concentrado em poucas cabeças? Perguntem qual melhoria reduziria mais a carga. Planejem como saber se funcionou.

**3. Quando foi a última vez que cada um de nós teve um longo bloco de tempo ininterrupto, e o que interrompeu os que falharam?**
Compartilhem com honestidade e sem culpa. Listem as interrupções e separem-nas em estruturais (reuniões, notificações, pedidos não planejados) e incidentais. Escolham uma interrupção estrutural a reduzir.

**4. Que obstáculo levantamos mais de uma vez sem resultado?**
Olhem a lista de obstáculos. Para cada item antigo, perguntem quem poderia resolvê-lo e o que o bloqueia. Se a equipe parou de levantar obstáculos, discutam por quê. Combinem um a escalar com evidências.

**5. O que nos faria hesitar em dar uma resposta honesta na avaliação de saúde?**
Discutam os medos sobre como os resultados poderiam ser usados. O facilitador deve registrar as preocupações e combinar regras: quem vê os dados, o que nunca será feito com eles. Se as regras não inspiram confiança, digam isso e decidam o que a conquistaria.

**6. Quais das nossas medidas poderiam subir enquanto o trabalho piora?**
Listem as medidas e pensem em modos de melhorar cada uma sem ajudar ninguém. Atribuam uma barreira de proteção a cada uma. Removam qualquer medida que não tenha uso em uma decisão.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega sabem melhor o que as atrasa e são donas de sua própria avaliação de saúde. Devem nomear obstáculos, cronometrar os ciclos que controlam e decidir com a equipe o que corrigir primeiro. Devem resistir à pressão para relatar atividade individual e insistir em medidas no nível da equipe.

### Equipes de serviço e operações

As equipes de operações carregam o plantão, as interrupções e o trabalho não planejado que corroem o foco e o ritmo. Devem levantar a carga estrutural como um problema do sistema, medir os ciclos de suas próprias ferramentas e manter um rodízio sustentável. Ganham com listas de obstáculos compartilhadas com as equipes de entrega, já que muitos obstáculos cruzam a fronteira.

### Liderança e governança

Os líderes definem as condições e decidem como os dados são usados. Devem financiar as correções que as medidas de condições revelam, proteger as regras de privacidade e pedir tendências e obstáculos em vez de pontuações para comparar. A governança deve tratar um pedido de métricas de atividade individual como motivo para revisitar as regras e deve esperar que o trabalho de melhoria seja visível.

### Clientes e usuários

Os usuários se beneficiam de equipes que conseguem trabalhar com calma e aprender depressa, porque seus problemas são bem resolvidos. Notam também quando uma equipe está sobrecarregada: respostas mais lentas, erros repetidos, alta rotatividade. O feedback deles é evidência de fora sobre a saúde da equipe, e merecem honestidade sobre como as correções são priorizadas.

## Na prática: um exemplo de gestão de serviços

O grupo de tecnologia de uma seguradora nacional tem 14 equipes que constroem e operam serviços de apólices e sinistros. A liderança pede um painel de produtividade do desenvolvedor. O primeiro pedido é de commits e tickets encerrados por pessoa. A chefe de eficácia da engenharia propõe uma abordagem diferente. Os números abaixo são ilustrativos.

Ela começa com conversas em cinco equipes. Três obstáculos surgem repetidamente: a suíte de testes leva 70 minutos, as revisões de código esperam muito tempo nas equipes que dependem de dois revisores sêniores e ninguém se sente capaz de alterar o serviço legado de cálculo de sinistros. Ela mede o que pode a partir dos sistemas. O ciclo mediano de build e teste é de 58 minutos, com um 85º percentil de 92. A espera mediana pela primeira revisão é de 9 horas úteis, e o 85º percentil é de 31 horas. Acrescenta um breve pulso trimestral com as três perguntas do DevEx, com um grupo mínimo de relato de cinco. A nota de carga cognitiva do serviço de cálculo de sinistros é de 4,4 em uma escala de cinco pontos em que 5 é muito difícil, contra 2,6 para o portal de apólices. O tempo de foco relatado pelas equipes é de cerca de 3 horas por dia, com reuniões e pedidos não planejados como as principais causas. Cada equipe conduz a própria avaliação de saúde nas dimensões que escolheu e lê apenas a tendência combinada.

O grupo combina quatro ações com as equipes. A suíte de testes é dividida e paralelizada, e o 85º percentil cai de 92 para 41 minutos em dois meses. Um rodízio de revisão espalha a carga além dos dois revisores sêniores, e a espera no 85º percentil cai para 14 horas. Três equipes concordam com um bloco semanal sem reuniões, e uma equipe refaz o modo como os pedidos não planejados chegam a ela. O serviço de cálculo de sinistros vira um projeto de aprendizado compartilhado, com programação em par e documentação, e sua nota de carga cognitiva cai para 3,5 ao longo de dois trimestres. O tempo de foco relatado sobe para cerca de 4 horas.

Quando um gerente sênior pede novamente contagens individuais de commits, a chefe de eficácia da engenharia explica a pesquisa do SPACE e do DevEx e oferece o painel de condições. A decisão é registrada, com as regras de privacidade que dizem que a atividade individual nunca será usada em avaliações. Uma equipe pede que os resultados de sua avaliação de saúde não sejam resumidos para a liderança neste trimestre, e o pedido é atendido. A rotatividade nas equipes envolvidas cai ao longo do ano seguinte, e ela observa que não consegue provar a ligação e não a alegará.

## Ágil, IA, automação e análise

### Ágil

Meça condições como ciclos de feedback e tempo de foco com a equipe e remova os obstáculos que elas revelam. O cuidado é que usar os números para classificar pessoas destrói os dados.

### IA

Os assistentes de IA de código e de escrita mudam os ciclos de feedback e a carga cognitiva, para melhor ou pior. Pergunte à equipe sobre benefício e ônus e pareie o uso com retrabalho e bem-estar. O cuidado é que estatísticas de uso relatadas por pessoa viram vigilância.

### Automação

Automatize a coleta dos tempos de build, teste e revisão e meça a cadeia de ferramentas pela lentidão e pelas falhas. O cuidado é que ferramentas rápidas ainda podem esconder uma organização lenta; por isso combine os dados com a conversa da equipe.

### Análise

Mostre tendências por equipe com o número de respostas e defina um tamanho mínimo de grupo. A decisão informada é qual obstáculo remover a seguir. O cuidado é que equipes pequenas não podem ser anônimas.

## Olhar setorial

**Startup.** Todo mundo conhece todo mundo; por isso as conversas vencem as pesquisas. Cronometre os principais ciclos de feedback, mantenha os builds rápidos e fique atento a sinais de ritmo insustentável, porque poucas pessoas carregam muito. Não importe um grande programa de pesquisas.

**Pequena empresa.** Uma pequena equipe pode ser de uma ou duas pessoas que constroem e dão suporte. O principal risco delas é a interrupção e a dependência de indivíduos. Mantenha uma lista simples de obstáculos, garanta cobertura para ausências e perguntem-se regularmente o que está atrapalhando. Os dados em nível individual identificam por natureza; por isso apoie-se na conversa.

**Grande empresa.** A escala traz variedade e tentações de comparação. Ofereça um kit comum (perguntas de pulso, cronometragem de ciclos) deixando que as equipes sejam donas de suas avaliações de saúde. Agregue com cuidado, compartilhe padrões entre equipes para espalhar correções e mantenha as classificações fora. Envolva conselhos de trabalhadores ou representantes de empregados onde existirem.

**Governo e setor público.** As compras, as regras de segurança e as cadeias de aprovação alongam os ciclos de feedback, e o pessoal pode ter fortes proteções contra monitoramento. Meça os ciclos, envolva representantes na definição das regras de dados e use os achados para simplificar processos. Os servidores motivados pelo valor do serviço ganham com a remoção visível de obstáculos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o tempo das equipes para as avaliações de saúde e os pulsos, um pouco de instrumentação dos pipelines e das ferramentas de revisão, um analista ou coach para ajudar a interpretar os resultados e facilitar, e o tempo de engenharia para remover obstáculos. A maioria desses custos é pequena comparada ao custo de ciclos lentos multiplicado por muitas pessoas.

O retorno vem do tempo recuperado, menos retrabalho, melhor retenção e aprendizado mais rápido. Estime-o com os seus próprios dados: as horas por semana perdidas à espera de builds e revisões no grupo, o custo de contratar e integrar para substituir quem sai e os padrões de incidentes ou defeitos ligados a equipes sobrecarregadas. Tenha cautela ao converter minutos em dinheiro e declare as premissas. Evite alegações de estudos publicados sobre ganhos de produtividade a menos que possa rastrear seu método e adequação. Lembre o custo de errar: um programa visto como vigilância prejudica a confiança e a qualidade de toda pesquisa posterior (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Painéis de produtividade individual.** Medem atividade, convidam à manipulação e prejudicam a confiança. Meça condições no nível da equipe.
- **Usar pontuações de avaliações de saúde para comparar equipes.** As equipes passam então a gerenciar a pontuação. Deixe as equipes serem donas de seus resultados.
- **Pesquisas sem ação.** As pessoas param de responder. Corrija algo visível a cada ciclo.
- **Medir tempo on-line ou presença.** Premia a visibilidade e pune o foco. Meça ciclos e obstáculos.
- **Uma só medida para tudo.** Perde a maior parte do quadro. Cubra várias dimensões.
- **Ignorar a cauda.** As medianas escondem os ciclos lentos que machucam. Relate percentis.
- **Culpar pessoas por problemas do sistema.** Os obstáculos costumam ser estruturais. Corrija a estrutura.
- **Correr quente como normal.** A urgência permanente esgota as pessoas. Trate a sobrecarga sustentada como uma falha de planejamento.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Entender as condições | Anedota | Pesquisa ocasional | Conversas e pulsos regulares sobre ciclos de feedback, carga e fluxo | Dados de percepção e de fluxo de trabalho combinados, com tendências no nível da equipe | Visão compartilhada das condições entre equipes e fornecedores; as equipes co-projetam as medidas |
| Propriedade e ética | A gestão lê tudo | Cuidado informal | Avaliações de saúde de propriedade da equipe; regras de privacidade escritas | Regras revistas com representantes; proibição de uso individual imposta | Regras e práticas auditadas de forma independente; as equipes controlam o compartilhamento de dados |
| Ação | Queixas sem resposta | Correções ad hoc | Lista de obstáculos com responsáveis; uma ou duas correções por ciclo | Correções acompanhadas e ligadas a resultados; ritmo sustentável monitorado | Remoção de obstáculos embutida no planejamento; aprendizado amplamente compartilhado |

## Lista de verificação

- [ ] As equipes disseram com as próprias palavras o que as atrasa.
- [ ] Pelo menos uma pergunta de percepção e uma medida de sistema cobrem cada uma de ciclos de feedback, carga cognitiva e fluxo.
- [ ] As medidas vêm de pelo menos três dimensões do SPACE.
- [ ] Cada equipe é dona de sua avaliação de saúde e lê primeiro os resultados.
- [ ] Os tempos dos ciclos de feedback são relatados como mediana e 85º percentil.
- [ ] Uma lista visível de obstáculos tem responsáveis, e o tempo de resolução é acompanhado.
- [ ] Os resultados são relatados no nível da equipe, com um tamanho mínimo de grupo.
- [ ] Regras de privacidade escritas declaram que dados individuais não serão usados em avaliações.
- [ ] As contagens de atividade não são relatadas como produtividade.
- [ ] A equipe vê pelo menos uma correção por ciclo.

## Prompts de IA

**Redija perguntas de pulso para as três dimensões do DevEx.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Analise padrões na lista de obstáculos.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Escreva regras de privacidade para um programa de saúde da equipe.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**Compare condições com resultados.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de saúde da equipe ou de experiência do desenvolvedor.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica relacionada a pessoas traz seu vetor de manipulação, sua barreira de proteção e suas regras de privacidade.

## Ideias-chave

- Meça as condições em que as pessoas trabalham: ciclos de feedback, carga cognitiva e fluxo.
- Combine o que as pessoas dizem com o que os sistemas registram e olhe as discordâncias.
- Deixe as equipes serem donas de suas avaliações de saúde, relate no nível da equipe e nunca use os dados sobre indivíduos.
- Evite contagens de atividade como substituto da produtividade.
- Aja visivelmente sobre um ou dois obstáculos de cada vez e acompanhe quanto tempo os obstáculos levam para ser resolvidos.
- Proteja um ritmo que a equipe possa sustentar indefinidamente.

## Referências e leituras complementares

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Produtividade](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Experiência do desenvolvedor](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Fluxo (psicologia)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
