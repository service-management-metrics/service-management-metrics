# Métricas de fornecedores e contratos

**Os fornecedores fazem parte do seu serviço; por isso meça o que entregam, quanto você depende deles e se conseguiria sair, e construa o relacionamento em torno de resultados compartilhados e conversa regular, e não em torno de penalidades e surpresa.**

## Visão geral e motivação

Quase nenhum serviço é construído e operado por uma equipe sozinha. Provedores de nuvem o hospedam, fornecedores entregam o software, terceirizados compõem a central de serviços, uma operadora de telecomunicações carrega o tráfego e um parceiro de pagamentos movimenta o dinheiro. Quando um deles falha, seus usuários não distinguem entre a sua falha e a dele. A [gestão de fornecedores](https://en.wikipedia.org/wiki/Vendor_management) é a disciplina de selecionar, contratar, monitorar e, quando necessário, deixar fornecedores. A prática de gestão de fornecedores do ITIL a descreve como garantir que os fornecedores e seu desempenho sejam geridos de forma adequada para apoiar a entrega de serviços sem lacunas.

A [terceirização](https://en.wikipedia.org/wiki/Outsourcing) move o trabalho para uma parte externa e não move a responsabilização: a organização continua respondendo a seus clientes e reguladores. Os contratos são, portanto, um meio de coordenação e de alocação de risco, e não uma transferência de responsabilidade. Quando há muitos fornecedores, o [multisourcing](https://en.wikipedia.org/wiki/Multisourcing) e a prática de [integração e gestão de serviços](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) os coordenam para que o usuário veja um único serviço. As medidas deste tópico descrevem a saúde dessa teia.

Os valores ágeis dão uma orientação útil. O Manifesto Ágil declara uma preferência pela colaboração com o cliente em vez da negociação de contratos. Isso não significa ignorar os contratos, que alocam risco e dinheiro reais. Significa construir relacionamentos em que fornecedor e cliente trabalham pelos mesmos resultados, compartilham informação cedo e se ajustam conforme aprendem. Os fornecedores tratados como parceiros contam os problemas mais cedo. Os fornecedores que temem penalidades os escondem. A medição deve apoiar o primeiro padrão.

Quatro problemas se repetem na medição de fornecedores.

- **Relatórios verdes e usuários infelizes.** Um fornecedor pode cumprir todos os níveis de serviço contratuais e ainda assim entregar uma experiência ruim, um padrão que o tópico anterior sobre acordos de nível de serviço chama de efeito melancia (veja o tópico 5.1, Métricas de SLA, OLA e XLA). O contrato mede o que diz, e os usuários vivenciam algo mais amplo.
- **Concentração e aprisionamento.** Depender muito de um fornecedor é eficiente até ele falhar ou aumentar os preços. O [aprisionamento ao fornecedor (vendor lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in) torna a mudança cara, e o custo cresce em silêncio a cada integração.
- **Dependências ocultas.** Seus fornecedores têm fornecedores. Um [ataque à cadeia de suprimentos](https://en.wikipedia.org/wiki/Supply_chain_attack) mira um fornecedor de confiança para alcançar seus clientes, e a falha em um subcontratado pode chegar a você sem nenhum contato do seu fornecedor direto.
- **A saída como reflexão tardia.** Muitos contratos são assinados sem plano para terminá-los. Uma [estratégia de saída](https://en.wikipedia.org/wiki/Exit_strategy) que nunca foi testada pode não funcionar quando necessária.

Outra consideração é a forma do contrato. A [contratação baseada em desempenho](https://en.wikipedia.org/wiki/Performance-based_contracting) liga o pagamento a resultados e pode alinhar interesses quando os resultados são claros e mensuráveis. Também pode convidar à manipulação quando as medidas são estreitas. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica nos dois sentidos: os fornecedores otimizam o nível de serviço medido, e os compradores otimizam suas economias relatadas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico se apoia nos registros da parte anterior, em especial os dados de software e financeiros (veja o tópico 7.2, Métricas de ativos de software e licenças, e o tópico 7.5, Custo de serviço e economia unitária), e prepara os deveres de relato que muitas vezes recaem sobre os órgãos públicos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Princípios-chave

- **Você continua responsável.** Os contratos alocam risco e dinheiro, e não transferem a responsabilidade perante usuários e reguladores.
- **Meça resultados e experiência além dos termos do contrato.** Um relatório contratual verde pode esconder um serviço ruim.
- **Conheça suas dependências.** Mapeie os fornecedores críticos, seus principais subcontratados e os serviços que dependem deles.
- **Planeje a saída antes de assinar.** Um plano de saída não testado é uma esperança.
- **Colabore regularmente.** Revisões conjuntas frequentes e francas valem mais que reuniões anuais de crise.
- **Compartilhe os dados abertamente.** Os dois lados se beneficiam dos mesmos números.
- **Diferencie os fornecedores por criticidade.** Gaste o esforço de gestão onde a falha machucaria mais.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atendimento a níveis de serviço do fornecedor | Proporção das medidas de nível de serviço contratadas que um fornecedor cumpriu, pareada com uma medida de experiência do mesmo serviço | medidas cumpridas no período / medidas contratadas; relatado ao lado da pontuação de experiência do usuário para o serviço | porcentagem | Relatórios do fornecedor, seu próprio monitoramento, dados de pesquisas | Gestão de fornecedores; gestão de níveis de serviço | Revisão da contribuição de um parceiro para os objetivos | Mensal |
| Tempo de incidente atribuído a fornecedor | Horas de impacto no serviço atribuídas a um componente ou ação de um fornecedor | soma das horas de impacto dos incidentes em que a falha de um fornecedor foi uma causa confirmada | horas | Registros de incidentes com análise de causa, relatórios de incidentes de fornecedores | Gestão de incidentes; gestão de fornecedores | Tempo perdido com bloqueios externos | Mensal |
| Cobertura do registro de contratos | Proporção dos fornecedores com um contrato vigente, um responsável interno nomeado e uma revisão agendada | fornecedores com os três / fornecedores no escopo | porcentagem | Registro de contratos, registros de compras | Gestão de fornecedores; gestão financeira | Responsabilidade clara pelas dependências externas | Trimestral |
| Atualidade da due diligence | Proporção dos fornecedores críticos cuja avaliação de risco está dentro de seu ciclo de revisão | fornecedores críticos avaliados dentro do ciclo / fornecedores críticos | porcentagem | Avaliações de risco de fornecedores | Gestão de fornecedores; gestão de riscos; gestão de segurança da informação | Revisão regular dos riscos | Trimestral |
| Prontidão de saída | Proporção dos fornecedores críticos com um plano de saída documentado que foi testado dentro do período combinado | fornecedores críticos com um plano de saída testado / fornecedores críticos | porcentagem | Planos de saída e registros de testes | Gestão de fornecedores; gestão da continuidade de serviço | Recuperação praticada de uma dependência | Anual |
| Concentração | Proporção dos serviços críticos que dependem de um único fornecedor sem alternativa testada | serviços críticos com dependência de um único fornecedor e sem alternativa testada / serviços críticos | porcentagem | Mapa de dependências, registro de fornecedores | Gestão de fornecedores; gestão de riscos | Evitar um ponto único de falha | Trimestral |
| Taxa de encerramento de ações conjuntas | Proporção das ações combinadas em revisões conjuntas com fornecedores que foram encerradas até o prazo | ações conjuntas encerradas no prazo / ações conjuntas vencidas | porcentagem | Atas de reuniões e rastreador de ações | Gestão de fornecedores; melhoria contínua | Ações de retrospectiva entregues | Trimestral |

Defina a criticidade no registro, com os critérios, e aplique-a de forma consistente. Uma medida de nível de serviço é "cumprida" como definido no contrato, e a medida de experiência é a que você escolhe para o mesmo serviço. O tempo de incidente atribuído a fornecedor conta apenas as causas confirmadas, e o método de atribuição é combinado com o fornecedor onde possível. A prontidão de saída conta um plano como testado apenas quando um percurso guiado ou exercício foi registrado no período.

## Recomendações

### Conheça seus fornecedores e o que depende deles

**1. Mantenha um registro de fornecedores com responsáveis e criticidade.** Liste todo fornecedor com contrato, o que fornece, o responsável interno, as datas do contrato e a criticidade. Inclua serviços gratuitos ou informais em que suas equipes se apoiam. A criticidade é um julgamento sobre o dano se o fornecedor falhar e decide quanta atenção de gestão o relacionamento recebe.

**2. Mapeie a cadeia de dependências dos serviços críticos.** Para cada serviço crítico, liste os fornecedores dos quais depende e, onde puder, seus principais subcontratados e plataformas compartilhadas. Use os registros de configuração para os vínculos internos e peça aos fornecedores suas dependências críticas (veja o tópico 7.4, Métricas de qualidade de configuração e CMDB). O mapa mostra o risco de concentração e diz onde uma interrupção em outro lugar alcançaria você.

**3. Avalie o risco de forma proporcional.** Use uma avaliação curta e padronizada para fornecedores de baixo risco e uma mais profunda para os críticos, cobrindo segurança, resiliência, estabilidade financeira e conformidade. Reavalie em um ciclo e quando algo muda. Compartilhe os resultados com o fornecedor e combine ações. Normas como a ISO/IEC 27036 dão orientação sobre segurança da informação nas relações com fornecedores.

### Escreva contratos para resultados e cooperação

**4. Defina níveis de serviço que reflitam o que os usuários vivenciam.** Inclua medidas contratadas que se relacionem com resultados do usuário, como a velocidade da ação voltada ao usuário, além da disponibilidade dos componentes. Peça os dados para conferi-los você mesmo. Um [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement) com medidas que ninguém pode verificar, ou que não combinam com o que os usuários sentem, produz o efeito melancia.

**5. Prefira objetivos compartilhados a penalidades apenas.** Os créditos por metas não cumpridas são comuns e têm seu lugar, mas um contrato construído principalmente sobre penalidades torna o relacionamento adversarial e os dados menos honestos. Onde possível, inclua objetivos compartilhados, revisões conjuntas regulares e divisão de ganhos por melhorias. Revise o incentivo quanto aos efeitos colaterais que possa causar.

**6. Planeje a saída no contrato.** Inclua exportação de dados em formatos utilizáveis, apoio durante a transição, aviso prévio razoável e clareza sobre propriedade intelectual e propriedade das configurações. Pergunte quanto custaria sair e escreva isso. Um contrato sem termos de saída deixa você negociando sob pressão.

### Gerencie o relacionamento

**7. Realize revisões conjuntas regulares.** Reúnam-se em um ritmo que combine com a criticidade, com uma pauta padrão curta: resultados, incidentes, riscos, mudanças futuras e ações. Compartilhe suas próprias medidas com o fornecedor e peça as dele. Acompanhe as ações e o encerramento. Trate a reunião como uma sessão de trabalho entre parceiros e convide as pessoas que fazem o trabalho.

**8. Compartilhe informações de incidentes rápida e abertamente.** Combinem como e com que rapidez cada lado notificará o outro e revejam juntos os incidentes significativos, sem culpados (veja o tópico 3.4, Métricas de incidentes graves). Meça o tempo de incidente atribuído a fornecedor para ver onde está o maior impacto e use-o na conversa, e não como um porrete.

**9. Combine os dados do contrato com a experiência do usuário.** Para cada serviço crítico de fornecedor, ponha as medidas contratadas ao lado de medidas de satisfação ou de esforço dos usuários (veja o tópico 6.2, Acordos de nível de experiência). A discordância entre as duas é o ponto de partida de uma discussão.

**10. Coordene os fornecedores em um só serviço.** Onde vários fornecedores contribuem para um serviço, combinem quem é dono do resultado de ponta a ponta, como funcionam as transferências e quem se comunica com os usuários. As práticas de SIAM formalizam isso. Meça o atraso nas transferências e as escalações repetidas entre fornecedores (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

### Reduza a concentração e prepare-se para sair

**11. Meça a concentração e decida de propósito.** Relate a proporção dos serviços críticos que dependem de um único fornecedor sem alternativa testada. A concentração às vezes é a escolha certa, porque traz simplicidade e peso de negociação. Faça dela uma decisão com um responsável, um custo e uma data de revisão, e não um acidente.

**12. Teste a saída.** Para os fornecedores críticos, percorra o plano de saída pelo menos uma vez em um período definido: você consegue exportar os dados, a alternativa existe, quanto tempo levaria, o que quebraria? Um exercício de mesa revela lacunas a baixo custo. Registre os resultados e corrija as lacunas e atualize o plano quando a arquitetura mudar.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Atendimento a níveis de serviço do fornecedor | O fornecedor exclui eventos da medição; o relógio pausa; definições estreitas | Monitoramento próprio; medida de experiência; auditoria das exclusões |
| Tempo de incidente atribuído a fornecedor | Contestar a atribuição; classificar falhas do fornecedor como do lado do cliente | Revisão conjunta de causas; revisor neutro para disputas; acompanhar a parcela disputada |
| Cobertura do registro de contratos | Nomear responsáveis que não sabem; listar contratos sem datas | Confirmação do responsável; conferir se as reuniões de revisão acontecem |
| Atualidade da due diligence | Avaliações só por questionário; fornecedores se autocertificam | Exigência de evidência para fornecedores críticos; verificação por amostragem |
| Prontidão de saída | Escrever um plano e chamá-lo de testado; exercícios sem etapas reais | Registrar o que foi exercitado; revisão independente do exercício |
| Concentração | Dividir um fornecedor em várias entidades jurídicas no papel | Mapa de dependências até o provedor final; rever as plataformas compartilhadas |
| Taxa de encerramento de ações conjuntas | Definir ações fáceis; encerrar sem efeito | Rever a qualidade das ações; conferir se o problema pretendido melhorou |

Uma leitura saudável é um registro de fornecedores com responsáveis ativos, níveis de serviço que combinam com a experiência do usuário, incidentes discutidos abertamente, concentração escolhida de propósito e planos de saída que foram exercitados.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Fornecedor único | Simplicidade, peso de negociação, integração | Risco de concentração, aprisionamento |
| Vários fornecedores | Resiliência, escolha | Custo de integração, ônus de coordenação |
| Contrato pesado em penalidades | Remédios claros | Adversarial; esconde problemas |
| Parceria com objetivos compartilhados | Dados honestos, aprendizado mais rápido | Exige confiança e maturidade; remédios menos claros |
| Pagamento baseado em resultados | Alinha incentivos | Difícil de definir e medir resultados; manipulação |
| Pagamento baseado em insumos | Simples, previsível | Premia esforço, e não resultados |
| Revisões conjuntas frequentes | Alerta precoce | Custo de tempo |
| Só revisões anuais | Baixo custo | Lentas para captar problemas |

A resposta pragmática é reservar os remédios contratuais para os casos sérios, construir os relacionamentos do dia a dia em torno de resultados compartilhados e dados abertos e escolher a concentração de propósito. Ajuste a intensidade da gestão à criticidade do fornecedor.

## Perguntas para discutir com sua equipe

**1. Qual falha de fornecedor machucaria mais os nossos usuários, e qual é o nosso plano?**
Nomeiem as três principais dependências. Para cada uma, perguntem o que aconteceria numa interrupção prolongada e qual é o plano. O facilitador deve procurar dependências sem plano, sem responsável ou sem alternativa testada. Combinem uma para trabalhar primeiro.

**2. Onde um relatório contratual verde discorda do que os usuários nos dizem?**
Peguem um serviço de fornecedor e comparem as medidas do contrato com o feedback dos usuários. Perguntem qual é mais confiável e por quê. A conversa muitas vezes acha um nível de serviço que mede a coisa errada. Combinem levantá-lo na próxima revisão conjunta.

**3. Quem na equipe é dono de cada relacionamento crítico com fornecedor, e com que frequência se reúnem?**
Conferam o registro. Se um responsável não se reúne com o fornecedor há meses, perguntem por quê. Combinem um ritmo e uma pauta padrão para os mais críticos.

**4. O que seria preciso para deixar o nosso maior fornecedor?**
Estimem o tempo, o custo e o risco da saída. Perguntem que dados, integrações e habilidades prendem vocês. Decidam se a dependência é uma escolha deliberada e o que a mudaria.

**5. Como ficamos sabendo de um incidente de fornecedor, e com que rapidez?**
Revejam os dois últimos incidentes de fornecedores e o tempo entre o início deles e o nosso conhecimento. Conferam os termos de notificação. Combinem melhorias, como feeds de status compartilhados ou um contato nomeado.

**6. O que compartilhamos com nossos fornecedores, e o que eles compartilham conosco?**
Listem os dados que cada lado fornece. Discutam que compartilhamento adicional ajudaria, como previsões de demanda ou aviso antecipado de mudanças. Considerem a confidencialidade e combinem uma troca para começar.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega dependem de fornecedores para plataformas, componentes e serviços e sentem diretamente as mudanças deles. Devem manter as dependências visíveis no projeto, dar aos fornecedores aviso antecipado das mudanças de demanda e participar das revisões conjuntas. Podem embutir resiliência em seus serviços, por exemplo com alternativas de contingência, para que uma falha de fornecedor não pare tudo.

### Equipes de serviço e operações

As equipes de operações gerenciam o relacionamento do dia a dia: abrir incidentes, acompanhar o desempenho e coordenar transferências. Guardam a evidência do impacto atribuído a fornecedores e da experiência de trabalhar com cada um. Devem registrar a atribuição com cuidado, manter funcionando os canais de notificação e participar dos exercícios de saída.

### Liderança e governança

Os líderes assinam contratos e aceitam o risco. Devem pedir relatórios de criticidade, concentração e prontidão de saída, definir expectativas de parceria e evitar escolher fornecedores só pelo preço. A governança deve exigir due diligence proporcional à criticidade e evidência de que os planos de saída foram testados.

### Clientes e usuários

Os usuários vivenciam o resultado combinado da rede de fornecedores. Precisam de comunicação clara quando um problema de fornecedor os afeta e de suporte consistente, seja qual for a parte em falta. O feedback deles é a verificação de se o desempenho do fornecedor, como relatado, corresponde à realidade.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um grupo hospitalar regional apoia sistemas clínicos com cerca de 60 fornecedores, incluindo um provedor de hospedagem, um fornecedor de prontuários eletrônicos, uma operadora de rede e uma central de serviços gerenciada. Os números abaixo são ilustrativos.

Depois de uma longa interrupção do sistema de prontuários, o conselho pergunta quantas dependências desse tipo existem. A chefe de gestão de fornecedores monta o quadro. O registro de fornecedores cobre 47 dos 60 fornecedores conhecidos com contrato vigente, um responsável e uma data de revisão, uma cobertura de 78%. A due diligence está atual para 6 dos 14 fornecedores críticos. Dos 22 serviços críticos, 9 dependem de um único fornecedor sem alternativa testada, uma concentração de 41%, e dois desses fornecedores compartilham a mesma plataforma de hospedagem. A central de serviços gerenciada relata 98% de atendimento aos níveis de serviço, enquanto a satisfação da equipe clínica com a central está caindo, e o relatório mensal mostra que os incidentes que aguardam a segunda linha do fornecedor são excluídos do tempo de resposta medido. No último trimestre, o tempo de incidente atribuído a fornecedor somou 53 horas, três quartos delas de dois fornecedores. O plano de saída do fornecedor de prontuários existe no papel e nunca foi exercitado.

A chefe de gestão de fornecedores combina mudanças com os responsáveis pelos sistemas clínicos e com os fornecedores. Os fornecedores críticos ganham uma revisão conjunta trimestral com uma pauta compartilhada e dados dos dois lados. O contrato da central de serviços é emendado para medir o tempo até a resolução do ponto de vista do usuário, e o fornecedor concorda em compartilhar os dados de sua fila. Uma breve pesquisa de experiência é acrescentada ao lado das medidas do contrato. A due diligence dos fornecedores críticos passa a um ciclo anual com pedidos de evidência. A equipe realiza um exercício de mesa de saída para o fornecedor de prontuários, que descobre que o formato de exportação dos dados não inclui a trilha de auditoria e que a alternativa levaria meses para ser preparada. O achado entra na negociação seguinte do contrato. O grupo decide também quais das nove dependências de fornecedor único aceitar deliberadamente e quais reduzir.

Um ano depois, a cobertura do registro é de 96%, a due diligence está atual para 13 dos 14 fornecedores críticos e a concentração é de 27%, com cada caso restante registrado como decisão aceita. O tempo de incidente atribuído a fornecedor cai para 22 horas por trimestre. A medida contratual da central de serviços e a pontuação de satisfação clínica agora se movem juntas. O diretor financeiro pede uma cláusula que imponha penalidades financeiras por qualquer nível de serviço não cumprido em todos os fornecedores. A chefe de gestão de fornecedores propõe penalidades apenas para as medidas críticas ligadas à segurança e objetivos compartilhados para o restante, explicando que penalidades generalizadas levam os fornecedores a esconder eventos e a discutir a medição. A decisão é registrada, e o modelo de contrato é atualizado.

## Ágil, IA, automação e análise

### Ágil

Construa os relacionamentos com fornecedores em torno de resultados compartilhados e conversa regular. O cuidado é que medidas movidas por penalidades levam a disputas sobre definições.

### IA

Os fornecedores podem embutir IA em seus serviços; por isso pergunte quais recursos de IA são usados, com que dados e quem os supervisiona, e meça a cobertura de divulgação de IA pelos fornecedores. O cuidado é que as declarações dos fornecedores sobre IA devem ser conferidas contra os termos do contrato.

### Automação

Colete os dados de desempenho dos fornecedores automaticamente onde possível e automatize os lembretes de datas de contratos. Meça a automação pelas renovações perdidas. O cuidado é que os feeds automatizados dos fornecedores usam as definições deles; por isso reconcilie-os.

### Análise

Relate o atendimento dos fornecedores com regras de atribuição para os incidentes. A decisão informada é renovar, renegociar ou sair. O cuidado é que a concentração e a prontidão de saída são julgamentos; por isso documente o raciocínio.

## Olhar setorial

**Startup.** Os fornecedores são sobretudo ferramentas de nuvem e de software como serviço. Mantenha uma lista com responsáveis e datas de renovação, saiba que dados cada um guarda e mantenha uma exportação dos dados críticos. Escolha fornecedores com caminhos de exportação claros, porque o aprisionamento inicial é barato de criar e caro de desfazer.

**Pequena empresa.** Poucos fornecedores sustentam o negócio, e o dono muitas vezes os gerencia diretamente. Guarde contatos e termos de contrato em um só lugar, peça atualizações de status e de incidentes e teste a restauração a partir de backups guardados fora do fornecedor. Reduza a dependência de uma única pessoa no fornecedor.

**Grande empresa.** Muitos fornecedores e camadas pedem uma função de gestão de fornecedores, níveis de criticidade e termos contratuais padrão para segurança, resiliência e saída. Use coordenação ao estilo SIAM onde os fornecedores precisam trabalhar juntos. Mantenha um mapa central de dependências e compartilhe-o com as equipes de riscos e de continuidade.

**Governo e setor público.** A lei de compras, as regras de concorrência e as exigências de transparência moldam como os fornecedores são escolhidos e geridos. Os contratos podem ser longos, com deveres de relato público e exigências de soberania, acessibilidade e saída. Documente as decisões, relate o desempenho dos fornecedores como exigido e planeje a nova contratação (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o tempo dos responsáveis por fornecedores e de uma pequena função coordenadora, um registro e os dados de dependências, o esforço de avaliação e as revisões conjuntas. Os exercícios de saída custam de algumas horas a dias por fornecedor crítico. A ferramenta pode ser tão simples quanto um registro compartilhado.

Os retornos são incidentes causados por fornecedores menos numerosos e mais curtos, melhores condições comerciais por negociação informada, custos de aprisionamento evitados e uma resposta mais rápida e calma quando um fornecedor falha. Construa o argumento com os seus próprios dados: as horas de incidente atribuídas a fornecedores e seu custo, o custo e o tempo de transições passadas de fornecedores e a diferença entre os níveis de serviço contratados e a experiência relatada pelos usuários. Evite citar taxas de fracasso de terceirização do setor a menos que possa rastrear a fonte e o método. Inclua o custo de manter uma segunda opção aquecida e compare-o com a exposição que ela reduz (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Assinar e esquecer.** Os contratos se afastam da realidade. Faça revisões regulares com responsáveis e dados.
- **Confiar só no relatório do fornecedor.** Ele mede o que o fornecedor escolhe. Monitore de forma independente e compare com a experiência do usuário.
- **Relacionamentos só de penalidades.** Reduzem a honestidade. Construa objetivos compartilhados junto com os remédios.
- **Nenhum plano de saída.** Sair vira uma crise. Escreva e teste o plano antes de precisar.
- **Concentração oculta.** Vários fornecedores podem compartilhar uma plataforma. Mapeie até o provedor final.
- **Culpa nas revisões conjuntas.** Os fornecedores ocultam incidentes. Reveja os incidentes sem culpados.
- **Gestão uniforme de todos os fornecedores.** Desperdiça esforço nos pequenos e negligencia os críticos. Divida em níveis por criticidade.
- **Ignorar os subcontratados.** Seu risco inclui o deles. Pergunte sobre as dependências críticas.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Conhecer os fornecedores | Contratos dispersos | Registro dos principais fornecedores | Registro com responsáveis, criticidade e datas de revisão | Mapa de dependências até os subcontratados; cobertura e atualidade acompanhadas | Visão compartilhada das dependências com fornecedores e clientes |
| Desempenho e relacionamento | Reativo; disputas | Relatórios mensais dos fornecedores | Medidas de contrato e de experiência comparadas; revisões conjuntas regulares | Ações acompanhadas; incidentes revistos em conjunto; atribuição combinada | Fornecedores integrados como parceiros com objetivos compartilhados e dados abertos |
| Resiliência e saída | Nenhuma | Termos de saída em alguns contratos | Planos de saída para fornecedores críticos | Planos de saída exercitados; concentração decidida de propósito | Alternativas mantidas aquecidas; exercícios conjuntos com fornecedores |

## Lista de verificação

- [ ] Um registro de fornecedores lista cada fornecedor com um responsável, a criticidade e as datas do contrato.
- [ ] Os serviços críticos têm um mapa de dependências que chega aos principais subcontratados.
- [ ] Os níveis de serviço contratuais são pareados com uma medida de experiência do usuário.
- [ ] As revisões conjuntas com fornecedores críticos acontecem em um ritmo, com uma pauta padrão.
- [ ] A due diligence dos fornecedores críticos está atual e baseada em evidências.
- [ ] Os termos e canais de notificação de incidentes estão combinados e testados.
- [ ] O tempo de incidente atribuído a fornecedor é registrado com atribuição combinada.
- [ ] A concentração é medida, e cada dependência de fornecedor único é uma decisão registrada.
- [ ] Existem planos de saída para fornecedores críticos, e foram exercitados dentro do período.
- [ ] Os termos do contrato incluem exportação de dados, apoio à transição e propriedade das configurações.

## Prompts de IA

**Construa uma avaliação de criticidade de fornecedores.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**Compare as medidas do contrato com a experiência do usuário.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Projete um exercício de saída.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Redija uma pauta de revisão conjunta.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de fornecedor ou de contrato.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de fornecedor traz seu vetor de manipulação, sua barreira de proteção e sua regra de atribuição.

## Ideias-chave

- Você continua responsável pelos serviços que terceiriza; por isso gerencie os fornecedores como parte do seu próprio serviço.
- Pareie as medidas do contrato com a experiência do usuário e monitore de forma independente do relatório do fornecedor.
- Mapeie as dependências até os subcontratados e trate a concentração como uma decisão deliberada.
- Construa os relacionamentos em torno de resultados compartilhados e revisões conjuntas regulares, reservando os remédios para os casos sérios.
- Planeje a saída antes de assinar e teste-a para os fornecedores críticos.
- Reveja os incidentes com os fornecedores sem culpados e compartilhe os dados abertamente.

## Referências e leituras complementares

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Gestão de fornecedores](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Terceirização](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Integração e gestão de serviços](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Aprisionamento ao fornecedor](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Ataque à cadeia de suprimentos](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Estratégia de saída](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Contratação baseada em desempenho](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
