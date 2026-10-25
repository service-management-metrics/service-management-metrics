# Relatórios regulatórios e governamentais

**O relato obrigatório é uma exigência fixa em torno da qual projetar; por isso construa-o a partir dos mesmos registros que você usa para operar o serviço, mantenha a visão de relato separada da visão de aprendizado e proteja as pessoas que fazem o trabalho de metas que o distorcem.**

## Visão geral e motivação

Muitas organizações precisam relatar sobre seus serviços quer queiram ou não. Os reguladores pedem notificações de incidentes, cifras de disponibilidade e evidências de controles. Os governos exigem que os órgãos publiquem dados de desempenho, gastos e declarações de acessibilidade. Financiadores e órgãos de supervisão pedem resultados em relação aos compromissos. Os contratos exigem relatórios de serviço. Nesses cenários, o relato não é uma escolha de gestão interna. É uma obrigação com prazo, uma definição e, às vezes, uma penalidade.

O [setor público](https://en.wikipedia.org/wiki/Public_sector) tem características particulares. A [responsabilização](https://en.wikipedia.org/wiki/Accountability) perante os cidadãos e os órgãos eleitos é um dever central e é exercida por meio de auditoria, legislação, [leis de acesso à informação](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) e resultados publicados. As práticas de [governo aberto](https://en.wikipedia.org/wiki/Open_government) e de [dados abertos](https://en.wikipedia.org/wiki/Open_data) tornam a informação disponível para escrutínio e reuso. As regras de [compras públicas](https://en.wikipedia.org/wiki/Public_procurement) moldam o que pode ser comprado e como, e as obrigações de [gestão de documentos](https://en.wikipedia.org/wiki/Records_management) regem por quanto tempo a informação é guardada. O [valor pelo dinheiro (value for money)](https://en.wikipedia.org/wiki/Value_for_money) é um teste comum do gasto público, e órgãos independentes realizam [auditorias de desempenho](https://en.wikipedia.org/wiki/Performance_audit) para examiná-lo. Os detalhes diferem por país, nível de governo e setor, e este tópico descreve prática de medição, e não exigências legais. Trabalhe com seus colegas do jurídico, da conformidade e de gestão de documentos.

As organizações reguladas do setor privado, como as de finanças, saúde, energia e telecomunicações, compartilham muitas dessas características. Enfrentam deveres de notificação de incidentes, relatos de resiliência e revisões de supervisão. O fio comum é que alguém de fora da equipe de entrega define o que deve ser relatado e até quando.

A entrega contínua e a prática do ITIL têm ambas algo a oferecer. O objetivo ágil de colaboração contínua com as partes interessadas se estende aos órgãos de supervisão, que são partes interessadas com necessidades legítimas, e conversas precoces sobre o que exigem podem prevenir retrabalho. O hábito ágil de entregar pequenos incrementos funcionais continuamente combina com o relato: os relatórios produzidos automaticamente a partir de sistemas de registro são mais exatos e mais baratos que os montados à mão a cada trimestre. A prática de medição e relato do ITIL e sua gestão de níveis de serviço dão o vocabulário para definir o que é medido e compartilhado.

As obrigações de relato criam três perigos bem conhecidos.

- **Distorção por metas.** Quando uma cifra relatada traz consequência, o trabalho se curva em direção à cifra. A literatura do setor público sobre metas, incluindo os escritos de John Seddon sobre pensamento sistêmico no setor público e a análise de Jerry Muller sobre a fixação por métricas, descreve muitos casos em que atingir a meta e servir ao público divergiram. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica com toda a força (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).
- **Dois conjuntos de números.** A definição legal de uma cifra muitas vezes difere da que a equipe usa internamente. Se a equipe gerencia por uma e relata outra, ninguém confia em nenhuma. Mantenha as duas visíveis, reconcilie-as e explique as diferenças.
- **O relato como ônus.** Pedidos manuais, repetidos e inconsistentes consomem pessoas qualificadas. Quanto mais o relato depende de trabalho heroico em planilhas, mais erro e atraso se infiltram.

Este tópico se apoia nas medidas de conformidade, riscos e fornecedores desta parte (veja o tópico 8.2, Métricas de riscos e controles, o tópico 8.3, Métricas de conformidade e auditoria, e o tópico 8.4, Métricas de fornecedores e contratos) e nas bases de dados da primeira parte (veja o tópico 1.5, Fontes de dados e instrumentação).

## Princípios-chave

- **Trate as obrigações como insumos de projeto.** Liste-as cedo, com definições, prazos e responsáveis, e projete a coleta de dados em torno delas.
- **Produza relatórios a partir de sistemas de registro.** Automatize a extração e mantenha visível a linhagem.
- **Separe a visão de relato da visão de aprendizado.** As equipes precisam de medidas de trabalho francas, não limitadas pelo que é relatado.
- **Reconcilie as definições.** Mostre como as cifras legais se relacionam com as medidas da própria equipe.
- **Relate com honestidade, incluindo as más notícias.** Correções e contexto constroem confiança.
- **Proteja as pessoas de metas perversas.** Use metas legais com medidas companheiras e explique seus limites.
- **Torne utilizáveis os dados publicados.** Acessibilidade, clareza e formato importam para o público.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de obrigações de relato | Proporção das obrigações de relato com um responsável nomeado, uma definição declarada, uma fonte de dados e uma entrada no calendário | obrigações com os quatro / obrigações de relato no escopo | porcentagem | Registro de obrigações | Medição e relato; governança | Acordo de trabalho com as partes interessadas sobre necessidades de informação | Trimestral |
| Pontualidade dos relatórios | Proporção dos relatórios exigidos entregues até o prazo | relatórios entregues até a data de vencimento / relatórios devidos no período | porcentagem | Calendário de relatórios e registros de entrega | Medição e relato | Compromissos com as partes interessadas cumpridos | Mensal |
| Taxa de retificação | Proporção dos relatórios ou cifras entregues depois corrigidos | relatórios ou cifras corrigidos após a entrega / relatórios ou cifras entregues | porcentagem | Registro de entregas e registro de correções | Medição e relato; melhoria contínua | Defeitos escapados | Trimestral |
| Cobertura de rastreabilidade | Proporção das cifras relatadas que podem ser rastreadas até um sistema de registro por etapas documentadas | cifras com linhagem documentada até um sistema de registro / cifras relatadas | porcentagem | Documentação de linhagem, especificações de relatórios | Medição e relato; gestão do conhecimento | Builds reproduzíveis | Trimestral |
| Alinhamento de definições | Proporção das medidas relatadas para as quais a definição legal e a definição interna estão documentadas e reconciliadas | medidas com reconciliação documentada / medidas relatadas com uma definição legal | porcentagem | Registro de métricas | Medição e relato; gestão de níveis de serviço | Definição de pronto compartilhada | Trimestral |
| Esforço de relato | Horas-pessoa gastas produzindo um relatório recorrente | horas registradas por ciclo de relato, com a parcela que é extração e montagem manuais | horas | Estimativas de tempo, registros de esforço | Medição e relato; melhoria contínua | Custo do trabalho que não é entrega | Por ciclo de relato |
| Conformidade de acessibilidade publicada | Proporção dos relatórios e conjuntos de dados publicados que atendem à norma de acessibilidade exigida | itens publicados que passam em uma verificação de acessibilidade / itens publicados | porcentagem | Resultados de testes de acessibilidade | Medição e relato; gestão do conhecimento | Definição de pronto inclusiva | Trimestral |

Escreva a definição legal, a fonte e o prazo ao lado de cada medida relatada. Um relatório é "pontual" quando é aceito pelo órgão receptor, e não quando é enviado, se a aceitação for registrada. Uma retificação conta qualquer correção a uma cifra já entregue, voluntária ou exigida. O esforço de relato é uma medida de tendência para a organização e nunca uma medida de indivíduos. A conformidade de acessibilidade é conferida contra a norma que se aplica a você, como as Web Content Accessibility Guidelines.

## Recomendações

### Trate as obrigações como insumos de projeto

**1. Mantenha um registro de obrigações de relato.** Para cada uma, registre a exigência, a fonte legal ou contratual, o que deve ser relatado, a definição, o prazo, o órgão receptor, o responsável interno e a fonte de dados. Reveja-o quando leis, contratos ou reguladores mudarem. As obrigações conhecidas cedo podem ser projetadas, e as descobertas tarde têm de ser montadas à mão.

**2. Envolva cedo o órgão de supervisão.** Pergunte a reguladores, auditores e financiadores o que farão com os dados e do que precisam. Alguns ajudarão a moldar uma definição ou aceitarão dados em uma forma que você já produz. A prática ágil valoriza a colaboração com as partes interessadas, e os órgãos de supervisão são partes interessadas. Guarde registros dessas conversas e preserve a independência onde importa.

**3. Projete a coleta de dados para o relato desde o início.** Ao construir um serviço, inclua os eventos e campos de que os relatórios exigidos precisarão: registros de data e hora de incidentes, impacto, categorias, contagens de usuários. Acrescentá-los depois é caro. Defina-os uma vez e compartilhe a definição entre as equipes, com um único responsável pela definição (veja o tópico 1.4, Governança e responsabilidade das métricas).

### Produza relatórios a partir de sistemas de registro

**4. Automatize o pipeline do registro ao relatório.** Extraia dos sistemas de incidentes, mudanças e serviços com consultas programadas, aplique transformações documentadas e produza o relatório com um modelo revisado. Os relatórios automatizados são repetíveis, mais rápidos e mais fáceis de auditar que os manuais. Versione as consultas e os modelos para que um relatório passado possa ser reproduzido.

**5. Documente a linhagem.** Para cada cifra relatada, anote de onde vem, como é calculada e quem a confere. A cobertura de rastreabilidade mede quão bem isso é feito. Um auditor ou um jornalista que pergunta "de onde vem este número?" deve receber uma resposta clara em minutos.

**6. Revise antes da entrega, com um leitor independente.** Peça a alguém de fora da equipe que produziu o relatório que confira as definições, a aritmética e a narrativa. As revisões pegam erros e afirmações sem sustentação. Registre a revisão. Uma breve aprovação da pessoa responsável deixa clara a responsabilidade.

**7. Corrija abertamente.** Quando um erro é encontrado após a entrega, corrija-o logo, explique o que mudou e anote a causa. Uma taxa de retificação perto de zero é suspeita se os dados são complexos. Uma correção visível e rápida constrói mais confiança que uma cifra deixada de pé.

### Mantenha separados relato e aprendizado

**8. Mantenha uma visão de trabalho para a equipe.** As equipes precisam de medidas que as ajudem a melhorar, como percentis, a idade dos itens mais antigos e companheiras de qualidade. Raramente são iguais às cifras legais. Não restrinja a visão de trabalho ao que é relatado e não gerencie apenas pela cifra relatada.

**9. Reconcilie as definições legais e internas.** Onde uma medida exigida difere da da equipe, documente as diferenças e mostre as duas. Por exemplo, a cifra de disponibilidade de um regulador pode excluir a manutenção planejada, enquanto os usuários a vivenciam como indisponibilidade. Mostre a reconciliação no registro de métricas e nas notas do relatório. Isso protege contra o problema dos "dois conjuntos de números".

**10. Pareie as metas legais com companheiras.** Se uma meta é imposta, acrescente medidas que revelariam a distorção: qualidade, experiência do usuário e o trabalho deixado de fora. Por exemplo, pareie uma meta de tempo até a primeira resposta com uma medida de resolução e de contatos repetidos (veja o tópico 3.1, Métricas da central de serviços). Explique no relatório como a cifra deve ser lida.

### Publique para o público

**11. Torne utilizável a informação publicada.** Publique em formatos abertos e legíveis por máquina onde a lei e a privacidade permitirem, com descrições, definições e datas claras. Atenda às normas de acessibilidade para documentos e páginas da web. Publicar dados de um modo que as pessoas não consigam ler nem reutilizar cumpre a letra e derrota o propósito. Teste com usuários reais, incluindo os que usam tecnologia assistiva (veja o tópico 6.4, Experiência de usuários e colaboradores).

**12. Proteja a privacidade e a segurança no que você publica.** Agregue e suprima números pequenos que possam identificar pessoas, evite publicar detalhes que ajudem atacantes e confira as regras de divulgação com especialistas. Aplique o mesmo cuidado às respostas segundo as leis de acesso à informação. Registre as decisões sobre ocultação e os motivos.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de obrigações de relato | Tratar as obrigações de modo estreito; listar o responsável sem acordo | Revisão do registro pela conformidade ou pela auditoria interna; confirmação dos responsáveis |
| Pontualidade dos relatórios | Entregar relatórios incompletos para cumprir a data; contar rascunhos como entregas | Verificação de completude na entrega; contar apenas relatórios aceitos; taxa de retificação |
| Taxa de retificação | Suprimir correções; fazer correções em silêncio | Registro de correções revisto por um leitor independente; uma taxa baixa é lida com a rastreabilidade |
| Cobertura de rastreabilidade | Documentar a linhagem de modo superficial; incluir só cifras simples | Amostrar a linhagem refazendo um cálculo a partir da fonte |
| Alinhamento de definições | Declarar as definições alinhadas sem reconciliação; adotar a definição legal só no relatório | Documento de reconciliação revisto; mostrar as duas cifras lado a lado |
| Esforço de relato | Não registrar horas; mover o trabalho para outras equipes | Comparar com o feedback da equipe; incluir todos os colaboradores na estimativa |
| Conformidade de acessibilidade publicada | Rodar um verificador que acha só alguns problemas; publicar uma versão acessível separada que fica defasada | Teste manual com tecnologia assistiva; conferir a paridade entre as versões |

Uma leitura saudável é cada obrigação com responsável, relatórios no prazo e exatos com correções visíveis, cifras rastreáveis até os sistemas de registro, definições legais e internas reconciliadas, esforço de relato em queda e informação publicada que o público consegue usar.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Montagem manual de relatórios | Flexível; funciona com qualquer dado | Lenta, sujeita a erros, dependente de indivíduos |
| Relato automatizado | Repetível, auditável, barato de rodar | Esforço de implantação; pode entrincheirar uma definição ruim |
| Um só conjunto de medidas para tudo | Simples | Distorce o trabalho; as cifras legais raramente servem às necessidades da equipe |
| Visões separadas de relato e de aprendizado | Aprendizado franco; relato honesto | Exige reconciliação e disciplina |
| Metas legais rígidas | Responsabilização clara | Efeitos perversos; manipulação |
| Metas com companheiras e contexto | Revela a distorção | Mais para explicar |
| Engajamento precoce com reguladores | Menos surpresas | Tempo; limites a manter |
| Relacionamento apenas à distância | Independência clara | Feedback tardio; retrabalho |

A resposta pragmática é automatizar os relatórios a partir de sistemas de registro, manter uma visão de trabalho da equipe separada da visão de relato, reconciliar as definições abertamente e engajar cedo os órgãos de supervisão, preservando a independência deles.

## Perguntas para discutir com sua equipe

**1. Quais relatórios devemos, a quem e até quando, e quem é dono de cada um?**
Montem a lista na sala e comparem-na com o registro. Costumam aparecer lacunas: relatórios devidos por contratos, a financiadores ou por regras que poucos conhecem. O facilitador deve registrar os novos itens e atribuir responsáveis.

**2. Qual cifra relatada gerenciaríamos de outro modo se ela não fosse relatada?**
Escolham uma medida legal ou contratual e perguntem o que a equipe faria se ninguém a medisse. A resposta revela onde a cifra e o propósito divergem. Discutam que medida companheira mostraria a diferença.

**3. Conseguimos reproduzir hoje o relatório do último trimestre a partir da fonte?**
Tentem com um relatório. Anotem o que é manual, não documentado ou perdido. Combinem o primeiro passo para automatizar ou documentar e quem o fará.

**4. Como tratamos um erro achado depois da entrega?**
Revejam o processo e o último exemplo. A correção foi rápida e aberta? Alguém teve medo de levantá-lo? Combinem o que torna a correção normal.

**5. O que uma pessoa que usa tecnologia assistiva vivenciaria ao ler o nosso relatório publicado?**
Testem juntos um item publicado ou revejam uma verificação de acessibilidade recente. Perguntem quem é dono da acessibilidade dos documentos publicados. Combinem uma correção e um processo para evitar a repetição.

**6. O que o regulador ou órgão de supervisão realmente faz com os nossos dados?**
Muitas equipes não sabem. Planejem uma conversa para descobrir e para perguntar se uma forma diferente os serviria igualmente bem. O facilitador deve anotar os limites de independência.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega constroem os eventos e campos de que os relatórios dependem e sentem a pressão das metas legais. Devem incluir as necessidades de relato na definição de pronto, manter uma visão de trabalho franca e sinalizar quando uma meta distorce o trabalho. Conversas precoces com quem relata ajudam a evitar retrabalho.

### Equipes de serviço e operações

As equipes de operações geram a maior parte dos dados subjacentes e muitas vezes preparam os relatórios. Devem documentar a linhagem, automatizar a extração e manter um registro de correções. Estão bem situadas para explicar como uma cifra deve ser lida e para avisar quando ela engana.

### Liderança e governança

Os líderes são responsáveis pela exatidão e pela honestidade do que é relatado. Devem pedir rastreabilidade e reconciliação, resistir a transformar cifras legais em metas individuais, proteger as pessoas que levantam erros e apoiar o engajamento com os órgãos de supervisão. A governança deve rever o registro de obrigações e o histórico de retificações.

### Clientes e usuários

O público e os clientes contam com a informação publicada para cobrar responsabilidade dos serviços. Precisam de dados que possam achar, ler e reutilizar, em formatos acessíveis, com explicações claras do que significam. Merecem também aviso rápido quando um incidente os afeta, como as regras podem exigir.

## Na prática: um exemplo de gestão de serviços

Um órgão nacional presta serviços de licenciamento on-line usados por vários milhões de pessoas por ano. Deve relatar mensalmente a um ministério, publicar dados anuais de desempenho e notificar seu regulador de incidentes graves de serviço em um prazo fixo. Os números abaixo são ilustrativos.

Uma revisão interna descobre que o órgão deve 31 relatórios de diversos tipos e que apenas 22 estão no registro de obrigações com um responsável nomeado e uma definição, uma cobertura de 71%. As cifras mensais são montadas à mão em cerca de 60 horas, sobretudo puxando de três sistemas para uma planilha. A rastreabilidade é ruim: para a cifra de destaque, a disponibilidade, ninguém consegue reproduzir o número do ano passado. A definição de disponibilidade do ministério exclui a manutenção planejada, e a visão de trabalho do próprio órgão a conta, o que explica por que usuários e ministério veem quadros diferentes. O órgão cumpriu a meta de tempo até a primeira resposta todo mês, e a central de serviços começou a confirmar automaticamente as requisições para atingi-la, enquanto o tempo até a resolução subiu. Dois relatórios publicados falharam num teste de acessibilidade quando conferidos com um leitor de tela.

O chefe de desempenho de serviços do órgão combina mudanças com o ministério e as equipes de entrega e operações. O registro de obrigações fica completo, com responsáveis, definições e datas. As cifras mensais passam a vir de consultas programadas dos sistemas de incidentes e de monitoramento, com uma transformação documentada e um modelo revisado, o que corta o esforço para cerca de 8 horas. Uma nota de reconciliação expõe as definições legal e interna de disponibilidade, com as duas cifras mostradas no relatório. A meta de primeira resposta é pareada com o tempo até a resolução e os contatos repetidos na visão de trabalho, e o ministério concorda em ver as medidas companheiras. O órgão também corrige uma cifra de disponibilidade do trimestre anterior, explica a causa e publica a correção. Os relatórios publicados passam a ser produzidos em um modelo acessível, e um teste com leitor de tela é acrescentado à lista de verificação de release.

Um ano depois, a cobertura de obrigações é de 100%, os relatórios estão no prazo, a taxa de retificação é baixa com cada correção explicada, a rastreabilidade cobre todas as cifras de destaque e o esforço de relato caiu cerca de 85%. O gabinete do ministro pede uma nova meta de 99,95% de disponibilidade, com os líderes do órgão como responsáveis. O chefe de desempenho de serviços explica a diferença entre a cifra legal e a vivenciada pelo usuário e propõe uma meta com medidas companheiras e uma data de revisão. A decisão é registrada, e o ministério concorda com uma revisão conjunta da definição antes do próximo ano de relato.

## Ágil, IA, automação e análise

### Ágil

Projete para as exigências fixas de relato e mantenha a visão de relato separada da visão de aprendizado. O cuidado é que uma meta de relato pode distorcer o trabalho que descreve.

### IA

Onde a IA apoia processos regulados, o relatório pode precisar mostrar como as decisões foram tomadas e quem foi o responsável. Confira as exigências com seu assessor jurídico e guarde registros do uso de IA. O cuidado é que a saída de IA usada em uma entrega precisa de verificação humana.

### Automação

Construa os relatórios a partir dos mesmos registros usados para operar o serviço e automatize verificações que rodam antes da entrega. Meça o processo pelas retificações. O cuidado é que a automação pode propagar um erro a muitos relatórios.

### Análise

Relate com as definições usadas e a data dos dados. A decisão informada é o que deve ser relatado e de onde vêm os dados. O cuidado é que as definições diferem por regime; por isso evite presumir que uma é universal.

## Olhar setorial

**Startup.** Os deveres de relato podem chegar com um primeiro cliente corporativo ou um regulador. Comece com uma lista curta de obrigações, produza os relatórios a partir dos seus próprios sistemas e evite construir um processo de relato separado. Tenha cuidado ao prometer níveis de serviço em contratos.

**Pequena empresa.** As obrigações costumam ser contratuais ou ligadas a um único regulador. Mantenha um calendário, use modelos e documente como os números são feitos. Um relatório pequeno e exato vale mais que um grande e apressado.

**Grande empresa.** Muitas obrigações entre regiões e regimes pedem um registro central, definições comuns e ferramentas de extração compartilhadas. Cuidado com pedidos duplicados às mesmas equipes. Use uma única fonte de verdade para os dados de incidentes e de serviços, com visões para cada regime.

**Governo e setor público.** É o terreno de casa deste tópico. Planeje para legislação, pedidos ministeriais, auditoria, pedidos de acesso à informação e escrutínio público. Publique dados abertamente onde a lei permitir, cumpra os deveres de acessibilidade, guarde registros pelo período exigido e documente as decisões. Resista a transformar cifras legais em metas de desempenho individual e considere os efeitos das metas sobre cidadãos e pessoal.

## Business case: motivações, ROI e TCO

Os custos são o esforço para construir e manter o registro de obrigações, a engenharia da extração automatizada e dos modelos, o tempo de revisão e o teste de acessibilidade. Em comparação com a montagem manual, a automação desloca o esforço do trabalho repetido para uma construção única e uma manutenção leve.

Os retornos são menos erros e correções, menos tempo do pessoal gasto na montagem, respostas mais rápidas aos pedidos da supervisão e maior confiança de reguladores e do público. Construa o argumento com os seus próprios dados: horas por relatório antes e depois, o número e o efeito das retificações, o tempo para responder a uma pergunta da supervisão e o custo de qualquer penalidade ou achado crítico de auditoria evitado. Evite citar estimativas do ônus da conformidade a menos que possa rastrear a fonte e o método. Inclua o custo do engajamento contínuo com os órgãos de supervisão e compare-o com o custo das surpresas (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Gerenciar só pela cifra legal.** Distorce o trabalho. Mantenha uma visão de trabalho com medidas companheiras.
- **Dois conjuntos de números sem reconciliação.** A confiança desaba. Documente e mostre as diferenças.
- **Planilhas feitas à mão como sistema.** Quebram e dependem de indivíduos. Automatize a partir de sistemas de registro.
- **Entregar relatórios incompletos para cumprir uma data.** Troca uma falha por outra. Combine prorrogações ou entregue com ressalvas claras.
- **Correções em silêncio.** Minam a confiança. Corrija abertamente e explique.
- **Metas individuais a partir de cifras legais.** Premiam a manipulação e punem o pessoal honesto. Mantenha as cifras no nível do serviço.
- **Publicações ilegíveis.** A conformidade só na forma derrota o propósito. Publique dados utilizáveis e acessíveis.
- **Ignorar a privacidade na publicação.** Números pequenos podem identificar pessoas. Agregue e reveja a divulgação.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Obrigações e definições | Conhecidas por poucas pessoas | Lista parcial | Registro com responsáveis, definições e datas; definições legais e internas reconciliadas | Registro revisto frente a mudanças na lei; reconciliação mantida | Definições desenvolvidas em conjunto com os órgãos de supervisão; compartilhadas entre órgãos |
| Produção e qualidade | Montagem manual | Modelos, alguns scripts | Automatizada a partir de sistemas de registro com linhagem e revisão independente | Retificações analisadas; esforço e pontualidade geridos | Relatórios produzidos continuamente; os órgãos de supervisão acessam os dados diretamente |
| Uso e publicação | Relatar para satisfazer o pedido | Publicados sob demanda | Visão de trabalho separada da visão de relato; publicação acessível e reutilizável | Medidas companheiras com metas; teste das publicações com usuários | Dados abertos e ligados, com participação pública no projeto |

## Lista de verificação

- [ ] Um registro lista toda obrigação de relato com responsável, definição, fonte, prazo e órgão receptor.
- [ ] Os campos e eventos exigidos são embutidos nos serviços desde o início.
- [ ] Os relatórios são produzidos a partir de sistemas de registro por consultas e modelos versionados.
- [ ] Cada cifra relatada tem linhagem documentada e um verificador nomeado.
- [ ] Um leitor independente revê os relatórios antes da entrega.
- [ ] As definições legais e internas são reconciliadas, e ambas são mostradas.
- [ ] As correções são registradas, explicadas e publicadas logo.
- [ ] As metas legais têm medidas companheiras e contexto no relatório.
- [ ] Os relatórios e conjuntos de dados publicados atendem à norma de acessibilidade aplicável e à revisão de privacidade.
- [ ] Uma conversa com cada órgão de supervisão importante sobre suas necessidades está no calendário.

## Prompts de IA

**Construa um registro de obrigações.**

```text
Here is a list of reports, notifications, and publications that we believe we
owe: [paste with sources, in plain language]. Structure them into a register
with fields for requirement, source, definition, data source, due date,
receiving body, and owner role. Flag missing information and obligations that
look duplicated across teams. Do not give legal conclusions. List your
assumptions and questions for legal and compliance.
```

**Reconcilie duas definições.**

```text
The statutory definition of [measure] is: [text]. Our internal definition is:
[text]. Our data fields are: [list]. Explain the differences, describe how each
affects the number, suggest how to show both in a report, and propose a short
note explaining the difference to readers. Do not assume facts not given.
List your assumptions.
```

**Planeje a automação de um relatório.**

```text
We produce [report] monthly using these manual steps and sources: [list with
hours]. Propose a plan to automate it from systems of record, including
documented queries, a transformation step, lineage notes, review, and
reproducibility of past reports. Suggest what to keep manual and why. Do not
assume specific tools. List your assumptions and risks.
```

**Revise a usabilidade de um relatório publicado.**

```text
Here is the text structure of a report we plan to publish: [paste headings and
sample tables, with no sensitive content]. Review it for plain language,
definitions, context for figures, accessibility of tables and charts, and
privacy risks from small numbers. Suggest improvements. Remind me to test with
assistive technology and to check disclosure rules with specialists. List your
assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de relato legal ou regulado.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de relato mostra sua definição, sua reconciliação, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Trate as obrigações de relato como insumos de projeto, listadas com responsáveis, definições e prazos.
- Produza relatórios a partir de sistemas de registro, com linhagem e revisão independente.
- Mantenha uma visão de trabalho franca separada da visão de relato e reconcilie as definições abertamente.
- Pareie as metas legais com medidas companheiras e nunca as transforme em metas individuais.
- Corrija os erros aberta e rapidamente.
- Publique informação que o público possa achar, ler e reutilizar, com a privacidade protegida.

## Referências e leituras complementares

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Setor público](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Responsabilização](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Leis de acesso à informação por país](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Governo aberto](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Dados abertos](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Compras públicas](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Gestão de documentos](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Valor pelo dinheiro](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Auditoria de desempenho](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
