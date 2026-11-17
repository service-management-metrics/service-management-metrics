# Métricas do ciclo de vida de ativos de hardware

**Os dispositivos são as ferramentas diárias de pessoas motivadas e um fluxo de custo, risco e desperdício; por isso planeje a substituição como um fluxo constante em vez de um solavanco periódico, meça a idade e a falha a partir dos seus próprios dados e trate o descarte seguro e a reutilização como parte do trabalho.**

## Visão geral e motivação

Por trás de todo serviço há coisas físicas: notebooks, telefones, servidores, equipamentos de rede, impressoras e os cabos e racks que os mantêm unidos. O hardware tem um ciclo de vida que o software não tem. É comprado, enviado, preparado com uma imagem, entregue, reparado, movido, aposentado, apagado e reciclado, e cada passo tem um custo e um risco. Um notebook que falha numa ligação com cliente custa mais que o notebook. Um servidor aposentado que sai do prédio com dados nos discos custa muito mais que seu valor de revenda. Uma gaveta de telefones sem uso é capital que não faz nada.

O objetivo ágil de construir projetos em torno de indivíduos motivados, com o ambiente e o apoio de que precisam, aplica-se diretamente. As pessoas não conseguem fazer seu melhor trabalho em um dispositivo lento, que falha ou que está faltando. A tradição do ITIL contribui com a visão de ciclo de vida e os registros que a acompanham, cobertos no tópico anterior sobre gestão de ativos de TI (veja o tópico 7.1, Métricas de gestão de ativos de TI). Este tópico acrescenta as medidas específicas do equipamento físico: quão velho é, com que frequência falha, quão bem é usado e como sai.

O planejamento de hardware costuma ser feito em grandes ciclos: substituir tudo a cada poucos anos, em uma grande compra, e depois conviver com as consequências. Uma alternativa mais constante, no espírito da entrega contínua, é renovar uma fração do parque continuamente. Isso suaviza os gastos, espalha a carga de trabalho de imagens e entregas e permite aprender com cada lote antes de comprar o seguinte. Significa também que você precisa de dados sobre idade e falha para decidir quando cada dispositivo deve sair.

Três ideias organizam as medidas.

