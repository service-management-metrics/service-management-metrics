# Modelos

Quatro modelos para copiar e adaptar: um estatuto de métricas, um cartão de métrica, uma especificação de painel e uma pauta de revisão. São pontos de partida. Substitua o texto entre colchetes, apague o que não serve e mantenha cada documento em uma página sempre que puder.

## Estatuto de métricas

```text
Estatuto de métricas de [equipe, serviço ou organização]

Propósito
Medimos [serviços e formas de trabalhar] para [melhorar ... / ver ... / decidir ...].
As medidas nos ajudam a ver o nosso próprio trabalho e a melhorá-lo. Não são um
modo de julgar indivíduos.

Para que servem os dados
- Revisões da equipe sobre como o trabalho está indo e o que tentar a seguir.
- Decisões sobre onde investir em serviços, ferramentas e habilidades.
- Relatos que [reguladores/clientes] exigem: [lista, mantida à parte].

Para que os dados nunca serão usados
- Classificar ou comparar indivíduos.
- Avaliações individuais de desempenho, remuneração, promoção ou demissão.
- [Acrescente as preocupações que as suas equipes levantaram.]

Quem vê o quê
- Cada equipe vê primeiro os seus próprios dados e é dona da interpretação.
- [Papel] vê tendências agregadas de serviços e de equipes.
- As visões em nível individual estão desligadas em [ferramentas].

Dados guardados
- [O que é coletado, de quais sistemas, por quanto tempo.]

Contestações
- Qualquer pessoa pode contestar um número. Respondemos em [número] dias úteis.
- Contato: [nome ou grupo].

Quebras
- Relate qualquer uso contrário a este estatuto a [via]. Os resultados são
  publicados sem nomes.

Revisão
- Revemos este estatuto a cada [seis meses] com as equipes.

Assinado: [patrocinador], [representante(s) da equipe]   Data: [data]
```

## Cartão de métrica

```text
Cartão de métrica: [nome da métrica]

Pergunta que responde: [a pergunta que o público fez]
Decisão que informa: [o que alguém poderia fazer de modo diferente]
Definição: [em palavras simples]
Fórmula: [como é calculada]
Unidade: [unidade]   Cadência: [com que frequência]
Regras de relógio ou de fronteira: [quando a contagem começa, para, pausa]
Fonte de dados: [sistema e campo]   Atualização: [intervalo]
Responsável: [papel]   Pessoa a quem perguntar: [nome ou grupo]
Público: [equipe, responsável pelo serviço, liderança]
Nível: [equipe, serviço ou sistema. Nunca um indivíduo.]
Exibição: [mediana e percentil, gráfico de sequência, distribuição]
Linha de base: [período e valor dos nossos próprios dados]
Limites conhecidos: [lacunas, mudanças nos hábitos de entrada, tamanho da amostra]
Vetor de manipulação: [como poderia parecer melhor sem ser melhor]
Barreira de proteção: [métrica ou prática pareada]
Resultado companheiro: [o resultado com o qual deve ser lida]
Tópico relacionado: (veja o tópico [N.M], [Título])
Aposentar quando: [condição]
Última revisão: [data]   Mudanças desde a última revisão: [notas]
```

## Especificação de painel

```text
Especificação de painel: [nome]

Público: [equipe, responsável pelo serviço, liderança]
Responsável: [papel]   Ritmo de revisão: [mensal ou trimestral]   Data da revisão: [data]
Perguntas que responde
1. [pergunta]
2. [pergunta]

Medidas (no máximo cerca de nove)
| Medida | Pergunta | Barreira de proteção companheira | Exibição | Fonte | Atualização |
| [nome] | [n.º] | [nome] | [sparkline / gráfico de sequência / distribuição] | [sistema] | [intervalo] |

Contexto mostrado com cada valor
- Tendência em [período], notas de eventos, vínculo à definição, tamanho da amostra quando pequena.

Cores de status
- [Nenhuma, ou a regra declarada que admite a variação comum.]

Acesso
- [Quem pode ver o quê. Visões em nível individual: desligadas.]

Verificações de qualidade de dados
- [Atualidade, contagens de linhas, reconciliação com a fonte.]

Aposentadoria
- Relatórios substituídos por este painel: [lista] aposentados em [data].
- Medidas a aposentar quando: [condições].

Aprovado pelo público: [nomes ou papéis]   Data: [data]
```

## Pauta de revisão

Uma revisão de equipe de 45 minutos, mensal ou trimestral. É uma conversa sobre o trabalho, conduzida pela equipe.

```text
Revisão de métricas de [equipe], [data]

1. Abertura (5 minutos)
   Como está indo o trabalho? Algo que os números não mostram?

2. Eventos desde a última vez (5 minutos)
   Releases, incidentes, mudanças de pessoal, mudanças de política. Acrescente
   notas à exibição.

3. Tendências e distribuições (15 minutos)
   Para cada medida: o que vemos? É variação comum ou um sinal?
   Leia cada medida com a sua barreira de proteção. Confira a atualidade dos
   dados e as lacunas conhecidas.

4. Decisões (10 minutos)
   O que vamos tentar, parar ou mudar? Registre cada decisão, incluindo uma
   decisão de esperar e observar. Nomeie um responsável e uma data para olhar
   de novo.

5. Últimas decisões (5 minutos)
   As decisões da última vez ajudaram? O que aprendemos?

6. As próprias medidas (5 minutos)
   Qual medida nos confundiu ou enganou? Qual poderíamos aposentar? O que falta?

Registro: decisões, responsáveis, datas, mudanças nas medidas.
Regra: nenhuma comparação de indivíduos. Os números descrevem o sistema.
```
