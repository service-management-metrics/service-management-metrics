# Métricas de fluxo de valor

**Meça um fluxo de valor de ponta a ponta, divida cada etapa em tempo em que o trabalho é tocado e tempo em que ele espera e conte quanto chega utilizável, porque os maiores atrasos e o maior retrabalho de uma organização de serviços ficam entre as equipes, e não dentro delas.**

## Visão geral e motivação

A maioria das equipes mede a própria etapa. A central de serviços relata tickets encerrados, uma equipe de desenvolvimento relata histórias concluídas, um comitê de mudanças relata mudanças aprovadas. Cada número pode parecer saudável enquanto quem pediu algo espera semanas. A razão é estrutural: numa requisição típica, a maior parte do tempo decorrido é gasta em filas e transferências, e nenhuma equipe sozinha é dona desse tempo.

Um [fluxo de valor](https://en.wikipedia.org/wiki/Value_stream) é a sequência de passos pela qual uma requisição se torna valor entregue. O [mapeamento do fluxo de valor](https://en.wikipedia.org/wiki/Value-stream_mapping) é a técnica, desenvolvida dentro da [manufatura enxuta](https://en.wikipedia.org/wiki/Lean_manufacturing) e depois aplicada a escritórios, hospitais e software, de desenhar cada passo desde o início de um processo até o cliente e registrar tempo e volume em cada etapa. O mapa é um retrato do estado atual, seguido de um retrato de um estado futuro melhor. Os números no mapa são o assunto deste tópico.

Dois vocabulários se encontram aqui. No ITIL 4, a quarta edição da Information Technology Infrastructure Library, um fluxo de valor é uma combinação específica de atividades da cadeia de valor de serviço do [ITIL](https://en.wikipedia.org/wiki/ITIL) (planejar, melhorar, engajar, projetar e fazer a transição, obter e construir, entregar e dar suporte) arranjadas para criar um produto ou serviço particular. Exemplos são "restabelecer o serviço após um incidente" e "entregar uma mudança da ideia à produção". O ITIL diz o que é um fluxo e quem precisa estar envolvido. O lean diz como medi-lo. O equivalente ágil é o fluxo de itens de trabalho por um quadro, que as equipes que gerenciam o fluxo já acompanham com medidas como o tempo de ciclo (veja o tópico 2.1, Medidas de fluxo).

As medidas lean são poucas. O **lead time** é o tempo total decorrido desde o momento em que uma requisição é feita até o momento em que é entregue. O **tempo de processo**, às vezes chamado de touch time, é o tempo em que alguém está de fato trabalhando no item. O **tempo de espera** é o tempo em que o item fica parado entre trabalhos ativos, numa fila, numa aprovação ou numa transferência. A **porcentagem completa e exata (%C/E)** é a proporção de itens que a próxima etapa consegue usar como recebidos, sem precisar corrigi-los, completá-los ou devolvê-los. O **takt time** é o ritmo em que o fluxo precisa concluir itens para acompanhar a demanda dos clientes, calculado como o tempo de trabalho disponível dividido pelo número de itens demandados nesse tempo. A razão entre o tempo de processo e o lead time é a **eficiência de processo**, que este livro trata como a forma de fluxo de valor da eficiência de fluxo (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo).

Duas relações tornam os números úteis em conjunto. Primeiro, o [lead time](https://en.wikipedia.org/wiki/Lead_time) é a soma do tempo de processo e do tempo de espera em todas as etapas; por isso um fluxo com lead time de semanas e tempo de processo de dias é sobretudo fila. A [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law) liga essa fila ao trabalho em andamento e à vazão, razão pela qual o tópico 2.3 (Trabalho em andamento e teoria das filas) é o companheiro natural. Segundo, a %C/E se compõe. Um fluxo de cinco etapas em que cada etapa passa 90% de sua saída de forma limpa entrega um resultado limpo apenas cerca de 59% das vezes, um produto conhecido na manufatura como [rendimento em linha (rolled throughput yield)](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Os relatórios de etapa isolada dizem todos 90%. O fluxo diz algo bem menos confortável.

## Princípios-chave

- **Comece na requisição do cliente e termine no uso do cliente.** Um fluxo medido de "trabalho iniciado" a "trabalho integrado" esconde a espera nas duas pontas, que costuma ser a parte mais longa.
- **Separe o tempo de toque do tempo de espera em cada etapa.** Uma única duração de etapa mistura os dois e manda o esforço de melhoria para o lugar errado. A espera costuma ser uma propriedade de projeto do fluxo, e não uma falha de esforço.
- **Meça a qualidade como completude e exatidão, além de velocidade.** Uma etapa rápida que devolve o trabalho é lenta nos termos do fluxo, porque o retrabalho consome capacidade e acrescenta espera.
- **Mapeie um fluxo e uma classe de item por vez.** Um mapa que mistura mudanças emergenciais com requisições rotineiras produz uma média que não descreve nenhuma das duas.
- **Relate distribuições e mostre a amostra.** O lead time e o tempo de espera são assimétricos; por isso mostre a mediana e um percentil alto e diga quantos itens e qual período (veja o tópico 1.6, Letramento estatístico para métricas de serviço).
- **Descreva fluxos, nunca pessoas.** As métricas de etapa identificam onde o trabalho espera. Nunca são uma classificação dos indivíduos ou das equipes de cada etapa.

## Definições de métricas

As métricas abaixo são definidas para um fluxo de valor nomeado e uma classe de trabalho. As contagens de itens excluem itens cancelados, salvo indicação em contrário. O tempo de processo e o tempo de espera são relatados para cada etapa e somados para o fluxo.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time do fluxo de valor | Tempo decorrido da requisição do cliente até o cliente poder usar o resultado | horário da confirmação de entrega menos horário em que a requisição foi registrada; itens cancelados ou retirados são excluídos; relate a mediana e o 85º e o 95º percentis | dias | Registros da ferramenta de ITSM combinados com eventos de entrega do pipeline ou do sistema de atendimento | Gestão de requisições de serviço; habilitação de mudanças | Lead time no quadro da equipe | Mensal |
| Tempo de processo | Tempo em que um item é trabalhado ativamente, por etapa e para o fluxo | soma dos intervalos em que o item está em um estado ativo, por etapa; estados de fila, de espera por aprovação e bloqueados são excluídos | horas ou dias | Histórico de status do rastreador; registros de tempo onde os estados são grosseiros demais | Gestão de incidentes; gestão de requisições de serviço | Tempo de ciclo nas colunas "em andamento" | Mensal |
| Tempo de espera | Tempo em que um item fica parado entre trabalhos ativos, por etapa e para o fluxo | tempo decorrido da etapa menos o tempo de processo dessa etapa; inclui filas, aprovações, transferências e tempo bloqueado | dias | Histórico de status do rastreador e mudanças de estado da ferramenta de ITSM | Habilitação de mudanças; central de serviços | Tempo nas colunas de fila; tempo bloqueado | Mensal |
| Eficiência de processo | Proporção do lead time que é tempo de processo | soma do tempo de processo nas etapas / lead time do fluxo de valor para os mesmos itens; itens ainda abertos são excluídos | porcentagem | Derivada do tempo de processo e do lead time | Melhoria contínua | Eficiência de fluxo | Trimestral |
| Porcentagem completa e exata (etapa) | Proporção dos itens que uma etapa recebe e consegue usar sem correção, complementação ou devolução | itens aceitos como recebidos / itens recebidos no período; itens devolvidos por qualquer motivo contam como não aceitos | porcentagem | Eventos de devolução e de reabertura no rastreador ou na ferramenta de ITSM; revisões de aceitação por amostragem | Gestão de requisições de serviço; habilitação de mudanças; gestão de problemas | Definição de pronto para começar; taxa de retrabalho | Mensal |
| Porcentagem completa e exata acumulada | Proporção dos itens que passam por todas as etapas sem problemas | produto dos valores de %C/E das etapas para um fluxo e período (por exemplo 0,90 x 0,85 x 0,95); etapas fora do fluxo são excluídas | porcentagem | Derivada dos valores das etapas | Melhoria contínua | Defeitos escapados e taxa de retrabalho ao longo de um pipeline | Trimestral |
| Contagem de transferências | Número de vezes que um item passa entre equipes ou filas | contagem de mudanças de equipe ou fila responsável da requisição à entrega, por item; relate a mediana e o 85º percentil | contagem | Histórico de atribuições na ferramenta de ITSM ou no rastreador | Central de serviços; gestão de requisições de serviço | Dependências entre equipes | Trimestral |
| Razão do takt time | Se o ritmo do fluxo combina com a demanda | intervalo mediano observado entre conclusões / takt time, em que o takt time é o tempo de trabalho disponível dividido pelos itens demandados no mesmo período; uma razão acima de 1 significa que o fluxo é mais lento que a demanda | razão | Contagem de demanda da fila de entrada e eventos de conclusão | Gestão de capacidade e desempenho; gestão de nível de serviço | Vazão contra demanda; previsão | Trimestral |

O tempo de processo, o tempo de espera e os lead times de etapa são somas e razões sobre o mesmo conjunto de itens; por isso são calculados a partir de registros no nível do item e nunca somando médias de etapa medidas em amostras diferentes. O takt time se aplica melhor a trabalho repetível, como requisições padrão e mudanças rotineiras, e é um mau encaixe para trabalho em que cada item é único.

## Recomendações

### Escolha o fluxo

**1. Escolha um fluxo valioso e uma classe de item e nomeie suas fronteiras.** Bons primeiros candidatos são um tipo de requisição de alto volume, como o provisionamento de acessos ou de equipamentos, ou o caminho de uma mudança normal da aprovação até o ar. Escreva o gatilho que inicia o relógio e o evento que confirma a entrega ao cliente. Se você não consegue declarar os dois numa frase cada um, o fluxo ainda não está definido (veja o tópico 3.5, Métricas de atendimento de requisições de serviço).

**2. Comece o relógio na requisição do cliente e pare-o no uso do cliente.** Um fluxo que começa quando uma equipe aceita o trabalho e para quando a equipe o marca como concluído exclui a fila de entrada e o atraso de confirmação. Esses costumam ser as esperas mais longas. Se os dados para as fronteiras verdadeiras ainda não são capturados, relate a medida mais estreita com um rótulo honesto e planeje a instrumentação (veja o tópico 1.5, Fontes de dados e instrumentação).

### Mapeie o estado atual

**3. Percorra o fluxo com as pessoas que fazem o trabalho.** Conduza uma sessão de mapeamento com um representante de cada etapa, inclusive do lado do cliente. Desenhe os passos como realmente acontecem e depois compare com o processo documentado. As lacunas entre os dois são achados em si. O método é descrito em *Learning to See*, de Rother e Shook, e em *Value Stream Mapping*, de Martin e Osterling.

**4. Registre o tempo de processo e o tempo de espera de cada etapa a partir de itens reais.** Tome uma amostra de itens recentes, 20 ou mais se o volume permitir, e siga cada um pelo fluxo usando o histórico do rastreador e, quando necessário, uma conversa. Registre o tempo de toque e a espera antes de cada etapa. Trate a amostra como uma estimativa e diga como foi tirada. Repita o mapeamento quando o fluxo mudar o bastante para invalidá-lo.

**5. Mostre a espera como uma barra própria.** No mapa e no painel, desenhe o tempo de processo e o tempo de espera como segmentos separados para cada etapa. Uma etapa com 30 minutos de tempo de processo e quatro dias de espera não se parece em nada com uma com quatro dias de tempo de processo, embora a duração da etapa seja idêntica.

### Meça a qualidade ao longo do fluxo

**6. Meça a %C/E na transferência, definida pela etapa receptora.** A equipe receptora decide o que significa "utilizável como recebido", idealmente numa curta condição de aceitação escrita. Conte uma devolução, um pedido de informação faltante ou uma correção silenciosa como não aceitos. A correção silenciosa é o vazamento mais comum, porque o trabalho é consertado sem que ninguém registre que estava quebrado.

**7. Calcule a %C/E acumulada e compare-a com os valores das etapas.** Multiplique os valores das etapas. Uma diferença entre a cifra acumulada e a etapa de melhor aparência é o efeito composto do retrabalho, e muitas vezes defende a correção de uma transferência melhor do que qualquer medida de velocidade. Ligue-a às medidas de retrabalho e de falha de mudanças do mesmo fluxo (veja o tópico 4.4, Falhas de mudança e retrabalho).

### Use os números para decidir

**8. Melhore primeiro a maior espera e procure sua causa na interface.** Ordene as etapas por tempo de espera e depois pergunte o que o item em espera está esperando: uma decisão, uma pessoa, um lote, uma vaga agendada ou uma entrada faltante. Em seguida, pergunte se essa espera é necessária. A [teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints) sustenta que o ritmo do fluxo é definido pela sua etapa mais apertada; por isso melhorar uma etapa que não é a restrição pouco muda. As esperas por aprovação na habilitação de mudanças são um caso frequente (veja o tópico 4.3, Métricas de habilitação de mudanças).

**9. Reduza as transferências antes de otimizar etapas.** Cada transferência acrescenta uma fila, uma troca de contexto e uma chance de informação incompleta. Conte as transferências e teste se uma etapa pode ser combinada, se uma decisão pode ser delegada à equipe que faz o trabalho ou se uma requisição padrão pode ser pré-autorizada. O ITIL 4 descreve as mudanças padrão como mudanças pré-autorizadas de baixo risco, que é exatamente esse movimento aplicado ao fluxo de mudanças.

**10. Compare demanda e ritmo com o takt time, apenas para trabalho repetível.** Calcule o takt time a partir de dados reais de demanda do período e compare-o com o intervalo em que o fluxo de fato conclui itens. Um fluxo mais lento que o takt faz crescer uma fila, e a lei de Little diz aproximadamente com que rapidez. Um fluxo muito mais rápido que o takt tem folga que poderia ser redirecionada. Não use o takt time para definir metas para indivíduos.

### Mantenha a medição honesta

**11. Una dados entre ferramentas e diga o que é estimado.** O fluxo costuma atravessar a ferramenta de ITSM, o rastreador de issues e o pipeline. Una por um identificador de item, documente a regra de união e marque quais etapas vêm de eventos do sistema e quais de amostragem. Uma estimativa rotulada como estimativa é muito mais útil do que um número de aparência precisa e origem desconhecida.

**12. Reveja o mapa a cada trimestre e leia itens brutos sempre.** Os fluxos derivam conforme as equipes se reorganizam e as ferramentas mudam. Ponha o mapa e uma decisão na pauta de uma revisão permanente com todas as etapas representadas (veja o tópico 1.4, Governança e responsabilidade das métricas).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Lead time do fluxo de valor | Começar o relógio mais tarde, por exemplo na triagem em vez de na requisição; encerrar itens antes de o cliente poder usá-los; dividir uma requisição em várias pequenas | Regras de relógio fixas escritas no registro de métricas; confirmação da entrega pelo cliente; contagem de itens reabertos e de itens-filhos vinculados |
| Tempo de processo | Registrar estados ociosos ou bloqueados como ativos para que o tempo de processo suba e o fluxo pareça eficiente; ou registrar esperas como trabalho para parecer ocupado | Observação de uma amostra de itens; tempo de processo comparado com registros de tempo onde existem; definições de estado revistas com a equipe |
| Tempo de espera | Mover a espera para um estado não rastreado, como uma conversa paralela, uma planilha ou um status "pendente" que para o relógio | Relatar o uso de status de pausa e bloqueado; comparar a idade do ticket com os carimbos de etapa; amostrar itens em busca de esperas fora do sistema |
| Eficiência de processo | Encolher o lead time com tratamento expedido dos itens medidos, ou inflar o tempo de processo para elevar a razão | Mostrar o lead time e o tempo de processo ao lado da razão; relatar a proporção expedida; nunca definir uma meta para a própria razão |
| Porcentagem completa e exata (etapa) | A etapa receptora baixa a barra de aceitação para que menos itens sejam devolvidos, ou a etapa remetente empurra o trabalho com gambiarras informais | Condição de aceitação escrita; contagens de defeitos e retrabalho a jusante; amostra de itens aceitos revista por um terceiro |
| Porcentagem completa e exata acumulada | Fundir etapas para que as devoluções ocorram dentro de uma etapa e sumam da contagem de transferências; escolher uma lista de etapas favorável | Fixar a lista de etapas de antemão; relatar mudanças de etapas no registro de decisões; comparar com a taxa de retrabalho do fluxo todo |
| Contagem de transferências | Reatribuir itens a uma fila compartilhada ou a um responsável genérico para evitar mudanças de responsável contadas; esconder transferências em uma única "equipe" que abrange várias | Contar por fila e por papel; ler o histórico de atribuições de itens amostrados; acompanhar o número de reatribuições por item |
| Razão do takt time | Contar a demanda adiada ou rejeitada como não demandada; contar conclusões parciais como conclusões | Relatar a demanda, a demanda rejeitada e a idade do backlog ao lado da razão; contar conclusões apenas quando o cliente confirma |

Uma leitura saudável mostra lead time e tempo de processo plausíveis contra a amostra, um tempo de espera que é visivelmente a maior parte e vai diminuindo gradualmente, valores de %C/E com uma condição de aceitação escrita por trás e transferências que só caem quando um passo ou uma decisão reais foram removidos. Se o lead time melhora enquanto a %C/E acumulada cai, o fluxo está passando o trabalho mais rápido ao transferir o custo para jusante, que é o padrão que as barreiras de proteção existem para pegar (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Mapeamento em oficina com uma amostra | Rápido, mostra o fluxo inteiro, gera entendimento compartilhado entre equipes | Um instantâneo que envelhece depressa; viés de amostra; depende de participantes honestos |
| Medição automatizada a partir de eventos de ferramentas | Contínua, objetiva, apoia percentis e tendências | Vê apenas o que as ferramentas registram; esperas fora do sistema e correções silenciosas ficam invisíveis |
| Fronteiras de ponta a ponta do cliente | Reflete a experiência; expõe atrasos de entrada e de confirmação | Exige dados de vários sistemas e um identificador de item compartilhado |
| Comparação entre takt time e demanda | Liga o ritmo à demanda real; torna previsível o crescimento da fila | Fraca para trabalho único e não repetível; exige contagens de demanda confiáveis |
| %C/E acumulada | Mostra como o retrabalho se compõe entre transferências | Exige acordo sobre condições de aceitação; fácil de discutir definições |

Use a oficina de mapeamento para aprender a forma do fluxo e a medição automatizada para vigiá-lo. Use as medidas de fronteira de equipe como insumos e as de fronteira do cliente como veredicto. O custo da abordagem é a conversa entre equipes que ela força, que também é seu principal benefício.

## Perguntas para discutir com sua equipe

**1. Onde o relógio do cliente começa e para na nossa requisição mais comum, e o nosso relatório concorda?**
Escolha um tipo de requisição e rastreie-o num quadro branco desde o momento em que o cliente pede até o momento em que pode usar o resultado. Marque onde o nosso relatório atual começa e para de contar. O facilitador deve procurar a lacuna em cada ponta, já que as filas de entrada e os atrasos de confirmação são rotineiramente deixados de fora. Combinem se vão mudar o relatório ou rotulá-lo como uma visão parcial.

**2. Para cada etapa do nosso fluxo, quanto do tempo decorrido alguém está trabalhando no item?**
Pegue cinco itens recentes e reconstrua o histórico de cada um. Estime o tempo de toque e a espera de cada etapa e compare os totais. A maioria dos grupos se surpreende com quão pouco do tempo decorrido é trabalho. Pergunte pelo que cada longa espera está esperando e resista à primeira resposta, que costuma ser "as pessoas estão ocupadas". Registre quais esperas parecem escolhas de projeto, e não limites de capacidade.

**3. O que a próxima etapa precisa de nós, e como saberíamos que faltou?**
Peça a um representante da etapa receptora que enuncie a condição de aceitação em palavras simples. Compare-a com o que a etapa remetente acredita fornecer. Conte as vezes no último mês em que o trabalho foi devolvido, completado por outra pessoa ou consertado em silêncio. A discussão muitas vezes produz uma pequena lista de verificação que elimina uma devolução recorrente.

**4. Quais transferências existem por causa da história, e não da necessidade?**
Liste as transferências do mapa e pergunte por que cada uma existe. Algumas são reais: uma habilidade, um controle, uma separação de funções. Outras persistem porque uma fronteira de equipe foi traçada anos atrás. Escolha uma transferência para remover, delegar ou pré-autorizar e nomeie quem precisa concordar.

**5. Se melhorássemos a etapa de que todos reclamam, o cliente perceberia?**
Compare a etapa que atrai mais atenção com a etapa que retém a espera mais longa. A teoria das restrições sugere que melhorar o que não é restrição pouco muda para o cliente. Pergunte o que teria de ser verdade para que a etapa mais barulhenta fosse também a mais lenta. O facilitador deve ajudar o grupo a combinar como testar a resposta com dados.

**6. Como alguém faria este fluxo parecer melhor sem torná-lo melhor?**
Percorra com o grupo a tabela de vetores de manipulação. Para cada métrica, pergunte o que uma pessoa sob pressão poderia fazer e o que a equipe veria se ela fizesse. Combinem qual leitura da barreira de proteção será revista a cada vez e quem é o responsável. O objetivo é um hábito compartilhado de verificar, e não uma caça a culpados.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega costumam ver bem as próprias etapas e mal o fluxo. Uma visão de fluxo de valor mostra a elas quanto tempo uma mudança pronta espera por revisão, aprovação, uma vaga de release ou uma janela de implantação e quanto disso está fora do seu controle. Elas se beneficiam da %C/E em suas transferências, porque ela transforma queixas vagas sobre "requisitos ruins" ou "revisões tardias" em eventos contados. Devem desconfiar de melhorar o próprio tempo de ciclo à custa da etapa receptora (veja o tópico 2.8, Métricas DORA).

### Equipes de serviço e operações

As equipes de operações são donas de muitas das filas: a entrada da central de serviços, a aprovação de mudanças, o calendário de releases, a passagem de plantão. Ganham com mudanças padrão pré-autorizadas, condições de aceitação claras para o trabalho que chega e uma visão de quais transferências acrescentam mais espera. Também devem esperar ser a etapa receptora em uma medida de %C/E e definir como é uma passagem completa. Seus itens muitas vezes carregam relógios estritos próprios; por isso a medida do fluxo fica ao lado das medidas de nível de serviço, e não as substitui.

### Liderança e governança

Os líderes patrocinam a mudança entre equipes e decidem se um fluxo tem um responsável nomeado. Devem pedir o lead time do fluxo do ponto de vista do cliente e a maior espera, em vez de um scorecard etapa por etapa. Os órgãos de governança que aprovam trabalho são eles próprios etapas, e seu tempo de espera pertence ao mapa. Definir metas sobre a razão entre tempo de processo e lead time convida aos vetores descritos acima; por isso use-a para dirigir a investigação (veja o tópico 6.5, Realização de valor e resultados de negócio).

### Clientes e usuários

Os clientes vivenciam o lead time e o retrabalho e raramente veem as etapas. Sua contribuição mais útil é confirmar quando o resultado ficou utilizável e dizer o que tiveram de fazer para obtê-lo, como reenviar um formulário. Os relatórios voltados ao cliente devem declarar em palavras simples o início e a parada do relógio. Os clientes também se beneficiam quando o fluxo publica uma mediana honesta e um percentil alto, porque uma promessa baseada apenas na mediana decepciona uma requisição em várias.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma seguradora de médio porte entrega mudanças normais à sua plataforma de administração de apólices. Os clientes do negócio reclamam que "pequenas mudanças levam mais de um mês". Todos os números deste exemplo são ilustrativos.

O departamento mapeia o fluxo desde o momento em que um responsável do negócio envia uma solicitação de mudança até o momento em que o responsável confirma que a mudança está no ar. Uma amostra de 20 mudanças normais recentes dá a tabela de etapas abaixo, usando valores medianos ilustrativos por etapa.

| Etapa | Tempo de processo (dias) | Tempo de espera (dias) | %C/E (ilustrativa) |
| --- | --- | --- | --- |
| Entrada e triagem | 0,5 | 6 | 85 |
| Construção | 1,5 | 5 | 90 |
| Teste | 0,5 | 8 | 80 |
| Aprovação da mudança | 0,25 | 9 | 70 |
| Implantação e confirmação | 0,25 | 4 | 95 |
| Total do fluxo | 3,0 | 32 | 41 (acumulada) |

O lead time do fluxo na amostra é de cerca de 35 dias; por isso a eficiência de processo é de aproximadamente 9%. A %C/E acumulada é de cerca de 41%, o produto dos cinco valores de etapa; portanto menos da metade das mudanças passa por todas as etapas sem devolução. A etapa de aprovação da mudança parece modesta pela %C/E isolada, mas seus 9 dias de espera são a fila isolada mais longa, e 30% das mudanças chegam lá com informação de risco faltando, o que o comitê devolve.

A equipe toma duas decisões. Primeiro, classifica os dez tipos de mudança de baixo risco mais frequentes como mudanças padrão com procedimentos pré-autorizados, de modo que pulem o comitê. Segundo, o formulário de entrada ganha os campos de risco que o comitê sempre pede, e uma breve lista de verificação de aceitação é combinada com o comitê. Essas escolhas tratam da maior espera e da maior devolução composta, em vez da etapa de construção, onde a equipe havia sido instada a "ir mais rápido".

Três meses depois, a mediana do lead time da classe amostrada cai e a espera pela aprovação encolhe, enquanto a %C/E acumulada sobe. O risco de manipulação aparece no terceiro mês. Uma equipe de produto divide várias requisições em duas ou três menores, porque itens pequenos se qualificam como mudanças padrão, e o lead time por item cai bruscamente. O revisor nota que a contagem de itens-filhos vinculados subiu e que a confirmação do cliente por requisição original não melhorou. O departamento mantém o lead time, mas redefine o item como a requisição original do cliente, de modo que as divisões deixam de ajudar. O registro de decisões anota a mudança de definição e reapresenta o trimestre anterior com a mesma regra.

## Ágil, IA, automação e análise

### Ágil

Um fluxo de valor atravessa as fronteiras das equipes, que é onde a entrega contínua muitas vezes emperra. Um passo prático é mapear um fluxo com as pessoas que trabalham nele e suas partes interessadas, marcar a espera entre as etapas e escolher uma transferência para melhorar. O cuidado é que um mapa feito uma vez e arquivado fica obsoleto; por isso revisite-o conforme o trabalho muda.

### IA

A IA pode acelerar uma etapa, como a redação ou a triagem, enquanto o trabalho depois espera mais na etapa seguinte. Meça o fluxo inteiro antes e depois de uma mudança de IA, e não só a etapa que recebeu a ferramenta, e pareie o lead time de ponta a ponta com a porcentagem completa e exata em cada transferência. O cuidado é que ganhos locais da IA podem esconder um lead time total mais longo.

### Automação

Instrumente automaticamente os eventos de entrada e saída das etapas para que o fluxo seja medido a partir de carimbos reais. Meça a automação pelo tempo de processo e pelo tempo de espera que ela remove e pelo retrabalho que cria a jusante. O cuidado é que automatizar uma etapa sem consertar a transferência seguinte desloca a fila sem encurtar o fluxo.

### Análise

Mostre a eficiência de processo como tendência e divida o lead time em toque e espera por etapa. A decisão informada é qual transferência consertar primeiro. O cuidado é que as definições de etapa diferem entre equipes; por isso combine as fronteiras antes de comparar e evite classificar equipes por tempo de etapa.

## Olhar setorial

**Startup.** Um fluxo curto com poucas transferências tem pouco a mapear, e a medida mais útil é simplesmente o tempo decorrido da requisição do cliente ao uso do cliente. Desenhe o fluxo numa parede, leia os itens brutos e fique atento à primeira transferência que aparece conforme a equipe cresce. Resista a construir ferramentas antes de o fluxo se estabilizar.

**Pequena empresa.** Uma ou duas pessoas muitas vezes cobrem várias etapas; por isso as transferências são entre papéis ou ferramentas, e não entre equipes. Os relatórios do rastreador ou da central de serviços dão o lead time a baixo custo, e uma amostra de dez itens revela a espera. Peça aos fornecedores, como um provedor de serviços gerenciados, seus tempos de etapa, já que a fila do fornecedor costuma ser a espera mais longa.

**Grande empresa.** Fluxos longos com muitas equipes e portões de aprovação são onde a %C/E acumulada e a contagem de transferências mais compensam. Atribua um responsável a cada fluxo importante, mapeie-o em conjunto com todas as etapas representadas e use um identificador de item compartilhado para que as ferramentas possam ser unidas. Divisões diferentes usarão as mesmas palavras para relógios diferentes; por isso publique uma definição por medida e mantenha um registro de mudanças.

**Governo e setor público.** Aprovações legais, etapas de compras e controles de auditoria formam etapas legítimas que não podem ser removidas e muitas vezes retêm as esperas mais longas. Mapeie-as com honestidade, separe a espera obrigatória da evitável e mostre a parte obrigatória a quem define as regras. Mantenha uma trilha de auditoria dos dados e de qualquer mudança de definição (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

A motivação é que a espera costuma ser a maior parte do lead time e a mais barata de reduzir, porque a correção é muitas vezes uma decisão, uma regra ou uma transferência, e não capacidade adicional. Os clientes sentem o lead time diretamente, e a organização paga pelo retrabalho em capacidade que nunca aparece num relatório de etapa. Reduzir transferências e devoluções também reduz os modos de falha que viram incidentes mais tarde.

Os custos são modestos e sobretudo humanos: algumas horas de várias pessoas para a oficina de mapeamento e a amostra, um identificador de item compartilhado entre ferramentas (veja o tópico 1.5, Fontes de dados e instrumentação) e um pouco de tempo de analista por mês. O custo maior é a conversa entre equipes e a disposição de mudar uma regra que alguém possui.

O retorno aparece como lead times mais curtos e previsíveis, uma %C/E acumulada crescente, menos itens devolvidos e capacidade liberada do retrabalho. Não projete uma melhoria percentual a partir de estudos de caso publicados. Estime o retorno a partir do seu próprio fluxo: o volume de itens, a espera atual, o custo do atraso para o cliente da melhor forma que puder declará-lo e as horas de retrabalho que você consegue contar. O Flow Framework e a literatura lean descrevem o padrão, e nenhum fornece uma referência que se transfira para o seu fluxo (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Mapear uma etapa em vez de um fluxo.** Um mapa lindamente detalhado do trabalho de uma equipe deixa as esperas mais longas fora da página. Mapeie da requisição do cliente ao uso do cliente e acrescente detalhe apenas onde estão as esperas.
- **Fazer a média de tempos de etapa de amostras diferentes.** A soma das médias de etapa não é a média do fluxo. Calcule as medidas do fluxo a partir de registros no nível do item e relate medianas e percentis.
- **Tratar o tempo de espera como um problema de esforço.** Mandar as pessoas trabalharem mais rápido raramente encurta uma fila. Pergunte o que o item está esperando e se a espera é necessária.
- **Otimizar a eficiência de processo como meta.** Quando a razão vira objetivo, o tempo de processo é inflado ou o lead time é aparado por truques. Use-a como gatilho de investigação e pareie-a com o lead time confirmado pelo cliente.
- **Medir a %C/E sem uma condição de aceitação escrita.** Sem uma, cada devolução é uma discussão. Peça à etapa receptora que escreva a condição e a mantenha curta.
- **Deixar o retrabalho silencioso sem registro.** Se uma etapa conserta o trabalho que chega sem registrar, a %C/E fica superestimada e a etapa remetente nunca aprende. Registre toda correção como uma devolução.
- **Usar métricas de fluxo para classificar equipes ou pessoas.** Elas descrevem o sistema, e a maior espera raramente é culpa de uma equipe. Relate por etapa e por fluxo e reveja os resultados com todas as etapas presentes.
- **Mapear uma vez e nunca mais.** Os fluxos derivam. Reveja o mapa em um calendário e após qualquer reorganização ou mudança de ferramenta.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Definição do fluxo e relógios | Fluxo indefinido; cada equipe mede a própria etapa | Um fluxo mapeado por uma equipe; os relógios diferem dos de outras equipes | Início e parada escritos para cada fluxo importante, da requisição do cliente ao uso do cliente | Regras de relógio revistas, mudanças registradas, histórico reapresentado quando as definições mudam | Definições revistas entre equipes e fornecedores conforme o fluxo e a demanda mudam |
| Tempo de processo e tempo de espera | Só o tempo decorrido é conhecido | Amostrados à mão para um fluxo | Coletados de eventos de ferramentas com um modelo de estados documentado e estimativas rotuladas | Acompanhados com percentis, reduções de espera financiadas e acompanhadas | Esperas entre fornecedores e equipes geridas em conjunto, com filas compartilhadas visíveis |
| Qualidade ao longo do fluxo | Retrabalho notado mas não contado | Devoluções contadas por algumas etapas | Condições de aceitação escritas e %C/E de etapa mostrada às equipes responsáveis | %C/E acumulada acompanhada e pareada com medidas de retrabalho e de falha | Condições de aceitação co-detidas por remetente e receptor e ligadas a resultados do cliente |
| Uso na melhoria | Mapeamento feito uma vez e depois engavetado | Uma oficina ocasional leva a uma correção local | Revisão trimestral com todas as etapas presentes | Maior espera ou devolução tratada a cada trimestre com um responsável | Ideias de melhoria chegam de todas as etapas, com decisões registradas e resultados conferidos |

## Lista de verificação

- [ ] Um fluxo de valor e uma classe de item estão nomeados, com um responsável pelo fluxo.
- [ ] O início e a parada do relógio estão escritos em termos da requisição do cliente e do uso do cliente.
- [ ] O mapa do estado atual foi construído com um representante de cada etapa, inclusive do lado do cliente.
- [ ] O tempo de processo e o tempo de espera são registrados separadamente para cada etapa a partir de uma amostra de itens reais.
- [ ] Os tempos de etapa e de fluxo são relatados como medianas e um percentil alto, com o tamanho da amostra mostrado.
- [ ] Cada etapa receptora tem uma condição de aceitação escrita, e as devoluções são registradas.
- [ ] A porcentagem completa e exata acumulada é calculada a partir dos valores das etapas.
- [ ] As transferências são contadas e a maior espera tem um responsável nomeado e um experimento planejado.
- [ ] Cada métrica tem seu vetor de manipulação e sua barreira de proteção revistos com a equipe.
- [ ] O mapa e a amostra são revistos em um calendário, e as mudanças de definição são registradas.

## Prompts de IA

**Redija um roteiro de entrevista para o mapeamento do fluxo de valor.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Calcule as medidas do fluxo a partir de uma amostra.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Encontre riscos de manipulação em um painel de fluxo.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Escreva uma condição de aceitação para uma transferência.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma métrica do seu mapa de fluxo e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um tópico de métricas editado declara seus relógios, vetores de manipulação e referências cruzadas.

## Ideias-chave

- Meça o fluxo da requisição do cliente ao uso do cliente, porque as medidas de fronteira de equipe escondem as esperas mais longas.
- Divida cada etapa em tempo de processo e tempo de espera e procure a causa da maior espera na interface entre as equipes.
- A porcentagem completa e exata se compõe entre etapas; por isso o valor acumulado costuma ser menor do que qualquer relatório de etapa sugere.
- Reduza transferências e pré-autorize o trabalho rotineiro antes de empurrar as etapas para que andem mais rápido.
- Observe uma amostra de itens reais junto com os dados das ferramentas, relate percentis e rotule as estimativas.
- Pareie toda métrica do fluxo com sua barreira de proteção e use as medidas para descrever o sistema, nunca para classificar pessoas.

## Referências e leituras complementares

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Fluxo de valor](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Mapeamento do fluxo de valor](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Manufatura enxuta](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rendimento em linha](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Teoria das restrições](https://en.wikipedia.org/wiki/Theory_of_constraints).
