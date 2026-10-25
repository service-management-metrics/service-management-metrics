# Métricas de conformidade e auditoria

**A conformidade é mais fácil e mais honesta quando a evidência é produzida pelo próprio trabalho; por isso meça quanta evidência vem automaticamente, com que rapidez os achados são corrigidos e com que frequência o mesmo achado volta, e trate os auditores como partes interessadas que entram cedo na conversa.**

## Visão geral e motivação

A maioria das organizações que constroem e operam serviços de TI presta contas a alguém: reguladores, clientes, organismos de certificação, seguradoras, conselhos. A [conformidade regulatória](https://en.wikipedia.org/wiki/Regulatory_compliance) é o ato de se conformar a leis, regras e normas e de demonstrar que se faz isso. Uma auditoria é um exame sistemático de evidências para julgar se isso é verdade. Em TI isso inclui as auditorias dos controles de relatórios financeiros, das obrigações de proteção de dados, das certificações de segurança e dos compromissos contratuais. A [auditoria de tecnologia da informação](https://en.wikipedia.org/wiki/Information_technology_audit) examina os controles em torno dos sistemas e dos dados que eles guardam.

A conformidade e a entrega contínua têm fama de atrito. A conformidade pede documentos, assinaturas e aprovações antes da mudança, e a entrega contínua favorece mudanças pequenas liberadas continuamente. O atrito é real quando a conformidade é tratada como uma fase no fim. Diminui quando a conformidade é embutida no fluxo de trabalho. Registros de mudanças, revisões de código, testes automatizados e logs de acesso são evidências, e um pipeline de entrega os produz todos os dias. A [auditoria contínua](https://en.wikipedia.org/wiki/Continuous_auditing) usa verificações automatizadas, quase em tempo real, dos controles em vez de amostras periódicas e combina com o ritmo da entrega contínua. Uma [trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail) é um registro que mostra quem fez o quê, quando e em qual sistema, e muitas vezes é a evidência mais forte que você tem.

O ITIL descreve as práticas relevantes: gestão de segurança da informação, gestão de riscos e a governança do sistema de valor de serviço, e aponta para normas como a [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) para sistemas de gestão de segurança da informação. Os arcabouços que as organizações enfrentam comumente incluem regimes de relato para controles financeiros, como a [Lei Sarbanes–Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) nos Estados Unidos, leis de proteção de dados, como o [Regulamento Geral sobre a Proteção de Dados](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) na União Europeia, e relatórios de garantia, como o [SOC 2](https://en.wikipedia.org/wiki/SOC_2), que examinam os controles relevantes para a segurança e critérios relacionados. Os detalhes diferem por jurisdição, setor e data, e este tópico descreve prática de medição, e não exigências legais. Trabalhe com seus colegas de conformidade, jurídico e auditoria para saber o que se aplica a você.

O objetivo das métricas de conformidade é aprender quão bem a organização cumpre suas obrigações e quanto esforço isso exige, para que ambos possam melhorar. O risco é que a conformidade vire uma encenação para o auditor. Uma equipe pode passar numa auditoria produzindo documentos na última hora e ainda assim manter práticas arriscadas. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: quando "achados de auditoria" é uma meta, as pessoas evitam o escrutínio, estreitam o escopo e negociam a redação (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Duas linhas de pensamento ajudam.

- **A conformidade como subproduto.** Se o pipeline registra automaticamente a revisão, o teste, a aprovação e a implantação, a evidência existe quer uma auditoria esteja próxima ou não. Isso também remove a tentação de reconstruir evidências depois.
- **Os auditores como partes interessadas.** A prática ágil valoriza a colaboração contínua com as partes interessadas. Auditores e avaliadores são partes interessadas com perguntas legítimas. Envolvê-los no desenho dos controles e das evidências reduz surpresas e retrabalho, preservando a independência deles.

## Princípios-chave

- **Produza evidência como subproduto do trabalho.** Pipelines, tickets e logs devem responder à maior parte das perguntas de auditoria.
- **Mapeie as obrigações a controles e responsáveis.** Toda obrigação tem um controle, e todo controle tem um responsável.
- **Colabore cedo com os auditores.** Compartilhe projetos e abordagens de evidência antes da auditoria e preserve a independência deles.
- **Corrija as causas, não os achados.** Um achado encerrado sem remover a causa volta.
- **Meça o esforço além do resultado.** O custo da conformidade faz parte do quadro.
- **Mantenha a separação de funções onde importa.** A independência da revisão é um controle que a automação pode apoiar, mas não substituir.
- **Seja honesto sobre as lacunas.** É melhor que as fraquezas sejam achadas por você do que por outros.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de obrigações | Proporção das obrigações aplicáveis mapeadas a um controle com responsável e fonte de evidência | obrigações mapeadas a pelo menos um controle com responsável e fonte de evidência / obrigações aplicáveis | porcentagem | Registro de obrigações e registro de controles | Governança; gestão de segurança da informação; gestão de riscos | A definição de pronto inclui a evidência do controle | Trimestral |
| Taxa de automação de evidências | Proporção das evidências de controles no escopo coletadas automaticamente de sistemas de registro | itens de evidência de controles coletados automaticamente / itens de evidência exigidos | porcentagem | Registro de controles, pipeline e logs de sistemas | Gestão de segurança da informação; habilitação de mudanças | O pipeline registra automaticamente revisão, teste e implantação | Trimestral |
| Tempo de entrega de evidências | Tempo para fornecer a evidência pedida por um auditor ou avaliador | mediana e 85º percentil dos dias do pedido à evidência aceita | dias | Rastreador de pedidos de auditoria | Governança; gestão de segurança da informação | Capacidade de resposta a uma pergunta de parte interessada | Por auditoria |
| Tempo de encerramento de achados | Tempo para encerrar os achados de auditoria por severidade | mediana e 85º percentil dos dias da emissão do achado ao encerramento verificado | dias | Rastreador de achados | Melhoria contínua; gestão de riscos | Tempo para corrigir um defeito | Mensal |
| Taxa de achados repetidos | Proporção dos achados que se repetem de uma auditoria ou revisão anterior | achados que correspondem em substância a um achado anterior encerrado / achados no período | porcentagem | Rastreador de achados com vínculos de causa | Melhoria contínua; gestão de problemas | Defeito recorrente após uma correção | Por ciclo de auditoria |
| Conflitos de segregação de funções | Contagem das combinações de acesso ou aprovação que violam as regras de segregação e o tempo para resolvê-las | conflitos detectados; mediana de dias para resolver | contagem; dias | Ferramentas de gestão de identidade e acesso, registros de mudanças | Gestão de segurança da informação; habilitação de mudanças | Revisão independente das mudanças | Mensal |
| Esforço de auditoria | Horas-pessoa que a organização gasta preparando e apoiando um ciclo de auditoria, por unidade de escopo | horas registradas na preparação e no apoio à auditoria / controles ou sistemas no escopo | horas por unidade | Registros de tempo ou estimativas de esforço | Governança; melhoria contínua | Custo do trabalho que não é entrega | Por ciclo de auditoria |

Declare no registro as obrigações em escopo e o escopo da auditoria. O tempo de encerramento começa quando o achado é emitido e para quando o auditor ou um verificador independente confirma o encerramento, e não quando a equipe diz que acabou. Os achados repetidos são correspondidos por causa, e não pela redação, e a regra de correspondência é registrada. O esforço de auditoria é uma medida de tendência para a organização e nunca uma medida de indivíduos.

## Recomendações

### Conheça suas obrigações e controles

**1. Liste as obrigações que se aplicam, em linguagem simples.** Com colegas do jurídico e da conformidade, liste as leis, normas, contratos e políticas que vinculam o serviço e o que cada uma exige em termos de resultados. Mantenha a lista curta e legível. As obrigações que ninguém consegue enunciar com clareza são as que causam surpresas na auditoria.

**2. Mapeie cada obrigação a controles, responsáveis e evidências.** Para cada obrigação, nomeie o controle que a cumpre, a pessoa responsável e a evidência que mostra que o controle opera. Onde um controle cumpre várias obrigações, diga isso, porque reduz o esforço duplicado. A cobertura de obrigações mede a completude desse mapa. As obrigações não mapeadas são lacunas a fechar ou a aceitar conscientemente.

**3. Prefira menos controles, e mais fortes.** Um controle automatizado e testado vale vários manuais. Procure controles que se sobrepõem e aposente os que não servem a nenhuma obrigação. Cada controle custa esforço para operar e para evidenciar (veja o tópico 8.2, Métricas de riscos e controles).

### Faça da evidência um subproduto

**4. Deixe o pipeline produzir a evidência.** Ligue toda mudança em produção a um pedido, uma revisão de código, resultados de testes e uma aprovação onde exigida, tudo registrado automaticamente. Um registro de implantação que mostra isso diz ao auditor o que aconteceu sem que um documento seja escrito. Isso se apoia nas práticas de entrega contínua que as equipes ágeis já usam (veja o tópico 4.5, Métricas de releases e implantação).

**5. Use verificações de política no pipeline.** Codifique regras, como "nenhuma implantação sem uma revisão por alguém que não seja o autor" ou "nenhum acesso à produção sem um ticket", como verificações automatizadas. A verificação é ao mesmo tempo um controle e sua evidência. Mantenha as regras visíveis e versionadas, para que as mudanças nelas também sejam registradas. Isso apoia a [segregação de funções](https://en.wikipedia.org/wiki/Segregation_of_duties), o princípio de que nenhuma pessoa deve controlar todas as etapas de um processo sensível.

**6. Preserve as trilhas de auditoria adequadamente.** Guarde os logs de acesso e de mudança de um modo que não possa ser alterado pelas pessoas que eles descrevem, retenha-os pelo período exigido e torne-os pesquisáveis. Uma trilha que pode ser editada por quem ela registra é uma evidência fraca. Confira as regras de retenção com colegas do jurídico.

**7. Meça quanto da evidência é automática.** A taxa de automação de evidências mostra onde ainda resta coleta manual. Classifique os itens manuais por esforço e risco e automatize primeiro os piores. À medida que a taxa sobe, o esforço de auditoria e o tempo de entrega caem.

### Trabalhe com os auditores

**8. Convide os auditores para o projeto.** Compartilhe cedo as mudanças planejadas nos controles e nas evidências com a auditoria interna e os avaliadores externos e pergunte o que os satisfaria. Independência significa que eles não projetam seus controles, e não que não possam dizer que evidência vão precisar. As conversas precoces reduzem o retrabalho. O Institute of Internal Auditors publica normas para a profissão que explicam o papel da [auditoria interna](https://en.wikipedia.org/wiki/Internal_audit).

**9. Prepare um índice de evidências.** Mantenha um índice vivo de onde cada tipo de evidência está e de como recuperá-la. Acompanhe o tempo de entrega dos pedidos de evidência e use os atrasos para achar automação ausente. Um processo curto e constante vence a correria antes de cada auditoria.

**10. Combine o significado de materialidade e de escopo.** Pergunte aos auditores como julgam o que importa e o que está no escopo e registre a resposta. Um entendimento compartilhado previne disputas depois. Não estreite o escopo para evitar escrutínio nem o amplie sem motivo.

### Corrija as causas e aprenda

**11. Trate cada achado como um registro de problema.** Ache a causa, corrija-a e verifique o encerramento por alguém independente. Ligue os achados repetidos aos anteriores e examine por que a primeira correção não se sustentou. Uma taxa alta de achados repetidos aponta para correções que trataram sintomas, o que se liga à gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas).

**12. Acompanhe o custo e faça-o baixar.** Registre o esforço de auditoria ao longo dos ciclos. Se o esforço é alto e plano, procure duplicação entre auditorias, coleta manual de evidências e controles que não servem a ninguém. Relate a tendência do esforço junto com os resultados. A conformidade vale seu custo quando reduz risco real, e as métricas ajudam você a saber.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de obrigações | Mapear obrigações a controles fracos ou irrelevantes; definir obrigações de modo estreito | Revisão da relevância dos controles por uma segunda parte; testar os controles (veja o tópico 8.2, Métricas de riscos e controles) |
| Taxa de automação de evidências | Contar capturas de tela ou exportações como automáticas; automatizar primeiro a evidência de baixo valor | Definir automático como gerado pelo sistema e resistente a adulteração; classificar por risco |
| Tempo de entrega de evidências | Fornecer evidência parcial depressa; negociar a redação do pedido | Contar apenas a evidência aceita; acompanhar os pedidos de acompanhamento |
| Tempo de encerramento de achados | Encerrar achados sem verificação; reclassificar a severidade | Verificação independente; registro de mudanças de severidade |
| Taxa de achados repetidos | Reescrever achados para que não correspondam; encerrar o achado anterior como de outro tipo | Corresponder por causa com uma regra registrada; revisão pela auditoria interna |
| Conflitos de segregação de funções | Mover conflitos para sistemas fora do escopo; conceder acesso temporário que nunca é registrado | Cobrir todos os sistemas com processos sensíveis; rever o acesso temporário |
| Esforço de auditoria | Não registrar horas; mover o esforço para outros orçamentos | Amostrar os registros de tempo; comparar com pesquisas das equipes |

Uma leitura saudável é uma automação de evidências crescente, um tempo de entrega mais curto e mais estável, achados encerrados com verificação, uma taxa de repetição baixa e um esforço de auditoria que cai à medida que o processo amadurece.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Evidência manual periódica | Familiar aos auditores | Cara; reconstruída depois do fato |
| Evidência contínua automatizada | Barata de manter; oportuna | Exige engenharia; os auditores precisam confiar na fonte |
| Aprovações pesadas | Controle visível | Lentas; agrupam mudanças |
| Verificações de política automatizadas | Consistentes e rápidas | As regras precisam estar certas e visíveis |
| Envolvimento precoce dos auditores | Menos surpresas | Exige cuidado para preservar a independência |
| Auditoria no fim | Separação clara | Achados tardios; retrabalho |
| Um controle para muitas obrigações | Eficiente | Uma única falha afeta várias obrigações |
| Muitos controles específicos | Mapeamento claro | Esforço duplicado |

A resposta pragmática é automatizar a evidência a partir do pipeline e dos sistemas de registro, envolver cedo os auditores no projeto preservando a independência deles e manter um conjunto enxuto de controles fortes mapeados às obrigações.

## Perguntas para discutir com sua equipe

**1. Qual pergunta de auditoria leva mais tempo para responder, e por quê?**
Escolham o pedido de evidência mais lento da última auditoria e rastreiem-no. A evidência está ausente, dispersa ou na cabeça de alguém? Discutam o que a tornaria automática. O facilitador deve registrar o custo em horas.

**2. Conseguimos mostrar, para qualquer mudança em produção no último mês, quem a revisou e que testes rodaram?**
Escolham uma mudança ao acaso e tentem. Anotem onde a cadeia se rompe. Combinem uma melhoria no registro de mudanças ou no pipeline que feche a lacuna.

**3. O que prometemos na última auditoria, e isso se sustentou?**
Revejam os achados e as correções. Para cada um, perguntem se a causa foi removida e quem verificou o encerramento. Procurem repetições. Combinem um achado a examinar mais a fundo.

**4. O que os auditores nos diriam se perguntássemos como tornar a evidência mais fácil?**
Planejem uma conversa com a auditoria interna ou um avaliador sobre o desenho das evidências. Perguntem em que confiam e em que não confiam. O facilitador deve tratar as respostas como informação e ter em mente as regras de independência.

**5. Quais controles operamos que nenhuma obrigação exige?**
Listem os controles e as obrigações a que servem. Achem os que não têm propósito claro. Discutam aposentá-los e a evidência de que são desnecessários.

**6. Onde uma pessoa poderia fazer algo sensível de ponta a ponta aqui?**
Pensem em implantação, concessão de acessos e pagamentos. Conferam se as ferramentas impõem a separação ou só a política. Discutam controles compensatórios, como a revisão automatizada, onde o pessoal é pouco.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega produzem boa parte da evidência fazendo bem o seu trabalho. Devem manter ligados os registros de mudança, revisão e teste, usar verificações de política no pipeline e levantar preocupações sobre controles que atrasam o trabalho sem reduzir o risco. Ganham com conversas precoces com os auditores sobre que evidência basta.

### Equipes de serviço e operações

As equipes de operações conduzem a gestão de acessos, o registro em logs, os backups e o tratamento de incidentes, que são centrais em muitas auditorias. Devem manter os logs resistentes a adulteração e retidos, conduzir as revisões de acesso no prazo e manter o índice de evidências. Arcam com o peso da evidência manual e podem apontar onde a automação ajudaria mais.

### Liderança e governança

Os líderes são responsáveis pela conformidade e muitas vezes pelos resultados das auditorias. Devem financiar a automação de evidências, pedir a cobertura e a taxa de achados repetidos em vez de só a contagem de achados e apoiar a independência dos auditores. A governança deve esperar relatos honestos das lacunas e um plano para cada uma.

### Clientes e usuários

Clientes e usuários contam com a conformidade como garantia de como seus dados e serviços são tratados. Beneficiam-se quando os relatórios de garantia são claros, quando os incidentes são relatados como exigido e quando os controles não tornam o uso legítimo mais difícil que o necessário. A comunicação transparente sobre a conformidade constrói confiança.

## Na prática: um exemplo de gestão de serviços

Uma empresa de pagamentos de porte médio opera uma plataforma de processamento de cartões e é avaliada anualmente contra um arcabouço de garantia de segurança e um regime de proteção de dados. Os números abaixo são ilustrativos.

A preparação da auditoria leva às equipes de engenharia cerca de seis semanas por ano. A avaliação do ano passado fechou com 14 achados, dos quais 5 se repetiam do ano anterior. A chefe de conformidade mapeia a situação. A cobertura de obrigações é de 83%, e 17% das obrigações não têm responsável de controle nomeado. A automação de evidências é de 22%, e a maior parte da evidência da aprovação de mudanças vem de capturas de tela de tickets compiladas à mão. O tempo mediano de entrega de evidências é de 9 dias, com um 85º percentil de 21 dias. O tempo mediano de encerramento de achados é de 74 dias, e o encerramento era muitas vezes marcado pela equipe responsável sem verificação.

A chefe de conformidade trabalha com as equipes de entrega e operações e com a auditora interna. Elas mudam quatro coisas. Toda mudança em produção no pipeline agora se liga ao pedido, à revisão de código por alguém que não é o autor, aos resultados de testes e à implantação, registrados automaticamente no registro da mudança. Uma verificação de política bloqueia uma implantação sem revisão independente e registra a rota de exceção para emergências. As revisões de acesso rodam trimestralmente a partir do sistema de identidade, que mostra diretamente os conflitos de segregação de funções. Cada achado vira um registro de problema, com um verificador independente da auditoria interna, e os achados repetidos são ligados aos seus antecessores.

Na avaliação seguinte, a taxa de automação de evidências é de 71%, o tempo mediano de entrega de evidências é de 2 dias, o 85º percentil é de 5 dias e a preparação da auditoria leva cerca de duas semanas. A cobertura de obrigações é de 97%, e os itens restantes têm aceitação documentada. Os achados caem para 6, com uma repetição, e o tempo mediano de encerramento é de 31 dias com verificação independente. O presidente pede zero achados no ano seguinte. A chefe de conformidade propõe acompanhar os achados repetidos, o tempo de encerramento e a automação de evidências e explica que uma meta de zero achados empurra as equipes a esconder problemas ou estreitar o escopo e que um avaliador que não acha nada pode não ter olhado com bastante empenho. A decisão é registrada, e o conselho concorda em rever as medidas na próxima reunião.

## Ágil, IA, automação e análise

### Ágil

Produza evidência como subproduto do trabalho e convide cedo os auditores à conversa. O cuidado é que uma meta de achados de auditoria pode desencorajar o relato honesto das próprias falhas.

### IA

As obrigações relacionadas à IA estão mudando; por isso confira a lei que se aplica a você com seu assessor jurídico e mantenha um inventário dos sistemas de IA como evidência. Não peça a uma ferramenta de IA para declarar alegações de conformidade. O cuidado é que os resumos de evidências gerados por IA precisam de uma pessoa que os verifique contra a fonte.

### Automação

Automatize a coleta de evidências a partir de pipelines e ferramentas e meça a taxa de automação de evidências e o tempo de entrega. O cuidado é que a automação pode produzir evidência completa, mas errada; por isso faça amostragem.

### Análise

Relate os achados repetidos e o tempo de encerramento com contagens. A decisão informada é onde os controles falham repetidamente. O cuidado é que o esforço de auditoria é um custo, e não uma meta, e reduzi-lo não deve reduzir a cobertura.

## Olhar setorial

**Startup.** As obrigações podem chegar de repente com um grande cliente ou uma rodada de investimento. Construa hábitos cedo: revisão por pares, registros de mudanças e controle de acesso no pipeline, para que a evidência exista quando for pedida. Escolha um arcabouço quando o negócio precisar e mapeie-o ao que você já faz.

**Pequena empresa.** Os deveres de conformidade costumam ser fixados por contratos e leis, e os recursos são limitados. Mantenha uma lista curta de obrigações, apoie-se em serviços gerenciados que têm seus próprios relatórios de garantia e guarde uma pasta simples de evidências. Desconfie de comprar ferramentas de conformidade que custam mais que o risco que tratam.

**Grande empresa.** Muitas obrigações se sobrepõem; por isso um arcabouço unificado de controles que mapeia um controle a muitas obrigações economiza grande esforço. Use fontes comuns de evidência, um rastreador compartilhado de achados e um calendário de auditorias para evitar pedidos repetidos. Coordene a auditoria interna, a conformidade e a segurança para que as equipes não sejam examinadas três vezes pela mesma coisa.

**Governo e setor público.** Os deveres de conformidade são extensos e públicos, incluindo regras de compras, registros, acessibilidade e proteção de dados, com auditorias por órgãos nacionais. Documente decisões e evidências pelo período exigido, torne os relatórios consistentes entre órgãos onde possível e mantenha uma linha clara entre a auditoria independente e a gestão. As obrigações podem mudar com eleições e legislação (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos incluem as ferramentas para o registro de controles, a integração do pipeline para evidências, os sistemas de identidade e de logs e o tempo do pessoal de conformidade e das equipes. O esforço inicial para automatizar a evidência é significativo e substitui trabalho manual recorrente.

Os retornos são menor esforço recorrente de auditoria, respostas mais rápidas aos pedidos, menos achados repetidos e uma visão mais honesta da saúde dos controles. Incluem também o custo evitado de surpresas tardias em um ciclo de certificação. Construa o argumento com os seus próprios números: horas de preparação da auditoria antes e depois, tempo de entrega de evidências, número e idade dos achados e o custo de qualquer atraso relacionado à auditoria em um negócio comercial. Evite citar estudos sobre o custo da conformidade a menos que possa rastrear seu método e relevância. Conte o custo do programa e o risco de automatizar demais controles fracos. O tratamento financeiro mais amplo aparece no último tópico da parte anterior (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Preparar-se para a auditoria no último mês.** Produz evidência reconstruída e correria. Registre a evidência enquanto o trabalho acontece.
- **Capturas de tela como evidência.** São manuais, fáceis de alterar e caras. Use registros gerados pelo sistema.
- **Mirar zero achados.** Premia o escopo estreito e problemas escondidos. Acompanhe o encerramento, as repetições e a cobertura.
- **Encerrar achados por afirmação.** O mesmo achado volta. Verifique o encerramento de forma independente.
- **Tratar os auditores como adversários.** Aumenta o custo dos dois lados. Colabore no desenho das evidências preservando a independência.
- **Controles que não servem a nenhuma obrigação.** Custam esforço e geram cinismo. Aposente-os.
- **Automatizar um controle ruim.** Produz evidência de um controle fraco em escala. Teste o controle primeiro.
- **Segregação de funções manual.** Depende da memória. Imponha-a nas ferramentas e reveja as exceções.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Obrigações e controles | Conhecidos por poucas pessoas | Lista de obrigações e de controles | Mapeados a controles, responsáveis e fontes de evidência | Cobertura acompanhada; sobreposição reduzida; controles testados | Arcabouço unificado de controles entre equipes, fornecedores e regimes |
| Evidência | Compilada antes das auditorias | Modelos padrão e uma pasta de evidências | Pipelines e sistemas de registro produzem boa parte da evidência | Taxa de automação, tempo de entrega e esforço geridos | Garantia contínua com os auditores consumindo a evidência diretamente |
| Achados e aprendizado | Achados discutidos e encerrados por afirmação | Achados acompanhados | Achados tratados como registros de problema com verificação independente | Repetições e tempo de encerramento analisados e levados ao desenho dos controles | Achados compartilhados na organização e com parceiros; a melhoria é rotina |

## Lista de verificação

- [ ] As obrigações aplicáveis estão listadas em linguagem simples, com responsáveis.
- [ ] Cada obrigação está mapeada a controles e a uma fonte de evidência.
- [ ] As mudanças em produção trazem automaticamente evidência ligada de pedido, revisão, teste e implantação.
- [ ] Verificações de política impõem no pipeline a revisão e a separação de funções.
- [ ] As trilhas de auditoria são resistentes a adulteração e retidas pelo período exigido.
- [ ] Existe um índice de evidências, e o tempo de entrega dos pedidos é medido.
- [ ] Os auditores são consultados sobre o desenho das evidências, preservando-se a independência.
- [ ] Os achados são registrados como registros de problema e encerrados com verificação independente.
- [ ] Os achados repetidos são ligados aos seus antecessores e examinados quanto à causa.
- [ ] O esforço de auditoria é acompanhado como tendência e revisto quanto à duplicação.

## Prompts de IA

**Mapeie obrigações a controles.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Planeje a automação de evidências.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Analise achados repetidos.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Prepare uma conversa precoce com os auditores.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de conformidade ou de auditoria.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de conformidade traz seu vetor de manipulação, sua barreira de proteção e sua regra de independência.

## Ideias-chave

- Produza evidência como subproduto da entrega, a partir de pipelines e sistemas de registro, e meça quanto é automático.
- Mapeie toda obrigação a um controle, um responsável e uma fonte de evidência.
- Convide cedo os auditores ao desenho das evidências e proteja a independência deles.
- Encerre os achados removendo causas, verifique o encerramento de forma independente e observe a taxa de achados repetidos.
- Evite metas como zero achados e acompanhe o esforço junto com os resultados.
- Imponha a separação de funções nas ferramentas e mantenha as trilhas de auditoria resistentes a adulteração.

## Referências e leituras complementares

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Conformidade regulatória](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Auditoria de tecnologia da informação](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Auditoria contínua](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Lei Sarbanes–Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [Regulamento Geral sobre a Proteção de Dados](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregação de funções](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Auditoria interna](https://en.wikipedia.org/wiki/Internal_audit).
