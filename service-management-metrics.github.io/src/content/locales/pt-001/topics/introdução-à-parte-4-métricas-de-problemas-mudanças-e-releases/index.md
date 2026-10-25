# Introdução à Parte 4: Métricas de problemas, mudanças e releases

**As métricas de problemas, mudanças e releases mostram se o modo como uma equipe muda seus serviços e aprende com as falhas os torna, ao mesmo tempo, mais rápidos de melhorar e mais estáveis de operar.**

Toda mudança em um serviço em produção é uma aposta. Ela pode entregar valor mais cedo ou quebrar algo de que os usuários dependem. A Parte 3 mediu quão bem funcionam o suporte e o restabelecimento quando as coisas dão errado (veja o tópico 3.0, Introdução à Parte 3: Métricas de central de serviços, incidentes e requisições). Esta parte olha o outro lado da mesma moeda: como a mudança entra no ambiente, com que frequência causa problemas e quão bem a organização aprende para que o mesmo problema não volte.

A entrega contínua e o ITIL abordam este terreno por direções diferentes. A prática ágil favorece a entrega contínua de software em pequenas mudanças e trata o feedback rápido como uma medida de segurança. As práticas do ITIL, como a gestão de problemas, a habilitação de mudanças e a gestão de releases, existem para proteger a estabilidade e para encontrar e remover as causas dos incidentes. As métricas desta parte permitem conferir as duas visões contra as mesmas evidências. Se a mudança frequente é segura, as medidas de falha e de retrabalho mostrarão isso. Se um controle atrasa a entrega sem reduzir o risco, as medidas de aprovação e de lead time mostrarão isso.

Duas cautelas atravessam a parte inteira. Velocidade e estabilidade devem ser lidas juntas, porque um número que melhora uma enquanto prejudica a outra em silêncio é uma má troca. As medidas de tempo também devem ser lidas como distribuições com percentis, como exposto na Parte 1 (veja o tópico 1.6, Letramento estatístico para métricas de serviço). Toda métrica aqui descreve uma equipe, um serviço ou um sistema. Nenhuma classifica um indivíduo, e nenhuma é uma meta a ser empurrada isoladamente (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

As quatro lentes moldam esta parte. A entrega contínua faz das mudanças pequenas e frequentes a norma, de modo que as medidas de mudança e de release descrevem juntas fluxo e segurança. As mudanças assistidas por IA e as pontuações de risco geradas por IA precisam de seu próprio pareamento de qualidade. Os pipelines automatizam evidências e aprovações; por isso a automação deve ser medida por suas falhas. A análise liga mudanças, incidentes e problemas e diz quantos casos estão por trás de cada taxa.

## Tópicos desta parte

- **4.1 Métricas de gestão de problemas**: problemas abertos e encerrados, reutilização de erros conhecidos, recorrência e tempo até a correção permanente.
- **4.2 Métricas de análises pós-incidente e aprendizado**: conclusão das revisões, encerramento dos itens de ação, recorrência das causas e sinais de aprendizado sem culpados.
- **4.3 Métricas de habilitação de mudanças**: volume de mudanças por tipo, lead time de aprovação, parcela de mudanças padrão e automação da aprovação.
- **4.4 Falhas de mudança e retrabalho**: taxa de falha de mudanças, parcela de mudanças emergenciais, taxas de rollback e de hotfix e definições consistentes de falha.
- **4.5 Métricas de releases e implantação**: frequência de implantação, frequência de release, uso de feature flags, lead time de release e separação entre implantação e release.
- **4.6 Dívida técnica e erros conhecidos**: backlog de erros conhecidos, estoque e juros da dívida e priorização das correções frente ao trabalho de funcionalidades.

## Como estes tópicos se relacionam

A parte se divide em duas metades que dependem uma da outra. Os tópicos 4.1 e 4.2 tratam do aprendizado: como os incidentes são rastreados até as causas e como as revisões se transformam em correções que são concluídas. Os tópicos 4.3, 4.4 e 4.5 tratam da mudança: como é aprovada, com que frequência falha e como chega aos usuários. O tópico 4.6 une as metades, porque a dívida e os erros conhecidos que o aprendizado revela são os mesmos itens que competem com as novas funcionalidades pelo tempo da equipe.

O pareamento mais importante é entre velocidade e falha. A frequência de implantação e de release do tópico 4.5 (veja o tópico 4.5, Métricas de releases e implantação) descreve com que frequência a mudança chega à produção, e o programa de pesquisa DORA pareia essas medidas de vazão com medidas de estabilidade (veja o tópico 2.8, Métricas DORA). O tópico 4.4 (veja o tópico 4.4, Falhas de mudança e retrabalho) fornece esse lado da estabilidade. Uma equipe que implanta com mais frequência enquanto suas taxas de falha e de retrabalho ficam estáveis ou caem está melhorando. Uma equipe cuja frequência sobe enquanto sobem junto os rollbacks e os hotfixes está empurrando o custo para outro lugar.

A habilitação de mudanças fica entre as duas. O tópico 4.3 (veja o tópico 4.3, Métricas de habilitação de mudanças) mede o lado do controle: quanto tempo leva a aprovação, quanta mudança é pré-autorizada como padrão e quanto da aprovação é automatizado. O lead time de aprovação é o custo de um controle, e a taxa de falha de mudanças do tópico 4.4 é a evidência de que esse controle está funcionando. Lidos juntos, mostram se uma etapa pesada de aprovação está comprando segurança ou apenas acrescentando atraso, e se uma aprovação mais leve e automatizada manteve estável a falha.

Os tópicos de aprendizado protegem os outros. A gestão de problemas do tópico 4.1 (veja o tópico 4.1, Métricas de gestão de problemas) mede a recorrência e o tempo até a correção permanente, que é o teste de longo prazo de se o tratamento de incidentes da Parte 3 está removendo causas ou apenas restabelecendo o serviço. O tópico 4.2 (veja o tópico 4.2, Métricas de análises pós-incidente e aprendizado) confere se as revisões realmente acontecem e se suas ações são encerradas, já que uma revisão concluída sem seguimento nada muda. Contar revisões ou problemas encerrados é fácil de manipular; por isso essas contagens devem ser lidas ao lado da recorrência das mesmas causas, que é mais difícil de falsificar.

Por fim, o tópico 4.6 (veja o tópico 4.6, Dívida técnica e erros conhecidos) explica por que as outras medidas derivam. Erros conhecidos não tratados e dívida acumulada elevam a chance de falha e o custo de toda mudança posterior. Ler o backlog de erros conhecidos ao lado da taxa de falha de mudanças mostra quando o adiamento das correções começou a frear a entrega.

As partes seguintes se apoiam nessas medidas. Os objetivos de nível de serviço e os orçamentos de erro da Parte 5 dão um limite de confiabilidade contra o qual o ritmo da mudança pode ser julgado, e a Parte 11 mostra como introduzir essas medidas sem criar medo.
