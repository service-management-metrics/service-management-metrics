# Métricas de automação e orquestração

**A automação só compensou quando remove trabalho que as pessoas não querem fazer sem criar novo trabalho, novas falhas ou novo risco; por isso meça o que cada automação remove, com que frequência falha, quão depressa pode ser desfeita e quem decide quando ela deve parar.**

## Visão geral e motivação

A [automação](https://en.wikipedia.org/wiki/Automation) na gestão de serviços significa deixar o software fazer o trabalho que uma pessoa fazia: provisionar uma conta, reiniciar um serviço, encaminhar um ticket, aprovar uma mudança padrão ou publicar uma atualização de status. A [orquestração](https://en.wikipedia.org/wiki/Orchestration_(computing)) coordena várias etapas automatizadas, muitas vezes entre ferramentas e equipes, em um só fluxo, como "integrar um novo funcionário" ou "recuperar este serviço". O princípio orientador do ITIL "otimizar e automatizar" é uma declaração antiga da ideia, e a entrega contínua depende dela. Práticas como a [infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code) transformam a configuração dos sistemas em arquivos versionados e testáveis; assim a automação é também uma forma de registro.

A automação desloca o risco de lento e visível para rápido e amplo. Uma pessoa que comete um erro afeta um ticket. Uma etapa automatizada com o mesmo erro pode afetar todos os tickets em um minuto. É por isso que a automação precisa das próprias medidas e por isso contagens como "número de automações" ou "horas economizadas" são fracas. Descrevem quanto foi construído e quanto foi alegado, e não se alguém ficou melhor.

Este tópico difere das medidas anteriores de autoatendimento e automação em requisições de serviço (veja o tópico 3.7, Métricas de autoatendimento e automação), que tratam do fluxo de requisições voltado ao usuário. Aqui o assunto é a automação como ativo de engenharia e de operações: sua cobertura, confiabilidade, segurança, responsabilidade e custo. Difere também das medidas de pipeline do tópico 10.7 (veja o tópico 10.7, Métricas de pipelines e mudança automatizada), que cobrem o caminho que uma mudança percorre até a produção.

Termos usados aqui. Uma **automação** é uma tarefa definida que roda sem que uma pessoa execute seus passos. Um **runbook** é um procedimento documentado para uma tarefa operacional, e a **automação de runbooks** o executa. Uma **orquestração** é um fluxo que coordena automações. **Humano no circuito** significa que uma pessoa revê ou aprova antes de uma ação ter efeito. O **trabalho repetitivo (toil)** é trabalho operacional manual repetitivo que escala com o serviço e não tem valor duradouro (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão). Uma **barreira de proteção** tem aqui dois sentidos: a medida pareada usada em todo este livro e um limite técnico sobre o que uma automação pode fazer. O texto diz qual é o caso.

## Princípios-chave

- **Meça o efeito, e não a contagem.** O número de automações diz pouco. O que elas removem e o que quebram diz muito.
- **Toda automação tem um responsável.** Uma automação sem dono é um risco que cresce com a idade.
- **Torne toda ação automatizada visível e reversível.** Registre o que rodou, sobre o quê, com que resultado, e saiba como desfazer.
- **Escolha onde um humano decide.** Combine o papel do humano com o risco da ação e teste se o papel pode ser exercido.
- **Meça a automação como um serviço.** Ela tem confiabilidade, mudança, custo e aposentadoria como qualquer outro serviço.
- **Automatize primeiro o estável e o maçante.** Automatizar algo mal compreendido crava um problema no sistema.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de sucesso das execuções de automação | Proporção das execuções de automação que terminaram e atingiram o resultado pretendido, confirmado por uma verificação após a execução | execuções com uma verificação pós-execução bem-sucedida / execuções iniciadas no período; as execuções sem verificação pós-execução são excluídas e relatadas à parte | porcentagem | Logs da plataforma de orquestração e automação | Gestão de requisições de serviço; gestão de releases | Definição de pronto para o trabalho automatizado | Mensal |
| Cobertura da automação de tarefas | Proporção das tarefas elegíveis e repetidas que são automatizadas | tarefas da lista elegível combinada que rodam automatizadas / tarefas da lista elegível; a lista elegível é revista a cada trimestre | porcentagem | Inventário de tarefas e registro de runbooks | Melhoria contínua | Backlog de candidatas à automação | Trimestral |
| Taxa de intervenção manual | Proporção das execuções de automação que precisaram de uma pessoa para intervir ou corrigir | execuções com uma etapa manual acrescentada após o início / execuções iniciadas | porcentagem | Logs da automação e vínculos com tickets | Gestão de incidentes | Defeitos escapados no trabalho automatizado | Mensal |
| Taxa de incidentes causados por automação | Incidentes atribuídos a uma ação automatizada, por 1.000 execuções | incidentes com uma causa de automação confirmada / execuções de automação x 1.000 | contagem por 1.000 execuções | Registros de incidentes ligados a identificadores de execução | Gestão de incidentes; gestão de problemas | Taxa de falha de mudanças automatizadas | Mensal |
| Tempo de rollback | Tempo para desfazer uma ação automatizada uma vez reconhecida a necessidade | mediana e 95º percentil de (momento em que o desfazer termina menos o momento em que se decidiu desfazer) | minutos | Logs da automação e linha do tempo do incidente | Habilitação de mudanças | Capacidade de rollback na definição de pronto | Trimestral |
| Tempo economizado, verificado | Horas de trabalho manual removidas, conferidas por amostragem | tarefas automatizadas x (tempo mediano da tarefa manual de uma amostra de tempo menos o tempo manual residual mediano) no período; data da amostra declarada | horas | Amostras de tempo e contagens de execuções | Melhoria contínua | Valor entregue por item de trabalho | Trimestral |
| Atualidade da responsabilidade pela automação | Proporção das automações com um responsável que confirmou a responsabilidade e revisou a automação nos últimos 12 meses | automações com responsável confirmado e revisão em 12 meses / automações no registro | porcentagem | Registro de automações | Governança; gestão de ativos e de configuração | Estatuto da equipe e responsabilidade | Trimestral |

As fórmulas contam execuções, e não tarefas, salvo indicação. "Bem-sucedida" exige uma verificação pós-execução independente, como confirmar que o serviço está saudável ou que a conta existe; uma execução que apenas termina sem erro não conta como bem-sucedida. O tempo economizado exclui o tempo gasto construindo e mantendo a automação, que é contado à parte como custo (veja o tópico 7.7, Retorno do investimento e business case).

## Recomendações

### Decida o que automatizar

**1. Parta de uma lista de tarefas repetidas, e não de ferramentas.** Classifique as tarefas repetidas por com que frequência acontecem, quanto tempo levam, quão sujeitas a erro são e quão bem compreendidas são. Automatize primeiro as estáveis e bem compreendidas e deixe as raras e as mal compreendidas para as pessoas.

**2. Corrija o processo antes de automatizá-lo.** Automatizar um processo confuso torna a confusão mais rápida. Percorra os passos com as pessoas que os fazem, remova os passos que não acrescentam nada e depois automatize.

**3. Escolha o papel do humano pelo risco.** Para ações reversíveis e de baixo risco, uma pessoa pode apenas rever um log depois. Para ações de maior risco, uma pessoa aprova antes da ação. Para as de risco mais alto, a ação pode continuar manual. Escreva a regra e teste se os aprovadores têm a informação para decidir.

### Torne segura a automação

**4. Exija um responsável e um registro.** Toda automação tem um responsável nomeado e uma entrada em um registro com seu propósito, escopo, permissões e última revisão. Quando um responsável sai, a responsabilidade se move antes da pessoa.

**5. Limite as permissões e o escopo.** Uma automação deve ter o menor acesso que faça o trabalho e um limite de quanto pode alterar em uma execução, como um número máximo de contas ou de servidores. Um limite de escopo é uma barreira de proteção técnica que limita o dano de uma execução ruim.

**6. Confira o resultado, e não o código de saída.** Acrescente uma verificação pós-execução que confirme o estado pretendido e meça o sucesso por essa verificação. Um script que termina limpo pode não ter feito nada.

**7. Registre e planeje o desfazer.** Toda execução registra o que alterou, e toda automação tem um modo testado de reverter sua mudança ou uma razão declarada de não poder. Pratique o rollback em um ambiente seguro e meça o tempo que leva.

### Meça com honestidade

**8. Verifique o tempo economizado por amostragem.** As alegações de horas economizadas costumam ser otimistas. Cronometre uma amostra da tarefa manual antes e depois, declare a data da amostra e subtraia o custo de manutenção e de falhas.

**9. Relate as falhas e as intervenções ao lado da cobertura.** Uma cifra alta de cobertura com uma taxa alta de intervenção manual significa que as pessoas estão corrigindo o que a automação quebra. Mostre ambas na mesma página.

**10. Aposente o que já não ajuda.** Uma automação cuja tarefa mudou ou desapareceu é um risco. Reveja o uso em um ritmo regular e remova as automações sem execuções ou sem responsável.

**11. Mantenha um humano capaz de pará-la.** Ofereça um modo claro de pausar depressa uma automação ou uma classe inteira de automações e meça a rapidez com que isso pode acontecer.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de sucesso das execuções de automação | Contar uma execução como bem-sucedida quando termina limpa; apagar do log as execuções falhas | Verificação pós-execução independente; comparar os logs com os registros a jusante |
| Cobertura da automação de tarefas | Encolher a lista elegível para a cobertura subir; automatizar primeiro as tarefas triviais | Rever a lista elegível com uma segunda equipe; ponderar por volume e tempo |
| Taxa de intervenção manual | Registrar as correções manuais como tickets separados para a execução parecer limpa | Ligar tickets a identificadores de execução; amostrar execuções em busca de correções ocultas |
| Taxa de incidentes causados por automação | Atribuir as falhas da automação a pessoas ou ferramentas; não ligar incidentes a execuções | Exigir um identificador de execução nos registros de incidentes; amostrar incidentes em busca de vínculos perdidos |
| Tempo de rollback | Medir só os rollbacks que foram fáceis; começar tarde o relógio | Praticar o rollback em um simulacro para as automações mais difíceis; definir o início do relógio |
| Tempo economizado, verificado | Usar tempos de tarefa otimistas; ignorar o custo de manutenção e de falhas | Amostras de tempo por alguém de fora da equipe; incluir o custo de construção e manutenção |
| Atualidade da responsabilidade pela automação | Nomear uma lista de distribuição ou um ex-funcionário como responsável | O responsável confirma por escrito; conferir se o responsável está ativo |

Uma leitura saudável é cobertura crescente com uma taxa de intervenção manual e uma taxa de incidentes estáveis ou em queda, tempo economizado verificado que combina com o que a equipe sente e um registro que permanece atual porque as automações aposentadas são removidas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Automatizar amplamente e cedo | Remove o trabalho repetitivo; trabalho mais rápido e consistente | Falhas rápidas e amplas; ônus de manutenção; dependências ocultas |
| Automatizar seletivamente com verificações humanas | Menor risco; as pessoas continuam hábeis | Mais lenta; os aprovadores podem carimbar |
| Contar automações e horas economizadas | Simples de relatar e comparar | Premia a quantidade; alegações muitas vezes não verificadas |
| Medir efeito, falhas e rollback | Mostra valor e risco reais | Mais esforço de coleta; exige ligar registros |

A conclusão pragmática é automatizar o que é estável e compreendido, medir o que se remove e o que se quebra e manter as pessoas capazes de parar a automação. Uma automação que economiza horas, mas causa um incidente grave ocasional, pode ser uma troca ruim, e só as medidas pareadas mostrarão isso.

## Perguntas para discutir com sua equipe

**1. Que automações rodamos hoje, e quem é dono de cada uma?**
Montem a lista juntos, porque as equipes costumam achar automações que ninguém se lembra de ter construído. Peçam o propósito, as permissões e a data da última revisão. Esperem scripts em máquinas individuais e tarefas agendadas com ex-funcionários como responsáveis. Em seguida, combinem quem será dono de cada uma até o fim do trimestre.

**2. Quando uma automação tornou um problema maior ou mais rápido do que uma pessoa teria tornado?**
Convidem a contar histórias sem culpa. Exemplos típicos são uma tarefa de limpeza que removeu os recursos errados ou uma remediação que reiniciou um serviço durante uma interrupção. Perguntem que limite teria contido o dano. As respostas viram os limites de escopo e as regras de aprovação.

**3. Para a nossa ação automatizada mais arriscada, quem decide, e essa pessoa poderia decidir bem?**
Olhem o que o aprovador vê no momento da aprovação. Muitas vezes o pedido de aprovação carece da informação necessária para julgar. Perguntem se o aprovador poderia dizer não e o que aconteceria se dissesse. Em seguida, melhorem o pedido ou mudem o papel.

**4. Como saberíamos que uma automação parou de funcionar em silêncio?**
A falha silenciosa é o problema mais comum e muitas vezes aparece como números planos. Peçam a verificação que perceberia. Discutam alertas sobre execuções ausentes e sobre resultados que não combinam com o esperado. Escolham uma automação e testem.

**5. Quais horas economizadas realmente gastamos em algo melhor?**
O tempo economizado no papel pode não virar capacidade. Perguntem para onde o tempo foi e quem decidiu. Sejam honestos quanto ao custo de manutenção e de falhas. Em seguida, escolham uma alegação para verificar com uma amostra.

**6. Que automação devemos aposentar, e o que seria preciso?**
Peçam evidência de uso e de valor. A aposentadoria pode parecer fracasso; por isso enquadrem-na como manutenção de rotina. Identifiquem as dependências antes de remover qualquer coisa. Combinem um período de teste e um modo de restaurá-la.

## Quatro perspectivas

### Equipes de produto e entrega

Construam a automação como parte do produto, com testes, logs, um responsável e um modo de fazer rollback. Incluam as verificações pós-execução na definição de pronto e evitem automatizar passos que a equipe ainda não entende. Mantenham as métricas no nível das automações da equipe, e não de engenheiros individuais.

### Equipes de serviço e operações

Vocês carregam o pager quando a automação falha; por isso insistam em visibilidade e em uma parada fácil. Acompanhem as intervenções manuais e os incidentes causados por automação e usem-nos para priorizar correções. Tratem o registro de automações como parte do registro de serviço.

### Liderança e governança

Peçam efeito, falhas e prontidão de rollback, e não só contagens de automações. Financiem a manutenção da automação além de sua criação e esperem que algumas automações sejam aposentadas. Definam expectativas de supervisão humana por risco e revejam a lista das ações mais arriscadas.

### Clientes e usuários

Vocês não devem notar a automação quando ela funciona e devem ter uma pessoa a quem recorrer quando não funciona. Perguntem como alcançar uma pessoa e digam quando uma ação automatizada estava errada. O feedback de vocês faz parte da verificação de que a automação ajudou.

## Na prática: um exemplo de gestão de serviços

A equipe de operações de uma varejista on-line de porte médio automatiza três tarefas: reiniciar um servidor web que está falhando, redefinir senhas do atendimento ao cliente e limpar o armazenamento de nuvem não usado. Os números deste exemplo são ilustrativos. Após um trimestre, o painel mostra 3 automações, 2.400 execuções e "cerca de 180 horas economizadas". A liderança está satisfeita e pede mais.

A equipe aplica as medidas. A taxa de sucesso das execuções de automação parece de 98% pelo código de saída. Com uma verificação pós-execução, cai para 91%: a redefinição de senha relata sucesso, mas em 9% das execuções o usuário não consegue entrar. A taxa de intervenção manual dessa automação é de 11%. A automação de reinício causou dois incidentes, um quando reiniciou servidores durante uma troca de banco de dados, com um tempo de rollback de cerca de 40 minutos porque ninguém o havia praticado.

A amostra de tempo mostra que a redefinição manual de senha levava cerca de quatro minutos, e não os dez que a estimativa original usava, e que tratar as redefinições falhas leva quase o mesmo que a tarefa original. O tempo economizado verificado é mais próximo de 60 horas. A limpeza do armazenamento tem um responsável que saiu da empresa na primavera.

A equipe decide acrescentar uma verificação pós-execução à redefinição de senha, um limite de escopo e uma regra de pausa à automação de reinício e um novo responsável à limpeza. Um gerente propõe contar "automações construídas" como meta da equipe. A equipe recusa, porque isso premiaria construir mais do mesmo. A dificuldade que resta é que a verificação pós-execução das senhas precisa de uma conta de teste, e o simulacro de rollback da automação de reinício está agendado para o próximo trimestre.

## Ágil, IA, automação e análise

### Ágil

Trate a automação como um produto melhorado continuamente com as pessoas que a usam e dependem dela. Uma boa prática é uma breve revisão regular do backlog de automação, das falhas e das intervenções com as partes interessadas. O cuidado é que as pequenas mudanças frequentes na automação precisam do mesmo teste que as outras mudanças, ou as falhas chegam mais depressa.

### IA

A IA pode redigir runbooks, escrever scripts e decidir que ação tomar, e a IA agêntica pode agir sobre sistemas. Trate qualquer IA que possa agir como uma automação, com um responsável, permissões, limites de escopo, uma regra de aprovação e um rollback. Pareie sua taxa de sucesso com a taxa de ações erradas e a parcela que uma pessoa teve de reverter (veja o tópico 10.3, Métricas de agentes de IA e chatbots). O cuidado é que um script escrito por IA parece autoritativo; por isso teste-o como testaria qualquer código.

### Automação

Este é o assunto do tópico; assim a prática é medir a própria plataforma de automação: sua disponibilidade, as falhas de execução e os tempos de fila, já que muitos serviços dependem dela. Colete os dados de execução automaticamente com identificadores de execução que se liguem a tickets e incidentes. O cuidado é que a plataforma de automação vira um ponto único de falha; por isso tenha uma alternativa manual para as tarefas críticas.

### Análise

Ligue as execuções aos resultados: verificações pós-execução bem-sucedidas, tickets e incidentes. A decisão informada é qual automação corrigir, estender ou aposentar. O cuidado é que a atribuição depende de identificadores consistentes; por isso audite a taxa de vínculos e mostre o número de execuções por trás de cada taxa (veja o tópico 10.8, Métricas de análise e qualidade de dados).

## Olhar setorial

**Startup.** As pequenas equipes automatizam depressa e com poucos controles. Mantenha uma lista curta de automações com responsáveis, ponha uma verificação pós-execução em tudo que toca clientes e evite construir uma plataforma de orquestração antes de haver necessidade.

**Pequena empresa.** A automação costuma ser alguns trabalhos agendados e um serviço gerenciado. Pergunte ao seu fornecedor que automação roda em seu nome e qual é o rollback. Mantenha uma lista e confira que alguém é dono de cada item.

**Grande empresa.** Muitas automações em muitas equipes criam dependências e duplicação. Mantenha um registro central, logs e identificadores de execução padronizados e um caminho de revisão para ações de alto risco. Compartilhe as automações entre as equipes em vez de reconstruí-las.

**Governo e setor público.** As necessidades de responsabilização e de auditoria significam que toda ação automatizada deve ser rastreável até uma decisão e um responsável. Guarde logs e aprovações como evidência e confira as regras de compras e jurídicas para decisões automatizadas que afetam cidadãos (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são construir e testar a automação, operar a plataforma, manter a automação à medida que os sistemas mudam e o custo das falhas. Coletar as medidas custa pouco se as execuções são registradas com identificadores. O custo maior é a disciplina de responsáveis, revisões e simulacros de rollback.

O retorno é a remoção do trabalho repetitivo, trabalho mais rápido e consistente e menos erros manuais. São reais, mas fáceis de exagerar; por isso verifique com amostras. O lado do risco são os incidentes causados por automação e o custo de uma automação que ninguém mantém. Um business case justo compara o tempo economizado verificado, mais os erros evitados, com o custo total incluindo manutenção e incidentes e declara as premissas como faixas (veja o tópico 7.7, Retorno do investimento e business case). Nenhuma cifra de referência é dada aqui, porque variam muito por contexto. Meça suas próprias linhas de base antes de começar.

## Antipadrões e armadilhas

- **Contar automações construídas.** Premia a quantidade. Relate o efeito, as falhas e o rollback.
- **Sucesso pelo código de saída.** Uma saída limpa prova pouco. Confira o resultado pretendido.
- **Automações sem dono.** Falham em silêncio à medida que os sistemas mudam. Mantenha um registro e confirme os responsáveis.
- **Automatizar um processo ruim.** A falha se move mais depressa. Corrija primeiro o processo.
- **Nenhum desfazer.** Uma ação errada e rápida sem reversão é o pior caso. Planeje e pratique o rollback.
- **Alegar horas economizadas sem uma amostra.** Verifique com amostras de tempo e subtraia a manutenção.
- **Aprovação como teatro.** Um aprovador sem a informação para decidir acrescenta atraso e nenhuma segurança. Redesenhe o pedido.
- **Automação como ponto único de falha.** Mantenha um caminho manual para as tarefas críticas.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Responsabilidade e registro | Scripts conhecidos só por seus autores | Principais automações listadas | Registro com responsável, escopo e data de revisão | Revisões e aposentadorias em um ritmo | Catálogo compartilhado e padrões comuns entre equipes |
| Segurança e rollback | Sem desfazer; verificações por código de saída | Algumas verificações pós-execução e logs | Verificações pós-execução, limites de escopo e rollback testado | Simulacros de rollback; incidentes ligados a execuções | Padrões de segurança embutidos na plataforma |
| Evidência de valor | Contagens e estimativas | Tempo economizado estimado | Tempo economizado amostrado e verificado | Efeito, falhas e custo revistos juntos | Portfólio de automação gerido por valor e risco |

## Lista de verificação

- [ ] Toda automação tem um responsável que confirmou a responsabilidade.
- [ ] Um registro lista cada automação com propósito, escopo e permissões.
- [ ] Cada automação tem uma verificação pós-execução que confirma o resultado pretendido.
- [ ] As execuções são registradas com identificadores que se ligam a tickets e incidentes.
- [ ] Cada automação tem um limite de escopo e um modo testado de desfazê-la ou pausá-la.
- [ ] O papel do humano é definido para cada ação automatizada, por risco.
- [ ] O tempo economizado é verificado por uma amostra datada.
- [ ] As intervenções manuais e os incidentes causados por automação são relatados com a cobertura.
- [ ] As automações sem uso ou sem dono são revistas e aposentadas.
- [ ] Cada métrica tem um vetor de manipulação e uma barreira de proteção mostrados ao lado.

## Prompts de IA

**Construa um registro de automações a partir de material que você colar.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Projete uma verificação pós-execução e um rollback para uma automação.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Revise o risco de manipulação de um painel de automação.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Planeje a verificação do tempo economizado.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## Skills de IA

- [Runbook](../../../../skills/runbook/SKILL.md): use para documentar uma tarefa antes de automatizá-la.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): use para analisar um incidente causado por uma ação automatizada.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- As contagens de automação e as horas economizadas descrevem esforço e alegações; por isso meça efeito, falhas e rollback.
- Toda automação precisa de um responsável, uma entrada no registro, uma verificação pós-execução, um limite de escopo e um modo de desfazer ou pausar.
- Escolha onde um humano decide pelo risco e teste se o humano consegue decidir bem.
- Verifique o tempo economizado com amostras datadas e subtraia o custo de manutenção e de falhas.
- Aposente as automações sem dono, sem uso ou já desnecessárias.

## Referências e leituras complementares

1. Wikipedia, [Automação](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orquestração (computação)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infraestrutura como código](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
