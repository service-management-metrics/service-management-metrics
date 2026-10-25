# Introdução à Parte 2: Métricas de fluxo e entrega contínua

**As métricas de fluxo mostram como o trabalho realmente se move por uma equipe que constrói e opera serviços, para que você encontre onde ele espera, decida o que mudar e confira se a mudança ajudou.**

As equipes ágeis que também operam serviços lidam com um fluxo misto de trabalho: funcionalidades planejadas, correções de defeitos, requisições de serviço e interrupções causadas por incidentes ao vivo. Tudo isso disputa as mesmas pessoas e a mesma atenção. As métricas de fluxo descrevem esse fluxo do ponto de vista do item de trabalho. Perguntam quantos itens estão em andamento, quanto tempo levam, quão antigos são e quantos terminam em um período.

Essa visão é útil porque a maior parte do atraso é espera, e não trabalho. Uma requisição pode ficar numa fila, numa revisão ou numa aprovação por muito mais tempo do que alguém gasta com ela. Medir o relógio do item, em vez do esforço da pessoa, expõe essas lacunas e dá à equipe um ponto de partida compartilhado e factual para melhorar. Também serve aos dois mundos. A prática ágil fala em tempo de ciclo e vazão, e a prática do ITIL fala em fluxos de valor e desempenho de serviço. Ambas descrevem o mesmo movimento do trabalho.

Os dados de fluxo são assimétricos e fáceis de usar mal. As medidas de tempo devem ser lidas como distribuições com percentis, como exposto na Parte 1 (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Toda métrica desta parte descreve uma equipe, um serviço ou um sistema. Nenhuma classifica um indivíduo, e nenhuma é uma meta a ser empurrada para cima ou para baixo isoladamente (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

As quatro lentes deste livro aparecem aqui de um modo particular. A entrega contínua e o envolvimento das partes interessadas definem o ritmo do trabalho que está sendo medido. A assistência de IA pode elevar a contagem de itens de aparência concluída sem encurtar o tempo que eles esperam; por isso as medidas de fluxo são pareadas com sinais de retrabalho e de qualidade. A automação fornece os carimbos de data e hora dos eventos e deve ela mesma ser medida quanto a falhas. A análise transforma os relógios em faixas e tendências, mostrando o número de itens por trás de cada uma.

## Tópicos desta parte

- **2.1 Medidas de fluxo**: trabalho em andamento, vazão, idade do item de trabalho e tempo de ciclo, aplicados a trabalho de projeto e de serviço.
- **2.2 Lead time, tempo de ciclo e eficiência de fluxo**: definições que resistem entre equipes, onde os relógios começam e param e como expor o tempo de espera.
- **2.3 Trabalho em andamento e teoria das filas**: a lei de Little, utilização e crescimento de filas, limites de trabalho em andamento (WIP) e por que uma equipe de serviço totalmente ocupada é uma equipe lenta.
- **2.4 Métricas de fluxo de valor**: medidas de mapeamento do fluxo de valor, tempo de processo, tempo de espera, porcentagem completa e exata e fluxos de valor do ITIL.
- **2.5 Métricas de previsão e planejamento de entregas**: pontos de história e velocity, sucesso do objetivo de entrega, exatidão da previsão e por que a velocity nunca deve ser comparada entre equipes.
- **2.6 Métricas de backlog e refinamento**: tamanho e idade do backlog, trabalho pronto, cobertura de refinamento e como os backlogs de produto e de serviço diferem.
- **2.7 Métricas de pull requests e revisão de código**: tempo de revisão, tamanho do pull request e retrabalho como sinais de fluxo, com os vetores de manipulação que os acompanham.
- **2.8 Métricas DORA**: lead time de mudança, frequência de implantação, tempo de recuperação de implantação com falha, taxa de falha de mudanças e taxa de retrabalho de implantação, com as próprias ressalvas da pesquisa.
- **2.9 Trabalho operacional e trabalho não planejado**: trabalho planejado versus não planejado, carga de interrupções, faixas de expedição e alocação de capacidade entre trabalho de mudança e de operação.

## Como estes tópicos se relacionam

Os quatro primeiros tópicos formam o núcleo da parte. O tópico 2.1 (veja o tópico 2.1, Medidas de fluxo) define as quantidades básicas: trabalho em andamento, vazão, idade do item de trabalho e tempo de ciclo. O tópico 2.2 (veja o tópico 2.2, Lead time, tempo de ciclo e eficiência de fluxo) fixa onde os relógios começam e param, do que depende qualquer comparação. O tópico 2.3 (veja o tópico 2.3, Trabalho em andamento e teoria das filas) explica por que essas quantidades se movem juntas, e o tópico 2.4 (veja o tópico 2.4, Métricas de fluxo de valor) amplia a visão do quadro de uma equipe para todo o caminho da requisição ao valor.

Vários tópicos funcionam como barreiras de proteção para outros. As medidas de vazão e de velocidade podem ser infladas dividindo o trabalho em pedaços menores ou apressando-o; por isso devem ser lidas junto com sinais de retrabalho e de qualidade. O tamanho do pull request e o tempo de revisão do tópico 2.7 (veja o tópico 2.7, Métricas de pull requests e revisão de código) são indicadores antecipados de atraso e retrabalho. Os resultados de entrega do tópico 2.8 (veja o tópico 2.8, Métricas DORA) pareiam medidas de velocidade com medidas de estabilidade, para que uma entrega mais rápida não seja comprada com mais falhas. A velocity do tópico 2.5 (veja o tópico 2.5, Métricas de previsão e planejamento de entregas) é um auxílio de planejamento de uma equipe e deve ser conferida contra a exatidão da previsão e as medidas de fluxo, em vez de ser lida como produção.

Os tópicos restantes descrevem as condições sob as quais o trabalho flui. Um backlog longo, antigo ou mal refinado alimenta um fluxo ruim, que é a preocupação do tópico 2.6 (veja o tópico 2.6, Métricas de backlog e refinamento). O trabalho não planejado e as interrupções, tratados no tópico 2.9 (veja o tópico 2.9, Trabalho operacional e trabalho não planejado), são muitas vezes a razão oculta pela qual os tempos de ciclo se alongam e as previsões falham. Lê-los ao lado do trabalho em andamento e das filas do tópico 2.3 explica por que uma equipe sem capacidade de sobra não consegue absorver um incidente sem atrasar todo o resto.

As partes seguintes se apoiam nessas medidas. As métricas de incidentes, mudanças e releases das Partes 3 e 4 usam os mesmos relógios e o mesmo pensamento em distribuições, aplicados ao trabalho de suporte e de mudança. Em conjunto, a visão de fluxo permite que equipes ágeis e de ITIL falem de um único sistema de trabalho compartilhado.
