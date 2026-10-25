# Métricas de ativos de software e licenças

**O software é comprado, assinado, construído e emprestado, e cada rota cria obrigações e custos; por isso meça a que você tem direito, o que realmente usa e de que depende e facilite para as equipes a escolha de ferramentas sem criar surpresas depois.**

## Visão geral e motivação

O software é a classe de ativos que muda mais depressa e é mais difícil de ver. Um desenvolvedor acrescenta uma biblioteca em minutos. Uma equipe assina uma ferramenta de software como serviço no cartão da empresa. Um fornecedor muda seu modelo de preços entre renovações. Um contrato permite 500 usuários e 700 têm contas. A [gestão de ativos de software](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) é a prática de negócio de gerir e otimizar a compra, a implantação, a manutenção, o uso e o descarte de software em uma organização. Fica dentro da prática mais ampla de gestão de ativos de TI (veja o tópico 7.1, Métricas de gestão de ativos de TI) e compartilha sua disciplina de registros, responsáveis e ciclos de vida.

A entrega contínua e a gestão de ativos de software puxam em direções diferentes quanto à velocidade. As equipes que entregam continuamente precisam escolher e adotar ferramentas depressa e constroem sobre componentes de código aberto às centenas. A gestão de ativos de software quer saber o que está em uso, sob quais termos, a que custo e com que risco. Ambas estão certas. O caminho é a colaboração contínua entre equipes, compras, jurídico, segurança e finanças: tornar rápido o caminho aprovado, tornar fácil de achar o catálogo de ferramentas aprovadas e tornar automáticas as verificações. Atrasar as equipes com um longo processo de aprovação produz [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT), o oposto da visibilidade que todos querem.

Quatro tipos de software importam, e as métricas diferem entre eles.

