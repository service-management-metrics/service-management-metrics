# Métricas de análises pós-incidente e aprendizado

**Uma revisão que é escrita, arquivada e esquecida não ensinou nada a ninguém; por isso meça se as revisões acontecem, se são boas, se suas ações terminam e se as mesmas causas deixam de voltar, e mantenha toda a prática sem culpados para que as pessoas continuem dizendo a verdade.**

## Visão geral e motivação

Todo serviço falha às vezes. O que separa uma equipe que melhora de forma constante de uma equipe que repete a sua pior semana é o que acontece nos dias seguintes à falha. Uma [análise pós-incidente (postmortem)](https://en.wikipedia.org/wiki/Postmortem_documentation) é um relato escrito de um incidente ou quase acidente: o que aconteceu, como foi detectado e tratado, que condições o tornaram possível e o que a equipe vai mudar. O ITIL chama a atividade de revisão pós-incidente, e este tópico usa os dois nomes de forma intercambiável. Uma reflexão regular da equipe é um parente próximo que olha o trabalho comum, e não uma interrupção.

Este tópico cobre as medidas que dizem se esse ciclo de aprendizado funciona. Faz quatro perguntas. As revisões que deveriam acontecer realmente acontecem? São boas o bastante para achar algo real? As ações que produzem são concluídas? E a mesma causa continua voltando mesmo assim? Uma quinta pergunta corre por baixo das outras: as pessoas se sentem seguras o bastante para descrever o que realmente aconteceu?

O tópico fica entre dois vizinhos e evita repeti-los. As métricas de incidentes graves (veja o tópico 3.4, Métricas de incidentes graves) medem a pontualidade da revisão e o seguimento de suas ações nos incidentes graves declarados e são o lar dessas duas medidas nesse cenário estreito. As métricas de gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas) são donas do registro de problema, do erro conhecido e do tempo até a correção permanente. Este tópico amplia a visão para todas as severidades de incidente, para os quase acidentes e para as retrospectivas de equipe, e é dono da qualidade do próprio aprendizado: cobertura, profundidade, encerramento de ações em todas as fontes, recorrência das causas e os sinais sem culpados que mantêm os dados honestos.

### Termos usados neste tópico

