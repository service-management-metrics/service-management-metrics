# Métricas de incidentes de segurança e vulnerabilidades

**A segurança faz parte de entregar e operar um serviço continuamente; por isso meça quanto tempo as pessoas ficam expostas, com que rapidez você contém o que dá errado e quão dispostos estão os colegas a levantar a mão e nunca transforme um erro em motivo de culpa.**

## Visão geral e motivação

Todo serviço carrega fraquezas, e algumas delas serão usadas contra ele. Uma [vulnerabilidade](https://en.wikipedia.org/wiki/Vulnerability_(computing)) é uma fraqueza em software, hardware, configuração ou processo que pode ser explorada para prejudicar a confidencialidade, a integridade ou a disponibilidade de um sistema. Um incidente de segurança é um evento em que esse dano ocorre ou é ameaçado de forma crível. As métricas nesta área tentam responder a duas perguntas. Quão expostos estamos, e com que rapidez achamos, corrigimos e nos recuperamos dos problemas?

A tradição ágil e de DevOps trata a segurança como uma propriedade da entrega contínua, e não um portão no fim dela. O [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) estende a ideia do DevOps embutindo verificações de segurança no pipeline e dividindo a responsabilidade entre desenvolvimento, segurança e operações. O ITIL, por meio de sua prática de gestão de segurança da informação, contribui com política, pensamento baseado em risco e a ligação com a gestão de incidentes, de mudanças e de ativos. Os dois se encontram no trabalho diário: as atualizações de dependências chegam como mudanças comuns, os achados de vulnerabilidades viram itens de backlog com responsáveis e os incidentes são tratados com as mesmas revisões sem culpados que qualquer outro (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

As métricas de segurança estão expostas a distorções particulares.

- **Contar achados premia não olhar.** Uma equipe que varre menos acha menos. Uma contagem bruta de vulnerabilidades pode cair porque um scanner perdeu o acesso, e não porque algo melhorou.
- **As pontuações de severidade são insumos, não verdades.** O [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) dá uma pontuação de severidade para uma vulnerabilidade em abstrato, e registros como o [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) dão a elas identificadores. Se uma vulnerabilidade importa para você depende de ser alcançável no seu ambiente, de haver um exploit em uso e do valor do ativo afetado. Uma pontuação bruta de severidade usada sozinha manda o esforço para os lugares errados.
- **A culpa suprime relatos.** Se as pessoas são punidas por clicar em um link ou por relatar um incidente que causaram, os relatos param e a exposição cresce sem ser vista. A segurança psicológica é um controle de segurança.
- **As medidas de tempo escondem a cauda.** Um tempo mediano para corrigir pode parecer saudável enquanto um punhado de sistemas críticos fica exposto por meses.

Este tópico dá as principais medidas, com suas definições, seus vetores de manipulação e barreiras de proteção. Apoia-se nos registros de ativos e de configuração da parte anterior, porque você não consegue corrigir nem varrer o que não consegue achar (veja o tópico 7.1, Métricas de gestão de ativos de TI, e o tópico 7.4, Métricas de qualidade de configuração e CMDB). Uma cautela: este é um guia de medição, e não um manual de segurança. Escolha os controles com profissionais de segurança qualificados e siga as normas e os deveres legais que se aplicam a você, como a ISO/IEC 27001 e a orientação de agências nacionais.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica de forma aguda à segurança. Quando uma métrica vira meta, as pessoas reclassificam achados, excluem ativos das varreduras e encerram tickets sem corrigir a causa (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Meça o tempo de exposição além das contagens.** Quanto tempo uma fraqueza fica aberta importa mais que quantas são achadas.
- **Priorize pelo contexto.** Combine severidade, explorabilidade, alcançabilidade e valor do ativo.
- **Confira primeiro a cobertura.** Um relatório limpo de uma varredura que perdeu metade do parque é um falso conforto.
- **Embuta a segurança no pipeline.** Faça das escolhas seguras o padrão fácil e dê feedback rápido.
- **Colabore entre disciplinas.** Segurança, desenvolvimento e operações são donos juntos dos resultados.
- **Torne seguro o relato.** O tratamento sem culpados dos erros mantém os sinais fluindo.
- **Agregue os dados de comportamento humano.** Relate padrões de grupo e nunca nomeie nem classifique indivíduos.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Janela de exposição | Tempo em que uma vulnerabilidade conhecida permanece aberta em ativos no escopo, por faixa de prioridade | mediana e 85º percentil dos dias desde a data em que se soube que se aplicava ao ativo até a data em que uma correção ou mitigação aceita é verificada | dias | Scanner de vulnerabilidades, sistema de tickets, registros de mudanças | Gestão de segurança da informação; gestão de problemas | Tempo para corrigir um defeito no backlog | Semanal |
| Conformidade de correções | Proporção dos ativos no escopo que cumprem a janela da política de correções de sua classe | ativos corrigidos dentro da janela da política / ativos no escopo que exigiram uma correção no período | porcentagem | Ferramentas de gestão de endpoints e servidores, registro de ativos | Gestão de segurança da informação; gestão de releases e implantação | Dependências mantidas atuais no pipeline | Semanal |
| Achados críticos atrasados | Contagem e idade dos achados de prioridade crítica além do prazo da política | número de achados críticos além do prazo; idade do mais antigo | contagem; dias | Sistema de gestão de vulnerabilidades | Gestão de segurança da informação; gestão de riscos | Defeitos de segurança que excedem o limite combinado | Semanal |
| Cobertura de varreduras | Proporção dos ativos no escopo avaliados dentro do intervalo exigido | ativos varridos com sucesso no último intervalo / ativos no escopo | porcentagem | Relatórios do scanner cruzados com o registro de ativos | Gestão de segurança da informação; gestão de ativos de TI | Verificações do pipeline rodadas em todo build | Semanal |
| Tempo até conter | Tempo desde a detecção de um incidente de segurança confirmado até a contenção | mediana e 85º percentil das horas da detecção à contenção | horas | Registros de incidentes | Gestão de incidentes; gestão de segurança da informação | Tempo para restabelecer o serviço após uma falha | Por incidente, revisto mensalmente |
| Idade das exceções de risco | Idade das exceções de risco aceito e a proporção além da data de revisão | dias desde a aprovação; exceções além da data de revisão / exceções abertas | dias; porcentagem | Registro de exceções | Gestão de riscos; gestão de segurança da informação | Revisão de dívida técnica | Mensal |
| Taxa de relato de segurança | Proporção dos eventos suspeitos relatados pelo pessoal em relação aos eventos de segurança confirmados, como indicador da cultura de relato | relatos do pessoal no período / eventos suspeitos confirmados no período, com tendência no nível de grupo | razão | Caixa de e-mail de segurança, registros de incidentes | Gestão de segurança da informação; gestão de incidentes | Levantar impedimentos abertamente | Mensal |

Declare no registro as faixas de prioridade e as janelas da política. A janela de exposição começa quando se sabe que a vulnerabilidade se aplica ao ativo, o que é o mais tardio entre a divulgação e o momento em que se sabe que o ativo roda o componente afetado, e para na correção verificada ou em uma mitigação documentada e de tempo limitado. O tempo até conter começa na detecção, e não no primeiro alerta que ninguém leu. Exclua achados de teste e falsos positivos só depois da revisão. A taxa de relato de segurança descreve grupos e tendências, nunca indivíduos.

## Recomendações

### Conheça seu parque e sua exposição

**1. Parta dos registros de ativos e de dependências.** As varreduras, as correções e a responsabilidade dependem de saber o que existe. Ligue todo achado a um ativo, um responsável e um serviço e meça a cobertura de varreduras contra o registro. Onde a cobertura é baixa, corrija isso antes de ler os achados. Um ativo não varrido é um desconhecido, o que é pior que uma fraqueza conhecida.

**2. Reduza primeiro a [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface).** Remova o que não é necessário: serviços sem uso, portas abertas, contas antigas, ambientes esquecidos. Tudo o que você aposenta é algo que não precisa corrigir. Acompanhe a contagem de serviços voltados à internet e de contas dormentes como indicadores simples e reveja-os com os responsáveis.

**3. Inclua a sua cadeia de suprimentos de software.** Os serviços modernos dependem de muitos componentes. A [cadeia de suprimentos de software](https://en.wikipedia.org/wiki/Software_supply_chain) inclui bibliotecas, ferramentas de build, imagens de contêineres e os fornecedores por trás deles. Use as listas de materiais de software descritas antes para achar onde um componente vulnerável é usado (veja o tópico 7.2, Métricas de ativos de software e licenças) e inclua os achados de dependências nas mesmas medidas dos achados de infraestrutura.

### Priorize e corrija

**4. Classifique pelo contexto, e não só pela pontuação de severidade.** Combine a severidade do CVSS com o fato de haver um exploit sabidamente em uso, de o componente vulnerável ser alcançável e com a importância do ativo. As listas públicas de vulnerabilidades sabidamente exploradas ajudam no primeiro fator. Escreva as regras de classificação, reveja-as e registre o motivo quando um item de alta severidade for despriorizado.

**5. Defina janelas de política por faixa e relate contra elas.** Para cada faixa de prioridade, combine um tempo-alvo para remediar ou mitigar. Relate a proporção dentro da janela, a mediana e o 85º percentil da exposição e o item aberto mais antigo. As janelas são metas para a conversa, e os itens mais antigos merecem atenção porque mostram onde o processo falha (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**6. Trate a correção como mudança comum e frequente.** O processo de correção mais seguro é o que roda com frequência e é monótono. As atualizações pequenas e frequentes são mais fáceis de testar e reverter que as grandes e raras, e os pipelines automatizados podem aplicá-las continuamente. Use a abordagem de habilitação de mudanças para a aprovação baseada em risco e mantenha uma rota emergencial para correções urgentes (veja o tópico 4.3, Métricas de habilitação de mudanças).

**7. Torne as exceções visíveis e de curta duração.** Às vezes uma correção não é possível. Registre uma exceção com um motivo, um controle compensatório, um responsável e uma data de revisão e relate a idade das exceções. As exceções sem datas de revisão se tornam permanentes, e as exceções permanentes se tornam o verdadeiro registro de riscos.

### Responda e aprenda

**8. Pratique a resposta a incidentes.** A [gestão de incidentes de segurança de computadores](https://en.wikipedia.org/wiki/Computer_security_incident_management) cobre preparação, detecção, contenção, erradicação, recuperação e lições aprendidas. Ensaie com exercícios, registre o tempo até conter a partir da detecção e reveja cada incidente significativo sem culpados. A estrutura do tratamento de incidentes de segurança é parecida com a do tratamento de incidentes graves (veja o tópico 3.4, Métricas de incidentes graves).

**9. Meça a contenção, e não só a detecção.** As ferramentas de detecção produzem alertas, e o valor está no que acontece em seguida. Acompanhe quanto tempo os incidentes confirmados levam para ser contidos e recuperados e que proporção foi encontrada pelo seu próprio monitoramento contra a relatada por gente de fora. Uma proporção crescente de incidentes detectados internamente é sinal de melhor visibilidade.

**10. Aprenda com os quase acidentes.** Um e-mail de phishing que foi relatado e bloqueado, ou uma vulnerabilidade achada por um colega antes de um atacante, é uma lição de graça. Registre e reveja esses casos como faria com um incidente e agradeça a quem relatou. A taxa de relato de segurança é um indicador de saúde dessa cultura e deve subir com a confiança.

### Construa a cultura e o pipeline

**11. Ponha as verificações onde os desenvolvedores trabalham.** Rode análises de dependências e estática no build, dê feedback no pull request e reprove builds apenas por problemas que a equipe concorde serem bloqueadores. O feedback rápido e relevante é corrigido. Uma enxurrada de achados de baixo valor é ignorada. Acompanhe o tempo de correção dos achados do pipeline e ajuste as regras com as equipes (veja o tópico 2.7, Métricas de pull requests e revisão de código).

**12. Treine e teste sem humilhar.** Os exercícios de conscientização, como o phishing simulado, podem construir habilidades e também podem prejudicar a confiança quando os resultados são usados para nomear ou disciplinar indivíduos. Relate apenas resultados agregados, foque em quantos relatam mensagens suspeitas e explique o propósito. Se um exercício faz o pessoal se sentir enganado, mude-o.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Janela de exposição | Encerrar achados sem verificação; mudar a data de início; reclassificar a severidade | Etapa de verificação por alguém de fora da equipe que corrige; regra da data de início no registro; registro de mudanças de severidade |
| Conformidade de correções | Excluir do escopo os ativos difíceis de corrigir; contar uma correção como aplicada quando o sistema não foi reiniciado | Mudanças de escopo registradas; verificar a versão instalada no ativo, e não no ticket |
| Achados críticos atrasados | Dividir ou fundir achados; rebaixar a severidade | Contar por vulnerabilidade e ativo únicos; rever todas as mudanças de severidade |
| Cobertura de varreduras | Varrer um conjunto mais estreito; contar uma varredura que não conseguiu autenticar | Cobertura contra o registro de ativos; qualidade da varredura (autenticada, completa) |
| Tempo até conter | Começar o relógio mais tarde; declarar cedo a contenção | O relógio começa no primeiro sinal de detecção; verificar a contenção com evidências |
| Idade das exceções de risco | Renovar exceções automaticamente; dividir exceções para reduzir a idade | Rever as renovações de exceções com um motivo; limitar renovações sem novas evidências |
| Taxa de relato de segurança | Estimular relatos de baixo valor; desencorajar relatos para melhorar outros números | Qualidade dos relatos; ler os comentários; pesquisa sobre se as pessoas se sentem seguras para relatar |

Uma leitura saudável é uma cobertura de varreduras alta, uma cauda de exposição curta e que encolhe, exceções honestas com datas de revisão, incidentes contidos depressa e encontrados internamente com mais frequência e pessoas que contam sobre eventos suspeitos sem medo.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Priorização só pela pontuação de severidade | Simples, consistente | Ignora o contexto; manda o esforço para os lugares errados |
| Priorização baseada em contexto | Foca no risco real | Exige dados e julgamento |
| Janelas fixas de correção | Expectativas claras | Pode forçar mudanças arriscadas e apressadas |
| Janelas baseadas em risco | Ajusta-se à situação | Mais difícil de auditar |
| Correção automatizada e frequente | Mudanças pequenas, menos exposição | Exige bons testes e rollback |
| Ciclos raros de grandes correções | Familiares | Exposição mais longa, maior risco por mudança |
| Simulação de phishing | Constrói conscientização | Pode corroer a confiança se mal usada |
| Foco na cultura de relato | Traz os problemas cedo à tona | Difícil de medir diretamente |

A resposta pragmática é classificar pelo contexto, corrigir com frequência em pequenos passos com bom rollback, registrar as exceções com prazos e investir na cultura de relato como controle.

## Perguntas para discutir com sua equipe

**1. Quanto do nosso parque as nossas varreduras realmente enxergam?**
Comparem os ativos varridos com o registro de ativos. Perguntem o que falta e por quê. O facilitador deve procurar categorias sistematicamente não varridas, como contêineres, dispositivos remotos ou sistemas de terceiros. Combinem uma lacuna a fechar neste trimestre.

**2. Qual é o nosso achado crítico aberto mais antigo, e por que ainda está aberto?**
Olhem a cauda, e não a média. Rastreiem os poucos mais antigos: quem é o dono, o que os bloqueia e qual é o controle compensatório. O facilitador deve perguntar se a exceção está registrada. Combinem quem desbloqueará o mais antigo.

**3. Quando uma correção de segurança causou uma interrupção pela última vez, e o que mudou depois?**
Lembrem um exemplo. A causa foi uma correção apressada ou um teste ausente? Discutam como tornar a correção rotineira e segura. Liguem a resposta à prática de mudanças e de releases.

**4. Se um colega relatasse hoje um e-mail suspeito, o que aconteceria com ele?**
Descrevam o caminho real do relato à resposta, incluindo como quem relata é agradecido. Perguntem se alguém já foi constrangido por relatar ou por clicar. A conversa é sobre confiança. Combinem uma pequena mudança que torne o relato mais fácil ou mais seguro.

**5. Quais dos nossos números de segurança poderiam subir enquanto ficamos menos seguros?**
Listem as medidas e pensem em como cada uma poderia melhorar estreitando o escopo ou rebatizando. Atribuam uma barreira de proteção a cada uma. O exercício constrói a entrada do registro para a próxima revisão.

**6. Com que rapidez conseguimos conter um incidente confirmado, e como sabemos?**
Revejam os dois últimos incidentes e rastreiem da detecção à contenção. Anotem os atrasos. Perguntem que exercícios rodamos. Combinem rodar um antes da próxima revisão.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega fazem a maior parte das correções e introduzem muitas das fraquezas. Devem manter as dependências atuais como parte do fluxo normal, tratar os achados de segurança como itens de backlog com responsáveis e datas e usar verificações de pipeline que deem feedback rápido e relevante. Precisam de prioridades claras e do tempo para agir sobre elas e devem poder levantar preocupações livremente.

### Equipes de serviço e operações

As equipes de operações conduzem os scanners, aplicam as correções e respondem aos incidentes. Devem manter atuais os vínculos com os ativos, relatar a cobertura com honestidade e tratar as exceções com prazos. Também precisam de tempo protegido para ensaiar a resposta a incidentes e de uma cultura sem culpados quando erros acontecem.

### Liderança e governança

Os líderes definem o apetite de risco e decidem se a segurança é financiada como atividade contínua ou como projeto. Devem pedir janelas de exposição e os itens abertos mais antigos em vez de totais, proteger a cultura de relato e aceitar que os números subirão quando a visibilidade melhorar. A governança deve exigir evidências para as exceções e para o aprendizado com incidentes.

### Clientes e usuários

Os usuários são ao mesmo tempo beneficiários e uma linha de defesa. Querem serviços que protejam seus dados e orientação clara e justa. Devem ser avisados prontamente quando um incidente os afeta, tratados com respeito quando relatam problemas e receber medidas de segurança que não tornem seu trabalho mais difícil que o necessário (veja o tópico 6.4, Experiência de usuários e colaboradores).

## Na prática: um exemplo de gestão de serviços

Uma cooperativa de crédito regional opera um banco on-line, um aplicativo móvel e sistemas de agências com uma pequena equipe de engenharia e um serviço de operações de segurança terceirizado. Os números abaixo são ilustrativos.

O conselho pede um painel de segurança. O primeiro rascunho do analista de segurança mostra 4.200 vulnerabilidades abertas e em queda, e 96% de conformidade de correções. O chefe de engenharia pergunta sobre a cobertura de varreduras. Cruzando a saída do scanner com o registro de ativos, o analista descobre que 31% dos servidores e quase todos os contêineres não foram varridos nos últimos 30 dias, porque o scanner perdeu as credenciais após uma migração. Entre os ativos que foram varridos, a mediana da janela de exposição das vulnerabilidades críticas é de 9 dias, e o 85º percentil é de 41 dias. O achado crítico mais antigo tem 212 dias, em um sistema legado com uma exceção que expirou quatro meses antes. A conformidade de correções de 96% foi calculada somente sobre os ativos que a ferramenta de correções relatou.

A equipe faz quatro mudanças com a engenharia e as operações. A cobertura de varreduras passa a ser a primeira linha do painel, com a meta de chegar à cobertura total do registro, e a autenticação do scanner é reparada e monitorada. A priorização acrescenta o status de exploração e a importância do ativo à pontuação de severidade; assim os 4.200 achados se reduzem a uma lista curta de cerca de 60 que importam agora. As atualizações de dependências passam para o pipeline como mudanças pequenas e frequentes com testes automatizados. As exceções ganham um responsável, um controle compensatório e uma data de revisão, e a que expirou é revista pelo comitê de riscos. O analista de segurança muda também como os resultados do phishing simulado são relatados: apenas a taxa de relato no nível de grupo é mostrada, e o analista agradece pessoalmente aos colegas que relatam.

Dois meses depois, a cobertura de varreduras é de 97%, o 85º percentil da janela de exposição dos itens críticos é de 14 dias e o achado crítico mais antigo é uma exceção mitigada a 60 dias de sua revisão. Um e-mail suspeito de pedido de pagamento é relatado por um funcionário de agência em minutos, e o incidente é contido em menos de duas horas. O conselho pede que a contagem de vulnerabilidades abertas seja reduzida pela metade até o fim do ano. O chefe de engenharia sugere relatar em seu lugar a janela de exposição e os achados críticos atrasados, explicando que uma contagem pode cair varrendo menos. A decisão é registrada, e o conselho concorda em rever as novas medidas na próxima reunião.

## Ágil, IA, automação e análise

### Ágil

Trate a segurança como parte da entrega contínua, com as correções fluindo pelo mesmo pipeline e revisão das outras mudanças. O cuidado é que metas sobre contagens de vulnerabilidades estimulam a reclassificação.

### IA

A IA acrescenta novos riscos, como a injeção de prompts e o vazamento de dados, e as ferramentas de IA podem ajudar a triar achados. Acompanhe os incidentes que envolvem sistemas de IA e a proporção dos achados triados por IA que uma pessoa confirmou. O cuidado é que uma IA que descarta um achado real dá falsa garantia.

### Automação

Automatize a varredura e a correção onde for seguro e meça a cobertura de varreduras e as correções que falharam. O cuidado é que a correção automática pode quebrar serviços; por isso use rollouts escalonados e rollback.

### Análise

Relate a janela de exposição como uma distribuição por severidade, com contagens. A decisão informada é onde cortar primeiro a exposição. O cuidado é que as pontuações de vulnerabilidade são insumos, e não resultados; por isso combine-as com a explorabilidade e a importância do ativo.

## Olhar setorial

**Startup.** Em geral não há uma equipe de segurança dedicada; por isso embuta o básico no pipeline: atualizações de dependências, varredura de segredos, autenticação multifator e privilégio mínimo. Acompanhe a janela de exposição de uma lista curta de sistemas críticos e tenha um plano simples de incidentes. Resista a comprar um grande conjunto de ferramentas antes de conhecer o seu parque.

**Pequena empresa.** Os serviços terceirizados e as ferramentas de nuvem carregam a maior parte do risco. Mantenha um inventário, ligue a autenticação multifator em todo lugar, mantenha os sistemas atualizados automaticamente e saiba para quem ligar em um incidente. Meça a conformidade de correções e o tempo para restaurar backups. Evite humilhar o pessoal que relata erros.

**Grande empresa.** A escala precisa de dados consistentes entre muitas equipes e ferramentas. Defina centralmente as faixas de prioridade e as janelas, deixe as equipes serem donas de seus achados, relate a exposição por serviço de negócio e rode exercícios regulares. Coordene com as equipes de segurança dos fornecedores e teste as transferências.

**Governo e setor público.** Os setores muitas vezes enfrentam diretivas obrigatórias com prazos para vulnerabilidades específicas, deveres formais de relato de incidentes e exigências de auditoria. Trate-os como insumos de projeto: acompanhe a conformidade com os prazos das diretivas, guarde evidências e relate os incidentes conforme exigido, protegendo a privacidade dos indivíduos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são as ferramentas de varredura e de monitoramento, que podem já ser possuídas; o tempo para manter os vínculos com os ativos; o tempo de engenharia para corrigir achados e atualizar dependências; a preparação e os exercícios de resposta a incidentes; e o treinamento. As verificações de pipeline custam tempo de implantação e algum tempo de build. O monitoramento terceirizado tem uma taxa de serviço.

O retorno é uma menor probabilidade e um menor impacto de incidentes, exposição mais curta e menos mudanças emergenciais apressadas. Esses benefícios são reais e difíceis de quantificar, porque o incidente que não aconteceu não deixa registro. Evite citar custos médios de violações ou frequências de incidentes do setor a menos que possa rastrear a fonte e sua relevância. Construa o argumento com os seus próprios dados: a tendência da janela de exposição, o número de mudanças emergenciais causadas por correções tardias, o tempo gasto em trabalho manual de correções que a automação removeu e o custo de seus incidentes passados, incluindo o tempo do pessoal e o impacto sobre os clientes. Descreva a redução de risco em termos de cenários específicos, como sugere o tópico anterior sobre business cases (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Relatar contagens de vulnerabilidades.** As contagens caem quando as varreduras perdem coisas. Relate a janela de exposição, os itens atrasados e a cobertura.
- **Priorizar só pela pontuação de severidade.** Ignora a alcançabilidade e a exploração. Acrescente contexto.
- **Tratar a varredura como a verdade.** Confira a cobertura e a qualidade da varredura contra o registro de ativos.
- **Exceções permanentes.** Viram risco escondido. Dê a toda exceção um responsável e uma data de revisão.
- **Humilhar pessoas por erros.** Os relatos param. Use a revisão sem culpados e resultados agregados.
- **Segurança como portão no fim.** Atrasa a entrega e convida a contornos. Embuta as verificações no pipeline.
- **Ciclos de correção "big-bang".** São arriscados e lentos. Corrija com frequência em pequenas mudanças.
- **Ignorar os fornecedores.** As fraquezas deles são suas. Acompanhe as obrigações de segurança e os incidentes dos fornecedores.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Visibilidade | Varreduras ocasionais de alguns sistemas | Varreduras regulares dos principais sistemas | Cobertura de varreduras acompanhada contra o registro de ativos; achados ligados a responsáveis | Cobertura, janelas de exposição e exceções geridas e acompanhadas ao longo do tempo | Visão compartilhada entre equipes e fornecedores, incluindo dependências |
| Priorização e correção | Corrigir pelo pedido mais alto | Listas baseadas em severidade | Classificação baseada em contexto; janelas de política por faixa; correções pequenas e frequentes | Janelas e cauda revistas; verificações de pipeline ajustadas com as equipes | Remediação automatizada e baseada em risco, com supervisão humana |
| Resposta e cultura | Resposta ad hoc; culpa | Plano básico, raramente testado | Plano ensaiado; revisão sem culpados; relato valorizado | Tempo até conter e taxa de detecção interna geridos; cultura de relato medida | Exercícios conjuntos com fornecedores e clientes; aprendizado amplamente compartilhado |

## Lista de verificação

- [ ] A cobertura de varreduras é medida contra o registro de ativos.
- [ ] Os achados se ligam a um ativo, um responsável e um serviço.
- [ ] As faixas de prioridade combinam severidade, exploração, alcançabilidade e importância do ativo.
- [ ] As janelas de política por faixa estão combinadas, e a janela de exposição e o item aberto mais antigo são relatados.
- [ ] As verificações de dependências e de pipeline rodam em todo build, com bloqueadores combinados.
- [ ] A correção roda como mudanças frequentes, pequenas e testadas, com uma rota emergencial.
- [ ] As exceções têm um responsável, um controle compensatório e uma data de revisão.
- [ ] A resposta a incidentes é ensaiada, e o tempo até conter é medido a partir da detecção.
- [ ] Os dados de comportamento humano são relatados apenas de forma agregada, e o relato é agradecido.
- [ ] As obrigações de segurança dos fornecedores e os incidentes são acompanhados.

## Prompts de IA

**Revise uma regra de priorização de vulnerabilidades.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Confira a cobertura de varreduras.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Planeje um exercício de mesa.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Escreva uma mensagem sem culpados para um erro relatado.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de segurança ou de vulnerabilidades.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de segurança traz seu vetor de manipulação, sua barreira de proteção e suas regras de privacidade.

## Ideias-chave

- Meça o tempo de exposição, os itens abertos mais antigos e a cobertura de varreduras, e não contagens brutas de achados.
- Priorize pelo contexto: severidade, exploração, alcançabilidade e importância do ativo.
- Corrija com frequência em mudanças pequenas e testadas e dê a toda exceção um responsável e uma data de revisão.
- Contenha os incidentes depressa, aprenda sem culpados e acompanhe a detecção interna.
- Trate a cultura de relato como um controle: agradeça a quem relata e nunca classifique indivíduos.
- Embuta verificações de segurança no pipeline para que as escolhas seguras sejam as fáceis.

## Referências e leituras complementares

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerabilidade (computação)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Cadeia de suprimentos de software](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Gestão de incidentes de segurança de computadores](https://en.wikipedia.org/wiki/Computer_security_incident_management).
