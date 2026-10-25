# Inflação de métricas e diluição da qualidade

**Quando a IA torna baratos o volume e a velocidade, toda métrica que conta volume e velocidade infla; por isso pareie cada uma com uma medida de utilidade que uma pessoa conferiu e observe se o sinal nos seus dados está sendo afogado.**

## Visão geral e motivação

Uma métrica funciona porque reflete algo difícil de produzir. Tickets resolvidos refletem esforço. Documentos escritos refletem conhecimento. Testes acrescentados refletem cuidado. Quando uma ferramenta torna quase gratuita a produção visível, o vínculo entre a produção e o esforço se rompe. Os números continuam subindo e o significado se esvai. Isso é a inflação de métricas, e sua companheira é a diluição da qualidade: a parcela do que é produzido que é útil cai, e a parte útil fica mais difícil de achar.

Não é um problema novo. A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) e sua parente, a [lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), descrevem como as medidas usadas para controle são corrompidas. Uma [métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric) parece impressionante e não diz nada sobre a saúde do trabalho. O que a IA muda é a velocidade e a escala em que a produção pode ser gerada e, com isso, a velocidade e a escala em que essas velhas falhas podem ocorrer. Uma equipe que antes inflava uma contagem à mão agora pode fazê-lo em minutos, muitas vezes sem pretender.

Vários padrões se repetem no trabalho de serviços e de entrega.

