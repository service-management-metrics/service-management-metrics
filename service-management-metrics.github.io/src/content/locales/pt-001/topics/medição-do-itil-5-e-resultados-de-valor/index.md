# Medição do ITIL 5 e resultados de valor

**O ITIL 5, como seu proprietário o descreve, une estratégia, entrega e resultados mensuráveis e cobre ambientes habilitados por IA; por isso meça se cada serviço, produto e sistema de IA tem um responsável nomeado e um resultado escrito com evidências, e trate como não confirmado todo detalhe do ITIL 5 que você não consegue verificar com o proprietário.**

## Visão geral e motivação

O [ITIL](https://en.wikipedia.org/wiki/ITIL) é a estrutura mais conhecida de [gestão de serviços de TI](https://en.wikipedia.org/wiki/IT_service_management) (ITSM). Seu proprietário, a PeopleCert, publica a versão atual, e uma nova versão da estrutura, o ITIL 5, foi anunciada em 2026. As equipes que operam serviços perguntam o que uma nova versão muda na medição. A resposta honesta começa pelo que pode ser verificado e pelo que não pode.

**O que está verificado (em 20 de outubro de 2026).** A página de certificação da própria PeopleCert para o ITIL Foundation Bridge (Versão 5) descreve a atualização como cobrindo a gestão de produtos e serviços digitais ao longo do ciclo de vida, inclusive como o ITIL reflete "ambientes digitais modernos e habilitados por IA". Também lista uma "abordagem aprimorada de criação de valor" que liga estratégia, entrega e resultados mensuráveis em todo o ecossistema de partes interessadas, e a gestão da complexidade digital e de IA. A página afirma que o bridge é destinado a detentores de certificação do ITIL 4. Não informa uma data de lançamento para o próprio ITIL 5.

**O que não está verificado.** Nomes e estrutura das práticas, quanto do ITIL 4 é aproveitado, datas formais de lançamento e se existe uma publicação separada de governança de IA. Páginas de treinamento e consultoria de terceiros dão cifras e nomes para essas coisas. Elas discordam entre si; por isso este livro não as repete. Reconfira as páginas do proprietário antes de cada decisão e rotule toda afirmação como "no ITIL 4" ou "no ITIL 5".

Três temas decorrem da redação do proprietário, e cada um tem uma consequência para a medição. Uma orientação a produto significa que um serviço tem dono da ideia à aposentadoria; por isso meça a responsabilidade. A IA no ambiente significa que os sistemas de IA precisam de governança; por isso meça inventário, supervisão e qualidade. O valor como resultado mensurável significa que um serviço deve declarar o que fica melhor para alguém quando funciona; por isso meça se o resultado está escrito e se há evidência de que ele se moveu.

Este tópico não define métricas do ITIL 5, porque o proprietário não publicou nenhum conjunto de métricas que este livro possa verificar. Ele oferece medidas da prontidão de uma organização de serviços para ser medida: se existem as bases de que qualquer versão do ITIL e qualquer medição honesta precisarão. As medidas usam a mesma forma do resto do livro, com um vetor de manipulação e uma barreira de proteção para cada uma (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

Termos usados aqui. Um **serviço** é um meio de possibilitar a cocriação de valor facilitando os resultados que o cliente deseja. Um **produto digital** é uma oferta baseada em software, com ciclo de vida e responsável próprios. Um **mapa do parque** (estate map) é uma lista dos serviços, produtos, plataformas e sistemas de IA que uma organização opera, cada um com um responsável. Um **resultado** é uma mudança na vida de um cliente ou na saúde de um serviço (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

## Princípios-chave

- **Verifique antes de citar.** Uma afirmação sobre o ITIL 5 só é verificada se a publicação do próprio proprietário a diz. Todo o resto é não confirmado e rotulado como tal.
- **Meça as bases, não a estrutura.** Responsabilidade, resultados e supervisão da IA importam em qualquer versão e são mensuráveis hoje.
- **Resultados acima da produção.** O valor de um serviço é uma mudança para alguém; por isso um resultado escrito e a evidência da mudança valem mais do que contagens de tickets ou releases.
- **Dê dono a todo produto, serviço e sistema de IA.** Um responsável nomeado é o mínimo para governança, revisão e aposentadoria.
- **Pareie toda medida com uma barreira de proteção.** As contagens de cobertura são fáceis de satisfazer no papel; por isso pareie cada uma com uma verificação de que o conteúdo é real.
- **Não espere pela estrutura.** Comece com o mapa do parque e um pequeno conjunto de medidas e ajuste à medida que o proprietário publicar mais.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cobertura de responsáveis do parque | Proporção dos serviços, produtos digitais, plataformas e sistemas de IA listados com um responsável nomeado e ativo | itens com um responsável nomeado confirmado nos últimos 12 meses / itens no mapa do parque, contados ao fim do período | porcentagem | Catálogo de serviços, registros de configuração e o mapa do parque | Gestão do catálogo de serviços; governança | Responsável pelo produto e carta da equipe | Trimestral |
| Cobertura de declarações de resultado | Proporção dos serviços e produtos com um resultado escrito e ao menos um sinal de evidência nomeado | serviços e produtos com uma declaração de resultado revista nos últimos 12 meses e um sinal de evidência / serviços e produtos no mapa do parque | porcentagem | Catálogo de serviços e notas de revisão | Gestão de nível de serviço; melhoria contínua | Objetivos do produto e critérios de aceitação | Trimestral |
| Idade da evidência do resultado | Idade da revisão de evidência mais recente de cada resultado | mediana e 85º percentil de (data de fim do período menos data da última revisão de evidência) entre os resultados | dias | Registro de revisões | Medição e relatório | Revisão regular com partes interessadas | Trimestral |
| Cobertura do inventário de sistemas de IA | Proporção dos recursos e sistemas habilitados por IA conhecidos com um responsável, um ponto de revisão humana e uma entrada no registro de riscos | sistemas de IA com os três / sistemas de IA encontrados na última varredura de descoberta | porcentagem | Inventário de IA e registro de riscos | Gestão de riscos; governança | Definição de pronto para recursos de IA | Trimestral |
| Taxa de verificação de afirmações | Proporção das afirmações sobre o ITIL 5 usadas em planos e políticas que remontam à publicação do próprio proprietário | afirmações com uma citação datada do proprietário / afirmações sobre o ITIL 5 usadas em documentos de decisão no período | porcentagem | Registro de verificação | Gestão do conhecimento; governança | n/a, prática de nível organizacional sem equivalente ágil direto | Trimestral |

As fórmulas contam itens ao fim do período. "Responsável ativo" significa uma pessoa ou papel que confirmou a responsabilidade por escrito, e não um nome copiado de um registro antigo. A taxa de verificação de afirmações exclui afirmações sobre o ITIL 4, que é amplamente documentado.

## Recomendações

### Comece pelo mapa do parque

**1. Construa uma lista antes de tudo.** Liste todo serviço, produto digital, plataforma e sistema de IA que você opera, com nome e responsável. Espere surpresas: ferramentas paralelas, recursos ativados por padrão em produtos de fornecedores e plataformas sem responsável. O mapa é o denominador de todas as outras medidas aqui.

**2. Defina "responsável" em uma frase.** Um responsável responde pelo resultado do item, por sua mudança, seu custo e sua aposentadoria. Uma lista de distribuição da equipe não é um responsável. Decida se um produto e o serviço que o sustenta compartilham um responsável e escreva a regra.

**3. Descubra os sistemas de IA de forma ativa.** Procure recursos de IA em contratos, configurações de ferramentas e contas de nuvem e pergunte às equipes o que elas ativaram. Uma pesquisa única fica obsoleta; por isso programe uma varredura regular e compare-a com o inventário.

### Meça resultados

**4. Escreva uma frase de resultado por serviço.** A frase diz o que fica melhor para um cliente nomeado quando o serviço funciona, nas palavras dele. "Disponibilidade de 99,9%" é uma meta, não um resultado. Se o serviço não tem resultado, pergunte se ele deveria existir.

**5. Nomeie o sinal de evidência.** Para cada resultado, nomeie os dados que mostrariam seu movimento, como taxa de contatos repetidos, sucesso nas tarefas ou adoção. Prefira sinais que você já coleta (veja o tópico 6.5, Realização de valor e resultados de negócio). Se não existe sinal, registre isso como o achado.

**6. Relate a idade da evidência.** Um resultado revisto há dois anos é uma alegação, não evidência. Mostre a mediana e um percentil alto da idade da evidência e mostre a mais antiga. É difícil de manipular sem fazer a revisão.

### Governe a medição de IA

**7. Pareie a atividade de IA com uma medida de qualidade.** Onde a IA auxilia com tickets, mudanças ou conhecimento, relate uma medida de uso ao lado de uma medida de qualidade, como a proporção de rascunhos de IA que uma pessoa alterou de modo relevante, ou a taxa de contatos repetidos em requisições respondidas por IA (veja o tópico 10.2, Medir o trabalho assistido por IA). O par mostra benefício, o que o uso sozinho não consegue.

**8. Ligue os sistemas de IA ao registro de riscos.** Cada sistema de IA recebe um responsável, um ponto de revisão humana, uma data de revisão e uma entrada no registro de riscos (veja o tópico 10.5, Métricas de governança e risco de IA). Confira com seu assessor jurídico a legislação aplicável a você, já que este livro não dá aconselhamento jurídico.

### Mantenha as afirmações honestas

**9. Mantenha um registro de verificação.** Para cada afirmação sobre o ITIL 5 que seus planos usam, registre a fonte do proprietário, a data em que você a leu e se está verificada. Reveja o registro antes de cada decisão de orçamento ou política, já que a publicação pode mudar.

**10. Mantenha as medidas do ITIL 4 em funcionamento.** Não pare de medir práticas que funcionam porque existe uma nova versão. Mude uma medida quando a orientação do proprietário e a sua própria evidência disserem ambas que ela precisa mudar e marque a mudança no gráfico (veja o tópico 1.4, Governança e responsabilidade das métricas).

**11. Dê passos pequenos.** Escolha uma medida da tabela, atribua um responsável e rode-a por um trimestre. Acrescentar as cinco de uma vez cria um programa de relatórios antes de haver qualquer evidência de que as medidas ajudam.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Cobertura de responsáveis do parque | Nomear um gerente ou uma lista de distribuição como responsável por tudo; omitir itens difíceis do mapa | Confirmação do responsável pelo próprio responsável e uma varredura de descoberta que compare o mapa com contratos e contas de nuvem |
| Cobertura de declarações de resultado | Escrever uma frase vaga como "melhorar a eficiência"; copiar um mesmo resultado para vários serviços | Amostrar resultados com os clientes e perguntar se os reconhecem; idade da evidência do resultado |
| Idade da evidência do resultado | Atualizar a data de revisão sem revisar; revisar só os resultados fáceis | Ler as notas de revisão de uma amostra; relatar a proporção de resultados cujo sinal de fato se moveu ou ficou estável |
| Cobertura do inventário de sistemas de IA | Contar apenas os sistemas que a equipe escolhe declarar; classificar recursos de IA como software comum | Varredura de descoberta independente; comparar com registros de fornecedores e contratos |
| Taxa de verificação de afirmações | Citar a página de um fornecedor como se fosse o proprietário; registrar uma afirmação como verificada sem ler a fonte | Revisar uma amostra de entradas do registro contra a página de origem; regra de fonte apenas do proprietário |

Uma leitura saudável é um conjunto de números de cobertura que sobem devagar enquanto o conteúdo amostrado melhora: resultados que os clientes reconhecem, responsáveis que sabem nomear seu serviço e um registro de verificação que mostra afirmações passando de não confirmadas a verificadas, ou sendo descartadas.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Medidas de cobertura (responsável, resultado, inventário de IA) | Baratas, concretas e disponíveis agora | Fáceis de satisfazer no papel; nada dizem sobre qualidade sem uma amostra |
| Medidas de evidência de resultado | Ligam o trabalho de serviço ao valor, em linha com a ênfase declarada do proprietário | Lentas, ruidosas e dependentes de dados que talvez ainda não existam |
| Esperar um conjunto de métricas publicado do ITIL 5 | Evita retrabalho se o proprietário publicar um | Atrasa um trabalho útil em qualquer versão; o proprietário pode não publicar nenhum |
| Seguir resumos de terceiros | Rápido e detalhado | Discordam entre si e do proprietário; risco de agir sobre detalhes não confirmados |

A conclusão em prosa é medir as bases agora, manter as afirmações rotuladas e mudar de rumo quando o proprietário publicar mais. O custo de errar é baixo, porque responsabilidade, resultados e supervisão da IA já valiam a pena de qualquer modo.

## Perguntas para discutir com sua equipe

**1. Quais dos nossos serviços, produtos, plataformas e sistemas de IA não têm hoje um responsável nomeado?**
Comece listando o que existe, porque as pessoas muitas vezes encontram sistemas que ninguém lembra de ter adotado. Espere surpresa com recursos ativados por padrão em ferramentas de fornecedores. O facilitador deve registrar cada lacuna sem culpa. Uma boa continuação é perguntar quem seria chamado quando o item falhar de madrugada.

**2. O que acreditamos sobre o ITIL 5 que lemos num blog em vez de no proprietário?**
Nomear crenças de segunda mão transforma a verificação numa tarefa. As equipes costumam repetir porcentagens, datas e nomes de práticas com confiança. Classifique cada crença em verificada, plausível e desconhecida. Peça a alguém que confira cada uma na página do proprietário e registre a data.

**3. Que serviço poderíamos descrever a um cliente como um resultado, e não como uma cifra de disponibilidade?**
A prática voltada ao valor parte dos resultados. As equipes recorrem por padrão a porcentagens de disponibilidade; por isso insista na frase do cliente: o que fica melhor para ele quando o serviço funciona. Continue perguntando como perceberíamos se o resultado piorasse enquanto a meta continuasse verde.

**4. Onde usamos IA hoje, e quem supervisiona cada uso?**
Isso testa se a governança existe na prática. As respostas vão de "em lugar nenhum" a uma longa lista que inclui recursos de fornecedores. Atente para uma supervisão que seja apenas um documento de política. Uma boa continuação é perguntar o que nos diria que um sistema de IA estava errado.

**5. Qual das cinco medidas seria a mais fácil de manipular aqui, e como perceberíamos?**
Peça ao grupo que projete a jogada de manipulação, em vez de se defender dela em abstrato. Registre cada jogada e confira-a contra a barreira de proteção pareada. É uma versão curta da revisão trimestral de manipulação.

**6. Qual é a menor primeira medida que podemos rodar neste trimestre e que ajuda qualquer que seja a versão que seguirmos?**
Passos pequenos valem mais do que um programa de transição construído sobre detalhes não verificados. As respostas típicas são o mapa do parque ou um inventário de IA. Escolha uma com responsável e data e combine quando reler as publicações do proprietário.

## Quatro perspectivas

### Equipes de produto e entrega

Perguntam a vocês quem é o dono do produto depois do release. Mantenham o serviço em operação dentro da fronteira do produto, escrevam uma frase de resultado e coloquem os recursos de IA que vocês constroem no mesmo mapa do parque que todo o resto. Mostrem primeiro os números da própria equipe e mantenham-nos longe das avaliações individuais.

### Equipes de serviço e operações

Suas práticas são a base de trabalho. Continuem a medi-las, registrem evidências de que funcionam e mostrem como a assistência de IA é supervisionada onde toca tickets, alertas ou mudanças. Usem o registro de verificação para sinalizar afirmações de material de treinamento antes que cheguem a um runbook.

### Liderança e governança

Financiem a responsabilidade e a verificação antes de financiar um programa de transição. Peçam o mapa do parque, o inventário de IA, o registro de verificação e a idade da evidência dos resultados. Tratem uma cifra de cobertura vermelha como motivo para perguntar de que ajuda a equipe precisa, e não como motivo para atribuir culpa.

### Clientes e usuários

Vocês devem poder ver para que serve um serviço nos seus próprios termos e saber quando a IA faz parte de como vocês são atendidos. Peçam a frase de resultado e digam se ela combina com a sua experiência.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de uma empresa regional de logística mantém um portal do cliente, um sistema de armazém e um assistente de IA recém-acrescentado que redige respostas para a central de serviços. O gerente de serviços ouve que o ITIL 5 enfatiza produtos e governança de IA, e a liderança pede um plano de medição em um mês. Os números deste exemplo são ilustrativos.

A equipe resiste a redigir um plano a partir de apresentações de slides. Ela constrói um mapa do parque: 11 serviços, três produtos digitais, duas plataformas e quatro recursos habilitados por IA, um dos quais foi ativado por padrão em uma ferramenta de fornecedor e não tinha responsável. A cobertura de responsáveis do parque na primeira contagem é de 75%. A equipe registra o que diz a página de certificação do proprietário em uma nota de uma página e lista todas as outras afirmações sobre o ITIL 5 como não confirmadas.

Cada recurso de IA recebe um responsável, um ponto de revisão humana e uma entrada no registro de riscos, o que leva a cobertura do inventário de sistemas de IA de 50% a 100% em um mês. O líder da central de serviços decide que toda resposta redigida por IA é lida por um atendente antes de ser enviada e que os atendentes registram mudanças relevantes nos rascunhos. A equipe também escreve frases de resultado para os três produtos digitais, e o resultado do portal ("os clientes conseguem saber onde está a sua remessa sem ligar") é testado com cinco clientes, dois dos quais o descrevem de outro modo.

A equipe então pega um risco de manipulação. Um gerente propõe elevar a cobertura de declarações de resultado escrevendo uma frase para os onze serviços, "melhorar a eficiência operacional". A barreira de proteção, uma amostra com clientes, teria mostrado que ninguém a reconheceu, e a equipe rejeita o atalho. O que continua difícil: apenas dois serviços têm um sinal de evidência coletado hoje, e a proporção de rascunhos de IA alterados pelos atendentes depende de eles registrarem as edições de forma consistente. O plano para o próximo trimestre é acrescentar sinais de evidência para mais dois serviços.

## Ágil, IA, automação e análise

### Ágil

Trate a adoção como melhoria contínua: um pequeno backlog de mudanças, revisto com as partes interessadas e ajustado à medida que o proprietário publicar mais. Um hábito prático é uma revisão regular do registro de verificação e do mapa do parque. O cuidado é que um programa de transição com uma única data de entrada em produção esconde o trabalho de verificação e repete o padrão da mudança big-bang.

### IA

O ITIL 5, como o proprietário o descreve, cobre ambientes habilitados por IA. Dê a todo uso de IA um responsável, um ponto de revisão humana e uma forma de detectar erros e meça a cobertura do inventário e o par de qualidade. O cuidado é não pedir a um assistente de IA que resuma o ITIL 5 de memória, já que ele pode produzir detalhes confiantes e errados. Dê a ele o texto que você leu do proprietário e peça que cite esse texto.

### Automação

Automatize o mapa do parque onde puder: puxe as listas de serviços e produtos do seu catálogo e dos dados de configuração e sinalize entradas sem responsável ou com confirmação vencida. A automação também precisa ser medida: quantos alertas levaram a ação. O cuidado é que a automação expõe problemas de qualidade de dados; por isso mantenha uma pessoa responsável por resolver cada alerta.

### Análise

Acompanhe um punhado de sinais de base ao longo do tempo e mostre quantos itens estão por trás de cada porcentagem. Use-os para decidir onde pôr o esforço de melhoria, não para classificar equipes. O cuidado é que uma contagem de "responsáveis nomeados" pode ser manipulada nomeando qualquer um, e os dados podem estar desatualizados; por isso pareie-a com a confirmação do responsável (veja o tópico 10.8, Métricas de análise e qualidade de dados).

## Olhar setorial

**Startup.** Pode haver um só produto e poucas pessoas. Nomeie o responsável, escreva a frase de resultado e liste as ferramentas de IA que a equipe usa. Pule o resto até haver um motivo para acrescentá-lo.

**Pequena empresa.** A TI pode ser uma pessoa ou um fornecedor. Pergunte ao fornecedor quais recursos de IA estão ativos nas ferramentas que você paga e mantenha uma curta lista de serviços com seus responsáveis. Trate com cuidado as alegações de fornecedores sobre qualquer estrutura.

**Grande empresa.** O parque é grande e a responsabilidade se espalha entre equipes e fornecedores. Padronize a definição de "responsável" e de "declaração de resultado", faça a varredura de descoberta em uma cadência e mantenha um registro de verificação central para que as equipes não repitam cada uma a pesquisa.

**Governo e setor público.** As regras de compras, auditoria e jurídicas moldam o que você pode adotar e quando. Trate as publicações do proprietário e a regulamentação aplicável como insumos de projeto, registre a data em que as leu e use o registro de verificação como evidência para os auditores (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo é sobretudo tempo da equipe: construir o mapa do parque, escrever frases de resultado, confirmar responsáveis e fazer uma varredura de descoberta de sistemas de IA. Há pouco custo de ferramentas se você já tem um catálogo ou dados de configuração. O custo maior é a disciplina de manter o mapa e o registro atuais.

O retorno é retrabalho evitado e melhores decisões. Um plano de transição construído sobre afirmações não verificadas corre o risco de gastar nas mudanças erradas. As lacunas de responsabilidade e de inventário de IA são achados que importam em qualquer versão da estrutura, já que um recurso de IA sem responsável em um processo voltado ao cliente é um risco. Descreva o benefício como um padrão, não como um número: menos sistemas sem responsável, menos surpresas em auditorias e conversas mais claras com os clientes sobre valor. Meça suas próprias linhas de base, como a cobertura de responsáveis e a idade da evidência dos resultados, antes e depois do trabalho se precisar de cifras para um business case (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **Repetir alegações de blogs como fatos.** Marque cada alegação como verificada ou não confirmada e aponte apenas para as páginas do proprietário nas verificadas.
- **Rebatizar serviços como produtos.** Mude a responsabilidade e a prestação de contas pelo ciclo de vida, ou o rótulo é decoração.
- **Cobertura sem conteúdo.** Uma cifra alta de cobertura com frases de resultado vazias ou copiadas é manipulação. Amostre o conteúdo com os clientes.
- **Governança de IA como documento.** Nomeie responsáveis, pontos de revisão e datas de revisão e teste se as pessoas os seguem.
- **Esperar pela estrutura para medir.** Responsabilidade, resultados e supervisão da IA são úteis agora. Comece e ajuste quando o proprietário publicar mais.
- **Tratar um certificado como conformidade.** Meça se as equipes conseguem executar a prática, não quem passou em um exame.
- **Descoberta única.** Recursos de IA surgem continuamente. Faça a varredura em uma cadência.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerenciar | Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Disciplina de fontes | O conhecimento sobre o ITIL 5 vem de blogs e boatos | Algumas páginas do proprietário lidas mas não registradas | Afirmações verificadas e não confirmadas registradas com datas | Afirmações reconferidas antes de cada decisão | As equipes compartilham um registro de verificação vivo e datado |
| Responsabilidade | Responsáveis pouco claros para a maioria dos itens | Responsáveis nomeados para os serviços principais | Mapa do parque com um responsável para cada item | Lacunas de responsabilidade revistas e fechadas em uma cadência | Os responsáveis se coordenam entre equipes e fornecedores |
| Resultados e evidência | Apenas metas e contagens | Frases de resultado para os serviços principais | Resultado e sinal de evidência para cada serviço | Idade da evidência revista; resultados obsoletos revisitados | Resultados escritos em conjunto com os clientes e atualizados continuamente |
| Governança de IA | Uso de IA desconhecido | Principais usos de IA listados | Responsável, ponto de revisão e entrada de risco por sistema | Erros e substituições medidos e revistos | A governança se adapta conforme a IA e as regras mudam |

## Lista de verificação

- [ ] Lemos as páginas do ITIL 5 do proprietário e registramos o que elas dizem, com a data.
- [ ] Toda afirmação sobre o ITIL 5 em nossos planos está marcada como verificada ou não confirmada.
- [ ] Temos um mapa do parque de serviços, produtos, plataformas e sistemas de IA.
- [ ] Todo item do mapa tem um responsável que o confirmou.
- [ ] Todo serviço tem uma frase de resultado e um sinal de evidência nomeado.
- [ ] Relatamos a idade da evidência dos resultados com percentis.
- [ ] Todo sistema de IA tem um responsável, um ponto de revisão humana e uma entrada no registro de riscos.
- [ ] Fazemos uma varredura de descoberta de recursos de IA em um calendário.
- [ ] Cada medida tem um vetor de manipulação e uma barreira de proteção na mesma página.
- [ ] Escolhemos uma primeira medida com responsável e data.

## Prompts de IA

**Construa um mapa do parque a partir de material que você cola.**

```text
I will paste a list of our services, digital products, platforms, and AI-enabled
features: [paste list]. Build a table with columns: item, type (service, product,
platform, AI system), owner (use only what I provided; write "unknown"
otherwise), and one question I should ask about it. Ask clarifying questions first
if the list is ambiguous. Do not invent items or owners. List your assumptions at
the end.
```

**Separe afirmações sobre o ITIL 5 em verificadas e não confirmadas.**

```text
Below are statements we have heard about ITIL 5: [paste statements]. Below is text
I copied from the owner's published pages: [paste owner text and the date I
read it]. For each statement, say whether the owner text supports it, contradicts
it, or says nothing, and quote the supporting words exactly. Do not use outside
knowledge and do not invent dates or practice names. List your assumptions and
what you could not judge.
```

**Redija frases de resultado e sinais de evidência para revisão.**

```text
Our services are: [list services with one line each on who uses them]. For each,
propose a one-sentence outcome in the customer's words and two candidate evidence
signals that we may already collect from [list data sources]. Mark every outcome
as a draft for customer review. Do not invent benchmark values or results. List
your assumptions and the questions I should ask customers.
```

**Revise o risco de manipulação das cinco medidas.**

```text
We plan to report these measures: [paste measure names and definitions]. Our
context: [team size, culture, tools]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent statistics or compliance claims. List your
assumptions.
```

## Skills de IA

- [ITIL 5](../../../../skills/itil-5/SKILL.md): use para construir um mapa do parque, uma análise de lacunas e um plano de adoção em fases, com as afirmações sobre o ITIL 5 sinalizadas como não confirmadas.
- [Maturity models](../../../../skills/maturity-models/SKILL.md): use para transformar a tabela de maturidade em uma autoavaliação da equipe.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que cobre uma métrica e sua barreira de proteção pareada.

## Ideias-chave

- Uma afirmação sobre o ITIL 5 só é verificada se a publicação do próprio proprietário a diz, e a data em que você a leu deve ser registrada.
- Os temas declarados pelo proprietário, produtos digitais, ambientes habilitados por IA e resultados mensuráveis, podem ser medidos hoje como responsabilidade, evidência de resultado e supervisão da IA.
- Os números de cobertura são fáceis de satisfazer no papel; por isso amostre o conteúdo e mantenha uma barreira de proteção ao lado de cada um.
- Continue medindo as práticas do ITIL 4 que funcionam e mude uma medida apenas quando a orientação do proprietário e a sua evidência concordarem.
- Comece com uma medida e um mapa do parque e ajuste à medida que o proprietário publicar mais.

## Referências e leituras complementares

1. PeopleCert, ITIL Foundation Bridge (Version 5), certification page, accessed 20 October 2026, https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-foundation-bridge-version-5-4158
2. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
3. Wikipedia, [Gestão de serviços de TI](https://en.wikipedia.org/wiki/IT_service_management).
4. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
5. Wikipedia, [Inteligência artificial](https://en.wikipedia.org/wiki/Artificial_intelligence).
6. Wikipedia, [Indicador-chave de desempenho](https://en.wikipedia.org/wiki/Key_performance_indicator).
7. Wikipedia, [Gerenciamento de produtos](https://en.wikipedia.org/wiki/Product_management).
8. Wikipedia, [Registro de riscos](https://en.wikipedia.org/wiki/Risk_register).
