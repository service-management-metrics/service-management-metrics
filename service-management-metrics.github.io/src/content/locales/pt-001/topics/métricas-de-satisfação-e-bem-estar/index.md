# Métricas de satisfação e bem-estar

**Pessoas que se sentem seguras, confiadas e capazes de manter seu ritmo trabalham melhor por mais tempo; por isso pergunte sobre o bem-estar com cuidado, mantenha as respostas anônimas e agregadas e trate o que aprender como um chamado para mudar o trabalho, nunca como um julgamento da pessoa.**

## Visão geral e motivação

Os princípios do Manifesto Ágil dizem que os processos ágeis promovem o desenvolvimento sustentável: patrocinadores, desenvolvedores e usuários devem conseguir manter um ritmo constante indefinidamente. Dizem também para construir projetos em torno de indivíduos motivados e confiar que farão o trabalho. Uma organização de serviços que depende de pessoas para manter sistemas complexos funcionando por noites, fins de semana e crises precisa perguntar se seu modo de trabalhar pode realmente ser sustentado. As medidas de satisfação e bem-estar são o modo de perguntar.

Essas medidas são mais sensíveis que quaisquer outras neste livro. Tocam em como as pessoas se sentem em relação ao trabalho, aos colegas e à saúde. Mal feitas, invadem a privacidade, criam medo e produzem respostas falsas. Bem feitas, dão às equipes e aos líderes um alerta precoce de problemas que de outro modo surgiriam como demissões, erros e incidentes. Este tópico trata, portanto, tanto de ética e método quanto de métricas, e vem depois do tópico anterior sobre as condições da equipe (veja o tópico 9.1, Saúde da equipe e experiência do desenvolvedor).

Três ideias o enquadram.