- **Inflação de volume.** A IA redige mais tickets, mais respostas, mais comentários, mais casos de teste, mais documentos e mais código. As contagens dessas coisas sobem. As cargas de trabalho de quem precisa ler, revisar e manter também sobem.
- **Inflação de velocidade.** O tempo até o primeiro rascunho cai muito, e o tempo até um resultado concluído e conferido cai menos, ou nada. Um painel que relata o primeiro conta uma história lisonjeira.
- **Ruído.** Mais conteúdo compete por atenção. A [sobrecarga de informação](https://en.wikipedia.org/wiki/Information_overload) é a condição em que uma pessoa não consegue processar o volume de informação apresentado, e a [relação sinal-ruído](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) da base de conhecimento, da fila de tickets ou do fluxo de alertas cai. A [fadiga de alertas](https://en.wikipedia.org/wiki/Alert_fatigue) é sua forma operacional (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).
- **Conteúdo gerado de baixa qualidade.** O conteúdo produzido em massa com pouca revisão, às vezes chamado de [lixo de IA (AI slop)](https://en.wikipedia.org/wiki/AI_slop), é plausível e raso. Uma base de conhecimento semeada com tais artigos se torna menos confiável, e os usuários aprendem a desconfiar dela.
- **Custo de verificação.** O esforço para conferir uma afirmação costuma ser muito maior que o esforço para fazê-la, um padrão por vezes chamado de [lei de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Quando a geração é barata, a verificação vira o gargalo.
- **Eficiência que aumenta o consumo.** O [paradoxo de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) descreve casos em que ganhos de eficiência levam a mais uso de um recurso, e não menos. Se redigir um relatório fica barato, mais relatórios são exigidos. O tempo economizado por uma ferramenta pode ser consumido por mais trabalho de menor valor.
- **Ciclos de retroalimentação.** Se o conteúdo gerado alimenta a rodada seguinte de geração, os erros se compõem. A literatura de pesquisa descreve o [colapso de modelos](https://en.wikipedia.org/wiki/Model_collapse) em modelos treinados com suas próprias saídas. Um ciclo parecido pode ocorrer dentro de uma organização quando um assistente resume tickets que foram escritos por um assistente a partir de artigos que um assistente resumiu.
- **Linhas de base à deriva.** Se a distribuição dos dados muda por causa da IA, as tendências e os limites já não significam o que significavam. Isso lembra a [deriva de conceito (concept drift)](https://en.wikipedia.org/wiki/Concept_drift) no aprendizado de máquina, em que a relação entre entradas e resultados muda com o tempo. Um aumento no volume de tickets pode refletir uma criação mais fácil de tickets, e não mais problemas.

Os objetivos ágeis importam aqui. A entrega contínua, a melhoria contínua e o ritmo sustentável dependem todos de o sinal estar claro. Não se deve pedir a pessoas motivadas que vadeiem por ruído gerado por máquina nem que verifiquem pilhas de saídas em um ritmo insustentável. As partes interessadas continuamente envolvidas são também a melhor defesa: elas dirão quando os relatórios já não ajudam.

Este tópico dá as medidas para perceber a inflação e a diluição e os pareamentos que as expõem. Apoia-se nos fundamentos e nas medidas do trabalho assistido (veja o tópico 10.1, A IA na medição da gestão de serviços, e o tópico 10.2, Medir o trabalho assistido por IA).

## Princípios-chave

- **Pareie toda métrica de volume ou de velocidade com uma verificação de utilidade.** Uma pessoa julga se a saída é útil.
- **Meça até um resultado concluído e verificado.** A velocidade do primeiro rascunho é uma armadilha.
- **Observe o ônus de verificação.** Ele cresce em silêncio e consome o tempo economizado.
- **Proteja o sinal.** Mantenha a base de conhecimento, as filas e os alertas limpos o bastante para confiar neles.
- **Rompa os ciclos de retroalimentação.** Não deixe o conteúdo gerado alimentar a geração sem revisão.
- **Refaça a linha de base quando os dados mudam.** As tendências através de uma mudança de tecnologia pedem cuidado.
- **Prefira menos saídas, e melhores.** Menos pode ser mais quando a atenção é o recurso limitante.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Razão produção-resultado | Volume de produção em relação ao resultado que ela devia produzir | contagem de produção (tickets, artigos, mudanças) / medida de resultado (problemas resolvidos, artigos usados, mudanças retidas), no mesmo período, acompanhada como tendência | razão | Rastreador de trabalho, base de conhecimento, medidas de resultado | Melhoria contínua; medição e relato | Software funcionando acima do volume de documentação | Mensal |
| Parcela de itens úteis | Proporção dos itens amostrados julgados úteis por um revisor qualificado | itens amostrados julgados úteis (corretos, relevantes, não duplicados) / itens amostrados | porcentagem | Revisão de amostra aleatória | Gestão do conhecimento; garantia de qualidade | Definição de pronto para o conteúdo | Mensal |
| Ônus de verificação | Tempo humano gasto conferindo e corrigindo trabalho gerado por unidade de produção | horas de revisão e correção / unidades de produção, acompanhadas como tendência | horas por unidade | Estimativas de tempo, dados da ferramenta de revisão | Gestão financeira de serviços; melhoria contínua | Capacidade de revisão como restrição | Mensal |
| Taxa de redundância de conteúdo | Proporção dos itens de conhecimento que duplicam ou se sobrepõem substancialmente a outro | itens marcados como duplicados ou sobrepostos na revisão ou por correspondência / itens na base de conhecimento | porcentagem | Revisão da base de conhecimento, relatórios de correspondência | Gestão do conhecimento | Fonte única da verdade | Trimestral |
| Parcela revisada do conhecimento gerado | Proporção dos itens de conhecimento gerados por IA que uma pessoa qualificada revisou e aprovou antes da publicação | itens gerados publicados com revisão aprovada / itens gerados publicados | porcentagem | Metadados da base de conhecimento | Gestão do conhecimento; habilitação de mudanças | Revisão antes do release | Mensal |
| Entrada do backlog contra resolução | Crescimento do trabalho que chega em relação ao crescimento do trabalho resolvido, nas filas afetadas pela IA | (mudança nos itens criados) / (mudança nos itens resolvidos), comparada com a linha de base pré-IA | razão | Histórico de tickets e do rastreador | Gestão de incidentes; gestão de requisições de serviço | Equilíbrio do fluxo | Mensal |
| Sinalizações de deriva de métricas | Número de métricas cuja definição ou distribuição mudou de forma perceptível após a introdução da IA, revistas e anotadas | métricas sinalizadas na revisão / métricas no registro | contagem; porcentagem | Revisão do registro de métricas, verificações de distribuição | Medição e relato | Retrospectiva sobre a medição | Trimestral |

Defina "útil" em uma rubrica escrita: correto, relevante para uma necessidade real, não duplicado e atual. O ônus de verificação conta o tempo gasto pelas pessoas, incluindo o tempo de dar o prompt de novo, e exclui o tempo que é só de espera. A parcela revisada é um controle: o conhecimento gerado não revisado é acompanhado à parte e mantido visivelmente rotulado. As sinalizações de deriva de métricas são discussões, e não penalidades: uma sinalização significa que uma pessoa decidiu se ajusta a definição, anota a tendência ou refaz a linha de base. Todas as medidas descrevem processos e conteúdo, e não indivíduos.

## Recomendações

### Pareie o volume com a utilidade

**1. Embuta uma verificação de utilidade em toda métrica de volume.** Para cada medida de volume ou de velocidade no seu painel, nomeie uma medida de utilidade que uma pessoa tenha julgado. Os tickets criados se pareiam com a qualidade da resolução, os artigos escritos com o uso e a exatidão dos artigos, as mudanças integradas com a retenção e o retrabalho (veja o tópico 10.2, Medir o trabalho assistido por IA). Mostre-as juntas e discuta quando divergem.

**2. Amostre e julgue, regularmente.** A cada mês, extraia uma amostra aleatória de itens dos fluxos que a IA toca e peça a uma pessoa qualificada que os julgue contra uma rubrica escrita. Registre a parcela útil e os motivos de os itens falharem. Alterne os revisores e mantenha-os independentes de quem produz. A amostragem é a principal defesa contra a diluição lenta.

**3. Relate os resultados antes das saídas.** Nos relatórios à liderança, comece pelos resultados: problemas resolvidos, usuários satisfeitos, defeitos evitados. Ponha as contagens de produção depois, como contexto. Se o relatório continuaria valioso sem as contagens de produção, está bem orientado.

### Controle a verificação e o ruído

**4. Meça o ônus de verificação.** Estime o tempo gasto conferindo e corrigindo o trabalho gerado e acompanhe-o como tendência por unidade de produção. Se ele sobe quando a produção sobe, o ganho líquido é menor do que sugerem os números de geração, e os revisores podem estar a caminho da sobrecarga. Inclua o ônus no custo por tarefa (veja o tópico 10.1, A IA na medição da gestão de serviços).

**5. Limite o que entra no sistema.** Decida que conteúdo gerado pode ser criado e publicado automaticamente e qual precisa de revisão. Defina limites para o tamanho e o número de mudanças geradas em uma revisão. Facilite dizer não ao volume. Uma fila menor com itens mais claros serve melhor os usuários.

**6. Gerencie a base de conhecimento como um produto.** Rotule o conteúdo gerado, exija revisão antes da publicação, aposente duplicatas e itens obsoletos e acompanhe a redundância e o uso. Uma base de conhecimento é útil na proporção da confiança que os usuários têm nela. Remova os artigos que ninguém usa e por que ninguém consegue responder (veja o tópico 3.6, Métricas de gestão do conhecimento).

**7. Mantenha limpos os fluxos de alertas e de tickets.** Se a IA cria tickets a partir de alertas ou resumos, meça a parcela útil e as duplicatas. Ajuste com firmeza. Trate uma relação sinal-ruído em queda como um incidente por direito próprio, já que prejudica a resposta quando o problema real chega.

### Rompa os ciclos e observe a linha de base

**8. Impeça que o conteúdo gerado se alimente sozinho sem conferência.** Onde um assistente se apoia em uma base de conhecimento, um histórico de tickets ou relatórios passados, garanta que o material gerado nessas fontes tenha sido revisado ou esteja rotulado e ponderado de acordo. Amostre a cadeia: escolha uma resposta e rastreie-a de volta pelas fontes para ver de onde veio. Os ciclos não conferidos amplificam os erros.

**9. Refaça a linha de base quando os dados mudam.** Depois de introduzir a IA, anote os gráficos de tendência e, onde a natureza dos dados mudou, comece uma nova linha de base. Confira as distribuições, e não só os totais: o comprimento dos tickets, a composição das categorias e o tempo para criar podem mudar. As sinalizações de deriva de métricas estimulam essas conversas (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**10. Procure o efeito rebote.** Quando uma tarefa fica mais barata, pergunte se a demanda por ela vai crescer. Decida de antemão como usar o tempo economizado, para que não seja absorvido por mais produção de baixo valor. Uma equipe que produz o dobro de relatórios com o mesmo esforço pode estar fazendo trabalho menos útil.

### Mantenha a atenção humana no circuito

**11. Proteja a atenção dos revisores e dos usuários.** A capacidade de revisão e a atenção são escassas. Reduza o volume de material que as pessoas precisam ler, dê aos revisores cargas realistas e pergunte-lhes o que está ficando mais difícil. Um ritmo sustentável inclui o ritmo de ler e julgar (veja o tópico 9.2, Métricas de satisfação e bem-estar).

**12. Pergunte aos usuários e às partes interessadas se o sinal está claro.** O envolvimento contínuo das pessoas que usam as saídas é o melhor teste. Pergunte se a base de conhecimento está mais fácil ou mais difícil de usar, se os relatórios dizem o que precisam, se a fila parece mais clara. As respostas e os comentários delas devem ser lidos ao lado dos números.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Razão produção-resultado | Escolher uma medida de resultado que sobe com o volume; mudar o período | Resultado fixado no registro; comparar com a satisfação e a taxa de reabertura |
| Parcela de itens úteis | Amostrar itens fáceis; rubrica leniente; revisores influenciados por quem produziu | Amostra aleatória; rubrica escrita; revisores independentes e em rodízio |
| Ônus de verificação | Não registrar o tempo de revisão; deslocar a conferência para as equipes a jusante | Incluir o retrabalho a jusante; perguntar aos revisores sobre a carga |
| Taxa de redundância de conteúdo | Regras de correspondência estreitas que perdem duplicatas; fundir itens distintos | Amostrar duplicatas à mão; registrar as regras de fusão |
| Parcela revisada do conhecimento gerado | Marcar a revisão como completa sem ler; revisar em bloco | Amostrar revisões quanto à substância; tempo por revisão; taxa de erros nos itens publicados |
| Entrada do backlog contra resolução | Encerrar itens automaticamente; dividir itens | Conferir a qualidade da resolução; taxa de reabertura; amostrar itens encerrados |
| Sinalizações de deriva de métricas | Não sinalizar para evitar trabalho; sinalizar tudo | Rever todas as métricas a cada trimestre; exigir uma decisão para cada sinalização |

Uma leitura saudável é uma parcela de itens úteis estável ou crescente à medida que o volume cresce, um ônus de verificação conhecido e suportável, uma base de conhecimento com baixa redundância e conteúdo gerado revisado, filas com sinal claro e uma visão da liderança que começa pelos resultados.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Contar saídas | Fácil, familiar | Infla; premia o volume |
| Medir resultados | Reflete o valor | Mais lenta; mais difícil de atribuir |
| Amostrar e julgar | Detecta a diluição | Exige revisores habilitados; esforço |
| Pontuação automática de qualidade | Escala | A opinião de outro modelo; pode compartilhar os mesmos pontos cegos |
| Revisar tudo que é gerado | Seguro | Remove o benefício; revisores sobrecarregados |
| Revisar uma amostra | Prática | Alguns itens ruins passam |
| Permitir a geração aberta | Rápida, ampla | Ruído; a confiança se corrói |
| Limitar a geração a usos aprovados | Sinal mais limpo | Adoção mais lenta; benefícios perdidos |

A resposta pragmática é medir resultados, amostrar e julgar a utilidade com pessoas, limitar o que entra em acervos compartilhados sem revisão e revisitar as linhas de base. Use a pontuação automática como auxílio, e não como juiz.

## Perguntas para discutir com sua equipe

**1. Qual dos nossos números subiu desde que começamos a usar IA, e o que ele fez pelas pessoas que atendemos?**
Listem os números. Para cada um, olhem o resultado que ele devia refletir. O facilitador deve anotar onde o resultado não se moveu. Pareiem esses números com uma verificação de utilidade.

**2. Quanto do que publicamos ou criamos no último mês ficaríamos felizes em defender linha por linha?**
Tomem uma amostra aleatória e leiam juntos. Marquem o que é útil, raso, errado ou duplicado. Discutam a taxa e as causas. Combinem um padrão para o que entra nos acervos compartilhados.

**3. Onde a conferência está virando o nosso gargalo?**
Perguntem aos revisores. Olhem as filas de revisões, a profundidade da revisão e o esforço que carregam agora. Combinem um limite para o tamanho ou o número de itens gerados por revisão e um modo de medir o ônus.

**4. Que conteúdo gerado está alimentando outro conteúdo gerado aqui?**
Rastreiem uma resposta típica de volta às suas fontes. Onde começou a cadeia? Discutam onde uma pessoa deve conferir a cadeia ou rotular o conteúdo.

**5. O que um usuário diria sobre a nossa base de conhecimento agora, comparada com um ano atrás?**
Leiam os comentários recentes e olhem os dados de uso. Perguntem se está mais fácil ou mais difícil achar uma resposta confiável. Combinem uma limpeza e uma regra para o conteúdo novo.

**6. Quais das nossas tendências devemos reiniciar com uma nova linha de base?**
Listem as métricas que dependem do volume ou de como os itens são criados. Procurem mudanças de forma desde que a IA chegou. Anotem as tendências e decidam quais precisam de uma nova linha de base.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega geram boa parte do volume e carregam a manutenção. Devem favorecer mudanças menores e mais claras, manter o material gerado revisado e rotulado e observar a retenção e o retrabalho. Devem recusar métricas baseadas em volume gerado e pedir medidas de resultado.

### Equipes de serviço e operações

As equipes de operações vivem nas filas, nos alertas e na base de conhecimento que a diluição danifica. Devem ajustar os tickets e alertas criados por IA para manter forte o sinal, revisar o conhecimento gerado antes de ser publicado e relatar quando o fluxo vira ruído. Estão em melhor posição para julgar a utilidade.

### Liderança e governança

Os líderes recebem os painéis que a inflação distorce. Devem pedir primeiro os resultados, exigir verificações de utilidade ao lado do volume, financiar a capacidade de revisão e aceitar que algumas medidas precisam de nova linha de base. A governança deve conferir se o conteúdo gerado em acervos compartilhados é revisado e rotulado.

### Clientes e usuários

Os usuários arcam com o custo da diluição quando as respostas estão erradas, os artigos se contradizem e as respostas são longas e vazias. Querem ajuda curta, correta e relevante. A reação deles à qualidade do que recebem é um teste direto de se o sinal sobreviveu.

## Na prática: um exemplo de gestão de serviços

O grupo de TI de uma farmacêutica global habilita um assistente de IA para redigir artigos de conhecimento, resumir tickets e preparar relatórios semanais de status. Em um trimestre, o painel parece excelente. Os números abaixo são ilustrativos.

Os artigos de conhecimento criados sobem de 140 para 610 por mês. Os tickets trazem resumos detalhados escritos por IA. Os relatórios semanais chegam a doze páginas. A gerente de qualidade de serviços nota que a satisfação com o autoatendimento caiu e que a central de serviços relata mais contatos do tipo "o artigo não ajudou". Ela amostra 100 dos novos artigos com dois atendentes experientes. Só 54 são julgados úteis: 23 duplicam artigos existentes, 15 contêm passos desatualizados ou incorretos e 8 são vagos demais para se agir. Dos novos artigos, 71% foram publicados sem revisão humana. A base de conhecimento agora tem cerca de 3.200 artigos, com uma taxa de redundância de conteúdo que ela estima em 28% contra 9% um ano antes. Os atendentes relatam que achar uma resposta confiável leva mais tempo. O ônus de verificação dos editores de artigos da central de serviços cresceu para cerca de 40 horas por semana, contra 12. Os resumos de tickets escritos por IA fazem as respostas geradas por IA posteriores se apoiarem em um texto que ninguém escreveu, e em um rastreio de cinco respostas de volta pelas fontes, duas se apoiaram em um resumo que havia descrito mal o problema. Os relatórios semanais de status, quando lidos, dizem pouco que não estivesse no anterior, e as partes interessadas pararam de ler além da página dois.

Ela propõe quatro mudanças, que a equipe de liderança de serviços e os responsáveis pelo conhecimento adotam. Os artigos gerados precisam de revisão por um editor nomeado antes da publicação e são rotulados até a aprovação. Um limite de um artigo gerado por agrupamento de tópicos evita duplicatas, e uma varredura funde ou aposenta os itens redundantes. Os modelos de relatório são cortados para duas páginas que começam pelos resultados, e a IA é usada para redigir apenas as seções que uma pessoa depois edita. Os resumos de tickets são marcados como gerados, e uma amostra é conferida a cada mês. O painel relata a parcela de itens úteis, a taxa de redundância, a parcela revisada e o ônus de verificação ao lado das contagens de artigos.

Após dois trimestres, os artigos criados por mês caem para 190, a parcela de itens úteis sobe para 91%, a taxa de redundância cai para 11%, a parcela revisada é de 100% e o ônus de verificação se estabiliza em cerca de 16 horas por semana. A satisfação com o autoatendimento se recupera, e os contatos "o artigo não ajudou" caem. As partes interessadas leem o relatório de duas páginas. Um diretor pede uma meta de 1.000 artigos por mês para mostrar o valor do programa de IA. A gerente de qualidade de serviços explica que a contagem era o problema e propõe acompanhar a utilidade e o uso. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Uma revisão regular de se cada contagem ainda reflete utilidade ajuda uma equipe a perceber cedo a inflação, e as partes interessadas podem dizer o que realmente usam. O cuidado é que apertar uma contagem depois de notada a inflação recomeça o ciclo.

### IA

A IA torna baratos o volume e a velocidade; assim toda contagem de volume ou de velocidade infla. Pareie cada uma com a parcela de itens que uma pessoa julgou úteis e o ônus de verificação e confira se há conteúdo redundante. O cuidado é que a IA usada para conferir a saída de IA pode compartilhar os mesmos pontos cegos; por isso mantenha a amostragem humana.

### Automação

Automatize a detecção de duplicatas, quase duplicatas e conteúdo obsoleto e meça a detecção pelos falsos positivos. O cuidado é que a limpeza automática pode remover itens raros, mas importantes.

### Análise

Relate a razão produção-resultado e a parcela de itens úteis com tamanhos de amostra. A decisão informada é quais contagens deixar de relatar. O cuidado é que a razão depende de como os resultados são definidos; por isso declare-o.

## Olhar setorial

**Startup.** A geração é barata e o tempo de revisão é escasso. Mantenha curtas a documentação e os tickets, revise o que os clientes lerão e apague à vontade. Um conjunto pequeno e correto de artigos vale mais que um grande de duvidosos.

**Pequena empresa.** Há pouca capacidade para revisar; por isso limite o que a ferramenta produz. Prefira um punhado de guias e modelos verificados. Cuidado com publicar material gerado em páginas públicas sem conferi-lo.

**Grande empresa.** A escala amplifica o ruído. Estabeleça governança de conteúdo com responsáveis, rótulos e regras de revisão, meça a utilidade na base de conhecimento e rode limpezas periódicas. Compartilhe rubricas entre as equipes e compare tendências, e não equipes.

**Governo e setor público.** O conteúdo público deve ser exato e acessível, e os erros podem causar dano. Exija a revisão da informação pública gerada, guarde registros de como foi produzida e aplique padrões de linguagem simples e de acessibilidade. Podem se aplicar regras de retenção e de gestão de documentos ao material gerado (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos de se proteger contra a inflação são modestos: tempo de revisão para a amostragem, esforço editorial para o conteúdo gerado, ferramenta para detecção de duplicatas e o esforço de refazer as linhas de base das tendências. Os custos de não o fazer são maiores, mas difusos: usuários que deixam de confiar no autoatendimento, revisores que se esgotam, decisões tomadas com base em números inflados e projetos de limpeza.

Construa o argumento a partir dos seus próprios dados: a parcela de itens úteis e o ônus de verificação ao longo do tempo, o volume de contatos causado por conteúdo inútil e o custo de uma limpeza da base de conhecimento. Evite usar cifras publicadas sobre a qualidade do conteúdo gerado, que variam muito por ferramenta, tarefa e método. Inclua o custo evitado do dano à reputação por publicar informação errada (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Celebrar o volume.** Premia o ruído. Celebre resultados e utilidade.
- **A velocidade do primeiro rascunho como a história de produtividade.** A economia pode sumir na conferência. Meça o tempo até um resultado verificado.
- **Publicar conteúdo gerado sem revisão.** A confiança se corrói em silêncio. Revise e rotule.
- **Deixar o conteúdo gerado alimentar a geração.** Os erros se compõem. Confira a cadeia.
- **Linhas de base inalteradas.** As tendências enganam depois de uma mudança de tecnologia. Anote e refaça a linha de base.
- **Sobrecarregar os revisores.** A revisão vira carimbo. Limite o volume e meça o ônus.
- **Usar um juiz de IA para tudo.** Ele pode compartilhar os pontos cegos de quem produz. Mantenha as pessoas no circuito.
- **Ignorar o rebote.** O trabalho mais barato atrai mais trabalho. Decida para que serve o tempo economizado.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Pareamento e amostragem | Volume relatado sozinho | Impressões informais de qualidade | Toda métrica de volume pareada com uma verificação de utilidade amostrada | Utilidade, ônus e redundância geridos, com metas para a revisão e não para o volume | Visão da qualidade do sinal em toda a organização; rubricas compartilhadas com parceiros |
| Conteúdo e ciclos | Conteúdo gerado misturado | Alguma rotulagem | Conteúdo gerado rotulado e revisado antes da publicação; cadeias amostradas | Ciclos monitorados; acervos curados; duplicatas aposentadas em um cronograma | Proveniência acompanhada de ponta a ponta entre ferramentas e fornecedores |
| Linhas de base e atenção | Tendências lidas através da mudança | Anotações em alguns gráficos | Linhas de base refeitas onde os dados mudaram; rebote considerado | Sinalizações de deriva revistas a cada trimestre; carga dos revisores gerida | O projeto das métricas se adapta continuamente à mudança de tecnologia com as partes interessadas |

## Lista de verificação

- [ ] Cada métrica de volume ou de velocidade tem uma companheira de utilidade julgada por uma pessoa.
- [ ] Uma amostra aleatória de itens tocados por IA é revista mensalmente contra uma rubrica escrita.
- [ ] O ônus de verificação é estimado e acompanhado como tendência.
- [ ] O conhecimento gerado é rotulado e revisado antes da publicação.
- [ ] A redundância na base de conhecimento é medida e reduzida.
- [ ] Os fluxos de alertas e de tickets são monitorados quanto à parcela útil e às duplicatas.
- [ ] As cadeias das saídas geradas de volta às fontes são amostradas.
- [ ] As tendências através da introdução da IA são anotadas ou têm a linha de base refeita.
- [ ] Os relatórios à liderança começam pelos resultados.
- [ ] Usuários e partes interessadas são consultados sobre se o sinal está mais claro ou mais ruidoso.

## Prompts de IA

**Crie uma rubrica de utilidade.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Analise uma queda do sinal.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Planeje a limpeza de uma base de conhecimento.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Rastreie uma cadeia de conteúdo gerado.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a companheira de utilidade de uma métrica de volume ou de velocidade.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica afetada por IA pareia volume com utilidade amostrada e traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Quando a IA torna barata a produção, as métricas de volume e de velocidade inflam e a parcela útil pode cair.
- Pareie toda medida de volume ou de velocidade com uma verificação de utilidade amostrada e julgada por pessoas.
- Meça o tempo até um resultado verificado e o ônus de verificação, porque a conferência vira o gargalo.
- Rotule e revise o conteúdo gerado antes de ele entrar em acervos compartilhados e impeça que os ciclos se alimentem sozinhos sem conferência.
- Refaça a linha de base das tendências após uma mudança de tecnologia e comece os relatórios pelos resultados.
- Decida de antemão para que serve o tempo economizado e proteja a atenção dos revisores e dos usuários.

## Referências e leituras complementares

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Sobrecarga de informação](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Relação sinal-ruído](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Fadiga de alertas](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [Lixo de IA](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Lei de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Paradoxo de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Colapso de modelos](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Deriva de conceito](https://en.wikipedia.org/wiki/Concept_drift).
