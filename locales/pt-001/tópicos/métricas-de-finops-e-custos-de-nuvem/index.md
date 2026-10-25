# Métricas de FinOps e custos de nuvem

**O gasto em nuvem é decidido por engenheiros todos os dias; por isso dê às pessoas que constroem e operam os serviços os dados de custo, o contexto e a autoridade para agir sobre eles e meça o desperdício, a alocação e o custo unitário com o mesmo cuidado que dá à confiabilidade.**

## Visão geral e motivação

Em um data center, o gasto é decidido por ordens de compra e chega em poucos degraus grandes. Na nuvem, um desenvolvedor pode comprometer a organização com uma cobrança recorrente com poucas linhas de configuração, e um ambiente de teste esquecido pode custar dinheiro por meses. A [computação em nuvem](https://en.wikipedia.org/wiki/Cloud_computing) oferece acesso sob demanda a recursos de computação, e o modelo de [pague pelo uso (pay-as-you-go)](https://en.wikipedia.org/wiki/Pay_as_you_go) que a acompanha significa que a fatura segue o uso. Isso é poderoso e arriscado. A mesma flexibilidade que permite a uma equipe escalar em minutos deixa o custo crescer mais depressa do que alguém percebe.

FinOps, contração de finanças e operações, é uma prática e uma cultura para gerir o custo da nuvem. A FinOps Foundation a descreve como uma estrutura operacional em que as equipes de engenharia, finanças, compras e negócio colaboram em decisões de gasto baseadas em dados. Sua ideia central é que as pessoas que usam recursos de nuvem devem ver e ser donas de seus custos, enquanto as finanças fornecem a estrutura, as previsões e os compromissos. Isso combina com os objetivos ágeis de colaboração contínua entre as partes interessadas e de equipes que são donas de seus serviços e com a preocupação do ITIL com a gestão financeira de serviços. Este tópico cobre as medidas que tornam concreta essa prática. Apoia-se nas ideias gerais de custeio do tópico anterior (veja o tópico 7.5, Custo de serviço e economia unitária).

O custo de nuvem tem características que precisam de medidas próprias.

- **Elasticidade.** O [escalonamento automático (autoscaling)](https://en.wikipedia.org/wiki/Autoscaling) ajusta os recursos à demanda, o que torna o custo variável e às vezes surpreendente. A [computação sem servidor (serverless)](https://en.wikipedia.org/wiki/Serverless_computing) cobra por execução e desloca a atenção dos servidores para as requisições.
- **Muitas pequenas decisões.** Cada escolha de tamanho de instância, camada de armazenamento, região e arquitetura muda o custo. O gasto se distribui por centenas de decisões tomadas por muitas pessoas e é difícil de ver sem etiquetas e bons relatórios.
- **Modelos de preço.** Os preços sob demanda são flexíveis e os mais altos. Os compromissos em troca de um [desconto por volume](https://en.wikipedia.org/wiki/Volume_discount), como capacidade reservada ou planos de economia, reduzem o preço unitário em troca de uma promessa de uso. A capacidade spot ou interrompível é barata e pode ser recuperada. Cada modelo tem um risco, e a mistura certa depende de quão previsível é a carga de trabalho. Os termos exatos diferem entre provedores e mudam com frequência; por isso confira a documentação atual do provedor antes de contar com qualquer detalhe.
- **Custo compartilhado e sem etiqueta.** Recursos sem etiqueta de responsável ou de propósito não podem ser atribuídos. As plataformas compartilhadas espalham o custo entre equipes que as consomem de modo diferente.
- **Custo ambiental.** As cargas de nuvem consomem energia e causam emissões, e a [pegada de carbono](https://en.wikipedia.org/wiki/Carbon_footprint) de uma carga é cada vez mais um requisito a relatar. Os métodos para estimá-la ainda estão se desenvolvendo, e os números devem vir com o método.

As medidas de custo na nuvem são fáceis de melhorar por atalhos. Cortar o gasto desligando o monitoramento ou encolhendo os recursos até o serviço cair mostra uma fatura menor e um serviço pior. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica: toda medida de custo aqui fica ao lado de uma medida de confiabilidade ou de qualidade, e nenhuma equipe é classificada pela sua fatura (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **O custo é uma métrica de engenharia.** As equipes que constroem e operam um serviço veem e são donas do seu custo.
- **Aloque aos responsáveis.** Cada dólar deve se mapear a uma equipe ou a um conjunto compartilhado declarado.
- **Pareie o custo com qualidade e confiabilidade.** Economias que quebram o serviço não são economias.
- **Otimize continuamente, em pequenos passos.** Reveja o desperdício regularmente e aja como parte do trabalho normal.
- **Preveja com faixas.** A demanda variável torna frágeis as previsões de número único.
- **Colabore entre funções.** Engenharia, finanças, compras e negócio decidem juntos.
- **Não classifique equipes pela fatura.** Os serviços diferem, e crescimento não é desperdício.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura da alocação | Proporção do gasto de nuvem atribuída a uma equipe responsável ou a um conjunto compartilhado declarado | gasto com um responsável e uma etiqueta de serviço válidos, ou em um conjunto compartilhado declarado / gasto total de nuvem | porcentagem | Exportação de faturamento de nuvem, política de etiquetas | Gestão financeira de serviços; gestão de ativos de TI | Responsabilidade da equipe pelo que opera | Semanal |
| Custo unitário de nuvem | Custo dos recursos de nuvem por unidade de algo que os usuários valorizam | custo de nuvem do serviço no período / unidades entregues no período | moeda por unidade | Dados de faturamento cruzados com o volume do serviço | Gestão financeira de serviços; gestão de nível de serviço | Custo de servir por resultado | Mensal |
| Taxa de desperdício | Proporção do gasto em recursos ociosos ou claramente superdimensionados | gasto em recursos ociosos ou superdimensionados, conforme regras combinadas / gasto total nos recursos no escopo | porcentagem | Métricas de utilização e faturamento | Gestão de capacidade e desempenho; gestão financeira | Redução de desperdício na cadeia de ferramentas | Semanal |
| Cobertura de compromissos | Proporção do uso estável elegível coberto por compromissos com desconto | uso elegível coberto por compromissos / uso elegível | porcentagem | Relatórios de faturamento e de compromissos | Gestão financeira de serviços; gestão de fornecedores | Planejamento para demanda previsível | Mensal |
| Utilização de compromissos | Proporção dos compromissos comprados que foram usados | horas de compromisso usadas / horas de compromisso compradas | porcentagem | Relatórios de compromissos | Gestão financeira de serviços; gestão de fornecedores | Valor de um investimento planejado | Mensal |
| Variação da previsão | Diferença entre o gasto de nuvem previsto e o real, por equipe e no total | (real menos previsto) / previsto | porcentagem | Registro de previsões e dados de faturamento | Gestão financeira de serviços | Exatidão da previsão | Mensal |
| Tempo até reconhecer anomalias | Tempo desde um alerta de anomalia de custo até uma decisão registrada pelo responsável | mediana e 85º percentil das horas do alerta até a resposta do responsável | horas | Alertas de anomalias e registros de tickets | Monitoramento e gestão de eventos; gestão de incidentes | Capacidade de resposta a um sinal de produção | Mensal |

Defina o escopo dos recursos, as regras de etiquetas e o que conta como ocioso ou superdimensionado e registre-os. A cobertura de compromissos é calculada contra o uso de base estável apenas, e não contra picos. O custo unitário usa uma unidade combinada com o responsável pelo serviço e fixa durante a tendência. Os dados de custo devem dizer se incluem créditos, descontos, impostos e encargos de suporte e qual moeda e câmbio se aplicam.

## Recomendações

### Torne o custo visível e com dono

**1. Imponha um pequeno conjunto obrigatório de etiquetas.** Exija que todo recurso traga uma etiqueta de responsável, de serviço e de ambiente, imposta por política na criação, e não por uma limpeza depois. A cobertura da alocação mede quão bem isso funciona. Os recursos que deixam de ser etiquetados podem ser bloqueados ou sinalizados em um dia ao dono da conta. Mantenha pequeno o conjunto de etiquetas para que as pessoas o cumpram.

**2. Dê às equipes a sua própria visão de custos.** Forneça a cada equipe uma visão diária ou semanal de seu gasto por serviço e ambiente, com tendências e anomalias. As pessoas respondem a dados que veem e entendem. Um relatório que chega mensalmente e só vai para as finanças muda pouco.

**3. Defina conjuntos de custo compartilhado e seus direcionadores.** As plataformas compartilhadas, a rede e os encargos de suporte precisam de uma regra de como são distribuídos (veja o tópico 7.5, Custo de serviço e economia unitária). Publique a regra, reveja-a com as equipes e mantenha pequeno o conjunto. Uma regra que as pessoas conseguem seguir ganha mais confiança que uma justa que ninguém entende.

**4. Faça uma conversa de custos regular e curta.** Reúna engenharia, finanças e donos de produto em uma cadência constante, semanal ou quinzenal para os grandes gastadores e mensal para os outros, por trinta minutos. Reveja a tendência, as anomalias e o backlog de otimização. É a colaboração contínua na prática e mantém o custo na pauta sem um processo pesado.

### Meça valor, e não só gasto

**5. Expresse o custo por unidade.** O gasto total de nuvem sobe com o sucesso. O que importa é o custo por cliente ativo, por transação ou por build. Escolha uma unidade que faça sentido para o serviço, acompanhe-a ao longo do tempo e anote as mudanças. Um custo unitário em queda com gasto total em alta é um padrão saudável, e um custo unitário em alta com uso estável é um convite a investigar.

**6. Mostre a confiabilidade e a qualidade ao lado do custo.** Exiba o custo com a disponibilidade, a latência e a taxa de erros do mesmo serviço (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Economias que elevam as taxas de erros são uma transferência de custo aos usuários. Uma abordagem de orçamento de erro pode tornar explícita a compensação: gaste menos quando o serviço está muito melhor que o necessário e invista quando não está.

**7. Acompanhe o desperdício com regras explícitas.** Defina ocioso (por exemplo, sem uso significativo ao longo de um período) e superdimensionado (por exemplo, utilização consistentemente muito abaixo da capacidade provisionada) e relate o gasto em cada um. As regras exigem cuidado: um sistema em espera por resiliência parece ocioso por projeto e deve ser excluído e rotulado. Revisite as regras quando produzirem falsos positivos.

### Aja sobre o que encontra

**8. Redimensione e limpe no trabalho normal.** Faça da remoção de desperdício um item permanente do backlog da equipe, tratado em pequenos passos como parte da melhoria contínua. Programe os ambientes de não produção para parar fora do horário de trabalho, apague armazenamento desanexado, escolha camadas de armazenamento adequadas e reveja primeiro os maiores itens de linha. Pequenas mudanças regulares superam limpezas heroicas raras, que tendem a ser esquecidas quando a pressão sobe.

**9. Ajuste o modelo de preço à carga de trabalho.** Use compromissos para o uso de base estável, sob demanda para a carga variável e capacidade interrompível para o trabalho que tolera interrupção. Comprometa-se de forma incremental, em pequenas quantidades, e acompanhe a cobertura e a utilização. O excesso de compromisso desperdiça dinheiro, e a falta paga um prêmio. Envolva as finanças e as compras e confira de novo os termos com o provedor, já que mudam.

**10. Detecte anomalias e responda.** Use a detecção de anomalias no gasto, que sinaliza mudanças repentinas em relação a uma linha de base. As ferramentas de [detecção de anomalias](https://en.wikipedia.org/wiki/Anomaly_detection) vão de limiares simples a modelos estatísticos. Alerte a equipe responsável e meça quanto tempo leva para reconhecer e decidir. Um job mal configurado pode acumular uma fatura grande em horas; por isso a rapidez importa (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).

### Preveja e planeje

**11. Preveja com faixas e direcionadores.** Construa as previsões a partir dos direcionadores da demanda, como usuários ou transações esperados, junto com o custo unitário. Use a [análise de variação](https://en.wikipedia.org/wiki/Variance_analysis) para explicar as diferenças entre previsto e real e separe as devidas a volume, preço e mistura. Dê uma faixa e declare as premissas. A variação da previsão deve encolher conforme o modelo melhora.

**12. Inclua a sustentabilidade no quadro.** Estime as emissões associadas às principais cargas usando um método documentado, como relatórios do provedor ou metodologias publicadas, e declare os limites da estimativa. Compare escolhas de região, tipo de instância e programação em custo e em emissões. Trate as emissões por unidade como companheiras do custo por unidade e não alegue uma precisão que o método não sustenta.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura da alocação | Etiquetar tudo para um responsável genérico; declarar grandes quantias como compartilhadas | Parcela do gasto de propriedade de responsáveis genéricos; tamanho e revisão do conjunto compartilhado; amostra de confirmação de responsáveis |
| Custo unitário de nuvem | Escolher uma unidade que cresce barato; cortar a confiabilidade para cortar o custo | Definição fixa da unidade; companheiras de confiabilidade e qualidade |
| Taxa de desperdício | Estreitar a definição de ocioso; mover o desperdício para uma conta fora do escopo | Regras no registro; varrer todas as contas; amostrar os recursos que as regras excluem |
| Cobertura de compromissos | Comprometer-se com bases infladas para perseguir uma porcentagem alta | Utilização de compromissos; conferir a base contra o histórico de uso |
| Utilização de compromissos | Acrescentar uso elegível que não é necessário para preencher os compromissos | Comparar com o crescimento da demanda real; custo unitário |
| Variação da previsão | Inflar as previsões; revisá-las tarde | Registrar a previsão no início; acompanhar a largura da faixa e a taxa de acerto |
| Tempo até reconhecer anomalias | Reconhecer alertas sem olhar; encerrar alertas automaticamente | Registrar uma decisão e um resultado; amostrar alertas quanto à qualidade da resposta |

Uma leitura saudável é quase todo o gasto com dono e visível, custo unitário que se move por razões explicadas, desperdício que encolhe sem interrupções, compromissos que são usados e previsões cujo erro se estreita com o tempo.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Uma equipe central de nuvem controla o gasto | Consistência e poder de negociação | Lenta; longe das decisões de engenharia |
| As equipes são donas do próprio custo de nuvem | Decisões rápidas e informadas | Exige dados, treinamento e barreiras de proteção |
| Apenas sob demanda | Flexível | Maior preço unitário |
| Compromissos pesados | Menor preço unitário | Aprisionamento e desperdício se a demanda cair |
| Tetos rígidos de orçamento | Evita estouros | Pode causar interrupções ou bloquear trabalho válido |
| Alertas e revisão | Preserva a velocidade | Depende de resposta oportuna |
| Redimensionamento agressivo | Economiza dinheiro | Risco para o desempenho se exagerado |
| Redimensionamento medido com SLOs | Equilibrado | Exige dados de confiabilidade e cuidado |

A resposta pragmática é dar às equipes dados e responsabilidade, definir barreiras de proteção como alertas e orçamentos em vez de paradas rígidas onde o serviço é crítico, comprometer-se gradualmente com a base estável e sempre parear o custo com a confiabilidade.

## Perguntas para discutir com sua equipe

**1. Quanto da nossa fatura de nuvem conseguimos atribuir a um responsável hoje, e de quem não achamos o dono?**
Olhem a proporção do gasto com etiquetas válidas e os maiores itens sem etiqueta. Perguntem quem seria o dono de cada um. O facilitador deve anotar quantos itens ninguém reivindica. Combinem um passo de política de etiquetas a impor na criação.

**2. O que o nosso custo por unidade fez nos últimos seis meses, e por quê?**
Plotem o custo unitário e anotem as mudanças de arquitetura, preço e volume. Perguntem quais mudanças foram deliberadas. Se a tendência é uma surpresa, discutam que dados faltam. Acrescentem uma medida de qualidade ao gráfico.

**3. Quais dos nossos recursos desligaríamos amanhã se ousássemos?**
Listem candidatos: ambientes ociosos, bancos de dados superdimensionados, armazenamento esquecido. Para cada um, perguntem qual o risco e quem decide. Combinem um modo seguro de testar a remoção de um, como programar ou tirar um snapshot primeiro.

**4. Como saberíamos em um dia se um job passasse a custar dez vezes mais?**
Percorram o caminho do alerta da fatura até o responsável. Testem-no com um exemplo passado. A conversa deve revelar atrasos e lacunas de responsabilidade. Combinem um tempo-alvo para reconhecer e decidir e quem fica de ponto.

**5. Quanto do nosso uso de base poderíamos comprometer com segurança, e o que nos faria errar?**
Examinem o histórico de uso em busca de um piso estável e dos riscos a ele: mudanças de produto, migrações, mudanças de preço. Decidam um primeiro compromisso modesto e uma data de revisão. Incluam as finanças na discussão.

**6. Que compensação entre custo e confiabilidade estamos fazendo por acidente?**
Revejam as economias e incidentes recentes. Algum estava relacionado? Discutam como tornar explícita a compensação, por exemplo ligando as revisões de custo aos orçamentos de erro. Decidam quem pode aprovar um corte que afeta a confiabilidade.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega tomam as decisões que conduzem o custo e estão em melhor posição para reduzi-lo. Devem etiquetar na criação, conferir regularmente sua visão de custos, embutir o custo nas discussões de projeto e tratar a redução de desperdício como trabalho normal. Devem poder ver o efeito de uma mudança no custo logo depois de fazê-la, o que apoia o aprendizado rápido.

### Equipes de serviço e operações

As equipes de operações e de plataforma conduzem serviços compartilhados, impõem políticas e operam os alertas de anomalias. Devem manter simples a conformidade das etiquetas, fornecer relatórios de autoatendimento e publicar regras claras para o custo compartilhado. Devem observar o custo e a confiabilidade das plataformas que fornecem e ajudar as equipes a agir sem se tornarem um portão.

### Liderança e governança

Os líderes e as finanças querem gasto previsível e bom valor. Devem financiar as ferramentas e o tempo para o trabalho de custos, aceitar faixas nas previsões, evitar tabelas de classificação de equipes e pedir o custo unitário ao lado da qualidade. A governança deve conferir se os compromissos são feitos com dados e se as alegações de sustentabilidade declaram seu método.

### Clientes e usuários

Os usuários sentem o custo da nuvem indiretamente, por preços, funcionalidades ou pela estabilidade do serviço. Beneficiam-se quando as economias financiam melhorias e sofrem quando os cortes reduzem a qualidade. Onde os usuários são cobrados pelo consumo, querem faturas claras e a capacidade de influenciá-las.

## Na prática: um exemplo de gestão de serviços

Um varejista on-line regional opera sua loja e a plataforma de pedidos em uma nuvem pública, com seis equipes de engenharia. Os números abaixo são ilustrativos.

O gasto em nuvem subiu de forma constante ao longo de um ano, e o diretor financeiro pede um corte. O líder de FinOps puxa os dados de faturamento. A cobertura da alocação é de 68%, com um terço do gasto sem etiqueta em contas de teste. O custo por pedido concluído é de US$0,31, acima de US$0,27 seis meses antes, enquanto o volume de pedidos cresceu 15%. A taxa de desperdício pelas regras da equipe é de 14% do gasto no escopo, sobretudo ambientes de não produção rodando à noite e nos fins de semana e alguns bancos de dados superdimensionados. A cobertura de compromissos é de 20% da base estável, com 97% de utilização do que foi comprado. Uma variação da previsão de mais 18% no último trimestre seguiu uma campanha de marketing de que ninguém avisara a equipe de plataforma. Um job de dados descontrolado em uma conta rodou por dois dias antes de alguém notar.

O líder combina quatro mudanças com as equipes de engenharia. Uma política de etiquetas bloqueia novos recursos sem etiquetas de responsável e de serviço, com um período de carência de duas semanas. Cada equipe recebe uma visão semanal de custos e um breve espaço na conversa quinzenal de custos. Os ambientes de não produção são programados para parar fora do horário de trabalho, e os três bancos de dados superdimensionados são redimensionados após conferir seu desempenho contra os objetivos de nível de serviço. Um primeiro compromisso cobre 60% da base estável, com uma revisão em três meses. Um alerta de anomalia vai para a equipe responsável, com a expectativa de uma decisão registrada em até quatro horas, e o calendário de planejamento agora inclui as campanhas de marketing.

Depois de um trimestre, a cobertura da alocação é de 93%, a taxa de desperdício cai para 6%, o custo por pedido cai para US$0,26 sem mudança na latência nem na taxa de erros do checkout e a variação da previsão é de mais 5%. A cobertura de compromissos é de 55% com 96% de utilização. A mediana do tempo até reconhecer anomalias é de 2 horas, com o 85º percentil em 6. O diretor financeiro pede uma tabela de classificação com o custo por equipe. O líder de FinOps recusa, explicando que as equipes operam serviços diferentes com crescimento diferente, e oferece em vez disso a tendência de custo unitário de cada equipe com suas medidas de confiabilidade. A decisão é registrada, e a data da próxima revisão é definida.

## Ágil, IA, automação e análise

### Ágil

Dê aos engenheiros os dados de custo e a autoridade para agir e reveja-os na mesma cadência da confiabilidade. O cuidado é que metas de custo definidas sem contexto reduzem a confiabilidade ou atrasam trabalho útil.

### IA

Os serviços de IA podem ser uma parcela de rápido crescimento do custo de nuvem; por isso dê a eles alocação, custo unitário e alertas de anomalia próprios. Pareie o custo por requisição com a qualidade das respostas e com o valor entregue. O cuidado é que cortar o custo de IA trocando por um modelo mais fraco pode elevar o retrabalho humano.

### Automação

Automatize as conferências de etiquetas, os alertas de anomalias e as sugestões de redimensionamento e meça a automação pelos alertas falsos e pelas economias que de fato se concretizaram. O cuidado é que desligamentos automáticos de recursos ociosos podem remover algo que era necessário.

### Análise

Mostre o custo unitário e o desperdício com a variação da previsão e a atualidade dos dados. A decisão informada é onde otimizar e a que se comprometer. O cuidado é que as decisões de compromisso dependem de previsões; por isso declare sua incerteza.

## Olhar setorial

**Startup.** Créditos e faturas baixas podem esconder maus hábitos que se tornam caros em escala. Etiquete desde o primeiro dia, programe os recursos de não produção e acompanhe cedo o custo por cliente. Comprometa-se apenas quando a demanda for previsível.

**Pequena empresa.** Uma única conta e poucos serviços tornam simples a etiquetagem e a revisão. Reveja a fatura mensalmente com a pessoa que constrói o sistema, remova os recursos esquecidos e desconfie de compromissos longos. Um alerta de orçamento é o controle individual mais valioso.

**Grande empresa.** Muitas contas, equipes e provedores pedem uma função central de FinOps que habilite as equipes em vez de controlá-las. Padronize as etiquetas e as exportações de faturamento entre provedores, negocie os compromissos centralmente e dê às equipes seus dados. Planeje as diferenças de relato em multinuvem.

**Governo e setor público.** Os arcabouços de compras, a residência de dados e os orçamentos anuais fixos limitam as escolhas. Documente as decisões de custo e de região, modele o efeito do gasto variável sobre as dotações e mantenha trilhas de auditoria. Compromissos públicos de sustentabilidade podem exigir emissões relatadas com seus métodos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos de uma prática de FinOps são o tempo de algumas pessoas para conduzir os relatórios, a política de etiquetas e a conversa regular; as ferramentas, que podem ser fornecidas pela plataforma de nuvem ou compradas; e o tempo de engenharia para agir sobre os achados. Uma pequena prática pode começar com uma exportação de faturamento e uma planilha.

Os retornos vêm de menos desperdício, melhores preços por compromissos, menos surpresas e melhores decisões sobre arquitetura. Construa o argumento com os seus próprios números: a taxa de desperdício e seu custo na primeira revisão, as economias de programar os ambientes de não produção, o desconto de compromisso sobre a parcela comprometida e o custo evitado de anomalias pegas cedo. Evite citar porcentagens de desperdício ou cifras de economia do setor inteiro sem uma fonte e um método rastreáveis. Inclua o custo da prática e o risco do excesso de compromisso. O argumento financeiro das melhorias em geral é coberto no próximo tópico (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Uma equipe central que diz não.** Atrasa o trabalho e as equipes a contornam. Habilite as equipes com dados e barreiras de proteção.
- **Cortar custo sem observar a confiabilidade.** As economias voltam como incidentes. Pareie o custo com medidas de nível de serviço.
- **Perseguir a cobertura de compromissos.** Uma porcentagem alta com baixa utilização é desperdício. Acompanhe as duas.
- **Relatórios mensais só para as finanças.** Os engenheiros nunca os veem. Dê às equipes visões diárias ou semanais.
- **Etiquetar como projeto de limpeza.** Decai. Imponha as etiquetas na criação.
- **Classificar equipes por gasto.** O crescimento parece desperdício. Mostre as tendências de custo unitário com contexto.
- **Prever um único número.** A demanda variável o quebra. Use faixas e direcionadores.
- **Alegar emissões precisas.** Os métodos de estimativa são incertos. Declare o método e os limites.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Visibilidade e responsabilidade | Fatura mensal revista pelas finanças | Etiquetas usadas por algumas equipes | Etiquetas obrigatórias; equipes veem visões de custo semanais | Cobertura da alocação gerida; conjuntos compartilhados revistos | Os dados de custo fluem para as decisões de produto quase em tempo real entre provedores |
| Otimização | Limpezas ocasionais | Programações e redimensionamento por algumas equipes | Regras de desperdício e um backlog permanente de otimizações | Desperdício, compromissos e custo unitário geridos com companheiras de confiabilidade | Otimização contínua e automatizada com supervisão humana e aprendizado compartilhado |
| Planejamento | Orçamento anual | Previsões aproximadas | Previsões baseadas em direcionadores, com faixas | Variação analisada e devolvida; compromissos geridos de forma incremental | Previsão conjunta com o negócio, os fornecedores e as metas de sustentabilidade |

## Lista de verificação

- [ ] Um pequeno conjunto obrigatório de etiquetas (responsável, serviço, ambiente) é imposto na criação dos recursos.
- [ ] A cobertura da alocação é relatada semanalmente, com os maiores itens sem etiqueta listados.
- [ ] Cada equipe tem uma visão semanal de custos com tendências e anomalias.
- [ ] Uma conversa regular entre engenharia e finanças sobre custos está no calendário.
- [ ] O custo unitário de nuvem é acompanhado ao lado da disponibilidade, da latência e da taxa de erros.
- [ ] As regras de desperdício estão escritas e aplicadas, com as exclusões rotuladas.
- [ ] Os compromissos são feitos de forma incremental contra o uso de base estável, com cobertura e utilização acompanhadas.
- [ ] As previsões usam direcionadores e faixas, e a variação é analisada.
- [ ] Os alertas de anomalias chegam aos responsáveis com um tempo esperado para decidir.
- [ ] As estimativas de emissões, se relatadas, declaram seu método e limites.

## Prompts de IA

**Analise uma tendência de custo.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Redija uma política de etiquetas.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Defina regras de desperdício.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Planeje um primeiro compromisso.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de custo de nuvem.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de custo de nuvem traz seu vetor de manipulação, sua barreira de proteção e sua companheira de confiabilidade.

## Ideias-chave

- Torne o custo visível e com dono: imponha etiquetas na criação e dê a cada equipe a sua visão semanal.
- Meça o custo por unidade ao lado da confiabilidade e da qualidade, nunca sozinho.
- Remova o desperdício como parte do trabalho normal, guiado por regras escritas.
- Comprometa-se gradualmente com a base estável e acompanhe a cobertura e a utilização.
- Preveja com direcionadores e faixas e observe as anomalias com uma resposta rápida.
- Não classifique equipes pelo gasto e declare o método e os limites de qualquer estimativa de emissões.

## Referências e leituras complementares

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Computação em nuvem](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pague pelo uso](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Escalonamento automático](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Computação sem servidor](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Desconto por volume](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Pegada de carbono](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Detecção de anomalias](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Análise de variação](https://en.wikipedia.org/wiki/Variance_analysis).
