# Métricas de pipelines e mudança automatizada

**Um pipeline de entrega é ao mesmo tempo o caminho pelo qual as mudanças chegam aos usuários e a fonte da evidência de que são seguras; por isso meça sua velocidade, sua confiabilidade, quanto da aprovação de mudanças ele trata e se a evidência que produz convenceria um auditor, e leia tudo isso como medidas de um sistema, nunca das pessoas que o usam.**

## Visão geral e motivação

Um pipeline de [integração contínua](https://en.wikipedia.org/wiki/Continuous_integration) e de [entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery) leva uma mudança do trabalho de um desenvolvedor até um serviço em execução por meio de build, testes, verificações de segurança e implantação automatizados. Quando um pipeline é confiável, ele pode também tomar as decisões que um comitê consultivo de mudanças tomava para as mudanças rotineiras. O ITIL chama a prática de gerenciar a mudança de "habilitação de mudanças", e seu objetivo é deixar que mudanças benéficas aconteçam com segurança e rapidez. Um pipeline que roda verificações, registra a evidência e aprova automaticamente as mudanças de baixo risco é um modo de cumprir esse objetivo.

O pipeline é, portanto, duas coisas ao mesmo tempo. É um sistema de produção, com a própria disponibilidade, velocidade e falhas, e é um controle, com evidência sobre o que foi testado, quem revisou e o que foi aprovado. Ambos precisam de medição. Um pipeline rápido que pula verificações é um risco. Um pipeline lento e instável empurra as pessoas a contorná-lo, e as mudanças contornadas escapam de todo controle que o pipeline devia oferecer.

Este tópico complementa as medidas de mudança da Parte 4 (veja o tópico 4.3, Métricas de habilitação de mudanças, e o tópico 4.4, Falhas de mudança e retrabalho) e as medidas de release (veja o tópico 4.5, Métricas de releases e implantação) focando no pipeline como um sistema. Complementa as medidas DORA (veja o tópico 2.8, Métricas DORA) olhando o que acontece dentro do pipeline. Relaciona-se também com as medidas gerais de automação do tópico 10.6 (veja o tópico 10.6, Métricas de automação e orquestração).

Termos usados aqui. Uma **execução do pipeline** é uma execução do pipeline para uma mudança. Um **estágio** é uma etapa do pipeline, como build ou teste. Um **teste instável (flaky)** é um teste que às vezes passa e às vezes falha sobre o mesmo código. Um **contorno (bypass)** é uma mudança que chega à produção sem passar pelo pipeline, por exemplo por uma implantação manual de emergência. **Política como código** significa escrever regras, como "nenhuma implantação sem uma varredura de segurança aprovada", como software que o pipeline impõe. **Evidência** é a prova registrada do que uma mudança atravessou. Uma **mudança padrão** no ITIL é um tipo de mudança de baixo risco, bem compreendido e pré-aprovado.

## Princípios-chave

- **O pipeline é um serviço.** Meça sua confiabilidade, velocidade e falhas como faria com qualquer sistema de produção e dê-lhe um responsável.
- **Meça o contorno.** O número de mudanças que evitam o pipeline mostra quanto se pode confiar nele.
- **Automatize a aprovação por risco, com evidência.** Pré-aprove o que é bem compreendido e mantenha a revisão humana para o que não é.
- **A evidência é um produto.** O que o pipeline registra deve responder às perguntas de um auditor sem correria.
- **Rápido e seguro são medidos juntos.** As medidas de velocidade são pareadas com falha e retrabalho.
- **Descreva sistemas, e não pessoas.** Os dados do pipeline sobre quem enviou uma mudança não são uma classificação de desempenho.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de sucesso do pipeline | Proporção das execuções do pipeline que terminam sem uma falha causada pelo pipeline ou por seu ambiente | execuções que passam ou falham apenas por um defeito genuíno de código / execuções iniciadas; as execuções canceladas pelo usuário são excluídas e relatadas | porcentagem | Logs da plataforma do pipeline | Gestão de releases; habilitação de mudanças | Saúde da integração contínua | Semanal |
| Duração do pipeline | Tempo para uma mudança atravessar o pipeline | mediana e 85º percentil de (momento em que o último estágio termina menos o momento em que a execução começa) para as execuções que chegam à implantação | minutos | Logs da plataforma do pipeline | Gestão de releases | Ciclos de feedback curtos | Semanal |
| Taxa de testes instáveis | Proporção das falhas de teste que passam na reexecução sem mudança de código | falhas que passam na reexecução / falhas de teste | porcentagem | Resultados de testes e logs de reexecução | Gestão de releases | Definição de pronto; prática de teste | Mensal |
| Parcela de aprovação automatizada | Proporção das mudanças aprovadas por política do pipeline sem uma etapa humana de aprovação | mudanças aprovadas apenas por política / mudanças implantadas | porcentagem | Registros do pipeline e das mudanças | Habilitação de mudanças | Desenvolvimento baseado em tronco com verificações automatizadas | Mensal |
| Taxa de contorno | Proporção das mudanças em produção que não passaram pelo pipeline | mudanças em produção feitas fora do pipeline, achadas comparando registros de implantação com registros do pipeline / todas as mudanças em produção | porcentagem | Registros de implantação, auditoria de configuração e logs do pipeline | Habilitação de mudanças; gestão de configuração | Acordos de trabalho | Mensal |
| Completude da evidência | Proporção das mudanças implantadas pelo pipeline cujo registro mostra a evidência exigida | mudanças com todos os itens de evidência exigidos (testes, revisão, varredura, aprovação) ligados / mudanças implantadas | porcentagem | Registros do pipeline e das mudanças | Habilitação de mudanças; governança | Definição de pronto | Mensal |
| Taxa de falha em portões de política | Proporção das execuções paradas por uma verificação de política, dividida em violação genuína e erro de política | execuções paradas por um portão de política / execuções iniciadas; motivos classificados por amostragem | porcentagem | Logs do pipeline e registros dos portões | Habilitação de mudanças; gestão de riscos | Critérios de aceitação | Mensal |

A taxa de sucesso do pipeline exclui as execuções canceladas por uma pessoa, que são relatadas à parte, e conta como falha do pipeline uma falha causada por um teste instável ou por uma falha de ambiente. A taxa de contorno precisa de um registro independente do que está rodando em produção; por isso não pode ser calculada só a partir do pipeline.

## Recomendações

### Trate o pipeline como um serviço

**1. Dê ao pipeline um responsável e objetivos.** Uma equipe nomeada responde pela confiabilidade e pela velocidade do pipeline, com objetivos de nível de serviço, como a proporção de execuções que terminam em um tempo declarado. Sem um responsável, a instabilidade cresce até as pessoas deixarem de confiar nele.

**2. Meça a duração como uma distribuição.** Uma mediana esconde as execuções lentas que as pessoas esperam. Mostre a mediana e o 85º percentil e divida a duração em estágios para achar a espera mais longa, que muitas vezes é uma fila por um executor compartilhado ou uma aprovação manual.

**3. Acompanhe e corrija os testes instáveis.** Um teste instável ensina as pessoas a reexecutar até ficar verde. Conte as falhas instáveis, atribua cada uma a um responsável e corrija-a ou ponha-a em quarentena com uma data. Um pipeline que as pessoas reexecutam por hábito não está produzindo evidência.

### Automatize a aprovação com cuidado

**4. Classifique as mudanças por risco.** Combine com os responsáveis pelas mudanças quais tipos de mudança são padrão e podem ser aprovados por política e quais precisam de uma pessoa. Reveja a classificação regularmente com os dados de falha (veja o tópico 4.4, Falhas de mudança e retrabalho).

**5. Escreva a política como código e teste-a.** As regras impostas pelo pipeline são código e precisam de testes e responsáveis como qualquer código. Registre qual versão da política se aplicou a cada execução.

**6. Mantenha um caminho humano para o incomum.** As mudanças de emergência e de alto risco precisam de uma pessoa que possa decidir com a evidência. Teste se o caminho funciona e meça quanto tempo leva.

### Produza evidência útil

**7. Decida de que evidência você precisa.** Trabalhe de trás para a frente a partir das perguntas que um auditor ou um revisor de incidentes faz: o que foi testado, quem revisou, o que foi varrido, quem aprovou e o que foi implantado. Faça o pipeline registrar exatamente isso e ligue-o à mudança.

**8. Meça a completude por amostragem.** A completude da evidência pela contagem do próprio pipeline pode ser alta enquanto o conteúdo está vazio. Confira uma amostra de registros para confirmar que a evidência é real e combina com o que rodou.

**9. Mantenha a evidência à prova de adulteração.** Guarde os registros do pipeline onde as pessoas que implantam não possam editá-los e mantenha-os pelo período de retenção que suas regras exigem. Confira as exigências de retenção com seu próprio assessor jurídico.

### Observe o contorno e a deriva

**10. Compare a produção com o pipeline.** Reconcilie o que está rodando em produção com o que o pipeline implantou. As diferenças são contornos ou deriva, e cada uma merece um breve olhar, sem culpa, sobre por que o pipeline foi evitado.

**11. Faça do pipeline o caminho mais fácil.** As pessoas contornam pipelines lentos e instáveis. Se o contorno sobe, olhe primeiro a velocidade e a confiabilidade e as necessidades de emergência que o pipeline não atende.

**12. Reveja os portões quanto ao valor.** Um portão que nunca barra um defeito genuíno e atrasa toda execução é candidato a remoção ou redesenho. Um portão que para muitas execuções por erros de política precisa de uma correção de política.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de sucesso do pipeline | Reclassificar falhas de infraestrutura como canceladas; reexecutar até ficar verde e contar só a última execução | Contar todas as tentativas; relatar as reexecuções por mudança |
| Duração do pipeline | Mover estágios lentos para fora da janela medida; pular estágios | Medir de ponta a ponta do commit à implantação; comparar os estágios rodados com os estágios exigidos |
| Taxa de testes instáveis | Apagar ou silenciar testes instáveis; marcar falhas como conhecidas | Tendência da contagem e da cobertura de testes; rever os testes em quarentena com uma data |
| Parcela de aprovação automatizada | Ampliar a classe "padrão" para incluir mudanças arriscadas | Taxa de falha das mudanças aprovadas automaticamente; amostrar as mudanças aprovadas |
| Taxa de contorno | Registrar implantações manuais de emergência como execuções do pipeline; não reconciliar com a produção | Reconciliar o estado da produção com os registros do pipeline; amostrar implantações |
| Completude da evidência | Anexar evidência vazia ou irrelevante; ligar um relatório genérico | Amostrar o conteúdo da evidência; conferir se combina com a mudança |
| Taxa de falha em portões de política | Afrouxar políticas para reduzir falhas; classificar violações genuínas como erros de política | Amostrar as execuções paradas; taxa de defeitos escapados e achados de auditoria |

Uma leitura saudável é um pipeline rápido e estável o bastante para que as pessoas o usem para tudo, uma taxa de contorno próxima de zero com cada exceção compreendida, uma parcela crescente de aprovações automatizadas com uma taxa de falha de mudanças estável e evidência que se sustenta quando amostrada.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Verificações pesadas no pipeline | Pega defeitos cedo; evidência forte | Execuções lentas; mais instabilidade; pressão para contornar |
| Pipeline leve | Feedback rápido | Evidência mais fraca; mais defeitos chegam à produção |
| Aprovação automatizada de mudanças padrão | Remove a espera; decisões consistentes | Risco de ampliar a classe; os erros de política escalam |
| Aprovação humana de todas as mudanças | Familiar; responsabilização visível | Espera; as aprovações podem virar formalidades |

A conclusão pragmática é manter o pipeline rápido e confiável, aprovar por política somente o que é bem compreendido e medir o contorno. Verificações pesadas que as pessoas evitam não protegem nada.

## Perguntas para discutir com sua equipe

**1. Que fração das nossas mudanças em produção passa pelo pipeline, e como sabemos?**
Peçam um modo de comparar o estado da produção com os registros do pipeline. As equipes muitas vezes acham correções de emergência, mudanças de configuração e mudanças de dados que contornam o pipeline. Esperem respostas defensivas; por isso tratem cada contorno como informação. Em seguida, perguntem o que teria feito do pipeline a rota mais fácil.

**2. Quais dos nossos testes reexecutamos até passarem, e quem é dono deles?**
Os hábitos de reexecução mostram onde a confiança se corroeu. Façam uma lista e atribuam responsáveis. Discutam se devem corrigir ou remover cada um. A conversa muitas vezes mostra que poucos testes causam a maior parte do ruído.

**3. Que mudanças aprovamos automaticamente hoje, e quais deveríamos?**
Listem os tipos de mudança e o histórico de falhas de cada um. Decidam quais têm baixo risco e bons testes. Perguntem o que os faria parar de aprovar automaticamente um tipo. Em seguida, combinem uma data de revisão da classificação.

**4. Se um auditor perguntasse sobre a implantação de terça-feira passada, o que poderíamos mostrar?**
Percorram uma mudança real e puxem sua evidência. Percebam lacunas e etapas manuais. Perguntem se a evidência foi registrada na hora ou reconstruída depois. Em seguida, escolham uma lacuna a fechar.

**5. Onde o nosso pipeline gasta seu tempo, e quem espera?**
Olhem a divisão por estágio. A espera mais longa muitas vezes é uma fila ou uma aprovação manual. Perguntem se as pessoas que esperam poderiam fazer outra coisa e quanto custa a espera em feedback atrasado. Escolham um atraso a remover.

**6. Que portão nunca barrou nada de útil?**
Olhem os motivos de parada dos portões no último trimestre. Um portão com apenas erros de política precisa ser corrigido, e um portão que nunca para nada pode ser redundante. Perguntem se removê-lo elevaria o risco. Combinem um teste.

## Quatro perspectivas

### Equipes de produto e entrega

Vocês dependem do pipeline todos os dias. Mantenham os testes confiáveis, as mudanças pequenas e tratem um teste instável como um defeito do produto. Usem os dados do pipeline para achar seus próprios atrasos e mantenham-nos longe das conversas sobre desempenho individual.

### Equipes de serviço e operações

Vocês herdam o que o pipeline libera. Peçam a evidência de que precisam para um incidente, como o que mudou e quando, e um rollback rápido. Acompanhem os contornos e a deriva e levem-nos à equipe como uma conversa sobre o porquê.

### Liderança e governança

Financiem o pipeline como um serviço de produção, com um responsável, capacidade e tempo para corrigir a instabilidade. Peçam a taxa de contorno, a completude da evidência por amostragem e a taxa de falha de mudanças das aprovações automatizadas. Resistam à pressão de contar implantações como medida de sucesso.

### Clientes e usuários

Vocês ganham quando as mudanças chegam com frequência e segurança e sofrem quando uma mudança quebra algo. Perguntem como as mudanças são testadas e com que rapidez uma mudança ruim é desfeita. Os relatos de vocês sobre problemas depois de um release fazem parte do feedback que o pipeline não consegue fornecer.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um hospital regional opera um pipeline para sua aplicação de agendamento clínico. Os números deste exemplo são ilustrativos. Um comitê consultivo de mudanças se reúne semanalmente, e as mudanças rotineiras esperam em média quatro dias pela aprovação. A equipe propõe aprovar as mudanças padrão pelo pipeline.

Antes de começar, mede. A taxa de sucesso do pipeline é de 82%, e uma amostra de falhas mostra que cerca de um terço são testes instáveis. A duração no 85º percentil é de 47 minutos, com uma fila de 20 minutos por um executor de build compartilhado. Comparar os registros de implantação com os registros do pipeline mostra que cerca de 12% das mudanças em produção contornaram o pipeline, sobretudo edições de configuração e correções urgentes.

A equipe corrige os cinco testes mais instáveis, acrescenta um executor de build e cria um caminho para mudanças de configuração pelo pipeline. Após três meses, o contorno cai para 3%. Em seguida define uma classe de mudança padrão de mudanças pequenas, testadas e reversíveis na aplicação de agendamento, com verificações de política para testes, uma varredura de segurança e revisão por pares. A parcela de aprovação automatizada chega a cerca de 40%, e o lead time de aprovação dessas mudanças cai de dias para minutos.

Surge um risco de manipulação. Um gerente pede para elevar a parcela de aprovação automatizada acrescentando mudanças de esquema de banco de dados à classe padrão. A equipe confere a taxa de falha de mudanças das alterações de esquema, que é maior que a das outras mudanças, e as mantém com um revisor humano. A completude da evidência pela contagem do pipeline é de 98%, mas uma amostra de 20 registros mostra que quatro tinham um relatório de teste de outro build anexado. A equipe corrige a regra de vínculo. O que continua difícil: o contorno para correções de emergência ainda precisa de um registro posterior, e a revisão de risco clínico das mudanças que afetam a segurança do paciente continua com pessoas.

## Ágil, IA, automação e análise

### Ágil

Mudanças pequenas e frequentes por um pipeline confiável são o núcleo da entrega contínua, e o próprio backlog do pipeline merece a mesma revisão regular com as partes interessadas que o produto. Uma boa prática é rever os testes instáveis e os contornos em uma conversa regular de melhoria. O cuidado é que celebrar só a frequência de implantação premia dividir mudanças.

### IA

A IA pode escrever código e testes, revisar mudanças e avaliar o risco de mudanças dentro do pipeline. Marque nos dados as mudanças assistidas por IA e compare sua falha e seu retrabalho com as demais mudanças (veja o tópico 10.2, Medir o trabalho assistido por IA). Se um portão de IA decide ou recomenda, meça suas falsas aprovações e falsas paradas por amostragem e mantenha um humano responsável pelas mudanças de alto risco. O cuidado é que testes gerados por IA podem elevar os números de cobertura sem testar o comportamento que importa.

### Automação

O pipeline é a automação; assim a prática é tratá-lo como um serviço de produção, com logs, um responsável e uma alternativa manual para emergências. Automatize a coleta de evidências e a reconciliação da produção com os registros do pipeline. O cuidado é que as aprovações automatizadas multiplicam o efeito de um erro de política; por isso teste as políticas e mantenha um controle de pausa.

### Análise

Use os eventos do pipeline para mostrar onde o tempo vai e onde as falhas se agrupam e ligue as execuções a incidentes e retrabalho. A decisão informada é onde investir em velocidade, confiabilidade ou testes. O cuidado é que os dados do pipeline não mostram a qualidade dos testes; por isso combine-os com defeitos escapados e mostre o número de execuções por trás de cada taxa (veja o tópico 10.8, Métricas de análise e qualidade de dados).

## Olhar setorial

**Startup.** Um pipeline simples com testes rápidos e uma implantação automática em produção pode bastar. Meça a duração e o contorno e registre no repositório a evidência de testes e revisão.

**Pequena empresa.** O pipeline pode ser um serviço hospedado ou de um fornecedor. Pergunte o que ele registra e onde e mantenha um modo de reconstruir o que foi implantado. Evite construir controles que você não manterá.

**Grande empresa.** Muitos pipelines entre equipes precisam de formatos comuns de evidência e de política compartilhada. Mantenha uma visão central do contorno e da completude da evidência, com as correções a cargo das equipes. Evite forçar uma só ferramenta onde as equipes têm necessidades diferentes.

**Governo e setor público.** A separação de funções, as trilhas de auditoria e as regras de retenção moldam o pipeline. Projete a evidência para a auditoria e confira as exigências legais e de compras, inclusive para decisões automatizadas (veja o tópico 8.3, Métricas de conformidade e auditoria, e o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são a plataforma do pipeline e os executores, o trabalho de escrever e manter testes e política, o tempo para corrigir a instabilidade e o custo de guardar a evidência. As medidas em si custam pouco quando os registros do pipeline e das mudanças estão ligados.

O retorno é esperas mais curtas por aprovação, menos etapas manuais, detecção mais cedo de defeitos e evidência pronta quando necessária. Isso aparece como entrega mais rápida e menos esforço na hora da auditoria, mas é fácil de exagerar. Meça suas próprias linhas de base, como o lead time de aprovação e o esforço para montar a evidência de auditoria, antes e depois, e declare as premissas como faixas (veja o tópico 7.7, Retorno do investimento e business case). O lado do risco é o custo das falhas que escapam do pipeline e de uma interrupção do pipeline que bloqueia toda mudança.

## Antipadrões e armadilhas

- **Contar implantações como sucesso.** Premia dividir mudanças. Pareie com falha e retrabalho.
- **Reexecutar até ficar verde.** Esconde testes instáveis e evidência fraca. Conte as instabilidades e corrija-as.
- **Ignorar o contorno.** As mudanças que evitam o pipeline são as que ele não consegue proteger. Reconcilie a produção com os registros do pipeline.
- **Ampliar a classe padrão para elevar a automação.** A parcela sobe e a taxa de falha a acompanha. Reveja a classe com os dados de falha.
- **Evidência que existe, mas não diz nada.** Amostre o conteúdo, e não só a presença.
- **Um pipeline sem responsável.** Decai. Nomeie uma equipe e dê-lhe tempo.
- **Erros de política tratados como defeitos de código.** As pessoas aprendem a ignorar os portões. Classifique as paradas e corrija a política.
- **Nenhum caminho manual para emergências.** As pessoas contornam. Ofereça um caminho rápido e auditado.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Confiabilidade do pipeline | Builds ad hoc; falhas frequentes sem explicação | O pipeline existe; sucesso acompanhado | Responsável, objetivos e tratamento de testes instáveis | Duração e falhas revistas por estágio | Os pipelines compartilham padrões e capacidade entre equipes |
| Aprovação e política | Aprovação manual de todas as mudanças | Algumas mudanças padrão definidas | Política como código para mudanças padrão, com testes | Classes de aprovação revistas com dados de falha | A aprovação baseada em risco se adapta automaticamente dentro de limites combinados |
| Evidência e contorno | Evidência reconstruída depois do fato | Alguma evidência registrada | Evidência exigida registrada e ligada | Contorno reconciliado e completude amostrada | Evidência e reconciliação totalmente automatizadas e auditadas |

## Lista de verificação

- [ ] O pipeline tem um responsável nomeado e objetivos de confiabilidade e velocidade.
- [ ] A taxa de sucesso do pipeline e os percentis de duração são relatados por estágio.
- [ ] Os testes instáveis são contados, e cada um tem um responsável e uma data de correção.
- [ ] As classes de mudança padrão são definidas com critérios de risco e revistas com dados de falha.
- [ ] As políticas são código, testadas e versionadas, e a versão é registrada por execução.
- [ ] O estado da produção é reconciliado com os registros do pipeline para achar contornos.
- [ ] A evidência exigida é definida e registrada para cada mudança implantada.
- [ ] A completude da evidência é conferida por amostragem do conteúdo.
- [ ] Existe um caminho de emergência auditado, e ele é testado.
- [ ] Cada métrica tem um vetor de manipulação e uma barreira de proteção mostrados ao lado.

## Prompts de IA

**Classifique as mudanças por risco para aprovação automatizada.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Defina a evidência que um pipeline deve registrar.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Analise os dados de testes instáveis.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Revise o risco de manipulação do painel do pipeline.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Change request](../../../../skills/change-request/SKILL.md): use para definir o que um registro de mudança e sua evidência devem conter.
- [Release notes](../../../../skills/release-notes/SKILL.md): use para transformar a saída do pipeline em notas para usuários e operações.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- Um pipeline é ao mesmo tempo um serviço de produção e um controle; por isso meça sua confiabilidade, sua velocidade e a evidência que produz.
- Meça o contorno reconciliando a produção com os registros do pipeline e faça do pipeline o caminho mais fácil.
- Aprove automaticamente apenas mudanças bem compreendidas, com política testada e um caminho humano para o resto.
- Conte os testes instáveis e corrija-os, porque reexecutar até ficar verde destrói a confiança e a evidência.
- Amostre o conteúdo da evidência, porque as contagens de completude sozinhas podem ser satisfeitas com registros vazios.

## Referências e leituras complementares

1. Wikipedia, [Integração contínua](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Entrega contínua](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Implantação de software](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Automação de testes](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
