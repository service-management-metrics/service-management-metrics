# Métricas de riscos e controles

**O trabalho com riscos é uma conversa contínua sobre o que pode dar errado e o que estamos fazendo a respeito; por isso mantenha o registro curto e vivo, teste os controles que importam e desconfie de qualquer número que faça a incerteza parecer arrumada.**

## Visão geral e motivação

Toda mudança em um serviço carrega risco, e deixá-lo em paz também. A [gestão de riscos](https://en.wikipedia.org/wiki/Risk_management) é a identificação, a avaliação e a priorização de riscos, seguidas de ação coordenada para reduzi-los, aceitá-los, transferi-los ou evitá-los. O ITIL trata o risco como um fio que atravessa todas as práticas: a habilitação de mudanças decide quanto escrutínio uma mudança precisa, a continuidade de serviço planeja a interrupção, a segurança da informação protege contra ameaças. As formas de trabalho ágeis e de DevOps reduzem o risco de outro modo. Mudanças pequenas entregues continuamente, com feedback rápido e capacidade de rollback, tornam cada mudança menos perigosa e fazem os problemas aparecerem mais cedo.

As duas visões se encontram nas métricas. Uma equipe que entrega continuamente ainda precisa conhecer seus principais riscos, quem é dono deles e se os controles em que se apoia funcionam. Uma função de riscos que insiste em aprovação pesada ainda precisa de evidência de que seus controles reduzem danos e não apenas atrasam as pessoas. Este tópico dá as medidas para ambas e se apoia nas práticas descritas nos tópicos vizinhos sobre segurança e auditoria (veja o tópico 8.1, Métricas de incidentes de segurança e vulnerabilidades, e o tópico 8.3, Métricas de conformidade e auditoria).

Quatro termos se repetem.

- **Risco:** um evento ou condição incerto que, se ocorrer, afeta os objetivos. Tem uma causa, um evento e uma consequência, e uma probabilidade e um impacto que em geral são estimados, e não conhecidos.
- **Registro de riscos:** a lista de riscos identificados com responsáveis, classificações e respostas. Um [registro de riscos](https://en.wikipedia.org/wiki/Risk_register) é uma ferramenta de trabalho quando está atual e é lido, e um artefato de conformidade quando não está.
- **Controle:** uma ação ou mecanismo que reduz um risco, como uma revisão, um teste automatizado, uma aprovação, uma segregação de funções ou um alerta de monitoramento. O conjunto de controles em que uma organização se apoia é seu sistema de [controle interno](https://en.wikipedia.org/wiki/Internal_control).
- **Indicador-chave de risco (KRI):** uma medida que sinaliza uma mudança no nível de um risco antes de a perda ocorrer. Um [indicador-chave de risco](https://en.wikipedia.org/wiki/Key_risk_indicator) é útil quando antecede um evento e quando alguém age sobre ele.

A quantificação de riscos tem fraquezas conhecidas. Uma [matriz de risco](https://en.wikipedia.org/wiki/Risk_matrix), que põe a probabilidade contra o impacto em uma grade de células coloridas, é muito usada e muito criticada: as classificações são subjetivas, riscos diferentes podem cair na mesma célula por razões diferentes e a aritmética de multiplicar pontuações ordinais não tem base firme. Eventos raros e graves, às vezes descritos pela [teoria do cisne negro](https://en.wikipedia.org/wiki/Black_swan_theory), são especialmente difíceis de classificar. A resposta honesta é usar a matriz como auxílio à conversa, mostrar faixas e sustentá-la com evidências sobre controles e incidentes. O arcabouço das três linhas de defesa, que separa as equipes que são donas do risco, as que o supervisionam e a garantia independente, oferece uma estrutura de papéis e funciona melhor quando a primeira linha, as equipes de entrega e operações, é de fato dona de seus riscos.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica ao relato de riscos de um modo particular. Quando uma classificação vermelha traz escrutínio, as pessoas classificam os riscos como âmbar. Quando um risco encerrado é um sucesso, as pessoas encerram riscos sem tratá-los (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Mantenha o registro curto e atual.** Poucos riscos bem atribuídos e revistos valem mais que centenas que não são.
- **Faça a primeira linha ser dona de seus riscos.** As pessoas mais próximas do trabalho o conhecem melhor.
- **Teste os controles em que você se apoia.** Um controle que nunca foi testado é uma esperança.
- **Prefira indicadores antecedentes sobre os quais alguém age.** Um indicador sem plano de resposta é decoração.
- **Mostre faixas e evidências, e não falsa precisão.** As classificações são estimativas.
- **Reduza o risco tornando a mudança pequena e reversível.** A entrega contínua com rollback rápido é um controle.
- **Fale de risco sem culpa.** O relato honesto é a matéria-prima de toda a prática.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atualidade da revisão de riscos | Proporção dos riscos abertos revistos pelo responsável dentro do intervalo combinado | riscos revistos dentro do intervalo / riscos abertos | porcentagem | Datas de revisão do registro de riscos | Gestão de riscos; melhoria contínua | Riscos revistos nas conversas de planejamento e revisão | Mensal |
| Cobertura de responsáveis | Proporção dos riscos abertos com um responsável nomeado e atual que aceitou a responsabilidade | riscos com um responsável atual confirmado / riscos abertos | porcentagem | Registro de riscos cruzado com o diretório de pessoas | Gestão de riscos | Riscos da equipe no backlog | Mensal |
| Cobertura de testes de controles | Proporção dos controles-chave testados quanto à operação dentro do ciclo exigido | controles-chave testados no ciclo / controles-chave | porcentagem | Registro de controles e registros de testes | Gestão de riscos; gestão de segurança da informação | Verificações automatizadas no pipeline | Trimestral |
| Taxa de eficácia dos controles | Proporção dos controles testados que operam conforme projetado | controles considerados eficazes / controles testados | porcentagem | Resultados de testes | Gestão de riscos; melhoria contínua | Testes automatizados que passam pelas razões certas | Trimestral |
| Tempo de resposta a violações de KRI | Tempo desde um indicador-chave de risco cruzar seu limite até uma decisão registrada | mediana e 85º percentil das horas ou dias da violação à decisão | horas ou dias | Monitoramento de KRI e registro de decisões | Gestão de riscos; monitoramento e gestão de eventos | Reação a um sinal de produção | Mensal |
| Pontualidade dos planos de tratamento | Proporção dos tratamentos de risco concluídos na data comprometida | tratamentos concluídos na data / tratamentos devidos no período | porcentagem | Registro de riscos e rastreador de ações | Gestão de riscos; melhoria contínua | Ações de melhoria entregues | Trimestral |
| Parcela de mudanças baseadas em risco | Proporção das mudanças aprovadas por rotas baseadas em risco com a evidência de controle anexada | mudanças aprovadas por uma rota baseada em risco com a evidência exigida / mudanças no período | porcentagem | Registros de mudanças | Habilitação de mudanças; gestão de riscos | Mudanças entregues continuamente com verificações automatizadas | Mensal |

Defina no registro o intervalo de revisão e a lista de controles-chave. Um controle só é "testado" quando o teste examina evidências de operação, e não apenas o projeto. O relógio do KRI começa quando o indicador cruza seu limite, conforme registrado pelo sistema de monitoramento, e para em uma decisão por escrito, que pode ser agir, aceitar ou mudar o limite. Exclua do denominador os riscos que estão sendo aposentados só depois de uma decisão de encerramento registrada.

## Recomendações

### Mantenha viva a conversa sobre riscos

**1. Mantenha o registro curto e escreva cada risco em uma forma padrão.** Use uma frase na forma "Por causa de [causa], [evento] pode acontecer, levando a [consequência]." Limite o registro aos riscos que mudariam uma decisão ou um plano. Funda duplicatas, divida os vagos e aposente os que passaram. Uma lista de algumas dezenas de riscos que as pessoas discutem vale mais que mil que ninguém lê.

**2. Atribua todo risco a um responsável que possa agir.** O responsável é a pessoa com autoridade sobre a resposta, em geral na equipe de entrega ou de operações, e não na função de riscos. Confirme a responsabilidade com a pessoa e reveja-a quando as pessoas mudam de papel. A cobertura de responsáveis mede isso, e um risco sem responsável é um achado.

**3. Reveja os riscos nas conversas que já acontecem.** Levante os principais riscos no planejamento, na revisão e nas revisões de incidentes, em vez de criar uma reunião à parte. O hábito ágil de refletir regularmente sobre como se tornar mais eficaz é um lugar natural para a pergunta "o que pode nos machucar a seguir?". Registre o resultado no registro.

**4. Combine as classificações com evidências e faixas.** Para cada risco importante, registre o que faz você pensar que é provável ou grave: incidentes, quase acidentes, resultados de testes, histórico de fornecedores. Dê uma faixa de probabilidade e de impacto onde puder e diga quão incerto você está. Não combine pontuações ordinais em um único número nem o trate como uma medição. Se usar uma matriz, use-a para iniciar uma discussão (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

### Teste os controles

**5. Nomeie os controles-chave e para que serve cada um.** Para cada risco importante, liste os poucos controles em que você se apoia e como seria a falha de cada um. Um registro de controles que lista centenas de atividades menores esconde as que importam. Inclua os controles automatizados do pipeline, como testes, verificações de política e portões de aprovação.

**6. Teste a operação, e não só o projeto.** Uma revisão de projeto pergunta se o controle funcionaria se fosse operado. Um teste de operação pergunta se ele foi operado e funcionou no período, examinando amostras de evidência. Planeje os testes em um ciclo que combine com o risco, registre os resultados e acompanhe as falhas. Onde possível, automatize a evidência, para que o teste aconteça continuamente.

**7. Trate as falhas de controle como informação.** Um teste que falha é o sistema de controle funcionando. Registre a falha, pergunte por quê e corrija a causa. A taxa de eficácia dos controles deve ser lida com o acompanhamento: falhas achadas e corrigidas depressa são mais saudáveis que uma taxa perfeita que vem de testes fracos.

**8. Use garantia independente onde ela agrega valor.** A auditoria interna ou um revisor independente pode testar os controles de que a primeira linha é dona e que a segunda linha supervisiona. A independência protege contra avaliar o próprio trabalho. Coordene para que as equipes não sejam testadas por três grupos pela mesma coisa.

### Use bem indicadores e decisões

**9. Escolha poucos indicadores antecedentes por risco importante.** Um indicador-chave de risco deve ser barato de medir, ligado a uma causa e pareado com um limite e uma resposta. Por exemplo, a idade da vulnerabilidade crítica mais antiga sinaliza o risco de segurança, e a proporção de mudanças que precisam de tratamento emergencial sinaliza o risco de mudança. Defina quem olha o indicador e o que fará no limite (veja o tópico 8.1, Métricas de incidentes de segurança e vulnerabilidades).

**10. Registre a decisão em cada violação.** Quando um indicador cruza um limite, alguém decide: agir, aceitar ou ajustar o limite. Escreva a decisão e o motivo. Isso constrói um histórico que mostra se os limites estão bem definidos e se a resposta é oportuna.

**11. Faça da aprovação baseada em risco o padrão para a mudança.** Em um cenário de entrega contínua, substitua os comitês de aprovação generalizada por rotas baseadas em risco: verificações automatizadas e revisão por pares para mudanças padrão de baixo risco e revisão mais completa para as poucas mudanças de alto risco (veja o tópico 4.3, Métricas de habilitação de mudanças). Anexe a evidência de que os controles rodaram. Isso reduz o risco e o atraso ao mesmo tempo, porque mudanças pequenas com evidência automatizada são mais seguras que as grandes com uma assinatura.

**12. Aprenda com perdas e quase acidentes.** Depois de incidentes e sustos, atualize o registro: o risco estava lá, foi bem classificado, o controle funcionou? Use as respostas para melhorar ambos. O ciclo entre eventos e registro é o que mantém o registro honesto (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Atualidade da revisão de riscos | Marcar riscos como revistos sem discussão; mudar o intervalo | Amostrar as revisões quanto à substância; intervalo fixo no registro |
| Cobertura de responsáveis | Atribuir responsáveis sem o conhecimento deles; nomear uma pessoa sênior sem autoridade | Confirmação do responsável; conferir se os responsáveis podem agir sobre a resposta |
| Cobertura de testes de controles | Testar os controles fáceis; contar revisões de projeto como testes de operação | Lista de controles-chave fixada por uma segunda parte; tipo de teste registrado |
| Taxa de eficácia dos controles | Testar amostras pequenas; escolher amostras que passam | Método de amostragem independente do responsável; tamanho da amostra registrado |
| Tempo de resposta a violações de KRI | Mudar o limite após uma violação; registrar uma decisão sem conteúdo | Registro de mudanças de limite; amostra do conteúdo das decisões |
| Pontualidade dos planos de tratamento | Definir datas fáceis; redefinir a conclusão | Datas combinadas com o responsável na aprovação; conferir se a classificação do risco se moveu |
| Parcela de mudanças baseadas em risco | Classificar mudanças como de baixo risco para evitar a revisão; anexar evidência que não foi produzida por controles | Amostrar a classificação contra as regras; evidência automatizada do pipeline |

Uma leitura saudável é um registro curto sobre o qual as pessoas discutem, responsáveis que conhecem seus riscos, controles testados com algumas falhas achadas e corrigidas, indicadores que conduzem decisões reais e menos aprovações pesadas para mudanças pequenas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Matriz de risco | Rápida, visual, inicia conversas | Subjetiva; falsa precisão; aritmética ordinal |
| Faixas quantificadas | Mais honestas sobre a incerteza | Exigem dados e habilidade; esforço |
| Comitês de aprovação pesados | Controle visível | Lentos; estimulam o agrupamento de mudanças |
| Verificações automatizadas baseadas em risco | Rápidas e consistentes | Exigem engenharia; verificações automatizadas podem errar |
| Função central de riscos é dona dos riscos | Consistência | Longe do trabalho; responsáveis desengajados |
| Responsabilidade da primeira linha | Conhecimento e responsabilização | Qualidade variável; exige supervisão |
| Teste periódico de controles | Eficiente para controles estáveis | Perde a deriva entre testes |
| Monitoramento contínuo de controles | Evidência oportuna | Esforço de ferramentas; ruído |

A resposta pragmática é colocar a responsabilidade nas equipes, aplicar supervisão central leve e teste independente, automatizar a evidência onde possível e usar as classificações como estímulos à conversa.

## Perguntas para discutir com sua equipe

**1. Quais são os três riscos com mais chance de machucar este serviço no próximo ano, e quem é dono de cada um?**
Peça a cada membro que escreva três riscos em particular e depois comparem. A sobreposição e as diferenças são ambas informativas. O facilitador deve registrar quem agiria sobre cada risco. Combinem os três principais e confirmem os responsáveis.

**2. De qual controle mais dependemos, e quando conferimos pela última vez que ele funciona?**
Escolham um controle, como uma regra de revisão de código, um backup ou uma etapa de aprovação. Rastreiem a última vez que a evidência de sua operação foi examinada. Se ninguém sabe, planejem um teste. A conversa mostra a diferença entre projeto e operação.

**3. O que nos faria mudar uma classificação de âmbar para vermelho, e quem perceberia?**
Discutam os indicadores e limites. Perguntem se a equipe já rebaixou uma classificação para evitar atenção e que pressão a causou. Combinem que evidência justificaria uma mudança e como tornar seguro dizer vermelho.

**4. Quais aprovações atrasam nossas mudanças sem reduzir o risco?**
Listem as aprovações de que uma mudança típica precisa e, para cada uma, perguntem que risco ela trata e se alguma vez barrou uma mudança. Proponham substituir uma por uma verificação automatizada. Combinem que evidência mostraria que a mudança é segura.

**5. Quando um controle falhou, como descobrimos e o que fizemos?**
Lembrem uma falha recente. Foi achada por testes, por um incidente ou por um auditor? Discutam como seria um ciclo mais forte. Incluam como a pessoa que a achou foi tratada.

**6. Quais riscos aceitamos, e quando revemos essa decisão?**
Listem os riscos aceitos e as datas de revisão. Conferam que cada um tem um responsável e um motivo. Risco aceito sem data de revisão é um risco que ninguém está vigiando.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega são donas da maior parte do risco operacional. Devem manter uma lista curta de seus próprios riscos, discuti-los no planejamento e na revisão e embutir controles no pipeline para que a evidência seja automática. Ganham com rotas de mudança baseadas em risco que deixam as mudanças de baixo risco fluir e devem ser honestas sobre o que pode dar errado.

### Equipes de serviço e operações

As equipes de operações conduzem os controles: backups, monitoramento, revisões de acesso e testes de recuperação. Devem guardar evidências de operação, testar os controles em um ciclo regular e levantar cedo as violações de indicadores. Arcam com o custo dos controles pesados e devem dizer quais agregam pouco.

### Liderança e governança

Os líderes definem o apetite de risco e decidem quanto atrito é aceitável. Devem pedir uma lista curta dos principais riscos com responsáveis e evidências, acolher classificações vermelhas, financiar o teste de controles e apoiar a garantia independente. A governança deve conferir se o registro reflete incidentes e quase acidentes e não deve premiar relatórios de aparência arrumada.

### Clientes e usuários

Os usuários arcam com as consequências dos riscos que se materializam e muitas vezes sabem deles antes do registro. Devem ter um meio de sinalizar preocupações e ser informados dos riscos que os afetam, dentro dos limites da confidencialidade. A experiência deles com incidentes e mudanças é evidência para as revisões de riscos.

## Na prática: um exemplo de gestão de serviços

O grupo digital de uma concessionária nacional de energia opera o faturamento de clientes, um aplicativo móvel e integrações com as operações da rede. Os números abaixo são ilustrativos.

O registro de riscos do grupo tem 340 entradas, limpas pela última vez há três anos. A atualidade da revisão de riscos é de 22%, e 61 riscos têm responsáveis que já saíram. A matriz mostra 85 riscos em vermelho, e ninguém lê o relatório. A nova chefe de garantia de serviços propõe um recomeço. Com as equipes de entrega, ela corta o registro aos riscos que mudariam uma decisão, terminando com 38. Atribui cada um a um responsável nomeado na equipe que pode agir, e eles confirmam. Escolhe 12 controles-chave e testa a operação de cada um, em vez de rever o projeto. Cinco falham: duas restaurações de backup nunca tinham sido testadas, uma revisão de acesso fora pulada e duas aprovações de mudança tinham sido assinadas sem evidência de teste.

A equipe corrige as falhas e substitui o comitê de aprovação de mudanças para mudanças padrão por rotas baseadas em risco. Testes automatizados e revisão por pares são os controles, e o pipeline anexa a evidência ao registro da mudança. Cada risco importante ganha um ou dois indicadores antecedentes com limites e respostas. Para o risco de interrupção prolongada do faturamento, os indicadores são a idade da vulnerabilidade crítica mais antiga e o número de restaurações de backup que falharam no trimestre. O primeiro trimestre mostra os responsáveis confirmando todos os 38 riscos, atualidade de revisão de 91%, uma taxa de eficácia dos controles de 7 de 12 no primeiro teste e 12 de 12 após as correções, e um tempo mediano de resposta a violações de KRI de 2 dias. A parcela de mudanças por rotas baseadas em risco é de 64%.

O diretor de riscos pede que o número de riscos vermelhos caia pela metade em um ano. A chefe de garantia de serviços propõe acompanhar a pontualidade dos planos de tratamento e a eficácia dos controles e explica que a contagem de riscos vermelhos pode cair por reclassificação e que ela preferiria ver classificações vermelhas honestas. A decisão é registrada, e o relatório do trimestre seguinte inclui as decisões amostradas por trás de cada rebaixamento.

## Ágil, IA, automação e análise

### Ágil

Mantenha vivo o registro de riscos com conversas regulares com as partes interessadas em vez de uma revisão anual. O cuidado é que pontuar com números pode fazer a incerteza parecer arrumada.

### IA

Os sistemas de IA precisam de entradas no registro de riscos com um responsável, um ponto de revisão humana e uma data de revisão. Meça a eficácia dos controles de supervisão da IA testando-a. O cuidado é que uma política que diz que um humano revê a saída não é um controle até alguém testá-la.

### Automação

Automatize as verificações de controles onde possam ser testadas e meça a automação pelas verificações que falharam e que foram puladas. O cuidado é que um controle automatizado que passa pode estar testando a coisa errada.

### Análise

Relate a cobertura e a eficácia dos testes de controles com o tamanho da amostra. A decisão informada é quais controles reforçar. O cuidado é que amostras pequenas e pontuação subjetiva limitam a precisão; por isso diga isso.

## Olhar setorial

**Startup.** Os riscos tratam sobretudo de ficar sem dinheiro, perder pessoas-chave e uma grande interrupção. Mantenha uma lista de uma página com os cinco principais, reveja-a mensalmente e teste backups e restaurações. Embuta controles no pipeline desde o início, já que são mais baratos que o reforço posterior.

**Pequena empresa.** Um punhado de riscos domina: dependência de pessoa-chave, fornecedor único, ransomware e perda de dados. Mantenha uma lista curta com responsáveis, teste restaurações e mantenha atuais o seguro e os dados de contato. Resista a arcabouços pesados e tome emprestado deles o que couber.

**Grande empresa.** A escala pede uma taxonomia comum, uma ferramenta leve de registro e as três linhas de defesa na prática. Faça a primeira linha ser dona de seus riscos, mantenha a segunda linha pequena e consultiva e torne eficiente o teste independente. Evite testes duplicados entre auditoria, riscos e conformidade.

**Governo e setor público.** A gestão de riscos costuma ser um dever formal, com arcabouços padronizados, comitês de auditoria e relato público. Alinhe-se ao arcabouço exigido, documente as declarações de apetite de risco e guarde evidências. A responsabilização pública torna mais valiosas as classificações vermelhas honestas e também mais difíceis (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são o tempo dos responsáveis para rever os riscos, o esforço para definir os controles-chave e testá-los, as ferramentas para o registro e o monitoramento de indicadores, se ainda não existirem, e o custo da garantia independente. Automatizar a coleta de evidências exige esforço de engenharia e depois reduz o custo recorrente.

Os retornos são menos surpresas, aprovação de mudanças mais rápida e leve e garantia mais crível. Um registro podado e rotas de mudança baseadas em risco economizam o tempo que grandes órgãos de aprovação consumiam. Os testes de controles que falham, achados antes de um incidente, previnem perdas difíceis de precificar. Construa o argumento com os seus próprios dados: o tempo gasto por aprovação de mudança antes e depois, o número de falhas de controle achadas por testes contra as achadas por incidentes ou auditores e o custo de incidentes passados que um controle teria prevenido. Evite citar estatísticas de perdas do setor sem uma fonte e um método rastreáveis.

## Antipadrões e armadilhas

- **Um registro que cresce para sempre.** Ninguém o lê. Pode-o aos riscos que importam.
- **Classificações sem evidência.** São opiniões em cores. Anexe evidências e faixas.
- **Responsáveis só no nome.** O risco fica com quem não pode agir. Confirme a responsabilidade com as pessoas certas.
- **Testar o projeto e chamar de garantia.** Um controle que poderia funcionar pode não ter funcionado. Teste a operação.
- **Relatar só a contagem de riscos vermelhos.** As contagens caem por reclassificação. Olhe os tratamentos e os resultados dos controles.
- **Comitês de aprovação para toda mudança.** Atrasam as mudanças pequenas e ensinam a agrupar. Use rotas baseadas em risco.
- **Punir classificações vermelhas.** Os riscos passam então a ser escondidos. Premie o alerta precoce.
- **Culturas separadas de riscos e de entrega.** O trabalho de riscos feito às equipes, e não com elas, produz teatro de conformidade.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Registro e responsabilidade | Lista longa e obsoleta | O registro existe, parcialmente atribuído | Registro curto com responsáveis da primeira linha confirmados e datas de revisão | Revisões nas conversas das equipes; evidências e faixas anexadas | Riscos compartilhados entre equipes e fornecedores com responsáveis conjuntos |
| Controles | Presumidos como funcionais | Projeto documentado | Controles-chave nomeados; testes de operação em um ciclo | Falhas acompanhadas; evidência automatizada onde possível | Monitoramento contínuo de controles com supervisão humana e garantia independente |
| Decisões e mudança | Aprovações por comitê | Algumas mudanças padrão pré-aprovadas | Rotas baseadas em risco com evidência anexada | Indicadores com limites e decisões registradas; rotas ajustadas pelos resultados | Decisões de risco embutidas nos pipelines em toda a organização e na cadeia de suprimentos |

## Lista de verificação

- [ ] O registro é curto, com riscos escritos na forma causa, evento e consequência.
- [ ] Todo risco tem um responsável da primeira linha confirmado que pode agir.
- [ ] Os riscos são revistos dentro das conversas regulares da equipe.
- [ ] Os controles-chave são nomeados e testados quanto à operação em um ciclo declarado.
- [ ] As falhas de controle são registradas, explicadas e corrigidas.
- [ ] Cada risco importante tem um ou dois indicadores antecedentes com limites e respostas.
- [ ] As decisões nas violações de indicadores são registradas.
- [ ] Existem rotas de mudança baseadas em risco, com evidência anexada automaticamente onde possível.
- [ ] Os riscos aceitos têm um responsável, um motivo e uma data de revisão.
- [ ] Incidentes e quase acidentes atualizam o registro.

## Prompts de IA

**Reescreva riscos em uma forma padrão.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Projete um teste de controle.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Proponha indicadores antecedentes para um risco.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Revise um processo de aprovação de mudanças.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de risco ou de controle.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de risco traz seu vetor de manipulação, sua barreira de proteção e sua regra de evidência.

## Ideias-chave

- Mantenha o registro de riscos curto, atribuído às equipes que podem agir e revisto em conversas que já existem.
- Teste se os controles-chave operam, trate as falhas como informação útil e automatize a evidência.
- Use poucos indicadores antecedentes com limites, respostas e decisões registradas.
- Substitua a aprovação generalizada por rotas de mudança baseadas em risco, sustentadas por evidência automatizada.
- Mostre faixas e evidências em vez de falsa precisão e use as matrizes para iniciar conversas.
- Torne seguro dar classificações vermelhas e aprenda com perdas e quase acidentes.

## Referências e leituras complementares

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Gestão de riscos](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Registro de riscos](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Controle interno](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Indicador-chave de risco](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Matriz de risco](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Teoria do cisne negro](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
