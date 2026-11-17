# Métricas de governança e risco de IA

**O uso de IA precisa da mesma disciplina de qualquer mudança em um serviço em operação: saiba onde ela está, quem é o responsável, quão arriscada é, como é testada e alterada e o que acontece quando dá errado, com uma supervisão que as pessoas realmente possam exercer.**

## Visão geral e motivação

A IA chega a uma organização por muitas portas. Uma equipe adota um assistente de programação. Um fornecedor acrescenta um recurso generativo a um produto já em uso. Um funcionário cola um documento em uma ferramenta pública. Um departamento constrói um modelo para pontuar requisições. Cada um é um uso de IA com benefícios e riscos próprios, e poucos são visíveis em um só lugar. A governança é o conjunto de estruturas, políticas e práticas que tornam esses usos conhecidos, atribuídos e seguros o bastante. As métricas de risco dizem se a governança funciona.

O ITIL tem os blocos de construção: governança do sistema de valor de serviço, gestão de riscos, habilitação de mudanças, gestão de segurança da informação, gestão de fornecedores e melhoria contínua. As formas de trabalhar ágeis e de DevOps fornecem o hábito da mudança pequena, controlada e reversível e das verificações automatizadas no pipeline. A governança de IA não precisa de um universo à parte. Precisa dessas práticas aplicadas a coisas que se comportam de modo diferente do software convencional.

O que é diferente na IA?

