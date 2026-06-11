# Think Aloud

## Resumo

O método **Think Aloud** é uma técnica consagrada de avaliação de usabilidade em que o participante verbaliza continuamente seus pensamentos enquanto realiza tarefas em um sistema. Originado na psicologia cognitiva e posteriormente formalizado por Ericsson e Simon, e introduzido no contexto de usabilidade por Lewis et al. (1993), esse método fornece um “raio-X” do raciocínio do usuário, revelando expectativas, confusões e julgamentos em tempo real. Entre seus pontos fortes estão o baixo custo e a flexibilidade, bastam participantes representativos, tarefas realistas e gravações do teste.

Essa abordagem foi formalizada por Ericsson e Simon como analysis de protocolo verbal, que distingue três níveis de verbalização: os Níveis 1 e 2 (dados “puros” da memória de curto-prazo, confiáveis) e o Nível 3 (inferências ou informações além do que está na mente imediata, considerados menos confiáveis). Na década de 1990, Clayton Lewis introduziu o método no campo de usabilidade durante seu trabalho na IBM, posteriormente documentado em Task-Centered User Interface Design. Desde então, tornou-se um dos principais métodos de teste de usabilidade. Como resume Nielsen (2012): “testes simples de usabilidade onde usuários pensam em voz alta são baratos, robustos, flexíveis e fáceis de aprender”.

## Variantes

As principais variantes são: Think Aloud Concorrente e Retrógrado, além de métodos híbridos que combinam ambos. Pesquisas demonstram que o TA concorrente tende a gerar mais dados verbais e identificar mais problemas de usabilidade, ao passo que o TA retrógrado produz menos interferência na performance mas perde detalhes e costuma custar mais tempo.

- **TA Concorrente:** o participante fala durante a execução da tarefa. Isso gera rica granularidade de dados verbais em tempo real. A desvantagem é a carga cognitiva, que pode estender o tempo de execução e, em alguns casos, alterar levemente o comportamento natural. Em geral, múltiplos experimentos apontam que o TA concorrente revela mais informações sobre o processo e identifica significativamente mais problemas de usabilidade do que o retrógrado.

- **TA Retrospectivo:** o participante completa as tarefas sem falar e, em seguida, responde a perguntas ou narra sua experiência, geralmente revisando gravações de tela. Isso reduz a interferência no desempenho e pode ser útil quando a fala contínua é muito difícil. Porém, depende da memória e pode esquecer detalhes, pesquisas mostram que o TA retrospectivo produz menos segmentos verbais e identifica muito menos problemas do que o TA concorrente. É comum o TA retrospectivo levar mais tempo devido à necessidade de reprodução e questionamento pós-tarefa.

- **TA Híbrido:** combina fala durante a tarefa e depois detalhes adicionais. Em teoria, poderia captar vantagens de ambos, mas estudos recentes sugerem benefício marginal. Alhadreti & Mayhew (2018) observaram que o híbrido detecta levemente mais problemas que o concorrente, porém a um custo significativamente maior. Assim, para a maioria dos testes de usabilidade convencionais, o TA Concorrente é geralmente mais custo-efetivo, enquanto o TA Retrospectivo só é indicado em situações específicas como tarefas extremamente complexas ou de longa duração.

## Planejamento e Condução de sessões

### Protocolo Passo a Passo

1. **Objetivo e tarefas:** Defina claramente os objetivos do teste, por exemplo "avaliar fluxo de compra, cadastro". Crie cenários realistas e 2–5 tarefas representativas, focando em aspectos-chave como navegação, formulários e outros. Priorize tarefas críticas para a usabilidade, cada tarefa típica leva alguns minutos.

2. **Recrutamento:** Selecione participantes do público-alvo ou usuários típicos. Busque diversidade para cobrir diferentes perspectivas. Idealmente use um critério de inclusão/exclusão claro. Na maioria dos casos, cerca de 5 participantes revelam a maior parte dos problemas principais. 

3. **Material e roteiro:** Prepare um roteiro de moderação. Imprima ou tenha acessíveis os scripts de instruções e as tarefas. Tenha à mão termo de consentimento, questionários, blocos de notas, cronômetro. Configure o sistema ou protótipo que será avaliado.

4. **Configuração técnica e ambiente:** Escolha uma sala silenciosa e bem-iluminada. Ajuste equipamento de gravação: teste microfone, câmera e software de captura de tela antes da sessão. Garanta conexão de internet estável. Providencie cadeiras confortáveis, água e chás ou cafés, evitando que intervenham no teste. Sempre tenha backup de gravação para evitar perda de dados.

5. **Consentimento e instruções iniciais:** Receba o participante com cordialidade. Leia e entregue o termo de consentimento explicando o propósito do teste, que será gravado áudio/vídeo/tela, que pode recusar ou interromper a qualquer momento, e garanta anonimato dos dados. Após assinatura, reforce que não há respostas certas ou erradas, o interesse é o seu comportamento natural e opinões sinceras. Use um exemplo prático para demonstrar o que significa “pensar em voz alta”.

