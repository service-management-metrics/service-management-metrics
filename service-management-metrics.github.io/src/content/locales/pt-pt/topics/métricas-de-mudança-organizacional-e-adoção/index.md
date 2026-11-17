# Métricas de mudança organizacional e adoção

**Uma mudança pegou quando as pessoas fazem a coisa nova pelas razões pelas quais ela deveria ser feita e o resultado melhora; por isso meça o propósito e o efeito, e não a presença de rituais, e mantenha o ritmo da mudança em um nível que as pessoas possam sustentar.**

## Visão geral e motivação

As organizações adotam novas formas de trabalhar o tempo todo: um novo processo de gestão de serviços, um pipeline de entrega, uma estrutura de equipes diferente, um conjunto de práticas ágeis, um arcabouço de incidentes. Anunciar é fácil. A pergunta real é o que muda no comportamento diário e se o benefício pretendido veio em seguida. Muitos programas relatam sucesso porque o treinamento foi dado, as ferramentas foram instaladas e o vocabulário novo está em uso, enquanto o trabalho tem a mesma aparência e os resultados não se moveram.

Os princípios do Manifesto Ágil dizem que as melhores arquiteturas, requisitos e projetos emergem de equipes autoorganizadas e que mudanças de requisitos são bem-vindas. Dizem também para construir projetos em torno de indivíduos motivados, confiar neles e manter um ritmo constante indefinidamente. Esses princípios são um argumento permanente contra impor práticas de cima e medir a conformidade. Apontam para uma abordagem diferente da mudança: envolver as pessoas continuamente, deixar o modo de trabalhar evoluir e julgá-lo pelos resultados.

