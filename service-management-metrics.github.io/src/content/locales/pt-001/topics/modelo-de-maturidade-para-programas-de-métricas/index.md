# Modelo de maturidade para programas de métricas

**Use a escala compartilhada de cinco níveis para descrever onde está um programa de métricas e escolher o próximo pequeno passo, nunca como uma pontuação para exibir, comparar ou certificar.**

## Visão geral e motivação

Todo outro tópico deste livro termina com uma pequena tabela de maturidade para o seu assunto. Este tópico aplica a mesma escala ao programa de métricas como um todo. A pergunta não é quão bons são os tempos de incidentes de uma equipe. É quão bem a organização coleta, lê e age sobre medidas, em geral: se as definições são compartilhadas, se os dados são confiáveis, se os números levam a decisões e se as pessoas medidas veem o programa como ajuda.

Um modelo de maturidade é uma descrição de estágios que uma organização pode atravessar à medida que uma prática se desenvolve. O exemplo mais conhecido em software é o [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), que cresceu a partir do trabalho no Software Engineering Institute e se espalhou muito. Sua influência foi grande, e também foi grande a crítica que se seguiu. As organizações perseguiam o nível e não a capacidade, os auditores pontuavam papelada e o modelo passou a ser usado como um distintivo. Um uso responsável de qualquer modelo de maturidade mantém três cautelas à vista. A escala é uma ferramenta de conversa, e não uma certificação. Mais alto nem sempre é melhor, porque o nível certo depende do contexto. E o modelo não substitui os resultados: um programa maduro que não melhora os serviços é um fracasso muito arrumado, e um nível exibido como distintivo se parece muito com uma [métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric), um número que parece bom e não informa nenhuma decisão.

A escala usada aqui é a compartilhada ao longo do livro e do *Service Management Guide*: Iniciar, Desenvolver, Padronizar, Gerenciar e Orquestrar (veja o modelo de maturidade compartilhado na especificação). Deliberadamente não é a mesma das escalas de maturidade de processos do ITIL, da ISO/IEC 33000 ou do Capability Maturity Model, e uma equipe não deve alegar uma pontuação em nenhum desses arcabouços com base nesta.

