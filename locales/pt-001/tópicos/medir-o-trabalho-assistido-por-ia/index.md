# Medir o trabalho assistido por IA

**Julgue o trabalho assistido por IA pelo que sobrevive à revisão, à produção e ao próximo contato do usuário, e não pela rapidez com que apareceu, e continue observando se as pessoas que o fazem ainda estão aprendendo.**

## Visão geral e motivação

Quando uma equipe usa ferramentas de IA todos os dias, a pergunta central muda de "devemos?" para "o que estamos obtendo?". O tópico anterior estabeleceu os fundamentos: linhas de base, comparações e custo total (veja o tópico 10.1, A IA na medição da gestão de serviços). Este tópico entra no próprio trabalho. Como saber se o código, os tickets, os documentos e as decisões assistidos por IA são tão bons quanto, melhores ou piores que o trabalho que substituem, e o que acontece com as pessoas que o fazem?

A assistência de IA toca muitos tipos de trabalho. Na entrega de software, as ferramentas sugerem ou geram código, testes, mensagens de commit e comentários de revisão. Nas operações de serviço, resumem incidentes, propõem causas, redigem respostas e escrevem artigos de conhecimento. Na análise, produzem relatórios e consultas. O traço comum é que produzir uma primeira versão plausível fica barato. Os custos se deslocam para outros lugares: ler e julgar a saída, corrigir o que está errado, manter o que foi gerado e aprender o suficiente para saber a diferença.

Vários efeitos tornam a medição complicada.

