# Métricas de gestão de ativos de TI

**Você não consegue apoiar, proteger nem pagar com bom senso o que não consegue encontrar; por isso meça quão exatos, completos e atuais são seus registros de ativos e construa o hábito de registrar os ativos como subproduto do trabalho diário, e não como uma limpeza anual.**

## Visão geral e motivação

Todo serviço se apoia em coisas: notebooks, servidores, licenças, contas de nuvem, equipamentos de rede e os dados e contratos ligados a eles. A [gestão de ativos de TI](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) é o conjunto de práticas de negócio que une as funções financeira, contratual e de inventário para apoiar a gestão do ciclo de vida e a tomada de decisões estratégicas para o ambiente de TI. Responde a perguntas de que outras práticas dependem. O que temos? Onde está? Quem é responsável? Quanto custa? Quando deve ser renovado, corrigido ou substituído?

A entrega contínua e o ITIL se encontram de modo desajeitado neste terreno. As equipes que entregam software continuamente criam e destroem infraestrutura o tempo todo: contêineres, máquinas virtuais, ambientes de teste e contas de nuvem aparecem em minutos. Uma planilha trimestral não acompanha. A ITAM da tradição do ITIL insiste em registros, responsáveis e ciclos de vida, e essa insistência está certa, porque os ativos não geridos são onde crescem as lacunas de segurança, o dinheiro desperdiçado e as falhas de conformidade. A contribuição ágil é a colaboração contínua entre compras, finanças, segurança e operações e o hábito prático de registrar os ativos automaticamente quando são criados, por pipelines e infraestrutura como código, para que o registro seja um subproduto do trabalho.

Três termos se repetem neste tópico.

