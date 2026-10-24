# Governança e responsabilidade das métricas

**Uma métrica que ninguém possui, define, revisa ou aposenta vai se afastar do trabalho que descreve; por isso dê a cada métrica relatada um responsável nomeado, uma definição escrita, uma data de revisão e uma saída.**

## Visão geral e motivação

A governança de métricas é o conjunto de decisões leves sobre quem é o responsável por uma medida, o que ela significa, quem pode vê-la, com que frequência é revista e quando é removida. É prima próxima da [governança de dados](https://en.wikipedia.org/wiki/Data_governance), que cobre a gestão mais ampla da disponibilidade, da qualidade e da segurança dos dados em uma organização. A governança de métricas aplica a mesma disciplina ao pequeno conjunto, de alta visibilidade, de números que equipes e líderes usam para conduzir o trabalho de serviço e de entrega.

A necessidade aparece como pequenos atritos repetidos. Duas equipes calculam o "tempo de resolução" de maneiras diferentes e gastam uma reunião conciliando as cifras. Um bloco do painel fica desatualizado por meses porque quem o construiu mudou de função. Uma medida criada para ajudar uma equipe a diagnosticar seu fluxo é adotada por um comitê gestor como meta de desempenho, que é a situação contra a qual o tópico anterior alerta (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Nenhum deles é um problema estatístico. Cada um é um problema de responsabilidade, e cada um é barato de prevenir.

As visões ágil e ITIL diferem na ênfase, e a diferença é útil. Na visão ágil, uma equipe é dona de suas medidas de trabalho e as negocia em retrospectivas, acordos de trabalho e revisões. A visão do ITIL, conforme documentada no ITIL 4 (a edição de 2019 da AXELOS, hoje publicada pela PeopleCert), trata medição e relatório como uma prática geral de gestão e a melhoria contínua como uma prática com papéis, registros e revisão próprios. O ITIL também espera que responsáveis por serviços e por práticas respondam pelos resultados. As duas visões se encaixam: a equipe é dona da visão de trabalho, um responsável nomeado por serviço ou prática é dono da visão relatada, e um pequeno registro liga as duas.

Alguns termos usados aqui. Um **responsável pela métrica** é a pessoa que responde pela definição, pela qualidade dos dados e pelo uso de uma métrica. Um **registro de métricas** é um catálogo curto das métricas em uso, com o responsável, a definição, a fonte de dados, a barreira de proteção e a data de revisão de cada uma. Uma **carta de métricas** é uma declaração de uma página sobre propósito, escopo, papéis e cadência de revisão de um conjunto de métricas. Uma **[fonte única da verdade](https://en.wikipedia.org/wiki/Single_source_of_truth)** é o sistema ou conjunto de dados autoritativo a partir do qual uma dada cifra é calculada. Um **[data steward](https://en.wikipedia.org/wiki/Data_steward)** cuida da qualidade e da definição de um domínio de dados e, em uma organização pequena, o responsável pela métrica muitas vezes desempenha esse papel. Uma **[matriz RACI](https://en.wikipedia.org/wiki/RACI_matrix)** registra quem é responsável, quem presta contas, quem é consultado e quem é informado em cada atividade. Um **[dicionário de dados](https://en.wikipedia.org/wiki/Data_dictionary)** é um catálogo de elementos de dados e seus significados, no que a coluna de definição do registro se torna em escala maior. O **[princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** diz que pessoas e sistemas recebem o acesso de que precisam para sua tarefa e nada além. A **[melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process)** é o esforço permanente de melhorar serviços, práticas e formas de trabalhar, e é ao mesmo tempo uma prática do ITIL e um hábito ágil. SLA significa acordo de nível de serviço, e ITSM significa gestão de serviços de TI.

## Princípios-chave

- **Toda métrica relatada tem um responsável nomeado.** Um papel ou uma pessoa, nunca "a equipe". A responsabilidade compartilhada deixa a definição sem manutenção.
- **Uma definição, uma fonte única da verdade.** Escreva a definição uma vez, incluindo onde o relógio começa e para, e calcule a cifra em um só lugar.
- **Governe em proporção à consequência.** Uma métrica que uma equipe usa para depurar o próprio quadro precisa de uma frase. Uma métrica em um contrato, um relatório público ou um pacote para o conselho precisa de uma entrada na carta, de revisão e de uma trilha de auditoria.
- **O acesso segue o propósito.** Decida quem vê qual visão e por quê. O público padrão da visão de trabalho de uma equipe é a própria equipe.
- **Revise em uma cadência e aposente com base em evidências.** As métricas têm ciclos de vida. Adote, revise, ajuste e aposente-as deliberadamente.
- **Escreva e mantenha pequeno.** Um registro que cabe em uma página é lido. Um manual de políticas não é.
- **A governança serve as pessoas medidas.** Os responsáveis por uma métrica incluem as pessoas cujo trabalho ela descreve.

## Definições de métricas

Estas são medidas da saúde de uma prática de métricas, não de um serviço. São deliberadamente poucas e baratas de coletar a partir do próprio registro. Cada período é um trimestre civil, salvo indicação em contrário.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de responsabilidade | Proporção das métricas relatadas com um responsável nomeado e atual | métricas relatadas com um responsável que ainda ocupa o papel ao fim do período / métricas relatadas ao fim do período; exclui métricas usadas apenas no quadro privado de uma equipe | porcentagem | Registro de métricas | Medição e relatório | Acordos de trabalho | Trimestral |
| Atualidade das definições | Proporção das métricas relatadas cuja definição foi revista dentro do intervalo acordado | métricas com data de revisão nos últimos 6 meses / métricas relatadas; o relógio começa na última revisão registrada e para ao fim do período | porcentagem | Registro de mudanças do registro de métricas | Medição e relatório; melhoria contínua | Ações de retrospectiva | Trimestral |
| Conformidade de fonte | Proporção das métricas relatadas calculadas a partir de exatamente uma fonte nomeada | métricas com uma fonte autoritativa e sem cálculo paralelo conhecido / métricas relatadas; cálculos paralelos são encontrados amostrando painéis e relatórios | porcentagem | Registro mais uma amostra de painéis e relatórios | Medição e relatório; gestão de nível de serviço | Definição de pronto de uma métrica | Trimestral |
| Taxa de aposentadoria | Número de métricas aposentadas ou fundidas em um período em relação às relatadas | métricas aposentadas ou fundidas no período / métricas relatadas no início do período; uma métrica movida para a visão privada de uma equipe conta como aposentada do conjunto relatado | porcentagem | Registro de mudanças do registro de métricas | Melhoria contínua | Ações de retrospectiva | Trimestral |
| Atualidade da revisão de acesso | Proporção das visões restritas de métricas cuja lista de público foi revista dentro do intervalo | visões restritas com revisão de público nos últimos 6 meses / visões restritas; visões abertas a toda a organização são excluídas | porcentagem | Lista de acesso ou exportação de permissões da ferramenta de BI | Gestão da segurança da informação; medição e relatório | Acordos de trabalho | Semestral |
| Ligação com decisões | Proporção das métricas relatadas ligadas, no registro, a uma decisão que elas informam | métricas com decisão ou pergunta registrada / métricas relatadas; uma ligação só conta se a decisão foi tomada nos últimos 12 meses | porcentagem | Registro de métricas e registro de decisões | Melhoria contínua | Revisão com partes interessadas e resultados de melhoria | Trimestral |

Nenhuma delas é uma meta. Um registro pode mostrar cobertura de responsabilidade total e ainda descrever métricas inúteis; por isso leia a tabela junto com a tabela de manipulação abaixo.

## Recomendações

### Estabeleça a responsabilidade e o registro

**1. Mantenha um registro de métricas de uma página.** Liste cada métrica relatada com sua pergunta, responsável, definição, fórmula e relógios, unidade, fonte de dados, público, barreira de proteção, data da última revisão e data planejada de revisão. Uma planilha ou um arquivo Markdown em controle de versão basta. O registro é o artefato mais útil deste tópico, e o tópico anterior já supõe que ele exista (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

**2. Nomeie um responsável por métrica e registre o papel.** O responsável responde pela definição, pela qualidade dos dados e pela explicação de resultados estranhos. Escolha alguém próximo dos dados e das decisões, muitas vezes o responsável pelo serviço, o responsável pela prática ou um líder de equipe. Registre o papel além da pessoa, para que a entrada sobreviva a uma troca de função e uma vaga apareça na cifra de cobertura.

**3. Separe ser dono de uma métrica de ser dono do trabalho que ela mede.** O responsável por uma métrica a explica e a mantém, mas a equipe que faz o trabalho continua responsável pelo resultado. Isso evita duas armadilhas: o responsável culpado por um número que não pode influenciar e a equipe que renega um número porque outro o mantém. Uma curta tabela RACI na carta torna isso explícito.

**4. Escreva a definição com seus relógios, uma vez.** O registro guarda a definição autoritativa: o que é contado, onde o relógio começa e para, quais estados o pausam e o que é excluído. Aponte para ela de todo painel que mostre a métrica. Quando uma definição precisar mudar, mude-a primeiro no registro e marque a mudança no gráfico (veja o tópico 1.6, Letramento estatístico para métricas de serviço, sobre como mostrar uma quebra em uma tendência).

**5. Calcule cada métrica em um só lugar.** Escolha a fonte autoritativa, como a ferramenta de ITSM, o rastreador de issues ou o sistema de monitoramento, e diga isso no registro. As planilhas paralelas que reproduzem a cifra devem ser aposentadas ou renomeadas para que ninguém as confunda com o número oficial. A linhagem de dados e as ferramentas pertencem ao próximo tópico (veja o tópico 1.5, Fontes de dados e instrumentação).

### Defina cadência e controle de mudanças

**6. Revise as definições em um calendário que combine com a consequência.** Para métricas em contratos, relatórios regulados ou pacotes executivos, revise duas vezes por ano e a qualquer mudança no fluxo de trabalho subjacente. Para medidas de trabalho no nível da equipe, a retrospectiva é a revisão. Cada revisão faz três perguntas: a definição ainda é exata, os dados ainda são sólidos e alguém usou o número para decidir algo?

**7. Trate as mudanças de definição como mudanças de um serviço.** Registre quem pediu a mudança, por quê, quem foi consultado e a data em que ela entra em vigor. Uma pequena mudança em um fluxo de status pode mover silenciosamente uma medida de tempo em grande quantidade. O controle leve de mudanças para definições toma a ideia emprestada da habilitação de mudanças, sem a cerimônia (veja o tópico 4.3, Métricas de habilitação de mudanças, para o equivalente de mudança de serviço).

**8. Ligue a revisão à melhoria contínua.** As revisões de métricas devem produzir trabalho de melhoria ou uma decisão explícita de não agir. O ITIL trata a melhoria contínua como uma prática com um registro de oportunidades de melhoria, e as equipes ágeis obtêm o mesmo efeito por meio de ações de retrospectiva. Se uma revisão termina sem ação e sem aposentadoria, pergunte se a métrica está fazendo algum trabalho (veja o tópico 9.5, Métricas de melhoria contínua).

**9. Aposente métricas deliberadamente.** Defina um teste de aposentadoria, por exemplo "não citada em uma decisão por dois ciclos de revisão", e aplique-o. Arquive a definição e os valores finais, diga o que substituiu a métrica, se algo a substituiu, e avise o público. Um registro de aposentadorias é evidência para os auditores e um alívio para quem mantinha os dados à mão.

### Controle visões e acesso

**10. Decida o público de cada visão.** A maioria das métricas tem uma visão de trabalho para a equipe, uma visão relatada para o responsável pelo serviço ou pelo programa e, às vezes, uma visão externa para clientes, um regulador ou um fornecedor. Registre qual público recebe qual visão e por quê. Tomando o princípio do menor privilégio como guia, restrinja as visões que contêm dados pessoais, detalhes de segurança ou cifras comercialmente sensíveis de fornecedores, e deixe o resto aberto para que a transparência seja o padrão.

**11. Mantenha dados no nível individual fora do relatório.** A regra rígida deste livro é que as métricas descrevem equipes, serviços e sistemas, não pessoas. A governança reforça isso ao definir a granularidade relatada, por exemplo equipe e serviço, e ao restringir qualquer extração no nível da pessoa ao data steward. Se chegar um pedido de detalhamento por pessoa, registre-o, pergunte a que decisão serve e ofereça uma alternativa no nível da equipe ou do sistema (veja o tópico 11.3, Implantar métricas sem criar medo).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de responsabilidade | Nomear um gerente ou uma lista de e-mail como responsável para chegar a 100%, sem ninguém que possa explicar ou alterar a métrica | Pedir a cada responsável que explique um movimento recente do número; acompanhar perguntas sem resposta por mais de uma semana |
| Atualidade das definições | Atualizar a data de revisão sem ler a definição | Amostrar três entradas por trimestre e comparar a definição escrita com a configuração real da ferramenta |
| Conformidade de fonte | Declarar uma fonte autoritativa enquanto planilhas continuam a circular e a discordar | Contar as cifras distintas para a mesma métrica encontradas em uma amostra de relatórios; conciliar as diferenças na revisão |
| Taxa de aposentadoria | Aposentar métricas triviais ou sem uso para parecer disciplinado, ou renomear uma métrica para que conte como nova | Revisar no registro de aposentadorias o que foi removido; acompanhar ao lado a contagem total relatada e a cifra de ligação com decisões |
| Atualidade da revisão de acesso | Aprovar a lista de público existente sem lê-la | Comparar a lista com a composição atual das equipes e papéis; relatar o número de remoções encontradas |
| Ligação com decisões | Escrever uma decisão vaga, como "melhorar o serviço", para satisfazer o campo | Exigir uma decisão ou pergunta datada e amostrar o registro de decisões para ver se a métrica foi de fato consultada |

Uma leitura saudável é a de um registro que muda. As entradas têm responsáveis que respondem a perguntas, datas de revisão dentro dos últimos seis meses, um registro de aposentadorias com razões e uma curta lista de métricas que continuam desejadas porque as pessoas sabem nomear a decisão que informam. Um registro com todos os campos preenchidos e nada que jamais mude é um sinal de alerta.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Escritório central de métricas | Definições consistentes e ferramentas compartilhadas; auditoria mais fácil | Lento, distante do trabalho e tentado a padronizar medidas que deveriam diferir entre equipes |
| Responsabilidade federada com um registro compartilhado | Os responsáveis ficam perto dos dados; o registro mantém um mínimo comum | Exige incentivo constante para evitar a deriva de qualidade entre equipes |
| Apenas medidas de propriedade das equipes | Rápido e ajustado ao trabalho | As definições divergem; as consolidações ficam pouco confiáveis; o conhecimento sai com as pessoas |
| Acesso aberto por padrão | Constrói confiança e entendimento compartilhado | Risco de expor detalhes sensíveis ou no nível da pessoa |
| Acesso restrito | Protege dados sensíveis | Esconde o contexto de quem poderia ajudar e convida à suspeita |

O equilíbrio é centralizar a camada fina que precisa concordar, que é o registro, as definições compartilhadas e as regras de acesso, e federar todo o resto.

## Perguntas para discutir com sua equipe

**1. Quem responderia se o número mais citado do nosso painel parecesse errado amanhã?**
Peça ao grupo que nomeie uma pessoa, não um grupo. Se vários nomes surgirem, ou nenhum, a métrica não tem responsável na prática. O facilitador deve anotar a métrica, o candidato a responsável e o que ele precisaria para fazer o trabalho, como acesso de leitura aos dados ou tempo na revisão. Feche combinando quem vai confirmar o responsável e registrar o papel no registro.

**2. Onde existem hoje duas versões da mesma cifra?**
Procure relatórios que mostrem a mesma métrica com valores diferentes: um slide semanal contra um painel ao vivo, ou um relatório de fornecedor contra o interno. Para cada um, pergunte onde nasce a diferença, como escopo, relógio ou exclusões. Decida qual fonte é autoritativa e o que acontece com a outra versão. Espere que a conversa descubra definições de trabalho diferentes para palavras que todos supunham compartilhadas.

**3. Que métrica aposentaríamos neste trimestre se tivéssemos de aposentar uma?**
Comece pela métrica que ninguém citou numa decisão recentemente. Pergunte o que aconteceria se ela sumisse e quem notaria. Se a resposta for "ninguém", tire-a do conjunto relatado por um período de teste. O facilitador deve tratar a aposentadoria como algo normal e saudável e registrar o resultado no registro de aposentadorias.

**4. Quem vê quais das nossas métricas, e isso é intencional?**
Desenhe uma grade simples de métricas contra públicos: equipe, responsável pelo serviço, liderança, clientes, fornecedores, reguladores. Marque onde o acesso foi uma decisão e onde simplesmente aconteceu. Procure qualquer visão que possa ser usada para comparar indivíduos. Combine uma mudança em pelo menos uma lista de público e quem a revisará em seguida.

**5. Como mudamos uma definição sem quebrar a tendência?**
Percorra uma mudança recente em um fluxo de status ou em uma escala de prioridade. Pergunte quem foi avisado, se o gráfico foi anotado e se alguém comparou os valores antigos e novos. Redija uma entrada leve de mudança que a equipe realmente preencheria. Combine quem aprova mudanças em métricas que aparecem em contratos ou relatórios externos.

**6. O que deixaríamos de fazer se a governança virasse um fardo?**
A governança pode virar ritual. Pergunte quais partes da abordagem atual as pessoas pulariam se ninguém conferisse, e por quê. Trate as respostas como feedback de projeto, e não como resistência. O facilitador deve procurar etapas que se duplicam, campos que ninguém lê e revisões que nunca produzem uma decisão.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas de medidas de trabalho como idade do item de trabalho e tempo de ciclo, e devem combinar as definições em seus acordos de trabalho. Quando uma métrica sobe para um relatório de portfólio, a equipe deve conhecer o responsável, a definição e o público. As equipes ganham mais com uma curta entrada de registro para cada medida relatada e com o direito de contestar uma definição que já não combina com o fluxo do trabalho (veja o tópico 2.1, Medidas de fluxo).

### Equipes de serviço e operações

As equipes de serviço e operações carregam as métricas que aparecem nos SLAs e nas revisões operacionais; por isso definições, relógios e exclusões têm peso contratual. Os responsáveis aqui costumam ser responsáveis por serviços e por práticas. Eles devem manter uma trilha de evidências das mudanças de definição, conciliar regularmente as cifras relatadas com a ferramenta de ITSM e ser os primeiros a aposentar uma medida que deixou de informar decisões operacionais (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

### Liderança e governança

Os líderes definem as condições: quem é dono das métricas, quais visões chegam ao pacote executivo e como os números são usados. Devem pedir o registro e o registro de aposentadorias, ler as definições por trás das cifras de destaque e resistir a pedidos de classificações no nível da pessoa. Os órgãos de governança precisam de um pequeno item permanente que revise o registro e registre decisões, em linha com as expectativas da ISO/IEC 20000-1 para sistemas de gestão de serviços (conforme a edição de 2018), sem transformar a revisão em exercício de conformidade (veja o tópico 8.3, Métricas de conformidade e auditoria).

### Clientes e usuários

Clientes e usuários raramente veem o registro, mas sentem sua ausência quando uma cifra de uma revisão de serviço difere da experiência deles. Onde uma métrica aparece em um relatório voltado ao cliente ou em um SLA, a definição deve estar disponível em linguagem simples, inclusive o que é excluído. Os clientes devem ter um caminho para questionar uma cifra, e o responsável deve respondê-lo (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte mantém uma central de serviços, três equipes de produto e um grupo de operações. Todos os números abaixo são ilustrativos.

A revisão mensal de serviço mostra um tempo de resolução de incidentes de 5,1 horas na mediana. O painel das próprias equipes de produto, construído com a mesma ferramenta de ITSM, mostra 6,4 horas. As duas cifras circulam há um ano. Um novo responsável pelo serviço pergunta quem é o dono da métrica e recebe três respostas diferentes.

O responsável, com os líderes de equipe e o data steward, dedica duas sessões a um primeiro registro de 14 métricas relatadas. Dessas, 5 não tinham responsável e 4 tinham duas fontes. O tempo de resolução é uma das métricas de fonte dupla. A diferença remonta a um estado de pausa: a revisão de serviço exclui o tempo em "aguardando o cliente", e o painel da equipe não. O grupo combina uma única definição, nomeia o responsável pelo serviço como responsável pela métrica e publica os dois valores na mesma página por um trimestre, rotulados pela definição, para que ninguém perca o histórico. Anotam o gráfico onde a definição muda.

Na primeira revisão trimestral, o grupo aplica um teste de aposentadoria e remove 3 das 14 métricas, inclusive um gráfico mensal de contagem de tickets que nenhuma decisão recente havia citado. Também restringem a visão que detalha o tempo de resolução por analista, mantendo o data steward como único detentor, e oferecem em seu lugar um detalhamento no nível da equipe.

Um risco de manipulação aparece na segunda revisão. A cobertura de responsabilidade chega a 100%, mas uma amostra mostra que dois dos responsáveis são uma lista de distribuição e um chefe de departamento que nunca abriu os dados. O grupo os substitui por responsáveis de serviço nomeados e acrescenta à revisão a pergunta de barreira: "O responsável consegue explicar o último movimento deste número?". A cobertura cai para 86% por um trimestre, o que o grupo registra como um resultado honesto. A decisão registrada é manter a meta de cobertura até que a barreira de proteção tenha funcionado por dois ciclos.

## Ágil, IA, automação e análise

### Ágil

Trate o registro de métricas como um documento vivo que a equipe atualiza quando aprende algo, e não como um exercício único de projeto. Um hábito prático é uma breve revisão regular em que o responsável pela métrica, a equipe e uma parte interessada combinam quais métricas ficam, mudam ou se aposentam. O cuidado é que pequenas mudanças frequentes podem quebrar tendências; por isso registre cada mudança com um motivo.

### IA

As métricas sobre sistemas de IA precisam de um responsável, como as métricas de serviço, e o responsável precisa de autoridade para pausar o sistema quando os números disserem que ele está prejudicando os usuários. Registre no registro quais métricas descrevem trabalho assistido por IA e quem revisa o seu par de qualidade. O cuidado é que os painéis de IA fornecidos por fornecedores têm definições próprias; por isso registre-os citando e conferindo a definição do fornecedor.

### Automação

Automatize a higiene do registro: sinalize métricas sem responsável, sem data de revisão ou sem citação recente em uma decisão, e alerte o responsável. O cuidado é que um lembrete automático que ninguém responde é ruído; por isso meça quantos alertas levam a ação e aposente os que não levam.

### Análise

Trate o acesso aos dados de métricas também como uma questão de governança: quem pode ver os dados no nível da equipe, quem pode ver tickets brutos e por quanto tempo os dados são mantidos. A decisão que o registro informa é o que manter, mudar ou aposentar. O cuidado é que a análise do comportamento das pessoas pode resvalar para a vigilância; por isso mantenha as métricas no nível de equipe e de serviço e confira as regras de privacidade que se aplicam a você.

## Olhar setorial

**Startup.** Um fundador ou engenheiro líder costuma ser dono de todas as métricas por padrão. O risco é que as definições morem em uma só cabeça. Mantenha um registro de cinco a oito métricas em um documento compartilhado, nomeie um responsável para cada uma e escreva as definições no dia em que uma métrica aparecer pela primeira vez em uma atualização para investidores ou clientes.

**Pequena empresa.** Quem cuida de TI costuma ser responsável, steward e leitor do relatório ao mesmo tempo. Mantenha a governança em uma única página, revise duas vezes por ano e tome cuidado extra quando um relatório de fornecedor definir uma métrica de modo diferente do seu. Nomeie quem, no negócio, é dono de cada cifra voltada ao cliente.

**Grande empresa.** A escala torna essencial a camada compartilhada. Use um registro com fluxo de trabalho, um conselho leve que se reúna a cada trimestre e um papel de data steward para cada domínio importante. Preserve a autonomia das equipes para as medidas de trabalho e evite padronizar métricas que deveriam diferir entre tipos de serviço. Alinhar-se à governança de dados já existente na organização poupa esforço.

**Governo e setor público.** Relatórios legais, auditoria e compras tornam obrigação as definições escritas e os registros de mudança. Trate o registro como um artefato de auditoria e mantenha uma linha clara de cada cifra publicada até seu responsável e sua fonte. As decisões de acesso muitas vezes envolvem revisão jurídica e de privacidade; por isso registre a base de cada visão restrita (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é modesto e sobretudo de tempo. Espere algumas horas para montar um primeiro registro, uma hora ou duas por trimestre para a revisão e algum esforço do data steward para resolver fontes conflitantes. O custo de ferramentas é baixo porque uma planilha ou um arquivo em controle de versão bastam para começar.

O retorno é sobretudo desperdício evitado. As reuniões gastas conciliando cifras desaparecem, as auditorias encontram uma trilha clara e integrar um novo responsável pelo serviço é mais rápido porque as definições estão escritas. As decisões melhoram porque se apoiam em números que significam a mesma coisa todo mês. Não cite uma porcentagem para esses benefícios sem dados próprios. Se precisar de cifras para um business case, conte as horas gastas no último trimestre conciliando números conflitantes e o número de métricas sem responsável registrado, e conte de novo depois de dois ciclos de revisão.

## Antipadrões e armadilhas

- **Responsabilidade por comitê.** Um grupo é dono da métrica e ninguém responde às perguntas. Nomeie um papel responsável e um suplente.
- **O registro como cemitério.** É construído uma vez e nunca tocado. Ponha as datas de revisão no calendário e mostre a data em todo painel.
- **Padronizar tudo.** Uma definição imposta a equipes cujo trabalho difere produz números que não significam nada em lugar nenhum. Compartilhe apenas a camada que precisa concordar.
- **Mudanças silenciosas de definição.** As tendências se quebram e a confiança vai junto. Registre cada mudança com o motivo e anote o gráfico.
- **Governança sem aposentadoria.** O conjunto só cresce e a atenção se dilui. Aplique um teste de aposentadoria a cada revisão.
- **Sigilo por padrão.** Esconder as visões de trabalho das pessoas medidas gera suspeita. Restrinja apenas o que carrega risco real e explique por quê.
- **Acesso aberto a dados no nível da pessoa.** Uma única extração pode virar uma classificação em poucos dias. Defina a granularidade relatada em equipe e serviço e mantenha qualquer dado no nível da pessoa sob o steward.
- **Teatro de conformidade.** Os campos são preenchidos para satisfazer uma lista de verificação. Amostre as entradas quanto à veracidade e peça aos responsáveis que expliquem movimentos recentes.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Responsabilidade e registro | Responsáveis pouco claros; métricas vivem em planilhas individuais | Algumas equipes mantêm uma lista com responsáveis | Um registro para todas as métricas relatadas, cada uma com um responsável nomeado e um papel | Cobertura e atualidade acompanhadas ao longo do tempo; lacunas levam a correções com recursos | Registro compartilhado com fornecedores e clientes onde as cifras cruzam fronteiras |
| Definições e controle de mudanças | Definições variam por pessoa | Escritas para algumas métricas contratuais | Definição escrita com relógios e registro de mudanças para toda métrica relatada | Mudanças revisadas quanto ao impacto sobre as tendências antes de entrarem em vigor | Definições revistas em conjunto entre equipes e fornecedores quando deixam de informar decisões |
| Revisão e aposentadoria | Métricas acrescentadas, nunca removidas | Limpeza ocasional | Cadência de revisão e teste de aposentadoria escritos | Resultados das revisões acompanhados como trabalho de melhoria | Aposentadoria e renovação rotineiras, movidas por evidências de usuários e equipes |
| Acesso e público | Acesso por acaso | Visões restritas para dados sensíveis | Público listado por métrica, com uma razão | Acesso revisto em uma cadência; dados no nível da pessoa mantidos pelo steward | Público desenhado com as pessoas medidas e com os clientes |

## Lista de verificação

- [ ] Existe um registro de métricas que lista todas as métricas relatadas.
- [ ] Toda métrica relatada tem um responsável nomeado e um papel registrado.
- [ ] Toda métrica relatada tem uma definição escrita com regras de início, parada e exclusão.
- [ ] Cada métrica tem uma fonte autoritativa nomeada no registro.
- [ ] Uma data de revisão e um intervalo estão registrados para cada métrica.
- [ ] As mudanças de definição são registradas com um motivo e marcadas no gráfico.
- [ ] Um teste de aposentadoria está escrito e é aplicado a cada revisão.
- [ ] O público de cada visão está registrado, com uma razão para qualquer restrição.
- [ ] Nenhuma visão relatada classifica indivíduos, e os dados no nível da pessoa ficam com o data steward.
- [ ] O registro foi amostrado quanto à veracidade no último trimestre.

## Prompts de IA

**Redija uma carta de métricas para um conjunto de métricas.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Encontre conflitos entre duas versões de uma métrica.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Revise um registro de métricas em busca de lacunas.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Planeje uma revisão de aposentadoria.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico e a barreira de proteção pareada de uma métrica antes de acrescentá-la ao registro.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica traz um responsável, um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- A governança mantém os números significando a mesma coisa ao longo do tempo, e um registro de uma página é o seu núcleo.
- Nomeie um responsável para cada métrica relatada e registre o papel além da pessoa.
- Escreva uma definição com seus relógios, calcule-a em um só lugar e registre toda mudança.
- Ajuste o peso da governança à consequência da métrica.
- Decida de propósito quem vê qual visão, mantenha dados no nível da pessoa fora do relatório e aposente métricas com base em evidências.

## Referências e leituras complementares

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Governança de dados](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Fonte única da verdade](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [Matriz RACI](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Dicionário de dados](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Processo de melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process).
