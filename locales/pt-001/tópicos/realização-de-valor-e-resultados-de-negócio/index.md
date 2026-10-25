# Realização de valor e resultados de negócio

**Entregar uma mudança não é o mesmo que a organização se beneficiar dela; por isso declare o benefício esperado antes de construir, confira-o depois do release com as pessoas que deveriam ganhar e seja honesto sobre quanto de qualquer melhoria você pode atribuir ao seu trabalho.**

## Visão geral e motivação

As formas ágeis de trabalhar põem o software funcionando em primeiro lugar e mantêm as partes interessadas colaborando o tempo todo, para que o que é entregue seja o que as pessoas precisam. A gestão de serviços de TI (ITSM), como codificada pelo ITIL, enquadra a mesma preocupação como valor: um serviço é valioso quando ajuda os clientes a alcançar os resultados que desejam, com custos e riscos que aceitam. As duas tradições se encontram em uma pergunta incômoda. Daqui a um ano, as pessoas e a organização estão melhores por causa do que esta equipe construiu e operou?

Respondê-la é mais difícil que contar o que foi entregue. Funcionalidades são lançadas e ninguém as usa. Os incidentes caem por razões sem relação com o trabalho da equipe. Uma economia de custos aparece em um slide, e o orçamento de onde veio é gasto em outro lugar. Este tópico trata de fechar essa lacuna e se liga diretamente ao foco em resultados introduzido no começo do livro (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

Quatro ideias organizam o tópico.

- **Benefício.** Um benefício é uma melhoria mensurável que uma parte interessada valoriza, como menos tempo gasto em uma tarefa, menos erros, mais clientes atendidos ou menor risco. Uma funcionalidade não é um benefício. É um meio. A [gestão de realização de benefícios](https://en.wikipedia.org/wiki/Benefits_realisation_management) é a disciplina de identificar benefícios, designar responsáveis e conferir se chegam.
- **Hipótese de valor.** Antes de construir, a equipe escreve o que espera mudar, para quem, em quanto e como saberá. É uma afirmação testável e pode estar errada. Uma [teoria da mudança](https://en.wikipedia.org/wiki/Theory_of_change) ou um [modelo lógico](https://en.wikipedia.org/wiki/Logic_model) expõe a cadeia das atividades às saídas e aos resultados, o que ajuda a tornar explícita a hipótese.
- **Indicadores antecedentes e consequentes.** Um [indicador antecedente](https://en.wikipedia.org/wiki/Leading_indicator) se move cedo e prevê um resultado, como a adoção de um novo processo. Um [indicador consequente](https://en.wikipedia.org/wiki/Lagging_indicator) confirma o resultado depois do fato, como o custo reduzido por transação. Use os dois: os antecedentes permitem corrigir o rumo, e os consequentes dizem se funcionou.
- **Atribuição.** Muitas coisas mudam ao mesmo tempo. Para dizer que o seu trabalho causou uma melhoria, você precisa de uma comparação: uma linha de base, um grupo de comparação ou um desenho de antes e depois que leve em conta outras mudanças. Sem isso, as alegações de valor são histórias. A posição honesta muitas vezes é "associado a", e não "causado por".

As estruturas de metas como [objetivos e resultados-chave](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKRs) podem ligar o trabalho da equipe aos resultados de negócio, e o tópico anterior sobre estruturas de medição as cobre em detalhe (veja o tópico 1.7, Estruturas de medição). O risco de toda estrutura é o que a [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) nomeia: quando um número de benefício vira meta, as pessoas acham modos de produzir o número sem o benefício (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

O tópico também faz ponte com o dinheiro. O tópico da parte seguinte sobre retorno do investimento e business case toma a visão financeira em profundidade (veja o tópico 7.7, Retorno do investimento e business case). Aqui o foco é a evidência dos resultados, que alimenta esse argumento.

## Princípios-chave

- **Escreva o benefício esperado antes de construir.** Uma afirmação que não pode ser conferida depois não pode ser aprendida.
- **Nomeie um responsável por cada benefício.** O responsável é uma parte interessada que verá a mudança, e não a equipe de entrega.
- **Meça junto aos usuários, depois do release.** A entrega é o começo da conferência, e não o fim.
- **Use indicadores antecedentes para orientar e consequentes para confirmar.**
- **Seja honesto sobre a atribuição.** Diga o que mais mudou e evite alegações que a evidência não sustenta.
- **Conte os benefícios que não chegaram.** Aprender com uma hipótese que falhou é um benefício de trabalhar assim.
- **Continue colaborando.** As partes interessadas e a equipe revêm a evidência juntas, regularmente.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de realização de benefícios | Proporção dos benefícios esperados que foram observados na data de revisão combinada | benefícios com resultado medido igual ou acima do limiar combinado / benefícios esperados com data de revisão no período | porcentagem | Registro de benefícios com responsáveis, linhas de base e datas de revisão | Melhoria contínua; governança do sistema de valor de serviço | Revisão de resultados com as partes interessadas | Trimestral |
| Tempo até o primeiro valor | Tempo desde o início do trabalho até o primeiro benefício mensurável para os usuários | dias desde o início do primeiro trabalho até a primeira data em que o indicador de benefício se moveu como esperado | dias | Rastreador de trabalho e indicador de benefício | Projeto de serviço; gestão de releases e implantação | Entrega contínua de valor | Por iniciativa |
| Taxa de conferência de hipóteses | Proporção das mudanças liberadas cuja hipótese de valor declarada foi conferida depois do release | mudanças com uma conferência pós-release registrada / mudanças liberadas que traziam uma hipótese | porcentagem | Registro de hipóteses ligado aos registros de releases | Melhoria contínua; habilitação de mudanças | Aprendizado com o trabalho liberado | Mensal |
| Parcela de qualidade da evidência | Proporção das alegações de benefício que têm uma linha de base e um método de comparação declarado | alegações de benefício com linha de base e método / alegações de benefício relatadas | porcentagem | Revisão do registro de benefícios | Medição e relato | Relato honesto dos resultados | Trimestral |
| Movimento do indicador de resultado | Mudança em um indicador de resultado escolhido em comparação com sua linha de base e com uma comparação onde disponível | (indicador depois menos indicador antes) com a mudança do grupo de comparação relatada ao lado | unidades do indicador | Análise de produto, dados do serviço, finanças | Gestão de nível de serviço; melhoria contínua | Progresso do resultado-chave | Mensal |
| Horas de impacto no negócio | Horas em que um processo de negócio foi degradado ou parado por problemas de serviço | horas de processo degradado ou parado atribuídas pelos responsáveis dos processos a causas do serviço de TI | horas | Registros de incidentes cruzados com a confirmação do responsável pelo processo | Gestão de incidentes; gestão de disponibilidade | Revisão do impacto no negócio | Mensal |
| Parcela de capacidade ligada a resultados | Proporção da capacidade da equipe gasta em trabalho ligado a um resultado declarado | capacidade em itens ligados a um resultado registrado / capacidade total | porcentagem | Rastreador de trabalho com um campo de resultado | Sistema de valor de serviço; governança de portfólio | Trabalho alinhado ao objetivo do produto | Trimestral |

Defina a data de revisão e o limiar de cada benefício quando for registrado, e não depois. O tempo até o primeiro valor começa quando o trabalho começa e para quando o indicador se move pela primeira vez na direção esperada em uma quantidade declarada, o que pode ser bem depois do release. A atribuição das horas de impacto no negócio é combinada com o responsável pelo processo, e as disputas são registradas.

## Recomendações

### Antes de construir: torne a afirmação conferível

**1. Escreva uma hipótese de valor para cada mudança significativa.** Use uma forma simples: "Acreditamos que [mudança] ajudará [quem] a [fazer o quê] para que [melhoria mensurável]. Saberemos pelo indicador [indicador] passando de [linha de base] para [esperado], revisto em [data]." Mantenha-a curta o bastante para caber num cartão no quadro. As equipes que não conseguem preencher os espaços muitas vezes ainda não entenderam o problema.

**2. Registre uma linha de base.** Sem um antes, não há depois. Capture o valor atual do indicador, como foi medido e quanto varia. Se o indicador é ruidoso, um número único engana; por isso registre uma faixa ao longo de várias semanas (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**3. Escolha indicadores antecedentes e consequentes.** Para uma nova requisição de autoatendimento, um indicador antecedente é quantos usuários elegíveis a concluem, e um consequente é a queda nas horas de tratamento manual (veja o tópico 6.3, Métricas de adoção de serviços e catálogo). Combine qual indicador é conferido quando. Os antecedentes permitem uma correção de rumo sem esperar o fim do trimestre.

**4. Nomeie um responsável pelo benefício fora da equipe de entrega.** O responsável é a parte interessada que verá a melhoria em sua área e que pode julgá-la. A equipe de entrega apoia a medição, mas não corrige a própria lição de casa. Isso é a colaboração contínua na prática: quem queria o resultado continua envolvido até que seja confirmado.

### Depois do release: confira, com honestidade

**5. Reveja a hipótese na data combinada.** Faça uma revisão curta com o responsável e a equipe. Olhe o indicador, a linha de base e a comparação. Registre o resultado no registro: cumprido, parcialmente cumprido, não cumprido ou não dá para saber. "Não dá para saber" é um resultado legítimo e um convite a melhorar a medição.

**6. Use uma comparação onde puder.** A comparação mais forte é um experimento controlado. O [teste A/B](https://en.wikipedia.org/wiki/A/B_testing) compara duas versões com usuários designados ao acaso e funciona bem para serviços digitais com tráfego suficiente. Onde a aleatorização não é possível, um rollout escalonado permite comparar grupos que receberam e não receberam a mudança. Uma abordagem de [diferença em diferenças](https://en.wikipedia.org/wiki/Difference_in_differences) compara a mudança em um grupo tratado com a mudança em um grupo não tratado no mesmo período, o que remove tendências compartilhadas. Use o desenho mais simples que se ajuste.

**7. Procure fatores de confusão.** Um fator de [confusão (confounding)](https://en.wikipedia.org/wiki/Confounding) é algo mais que mudou e poderia explicar o resultado: um padrão sazonal, uma nova política, uma mistura diferente de requisições. Liste os plausíveis antes de alegar um efeito. Se não consegue descartá-los, diga o que a evidência sustenta e nada além.

**8. Relate resultados negativos e nulos.** Quando uma mudança não ajudou, diga e registre o que foi aprendido. O [viés de sobrevivência](https://en.wikipedia.org/wiki/Survivorship_bias), o hábito de olhar apenas os sucessos, faz os programas parecerem melhores do que são. Um registro que contém só vitórias não foi mantido com honestidade.

### Mantenha o programa honesto

**9. Separe a qualidade da evidência do benefício.** Acompanhe a proporção das alegações que têm uma linha de base e um método declarado. Uma alegação grande com evidência fraca deve ser lida como tal. Um registro saudável mostra alegações modestas com evidência forte e algumas entradas honestas de "não dá para saber".

**10. Ligue a capacidade aos resultados, de forma frouxa.** Pergunte que proporção do trabalho da equipe está ligada a um resultado declarado e olhe o resto. Algum trabalho, como correções de segurança ou manter as luzes acesas, não tem novo benefício, e isso é aceitável se for nomeado. O objetivo é notar a deriva, e não forçar toda tarefa em uma história de benefício.

**11. Ligue à estrutura de metas que você usa.** Se usa OKRs, faça dos resultados-chave os indicadores de resultado e reveja-os com as partes interessadas. Mantenha os resultados-chave sobre resultados, e não tarefas, e deixe espaço para metas ambiciosas que podem não ser totalmente cumpridas. Não faça dos resultados-chave metas individuais (veja o tópico 1.7, Estruturas de medição).

**12. Reveja o portfólio além do projeto.** Uma vez por trimestre, olhe entre as iniciativas quais benefícios chegaram, quais não e o que o padrão diz sobre como a equipe estima e seleciona o trabalho. Use isso para melhorar o modo como as hipóteses são escritas, e não para classificar equipes.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de realização de benefícios | Definir limiares baixos; mover a data de revisão; redefinir o benefício depois do fato | Limiar e data fixados na aprovação; parcela de qualidade da evidência; responsável fora da equipe de entrega |
| Tempo até o primeiro valor | Escolher um indicador antecipado que se move pelo motivo errado; começar o relógio tarde | Indicador e relógio definidos no registro; confirmar com o responsável pelo benefício |
| Taxa de conferência de hipóteses | Escrever hipóteses vagas que sempre passam; conferir só as mudanças bem-sucedidas | Amostrar as hipóteses quanto à testabilidade; incluir na revisão os resultados nulos e os que falharam |
| Parcela de qualidade da evidência | Preencher linhas de base depois; descrever qualquer comparação como um método | Linha de base datada antes da mudança; revisão por alguém de fora da equipe |
| Movimento do indicador de resultado | Escolher um período ou grupo favorável; ignorar fatores de confusão | Período e grupo pré-registrados; lista dos fatores de confusão considerados |
| Horas de impacto no negócio | Responsáveis pelos processos inflando ou reduzindo as atribuições; incidentes reclassificados para evitar a atribuição | Regras de atribuição escritas e registradas; comparar com os registros de incidentes e de disponibilidade |
| Parcela de capacidade ligada a resultados | Etiquetar todo o trabalho com um resultado genérico; inventar resultados para o trabalho rotineiro | Lista de resultados revista com as partes interessadas; amostrar itens quanto à qualidade do vínculo |

Uma leitura saudável é um registro em que alguns benefícios são cumpridos, alguns não, alguns incertos e toda entrada tem uma linha de base, um responsável e um método declarado. Um registro de sucesso uniforme deve ser tratado com suspeita.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Registro formal de benefícios | Responsabilização, aprendizado entre iniciativas | Burocracia se aplicado a toda pequena mudança |
| Hipótese leve em cada cartão | Barata, constrói o hábito | Fácil de escrever de modo vago |
| Experimento controlado | Evidência forte de causa | Exige tráfego, tempo e um desenho que se ajuste ao serviço |
| Apenas antes e depois | Simples, rápido | Confundido por outras mudanças |
| Julgamento das partes interessadas | Capta valor que as métricas perdem | Sujeito a otimismo e política |
| Indicadores antecedentes | Correção de rumo antecipada | Podem não prever o resultado real |
| Indicadores consequentes | Confirmam resultados reais | Chegam tarde; muitas causas |

A resposta pragmática é ajustar o peso da evidência ao tamanho e ao risco da mudança. Use uma hipótese leve e um simples antes e depois para mudanças pequenas e um experimento ou rollout escalonado para as grandes. Registre sempre o que esperava, o que aconteceu e quão seguro você está.

## Perguntas para discutir com sua equipe

**1. O que entregamos no último trimestre, e o que mudou para as pessoas a quem se destinava?**
Liste as principais mudanças e, para cada uma, nomeie a pessoa que notaria uma diferença. Pergunte o que ela diria. O facilitador deve anotar as mudanças em que ninguém sabe responder, já que são candidatas a uma conferência pós-release. Combinem uma mudança a rever com seu responsável em até um mês.

**2. Para a nossa próxima mudança significativa, qual é a hipótese de valor e como saberemos?**
Preencham juntos o formulário de hipótese. Questionem palavras vagas e linhas de base ausentes. Perguntem que resultado faria a equipe mudar seus planos. Se o grupo não consegue concordar sobre uma medida, isso é uma tarefa de descoberta antes de construir.

**3. Quem é o dono do benefício, e está na sala?**
Confiram se cada benefício tem um responsável fora da equipe de entrega. Perguntem com que frequência o responsável vê a evidência. Onde o responsável é a própria equipe, discutam quem mais deveria dividir o julgamento. A conversa apoia a colaboração contínua entre as partes interessadas.

**4. O que mais mudou quando os números melhoraram?**
Pegue uma melhoria alegada recente e liste outras mudanças no mesmo período: política, sazonalidade, pessoal, o release de outra equipe. Pergunte quais poderiam explicar o resultado. Decidam se descrevem a melhoria como causada pela mudança, associada a ela ou incerta.

**5. Quais das nossas hipóteses passadas se revelaram erradas, e o que fizemos a respeito?**
Peçam uma história de uma expectativa que falhou. Se nenhuma vem logo, a equipe pode não estar conferindo, ou pode não estar falando sobre isso. Discutam como tornar segura e útil a comunicação de um resultado nulo.

**6. Que proporção da nossa capacidade está ligada a um resultado, e isso parece certo?**
Revejam um mês de trabalho concluído e etiquetem cada item com um resultado ou "manter o serviço funcionando". Perguntem se a divisão combina com o que os líderes pensam. Discutam o trabalho sem resultado e se deve continuar.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas da hipótese e do plano de medição e devem entregar as mudanças em pequenos passos para que a evidência chegue cedo. Devem embutir o indicador na mudança, por exemplo registrando os eventos de que precisam, e pedir ao responsável pelo benefício que confirme o que vê. As equipes devem acolher hipóteses fracassadas como informação, já que o aprendizado precoce poupa o custo de construir mais da coisa errada.

### Equipes de serviço e operações

As equipes de operações veem o efeito real das mudanças sobre incidentes, requisições e capacidade. Guardam boa parte dos dados dos indicadores consequentes, como horas de tratamento manual e contatos repetidos, e devem ajudar a conferir as hipóteses além de absorver a mudança. Devem se manifestar quando os benefícios alegados no papel não combinam com o que a central de serviços vê.

### Liderança e governança

Os líderes escolhem se os benefícios são uma ferramenta de aprendizado ou um discurso de venda. Devem pedir linhas de base e métodos, acolher resultados honestos de "não cumprido" e evitar cobrar das equipes números de benefício definidos antes de os fatos serem conhecidos. A governança deve rever o registro como portfólio, financiar a medição e estar disposta a parar o trabalho cuja hipótese falhou.

### Clientes e usuários

Os usuários sabem se uma mudança ajudou e são os melhores juízes da maioria dos benefícios. Devem ser perguntados, ver os resultados e ser informados quando uma mudança não entregou o que se esperava. Seus comentários são evidência por si. Um benefício que os números mostram e os usuários não sentem merece um olhar mais atento.

## Na prática: um exemplo de gestão de serviços

O grupo de TI de uma seguradora regional de saúde constrói e opera um portal de sinistros para prestadores. Os números abaixo são ilustrativos.

O grupo planeja acrescentar verificações automáticas de elegibilidade ao envio de sinistros. A hipótese, escrita com o gerente de operações de sinistros, é: "Acreditamos que as verificações automáticas de elegibilidade ajudarão a equipe de cobrança dos prestadores a enviar sinistros corretos de primeira, de modo que os sinistros devolvidos para correção caiam de 18% para 12% em três meses. Saberemos pela taxa de sinistros devolvidos, revista em 1º de março." A linha de base é a média das últimas 12 semanas, 18%, com uma faixa semanal de 15 a 21%. O indicador antecedente é o uso da verificação no primeiro mês. O gerente de operações de sinistros é o responsável pelo benefício.

A equipe libera em pequenos passos, com a verificação disponível primeiro para uma região. Depois de três semanas, o uso da verificação é de 64% nessa região. Na data de revisão, os sinistros devolvidos caem para 13% na região com a verificação e para 17% nas regiões sem ela. O gerente de sinistros aponta que uma mudança de política sobre um código de cobrança também entrou em vigor no período. A equipe a lista como fator de confusão e remove os sinistros com esse código dos dois grupos, o que deixa 14% contra 17,5%. A realização do benefício é registrada como "parcialmente cumprida": melhor que a linha de base por uma margem clara, aquém da meta de 12%. A equipe escreve com honestidade no registro que a evidência vem de um rollout escalonado ao longo de um trimestre e que o efeito pode diferir para outros prestadores.

Em seguida, implantam a verificação em todas as regiões, com um plano de conferir de novo em três meses, e acrescentam uma tarefa para melhorar a mensagem de erro, já que os comentários dos prestadores dizem que a mensagem é pouco clara. O diretor financeiro pede um número único para o conselho. O chefe de TI oferece a faixa e o método e se recusa a declarar uma cifra com mais precisão do que a evidência permite. A decisão é registrada, junto com a data da próxima revisão.

## Ágil, IA, automação e análise

### Ágil

Declare o benefício esperado antes de o trabalho começar e confira-o depois do release com as pessoas que deveriam ganhar. O cuidado é que benefícios alegados sem uma linha de base são histórias.

### IA

Os projetos de IA muitas vezes prometem grandes benefícios; por isso registre separadamente a linha de base, a mudança esperada e a evidência do trabalho assistido por IA e pareie as alegações de produtividade com qualidade e custo. O cuidado é que as estimativas de benefício produzidas por uma ferramenta de IA devem ser conferidas, já que podem soar precisas e ser infundadas.

### Automação

Automatize a captura dos indicadores de resultado que já estão em seus sistemas e meça o processo de revisão de benefícios pela conclusão. O cuidado é que painéis automatizados de indicadores podem substituir a conversa sobre se o benefício aconteceu.

### Análise

Relate o movimento dos indicadores de resultado com a qualidade da evidência e os limites da atribuição. A decisão informada é o que continuar, mudar ou parar. O cuidado é que a atribuição é difícil; por isso descreva a incerteza.

## Olhar setorial

**Startup.** Os benefícios estão próximos da receita e da retenção, e a velocidade de aprendizado importa. Escreva hipóteses de uma linha em cartões, confira-as depressa e evite registros pesados. Use comparações simples e aceite que amostras pequenas limitam o que você pode alegar.

**Pequena empresa.** O dono é o responsável pelo benefício, e os efeitos são visíveis. Mantenha uma lista curta de mudanças com efeitos esperados e reveja-a a cada trimestre. Evite inflar pequenos ganhos em grandes cifras e compare com o custo da mudança.

**Grande empresa.** Portfólios, ciclos de financiamento e muitas partes interessadas tornam útil um registro de benefícios. Mantenha-o leve para pequenas mudanças e rigoroso para as grandes, ponha responsáveis nas unidades de negócio e reveja entre o portfólio. Cuide para que os números não sejam consolidados com definições diferentes.

**Governo e setor público.** Os resultados costumam ser bens públicos, como acesso, equidade e segurança, que não se reduzem à receita. Defina os resultados com as pessoas atendidas, use evidências mistas e relate os métodos abertamente. Business cases formais e revisões de benefícios podem ser exigidos, e resultados nulos honestos importam para a prestação de contas pública (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é sobretudo atenção. Escrever uma hipótese leva minutos, uma linha de base leva uma hora ou poucas, e uma revisão leva uma reunião curta. Experimentos e rollouts escalonados exigem esforço de projeto e alguma ferramenta. Um registro de benefícios pode ser uma planilha ou um campo no rastreador de trabalho.

O retorno são melhores decisões de investimento. Uma equipe que confere suas hipóteses para de construir o que não ajuda, escala o que ajuda e aprende quão bem prevê. Isso poupa o custo de funcionalidades não usadas e de programas fracassados. Construa o argumento com os seus próprios dados: a proporção das mudanças que traziam uma hipótese, a proporção que foi conferida e o custo do trabalho depois abandonado ou revertido. Evite cifras publicadas sobre a taxa de fracasso de projetos de TI a menos que possa rastrear a fonte e o método, já que variam muito e costumam ser citadas sem contexto. O tratamento financeiro está na parte seguinte (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contar a entrega como valor.** Uma funcionalidade lançada é um meio. Confira o efeito sobre as pessoas.
- **Hipóteses que não podem falhar.** Faça-as específicas, com um número e uma data.
- **Corrigir a própria lição de casa.** Peça ao responsável pelo benefício, fora da equipe, que julgue o resultado.
- **Alegar causa a partir de um antes e depois.** Liste os fatores de confusão e use uma comparação onde possível.
- **Relatar só vitórias.** Registre os resultados nulos e negativos. Um registro só de sucessos não é honesto.
- **Definir metas de benefício para indivíduos.** Metas ligadas a pessoas convidam a alegações infladas. Mantenha os benefícios no nível da equipe e da iniciativa.
- **Excesso de precisão.** Relate faixas e o método, e não um único número decimal.
- **Ignorar o trabalho que não tem novo benefício.** Nomeie-o e não invente uma história de benefício para ele.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Declarar o valor | Benefícios alegados apenas em business cases | Hipóteses escritas para algumas mudanças | Uma hipótese curta, linha de base e responsável para toda mudança significativa | Hipóteses e limiares fixados na aprovação; indicadores antecedentes e consequentes definidos | Hipóteses compartilhadas entre equipes e fornecedores; resultados definidos com os usuários |
| Conferir o valor | Sem conferência pós-release | Conferência ocasional pela equipe de entrega | Revisão programada com um responsável independente | Comparações e fatores de confusão documentados; qualidade da evidência acompanhada | Evidência em nível de portfólio orienta o financiamento; experimentos compartilhados entre equipes |
| Aprendizado | Vitórias celebradas, fracassos esquecidos | Algumas lições registradas | Resultados nulos registrados e revistos | Padrões nas hipóteses perdidas melhoram a seleção e o dimensionamento | O aprendizado alimenta o planejamento em toda a organização e com parceiros |

## Lista de verificação

- [ ] Cada mudança significativa tem uma hipótese de valor escrita, com linha de base, indicador e data de revisão.
- [ ] Cada benefício tem um responsável fora da equipe de entrega.
- [ ] Indicadores antecedentes e consequentes estão definidos e acompanhados.
- [ ] As revisões acontecem na data combinada com o responsável.
- [ ] Comparações ou rollouts escalonados são usados onde viável.
- [ ] Os fatores de confusão são listados para cada resultado alegado.
- [ ] Os resultados nulos e negativos são registrados e compartilhados.
- [ ] A qualidade da evidência é acompanhada ao lado das alegações de benefício.
- [ ] Nenhum indivíduo tem uma meta pessoal de benefício.
- [ ] Uma revisão trimestral de portfólio olha os padrões nas hipóteses cumpridas e perdidas.

## Prompts de IA

**Escreva uma hipótese de valor.**

```text
We plan to [describe change] for [users or stakeholders] in [type of
organization]. The problem today: [describe]. Draft a value hypothesis in the
form "We believe that [change] will help [who] to [do what] so that [measurable
improvement]. We will know by [indicator]..." Suggest one leading and one
lagging indicator, what baseline we need, and a review date logic. Do not invent
target values; leave them as placeholders for us. List your assumptions and what
we need to find out.
```

**Liste os fatores de confusão de um resultado alegado.**

```text
We claim that [change] improved [indicator] from [before] to [after] between
[dates]. Other things that happened in the period: [list]. List plausible
confounding factors, how each could explain the result, and what data or
comparison would help rule it out. Suggest wording that states what the
evidence supports. Do not assume a cause the data cannot support. List your
assumptions.
```

**Projete uma comparação por rollout escalonado.**

```text
We can release [change] to [number] groups at different times: [describe
groups and constraints]. Propose a staged rollout that lets us compare groups
with and without the change, say what indicator and period to use, what could
bias the comparison, and what we would conclude from different outcomes. Do not
invent effect sizes. List your assumptions and risks.
```

**Revise uma entrada do registro de benefícios.**

```text
Review this benefits register entry for [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Point out missing
information, vague wording, claims the evidence does not support, and ways the
result could be gamed. Suggest a stronger wording that fits what we actually
measured. List your assumptions and questions for the owner.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de valor ou de resultado antes de relatá-la.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de benefícios traz seu vetor de manipulação, sua barreira de proteção e seu padrão de evidência.

## Ideias-chave

- Escreva uma hipótese de valor conferível antes de construir, com uma linha de base, um responsável fora da equipe e uma data de revisão.
- Use indicadores antecedentes para orientar e consequentes para confirmar.
- Compare onde puder, liste os fatores de confusão e alegue apenas o que a evidência sustenta.
- Registre os resultados nulos e negativos; um registro de sucesso uniforme não é honesto.
- Acompanhe a qualidade da evidência ao lado do tamanho da alegação.
- Mantenha as partes interessadas e os usuários colaborando até que o resultado seja confirmado.

## Referências e leituras complementares

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Gestão de realização de benefícios](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Teoria da mudança](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Modelo lógico](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Indicador antecedente](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Indicador consequente](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objetivos e resultados-chave](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Teste A/B](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Diferença em diferenças](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confusão](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Viés de sobrevivência](https://en.wikipedia.org/wiki/Survivorship_bias).
