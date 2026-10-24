# Experiência de usuários e colaboradores

**As pessoas fazem seu melhor trabalho quando as ferramentas, os dispositivos e o suporte ao redor delas simplesmente funcionam; por isso meça o atrito que seus colegas enfrentam, trate as respostas como razão para remover obstáculos e nunca transforme esses dados em vigilância ou em uma classificação de pessoas.**

## Visão geral e motivação

O quinto princípio por trás do Manifesto Ágil diz para construir projetos em torno de indivíduos motivados, dar a eles o ambiente e o apoio de que precisam e confiar que farão o trabalho. Para as pessoas que usam a TI interna, o ambiente é o notebook, o login, as ferramentas de colaboração, o processo de acesso e a central de serviços. Quando esses são lentos ou confusos, as pessoas motivadas perdem tempo e boa vontade e inventam contornos. Medir esse ambiente é, portanto, um modo de apoiar as pessoas. Não é um modo de vigiá-las.

A [experiência do colaborador](https://en.wikipedia.org/wiki/Employee_experience_management) é a soma das interações de um colaborador com seu local de trabalho ao longo do tempo na organização. A parte que a TI molda é às vezes chamada de experiência digital do colaborador, e o [local de trabalho digital](https://en.wikipedia.org/wiki/Digital_workplace) é o conjunto de tecnologia que as pessoas usam para trabalhar. Os tópicos anteriores desta parte cobriram as pesquisas de satisfação (veja o tópico 6.1, Métricas de satisfação do cliente) e os acordos de nível de experiência (veja o tópico 6.2, Acordos de nível de experiência). Este tópico volta a mesma atenção para dentro, para os colegas que usam os serviços de TI todos os dias, incluindo os engenheiros e operadores que os constroem e operam.

Os usuários internos diferem dos clientes externos de quatro modos que importam para a medição.

- **Não podem ir embora.** Um colaborador não tem um concorrente para onde mudar; assim o silêncio não é satisfação. Pode significar resignação ou um contorno.
- **São identificáveis.** Em uma empresa de algumas centenas de pessoas, um pequeno grupo de respostas de pesquisa pode apontar para uma pessoa. O projeto de privacidade vem primeiro.
- **São também colegas.** Dados ruins de experiência prejudicam relacionamentos e o moral, e bons dados podem ser compartilhados abertamente e tratados em conjunto.
- **Incluem as equipes de entrega e de operações.** As ferramentas que desenvolvedores e a equipe da central de serviços usam fazem parte da experiência, e seu atrito chega aos usuários por correções mais lentas.

Dois temas atravessam este tópico. O primeiro é o **atrito**: o esforço, o atraso e a interrupção evitáveis que se interpõem entre uma pessoa e seu trabalho. As interrupções e a sobrecarga mental custam mais do que sugere o tempo de relógio. A ideia de [carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load), o fardo sobre a memória de trabalho, explica por que um formulário confuso ou uma reinicialização forçada inesperada custa mais que os minutos que leva, e a ideia de [fluxo (flow)](https://en.wikipedia.org/wiki/Flow_(psychology)), um estado de foco absorvido, explica por que proteger o tempo ininterrupto importa para o trabalho do conhecimento. O segundo tema é a **ética**: como aprender sobre a experiência sem invadir a privacidade. A tecnologia de [monitoramento de funcionários](https://en.wikipedia.org/wiki/Employee_monitoring) pode medir muita coisa, e a linha entre apoiar e policiar é fácil de cruzar. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica aqui em forma humana: uma pontuação usada para julgar pessoas as ensina a esconder seus problemas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Meça o ambiente, não a pessoa.** A unidade de análise é um serviço, um tipo de dispositivo ou um grupo, nunca um indivíduo.
- **Trate o atrito como o inimigo.** Tempo perdido, interrupção e confusão são custos a remover.
- **Pergunte, observe e meça.** Combine o que as pessoas dizem com o que os sistemas registram e com o que você vê ao observar o trabalho sendo feito.
- **Faça da privacidade um requisito de projeto.** Colete o mínimo de dados que responde à pergunta, agregue cedo e suprima os grupos pequenos.
- **Inclua todos.** Necessidades de acessibilidade, trabalhadores remotos e de turnos e recém-chegados muitas vezes encontram a pior experiência.
- **Proteja o foco.** Planeje mudanças, atualizações e notificações em torno do trabalho das pessoas.
- **Diga o que coleta e por quê.** A transparência constrói a confiança de que as respostas honestas dependem.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de prontidão no primeiro dia | Proporção dos recém-chegados cujos dispositivos, contas e acessos estão completos e funcionando na hora de início | recém-chegados com todos os itens combinados funcionando no início / recém-chegados no período | porcentagem | Requisições de integração, sistema de identidade, confirmação do recém-chegado | Gestão de requisições de serviço; gestão do catálogo de serviços | Acordo de trabalho da equipe para integração | Mensal |
| Tempo até ficar produtivo | Tempo decorrido da data de início até o ponto em que um recém-chegado tem tudo de que precisa para sua primeira tarefa real | mediana e 85º percentil dos dias da data de início até a confirmação do recém-chegado e do seu gestor | dias | Rastreador de integração; pergunta curta de confirmação | Gestão de requisições de serviço; melhoria contínua | Tempo para um novo membro da equipe fazer uma primeira mudança | Mensal |
| Prevalência de contornos | Proporção do pessoal pesquisado que usa ferramentas não aprovadas ou passos manuais para contornar um serviço oficial | respondentes que relatam um contorno para o serviço / respondentes válidos | porcentagem | Pesquisa de pulso; relatórios de descoberta de ferramentas não sancionadas | Gestão de nível de serviço; melhoria contínua | Impedimentos levantados nas reuniões diárias da equipe | Trimestral |
| Minutos de interrupção forçada | Tempo em que as pessoas são interrompidas por ações planejadas de TI, como reinicializações forçadas, atualizações e solicitações de login | total de minutos de interrupção causados por ações planejadas / usuários ativos no grupo | minutos por pessoa por mês | Registros de gestão de endpoints, agregados por grupo | Habilitação de mudanças; gestão de releases e implantação | Tempo de trabalho sem interrupção | Mensal |
| Tempo de resolução de requisições de acessibilidade | Tempo para resolver requisições relacionadas a necessidades de acessibilidade | mediana e 85º percentil das horas da requisição até uma solução confirmada funcionando | horas | Sistema de requisições com uma etiqueta de acessibilidade | Gestão de requisições de serviço; gestão de incidentes | Definição de pronto inclusiva | Mensal |
| Pontuação de pulso de ferramenta | Avaliação de uma ferramenta ou serviço nomeado em uma pergunta curta combinada | avaliação média ou proporção favorável entre as respostas válidas, por ferramenta | pontos da escala ou porcentagem | Pesquisa de pulso, com ferramentas em rodízio | Gestão de nível de serviço; melhoria contínua | Feedback dos membros da equipe sobre suas ferramentas | Trimestral |
| Conformidade com as salvaguardas de privacidade | Proporção dos relatórios de experiência que atendem às regras de supressão e de agregação | relatórios que atendem às regras / relatórios publicados | porcentagem | Revisão dos relatórios publicados contra as regras de privacidade | Gestão de segurança da informação; medição e relato | Acordo de trabalho sobre uso de dados | Trimestral |

Defina o grupo e o período de cada medida. A prontidão no primeiro dia conta um recém-chegado como pronto somente quando todos os itens de uma lista combinada funcionam, e a lista é registrada no registro de métricas. Os minutos de interrupção forçada são calculados a partir de totais de grupo, e o menor nível mostrado é um grupo de pelo menos dez pessoas. A conformidade com as salvaguardas de privacidade se aplica ao próprio programa de experiência, o que a torna uma barreira de proteção para as outras seis.

## Recomendações

### Parta das pessoas e de seu trabalho

**1. Percorra um dia com os colegas.** Sente-se com algumas pessoas de papéis, locais e turnos diferentes e observe-as trabalhar. Anote cada espera, cada contorno e cada momento de confusão. Pergunte o que elas corrigiriam primeiro. A observação encontra problemas que as pesquisas perdem, porque as pessoas deixam de notar o atrito com que aprenderam a conviver. Combine de antemão o que vai registrar e como usará.

**2. Mapeie os momentos que importam.** Para o pessoal, os momentos de alto impacto costumam ser o primeiro dia, a falha de um notebook, uma mudança entre equipes, uma requisição de acesso e a saída da organização. Escreva os passos de cada um e quem é dono deles. O mapa mostra as transferências entre equipes onde o atraso se esconde, o que se liga às medidas de colaboração de uma parte posterior (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho).

**3. Inclua as pessoas das margens.** O pessoal com necessidades de acessibilidade, os trabalhadores de turnos, o pessoal remoto e de campo e os prestadores muitas vezes são invisíveis nas médias. Segmente os resultados onde for seguro e reveja o grupo pior atendido separadamente. Trate a acessibilidade como requisito de primeira classe. Os padrões de [acessibilidade na web](https://en.wikipedia.org/wiki/Web_accessibility), como as Diretrizes de Acessibilidade para Conteúdo Web, dão uma lista de verificação concreta para as ferramentas internas, e os problemas de acessibilidade são uma questão legal e ética em muitas jurisdições.

### Meça com cuidado

**4. Combine três tipos de evidência.** Use perguntas de pulso curtas sobre ferramentas e momentos nomeados, medidas de sistema como minutos de interrupção forçada e conclusão da integração e conversas. Quando dois tipos discordam, investigue. Uma ferramenta com excelente tempo no ar e uma pontuação de pulso ruim está dizendo algo que o tempo no ar não consegue (veja o tópico 5.3, Métricas de disponibilidade).

**5. Pergunte sobre uma ferramenta, não sobre a TI.** "Quão fácil é achar um documento no sistema de arquivos?" obtém respostas melhores que "Como está a TI?". Alterne as ferramentas no pulso para que ninguém seja perguntado mais de uma ou duas vezes por trimestre e mantenha estável a redação para que as tendências signifiquem algo.

**6. Conte os minutos que as pessoas perdem.** O tempo perdido é mais fácil de entender que uma pontuação. Estime-o a partir do sistema onde puder, por exemplo solicitações de reinicialização e falhas de login, e peça às pessoas uma cifra aproximada onde não puder. Apresente-o por pessoa por mês para um grupo, com o método, e evite multiplicar pelo salário para fazer um número dramático, a menos que declare também as premissas.

**7. Minimize e agregue.** Siga o princípio da [minimização de dados](https://en.wikipedia.org/wiki/Data_minimization): colete apenas o que precisa, guarde apenas pelo tempo que precisar e agregue o mais cedo possível. Onde os dados poderiam identificar alguém, a [pseudonimização](https://en.wikipedia.org/wiki/Pseudonymization) reduz o risco. Regras como a [k-anonimidade](https://en.wikipedia.org/wiki/K-anonymity), que exige que cada grupo relatado contenha pelo menos k pessoas, dão um modo simples de suprimir células pequenas. Declare o seu k no registro.

**8. Trace uma linha clara contra a vigilância.** Não use dados de experiência, telemetria de endpoints ou sentimento para avaliar indivíduos, para detectar quem está "menos engajado" ou para alimentar avaliações de desempenho. Diga isso por escrito e deixe representantes do pessoal ou um conselho de trabalhadores revisar o plano de dados onde existirem. Confira a lei local e consulte especialistas em privacidade antes de coletar qualquer dado comportamental. A confiança, uma vez perdida, torna menos honesta toda pesquisa posterior.

### Aja sobre o que aprende

**9. Corrija primeiro o maior atrito e diga isso.** Classifique os problemas por tempo perdido, número de pessoas e severidade para as pessoas afetadas e financie os principais. Diga às pessoas o que corrigiu e o que escolheu não corrigir, com os motivos. Uma correção visível é o maior estímulo para continuar relatando problemas.

**10. Planeje as interrupções em torno do trabalho.** Muitas interrupções forçadas são evitáveis. Programe as atualizações fora do tempo de foco, ofereça adiamento dentro de limites e agrupe as reinicializações. Reveja os minutos de interrupção forçada ao lado das metas de segurança para que a compensação seja explícita, já que algumas atualizações precisam acontecer depressa (veja o tópico 4.3, Métricas de habilitação de mudanças).

**11. Trate os contornos como feedback de projeto.** Quando as pessoas usam uma ferramenta não aprovada, pergunte o que ela faz melhor. A resposta é um requisito que a ferramenta oficial perdeu. O [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) traz riscos reais para a segurança e o custo, e uma resposta punitiva o empurra para a clandestinidade. Prefira adotar a boa ideia, ou explicar o risco e oferecer uma alternativa segura.

**12. Compartilhe o programa com as pessoas a quem serve.** Mostre os resultados ao pessoal, faça uma revisão curta com representantes e pergunte o que mudar no próximo trimestre. O programa é uma forma de colaboração contínua entre a TI e seus usuários, e a melhoria contínua do ambiente é o resultado. Ligue-o às medidas de pessoas da parte seguinte (veja o tópico 9.2, Métricas de satisfação e bem-estar).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de prontidão no primeiro dia | Encurtar a lista combinada; marcar itens como prontos antes de funcionarem; atrasar a data oficial de início | Lista escrita no registro; confirmação do recém-chegado; tempo até ficar produtivo |
| Tempo até ficar produtivo | Marcar o início do relógio mais tarde; encerrar cedo o registro de integração | Definição do relógio no registro; gestor e recém-chegado confirmam ambos |
| Prevalência de contornos | Desencorajar respostas honestas insinuando consequências; perguntar só a grupos satisfeitos | Declaração de anonimato; taxa de resposta e mistura de respondentes; conformidade com as salvaguardas de privacidade |
| Minutos de interrupção forçada | Contar só alguns tipos de interrupção; mover as interrupções para o grupo não medido | Definir todos os tipos de interrupção planejada; relatar por grupo, incluindo o pessoal remoto e de turnos |
| Tempo de resolução de requisições de acessibilidade | Encerrar requisições com uma correção parcial; etiquetar requisições como outra coisa para evitar o relógio | Confirmação do solicitante de que a solução funciona; revisão das requisições sem etiqueta |
| Pontuação de pulso de ferramenta | Pesquisar apenas usuários felizes; mudar a pergunta; treinar o pessoal a responder bem | Registro de redação estável; taxa de resposta e mistura; ler os comentários |
| Conformidade com as salvaguardas de privacidade | Relatar conformidade sem revisão independente; alargar grupos para esconder problemas | Revisão periódica por alguém de fora da equipe; publicar as regras (o valor de k e a supressão) |

Uma leitura saudável é de recém-chegados que conseguem trabalhar no primeiro dia, uma contagem decrescente de interrupções forçadas, contornos que levam a melhores ferramentas oficiais e pessoas que dizem confiar no programa porque viram o que ele faz com suas respostas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Pesquisas de pulso | Voz direta, barata, fácil de repetir | Fadiga de pesquisas; viés de resposta |
| Telemetria do sistema | Objetiva, contínua, sem peso de pesquisa | Risco de privacidade; mostra eventos mas não sentimentos |
| Observação e entrevistas | Acha atrito escondido; constrói relacionamentos | Demorada; amostras pequenas |
| Dados de granularidade fina | Diagnóstico preciso | Identifica pessoas; corrói a confiança |
| Dados agregados com supressão | Seguros de compartilhar e de agir sobre | Menos detalhe; esconde grupos pequenos que podem estar com dificuldade |
| Controles estritos em dispositivos | Segurança e conformidade | Mais interrupção forçada; mais contornos |

A resposta pragmática é usar os três tipos de evidência no nível do grupo, guardar o detalhe apenas pelo tempo que um diagnóstico precisar e tratar a segurança e a experiência como uma compensação a discutir abertamente. O objetivo é um local de trabalho em que pessoas motivadas obtêm o que precisam com pouco esforço.

## Perguntas para discutir com sua equipe

**1. Como é o primeiro dia de um novo colega, e como sabemos?**
Peça à equipe que trace o caminho da oferta até a primeira tarefa real. Quem faz o quê, e onde espera? Peça a um recém-chegado recente que se junte à conversa. O facilitador deve focar nos momentos que deixaram a pessoa esperando ou constrangida e combinar uma mudança que melhoraria o dia do próximo recém-chegado.

**2. Que contorno as pessoas usam que preferiríamos que não usassem, e o que isso nos diz?**
Listem as ferramentas não oficiais e os passos manuais que a equipe viu. Para cada um, perguntem que necessidade atende. A conversa muitas vezes encontra um requisito que o serviço oficial perdeu. Decidam quais contornos adotar, quais substituir por uma opção oficial melhor e quais proibir com uma explicação.

**3. Quantos minutos por mês as nossas próprias ações tomam dos colegas?**
Estimem as reinicializações forçadas, atualizações e solicitações de uma pessoa típica. Comparem com o que um usuário diria. O facilitador pode perguntar o que mudaria se a cifra fosse publicada. Combinem uma interrupção a reduzir ou reagendar neste trimestre.

**4. Que dados sobre os colegas poderíamos coletar, e o que deveríamos prometer nunca fazer com eles?**
Façam duas listas: o que é tecnicamente possível e o que a equipe realmente coletará. Redijam uma declaração curta de finalidade e limites. Peçam a um representante do pessoal que reaja. A discussão mostra onde fica a linha contra a vigilância e como explicá-la.

**5. Quem mais tem dificuldade com as nossas ferramentas, e está nos nossos dados?**
Pensem em necessidades de acessibilidade, trabalhadores de turnos, pessoal remoto e pessoas novas. Conferam se as pesquisas e os registros os alcançam e se as regras de grupos pequenos os escondem. Combinem um modo de ouvir diretamente o grupo menos atendido.

**6. O que corrigimos no último trimestre por causa do que os colegas nos disseram, e eles ficaram sabendo?**
Listem as correções e como foram anunciadas. Se a lista é curta, discutam o que bloqueia a ação: responsabilidade, financiamento ou medo. Combinem uma correção visível a entregar antes da próxima pesquisa e uma mensagem para explicá-la.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são ao mesmo tempo usuárias e construtoras de ferramentas internas. Seu próprio atrito, como builds lentos, ambientes instáveis e atrasos de acesso, desacelera tudo o que entregam, e as medidas deste tópico se aplicam a elas também. Devem pôr as ferramentas internas no backlog de produto com um responsável e usuários e participar do pulso e das revisões como colegas (veja o tópico 9.1, Saúde da equipe e experiência do desenvolvedor).

### Equipes de serviço e operações

As operações e a central de serviços moldam boa parte da experiência, e são pessoal com ferramentas e carga de trabalho próprias. Devem enviar mudanças com cuidado com o foco dos usuários, manter responsivo o canal de acessibilidade e usar os contornos como feedback. Devem também proteger os próprios colegas de serem classificados por dados de experiência. O pessoal de suporte também é composto de indivíduos motivados.

### Liderança e governança

Os líderes definem a cultura da medição. Devem pedir atrito removido, e não pontuações elevadas, e financiar as correções. Devem proteger por escrito os compromissos de privacidade, resistir a pedidos de usar os dados sobre indivíduos e aceitar que os controles de segurança têm um custo de experiência a pesar. A governança deve esperar as regras de privacidade e sua revisão como parte de qualquer relato de experiência.

### Clientes e usuários

As pessoas que usam a TI interna são as autoras da experiência. Merecem um primeiro dia que funcione, ferramentas que respeitem seu foco, um relato honesto do que é coletado sobre elas, um modo de optar por sair onde possível e evidência de que falar leva a mudança. Os colegas com necessidades de acessibilidade devem ser perguntados sobre como fazer o serviço funcionar para eles, e não tratados como um caso especial.

## Na prática: um exemplo de gestão de serviços

A TI central de uma universidade apoia 6.000 funcionários e opera uma central de serviços, uma equipe de plataforma e várias equipes de produto. Os números abaixo são ilustrativos.

Uma nova chefe de TI quer saber por que as reclamações do pessoal sobre a integração persistem quando os tempos de resolução da central de serviços estão dentro da meta. Ela pede ao gerente do serviço que pilote um programa de experiência para os recém-chegados e para a principal ferramenta de colaboração, construído com o conselho dos funcionários. A condição do conselho é uma promessa escrita de que nenhum dado sobre indivíduos será usado, e ele concorda em revisar o plano.

A equipe mede a prontidão no primeiro dia e o tempo até ficar produtivo dos 140 recém-chegados do último trimestre, usando o rastreador de integração e uma confirmação de uma pergunta do recém-chegado e do seu gestor. Apenas 46% dos recém-chegados tinham todos os itens combinados funcionando no primeiro dia, e a mediana do tempo até ficar produtivo foi de 4 dias, com um 85º percentil de 9 dias. As razões, tiradas das entrevistas, são três requisições separadas que esperam cada uma uma equipe diferente e uma etapa de imagem de notebook que termina tarde nas sextas-feiras. Um pulso curto da ferramenta de colaboração, enviado a um décimo rotativo do pessoal com tamanho mínimo de grupo de 10, mostra avaliações mais baixas entre o pessoal que trabalha à noite e nos fins de semana. Os registros dos endpoints, agregados por prédio e turno, mostram uma média de 38 minutos por mês de reinicializações forçadas e solicitações de atualização, com uma cauda longa para o pessoal dos turnos da noite, que têm reinicializações durante o horário de trabalho porque seus dispositivos se atualizam quando os outros dormem.

A equipe faz três mudanças. Uma única requisição de integração substitui as três, com um responsável nomeado. A etapa de imagem passa para uma janela em dia útil. O agendamento de atualizações ganha uma janela de adiamento ligada ao horário de trabalho do usuário. Publicam as regras de privacidade no registro de métricas: tamanho mínimo de grupo de 10, nenhum dado individual em qualquer relatório e um limite de retenção de seis meses para os registros brutos. Três meses depois, a prontidão no primeiro dia sobe para 81%, o 85º percentil do tempo até ficar produtivo cai para 5 dias e os minutos de interrupção forçada do pessoal do turno da noite caem cerca de pela metade. Um gerente pede à chefe de TI que relate quais departamentos têm mais reclamações, para nomear equipes para acompanhamento. Ela se recusa a classificar departamentos e se oferece para compartilhar os padrões no nível de grupo e corrigir as causas. A decisão é registrada no registro de decisões, e o conselho pede para estender o programa a uma segunda ferramenta.

## Ágil, IA, automação e análise

### Ágil

Corrija o atrito em pequenos passos e mostre às pessoas o que mudou, no espírito da melhoria contínua. O cuidado é que pesquisar as pessoas repetidamente sem ação visível destrói a confiança.

### IA

Os assistentes de IA mudam o trabalho diário dos colaboradores; por isso meça o atrito e o tempo perdido nas tarefas assistidas por IA e pareie o uso com um benefício relatado pelo usuário. O cuidado é que os dados de uso de IA sobre indivíduos podem ser mal usados para julgar o desempenho; por isso mantenha-os agregados e governados.

### Automação

Colete automaticamente a saúde de dispositivos e aplicativos, com limites claros de privacidade, e meça a coleta pela cobertura e pelo número de problemas corrigidos. O cuidado é que a telemetria técnica pode perder como o trabalho é sentido; por isso combine-a com pesquisas curtas.

### Análise

Relate a prontidão e o tempo até ficar produtivo com contagens, nunca por pessoa. A decisão informada é onde remover obstáculos. O cuidado é que equipes pequenas produzem dados identificáveis; por isso defina um tamanho mínimo de grupo antes de relatar.

## Olhar setorial

**Startup.** Todos falam com todos; assim a observação e a conversa acharão a maior parte do atrito. Faça excelente a experiência do primeiro dia, porque ela define o tom, e mantenha mínima a telemetria. Escreva cedo as promessas de privacidade, mesmo que a equipe seja pequena.

**Pequena empresa.** Um único administrador pode cuidar da integração e do suporte. Use uma lista de verificação simples e pergunte a cada recém-chegado o que faltou. Cuidado com os dados de grupos pequenos: com uma dúzia de funcionários, quase qualquer divisão identifica alguém; por isso apoie-se na conversa.

**Grande empresa.** Parques grandes e variados tornam a segmentação útil e arriscada. Segmente por família de papéis, tipo de local e classe de dispositivo em vez de por equipe, aplique um tamanho mínimo de grupo e envolva representantes do pessoal. Alinhe o programa com as funções de segurança, jurídica e de privacidade desde o começo.

**Governo e setor público.** Os deveres de acessibilidade, igualdade e privacidade costumam ser legais, e os conselhos de trabalhadores ou sindicatos podem ter papéis formais. Trate os testes de acessibilidade e a consulta como partes exigidas do programa, publique as regras de privacidade e evite coletar dados que não são claramente necessários. Onde os dados do pessoal são regulados, envolva o encarregado de proteção de dados (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são modestos. As pesquisas de pulso e a observação exigem tempo das pessoas e uma ferramenta de pesquisa. Os dados de endpoints geralmente vêm de ferramentas já implantadas, embora a análise e a revisão de privacidade exijam esforço. O maior custo é a disposição de corrigir o que se encontra, o que pode significar mudar processos de integração, políticas de dispositivos e práticas de atualização entre equipes.

O retorno vem em tempo recuperado, rampa de entrada mais rápida dos recém-chegados, menos contatos de suporte causados por atrito evitável e menos shadow IT. Você pode construir o argumento com os seus próprios números: os minutos de interrupção forçada por pessoa, os dias até ficar produtivo dos recém-chegados e os contatos de suporte sobre problemas que uma correção removeu. Seja cauteloso com uma única cifra de produtividade derivada de salário e minutos, porque ela repousa em premissas sobre quanto vale um minuto recuperado. Há também um custo de risco do outro lado do livro-razão: coletar dados demais sobre o pessoal pode criar exposição legal e abalar a confiança. Inclua isso no custo total de propriedade.

## Antipadrões e armadilhas

- **Usar dados de experiência para julgar indivíduos.** Transforma um programa de apoio em vigilância e acaba com o feedback honesto. Agregue, suprima os grupos pequenos e diga isso.
- **Medir apenas médias.** As pessoas com a pior experiência ficam escondidas. Olhe a cauda e os grupos menos atendidos.
- **Coletar tudo porque é possível.** Mais dados trazem mais risco. Colete o que responde a uma pergunta.
- **Pesquisar sem parar.** As pessoas param de responder. Alterne as ferramentas e mantenha curto.
- **Punir contornos.** As pessoas os escondem e a necessidade subjacente não é atendida. Aprenda com eles.
- **Pôr a segurança e a experiência em salas separadas.** Alguns controles valem o custo, e muitos não valem. Discuta a compensação com números.
- **Tratar o primeiro dia como problema de outra pessoa.** A integração atravessa o RH, a TI e o gestor. Dê a ela um único responsável.
- **Ignorar a acessibilidade até uma reclamação.** Construa e teste com as pessoas afetadas desde o começo.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Compreensão do atrito | Apenas reclamações | Entrevistas ou uma pesquisa ocasionais | Observação regular e pulso para as ferramentas e momentos-chave | Evidência combinada de pesquisa, sistema e conversa, segmentada com segurança | Visão conjunta com o RH, as instalações e os fornecedores; o pessoal é coautor das prioridades |
| Privacidade e ética | Sem regras declaradas | Cuidado informal | Regras escritas de finalidade, minimização e tamanho de grupo | Regras revistas de forma independente; conformidade medida | Regras projetadas em conjunto com representantes do pessoal e auditadas entre fornecedores |
| Ação | Correções por reclamação | Correções ad hoc | Principais atritos no backlog com responsáveis | Correções financiadas, acompanhadas e anunciadas; interrupções planejadas em torno do trabalho | Melhorias de experiência embutidas no planejamento entre equipes e fornecedores |

## Lista de verificação

- [ ] Os momentos-chave (primeiro dia, falha de dispositivo, requisição de acesso, mudança, saída) estão mapeados com responsáveis.
- [ ] A prontidão no primeiro dia e o tempo até ficar produtivo são medidos com uma lista e relógios escritos.
- [ ] Um pulso curto cobre ferramentas nomeadas em rodízio.
- [ ] Os minutos de interrupção forçada são medidos por grupo e revistos com a segurança.
- [ ] As requisições de acessibilidade são etiquetadas, acompanhadas e confirmadas pelo solicitante.
- [ ] Os relatórios usam um tamanho mínimo de grupo e nunca mostram indivíduos.
- [ ] Existe e é compartilhada uma declaração escrita de finalidade e limites para os dados de experiência.
- [ ] Os representantes do pessoal revisaram o plano de dados onde existem tais órgãos.
- [ ] Os contornos são coletados e revistos como feedback.
- [ ] Os resultados e as correções são compartilhados com o pessoal a cada trimestre.

## Prompts de IA

**Mapeie um momento que importa.**

```text
We want to improve [moment, for example the first day for a new starter] in
[type of organization]. The steps today are: [list steps and who owns each]. Draw
a text map showing hand-offs and waits, suggest where friction is likely, and
propose one measure from what people say, one from what systems record, and one
from observation for each major step. Do not invent figures. List your
assumptions and the questions I should ask staff.
```

**Redija uma declaração de privacidade para um programa de experiência.**

```text
Draft a one-page plain-language statement for staff about an experience program
in [organization type] in [jurisdiction]. We collect: [list data]. Our purpose
is [purpose]. Include what we will not do (for example use data on individuals),
the minimum group size [number], retention [period], who can see raw data, and
how staff can raise concerns. Flag anything I should review with a privacy
specialist or staff representatives. Do not give legal conclusions. List your
assumptions.
```

**Analise comentários de pulso sobre uma ferramenta.**

```text
Here are [number] anonymized comments about [tool] from [period]: [paste
comments with personal data removed]. Group them into themes of friction,
count each theme, give two representative quotes for each, and suggest which
themes may point to a fixable cause versus a training need. Do not identify
individuals or infer motives. List your assumptions and what a person should
check before acting.
```

**Planeje uma redução de interrupções.**

```text
Our endpoints receive [number] planned interruptions per person per month on
average: [list types and frequencies]. Security requirements: [list]. Propose a
scheme that reduces disruption to focus time (for example deferral windows,
bundling, scheduling by working hours) while meeting the requirements, and
describe how to measure whether it works without tracking individuals. List
your assumptions and the trade-offs I should discuss with security.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de experiência ou de atrito antes de publicá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de experiência revista mantém seu vetor de manipulação, sua barreira de proteção e suas regras de privacidade.

## Ideias-chave

- O objetivo é dar a pessoas motivadas o ambiente e o apoio de que precisam; por isso meça o atrito e remova-o.
- Combine perguntas de pulso, medidas de sistema e observação e olhe os grupos das margens.
- Conte os minutos perdidos e as interrupções causadas pelas próprias ações da TI e planeje em torno do foco das pessoas.
- Faça da privacidade uma regra de projeto: minimize, agregue, suprima os grupos pequenos e nunca julgue indivíduos.
- Trate os contornos como feedback e diga ao pessoal o que você corrigiu.
- Inclua a acessibilidade desde o começo e reveja o programa com as pessoas a quem serve.

## Referências e leituras complementares

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Gestão da experiência do colaborador](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Local de trabalho digital](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Carga cognitiva](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Fluxo (psicologia)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Monitoramento de funcionários](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Acessibilidade na web](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Minimização de dados](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonimização](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonimidade](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