- **As contagens de produção enganam.** As [linhas de código](https://en.wikipedia.org/wiki/Lines_of_code) sempre foram uma medida ruim de produtividade, e o código gerado a piora. Mais código é mais para ler, testar e manter. Contagens de linhas geradas, sugestões aceitas ou rascunhos dizem pouco sobre valor.
- **A revisão vira o gargalo.** A [revisão de código](https://en.wikipedia.org/wiki/Code_review) e a revisão de outros trabalhos gerados levam tempo, e um fluxo de mudanças maiores e mais frequentes pode sobrecarregar os revisores. Os [pull requests](https://en.wikipedia.org/wiki/Pull_request) grandes são mais difíceis de revisar bem, e um revisor sobrecarregado tem mais chance de aprovar o que não entendeu. As medidas de revisão e de fluxo vistas antes continuam essenciais (veja o tópico 2.7, Métricas de pull requests e revisão de código).
- **Os problemas de qualidade chegam tarde.** O código gerado pode passar nos testes hoje e carregar [código duplicado](https://en.wikipedia.org/wiki/Duplicate_code), estrutura pouco clara ou defeitos ocultos que surgem como custo de manutenção, uma forma de [dívida técnica](https://en.wikipedia.org/wiki/Technical_debt). As medidas tomadas no momento da criação os perdem. Olhe o que acontece com o trabalho depois.
- **As habilidades podem mudar.** Depender de uma ferramenta para tarefas que antes se fazia por conta própria é uma forma de [descarga cognitiva](https://en.wikipedia.org/wiki/Cognitive_offloading), que pode liberar atenção para problemas mais difíceis ou levar à [perda de habilidades (deskilling)](https://en.wikipedia.org/wiki/Deskilling) se o entendimento subjacente se esvai. Ambos são possíveis, e o resultado depende de como as ferramentas são usadas. Isso importa para as pessoas envolvidas e para a capacidade da equipe de lidar com as situações que a ferramenta não resolve.

A evidência sobre o efeito da assistência de IA na produtividade ainda está se desenvolvendo e varia com a tarefa, a experiência do usuário, a ferramenta e o cenário. Alguns estudos controlados de tarefas de programação acharam conclusão mais rápida em tarefas bem definidas, e outros estudos e relatos acharam ganhos menores ou nulos, ou custos adicionais, para pessoas experientes trabalhando em sistemas complexos que conhecem bem. Este livro não oferece um número. A posição responsável para uma equipe é medir o próprio trabalho, com linhas de base e comparação, e tratar qualquer cifra publicada como um estudo em um contexto particular.

A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) é especialmente importante aqui, porque a pressão para mostrar ganhos é forte e os números fáceis são os enganosos. As medidas abaixo seguem o que sobrevive, e não o que é produzido (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Meça o que sobrevive.** Retenção, retrabalho e defeitos escapados dizem mais que a produção.
- **Observe a revisão.** O fluxo do trabalho assistido por IA é limitado por quão bem as pessoas conseguem lê-lo.
- **Compare semelhante com semelhante.** O trabalho assistido e o não assistido devem ser semelhantes em tipo e dificuldade.
- **Olhe depois, além de agora.** Os problemas de qualidade e os custos de manutenção aparecem semanas ou meses depois da criação.
- **Mantenha o entendimento no circuito.** Quem entrega o trabalho deve conseguir explicá-lo.
- **Proteja as habilidades e o aprendizado.** Perceba o que as pessoas ainda conseguem fazer sem a ferramenta.
- **Agregue; não monitore indivíduos.** Os dados sobre quem usa IA e como servem para melhorar o processo, e não para classificar pessoas.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de retenção | Proporção das mudanças assistidas por IA que permanecem substancialmente inalteradas após um período declarado | mudanças assistidas por IA com menos de uma parcela definida modificada ou revertida após 30 dias / mudanças assistidas por IA integradas há 30 dias | porcentagem | Histórico do controle de versão cruzado com marcações de assistência, no nível da equipe | Gestão de releases e implantação; habilitação de mudanças | Trabalho que se sustenta; baixo retrabalho | Mensal |
| Retrabalho pós-integração | Proporção das mudanças que exigem uma correção posterior em um período curto, para mudanças assistidas e de comparação | mudanças com uma correção posterior ligada em 14 dias / mudanças integradas, por grupo | porcentagem | Controle de versão, rastreador de problemas, registros de mudanças | Habilitação de mudanças; gestão de problemas | Defeitos escapados; retrabalho | Mensal |
| Carga de revisão | Esforço do revisor por mudança, para mudanças assistidas e de comparação | mediana e 85º percentil do tempo de revisão e das rodadas de revisão por mudança, por grupo | horas; rodadas | Registros de data e hora da ferramenta de revisão, agregados por equipe | Gestão de releases e implantação | Revisão como feedback e aprendizado | Mensal |
| Taxa de defeitos escapados | Defeitos encontrados em produção por mudança, para mudanças assistidas e de comparação | defeitos encontrados após o release atribuídos a uma mudança / mudanças liberadas, por grupo | defeitos por mudança | Rastreador de defeitos ligado às mudanças | Gestão de incidentes; gestão de problemas | Qualidade do que é liberado | Trimestral |
| Taxa de aprovação na verificação de explicação | Proporção das mudanças assistidas por IA amostradas cujo autor consegue explicar a abordagem e suas compensações na revisão | mudanças amostradas em que o autor explicou a contento do revisor / mudanças amostradas | porcentagem | Notas de revisões amostradas | Gestão do conhecimento; habilitação de mudanças | Entendimento compartilhado do código | Trimestral |
| Qualidade do suporte assistido | Taxa de reabertura e satisfação do usuário para respostas de suporte assistidas por IA comparadas com as não assistidas | tickets assistidos reabertos / tickets assistidos, e avaliações favoráveis / avaliações, por grupo | porcentagem | Ferramenta de ITSM, pesquisa | Central de serviços; gestão de incidentes | Qualidade dos resultados de serviço | Mensal |
| Nota de confiança sem a ferramenta | Nota da equipe sobre a confiança para fazer tarefas-chave sem a ferramenta | nota média e dispersão em uma escala combinada, por equipe | pontos de escala | Pulso anônimo da equipe | Gestão da força de trabalho e dos talentos; gestão do conhecimento | Capacidade e aprendizado da equipe | Trimestral |

Marque a assistência de IA de modo confiável no nível da equipe, por logs da ferramenta ou por uma convenção leve, e declare como as mudanças de comparação são escolhidas: semelhantes em tamanho, área e risco. A retenção mede mudança substancial, com um limite definido no registro. O retrabalho pós-integração liga uma correção posterior à mudança original por uma regra declarada. A carga de revisão é o esforço do revisor, e não do autor, e inclui apenas o tempo ativo de revisão onde mensurável. Nunca se relatam dados em nível individual. As amostras para a verificação de explicação são escolhidas ao acaso, e a verificação é uma conversa para apoiar o aprendizado, e não um teste de uma pessoa.

## Recomendações

### Acompanhe o trabalho depois de criado

**1. Acompanhe o que acontece com o trabalho assistido ao longo do tempo.** Para o código, acompanhe as mudanças por semanas após a integração: ficam, são corrigidas ou revertidas? Para o suporte, acompanhe os tickets após a resposta: são reabertos ou seguidos de contatos repetidos? Para os documentos, confira se são usados, corrigidos ou ignorados. A retenção e o retrabalho são sinais simples e difíceis de forjar da qualidade.

**2. Compare com trabalho semelhante não assistido.** Escolha trabalho de comparação de tamanho, risco e área semelhantes, do mesmo período. A dificuldade importa: as pessoas podem usar IA em tarefas fáceis, o que bajularia a ferramenta, ou em difíceis, o que a puniria. Declare como as tarefas passam a ser assistidas e ajuste ou ressalve conforme o caso. Uma comparação pequena e honesta vale mais que uma grande e confundida (veja o tópico 6.5, Realização de valor e resultados de negócio).

**3. Inclua as medidas posteriores no conjunto padrão.** Pareie qualquer medida de velocidade com a taxa de falha de mudanças, os defeitos escapados e as medidas de estabilidade já em uso (veja o tópico 2.8, Métricas DORA). Um ganho de velocidade com estabilidade em queda é uma transferência de custo para as operações e os usuários. Relate o par junto.

### Mantenha significativa a revisão

**4. Observe a carga e o tamanho da revisão.** Meça o tempo de revisão, as rodadas de revisão e o tamanho das mudanças para o trabalho assistido e o não assistido. Se as mudanças assistidas são maiores ou mais numerosas, os revisores podem estar sobrecarregados. Defina normas de tamanho de mudança e limite a quantidade de material gerado que pode entrar em uma revisão. A capacidade de revisão faz parte da capacidade do sistema (veja o tópico 2.3, Trabalho em andamento e teoria das filas).

**5. Peça aos autores que expliquem.** Faça do hábito que o autor de uma mudança consiga explicar o que ela faz, por que essa abordagem e quais são as compensações. Uma breve conversa de apoio na revisão basta. Amostre verificações de explicação trimestralmente para ver se o entendimento acompanha a produção. Onde os autores não conseguem explicar, trate isso como um sinal para desacelerar e aprender, e não como uma falha da pessoa.

**6. Proteja-se contra o viés de automação.** Estimule os revisores a ler o trabalho assistido com tanta crítica quanto qualquer outro. Alterne os revisores, ocasionalmente plante problemas conhecidos em uma mudança de teste para conferir a detecção e mantenha a amostragem das saídas por revisores independentes. Uma taxa de aceitação muito alta com retrabalho crescente é um alerta (veja o tópico 10.1, A IA na medição da gestão de serviços).

### Cuide da qualidade e da manutenção

**7. Monitore a estrutura do código e do sistema.** Acompanhe a duplicação, a complexidade, a cobertura de testes e a taxa de mudança nas áreas onde a assistência é intensa. Use as medidas que você já tem para [teste de software](https://en.wikipedia.org/wiki/Software_testing) e saúde do código e olhe as tendências. Duplicação crescente ou eficácia de testes em queda podem sinalizar que o código gerado está sendo aceito sem integração ao projeto. A cobertura de [testes de regressão](https://en.wikipedia.org/wiki/Regression_testing) é uma rede de segurança, e sua força importa mais quando o volume de mudança sobe.

**8. Trate com cuidado os testes gerados.** A IA pode escrever muitos testes depressa, e os testes podem passar sem checar nada significativo. Amostre testes gerados quanto ao valor e meça a eficácia dos testes por métodos como o de se os testes falham quando o comportamento é deliberadamente quebrado. Não conte os testes escritos como medida de qualidade.

**9. Observe a qualidade do suporte assistido.** Para a central de serviços e as operações, meça a taxa de reabertura, os contatos repetidos, a satisfação e a exatidão das respostas amostradas das respostas assistidas contra as não assistidas. Uma resposta mais rápida que manda o usuário de volta é mais lenta no total. Leia os comentários dos usuários sobre as respostas assistidas e veja se os usuários sabem que estão lidando com IA onde isso importa (veja o tópico 6.1, Métricas de satisfação do cliente).

### Proteja as pessoas e as habilidades

**10. Perceba o que as pessoas ainda conseguem fazer.** Pergunte às equipes quão confiantes estão para fazer tarefas-chave sem a ferramenta e acompanhe a tendência. Use prática ocasional sem a ferramenta, programação em par e revisões do projeto subjacente para manter vivas as habilidades. Proteja particularmente o aprendizado dos membros mais novos da equipe, que podem usar a ferramenta antes de construir os modelos mentais em que os colegas experientes se apoiam para julgá-la (veja o tópico 9.4, Métricas de habilidades e aprendizado).

**11. Mantenha dados sobre pessoas fora da avaliação.** Agregue no nível da equipe. Não relate quais indivíduos mais usam IA e não use o uso, a taxa de aceitação nem o volume gerado em avaliações de desempenho. Torne as regras conhecidas. A confiança é necessária para relatos honestos do que funciona e do que não funciona.

**12. Revisite regularmente.** As ferramentas, os modelos e as práticas mudam em meses. Refaça a comparação quando a ferramenta ou o modo de trabalhar mudar. Compartilhe os achados, incluindo que uma ferramenta não ajudou aqui, e aposente os usos que já não merecem seu lugar.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de retenção | Evitar mudanças necessárias para manter o número alto; marcar como assistidas só as mudanças bem-sucedidas | Marcar por logs da ferramenta, e não por escolha do autor; parear com defeitos escapados e retrabalho |
| Retrabalho pós-integração | Corrigir em outro ticket ou em uma nova mudança não ligada; adiar correções para além da janela | Regra de ligação no registro; olhar uma janela mais longa; defeitos em produção |
| Carga de revisão | Revisões apressadas que reduzem o tempo medido; aprovações sem comentários | Amostra da profundidade da revisão; defeitos escapados; pesquisa com revisores |
| Taxa de defeitos escapados | Não atribuir defeitos a mudanças; reclassificar defeitos como melhorias | Regra de atribuição; amostra independente da classificação de defeitos |
| Taxa de aprovação na verificação de explicação | Autores ensaiando para a verificação; revisores lenientes | Amostras aleatórias e sem aviso; alternar revisores; focar nas razões de projeto |
| Qualidade do suporte assistido | Assistir só os tickets fáceis; treinar os usuários a avaliar bem | Casar tickets por tipo e dificuldade; taxa e composição das respostas; ler os comentários |
| Nota de confiança sem a ferramenta | Notas infladas para evitar escrutínio; notas baixas para argumentar por mais ferramentas | Anonimato; comparar com a prática observada em simulacros; ler os comentários |

Uma leitura saudável é trabalho assistido que permanece no lugar tão frequentemente quanto o não assistido, retrabalho e defeitos escapados que igualam ou superam a comparação, revisão que continua profunda, autores que conseguem explicar o que entregam, suporte assistido que não volta e equipes que continuam confiantes em suas próprias habilidades.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medir o volume de produção | Fácil | Premia o volume; não diz nada sobre valor |
| Medir retenção e retrabalho | Reflete a qualidade ao longo do tempo | Atrasada; exige ligar registros |
| Comparação controlada | Crível | Exige esforço; pode ser impraticável |
| Comparação observacional | Barata | Confundida pela seleção de tarefas |
| Verificações obrigatórias de explicação | Mantêm o entendimento | Podem parecer um teste; acrescentam esforço |
| Verificações leves por amostragem | Baixo ônus | Podem perder padrões |
| Fortes restrições ao uso de IA | Controle do risco | Benefício perdido; uso sombra |
| Uso aberto com medição | Aprendizado e benefício | Exige confiança e disciplina |

A resposta pragmática é permitir o uso dentro de regras claras, medir o que sobrevive, amostrar o entendimento, proteger a capacidade de revisão e as habilidades e manter os dados sobre pessoas fora da avaliação.

## Perguntas para discutir com sua equipe

**1. Quanto do que a IA nos ajudou a produzir no último trimestre ainda está no lugar, inalterado, e como sabemos?**
Olhem a retenção e o retrabalho das mudanças assistidas contra um conjunto comparável. O facilitador deve registrar quão difícil foi responder. Combinem como marcar e ligar os registros para que a resposta seja fácil no próximo trimestre.

**2. A revisão está acompanhando, e o que acontece quando não está?**
Olhem os tempos, as rodadas e os tamanhos das revisões. Perguntem aos revisores o que sentem sobre as mudanças assistidas. Discutam limites de tamanho e modos de dividir a carga. Combinem uma norma para experimentar.

**3. Cada um de nós conseguiria explicar a última mudança que entregou com ajuda de IA e suas compensações?**
Tentem em duplas. Notem onde a explicação foi fácil e onde foi difícil. Discutam o que isso diz sobre o nosso uso da ferramenta e como manter alto o entendimento.

**4. O que ainda conseguimos fazer bem sem a ferramenta, e para o que estamos perdendo o jeito?**
Listem as tarefas-chave, avaliem a confiança com honestidade e planejem alguma prática sem a ferramenta ou programação em par. A conversa também revela o que as pessoas valorizam em seu trabalho e querem manter.

**5. Onde a IA mais nos ajudou e onde menos, e o que esses lugares têm em comum?**
Comparem exemplos. Procurem características como tarefas bem definidas, bons testes ou domínios familiares. Usem os achados para guiar onde usar a ferramenta.

**6. O que mediríamos se não confiássemos nas nossas primeiras impressões?**
Peçam ao grupo que nomeie a evidência que mudaria sua opinião sobre a ferramenta, em qualquer direção. Usem as respostas para definir a próxima comparação.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega têm a experiência do dia a dia e os resultados de qualidade. Devem marcar o trabalho assistido, observar a retenção e o retrabalho, manter significativa a revisão e manter o próprio entendimento. Devem se manifestar quando o volume de mudança gerada superar sua capacidade de revisá-lo.

### Equipes de serviço e operações

As equipes de operações usam IA para resumos, diagnóstico e respostas e herdam os problemas de qualidade que escapam. Devem amostrar as saídas, comparar as taxas de reabertura e de contatos repetidos e manter clara a responsabilidade humana pelas ações em produção. Devem ajudar a definir onde a IA não deve agir sem uma pessoa.

### Liderança e governança

Os líderes enfrentam pressão para mostrar ganhos e podem ser tentados por métricas de uso e de produção. Devem insistir em medidas de retenção, retrabalho e estabilidade ao lado da velocidade, financiar a capacidade de revisão, proteger o desenvolvimento de habilidades e resistir a classificar pessoas. A governança deve esperar comparações e ressalvas nos relatórios de benefício de IA.

### Clientes e usuários

Os usuários recebem os resultados: o código que roda seus serviços, as respostas às suas requisições, os documentos em que confiam. Ganham quando a qualidade se mantém e sofrem quando não. Devem poder alcançar uma pessoa, e o feedback deles sobre as interações assistidas é a evidência-chave da qualidade.

## Na prática: um exemplo de gestão de serviços

O grupo digital de uma companhia aérea europeia tem seis equipes de produto que constroem e operam software de reservas e de operações. As equipes começaram a usar um assistente de programação com IA há um ano, e o painel do grupo relata que 38% das linhas integradas são geradas por IA. Os números abaixo são ilustrativos.

A chefe de excelência em engenharia está desconfortável com esse painel. Pede a três equipes que marquem as mudanças assistidas pelos logs da ferramenta, somente no nível da equipe, e escolham mudanças de comparação de tamanho e área semelhantes. Ao longo de um trimestre, o tempo mediano do primeiro commit à integração é menor para as mudanças assistidas, 1,4 dia contra 2,0. A taxa de retenção das mudanças assistidas após 30 dias é de 81% contra 90% das mudanças de comparação, e 12% das mudanças assistidas precisaram de uma correção posterior em 14 dias contra 7%. A carga de revisão conta a mesma história: o tempo mediano de revisão por mudança é 35% maior para as mudanças assistidas, e o 85º percentil do tamanho das mudanças cresceu. Os defeitos escapados por 100 mudanças são um pouco maiores para as mudanças assistidas, embora a amostra seja pequena e a diferença esteja dentro da variação normal. Uma amostra de 40 mudanças assistidas mostra que em 31 o autor conseguiu explicar bem a abordagem e suas compensações, em 6 em parte e em 3 de modo nenhum, sobretudo em áreas de código novas para o autor. Na central de serviços, as respostas assistidas tiveram uma taxa de reabertura de 7% contra 6% nas não assistidas, com satisfação semelhante. Em um pulso da equipe, os engenheiros mais novos avaliam sua confiança para implementar funcionalidades centrais sem a ferramenta em 2,6 de 5, contra 4,1 para engenheiros com mais de três anos no grupo.

A chefe de excelência em engenharia leva os resultados às equipes e não as classifica. As equipes combinam quatro mudanças. Limites de tamanho de mudança e um rodízio de revisão protegem os revisores. Os autores explicam brevemente as mudanças assistidas na revisão. Os engenheiros mais novos fazem par com os experientes nas funcionalidades centrais, e um exercício mensal sem a ferramenta mantém as habilidades em prática. O painel abandona a parcela de linhas geradas e mostra retenção, retrabalho, carga de revisão e defeitos escapados, assistidos contra a comparação. Três meses depois, a diferença de retenção se estreita para 4 pontos, as correções posteriores caem para 8% e a verificação de explicação melhora. Um vice-presidente pede que a parcela de linhas geradas seja uma meta para todas as equipes. A chefe de excelência em engenharia explica os achados e propõe continuar acompanhando os resultados, acrescentando que os ganhos são reais em algumas tarefas e não em outras e que a equipe decidirá onde usar a ferramenta. A decisão é registrada.

## Ágil, IA, automação e análise

### Ágil

Um ritmo sustentável e pessoas motivadas incluem proteger o entendimento; por isso reveja o trabalho assistido por IA com a equipe em um ritmo regular e olhe o que sobreviveu. O cuidado é que medir o uso individual de IA transforma uma prática da equipe em vigilância.

### IA

Julgue o trabalho assistido por IA pelo que sobrevive à revisão e à produção e por se as pessoas ainda entendem o que entregam. Pareie a retenção e o retrabalho com uma verificação de explicação e uma nota de confiança sem a ferramenta e mantenha os dados no nível da equipe. O cuidado é que rascunhos rápidos deslocam o esforço para os revisores; por isso meça também a carga de revisão.

### Automação

Marque automaticamente as mudanças assistidas por IA onde a ferramenta permitir e meça a marcação pela cobertura, já que o trabalho não marcado quebra a comparação. O cuidado é que as marcações automáticas podem ser removidas ou perdidas; por isso amostre.

### Análise

Compare o trabalho assistido por IA e o demais nas mesmas medidas, com contagens e incerteza. A decisão informada é onde a ajuda da IA é real e onde acrescenta retrabalho. O cuidado é que os dois grupos de trabalho podem diferir em tipo; por isso evite alegações causais a partir de uma comparação grosseira.

## Olhar setorial

**Startup.** As equipes pequenas podem ganhar muito com a assistência e também acumular dívida oculta depressa. Acompanhe a retenção e o retrabalho desde cedo, mantenha significativos os testes e garanta que as pessoas que manterão o sistema o entendam. Cuidado com entregar código que ninguém sabe explicar.

**Pequena empresa.** A assistência pode esticar uma equipe minúscula. Meça em uma amostra pequena: com que frequência o trabalho assistido precisa de correção depois. Mantenha backups, testes e revisão humana de tudo que for voltado ao cliente e proteja o entendimento do dono sobre os sistemas de que depende.

**Grande empresa.** A escala amplifica ganhos e problemas. Ofereça orientação compartilhada sobre marcação, limites de revisão e medidas, compare entre equipes com cuidado e sem classificar e invista em capacidade de revisão e de testes. Inclua no pipeline a revisão de segurança e de licenças do código gerado (veja o tópico 7.2, Métricas de ativos de software e licenças).

**Governo e setor público.** Os sistemas públicos têm vida longa, responsabilização estrita e altas consequências para o erro. Exija responsabilidade humana rastreável, testes cuidadosos e documentação de como a IA foi usada. Registre o trabalho assistido nos registros de mudanças e avalie riscos à justiça e à segurança (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são a ferramenta e as cobranças por uso, o esforço de marcar e ligar os registros, o tempo de revisar e corrigir, os testes extras e o treinamento. Um estudo de comparação leva tempo, mas é barato em relação a uma decisão errada de escalar ou de proibir.

Os retornos são reais onde a assistência reduz o esforço sem reduzir a qualidade e se perdem onde ela move esforço para revisão, retrabalho e manutenção. Construa o argumento a partir das suas próprias medidas: tempo até uma mudança integrada e retida, retrabalho e defeitos escapados contra a comparação, carga de revisão e satisfação de usuários e pessoal. Evite usar cifras publicadas de produtividade como sua estimativa. Lembre os custos ocultos: entendimento reduzido, perda de habilidades e dívida técnica. Seja honesto quanto à incerteza (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Contar linhas geradas ou sugestões aceitas.** Premiam o volume. Meça o que sobrevive.
- **Comparar trabalho assistido em tarefas fáceis com trabalho não assistido em tarefas difíceis.** O resultado bajula ou pune a ferramenta. Case as tarefas.
- **Deixar a capacidade de revisão ficar para trás.** A qualidade cai em silêncio. Limite o tamanho das mudanças e proteja os revisores.
- **Pular as medidas posteriores.** O custo aparece depois. Acompanhe retrabalho, defeitos e estabilidade.
- **Tratar testes gerados como qualidade.** Podem passar sem checar nada. Teste os testes.
- **Ignorar as habilidades.** O entendimento se esvai sem ser notado. Acompanhe a confiança sem a ferramenta e a prática.
- **Monitorar indivíduos.** Gera medo e esconde problemas. Mantenha os dados no nível da equipe.
- **Declarar vitória num estudo curto e pequeno.** Refaça-o à medida que as ferramentas e práticas mudam.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Medir o que sobrevive | Contagens de produção | Impressões informais de qualidade | Trabalho assistido marcado; retenção e retrabalho acompanhados contra a comparação | Defeitos posteriores, estabilidade e carga de revisão geridos juntos | Evidência entre equipes guia onde se usa a assistência; resultados amplamente compartilhados |
| Revisão e entendimento | Revisão como antes | Preocupação com a sobrecarga | Normas de tamanho de mudança; verificações de explicação amostradas | Capacidade de revisão planejada; viés de automação combatido | Revisão e entendimento embutidos no modo como todas as equipes trabalham com IA |
| Pessoas e habilidades | Não considerado | Anedotas | Confiança sem a ferramenta em pulso; alguma prática | Desenvolvimento de habilidades planejado; tendências geridas | Aprendizado e ofício protegidos em toda a organização; uso de IA co-projetado com o pessoal |

## Lista de verificação

- [ ] O trabalho assistido por IA é marcado no nível da equipe por logs da ferramenta ou por uma convenção leve.
- [ ] O trabalho de comparação de tamanho, área e risco semelhantes está definido.
- [ ] A retenção e o retrabalho pós-integração são acompanhados para o trabalho assistido e o de comparação.
- [ ] Os defeitos escapados e a taxa de falha de mudanças são relatados ao lado de qualquer medida de velocidade.
- [ ] O tempo, as rodadas e o tamanho das revisões são monitorados, com normas de tamanho.
- [ ] Os autores conseguem explicar as mudanças assistidas, e uma amostra é conferida a cada trimestre.
- [ ] Os testes gerados são amostrados quanto ao valor.
- [ ] O suporte assistido é comparado quanto à taxa de reabertura, aos contatos repetidos e à satisfação.
- [ ] A confiança sem a ferramenta é medida em pulso, e a prática sem a ferramenta é planejada.
- [ ] Os dados individuais de uso e de aceitação não são usados na avaliação.

## Prompts de IA

**Planeje uma comparação de mudanças assistidas e não assistidas.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Projete uma verificação de explicação.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Revise as medidas posteriores.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Planeje a prática sem a ferramenta.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma medida de trabalho assistido por IA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma métrica de trabalho assistido por IA mede o que sobrevive e traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Meça o que sobrevive: retenção, retrabalho, defeitos escapados e estabilidade, contra trabalho comparável não assistido.
- Proteja a capacidade de revisão e mantenha a revisão profunda, porque ela limita com que rapidez o trabalho assistido pode fluir com segurança.
- Confira se os autores conseguem explicar o que entregam e perceba se as habilidades estão crescendo ou se esvaindo.
- Amostre os testes e as saídas gerados quanto ao valor real.
- Leia as alegações publicadas de produtividade como estudos isolados e meça o seu próprio trabalho.
- Mantenha os dados individuais de uso fora da avaliação.

## Referências e leituras complementares

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Linhas de código](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Revisão de código](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Código duplicado](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Dívida técnica](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Descarga cognitiva](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Perda de habilidades](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Teste de software](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Teste de regressão](https://en.wikipedia.org/wiki/Regression_testing).
