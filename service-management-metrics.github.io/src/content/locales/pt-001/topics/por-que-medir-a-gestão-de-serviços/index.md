# Por que medir a gestão de serviços

**Equipes que constroem e operam serviços precisam de um pequeno conjunto de números honestos para ver se o trabalho ajuda os usuários e está melhorando, e o ágil e o ITIL fornecem, cada um, uma metade diferente desse quadro.**

## Visão geral e motivação

Toda equipe que constrói e opera um serviço toma decisões o dia inteiro: no que trabalhar em seguida, se um release é seguro, se a central de serviços precisa de mais uma pessoa, se uma interrupção foi um caso isolado ou um padrão. Sem medição, essas decisões se apoiam na memória, na anedota e em quem falou por último. Com a medição errada, podem ficar ainda piores, porque um número carrega uma autoridade que uma opinião não tem. Este tópico explica por que vale o esforço de medir, o que cada tradição contribui e quanto custa errar.

Duas tradições se encontram neste livro. O [desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development) é um conjunto de valores e práticas, enunciado no Manifesto Ágil de 2001, que privilegia software funcionando, colaboração próxima com os clientes e resposta a mudanças. Seus hábitos de medição são empíricos e locais: a equipe inspeciona o próprio fluxo, olha o que entregou e se adapta. O [ITIL](https://en.wikipedia.org/wiki/ITIL), originalmente a Information Technology Infrastructure Library, é um corpo de orientações para a [gestão de serviços de TI](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), a prática de projetar, entregar e melhorar serviços de TI. Seus hábitos de medição são orientados a serviços e compartilhados: níveis de serviço acordados, um catálogo de serviços (a grafia própria do ITIL é "service catalogue") e uma disciplina de melhoria contínua. No ITIL 4, a edição de 2019 da estrutura, medição e relatório é uma das práticas gerais de gestão, e a melhoria contínua é ao mesmo tempo uma prática e um princípio orientador. Confira as publicações atuais do proprietário da estrutura antes de se apoiar em detalhes de versão, porque a estrutura continua a evoluir.

As duas visões diferem de maneiras úteis. O ágil pergunta "estamos construindo a coisa certa, e com que fluidez o trabalho flui?". O ITIL pergunta "o serviço atende às necessidades de quem o usa, e é confiável, suportável e acessível?". Uma equipe que mede apenas o fluxo pode entregar rápido sobre um serviço que os usuários consideram pouco confiável. Uma equipe que mede apenas os níveis de serviço pode cumprir todas as metas e, ainda assim, entregar mudanças tão devagar que o serviço deixa de ser relevante. O movimento [DevOps](https://en.wikipedia.org/wiki/DevOps) nasceu da observação de que construir e operar formam um só sistema e, portanto, os números que o descrevem devem ser lidos juntos. A [engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), a disciplina que o Google descreveu em seus livros publicados, acrescenta um vínculo explícito entre as metas de confiabilidade e o ritmo de mudança.

Três termos se repetem ao longo do livro. Uma **medida** descreve algo sobre o trabalho ou o serviço. Uma **métrica** é uma medida com fórmula, unidade e fonte de dados definidas, de modo que duas pessoas que a calculem cheguem à mesma resposta. Uma **barreira de proteção** é uma segunda medida ou prática, escolhida de antemão, que se move se a primeira estiver sendo manipulada. O alerta por trás das barreiras de proteção é a [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): quando uma medida vira meta, as pessoas passam a conduzir o número em vez do trabalho (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

### Para que serve a medição

A medição conquista seu lugar quando cumpre um de quatro papéis.

- **Ver.** Tornar visível o trabalho invisível: a fila que ninguém olha, o padrão de incidentes que atravessa três equipes, a mudança que espera nove dias por uma janela.
- **Decidir.** Informar uma escolha entre duas opções, como automatizar um tipo de requisição ou corrigir o defeito que a causa.
- **Aprender.** Testar uma crença. Se a equipe acha que uma nova prática de revisão vai reduzir o retrabalho, um número pode dizer se reduziu.
- **Prestar contas.** Dar a usuários, clientes e líderes um relato honesto do que o serviço entrega, para que a confiança repouse em evidências.

Um número que não cumpre nenhum desses quatro papéis é custo extra. Os tópicos seguintes repetem esse teste para cada família de métricas.

### O custo de não medir nada

Uma equipe que não mede nada não está livre de números. Ela funciona com números implícitos: a reclamação mais alta, a pane mais recente, a impressão do gestor sobre o quanto as pessoas parecem ocupadas. Dois custos decorrem disso.

- **Feedback lento.** Problemas que uma tendência teria mostrado cedo chegam como surpresas. Um aumento gradual de contatos repetidos parece má sorte até virar crise.
- **Nenhuma base para melhorar.** A equipe não consegue dizer se uma mudança ajudou, e portanto não aprende quais mudanças repetir.

### O custo de medir as coisas erradas

Medir as coisas erradas costuma ser pior do que não medir nada, porque direciona o esforço com falsa confiança. Contagens de tickets encerrados, linhas de código, pontos de história concluídos e horas registradas são fáceis de coletar e de plotar, e cada uma é uma medida de atividade, não de valor para um usuário. A pesquisa por trás da estrutura SPACE (Forsgren e colegas, 2021) argumenta que a produtividade não pode ser capturada por uma única dimensão e que contagens de atividade usadas isoladamente enganam.

## Princípios-chave

- **Meça para uma decisão.** Cada métrica responde a uma pergunta escrita e informa uma escolha nomeada. Se ninguém sabe dizer qual, aposente-a.
- **Una as duas visões.** Leia o fluxo de entrega e a saúde do serviço na mesma página, para que a velocidade nunca seja comprada à custa da estabilidade, nem o contrário.
- **Meça primeiro resultados, depois atividade.** O teste é os usuários ficarem melhor. As contagens de atividade apoiam a história, mas não a contam (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).
- **Descreva equipes e serviços, nunca indivíduos.** Classificações individuais corrompem os dados e prejudicam a colaboração.
- **Comece pequeno e cresça.** Um punhado de métricas confiáveis vale mais do que um muro de métricas mal governadas.
- **Mostre primeiro à equipe.** As pessoas que fazem o trabalho são o primeiro público e a melhor verificação de que os dados estão corretos.
- **Espere mudar.** Definições, métricas e metas são revistas quando deixam de informar decisões.

## Definições de métricas

As métricas abaixo descrevem a saúde da própria prática de medição, que é onde o "por que medir" se torna testável. Uma equipe capaz de mostrá-las mede por razões. Toda fórmula baseada em tempo ou contagem declara seus limites.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Proporção de métricas ligadas a decisões | Proporção das métricas relatadas que têm uma pergunta escrita e uma decisão nomeada que elas informam | métricas com pergunta e decisão registradas / métricas relatadas no painel ao fim do trimestre | porcentagem | Registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas) | Medição e relatório; melhoria contínua | Ações de retrospectiva; acordos de trabalho | Trimestral |
| Cobertura de linha de base | Proporção dos serviços e equipes no escopo que têm um valor inicial registrado para cada uma das medidas essenciais acordadas | pares serviço-medida com linha de base registrada nos últimos 12 meses / todos os pares serviço-medida no escopo; serviços fora do catálogo são excluídos | porcentagem | Catálogo de serviços e registro de métricas | Gestão de nível de serviço; medição e relatório | Revisão com partes interessadas; painéis da equipe | Trimestral |
| Esforço de medição | Tempo da equipe gasto em coletar, limpar e relatar métricas manualmente | horas registradas em coleta e relatório manuais durante o mês, excluindo o tempo gasto agindo sobre os achados | horas por equipe por mês | Anotações de tempo ou uma breve pesquisa com a equipe | Medição e relatório | Orçamento de tempo da retrospectiva | Trimestral |
| Idade dos dados na revisão | Quão antigo é o dado mais recente quando o grupo se reúne para discuti-lo | carimbo de data e hora da reunião de revisão menos carimbo do dado mais recente no painel; calculado por métrica, relatado como mediana e 85º percentil | dias | Registro de atualização do painel | Medição e relatório | Revisão com partes interessadas | Por revisão |
| Seguimento das melhorias | Proporção das ações de melhoria levantadas em revisões de métricas que são concluídas ou encerradas deliberadamente dentro do prazo acordado | ações concluídas ou encerradas com justificativa em até 90 dias após serem levantadas / ações levantadas no período, contadas a partir da data registrada no registro de melhorias | porcentagem | Registro ou backlog de melhoria contínua | Melhoria contínua | Itens de ação da retrospectiva | Trimestral |

A medida de esforço de medição conta deliberadamente apenas o trabalho manual. O tempo gasto lendo os dados e decidindo o que fazer é o objetivo do exercício e é excluído, para que automatizar a coleta apareça como progresso.

## Recomendações

### Comece pelo propósito

**1. Escreva o motivo antes da métrica.** Para cada medida proposta, escreva uma frase: "Medimos X para decidir Y". Se a frase não puder ser escrita, a medida não está pronta. Esse único hábito elimina a maioria das métricas de vaidade antes que entrem em um painel.

**2. Nomeie o público e a decisão.** O mesmo número significa coisas diferentes para uma equipe, um responsável por serviço e um executivo. Anote quem vai lê-lo e que escolha ele apoia. Uma visão de trabalho da equipe pode carregar vinte medidas. O que vai à liderança deve ser um conjunto pequeno e estável (veja o tópico 11.1, Projetar um painel de métricas de serviço).

### Use as duas tradições

**3. Pareie uma medida de fluxo com uma medida de serviço.** Escolha pelo menos uma medida de como o trabalho se move, como o lead time ou a idade do item de trabalho (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo), e pelo menos uma medida de como o serviço se comporta, como a recorrência de incidentes ou um indicador de nível de serviço (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). Mostrá-las juntas evita a falha comum em que velocidade e estabilidade são geridas por grupos diferentes olhando gráficos diferentes.

**4. Trate entrega e operações como um só sistema.** A pesquisa resumida em *Accelerate* (Forsgren, Humble e Kim, 2018) relata que o desempenho de entrega de software pode ser descrito com quatro medidas que equilibram vazão e estabilidade. Qualquer que seja o conjunto que uma equipe adote, mantenha os números de mudança e de incidente próximos o bastante para que a alta de um leve a olhar o outro (veja o tópico 2.8, Métricas DORA).

### Meça com honestidade

**5. Prefira poucas medidas que se contrabalançam.** Um número isolado convida à superotimização; por isso escolha pares como velocidade com qualidade, volume com resultado e custo com experiência. O par não precisa ser uma fórmula. Precisa aparecer na mesma página.

**6. Registre uma linha de base antes de mudar qualquer coisa.** Sem um valor inicial, uma alegação de melhoria é uma história. Capture algumas semanas de dados primeiro, incluindo a dispersão dos valores além da média (veja o tópico 1.6, Letramento estatístico para métricas de serviço). As linhas de base também protegem as equipes: mostram que um trimestre ruim veio depois de uma mudança na forma de contar o trabalho, e não de uma queda de desempenho.

### Construa o hábito

**7. Revise em uma cadência que combine com a decisão.** As medidas de fluxo combinam com uma conversa semanal, ou uma realizada a cada passo da entrega contínua de software. As medidas de nível de serviço e de custo combinam com uma mensal ou trimestral. Uma métrica revista no ritmo errado cria ruído ou perde o momento em que a ação teria ajudado.

**8. Feche o ciclo com trabalho de melhoria.** Uma revisão que termina em "interessante" desperdiçou seus dados. Termine cada revisão com uma ou duas ações nomeadas, um responsável e uma data, e acompanhe sua conclusão. A prática de melhoria contínua do ITIL e a retrospectiva ágil são dois nomes para a mesma disciplina (veja o tópico 9.5, Métricas de melhoria contínua).

**9. Diga para que você não usará os números.** Declare com clareza que as métricas da equipe não serão usadas para classificar ou premiar indivíduos e que as definições serão mudadas abertamente. As pessoas cooperam com a medição quando confiam em como ela será usada (veja o tópico 11.3, Implantar métricas sem criar medo).

## Vetores de manipulação e barreiras de proteção

Até as métricas sobre medição podem ser manipuladas. Cada linha abaixo pareia a métrica com a forma usual em que ela é entortada e a verificação que a revelaria.

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Proporção de métricas ligadas a decisões | Escrever, depois do fato, uma pergunta e uma decisão plausíveis para cada métrica a fim de elevar a porcentagem | Amostrar o registro de decisões: perguntar o que mudou por causa da métrica e comparar a data em que a entrada foi escrita com a data em que a métrica apareceu pela primeira vez |
| Cobertura de linha de base | Registrar uma linha de base uma vez e nunca atualizá-la, ou escolher um período tranquilo e conveniente | Exigir intervalo de datas e tamanho da amostra declarados com cada linha de base; revisar as linhas de base após grandes mudanças no serviço |
| Esforço de medição | Tirar o trabalho de coleta dos registros, fazendo-o sem anotar, ou transferi-lo a um fornecedor | Comparar com uma breve pesquisa sobre quanto tempo as pessoas dizem que o relatório leva; incluir o esforço do fornecedor na revisão |
| Idade dos dados na revisão | Atualizar o painel logo antes da reunião enquanto os registros subjacentes continuam defasados | Relatar a idade do registro mais recente no sistema de origem além do horário da atualização |
| Seguimento das melhorias | Encerrar ações com a justificativa "não é mais relevante" para atingir a porcentagem, ou dividir ações em pedaços triviais | Revisar a cada trimestre as justificativas dadas para ações encerradas e acompanhar se a medida visada pela ação se moveu |

Uma leitura saudável é a de uma prática visivelmente viva. Métricas entram e saem do registro por motivos escritos, as linhas de base estão frescas, as ações das revisões são concluídas ou abandonadas com honestidade, e a equipe gasta mais tempo agindo sobre os dados do que coletando-os. Uma nota perfeita em todas as linhas é um motivo para amostrar os registros subjacentes, não para comemorar.

## Compensações: vantagens e desvantagens

| Escolha | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medir pouco | Baixo custo; baixo risco de manipulação; alta confiança | Pontos cegos; decisões apoiadas em anedotas |
| Medir muito | Ampla cobertura; alerta antecipado em muitas frentes | A atenção se dilui; a governança fica rala; o custo de coleta cresce |
| Visão unida | Equilibra velocidade e estabilidade; apoia a responsabilidade compartilhada | Exige definições acordadas entre equipes e um lugar comum para olhar |
| Metas nas métricas | Dá direção e urgência | Convida à manipulação; exige uma barreira de proteção pareada |
| Métricas sem metas | Estimula a discussão honesta | Pode derivar para relatórios sobre os quais ninguém age |

A resposta prática é um pequeno conjunto unido, com metas usadas com parcimônia para condições bem compreendidas e pedidas pelos usuários, como um objetivo de nível de serviço. Todo o resto é uma pergunta a discutir. O objetivo não é tirar o julgamento das decisões, mas alimentá-lo com melhores evidências.

## Perguntas para discutir com sua equipe

**1. Que decisão tomamos no último trimestre que um número realmente mudou?**
Peça ao grupo que lembre decisões específicas e depois descubra quais, se alguma, dependeram de dados. Se a lista for curta, isso é uma informação útil: significa que boa parte do relatório atual não justifica seu custo. O facilitador deve registrar as métricas que mudaram decisões, pois são candidatas a proteção. Depois pergunte quais decisões foram tomadas por instinto e se um número poderia ter ajudado.

**2. Quais dos nossos números atuais descrevem atividade e quais descrevem valor para os usuários?**
Coloque o painel atual numa tela e marque cada métrica como atividade (tickets encerrados, builds executados, pontos concluídos) ou resultado (usuários capazes de trabalhar, problemas que não se repetem). Não discuta casos limítrofes por muito tempo. O ponto é ver o equilíbrio. Onde houver apenas atividade, pergunte que resultado a atividade deveria produzir e como a equipe saberia.

**3. Onde vivem hoje os números de entrega e de operações, e as mesmas pessoas olham para ambos?**
Rastreie onde cada família de medidas é armazenada e quem a revisa. As equipes costumam se surpreender ao descobrir que os dados de mudança são revistos por um grupo e os de incidentes por outro, sem reunião em comum. Pergunte que padrão pode passar despercebido porque os dois nunca são vistos juntos. Combine um lugar ou uma reunião onde eles se encontrem.

**4. O que não estamos medindo e lamentaríamos não saber?**
Convide preocupações, e não métricas: "Tenho medo de que não percebêssemos se...". Parta das respostas para medidas candidatas e depois para os dados mais baratos que as mostrariam. Mantenha a lista curta.

**5. No que precisaríamos acreditar sobre nossos números antes de mostrá-los à liderança?**
Discuta o que torna os dados confiáveis: definições estáveis, verificações de exatidão por amostragem e acordo sobre exclusões. Liste as dúvidas da equipe, mesmo as pequenas, como um status usado de forma inconsistente. Decida quais dúvidas devem ser resolvidas antes de um compartilhamento mais amplo e quais podem ser divulgadas junto ao número.

**6. Se pudéssemos manter apenas três métricas no próximo trimestre, quais seriam e por quê?**
A restrição força prioridades. Peça a cada pessoa que escreva três e depois compare. Procure concordância sobre resultados e discordância sobre medidas de atividade. Pergunte de que barreira de proteção cada uma das três precisa.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega se beneficiam mais de feedback rápido e local: quanto tempo o trabalho espera, onde forma fila, com que frequência as mudanças causam problemas. Elas devem manter uma visão de trabalho rica para si e publicar um pequeno conjunto para fora. As equipes devem resistir à tentação de medir o volume de produção como substituto de valor e devem parear medidas de velocidade com medidas de qualidade desde o início (veja o tópico 2.1, Medidas de fluxo).

### Equipes de serviço e operações

As equipes de operações já convivem com números: volumes, tempos de resposta e de resolução, disponibilidade. A oportunidade é passar de relatar o que aconteceu para explicar por quê, por meio da recorrência, das causas-raiz e da parcela de trabalho não planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado). Elas também devem levar seus dados às conversas de planejamento com as equipes de entrega, para que o trabalho de confiabilidade seja defendido com evidências, e não com queixas.

### Liderança e governança

Os líderes definem os incentivos, muitas vezes sem querer, pelas perguntas que fazem. Um líder que pergunta "por que isto está vermelho?" ensina as equipes a esconder o vermelho. Um líder que pergunta "o que vocês aprenderam e do que precisam?" ensina as equipes a relatar com honestidade. Os órgãos de governança devem pedir o registro, as barreiras de proteção e as ações de melhoria junto com os números, e devem financiar o trabalho que um número ruim revela (veja o tópico 1.4, Governança e responsabilidade das métricas).

### Clientes e usuários

Os usuários julgam o serviço por ele funcionar e por os problemas serem corrigidos, não por medidas internas. Suas próprias palavras, em pesquisas, reclamações e comentários, pertencem ao lado dos números operacionais como verificação de que a equipe mede o que importa (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte mantém uma central de serviços, uma equipe de operações e três equipes de produto que constroem os serviços de vitrine, de pagamentos e de logística de entrega. Os números abaixo são ilustrativos.

A liderança pergunta por que os clientes reclamam de um checkout lento quando as equipes de entrega relatam que publicam todos os dias e a equipe de operações relata uma disponibilidade de 99,9%. Cada grupo está certo segundo as próprias medidas, e ninguém as olhou juntas. A responsável pela gestão de serviços propõe uma visão unida de uma página para o serviço de checkout, construída com dados que as equipes já coletam.

A visão mostra quatro coisas para as últimas doze semanas. O lead time de mudança tem mediana de 2 dias e 85º percentil de 9 dias. A taxa de falha de mudanças é de 8%. Os incidentes no checkout somam 14, dos quais 6 compartilham uma causa, uma consulta lenta ao banco de dados introduzida por um release recente. A mediana do tempo de restabelecimento é de 40 minutos, mas o tempo de carregamento de página no 95º percentil vem subindo há seis semanas, um padrão que a cifra de disponibilidade não mostra porque o serviço continuou tecnicamente no ar.

O grupo vê o que estava escondido. A disponibilidade era medida como "o checkout responde", enquanto os usuários vivenciam "o checkout responde rápido o suficiente". A equipe de produto e a de operações combinam acrescentar um indicador de latência para o checkout, com um objetivo definido pelo responsável pelo produto depois de ler os comentários dos clientes, tratar a causa de incidente repetida como um registro de problema com responsável e revisar a visão unida a cada quinzena. Registram uma decisão: pausar as novas funcionalidades do checkout por um ciclo de entrega contínua de software para corrigir a consulta e acrescentar uma verificação de desempenho ao pipeline de releases.

Um risco de manipulação aparece em um mês. A equipe de operações percebe que dois dos 14 incidentes tinham sido abertos como "requisições de serviço" porque a categoria de requisição não tem meta de resolução. A equipe se dá conta de que uma meta sobre incidentes havia empurrado as pessoas a categorizar casos limítrofes como requisições. Elas acrescentam à visão a proporção recategorizada e amostram dez tickets por mês. Depois da mudança, o tempo de carregamento de página no 95º percentil cai, os incidentes repetidos diminuem e a equipe mantém a visão porque ela mudou uma decisão.

## Ágil, IA, automação e análise

### Ágil

A entrega contínua e o envolvimento contínuo das partes interessadas dão um suprimento constante de pequenas mudanças e feedback regular, exatamente o que um punhado de números honestos requer. Uma prática útil é revisar o mesmo pequeno conjunto de medidas a cada conversa regular de melhoria e perguntar o que a equipe vai mudar em seguida. O cuidado é evitar tratar a revisão como um relatório de status: um número mostrado sem uma decisão associada é custo extra.

### IA

O trabalho assistido por IA pode elevar contagens de produção, como tickets redigidos, mudanças propostas ou artigos escritos, sem elevar o valor que o usuário recebe. Pareie qualquer medida de volume do trabalho assistido por IA com uma medida de qualidade, como a proporção de rascunhos que uma pessoa precisou corrigir ou a taxa de contatos repetidos em requisições respondidas por IA. O cuidado é que um número sobre o uso de IA mostra adoção, não benefício; portanto diga o que ele não pode mostrar.

### Automação

Colete carimbos de data e hora e status automaticamente do sistema de registro, para que ninguém digite números em um relatório. Uma prática que vale adotar cedo é uma pequena verificação automatizada que sinalize carimbos ausentes e sequências impossíveis. O cuidado é que a automação também precisa ser medida: um pipeline ou robô que falha em silêncio faz todos os números a jusante parecerem saudáveis.

### Análise

Decida a pergunta e a decisão antes de montar o gráfico e mostre quantos itens estão por trás de cada taxa. Use percentis e tendências em vez de médias isoladas e marque no gráfico toda mudança de definição. O cuidado é a incerteza: uma pequena contagem de itens pode mover muito uma porcentagem; por isso evite agir com base em um mês de dados. Para o ITIL 5 em particular, veja o tópico 1.8, Medição do ITIL 5 e resultados de valor.

## Olhar setorial

**Startup.** Equipes pequenas têm pouco processo e muita confiança, o que ajuda. O risco é importar um grande painel corporativo antes que haja necessidade. Comece com duas ou três medidas que os fundadores lerão toda semana, como lead time de mudança, um indicador simples de confiabilidade e o feedback direto dos usuários, e anote suas definições.

**Pequena empresa.** Quem cuida de TI muitas vezes responde ao proprietário, e uma única reclamação de cliente pode pesar mais que qualquer gráfico. Mantenha o conjunto pequeno, use os dados que as ferramentas já produzem e prefira conversas com os usuários. Trate com certo cuidado os relatórios fornecidos por fornecedores, pois eles têm incentivos próprios.

**Grande empresa.** A escala multiplica a demanda por números comparáveis e a pressão para manipulá-los. Use um pequeno conjunto padrão com definições escritas, mantenha as visões de trabalho das equipes separadas das consolidações e evite comparar equipes que operam tipos de serviço muito diferentes. Um registro de métricas, definições compartilhadas e uma cadência de revisão tornam-se essenciais.

**Governo e setor público.** Níveis de serviço contratuais, requisitos de auditoria e obrigações de relatório público podem tornar algumas medidas inegociáveis. Trate-as como insumos de projeto: cumpra-as, mostre uma barreira de proteção ao lado e declare as definições usadas. A prestação de contas pública eleva o custo de esconder más notícias; por isso construa canais internos seguros para relatos francos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação para medir é decidir melhor a um custo menor. A medição apoia a priorização, mostra onde está o desperdício, dá alerta antecipado do declínio de um serviço e fornece evidências para pedidos de investimento.

O custo tem várias partes. Há as ferramentas, que muitas vezes já são possuídas: o sistema de tickets, o rastreador de issues, o controle de versão e o monitoramento. Há o tempo da equipe para definir métricas, montar visões e manter um registro. Há o custo recorrente das reuniões de revisão, que é o maior e o mais valioso. O custo total de propriedade (TCO) de uma prática de medição também inclui o custo de agir sobre os achados, já que um insight sem orçamento para a correção rende pouco.

O retorno é difícil de expressar com um número universal, e este livro não inventa um. Uma boa forma de construir o caso é medir suas próprias linhas de base antes e depois de uma mudança: tempo gasto em relatórios manuais, contatos repetidos, decisões revertidas porque os dados estavam errados e surpresas descobertas tarde. O padrão esperado é menos surpresas, discussões mais curtas e melhor concordância entre os números operacionais e a experiência do usuário. Uma comparação simples de [retorno sobre o investimento](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) entre o esforço gasto e o esforço economizado é um ponto de partida razoável, e o tópico 7.7, Retorno do investimento e business case, cobre o método.

## Antipadrões e armadilhas

- **O painel de tudo.** Dezenas de gráficos, sem responsáveis, sem decisões. Escolha poucos, nomeie a decisão que cada um informa e aposente o resto.
- **Medição unilateral.** Velocidade sem estabilidade, ou estabilidade sem relevância. Pareie uma medida de fluxo com uma medida de serviço.
- **Medir pessoas.** Classificações individuais corrompem os dados e desestimulam a ajuda. Relate no nível de equipes e serviços.
- **Metas antes de linhas de base.** Uma meta sem valor inicial é um palpite. Registre primeiro uma linha de base e defina metas após pelo menos um ciclo de revisão.
- **Relatórios sem ações.** Uma revisão que não produz mudanças ensina as pessoas a ignorá-la. Termine cada revisão com uma ação nomeada, um responsável e uma data.
- **Mudanças silenciosas de definição.** As linhas de tendência perdem o sentido. Registre cada mudança com seu motivo e marque-a no gráfico.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Propósito e seleção | Métricas escolhidas porque a ferramenta as oferece | Algumas métricas têm um propósito declarado | Cada métrica relatada tem uma pergunta e uma decisão escritas | Conjunto de métricas revisto face às decisões e aposentado quando não usado | Métricas co-projetadas com usuários e fornecedores em torno de resultados compartilhados |
| Visão unida de ágil e ITIL | Dados de entrega e de serviço mantidos separados | Algumas equipes veem ambos juntos | Uma visão comum de fluxo e saúde do serviço por serviço | Visão unida acompanhada ao longo do tempo e ligada ao trabalho de melhoria | Visões entre equipes e fornecedores ligadas aos resultados dos usuários |
| Linhas de base e esforço | Sem linhas de base; coleta manual | Linhas de base para alguns serviços; coleta mista | Linhas de base registradas para as medidas essenciais; coleta em grande parte automática | Linhas de base atualizadas após mudanças; esforço acompanhado e reduzido | Linhas de base e definições ajustadas continuamente conforme os serviços mudam |
| Uso na melhoria | Números anotados e esquecidos | Ações ocasionais após semanas ruins | Toda revisão termina com ações nomeadas | Seguimento das ações medido e financiado | A melhoria vem de todos e é visível entre equipes |

## Lista de verificação

- [ ] Cada métrica relatada tem uma pergunta escrita e uma decisão nomeada que ela informa.
- [ ] O público de cada visão está nomeado, e as visões das equipes são separadas das visões da liderança.
- [ ] Pelo menos uma medida de fluxo e uma medida de serviço aparecem na mesma página.
- [ ] Existe uma linha de base com intervalo de datas e tamanho da amostra para cada medida essencial.
- [ ] Toda medida de tempo declara onde o relógio começa e para.
- [ ] Toda métrica tem uma barreira de proteção mostrada ao lado.
- [ ] O esforço de coleta manual é conhecido, e a maior tarefa manual foi avaliada para automação.
- [ ] As equipes veem seus próprios dados antes da liderança.
- [ ] Nenhuma classificação individual, remuneração ou medida disciplinar está ligada a uma métrica.
- [ ] Cada revisão termina com pelo menos uma ação de melhoria nomeada, com responsável e data.
- [ ] Pelo menos uma métrica foi aposentada ou redefinida no último ano.

## Prompts de IA

**Redija a declaração de propósito de cada métrica.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Una as visões de entrega e de serviço.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Planeje uma linha de base.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Prepare uma revisão que leve à ação.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que cobre uma métrica que você está considerando e sua barreira de proteção pareada.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica nova ou revisada mantém a declaração de propósito, o vetor de manipulação e a barreira de proteção.

## Ideias-chave

- Meça para ver, decidir, aprender e prestar contas; um número que não faz nada disso é custo extra.
- O ágil fornece feedback rápido e local sobre o fluxo; o ITIL fornece visões compartilhadas, no nível do serviço, de confiabilidade e valor. Leia-os juntos.
- Não medir nada deixa as decisões à mercê da anedota, e medir as coisas erradas direciona o esforço com falsa confiança.
- Comece com poucas métricas, cada uma com um propósito escrito, uma linha de base e uma barreira de proteção.
- Descreva equipes e serviços, nunca indivíduos, e deixe a equipe ver primeiro os próprios dados.
- Feche o ciclo: uma revisão que não produz ação desperdiça os dados.

## Referências e leituras complementares

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Desenvolvimento ágil de software](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Gestão de serviços de TI](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Retorno sobre o investimento](https://en.wikipedia.org/wiki/Return_on_investment).
