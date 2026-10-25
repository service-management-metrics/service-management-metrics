# Métricas de análise e qualidade de dados

**Todo número deste livro só é tão confiável quanto os dados e a análise por trás dele; por isso meça a qualidade dos dados, a solidez da análise e o uso do resultado em uma decisão, e diga sempre o que um número não consegue mostrar.**

## Visão geral e motivação

A [análise de dados (analytics)](https://en.wikipedia.org/wiki/Analytics) é o uso de dados e estatística para responder a perguntas e informar decisões. Na gestão de serviços, vai de uma simples contagem semanal de tickets a modelos que preveem quais mudanças vão falhar. A análise é a quarta lente deste livro, ao lado da prática ágil, da IA e da automação, e é também aquilo de que as outras três lentes dependem. Um painel construído sobre uma má [qualidade de dados](https://en.wikipedia.org/wiki/Data_quality) dá respostas confiantes às perguntas erradas.

A qualidade de dados é um conjunto de propriedades: se os dados são completos, exatos, consistentes, oportunos, únicos e válidos. Os tópicos anteriores trataram de onde vêm os dados de serviço e de como lê-los (veja o tópico 1.5, Fontes de dados e instrumentação, e o tópico 1.6, Letramento estatístico para métricas de serviço). Este tópico transforma essas ideias em medidas que uma equipe pode acompanhar sobre os próprios dados e a própria análise, do modo como a Parte 4 mede a mudança. Cobre também a análise como prática: as perguntas feitas, os métodos usados, quem os confere e se o resultado mudou uma decisão.

A análise é atraente porque escala. Um analista pode atender muitas equipes, e um modelo pode pontuar todo ticket. A mesma escala amplifica os erros. Uma definição mal lida em um conjunto de dados compartilhado se espalha para todo relatório construído sobre ele, e um modelo treinado em comportamento passado pode repetir velhos vieses em velocidade. As ferramentas de IA que escrevem consultas, gráficos e resumos tornam a análise mais barata e também tornam os erros mais fáceis de produzir com confiança; por isso a conferência importa mais.

Termos usados aqui. Um **conjunto de dados (dataset)** é uma coleção definida de registros, como tickets ou implantações. A **linhagem** é o registro de onde os dados vieram e do que foi feito com eles. A **reconciliação** compara duas fontes que deveriam concordar. Um **contrato de dados** é um acordo entre o produtor e os usuários de um conjunto de dados sobre sua estrutura, seu significado e sua qualidade. Uma **análise** é uma pergunta, um método e um resultado. A **incerteza** é a faixa em que um valor pode estar, dados os dados e o método. Um **registro de decisões** anota as decisões que um número informou.

## Princípios-chave

- **Parta da pergunta e da decisão.** Uma análise sem uma decisão ligada é sobrecarga.
- **Meça os dados sobre os dados.** Completude, oportunidade e reconciliação são medidas que uma equipe pode ter como suas.
- **Mantenha a linhagem.** Um número que você não consegue rastrear até a fonte não pode ser corrigido.
- **Declare a incerteza e os limites.** Mostre a contagem por trás de uma taxa e diga o que o número não consegue mostrar.
- **Confira a análise como código.** Reveja as definições e consultas e mantenha-as em controle de versão.
- **Proteja as pessoas.** A análise do comportamento das pessoas precisa de limites de privacidade, e os resultados descrevem equipes e serviços.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completude dos campos obrigatórios | Proporção dos registros com todos os campos exigidos pelas métricas que os usam | registros com todo campo obrigatório presente e válido / registros no escopo | porcentagem | Extrações dos sistemas de origem e verificações de qualidade de dados | Medição e relato; gestão do conhecimento | Definição de pronto para registros | Mensal |
| Atualidade dos dados | Idade dos dados mais recentes em um conjunto de dados no momento em que um relatório é lido | mediana e máximo de (momento da leitura do relatório menos momento do último registro carregado) entre os conjuntos de dados | horas | Logs do pipeline e metadados dos conjuntos de dados | Medição e relato | Feedback rápido | Semanal |
| Variância de reconciliação | Diferença entre duas fontes que deveriam concordar sobre a mesma quantidade | diferença absoluta entre a fonte A e a fonte B / fonte A, para uma amostra declarada de quantidades e um período | porcentagem | Dois sistemas de origem | Medição e relato; gestão financeira | Acordos de trabalho sobre definições | Trimestral |
| Cobertura de linhagem | Proporção das métricas relatadas cuja fonte, transformações e responsável estão documentados | métricas no registro com linhagem documentada / métricas relatadas | porcentagem | Registro de métricas e catálogo de dados | Governança | Acordos da equipe | Trimestral |
| Taxa de falha de execuções do pipeline de dados | Proporção das execuções do pipeline de dados que falham ou carregam dados incompletos | execuções do pipeline de dados que falharam ou carregaram dados incompletos / execuções iniciadas | porcentagem | Logs do pipeline de dados | Medição e relato | Integração contínua para dados | Semanal |
| Taxa de revisão de análises | Proporção das análises publicadas que foram revistas por uma segunda pessoa antes do uso | análises com uma revisão registrada / análises publicadas para um público que decide | porcentagem | Registro de análises e log de revisões | Medição e relato; melhoria contínua | Revisão por pares | Trimestral |
| Taxa de uso em decisões | Proporção das métricas relatadas citadas em uma decisão registrada no período | métricas citadas em uma entrada do registro de decisões / métricas relatadas | porcentagem | Registro de decisões e registro de métricas | Melhoria contínua | Ações de retrospectiva | Trimestral |

A completude conta um campo como presente somente se contém um valor válido; assim um marcador como "n/a" não conta. A variância de reconciliação se aplica a uma amostra nomeada de quantidades, como as contagens de tickets de um mês, e declara a amostra.

## Recomendações

### Torne visível a qualidade dos dados

**1. Defina a qualidade de dados em termos das métricas.** Liste os campos e registros de data e hora de que suas métricas mais importantes dependem e defina como é o válido em cada um. Confira-os primeiro, já que um registro de data e hora ausente quebra uma medida de tempo.

**2. Confira na fonte, e não só no relatório.** Uma verificação de qualidade executada quando o dado é criado, como um campo obrigatório no formulário do ticket, previne erros que nenhuma limpeza posterior consegue reparar por inteiro. Acrescente também verificações quando os dados são carregados.

**3. Publique a qualidade ao lado dos números.** Mostre a completude e a atualidade no painel que mostra a métrica. Um leitor deve ver a qualidade dos dados sem precisar perguntar.

**4. Reconcilie em um cronograma.** Compare pelo menos uma quantidade entre dois sistemas a cada trimestre, como o número de mudanças no registro de mudanças e no pipeline. Investigue e explique as diferenças e registre o achado.

### Mantenha honesta a análise

**5. Escreva primeiro a pergunta e a decisão.** Antes da análise, registre a pergunta, a decisão que ela informa e quem decidirá. Quando a decisão tiver passado, registre o que foi decidido.

**6. Mantenha linhagem e definições em um só registro.** Ligue cada métrica à sua fonte, transformação, responsável e data de revisão (veja o tópico 1.4, Governança e responsabilidade das métricas). As mudanças de definição são registradas com os motivos e marcadas nos gráficos.

**7. Reveja cada peça de análise.** Uma segunda pessoa confere as definições, as consultas e as conclusões de qualquer análise usada em uma decisão. Mantenha as consultas em controle de versão para que possam ser reexecutadas.

**8. Declare a incerteza e os limites.** Mostre o número de itens por trás de cada taxa, intervalos onde importam e o que a análise não consegue mostrar. Evite a precisão de um número único onde os dados não a sustentam.

### Governe o uso

**9. Use contratos de dados para conjuntos de dados compartilhados.** A equipe que produz um conjunto de dados declara seu significado, seus campos, sua atualidade e seus problemas conhecidos e avisa os usuários quando ele muda. As mudanças que quebram precisam de aviso.

**10. Proteja as pessoas nos dados.** Decida quem pode ver os registros brutos, por quanto tempo os dados são guardados e qual é o tamanho mínimo de grupo para os relatórios. Mantenha a análise no nível da equipe e do serviço e confira as regras de privacidade que se aplicam a você.

**11. Aposente relatórios e conjuntos de dados.** Um relatório que ninguém usa ainda custa manutenção e pode enganar. Reveja o uso e aposente o que não é citado em decisões.

**12. Trate a análise assistida por IA como não revista até ser conferida.** As ferramentas de IA podem escrever uma consulta ou um resumo que parece correto e está errado. Reveja a consulta, refaça-a sobre uma pequena amostra conhecida e registre que foi conferida.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Completude dos campos obrigatórios | Preencher campos com marcadores ou padrões; tornar os campos opcionais | Verificações de validade sobre o conteúdo; amostrar registros em busca de valores reais |
| Atualidade dos dados | Marcar com data e hora as cargas em vez dos eventos; carregar atualizações vazias | Conferir a hora do evento contra a hora da carga; contagem de linhas por carga |
| Variância de reconciliação | Escolher quantidades que por acaso concordam; ajustar uma fonte para combinar | Alternar as quantidades; manter uma trilha de auditoria dos ajustes |
| Cobertura de linhagem | Documentar a linhagem de modo superficial; copiar texto entre entradas | Amostrar entradas e rastrear uma métrica de ponta a ponta |
| Taxa de falha de execuções do pipeline de dados | Marcar execuções falhas como reexecutadas ou bem-sucedidas; apagar logs | Comparar as contagens de registros com a fonte; alertar sobre lacunas |
| Taxa de revisão de análises | Revisões de carimbo; revisar depois da decisão | Conferir as notas do revisor; exigir revisão antes do uso |
| Taxa de uso em decisões | Citar métricas em um registro sem efeito na decisão | Perguntar o que mudou; amostrar entradas |

Uma leitura saudável é cifras de qualidade de dados visíveis e estáveis, diferenças entre fontes que são explicadas, análise revista antes do uso e métricas que vêm e vão conforme as decisões precisam.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Validação estrita de dados na entrada | Previne erros cedo | Atrito para os usuários; entradas com marcadores |
| Limpar os dados depois do fato | Flexível; não atrasa os usuários | Esconde a causa; os erros permanecem em alguns relatórios |
| Equipe central de análise | Métodos e qualidade consistentes | Gargalo; distância do trabalho |
| Análise de autoatendimento pelas equipes | Rápida; perto do trabalho | Definições inconsistentes; qualidade desigual |
| Análise assistida por IA | Rascunhos rápidos; reduz a barreira | Erros confiantes; reprodutibilidade fraca |

A conclusão pragmática é prevenir os erros na fonte, compartilhar definições e linhagem em um só lugar e exigir revisão de toda análise que informa uma decisão. A velocidade do autoatendimento e da IA é bem-vinda quando a conferência acompanha.

## Perguntas para discutir com sua equipe

**1. Em quais três números do nosso painel mais nos arrependeríamos se os dados por baixo estivessem errados?**
Comecem pelos números que conduzem decisões ou metas. Perguntem de que os dados dependem e quem é dono da fonte. As pessoas muitas vezes descobrem que um número-chave depende de um campo preenchido à mão. Em seguida, escolham um para conferir neste mês.

**2. Quando dois relatórios discordaram, e como resolvemos?**
Histórias de números conflitantes mostram onde as definições diferem. Perguntem se a resolução foi registrada e se a causa foi corrigida. O facilitador deve anotar as causas repetidas, como fusos horários ou definições de status diferentes. Em seguida, combinem uma definição e um responsável.

**3. Qual é a idade dos dados do relatório que mais olhamos?**
Muitas pessoas não sabem. Perguntem como a atualidade é mostrada e se uma carga obsoleta seria notada. Discutam o custo de uma decisão desatualizada. Em seguida, acrescentem a atualidade ao relatório.

**4. Quem revisou a última análise que mudou uma decisão?**
Procurem um segundo par de olhos nas definições e consultas. Se não houve, discutam por quê. Perguntem que revisão seria proporcional. Em seguida, escolham uma etapa simples de revisão para qualquer análise que informa uma decisão significativa.

**5. O que a nossa métrica mais usada não consegue nos dizer?**
Nomear limites é o hábito da boa análise. Peçam pontos cegos específicos, como usuários que não procuram o suporte. Registrem os limites ao lado da métrica. Em seguida, acrescentem uma medida que cubra um ponto cego.

**6. Como usamos ferramentas de IA para escrever consultas e resumos, e como as conferimos?**
Peçam a prática real, e não a política. Escutem por saídas não revistas usadas em relatórios. Discutam uma verificação simples, como reexecutar sobre uma amostra conhecida. Em seguida, combinem uma regra para a análise assistida por IA.

## Quatro perspectivas

### Equipes de produto e entrega

Suas ferramentas produzem boa parte dos dados que outros analisam. Mantenham confiáveis os registros de data e hora, os identificadores e os status e avisem os usuários dos dados quando um campo mudar. Incluam a qualidade de dados na definição de pronto das novas funcionalidades que produzem dados.

### Equipes de serviço e operações

Os dados de tickets dependem de como as pessoas preenchem formulários sob pressão. Façam da entrada certa a entrada fácil, confiram a qualidade de dados na ferramenta e falem quando uma métrica interpreta mal o trabalho. Não retrodatem nem atualizem registros em lote para melhorar um número.

### Liderança e governança

Peçam a qualidade de dados e a linhagem ao lado de qualquer número que sustente uma decisão ou meta. Financiem a engenharia de dados e o tempo de revisão, e não só painéis. Protejam a privacidade e evitem usar a análise de indivíduos para avaliar pessoas.

### Clientes e usuários

Os dados sobre vocês conduzem como o serviço os trata; por isso perguntem o que é coletado e como é usado. Onde o feedback de vocês está nos dados, como as respostas de pesquisas, perguntem como é protegido e como chegou a uma decisão.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma concessionária regional constrói um painel de tempo de resolução de incidentes e de taxa de falha de mudanças para sua equipe executiva. Os números deste exemplo são ilustrativos. O painel mostra uma mediana do tempo de resolução de 3,1 horas e uma taxa de falha de mudanças de 4%.

Um analista confere a qualidade antes do lançamento. A completude dos campos obrigatórios do registro de data e hora de resolução é de 91%, e os registros ausentes são sobretudo incidentes graves inseridos depois do fato. A atualidade é de 26 horas, porque a extração roda durante a noite. A reconciliação do registro de mudanças com o pipeline mostra 8% mais mudanças em produção no pipeline que no registro de mudanças; assim a taxa de falha tem um problema de denominador.

A equipe faz mudanças. O formulário do ticket exige o horário de resolução e confere que é posterior ao horário de abertura. O painel mostra o número de incidentes por trás de cada cifra, a idade dos dados e a completude dos campos usados. Um contrato de dados declara que o registro de mudanças é o sistema de registro das mudanças aprovadas e o pipeline das implantações, com uma reconciliação mensal. A primeira reconciliação explica a diferença como mudanças de emergência registradas apenas no pipeline.

Surge um risco de manipulação quando um gerente sugere excluir os incidentes com horários de resolução ausentes para melhorar a completude. A equipe recusa e corrige a entrada. O resultado é um intervalo mediano mais largo e uma taxa de falha de mudanças de 6%. O registro de decisões anota que a equipe executiva escolheu esperar um trimestre antes de definir uma meta. O que continua difícil: nem todas as entradas retrodatadas são detectáveis, e a reconciliação depende de um vínculo manual de identificadores.

## Ágil, IA, automação e análise

### Ágil

Ciclos curtos de feedback ajudam a qualidade de dados: corrija o formulário, confira os dados do dia seguinte e pergunte aos usuários. Uma boa prática é rever as cifras de qualidade de dados na conversa regular de melhoria com as pessoas que inserem os dados. O cuidado é que mudanças contínuas em campos e status quebram as tendências; por isso registre toda mudança de definição.

### IA

A IA pode escrever consultas, esboçar gráficos, resumir comentários e sinalizar anomalias, e também pode inventar resultados plausíveis. Trate a análise assistida por IA como não revista até uma pessoa conferir a consulta e reexecutá-la sobre uma pequena amostra conhecida e registre que foi conferida. O cuidado é que os resumos de comentários de pesquisas feitos por IA podem interpretar mal a linguagem e o tom; por isso leia uma amostra dos originais.

### Automação

Automatize as verificações de qualidade de dados na carga e na hora do relatório e meça os pipelines pelas falhas e lacunas. Alerte sobre cargas ausentes e mudanças súbitas de volume. O cuidado é que regras automáticas de limpeza podem esconder um problema da fonte; por isso relate o que foi mudado e por quê.

### Análise

Este tópico trata de análise; assim a prática é uma breve nota em cada métrica: sua pergunta, decisão, linhagem, qualidade e limites. A decisão informada é se se confia em um número o bastante para agir. O cuidado é que painéis de aparência limpa podem repousar sobre dados fracos; por isso mostre as cifras de qualidade ao lado do resultado e mantenha as definições do Service Management Metrics em um só registro.

## Olhar setorial

**Startup.** Os dados são pequenos e mutáveis. Mantenha uma fonte da verdade para cada métrica, escreva as definições em um documento curto e evite construir uma plataforma de dados antes de as perguntas estarem claras.

**Pequena empresa.** Os dados podem viver numa ferramenta hospedada com relatórios fixos. Confira como a ferramenta define cada medida, exporte amostras para verificar e mantenha uma lista curta do que os relatórios não conseguem mostrar.

**Grande empresa.** Muitas fontes e equipes criam definições conflitantes. Use um registro de métricas compartilhado, contratos de dados e uma reconciliação regular e dê às equipes os meios de conferir os próprios dados.

**Governo e setor público.** Os registros podem estar sujeitos a regras de retenção, acesso e relato público. Documente a linhagem de qualquer cifra publicada e mantenha regras de privacidade para os dados sobre pessoas (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é o tempo do pessoal para verificações de qualidade de dados, reconciliação, documentação e revisão, mais ferramentas para pipelines de dados e catálogos onde usados. Boa parte pode começar com pequenos passos, como a validação no formulário do ticket.

O retorno são decisões tomadas sobre números melhores, menos tempo gasto discutindo qual relatório está certo e menos retrabalho quando um número mal lido é achado tarde. Descreva-o como um padrão, e não como uma cifra: menos decisões revertidas e menos disputas. Se você precisar de números para um caso, meça suas próprias linhas de base, como a variância de reconciliação e o tempo gasto resolvendo disputas de relatórios, antes e depois da mudança (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Limpar só no relatório.** A fonte continua produzindo erros. Corrija as verificações de entrada e de carga.
- **Painéis sem cifras de qualidade.** Os leitores não conseguem julgar o número. Mostre completude, atualidade e contagens.
- **Definições não documentadas.** Os números mudam de significado em silêncio. Mantenha a linhagem e um registro de mudanças.
- **Análise não revista.** Os erros chegam às decisões. Exija um segundo olhar.
- **Confiar em resumos de IA.** Podem ser fluentes e errados. Confira as consultas e amostre os originais.
- **Análise de indivíduos.** Vira vigilância e corrompe os dados. Relate no nível da equipe com um tamanho mínimo de grupo.
- **Nunca aposentar relatórios.** Acumulam-se e enganam. Reveja o uso e remova.
- **Números únicos sem incerteza.** Convidam à reação exagerada. Mostre contagens e faixas.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Qualidade de dados | Qualidade desconhecida; planilhas à mão | Completude conferida nos campos-chave | Verificações de qualidade na entrada e na carga, mostradas nos relatórios | Reconciliação e tendências de qualidade revistas em um ritmo | Qualidade gerida com contratos de dados entre equipes |
| Linhagem e definições | Definições na cabeça das pessoas | Algumas definições escritas | Registro com fonte, responsável e registro de mudanças | Linhagem rastreada de ponta a ponta para métricas-chave | Definições compartilhadas entre equipes e fornecedores |
| Prática de análise | Relatórios pontuais; sem revisão | Alguma revisão por pares | Perguntas, decisões e revisão registradas | Análise reutilizada, revista e aposentada | Análise embutida nas decisões com feedback sobre os resultados |

## Lista de verificação

- [ ] Cada métrica-chave lista os campos e registros de data e hora de que depende.
- [ ] Os campos obrigatórios são validados na entrada, e não só limpos depois.
- [ ] Os relatórios mostram a completude, a atualidade e a contagem por trás de cada taxa.
- [ ] Pelo menos uma quantidade é reconciliada entre duas fontes a cada trimestre.
- [ ] Um registro anota fonte, transformação, responsável e data de revisão de cada métrica.
- [ ] As mudanças de definição são registradas e marcadas nos gráficos.
- [ ] A análise que informa uma decisão é revista por uma segunda pessoa.
- [ ] Existem regras para a análise assistida por IA, incluindo uma verificação sobre uma amostra conhecida.
- [ ] Acesso, retenção e tamanho mínimo de grupo são definidos para os dados relacionados a pessoas.
- [ ] Cada métrica tem um vetor de manipulação e uma barreira de proteção mostrados ao lado.

## Prompts de IA

**Redija verificações de qualidade de dados para uma métrica.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Revise uma análise antes de ela ser usada.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Planeje uma reconciliação entre dois sistemas.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Revise o risco de manipulação das medidas de qualidade de dados.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Skills de IA

- [Data quality](../../../../skills/data-quality/SKILL.md): use para definir e conferir a qualidade de um conjunto de dados.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): use para projetar e rever o pipeline que carrega os dados de serviço.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): use para conferir se um método e sua incerteza se ajustam à pergunta.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para achar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- Um número só é tão confiável quanto seus dados; por isso meça a completude, a atualidade e a reconciliação e mostre-as ao lado do resultado.
- Mantenha a linhagem e as definições em um só registro e registre toda mudança.
- Reveja a análise antes que ela informe decisões, inclusive as assistidas por IA.
- Declare a incerteza e os limites e mostre a contagem por trás de cada taxa.
- Mantenha a análise no nível da equipe e do serviço, com limites de privacidade para os dados sobre pessoas.

## Referências e leituras complementares

1. Wikipedia, [Análise de dados](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Qualidade de dados](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Linhagem de dados](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Governança de dados](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Controle estatístico de processo](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reprodutibilidade](https://en.wikipedia.org/wiki/Reproducibility).
