# Implantar métricas sem criar medo

**A medição funciona quando as pessoas acreditam que os números descrevem o trabalho delas para ajudá-las; por isso implante com transparência, responsabilidade das equipes, promessas escritas sobre o uso e nenhuma tabela classificatória de indivíduos.**

## Visão geral e motivação

Um programa de métricas tem sucesso ou fracassa pela confiança. O mesmo conjunto de medidas pode ser um espelho útil em uma organização e uma fonte de pavor em outra. A diferença raramente está nas medidas. Está no que as pessoas acreditam que acontecerá com elas por causa dos números. Se acreditam que os números serão usados para classificá-las, culpá-las ou reduzi-las, a resposta sensata é se proteger: escolher o trabalho que pontua bem, adiar o relato de problemas, discutir definições e ajustar em silêncio o que é registrado. Os dados então deixam de descrever o trabalho, e o programa perde justamente aquilo que foi construído para fornecer.

Esse padrão é antigo e bem conhecido. O [efeito Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) descreve o modo como as pessoas mudam de comportamento quando sabem que estão sendo observadas. A [lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) diz que quanto mais um indicador quantitativo é usado para tomar decisões, mais ele fica sujeito a pressão de corrupção e mais distorce o processo que devia monitorar. A [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) faz um ponto semelhante sobre metas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Nenhuma delas é razão para evitar a medição. São razões para projetar a implantação de modo que os incentivos à distorção sejam baixos e as razões para dizer a verdade sejam altas.

