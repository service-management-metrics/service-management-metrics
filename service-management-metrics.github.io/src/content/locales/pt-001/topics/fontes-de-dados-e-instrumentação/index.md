# Fontes de dados e instrumentação

**Uma métrica só é tão confiável quanto os eventos que estão por baixo dela; por isso nomeie o sistema de registro de cada número, capture os eventos automaticamente no momento em que acontecem e teste o pipeline com o mesmo cuidado com que testa o gráfico.**

## Visão geral e motivação

A maioria dos programas de métricas gasta seu esforço em painéis e quase nenhum nos canos que os alimentam. É o contrário do que deveria ser. Um gráfico polido, construído sobre carimbos de data e hora inconsistentes, um campo de status que ninguém atualiza ou uma integração que parou em silêncio no mês passado, parece autoritativo e está errado. Este tópico cobre a base pouco glamorosa do resto do livro: de onde vêm os dados de serviço e de entrega, quão confiável é cada fonte e quais falhas de qualidade de dados invalidam uma métrica antes que alguém perceba.

As fontes se dividem em algumas famílias. Uma ferramenta de [gestão de serviços de TI (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) registra incidentes, requisições, problemas e mudanças, que o [ITIL](https://en.wikipedia.org/wiki/ITIL) trata como os registros centrais da operação de serviços. Um [sistema de rastreamento de issues](https://en.wikipedia.org/wiki/Issue_tracking_system) registra o backlog e a movimentação dos itens de trabalho das equipes ágeis. O [controle de versão](https://en.wikipedia.org/wiki/Version_control) registra commits, branches e merges. Um pipeline de [integração contínua e entrega contínua (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) registra builds, resultados de testes e implantações. As plataformas de monitoramento e de [observabilidade](https://en.wikipedia.org/wiki/Observability_(software)) emitem telemetria: métricas, logs e traces de sistemas em execução. Um [banco de dados de gerenciamento de configuração (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) registra os serviços e componentes com os quais as coisas se relacionam. As pesquisas registram o que nenhum sistema consegue observar, como satisfação e esforço.

Um evento de implantação escrito por um pipeline é objetivo e difícil de falsificar, um status de ticket alterado horas depois do trabalho é uma lembrança, e uma resposta de pesquisa é uma percepção. Saber que tipo de registro está por trás de um número diz qual falha procurar primeiro.

As visões ágil e ITIL se encontram nos mesmos dados: ambas são máquinas de estados com carimbos de data e hora; por isso registre cada mudança de estado como um evento com um horário confiável e derive as métricas dos eventos.

Três termos se repetem neste tópico. Um **sistema de registro** é a única fonte autoritativa para um fato, por exemplo o pipeline para "uma implantação aconteceu". A **instrumentação** é a captura deliberada de eventos, por código, configuração ou integração de ferramentas, de modo que uma métrica possa ser calculada sem que ninguém precise digitá-la. Um **modelo de status** é o conjunto de estados em que um item de trabalho ou registro pode estar e as transições permitidas entre eles. O modelo de status decide quais relógios podem sequer ser calculados.

Em escala empresarial e do setor público, o problema se agrava. Os dados passam por conectores, tarefas de [extração, transformação e carga (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) e camadas de relatório, e cada salto é uma chance de o significado se deslocar. Um campo que significa uma coisa na origem pode significar algo sutilmente diferente no data warehouse, e o número continua plausível. O remédio é encurtar a distância entre o evento e o painel e conferir o pipeline em um calendário.

## Princípios-chave

- **Capture eventos, não resumos.** Armazene as mudanças de estado brutas com carimbos de data e hora e calcule as métricas a partir delas, para que uma definição possa mudar sem perder o histórico.
- **Prefira a observação ao autorrelato.** Onde um sistema consegue ver o evento, use isso; reserve os relatos das pessoas para o que só elas podem dizer.
- **Nomeie um sistema de registro por fato.** Fontes duplicadas discordam, e a discordância corrói a confiança em ambas.
- **Projete o modelo de status antes da métrica.** Um relógio não pode ser calculado a partir de estados que não existem ou que significam coisas diferentes em equipes diferentes.
- **Trate o pipeline como um produto.** Ele tem responsáveis, testes, monitoramento e um registro de mudanças, porque a qualidade dos dados se deteriora em silêncio.
- **Mostre a proveniência.** Todo número de um painel deve levar de volta aos registros de origem em um ou dois cliques.
- **Colete apenas o que usará e proteja-o.** Cada campo é um custo e, quando diz respeito a pessoas, um dever de privacidade.

## Definições de métricas

As métricas abaixo medem a saúde do próprio fornecimento de dados. São o painel de instrumentos para os instrumentos.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de fontes | Proporção dos serviços e equipes no escopo cujos eventos chegam automaticamente ao armazém de métricas | serviços ou equipes com fluxo automatizado / serviços ou equipes no escopo; o "escopo" está listado no registro de métricas | porcentagem | Registro de métricas e configuração do pipeline | Medição e relatório; gestão de configuração de serviços | Acordo de trabalho da equipe sobre ferramentas | Trimestral |
| Completude de carimbos de data e hora | Proporção dos itens de trabalho encerrados que trazem todos os carimbos necessários para os relógios da métrica | itens encerrados com todos os carimbos de mudança de estado exigidos / itens encerrados no período; itens ainda abertos são excluídos | porcentagem | Histórico da ferramenta de ITSM ou do rastreador de issues | Gestão de incidentes; gestão de requisições de serviço | Histórico do quadro ou do fluxo de trabalho | Mensal |
| Taxa de retrodatação | Proporção das mudanças de estado registradas depois do fato, medida pela diferença entre o horário do evento e o horário em que foi inserido | mudanças de estado inseridas mais de 24 horas após o horário do evento / mudanças de estado no período; o relógio começa no evento e para na inserção | porcentagem | Trilha de auditoria do rastreador, ou horário do evento no pipeline versus horário de inserção | Habilitação de mudanças; gestão de incidentes | Definição de pronto | Mensal |
| Atualidade dos dados | Quão antigo é o dado mais novo de um painel no momento em que é visto | horário da visualização menos o horário do evento mais novo carregado; relate a mediana e o 95º percentil | horas | Registro de execução do pipeline e registro de carga do painel | Medição e relatório | Preparação da revisão com partes interessadas | Semanal |
| Variação de conciliação | Divergência entre duas fontes para a mesma contagem | diferença absoluta entre as duas contagens / contagem do sistema de registro, para um período e escopo fixos | porcentagem | Sistema de registro e camada de relatório | Gestão de nível de serviço; gestão financeira | Verificações do relatório de release | Mensal |
| Deriva do modelo de status | Número de nomes de status ou transições distintos em uso em comparação com o modelo documentado | status ou transições não documentados observados no período (contagem); os documentados são excluídos | contagem | Configuração do fluxo de trabalho do rastreador e histórico de eventos | Melhoria contínua | Acordos de trabalho sobre o fluxo | Trimestral |
| Taxa de resposta de pesquisas | Proporção das pessoas convidadas que concluíram uma pesquisa | respostas concluídas / convites entregues; convites devolvidos são excluídos | porcentagem | Ferramenta de pesquisa | Gestão de nível de serviço; experiência do cliente | Revisão com partes interessadas e feedback de melhoria | Por rodada de pesquisa |

A completude de carimbos de data e hora conta apenas itens encerrados, de modo que um backlog de itens antigos em aberto não consiga esconder uma lacuna. A taxa de retrodatação usa um limiar de 24 horas como exemplo; cada equipe escolhe um limiar que combine com o seu trabalho e o escreve.

## Recomendações

### Mapeie cada métrica até a sua fonte

**1. Construa um mapa de fontes antes de construir um painel.** Para cada métrica, registre o sistema de registro, o evento que inicia o relógio, o evento que o interrompe, o responsável pela fonte e o modo de falha conhecido. Se você não consegue nomear o sistema, ainda não sabe de onde o número vem. Guarde o mapa no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

**2. Escolha um sistema de registro por fato.** Uma implantação é registrada pelo pipeline, um incidente pela ferramenta de ITSM, uma mudança de código pelo controle de versão, uma relação entre serviços pelo CMDB. Onde duas ferramentas guardam o mesmo fato, decida qual prevalece e faça a outra ler dela. A conciliação vira então uma verificação, e não um debate.

### Capture os eventos no momento em que acontecem

**3. Instrumente o evento, não o relatório.** Deixe o pipeline registrar a implantação, o host de controle de versão registrar o merge e o sistema de monitoramento registrar o alerta. Dados que dependem de alguém lembrar de atualizar um campo se degradam com a distância do evento e com a carga de trabalho. Onde existe um evento automatizado, prefira-o a um substituto digitado por uma pessoa para o mesmo fato (veja o tópico 2.8, Métricas DORA).

**4. Faça das mudanças de status um efeito colateral do trabalho.** Se o merge de uma branch move o item de trabalho para "em revisão" ou uma implantação o move para "liberado", ninguém precisa lembrar. As integrações entre controle de versão, pipeline e rastreador eliminam a maior parte da retrodatação.

**5. Guarde os eventos brutos e mantenha-os imutáveis.** Armazene cada mudança de estado com o horário do evento, o horário da inserção e o tipo de ator (pessoa ou automação). Escreva as correções como novos eventos, e não como sobrescritas, para que o histórico da correção seja ele próprio um dado.

### Acerte o tempo

**6. Registre o tempo em um único padrão.** Armazene os carimbos de data e hora em [Tempo Universal Coordenado (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) em um formato inequívoco, como o definido pela ISO 8601 e pela RFC 3339, e converta para a hora local apenas para exibição. Fusos horários misturados e mudanças de horário de verão produzem em silêncio durações negativas e relógios errados por uma hora.

**7. Escreva as regras do relógio onde os dados vivem.** Para cada medida de tempo, declare qual evento inicia o relógio, qual o interrompe e quais status o pausam. Um estado de pausa é uma decisão de projeto. Relate com que frequência cada estado de pausa é usado, porque o relógio é onde os dados de serviço mais costumam ser moldados (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes).

### Projete o modelo de status

**8. Mantenha o modelo de status pequeno, compartilhado e documentado.** Cada status extra convida a uma interpretação diferente de cada equipe. Defina o que cada estado significa em uma frase, quem pode mover trabalho para ele e quais transições são permitidas. A idade do item de trabalho e as medidas de fluxo dependem desse modelo (veja o tópico 2.1, Medidas de fluxo), e a comparação entre equipes depende de elas usarem as mesmas palavras para os mesmos estados. Quando os dados o surpreenderem, suspeite primeiro do fluxo de trabalho: registre toda mudança em um fluxo ou campo com data e motivo e conte status não documentados como sinal de deriva.

### Mantenha o pipeline honesto

**9. Teste o pipeline como software.** Confira as contagens de linhas contra a origem, confira se os campos obrigatórios estão presentes, procure duplicatas e alerte quando um fluxo parar. Acrescente um indicador de atualidade a todo painel para que quem o vê saiba quão antigos são os dados. Uma falha silenciosa de conector que deixa na tela os números do mês passado está entre as falhas mais comuns e mais danosas desta área (veja o tópico 11.1, Projetar um painel de métricas de serviço).

**10. Concilie em um calendário e amostre à mão.** Compare uma contagem da camada de relatório com a origem para um período fixo e investigue a diferença. Depois leia uma pequena amostra de registros brutos. Uma amostra de quinze minutos muitas vezes encontra o que as verificações automáticas não encontram, como um status usado de maneira inesperada.

### Trate pessoas e pesquisas com cuidado

**11. Reserve as pesquisas para o que só uma pessoa pode dizer.** Satisfação, esforço, confiança e bem-estar não podem ser observados nos dados de sistema. Pergunte diretamente, mantenha as pesquisas curtas, varie o momento e relate a taxa de resposta e quem respondeu, já que as pessoas que respondem diferem das que não respondem, uma forma de [viés de seleção](https://en.wikipedia.org/wiki/Selection_bias). Leia os comentários abertos por inteiro (veja o tópico 6.1, Métricas de satisfação do cliente).

**12. Proteja dados pessoais e mantenha os dados no nível da equipe.** Dados de eventos sobre o trabalho podem identificar indivíduos por meio da autoria de commits, dos campos de responsável e de registros de conversas. Colete no nível de que a métrica precisa, agregue para equipes e serviços e aplique as regras de privacidade da sua jurisdição e da sua organização. Dados no nível individual, uma vez coletados, tendem a ser usados para classificar, o que corrompe a fonte (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de fontes | Contar um serviço como coberto depois de um fluxo ser conectado, mesmo que ele carregue quase nenhum evento; deixar serviços difíceis fora do escopo | Volume de eventos por serviço coberto comparado à sua atividade conhecida; revisar a lista de escopo contra o catálogo de serviços |
| Completude de carimbos de data e hora | Preencher os carimbos exigidos com o horário de encerramento para satisfazer a validação | Distribuição dos intervalos entre estados consecutivos; amostrar itens encerrados para ver se os horários são plausíveis |
| Taxa de retrodatação | Inserir mudanças logo abaixo do limiar; ampliar o limiar; registrar todas as mudanças por uma atualização em massa | Padrão de horário de inserção por hora; proporção de mudanças feitas por automação versus à mão; auditoria das edições em massa |
| Atualidade dos dados | Mostrar o horário da última atualização em vez do horário do evento mais novo | Horário do evento mais novo exibido no painel; alerta quando um fluxo não entrega eventos novos |
| Variação de conciliação | Escolher o período ou o escopo que concilia; ajustar a camada de relatório para coincidir com a origem sem achar a causa | Fixar escopo e período de antemão; registrar cada causa encontrada e revisar as causas a cada trimestre |
| Deriva do modelo de status | Reutilizar um status existente para um novo significado para não ser sinalizado; acrescentar status sem registrá-los | Comparar a configuração do fluxo de trabalho com o registro a cada revisão; ler uma amostra de itens em estados incomuns |
| Taxa de resposta de pesquisas | Convidar apenas pessoas propensas a responder; enviar lembretes a usuários satisfeitos; oferecer recompensas que enviesam as respostas | Perfil dos respondentes comparado à população de usuários; distribuição das respostas por rodada; comentários abertos lidos na revisão |

Uma leitura saudável é um conjunto de números enfadonhos: cobertura alta, retrodatação baixa e em queda, atualidade dentro da promessa declarada e uma causa conhecida sempre que a variação de conciliação for diferente de zero. Quando um número se move, alguém consegue dizer se o trabalho mudou ou se foi o instrumento.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Captura automatizada de eventos | Objetiva, oportuna, de baixo esforço depois de construída | Cobre apenas o que foi instrumentado; quebra em silêncio quando as ferramentas mudam |
| Entrada e atualização manual de status | Captura contexto e julgamento; funciona sem integração | Tardia, inconsistente e aberta à manipulação |
| Um armazém central de métricas | Uma definição, um lugar para testar e governar | Exige financiamento e responsável; pode virar um gargalo |
| Cada equipe guarda seus dados | Combina com o trabalho local; rápido de começar | As definições divergem; as consolidações ficam pouco confiáveis |
| Eventos brutos guardados a longo prazo | As definições podem mudar e o histórico pode ser recalculado | Custo de armazenamento e privacidade; mais a proteger |

Automatize o que é observável, pergunte às pessoas sobre o que não é e guarde o registro bruto. Invista primeiro nas fontes por trás das duas ou três métricas que a equipe realmente usa, e não em uma plataforma de dados para todo número imaginável.

## Perguntas para discutir com sua equipe

**1. Para a nossa métrica mais importante, qual sistema é o sistema de registro, e como sabemos?**
Peça ao grupo que rastreie o número do painel até o primeiro evento. Anote cada ponto em que uma pessoa ou uma transformação toca os dados. O facilitador deve procurar etapas que ninguém consegue explicar, porque é por aí que a primeira investigação deve começar.

**2. Quais dos nossos carimbos de data e hora são escritos por um sistema e quais são digitados por uma pessoa?**
Liste os relógios em uso, como tempo de resposta, tempo de resolução e tempo de ciclo. Marque cada início e parada como automático ou manual. Para os manuais, pergunte quanto tempo depois do evento a entrada costuma ser feita. A discussão muitas vezes mostra que a métrica mais debatida se apoia no carimbo menos confiável.

**3. O que significam os nossos status, e todas as equipes querem dizer a mesma coisa?**
Ponha o fluxo de trabalho num quadro e peça a pessoas de equipes diferentes que expliquem cada estado com suas palavras. Compare as explicações. Conte os estados em que o relógio pausa e pergunte quem pode usá-los e por quê. Combinem uma mudança para remover a ambiguidade e registrem-na com o motivo.

**4. Como descobriríamos se um fluxo parasse em silêncio?**
Pergunte quando alguém conferiu pela última vez se os dados do painel estão atuais. Discuta que alerta ou indicador de atualidade pegaria um conector parado em um dia. O facilitador deve insistir em um responsável nomeado e em uma verificação concreta, e não em uma intenção geral de ter cuidado.

**5. O que coletamos e nunca usamos, e o que usamos e não coletamos bem?**
Ponha a lista de campos e a lista de métricas lado a lado. Marque os campos que não alimentam nenhuma decisão e as métricas que se apoiam em campos ruins. Decida um campo a deixar de coletar e um a melhorar neste trimestre.

**6. Quem responde às nossas pesquisas, e quem não responde?**
Compare os respondentes com a população de usuários ou membros da equipe. Olhe as taxas de resposta por grupo e por hora do dia ou da semana. Discuta o que o silêncio pode significar e como alcançar os grupos calados sem pressão. Combinem como a taxa de resposta será mostrada ao lado de cada resultado de pesquisa.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega geram a maior parte dos dados objetivos: commits, revisões, builds e implantações. Elas se beneficiam de uma instrumentação que faz das mudanças de status um efeito colateral do trabalho, de modo que o quadro permaneça honesto sem esforço extra. Devem manter o fluxo de trabalho pequeno e desconfiar de usar a atividade no controle de versão como medida de esforço (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo).

### Equipes de serviço e operações

As equipes de serviço dependem de registros criados por pessoas sob pressão, muitas vezes durante um incidente. As regras do relógio, os estados de pausa e os campos de prioridade são onde a deriva ocorre. As equipes de operações devem tornar automática a captura dos horários principais sempre que possível, como o horário do alerta e o do reconhecimento, auditar o uso de estados de pausa e manter os dados de monitoramento separados do registro do ticket para que cada um possa conferir o outro (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas).

### Liderança e governança

Os líderes decidem quanto investir nas bases de dados e definem os incentivos que determinam se os dados continuam honestos. Devem perguntar de onde vem um número antes de perguntar por que ele se moveu, financiar a responsabilidade pelo pipeline como trabalho contínuo e esperar uma data de atualidade e uma definição em todo relatório. Os órgãos de governança devem tratar uma mudança documentada em uma fonte ou em uma definição como um evento normal, e não como uma falha.

### Clientes e usuários

Os usuários fornecem os dados que mais importam sobre a experiência, em geral respondendo a pesquisas, avaliando interações ou relatando problemas. Precisam saber o que é coletado, por quê e o que mudará em consequência. Pesquisas curtas e um acompanhamento visível mantêm saudável a taxa de resposta. Os relatórios de nível de serviço voltados ao cliente devem declarar suas fontes e definições (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte tem uma equipe de plataforma, três equipes de produto e uma central de serviços. Todos os números deste exemplo são ilustrativos.

A liderança pergunta por que o lead time de mudança do relatório mensal caiu de uma mediana de 9 dias para 3 dias em um trimestre, enquanto as equipes de produto dizem que não mudaram a forma de trabalhar. O responsável pela engenharia de plataforma suspeita do instrumento e pede um mapa de fontes da métrica.

O mapa mostra que o lead time começa quando um registro de mudança é criado na ferramenta de ITSM e termina quando seu status é definido como "implementada". Duas equipes de produto haviam passado a criar o registro depois que o trabalho estava pronto, de modo que o relógio começava tarde. Uma amostra de 40 registros revela que 12 foram criados no mesmo dia da implantação. A taxa de retrodatação, medida como a diferença entre o evento de implantação no pipeline e a inserção do status "implementada", era de 31% acima do limiar de 24 horas que a equipe havia definido.

A equipe faz três mudanças. Primeiro, o início do relógio passa para o primeiro commit ligado à mudança, extraído do controle de versão, e a parada passa para o evento de implantação escrito pelo pipeline. Segundo, a ferramenta de ITSM recebe o status do pipeline, de modo que "implementada" deixa de ser digitado. Terceiro, o painel ganha um indicador de atualidade e uma verificação de conciliação das contagens de mudanças entre o pipeline e a ferramenta de ITSM.

Pela nova definição, o lead time mediano é de 7 dias e o 95º percentil é de 21 dias, e a taxa de retrodatação cai para 4%. A liderança lê primeiro os 7 dias como um resultado pior. O responsável pela plataforma explica que o número antigo era um artefato da criação tardia dos registros. A decisão, anotada no registro de decisões, é reapresentar os dois trimestres anteriores a partir dos eventos brutos e marcar a mudança de definição no gráfico. O risco de manipulação que a equipe pegou foi sutil: ninguém falsificou um número, e mesmo assim a criação tardia de registros produziu uma cifra lisonjeira. A variação de conciliação agora funciona como barreira de proteção, e a amostra de registros brutos é revista a cada trimestre.

## Ágil, IA, automação e análise

### Ágil

Construa a instrumentação em pequenos passos junto com as funcionalidades, para que cada release acrescente os eventos necessários para medi-lo, e combine as definições dos eventos com as pessoas que lerão os números. Um passo prático é acrescentar o evento à definição de pronto de uma mudança. O cuidado é que reequipar a medição depois do lançamento deixa lacunas nos primeiros dados que nenhuma correção posterior recupera.

### IA

Os sistemas de IA acrescentam novas fontes de dados: prompts, respostas, chamadas de ferramentas, edições humanas e substituições. Capture quem ou o que agiu, qual versão do modelo rodou e se uma pessoa alterou o resultado, sujeito às regras de privacidade e retenção. O cuidado é que registrar prompts pode capturar dados pessoais ou confidenciais; por isso decida o que armazenar antes de começar.

### Automação

Capture eventos automaticamente no momento em que acontecem, a partir do sistema de registro, e teste o pipeline com entradas conhecidas. A própria automação é uma fonte: registre execuções, falhas, novas tentativas e rollbacks. O cuidado é a falha silenciosa, em que um conector quebrado produz números planos e de aparência saudável; por isso monitore a atualidade dos dados como uma métrica.

### Análise

Concilie pelo menos um número com uma fonte independente a cada trimestre e publique a variação. A decisão que isso informa é se uma métrica merece confiança suficiente para ser usada. O cuidado é que painéis de aparência limpa podem repousar em dados fracos; por isso mostre a completude dos dados ao lado do resultado.

## Olhar setorial

**Startup.** Os dados são escassos e a confiança é alta, o que ajuda. Use o pipeline e o controle de versão como fontes principais, porque não exigem esforço extra, e mantenha o modelo de status em um punhado de estados. Escreva cada definição e sua fonte em uma só página e reveja-a quando a equipe dobrar.

**Pequena empresa.** Muitas vezes uma só pessoa cuida de TI em uma central de serviços hospedada. Use os relatórios da ferramenta, peça ao fornecedor suas definições por escrito e exporte os dados brutos periodicamente para evitar a dependência de um fornecedor.

**Grande empresa.** Muitas ferramentas, muitas equipes e camadas de integração criam o maior risco de deriva de definição. Invista em um modelo de eventos compartilhado, em um armazém central de métricas com responsáveis nomeados e em conciliação e verificações de atualidade automatizadas. Combine um pequeno vocabulário de status válido em toda a empresa e deixe as equipes acrescentar estados locais apenas com um mapeamento declarado para ele.

**Governo e setor público.** Os registros podem estar sujeitos à legislação de retenção, auditoria, acesso e privacidade, e as compras podem prender ferramentas e formatos de dados. Trate isso como insumos de projeto: mantenha uma trilha de auditoria, documente a linhagem do evento ao relatório e negocie direitos de exportação de dados nos contratos. As obrigações de relatório tornam essenciais as definições documentadas (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo deste tópico tem três partes. A primeira é o esforço de construção: integrações, um armazém de métricas e uma limpeza do modelo de status. A segunda é o esforço de operação: um responsável pelo pipeline, o monitoramento dos fluxos e uma rotina trimestral de conciliação e amostragem. A terceira é o custo dos controles de privacidade e segurança dos dados que você mantém.

O retorno vem de decisões tomadas sobre números que significam o que parecem significar. Dados ruins levam a investimentos errados, a discussões sobre de quem é a cifra certa e a resultados reapresentados que prejudicam a confiança. Descreva o benefício por padrões que você mesmo pode medir: o tempo gasto para produzir um relatório mensal antes e depois, o número de disputas de conciliação por trimestre e a taxa de retrodatação e a completude de carimbos de data e hora ao longo do tempo. O custo total de propriedade é dominado por pessoas; por isso conte as horas do responsável pelo pipeline.

## Antipadrões e armadilhas

- **Construir o painel antes do mapa de fontes.** O gráfico parece pronto enquanto seu significado é desconhecido. Mapeie primeiro a fonte, os relógios e o responsável.
- **Confiar em atualizações manuais de status para medidas de tempo.** A entrada tardia faz dos relógios uma ficção. Automatize as transições a partir de eventos do pipeline e do controle de versão sempre que existirem.
- **Vários sistemas de registro para um fato.** As disputas se seguem. Escolha um e faça os outros lerem dele.
- **Mudanças silenciosas de definição.** A linha de tendência perde o sentido. Registre cada mudança com o motivo e marque-a no gráfico.
- **Médias de dados incompletos.** Os carimbos ausentes não são aleatórios, já que os itens incômodos costumam ser os pulados. Relate a completude de carimbos de data e hora ao lado do resultado.
- **Coletar tudo caso seja útil.** O custo e o risco de privacidade crescem sem que nenhuma decisão seja servida. Colete o que uma pergunta nomeada exige.
- **Nenhum indicador de atualidade.** Um painel desatualizado parece igual a um atual. Mostre a idade do evento mais novo em todas as visões.
- **Dados no nível individual sem propósito.** Tentam à classificação e prejudicam a fonte. Agregue no nível de equipe e serviço e restrinja o acesso.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Fontes e captura | Números montados à mão a partir de exportações | Algumas ferramentas alimentam um relatório automaticamente; outras não | Cada métrica tem um sistema de registro nomeado e captura automatizada onde existe um evento | Cobertura e completude medidas e acompanhadas ao longo do tempo | Eventos compartilhados entre equipes e fornecedores por interfaces acordadas, com contratos de exportação |
| Modelos de tempo e status | Cada pessoa registra e lê o tempo de modo diferente | Algumas equipes documentam seu fluxo de trabalho | Um padrão de tempo e um vocabulário de status compartilhado com regras de relógio escritas | Deriva e retrodatação monitoradas, e mudanças registradas com motivos | Modelos revistos em conjunto com fornecedores e clientes quando deixam de informar decisões |
| Qualidade do pipeline | Falhas encontradas quando alguém reclama | Verificações manuais ocasionais | Contagens de linhas, verificações de duplicatas e um indicador de atualidade em cada painel | Conciliação agendada e causas revistas; o pipeline tem um responsável | Saúde do pipeline relatada como um serviço, com melhoria financiada |
| Prática de pesquisas e privacidade | Pesquisas ad hoc; sem revisão de privacidade | Perguntas padrão em algumas equipes | Pesquisas curtas e regulares com taxa de resposta exibida; dados mantidos no nível da equipe | Perfil dos respondentes revisto e tratado | Resultados das pesquisas e prática de privacidade compartilhados abertamente com os usuários |

## Lista de verificação

- [ ] Cada métrica relatada tem um sistema de registro nomeado e um responsável pela fonte nomeado.
- [ ] O mapa de fontes está guardado no registro de métricas.
- [ ] Toda medida de tempo declara onde seu relógio começa, para e pausa.
- [ ] Os carimbos de data e hora são armazenados em UTC em um formato inequívoco, e os relógios dos servidores estão sincronizados.
- [ ] As mudanças de status são geradas por automação sempre que existe um evento.
- [ ] Os eventos brutos são guardados com horário do evento e horário de inserção, e as correções são novos eventos.
- [ ] O modelo de status está documentado, e toda mudança é registrada com seu motivo.
- [ ] Todo painel mostra a idade dos seus dados mais novos.
- [ ] As contagens são conciliadas com a origem em um calendário, e as causas são registradas.
- [ ] Uma amostra de registros brutos é lida a cada trimestre.
- [ ] A taxa de resposta e o perfil dos respondentes são mostrados com cada resultado de pesquisa.
- [ ] Os dados pessoais são minimizados e agregados no nível de equipe e serviço.

## Prompts de IA

**Construa um mapa de fontes para uma métrica.**

```text
I am documenting the data behind this metric: [metric name], defined as
[definition]. Our tools are [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Draft a source map with these fields: the event that
starts the clock, the event that stops it, the system of record for each, who or
what creates the event (person or automation), likely failure modes, and checks
that would detect each failure. Do not invent tool features or benchmark values.
List your assumptions and the questions I should answer to complete the map.
```

**Revise um modelo de status em busca de ambiguidade.**

```text
Here is the workflow for [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. The clocks we compute
from it are [list clocks]. Identify statuses that are ambiguous, states where a
clock could stop or pause in a misleading way, and places where two teams might
read the same word differently. Suggest a smaller model that still supports the
clocks, and say what would be lost. Do not guess how our tool is configured. List
your assumptions.
```

**Projete verificações de qualidade de dados para um fluxo.**

```text
We load [data type, for example change records] from [source system] into
[destination] every [schedule]. Required fields are [list fields]. Propose a
practical set of checks for completeness, duplicates, freshness, and
reconciliation against the source, with a suggested alert and an owner role for
each. Keep the set small enough for a team of [team size] to maintain. Do not
invent thresholds; ask me for the ones you need. List your assumptions.
```

**Redija uma pesquisa curta e um plano para sua taxa de resposta.**

```text
I want to measure [experience topic, for example effort to get a request
fulfilled] for [audience]. Draft [number] neutral questions, a plan for when and
how to send them, and how to report the response rate and the respondent mix. Flag
wording that could bias answers, and note privacy considerations given that the
data will be held in [tool or location]. Do not invent benchmark response rates.
List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar qual tópico define a métrica que você está instrumentando e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um tópico de métricas novo ou editado nomeia sua fonte de dados e seus relógios.

## Ideias-chave

- Toda métrica depende de um sistema de registro nomeado; por isso mapeie a fonte antes de construir o gráfico.
- Capture eventos automaticamente no momento em que acontecem e guarde os eventos brutos para que as definições possam mudar sem perder o histórico.
- O tempo também é dado: use um padrão, escreva as regras do relógio e fique atento à retrodatação.
- Mantenha o modelo de status pequeno, compartilhado e documentado, e registre toda mudança.
- Trate o pipeline como um produto com responsável, testes, indicador de atualidade e conciliação agendada.
- Use as pesquisas para o que só as pessoas podem dizer, mostre a taxa de resposta e mantenha os dados pessoais no nível da equipe.

## Referências e leituras complementares

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Gestão de serviços de TI](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Sistema de rastreamento de issues](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Controle de versão](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observabilidade (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Banco de dados de gerenciamento de configuração](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extração, transformação e carga](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Qualidade de dados](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Tempo Universal Coordenado](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Viés de seleção](https://en.wikipedia.org/wiki/Selection_bias).
