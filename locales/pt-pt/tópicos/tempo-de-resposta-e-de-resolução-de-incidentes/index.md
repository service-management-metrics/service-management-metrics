# Tempo de resposta e de resolução de incidentes

**As medidas de tempo dos incidentes descrevem quanto tempo os usuários esperam em cada etapa; por isso relate-as como distribuições com os relógios escritos, nunca como uma média única, e pareie cada número de velocidade com uma medida de se a correção se sustentou.**

## Visão geral e motivação

Um incidente, na gestão de serviços de TI (ITSM), é uma interrupção não planejada de um serviço ou uma redução da sua qualidade. A [gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management) é a prática que restabelece o serviço normal o mais depressa que for seguro. No ITIL 4, a prática se chama gestão de incidentes e fica entre as práticas de gestão de serviços da estrutura do [ITIL](https://en.wikipedia.org/wiki/ITIL). Suas contrapartidas ágeis são o hábito da equipe de tratar o trabalho não planejado como um fluxo de trabalho de primeira classe e as práticas de plantão e de revisão sem culpados que vêm da [engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), a disciplina de operar serviços com métodos de engenharia de software.

O tempo é a forma mais natural de descrever um incidente e a mais comumente mal usada. Um único incidente passa por várias etapas. Algo quebra, um monitor ou um usuário percebe, uma pessoa reconhece o alerta, alguém começa a trabalhar, o serviço é restabelecido para os usuários e o ticket é encerrado quando a causa é tratada ou adiada. Cada intervalo entre dois desses eventos é uma medida separada, com um responsável separado, uma causa de atraso separada e um remédio separado. Chamar tudo de "tempo de resolução" esconde onde o atraso mora.

Este tópico cobre as medidas de tempo decorrido que acompanham um incidente do início ao fim: o **tempo até detectar**, o **tempo até reconhecer**, o **tempo até a primeira resposta**, o **tempo até restabelecer** e o **tempo até resolver**. Cobre também a idade dos incidentes abertos, o número de vezes que um incidente muda de mãos e os problemas estatísticos do resumo mais conhecido, o tempo médio de restabelecimento ou de resolução (MTTR). As contagens, as categorias e a prioridade são tratadas em outro lugar (veja o tópico 3.2, Volume e prioridade de incidentes). Os incidentes grandes e incomuns têm suas próprias medidas (veja o tópico 3.4, Métricas de incidentes graves).

### Termos usados neste tópico

- **Tempo até detectar (TTD).** Tempo decorrido desde o momento em que a falha começou a afetar os usuários até o momento em que a organização soube dela, por monitoramento ou por relato de usuário.
- **Tempo até reconhecer (TTA).** Tempo decorrido desde o disparo do alerta ou o registro do ticket até uma pessoa ou equipe nomeada aceitar a responsabilidade.
- **Tempo até a primeira resposta.** Tempo decorrido desde o registro do incidente até a primeira ação ou mensagem significativa ao usuário afetado. Uma resposta automática não conta.
- **Tempo até restabelecer.** Tempo decorrido desde o início do impacto sobre o usuário até os usuários poderem usar o serviço de novo, mesmo que a causa subjacente tenha sido apenas contornada.
- **Tempo até resolver.** Tempo decorrido desde o registro do incidente até seu encerramento, porque o serviço foi restabelecido e o usuário confirmou ou teve uma chance justa de confirmar.
- **Tempo médio de restabelecimento ou de resolução (MTTR).** A média aritmética de uma dessas durações sobre um conjunto de incidentes. A letra R é lida como reparo, recuperação, restabelecimento, resolução ou resposta conforme quem fala, o que é o primeiro problema da abreviatura. O [artigo da Wikipédia sobre o tempo médio de reparo](https://en.wikipedia.org/wiki/Mean_time_to_repair) lista as variantes.
- **Acordo de nível de serviço (SLA).** Um [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement) é um compromisso entre um provedor e um cliente sobre o nível de serviço, muitas vezes incluindo metas de tempo de resposta e de resolução por prioridade.

### Por que a média é um mau resumo

As durações dos incidentes não são simétricas. A maioria dos incidentes é curta, alguns são muito longos e os longos dominam qualquer média. Durações desse tipo costumam ser bem descritas por uma forma assimétrica à direita, como a [distribuição log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution). Em dados assimétricos, a média pode ficar bem acima do que um incidente típico parece, e uma única interrupção longa pode movê-la mais do que um mês de melhorias.

A equipe de SRE do Google publicou uma análise desse problema. Ela argumenta que, para os conjuntos de dados de incidentes que estudou, a dispersão das durações é larga o bastante para que o MTTR possa esconder melhorias reais ou mostrar mudanças que são ruído, e recomenda olhar distribuições em vez disso (Davidovič, 2021, listado nas referências). O raciocínio repousa em estatísticas bem conhecidas, de modo que você pode conferi-lo com seus próprios dados sem confiar na conclusão de ninguém: plote as durações dos seus incidentes, calcule a média e a [mediana](https://en.wikipedia.org/wiki/Median) e veja quão distantes estão (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

A alternativa são os [percentis](https://en.wikipedia.org/wiki/Percentile). A mediana diz quanto um usuário típico esperou. O 85º ou o 95º percentil diz quanto esperaram os azarados. Os clientes lembram da espera longa, não da média; por isso um compromisso por percentil, como "nove em cada dez incidentes desta prioridade restabelecidos em um tempo declarado", combina muito melhor com a experiência deles do que uma média.

### Como as visões ITIL e ágil diferem

A visão do ITIL tende a partir de uma prioridade e de uma meta. O impacto e a urgência definem uma prioridade, a prioridade define as metas de tempo de resposta e de resolução, e um acordo de nível de serviço pode anexar consequências a perdê-las. Isso é ordenado e fácil de auditar, e propenso à manipulação que as metas convidam (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

A visão ágil e de SRE parte do impacto sobre o usuário e do fluxo. Pergunta com que rapidez a equipe limita o dano, quanto do tempo decorrido de um incidente foi trabalho ativo e quanto foi espera, e o que a equipe aprendeu. Prefere medidas de impacto (usuários afetados, minutos de serviço degradado) a medidas de status de ticket e trata o relógio do ticket como um substituto conveniente mas imperfeito. As duas visões são compatíveis. Use a estrutura de prioridades do ITIL para decidir o que medir e para quem, e use o pensamento de fluxo e de impacto para decidir se o número significa alguma coisa.

## Princípios-chave

- **Nomeie a etapa, não "resolução".** Detectar, reconhecer, responder, restabelecer e resolver são perguntas diferentes com responsáveis diferentes. Relate cada uma sob o próprio nome.
- **Escreva os dois relógios.** Toda medida de tempo declara qual evento a inicia, qual a para e quais estados a pausam. A maior parte da manipulação mora nessas fronteiras.
- **Relate distribuições.** Mostre a mediana, um percentil alto e a idade do incidente aberto mais antigo. Evite uma média solitária, que os dados assimétricos tornam pouco confiável.
- **Meça o restabelecimento separadamente do encerramento.** Os usuários se importam com quando o serviço voltou. O ticket pode ser encerrado depois, quando a causa é tratada.
- **Pareie velocidade com durabilidade.** Um restabelecimento rápido que o mesmo incidente desfaz no dia seguinte não é uma melhoria. Mostre as taxas de recorrência e de reabertura ao lado de toda medida de tempo.
- **Descreva equipes, serviços e sistemas.** Nunca classifique atendentes ou engenheiros individuais por tempo de resposta ou de resolução.
- **Segmente antes de comparar.** Compare o que é comparável, por prioridade e por serviço, porque um número misturado mistura redefinições de senha com falhas de banco de dados.

## Definições de métricas

Cada linha declara seus relógios. Tempo corrido e horário comercial são coisas diferentes: diga qual você usa. Onde uma medida usa percentis, a tabela dá o 50º e o 95º, e as equipes podem acrescentar o 85º.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo até detectar | Por quanto tempo uma falha afetou os usuários antes de a organização saber | O relógio começa no primeiro momento de impacto sobre o usuário (tirado de dados de monitoramento ou do início de impacto confirmado registrado na revisão); para no primeiro alerta ou relato de usuário. Relatado como mediana e 95º percentil por serviço. Incidentes sem início conhecido são contados e relatados à parte, não descartados | minutos | Plataforma de monitoramento e alertas; registro do incidente com um campo de início do impacto | Gestão de incidentes; monitoramento e gestão de eventos | Trabalho de observabilidade e de qualidade dos alertas (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas) | Mensal |
| Tempo até reconhecer | Quanto tempo um alerta ou ticket levantado espera antes de uma pessoa assumi-lo | O relógio começa quando o alerta dispara ou o ticket é registrado; para quando uma pessoa ou equipe nomeada o aceita. A atribuição automática não para o relógio. Relatado como mediana e 95º percentil por prioridade | minutos | Ferramenta de acionamento; histórico de atribuições da ferramenta de ITSM | Gestão de incidentes; central de serviços | Resposta de plantão em uma rotação de SRE | Mensal |
| Tempo até a primeira resposta | Quanto tempo o usuário espera por uma primeira resposta humana e útil | O relógio começa quando o incidente é registrado; para na primeira mensagem ou ação humana que trata o relato. Confirmações automáticas e recibos padronizados são excluídos. Relógio em horário comercial declarado | minutos ou horas comerciais | Registro de comunicação da ferramenta de ITSM | Central de serviços; gestão de incidentes | Feedback oportuno ao usuário, como em um acordo de trabalho | Semanal |
| Tempo até restabelecer | Por quanto tempo os usuários ficaram sem um serviço funcionando | O relógio começa no início do impacto sobre o usuário; para quando os usuários podem usar o serviço de novo, inclusive por contorno ou rollback. Uma causa corrigida depois não o estende. Relatado como mediana e 95º percentil por prioridade e serviço | minutos ou horas | Registro do incidente com carimbos de início do impacto e de restabelecimento; monitoramento | Gestão de incidentes | Tempo médio de restabelecimento nos termos da DORA, lido como distribuição (veja o tópico 2.8, Métricas DORA) | Mensal |
| Tempo até resolver | Por quanto tempo o registro do incidente ficou aberto até ser encerrado | O relógio começa quando o incidente é registrado; para quando é encerrado após o restabelecimento e a confirmação do usuário ou uma espera justa. O tempo em "aguardando o cliente" é mostrado como uma proporção separada, relatada, e não subtraído da cifra principal. Relatado como mediana e 95º percentil por prioridade | horas ou horas comerciais | Histórico de status da ferramenta de ITSM | Gestão de incidentes | Tempo de ciclo do trabalho não planejado (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) | Mensal |
| Idade do incidente aberto mais antigo | Há quanto tempo o incidente aberto mais antigo está aberto | Agora menos o horário de registro, para cada incidente aberto, listando os mais antigos por prioridade. Os estados de pausa não são subtraídos | dias | Lista de incidentes abertos da ferramenta de ITSM | Gestão de incidentes | Idade do item de trabalho no quadro da equipe (veja o tópico 2.1, Medidas de fluxo) | Semanal |
| Proporção de tempo ativo | A proporção do tempo decorrido de um incidente gasta em trabalho ativo e não em espera | Soma do tempo em estados ativos / tempo total do registro ao encerramento, para incidentes encerrados no período. Os estados ativos são aqueles em que uma pessoa trabalha o incidente; os estados de espera são listados na definição | porcentagem | Histórico de status da ferramenta de ITSM | Gestão de incidentes | Eficiência de fluxo (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) | Trimestral |
| Contagem de reatribuições | Quantas vezes um incidente muda de equipe responsável antes do restabelecimento | Contagem de mudanças de grupo de atribuição do registro ao restabelecimento, resumida como a mediana e a proporção de incidentes com três ou mais. Contada por serviço e prioridade, nunca por atendente | contagem | Histórico de atribuições da ferramenta de ITSM | Gestão de incidentes; central de serviços | Contagem de transferências (veja o tópico 9.3, Métricas de colaboração e transferências de trabalho) | Mensal |

Duas notas sobre os dados. Primeiro, um tempo de restabelecimento só é tão bom quanto o seu horário de início. Muitos registros de incidentes capturam quando alguém digitou o ticket, o que pode atrasar horas em relação ao início real do impacto. Se a sua ferramenta não tem um campo de início do impacto, acrescente um e trate os inícios estimados como estimativas (veja o tópico 1.5, Fontes de dados e instrumentação). Segundo, ao comparar períodos, mantenha as mesmas definições de prioridade, ou a linha de tendência refletirá a reclassificação.

## Recomendações

### Defina os relógios

**1. Escreva uma folha de relógio para cada medida de tempo.** Para cada etapa, liste o evento de início, o evento de parada, os estados que pausam o relógio, a base de tempo (corrido ou horário comercial) e as exclusões. Guarde-a no registro de métricas (veja o tópico 1.4, Governança e responsabilidade das métricas).

**2. Separe o restabelecimento do encerramento.** Registre quando o serviço voltou para os usuários como um carimbo próprio, à parte de quando o ticket foi encerrado. O restabelecimento é o que os usuários sentem, e o encerramento inclui verificação, documentação e tratamento da causa. As equipes que usam um só carimbo para os dois são premiadas por encerrar tickets cedo ou punidas por um acompanhamento cuidadoso.

**3. Registre o início do impacto, e não apenas o horário de registro.** Peça aos responsáveis pela resposta que preencham quando os usuários sentiram o efeito pela primeira vez, usando dados de monitoramento sempre que possível. Marque o campo como estimado quando for. O tempo até detectar não tem sentido sem ele, e o tempo de restabelecimento fica distorcido pela sua ausência.

**4. Limite os estados de pausa e relate o seu uso.** Aguardar um cliente ou um fornecedor às vezes é legítimo. Permita uma lista curta e nomeada de estados de pausa, exija um motivo e mostre a proporção do tempo do incidente gasta em cada um. Uma proporção crescente de tempo pausado é sinal de deriva, não de velocidade.

### Relate com honestidade

**5. Substitua a média pela mediana e um percentil alto.** Mostre o 50º e o 95º percentil de cada etapa, por prioridade, como série temporal. Mostre a contagem de incidentes por trás de cada ponto, porque um percentil de dez incidentes é uma cifra fraca. Onde as contagens são pequenas, plote os incidentes individuais como pontos e dispense a linha de resumo.

**6. Mostre a idade dos incidentes abertos mais antigos.** Um gráfico de durações de incidentes encerrados é cego aos incidentes ainda abertos, que são os piores. Liste semanalmente os incidentes abertos mais antigos por prioridade. É difícil melhorá-la sem terminar o trabalho, o que a torna uma companheira útil de qualquer gráfico de tempo de resolução.

**7. Segmente por prioridade e por serviço.** Um tempo de resolução misturado sobe quando a mistura se desloca para incidentes complexos, mesmo que cada tipo de incidente seja tratado mais depressa. Compare dentro de uma prioridade e dentro de um serviço e mostre a mistura ao lado do tempo (veja o tópico 3.2, Volume e prioridade de incidentes). Não tire conclusões de um mês em que a mistura mudou.

**8. Use limites de controle para separar sinal de ruído.** As durações dos incidentes variam muito de semana para semana sem que nada mude. Um gráfico de controle, com limites calculados a partir de um período estável, mostra quando uma mudança é grande o bastante para merecer explicação (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

### Pareie velocidade com durabilidade

**9. Mostre as taxas de reabertura e de recorrência ao lado de toda medida de tempo.** A taxa de reabertura é a proporção de incidentes reabertos dentro de uma janela declarada. A recorrência é o mesmo serviço e sintoma reaparecendo dentro de uma janela. Se o tempo de restabelecimento cai enquanto a recorrência sobe, a equipe está aplicando remendos rápidos. Envie os incidentes recorrentes para a gestão de problemas (veja o tópico 4.1, Métricas de gestão de problemas).

**10. Meça a espera e as transferências, porque é aí que o tempo vai.** Para a maioria dos serviços, boa parte do tempo decorrido de um incidente é espera por uma pessoa, uma decisão ou um fornecedor, e não trabalho. A proporção de tempo ativo e a contagem de reatribuições mostram onde olhar. A correção para um longo tempo de resolução costuma ser uma regra de roteamento mais clara ou um plantão compartilhado, e não digitar mais depressa.

**11. Use metas sobre percentis, com um humano na decisão.** Se precisar de uma meta, declare-a como um compromisso por percentil para uma prioridade, como "nove em cada dez incidentes de prioridade 2 restabelecidos em um tempo declarado", e combine-a com as pessoas que a cumprirão. Revise as violações como perguntas sobre o sistema, e não como falhas da pessoa de plantão (veja o tópico 5.1, Métricas de SLA, OLA e XLA).

**12. Pergunte aos usuários sobre a experiência.** Uma curta pesquisa sobre uma amostra de incidentes encerrados e a leitura dos comentários dirão se o número combina com o que a espera pareceu. Os usuários muitas vezes se importam mais com a comunicação oportuna do que com o minuto exato do restabelecimento (veja o tópico 6.1, Métricas de satisfação do cliente).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tempo até detectar | Definir o início do impacto mais tarde do que foi; alargar os limiares de alerta para que menos falhas contem como incidentes; contar só os incidentes que o monitor pegou | Proporção de incidentes relatados primeiro por usuários e não pelo monitoramento; revisão periódica das estimativas de início do impacto contra os dados de monitoramento |
| Tempo até reconhecer | Atribuir ou reconhecer automaticamente para parar o relógio; reconhecer o alerta e depois não fazer nada | Tempo até a primeira resposta e tempo até restabelecer para os mesmos incidentes; amostra de alertas reconhecidos sem atividade posterior |
| Tempo até a primeira resposta | Enviar uma resposta padronizada ou de uma palavra para parar o relógio | Revisar uma amostra de primeiras respostas quanto à substância; contatos repetidos e comentários de pesquisa |
| Tempo até restabelecer | Declarar o serviço restabelecido antes de os usuários poderem usá-lo; restabelecer suprimindo o sintoma; registrar interrupções como manutenção planejada | Recorrência dentro de uma janela; impacto relatado pelo usuário depois do horário de restabelecimento; proporção de incidentes rebatizados depois do fato |
| Tempo até resolver | Mover tickets para "aguardando o cliente" ou "em espera"; encerrar após uma única tentativa de contato; dividir um incidente em filhos para encerrar o pai cedo | Proporção do tempo em estados de pausa; taxa de reabertura; idade do incidente aberto mais antigo; ler uma amostra das notas de encerramento |
| Idade do incidente aberto mais antigo | Encerrar e relevantar o ticket mais antigo; reclassificá-lo como problema ou requisição para tirá-lo da lista | Ligar duplicatas aos originais e relatar a idade vinculada; contagem de incidentes convertidos em problemas ou requisições a cada período |
| Proporção de tempo ativo | Registrar trabalho breve e sem sentido para marcar o tempo como ativo; passar a estados ativos sem esforço | Comparar o tempo ativo com resultados como o tempo de restabelecimento; amostra de notas de trabalho |
| Contagem de reatribuições | Reabrir sob a mesma equipe em vez de repassar; repassar o trabalho por um canal paralelo para que a ferramenta não mostre transferência | Tempo até restabelecer e satisfação do usuário; observação periódica de como o trabalho se move entre equipes |

Uma leitura saudável mostra medianas e percentis de cauda que se movem juntos, uma proporção pequena e estável de tempo pausado, poucos incidentes relatados primeiro por usuários, recorrência em queda e comentários de pesquisa que combinam com os dados dos tickets. Trate uma melhoria de manchete que chega sozinha como um gatilho para uma revisão de manipulação.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Tempo médio de restabelecimento | Familiar; um número; fácil de acompanhar | Dominado por poucos incidentes longos; esconde a mudança real; ruim para amostras pequenas |
| Mediana mais um percentil alto | Descreve a experiência típica e a azarada; resiste a valores atípicos | Exige incidentes suficientes; dois números a explicar |
| Plotar cada incidente | Mostra a forma completa e os valores atípicos; honesto em baixo volume | Mais difícil de ler em alto volume; precisa de um facilitador |
| Metas por prioridade | Expectativas claras; apoia contratos e escalonamento | Convida à reclassificação e à pausa do relógio; pode levar o esforço à fronteira da meta |
| Medidas pelo relógio do ticket | Baratas, disponíveis em toda ferramenta de ITSM | Medem o ticket, não a experiência do usuário; sensíveis ao fluxo de status |
| Medidas baseadas em impacto | Próximas do que os usuários sentem; resistem a truques de ticket | Exigem dados de monitoramento e um campo de início do impacto; mais difíceis de auditar |

A resposta pragmática é manter o relógio do ticket porque toda ferramenta o tem, acrescentar um carimbo de restabelecimento baseado em impacto onde o monitoramento permitir e usar distribuições para ambos. A média é aceitável como descrição aproximada de um conjunto único, estável e grande de incidentes semelhantes, e nunca deve ser o único número na página.

## Perguntas para discutir com sua equipe

**1. Qual etapa de um incidente leva mais tempo para nós, e como sabemos?**
Desenhe a linha do tempo do incidente num quadro, com as etapas do início do impacto ao encerramento. Pegue os últimos dez incidentes e marque quanto tempo cada etapa levou, usando os dados da ferramenta e a memória dos responsáveis pela resposta. O facilitador deve procurar a etapa em que o tempo se agrupa, que muitas vezes é a espera por uma transferência ou uma decisão, e não o trabalho técnico. Combinem qual etapa merece atenção primeiro.

**2. Onde o nosso relógio começa e para, e quem decidiu?**
Peça a cada pessoa que diga quando acredita que um incidente "começou" e quando "terminou". As respostas diferirão, e as diferenças são o achado. Compare-as com os campos da ferramenta e o fluxo de status. Registre as definições combinadas no registro de métricas e anote onde a ferramenta ainda não consegue apoiá-las.

**3. O que as nossas medianas e 95º percentis mostrariam que a média esconde?**
Antes da reunião, calcule a média, a mediana e o 95º percentil dos incidentes do último trimestre por prioridade. Mostre-os lado a lado e plote as durações. Pergunte o que a equipe concluiria de cada um. O facilitador deve notar se um ou dois incidentes movem a média e discutir se a equipe acredita que a mediana representa a espera de um usuário típico.

**4. Quanto tempo passamos esperando em vez de trabalhando, e por quê?**
Escolha três incidentes longos e rastreie o histórico de status. Conte as horas em estados ativos e as horas em estados de espera e anote quem ou o que era esperado. Pergunte quais esperas poderiam ser encurtadas por uma decisão, um caminho de escalonamento mais claro ou um plantão compartilhado.

**5. Se nos pedissem para cortar o tempo de resolução em um quarto, como o faríamos sem ajudar os usuários?**
É a revisão de manipulação em miniatura. Liste todo movimento que melhoraria o número sem melhorar o serviço, como pausar o relógio, encerrar cedo ou rebatizar prioridades. Para cada movimento, pergunte se uma barreira de proteção o pegaria. A lista é o começo da sua coluna de vetores de manipulação e mostra onde as definições precisam ser apertadas.

**6. Como sabemos que um restabelecimento mais rápido foi real?**
Peça as evidências: recorrência, reabertura, comentários de usuários e qualquer incidente posterior com o mesmo sintoma. Olhe uma melhoria recente e pergunte se ela se sustentou um mês depois. O facilitador deve conduzir o grupo a correções duráveis. Termine decidindo qual medida de durabilidade entra no painel.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de produto que operam seus próprios serviços veem o tempo de incidente como um custo do trabalho não planejado que desloca o trabalho planejado. Acompanhem quanto de cada período de fluxo é tomado por incidentes e tratem os incidentes repetidos como itens de backlog para a equipe dona. As práticas de release que tornam o rollback rápido encurtam o restabelecimento; por isso o tempo de incidente é em parte uma medida de entrega (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

### Equipes de serviço e operações

As equipes de operações são donas dos relógios e sentem a pressão das metas. Devem publicar a folha de relógio, auditar o uso dos estados de pausa, relatar medianas e percentis de cauda por prioridade e manter uma lista semanal dos incidentes abertos mais antigos. A carga de plantão e a qualidade dos alertas moldam os tempos de reconhecimento e de detecção; por isso olhem para eles juntos (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão).

### Liderança e governança

Os líderes devem perguntar qual etapa é a mais lenta e o que está sendo feito a respeito, não por que um número está vermelho. Devem esperar relato por percentis, uma medida de durabilidade ao lado de qualquer medida de velocidade e uma explicação quando as definições mudarem. O financiamento de monitoramento, runbooks e trabalho sobre problemas muitas vezes rende mais do que a pressão sobre os responsáveis pela resposta, porque reduz o atraso que eles não controlam.

### Clientes e usuários

Os usuários vivenciam a espera, a qualidade da comunicação e se o problema volta. Raramente veem os nomes das etapas. Dê a eles uma primeira resposta honesta, diga o que esperar e atualize-os em um calendário. Seus comentários de pesquisa e contatos repetidos são a melhor verificação de se o relógio do ticket diz a verdade.

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma plataforma de pedidos, um serviço de contas de clientes e um sistema interno de armazém. As equipes de produto são donas de seus serviços e dividem uma escala de plantão com um pequeno grupo de operações. Todos os números deste exemplo são ilustrativos.

A liderança define a meta de um "tempo médio de resolução abaixo de quatro horas" para incidentes de prioridade 2. No primeiro trimestre, o painel mostra uma média de 3,8 horas, e a meta parece cumprida. A equipe do armazém diz que algumas interrupções parecem durar o dia inteiro. O responsável pelas operações plota os 41 incidentes de prioridade 2 (ilustrativo) do trimestre e encontra uma mediana de 1,5 hora e um 95º percentil de 11 horas. Três incidentes respondem pela maior parte da cauda longa.

Ela rastreia os três incidentes longos. Cada um passou a maior parte do tempo em "aguardando o fornecedor" ou "aguardando o cliente". Em dois, o ticket havia sido encerrado e levantado de novo como um novo incidente quando o original "estourou", o que reiniciou o relógio. Um terceiro envolveu quatro reatribuições entre equipes em dois dias. Uma amostra de notas de encerramento mostra que 6 de 30 tickets revistos (ilustrativo) foram encerrados após uma única tentativa de contatar o usuário.

A equipe faz quatro mudanças. Acrescenta um campo de início do impacto e um carimbo de restabelecimento ao formulário do incidente. Relata a mediana, o 85º e o 95º percentil por prioridade e os incidentes abertos mais antigos toda semana. Mostra a proporção do tempo em estados de pausa e a taxa de recorrência na mesma página. E liga os tickets relevantados aos originais para que a idade se mantenha.

Na revisão seguinte, a média da manchete subiu para 4,6 horas porque os tickets relevantados agora contam por inteiro. A equipe explica a alta à liderança como uma correção. O 95º percentil e o ticket aberto mais antigo passam a ser os números em que trabalham, e a contagem de reatribuições aponta para uma lacuna de roteamento entre o serviço de pedidos e o sistema de armazém. Combinam acrescentar um alias de plantão compartilhado e rever o efeito no trimestre seguinte em vez de definir uma nova meta imediatamente.

## Ágil, IA, automação e análise

### Ágil

Um curto ciclo de feedback depois de cada incidente significativo, com as partes interessadas envolvidas, ajuda a equipe a melhorar seus relógios. O cuidado é que metas de tempo de resposta produzem reconhecimentos rápidos e vazios; por isso pareie-as com o tempo até restabelecer.

### IA

A IA pode acelerar a primeira resposta, sugerir correções e resumir incidentes, o que encurta o tempo até a primeira resposta enquanto o tempo até restabelecer pode não mudar. Relate os dois, mais a proporção de incidentes em que uma sugestão da IA foi usada e a proporção que se repetiu. O cuidado é que uma resposta rápida da IA que está errada acrescenta trabalho; por isso conte os incidentes reabertos.

### Automação

Calcule cada relógio a partir de carimbos de eventos na ferramenta, com os motivos de pausa registrados, e meça o diagnóstico e a remediação automatizados quanto a ações erradas além do tempo economizado. O cuidado é que uma automação que restabelece o serviço sem registrar a causa esconde o registro de problema.

### Análise

Relate a mediana e um percentil alto de cada relógio com o incidente aberto mais antigo e mostre quantos incidentes estão por trás deles. A decisão informada é onde os usuários esperam mais. O cuidado é que as definições de relógio diferem entre ferramentas; por isso escreva os eventos de início e de parada antes de comparar equipes.

## Olhar setorial

**Startup.** O volume é baixo; por isso os percentis são ruidosos e um gráfico de cada incidente é melhor que um resumo. Uma só pessoa costuma detectar, responder e restabelecer, de modo que a separação por etapas importa menos que uma linha do tempo escrita de cada incidente. Acrescente uma nota de início do impacto a cada relatório pós-incidente e calcule medianas simples quando houver incidentes suficientes.

**Pequena empresa.** Um provedor de serviços gerenciados ou um único generalista de TI pode tratar os incidentes, e o contrato do provedor pode definir metas de resposta e de resolução. Leia com cuidado os relógios do contrato, porque muitas vezes diferem da experiência dos seus usuários. Mantenha um curto registro de início do impacto e de restabelecimento para os incidentes que importam e peça ao provedor os registros subjacentes, já que uma cifra de resumo esconde os relógios.

**Grande empresa.** Muitas equipes, fornecedores e esquemas de prioridade tornam a comparação tentadora e enganosa. Padronize as definições de relógio e o significado das prioridades em toda a organização, publique distribuições em vez de médias e segmente por serviço. Atente para a deriva dos estados de pausa e para a reclassificação, que crescem com o número de camadas de relato.

**Governo e setor público.** Contratos, relatórios legais e auditoria podem fixar os relógios e as definições de prioridade. Cumpra essas obrigações como escritas e mantenha ao lado uma segunda visão, voltada ao usuário, para que a conformidade não esconda uma experiência ruim. Seja aberto sobre as definições e sobre as correções quando uma regra de relógio mudar (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo deste tópico é sobretudo projeto e disciplina. Leva algumas horas para escrever folhas de relógio, alguma configuração para acrescentar um campo de início do impacto e um carimbo de restabelecimento e um esforço modesto para montar relatórios por percentis. Onde a ferramenta de ITSM ou uma plataforma de monitoramento já guarda os carimbos, a extração é uma tarefa única. O custo recorrente é uma revisão mensal e uma amostra trimestral de incidentes encerrados.

O retorno vem de melhores decisões e menos retrabalho. O relato por distribuições mostra se uma melhoria funcionou, e o relato por etapas dirige o esforço ao atraso real, como transferências, lacunas de detecção ou esperas por fornecedores. As medidas de durabilidade evitam a falsa economia de remendos rápidos que voltam como incidentes repetidos. Meça sua própria linha de base por um trimestre, faça uma mudança e compare as distribuições.

## Antipadrões e armadilhas

- **Um único MTTR no painel executivo.** A média de dados assimétricos engana. Mostre a mediana, um percentil alto e o incidente aberto mais antigo e diga quantos incidentes estão por trás de cada ponto.
- **Misturar prioridades e serviços.** Uma mudança de mistura parece uma mudança de desempenho. Segmente por prioridade e serviço e mostre a mistura.
- **Parar o relógio com estados de pausa.** O tempo some em "aguardando" e "em espera". Liste os estados permitidos, exija motivos e relate a proporção do tempo em cada um.
- **Encerrar e relevantar tickets.** Reinicia a idade e esconde o incidente longo. Ligue os tickets relevantados aos originais e relate a idade vinculada.
- **Usar um só carimbo para restabelecimento e encerramento.** As equipes são então premiadas por encerrar cedo demais ou penalizadas por um acompanhamento cuidadoso. Registre ambos e relate ambos.
- **Classificar atendentes ou engenheiros por tempo de resolução.** Premia tickets fáceis e a escolha seletiva e desestimula a ajuda e o escalonamento. Relate apenas por equipe e serviço.
- **Metas sem medidas de durabilidade.** Um remendo rápido que falha amanhã parece sucesso. Mostre a recorrência e a taxa de reabertura ao lado de toda meta.
- **Tratar amostras pequenas como tendências.** Um 95º percentil de um punhado de incidentes é um palpite. Plote os incidentes individuais e espere mais dados antes de traçar uma linha.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definições e relógios | Cada pessoa mede de um jeito; um único "tempo de resolução" | Relógios escritos para algumas equipes; etapas parcialmente separadas | Uma folha de relógio para todas as etapas, com estados de pausa listados | Definições revistas e mudanças registradas com motivos | Definições alinhadas com fornecedores e clientes e revistas quando deixam de informar decisões |
| Qualidade dos dados | Notas manuais; início do impacto desconhecido | Carimbos da ferramenta para ticket registrado e encerrado | Início do impacto e restabelecimento registrados para incidentes prioritários | Dados auditados por amostragem; estimativas sinalizadas | Dados de monitoramento e de ITSM unidos automaticamente e confiáveis entre equipes |
| Prática estatística | Apenas média | Média e mediana mostradas | Mediana e um percentil alto por prioridade e serviço | Limites de controle usados; medidas de durabilidade pareadas | Distribuições ligadas à experiência do usuário e usadas para decidir onde investir |
| Uso na melhoria | Números usados para perseguir indivíduos | A equipe vê seus próprios números | A equipe revê mensalmente os tempos das etapas e a espera | Etapas lentas levam a trabalho de melhoria financiado | A melhoria é compartilhada entre equipes e fornecedores e as medidas evoluem |

## Lista de verificação

- [ ] Cada etapa (detectar, reconhecer, responder, restabelecer, resolver) tem uma regra escrita de início, parada e pausa.
- [ ] O início do impacto e o horário de restabelecimento são registrados como campos separados para incidentes prioritários.
- [ ] Os relatórios mostram a mediana e um percentil alto, por prioridade e por serviço.
- [ ] A contagem de incidentes por trás de cada ponto relatado é mostrada.
- [ ] Os incidentes abertos mais antigos são listados semanalmente.
- [ ] Os estados de pausa são uma lista curta e nomeada, e a proporção do tempo neles é relatada.
- [ ] As taxas de reabertura e de recorrência são mostradas ao lado de toda medida de tempo.
- [ ] Os tickets relevantados são ligados aos originais para que a idade se mantenha.
- [ ] Nenhuma medida de tempo é usada para classificar atendentes ou engenheiros individuais.
- [ ] Uma amostra de incidentes encerrados é lida a cada trimestre quanto à honestidade.
- [ ] Os comentários das pesquisas com clientes são lidos ao lado dos dados dos tickets.

## Prompts de IA

**Compare a média e os percentis das durações dos nossos incidentes.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Redija uma folha de relógio para as nossas medidas de tempo de incidentes.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Encontre para onde vai o tempo decorrido em alguns incidentes longos.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Faça uma revisão de manipulação das nossas metas de tempo de incidentes.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar os tópicos relacionados e as barreiras de proteção pareadas de uma medida de tempo de incidentes que você está prestes a relatar.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma mudança neste tópico mantém coerentes o modelo, a tabela de manipulação e as referências cruzadas.

## Ideias-chave

- Um incidente tem etapas, e cada etapa tem seu próprio relógio, responsável e remédio. Nomeie a etapa que você está medindo.
- As durações dos incidentes são assimétricas; por isso a média engana. Relate a mediana, um percentil alto e a idade do incidente aberto mais antigo.
- Escreva onde cada relógio começa e para, registre o início do impacto e o restabelecimento separadamente do encerramento do ticket e limite os estados de pausa.
- Pareie toda medida de velocidade com uma medida de durabilidade, como a recorrência e a taxa de reabertura.
- Descreva equipes e serviços, nunca atendentes individuais, e leia uma amostra de incidentes encerrados para conferir que os números são honestos.

## Referências e leituras complementares

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Gestão de incidentes](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Tempo médio de reparo](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Distribuição log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Mediana](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
