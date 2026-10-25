# Métricas de colaboração e transferências de trabalho

**O trabalho desacelera e a qualidade cai onde quer que ele mude de mãos; por isso meça as transferências, a espera entre elas e a dependência de pessoas isoladas, e use os números para reunir as pessoas certas, e não para contar quem fala com quem.**

## Visão geral e motivação

Os princípios do Manifesto Ágil dizem que pessoas de negócio e desenvolvedores devem trabalhar juntos diariamente ao longo de todo o projeto. A observação subjacente é antiga e robusta: a maior parte do atraso em uma organização de serviços não vem de pessoas trabalhando devagar. Vem do trabalho esperando entre pessoas. Uma requisição vai da central de serviços para uma equipe de segundo nível, daí para uma equipe de aplicação e daí para um administrador de banco de dados, e em cada etapa entra numa fila, perde contexto e corre o risco de ser devolvida. As pessoas envolvidas podem ser todas rápidas. O sistema é lento.

A gestão de serviços de TI (ITSM), como codificada pelo ITIL, organiza há muito tempo o suporte em níveis e equipes, com a escalação como o mecanismo para levar um problema a quem pode resolvê-lo. Essa estrutura tem benefícios: especialização, responsabilidade clara e acesso controlado. Cria também transferências, e as transferências têm custo. A prática ágil e de DevOps responde construindo equipes multifuncionais que levam mais do trabalho de ponta a ponta e estimulando a colaboração em tempo real. As duas tradições chegam a conclusões parecidas: menos transferências, esperas mais curtas entre elas e pessoas que podem resolver o problema trabalhando nele juntas.

Várias ideias ajudam na medição.

