# Panorama de ferramentas

**Escolha ferramentas pelas perguntas que você precisa responder e pelos dados em que pode confiar, mantenha os dados portáveis e gaste menos com plataformas do que com os hábitos que tornam os números dignos de leitura.**

## Visão geral e motivação

As ferramentas são onde os programas de métricas mais costumam errar, em duas direções opostas. Algumas organizações compram primeiro uma grande plataforma de análise e descobrem depois que não têm definições combinadas, dados limpos nem público. Outras constroem uma pilha de scripts e planilhas que uma só pessoa entende, e o programa acaba quando essa pessoa vai embora. Ambas começam pela ferramenta e ignoram as perguntas que ela devia responder.

O panorama é cheio e muda depressa; por isso este tópico é deliberadamente neutro quanto a fornecedores. Descreve os tipos de ferramentas, os fluxos de dados entre elas, as compensações entre construir e comprar e critérios de escolha. Não nomeia produtos, porque os nomes de produtos envelhecem depressa e um livro é um guia ruim para recursos e preços atuais. Os princípios de medição não mudam com o fornecedor: saiba o que está medindo, de onde vêm os dados, quem é o dono deles e como serão lidos.

A maior parte dos dados de que um programa de métricas de serviço precisa já existe em sistemas de registro. As ferramentas de [gestão de serviços de TI](https://en.wikipedia.org/wiki/IT_service_management) guardam incidentes, requisições, problemas, mudanças e registros de configuração. Os sistemas de controle de versão, build, teste e implantação guardam a história do trabalho de engenharia. Os sistemas de monitoramento e de [observabilidade](https://en.wikipedia.org/wiki/Observability_(software)) guardam dados de disponibilidade, latência e erros. As ferramentas de pesquisa, os sistemas financeiros, os sistemas de recursos humanos e os repositórios de contratos guardam o resto. Um programa de métricas junta essas fontes sem perturbar o trabalho feito nelas (veja o tópico 1.5, Fontes de dados e instrumentação).

O movimento dos dados das fontes até um lugar onde possam ser analisados é um [pipeline de dados](https://en.wikipedia.org/wiki/Data_pipeline), e o padrão clássico é [extrair, transformar, carregar (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load): ler das fontes, remodelar e limpar e escrever em um repositório. O repositório pode ser um [data warehouse](https://en.wikipedia.org/wiki/Data_warehouse), um depósito integrado de dados de vários sistemas organizado para análise. Os programas chegam a esses sistemas por meio de uma [interface de programação de aplicações (API)](https://en.wikipedia.org/wiki/Application_programming_interface), que é como um software pede dados a outro de um modo definido. A qualidade do que flui determina a qualidade de todo gráfico. A [qualidade de dados](https://en.wikipedia.org/wiki/Data_quality) cobre exatidão, completude, consistência e oportunidade, e a disciplina que a sustenta é a [governança de dados](https://en.wikipedia.org/wiki/Data_governance).

O lado financeiro merece cuidado. O [custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership) de uma ferramenta inclui licenças, infraestrutura, integração, treinamento, administração e o custo de deixá-la. O [aprisionamento ao fornecedor (vendor lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in) é a situação em que trocar de fornecedor é tão caro que o cliente fica, na prática, preso. Os programas de métricas são especialmente expostos, porque definições, histórico e painéis se acumulam dentro de uma ferramenta, e extraí-los depois é difícil.

Os objetivos ágeis moldam a abordagem. A entrega contínua se aplica ao programa: monte o caminho funcional mais fino de uma fonte a uma visão para uma equipe, aprenda com o uso e estenda. O envolvimento contínuo das partes interessadas significa que as pessoas que usarão os números participam das escolhas de ferramentas. A melhoria contínua e a evolução permanente significam que se espera que a ferramenta mude; por isso a portabilidade importa mais que a perfeição. Um ritmo sustentável significa que o programa não vira um projeto de engenharia de dados que esfomeia o trabalho que mede. E pessoas motivadas trabalham melhor com ferramentas que ajudaram a escolher e entendem do que com ferramentas impostas de cima, em particular as que parecem vigilância (veja o tópico 11.3, Implantar métricas sem criar medo).

O tópico se apoia na orientação de projeto de painéis (veja o tópico 11.1, Projetar um painel de métricas de serviço) e nos tópicos de governança da Parte 1.

## Princípios-chave

- **Perguntas antes de ferramentas.** Escreva primeiro as perguntas e as medidas e depois veja de que ferramenta precisam.
- **Use os sistemas de registro.** Tome os dados de onde o trabalho acontece e evite pedir às pessoas que os insiram duas vezes.
- **Mantenha as definições fora da ferramenta.** Mantenha as definições de métricas em uma forma simples e portável que sobreviva a uma troca de plataforma.
- **Prefira dados portáveis.** Guarde os dados em formatos abertos, com interfaces documentadas, e mantenha uma saída.
- **Comece fino e cresça.** Uma fonte, uma visão, uma equipe, depois estenda.
- **Conte o custo total.** As licenças são uma fração do custo de integração, limpeza de dados e manutenção.
- **Proteja as pessoas.** As ferramentas devem agregar a equipes e serviços, impor regras de acesso e dificultar a vigilância.
- **Trate o pipeline como um serviço.** Precisa de um responsável, monitoramento, testes e um modo de tratar falhas.

## Definições de métricas

As medidas abaixo descrevem a saúde da ferramenta de métricas e de seu suprimento de dados. São para a equipe do programa, para manter honesta a infraestrutura, e não devem ser usadas para avaliar pessoas.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de fontes | Proporção dos sistemas de registro necessários para as medidas combinadas que alimentam o repositório de métricas automaticamente | fontes conectadas e testadas / fontes necessárias para as medidas combinadas | porcentagem | Inventário de fontes; configuração do pipeline | Gestão de informação e tecnologia; gestão de configuração de serviços | Entrega contínua do pipeline | Trimestral |
| Confiabilidade do pipeline | Proporção das cargas de dados agendadas que terminam no prazo com verificações aprovadas | cargas no prazo com verificações aprovadas / cargas agendadas | porcentagem | Logs do pipeline e resultados de testes | Monitoramento e gestão de eventos | Testes automatizados e feedback rápido | Semanal |
| Tempo até uma nova medida | Tempo decorrido desde um pedido aprovado de nova medida até sua disponibilidade com um cartão de definição | dias da aprovação à publicação, mediana e 85º percentil | dias | Registros de pedidos e de releases | Gestão de requisições de serviço; habilitação de mudanças | Pequenos incrementos de valor | Trimestral |
| Taxa de reconciliação | Proporção das cifras-chave que combinam entre o repositório de métricas e o sistema de origem em uma verificação por amostragem | cifras que combinam dentro da tolerância / cifras conferidas | porcentagem | Verificações de reconciliação | Gestão de informação e tecnologia | Feedback confiável | Mensal |
| Parcela de esforço manual | Proporção do esforço em relatórios recorrentes gasta em coleta e limpeza manuais | horas em etapas manuais / horas totais em relatórios recorrentes | porcentagem | Estimativas de tempo; pesquisa com a equipe | Melhoria contínua | Eliminar o trabalho repetitivo | Trimestral |
| Prontidão de saída | Se as definições, o histórico e os painéis podem ser exportados em uma forma documentada e utilizável | exportações testadas e completas / testes de exportação planejados | porcentagem | Registros de testes de exportação | Gestão de fornecedores; gestão da continuidade de serviço | Escolhas sustentáveis | Anual |
| Custo de ferramentas por equipe atendida | Custo anual total das ferramentas do programa dividido pelas equipes que ele atende | (licenças + infraestrutura + esforço de manutenção) / equipes atendidas | moeda por equipe | Registros financeiros e de esforço | Gestão financeira de serviços | Ritmo sustentável | Anual |

Conte as fontes pelo que as medidas combinadas precisam, e não pelo que existe, para que a cobertura não suba conectando sistemas irrelevantes. A reconciliação exige escolher de antemão uma amostra e uma tolerância. O custo de ferramentas por equipe atendida é uma cifra descritiva usada para comparar opções, e não uma meta a empurrar para baixo. Inclui o esforço das pessoas que mantêm o pipeline.

## Recomendações

### Decida do que você precisa

**1. Escreva os requisitos como perguntas e medidas.** Liste as medidas que o programa combinou publicar (veja o tópico 11.1, Projetar um painel de métricas de serviço), as fontes de que cada uma precisa, quão atual cada uma deve ser, quem pode vê-la e por quanto tempo o histórico deve ser guardado. Distinga o indispensável das preferências. Um breve documento de duas páginas vale mais que um longo pedido de propostas.

**2. Inventarie o que você já possui.** Muitas organizações têm recursos de análise em suas ferramentas de gestão de serviços, engenharia e monitoramento que não usam. Muitas têm planilhas, scripts e relatórios que já respondem a parte da necessidade. Comece vendo o que eles conseguem fazer. A ferramenta mais barata é a que já foi paga e já é compreendida.

**3. Faça o balanço dos dados antes da ferramenta.** Para cada fonte, confira se os dados são completos, inseridos de modo consistente e acessíveis por uma interface. Uma ferramenta não conserta categorias de incidentes que ninguém usa, registros de mudanças criados depois do fato nem registros de data e hora que são sobrescritos. Parte do trabalho inicial mais valioso é corrigir a captura de dados na fonte (veja o tópico 7.4, Métricas de qualidade de configuração e CMDB).

### Construir, comprar ou combinar

**4. Compare construir e comprar pelo custo total e pelo ajuste.** Comprar uma plataforma de análise ou um produto empacotado de análise de engenharia traz conectores prontos, gráficos e suporte, ao preço de licenças, de um modelo de mundo fixo e de dependência. Construir um pipeline e visões traz ajuste e controle, ao preço de tempo de engenharia e manutenção. A maioria das organizações acaba combinando: usa os relatórios embutidos onde são bons o bastante, usa uma ferramenta geral de análise para as visões e constrói conectores finos onde nada mais serve.

**5. Teste um protótipo com dados reais.** Antes de se comprometer, rode um teste com prazo definido com duas ou três de suas medidas, usando dados reais e usuários reais. Confira quanto tempo as conexões levaram, quão bem a ferramenta tratou suas definições, se conseguia mostrar distribuições e percentis e como controlava o acesso. As demonstrações de marketing usam dados limpos, e os seus não são.

**6. Planeje a saída antes de entrar.** Pergunte como definições, histórico e painéis podem ser exportados e teste. Prefira ferramentas com interfaces abertas e formatos padrão e guarde sua própria cópia das definições das métricas e dos dados limpos. O custo de sair faz parte do custo de ficar, e uma saída crível melhora sua posição de negociação (veja o tópico 8.4, Métricas de fornecedores e contratos).

### Escolha com critérios claros

**7. Use critérios de seleção neutros quanto a fornecedores.** Critérios úteis incluem os seguintes. As fontes de dados de que você precisa têm conectores mantidos? As definições podem ser escritas, versionadas e revistas? A ferramenta mostra distribuições, percentis e tendências além de médias e contagens? Agrega a equipes e serviços e permite restringir visões em nível individual? Oferece acesso por papéis e auditoria? Os dados são exportáveis em formatos abertos? Como o fornecedor trata mudanças, interrupções e incidentes de segurança? Quanto custa na escala que você espera daqui a três anos?

**8. Desconfie de pontuações embutidas.** Algumas ferramentas oferecem de fábrica pontuações compostas, classificações de pessoas ou índices de "produtividade". São fáceis de adotar e difíceis de defender (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Confira se esses recursos podem ser desligados e defina a política antes de ligar qualquer coisa.

**9. Envolva as pessoas que vão usar.** Peça às equipes que testem as opções da lista curta com seus dados. As perguntas delas exporão limites que um documento de requisitos não expôs. Inclua cedo segurança, privacidade, finanças e compras (veja o tópico 8.1, Métricas de incidentes de segurança e vulnerabilidades).

### Opere o pipeline como um serviço

**10. Automatize, teste e monitore o pipeline.** Trate as cargas de dados como qualquer outro serviço de produção. Rode verificações automatizadas de contagens, faixas, duplicatas e atualidade. Alerte sobre falhas e mostre o status de qualidade de dados no painel. Versione a lógica de transformação e reveja as mudanças nela como código (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).

**11. Mantenha um catálogo de definições.** Mantenha um catálogo compartilhado com a definição, a fórmula, a fonte, o responsável e os limites de cada medida. Pode ser um repositório de arquivos de texto simples, uma ferramenta de catálogo de dados ou uma wiki. O que importa é que seja a fonte da verdade para o significado e que os painéis leiam dele ou apontem para ele (veja o tópico 1.4, Governança e responsabilidade das métricas).

**12. Reveja a ferramenta todo ano.** A cada ano, confira o que a ferramenta custa, que partes o programa usa, onde resta esforço manual e que opções mais novas existem. Aposente o que ninguém usa. Reconsidere o equilíbrio entre construir e comprar à medida que o programa amadurece. Planeje a mudança como parte normal do trabalho.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de fontes | Conectar fontes fáceis ou irrelevantes; contar uma conexão que não carrega dados utilizáveis | Contar pelas medidas combinadas; conferir a completude dos dados por fonte |
| Confiabilidade do pipeline | Afrouxar as verificações para as cargas sempre passarem; agendar menos cargas | Rever a força das verificações; acompanhar a reconciliação e as contagens de linhas da fonte |
| Tempo até uma nova medida | Publicar sem definições ou testes; estreitar o que conta como uma nova medida | Exigir o cartão de definição e uma verificação de reconciliação para a conclusão |
| Taxa de reconciliação | Escolher cifras fáceis para conferir; ampliar a tolerância depois de uma falha | Escolher as amostras antes da verificação; fixar a tolerância de antemão; incluir cifras difíceis |
| Parcela de esforço manual | Subestimar o trabalho manual; esconder esforço em outros orçamentos | Perguntar a quem faz o trabalho; comparar com o tempo gasto no fim de cada ciclo de relato |
| Prontidão de saída | Testar uma exportação parcial; contar um plano documentado como prontidão | Rodar uma restauração completa em outra ferramenta com uma amostra; verificar definições e histórico |
| Custo de ferramentas por equipe atendida | Excluir o esforço de manutenção; acrescentar equipes no papel | Incluir o tempo do pessoal; contar as equipes que de fato usam suas visões |

Uma leitura saudável mostra dados que chegam no prazo e se reconciliam com a fonte, novas medidas publicadas com definições, esforço manual em queda e uma saída que foi testada pelo menos uma vez.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Relatórios embutidos de cada ferramenta | Barata; já existe; compreendida | Silos; definições inconsistentes entre ferramentas |
| Suíte única de um só fornecedor | Integrada; um só contrato | Aprisionamento; serve ao modelo do fornecedor, e não ao seu |
| Produto empacotado de análise de engenharia | Início rápido; conectores prontos | Modelo fixo; risco de pontuação individual; custo em escala |
| Ferramenta geral de análise e visualização | Flexível; amplas habilidades disponíveis | Exige um suprimento de dados e habilidade de projeto |
| Warehouse com camada de transformação | Forte controle; junções entre fontes | Esforço de engenharia; exige responsável |
| Planilhas e scripts | Rápido de começar; sem licença | Frágil; depende de indivíduos; difícil de auditar |
| Pilha de código aberto | Controle; sem custo de licença | Esforço de manutenção; o suporte depende de você |
| Métricas coletadas à mão | Funciona sem ferramentas | Lento; sujeito a erros; difícil de sustentar |

A resposta pragmática é começar com o que você já tem, acrescentar a conexão mais fina que responda a perguntas reais, manter portáveis as definições e os dados e passar a ferramentas mais pesadas somente quando as mais leves limitarem comprovadamente as decisões.

## Perguntas para discutir com sua equipe

**1. Que números produzimos à mão todo mês, e o que seria preciso para parar?**
Listem os relatórios manuais e as horas que levam. Achem a fonte de cada um e se tem uma interface. O facilitador deve perguntar quais relatórios poderiam simplesmente ser abandonados. Combinem um para automatizar e um para aposentar.

**2. Se a nossa ferramenta de relatórios atual sumisse amanhã, o que perderíamos?**
Nomeiem as definições, o histórico e os painéis que existem só dentro dela. Conferam quais são exportáveis. Combinem onde guardar uma cópia.

**3. Em quais dados dos nossos sistemas confiamos menos, e por quê?**
Olhem os hábitos de entrada, os padrões e os campos sobrescritos. Estimem quanto cada distorção afeta as medidas que publicamos. Combinem qual correção de fonte agregaria mais confiança com menos esforço.

**4. O que a ferramenta deixa as pessoas verem que não gostaríamos?**
Conferam as visões em nível individual, os logs de atividade e as classificações. Decidam o que restringir ou desligar e escrevam a regra antes de alguém usar o recurso.

**5. Quanto tempo levamos para acrescentar uma nova medida, e o que nos atrasa?**
Rastreiem um pedido recente da aprovação à disponibilidade. Marquem as esperas. Combinem o que remover, como aprovações, definições ausentes ou limpeza manual.

**6. Qual é o custo total desta ferramenta para uma equipe por um ano?**
Somem licenças, infraestrutura, integração, treinamento e o tempo das pessoas que a mantêm. Comparem com as decisões que ela melhorou. Discutam do que deixaríamos de pagar.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes querem dados que venham do trabalho sem entrada extra e visões que respondam a suas perguntas. Devem ajudar a escolher e testar as ferramentas, ser donas das definições de suas próprias medidas e recusar recursos que classificam indivíduos. O tempo delas é o insumo mais escasso, e uma ferramenta que pede que registrem o trabalho duas vezes será resistida.

### Equipes de serviço e operações

As equipes de operações administram as fontes e muitas vezes o pipeline. Devem tratar o pipeline como um serviço com monitoramento e testes, manter confiáveis os campos de dados das fontes e sinalizar mudanças nos sistemas de registro que quebrarão os conectores. São as primeiras a ver quando um número está errado.

### Liderança e governança

Os líderes financiam o programa e definem expectativas. Devem pedir o custo total, e não o preço da licença, exigir portabilidade e uma saída, resistir a comprar uma plataforma para resolver um problema de definições e insistir em regras de privacidade e de acesso. Devem aceitar um começo modesto e julgá-lo pelas decisões que melhora.

### Clientes e usuários

Os clientes e usuários raramente veem a ferramenta e vivem com as consequências dela: os dados sobre eles são guardados, combinados e analisados. Merecem regras claras sobre o que é coletado, por quanto tempo é guardado, quem vê e como é protegido. Onde as medidas se apoiam no feedback deles, as ferramentas devem respeitar o consentimento e o anonimato.

## Na prática: um exemplo de gestão de serviços

Uma empresa regional de logística tem uma ferramenta de gestão de serviços, um sistema de controle de versão e implantação, uma plataforma de monitoramento e uma ferramenta de pesquisa, e cada uma produz seus próprios relatórios. A chefe de gestão de serviços quer uma visão única da saúde dos serviços para 12 equipes. Um fornecedor oferece uma plataforma de análise tudo-em-um com um contrato de três anos. As cifras abaixo são ilustrativas.

A chefe de gestão de serviços primeiro escreve as perguntas e as 14 medidas que as equipes e líderes combinaram nas sessões do painel. Inventaria o que existe: a ferramenta de gestão de serviços consegue exportar dados de incidentes e mudanças por sua interface, o sistema de implantação fornece registros de data e hora de implantações e a plataforma de monitoramento relata a disponibilidade contra os objetivos. Pede a um pequeno grupo de representantes das equipes que testem duas opções em três medidas com dados reais: a plataforma do fornecedor e uma combinação de uma ferramenta geral de visualização com um pequeno repositório de dados e conectores finos.

O teste revela diferenças. A plataforma se conectou a todas as fontes em dois dias, mas calculava o lead time como média e não conseguia mostrar um percentil alto, tinha uma "pontuação de produtividade da equipe" embutida que não podia ser desligada e a exportação das definições do painel produzia um arquivo que nenhuma outra ferramenta conseguia ler. A combinação levou 11 dias para conectar, mas mostrava medianas e percentis, guardava as definições como texto simples em um repositório e restringia campos em nível individual no repositório de dados. O grupo também descobre que 30% dos registros de mudanças foram criados depois da implantação; assim o lead time estava errado qualquer que fosse a ferramenta que o lia. Corrigir o hábito de entrada na fonte vira o primeiro trabalho.

A empresa escolhe a combinação. A cobertura de fontes sobe de 3 das 8 fontes necessárias para 7 de 8 em dois trimestres. A confiabilidade do pipeline começa em 71% das cargas no prazo com verificações aprovadas e chega a 96% depois que a equipe acrescenta testes e alertas de falha. O tempo até uma nova medida cai de uma mediana de 31 dias para 9. O esforço manual do relatório mensal cai de cerca de 40 horas para 6. Um diretor pergunta se a pontuação de produtividade da plataforma do fornecedor poderia ser acrescentada para dar uma classificação única das equipes. A chefe de gestão de serviços explica a análise do tópico 1.2, mostra o que aconteceu quando uma pontuação parecida foi usada em outro lugar da empresa e propõe a atual visão equilibrada. A decisão é registrada, e o recurso de pontuação é desligado em qualquer ferramenta que o tenha.

## Ágil, IA, automação e análise

### Ágil

Escolha as ferramentas em pequenos experimentos com uma equipe real e uma pergunta real e mantenha a capacidade de mudar de rumo. O cuidado é que uma grande decisão de plataforma tomada cedo trava as definições antes de a equipe ter aprendido o que precisa.

### IA

Muitas ferramentas de análise e de gestão de serviços agora incluem recursos de IA. Pergunte o que a IA faz, com que dados, sob que termos, como sua saída é conferida e como desligá-la, e meça os recursos de IA como qualquer outro uso (veja o tópico 10.5, Métricas de governança e risco de IA). O cuidado é que recursos de IA ligados por padrão podem mudar relatórios em silêncio; por isso pergunte aos fornecedores sobre cada release.

### Automação

Prefira ferramentas que deixem coletar dados automaticamente por interfaces documentadas e manter seus dados portáveis. Meça as integrações pelas falhas e pelo tempo até uma nova medida. O cuidado é que conectores proprietários podem tornar seus dados difíceis de levar embora; por isso teste uma exportação.

### Análise

Julgue as ferramentas pela cobertura de fontes, pela reconciliação e pelo tempo para responder a uma nova pergunta. A decisão informada é qual ferramenta adotar, manter ou deixar. O cuidado é que os dados de demonstração parecem limpos; por isso teste com seus próprios dados bagunçados.

## Olhar setorial

**Startup.** Use o que o produto e as ferramentas existentes já oferecem. Uma planilha e os relatórios embutidos das ferramentas que você usa podem responder à maioria das perguntas iniciais. Resista a uma plataforma de dados até as perguntas estarem estáveis e o esforço manual estar machucando. Mantenha escritas as definições das métricas para que uma mudança posterior seja fácil.

**Pequena empresa.** Poucas medidas e poucos sistemas significam ferramentas simples. Os relatórios embutidos e uma planilha muitas vezes bastam. Os principais riscos são dados guardados só na cabeça de uma pessoa e em ferramentas sem exportação. Escolha produtos que você possa deixar e escreva as definições.

**Grande empresa.** Muitos sistemas, muitas equipes e muitas definições argumentam por um repositório de dados governado, um catálogo de definições e visões em camadas. A propriedade federada funciona melhor que uma equipe central que constrói todo relatório. Preste atenção ao aprisionamento, ao controle de acesso, à privacidade e à avaliação de fornecedores e considere uma pequena equipe de plataforma que ofereça o pipeline como serviço.

**Governo e setor público.** As regras de compras, a soberania de dados e a acessibilidade afetam as escolhas de ferramentas. Os padrões abertos e a portabilidade são valiosos porque os contratos são longos e as administrações mudam. Planeje avaliações de segurança, retenção de registros e regras de divulgação pública e confira a orientação atual sobre hospedagem e compras (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos incluem licenças ou assinaturas, infraestrutura, trabalho de integração e conectores, limpeza de dados, trabalho de definições e catálogo, treinamento, suporte e o esforço recorrente de manter saudável o pipeline. As opções de construir carregam custos de engenharia que são fáceis de subestimar, e as de comprar carregam taxas que crescem com a escala e o custo de sair.

Os retornos vêm do esforço de relato economizado, respostas mais rápidas, menos disputas sobre números e melhores decisões a partir de dados confiáveis. Construa o argumento a partir dos seus próprios dados: horas gastas hoje em relatórios manuais, o número de versões concorrentes de uma cifra, o atraso entre uma pergunta e uma resposta e os custos de ferramentas que se sobrepõem. Evite citar cifras de analistas sobre retornos de análise sem uma fonte rastreável e relevância para o seu contexto. Uma comparação justa conta o custo total de cada opção ao longo de três anos, incluindo a saída (veja o tópico 7.5, Custo de serviço e economia unitária, e o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Ferramenta primeiro, perguntas depois.** A plataforma chega, e ninguém sabe o que pedir a ela. Escreva primeiro as medidas.
- **Comprar para resolver um problema de definições.** O desacordo sobre o significado persiste em qualquer ferramenta. Resolva as definições.
- **Pontuações individuais embutidas.** Tentam e distorcem. Desligue-as e defina primeiro a política.
- **Nenhuma saída.** O histórico e as definições ficam presos. Teste a exportação e guarde uma cópia.
- **O pipeline de uma pessoa só.** Para quando essa pessoa sai. Documente-o, teste-o e compartilhe a responsabilidade.
- **Entrada dupla.** As pessoas registram o mesmo trabalho duas vezes, e a qualidade de ambos cai. Tome os dados dos sistemas de registro.
- **Superengenharia cedo.** Uma plataforma de dados chega antes de uma única visão ter provado seu valor. Comece fino.
- **Ignorar a qualidade de dados.** Gráficos limpos sobre dados sujos enganam de modo mais convincente. Corrija a captura na fonte.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Suprimento de dados | Coleta manual; planilhas | Alguns feeds automatizados; scripts individuais | Fontes combinadas alimentam um repositório compartilhado por pipelines testados | Confiabilidade, reconciliação e atualidade geridas e visíveis | Pipelines federados com contratos compartilhados entre equipes e fornecedores; fontes melhoradas a partir do feedback |
| Definições e catálogo | Na cabeça das pessoas | Algumas documentadas | Um catálogo de definições com responsáveis, versionado e revisto | O catálogo conduz os painéis; mudanças revistas com os usuários | Definições de propriedade conjunta entre equipes e fornecedores; aposentadas quando deixam de informar decisões |
| Escolha e custo | Compras ad hoc | Ferramentas sobrepostas | Critérios escritos; saída testada; custo total contado | Custo por equipe atendida e esforço manual geridos | Escolhas de ferramentas revistas regularmente com os usuários e adaptadas conforme as necessidades mudam |

## Lista de verificação

- [ ] As medidas combinadas e suas perguntas estão escritas antes de as ferramentas serem comparadas.
- [ ] As ferramentas e relatórios existentes foram inventariados e testados primeiro.
- [ ] A qualidade de dados nas principais fontes foi conferida e as piores lacunas corrigidas.
- [ ] Os critérios de seleção estão escritos e incluem distribuições, controle de acesso e exportação.
- [ ] Um teste com prazo definido, com dados reais e usuários reais, foi feito antes de qualquer compromisso.
- [ ] Os recursos de pontuação e classificação individuais estão desligados ou restritos por política.
- [ ] As definições são mantidas em um catálogo portável fora de qualquer ferramenta.
- [ ] O pipeline tem um responsável, verificações automatizadas, monitoramento e um alerta de falha.
- [ ] Uma exportação das definições e do histórico foi testada.
- [ ] O custo total em três anos, incluindo a saída, foi contado.

## Prompts de IA

**Escreva requisitos a partir de perguntas.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Planeje um teste de ferramentas.**

```text
We are comparing [options] for our metrics program. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Revise um pipeline de dados.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behavior. List your assumptions and what you could not
tell from the description.
```

**Compare o custo total.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics program. List the cost categories for each option, including
licenses, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar a fonte de dados e a barreira de proteção de cada medida ao escrever requisitos.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um registro de decisão sobre ferramentas traz definições, fontes de dados e barreiras de proteção.

## Ideias-chave

- Escreva primeiro as perguntas e as medidas e escolha ferramentas que sirvam a elas.
- Use os sistemas de registro, corrija a captura de dados na fonte e teste a reconciliação.
- Mantenha portáveis as definições e os dados e teste a saída antes de se comprometer.
- Desligue a pontuação e as classificações em nível individual e defina a política antes de ligar qualquer recurso.
- Opere o pipeline como um serviço, com responsável, testes e monitoramento.
- Conte o custo total ao longo de vários anos e comece pelo caminho mais fino que responda a perguntas reais.

## Referências e leituras complementares

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Gestão de serviços de TI](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observabilidade (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Pipeline de dados](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extrair, transformar, carregar](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Interface de programação de aplicações](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Qualidade de dados](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Governança de dados](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Aprisionamento ao fornecedor](https://en.wikipedia.org/wiki/Vendor_lock-in).
