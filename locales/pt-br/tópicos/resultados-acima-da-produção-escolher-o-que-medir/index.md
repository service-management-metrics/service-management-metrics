# Resultados acima da produção: escolher o que medir

**Uma boa métrica de serviço ou de entrega descreve uma mudança na vida de um cliente ou na saúde de um serviço; por isso escolha medidas perguntando o que mudou para alguém e trate contagens de atividade e de produção, no máximo, como evidência de apoio.**

## Visão geral e motivação

A maioria dos painéis começa com o que é fácil de contar: tickets encerrados, mudanças implantadas, histórias concluídas, chamadas atendidas. Esses dados já têm carimbo de data e hora em alguma ferramenta e estão sob o controle da equipe. Nenhum deles diz se alguém está em situação melhor.

Quatro palavras ajudam a manter a clareza. **Atividade** é o esforço gasto: horas trabalhadas, reuniões realizadas, ligações feitas. **Produção** é o que o trabalho gerou: um release, um ticket resolvido, um artigo publicado. **Resultado** é a mudança que essa produção possibilitou a alguém: um cliente conclui uma tarefa na metade do tempo, uma clínica abre no prazo, um problema recorrente deixa de se repetir. **Impacto** é o efeito de mais longo prazo sobre os objetivos da organização, como clientes retidos ou menor custo de atendimento. No ITIL 4 (a edição de 2019 da estrutura publicada pela AXELOS, hoje de propriedade da PeopleCert), uma produção é uma entrega tangível ou intangível de uma atividade, e um resultado é um efeito para uma parte interessada possibilitado por uma ou mais produções.