- **Idade e falha.** A [taxa de falha](https://en.wikipedia.org/wiki/Failure_rate) de uma população de dispositivos muda ao longo de sua vida, e o [tempo médio entre falhas](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) é um resumo comum para itens reparáveis. As médias escondem muita coisa: um lote com um componente defeituoso pode falhar cedo enquanto o resto está bem. Olhe a falha por modelo, lote e faixa de idade e use o seu próprio histórico, e não as cifras dos fabricantes, para planejar.
- **Utilização.** Um dispositivo que ninguém usa é desperdício, e um dispositivo sobrecarregado é fonte de atrito. Meça se o equipamento é usado e se se ajusta ao trabalho.
- **Saída responsável.** O equipamento aposentado pode guardar dados sensíveis, conter materiais valiosos e perigosos e aumentar o lixo eletrônico. O [lixo eletrônico](https://en.wikipedia.org/wiki/Electronic_waste) é uma preocupação ambiental crescente, e muitas jurisdições regulam como deve ser tratado. O [apagamento seguro de dados](https://en.wikipedia.org/wiki/Data_erasure) e a reutilização ou reciclagem certificada são o fim do ciclo de vida, e não um complemento. Uma abordagem de [economia circular](https://en.wikipedia.org/wiki/Circular_economy) mantém produtos e materiais em uso pelo maior tempo possível.

As métricas de hardware estão expostas a uma distorção conhecida. Uma equipe premiada por uma baixa idade média dos dispositivos pode renovar dispositivos que estão bem. Uma equipe premiada por baixo gasto pode esticar a vida até que as falhas atrapalhem as pessoas. A barreira de proteção da [lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) se aplica; por isso cada medida é pareada com uma conferência de que as pessoas e o planeta estão melhores, e não apenas o número (veja o tópico 1.2, A lei de Goodhart e a psicologia das métricas).

## Princípios-chave

- **Planeje um fluxo constante.** Renove uma parcela do parque a cada período e aprenda com cada lote.
- **Decida por evidências.** Use os seus próprios dados de falha, idade e uso para escolher quando substituir.
- **Olhe a distribuição.** As médias escondem a cauda de velhos, que falham e ociosos.
- **Conte o custo total.** O preço de compra é uma parte do custo de um dispositivo ao longo da vida (veja o tópico 7.5, Custo de serviço e economia unitária).
- **Proteja os dados até o fim.** Um dispositivo não está aposentado até que seus dados tenham sumido e a evidência esteja registrada.
- **Prefira reutilização e reparo.** Mantenha o equipamento em serviço enquanto atende bem às pessoas.
- **Trate o equipamento como parte do ambiente de trabalho.** As pessoas precisam de dispositivos que funcionem.

## Definições de métricas

| Métrica | Definição | Fórmula | Unidade | Fonte de dados | Prática ITIL | Equivalente ágil | Cadência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Perfil de idade | Distribuição da idade dos dispositivos por classe e parcela além da vida planejada | idade mediana e idade do 85º percentil; proporção de dispositivos mais velhos que a vida planejada da classe | anos; porcentagem | Datas de compra e de implantação do registro de ativos | Gestão de ativos de TI; gestão de capacidade e desempenho | Revisão da saúde técnica | Trimestral |
| Taxa de renovação no prazo | Proporção dos dispositivos que atingiram a substituição planejada e foram substituídos dentro da janela planejada | dispositivos substituídos dentro da janela / dispositivos que atingiram a substituição planejada no período | porcentagem | Registro de ativos e plano de renovação | Gestão de ativos de TI; gestão de requisições de serviço | Manutenção planejada do ambiente de trabalho | Trimestral |
| Taxa de falha por modelo | Falhas por 100 dispositivos por ano, por modelo e faixa de idade | falhas de hardware no período / dispositivos médios em serviço, anualizadas, vezes 100 | falhas por 100 por ano | Registros de incidentes e de reparos cruzados com o registro | Gestão de incidentes; gestão de ativos de TI | Defeitos no ambiente de trabalho | Trimestral |
| Parcela de dispositivos ociosos | Proporção dos dispositivos entregues sem atividade em um período definido | dispositivos sem login nem atividade de rede em 60 dias / dispositivos entregues | porcentagem | Registros de gestão de endpoints, agregados por classe | Gestão de ativos de TI; gestão financeira | Redução de desperdício | Mensal |
| Lead time de substituição | Tempo para substituir um dispositivo com falha ou perdido por um que funciona | mediana e 85º percentil das horas ou dias do relato até o usuário ter um dispositivo funcionando | dias | Registros de incidentes e de requisições | Gestão de incidentes; gestão de requisições de serviço | Tempo para desbloquear um membro da equipe | Mensal |
| Conclusão do descarte seguro | Proporção dos dispositivos aposentados com evidência registrada de apagamento ou destruição de dados | dispositivos aposentados com evidência de apagamento ou destruição / dispositivos aposentados | porcentagem | Registros de descarte e certificados de apagamento | Gestão de segurança da informação; gestão de ativos de TI | Definição de pronto para aposentar equipamento | Mensal |
| Taxa de reutilização e reciclagem | Proporção dos dispositivos aposentados que foram reutilizados, recondicionados ou reciclados por um canal aprovado | dispositivos reutilizados, recondicionados ou reciclados por um canal aprovado / dispositivos aposentados | porcentagem | Registros de descarte e de parceiros | Gestão de ativos de TI; gestão de fornecedores | Meta de sustentabilidade no planejamento | Trimestral |

Defina as classes de dispositivos (por exemplo, notebook padrão, estação de trabalho de desenvolvedor, telefone móvel, servidor, switch de rede), cada uma com a própria vida planejada. A taxa de falha conta apenas falhas de hardware e exclui falhas de software, danos do usuário codificados à parte e perdas. O relógio do lead time de substituição começa no relato e para quando o usuário confirma um dispositivo funcionando, e não quando um é despachado. A parcela de dispositivos ociosos exclui os dispositivos deliberadamente reserva, que são contados como uma classe separada.

## Recomendações

### Planeje o fluxo

**1. Defina uma vida planejada para cada classe e trate-a como hipótese.** Parta da garantia do fornecedor e da sua própria experiência e revise conforme os dados chegam. Uma vida planejada de alguns anos para notebooks, mais longa para equipamentos de rede e mais curta para dispositivos muito usados é típica, mas a cifra certa para o seu parque vem dos seus próprios dados de falha e de uso. Escreva a justificativa no registro.

**2. Renove continuamente em pequenos lotes.** Substitua uma parcela constante de dispositivos todo mês ou trimestre, ordenada por idade, histórico de falhas e necessidade. Os lotes pequenos suavizam o custo, espalham o trabalho de imagem e entrega e permitem testar um novo modelo com poucos usuários antes de se comprometer. Uma única grande renovação a cada poucos anos concentra risco e esforço.

**3. Mantenha um modesto estoque de reserva.** Um pequeno conjunto de dispositivos prontos encurta o lead time de substituição de falhas, perdas e novos contratados. Dimensione o estoque a partir do seu próprio histórico de falhas e contratações e reveja-o a cada trimestre. Conte as reservas como uma classe própria para que não distorçam a utilização.

**4. Planeje com as finanças, e não contra elas.** Combine como os dispositivos são capitalizados e depreciados e como uma renovação constante aparece no orçamento. As regras de [depreciação](https://en.wikipedia.org/wiki/Depreciation) afetam quando uma substituição é mais barata no papel e não devem conduzir a substituição de dispositivos que ainda servem bem às pessoas. Mantenha uma visão compartilhada do plano e de suas premissas.

### Aprenda com os seus próprios dados

**5. Estude a falha por modelo, lote e idade.** Cruze os registros de reparos e de incidentes com o registro e olhe as falhas por 100 dispositivos por ano por modelo e faixa de idade. Procure lotes que falham cedo, modelos que falham de um modo particular e a idade em que as falhas começam a subir. Use os achados para escolher modelos e cronometrar a substituição. Cuidado com amostras pequenas e diga quando um modelo tem poucos dispositivos para julgar (veja o tópico 1.6, Letramento estatístico para métricas de serviço).

**6. Use a garantia e o reparo com sabedoria.** Saiba o que a [garantia](https://en.wikipedia.org/wiki/Warranty) cobre e por quanto tempo, registre as reivindicações e compare o custo do reparo com o da substituição. O reparo mantém o equipamento em uso e fora do fluxo de lixo, e o direito a reparar peças e informações é um tema de política ativo em vários lugares. Dê preferência a modelos que podem ser reparados e atualizados quando o resto for igual.

**7. Meça o uso para achar o que está ocioso e o que está sobrecarregado.** Agregue os dados de atividade por classe e procure dispositivos que nunca são usados e dispositivos que estão consistentemente no limite. Os dispositivos ociosos podem ser reatribuídos ou aposentados. Os sobrecarregados são atrito, e os usuários o sentirão (veja o tópico 6.4, Experiência de usuários e colaboradores). Respeite a privacidade: relate por classe e grupo, nunca por pessoa, e use o mínimo de dados.

**8. Acompanhe o lead time de substituição como um serviço.** Meça quanto tempo uma pessoa leva para obter um dispositivo funcionando após uma falha ou perda e inclua os passos: relato, aprovação, estoque, imagem, entrega e transferência. O 85º percentil diz como são ruins os casos azarados. Corrija primeiro o passo mais lento.

### Gira bem os dispositivos

**9. Gira os dispositivos de forma central e consistente.** A [gestão de dispositivos móveis](https://en.wikipedia.org/wiki/Mobile_device_management) e ferramentas semelhantes permitem inscrever, configurar, atualizar e apagar dispositivos remotamente, o que reduz o trabalho manual e o risco. Use-as para manter exato o registro, para enviar atualizações com cuidado com o foco das pessoas e para apoiar a resposta a dispositivos perdidos.

**10. Faça do descarte seguro um processo definido.** Siga uma norma reconhecida para higienizar mídias, como a orientação publicada pelo National Institute of Standards and Technology dos Estados Unidos, ou o equivalente na sua jurisdição. Registre o método, a data e a evidência de cada dispositivo e use parceiros certificados para destruição e reciclagem. Um passo de descarte sem evidência é uma lacuna.

**11. Prefira a reutilização e depois a reciclagem.** Onde os dispositivos ainda funcionam, redistribua-os internamente, doe-os por um parceiro aprovado ou revenda-os depois de apagados. Use recicladores certificados para o resto. Meça a proporção dos dispositivos aposentados que vão para cada canal e os motivos dos que vão direto para o lixo. As regulamentações sobre lixo eletrônico variam por jurisdição e são aplicadas; por isso envolva seus colegas do jurídico e da sustentabilidade.

**12. Reveja o ciclo de vida com as pessoas que o usam.** Uma vez por trimestre, reúna finanças, segurança, compras, a central de serviços e alguns usuários para olhar idade, falha, lead time e descarte. Pergunte o que está funcionando e o que irrita as pessoas. Isso é colaboração contínua em torno do ambiente de trabalho e mantém realista o plano.

## Vetores de manipulação e barreiras de proteção

| Métrica | Como é manipulada | Métrica ou prática de barreira associada |
| --- | --- | --- |
| Perfil de idade | Substituir dispositivos saudáveis para baixar a média; excluir dispositivos velhos reclassificando-os como reserva | Taxa de falha por faixa de idade; parcela de dispositivos ociosos; revisão da reclassificação |
| Taxa de renovação no prazo | Alargar a janela planejada; adiar datas planejadas editando o plano | Mudanças do plano registradas com motivos; comparar com a falha e o feedback dos usuários |
| Taxa de falha por modelo | Codificar falhas como dano do usuário ou falha de software; atrasar os registros de reparos | Amostrar a codificação de falhas; comparar os registros de reparos com os de incidentes |
| Parcela de dispositivos ociosos | Contar atividade de fundo programada como uso; reatribuir dispositivos ociosos a usuários fantasmas | Usar o login humano como sinal de atividade; conferir atribuições por amostragem |
| Lead time de substituição | Parar o relógio no despacho; encerrar a requisição antes de o usuário ter um dispositivo funcionando | O relógio termina na confirmação do usuário; pesquisa das substituições recentes |
| Conclusão do descarte seguro | Registrar o apagamento sem evidência; certificados não casados com números de série | Casar os certificados com os números de série; auditar uma amostra com o parceiro de descarte |
| Taxa de reutilização e reciclagem | Contar como reciclados dispositivos enviados a um intermediário com tratamento posterior desconhecido | Exigir parceiros certificados e relato do tratamento posterior; auditorias por amostragem |

Uma leitura saudável é um perfil de idade com uma cauda velha fina, taxas de falha que orientam as compras, tempos de substituição curtos, evidência de descarte completa e uma parcela decrescente de equipamento indo para o lixo.

## Compensações: vantagens e desvantagens

| Abordagem | Ponto forte | Ponto fraco |
| --- | --- | --- |
| Renovação em ciclo fixo | Orçamento previsível e regras simples | Substitui dispositivos que estão bem; cria um grande pico de trabalho |
| Renovação contínua em lotes | Custo e carga de trabalho suaves; aprende entre lotes | Exige bons dados e disciplina |
| Rodar até falhar | Menor custo de compra | Atrapalha as pessoas; custo não planejado; risco de segurança de sistemas velhos |
| Vida planejada curta | Mais novos, mais rápidos, mais bem apoiados | Maior custo e mais desperdício |
| Vida planejada longa | Menor custo e menos desperdício | Mais falhas e exposição de segurança na cauda |
| Reparo e reutilização internos | Mantém os dispositivos em uso; menos desperdício | Exige habilidades e peças |
| Descarte terceirizado | Tratamento especializado | Exige supervisão da cadeia posterior |

A resposta pragmática é renovar continuamente em pequenos lotes, com base em idade, falha e necessidade, reparar e reutilizar onde serve às pessoas e manter a cadeia de descarte em um padrão que você consiga evidenciar.

## Perguntas para discutir com sua equipe

**1. Como é o quadro de idade e de falha dos nossos dispositivos, e quem tem os mais velhos?**
Mostrem a distribuição de idade e a taxa de falha por faixa. Olhem quem guarda os dispositivos mais velhos e se são as pessoas que mais precisam de equipamento confiável. O facilitador deve perguntar o que a equipe mudaria na ordem de renovação com base no quadro.

**2. Quanto tempo leva para alguém obter um dispositivo funcionando depois que o seu quebra?**
Rastreiem as três últimas substituições do relato até um dispositivo funcionando. Anotem as esperas. Perguntem qual passo poderia ser removido ou automatizado. Combinem uma mudança e um modo de medir o efeito.

**3. Quais modelos nos dão mais trabalho, e como sabemos?**
Listem os modelos com as maiores taxas de falha ou de tickets. Conferam se a amostra é grande o bastante para julgar. Perguntem como os achados influenciam a próxima compra. Se não influenciam, decidam como devolvê-los às compras.

**4. O que faríamos se um dispositivo aposentado aparecesse com dados nele?**
Percorram o caminho do descarte e a evidência guardada em cada passo. Perguntem onde está o elo mais fraco e quem verifica o parceiro posterior. Combinem uma conferência por amostragem da evidência de descarte no próximo trimestre.

**5. Onde o nosso equipamento está ocioso, e por quê?**
Olhem os dispositivos sem uso em 60 dias e as reservas. Perguntem se devem ser reatribuídos, aposentados ou mantidos. A conversa também revela descompassos entre o que as pessoas receberam e o que precisam.

**6. O que seria preciso para reutilizar ou reparar mais do que aposentamos?**
Listem as barreiras: habilidades, peças, política ou parceiros. Perguntem como seria um piloto com uma classe de dispositivos e como seria medido. Incluam as perspectivas de sustentabilidade e de finanças.

## Quatro perspectivas

### Equipes de produto e entrega

As equipes de entrega dependem de máquinas e dispositivos de teste confiáveis e sentem diretamente builds lentos e notebooks que falham. Devem sinalizar o equipamento que as atrasa, participar da escolha de modelos para seus papéis e esperar um caminho rápido de substituição. As equipes que testam em dispositivos físicos, como telefones, devem tratar esses dispositivos como ativos com responsáveis e um plano de renovação.

### Equipes de serviço e operações

As equipes de operações conduzem a cadeia de suprimentos: compra, recebimento, imagem, implantação, reparo e descarte. Devem manter atuais os registros, observar os padrões de falha, manter um estoque de reserva sensato e guardar a evidência de descarte. Carregam o trabalho físico, e sua capacidade limita a rapidez da renovação.

### Liderança e governança

Os líderes querem custo previsível, baixo risco e uma história de sustentabilidade. Devem financiar a renovação constante, pedir dados de idade e de falha no lugar de uma simples idade média e exigir evidência de descarte. A governança deve conferir se as obrigações ambientais e de proteção de dados são cumpridas e se o plano é revisto conforme as condições mudam.

### Clientes e usuários

Os usuários querem um dispositivo que funcione, substituído depressa quando não funciona. Também são donos de parte do resultado: relatar cedo os problemas, devolver o equipamento e avisar a TI quando se mudam. A visão deles sobre o equipamento e sobre o processo de substituição é o feedback mais direto disponível. Envolva-os na escolha de modelos para seu trabalho.

## Na prática: um exemplo de gestão de serviços

O departamento de TI de um governo de condado apoia 3.800 funcionários em 40 locais, com uma mistura de dispositivos de escritório, de campo e compartilhados. Os números abaixo são ilustrativos.

A cada quatro anos o condado substituía todos os notebooks em uma única compra, e o último ciclo terminou com um pico de falhas no ano anterior à substituição e meses de trabalho de imagem no ano dela. O gerente de ativos propõe uma renovação constante e monta um quadro a partir do registro e dos registros de reparos. A idade mediana dos notebooks é de 3,2 anos e o 85º percentil é de 5,1 anos. As falhas por 100 notebooks por ano sobem de cerca de 6 nos dispositivos com menos de três anos para cerca de 19 nos com mais de cinco. Um modelo comprado em um único lote mostra 24 falhas por 100 por ano aos dois anos de idade, causadas por um defeito de bateria. A mediana do lead time de substituição é de 5 dias, com um 85º percentil de 12 dias, sobretudo esperando a imagem. A parcela de dispositivos ociosos é de 7%, sobretudo reservas e dispositivos de funcionários em licença longa. Dos 410 notebooks aposentados no ano passado, 366 têm um certificado de apagamento registrado, uma taxa de conclusão de 89%, e 12% foram para um reciclador sem relato do tratamento posterior.

A equipe faz quatro mudanças. Passa a uma renovação trimestral de cerca de 6% dos notebooks, ordenada por idade e histórico de falhas, com o pessoal de campo e os dispositivos mais velhos primeiro. Negocia com o fornecedor o lote defeituoso pela garantia. Mantém um estoque de reserva de 2% do parque, pré-carregado com a imagem padrão, o que reduz a espera pela imagem. Exige um certificado casado com o número de série para todo dispositivo descartado e passa a um reciclador que relata o tratamento posterior. Começa também um pequeno piloto para recondicionar e redistribuir dispositivos com menos de quatro anos.

Dois trimestres depois, o 85º percentil do lead time de substituição é de 4 dias, a parcela de dispositivos com mais de cinco anos caiu de 22% para 13%, a conclusão da evidência de descarte é de 99% e a taxa de reutilização e reciclagem por canais aprovados é de 94%. O escritório financeiro pede uma meta única para a idade média dos dispositivos, e o gerente de ativos propõe acompanhar juntos o perfil de idade e a taxa de falha, explicando que uma baixa idade média pode ser comprada substituindo dispositivos saudáveis. A decisão é registrada no registro de decisões, com uma revisão em seis meses.

## Ágil, IA, automação e análise

### Ágil

Planeje a renovação como um fluxo constante e reveja os dados de idade e de falha com os usuários regularmente. O cuidado é que uma idade de substituição rígida desperdiça dispositivos que funcionam e aperta os orçamentos.

### IA

As funcionalidades de IA podem elevar os requisitos de hardware, por exemplo para modelos locais, o que muda o momento da renovação. Acompanhe a falha e a idade a partir dos seus próprios dados e acrescente uma medida de dispositivos que não conseguem rodar as ferramentas de que as pessoas precisam. O cuidado é que as alegações de fornecedores sobre hardware "pronto para IA" devem ser testadas contra as suas próprias cargas de trabalho.

### Automação

Automatize os eventos do ciclo de vida, como datas de garantia e passos de descarte, e meça a automação pelos eventos perdidos. O cuidado é que fluxos automáticos de apagamento e descarte precisam de prova de conclusão; por isso audite uma amostra.

### Análise

Mostre o perfil de idade e as taxas de falha por modelo com contagens. A decisão informada é quanto renovar a cada período. O cuidado é que as taxas de falha de frotas pequenas são ruidosas; por isso evite conclusões de um punhado de dispositivos.

## Olhar setorial

**Startup.** Os dispositivos são comprados conforme a necessidade e muitas vezes por quem os usará. Mantenha uma lista simples com datas de compra, apague os dispositivos na saída da pessoa e evite comprar demais. Use cedo uma ferramenta de inscrição gerenciada, pois é mais barato que remendar depois.

**Pequena empresa.** O custo de um dispositivo que falha recai sobre poucas pessoas. Mantenha um ou dois reservas, registre as datas de garantia e tenha uma rotina de apagamento e descarte. Recicladores e recondicionadores locais podem ser bons parceiros. Uma lista de verificação de descarte de três linhas vale mais que nenhuma.

**Grande empresa.** A escala torna importantes o comportamento de lotes e a gestão de fornecedores. Use os dados de falha para negociar com os fornecedores, padronize poucos modelos por classe e conduza uma renovação contínua com apoio logístico. Alinhe com o relato de sustentabilidade, já que o hardware muitas vezes domina a pegada da TI.

**Governo e setor público.** As compras, a retenção de registros e a rigorosa proteção de dados moldam o ciclo de vida. Documente a higienização conforme uma norma reconhecida, guarde a evidência de descarte pelo período exigido e considere compromissos públicos de sustentabilidade e reparo. Os órgãos públicos podem ter de relatar o lixo eletrônico (veja o tópico 8.3, Métricas de conformidade e auditoria).

## Business case: motivações, ROI e TCO

Os custos são o esforço de cruzar os dados do registro, dos reparos e dos endpoints; alguma ferramenta de gestão de dispositivos, se ainda não existir; o estoque de reserva; e o trabalho de processo do descarte com evidência. As economias e os benefícios aparecem em menos falhas disruptivas, um orçamento mais suave, menos equipamento desperdiçado e menor risco de um incidente de dados.

Construa o argumento com os seus próprios dados. Compare o custo de manter um dispositivo além de sua vida planejada, incluindo o esforço de suporte e o tempo de trabalho perdido por falha, com o custo de substituí-lo antes. Compare o custo do estoque de reserva com os dias de trabalho perdido economizados por falha. Conte o número de dispositivos aposentados sem evidência de apagamento e o custo de um único incidente de dados que se seguiria. Evite citar vidas médias de dispositivos ou cifras de lixo eletrônico de fontes publicadas sem conferir seu método e sua data. O custo total de propriedade reúne essas partes (veja o tópico 7.5, Custo de serviço e economia unitária), e o [custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership) completo de um dispositivo inclui compra, suporte, energia, perturbação e descarte.

## Antipadrões e armadilhas

- **Substituir tudo pelo calendário.** Desperdiça dispositivos que funcionam e cria um pico de carga de trabalho. Use idade, falha e necessidade.
- **Rodar até falhar.** O custo não planejado e a perturbação superam a economia. Observe a cauda de idade.
- **Usar a idade média como meta.** Pode ser cumprida substituindo dispositivos saudáveis. Mostre o perfil e a taxa de falha.
- **Confiar nos números de confiabilidade dos fabricantes.** O seu uso é diferente. Use os seus próprios dados de falha.
- **Descartar sem evidência.** Um apagamento sem registro é um risco que você não consegue mostrar que geriu.
- **Enviar dispositivos ao reciclador mais barato.** O tratamento posterior importa. Use parceiros certificados.
- **Rastrear pessoas pelos dispositivos.** Relate por classe e grupo, e nunca por indivíduo.
- **Ignorar reparo e reutilização.** Manter o equipamento em serviço é mais barato e mais gentil com o ambiente.

## Modelo de maturidade

| Dimensão | 1 Iniciar | 2 Desenvolver | 3 Padronizar | 4 Gerenciar | 5 Orquestrar |
| --- | --- | --- | --- | --- | --- |
| Planejamento | Comprar quando quebra | Renovação periódica pelo calendário | Vida planejada por classe; renovação constante em lotes | Renovação cronometrada por idade, falha e necessidade; reservas dimensionadas a partir de dados | Renovação coordenada com fornecedores, finanças e metas de sustentabilidade entre locais |
| Aprender com os dados | Sem registros de falha | Registros de reparos mantidos | Taxa de falha por modelo e idade acompanhada | Os achados mudam as compras e o momento; lead time gerido | Dados de falha e de uso compartilhados com fornecedores para melhorar o projeto e os termos |
| Saída | Os dispositivos desaparecem | Apagamento informal | Processo de descarte com evidência para todo dispositivo | Evidência auditada; reutilização e reciclagem acompanhadas | Práticas circulares com parceiros certificados e relato público |

## Lista de verificação

- [ ] As classes de dispositivos e as vidas planejadas estão definidas, com a justificativa registrada.
- [ ] Existe um plano de renovação constante, revisto com as finanças.
- [ ] O perfil de idade, a taxa de falha por modelo e o lead time de substituição são relatados.
- [ ] Um estoque de reserva é dimensionado a partir de dados de falha e de contratação.
- [ ] Os dispositivos ociosos são identificados por classe, com regras de privacidade em vigor.
- [ ] As reivindicações de garantia e os reparos são registrados e usados nas decisões de compra.
- [ ] Todo dispositivo aposentado tem um método de higienização e evidência registrados.
- [ ] Os parceiros de descarte são certificados e relatam o tratamento posterior.
- [ ] As taxas de reutilização e reciclagem são acompanhadas.
- [ ] Uma revisão trimestral inclui finanças, segurança, compras, a central de serviços e usuários.

## Prompts de IA

**Analise dados de falha por modelo e idade.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Projete um plano de renovação contínua.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Revise um processo de descarte.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Reduza o lead time de substituição.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## Skills de IA

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): use para encontrar a barreira de proteção pareada de uma métrica de ciclo de vida de hardware.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): use para conferir se uma entrada de métrica de hardware traz seu vetor de manipulação, sua barreira de proteção e sua regra de evidência.

## Ideias-chave

- Renove continuamente uma parcela constante de dispositivos, usando os seus próprios dados de idade, falha e uso.
- Olhe a distribuição de idade e a falha por modelo, e não a média.
- Mantenha rápida a substituição com um estoque de reserva e um caminho curto e medido.
- Trate o descarte seguro com evidência como o fim do ciclo de vida e prefira o reparo, a reutilização e a reciclagem certificada.
- Relate por classe de dispositivo e grupo e nunca rastreie indivíduos por meio de seu equipamento.
- Reveja o ciclo de vida com finanças, segurança, compras e usuários juntos.

## Referências e leituras complementares

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Taxa de falha](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Tempo médio entre falhas](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Lixo eletrônico](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Apagamento de dados](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Economia circular](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Lei de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciação](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Garantia](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Gestão de dispositivos móveis](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Custo total de propriedade](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
