# Métricas de pull requests e revisão de código

**A revisão é onde o trabalho concluído mais costuma esperar; por isso meça quanto tempo uma mudança fica parada antes de alguém olhá-la, quão grande ela é e com que frequência volta, e pareie cada número de velocidade com um sinal de qualidade para que mais rápido nunca signifique descuidado.**

## Visão geral e motivação

Um [pull request](https://en.wikipedia.org/wiki/Pull_request) é uma proposta de integrar um conjunto de mudanças de uma branch de um repositório de [controle de versão](https://en.wikipedia.org/wiki/Version_control) em outra, junto com a conversa sobre se deve ser integrado. Em muitas equipes, é o portão formal entre "o autor acha que funciona" e "a equipe concorda que pode ir ao ar". A conversa é uma forma de [revisão de código](https://en.wikipedia.org/wiki/Code_review): uma pessoa que não é o autor lê a mudança, faz perguntas e a aprova ou pede revisões. Algumas plataformas chamam a mesma coisa de merge request; este tópico usa "pull request" para ambos.

A revisão merece ser medida por uma razão simples. Na visão de fluxo da entrega, um item de trabalho passa a maior parte da vida esperando, e a revisão é uma das esperas que está inteiramente sob o controle da equipe. Um gargalo de plataforma compartilhada ou uma dependência externa exige que outras pessoas mudem. Um pull request que espera dois dias por uma primeira olhada exige apenas que mudem os hábitos da própria equipe. As medidas de fluxo deste livro (veja o tópico 2.1, Medidas de fluxo, e o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) dão o vocabulário geral. Este tópico dá um zoom em uma etapa do ciclo e lhe dá instrumentos próprios.

As visões ágil e ITIL se encontram aqui de forma útil. Do ponto de vista ágil, a revisão é um ciclo de feedback e um mecanismo de ensino. Ela espalha o conhecimento da base de código, pega defeitos cedo e faz valer os acordos de trabalho e a Definição de Pronto da equipe. Do ponto de vista do ITIL, a mesma atividade sustenta várias práticas. No ITIL 4, a prática de desenvolvimento e gestão de software cobre como o software é construído e verificado, a habilitação de mudanças cobre como as mudanças são avaliadas e autorizadas, e a gestão de implantação cobre como as mudanças chegam ao ambiente ao vivo. Um pull request revisado por pares é, para muitas organizações, a evidência de que uma mudança padrão foi avaliada antes do release. Tratar a revisão como uma atividade medida e melhorável serve às duas visões: a equipe ágil quer feedback mais rápido, e a prática do ITIL quer garantia confiável de que as mudanças foram verificadas.

O risco a manter em vista o tempo todo é que a velocidade e a qualidade da revisão são fáceis de separar. Uma equipe pode cortar pela metade o tempo até a primeira revisão aprovando tudo à primeira vista, e o painel mostrará um triunfo enquanto a base de código piora. A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica com força incomum a esta família de métricas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas), porque os números são baratos de coletar, visíveis para todos e trivialmente fáceis de mover sem mudar aquilo que deveriam representar. Cada recomendação abaixo foi escrita com isso em mente.

