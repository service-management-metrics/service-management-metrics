# Métricas de melhoria contínua

**A melhoria é um hábito de perceber, tentar e conferir; por isso meça se as ideias viram mudanças, se as mudanças têm o efeito conferido e se os mesmos problemas continuam voltando, e mantenha o trabalho nas mãos das pessoas que o fazem.**

## Visão geral e motivação

Um dos princípios do Manifesto Ágil diz que, em intervalos regulares, a equipe reflete sobre como se tornar mais eficaz e então ajusta e adapta seu comportamento de acordo. O ITIL expressa a mesma convicção em seus princípios orientadores e em sua prática de melhoria contínua: os serviços e o modo como são operados devem ser melhorados o tempo todo, em pequenos passos, com base em evidências. Ambos pedem a mesma coisa, que é um hábito permanente de melhoria, e não um programa ocasional.

A maioria das organizações acredita que faz isso. Muitas têm uma reunião ao estilo de retrospectiva que gera uma lista de ações, um registro de ideias de melhoria ou um plano anual de melhoria. A falha comum é que a lista cresce e pouco acontece. As ações são combinadas numa reunião e esquecidas. As melhorias são feitas e nunca conferidas, e ninguém sabe se ajudaram. O mesmo problema volta com outro nome. As métricas de melhoria contínua são o meio de distinguir uma organização que está melhorando de uma que só fala em melhorar.