- **O comportamento é estatístico e pode mudar sem uma mudança de código.** Um modelo pode se comportar de modo diferente após uma atualização do fornecedor, uma mudança em suas entradas ou uma mudança no prompt. Os dados que ele vê em produção podem derivar dos dados com que foi testado, um fenômeno conhecido no aprendizado de máquina como deriva (drift). Um sistema pode se degradar em silêncio.
- **As saídas não são totalmente previsíveis.** O teste não consegue cobrir toda entrada; por isso a avaliação é por amostragem e por testes direcionados, e não por prova. Os sistemas podem falhar de modos que seus construtores não previram.
- **Os danos podem ser difusos e desiguais.** O [viés algorítmico](https://en.wikipedia.org/wiki/Algorithmic_bias) é um erro sistemático que leva a resultados injustos para alguns grupos. Pode surgir dos dados, do projeto ou do uso e pode não aparecer nas cifras gerais de exatidão.
- **Surgem novas superfícies de ataque.** A [injeção de prompt](https://en.wikipedia.org/wiki/Prompt_injection) é um ataque em que instruções ocultas nos dados de entrada manipulam um modelo de linguagem para um comportamento não pretendido. Os modelos podem ser induzidos a revelar dados ou a tomar ações que seus donos não pretendiam.
- **A dependência de fornecedores é profunda.** Muitas capacidades de IA vêm de provedores externos, com visibilidade limitada de como são construídas ou alteradas. As medidas de fornecedores importam mais (veja o tópico 8.4, Métricas de fornecedores e contratos).
- **As regras estão surgindo e diferem por lugar.** As leis, normas e orientações sobre IA se desenvolvem depressa. A [Lei de Inteligência Artificial (AI Act)](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) da União Europeia adota uma abordagem baseada em risco com obrigações que se aplicam em fases, e outras jurisdições seguem caminhos diferentes. Normas como a ISO/IEC 42001 sobre sistemas de gestão de IA e o NIST AI Risk Management Framework oferecem estruturas. As afirmações deste tópico sobre regras específicas estão datadas de outubro de 2026 e devem ser conferidas de novo, e o aconselhamento jurídico deve guiar suas obrigações. O campo mais amplo é descrito de vários modos como [IA responsável](https://en.wikipedia.org/wiki/Responsible_AI) ou IA confiável, e a questão de como a lei deve tratar a IA é objeto da [regulação da inteligência artificial](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

A governança pode falhar de dois modos opostos. Pode ser tão pesada que as equipes a evitam, e o uso de IA vai para a clandestinidade como [TI sombra (shadow IT)](https://en.wikipedia.org/wiki/Shadow_IT). Ou pode ser um exercício de papel, com uma política e um registro que não refletem a prática. Os objetivos ágeis sugerem o caminho do meio: envolvimento contínuo das partes interessadas na definição das regras, aprovações pequenas e rápidas para usos de baixo risco, escrutínio mais profundo onde o dano é possível e melhoria contínua dos controles à medida que a experiência cresce. Pessoas motivadas, com limites claros e confiadas a usar o julgamento dentro deles, relatarão problemas. Pessoas que temem punição não relatarão.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica às medidas de governança: quando a "porcentagem de usos de IA registrados" é uma meta, os registros se enchem de entradas que ninguém lê, e os usos reais ficam fora de vista (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico se apoia nos tópicos de risco, conformidade e segurança da Parte 8 e nos tópicos anteriores desta parte.

## Princípios-chave

- **Saiba onde a IA é usada.** Um registro de usos, incluindo os embutidos em produtos e os que o pessoal adota por conta própria, é a base.
- **Case o escrutínio com o risco.** Leve para usos de baixo risco, mais profundo para os de consequência.
- **Trate mudanças de modelos e prompts como mudanças.** Precisam de teste, aprovação proporcional ao risco e capacidade de rollback.
- **Avalie antes e durante o uso.** Teste em casos realistas e continue testando em produção.
- **Mantenha uma supervisão humana significativa.** Uma pessoa deve poder entender, questionar e sobrepor, e ter o tempo e a autoridade para isso.
- **Aprenda com os incidentes sem culpa.** As falhas de IA são novas, e o relato é como a organização aprende.
- **Torne rápida a aprovação dos casos seguros.** Uma governança lenta empurra o uso para fora de vista.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura do registro de usos de IA | Proporção dos usos de IA achados por meios independentes que estão no registro com um responsável e uma classe de risco | usos no registro com responsável e classe de risco / usos achados por descoberta independente (compras, despesas, identidade, rede e relatos do pessoal) | porcentagem | Registro, dados de compras e despesas, logs de identidade, pesquisas | Governança; gestão de ativos de TI; gestão de riscos | Trabalho visível e responsabilidade clara | Trimestral |
| Atualidade da avaliação de risco | Proporção dos usos de risco médio e alto com uma avaliação de risco dentro do ciclo exigido | usos avaliados dentro do ciclo / usos de risco médio e alto | porcentagem | Avaliações de risco | Gestão de riscos; gestão de segurança da informação | Reflexão regular sobre os riscos | Trimestral |
| Cobertura do controle de mudanças | Proporção das mudanças em modelos, prompts, ferramentas e fontes de dados em produção que passaram por controle de mudanças com os testes exigidos | mudanças com registro de mudança, testes e aprovação proporcional ao risco / mudanças detectadas | porcentagem | Registros de mudanças comparados com o histórico de versões e as notas de release de fornecedores | Habilitação de mudanças; gestão de releases e implantação | Mudanças pequenas, controladas e reversíveis | Mensal |
| Atualidade da avaliação | Proporção dos usos em produção com uma avaliação atual (exatidão, segurança e justiça onde relevante) e resultados dentro da tolerância | usos com uma avaliação dentro do ciclo e resultados aceitáveis / usos em produção no escopo | porcentagem | Registros de avaliações | Garantia de qualidade; gestão de riscos | Definição de pronto para o comportamento | Trimestral |
| Taxa de evidência de supervisão humana | Proporção das saídas ou decisões de consequência amostradas com uma revisão humana registrada e substantiva | itens amostrados com revisão documentada que poderia ter mudado o resultado / itens amostrados | porcentagem | Registros de decisões amostrados | Gestão de riscos; governança | Revisão antes do release | Mensal |
| Taxa de incidentes de IA e tempo até conter | Incidentes envolvendo IA (saída danosa, exposição de dados, ação insegura) por uso e o tempo para contê-los | incidentes por uso em produção por trimestre; mediana e 85º percentil das horas da detecção à contenção | incidentes; horas | Registros de incidentes marcados como IA | Gestão de incidentes; gestão de segurança da informação | Resposta e aprendizado sem culpa | Trimestral |
| Atualidade da due diligence de IA de fornecedores | Proporção dos fornecedores que oferecem recursos de IA em serviços críticos cuja avaliação específica de IA está atual | fornecedores com avaliação de IA atual / fornecedores críticos com recursos de IA | porcentagem | Avaliações de fornecedores | Gestão de fornecedores; gestão de riscos | Revisão regular das dependências | Trimestral |

Defina "uso de IA" de modo amplo no registro: modelos que você constrói, serviços que você compra, recursos dentro de produtos e ferramentas que o pessoal usa. As classes de risco e os ciclos são definidos na política. A cobertura do registro é medida contra a descoberta independente, e não contra o próprio registro. A cobertura do controle de mudanças exige um modo de detectar mudanças: controle de versão, avisos de fornecedores, monitoramento de configuração. A evidência de supervisão humana exige que a revisão pudesse ter mudado o resultado, e não que um botão tenha sido clicado. As taxas de incidentes descrevem usos e sistemas e não são usadas para avaliar pessoas.

## Recomendações

### Conheça e classifique

**1. Construa o registro achando, além de perguntando.** Comece com uma pesquisa e uma política, depois confira contra registros de compras e despesas, logs de identidade e de acesso, dados de rede e de cobrança de nuvem e atualizações de produtos de fornecedores. Inclua os recursos de IA embutidos em ferramentas que você já possui. Espere surpresas: as pessoas usam ferramentas que você não aprovou, muitas vezes por boas razões. Trate-as como informação (veja o tópico 7.2, Métricas de ativos de software e licenças).

**2. Atribua um responsável e uma classe de risco a cada uso.** O responsável é a pessoa que responde pelo uso e seus resultados. A classe de risco reflete o dano se o sistema falhar: quem é afetado, se há decisões sobre pessoas, se age por conta própria, que dados toca e quão reversíveis são os efeitos. Use poucas classes, com regras claras. Apoie-se em arcabouços reconhecidos, como o NIST AI Risk Management Framework, a ISO/IEC 42001 e a lei aplicável, e adapte-os ao seu contexto.

**3. Torne proporcional a aprovação.** Para usos de baixo risco, um registro rápido de autoatendimento com algumas perguntas basta. Para usos de consequência, exija uma avaliação de risco, resultados de avaliação, um projeto definido de supervisão humana e uma aprovação. Um caminho rápido para a maioria segura mantém as pessoas dentro do sistema, e um caminho mais lento para os poucos perigosos lhes dá o escrutínio adequado.

### Teste e controle a mudança

**4. Avalie em casos realistas, antes e durante o uso.** Monte um conjunto de casos de teste que reflitam entradas reais, incluindo as difíceis e as adversariais, e pontue as saídas contra critérios escritos. Inclua verificações de segurança e de justiça onde pessoas puderem ser afetadas. Refaça as avaliações em um cronograma e sempre que o modelo, o prompt ou os dados mudarem. Um red team, um grupo que ataca deliberadamente o sistema para achar fraquezas, é uma prática útil para usos de maior risco. Veja as práticas de amostragem para o trabalho assistido (veja o tópico 10.2, Medir o trabalho assistido por IA).

**5. Ponha modelos, prompts e ferramentas sob controle de mudanças.** Versione prompts e configurações como código. Exija testes e aprovação proporcionais ao risco para as mudanças, registre-as e mantenha a capacidade de rollback. Acompanhe as atualizações de modelos conduzidas pelo fornecedor, que podem mudar o comportamento sem aviso, e combine com os fornecedores como você será avisado. Trate uma atualização de modelo como uma mudança que precisa de controle (veja o tópico 4.3, Métricas de habilitação de mudanças).

**6. Monitore em produção.** Observe a deriva nas entradas e saídas, as taxas crescentes de erro e de alteração e os padrões incomuns. Defina limites que disparem revisão. Para os sistemas que tomam ações, monitore os logs de ações. O monitoramento é como você acha os problemas que o teste perdeu.

### Mantenha real a supervisão humana

**7. Projete uma supervisão que possa funcionar.** Uma pessoa que revê toda saída de um sistema rápido não consegue acompanhar, e uma pessoa a quem se pede que aprove o que não consegue entender não está exercendo supervisão. Defina o que o humano faz, que informação tem, quanto tempo e que autoridade de sobrepor. Amostre as revisões para conferir que são substantivas. Fique atento ao viés de automação, a tendência a aceitar a saída da máquina (veja o tópico 10.1, A IA na medição da gestão de serviços).

**8. Mantenha trilhas de auditoria.** Registre entradas, saídas, versões, decisões e ações de um modo que apoie a investigação, sujeito às regras de privacidade e aos limites de retenção. Uma [trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail) permite responder o que aconteceu e por quê. Para decisões de consequência sobre pessoas, considere que explicação você pode dar e que via de recurso existe (veja o tópico 8.3, Métricas de conformidade e auditoria).

**9. Proteja os dados e resista à manipulação.** Controle os dados que os sistemas de IA podem ver e enviar. Teste a injeção de prompt e o vazamento de dados, especialmente nos sistemas que leem conteúdo externo ou têm acesso a ferramentas. Aplique os princípios de privilégio mínimo usados para os agentes que agem (veja o tópico 10.3, Métricas de agentes de IA e chatbots, e o tópico 8.1, Métricas de incidentes de segurança e vulnerabilidades). Considere a privacidade já no projeto e envolva especialistas em proteção de dados.

### Responda e aprenda

**10. Trate os incidentes de IA como incidentes.** Defina o que conta: saídas danosas ou enviesadas, exposição de dados, ações inseguras, erros significativos que chegam aos usuários. Use seu processo normal de incidentes com a marcação de IA, reveja sem culpados e leve as lições às avaliações e aos controles. Facilite o relato para o pessoal e os usuários. O tempo até conter importa tanto quanto em qualquer incidente (veja o tópico 3.4, Métricas de incidentes graves).

**11. Gerencie a IA dos fornecedores.** Pergunte aos fornecedores que recursos de IA usam, como são testados e alterados, como os dados são tratados e como os incidentes são relatados. Acrescente termos específicos de IA aos contratos onde importar, incluindo aviso de mudanças materiais de modelos. Reavalie os fornecedores críticos em um ciclo (veja o tópico 8.4, Métricas de fornecedores e contratos).

**12. Reveja a própria governança.** A cada trimestre, confira o que as medidas mostram: onde os usos ficaram sem registro, quais aprovações foram lentas demais, quais controles não pegaram problemas. Ajuste a política e os caminhos. Envolva pessoal e usuários na revisão. Mantenha as regras curtas, claras e atuais e aposente os controles que não merecem o seu custo.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura do registro de usos de IA | Registrar usos triviais para elevar a porcentagem; denominadores limitados ao que está registrado | Descoberta independente para o denominador; amostrar entradas do registro quanto à qualidade; anistia para usos não registrados |
| Atualidade da avaliação de risco | Avaliações superficiais que sempre passam; avaliar usos de baixo risco | Rever a profundidade das avaliações; conferir que a classe de risco combina com os critérios |
| Cobertura do controle de mudanças | Não detectar mudanças de fornecedores; registrar mudanças depois do fato | Detecção por histórico de versões e avisos de fornecedores; registros de mudanças com data e hora anteriores ao release |
| Atualidade da avaliação | Avaliações em casos fáceis; escolher tolerâncias depois de ver os resultados | Conjuntos de teste revistos por parte independente; limites definidos de antemão |
| Taxa de evidência de supervisão humana | Clicar em aprovar sem ler; documentar uma revisão que não poderia mudar o resultado | Amostrar revisões quanto à substância; erros conhecidos plantados; carga do revisor |
| Taxa de incidentes de IA e tempo até conter | Não relatar incidentes; estreitar a definição | Relato fácil e sem culpa; comparar com as queixas de usuários e os achados de auditoria |
| Atualidade da due diligence de IA de fornecedores | Questionários respondidos pelo marketing; avaliações sem evidência | Exigências de evidência para fornecedores críticos; verificação independente |

Uma leitura saudável é um registro que a descoberta independente confirma, avaliações que combinam com o risco, mudanças que passam pelo controle, avaliações mantidas atuais, supervisão que acha erros reais, incidentes relatados de bom grado e contidos depressa e fornecedores que compartilham o que mudam.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Aprovação central para todo uso de IA | Controle, consistência | Lenta; empurra o uso para a clandestinidade |
| Registro de autoatendimento com níveis de risco | Rápido para a maioria segura | Exige bons critérios e verificações pontuais |
| Proibição de ferramentas públicas | Reduz a exposição de dados | Uso sombra; benefícios perdidos |
| Ferramentas aprovadas com orientação | Uso visível e gerenciável | Exige provisão e apoio |
| Documentação pesada | Evidência para auditoria | Ônus; pode não refletir a prática |
| Avaliação automatizada no pipeline | Contínua, consistente | Exige bons conjuntos de teste; pode perder novas falhas |
| Revisão humana de tudo | Segurança | Não escalável; fadiga |
| Amostragem baseada em risco | Prática | Algumas falhas escapam |

A resposta pragmática é oferecer ferramentas aprovadas e um caminho rápido para usos de baixo risco, concentrar o escrutínio nos de consequência, automatizar a avaliação e o monitoramento e manter a supervisão humana onde ela pode realmente funcionar.

## Perguntas para discutir com sua equipe

**1. Onde usamos IA hoje que não está em nenhuma lista?**
Perguntem à equipe com honestidade e ofereçam anistia. Olhem as ferramentas usadas para redação, resumo, programação e análise, incluindo as dentro de produtos. O facilitador deve registrar os usos sem julgamento. Combinem quem os registrará e quais precisam de um olhar mais atento.

**2. Se o nosso uso de IA de maior consequência cometesse um erro danoso, como descobriríamos e o que faríamos?**
Percorram a detecção, a contenção, a comunicação e o aprendizado. Anotem lacunas de monitoramento, de responsabilidade e de autoridade para desligá-lo. Combinem uma melhoria.

**3. O que pode mudar sob nossos pés sem que ninguém aprove?**
Listem modelos, prompts, fontes de dados e atualizações de fornecedores. Para cada um, perguntem como saberíamos que mudou e como o testaríamos. Combinem onde acrescentar detecção ou um teste.

**4. A pessoa que revê a saída da IA em nosso processo conseguiria realisticamente pegar um erro grave?**
Olhem o volume, a informação, o tempo e a autoridade. Testem com um erro plantado. Se a revisão não consegue funcionar, redesenhem o processo antes de acrescentar mais IA.

**5. Quais das nossas regras um colega ocupado acharia fáceis de seguir, e quais contornaria?**
Listem as regras atuais e testem-nas contra fluxos de trabalho reais. Discutam por que as regras são contornadas. Combinem mudanças que tornem o caminho seguro o caminho fácil.

**6. O que nossos fornecedores nos contaram sobre sua IA, e o que não perguntamos?**
Conferam questionários e contratos recentes. Identifiquem fornecedores críticos com recursos de IA e as lacunas de informação. Combinem perguntas para a próxima revisão.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega constroem e adotam recursos de IA e sentem a governança como atrito ou como ajuda. Devem registrar os usos cedo, testar em casos realistas, pôr prompts e modelos sob controle de versão e projetar uma supervisão que funcione. Ganham com a aprovação rápida de usos de baixo risco.

### Equipes de serviço e operações

As equipes de operações rodam a IA em produção e respondem a seus incidentes. Devem monitorar a deriva, manter logs de ações, marcar os incidentes de IA e ter a autoridade e os meios de desligar um sistema. Também usam IA elas mesmas e devem seguir as mesmas regras.

### Liderança e governança

Os líderes definem o apetite de risco e respondem pelos resultados. Devem financiar o registro, a avaliação e o monitoramento, aceitar que alguns usos de IA não passarão, pedir a descoberta independente dos usos e acompanhar os incidentes e o tempo até conter. Os órgãos de governança devem manter as regras curtas, revê-las regularmente e garantir que pessoal e usuários tenham voz.

### Clientes e usuários

Os usuários são afetados pelas decisões e saídas da IA, muitas vezes sem saber. Merecem saber quando a IA está envolvida em assuntos que os afetam, alcançar uma pessoa e contestar decisões. As queixas e os recursos são evidência essencial de como a governança funciona na prática.

## Na prática: um exemplo de gestão de serviços

A divisão de tecnologia e operações de um banco regional adota uma política de IA depois que um funcionário cola dados de clientes em uma ferramenta pública. A equipe de conformidade publica um registro e espera que todo uso seja listado. Os números abaixo são ilustrativos.

Três meses depois, o registro lista 38 usos de IA. O chefe de risco de tecnologia confere por meios independentes: dados de compras e despesas, logs de identidade mostrando logins em serviços de IA, dados de rede e uma pesquisa anônima do pessoal. A descoberta acha 94 usos; assim a cobertura do registro é de 40%. Dezessete são recursos dentro de ferramentas que o banco já licencia, e doze são ferramentas públicas usadas pelo pessoal. Dos 38 usos registrados, só 14 têm uma classe de risco, e os três de maior risco, um modelo que pontua alertas de fraude, um chatbot para clientes e uma ferramenta que resume queixas, não têm avaliação no último ano. As mudanças na configuração do modelo de fraude e nos prompts do chatbot são feitas diretamente pelas equipes, e os registros de mudanças do último trimestre cobrem 21% das mudanças achadas no histórico de versões. Uma amostra de 60 alertas de fraude descartados pelo modelo mostra revisão humana registrada em 52 deles, mas um conjunto plantado de cinco falhas conhecidas foi pego por apenas um revisor, porque os revisores tratam cada um várias centenas de alertas por dia. Um incidente, em que o chatbot deu aos clientes um valor de tarifa desatualizado, foi descoberto por uma queixa e levou seis dias para ser contido porque ninguém tinha autoridade para desligá-lo.

O chefe de risco de tecnologia redesenha a governança com as equipes. Um registro curto de autoatendimento com cinco perguntas coloca no registro, em minutos, os usos de baixo risco, e um período de anistia estimula o pessoal a listar as ferramentas que usa. As classes de risco se baseiam em dano, dados e autonomia. Os usos de maior risco exigem uma avaliação, uma avaliação de desempenho em casos realistas e adversariais e um projeto definido de supervisão. Modelos, prompts e ferramentas passam a ter controle de mudanças com testes proporcionais ao risco, e os prompts do chatbot são versionados com rollback. O processo de alertas de fraude é redesenhado para que os revisores tratem menos alertas, mais bem priorizados, e erros plantados testam a detecção. Um responsável nomeado para cada uso de alto risco tem a autoridade de desligá-lo, e a resposta a incidentes cobre a IA. Os fornecedores de nuvem e de IA do banco são consultados sobre que recursos de IA usam e como as mudanças são notificadas.

Dois trimestres depois, a cobertura do registro por descoberta independente é de 88%, todos os usos de alto risco são avaliados e examinados dentro do ciclo, a cobertura do controle de mudanças é de 84%, a detecção de erros plantados pelos revisores sobe para 4 de 5 e o tempo mediano para conter um incidente de IA é de 3 horas. O pessoal usa ferramentas aprovadas para a maioria das tarefas. Um executivo sênior pede uma meta de 100% de cobertura do registro. O chefe de risco de tecnologia propõe acompanhar a cobertura contra a descoberta independente, a atualidade das avaliações e o tratamento de incidentes e explica que um registro sem descoberta pode chegar a 100% e ainda assim perder o risco. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Governe a IA como uma mudança em um serviço em operação, com uma revisão leve e regular e as partes interessadas à mesa, e não como uma aprovação única. O cuidado é que portões de aprovação pesados fazem as equipes esconder o uso de IA.

### IA

Mantenha um registro de todo uso de IA com um responsável, uma classe de risco, uma data de avaliação e um ponto de supervisão humana e meça a cobertura contra a descoberta independente. Teste se a supervisão pode ser exercida. O cuidado é que este livro não dá aconselhamento jurídico, e as obrigações variam por lugar e ao longo do tempo; por isso confira-as com seu próprio assessor jurídico.

### Automação

Automatize a descoberta e a coleta de evidências das mudanças em modelos, prompts e dados e meça a automação pelas mudanças perdidas. O cuidado é que as suítes de avaliação automatizadas testam aquilo para que foram construídas; por isso acrescente novos testes à medida que as falhas aparecem.

### Análise

Relate a atualidade das avaliações de risco e das avaliações de desempenho com datas e contagens. A decisão informada é onde a supervisão é fina. O cuidado é que as contagens de incidentes de IA são pequenas e desiguais; por isso combine-as com relatos de quase acidentes.

## Olhar setorial

**Startup.** A velocidade importa, e os riscos são sobretudo a exposição de dados e as saídas pouco confiáveis. Mantenha uma lista curta de ferramentas e usos com responsáveis, defina algumas regras claras sobre que dados podem ser usados onde e versione os prompts. Revisite à medida que crescem as exigências de garantia dos clientes.

**Pequena empresa.** O pessoal usará ferramentas públicas. Ofereça uma opção aprovada, escreva uma regra de uma página sobre dados e reveja como as ferramentas são usadas. Pergunte aos fornecedores sobre seus recursos de IA e guarde um registro de onde a IA toma decisões sobre clientes ou pessoal.

**Grande empresa.** A escala precisa de um modelo operacional: registro, níveis de risco, padrões de avaliação, controle de mudanças e processo de incidentes, integrados às funções de risco e segurança existentes. Use a descoberta independente, automatize a avaliação nos pipelines e alinhe-se às normas. Dê às equipes um caminho rápido.

**Governo e setor público.** As decisões que afetam cidadãos trazem deveres de transparência, justiça e recurso, e os arcabouços de compras e jurídicos moldam o que é permitido. Mantenha registros públicos dos usos de alto impacto onde exigido, avalie o impacto sobre direitos, mantenha os humanos de forma significativa no circuito e confira a lei e a orientação atuais (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos incluem o esforço para construir e manter o registro, a ferramenta ou análise de descoberta, as avaliações de risco, os conjuntos e execuções de avaliação, o controle de mudanças de prompts e modelos, o monitoramento, o treinamento e a capacidade de resposta a incidentes. A governança também acrescenta algum atraso aos usos de maior risco. Esses custos escalam com o número e o risco dos usos, o que é uma razão para manter leve a aprovação de baixo risco.

Os retornos incluem dano e exposição evitados, menos surpresas em auditorias e revisões regulatórias, adoção segura mais rápida por meio de regras claras e a confiança de clientes e pessoal. Construa o argumento a partir dos seus próprios dados: o número de usos achados fora do registro e os dados que tocam, os incidentes e seu custo, o tempo gasto em aprovações ad hoc antes e depois e os achados em auditorias. Evite citar estatísticas publicadas sobre incidentes de IA ou multas sem uma fonte rastreável e relevância para o seu contexto. Inclua o custo de não governar, que inclui a possibilidade de dano legal e de reputação significativo (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Um registro que ninguém confere.** A cobertura parece alta e perde os usos reais. Use a descoberta independente.
- **Proibições gerais.** Empurram o uso para a clandestinidade. Ofereça ferramentas aprovadas e um caminho rápido.
- **Tratar prompts e modelos como configuração sem dono.** O comportamento muda sem ser notado. Ponha-os sob controle de mudanças.
- **Avaliar uma só vez.** Os sistemas derivam e mudam. Refaça em um cronograma e a cada mudança.
- **Supervisão só no nome.** Os revisores não pegam o que não conseguem ver. Teste com erros plantados e corrija a carga.
- **Nenhuma autoridade para desligar.** A contenção leva dias. Nomeie responsáveis com o poder de parar um sistema.
- **Ignorar a IA dos fornecedores.** Seu risco inclui o deles. Pergunte, contrate e reavalie.
- **Regras que ninguém consegue seguir.** São contornadas. Mantenha-as curtas e torne fácil o caminho seguro.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Conhecer e classificar | Nenhuma visão do uso de IA | Política e uma lista parcial | Registro com responsável e classe de risco; descoberta independente usada para a cobertura | Cobertura, atualidade das avaliações e tempos de aprovação geridos | Visão de registro compartilhada entre unidades de negócio e fornecedores; classes revistas com reguladores e usuários |
| Teste e mudança | Ad hoc | Alguma avaliação para alguns usos | Avaliação em casos realistas; prompts e modelos sob controle de mudanças | Avaliação contínua e monitoramento de deriva; cobertura gerida | Avaliação e mudança automatizadas e baseadas em risco nos pipelines, auditadas de forma independente |
| Supervisão e aprendizado | Apoio na confiança | A revisão existe em princípio | Supervisão projetada e amostrada; incidentes de IA marcados e revistos sem culpa | Testes de erros plantados, tempo até conter e avaliações de fornecedores geridos | Supervisão, aprendizado com incidentes e política desenvolvidos em conjunto com pessoal, usuários e parceiros |

## Lista de verificação

- [ ] Um registro lista os usos de IA com um responsável e uma classe de risco, conferido contra a descoberta independente.
- [ ] Existe um caminho rápido para usos de baixo risco e um mais profundo para os de consequência.
- [ ] Os usos de maior risco têm uma avaliação de risco atual e um projeto de supervisão definido.
- [ ] As avaliações em casos realistas e adversariais estão atuais e são refeitas a cada mudança.
- [ ] Prompts, modelos, ferramentas e fontes de dados são versionados e estão sob controle de mudanças.
- [ ] O monitoramento em produção observa deriva, erros, alterações e ações incomuns.
- [ ] A supervisão é testada com erros plantados, e a carga dos revisores é realista.
- [ ] As trilhas de auditoria apoiam a investigação dentro das regras de privacidade e retenção.
- [ ] Os incidentes de IA são marcados, revistos sem culpa, e os responsáveis podem desligar os sistemas.
- [ ] Os fornecedores com recursos de IA são avaliados e obrigados a notificar mudanças materiais.

## Prompts de IA

**Redija uma classificação de risco para usos de IA.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Projete um formulário de registro.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Planeje um conjunto de avaliação.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Revise um incidente de IA.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de governança ou de risco de IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de governança de IA usa evidência independente e traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Construa o registro de IA por descoberta independente e case o escrutínio com o risco, com um caminho rápido para os usos seguros.
- Trate modelos, prompts, ferramentas e fontes de dados como mudanças que precisam de teste, aprovação e rollback.
- Avalie antes do uso e durante o uso, em casos realistas e adversariais.
- Projete uma supervisão humana que possa funcionar e teste-a com erros plantados.
- Trate os incidentes de IA como os outros incidentes, com revisão sem culpa, e dê aos responsáveis o poder de desligar sistemas.
- Pergunte aos fornecedores sobre sua IA e mantenha curtas as regras e fácil o caminho seguro.

## Referências e leituras complementares

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Viés algorítmico](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Injeção de prompt](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Lei de Inteligência Artificial](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [IA responsável](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulação da inteligência artificial](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [TI sombra](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Trilha de auditoria](https://en.wikipedia.org/wiki/Audit_trail).