Os objetivos ágeis apontam como usá-la. A melhoria contínua significa que o modelo serve para achar o próximo passo, e não para chegar a um estado final. A evolução permanente significa que um programa que chegou a Orquestrar no ano passado pode regredir se as pessoas saírem ou as prioridades mudarem; por isso a autoavaliação é repetida. O envolvimento contínuo das partes interessadas significa que a avaliação é feita com as equipes, e não sobre elas. Um ritmo sustentável significa que o programa avança um passo de cada vez e não tenta saltar três níveis em um trimestre. E construir em torno de indivíduos motivados significa que as pessoas que fazem o trabalho julgam se o programa as ajuda. É a mesma lógica da prática de melhoria contínua do ITIL, em que uma organização confere o estado atual, define uma direção e melhora em pequenos passos, um hábito próximo do [kaizen](https://en.wikipedia.org/wiki/Kaizen), a ideia japonesa de melhoria contínua por todos. A ideia mais geral é o [processo de melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process) (veja o tópico 9.5, Métricas de melhoria contínua).

O modelo tem uma armadilha particular no contexto das métricas. Um programa que é avaliado por suas próprias métricas convida à mesma distorção contra a qual adverte. Se o "número de medidas com definições" vira meta, as definições se multiplicam. A abordagem deste tópico usa, portanto, evidências do trabalho (que decisões mudaram, o que as equipes dizem) além de contagens e mantém a avaliação a cargo das equipes, que têm menos a ganhar inflando-a (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas). Um formulário de avaliação complementar para as equipes aparece nos apêndices (veja o tópico 12.5, Autoavaliação de maturidade).

## Princípios-chave

- **A escala é uma ferramenta de conversa.** Ajuda as pessoas a descrever o presente e escolher o próximo passo, e não serve para avaliar, classificar nem certificar.
- **Avalie com as equipes.** A autoavaliação, discutida abertamente, é mais exata que a pontuação externa.
- **Julgue pela evidência.** Pergunte que decisões mudaram, o que as pessoas dizem e o que os dados mostram, além de que documentos existem.
- **As dimensões podem diferir.** Um programa pode ser forte em ferramentas e fraco em confiança. Relate o perfil, e não um número único.
- **Avance um passo de cada vez.** Mire o próximo nível em uma ou duas dimensões, e não em tudo ao mesmo tempo.
- **Mais alto nem sempre é melhor.** Escolha o nível que se ajusta ao tamanho, ao risco e às necessidades da organização.
- **Espere regressão.** A rotatividade de pessoal, a reorganização e a pressão podem empurrar um programa para trás. Reavalie regularmente.
- **Nunca publique uma tabela classificatória de equipes.** Agregue para o programa e compartilhe os resultados das equipes só com a equipe.

## Definições de métricas

As medidas abaixo descrevem a saúde do programa e de sua avaliação. São para a equipe do programa e os patrocinadores e são lidas como sinais para discussão.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Participação na avaliação | Proporção das equipes participantes que concluíram uma autoavaliação com sua própria discussão | equipes que concluíram e discutiram / equipes participantes | porcentagem | Registros das avaliações | Melhoria contínua | Reflexão e retrospectivas | Duas vezes por ano |
| Perfil por dimensão | A distribuição dos níveis autoavaliados das equipes em cada dimensão, mostrada como uma faixa e não como uma pontuação única | contagem de equipes em cada nível, por dimensão | equipes por nível | Autoavaliações, agregadas | Melhoria contínua; governança | Trabalho visível | Duas vezes por ano |
| Ações de melhoria vindas das avaliações | Proporção dos próximos passos combinados que foram concluídos, abandonados com um motivo ou ainda em andamento | ações encerradas ou justificadas / ações combinadas | porcentagem | Registro de melhorias | Melhoria contínua | Pequenos experimentos | Trimestral |
| Evidência de decisão | Proporção das medidas amostradas em que a equipe consegue nomear uma decisão ou escolha deliberada que a medida informou no último trimestre | medidas com uma decisão nomeada / medidas amostradas | porcentagem | Entrevistas com as equipes; notas de revisão | Melhoria contínua | Evidência acima de cerimônia | Trimestral |
| Confiança nas definições e nos dados | Concordância, no nível da equipe, de que as definições são claras e os dados estão corretos | porcentagem que concorda em uma breve pesquisa da equipe; taxa de resposta mostrada | porcentagem | Pesquisa anônima da equipe | Gestão do conhecimento; gestão da informação | Entendimento compartilhado | Duas vezes por ano |
| Tempo até o próximo nível (descritiva) | Tempo decorrido para uma equipe subir uma dimensão em um nível, onde escolheu fazê-lo | mediana de meses do passo combinado à reavaliação da equipe | meses | Histórico das avaliações | Melhoria contínua | Ritmo sustentável | Anual |
| Ônus da avaliação | Horas que a avaliação leva por equipe | mediana de horas por equipe | horas | Estimativas de tempo das equipes | Melhoria contínua | Ritmo sustentável | Duas vezes por ano |

A participação é medida como conclusão com discussão, porque um formulário preenchido sozinho diz pouco. O perfil é uma faixa e nunca é calculado em média para virar um único número de maturidade. O tempo até o próximo nível é descritivo: uma subida rápida pode refletir autopontuação inflada, e uma lenta pode refletir cuidado apropriado. O ônus da avaliação é uma verificação da própria avaliação, que não deve levar mais de uma ou duas horas por equipe.

## Recomendações

### Use bem a escala

**1. Defina as dimensões de um programa de métricas.** Um conjunto viável tem seis dimensões: (a) perguntas e propósito, se as medidas respondem a perguntas que os públicos fizeram; (b) definições e responsabilidade, se as medidas têm definições escritas e responsáveis; (c) dados e ferramentas, se os dados são exatos, oportunos e portáveis; (d) uso nas decisões, se os números informam escolhas; (e) confiança e segurança, se as pessoas acreditam que os dados as ajudam; e (f) revisão e evolução, se o programa se poda sozinho. Seis bastam para ser úteis e são poucas o bastante para discutir em uma hora.

**2. Descreva como é cada nível.** A tabela da seção "Modelo de maturidade" abaixo dá breves descrições de cada dimensão em cada nível. Trate-as como estímulos. Uma equipe deve adaptar a redação ao seu próprio contexto e escrever seus próprios exemplos.

**3. Não faça média.** Uma única pontuação geral esconde o padrão que importa. Um programa com alta maturidade de ferramentas e baixa confiança está em situação diferente da de um com o inverso, e o próximo passo difere. Mostre o perfil.

### Avalie com as equipes, e não sobre elas

**4. Faça disso uma conversa de uma hora.** Reúna uma equipe com a tabela. Peça a cada pessoa que marque, em particular, onde acha que a equipe está em cada dimensão e depois comparem. Discutam as diferenças, porque revelam experiências diferentes do mesmo programa. Combinem uma visão da equipe, registrem a evidência por trás dela e escolham um ou dois próximos passos.

**5. Peça evidência.** Para cada nível alegado, peça um exemplo. "Usamos os números nas decisões" convida à pergunta "Quais decisões no último trimestre?". Use medidas amostradas e entrevistas para conferir. Isso respeita as pessoas e impede que a avaliação derive para o wishful thinking.

**6. Mantenha os resultados com a equipe.** O perfil de uma equipe pertence à equipe. O programa compartilha faixas agregadas e temas comuns, e não uma classificação. Deixe claro que a avaliação não afeta financiamento, posição nem avaliações. Se afetar, as equipes a inflarão e o valor se perderá (veja o tópico 11.3, Implantar métricas sem criar medo).

### Escolha os próximos passos

**7. Escolha a dimensão que limita as outras.** A confiança e a segurança muitas vezes limitam todo o resto: sem elas, os dados são distorcidos e as decisões são suspeitas. As definições e a responsabilidade muitas vezes limitam os dados e o uso. Um padrão comum é fortalecer primeiro a confiança e as definições, depois os dados, depois o uso e a revisão. Procure a dimensão em que uma pequena melhoria destravaria as outras.

**8. Defina um passo pequeno e concreto.** Um próximo passo deve ser um que uma equipe possa concluir em um trimestre e reconhecer: "combinar um estatuto", "escrever definições para nossas quatro medidas", "automatizar dois feeds", "realizar uma revisão mensal em que registramos decisões". Evite passos como "chegar ao Nível 4". Os níveis descrevem um estado, e os passos descrevem trabalho.

**9. Ligue os passos ao registro de melhorias.** Ponha as ações no mesmo lugar que o outro trabalho de melhoria, com responsáveis e datas, e reveja o progresso na conversa regular de melhoria (veja o tópico 9.5, Métricas de melhoria contínua). Um passo que não é financiado nem agendado não vai acontecer.

### Mantenha honesto e leve

**10. Calibre entre equipes sem classificá-las.** Realize uma breve sessão em que as equipes compartilhem exemplos do que chamam de Nível 3 em uma dimensão. Discutam as diferenças de padrão. O objetivo é um entendimento compartilhado, e não pontuações iguais. Alterne o facilitador e convide uma equipe de fora do programa para questionar a redação.

**11. Reavalie num ritmo e em resposta a eventos.** Duas vezes por ano bastam para a maioria dos programas. Reavalie depois de uma reorganização, uma troca de ferramenta ou uma quebra do estatuto, já que esses eventos podem mover a confiança em qualquer direção. Observe a regressão e trate-a como informação, e não como fracasso.

**12. Aposente ou revise o próprio modelo.** A cada ano, pergunte às equipes se as dimensões e as descrições dos níveis ainda servem. Reescreva o que confunde e remova o que ninguém usa. Um modelo que não muda há cinco anos pode estar descrevendo um programa que já não existe.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Participação na avaliação | Preencher formulários para cumprir uma cota; uma só pessoa preenchendo pela equipe | Exigir uma discussão da equipe; pedir a evidência por trás de cada alegação |
| Perfil por dimensão | Inflar níveis para parecer bem; subestimar para receber ajuda | Não ligar a financiamento ou posição; pedir evidência; calibrar abertamente |
| Ações de melhoria vindas das avaliações | Escolher passos triviais para encerrar; encerrar sem fazer | Rever o tamanho e o valor dos passos; conferir os resultados na avaliação seguinte |
| Evidência de decisão | Inventar decisões depois do fato; listar decisões sem consequência | Pedir a data e as pessoas envolvidas; aceitar "escolheu não fazer nada" como decisão |
| Confiança nas definições e nos dados | Treinar os respondentes; baixa resposta escondendo descontentamento | Anonimato e tamanho mínimo de grupo; mostrar as taxas de resposta; conversar diretamente com as equipes |
| Tempo até o próximo nível (descritiva) | Apressar alegações de progresso; esconder regressão | Manter descritiva; ler com evidência; registrar regressões sem penalidade |
| Ônus da avaliação | Pular a discussão para cortar horas | Acompanhar as horas junto com a participação e a qualidade da evidência |

Uma leitura saudável mostra um perfil com uma mistura de níveis, com a confiança e as definições subindo antes das ferramentas e do polimento, próximos passos pequenos e concluídos, decisões que as equipes sabem nomear e um registro honesto de regressões ocasionais.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Autoavaliação da equipe | Honesta, própria, rápida | Subjetiva; exige calibração |
| Avaliação externa | Consistente; independente | Cara; convida a encenar para o avaliador |
| Pontuação geral única | Fácil de comunicar | Esconde o padrão; convida a metas |
| Perfil por dimensão | Mostra onde agir | Mais difícil de resumir |
| Avaliação anual | Leve | Lenta para notar a regressão |
| Duas vezes por ano com gatilhos de eventos | Responsiva | Mais esforço |
| Ligada ao financiamento | Chama atenção | Inflação e manipulação |
| Mantida separada do financiamento | Dados honestos | Exige outros modos de ganhar apoio |

A resposta pragmática é rodar uma autoavaliação leve com evidência, relatar perfis e faixas, manter os resultados com as equipes e ligar os próximos passos ao registro de melhorias, e não ao financiamento nem à posição.

## Perguntas para discutir com sua equipe

**1. Qual das seis dimensões diríamos que é a nossa mais fraca, e o que nos faz dizer isso?**
Peçam a cada pessoa que escolha uma em particular e depois compartilhem. O facilitador deve pedir um exemplo recente. Procurem padrões e combinem qual dimensão limita as outras.

**2. Conseguimos nomear uma decisão do último trimestre que uma medida mudou?**
Listem-nas. Se a lista é curta, perguntem por quê. Discutam se o problema são as medidas, os dados ou o hábito de olhar.

**3. Onde nos colocaríamos em confiança e segurança, e como sabemos?**
Olhem os relatos de quase acidentes, as contestações e os resultados de pesquisas. Comparem com o modo como as pessoas falam na prática. Combinem uma coisa que os líderes poderiam fazer para movê-la.

**4. Como seria um passo seguinte pequeno e concreto para a nossa dimensão mais fraca?**
Redijam-no em uma frase, com um responsável e uma data. Conferam que pode ser concluído em um trimestre. Combinem como saberemos que funcionou.

**5. O que faria esta avaliação parecer uma ameaça, e como evitamos isso?**
Discutam usos dos resultados que as pessoas temeriam. Escrevam para que os resultados nunca serão usados. Conferam que o líder do programa concorda.

**6. Há um nível que não precisamos alcançar?**
Pensem em nosso tamanho, riscos e metas. Descrevam um nível que é bom o bastante por ora e um sinal que nos diria para revisitar.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes se autoavaliam, escolhem o próximo passo e guardam seus resultados. Devem usar a conversa para trazer à tona diferenças de experiência, pedir evidência e definir passos pequenos o bastante para terminar. Devem resistir a qualquer tentativa de transformar o perfil em classificação.

### Equipes de serviço e operações

As equipes de operações carregam cargas pesadas de dados e de incidentes e podem ver onde o programa as apoia ou sobrecarrega. Devem anotar onde as ferramentas ou as definições bloqueiam seu trabalho, pedir que os dados de plantão e de incidentes sejam tratados com cuidado e dar feedback franco sobre o ônus da avaliação.

### Liderança e governança

Os líderes patrocinam o programa e recebem o quadro agregado. Devem pedir perfis e temas comuns, resistir a pedir uma pontuação única, financiar os próximos passos que as equipes escolhem e não ligar financiamento ou posição à avaliação. Devem também dar o exemplo descrevendo decisões que as métricas informaram.

### Clientes e usuários

Os clientes e usuários ganham quando o programa melhora os serviços e quando o feedback deles faz parte das medidas. Onde são parceiros, podem participar da avaliação das medidas que lhes dizem respeito, por exemplo a utilidade das pesquisas de satisfação, e da revisão de como seus dados são usados.

## Na prática: um exemplo de gestão de serviços

Um grupo segurador nacional tem 20 equipes de entrega e suporte e um programa de métricas que roda há 18 meses. O patrocinador pede "uma pontuação de maturidade para cada equipe" para orientar o investimento. A líder do programa desconfia, lembrando como uma pontuação ao estilo de auditoria levou as equipes a preparar pastas de documentos. As cifras abaixo são ilustrativas.

A líder do programa propõe em seu lugar um perfil em seis dimensões, avaliado pelas equipes numa conversa de uma hora com um facilitador de fora da equipe, com os resultados guardados pela equipe. Diz ao patrocinador que o programa relatará faixas e temas comuns e que o perfil de nenhuma equipe será ligado ao financiamento. O patrocinador concorda, e a decisão é registrada.

Dezenove das 20 equipes concluem a avaliação com uma discussão; assim a participação é de 95%. O perfil mostra uma faixa: em perguntas e propósito, a maioria das equipes está no Nível 2 ou 3; em definições e responsabilidade, uma dispersão de 1 a 4; em dados e ferramentas, sobretudo 3; em uso nas decisões, sobretudo 2; em confiança e segurança, uma divisão entre 2 e 4; e em revisão e evolução, sobretudo 1 ou 2. As verificações de evidência são reveladoras. Onze equipes alegaram o Nível 3 em uso nas decisões, mas, quando pedidas a nomear uma decisão do último trimestre que uma medida informou, só seis conseguiram. A líder do programa anota isso sem julgamento, e vira um tema: as equipes têm painéis e raramente realizam revisões que registrem decisões.

Os próximos passos são pequenos. Oito equipes escolhem uma revisão mensal com um registro de decisões. Quatro escolhem escrever definições para suas medidas. Três escolhem combinar um estatuto. Seis meses depois, 14 dos 17 passos combinados estão concluídos, um foi abandonado com um motivo e dois estão em andamento. Uma nova avaliação mostra a evidência de decisão subindo de 38% para 71% das medidas amostradas e a pesquisa de confiança passando de 54 para 67% de concordância. Uma equipe regride em confiança depois de uma reorganização, e o facilitador registra isso como informação, e não como fracasso. Um ano depois, o patrocinador pede de novo uma pontuação única para o relatório anual. A líder do programa oferece um perfil de uma página com faixas, três temas e os passos de melhoria concluídos. O patrocinador aceita, e o relatório declara com clareza que a escala é uma ferramenta de conversa.

## Ágil, IA, automação e análise

### Ágil

Use o modelo como uma conversa nas revisões regulares de melhoria, com a equipe escolhendo seu próprio próximo pequeno passo. O cuidado é que uma pontuação de maturidade exibida em uma parede vira meta.

### IA

Acrescente a lente de IA à avaliação: se os usos de IA são inventariados, se as medidas assistidas por IA têm pares de qualidade e se as pessoas podem contestar números derivados de IA. O cuidado é que uma autoavaliação escrita por IA pode soar confiante e perder fatos locais; por isso a equipe deve escrever a sua.

### Automação

Automatize a coleta de evidências para a avaliação, como a parcela de métricas com responsáveis e barreiras de proteção, mas peça às pessoas que a interpretem. O cuidado é que a evidência reunida automaticamente pode ser incompleta; por isso diga o que ela exclui.

### Análise

Mostre o perfil entre as dimensões, e não uma pontuação única, com a evidência por trás de cada nota. A decisão informada é o que melhorar a seguir. O cuidado é que as notas são julgamentos das pessoas avaliadas; por isso evite comparar equipes por elas.

## Olhar setorial

**Startup.** Uma avaliação formal provavelmente é excessiva. Uma breve conversa duas vezes por ano sobre as seis dimensões, com um ou dois pequenos passos, basta. Fique atento ao medo de que as medidas sejam usadas para julgamento, já que as equipes pequenas o sentem intensamente.

**Pequena empresa.** Use as dimensões como uma lista de verificação para uma conversa com o dono e o pessoal. Pergunte se as poucas medidas que você mantém respondem a perguntas reais, se as pessoas sabem o que significam e se são usadas. Escolha um passo. Não gaste mais de uma hora.

**Grande empresa.** A escala precisa de um processo leve e consistente: as mesmas dimensões, autoavaliação com um facilitador, sessões de calibração e perfis agregados. Resista a um escritório central de pontuação. Ligue os próximos passos aos registros de melhorias e relate faixas e temas aos patrocinadores. Proteja-se contra a escala virar um exercício de conformidade.

**Governo e setor público.** Os órgãos de auditoria e supervisão podem pedir pontuações de maturidade. Seja claro sobre a diferença entre esta ferramenta interna de conversa e qualquer arcabouço formal. Mantenha os resultados das equipes com as equipes, forneça agregados à supervisão e seja transparente sobre o que a escala é e não é (veja o tópico 8.3, Métricas de conformidade e auditoria).

## Business case: motivações, ROI e TCO

Os custos são pequenos: uma ou duas horas por equipe duas vezes por ano, um facilitador, alguma análise e o esforço de executar os passos de melhoria. Os custos maiores vêm quando o modelo é mal usado, com consultores, escritórios de pontuação e pastas de evidências.

Os retornos vêm de um melhor direcionamento do esforço. Em vez de espalhar o investimento por todas as dimensões, o programa acha a dimensão limitante e a trata. Outros retornos incluem o reconhecimento mais cedo da regressão, a linguagem compartilhada entre equipes e passos de melhoria que as equipes escolheram e têm como seus. Construa o argumento a partir dos seus próprios dados: passos de melhoria concluídos, mudanças na evidência de decisão e nos resultados da pesquisa de confiança e o esforço que a avaliação levou. Evite citar alegações publicadas sobre os retornos da melhoria de maturidade sem uma fonte rastreável e relevância para o seu contexto (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **O distintivo de maturidade.** O nível vira o objetivo. Use-o como conversa, com evidência.
- **Um único número geral.** O padrão se perde e surgem metas. Mostre o perfil.
- **Pontuação por auditores.** As equipes preparam documentos para encenar. Use autoavaliação com um facilitador.
- **Ligar a pontuação ao financiamento.** Segue-se a inflação. Mantenha a avaliação separada.
- **Perseguir o nível mais alto.** Nem todo programa precisa de Orquestrar. Escolha o que serve.
- **Avaliar e esquecer.** Nenhum passo se segue. Ligue os passos ao registro de melhorias.
- **Avaliação longa demais.** O ônus cresce e a qualidade cai. Mantenha-a em uma hora.
- **Ignorar a regressão.** Os programas escorregam depois de mudanças. Reavalie num ritmo e depois de eventos.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Perguntas e propósito | Medidas coletadas porque os dados existem | Algumas equipes declaram as perguntas que fazem | Públicos e perguntas escritos; medidas mapeadas a eles | Cobertura de perguntas revista; perguntas sem resposta conduzem novas medidas | Os públicos, incluindo clientes e fornecedores, moldam as medidas; as perguntas evoluem com os serviços |
| Definições e responsabilidade | As definições variam por pessoa | Algumas escritas; responsáveis informais | Catálogo com definição, fonte, responsável e limites de cada medida | Completude das definições e contestações geridas | Definições de propriedade conjunta entre equipes e fornecedores; revistas quando deixam de informar decisões |
| Dados e ferramentas | Manual e frágil | Alguns feeds automatizados | Pipelines testados, repositório compartilhado, dados portáveis | Confiabilidade, reconciliação e prontidão de saída geridas | Pipelines federados com contratos compartilhados; fontes melhoradas a partir do feedback |
| Uso nas decisões | Números exibidos, raramente usados | Usados em algumas revisões | Revisões regulares que registram decisões | Evidência de decisão acompanhada e agida | Decisões ligadas entre equipes a resultados; aprendizado compartilhado |
| Confiança e segurança | Medo ou indiferença | Garantias verbais | Estatuto escrito; visões individuais desligadas; pesquisa de segurança | Quebras revistas às claras; sinais de franqueza geridos | A confiança é rotina; programa moldado por pessoal e parceiros |
| Revisão e evolução | Nenhuma | Limpeza ocasional | Revisão periódica com as equipes; regra de aposentadoria | Passos da avaliação financiados e concluídos | O programa melhora continuamente, com mudanças vindas de todos |

## Lista de verificação

- [ ] As seis dimensões estão combinadas, e as descrições dos níveis estão adaptadas ao nosso contexto.
- [ ] Cada equipe se autoavalia em uma discussão de cerca de uma hora, com um facilitador.
- [ ] Cada nível alegado é respaldado por um exemplo ou uma verificação amostrada.
- [ ] Os resultados são mostrados como perfis e faixas, e nunca como uma pontuação média única nem uma classificação.
- [ ] Os resultados de uma equipe ficam com a equipe, e o agregado é compartilhado com os patrocinadores.
- [ ] A avaliação não é ligada a financiamento, posição nem avaliações de desempenho, e isso está escrito.
- [ ] Cada equipe combina um ou dois pequenos próximos passos, com um responsável e uma data.
- [ ] Os próximos passos são acompanhados no registro de melhorias.
- [ ] A reavaliação acontece pelo menos duas vezes por ano e depois de eventos importantes.
- [ ] O próprio modelo é revisto anualmente com as equipes.

## Prompts de IA

**Prepare uma conversa de autoavaliação.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Transforme uma dimensão fraca em passos.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Confira a evidência de um nível alegado.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Resuma perfis sem classificar.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para mapear as medidas do programa às dimensões de maturidade e suas barreiras de proteção pareadas.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma avaliação de maturidade relata perfis, mantém os resultados com as equipes e evita uma pontuação única.

## Ideias-chave

- Use a escala compartilhada de cinco níveis como ferramenta de conversa, nunca como distintivo, classificação ou certificação.
- Relate um perfil em seis dimensões, e não uma pontuação média única.
- Avalie com as equipes, peça evidência e mantenha os resultados de cada equipe com a equipe.
- Escolha pequenos próximos passos na dimensão que limita as outras, muitas vezes confiança e definições.
- Acompanhe os passos no registro de melhorias e reavalie regularmente, porque os programas regridem.
- Mais alto nem sempre é melhor, e os resultados importam mais que os níveis.

## Referências e leituras complementares

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Processo de melhoria contínua](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Métrica de vaidade](https://en.wikipedia.org/wiki/Vanity_metric).