O [processo de melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process) tem raízes profundas na gestão da qualidade. O ciclo [Planejar-Fazer-Verificar-Agir (PDCA)](https://en.wikipedia.org/wiki/PDCA), associado a W. Edwards Deming e Walter Shewhart, descreve a melhoria como pequenos experimentos repetidos: planejar uma mudança, tentá-la, conferir o resultado e agir sobre o que se aprende. O [Kaizen](https://en.wikipedia.org/wiki/Kaizen) é o termo japonês para a melhoria contínua das práticas de trabalho, com o envolvimento de todos. Ambos vêm da [manufatura enxuta (lean)](https://en.wikipedia.org/wiki/Lean_manufacturing) e do Sistema Toyota de Produção e hoje são vocabulário padrão no trabalho de serviços e de software. O ITIL 4 oferece um modelo de melhoria contínua cujas etapas perguntam qual é a visão, onde você está agora, onde quer chegar, como chegará lá, para agir, se chegou lá e como manter o impulso. É um estímulo à conversa, e não um procedimento a seguir mecanicamente.

Algumas ideias ajudam.

- **Melhore a restrição.** A [teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints), desenvolvida por Eliyahu Goldratt, diz que a vazão de um sistema é limitada por sua parte mais lenta, de modo que as melhorias em outros lugares acrescentam pouco. Ache a restrição usando as medidas de fluxo de partes anteriores do livro e melhore-a primeiro (veja o tópico 2.3, Trabalho em andamento e teoria das filas).
- **Ache causas, e não sintomas.** A [análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis) busca as causas subjacentes de um problema para que corrigi-las impeça sua volta. O uso excessivo de métodos simples pode enganar quando os problemas têm várias causas; por isso examine os fatores contribuintes.
- **Questione as premissas.** O [aprendizado de circuito duplo](https://en.wikipedia.org/wiki/Double-loop_learning), um termo de Chris Argyris e Donald Schön, vai além de corrigir a ação para examinar as crenças e regras que levaram a ela. As equipes que só corrigem sintomas (aprendizado de circuito simples) tendem a reencontrar os mesmos problemas.
- **A melhoria precisa de capacidade.** Uma equipe no limite não tem espaço para melhorar. A capacidade protegida é uma pré-condição, e um ritmo que pode ser sustentado é parte do que torna a melhoria possível (veja o tópico 9.2, Métricas de satisfação e bem-estar).

As métricas de melhoria convidam à própria manipulação. Se o número de ações concluídas é uma meta, as equipes combinam ações triviais. Se as economias das melhorias são uma meta, as alegações incham. Se o número de ideias enviadas é uma meta, as ideias inundam e nenhuma é tratada. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: meça se as melhorias funcionam, e não quão ocupado parece o programa de melhoria (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **A melhoria pertence às pessoas que fazem o trabalho.** Elas veem primeiro os problemas e as possíveis correções.
- **Trabalhe em pequenos passos e confira cada um.** Pequenos experimentos reduzem o risco e aceleram o aprendizado.
- **Meça o acompanhamento e o efeito, e não a atividade.** Ações concluídas e efeitos confirmados importam mais que ideias geradas.
- **Melhore primeiro a restrição.** O esforço longe do gargalo acrescenta pouco.
- **Corrija as causas.** Procure fatores contribuintes e questione as premissas por trás deles.
- **Proteja a capacidade para melhorar.** Não vai acontecer em um tempo livre que não existe.
- **Celebre o aprendizado, inclusive o de experimentos fracassados.** Uma ideia tentada que não funcionou é informação.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de acompanhamento de ações | Proporção das ações de melhoria combinadas em revisões que foram concluídas até a data combinada | ações concluídas na data / ações devidas no período | porcentagem | Registro de melhorias ou backlog da equipe | Melhoria contínua | Ações de reflexão entregues | Mensal |
| Idade do backlog de melhorias | Idade dos itens de melhoria em aberto, com atenção aos mais antigos | mediana e 85º percentil da idade em dias dos itens em aberto; idade do mais antigo | dias | Registro de melhorias | Melhoria contínua | Idade do backlog | Mensal |
| Taxa de verificação de efeito | Proporção das melhorias concluídas cujo efeito foi conferido contra uma linha de base | melhorias concluídas com uma verificação registrada de antes e depois / melhorias concluídas | porcentagem | Registro de melhorias com campos de linha de base e resultado | Melhoria contínua; medição e relato | Aprendizado com experimentos | Trimestral |
| Tempo da ideia ao teste | Tempo desde uma ideia de melhoria ser levantada até o primeiro teste no trabalho real | mediana e 85º percentil dos dias de levantada ao primeiro teste | dias | Registro de melhorias | Melhoria contínua | Feedback rápido sobre mudanças | Mensal |
| Parcela de ideias da linha de frente | Proporção das ideias de melhoria levantadas por pessoas que fazem o trabalho, contada no nível da equipe | ideias levantadas por membros da equipe que fazem o trabalho / ideias levantadas | porcentagem | Registro de melhorias | Melhoria contínua | Equipes autoorganizadas | Trimestral |
| Taxa de problemas repetidos | Proporção dos problemas que se repetem após uma melhoria destinada a remover sua causa | problemas que se repetem dentro de um período declarado após o encerramento de uma melhoria relacionada / melhorias encerradas com uma causa relacionada | porcentagem | Registros de incidentes, problemas e melhorias ligados por causa | Gestão de problemas; melhoria contínua | Defeito escapado após uma correção | Trimestral |
| Parcela de capacidade de melhoria | Proporção da capacidade da equipe gasta em trabalho de melhoria | capacidade ou itens concluídos marcados como melhoria / capacidade ou itens concluídos totais | porcentagem | Tipos de trabalho do rastreador | Melhoria contínua; gestão de capacidade e desempenho | Tempo para reflexão e excelência técnica | Mensal |

Defina "item de melhoria" no registro e mantenha-o separado do trabalho comum do backlog e dos reparos corretivos. O relógio do acompanhamento começa quando a ação é combinada com um responsável e uma data. Uma verificação de efeito exige uma linha de base registrada antes da mudança e um indicador definido, e o resultado pode ser "sem efeito" ou "não dá para saber". A taxa de problemas repetidos depende de uma causa registrada, e a regra de correspondência é escrita no registro. Todas as medidas descrevem equipes e o sistema, e não indivíduos.

## Recomendações

### Torne a melhoria visível e atribuída

**1. Mantenha uma lista de melhorias visível por equipe.** Ponha os itens de melhoria onde a equipe já olha, como seu quadro ou backlog, e marque-os. Cada item tem um responsável, um problema declarado, um efeito esperado, um indicador e uma data. Uma lista que vive em outra ferramenta ou em um documento que ninguém abre vai decair. Mostre os itens mais antigos para que a lista não possa se esconder.

**2. Faça reflexões regulares e curtas.** Em um ritmo constante, a equipe pergunta o que vai bem, o que está atrapalhando e o que tentar a seguir. Mantenha-a curta e específica e termine com um pequeno número de ações com responsáveis. Se sua equipe escolher usar um formato com nome para isso, como uma retrospectiva, é escolha da equipe. O princípio é o hábito regular.

**3. Combine menos ações e termine-as.** Duas ou três ações concluídas ensinam mais que uma dúzia que não são. Confira a taxa de acompanhamento. Quando as ações escorregam repetidamente, pergunte por quê: responsabilidade pouco clara, falta de capacidade ou ações grandes demais. Divida as grandes em pequenos passos.

**4. Proteja a capacidade.** Reserve uma parcela da capacidade para a melhoria e planeje-a como qualquer outro trabalho (veja o tópico 2.5, Métricas de previsão e planejamento de entregas). Quando a equipe está sobrecarregada, reduza a entrada de trabalho novo em vez de cancelar a melhoria, já que a melhoria costuma ser o que reduz a sobrecarga. Acompanhe a parcela usada.

### Ache o que importa

**5. Procure a restrição.** Use os dados de fluxo para achar onde o trabalho espera e o que limita a vazão. As melhorias na restrição elevam a saída de todo o sistema. As melhorias em outros lugares podem apenas mover a pilha de trabalho. Aplique a mesma visão ao tratamento de incidentes, à aprovação de mudanças e ao atendimento de requisições.

**6. Use evidências para escolher.** Escolha melhorias a partir de dados e das pessoas mais próximas da dor: incidentes repetidos, longas esperas, retrabalho, queixas de usuários, listas de obstáculos. Ligue cada melhoria a um problema registrado. Isso liga o registro de melhorias à gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas).

**7. Procure causas e fatores contribuintes.** Para problemas recorrentes, pergunte por quê mais de uma vez e procure condições além de gatilhos. Cuidado com parar na primeira causa plausível ou numa pessoa. Questione as premissas: por que trabalhamos assim, e a regra ainda é necessária? É aí que o aprendizado de circuito duplo compensa.

### Tente em pequeno, depois confira

**8. Rode pequenos experimentos com uma linha de base.** Declare a mudança, o efeito esperado e o indicador. Registre a linha de base antes da mudança. Tente em pequena escala por um período curto e depois compare. O ciclo Planejar-Fazer-Verificar-Agir é um arcabouço simples. Quanto menor o tempo da ideia ao teste, mais rápido o aprendizado.

**9. Confira o efeito e registre-o com honestidade.** Depois de uma mudança, compare o indicador com a linha de base e com o que mais mudou. Registre se o efeito foi visto, não visto ou incerto. As equipes que nunca acham "sem efeito" provavelmente não estão conferindo com cuidado (veja o tópico 6.5, Realização de valor e resultados de negócio).

**10. Mantenha o que funciona e abandone o que não funciona.** Espalhe as melhorias que funcionam a outras equipes onde cabem e aposente as mudanças que acrescentaram custo sem benefício. Revisite mudanças mais antigas, já que as condições mudam. Os padrões devem evoluir conforme a equipe aprende.

### Mantenha vivo o hábito

**11. Torne seguro sugerir e parar.** As pessoas levantam ideias quando as anteriores foram ouvidas e levadas adiante. Ficam em silêncio quando as ideias somem ou trazem trabalho extra para quem propõe. Responda a toda ideia, mesmo que a resposta seja "agora não", com um motivo. Permita que as equipes parem as melhorias que não estão funcionando.

**12. Não transforme a melhoria em meta.** Não defina metas para o número de ideias, o número de ações encerradas nem as economias alegadas. Relate o acompanhamento, as verificações de efeito, a taxa de repetição e algumas histórias. Compare cada equipe com o próprio passado e compartilhe boas ideias entre equipes sem classificá-las.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de acompanhamento de ações | Combinar ações triviais; mover as datas; encerrar sem fazer | Rever o tamanho e o valor das ações; mudanças de data registradas; taxa de verificação de efeito |
| Idade do backlog de melhorias | Encerrar itens antigos como "não será feito" sem decisão; dividir itens para zerar a idade | Registrar os motivos do encerramento; acompanhar itens encerrados sem ação; rever os mais antigos |
| Taxa de verificação de efeito | Registrar uma verificação sem linha de base; conferir só os sucessos | Linha de base datada antes da mudança; incluir resultados nulos e negativos |
| Tempo da ideia ao teste | Chamar um plano de teste; testar variações triviais | Definir teste como uma mudança no trabalho real; olhar a importância das ideias testadas |
| Parcela de ideias da linha de frente | Gestores registrando ideias em nome da equipe; cotas obrigatórias de ideias | Ideias por autor registradas no nível da equipe; sem cotas; perguntar à equipe |
| Taxa de problemas repetidos | Registrar causas diferentes para o mesmo problema; encerrar o registro anterior sob outro tipo | Corresponder por causa com uma regra registrada; revisão por alguém de fora da equipe |
| Parcela de capacidade de melhoria | Marcar o trabalho comum como melhoria; agendar tempo que depois é usado para entrega | Amostrar os itens quanto ao tipo; comparar com o tempo realmente gasto |

Uma leitura saudável é uma lista curta, com ações que terminam, ideias que chegam ao teste em dias ou semanas, efeitos que são conferidos e às vezes decepcionam, problemas repetidos em queda e capacidade protegida que é usada.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Grandes programas de melhoria | Visíveis; podem atacar grandes problemas | Lentos; desligados do trabalho diário |
| Pequenos experimentos contínuos | Aprendizado rápido, baixo risco | Podem perder problemas estruturais |
| Equipe central de melhoria | Habilidade e consistência | Longe do trabalho; as ideias emperram |
| Melhoria de propriedade da equipe | Relevante e motivada | Qualidade variável; exige apoio |
| Esquemas de ideias com recompensas | Geram volume | Cotas e manipulação; baixa qualidade |
| Seleção baseada em evidências | Foca em problemas reais | Exige dados e tempo |
| Verificações formais de efeito | Aprendizado honesto | Esforço; podem parecer burocráticas se pesadas |
| Sem verificações | Rápido | Nenhum aprendizado sobre o que funciona |

A resposta pragmática é manter a melhoria perto das equipes, em pequenos experimentos com verificações de efeito leves, apoiada por algumas pessoas que ajudam com dados e método e por líderes que protegem a capacidade e escutam os resultados.

## Perguntas para discutir com sua equipe

**1. Que melhoria combinamos em nossa última revisão, e ela aconteceu?**
Olhem as ações. Para cada uma, perguntem se foi concluída, abandonada ou esquecida e por quê. O facilitador deve anotar os motivos. Combinem quantas ações a equipe realmente consegue terminar e cortem a próxima lista para esse número.

**2. Qual mudança que fizemos há pouco sabemos que ajudou, e como sabemos?**
Escolham uma mudança recente e procurem a linha de base e o resultado. Se não houver nenhum, discutam como conferir da próxima vez. Decidam um indicador simples para o próximo experimento.

**3. O que continua voltando por mais vezes que o corrijamos?**
Listem os problemas recorrentes. Para um deles, perguntem por que volta e que premissa está por trás da abordagem atual. Considerem se a correção trata um sintoma. Escolham um problema recorrente para um olhar mais profundo.

**4. Onde o trabalho espera mais, e qual é a restrição?**
Usem dados de fluxo. Perguntem se as melhorias em que a equipe trabalha tocam a restrição. Se não, discutam se devem mudar o foco.

**5. Quanto da nossa semana vai para melhoria, e o que a protege?**
Comparem o plano com a realidade. Discutam o que toma o tempo. Combinem uma regra para proteger uma pequena parcela e o que cortar se a equipe estiver sobrecarregada.

**6. O que aconteceu com a última ideia que alguém sugeriu, e como a pessoa ficou sabendo?**
Rastreiem uma ideia. Foi respondida, testada ou perdida? Discutam como garantir que cada ideia receba uma resposta e um motivo.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são a principal fonte de ideias de melhoria e as melhores juízas de se funcionam. Devem manter uma lista visível, terminar algumas ações a cada ciclo, conferir os efeitos e compartilhar o que aprendem. Precisam de capacidade protegida e de líderes que respondam.

### Equipes de serviço e operações

As equipes de operações veem incidentes repetidos, aprovações lentas e trabalho manual repetitivo todos os dias. Devem ligar as melhorias a problemas registrados, acompanhar os problemas repetidos e reservar tempo para correções que reduzam a própria carga. O feedback delas mostra se as melhorias chegam ao usuário.

### Liderança e governança

Os líderes criam as condições: capacidade protegida, segurança para sugerir e para parar e atenção aos resultados. Devem pedir acompanhamento e verificações de efeito, aceitar achados honestos de "sem efeito", evitar cotas e financiar as melhorias que exigem investimento. A governança deve olhar o registro de melhorias entre as equipes em busca de padrões que pedem ação estrutural.

### Clientes e usuários

Os usuários se beneficiam de serviços que continuam melhorando e são uma rica fonte de ideias. Devem ser consultados, informados do que mudou e convidados a conferir o efeito. As queixas repetidas sobre o mesmo problema são um sinal de que a melhoria não está chegando à causa.

## Na prática: um exemplo de gestão de serviços

O grupo de serviços digitais de uma agência tributária nacional opera um portal de declarações, um sistema de pagamentos e uma plataforma de central de contato com oito equipes. Cada equipe mantém uma lista de melhorias, e o grupo relata o número de melhorias concluídas a cada trimestre. Os números abaixo são ilustrativos.

A chefe de melhoria de serviços nota que o número relatado sobe enquanto os mesmos pontos de dor persistem. Ela revê as listas. No grupo, 212 itens de melhoria estão em aberto, com uma idade mediana de 7 meses e o mais antigo com 26 meses. Das ações combinadas nas revisões do último trimestre, 38% foram concluídas na data. Das 64 melhorias concluídas no ano passado, só 9 tinham uma linha de base e um resultado registrados, uma taxa de verificação de efeito de 14%, e 3 dessas 9 mostraram nenhum efeito. Os problemas repetidos são comuns: de 25 incidentes ligados a melhorias destinadas a remover sua causa, 11 se repetiram em seis meses, uma taxa de repetição de 44%. O trabalho de melhoria toma cerca de 4% da capacidade.

O grupo combina quatro mudanças com as equipes. Cada equipe poda sua lista aos itens que pode tratar nos próximos dois meses e declara por que está estacionando ou encerrando o resto. As equipes combinam não mais que três ações por vez, com responsáveis nomeados. Para cada melhoria, uma linha de base e um indicador são registrados antes da mudança, e o resultado é registrado depois, inclusive "sem efeito". Uma revisão trimestral olha os problemas recorrentes entre as equipes e escolhe dois para uma análise de causa mais profunda, com as equipes da central de contato e de pagamentos investigando juntas uma causa compartilhada. Cada equipe reserva 10% da capacidade para melhoria, protegida por uma regra de que o cancelamento precisa da concordância do líder da equipe e de um registro. O relatório aos líderes muda do número de melhorias concluídas para o acompanhamento, as verificações de efeito e os problemas repetidos.

Após dois trimestres, os itens em aberto caem para 74, com uma idade mediana de 2 meses. O acompanhamento sobe para 81%, a taxa de verificação de efeito para 70%, com 9 das 36 melhorias conferidas mostrando nenhum efeito e sendo abandonadas. A taxa de problemas repetidos cai para 20%, e o tempo da ideia ao teste tem uma mediana de 9 dias. O vice-diretor pede uma meta de 100 melhorias concluídas por trimestre. A chefe de melhoria de serviços explica que a contagem foi a razão de os números anteriores enganarem e propõe acompanhar o acompanhamento, o efeito e a taxa de repetição. A decisão é registrada, e o pedido de uma equipe para rodar um experimento de quatro semanas em seu processo de aprovação é aprovado.

## Ágil, IA, automação e análise

### Ágil

Mantenha a melhoria nas mãos das pessoas que fazem o trabalho e reveja as ações em um ritmo regular. O cuidado é que uma meta de número de melhorias estimula as triviais.

### IA

A IA pode sugerir melhorias a partir de tickets e incidentes. Acompanhe a parcela das sugestões que uma equipe tentou e o resultado da verificação de efeito. O cuidado é que um backlog de ideias gerado por IA pode sobrecarregar a equipe; por isso limite o trabalho em andamento.

### Automação

Automatize os lembretes e o acompanhamento das ações de melhoria e meça a taxa de verificação de efeito. O cuidado é que a automação que cobra sem responsabilidade combinada é ignorada.

### Análise

Relate a taxa de verificação de efeito e a taxa de problemas repetidos com contagens. A decisão informada é quais melhorias funcionaram. O cuidado é que os efeitos são difíceis de atribuir; por isso descreva a incerteza.

## Olhar setorial

**Startup.** A melhoria acontece o tempo todo e de modo informal. Mantenha uma lista curta, escreva os efeitos esperados e confira-os e proteja uma pequena fatia de tempo. Evite processos pesados e fique atento a que a melhoria seja inteiramente expulsa pelo crescimento.

**Pequena empresa.** Uma ou duas pessoas fazem tudo, e a melhoria compete com o combate a incêndios. Escolha um problema recorrente por trimestre, corrija sua causa e confira o efeito. Pergunte aos usuários o que os incomoda e aja sobre uma coisa.

**Grande empresa.** A escala torna a melhoria desigual e as ideias difíceis de compartilhar. Ofereça um formato comum de registro e um coaching leve, deixe as equipes serem donas de suas listas e use um fórum entre equipes para espalhar o que funciona e atacar restrições compartilhadas. Evite cotas centrais.

**Governo e setor público.** A melhoria pode ser limitada por compras, legislação e cadeias de aprovação, e é escrutinada publicamente. Documente os experimentos e seus resultados, envolva os usuários na escolha e na verificação das melhorias e relate com honestidade os efeitos, incluindo os que não funcionaram. Procure melhorias que removam ônus dos cidadãos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são a capacidade protegida, que é o custo principal, o esforço para registrar linhas de base e resultados e algum coaching ou facilitação. As ferramentas podem ser tão simples quanto o quadro já existente da equipe.

Os retornos são menos problemas repetidos, menos trabalho repetitivo, esperas mais curtas e melhor moral nas equipes que veem suas ideias virarem mudança. Construa o argumento com os seus próprios dados: o custo dos incidentes recorrentes e a parcela removida pelas melhorias, o tempo economizado por melhorias com efeitos conferidos e o custo das melhorias que foram feitas e não funcionaram, cuja repetição a verificação agora evita. Evite citar retornos publicados de programas de melhoria a menos que possa rastrear sua fonte e método. Conte também o custo de oportunidade da capacidade (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contar melhorias concluídas.** As equipes combinam mudanças triviais. Meça o acompanhamento e o efeito.
- **Cotas de ideias.** Geram volume e ruído. Responda às ideias que chegam.
- **Sem linhas de base.** Ninguém sabe se algo ajudou. Registre antes e depois.
- **Só os sucessos registrados.** O aprendizado com a falha se perde. Registre os resultados nulos.
- **Listas longas sem poda.** A lista perde credibilidade. Pode-a ao que a equipe fará.
- **Melhoria em tempo livre.** Não há nenhum. Proteja a capacidade.
- **Corrigir sintomas.** O problema volta. Pergunte por quê mais de uma vez e questione as premissas.
- **Melhoria por uma equipe distante.** As ideias emperram. Mantenha-a com as pessoas que fazem o trabalho.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Hábito e responsabilidade | A melhoria é ocasional | A reflexão acontece; as ações muitas vezes se perdem | Lista visível da equipe com responsáveis; pequeno número de ações terminadas | Acompanhamento e tempo da ideia ao teste geridos; capacidade protegida | A melhoria é rotina e compartilhada entre equipes, fornecedores e usuários |
| Evidência e efeito | Opiniões | Algumas medidas após mudanças | Linha de base e resultado registrados para cada melhoria | Verificações de efeito incluem resultados nulos; problemas repetidos acompanhados por causa | O aprendizado no nível do portfólio guia onde melhorar a seguir, com parceiros |
| Profundidade | Correções de sintomas | Alguma análise de causa | Análise de causa para problemas recorrentes | Restrições identificadas a partir de dados de fluxo; premissas questionadas | Melhorias sistêmicas em todo o fluxo de valor, com governança compartilhada |

## Lista de verificação

- [ ] Cada equipe tem uma lista de melhorias visível, com responsáveis, efeitos esperados e datas.
- [ ] A reflexão regular e curta termina com um pequeno número de ações atribuídas.
- [ ] O acompanhamento das ações e a idade dos itens mais antigos são revistos mensalmente.
- [ ] A capacidade para melhoria é planejada, protegida e acompanhada.
- [ ] As melhorias estão ligadas a problemas registrados ou a evidências.
- [ ] Uma linha de base e um indicador são registrados antes de cada mudança.
- [ ] Os efeitos são conferidos e registrados, inclusive o sem efeito.
- [ ] Os problemas repetidos são acompanhados por causa depois das melhorias.
- [ ] Toda ideia recebe uma resposta com um motivo.
- [ ] Não há cotas nem metas para ideias, ações ou economias.

## Prompts de IA

**Escolha melhorias a partir de evidências.**

```text
Here are our recurring problems and obstacles with rough counts and impact:
[paste]. Here is our flow data on where work waits: [paste]. Suggest which two
or three improvements are most likely to matter, why, and what evidence would
confirm or contradict that. Recommend a small experiment for each, with a
baseline and an indicator. Do not invent figures. List your assumptions.
```

**Projete um pequeno experimento.**

```text
We want to try [change] to address [problem] in [team and process]. Design a
small experiment: the expected effect, the baseline to record now, the
indicator and how to measure it, the trial period, how to tell whether other
changes confused the result, and what we will do if there is no effect. Keep it
light. List your assumptions and risks.
```

**Revise uma lista de melhorias.**

```text
Here is our improvement list with age, owner, and expected effect for each item:
[paste]. Identify items that are too vague, too large, or stale, suggest a
shorter list the team could finish in two months, and propose a note to explain
the items we are parking and why. Do not judge individuals. List your
assumptions.
```

**Analise um problema recorrente.**

```text
Problem: [describe]. Past fixes and when it recurred: [paste]. Suggest
contributing factors beyond the first plausible cause, assumptions to question
(double-loop learning), and a few ways to test each hypothesis cheaply. Do not
assume a single root cause. List your assumptions and questions for the team.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de melhoria.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de melhoria mede o acompanhamento e o efeito, com seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Mantenha uma lista de melhorias visível por equipe, com algumas ações atribuídas por vez, e termine-as.
- Registre uma linha de base antes de cada mudança, confira o efeito depois e registre os resultados nulos.
- Acompanhe o acompanhamento das ações, as verificações de efeito, os problemas repetidos e a idade dos itens mais antigos.
- Melhore primeiro a restrição e procure as causas e as premissas por trás delas.
- Proteja a capacidade para melhoria dentro de um ritmo sustentável.
- Não defina cotas para ideias, ações ou economias.

## Referências e leituras complementares

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Processo de melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Manufatura enxuta](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Aprendizado de circuito duplo](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
