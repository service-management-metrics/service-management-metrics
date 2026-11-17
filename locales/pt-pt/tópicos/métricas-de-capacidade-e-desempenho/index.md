# Métricas de capacidade e desempenho

**Meça quão cheio está um serviço, quão lentas são suas requisições mais lentas e quanta folga resta antes que os usuários percebam e depois preveja a demanda com faixas, para que a capacidade chegue antes da necessidade, e não depois da reclamação.**

## Visão geral e motivação

A disponibilidade diz se um serviço responde. A capacidade e o desempenho dizem quão bem ele responde e por quanto tempo continuará respondendo à medida que a demanda cresce. Uma página de checkout que responde em oito segundos está "no ar" pela maioria das definições de disponibilidade e "quebrada" pela definição de qualquer cliente. Um banco de dados com 95% do seu armazenamento está saudável hoje e é uma interrupção no mês que vem. Este tópico cobre as medidas que fecham essas lacunas.

O [planejamento de capacidade](https://en.wikipedia.org/wiki/Capacity_planning) é a prática de determinar os recursos de que um serviço precisa para atender a uma demanda variável. No ITIL 4, isso fica na prática de gestão de capacidade e desempenho, que visa garantir que os serviços alcancem o desempenho combinado e esperado e atendam à demanda atual e futura com bom custo-benefício. A prática descreve isso em três níveis: o negócio (o que a organização pedirá de seus serviços), o serviço (como um serviço se comporta sob carga) e o componente (como cada servidor, banco de dados, enlace de rede ou fila se comporta). As medidas deste tópico funcionam sobretudo nos níveis de serviço e de componente e precisam de insumos do nível de negócio para prever qualquer coisa.

A [engenharia de confiabilidade de sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) trata a latência, o tráfego, os erros e a saturação como os quatro sinais que vale observar em qualquer sistema voltado ao usuário e liga as metas de desempenho aos objetivos de nível de serviço (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro). As equipes ágeis encontram a capacidade como uma pergunta de entrega: o próximo release suporta a carga esperada, e quem é dono da resposta? Tratar o desempenho como critério de aceitação, conferido no pipeline, leva a conversa para mais cedo.

Vários termos se repetem neste tópico. A **utilização** é a proporção da capacidade de um recurso que está em uso em um intervalo, por exemplo a proporção do tempo de processador ocupado. A **saturação** é a quantidade de trabalho esperando porque um recurso está plenamente usado, por exemplo o comprimento de uma fila de execução ou de um backlog de requisições. A utilização diz quão ocupado está um recurso. A saturação diz se o trabalho está fazendo fila para ele, e as filas são o que os usuários sentem. A **[latência](https://en.wikipedia.org/wiki/Latency_(engineering))** é o tempo entre uma requisição e sua resposta. A **[vazão](https://en.wikipedia.org/wiki/Throughput)** é a taxa em que um serviço conclui trabalho, por exemplo requisições por segundo. A **folga (headroom)** é a diferença entre a carga de pico atual e a carga em que o serviço deixa de cumprir seus objetivos. A **demanda** é o trabalho que os usuários e o negócio pedem ao serviço, o que não é o mesmo que o trabalho que ele conclui: um serviço sobrecarregado conclui menos do que foi pedido.

Uma propriedade das filas de espera explica por que essas medidas se comportam como se comportam. A [teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory) mostra que, para um serviço com chegadas aleatórias, o tempo de espera cresce devagar enquanto a utilização é moderada e depois sobe de forma acentuada à medida que a utilização se aproxima do uso pleno. A [lei de Little](https://en.wikipedia.org/wiki/Little%27s_law) relaciona o número médio de requisições em um sistema com a taxa de chegada e o tempo médio que cada uma passa ali. Um recurso com alta utilização média está perto de um penhasco. A forma exata da curva depende do serviço; por isso encontre-a testando o seu próprio sistema com [testes de carga](https://en.wikipedia.org/wiki/Load_testing) em vez de tomar emprestado um limiar de um artigo genérico.

A latência exige cuidado particular porque a média esconde a experiência que importa. Um [percentil](https://en.wikipedia.org/wiki/Percentile) declara o valor abaixo do qual cai uma dada proporção das observações: o 95º percentil (p95) é a latência que 95% das requisições superam. A [latência de cauda](https://en.wikipedia.org/wiki/Tail_latency) tende a dominar nos sistemas em que uma ação do usuário se desdobra em muitas chamadas internas. Relate percentis em vez de apenas a média (veja o tópico 1.6, Letramento estatístico para métricas de serviço, e o tópico 3.3, Tempo de resposta e de resolução de incidentes, que faz o mesmo argumento para o tempo de resolução).

Por fim, a capacidade depende da [previsão](https://en.wikipedia.org/wiki/Forecasting) da demanda, e a demanda tem padrões: ciclos diários, ciclos semanais e [sazonalidade](https://en.wikipedia.org/wiki/Seasonality) ligada ao calendário, a campanhas e a lançamentos de produtos. O [escalonamento automático (autoscaling)](https://en.wikipedia.org/wiki/Autoscaling) muda como isso é sentido, já que as plataformas de nuvem podem acrescentar recursos em minutos, mas não elimina o tema. O escalonamento automático tem limites, uma defasagem, um custo e dependências que não escalam, como um banco de dados ou uma interface de terceiros. O lado do custo pertence ao FinOps (veja o tópico 7.6, Métricas de FinOps e custos de nuvem).

Os tópicos vizinhos cobrem a aritmética da disponibilidade (veja o tópico 5.3, Métricas de disponibilidade), o projeto de alertas (veja o tópico 5.5, Métricas de monitoramento e qualidade de alertas) e a carga do rodízio (veja o tópico 5.7, Métricas de trabalho repetitivo e plantão). Aqui o assunto são os recursos do próprio serviço e seus tempos de resposta.

## Princípios-chave

- **Meça a saturação além da utilização.** A utilização mostra quão ocupado está um recurso, e a saturação mostra se o trabalho está esperando. Os usuários vivenciam a espera.
- **Relate a latência como uma distribuição.** Use percentis por operação voltada ao usuário e mantenha visível a cauda lenta. Uma média de uma distribuição assimétrica não descreve quase ninguém.
- **Ligue as metas à experiência do usuário.** Um limiar é significativo quando pode ser rastreado até algo que importa a um usuário ou ao negócio, e não ao que uma ferramenta por acaso plota.
- **Planeje com faixas e reveja-as.** Uma previsão é uma faixa com premissas declaradas. Compare-a com o que aconteceu e aprenda com o erro.
- **Conheça seus limites testando.** A capacidade é uma hipótese até que um teste de carga realista a confirme. Repita o teste depois de mudanças que importam.
- **Descreva sistemas, nunca pessoas.** Estas medidas pertencem a serviços, componentes e equipes. Nunca são uma nota de indivíduos.
- **Pese o custo contra o risco.** A capacidade sobrando custa dinheiro, e a capacidade faltando custa clientes. Torne visível a compensação, para que seja escolhida, e não deixada à deriva.

## Definições de métricas

A tabela lista sete medidas. Os relógios e as fronteiras são declarados em cada fórmula. As medidas baseadas em percentis usam uma janela fixa, declarada no registro, e são calculadas a partir de observações brutas ou de histogramas, nunca como média de médias.

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilização de recursos | Proporção da capacidade de um recurso em uso em um intervalo, relatada como um percentil alto da série de intervalos | capacidade ocupada / capacidade total, por intervalo de 1 a 5 minutos; relate a mediana e o 95º percentil na janela de revisão; janelas de manutenção com o recurso drenado são excluídas | porcentagem | Monitoramento de infraestrutura e métricas da plataforma de nuvem | Gestão de capacidade e desempenho; monitoramento e gestão de eventos | Critérios de aceitação operacional na definição de pronto; sinais de recursos da SRE | Semanal |
| Saturação | Quantidade de trabalho esperando por um recurso plenamente usado | comprimento da fila, fila de execução, requisições pendentes ou requisições limitadas (throttled), por intervalo; relate o 95º percentil e a proporção dos intervalos com qualquer espera; intervalos sem demanda são excluídos | contagem, ou porcentagem dos intervalos | Telemetria de aplicação e de infraestrutura | Gestão de capacidade e desempenho; monitoramento e gestão de eventos | Sinal de saturação da SRE; limite de trabalho em andamento em uma fila de serviço | Semanal |
| Percentil de latência | Tempo para responder a uma requisição de uma operação voltada ao usuário, relatado na mediana, no p95 e no p99 | tempo de resposta desde a requisição recebida na borda até o último byte enviado, por requisição bem-sucedida; requisições com falha são relatadas como erros, e não como respostas rápidas; meça em uma janela móvel | milissegundos | Registros do balanceador de carga ou do gateway, rastreamento, monitoramento de usuários reais | Gestão de nível de serviço; gestão de capacidade e desempenho | Indicador de latência da SRE e objetivo de nível de serviço | Contínua, revista semanalmente |
| Folga (headroom) | Carga restante que um serviço consegue suportar antes de violar seus objetivos | (carga de ruptura testada ou modelada - carga de pico atual) / carga de pico atual; o pico é a hora mais ocupada da janela; a carga de ruptura é a carga em que o objetivo de latência é violado pela primeira vez em um teste, e não o máximo do hardware | porcentagem, ou dias no crescimento atual | Resultados de testes de carga e telemetria de tráfego | Gestão de capacidade e desempenho; gestão de nível de serviço | Requisitos não funcionais e testes de desempenho no pipeline | Mensal, e antes de grandes lançamentos |
| Erro de previsão | Diferença entre a demanda prevista e a demanda real em um período | absoluto (pico previsto - pico real) / pico real, para um horizonte declarado; a previsão é congelada no início do horizonte e não revista depois; eventos pontuais não previstos são listados, e não removidos | porcentagem | Registro de previsões e telemetria de tráfego | Gestão de capacidade e desempenho; planejamento ligado à demanda na gestão financeira de serviços | Previsão de releases e de roteiro; previsão de demanda da SRE | Trimestral |
| Lead time de capacidade | Tempo necessário para pôr em serviço uma nova capacidade depois que a necessidade é aceita | o relógio começa quando a requisição de capacidade é aprovada e para quando a capacidade carrega tráfego de produção; relate a mediana e o 85º percentil; requisições canceladas são excluídas | dias | Registros de requisições na ferramenta de ITSM, registros de mudanças, registros de provisionamento | Gestão de capacidade e desempenho; gestão de requisições de serviço; habilitação de mudanças | Lead time de um item de backlog de plataforma (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) | Trimestral |
| Cobertura de testes de desempenho | Proporção dos serviços críticos com um teste de carga recente e realista | serviços críticos com um teste de carga aprovado de idade menor que a declarada, em um ambiente e carga de trabalho representativos / serviços críticos no registro; o limite de idade é escrito | porcentagem | Repositório de resultados de testes e registro de serviços | Gestão de capacidade e desempenho; gestão de releases | Testes não funcionais no pipeline de entrega contínua | Trimestral |

Juntas, essas medidas respondem a quatro perguntas: quão cheio está, quão lento está, quanta folga resta e com que rapidez podemos responder quando a resposta mudar.

## Recomendações

### Comece pelo usuário, depois pelo recurso

**1. Escolha as poucas operações que importam aos usuários e meça-as.** Um serviço tem centenas de endpoints e um punhado de jornadas que importam, como entrar, buscar, pagar e baixar um extrato. Combine-as com os donos do produto e os clientes e defina uma expectativa de latência para cada uma. Elas se ligam naturalmente aos indicadores de nível de serviço (veja o tópico 5.2, SLIs, SLOs e orçamentos de erro).

**2. Pareie todo gráfico de recurso com um gráfico de saturação.** Mostrar só o uso do processador convida ao falso conforto de "só chegou a 70%". Acrescente ao lado a fila, as requisições em espera ou a contagem de limitações. Quando a saturação aparece antes de a utilização parecer alarmante, você encontrou a restrição real, e essa restrição muitas vezes não é o recurso que você observava, como um pool de conexões, um limite de threads ou um limite de taxa em uma interface de parceiro.

**3. Prefira a cauda ocupada à média tranquila.** As médias ao longo de um dia misturam a madrugada com o pico do almoço. Olhe o período mais ocupado e registre a data e a causa dos piores intervalos. A pergunta de planejamento é como o serviço se comporta na pior hora esperada.

### Relate a latência com honestidade

**4. Publique percentis por operação e nomeie a janela.** Declare a mediana, o p95 e o p99 de cada operação importante em uma janela móvel e diga quais requisições estão incluídas. Nunca tire a média de percentis entre servidores ou operações, porque o resultado não corresponde à experiência de nenhum usuário real; combine histogramas ou as observações brutas. Se a amostra é pequena, diga isso, já que um p99 de algumas centenas de requisições é um número ruidoso (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**5. Meça onde o usuário está, além de onde o servidor está.** As medições de tempo do lado do servidor deixam de fora a rede, o navegador e o dispositivo. Acrescente monitoramento de usuários reais ou verificações sintéticas para distinguir um back end lento de uma última milha lenta.

**6. Conte erros e timeouts junto com a latência, e não no lugar dela.** Um serviço que falha rápido parece veloz em um gráfico de latência, e um serviço que dá timeout parece lento pelo motivo errado. Relate a taxa de erros com o percentil de latência para que uma falha rápida não lisonjeie o resultado.

### Encontre os limites e depois deixe folga

**7. Teste o ponto de ruptura de propósito.** Rode testes de carga que reproduzam uma mistura realista de operações, aumente a carga em rampa e anote onde o objetivo de latência é violado pela primeira vez e que recurso satura primeiro. Teste em um ambiente que se assemelhe à produção nos aspectos que importam e escreva em que aspectos não se assemelha. Um teste que falha em um lugar seguro é o incidente mais barato que você terá (veja o tópico 4.5, Métricas de releases e implantação, para pôr verificações no pipeline).

**8. Defina a folga como política e reveja-a como uma compensação.** Decida quanta margem um serviço mantém sobre o pico esperado e por quê. Os serviços críticos voltados ao cliente justificam mais, os serviços internos em lote, menos. A cifra é uma escolha de negócio sobre custo e risco; por isso registre o raciocínio e revisite-o quando o custo de uma interrupção ou o preço da capacidade mudar. Não copie um número de outra organização.

### Preveja a demanda com as pessoas que a conhecem

**9. Pergunte ao negócio o que está por vir e escreva a previsão.** Campanhas de marketing, novos clientes, prazos regulatórios e eventos sazonais mudam a demanda muito antes de o tráfego mostrá-lo. Mantenha um registro de previsões curto, com a data, as premissas, a faixa, o responsável e a fonte de cada insumo. Uma previsão dada como faixa, com um caso baixo, um esperado e um alto, é mais honesta que um número único e mais útil para decidir quanto comprar.

**10. Pontue a previsão e use o erro para melhorá-la.** Depois de cada período, compare a previsão congelada com o que aconteceu, usando o erro de previsão, e liste as causas dos grandes desvios. As causas comuns são uma campanha não anunciada, uma mudança no comportamento dos usuários e uma dependência que se moveu. O objetivo não é um erro zero, que não é alcançável, mas aprender quais insumos são confiáveis e alargar a faixa onde não são.

### Facilite acrescentar capacidade

**11. Encurte o lead time de capacidade antes de perseguir a exatidão.** Se a nova capacidade leva semanas para chegar, você precisa prever com muita antecedência e carregar mais sobra. Se leva minutos, você pode operar mais perto da necessidade. Olhe os passos entre "aprovado" e "carregando tráfego", como compras, aprovação, provisionamento, configuração e testes, e remova primeiro as maiores esperas (veja o tópico 4.3, Métricas de habilitação de mudanças). Em termos do ITIL, é uma escolha de estratégia de capacidade, liderar a demanda, acompanhá-la ou ficar atrás dela; escolha conscientemente, por serviço.

**12. Trate o escalonamento automático como um sistema a medir.** Registre com que frequência o escalonamento dispara, quanto tempo a nova capacidade leva para se tornar útil, com que frequência atinge o máximo configurado e quanto custa. Um escalonador automático preso em seu limite é um plano de capacidade que já falhou. Reveja isso com a visão de custos, para que desempenho e gasto sejam discutidos juntos (veja o tópico 7.5, Custo de serviço e economia unitária).

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Utilização de recursos | Tirar a média em intervalos longos para esconder picos; contar capacidade reservada ociosa como "usada"; relatar apenas os recursos mais tranquilos | 95º percentil da hora de pico ao lado da média; medida de saturação; lista de recursos no escopo revista contra o mapa de serviços |
| Saturação | Elevar os limites de fila para que nada seja relatado como rejeitado ou limitado; mover a espera para outra fila que não é medida | Percentil de latência e taxa de erros da mesma operação; tempo de fila de ponta a ponta, e não de uma só etapa; revisão de todas as filas no caminho |
| Percentil de latência | Relatar apenas a média ou a mediana; descartar da amostra requisições lentas ou com falha; medir de um local interno rápido; excluir "valores atípicos" | p95 e p99 sempre mostrados; taxa de erros e de timeouts mostrada ao lado da latência; monitoramento de usuários reais comparado com a medição do lado do servidor; tamanho bruto da amostra mostrado |
| Folga (headroom) | Escolher uma carga de teste branda; testar um ambiente maior que a produção; definir o ponto de ruptura como o máximo do hardware | Carga de teste revista contra o formato do tráfego de produção; lista escrita das diferenças entre teste e produção; folga retestada depois de mudanças relevantes |
| Erro de previsão | Revisar a previsão depois do fato; definir faixas muito largas para que todo resultado fique "dentro da faixa"; remover meses com surpresas como "eventos não previstos" | Previsão congelada e datada no registro; largura da faixa relatada com o erro; todo evento excluído listado e revisto |
| Lead time de capacidade | Começar o relógio mais tarde atrasando os registros de aprovação; encerrar requisições quando o pedido é feito e não quando a capacidade carrega tráfego; dividir requisições | Relógio definido da aprovação ao tráfego carregado; amostra de requisições encerradas comparada com os registros de provisionamento; contagem de requisições reabertas |
| Cobertura de testes de desempenho | Rodar um teste trivial para alegar cobertura; encolher a lista de serviços críticos; manter nos registros um teste antigo que passou | Idade do teste e realismo da carga registrados; lista de serviços críticos revista contra o catálogo de serviços e o histórico de incidentes; testes que falharam relatados além dos que passaram |

Uma leitura saudável mostra uma utilização com ciclos diários visíveis e folga, uma saturação que aparece raramente e por pouco tempo, percentis de latência estáveis ou em melhora nas horas mais ocupadas e um erro de previsão conhecido e que encolhe devagar. O sinal saudável é que as surpresas são discutidas junto com suas causas. Números perfeitos devem levantar suspeita, porque geralmente significam que a medição é branda.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Operar com folga generosa | Absorve surpresas; protege a latência e a disponibilidade | Custo maior; esconde ineficiência e previsão fraca |
| Operar enxuto com escalonamento automático rápido | Custo menor; a capacidade segue a demanda | Depende da velocidade e dos limites do escalonamento; dependências podem não escalar; mais difícil de raciocinar em um incidente |
| Metas de latência por percentil | Refletem o que as requisições lentas fazem sentir; resistem a truques de média | Precisam de mais dados e amostras maiores; ruidosas em percentis altos para serviços de pouco tráfego |
| Apenas latência média ou mediana | Simples e estável | Esconde a cauda que impulsiona reclamações e evasão |
| Testes de carga sintéticos | Controlados, repetíveis, seguros | Tão realistas quanto o modelo de carga e o ambiente |
| Telemetria de produção como base | Reflete o comportamento e a mistura reais | Revela os limites só depois que são atingidos; não consegue sondar além da demanda atual |
| Modelos de previsão detalhados | Captam a sazonalidade e o crescimento | Exigem dados e habilidade; falsa sensação de precisão quando os insumos são fracos |
| Faixas simples combinadas com o negócio | Fáceis de explicar e atualizar; focam nas premissas | Mais grosseiras; dependem de insumos honestos do negócio |

Escolha o método mais leve que apoie a decisão. Para a maioria dos serviços, uma olhada semanal na utilização de pico, na saturação e nos percentis de latência, um teste de carga antes de grandes mudanças e uma revisão trimestral da previsão bastam. Acrescente modelagem onde o custo de errar é grande.

## Perguntas para discutir com sua equipe

**1. Quais três jornadas de usuário mais importam, e que tempo de resposta os usuários esperam em cada uma?**
Peça ao grupo que nomeie as jornadas e depois compare com o que os painéis plotam. O facilitador deve insistir em uma expectativa rastreável até um usuário ou cliente, e não uma preferência de engenharia.

**2. Onde o nosso serviço está perto de um penhasco, e como sabemos?**
Procurem recursos como pools de conexões, limites de threads ou um limite de taxa de parceiro. Perguntem quando cada um foi testado até seu ponto de ruptura pela última vez. Se ninguém sabe, esse é o primeiro trabalho.

**3. Como relatamos a latência hoje, e o que diria o 1% mais lento dos usuários?**
Exibam a média, a mediana, o p95 e o p99 de uma operação lado a lado e discutam a diferença. Perguntem quais requisições são excluídas e por quê e se as requisições com falha são contadas.

**4. Quanta folga mantemos, quem a escolheu e quando revisitamos a escolha pela última vez?**
Discutam o custo da margem e o custo de uma interrupção no dia mais ocupado. Combinem uma data de revisão e as evidências que mudariam a margem.

**5. Quão boas foram as nossas últimas três previsões de demanda, e o que aprendemos?**
Comparem as previsões datadas com os valores reais e as causas dos grandes desvios. Perguntem o que o negócio sabia que as operações não receberam. Decidam um insumo a acrescentar ao registro de previsões, como o calendário de marketing ou um cronograma de lançamentos.

**6. Se precisássemos do dobro da capacidade no mês que vem, o que nos impediria?**
Listem todos os passos da requisição ao tráfego de produção e marquem onde esperam. Incluam compras, aprovações, licenciamento e dependências que não escalam. O facilitador deve procurar a maior espera que não é técnica, já que muitas vezes é uma aprovação ou um contrato. Combinem um passo a encurtar e meçam o efeito pelo lead time de capacidade.

## Quatro perspectivas

### Equipes de produto e entrega

Incluam uma expectativa de desempenho nos critérios de aceitação das funcionalidades que tocam caminhos movimentados, rodem um teste de carga no pipeline onde for prático e avisem cedo as operações sobre os lançamentos. Cuidado com o hábito de tratar o desempenho como uma tarefa posterior de "endurecimento", que se transforma em trabalho não planejado (veja o tópico 2.9, Trabalho operacional e trabalho não planejado).

### Equipes de serviço e operações

As equipes de operações são donas da telemetria, do plano de capacidade e da resposta quando um limite é atingido. Precisam de saturação e latência de cauda nos painéis que realmente usam, de um registro de previsões compartilhado com o negócio e de resultados de testes em que se possa confiar. Devem registrar cada incidente ligado à capacidade com sua causa (veja o tópico 4.1, Métricas de gestão de problemas, e o tópico 3.4, Métricas de incidentes graves).

### Liderança e governança

Os líderes decidem quanto risco e custo a organização aceita, e a política de folga é onde essa decisão aparece. Peçam percentis de latência e folga por serviço crítico, com o erro de previsão ao lado, e tratem os pedidos de capacidade como decisões de investimento que trazem evidências. Os órgãos de governança devem resistir a uma meta única de utilização para toda a organização, que empurra todos os serviços para o mesmo ponto do penhasco.

### Clientes e usuários

Os clientes sentem a lentidão como falta de confiabilidade, muito antes de qualquer número de disponibilidade mudar. Declare o desempenho em termos de percentis sob uma carga declarada e compartilhe como o serviço lida com os períodos de pico (veja o tópico 5.1, Métricas de SLA, OLA e XLA, e o tópico 6.2, Acordos de nível de experiência).

## Na prática: um exemplo de gestão de serviços

Um varejista on-line de médio porte opera uma vitrine, um serviço de pagamentos e um serviço de pedidos, cada um de propriedade de uma equipe de produto, com uma equipe de plataforma fornecendo a infraestrutura compartilhada. Todos os números deste exemplo são ilustrativos.

A revisão semanal da equipe de plataforma mostra a busca da vitrine com latência mediana de 180 milissegundos e p95 de 420 milissegundos, ambos dentro do objetivo, e o uso do processador com 95º percentil da hora de pico de 58%. Três semanas antes de uma promoção planejada, um líder de suporte relata que os clientes dizem que o site "se arrasta" durante as campanhas da noite. O painel está verde.

A equipe olha o p99 da busca na hora mais ocupada da promoção anterior e encontra 3,1 segundos, contra um objetivo de p99 de 1,5 segundo. A saturação conta o resto da história: o pool de conexões com o banco de dados de produtos mostra requisições em espera em 14% dos intervalos de um minuto durante o pico, enquanto o uso do processador nunca passou de 60%. A restrição nunca foi o processador. Era um limite de pool definido quando o tráfego era um terço do de hoje.

O dono do produto e o líder de plataforma rodam um teste de carga a 1,5 vez o pico do ano passado, usando a mistura de operações da produção. O teste mostra que o objetivo de p99 é violado a 1,15 vez o pico do ano passado; assim a folga é de 15% contra uma política de 40% para serviços voltados ao cliente. O calendário de marketing sugere uma demanda de 1,6 vez o pico do ano passado no dia de abertura. A previsão antiga, congelada no registro, havia posto a faixa em 1,2 a 1,4, e o erro contra a promoção do ano passado foi de 22%, sobretudo por uma campanha de e-mail não anunciada.

A decisão, registrada no registro de decisões, tem quatro partes. Primeiro, elevar o limite do pool e acrescentar réplicas de leitura e retestar. Segundo, acrescentar uma lista de verificação de prontidão para promoções ao processo de release, para que as campanhas cheguem ao registro de previsões com pelo menos seis semanas de antecedência. Terceiro, acrescentar o p99 e a saturação do pool à revisão semanal. Quarto, combinar com as finanças o custo da capacidade extra para a janela da promoção, usando escalonamento programado em vez de sobra o ano todo.

Depois das mudanças, um segundo teste mostra o objetivo de p99 se mantendo até 1,8 vez o pico do ano passado. O risco de manipulação surgiu durante a revisão. Um prestador havia proposto uma "vitória rápida": excluir do relatório de latência as requisições mais lentas que 5 segundos, sob o argumento de que eram valores atípicos. A equipe recusou: as requisições excluídas eram exatamente os clientes que reclamavam. A barreira de proteção foi manter as taxas de erros e de timeouts ao lado de todo percentil de latência e registrar o tamanho da amostra. Durante a promoção, o p99 chega ao pico de 1,2 segundo, a saturação do pool fica abaixo de 1% dos intervalos e o erro de previsão é de 9%, registrado no registro com o motivo do desvio restante.

## Ágil, IA, automação e análise

### Ágil

Planeje a capacidade em ciclos curtos com as partes interessadas do produto, usando as previsões como faixas que se atualizam com os dados. O cuidado é que superdimensionar para proteger um número de manchete desperdiça dinheiro.

### IA

As cargas de trabalho de IA, como a inferência de modelos, têm demanda variável e às vezes cara, e as funcionalidades de IA podem mudar depressa os padrões de uso. Acompanhe os percentis de latência e o custo por requisição dos caminhos de IA e pareie-os com a qualidade das respostas. O cuidado é que ajustar para a velocidade pode reduzir a qualidade das respostas; por isso meça as duas.

### Automação

Colete automaticamente a utilização e a latência e automatize o escalonamento dentro de limites. Meça o escalonamento pela oscilação e pelo custo que acrescenta. O cuidado é que o escalonamento automático esconde a saturação até que os limites sejam atingidos; por isso acompanhe a folga, e não apenas a carga atual.

### Análise

Mostre a latência por percentil e a folga com faixas de previsão e o histórico do erro de previsão. A decisão informada é quando acrescentar capacidade. O cuidado é que previsões a partir de um histórico curto são frágeis; por isso declare o intervalo.

## Olhar setorial

**Startup.** O tráfego é pequeno e o crescimento incerto; assim as medidas baratas vencem as elaboradas. Acompanhe os percentis de latência das duas ou três jornadas que rendem dinheiro, observe a saturação do banco de dados e rode um teste de carga simples antes dos lançamentos. Defina um alerta de gasto para que um bug ou um pico de tráfego não vire uma fatura.

**Pequena empresa.** Os serviços costumam ser hospedados ou comprados; por isso a capacidade é assunto do fornecedor. Peça ao fornecedor relatórios de desempenho e de capacidade por escrito, aprenda o que o contrato diz sobre os períodos de pico e observe a visão do cliente com algumas verificações sintéticas. Acompanhe a folga do sistema de que a empresa não pode prescindir.

**Grande empresa.** Muitos serviços compartilham infraestrutura; por isso os problemas de capacidade aparecem no lugar errado. Invista em um mapa de serviços que ligue os serviços aos componentes que usam, em um processo de previsão compartilhado com as unidades de negócio e em definições comuns de percentis de latência entre equipes. Defina a política de folga pela criticidade do serviço.

**Governo e setor público.** A demanda é moldada por prazos definidos em lei, como datas de declaração de impostos, pedidos de benefícios e eleições, e a falha nessas datas é pública. As previsões devem usar o calendário legal, e a capacidade para o pico pode precisar ser contratada com meses de antecedência. Os prazos de compras alongam o lead time de capacidade; por isso meça-os e planeje em torno deles. Os relatórios públicos de desempenho do serviço devem declarar o percentil e as condições de carga (veja o tópico 8.5, Relatórios regulatórios e governamentais).

## Business case: motivações, ROI e TCO

O custo tem quatro partes. A primeira é a instrumentação: a telemetria e seu armazenamento. A segunda são os testes: um ambiente representativo e modelos de carga que precisam de manutenção. A terceira é a rotina de planejamento: manter o registro de previsões e rever o erro a cada trimestre. A quarta é a própria capacidade sobrando, que muitas vezes é o maior custo e aquele que mais vale a pena tornar explícito.

O retorno vem de menos incidentes ligados à capacidade, melhores decisões sobre quando comprar e quando não, e gasto evitado em capacidade que os dados mostram ser desnecessária. Não prometa de antemão uma economia percentual. Em vez disso, meça o seu próprio padrão: o número de incidentes com causa de capacidade por trimestre, a proporção dos picos que exigiram ação emergencial, o gasto em capacidade ociosa relativo à política de folga combinada e a tendência do erro de previsão. O livro de SRE do Google trata a confiabilidade como uma decisão econômica.

O custo total de propriedade é dominado por pessoas e pelo ambiente de testes. Uma equipe pequena pode começar com o monitoramento existente, uma revisão semanal e um teste de carga para a jornada mais importante.

## Antipadrões e armadilhas

- **Relatar a utilização média como a história da capacidade.** A média esconde o pico e o penhasco. Relate o percentil alto da hora de pico e a medida de saturação.
- **Latência média no painel executivo.** A cauda impulsiona as reclamações. Mostre o p95 e o p99, com as taxas de erros e o tamanho da amostra.
- **Excluir "valores atípicos" da latência.** As requisições mais lentas são usuários reais. Mantenha-as e investigue a causa em vez de aparar os dados.
- **Tirar a média de percentis entre servidores.** O resultado não descreve ninguém. Combine histogramas ou observações brutas antes de calcular o percentil.
- **Planos de capacidade construídos só com o tráfego do ano passado.** A demanda depende de eventos de negócio. Inclua o calendário do negócio e reveja o erro de previsão.
- **Testar em um ambiente diferente da produção.** Um resultado aprovado dá falsa confiança. Registre as diferenças e corrija por elas, ou teste em produção com segurança.
- **Usar métricas de capacidade para classificar engenheiros ou equipes.** A utilização e a latência descrevem sistemas. Reveja-as em termos de projeto do serviço e de demanda e mantenha os indivíduos fora do quadro.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Medição de utilização, saturação e latência | Médias de poucos servidores; alertas sobre uso alto de processador | Algumas equipes plotam percentis de latência e filas | Definições compartilhadas: percentis por operação-chave, saturação ao lado da utilização, janelas escritas | Acompanhadas contra os objetivos, pareadas com taxas de erros, revistas semanalmente | Definições revistas em conjunto com fornecedores e clientes; visões do lado do usuário e do servidor reconciliadas |
| Limites e folga | Limites desconhecidos até uma falha | Testes de carga ocasionais antes de grandes lançamentos | Testes de carga em serviços críticos contra uma política de folga escrita | Folga acompanhada por serviço e retestada depois de mudanças relevantes | Política de folga ajustada a partir de dados de custo, risco e incidentes entre equipes e fornecedores |
| Previsão | Palpites ad hoc no momento de um pedido | Equipes individuais guardam previsões na cabeça ou em planilhas | Um registro de previsões compartilhado, com faixas e responsáveis, alimentado pelo calendário do negócio | Erro de previsão pontuado e revisto, com as causas dos desvios | Previsões construídas com o negócio e os fornecedores; insumos melhorados rotineiramente |
| Entrega de capacidade | Capacidade acrescentada após um incidente | Requisições padrão para casos comuns | Rota documentada da aprovação ao tráfego de produção, com lead time de capacidade medido | Maiores esperas combatidas com melhoria financiada | Capacidade acrescentada automaticamente dentro da política; comportamento e custo do escalonamento revistos em conjunto |

## Lista de verificação

- [ ] As jornadas críticas de usuário estão nomeadas, cada uma com uma expectativa de latência combinada com seu responsável.
- [ ] A latência é relatada como mediana, p95 e p99 por operação, com a janela e o tamanho da amostra declarados.
- [ ] Os percentis são calculados a partir de histogramas ou observações brutas, nunca com média entre servidores.
- [ ] Todo gráfico de utilização tem um gráfico de saturação ao lado.
- [ ] As taxas de erros e de timeouts são mostradas ao lado de cada percentil de latência.
- [ ] Cada serviço crítico tem um teste de carga, com as diferenças de carga e de ambiente escritas.
- [ ] Existe uma política de folga por criticidade de serviço, com o raciocínio registrado.
- [ ] Um registro de previsões datado guarda faixas, premissas e responsáveis e é alimentado pelo calendário do negócio.
- [ ] O erro de previsão é revisto a cada trimestre, com as causas dos grandes desvios registradas.
- [ ] O lead time de capacidade é medido da aprovação ao tráfego carregado.
- [ ] Os limites, a defasagem e o custo do escalonamento automático são revistos com o dono do serviço.
- [ ] Nenhuma medida de capacidade ou de desempenho é relatada por indivíduo.

## Prompts de IA

**Revise um relatório de latência quanto a distorções escondidas.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Redija um plano de teste de carga para um serviço.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Estruture uma previsão de demanda com o negócio.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Encontre a restrição real a partir dos sintomas.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar o tópico que define uma medida de capacidade ou de desempenho, seus relógios e a barreira de proteção que deve ficar ao lado dela.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se um tópico de capacidade ou de desempenho editado mantém toda métrica pareada com um vetor de manipulação e uma barreira de proteção.

## Ideias-chave

- Meça a saturação junto com a utilização, porque os usuários sentem a fila, e não a porcentagem.
- Relate a latência como percentis por operação, com taxas de erros e tamanho da amostra, e nunca tire a média de percentis.
- Encontre os limites testando e defina a folga como uma política registrada que pese o custo contra o risco.
- Preveja a demanda como faixas com o negócio, congele a previsão e aprenda com o erro.
- Encurte o lead time de capacidade e meça o escalonamento automático, para que a capacidade siga a necessidade.
- Descreva serviços e sistemas, nunca pessoas, e trate números de aparência perfeita como um convite a conferir a medição.

## Referências e leituras complementares

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Planejamento de capacidade](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Engenharia de confiabilidade de sites](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latência (engenharia)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Vazão](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Teoria das filas](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Lei de Little](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Teste de carga](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentil](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Latência de cauda](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Previsão](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Sazonalidade](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Escalonamento automático](https://en.wikipedia.org/wiki/Autoscaling).