- **Satisfação não é bem-estar, e nenhuma das duas é engajamento.** A [satisfação no trabalho](https://en.wikipedia.org/wiki/Job_satisfaction) é o sentimento de uma pessoa sobre seu emprego, o [engajamento do empregado](https://en.wikipedia.org/wiki/Employee_engagement) é um envolvimento enérgico com o trabalho, e o bem-estar é um estado mais amplo de saúde e florescimento. Uma pessoa pode estar satisfeita com um emprego que a desgasta. Medir uma não diz nada sobre as outras.
- **A motivação vem de condições que podem ser construídas.** A [teoria da autodeterminação](https://en.wikipedia.org/wiki/Self-determination_theory), desenvolvida por Edward Deci e Richard Ryan, propõe que a [motivação intrínseca](https://en.wikipedia.org/wiki/Intrinsic_motivation) das pessoas é apoiada quando três necessidades são atendidas: autonomia, a sensação de controle sobre o próprio trabalho; competência, a sensação de eficácia e crescimento; e pertencimento, a sensação de conexão com os outros. Isso combina com o apelo ágil por indivíduos motivados que recebem o ambiente e a confiança de que precisam.
- **A segurança para falar é uma pré-condição.** A [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety), um conceito desenvolvido por Amy Edmondson, é a crença compartilhada de que uma equipe é segura para assumir riscos interpessoais. Sem ela, as pessoas escondem erros, preocupações e exaustão, e toda pesquisa mede o que as pessoas ousam dizer, e não o que sentem.

As medidas de bem-estar têm perigos particulares. Os respondentes podem dar respostas que acham esperadas, um padrão conhecido como [viés de desejabilidade social](https://en.wikipedia.org/wiki/Social_desirability_bias). O burnout é um assunto sério, e a classificação da Organização Mundial da Saúde descreve o burn-out como um fenômeno ocupacional resultante de estresse crônico no local de trabalho que não foi bem gerenciado. Não é um diagnóstico médico feito por uma pesquisa. Os pesquisadores descrevem o burnout por exaustão, cinismo e eficácia reduzida ([esgotamento profissional](https://en.wikipedia.org/wiki/Occupational_burnout) é o termo geral), e os empregadores devem oferecer apoio e corrigir as condições, e não diagnosticar indivíduos. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) tem aqui um rosto humano: quando uma pontuação de bem-estar vira meta para um gestor, as pessoas aprendem a dizer que estão bem (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Uma última cautela: este tópico descreve prática de medição e não dá aconselhamento médico, psicológico ou jurídico. Envolva profissionais qualificados, como saúde ocupacional, recursos humanos e representantes dos empregados, e siga a lei de privacidade e de trabalho que se aplica onde suas pessoas trabalham.

## Princípios-chave

- **A participação é voluntária e as respostas são anônimas.** Ninguém deve se sentir compelido a revelar como se sente.
- **Relate só em grupos.** Use um tamanho mínimo de grupo e suprima qualquer coisa que possa identificar uma pessoa.
- **Nunca use estas medidas para avaliar indivíduos.** Elas descrevem o trabalho e a equipe.
- **Nunca diagnostique.** As pesquisas podem mostrar condições, e o julgamento clínico pertence a profissionais qualificados.
- **Corrija as condições.** A resposta a um mau resultado é mudar a carga de trabalho, o processo ou as prioridades.
- **Mire um ritmo que a equipe possa sustentar.** Explosões curtas são aceitáveis, e a urgência permanente não é.
- **Aja onde as pessoas possam ver.** A mudança visível constrói a confiança de que as respostas honestas precisam.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nota de ritmo sustentável | Nota da equipe sobre se o ritmo atual poderia ser mantido indefinidamente | nota média e dispersão em uma escala combinada para a afirmação "poderíamos continuar trabalhando neste ritmo indefinidamente" | pontos de escala | Pulso anônimo da equipe | Melhoria contínua; gestão da força de trabalho e dos talentos | Ritmo constante indefinidamente | Mensal |
| Nota de segurança psicológica | Nota da equipe sobre quão seguro é levantar problemas e assumir riscos interpessoais | nota média em um breve conjunto validado de afirmações, por equipe | pontos de escala | Pulso anônimo da equipe | Melhoria contínua; gestão da força de trabalho e dos talentos | Confiança e reflexão aberta | Trimestral |
| Nota de apoio às necessidades | Nota da equipe sobre autonomia, competência e pertencimento no trabalho | nota média para cada uma de três afirmações, por equipe | pontos de escala | Pulso anônimo da equipe | Gestão da força de trabalho e dos talentos; melhoria contínua | Indivíduos motivados com o ambiente de que precisam | Trimestral |
| Nota de tensão da carga de trabalho | Nota da equipe sobre quão exigente é a carga de trabalho em relação à capacidade | nota média e dispersão e a proporção que considera a carga insustentável | pontos de escala; porcentagem | Pulso anônimo da equipe | Gestão de capacidade e desempenho; gestão da força de trabalho e dos talentos | Desenvolvimento sustentável | Mensal |
| Semanas com horas estendidas sustentadas | Proporção das semanas em que o rodízio ou a equipe trabalhou bem além do horário normal, contada no nível do rodízio ou da equipe | semanas no período com horas estendidas no nível da equipe / semanas no período | porcentagem | Registros de rodízio e logs de plantão agregados por equipe; relatado pela equipe, opcional | Gestão de incidentes; gestão de capacidade e desempenho | Hora extra como sinal de sobrecarga | Mensal |
| Rotatividade voluntária e temas de saída | Proporção dos membros da equipe que saem voluntariamente em um período, com temas das conversas de saída | saídas voluntárias / quadro médio; contagens de temas de quem saiu e consentiu | porcentagem; contagens | Registros de recursos humanos, conversas de saída | Gestão da força de trabalho e dos talentos | Retenção de pessoas experientes | Trimestral |
| Tempo para agir sobre o feedback de bem-estar | Tempo desde uma equipe levantar uma preocupação de bem-estar até uma resposta registrada | mediana e 85º percentil dos dias da preocupação a uma decisão ou ação registrada | dias | Registro de feedback da equipe | Melhoria contínua | Resposta pronta à reflexão da equipe | Trimestral |

Defina no registro o tamanho mínimo do grupo de relato, por exemplo nenhum resultado para um grupo com menos de sete pessoas, e aplique-o a toda tabela, gráfico e comentário. As notas vêm de pulsos curtos e anônimos, com participação voluntária. As semanas com horas estendidas são calculadas a partir dos registros de rodízio e de plantão da equipe como um todo, e nunca se coletam, para esse fim, dados de horas em nível individual. A rotatividade é relatada apenas onde o grupo é grande o bastante, e os temas de saída apenas de quem consente. Nenhuma dessas métricas faz parte da avaliação de qualquer indivíduo.

## Recomendações

### Defina primeiro as regras básicas

**1. Escreva as regras antes de perguntar.** Declare o propósito, o que é coletado, quem vê o quê, o tamanho mínimo do grupo, por quanto tempo os dados são guardados e o que nunca será feito com eles, incluindo que nenhuma resposta individual será usada em avaliações, promoções ou disciplina. Compartilhe o rascunho com representantes dos empregados, onde existirem, e com seus especialistas em privacidade e recursos humanos. Publique as regras finais onde todos possam lê-las.

**2. Torne a participação voluntária e as respostas anônimas.** Não corra atrás de indivíduos que não responderam. Não exija campos de identificação. Use um método de pesquisa que não possa ser rastreado até uma pessoa e teste essa alegação com honestidade: em uma equipe pequena, perguntas demográficas podem identificar pessoas. Diga às pessoas o que você faz para protegê-las e fale sério.

**3. Envolva a saúde ocupacional e o apoio aos empregados.** As pesquisas não substituem o apoio. Garanta que exista um programa de assistência ao empregado ou equivalente, que as pessoas saibam como alcançá-lo e que os gestores saibam responder com gentileza se alguém revelar um problema. Um programa de bem-estar que identifica sofrimento e não oferece nada é pior que nenhum.

### Pergunte bem

**4. Use poucas perguntas, claras e validadas.** Um breve conjunto de afirmações, avaliadas em uma escala consistente, serve melhor que um formulário longo. Use formulações consagradas, da literatura de pesquisa, para a segurança psicológica e para as três necessidades da teoria da autodeterminação e mantenha estável a sua própria redação para que as tendências signifiquem algo. Acrescente um comentário aberto e leia os comentários por inteiro.

**5. Pergunte mais sobre condições que sobre sentimentos.** "Consigo manter este ritmo por um ano" e "Tenho o que preciso para fazer meu melhor trabalho" apontam para o trabalho. "Quão estressado você está?" aponta para a pessoa. Ambos têm lugar, e as perguntas de condições são mais fáceis de responder com honestidade e mais fáceis de agir.

**6. Mantenha a cadência leve.** Um pulso mensal de três perguntas sobre ritmo e carga e um pulso trimestral sobre segurança e necessidades bastam para a maioria das equipes. A fadiga de pesquisas é real, e uma longa pesquisa anual é lenta para agir. Varie as perguntas modestamente para que as pessoas não respondam no piloto automático e mantenha estável o núcleo.

**7. Leia os resultados primeiro com a equipe.** Compartilhe os resultados da própria equipe com ela antes de qualquer outra pessoa e deixe que os interprete. Os líderes veem tendências entre equipes e os obstáculos para os quais as equipes pedem ajuda, e não uma classificação. Essa abordagem é mais exata, já que as equipes conhecem o contexto, e mais respeitosa.

### Olhe o trabalho além dos sentimentos

**8. Pareie a percepção com fatos de carga de trabalho no nível da equipe.** Compare as notas de ritmo e de tensão com a carga do rodízio e do plantão, a parcela de trabalho não planejado e o backlog de obstáculos (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão, e o tópico 2.9, Trabalho operacional e trabalho não planejado). Quando as notas caem enquanto o trabalho não planejado sobe, você achou uma causa que pode corrigir. Agregue os dados de horas na equipe ou no rodízio e nunca acompanhe indivíduos.

**9. Trate a sobrecarga sustentada como um problema do sistema.** Uma sequência de semanas com horas estendidas significa que o plano, o quadro ou as prioridades não combinam com a realidade. Responda reduzindo o escopo, acrescentando pessoas, removendo trabalho ou corrigindo as causas dos incidentes, e não pedindo que os indivíduos sejam mais resilientes. Explosões curtas e escolhidas são diferentes da urgência sem fim, e a equipe pode dizer qual é qual.

**10. Observe a rotatividade em busca de padrões, com cuidado.** A rotatividade voluntária é um sinal tardio. Olhe-a por equipe e ao longo de um período longo e combine-a com temas de conversas de saída que quem sai concorda em dar. Números pequenos oscilam muito e podem identificar pessoas; por isso suprima grupos pequenos e evite ler saídas isoladas como prova.

### Aja e aprenda

**11. Responda dentro de um prazo declarado e diga às pessoas o que aconteceu.** Comprometa-se a responder às preocupações de bem-estar em pouco tempo e relate as ações e seus resultados. O tempo para agir mede isso. Uma resposta visível, mesmo que seja "não podemos mudar isso agora, e eis por quê", mantém viva a confiança.

**12. Aprenda com o que não funciona.** Se as notas não melhoram depois de uma intervenção, pergunte por quê. Ouça a equipe antes de tentar de novo. Evite acréscimos de bem-estar, como um aplicativo de meditação ou um evento social, como substituto da mudança de uma carga de trabalho alta demais. O bem-estar é em grande parte uma propriedade de como o trabalho é organizado.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Nota de ritmo sustentável | Gestores pressionando por boas notas; equipes relatando o que é esperado | Regras de anonimato e de tamanho de grupo; comparar com fatos de carga de trabalho; ler os comentários |
| Nota de segurança psicológica | Pesquisar apenas equipes seguras; mudanças de redação que elevam as notas | Registro de redação fixa; taxa e composição das respostas; comparar com as taxas de relato de incidentes e erros |
| Nota de apoio às necessidades | Redefinir as afirmações; treinar as respostas | Redação estável; interpretação de propriedade da equipe; comentários |
| Nota de tensão da carga de trabalho | Reduzir a tensão relatada para evitar escrutínio; ajustar o escopo no papel | Comparar com o trabalho não planejado e a carga do rodízio; conferir se há trabalho oculto |
| Semanas com horas estendidas sustentadas | Não registrar horas; tirar trabalho dos registros do rodízio | Comparar com os logs de incidentes e os comentários da equipe; permitir o relato sem penalidade |
| Rotatividade voluntária e temas de saída | Reclassificar demissões como involuntárias; conduzir as conversas de saída | Regras claras de classificação; conversas de saída independentes; olhar períodos longos |
| Tempo para agir sobre o feedback de bem-estar | Registrar uma resposta sem ação; encerrar depressa as preocupações | A equipe confirma que a resposta é significativa; acompanhar se as notas mudam |

Uma leitura saudável é uma nota de ritmo estável ou em melhora que combina com os fatos da carga de trabalho, uma segurança psicológica alta o bastante para que as más notícias circulem, uma tensão da carga de trabalho em queda depois de mudarem as condições, semanas com horas estendidas raras e explicadas e equipes que dizem ver seu feedback usado.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Pesquisas de pulso anônimas | Honestas, baratas, oportunas | Não permitem acompanhar indivíduos; grupos pequenos limitam o anonimato |
| Pesquisas identificadas | Permitem acompanhamento | As pessoas se contêm; risco de privacidade |
| Perguntas focadas em condições | Apontam causas corrigíveis | Perdem circunstâncias pessoais |
| Perguntas focadas em sentimentos | Captam a experiência vivida | Mais fáceis de usar mal; mais difíceis de agir |
| Dados de carga de trabalho no nível da equipe | Objetivos, ligam a causas | Podem escorregar para a vigilância sem regras fortes |
| Conversas individuais com o gestor | Pessoais, podem responder a necessidades individuais | Dependem do gestor; não agregáveis |
| Pesquisa anual de engajamento | Comparável ao longo do tempo | Lenta; baixa taxa de ação |
| Pulsos curtos frequentes | Oportunos | Fadiga se mal usados |

A resposta pragmática é usar pulsos anônimos e focados em condições com regras estritas de tamanho de grupo, combiná-los com fatos de carga de trabalho no nível da equipe e contar com gestores e profissionais para o apoio individual. Trate qualquer dado de bem-estar em nível individual como fora do escopo das métricas.

## Perguntas para discutir com sua equipe

**1. Poderíamos continuar trabalhando no ritmo atual por um ano, e o que teria de mudar se não?**
Peçam respostas honestas. O facilitador deve registrar as causas sem atribuir culpa: escopo, quadro, interrupções, incidentes. Combinem uma mudança no trabalho que reduziria a tensão. Se a resposta for sim, perguntem o que está protegendo o ritmo.

**2. Quando alguém aqui levantou pela última vez um problema ou um erro, e como foi recebido?**
Colham histórias. Percebam se a resposta foi curiosidade ou culpa. Discutam o que torna isso seguro ou inseguro. Combinem um hábito que facilitaria levantar um problema, como agradecer a quem o fez.

**3. Que regras nos fariam confiar em uma pesquisa de bem-estar?**
Redijam as regras juntos: quem vê o quê, o tamanho mínimo do grupo e o que nunca será feito. Perguntem o que os faria duvidar da promessa. O resultado é o primeiro rascunho das regras do programa para revisão com os representantes.

**4. Quais das nossas práticas dependem de pessoas trabalhando horas extras, e por quê?**
Listem-nas: releases, passagens de turno, plantão. Perguntem se cada uma é realmente necessária e o que a removeria. Escolham uma para corrigir com automação, processo ou quadro.

**5. O que fazemos quando um colega parece estar passando por dificuldades?**
Discutam o apoio que existe, como alcançá-lo e o que cada pessoa pode fazer. O facilitador deve estar pronto com informações sobre a assistência ao empregado e deixar claro que a equipe não substitui a ajuda profissional.

**6. O que mudamos em resposta à última rodada de feedback?**
Conferam o registro. Se nada mudou, discutam por quê: falta de responsável, falta de autoridade ou medo. Combinem uma ação com um responsável e uma data e como será relatada de volta.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega carregam a pressão de prazos e de demanda. Devem definir suas próprias perguntas de pulso, discutir os resultados juntas e levantar o ritmo e a carga abertamente no planejamento. Estão em melhor posição para dizer quais compromissos são sustentáveis e merecem líderes que escutem.

### Equipes de serviço e operações

As equipes de operações carregam o plantão, os incidentes e o trabalho noturno. Devem acompanhar a carga do rodízio no nível da equipe, insistir em correções para causas recorrentes e usar regras de descanso e de cobertura como proteções. Precisam de culturas que tratem a exaustão como um risco ao serviço, e não como sinal de dedicação.

### Liderança e governança

Os líderes definem expectativas e aprovam os planos que criam carga. Devem proteger as regras de privacidade, responder a sinais no nível da equipe com mudanças de escopo, quadro ou prioridades e resistir à tentação de classificar equipes. A governança deve conferir se existem serviços de apoio, se os deveres legais sobre jornada e saúde são cumpridos e se nenhum dado individual é usado na avaliação.

### Clientes e usuários

Os usuários se beneficiam de equipes descansadas, que aprendem e são estáveis, porque a qualidade do serviço, a paciência e a continuidade dependem delas. Também são afetados quando as equipes ficam sobrecarregadas: respostas mais lentas, mais erros, perda de pessoal experiente. A comunicação honesta sobre capacidade e prioridades faz parte de tratar com respeito as pessoas que os atendem.

## Na prática: um exemplo de gestão de serviços

O grupo de operações de serviços de uma operadora regional de telecomunicações tem oito equipes que operam redes, faturamento e sistemas de atendimento ao cliente em tempo integral. Os números abaixo são ilustrativos.

Depois de três demissões em uma equipe, o diretor pede um painel de moral que liste a pontuação de cada equipe. A chefe de pessoas e cultura propõe uma abordagem diferente e trabalha com representantes dos empregados para escrever as regras do programa: pulsos voluntários e anônimos, um grupo mínimo de relato de sete, nenhum dado individual e nenhum uso em avaliações. As equipes recebem um pulso mensal de três perguntas sobre ritmo, carga e a sensação de ter o que precisam, e um pulso trimestral sobre segurança psicológica e as três necessidades da teoria da autodeterminação. Os resultados vão primeiro a cada equipe.

O primeiro trimestre mostra que a equipe de operações de plataforma avalia o ritmo sustentável em 2,3 de 5, com 62% considerando a carga de trabalho insustentável. Os registros de rodízio mostram que a equipe trabalhou horas estendidas em 9 das últimas 13 semanas, movida por incidentes repetidos de um componente de faturamento envelhecido, e que um quarto de sua capacidade vai para trabalho não planejado. A nota de segurança psicológica da equipe é mais baixa que a das outras, e os comentários dizem que levantar preocupações sobre o componente resultou em ouvir que deveriam ter paciência. As outras equipes avaliam o ritmo entre 3,4 e 4,1.

O diretor e a equipe combinam quatro ações. A substituição do componente de faturamento sobe na lista de prioridades, e a equipe recebe dois engenheiros temporários de uma equipe com capacidade sobrando. O rodízio acrescenta um dia de descanso depois de qualquer incidente noturno, com os gestores responsáveis por protegê-lo. As preocupações sobre o componente são registradas e respondidas em duas semanas, com motivos. Os líderes param de pedir classificações de equipes. Em dois trimestres, a nota de ritmo da equipe sobe para 3,6, as semanas com horas estendidas caem para 2 de 13 e a segurança psicológica sobe. O tempo para agir sobre o feedback tem uma mediana de 11 dias. O diretor pede uma pontuação de bem-estar de toda a empresa para publicar ao conselho. A chefe de pessoas e cultura explica que uma pontuação única convida os gestores a gerenciar o número e oferece um relatório das ações tomadas e das condições mudadas, com o consentimento das equipes. A decisão é registrada. Uma equipe pede que seus resultados não sejam compartilhados além dela, e o pedido é atendido.

## Ágil, IA, automação e análise

### Ágil

Proteja um ritmo sustentável e pergunte sobre o bem-estar com cuidado, de forma anônima e agregada. O cuidado é que perguntar e não agir custa confiança.

### IA

A IA pode mudar a carga de trabalho e as preocupações com a segurança no emprego, e as ferramentas de sentimento não devem ser usadas para monitorar indivíduos. Pergunte diretamente sobre o efeito da IA no trabalho, em uma pesquisa anônima. O cuidado é que analisar texto livre com IA pode expor indivíduos; por isso confira as regras de privacidade.

### Automação

Automatize o envio das pesquisas e os lembretes, e não a interpretação, e meça o processo pela taxa de resposta e pelo anonimato. O cuidado é que alertas automáticos sobre o bem-estar de indivíduos cruzam uma linha.

### Análise

Relate resultados agregados com a contagem de respostas e o tamanho mínimo de grupo. A decisão informada é como mudar o trabalho. O cuidado é que os dados de bem-estar são sensíveis; por isso limite o acesso e a retenção.

## Olhar setorial

**Startup.** A intensidade é comum, e também o risco de que as explosões virem a norma. Os fundadores podem modelar o ritmo sustentável e notar quando a equipe corre quente. Apoie-se na conversa e em um pulso anônimo muito curto quando a equipe for grande o bastante para proteger o anonimato.

**Pequena empresa.** As equipes são pequenas demais para que algo seja anônimo. Não rode pesquisas de bem-estar que finjam o contrário. Use conversas individuais regulares e honestas, ofereça acesso a apoio e observe a sobrecarga no padrão de trabalho, como incidentes crônicos fora do expediente.

**Grande empresa.** A escala permite medidas anônimas e análise de tendências. Traz também pressão por comparar. Ofereça um conjunto comum de perguntas centrais, deixe as equipes acrescentarem as suas, proteja as regras de tamanho de grupo e envolva os representantes dos empregados. Torne os serviços de apoio visíveis e fáceis de usar.

**Governo e setor público.** As proteções ao emprego, os conselhos de trabalhadores e os sindicatos muitas vezes têm papéis formais em pesquisas e monitoramento. Envolva-os desde o início, siga as regras sobre jornada e saúde e trate os dados sensíveis com muito cuidado. Os servidores públicos costumam ser motivados pelo propósito, e as organizações não devem se aproveitar dessa boa vontade aceitando a sobrecarga permanente (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são modestos: o tempo das equipes para pulsos curtos, ferramentas de pesquisa que preservem o anonimato, o tempo de especialistas para a revisão de privacidade e a interpretação dos resultados e o custo real de agir, que pode significar quadro, redução de escopo ou investimento na correção de causas recorrentes. Serviços de apoio, como a assistência ao empregado, também custam dinheiro e valem a pena.

O retorno vem pela retenção, menos erros, melhor serviço e menos crises. Substituir um engenheiro experiente custa recrutamento, integração e conhecimento perdido. As equipes sob sobrecarga crônica cometem mais erros e causam mais incidentes. Construa o argumento com os seus próprios dados: a rotatividade voluntária por equipe ao longo de vários anos, o custo de recrutar e integrar substitutos e os padrões de incidentes em equipes sobrecarregadas. Evite citar estudos sobre o custo do burnout a menos que possa rastrear a fonte e a relevância. Seja honesto em dizer que os benefícios são reais e difíceis de isolar e que o argumento ético não depende do financeiro (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Classificar equipes por pontuações de bem-estar.** Os gestores passam então a gerenciar o número. Relate condições e ações.
- **Pesquisas identificadas.** As pessoas se contêm. Use anonimato e regras de tamanho de grupo.
- **Diagnosticar indivíduos a partir de dados de pesquisa.** É antiético e pouco confiável. Ofereça apoio e deixe o diagnóstico aos profissionais.
- **Acréscimos de bem-estar em vez de mudança de carga.** Tratam o sintoma. Corrija a carga.
- **Coletar horas por pessoa.** É vigilância. Use fatos do rodízio e da equipe.
- **Pesquisas sem ação.** As pessoas param de responder. Responda de forma visível e rápida.
- **Usar resultados em avaliações de desempenho.** Acaba com a honestidade. Proíba por escrito.
- **Tratar a sobrecarga como treinamento de resiliência.** Coloca o fardo nos indivíduos. Mude o sistema.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Ética e privacidade | Sem regras | Cuidado informal | Regras escritas, anonimato, mínimo de tamanho de grupo, nenhum uso individual | Regras revistas com representantes; conformidade conferida | Regras e prática auditadas de forma independente; as equipes controlam o compartilhamento |
| Medidas | Pesquisa anual, se houver | Verificações ocasionais com a equipe | Pulsos mensais e trimestrais curtos sobre ritmo, carga, segurança e necessidades | Percepção combinada com fatos de carga de trabalho no nível da equipe; tendências observadas | Quadro entre equipes com parceiros; o alerta precoce conduz o planejamento |
| Ação | Queixas sem resposta | Correções ad hoc | Respostas registradas e cronometradas; mudanças visíveis | Condições mudadas, acompanhadas e ligadas a resultados | Carga de trabalho e ritmo embutidos no planejamento e no financiamento em toda a organização |

## Lista de verificação

- [ ] Regras escritas declaram propósito, acesso, tamanho de grupo, retenção e uma proibição de uso individual.
- [ ] Representantes dos empregados e especialistas em privacidade revisaram as regras.
- [ ] A participação é voluntária e as respostas são anônimas.
- [ ] Um tamanho mínimo de grupo de relato se aplica a todas as saídas.
- [ ] Serviços de apoio existem e são conhecidos por todo o pessoal.
- [ ] Os pulsos usam poucas perguntas estáveis e claras e um comentário aberto.
- [ ] As equipes leem primeiro os próprios resultados.
- [ ] Fatos de carga de trabalho no nível da equipe são comparados com a percepção, nunca horas individuais.
- [ ] As respostas às preocupações têm um prazo declarado e são relatadas de volta.
- [ ] Nenhum dado de bem-estar é usado em avaliações de desempenho, promoção ou disciplina.

## Prompts de IA

**Redija regras para um programa de bem-estar.**

```text
Draft plain-language rules for a staff well-being pulse program in [type of
organization] in [jurisdiction or sector]. Cover purpose, voluntary
participation, anonymity, minimum reporting group size [number], who sees
results, retention, a clear ban on use in reviews, support available, and how
staff can raise concerns. Flag items to review with privacy specialists,
employee representatives, and occupational health. Do not give legal
conclusions. List your assumptions.
```

**Revise as perguntas do pulso.**

```text
Here are our pulse questions on pace, workload, psychological safety, and
motivation: [paste]. Review them for leading or double-barrelled wording,
sensitivity, and risk of identifying individuals in small groups. Suggest a
shorter set that focuses on conditions we can change. Do not claim validation
for any wording unless you cite the published source accurately. List your
assumptions and cautions.
```

**Analise comentários com segurança.**

```text
Here are [number] anonymized comments from a pulse for [team type]: [paste with
any identifying details removed]. Group them into themes about conditions of the
work, count each theme, and suggest which conditions could be changed by the
team, its leaders, or other groups. Do not infer anyone's health or identify
individuals. Tell me what a person should check before acting. List your
assumptions.
```

**Planeje uma resposta a um sinal de sobrecarga.**

```text
A team's pace rating is [value], extended-hours weeks are [number] of [number],
and unplanned work is [share]. Causes in comments: [summary]. Propose a
response that changes the work (scope, staffing, rotation, root-cause fixes),
what to tell the team, and how to measure whether it helped without tracking
individuals. List your assumptions and trade-offs for leadership.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada e as regras de privacidade de uma métrica de bem-estar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de bem-estar traz seu vetor de manipulação, sua barreira de proteção e sua regra de anonimato.

## Ideias-chave

- Pergunte sobre condições, como ritmo, carga, segurança e apoio, mais que sobre sentimentos, e mantenha as respostas anônimas e agregadas.
- Escreva e publique primeiro as regras, incluindo a proibição de usar os resultados para julgar indivíduos.
- Trate a sobrecarga sustentada como um problema do sistema a corrigir com escopo, quadro e causas, e não com resiliência.
- Compare a percepção com fatos de carga de trabalho no nível da equipe, nunca com horas individuais.
- Responda de forma visível e dentro de um prazo declarado e diga às pessoas o que mudou.
- Ofereça serviços de apoio reais e deixe o diagnóstico aos profissionais.

## Referências e leituras complementares

1. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
2. Deci, E. L., and Ryan, R. M., "The 'what' and 'why' of goal pursuits: Human needs and the self-determination of behavior," *Psychological Inquiry*, 11(4), 2000.
3. Maslach, C., and Leiter, M. P., "Understanding the burnout experience: recent research and its implications for psychiatry," *World Psychiatry*, 15(2), 2016.
4. World Health Organization, *International Classification of Diseases, 11th Revision (ICD-11)*, entry on burn-out as an occupational phenomenon.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Satisfação no trabalho](https://en.wikipedia.org/wiki/Job_satisfaction).
8. Wikipedia, [Engajamento do empregado](https://en.wikipedia.org/wiki/Employee_engagement).
9. Wikipedia, [Teoria da autodeterminação](https://en.wikipedia.org/wiki/Self-determination_theory).
10. Wikipedia, [Motivação intrínseca](https://en.wikipedia.org/wiki/Intrinsic_motivation).
11. Wikipedia, [Segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Viés de desejabilidade social](https://en.wikipedia.org/wiki/Social_desirability_bias).
13. Wikipedia, [Esgotamento profissional](https://en.wikipedia.org/wiki/Occupational_burnout).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