O [ITIL](https://en.wikipedia.org/wiki/ITIL) acrescenta uma segunda ideia que funciona como teste para qualquer métrica: o valor é [cocriado](https://en.wikipedia.org/wiki/Co-creation) pelo provedor do serviço e pelo consumidor do serviço, e não entregue por um ao outro. Isso segue o raciocínio da [lógica dominante de serviço](https://en.wikipedia.org/wiki/Service-dominant_logic), a visão de marketing segundo a qual o valor surge no uso, quando o cliente aplica as capacidades de um provedor aos seus próprios objetivos. Uma métrica medida inteiramente do lado do provedor não consegue provar valor. Uma equipe pode encerrar todos os tickets e entregar todos os releases no prazo enquanto os usuários não acham o seu trabalho mais fácil.

A visão ágil chega ao mesmo lugar por outro caminho. Os princípios por trás do Manifesto para o [desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development) dizem que software funcionando é a principal medida de progresso e que a simplicidade, a arte de maximizar a quantidade de trabalho não feito, é essencial. Nenhum dos dois premia uma pilha maior de produção. Ambos apontam para entregar algo que funcione para seus usuários e para não construir o que ninguém precisa.

As métricas de produção e de atividade não estão erradas. Elas gerenciam fluxo, capacidade e custo, e os tópicos seguintes as usam bastante (veja o tópico 2.1, Medidas de fluxo). O erro é deixá-las ocupar o lugar do valor. Uma [métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric) é um número fácil de relatar e que quase sempre sobe: total de usuários cadastrados, tickets atendidos acumulados, funcionalidades entregues até hoje. Ela faz a equipe parecer ocupada e não diz a ninguém o que fazer em seguida. O teste: este número poderia subir enquanto a situação do cliente piora?

As métricas de resultado são mais difíceis. Movem-se devagar, dependem de fatores fora do controle da equipe e são ruidosas. Uma mudança no fluxo de redefinição de senha pode levar semanas para aparecer no volume de contatos, que uma campanha de marketing também afeta. A resposta é escolher os resultados com cuidado, pareá-los com as medidas de produção pelas quais a equipe se guia no dia a dia e ser honesta quanto à parcela do movimento que a equipe pode reivindicar.

Um **indicador antecedente** é uma medida que se move antes do resultado que importa e pode ser influenciada cedo, como a proporção de novos serviços com um runbook de suporte testado. Um **indicador consequente** relata o resultado depois do fato, como o número de incidentes graves ou a evasão de clientes. Os economistas usam o mesmo pareamento, classificando um [indicador econômico](https://en.wikipedia.org/wiki/Economic_indicator) como antecedente, coincidente ou consequente. As equipes precisam dos dois: os consequentes dizem se você estava certo, e os antecedentes dão algo sobre o que agir enquanto ainda há tempo. Um indicador antecedente é apenas uma hipótese até que se verifique, ao longo de vários períodos, que ele de fato se move antes do resultado.

As medidas de resultado são um remédio parcial contra a manipulação (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Uma medida próxima do que os clientes vivenciam é mais difícil de melhorar sem ajudá-los, e a distância do resultado é onde a manipulação mora. As estruturas que ajudam na escolha são tratadas separadamente (veja o tópico 1.7, Estruturas de medição).

## Princípios-chave

- **Parta do resultado e trabalhe de trás para a frente.** Nomeie a mudança que você quer para um cliente, um serviço ou a organização, pergunte que evidência a mostraria e depois que sinais antecedentes apareceriam mais cedo.
- **O valor é cocriado; inclua o lado do consumidor.** Pelo menos uma medida de cada conjunto deve vir das pessoas que usam o serviço: seu sucesso, esforço ou experiência, e não apenas os registros do provedor.
- **Mantenha a cadeia visível.** Mostre atividade, produção, resultado e impacto como uma cadeia. As equipes se guiam por produções e indicadores antecedentes e se julgam pelos resultados.
- **Pareie, nunca substitua.** Uma medida de resultado explica por que uma medida de produção importa, e uma medida de produção explica o que fazer a respeito de uma medida de resultado. Nenhuma funciona sozinha.
- **Prefira medidas que possam cair além de subir.** Um número que só cresce é uma contagem, não um sinal.
- **Trate os indicadores antecedentes como hipóteses.** Verifique se eles preveem o resultado e descarte-os quando não preverem.
- **Seja honesto quanto à atribuição.** Os resultados têm muitas causas. Diga o que a equipe influencia e o que apenas observa.

## Definições de métricas

As cinco métricas abaixo foram escolhidas para empurrar um conjunto de medidas em direção aos resultados. São exemplos da forma a usar, e os tópicos seguintes definem as medidas de serviço e de entrega que as preenchem. Os limiares ilustrativos deste tópico não são referências de mercado.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de resultados | Proporção das métricas relatadas que estão ligadas, no registro de métricas, a um resultado escrito para um cliente ou serviço nomeado | métricas com ligação a resultado escrito / métricas relatadas no período. Conta apenas métricas exibidas em relatório regular; exclui medidas de visão de trabalho mantidas por uma única equipe | porcentagem | Registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) | Medição e relatório; melhoria contínua | Objetivo do produto e objetivo de entrega | Trimestral |
| Taxa de adoção de funcionalidade | Proporção dos usuários elegíveis que usam uma capacidade nova ou alterada dentro de uma janela declarada após o release | usuários elegíveis distintos que usaram a capacidade em até 30 dias do release / usuários elegíveis distintos nesse período. O relógio começa na disponibilidade geral; exclui contas de teste internas e usuários que não conseguiam alcançar a capacidade | porcentagem | Análise de produto, registros de uso do catálogo de serviços | Projeto de serviço; gestão de releases | Feedback da revisão com partes interessadas; medida de resultado do produto | Mensal por 3 meses após o release, depois trimestral |
| Taxa de contatos repetidos | Proporção dos contatos de um usuário sobre o mesmo serviço dentro de uma janela declarada após o encerramento de um contato anterior | novos contatos do mesmo usuário sobre o mesmo serviço em até 14 dias de um contato encerrado / contatos encerrados no período. O relógio começa no encerramento; exclui contatos abertos como acompanhamentos planejados | porcentagem | Histórico de contatos e tickets da ferramenta de ITSM | Central de serviços; gestão de incidentes | Defeitos escapados; definição de pronto | Mensal |
| Taxa de validação de indicadores antecedentes | Proporção dos indicadores antecedentes em uso cujo movimento precedeu o movimento do indicador consequente associado no período de revisão | indicadores antecedentes com antecedência confirmada sobre o indicador consequente / indicadores antecedentes em uso. Avaliada pela equipe em uma revisão documentada, com ao menos quatro períodos de dados; exclui indicadores com menos de quatro períodos | porcentagem | Registro de métricas e histórico de tendências | Melhoria contínua | Ações de retrospectiva sobre experimentos | Duas vezes por ano |
| Taxa de conclusão da revisão de benefícios | Proporção das mudanças ou melhorias financiadas cujo resultado pretendido foi revisado face à sua medida após o prazo acordado | mudanças com revisão de resultado concluída em até 90 dias da data de revisão planejada / mudanças cuja data de revisão caiu no período. Exclui mudanças retiradas antes do release | porcentagem | Registro de mudança, registro de melhorias, notas de revisão | Melhoria contínua; habilitação de mudanças | Revisão com partes interessadas; revisão do incremento de produto | Trimestral |

A cobertura de resultados e a taxa de conclusão da revisão de benefícios medem a prática de medição e são fáceis de satisfazer com papelada. A taxa de adoção de funcionalidade e a taxa de contatos repetidos estão mais perto do cliente e são as mais propensas a mudar uma decisão.

## Recomendações

### Parta dos resultados

**1. Escreva o resultado como uma frase sobre uma pessoa ou um serviço.** "A equipe consegue redefinir a própria senha sem ligar para a central de serviços" é um resultado. "Implantar o novo portal de identidade" é uma produção. Coloque a frase no topo da entrada da métrica no registro e só então escolha a medida. Se você não consegue escrever a frase, ainda não está pronto para escolher um número.

**2. Desenhe a cadeia da atividade ao impacto.** Para cada objetivo, esboce quatro caixas: o que a equipe faz, o que produz, o que muda para o usuário e o que isso muda para a organização. Coloque cada métrica candidata em uma caixa. Um conjunto cheio à esquerda e vazio à direita é o sinal para buscar evidência de resultado.

**3. Aplique o teste da cocriação de valor a toda métrica.** Pergunte: a visão de valor de quem isto mostra, e a visão do consumidor aparece em algum lugar do conjunto? Em termos do ITIL, uma relação de serviço tem um provedor e um consumidor, e o valor se realiza no uso do consumidor. Uma medida de tempo de resposta pelo relógio do provedor precisa de uma companheira do lado do consumidor, como se o usuário conseguiu seguir com o seu trabalho (veja o tópico 6.2, Acordos de nível de experiência).

**4. Peça uma decisão, não um relatório.** Para cada métrica candidata, escreva a decisão que alguém tomaria se ela se movesse. Aposente qualquer medida sem decisão associada. É o filtro mais rápido contra métricas de vaidade e impede que um painel cresça por inércia.

### Pareie produções com resultados

**5. Escolha uma medida de resultado para cada medida de produção importante.** Se você relata implantações, pareie-as com uma medida do que as implantações mudaram para o serviço, como falha de mudanças ou incidentes visíveis ao usuário (veja o tópico 2.8, Métricas DORA). Se relata tickets resolvidos, pareie-os com contatos repetidos. O par deve estar na mesma página. Uma equipe que só vê produção otimizará a produção.

**6. Escolha medidas de resultado que a equipe possa influenciar e nomeie as que ela apenas observa.** Uma equipe pode influenciar os contatos repetidos do seu próprio serviço e a adoção das suas próprias funcionalidades. Só pode observar a receita da empresa. Ambos pertencem ao quadro, mas as metas e o trabalho de melhoria se ligam às medidas influenciadas. Nomear a diferença evita culpa por movimentos que a equipe não poderia ter causado.

**7. Use substitutos às claras.** Muitos resultados não podem ser medidos diretamente. Escolha um substituto, diga que é um substituto e diga o que ele deixa de fora. A taxa de contatos repetidos é um substituto para "o problema foi realmente resolvido", e uma breve pesquisa ou a leitura de comentários abertos pode conferir se ela ainda diz a verdade (veja o tópico 6.1, Métricas de satisfação do cliente).

### Construa pares de indicadores antecedentes e consequentes

**8. Pareie cada indicador consequente com pelo menos um indicador antecedente sobre o qual você possa agir.** Incidentes graves são um indicador consequente, e a proporção de serviços com runbooks de recuperação testados pode antecedê-los. O indicador antecedente dá à equipe algo para fazer neste mês. Escolha indicadores antecedentes em que você acredita por uma razão que possa escrever e depois teste a crença.

**9. Valide os indicadores antecedentes com um olhar retrospectivo.** Duas vezes por ano, plote cada indicador antecedente contra o seu par consequente ao longo de pelo menos quatro períodos e pergunte se o movimento veio primeiro. Onde a relação for fraca, mude ou abandone o indicador antecedente.

**10. Use objetivos de nível de serviço onde o resultado tem uma medida clara voltada ao usuário.** Um indicador de nível de serviço (SLI) bem escolhido é um sinal antecedente da satisfação do usuário, e um objetivo de nível de serviço (SLO) declara quão bom ele precisa ser (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Funcionam melhor quando o indicador é escolhido do ponto de vista do usuário, e não da máquina.

### Mantenha a escolha honesta

**11. Feche o ciclo com revisões de resultados.** Quando uma mudança ou melhoria é financiada, registre o resultado que ela deve produzir, a medida e a data em que alguém vai olhar. Faça a revisão mesmo que a resposta seja incômoda. Sem revisões, a linguagem de resultados é decoração (veja o tópico 6.5, Realização de valor e resultados de negócio).

**12. Mantenha as medidas de produção na visão de trabalho e diga para que servem.** As medidas de fluxo, capacidade e custo são os instrumentos da equipe, não o seu placar. O tempo de ciclo diz onde o trabalho espera (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo). Relatadas para cima sem um resultado ao lado, convidam à manipulação.

## Vetores de manipulação e barreiras de proteção

Caminhar rumo aos resultados não elimina a manipulação. Muda sua forma: resultados podem ser redefinidos, substitutos podem ser conduzidos e revisões podem ser puladas.

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de resultados | Escrever uma frase de resultado vaga ("melhorar o serviço") para cada métrica, de modo que a ligação exista no papel | Amostrar o registro: uma frase deve nomear uma pessoa ou serviço e uma mudança; conferir se uma decisão foi tomada por causa da medida |
| Taxa de adoção de funcionalidade | Contar um primeiro uso forçado ou automático como adoção; encolher o grupo elegível; tornar a capacidade o padrão para que seja "usada" sem ter sido escolhida | Conclusão de tarefas ou satisfação entre usuários da capacidade; retenção do uso após 30 e 90 dias; ler comentários abertos |
| Taxa de contatos repetidos | Dizer aos usuários que abram nova requisição por outro canal; encerrar o contato como duplicado de outro sem relação; alongar o encerramento para evitar novo contato dentro da janela | Contatos por canal para o mesmo serviço; revisão amostral das notas de encerramento; taxa de "problema resolvido" relatada pelo usuário |
| Taxa de validação de indicadores antecedentes | Declarar válidos indicadores antecedentes após um olhar informal; escolher indicadores que se movem trivialmente com o resultado | Registro de revisão escrito com os dados plotados; convidar alguém de fora da equipe para contestar um resultado por ciclo |
| Taxa de conclusão da revisão de benefícios | Fazer uma revisão só no nome, ou definir o resultado pretendido depois do fato para que ele seja sempre atingido | Comparar o resultado na revisão com o enunciado feito quando a mudança foi financiada; acompanhar a proporção de revisões que levaram a uma mudança de plano |

Uma leitura saudável mostra medidas de resultado que às vezes decepcionam, revisões que às vezes encerram uma mudança e indicadores antecedentes que às vezes são descartados. Um conjunto em que todo resultado é atingido e todo indicador antecedente é confirmado provavelmente foi ajustado para ser assim.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medidas de produção e de atividade | Rápidas, baratas e sob o controle da equipe; boas para decisões de fluxo e capacidade | Fáceis de inflar; nada dizem sobre se alguém foi beneficiado |
| Medidas de resultado | Ficam próximas do que clientes e organização valorizam; mais difíceis de melhorar sem ajudar | Lentas, ruidosas e influenciadas por fatores fora do controle da equipe |
| Indicadores antecedentes | Dão alerta antecipado e algo sobre o que agir | Podem enganar se a ligação com o resultado for presumida em vez de testada |
| Indicadores consequentes | Relatam o que realmente aconteceu | Chegam tarde demais para mudar o resultado deste período |
| Substitutos de resultados | Tornam visíveis resultados difíceis de medir | Podem se afastar do que representam e convidam à surrogação |
| Um pequeno conjunto guiado por resultados | Fácil de lembrar e discutir; concentra o esforço | Pode deixar passar um problema fora dos resultados escolhidos |
| Um conjunto amplo e equilibrado | Cobre mais do serviço | Dilui a atenção; cada medida recebe menos escrutínio |

Mantenha um pequeno número de medidas de resultado que todo o grupo seja capaz de recitar, apoie cada uma com as medidas de produção e antecedentes que a explicam e reveja o conjunto quando a estratégia mudar. As abordagens equilibradas associadas ao [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) e aos [objetivos e resultados-chave](https://en.wikipedia.org/wiki/Objectives_and_key_results) tentam ambas conectar o trabalho diário aos resultados que importam. Falham da mesma forma quando os resultados-chave viram uma lista de produções com uma porcentagem ao lado.

## Perguntas para discutir com sua equipe

**1. Entre as nossas cinco métricas mais proeminentes, quais podem subir enquanto nossos clientes ficam pior?**
Escreva as cinco num quadro e faça a pergunta a cada uma. Uma contagem de tickets encerrados, por exemplo, pode subir enquanto os contatos repetidos também sobem. O facilitador deve registrar os casos em que a resposta é sim, porque essas são as métricas de vaidade. Termine perguntando que medida de resultado ficaria ao lado de cada uma.

**2. Como é uma boa semana para um cliente deste serviço, nas palavras dele?**
Pergunte a quem conversa com os clientes e evite o vocabulário da própria equipe. As respostas viram frases de resultado e muitas vezes revelam coisas que ninguém mede, como não precisar explicar um problema duas vezes. Capture três frases e pergunte quais podem ser medidas, mesmo por substituto.

**3. Quais dos nossos indicadores antecedentes já conferimos alguma vez contra o resultado que deveriam prever?**
Escolha um indicador e plote-o contra o seu par consequente nos últimos vários períodos. Pergunte o que se vê e com que confiança. Se a relação for fraca, discuta com o que substituí-lo. Trate um indicador descartado como resultado normal do aprendizado, não como fracasso.

**4. Onde a nossa equipe reivindica o crédito por um resultado que apenas observa?**
Olhe as métricas dos relatórios à liderança. Quais dependem de fatores fora do controle da equipe, como sazonalidade, uma campanha ou um fornecedor? Combinem um modo simples de declarar o que a equipe influencia e o que observa. Isso prepara a equipe para o dia em que um resultado se mova por razões que ela não causou.

**5. O que entregamos ou mudamos nos últimos dois trimestres, e alguém revisou se funcionou?**
Liste as mudanças num quadro e marque as que têm registro de revisão. Para as outras, pergunte que resultado era esperado e como poderíamos descobrir agora. Resista à caça aos culpados. O objetivo é iniciar o hábito, mesmo que as primeiras revisões saiam atrasadas.

**6. Que medidas de produção devem voltar à nossa visão de trabalho?**
Algumas medidas são úteis para a equipe e enganosas num relatório. Pergunte quais são quais e do que cada uma precisaria ao lado para continuar num relatório à liderança. Combinem uma medida a mover neste trimestre. Mover uma medida é sinal de maturidade, não um recuo na transparência.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são tentadas pela produção porque suas ferramentas a relatam por padrão. O remédio é tornar a adoção e a evidência de resultado parte da definição de pronto e da revisão com as partes interessadas. Uma funcionalidade que ninguém usa é uma lição, e descobrir isso cedo é um benefício da prática ágil. As equipes mantêm as medidas de fluxo na visão de trabalho e as pareiam com medidas de adoção e de falha (veja o tópico 2.5, Métricas de previsão e planejamento de entregas).

### Equipes de serviço e operações

As equipes de serviço são medidas pelo atendimento: chamadas atendidas, tickets encerrados, tempo para resolver. Isso importa para o planejamento e o custo e diz pouco sobre se o problema do usuário desapareceu. As equipes de operações devem acrescentar contatos repetidos, recorrência da mesma causa e resolução relatada pelo usuário ao lado das medidas de velocidade e devem tratar com suspeita uma contagem crescente de tickets fáceis (veja o tópico 3.1, Métricas da central de serviços). Indicadores antecedentes como o uso de artigos de conhecimento e runbooks testados dão à equipe algo sobre o que agir entre incidentes.

### Liderança e governança

O que os líderes pedem para ver ensina à organização o que importa. Peça resultados, aceite que eles são mais lentos e mais ruidosos e financie as revisões que os conferem. Os órgãos de governança devem buscar um conjunto curto e estável de medidas de resultado, cada uma com um responsável declarado e um registro das decisões que informou (veja o tópico 1.4, Governança e responsabilidade das métricas). Um líder que pergunta "o que aprendemos?" obtém dados melhores do que um que pergunta "por que isto está vermelho?".

### Clientes e usuários

Os clientes vivenciam os resultados diretamente e raramente veem contagens de produção. São o teste final do conjunto: o serviço os deixa seguir com o que vieram fazer? Pesquisas curtas, comentários abertos e observação de tarefas reais são evidência melhor do que qualquer medida do lado do provedor. Os clientes também têm um papel na cocriação de valor, o que significa que quão bem eles são informados, habilitados e ouvidos afeta os resultados (veja o tópico 6.3, Métricas de adoção de serviços e catálogo).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte mantém uma equipe interna de plataforma que oferece um serviço de provisionamento de ambientes em autoatendimento a cerca de 40 equipes de produto, apoiado por uma pequena central de serviços. Todos os números deste exemplo são ilustrativos.

O relatório mensal mostra 310 requisições atendidas (contra 240), uma mediana de tempo de atendimento de 6 horas e 12 funcionalidades entregues no trimestre. A liderança está satisfeita. O responsável pela plataforma nota que os contatos à central sobre provisionamento também aumentaram e pede à equipe que plote as produções contra o resultado esperado: as equipes de produto obterem um ambiente sem esperar nem pedir ajuda.

O exercício da cadeia mostra que a equipe havia medido atividade e produção, e nenhum resultado. Ela acrescenta três. A primeira é a taxa de contatos repetidos: 22% dos contatos de provisionamento são seguidos de outro contato sobre o mesmo serviço em até 14 dias. A segunda é a taxa de adoção de funcionalidade para as três funcionalidades mais novas, que está em 9%, 14% e 61% das equipes elegíveis após 30 dias. A terceira, um indicador antecedente, é a proporção de requisições que se completam sem etapa humana, hoje em 48%. A hipótese é de que isso deve puxar a taxa de contatos repetidos para baixo.

Decidem pausar duas funcionalidades planejadas, parecidas com as duas de baixa adoção, e gastar o trimestre na causa mais comum de contatos repetidos, uma mensagem de erro pouco clara quando uma cota é excedida. Registram o resultado pretendido, uma taxa de contatos repetidos abaixo de 15%, e definem uma data de revisão em 90 dias.

O risco de manipulação aparece no segundo mês. A taxa de contatos repetidos cai para 11%, o que parece maravilhoso. Uma amostra de 25 contatos encerrados mostra que a central havia começado a pedir aos usuários que usassem um canal de chat para perguntas de acompanhamento, e o canal de chat não é contado na ferramenta de ITSM. A equipe acrescenta ao relatório os contatos por canal, traz as transcrições do chat para a amostra e descobre que a taxa combinada é de 17%. É uma melhoria real, menor do que a primeira leitura. Na revisão, o responsável relata 17%, observa que o indicador antecedente subiu de 48 para 57% em compasso e registra que a hipótese se sustentou em dois dos quatro períodos necessários para considerá-la validada.

## Ágil, IA, automação e análise

### Ágil

A entrega contínua torna barato liberar pequenas mudanças e ver se um resultado do usuário se moveu. Uma boa prática é declarar o resultado pretendido e o sinal que o mostraria antes de o trabalho começar e conferir o sinal após o release, com as partes interessadas. O cuidado é que releases frequentes tentam as equipes a contar releases como progresso, o que é produção de novo.

### IA

As ferramentas de IA elevam a produção com facilidade: mais código, mais rascunhos, mais respostas. A pergunta de resultado é se os usuários estão mais bem atendidos; por isso pareie as contagens de produção com um resultado como a taxa de contatos repetidos ou o sucesso nas tarefas do caminho assistido por IA. O cuidado é que um resultado que melhora enquanto o uso de IA sobe ainda pode ter outras causas; por isso evite afirmar que a ferramenta o causou sem uma comparação.

### Automação

Automatize a captura de sinais de resultado que já existem, como contatos repetidos, abandono ou tempo até a primeira resposta útil. A automação do próprio trabalho deve ser medida pelo que libera e pelo que quebra. O cuidado é que uma tarefa automatizada que roda com frequência parece produtiva mesmo quando seu resultado nunca é usado.

### Análise

Os dados de resultado costumam ser mais lentos e mais ruidosos que os de produção. Use indicadores antecedentes para se guiar e valide-os de vez em quando contra o resultado mais lento. O cuidado é que a correlação entre uma produção e um resultado nos dados do ano passado não significa que a produção continuará a prevê-lo. Nos termos do ITIL 5, o foco declarado do proprietário em resultados mensuráveis faz deste tópico a base do tópico 1.8, Medição do ITIL 5 e resultados de valor.

## Olhar setorial

**Startup.** Os resultados estão à mão: os fundadores podem conversar com os clientes e ver se eles ficam. O risco é medir apenas o crescimento de usuários e funcionalidades, que são métricas de vaidade até que a retenção e o sucesso nas tarefas fiquem visíveis. Escolha uma medida de resultado que os clientes reconheceriam e confira-a toda semana.

**Pequena empresa.** Os números são pequenos demais para a estatística; por isso prefira conversas diretas, um punhado de casos acompanhados e uma curta lista de substitutos. Desconfie de painéis de fornecedores que relatam a atividade deles como se fosse o seu resultado.

**Grande empresa.** A escala convida ao relatório de produção, porque as produções são comparáveis entre muitas equipes e os resultados não. Resista a impor uma única definição de resultado a serviços díspares. Combine um pequeno conjunto de frases de resultado compartilhadas, deixe cada serviço escolher suas medidas e mantenha o registro atualizado.

**Governo e setor público.** Deveres legais, regras de financiamento e níveis de serviço fixam de antemão algumas medidas, muitas vezes produções como casos processados. Cumpra-as e acrescente ao lado medidas de resultado para cidadãos e servidores, como se uma pessoa obteve a ajuda que veio buscar. O relatório público torna os dados honestos de resultado mais valiosos e mais sensíveis; por isso combine de antemão como as cifras corrigidas serão explicadas (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo de migrar para resultados é sobretudo esforço e paciência: escrever frases de resultado, acrescentar algumas medidas, como uma breve pesquisa ou um evento de adoção, e realizar revisões de resultados. O custo de ferramentas é modesto, já que a maioria dos substitutos pode ser construída com dados já coletados. O custo maior é o atraso, porque os dados de resultado chegam devagar e os líderes precisam esperar por eles.

O retorno vem de melhores escolhas sobre onde gastar. O trabalho que ninguém usa é caro, assim como melhorar uma medida de atendimento enquanto a causa subjacente dos contatos repetidos permanece. O padrão esperado é menos funcionalidades construídas e deixadas sem uso, mais atenção às causas recorrentes e uma história mais forte para o financiamento. Não prometa uma porcentagem. Meça suas próprias linhas de base, como a adoção dos releases recentes e os contatos repetidos, e compare após alguns trimestres (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contar o que é fácil.** Contagens de tickets e implantações estão em toda ferramenta, o que as torna o padrão. Acrescente pelo menos uma medida de resultado para cada serviço antes de acrescentar outra contagem de produção.
- **Teatro de resultados.** Escrever uma frase de resultado para cada métrica sem nunca conferi-la. Revise uma amostra do registro e pergunte que decisão cada medida informou.
- **Indicadores antecedentes não testados.** Tratar um sinal plausível como prova. Plote-o contra o resultado consequente pelo menos duas vezes por ano e descarte os que não antecedem.
- **Resultados como metas pessoais.** Atribuir uma medida de resultado a uma pessoa convida ao comportamento descrito no tópico 1.2. Ligue os resultados a equipes e serviços.
- **Medir apenas o lado do provedor.** Um conjunto feito de relógios e contagens internos perderá o que os clientes sentem. Inclua uma medida do lado do consumidor para cada serviço.
- **Nunca revisar.** Financiar mudanças por benefícios prometidos e nunca conferi-los. Ponha uma data de revisão no registro da mudança quando ela for aprovada.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Escolha das medidas | Contagens disponíveis nas ferramentas | Algumas equipes escrevem frases de resultado | Toda métrica relatada tem um resultado escrito e uma decisão que ela informa | Conjuntos de resultado e de produção revistos em conjunto a cada trimestre | Frases de resultado alinhadas entre equipes, fornecedores e clientes, e revistas quando a estratégia muda |
| Indicadores antecedentes e consequentes | Apenas resultados consequentes, relatados tarde | Alguns indicadores antecedentes escolhidos por intuição | Indicadores antecedentes e consequentes pareados e registrados no registro | Indicadores antecedentes validados contra os resultados duas vezes por ano | Indicadores compartilhados com fornecedores e clientes; o conjunto evolui com as evidências |
| Revisões de resultados | Nenhuma revisão de se as mudanças funcionaram | Revisões ocasionais após grandes mudanças | Data de revisão registrada para toda mudança financiada | Revisões concluídas, com resultados alimentando o plano seguinte | Revisões rotineiras, entre equipes, com a participação dos clientes |
| Evidência do lado do consumidor | Anedotas | Pesquisa para alguns serviços | Uma medida do lado do consumidor para cada serviço | Evidência do consumidor acompanhada ao longo do tempo e lida junto com os dados operacionais | Os clientes ajudam a definir e interpretar as medidas de resultado |

## Lista de verificação

- [ ] Todo serviço tem pelo menos uma frase de resultado que nomeia uma pessoa ou serviço e uma mudança.
- [ ] Cada métrica relatada está posicionada na cadeia da atividade ao impacto.
- [ ] Cada métrica tem uma decisão nomeada que ela informa; as que não têm são aposentadas.
- [ ] Toda medida de produção de um relatório tem uma medida de resultado ao lado.
- [ ] Todo serviço tem pelo menos uma medida do lado do consumidor.
- [ ] Cada indicador consequente tem um indicador antecedente, com uma razão escrita para a ligação.
- [ ] Os indicadores antecedentes são conferidos contra os resultados pelo menos duas vezes por ano.
- [ ] Os substitutos são rotulados como substitutos, com o que deixam de fora.
- [ ] Toda mudança financiada tem um resultado pretendido, uma medida e uma data de revisão.
- [ ] As medidas de resultado se ligam a equipes e serviços, nunca a indivíduos.

## Prompts de IA

**Transforme uma métrica de produção em um conjunto guiado por resultados.**

```text
Our team is [team name], which provides [service or product] to [customers or
users]. We currently report [list of output or activity metrics]. We want to
move toward outcomes. For each metric, suggest an outcome sentence about a
customer or service that it might support, and propose one outcome measure and
one leading indicator we could consider. For each suggestion, say what the
measure would miss and how it could be gamed. Do not invent benchmark values
or sources. List your assumptions and the facts you need from me.
```

**Teste se um indicador antecedente é crível.**

```text
We use [leading indicator] as a leading indicator for [lagging outcome measure].
Here are [number] periods of data for both, pasted below, with notes on
anything that changed during that time: [data and notes]. Describe whether the
leading indicator appears to move before the lagging one, and what other
explanations are consistent with the data. Do not claim causation. List your
assumptions, the limits of this much data, and what additional data would help.
```

**Redija uma revisão de resultado de uma mudança recente.**

```text
We made this change: [description], approved on [date], with the intended
outcome [outcome sentence] and measure [measure]. Current data: [data]. Draft
an outcome review agenda and a short summary structure that compares the
intended outcome with what we see, separates what the team influenced from what
it only observed, and lists questions for users. Do not judge success beyond
what the data supports. List your assumptions and any data gaps.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico e a medida de resultado companheira de uma métrica de produção que você está prestes a relatar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um novo tópico de métricas pareia suas medidas de produção com resultados e barreiras de proteção.

## Ideias-chave

- Atividade, produção, resultado e impacto são coisas diferentes, e um painel dos dois primeiros não consegue mostrar valor.
- No ITIL, o valor é cocriado com o consumidor; por isso todo conjunto precisa de uma medida do lado do consumidor.
- Pareie produções com resultados e indicadores consequentes com antecedentes que você tenha testado.
- Seja claro sobre o que a equipe influencia e o que apenas observa.
- Revise as mudanças financiadas contra os resultados pretendidos e deixe os resultados mudarem o plano.
- As medidas de resultado reduzem a manipulação sem acabar com ela; por isso cada uma ainda precisa de uma barreira de proteção.

## Referências e leituras complementares

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Cocriação](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Lógica dominante de serviço](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Indicador econômico](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objetivos e resultados-chave](https://en.wikipedia.org/wiki/Objectives_and_key_results).