- **Análise pós-incidente ou revisão pós-incidente:** um exame estruturado e sem culpados de um incidente depois que o serviço é restabelecido, que termina num registro escrito.
- **Quase acidente (near miss):** um evento que poderia ter causado um incidente ou dano mas não causou, por exemplo uma implantação com falha pega em um ambiente de teste ou um alerta que disparou minutos antes de os usuários notarem.
- **Item de ação:** uma mudança específica com uma equipe responsável nomeada, uma data de vencimento e um modo de saber quando está concluída.
- **Fator contribuinte:** uma condição que tornou o incidente possível ou o piorou. A maioria dos incidentes tem vários. Uma única "causa raiz" muitas vezes é uma simplificação, e a [análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis) é mais bem tratada como uma busca de condições, e não de um culpado.
- **Classe de causa:** um rótulo estável de uma lista curta e combinada (por exemplo "limite de capacidade", "deriva de configuração", "monitoramento ausente", "responsabilidade pouco clara") usado para enxergar a recorrência. Descreve uma condição do sistema, nunca uma pessoa.
- **Sem culpados (blameless):** um estilo de revisão que pergunta como o sistema permitiu que uma pessoa razoável agisse como agiu e não pergunta quem punir. É uma prática e está ligada à ideia de uma [cultura justa](https://en.wikipedia.org/wiki/Just_culture), em que os erros honestos são tratados como aprendizado e os atos imprudentes continuam sendo tratados à parte.
- **Information Technology Infrastructure Library (ITIL):** a estrutura amplamente usada para a gestão de serviços de TI (ITSM). Este tópico se refere às práticas como descritas no ITIL 4 (2019), e o livro como um todo está datado de outubro de 2026. Veja [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Como as visões ágil e ITIL diferem

O ITIL contribui com a estrutura. No ITIL 4, a gestão de incidentes restabelece o serviço, a gestão de problemas reduz a probabilidade e o impacto dos incidentes encontrando e gerindo causas, e a melhoria contínua transforma o que se aprende em mudança financiada. A revisão é a dobradiça entre as duas primeiras e a terceira. O ITIL tende a perguntar se a revisão foi feita, se um registro de problema foi aberto onde se justificava e se a melhoria foi registrada.

As tradições [ágil](https://en.wikipedia.org/wiki/Agile_software_development) e de [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) contribuem com hábitos. As revisões são sem culpados, curtas, escritas para leitores além da equipe e amplamente compartilhadas. A reflexão regular da equipe, um hábito de melhoria contínua, pergunta o que mudar a seguir, e a preferência ágil por ajustes pequenos e frequentes substitui o grande programa único de melhoria. O livro *Site Reliability Engineering*, do Google, dedica um capítulo à cultura de análises pós-incidente e argumenta que um processo de revisão só é tão bom quanto a cultura ao redor.

Usadas juntas, as duas visões são fortes. O ITIL dá regras de cobertura e um lugar para a ação viver. Os hábitos ágeis e de SRE dão honestidade e velocidade. Medidas em conjunto, mostram se o ciclo está se fechando.

## Princípios-chave

- **O aprendizado é o produto, não o documento.** Uma revisão teve sucesso quando algo muda no sistema, no processo ou no entendimento compartilhado. Conte a mudança, não a papelada.
- **Ser sem culpados é pré-condição de bons dados.** Se as pessoas temem a culpa, a linha do tempo será rala, os fatores contribuintes serão arrumados demais e o mesmo incidente voltará. Proteja a franqueza antes de medir qualquer outra coisa.
- **Meça o seguimento e a recorrência, não o volume.** O número de revisões diz pouco. A proporção de ações concluídas e a proporção de causas que ficam eliminadas dizem muito.
- **Mantenha as métricas no nível da equipe e do sistema.** Uma revisão trata de condições. Nunca conte revisões, ações ou erros por pessoa e nunca use esses números em conversas de desempenho.
- **Dimensione a revisão.** Nem todo evento merece um documento longo. Defina gatilhos pelo impacto e pelo valor de aprendizado e deixe um evento pequeno ter uma revisão curta.
- **Deixe as ações competirem com honestidade.** Um item de ação é trabalho. Pertence ao mesmo backlog dos outros trabalhos, classificado contra eles, e pode ser recusado com um motivo registrado.
- **Leia as revisões.** Os números localizam o problema. Um humano lendo uma amostra diz se as revisões são boas.

## Definições de métricas

As métricas abaixo descrevem o ciclo de aprendizado de um serviço ou de um grupo de equipes. Cada uma declara o que é contado, onde os relógios começam e param e o que é excluído. As medidas de tempo devem ser mostradas como mediana e um percentil alto (por exemplo, o 85º), com a idade do item aberto mais antigo, e não como média (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura das revisões | Proporção dos eventos qualificados que receberam uma revisão concluída | Eventos qualificados com uma revisão publicada dentro da janela combinada / eventos qualificados encerrados no período. Os eventos qualificados são os que atendem aos gatilhos escritos. Eventos dentro da janela ainda abertos ao fim do período são excluídos. | porcentagem | Registros de incidentes da ferramenta de ITSM cruzados com o repositório de revisões | Gestão de incidentes; gestão de problemas | Reflexão regular da equipe; acordos de trabalho da equipe | Mensal |
| Pontuação de qualidade da revisão | Se uma revisão publicada atende a um padrão escrito curto | Revisões de uma amostra que atendem a pelo menos [número combinado] dos itens da lista de verificação / revisões da amostra. A amostra é um número fixo de revisões sorteadas ao acaso a cada trimestre, pontuadas por alguém de fora da equipe dona. | porcentagem | Amostra trimestral do repositório de revisões com uma planilha de pontuação | Melhoria contínua; gestão de problemas | Definição de pronto de uma revisão | Trimestral |
| Taxa de encerramento das ações | Proporção das ações de revisão concluídas até a data de vencimento | Ações concluídas ou formalmente recusadas (com um motivo) até o vencimento / ações vencendo no período. O relógio começa quando a revisão é publicada e para quando a equipe dona marca a ação como concluída e um revisor confirma. As ações encerradas como "não será feito" são contadas à parte e relatadas. | porcentagem | Backlog da equipe ou registro de melhorias do ITSM, ligado à revisão | Melhoria contínua; gestão de problemas | Backlog da equipe; ações de melhoria | Mensal |
| Idade das ações abertas | Idade das ações de revisão ainda abertas | Para cada ação aberta, hoje menos a data de publicação de sua revisão. Relate a mediana, o 85º percentil e a mais antiga. | dias | Backlog da equipe ou registro de melhorias | Melhoria contínua | Idade do item de trabalho; trabalho em andamento envelhecido | Mensal |
| Taxa de recorrência de causas | Proporção dos eventos cuja classe de causa coincide com a de um evento anterior do mesmo serviço | Eventos no período cuja classe de causa primária coincide com a de uma revisão encerrada nos doze meses anteriores para o mesmo serviço / eventos com classe de causa registrada no período. Eventos sem classe de causa registrada são excluídos e contados à parte. | porcentagem | Campo de classe de causa do repositório de revisões cruzado com os registros de incidentes | Gestão de problemas; gestão de incidentes | Análise de defeitos escapados; temas de retrospectiva | Trimestral |
| Taxa de relato de quase acidentes | Volume de quase acidentes e sinais fracos que as pessoas escolhem relatar | Quase acidentes registrados no período / serviços ativos, mostrados como tendência por serviço e nunca por pessoa. A taxa deve subir no começo de um programa saudável e depois se estabilizar. | contagem por serviço | Registro de quase acidentes, ou um campo etiquetado no rastreador de issues | Gestão de incidentes; gestão de riscos | Verificação de saúde da equipe; quadro de impedimentos | Mensal |
| Alcance do aprendizado | Até onde uma revisão viaja além da equipe que a escreveu | Revisões apresentadas ou discutidas fora da equipe dona (um fórum compartilhado, uma sessão entre equipes ou uma leitura documentada por uma equipe dependente) em até [número combinado] dias da publicação / revisões publicadas no período | porcentagem | Registros de fóruns ou reuniões e o repositório de revisões | Melhoria contínua; gestão do conhecimento | Revisão com partes interessadas; comunidades de prática | Trimestral |
| Carregamento de ações de retrospectiva | Proporção das ações da retrospectiva da equipe que foram concluídas até a retrospectiva seguinte | Ações de retrospectiva concluídas antes da retrospectiva seguinte / ações de retrospectiva combinadas na anterior. Ações deliberadamente abandonadas com um motivo são removidas das duas contagens. | porcentagem | Notas ou quadro da retrospectiva, mantidos no backlog da equipe | Melhoria contínua | Reflexão regular da equipe | Por período de revisão, revisto trimestralmente |
| Pulso de segurança para falar | Se as pessoas acreditam que podem descrever erros sem culpa | Proporção das respostas no nível [combinado] ou acima em um conjunto curto e anônimo de perguntas (por exemplo, "Posso descrever um erro numa revisão sem medo de ser culpado") / respostas recebidas. O pulso só é relatado para grupos grandes o bastante para proteger o anonimato. | porcentagem | Pesquisa de pulso anônima | Melhoria contínua; mudança organizacional | Verificação de saúde da equipe; verificação de segurança psicológica | Trimestral |

Uma revisão está "publicada" quando é visível para os leitores pretendidos, e não salva como rascunho. Uma classe de causa é registrada pelo grupo de revisão a partir da própria revisão, de uma lista curta combinada, e nunca por quem encerrou o ticket.

## Recomendações

### Decida o que merece uma revisão

**1. Escreva os gatilhos e publique-os.** Uma regra como "todo incidente grave, todo incidente das duas severidades mais altas, qualquer evento com perda de dados de clientes e qualquer quase acidente que a equipe julgue instrutivo" elimina a discussão e torna a cobertura mensurável. Sem gatilhos escritos, as revisões seguem o humor e a carga de trabalho, e a cifra de cobertura nada significa.

**2. Dimensione a revisão ao evento.** Um evento pequeno pode ter uma revisão de meia página escrita em trinta minutos, enquanto um incidente grave pode merecer uma linha do tempo completa e uma sessão facilitada. Uma trilha leve mantém alta a cobertura sem fazer da prática um fardo.

### Julgue a qualidade lendo

**3. Amostre e leia revisões todo trimestre.** Sorteie uma pequena amostra e peça a alguém de fora da equipe dona que leia cada uma contra uma lista de verificação curta. Itens úteis incluem uma linha do tempo que mostre as decisões e as informações disponíveis quando foram tomadas, mais de um fator contribuinte, uma descrição do que deu certo, ações com responsáveis e datas e uma linguagem que descreva o sistema e não o indivíduo. Relate a proporção que atende ao padrão e devolva os achados aos redatores como orientação.

**4. Ensine a habilidade de revisar.** O [viés de retrospectiva](https://en.wikipedia.org/wiki/Hindsight_bias) faz os eventos parecerem óbvios depois do fato e empurra os autores para "alguém devia ter notado". Peça aos facilitadores que reconstruam o que as pessoas sabiam em cada momento e use os [cinco porquês](https://en.wikipedia.org/wiki/Five_whys) como um estímulo para perguntas, e não como uma receita para uma única resposta.

### Faça as ações terminarem

**5. Ponha as ações no backlog real.** Uma ação que vive apenas num documento de revisão é invisível para o planejamento. Crie um item de trabalho no rastreador da equipe dona, ligue-o à revisão e deixe-o competir por capacidade como qualquer outro trabalho. Relate o encerramento por equipe e por serviço para que uma ação bloqueada fique visível a quem pode desbloqueá-la.

**6. Permita um "não será feito" honesto e registre por quê.** Algumas ações se revelam caras demais ou não mais relevantes. Encerrá-las com um motivo declarado é mais saudável do que deixá-las abertas por um ano ou marcá-las como feitas sem fazê-las. Relate a proporção recusada, porque uma proporção muito alta sugere que o processo de revisão está propondo ações que ninguém financiará.

**7. Acompanhe a idade das ações abertas, além da taxa de encerramento.** O 85º percentil da idade das ações abertas e a ação aberta mais antiga mostram o que está travado. Reveja as mais antigas na reunião que revê a confiabilidade do serviço.

### Observe as repetições

**8. Mantenha uma lista curta de classes de causa e etiquete toda revisão.** Uma lista de oito a quinze classes basta. Reveja a lista quando mais que uma pequena proporção dos eventos cair numa classe "outros". Etiquetar permite responder "já vimos isto antes?" com dados e alimenta a gestão de problemas com padrões que nenhuma revisão isolada mostra (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 4.6, Dívida técnica e erros conhecidos).

**9. Trate a recorrência como um sinal sobre a ação, não sobre as pessoas.** Quando uma classe de causa volta, pergunte se as ações anteriores foram concluídas, se eram as ações certas e se a classe é ampla demais. A recorrência depois de todas as ações encerradas significa que as ações não funcionaram, o que é uma notícia útil.

### Proteja a honestidade

**10. Mantenha as revisões sem culpados e torne isso visível.** Declare no modelo que a revisão descreve condições e decisões e não atribui culpa, e peça aos líderes que agradeçam os autores pela franqueza. A [segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety), na pesquisa de Amy Edmondson sobre equipes de trabalho, é a crença compartilhada de que a equipe é segura para correr riscos interpessoais (veja o tópico 9.2, Métricas de satisfação e bem-estar).

**11. Recompense os relatos de quase acidentes e leia uma contagem crescente como boa notícia no começo.** Uma equipe que começa a relatar quase acidentes verá a contagem subir, porque os eventos sempre estiveram acontecendo. Diga isso de antemão, acompanhe a proporção dos quase acidentes que produziram uma mudança e publique as histórias com o consentimento da equipe.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura das revisões | Estreitar os gatilhos; rebaixar a severidade para que os eventos fiquem fora deles; arquivar uma "revisão" de uma linha para cumprir tabela | Pontuação de qualidade da revisão; comparar as contagens de severidade dos incidentes com o impacto relatado pelos clientes; auditar os rebaixamentos |
| Pontuação de qualidade da revisão | Escrever para a lista de verificação com texto padronizado; pontuação pela equipe dona; uma amostra previsível | Avaliador externo; amostra aleatória; ler duas revisões em voz alta a cada trimestre; acompanhar se as ações das revisões bem pontuadas terminam |
| Taxa de encerramento das ações | Definir datas de vencimento distantes; dividir ações em pedaços triviais; encerrar ações sem verificação; declarar "não será feito" para limpar a lista | Idade das ações abertas; proporção recusada com motivos; confirmação do revisor de que a mudança funciona; taxa de recorrência de causas |
| Idade das ações abertas | Encerrar e reabrir ou recriar uma ação para zerar sua idade; mover ações para uma lista separada de "ideias" | Ligar as novas ações à revisão de origem e manter a primeira data; contagem de ações movidas para ideias |
| Taxa de recorrência de causas | Registrar classes de causa vagas ou sempre mutáveis para que nada coincida; usar uma classe ampla "outros"; ligar uma repetição a outra classe | Proporção de eventos em "outros"; releitura periódica das revisões por classe; revisão da própria lista de classes |
| Taxa de relato de quase acidentes | Pedir relatos para atingir um número; registrar eventos triviais; ou, no sentido oposto, ler o número como falha e suprimir relatos | Proporção de quase acidentes que levaram a uma mudança; nenhuma meta sobre a contagem; feedback do pulso de segurança para falar |
| Alcance do aprendizado | Acrescentar nomes a uma lista de distribuição; apresentar em sessões pouco frequentadas; contar um link como uma leitura | Presença ou notas reais de discussão; perguntar às equipes dependentes o que mudaram depois da última revisão |
| Carregamento de ações de retrospectiva | Combinar apenas ações triviais e fáceis de terminar; pular a retrospectiva; marcar itens como concluídos | Impacto das ações segundo a avaliação da equipe; taxa de retrospectivas realizadas; se o mesmo tema aparece por várias semanas |
| Pulso de segurança para falar | Pressionar os respondentes; pesquisar só os confiantes; relatar uma média que esconde um grupo de pontuação baixa | Taxa de resposta e mistura de respondentes; tamanho mínimo do grupo; comentários abertos lidos por inteiro; se a linguagem das revisões muda |

Uma leitura saudável mostra revisões para os eventos que importam, um padrão de qualidade que a maioria atende, ações que terminam ou são recusadas com honestidade, um punhado de ações antigas que os líderes sabem nomear, classes de causa que diminuem de frequência depois de tratadas e uma contagem de quase acidentes que subiu e depois se estabilizou. O pulso se mantém estável ou melhora quando acontece um incidente difícil. Um padrão limpo demais é, ele próprio, um sinal para ler uma amostra.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Rever todo incidente | Cobertura completa; nenhuma discussão sobre gatilhos | Pesado; as revisões ficam rasas; as equipes passam a ressentir o processo |
| Rever por gatilhos escritos | Concentra o esforço no impacto e no valor de aprendizado | Os gatilhos precisam de manutenção; eventos limítrofes escapam |
| Etiquetar classes de causa | Encontra padrões entre as revisões | As classes são uma simplificação; as causas reais costumam ser várias coisas ao mesmo tempo |
| Pulso anônimo sobre segurança | Sinal honesto sobre uma pergunta sensível | Grosseiro; equipes pequenas podem ser identificáveis; fadiga de pesquisas |

A resposta pragmática é manter o ciclo curto e os números poucos: gatilhos escritos, uma pequena amostra de qualidade, um rastreador de ações e uma lista de classes de causa, com o pulso de segurança acrescentado quando a equipe confiar no resto. Nenhuma medida aqui prova que o aprendizado aconteceu. Juntas, mostram se as condições para ele estão presentes.

## Perguntas para discutir com sua equipe

**1. Quais dos nossos últimos cinco incidentes receberam uma revisão, e alguém mudou alguma coisa por causa dela?**
Comece pela lista de incidentes, e não pela pasta de revisões, para que as revisões ausentes fiquem visíveis. Para cada revisão, pergunte o que é diferente hoje no sistema ou no processo. Se a resposta é "nada", pergunte por que a revisão foi feita e quem a leu. O facilitador deve registrar as respostas sem julgar, porque mostram se a prática produz mudança ou papelada.

**2. O que tornaria mais difícil alguém dizer a verdade numa revisão aqui?**
Peça exemplos específicos: a reação de um gerente, uma avaliação de desempenho, um escalonamento de cliente, o tom de um e-mail. Convide as pessoas a escrever as respostas anonimamente primeiro. Procurem condições que possam ser mudadas, como quem comparece, quem lê e o que os líderes dizem em voz alta. É a conversa que protege todos os outros números do tópico.

**3. Quais itens de ação estão abertos há mais tempo, e o que os impede?**
Mostrem os cinco mais antigos. Para cada um, perguntem se a ação ainda é a certa, se tem um responsável com capacidade e se deve ser feita, reagendada ou recusada. Mantenham o foco no sistema de trabalho e não no responsável. Combinem uma decisão para cada uma antes do fim da sessão.

**4. Quando o mesmo tipo de problema voltou, e o que isso diz sobre a correção anterior?**
Usem as etiquetas de classe de causa para achar uma repetição e leiam a revisão anterior e suas ações. Perguntem se as ações foram concluídas, se trataram os fatores contribuintes e se a classe foi traçada de forma ampla demais. O objetivo é uma ação melhor, não uma explicação.

**5. Relatamos quase acidentes, e o que acontece quando alguém relata?**
Peça um exemplo recente e rastreie o que se seguiu. Se nada se seguiu, pergunte por que as pessoas relatariam de novo. Se a contagem é baixa, pergunte o que as pessoas temem. O facilitador deve explicar que uma contagem crescente é esperada no começo e combinar como a equipe responderá ao próximo relato, para que relatar pareça valer a pena.

**6. Como saberíamos que uma revisão foi boa se não pudéssemos olhar nenhum número?**
Isso pede à equipe que descreva a qualidade com as próprias palavras. Respostas comuns incluem "alguém de fora da equipe aprendeu algo", "a correção se sustentou" e "o autor não teve medo". Transformem as respostas na lista de verificação da amostra trimestral e revisitem-na depois de dois trimestres.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega escrevem muitas revisões e carregam a maior parte das ações; por isso sentem primeiro o custo de um processo desajeitado. Beneficiam-se de modelos curtos, de uma regra clara de gatilhos e de um vínculo visível entre uma ação e um item do backlog da equipe. A reflexão regular da equipe merece a mesma disciplina de seguimento de uma revisão de incidente, e uma equipe que termina as ações de sua retrospectiva pratica o mesmo hábito em escala menor. Cuidado para que as ações não sejam espremidas pela pressão por funcionalidades e leve essa compensação ao dono do produto com abertura (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

### Equipes de serviço e operações

As equipes de operações guardam as evidências (linhas do tempo, alertas, registros de chat) e estão em melhor posição para etiquetar as classes de causa de forma consistente e para notar uma repetição antes que vire uma interrupção. Precisam de tempo protegido para escrever, já que as revisões escritas no fim de um turno longo são ralas. Liguem cada revisão a qualquer registro de problema que ela alimente (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Liderança e governança

Os líderes definem o tom de cada revisão pelo que perguntam depois. "Quem fez isto?" acaba com as revisões honestas, e "o que aprendemos e o que estamos mudando?" as convida. Os órgãos de governança devem esperar cobertura, qualidade, idade das ações e recorrência na revisão de confiabilidade, financiar as ações que exigem investimento e nunca comparar equipes pelo número de incidentes ou de revisões que têm.

### Clientes e usuários

Os clientes raramente veem a revisão, mas sentem seu resultado: a mesma falha que deixa de voltar e um relato honesto quando volta. Onde os contratos permitirem, publique um resumo em linguagem simples depois de um incidente significativo (veja o tópico 3.4, Métricas de incidentes graves). O contato repetido sobre o mesmo problema é o sinal, do lado do cliente, de que o aprendizado não pegou (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma vitrine voltada ao cliente, um serviço de pagamentos e uma plataforma interna de estoque. Cinco equipes de produto constroem e operam esses serviços, e um pequeno grupo de gestão de serviços mantém o processo de incidentes e de problemas. Os números deste exemplo são ilustrativos.

Em um trimestre, o varejista tem 41 incidentes nas duas severidades mais altas. Os gatilhos escritos qualificam todos para uma revisão, e 36 revisões são publicadas em até dez dias úteis; assim a cobertura das revisões é de cerca de 88%. A liderança fica satisfeita. O grupo de gestão de serviços sorteia uma amostra aleatória de oito revisões, pede a uma equipe de outra área de produto que as pontue e descobre que só três atendem ao padrão combinado. A lacuna comum é que a linha do tempo lista o que aconteceu mas não o que as pessoas sabiam quando tomaram cada decisão, e a seção de fatores contribuintes nomeia uma única causa.

A mesma amostra mostra que, das 74 ações com vencimento no trimestre, 51 foram concluídas até a data, uma taxa de encerramento de cerca de 69%. A ação aberta mais antiga, com 210 dias, é um limiar de alerta de capacidade no banco de dados de pagamentos, adiada por seis semanas seguidas. A etiquetagem de causas mostra "limite de capacidade" em 9 das 36 revisões, 4 delas do serviço de pagamentos. O pulso anônimo, respondido por 58 das 70 pessoas convidadas, é mais baixo no grupo de plantão, onde vários comentários dizem que gerentes seniores fazem perguntas diretas sobre pessoas nomeadas.

A equipe toma três decisões. Primeiro, faz uma sessão curta com os gerentes seniores que comparecem às revisões e combina uma regra: as perguntas na sala são sobre condições e decisões, e qualquer acompanhamento sobre uma pessoa passa pelo líder da equipe. Segundo, põe a ação de capacidade mais antiga no topo da próxima rodada de planejamento da equipe de pagamentos, classificada contra o trabalho de funcionalidades pelo dono do produto, e relata o resultado na revisão de confiabilidade. Terceiro, acrescenta dois itens de lista de verificação ao modelo de revisão (o que as pessoas sabiam em cada decisão e pelo menos dois fatores contribuintes) e faz uma sessão de orientação para os redatores usando uma revisão anonimizada.

O risco de manipulação aparece no trimestre seguinte. A cobertura das revisões sobe para 97%, mas a proporção de revisões com menos de 300 palavras dobra, e algumas equipes rebaixaram incidentes da severidade dois para a três, logo abaixo do gatilho. A amostra de qualidade e uma auditoria das mudanças de severidade pegam o caso. O grupo pergunta por que os rebaixamentos aconteceram, descobre que as equipes sentiam a revisão como punição e relaxa a expectativa de extensão para eventos pequenos, mantendo o gatilho da severidade dois.

## Ágil, IA, automação e análise

### Ágil

As revisões funcionam melhor como um hábito regular com as partes interessadas, em que as ações vão para o mesmo backlog dos outros trabalhos. O cuidado é que uma meta de número de revisões produz revisões escritas para um modelo, sem aprendizado.

### IA

A IA pode redigir linhas do tempo e resumos de uma revisão, o que eleva a cobertura e a velocidade. Pareie a cobertura das revisões com uma checagem de qualidade feita por uma pessoa e com a taxa de recorrência de causas e rotule as seções redigidas por IA. O cuidado é que a IA pode suavizar a incerteza ou atribuir culpa na redação; por isso um humano é dono do relato final, sem culpados.

### Automação

Automatize a captura da linha do tempo e os lembretes de ações e meça quantos lembretes levam ao encerramento. O cuidado é que a cobrança automática sem acordo do responsável vira ruído.

### Análise

Acompanhe a idade das ações e a recorrência em uma janela longa, com contagens. A decisão informada é qual aprendizado está de fato mudando o sistema. O cuidado é que as taxas de recorrência são lentas e de amostra pequena; por isso evite conclusões de curto prazo.

## Olhar setorial

**Startup.** Uma equipe pequena aprende depressa porque todos estiveram no incidente. O risco é que nada seja escrito e a lição saia com a próxima pessoa contratada. Mantenha um modelo de uma página, faça uma revisão para tudo o que acorda alguém à noite e acompanhe apenas o encerramento das ações e as causas repetidas. Proteja a franqueza fazendo os fundadores lerem as revisões sem comentários sobre indivíduos.

**Pequena empresa.** A pessoa que corrigiu o problema muitas vezes é a única que o entende. Use um modelo breve e reveja a ação aberta mais antiga todo mês.

**Grande empresa.** Padronize o modelo, o gatilho e a lista de classes de causa e deixe as equipes ajustarem a profundidade. Ofereça um lugar pesquisável para as revisões, um fórum entre equipes e um avaliador externo. Cuidado com tabelas de classificação de equipes por número de incidentes ou de revisões, já que punem a transparência.

**Governo e setor público.** As revisões podem enfrentar deveres legais, auditoria ou pedidos de acesso à informação, o que deixa os autores cautelosos. Separe a revisão de aprendizado de qualquer relatório formal para fiscalização e registre as ações bloqueadas com sua dependência (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo desta prática é sobretudo tempo. Os autores gastam horas em cada revisão e muita gente gasta uma hora numa sessão. Uma amostra trimestral de qualidade toma algumas horas de um leitor externo. A etiquetagem de causas e o acompanhamento de ações precisam de um pouco de ferramental, que pode ser uma planilha e um campo nas ferramentas existentes de tickets e de backlog. Há um custo maior e menos visível no comportamento da liderança, porque o programa fracassa se os líderes reagem mal a revisões francas.

O retorno vem de causas que deixam de se repetir e de incidentes mais curtos porque a equipe já viu algo parecido. Menos incidentes repetidos liberam capacidade de engenharia e de operações, reduzem escalonamentos e baixam o custo da interrupção para os clientes. Uma biblioteca compartilhada de revisões encurta a curva de aprendizado de novos funcionários e reduz a dependência de poucas pessoas experientes. Não cite uma porcentagem de outra organização. Meça a sua própria linha de base de recorrência de causas, idade das ações abertas e contatos repetidos antes de começar e compare depois de dois ou três trimestres.

O limite honesto é que o aprendizado é difícil de atribuir: uma queda na recorrência pode vir de uma revisão melhor, de uma mudança de arquitetura não relacionada ou de sorte. Para um tratamento mais amplo, veja o tópico 7.7, Retorno do investimento e business case.

## Antipadrões e armadilhas

- **Teatro de revisões.** As revisões cumprem uma regra e ninguém as lê. Em vez disso, amostre e leia as revisões e julgue-as pela mudança que produziram.
- **Uma busca da causa raiz como uma pessoa.** A revisão nomeia um erro individual e para. Em vez disso, pergunte o que tornou o erro provável e liste vários fatores contribuintes.
- **Inflação de ações.** As revisões produzem listas longas que a equipe não consegue financiar. Em vez disso, limite cada revisão a poucas ações classificadas e recuse o resto com um motivo.
- **Ações fora do backlog.** Vivem em um documento e nunca são planejadas. Em vez disso, crie itens de trabalho no rastreador da equipe dona e ligue-os à revisão.
- **Encerramento sem verificação.** A ação é marcada como feita e a causa volta. Em vez disso, peça a um revisor que confirme que a mudança funciona e observe a classe de causa quanto à recorrência.
- **Usar contagens para comparar equipes.** Uma equipe com mais revisões ou quase acidentes parece pior. Em vez disso, leia uma contagem alta como abertura e compare cada equipe com o próprio histórico.
- **Punir o mensageiro.** Um líder questiona uma pessoa depois de uma revisão franca. Em vez disso, combine uma norma para a resposta dos líderes e confira o pulso depois de incidentes difíceis.
- **Tratar as métricas como prova de aprendizado.** Um painel limpo é tomado como evidência de que a organização está aprendendo. Em vez disso, continue lendo uma amostra de revisões e perguntando às pessoas que as escreveram.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Gatilhos e cobertura | As revisões dependem de quem está disponível e de quão ruim pareceu | Algumas equipes fazem revisões de incidentes sérios | Gatilhos escritos e um modelo comum; cobertura contada por severidade | Cobertura acompanhada ao longo do tempo e auditada contra rebaixamentos; trilhas leve e completa | Gatilhos adaptados com clientes e fornecedores; revisões compartilhadas para incidentes conjuntos |
| Qualidade e honestidade | As revisões nomeiam uma pessoa ou uma causa única | Algumas equipes escrevem revisões sem culpados | Padrão de lista de verificação; linguagem sem culpados esperada | Amostra externa trimestral; pulso revisto; orientação para os redatores | Revisões escritas em conjunto com fornecedores e usuários; a leitura entre equipes é rotina |
| Ações e recorrência | As ações vivem em documentos e raramente terminam | Ações acompanhadas por algumas equipes; o encerramento varia | Ações no backlog real com responsáveis, datas e recusa honesta | Encerramento, idade e recorrência de causas revistos, com melhoria financiada | Ações coordenadas entre equipes e fornecedores; classes de causa revistas conforme os padrões mudam |
| Compartilhamento e aprendizado | As lições ficam com a equipe | Revisões publicadas para a equipe | Revisões pesquisáveis e compartilhadas em um fórum regular | Alcance medido; equipes dependentes relatam as mudanças feitas | O aprendizado flui para o projeto, a integração e os contratos com fornecedores |

## Lista de verificação

- [ ] Gatilhos escritos dizem quais eventos recebem uma revisão, incluindo quase acidentes de alto valor de aprendizado.
- [ ] Existe um modelo curto, com uma trilha leve para eventos pequenos.
- [ ] As revisões são sem culpados pelo modelo e pelo comportamento da liderança.
- [ ] Toda ação é um item de trabalho no backlog da equipe dona, com um responsável e uma data.
- [ ] As ações podem ser recusadas, e o motivo é registrado e relatado.
- [ ] Existe uma lista curta de classes de causa, e toda revisão é etiquetada.
- [ ] Um leitor externo pontua uma amostra aleatória de revisões a cada trimestre.
- [ ] As ações abertas mais antigas são revistas junto com a confiabilidade do serviço.
- [ ] A idade das ações abertas é relatada como mediana, um percentil alto e a mais antiga.
- [ ] Existe uma rota para quase acidentes, e a equipe sabe o que acontece depois de um relato.
- [ ] Nenhuma métrica deste tópico é relatada ou usada por pessoa.
- [ ] Um pulso de segurança para falar é feito apenas para grupos grandes o bastante para proteger o anonimato.

## Prompts de IA

**Revise o rascunho de uma análise pós-incidente quanto à qualidade.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgment, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Proponha classes de causa a partir de revisões passadas.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Analise os itens de ação abertos em busca de padrões de estagnação.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico correspondente, as definições e a barreira de proteção pareada de uma métrica de revisão ou de aprendizado que você está prestes a relatar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de aprendizado revista ainda traz seus relógios, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Uma revisão vale o que muda; por isso meça a cobertura, a qualidade, o encerramento das ações e a recorrência das causas e leia uma amostra das próprias revisões.
- Ser sem culpados é a pré-condição de dados honestos, e os líderes o protegem pelo modo como respondem a uma revisão franca.
- Ponha as ações no backlog real, limite seu número, permita a recusa honesta e observe a idade das mais antigas.
- Etiquete as revisões com uma lista curta de classes de causa para que as causas repetidas fiquem visíveis e alimentem a gestão de problemas.
- Leia uma contagem crescente de quase acidentes como sinal de abertura no começo e nunca classifique pessoas ou equipes por volume de revisões.
- Pareie todo número aqui com uma barreira de proteção, porque o ciclo de aprendizado é, ele próprio, uma meta que pode ser manipulada.

## Referências e leituras complementares

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Documentação post-mortem](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Cultura justa](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Viés retrospectivo](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Cinco porquês](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Segurança psicológica](https://en.wikipedia.org/wiki/Psychological_safety).
