# Métricas de gestão do conhecimento

**Meça o conhecimento pelo fato de ser usado e confiável no momento da necessidade, e não pela quantidade que existe: acompanhe juntos a taxa de vinculação, a reutilização, a atualidade e a facilidade de encontrar, e trate toda contagem de artigos como uma pergunta sobre o trabalho, e não como uma nota.**

## Visão geral e motivação

Uma equipe de serviço acumula conhecimento todos os dias: como restabelecer um serviço, o que uma mensagem de erro confusa realmente significa, qual contorno funcionou da última vez. A [gestão do conhecimento](https://en.wikipedia.org/wiki/Knowledge_management) é a disciplina de tornar esse conhecimento disponível para a próxima pessoa que precisar dele. No ITIL 4 (a edição de 2019 da estrutura publicada pela AXELOS e a base amplamente documentada deste livro), a gestão do conhecimento é uma prática por direito próprio, e o [ITIL](https://en.wikipedia.org/wiki/ITIL) também espera que ela apoie o tratamento de incidentes, o tratamento de problemas e a central de serviços. Este tópico cobre como saber se esse apoio é real.

A maior parte do produto utilizável da gestão do conhecimento acaba em uma [base de conhecimento](https://en.wikipedia.org/wiki/Knowledge_base): um repositório de artigos, runbooks, registros de erros conhecidos e respostas curtas de como fazer. Um [runbook](https://en.wikipedia.org/wiki/Runbook) é um conjunto escrito de passos para uma operação rotineira ou uma recuperação. Os artigos são a parte explícita do que uma equipe sabe. O [conhecimento tácito](https://en.wikipedia.org/wiki/Tacit_knowledge) das pessoas experientes, como a percepção de que um alarme é ruído, não pode ser totalmente escrito, e nenhuma métrica deste tópico o mede diretamente.

Na visão do ITIL, o conhecimento é um ativo gerenciado com um ciclo de vida: criado, revisto, publicado, usado e aposentado. Na visão ágil, a documentação precisa merecer seu lugar, a conversa e o pareamento carregam muita coisa, e o conhecimento escrito é um subproduto de terminar o trabalho. As duas visões concordam no teste: o conhecimento ajudou alguém a resolver um problema real mais depressa ou melhor do que teria feito sem ele?

O método que liga mais diretamente as duas visões é o [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), uma metodologia do Consortium for Service Innovation. No KCS, o conhecimento é capturado e melhorado como parte da resolução do problema, e não depois. As pessoas trabalham em dois ciclos. O ciclo de resolver é o momento da resolução: buscar um artigo existente, reutilizá-lo e melhorá-lo se encontrado, criar um se não. O ciclo de evoluir é o ciclo mais longo que estuda o desempenho do conhecimento e melhora o sistema ao redor. O KCS também propõe indicadores próprios, como a taxa em que os casos resolvidos são vinculados a artigos. Este tópico resume essas ideias de forma neutra quanto a fornecedores; as equipes que adotam o KCS formalmente devem ler o guia de práticas do próprio Consortium.

O número de artigos em uma base de conhecimento é um inventário, não um resultado, e sobe tanto com o descuido quanto com o cuidado. As métricas abaixo estão ligadas a um momento de uso: um caso encerrado, uma busca feita, a reação de um leitor. Mesmo essas podem ser distorcidas (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

As medidas de contato e de tratamento ficam com a [central de serviços](https://en.wikipedia.org/wiki/Service_desk) (veja o tópico 3.1, Métricas da central de serviços). O volume e os padrões de repetição vêm dos dados de incidentes (veja o tópico 3.2, Volume e prioridade de incidentes). O sucesso do autoatendimento, em que os usuários consomem artigos sem um atendente, é coberto à parte (veja o tópico 3.7, Métricas de autoatendimento e automação). Este tópico fica com a saúde do próprio conhecimento e seu uso pelas pessoas que resolvem problemas.

## Princípios-chave

- **Meça o uso no ponto de trabalho.** Um artigo vinculado a um caso resolvido ou encontrado por uma busca é evidência de valor. Um artigo que apenas existe não é.
- **Capture no fluxo do trabalho.** O conhecimento escrito durante a resolução é mais fresco e mais barato do que o escrito em um esforço separado de documentação; por isso as métricas devem premiar a captura como parte de terminar o trabalho.
- **Leia a atualidade junto com o uso.** Antigo não é o mesmo que errado. O esforço de revisão pertence aos artigos muito usados, e não distribuído por igual sobre um catálogo de páginas quase nunca lidas.
- **Amostre quanto à relevância.** Um vínculo entre um caso e um artigo prova apenas que alguém criou o vínculo. Uma pequena amostra humana sobre se o artigo realmente servia diz se o vínculo significa alguma coisa.
- **Descreva equipes e áreas de conhecimento, nunca indivíduos.** As contagens de contribuição por pessoa transformam um ativo compartilhado em competição e ensinam as pessoas a escrever lixo (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).
- **Pareie toda métrica de volume com um sinal de qualidade.** Taxa de vinculação com relevância, criação de artigos com duplicatas, reutilização com feedback dos leitores.

## Definições de métricas

A tabela lista sete métricas. As janelas de tempo (como o período de revisão para a atualidade) são escolhas que a equipe faz e escreve; nenhum valor aqui é uma referência de mercado. Em todo o texto, "caso" significa um registro de incidente ou de requisição de serviço na ferramenta de ITSM (gestão de serviços de TI), e os incidentes graves são relatados separadamente para não distorcer as razões (veja o tópico 3.4, Métricas de incidentes graves).

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de vinculação de conhecimento | Proporção dos casos resolvidos que têm pelo menos um artigo de conhecimento anexado no momento da resolução | casos resolvidos no período com pelo menos um artigo vinculado / casos resolvidos no período. Conta a data de resolução; exclui incidentes graves, casos encerrados como duplicatas e casos encerrados automaticamente sem trabalho humano | porcentagem | Ferramenta de ITSM: tabelas de casos e de vínculos com artigos | Gestão do conhecimento; gestão de incidentes | A definição de pronto inclui capturar o que foi aprendido | Semanal para a equipe; mensal para revisão |
| Razão de reutilização | Proporção dos vínculos com artigos que apontam para um artigo existente e não para um criado durante aquele caso | vínculos com artigos que existiam antes de o caso abrir / todos os vínculos com artigos feitos em casos resolvidos no período. Exclui vínculos acrescentados depois de o caso encerrar | porcentagem | Ferramenta de ITSM: data de criação do artigo contra data de abertura do caso | Gestão do conhecimento; melhoria contínua | Reutilização em vez de retrabalho; propriedade compartilhada do código e de sua documentação | Mensal |
| Atualidade dos artigos | Proporção dos artigos em uso que foram revistos, ou usados e confirmados corretos, dentro de uma janela de revisão declarada | artigos em uso com data de revisão ou de uso confirmado dentro da janela / artigos em uso. Um artigo está em uso se foi vinculado a um caso ou visto por um leitor nos últimos 12 meses (escolha da equipe); rascunhos e artigos aposentados são excluídos | porcentagem | Metadados da base de conhecimento e registro de visualizações | Gestão do conhecimento; central de serviços | Refinamento do backlog de documentação; ações de retrospectiva | Mensal |
| Taxa de buscas sem resultado | Proporção das buscas de conhecimento que não retornam nenhum artigo | buscas com zero resultado / todas as buscas. Exclui buscas de bots e verificações automáticas; conta cada busca uma vez mesmo se repetida em um minuto | porcentagem | Registro de buscas da base de conhecimento ou do portal | Gestão do conhecimento; central de serviços; gestão de requisições de serviço | Descoberta de necessidade do usuário não atendida; insumo para o backlog | Semanal |
| Taxa de utilidade | Proporção do feedback dos leitores que diz que o artigo ajudou, mostrada com a taxa de resposta | votos de útil / (votos de útil + votos de não útil) para os artigos no período; taxa de resposta = votos de feedback / visualizações do artigo | porcentagem, com a taxa de resposta | Widget de feedback da base de conhecimento e registro de visualizações | Gestão do conhecimento; experiência do cliente | Feedback das partes interessadas na revisão da documentação | Mensal |
| Tempo até publicar | Tempo decorrido desde a criação do rascunho de um artigo até ele ser revisto e ficar visível para o seu público | o relógio começa na criação do rascunho e para na publicação (ou no primeiro estado visível aprovado). Exclui o tempo em um estado de "em espera, aguardando o lançamento do produto"; relatado como mediana e 85º percentil | dias (mediana e 85º percentil) | Histórico do fluxo de trabalho da base de conhecimento | Gestão do conhecimento | Lead time de um item de trabalho do início à conclusão (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) | Mensal |
| Amplitude da contribuição | Distribuição da criação e da melhoria de artigos pela equipe, medida sem nomear pessoas | contribuidores distintos que criaram ou melhoraram um artigo no período / membros da equipe que resolveram casos no período. Relatada apenas para uma equipe, nunca como lista de nomes | porcentagem | Histórico de edições da base de conhecimento cruzado com a composição da equipe | Gestão do conhecimento; melhoria contínua | Propriedade coletiva; pareamento e swarming | Trimestral |

A taxa de vinculação de conhecimento tem um relógio fácil de passar despercebido. O vínculo deve existir quando o caso é resolvido, e não quando alguém arruma tudo uma semana depois, porque o vínculo tardio mede faxina e nada diz sobre o uso durante a resolução. A razão de reutilização depende de uma data de criação do artigo confiável. Se os artigos são migrados ou importados em massa, suas datas de criação são zeradas e a razão enganará até que a migração seja marcada.

## Recomendações

### Decida para que serve o conhecimento

**1. Ligue cada métrica de conhecimento a um caso de uso.** Nomeie as pessoas a quem o conhecimento serve: analistas da central resolvendo no primeiro contato, engenheiros de plantão tratando um alerta ou usuários se ajudando sozinhos. Cada público precisa de medidas diferentes. Um runbook para um engenheiro de plantão é julgado por se os passos restabeleceram o serviço, enquanto um artigo de redefinição de senha é julgado por se o usuário parou de contatar a central. Registre-o no seu registro (veja o tópico 1.4, Governança e responsabilidade das métricas).

**2. Comece pela taxa de vinculação e pela relevância, não pelas contagens de artigos.** A taxa de vinculação mostra se o conhecimento chega ao momento da resolução. Pareie-a desde o início com uma pequena amostra mensal em que uma pessoa lê 20 ou 30 casos vinculados e julga se o artigo servia. Uma taxa de vinculação de 70% com metade dos vínculos irrelevantes é pior do que uma de 40% com vínculos honestos, porque a primeira esconde a lacuna de conhecimento que a segunda revela.

**3. Separe "nenhum artigo existia" de "o artigo existe, mas não foi encontrado".** Quando um caso encerra sem vínculo, os motivos diferem, e as correções também. Acrescente uma escolha curta no encerramento, como "nenhum artigo existia" e "artigo não encontrado", e relate-as como parcelas dos casos sem vínculo. A primeira aponta conteúdo a escrever; a segunda aponta busca, nomenclatura e estrutura. Mantenha a escolha opcional onde atrasaria a central e amostre em vez disso.

### Capture o conhecimento enquanto o trabalho termina

**4. Faça da captura parte da definição de pronto.** Em uma equipe ágil, um item de trabalho que muda o comportamento de um serviço não está pronto até que o runbook, o registro de erro conhecido ou o artigo de ajuda seja atualizado. Na central de serviços, um caso que exigiu descoberta não está resolvido até que a descoberta seja capturada ou um artigo existente seja melhorado. É a ideia do KCS de trabalhar no ciclo de resolver, e mantém baixo o custo de escrever porque quem escreve tem o contexto fresco.

**5. Permita um estado de rascunho leve.** Muitas equipes perdem conhecimento porque todo artigo precisa passar por uma revisão pesada antes que alguém possa vê-lo. A prática ao estilo do KCS distingue um artigo em andamento, visível para a equipe, de um validado, visível para um público maior. Meça o tempo até publicar para as duas etapas separadamente, como medianas e 85º percentil, para que as revisões lentas apareçam como uma fila e não como uma queixa vaga (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**6. Prefira melhorar a criar.** Uma pilha crescente de artigos quase duplicados piora a busca e dificulta manter a atualidade. Acompanhe a razão de reutilização junto com a contagem de criação e, quando a criação sobe enquanto a reutilização cai, procure duplicatas. Torne fácil e visível mesclar e aposentar, e conte uma mesclagem como contribuição positiva.

### Mantenha o conhecimento atual e fácil de encontrar

**7. Reveja os artigos que são usados.** Concentre o esforço de revisão onde o uso é alto. Ordene os artigos em uso pela frequência com que foram vinculados ou vistos e defina para o grupo do topo uma janela de revisão mais curta do que para a cauda longa. Um artigo desatualizado que ninguém lê custa pouco; um artigo desatualizado que aparece em um terço das resoluções pode induzir ao erro centenas de casos. Relate a atualidade do grupo muito usado como linha própria para que a média da base inteira não a esconda.

**8. Trate as falhas de busca como itens de backlog.** Leia todo mês as buscas sem resultado mais frequentes e decida, para cada uma, se escreve um artigo, acrescenta um sinônimo, renomeia um artigo ou aceita que a pergunta pertence a outro lugar. Isso transforma uma métrica em uma lista curta e concreta que a equipe pode trabalhar. Mostra também o vocabulário real, já que usuários e analistas raramente usam as palavras do catálogo de serviços.

**9. Leia as palavras por trás dos votos.** A taxa de utilidade é barata e ruidosa. As taxas de resposta costumam ser baixas e tendem a opiniões fortes. Mostre a taxa de resposta ao lado da taxa de utilidade e leia os comentários escritos dos artigos mais vistos numa revisão permanente. Um único comentário como "o passo 4 não existe mais na nova versão" vale mais do que mil votos sem rótulo.

**10. Ligue o conhecimento a problemas e a análises pós-incidente.** Um incidente recorrente resolvido repetidamente com o mesmo artigo é um sinal para a gestão de problemas, que procura a causa subjacente e pode eliminar a necessidade do artigo (veja o tópico 4.1, Métricas de gestão de problemas). Os registros de erros conhecidos e as lições das análises pós-incidente são ativos de conhecimento com ciclo de vida próprio (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado, e o tópico 4.6, Dívida técnica e erros conhecidos). Olhe todo trimestre os dez artigos mais vinculados e pergunte quais deveriam ser aposentados corrigindo a causa.

### Governe sem classificar

**11. Relate a contribuição no nível da equipe.** A amplitude da contribuição diz se o trabalho de conhecimento é compartilhado ou concentrado em duas pessoas. É um risco que vale ver, porque é o mesmo padrão de um [fator ônibus](https://en.wikipedia.org/wiki/Bus_factor) de dois. Nunca deve virar um placar de autores, que premiaria a quantidade de edições e ensinaria as pessoas a dividir artigos ou fazer mudanças triviais. Se aparecer uma concentração, trate-a como uma conversa de equipe sobre tempo, apoio e permissão para escrever (veja o tópico 9.4, Métricas de habilidades e aprendizado).

**12. Aposente as medidas que deixam de ajudar.** Se ninguém age sobre a taxa de vinculação, mova a atenção para a relevância ou a atualidade do grupo muito usado. Registre qualquer mudança de definição com o motivo, porque uma fórmula alterada quebra a linha de tendência (veja o tópico 1.5, Fontes de dados e instrumentação).

## Vetores de manipulação e barreiras de proteção

Toda métrica da tabela de definições aparece aqui. As métricas de conhecimento são especialmente expostas porque o ato de vincular ou de rever é um clique rápido, enquanto o valor real está no conteúdo.

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de vinculação de conhecimento | Anexar qualquer artigo, muitas vezes um genérico ou muito popular, a todo caso antes de encerrar; vincular em massa depois do fato | Amostra mensal de relevância dos casos vinculados; proporção de vínculos que vão para os mesmos poucos artigos; horário do vínculo contra horário da resolução |
| Razão de reutilização | Criar um novo artigo para cada caso e vinculá-lo logo para que conte como reutilização da próxima vez; ou nunca criar para que a razão pareça perfeita | Taxa de artigos duplicados encontrada por uma busca periódica; proporção de casos encerrados com o motivo "nenhum artigo existia" |
| Atualidade dos artigos | Marcar artigos como revistos sem conferi-los; zerar a data de revisão por edições triviais; contar apenas os artigos fáceis de rever | Amostra de artigos recém-revistos testada contra o serviço real; taxa de utilidade e comentários escritos sobre os mesmos artigos |
| Taxa de buscas sem resultado | Acrescentar artigos vagos ou genéricos que casam com qualquer consulta; encher de palavras-chave; excluir do registro termos de busca incômodos | Clique seguido de contato sobre o mesmo assunto em pouco tempo; taxa de utilidade; leitura manual dos principais termos de busca |
| Taxa de utilidade | Convidar a votar apenas os leitores satisfeitos; esconder a opção de não útil; votar de dentro da equipe | Taxa de resposta e mistura de respondentes mostradas com a taxa; comentários escritos; taxa de contato depois de ler o artigo |
| Tempo até publicar | Publicar um esboço raso para parar o relógio; dividir um artigo em pedaços; mover rascunhos para um estado que o relógio exclui | Relevância e utilidade dos artigos recém-publicados; contagem e idade dos rascunhos em estados excluídos |
| Amplitude da contribuição | Fazer edições triviais para que todos apareçam como contribuidores; pedir às pessoas que acrescentem uma frase para cumprir uma cota | Tamanho e substância das edições amostrados; reutilização e utilidade dos artigos contribuídos; sem nomes no relatório |

Uma leitura saudável mostra artigos vinculados que uma amostra humana confirma serem relevantes, uma razão de reutilização que sobe conforme a base amadurece, um conjunto muito usado de artigos com revisões verificadas recentes, uma lista curta de falhas de busca que a equipe vai trabalhando e uma contribuição espalhada pela equipe. Alguns casos sem artigo, por serem genuinamente novos, são sinais de uma base honesta, não de uma base falha.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Mirar uma taxa de vinculação alta | Empurra a captura e a reutilização para a rotina diária; simples de entender | Convida a vínculos sem sentido; esconde lacunas onde não existe artigo |
| Amostrar a relevância à mão | Revela se os vínculos significam algo; constrói padrões compartilhados | Toma tempo do analista; amostras pequenas são ruidosas; depende do julgamento de quem amostra |
| Rever tudo num calendário fixo | Fácil de planejar e auditar; aplicado por igual | Gasta esforço em artigos que ninguém lê; negligencia os muito usados |
| Rever por uso | Dirige o esforço para onde o conhecimento errado mais machuca | Exige dados confiáveis de visualização e de vínculo; artigos da cauda longa podem apodrecer sem ser vistos |
| Adoção formal do KCS | Dá um conjunto coerente e testado de práticas e indicadores | Exige investimento sustentado, coaching e apoio de ferramentas; pesado para uma equipe muito pequena |
| Conversa e pareamento em vez de artigos | Transfere julgamento e contexto; pouca sobrecarga | Não escala para turnos, férias e rotatividade; o conhecimento sai com as pessoas |

Meça apenas o suficiente para ver se o conhecimento é usado e confiável e gaste o esforço economizado no conteúdo. Para uma equipe pequena, uma taxa de vinculação com uma amostra mensal de relevância e uma lista curta de falhas de busca é um programa completo. Para uma central grande, o conjunto completo se paga só se alguém for dono da revisão e agir sobre ela.

## Perguntas para discutir com sua equipe

**1. Quando resolvemos o último caso difícil, de onde veio o conhecimento e para onde foi depois?**
Escolha um caso recente que deu trabalho de verdade e trace o caminho do que foi aprendido. Um artigo foi encontrado, um colega foi consultado ou a resposta foi construída do zero? Pergunte se a próxima pessoa com o mesmo problema encontraria a resposta em menos de cinco minutos. O facilitador deve procurar a lacuna entre o que a equipe sabe e o que a base de conhecimento contém.

**2. Se elevássemos a taxa de vinculação a uma meta declarada no mês que vem, como poderíamos fazê-lo sem ajudar ninguém?**
Torne explícita a lista de manipulações e trate-a como insumo de projeto, e não como acusação. Respostas comuns são vincular um artigo genérico, vincular em massa no encerramento e escolher o artigo mais popular. Para cada resposta, pergunte qual barreira de proteção da tabela a pegaria e com que rapidez. O facilitador deve sair com pelo menos uma verificação nova, como uma amostra mensal de relevância, e um responsável por ela.

**3. Em quais cinco artigos mais confiamos e quando foram verificados pela última vez contra o serviço real?**
Olhe os artigos mais vinculados e mais vistos e leiam dois deles em voz alta juntos. A conversa costuma mostrar que os artigos de maior impacto são os de menos cuidado, o que é o argumento para rever por uso.

**4. O que as pessoas procuram que nós não temos?**
Traga as principais buscas sem resultado e os motivos dos casos sem vínculo. Agrupem em artigos a escrever, palavras a acrescentar e perguntas que pertencem a outra equipe. O facilitador deve registrar uma lista curta dos três próximos itens e planejar como serão escritos durante o trabalho normal, e não em um projeto especial.

**5. Quem escreve o nosso conhecimento e quanto isso custa a essas pessoas?**
Discutam a captura com honestidade. Escrever é visto como parte do trabalho ou como trabalho extra depois do trabalho? Pergunte o que a atrasa: um modelo pesado, uma revisão lenta, o medo de errar ou a falta de tempo no fim de um turno difícil. O facilitador deve afastar a conversa da caça a indivíduos e levá-la a mudanças em ferramentas, tempo e permissão.

**6. Quais dos nossos artigos deveríamos deixar de precisar?**
Pegue os artigos mais reutilizados e pergunte qual causa recorrente eles contornam. Um procedimento de redefinição usado 200 vezes por mês pode ser sintoma de um defeito no produto, de uma tela confusa ou de uma automação que falta. Decidam quais itens entregar à gestão de problemas ou à equipe de produto e quais automatizar (veja o tópico 3.7, Métricas de autoatendimento e automação). O facilitador deve notar que o melhor resultado de um bom trabalho de conhecimento às vezes é ter menos artigos.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega criam boa parte do conhecimento de que um serviço vai precisar: como uma funcionalidade se comporta, o que significa um novo erro, como reverter. Se esse conhecimento não é capturado antes do lançamento, a central de serviços e as equipes de plantão o aprendem do jeito difícil. Incluam o runbook e o artigo de ajuda na definição de pronto e observem a taxa de vinculação e as falhas de busca dos serviços que possuem como feedback. Quando o mesmo artigo é vinculado muitas vezes, tratem-no como um relato de defeito do produto, e não como um sucesso da documentação.

### Equipes de serviço e operações

As equipes da central de serviços e de operações são as principais produtoras e consumidoras da base de conhecimento; por isso as métricas são em grande parte delas para usar. Trabalhem o ciclo de resolver com honestidade: busquem primeiro, reutilizem e melhorem, criem quando nada servir. Usem a taxa de vinculação com uma amostra de relevância e leiam as buscas sem resultado como um backlog. Evitem qualquer tabela de classificação de autores ou editores, já que a base de conhecimento é uma ferramenta compartilhada e as contagens pessoais a prejudicam (veja o tópico 3.1, Métricas da central de serviços).

### Liderança e governança

Os líderes decidem se o trabalho de conhecimento recebe tempo; por isso decidem a qualidade do conhecimento. Peçam a amostra de relevância e a atualidade dos artigos muito usados antes de pedir a contagem de artigos. Resistam a metas de taxa de vinculação ou de criação de artigos sem uma barreira de proteção e esperem ouvir quando os números caem por boas razões, como um conjunto de duplicatas mesclado. Financiem a revisão dos artigos de alto uso e as correções que tornam os artigos desnecessários.

### Clientes e usuários

Os usuários encontram o conhecimento por busca, por um portal, por um chatbot ou pela resposta que um analista lhes dá. O que notam é se a primeira resposta está correta e se precisam se repetir. O próprio feedback deles sobre os artigos, as buscas que dão em nada e os contatos repetidos são as melhores barreiras de proteção para tudo neste tópico. Se os usuários forem convidados a avaliar artigos, diga a eles o que acontece com o feedback e aja sobre ele de forma visível (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Uma seguradora de médio porte mantém uma central de serviços de TI interna de cerca de uma dúzia de analistas, que atende funcionários de vários escritórios. A central compartilha uma base de conhecimento com duas equipes de produto que são donas do aplicativo de sinistros e do portal de documentos. Todos os números deste exemplo são ilustrativos.

A liderança pediu melhor resolução no primeiro contato (veja o tópico 3.1, Métricas da central de serviços) e define uma meta de 60% para a taxa de vinculação de conhecimento, partindo de ilustrativos 38%. Em seis semanas, o painel mostra 64%. A líder da central não se convence, porque os analistas ainda reclamam de não achar respostas, e uma líder de equipe de produto menciona que três dos artigos de que é dona aparecem na maioria dos casos encerrados.

A equipe faz uma revisão de manipulação e uma amostra de relevância. Lê 30 casos vinculados, escolhidos ao acaso do mês anterior, e julga se o artigo servia ao caso. Em uma contagem ilustrativa, 11 dos 30 vínculos são para um artigo genérico "Como abrir um ticket" ou para uma visão geral de rede que não tratava do problema. Descobre também que os vínculos foram feitos poucos segundos antes de encerrar o caso, um padrão que sugere hábito e não uso. A líder olha a razão de reutilização, que subiu, e a proporção de casos sem vínculo com o motivo "nenhum artigo existia", que caiu a quase nada porque os analistas agora escolhem o artigo mais próximo. A lacuna do conhecimento ficou invisível.

A equipe toma três decisões. Primeiro, a meta de taxa de vinculação é retirada e substituída por uma visão ajustada pela relevância: a taxa de vinculação é relatada ao lado da proporção amostrada de vínculos relevantes, e o motivo de encerramento "nenhum artigo existia" é facilitado e não é tratado como falha. Segundo, as buscas sem resultado são lidas todo mês, e as cinco principais viram as próximas tarefas de escrita, compartilhadas pela central. Terceiro, os 20 artigos mais vinculados são revistos quanto à atualidade em um mês, com a responsabilidade da equipe de produto correspondente, e todo artigo vinculado a mais de um quarto dos casos de um serviço é passado à gestão de problemas como candidato a uma correção permanente (veja o tópico 4.1, Métricas de gestão de problemas).

Dois meses depois, a taxa de vinculação da manchete recuou para ilustrativos 51%, o que soa como má notícia. A relevância amostrada subiu de 63% para 85% em termos ilustrativos, a taxa de buscas sem resultado caiu e um problema repetido de login no portal de documentos foi corrigido na causa, o que aposentou três artigos. A líder pede à liderança que julgue o programa pela relevância e pelos contornos aposentados, e não pela taxa bruta de vinculação.

## Ágil, IA, automação e análise

### Ágil

Trate o conhecimento como subproduto da resolução de problemas, com feedback curto dos usuários sobre se um artigo ajudou. O cuidado é que metas de contagem de artigos produzem conteúdo raso e duplicado.

### IA

A IA pode redigir artigos, responder a perguntas a partir da base de conhecimento e revelar lacunas, o que eleva as contagens de artigos e o uso enquanto a qualidade pode cair. Pareie a taxa de vinculação e a reutilização com a taxa de utilidade e com a proporção de artigos redigidos por IA que uma pessoa revisou antes de publicar. O cuidado é que um artigo desatualizado ou errado servido com confiança por uma IA multiplica o erro.

### Automação

Capture automaticamente os eventos de busca, visualização e vínculo e automatize lembretes de atualidade aos responsáveis. Meça a automação por quantos lembretes levam a uma atualização. O cuidado é que uma expiração automática que despublica artigos pode remover conteúdo útil.

### Análise

Use os registros de busca para ver as consultas sem resultado e mostre a utilidade com o número de respostas. A decisão informada é quais artigos escrever, corrigir ou aposentar. O cuidado é que as visualizações de um artigo não são o mesmo que ajuda recebida.

## Olhar setorial

**Startup.** O conhecimento vive em poucas cabeças e no histórico de chat. Escreva uma lista curta de runbooks para o que quebra à noite e registre a correção depois de cada incidente. Uma verificação mensal de que os principais runbooks ainda funcionam é medição suficiente.

**Pequena empresa.** Muitas vezes uma pessoa é a central de serviços, o administrador e o dono do conhecimento. O risco é o fator ônibus, já que o conhecimento desaparece se a pessoa desaparece. Use um repositório compartilhado simples, mantenha os artigos curtos e deixe um prestador ou colega testar os procedimentos principais. Uma leitura regular das páginas mais usadas vale mais do que qualquer painel.

**Grande empresa.** A escala traz artigos duplicados e qualidade irregular. Use definições comuns de taxa de vinculação, atualidade e reutilização, relate por serviço e por equipe e nomeie responsáveis para os artigos de alto uso. Evite comparar equipes, porque a mistura de serviços e a idade da base diferem.

**Governo e setor público.** Regras de registros, requisitos de acessibilidade e expectativas de auditoria podem governar como o conhecimento é armazenado, revisto e aposentado. Trate-os como insumos de projeto: mantenha uma trilha de aprovação para artigos que afetam os cidadãos e publique conteúdo acessível. O feedback e as falhas de busca dos cidadãos são especialmente valiosos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos das métricas de conhecimento são modestos. Os dados da ferramenta geralmente já existem na plataforma de ITSM e na base de conhecimento. Os principais custos são o tempo para definir as medidas, a pequena amostra mensal que confere a relevância, o tempo de revisão dos artigos de alto uso e a disciplina de capturar conhecimento enquanto se resolvem problemas. Se a plataforma de conhecimento não tem dados utilizáveis de vínculo ou de busca, inclua o custo de instrumentá-la (veja o tópico 1.5, Fontes de dados e instrumentação).

O retorno é um padrão, e o livro não cita uma cifra para ele. Quando os analistas encontram depressa um artigo correto, a resolução é mais rápida e mais consistente, os novos funcionários ficam úteis mais cedo e os engenheiros de plantão dependem menos de poucos especialistas. Quando os usuários encontram respostas sozinhos, a central recebe menos contatos repetidos para perguntas conhecidas. As métricas ajudam ao mostrar onde o conhecimento falta, está desatualizado ou não é usado, para que o escasso tempo de escrita vá aos artigos que importam.

O custo total de propriedade inclui a manutenção. Os artigos decaem à medida que os serviços mudam; por isso o tempo de revisão é um custo contínuo, e um programa que o ignora superestimará o benefício. Para estimar o retorno da sua própria equipe, compare uma amostra de casos seus antes e depois e rotule as suas premissas.

## Antipadrões e armadilhas

- **Contar artigos ou visualizações como sucesso.** O volume sobe com a desordem e as visualizações podem indicar confusão. Meça o uso na resolução, a relevância e o feedback.
- **Uma meta de taxa de vinculação sem checagem de relevância.** As pessoas anexarão qualquer artigo. Amostre os casos vinculados todo mês e relate a parcela relevante ao lado da taxa.
- **Classificar autores ou editores.** Os placares pessoais produzem edições rasas e artigos divididos. Relate a amplitude da contribuição da equipe e discuta-a como questão de capacidade.
- **Rever todos os artigos num calendário fixo único.** O esforço vai para páginas que ninguém lê. Reveja por uso e aposente o que não é usado.
- **Publicar esboços para parar o relógio.** Um artigo rápido e raso derrota o tempo até publicar. Pareie-o com a utilidade e a taxa de contato posterior.
- **Ignorar as buscas que falham.** As buscas que falham são o sinal mais claro de necessidade não atendida. Leia-as todo mês e transforme os itens principais em trabalho.
- **Separar o conhecimento do trabalho.** Um projeto de documentação no fim do trimestre produz páginas desatualizadas. Capture durante a resolução e na definição de pronto.
- **Tratar a base de conhecimento como permanente.** O conteúdo decai. Torne a aposentadoria e a mesclagem rotineiras e reconhecidas.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Captura e vinculação | O conhecimento vive em cabeças e no chat; os vínculos são raros | Algumas equipes vinculam artigos a casos, a prática varia | Uma regra escrita de vinculação e captura; motivos de encerramento registrados | Taxa de vinculação e amostra de relevância revistas mensalmente e ligadas à melhoria | A captura faz parte do fluxo de trabalho da central, das operações e das equipes de produto; definições revistas quando deixam de informar decisões |
| Atualidade e responsabilidade | Sem responsáveis; os artigos envelhecem sem ser vistos | Responsáveis nomeados para os serviços-chave | Janelas de revisão definidas, mais curtas para os artigos muito usados | A atualidade dos artigos de alto uso é acompanhada ao longo do tempo e financiada | Responsabilidade de revisão compartilhada com fornecedores e equipes de produto; a aposentadoria é rotina |
| Facilidade de encontrar e feedback | A busca é ad hoc; sem dados de busca | Existe registro de buscas mas não é lido | Buscas sem resultado e feedback dos leitores revistos em cadência fixa | As falhas de busca alimentam um backlog e são pareadas com dados de contato | Usuários, analistas e chatbots recorrem a uma única fonte de conhecimento; o feedback muda visivelmente o conteúdo |
| Uso na melhoria | As métricas, se existem, são contagens | As contagens são mostradas à equipe | Métricas pareadas com barreiras de proteção e mostradas primeiro à equipe | Os artigos muito vinculados alimentam decisões de gestão de problemas e de automação | Os backlogs de conhecimento, de problemas e de produto são geridos juntos entre equipes |

## Lista de verificação

- [ ] Cada métrica de conhecimento nomeia o público a que serve e a decisão que informa.
- [ ] A taxa de vinculação tem uma definição escrita, com o relógio, as exclusões e o tratamento dos incidentes graves.
- [ ] Uma amostra mensal confere se os artigos vinculados são relevantes para os casos.
- [ ] O encerramento do caso registra "nenhum artigo existia" e "artigo não encontrado" como motivos distintos.
- [ ] O tempo até publicar é relatado como mediana e um percentil alto, com as etapas de rascunho e publicado separadas.
- [ ] Uma janela de revisão é definida para os artigos em uso, mais curta para os mais usados.
- [ ] As principais buscas sem resultado são lidas todo mês e transformadas em itens de backlog.
- [ ] O feedback dos leitores é mostrado com a taxa de resposta, e os comentários dos principais artigos são lidos.
- [ ] A contribuição é relatada só para a equipe, sem listas nominais.
- [ ] Os artigos mais vinculados são revistos todo trimestre como candidatos a correções permanentes.
- [ ] As mudanças de definição são registradas com os motivos.

## Prompts de IA

**Confira se os artigos vinculados servem aos seus casos.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Transforme buscas que falharam em um backlog de escrita.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Projete um conjunto leve de medidas de conhecimento.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados e a barreira de proteção pareada ao acrescentar uma métrica de conhecimento ao seu painel.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de conhecimento traz seu vetor de manipulação, sua barreira de proteção e suas referências cruzadas na forma correta.

## Ideias-chave

- Meça o conhecimento no momento do uso: vinculado na resolução, encontrado por busca, confirmado pelos leitores.
- Pareie a taxa de vinculação com uma amostra humana de relevância, porque um vínculo prova apenas que alguém clicou.
- Reveja a atualidade por uso, pondo o esforço onde um artigo errado induziria ao erro o maior número de casos.
- Trate as buscas que falham e os artigos muito vinculados como sinais para conteúdo novo, melhor nomenclatura ou uma correção permanente.
- Relate a contribuição da equipe e nunca classifique autores.
- Menos artigos, e melhores, muitas vezes indicam uma base mais saudável do que uma base maior.

## Referências e leituras complementares

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Gestão do conhecimento](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Base de conhecimento](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Conhecimento tácito](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Suporte centrado em conhecimento](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Central de serviços](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Fator ônibus](https://en.wikipedia.org/wiki/Bus_factor).
