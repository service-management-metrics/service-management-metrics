# Dívida técnica e erros conhecidos

**Trate os erros conhecidos e a dívida técnica como um único livro-razão visível de correções adiadas, meça o que cada item custa a cada mês em que permanece aberto e gaste uma parcela protegida da capacidade nos itens de juros mais altos.**

## Visão geral e motivação

Toda equipe adia algum reparo. Um defeito é compreendido mas não corrigido, um atalho é tomado para cumprir uma data, um componente é deixado envelhecer e um contorno é escrito num runbook. Cada adiamento é uma decisão sensata quando é tomada. O problema começa quando os adiamentos se acumulam fora da vista, porque o custo de carregá-los aparece depois, como incidentes, entrega lenta e pessoas cansadas, sem nenhuma linha em qualquer relatório que ligue o custo à causa.

Dois vocabulários descrevem o mesmo padrão. No [ITIL](https://en.wikipedia.org/wiki/ITIL), um **erro conhecido** é um problema cuja causa raiz é compreendida e para o qual existe um contorno, ou uma correção permanente ainda não aplicada. Os erros conhecidos são registrados para que a central de serviços e a equipe de operações resolvam depressa os incidentes repetidos, e o registro permanece aberto até que uma correção seja liberada. No trabalho de software ágil, a **[dívida técnica](https://en.wikipedia.org/wiki/Technical_debt)** é a metáfora, cunhada por [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) em 1992, para escolhas de projeto e de implementação que tornam a mudança futura mais difícil. A metáfora carrega duas ideias que importam para a medição: o **principal**, que é o esforço necessário para remover a dívida, e os **juros**, que são o esforço ou o risco extra pago a cada período enquanto a dívida permanece.

As duas visões diferem no lugar onde olham. Os erros conhecidos são descobertos pelas operações: um incidente ou uma investigação de problema encontra uma causa. A dívida técnica costuma ser descoberta pela entrega: um desenvolvedor nota que uma mudança é mais difícil do que deveria. Um erro conhecido é muitas vezes uma dívida técnica que já começou a machucar os clientes. A dívida técnica é muitas vezes um erro conhecido esperando para acontecer. Manter listas separadas, uma na ferramenta de ITSM e outra em um backlog ou wiki, esconde a conexão e produz dois argumentos concorrentes pela mesma capacidade escassa.

Este tópico dá um pequeno conjunto de medidas para o livro-razão combinado. Evita uma cifra única em dinheiro para a dívida de uma organização inteira, que nenhum método produz de forma confiável, e mede o que se pode observar: itens abertos, tempo de espera, incidentes causados, trabalho acrescentado e capacidade gasta em reparo. O livro-razão alimenta então uma conversa de priorização entre produto e operações (veja o tópico 4.1, Métricas de gestão de problemas, para registros de problemas e correções permanentes, e o tópico 2.9, Trabalho operacional e trabalho não planejado, para a carga de interrupções que a dívida cria).

Termos usados neste tópico:

- Um **contorno** é um modo de restabelecer o serviço ou evitar uma falha sem remover a causa.
- Uma **correção permanente** remove a causa. A [análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis) é o trabalho que a encontra.
- A **[refatoração de código](https://en.wikipedia.org/wiki/Code_refactoring)** reestrutura o código sem mudar seu comportamento externo. É a forma habitual de quitar a dívida de projeto.
- Um **[code smell](https://en.wikipedia.org/wiki/Code_smell)** é um sinal de superfície no código que muitas vezes indica um problema mais profundo. É um convite a olhar, não um veredicto.
- O **[custo de oportunidade](https://en.wikipedia.org/wiki/Opportunity_cost)** é o valor da melhor alternativa que você deixa de lado ao escolher um uso do tempo em vez de outro. Toda correção compete com uma funcionalidade, e a comparação é a decisão real.
- O **[custo do atraso](https://en.wikipedia.org/wiki/Cost_of_delay)** é a perda econômica de adiar um trabalho. É a ideia por trás de precificar os juros de um item de dívida.
- Um **[bug de software](https://en.wikipedia.org/wiki/Software_bug)** é um defeito no software. Um erro conhecido pode ser um bug, uma fraqueza de configuração, um limite de projeto ou um defeito de fornecedor.
- A **[análise estática de programas](https://en.wikipedia.org/wiki/Static_program_analysis)** inspeciona o código sem executá-lo. Seus avisos e pontuações de complexidade são indicadores de possível dívida e são evidência mais fraca que o histórico de incidentes.

Nem toda dívida é um erro. O quadrante de Martin Fowler separa a dívida deliberada da inadvertida e a imprudente da prudente (veja a lista de referências). Um atalho prudente com um plano de pagamento é um empréstimo sensato, e a dívida imprudente é a que se deve prevenir. As métricas aqui não julgam a origem. Mostram o saldo.

## Princípios-chave

- **Um livro-razão, duas portas.** Os erros conhecidos das operações e os itens de dívida da entrega vão para a mesma lista visível, com um vínculo entre os registros que descrevem a mesma causa.
- **Meça os juros, e também o principal.** O tamanho de um reparo importa menos do que o que o item aberto custa a cada mês em incidentes, contornos e mudanças lentas. Classifique pelos juros por unidade de esforço de reparo.
- **Faça do adiamento uma decisão com um responsável.** Todo item tem um responsável, um motivo declarado para esperar e uma data de revisão. Um item que ninguém escolheu adiar é negligência e é contado como tal.
- **Proteja a capacidade antes de precisar dela.** Uma parcela declarada da capacidade de cada equipe para o trabalho de reparo, combinada de antemão, vale mais do que uma limpeza heroica depois de um trimestre ruim.
- **Mantenha o contorno honesto.** Um contorno é um serviço, com custo, responsável e modos de falha próprios. Meça com que frequência é usado e com que frequência falha.
- **Descreva sistemas, nunca pessoas.** A dívida pertence a um serviço ou a um componente. Nunca a atribua a um autor e nunca classifique engenheiros pela dívida em que mexeram.
- **Estime grosso modo.** Tamanhos de "horas", "dias" e "semanas" bastam. Precisão além disso é inventada.

## Definições de métricas

As métricas abaixo descrevem o livro-razão dos reparos adiados. Os relógios e as fronteiras são declarados em cada fórmula. As medidas de tempo são relatadas como distribuições (a mediana e o 85º ou 95º percentil), e não como uma média única.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Idade do backlog de erros conhecidos | Há quanto tempo os erros conhecidos abertos esperam por uma correção permanente | O relógio começa quando o registro do problema é marcado como "erro conhecido"; para quando a correção permanente é liberada em produção; itens encerrados como "risco aceito" são relatados à parte e excluídos. Relate a contagem, a idade mediana e a idade do 85º percentil, por serviço | dias (distribuição) | Registros de problemas e erros conhecidos da ferramenta de ITSM, registros de releases | Gestão de problemas | Gráfico de itens de trabalho envelhecidos; idade do backlog de bugs | Mensal |
| Cobertura de contornos | Proporção dos erros conhecidos abertos que têm um contorno documentado e testado que um atendente pode seguir | erros conhecidos abertos com um contorno revisto nos últimos 6 meses / erros conhecidos abertos; itens encerrados e de risco aceito são excluídos | porcentagem | Base de conhecimento ligada aos registros de erros conhecidos | Gestão de problemas; gestão do conhecimento | Runbook ou definição de pronto para operabilidade | Mensal |
| Incidentes ligados a erros conhecidos abertos | Incidentes cuja causa é um erro conhecido aberto, uma medida direta dos juros pagos em interrupção do serviço | incidentes no período ligados a um erro conhecido que estava aberto quando o incidente começou / todos os incidentes no período; incidentes sem vínculo de causa são relatados como não vinculados, e não contados | porcentagem, mais contagem | Vínculos entre incidente e problema da ferramenta de ITSM | Gestão de incidentes; gestão de problemas | Defeitos escapados; fluxo de entrada de bugs em produção | Mensal |
| Estoque de dívida | Número e tamanho estimado dos itens de dívida técnica registrados que permanecem abertos | itens abertos no registro de dívida ao fim do período; o tamanho é a soma das faixas de esforço grosseiras (horas, dias, semanas) atribuídas no registro; dívida não registrada ou suspeita é excluída | contagem, e faixas de esforço | Registro de dívida no rastreador, etiquetado por serviço | Melhoria contínua; projeto de serviço | Itens do backlog de produto rotulados como dívida | Mensal |
| Juros da dívida | Trabalho extra causado pela dívida aberta e por erros conhecidos, em tempo da equipe | horas registradas no período em itens de trabalho etiquetados com uma referência de dívida ou erro conhecido (contornos, passos manuais, retrabalho e esforço extra em mudanças afetadas) / total de horas de trabalho da equipe no período; o próprio trabalho de reparo é excluído e contado na parcela de capacidade | porcentagem do tempo de trabalho | Etiquetas de tempo ou esforço em itens de trabalho, mantidas no nível da equipe | Melhoria contínua; gestão de problemas | Parcela de trabalho não planejado e retrabalho | Mensal |
| Parcela de capacidade para dívida | Proporção da capacidade de entrega gasta em quitar dívida e erros conhecidos | capacidade (contagem de itens ou esforço) dos itens de trabalho concluídos etiquetados como reparo de dívida ou correção de erro conhecido / todos os itens de trabalho concluídos no período; itens sem etiqueta são excluídos | porcentagem | Rastreador, itens concluídos por etiqueta | Melhoria contínua; habilitação de mudanças | Alocação de capacidade | Por período de planejamento, revisto mensalmente |
| Variação líquida da dívida | Se o livro-razão está crescendo ou encolhendo | itens de dívida e de erros conhecidos registrados no período menos itens resolvidos no período; resolvido significa correção liberada, e não mesclada; itens encerrados como "não será corrigido" são contados em uma linha separada | contagem (com sinal) | Registro de dívida e registros de erros conhecidos | Melhoria contínua | Variação do backlog por categoria | Mensal |

O risco aceito é uma forma legítima de encerrar um erro conhecido, porque alguns problemas não valem a correção. É listado separadamente para que encerrar itens não melhore em silêncio a cifra de idade. A janela de revisão de 6 meses na cobertura de contornos é um exemplo. Uma equipe define a janela de acordo com a velocidade com que seus sistemas mudam e a escreve no registro de métricas.

## Recomendações

### Construa o livro-razão

**1. Funda a lista de erros conhecidos e a lista de dívida em um único livro-razão.** Mantenha um registro com um campo para a origem (operações ou entrega), serviço, responsável, faixa de tamanho e vínculo com registros relacionados. A ferramenta de ITSM pode abrigá-lo, ou o rastreador, desde que cada sistema ligue ao outro. Sem uma visão única, um erro conhecido nas operações compete com um item de dívida invisível na entrega pelos mesmos engenheiros.

**2. Registre a dívida no momento em que é criada ou descoberta.** Um atalho tomado deliberadamente entra no registro no mesmo pull request ou registro de mudança, com um motivo declarado e uma data de revisão. A dívida encontrada depois é registrada por quem a encontra. Uma regra de captura barata, de uma linha, funciona melhor do que uma auditoria periódica, porque as pessoas esquecem o que sabiam no trimestre passado.

### Meça os juros

**3. Ligue sempre os incidentes aos erros conhecidos.** O vínculo entre um incidente e seu erro conhecido é o dado mais forte que você tem sobre os juros, e custa alguns segundos na resolução. Faça do vínculo um campo obrigatório quando a causa é conhecida e relate a parcela não vinculada para que uma lacuna não pareça boa notícia (veja o tópico 3.3, Tempo de resposta e de resolução de incidentes). Quando a mesma causa aparece em vários incidentes, o registro do problema carrega a evidência para a correção.

**4. Etiquete o trabalho que a dívida cria.** Deixe os engenheiros marcarem um item de trabalho quando um contorno, um passo manual ou retrabalho extra foi necessário por uma fraqueza conhecida e ligue-o ao item do livro-razão. A etiqueta custa pouco e dá a cifra de juros da dívida no nível da equipe. Trate o resultado como uma estimativa com erro amplo, útil para classificar itens e acompanhar uma tendência, não para contabilidade.

**5. Precifique cada item em dois números: esforço de reparo e juros mensais.** Use faixas grosseiras, como horas, dias, semanas, para o esforço e um custo mensal aproximado tirado dos incidentes vinculados, do trabalho etiquetado e de qualquer custo de indisponibilidade que a sua organização já estime. Dividir os juros pelo esforço dá um tempo de retorno simples. Não invente precisão: uma faixa e uma premissa declarada bastam para separar as vitórias óbvias dos itens que podem esperar.

### Proteja a capacidade e decida

**6. Reserve uma parcela fixa da capacidade e relate-a.** Combine com o dono do produto uma parcela de cada ciclo para o trabalho de reparo, definida pela tendência do livro-razão e revista a cada trimestre. Relate a parcela de capacidade para dívida ao lado das cifras de trabalho planejado, para que os líderes vejam o trabalho de reparo como um investimento deliberado. Uma parcela reservada também protege a equipe de uma discussão de compensação a cada conversa de planejamento, que o backlog de funcionalidades costuma vencer.

**7. Classifique o reparo contra as funcionalidades em uma moeda comum.** Ponha os erros conhecidos e os itens de dívida na mesma conversa de priorização das funcionalidades, expressos como custo do atraso e tempo de retorno. Uma correção que remove um incidente semanal e devolve seu esforço em um trimestre compete pelos próprios méritos. Classificar por volume de reclamação, senioridade ou data de registro dá maus resultados (veja o tópico 4.4, Falhas de mudança e retrabalho).

**8. Feche o ciclo das decisões de adiamento.** Para cada item deixado aberto conscientemente, registre quem aceitou o risco, a data de revisão e o gatilho que o subiria na fila, como um segundo incidente ou uma mudança planejada na área. Reveja a lista de aceitos em sua própria cadência. Um item adiado três vezes sem gatilho é uma decisão de ignorá-lo, e o livro-razão deve dizer isso.

### Mantenha os números honestos

**9. Libere a correção antes de encerrar o registro.** Um erro conhecido permanece aberto até que a correção permanente esteja em produção e a recorrência tenha sido conferida durante uma janela declarada. Encerrar em "mesclado" ou "ticket concluído" lisonjeia as cifras de idade e de variação líquida e reabre o incidente depois (veja o tópico 4.5, Métricas de releases e implantação). Acompanhe a taxa de reabertura dos erros conhecidos como uma verificação de qualidade da regra de encerramento.

**10. Olhe a forma do livro-razão, além dos totais.** Uma contagem estável pode esconder uma longa cauda de itens muito antigos, uma parcela crescente de itens em um serviço ou um livro-razão mantido pequeno por encerrar tudo como "não será corrigido". Mostre a distribuição de idade, a divisão por serviço e a lista de risco aceito em uma só página. Reveja-a com as pessoas que são donas dos serviços, na mesma reunião que planeja o trabalho do próximo trimestre.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Idade do backlog de erros conhecidos | Encerrar registros antigos como "risco aceito" ou "não será corrigido"; dividir um registro antigo em novos e jovens; zerar o relógio registrando de novo | Contagem e idade dos riscos aceitos relatadas na mesma página; revisão dos encerramentos por alguém de fora da equipe dona; linhagem dos registros preservada |
| Cobertura de contornos | Escrever um contorno vago para satisfazer o campo; contar um contorno que nenhum atendente jamais tentou | Uso do contorno e taxa de falha nos incidentes vinculados; teste periódico de uma amostra de contornos |
| Incidentes ligados a erros conhecidos abertos | Deixar incidentes sem vínculo, ou ligá-los a outra causa, para que a parcela caia | Parcela de incidentes não vinculados relatada ao lado; revisão amostral de incidentes encerrados em busca de vínculos perdidos |
| Estoque de dívida | Não registrar a dívida, para que o estoque pareça pequeno; fundir muitos itens em um item grande; registrar trivialidades para parecer diligente | Revisão do registro contra uma amostra de revisões de código e análises pós-incidente; verificações de tamanho e especificidade dos itens |
| Juros da dívida | Subetiquetar o trabalho para evitar escrutínio, ou superetiquetar para ganhar um orçamento de reparo; ler a cifra como uma nota para a equipe | Auditoria amostral de itens etiquetados e não etiquetados; apenas visão no nível da equipe, sem comparação entre equipes; juros lidos junto com os vínculos de incidentes |
| Parcela de capacidade para dívida | Etiquetar trabalho comum de funcionalidade como reparo; escolher itens cosméticos fáceis para encher a parcela | Verificação de resultado: idade dos itens de juros altos mais antigos e vínculos de incidentes em queda; revisão do que foi corrigido contra a classificação |
| Variação líquida da dívida | Resolver muitos itens minúsculos para compensar alguns grandes; encerrar itens como "não será corrigido" para fazer a contagem cair | Variação líquida mostrada por faixa de tamanho e por juros; linha de "não será corrigido" relatada; verificação de recorrência nos itens resolvidos |

Uma leitura saudável mostra um livro-razão visível, específico e se movendo na direção que a equipe escolheu. O número de itens de juros altos mais antigos está caindo. Os incidentes ligados a erros conhecidos abertos estão em queda, e a parcela não vinculada é pequena. A parcela de capacidade para dívida é estável no nível combinado em vez de disparar depois de uma crise e sumir depois. A lista de risco aceito é curta e revista. Quando qualquer número isolado parece excelente e os outros não se mexem, suspeite da definição antes de comemorar.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Um livro-razão fundido de erros conhecidos e dívida | Priorização única; operações e entrega veem os mesmos custos | Exige ferramentas ou vínculos compartilhados; é preciso resolver a responsabilidade entre duas funções |
| Uma parcela fixa de capacidade para reparo | Previsível; protege o trabalho de reparo da pressão por funcionalidades | Pode ser gasta em itens de pouco valor se a classificação for fraca |
| Trabalho de reparo programado só quando vence o debate de prioridade | Flexível; responde à prioridade do momento | As funcionalidades quase sempre vencem; o livro-razão cresce até uma crise |
| Juros estimados a partir de incidentes e trabalho etiquetado | Liga a dívida ao custo observável; apoia a classificação | Números aproximados; depende de etiquetagem honesta e de vínculos de incidentes |
| Um esforço dedicado de reparo ou "semana da dívida" | Foco e progresso visível | Episódico; o livro-razão se reabastece entre os eventos; interrompe compromissos planejados |

Escolha o arranjo mais leve que mantenha em movimento os itens de juros altos mais antigos. Uma equipe pequena pode manter o livro-razão em um quadro, com um rótulo e uma revisão mensal. As organizações maiores precisam de vínculos entre ferramentas e de um método de classificação combinado. O objetivo é uma decisão deliberada sobre cada item, e não uma lista vazia.

## Perguntas para discutir com sua equipe

**1. Quais três itens abertos nos custam mais a cada mês, e como sabemos?**
Peça às pessoas que nomeiem candidatos de memória e depois confiram contra os vínculos de incidentes e o trabalho etiquetado. Comparem a lista lembrada com a medida e notem as diferenças. Combinem como a evidência para a classificação será reunida daqui em diante.

**2. Quando adiamos uma correção, quem decide, e quando olhamos de novo?**
Percorram os últimos cinco adiamentos e perguntem quem aceitou o risco e que data de revisão foi definida. Onde ninguém decidiu, o item foi negligenciado, e não adiado. Combinem uma regra de que todo adiamento traga um responsável, um motivo e um gatilho. Discutam como a lista de risco aceito será revista e por quem.

**3. Quanta capacidade devemos reservar para reparo, e o que mudaria a parcela?**
Mostrem a tendência do livro-razão e a parcela atual de capacidade para dívida. Perguntem o que a equipe aceitaria abrir mão para elevá-la e que evidência a deixaria cair. Registrem o número, o motivo e a data para revisitar.

**4. Os nossos contornos são reais, e um atendente novo conseguiria segui-los?**
Escolham um contorno ao acaso e peçam a alguém que não o escreveu que o siga. Combinem uma rotina de testes para os contornos que cobrem os erros de maior impacto.

**5. O que conta como corrigido, e por quanto tempo observamos antes de encerrar o registro?**
Comparem as regras de encerramento usadas pelas operações, pela entrega e pelo dono do produto. Discutam uma janela de recorrência adequada ao serviço e o que a equipe fará quando um item encerrado reabrir. Combinem uma definição e escrevam no registro de métricas.

**6. Onde as nossas cifras de dívida podem estar contando uma história confortável?**
Peçam as formas pelas quais cada número poderia ser lisonjeado: dívida não registrada, itens fáceis corrigidos primeiro, itens encerrados como não será corrigido. Olhem a parcela de incidentes não vinculados e a lista de risco aceito. Escolham uma barreira de proteção a acrescentar neste trimestre e nomeiem quem a conferirá.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega veem primeiro a dívida, em geral ao mudar o código. Ganham com um registro fácil de alimentar e com uma parcela protegida de capacidade, para que o trabalho de reparo não dependa de vencer uma discussão a cada conversa de planejamento. Devem registrar os atalhos quando os tomam, etiquetar o trabalho causado por pontos fracos e evitar usar dívida como rótulo para qualquer trabalho que prefeririam não fazer (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo, para os efeitos da dívida sobre o lead time).

### Equipes de serviço e operações

As equipes de operações veem os juros: incidentes repetidos, passos manuais, contornos frágeis e a carga de plantão que vem em seguida. São donas dos registros de erros conhecidos e dos documentos de contornos e têm os dados de incidentes que precificam os juros. Devem ligar todo incidente ao seu erro conhecido, testar contornos e levar à conversa de planejamento evidências classificadas em vez de uma lista de reclamações (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

### Liderança e governança

Os líderes decidem quanta capacidade o trabalho de reparo recebe, e os incentivos que definem decidem se o livro-razão permanece honesto. Devem pedir a distribuição de idade, as cifras de juros e a lista de risco aceito, e não uma única nota de dívida. Ler o livro-razão como uma nota para a equipe pune o registro e leva a dívida para a clandestinidade. Um fórum de governança deve tratar a aceitação de risco como uma decisão com um responsável e uma data de revisão.

### Clientes e usuários

Os clientes sentem a dívida como falhas repetidas e contornos que precisam seguir. Onde um contorno afeta os usuários, publique-o com uma nota simples sobre quando se espera uma correção e honre a data ou explique a mudança. Menos incidentes repetidos e um status honesto sobre problemas conhecidos constroem mais confiança do que a promessa de nenhum defeito (veja o tópico 6.1, Métricas de satisfação do cliente).

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional opera um serviço de agendamento de pacientes, apoiado por uma equipe de produto e um grupo de operações. Todos os números deste exemplo são ilustrativos.

O grupo de operações mantém 23 erros conhecidos na ferramenta de ITSM. A equipe de produto mantém uma lista separada de 41 itens de dívida em seu quadro. Uma revisão trimestral descobre que 9 dos erros conhecidos e 7 dos itens de dívida descrevem as mesmas cinco causas. O erro conhecido mais antigo tem 14 meses, a idade mediana dos erros conhecidos é de 5 meses e o 85º percentil é de 11 meses. A cobertura de contornos é de 61%. Os incidentes ligados a erros conhecidos abertos são 18% dos incidentes do trimestre, e 22% dos incidentes não estão vinculados, de modo que a parcela real pode ser maior.

A equipe funde as duas listas em um livro-razão de 55 itens distintos. Para os dez itens com mais incidentes vinculados, estima um esforço de reparo em faixas e juros mensais em horas. Um item se destaca: um job noturno de sincronização de consultas falha em silêncio cerca de uma vez a cada quinzena e exige uma reinicialização manual pela equipe de plantão. Seu reparo é estimado em duas semanas. Seus juros, pelos incidentes vinculados e pelo trabalho etiquetado, são de cerca de 10 horas por mês, e cada falha atrasa as listas matinais das clínicas. O tempo de retorno é de cerca de quatro meses, mais rápido que qualquer funcionalidade então prevista no plano.

A decisão, registrada no registro de decisões, é reservar 15% da capacidade da equipe de produto para o trabalho de reparo, classificado pelos juros por unidade de esforço, e corrigir primeiro o job de sincronização. O chefe de operações também concorda em ligar todo incidente a um erro conhecido onde existir e em testar os cinco contornos mais usados.

Dois trimestres depois, a idade mediana dos erros conhecidos é de 4 meses e o 85º percentil é de 9 meses. Os incidentes ligados a erros conhecidos abertos caem para 11%. A parcela não vinculada cai para 8%, o que dá à equipe mais confiança na cifra. Então a equipe pega um risco de manipulação. A linha de variação líquida da dívida mostra 12 itens resolvidos em um trimestre, mas 6 deles foram encerrados como não será corrigido, e dois eram os itens de juros altos mais antigos. Um revisor de fora da equipe lê os registros e descobre que os encerramentos foram feitos para melhorar a cifra de idade. Os itens são reabertos, o motivo de encerramento passa a ser um campo obrigatório com um aprovador nomeado, e os itens de risco aceito agora aparecem na mesma página da distribuição de idade.

## Ágil, IA, automação e análise

### Ágil

Gaste uma parcela protegida da capacidade na dívida de juros mais altos e reveja-a regularmente com as partes interessadas. O cuidado é que uma meta de contagem de dívida leva a dividir e rebatizar itens.

### IA

O código gerado por IA pode acrescentar dívida depressa, e a IA também pode ajudar a encontrá-la e quitá-la. Acompanhe separadamente e rotule a variação líquida da dívida e os incidentes ligados a erros conhecidos abertos nas áreas assistidas por IA. O cuidado é que um modelo que sugere uma correção pode deixar a causa raiz no lugar.

### Automação

Automatize a detecção de erros conhecidos obsoletos e da deterioração de dependências e de flags e meça a automação por alarmes falsos. O cuidado é que os scanners automatizados criam ruído que enterra os itens que importam.

### Análise

Estime os juros com os incidentes e o esforço que cada item causa, com faixas. A decisão informada é o que corrigir a seguir. O cuidado é que as estimativas de custo da dívida são aproximadas; por isso evite a falsa precisão.

## Olhar setorial

**Startup.** A dívida costuma ser deliberada e muitas vezes certa, porque a velocidade até o primeiro cliente importa mais. Mantenha uma lista no quadro com um rótulo, registre os atalhos à medida que os toma e defina uma data de revisão para que o "depois" tenha um significado. Eleve a parcela de reparo quando os juros começarem a aparecer em incidentes.

**Pequena empresa.** Um único administrador ou uma pequena equipe muitas vezes carrega tanto as operações quanto a entrega; assim as duas listas naturalmente são uma só. Registre os erros conhecidos e seus contornos em um documento compartilhado e anote de que fornecedor ou contrato cada item depende. Um defeito de propriedade do fornecedor é um erro conhecido que você não pode corrigir sozinho; por isso acompanhe a data comprometida do fornecedor e o seu contorno.

**Grande empresa.** Muitas equipes, muitos serviços e muitos fornecedores criam várias listas concorrentes e várias definições de "pronto". Definam uma estrutura de livro-razão, uma regra de encerramento e um método de classificação e deixem as equipes acrescentar campos locais com um mapeamento declarado.

**Governo e setor público.** Sistemas legados, ciclos de compras longos e orçamentos fixos tornam cara a quitação de certa dívida e lentas algumas decisões de substituição. Registre as restrições legais, de retenção e de auditoria que bloqueiam uma correção, já que explicam o adiamento. Mostre o livro-razão como parte do relato de riscos e planeje o reparo no ciclo orçamentário em vez de tratá-lo como custo não planejado (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é parar de pagar juros que você não vê. Incidentes repetidos, contornos manuais e mudanças lentas e arriscadas são os custos visíveis, e normalmente são registrados como problemas separados em orçamentos separados. Um livro-razão fundido os transforma em uma única comparação entre o custo do reparo e o custo de carregar a dívida.

O custo da prática tem três partes. A primeira é a implantação: um registro, vínculos entre a ferramenta de ITSM e o rastreador e uma convenção de etiquetas. A segunda é o esforço de operação: alguns segundos por incidente para ligá-lo, alguns segundos por item de trabalho para etiquetá-lo e uma revisão mensal de uma ou duas horas por serviço. A terceira é a própria capacidade de reparo, que é o maior item e é um investimento deliberado, e não uma sobrecarga.

O retorno vem de padrões que você mesmo pode medir. Compare os incidentes ligados a um erro conhecido antes e depois da correção, as horas de trabalho etiquetado em mudanças afetadas antes e depois e as interrupções de plantão evitadas. Acrescente o custo da indisponibilidade se a sua organização já o estima. Não tome emprestada uma cifra do setor para o custo da dívida: a literatura de pesquisa sobre o tema é real, mas as cifras dependem do contexto, e os seus próprios dados de incidentes e de tempo são evidência melhor. A pesquisa *Accelerate* liga o desempenho da entrega ao desempenho organizacional (veja o tópico 2.8, Métricas DORA), embora não dê um preço para o seu livro-razão. Para o tratamento mais amplo de custo e retorno, veja o tópico 7.7, Retorno do investimento e business case.

## Antipadrões e armadilhas

- **Duas listas que nunca se encontram.** Operações e entrega disputam a mesma capacidade com evidências diferentes. Funda as listas ou ligue toda causa compartilhada.
- **Uma única nota de dívida para a organização.** Esconde onde está o custo e convida à classificação das equipes. Relate o livro-razão por serviço, com idade, juros e responsabilidade.
- **A grande reescrita como único reparo.** As grandes limpezas emperram, e o livro-razão se reabastece enquanto elas correm. Aposente os itens em pequenos passos, classificados pelo tempo de retorno.
- **Dívida zero como meta.** Persegui-la premia encerramentos triviais e desestimula o registro honesto. Mire num livro-razão cujos itens de juros altos mais antigos estejam se movendo.
- **Encerrar erros conhecidos em "mesclado".** A correção não chegou aos usuários, e o incidente volta. Encerre na liberação e depois observe a recorrência durante uma janela declarada.
- **Esconder o adiamento em "não será corrigido".** A cifra de idade melhora e o risco permanece. Conte o risco aceito à parte, com um responsável e uma data de revisão.
- **Tratar a análise estática como verdade.** As pontuações refletem a forma do código, não o custo. Use-as para achar candidatos e depois confirme com vínculos de incidentes e histórico de mudanças.
- **Atribuir a dívida a autores.** Ensina as pessoas a esconder atalhos e a evitar componentes difíceis. Mantenha toda medida no nível de serviço e de equipe (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Livro-razão e definições | Erros conhecidos e dívida vivem na cabeça das pessoas ou em notas dispersas | Operações e entrega mantêm cada uma uma lista, com regras diferentes | Um livro-razão com definição escrita, um responsável e uma regra de encerramento para todo item | Idade, risco aceito e variação líquida revistos contra as definições escritas | Definições revistas com fornecedores e clientes quando deixam de informar decisões |
| Medição dos juros | Sem vínculo entre incidentes e causas | Alguns incidentes ligados a erros conhecidos à mão | Vínculos de incidentes exigidos onde a causa é conhecida; trabalho etiquetado no nível da equipe | Juros e tempo de retorno estimados para os principais itens e acompanhados ao longo do tempo | Juros ligados aos resultados dos serviços e compartilhados entre equipes e fornecedores |
| Capacidade e priorização | O reparo acontece numa crise | Tempo informal reservado por algumas equipes | Uma parcela combinada da capacidade e um método comum de classificação | Parcela ajustada pela tendência do livro-razão e financiada como trabalho planejado | Capacidade de reparo coordenada entre plataformas compartilhadas e fornecedores |
| Contornos e encerramento | Contornos não documentados ou guardados por uma só pessoa | Documentados para alguns erros, sem teste | Contornos na base de conhecimento, com uma regra de encerramento na liberação | Uso do contorno, falha e recorrência após o encerramento medidos | Contornos aposentados automaticamente conforme as correções são liberadas, com feedback dos usuários |

## Lista de verificação

- [ ] Erros conhecidos e itens de dívida estão em um só livro-razão, ou ligados item a item.
- [ ] Todo item tem um responsável, uma faixa de tamanho, um serviço e uma data de revisão.
- [ ] Os atalhos deliberados são registrados quando tomados, com um motivo.
- [ ] Os incidentes são ligados a erros conhecidos onde a causa é conhecida, e a parcela não vinculada é relatada.
- [ ] O trabalho causado por pontos fracos é etiquetado no nível da equipe, e a etiquetagem é auditada por amostra.
- [ ] Cada um dos principais itens tem uma faixa de esforço de reparo e uma estimativa de juros mensais.
- [ ] Uma parcela da capacidade para o trabalho de reparo é combinada, relatada e revista a cada trimestre.
- [ ] Os erros conhecidos são encerrados na liberação da correção, com uma janela de recorrência declarada.
- [ ] Os encerramentos por risco aceito são listados à parte, com um aprovador e uma data de revisão.
- [ ] Os contornos dos erros de maior impacto são testados em um calendário.
- [ ] A distribuição de idade e a divisão por serviço são mostradas, junto com os totais.
- [ ] Nenhuma medida de dívida é usada para comparar ou classificar indivíduos.

## Prompts de IA

**Funda duas listas em um livro-razão.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Estime faixas de esforço e juros mensais dos principais itens.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Revise o encerramento e os riscos de manipulação.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Prepare uma conversa de priorização com o dono do produto.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma métrica relacionada, como a recorrência ou a falha de mudanças, e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica editada nomeia seus relógios, seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Erros conhecidos e dívida técnica são duas visões de um mesmo livro-razão de reparos adiados; por isso mantenha-os juntos ou ligados.
- Meça os juros que cada item custa todo mês, em incidentes, contornos e mudanças lentas, e classifique o reparo pelo tempo de retorno.
- Faça de todo adiamento uma decisão com um responsável, um motivo e uma data de revisão e relate o risco aceito separadamente.
- Reserve uma parcela combinada da capacidade para o trabalho de reparo e relate-a ao lado do trabalho planejado.
- Encerre um erro conhecido na liberação da correção e depois observe a recorrência antes de confiar no resultado.
- Mantenha toda medida no nível de serviço e de equipe e use barreiras de proteção para que um número melhor signifique um sistema melhor.

## Referências e leituras complementares

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Dívida técnica](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Análise de causa raiz](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Refatoração de código](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Custo de oportunidade](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Custo do atraso](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Bug de software](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Análise estática de programas](https://en.wikipedia.org/wiki/Static_program_analysis).