- **Ativo:** um item de valor para a organização que é gerido por um ciclo de vida. Na ITAM inclui hardware, software, recursos de nuvem, assinaturas e às vezes dados.
- **Registro de ativo:** a entrada que descreve um ativo: o que é, quem é o dono, onde está, em que estado está, quanto custa e a que está ligado.
- **Ciclo de vida:** as etapas por que um ativo passa, tipicamente requisitado, adquirido, recebido, implantado, em uso, mantido, aposentado e descartado. O pensamento de [ciclo de vida do produto](https://en.wikipedia.org/wiki/Product_lifecycle) se aplica a cada classe de ativo, com etapas diferentes para um notebook e uma assinatura de nuvem.

A ITAM se sobrepõe à gestão de configuração, que acompanha as relações entre os componentes para que se possa entender o impacto da mudança, e os próximos tópicos tomam software, hardware e configuração em sequência (veja o tópico 7.2, Métricas de ativos de software e licenças, o tópico 7.3, Métricas do ciclo de vida de ativos de hardware, e o tópico 7.4, Métricas de qualidade de configuração e CMDB). A diferença é de propósito: a gestão de ativos enfatiza a responsabilidade, o custo e o ciclo de vida, enquanto a gestão de configuração enfatiza a estrutura e a dependência. O mesmo inventário muitas vezes alimenta ambas.

A norma que a maioria dos programas de ITAM cita é a ISO/IEC 19770, uma família de normas para sistemas de gestão de ativos de TI. Cite-a pelo nome e pelo escopo e leia-a no órgão de normalização antes de contar com qualquer detalhe. Este tópico não reproduz seu texto.

As métricas de ativos são fáceis de transformar em metas, e as metas são fáceis de cumprir no papel. Um inventário pode mostrar 100% de exatidão porque registra apenas o que já era conhecido. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: meça a exatidão contra evidências independentes e trate um número perfeito como motivo para olhar com mais atenção (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Registre no momento da mudança.** Os ativos devem entrar e sair do registro como parte do trabalho que os cria ou remove.
- **Meça contra evidências independentes.** Exatidão significa concordância com a realidade, conferida por um método que não seja o próprio registro.
- **Todo ativo tem um responsável.** Um ativo de que ninguém é dono não será corrigido, pago com bom senso nem aposentado.
- **Mantenha o registro o menor possível.** Capture os campos de que as decisões precisam e nada mais.
- **Combine fontes.** Ferramentas de descoberta, compras, finanças, identidade e faturamento de nuvem veem cada uma parte do parque.
- **Colabore entre funções.** Compras, finanças, segurança e operações dividem o registro e sua qualidade.
- **Trate as lacunas como informação.** Um ativo não contabilizado é um achado a entender, e não uma falha a esconder.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exatidão do inventário | Proporção dos ativos amostrados cujo registro corresponde ao que é encontrado | ativos amostrados em que o registro corresponde à evidência física ou técnica em todos os campos combinados / ativos amostrados | porcentagem | Amostra de auditoria comparada com o registro de ativos e os dados de descoberta | Gestão de ativos de TI; gestão de configuração | A definição de pronto inclui registrar o ativo | Trimestral |
| Cobertura da descoberta | Proporção dos ativos esperados vistos pela descoberta no período | ativos vistos por pelo menos uma fonte de descoberta nos últimos 30 dias / ativos no registro que a descoberta consegue ver | porcentagem | Relatórios da ferramenta de descoberta cruzados com o registro | Gestão de ativos de TI; monitoramento e gestão de eventos | O estado da infraestrutura como código corresponde à realidade | Mensal |
| Taxa de reconciliação | Proporção dos ativos combinados entre fontes independentes | ativos combinados no registro e em uma segunda fonte (por exemplo, compras, identidade ou faturamento de nuvem) / ativos em qualquer das fontes | porcentagem | Exportações do registro, de compras, de identidade e do faturamento de nuvem | Gestão de ativos de TI; gestão de fornecedores | Fonte única da verdade para ambientes | Mensal |
| Parcela de ativos sem responsável | Proporção dos ativos sem um responsável nomeado e válido | ativos sem responsável ou com um responsável que saiu / ativos no registro | porcentagem | Registro cruzado com o diretório de pessoas | Gestão de ativos de TI; gestão de segurança da informação | Responsabilidade clara por serviços e componentes | Mensal |
| Completude do estágio do ciclo de vida | Proporção dos ativos com um estágio atual do ciclo de vida e as datas que esse estágio exige | ativos com estágio e datas exigidas registrados / ativos no registro | porcentagem | Registro | Gestão de ativos de TI; gestão de releases e implantação | Ciclo de vida do ambiente acompanhado no pipeline | Mensal |
| Tempo até registrar | Atraso entre uma mudança de ativo e sua atualização no registro | mediana e 85º percentil das horas ou dias do evento de mudança até a atualização do registro | dias | Eventos de mudança, de compras ou de pipeline comparados com os carimbos de tempo do registro | Gestão de ativos de TI; habilitação de mudanças | Registro automatizado no pipeline | Mensal |
| Taxa de ativos não contabilizados | Proporção dos ativos esperados que não podem ser localizados ou explicados na auditoria | ativos esperados mas não encontrados e não explicados por um descarte aprovado / ativos esperados | porcentagem | Resultados de auditoria | Gestão de ativos de TI; gestão de segurança da informação | Achado retrospectivo sobre itens perdidos | Por auditoria |

Declare o escopo de "ativo" para cada classe. Um notebook, uma máquina virtual, uma assinatura e uma licença são coisas diferentes, e os campos do registro e a evidência diferem. O tempo até registrar começa no evento que criou a mudança, como o recebimento de mercadorias, uma execução de pipeline ou o início de uma assinatura, e para quando o registro o reflete. Exclua os ativos deliberadamente fora do escopo, como contêineres de teste de vida curta, e liste-os como uma classe de exclusão no registro.

## Recomendações

### Decida o que está gerindo

**1. Liste as classes de ativos que importam e por quê.** Comece pelas que carregam custo, risco ou obrigação legal: dispositivos de usuários finais, servidores e contas de nuvem, equipamentos de rede, licenças e assinaturas de software e repositórios de dados críticos. Para cada classe, escreva as decisões que o registro deve apoiar: correções, renovação, auditoria, substituição, descarte. Pule as classes de que nenhuma decisão precisa.

**2. Defina os campos mínimos.** Para cada classe, escolha os poucos campos de que as decisões precisam: identificador, tipo, responsável, local ou conta, status, datas de aquisição e fim, centro de custo e vínculos com o serviço que apoia. Um registro curto e exato vale mais que um longo e obsoleto. Registre a definição no registro de métricas.

**3. Designe um responsável para cada classe e cada ativo.** O responsável pela classe projeta o registro e o processo. O responsável pelo ativo é a pessoa ou equipe responsável pelo ativo em uso. Use uma equipe, e não um indivíduo, quando um ativo é compartilhado, e mantenha atual o diretório para que as saídas não deixem ativos órfãos.

### Capture os ativos enquanto o trabalho acontece

**4. Registre os ativos no pipeline.** Onde a infraestrutura é criada por código, faça o pipeline escrever no registro na criação e na remoção. Isso deixa o tempo até registrar perto de zero e faz o registro concordar com o código. A prática ágil de entregar mudanças continuamente apoia isso: se toda implantação atualiza o registro, o registro raramente está errado.

**5. Ligue as compras e o registro.** Para hardware e software comprados, faça da ordem de compra ou da criação da assinatura o gatilho de um registro, e do recebimento de mercadorias ou da ativação o gatilho de uma mudança de estado. A prática de [gestão de estoque](https://en.wikipedia.org/wiki/Inventory_management) para bens físicos oferece padrões úteis para receber, guardar e entregar itens. Onde as compras acontecem fora do setor de compras, como cartões de crédito de equipes para assinaturas, acrescente uma conferência mensal dos dados de despesas.

**6. Use a descoberta como conferência, e não como registro.** As ferramentas de descoberta varrem redes e contas de nuvem e relatam o que encontram. São boas em dizer o que existe e ruins em dizer quem é o dono ou por quê. Use-as para detectar ativos ausentes e desconhecidos e para comparar com o registro. O passo de casar uma fonte contra outra é uma forma de [reconciliação](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), a mesma ideia que os contadores usam para comparar dois conjuntos de registros.

**7. Etiquete na criação.** Exija um responsável e uma etiqueta de serviço em todo recurso de nuvem e um rótulo em todo dispositivo físico. Os métodos de [rastreamento de ativos](https://en.wikipedia.org/wiki/Asset_tracking), como códigos de barras e etiquetas de radiofrequência, ajudam com itens físicos em depósitos e escritórios. Recursos sem etiqueta são achados para a equipe do responsável, tratados como parte normal das operações.

### Meça com honestidade

**8. Audite com uma amostra aleatória.** A cada trimestre, sorteie uma amostra aleatória de ativos do registro e confira-os contra evidências: ache o dispositivo, inspecione o recurso, confirme o responsável. Depois sorteie uma amostra no sentido contrário, a partir dos resultados da descoberta e dos dados de compras, e confira se cada um aparece no registro. Os dois sentidos revelam lacunas diferentes. Relate a exatidão de cada classe separadamente.

**9. Observe a qualidade dos dados ao longo do tempo.** A completude, a exatidão e a pontualidade dos registros são aspectos da [qualidade de dados](https://en.wikipedia.org/wiki/Data_quality). Acompanhe a tendência por campo e por classe e veja quais campos derivam mais depressa. A deriva em responsável e local é normal e diz onde automatizar.

**10. Relate as lacunas.** Mostre os ativos não contabilizados, a parcela sem responsável e os itens não reconciliados além da exatidão de manchete. Um relatório que esconde suas exceções é um relatório sobre o relatório. Nomeie um responsável e uma data para cada classe de lacuna.

### Feche o ciclo

**11. Aposente os ativos tão deliberadamente quanto os cria.** O descarte também precisa de registros: a data, o método e, para dispositivos que guardaram dados, evidência de que os dados foram apagados. Um registro de [cadeia de custódia](https://en.wikipedia.org/wiki/Chain_of_custody) mostra quem manuseou um ativo e quando. Ativos aposentados ainda no registro inflam os custos e confundem as auditorias.

**12. Use o registro nas decisões do dia a dia.** Correções, renovações, resposta de segurança e orçamento devem ler do registro. Quando as pessoas o usam, elas o corrigem. Quando o registro serve só para auditorias, decai. Reveja o uso do registro com as equipes que dependem dele e corrija primeiro os campos de que elas reclamam.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Exatidão do inventário | Amostrar os ativos fáceis; auditar só depois de uma limpeza; contar uma correspondência em menos campos | Amostra aleatória sorteada por alguém de fora da equipe; lista fixa de campos; amostra nos dois sentidos |
| Cobertura da descoberta | Estreitar os "ativos esperados" ao que a descoberta consegue ver; excluir redes difíceis de varrer | Documentar as exclusões; comparar com as compras e o faturamento de nuvem |
| Taxa de reconciliação | Escolher uma segunda fonte derivada da primeira; casar automaticamente por chaves fracas | Usar fontes realmente independentes; conferir as correspondências à mão por amostragem |
| Parcela de ativos sem responsável | Designar uma equipe genérica como responsável; inserir uma pessoa de fachada | Contagem de ativos de propriedade de equipes genéricas; amostra de confirmação de responsáveis |
| Completude do estágio do ciclo de vida | Preencher datas padrão; pôr todo ativo como "em uso" | Comparar o estágio com a evidência na auditoria; olhar a distribuição de idade |
| Tempo até registrar | Retrodatar eventos de mudança; registrar o horário do evento como horário do registro | Comparar com os carimbos de tempo do sistema de origem; trilha de auditoria das edições |
| Taxa de ativos não contabilizados | Baixar ativos sem aprovação; reclassificá-los como descartados | Aprovação de descarte e taxa de evidência; comparar as baixas com os registros financeiros |

Uma leitura saudável é uma cifra de exatidão que fica abaixo de 100% por razões honestas, com lacunas visíveis que encolhem, responsáveis que confirmam seus ativos quando perguntados e um registro que as pessoas usam para tomar decisões.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Registro automatizado | Rápido, consistente, pouco esforço | Exige engenharia; perde o que está fora do pipeline |
| Registro manual | Flexível, funciona para qualquer coisa | Lento, sujeito a erros, decai |
| Guiado por descoberta | Acha o desconhecido | Não consegue informar responsabilidade nem propósito |
| Guiado por compras | Capta custo e contrato | Perde compras paralelas e camadas gratuitas |
| Controle rígido das compras | Registro forte | Atrasa as equipes; estimula contornos |
| Controle leve com conferências | Rápido; conta com a confiança | Mais lacunas a achar e corrigir |
| Esquema de registro grande | Relatórios ricos | Difícil de manter exato |
| Esquema de registro pequeno | Fácil de manter | Análise limitada |

A resposta pragmática é automatizar o registro onde a infraestrutura é código, usar a descoberta e os dados de faturamento como conferências independentes e manter o registro pequeno. Confie nas equipes para criar o que precisam, peça-lhes que etiquetem e verifique por amostragem.

## Perguntas para discutir com sua equipe

**1. Se tivéssemos de achar amanhã todos os ativos ligados ao nosso serviço mais importante, quanto tempo levaria?**
Escolha um serviço e rastreie seus ativos a partir do registro e de outras fontes. Cronometre o exercício e anote as lacunas. O facilitador deve registrar quais fontes concordaram e quais não. O resultado mostra se o registro é uma ferramenta de trabalho ou um documento.

**2. Que ativos são criados sem que ninguém nesta sala saiba?**
Pensem em contas de nuvem, assinaturas, ambientes de teste e dispositivos comprados fora do setor de compras. Perguntem como esses apareceriam. A conversa acha os vazamentos. Combinem uma fonte de evidência independente a acrescentar à reconciliação neste trimestre.

**3. Quem é dono dos ativos que temos hoje, e como sabemos que ainda existem?**
Peguem uma amostra de ativos e peçam aos responsáveis nomeados que confirmem. Anotem quantos responsáveis mudaram de papel ou saíram. Decidam como o diretório e o registro se manterão em sintonia, por exemplo por uma conferência automatizada quando alguém sai.

**4. Como auditamos nosso próprio registro sem corrigir a própria lição de casa?**
Discutam quem sorteia a amostra e quem a confere. Perguntem o que aconteceria se o resultado fosse ruim. O facilitador deve explorar se as pessoas se sentem seguras relatando um número ruim, já que uma auditoria insegura produz números bons.

**5. O que registramos que ninguém usa?**
Listem os campos do registro e perguntem quais decisões usam cada um. Campos sem usuário são candidatos à remoção. Campos usados mas pouco confiáveis são candidatos à automação. Combinem duas mudanças.

**6. O que acontece com um ativo entre "não é mais necessário" e "sumiu"?**
Rastreiem um dispositivo aposentado ou um serviço desativado. Quem confirma que os dados foram apagados? Quando o registro é encerrado? As lacunas desse caminho são onde se acumulam custo, risco e achados de auditoria.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega criam a maioria dos novos ativos e sentem o registro como atrito, a menos que seja automático. Devem tratar o registro de ativos como parte da definição de pronto de um ambiente, deixar os pipelines registrarem o que criam e etiquetar os recursos com responsáveis. Beneficiam-se de um registro exato quando precisam achar custos, corrigir ou aposentar um ambiente.

### Equipes de serviço e operações

As equipes de operações dependem do registro para correções, resposta a incidentes e capacidade. Devem reconciliar a descoberta com o registro, perseguir os ativos sem responsável e relatar as lacunas como achados. Também cuidam do manuseio físico: recebimento, imagem, armazenamento e descarte, onde os registros de cadeia de custódia importam.

### Liderança e governança

Os líderes e auditores contam com os dados de ativos para o controle de custos, a garantia de segurança e a conformidade. Devem pedir o método de exatidão e a lista de lacunas, e não apenas a manchete, e financiar a automação do registro. A governança deve esperar que o registro seja usado nas decisões e tratar com suspeita um 100% relatado.

### Clientes e usuários

Os usuários vivenciam a gestão de ativos quando um dispositivo chega pronto, uma licença está lá quando necessária e um notebook perdido é bem tratado. O feedback deles sobre a integração e o equipamento é evidência de como o processo funciona na prática (veja o tópico 6.4, Experiência de usuários e colaboradores). Eles também têm um papel: avisar a TI quando um equipamento muda de lugar ou sai.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma empresa de logística de médio porte apoia cerca de 2.400 funcionários e opera uma plataforma de produto em infraestrutura de nuvem. Os números abaixo são ilustrativos.

Uma auditoria interna pede o número de dispositivos e recursos de nuvem que a empresa possui. O registro mostra 3.100 dispositivos de usuários finais e 1.850 recursos de nuvem. A gerente de ativos decide testar as cifras antes de relatá-las. Sorteia uma amostra aleatória de 100 dispositivos do registro e encontra 87 que correspondem nos quatro campos combinados, uma exatidão de 87%. No sentido contrário, sorteia 100 dispositivos da ferramenta de gestão de endpoints e encontra 94 no registro. A cobertura da descoberta do parque de nuvem é de 82%, porque três contas criadas por equipes de projeto não estão conectadas à ferramenta de descoberta. A reconciliação da exportação de faturamento de nuvem com o registro casa 71% dos recursos faturados, e os não casados são sobretudo ambientes de teste sem etiqueta. A parcela de ativos sem responsável é de 9%, com um terço deles pertencente a pessoas que saíram.

A equipe faz quatro mudanças com as equipes de produto e as finanças. Os modelos de pipeline agora registram todo novo ambiente e exigem um responsável e uma etiqueta de serviço. A fatura mensal de nuvem é reconciliada com o registro, com os recursos sem etiqueta relatados aos donos das contas. Uma conferência mensal compara o diretório de pessoas com os responsáveis pelos ativos e envia uma lista aos gestores quando alguém sai. O recebimento de mercadorias no depósito dispara uma atualização do registro no mesmo dia. Mudam também o modo de relatar: o resumo da auditoria mostra a exatidão dos dois sentidos da amostra, a lista de lacunas e a parcela sem responsável.

Depois de dois trimestres, a exatidão da amostra do registro é de 93%, a reconciliação do parque de nuvem é de 90% e a parcela sem responsável é de 3%. O chefe de finanças pede um único número de "exatidão do inventário" para o conselho. A gerente de ativos dá a cifra com o método e a lista de lacunas e se recusa a relatar uma meta de 100%, explicando que o objetivo é manter as lacunas visíveis e encolhendo. A decisão é registrada, e a equipe anota que o número menor de um método melhor é mais útil que a cifra anterior, não verificada.

## Ágil, IA, automação e análise

### Ágil

Registre os ativos como subproduto do trabalho diário e reveja a exatidão com os responsáveis em uma cadência regular, em vez de uma limpeza anual. O cuidado é que uma meta de exatidão pode levar as equipes a apagar registros que não conseguem confirmar.

### IA

As ferramentas e assinaturas de IA também são ativos, e muitas vezes são adotadas sem um registro. Inclua serviços de IA, modelos e fontes de dados na descoberta e pareie a exatidão do inventário com a parcela de ativos sem responsável. O cuidado é que funcionalidades de IA ativadas dentro de produtos existentes não aparecem como novas compras; por isso pergunte aos fornecedores o que está ligado.

### Automação

Rode a descoberta automaticamente e reconcilie-a com os registros de compras e de identidade e meça a descoberta pela cobertura e pelas correspondências falsas. O cuidado é que a descoberta acha o que lhe é apontado; por isso audite o que ela perde.

### Análise

Relate a exatidão de uma auditoria por amostra, com o tamanho da amostra, além das contagens das ferramentas. A decisão informada é onde investir em descoberta e responsabilidade. O cuidado é que reconciliar duas fontes falhas pode parecer limpo enquanto ambas estão erradas.

## Olhar setorial

**Startup.** Pode não haver registro formal, só contas de nuvem e alguns notebooks. Mantenha uma lista simples com responsáveis, etiquete os recursos de nuvem desde o começo e reveja a lista todo mês. Evite comprar uma plataforma antes de saber que perguntas precisa responder.

**Pequena empresa.** Um único administrador pode cuidar de tudo. Uma planilha com poucos campos pode funcionar, se alguém a conferir contra as compras duas vezes por ano. Preste atenção às licenças e assinaturas, que são fáceis de perder de vista, e ao descarte de dispositivos que guardaram dados.

**Grande empresa.** A escala precisa de automação, responsáveis claros pelas classes e reconciliação entre várias fontes. Espere que as aquisições tragam parques desconhecidos e planeje um modo padrão de trazê-los para o mesmo registro. Alinhe com as finanças a contabilidade de ativos, incluindo como os [ativos fixos](https://en.wikipedia.org/wiki/Fixed_asset) são capitalizados e depreciados, e combine onde o registro de TI e o razão financeiro devem coincidir.

**Governo e setor público.** Os órgãos públicos enfrentam auditoria, regras de compras e obrigações de registros e muitas vezes guardam dados sensíveis em dispositivos. Mantenha evidências de descarte, documente a cadeia de custódia e alinhe o registro ao relato de ativos exigido. Trate o registro como parte da evidência para auditorias (veja o tópico 8.3, Métricas de conformidade e auditoria).

## Business case: motivações, ROI e TCO

Os custos incluem o tempo para projetar o registro, ferramentas de descoberta e reconciliação se você não as tem, esforço de engenharia para registrar ativos em pipelines e o esforço rotineiro de amostrar e corrigir. Muitas organizações já possuem ferramentas de descoberta e de endpoints. Uma equipe modesta pode conduzir um programa, e o custo contínuo é baixo depois que o registro é automatizado.

Os retornos são desperdício evitado e risco reduzido. Registros exatos reduzem o pagamento por assinaturas e recursos sem uso, aceleram a resposta a incidentes e as correções porque você sabe o que existe e cortam o esforço de auditoria. Evite alegar economias percentuais específicas de estudos publicados. Meça a sua própria linha de base: o número de recursos de nuvem sem dono e seu custo mensal, o tempo para responder a uma pergunta de auditoria e as licenças pagas mas sem uso. Conte também o custo do risco: um servidor desconhecido é uma exposição de segurança, e um dispositivo perdido com dados tem um custo de notificação. O tratamento financeiro dos custos é coberto mais adiante nesta parte (veja o tópico 7.5, Custo de serviço e economia unitária).

## Antipadrões e armadilhas

- **A limpeza anual.** Um grande esforço uma vez por ano decai em semanas. Registre continuamente e amostre a cada trimestre.
- **Auditar apenas o registro.** Prova que o registro concorda consigo mesmo. Amostre a partir de evidências independentes nos dois sentidos.
- **Uma nota perfeita.** Uma cifra de 100% costuma significar escopo estreito ou evidência fraca. Olhe o que foi excluído.
- **Campos de responsável preenchidos com uma equipe genérica.** Parece completo e é inútil. Conte a responsabilidade genérica como lacuna.
- **Campos demais.** As pessoas os preenchem com padrões. Mantenha o registro ao que as decisões precisam.
- **Ferramenta primeiro, processo depois.** Uma plataforma de descoberta sem regras de responsabilidade e de ciclo de vida produz uma bagunça maior. Decida primeiro as perguntas.
- **Penalizar as equipes por lacunas.** Elas escondem ativos. Trate as lacunas como achados e corrija a causa.
- **Esquecer o descarte.** Ativos aposentados que ficam no registro ou saem sem um registro de apagamento criam custo e risco.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Captura | Planilhas atualizadas quando lembradas | Registro para as principais classes, em grande parte manual | Registro ligado a compras e pipelines | Registro automatizado; tempo até registrar medido | Ativos registrados entre equipes e fornecedores a partir de um fluxo único de eventos |
| Exatidão | Desconhecida | Contagens ocasionais | Amostragem independente trimestral nos dois sentidos | Exatidão e lacunas acompanhadas por classe e alimentando a melhoria | Conferências independentes compartilhadas entre TI, finanças e segurança |
| Uso | Registro usado só para auditorias | Usado por poucas equipes | Correções, renovação e orçamento leem do registro | Uso revisto; campos ajustados às decisões | Registro conduz decisões automatizadas com supervisão humana |

## Lista de verificação

- [ ] As classes de ativos e as decisões que cada registro apoia estão listadas.
- [ ] Os campos mínimos por classe estão definidos e registrados no registro de métricas.
- [ ] Toda classe e todo ativo tem um responsável nomeado, mantido atual contra o diretório.
- [ ] Os pipelines registram a nova infraestrutura com um responsável e uma etiqueta de serviço.
- [ ] As compras e a criação de assinaturas disparam registros de ativos.
- [ ] Os dados de descoberta e de faturamento são reconciliados com o registro mensalmente.
- [ ] Uma amostra aleatória é auditada a cada trimestre nos dois sentidos.
- [ ] As listas de lacunas com responsáveis e datas são publicadas junto com as cifras de exatidão.
- [ ] O descarte tem um método registrado e evidência de apagamento de dados.
- [ ] Os campos sem uso são removidos; o registro é usado nas decisões diárias.

## Prompts de IA

**Projete um registro mínimo de ativos.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Planeje uma amostra de auditoria nos dois sentidos.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Analise um resultado de reconciliação.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Redija uma verificação de saídas e mudanças de papel.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de ativos antes de relatá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de ativos traz seu vetor de manipulação, sua barreira de proteção e sua regra de evidência independente.

## Ideias-chave

- Registre os ativos no momento da mudança, de preferência por pipelines e compras, para que o registro seja um subproduto do trabalho.
- Meça a exatidão contra evidências independentes, amostrando nos dois sentidos.
- Todo ativo precisa de um responsável, e os ativos sem responsável são achados.
- Mantenha o registro pequeno e útil nas decisões diárias.
- Relate as lacunas, e não apenas a manchete, e desconfie de uma nota perfeita.
- Planeje o descarte com tanto cuidado quanto a criação.

## Referências e leituras complementares

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [Gestão de ativos de TI](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Ciclo de vida do produto](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Gestão de estoque](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliação (contabilidade)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Rastreamento de ativos](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Qualidade de dados](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Cadeia de custódia](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Ativo fixo](https://en.wikipedia.org/wiki/Fixed_asset).
