# Métricas de qualidade de configuração e CMDB

**Um banco de dados de configuração só se justifica quando as pessoas confiam nele o bastante para usá-lo em uma mudança ou em um incidente; por isso meça sua qualidade pela forma como responde a perguntas reais e deixe as equipes donas dos serviços manterem atuais os próprios registros.**

## Visão geral e motivação

Quando um servidor de banco de dados falha às três da manhã, alguém pergunta quais serviços dependem dele. Quando uma equipe planeja uma mudança, alguém pergunta o que mais poderia quebrar. As respostas devem vir de um registro das coisas que compõem seus serviços e de como se conectam. Esse registro é o assunto da gestão de configuração, e o banco de dados por trás dele é o banco de dados de gestão de configuração, geralmente abreviado como CMDB.

Um [item de configuração](https://en.wikipedia.org/wiki/Configuration_item) (CI) é qualquer componente que precisa ser gerido para entregar um serviço de TI: um servidor, uma aplicação, um banco de dados, um equipamento de rede, uma conta de nuvem, um contrato. Um [banco de dados de gestão de configuração](https://en.wikipedia.org/wiki/Configuration_management_database) guarda informações sobre os CIs, seus atributos e as relações entre eles. Onde a gestão de ativos pergunta o que você tem, quem é o dono e quanto custa (veja o tópico 7.1, Métricas de gestão de ativos de TI), a gestão de configuração pergunta como as partes se encaixam e o que depende de quê.

Os CMDBs têm uma reputação mista, e merecida. Muitos foram construídos como mapas abrangentes, preenchidos com dados que decaíam mais depressa do que alguém conseguia corrigir, e depois abandonados. As tradições ágil e de DevOps oferecem um ponto de partida melhor. As equipes que descrevem sua infraestrutura como código têm uma definição autoritativa e versionada do que operam e podem publicá-la automaticamente no registro compartilhado. A [infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code) transforma o registro em um subproduto da entrega. O ITIL 4 descreve a prática como gestão de configuração de serviço e enfatiza a informação necessária para apoiar decisões, e não a completude por si mesma.

A qualidade em um registro de configuração tem várias partes, que se mapeiam na ideia mais ampla de [integridade de dados](https://en.wikipedia.org/wiki/Data_integrity):

- **Completude:** os CIs e atributos que importam estão presentes.
- **Exatidão:** o que o registro diz corresponde à realidade.
- **Pontualidade:** as mudanças aparecem no registro cedo o bastante para serem úteis.
- **Consistência:** a mesma coisa não é registrada duas vezes com nomes diferentes. Casar registros que se referem à mesma coisa é o problema da [resolução de entidades](https://en.wikipedia.org/wiki/Entity_resolution).
- **Qualidade das relações:** as dependências entre CIs estão presentes e corretas. É aqui que moram a maior parte do valor e a maior parte da deterioração.

O teste mais profundo de um CMDB é o uso. Um registro que as pessoas consultam durante incidentes e mudanças e corrigem quando está errado é saudável. Um registro que só é auditado não é. As medidas abaixo pareiam, portanto, medidas de qualidade com medidas de uso.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica com uma reviravolta: a completude é fácil de inflar com valores padrão, e a exatidão é fácil de alegar sem conferir. Insista em evidências independentes e em medidas de uso (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Comece pelas perguntas.** Decida o que você precisa que o registro responda e construa só isso.
- **Prefira um registro menor e confiável a um maior e duvidoso.** O escopo cresce quando a confiança é conquistada.
- **Deixe a fonte da verdade alimentar o registro.** Pipelines, APIs de nuvem e descoberta devem escrever nele, e não pessoas com planilhas.
- **Deixe as equipes de serviço serem donas dos registros de seus serviços.** Elas conhecem suas dependências e sentem o custo dos erros.
- **Meça pelo uso além da qualidade.** Um bom registro é consultado.
- **Confira contra a realidade.** Teste o registro perguntando se ele prevê o que acontece.
- **Corrija na origem.** Um registro errado é um sintoma. Ache o processo que o deixou derivar.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completude dos CIs | Proporção dos CIs no escopo com todos os atributos exigidos preenchidos com valores válidos | CIs no escopo com todo atributo exigido válido / CIs no escopo | porcentagem | CMDB, regras de atributos | Gestão de configuração de serviço; gestão de ativos de TI | A definição de pronto inclui a descrição do serviço | Mensal |
| Exatidão dos CIs | Proporção dos CIs amostrados cujo registro corresponde à evidência nos atributos exigidos | CIs amostrados que correspondem em todos os atributos exigidos / CIs amostrados | porcentagem | Amostra de auditoria comparada com o sistema ativo | Gestão de configuração de serviço | O estado da infraestrutura como código corresponde à realidade | Trimestral |
| Cobertura de dependências | Proporção dos serviços críticos cujas dependências a montante e a jusante estão mapeadas e revistas | serviços críticos com um mapa de dependências revisto nos últimos 90 dias / serviços críticos | porcentagem | Relações do CMDB e registros de revisão | Gestão de configuração de serviço; gestão de disponibilidade | Revisão de arquitetura e de responsabilidade pelo serviço | Trimestral |
| Taxa de acerto da previsão de impacto | Proporção dos incidentes e mudanças em que os serviços realmente afetados estavam no impacto previsto pelo CMDB | incidentes ou mudanças em que todos os serviços afetados foram previstos / incidentes ou mudanças revistos | porcentagem | Revisões pós-incidente e registros de mudanças comparados com consultas ao CMDB | Gestão de incidentes; habilitação de mudanças | Achado de revisão sem culpados sobre dependências ausentes | Trimestral |
| Taxa de CIs duplicados | Proporção dos CIs que duplicam outro CI | CIs sinalizados como duplicados por regras de correspondência e confirmados na revisão / CIs no escopo | porcentagem | Relatório de correspondência do CMDB e amostra de revisão | Gestão de configuração de serviço | Fonte única da verdade | Mensal |
| Latência de atualização | Atraso entre uma mudança em um CI no mundo real e sua atualização no CMDB | mediana e 85º percentil das horas ou dias do evento de mudança até a atualização do CMDB | horas ou dias | Eventos de mudança e de pipeline comparados com os carimbos de tempo do CMDB | Gestão de configuração de serviço; habilitação de mudanças | Registro automatizado no pipeline | Mensal |
| Taxa de uso do CMDB | Proporção dos incidentes e mudanças que referenciam CIs e, desses, a proporção em que os usuários relatam que o registro ajudou | registros que referenciam um CI válido / incidentes e mudanças no período; mais a proporção dos registros revistos em que os dados do CI ajudaram | porcentagem | Ferramenta de ITSM, pergunta curta de feedback | Gestão de incidentes; habilitação de mudanças | Equipes usando o registro compartilhado em seu trabalho | Mensal |

Defina o escopo de "CI no escopo" por classe e por criticidade e registre-o. Um CI é exato apenas nos atributos que você nomeia como exigidos. A latência de atualização começa no evento real, como uma implantação ou uma compra, e para quando o CMDB o reflete. A taxa de acerto da previsão de impacto exige uma etapa de revisão que registre quais serviços foram realmente afetados e só é tão confiável quanto essa revisão.

## Recomendações

### Decida para que serve o registro

**1. Escreva as perguntas que o CMDB deve responder.** As típicas são: o que depende deste componente, quem é o dono deste serviço, o que mudou recentemente, o que uma falha aqui afetaria e o que está fora de suporte. Para cada pergunta, nomeie as classes de CI, os atributos e as relações necessários. Tudo o que não é necessário para responder a uma pergunta é candidato a ficar de fora.

**2. Comece pelos serviços que mais importam.** Escolha o punhado de serviços críticos, mapeie-os de ponta a ponta e acerte isso antes de acrescentar mais. Um mapa confiável de dez serviços ajuda mais que um mapa duvidoso de mil. Expanda conforme a confiança e o uso crescem.

**3. Defina de forma simples as classes, os atributos e os tipos de relação.** Uma lista curta de classes de CI (serviço, aplicação, banco de dados, host, rede, recurso de nuvem) e de tipos de relação (depende de, executa em, conecta-se a, é de propriedade de) cobre a maioria das necessidades. Um modelo que tenta captar tudo é difícil de preencher e mais difícil de consultar. Mantenha um modelo escrito e mude-o deliberadamente.

### Alimente o registro a partir da fonte

**4. Publique a partir de pipelines e de código.** Onde a infraestrutura e as aplicações são definidas como código, faça o pipeline de entrega criar, atualizar e aposentar CIs a cada mudança, incluindo a responsabilidade e as informações de dependências declaradas junto ao código. Trate a declaração como parte da definição de pronto de um serviço. Isso deixa a latência de atualização perto de zero e mantém o registro alinhado ao que roda.

**5. Use a descoberta como segunda opinião.** A [descoberta de serviços](https://en.wikipedia.org/wiki/Service_discovery) de rede e de nuvem acha o que está realmente rodando e como se conecta. Compare-a com o registro declarado. As diferenças são achados: ou a declaração está perdendo algo, ou algo está rodando que não deveria. A descoberta sozinha produz dados ruidosos sem responsabilidade; por isso use-a para conferir, e não para criar.

**6. Use identificadores estáveis e regras de correspondência.** As duplicatas surgem quando fontes diferentes nomeiam a mesma coisa de modo diferente. Combine um identificador único para cada classe de CI, registre os identificadores de origem e rode regras de correspondência para achar e fundir duplicatas. Reveja as correspondências à mão em uma amostra, já que a fusão automática pode combinar coisas diferentes.

**7. Dê a cada equipe de serviço a responsabilidade pela sua fatia.** A equipe que constrói e opera um serviço está na melhor posição para conhecer suas dependências e notar erros. Facilite para ela: um modelo, uma revisão curta no planejamento e feedback quando seus dados são usados. As equipes centrais são donas do modelo, das ferramentas e das conferências, e não de todo registro.

### Meça a qualidade e o uso

**8. Audite a exatidão por amostragem.** A cada trimestre, sorteie uma amostra aleatória de CIs e confira-os contra os sistemas ativos, e uma segunda amostra dos sistemas ativos para conferir se aparecem no registro. Relate a exatidão por classe e mostre as principais fontes de erro. Mantenha fixo o método de amostragem para que as tendências signifiquem algo.

**9. Teste o mapa contra os incidentes.** Depois de um incidente ou mudança significativos, compare os serviços realmente afetados com o que o CMDB previu. Registre os erros e corrija as dependências ausentes. É o teste de exatidão mais significativo, porque confere o registro contra eventos, e a taxa de acerto melhora conforme o mapa é corrigido. Use revisões sem culpados para que as pessoas relatem os erros com facilidade (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

**10. Acompanhe o uso e pergunte se ajudou.** Conte com que frequência incidentes e mudanças referenciam CIs e faça a quem responde e a quem aprova uma pergunta curta sobre se o registro ajudou. Uma taxa de uso crescente com respostas positivas é o sinal mais claro de valor. Uma taxa de uso baixa significa que as pessoas não confiam no registro ou não sabem que ele existe, e ambos têm correção.

**11. Reveja regularmente os mapas de dependências com os responsáveis.** As dependências mudam conforme o software evolui. Peça aos responsáveis pelos serviços críticos que confirmem seus mapas a cada trimestre, de preferência como parte de uma conversa de planejamento ou de arquitetura. Use a data de confirmação como atributo e mostre os mapas atrasados.

### Mantenha-o honesto e proporcional

**12. Aposente o que ninguém usa.** Remova as classes de CI e os atributos de que nenhuma pergunta precisa e que ninguém consulta. Menos campos, e melhores, elevam a exatidão. Reveja o modelo anualmente e registre o que foi removido e por quê. Um registro menor tem menos a manter verdadeiro e torna mais fácil cumprir as medidas de qualidade com honestidade.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Completude dos CIs | Preencher atributos exigidos com padrões ou valores de fachada; estreitar a lista exigida | Contar os valores padrão e de fachada; lista exigida fixa; amostra de exatidão |
| Exatidão dos CIs | Amostrar classes fáceis; auditar depois de uma limpeza | Amostra aleatória sorteada de forma independente nos dois sentidos; método fixo |
| Cobertura de dependências | Marcar mapas como revistos sem lê-los; mapear apenas dependências triviais | Taxa de acerto da previsão de impacto; conferir por amostragem um mapa contra o tráfego ao vivo |
| Taxa de acerto da previsão de impacto | Escolher incidentes que correram bem; registrar os serviços afetados de modo estreito | Rever todos os incidentes significativos; revisores de fora da equipe dona |
| Taxa de CIs duplicados | Fundir CIs distintos para baixar a taxa; afrouxar as regras de correspondência | Amostrar as fusões quanto à correção; registrar as regras de fusão |
| Latência de atualização | Retrodatar eventos de mudança; contar apenas atualizações automatizadas | Comparar os carimbos de tempo de evento e de atualização dos sistemas de origem; trilha de auditoria |
| Taxa de uso do CMDB | Acrescentar referências de CI por formalidade; tornar o campo obrigatório com qualquer valor | Conferir se os CIs referenciados são relevantes; a pergunta de feedback sobre utilidade |

Uma leitura saudável é um registro menor com alta exatidão medida, mapas de dependências que preveem incidentes reais, latência de atualização perto de zero para classes automatizadas e pessoas que dizem usar o registro porque ele ajuda.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| CMDB abrangente | Visão ampla; apoia muitos casos de uso | Caro de manter verdadeiro; decai |
| CMDB mínimo, guiado por perguntas | Confiável e barato | Lacunas; exige disciplina de crescimento |
| Povoamento guiado por descoberta | Acha o desconhecido; pouco esforço manual | Ruidoso; sem responsabilidade nem propósito |
| Povoamento guiado por pipeline | Exato; baixa latência | Limitado ao que é construído por pipelines |
| Responsabilidade central pelos registros | Consistência | Lenta; longe do conhecimento |
| Responsabilidade das equipes pelos registros | Exata e rápida | Variação; exige modelos e conferências |
| Modelo em estilo de grafo | Natural para relações e consultas de impacto | Exige habilidades e ferramentas |
| Modelo de tabelas relacionais | Familiar e simples | Desajeitado para consultas profundas de dependências |

A resposta pragmática é começar pequeno e guiado por perguntas, povoar a partir de pipelines com a descoberta como segunda opinião e pôr as equipes de serviço no comando de seus registros. Um [banco de dados em grafo](https://en.wikipedia.org/wiki/Graph_database) pode tornar natural fazer as perguntas sobre dependências, embora um banco de dados convencional funcione se o modelo for mantido simples.

## Perguntas para discutir com sua equipe

**1. Que pergunta desejamos por último que o CMDB pudesse responder, e ele podia?**
Lembrem um incidente ou mudança recente em que alguém procurou dependências. O que encontrou e o que fez em vez disso? O facilitador deve registrar a pergunta e se o registro foi consultado. O resultado é o primeiro candidato ao propósito do registro.

**2. Se o nosso serviço mais importante falhasse agora, quão confiantes estamos no impacto previsto?**
Peçam o impacto previsto pelo CMDB e comparem com o que as pessoas que conhecem o serviço acreditam. Anotem as diferenças. Combinem qual dependência verificar primeiro e quem fará a conferência.

**3. Quem é dono do registro de cada serviço, e sabe disso?**
Listem os serviços críticos e os responsáveis por suas entradas no CMDB. Perguntem se os responsáveis sabem e se as revisaram recentemente. Onde o responsável é "a equipe do CMDB", discutam como passar a responsabilidade para a equipe do serviço.

**4. O que preenchemos só para satisfazer um campo obrigatório?**
Procurem valores padrão e de fachada. Eles mostram onde o modelo pede mais do que alguém sabe. Decidam se removem o campo, o automatizam ou acham a fonte real.

**5. Onde o nosso registro discorda do que está rodando?**
Comparem a saída da descoberta com o registro de um serviço. Para cada diferença, perguntem se deve mudar o registro ou a realidade. A conversa tende a achar tanto dados obsoletos quanto componentes não autorizados.

**6. O que deixaríamos de registrar?**
Listem as classes, atributos e relações que ninguém usou em seis meses. Perguntem o que aconteceria se cada um desaparecesse. Combinem remover dois e observar se alguém nota.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega guardam o conhecimento do que seus serviços dependem e estão na melhor posição para manter o registro verdadeiro. Devem declarar a responsabilidade e as dependências junto ao código, revê-las quando o projeto muda e usar o registro ao planejar mudanças. Uma definição de pronto que inclui atualizar a descrição do serviço mantém o registro perto do trabalho.

### Equipes de serviço e operações

As equipes de operações consultam o registro durante incidentes e mudanças; por isso sentem primeiro seus erros. Devem relatar os erros nas revisões, rodar conferências de descoberta, manter as regras de correspondência e dar feedback aos responsáveis. Também operam as ferramentas e as amostras de auditoria.

### Liderança e governança

Os líderes querem impacto e risco visíveis e muitas vezes patrocinam grandes programas de CMDB que decepcionam. Devem pedir evidências de uso e de exatidão em vez de contagens de registros, financiar a integração de pipelines e aceitar um escopo menor bem feito. A governança deve esperar ver a taxa de acerto da previsão de impacto e a lista de lacunas.

### Clientes e usuários

Os usuários se beneficiam quando os incidentes são diagnosticados mais depressa e as mudanças têm menos chance de quebrar serviços dependentes. Raramente veem o CMDB, mas veem seus efeitos em comunicações que nomeiam corretamente os serviços afetados e em menos surpresas após mudanças. O feedback deles depois dos incidentes mostra se o quadro de impacto estava certo.

## Na prática: um exemplo de gestão de serviços

O grupo de tecnologia de uma companhia aérea nacional opera cerca de 300 aplicações e uma plataforma de reservas de clientes. Os números abaixo são ilustrativos.

O CMDB guarda 180.000 CIs e foi povoado por uma ferramenta de descoberta há cinco anos. A chefe de gestão de serviços quer saber se vale a pena mantê-lo. Pede a uma pequena equipe que o teste. Quanto à qualidade, eles auditam 150 CIs amostrados e acham 71% de exatidão nos cinco atributos exigidos. Quanto ao mapa, revêem os últimos 20 incidentes significativos e comparam os serviços realmente afetados com o que o CMDB previu: previu todos os serviços afetados em 6 de 20, uma taxa de acerto de 30%. Quanto ao uso, 12% dos incidentes do último trimestre referenciaram um CI, e numa pesquisa curta com quem responde, a maioria disse confiar em uma página de wiki separada. Os CIs duplicados são 9% do total.

A equipe toma quatro decisões com os responsáveis pelos serviços. Reduz o escopo aos 40 serviços que carregam mais clientes, com cinco classes de CI e quatro tipos de relação. Pede a cada equipe de serviço que declare o responsável, as dependências e o local de execução em um arquivo curto mantido com seu código, que o pipeline publica no CMDB a cada release. Roda a descoberta semanalmente e relata as diferenças aos responsáveis. Acrescenta um campo à revisão do incidente, "a previsão do CMDB estava certa?", e corrige cada erro em duas semanas.

Dois trimestres depois, o CMDB com escopo definido tem 14.000 CIs, a exatidão no conjunto amostrado é de 92%, a latência de atualização do release ao registro é de menos de uma hora para os serviços no pipeline e a taxa de acerto nos últimos 12 incidentes é de 75%. O uso do CMDB nos incidentes subiu para 58%, e quem responde diz que a página de wiki já não é necessária. O diretor de operações pede um plano para trazer as outras 260 aplicações de uma vez. A chefe de gestão de serviços propõe acrescentar dez serviços por trimestre, depois de cada um conquistar uma taxa de acerto acima de um nível combinado em um incidente de teste, e explica que o registro amplo anterior nunca tinha sido confiável. A decisão é registrada, com uma revisão a cada trimestre.

## Ágil, IA, automação e análise

### Ágil

Deixe as equipes de serviço manterem atuais os próprios registros como parte do trabalho e reveja a qualidade com elas regularmente. O cuidado é que uma meta de completude sozinha produz registros cheios de valores de fachada.

### IA

A IA pode inferir dependências, sugerir registros e responder a perguntas a partir dos dados de configuração, e os próprios sistemas de IA são itens de configuração. Acompanhe a taxa de acerto da previsão de impacto das dependências sugeridas por IA contra incidentes reais. O cuidado é que uma IA que adivinha dependências pode poluir o registro com erros plausíveis.

### Automação

Alimente os registros a partir da descoberta e da infraestrutura como código e meça a latência de atualização. O cuidado é que a descoberta automatizada pode criar itens duplicados ou obsoletos sem regras claras de identidade.

### Análise

Julgue o banco de dados pela qualidade com que responde a perguntas em mudanças e incidentes reais e relate a taxa de uso. A decisão informada é onde melhorar os dados. O cuidado é que a exatidão é medida por amostragem; por isso mostre o tamanho da amostra.

## Olhar setorial

**Startup.** Há pouca necessidade de um CMDB além de um catálogo de serviços e do código de infraestrutura. Mantenha os responsáveis pelos serviços e as dependências no repositório e gere um mapa a partir dele. Só acrescente um banco de dados quando as perguntas superarem os arquivos.

**Pequena empresa.** Um diagrama simples e uma lista de sistemas com responsáveis e fornecedores podem bastar. Atualize-o após toda mudança significativa. Resista a comprar uma plataforma para um parque pequeno, mas mantenha atual o diagrama, já que é inestimável em uma interrupção.

**Grande empresa.** A escala precisa de um modelo, de responsabilidade federada e de integração com várias fontes, incluindo aquisições. Padronize os identificadores e o modelo central, deixe as equipes estendê-lo dentro de regras e meça o uso e a exatidão por domínio. Espere conduzir uma função permanente de correspondência e limpeza.

**Governo e setor público.** Os serviços muitas vezes se apoiam em sistemas de longa vida, prestadores e infraestrutura compartilhada, e o impacto dos incidentes pode afetar o público. Mapeie explicitamente as dependências de fornecedores e de plataformas compartilhadas, guarde registros para auditorias e alinhe com o planejamento de continuidade (veja o tópico 5.6, Métricas de continuidade de serviço).

## Business case: motivações, ROI e TCO

Os custos são o esforço de modelagem e de governança, a integração de pipelines e da descoberta, alguma ferramenta e o esforço de auditorias e correções. Muitas organizações já possuem a plataforma. O povoamento por pipeline é barato depois que o modelo existe. Grandes programas para povoar tudo de uma vez têm sido caros e muitas vezes fracassaram.

Os retornos são incidentes mais curtos, mudanças mais seguras e menos tempo procurando informações. Construa o argumento com a sua própria evidência: o tempo que quem responde gasta achando dependências em um incidente típico, a proporção dos incidentes em que a falta de informação sobre dependências atrasou o diagnóstico e as mudanças que causaram impacto inesperado. A taxa de acerto da previsão de impacto é uma medida direta de se o registro teria ajudado. Evite alegações publicadas sobre a porcentagem de incidentes causados por mudanças ou o custo de interrupções a menos que possa rastrear sua fonte. Conte os custos de manter um registro grande e duvidoso contra o valor de um pequeno e confiável.

## Antipadrões e armadilhas

- **Povoar tudo primeiro.** Um registro enorme e obsoleto destrói a confiança. Comece pelos serviços críticos.
- **A descoberta como única fonte.** Ela não consegue dizer por que algo existe nem quem é o dono. Combine com declarações.
- **Auditar a completude e chamar de qualidade.** Completo e errado é pior que incompleto e certo. Amostre a exatidão.
- **Equipes centrais donas de todos os dados.** Elas não os conhecem. Dê a responsabilidade às equipes de serviço.
- **Campos obrigatórios com valores padrão.** Parecem completos e não trazem informação. Remova-os ou automatize-os.
- **Medir pelo número de CIs.** Mais não é melhor. Meça a exatidão, a taxa de acerto e o uso.
- **Ignorar as relações.** Sem dependências, um CMDB é um inventário. Invista no mapa dos serviços críticos.
- **Culpar as pessoas pelos erros.** Elas param de relatá-los. Trate uma dependência perdida como um achado.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Escopo e modelo | O que a descoberta achou | Modelo definido; escopo amplo | Modelo guiado por perguntas; serviços críticos mapeados | O escopo cresce quando a taxa de acerto e o uso justificam | Modelo federado entre equipes e fornecedores; identificadores compartilhados |
| Povoamento e qualidade | Carga manual ou única | Descoberta e importações programadas | Pipelines publicam a partir do código; descoberta como conferência; auditorias por amostragem | Exatidão, latência e duplicatas medidas e acompanhadas | Feeds em tempo real com reconciliação automatizada e confirmação do responsável |
| Uso | Raramente consultado | Usado por poucas equipes | Referenciado em incidentes e mudanças como prática padrão | Previsão de impacto testada contra incidentes; uso e utilidade acompanhados | O registro informa decisões automatizadas e mapas compartilhados com fornecedores |

## Lista de verificação

- [ ] As perguntas que o CMDB deve responder estão escritas.
- [ ] O escopo se limita aos serviços críticos, com uma regra de crescimento definida.
- [ ] O modelo tem um pequeno conjunto de classes, atributos e tipos de relação.
- [ ] Cada serviço crítico tem um responsável que confirmou seu registro no último trimestre.
- [ ] Os pipelines publicam as mudanças de CIs dos serviços construídos como código.
- [ ] Os resultados da descoberta são comparados com o registro, e as diferenças são revistas.
- [ ] Uma amostra aleatória de exatidão é auditada a cada trimestre nos dois sentidos.
- [ ] As revisões de incidentes registram se o impacto previsto estava certo.
- [ ] O uso do CMDB em incidentes e mudanças é acompanhado, com uma pergunta de utilidade.
- [ ] As classes e atributos sem uso são aposentados em um calendário.

## Prompts de IA

**Defina as perguntas e o escopo.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Analise uma falha da previsão de impacto.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Projete um arquivo de declaração para as equipes de serviço.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Planeje uma auditoria trimestral de exatidão.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de qualidade de configuração.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de CMDB traz seu vetor de manipulação, sua barreira de proteção e sua regra de evidência independente.

## Ideias-chave

- Construa o CMDB para responder a perguntas nomeadas sobre os serviços que mais importam e deixe-o crescer conforme a confiança cresce.
- Povoe-o a partir de pipelines e de código, use a descoberta como segunda opinião e deixe as equipes de serviço serem donas dos seus registros.
- Teste a qualidade contra eventos: compare o impacto previsto com o que realmente aconteceu nos incidentes.
- Meça o uso e a utilidade, e não o número de CIs.
- Amostre a exatidão a partir de evidências independentes nos dois sentidos.
- Aposente o que ninguém usa e corrija os erros na origem.

## Referências e leituras complementares

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Item de configuração](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Banco de dados de gestão de configuração](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Integridade de dados](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Resolução de entidades](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Descoberta de serviços](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Banco de dados em grafo](https://en.wikipedia.org/wiki/Graph_database).
