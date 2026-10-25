# Métricas de adoção de serviços e catálogo

**Um serviço que ninguém escolhe, encontra ou conclui uma requisição para usar não entregou valor; por isso meça como as pessoas descobrem e usam o que você oferece e mantenha o catálogo tão honesto quanto um backlog.**

## Visão geral e motivação

As equipes investem em serviços e depois descobrem que as pessoas não os usam. O novo portal de autoatendimento é contornado por e-mail. Um item de catálogo cuidadosamente projetado para acesso a software recebe duas requisições por ano enquanto cem por mês chegam por chat. Um serviço de monitoramento é lançado e metade das equipes para as quais foi construído nunca se conecta a ele. A adoção é a metade que falta da entrega: um serviço só tem valor quando seus usuários pretendidos começam, continuam e terminam de usá-lo.

O **catálogo de serviços** (a grafia do próprio ITIL é "service catalogue") é a lista de serviços e itens requisitáveis que uma organização oferece, descritos em termos que seus usuários consigam entender. Um [catálogo de serviços](https://en.wikipedia.org/wiki/Service_catalog) costuma ter uma visão voltada ao cliente, que lista o que um usuário pode pedir e como, e uma visão técnica, que registra como cada serviço é construído e apoiado. As equipes ágeis reconhecerão a forma: um catálogo é uma espécie de [backlog de produto](https://en.wikipedia.org/wiki/Product_backlog) ao contrário. Um backlog lista o que você pretende construir. Um catálogo lista o que você já oferece, e ambos precisam do mesmo cuidado: ordenação, poda, redação clara e um fluxo constante de feedback dos usuários (veja o tópico 2.6, Métricas de backlog e refinamento).

A **adoção** é a extensão em que os usuários pretendidos assumem e continuam usando um serviço. O estudo de como as novas práticas se espalham tem uma longa história; a teoria da [difusão de inovações](https://en.wikipedia.org/wiki/Diffusion_of_innovations) descreve a adoção como um processo ao longo do tempo, com adotantes iniciais, uma maioria e retardatários. Para um serviço interno, a lição prática é que a adoção raramente acontece por causa de um anúncio. Acontece quando o serviço é fácil de achar, fácil de usar e claramente melhor que o contorno.

As medidas de adoção são tentadoras de transformar em metas. Impor um canal faz um número de uso parecer bom enquanto os usuários se ressentem e constroem contornos. Empurrar toda requisição para um item de catálogo faz a cobertura do catálogo subir enquanto a conclusão cai. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica; por isso cada medida aqui vem pareada com uma conferência de que o valor real, e não o mero uso, está subindo (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Este tópico cobre quatro coisas: se as pessoas usam um serviço (adoção), se conseguem achar e concluir o que vieram fazer (catálogo e fluxo de requisições), se o catálogo está atual e honesto (higiene) e se o uso está concentrado em poucos itens (forma). Liga-se ao atendimento de requisições (veja o tópico 3.5, Métricas de atendimento de requisições de serviço) e ao autoatendimento (veja o tópico 3.7, Métricas de autoatendimento e automação), que cobrem o que acontece depois que a requisição é feita.

## Princípios-chave

- **A adoção é um resultado; por isso pergunte o que o usuário tentava fazer.** Conte objetivos concluídos, e não visualizações de página.
- **Meça o funil, não apenas o total.** Onde as pessoas desistem diz o que corrigir.
- **Compare com a alternativa.** Um serviço compete com o e-mail, o chat, uma ligação telefônica e um contorno.
- **Mantenha o catálogo tão pequeno e atual quanto puder.** Itens obsoletos ensinam os usuários a parar de procurar.
- **Segmente antes de concluir.** As médias entre todos os usuários escondem os grupos para os quais o serviço não funciona.
- **Nunca force o uso para elevar um número.** Imposições produzem números, não adoção.
- **Trate o uso baixo como uma pergunta ao responsável e aos usuários.** Pode significar que o serviço não é necessário.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taxa de adoção | Proporção dos usuários elegíveis que usaram um serviço pelo menos uma vez no período | usuários elegíveis distintos com pelo menos um uso concluído / usuários elegíveis | porcentagem | Registros de uso do serviço cruzados com o diretório de usuários | Gestão do catálogo de serviços; gestão de nível de serviço | Adoção de funcionalidades; revisão dos resultados do produto | Mensal |
| Taxa de uso ativo | Proporção dos adotantes que continuam usando o serviço ao longo do tempo | usuários ativos no período que também usaram o serviço no período anterior / usuários ativos no período anterior | porcentagem | Registros de uso; tabelas de coortes | Melhoria contínua | Retenção na análise de produto | Mensal |
| Cobertura do catálogo | Proporção das requisições que chegam pelo catálogo em vez de canais ad hoc | requisições criadas via catálogo / todas as requisições, de todos os canais | porcentagem | Ferramenta de gestão de requisições; etiquetas de caixa de e-mail e de chat | Gestão de requisições de serviço; gestão do catálogo de serviços | Itens de backlog que trazem uma definição escrita | Mensal |
| Taxa de abandono de requisições | Proporção das requisições iniciadas que o usuário não envia | requisições iniciadas mas não enviadas em até 24 horas / requisições iniciadas | porcentagem | Análise do portal | Gestão de requisições de serviço | Abandono de tarefas em testes de usabilidade | Mensal |
| Taxa de sucesso da busca | Proporção das buscas no catálogo que terminam em uma requisição ou em uma resposta vista | buscas seguidas de uma requisição ou de uma visualização de conhecimento na mesma sessão / buscas | porcentagem | Registros de busca do portal | Gestão do conhecimento; gestão do catálogo de serviços | Facilidade de encontrar na pesquisa com usuários | Mensal |
| Parcela de itens obsoletos | Proporção dos itens do catálogo com revisão vencida ou sem uso em um período definido | itens com revisão vencida ou com zero requisições em 12 meses / itens no catálogo | porcentagem | Registro do catálogo | Gestão do catálogo de serviços | Idade do backlog e poda | Trimestral |
| Concentração de requisições | Proporção das requisições respondida pelos itens mais requisitados | requisições dos cinco principais itens / todas as requisições do catálogo | porcentagem | Ferramenta de gestão de requisições | Gestão de requisições de serviço | Pareto do trabalho por tipo | Trimestral |

Declare a base de usuários de cada medida. "Usuários elegíveis" deve ser definido antes de medir, por exemplo o pessoal nos papéis que poderiam usar um serviço, e a lista registrada no registro de métricas. Conte um uso somente quando terminar em um resultado concluído, como uma concessão de acesso entregue, e não quando uma página carrega. Exclua contas de teste e tráfego automatizado.

## Recomendações

### Conheça seus serviços e seus usuários

**1. Defina o público pretendido de cada serviço.** Antes de medir a adoção, escreva para quem o serviço é e por que essas pessoas o usariam em vez da alternativa. Um novo serviço de análise construído para o pessoal de finanças não é de "baixa adoção" se só o pessoal de finanças deveria usá-lo. Sem um público definido, a taxa de adoção é um número sobre ninguém.

**2. Registre a alternativa.** Para cada serviço importante, liste o que as pessoas fazem agora quando não o usam: perguntam a um colega, mandam um e-mail, compram uma ferramenta, rodam uma planilha. Trate a alternativa como um concorrente no sentido que importa: é para onde seus usuários vão quando o seu serviço é mais difícil. Compare o esforço dos dois caminhos durante o projeto e a revisão.

**3. Descreva os itens na linguagem do usuário.** Títulos como "Acesso a software, padrão" e "Substituição de notebook, danificado" são mais fáceis de achar que nomes internos. Teste os títulos pedindo a alguns usuários que achem um item a partir de um cenário curto. Os problemas de redação aparecem logo nos registros de busca.

**4. Mantenha um responsável para cada item.** Cada item do catálogo tem um responsável nomeado, uma data de revisão, uma descrição do público e o volume esperado. Itens sem responsáveis derivam. Se ninguém sabe dizer quem usa um item e por quê, ele é candidato à remoção.

### Meça a jornada

**5. Instrumente o funil.** Para cada serviço importante, registre os passos da descoberta ao resultado concluído: achar o item, iniciar a requisição, preencher o formulário, enviar, receber o resultado. Uma visão de [funil de conversão](https://en.wikipedia.org/wiki/Conversion_funnel) mostra onde os usuários saem. Corrija primeiro a maior queda. Confira se as correções tornam o formulário mais curto ou mais claro, e não apenas os dados mais bonitos.

**6. Use coortes para ver a retenção.** Uma [análise de coortes](https://en.wikipedia.org/wiki/Cohort_analysis) agrupa os usuários pelo momento em que usaram o serviço pela primeira vez e acompanha cada grupo. Separa um serviço que mantém seus usuários de um que os atrai uma vez e os perde. Use-a para serviços que deveriam ser usados repetidamente, como o portal da central de serviços ou um pipeline de implantação.

**7. Leia os registros de busca para ver o que as pessoas não conseguem achar.** Buscas sem resultado, ou buscas repetidas com palavras diferentes, apontam para lacunas de nomenclatura, de conteúdo ou do próprio catálogo. Reveja todo mês as principais buscas sem resultado e decida para cada uma: renomear um item, acrescentar um sinônimo, escrever um artigo ou criar um novo item. As ferramentas de [análise da web](https://en.wikipedia.org/wiki/Web_analytics) podem fornecer isso, e os registros do próprio portal também.

**8. Segmente por grupo.** Divida a adoção e o abandono por papel, local, dispositivo e necessidades de acessibilidade onde você tiver acesso lícito e ético a essa informação. O agregado pode parecer saudável enquanto o pessoal do turno da noite ou os usuários de dispositivos móveis falham com o dobro da taxa. Suprima os grupos pequenos para proteger as pessoas e combine com as medidas de experiência dos tópicos anteriores (veja o tópico 6.2, Acordos de nível de experiência).

### Mantenha o catálogo honesto

**9. Pode em um calendário.** Reveja o catálogo a cada trimestre. Remova ou funda itens sem uso, aposente itens de serviços descontinuados e corrija itens com alto abandono. Um catálogo menor e exato serve melhor aos usuários que um completo e obsoleto. Trate a remoção como normal e registre o motivo.

**10. Olhe a forma da demanda.** Na maioria dos catálogos, poucos itens respondem pela maior parte das requisições, um padrão muitas vezes descrito pelo [princípio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Use-o para focar o esforço de projeto nos itens frequentes e automatizar os rotineiros (veja o tópico 3.7, Métricas de autoatendimento e automação). Não descarte a cauda longa sem olhar, já que itens raros podem importar muito para as pessoas que precisam deles.

**11. Não force a adoção.** Se um serviço é necessário, os usuários virão assim que ele for fácil. Onde a organização exige um canal por razões de controle ou auditoria, diga isso e seja aberto de que o número reflete uma regra, e não uma preferência. Evite [padrões obscuros (dark patterns)](https://en.wikipedia.org/wiki/Dark_pattern), como esconder o número de telefone ou tornar a alternativa mais difícil, já que elevam o uso e reduzem a confiança.

**12. Feche o ciclo com responsáveis e usuários.** Compartilhe o funil, as lacunas de busca e a lista de obsoletos com os responsáveis pelos itens todo mês. Pergunte aos usuários, na pesquisa e nas revisões, por que usam ou evitam um serviço (veja o tópico 6.1, Métricas de satisfação do cliente). Registre o que mudou no registro e diga aos usuários que aconteceu.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Taxa de adoção | Impor o uso; contar logins ou visualizações de página como uso; estreitar os "usuários elegíveis" aos que já usam | Definição de resultado concluído; comparar com as avaliações de satisfação e de esforço; publicar a regra dos usuários elegíveis |
| Taxa de uso ativo | Inscrever usuários automaticamente para que pareçam ativos; enviar notificações que contam como atividade | Contar apenas ações concluídas iniciadas pelo usuário; entrevistas amostrais com usuários que deixaram de usar |
| Cobertura do catálogo | Forçar toda requisição para um item de catálogo genérico; encerrar requisições por e-mail com "por favor use o portal" | Taxa de abandono de requisições e satisfação; contar quantas requisições são reabertas por outro canal |
| Taxa de abandono de requisições | Remover campos de formulário necessários, o que desloca o trabalho para o atendimento; contar requisições abandonadas só depois de uma janela longa | Taxa de retrabalho e de esclarecimento no atendimento (veja o tópico 3.5, Métricas de atendimento de requisições de serviço) |
| Taxa de sucesso da busca | Contar qualquer clique como sucesso; acrescentar artigos irrelevantes que casam com toda consulta | Conferir se o resultado foi usado (requisição feita, artigo avaliado como útil); ler as buscas sem resultado |
| Parcela de itens obsoletos | Marcar itens como revistos sem lê-los; zerar as datas de revisão em massa | Amostrar itens revistos quanto à exatidão; mostrar a data da última mudança real |
| Concentração de requisições | Dividir itens populares em muitos; fundir itens não relacionados para esconder a demanda da cauda longa | Taxonomia fixa de itens com registro de mudanças; olhar a cauda por categoria |

Uma leitura saudável é um catálogo em que os itens mais usados funcionam bem e estão ficando mais fáceis, em que os usuários escolhem o serviço porque é melhor que a alternativa e em que aposentar um item é rotina.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Canal imposto | Volume previsível, fácil de auditar | Ressentimento, contornos, números inflados |
| Adoção voluntária | Sinal honesto de valor | Mais lenta; alguns serviços podem nunca ser adotados |
| Catálogo grande | Completo, cobre necessidades raras | Difícil de buscar; torna-se obsoleto |
| Catálogo pequeno | Fácil de achar e manter | Necessidades raras ficam de fora; os usuários recorrem ao e-mail |
| Medidas de funil | Apontam onde os usuários desistem | Exigem instrumentação; podem estimular a otimização do formulário às custas do resultado |
| Pesquisa sobre o porquê | Explica o comportamento | Enviesada por quem responde; difícil de escalar |

A resposta pragmática é preferir a adoção voluntária apoiada por uma vantagem clara de qualidade e usar imposições apenas onde o controle ou a conformidade as exigem, com o número rotulado de acordo. Mantenha o catálogo pequeno o bastante para manter e ponha a cauda em uma base de conhecimento pesquisável, e não em cem itens pouco usados.

## Perguntas para discutir com sua equipe

**1. Para quem é cada um dos nossos principais serviços, e como saberíamos que estão sendo usados?**
Liste os cinco serviços em que sua equipe gasta mais tempo e escreva o público pretendido de cada um. Depois pergunte como a adoção poderia ser medida para eles. O facilitador deve procurar serviços em que ninguém sabe nomear o público, já que esses provavelmente não têm um plano de adoção.

**2. O que as pessoas fazem quando não usam o nosso serviço, e por quê?**
Para um serviço de baixa adoção, entreviste ou pesquise alguns usuários que o evitam. A alternativa costuma ser reveladora: pode ser mais rápida, mais familiar ou mais flexível. Decida se vai melhorar o serviço, mudar a alternativa ou aceitar que o serviço não é necessário.

**3. Onde os usuários desistem em nosso item mais requisitado?**
Mostre o funil do item principal, da primeira visualização ao envio. Peça à equipe que adivinhe onde está a maior queda e depois compare. Combinem uma mudança a testar e digam como vão conferir se ajudou sem mover o problema para outro lugar.

**4. O que removeríamos do catálogo se ousássemos?**
Imprimam a lista de itens sem requisições em um ano. Perguntem o que aconteceria se cada um desaparecesse. A conversa muitas vezes descobre que um item existe porque alguém um dia pediu. Combinem uma data para remover ou fundir os primeiros cinco e uma nota aos usuários.

**5. Onde estamos empurrando ou forçando os usuários, e vale o custo?**
Listem todo lugar em que uma regra ou um projeto empurra os usuários para um canal. Perguntem quais são realmente necessários e quais são hábito. O facilitador deve explorar como os usuários vivenciam cada um e se os números resultantes significam o que os líderes pensam que significam.

**6. O que as pessoas procuram que nós não temos?**
Revejam as principais buscas sem resultado. Para cada uma, decidam se acrescentam um item, escrevem um artigo ou explicam que o serviço não existe. Perguntem quem é dono desta revisão e com que frequência ela acontecerá.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega constroem serviços e funcionalidades que precisam de adoção para importar. Devem definir o público no começo, embutir medidas de uso no serviço e rever o funil depois do lançamento. Os dados de adoção são feedback sobre o trabalho e pertencem ao refinamento e à revisão. As equipes devem evitar declarar um release pronto quando ele é enviado. Pronto significa que os usuários pretendidos estão recebendo o benefício.

### Equipes de serviço e operações

As equipes de operações conduzem o catálogo e veem as requisições que chegam por todos os canais. Devem manter atual o catálogo, etiquetar as requisições que o contornam e perguntar por quê. Não devem encerrar uma requisição redirecionando-a, já que isso esconde o sinal. As lacunas de busca e o abandono são sua melhor fonte de melhorias do portal.

### Liderança e governança

Os líderes decidem se a adoção é uma conversa ou uma cota. Devem perguntar para que serve o serviço, a quem ajuda e por que as pessoas o escolhem. Devem evitar definir metas de adoção para equipes ou pessoas individuais, apoiar a aposentadoria de serviços sem uso e esperar ver a adoção ao lado da satisfação e do esforço. Onde uma imposição se justifica, os líderes devem explicá-la aos usuários.

### Clientes e usuários

Os usuários querem obter o que precisam com pouco esforço. Notam quando um portal é difícil de buscar, quando os formulários pedem coisas que a organização já sabe e quando o modo antigo é mais rápido. Seu comportamento, e o que dizem, é o sinal de adoção mais honesto. Devem ser perguntados por que evitam um serviço e informados do que mudou como resultado.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma agência nacional de transportes opera uma central de serviços, um portal de autoatendimento com um catálogo de cerca de 140 itens e várias equipes de produto. Os números abaixo são ilustrativos.

O portal foi lançado há um ano, e a liderança definiu a meta de 80% das requisições por ele. O relatório mensal mostra 78% de cobertura, e a chefe de gestão de serviços fica satisfeita até ler os comentários da pesquisa com usuários. O pessoal dos escritórios regionais diz que o portal é lento e os formulários são longos. Ela pede ao gerente do catálogo que olhe o funil e os registros de busca.

O funil de "Equipamento para novo contratado" mostra 1.100 inícios por trimestre e 640 envios, uma taxa de abandono de 42%. O formulário tem 23 campos. O registro de busca mostra o termo "notebook" retornando oito itens e o termo "VPN" não retornando nenhum, embora seja o termo mais buscado. Dos 140 itens do catálogo, 38 não tiveram requisição em 12 meses e 21 estão com a revisão vencida. Os cinco principais itens respondem por 61% das requisições, e outros 15% das requisições chegam por e-mail e são registrados à mão.

A equipe faz quatro mudanças. Corta o formulário de novo contratado para nove campos usando dados que o sistema de RH já tem. Acrescenta um artigo sobre VPN e um item com sinônimos. Funde os oito itens de notebook em dois. E aposenta 19 dos itens sem uso, com uma nota aos responsáveis. Também muda como o relatório mensal é lido: a cobertura é mostrada com a taxa de abandono e a pergunta da pesquisa "quão fácil foi obter o que você precisava?". Três meses depois, o abandono do item de novo contratado cai para 24%, a cobertura do portal é de 74% e a avaliação de esforço dos escritórios regionais sobe. O diretor pergunta por que a cobertura caiu. A chefe de gestão de serviços explica que as requisições por e-mail antes eram encerradas à força, que o número menor é mais honesto e que a experiência é melhor. O registro de decisões anota que a meta é substituída por uma direção: reduzir o abandono e elevar a avaliação de esforço, com a cobertura revista mas sem meta.

## Ágil, IA, automação e análise

### Ágil

Trate o catálogo como um backlog refinado com seus usuários e remova os itens que ninguém usa. O cuidado é que uma meta de número de itens do catálogo acrescenta desordem.

### IA

A busca e os assistentes de IA podem mudar como as pessoas encontram serviços, o que move as cifras de adoção e de abandono. Pareie o sucesso da busca com a taxa de abandono e com a proporção das sugestões da IA que foram aceitas e concluídas. O cuidado é que um modelo pode recomendar um serviço que a pessoa não pode requisitar; por isso confira as regras de elegibilidade.

### Automação

Capture automaticamente os eventos de busca, visualização e requisição e sinalize itens obsoletos do catálogo para uma decisão humana. Meça a automação no atendimento pela taxa de falha. O cuidado é que uma limpeza automatizada que remove itens pode esconder serviços que as pessoas usam raramente mas de que precisam.

### Análise

Mostre a adoção e o abandono por item do catálogo, com contagens, e a concentração das requisições. A decisão informada é quais itens redesenhar ou aposentar. O cuidado é que itens de baixo volume têm taxas ruidosas.

## Olhar setorial

**Startup.** Muitas vezes não há catálogo. Uma página simples de "como obter X" e um canal compartilhado bastam. Observe o que as pessoas pedem e transforme as cinco principais requisições em guias curtos. Meça a adoção de ferramentas internas perguntando aos usuários e dispense funis formais.

**Pequena empresa.** Poucas pessoas fornecem a TI, e as requisições chegam por todos os canais. Um catálogo modesto de 10 a 20 itens cobre a maioria das necessidades. Não force os usuários para um portal que custa mais para manter do que as requisições que trata. Reveja a lista duas vezes por ano.

**Grande empresa.** A escala dá um catálogo grande o bastante para precisar de governança: responsáveis, datas de revisão e uma taxonomia. Segmente a adoção por unidade de negócio e região e evite imposições para toda a empresa que ignorem necessidades locais. Cuidado com fornecedores cujos itens de catálogo são contados mas não usados.

**Governo e setor público.** Os serviços chegam ao público além do pessoal, com deveres de acessibilidade, idioma e acesso igual. Inclua os canais assistidos (telefone, presencial) nas medidas para que a adoção digital não esconda a exclusão. Onde regras legais ou de política exigem um canal, declare isso nos relatórios (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos são modestos. Os registros de uso e os dados de requisições geralmente já existem. A análise de funil e de busca exige acesso à análise do portal, que a maioria das plataformas oferece. O principal custo de tempo é a revisão trimestral do catálogo e uma olhada mensal nas lacunas de busca e nas desistências, algumas horas cada. Corrigir formulários e fundir itens custa tempo de projeto e de configuração.

O retorno vem de serviços que são usados, requisições que terminam e menos desperdício no atendimento. Um formulário mais curto que reduz o abandono reduz contatos repetidos e tratamento manual. Podar itens sem uso reduz a manutenção. Construa o argumento com os seus próprios números: taxa de abandono, tempo de tratamento manual por requisição enviada por e-mail e o custo de manter um item sem uso, antes e depois das mudanças. Evite alegações publicadas sobre ROI de portais que você não consegue rastrear, já que dependem da organização e do método.

## Antipadrões e armadilhas

- **Contar lançamentos como adoção.** Um serviço é adotado quando os usuários pretendidos concluem resultados com ele. Meça o uso, e não o anúncio.
- **Impor um canal para elevar um número.** Os usuários o contornarão. Melhore o serviço e deixe o número vir.
- **Acrescentar itens e nunca remover nenhum.** O catálogo se torna impesquisável. Pode a cada trimestre.
- **Olhar apenas os totais.** Segmente por grupo e olhe o funil.
- **Encerrar requisições por e-mail com um redirecionamento.** Esconde a demanda e irrita os usuários. Trate a requisição e corrija a rota.
- **Usar visualizações de página como uso.** Conte resultados concluídos.
- **Tratar o uso baixo como falha dos usuários.** Pergunte se o serviço é necessário e fácil de usar.
- **Deixar os responsáveis pelos itens caírem.** Designe responsáveis e datas de revisão para todo item.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Projeto do catálogo | Lista crescida por demanda | Existe um catálogo, redação inconsistente | Itens em linguagem do usuário, com responsáveis e datas de revisão | Poda trimestral; taxonomia gerida | Catálogo compartilhado entre equipes e fornecedores; itens projetados em conjunto com os usuários |
| Medição da adoção | Anedota | Contagens de requisições por item | Adoção definida por usuários elegíveis e resultados concluídos | Funis, coortes e segmentos revistos mensalmente | Adoção ligada à experiência e aos resultados entre serviços |
| Melhoria | Correções ad hoc | Correções após reclamações | Lacunas de busca e desistências revistas mensalmente | Correções priorizadas e acompanhadas em um backlog | Melhoria coordenada com os usuários, com os serviços aposentados relatados abertamente |

## Lista de verificação

- [ ] Cada serviço importante tem um público pretendido escrito e um caminho alternativo.
- [ ] A adoção é definida como resultados concluídos por usuários elegíveis.
- [ ] Os itens do catálogo têm responsáveis, descrições em linguagem do usuário e datas de revisão.
- [ ] O funil é instrumentado para os itens mais requisitados.
- [ ] As buscas sem resultado são revistas mensalmente.
- [ ] A adoção e o abandono são segmentados por grupo, com os grupos pequenos suprimidos.
- [ ] As requisições que chegam fora do catálogo são etiquetadas e contadas.
- [ ] O catálogo é podado a cada trimestre, com os motivos registrados.
- [ ] A adoção é mostrada ao lado de medidas de satisfação ou de esforço.
- [ ] Nenhuma meta de adoção é definida para uma equipe ou pessoa individual.

## Prompts de IA

**Analise um funil de requisições.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Revise os registros de busca em busca de lacunas do catálogo.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Planeje uma revisão de poda do catálogo.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Redija uma definição de adoção para um serviço.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de adoção ou de catálogo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma nova entrada de métrica de catálogo traz seu vetor de manipulação e sua barreira de proteção.

## Ideias-chave

- Adoção significa que os usuários pretendidos concluem resultados com um serviço; por isso defina o público e conte as conclusões.
- Meça o funil, as lacunas de busca e a retenção de usuários e segmente por grupo.
- Compare o serviço com a alternativa que os usuários têm hoje.
- Mantenha o catálogo pequeno, com responsáveis e podado a cada trimestre.
- Não force o uso para elevar um número e pareie a adoção com a satisfação e o esforço.
- Trate o uso baixo como uma pergunta sobre necessidade e facilidade, e não como falha dos usuários.

## Referências e leituras complementares

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Catálogo de serviços](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Backlog de produto](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Difusão de inovações](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Funil de conversão](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Análise de coortes](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Análise da web](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Princípio de Pareto](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Padrão obscuro](https://en.wikipedia.org/wiki/Dark_pattern).