6. **Execução das tarefas:**Dê a primeira tarefa ao participante. Fique em silêncio máximo, observando e anotando comportamentos. Tome notas rápidas se algo relevante surgir, mas não interrompa. Se o participante ficar quieto por ~10–15 segundos, use prompts neutros como “Continue falando, por favor” ou “O que você está pensando?”. Evite perguntas dirigidas que sugiram respostas. Após cada tarefa, solicite ao participante que resuma o que fez ou pergunte sobre pontos confusos, mas antes de dar qualquer dica sobre possíveis problemas.

7. **Debriefing:** Ao final das tarefas, pergunte sobre a experiência geral: o que gostou, onde encontrou maiores dificuldades, sugestões. Isso pode revelar aspectos que o TA não capturou. Agradeça pela participação e explique os próximos passos.

8. **Análise:** Transcreva as gravações. Nos primeiros testes, recomenda-se transcrição completa, nos demais, pode-se focar nas partes novas ou nos obstáculos reportados. Marque pausas longas, risos ou silêncios significativos. Utilize um esquema de codificação: por exemplo, rotule falas como comentário positivo, comentário negativo, dúvida, descrição de ação e outros. Em seguida, agrupe as falas por temas emergentes como “navegação confusa” e “botões pouco claros”. Isso ajuda a identificar quais problemas são recorrentes e de maior gravidade. Registre métricas: taxa de sucesso em cada tarefa, tempo gasto desde o início até a conclusão ou abandono, e taxa de erros número de tentativas, cliques equivocados e interrupções por ajuda. 

9. **Iteração:** Apresente os achados à equipe de design com evidências para validar problemas. Corrija o protótipo e repita o teste em ciclos. De acordo com Nielsen, após cerca de 5 usuários os problemas mais críticos emergem. Novas rodadas são feitas se forem adicionadas funcionalidades ou se surgir a necessidade de confirmar soluções.

## Considerações Éticas e Termo de Consentimento

A ética no Think Aloud requer informar claramente o participante sobre a natureza do estudo e garantir voluntariedade. Recomenda-se um Termo de Consentimento Livre e Esclarecido, incluindo: propósito do teste; duração aproximada, descrição da gravação de áudio/vídeo/tela, que não há riscos nem recompensas diretas, que a participação é voluntária e pode ser encerrada a qualquer momento, e o destino confidencial dos dados, uso apenas para análise interna, sem divulgação de dados pessoais. Solicite assinatura antes de começar. Lembre-se de que o participante deve autorizar explicitamente a gravação.

## Métodos Tecnicos

### Métodos de Captura de Dados

- Áudio: Gravação do que o participante fala. Fundamental para transcrição fiel dos pensamentos, use microfone de lapela ou de mesa de boa qualidade.
- Vídeo: Filmagem do participante, pois permite observar expressões faciais e postura, possivelmente sinalizando frustração ou dúvidas não verbalizadas. Para testes remotos, webcams ou software de videoconferência são suficientes.
- Gravação de tela: Registra todas as interações do usuário como cliques, movimentos e navegação. Essencial para contextualizar cada fala no fluxo de uso. Use ferramentas de captura de tela ou gravação de sessão.
- Logs de eventos: Sempre que possível, salve registros automáticos por exemplo, logs de servidor ou analytics do aplicativo, para complementar observações qualitativas. Esses logs podem fornecer métricas de uso reais que corroborem o relato do usuário.

Conforme boas práticas, combine múltiplos registros: áudio, vídeo e tela simultaneamente. Certifique-se de testar os equipamentos e de haver espaço de armazenamento suficiente. Tenha um sistema de backup por exemplo, gravar áudio em dois dispositivos para evitar perda de dados. Por fim, reveja antes do participante entrar: inicie a gravação e confirme se tudo está sendo capturado.

### Transcrição e Codificação

Após a sessão, transcreva as gravações. Idealmente, produza transcrição “verbatim” (o que foi dito) incluindo interrupções, pausas longas ou risos. Marque segmentos de silêncio (….) e anote falhas de entendimento (ex.: “[inaudível]” se algo não ficou claro). Nos primeiros testes, transcreva integralmente. Em rodadas seguintes, pode-se transcrever apenas novas observações ou parte relevante para economizar tempo, contanto que não se perca informação crítica.

### Análise de Dados

Combine análises qualitativas e quantitativas. Os verbatims e categorias identificam o quê e por quê dos problemas, as métricas objetivas incluem:

- Taxa de sucesso: proporção de tarefas completadas corretamente. O TA permite verificar verbalmente se o usuário entendeu o que fazer ou abandonou a tarefa.
- Tempo na tarefa: duração desde o início até a conclusão ou desistência. Em média, pensar em voz alta tende a aumentar o tempo em ~15–30%, mas experimentos sugerem que isso não afeta a eficiência geral.
- Taxa de erros: número de cliques incorretos, tentativas inválidas ou interrupções pelo moderador. Se for possível registrar erros por logs ou observação, isso quantifica diretamente as dificuldades relatadas.

Para cada métrica, compare contra benchmarks relevantes ou entre versões do sistema. Os dados de áudio/screen ajudam a esclarecer por que houve erros ou atrasos.