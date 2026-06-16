# User Journey vs. User Flow: Diferenças, Aplicações e Contextos de Uso no Desenvolvimento de Software

## Introdução

No desenvolvimento de produtos digitais, compreender a experiência do usuário é fundamental para criar soluções eficientes, acessíveis e satisfatórias. Nesse contexto, duas ferramentas amplamente utilizadas no design de Experiência do Usuário (UX) são o **User Journey** e o **User Flow**.

Embora possuam objetivos relacionados e sejam frequentemente utilizadas em conjunto, essas ferramentas abordam aspectos distintos da interação entre usuário e produto. Entender suas diferenças é essencial para evitar retrabalho, melhorar a comunicação entre designers e desenvolvedores e garantir que as soluções atendam às necessidades reais dos usuários.

De forma resumida, o **User Journey** concentra-se na experiência ampla do usuário, considerando emoções, motivações e contexto ao longo do tempo. Já o **User Flow** foca nos passos técnicos e na navegação dentro do sistema, detalhando como o usuário realiza uma tarefa específica.

Uma prática recomendada é iniciar o processo pela compreensão da jornada do usuário e, posteriormente, aprofundar a análise por meio da construção dos fluxos de interação.

## User Journey: Compreendendo a Experiência Holística

O **User Journey**, ou jornada do usuário, é uma representação visual e estratégica da experiência completa de uma pessoa ao interagir com um produto, serviço ou marca.

Essa jornada começa quando o usuário identifica uma necessidade e pode se estender até o período posterior ao uso da solução. Seu principal objetivo é compreender o comportamento humano em um contexto amplo, considerando emoções, pensamentos, expectativas, motivações e dificuldades encontradas ao longo do percurso.

Diferentemente de ferramentas centradas na interface, o User Journey inclui acontecimentos que ocorrem fora do ambiente digital, permitindo uma visão holística da experiência.

O User Journey busca responder perguntas como:

* O que o usuário está tentando alcançar?
* O que ele pensa durante a experiência?
* Como ele se sente em cada etapa?
* Quais obstáculos encontra ao longo do caminho?
* Onde existem oportunidades de melhoria?

Essa abordagem ajuda as equipes a identificar lacunas nos serviços oferecidos, alinhar diferentes áreas da organização e descobrir oportunidades de inovação.

### Anatomia de um User Journey Map

Um mapa de jornada eficiente geralmente é organizado em faixas horizontais que representam diferentes dimensões da experiência.

As principais são:

#### 1. Fases

Representam as etapas cronológicas da experiência.

Exemplos:

* Descoberta;
* Consideração;
* Uso;
* Retenção;
* Fidelização.

#### 2. Ações

Descrevem o que o usuário faz em cada fase.

Exemplos:

* Pesquisa informações na internet;
* Clica em um anúncio;
* Compara alternativas;
* Realiza uma compra;
* Compartilha sua experiência.

#### 3. Pensamentos

Apresentam as dúvidas, expectativas e reflexões do usuário.

Exemplos:

* "Será que esse site é confiável?"
* "Esse produto atende às minhas necessidades?"
* "Vale a pena continuar usando?"

#### 4. Sentimentos

Representam a curva emocional da jornada.

Exemplos:

* Ansiedade;
* Frustração;
* Confiança;
* Satisfação;
* Alívio.

Mapear as emoções ajuda a identificar pontos críticos e momentos decisivos da experiência.

#### 5. Oportunidades

Reúnem ideias e iniciativas para melhorar cada etapa da jornada.

Exemplos:

* Simplificar o cadastro;
* Melhorar mensagens de confirmação;
* Oferecer suporte contextual;
* Criar programas de fidelidade.

### Exemplo de User Journey

Considere uma usuária chamada Ana que deseja comprar um par de sapatos.

Sua jornada pode ser representada da seguinte forma:

* Percebe a necessidade de adquirir um novo produto;
* Pesquisa opções e preços;
* Compara avaliações;
* Realiza a compra;
* Recebe o produto antes do prazo;
* Compartilha uma avaliação positiva.

Ao longo dessa jornada, Ana experimenta diferentes emoções que influenciam suas decisões e sua percepção sobre a marca.

## User Flow: Mapeando a Navegação e as Tarefas

O **User Flow**, ou fluxo do usuário, é uma representação visual dos passos que uma pessoa realiza dentro de uma interface para alcançar um objetivo específico.

Enquanto o User Journey possui uma visão ampla e estratégica, o User Flow atua como um "zoom" em um ponto específico da experiência, detalhando a navegação entre telas, funcionalidades e decisões tomadas durante a execução de uma tarefa.

Seu principal objetivo é responder perguntas como:

* Como o usuário realiza determinada tarefa?
* Quais passos são necessários para atingir um objetivo?
* Onde podem ocorrer erros ou abandonos?
* Como otimizar a navegação?