O **autor** abriu o pull request e um **revisor** o avalia. Uma **rodada de revisão** é um ciclo de "o autor envia, o revisor responde". O **retrabalho** é a mudança feita após um comentário de revisão, ou após o merge, para corrigir algo que a primeira versão errou. A **integração contínua (CI)** é a prática de integrar o trabalho em uma linha compartilhada com frequência e verificar cada integração automaticamente; veja [integração contínua](https://en.wikipedia.org/wiki/Continuous_integration).

Todas as métricas deste tópico descrevem equipes e repositórios. Elas nunca classificam revisores ou autores. As contagens de revisão no nível individual são fáceis de extrair e tentadoras de usar, e fazê-lo transforma uma prática de colaboração em uma competição (veja o tópico 9.1, Saúde da equipe e experiência do desenvolvedor).

## Princípios-chave

- **A espera domina a revisão.** Na maioria das equipes, a maior parte do tempo de revisão é o pull request parado sem ser lido, não a discussão depois que um revisor começa. Meça a espera antes de medir a conversa.
- **Mudanças pequenas são revisadas mais rápido e melhor.** O tamanho é uma das poucas alavancas que melhoram ao mesmo tempo a velocidade e a profundidade, porque um revisor consegue guardar uma mudança pequena na cabeça.
- **Velocidade sem escrutínio não é uma melhoria.** Toda métrica de velocidade deste tópico precisa de uma contrapartida de qualidade, e o par é lido junto.
- **A revisão é uma capacidade da equipe, não pessoal.** A carga deve se espalhar pela equipe. Uma métrica que mostra concentração aponta para um problema de projeto da equipe, nunca para uma pessoa a ser elogiada ou culpada.
- **Distribuições valem mais que médias.** Os tempos de revisão têm uma cauda longa de pull requests emperrados; por isso relate a mediana e um percentil alto (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- **Defina o relógio e depois deixe-o em paz.** Declare quando o relógio começa e para, quais eventos o pausam e qual atividade automatizada é excluída, e escreva isso onde os dados vivem (veja o tópico 1.5, Fontes de dados e instrumentação).
- **As métricas de revisão servem à equipe dona do trabalho.** São um insumo para a retrospectiva da própria equipe, não um placar para outra pessoa.

## Definições de métricas

Os relógios abaixo supõem que a plataforma de controle de versão registra os horários dos eventos de abertura, pedidos de revisão, comentários, aprovações, envios e merges. Rascunhos, pull requests abertos por robôs e pull requests encerrados sem merge são excluídos, salvo se uma linha disser o contrário. "Horas úteis" significa o horário de trabalho declarado da equipe, de modo que um pull request aberto na noite de sexta-feira não acumule um fim de semana de espera.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo até a primeira revisão | Espera entre um pull request ficar pronto para revisão e a primeira resposta humana substantiva | O relógio começa quando o pull request sai do status de rascunho ou é aberto já pronto e para no primeiro comentário de revisão, pedido de mudança ou aprovação de alguém que não seja o autor; comentários de robôs e do autor e meras mudanças de etiqueta são excluídos. Relate a mediana e o 85º percentil em horas úteis | horas úteis | Histórico de eventos da plataforma de controle de versão | Desenvolvimento e gestão de software; habilitação de mudanças | Acordo de trabalho sobre a capacidade de resposta na revisão; fluxo de trabalho em andamento | Semanal |
| Tempo de ciclo da revisão | Tempo total de pronto para revisão até o merge | O relógio começa quando o pull request está pronto para revisão e para no merge; pull requests encerrados sem merge são excluídos e contados à parte. Relate a mediana e o 85º percentil em horas úteis | horas úteis | Histórico de eventos da plataforma de controle de versão | Gestão de implantação; habilitação de mudanças | Tempo de ciclo da etapa de revisão no quadro da equipe | Semanal |
| Tamanho do pull request | Quantidade de mudança em um pull request | Linhas acrescentadas mais linhas removidas, excluindo arquivos gerados, arquivos de trava, código de terceiros incluído e meras renomeações, conforme listado nas regras de exclusão do repositório. Relate a mediana e o 85º percentil por pull request integrado | linhas alteradas | Estatísticas de diff da plataforma de controle de versão | Desenvolvimento e gestão de software | Tamanho de lote pequeno; fatiamento de histórias | Semanal |
| Rodadas de revisão | Número de ciclos de envio do autor e resposta do revisor antes do merge | Contagem de ciclos distintos de "mudanças solicitadas" ou comentário-e-depois-envio por pull request integrado; o primeiro envio é a rodada zero e falhas de verificações automáticas são excluídas. Relate a mediana e o 85º percentil | contagem | Eventos de revisão e de envio da plataforma de controle de versão | Melhoria contínua; desenvolvimento e gestão de software | Sinal de retrabalho na etapa de revisão; Definição de Pronto | Semanal |
| Concentração da carga de revisão | Quão desigualmente o trabalho de revisão se espalha por uma equipe | Proporção das revisões concluídas da equipe tratadas pelos dois revisores mais ocupados em 4 semanas móveis; revisões do próprio pull request e revisões de robôs são excluídas. Relatada para a equipe, nunca por nome | porcentagem | Eventos de revisão da plataforma de controle de versão, agregados por equipe | Melhoria contínua; gestão do conhecimento | Propriedade compartilhada do código; propriedade coletiva | Mensal |
| Contagem de pull requests parados | Pull requests abertos por mais tempo que o limite acordado da equipe | Pull requests ainda abertos e fora de rascunho cuja idade desde o estado pronto para revisão excede o limite da equipe, contados no momento do instantâneo; rascunhos são excluídos | contagem | Lista de pull requests abertos da plataforma de controle de versão | Habilitação de mudanças; melhoria contínua | Idade do item de trabalho; limite de WIP | Semanal |
| Taxa de correções pós-merge | Proporção dos pull requests integrados seguidos de uma mudança corretiva logo depois | Pull requests integrados seguidos em até 14 dias por uma correção, reversão ou hotfix ligados à mesma mudança / pull requests integrados no período; trabalho de acompanhamento planejado e etiquetado como tal é excluído | porcentagem | Histórico do controle de versão, issues vinculadas e registros de incidentes ou de mudanças | Habilitação de mudanças; gestão de incidentes | Qualidade embutida; Definição de Pronto | Mensal |

O tempo até a primeira revisão é a maior alavanca e a métrica com que a maioria das equipes deveria começar. O tempo de ciclo da revisão é sua medida de resultado e é um componente dos lead times mais longos discutidos no tópico 2.2. A janela de 14 dias e o limite de parada são exemplos; cada equipe escolhe valores que combinem com seu ritmo de releases e os escreve. Onde os números alimentam o quadro mais amplo da entrega, a família DORA (veja o tópico 2.8, Métricas DORA) e as medidas de falha de mudanças (veja o tópico 4.4, Falhas de mudança e retrabalho) assumem.

## Recomendações

### Meça a espera antes do trabalho

**1. Comece pelo tempo até a primeira revisão.** Costuma ser a maior contribuição ao tempo de revisão e a mais barata de melhorar. Instrumente-o a partir do histórico de eventos da plataforma para que ninguém precise digitar nada. Relate a mediana e um percentil alto, porque uma mediana de três horas com um 95º percentil de quatro dias significa que algumas mudanças estão sendo esquecidas.

**2. Exclua robôs e rascunhos do relógio e diga isso.** Verificações automáticas, robôs de atualização de dependências e ferramentas de formatação criam comentários em segundos, e contá-los faz a espera parecer excelente. Comece o relógio quando o autor marca a mudança como pronta, não quando a branch é enviada pela primeira vez. Publique essas regras ao lado do gráfico.

**3. Use horas úteis e escreva o calendário da equipe.** Um pull request aberto na tarde de sexta-feira não deve carregar um fim de semana de espera. Uma equipe espalhada por fusos horários precisa de uma regra sobre cujo horário conta, e muitas vezes a resposta honesta é que o custo de transferência entre fusos é aquilo que vale ver. Declare a escolha e mantenha-a estável.

### Molde o trabalho para que seja revisável

**4. Mantenha os pull requests pequenos e trate o tamanho como um hábito da equipe.** Acompanhe a mediana e o 85º percentil do tamanho e olhe os grandes como um conjunto, e não como falhas individuais. As equipes costumam descobrir que as mudanças grandes vêm de poucas causas: trabalho não fatiado com finura suficiente, mistura de refatoração com novo comportamento ou demora demais para integrar. Fatie o trabalho de modo que cada pull request faça uma coisa, o que também combina com o princípio de lote pequeno por trás do [desenvolvimento baseado em tronco](https://en.wikipedia.org/wiki/Trunk-based_development) e da implantação frequente.

**5. Não defina um teto rígido de tamanho como meta.** Um limite como "no máximo 400 linhas" convida a dividir uma mudança em pedaços artificiais que, individualmente, são ilegíveis ou quebram o build quando integrados sozinhos. Use o tamanho como ponto de partida de conversa na retrospectiva e dê à equipe técnicas de fatiamento, como feature toggles, refatoração preparatória em seu próprio pull request e merge atrás de um sinalizador.

**6. Torne explícito o pedido de revisão.** Um pull request que não nomeia nenhum revisor espera um voluntário, e voluntários são escassos. Combine no acordo de trabalho a quem se pede, como a equipe é avisada e qual é a expectativa de resposta. Uma escala compartilhada de revisão, ou um horário diário de revisão, costuma reduzir a espera mais do que qualquer configuração de ferramenta.

### Espalhe a carga e o conhecimento

**7. Observe a concentração da carga como um risco da equipe.** Se duas pessoas tratam a maioria das revisões, a disponibilidade delas limita o fluxo da equipe, e a ausência delas o interrompe. Reveja a medida de concentração todo mês e aja pelo projeto da equipe: alterne o revisor padrão, pareie membros mais novos com experientes e escreva as áreas do código que só uma pessoa consegue revisar. Não publique um placar por pessoa.

**8. Use a revisão para compartilhar conhecimento e proteja esse propósito.** O valor de longo prazo da revisão inclui aprendizado, propriedade compartilhada e estilo consistente, além da detecção de defeitos. A [programação em par](https://en.wikipedia.org/wiki/Pair_programming) e a programação em grupo movem parte dessa troca para mais cedo no processo; onde uma dupla já trabalhou em uma mudança, uma revisão mais leve é razoável. Faça da escolha uma decisão da equipe, escrita no acordo de trabalho, de modo que "feito em par, portanto revisado de forma leve" seja uma regra visível e não uma desculpa.

### Controle a própria revisão

**9. Deixe a automação cuidar do que a automação faz bem.** Formatação, linting e verificações básicas pertencem ao pipeline, para que a atenção humana vá ao projeto, à correção e ao risco. A [análise estática de programas](https://en.wikipedia.org/wiki/Static_program_analysis) e os testes automatizados reduzem o número de rodadas de revisão triviais. As rodadas restantes dizem então mais sobre a conversa de projeto e menos sobre divergências de estilo.

**10. Leia as rodadas de revisão como um sinal sobre clareza, não como uma contagem de falhas.** Muitas rodadas podem significar que o requisito era obscuro, que o autor não tinha contexto, que o revisor pediu mudanças de gosto ou que a mudança era grande. Zero rodadas em todo pull request pode significar um trabalho excelente ou pode significar que ninguém olhou. Amostre alguns pull requests com rodadas muito numerosas ou muito escassas e leia-os juntos como equipe.

### Pareie velocidade com qualidade e mantenha o tempo visível

**11. Mostre sempre uma contrapartida de qualidade ao lado da velocidade de revisão.** A taxa de correções pós-merge, os incidentes ligados a mudanças recentes e a proporção de defeitos encontrados após o release são os parceiros naturais (veja o tópico 4.4, Falhas de mudança e retrabalho). Se o tempo de revisão melhora enquanto a taxa de correções piora, a equipe trocou garantia por velocidade, e a solução é uma conversa, não uma meta. Mostre os dois no mesmo gráfico.

**12. Ligue a revisão ao quadro de fluxo e ao trabalho não planejado.** Uma revisão mais rápida só ajuda se a etapa seguinte não se limita a enfileirar o trabalho (veja o tópico 2.3, Trabalho em andamento e teoria das filas). Pedidos urgentes de revisão que interrompem o trabalho planejado têm um custo próprio (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tempo até a primeira revisão | Postar um rápido "parece bom" ou um emoji como primeira resposta; atribuir um robô ou um revisor amigável; marcar um pull request como pronto só depois de alguém ter combinado de olhá-lo | Taxa de correções pós-merge; amostra de aprovações sem comentários; exigir no acordo de trabalho que as primeiras respostas sejam substantivas |
| Tempo de ciclo da revisão | Integrar sem esperar a revisão; dividir uma mudança em pedaços minúsculos para passar mais rápido; fechar e reabrir um pull request para reiniciar o relógio | Contar pull requests fechados e reabertos; rodadas de revisão; taxa de correções pós-merge; regras de branch protegida que exijam aprovação |
| Tamanho do pull request | Excluir arquivos da contagem; dividir uma única mudança em pedaços que não podem ser entendidos separadamente; inflar o tamanho com código gerado | Revisar as regras de exclusão a cada trimestre; conferir que os pedaços divididos compilam e passam nos testes sozinhos; ler uma amostra dos menores e dos maiores |
| Rodadas de revisão | Aprovar na primeira passagem para manter a contagem baixa; mover a discussão para o chat para que não deixe rastro; autores que enviam muitos ajustes num único commit para esconder rodadas | Taxa de correções pós-merge; amostra de pull requests com zero rodadas; manter a discussão no pull request |
| Concentração da carga de revisão | Dividir revisões em muitas aprovações pequenas para espalhar a contagem; atribuir revisões a quem tem tempo livre mas não tem conhecimento | Conferir o conhecimento do revisor em áreas de risco; observar a taxa de correções pós-merge por área; manter a métrica no nível da equipe |
| Contagem de pull requests parados | Fechar pull requests parados sem integrá-los; convertê-los em rascunhos para escondê-los; elevar o limite de parada | Contagem de pull requests fechados sem merge; contagem de rascunhos de longa duração; rever o limite com a equipe a cada trimestre |
| Taxa de correções pós-merge | Registrar correções sob um novo item de trabalho sem ligação; etiquetar o trabalho corretivo como acompanhamento planejado; evitar a métrica atrasando a correção para além da janela | Comparar com dados de incidentes e de falhas de mudança; amostra dos itens de acompanhamento; auditoria das etiquetas usadas |

Uma leitura saudável é calma. O tempo até a primeira revisão é curto e a cauda também é curta, de modo que nenhum pull request espera por dias. O tamanho fica numa faixa que a equipe acha fácil de ler, com algumas mudanças grandes que a equipe sabe explicar. As rodadas de revisão são poucas mas não zero, a concentração da carga é moderada, a contagem de parados é pequena e a taxa de correções pós-merge é estável. Quando um número melhora bruscamente, alguém deve conferir que a barreira de proteção pareada não se moveu na direção errada.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Revisão rápida com expectativas estritas de resposta | Ciclos curtos de feedback; menos perda de contexto para o autor; menos trabalho em andamento | Pressão para aprovar depressa; interrompe o trabalho focado |
| Revisão lenta e minuciosa | Leitura cuidadosa do projeto e do risco; transferência de conhecimento mais forte | Tempo de ciclo mais longo; acumulam-se lotes maiores; os autores seguem em frente e perdem o contexto |
| Pull requests pequenos | Mais fáceis de ler e de reverter; fluxo mais suave | Mais custo fixo por mudança; podem fragmentar uma funcionalidade em passos confusos |
| Pull requests grandes | Menos transferências; funcionalidade inteira visível de uma vez | As revisões ficam superficiais; mais difíceis de reverter; esperas longas |
| Aprovação obrigatória de um responsável nomeado | Responsabilidade clara em áreas de risco; apoia a autorização de mudanças | Cria um gargalo e um ponto único de falha |
| Verificações automáticas antes da revisão humana | Libera pessoas para projeto e risco; consistente | Pode criar falsa confiança; exige manutenção |

Nenhuma política isolada vence. O objetivo é encurtar a espera preservando o escrutínio, e o caminho usual são mudanças menores, expectativas claras de revisão, forte automação para verificações rotineiras e um acordo da equipe sobre como é uma boa revisão. As métricas de revisão são mais úteis como perguntas para uma retrospectiva e menos úteis como metas.

## Perguntas para discutir com sua equipe

**1. Onde um pull request passa a maior parte da vida, esperando ou sendo revisado?**
Peça à equipe que adivinhe antes de olhar os dados e depois mostre a divisão entre o tempo até a primeira revisão e o tempo restante até o merge. A maioria dos grupos se surpreende com quanto é espera. O facilitador deve anotar quais palpites estavam errados e perguntar o que cada palpite errado diz sobre como a equipe vivencia a revisão. Termine com uma mudança que ataque a maior espera.

**2. Como é uma boa revisão nesta equipe, e como um observador externo perceberia?**
Liste os comportamentos que a equipe valoriza, como perguntar sobre o projeto, conferir testes e explicar a razão de um pedido. Depois pergunte quais deles deixam um rastro visível no pull request. Discuta como distinguir uma primeira resposta substantiva de uma simbólica sem policiar indivíduos. Combinem uma curta descrição escrita para pôr no acordo de trabalho.

**3. Quão grande é grande demais para nós, e o que fazemos quando o trabalho realmente é grande?**
Olhe a distribuição de tamanhos e escolha alguns dos maiores pull requests. Pergunte por que cada um foi grande e se poderia ter sido fatiado. Discuta técnicas como feature toggles, refatoração preparatória e merge atrás de um sinalizador. O facilitador deve resistir a definir um limite numérico e combinar, em vez disso, um hábito que a equipe testará por um mês.

**4. Quem revisa o nosso código mais arriscado, e o que acontece quando essa pessoa está ausente?**
Mapeie as áreas do código para as pessoas que conseguem revisá-las bem. Olhe a concentração da carga e as áreas com um único revisor qualificado. Discuta como formar um segundo revisor em cada uma, por pareamento ou rodízio de atribuições. Mantenha a conversa sobre a resiliência da equipe, e não sobre a classificação da carga de alguém.

**5. Se a nossa velocidade de revisão dobrasse amanhã, o que gostaríamos que fosse verdade sobre a qualidade?**
Peça ao grupo que nomeie os sinais de qualidade que observaria, como correções pós-merge, incidentes ligados a mudanças recentes ou o número de reversões. Confira se esses sinais estão hoje visíveis ao lado do gráfico de velocidade. Discuta qual seria um sinal precoce de que a velocidade foi comprada à custa do escrutínio. Combinem qual contrapartida mostrar no painel.

**6. Quais números de revisão seríamos tentados a melhorar de um modo que não ajuda?**
Percorra cada métrica e pergunte como uma pessoa sob pressão poderia fazê-la parecer melhor sem melhorar nada. Compare as respostas com a tabela de manipulação acima e acrescente as ideias da própria equipe. O objetivo é nomear o risco antes que aconteça. Combinem qual barreira de proteção será revista junto com cada métrica.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas do processo de revisão e devem ser donas das suas métricas. Elas ganham mais encurtando a espera com acordos simples: um horário diário de revisão, um processo claro de pedido e mudanças pequenas. Devem usar os números nas retrospectivas, manter baixo o trabalho em andamento e resistir à tentação de otimizar um único gráfico. A revisão também é onde os membros mais novos aprendem a base de código; por isso proteja esse propósito.

### Equipes de serviço e operações

As equipes de operações encontram a revisão onde código de infraestrutura, configuração e automação de runbooks são alterados por pull requests. Para elas, a revisão costuma fazer parte de como uma mudança padrão é aprovada e evidenciada (veja o tópico 4.3, Métricas de habilitação de mudanças). Devem combinar quais mudanças precisam de revisão por uma segunda pessoa, com que rapidez as correções urgentes são revistas e como as mudanças emergenciais são revistas depois, para que uma correção apressada ainda seja examinada. Uma revisão superficial de uma mudança arriscada aparece depois como um incidente.

### Liderança e governança

Os líderes devem tratar as métricas de revisão como sinais sobre a saúde e o fluxo da equipe, não como notas de produtividade. Devem pedir a medida de qualidade pareada sempre que um número de velocidade for relatado, apoiar o tempo que uma revisão cuidadosa leva e evitar comparar equipes pelo tempo bruto de revisão, já que repositórios e riscos diferem. Os órgãos de governança podem usar a evidência de revisão como parte da garantia de mudanças, desde que aceitem que um processo de revisão documentado e amostrado é mais forte que uma contagem de aprovações.

### Clientes e usuários

Os clientes não veem pull requests, mas sentem os resultados: com que rapidez chega uma correção e com que frequência um release traz um novo defeito. Esperas curtas de revisão ajudam as correções urgentes a chegar a eles mais cedo, e uma revisão cuidadosa ajuda a manter as falhas longe deles. Onde um serviço tem um histórico público de releases ou de defeitos, os clientes se beneficiam de a equipe mostrar menos reversões e menos correções repetidas ao longo do tempo.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional mantém um serviço web de agendamento de consultas, construído por uma equipe de produto de sete pessoas e operado com um pequeno grupo de engenharia de confiabilidade. Todos os números deste exemplo são ilustrativos.

Numa revisão trimestral, a equipe descobre que seu tempo de ciclo de revisão tem mediana de 26 horas úteis e 85º percentil de 71 horas úteis (ilustrativo). Dividir o ciclo mostra que a mediana do tempo até a primeira revisão é de 19 horas úteis; por isso a maior parte do atraso é espera. O tamanho do pull request tem mediana de 180 linhas e 85º percentil de 900 linhas (ilustrativo), e os dois revisores mais ocupados tratam 68% das revisões (ilustrativo). A taxa de correções pós-merge está em 9% (ilustrativo).

A equipe faz três acordos. Define um horário diário de revisão de 30 minutos, escreve no acordo de trabalho a expectativa de uma primeira resposta em um dia útil e alterna toda semana um turno de "revisão primeiro". Também adota um hábito de fatiamento para trabalhos grandes, usando feature toggles para que funcionalidades parciais possam ser integradas com segurança. Não define um limite de tamanho nem uma meta para o tempo até a primeira revisão.

Após dois meses, a mediana do tempo até a primeira revisão cai para 6 horas úteis e o 85º percentil do tempo de ciclo da revisão cai para 34 horas úteis (ilustrativo). A concentração da carga cai para 52% (ilustrativo), e a taxa de correções pós-merge se mantém em 9%.

A equipe então pega um risco de manipulação. Uma amostra de aprovações mostra que cerca de um terço das primeiras respostas chega em minutos e diz apenas "LGTM" em mudanças que tocam a lógica dos lembretes de consulta. O ganho de velocidade foi em parte real e em parte um carimbo de borracha. A taxa de correções pós-merge ainda não se movera porque o código afetado roda em ciclo mensal. A equipe muda o acordo de trabalho para que uma primeira resposta inclua uma pergunta, um comentário sobre uma parte específica da mudança ou uma nota explícita do que foi verificado, e acrescenta ao gráfico de revisão a proporção amostrada de aprovações sem comentários. Também combinam que as mudanças na lógica de lembretes voltada ao paciente precisam de dois revisores, um dos quais do grupo de operações. A decisão, com as razões, vai para o registro de decisões da equipe.

## Ágil, IA, automação e análise

### Ágil

Revisões rápidas e pequenas apoiam a entrega contínua e um ritmo sustentável. Um hábito prático é combinar uma norma da equipe para o tempo até a primeira revisão e falar dos pull requests parados na revisão regular da equipe. O cuidado é que a velocidade de revisão tratada como meta leva ao carimbo de borracha; por isso pareie-a com as correções pós-merge.

### IA

As mudanças geradas por IA podem elevar o volume e o tamanho dos pull requests, e as ferramentas de revisão por IA podem acelerar a primeira olhada. Pareie o tempo até a primeira revisão com a taxa de correções pós-merge das mudanças assistidas por IA e relate a carga de revisão por papel de revisor, e não por pessoa. O cuidado é que um comentário de revisão feito por um robô pode ser contado como revisão; por isso conte a revisão humana separadamente.

### Automação

Extraia automaticamente os eventos de revisão do host de código e rode verificações automáticas antes da revisão humana para que as pessoas gastem tempo em julgamento. Meça as próprias verificações quanto a alarmes falsos e a defeitos que escapam delas. O cuidado é que uma automação pesada pode tornar superficial a revisão humana, já que as pessoas supõem que as ferramentas pegaram tudo.

### Análise

Mostre distribuições de tamanho, tempo até a primeira revisão e rodadas de revisão por equipe, nunca por indivíduo. A decisão informada é onde a capacidade de revisão ou o tamanho das mudanças precisa de atenção. O cuidado é que esses números descrevem o sistema de revisão, e qualquer uso que classifique pessoas as empurrará para mudanças menores, mais seguras e menos úteis.

## Olhar setorial

**Startup.** Uma equipe pequena pode revisar em minutos porque todos conhecem o código, e o principal risco é pular a revisão quando o tempo aperta. Mantenha poucas métricas: tempo até a primeira revisão e tamanho bastam. Estabeleça cedo o hábito de mudanças pequenas, porque é muito mais difícil introduzi-lo depois que a base de código e a equipe crescem.

**Pequena empresa.** Muitas vezes um ou dois desenvolvedores, ou um fornecedor externo, mantêm o software. A revisão pode ser feita por um único colega ou pela equipe do próprio fornecedor. Pergunte aos fornecedores como revisam e se os dados de pull requests podem ser compartilhados, e mantenha um registro simples de quais mudanças foram revistas por quem, porque a revisão é a principal verificação contra erros numa equipe pequena.

**Grande empresa.** Muitas equipes, repositórios e regras de aprovação criam grande variação. Padronize as definições dos relógios e as exclusões para que os dados da plataforma sejam comparáveis, mas não classifique equipes pelo tempo bruto de revisão, já que o risco e a base de código diferem. Atente para exigências de revisão impostas pela auditoria que acrescentam espera sem acrescentar escrutínio e procure oportunidades de substituir aprovações manuais por verificações automáticas e revisão amostral.

**Governo e setor público.** A separação de funções, as trilhas de auditoria e as regras de compras muitas vezes exigem aprovação independente para mudanças. Trate essas regras como insumos de projeto: registre quem aprovou o quê e quando e meça a espera que elas criam. Onde fornecedores escrevem o código, especifique no contrato a evidência de revisão e o acesso aos dados (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é encurtar a parte da entrega que é ao mesmo tempo lenta e controlável, mantendo os benefícios da revisão por pares: menos defeitos, conhecimento compartilhado e uma trilha de auditoria. Pull requests em espera seguram o trabalho concluído longe dos usuários, aumentam o custo da troca de contexto para os autores e tornam mais prováveis os conflitos de merge à medida que as branches envelhecem. Reduzir a espera, portanto, compensa por meio de entrega mais rápida, menos retrabalho e menos frustração.

O custo de coletar essas métricas é baixo quando a plataforma de controle de versão fornece histórico de eventos e uma API. Os principais custos são o tempo para definir os relógios e as exclusões, para montar ou configurar o relatório e para revisar os números regularmente. O custo maior é comportamental: o tempo que as pessoas dedicam a revisar com presteza, que compete com outro trabalho. Esse tempo é o investimento real e deve ser orçado, e não tratado como grátis.

O retorno aparece como tempo de ciclo de revisão mais curto, menos pull requests parados e uma taxa de correções pós-merge estável ou em queda. Evite afirmar de antemão uma melhoria percentual específica, já que os resultados dependem do ponto de partida e da equipe. Um caso crível compara as distribuições de antes e depois da própria equipe, junto com sua contrapartida de qualidade, em vez de citar cifras de outras organizações. O livro *Accelerate*, de 2018, relata pesquisas que ligam práticas técnicas e culturais ao desempenho de entrega e é uma fonte razoável para o argumento geral, mas os números da sua equipe vêm dos seus próprios dados.

## Antipadrões e armadilhas

- **Classificar revisores ou autores.** Placares individuais de revisões concluídas ou linhas alteradas corrompem a colaboração. Relate no nível da equipe e use os números para ajustar os hábitos da equipe.
- **Mirar o tempo até a primeira revisão sem uma contrapartida de qualidade.** O resultado é o carimbo de borracha. Mostre a taxa de correções pós-merge e uma amostra de aprovações sem comentários ao lado de todo gráfico de velocidade.
- **Definir um limite rígido de tamanho.** As equipes dividem o trabalho artificialmente para cumprir. Use o tamanho como conversa e ensine técnicas de fatiamento.
- **Tratar zero comentários como sucesso.** Uma aprovação sem exame pode refletir confiança ou desatenção. Amostre esses pull requests e leia-os juntos.
- **Contar atividade de robôs como revisão.** Comentários automáticos fazem a espera parecer curta. Exclua os robôs do relógio e das medidas de carga.
- **Ignorar fusos horários e calendários.** O tempo corrido bruto faz esperas de fim de semana e entre regiões parecerem revisão lenta. Use horas úteis e nomeie o calendário.
- **Deixar a lista de parados crescer.** Pull requests antigos acumulam conflitos de merge e perdem contexto. Reveja a lista toda semana e integre, retrabalhe ou feche cada item com um motivo.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definição e relógios | O tempo de revisão é adivinhado ou relatado por impressão | Algumas equipes exportam tempos da plataforma com regras próprias | Uma definição escrita de cada relógio, com exclusões para robôs, rascunhos e calendários | Definições revistas em uma cadência; mudanças registradas com motivos | Definições alinhadas entre equipes e fornecedores e revistas quando deixam de informar decisões |
| Prática de revisão | As revisões acontecem quando alguém repara | Normas informais em algumas equipes | Acordo de trabalho escrito sobre pedidos, expectativas de resposta e o que uma revisão cobre | Normas ajustadas a partir dos dados; compartilhamento de conhecimento e áreas de risco acompanhados | Prática de revisão coordenada entre equipes e fornecedores, com a automação cuidando das verificações rotineiras |
| Contrapartida de qualidade | Sem ligação entre revisão e defeitos | Olhar ocasional para as correções pós-merge | Taxa de correções pós-merge mostrada ao lado da velocidade de revisão | Barreiras de proteção revistas regularmente; aprovações amostradas lidas | Evidência de revisão ligada à garantia de mudanças e ao aprendizado com incidentes entre serviços |
| Uso na melhoria | Números sem uso | Mostrados em algumas retrospectivas | Revistos pela equipe dona em uma cadência fixa | Lacunas levam a trabalho de melhoria planejado e com recursos | Ideias de melhoria fluem das equipes para a prática compartilhada e de volta |

## Lista de verificação

- [ ] Os relógios do tempo até a primeira revisão e do tempo de ciclo da revisão estão escritos, com início, parada e exclusões.
- [ ] Robôs, rascunhos e pull requests encerrados sem merge são excluídos ou contados à parte, e as regras estão visíveis.
- [ ] Os tempos são relatados como mediana e um percentil alto em horas úteis.
- [ ] O tamanho do pull request é medido com uma lista de exclusão acordada para arquivos gerados e de terceiros.
- [ ] A equipe tem um acordo escrito sobre como as revisões são pedidas e quão cedo se espera uma primeira resposta.
- [ ] A concentração da carga de revisão é relatada apenas no nível da equipe.
- [ ] Uma taxa de correções pós-merge ou outra contrapartida de qualidade é mostrada no mesmo gráfico que a velocidade de revisão.
- [ ] Uma amostra de aprovações sem comentários e muito rápidas é lida todo mês.
- [ ] A lista de pull requests parados é revista semanalmente.
- [ ] Os dados de revisão são usados em retrospectivas e não em avaliações individuais.
- [ ] As áreas do código com um único revisor qualificado estão listadas e têm um plano.

## Prompts de IA

**Redija definições de relógio para métricas de revisão.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Analise uma exportação de dados de revisão.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Encontre riscos de manipulação nas nossas métricas de revisão.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Prepare uma retrospectiva sobre o fluxo de revisão.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma métrica relacionada de fluxo ou de qualidade e a barreira de proteção que deve ficar ao lado de uma métrica de revisão.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se as edições deste tópico mantêm consistentes o modelo, a tabela de manipulação e as referências cruzadas.

## Ideias-chave

- A maior parte do atraso de revisão é espera; por isso meça o tempo até a primeira revisão e o tempo de ciclo da revisão como distribuições em horas úteis.
- Pull requests menores são revisados mais rápido e com mais cuidado; ensine o fatiamento em vez de impor um teto de tamanho.
- Pareie toda medida de velocidade com uma contrapartida de qualidade, como a taxa de correções pós-merge, e leia as duas juntas.
- Trate a carga de revisão como uma capacidade da equipe e relate a concentração no nível da equipe, nunca como uma classificação de pessoas.
- As métricas de revisão são perguntas para uma retrospectiva e servem à equipe dona do trabalho.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Controle de versão](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Revisão de código](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Integração contínua](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Desenvolvimento baseado em tronco](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Programação em par](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Análise estática de programas](https://en.wikipedia.org/wiki/Static_program_analysis).