- **Software licenciado** instalado em dispositivos ou servidores, regido por uma [licença de software](https://en.wikipedia.org/wiki/Software_license) que diz quem pode usá-lo, quantos podem usá-lo e sob quais condições. Os direitos podem ser por usuário, por dispositivo, por núcleo ou por local, e a unidade decide como se conta.
- **Software como serviço.** O [software como serviço](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) é acessado por uma rede e pago por assinatura, muitas vezes por assento ou por uso. É fácil de adotar e fácil de esquecer. Ferramentas sobrepostas e assentos sem uso se acumulam.
- **Componentes de código aberto.** O [software de código aberto](https://en.wikipedia.org/wiki/Open-source_software) está disponível sob licenças que concedem direitos amplos com condições. Algumas licenças, chamadas de licenças [copyleft](https://en.wikipedia.org/wiki/Copyleft), exigem que o trabalho derivado seja compartilhado sob os mesmos termos. A conformidade depende de como um componente é usado e distribuído, e a interpretação de uma licença é uma questão jurídica.
- **Software que você constrói.** O seu próprio código é um ativo e depende de muitos componentes. Uma [lista de materiais de software](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) é uma lista dos componentes de um software. Ajuda a responder quais dos seus serviços usam uma dada biblioteca quando surge uma vulnerabilidade ou um problema de licença.

As métricas de ativos de software estão expostas à distorção habitual. Uma posição de licenças pode parecer saudável porque o inventário é incompleto. O custo de shelfware pode parecer baixo porque os contratos foram encurtados antes da revisão. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica; por isso cada medida aqui vem pareada com uma conferência independente (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Uma cautela sobre a lei: os termos de licença e os direitos de auditoria são questões jurídicas. Este tópico descreve a prática de medição. Não interpreta nenhuma licença e não substitui o aconselhamento de um advogado qualificado para a sua situação e jurisdição.

## Princípios-chave

- **Meça o direito contra o uso.** Saber o que você pode usar e o que de fato usa é a comparação central.
- **Conte pela unidade que a licença usa.** Usuários, dispositivos, núcleos e assinaturas são diferentes, e misturá-los esconde a resposta.
- **Faça do caminho aprovado o caminho rápido.** Um catálogo visível e uma aprovação rápida reduzem a adoção paralela.
- **Inclua componentes além de produtos.** As bibliotecas de código aberto e suas licenças fazem parte do parque.
- **Reveja antes da renovação.** O melhor momento para cortar desperdício é antes da data do contrato.
- **Mantenha o jurídico na conversa.** A interpretação pertence às pessoas qualificadas para dá-la.
- **Compartilhe o quadro com as equipes.** As equipes que veem o próprio uso e custo fazem melhores escolhas.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Posição efetiva de licenças | Comparação dos direitos mantidos com o uso encontrado, por produto, na unidade de contagem da própria licença | direitos mantidos menos implantações ou usuários encontrados, por produto | unidades (excedente positivo, falta negativa) | Registros de direitos, ferramenta de descoberta, sistema de identidade | Gestão de ativos de TI; gestão de fornecedores | Catálogo visível e dados de uso para as equipes | Mensal para produtos-chave; trimestral para os demais |
| Taxa de utilização de licenças | Proporção dos direitos pagos que estão em uso ativo | direitos com atividade nos últimos 90 dias / direitos pagos | porcentagem | Relatórios de uso do fornecedor, registros de identidade, registros de direitos | Gestão de ativos de TI; gestão financeira | Retrospectiva sobre o valor da ferramenta | Mensal |
| Custo de shelfware | Custo anual dos direitos pagos e sem uso | soma de (direitos sem uso vezes custo unitário) | moeda por ano | Registros de direitos, dados de uso, faturas | Gestão de ativos de TI; gestão financeira | Redução de desperdício na cadeia de ferramentas | Trimestral |
| Contagem de aplicações não sancionadas | Número de aplicações de software em uso que não estão no catálogo aprovado | aplicações vistas em dados de despesas, registros de login único ou dados de rede que não estão no catálogo | contagem | Relatórios de despesas, provedor de identidade, dados de rede e endpoints | Gestão de ativos de TI; gestão de segurança da informação | Equipes escolhendo ferramentas com apoio visível | Mensal |
| Prontidão para renovação | Proporção das renovações que tiveram uma revisão de uso antes da data de aviso | renovações com uma revisão de uso concluída pelo menos 90 dias antes da data de aviso / renovações vencendo no período | porcentagem | Registro de contratos e registros de revisão | Gestão de fornecedores; gestão financeira | Planejar com antecedência a mudança | Trimestral |
| Cobertura de SBOM | Proporção dos serviços em produção com uma lista de materiais de software atual | serviços com um SBOM gerado no último ciclo de release / serviços em produção | porcentagem | Saídas do pipeline de build, catálogo de serviços | Gestão de ativos de TI; gestão de segurança da informação | A definição de pronto inclui visibilidade das dependências | Mensal |
| Cobertura de revisão de código aberto | Proporção dos componentes em produção com uma identificação de licença e uma decisão de política registradas | componentes com licença e decisão registradas / componentes encontrados nos SBOMs | porcentagem | Ferramenta de análise de composição de software, registro de políticas | Gestão de ativos de TI; gestão de fornecedores | Revisão de dependências no pipeline | Mensal |

Declare a unidade de contagem de cada produto no registro. A utilização conta a atividade a partir de um evento definido, como o login, e de uma janela declarada. Exclua das contagens de usuários as contas de serviço e de teste somente quando os termos da licença permitirem, e registre a regra. O custo é o preço unitário do contrato líquido dos descontos combinados, e a data do preço é registrada.

## Recomendações

### Saiba o que você tem e o que usa

**1. Mantenha um registro de direitos para cada produto que custa dinheiro ou traz obrigações.** O registro deve guardar o fornecedor, o produto, o tipo de licença, a unidade de contagem, a quantidade, o prazo, o preço, as datas de renovação e de aviso, as restrições e o responsável. Guarde o contrato ou um link para ele. A métrica depende desse registro, e muitas vezes ele não existe para assinaturas compradas fora do setor de compras.

**2. Meça o uso com a unidade do fornecedor.** As licenças por assento contam usuários nomeados, e as licenças por processador contam núcleos. A utilização contra a unidade errada dá falso conforto. Onde os termos são complexos, peça às compras e ao jurídico que descrevam a regra de contagem em linguagem simples uma vez e registre-a.

**3. Combine três fontes de dados de uso.** O console administrativo do fornecedor, os registros de login do seu provedor de identidade e as suas ferramentas de descoberta veem cada um uma parte. Onde discordam, descubra por quê. Um assento atribuído mas nunca usado é candidato à recuperação, e um usuário que aparece em um registro e não em outro pode ser um problema de dados.

**4. Recupere por padrão os assentos sem uso.** Defina uma regra, como remover o acesso após 90 dias sem uso e restaurá-lo sob pedido. Facilite a restauração para que a regra não frustre as pessoas. A recuperação é uma prática contínua, e não um projeto, e funciona melhor quando é automatizada e anunciada.

### Faça do caminho certo o caminho fácil

**5. Publique um catálogo de ferramentas aprovadas.** Liste o que as equipes podem usar, quanto custa, quem dá suporte e como pedir acesso. Acrescente uma rota rápida para propor uma nova ferramenta, com uma revisão curta de segurança, privacidade e custo. Um catálogo que ajuda as pessoas a achar a ferramenta existente evita compras duplicadas (veja o tópico 6.3, Métricas de adoção de serviços e catálogo).

**6. Observe a dispersão sem puni-la.** Use dados de despesas, registros de login único e dados de rede para achar aplicações que não estão no catálogo. Trate cada uma como uma conversa: de que a equipe precisa, e uma ferramenta aprovada poderia servir? Conte as aplicações não sancionadas, acompanhe a tendência e mire em trazer as úteis para a gestão, e não em eliminá-las.

**7. Dê às equipes visibilidade do próprio uso e custo.** Uma visão mensal de assentos, uso e custo por equipe permite que elas limpem as próprias assinaturas. A visibilidade funciona melhor que o policiamento e respeita a preferência ágil por equipes autoorganizadas com a informação de que precisam.

### Planeje as renovações e gira a dependência

**8. Reveja o uso antes de toda renovação significativa.** Defina uma revisão de 90 a 120 dias antes da data de aviso, com o responsável, as compras e as finanças. Leve a utilização, o custo de shelfware, as alternativas e o feedback da equipe. A prontidão para renovação é a proporção de renovações que chegam a essa revisão a tempo. Uma data de aviso perdida é um custo com uma causa.

**9. Observe o aprisionamento por fornecedor.** O [aprisionamento por fornecedor (vendor lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in) torna caro trocar de fornecedor. Registre a rota de saída dos produtos importantes: formatos de exportação de dados, termos contratuais de rescisão e o esforço para substituir. Você não precisa evitar a dependência, mas deve saber seu preço.

**10. Gere um SBOM a cada release.** As ferramentas de build podem produzir um SBOM automaticamente como parte do pipeline; assim a informação permanece atual sem esforço contínuo. Guarde-o com o release e torne-o pesquisável para poder responder quais serviços usam um componente. Isso apoia tanto o licenciamento quanto a resposta de segurança.

**11. Reveja as licenças de código aberto no pipeline.** As ferramentas de [análise de composição de software](https://en.wikipedia.org/wiki/Software_composition_analysis) identificam componentes e suas licenças. Combine com o jurídico uma política curta sobre quais licenças são aprovadas, quais precisam de revisão e quais não são permitidas para o seu uso e faça o pipeline sinalizar as exceções. Guarde as decisões de política em um registro. A ferramenta identifica as licenças, e uma pessoa qualificada para interpretá-las decide os casos difíceis.

### Prepare-se para auditorias com calma

**12. Mantenha a evidência pronta, e não uma correria.** Uma [auditoria de software](https://en.wikipedia.org/wiki/Software_audit) por um fornecedor ou regulador pede que você demonstre que seu uso corresponde aos seus direitos. Se os registros de direitos e os dados de uso já são reconciliados todo mês, uma auditoria é um pedido de rotina. Envolva cedo o jurídico e as compras, responda por um único canal e não autorrelate conclusões que não tenha revisto com eles.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Posição efetiva de licenças | Contar em uma unidade favorável; deixar de fora da descoberta as implantações paralelas | Contar na unidade da própria licença; comparar com os dados de despesas e de identidade; revisão jurídica da regra de contagem |
| Taxa de utilização de licenças | Encurtar a janela de atividade; contar logins de bots ou contas de serviço como uso | Janela fixa no registro; excluir contas não humanas; comparar com o relatório de uso do fornecedor |
| Custo de shelfware | Renegociar ou cancelar logo antes da revisão para reduzir o número; ignorar assinaturas em cartões | Incluir todas as fontes de gasto; acompanhar o custo no início da janela de aviso |
| Contagem de aplicações não sancionadas | Aprovar tudo no catálogo para reduzir a contagem; esconder o uso com contas pessoais | Critérios de revisão do catálogo; olhar os dados de gasto e de identidade; perguntar às equipes do que precisam |
| Prontidão para renovação | Fazer uma revisão pro forma; definir a data de aviso mais tarde | Lista de verificação da revisão com insumos exigidos; datas de contrato mantidas pelas compras |
| Cobertura de SBOM | Gerar SBOMs que omitem dependências transitivas; contar saídas de build que não são liberadas | Definir a profundidade no registro; conferir por amostragem um SBOM contra o artefato implantado |
| Cobertura de revisão de código aberto | Marcar componentes como revistos sem uma decisão; aceitar licenças "desconhecidas" | Contar os componentes com licença desconhecida; rever uma amostra de decisões |

Uma leitura saudável é uma posição de licenças que combina com a evidência independente, uma taxa de utilização que sobe porque os assentos são recuperados e não porque a definição mudou, uma contagem de aplicações não sancionadas que cai conforme o catálogo melhora e renovações que chegam com uma revisão.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Aprovação central de todas as ferramentas | Controle forte, uma só visão | Lenta; estimula o shadow IT |
| Escolha da equipe dentro de barreiras de proteção | Rápida; ajusta-se às necessidades da equipe | Mais variedade; exige visibilidade e revisão |
| Recuperação agressiva de assentos | Economiza custo | Pode frustrar os usuários se a restauração for lenta |
| Provisão generosa de assentos | Pouco atrito | O desperdício se acumula |
| Acordos corporativos | Custo unitário menor, mais simples | Aprisionamento; pagar por uma amplitude desnecessária |
| Pagamento por uso | Ajusta o custo ao uso | Faturas imprevisíveis |
| Varredura automatizada de licenças | Consistente e rápida | Exige julgamento humano nos casos limítrofes |
| Revisão manual de componentes | Cuidadosa | Não escala para grandes árvores de dependências |

A resposta pragmática é dar às equipes escolha dentro de barreiras de proteção claras, automatizar as verificações e gastar a atenção humana nos grandes contratos e nas questões difíceis de licença. Mantenha uma rota rápida para novas ferramentas e uma rota fácil para restaurar o acesso recuperado.

## Perguntas para discutir com sua equipe

**1. Quais três produtos nos custam mais, e sabemos quantas pessoas os usam?**
Liste os maiores contratos e a unidade de contagem de cada um. Compare com os dados de uso. O facilitador deve procurar produtos em que ninguém sabe a unidade ou em que não existem dados de uso. Combinem coletar os dados de um deles antes da próxima renovação.

**2. Como uma nova ferramenta é adotada aqui, e quanto tempo leva?**
Rastreiem um exemplo recente do pedido ao acesso. Perguntem quantas equipes pularam o caminho e por quê. A resposta mostra se o caminho aprovado é rápido. Combinem uma melhoria no caminho e um modo de saber se funcionou.

**3. O que aconteceria se um fornecedor nos pedisse para provar nossa posição de licenças no mês que vem?**
Percorram quem responderia, que registros existem e que lacunas há. A conversa não deve visar a conclusões jurídicas, apenas a identificar registros ausentes. Nomeiem as pessoas do jurídico e das compras que estariam envolvidas e como a equipe as alcançaria.

**4. Onde recuperamos assentos sem uso, e onde não?**
Revejam as regras de recuperação dos principais produtos. Perguntem o que aconteceria se uma regra fosse aplicada ao resto. Discutam como tornar indolor a restauração do acesso, já que é isso que torna aceitável a regra.

**5. Conseguimos dizer quais dos nossos serviços usam uma dada biblioteca de código aberto?**
Escolham uma biblioteca conhecida e tentem responder. Se levar mais que alguns minutos, discutam por quê. Combinem qual passo do pipeline poderia produzir um SBOM e onde os resultados poderiam ser guardados.

**6. De que dependemos que seria difícil deixar?**
Listem produtos cujos dados ou fluxo de trabalho estão profundamente ligados a um fornecedor. Perguntem quanto custaria sair e como começariam. O facilitador pode registrar a resposta como insumo do planejamento de renovações.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega escolhem ferramentas e bibliotecas todo dia. Devem usar o catálogo aprovado onde as atende, propor acréscimos com uma nota curta e deixar o pipeline gerar SBOMs e sinalizar problemas de licença. Precisam de respostas rápidas: uma política clara sobre licenças comuns e uma rota para perguntar sobre as incomuns. Uma equipe que vê os próprios dados de assentos e gastos os limpará sem que lhe digam.

### Equipes de serviço e operações

As equipes de operações conduzem a descoberta, gerem o acesso e atendem renovações e auditorias. Devem reconciliar os dados de uso com os direitos, recuperar assentos sem uso em um calendário e manter atual o registro de contratos. Também carregam o peso do suporte a ferramentas não geridas, o que é uma boa razão para trazer as úteis para a gestão.

### Liderança e governança

Os líderes querem evitar custos não planejados e exposição jurídica sem atrasar as equipes. Devem financiar a automação, pedir a evidência independente por trás das alegações de posição de licenças e manter o jurídico e as compras no circuito. A governança deve esperar que as renovações sejam revistas a tempo e que a política de código aberto seja aplicada no pipeline.

### Clientes e usuários

Os usuários querem que a ferramenta de que precisam funcione de primeira, sem longa espera. Notam quando o acesso some sem aviso ou quando duas ferramentas fazem o mesmo trabalho. Devem ser avisados quando assentos serão recuperados, ter uma rota fácil para pedir acesso e ser consultados quando uma ferramenta é substituída.

## Na prática: um exemplo de gestão de serviços

O grupo de tecnologia de uma organização regional de notícias apoia 900 funcionários e opera uma plataforma de publicação com cerca de 40 serviços. Os números abaixo são ilustrativos.

O diretor financeiro pergunta por que os custos de software cresceram mais depressa que o quadro de pessoal. O gerente de ativos de software reúne os dados. Os registros de direitos cobrem 61 produtos. Os registros de login e os relatórios dos fornecedores mostram que o pacote de design tem 220 assentos e 140 usuários ativos nos últimos 90 dias, uma taxa de utilização de 64%, com os assentos sem uso custando cerca do mesmo que o salário de um engenheiro. Os dados de despesas mostram 37 aplicações que não estão no catálogo, sobretudo ferramentas de colaboração e de análise compradas pelas equipes. Três das maiores renovações tiveram datas de aviso que passaram sem uma revisão de uso.

A equipe faz quatro mudanças com as equipes de produto. Uma regra de recuperação de assentos remove o acesso após 90 dias sem uso, com um pedido de um clique para restaurá-lo. Uma página de catálogo lista as ferramentas aprovadas, seu custo e um responsável, com uma rota de dois dias para propor uma nova ferramenta. As revisões de renovação começam 100 dias antes da data de aviso, com uma lista de verificação de utilização, alternativas e feedback da equipe. O pipeline de build da plataforma de publicação passa a gerar um SBOM a cada release, e uma varredura de licenças sinaliza para revisão do jurídico os componentes com licenças desconhecidas ou restritas.

Três meses depois, a utilização do pacote de design é de 86% após recuperar 60 assentos, e uma renovação é renegociada para um número menor de assentos. A contagem de aplicações não sancionadas cai de 37 para 24, quando a equipe acrescenta quatro ferramentas úteis ao catálogo e aposenta duplicatas. A cobertura de SBOM é de 70% dos serviços em produção. A varredura acha um componente com licença desconhecida em um serviço pouco usado, que o jurídico revê e a equipe substitui. Um fornecedor pede uma verificação de licenças de outro produto, e os registros produzidos para a auditoria coincidem, com uma correção. O diretor pede a promessa de 100% de utilização, e o gerente explica que uma cifra saudável deixa alguma folga para novos funcionários e mudanças e propõe uma faixa como orientação, e não como meta. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Facilite para as equipes a escolha de ferramentas com um processo curto e visível e reveja o uso com as partes interessadas regularmente. O cuidado é que um processo de aprovação rígido empurra as pessoas para ferramentas não sancionadas.

### IA

Os serviços de IA acrescentam novos modelos de licença, baseados em assentos, tokens ou uso, e novas obrigações sobre dados e termos de modelos. Acompanhe a utilização de licenças e o custo por usuário ativo das ferramentas de IA e pareie-os com uma conferência de utilidade pelos usuários. O cuidado é que o preço baseado em uso pode crescer sem ser notado; por isso defina alertas e responsáveis.

### Automação

Colete automaticamente os dados de direitos e de uso e gere a lista de materiais de software no pipeline. Meça a automação pela cobertura e pelos falsos positivos. O cuidado é que uma lista de materiais gerada mas não lida não reduz o risco.

### Análise

Mostre a posição efetiva de licenças e o custo de shelfware com a data dos dados. A decisão informada é o que renovar, reduzir ou largar. O cuidado é que as regras de licença são complexas; por isso peça a um especialista a interpretação do contrato.

## Olhar setorial

**Startup.** As ferramentas são escolhidas depressa e pagas com cartão. Mantenha uma lista de uma página das assinaturas com responsáveis e datas de renovação, reveja-a a cada trimestre e use as camadas gratuitas de propósito. Preste atenção às licenças de código aberto antes de distribuir software ou captar investimento, já que os investidores podem perguntar.

**Pequena empresa.** Um punhado de produtos carrega a maior parte do custo. Acompanhe à mão as contagens de assentos, defina lembretes no calendário para as renovações e peça aos fornecedores relatórios de uso. Cuidado com as assinaturas de renovação automática e com as licenças ligadas a uma pessoa que saiu.

**Grande empresa.** Contratos complexos, fusões e muitas unidades de negócio tornam difíceis os registros de direitos. Invista em um modelo de dados que guarde as unidades de contagem, automatize a descoberta e os feeds de identidade e dê ao jurídico e às compras um lugar no pipeline para a política de código aberto. Espere auditorias de fornecedores e prepare a evidência com antecedência.

**Governo e setor público.** As regras de compras, o licenciamento de benefício público e as exigências de soberania moldam as escolhas. Documente as razões das compras, guarde os registros de contratos pelo período exigido e considere padrões abertos e rotas de saída como requisitos. A transparência sobre os gastos com software pode ser um dever legal (veja o tópico 8.4, Métricas de fornecedores e contratos).

## Business case: motivações, ROI e TCO

Os custos são o tempo para construir o registro de direitos, ferramentas de análise de uso e de composição e o esforço para rever as renovações. Algumas ferramentas já são licenciadas como parte de plataformas de identidade ou de endpoints. O custo rotineiro é de algumas horas por mês para um parque pequeno e mais para um grande. Automatizar a recuperação e a geração de SBOMs o reduz.

O retorno vem de gasto evitado e de surpresa evitada. Os assentos sem uso são economia direta na renovação. As revisões antecipadas de renovação permitem negociar com conhecimento. Conhecer suas dependências encurta a resposta a vulnerabilidades e a perguntas de licença. Evite citar porcentagens de economia do setor que você não consegue rastrear. Meça a sua própria linha de base: assentos sem uso vezes o custo unitário, o número de renovações revistas tardiamente, o tempo para responder "quais serviços usam este componente" e o custo de qualquer achado de auditoria passado. Inclua o custo do próprio programa e conte a exposição jurídica evitada somente onde puder descrever um risco específico reduzido. Os próximos tópicos sobre custos levam adiante a visão financeira (veja o tópico 7.5, Custo de serviço e economia unitária).

## Antipadrões e armadilhas

- **Contar na unidade errada.** Uma contagem de assentos para uma licença vendida por núcleo engana. Registre a unidade.
- **Tratar o relatório do fornecedor como a verdade inteira.** Combine-o com os seus próprios registros.
- **Bloquear ferramentas por padrão.** As equipes contornam o bloqueio. Faça rápido o caminho aprovado.
- **Recuperar sem um caminho de volta.** Os usuários perdem a confiança. Torne fácil e rápida a restauração.
- **Rever renovações depois da data de aviso.** A alavanca se foi. Comece cedo.
- **Varrer licenças e ignorar os resultados.** Uma varredura sem política e sem um responsável pela decisão é ruído.
- **Interpretar licenças na equipe de entrega.** Os casos difíceis pertencem ao jurídico.
- **Tratar SBOMs como papelada.** Se ninguém os consulta, decaem. Use-os em simulações de resposta.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Direitos e uso | Contratos em e-mails; sem dados de uso | Registros dos principais produtos; conferências ocasionais de uso | Registros de direitos com unidades de contagem; uso a partir da identidade e de dados do fornecedor | Posição de licenças e utilização revistas mensalmente; assentos recuperados automaticamente | Uso e gasto compartilhados com as equipes; dados de compra e de uso fluem entre fornecedores e a organização |
| Caminho de adoção | As equipes compram o que gostam | Uma lista de ferramentas aprovadas | Rota rápida de catálogo com responsáveis e critérios de revisão | Aplicações não sancionadas acompanhadas e absorvidas ou aposentadas | Escolha de ferramentas projetada em conjunto com as equipes; serviços comuns reutilizados na organização |
| Componentes e dependências | Desconhecidos | Listas manuais de componentes para alguns serviços | SBOM gerado no release; política de licenças combinada com o jurídico | Cobertura acompanhada; exceções revistas; simulações de resposta realizadas | SBOMs e política compartilhados com fornecedores e clientes; rotas de saída planejadas |

## Lista de verificação

- [ ] Todo produto pago ou que traga obrigações tem um registro de direitos com unidade, quantidade, prazo e responsável.
- [ ] O uso vem de pelo menos duas fontes, comparadas mensalmente para os produtos-chave.
- [ ] A recuperação de assentos tem uma regra, um aviso e um caminho fácil de volta.
- [ ] Existe um catálogo de ferramentas aprovadas com uma rota rápida para propor uma nova ferramenta.
- [ ] Os dados de despesas e de identidade são conferidos quanto a aplicações não sancionadas.
- [ ] As revisões de renovação começam pelo menos 90 dias antes da data de aviso.
- [ ] Os SBOMs são gerados e guardados para cada release dos serviços em produção.
- [ ] Uma política de licenças combinada com o jurídico sinaliza exceções no pipeline.
- [ ] As rotas de saída de fornecedores estão registradas para os produtos importantes.
- [ ] Os contatos do jurídico e das compras para auditorias estão nomeados e são conhecidos pelas equipes.

## Prompts de IA

**Monte um modelo de registro de direitos.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Prepare uma revisão de renovação.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Projete uma regra de recuperação de assentos.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Faça a triagem do resultado de uma varredura de licenças.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de ativos de software ou de licenças.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de software declara sua unidade de contagem, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Compare os direitos com o uso real, contados na unidade da própria licença.
- Faça do caminho aprovado o caminho rápido, para que as equipes não precisem esconder o que usam.
- Reveja o uso antes das datas de aviso de renovação e recupere os assentos sem uso por uma regra visível.
- Gere SBOMs no pipeline e sinalize as licenças contra uma política combinada com o jurídico.
- Mantenha o jurídico e as compras envolvidos na interpretação e nas auditorias.
- Dê às equipes visibilidade do próprio uso e custo.

## Referências e leituras complementares

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Gestão de ativos de software](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Licença de software](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software como serviço](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Software de código aberto](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Lista de materiais de software](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Aprisionamento por fornecedor](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Análise de composição de software](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Auditoria de software](https://en.wikipedia.org/wiki/Software_audit).