- **Transferências e filas.** Cada vez que o trabalho passa de uma equipe a outra, em geral espera numa fila. O tempo gasto esperando costuma ser muito maior que o tempo gasto trabalhando. É por isso que a eficiência de fluxo, apresentada antes, costuma ser baixa (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo). Um [gargalo](https://en.wikipedia.org/wiki/Bottleneck_(production)) é um ponto de capacidade limitada em um processo e determina a vazão do todo.
- **A estrutura molda a comunicação.** A [lei de Conway](https://en.wikipedia.org/wiki/Conway%27s_law) afirma que as organizações projetam sistemas que espelham suas próprias estruturas de comunicação. O inverso também é prático: se você quer um sistema com menos dependências, arrume as equipes para reduzir as dependências entre elas. As fronteiras entre equipes criam transferências, e as transferências moldam a arquitetura.
- **Dependências.** Uma [dependência](https://en.wikipedia.org/wiki/Dependency_(project_management)) é uma relação em que uma parte do trabalho não pode prosseguir até que outra termine. As dependências entre equipes são uma grande fonte de atraso e podem ser mapeadas, contadas e reduzidas.
- **Os custos de coordenação crescem com as pessoas.** A [lei de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), dos ensaios de Frederick Brooks sobre projetos de software, observa que acrescentar pessoas a um projeto atrasado pode atrasá-lo mais, em parte pela sobrecarga adicional de comunicação. Mais pessoas em uma conversa não é automaticamente melhor.
- **Dependência de indivíduos.** O [fator ônibus (bus factor)](https://en.wikipedia.org/wiki/Bus_factor) é o número de pessoas que precisariam estar indisponíveis para parar um projeto, usado em geral para apontar o risco quando o conhecimento está em uma só cabeça. É uma propriedade da distribuição do conhecimento, e não uma avaliação de qualquer pessoa.

As medidas de colaboração têm um lado sombrio. Contar mensagens, reuniões ou ligações de rede como medida de colaboração é fácil e tentador e escorrega depressa para o monitoramento das comunicações das pessoas. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica ao grupo e à privacidade: quando a "colaboração" vira meta, as pessoas produzem atividade visível, e quando vira vigilância, param de falar abertamente (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). As medidas aqui olham, portanto, os itens de trabalho, as transferências e as dependências e os padrões no nível da equipe. Não leem mensagens nem classificam indivíduos.

Este tópico se liga às medidas de fluxo da Parte 2, às medidas de incidentes e requisições da Parte 3 e às transferências de fornecedores da parte anterior (veja o tópico 8.4, Métricas de fornecedores e contratos).

## Princípios-chave

- **Meça o trabalho, e não as conversas.** Transferências, esperas e dependências são propriedades de itens de trabalho e equipes.
- **Menos transferências valem mais que transferências mais rápidas.** A melhor transferência é a que não acontece.
- **Reúna as pessoas.** A colaboração em tempo real muitas vezes remove uma cadeia inteira de espera.
- **Torne visíveis as dependências e reduza-as.** Mapeie-as, conte-as e mude as fronteiras das equipes ou a arquitetura onde mais doem.
- **Espalhe o conhecimento deliberadamente.** Os pontos únicos de conhecimento são riscos, e compartilhar é uma atividade de projeto.
- **Proteja o foco.** A colaboração que enche toda hora de reuniões destrói o tempo para fazer o trabalho.
- **Envolva as partes interessadas continuamente.** Perguntas respondidas em horas servem melhor que respostas colhidas em reuniões semanais.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Contagem de transferências | Número de vezes que um item de trabalho muda de equipe responsável antes de ser concluído | mediana e 85º percentil das transferências entre equipes por item concluído, por tipo de item | transferências por item | Histórico de atribuições do ITSM ou do rastreador, agregado por equipe | Gestão de incidentes; gestão de requisições de serviço; habilitação de mudanças | Equipes multifuncionais levando o trabalho de ponta a ponta | Mensal |
| Parcela de espera em transferências | Proporção do tempo decorrido de um item gasta esperando após uma transferência antes de o trabalho recomeçar | tempo entre a transferência e a primeira ação da equipe receptora / tempo total decorrido, mediana entre os itens | porcentagem | Registros de data e hora de atribuições e atividades | Gestão de incidentes; gestão de requisições de serviço | Eficiência de fluxo; tempo em fila | Mensal |
| Taxa de reatribuição | Proporção dos itens passados entre equipes mais de duas vezes ou devolvidos a uma equipe anterior | itens reatribuídos mais de duas vezes ou devolvidos / itens concluídos | porcentagem | Histórico de atribuições | Gestão de incidentes; gestão de problemas | Retrabalho e trabalho que quica | Mensal |
| Atraso por dependência | Tempo que os itens passam bloqueados esperando outra equipe | mediana e 85º percentil dos dias em um estado de bloqueio por outra equipe, com a dependência nomeada | dias | Estado de bloqueio e campo de dependência do rastreador | Habilitação de mudanças; gestão de releases e implantação | Idade do item de trabalho bloqueado | Mensal |
| Taxa de resolução colaborativa | Proporção dos incidentes resolvidos por pessoas de várias equipes trabalhando juntas em tempo real, sem escalação sequencial | incidentes com colaboração em tempo real registrada (por exemplo um canal compartilhado ou uma chamada) que foram resolvidos sem nova transferência / incidentes de prioridade elegível | porcentagem | Registros de incidentes com marcação de colaboração | Gestão de incidentes; gestão de incidentes graves | Enxame (swarming) sobre os problemas | Mensal |
| Cobertura de conhecimento | Proporção dos componentes críticos com pelo menos um número declarado de membros da equipe capazes de operá-los e alterá-los | componentes críticos com pelo menos o número-alvo de pessoas capazes de operar e alterar / componentes críticos | porcentagem | Mapa de habilidades e responsabilidades mantido pela equipe | Gestão do conhecimento; gestão da continuidade de serviço | Propriedade compartilhada e propriedade coletiva do código | Trimestral |
| Tempo de resposta das partes interessadas | Tempo desde uma pergunta da equipe a uma parte interessada até uma resposta utilizável | mediana e 85º percentil das horas da pergunta registrada à resposta registrada | horas | Registro de perguntas ou campo do rastreador para perguntas em aberto | Gestão de níveis de serviço; gestão do relacionamento com o negócio | Envolvimento contínuo das partes interessadas | Mensal |

Agregue no nível da equipe, da fila ou do serviço e nunca relate por indivíduo. A contagem de transferências exclui atribuições automáticas que não mudam a equipe responsável. A parcela de espera começa quando o item é atribuído à equipe receptora e termina em sua primeira ação registrada. A cobertura de conhecimento usa o julgamento da própria equipe sobre quem pode operar um componente, revisto com a equipe, e nunca classifica indivíduos. Os dados de colaboração vêm de marcações e registros dos itens, e não da leitura de mensagens.

## Recomendações

### Mapeie as transferências

**1. Desenhe o caminho de um item típico.** Escolha um tipo comum de requisição ou incidente e trace seu caminho do primeiro contato à resolução: cada equipe, cada fila, cada espera. Use o histórico do rastreador para exemplos reais, e não o diagrama oficial do processo. O mapa mostra onde o trabalho espera e onde quica. Compartilhe-o com as equipes envolvidas e peça que identifiquem o desperdício que veem.

**2. Meça transferências e esperas a partir do histórico dos itens de trabalho.** Use os registros de data e hora de atribuição e de atividade para calcular a contagem de transferências, a parcela de espera e a taxa de reatribuição para cada tipo de item. Olhe a distribuição: a maioria dos itens pode passar uma vez, enquanto uma longa cauda quica muitas vezes. A cauda é onde estão os maiores atrasos e a maior frustração.

**3. Leia os dados com as pessoas que fazem o trabalho.** Uma taxa alta de reatribuição pode refletir responsabilidade pouco clara, informação ausente ou triagem legítima. Pergunte às equipes antes de concluir. Elas sabem por que os itens quicam e o que pararia isso.

### Reduza transferências e esperas

**4. Leve a capacidade até o trabalho.** Onde muitos itens vão para uma segunda equipe por uma ação simples, pergunte se a primeira equipe poderia receber o conhecimento, o acesso ou a automação para fazê-la. O autoatendimento e os runbooks podem remover transferências inteiras (veja o tópico 3.7, Métricas de autoatendimento e automação). Cuide para que mover o trabalho não sobrecarregue simplesmente a primeira equipe.

**5. Use a colaboração no lugar da escalação sequencial.** Para incidentes complexos ou urgentes, reúna as pessoas relevantes em tempo real, com uma pessoa coordenando, em vez de passar o ticket pelos níveis. Essa prática, muitas vezes chamada de swarming (enxame), remove as esperas e a perda de contexto que a escalação em níveis cria. Acompanhe a taxa de resolução colaborativa e veja se os resultados e a satisfação melhoram (veja o tópico 3.4, Métricas de incidentes graves).

**6. Esclareça a responsabilidade nas fronteiras.** Para cada serviço e componente, diga quem é o dono, como alcançá-lo e o que ele precisa numa transferência. Um breve modelo de informações exigidas, combinado com a equipe receptora, reduz as devoluções por detalhes ausentes. Reveja os casos de reatribuição para achar lacunas de responsabilidade.

**7. Reduza as dependências onde mais doem.** Mapeie as dependências entre equipes, conte quantas vezes cada uma causa atraso e ataque as piores. As opções incluem mudar a arquitetura, dar a uma equipe a capacidade que ela vive esperando ou reorganizar as equipes em torno de serviços. As [equipes multifuncionais](https://en.wikipedia.org/wiki/Cross-functional_team), que contêm as habilidades necessárias para entregar um serviço do início ao fim, minimizam as dependências e trazem a colaboração contínua para a estrutura. A lei de Conway sugere que estrutura e projeto sejam mudados juntos.

### Espalhe conhecimento e envolvimento

**8. Torne visível a cobertura de conhecimento e melhore-a.** Mantenha um mapa simples dos componentes críticos e das pessoas capazes de operar e alterar cada um. Procure os componentes conhecidos por uma só pessoa e planeje programação em par, documentação e rodízio para espalhá-lo. Trate o resultado como um risco ao sistema. O objetivo é resiliência e um ritmo sustentável para as pessoas que mais sabem, já que quem é o único especialista não consegue tirar licença.

**9. Mantenha as partes interessadas no circuito continuamente.** Combinem como as partes interessadas serão alcançadas com perguntas e com que rapidez as respostas devem vir. Uma equipe que espera uma semana por uma decisão sobre um detalhe está esperando a parte interessada, e o custo é real. Registre perguntas e respostas, meça o tempo de resposta e use-o em conversas com as partes interessadas sobre seu envolvimento.

**10. Proteja o tempo para o trabalho focado.** A colaboração deve ter propósito. Reveja as reuniões que enchem o calendário e pergunte, para cada uma, qual decisão ela apoia. Reduza o número de pessoas em conversas que não precisam delas, de acordo com a lei de Brooks. Pareie isso com as medidas de foco do tópico anterior sobre saúde da equipe (veja o tópico 9.1, Saúde da equipe e experiência do desenvolvedor).

### Mantenha honesto

**11. Não meça o volume de comunicação.** Contar mensagens, reuniões ou ligações de rede diz pouco sobre se as pessoas estão trabalhando bem juntas e convida ao monitoramento de indivíduos. Se sua equipe escolher usar a análise de redes sociais para entender como a informação flui, faça-o com consentimento, no nível do grupo e para o aprendizado da própria equipe, e nunca para avaliar indivíduos.

**12. Reveja as medidas de transferência com equipes e fornecedores.** Compartilhe os padrões entre as equipes e os fornecedores envolvidos e combinem uma ou duas melhorias conjuntas. Acompanhe se as contagens de transferências e as esperas caem. Nas fronteiras com fornecedores, inclua as medidas nas revisões conjuntas (veja o tópico 8.4, Métricas de fornecedores e contratos).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Contagem de transferências | Manter os itens atribuídos a uma equipe enquanto outras fazem o trabalho; reatribuir a uma fila compartilhada para evitar a contagem | Conferir a atividade real por equipe; contar transferências por atividade, e não só por atribuição |
| Parcela de espera em transferências | Registrar uma primeira ação que é só um reconhecimento; atribuir tarde à equipe certa | Definir "primeira ação" como uma etapa substantiva; comparar com a satisfação e o tempo de resolução |
| Taxa de reatribuição | Recusar-se a reatribuir mesmo quando errado; encerrar e reabrir itens sob outra equipe | Qualidade da resolução e taxa de reabertura; amostrar itens que quicaram |
| Atraso por dependência | Não registrar o estado de bloqueio; nomear a dependência errada | Comparar com o tempo de ciclo e a idade dos itens; rever o campo de dependência com as equipes |
| Taxa de resolução colaborativa | Marcar todo incidente como colaborativo; criar canais compartilhados sem trabalho real | Conferir que a chamada ou o canal incluiu as pessoas que resolveram; tempo de resolução e resultados |
| Cobertura de conhecimento | Listar pessoas que poderiam em teoria fazer o trabalho; inflar o mapa | Evidência de programação em par ou de simulacros; perguntar quem de fato fez a última mudança |
| Tempo de resposta das partes interessadas | Registrar as perguntas tarde; marcar uma resposta como recebida quando não é utilizável | A parte interessada confirma que a resposta é utilizável; amostrar perguntas |

Uma leitura saudável é menos transferências para os itens comuns, esperas mais curtas nas fronteiras que restam, menos itens que quicam, dependências que encolhem, mais incidentes resolvidos por pessoas trabalhando juntas, componentes críticos conhecidos por várias pessoas e partes interessadas que respondem em horas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Suporte em níveis com escalação | Especialização, controle de acesso | Transferências, espera, perda de contexto |
| Equipes multifuncionais | Menos transferências, responsabilidade compartilhada | Exigem habilidades amplas; podem duplicar especialistas |
| Resolução colaborativa | Mais rápida, melhor aprendizado | Puxa várias pessoas ao mesmo tempo; exige coordenação |
| Escalação sequencial | Uso eficiente dos especialistas | Mais lenta para problemas complexos |
| Equipes centralizadas de especialistas | Profundidade de conhecimento, padrões consistentes | Gargalos, filas |
| Especialistas embutidos | Acesso rápido | Isolamento; padrões desiguais |
| Cultura pesada de reuniões | Consciência compartilhada | Consome o foco; atrasa o trabalho |
| Comunicação escrita assíncrona | Preserva o foco; registra decisões | Mais lenta para assuntos urgentes ou ambíguos |

A resposta pragmática é manter especialistas onde a profundidade importa, reunir as pessoas em tempo real para problemas complexos ou urgentes, reduzir as transferências por meio de capacidade e responsabilidade clara e equilibrar as reuniões com foco protegido.

## Perguntas para discutir com sua equipe

**1. Rastreiem o último incidente ou requisição que quicou entre equipes. Onde esperou, e por quê?**
Usem o histórico do item. Marquem cada transferência e espera. O facilitador deve procurar informação ausente, responsabilidade pouco clara e filas que ninguém vigia. Combinem uma mudança que teria parado o quique.

**2. Por qual equipe mais esperamos, e o que ela precisa de nós para ser mais rápida?**
Listem as dependências e os atrasos que causam. Convidem a outra equipe para a conversa ou preparem perguntas para ela. Combinem uma mudança no modelo de transferência ou no acordo de trabalho.

**3. O que só um ou dois de nós sabemos fazer, e o que acontece quando estão ausentes?**
Nomeiem os componentes ou tarefas. Perguntem que plano espalharia o conhecimento: programação em par, documentação, rodízio. O facilitador deve cuidar de tratar isso como um risco ao sistema e uma questão de carga de trabalho dos especialistas.

**4. Quando resolver um problema juntos em tempo real funcionou melhor que passá-lo adiante?**
Lembrem um exemplo. O que fez funcionar: as pessoas certas, um coordenador, uma visão compartilhada? Discutam quando usar essa abordagem e como viabilizá-la, como um canal permanente e regras sobre quem entra.

**5. Quanto esperamos por respostas de nossas partes interessadas, e quanto isso custa?**
Olhem as perguntas em aberto e suas idades. Discutam o que atrasa as respostas: disponibilidade, perguntas pouco claras ou autoridade pouco clara. Combinem uma expectativa com as partes interessadas e um modo de acompanhá-la.

**6. Quais das nossas reuniões poderiam ser substituídas por uma nota escrita ou uma decisão?**
Listem as reuniões regulares e, para cada uma, perguntem qual decisão ela apoia e quem precisa estar presente. Cancelem ou encurtem uma. Combinem proteger um bloco de tempo sem reuniões.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega guardam muitas das dependências e sentem a espera. Devem mapear suas dependências, pedir as capacidades que vivem esperando, compartilhar conhecimento para evitar pontos únicos e manter as partes interessadas por perto. Uma composição multifuncional costuma remover os maiores atrasos.

### Equipes de serviço e operações

As equipes de operações e suporte estão no centro das transferências: recebem, encaminham e resolvem. Devem manter informações claras de responsabilidade, usar a colaboração em tempo real para problemas difíceis e registrar as transferências com exatidão. Sabem quais fronteiras causam mais dor e podem dizer que informação evitaria as devoluções.

### Liderança e governança

Os líderes moldam a estrutura que cria as transferências. Devem olhar os dados de transferências e dependências ao projetar equipes e financiamento, apoiar as equipes multifuncionais onde ajudam e evitar medidas de volume de comunicação. A governança deve tratar atrasos repetidos em uma fronteira como uma questão estrutural a corrigir.

### Clientes e usuários

Os usuários sentem as transferências como serem empurrados de um lado para outro, repetir-se e esperar. Devem ser informados de quem é dono do problema e mantidos a par. A experiência deles de serem passados adiante é uma medida direta de quão bem a colaboração funciona, e o feedback deles deve ser lido ao lado dos números (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

O grupo de TI de uma varejista nacional opera uma central de serviços, uma equipe de infraestrutura, uma equipe de plataforma de aplicações e várias equipes de produto. Os usuários relatam que as requisições sobre o sistema de ponto de venda levam tempo demais. Os números abaixo são ilustrativos.

O gerente de serviços rastreia 60 requisições recentes. A requisição mediana passa por 3 equipes, e o 85º percentil por 6. No caso mediano, 71% do tempo decorrido é gasto esperando após uma transferência antes que a equipe receptora aja. 22% das requisições são reatribuídas mais de duas vezes, muitas vezes entre as equipes de infraestrutura e de plataforma, que acreditam, cada uma, que a outra é dona do problema. O tempo bloqueado esperando outra equipe tem uma mediana de 3 dias para as requisições que envolvem certificados e 8 dias no 85º percentil. O conhecimento da plataforma sobre a renovação de certificados está com um engenheiro, e outros dois componentes críticos são conhecidos por apenas uma pessoa cada. As partes interessadas das operações de lojas levam uma mediana de 26 horas para responder às perguntas da equipe de entrega.

O grupo combina quatro mudanças com as equipes. Uma breve tabela de responsabilidades diz qual equipe é dona de cada componente do serviço de ponto de venda e que informações uma transferência deve conter. A central de serviços recebe acesso a runbooks e automação para as renovações de certificados, o que remove uma transferência comum. Para os incidentes prioritários, o grupo cria um canal permanente e uma regra de que o coordenador do incidente traz as pessoas relevantes de imediato, em vez de escalar por níveis. A equipe de plataforma coloca uma segunda e uma terceira pessoa em par no processo de certificados e planeja um par semelhante para os outros dois componentes, com tempo protegido no plano. A equipe de entrega e as operações de lojas combinam uma resposta no mesmo dia para as perguntas bloqueantes, acompanhadas em um registro de perguntas.

Três meses depois, a requisição mediana passa por 2 equipes, a parcela de espera cai para 38% e a taxa de reatribuição para 9%. As requisições ligadas a certificados têm uma mediana de tempo bloqueado de menos de um dia. A cobertura de conhecimento dos componentes críticos sobe de 52% para 81%. O tempo mediano de resposta das operações de lojas cai para 7 horas. Pedem ao chefe de TI uma medida de quanto as equipes se comunicam. O gerente de serviços explica que o volume de mensagens diz pouco sobre se o trabalho flui e que acompanhá-lo poderia minar a confiança e oferece em seu lugar as medidas de transferência e espera. A decisão é registrada, e a tabela de responsabilidades é acrescentada à descrição do serviço.

## Ágil, IA, automação e análise

### Ágil

Reúna cedo as pessoas certas e reveja as transferências regularmente com as partes interessadas. O cuidado é que contar reuniões ou mensagens mede atividade, e não colaboração.

### IA

Os agentes e assistentes de IA acrescentam novas transferências entre pessoas e software. Meça as transferências entre IA e humanos, incluindo a parcela que volta para correção. O cuidado é que uma transferência a uma IA que não consegue terminar cria um ciclo oculto.

### Automação

Capture as reatribuições e esperas do rastreador automaticamente e meça o roteamento automatizado pelos erros de rota. O cuidado é que metadados de comunicação sobre indivíduos são vigilância; por isso mantenha a análise no nível da equipe.

### Análise

Mostre as contagens de transferências e a parcela de espera por fluxo de valor com contagens. A decisão informada é qual transferência remover ou redesenhar. O cuidado é que contar transferências sem sua causa leva a fundir equipes pela razão errada.

## Olhar setorial

**Startup.** As pequenas equipes colaboram naturalmente, e as transferências aparecem quando surgem os especialistas. Mantenha as equipes multifuncionais pelo maior tempo possível, documente a responsabilidade de forma leve e fique atento ao conhecimento guardado por uma só pessoa. Não importe cedo demais o suporte em níveis.

**Pequena empresa.** Uma ou duas pessoas podem cobrir tudo, e o maior risco é a dependência delas. Compartilhe o conhecimento com runbooks simples e cobertura de ausências. As transferências a fornecedores são a principal fronteira; por isso mantenha contatos e caminhos de escalação claros.

**Grande empresa.** A escala cria muitas equipes, camadas e fornecedores, e as transferências se multiplicam. Mapeie os caminhos mais comuns dos itens, projete as fronteiras das equipes em torno de serviços e use papéis de coordenação para incidentes entre equipes. Compartilhe os dados de transferências entre as equipes para que as fronteiras recebam atenção conjunta.

**Governo e setor público.** A responsabilidade costuma ser dividida entre órgãos, contratados e fronteiras legais, e as transferências envolvem compras e aprovação formal. Torne explícita a tabela de responsabilidades, use revisões conjuntas com os contratados e canais compartilhados para os incidentes que cruzam fronteiras (veja o tópico 8.4, Métricas de fornecedores e contratos).

## Business case: motivações, ROI e TCO

Os custos são o esforço para extrair e analisar o histórico de atribuições, o tempo das equipes para traçar caminhos e combinar responsabilidades, o custo do treinamento cruzado e qualquer ferramenta para colaboração em tempo real. Reestruturar equipes é uma decisão maior, com custos próprios.

Os retornos são tempos mais curtos para resolver e entregar, menos retrabalho com os itens que quicam, menor risco de pontos únicos de conhecimento e um ambiente de trabalho mais calmo. Construa o argumento com os seus próprios dados: a parcela do tempo decorrido gasta esperando, o número de itens que quicam, o custo dos atrasos na pior fronteira e o efeito das ausências de pessoas-chave em incidentes passados. Evite citar cifras publicadas sobre o custo das transferências a menos que possa rastrear a fonte e o contexto. Conte o custo das mudanças e compare-o com o atraso removido (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contar mensagens ou reuniões.** Premia o ruído e convida à vigilância. Meça o fluxo do trabalho.
- **Otimizar a velocidade de cada transferência.** O objetivo é ter menos transferências. Remova-as onde puder.
- **Culpar a equipe receptora pelas esperas.** A causa costuma ser a fila e a estrutura. Olhe o sistema.
- **Escalar por padrão.** Os níveis sequenciais acrescentam espera. Reúna as pessoas para problemas complexos.
- **Responsabilidade pouco clara.** Os itens quicam. Publique uma tabela de responsabilidades e mantenha-a atual.
- **Especialistas heróis.** Pontos únicos de conhecimento são um risco e um fardo. Espalhe o conhecimento deliberadamente.
- **Reuniões como colaboração.** Podem expulsar o trabalho. Reveja-as contra decisões.
- **Tratar a cobertura de conhecimento como uma avaliação individual.** Vira uma classificação. Mantenha-a uma medida do sistema.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Visibilidade das transferências | Anedotas | Caminhos desenhados para alguns serviços | Contagem de transferências, parcela de espera e reatribuições medidas a partir do histórico | Medidas revistas com as equipes e ligadas a resultados | Visão compartilhada entre equipes e fornecedores; fronteiras redesenhadas a partir de dados |
| Reduzir transferências | Escalar por padrão | Alguns runbooks e modelos | Tabelas de responsabilidades; capacidade levada à primeira equipe; colaboração para problemas difíceis | Dependências mapeadas e reduzidas; resolução colaborativa acompanhada | Equipes organizadas em torno de serviços com dependências mínimas em toda a organização |
| Conhecimento e partes interessadas | Especialistas carregam tudo | Compartilhamento informal | Cobertura de conhecimento mapeada; perguntas das partes interessadas registradas | Cobertura e tempos de resposta geridos; programação em par planejada | Conhecimento e decisões fluem livremente entre equipes, fornecedores e partes interessadas |

## Lista de verificação

- [ ] O caminho de um item típico foi traçado a partir do histórico real do rastreador.
- [ ] A contagem de transferências, a parcela de espera e a taxa de reatribuição são medidas por tipo de item.
- [ ] A responsabilidade por cada serviço e componente está publicada e atual.
- [ ] Um modelo de transferência declara as informações de que a equipe receptora precisa.
- [ ] Os incidentes complexos ou urgentes usam colaboração em tempo real com um coordenador.
- [ ] As dependências entre equipes estão mapeadas, e as piores estão sendo reduzidas.
- [ ] A cobertura de conhecimento dos componentes críticos está mapeada, com um plano para espalhá-la.
- [ ] As perguntas das partes interessadas são registradas e os tempos de resposta são revistos.
- [ ] Nenhuma medida conta mensagens, reuniões ou comunicação individual.
- [ ] Os resultados são compartilhados com as equipes e os fornecedores envolvidos.

## Prompts de IA

**Analise um caminho de itens de trabalho.**

```text
Here are anonymized assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Redija uma tabela de responsabilidades.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Planeje a difusão do conhecimento.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Projete uma abordagem colaborativa para incidentes.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organization] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de transferência ou de colaboração.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de colaboração mede o trabalho e não indivíduos, com seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- A maior parte do atraso está nas esperas entre as transferências; por isso meça a contagem de transferências, a parcela de espera e as reatribuições a partir do histórico dos itens de trabalho.
- Reduza as transferências levando a capacidade até o trabalho, esclarecendo a responsabilidade e mapeando e cortando dependências.
- Reúna as pessoas certas em tempo real para problemas complexos ou urgentes.
- Espalhe o conhecimento dos componentes críticos e trate os pontos únicos de conhecimento como um risco do sistema.
- Mantenha as partes interessadas continuamente envolvidas, com respostas rápidas às perguntas bloqueantes.
- Nunca meça o volume de comunicação nem avalie indivíduos pela colaboração.

## Referências e leituras complementares

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Gargalo (produção)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Lei de Conway](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependência (gerenciamento de projetos)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Lei de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Fator ônibus](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Equipe multifuncional](https://en.wikipedia.org/wiki/Cross-functional_team).