A [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety) é a crença compartilhada de que uma equipe é segura para assumir riscos interpessoais, como admitir um erro, fazer uma pergunta ou relatar más notícias. Os programas de métricas dependem dela e podem corroê-la. As medidas de falha, retrabalho e atraso só são honestas quando as pessoas se sentem seguras para relatá-las (veja o tópico 9.2, Métricas de satisfação e bem-estar, e o tópico 4.2, Métricas de análises pós-incidente e aprendizado). A [confiança](https://en.wikipedia.org/wiki/Trust_(social_science)) entre as pessoas medidas e as que usam as medidas é o ativo subjacente, e é construída devagar e gasta depressa.

A [gestão da mudança](https://en.wikipedia.org/wiki/Change_management) é a disciplina de preparar e apoiar as pessoas ao longo da mudança. Introduzir métricas é uma mudança organizacional e merece o mesmo cuidado de um novo processo ou ferramenta (veja o tópico 9.6, Métricas de mudança organizacional e adoção). O [ciclo de vida de adoção de tecnologia](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) descreve como as inovações se espalham dos entusiastas à maioria, o que lembra que um piloto respeitado com equipes dispostas faz mais que um mandato. Um [projeto piloto](https://en.wikipedia.org/wiki/Pilot_project) é um teste em pequena escala que prova uma abordagem antes de um compromisso maior. Um [irradiador de informação](https://en.wikipedia.org/wiki/Information_radiator) é uma exibição visível de informação que as pessoas podem ler de relance sem perguntar, o que serve à transparência quando mostra os dados da equipe à equipe que é dona deles.

Os objetivos ágeis dão forma à implantação. O envolvimento contínuo das partes interessadas significa que as pessoas medidas ajudam a escolher as medidas e as regras para seu uso. A melhoria contínua significa que o próprio programa muda em resposta ao que as pessoas dizem. A evolução permanente significa que se espera que as medidas mudem, o que reduz o que está em jogo em cada uma. Um ritmo sustentável significa que o programa não acrescenta relatos que expulsem o trabalho. Construir em torno de indivíduos motivados significa tratar as pessoas como adultos capazes, que podem usar dados para melhorar o próprio trabalho, e não como recursos a monitorar. A postura prática é simples: meça o sistema, compartilhe os dados com as pessoas que estão nele e deixe que elas liderem a melhoria.

O tópico trabalha em conjunto com a orientação sobre painéis (veja o tópico 11.1, Projetar um painel de métricas de serviço) e a governança das medidas (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Princípios-chave

- **Diga para que servem os dados e para que não servem.** Escreva ambos e cumpra-os.
- **As equipes são donas de suas medidas.** As pessoas que fazem o trabalho ajudam a definir, ver e interpretar os números sobre ele.
- **Meça sistemas, e não indivíduos.** Nenhuma tabela classificatória, nenhuma pontuação por pessoa, nenhum uso dos dados em avaliações individuais de desempenho.
- **Seja transparente.** Compartilhe definições, fontes de dados e quem pode ver o quê. As surpresas geram suspeita.
- **Comece com voluntários.** Um piloto disposto produz histórias e correções antes da implantação mais ampla.
- **Mostre o uso.** Demonstre que os números levam à ajuda, como remover um bloqueio, e não à culpa.
- **Permita a contestação.** As pessoas podem questionar um número, e as correções são feitas depressa e de forma visível.
- **Vá em um ritmo sustentável.** Algumas medidas por vez, com tempo para aprender.

## Definições de métricas

As medidas abaixo dizem à equipe do programa se a implantação está construindo ou gastando confiança. Descrevem equipes e o programa, e não indivíduos. Várias se apoiam em pesquisas e na observação de comportamento e são lidas melhor como sinais sobre os quais conversar.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura do estatuto de uso | Proporção das equipes participantes que combinaram uma declaração escrita do para que servem e para que nunca servem suas medidas | equipes com um estatuto combinado / equipes participantes | porcentagem | Estatutos guardados com o programa | Governança; gestão da mudança organizacional | Acordos de trabalho | Trimestral |
| Parcela de responsabilidade da equipe | Proporção das medidas exibidas a uma equipe cujas definições a equipe ajudou a escrever ou aprovou | medidas com aprovação da equipe / medidas exibidas à equipe | porcentagem | Catálogo de métricas; registros de aprovação | Melhoria contínua | Equipes autoorganizadas | Trimestral |
| Sinal de franqueza | Se o relato de problemas e de quase acidentes se mantém estável ou sobe depois que as medidas são introduzidas | relatos de quase acidentes ou de problemas por equipe por trimestre, antes e depois; tendência | relatos | Registros de incidentes, quase acidentes e análises pós-incidente | Gestão de incidentes; melhoria contínua | Reflexão sem culpa | Trimestral |
| Tempo de resposta a contestações | Tempo desde uma pessoa ou equipe contestar um número até uma resolução visível a elas | mediana e 85º percentil dos dias da contestação à resolução | dias | Registro de contestações | Melhoria contínua; gestão do conhecimento | Responder ao feedback | Trimestral |
| Segurança percebida da medição (pesquisa) | Concordância, na pesquisa no nível da equipe, com afirmações como "os dados sobre nosso trabalho são usados para nos ajudar" | porcentagem que concorda na pesquisa da equipe; taxa de resposta mostrada | porcentagem | Pesquisa anônima da equipe, agregada | Gestão da mudança organizacional | Confiança e indivíduos motivados | Duas vezes por ano |
| Incidentes de uso individual | Casos em que os dados foram mostrados ou usados para classificar ou avaliar indivíduos, contra o estatuto | contagem de casos relatados por trimestre, com os resultados | contagem | Relatos ao programa; revisão de painéis e avaliações | Governança | Respeito às pessoas | Trimestral |
| Adesão voluntária | Proporção das equipes elegíveis que escolheram aderir ao programa em um período, antes de qualquer mandato | equipes que aderiram / equipes elegíveis convidadas | porcentagem | Registros do programa | Gestão da mudança organizacional | Pilotos e aprendizado | Trimestral |

A pesquisa de segurança percebida precisa de um tamanho mínimo de grupo para o relato, para que nenhum indivíduo possa ser identificado, e deve ser anônima. O sinal de franqueza deve ser lido com cuidado: um aumento nos relatos pode significar mais problemas ou mais disposição para relatá-los, e a segunda costuma ser o que um programa saudável produz no início. Os incidentes de uso individual não são uma contagem a esconder. O objetivo é que cada caso seja relatado, tratado e corrigido, e um pequeno número de casos relatados é sinal de um caminho de relato que funciona, e não de uma falha do programa. A adesão voluntária é contada apenas para o período anterior a qualquer mandato.

## Recomendações

### Defina primeiro as regras básicas

**1. Escreva as promessas e publique-as.** Antes de o primeiro número ser mostrado, escreva um estatuto curto. Um bom estatuto diz que as medidas descrevem equipes, serviços e sistemas e nunca são usadas para classificar indivíduos nem em avaliações individuais de desempenho. Diz quem pode ver o quê, por quanto tempo os dados são guardados, como as pessoas podem contestar um número e o que acontece se as regras forem quebradas. Os líderes seniores o assinam. O estatuto é um compromisso que permite às pessoas baixar a guarda e deve ser fácil de achar e ler.

**2. Separe a medição para melhoria da medição para julgamento.** As equipes usam suas medidas para melhorar o próprio trabalho. Os líderes usam visões agregadas para direcionar apoio e investimento. Nenhum dos usos trata de avaliar uma pessoa. Se uma organização precisa avaliar indivíduos, deve fazê-lo por conversa, evidência e contexto, e nunca lendo um painel (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

**3. Seja aberto sobre as compensações.** Diga às pessoas que toda medida pode ser manipulada, que você sabe de que modos e que cada uma vem com uma barreira de proteção. Mostre os vetores de manipulação e as barreiras de proteção ao estilo deste livro. Nomear os riscos às claras demonstra boa-fé e convida as pessoas a apontar modos que você deixou passar.

### Faça das equipes as donas

**4. Deixe as equipes escolherem e definirem.** Ofereça um cardápio de medidas e deixe cada equipe escolher algumas para começar, adaptar as definições com um motivo declarado e acrescentar as suas. As equipes que escolheram suas medidas têm mais chance de usá-las com honestidade. Mantenha um pequeno núcleo comum para que os serviços possam ser comparados no nível em que a comparação é válida (veja o tópico 1.4, Governança e responsabilidade das métricas).

**5. Mostre primeiro às equipes os seus dados.** Dê a cada equipe os seus números antes que qualquer outra pessoa os veja, com tempo para conferir, corrigir e acrescentar contexto. A equipe é dona da história. Quando os dados forem mostrados depois aos líderes, a equipe os apresenta ou anota. Isso evita surpresas e garante que a interpretação venha das pessoas mais próximas do trabalho.

**6. Mantenha as visões no nível certo.** Mostre visões no nível da equipe e do serviço. Não mostre divisões por pessoa e desligue os recursos das ferramentas que as mostram. Onde uma visão detalhada for necessária para investigação, como o histórico de um único incidente, limite o acesso, explique por quê e mantenha-a fora das conversas de avaliação (veja o tópico 11.2, Panorama de ferramentas).

### Implante para conquistar confiança

**7. Faça o piloto com voluntários.** Convide duas ou três equipes curiosas e respeitadas. Trabalhe com elas as medidas e as regras. Deixe que contem suas próprias histórias aos pares. As correções e objeções delas melhorarão o programa, e o aval delas pesa mais que qualquer anúncio. Pergunte o que mudariam antes da implantação mais ampla e mude.

**8. Entregue valor cedo e de forma visível.** Nas primeiras semanas, use os dados para remover algo que irrita a equipe: uma fila que sempre espera, uma etapa de aprovação sem propósito, um relatório que ninguém lê. Quando as pessoas veem que os números levam à ajuda, oferecem dados mais honestos. Quando veem que os números levam a perguntas sobre elas, oferecem menos.

**9. Responda depressa às contestações.** Quando alguém diz que um número está errado, leve a sério. Confira-o, corrija a definição ou os dados e diga publicamente o que foi feito. Uma correção rápida e respeitosa constrói confiança, e uma resposta defensiva a gasta. Mantenha um registro de contestações e trate as contestações repetidas como sinais de que a medida precisa de trabalho.

### Proteja a confiança ao longo do tempo

**10. Observe os sinais de medo.** Os sinais incluem equipes discutindo definições para evitar resultados, melhorias súbitas que não combinam com outros sinais, menos problemas relatados, trabalho escolhido para parecer bom e pessoas perguntando quem pode ver os dados. Trate-os como informação sobre o programa, e não como mau comportamento. Pergunte às equipes, escute e ajuste.

**11. Cobre dos líderes o cumprimento do estatuto.** Os líderes estão sob pressão para comparar, classificar e explicar. Dê-lhes o que podem usar legitimamente: tendências, distribuições e medidas de resultado no nível da equipe e do serviço. Facilite relatar uma quebra do estatuto, responda a cada relato e publique o resultado, sem nomear os indivíduos que o levantaram. Uma única violação visível pode desfazer meses de trabalho, e uma correção visível pode reconstruí-los.

**12. Reveja o programa com as pessoas que estão nele.** A cada trimestre, pergunte às equipes para que as medidas ajudam, o que distorcem e o que abandonariam. Aposente as medidas que não passam no teste. Compartilhe os resultados da revisão. Um compromisso contínuo e visível de melhorar o programa é o sinal mais forte de que ele existe para servir às equipes (veja o tópico 9.5, Métricas de melhoria contínua).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura do estatuto de uso | Assinar estatutos como formalidade; líderes ignorando-os | Conferir o uso do estatuto na prática; relatar incidentes de uso individual; rever os estatutos com as equipes |
| Parcela de responsabilidade da equipe | Equipes aprovando definições que não leram; o programa apresentando definições prontas para assinatura | Amostrar como as definições foram desenvolvidas; acompanhar as mudanças que as equipes pediram e que foram feitas |
| Sinal de franqueza | Pressionar as equipes a relatar mais ou menos problemas; rebatizar categorias | Ler com a severidade e o conteúdo das análises pós-incidente; comparar com problemas relatados por clientes |
| Tempo de resposta a contestações | Encerrar contestações sem uma resolução visível; desencorajar contestações | Exigir uma resposta visível; pesquisar quem contestou; acompanhar contestações repetidas |
| Segurança percebida da medição (pesquisa) | Treinar os respondentes; baixas taxas de resposta escondendo equipes infelizes | Anonimato e tamanho mínimo de grupo; mostrar as taxas de resposta; conversar diretamente com as equipes |
| Incidentes de uso individual | Não relatar; reclassificar os incidentes como outra coisa; culpar quem relata | Relato anônimo fácil; proteção a quem relata; revisão de avaliações e painéis em busca de dados individuais |
| Adesão voluntária | Pressão apresentada como convite; contar equipes que aderiram para evitar escrutínio | Perguntar às equipes por que aderiram; conferir o uso na prática; manter o período livre de mandato |

Uma leitura saudável mostra estatutos a que as equipes de fato recorrem, medidas que as equipes ajudaram a moldar, relatos de problemas estáveis ou crescentes, contestações respondidas depressa, uma pesquisa que mostra que as pessoas acreditam que os dados as ajudam, algumas quebras relatadas que foram tratadas abertamente e equipes que aderiram porque quiseram.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Implantação por mandato em todas as equipes de uma vez | Rápida e consistente | Conformidade sem crença; manipulação e ressentimento |
| Pilotos voluntários, depois espalhar | Constrói histórias e confiança | Mais lenta; cobertura desigual |
| As equipes escolhem todas as suas medidas | Alta responsabilidade | Difícil de comparar; lacunas de cobertura |
| Núcleo comum mais escolha da equipe | Equilíbrio entre comparação e responsabilidade | Exige governança |
| Painéis abertos entre equipes | Transparência; aprendizado compartilhado | Risco de comparação e classificações |
| Visões só das equipes, com agregados compartilhados | Espaço seguro para a reflexão honesta | Os líderes podem se sentir cegos |
| Estatuto escrito | Promessas claras; base para contestação | Inútil se ignorado |
| Garantias informais | Rápidas | Esquecidas; sem recurso |

A resposta pragmática é começar com equipes dispostas, dar-lhes a responsabilidade, compartilhar agregados para cima com o consentimento e o contexto da equipe e respaldar as promessas com um estatuto ao qual os líderes são cobrados.

## Perguntas para discutir com sua equipe

**1. O que acreditamos que vai acontecer com estes números, e o que já vimos acontecer no passado?**
Convidem a contar histórias honestas de medidas bem e mal usadas. O facilitador deve registrar os medos sem discutir. Combinem que promessas fariam mais diferença.

**2. O que escreveríamos em um estatuto que diz para que os nossos dados nunca serão usados?**
Redijam juntos em palavras simples. Incluam avaliações individuais de desempenho, classificações e demissões, se essa for a preocupação. Levem aos líderes que teriam de assinar.

**3. Quais das medidas propostas escolheríamos, e quais abandonaríamos?**
Peçam a cada pessoa que vote em particular e comparem. Discutam por que algumas parecem ameaçadoras. Combinem um conjunto curto para experimentar por um trimestre.

**4. Como saberíamos se as pessoas começassem a esconder problemas?**
Listem sinais: menos relatos, linguagem suavizada, trabalho evitado. Combinem quem observa e como levantaríamos isso sem culpa.

**5. Quem deve ver os números da nossa equipe, em que forma e quando?**
Discutam o que é só da equipe, os agregados para a liderança e a comparação entre equipes. Decidam o que é compartilhado e quem apresenta. Escrevam a regra.

**6. Se um número sobre nós estiver errado, como o faremos corrigir?**
Rastreiem o caminho da percepção à correção. Identifiquem atrasos e quem decide. Combinem uma via simples de contestação e uma expectativa de prazo.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes carregam o risco de ser medidas e guardam o conhecimento do que os números significam. Devem participar da escolha e da definição das medidas, usar os dados em suas próprias revisões e se manifestar quando um número engana. Ganham quando veem os dados primeiro e quando a medição ajuda a remover obstáculos.

### Equipes de serviço e operações

As equipes de operações muitas vezes guardam os dados mais ricos e carregam os ônus mais pesados de plantão e de incidentes. Devem desconfiar de medidas que premiam o silêncio ou punem a escalação, proteger o relato de incidentes e de quase acidentes e observar que os dados de plantão não sejam usados para classificar pessoas (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

### Liderança e governança

Os líderes definem a cultura de uso. Devem assinar e seguir o estatuto, pedir visões de equipe e de serviço, responder abertamente às quebras e evitar pedir classificações. Devem julgar o programa pela melhoria que viabiliza e pela franqueza que preserva, e não pelo número de painéis.

### Clientes e usuários

Os clientes e usuários ganham quando as equipes relatam os problemas com honestidade e corrigem as causas. Também podem ser o objeto da coleta de dados. Merecem clareza sobre o que é reunido a respeito deles e como é usado e podem ser parceiros na decisão de quais medidas mostram valor para eles (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

A divisão de tecnologia de um prestador de serviços de saúde introduz métricas em suas 15 equipes de entrega e de suporte. Uma tentativa anterior, três anos antes, publicou uma classificação das equipes por tickets encerrados e terminou com um pico de encerramentos de tickets de baixo valor e uma queda nos incidentes relatados. As cifras abaixo são ilustrativas.

A nova chefe de gestão de serviços começa perguntando a seis líderes de equipe do que se lembram. Eles descrevem a classificação e suas consequências. Ela redige com eles um estatuto: as medidas descrevem equipes e serviços, nunca indivíduos; as visões individuais são desligadas nas ferramentas; os dados nunca são usados em avaliações individuais; as equipes veem primeiro os seus dados; qualquer pessoa pode contestar um número, com resposta em dez dias úteis; e uma quebra, de qualquer origem, será relatada ao programa e revista às claras. O diretor de tecnologia o assina, e ele é afixado na página do programa.

Três equipes se oferecem para o piloto. Cada uma escolhe quatro medidas de um cardápio e reescreve duas definições. Uma equipe insiste em que o "tempo de resolução" exclua o tempo esperando o cliente, e outra em que a falha de mudanças seja definida pelo impacto no usuário e não só pelo rollback. O piloto mostra seu primeiro benefício na terceira semana, quando uma equipe vê seu trabalho esperando numa fila de aprovação e remove uma etapa que ninguém conseguia justificar. A equipe apresenta sua história em uma reunião da divisão. Mais sete equipes pedem para entrar. A adesão voluntária chega a 10 das 15 equipes em dois trimestres, e as últimas cinco entram depois sem um mandato.

O programa fica atento ao medo. Os relatos de quase acidentes por equipe sobem no primeiro trimestre, o que a chefe lê como mais disposição para relatar, e ela confirma lendo uma amostra. Uma pesquisa das equipes com tamanho mínimo de grupo mostra 58% dos respondentes concordando que "os dados sobre nosso trabalho são usados para nos ajudar" no início do segundo trimestre e 76% no início do quarto. O tempo de resposta a contestações tem uma mediana de quatro dias úteis. Então uma diretora, preparando um argumento orçamentário, pede uma tabela que classifique as equipes por contagem de implantações. A líder do programa lhe diz que isso está fora do estatuto, oferece uma visão de tendências por serviço com comentários das equipes e registra o pedido como um quase incidente de uso individual relatado, com o resultado. A diretora aceita. Dois trimestres depois, os incidentes de uso individual são um, relatado, tratado e publicado sem nomes.

## Ágil, IA, automação e análise

### Ágil

Implante com as pessoas medidas, com promessas escritas sobre como os dados serão usados e uma conversa regular sobre o que elas veem. O cuidado é que uma implantação anunciada de cima com um painel de equipes convida à manipulação.

### IA

O pessoal pode temer a IA como ferramenta de medição ou como substituta; por isso seja explícito de que os dados derivados de IA sobre indivíduos não são usados para avaliá-los e de que o trabalho assistido por IA é medido no nível da equipe. O cuidado é que usar ferramentas de IA para analisar o comportamento individual quebra a promessa, mesmo que feito em silêncio.

### Automação

A coleta automatizada é aceitável quando as pessoas sabem o que é coletado e por quê. Publique a lista dos dados coletados e as regras de acesso. O cuidado é que a coleta automática de dados de atividade parece vigilância; por isso colete apenas o que uma decisão exige.

### Análise

Compartilhe os resultados primeiro com a equipe e mostre como cada número será usado. A decisão informada é se o programa conquistou confiança. O cuidado é que os sinais de franqueza são suaves; por isso combine pesquisas com observação e trate a baixa resposta como informação.

## Olhar setorial

**Startup.** A equipe é pequena e a confiança é pessoal. Diga em voz alta para que servem os números, deixe toda a equipe escolher as poucas medidas a acompanhar e mantenha-as fora de qualquer conversa individual. O risco é que um comentário de passagem de um fundador sobre um número remodele o comportamento da noite para o dia. Escreva a promessa, mesmo em poucas linhas.

**Pequena empresa.** O pessoal pode suspeitar de que os números servem para cortar empregos. Fale abertamente sobre por que está medindo, o que vai olhar e o que não vai. Envolva as pessoas na escolha das medidas, compartilhe o que achar e mostre cedo uma melhoria que as ajudou.

**Grande empresa.** A escala torna a confiança mais difícil, porque a maioria dos líderes está distante das equipes. Use um estatuto assinado em nível sênior, medidas de propriedade das equipes com um pequeno núcleo comum, uma configuração de ferramentas que impeça visões individuais e uma via independente para relatar quebras. Pilote, aprenda e espalhe pelos pares e evite uma única data global de implantação.

**Governo e setor público.** As regras de emprego, os sindicatos e o escrutínio público acrescentam restrições e expectativas. Consulte cedo os representantes do pessoal, combine o estatuto com eles e seja claro sobre a linha entre os dados de melhoria e qualquer processo formal de desempenho. As exigências de relato público devem ser mantidas à parte das medidas internas de melhoria (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são sobretudo o tempo das pessoas: redigir o estatuto, conduzir pilotos, oficinas com as equipes, tratar contestações, rodar pesquisas e o tempo dos líderes gasto em cumprir as regras. Há também um custo de oportunidade, porque uma implantação cuidadosa é mais lenta que um mandato. Esses custos são pequenos ao lado do custo de uma implantação fracassada, em que os dados são distorcidos, a confiança é gasta e o programa é abandonado.

Os retornos são dados que refletem a realidade, relato honesto de problemas e equipes que usam as medidas para melhorar. Isso aparece como detecção mais cedo de problemas, menos disputas sobre números e maior adoção sem compulsão. Construa o argumento a partir do seu próprio histórico: o que aconteceu quando medidas foram impostas antes, quantas equipes aderiram voluntariamente desta vez e como mudou o relato de problemas. Evite citar cifras publicadas sobre engajamento ou confiança sem uma fonte rastreável e relevância para o seu cenário (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **A tabela classificatória surpresa.** As classificações aparecem em um slide da liderança. A confiança acaba. Mantenha as classificações fora do programa.
- **Medidas em avaliações de desempenho.** Até uma menção muda o comportamento em toda parte. Mantenha-as de fora, por escrito.
- **Mandato primeiro, explicação depois.** Conformidade sem crença. Pilote com voluntários e explique as razões.
- **Um estatuto que ninguém faz cumprir.** Palavras sem ação são piores que nenhuma. Cobre os líderes e publique os resultados.
- **Vigilância por padrão.** As ferramentas expõem a atividade individual porque podem. Desligue esses recursos.
- **Respostas defensivas às contestações.** As pessoas param de apontar erros. Responda depressa e com respeito.
- **Correr para muitas medidas.** Sobrecarga e confusão. Comece com poucas e cresça.
- **Ler o silêncio como sucesso.** Menos relatos podem significar medo. Observe os sinais de franqueza e converse com as pessoas.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Promessas e uso | Não escritos; o uso varia por gestor | Garantias verbais; alguns acordos de equipe | Estatuto escrito assinado pelos líderes; visões individuais desligadas | Quebras relatadas e revistas; uso do estatuto conferido | Estatuto de propriedade conjunta com pessoal e parceiros; revisto pela experiência |
| Responsabilidade e transparência | Medidas impostas | Algumas equipes consultadas | As equipes escolhem e definem as medidas e veem primeiro os dados | Parcela de responsabilidade e tempo de resposta a contestações geridos | Equipes, fornecedores e clientes compartilham visões por acordo; a responsabilidade é rotina |
| Confiança e franqueza | Medo ou indiferença | Piloto com voluntários | Pesquisa de segurança e tendências de quase acidentes revistas com as equipes | Os sinais disparam ação planejada; adesão voluntária acompanhada | A franqueza é rotina; a melhoria do programa vem de todos |

## Lista de verificação

- [ ] Um estatuto escrito declara para que os dados servem e para que nunca servem, e os líderes o assinaram.
- [ ] As visões e classificações em nível individual estão desligadas nas ferramentas ou restritas por política.
- [ ] As equipes escolhem ou aprovam suas medidas e veem os dados antes de outros.
- [ ] Um piloto com equipes voluntárias precede qualquer implantação mais ampla.
- [ ] O primeiro uso dos dados entrega ajuda visível à equipe.
- [ ] Existe uma via de contestação, com um tempo de resposta declarado e um registro.
- [ ] Existe um caminho de relato para quebras do estatuto, e os resultados são publicados sem nomes.
- [ ] Os sinais de segurança e de franqueza no nível da equipe são observados e discutidos com as equipes.
- [ ] Os vetores de manipulação e as barreiras de proteção são compartilhados abertamente com as equipes.
- [ ] O programa é revisto com as equipes a cada trimestre, e as medidas são aposentadas quando deixam de ajudar.

## Prompts de IA

**Redija um estatuto de métricas.**

```text
Draft a one-page charter for the metrics program of [organization type]. It should
state what the data is for, what it will never be used for (including individual
rankings and performance reviews), who can see what, how long data is kept, how a
person can challenge a number, how breaches are reported, and who signs it. Use
plain words. Do not give legal advice. List your assumptions and points to confirm
with human resources and legal specialists.
```

**Planeje um piloto.**

```text
Plan a six-week pilot of a metrics program with two to three volunteer teams in
[context]. Include how to invite teams, which measures to offer, how to set the
rules, what early help the data should provide, what to ask the teams at the end,
and how to decide on wider rollout. Do not assume the outcome. List your
assumptions and risks.
```

**Revise uma medida quanto ao medo.**

```text
Here is a proposed measure and how it will be used: [paste]. Act as a skeptical
team member. Describe how it could be taken as a threat, how people could change
behavior to look good, and what honest reporting it might discourage. Suggest
changes to the definition, display, or rules of use that would lower the risk.
List your assumptions.
```

**Responda a uma contestação.**

```text
A team has challenged this number: [describe, without personal data]. Draft a
respectful response that acknowledges the concern, explains how the number is
calculated, proposes how to check it, sets a date for the answer, and says what
will change if the number is wrong. Do not be defensive. List what you do not yet
know.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o vetor de manipulação e a barreira de proteção a compartilhar abertamente com as equipes para uma medida proposta.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um plano de implantação mantém as medidas no nível da equipe e do serviço e nunca classifica indivíduos.

## Ideias-chave

- A confiança é o ativo. Escreva para que os dados servem e para que nunca servem e cumpra a promessa.
- Meça equipes, serviços e sistemas e desligue as visões que expõem indivíduos.
- Deixe as equipes escolherem, definirem e verem primeiro os seus dados e serem donas da história que eles contam.
- Pilote com voluntários, entregue ajuda visível cedo e espalhe pelos pares.
- Responda depressa às contestações e trate os sinais de medo como informação sobre o programa.
- Cobre dos líderes o cumprimento do estatuto e reveja o programa com as pessoas que estão nele.

## Referências e leituras complementares

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Efeito Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Lei de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Confiança (ciência social)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Gestão da mudança](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Ciclo de vida de adoção de tecnologia](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Projeto piloto](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Irradiador de informação](https://en.wikipedia.org/wiki/Information_radiator).
