# Um roteiro de adoção incremental

**Comece onde você está, entregue algo útil a uma equipe no primeiro mês e faça o programa crescer em pequenos passos, cada um dos quais conquista o direito ao seguinte.**

## Visão geral e motivação

A maior parte da orientação sobre métricas descreve um estado final: um conjunto completo de medidas, um repositório de dados limpo, um painel para cada público, uma cultura de evidência. Poucas organizações chegam lá por plano. Chegam, quando chegam, por uma série de pequenos passos úteis, cada um dos quais se pagou antes de o seguinte começar. Este tópico oferece um roteiro nesse espírito: os primeiros 30 dias, os 60 seguintes e mais 90, que juntos somam cerca de 180 dias. Os prazos são uma forma aproximada, e não uma promessa. Uma equipe pequena pode avançar mais depressa, e uma grande ou cautelosa mais devagar.

A lógica é a mesma lógica de entrega contínua que o resto do livro recomenda para serviços. Entregue cedo uma fatia fina e funcional. Ponha-a diante de usuários reais. Aprenda com o que eles fazem com ela. Estenda o que ajudou e abandone o que não ajudou. Um programa de métricas que gasta seis meses em projeto e lança um painel completo para um público surpreso repete o velho erro do grande release: muito esforço, feedback tardio e grande chance de o resultado se ajustar mal. A ideia de um [produto mínimo viável (MVP)](https://en.wikipedia.org/wiki/Minimum_viable_product), a menor versão de algo que entrega valor e gera aprendizado, aplica-se a um programa tanto quanto a um produto.

Os objetivos ágeis moldam o roteiro de vários modos. O envolvimento contínuo das partes interessadas significa que as primeiras semanas são gastas com as pessoas que usarão os números e serão medidas por eles, e não em uma sala dos fundos. A melhoria contínua significa que o próprio plano é revisto e mudado à medida que o programa aprende, no espírito do [kaizen](https://en.wikipedia.org/wiki/Kaizen), a prática da melhoria pequena e constante por todos. A evolução permanente significa que nenhuma lista de medidas é final. Um ritmo sustentável significa que o roteiro pede uma parcela modesta do tempo de uma equipe e que o programa não acrescenta um ônus de relato que supere sua ajuda. E construir em torno de indivíduos motivados significa começar com voluntários e com as perguntas que importam para eles.

O roteiro respeita os outros tópicos desta parte. Pressupõe as regras básicas de confiança do tópico de implantação (veja o tópico 11.3, Implantar métricas sem criar medo), usa os princípios de painéis (veja o tópico 11.1, Projetar um painel de métricas de serviço), mantém fina a ferramenta até o valor ser provado (veja o tópico 11.2, Panorama de ferramentas) e acompanha o progresso com o perfil de maturidade do programa (veja o tópico 11.4, Modelo de maturidade para programas de métricas).

Três ideias ajudam a ancorar o trabalho inicial. Primeiro, comece com uma linha de base. Um [gráfico de sequência (run chart)](https://en.wikipedia.org/wiki/Run_chart) de alguns meses de dados existentes mostra como as coisas estão e dá às mudanças posteriores algo com que se comparar. Segundo, confira a [qualidade dos dados](https://en.wikipedia.org/wiki/Data_quality) no início, já que as melhorias iniciais mais valiosas muitas vezes vêm de corrigir como o trabalho é registrado e não de qualquer gráfico. Terceiro, torne visíveis os resultados: um [irradiador de informação](https://en.wikipedia.org/wiki/Information_radiator), uma exibição que mostra informação de relance sem que ninguém pergunte, ajuda uma equipe a ver os próprios dados e a iniciar conversas. Os primeiros passos costumam tomar a forma de um [projeto piloto](https://en.wikipedia.org/wiki/Pilot_project) com participantes dispostos, seguido de espalhar o que funcionou como [gestão da mudança](https://en.wikipedia.org/wiki/Change_management) na organização mais ampla (veja o tópico 9.6, Métricas de mudança organizacional e adoção).

Nenhum roteiro serve a toda organização. O plano abaixo é um ponto de partida a ser adaptado pelas pessoas que o executarão.

## Princípios-chave

- **Comece onde você está.** Use os dados, as ferramentas e os hábitos que tem. Não espere por uma nova plataforma.
- **Pilote com voluntários.** De uma a três equipes dispostas, trabalhando em perguntas que lhes importam.
- **Entregue valor no primeiro mês.** Algo que ajude uma equipe, e não um relatório para a gestão.
- **Uma fatia fina de cada vez.** Uma fonte, uma visão, um punhado de medidas, depois estenda.
- **Escreva cedo as promessas.** Um estatuto curto antes de o primeiro número ser compartilhado.
- **Reveja e ajuste.** Ao fim de cada etapa, confira o que ajudou, o que machucou e o que mudar.
- **Pare coisas.** Aposente as medidas e relatórios que ninguém usa à medida que chegam os novos.
- **Não pule a confiança.** Avançar depressa nas ferramentas deixando a confiança para trás produz distorção.

## Definições de métricas

As medidas abaixo acompanham o progresso da própria adoção. São para a equipe do programa e os patrocinadores e são lidas como sinais, e não como metas. Evitam contagens de painéis ou relatórios, que premiariam a atividade.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo até o primeiro resultado útil | Tempo decorrido desde o início do programa até a primeira medida que uma equipe piloto diz que a ajudou a fazer uma mudança | dias do início ao primeiro uso útil confirmado pela equipe | dias | Registro do programa; confirmação da equipe | Melhoria contínua | Entrega precoce e contínua de valor | Uma vez, depois por nova equipe |
| Equipes que usam ativamente as medidas | Proporção das equipes convidadas que usaram suas medidas em uma revisão no período, pelo relato delas | equipes que usaram medidas em uma revisão / equipes convidadas | porcentagem | Confirmação da equipe; notas de revisão | Gestão da mudança organizacional | Envolvimento contínuo das partes interessadas | Mensal |
| Melhorias atribuídas às medidas | Número de mudanças que as equipes fizeram e que atribuem, com razões, ao que uma medida mostrou | contagem de mudanças relatadas pelas equipes com um vínculo declarado a uma medida | contagem | Registro de melhorias | Melhoria contínua | Experimentos informados por evidência | Trimestral |
| Medidas e relatórios aposentados | Medidas ou relatórios encerrados porque deixaram de informar decisões | contagem de aposentados por trimestre | contagem | Registro de mudanças do catálogo | Melhoria contínua | Evolução permanente | Trimestral |
| Cobertura de linhas de base | Proporção das medidas combinadas que têm uma linha de base registrada de pelo menos alguns meses | medidas com uma linha de base / medidas combinadas | porcentagem | Catálogo de métricas | Gestão de níveis de serviço; melhoria contínua | Evidência acima de opinião | Trimestral |
| Parcela de esforço do programa | Proporção do tempo das equipes participantes gasta em tarefas de medição | horas em coleta, relato e revisão / horas totais da equipe, por estimativa | porcentagem | Estimativas de tempo das equipes | Melhoria contínua | Ritmo sustentável | Trimestral |
| Conclusão das revisões de etapa | Proporção das revisões de etapa planejadas realizadas com as equipes, com as mudanças registradas | revisões realizadas com mudanças registradas / revisões planejadas | porcentagem | Registros do programa | Melhoria contínua | Reflexão regular | Por etapa |

O tempo até o primeiro resultado útil é medido pelo relato da própria equipe piloto, e não pelo do programa. As equipes que usam ativamente as medidas são contadas pelo que as equipes dizem, e não por logins. As melhorias atribuídas às medidas são uma contagem de vínculos declarados e não uma meta, já que uma meta produziria vínculos inventados. A parcela de esforço do programa deve continuar pequena, e um aumento é um alerta.

## Recomendações

### Dias 1 a 30: escute, combine e entregue uma coisa útil

**1. Ache um patrocinador e alguns voluntários.** Peça a um líder sênior que patrocine o programa e assine um estatuto curto. Convide de uma a três equipes curiosas e respeitadas. Explique que o objetivo é ajudá-las a ver o próprio trabalho e melhorá-lo e que os dados não serão usados para classificar nem avaliar indivíduos (veja o tópico 11.3, Implantar métricas sem criar medo).

**2. Faça as perguntas.** Reúna-se com cada equipe piloto por uma hora. Pergunte o que as atrasa, o que as surpreende e o que gostariam de saber. Escreva as perguntas. Escolha de três a cinco medidas deste livro que respondam a essas perguntas, cada uma com uma barreira de proteção companheira (veja o tópico 1.3, Resultados acima da produção: escolher o que medir).

**3. Olhe os dados que você já tem.** Puxe alguns meses de histórico dos sistemas de registro e trace gráficos de sequência. Confira a qualidade dos dados com honestidade: campos ausentes, categorias mudadas, registros criados depois do fato. Corrija a captura na fonte onde for barato. Uma planilha simples basta nesta etapa (veja o tópico 1.5, Fontes de dados e instrumentação).

**4. Entregue uma coisa útil.** Até o fim do primeiro mês, dê a cada equipe piloto uma pequena visão dos próprios dados, com uma definição para cada medida, e realize uma conversa de revisão. Procure uma mudança que os dados sugerem, como remover uma etapa de espera, e ajude a equipe a tentá-la. O primeiro resultado útil importa mais que uma ferramenta polida.

### Dias 31 a 90: aprenda, estenda e torne rotina

**5. Realize a primeira revisão com as equipes piloto.** Pergunte o que ajudou, o que confundiu, o que pareceu arriscado e o que mudariam. Revise as medidas, as definições e o estatuto. Escute em especial por sinais de medo ou de manipulação. Compartilhe uma breve história do que mudou, contada pela equipe.

**6. Automatize o caminho fino.** Onde o trabalho manual é pesado, automatize os um ou dois feeds que mais importam, com verificações de atualidade e de reconciliação contra a fonte. Mantenha as definições em um catálogo simples e portável. Não compre ainda uma plataforma, a menos que o teste tenha mostrado que as ferramentas existentes não dão conta (veja o tópico 11.2, Panorama de ferramentas).

**7. Estabeleça um ritmo de revisão.** Realize uma breve revisão mensal em cada equipe piloto que olhe as tendências, registre decisões e anote eventos. Inclua a chance de dizer "nenhuma ação". Acrescente um olhar trimestral sobre todo o programa com os patrocinadores, usando visões agregadas e comentários das equipes.

**8. Convide a próxima onda.** Ofereça a abordagem a mais equipes, conduzida pelas histórias das equipes piloto. Deixe cada nova equipe escolher suas medidas de um cardápio, com um pequeno núcleo comum. Mantenha sustentável o ritmo: algumas equipes por vez, com apoio das equipes piloto e do líder do programa.

### Dias 91 a 180: fortaleça, equilibre e prepare a passagem

**9. Projete as visões dos públicos.** Com o público, projete as visões de responsável por serviço e de liderança descritas no tópico do painel, usando definições compartilhadas e os comentários das equipes (veja o tópico 11.1, Projetar um painel de métricas de serviço). Mantenha pequena cada visão. Aposente os relatórios mais antigos que elas substituem.

**10. Acrescente equilíbrio e resultados.** Estenda as medidas do piloto para um conjunto equilibrado que inclua qualidade, confiabilidade, experiência e custo, com resultados ao lado da atividade (veja o tópico 6.5, Realização de valor e resultados de negócio). Confira cada nova medida quanto a seu vetor de manipulação e barreira de proteção antes de ser mostrada.

**11. Avalie o programa.** Rode a autoavaliação do tópico do modelo de maturidade com cada equipe participante, relate o perfil e os temas e escolha um ou dois próximos passos na dimensão que limita as outras (veja o tópico 11.4, Modelo de maturidade para programas de métricas). Conte o que você aposentou além do que acrescentou.

**12. Decida o que vem a seguir.** Na revisão dos 180 dias, com as equipes e os patrocinadores, decida se continua, ajusta ou para. Escreva o que o programa fez, com que esforço e o que mudou nos serviços. Escolha a próxima etapa: mais equipes, ferramentas mais profundas, vínculos com medidas financeiras ou de clientes ou consolidação. Registre a decisão e os motivos.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Tempo até o primeiro resultado útil | Declarar útil uma mudança trivial; apressar uma vitrine | Perguntar à equipe o que mudou; conferir se a mudança persistiu |
| Equipes que usam ativamente as medidas | Realizar revisões para cumprir tabela; alegar um uso que não aconteceu | Pedir a decisão tomada; amostrar notas de revisão; conversar com as equipes |
| Melhorias atribuídas às medidas | Inventar vínculos para atingir uma contagem; reivindicar crédito por mudanças não relacionadas | Manter descritiva; pedir à equipe o raciocínio; aceitar vínculos incertos como tais |
| Medidas e relatórios aposentados | Aposentar medidas incômodas; aposentar e reintroduzir sob novos nomes | Rever a lista de aposentados em busca de tendências desfavoráveis; exigir um motivo declarado |
| Cobertura de linhas de base | Fabricar histórico; usar um período que favoreça os resultados posteriores | Registrar a fonte e o período; guardar os dados brutos; escolher as linhas de base antes das mudanças |
| Parcela de esforço do programa | Subestimar o esforço; mover o trabalho para pessoas fora da contagem | Perguntar a quem faz o trabalho; comparar com hora extra no fim do ciclo |
| Conclusão das revisões de etapa | Revisões curtas e perfunctórias; registrar mudanças que nunca acontecem | Conferir se as mudanças são executadas; perguntar às equipes se a revisão valeu o tempo delas |

Uma leitura saudável mostra um primeiro resultado útil no primeiro ou segundo mês, equipes que usam as medidas porque as acham úteis, um punhado de mudanças atribuídas, relatórios aposentados ao lado de novos, uma parcela de esforço modesta e estável e revisões de etapa que levam a mudanças reais no plano.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Piloto com voluntários | Confiança; histórias reais | Começo mais lento; viés de seleção |
| Implantação em todas as equipes juntas | Cobertura rápida | Resistência; distorção |
| Planilhas primeiro | Rápido; baixo custo; aprendizado | Frágil; esforço manual |
| Plataforma primeiro | Polimento; escala | Custo; ajuste fraco antes de as perguntas estarem claras |
| Poucas medidas por equipe | Foco; baixo ônus | Pode perder áreas importantes |
| Muitas medidas de uma vez | Amplitude | Sobrecarga; proliferação |
| Plano fixo de 180 dias | Clareza para os patrocinadores | Rígido; ignora o que se aprende |
| Revisões de etapa que mudam o plano | Aprendizado; ajuste | Menos previsível para os patrocinadores |

A resposta pragmática é começar com voluntários e planilhas, estender à medida que o valor é mostrado, dar aos patrocinadores uma forma clara e pontos de revisão e permitir que o plano mude.

## Perguntas para discutir com sua equipe

**1. Qual é uma pergunta que gostaríamos de poder responder sobre o nosso trabalho neste mês?**
Colham perguntas de todos. Escolham a que mais importa e que poderia ser respondida com dados que já temos. Combinem como seria uma resposta útil.

**2. O que já medimos, e quem olha?**
Listem os relatórios existentes e seus públicos. Marquem os que ninguém usa. Decidam quais aposentar para abrir espaço aos novos.

**3. O que nos deixaria dispostos a tentar isto por um mês?**
Escutem as condições: um estatuto, voz nas medidas, tempo limitado. Combinem-nas com o patrocinador antes de começar.

**4. Que pequena mudança os primeiros dados poderiam sugerir?**
Olhem juntos alguns meses de histórico. Nomeiem uma possível mudança e um resultado esperado. Combinem como saberemos se ajudou.

**5. Quanto do nosso tempo podemos dar a isto sem prejudicar o trabalho?**
Estimem em horas por mês. Combinem um limite e revejam-no na primeira revisão de etapa.

**6. Quando devemos parar ou mudar o plano?**
Descrevam sinais: nenhum resultado útil, medo crescente, esforço pesado. Combinem quem decide e como a decisão será registrada.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes piloto carregam o risco inicial e dão a prova inicial. Devem pedir o estatuto, escolher as próprias medidas, usar as primeiras visões em suas próprias revisões e relatar com honestidade o que ajudou e o que não ajudou. Ganham quando o primeiro resultado remove um obstáculo real.

### Equipes de serviço e operações

As equipes de operações fornecem boa parte dos dados e muitas vezes têm a maior carga. Devem ajudar a avaliar a qualidade dos dados, apontar onde uma medida premiaria o comportamento errado e proteger o tempo para o plantão e o trabalho com incidentes. O ritmo sustentável delas é uma restrição fixa do plano.

### Liderança e governança

Os líderes patrocinam, assinam o estatuto e protegem o programa do mau uso. Devem aceitar um começo modesto, pedir resultados e histórias em vez de contagens de painéis, evitar pedir classificações e deixar o plano mudar à medida que o programa aprende. Devem julgá-lo pelas decisões que melhoraram.

### Clientes e usuários

Os clientes e usuários ganham quando o programa leva a serviços melhores. Podem participar da escolha das medidas de experiência e da revisão do que é reunido sobre eles. Devem ver as mudanças que decorrem do feedback deles.

## Na prática: um exemplo de gestão de serviços

Uma autoridade de transporte público de porte médio tem 12 equipes entre serviços digitais, tecnologia de operações e uma central de serviços. Um novo diretor de informática quer "um programa de métricas em seis meses". Uma tentativa anterior comprou uma plataforma e produziu painéis que poucos abriram. As cifras abaixo são ilustrativas.

A chefe de melhoria de serviços propõe um roteiro de 180 dias com revisões de etapa nos dias 30, 90 e 180. Na primeira semana, reúne-se com o diretor de informática, que assina um estatuto de uma página, e convida três equipes voluntárias: a central de serviços, uma equipe de informação ao passageiro e uma equipe de operações de infraestrutura. Em sessões de uma hora, cada equipe declara suas perguntas. A central de serviços quer saber por que os mesmos problemas de clientes voltam. A equipe de informação ao passageiro quer saber se suas mudanças quebram coisas. A equipe de infraestrutura quer saber quanto do seu tempo vai para trabalho não planejado.

Para cada equipe, ela escolhe de três a cinco medidas deste livro, com barreiras de proteção, e monta gráficos de sequência em uma planilha compartilhada a partir dos cinco meses anteriores de dados. A verificação de dados acha que 27% dos registros de mudanças da equipe de informação ao passageiro foram criados depois da implantação e que as categorias da central de serviços tinham sido reorganizadas no meio do período. Corrigir o hábito de entrada e mapear as categorias leva duas semanas. No dia 27, a central de serviços vê que 19% de seus contatos eram retornos em uma semana, concentrados em duas categorias ligadas a uma página confusa de horários. A equipe trabalha com a equipe de informação ao passageiro para mudar a página. A central de serviços confirma isso como o primeiro resultado útil, no dia 27.

Na revisão do dia 30, as equipes pedem definições mais curtas e um número menor de gráficos, e uma pergunta se os dados seriam usados em suas avaliações anuais. O estatuto é esclarecido para dizer que não serão. Entre os dias 31 e 90, a chefe automatiza dois feeds, monta uma revisão mensal em cada equipe que registra decisões e convida mais quatro equipes com base nas histórias do piloto. As equipes que usam ativamente as medidas somam 7 de 7 convidadas. Na revisão do dia 90, as equipes relatam cinco mudanças que atribuem às suas medidas. O programa aposentou três relatórios semanais antigos. A parcela de esforço é estimada em 3% do tempo das equipes. Entre os dias 91 e 180, a chefe projeta as visões de responsável por serviço e de liderança com esses públicos, acrescenta medidas de experiência e de custo ao conjunto equilibrado e roda a autoavaliação: a maioria das equipes está no Nível 2 em uso nas decisões e no 3 em confiança e segurança, e o próximo passo escolhido é um registro de decisões em toda equipe. No dia 180, o diretor de informática pede uma classificação de todas as 12 equipes por maturidade. A chefe oferece o perfil agregado e os temas, explica o estatuto, e o pedido é abandonado. Os patrocinadores concordam em estender o programa às cinco equipes restantes nos dois trimestres seguintes, ainda de forma voluntária.

## Ágil, IA, automação e análise

### Ágil

Entregue algo útil a uma equipe no primeiro mês e cresça em pequenos passos, cada um conquistando o seguinte, no mesmo espírito de entrega contínua dos serviços medidos. O cuidado é que um roteiro fixo com datas pode conduzir o programa quando o aprendizado diz para mudar de rumo.

### IA

Decida cedo onde a IA tem lugar no programa: assistentes de IA para análise e relato, medidas do uso de IA e governança. Acrescente-os em pequenos passos revistos, com uma pessoa conferindo a saída de IA usada em um relatório. O cuidado é que acrescentar recursos de IA cedo pode inflar a produção do programa antes de seu valor ser mostrado.

### Automação

Automatize a coleta de dados das primeiras medidas para que o esforço vá para a interpretação e meça a parcela de esforço do próprio programa. O cuidado é que automatizar medidas demais de uma vez cria uma carga de manutenção que o programa não consegue carregar.

### Análise

Acompanhe o tempo até o primeiro resultado útil e as melhorias atribuídas às medidas e reveja o roteiro contra elas. A decisão informada é expandir, manter ou parar. O cuidado é que as melhorias são difíceis de atribuir a uma medida; por isso descreva a evidência com honestidade.

## Olhar setorial

**Startup.** Comprima o roteiro. Em duas semanas, combine três perguntas e duas ou três medidas e olhem-nas juntos semanal ou quinzenalmente. Use o que já tem. Revisite após um trimestre. Uma startup que espera para construir ferramentas perderá o hábito de olhar.

**Pequena empresa.** Os primeiros 30 dias podem ser uma única conversa, uma lista de uma página de perguntas, uma planilha e uma mudança. As etapas seguintes envolvem um olhar mensal regular. O principal risco é que a pessoa que montou tudo seja a única que entende; por isso escreva o que cada medida significa.

**Grande empresa.** Use ondas de voluntários, uma pequena equipe central que apoia e não é dona das medidas, definições compartilhadas e revisões de etapa com os patrocinadores. Resista a uma única data global. Espere gastar a primeira etapa corrigindo a captura de dados e planeje a coordenação com segurança, privacidade e conselhos de trabalhadores ou representantes do pessoal onde existirem.

**Governo e setor público.** A consulta a representantes do pessoal e a comunicação clara aos órgãos de supervisão fazem parte do trabalho inicial. Os ciclos de compras muitas vezes favorecem começar com ferramentas já possuídas. Mantenha o relato obrigatório separado das medidas de melhoria e documente as decisões para a auditoria (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

Os custos dos primeiros 180 dias são sobretudo o tempo das pessoas: o líder do programa, um pequeno esforço de análise, uma parcela do tempo das equipes piloto e a atenção do patrocinador. Os custos de ferramentas podem ser baixos ou zero nas primeiras etapas. O custo maior é o de errar os primeiros passos, por exemplo lançando medidas sem confiança.

Os retornos aparecem cedo se o primeiro passo for bem escolhido: uma mudança que os dados sugeriram, relatórios aposentados, menos disputas sobre números e equipes que pedem mais. Construa o argumento a partir do seu próprio registro: dias até o primeiro resultado útil, as mudanças que as equipes atribuem às medidas, horas economizadas em relatórios aposentados e esforço gasto. Evite citar cifras externas sobre retornos de análise sem uma fonte rastreável e relevância para o seu cenário. A alegação crível é modesta e local (veja o tópico 7.7, Retorno do investimento e business case).

## Antipadrões e armadilhas

- **O lançamento "big-bang".** Meses de projeto e depois uma surpresa. Entregue cedo uma fatia fina.
- **Plataforma primeiro.** As ferramentas chegam antes das perguntas. Comece com o que tem.
- **Contar painéis.** Mede-se a atividade, ignora-se o valor. Acompanhe decisões e mudanças.
- **Pular o estatuto.** O medo preenche a lacuna. Escreva as promessas antes de o primeiro número ser mostrado.
- **Equipes demais de uma vez.** O apoio desaba. Espalhe em pequenas ondas.
- **Nunca parar nada.** Os relatórios antigos ficam ao lado dos novos. Aposente à medida que acrescenta.
- **Um plano fixo defendido contra a evidência.** O plano deve mudar à medida que você aprende.
- **Desistir depois da primeira falha.** As tentativas iniciais ensinam. Reveja, ajuste e tente de novo.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Começo e piloto | Sem plano; relatórios ad hoc | Equipes interessadas experimentam medidas sozinhas | Estatuto, patrocinador e pilotos voluntários com um primeiro resultado útil | O aprendizado do piloto conduz os planos das ondas; tempo até o valor acompanhado | As equipes espalham a abordagem entre si; patrocinadores e parceiros aderem |
| Extensão e ritmo | Esforços pontuais | Algumas revisões regulares | Revisões mensais das equipes e revisões trimestrais do programa | Parcela de esforço, aposentadoria e mudanças atribuídas geridas | As revisões se ligam entre equipes e serviços; o ritmo se adapta à necessidade |
| Aprendizado e ajuste | Plano fixo ou ausente | Lições ocasionais compartilhadas | As revisões de etapa mudam o plano | Passos do roteiro ligados ao perfil de maturidade | O programa melhora continuamente com as contribuições de todos |

## Lista de verificação

- [ ] Um patrocinador assinou um estatuto curto antes de o primeiro número ser compartilhado.
- [ ] De uma a três equipes voluntárias declararam suas perguntas com as próprias palavras.
- [ ] Existem uma linha de base de vários meses de dados e uma verificação de qualidade de dados para cada medida do piloto.
- [ ] Cada equipe piloto tem uma pequena visão com uma definição para cada medida.
- [ ] Um primeiro resultado útil é entregue e confirmado pela equipe no primeiro ou segundo mês.
- [ ] Existe um ritmo de revisão em cada equipe piloto que registra decisões.
- [ ] Os relatórios antigos são aposentados à medida que novas visões os substituem.
- [ ] O esforço que o programa pede às equipes é estimado e mantido pequeno.
- [ ] As revisões de etapa nos dias 30, 90 e 180 são realizadas com as equipes, e o plano muda em consequência.
- [ ] A próxima etapa é decidida com as equipes e os patrocinadores e registrada com os motivos.

## Prompts de IA

**Redija um plano de 180 dias.**

```text
Draft a 180-day roadmap for introducing a service metrics program in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Escolha as primeiras medidas.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Rode uma verificação de qualidade de dados.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Planeje uma revisão de etapa.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para escolher medidas iniciais com suas barreiras de proteção pareadas para uma equipe piloto.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um roteiro mantém as medidas no nível da equipe e traz um vetor de manipulação para cada medida introduzida.

## Ideias-chave

- Comece onde você está, com voluntários, um estatuto e os dados e ferramentas que já tem.
- Entregue um resultado útil a uma equipe no primeiro ou segundo mês.
- Estenda em pequenas ondas e aposente relatórios à medida que novas visões os substituem.
- Confira cedo a qualidade dos dados e corrija a captura na fonte.
- Realize revisões de etapa que mudem o plano e mantenha pequeno o esforço pedido às equipes.
- Decida a próxima etapa com as equipes e os patrocinadores e registre os motivos.

## Referências e leituras complementares

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Produto mínimo viável](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Gráfico de sequência](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Qualidade de dados](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Irradiador de informação](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Projeto piloto](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Gestão da mudança](https://en.wikipedia.org/wiki/Change_management).
