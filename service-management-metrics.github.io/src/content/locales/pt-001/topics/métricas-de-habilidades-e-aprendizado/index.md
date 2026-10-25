# Métricas de habilidades e aprendizado

**Uma equipe que continua aprendendo mantém seus serviços saudáveis; por isso proteja o tempo de aprendizado dentro de um ritmo sustentável, meça se as habilidades estão espalhadas e em uso e trate certificados e contagens de cursos como pistas, nunca como prova de competência.**

## Visão geral e motivação

Os serviços sobrevivem às pessoas que os construíram, e a tecnologia por baixo deles muda o tempo todo. A capacidade de uma equipe de acompanhar depende do que ela sabe e de quão depressa aprende. Os princípios do Manifesto Ágil incluem a atenção contínua à excelência técnica e a reflexão regular sobre como se tornar mais eficaz. As práticas de melhoria contínua e de gestão do conhecimento do ITIL descrevem a mesma necessidade do lado organizacional. As medidas de habilidades e aprendizado perguntam se a capacidade para operar e alterar os serviços existe, se está espalhada o bastante para sobreviver a ausências e se a organização dá às pessoas o tempo e o apoio para crescer.

O aprendizado é fácil de contar e difícil de medir bem. Horas de treinamento, cursos concluídos e certificados são visíveis, e nenhum deles mostra se alguém consegue fazer algo novo no trabalho. Uma [certificação profissional](https://en.wikipedia.org/wiki/Professional_certification) mostra que uma pessoa atendeu a um padrão de avaliação em um momento. É uma evidência útil, especialmente para papéis regulados e pontos de entrada, como as bases do ITIL ou do ágil, e não é uma medida da habilidade ou do julgamento atuais da pessoa. Este tópico se apoia, portanto, em medidas de capacidade em uso: quem pode operar e alterar o quê, com que rapidez as pessoas novas se tornam úteis e se o aprendizado aparece no trabalho.

Várias ideias moldam a abordagem.

- **Muito conhecimento valioso é [tácito](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi observou que sabemos mais do que conseguimos dizer. Operar um serviço complexo envolve um julgamento difícil de pôr no papel, que se espalha principalmente trabalhando ao lado dos outros. A documentação ajuda e não substitui a prática compartilhada, como a [programação em par](https://en.wikipedia.org/wiki/Pair_programming), o acompanhamento de perto e a revisão.
- **Amplitude e profundidade importam as duas.** As [habilidades em T](https://en.wikipedia.org/wiki/T-shaped_skills) descrevem uma pessoa com profundidade em uma área e amplitude de trabalho em outras. As equipes de pessoas em T conseguem cobrir ausências e colaborar entre fronteiras. O [treinamento cruzado](https://en.wikipedia.org/wiki/Cross-training_(business)) constrói essa amplitude deliberadamente.
- **O aprendizado é social.** Uma [comunidade de prática](https://en.wikipedia.org/wiki/Community_of_practice) é um grupo de pessoas que compartilham um ofício e aprendem umas com as outras. A [mentoria](https://en.wikipedia.org/wiki/Mentorship) pareia pessoas menos experientes com mais experientes. Ambas espalham o conhecimento por fronteiras de equipes.
- **As organizações podem aprender.** Uma [organização que aprende](https://en.wikipedia.org/wiki/Learning_organization), termo popularizado por Peter Senge, se transforma continuamente pelo aprendizado de suas pessoas. Práticas como as revisões de incidentes sem culpados são o modo como as organizações aprendem com a experiência (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

As medidas de aprendizado têm suas próprias distorções. Os orçamentos de treinamento são gastos em cursos que ninguém aplica. O tempo para aprender é prometido e depois consumido por incidentes. Os indivíduos são classificados por inventários de habilidades, o que os faz esconder o que não sabem. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: quando as horas de aprendizado são uma meta, as pessoas assistem a sessões, e quando os certificados são uma meta, as pessoas os colecionam (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Um ritmo sustentável importa aqui também. O aprendizado espremido em noites e fins de semana é um custo para as pessoas e não é sinal de uma organização saudável. As medidas abaixo olham o tempo protegido dentro da semana de trabalho.

## Princípios-chave

- **Meça a capacidade em uso, e não a presença em cursos.** Olhe o que as pessoas conseguem fazer e o que fazem.
- **Proteja o tempo de aprendizado dentro de um ritmo sustentável.** Não faça do aprendizado um extra não pago.
- **Espalhe o conhecimento de propósito.** Os pontos únicos de conhecimento são um risco ao serviço e um fardo à pessoa.
- **Trate os certificados como evidência, e não como prova.** Importam para alguns papéis e dizem pouco sobre a habilidade atual.
- **Aprenda com o trabalho.** Incidentes, revisões e programação em par ensinam mais que a maioria dos cursos.
- **Mantenha os dados de habilidades no nível da equipe.** Os indivíduos não devem ser classificados por um inventário.
- **Deixe as pessoas moldarem o próprio aprendizado.** Pessoas motivadas escolhem bem quando recebem tempo e apoio.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Parcela de tempo de aprendizado protegido | Proporção da capacidade da equipe reservada e realmente usada para aprender | horas ou parcela de capacidade usadas para aprender em horário de trabalho / capacidade total de trabalho, no nível da equipe | porcentagem | Plano de capacidade da equipe e tipo de trabalho no rastreador | Gestão da força de trabalho e dos talentos; melhoria contínua | Tempo para reflexão e excelência técnica | Mensal |
| Profundidade do treinamento cruzado | Proporção das tarefas críticas realizadas por pelo menos duas pessoas no último período | tarefas críticas realizadas por duas ou mais pessoas no período / tarefas críticas | porcentagem | Mapa de tarefas e responsabilidades da equipe, validado por trabalho recente | Gestão do conhecimento; gestão da continuidade de serviço | Propriedade coletiva do trabalho | Trimestral |
| Tempo até a primeira contribuição | Tempo para um novo membro da equipe concluir sua primeira mudança real ou caso resolvido | mediana e 85º percentil dos dias da data de início ao primeiro item de trabalho real concluído em produção | dias | Rastreador de integração e rastreador de trabalho | Gestão da força de trabalho e dos talentos; gestão do conhecimento | Tempo para um novo membro da equipe fazer uma primeira mudança | Por contratação, revisto trimestralmente |
| Participação em comunidades | Proporção dos membros da equipe que participam de uma comunidade de prática no período, por escolha deles | membros que assistiram, contribuíram ou apresentaram no período / membros da equipe, no nível da equipe | porcentagem | Registros da comunidade, voluntário | Gestão do conhecimento; melhoria contínua | Comunidades de prática | Trimestral |
| Taxa de aplicação do treinamento | Proporção das experiências de treinamento em que o aluno ou sua equipe relata usar o aprendizado no trabalho em até 90 dias | experiências de aprendizado relatadas como aplicadas / experiências de aprendizado concluídas | porcentagem | Breve pergunta de acompanhamento ao aluno, anonimizada para a equipe | Gestão da força de trabalho e dos talentos; melhoria contínua | Aprendizado aplicado ao trabalho | Trimestral |
| Cobertura de certificações relevantes | Proporção dos papéis que exigem certificação por motivo legal, contratual ou de entrada em que a exigência é atendida | papéis com a certificação exigida / papéis que exigem certificação | porcentagem | Registro de exigências dos papéis, registros de certificados | Gestão da força de trabalho e dos talentos; governança | Atender a exigências contratuais ou regulatórias de entrada | Anual |
| Lições compartilhadas entre equipes | Número de lições de incidentes ou melhorias que foram compartilhadas fora da equipe de origem e usadas por outra equipe | lições compartilhadas com uso registrado por outra equipe no período | contagem | Registro de lições e notas de revisão | Gestão do conhecimento; melhoria contínua | Aprendizado compartilhado entre equipes | Trimestral |

Defina no registro as tarefas críticas, os papéis e os tipos de aprendizado. O tempo de aprendizado protegido conta somente o tempo usado para aprender, e não o tempo oferecido e perdido para o trabalho urgente, e exclui o aprendizado fora do expediente. A profundidade do treinamento cruzado conta as pessoas que realmente realizaram a tarefa no período, e não as que poderiam em teoria. A taxa de aplicação do treinamento usa autorrelatos e é agregada por equipe, com um tamanho mínimo de grupo. A cobertura de certificações vale apenas para papéis com uma exigência genuína e nunca é usada para avaliar a competência de um indivíduo.

## Recomendações

### Proteja o tempo e torne-o real

**1. Planeje o tempo de aprendizado na capacidade.** Reserve uma parcela da capacidade de cada equipe para aprender, como um bloco regular por semana, e escreva-a no plano de capacidade. Um plano que pressupõe que todos trabalham em plena utilização na entrega não tem espaço para aprender. Acompanhe a parcela realmente usada e veja por que fica aquém: incidentes, prazos ou cultura. Isso se liga aos tópicos de planejamento e carga de trabalho (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

**2. Deixe as pessoas escolherem, com orientação.** As pessoas motivadas sabem o que precisam aprender. Ofereça um orçamento e tempo, um cardápio de opções e conversas sobre as necessidades da equipe. Peça às pessoas que compartilhem com a equipe o que aprendem, o que multiplica o valor. Evite o aprendizado obrigatório que é irrelevante para o trabalho.

**3. Faça do aprendizado parte do trabalho.** A programação em par, o rodízio, o acompanhamento de perto, a revisão de código, as palestras internas e as revisões de incidentes sem culpados ensinam no contexto de problemas reais. Conte-os como aprendizado no plano de capacidade. Uma equipe que aprende enquanto entrega precisa de menos tempo longe da entrega.

### Espalhe o conhecimento

**4. Mapeie as tarefas críticas e quem as realizou.** Liste as tarefas que precisam ser feitas com confiabilidade: restaurar um banco de dados, rodar uma chave, tratar um incidente grave, implantar uma mudança arriscada. Para cada uma, registre quem a realizou recentemente. O mapa mostra os pontos únicos de conhecimento. Valide-o com evidências de trabalho recente, já que um inventário de habilidades baseado em autoavaliação se afasta da realidade (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

**5. Faça treinamento cruzado deliberadamente.** Planeje a programação em par e o rodízio de modo que toda tarefa crítica tenha pelo menos duas pessoas que a fizeram há pouco. Pratique com simulacros e game days onde possível. O objetivo é resiliência e um plantão sustentável, e alivia os especialistas de serem os únicos que podem ajudar.

**6. Apoie as comunidades de prática e a mentoria.** Estimule grupos voluntários em torno de ofícios como confiabilidade, testes, segurança ou gestão de serviços e reserve tempo para eles. Ofereça mentoria entre equipes. Meça a participação de modo leve, no nível da equipe, e pergunte o que as comunidades produziram: práticas compartilhadas, ferramentas, lições.

### Integre bem

**7. Meça o tempo até a primeira contribuição.** Acompanhe quanto tempo os novos membros levam para concluir um trabalho real em produção e o que os atrasa: acesso, documentação, configuração do ambiente ou responsabilidade pouco clara. Corrija as causas e peça a visão de quem entrou há pouco. Um começo rápido e acolhedor dá o tom e reduz o risco (veja o tópico 6.4, Experiência de usuários e colaboradores).

**8. Dê cedo às pessoas novas trabalho real, com apoio.** Comece com tarefas pequenas e reais e um colega de apoio nomeado. Reveja o progresso regularmente e ajuste. Aprender fazendo, com redes de segurança, é mais rápido que um longo período de leitura.

### Avalie o aprendizado com honestidade

**9. Pergunte se o treinamento foi aplicado.** Depois de um curso ou evento, pergunte ao aluno e à equipe, algumas semanas depois, se e como o usaram. Agregue as respostas. Os cursos que ninguém aplica devem ser mudados ou abandonados. O modelo de Kirkpatrick de quatro níveis de avaliação de treinamento, da reação ao aprendizado, ao comportamento e aos resultados, oferece um vocabulário para isso, embora perguntas simples de acompanhamento sejam um bom começo.

**10. Use as certificações para o que elas servem.** Onde a lei, o contrato ou o padrão de entrada de um papel exigir uma certificação, acompanhe a cobertura. Em outros casos, trate a certificação como um sinal de esforço e conhecimento. Não defina contagens de certificados como metas e não pague nem promova só com base nelas.

**11. Compartilhe lições entre equipes.** Mantenha um registro leve de lições de incidentes, revisões e melhorias e acompanhe quais foram usadas por uma equipe diferente da de origem. Uma lição que fica na equipe que a aprendeu foi só pela metade aprendida pela organização. Reveja o registro nas comunidades de prática.

**12. Mantenha dados individuais fora das classificações.** Não publique inventários de habilidades por pessoa e nunca classifique pessoas por horas de treinamento, certificados ou habilidade autoavaliada. Agregue no nível da equipe e deixe as pessoas verem os próprios dados. Os indivíduos esconderão lacunas se elas contarem contra eles.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Parcela de tempo de aprendizado protegido | Registrar o trabalho comum como aprendizado; agendar tempo que depois é cancelado | Contar só o tempo usado; comparar com os registros de tipo de trabalho e os comentários da equipe |
| Profundidade do treinamento cruzado | Listar pessoas que nunca fizeram a tarefa; contar uma única observação | Evidência de trabalho recente; resultados de simulacros |
| Tempo até a primeira contribuição | Contar mudanças triviais; começar tarde o relógio | Definir "real" no registro; perguntar ao novo membro e ao colega de apoio |
| Participação em comunidades | Tornar a presença obrigatória; contar inscrições | Somente voluntária; perguntar o que a comunidade produziu |
| Taxa de aplicação do treinamento | Pressionar os alunos a dizer que aplicaram; perguntar só aos entusiastas | Agregado anônimo; acompanhamento no nível da equipe; olhar mudanças observáveis |
| Cobertura de certificações relevantes | Colecionar certificados para papéis que não precisam; tratar a certificação como competência | Limitar a exigências genuínas; conferir a capacidade prática por outras evidências |
| Lições compartilhadas entre equipes | Compartilhar lições triviais; contar postagens | Exigir um uso registrado por outra equipe; rever a qualidade |

Uma leitura saudável é um tempo de aprendizado protegido e usado, tarefas críticas conhecidas por várias pessoas, novos membros fazendo contribuições reais depressa, comunidades que produzem prática compartilhada, treinamento que as pessoas aplicam e lições que viajam entre equipes.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Cursos formais e certificação | Estruturados, reconhecidos, úteis para a entrada e para papéis regulados | Custo; podem não se transferir ao trabalho |
| Aprendizado no trabalho | Relevante e imediato | Desigual; depende de mentores e de tempo |
| Tempo protegido | Torna real o aprendizado | Compete com o trabalho urgente; exige disciplina |
| Aprendizado em tempo próprio | Nenhum custo para a entrega | Insustentável; injusto; hora extra oculta |
| Inventário de habilidades | Mostra lacunas e riscos | Subjetivo; pode virar uma classificação |
| Evidência de trabalho recente | Confiável | Mais esforço para manter |
| Programa central de treinamento | Consistência | Lento; pode não servir às equipes |
| Aprendizado escolhido pela equipe | Relevante; motivado | Qualidade variável; exige orientação |

A resposta pragmática é proteger o tempo de aprendizado na semana de trabalho, aprender principalmente por meio do trabalho com alguns cursos formais onde ajudam, manter o mapa de habilidades baseado em evidências recentes e evitar qualquer uso dos dados para classificar pessoas.

## Perguntas para discutir com sua equipe

**1. O que cada um de nós aprendeu no trabalho no último trimestre, e como aprendeu?**
Compartilhem brevemente. Percebam se a maior parte do aprendizado veio de cursos, do trabalho ou de colegas. O facilitador deve perguntar o que o tornou possível e o que atrapalhou. Combinem uma mudança que aumentaria o aprendizado útil.

**2. Que tarefas críticas só um ou dois de nós conseguiriam fazer, e o que aconteceria se estivessem ausentes?**
Listem-nas. Escolham a mais arriscada e planejem como espalhar o conhecimento: programação em par, um simulacro, um runbook, rodízio. Confirmem que o plano não acrescenta hora extra oculta para os especialistas.

**3. Quanto tempo levou nosso último novo colega para fazer algo real, e o que o atrasou?**
Perguntem a ele. Rastreiem as etapas desde o primeiro dia. Discutam acesso, ambiente, documentação e apoio. Combinem duas correções que ajudariam a próxima pessoa.

**4. Quando um curso ou certificado mudou a nossa forma de trabalhar?**
Lembrem exemplos. Perguntem o que fez a diferença. Se poucos vierem à mente, discutam por quê. Decidam qual aprendizado vale continuar e qual abandonar.

**5. Que lição de um incidente recente outra equipe realmente usou?**
Olhem o registro de lições. Se nada viajou, perguntem como compartilhar com mais eficácia: uma comunidade, uma breve palestra, uma mudança em um padrão. Escolham uma lição para compartilhar neste mês.

**6. Nosso tempo de aprendizado é real, e o que o protege?**
Comparem o plano com o que aconteceu. Discutam o que o toma: incidentes, prazos, expectativas. Combinem uma regra para protegê-lo, como tratar um pedido urgente como uma escalação a um decisor.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega aprendem principalmente construindo. Devem planejar o tempo de aprendizado, fazer par e rodízio no trabalho crítico, compartilhar o que aprendem e participar de comunidades de prática. Devem pedir o tempo e as ferramentas de que precisam e tratar o aprendizado como parte de entregar bem.

### Equipes de serviço e operações

As equipes de operações precisam de amplitude, porque cobrem ausências e incidentes a qualquer hora. Devem fazer treinamento cruzado nas tarefas críticas, usar simulacros e game days e registrar o que aprendem em runbooks e revisões. O ritmo do plantão deve deixar espaço para descanso e aprendizado.

### Liderança e governança

Os líderes decidem se o aprendizado é uma prioridade ou uma reflexão tardia. Devem proteger o tempo de aprendizado nos planos, financiar as correções que a integração revela, evitar metas de horas de treinamento ou de certificados e apoiar as comunidades. A governança deve acompanhar a certificação apenas onde é exigida e olhar a evidência de capacidade em uso.

### Clientes e usuários

Os usuários se beneficiam de equipes que conhecem a fundo seus serviços e acompanham as mudanças: correções mais rápidas, menos erros repetidos e melhores conselhos. Notam quando as pessoas que os ajudam parecem novas no sistema ou quando o mesmo problema se repete. Também podem ensinar às equipes sobre o próprio trabalho, e o envolvimento deles é uma forma de aprendizado.

## Na prática: um exemplo de gestão de serviços

O grupo de operações de tecnologia de um banco regional tem seis equipes que operam o núcleo bancário, pagamentos e canais digitais. Os números abaixo são ilustrativos.

O painel de treinamento do grupo mostra uma média de 24 horas de treinamento por pessoa no ano passado e 70 certificados obtidos, e a diretora de treinamento está satisfeita. A chefe de operações faz uma pergunta diferente: as equipes dão conta quando as pessoas-chave estão ausentes? Ela pede a cada equipe que mapeie suas tarefas críticas e quem realizou cada uma nos últimos seis meses. Das 46 tarefas críticas, só 19 tinham sido realizadas por duas ou mais pessoas, uma profundidade de treinamento cruzado de 41%. Quatorze tarefas tinham sido feitas por uma só pessoa. O tempo até a primeira contribuição das últimas oito contratações tem uma mediana de 41 dias, com um 85º percentil de 67, gastos sobretudo esperando acesso e procurando documentação. Um breve acompanhamento com 38 pessoas que concluíram cursos achou que 31% disseram ter aplicado o aprendizado em 90 dias. As equipes relatam que o tempo de aprendizado costuma ser a primeira coisa cancelada em uma semana ocupada, e o tempo protegido realmente usado é de cerca de 3% da capacidade.

O grupo faz quatro mudanças com as equipes. Cada equipe planeja um bloco fixo de aprendizado de cerca de 8% da capacidade e uma regra de que um cancelamento deve ser combinado com o líder da equipe e registrado. Os planos de programação em par e rodízio visam às 14 tarefas de uma só pessoa, começando pelas cinco mais críticas, com simulacros a cada trimestre. Uma lista de integração e um colega de apoio nomeado cortam o atraso de acesso, e o plano da primeira semana inclui uma pequena mudança real. Os cursos são escolhidos pelas equipes a partir de uma lista curta, e uma pergunta de acompanhamento é enviada após 60 dias. Uma comunidade entre equipes sobre confiabilidade se reúne mensalmente, e as lições das revisões de incidentes são compartilhadas ali com uma nota de quem as usou.

Um ano depois, a profundidade do treinamento cruzado é de 78%, o tempo mediano até a primeira contribuição é de 19 dias, a taxa de aplicação do treinamento é de 64% e o tempo de aprendizado protegido usado é de cerca de 7% da capacidade. Seis lições das revisões foram adotadas por outras equipes. A diretora de treinamento pede uma meta de 40 horas de treinamento por pessoa. A chefe de operações oferece em seu lugar medidas de profundidade do treinamento cruzado, de aplicação e de tempo até a primeira contribuição, explicando que as horas podem ser cumpridas com sessões que ninguém usa. A decisão é registrada, e o painel abandona a média de horas de treinamento. A cobertura de certificações passa a ser acompanhada apenas para os papéis em que os reguladores a exigem.

## Ágil, IA, automação e análise

### Ágil

Proteja o tempo de aprendizado dentro de um ritmo sustentável e compartilhe lições por meio de revisões regulares. O cuidado é que metas de horas de treinamento produzem presença, e não aprendizado.

### IA

A IA muda as habilidades de que uma equipe precisa, como conferir a saída da IA, escrever bons prompts e entender limites. Meça a aplicação do aprendizado ao trabalho e a qualidade do trabalho assistido por IA, e não os cursos concluídos. O cuidado é que os certificados em ferramentas de IA podem ficar atrás da prática e não provam competência.

### Automação

Automatize os lembretes de aprendizado e os insumos do mapeamento de habilidades e meça o uso do conteúdo de aprendizado. O cuidado é que a inferência automática de habilidades a partir de dados de atividade pode ser imprecisa e intrusiva.

### Análise

Mostre a profundidade do treinamento cruzado por equipe com contagens. A decisão informada é onde o conhecimento está em risco. O cuidado é que as matrizes de habilidades envelhecem; por isso reveja-as.

## Olhar setorial

**Startup.** As pessoas usam muitos chapéus e aprendem depressa sob pressão. Proteja algum tempo para aprender, faça da programação em par o padrão e fique atento aos pontos únicos de conhecimento. Contratar generalistas ajuda. Não monte cedo demais um departamento de treinamento.

**Pequena empresa.** Os orçamentos são apertados, e uma pessoa pode cobrir muita coisa. Use aprendizado de baixo custo: documentação de fornecedores, eventos comunitários, mentoria de um consultor externo de confiança e treinamento cruzado onde possível. Garanta que pelo menos mais uma pessoa consiga tratar as tarefas críticas, mesmo que só aproximadamente.

**Grande empresa.** A escala permite programas formais, comunidades e trilhas de carreira. Convida também a exigências uniformes que não servem a ninguém. Ofereça um orçamento e uma plataforma de aprendizado comuns, deixe as equipes escolherem, apoie comunidades internas e meça a capacidade por equipe. Alinhe a certificação a necessidades reais.

**Governo e setor público.** A escassez de habilidades, as regras de compras e os arcabouços do serviço público moldam o desenvolvimento. A certificação pode ser uma exigência formal para alguns papéis. Invista em aprendizagem e mobilidade interna, retenha o conhecimento quando os contratos terminam e use comunidades entre órgãos para compartilhar prática (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o próprio tempo, que é o custo principal, mais orçamentos para cursos e eventos, o esforço para manter o mapa de habilidades, o tempo de mentoria e alguma ferramenta para comunidades. A programação em par e o rodízio custam vazão no curto prazo.

Os retornos são resiliência a ausências e rotatividade, integração mais rápida, menos erros repetidos, resolução de problemas mais rápida e melhor retenção entre as pessoas que estão crescendo. Construa o argumento com os seus próprios dados: o número de tarefas críticas conhecidas por uma só pessoa, os dias que as novas contratações levam para ser produtivas e o custo desse tempo, os incidentes que se prolongaram por causa de especialistas ausentes e a rotatividade entre pessoas que dizem não ter espaço para crescer. Evite citar estimativas publicadas de retorno sobre treinamento a menos que possa rastrear seu método e adequação. O custo de não aprender aparece tarde, como habilidades desatualizadas e serviços frágeis (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Horas de treinamento como meta.** Compra presença. Meça a aplicação e a capacidade.
- **Certificados como prova de habilidade.** Mostram uma avaliação em um momento. Use outras evidências.
- **Aprender em tempo próprio.** Esconde hora extra e é injusto. Proteja o tempo na semana de trabalho.
- **Inventários de habilidades autoavaliadas usados para classificar.** As pessoas inflam ou ocultam. Baseie os mapas em trabalho recente e mantenha-os no nível da equipe.
- **Especialistas heróis.** Uma pessoa que sabe tudo é um risco e um fardo. Espalhe o conhecimento.
- **Cursos escolhidos centralmente para todos.** Servem a poucos. Deixe as equipes escolherem com orientação.
- **Cancelar o aprendizado primeiro.** Ensina que o aprendizado é opcional. Proteja-o e trate as exceções como decisões.
- **Lições que ficam locais.** A organização repete erros. Compartilhe-as e acompanhe o uso.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Tempo e apoio | Aprendizado em tempo próprio | Orçamento ocasional de treinamento | Tempo protegido no plano de capacidade; aprendizado escolhido pela equipe | Tempo usado acompanhado; cancelamentos são decisões; orçamentos seguem as necessidades das equipes | Tempo de aprendizado e trilhas de crescimento coordenados entre equipes e parceiros |
| Espalhar o conhecimento | Os especialistas carregam o trabalho | A documentação existe | Tarefas críticas mapeadas por evidência recente; programação em par e simulacros | Profundidade do treinamento cruzado gerida; integração medida e melhorada | O conhecimento flui livremente entre equipes, fornecedores e comunidades |
| Avaliar o aprendizado | Contam-se presenças | Notas de satisfação com os cursos | Acompanhamentos de aplicação; certificação onde exigida | Lições compartilhadas e usadas entre equipes; treinamento mudado pelos resultados | Resultados de aprendizado ligados a resultados de serviço e compartilhados com parceiros |

## Lista de verificação

- [ ] O tempo de aprendizado é planejado na capacidade da equipe e acompanhado como usado.
- [ ] As tarefas críticas estão listadas, com quem realizou cada uma recentemente.
- [ ] Toda tarefa crítica tem um plano para chegar a pelo menos duas pessoas praticantes.
- [ ] O tempo até a primeira contribuição é medido para novos membros e é objeto de ação.
- [ ] As comunidades de prática e a mentoria são apoiadas e voluntárias.
- [ ] O treinamento é acompanhado com uma pergunta sobre a aplicação.
- [ ] A certificação é acompanhada apenas para papéis com uma exigência genuína.
- [ ] Um registro de lições registra o compartilhamento e o uso entre equipes.
- [ ] Os dados de habilidades são mantidos no nível da equipe e nunca usados para classificar indivíduos.
- [ ] O aprendizado nunca depende de horas não pagas.

## Prompts de IA

**Construa um mapa de tarefas críticas.**

```text
Our team runs [services]. List the critical tasks that must be done reliably
(for example restoring from backup, rotating credentials, major incident
coordination, risky deployments) and suggest evidence we can use to record
who has done each in the last six months. Propose a simple table and a way to
review it with the team without ranking people. Do not invent our tasks beyond
what I describe. List your assumptions.
```

**Projete um plano de integração.**

```text
Design a first-30-days onboarding plan for a new [role] joining a team that runs
[services]. Include access setup, a named buddy, a small real change by the end
of the first week, regular check-ins, and what to measure (time to first
contribution and what slowed it). Keep it supportive and realistic. List your
assumptions and items to adapt to our context.
```

**Faça o acompanhamento de um treinamento.**

```text
Draft a short follow-up question set to send to people 60 days after they
completed [course or event]. Ask whether and how they applied it, what got in
the way, and what would help, in a way that can be aggregated to team level
without identifying individuals. Suggest how to read the answers and what to
change. List your assumptions.
```

**Planeje um esforço de difusão do conhecimento.**

```text
Task [description] is only done by [one or two people] in our team. Propose a
plan to spread it using pairing, a drill, and documentation, with realistic
timing that protects those people's workload. Suggest how we will know the plan
worked, using evidence of recent work. List your assumptions and risks.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de habilidades ou de aprendizado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de aprendizado mede a capacidade em uso e traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Meça a capacidade em uso: quem fez as tarefas críticas recentemente e com que rapidez as pessoas novas contribuem.
- Proteja o tempo de aprendizado na semana de trabalho, dentro de um ritmo que possa ser sustentado.
- Espalhe o conhecimento de propósito por meio de programação em par, rodízio, simulacros e comunidades.
- Acompanhe se o treinamento foi aplicado e trate os certificados como evidência, e não como prova.
- Compartilhe lições entre equipes e acompanhe o uso delas.
- Mantenha os dados de habilidades no nível da equipe e nunca classifique indivíduos.

## Referências e leituras complementares

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Certificação profissional](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Conhecimento tácito](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Programação em par](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [Habilidades em T](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Treinamento cruzado (negócios)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Comunidade de prática](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentoria](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Organização que aprende](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
