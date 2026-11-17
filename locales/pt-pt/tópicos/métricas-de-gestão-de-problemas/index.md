# Métricas de gestão de problemas

**As métricas de gestão de problemas mostram se uma equipe está removendo as causas dos seus incidentes ou apenas reparando os sintomas; por isso meça quantas causas são encontradas, com que rapidez são corrigidas de vez e se os mesmos incidentes voltam.**

## Visão geral e motivação

Uma equipe que restabelece o serviço depressa ainda pode estar presa numa esteira. A mesma falha volta a cada poucas semanas, as mesmas pessoas são acionadas e os números de incidentes parecem saudáveis porque cada reparo é rápido. A gestão de problemas é a prática que sai da esteira. Ela olha por cima dos incidentes, encontra a causa subjacente e consegue que essa causa seja removida ou contida. Este tópico cobre os números que dizem se esse trabalho está acontecendo e se está funcionando.

Quatro termos sustentam o tópico. Um **incidente** é uma interrupção não planejada de um serviço ou uma redução da sua qualidade, como a estrutura [ITIL](https://en.wikipedia.org/wiki/ITIL) usa a palavra (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes). Um **problema** é a causa subjacente, ou suspeita, de um ou mais incidentes. Um **erro conhecido** é um problema cuja causa é compreendida e para o qual um contorno está registrado, guardado em uma [base de erros conhecidos](https://en.wikipedia.org/wiki/Known_error_database) para que a próxima pessoa que encontrar o sintoma possa achá-lo. Um [contorno](https://en.wikipedia.org/wiki/Workaround) reduz ou evita o impacto de um incidente ou problema sem remover sua causa. A correção permanente é a mudança que remove a causa.

Encontrar a causa é o trabalho da [análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis). As técnicas comuns incluem os [cinco porquês](https://en.wikipedia.org/wiki/Five_whys), o [diagrama de Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) e o [gráfico de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), que classifica as causas por frequência ou por dano. Os sistemas complexos muitas vezes têm várias causas contribuintes e nenhum culpado único; por isso um bom registro de problema nomeia os fatores que, uma vez removidos, fazem a recorrência parar, e diz quão confiante a equipe está.

As métricas importam porque a gestão de problemas tem uma armadilha de relato embutida. Abrir um registro de problema é fácil e dá sensação de produtividade. Encerrar um também é fácil, já que um registro pode ser encerrado com uma nota. Nenhum dos dois eventos mostra que algo melhorou para os usuários. As medidas que valem a pena acompanhar estão mais adiante: se os incidentes ligados a um problema deixam de se repetir, se os erros conhecidos são de fato usados por quem está de plantão e quanto tempo uma causa diagnosticada espera por sua correção.

As visões ITIL e ágil se encontram aqui sem muito atrito. No ITIL 4, a gestão de problemas é uma prática dentro do sistema de valor de serviço, próxima da gestão de incidentes, da habilitação de mudanças e da gestão do conhecimento. Sua contrapartida ágil é o fluxo de pequenas correções baseadas em evidências que passam pelo [backlog](https://en.wikipedia.org/wiki/Backlog) de uma equipe, a retrospectiva que enxerga um padrão e o hábito de tratar o trabalho de confiabilidade como trabalho de produto comum. Onde a visão do ITIL enfatiza registros, responsabilidade e o erro conhecido, a visão ágil enfatiza lotes pequenos e feedback rápido. Ambas querem menos incidentes repetidos, e esse resultado é a medida a manter diante de todos.

Este tópico não repete os relógios de incidentes (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes) nem as medidas de incidentes graves (veja o tópico 3.4, Métricas de incidentes graves) e trata o seguimento das revisões apenas onde alimenta problemas (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado). O backlog de erros conhecidos e a ideia mais ampla de [dívida técnica](https://en.wikipedia.org/wiki/Technical_debt) são tratados no tópico 4.6, Dívida técnica e erros conhecidos. Aqui o foco é o registro de problema e os resultados que ele produz. As medidas de recuperação e de falha baseadas em implantação ficam no tópico 2.8, Métricas DORA.

## Princípios-chave

- **Meça a recorrência, não a papelada.** O teste da gestão de problemas é que os incidentes ligados deixem de voltar. As contagens de registros abertos e encerrados descrevem atividade e dizem pouco sobre o resultado.
- **Separe três momentos.** Detectar que existe um padrão, identificar sua causa e remover a causa são eventos diferentes, com relógios e responsáveis diferentes. Fundi-los esconde onde está o atraso.
- **Um contorno é uma etapa, não um fim.** Registre-o, use-o e acompanhe por quanto tempo permanece a única proteção. Um contorno que dura anos é dívida com um responsável que ninguém sabe nomear.
- **Ponha a correção onde está o trabalho.** Uma correção permanente costuma chegar como uma mudança ou um item de backlog de uma equipe de produto. Meça-a no fluxo da própria equipe e mostre-a à equipe dona do serviço.
- **Ligue incidentes a problemas na origem.** Toda medida aqui depende do vínculo entre um incidente e um problema. Se o vínculo é fraco, os números são fracos.
- **Prefira distribuições e coortes a médias.** As durações dos problemas são longas e assimétricas, e poucos registros antigos dominam qualquer média (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- **Descreva equipes e serviços, nunca pessoas.** Os problemas são propriedades do sistema. Uma tabela de problemas encerrados por analista transforma uma investigação em cota.

## Definições de métricas

Todos os relógios usam os carimbos de tempo do registro do problema, dos registros de incidentes vinculados e da mudança ou do item de backlog vinculado. Salvo indicação em contrário numa linha, os problemas são contados por serviço e por equipe responsável, e os registros mesclados ou duplicados são excluídos. Os percentis são preferidos às médias em toda duração. Os números do exemplo deste tópico são ilustrativos.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problemas abertos e encerrados | Fluxo de registros de problemas que entram e saem do estado aberto, por serviço | Contagem de abertos no período e contagem de encerrados no período, cada uma por código de encerramento (corrigido, risco aceito, duplicado, não reproduzível); as duplicatas são mostradas mas excluídas da contagem de "corrigidos" | contagem por período | Registros de problemas do ITSM | Gestão de problemas | Entrada e vazão do backlog | Mensal |
| Idade do backlog de problemas | Há quanto tempo os problemas abertos esperam | Para cada problema aberto, data do instantâneo menos a data de criação do registro; relate a mediana e o 85º percentil dos problemas abertos e o mais antigo, por prioridade | dias | Registros de problemas do ITSM | Gestão de problemas | Idade do item de trabalho no quadro | Mensal |
| Taxa de vínculo entre incidente e problema | Proporção dos incidentes que apontam para um problema ou erro conhecido onde se espera um | Incidentes no período com um problema ou erro conhecido vinculado / incidentes no período com prioridade alta ou acima, ou reabertos, ou em uma categoria de repetição; incidentes encerrados como erro do usuário ou duplicatas são excluídos | porcentagem | Registros de incidentes e de problemas do ITSM | Gestão de incidentes; gestão de problemas | Identificação de padrões na retrospectiva | Mensal |
| Tempo até a causa raiz | Quanto tempo um problema diagnosticado leva para chegar a uma causa registrada | O relógio começa quando o registro do problema é criado e para quando a causa é registrada e uma segunda pessoa a revisou; problemas encerrados sem causa são excluídos e contados à parte; relate a mediana e o 85º percentil | dias | Registros de problemas do ITSM e sua trilha de auditoria | Gestão de problemas | Spike ou investigação com tempo limitado | Mensal |
| Taxa de reutilização de erros conhecidos | Com que frequência um erro conhecido é usado quando chega um incidente | Incidentes resolvidos com um erro conhecido ou seu contorno vinculado / incidentes no período cujo sintoma corresponde a um erro conhecido que existia na época; incidentes sem erro conhecido correspondente são excluídos | porcentagem | Vínculos de incidentes do ITSM; uso de artigos de conhecimento | Gestão do conhecimento; gestão de problemas | Uso de runbook ou playbook da equipe | Mensal |
| Tempo até a correção permanente | Por quanto tempo um problema fica exposto do diagnóstico até a correção em execução em produção | O relógio começa quando a causa é registrada e para quando a mudança de correção vinculada é implementada e confirmada; problemas encerrados como risco aceito são excluídos e contados à parte; relate a mediana e o 85º percentil | dias | Registros de problemas; registros de mudanças ou eventos de implantação do pipeline | Gestão de problemas; habilitação de mudanças | Tempo de ciclo do item de correção | Mensal |
| Taxa de recorrência pós-correção | Proporção dos problemas corrigidos cujos sintomas ligados voltaram | Problemas encerrados como corrigidos em um trimestre de coorte com um novo incidente correspondente em até 90 dias depois de a correção entrar no ar / problemas encerrados como corrigidos naquele trimestre; a janela de 90 dias é um exemplo e é declarada no gráfico | porcentagem | Registros de incidentes e de problemas do ITSM; eventos de implantação | Gestão de problemas; melhoria contínua | Defeito escapado ou taxa de regressão | Trimestral |
| Parcela apenas com contorno | Proporção dos problemas conhecidos protegidos apenas por um contorno | Problemas abertos no estado de erro conhecido sem correção agendada / problemas abertos no estado de erro conhecido; problemas de risco aceito com responsável nomeado e data de revisão são mostrados como grupo à parte | porcentagem | Registros de problemas do ITSM | Gestão de problemas; gestão de riscos | Registro de dívida técnica | Mensal |

A janela de 90 dias, a regra de correspondência de sintomas e a definição de "esperado" na taxa de vínculo são exemplos. A equipe escolhe valores que se ajustem aos seus serviços e os escreve no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas). Contar os problemas encerrados como "corrigidos" separadamente dos outros códigos de encerramento mantém honesto o par de abertos e encerrados.

## Recomendações

### Decida o que conta como problema

**1. Abra um problema com base em evidências e diga quais são.** Bons gatilhos são incidentes repetidos do mesmo sintoma, um incidente grave de causa desconhecida, uma tendência encontrada numa revisão ou um risco percebido antes de qualquer incidente. Escreva o gatilho no registro, por exemplo "cinco incidentes em seis semanas ligados ao mesmo serviço". Se todo incidente incomum vira um registro de problema, o backlog se enche de ruído e ninguém o lê.

**2. Use um conjunto pequeno e compartilhado de códigos de encerramento.** Corrigido, risco aceito, duplicado, não reproduzível e mesclado bastam para a maioria das equipes. Cada código tem um significado de uma frase e um responsável que pode usá-lo. A mistura dos códigos de encerramento é mais informativa do que a contagem de encerrados, porque mostra quanto trabalho removeu uma causa e quanto terminou sem uma mudança.

### Ligue incidentes e problemas na origem

**3. Faça do vínculo um passo do encerramento do incidente.** Peça a quem resolve que vincule o incidente a um problema, a um erro conhecido ou a "nada encontrado" antes de encerrá-lo. Ofereça sugestões de correspondência da ferramenta quando ela puder e deixe uma pessoa decidir. Um vínculo feito semanas depois num esforço em massa não é confiável (veja o tópico 1.5, Fontes de dados e instrumentação).

**4. Combine como os sintomas são casados.** A recorrência depende de decidir quando dois incidentes são "o mesmo". Uma taxonomia curta de causas e sintomas, com definições e exemplos, é melhor que texto livre. Reveja uma amostra de correspondências todo trimestre, já que os erros de correspondência nos dois sentidos enviesam a taxa de recorrência.

**5. Deixe a revisão de padrões alimentar a lista de problemas.** Uma revisão mensal das categorias de incidentes, por serviço e por [gráfico de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), mostra quais poucas causas produzem a maior parte da dor. Use a revisão para abrir problemas e priorizá-los e envie para a mesma lista as causas repetidas das revisões de incidentes graves (veja o tópico 3.2, Volume e prioridade de incidentes).

### Meça os três atrasos

**6. Cronometre as etapas separadamente.** Meça da criação do registro até a causa registrada e da causa registrada até a correção em execução em produção. O primeiro atraso aponta para a capacidade de investigação, o acesso a dados e a habilidade. O segundo aponta para a priorização, o processo de mudança e o trabalho de funcionalidades concorrente. Um único "tempo para encerrar um problema" os mistura e não dá a ninguém uma ação clara.

**7. Relate os antigos.** Mostre a mediana e o 85º percentil da idade dos problemas abertos e liste os mais antigos por serviço. Poucos registros com anos de idade moverão uma média e dirão pouco, enquanto a lista dos mais antigos convida a uma decisão: corrigir, aceitar o risco com um responsável nomeado e uma data de revisão ou encerrar com um motivo.

### Ponha a correção no fluxo normal

**8. Trate uma correção permanente como um item de backlog com responsável e data.** Ligue o problema à mudança ou ao item de trabalho que leva a correção e mostre a correção no mesmo quadro do trabalho de funcionalidades. Priorize com uma regra combinada, como pesar o custo dos incidentes recorrentes contra o esforço de corrigir. Onde uma correção exige uma mudança, o caminho de mudança padrão deve ser rápido para correções de baixo risco (veja o tópico 4.3, Métricas de habilitação de mudanças).

**9. Peça o contorno e a data de saída juntos.** Um contorno compra tempo. Registre-o como erro conhecido, teste que a equipe de plantão consegue achá-lo e executá-lo e defina uma data de revisão para a correção. A parcela apenas com contorno passa então a ser uma lista de decisões, e não uma pilha silenciosa de dívida (veja o tópico 4.6, Dívida técnica e erros conhecidos).

### Confira se as correções funcionaram

**10. Siga toda correção com uma janela de recorrência.** Depois que uma correção entra no ar, observe incidentes correspondentes durante uma janela declarada e relate por coorte trimestral a proporção das correções que se sustentaram. A recorrência é o que há de mais próximo de uma medida de resultado nesta prática. Se ela é alta, pergunte se a causa foi encontrada ou só uma contribuinte, e reabra a análise.

**11. Meça a reutilização de erros conhecidos onde os responsáveis trabalham.** Conte com que frequência um erro conhecido ou seu contorno é usado quando chega um incidente correspondente. Uma taxa de reutilização baixa com muitos erros conhecidos costuma significar que as entradas são difíceis de achar, estão desatualizadas ou foram escritas para o analista e não para quem responde. Corrija o artigo e seu posicionamento antes de acrescentar mais deles (veja o tópico 3.6, Métricas de gestão do conhecimento).

### Mantenha os números honestos

**12. Mostre coortes e ressalvas ao lado de todo gráfico.** Registre no próprio gráfico as definições, a mistura de códigos de encerramento e qualquer mudança de regra. As coortes trimestrais de problemas corrigidos mostram a recorrência sem misturar trabalho antigo e novo. Pareie toda contagem com uma medida de resultado para que nenhum número fique sozinho (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Problemas abertos e encerrados | Abrir muitos registros triviais; dividir um problema em vários; encerrar registros como duplicados ou "não reproduzíveis" para limpar a lista | Mistura de códigos de encerramento; taxa de recorrência pós-correção; uma amostra de registros encerrados lida todo trimestre |
| Idade do backlog de problemas | Encerrar os registros mais antigos sem correção; reabrir como novo registro para zerar o relógio; reclassificar um problema como requisição | Ligar os novos registros aos originais e relatar a idade a partir do primeiro registro; lista de encerramentos por motivo; revisão dos riscos aceitos |
| Taxa de vínculo entre incidente e problema | Vincular todo incidente a um problema vago e genérico para elevar a taxa | Proporção de vínculos que apontam para os cinco maiores problemas; amostra de vínculos conferida quanto à correspondência real; recorrência dos sintomas vinculados |
| Tempo até a causa raiz | Registrar uma causa rápida e rasa para parar o relógio; nomear "erro humano"; pular o segundo revisor | Taxa de recorrência pós-correção; a taxonomia de causas, sem aceitar "erro humano" sozinho; revisão de uma amostra de causas contra as evidências |
| Taxa de reutilização de erros conhecidos | Contar um vínculo acrescentado depois que o incidente encerrou; acrescentar um erro conhecido a todo incidente de um serviço | Tempo entre o encerramento do incidente e o vínculo; feedback de quem responde sobre se a entrada ajudou; revisão das entradas não usadas em 90 dias |
| Tempo até a correção permanente | Marcar a mudança como implementada antes de a correção ser verificada; encerrar como risco aceito para evitar o trabalho | Taxa de recorrência pós-correção; lista de riscos aceitos com responsável e data de revisão; etapa de verificação antes de o relógio parar |
| Taxa de recorrência pós-correção | Definir os sintomas de forma estreita para que as recorrências não correspondam; alargar a janela de encerramento para que as correções caiam em coortes anteriores; atrasar o vínculo | Taxonomia de causas revista por alguém de fora da equipe dona; taxa de vínculo de incidentes; janela fixa declarada de antemão |
| Parcela apenas com contorno | Agendar uma correção de fachada sem data real; mover problemas para risco aceito; reduzir a prioridade do problema | Idade das correções agendadas que escorregaram; lista de riscos aceitos revista com um executivo responsável nomeado; custo dos incidentes repetidos por problema |

Uma leitura saudável parece tranquila e um pouco monótona. As contagens de abertos e encerrados andam mais ou menos juntas, os problemas abertos mais antigos têm cada um uma decisão registrada, a proporção das correções que se sustentaram é alta e as linhas das coortes são estáveis, e os erros conhecidos são usados pelas pessoas que encontram os sintomas. O padrão de alerta é uma longa e arrumada contagem de encerrados ao lado de incidentes que continuam voltando. Quando os números de atividade parecem excelentes e os usuários ainda enfrentam a mesma falha, confie nos usuários.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Registros formais de problemas para incidentes recorrentes e graves | Responsável, histórico e vínculo com as correções claros; apoia a auditoria | Sobrecarga de processo; registros podem ficar obsoletos |
| Corrigir causas no backlog da equipe sem registro de problema | Rápido, leve, próximo do trabalho | Padrões entre equipes passam despercebidos; nenhum erro conhecido compartilhado |
| Códigos de encerramento estritos e coortes trimestrais | Visão honesta do resultado; resiste a contagens arrumadas | Mais lento de ler; exige disciplina na entrada de dados |
| Contar problemas encerrados como meta | Fácil de explicar e de plotar | Convida a encerrar pela contagem; premia problemas pequenos |
| Acompanhar a recorrência dos problemas corrigidos | O que há de mais próximo para saber se funcionou | Exige boa correspondência de sintomas e uma janela longa o bastante |
| Acompanhar a reutilização dos erros conhecidos | Mostra se o conhecimento está ajudando quem responde | Depende de quem responde vincular a entrada; pode ser manipulado |

As equipes que corrigem causas depressa dentro do próprio backlog ainda devem registrar a causa onde a organização mais ampla possa vê-la, para que outra equipe que encontre o mesmo sintoma se beneficie. Invista primeiro no vínculo entre incidentes e problemas e na janela de recorrência. Essas duas peças tornam interpretável toda outra medida.

## Perguntas para discutir com sua equipe

**1. Quais três incidentes mais reparamos no último trimestre, e o que nos impediu de corrigir a causa deles?**
Liste os incidentes repetidos da central de serviços ou da ferramenta de incidentes e ordene por número de ocorrências. Para cada um, pergunte qual foi o obstáculo: falta de tempo de investigação, nenhuma causa combinada, uma correção disputando com funcionalidades ou uma correção que exige outra equipe. O facilitador deve procurar obstáculos que se repetem entre os três, porque apontam para uma correção de sistema e não técnica.

**2. Quando vinculamos um incidente a um problema, quem faz isso, quando e como sabemos que é o problema certo?**
Percorram um incidente recente do encerramento ao vínculo. Notem se o vínculo é feito durante o incidente, no encerramento ou numa limpeza posterior. Revejam juntos uma pequena amostra de vínculos quanto a correspondências verdadeiras. Combinem uma mudança que torne o vínculo mais fácil ou mais confiável.

**3. Quanto tempo uma causa diagnosticada espera por sua correção, e quem decide a ordem?**
Pegue os problemas com causa registrada e olhe o tempo desde o diagnóstico. Pergunte quem os prioriza e que regra usa. A discussão muitas vezes mostra que o atraso é uma fila na frente do backlog de produto e não uma dificuldade técnica. Combinem como as correções de problemas são comparadas ao trabalho de funcionalidades.

**4. Quais são os nossos contornos mais antigos, e o que perderíamos se os mantivéssemos por mais um ano?**
Nomeie os três contornos de vida mais longa e o que custam em esforço manual, risco e no conhecimento das pessoas que ainda se lembram deles. Pergunte o que aconteceria se a pessoa que conhece o contorno estivesse ausente. Decida para cada um se vai corrigi-lo, aceitar o risco com responsável e data de revisão ou aposentar o serviço.

**5. Se um problema corrigido volta, ficamos sabendo, e com que rapidez?**
Pergunte como um sintoma que retorna seria notado e quem reabriria a análise. Discutam se a janela de recorrência é longa o bastante para o tipo de falha em questão. O facilitador deve ajudar o grupo a combinar uma janela e uma regra de correspondência e a decidir qual equipe revê as correspondências, para que a equipe dona não avalie o próprio trabalho.

**6. As pessoas de plantão usam os nossos erros conhecidos, e o que as faria recorrer a um?**
Pergunte a quem responde quando buscou um erro conhecido pela última vez e o que encontrou. Olhem onde as entradas vivem, como são intituladas e se dizem o que fazer primeiro. Escolham uma entrada para reescrever com uma pessoa de plantão e testem-na na próxima semana de plantão.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas da maioria das correções permanentes e sentem a atração do trabalho de funcionalidades. Ganham ao ver o custo de incidentes de uma falha recorrente ao lado do esforço de corrigi-la e ao ter um lugar claro no backlog para os itens de correção. Devem resistir a tratar o trabalho de problemas como interrupção e reservar uma parcela visível da capacidade para ele. A retrospectiva é um lugar natural para enxergar padrões e abrir problemas (veja o tópico 2.1, Medidas de fluxo).

### Equipes de serviço e operações

As equipes de operações veem primeiro os sintomas repetidos e arcam com o custo em acionamentos e trabalho manual. Mantêm os registros de problemas e de erros conhecidos, conduzem a revisão de padrões e conferem se os vínculos são feitos. O risco delas é gastar esforço com registros em vez de remover causas. Devem manter pequenos os códigos de encerramento, fazer do erro conhecido a primeira coisa que quem responde vê e entregar as correções à equipe dona com as evidências anexadas.

### Liderança e governança

Os líderes decidem se o trabalho de confiabilidade vence as funcionalidades e definem os incentivos para o que é registrado. Devem pedir a recorrência por coorte e os problemas abertos mais antigos antes de pedir contagens e tratar o risco aceito como uma decisão que exige responsável nomeado e data de revisão. Relatar um backlog em queda sem recorrência premia o encerramento. A governança deve olhar tendências e decisões, e não uma tabela de classificação de equipes (veja o tópico 4.6, Dívida técnica e erros conhecidos).

### Clientes e usuários

Os usuários julgam a gestão de problemas por uma coisa: a mesma coisa continua dando errado? Não veem os registros de problemas e não se importam com quantos foram encerrados. Onde os acordos permitirem, conte aos clientes sobre um problema conhecido, o contorno e a data prevista para a correção e depois relate quando ela chegar. Uma correção anunciada e entregue constrói mais confiança do que uma silenciosa.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional atende um aplicativo de agendamento clínico usado pelas alas e pelos ambulatórios. Uma equipe de produto constrói e opera o aplicativo, uma equipe de infraestrutura opera a plataforma e uma central de serviços atende os chamados. Todos os números deste exemplo são ilustrativos.

Em uma revisão trimestral, o chefe do departamento nota que o painel de problemas parece excelente: 46 problemas encerrados contra 31 abertos, e o problema aberto mais antigo tem 140 dias. Os gerentes de ala ainda reclamam que a tela de agendamento trava na troca de turno. O dono do serviço pede a taxa de vínculo entre incidente e problema e a taxa de recorrência pós-correção, que ainda não estão no painel.

Os dados contam outra história. A mistura de códigos de encerramento mostra que 22 dos 46 encerramentos foram "não reproduzível" ou "duplicado". A taxa de vínculo para incidentes de alta prioridade é de 38%. Os incidentes de travamento foram registrados em quatro categorias, de modo que nenhum padrão era visível. Depois que uma amostra de 30 incidentes foi revinculada à mão, 17 deles apontavam para uma só causa: um bloqueio de banco de dados mantido por um job noturno que invadia o turno da manhã. A recorrência dos problemas corrigidos no trimestre anterior foi de 27%, mais alta do que alguém esperava.

A equipe toma três decisões. Primeiro, a taxonomia de causas e sintomas ganha uma entrada "travamento do agendamento", e vincular um problema ou "nada encontrado" passa a ser um passo obrigatório no encerramento do incidente. Segundo, o problema do job noturno sai do backlog da infraestrutura para o quadro da equipe de produto, com um responsável e uma data-alvo, e um contorno (uma reinicialização agendada após o job) é registrado como erro conhecido e testado com a central de serviços. Terceiro, o painel troca a contagem de encerrados por três números: a proporção das correções que se sustentaram após 90 dias, a mediana e o 85º percentil do tempo da causa registrada até a correção e os problemas abertos mais antigos com suas decisões.

Oito semanas depois, o bloqueio é removido por uma mudança no job. Os incidentes da categoria de travamento caem de cerca de nove por mês para dois, e a reutilização de erros conhecidos sobe para 71% nos sintomas que restam, sobretudo porque a central de serviços agora encontra a entrada da reinicialização. O risco de manipulação que a equipe pegou estava no seu próprio hábito anterior: encerrar registros como "não reproduzível" quando um incidente ocorria fora do horário de trabalho. A mistura de códigos de encerramento, a amostra de registros encerrados lida todo trimestre e a coorte de recorrência agora agem como barreiras de proteção. Ninguém é classificado, e a revisão lista serviços e decisões, e não analistas.

## Ágil, IA, automação e análise

### Ágil

Incorpore o trabalho de problemas ao backlog regular e às conversas de melhoria, para que as correções permanentes disputem abertamente com o trabalho novo. O cuidado é que uma meta de encerrar problemas depressa leva a encerrá-los com contornos.

### IA

A IA pode agrupar incidentes, sugerir causas raiz e redigir registros de problemas, o que pode elevar as contagens de problemas e as taxas de vínculo sem remover causas. Pareie a taxa de vínculo com a taxa de recorrência pós-correção e marque quais causas foram sugeridas pela IA e confirmadas por uma pessoa. O cuidado é que uma causa sugerida pela IA pode ser plausível e errada; por isso verifique antes de encerrar.

### Automação

Vincule incidentes a problemas automaticamente onde os sinais coincidirem e meça a correspondência pelos vínculos errados. O cuidado é que encerrar automaticamente um problema quando os incidentes cessam esconde uma causa que só ficou silenciosa.

### Análise

Mostre o tempo até a correção permanente como uma distribuição e a taxa de recorrência após as correções. A decisão informada é quais causas merecem capacidade. O cuidado é que a recorrência exige uma janela longa; por isso diga por quanto tempo você observou.

## Olhar setorial

**Startup.** Raramente há um processo separado de problemas. A equipe corrige as causas diretamente, e o risco é que ninguém se lembre do porquê. Mantenha uma lista de uma página com os incidentes recorrentes e suas causas, ligue as correções ao rastreador de issues e reveja a lista todo mês. Meça a recorrência e a idade dos itens mais antigos; dispense códigos formais de encerramento até a equipe crescer.

**Pequena empresa.** Uma pessoa de TI ou um provedor de serviços gerenciados pode cuidar de tudo. Peça ao provedor os registros de problemas e as categorias de incidentes por trás deles, bem como a definição escrita de "resolvido". Uma lista curta dos cinco principais problemas repetidos, com um responsável nomeado e uma data para cada, supera uma ferramenta pesada. Exporte os registros periodicamente para evitar o aprisionamento.

**Grande empresa.** Muitos serviços e fornecedores criam a maior necessidade de definições compartilhadas. Combinem entre equipes a taxonomia de causas, os códigos de encerramento e a janela de recorrência, nomeiem responsáveis pelos problemas por serviço e relatem por serviço e coorte. Onde um fornecedor detém uma correção, acompanhe a resposta do fornecedor contra o acordo (veja o tópico 8.4, Métricas de fornecedores e contratos) e escale por uma rota documentada.

**Governo e setor público.** A auditoria, o controle de mudanças e as compras podem alongar o caminho da causa à correção; por isso o relógio do tempo até a correção deve mostrar onde está o atraso: investigação, aprovação, compra ou agendamento. Os riscos aceitos precisam de responsáveis e datas de revisão registrados que resistam a auditorias. As regras de retenção e privacidade se aplicam aos registros de incidentes e de problemas, particularmente onde dados clínicos ou de cidadãos aparecem neles.

## Business case: motivações, ROI e TCO

O custo tem três partes. A primeira é o tempo de investigação: pessoas com as habilidades e o acesso para analisar incidentes, o que compete com o outro trabalho delas. A segunda é a própria correção, entregue pelo backlog e pelo processo de mudança. A terceira é o custo de registrar e relatar: vincular incidentes, manter taxonomias, conduzir a revisão de padrões e manter a base de erros conhecidos. Esses custos são sobretudo tempo de pessoas; por isso conte as horas.

O retorno aparece como incidentes que deixam de se repetir, menos acionamentos e menos esforço de contorno manual, tratamento de incidentes mais curto porque quem responde acha erros conhecidos e menos escalonamentos para engenheiros. Nenhuma cifra universal se aplica; por isso estime a sua. Para um incidente recorrente, multiplique as ocorrências por ano pelo esforço médio de tratamento e por uma estimativa do impacto no negócio por ocorrência e compare com o esforço de corrigi-lo. Reveja a estimativa com o dono do serviço, declare-a como estimativa e volte a ela depois que a janela de recorrência mostrar o que aconteceu. A gestão de problemas se paga melhor nas poucas causas que produzem a maior parte da carga de incidentes, que a visão de Pareto encontra depressa.

## Antipadrões e armadilhas

- **Encerrar como meta.** Um objetivo de problemas encerrados premia registros triviais e o encerramento precoce. Relate primeiro as medidas de resultado e mostre a mistura de códigos de encerramento.
- **Registros de problemas como cemitério.** Os registros ficam abertos sem responsável, data nem decisão. Reveja a lista dos mais antigos em uma cadência e exija uma decisão para cada item.
- **Parar em "erro humano".** Nomeia quem tocou o sistema, e não por que o sistema permitiu a falha. Aceite uma causa somente quando ela nomear uma condição que possa ser mudada.
- **Não corrigir nada até a causa raiz ser certa.** As falhas complexas podem não ter causa única. Aplique um contorno e a correção mais bem apoiada e depois observe a recorrência.
- **Contornos sem saída.** Um contorno sem data de revisão vira permanente. Registre um responsável e uma data quando o erro conhecido for criado.
- **Vínculos de incidentes fracos.** Vínculos ausentes ou descuidados tornam a recorrência invisível. Faça do vínculo parte do encerramento do incidente e amostre os vínculos.
- **Trabalho de problemas fora do backlog.** As correções que vivem em uma fila separada esperam para sempre. Ponha o item de correção no quadro da equipe dona e priorize-o contra as funcionalidades.
- **Comparar analistas ou equipes por registros encerrados.** Premia serviços fáceis e convida à manipulação. Compare os serviços ao longo do tempo com o próprio histórico e leia as coortes.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Identificação e vínculo de problemas | Problemas abertos só após grandes interrupções; sem vínculos de incidentes | Algumas equipes vinculam incidentes; as categorias diferem por equipe | Taxonomia e códigos de encerramento compartilhados; vínculo feito no encerramento do incidente | Taxa de vínculo e qualidade da correspondência amostradas e revistas | Padrões detectados entre equipes e fornecedores, com erros conhecidos compartilhados |
| Causa raiz e erros conhecidos | Causa registrada em texto livre, quando registrada | Erros conhecidos mantidos por algumas equipes em lugares diferentes | Uma única base de erros conhecidos; revisão das causas por uma segunda pessoa | Tempo até a causa raiz e reutilização de erros conhecidos acompanhados ao longo do tempo e usados para agir | Quem responde, fornecedores e clientes contribuem para entradas compartilhadas e as usam |
| Entrega da correção | As correções acontecem quando alguém tem tempo | Correções acompanhadas na lista da própria equipe | Correção ligada a um item de backlog ou mudança com responsável e data | Tempo até a correção permanente revisto, com capacidade reservada para ele | Prioridade das correções definida em conjunto com os roteiros de produto e de fornecedores |
| Resultado e aprendizado | Contagens de registros relatadas | Idade do backlog relatada em algumas revisões | Recorrência pós-correção e parcela apenas com contorno relatadas com definições | Coortes pareadas com barreiras de proteção e usadas em decisões de financiamento | Definições revistas quando deixam de informar decisões; melhoria é rotina |

## Lista de verificação

- [ ] O registro de métricas define um problema, um erro conhecido e cada código de encerramento.
- [ ] O encerramento do incidente inclui um vínculo com um problema, um erro conhecido ou "nada encontrado".
- [ ] Existe uma taxonomia de causas e sintomas, com definições e exemplos.
- [ ] Todo problema tem um responsável, um gatilho e uma data de decisão.
- [ ] O tempo até a causa raiz e o tempo até a correção permanente são medidos separadamente, com percentis.
- [ ] Cada correção permanente está ligada a um item de backlog ou mudança com responsável.
- [ ] Todo contorno tem um responsável e uma data de revisão.
- [ ] A recorrência pós-correção é acompanhada por coorte trimestral com uma janela declarada.
- [ ] A reutilização de erros conhecidos é medida onde quem responde trabalha.
- [ ] Os problemas abertos mais antigos são revistos em uma cadência, e cada decisão é registrada.
- [ ] Uma amostra de registros encerrados é lida todo trimestre para conferir os códigos de encerramento e as causas.
- [ ] Os relatórios descrevem serviços e equipes, e nenhuma tabela classifica indivíduos.

## Prompts de IA

**Encontre problemas candidatos em um conjunto de incidentes.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Revise os códigos de encerramento e os registros de problemas.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Projete uma medida de recorrência.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Prepare uma revisão de decisão dos problemas envelhecidos.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos que definem as medidas de incidentes, de mudanças e de conhecimento de que dependem as métricas de problemas e a barreira de proteção a parear com cada uma.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de problemas nova ou editada declara seus relógios, exclusões, vetor de manipulação e barreira de proteção.

## Ideias-chave

- A medida da gestão de problemas é a recorrência: se os incidentes ligados a um problema deixam de voltar.
- Cronometre as etapas separadamente, do registro até a causa registrada e da causa até a correção em execução em produção.
- Ligue incidentes a problemas no encerramento, combine como os sintomas são casados e amostre os vínculos.
- Um contorno é uma etapa com responsável e data de revisão, e a parcela apenas com contorno mostra quanto risco está sendo carregado.
- Ponha as correções permanentes no backlog da equipe dona e relate as medidas de resultado antes das contagens de registros.
- Descreva serviços, coortes e decisões. Nunca classifique analistas ou equipes por problemas encerrados.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Base de erros conhecidos](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Contorno](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Cinco porquês](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Diagrama de Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Gráfico de Pareto](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Dívida técnica](https://en.wikipedia.org/wiki/Technical_debt).
