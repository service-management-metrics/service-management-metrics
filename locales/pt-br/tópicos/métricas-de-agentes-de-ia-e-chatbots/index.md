# Métricas de agentes de IA e chatbots

**Um assistente conversacional só ajudou quando o problema do usuário foi resolvido e continua resolvido; por isso meça a resolução verificada, os retornos, a qualidade da transferência a uma pessoa e o dano das ações erradas, e nunca premie um bot por manter as pessoas longe da ajuda.**

## Visão geral e motivação

Muitas organizações hoje põem um assistente conversacional entre os usuários e a central de serviços, e algumas dão aos agentes de IA a capacidade de agir: redefinir uma senha, pedir um equipamento, reiniciar um serviço, alterar uma configuração. Um [chatbot](https://en.wikipedia.org/wiki/Chatbot) é um aplicativo de software que conduz uma conversa, e um [assistente virtual](https://en.wikipedia.org/wiki/Virtual_assistant) acrescenta a capacidade de executar tarefas em nome do usuário. A ideia mais ampla de um [agente inteligente](https://en.wikipedia.org/wiki/Intelligent_agent) é a de um sistema que percebe um ambiente e toma ações em direção a objetivos. Os modelos de linguagem modernos tornam esses sistemas muito mais capazes de conversa aberta que seus predecessores baseados em regras, e o primeiro programa conversacional, o ELIZA de Joseph Weizenbaum, dos anos 1960, já mostrava com que facilidade as pessoas atribuem entendimento a uma máquina que apenas produz respostas plausíveis.

O apelo é óbvio. Os usuários recebem ajuda a qualquer hora sem esperar. As equipes gastam menos tempo com requisições rotineiras. O [autoatendimento](https://en.wikipedia.org/wiki/Self-service) há muito é uma meta da ITSM, e o shift-left, o deslocamento da resolução para pontos mais cedo e mais baratos, é uma ideia central da central de serviços (veja o tópico 3.7, Métricas de autoatendimento e automação). O problema da medição é que os números óbvios premiam as coisas erradas. Um bot que encerra uma conversa conta como a tendo "contido", quer o usuário tenha sido ajudado ou desistido. Um bot que nunca oferece um humano maximiza a contenção. Um bot que dá com confiança uma resposta errada produz uma falha silenciosa que aparece como um contato irritado dias depois.

Dois tipos de sistema precisam de medidas distintas.

- **Os assistentes conversacionais** respondem a perguntas, guiam os usuários e reúnem informações. O risco deles são respostas erradas ou inúteis e prender os usuários em ciclos. As medidas focam na resolução, na exatidão e no caminho até uma pessoa.
- **Os agentes que agem** mudam coisas no mundo: contas, sistemas, tickets, dinheiro. O risco deles é uma ação errada com consequências reais. As medidas focam na correção das ações, na reversibilidade, nos limites de permissão e nas trilhas de auditoria. Esses usos pedem governança mais forte e, muitas vezes, aprovação humana para as etapas de consequência (veja o tópico 10.5, Métricas de governança e risco de IA).

Várias questões de projeto moldam o que você mede.

- **Honestidade sobre com o que o usuário está falando.** Muitas jurisdições têm ou estão desenvolvendo deveres de informar às pessoas quando interagem com um sistema de IA, e em outubro de 2026 essas regras estão evoluindo; por isso confira o que se aplica a você. A boa prática é dizê-lo com clareza de todo modo.
- **Uma saída.** Os usuários devem poder alcançar uma pessoa sem luta. Um bot que esconde o caminho até um humano é um [padrão obscuro (dark pattern)](https://en.wikipedia.org/wiki/Dark_pattern), um projeto que engana ou prende os usuários em resultados que não escolheriam.
- **Acessibilidade.** As interfaces conversacionais devem funcionar para pessoas que usam tecnologia assistiva, as de capacidade limitada de linguagem e as que precisam de outro idioma ou canal.
- **Decisões automatizadas.** Quando a saída de um assistente afeta os direitos ou o acesso de uma pessoa, aplicam-se o tema da [tomada de decisão automatizada](https://en.wikipedia.org/wiki/Automated_decision-making) e os deveres em torno dela. Mantenha tais decisões com pessoas, ou com fortes salvaguardas.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é vívida aqui: se a contenção ou o desvio é a meta, o modo mais barato de cumpri-la é tornar o humano mais difícil de alcançar (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). As medidas abaixo põem a resolução e o resultado do usuário em primeiro lugar.

## Princípios-chave

- **A resolução é a medida, e não a contenção.** Uma conversa que terminou não é um problema que foi resolvido.
- **Verifique e confira o retorno.** Conte um contato como resolvido apenas quando o usuário confirma ou não volta.
- **Sempre ofereça um caminho até uma pessoa.** Faça o caminho fácil, rápido e visível e leve o contexto junto.
- **Seja honesto sobre o sistema.** Diga que é uma IA, o que ela pode fazer e o que não pode.
- **Limite o que os agentes podem fazer.** Conceda o privilégio mínimo, exija aprovação para ações de consequência e mantenha uma trilha de auditoria.
- **Meça a qualidade das respostas por amostragem.** Respostas fluentes podem estar erradas.
- **Escute os usuários e o pessoal que recolhe os cacos.** Eles veem o que as métricas perdem.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de resolução verificada | Proporção das conversas com o bot em que o usuário confirmou que o problema foi resolvido ou não voltou em um período declarado | conversas com resolução confirmada ou sem contato de retorno em 7 dias / conversas iniciadas com uma intenção resolvível | porcentagem | Logs de conversas, confirmação do usuário, dados de tickets e contatos | Central de serviços; gestão do conhecimento | Resultado funcional para o usuário | Semanal |
| Taxa de contatos de retorno | Proporção das conversas encerradas pelo bot seguidas de um contato sobre o mesmo problema por qualquer canal | conversas seguidas de um contato relacionado em 7 dias / conversas encerradas sem transferência | porcentagem | Logs de conversas cruzados com registros de tickets e contatos | Central de serviços; gestão de incidentes | Defeitos escapados | Semanal |
| Completude do contexto da transferência | Proporção das transferências a uma pessoa em que a pessoa teve a informação necessária sem pedir ao usuário que repetisse | transferências amostradas julgadas completas pelo atendente receptor / transferências amostradas | porcentagem | Transferências amostradas, feedback dos atendentes | Central de serviços; gestão do conhecimento | Colaboração fluida através da fronteira | Mensal |
| Tempo até um humano | Tempo desde o usuário pedir uma pessoa, ou o bot decidir transferir, até uma pessoa assumir | mediana e 85º percentil dos minutos | minutos | Logs de conversas, dados de fila | Central de serviços; gestão de incidentes | Capacidade de resposta quando o usuário precisa de ajuda | Semanal |
| Exatidão das respostas | Proporção das respostas do bot amostradas julgadas corretas, completas e seguras por um revisor qualificado | respostas julgadas corretas / respostas amostradas | porcentagem | Revisão amostrada | Gestão do conhecimento; garantia de qualidade | Definição de pronto para uma resposta | Mensal |
| Satisfação e esforço com o bot | Nota do usuário de satisfação e facilidade após uma conversa, com comentários | avaliações favoráveis / avaliações; nota média de esforço | porcentagem; pontos de escala | Breve pesquisa pós-conversa | Central de serviços; experiência do cliente | Feedback sobre software funcionando | Semanal |
| Taxa de reversão de ações do agente | Proporção das ações tomadas por um agente de IA que tiveram de ser corrigidas, desfeitas ou escaladas | ações revertidas ou corrigidas / ações tomadas, por tipo de ação e classe de risco | porcentagem | Log de auditoria de ações, registros de mudanças | Habilitação de mudanças; gestão de incidentes | Retrabalho e rollback | Semanal |

Defina as intenções que o bot trata e exclua da contenção as que ele deve sempre transferir. A resolução verificada conta uma conversa apenas se o problema estava no escopo e o usuário confirmou ou não mostrou contato de retorno. O tempo até um humano começa no pedido do usuário, e não no fim de um menu. A exatidão das respostas é julgada contra a base de conhecimento e a política por uma pessoa que não construiu o bot. A reversão de ações do agente é dividida por tipo de ação e classe de risco, e qualquer ação danosa é relatada à parte como um incidente.

## Recomendações

### Defina o sucesso como resolução

**1. Defina as intenções e o resultado que você quer.** Liste os problemas que o assistente deve tratar, como redefinição de senha, status de acesso e perguntas de como fazer, e o resultado de cada um: respondido, feito ou transferido. Decida quais intenções devem sempre ir a uma pessoa: queixas, qualquer coisa envolvendo sofrimento, segurança, direitos legais ou dinheiro. Um bot que tenta tratar tudo falha mal nas bordas.

**2. Meça a resolução verificada e os retornos.** Pergunte aos usuários no fim se o problema foi resolvido e procure também contatos relacionados depois. Nenhum dos dois basta sozinho: os usuários que desistem não respondem, e alguns que receberam ajuda ligam mesmo assim. Juntos aproximam a resolução verdadeira. Trate a taxa de contatos de retorno como a barreira de proteção principal de qualquer cifra de contenção (veja o tópico 3.1, Métricas da central de serviços).

**3. Evite a contenção como meta.** Relate a contenção apenas como cifra descritiva e sempre ao lado da resolução verificada, dos retornos e da satisfação. Uma contenção crescente com retornos crescentes significa que o bot está mandando as pessoas embora. Não defina uma meta de contenção nem ligue o desempenho de ninguém a ela.

### Faça o caminho até uma pessoa fácil e bom

**4. Deixe os usuários alcançar uma pessoa em qualquer ponto.** Ofereça um modo claro e simples de pedir um humano e honre-o. Meça o tempo até um humano e a proporção de conversas em que os usuários pediram mais de uma vez. Teste você mesmo o caminho regularmente. Onde uma pessoa não estiver disponível, diga quando estará e ofereça um retorno de chamada.

**5. Transfira com o contexto.** Quando o bot passa uma conversa a uma pessoa, inclua o resumo, o que foi tentado, as palavras do usuário e os dados relevantes da conta para que o usuário não se repita. Peça aos atendentes receptores que avaliem se a transferência foi completa e amostre os resultados. Transferências ruins fazem os usuários confiar menos tanto no bot quanto no serviço (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

**6. Projete para todos os usuários.** Teste o assistente com usuários que usam tecnologia assistiva, que escrevem em outros idiomas, que estão com pressa ou em sofrimento e que não se sentem à vontade com a tecnologia. Ofereça outros canais. Meça a resolução verificada e a satisfação por grupo de usuários onde for seguro e lícito. As médias escondem aqueles a quem o bot mais falha.

### Confira a qualidade do que ele diz e faz

**7. Amostre as respostas quanto à exatidão e à segurança.** A cada mês, extraia uma amostra aleatória de conversas e peça a uma pessoa qualificada que julgue as respostas: corretas, completas, seguras e honestas sobre a incerteza. Registre os erros por tipo: desatualizado, inventado, fora da política ou mal entendido. Leve os erros à base de conhecimento e à configuração. Acrescente testes direcionados para tópicos sensíveis e para tentativas de empurrar o assistente para fora de seu escopo.

**8. Mantenha o conhecimento atual.** Um assistente é tão bom quanto o conteúdo e as ferramentas em que se apoia. Ligue os erros de resposta aos artigos de conhecimento e meça a atualidade do conhecimento que ele usa (veja o tópico 3.6, Métricas de gestão do conhecimento). Onde o sistema usa recuperação de uma base de conhecimento, inclua uma verificação de que ele cita suas fontes e de que as fontes estão certas.

**9. Seja honesto com os usuários.** Diga no início que estão falando com uma IA e o que ela pode e não pode fazer. Não lhe dê um nome ou jeito humano que sugira o contrário. Onde ela estiver em dúvida, deve dizê-lo e oferecer uma pessoa. Confira a lei aplicável sobre divulgação.

### Governe os agentes que agem

**10. Classifique as ações por risco e defina permissões compatíveis.** Para cada ação que um agente pode tomar, defina sua classe de risco: informativa, reversível e de baixo impacto ou de consequência. Conceda o privilégio mínimo necessário. Exija aprovação humana para as ações de consequência. Mantenha uma trilha de auditoria de toda ação, com o motivo, o usuário e o resultado. Esses controles se ligam às medidas de mudança e de segurança de partes anteriores (veja o tópico 8.1, Métricas de incidentes de segurança e vulnerabilidades, e o tópico 8.2, Métricas de riscos e controles).

**11. Meça a correção e a reversibilidade das ações.** Acompanhe a taxa de reversão por tipo de ação e reveja toda ação danosa como um incidente, sem culpados. Teste os agentes em um ambiente seguro antes de conceder acesso e refaça o teste quando o modelo ou as ferramentas mudarem. Uma nova versão do modelo pode mudar o comportamento; por isso trate-a como uma mudança que precisa de controle (veja o tópico 4.3, Métricas de habilitação de mudanças).

**12. Escute as pessoas que recolhem os cacos.** O pessoal da central de serviços vê as consequências das falhas do bot: usuários irritados, contatos repetidos e bagunças a limpar. Pergunte-lhes regularmente o que o bot erra e o que torna as coisas mais difíceis. O feedback deles e os comentários dos usuários são evidência que nenhuma métrica capta por inteiro, e devem moldar a próxima rodada de mudanças.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de resolução verificada | Contar qualquer fim de conversa como resolvido; fazer perguntas de confirmação indutoras | Definir a confirmação de modo neutro; taxa de contatos de retorno; amostrar conversas |
| Taxa de contatos de retorno | Medir só por um canal; janelas curtas | Cruzar todos os canais; usar uma janela mais longa como verificação; amostrar os retornos |
| Completude do contexto da transferência | Passar uma transcrição longa em vez de um resumo; amostrar transferências fáceis | Avaliação do atendente receptor; amostra aleatória; tempo até a resolução após a transferência |
| Tempo até um humano | Começar o relógio depois dos menus; contar o reconhecimento da fila como assunção | O relógio começa no pedido; assunção significa uma pessoa ativa na conversa |
| Exatidão das respostas | Amostrar conversas fáceis; revisores lenientes | Amostra aleatória por revisores independentes; casos de teste adversariais |
| Satisfação e esforço com o bot | Pesquisar só conversas concluídas; pôr a pesquisa onde só chegam usuários felizes | Pesquisar também as conversas abandonadas; taxa e composição das respostas; ler os comentários |
| Taxa de reversão de ações do agente | Não registrar reversões; reclassificar correções como trabalho novo | Log de auditoria resistente a adulteração; ligar reversões a ações; revisão de incidentes |

Uma leitura saudável é alta resolução verificada com poucos retornos, caminhos fáceis e rápidos até uma pessoa com transferências completas, respostas exatas na revisão amostrada, usuários satisfeitos em todos os grupos e agentes cujas ações raramente precisam ser revertidas e nunca causam dano sem ser vistas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Bot baseado em regras | Previsível, fácil de testar | Estreito; frágil; frustrante fora dos roteiros |
| Assistente com modelo de linguagem | Flexível, fluente | Pode errar com confiança; mais difícil de testar |
| Recuperação de conhecimento aprovado | Respostas ancoradas, mais fáceis de corrigir | Depende da qualidade do conteúdo |
| Geração aberta | Ampla cobertura | Maior risco de invenção |
| Aprovação humana para ações | Segurança | Mais lenta; fadiga do revisor |
| Ações autônomas | Velocidade | Maior raio de explosão quando errado |
| Escopo estrito com transferência cedo | Seguro | Menor contenção |
| Escopo amplo | Maior contenção | Mais erros nas bordas |

A resposta pragmática é começar com intenções estreitas e bem compreendidas, ancorar as respostas em conhecimento aprovado, tornar fácil a ajuda humana e estender o escopo e a autonomia somente à medida que as medidas o justificarem.

## Perguntas para discutir com sua equipe

**1. Se um usuário quisesse uma pessoa agora, quantos passos seriam necessários, e nós mesmos já tentamos?**
Testem o caminho juntos. Contem os passos e a espera. O facilitador deve anotar cada barreira. Combinem mudanças para que o caminho seja curto e meçam o tempo até um humano.

**2. Que parcela das conversas que nosso bot encerrou realmente resolveu o problema?**
Conferam os retornos e as confirmações de uma amostra. Comparem com a cifra de contenção. Discutam a diferença. Decidam qual cifra os líderes devem ver.

**3. O que nosso bot erra, e quem descobre?**
Perguntem à central de serviços. Revejam conversas amostradas. Procurem padrões: artigos desatualizados, perguntas ambíguas, tópicos sensíveis. Combinem um caminho dos erros às correções, com um responsável.

**4. Que ações o agente pode tomar por conta própria, e quais precisam de uma pessoa?**
Listem as ações com suas classes de risco e permissões. Perguntem qual seria a pior falha realista de cada uma. Combinem as regras de aprovação e a trilha de auditoria e quem revê os casos danosos.

**5. A quem o bot está falhando em silêncio?**
Pensem nos usuários que estão com pressa, em sofrimento, com necessidades de acessibilidade ou com pouca capacidade de linguagem. Olhem a resolução e a satisfação por grupo, onde for seguro. Combinem um teste com esses usuários.

**6. O que nos faria desligar o bot ou reduzir seu escopo?**
Definam a evidência: retornos acima de um nível, ações danosas, exatidão abaixo de um padrão. Decidam quem pode decidir. Ter uma regra de parada de antemão facilita agir.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes que constroem o assistente são donas de sua qualidade. Devem definir as intenções, ancorar as respostas em conhecimento aprovado, testar com casos adversariais, liberar as mudanças sob controle e ler as falhas. Devem resistir a metas de contenção que premiam prender os usuários.

### Equipes de serviço e operações

O pessoal da central de serviços trabalha com o assistente e herda suas falhas. Deve avaliar as transferências, sinalizar respostas erradas, manter atual o conhecimento e assumir depressa quando pedido. São os melhores juízes de se o assistente ajuda os usuários, e sua carga de trabalho e seu estresse fazem parte do quadro.

### Liderança e governança

Os líderes patrocinam o assistente e querem economias. Devem pedir resolução verificada, retornos e satisfação ao lado da contenção, exigir uma regra de parada, financiar o caminho humano e rever as classes de risco dos agentes. A governança deve conferir a divulgação, a acessibilidade e os deveres legais.

### Clientes e usuários

Os usuários querem ajuda com pouco esforço e sem truques. Devem saber que estão falando com uma IA, poder alcançar uma pessoa com facilidade e confiar que o sistema não agirá sem boa razão. A experiência deles, especialmente a de falha, é a evidência primária de se o assistente vale a pena.

## Na prática: um exemplo de gestão de serviços

Uma universidade nacional opera uma central de serviços para estudantes e funcionários que trata cerca de 30.000 contatos por mês. Lança um chatbot para requisições comuns, e o painel do fornecedor relata uma taxa de contenção de 74%. Os números abaixo são ilustrativos.

O chefe de serviços aos estudantes confere. Entre as conversas encerradas pelo bot no último mês, 29% foram seguidas de um contato relacionado por e-mail ou telefone em sete dias. A resolução verificada, usando a confirmação do usuário e a ausência de retorno, é de 49% para as intenções no escopo. O tempo mediano para alcançar uma pessoa depois de pedir é de 6 minutos, com um 85º percentil de 22, em parte porque o caminho exige três etapas de menu. Uma amostra de 100 conversas revistas por dois orientadores experientes acha 88 respostas corretas e 12 falhas: 7 desatualizadas, 3 com detalhes inventados sobre um prazo e 2 que trataram mal casos sensíveis envolvendo um estudante em dificuldade. Os atendentes receptores avaliam 54% das transferências como completas. A satisfação com o bot é menor para estudantes que usam leitores de tela e para os que escrevem em idiomas diferentes do inglês. A equipe da central de serviços relata muitos contatos que começam com "o chatbot não conseguiu ajudar".

O chefe de serviços aos estudantes faz mudanças com a equipe. As intenções sensíveis, como bem-estar, queixas e disputas sobre taxas, são encaminhadas direto a uma pessoa, e o bot diz isso. Uma opção "falar com uma pessoa" aparece em todas as telas, e o tempo até um humano é acompanhado, com a meta de responder em poucos minutos durante o horário com atendimento. As transferências incluem um resumo automático e as próprias palavras do usuário. Os responsáveis pela base de conhecimento corrigem os artigos desatualizados, e uma revisão mensal por amostragem os alimenta. O assistente é limitado a responder com conteúdo aprovado e deve dizer quando não sabe. Um segundo piloto deixa um agente redefinir senhas após verificação de identidade, com toda ação registrada e reversível dentro de um limite de tempo, e uma taxa de reversão acompanhada. O painel substitui a contenção por resolução verificada, taxa de contatos de retorno, exatidão, tempo até um humano e satisfação por grupo.

Três meses depois, a resolução verificada chega a 66% nas intenções no escopo, a taxa de contatos de retorno cai para 14%, o tempo mediano até um humano cai para 2 minutos, a proporção de transferências completas sobe para 86% e a exatidão das respostas amostradas sobe para 95%, sem casos sensíveis mal tratados na amostra. A taxa de reversão de ações do agente no piloto de senhas é de 1,2%. O gabinete do reitor pede uma meta de contenção de 85%. O chefe de serviços aos estudantes explica que uma meta de contenção mais alta premiaria esconder o caminho até uma pessoa e propõe a resolução verificada e os retornos como medidas, com uma revisão do que estender a seguir. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Melhore os assistentes em pequenos passos, com feedback dos usuários e das pessoas que assumem, e reveja as falhas regularmente com as partes interessadas. O cuidado é que premiar a contenção ensina o bot a manter as pessoas longe da ajuda.

### IA

Um assistente conversacional só ajudou quando o problema foi resolvido e continua resolvido; por isso meça a resolução verificada, os retornos, a qualidade da transferência e a reversão das ações do agente. Defina o papel do humano: quem aprova as ações, quando o bot deve passar o controle e como uma pessoa o sobrepõe. O cuidado é que uma conversa agradável ainda pode falhar na tarefa.

### Automação

Registre toda conversa e ação do agente, com permissões e um modo de reverter, e meça a automação pelas ações erradas. O cuidado é que um agente com permissões amplas pode causar dano em velocidade; por isso limite o escopo e reveja os logs.

### Análise

Relate a resolução verificada por confirmação do usuário ou por uma janela sem retorno, com contagens, e leia uma amostra de conversas. A decisão informada é onde é seguro expandir o assistente. O cuidado é que as notas de satisfação das conversas com o bot pendem para os usuários que terminaram.

## Olhar setorial

**Startup.** Um assistente pode cobrir o suporte a baixo custo, e uma resposta ruim pode custar um cliente. Mantenha o escopo estreito, ancore as respostas na sua documentação, torne óbvia a opção humana e leia toda escalação. Cuidado ao deixar um agente agir em contas ou pagamentos.

**Pequena empresa.** Um assistente pronto em um site pode tratar perguntas comuns. Teste-o como um cliente, garanta que um telefone ou e-mail seja fácil de achar e reveja as conversas semanalmente. Confira o que o fornecedor faz com os dados.

**Grande empresa.** A escala oferece economias e risco. Rode um processo de governança para classes de risco, aprovações e auditoria, meça por intenção e grupo de usuários e garanta que uma pessoa seja alcançável em todo canal. Coordene entre suporte, segurança, jurídico e acessibilidade.

**Governo e setor público.** Os cidadãos podem não ter outro provedor, e os deveres de acessibilidade, acesso por idioma e tratamento justo se aplicam com força. Mantenha uma pessoa alcançável, evite decisões automatizadas sobre direitos sem salvaguardas, publique como o assistente é usado e confira os deveres de divulgação e de direito administrativo (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são licenças ou cobranças por uso, integração, preparação de conteúdo, amostragem e revisão contínuas, manutenção da base de conhecimento, testes e governança. Um bom caminho humano também custa dinheiro, porque precisa ter pessoal.

Os retornos potenciais são esperas mais curtas para problemas simples, alívio de contatos repetitivos e cobertura fora do expediente. O lado do risco inclui retornos, confiança perdida, dano de respostas ou ações erradas e exposição legal. Construa o argumento com os seus próprios números: resolução verificada e retornos, custo por contato resolvido incluindo as transferências, o tempo do pessoal gasto corrigindo falhas do bot e a satisfação por grupo. Evite usar as alegações de contenção ou de desvio de um fornecedor como sua estimativa. Conte o custo do caminho humano e da governança (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contenção como meta.** Premia manter as pessoas longe da ajuda. Relate a resolução verificada e os retornos.
- **Caminho escondido ou lento até uma pessoa.** É um padrão obscuro, e os usuários percebem. Faça-o curto e teste-o.
- **Transferir sem contexto.** Os usuários se repetem e a confiança cai. Passe um resumo.
- **Deixar o bot tratar casos sensíveis.** Bem-estar, queixas e direitos precisam de pessoas. Encaminhe-os diretamente.
- **Ações autônomas sem auditoria ou aprovação.** Um erro pode escalar. Classifique, limite e registre.
- **Medir só o que o painel do fornecedor mostra.** Bajula. Cruze seus próprios dados.
- **Ignorar os grupos a quem o bot falha.** As médias os escondem. Teste e segmente onde for seguro.
- **Sem regra de parada.** Um bot que falha continua no ar. Defina a evidência que o reduziria ou desligaria.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Resultados | Contenção relatada | Satisfação pesquisada | Resolução verificada e retornos acompanhados por intenção | Segmentado por grupo de usuários; regras de parada definidas; exatidão amostrada mensalmente | Assistente, pessoal e conhecimento melhorados juntos com evidência compartilhada |
| Caminho até as pessoas | Difícil de achar | Opção disponível | Caminho curto; tempo até um humano acompanhado; transferências levam contexto | Qualidade da transferência avaliada e melhorada; pessoal compatível com a demanda | Bot e pessoal colaboram com fluidez entre canais, com a escolha do usuário respeitada |
| Agentes que agem | Automação ad hoc | Ações roteirizadas | Ações classificadas por risco, privilégio mínimo, aprovação e auditoria | Taxa de reversão e dano revistos; mudanças controladas | Comportamento dos agentes governado em toda a organização e entre fornecedores com garantia independente |

## Lista de verificação

- [ ] As intenções do assistente estão listadas, com as que devem sempre ir a uma pessoa.
- [ ] A resolução verificada e a taxa de contatos de retorno são relatadas ao lado da contenção.
- [ ] Existe um caminho visível e curto até uma pessoa em toda tela, e o tempo até um humano é medido.
- [ ] As transferências incluem um resumo e as palavras do usuário e são avaliadas pelos atendentes receptores.
- [ ] As respostas são amostradas mensalmente por revisores qualificados e independentes.
- [ ] Os usuários são informados de que estão falando com uma IA e do que ela pode fazer.
- [ ] Os testes de acessibilidade e de outros idiomas são feitos com usuários reais.
- [ ] As ações dos agentes são classificadas por risco, com permissão de privilégio mínimo e registradas em auditoria.
- [ ] As taxas de reversão e as ações danosas são revistas sem culpados.
- [ ] Uma regra de parada define quando reduzir ou desligar o assistente.

## Prompts de IA

**Defina intenções e regras de transferência.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Confira uma alegação de contenção.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Projete uma classificação de risco para ações de agentes.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Planeje uma revisão das conversas do bot.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de chatbot ou de agente de IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de chatbot mede a resolução e traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Meça a resolução verificada e os contatos de retorno e trate a contenção apenas como cifra descritiva.
- Faça o caminho até uma pessoa curto e visível e transfira com o contexto.
- Amostre as respostas quanto à exatidão e à segurança e mantenha atual o conhecimento que o assistente usa.
- Seja honesto de que os usuários estão falando com uma IA e teste com os usuários com mais chance de ser desamparados.
- Para os agentes que agem, classifique o risco, limite as permissões, exija aprovação para as ações de consequência e mantenha uma trilha de auditoria.
- Defina uma regra de parada de antemão.

## Referências e leituras complementares

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Assistente virtual](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Agente inteligente](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Autoatendimento](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Padrão obscuro](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Tomada de decisão automatizada](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