Uma ideia de advertência vinda da cultura de software é o culto ao cargo (cargo cult). A [programação de culto ao cargo](https://en.wikipedia.org/wiki/Cargo_cult_programming) descreve a inclusão ritual de código ou práticas que não servem a nenhum propósito, copiadas de outro lugar sem entendimento. A palestra de Richard Feynman sobre a "ciência de culto ao cargo" usou uma imagem relacionada para descrever o trabalho que tem a forma externa da coisa real sem sua substância. Aplicado às formas de trabalhar, o culto ao cargo é a equipe que faz todas as reuniões, usa todos os termos e preenche todos os quadros e não entrega continuamente, não colabora com suas partes interessadas nem melhora. Uma abordagem de [culto ao cargo](https://en.wikipedia.org/wiki/Cargo_cult) confunde a forma de uma prática com seu objetivo. As métricas deste tópico foram projetadas para distinguir os dois.

Várias ideias do estudo da mudança ajudam.

- **A mudança é um problema de [mudança organizacional](https://en.wikipedia.org/wiki/Organizational_change) tanto quanto técnico.** A [gestão da mudança](https://en.wikipedia.org/wiki/Change_management) trata do lado humano: consciência, desejo, conhecimento, capacidade e reforço estão entre os elementos comumente usados. Modelos como os oito passos de John Kotter e o ADKAR da Prosci oferecem vocabulários, e nenhum deles é uma garantia.
- **As pessoas muitas vezes resistem à mudança por boas razões.** A [resistência à mudança](https://en.wikipedia.org/wiki/Resistance_to_change) pode sinalizar um problema real com a proposta, uma ameaça a algo que as pessoas valorizam ou cansaço. Trate-a como informação.
- **A adoção é um processo ao longo do tempo.** A teoria da [difusão de inovações](https://en.wikipedia.org/wiki/Diffusion_of_innovations) descreve como as novas práticas se espalham por um sistema social, dos adotantes iniciais à maioria, por influência e observação.
- **A cultura molda o que pega.** A [cultura organizacional](https://en.wikipedia.org/wiki/Organizational_culture), as premissas e comportamentos compartilhados de um grupo, determina quais mudanças parecem naturais e quais são rejeitadas.
- **A observação muda o comportamento.** O [efeito Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) é a tendência das pessoas a alterar seu comportamento por estarem sendo observadas. Um piloto que mostra um ótimo resultado sob atenção próxima pode não se sustentar em escala.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é especialmente relevante para a transformação: quando a adoção é uma meta, as equipes adotam a forma. Um painel de "equipes usando o novo processo" com um mandato por trás mostrará alta adoção e pouca mudança (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Este tópico reúne as medidas anteriores de resultados (veja o tópico 6.5, Realização de valor e resultados de negócio) e de melhoria (veja o tópico 9.5, Métricas de melhoria contínua) como a evidência de que uma mudança funcionou.

## Princípios-chave

- **Julgue uma mudança pelo seu resultado, e não pelos seus rituais.** A prova da adoção é um resultado melhor.
- **Torne explícito o objetivo de cada prática.** Se ninguém sabe dizer por quê, é candidata a culto ao cargo.
- **Envolva continuamente as pessoas afetadas.** Projete com elas, e não para elas.
- **Prefira a adesão voluntária e a evolução aos mandatos.** As equipes adaptam as práticas a seu contexto.
- **Limite a carga de mudança.** As pessoas só conseguem absorver certa quantidade, e um ritmo constante inclui a mudança.
- **Trate a resistência como dado.** Escute o que ela diz sobre a proposta.
- **Compare com honestidade.** Use grupos de comparação e desconfie de resultados que aparecem só sob observação.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Clareza do objetivo | Proporção dos membros da equipe que conseguem enunciar o objetivo de uma prática com as próprias palavras e um modo de saber se ela está funcionando | membros que dão um objetivo e um indicador claros em uma breve verificação anônima / membros consultados, no nível da equipe | porcentagem | Breve verificação anônima, agregada por equipe | Gestão da mudança organizacional; melhoria contínua | Entendimento da equipe sobre por que trabalha assim | Trimestral |
| Amplitude de adoção da prática | Proporção das equipes que usam uma prática definida, conforme o comportamento observável, e não a presença | equipes que mostram o comportamento definido no último período, confirmado pela equipe e por um observador / equipes no escopo | porcentagem | Autoavaliação da equipe confirmada por observação | Gestão da mudança organizacional | Difusão de uma prática | Trimestral |
| Movimento do resultado contra a comparação | Mudança em uma medida de resultado das equipes que adotam comparada com equipes semelhantes que não adotam no mesmo período | mudança no resultado dos adotantes menos a mudança nas equipes de comparação | unidades do resultado | Medidas de resultado por equipe (fluxo, estabilidade, experiência) | Melhoria contínua; medição e relato | Aprendizado com experimentos | Trimestral |
| Carga de mudança | Número de mudanças significativas que afetam uma equipe ao mesmo tempo | contagem de iniciativas de mudança significativas que pedem a uma equipe que mude seu modo de trabalhar no período, por equipe | contagem | Portfólio de mudanças e contribuição das equipes | Gestão da mudança organizacional; habilitação de mudanças | Ritmo sustentável | Trimestral |
| Taxa de envolvimento das partes interessadas | Proporção das iniciativas de mudança em que as pessoas afetadas participaram do projeto e da revisão | iniciativas com envolvimento registrado das pessoas afetadas / iniciativas | porcentagem | Registros das iniciativas e confirmação das equipes afetadas | Gestão da mudança organizacional; engajamento das partes interessadas | Envolvimento contínuo das partes interessadas | Trimestral |
| Parcela de adesão voluntária | Proporção das equipes adotantes que escolheram a prática, em oposição a terem sido dirigidas | equipes adotantes que relatam ter escolhido a prática / equipes adotantes | porcentagem | Relatos das equipes | Gestão da mudança organizacional | Equipes autoorganizadas | Anual |
| Taxa de reversão | Proporção das equipes que abandonaram uma prática dentro de um ano da adoção | equipes que pararam em 12 meses / equipes que adotaram | porcentagem | Registros das equipes ao longo do tempo | Gestão da mudança organizacional; melhoria contínua | Práticas abandonadas por não ajudarem | Anual |

Defina a prática pelo que as equipes fazem e pretendem, e não pelo nome. A amplitude de adoção conta uma equipe somente quando seu comportamento combina com a definição e a equipe e um observador concordam. O movimento do resultado usa equipes de comparação escolhidas de antemão como semelhantes em tipo de serviço e ponto de partida e declara o que mais mudou. A carga de mudança conta as iniciativas que pedem à equipe que altere seu trabalho, e não as atualizações de rotina. Todas as medidas são no nível da equipe ou da iniciativa, nunca individuais.

## Recomendações

### Comece pelo propósito e pelas pessoas

**1. Declare o objetivo e o indicador antes da prática.** Para cada mudança proposta, escreva que problema ela resolve, quem o sente, que resultado deve melhorar e como você saberá. Se o objetivo for "ser ágil" ou "adotar o arcabouço", pergunte de novo. As equipes seguirão uma prática com mais boa vontade quando virem para que ela serve. Esta é a melhor proteção contra o culto ao cargo.

**2. Envolva as pessoas afetadas no projeto da mudança.** Pergunte a quem faz o trabalho o que dói, o que tentariam e o que temem. Projete com algumas delas, teste com um pequeno grupo e escute. O envolvimento contínuo das partes interessadas é um objetivo ágil central e se aplica aos programas de mudança tanto quanto aos produtos. Registre quem participou.

**3. Escute a resistência.** Quando as pessoas reagem, pergunte o que elas veem que você não vê. As respostas possíveis incluem uma falha na proposta, uma capacidade ausente, um custo não reconhecido ou uma mudança anterior que nunca foi terminada. Registre as preocupações e as respostas e ajuste a mudança onde elas têm razão.

### Introduza a mudança de um modo do qual se possa aprender

**4. Faça um piloto com comparação.** Experimente a mudança com uma ou duas equipes dispostas e observe um grupo comparável que não muda. Compare os resultados no mesmo período. Fique atento ao efeito Hawthorne e prolongue o piloto o bastante para a novidade passar. Um [projeto piloto](https://en.wikipedia.org/wiki/Pilot_project) é um teste em pequena escala, e seu valor está no que ensina antes de você escalar; por isso declare de antemão o que espera aprender e o que o faria parar.

**5. Prefira a adesão voluntária e deixe as práticas evoluírem.** Quando as equipes escolhem uma prática porque resolve um problema para elas, adaptam-na e a mantêm. Quando é imposta, elas a encenam. Ofereça o objetivo, a evidência e o apoio e deixe as equipes decidirem como aplicá-la. Permita a variação local e aprenda com ela. Acompanhe a adesão voluntária e a reversão para ver se uma prática está pegando pelas razões certas.

**6. Espalhe por exemplo e conversa.** A influência viaja por pessoas respeitadas e visíveis. Compartilhe histórias de equipes que tentaram algo e do que aconteceu, incluindo os reveses. As comunidades de prática são um bom canal (veja o tópico 9.4, Métricas de habilidades e aprendizado). Evite tabelas classificatórias de adoção.

### Observe a carga

**7. Conte as mudanças que caem sobre cada equipe.** Liste as iniciativas que pedem a uma equipe que mude seu modo de trabalhar: novas ferramentas, novos processos, reorganizações, exigências de relato. Uma equipe diante de muitas ao mesmo tempo não consegue absorvê-las, e a [fadiga de mudança](https://en.wikipedia.org/wiki/Change_fatigue) se instala. Sequencie as iniciativas, descarte as de baixo valor e dê às equipes espaço para terminar uma mudança antes da seguinte. Isso faz parte de manter um ritmo sustentável (veja o tópico 9.2, Métricas de satisfação e bem-estar).

**8. Aposente o que já não serve.** Para cada prática nova acrescentada, pergunte o que pode ser removido. As camadas de processo se acumulam, e cada camada tem custo. Reveja a cada trimestre os rituais que uma equipe conduz e abandone aqueles cujo objetivo já não é atendido.

### Meça a adoção pelo que importa

**9. Defina a adoção por comportamento observável e propósito.** Descreva o que uma equipe faz de diferente quando a prática pegou, por exemplo "as mudanças chegam à produção em pequenos passos com verificações automatizadas, e os usuários são consultados semanalmente". Avalie por observação e conversa, e não contando artefatos como quadros ou reuniões. Peça aos membros da equipe que expliquem o objetivo.

**10. Compare resultados, e não conformidade.** Olhe as medidas de fluxo, estabilidade, experiência e custo das equipes que adotam contra as equipes de comparação (veja o tópico 2.8, Métricas DORA). Cuide da causalidade: as equipes que adotam podem ser diferentes de modos que também afetam os resultados. Relate a comparação com seus limites.

**11. Confira a experiência das pessoas.** A adoção que eleva o atrito ou corrói a autonomia pode se minar. Use os pulsos de saúde da equipe e de bem-estar para ver como a mudança é sentida (veja o tópico 9.1, Saúde da equipe e experiência do desenvolvedor). Pergunte o que a mudança tirou além do que acrescentou.

**12. Seja honesto no relato.** Relate juntos a adoção, os resultados, a carga de mudança e as reversões, com a história do que foi aprendido. Evite declarar sucesso quando a forma se espalhou e os resultados não se moveram. Admita quando uma prática não serviu e retire-a. Uma transformação é julgada pelo que viabilizou, e não por quão amplamente foi anunciada.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Clareza do objetivo | Treinar as pessoas a recitar o objetivo; fazer perguntas indutoras | Verificação anônima; pedir um exemplo de como saberiam; comparar com o movimento do resultado |
| Amplitude de adoção da prática | Contar quadros e reuniões; equipes encenando para o observador | Definir por comportamento e propósito; observação por alguém de fora da equipe; movimento do resultado |
| Movimento do resultado contra a comparação | Escolher um grupo ou período de comparação favorável; deixar de fora outras mudanças | Escolher a comparação e o período de antemão; listar outras mudanças; mostrar a incerteza |
| Carga de mudança | Dividir uma iniciativa em pedaços pequenos; não contar mudanças que chegam informalmente | Contar pelo efeito no trabalho da equipe; pedir às equipes que listem o que estão absorvendo |
| Taxa de envolvimento das partes interessadas | Convidar as pessoas a uma apresentação e chamar isso de envolvimento; registrar só a presença | Confirmação da equipe afetada de que influenciou o projeto; registrar as mudanças feitas em resposta |
| Parcela de adesão voluntária | Apresentar um mandato como escolha; equipes dizendo que escolheram quando sentiram que tinham de fazê-lo | Relato anônimo; perguntar o que teria acontecido se recusassem |
| Taxa de reversão | Tornar caro ou oculto abandonar uma prática; rebatizar a prática abandonada | Rever os motivos do abandono; permitir a retirada segura |

Uma leitura saudável é uma prática que as equipes sabem explicar e escolher, uma adoção medida por comportamento, resultados que melhoram contra a comparação, uma carga de mudança administrável, poucas reversões com boas razões e pessoas que dizem que sua voz moldou a mudança.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Implantação por mandato | Rápida, consistente | Conformidade sem propósito; ressentimento; culto ao cargo |
| Adesão voluntária | Adotantes motivados; ajuste local | Mais lenta; desigual; algumas equipes nunca adotam |
| Mudança "big-bang" | Evento claro | Alto risco; carga pesada; difícil de aprender |
| Pilotos em etapas com comparação | Aprende antes de escalar | Mais lentos; pilotos podem não se generalizar |
| Práticas padrão entre equipes | Coordenação e apoio mais fáceis | Ajuste ruim para algumas equipes |
| Variação local | Ajuste ao contexto | Mais difícil de comparar e apoiar |
| Painéis de adoção | Progresso visível | Premiam a forma da adoção |
| Comparação de resultados | Sinal honesto | Difícil de isolar; mais lenta para mostrar |

A resposta pragmática é pilotar com comparação, oferecer as práticas com seus objetivos, deixar as equipes escolherem e adaptar, contar a carga de mudança e julgar pelos resultados, usando qualquer padrão somente onde a coordenação exigir.

## Perguntas para discutir com sua equipe

**1. Que prática seguimos cujo propósito ninguém sabe explicar?**
Cada pessoa nomeia uma. Para cada uma, discutam que problema ela devia resolver e se ainda resolve. O facilitador deve registrar as respostas sem defensividade. Combinem manter, mudar ou abandonar duas delas.

**2. Que mudanças estão caindo sobre nós agora, e quais poderiam esperar?**
Listem toda iniciativa que nos pede para mudar como trabalhamos. Contem. Perguntem quais agregam valor e quais agregam carga. Proponham aos patrocinadores uma sequência ou a parada de uma delas.

**3. A que dissemos não na última mudança, e alguém estava escutando?**
Lembrem a resistência ou as preocupações. Foram ouvidas, e a mudança se adaptou? Discutam como levantar preocupações de um modo que seja recebido. Combinem como a equipe dará feedback sobre a próxima mudança.

**4. Se esta mudança funcionasse, o que seria diferente em nossos resultados, e como saberíamos?**
Redijam o indicador e a comparação. Perguntem o que mais está mudando ao mesmo tempo. Se ninguém sabe dizer, a mudança carece de um objetivo. Combinem uma linha de base agora.

**5. Como saberíamos se uma nova prática fosse só para mostrar?**
Pensem em sinais: ninguém usa a saída, a reunião não tem decisão, o quadro é atualizado para uma plateia. Discutam como conferir isso. Combinem um momento para rever os rituais que a equipe conduz.

**6. Que prática abandonamos, e o que aprendemos ao abandoná-la?**
Lembrem uma. Discutam se foi seguro abandoná-la e o que a substituiu. Tratem a resposta como prova de que as equipes podem se adaptar.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega vivem com as mudanças. Devem pedir o objetivo, envolver-se no projeto, rodar pequenos experimentos e dizer quando uma prática não serve. Têm o direito de evoluir seu modo de trabalhar e o dever de entregar resultados que justifiquem suas escolhas.

### Equipes de serviço e operações

As equipes de operações absorvem mudanças de processo de muitas direções, muitas vezes por cima do trabalho não planejado. Devem registrar a carga de mudança, pedir sequenciamento e participar de pilotos em que sua visão importa. Estão bem situadas para notar quando um novo processo acrescenta etapas sem valor.

### Liderança e governança

Os líderes patrocinam mudanças e muitas vezes as impõem. Devem declarar objetivos e indicadores, envolver as pessoas afetadas, preferir a adesão voluntária onde possível, limitar a carga de mudança e estar prontos a retirar o que não funciona. A governança deve olhar os resultados contra a comparação, a carga de mudança por equipe e as taxas de reversão e desconfiar de cifras de adoção uniformemente altas.

### Clientes e usuários

Os usuários vivenciam os efeitos da mudança na qualidade do serviço, na comunicação e na estabilidade. Podem ser envolvidos no projeto de mudanças que os afetam, e o feedback deles é evidência de se a mudança ajudou. Arcam também com o custo das transformações que distraem as equipes do serviço.

## Na prática: um exemplo de gestão de serviços

A divisão de tecnologia de uma empresa multinacional de logística tem 30 equipes. Há dois anos lançou um programa de transformação para adotar um conjunto padrão de formas de trabalhar, e o painel do programa mostra 27 das 30 equipes "adotantes". Os números abaixo são ilustrativos.

A nova chefe de práticas de engenharia é perguntada se o programa funcionou. Ela olha além do painel. Uma breve verificação anônima mostra que apenas 41% dos membros das equipes conseguem enunciar o objetivo das principais práticas e um modo de saber se estão funcionando. A observação de oito equipes mostra que cinco fazem as reuniões prescritas e atualizam os quadros, e duas dessas cinco ainda liberam releases trimestralmente com aprovação manual. Comparando as 12 equipes com o comportamento de prática mais forte com 12 equipes semelhantes que não o tinham, o tempo de ciclo mediano e a taxa de falha de mudanças são parecidos, e a satisfação com o modo de trabalhar é menor entre as equipes sob a conformidade mais forte. A equipe média está absorvendo cinco iniciativas que lhe pedem para mudar seu modo de trabalhar, com três equipes diante de oito ou mais. 22% das equipes adotaram voluntariamente. Das equipes que adotaram uma prática de pipeline há dois anos, 30% pararam em silêncio.

A chefe de práticas de engenharia reformula o programa com as equipes. O objetivo de cada prática é escrito em linguagem simples com um indicador, e as equipes são livres para adotar, adaptar ou recusar, com uma conversa sobre o porquê. A divisão publica a carga de mudança por equipe e pede aos patrocinadores que sequenciem suas iniciativas; quatro são pausadas e duas fundidas. Equipes dispostas pilotam uma prática de release em pequenos passos com verificações automatizadas, com um grupo de comparação escolhido de antemão, e os resultados são compartilhados como histórias e números. Partes interessadas do negócio e das operações participam de sessões de projeto de duas mudanças de processo. O relato muda de contagens de adoção para movimento do resultado, carga de mudança e reversão.

Um ano depois, 71% dos membros das equipes sabem enunciar o objetivo das práticas que usam. As equipes-piloto reduzem o tempo de ciclo mediano em 30% contra uma redução de 6% no grupo de comparação, com o efeito Hawthorne considerado ao prolongar o piloto por mais dois meses. A carga média de mudança cai para três iniciativas por equipe. A adesão voluntária sobe para 64%, e as reversões são de 9%, com os motivos registrados. O diretor de operações pede uma meta de 100% de adoção até o fim do ano. A chefe de práticas de engenharia propõe acompanhar os resultados e a carga em seu lugar, explicando que um 100% imposto produziu a aparência anterior de sucesso e a reversão anterior. A decisão é registrada, e o painel abandona a contagem de adoção.

## Ágil, IA, automação e análise

### Ágil

Mude em um ritmo que as pessoas possam sustentar, com as partes interessadas envolvidas ao longo de todo o processo. O cuidado é que medir a presença de rituais mostra conformidade, e não propósito.

### IA

A adoção de IA é um programa de mudança com impacto sobre as pessoas; por isso meça a adesão voluntária, o movimento do resultado e as preocupações levantadas e pareie o uso com a qualidade. O cuidado é que o uso obrigatório de IA pode elevar os números de uso enquanto reduz a confiança.

### Automação

Colete os sinais de adoção das ferramentas automaticamente e meça a carga de mudança sobre as equipes. O cuidado é que painéis de uso de ferramentas podem substituir a conversa.

### Análise

Compare os resultados com um grupo de comparação onde possível e declare os limites. A decisão informada é continuar, ajustar ou reverter. O cuidado é que adoção e benefício são coisas diferentes; por isso meça ambos.

## Olhar setorial

**Startup.** A mudança é constante e as práticas vêm dos fundadores e das primeiras contratações. Mantenha explícito o objetivo de cada prática e abandone o que não ajuda. Resista a copiar o processo de uma grande empresa antes de ter os problemas dela.

**Pequena empresa.** O dono costuma decidir, e a mudança é pessoal. Explique por quê, envolva as poucas pessoas afetadas, tente uma mudança de cada vez e confira se a dor que ela visa diminuiu. Evite compras de arcabouços que superem a capacidade da equipe de absorvê-los.

**Grande empresa.** A escala convida a padrões, programas e consultores e, com eles, o risco de culto ao cargo em volume. Ofereça práticas compartilhadas com objetivos, apoie a adesão voluntária, gerencie o portfólio de mudanças pela carga das equipes e compare os resultados com honestidade. Use comunidades de prática para espalhar o que funciona.

**Governo e setor público.** A mudança pode ser conduzida por legislação, reestruturações e ciclos políticos, com escolha limitada. Onde a escolha é limitada, seja transparente sobre isso, concentre-se no objetivo e no resultado e envolva cedo o pessoal e os usuários. Podem se aplicar proteções do pessoal e deveres de consulta, e a responsabilização pública torna valioso o relato honesto do que não funcionou (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos de medir bem a mudança são pequenos: verificações curtas, dados de comparação de medidas existentes, tempo de observação e uma lista de iniciativas por equipe. O custo maior é a disposição de ouvir que um programa favorito não está funcionando.

Os retornos vêm de não desperdiçar o custo muito grande das transformações fracassadas: treinamento, consultoria, ferramentas e o tempo de muitas pessoas, além do custo da fadiga de mudança e da confiança perdida. Construa o argumento a partir do seu próprio histórico: o custo de um programa passado e que resultados ele moveu, o número de iniciativas que competem por cada equipe e a proporção de práticas adotadas depois abandonadas. Evite citar estatísticas sobre taxas de fracasso de transformações a menos que possa rastrear sua fonte e método. Inclua o benefício da correção de rumo mais cedo por meio de pilotos com comparação (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Relatar a adoção como sucesso.** A forma pode se espalhar sem substância. Relate os resultados contra a comparação.
- **Impor práticas por mandato.** Produz ritual e ressentimento. Ofereça objetivos e deixe as equipes escolherem.
- **Copiar o processo de outra empresa.** Importa a forma, e não as condições que a fizeram funcionar. Parta dos seus problemas.
- **Mudanças demais ao mesmo tempo.** A carga excede a capacidade. Conte e sequencie.
- **Descartar a resistência.** Você perde informação. Escute e adapte.
- **Pilotos sem comparação.** Os efeitos de novidade enganam. Use uma comparação e um período mais longo.
- **Nunca aposentar nada.** As camadas de processo se acumulam. Remova à medida que acrescenta.
- **Teatro de sucesso.** Histórias sem números, ou números sem histórias, escondem a verdade. Relate ambos, com honestidade.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Propósito e envolvimento | Práticas anunciadas | Objetivos declarados em apresentações | Objetivo e indicador escritos para cada mudança; pessoas afetadas consultadas | Envolvimento e clareza do objetivo medidos; resistência registrada e respondida | Mudança co-projetada com usuários e equipes em toda a organização e entre parceiros |
| Introdução e evidência | Implantações "big-bang" | Pilotos sem comparação | Pilotos com grupos de comparação; adoção definida por comportamento | Movimento do resultado e reversão acompanhados; limites da evidência relatados | Aprendizado em todo o portfólio sobre quais mudanças funcionam, compartilhado abertamente |
| Carga e sustentabilidade | Sem visão da carga de mudança | Iniciativas listadas | Carga de mudança contada por equipe e sequenciada | Carga gerida com a capacidade; práticas aposentadas | Mudança planejada em conjunto com a capacidade, o bem-estar e as metas de entrega |

## Lista de verificação

- [ ] Cada mudança tem um objetivo escrito, um indicador nomeado e uma linha de base.
- [ ] As pessoas afetadas participaram do projeto, e sua contribuição está registrada.
- [ ] As preocupações e a resistência são registradas com respostas.
- [ ] Os pilotos têm um grupo de comparação e um período longo o bastante para a novidade passar.
- [ ] A adoção é definida por comportamento observável e propósito.
- [ ] A adesão voluntária e a reversão são acompanhadas, com os motivos.
- [ ] A carga de mudança por equipe é contada, e as iniciativas são sequenciadas.
- [ ] As práticas são revistas para remoção pelo menos anualmente.
- [ ] O movimento do resultado é relatado com seus limites.
- [ ] Nenhuma meta exige que uma dada porcentagem de equipes adote uma prática.

## Prompts de IA

**Escreva um objetivo e um indicador para uma mudança.**

```text
We plan to introduce [change] for [teams] in [type of organization]. Draft a
one-paragraph aim in plain language (the problem, who feels it, the outcome that
should improve), an indicator with a baseline to record now, a way to compare
with similar teams that do not change, and signs that the practice has become
a ritual without purpose. Do not invent evidence. List your assumptions and
questions for the affected teams.
```

**Conte e sequencie a carga de mudança.**

```text
Here is a list of initiatives that will ask [team or group] to change how it
works in the next [period]: [paste with sponsors, size, and dates]. Count the
load per team, identify conflicts and dependencies, and propose a sequence that
leaves room for the work and for sustainable pace. Suggest which could be
combined, delayed, or dropped. Do not assume we can do all of it. List your
assumptions.
```

**Projete um piloto com comparação.**

```text
Design a pilot of [change] with [number] willing teams and a comparison group
of [number] similar teams. Propose the outcome measures and baselines, the
duration (including time for novelty to fade), how to choose the comparison
group in advance, what else might confound the result, and what would make us
scale, adapt, or stop. Do not claim results from other organizations. List your
assumptions.
```

**Confira se há culto ao cargo.**

```text
Here is a practice our teams follow: [describe, with its artifacts and
meetings]. Ask me ten questions I could put to team members to see whether they
understand the purpose, can name the outcome it should improve, and would
adapt it to their context. Add signs in the artifacts that suggest the practice
is performed for show. Do not judge individuals. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de adoção ou de mudança.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de adoção mede comportamento e resultado, com seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Julgue uma mudança pelo seu resultado contra uma comparação, e não pela difusão de seus rituais.
- Escreva o objetivo e o indicador antes da prática e teste se as pessoas conseguem explicá-lo.
- Envolva continuamente as pessoas afetadas e trate a resistência como informação.
- Prefira a adesão voluntária, deixe as práticas evoluírem e acompanhe as reversões.
- Conte a carga de mudança sobre cada equipe e mantenha-a dentro de um ritmo sustentável.
- Relate com honestidade, inclusive o que não funcionou, e aposente as práticas que já não servem.

## Referências e leituras complementares

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Programação de culto ao cargo](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Culto ao cargo](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Mudança organizacional](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Gestão da mudança](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistência à mudança](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Difusão de inovações](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Cultura organizacional](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Efeito Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Projeto piloto](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Fadiga de mudança](https://en.wikipedia.org/wiki/Change_fatigue).