O User Flow permite identificar gargalos, reduzir a complexidade das interações e alinhar o funcionamento do sistema com as expectativas dos usuários.

### Elementos e Simbologia Padrão

Para facilitar a comunicação entre designers e desenvolvedores, os fluxos utilizam símbolos universalmente reconhecidos.

| Símbolo     | Significado            | Exemplo                                   |
| ----------- | ---------------------- | ----------------------------------------- |
| ⚪ Círculo   | Início ou fim do fluxo | Entrada no sistema ou conclusão da tarefa |
| ⬜ Retângulo | Tela ou página         | Login, Dashboard, Carrinho                |
| 🔷 Losango  | Decisão ou condição    | "O login é válido?"                       |
| ➡️ Seta     | Direção do fluxo       | Indica o próximo passo                    |

### Exemplo de User Flow

Considere o fluxo de compra em um aplicativo de marketplace:

Início → Tela inicial → Pesquisa de produto → Seleção de item → Carrinho → Checkout → Pagamento → Confirmação de compra.

Em pontos específicos, podem existir decisões:

* O usuário está autenticado?
* O pagamento foi aprovado?
* O produto está disponível em estoque?

Caso alguma condição não seja atendida, o fluxo apresenta caminhos alternativos para resolução do problema.

## Comparativo entre User Journey e User Flow

Embora sejam complementares, as duas ferramentas possuem objetivos distintos.

| Característica      | User Journey                                | User Flow                                |
| ------------------- | ------------------------------------------- | ---------------------------------------- |
| Objetivo            | Entender a experiência e as emoções         | Entender a navegação e as tarefas        |
| Foco                | Contexto e comportamento humano             | Interação com a interface                |
| Conteúdo            | Pensamentos, sentimentos e contexto externo | Telas, botões, validações e erros        |
| Nível de detalhe    | Baixo a médio                               | Alto                                     |
| Escopo              | Antes, durante e depois do uso              | Durante o uso do sistema                 |
| Perguntas-chave     | "Como o usuário se sente?"                  | "Como o usuário executa a tarefa?"       |
| Principais usuários | Product Managers e UX Researchers           | Designers de Interface e Desenvolvedores |

Em termos práticos, o User Journey explica o **porquê** da experiência, enquanto o User Flow detalha **como** ela acontece.

## Quando Utilizar Cada Ferramenta

A escolha entre User Journey e User Flow depende da etapa do projeto.

### Fase de Descoberta

Durante a pesquisa com usuários e a definição de personas, recomenda-se utilizar o User Journey.

Essa ferramenta ajuda a:

* Compreender necessidades reais;
* Identificar oportunidades;
* Mapear dores e expectativas;
* Entender o contexto de uso.

### Fase de Definição e Desenvolvimento

Quando os requisitos já estão definidos e a equipe precisa detalhar o funcionamento do sistema, utiliza-se o User Flow.

Essa ferramenta auxilia na:

* Definição de regras de negócio;
* Estruturação da navegação;
* Identificação de exceções;
* Validação de requisitos funcionais.

Uma boa prática consiste em seguir a seguinte sequência:

**Personas → User Journey → User Flow → Protótipos → Desenvolvimento**

## Usabilidade e Acessibilidade nos Fluxos

A qualidade da experiência do usuário depende não apenas da eficiência dos fluxos, mas também da adoção de boas práticas de usabilidade e acessibilidade.

Entre as principais recomendações destacam-se:

* Exibir mensagens de erro claras e orientadas à solução;
* Permitir revisão e correção de informações antes do envio;
* Evitar modais desnecessários e interrupções abruptas;
* Garantir navegação completa por teclado;
* Manter foco visual em todos os elementos interativos;
* Organizar a ordem de navegação de forma lógica;
* Assegurar que menus e submenus sejam acessíveis sem o uso do mouse.

Em outras palavras, se uma funcionalidade não pode ser utilizada por meio do teclado, ela não pode ser considerada plenamente acessível.

## Ferramentas Recomendadas

Diversas plataformas auxiliam na criação desses artefatos.

### Para User Journey

* Miro;
* Mural;
* FigJam.

Essas ferramentas favorecem atividades colaborativas e a organização de ideias em formato visual.

### Para User Flow

* Figma;
* Lucidchart;
* Draw.io.

São opções adequadas para a construção de fluxos detalhados e alinhados às necessidades técnicas do projeto.

## Referências Bibliográficas

BABICH, Nick. Sitemaps & User Flows. Adobe XD Ideas, 2019.

KAPLAN, Kara. When and How to Create Customer Journey Maps. Nielsen Norman Group, 2016.

NIELSEN NORMAN GROUP. User Journeys vs. User Flows. Disponível em: [https://www.nngroup.com](https://www.nngroup.com).

GARRETT, Jesse James. The Elements of User Experience. 2. ed. Berkeley: New Riders, 2011.
